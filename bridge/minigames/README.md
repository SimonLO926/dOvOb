# 傲慢小遊戲

試玩：以 HTTP 靜態伺服器開啟 `/bridge/pride-minigames.html`。
可用 `?game=pride-mirror-match`、`?game=pride-crown-choice` 或 `?game=pride-lianliankan` 直接選遊戲。

四個模組均匯出 `id`、`init(options)`、`render(context, state)`、`update(state, dtMs)`、`dispose(state)`、`point(state, x, y)`、`input(state, action)`。
`options` 支援 `difficulty: 'normal' | 'hard'`、可注入 `random`；皇冠額外接受 `bossHpRatio`（0–1）。
`state.status` 為 `playing`、`won`、`lost`，並提供 `timeLeft`（毫秒）、`score`、`hp`。
呼叫者負責映射 Boss 傷害／玩家扣血及完成後切換回合；目前已登記到 `crazy-sins.mjs`，已接入傲慢第一形態輪替。

畫布邏輯座標為 280×560。試玩頁將 pointerdown 映射至此座標，使用 `touch-action:none`，避免短點擊被每幀輸入取樣漏掉；不綁 click，避免重複選牌。

| 遊戲 | Normal | Hard | 得分／懲罰 |
| --- | --- | --- | --- |
| 鏡像配對 | 30秒、4對 | 25秒、6對 | 每對100分；配錯扣2秒，展示650ms後蓋牌；全配對過關 |
| 加冕抉擇 | 15秒、3/6/9頂皇冠 | 11.25秒、6/9/12頂皇冠 | 選中300分過關；選錯扣10/15 HP，同一假皇冠不重扣，350ms冷卻 |
| 連連看 | 45秒、6×4、1200分 | 30秒、6×6、1800分 | 每對100分；最多兩彎，可走空白外圍；全消除過關，無合法配對自動免費重排 |
| Doodle Jump | 45秒、1200米 | 30秒、1600米 | 自動跳躍、左右控制；A 向上射擊幻影，首次落平台及射中幻影各100分；跌落／撞幻影失敗 |

Tower Bloxx 是第二條血半血劇情專用，沒有登記到普通小遊戲池；可在試玩頁「50% 血劇情專用」分組單獨檢查。

皇冠按 Boss 血量 >2/3、>1/3、≤1/3 分三階；真皇冠寶石比假皇冠闊 Normal 3/2/1 像素、Hard 2.5/1.5/1 像素。上方提供真皇冠參考，唔需要靠盲估。

測試：`node bridge/minigames/pride.test.mjs` 或 `node --test bridge/*.test.mjs bridge/minigames/*.test.mjs`。

所有傲慢攻擊／小遊戲共用 `../pride-layout.mjs` 嘅 280×560 文字區域：標題 y=30–50、分數／計時／狀態 y=60–90、玩法提示 y=100–130（遊戲開始首 3 秒）、主區域 y=140–460、回饋 y=475–495、操作 y=505–535。主戰鬥及試玩頁均直接使用呢套座標；舊攻擊場景只縮放繪圖 viewport，觸控用反向映射，傷害、速度及時限保持不變。

Tower Bloxx 全塔以 sine 搖擺，振幅隨層數增加；以各層闊度作質量計算整塔重心，每座樓保持完整闊度及質量，落點偏差會累積外懸、傾斜並加大搖擺。重心（包含當前搖擺）移出基座支撐範圍即冧塔，唔需要等單層完全失去重疊。吊臂保持獨立移動；要預計落下時塔頂位置。「完美／好／差」顯示喺共用回饋區。

新增回歸測試：`node bridge/pride-tower.test.mjs`、`node bridge/pride-layout.test.mjs`；涵蓋重心冧塔、整塔搖擺、移動落點、全部 19 個模式、首 3 秒提示，以及主戰鬥與觸控佈局。
