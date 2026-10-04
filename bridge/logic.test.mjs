import assert from "node:assert/strict";
import test from "node:test";
import {
  COLS,
  GARBAGE_CHANCE,
  applyGarbageCurse,
  penaltyCells,
  hitBrick,
  CURSE_CHANCE,
  FEVER_CHANCE,
  FEVER_DROPS,
  activateFever,
  feverActive,
  NO_HOLD_CHANCE,
  NO_HOLD_DROPS,
  applyNoHoldCurse,
  dangerLevel,
  tryMove,
  REWARD_CHANCE,
  SAND_COLORS,
  SAND_DROPS,
  SAND_MATCH,
  TSPIN_SCORE,
  beginSand,
  finishSand,
  createGame,
  gravityMs,
  paceOf,
  sandClearColors,
  sandPaint,
  SAND_MIX_CHANCE,
  SAND_REPEAT_CHANCE,
  SAND_SCALE,
  sandColorsOf,
  sandMark,
  sandAtRotation,
  SHAPES,
  paceScale,
  sandColorOf,
  sandFallStep,
  tSpinKind,
  tSpinName,
  tSpinReady,
  dropComponents,
  cellsOf,
  chainBlast,
  emptyGrid,
  emptySandGrid,
  flipGrid,
  fullRows,
  hardDrop,
  hold,
  lockActive,
  pickReward,
  pump,
  startGame,
  tryRotate,
  unsupportedComponents,
} from "./logic.mjs";

function fillRow(grid, y, type = "O", gid = 1) {
  for (let x = 0; x < COLS; x += 1) grid[y][x] = { type, g: gid + x };
}

function put(grid, cells, type, gid) {
  for (const [x, y] of cells) grid[y][x] = { type, g: gid };
}

test("a bridged piece stays while any cell still has support", () => {
  const grid = emptyGrid();
  grid[19][2] = { type: "O", g: 1 };
  grid[19][5] = { type: "O", g: 3 };
  put(grid, [[2, 18], [3, 18], [4, 18], [5, 18]], "I", 2);

  assert.equal(unsupportedComponents(grid).length, 0);
  assert.equal(fullRows(grid).length, 0);
  assert.equal(grid[18][4].type, "I");
  assert.equal(grid[19][3], null);
});

test("hanging cells fall into the hole after the support drops", () => {
  const grid = emptyGrid();
  fillRow(grid, 19, "O", 10);
  grid[18][2] = { type: "J", g: 2 };
  put(grid, [[2, 17], [3, 17], [4, 17], [5, 17]], "I", 3);
  let gid = 100;
  const events = [];
  for (let i = 0; i < 8; i += 1) {
    const rows = fullRows(grid);
    if (rows.length) {
      for (const y of rows) for (let x = 0; x < COLS; x += 1) grid[y][x] = null;
      events.push("clear");
      continue;
    }
    const comps = unsupportedComponents(grid);
    if (!comps.length) break;
    dropComponents(grid, comps, () => gid++);
    events.push("drop");
  }

  assert.deepEqual(events, ["clear", "drop", "drop"]);
  assert.equal(grid[18][2].type, "I");
  assert.equal(grid[19][3].type, "I");
  assert.equal(grid[19][4].type, "I");
  assert.equal(grid[19][5].type, "I");
  assert.equal(grid[19][2].type, "J");
  assert.equal(grid[17][3], null);
});

test("a normal line clear drops the piece that was sitting on it", () => {
  const grid = emptyGrid();
  fillRow(grid, 19, "O", 10);
  put(grid, [[0, 18], [1, 18], [2, 18], [3, 18]], "I", 4);
  let gid = 50;
  for (let i = 0; i < 4; i += 1) {
    const rows = fullRows(grid);
    if (rows.length) {
      for (const y of rows) for (let x = 0; x < COLS; x += 1) grid[y][x] = null;
      continue;
    }
    const comps = unsupportedComponents(grid);
    if (!comps.length) break;
    dropComponents(grid, comps, () => gid++);
  }
  assert.equal(grid[19][0].type, "I");
  assert.equal(grid[19][3].type, "I");
  assert.equal(grid[18][0], null);
});

test("hold stores one piece and cannot be used again until lock", () => {
  const game = createGame({ sequence: ["T", "I", "O", "L", "J", "S", "Z", "T", "I", "O", "L", "J"] });
  startGame(game);
  assert.equal(game.active.type, "T");
  assert.equal(hold(game), true);
  assert.equal(game.hold.type, "T");
  assert.equal(game.active.type, "I");
  assert.equal(hold(game), false);
  assert.equal(game.hold.type, "T");
  assert.equal(game.active.type, "I");
});

test("hold swaps the stored piece back out", () => {
  const game = createGame({ sequence: ["T", "I", "O", "L", "J", "S", "Z", "T", "I", "O", "L", "J", "S"] });
  startGame(game);
  hold(game);
  hardDrop(game);
  assert.equal(game.phase, "resolving");
  let guard = 0;
  while (game.phase === "resolving" && guard < 10) {
    pump(game);
    guard += 1;
  }
  assert.equal(game.phase, "playing");
  assert.equal(hold(game), true);
  assert.equal(game.active.type, "T");
  assert.equal(game.hold.type, "O");
});

