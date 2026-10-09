# r7 新玩法圖片

六窗情景與四面收藏室背景使用 image_gen；原圖、逐字提示詞及參考見 [r7-prompts.md](r7-prompts.md)，編碼尺寸與 SHA-256 見 sources.json。圖不改 Boss 包框及既有卡圖。

# 嫉妒 r6 候選美術紀錄

## r6 清楚主體／分色卡圖（2026-10-08）

依使用者最新要求，卡圖精緻但不過分複雜，每張獨立色調，避開大面積綠底。兩次 image_gen 均在檢視原參考後生成，PNG 原檔及舊圖全部保留。新圖分別是 `images/envy-tarot-atlas-r6.png`、`images/envy-secret-atlas-r6.png`，執行檔為 `bridge/assets/envy-tarot-r6.webp`、`bridge/assets/envy-secret-r6.webp`。

兩圖都是 1536×1024、3 欄×2 列等大方格。塔羅按列為月亮／寶劍／小丑／眼睛／死神／背面；秘藏為 C／U／R／SR／背面／SAR（注意 SAR 在最後一格）。圖中沒有牌名或效果，Canvas 保持比例裁切到 222×248 插畫區；逆位只旋轉正面圖，文字朝上。卡框 x=18、y=154、244×344，圖下保留獨立的名稱、位向和三行效果區，演出裁切不越出原框。

塔羅參考原 `images/envy-tarot-atlas-r2.png` 的主題及材質，改靛藍／冰藍／酒紅／紫／炭黑銅色。秘藏只用 `images/envy-sar.png` 參考多眼龍本體；暖金護符、冰藍靈藥、赤紅龍面、紫色秘典各有新主體，最高稀有龍保留原翡翠／枝角／多眼，背景改金與深藍。來源原圖未被覆寫；這些仍是等待使用者試玩回饋的候選。

以下為兩次工具的逐字提示詞（第一段塔羅、第二段秘藏）：

```text
Redesign the supplied six-panel tarot atlas for the same Envy game. Output one landscape 1536x1024 illustration atlas in an EXACT edge-to-edge uniform 3 columns by 2 rows grid of six SQUARE equal panels, without gutters, text, words, numbers, logos, or external borders. Each panel must have one iconic central subject with a strong silhouette, exquisite small deliberate details, limited ornament, soft painterly pixel-art material like a refined retro fantasy collectible card. MUCH less clutter than reference: no forest scenery, dense vines, cities, repeated gems, or competing objects. Broad calm color fields with subtle paper and light texture, premium illustration, not minimalist flat icons. Each subject kept inside its middle 75% for safe card cropping; clearly distinct and NOT GREEN backgrounds. Order EXACTLY: TOP LEFT Moon: large silver crescent over a quiet deep midnight-indigo sky, tiny few stars, violet rim light. TOP MIDDLE Sword: elegant single upright silver sword, subtle pale ice-blue and ivory backdrop, rose-gold hilt, clear entire silhouette. TOP RIGHT Jester: ornate but simple red-and-cream jester mask with small crimson cap and two gold bells, warm burgundy backdrop, not forest green. BOTTOM LEFT Eye: one luminous watchful gold iris eye with small elegant amethyst geometric halo, plum/lavender backdrop. BOTTOM MIDDLE Death: cloaked ivory skull and one simple scythe, charcoal-black to copper ember backdrop, quiet and solemn, no gore. BOTTOM RIGHT Card Back: symmetrical thin bronze ornamental eye-seal design, navy blue backdrop, uncluttered, no green. Palette distinctions obvious at phone size. Borrow the fantasy craft from reference, do not retain its dense green scenery. No printed card names or effects: game draws those separately.
```

