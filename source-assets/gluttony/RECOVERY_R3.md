# 暴食 r3 恢復來源與重建

2026-10-15，新雲端環境從 master c354e927 恢復。Drive先讀metadata，再以 `download_raw_file=true, include_base64=false` 串流原檔；沒有依賴舊聊天或假設GitHub已有未提交程式。搜尋 gluttony 及 r3 source-handoff 未發現較新原碼包。

- r2完整來源：Drive `1z1cIcjJoqKh5CsjuCyTIHBx35Pk4oK-P`，79,594,622 bytes。
- r3 ZIP：Drive `1CbM8zkFn7PTSOJHt5h5DY20Q9AeDoPVk`，5,751,181 bytes。
- r3單檔：Drive `1h2DAyPp0h0ycVWhwR1zW-Ft6xjuTO7Mm`，7,766,349 bytes；由原ZIP重組的單檔與下載檔逐位元相同。

採r2可維護模組為基底，逐段核對r3 bundle，恢復match動畫狀態機、games更新、engine到時保護、view插值與提示、app手機隱藏觸控位置及r3 HTML。不是只改版本字串或以r2原碼代交。r1／r2原碼歷史、r3原bundle、原PNG、草稿、參考、提示詞全保存；交接包內舊共用文件沒有覆蓋最新master。

以esbuild 0.27.0重建。原r3與重建bundle經Babel parse、依各lexical scope宣告順序統一binding名稱並移除註解後，產生碼完全相同；canonical SHA256見驗證JSON。未標準化的bundle僅變數名稱不同。CI直接重建並cmp提交bundle，防止日後源碼／交付物脫節。

重建：`esbuild bridge/gluttony/app.mjs --bundle --format=esm --minify --outfile=bridge/gluttony/preview.bundle.js`。
便攜：`python bridge/tools/build-gluttony-preview.py --out <暫存路徑> --esbuild <esbuild 0.27.0路徑> --revision r3`。單檔／ZIP不部署、不放入runtime。

本次實測：552項Node（502現有＋50暴食，其中8項新增r3）；另4項卡帶幾何；Chromium153四比例×32入口共128組零錯誤，CDP觸控交換及鎖輸入、暫停／語言／設定返回、最後一步落定、Normal／Hard蛇達標後加分與45秒結算、自撞失敗、原localStorage保留。近目標／近到時／自撞明示fixture及模擬時計，不是假稱自然全Boss通關。未使用實體iPad／Safari；沒有BGM，未聲稱BGM下倒數聽感驗證。舊r2／舊聊天47項驗證為歷史，本次報告只引用當前檔案的重新實測。

34個來源／參考／草稿／WebP SHA已核對。10採用PNG30,470,738 bytes，運行WebP3,936,302 bytes，節省87.08%；沿既有最寬1280／q88副本，沒有再重壓或刪圖，原貓／共用字型不複製。冷快取本機HTTP首屏1,610,250 bytes，非CDN與Jekyll產物數據；沒有音樂請求。runtime新增量、便攜容量、來源包容量分列JSON，不能混作玩家下載量。source-assets、memory、工具／測試依既有Jekyll排除；PR CI實際建置核對，未觸發部署。

實測與來源雜湊：[驗證JSON](verification-r3/recovery-and-validation.json)、[四比例／操作紀錄](verification-r3/browser-audit.json)、[截圖](verification-r3/four-ratios.jpg)。測試工具在bridge/tools；大型全解析度截圖及離線包留工作區，不加入網站。

使用者本次明確授權推送遊戲／素材與建立PR，更新歷史只限memory限制；不授權合併、部署、公開發布或正式接線。原四Boss／卡帶／存檔保持master現況。
