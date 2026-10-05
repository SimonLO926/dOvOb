import assert from 'node:assert/strict';
import test from 'node:test';
import { createPusher, PUSHER_STEP, rouletteLasers, motionSweep } from './crazy-reactions.mjs';
import { crazyRoundDuration, pachinkoBins, createCrazy, FIRST_BOSS, CRAZY_MODES, advanceCrazy, updateCrazy, inputCrazy, pointCrazy, hitCrazyBoss, healCrazy, hurtCrazy, skipCrazyCinematic } from './crazy.mjs';

function enter(s, mode) {
  s.mode = 'bridge'; s.encounter = 0; s.bag = [mode]; advanceCrazy(s);
  for (let i = 0; i < 11; i++) updateCrazy(s, 50);
  assert.equal(s.mode, mode);
}
const run = (s, ms) => { for (let left = ms; left > 0; left -= 50) updateCrazy(s, Math.min(left, 50)); };
const tap = (s, action) => { inputCrazy(s, action); inputCrazy(s, action, false); };

test('Crazy opens on Bridge with a separate dealer boss and bounded HP', () => {
  const s = createCrazy();
  assert.equal(s.mode, 'bridge'); assert.equal(s.hp, 100); assert.equal(s.boss.id, 'mad-dealer');
  assert.equal(s.bossHp, 900); assert.equal(s.phase, 1); assert.equal(s.arcade, null);
  s.protection = 0; hurtCrazy(s, 30); assert.equal(s.hp, 70);
  assert.equal(hurtCrazy(s, 30), false); assert.equal(s.hp, 70);
  healCrazy(s, 80); assert.equal(s.hp, 100);
});

test('Boss phases lead to a protected transformation, then a separate higher-HP second form and victory', () => {
  const s = createCrazy(); s.hp = 50;
  s.damageLeft = 300; hitCrazyBoss(s, 300); assert.equal(s.phase, 2); assert.equal(s.hp, 58);
  s.damageLeft = 300; hitCrazyBoss(s, 300); assert.equal(s.phase, 3); assert.equal(s.hp, 66);
  s.damageLeft = 300; hitCrazyBoss(s, 300);
  assert.equal(s.bossHp, 0); assert.equal(s.over, false); assert.equal(s.form, 1); assert.equal(s.cutscene.kind, 'transform');
  const elapsed = s.elapsed, hp = s.hp; s.protection = 0;
  assert.equal(hurtCrazy(s, 30), false); hitCrazyBoss(s, 900); tap(s, 'action');
  run(s, 4450); assert.equal(s.form, 1); assert.equal(s.hp, hp); assert.equal(s.elapsed, elapsed);
  run(s, 50); assert.equal(s.form, 2); assert.equal(s.bossHp, 1200); assert.equal(s.bossMaxHp, 1200); assert.equal(s.mode, 'jump');
  assert.equal(s.hp, 80); assert.equal(s.held.size, 0);
  // This test covers victory after the separately tested vault gate has been cleared.
  s.vaultCleared = true;
  s.damageLeft = 1200; hitCrazyBoss(s, 1200);
  assert.equal(s.bossHp, 0); assert.equal(s.over, true); assert.equal(s.won, true); assert.equal(s.cutscene.kind, 'victory');
  const score = s.score; hitCrazyBoss(s, 30); healCrazy(s, 20); run(s, 6500);
  assert.equal(s.score, score); assert.equal(s.hp, 88); assert.equal(s.cutscene, null);
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
  tap(s, 'action'); assert.ok(s.mini.spin); assert.equal(s.mini.pending, 0); run(s, 1050); assert.equal(s.mini.pending, 32); assert.equal(s.bossHp, 900);
  tap(s, 'action'); assert.equal(s.mini.pending, 32); run(s, 1050); assert.equal(s.mini.pending, 64);
  tap(s, 'alt'); assert.equal(s.mini.pending, 0); assert.equal(s.bossHp, 850); assert.equal(s.hp, 83);
});

test('A lost Tiger gamble removes its reward and costs HP', () => {
  const s = createCrazy(); enter(s, 'tiger'); s.mini.pending = 18; s.random = () => .9;
  tap(s, 'action'); assert.equal(s.mini.pending, 18); run(s, 1050); assert.equal(s.mini.pending, 0); assert.equal(s.hp, 90); assert.equal(s.bossHp, 900);
});

test('Cards only accept the requested pair and support pointer selection', () => {
  const s = createCrazy(); enter(s, 'cards'); s.mini.items = [4, 2, 4, 7]; s.mini.target = 4;
  pointCrazy(s, 42, 220); pointCrazy(s, 172, 220);
  assert.equal(s.bossHp, 878); assert.ok(s.cooldown > 0);
  updateCrazy(s, 50); assert.equal(s.mini.selected.length, 2);
});

test('Mahjong clears pairs and finishes a board without selecting removed tiles twice', () => {
  const s = createCrazy(); enter(s, 'mahjong'); s.mini.items = [0, 0, 1, 1, 2, 2]; s.mini.target = 0; s.random = () => 0;
  for (const i of [0, 1, 2, 3, 4, 5]) { s.cooldown = 0; s.mini.focus = i; tap(s, 'action'); }
  assert.equal(s.bossHp, 850); assert.equal(s.mini.removed.length, 6);
  tap(s, 'action'); assert.equal(s.bossHp, 850);
});

