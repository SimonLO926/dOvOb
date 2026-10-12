# Crazy 卡帶選關 r2：本地融合版

## 1.2.35 發布獨立試玩（2026-10-12）

最新使用者明確授權上傳色慾及新卡帶選關，並要求壓縮運行副本、原檔另存GitHub。發布入口為 `bridge/cartridge-preview.html` 與 `bridge/lust-preview.html`；取得真實Pages網址後可直接試玩，不再以執行環境的127.0.0.1冒充可開啟網站。此次先發布獨立試玩；原正式三Boss、解鎖、Normal／Hard榜及存檔規則保留，試玩仍不寫正式成績。

機殼／卡帶／原Boss概念圖、原sin符號、介紹與七語像素字沿r2；縮放／拖入／旋轉及星軌shader保留，新增自動／標準／輕量渲染。高DPI總繪製像素最多600,000，輕量240,000；閒置12／6Hz、操作30／24Hz，暫停／隱藏停止、減少動態靜止、進Boss停止選關WebGL。實際標準draw calls86、triangles32682；代表較平面選單仍有額外GPU負擔，不保證每部低階電腦幀率。自動按記憶體／核心及持續慢繪製降級，無WebGL保留2D入口。

色慾音樂改用兩個持續HTMLAudio聲道，每次只請求當前曲，保留420ms交叉淡入淡出及各曲位置；首次手勢只授權兩聲道的同一當前曲，沒有預載全部八首。第一場過場繼續補做手勢解鎖。八首原曲及128kbps／44.1kHz立體聲副本完整，沒有剪歌；暫停／靜音／重試與結局播放均驗證。舊r8音樂器描述為當時歷史。

圖只壓部署副本，不套用640×480便攜包。63張採用圖最寬1280、事件及差分高960、背景1280×960、q88／nearest；原照片貓及字型不縮。全部原PNG／MP3、提示詞、未採用稿和canonical WebP存 `source-assets/lust/`，Jekyll排除。15張未採用WebP的歷史bridge路徑以新 `release-1.2.35-assets.json` 的relocation表為準；原metadata保留歷史bytes／SHA，不冒充新壓縮副本。

驗證：496項Node全過；四指定比例16次原Bridge真鍵盤／保留／落下，正式storage不變；14份七語黑白、滑鼠拖入／旋轉／觸控pinch、設定捲到返回、WebGL降級全過，無pageerror／404／外部請求。育成8種語言比例、24次貓／控件交疊、兩條路線十二章與對應反應圖實際操作驗證；所有透明圖resize後alpha逐像素一致。八首真瀏覽器播放、两聲道、只請求當前歌、暫停／靜音通過。硬體測試是Chromium軟體WebGL、高DPI和4×CPU降速模擬；不是實體iPad／Windows／macOS或低階GPU驗證。實際Jekyll產物不含source-assets、node_modules、測試、工具、離線包或錄影片。


最新使用者要求：把插卡示範融合到現行 Crazy 選關布局，黑白模式跟隨外面主題；Game Boy 與卡帶更大、可放大縮小；概念圖預設約原頁面大小，保留每位 Boss 文字介紹、名字前符號；不要在物件上覆蓋拖動／旋轉說明；七語、沿用像素字體；插入後華麗效果進既有 Boss 關卡，先看本地 demo。

## r2 實作與操作

入口 `bridge/cartridge-preview.html`。桌面維持左右兩大區：程式遊戲機／卡帶在左，原完整採用概念圖與原介紹在右；手機概念圖在上，機與卡帶在下，水平選卡列及底部操作／原照片貓。概念圖仍獨立呈現，沒有拿頭部或背景替代。Greed／Pride／Envy沿原文字，色慾沿其r9試玩開場短句；新增日／韓／葡／西譯文是忠實翻譯，不另添 lore。七罪圖形直接重用正式頁 sin-icon SVG；未開發三罪只露封印及原符號，不編造玩法。

