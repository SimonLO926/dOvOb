# 工作位置與驗證證據

基準 repo：SimonLO926/dOvOb，工作區 `/workspace/dOvOb`。本地未提交 r1 放在 `bridge/gluttony/`、`bridge/gluttony-preview.html`、`source-assets/gluttony/`。必讀文件入口根 AGENTS.md；另讀 bridge/AGENTS.md、USER_REQUIREMENTS_MUST_READ.md、BOSS_UI_MUST_READ.md、CRAZY_MUST_READ.md、FILMING_GUIDE.md、ASSET_SIZE.md 及各 Preview 指南。附件原文 `source-assets/gluttony/design/gluttony-design-original.md`。

r1 交付／證據：`/workspace/artifacts/gluttony-preview-r1/`。有 534 Node 測試紀錄、四比例 128 場景 browser-audit、real-gameplay、transition-fixtures、audio-crops、package-check。它們是 r1 歷史驗证；明確使用 fixture／模擬時計的項目不能宣稱自然完整通關或實體設備驗證。

打包工具 `bridge/tools/build-gluttony-preview.py`。現有 esbuild 位於 `/workspace/artifacts/envy-preview/tooling/node_modules/.bin/esbuild`。Python Playwright、Chromium `/usr/bin/chromium`、ffmpeg 可用。原圖來源與部署 WebP 不刪。

恢復時不硬 reset，不用過期更新包回退。只讀／保留既有 r1 成果，依 latest-requirements 改成 r2。GitHub 記憶保存須用只有 memory 文件的獨立提交／分支，避免連帶推未批准的 Boss。

2026-10-14：GitHub master b59956a 只新增 memory／必讀流程／部署排除。r2程式只在本地 preview/gluttony-r1，不能因master更近而reset或覆寫未提交修改。若新環境沒有本地工作區，從使用者已交付的 Google Drive同名 gluttony-r2-source-handoff.zip 恢復第五關原始程式及來源；不是假稱GitHub已有此Boss。下載包為gluttony-r2-preview.zip、單檔gluttony-r2-playable.html，均非公開網站。
