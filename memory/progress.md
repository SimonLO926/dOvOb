# 目前進度（恢復時先讀）

## 2026-10-15 色慾回饋修正／1.2.39

使用者要求：「邱比特完了無法返回介面，然後很難約會完所有卡太多時間，還有就是normal/hard 的電眼少女都太容易了又變得，修正好pull上去」。本次修正既有Boss並推送PR；不新增Boss或改通關存檔資格。

- 結算每幀append同一按鈕會取消pointerdown／up之間的點擊；只在父容器改變時搬動。色慾與有同樣問題的暴食一併修正。
- 兩血各五款約會仍必須完成一次嘗試；優先未玩卡，普通輪替在cycle1／3／5／7／9安排五卡（原1／5／9／13／17），50%HP以下連續補齊；獎勵亦不抽回已完成卡。未齊時Bridge16秒，齊後24秒。普通成功目標射箭6、夾娃娃2、網球2、餵食3、影院3、摩天輪2、排球3；鬼屋三房、32琴鍵／20舞步完整譜及十二章故事保留。普通射箭上限30秒、球類50秒、其他40秒；譜面與鬼屋專屬時間保留。
- 電眼Normal75秒／10人、Hard65秒／12人；情敵每秒42／54，長按競爭22／20，連按+8／+6，冷卻180／130ms；老師2／3位、速度50／72且會換路，Hard碰撞能量扣18。非fever只長按會輸情敵，連按加走位仍可完成。保留帥哥10倍分、愛心／fever、面具、幽靈、老師暈眩雙方進度暫停。此節取代歷史r7「長按必可贏」；具體平衡值是本次試作。

驗證：565項Node及4項卡帶幾何通過；電眼操作模擬不改場內狀態，兩難度走位＋連按均17人，純長按均失敗。四指定比例390×844／844×390／1024×768／1280×900，正式與試玩×好／壞／敗北共24組，按住返回250ms後放開均成功，preview不寫通關；0pageerror／缺檔。結算使用明示近終局fixture，並非自然完整Boss通關；Chromium模擬，未測實體iPad／Safari。JSON在source-assets/lust/verification-1.2.39/report.json。美術／音樂原檔與部署副本無變，兩bundle重建minify，首屏量見ASSET_SIZE。

## 下次恢復時應從哪裡繼續

分支fix/lust-progression-and-charm，從master8805c71繼續。已完成本機修改／回歸／四比例與容量稽核；下一步推送PR並確認CI。使用者本次要求pull，先以PR交付，不宣稱新版已部署。不要重做PR #82、回退正式五Boss或舊長按必勝平衡。

## 上一版已部署記錄


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