test('Pachinko uses distinct reward bins and a bounded ball count', () => {
  const s = createCrazy(); enter(s, 'pachinko'); s.hp = 50;
  s.mini.bins = [{ x: 12, w: 44, kind: 'heal', amount: 8 }, { x: 56, w: 56, kind: 'attack', amount: 22 }, { x: 112, w: 56, kind: 'hurt', amount: 6 }, { x: 168, w: 56, kind: 'attack', amount: 22 }, { x: 224, w: 44, kind: 'heal', amount: 8 }];
  pointCrazy(s, 500, 100); assert.equal(s.mini.aim, 260);
  s.mini.balls = [{ x: 20, y: 504, vx: 0, vy: 100 }, { x: 80, y: 504, vx: 0, vy: 100 }, { x: 140, y: 504, vx: 0, vy: 100 }];
  updateCrazy(s, 50); assert.equal(s.hp, 50); assert.equal(s.bossHp, 878); assert.equal(s.mini.balls.length, 0);
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
  assert.equal(gift.hp, 76); assert.equal(gift.cat.gift, true);
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

test('Cat event probabilities include healing, Boss and player scratches, blocks and mischief', async () => {
  const { catAction } = await import('./crazy.mjs');
  assert.deepEqual([.1, .3, .5, .7, .9].map(value => catAction(() => value)), ['heal', 'boss', 'player', 'blocks', 'mischief']);
});

test('A cat scratch damages the Boss once and obeys the encounter guard', () => {
  const s = createCrazy({ random: () => .3 }); s.catDue = 0;
  for (let i = 0; i < 25; i++) updateCrazy(s, 50);
  assert.equal(s.cat.action, 'boss'); assert.equal(s.bossHp, 882);
  for (let i = 0; i < 10; i++) updateCrazy(s, 50);
  assert.equal(s.bossHp, 882);
  const guarded = createCrazy({ random: () => .3 }); guarded.damageLeft = 0; guarded.catDue = 0;
  for (let i = 0; i < 25; i++) updateCrazy(guarded, 50);
  assert.equal(guarded.bossHp, 900);
});

test('Cat player scratches warn first, cost six HP, and can be dodged with left/right', () => {
  const hit = createCrazy({ random: () => .5 }); hit.catDue = 0;
  updateCrazy(hit, 50); assert.equal(hit.cat.action, 'player'); assert.equal(hit.hp, 100);
  for (let i = 0; i < 24; i++) updateCrazy(hit, 50);
  assert.equal(hit.hp, 94);
  const dodge = createCrazy({ random: () => .5 }); dodge.catDue = 0;
  updateCrazy(dodge, 50); tap(dodge, 'left');
  for (let i = 0; i < 24; i++) updateCrazy(dodge, 50);
  assert.equal(dodge.cat.dodged, true); assert.equal(dodge.hp, 100);
});

test('Cat block smashing removes a local area, preserves distant cells, and does not trigger penalties', () => {
  const s = createCrazy({ random: () => .7 }); s.catDue = 0;
  for (let y = 17; y < 20; y++) for (let x = 0; x < 3; x++) s.bridge.grid[y][x] = { type: 'G', g: 99, bomb: true, curse: 'garbage' };
  s.bridge.grid[19][9] = { type: 'O', g: 100 };
  for (let i = 0; i < 25; i++) updateCrazy(s, 50);
  assert.equal(s.cat.action, 'blocks'); assert.ok(s.cat.cells.length > 0);
  assert.ok(s.cat.cells.length <= 9); assert.equal(s.bridge.grid[19][9].g, 100);
  assert.equal(s.bridge.pendingGarbage, 0); assert.equal(s.bridge.noHoldLeft, 0);
  assert.ok(s.bossHp < 900);
});

test('Cat attacks a Boss instead when a card encounter has no blocks to smash', () => {
  const s = createCrazy({ random: () => .7 }); enter(s, 'cards'); s.catDue = 0;
  for (let i = 0; i < 25; i++) updateCrazy(s, 50);
  assert.equal(s.cat.action, 'boss'); assert.equal(s.bossHp, 882);
});

test('Crazy Bridge and arcade playfields keep the original 1:2 aspect ratio', async () => {
  const { crazyPlayfield, crazyCanvasHeight } = await import('./crazy-view.mjs');
  for (const mode of ['bridge', 'sand', 'pinball', 'breakout', 'bbtan']) {
    const area = crazyPlayfield(mode);
    assert.equal(area.h, area.w * 2);
    assert.equal(area.w / 280, area.h / 560);
    assert.ok(area.y + area.h <= crazyCanvasHeight(mode) - 50);
  }
  assert.equal(crazyCanvasHeight('bridge'), 720);
  assert.equal(crazyCanvasHeight('cards'), 560);
});

test('Crazy uses the Marathon Bridge engine and honors stage flips', () => {
  const s = createCrazy({ random: () => .5 }); const g = s.bridge;
  assert.equal(g.mode, 'marathon');
  g.active = null; g.phase = 'resolving'; g.pendingFlips = 1;
  g.grid[19][2] = { type: 'O', g: 21 };
  updateCrazy(s, 50);
  assert.equal(g.grid[0][7].g, 21); assert.equal(g.pendingFlips, 0);
});

test('Switching to a mini-game preserves the full Bridge board, active piece, hold and queue', () => {
  const s = createCrazy({ random: () => .5 }); const g = s.bridge;
  g.grid[19][2] = { type: 'O', g: 22, bomb: true };
  g.active = { type: 'T', rot: 1, x: 4, y: 8, curse: null, sand: null };
  g.hold = { type: 'I' }; g.holdLocked = true;
  const before = structuredClone({ grid: g.grid, active: g.active, hold: g.hold, queue: g.queue });
  advanceCrazy(s, 'cards');
  for (let i = 0; i < 8; i++) updateCrazy(s, 50);
  advanceCrazy(s, 'bridge');
  assert.deepEqual({ grid: g.grid, active: g.active, hold: g.hold, queue: g.queue }, before);
  assert.equal(g.holdLocked, true);
});

test('Sand conversion preserves a falling piece and its queue while settling grains quickly', () => {
  const s = createCrazy({ random: () => .5 }); const g = s.bridge;
  g.grid[18][2] = { type: 'O', g: 23 }; g.grid[19][2] = { type: 'O', g: 23 };
  g.active = { type: 'T', rot: 1, x: 4, y: 8, curse: null, sand: null };
  const queue = g.queue.map(p => ({ type: p.type, bombIndex: p.bombIndex, curse: p.curse, curseIndex: p.curseIndex }));
  advanceCrazy(s, 'sand');
  assert.equal(s.parkedPiece.type, 'T'); assert.equal(g.active, null);
  for (let i = 0; i < 100 && !g.active; i++) updateCrazy(s, 16);
  assert.equal(g.active.type, 'T'); assert.equal(g.active.rot, 1);
  assert.deepEqual(g.queue.map(p => ({ type: p.type, bombIndex: p.bombIndex, curse: p.curse, curseIndex: p.curseIndex })), queue);
  const { type, rot } = g.active;
  advanceCrazy(s, 'cards');
  assert.equal(g.sanding, false); assert.equal(g.active.type, type); assert.equal(g.active.rot, rot);
  assert.equal(g.active.sand, null); assert.equal(g.phase, 'playing');
});

test('Leaving Sandtrix during conversion keeps the parked piece instead of dropping it', () => {
  const s = createCrazy({ random: () => .5 }); const g = s.bridge;
  g.active = { type: 'I', rot: 0, x: 3, y: 9, sand: null };
  g.grid[9][2] = { type: 'O', g: 24 };
  const queue = structuredClone(g.queue);
  advanceCrazy(s, 'sand');
  advanceCrazy(s, 'mahjong');
  assert.equal(g.active.type, 'I'); assert.equal(g.sanding, false); assert.equal(s.parkedPiece, null);
  assert.deepEqual(g.queue.map(p => p.type), queue.map(p => p.type));
});

test('Sandtrix exit relocates an overlapping active piece without overwriting settled blocks', async () => {
  const { fits, SAND_SCALE } = await import('./logic.mjs');
  const s = createCrazy({ random: () => .5 }); advanceCrazy(s, 'sand');
  s.parkedPiece = null;
  s.bridge.active = { type: 'O', rot: 0, x: 3, y: 18, sand: 1 };
  for (let y = 16 * SAND_SCALE; y < 20 * SAND_SCALE; y++) for (let x = 0; x < 10 * SAND_SCALE; x++) s.bridge.sandGrid[y][x] = 1;
  advanceCrazy(s, 'bridge');
  const g = s.bridge;
  assert.ok(fits(g.grid, g.active.type, g.active.rot, g.active.x, g.active.y, g));
  assert.equal(g.grid.flat().filter(Boolean).length, 40);
  assert.equal(g.active.type, 'O');
});

test('Crazy sand clearing keeps disconnected same-color grains', async () => {
  const { SAND_SCALE } = await import('./logic.mjs');
  const s = createCrazy({ random: () => .5 }); advanceCrazy(s, 'sand');
  const g = s.bridge; s.parkedPiece = null; s.catDue = Infinity;
  g.active = null; g.phase = 'resolving';
  for (let x = 0; x < 10 * SAND_SCALE; x++) g.sandGrid[20 * SAND_SCALE - 1][x] = 1;
  const x = 4 * SAND_SCALE, y = 20 * SAND_SCALE - 3;
  g.sandGrid[y][x] = 1; for (let dx = -1; dx <= 1; dx++) g.sandGrid[y + 1][x + dx] = 2;
  updateCrazy(s, 16);
  assert.equal(g.sandGrid[y][x], 1);
  assert.ok(g.sandGrid[20 * SAND_SCALE - 1].every(value => value === 0));
});

test('Original Bridge reward cells enter their bonus with no countdown', () => {
  const s = createCrazy({ random: () => .5 }); const g = s.bridge;
  g.active = null; g.phase = 'resolving';
  g.grid[19] = Array.from({ length: 10 }, (_, x) => ({ type: 'O', g: 10 + x }));
  g.grid[19][4].reward = 'pinball';
  g.grid[12][2] = { type: 'O', g: 55 };
  updateCrazy(s, 50);
  for (let i = 0; i < 5; i++) updateCrazy(s, 50);
  assert.equal(s.mode, 'pinball'); assert.equal(s.arcade.prep, 0);
  assert.equal(g.grid[12][2].g, 55);
});

test('Crazy Sandtrix uses the same rotated paint colors as the grains it stamps', async () => {
  const { cellsOf, sandPaintsFor, SAND_HEX, SAND_SCALE, ghostY, hardDrop } = await import('./logic.mjs');
  const s = createCrazy({ random: () => .5 }); advanceCrazy(s, 'sand');
  s.parkedPiece = null;
  const g = s.bridge;
  g.active = { type: 'T', rot: 1, x: 3, y: 0, sand: [0, 0, 2, 2] }; g.phase = 'playing';
  const cells = cellsOf('T', 1, 3, ghostY(g));
  const paints = sandPaintsFor('T', cells, g.active.sand, 1);
  hardDrop(g);
  cells.forEach(([x, y], index) => {
    const grain = g.sandGrid[y * SAND_SCALE][x * SAND_SCALE];
    assert.equal(grain, paints[index] + 1);
    assert.equal(SAND_HEX[grain - 1], SAND_HEX[paints[index]]);
  });
});


test('Tiger spin locks repeat pulls and banking until its result lands exactly once', () => {
  const s = createCrazy({ random: () => 0 }); enter(s, 'tiger'); s.mini.pending = 18;
  tap(s, 'action'); const spin = s.mini.spin;
  tap(s, 'action'); tap(s, 'alt'); assert.equal(s.mini.spin, spin); assert.equal(s.mini.pending, 18);
  run(s, 1000); assert.equal(s.mini.pending, 18);
  run(s, 50); assert.equal(s.mini.pending, 36); assert.equal(s.mini.spin, null);
  run(s, 100); assert.equal(s.mini.pending, 36);
});

test('Timed pairs lose HP and reset a streak on expiry, but pause during cat obstruction', () => {
  for (const mode of ['cards', 'mahjong']) {
    const s = createCrazy(); enter(s, mode); s.catDue = Infinity;
    s.mini.streak = 3; s.mini.roundLeft = 50;
    s.catBlock = 150; updateCrazy(s, 50); assert.equal(s.mini.roundLeft, 50);
    s.catBlock = 0; updateCrazy(s, 50);
    assert.equal(s.hp, 95); assert.equal(s.mini.streak, 0); assert.ok(s.mini.roundLeft > 0);
  }
});

test('Mahjong requires the indicated target and streaks increase pair damage', () => {
  const s = createCrazy({ random: () => 0 }); enter(s, 'mahjong');
  s.mini.items = [0, 0, 1, 1, 2, 2]; s.mini.target = 2;
  pointCrazy(s, 62, 220); pointCrazy(s, 140, 220);
  assert.equal(s.hp, 95); assert.equal(s.bossHp, 900); assert.deepEqual(s.mini.removed, []);
  s.cooldown = 0; s.mini.selected = []; s.mini.streak = 2;
  pointCrazy(s, 140, 325); pointCrazy(s, 218, 325);
  assert.equal(s.bossHp, 880); assert.equal(s.mini.streak, 3); assert.equal(s.mini.target, 0);
});

test('Dodge controls move in four directions, clamp touch targets and limit dash repeats', () => {
  const s = createCrazy(); enter(s, 'dodge'); s.catDue = Infinity;
  const y = s.mini.y; inputCrazy(s, 'up'); updateCrazy(s, 50); inputCrazy(s, 'up', false);
  assert.ok(s.mini.y < y);
  pointCrazy(s, 999, -100); assert.deepEqual(s.mini.target, { x: 258, y: 172 });
  run(s, 200); assert.ok(s.mini.x > 140);
  tap(s, 'action'); assert.equal(s.mini.dash, 180); assert.equal(s.mini.dashReady, 1400);
  run(s, 200); tap(s, 'action'); assert.equal(s.mini.dash, 0); assert.ok(s.mini.dashReady > 0);
  run(s, 1200); tap(s, 'action'); assert.equal(s.mini.dash, 180);
  assert.ok(s.mini.x <= 258); assert.ok(s.mini.y >= 172);
});

test('Dodge lanes warn before moving; gaps and dash avoid damage, collisions cost HP', () => {
  const make = () => {
    const s = createCrazy(); enter(s, 'dodge'); s.catDue = Infinity; s.protection = 0;
    s.mini.spawn = Infinity; s.mini.x = 140; s.mini.y = 400;
    s.mini.hazards = [{ horizontal: false, gap: 40, gapSize: 76, age: 0, warn: 700, pos: 400, speed: 140 }]; return s;
  };
  const hit = make(); updateCrazy(hit, 50); assert.equal(hit.hp, 100); assert.equal(hit.mini.hazards[0].pos, 400);
  hit.mini.hazards[0].age = 700; updateCrazy(hit, 50); assert.equal(hit.hp, 94);
  const gap = make(); gap.mini.x = 40; gap.mini.hazards[0].age = 700; updateCrazy(gap, 50); assert.equal(gap.hp, 100);
  const dash = make(); dash.mini.hazards[0].age = 700; tap(dash, 'action'); updateCrazy(dash, 10); assert.equal(dash.hp, 100);
});

test('Dodge survival counters the Boss and transitions stay brief without pausing combat', () => {
  const s = createCrazy(); advanceCrazy(s, 'dodge'); s.catDue = Infinity;
  assert.deepEqual(s.transition, { from: 'bridge', to: 'dodge', time: 0 });
  s.mini.spawn = Infinity; run(s, 800); assert.equal(s.transition, null); assert.equal(s.timeLeft, s.duration - 800);
  run(s, 1200); assert.equal(s.bossHp, 892);
  s.held.add('up'); advanceCrazy(s, 'bridge'); assert.equal(s.held.size, 0); assert.equal(s.mini, null);
});


test('Ending a Tiger encounter settles the current risk before banking rewards', () => {
  const s = createCrazy({ random: () => .9 }); enter(s, 'tiger'); s.catDue = Infinity;
  s.mini.pending = 18; tap(s, 'action'); s.timeLeft = 50; updateCrazy(s, 50);
  assert.equal(s.bossHp, 900); assert.equal(s.hp, 90); assert.notEqual(s.mode, 'tiger');
});


test('Transformation can be skipped after one second and preserves Bridge board and queue', () => {
  const s = createCrazy(); s.bridge.grid[19][2] = { type: 'O', g: 42 };
  const queue = structuredClone(s.bridge.queue); s.damageLeft = 900; hitCrazyBoss(s, 900);
  assert.equal(skipCrazyCinematic(s), false); run(s, 1000); assert.equal(skipCrazyCinematic(s), true);
  assert.equal(s.form, 2); assert.equal(s.bridge.grid[19][2].g, 42); assert.deepEqual(s.bridge.queue, queue);
});

test('Second-form deck includes every new attack and keeps Bridge in the rotation', () => {
  const s = createCrazy({ random: () => .5 }); s.form = 2; const seen = new Set();
  for (let i = 1; i <= 60; i++) { advanceCrazy(s); seen.add(s.mode); if (s.encounter % 3 === 0) assert.equal(s.mode, 'bridge'); }
  for (const mode of ['jump', 'coins', 'motion', 'vortex', 'roulette']) assert.ok(seen.has(mode), mode);
});

test('Jump height responds to holding action, and cannot be retriggered in mid-air', () => {
  const make = () => { const s = createCrazy(); advanceCrazy(s, 'jump'); run(s, 550); s.mini.spawn = Infinity; s.catDue = Infinity; return s; };
  const short = make(), high = make(); tap(short, 'action'); inputCrazy(high, 'action');
  run(short, 250); run(high, 250); assert.ok(high.mini.y < short.mini.y);
  const vy = short.mini.vy; tap(short, 'action'); assert.equal(short.mini.vy, vy); assert.equal(short.mini.jumped, 1);
  inputCrazy(high, 'action', false); run(short, 900); run(high, 900); assert.equal(short.mini.grounded, true); assert.equal(high.mini.grounded, true);
});

test('Blue sweeps hurt stationary cores, orange sweeps hurt moving cores, and warnings never hurt', () => {
  const make = tone => { const s = createCrazy(); advanceCrazy(s, 'motion'); run(s, 550); s.catDue = Infinity; s.mini.spawn = Infinity; s.protection = 0;
    s.mini.hazards = [{kind: 'motion', tone, y: s.mini.y, warn: 850, age: 0, speed: 200}]; return s; };
  const warn = make('blue'); updateCrazy(warn, 50); assert.equal(warn.hp, 100);
  const blueStill = make('blue'); blueStill.mini.hazards[0].age = 850; updateCrazy(blueStill, 50); assert.equal(blueStill.hp, 94);
  const blueMove = make('blue'); blueMove.mini.hazards[0].age = 850; inputCrazy(blueMove, 'left'); updateCrazy(blueMove, 50); assert.equal(blueMove.hp, 100);
  const orangeMove = make('orange'); orangeMove.mini.hazards[0].age = 850; inputCrazy(orangeMove, 'left'); updateCrazy(orangeMove, 50); assert.equal(orangeMove.hp, 94);
  const orangeStill = make('orange'); orangeStill.mini.hazards[0].age = 850; updateCrazy(orangeStill, 50); assert.equal(orangeStill.hp, 100);
});

test('Motion sweeps enter from all eight directions and keep blue/orange movement rules', () => {
  const seen = new Set();
  for (let direction = 0; direction < 8; direction++) {
    for (const tone of ['blue','orange']) for (const moving of [false,true]) {
      const s = createCrazy(); advanceCrazy(s,'motion'); s.catDue=Infinity;s.protection=0;s.mini.spawn=Infinity;
      const sweep = motionSweep(()=>direction/8,tone,350);seen.add(sweep.direction);
      assert.ok(Math.abs(Math.hypot(sweep.nx,sweep.ny)-1)<1e-9);
      sweep.offset=sweep.nx*s.mini.x+sweep.ny*s.mini.y-2;sweep.age=sweep.warn;
      s.mini.hazards=[sweep];if(moving)inputCrazy(s,'right');updateCrazy(s,10);
      assert.equal(s.hp<100,tone==='blue'?!moving:moving, `${direction}/${tone}/${moving}`);
      sweep.offset=sweep.end+1;updateCrazy(s,10);assert.equal(s.mini.hazards.length,0);
    }
  }
  assert.equal(seen.size,8);
});

test('Casino actions emit their actual insertion, collection, reel and payout sounds once', () => {
  const p=createCrazy();advanceCrazy(p,'pusher');p.catDue=Infinity;run(p,550);p.events=[];
  p.mini.coins=[];tap(p,'action');assert.equal(p.events.filter(e=>e.key==='crazyPusherInsertSound').length,1);
  p.mini.coins=[{x:120,y:466,vx:0,vy:0,kind:'gold'},{x:170,y:466,vx:0,vy:0,kind:'gold'}];
  updateCrazy(p,50);assert.equal(p.events.find(e=>e.key==='crazyPusherDropSound').amount,2);
  run(p,300);tap(p,'alt');assert.equal(p.events.filter(e=>e.key==='crazyPusherBank').length,1);
  assert.equal(p.events.find(e=>e.key==='crazyPusherBank').amount,6);
  const t=createCrazy({random:()=>0});enter(t,'tiger');t.catDue=Infinity;t.events=[];
  tap(t,'action');run(t,1050);assert.equal(t.events.filter(e=>e.key==='crazyReelStop').length,3);
  assert.equal(t.events.filter(e=>e.key==='crazySlotWinSound').length,1);
  tap(t,'alt');assert.equal(t.events.filter(e=>e.key==='crazyCasinoPayoutSound').length,1);
  const slots=createCrazy();enter(slots,'slots');slots.catDue=Infinity;slots.events=[];
  run(slots,100);assert.ok(slots.events.some(e=>e.key==='crazySlotTickSound'));
  for(let i=0;i<3;i++){slots.mini.clock=(4-i)*230;tap(slots,'action');}
  const ticks=slots.events.filter(e=>e.key==='crazySlotTickSound').length;
  run(slots,300);assert.equal(slots.events.filter(e=>e.key==='crazySlotTickSound').length,ticks);
  assert.equal(slots.events.filter(e=>e.key==='crazySlotWinSound').length,1);
});

test('Roulette draws one, two or three lasers with the requested 50/30/20 weights', () => {
  const counts = [0, 0, 0];
  for (let i = 0; i < 1000; i++) {
    let call = 0;
    const salvo = rouletteLasers(() => call++ === 0 ? i / 1000 : .25, 140, 410);
    counts[salvo.lasers.length - 1]++;
  }
  assert.deepEqual(counts, [500, 300, 200]);
});

test('Every roulette salvo leaves a reachable safe disk, including at all arena edges', () => {
  for (let x = 22; x <= 258; x += 29.5) for (let y = 180; y <= 484; y += 38) {
    for (const roll of [0, .5, .8]) for (const direction of [0, .25, .5, .75]) for (const jitter of [0, .999]) for (const spacing of [0, .999]) for (const layout of [.1,.5,.9]) for (const offset of [0,.999]) {
      const values = [roll, direction, jitter, spacing, .99, layout, offset, .999, offset, .999];
      const { lasers, safe } = rouletteLasers(() => values.shift() ?? .5, x, y);
      assert.ok(safe.x - safe.radius >= 22 && safe.x + safe.radius <= 258);
      assert.ok(safe.y - safe.radius >= 180 && safe.y + safe.radius <= 484);
      assert.ok(Math.hypot(safe.x - x, safe.y - y) <= 90, 'Refuge must be reachable before the first firing');
      for (const h of lasers) {
        const dx = h.b.x - h.a.x, dy = h.b.y - h.a.y;
        const distance = Math.abs((safe.x - h.a.x) * dy - (safe.y - h.a.y) * dx) / Math.hypot(dx, dy);
        assert.ok(distance >= safe.radius + h.width / 2 + 6, 'The whole refuge must avoid every widened laser hitbox');
      }
    }
  }
});

test('Roulette warns about the entire salvo together and may fire simultaneously or staggered', () => {
  const make = timing => {
    const values = [.9, .1, .5, .999, timing, 0, .5, .999, .5, .999];
    return rouletteLasers(() => values.shift() ?? .5, 140, 410).lasers;
  };
  assert.deepEqual(make(.1).map(h => h.warn), [520, 520, 520]);
  const staggered = make(.9);
  assert.deepEqual(staggered.map(h => h.warn), [520, 640, 760]);
  assert.ok(staggered.every(h => h.age === 0 && !h.fired));
});

test('Dense roulette salvos vary angular spacing and each staggered firing interval', () => {
  const make = spacing => {
    const values = [.9, .1, .5, spacing, .9, 0, .5, 0, .5, .999];
    return rouletteLasers(() => values.shift() ?? .5, 140, 410).lasers;
  };
  const narrow = make(0), wide = make(.999);
  const angle = h => Math.atan2(h.b.y - h.a.y, h.b.x - h.a.x);
  assert.ok(Math.abs(angle(narrow[1]) - angle(narrow[0])) < Math.abs(angle(wide[1]) - angle(wide[0])));
  assert.ok(Math.abs(angle(wide[1]) - angle(wide[0])) < .4, 'Even the widest spacing is denser than before');
  assert.deepEqual(narrow.map(h => h.warn), [520, 560, 680]);
  assert.ok(narrow.every(h => h.width === 24));
});

test('Every laser salvo targets the warning-time player position, including former camping spots', () => {
  for (const [x,y] of [[22,180],[258,484],[70,400],[210,280],[140,410]]) for (const random of [0,.55,.99]) {
    const s=createCrazy();s.form=2;advanceCrazy(s,'roulette');s.catDue=Infinity;
    s.mini.x=x;s.mini.y=y;s.mini.spawn=0;s.random=()=>random;s.protection=0;
    updateCrazy(s,50);s.mini.spawn=Infinity;run(s,450);
    assert.equal(s.hp,100,'Aimed preview must still allow time to react');
    run(s,50);assert.ok(s.hp<100,`Standing still at ${x}/${y} must no longer avoid the salvo`);
  }
});

test('Laser salvos mix separated parallel lanes, fans and broad crossing directions', () => {
  const make = layout => {
    const values=[.9,.1,.5,.8,.1,layout];
    return rouletteLasers(()=>values.shift()??.55,70,400);
  };
  const fan=make(.1),parallel=make(.5),cross=make(.9);
  assert.equal(fan.pattern,'fan');assert.equal(parallel.pattern,'parallel');assert.equal(cross.pattern,'cross');
  const angle = h => Math.atan2(h.b.y-h.a.y,h.b.x-h.a.x);
  assert.ok(Math.abs(angle(fan.lasers[0])-angle(fan.lasers[1]))>.1);
  assert.ok(parallel.lasers.every(h=>Math.abs(angle(h)-angle(parallel.lasers[0]))<1e-9));
  const centers=parallel.lasers.map(h=>[(h.a.x+h.b.x)/2,(h.a.y+h.b.y)/2]);
  assert.equal(new Set(centers.map(c=>JSON.stringify(c))).size,3,'Parallel rays must cover different lanes');
  assert.ok(Math.abs(angle(cross.lasers[1])-angle(cross.lasers[2]))>.85);
  for(const salvo of [fan,parallel,cross]){
    const first=salvo.lasers[0];assert.ok(Math.hypot((first.a.x+first.b.x)/2-70,(first.a.y+first.b.y)/2-400)<1e-9);
  }
});

test('Widened roulette beams hit the newly covered band but leave adjacent space safe', () => {
  for (const [x, expectedHit] of [[157, true], [159, false]]) {
    const s = createCrazy(); s.form = 2; advanceCrazy(s, 'roulette'); s.catDue = Infinity;
    s.mini.spawn = Infinity; s.mini.x = x; s.mini.y = 400; s.protection = 0;
    s.mini.hazards = [{ kind: 'laser', width: 24, a: { x: 140, y: 152 }, b: { x: 140, y: 508 }, warn: 520, age: 520, fired: false }];
    updateCrazy(s, 10);
    assert.equal(s.hp < 100, expectedHit);
  }
});

test('Walking to the shared refuge avoids every staggered shot without a dash', () => {
  for (const [x, y] of [[22, 180], [258, 484], [140, 330], [140, 410]]) {
    const s = createCrazy(); s.form = 2; advanceCrazy(s, 'roulette'); s.catDue = Infinity;
    run(s, 800); s.phase = 3; s.mini.x = x; s.mini.y = y; s.random = () => .99; s.protection = 0;
    updateCrazy(s, 50); assert.equal(s.mini.hazards.length, 3);
    const lasers = s.mini.hazards, safe = s.mini.laserSafe;
    s.mini.spawn = Infinity; pointCrazy(s, safe.x, safe.y);
    run(s, 1100);
    assert.equal(s.hp, 100); assert.equal(s.mini.dash, 0);
    assert.ok(lasers.every(h => h.fired));
    assert.equal(s.events.filter(e => e.key === 'crazyLaserSound').length, 3);
  }
  const hit = createCrazy(); hit.form = 2; advanceCrazy(hit, 'roulette'); hit.catDue = Infinity;
  run(hit, 800); hit.mini.x = 140; hit.mini.y = 330; hit.random = () => .99; hit.protection = 0;
  updateCrazy(hit, 50); hit.mini.spawn = Infinity; run(hit, 450);
  assert.equal(hit.hp, 100, 'Preview lines never cause damage');
  run(hit, 50); assert.ok(hit.hp < 100, 'Standing on the firing line still causes damage');
});

test('A new roulette wave never overlaps the previous staggered salvo', () => {
  const s = createCrazy(); s.form = 2; advanceCrazy(s, 'roulette'); s.catDue = Infinity;
  s.phase = 3; s.random = () => .99; s.protection = Infinity;
  let waves = 0;
  for (let time = 0; time < 12000; time += 50) {
    const previous = s.mini.wave; updateCrazy(s, 50);
    if (s.mini.wave !== previous) {
      waves++; assert.equal(s.mini.hazards.length, 3);
      assert.ok(s.mini.hazards.every(h => h.age === 50), 'Old salvo must be gone before the next preview');
    }
  }
  assert.ok(waves >= 8);
});

test('Earned pusher rewards preserve encounter cadence, prevent damage and bank actual dropped coins', () => {
  const s = createCrazy(); s.form = 2; advanceCrazy(s, 'coins'); s.damageLeft = 100;
  hitCrazyBoss(s, 40); assert.equal(s.pusherDue, true); const encounter = s.encounter;
  advanceCrazy(s); assert.equal(s.mode, 'pusher'); assert.equal(s.encounter, encounter); assert.ok(s.duration >= 10000 && s.duration <= 20000);
  s.protection = 0; assert.equal(hurtCrazy(s, 100), false); assert.equal(s.hp, 100);
  s.mini.coins = [{x: 140, y: 466, vx: 0, vy: 0, green: false}]; updateCrazy(s, 50);
  assert.equal(s.mini.pending, 3); assert.equal(s.stats.coins, 1);
  inputCrazy(s, 'alt'); assert.notEqual(s.mode, 'pusher'); assert.equal(s.bossHp, 857); assert.equal(s.encounter, encounter + 1);
});

test('Pusher reward is settled once even when the time expires or a risk is banked early', () => {
  const s = createCrazy(); advanceCrazy(s, 'pusher'); s.mini.pending = 20; s.mini.risk = {time: 4000, win: false}; s.timeLeft = 50;
  updateCrazy(s, 50); assert.notEqual(s.mode, 'pusher'); assert.equal(s.bossHp, 890);
  const hp = s.bossHp; updateCrazy(s, 50); assert.equal(s.bossHp, hp);
});

test('New pusher beds vary coin positions while keeping every starting coin inside the tray', () => {
  const make = initial => {
    let seed = initial;
    return createPusher(() => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296));
  };
  const layouts = Array.from({ length: 10 }, (_, i) => make(i + 1).coins);
  assert.equal(new Set(layouts.map(coins => JSON.stringify(coins.map(c => [c.x, c.y])))).size, 10);
  for (const coins of layouts) {
    assert.equal(coins.length, 108);
    assert.equal(coins.filter(c => c.level === "lower").length, 96);
    assert.equal(coins.filter(c => c.level === "upper").length, 12);
    assert.ok(coins.every(c => c.x > 27 && c.x < 253 && c.y > 300 && c.y < 465));
    assert.ok(new Set(coins.slice(0, 12).map(c => c.y)).size > 1);
  }
  assert.deepEqual(make(1).coins, layouts[0]);
});

test('Inserted coins settle on the upper shelf and only the front chute pays rewards', () => {
  const s = createCrazy(); advanceCrazy(s, 'pusher'); s.catDue = Infinity; run(s, 550);
  s.mini.coins = []; s.events = []; tap(s, 'action');
  const coin = s.mini.coins[0];
  assert.equal(coin.level, 'upper'); assert.equal(coin.vy, 0); assert.equal(coin.entry, 140);
  assert.ok(coin.y < PUSHER_STEP); const start = coin.y;
  run(s, 100); assert.equal(coin.y, start); assert.equal(s.mini.collected, 0);
  run(s, 50); assert.equal(coin.entry, 0); assert.equal(coin.level, 'upper');
  coin.y = PUSHER_STEP; updateCrazy(s, 10);
  assert.equal(coin.level, 'transfer'); assert.equal(s.mini.transferred, 1);
  assert.equal(s.mini.collected, 0); assert.equal(s.mini.pending, 0);
  run(s, 150); assert.equal(coin.level, 'transfer'); assert.equal(s.mini.collected, 0);
  run(s, 50); assert.equal(coin.level, 'lower'); assert.equal(s.mini.collected, 0);
  assert.equal(s.events.filter(e => e.key === 'crazyPusherStepSound').length, 1);
  coin.kind = 'gold'; coin.green = false; coin.y = 466; updateCrazy(s, 10);
  assert.equal(s.mini.collected, 1); assert.equal(s.mini.pending, 3);
  run(s, 50); assert.equal(s.mini.collected, 1);
});

test('The packed pusher bed pays out through normal physics and dropped stock increases rewards', () => {
  for (const aim of [35, 140, 245]) for (const initial of [9, 9127]) {
    const play = (drop, step) => {
      let seed = initial; const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
      const s = createCrazy({ random }); advanceCrazy(s, 'pusher'); s.catDue = Infinity;
      s.duration = s.timeLeft = 10000; s.mini.stock = 12; const mini = s.mini;
      let nextDrop = 600;
      for (let time = 0; time < 10000; time += step) {
        s.mini.aim = aim;
        if (drop && time >= nextDrop && s.mini.stock) { tap(s, 'action'); nextDrop += 500; }
        updateCrazy(s, step);
      }
      assert.equal(s.hp, 100); assert.ok(mini.coins.every(c => Number.isFinite(c.x) && Number.isFinite(c.y)));
      return mini.collected;
    };
    for (const step of [10, 50]) {
      const idle = play(false, step), active = play(true, step);
      assert.ok(idle <= 1, `Idle pusher must not pay out freely: ${idle}`);
      assert.ok(active >= 12, `Normal play must push out at least twelve coins at aim ${aim}, step ${step}: ${active}`);
      assert.ok(active > idle, `Dropped coins must increase payout: ${active} vs ${idle}`);
    }
  }
});

test('An untouched pusher does not empty the bed during the longest twenty-second round', () => {
  for (const initial of [1, 9, 30]) {
    let seed = initial;
    const s = createCrazy({ random: () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296) });
    advanceCrazy(s, 'pusher'); s.catDue = Infinity; s.duration = s.timeLeft = 20000;
    const mini = s.mini;
    run(s, 20000);
    assert.ok(mini.collected <= 1, `Untouched bed paid out ${mini.collected} coins`);
    assert.notEqual(s.mode, 'pusher'); assert.equal(s.bossHp, 900);
  }
});