test("a bomb is one hidden cell inside a five-cell piece and waits for a line clear", () => {
  const game = createGame({
    sequence: ["B", "I", "O", "T", "L", "J", "S", "Z", "I", "O", "T", "L"],
    random: () => 0,
  });
  startGame(game);
  assert.equal(game.active.type, "B");
  assert.equal(cellsOf("B", 0, 0, 0).length, 5);
  game.active.bombIndex = 3;
  game.active.x = 0;
  game.active.y = 18;
  for (let x = 2; x < COLS; x += 1) game.grid[19][x] = { type: "O", g: 20 + x };
  game.grid[18][3] = { type: "S", g: 7 };
  lockActive(game);
  assert.equal(game.grid[19][0].bomb, true);
  assert.equal(game.grid[18][3].type, "S");
  const step = pump(game);
  assert.equal(step.type, "clear");
  assert.equal(game.grid[19][0], null);
  assert.equal(game.grid[18][0], null);
  assert.equal(game.grid[18][3].type, "S");
});

test("the board flips once after every 10 cleared lines", () => {
  const game = createGame({ sequence: ["I", "O", "T", "L", "J", "S", "Z", "I", "O", "T", "L", "J", "S", "Z"] });
  startGame(game);
  game.active = null;
  game.phase = "resolving";
  game.lines = 9;
  game.stage = 1;
  game.stageLines = 9;
  game.stageGoal = 10;
  game.comboArmed = true;
  fillRow(game.grid, 19);
  const kinds = [];
  for (let i = 0; i < 6 && game.phase === "resolving"; i += 1) {
    kinds.push(pump(game).type);
    if (kinds.at(-1) === "flip") break;
  }
  assert.deepEqual(kinds, ["clear", "flip"]);
  assert.equal(game.lines, 10);
  assert.equal(game.stage, 2);
  assert.equal(game.stageGoal, 20);
  assert.equal(game.stageLines, 0);
  assert.equal(game.active, null);
});

test("reward modes prefer breakout, then bbtan, then pinball", () => {
  assert.equal(pickReward(["pinball", "bbtan"]), "bbtan");
  assert.equal(pickReward(["pinball", "breakout"]), "breakout");
  const grid = emptyGrid();
  grid[5][5] = { type: "B", g: 1, bomb: true };
  grid[5][6] = { type: "B", g: 2, bomb: true };
  grid[5][8] = { type: "O", g: 3, bomb: false };
  chainBlast(grid, 5, 5, () => 0);
  assert.equal(grid[5][5], null);
  assert.equal(grid[5][6], null);
  assert.equal(grid[5][8].type, "O");
});

test("mystery pieces show up five times as often", () => {
  assert.equal(REWARD_CHANCE.breakout, 0.005);
  assert.equal(REWARD_CHANCE.bbtan, 0.005);
  assert.equal(REWARD_CHANCE.pinball, 0.01);
  assert.equal(REWARD_CHANCE.sand, 0.005);
  const rolls = [0.5, 0.0049, 0.5, 0.005, 0, 0.5, 0.0199, 0.5, 0.02, 0.5, 0.025];
  let index = 0;
  const game = createGame({
    mode: "marathon",
    random: () => {
      const value = rolls[index];
      index += 1;
      return value === undefined ? 0.99 : value;
    },
  });
  assert.equal(game.pull().type, "R");
  assert.equal(game.pull().type, "X");
  assert.equal(game.pull().type, "D");
  assert.equal(game.pull().type, "A");
  assert.equal(["I", "O", "T", "S", "Z", "J", "L", "B"].includes(game.pull().type), true);
});

