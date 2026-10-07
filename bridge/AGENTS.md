# Bridge / Crazy 工作指引

**每個新 Boss 先交付試玩，等使用者明確確認該 Boss「OK」，才推送正式整合、建立及合併 PR（pull）。** 不得以測試通過或前一個 Boss 的批准代替本關確認；依 [CRAZY_MUST_READ.md](CRAZY_MUST_READ.md#每個新-boss-的交付流程) 執行。

修改 Crazy、七大罪 Boss、美術、遊戲框、HUD、觸控或試玩交付時，先依序閱讀：

1. [BOSS_UI_MUST_READ.md](BOSS_UI_MUST_READ.md)：貪婪與傲慢各型態的畫面／操作規範、圖片生成與已採用參考、例外及修改後驗收表。
2. [CRAZY_MUST_READ.md](CRAZY_MUST_READ.md)：使用者確認的世界觀、美術、玩法、操作與交付規則。

新增 Boss 或小遊戲也必須沿用共用畫面規則。不要從舊說明還原已取消的頂部立繪、Boss HP 數字、A／B 按鍵、SAFE 圓圈或遮擋遊戲的成功動畫。實作與文件不一致時，記錄差異；使用者最新明確要求優先。

沿用現有版本與分支狀態，保留來源更新包的全部修改。針對玩法改動執行相關 Node 測試，並檢查手機、iPad 與桌面比例。

純文件修改檢查相對連結及規則一致性即可，不需重跑玩法測試；修改畫面／互動時，依 `BOSS_UI_MUST_READ.md` 的驗收表實際檢查。