- 自動讀主遊戲 `bridge-settings.theme/lang/crazyDifficulty/touch/dangerEffect/bgmVolume/sfxVolume`；預設遵從主遊戲 light/en；storage event也跟隨外頁改動。demo內黑白／語言／難度只作用於本次，不寫偏好。保留Normal／Hard。
- 七語：繁中、簡中、英、日、韓、葡、西；所有選關按鈕、狀態、介紹、設定及說明有譯文，使用原fusion pixel的五份字型（英葡西共Latin），硬體Canvas標籤也用像素字，換語言更新。
- 較大遊戲機與卡帶：拖動卡帶至機頂插槽放手；右鍵／Shift拖動，或「旋轉卡帶」模式轉動；滾輪、雙指pinch及±做70–145%縮放。「擺正」同時還原縮放，←→換卡、空白插卡。說明放到設定，沒有貼在機／卡帶的浮動標籤。
- 插入時移到槽頂後真正沿深度滑入，約1.25秒；再以像素星點／軌道／單次光圈 aperture shader 轉場約2.1秒。無快速閃爍；減少動態縮短至300＋250ms，設定暫停時計。
- **插卡進入各自真實完整關卡，不是r1共用方塊樣例。** 貪婪／傲慢從現行 `index.html` 複製內容初始化原引擎；傲慢full Preview，三關沿拍攝隔離規則；嫉妒用 `envy-preview.html` full，色慾用r9 `lust-preview.html` full。正式HTML／引擎／入口／解鎖規則未修改。進關後停止選關WebGL繪製，退出才恢復。
- iframe先準備原頁，轉場完才送開始訊號；原場景計時不在選卡／轉場中消耗。遊戲維持原盤面、心心、貓、Bridge保留／下一塊／落點、所有本關玩法、Space／C／Shift、觸控與危險設定。原有開場只留繼續及自接。頂部44px本地工具列提供返回選關，與原遊戲菜單分開，不壓住操作；非最終過場隱藏返回，只留原繼續／自接，最終勝敗才恢復返回。原遊戲退出確認／最後返回也接回卡帶。

七語是**本次選關UI**：原嫉妒／色慾關卡目前僅繁中／英文，簡中沿繁中、其他語言入場用英文；沒有假稱已翻譯完整八首曲／十二章劇本。原貪婪／傲慢使用現行主遊戲語系及其已有fallback。

## 存檔、來源與本地封裝

`cartridge/encounter.mjs` 在任何遊戲module執行前，將子window localStorage／sessionStorage換為記憶體快照，讀入真實原設定／真實clear，僅在子快照啟用拍攝flag。setItem／removeItem／clear皆不能寫回真實storage；不假造正式通關。每場開始使用原beginCrazy或原form啟動，不注入HP、模式、盤面／分數。父頁返回移除iframe，正式頁沒有demo入口。這是本地可信原程式的存檔隔離，不是用來執行未知外來程式的安全sandbox。

使用現有四張WebP概念圖、原貓及五語pixel字型；沒有新增生成插圖／提示詞。採用來源／SHA／three授權／r2設計決定見 `source-assets/cartridge-demo/r2-sources.json`，r1原source保存 `drafts/r1/`，舊r1交付包保留。X影片依然未能讀取（403），並非看過後復刻；shader／構圖屬依文字要求試作。

建置：先以three@0.180.0及esbuild bundle `cartridge/app.mjs` 到 `cartridge/demo.bundle.js`；再執行：

```sh
python bridge/tools/build-cartridge-preview.py --out <新交付目錄> --reuse-lust-lite <r9/lust-r9-download.html> --portable-audio
```

