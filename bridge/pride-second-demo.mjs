// Demo lifecycle adapter; encounter mechanics stay in pride-second.mjs.
import { initPrideSecond, createPrideSecondRound, prideSecondPoint, prideSecondInput, updatePrideSecond, drawPrideSecond, prideSecondThresholds, PRIDE_SECOND_GAMES } from './pride-second.mjs';
export function createSecondDemo(mode, { difficulty = 'normal', bossHpRatio = 1, random = Math.random } = {}) {
  const s = { mode, difficulty, random, held: new Set(), events: [], hp: 100, bossHp: 100 * bossHpRatio, protection: 0, over: false };
  initPrideSecond(s); prideSecondThresholds(s);
  s.mini = createPrideSecondRound(s); s.timeLeft = s.mini.duration;
  return s;
}
export function inputSecondDemo(s, action) { if (!s.over) prideSecondInput(s, action); }
export function pointSecondDemo(s, x, y) {
  if (s.over) return;
  prideSecondPoint(s, x, y);
}
export function updateSecondDemo(s, dt) {
  if (s.over) return;
  dt = Math.max(0, Math.min(50, dt));
  s.timeLeft = Math.max(0, s.timeLeft - dt);
  s.protection = Math.max(0, s.protection - dt);
  updatePrideSecond(s, dt, {
    hurt: (_, amount) => { if (!s.protection) { s.hp = Math.max(0, s.hp - amount); s.protection = 650; } },
    hit: (_, amount) => { s.bossHp = Math.max(0, s.bossHp - amount); }
    ,heal:(_,amount)=>{s.hp=Math.min(100,s.hp+(s.difficulty==='hard'?Math.max(1,Math.floor(amount/2)):amount));}
  });
  if (!s.hp || s.mini.failed) s.result = '失敗';
  else if (s.mini.finished) s.result = '完成';
  else if (!s.timeLeft&&s.mode!=='pride-red-survival') s.result = PRIDE_SECOND_GAMES.includes(s.mode) ? '時間到 · 再試一次' : '完成';
  s.over = Boolean(s.result);
  if (s.over) s.held.clear();
}
export function drawSecondDemo(c, s) {
  c.clearRect(0, 0, 280, 560);
  drawPrideSecond(c, s);
}
export function secondDemoModule(mode) {
  return { init: options => createSecondDemo(mode, options), input: inputSecondDemo, point: pointSecondDemo, update: updateSecondDemo, render: drawSecondDemo, dispose: s => { s.over = true; s.held.clear(); } };
}
