#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${PROJECT_DIR}"

SIGN_MODE="${1:-auto}" # auto | signed | unsigned
OUT_DIR="${PROJECT_DIR}/dist/ios"
ARCHIVE_PATH="${OUT_DIR}/App.xcarchive"
EXPORT_DIR="${OUT_DIR}/export"
IPA_OUT="${OUT_DIR}/corridor-of-the-lotus.ipa"

mkdir -p "${OUT_DIR}"

echo "=== [蓮島迴廊] iOS IPA 打包管線 (${SIGN_MODE}) ==="

if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "[ERROR] iOS .ipa 只能在 macOS + Xcode 環境建置。" >&2
  echo "[TIP] 非 macOS 裝置請使用 github-workflows/build-apk-ipa.yml 在 GitHub macos-latest Runner 雲端打包。" >&2
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "[ERROR] 找不到 Node.js，請先安裝 Node.js >= 18。" >&2
  exit 1
fi

if ! command -v xcodebuild >/dev/null 2>&1; then
  echo "[ERROR] 找不到 xcodebuild，請先從 App Store 安裝 Xcode 並執行 xcode-select。" >&2
  exit 2
fi

echo "[1/5] 編譯單檔離線 HTML 並生成行動端 www/ 資產..."
node tools/build-single-html.mjs
node tools/stage-mobile-www.mjs

if ! node -e "require.resolve('@capacitor/cli')" >/dev/null 2>&1; then
  echo "[INFO] 尚未在本目錄安裝 Capacitor 依賴，請執行："
  echo "  cd \"${PROJECT_DIR}\" && npm install --no-save @capacitor/core @capacitor/cli @capacitor/ios"
  echo "[TIP] 亦可直接使用 github-workflows/build-apk-ipa.yml 雲端打包。"
  exit 3
fi

echo "[2/5] 檢查與初始化 Capacitor iOS 專案..."
if [[ ! -d "${PROJECT_DIR}/ios" ]]; then
  npx cap add ios
fi

echo "[3/5] 同步 www/ 資產至 iOS 專案..."
npx cap sync ios

IOS_APP_DIR="${PROJECT_DIR}/ios/App"
if [[ -f "${IOS_APP_DIR}/Podfile" ]] && command -v pod >/dev/null 2>&1; then
  echo "[INFO] 執行 CocoaPods 安裝..."
  (cd "${IOS_APP_DIR}" && pod install)
fi

WORKSPACE_FLAG=()
if [[ -d "${IOS_APP_DIR}/App.xcworkspace" ]]; then
  WORKSPACE_FLAG=(-workspace "${IOS_APP_DIR}/App.xcworkspace")
elif [[ -d "${IOS_APP_DIR}/App.xcodeproj" ]]; then
  WORKSPACE_FLAG=(-project "${IOS_APP_DIR}/App.xcodeproj")
else
  echo "[ERROR] 找不到 Xcode workspace 或 project：${IOS_APP_DIR}" >&2
  exit 4
fi

HAS_SIGNING_IDENTITY=0
if security find-identity -v -p codesigning 2>/dev/null | grep -qE "Apple Development|iPhone Developer|Apple Distribution|iPhone Distribution"; then
  HAS_SIGNING_IDENTITY=1
fi

USE_SIGNED=0
if [[ "${SIGN_MODE}" == "signed" ]]; then
  USE_SIGNED=1
elif [[ "${SIGN_MODE}" == "auto" && "${HAS_SIGNING_IDENTITY}" -eq 1 && -n "${APPLE_TEAM_ID:-}" ]]; then
  USE_SIGNED=1
fi

rm -rf "${ARCHIVE_PATH}" "${EXPORT_DIR}"

if [[ "${USE_SIGNED}" -eq 1 ]]; then
  echo "[4/5] 使用 Xcode 憑證進行簽名 Archive..."
  xcodebuild \
    "${WORKSPACE_FLAG[@]}" \
    -scheme App \
    -configuration Release \
    -sdk iphoneos \
    -destination 'generic/platform=iOS' \
    -archivePath "${ARCHIVE_PATH}" \
    ${APPLE_TEAM_ID:+DEVELOPMENT_TEAM="${APPLE_TEAM_ID}"} \
    -allowProvisioningUpdates \
    archive

  echo "[5/5] 匯出已簽名 .ipa (ios-export-options.plist)..."
  xcodebuild \
    -exportArchive \
    -archivePath "${ARCHIVE_PATH}" \
    -exportPath "${EXPORT_DIR}" \
    -exportOptionsPlist "${PROJECT_DIR}/ios-export-options.plist" \
    -allowProvisioningUpdates

  GENERATED_IPA="$(find "${EXPORT_DIR}" -maxdepth 2 -name '*.ipa' | head -n 1 || true)"
  if [[ -z "${GENERATED_IPA}" ]]; then
    echo "[ERROR] exportArchive 完成但找不到 .ipa 輸出。" >&2
    exit 5
  fi
  cp "${GENERATED_IPA}" "${IPA_OUT}"
else
  echo "[4/5] 未偵測到完整開發者憑證 / APPLE_TEAM_ID，改採 Unsigned Archive + Payload/App.app 打包流程..."
  xcodebuild \
    "${WORKSPACE_FLAG[@]}" \
    -scheme App \
    -configuration Release \
    -sdk iphoneos \
    -destination 'generic/platform=iOS' \
    -archivePath "${ARCHIVE_PATH}" \
    CODE_SIGN_IDENTITY="" \
    CODE_SIGNING_REQUIRED=NO \
    CODE_SIGNING_ALLOWED=NO \
    archive

  APP_BUNDLE="${ARCHIVE_PATH}/Products/Applications/App.app"
  if [[ ! -d "${APP_BUNDLE}" ]]; then
    echo "[ERROR] 找不到建置產物：${APP_BUNDLE}" >&2
    exit 6
  fi

  echo "[5/5] 封裝 Unsigned Payload/App.app -> .ipa (支援 Sideloadly / AltStore / TrollStore 重簽安裝)..."
  TMP_STAGE="${OUT_DIR}/payload_stage"
  rm -rf "${TMP_STAGE}"
  mkdir -p "${TMP_STAGE}/Payload"
  cp -R "${APP_BUNDLE}" "${TMP_STAGE}/Payload/App.app"
  rm -f "${IPA_OUT}"
  (cd "${TMP_STAGE}" && zip -qry "${IPA_OUT}" Payload)
  rm -rf "${TMP_STAGE}"
fi

echo "完成！IPA 已輸出至："
echo "  ${IPA_OUT}"