遊戲／音樂ZIP解壓到同一資料夾；在 `local-demo` 執行 `python start.py`（Windows可 `py start.py`），只開127.0.0.1並自動開本機網址，不發布、不需CDN。因原ES modules／fetch需本機HTTP，不能宣稱直接雙擊HTML在本環境已驗證。下載版概念圖、原貓、字型、前三Boss插圖不縮；Lust其餘插圖沿r9已驗證640×480章節／半尺寸q88便攜副本；音樂完整立體聲64k、全部時長差<0.15秒，原檔及128k canonical全不變。總量及精確SHA於交付 `delivery.json`／包內 `manifest.json`；不將離線包或來源總量冒充首屏。正式PR壓縮仍待授權後按ASSET_SIZE執行。

## 驗收與交接

工作区 `/workspace/artifacts/cartridge-preview-r2` 保存四尺寸實際選關／各Boss盤面截圖、七語黑白截圖、真滑鼠旋轉／拖入、鍵盤、CDP觸控旋轉／pinch／Boss操作、設定捲到返回、轉場暫停／降級／存檔不變報告及影片。Chromium軟體WebGL及模擬viewport，**不是實體iPad／手機／硬體GPU驗證**。Node回歸包含原三Boss、Lust r9及插卡狀態／隔離快照／七語，共494項；最終隔離／七語單元11項也通過。四比例16次真Bridge移動／保留／落下，全部盤面改變及正式存檔不變；14個七語黑白畫面、觸控旋轉／1.45×pinch、即換即拖、慢載入、外頁主題／語言／靜音、過場隱藏返回、減少動態及WebGL降級接真Boss均通過，無pageerror／404／外部請求。過場／設定繼續後，adapter明確把焦點交回原canvas，避免按鈕焦點或inert交接攔鍵；不改引擎／HP／時計。影片27.92秒，真正嫉妒配樂／原音效，+2dB後峰值−7.5dB。完整原Boss通關不是本次瀏覽器操作測試的宣稱，玩法數值與原流程由既有回歸驗證。

仍屬試作：機殼配色、70–145%倍率、相機、插槽容差、星軌shader、回選關工具列和新翻譯；沒有新增缺素材阻礙，若要精確對齊X影片仍需可讀來源。維持本地、不commit／push／發布／PR／正式整合，色慾整體尚未收到OK。

---

## r1 歷史紀錄（以下不是現行接線）

# Crazy 卡帶之匣 r1：本地獨立示範

使用者最新要求：Crazy 選關像選 Game Boy 卡帶，可移動、旋轉，插入機頂後進入關卡；使用 three.js／shaders，無需外部3D模型，先交付示範。

參考網址：https://x.com/ann_nnng/status/2109257723246501895?s=20 。本次讀取回傳403，未看見原影片；構圖、材質、動畫及插槽手感均依文字描述自行試作，不能宣稱復刻影片。這是選關硬體外觀的明確新要求，沒有改成3D Boss或重畫既有像素美術。

## 可試內容與界線

入口 `cartridge-preview.html`，沒有加到正式主選單。貪婪／傲慢／嫉妒／色慾四盒使用現有採用WebP作封面，未來三盒仍封印。這個獨立示範允許試看四盒，不依正式解鎖；正式 `index.html`、解鎖及通關旗標完全保留。

拖動封面卡帶到機頂插槽後放手；右鍵拖動、Shift拖動、滾輪或「旋轉卡帶」模式可旋轉，手機可開旋轉模式單指拖動。「擺正」復位，偏斜或遠離插槽的放手不會開始遊戲。也可按「插入卡帶」／空白自動插入。喀嗒、滑入、開機字樣及鏡頭放大均實際運行；減少動態縮短流程並停止待機浮動。

**r1機內是可玩的原 Bridge 共同樣例，不是四個完整Boss戰，也不寫任何正式進度／排行榜。** 共用原 `logic.mjs` 的原方塊、保留、下一塊、落點、重力及消除；箭頭移動／旋轉，空白落下，C／Shift保留。退出卡帶／Esc回到選擇。選關時C不會啟動遊戲，戰鬥時C維持保留。正式Boss入口接線仍待使用者查看這個選關示範後決定，不能把r1稱為已取代正式Crazy選關。