test("sand mode lasts twenty drops and uses four colors", () => {
  let n = 0;
  const game = createGame({ mode: "marathon", random: () => (n++ % 3) / 3 });
  game.grid[18][0] = { type: "I", g: 1, bomb: true, reward: "breakout", curse: "seal", sand: null };
  game.grid[18][1] = { type: "O", g: 1, bomb: false, reward: null, curse: null, sand: null };
  game.queue = [{ type: "T" }, { type: "L" }, { type: "J" }];
  beginSand(game);
  assert.equal(game.sandLeft, SAND_DROPS);
  assert.equal(game.grid[18][0], null);
  assert.ok(game.sandGrid[18 * SAND_SCALE][0] > 0);
  assert.ok(game.sandGrid[18 * SAND_SCALE][SAND_SCALE] > 0);
  for (const piece of game.queue) {
    if (Array.isArray(piece.sand)) assert.ok(piece.sand.every((color) => color >= 0 && color < 4));
    else assert.ok(piece.sand >= 0 && piece.sand < 4);
  }
  const pulled = game.pull();
  if (Array.isArray(pulled.sand)) assert.ok(pulled.sand.every((color) => color >= 0 && color < 4));
  else assert.ok(pulled.sand >= 0 && pulled.sand < 4);
  assert.equal(["I", "O", "T", "S", "Z", "J", "L"].includes(game.pull().type), true);
  const grain = emptySandGrid();
  const grainHeight = grain.length;
  grain[grainHeight - 3][4] = 1;
  assert.equal(sandFallStep(grain), true);
  assert.equal(grain[grainHeight - 2][4], 1);
  assert.equal(grain[grainHeight - 3][4], 0);
  const blocked = emptySandGrid();
  const blockedHeight = blocked.length;
  blocked[blockedHeight - 1][2] = 2;
  blocked[blockedHeight - 2][2] = 1;
  assert.equal(sandFallStep(blocked), true);
  assert.equal(blocked[blockedHeight - 2][2], 0);
  assert.ok(blocked[blockedHeight - 1][1] === 1 || blocked[blockedHeight - 1][3] === 1);
  const painted = sandPaint("I", [[0, 0], [1, 0], [2, 0], [3, 0]]);
  assert.equal(SAND_MIX_CHANCE, 1 / 8);
  assert.equal(SAND_REPEAT_CHANCE, 1 / 2.2);
  assert.equal(new Set(painted).size, 2);
  const solid = sandPaint("I", [[0, 0], [1, 0], [2, 0], [3, 0]], false);
  assert.deepEqual(solid, [sandColorOf("I"), sandColorOf("I"), sandColorOf("I"), sandColorOf("I")]);
  const mixed = sandMark("I", (() => {
    const rolls = [0, 0, 0];
    let cursor = 0;
    return () => rolls[cursor++];
  })(), null);
  assert.equal(mixed.hue, 0);
  assert.equal(new Set(mixed.sand).size, 2);
  const repeated = sandMark("T", (() => {
    const rolls = [0, 0.5];
    let cursor = 0;
    return () => rolls[cursor++];
  })(), 2);
  assert.equal(repeated.hue, 2);
  assert.equal(repeated.sand, 2);
  assert.equal(painted[0], sandColorsOf("I")[0]);
  assert.equal(painted[3], sandColorsOf("I")[1]);
  const span = Array.from({ length: 3 }, () => Array(6).fill(0));
  span[2].fill(1);
  span[0][0] = 1;
  span[0][5] = 2;
  span[1][1] = 2;
  const cleared = sandClearColors(span);
  assert.deepEqual(cleared.colors, [0]);
  assert.equal(span[2].every((cell) => cell === 0), true);
  assert.equal(span[0][0], 1);
  assert.equal(cleared.count, 6);
  assert.equal(span[1][1], 2);
  assert.equal(span[0][5], 2);
  const linked = [
    [1, 1, 0, 2],
    [0, 1, 1, 2],
    [0, 0, 1, 1],
  ];
  const linkedClear = sandClearColors(linked);
  assert.deepEqual(linkedClear.colors, [0]);
  assert.equal(linked.flat().includes(1), false);
  assert.equal(linked[0][3], 2);
  const broken = [[1, 1, 0, 1, 1]];
  assert.deepEqual(sandClearColors(broken).colors, []);
  assert.equal(broken[0][0], 1);
  game.sandLeft = 1;
  game.sandExit = false;
  game.phase = "playing";
  game.active = { type: "O", rot: 0, x: 3, y: 18, bombIndex: null, curse: null, sand: 0 };
  lockActive(game);
  assert.equal(game.sandLeft, 0);
  assert.equal(game.sandExit, true);
  let guard = 0;
  while (game.sanding && game.phase === "resolving" && guard < 400) {
    pump(game);
    guard += 1;
  }
  assert.equal(game.sanding, false);
  for (const row of game.grid) for (const cell of row) if (cell) assert.equal(cell.sand, null);
});

function tSpinCavity(game, base, column) {
  game.grid = emptyGrid();
  for (let x = 0; x < COLS; x += 1) {
    if (x !== column) game.grid[base][x] = { type: "O", g: 1 };
    if (x < column - 1 || x > column + 1) game.grid[base + 1][x] = { type: "O", g: 1 };
    if (x !== column) game.grid[base + 2][x] = { type: "O", g: 1 };
  }
}

test("a two-color sand piece keeps its colors when it rotates", () => {
  for (const type of ["I", "T", "S", "Z", "J", "L"]) {
    const count = SHAPES[type][0].length;
    const colors = Array.from({ length: count }, (_, index) => index);
    for (let rot = 0; rot < SHAPES[type].length; rot += 1) {
      const painted = sandAtRotation(type, colors, rot);
      assert.deepEqual([...painted].sort((a, b) => a - b), colors);
    }
  }
  assert.deepEqual(sandAtRotation("I", [0, 1, 0, 1], 0), [0, 1, 0, 1]);
  assert.deepEqual(sandAtRotation("I", [0, 1, 0, 1], 1), [0, 1, 0, 1]);
  assert.deepEqual(sandAtRotation("I", [0, 0, 1, 1], 1), [0, 0, 1, 1]);
});

test("a rotated T that clears one line is a T-spin single", () => {
  const game = createGame({ mode: "marathon", sequence: ["T", "T", "T", "T"] });
  game.phase = "playing";
  game.stage = 1;
  game.pace = 1;
  tSpinCavity(game, 16, 4);
  game.active = { type: "T", rot: 1, x: 2, y: 17, bombIndex: null, curse: null, sand: null };
  assert.equal(tryRotate(game, -1), true);
  assert.equal(tSpinKind(game), "tspin");
  lockActive(game);
  const step = pump(game);
  assert.equal(step.spinName, "single");
  assert.equal(step.rows.length, 1);
  assert.equal(game.score, 800);
});

