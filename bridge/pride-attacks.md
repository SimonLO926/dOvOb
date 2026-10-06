# 任務 3：傲慢攻擊接口

試玩：以 HTTP 開啟 `bridge/pride-attacks.html`。方向鍵／拖曳移動，SPACE／畫面按鈕射擊或跳躍。

`pride-attacks.mjs` 沿用 reaction 接口：`createPrideAttack(mode, { difficulty, bossHpRatio })` 放入 `s.mini`；`prideInput(s, action)`、`pridePoint(s, x, y)`、`updatePrideAttack(s, dt, { hurt, hit })`、`drawPrideAttack(ctx, s.mini)`。hurt/hit callback 參數為 `(s, amount, reason)`，沿用 Crazy 的無敵時間。每次危險命中 8 HP。

- 王之蔑視：追蹤 1000ms，鎖定預告 Normal 800ms／Hard 550ms，雙眼掃射 650ms；第一條血保留杏仁雙眼，加強版依剩餘鏡數從不同位置出招。不提供 SAFE 區。
- 鏡像反射：3 面鏡，指定鏡 3 發打碎，射擊冷卻 220ms，子彈速度 240px/s；反射攻擊亦會傷害玩家。碎裂 8 向彈幕 Normal 65／Hard 95px/s；打碎造成 Boss 12 傷害。5000ms 限時，未打碎可站綠圈死角避罰，6500ms 更換鏡。
- 加冕衝擊：血量 >2/3、>1/3、≤1/3 對應 1、2、3 皇冠，350ms 間隔。Normal 1000ms／Hard 700ms 預告；衝擊波 65／95px/s，缺口角寬 1.1 rad；跳躍保護 650ms，落點撞擊仍要避開。
- 鏡中對決：45000ms；鏡像重播 2000ms 前路線。踩亮換位鏡座（Normal 200ms／Hard 250ms），離開後按空白鍵主動封鏡三次。生效 520ms／380ms，冷卻 1800ms／2100ms，落空消耗蓄力。鏡像預警 800ms／650ms 後發射 3／5 枚可躲避碎片。Normal 3 次機會／Hard 2 次，踩自己的有效封印也扣機會；機會耗盡或逾時失敗。畫面鏡射、輸入座標同步反轉。

任務 4 接入：Boss 扣血要以 20% 為下限；`prideDuelLocked` 時拒絕 Boss 傷害。扣血後呼叫 `startPrideFinisher(s)`。處決 mode 直接更新 `updateMirrorDuel`，完成呼叫 `finishPrideFinisher`：成功 Boss 即死，失敗直接扣 80HP（不受無敵保護），存活者回 Bridge 並鎖血；每幀 `retryPrideFinisher(s, dt)` 20 秒後重試。處決期間暫停一般回合、Boss 偷襲、貓及總時限計算，並同步 `s.timeLeft=s.mini.timeLeft`。成功演出／積分／排行由任務 4 統一接入。

傲慢仍 `developed: false`，不提早開放未完成整合的 Boss。貪婪和 Marathon 實作未修改。
