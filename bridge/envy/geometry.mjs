// Shared deterministic geometry for the rolling block and procedural mazes.
export const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
// Dedicated draw rounds: fill the native arena, leaving its HUD/footer intact.
export const CARD_LAYOUT = Object.freeze({ x:18, y:154, w:244, h:344 });
export const DIRS = Object.freeze({ left: [-1, 0], right: [1, 0], up: [0, -1], down: [0, 1] });
export const keyOf = (x, y) => `${x},${y}`;
export function seeded(seed = 1) {
  let n = seed >>> 0;
  return () => { n = (Math.imul(n, 1664525) + 1013904223) >>> 0; return n / 4294967296; };
}
export function shuffled(items, random) {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1)); [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
// orientation 0: standing; 1: lying along x; 2: lying along y.
export function rollBlock(block, direction) {
  const { x, y, orientation: o } = block;
  if (direction === 'left') return { x: x - (o === 0 ? 2 : 1), y, orientation: o === 0 ? 1 : o === 1 ? 0 : 2 };
  if (direction === 'right') return { x: x + (o === 1 ? 2 : 1), y, orientation: o === 0 ? 1 : o === 1 ? 0 : 2 };
  if (direction === 'up') return { x, y: y - (o === 0 ? 2 : 1), orientation: o === 0 ? 2 : o === 2 ? 0 : 1 };
  if (direction === 'down') return { x, y: y + (o === 2 ? 2 : 1), orientation: o === 0 ? 2 : o === 2 ? 0 : 1 };
  return block;
}
export function blockCells(block) {
  return [[block.x, block.y], ...(block.orientation === 1 ? [[block.x + 1, block.y]] : block.orientation === 2 ? [[block.x, block.y + 1]] : [])];
}
export function validBlock(board, block) {
  return blockCells(block).every(([x, y]) => board.tiles.has(keyOf(x, y)));
}
export function solveBlock(board, start = board.start) {
  const queue = [{ block: start, route: [] }], seen = new Set();
  for (let i = 0; i < queue.length; i++) {
    const { block, route } = queue[i];
    if (block.orientation === 0 && block.x === board.goal.x && block.y === board.goal.y) return route;
    for (const direction of Object.keys(DIRS)) {
      const next = rollBlock(block, direction), key = `${next.x},${next.y},${next.orientation}`;
      if (!validBlock(board, next) || seen.has(key)) continue;
      seen.add(key); queue.push({ block: next, route: [...route, direction] });
    }
  }
  return null;
}
export function rollingBoard(level = 0) {
  // Broad authored islands: a readable route, not a random perforated rectangle.
  const layouts = [
    {w:5,h:6,start:{x:1,y:1,orientation:0},goal:{x:3,y:4},missing:['0,0','4,0','0,5','4,5']},
    {w:6,h:7,start:{x:1,y:1,orientation:0},goal:{x:4,y:5},missing:['0,0','5,0','0,6','5,6','0,3','5,3']},
    {w:7,h:7,start:{x:1,y:1,orientation:0},goal:{x:5,y:5},missing:['0,0','6,0','0,6','6,6','3,3','3,4']},
  ];
  const layout=layouts[Math.min(2,level)],tiles=new Set();
  for(let y=0;y<layout.h;y++)for(let x=0;x<layout.w;x++)if(!layout.missing.includes(keyOf(x,y)))tiles.add(keyOf(x,y));
  return {...layout,start:{...layout.start},goal:{...layout.goal},tiles};
}
export function braidMaze(maze, random=Math.random, density=.25) {
  for(let y=1;y<maze.h-1;y++)for(let x=1;x<maze.w-1;x++) {
    if(!maze.cells[y][x]||random()>density)continue;
    if((openCell(maze,x-1,y)&&openCell(maze,x+1,y))||(openCell(maze,x,y-1)&&openCell(maze,x,y+1)))maze.cells[y][x]=0;
  }
  return maze;
}
export function makeMaze(w = 17, h = 23, random = Math.random) {
  const cells = Array.from({ length: h }, () => Array(w).fill(1));
  const stack = [[1, 1]]; cells[1][1] = 0;
  while (stack.length) {
    const [x, y] = stack.at(-1);
    const choices = shuffled(Object.values(DIRS), random).filter(([dx, dy]) => {
      const nx = x + dx * 2, ny = y + dy * 2;
      return nx > 0 && nx < w - 1 && ny > 0 && ny < h - 1 && cells[ny][nx] === 1;
    });
    if (!choices.length) { stack.pop(); continue; }
    const [dx, dy] = choices[0]; cells[y + dy][x + dx] = 0; cells[y + dy * 2][x + dx * 2] = 0;
    stack.push([x + dx * 2, y + dy * 2]);
  }
  const maze = { w, h, cells, start: { x: 1, y: 1 } };
  const distances = mazeDistances(maze, maze.start);
  const farthest = [...distances].sort((a, b) => b[1] - a[1])[0][0].split(',').map(Number);
  maze.goal = { x: farthest[0], y: farthest[1] };
  return maze;
}
export function openCell(maze, x, y) { return maze.cells[y]?.[x] === 0; }
export function mazeDistances(maze, start) {
  const queue = [start], distance = new Map([[keyOf(start.x, start.y), 0]]);
  for (let i = 0; i < queue.length; i++) for (const [dx, dy] of Object.values(DIRS)) {
    const x = queue[i].x + dx, y = queue[i].y + dy, key = keyOf(x, y);
    if (!openCell(maze, x, y) || distance.has(key)) continue;
    distance.set(key, distance.get(keyOf(queue[i].x, queue[i].y)) + 1); queue.push({ x, y });
  }
  return distance;
}
export function mazeRoute(maze, start, goal) {
  const distance = mazeDistances(maze, goal);
  const route = [], current = { ...start };
  while (current.x !== goal.x || current.y !== goal.y) {
    const step = Object.entries(DIRS).find(([, [dx, dy]]) => distance.get(keyOf(current.x + dx, current.y + dy)) === distance.get(keyOf(current.x, current.y)) - 1);
    if (!step) return null;
    route.push(step[0]); current.x += step[1][0]; current.y += step[1][1];
  }
  return route;
}
export function pointInRect(x, y, r) { return x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h; }
export function segmentHitsRect(a, b, r) {
  let lo = 0, hi = 1;
  for (const [p, d, min, max] of [[a.x, b.x - a.x, r.x, r.x + r.w], [a.y, b.y - a.y, r.y, r.y + r.h]]) {
    if (Math.abs(d) < 1e-8) { if (p < min || p > max) return false; continue; }
    const t1 = (min - p) / d, t2 = (max - p) / d;
    lo = Math.max(lo, Math.min(t1, t2)); hi = Math.min(hi, Math.max(t1, t2));
    if (lo > hi) return false;
  }
  return true;
}
