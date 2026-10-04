import assert from 'node:assert/strict';
import test from 'node:test';
import { createCrazy, FIRST_BOSS, CRAZY_MODES, advanceCrazy, updateCrazy, inputCrazy, pointCrazy, hitCrazyBoss, healCrazy, hurtCrazy, skipCrazyCinematic } from './crazy.mjs';

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
  s.damageLeft = 300; hitCrazyBoss(s, 300); assert.equal(s.phase, 2); assert.equal(s.hp, 62);
  s.damageLeft = 300; hitCrazyBoss(s, 300); assert.equal(s.phase, 3); assert.equal(s.hp, 74);
  s.damageLeft = 300; hitCrazyBoss(s, 300);
  assert.equal(s.bossHp, 0); assert.equal(s.over, false); assert.equal(s.form, 1); assert.equal(s.cutscene.kind, 'transform');
  const elapsed = s.elapsed, hp = s.hp; s.protection = 0;
  assert.equal(hurtCrazy(s, 30), false); hitCrazyBoss(s, 900); tap(s, 'action');
  run(s, 4450); assert.equal(s.form, 1); assert.equal(s.hp, hp); assert.equal(s.elapsed, elapsed);
  run(s, 50); assert.equal(s.form, 2); assert.equal(s.bossHp, 1200); assert.equal(s.bossMaxHp, 1200); assert.equal(s.mode, 'jump');
  assert.equal(s.hp, 94); assert.equal(s.held.size, 0);
  s.damageLeft = 1200; hitCrazyBoss(s, 1200);
  assert.equal(s.bossHp, 0); assert.equal(s.over, true); assert.equal(s.won, true); assert.equal(s.cutscene.kind, 'victory');
  const score = s.score; hitCrazyBoss(s, 30); healCrazy(s, 20); run(s, 6500);
  assert.equal(s.score, score); assert.equal(s.hp, 100); assert.equal(s.cutscene, null);
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
  tap(s, 'alt'); assert.equal(s.mini.pending, 0); assert.equal(s.bossHp, 850); assert.equal(s.hp, 84);
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

test('Earned pusher rewards preserve encounter cadence, prevent damage and bank actual dropped coins', () => {
  const s = createCrazy(); s.form = 2; advanceCrazy(s, 'coins'); s.damageLeft = 100;
  hitCrazyBoss(s, 40); assert.equal(s.pusherDue, true); const encounter = s.encounter;
  advanceCrazy(s); assert.equal(s.mode, 'pusher'); assert.equal(s.encounter, encounter); assert.equal(s.duration, 12000);
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
