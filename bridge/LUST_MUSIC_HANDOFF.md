# 色慾 r8 音樂交接（2026-10-12，本地）

## 1.2.36：使用者明確要求正式替換與色慾通關

使用者已在範圍選擇明確答覆「正式替換 Crazy 選關，並開放色慾的解鎖／通關紀錄」。本次正式接線已獲授權，取代1.2.35僅發布獨立試玩的範圍；不沿用別位Boss批准，也不把測試結果當作批准。從已發布master 1.2.35／PR #79繼續，不回退原先內容。

主遊戲Crazy進入 `cartridge.html`，保留黑白／七語像素字／sin符號／原介紹、較大卡帶與機、旋轉／縮放及像素星軌。正式可用卡帶讀真正既有通關：貪婪→傲慢→嫉妒→色慾；已通關嫉妒直接解鎖色慾，不重打或遷移。其餘三罪未開發仍封印。真正通關後顯示後續剪影（色慾採既有影子女性透明立繪），排行榜顯示四位Boss的Normal／Hard各五筆；保留舊單一數字紀錄。正式偏好切換保存至原設定，畫質另存bridge-cartridge-quality；試玩切換仍不寫。

正式插卡轉場完才導入原Greed／Pride或envy.html／lust.html完整頁面，釋放選關WebGL，遊戲盤面／控件不加外層試玩工具列。Greed／Pride入口再次核對解鎖，退出確認、敗北或勝利返回新選關；原Pride／Envy／Lust及卡帶獨立試玩繼續可用且不写正式紀錄。

色慾正式只接受full，網址scenario不能跳階段。只有兩血實際0、電眼成功、兩組五個約會均已玩、育成已決出路線並完成最後戰鬥／本體過場，才寫bridge-crazy-cleared-lust及Normal／Hard排行榜。好／壞路線真正擊破均通關，育成失敗本身不通關；按原Crazy公式damage×10＋5000＋當時HP×50，一場只存一次。preview／拍攝旗標在開場固定，中途撤掉拍攝也不能保存。拍攝解鎖只限目前已推出四位，不偽造通關，下一位Boss仍須各自先試玩確認。

1.2.35的63張q88桌面WebP、原貓／字型、八首完整128k曲、原PNG／MP3／canonical與草稿保存方式全部保留。色慾按當前曲載入兩音訊聲道，不在起步預載八首。渲染像素／頻率上限與自動／手動輕量保留，正式每次進Boss卸載整個選關頁；不把低配模擬說成實體電腦、iPad或Safari驗證。驗收中的存檔測試使用臨時瀏覽器存檔及明確近结算fixture，不宣稱自然完整通關。

1.2.36驗收：502項Node測試通過；390×844、844×390、1024×768、1280×900的四Boss正式進关／原Bridge鍵盤及觸控／返回選关、設定捲動、可見貓與盤面比例全過；七語×黑白共14組排行榜介面，沒有pageerror或缺檔。另驗證Normal／Hard近結算fixture各只記一次、preview不記、開場filming中途移除仍不記，以及真正記錄返回後剪影與榜。原Greed／Pride手機橫屏盤面不再被觸控區擠小，完整維持畫布長寬比例；左右仍在左側，貓置於左上空位，文字在右側空位。

正式音樂／設定／降級驗收：選關→完整Lust→第一血BGM實際播放、兩聲道、只請求當前歌、暫停／靜音／恢復、明確語言變更保存、其他語言fallback下調音量不覆寫主語言，全過。無WebGL正式入口仍可進关，原Greed卡帶Preview實際操作保持主存檔不變。63張採用canonical原檔與部署WebP均符合1.2.35 manifest SHA256；實際Jekyll產物含正式及試玩入口，不含source-assets、node_modules、測試、壓縮工具或示範影片。四比例為Chromium模擬，通關紀錄以明確fixture驗證，不宣稱實體設備或自然完整通關。

下方1.2.35及r1–r9的僅試玩限制均為歷史；保留各自當時來源及差異，不能重關色慾或恢复舊選關。

## 1.2.35 發布獨立試玩（2026-10-12）

最新使用者明確授權上傳色慾及新卡帶選關，並要求壓縮運行副本、原檔另存GitHub。發布入口為 `bridge/cartridge-preview.html` 與 `bridge/lust-preview.html`；取得真實Pages網址後可直接試玩，不再以執行環境的127.0.0.1冒充可開啟網站。此次先發布獨立試玩；原正式三Boss、解鎖、Normal／Hard榜及存檔規則保留，試玩仍不寫正式成績。

機殼／卡帶／原Boss概念圖、原sin符號、介紹與七語像素字沿r2；縮放／拖入／旋轉及星軌shader保留，新增自動／標準／輕量渲染。高DPI總繪製像素最多600,000，輕量240,000；閒置12／6Hz、操作30／24Hz，暫停／隱藏停止、減少動態靜止、進Boss停止選關WebGL。實際標準draw calls86、triangles32682；代表較平面選單仍有額外GPU負擔，不保證每部低階電腦幀率。自動按記憶體／核心及持續慢繪製降級，無WebGL保留2D入口。

色慾音樂改用兩個持續HTMLAudio聲道，每次只請求當前曲，保留420ms交叉淡入淡出及各曲位置；首次手勢只授權兩聲道的同一當前曲，沒有預載全部八首。第一場過場繼續補做手勢解鎖。八首原曲及128kbps／44.1kHz立體聲副本完整，沒有剪歌；暫停／靜音／重試與結局播放均驗證。舊r8音樂器描述為當時歷史。