test('Held jumps have a low ceiling but still clear the ground attack height', () => {
  const s = createCrazy(); advanceCrazy(s, 'jump'); run(s, 550); s.catDue = Infinity; s.mini.spawn = Infinity;
  inputCrazy(s, 'action'); let peak = 464;
  for (let time = 0; time < 650; time += 10) { updateCrazy(s, 10); peak = Math.min(peak, s.mini.y); }
  assert.ok(464 - peak > 32, 'Jump must clear ground hazards');
  assert.ok(464 - peak < 60, 'Held jump must not bypass the arena');
  assert.equal(s.mini.grounded, true);
});

test('Pachinko layouts vary while keeping every peg inside its playable lane', () => {
  const low = createCrazy({ random: () => .1 }), high = createCrazy({ random: () => .9 });
  advanceCrazy(low, 'pachinko'); advanceCrazy(high, 'pachinko');
  assert.notDeepEqual(low.mini.pegs, high.mini.pegs);
  for (const s of [low, high]) assert.ok(s.mini.pegs.every(p => p.x >= 10 && p.x <= 270 && p.y >= 160 && p.y <= 430));
});

test('Crazy Bridge keyboard waits for Marathon DAS even after an idle repeat tick, then repeats at ARR', () => {
  const s = createCrazy(); s.catDue = Infinity; s.attackDone = true;
  s.bridge.active = { ...s.bridge.active, type: 'O', rot: 0, x: 4, y: 0 };
  run(s, 95); inputCrazy(s, 'left'); assert.equal(s.bridge.active.x, 3);
  run(s, 145); assert.equal(s.bridge.active.x, 3, 'No accidental second move before 150ms');
  run(s, 5); assert.equal(s.bridge.active.x, 2);
  run(s, 34); assert.equal(s.bridge.active.x, 2);
  run(s, 1); assert.equal(s.bridge.active.x, 1);
  inputCrazy(s, 'left', false); run(s, 150); assert.equal(s.bridge.active.x, 1);
});