test("a rotated T that clears two lines is a T-spin double", () => {
  const game = createGame({ mode: "marathon", sequence: ["T", "T", "T", "T"] });
  game.phase = "playing";
  game.stage = 1;
  game.pace = 1;
  tSpinCavity(game, 16, 4);
  game.active = { type: "T", rot: 0, x: 3, y: 16, bombIndex: null, curse: null, sand: null };
  assert.equal(tryRotate(game, 1), true);
  assert.equal(tSpinKind(game), "tspin");
  lockActive(game);
  const step = pump(game);
  assert.equal(step.spinName, "double");
  assert.equal(step.rows.length, 2);
  assert.equal(game.score, 1200);
  assert.equal(tSpinName("tspin", 2), "double");
});

test("a t-spin scores more than a plain single", () => {
  const game = createGame({ mode: "marathon", sequence: ["I", "I", "I", "I", "I", "I"] });
  game.stage = 1;
  game.pace = 1;
  game.phase = "playing";
  game.grid = emptyGrid();
  game.active = { type: "T", rot: 0, x: 3, y: 16, bombIndex: null, curse: null, sand: null };
  game.grid[16][3] = { type: "I", g: 1 };
  game.grid[16][5] = { type: "I", g: 2 };
  game.grid[18][5] = { type: "I", g: 3 };
  game.spinEligible = true;
  assert.equal(tSpinReady(game), true);
  game.spinEligible = false;
  assert.equal(tSpinReady(game), false);
  game.spinEligible = true;
  const before = game.score;
  lockActive(game);
  const step = pump(game);
  assert.equal(step.type, "spin");
  assert.equal(step.kind, "tspin");
  assert.equal(game.score - before, TSPIN_SCORE[0]);
});

test("back to back clears raise the combo bonus", () => {
  const game = createGame({ mode: "marathon", sequence: ["I", "I", "I", "I", "I", "I", "I", "I"] });
  startGame(game);
  game.grid = emptyGrid();
  game.phase = "resolving";
  game.combo = 0;
  game.comboArmed = true;
  game.spin = null;
  game.sanding = false;
  for (let x = 0; x < COLS; x += 1) game.grid[19][x] = { type: "O", g: 1, bomb: false, reward: null, curse: null, sand: null };
  const first = pump(game);
  assert.equal(first.combo, 1);
  assert.equal(first.bonus, 0);
  game.phase = "resolving";
  game.comboArmed = true;
  for (let x = 0; x < COLS; x += 1) game.grid[19][x] = { type: "O", g: 2, bomb: false, reward: null, curse: null, sand: null };
  const second = pump(game);
  assert.equal(second.combo, 2);
  assert.equal(second.bonus, 50);
});

test("hard starts twice as fast and weights the score", () => {
  const normal = createGame({ mode: "marathon" });
  normal.pace = paceOf({ pace: 1 });
  normal.stage = 1;
  const hard = createGame({ mode: "marathon" });
  hard.pace = 2;
  hard.stage = 1;
  assert.equal(gravityMs(hard), Math.round(gravityMs(normal) / 2));
  hard.paceName = "hard";
  normal.stage = 2;
  hard.stage = 2;
  assert.equal(paceScale(hard), 3);
  assert.equal(gravityMs(hard), Math.round(gravityMs(normal) / 3));
  normal.stage = 3;
  hard.stage = 3;
  const custom = createGame({ mode: "marathon" });
  custom.pace = 4;
  custom.stage = 3;
  assert.equal(paceScale(hard), 4);
  assert.equal(paceScale(custom), 8);
  assert.equal(gravityMs(hard), Math.round(gravityMs(normal) / 4));
  assert.equal(gravityMs(custom), Math.round(gravityMs(normal) / 8));
  const mild = createGame({ mode: "marathon" });
  mild.pace = 1.5;
  mild.paceName = "custom";
  mild.stage = 3;
  assert.equal(paceScale(mild), 1.5);
  assert.equal(gravityMs(mild), Math.round(gravityMs(normal) / 1.5));
  normal.stage = 1;
  const fast = createGame({ mode: "marathon" });
  fast.pace = 10;
  assert.equal(gravityMs(fast), Math.max(40, Math.round(gravityMs(normal) / 10)));
  assert.equal(paceOf({ pace: 0.2 }), 0.5);
  assert.equal(paceOf({ pace: 12 }), 10);
  hard.stage = 1;
  hard.phase = "resolving";
  hard.comboArmed = true;
  hard.sanding = false;
  hard.spin = null;
  for (let x = 0; x < COLS; x += 1) hard.grid[19][x] = { type: "O", g: 4, bomb: false, reward: null, curse: null, sand: null };
  const scored = hard.score;
  pump(hard);
  assert.equal(hard.score - scored, 100 * 2);
});

test("existing penalties retain their one-in-thirty probability interval", () => {
  const rolls = [NO_HOLD_CHANCE, 0];
  const game = createGame({ mode: "marathon", random: () => rolls.shift() ?? 0.5 });
  const piece = game.pull();
  assert.equal(piece.type, "C");
  assert.equal(piece.curse, "seal");
  const sprint = createGame({ mode: "sprint", random: () => 0.5 });
  assert.notEqual(sprint.pull().type, "C");
});

