# 宣傳片拍攝與正式關卡（1.2.31）

先讀 [Boss 畫面規範](BOSS_UI_MUST_READ.md)及 [Crazy 必讀](CRAZY_MUST_READ.md)。

## 暫時解鎖已推出 Boss

在遊戲網站同一分頁的瀏覽器 Console 執行：

```js
sessionStorage.setItem('bridge-filming-unlock', '1');
location.reload();
```

再選 Crazy／七大罪，可選貪婪、傲慢、嫉妒。仍經對應預覽頁再按「挑戰」，Normal／Hard 使用原玩法。尚未推出的四關保持鎖住；這不是無敵或直接勝利代碼。

此旗標只保存在目前分頁的 sessionStorage，不覆蓋原有通關存檔。啟用時開始的三位 Boss 戰鬥不寫正式通關或排行榜，後續關卡剪影仍依真正通關紀錄顯示。正式戰鬥開始時固定拍攝狀態；中途關掉旗標也不能把拍攝戰鬥存成正式成績。新分頁／新瀏覽器環境請重新執行。

停用後重新載入，再開始正式挑戰：

```js
sessionStorage.removeItem('bridge-filming-unlock');
location.reload();
```

Playwright JavaScript 範例，先進入遊戲同源網站再設定：

```js
await page.goto('https://simonlo926.github.io/dOvOb/bridge/');
await page.evaluate(() => sessionStorage.setItem('bridge-filming-unlock', '1'));
await page.goto('https://simonlo926.github.io/dOvOb/bridge/index.html?bosses=1');
```

## 直接拍攝特定演出

- [嫉妒獨立試玩](envy-preview.html)：選完整挑戰或特定回合。`first-bridge`、`dragon`、`cyclops`、`rage`、`chase`、`final-bridge`、`capture` 可直接拍攝對應演出；另有 SR／SAR 卡牌示範。試玩始終不寫正式進度／排行榜。
- [傲慢試玩說明](PRIDE_PREVIEW.md)：獨立試玩可選各階段及紅鏡／逃塔；同樣不寫正式紀錄。
- 正式嫉妒為 [envy.html](envy.html)，只接受完整挑戰，不能用 scenario 參數跳過前半。直接網址也會核對傲慢通關或拍攝旗標；主選關不連到測試 Preview。

## 正式接線及維護

1.2.31 使用者明確要求「接好他」，正式開放嫉妒。既有 `bridge-crazy-cleared-pride=1` 直接解鎖第三關，不需要重打或重置。點嫉妒先預覽窺視之子，挑戰沿用選關的難度及主遊戲音樂／音效／危險效果設定；退出返回選關並保留嫉妒選中。

正式與試玩共用嫉妒原引擎、像素包框、原心心／真貓、七首 BGM、倒數與戰鬥回饋。20% 逃離到100%立即完成→留下10% Bridge反攻→實際清空第二條血，才寫 `bridge-crazy-cleared-envy=1`，並顯示已通關的多眼龍剪影。捕捉本體仍是可選彩蛋，略過／失敗不撤銷已擊破的紀錄。

嫉妒 Normal／Hard 分開排名；按既有 Crazy 的反攻傷害×10及勝利5000＋當時玩家HP×50計分。化身敗北時只記一次，捕捉及重試不重複發獎勵。不把第一條血敗北、20%逃離成功、獨立 Preview 或拍攝模式當正式通關。後續未推出 Boss 仍須各自先試玩、取得使用者確認才正式開放。