test('Crazy Bridge touch repeats at Marathon touch cadence and restarts the delay on each press', () => {
  const s = createCrazy(); s.catDue = Infinity; s.attackDone = true;
  s.bridge.active = { ...s.bridge.active, type: 'O', rot: 0, x: 4, y: 0 };
  inputCrazy(s, 'left', true, 'touch'); assert.equal(s.bridge.active.x, 3);
  run(s, 69); assert.equal(s.bridge.active.x, 3); run(s, 1); assert.equal(s.bridge.active.x, 2);
  inputCrazy(s, 'left', false); run(s, 20); inputCrazy(s, 'right', true, 'touch'); assert.equal(s.bridge.active.x, 3);
  run(s, 69); assert.equal(s.bridge.active.x, 3); run(s, 1); assert.equal(s.bridge.active.x, 4);
});

test('Most recently pressed direction controls Crazy Bridge repeats, matching Marathon', () => {
  const s = createCrazy(); s.catDue = Infinity; s.attackDone = true;
  s.bridge.active = { ...s.bridge.active, type: 'O', rot: 0, x: 4, y: 0 };
  inputCrazy(s, 'left'); inputCrazy(s, 'right'); assert.equal(s.bridge.active.x, 4);
  run(s, 150); assert.equal(s.bridge.active.x, 5);
  inputCrazy(s, 'right', false); run(s, 100); assert.equal(s.bridge.active.x, 5);
  advanceCrazy(s, 'bridge'); assert.equal(s.horizontalDir, 0); assert.equal(s.horizontalMs, 0);
});

