import assert from 'node:assert/strict';
import test from 'node:test';
import { createCrazy, FIRST_BOSS, CRAZY_MODES, advanceCrazy, updateCrazy, inputCrazy, pointCrazy, hitCrazyBoss, healCrazy, hurtCrazy } from './crazy.mjs';

function enter(s, mode) {
  s.mode = 'bridge'; s.encounter = 0; s.bag = [mode]; advanceCrazy(s);
  for (let i = 0; i < 11; i++) updateCrazy(s, 50);
  assert.equal(s.mode, mode);
}
const tap = (s, action) => { inputCrazy(s, action); inputCrazy(s, action, false); };

test('Crazy opens on Bridge with a separate dealer boss and bounded HP', () => {
  const s = createCrazy();
  assert.equal(s.mode, 'bridge'); assert.equal(s.hp, 100); assert.equal(s.boss.id, 'mad-dealer');
  assert.equal(s.bossHp, 900); assert.equal(s.phase, 1); assert.equal(s.arcade, null);
  s.protection = 0; hurtCrazy(s, 30); assert.equal(s.hp, 70);
  assert.equal(hurtCrazy(s, 30), false); assert.equal(s.hp, 70);
  healCrazy(s, 80); assert.equal(s.hp, 100);
});

test('Boss damage advances three phases, gives recovery, and ends with victory once', () => {
  const s = createCrazy(); s.hp = 50;
  s.damageLeft = 300; hitCrazyBoss(s, 300); assert.equal(s.phase, 2); assert.equal(s.hp, 62);
  s.damageLeft = 300; hitCrazyBoss(s, 300); assert.equal(s.phase, 3); assert.equal(s.hp, 74);
  s.damageLeft = 300; hitCrazyBoss(s, 300); assert.equal(s.bossHp, 0); assert.equal(s.over, true); assert.equal(s.won, true);
  const score = s.score; hitCrazyBoss(s, 30); healCrazy(s, 20); updateCrazy(s, 50);
  assert.equal(s.score, score); assert.equal(s.hp, 74);
});

test('Zero player HP and the eight-minute limit both end the fight', () => {
  const a = createCrazy(); a.protection = 0; hurtCrazy(a, 100);
  assert.equal(a.over, true); assert.equal(a.won, false);
  const b = createCrazy(); b.elapsed = FIRST_BOSS.limit - 50; updateCrazy(b, 50);
  assert.equal(b.over, true); assert.equal(b.hp, 0);
});

test('Shuffled encounters cover all games and return to Bridge every third round', () => {
  const s = createCrazy({ random: () => .5 }); const seen = new Set(); let previous = s.mode;
  for (let i = 1; i <= 30; i++) {
    advanceCrazy(s); seen.add(s.mode);
    if (i % 3 === 0) assert.equal(s.mode, 'bridge');
    else assert.notEqual(s.mode, previous);
    previous = s.mode;
    if (s.arcade) assert.equal(s.arcade.prep, 0);
  }
  for (const mode of CRAZY_MODES) assert.ok(seen.has(mode), mode);
});

test('Mode transitions clear held controls and protect against a carried-over action', () => {
  const s = createCrazy(); s.held.add('left'); s.held.add('action'); s.bag = ['slots'];
  advanceCrazy(s); assert.equal(s.held.size, 0); assert.equal(s.protection, 500);
  inputCrazy(s, 'action'); assert.equal(s.mini.stop, 0);
  inputCrazy(s, 'action', false); inputCrazy(s, 'action'); assert.equal(s.mini.stop, 1);
});

test('Bridge clears damage the boss and top-out costs HP instead of ending the run', () => {
  const s = createCrazy(); const g = s.bridge;
  g.active = null; g.phase = 'resolving';
  g.grid[19] = Array.from({ length: 10 }, () => ({ type: 'O', g: 1 }));
  updateCrazy(s, 50); assert.equal(s.bossHp, 882);
  s.protection = 0; g.phase = 'over'; g.grid[0][3] = { type: 'I', g: 2 };
  updateCrazy(s, 50); assert.equal(s.hp, 80); assert.equal(s.over, false); assert.equal(g.grid[0][3], null);
});

test('Slots stops reels independently and pays matched symbols', () => {
  const s = createCrazy(); enter(s, 'slots');
  for (let i = 0; i < 3; i++) { s.mini.clock = (4 - i) * 230; tap(s, 'action'); }
  assert.deepEqual(s.mini.reels, [0, 0, 0]); assert.equal(s.bossHp, 852);
  assert.ok(s.cooldown > 0); assert.equal(s.mini.stop, 3);
});

test('Tiger lever banks or risks rewards independently of timed reel stops', () => {
  const s = createCrazy({ random: () => 0 }); enter(s, 'tiger'); s.hp = 80;
  tap(s, 'action'); assert.equal(s.mini.pending, 32); assert.equal(s.bossHp, 900);
  tap(s, 'action'); assert.equal(s.mini.pending, 64);
  tap(s, 'alt'); assert.equal(s.mini.pending, 0); assert.equal(s.bossHp, 850); assert.equal(s.hp, 84);
});