test("a sealed row stays until a bomb is cleared with it", () => {
  const game = createGame({ mode: "marathon", random: () => 0.9 });
  startGame(game);
  game.active = null;
  game.phase = "resolving";
  for (let y = 0; y < 19; y += 1) game.grid[y].fill(null);
  for (let x = 0; x < COLS; x += 1) {
    game.grid[19][x] = { type: "O", g: 80 + x, bomb: false, reward: null, curse: x === 3 ? "seal" : null };
  }
  assert.notEqual(pump(game)?.type, "clear");
  assert.equal(game.grid[19][3].curse, "seal");
  game.active = null;
  game.phase = "resolving";
  game.grid[19][4].bomb = true;
  game.grid[19][4].type = "B";
  assert.equal(pump(game).type, "clear");
  assert.equal(game.grid[19][3], null);
});

test("plain tetris is a bag of seven pieces and a full row drops without filling holes", () => {
  const game = createGame({ mode: "tetris", random: () => 0 });
  const seen = new Set();
  for (let i = 0; i < 21; i += 1) seen.add(game.pull().type);
  assert.deepEqual([...seen].sort(), ["I", "J", "L", "O", "S", "T", "Z"]);
  const sprint = createGame({ mode: "sprint" });
  sprint.lines = 0;
  const classic = createGame({ mode: "tetris" });
  classic.lines = 0;
  assert.equal(gravityMs(classic), gravityMs(sprint));
  startGame(game, "tetris");
  game.active = null;
  game.phase = "resolving";
  game.grid[17][0] = { type: "O", g: 1, bomb: false, reward: null, curse: null, sand: null };
  for (let x = 1; x < COLS; x += 1) {
    game.grid[18][x] = { type: "I", g: 2, bomb: false, reward: null, curse: null, sand: null };
  }
  for (let x = 0; x < COLS; x += 1) {
    game.grid[19][x] = { type: "O", g: 3, bomb: false, reward: null, curse: null, sand: null };
  }
  assert.equal(pump(game).type, "clear");
  assert.equal(game.grid[18][0].type, "O");
  assert.equal(game.grid[19][0], null);
  assert.equal(game.grid[19][1].type, "I");
  assert.equal(pump(game).type, "spawn");
  assert.equal(game.grid[18][0].type, "O");
  assert.equal(game.grid[19][0], null);
});

test("flipping the board turns it upside down", () => {
  const game = createGame();
  game.grid[19][0] = { type: "I", g: 4 };
  flipGrid(game);
  assert.equal(game.grid[0][9].type, "I");
  assert.equal(game.grid[19][0], null);
  const falling = unsupportedComponents(game.grid);
  assert.equal(falling.length, 1);
});


test("sand clears a turning connected span and its branches, preserving separate same-color sand", () => {
  const grid = [
    [1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 0, 1, 0, 0],
  ];
  assert.deepEqual(sandClearColors(grid), { colors: [0], count: 8 });
  assert.deepEqual(grid, [[0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0]]);
});

test("sand requires an orthogonally connected path to both edges", () => {
  const grid = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  assert.deepEqual(sandClearColors(grid), { colors: [], count: 0 });
});

test("all four sand colors convert to valid Bridge pieces", () => {
  for (let color = 1; color <= SAND_COLORS; color += 1) {
    const game = createGame();
    beginSand(game);
    for (let y = 19 * SAND_SCALE; y < 20 * SAND_SCALE; y += 1) {
      for (let x = 0; x < SAND_SCALE; x += 1) game.sandGrid[y][x] = color;
    }
    finishSand(game);
    assert.equal(game.grid[19][0].type, ["I", "O", "T", "S"][color - 1]);
  }
});

test("sand returns as an area-preserving supported pile with an interior gap", () => {
  const game = createGame();
  startGame(game);
  beginSand(game);
  for (let y = 15 * SAND_SCALE; y < 20 * SAND_SCALE; y += 1) game.sandGrid[y].fill(y % SAND_COLORS + 1);
  finishSand(game);
  assert.equal(game.grid.flat().filter(Boolean).length, 50);
  assert.equal(fullRows(game.grid).length, 0);
  assert.equal(unsupportedComponents(game.grid).length, 0);
  assert.ok([3, 4, 5, 6].some((x) => game.grid.every((row) => !row[x])));
  game.phase = "resolving";
  assert.notEqual(pump(game)?.type, "clear");
  assert.equal(game.score, 0);
});


test("sand resolution preserves a settled disconnected island of the cleared color", () => {
  for (const mode of ["sand", "marathon"]) {
    const game = createGame({ mode });
    beginSand(game);
    game.phase = "resolving";
    const bottom = game.sandGrid.length - 1;
    game.sandGrid[bottom].fill(2);
    game.sandGrid[bottom - 1].fill(1);
    // A different-color shelf keeps this same-color island separate from the span.
    for (let x = 9; x <= 13; x += 1) game.sandGrid[bottom - 2][x] = 2;
    game.sandGrid[bottom - 3][11] = 1;
    const step = pump(game);
    assert.equal(step.type, "clear");
    assert.ok(step.colors.includes(0));
    assert.equal(game.sandGrid[bottom - 3][11], 1);
    assert.ok(game.sandGrid[bottom - 1].every((value) => value === 0));
  }
});