test('Random pachinko bins cover the arena and retain both rewards and a bounded penalty', () => {
  let seed = 592; const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  const layouts = new Set(), values = new Set(), widths = new Set();
  for (let round = 0; round < 100; round++) {
    const bins = pachinkoBins(random);
    assert.equal(bins[0].x, 12); assert.equal(bins.at(-1).x + bins.at(-1).w, 268);
    assert.equal(bins.filter(b => b.kind === 'heal').length, 2);
    assert.equal(bins.filter(b => b.kind === 'attack').length, 2);
    assert.equal(bins.filter(b => b.kind === 'hurt').length, 1);
    for (const [i,b] of bins.entries()) {
      if (i) assert.equal(b.x, bins[i-1].x + bins[i-1].w);
      assert.ok(b.w >= 34 && b.w <= 72);
      const [min,max] = b.kind === 'heal' ? [4,12] : b.kind === 'attack' ? [12,32] : [4,10];
      assert.ok(Number.isInteger(b.amount) && b.amount >= min && b.amount <= max);
      values.add(`${b.kind}:${b.amount}`); widths.add(b.w);
    }
    layouts.add(bins.map(b => b.kind).join(','));
  }
  assert.ok(layouts.size > 10); assert.ok(values.size > 20); assert.ok(widths.size > 10);
});

