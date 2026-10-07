import { drawPrideEscape, PRIDE_ESCAPE_ID } from './pride-escape.mjs';
import { PRIDE_SECOND_MODES, SECOND_NAMES, drawPrideSecond } from './pride-second.mjs';
import { PRIDE_MINIGAMES } from './minigames/index.mjs';
import { PRIDE_ATTACKS, drawPrideAttack } from './pride-attacks.mjs';
import { drawMirrorDuel } from './pride-finisher.mjs';
import { drawPridePalace, drawPrideFrame, drawPrideBossHead } from './pride-art.mjs';
import { drawPrideBackdrop } from './pride-theme.mjs';
import { drawVault } from './crazy-vault.mjs?v=1.2.28';
import { drawFineDealer, drawFineGauntlet } from './crazy-boss-art.mjs?v=1.2.28';
import { GREED_ATTACKS } from './crazy-reactions.mjs?v=1.2.28';
import { drawReaction, drawPusher } from './crazy-reaction-view.mjs?v=1.2.28';
import { COLS, ROWS, SAND_SCALE, SAND_HEX, cellsOf, ghostY, sandPaintsFor } from './logic.mjs?v=1.2.28';
import { drawSession } from './arcade.mjs?v=1.2.28';
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
  catPhoto.src = new URL('./assets/mischief-cat.webp?v=1.2.28', import.meta.url).href;
}) : Promise.resolve(false);
const COLORS = { I: '#64d2ff', O: '#ffd60a', T: '#bf5af2', S: '#30d158', Z: '#ff453a', J: '#0a84ff', L: '#ff9f0a', B: '#9da4b9' };
const SYMBOLS = ['★', '♥', '7', '♠'];
const TILES = ['中', '發', '白', '東'];
function text(c, label, x, y, size = 14, color = '#f5f2ff') {
  c.fillStyle = color; c.font = `bold ${size}px "Pixel Latin", "Pixel Hant", sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(label, x, y, 260);
}
function box(c, x, y, w, h, color, radius = 8) {
  c.fillStyle = color; c.beginPath(); c.roundRect(x, y, w, h, radius); c.fill();
}
function ellipse(c, x, y, rx, ry, color) {
  c.fillStyle = color; c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); c.fill();
}
// Photographic cutout: keep the image aspect ratio and smooth fur edges.
export function drawMischiefCat(c, x, y, scale = 1, facingLeft = false, pose = null) {
  if (!catPhoto?.complete || !catPhoto.naturalWidth) return;
  const w = 160 * scale, h = w * catPhoto.naturalHeight / catPhoto.naturalWidth;
  const time = pose?.reducedMotion ? 0 : (pose?.time || 0);
  const action = pose?.action || 'idle';
  const breath = pose && !pose.reducedMotion ? Math.sin(time / 420) : 0;
  c.save(); c.translate(x, y - breath * 2); if (facingLeft) c.scale(-1, 1);
  if (pose) {
    if (action === 'hurt') { c.translate(0, h * .17); c.scale(1.12, .66); c.rotate(-.08); }
    else if (action === 'attack') { c.rotate(pose.reducedMotion ? -.08 : Math.sin(time / 85) * .12); }
    else if (action === 'victory') { c.translate(0, -h * .06); c.scale(.96, 1.08); }
    else c.scale(1 + breath * .012, 1 + breath * .025);
  }
  c.imageSmoothingEnabled = true;
  if (pose && (action === 'attack' || action === 'victory')) {
    // The cutout is a reclining cat: its two front paws are at the lower right.
    const paws=[{x:w*.15,y:h*.29,w:w*.19,h:h*.19},{x:w*.35,y:h*.21,w:w*.12,h:h*.26}];
    c.save(); c.beginPath(); c.rect(-w/2,-h/2,w,h);
    for(const paw of paws)c.rect(paw.x,paw.y,paw.w,paw.h);
    c.clip('evenodd');c.drawImage(catPhoto,-w/2,-h/2,w,h);c.restore();
    for(const [i,paw] of paws.entries()){
      c.save();c.translate(paw.x+paw.w*.5,paw.y);
      const swing=action==='victory'?-2.5-i*.2:pose.reducedMotion?-.65:Math.sin(time/85+i*.4)*.65-.65;
      c.rotate(swing);c.translate(-paw.x-paw.w*.5,-paw.y);
      c.beginPath();c.rect(paw.x,paw.y,paw.w,paw.h);c.clip();
      c.drawImage(catPhoto,-w/2,-h/2,w,h);c.restore();
    }
  } else c.drawImage(catPhoto, -w / 2, -h / 2, w, h);
  c.restore();
}
const PIXEL_SYMBOLS = [
  ['.X.X.', 'XXXXX', 'XXXXX', '.XXX.', '..X..'],
  ['..X..', '.XXX.', 'XXXXX', '.X.X.', '..X..'],
  ['XXXXX', '....X', '...X.', '..X..', '..X..'],
];
export function drawCrazyFrame(c, s, { reducedMotion = false } = {}) {
  const height = crazyCanvasHeight(s.mode);
  if (s.config?.id === 'pride') { drawPrideFrame(c, height, s, reducedMotion); return; }
  c.clearRect(0, 0, 560, height);
  const gold = s.form === 2, attack = !!s.attack;
  const trim = '#ffd361';
  const body = gold ? '#6c173c' : '#47172e';
  const pulse = reducedMotion ? 0 : Math.round(Math.sin(s.elapsed / 350)) * 4;
  c.save(); c.imageSmoothingEnabled = false;
  // Stepped shoulders and robes surround the board (x=140..420); keep the arena clear.
  for (const side of [-1, 1]) {
    c.save(); if (side === 1) { c.translate(560, 0); c.scale(-1, 1); }
    c.fillStyle = body;
    c.beginPath(); c.moveTo(140, 65); c.lineTo(110, 65); c.lineTo(110, 85);
    c.lineTo(82, 85); c.lineTo(82, 125); c.lineTo(64, 125); c.lineTo(64, height - 75);
    c.lineTo(90, height - 75); c.lineTo(90, height - 45); c.lineTo(136, height - 45);
    c.lineTo(136, 120); c.lineTo(140, 120); c.closePath(); c.fill();
    // Bevelled pauldrons, suit insignia and ruby brooches echo the boss concept.
    c.fillStyle = gold ? '#7a451e' : '#4e2534';
    c.beginPath(); c.moveTo(81,82); c.lineTo(126,82); c.lineTo(136,92); c.lineTo(136,142); c.lineTo(124,154); c.lineTo(80,148); c.lineTo(73,133); c.lineTo(73,96); c.closePath(); c.fill();
    c.fillStyle = gold ? '#bd863c' : '#842d49'; c.fillRect(78,94,52,39);
    c.fillStyle = '#e5b866'; c.fillRect(82,85,42,2); c.fillRect(77,95,2,36); c.fillRect(82,143,42,2);
    c.fillStyle = '#fff0bc'; c.fillRect(85,85,15,1); c.fillRect(77,100,1,13);
    c.fillStyle = gold ? '#edc779' : '#c79872'; c.fillRect(87,98,36,28);
    const emblem = PIXEL_SYMBOLS[1]; c.fillStyle = '#3a1c2d';
    emblem.forEach((row, y) => [...row].forEach((v, x) => { if (v === 'X') c.fillRect(97 + x * 3, 103 + y * 3, 3, 3); }));
    for (const [x,y] of [[81,93],[126,93],[82,135],[125,136]]) { c.fillStyle='#71421e';c.fillRect(x,y,3,3);c.fillStyle='#fff0bc';c.fillRect(x,y,1,1); }
    c.fillStyle = '#f3c374'; c.fillRect(116,159,11,11); c.fillStyle = '#9a226c'; c.fillRect(118,161,7,7); c.fillStyle='#ff94d7';c.fillRect(119,162,2,2);
    // Fine chain links, embroidered hems and shaded fabric folds.
    for (let y = 178; y < height - 70; y += 9) {
      const x = 86 + Math.round(Math.sin(y / 110) * 7);
      c.fillStyle='#98612e';c.fillRect(x,y,4,5);c.fillStyle='#e3b65e';c.fillRect(x,y,1,5);c.fillRect(x+1,y,2,1);
      c.fillStyle=body;c.fillRect(x+1,y+1,2,3);
    }
    for (let y = 170; y < height - 70; y += 5) {c.fillStyle=gold?'#ac3853':'#7c304f';c.fillRect(108,y,2,4);c.fillStyle='#301526';c.fillRect(121,y,2,5);}
    const y = 220 + pulse, reach = attack ? 14 : 0, x = 103 + reach;
    drawFineGauntlet(c, x, y, gold);
    if (attack) {
      c.fillStyle = gold ? '#ff657d' : '#ffe5a0';
      for (let i = 0; i < 3; i++) c.fillRect(132, y + i * 28, 6, 14);
    }
    c.restore();
  }
  if (gold) {
    c.fillStyle = '#a96526'; c.fillRect(136, 176, 4, height - 230); c.fillRect(420, 176, 4, height - 230);
    c.fillStyle = '#ffd361';
    for (let y = 185; y < height - 70; y += 40) { c.fillRect(132, y, 6, 6); c.fillRect(422, y, 6, 6); }
  }
  c.fillStyle = trim;
  for (let x = 140; x < 420; x += 28) c.fillRect(x, height - 4, 16, 4);
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
function miniBoard(c, s, t, reducedMotion) {
  const m = s.mini;
  if (s.mode === 'slots' || s.mode === 'tiger') {
    box(c, 20, 188, 240, 166, '#42253f'); box(c, 25, 193, 230, 156, '#22152b');
    for (let i = 0; i < 3; i++) {
      const reel = m.reels[i], spin = m.spin;
      const moving = (s.mode === 'slots' && reel == null) || (spin && spin.time < 550 + i * 250);
      const value = moving ? Math.floor(m.clock / 70 + i) % 4 : spin?.result?.[i] ?? reel;
      const x = 34 + i * 73;
      box(c, x, 220, 65, 87, '#f6ebd5', 5);
      c.save(); c.beginPath(); c.rect(x, 220, 65, 87); c.clip();
      const offset = moving && !reducedMotion ? (m.clock % 100) / 100 * 72 : 0;
      text(c, SYMBOLS[value], x + 32, 262 + offset, 36, value === 1 ? '#cf3155' : '#39233d');
      if (moving && !reducedMotion) text(c, SYMBOLS[(value + 1) % 4], x + 32, 190 + offset, 36, '#b32951');
      c.restore();
      if (s.mode === 'slots' && i === m.stop) { c.strokeStyle = '#ffbf5e'; c.lineWidth = 3; c.strokeRect(34 + i * 73, 220, 65, 87); }
    }
    text(c, s.mode === 'slots' ? `${t('crazyStop')} ${Math.min(3, m.stop + 1)}/3` : m.pending ? `${t('crazyPending')} ${m.pending}` : t('crazyPull'), 140, 389, 18, '#ffc76a');
    if (s.mode === 'tiger') {
      const lever = m.spin && !reducedMotion ? Math.sin(Math.min(1, m.spin.time / 350) * Math.PI) * 24 : 0;
      c.strokeStyle = '#ffc76a'; c.lineWidth = 5; c.beginPath(); c.moveTo(250, 326); c.lineTo(250, 300 + lever); c.stroke();
      ellipse(c, 250, 298 + lever, 8, 8, m.spin ? '#ff617f' : '#ffbc59');
      text(c, m.spin ? t(m.spin.risk ? 'crazyRiskRolling' : 'crazyRolling') : m.pending ? `${t('crazyRisk')} ×2 → ${m.pending * 2}` : t('crazyLeverPrompt'), 140, 363, 12, '#ffdb9f');
      text(c, t('crazyBankHint'), 140, 423, 12); text(c, t('crazyRiskHint'), 140, 445, 11, '#ff8ca5');
      text(c, t('crazyOdds'), 140, 470, 11, '#e7b9d2');
    }
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
    text(c, `${t('crazyFindPair')} ${TILES[m.target]}`, 140, 171, 15, '#ffcf73');
    m.items.forEach((v, i) => {
      if (m.removed.includes(i)) return;
      const x = 28 + (i % 3) * 78, y = 185 + Math.floor(i / 3) * 105;
      box(c, x, y + 5, 68, 88, '#59916b'); box(c, x, y, 68, 85, m.selected.includes(i) ? '#ffdc85' : '#f8f3df');
      text(c, TILES[v], x + 34, y + 42, 34, v === 0 ? '#c13b45' : '#206644');
      if (i === m.focus) { c.strokeStyle = '#ff718b'; c.lineWidth = 3; c.strokeRect(x, y, 68, 85); }
    });
    text(c, t('crazyPairHint'), 140, 435, 13);
  } else if (s.mode === 'dodge') {
    c.save(); c.beginPath(); c.rect(12, 152, 256, 356); c.clip();
    for (const h of m.hazards) {
      const warning = h.age < h.warn;
      const sections = h.horizontal ? [[152, h.gap - h.gapSize / 2], [h.gap + h.gapSize / 2, 508]] : [[12, h.gap - h.gapSize / 2], [h.gap + h.gapSize / 2, 268]];
      if (warning) {
        c.globalAlpha = reducedMotion ? .35 : .2 + Math.sin(h.age / 70) * .08;
        c.fillStyle = '#ff476f';
        for (const [lo, hi] of sections) if (h.horizontal) c.fillRect(12, lo, 256, hi - lo); else c.fillRect(lo, 152, hi - lo, 356);
        c.globalAlpha = 1;
        text(c, '!', h.horizontal ? 26 : h.gap, h.horizontal ? h.gap : 170, 20, '#ffeebc');
      } else {
        for (const [lo, hi] of sections) {
          c.strokeStyle = h.horizontal ? '#ffd572' : '#e6f5ff'; c.lineWidth = 5;
          c.beginPath(); if (h.horizontal) { c.moveTo(h.pos, lo); c.lineTo(h.pos, hi); } else { c.moveTo(lo, h.pos); c.lineTo(hi, h.pos); } c.stroke();
          for (let at = lo + 6; at < hi; at += 18) {
            if (h.horizontal) { ellipse(c, h.pos - 3, at, 4, 4, '#ffd572'); ellipse(c, h.pos + 3, at, 4, 4, '#ffd572'); }
            else { ellipse(c, at, h.pos - 3, 4, 4, '#e6f5ff'); ellipse(c, at, h.pos + 3, 4, 4, '#e6f5ff'); }
          }
        }
      }
    }
    const color = m.dash > 0 ? '#7ffff0' : s.protection > 0 ? '#ffc875' : '#ff486d';
    c.fillStyle = color; c.beginPath(); c.moveTo(m.x, m.y + 7); c.lineTo(m.x - 7, m.y); c.lineTo(m.x - 7, m.y - 5); c.lineTo(m.x - 3, m.y - 7); c.lineTo(m.x, m.y - 4); c.lineTo(m.x + 3, m.y - 7); c.lineTo(m.x + 7, m.y - 5); c.lineTo(m.x + 7, m.y); c.closePath(); c.fill();
    c.restore();
    text(c, m.dashReady > 0 ? `${t('crazyDash')} ${(m.dashReady / 1000).toFixed(1)}s` : t('crazyDashReady'), 140, 480, 12, '#91ffde');
  } else if (s.mode === 'pachinko') {
    c.strokeStyle = '#bd839a'; c.lineWidth = 1;
    c.beginPath(); c.moveTo(m.aim, 154); c.lineTo(m.aim, 180); c.stroke();
    for (const p of m.pegs) ellipse(c, p.x, p.y, 4, 4, '#ffe5aa');
    for (const b of m.balls) ellipse(c, b.x, b.y, 5, 5, '#a0efff');
    for (const bin of m.bins) {
      box(c, bin.x + 1, 475, bin.w - 2, 32, bin.kind === 'hurt' ? '#8e2346' : bin.kind === 'attack' ? '#555097' : '#245948', 3);
      text(c, bin.kind === 'attack' ? '⚔' : 'HP', bin.x + bin.w / 2, 482, 9);
      text(c, `${bin.kind === 'hurt' ? '−' : bin.kind === 'heal' ? '+' : ''}${bin.amount}`, bin.x + bin.w / 2, 497, 13);
    }
  }
  if (['cards', 'mahjong'].includes(s.mode)) {
    const fraction = Math.max(0, m.roundLeft / m.roundTime);
    bar(c, 28, s.mode === 'cards' ? 320 : 407, 224, fraction, fraction < .35 ? '#ff486d' : '#ffcf73');
    text(c, `${(Math.max(0, m.roundLeft) / 1000).toFixed(1)}s · COMBO ${m.streak || 0}`, 140, s.mode === 'cards' ? 385 : 463, 16, fraction < .35 ? '#ff718b' : '#ffcf73');
  }
}
function drawTransition(c, s, t, reducedMotion, height) {
  if (!s.transition || s.config?.id === 'pride') return;
  const elapsed = s.transition.time, fade = Math.min(1, (800 - elapsed) / 250);
  c.save(); c.globalAlpha = Math.max(0, fade);
  const y = Math.min(height / 2, 330);
  if (!reducedMotion) {
    c.strokeStyle = '#ffc96a'; c.lineWidth = 2;
    for (let i = 0; i < 14; i++) {
      const angle = i * Math.PI / 7, r = 65 + elapsed * .18;
      c.beginPath(); c.moveTo(140 + Math.cos(angle) * r, y + Math.sin(angle) * r); c.lineTo(140 + Math.cos(angle) * (r + 65), y + Math.sin(angle) * (r + 65)); c.stroke();
    }
  }
  box(c, 0, y - 45, 280, 90, '#301529', 0);
  c.fillStyle = '#ffc96a'; c.fillRect(0, y - 45, 280, 3); c.fillRect(0, y + 42, 280, 3);
  text(c, t('crazyIncoming'), 140, y - 21, 12, '#ffb0c5');
  text(c, SECOND_NAMES[s.mode] || t('crazyMode_' + s.mode), 140, y + 9, 28, '#ffe5ac');
  c.restore();
}
export function drawCrazy(c, s, t, { reducedMotion = false, screenShake = true, paintGrid, paintPiece } = {}) {
  const height = crazyCanvasHeight(s.mode);
  const prideGame = PRIDE_SECOND_MODES.includes(s.mode) || PRIDE_ATTACKS.includes(s.mode) || !!PRIDE_MINIGAMES[s.mode] || s.mode === 'pride-mirror-duel' || s.mode === PRIDE_ESCAPE_ID;
  c.save(); c.clearRect(0, 0, 280, height);
  const bg = c.createLinearGradient(0, 0, 0, height); bg.addColorStop(0, '#21112e'); bg.addColorStop(1, '#0b1020'); c.fillStyle = bg; c.fillRect(0, 0, 280, height);
  if (s.config.id === 'pride') drawPrideBackdrop(c, {h:height,time:s.elapsed,reduced:reducedMotion});
  if (prideGame) { /* Pride modes own the shared text bands. */ }
  else if (s.config.id === 'pride') { text(c, t(s.form === 2 ? 'prideMirrorName' : 'prideIntro'), 140, 15, 16, '#ffd69b'); }
  else {
    text(c, `${t('crazyGreed')} · ${t(s.form === 2 ? 'crazyTrueName' : s.boss.name)}`, 140, 15, 16, '#ffd69b');
    drawFineDealer(c, s, reducedMotion);
  }
  if (!prideGame) drawBridgePreviews(c, s, t, paintPiece);
  if (!prideGame && s.config.id !== 'pride') { text(c, `${s.vaultLocked || s.prideDuelLocked ? '🔒 ' : s.damageLeft === 0 ? '◇ ' : ''}BOSS`, 140, 117, 12, '#ff829d'); bar(c, 24, 128, 232, s.bossHp / s.bossMaxHp, '#ff476f'); }
  const a = s.arcade || ['bridge', 'sand'].includes(s.mode) ? crazyPlayfield(s.mode) : CRAZY_ARENA;
  box(c, a.x - 2, a.y - 2, a.w + 4, a.h + 4, s.attack ? '#a63b5e' : '#674068', 5); box(c, a.x, a.y, a.w, a.h, '#100e1b', 3);
  if(s.mode===PRIDE_ESCAPE_ID)drawPrideEscape(c,s.mini,{reducedMotion});
  else if (s.form === 2 && PRIDE_SECOND_MODES.includes(s.mode)) drawPrideSecond(c, s, reducedMotion, { screenShake });
  else if (s.mode === 'bridge' || s.mode === 'sand') bridgeBoard(c, s, { paintGrid, paintPiece });
  else if (s.arcade) {
    c.save(); c.translate(a.x, a.y); c.scale(a.scale, a.scale);
    if (paintGrid) paintGrid(c, s.arcade.grid);
    else for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) if (s.arcade.grid[y][x]) box(c, x * 28 + 1, y * 28 + 1, 26, 26, COLORS[s.arcade.grid[y][x].type] || '#e0b469', 3);
    drawSession(c, s.arcade, '#f2deef', { speed: t('arcadeSpeed'), double: t('arcadeDouble'), triple: t('arcadeTriple'), wide: t('arcadeWide'), narrow: t('arcadeNarrow') }); c.restore();
  } else if (PRIDE_MINIGAMES[s.mode]) {
    PRIDE_MINIGAMES[s.mode].render(c, s.mini, s);
  } else if (PRIDE_ATTACKS.includes(s.mode)) drawPrideAttack(c, s.mini, reducedMotion, {encounter:s, screenShake, status:`${Math.ceil(s.timeLeft/1000)}秒 · 第 ${s.mini.wave} 波`});
  else if (s.mode === 'pride-mirror-duel') drawMirrorDuel(c, s.mini, s, { reducedMotion });
  else if (s.mode === 'vault') drawVault(c, s.mini);
  else if (GREED_ATTACKS.includes(s.mode)) drawReaction(c, s, t, reducedMotion);
  else if (s.mode === 'pusher') drawPusher(c, s, t, reducedMotion);
  else miniBoard(c, s, t, reducedMotion);
  if(s.config.id==='pride' && s.mode!==PRIDE_ESCAPE_ID)drawPrideBossHead(c,s,{bridge:!prideGame,reducedMotion});
  if(s.config.id==='pride' && s.mode!==PRIDE_ESCAPE_ID)bar(c,prideGame?90:64,prideGame?84:116,prideGame?100:152,s.bossHp/s.bossMaxHp,s.form===2&&s.mirrorWorld?.red?'#ff476f':'#c49be8');
  if(s.config.id==='pride'&& !prideGame && s.form===2)text(c,s.mirrorWorld.red?'紅鏡 · 狂暴':`${s.mirrorWorld.mirrors.filter(v=>!v.broken).length} 面鏡`,140,126,11,'#f2d596');
  if (!prideGame) text(c, `${SECOND_NAMES[s.mode] || t('crazyMode_' + s.mode)} · ${Math.ceil(Math.max(0, s.timeLeft) / 1000)}s`, 140, 141, 12, '#ffc7d6');
  if (s.cat) {
    const warning = s.cat.time < 1200;
    const target = s.cat.action === 'boss' ? { x: 207, y: 74 }
      : s.cat.action === 'heal' || s.cat.action === 'player' ? { x: 250, y: height - 100 }
      : { x: 240, y: a.y + a.h * .6 };
    const enter = reducedMotion ? 1 : Math.min(1, s.cat.time / 450);
    const scale = s.cat.action === 'boss' ? .48 : .64;
    const catX = warning ? 312 - enter * 82 : target.x;
    drawMischiefCat(c, catX, target.y, scale, true, s.config.id === 'pride' ? { time: s.cat.time, reducedMotion, action: warning ? 'idle' : s.cat.action === 'heal' ? 'victory' : 'attack' } : null);
    if (warning) text(c, s.cat.action === 'heal' ? '+' : '!', 243, target.y - 37, 20, '#ffd46b');
    if (!warning) {
      const age = s.cat.time - 1200, fade = Math.max(0, 1 - age / 500);
      c.save(); c.globalAlpha = fade; c.lineCap = 'round';
      if (s.cat.action === 'heal') {
        for (let i = 0; i < 8; i++) {
          const angle = i * Math.PI / 4, r = 18 + age / 15;
          const x = target.x - 23 + Math.cos(angle) * r, y = target.y + Math.sin(angle) * r;
          c.fillStyle = '#b4ffe1'; c.fillRect(x - 1, y - 4, 2, 8); c.fillRect(x - 4, y - 1, 8, 2);
        }
      } else {
        c.strokeStyle = s.cat.action === 'player' ? '#ffc2cf' : '#fff0c3'; c.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
          c.beginPath(); c.moveTo(target.x - 42 + i * 8, target.y - 16); c.quadraticCurveTo(target.x - 50 + i * 8, target.y + 2, target.x - 25 + i * 8, target.y + 18); c.stroke();
        }
        c.fillStyle = '#fff6d1'; c.fillRect(target.x - 34, target.y + 9, 3, 3);
      }
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
  if (s.prideDuelRetry != null) text(c, `${t('prideRetry')} ${Math.ceil(s.prideDuelRetry / 1000)}s`, 140, height - 57, 10, '#ffb878');
  if (s.vaultRetry != null) text(c, `金庫重試 ${Math.ceil(s.vaultRetry/1000)}s · Boss 鎖血`, 140, height-57, 10, '#ffb878');
  if (!prideGame) text(c, `HP ${s.hp}/100 · ${t('crazyPhaseLabel')} ${s.phase}/3`, 140, height - 38, 14, '#f2deef');
  if (!prideGame) bar(c, 24, height - 25, 232, s.hp / 100, s.hp <= 25 ? '#ff466c' : '#6bdfb2');
  if (s.attack) text(c, `${t('crazyAttackWarning')} ${Math.ceil(s.attack.time / 1000)}`, 140, height - 10, 11, '#fff1a2');
  else if (!prideGame && s.noticeTime > 0) text(c, `${t(s.notice)}${s.noticeAmount ? ` ${s.noticeAmount > 0 ? '+' : ''}${s.noticeAmount}` : ''}`, 140, height - 10, 11, '#ffe0ab');
  if (prideGame && s.notice === 'crazyHeal' && s.noticeTime > 0) text(c, `♥ +${s.noticeAmount}`, 245, 18, 11, '#98ffe0');
  if (s.hitFlash > 0) { c.fillStyle = `rgba(255,40,80,${s.hitFlash / 1500})`; c.fillRect(0, 0, 280, height); }
  drawTransition(c, s, t, reducedMotion, height);
  c.restore();
}
