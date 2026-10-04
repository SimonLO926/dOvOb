import { COLS, ROWS, SAND_SCALE, cellsOf, ghostY } from './logic.mjs?v=1.1.0';
import { drawSession } from './arcade.mjs?v=1.1.0';
export const CRAZY_ARENA = Object.freeze({ x: 12, y: 152, w: 256, h: 356 });
const COLORS = { I: '#64d2ff', O: '#ffd60a', T: '#bf5af2', S: '#30d158', Z: '#ff453a', J: '#0a84ff', L: '#ff9f0a', B: '#9da4b9' };
const SYMBOLS = ['★', '♥', '7', '♠'];
const TILES = ['中', '發', '白', '東'];
function text(c, label, x, y, size = 14, color = '#f5f2ff') {
  c.fillStyle = color; c.font = `bold ${size}px "Pixel Latin", "Pixel Hant", sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(label, x, y);
}
function box(c, x, y, w, h, color, radius = 8) {
  c.fillStyle = color; c.beginPath(); c.roundRect(x, y, w, h, radius); c.fill();
}
function ellipse(c, x, y, rx, ry, color) {
  c.fillStyle = color; c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); c.fill();
}
// Original tabby-and-white character based on the reference: white bib, round eyes, striped tail, gold bell.
export function drawMischiefCat(c, x, y, scale = 1, paw = false) {
  c.save(); c.translate(x, y); c.scale(scale, scale);
  c.lineCap = 'round'; c.lineWidth = 14; c.strokeStyle = '#666456';
  c.beginPath(); c.moveTo(-34, 32); c.quadraticCurveTo(-75, 28, -60, -8); c.stroke();
  c.lineWidth = 5; c.strokeStyle = '#272b2b';
  for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(-65, 3 + i * 9); c.lineTo(-55, 7 + i * 9); c.stroke(); }
  ellipse(c, -10, 31, 36, 29, '#65675b'); ellipse(c, 4, 34, 25, 28, '#f2eee2');
  for (let i = 0; i < 4; i++) { c.beginPath(); c.moveTo(-39 + i * 8, 11); c.lineTo(-43 + i * 8, 31); c.stroke(); }
  c.fillStyle = '#646556'; c.beginPath(); c.moveTo(-26, -15); c.lineTo(-31, -49); c.lineTo(-4, -28); c.lineTo(21, -45); c.lineTo(26, -11); c.closePath(); c.fill();
  c.fillStyle = '#cba59b'; c.beginPath(); c.moveTo(-24, -24); c.lineTo(-26, -40); c.lineTo(-11, -27); c.fill();
  c.beginPath(); c.moveTo(10, -26); c.lineTo(20, -38); c.lineTo(20, -20); c.fill();
  ellipse(c, 0, -9, 29, 27, '#747668');
  c.fillStyle = '#fbf6ea'; c.beginPath(); c.moveTo(0, -30); c.lineTo(-7, -3); c.lineTo(-23, 5); c.quadraticCurveTo(0, 29, 25, 5); c.lineTo(9, -3); c.closePath(); c.fill();
  c.strokeStyle = '#303333'; c.lineWidth = 3;
  for (const dx of [-9, 0, 9]) { c.beginPath(); c.moveTo(dx, -30); c.lineTo(dx * .5, -19); c.stroke(); }
  for (const dx of [-13, 13]) {
    ellipse(c, dx, -10, 8, 8, '#252c29'); ellipse(c, dx, -10, 6, 6, '#b9bf87'); ellipse(c, dx, -10, 3, 5, '#171f1c'); ellipse(c, dx - 2, -12, 1.8, 1.8, '#fff');
  }
  c.fillStyle = '#c78584'; c.beginPath(); c.moveTo(-4, 0); c.lineTo(4, 0); c.lineTo(0, 5); c.fill();
  c.strokeStyle = '#71645b'; c.lineWidth = 1;
  for (const side of [-1, 1]) for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(side * 8, 4 + i * 3); c.lineTo(side * 35, -1 + i * 6); c.stroke(); }
  c.strokeStyle = '#795832'; c.lineWidth = 4; c.beginPath(); c.moveTo(-19, 18); c.quadraticCurveTo(0, 26, 20, 18); c.stroke();
  ellipse(c, 1, 24, 5, 6, '#ecc34c'); c.strokeStyle = '#806014'; c.lineWidth = 1; c.beginPath(); c.moveTo(1, 24); c.lineTo(1, 29); c.stroke();
  ellipse(c, -21, 56, 15, 6, '#f4efe4'); ellipse(c, 15, 57, 15, 6, '#f4efe4');
  if (paw) { box(c, -15, 25, 28, 65, '#f4efe4', 12); ellipse(c, -1, 85, 17, 14, '#f4efe4'); for (const dx of [-8, 0, 8]) ellipse(c, dx, 83, 3, 4, '#dab2b0'); }
  c.restore();
}
function drawDealer(c, s, reduced) {
  const bob = reduced ? 0 : Math.sin(s.elapsed / 500) * 2;
  c.save(); c.translate(140, 73 + bob);
  c.fillStyle = '#ff486d'; c.beginPath(); c.moveTo(-42, -21); c.lineTo(-55, -46); c.lineTo(-13, -31); c.lineTo(0, -48); c.lineTo(13, -31); c.lineTo(55, -46); c.lineTo(42, -21); c.fill();
  box(c, -48, -26, 96, 56, '#ded8e8', 12);
  box(c, -40, -19, 80, 27, '#21152f', 5);
  for (let i = 0; i < 3; i++) text(c, s.phase === 3 ? '7' : SYMBOLS[(i + s.phase) % 4], -25 + i * 25, -4, 20, s.attack ? '#ff486d' : '#ffe5a2');
  c.strokeStyle = '#281b36'; c.lineWidth = 3; c.beginPath(); c.moveTo(-23, 17); c.quadraticCurveTo(0, 34, 23, 17); c.stroke();
  c.restore();
}
function bar(c, x, y, w, value, color) { box(c, x, y, w, 6, '#302138', 3); box(c, x, y, Math.max(0.01, w * value), 6, color, 3); }
function bridgeBoard(c, s) {
  const g = s.bridge, a = CRAZY_ARENA;
  c.save(); c.translate(a.x, a.y); c.scale(a.w / 280, a.h / 560);
  for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
    if (!g.grid[y][x]) continue;
    box(c, x * 28 + 1, y * 28 + 1, 26, 26, COLORS[g.grid[y][x].type] || '#e0b469', 3);
  }
  if (g.sanding && g.sandGrid) {
    const colors = ['#ffd84a', '#ff4b4b', '#3c8dff', '#3dce6e'];
    const size = 28 / SAND_SCALE;
    for (let y = 0; y < g.sandGrid.length; y++) for (let x = 0; x < g.sandGrid[y].length; x++) if (g.sandGrid[y][x]) {
      c.fillStyle = colors[g.sandGrid[y][x] - 1]; c.fillRect(x * size, y * size, size, size);
    }
  }
  if (g.active && g.phase === 'playing') {
    c.globalAlpha = .2;
    for (const [x, y] of cellsOf(g.active.type, g.active.rot, g.active.x, ghostY(g))) box(c, x * 28 + 1, y * 28 + 1, 26, 26, '#fff', 3);
    c.globalAlpha = 1;
    for (const [x, y] of cellsOf(g.active.type, g.active.rot, g.active.x, g.active.y)) box(c, x * 28 + 1, y * 28 + 1, 26, 26, COLORS[g.active.type] || '#d6c6a3', 3);
  }
  c.restore();
}
function miniBoard(c, s, t) {
  const m = s.mini;
  if (s.mode === 'slots' || s.mode === 'tiger') {
    box(c, 20, 188, 240, 166, '#42253f'); box(c, 25, 193, 230, 156, '#22152b');
    for (let i = 0; i < 3; i++) {
      const reel = m.reels[i];
      const value = reel ?? Math.floor(m.clock / (250 - s.phase * 20) + i) % 4;
      box(c, 34 + i * 73, 220, 65, 87, '#f6ebd5', 5);
      text(c, SYMBOLS[value], 66 + i * 73, 262, 36, value === 1 ? '#cf3155' : '#39233d');
      if (s.mode === 'slots' && i === m.stop) { c.strokeStyle = '#ffbf5e'; c.lineWidth = 3; c.strokeRect(34 + i * 73, 220, 65, 87); }
    }
    text(c, s.mode === 'slots' ? `${t('crazyStop')} ${Math.min(3, m.stop + 1)}/3` : m.pending ? `${t('crazyPending')} ${m.pending}` : t('crazyPull'), 140, 389, 18, '#ffc76a');
    if (s.mode === 'tiger') { text(c, t('crazyBankHint'), 140, 423, 12); text(c, t('crazyRiskHint'), 140, 445, 12, '#ff8ca5'); }
  } else if (s.mode === 'cards') {
    text(c, `${t('crazyFindPair')} ${m.target}`, 140, 171, 15, '#ffcf73');
    m.items.forEach((v, i) => {
      const chosen = m.selected.includes(i);
      box(c, 12 + i * 65, 190, 60, 100, chosen ? '#ffdf8c' : '#fff6e9');
      text(c, String(v), 42 + i * 65, 226, 30, '#b32951'); text(c, '♥', 42 + i * 65, 263, 24, '#b32951');
      if (i === m.focus) { c.strokeStyle = '#ff718b'; c.lineWidth = 3; c.strokeRect(12 + i * 65, 190, 60, 100); }
    });
    text(c, t('crazyPairHint'), 140, 355, 13);
  } else if (s.mode === 'mahjong') {
    m.items.forEach((v, i) => {
      if (m.removed.includes(i)) return;
      const x = 28 + (i % 3) * 78, y = 185 + Math.floor(i / 3) * 105;
      box(c, x, y + 5, 68, 88, '#59916b'); box(c, x, y, 68, 85, m.selected.includes(i) ? '#ffdc85' : '#f8f3df');
      text(c, TILES[v], x + 34, y + 42, 34, v === 0 ? '#c13b45' : '#206644');
      if (i === m.focus) { c.strokeStyle = '#ff718b'; c.lineWidth = 3; c.strokeRect(x, y, 68, 85); }
    });
    text(c, t('crazyPairHint'), 140, 435, 13);
  } else if (s.mode === 'pachinko') {
    c.strokeStyle = '#bd839a'; c.lineWidth = 1;
    c.beginPath(); c.moveTo(m.aim, 154); c.lineTo(m.aim, 180); c.stroke();
    for (const p of m.pegs) ellipse(c, p.x, p.y, 4, 4, '#ffe5aa');
    for (const b of m.balls) ellipse(c, b.x, b.y, 5, 5, '#a0efff');
    for (let i = 0; i < 5; i++) { box(c, i * 56 + 3, 475, 50, 32, i === 2 ? '#8e2346' : i % 2 ? '#555097' : '#245948', 3); text(c, i === 2 ? '−6' : i % 2 ? '⚔' : '+8', i * 56 + 28, 491, 17); }
  }
}
export function drawCrazy(c, s, t, { reducedMotion = false } = {}) {
  c.save(); c.clearRect(0, 0, 280, 560);
  const bg = c.createLinearGradient(0, 0, 0, 560); bg.addColorStop(0, '#21112e'); bg.addColorStop(1, '#0b1020'); c.fillStyle = bg; c.fillRect(0, 0, 280, 560);
  text(c, t(s.boss.name), 140, 15, 16, '#ffd69b'); drawDealer(c, s, reducedMotion);
  text(c, `${s.damageLeft === 0 ? '◇ ' : ''}BOSS ${s.bossHp}/${s.boss.hp}`, 140, 117, 12, '#ff829d'); bar(c, 24, 128, 232, s.bossHp / s.boss.hp, '#ff476f');
  const a = CRAZY_ARENA;
  box(c, a.x - 2, a.y - 2, a.w + 4, a.h + 4, s.attack ? '#a63b5e' : '#674068', 5); box(c, a.x, a.y, a.w, a.h, '#100e1b', 3);
  if (s.mode === 'bridge' || s.mode === 'sand') bridgeBoard(c, s);
  else if (s.arcade) {
    c.save(); c.translate(a.x, a.y); c.scale(a.w / 280, a.h / 560); drawSession(c, s.arcade, '#f2deef', { speed: t('arcadeSpeed'), double: t('arcadeDouble'), triple: t('arcadeTriple'), wide: t('arcadeWide'), narrow: t('arcadeNarrow') }); c.restore();
  } else miniBoard(c, s, t);
  text(c, `${t('crazyMode_' + s.mode)} · ${Math.ceil(Math.max(0, s.timeLeft) / 1000)}s`, 140, 141, 12, '#ffc7d6');
  if (s.cat) {
    const warning = s.cat.time < 1200;
    drawMischiefCat(c, warning ? 273 : 241, warning ? 328 : 354, .75, !warning && !s.cat.gift);
    if (warning) text(c, '!', 253, 295, 25, '#ffd46b');
  }
  text(c, `HP ${s.hp}/100 · ${t('crazyPhaseLabel')} ${s.phase}/3`, 140, 522, 14, '#f2deef');
  bar(c, 24, 535, 232, s.hp / 100, s.hp <= 25 ? '#ff466c' : '#6bdfb2');
  if (s.attack) text(c, `${t('crazyAttackWarning')} ${Math.ceil(s.attack.time / 1000)}`, 140, 94, 11, '#fff1a2');
  else if (s.noticeTime > 0) text(c, `${t(s.notice)}${s.noticeAmount ? ` ${s.noticeAmount > 0 ? '+' : ''}${s.noticeAmount}` : ''}`, 140, 550, 11, '#ffe0ab');
  if (s.hitFlash > 0) { c.fillStyle = `rgba(255,40,80,${s.hitFlash / 1500})`; c.fillRect(0, 0, 280, 560); }
  c.restore();
}
