> 下方保留來源更新包的歷史設計；最新實作與使用者確認規則以 [PRIDE_PREVIEW.md](PRIDE_PREVIEW.md) 及 [CRAZY_MUST_READ.md](CRAZY_MUST_READ.md) 為準。

> 來源更新包的歷史設計紀錄，數值及流程已被 r6 調整。現行 HP、鏡數、操作與逃塔規則請看 [PRIDE_PREVIEW.md](PRIDE_PREVIEW.md)，修改前閱讀 [CRAZY_MUST_READ.md](CRAZY_MUST_READ.md)。

# 傲慢整合（任務 4）

修改前先讀 [Crazy 關卡製作必讀](CRAZY_MUST_READ.md)。貓是七大罪後「貓之試煉」的伏筆，各罪都保留；本檔舊數值如與必讀或最新試玩說明不同，以最新規則為準。

- 貪婪完整通關存檔 `bridge-greed-cleared=1` 解鎖傲慢；傲慢通關記錄 `bridge-crazy-cleared-pride=1`。
- 傲慢第一形態 1200 HP，宮殿／鏡面／皇冠 Canvas 登場及勝利演出，Boss 名牌顯示傲慢。
- 每場從 breakout／pinball／bbtan／sand 抽兩款，和四款小遊戲（含 Doodle Jump）、三種攻擊放入輪替牌袋；每三回合返回 Bridge。貪婪原有配置及路徑保留。
- 小遊戲原生計時、得分與皇冠扣血映射至 Crazy；每 100 分造成 10 Boss 傷害，過關額外 20 傷害及 12 回血，沿用每回合傷害上限。攻擊回合存活造成 24 傷害。
- 所有模組傳入 Normal／Hard；Normal 回血全額，Hard 半額。
- 20% 鎖血立即進 45 秒鏡中對決，踩亮換位鏡座後用空白鍵封印延遲鏡像三次，期間暫停一般回合、偷襲、貓、總時限；成功打敗國王並計分，接敗北圖、變身及鏡之化身 Bridge，失敗直接扣 80 HP，存活者返回 Bridge，20 秒後重試。
- 排行榜：Hard `bridge-best-crazy-pride`、Normal `bridge-best-crazy-pride-normal`，選罪畫面一併顯示兩罪兩檔紀錄。

## 驗證

```sh
node --test bridge/*.test.mjs bridge/minigames/*.test.mjs
node bridge/crazy-pride.test.mjs
```

13 個測試檔全部通過；新增整合測試 9 項，涵蓋解鎖、配置與輪替、模組登記與輸入、分檔存檔、回血、20% 觸發／鎖血、勝利計分、失敗／重試、總時限、攻擊單次計時、貓及 arcade 中斷。
本工作區沒有 `bridge/tests/`；所有現有 `.test.mjs` 都包含在上述命令。

本機 Chromium 自動驗證貪婪通關解鎖、傲慢六種模組繪製／更新、實際 ArrowUp 及畫布 pointer 選皇冠、兩檔鏡中對決自然三次命中、勝利畫面及獨立存檔，console error 為 0。一般 Boss 扣血及貪婪金庫目標用測試接口加速；不宣稱已完成真人全場遊玩。

## 已知限制

- 傲慢沿用現有 Crazy 音樂，未新增專屬音軌。
- 小遊戲原有畫面內文仍主要為中文；新增模式名稱／提示在中文使用中文，其餘語系後備英文。
- 全場難度平衡及手機實機手感仍需真人試玩；自動驗證不代替這部分。
