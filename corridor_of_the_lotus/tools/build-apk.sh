#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${PROJECT_DIR}"

BUILD_MODE="${1:-debug}" # debug | release
OUT_DIR="${PROJECT_DIR}/dist/android"
mkdir -p "${OUT_DIR}"

echo "=== [蓮島迴廊] Android APK 打包管線 (${BUILD_MODE}) ==="

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR] 找不到 Node.js，請先安裝 Node.js >= 18。" >&2
  exit 1
fi

echo "[1/5] 編譯單檔離線 HTML 並生成行動端 www/ 資產..."
node tools/build-single-html.mjs
node tools/stage-mobile-www.mjs

if ! command -v npx >/dev/null 2>&1; then
  echo "[ERROR] 找不到 npx，請確認 npm 已正確安裝。" >&2
  exit 1
fi

if ! node -e "require.resolve('@capacitor/cli')" >/dev/null 2>&1; then
  echo "[INFO] 尚未在本目錄安裝 Capacitor 依賴，請執行："
  echo "  cd \"${PROJECT_DIR}\" && npm install --no-save @capacitor/core @capacitor/cli @capacitor/android"
  echo "[TIP] 若本機無 Android SDK，亦可使用 github-workflows/build-apk-ipa.yml 雲端打包。"
  exit 2
fi

if ! command -v java >/dev/null 2>&1; then
  echo "[ERROR] 找不到 Java (JDK 17+)。請安裝 Temurin / OpenJDK 17 以上版本。" >&2
  exit 3
fi

ANDROID_SDK="${ANDROID_HOME:-${ANDROID_SDK_ROOT:-}}"
if [[ -z "${ANDROID_SDK}" || ! -d "${ANDROID_SDK}" ]]; then
  for candidate in "${HOME}/Library/Android/sdk" "${HOME}/Android/Sdk" "/usr/local/share/android-sdk"; do
    if [[ -d "${candidate}" ]]; then
      ANDROID_SDK="${candidate}"
      export ANDROID_HOME="${candidate}"
      export ANDROID_SDK_ROOT="${candidate}"
      break
    fi
  done
fi

if [[ -z "${ANDROID_SDK}" || ! -d "${ANDROID_SDK}" ]]; then
  echo "[ERROR] 找不到 Android SDK (ANDROID_HOME / ANDROID_SDK_ROOT 未設定)。" >&2
  echo "請安裝 Android Studio / Command-line Tools，或改用 github-workflows/build-apk-ipa.yml 在 GitHub Actions 雲端產出 APK。" >&2
  exit 4
fi

echo "[2/5] 檢查與初始化 Capacitor Android 專案..."
if [[ ! -d "${PROJECT_DIR}/android" ]]; then
  npx cap add android
fi

echo "[3/5] 同步 www/ 網頁資產與圖示至 Android 專案..."
npx cap sync android

# 同步 PWA 圖示至 Android res/mipmap 預設圖示（若存在）
RES_DRAWABLE="${PROJECT_DIR}/android/app/src/main/res/drawable"
if [[ -d "${RES_DRAWABLE}" && -f "${PROJECT_DIR}/www/icons/icon-512.png" ]]; then
  cp "${PROJECT_DIR}/www/icons/icon-512.png" "${RES_DRAWABLE}/lotus_icon.png"
fi

echo "[4/5] 執行 Gradle 建置 APK..."
pushd "${PROJECT_DIR}/android" >/dev/null
chmod +x ./gradlew
if [[ "${BUILD_MODE}" == "release" ]]; then
  ./gradlew assembleRelease
  APK_SRC="app/build/outputs/apk/release/app-release-unsigned.apk"
  if [[ -f "app/build/outputs/apk/release/app-release.apk" ]]; then
    APK_SRC="app/build/outputs/apk/release/app-release.apk"
  fi
  APK_DEST="${OUT_DIR}/corridor-of-the-lotus-release.apk"
else
  ./gradlew assembleDebug
  APK_SRC="app/build/outputs/apk/debug/app-debug.apk"
  APK_DEST="${OUT_DIR}/corridor-of-the-lotus-debug.apk"
fi
popd >/dev/null

if [[ ! -f "${PROJECT_DIR}/android/${APK_SRC}" ]]; then
  echo "[ERROR] Gradle 未產出預期 APK：${APK_SRC}" >&2
  exit 5
fi

cp "${PROJECT_DIR}/android/${APK_SRC}" "${APK_DEST}"
echo "[5/5] 完成！APK 已輸出至："
echo "  ${APK_DEST}"