圖只壓部署副本，不套用640×480便攜包。63張採用圖最寬1280、事件及差分高960、背景1280×960、q88／nearest；原照片貓及字型不縮。全部原PNG／MP3、提示詞、未採用稿和canonical WebP存 `source-assets/lust/`，Jekyll排除。15張未採用WebP的歷史bridge路徑以新 `release-1.2.35-assets.json` 的relocation表為準；原metadata保留歷史bytes／SHA，不冒充新壓縮副本。

驗證：496項Node全過；四指定比例16次原Bridge真鍵盤／保留／落下，正式storage不變；14份七語黑白、滑鼠拖入／旋轉／觸控pinch、設定捲到返回、WebGL降級全過，無pageerror／404／外部請求。育成8種語言比例、24次貓／控件交疊、兩條路線十二章與對應反應圖實際操作驗證；所有透明圖resize後alpha逐像素一致。八首真瀏覽器播放、两聲道、只請求當前歌、暫停／靜音通過。硬體測試是Chromium軟體WebGL、高DPI和4×CPU降速模擬；不是實體iPad／Windows／macOS或低階GPU驗證。實際Jekyll產物不含source-assets、node_modules、測試、工具、離線包或錄影片。


八首均為本次使用者上傳的實際MP3，不再使用合成BGM作為伴奏；附件內容是素材，不代表任何額外發布授權。沒有推送、PR、正式整合或發布。

| 曲目 | 附件實测容器時長 | 接入場景 | 來源 |
| --- | --- | --- | --- |
| lust_first_bridge | 03:02 | 第一血通常戰／Bridge | [原檔](../source-assets/lust/audio/lust_first_bridge_no-watermark.mp3) |
| lust_first_special | 01:58 | 第一血約會小遊戲及攻擊回合 | [原檔](../source-assets/lust/audio/lust_first_special_no-watermark.mp3) |
| lust_first_last | 01:19 | 電眼處決、第一血敗北與變身開頭 | [原檔](../source-assets/lust/audio/lust_first_last_no-watermark.mp3) |
| lust_second_bridge | 02:43 | 第二血通常戰／Bridge（包括狂暴Bridge） | [原檔](../source-assets/lust/audio/lust_second_bridge_no-watermark.mp3) |
| lust_second_special | 02:57 | 第二血約會小遊戲及狂暴攻擊回合 | [原檔](../source-assets/lust/audio/lust_second_special_no-watermark.mp3) |
| lust_second_last | 05:16 | 心碎育成（歌詞版）、育成前／結果過場 | [原檔](../source-assets/lust/audio/lust_second_last_no-watermark.mp3) |
| lust_ending_good | 02:27 | 最終好結局 | [原檔](../source-assets/lust/audio/lust_ending_good_no-watermark.mp3) |
| lust_ending_bad | 02:55 | 最終壞結局・色慾崩壞 | [原檔](../source-assets/lust/audio/lust_ending_bad_no-watermark.mp3) |

first_bridge實際182.413秒（3:02），與使用者清單1:23不同；沒有裁成1:23或猜測替換素材。first_special實際118.936秒，其他列的秒數按容器值取整；都保留完整音樂。second_last由使用者標為5:16歌詞版，沒有另外提供逐字歌詞／字幕文本，也沒有虛構轉錄。其餘按使用者清單用途採用。

前六種玩法路由是使用者指定；攻擊回合歸special、第一敗北／變身前1.4秒歸first_last、育成前與bond／collapse歸second_last、玩家真敗北lost靜音及結局循環均屬延續共用播放器的試作接線決定。沒有把好／壞結局曲拿去普通狂暴，也沒有因低Boss血量蓋掉小遊戲曲。狂暴Bridge仍second_bridge，狂暴攻擊second_special；正式bad畫面才ending_bad。所有曲目循環，各自保留播放位置，重試全重置；切語言不重播。

`lust/music.mjs`只接路由，沿用現成`crazy-music.mjs`的420ms淡入淡出／.78混音係數／獨立playhead／手勢解鎖。共用音樂器及前三關程式沒有修改。首屏不建立音樂播放器；按開始後手勢解鎖八首，再只讓目前曲目出聲。暫停、返回及失焦立即停止播放，恢復後續播；最终結局戰鬥已停止但音樂持續。最後3秒益智時機暫將BGM再乘.3，保留580Hz原倒數音與音效音量；琴鍵／舞步譜面提示屬原創節奏音效，與提供的special伴奏同時播放，不宣稱MP3已重新編成譜面。

原始MP3共43,562,964 bytes，canonical 128kbps／44.1kHz／立體聲副本21,780,612 bytes；便攜64kbps副本10,890,477 bytes，全時長、未裁剪、與原容器時長差<0.15秒。來源／上传ID／各版本SHA及時長在 [r8來源清單](../source-assets/lust/r8-music-sources.json)。原圖／提示詞／r1–r7及舊合成程式保留；原始MP3由source-assets的既有Jekyll排除保護，沒有部署。

主要分開下載：`lust-r8-game.zip`解壓是約20.1MB的`lust-r8-download.html`，`lust-r8-music.zip`解壓是`audio/`，放在同一資料夾；單獨下載HTML不包含這8首音樂。另保存完全內嵌音樂的約34.6MB HTML及完整解析度／128k音樂約91.3MB单檔；為避免再次碰到未核實的附件容量限制，大檔不作唯一交付。這是本地交付策略，不宣稱平台確定20MB上限。

驗證見r8 LUST_PREVIEW及工作區audio-verification／recording／node-regression；四指定尺寸是Chromium模擬，不是實體iPad／Safari。file://仍受本環境管理政策限制，未改政策；已實測本機HTTP含外部音樂及全部內嵌的版本。正式Boss設定集仍缺，故事／玩法／角色外貌仍供試玩調整；不再把八首完整BGM當缺失素材。
