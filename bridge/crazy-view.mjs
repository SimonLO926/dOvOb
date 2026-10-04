import { COLS, ROWS, SAND_SCALE, SAND_HEX, cellsOf, ghostY, sandPaintsFor } from './logic.mjs?v=1.1.1';
import { drawSession } from './arcade.mjs?v=1.1.1';
export const CRAZY_ARENA = Object.freeze({ x: 12, y: 152, w: 256, h: 356 });
export const CRAZY_BLOCK_ARENA = Object.freeze({ x: 12, y: 152, w: 256, h: 512 });
export function crazyCanvasHeight(mode) { return mode === 'bridge' || mode === 'sand' ? 720 : 560; }
export function crazyPlayfield(mode) {
  const a = mode === 'bridge' || mode === 'sand' ? CRAZY_BLOCK_ARENA : CRAZY_ARENA;
  const scale = Math.min(a.w / 280, a.h / 560);
  return { x: a.x + (a.w - 280 * scale) / 2, y: a.y + (a.h - 560 * scale) / 2, w: 280 * scale, h: 560 * scale, scale };
}
const catPhoto = typeof Image === 'undefined' ? null : new Image();
export const catImageReady = catPhoto ? new Promise(resolve => {
  catPhoto.onload = () => resolve(true);
  catPhoto.onerror = () => resolve(false);
  catPhoto.src = new URL('./assets/mischief-cat.png?v=1.1.1', import.meta.url).href;
}) : Promise.resolve(false);
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
// Photographic cutout: keep the image aspect ratio and smooth fur edges.
export function drawMischiefCat(c, x, y, scale = 1, facingLeft = false) {
  if (!catPhoto?.complete || !catPhoto.naturalWidth) return;
  const w = 160 * scale, h = w * catPhoto.naturalHeight / catPhoto.naturalWidth;
  c.save(); c.translate(x, y); if (facingLeft) c.scale(-1, 1);
  c.imageSmoothingEnabled = true; c.drawImage(catPhoto, -w / 2, -h / 2, w, h); c.restore();
}
const DEALER_PIXELS = [
  '................................',
  '..C............C.............C..',
  '..CCC.........CCC..........CCC..',
  '...CCCC......CCCCC......CCCCC...',
  '...CCCCCCCCCCCCCCCCCCCCCCCCC....',
  '....CCCCCCCCCCCCCCCCCCCCCC......',
  '.....OOOOOOOOOOOOOOOOOOOOO......',
  '....OFFFFFFFFFFFFFFFFFFFFFO.....',
  '...OFFSSFFFFFFFFFFFFFFSSFFFO....',
  '...OFSSMMMMMMMMMMMMMMMMSSFFO....',
  '...OFSMMMMMMMMMMMMMMMMMMSFO.....',
  '...OFSMMMMMMMMMMMMMMMMMMSFO.....',
  '...OFSMMMMMMMMMMMMMMMMMMSFO.....',
  '...OFSMMMMMMMMMMMMMMMMMMSFO.....',
  '...OFSMMMMMMMMMMMMMMMMMMSFO.....',
  '...OFFSSFFFFFFFFFFFFFFSSFFO....',
  '...OFFFFSSFFFFFFFFFFSSFFFFO.....',
  '....OFFFFOOOOOOOOOOOOFFFFO......',
  '....OFFFOFFOFFOFFOFFOFFFO.......',
  '.....OFFFFFFFFFFFFFFFFFO........',
  '......OOSSSSSSSSSSSSOO..........',
  '........OOOOOOOOOOOO............',
  '..........VVVVVVVV..............',
  '........VVVVVVVVVVVV............',
];
const PIXEL_SYMBOLS = [
  ['.X.X.', 'XXXXX', 'XXXXX', '.XXX.', '..X..'],
  ['..X..', '.XXX.', 'XXXXX', '.X.X.', '..X..'],
  ['XXXXX', '....X', '...X.', '..X..', '..X..'],
];
function drawDealer(c, s, reduced) {
  const pixel = 3, left = 92, top = 30 + (reduced ? 0 : Math.round(Math.sin(s.elapsed / 500)) * pixel);
  const palette = { C: s.phase === 3 ? '#ffc25d' : '#ff486d', O: '#100e20', F: '#f4e9f8', S: '#b9a6d2', M: '#281331', V: '#74528e' };
  c.save(); c.imageSmoothingEnabled = false;
  DEALER_PIXELS.forEach((row, y) => [...row].forEach((v, x) => {
    if (v === '.') return;
    c.fillStyle = palette[v]; c.fillRect(left + x * pixel, top + y * pixel, pixel, pixel);
  }));
  for (let i = 0; i < 3; i++) {
    const glyph = PIXEL_SYMBOLS[s.phase === 3 ? 2 : (i + s.phase - 1) % 3];
    c.fillStyle = s.attack ? '#ff4969' : '#ffe5a2';
    glyph.forEach((row, y) => [...row].forEach((v, x) => { if (v === 'X') c.fillRect(left + 8 * pixel + i * 6 * pixel + x * pixel, top + 10 * pixel + y * pixel, pixel, pixel); }));
  }
  c.restore();
}
function bar(c, x, y, w, value, color) { box(c, x, y, w, 6, '#302138', 3); box(c, x, y, Math.max(0.01, w * value), 6, color, 3); }
function bridgeBoard(c, s, paint) {
  const g = s.bridge, a = crazyPlayfield(s.mode);
  c.save(); c.translate(a.x, a.y); c.scale(a.scale, a.scale);
  if (paint.paintGrid && s.curses.blind <= 0) paint.paintGrid(c, g.grid);
  else if (s.curses.blind <= 0) for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
    if (!g.grid[y][x]) continue;
    box(c, x * 28 + 1, y * 28 + 1, 26, 26, COLORS[g.grid[y][x].type] || '#e0b469', 3);
  }
  if (g.sanding && g.sandGrid && s.curses.blind <= 0) {
    const colors = SAND_HEX;
    const size = 28 / SAND_SCALE;
    for (let y = 0; y < g.sandGrid.length; y++) for (let x = 0; x < g.sandGrid[y].length; x++) if (g.sandGrid[y][x]) {
      c.fillStyle = colors[g.sandGrid[y][x] - 1]; c.fillRect(x * size, y * size, size, size);
    }
  }
  if (g.active && g.phase === 'playing') {
    if (paint.paintPiece) {
      paint.paintPiece(c, { ...g.active, y: ghostY(g) }, true);
      paint.paintPiece(c, g.active, false);
    } else {
      const draw = (y, alpha) => {
        const cells = cellsOf(g.active.type, g.active.rot, g.active.x, y);
        const colors = g.active.sand == null ? cells.map(() => COLORS[g.active.type] || '#d6c6a3')
          : sandPaintsFor(g.active.type, cells, g.active.sand, g.active.rot).map(index => SAND_HEX[index]);
        c.globalAlpha = alpha;
        cells.forEach(([x, cy], index) => box(c, x * 28 + 1, cy * 28 + 1, 26, 26, colors[index], 3));
      };
      draw(ghostY(g), .2); draw(g.active.y, 1);
    }
  }
  c.restore();
}
function drawBridgePreviews(c, s, t, paintPiece) {
  if (!['bridge', 'sand'].includes(s.mode)) return;
  const g = s.bridge;
  text(c, t('keep'), 40, 37, 10, '#cbb8d9'); text(c, t('next'), 240, 37, 10, '#cbb8d9');
  const preview = (piece, x, y) => {
    if (!piece) return;
    const cells = cellsOf(piece.type, 0, 0, 0), minX = Math.min(...cells.map(([x]) => x)), minY = Math.min(...cells.map(([, y]) => y));
    if (paintPiece) {
      c.save(); c.translate(x, y); c.scale(6 / 28, 6 / 28);
      paintPiece(c, { ...piece, rot: 0, x: -minX, y: -minY }, false); c.restore();
    } else {
      const colors = piece.sand == null ? cells.map(() => COLORS[piece.type] || '#e0b469') : sandPaintsFor(piece.type, cells, piece.sand, 0).map(index => SAND_HEX[index]);
      cells.forEach(([cx, cy], i) => box(c, x + (cx - minX) * 6, y + (cy - minY) * 6, 5, 5, colors[i], 1));
    }
  };
  c.save(); c.globalAlpha = g.holdLocked || g.noHoldLeft > 0 ? .35 : 1; preview(g.hold, 26, 53); c.restore();
  g.queue.slice(0, 3).forEach((piece, i) => preview(piece, 226, 49 + i * 21));
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
export function drawCrazy(c, s, t, { reducedMotion = false, paintGrid, paintPiece } = {}) {
  const height = crazyCanvasHeight(s.mode);
  c.save(); c.clearRect(0, 0, 280, height);
  const bg = c.createLinearGradient(0, 0, 0, height); bg.addColorStop(0, '#21112e'); bg.addColorStop(1, '#0b1020'); c.fillStyle = bg; c.fillRect(0, 0, 280, height);
  text(c, `${t('crazyGreed')} · ${t(s.boss.name)}`, 140, 15, 16, '#ffd69b'); drawDealer(c, s, reducedMotion); drawBridgePreviews(c, s, t, paintPiece);
  text(c, `${s.damageLeft === 0 ? '◇ ' : ''}BOSS ${s.bossHp}/${s.boss.hp}`, 140, 117, 12, '#ff829d'); bar(c, 24, 128, 232, s.bossHp / s.boss.hp, '#ff476f');
  const a = s.arcade || ['bridge', 'sand'].includes(s.mode) ? crazyPlayfield(s.mode) : CRAZY_ARENA;
  box(c, a.x - 2, a.y - 2, a.w + 4, a.h + 4, s.attack ? '#a63b5e' : '#674068', 5); box(c, a.x, a.y, a.w, a.h, '#100e1b', 3);
  if (s.mode === 'bridge' || s.mode === 'sand') bridgeBoard(c, s, { paintGrid, paintPiece });
  else if (s.arcade) {
    c.save(); c.translate(a.x, a.y); c.scale(a.scale, a.scale);
    if (paintGrid) paintGrid(c, s.arcade.grid);
    else for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) if (s.arcade.grid[y][x]) box(c, x * 28 + 1, y * 28 + 1, 26, 26, COLORS[s.arcade.grid[y][x].type] || '#e0b469', 3);
    drawSession(c, s.arcade, '#f2deef', { speed: t('arcadeSpeed'), double: t('arcadeDouble'), triple: t('arcadeTriple'), wide: t('arcadeWide'), narrow: t('arcadeNarrow') }); c.restore();
  } else miniBoard(c, s, t);
  text(c, `${t('crazyMode_' + s.mode)} · ${Math.ceil(Math.max(0, s.timeLeft) / 1000)}s`, 140, 141, 12, '#ffc7d6');
  if (s.cat) {
    const warning = s.cat.time < 1200;
    const target = s.cat.action === 'boss' ? { x: 207, y: 74 }
      : s.cat.action === 'heal' || s.cat.action === 'player' ? { x: 250, y: height - 100 }
      : { x: 240, y: a.y + a.h * .6 };
    const enter = reducedMotion ? 1 : Math.min(1, s.cat.time / 450);
    drawMischiefCat(c, warning ? 316 - enter * 35 : target.x, warning ? target.y : target.y + 4, .8, true);
    if (warning) text(c, '!', 255, target.y - 52, 25, '#ffd46b');
    if (!warning && s.cat.action !== 'heal') {
      c.save(); c.strokeStyle = s.cat.action === 'player' ? '#ff6889' : '#ffe9c9'; c.lineWidth = 3;
      for (let i = 0; i < 3; i++) { c.beginPath(); c.moveTo(target.x - 50 + i * 9, target.y - 24); c.lineTo(target.x - 28 + i * 9, target.y + 11); c.stroke(); }
      c.restore();
    }
    if (!warning && s.cat.cells?.length) {
      const life = Math.max(0, 1 - (s.cat.time - 1200) / 1200);
      c.save(); c.globalAlpha = life;
      for (const cell of s.cat.cells) {
        const x = a.x + cell.x * 28 * a.scale, y = a.y + cell.y * 28 * a.scale;
        box(c, x, y, 26 * a.scale, 26 * a.scale, '#fff2bd', 2);
      }
      c.restore();
    }
  }
  text(c, `HP ${s.hp}/100 · ${t('crazyPhaseLabel')} ${s.phase}/3`, 140, height - 38, 14, '#f2deef');
  bar(c, 24, height - 25, 232, s.hp / 100, s.hp <= 25 ? '#ff466c' : '#6bdfb2');
  if (s.attack) text(c, `${t('crazyAttackWarning')} ${Math.ceil(s.attack.time / 1000)}`, 140, 94, 11, '#fff1a2');
  else if (s.noticeTime > 0) text(c, `${t(s.notice)}${s.noticeAmount ? ` ${s.noticeAmount > 0 ? '+' : ''}${s.noticeAmount}` : ''}`, 140, height - 10, 11, '#ffe0ab');
  if (s.hitFlash > 0) { c.fillStyle = `rgba(255,40,80,${s.hitFlash / 1500})`; c.fillRect(0, 0, 280, height); }
  c.restore();
}
