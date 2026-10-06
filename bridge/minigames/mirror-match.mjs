import { symbols, shuffle, state, update as tick, dispose, active, frame, tile, hit } from './common.mjs';
export { dispose };
export const id = 'pride-mirror-match';
export function init(options = {}) {
  const s = state(options, 22000, 26000); s.pairs = s.difficulty === 'hard' ? 6 : 4;
  s.items = [...shuffle(symbols.slice(0, s.pairs), s.random), ...shuffle(symbols.slice(0, s.pairs), s.random)]; s.removed = []; return s;
}
export function rect(s, i) { return { x: i < s.pairs ? 25 : 165, y: 142 + i % s.pairs * 52, w: 90, h: 44 }; }
export function choose(s, i) {
  if (!active(s) || !Number.isInteger(i) || i < 0 || i >= s.items.length || s.removed.includes(i) || s.selected.includes(i)) return;
  s.focus = i;
  if (s.selected.length && (s.selected[0] < s.pairs) === (i < s.pairs)) s.selected = [];
  s.selected.push(i);
  if (s.selected.length < 2) return;
  const [a, b] = s.selected;
  if (s.items[a] === s.items[b]) {
    s.removed.push(a, b); s.score += 100; s.selected = []; s.feedback = '鏡像配對 +100';
    if (s.removed.length === s.items.length) s.status = 'won';
  } else { s.timeLeft = Math.max(0, s.timeLeft - 2000); s.lock = 650; s.mismatch = true; s.feedback = '配錯 −2秒'; if (!s.timeLeft) s.status = 'lost'; }
}
export function point(s, x, y) { const i = s.items.findIndex((_, i) => hit(rect(s, i), x, y)); choose(s, i); }
export function input(s, action) {
  if (!active(s)) return;
  if (action === 'left' || action === 'right') s.focus = (s.focus + s.pairs) % s.items.length;
  if (action === 'up' || action === 'down') { const bank = s.focus < s.pairs ? 0 : s.pairs; s.focus = bank + (s.focus % s.pairs + (action === 'up' ? -1 : 1) + s.pairs) % s.pairs; }
  if (action === 'action') choose(s, s.focus);
}
export function update(s, dt) { tick(s, dt); }
export function render(c, s, encounter) {
  frame(c, s, '鏡像配對', '左右各翻一張，配對相同圖案', 'mirror', {encounter});
  c.strokeStyle = '#8bbacb'; c.beginPath(); c.moveTo(140, 140); c.lineTo(140, 450); c.stroke();
  s.items.forEach((v, i) => { if (!s.removed.includes(i)) tile(c, s, i, rect(s, i), s.selected.includes(i) ? v : '?', i >= s.pairs); });
}