test("sparse sand conversion counts total area rather than discarding partially filled cells", () => {
  const game = createGame();
  beginSand(game);
  // Every coarse cell is below the previous 50% threshold: total area is 15 minos.
  for (let y = 15 * SAND_SCALE; y < 20 * SAND_SCALE; y += 1) {
    for (let x = 0; x < game.sandGrid[y].length; x += 1) if (x % 10 < 3) game.sandGrid[y][x] = 4;
  }
  finishSand(game);
  assert.equal(game.grid.flat().filter(Boolean).length, 15);
  assert.equal(fullRows(game.grid).length, 0);
  assert.ok(game.grid.flat().filter(Boolean).every((cell) => cell.type === "S"));
});


test("both rotation directions can enter a T-spin single cavity", () => {
  for (const [rot, x, dir] of [[1, 2, -1], [3, 4, 1]]) {
    const game = createGame();
    startGame(game);
    tSpinCavity(game, 16, 4);
    game.active = { type: "T", rot, x, y: 17 };
    assert.equal(tryRotate(game, dir), true);
    assert.equal(tSpinKind(game), "tspin");
    assert.equal(hardDrop(game), 0);
    assert.equal(pump(game).spinName, "single");
  }
});

test("rotating above a cavity then dropping into it is not a T-spin", () => {
  const game = createGame();
  startGame(game);
  tSpinCavity(game, 16, 4);
  game.active = { type: "T", rot: 0, x: 3, y: 2 };
  assert.equal(tryRotate(game, 1), true);
  assert.ok(hardDrop(game) > 0);
  assert.equal(game.spin, null);
  assert.equal(pump(game).spinName, null);
});

test("successful translation clears rotation eligibility but blocked input does not", () => {
  const game = createGame();
  startGame(game);
  game.active = { type: "T", rot: 0, x: 3, y: 2 };
  tryRotate(game, 1);
  assert.equal(tryMove(game, 0, 1), true);
  assert.equal(game.spinEligible, false);
  tSpinCavity(game, 16, 4);
  game.active = { type: "T", rot: 1, x: 2, y: 17 };
  assert.equal(tryRotate(game, -1), true);
  assert.equal(tryMove(game, 0, 1), false);
  assert.equal(tSpinKind(game), "tspin");
});

test("danger increases as settled blocks reach the top and clears when the pile falls", () => {
  for (const mode of ["marathon", "tetris"]) {
    const game = createGame({ mode });
    startGame(game);
    assert.equal(dangerLevel(game), 0);
    game.grid[5][4] = { type: "O" };
    const low = dangerLevel(game);
    assert.ok(low > 0);
    game.grid[1][4] = { type: "O" };
    assert.ok(dangerLevel(game) > low);
    game.grid = emptyGrid();
    game.grid[6][4] = { type: "O" };
    assert.equal(dangerLevel(game), 0);
    game.sanding = true;
    game.grid[0][4] = { type: "O" };
    assert.equal(dangerLevel(game), 0);
  }
});


test("danger has two stages with exact row boundaries and recovers as the pile drops", () => {
  const game = createGame();
  startGame(game);
  for (const [row, expected] of [[6, 0], [5, 1], [3, 1], [2, 2], [0, 2], [3, 1], [6, 0]]) {
    game.grid = emptyGrid();
    game.grid[row][4] = { type: "O" };
    assert.equal(dangerLevel(game), expected);
  }
});


test("no-hold has its own exact one-in-sixty interval in Bridge only", () => {
  assert.equal(NO_HOLD_CHANCE, 1 / 60);
  for (const roll of [0, NO_HOLD_CHANCE - 1e-8]) {
    const game = createGame({ random: () => roll });
    assert.equal(game.pull().curse, "nohold");
  }
  const edge = createGame({ random: () => NO_HOLD_CHANCE });
  assert.notEqual(edge.pull().curse, "nohold");
  for (const mode of ["tetris", "sand", "sprint"]) {
    assert.notEqual(createGame({ mode, random: () => 0 }).pull().curse, "nohold");
  }
});

test("no-hold blocks swapping for fifteen locked pieces and then restores hold", () => {
  const game = createGame({ random: () => 0.9 });
  startGame(game);
  applyNoHoldCurse(game, [{ curse: "nohold" }]);
  assert.equal(game.noHoldLeft, NO_HOLD_DROPS);
  for (let i = 0; i < NO_HOLD_DROPS; i += 1) {
    game.phase = "playing";
    game.grid = emptyGrid();
    game.active = { type: "O", rot: 0, x: 3, y: 18 };
    const saved = game.active;
    assert.equal(hold(game), false);
    assert.equal(game.active, saved);
    lockActive(game);
    assert.equal(game.noHoldLeft, NO_HOLD_DROPS - i - 1);
  }
  game.phase = "playing";
  game.active = { type: "T", rot: 0, x: 3, y: 0 };
  assert.equal(hold(game), true);
  applyNoHoldCurse(game, [{ curse: "nohold" }]);
  startGame(game);
  assert.equal(game.noHoldLeft, 0);
});