test('Pachinko landing follows the displayed randomized bin boundaries and amounts exactly once', () => {
  const s = createCrazy(); enter(s, 'pachinko'); s.catDue = Infinity; s.attackDone = true;
  s.hp = 40; s.protection = 0; s.damageLeft = 200;
  const bins = s.mini.bins.map(b => ({...b}));
  let heal = 0, damage = 0, penalty = 0;
  for (const bin of bins) {
    s.protection = 0;
    s.mini.balls = [{x:bin.x+bin.w/2,y:504,vx:0,vy:100}]; updateCrazy(s, 50);
    assert.equal(s.mini.balls.length, 0);
    if (bin.kind === 'heal') heal += Math.max(1,Math.round(bin.amount*.7));
    else if (bin.kind === 'hurt') penalty += bin.amount;
    else damage += bin.amount;
    assert.deepEqual(s.mini.bins, bins, 'Bins must not reroll during flight or payout');
  }
  assert.equal(s.hp, 40 + heal - penalty); assert.equal(s.bossHp, 900 - damage);
  const hp = s.hp, bossHp = s.bossHp; updateCrazy(s, 50); assert.equal(s.hp, hp); assert.equal(s.bossHp, bossHp);
});

test('Only pusher encounter duration changes; normal Crazy modes retain form and phase timings', () => {
  for (const form of [1,2]) for (const phase of [1,2,3]) {
    for (const mode of ['bridge', ...CRAZY_MODES, 'jump', 'coins', 'motion', 'vortex', 'roulette']) {
      assert.equal(crazyRoundDuration(mode,form,phase,()=>0), (form===2?18000:22000)-phase*2000);
      assert.equal(crazyRoundDuration(mode,form,phase,()=>.999), (form===2?18000:22000)-phase*2000);
    }
  }
  assert.equal(crazyRoundDuration('pusher',1,1,()=>0),10000);
  assert.equal(crazyRoundDuration('pusher',2,3,()=>.999),20000);
  const durations=new Set(Array.from({length:11},(_,i)=>crazyRoundDuration('pusher',1,1,()=>i/11)));
  assert.equal(durations.size,11);
});