這個樣例不重製Boss戰UI，也沒有捏造Boss血條。原照片貓維持110px寬。語言及音效音量讀取主遊戲設定，不寫回設定；切語言不重開遊戲。對話框及失焦暫停時計，返回／繼續恢復。WebGL初始化失敗有Canvas降級版本，保留按鈕選卡／開機／原Bridge試玩，但不能呈現立體拖動。

## 素材與建置

three.js **0.180.0**，MIT授權保存到 `source-assets/cartridge-demo/THREE-LICENSE.txt`。機殼／卡帶／插槽全部由程式ExtrudeGeometry、平面及圓柱組成，沒有GLTF、FBX、OBJ、外部3D模型或CDN。自訂ShaderMaterial分別處理塑膠顆粒／光澤、封面轉角閃面、LCD掃描線／玻璃反光。文字／封面由CanvasTexture組合；開機音效是WebAudio短音。沒有新增生成插圖或提示詞，採用來源與SHA見 `source-assets/cartridge-demo/r1-sources.json`。

開發source：`cartridge/app.mjs`、`state.mjs`、`shaders.mjs`。本地esbuild已產生 `cartridge/demo.bundle.js`；重建需將three@0.180.0裝到工作區工具目錄（不是repo）並用NODE_PATH提供給esbuild：

```sh
NODE_PATH=<tooling>/node_modules <esbuild> bridge/cartridge/app.mjs --bundle --format=esm --minify --outfile=bridge/cartridge/demo.bundle.js
python bridge/tools/build-cartridge-preview.py --out <新的交付目錄>
```

封裝嵌入three bundle、五個既有WebP及原繁中字型，完全不依CDN，單檔HTML約4.49MB／ZIP約3.12MB；不縮原貓、不刪源圖、不改 canonical WebP。ZIP另附three授權。交付資料在 `/workspace/artifacts/cartridge-preview-r1`；精確大小與SHA看manifest.json。程式與素材保留repo，輸出、錄影片、工具依賴留工作區。

## 驗收及交接

驗證尺寸：390×844、844×390、1024×768、1280×900。Chromium以軟體WebGL運行；截圖、實際滑鼠旋轉／拖入、鍵盤方塊移動／保留／落下、語言不重置、設定暫停／返回、退出／重新插入、減少動態及WebGL失敗降級均保存於交付資料。這是模擬viewport與輸入，不是實體iPad／手機／硬體GPU驗證。

Node驗證涵蓋插入状态、封印、錯位／距離、暫停、減少動態、重複操作與取消，並跑既有Bridge邏輯、七罪解鎖、觸控規則，共72個測試。共用邏輯未改，前三Boss及色慾r8未動；正式頁diff為零。

示範影片使用真正瀏覽器滑鼠／鍵盤，不直接改phase／分數／遊戲盤面，包含旋轉、換卡、拖入、開機、原Bridge及退出；聲音收錄原WebAudio，依capture起始時間與影片同步，輸出提高18dB，實測峰值−8.4dB；不另配音樂。影片34.16秒，1024×768，H.264／AAC。单檔另以本地HTTP驗證無外部素材請求，390×844以實際CDP觸控事件驗證手機旋轉模式／拖入／移動／保留，非直接派發合成DOM事件。本環境file://受瀏覽器管理規則封鎖，沒有繞過限制，不能宣稱本環境驗證直接雙擊；下載HTML本身沒有外部依賴，可在允許本地HTML的瀏覽器開啟或以本機HTTP提供。

仍屬試作：未見X影片的外觀演繹、封面裁切、鏡頭／插槽容差及四盒共用Bridge樣例。待補充：如要對齊影片的特定效果，需要可讀取的影片或關鍵畫面；r1不因此停止製作。未發布、未commit／push、未建立／合併PR，並未取得第四Boss整體OK。