test("clearing a no-hold cell starts fifteen pieces without consuming one on the trigger clear", () => {
  const game = createGame({ random: () => 0.9 });
  startGame(game);
  fillRow(game.grid, 19);
  game.grid[19][4] = { type: "C", curse: "nohold", g: 99 };
  game.active = null;
  game.phase = "resolving";
  assert.equal(pump(game).type, "clear");
  assert.equal(game.noHoldLeft, 15);
  lockActive(game);
  assert.equal(game.noHoldLeft, 15);
});


test("Fever is a three-by-three piece in its own exact one-in-four-hundred interval", () => {
  assert.equal(FEVER_CHANCE, 1 / 400);
  const start = NO_HOLD_CHANCE + CURSE_CHANCE;
  for (const roll of [start, start + FEVER_CHANCE - 1e-8]) {
    const game = createGame({ random: () => roll });
    assert.equal(game.pull().type, "F");
  }
  const after = createGame({ random: () => start + FEVER_CHANCE });
  assert.notEqual(after.pull().type, "F");
  const cells = cellsOf("F", 0, 0, 0);
  assert.equal(cells.length, 9);
  assert.deepEqual([...new Set(cells.map(([x]) => x))], [0, 1, 2]);
  assert.deepEqual([...new Set(cells.map(([, y]) => y))], [0, 1, 2]);
  assert.notEqual(createGame({ mode: "tetris", random: () => start }).pull().type, "F");
});

test("clearing a Fever piece activates once per piece even after its remaining cells fall", () => {
  const game = createGame({ random: () => 0.9 });
  startGame(game);
  game.noHoldLeft = 10;
  fillRow(game.grid, 19);
  game.grid[19][4] = { type: "F", g: 10, feverId: 10 };
  game.grid[17][4] = { type: "F", g: 10, feverId: 10 };
  game.active = null;
  game.phase = "resolving";
  const first = pump(game);
  assert.equal(first.feverStarted, true);
  assert.equal(game.feverLeft, FEVER_DROPS);
  assert.equal(game.noHoldLeft, 0);
  assert.equal(game.score, 300);
  game.feverLeft = 9;
  const drop = pump(game);
  assert.equal(drop.type, "drop");
  assert.equal(game.grid[19][4].feverId, 10);
  fillRow(game.grid, 19);
  game.grid[19][4] = { type: "F", g: 77, feverId: 10 };
  const second = pump(game);
  assert.equal(second.feverStarted, false);
  assert.equal(game.feverLeft, 9);
});

test("Fever preserves combos across a non-clearing piece and blasts only a local three-by-three area", () => {
  const game = createGame({ random: () => 0.9 });
  startGame(game);
  activateFever(game, [{ type: "F", feverId: 1 }]);
  game.combo = 2;
  game.active = { type: "O", rot: 0, x: 0, y: 18 };
  lockActive(game);
  assert.equal(pump(game).type, "spawn");
  assert.equal(game.combo, 2);
  game.grid = emptyGrid();
  fillRow(game.grid, 19);
  for (const [x, y] of [[3, 18], [4, 18], [5, 18], [2, 18], [4, 17]]) game.grid[y][x] = { type: "O", g: 5 };
  game.feverBlastX = 4;
  game.phase = "resolving";
  game.active = null;
  const step = pump(game);
  assert.equal(step.combo, 3);
  assert.equal(step.blasts.length, 3);
  assert.ok(game.grid[18][2]);
  assert.ok(game.grid[17][4]);
  assert.equal(game.score, 300 + 300 + 3 * 45);
});

test("Fever lasts fifteen full pieces including the last piece's clear", () => {
  const game = createGame({ random: () => 0.9 });
  startGame(game);
  activateFever(game, [{ type: "F", feverId: 1 }]);
  for (let i = 0; i < FEVER_DROPS; i += 1) {
    game.grid = emptyGrid();
    game.phase = "playing";
    game.active = { type: "O", rot: 0, x: 3, y: 18 };
    lockActive(game);
    assert.equal(game.feverLeft, FEVER_DROPS - i - 1);
    assert.equal(feverActive(game), true);
    if (i === FEVER_DROPS - 1) {
      fillRow(game.grid, 19);
      assert.equal(pump(game).fever, true);
      assert.equal(game.score, 390);
    }
    while (game.phase === "resolving") pump(game);
  }
  assert.equal(feverActive(game), false);
  game.grid = emptyGrid();
  fillRow(game.grid, 19);
  game.combo = 0;
  game.phase = "resolving";
  const before = game.score;
  assert.equal(pump(game).fever, false);
  assert.equal(game.score - before, 100);
});

test("Fever ignores no-hold and sealed-row penalties and resets on a new game", () => {
  const game = createGame({ random: () => 0.9 });
  startGame(game);
  activateFever(game, [{ type: "F", feverId: 1 }]);
  applyNoHoldCurse(game, [{ curse: "nohold" }]);
  assert.equal(game.noHoldLeft, 0);
  fillRow(game.grid, 19);
  game.grid[19][4] = { type: "C", curse: "seal", g: 5 };
  game.phase = "resolving";
  assert.equal(pump(game).type, "clear");
  startGame(game);
  assert.equal(feverActive(game), false);
  assert.equal(game.feverGroups.size, 0);
});


