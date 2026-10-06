import { symbols, shuffle, state, update as tick, dispose, active, frame, tile, hit, keyboard } from './common.mjs';
export { dispose };
export const id = 'pride-lianliankan';
// Breadth-first search on a padded board: endpoints may be occupied, all other
// visited cells must be empty. Direction changes count as bends (at most two).
export function findPath(items, cols, rows, a, b) {
  if (a === b || a < 0 || b < 0 || a >= items.length || b >= items.length || items[a] == null || items[a] !== items[b]) return null;
  const start = { x: a % cols + 1, y: Math.floor(a / cols) + 1 }, end = { x: b % cols + 1, y: Math.floor(b / cols) + 1 };
  const queue = [{ ...start, dir: -1, bends: 0, path: [start] }], visited = new Map();
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  for (let cursor = 0; cursor < queue.length; cursor++) {
    const node = queue[cursor];
    for (let dir = 0; dir < 4; dir++) {
      const bends = node.bends + (node.dir !== -1 && node.dir !== dir ? 1 : 0);
      if (bends > 2) continue;
      const x = node.x + directions[dir][0], y = node.y + directions[dir][1];
      if (x < 0 || y < 0 || x > cols + 1 || y > rows + 1) continue;
      const path = [...node.path, { x, y }];
      if (x === end.x && y === end.y) return path;
      if (x >= 1 && x <= cols && y >= 1 && y <= rows && items[(y - 1) * cols + x - 1] != null) continue;
      const key = `${x},${y},${dir}`;
      if ((visited.get(key) ?? Infinity) <= bends) continue;
      visited.set(key, bends); queue.push({ x, y, dir, bends, path });
    }
  }
  return null;
}
export function availablePair(s) {
  for (let a = 0; a < s.items.length; a++) for (let b = a + 1; b < s.items.length; b++) if (findPath(s.items, s.cols, s.rows, a, b)) return [a, b];
  return null;
}
// Construct a solvable layout by removing geometrically connectable pairs from
// a dummy board, then assigning equal symbols to each removal pair.
export function reshuffle(s) {
  const geometry = s.items.map(v => v == null ? null : 0), pairs = [];
  while (geometry.some(v => v != null)) {
    const pair = availablePair({ ...s, items: geometry });
    if (!pair) throw new Error('Invalid even tile geometry');
    pairs.push(pair); pair.forEach(i => { geometry[i] = null; });
  }
  const values = shuffle(s.items.filter(v => v != null), s.random);
  // Preserve the number of each symbol, which always remains even.
  const pairValues = shuffle([...new Set(values)].flatMap(v => Array(values.filter(x => x === v).length / 2).fill(v)), s.random);
  pairs.forEach(([a, b], i) => { s.items[a] = s.items[b] = pairValues[i]; });
  s.selected = []; s.feedback = '已重新排列，繼續配對';
}
export function init(options = {}) {
  const s = state(options, 30000, 30000); s.cols = 6; s.rows = s.difficulty === 'hard' ? 6 : 4;
  s.items = Array.from({ length: s.cols * s.rows }, (_, i) => symbols[Math.floor(i / 2) % (s.difficulty === 'hard' ? 8 : 6)]);
  s.targetScore = s.items.length / 2 * 100;
  // Shuffle every position, accepting only boards with a complete legal route.
  // Bound retries so injected random sources cannot stall initialization.
  for (let attempt = 0; attempt < 100; attempt++) {
    s.items = shuffle(s.items, s.random);
    const probe = { ...s, items: [...s.items] };
    let pair;
    while ((pair = availablePair(probe))) pair.forEach(i => { probe.items[i] = null; });
    if (probe.items.every(v => v == null)) return s;
  }
  reshuffle(s); s.feedback = ''; return s;
}
export function rect(s, i) { return { x: 20 + i % s.cols * 40, y: 150 + Math.floor(i / s.cols) * 46, w: 36, h: 40 }; }
export function choose(s, i) {
  if (!active(s) || !Number.isInteger(i) || i < 0 || i >= s.items.length || s.items[i] == null) return;
  s.focus = i;
  if (s.selected[0] === i) { s.selected = []; return; }
  s.selected.push(i); if (s.selected.length < 2) return;
  const [a, b] = s.selected, path = findPath(s.items, s.cols, s.rows, a, b);
  if (path) {
    s.items[a] = s.items[b] = null; s.score += 100; s.path = path; s.pathTime = 350; s.feedback = '連線成功 +100';
    if (s.score >= s.targetScore) s.status = 'won';
    else if (!availablePair(s)) reshuffle(s);
  } else { s.feedback = '圖案須相同，連線最多兩個彎'; }
  s.selected = [];
}
export function point(s, x, y) { choose(s, s.items.findIndex((_, i) => hit(rect(s, i), x, y))); }
export function input(s, action) { keyboard(s, action, s.items.length, s.cols, choose); }
export function update(s, dt) { if (s.disposed || s.status !== 'playing') return; tick(s, dt); s.pathTime = Math.max(0, (s.pathTime || 0) - Math.max(0, dt)); }
export function render(c, s, encounter) {
  frame(c, s, '宮殿連連看', `最多兩個彎 · 目標 ${s.targetScore}分`, 'links', {encounter});
  s.items.forEach((v, i) => { if (v != null) tile(c, s, i, rect(s, i), v, false, 'links'); });
  if (s.pathTime > 0) { c.strokeStyle = '#9de8ff'; c.lineWidth = 3; c.beginPath(); s.path.forEach((p, i) => c[i ? 'lineTo' : 'moveTo'](38 + (p.x - 1) * 40, 170 + (p.y - 1) * 46)); c.stroke(); }
}