```text
Create a NEW illustration atlas of Envy secret collectibles, using supplied multi-eyed dragon only as identity reference for the final dragon panel. Output one landscape 1536x1024 image in EXACT uniform 3-column by 2-row edge-to-edge grid of six equal SQUARE panels with no gutters, words, numbers, labels, logos, or external card borders. Premium refined painterly pixel-fantasy card illustrations, clean large single focal subject, exquisite selective material details but NOT visually complex, no dense forest, architecture, tangled vines, or busy scenery. Broad quiet colored fields, highly readable on a phone. Each panel different dominant background color; NO green background anywhere. Central subjects inside middle 75% for cropping. Exact order: TOP LEFT common healing charm: a peach-white luminous pearl held in a small bronze eye-shaped amulet, warm parchment and amber/ochre background, simple elegant. TOP MIDDLE uncommon potion: faceted pale blue crystal potion flask with tiny silver eye stopper and one highlight, icy cyan/blue background, no green potion. TOP RIGHT rare mask: single formidable dragon-eye bronze mask with luminous eye slits, ruby/garnet red background, clean silhouette. BOTTOM LEFT super rare grimoire: one beautiful closed violet magical book with a small jade-eye clasp and fine gold edging, amethyst purple background, one soft magical halo. BOTTOM RIGHT special art rare: magnificent recognizable multi-eyed antlered dragon from reference, emerald-black body and restrained gold horns, powerful clean S-shaped bust silhouette, three to five clear eyes, on warm pale gold and deep ink-navy field; keep reference identity but strip dense extra leaves and forest. Dragon green is allowed only as focal character, NOT background. BOTTOM MIDDLE card back: symmetrical silver/copper eye seal on dark slate blue background, very simple thin filigree. Overall elegant and colorful, fantastical collectible art, not flat vector, no text. Maintain exact panel ordering: charm/potion/mask in row 1; grimoire/back/dragon in row 2.
```

## r5 美術精修

沿用原圖，沒有新生成／覆寫素材。塔羅正位與逆位共用一張卡圖，以 Canvas 旋轉 180°。卡框新增像素金屬切面與細鑲邊，稀有閃光只限圖片，不影響效果文字。六眼交織眼環與光暈跟隨玩法位置，減少動態只停裝飾。

## r4 排位

只替換本關主題，恢復原版底部玩家 HP、Bridge 盤面及預覽欄、方塊與十字鍵位。沒有新增生成圖。Bridge 像素頭部縮放／下移，角與藤蔓避開保留及三塊下一個欄；肩頸連接在預覽欄之下。

## r3 戰鬥像素頭部與格線

戰鬥本體參考實際 `bridge/crazy-boss-art.mjs` 的 `drawFineDealer()` 及 `bridge/pride-art.mjs` 的 `drawPrideBossHead()`，改由 `bridge/envy/art.mjs` 的 `drawBattleHead()` 繪製四種像素頭部。這是 Canvas 戰鬥美術，沒有新生成／修改概念 PNG，也不偽造提示詞。有限翡翠／苔色／古銅調色、像素五官、階梯眼框與單像素高光；不使用細緻人像裁切。

`images/envy-heads.png` 及 `bridge/assets/envy-heads.webp` 原樣保留作概念候選，r3 戰鬥不引用。頭部、肩部、HUD 與遊戲留白維持，來源程式及試玩截圖供後續 Bot 核對。Bridge 格線只有 25.6 像素的一套，背景裝飾橫線取消。

## r2 塔羅（2026-10-08）

原檔 `images/envy-tarot-atlas-r2.png`，執行圖 `bridge/assets/envy-tarot.webp`。3×2 圖集依序為月亮、寶劍、小丑、眼睛、死神、背面。圖格由 Canvas 取樣並保持比例，文字由程式畫，不烘焙在圖中。生成工具 image_gen；參考 `images/envy-sar.png` 已檢視後交予工具。保留所有 r1 原圖及未選稿；包框改用既有貪婪／傲慢的幾何構圖，不再用 SAR 圖當身體紋理。

以下為這次工具的逐字提示詞：

