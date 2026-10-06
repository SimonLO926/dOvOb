import test from 'node:test';
import assert from 'node:assert/strict';
import * as mirror from './mirror-match.mjs';
import * as crown from './crown-choice.mjs';
import * as links from './lianliankan.mjs';
import { PRIDE_MINIGAMES } from './index.mjs';
function random(seed) { return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }; }
function tap(game, s, i) { const r = game.rect(s, i); game.point(s, r.x + r.w / 2, r.y + r.h / 2); }
test('Link opening boards shuffle positions while preserving difficulty and symbol pairs', () => {
  for (const difficulty of ['normal', 'hard']) {
    const boards = [];
    for (let seed = 1; seed <= 10; seed++) {
      const s = links.init({ difficulty, random: random(seed) });
      assert.equal(s.items.length, difficulty === 'hard' ? 36 : 24);
      const counts = new Map();
      s.items.forEach(v => counts.set(v, (counts.get(v) || 0) + 1));
      for (const count of counts.values()) assert.equal(count % 2, 0);
      assert.ok(s.items.some((v, i) => i % 2 === 0 && v !== s.items[i + 1]), 'Pairs must not all occupy adjacent fixed slots');
      boards.push(JSON.stringify(s.items));
    }
    assert.equal(new Set(boards).size, boards.length);
  }
});
test('Pride instructions use separate bounded text bands with an inherited middle baseline', () => {
  for (const game of Object.values(PRIDE_MINIGAMES)) for (const difficulty of ['normal', 'hard']) {
    const calls = [];
    const c = new Proxy({ textBaseline: 'middle', fillText(text, x, y, width) { calls.push({ text, y, width, baseline: this.textBaseline }); } }, { get(target, key) { if(String(key).startsWith('create'))return ()=>({addColorStop(){}}); return target[key] ?? (() => {}); } });
    const s = game.init({ difficulty, bossHpRatio: .2 });
    game.render(c, s);
    const hint = calls.find(call => call.y === 474);
    assert.ok(hint.text); assert.equal(hint.baseline, 'alphabetic'); assert.equal(hint.width, 264);
    assert.ok(calls.some(call => call.y === 125));
    assert.ok(calls.some(call => call.y === 514));
    assert.ok(calls.some(call => call.y === 532));
    const count = s.count ?? s.items?.length ?? 0;
    for (let i = 0; i < count; i++) { const r = game.rect(s, i); assert.ok(r.y >= 140); assert.ok(r.y + r.h < 460); }
  }
});
test('Registered modules expose lifecycle and shared pointer/keyboard input', () => {
  assert.equal(Object.keys(PRIDE_MINIGAMES).length, 4);
  for (const game of Object.values(PRIDE_MINIGAMES)) {
    for (const method of ['init', 'render', 'update', 'dispose', 'point', 'input']) assert.equal(typeof game[method], 'function');
    const s = game.init(); game.update(s, 1000); assert.ok(s.timeLeft > 0);
    game.update(s, Infinity); assert.ok(Number.isFinite(s.timeLeft));
    game.dispose(s); const snapshot = JSON.stringify(s); game.point(s, 40, 170); game.input(s, 'action'); game.update(s, 1000); assert.equal(JSON.stringify(s), snapshot);
  }
});
test('Mirror flips remain visible briefly, mismatches cost 2s and matching clears both difficulties', () => {
  for (const difficulty of ['normal', 'hard']) {
    const s = mirror.init({ difficulty, random: random(5) });
    assert.equal(s.timeLeft, difficulty === 'hard' ? 26000 : 22000);
    const wrong = s.items.findIndex((v, i) => i >= s.pairs && v !== s.items[0]);
    tap(mirror, s, 0); tap(mirror, s, wrong); assert.equal(s.timeLeft, (difficulty === 'hard' ? 26000 : 22000) - 2000); assert.equal(s.selected.length, 2);
    const before = s.selected.slice(); tap(mirror, s, 1); assert.deepEqual(s.selected, before);
    mirror.update(s, 650); assert.deepEqual(s.selected, []);
    for (let a = 0; a < s.pairs; a++) { const b = s.items.findIndex((v, i) => i >= s.pairs && v === s.items[a]); tap(mirror, s, a); tap(mirror, s, b); }
    assert.equal(s.status, 'won'); assert.equal(s.score, s.pairs * 100);
    mirror.update(s, 99999); assert.equal(s.status, 'won');
  }
});
test('Mirror never accepts a pair from the same bank or invisible tiles', () => {
  const s = mirror.init(); mirror.choose(s, -1); mirror.choose(s, NaN); assert.equal(s.selected.length, 0);
  mirror.choose(s, 0); mirror.choose(s, 1); assert.deepEqual(s.selected, [1]);
});
test('Crown difficulty follows Boss HP, wrong guesses hurt once, correct touch wins', () => {
  for (const difficulty of ['normal', 'hard']) {
    let lastCount = 0, lastDifference = Infinity;
    for (const bossHpRatio of [1, 2 / 3, 1 / 3]) {
      const s = crown.init({ difficulty, bossHpRatio, random: random(1) });
      assert.ok(s.count > lastCount); assert.ok(s.difference < lastDifference); lastCount = s.count; lastDifference = s.difference;
      const wrong = (s.target + 1) % s.count; tap(crown, s, wrong); assert.equal(s.hp, difficulty === 'hard' ? 85 : 90);
      crown.update(s, 350); tap(crown, s, wrong); assert.equal(s.hp, difficulty === 'hard' ? 85 : 90);
      tap(crown, s, s.target); assert.equal(s.status, 'won'); assert.equal(s.score, 300);
    }
  }
});
test('Crown keyboard chooses focus and ten wrong hard guesses exhaust HP', () => {
  const s = crown.init({ difficulty: 'hard', bossHpRatio: .2 });
  for (let i = 0; i < s.count && s.status === 'playing'; i++) if (i !== s.target) { s.focus = i; crown.input(s, 'action'); crown.update(s, 350); }
  assert.equal(s.hp, 0); assert.equal(s.status, 'lost');
  const t = crown.init(); t.focus = t.target; crown.input(t, 'action'); assert.equal(t.status, 'won');
});
test('Link paths support straight, one bend, two bends outside and reject blocked/unequal endpoints', () => {
  assert.ok(links.findPath([1, null, 1], 3, 1, 0, 2));
  assert.ok(links.findPath([1, null, 2, 1], 2, 2, 0, 3));
  const path = links.findPath([1, 2, 1], 3, 1, 0, 2); assert.ok(path.some(p => p.y === 0 || p.y === 2));
  const blocked = Array(25).fill(2); blocked[6] = blocked[18] = 1;
  assert.equal(links.findPath(blocked, 5, 5, 6, 18), null);
  const maze = Array(49).fill(2);
  for (const [x, y] of [[1,1],[2,1],[3,1],[3,2],[3,3],[4,3],[5,3],[5,4],[5,5]]) maze[y * 7 + x] = null;
  maze[8] = maze[40] = 1;
  assert.equal(links.findPath(maze, 7, 7, 8, 40), null, 'Three bends are forbidden');
  assert.equal(links.findPath([1, 2], 2, 1, 0, 1), null);
  assert.equal(links.findPath([1, 1], 2, 1, 0, 0), null);
});
test('Link board remains clearable with random legal choices over 200 seeded boards', () => {
  for (const difficulty of ['normal', 'hard']) for (let seed = 1; seed <= 100; seed++) {
    const s = links.init({ difficulty, random: random(seed) });
    assert.equal(s.timeLeft, 30000);
    while (s.status === 'playing') {
      const pairs = [];
      for (let a = 0; a < s.items.length; a++) for (let b = a + 1; b < s.items.length; b++) if (links.findPath(s.items, s.cols, s.rows, a, b)) pairs.push([a, b]);
      assert.ok(pairs.length); const pair = pairs[Math.floor(s.random() * pairs.length)]; pair.forEach(i => tap(links, s, i));
    }
    assert.equal(s.status, 'won'); assert.equal(s.score, difficulty === 'hard' ? 1800 : 1200); assert.ok(s.items.every(v => v == null));
  }
});
test('All games time out, ignore taps outside cards and render every state without invalid canvas calls', () => {
  const c = new Proxy({}, { get(target, key) { if(String(key).startsWith('create'))return ()=>({addColorStop(){}}); return target[key] ?? (() => {}); } });
  for (const game of Object.values(PRIDE_MINIGAMES)) for (const difficulty of ['normal', 'hard']) {
    const s = game.init({ difficulty }); game.point(s, -20, -20); assert.equal(s.score, 0);
    game.render(c, s); game.update(s, s.timeLeft); assert.equal(s.status, 'lost'); game.render(c, s);
    const score=s.score;game.choose?.(s, 0);game.input(s,'action');assert.equal(s.score,score);
  }
});

test('Mirror directions follow the two visible card banks',()=>{
 const s=mirror.init();mirror.input(s,'right');assert.equal(s.focus,s.pairs);mirror.input(s,'down');assert.equal(s.focus,s.pairs+1);mirror.input(s,'left');assert.equal(s.focus,1);mirror.input(s,'up');assert.equal(s.focus,0);
});
