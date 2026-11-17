# 《蓮島迴廊 Corridor of the Lotus》Android APK 與 iOS IPA 打包指南

本專案已內建完整離線單檔 HTML5 編譯與 Capacitor 行動端轉換管線，無需外部 CDN 即可在手機離線順暢運行。

---

## 一、架構與前置檔案說明

- `corridor_of_the_lotus/index.html`：由 `tools/build-single-html.mjs` 使用本地 `esbuild` 與 `three` 打包而成的完全獨立單檔遊戲。
- `corridor_of_the_lotus/www/`：由 `tools/stage-mobile-www.mjs` 生成的行動端 WebView 容器資源，包含：
  - `www/index.html`（離線單檔遊戲本體）
  - `www/manifest.webmanifest`（PWA / 行動端清單）
  - `www/icons/icon-192.png`、`icon-512.png`、`icon-1024.png`（純程式生成之澳門培正六角星蓮花圖示）
- `corridor_of_the_lotus/capacitor.config.json`：`appId` 為 `mo.lotus.corridor`，`appName` 為 `蓮島迴廊`。
- `corridor_of_the_lotus/ios-export-options.plist`：Xcode 匯出設定範本（預設 `development`，可改 `ad-hoc`）。
- `corridor_of_the_lotus/github-workflows/build-apk-ipa.yml`：GitHub Actions 零本機 SDK 雲端建置工作流。

---

## 二、快速更新網頁層與圖示（零 Android/iOS SDK 即可執行）

```bash
cd corridor_of_the_lotus
npm run build         # 產生最新單檔 index.html
npm run stage:mobile  # 同步 www/index.html、manifest.webmanifest 與 3 組 PNG 圖示
```

---

## 三、方案 A：零本機 SDK 雲端一鍵產出 APK & IPA（最推薦）

若本機未安裝 Android Studio 或 Xcode（或使用 Windows/Linux 卻想編譯 `.ipa`），可直接使用 GitHub Actions：

1. 將 `corridor_of_the_lotus/github-workflows/build-apk-ipa.yml` 複製到倉庫根目錄的 `.github/workflows/build-apk-ipa.yml`。
2. 推送至 GitHub 倉庫後，進入 GitHub 頁面 **Actions → Build Corridor of the Lotus APK & IPA → Run workflow**。
3. 數分鐘後即可在該次執行的 **Artifacts** 區塊直接下載：
   - `corridor-of-the-lotus-android-apk`（`.apk` 安裝檔）
   - `corridor-of-the-lotus-ios-ipa`（`.ipa` 安裝檔，可用 Sideloadly / AltStore / TrollStore 安裝至 iPhone/iPad）

---

## 四、方案 B：本機編譯 Android `.apk`

### 1. 環境需求
- Node.js >= 18
- Java JDK 17 以上
- Android SDK（安裝 Android Studio 後設定 `ANDROID_HOME`，例如 macOS 預設 `~/Library/Android/sdk`）

### 2. 安裝 Capacitor Android 殼並執行打包
```bash
cd corridor_of_the_lotus
npm install --no-save @capacitor/core @capacitor/cli @capacitor/android
npm run build:apk
```
完成後會在 `corridor_of_the_lotus/dist/android/corridor-of-the-lotus-debug.apk` 產出可直接傳輸至 Android 手機安裝的 APK。

> 若要產出正式版 Release APK，請執行 `bash tools/build-apk.sh release`，並使用 Android Studio 或 `apksigner` 簽署您的 Keystore。

---

## 五、方案 C：本機編譯 iOS `.ipa`（限 macOS）

### 1. 環境需求
- macOS + Xcode（已執行 `sudo xcode-select --switch /Applications/Xcode.app`）
- Node.js >= 18

### 2. 安裝 Capacitor iOS 殼並執行打包
```bash
cd corridor_of_the_lotus
npm install --no-save @capacitor/core @capacitor/cli @capacitor/ios
```

#### 情況 1：無蘋果開發者付費帳號（產出 Unsigned `.ipa` 供側載）
```bash
bash tools/build-ipa.sh unsigned
```
腳本會以無簽名模式編譯 `App.app` 並封裝標準 `Payload/App.app` 結構至 `corridor_of_the_lotus/dist/ios/corridor-of-the-lotus.ipa`。您可用免費工具 **Sideloadly** 或 **AltStore** 透過個人 Apple ID 簽名安裝到實體 iPhone / iPad。

#### 情況 2：擁有 Apple Developer Team ID（產出已簽名 `.ipa`）
1. 編輯 `corridor_of_the_lotus/ios-export-options.plist`，視需要將 `method` 改為 `ad-hoc` 並補上 `teamID`。
2. 執行：
```bash
APPLE_TEAM_ID="您的TeamID" bash tools/build-ipa.sh signed
```
產出的 `.ipa` 位於 `corridor_of_the_lotus/dist/ios/corridor-of-the-lotus.ipa`。

---

## 六、離線與觸控驗證建議
- 遊戲介面已針對手機直立（`390×844` 以上）與安全區（`env(safe-area-inset-*)`）適配，單指點擊格子移動、橫向滑動旋轉視角、雙指縮放鏡頭。
- 內建 WebAudio 合成音效會在首次點擊／觸控螢幕後自動解鎖，無需載入外部 MP3。