test("garbage bags occupy an exact one-in-fifty interval and contain one marked cell", () => {
  assert.equal(GARBAGE_CHANCE, 1 / 50);
  const start = NO_HOLD_CHANCE + CURSE_CHANCE + FEVER_CHANCE;
  for (const roll of [start, start + GARBAGE_CHANCE - 1e-8]) {
    const game = createGame({ random: () => roll });
    const piece = game.pull();
    assert.equal(piece.type, "G");
    assert.equal(piece.curse, "garbage");
    assert.ok(piece.curseIndex >= 0 && piece.curseIndex < 7);
  }
  assert.notEqual(createGame({ random: () => start + GARBAGE_CHANCE }).pull().type, "G");
  const game = createGame({ sequence: ["G", "I", "O", "T", "L", "J"], random: () => 0.5 });
  startGame(game);
  const marker = game.active.curseIndex;
  hold(game);
  game.holdLocked = false;
  hold(game);
  assert.equal(game.active.curseIndex, marker);
  tryRotate(game, 1);
  hardDrop(game);
  const bag = game.grid.flat().filter((cell) => cell?.type === "G");
  assert.equal(bag.length, 7);
  assert.equal(bag.filter((cell) => cell.curse === "garbage").length, 1);
});

test("garbage penalties add one to three rows with a hole and shift existing blocks upward", () => {
  for (const [roll, count] of [[0, 1], [0.5, 2], [0.99, 3]]) {
    const game = createGame({ random: () => roll });
    game.phase = "resolving";
    game.grid[10][2] = { type: "O", g: 2 };
    assert.equal(applyGarbageCurse(game, [{ curse: "garbage" }]), count);
    const step = pump(game);
    assert.equal(step.type, "garbage");
    assert.equal(step.rows, count);
    assert.ok(game.grid[10 - count][2]);
    assert.equal(game.pendingGarbage, 0);
    for (const row of game.grid.slice(-count)) {
      assert.equal(row.filter(Boolean).length, COLS - 1);
      assert.equal(row[step.hole], null);
      assert.ok(row.filter(Boolean).every((cell) => cell.type === "N" && !cell.curse));
    }
  }
});

test("garbage pushing occupied cells beyond the top ends the game", () => {
  const game = createGame({ random: () => 0 });
  game.grid[0][4] = { type: "O", g: 2 };
  game.phase = "resolving";
  applyGarbageCurse(game, [{ curse: "garbage" }]);
  assert.equal(pump(game).type, "over");
  assert.equal(game.phase, "over");
});

test("normal line clearing triggers garbage once, while unmarked bag cells do not", () => {
  const game = createGame({ random: () => 0.5 });
  startGame(game);
  fillRow(game.grid, 19);
  game.grid[19][4] = { type: "G", g: 20, curse: "garbage" };
  game.phase = "resolving";
  game.active = null;
  assert.equal(pump(game).garbageQueued, 2);
  assert.equal(pump(game).rows, 2);
  game.pendingGarbage = 0;
  applyGarbageCurse(game, [{ type: "G", curse: null }]);
  assert.equal(game.pendingGarbage, 0);
});

test("bomb blasts suppress every penalty, including same-row penalties and chain explosions", () => {
  for (const curse of ["seal", "reverse", "blind", "rush", "norotate", "nohold", "garbage"]) {
    const game = createGame({ random: () => 0 });
    game.phase = "resolving";
    fillRow(game.grid, 19);
    game.grid[19][4] = { type: "B", g: 3, bomb: true };
    game.grid[19][5] = { type: "C", g: 4, curse };
    game.grid[18][4] = { type: "C", g: 5, curse };
    const step = pump(game);
    assert.equal(step.type, "clear");
    assert.equal(penaltyCells([...step.cells, ...step.blasts]).length, 0);
    assert.equal(game.noHoldLeft, 0);
    assert.equal(game.pendingGarbage, 0);
    const grid = emptyGrid();
    grid[10][4] = { type: "B", g: 3, bomb: true };
    grid[10][5] = { type: "B", g: 4, bomb: true };
    grid[10][6] = { type: "C", g: 5, curse };
    const removed = hitBrick(grid, 4, 10, () => 0);
    assert.ok(removed.some((cell) => cell.curse === curse));
    assert.equal(penaltyCells(removed).length, 0);
    applyNoHoldCurse(game, removed);
    applyGarbageCurse(game, removed);
    assert.equal(game.noHoldLeft, 0);
    assert.equal(game.pendingGarbage, 0);
  }
});

test("a penalty outside the bomb footprint still triggers when normally cleared", () => {
  const game = createGame({ random: () => 0 });
  game.phase = "resolving";
  fillRow(game.grid, 19);
  game.grid[19][1] = { type: "B", g: 3, bomb: true };
  game.grid[19][8] = { type: "C", g: 4, curse: "nohold" };
  const step = pump(game);
  assert.equal(penaltyCells(step.cells).length, 1);
  assert.equal(game.noHoldLeft, 15);
});

test("Fever immunity also prevents garbage penalties", () => {
  const game = createGame();
  activateFever(game, [{ type: "F", feverId: 1 }]);
  assert.equal(applyGarbageCurse(game, [{ curse: "garbage" }]), 0);
  assert.equal(game.pendingGarbage, 0);
});