test('Lucky coins earn an actual jackpot once, then banking settles it even during a spin', () => {
  for (const early of [false,true]) {
    const s=createCrazy(); advanceCrazy(s,'pusher'); s.catDue=Infinity; s.damageLeft=500;
    s.mini.coins=[{x:140,y:466,vx:0,vy:0,kind:'lucky'}];
    s.random=()=>.5; const reward=s.mini.jackpots[2], stock=s.mini.stock;
    updateCrazy(s,50); assert.ok(s.mini.spin); assert.equal(s.mini.pending,3);
    const mini=s.mini;
    if (early) run(s,550);
    if (!early) { run(s,1000); assert.equal(mini.spin,null); assert.equal(mini.pending,3+reward); assert.equal(mini.stock,stock+4); run(s,100); assert.equal(mini.pending,3+reward); }
    tap(s,'alt'); assert.notEqual(s.mode,'pusher'); assert.equal(s.bossHp,900-3-reward); assert.equal(mini.pending,0);
    assert.equal(s.stats.coins,1);
  }
});

test('Pusher coin variants heal or double reward while preserving physical collection counts', () => {
  const s=createCrazy();advanceCrazy(s,'pusher');s.catDue=Infinity;s.hp=60;
  s.mini.coins=[{x:100,y:466,vx:0,vy:0,kind:'heal'},{x:140,y:466,vx:0,vy:0,kind:'ruby'},{x:180,y:466,vx:0,vy:0,kind:'gold'}];
  updateCrazy(s,50);assert.equal(s.hp,62);assert.equal(s.mini.pending,9);assert.equal(s.stats.coins,3);assert.equal(s.mini.falling.length,3);
});

