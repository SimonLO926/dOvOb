# 目前進度（恢復時先讀）

2026-10-15：暴食已正式整合並部署為 Bridge 1.2.38。PR #82 已合併，遊戲提交b43b28bcb346d2b94f24e3a1af1576ae00b77723，master合併提交2aa8cd2c28d56c7b980b435cf41072170b09c561。

## 已完成

- 第一型態四款非西瓜普通回合輪替後，20%鎖血西瓜處決，必須真合出等級7西瓜。失敗80HP／20秒戰鬥重試。成功後才開普通西瓜，Normal等級5／Hard等級6大果，普通版無時限、無數字；這些門檻為試作值。第二型態三消處決及第三型態逃亡後10%真正反攻保留。
- 七首原MP3保存19,360,315 bytes，網站完整128kbps副本9,687,061 bytes；時長差<0.15秒，原檔SHA／映射在source-assets/gluttony/music/manifest.json。
- 正式gluttony.html、色慾通關解鎖、五Boss卡帶與難度榜、真正三階段與本體終局一次紀錄；試玩／開場拍攝不寫正式存檔。保留前四Boss、舊存檔及封印中的第六七Boss。
- 本機560項Node＋4幾何、四比例132試玩入口、正式插卡／七曲起播／暫停靜音／真合成解鎖／終局fixture紀錄與返回榜均通過，零pageerror／缺檔。靜態結局完成淡入後停止重繪另經PlaywrightCLI核實。
- PR CI run38734208112全部成功：回歸、幾何、bundle重建cmp、真Jekyll建置／來源排除、artifact。
- 正式部署run38734490231 build／deploy全部成功：https://github.com/SimonLO926/dOvOb/actions/runs/38734490231
- 線上版本／正式HTML／兩bundle／七MP3均HTTP200，逐位元與本機已驗版本一致；JSON在source-assets/gluttony/verification-r4/live-verification.json。正式網址 https://simonlo926.github.io/dOvOb/bridge/ ，試玩 gluttony-preview.html。

上述近合成、近終局使用明示fixture，不是自然完整Boss通關；未測實體iPad／Safari或整首音樂聽感。原圖、草稿及34圖SHA核對均保留，來源不部署。冷快取未開始之HTTP首屏body1,643,563 bytes，不是全部音樂量。

## 下次恢復時應從哪裡繼續

先核對最新master、使用者新回饋與memory/notes/latest-requirements.md；不要重做r3恢復或重建PR #82，也不要將第五Boss關回獨立試玩。1.2.38已正式發布，不沿用歷史不部署／等待音樂的限制。從本次已發布版本繼續，保留原圖音樂來源、存檔／解鎖／通關完整性。Git CLI無登入憑證，本次用授權GitHub blob/tree/commit/ref正常API保存並比對樹；沒有改登入憑證。