```
Create an illustration sprite sheet, exactly 3 columns by 2 rows of six square panels, with crisp borders aligned at one third and two thirds width, one half height. Output landscape 1536x1024. Each panel completely filled by a unique richly detailed tarot ART ILLUSTRATION, NO card borders, NO letters, NO numbers, NO watermarks. Match reference dark emerald forest, moss, ancient bronze, luxurious detailed pixel painting, atmospheric game art. Top left: luminous crescent moon reflected in haunted jade swamp, tiny pale flowers. Top middle: glorious straight emerald silver sword embedded in tangled forest roots, bright diagonal magical light. Top right: sinister yet beautiful forest jester wearing pointed moss-green hood and porcelain mask, golden bells, theatrical veil. Bottom left: a huge mysterious emerald eye inside an ancient circular shrine, rays of light, moss. Bottom middle: hooded skeletal forest death with a bronze scythe among spectral luminous green lilies, grand moody composition. Bottom right: ornate dark emerald symmetrical tarot card BACK illustration, centered small eye surrounded by intertwining vines, stars, very rich bronze filigree, no typography. Six panels distinct, square illustration proportions, readable focal objects when viewed at small game-card size. Adapt the reference style, not its dragon composition.
```

## r1 保留紀錄

狀態：供試玩回饋，未獲正式整合批准。素材編碼清單與雜湊見 `sources.json`。生成工具為 image_gen，PNG 原檔保留，WebP 為編碼副本。以下是用途與提示詞要點整理，不聲稱逐字還原工具的原始提示詞。

- **envy-swamp.png**：獨立 16:9 幽暗翡翠沼澤／密林。風格參考現有貪婪細緻像素環境；帶樹根、苔蘚、霧、暗處微小眼睛，中央安靜留給直向遊戲框。沒有 Boss、玩家、文字、HUD、賭場／777／鏡宫元素，完整環境背景。
- **envy-sar.png**：直向最高稀有度 SAR 卡面的細緻像素繪畫；多眼翡翠龍、古銅樹枝角、森林符飾、翡翠與金色光澤、威嚴的非人型龍，無 UI。只用於卡面／變身插畫及外側鱗片紋理，不能直接當全畫面背景。生成底緣殘留小字，程式只取上方 92% 展示；清理草圖另保留，未取代本圖。
- **envy-heads.png**：參考 SAR 龍的材質與色系，真正透明 2×2 四頭部圖集。左上：苔衣小孩、深髮、主眼；右上：正面多眼龍、三眼、古銅樹枝角；左下：巨獨眼與藤蔓觸手；右下：狂暴巨眼、尖刺射線、強烈酸綠威嚴。各象限等大，無文字／場景／傲慢王冠鏡。程式讀取各象限頭部，外側動態本體包框另組合；頭部不壓住血條。
- **envy-worm.png**：參考使用者提供的單眼綠蟲概念，另設計節甲、斑點、三隻可見短足、苔眉、新嘴及葉尖捲尾，保持弱小而非完全複製原角色。透明背景，用於本體揭示與捕蟲。

`images/drafts/envy-worm-reference-draft-not-selected.png` 為較接近原參考的未選用稿，後來依使用者「不能完全跟」改為現行變體。`envy-sar-cleanup-draft.png` 是清字嘗試，仍有底緣細字，不採用。保留草稿供追溯，不作正式形象。

原心心與真貓沿用既有資產；不重新生成。正式整合前仍需專用敗北／勝利圖、選關剪影，以及使用者對本關形象與玩法的明確確認。


## r9 終結插圖

六格結算圖及精確提示詞見 r9-prompts.md，原 PNG 完整保留；運行 WebP。貓沿用原真貓，任何嫉妒畫面不得因普通框或提早 return 省略。圖片不作戰鬥背景／頂部立繪。


## r10 全頁使用

沿用 r9 已生成的六格終結插圖，不重新生成貓或覆寫原 PNG。全頁展示時按原比例 cover 裁切，保持在同一格內，不能拉伸；大貓以原素材獨立覆在螢幕角落。手機／橫向／iPad／桌面要核對主體、文字及按鈕。未生成新圖，原文提示詞仍是 r9-prompts.md。