test('Optional pusher risk cannot extend the bonus beyond twenty seconds', () => {
  const s=createCrazy({random:()=>.999});advanceCrazy(s,'pusher');s.mini.stock=0;s.mini.pending=9;
  run(s,550);const duration=s.duration, left=s.timeLeft;tap(s,'action');assert.equal(duration,20000);assert.equal(s.duration,20000);assert.equal(s.timeLeft,left);assert.equal(s.mini.riskUsed,true);
});

test('Normal restores original healing while Hard retains current recovery, HP caps and exclusions',()=>{
 for(const [difficulty,gift,transform] of [['normal',8,20],['hard',6,14]]){
  const s=createCrazy({difficulty});assert.equal(s.difficulty,difficulty);s.hp=50;
  healCrazy(s,8);assert.equal(s.hp,50+gift);healCrazy(s,20);assert.equal(s.hp,50+gift+transform);
  const hp=s.hp;healCrazy(s,0);healCrazy(s,-8);assert.equal(s.hp,hp);
  healCrazy(s,100);assert.equal(s.hp,100);assert.equal(s.stats.healed,50);
  s.hp=50;s.mode='vault';healCrazy(s,20);assert.equal(s.hp,50);
  s.mode='bridge';s.over=true;healCrazy(s,20);assert.equal(s.hp,50);
 }
 assert.equal(createCrazy().difficulty,'hard');
});

test('Normal and Hard keep the same attacks and vault gate while phase recovery differs',()=>{
 for(const [difficulty,phaseHP] of [['normal',62],['hard',58]]){
  const s=createCrazy({difficulty});s.hp=50;s.damageLeft=300;hitCrazyBoss(s,300);
  assert.equal(s.phase,2);assert.equal(s.hp,phaseHP);assert.equal(s.bossHp,600);
  s.protection=0;hurtCrazy(s,8);assert.equal(s.hp,phaseHP-8);
  s.form=2;s.phase=3;s.bossMaxHp=1200;s.bossHp=250;s.damageLeft=100;hitCrazyBoss(s,40);
  assert.equal(s.mode,'vault');assert.equal(s.bossHp,240);assert.equal(s.vaultLocked,true);assert.equal(s.duration,60000);assert.equal(s.difficulty,difficulty);
 }
});