test('A lost Tiger gamble removes its reward and costs HP', () => {
  const s = createCrazy(); enter(s, 'tiger'); s.mini.pending = 18; s.random = () => .9;
  tap(s, 'action'); assert.equal(s.mini.pending, 0); assert.equal(s.hp, 90); assert.equal(s.bossHp, 900);
});

test('Cards only accept the requested pair and support pointer selection', () => {
  const s = createCrazy(); enter(s, 'cards'); s.mini.items = [4, 2, 4, 7]; s.mini.target = 4;
  pointCrazy(s, 42, 220); pointCrazy(s, 172, 220);
  assert.equal(s.bossHp, 878); assert.ok(s.cooldown > 0);
  updateCrazy(s, 50); assert.equal(s.mini.selected.length, 2);
});

test('Mahjong clears pairs and finishes a board without selecting removed tiles twice', () => {
  const s = createCrazy(); enter(s, 'mahjong'); s.mini.items = [0, 0, 1, 1, 2, 2];
  for (const i of [0, 1, 2, 3, 4, 5]) { s.cooldown = 0; s.mini.focus = i; tap(s, 'action'); }
  assert.equal(s.bossHp, 850); assert.equal(s.mini.removed.length, 6);
  tap(s, 'action'); assert.equal(s.bossHp, 850);
});

test('Pachinko uses distinct reward bins and a bounded ball count', () => {
  const s = createCrazy(); enter(s, 'pachinko'); s.hp = 50;
  pointCrazy(s, 500, 100); assert.equal(s.mini.aim, 260);
  s.mini.balls = [{ x: 20, y: 504, vx: 0, vy: 100 }, { x: 80, y: 504, vx: 0, vy: 100 }, { x: 140, y: 504, vx: 0, vy: 100 }];
  updateCrazy(s, 50); assert.equal(s.hp, 52); assert.equal(s.bossHp, 878); assert.equal(s.mini.balls.length, 0);
});

test('Boss attacks are telegraphed and a hit cancels the pending strike', () => {
  const s = createCrazy(); s.timeLeft = s.duration - 4500;
  updateCrazy(s, 50); assert.ok(s.attack); assert.equal(s.hp, 100);
  hitCrazyBoss(s, 10); assert.equal(s.attack, null); assert.equal(s.hp, 100);
  const other = createCrazy(); other.timeLeft = other.duration - 4500; other.protection = 0;
  for (let i = 0; i < 72; i++) updateCrazy(other, 50);
  assert.equal(other.hp, 94);
});

test('The tabby cat warns before one disruption and sometimes gives a healing gift', () => {
  const s = createCrazy({ random: () => .9 }); enter(s, 'cards'); s.catDue = 0;
  updateCrazy(s, 50); assert.ok(s.cat); assert.equal(s.cat.applied, false); assert.equal(s.catBlock, 0);
  for (let i = 0; i < 24; i++) updateCrazy(s, 50);
  assert.equal(s.cat.applied, true); assert.ok(s.catBlock > 0);
  pointCrazy(s, 40, 220); assert.equal(s.mini.selected.length, 0);
  const gift = createCrazy({ random: () => 0 }); gift.hp = 70; gift.catDue = 0;
  for (let i = 0; i < 25; i++) updateCrazy(gift, 50);
  assert.equal(gift.hp, 78); assert.equal(gift.cat.gift, true);
});

test('Arcade encounters return immediately on ball loss and preserve the Bridge board', () => {
  const s = createCrazy(); s.bridge.grid[15][3] = { type: 'O', g: 4 };
  enter(s, 'pinball'); s.arcade.over = true; s.protection = 0; s.bag = ['cards'];
  const previous = s.encounter; updateCrazy(s, 50);
  assert.equal(s.encounter, previous + 1); assert.equal(s.hp, 88);
  assert.equal(s.bridge.grid[15][3].g, 4);
  assert.equal(s.held.size, 0);
});

test('Sandtrix returns to Bridge without leaving the sand simulation running', () => {
  const s = createCrazy(); enter(s, 'sand'); assert.equal(s.bridge.sanding, true);
  advanceCrazy(s); assert.equal(s.bridge.sanding, false); assert.equal(s.bridge.sandGrid, null);
});

test('Boss guard prevents defeating the boss in the opening Bridge round', () => {
  const s = createCrazy();
  hitCrazyBoss(s, 900);
  assert.equal(s.bossHp, 850); assert.equal(s.damageLeft, 0); assert.equal(s.over, false);
  const score = s.score; s.attack = { time: 1000 };
  hitCrazyBoss(s, 100);
  assert.equal(s.bossHp, 850); assert.equal(s.score, score); assert.equal(s.attack, null);
  advanceCrazy(s); assert.equal(s.damageLeft, 50);
});
