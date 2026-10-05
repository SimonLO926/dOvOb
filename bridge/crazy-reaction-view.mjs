import { GREED_ATTACKS } from './crazy-reactions.mjs?v=1.2.5';
const label = (c, value, x, y, size = 13, color = '#ffe7a3') => { c.fillStyle = color; c.font = `bold ${size}px "Pixel Latin", "Pixel Hant", sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(value, x, y, 248); };
export function pixelCore(c, x, y, color) {
  const pixels = ['.XX.XX.', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...'];
  c.fillStyle = color; pixels.forEach((row, j) => [...row].forEach((v, i) => { if (v === 'X') c.fillRect(Math.round(x - 7 + i * 2), Math.round(y - 6 + j * 2), 2, 2); }));
}
function coin(c, x, y, r, green = false) {
  c.fillStyle = green ? '#175b44' : '#754116'; c.fillRect(Math.round(x - r), Math.round(y - r + 2), r * 2, r * 2);
  c.fillStyle = green ? '#79efbd' : '#ffda77'; c.fillRect(Math.round(x - r + 2), Math.round(y - r), r * 2 - 4, r * 2);
  c.fillStyle = green ? '#d7ffe8' : '#fff0b8'; c.fillRect(Math.round(x - r + 3), Math.round(y - r + 2), 3, Math.max(2, r));
}
export function drawReaction(c, s, t, reduced) {
  const m = s.mini; if (!GREED_ATTACKS.includes(s.mode)) return;
  c.save(); c.beginPath(); c.rect(12, 152, 256, 356); c.clip();
  if (s.mode === 'jump') { c.fillStyle = '#7b4934'; c.fillRect(12, 480, 256, 8); c.fillStyle = '#ffe4a2'; c.fillRect(12, 480, 256, 2); }
  if (s.mode === 'vortex') {
    c.strokeStyle = '#bf549e'; c.lineWidth = 2;
    for (let i = 0; i < 4; i++) { const r = 20 + ((reduced ? i * 18 : m.clock / 22 + i * 18) % 72); c.strokeRect(140 - r, 265 - r, r * 2, r * 2); }
    c.fillStyle = '#e9479e'; c.fillRect(131, 256, 18, 18);
  }
  for (const h of m.hazards) {
    const warn = h.age < h.warn;
    c.globalAlpha = warn ? reduced ? .5 : .35 + Math.sin(h.age / 80) * .1 : 1;
    if (h.kind === 'ground' || h.kind === 'high') {
      if (warn) { c.fillStyle = '#ff476f'; c.fillRect(12, h.y, 256, h.h); label(c, h.kind === 'ground' ? '↑' : '↓', 246, h.y + h.h / 2, 20, '#fff0bc'); }
      else { c.fillStyle = '#925428'; c.fillRect(h.x, h.y, h.w, h.h); c.fillStyle = '#ffdc7c'; c.fillRect(h.x + 3, h.y + 3, h.w - 6, h.h - 6); c.fillStyle = '#fff3bd'; c.fillRect(h.x + 4, h.y + 3, h.w - 8, 4); }
    } else if (h.kind === 'coin') {
      if (warn) { c.fillStyle = '#df466a'; c.fillRect(h.x - 7, 155, 14, 18); label(c, '↓', h.x, 179, 15); }
      else coin(c, h.x, h.y, 6);
    } else if (h.kind === 'motion') {
      const color = h.tone === 'blue' ? '#62d2ff' : '#ffb455';
      c.fillStyle = color; c.fillRect(12, warn ? 188 : h.y - 4, 256, warn ? 3 : 8);
      if (warn) label(c, t(h.tone === 'blue' ? 'crazyKeepMoving' : 'crazyStayStill'), 140, 214, 16, color);
    } else if (h.kind === 'laser') {
      c.strokeStyle = warn ? '#d56688' : '#ffe294'; c.lineWidth = warn ? 2 : 12; c.setLineDash(warn ? [8, 6] : []);
      c.beginPath(); c.moveTo(h.a.x, h.a.y); c.lineTo(h.b.x, h.b.y); c.stroke(); c.setLineDash([]);
    }
  }
  c.globalAlpha = 1; for (const d of m.drops) coin(c, d.x, d.y, 7, true);
  pixelCore(c, m.x, m.y, m.dash > 0 ? '#89ffee' : s.protection > 0 ? '#ffd18a' : '#ff5178');
  c.restore();
  label(c, s.mode === 'jump' ? t('crazyJumpHint') : m.dashReady > 0 ? `${t('crazyDash')} ${(m.dashReady / 1000).toFixed(1)}s` : t('crazyDashReady'), 140, 498, 11, '#8fffdb');
}
export function drawPusher(c, s, t) {
  const m = s.mini, front = 260 + (Math.sin(m.clock / 500) + 1) * 35;
  c.save(); c.beginPath(); c.rect(12, 152, 256, 356); c.clip();
  c.fillStyle = '#4a2d32'; c.fillRect(20, 185, 240, 290); c.fillStyle = '#bea07d'; c.fillRect(22, 220, 236, front - 220);
  c.fillStyle = '#fff0b6'; c.fillRect(22, front, 236, 5); c.fillStyle = '#130c19'; c.fillRect(22, 465, 236, 24);
  c.fillStyle = '#ffbf68'; c.fillRect(22, 463, 236, 3);
  for (const o of m.obstacles) { c.fillStyle = '#734d82'; c.fillRect(o.x - 13, o.y - 13, 26, 26); label(c, '♠', o.x, o.y); }
  for (const token of m.coins) coin(c, token.x, token.y, 9, token.green);
  c.fillStyle = '#ffa2b2'; c.fillRect(m.aim - 5, 193, 10, 12); label(c, '↓', m.aim, 214, 15);
  c.restore();
  label(c, `${t('crazyPusherStock')} ${m.stock} · ${t('crazyPending')} ${m.pending}`, 140, 170, 12);
  label(c, s.timeLeft <= 2000 ? t('crazyPusherSettle') : m.risk ? t('crazyPusherRisk') : t('crazyPusherReward'), 140, 497, 11, '#93ffe0');
}
