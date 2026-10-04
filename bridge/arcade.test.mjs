import assert from "node:assert/strict";
import test from "node:test";
import { H, W, BREAKOUT_EFFECTS, BREAKOUT_DURATION, activateBreakoutEffect, breakoutEffectStatus, brickWall, createSession, flipper, updateSession } from "./arcade.mjs";
import { COLS, ROWS, createGame, startGame, pump, flipGrid, garbageGraceActive } from "./logic.mjs";

test("a standalone brick wall leaves room for the paddle", () => {
  const grid = brickWall(() => 0.5);
  let bricks = 0;
  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < COLS; x += 1) if (grid[y][x]) bricks += 1;
    if (y > 8) assert.equal(grid[y].every((cell) => !cell), true);
  }
  assert.ok(bricks >= 20);
});

test("pinball launches automatically after the countdown without waiting on a flipper", () => {
  const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  grid[2][4] = { type: "O", g: 1 };
  const session = createSession("pinball", grid, 1, () => 0.5);
  session.prep = 0;
  updateSession(session, 16);
  assert.equal(session.launched, true);
  assert.ok(session.balls[0].vy < 0);
  assert.ok(session.balls[0].x > W / 2);
});

test("pinball flippers rest on a shallow slope and the side rails stay sealed", () => {
  for (const side of ["left", "right"]) {
    const rest = flipper(side, false);
    const raised = flipper(side, true);
    const slope = (rest.y2 - rest.y1) / Math.abs(rest.x2 - rest.x1);
    assert.ok(slope > 0.2 && slope < 0.5);
    assert.ok(raised.y2 < rest.y1);
    assert.ok(Math.min(rest.x1, rest.x2) < 40 || Math.max(rest.x1, rest.x2) > W - 40);
  }
  const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  grid[2][4] = { type: "O", g: 1 };
  const session = createSession("pinball", grid, 1, () => 0.5);
  session.prep = 0;
  session.launched = true;
  session.balls = [{ x: 12, y: H - 24, vx: -400, vy: 480, r: 7, gravity: true }];
  let minX = W;
  for (let i = 0; i < 150; i += 1) {
    updateSession(session, 16);
    if (session.balls[0]) minX = Math.min(minX, session.balls[0].x);
  }
  assert.ok(minX >= 14);
  assert.ok(session.balls.length === 0 || session.balls[0].y < H);
  const right = createSession("pinball", grid, 1, () => 0.5);
  right.prep = 0;
  right.launched = true;
  right.balls = [{ x: W - 12, y: H - 24, vx: 400, vy: 480, r: 7, gravity: true }];
  let maxX = 0;
  for (let i = 0; i < 150; i += 1) {
    updateSession(right, 16);
    if (right.balls[0]) maxX = Math.max(maxX, right.balls[0].x);
  }
  assert.ok(maxX <= W - 14);
  const onFlipper = createSession("pinball", grid, 1, () => 0.5);
  onFlipper.prep = 0;
  onFlipper.launched = true;
  const left = flipper("left", false);
  onFlipper.balls = [{ x: (left.x1 + left.x2) / 2, y: left.y1 - 30, vx: 0, vy: 360, r: 7, gravity: true }];
  let bounced = false;
  for (let i = 0; i < 12; i += 1) {
    updateSession(onFlipper, 16);
    const ball = onFlipper.balls[0];
    assert.ok(ball);
    assert.ok(ball.x > 12 && ball.x < W - 12);
    if (ball.vy < 0) bounced = true;
  }
  assert.equal(bounced, true);
  assert.equal(onFlipper.over, false);
  onFlipper.wasLeft = false;
  onFlipper.left = true;
  onFlipper.balls[0].x = (left.x1 + left.x2) / 2;
  onFlipper.balls[0].y = (left.y1 + left.y2) / 2 - 14;
  onFlipper.balls[0].vy = 200;
  updateSession(onFlipper, 16);
  assert.ok(onFlipper.balls[0].vy < -400);
  const mouth = createSession("pinball", grid, 1, () => 0.5);
  mouth.prep = 0;
  mouth.launched = true;
  const gap = (flipper("left", false).x2 + flipper("right", false).x2) / 2;
  mouth.balls = [{ x: gap, y: H - 16, vx: 0, vy: 500, r: 7, gravity: true }];
  for (let i = 0; i < 40; i += 1) updateSession(mouth, 16);
  assert.equal(mouth.balls.length, 0);
});

test("a hidden mode waits four seconds before the ball starts", () => {
  for (const kind of ["breakout", "bbtan", "pinball"]) {
    const session = createSession(kind, [], 1, () => 0.4);
    assert.equal(session.prep, 4000);
    assert.equal(session.launched, false);
  }
});


test("a pinball below a flipper drains instead of being pulled back onto it", () => {
  for (const pressed of [false, true]) {
    const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    grid[2][4] = { type: "O", g: 1 };
    const session = createSession("pinball", grid, 1, () => 0.5);
    session.prep = 0;
    session.launched = true;
    session.left = pressed;
    session.balls = [{ x: 65, y: H - 8, vx: 0, vy: 100, r: 7, gravity: true }];
    for (let i = 0; i < 60; i += 1) updateSession(session, 16);
    assert.equal(session.balls.length, 0);
    assert.equal(session.over, true);
  }
});

test("an idle pinball on a passive flipper moves and eventually drains", () => {
  const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  grid[2][4] = { type: "O", g: 1 };
  const session = createSession("pinball", grid, 1, () => 0.5);
  session.prep = 0;
  session.launched = true;
  const left = flipper("left", false);
  session.balls = [{ x: 65, y: left.y1 + (left.y2 - left.y1) * (65 - left.x1) / (left.x2 - left.x1) - 14, vx: 0, vy: 0, r: 7, gravity: true }];
  for (let i = 0; i < 600 && !session.over; i += 1) updateSession(session, 16);
  assert.equal(session.balls.length, 0);
});


test("pinball gravity accelerates a free falling ball toward the drain", () => {
  const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  grid[2][1] = { type: "O", g: 1 };
  const session = createSession("pinball", grid, 1, () => 0.5);
  session.prep = 0;
  session.launched = true;
  session.balls = [{ x: W / 2, y: 240, vx: 0, vy: 0, r: 7, gravity: true }];
  for (let i = 0; i < 10; i += 1) updateSession(session, 16);
  assert.ok(session.balls[0].vy > 140 && session.balls[0].vy < 150);
  assert.ok(session.balls[0].y > 250);
});


test("a held flipper supports the ball until released without repeated launch impulses", () => {
  const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  grid[2][1] = { type: "O", g: 1 };
  const session = createSession("pinball", grid, 1, () => 0.5);
  session.prep = 0;
  session.launched = true;
  session.left = true;
  session.wasLeft = true;
  const raised = flipper("left", true);
  const x = 40;
  const y = raised.y1 + (raised.y2 - raised.y1) * (x - raised.x1) / (raised.x2 - raised.x1) - 15;
  session.balls = [{ x, y, vx: 0, vy: 0, r: 7, gravity: true }];
  for (let i = 0; i < 180; i += 1) updateSession(session, 16);
  assert.equal(session.leftKick, 0);
  assert.equal(session.balls.length, 1);
  assert.ok(session.balls[0].y < raised.y1);
  assert.ok(Math.abs(session.balls[0].vy) < 100);
  session.left = false;
  for (let i = 0; i < 600 && !session.over; i += 1) updateSession(session, 16);
  assert.equal(session.balls.length, 0);
});


function breakoutTestSession(random = () => 0.5) {
  const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  grid[1][1] = { type: "O", g: 1 };
  const session = createSession("breakout", grid, 1, random);
  session.prep = 0;
  session.launched = true;
  session.balls = [{ x: 140, y: 400, vx: 120, vy: -230, r: 6, gravity: false }];
  return session;
}

test("directly hitting a special Breakout brick selects each of five effects, normal bricks do not", () => {
  for (let i = 0; i < BREAKOUT_EFFECTS.length; i += 1) {
    const session = breakoutTestSession(() => (i + 0.5) / BREAKOUT_EFFECTS.length);
    session.grid[5][5] = { type: "R", g: 2, reward: "breakout" };
    session.balls[0] = { x: 154, y: 167, vx: 0, vy: -session.speed, r: 6 };
    updateSession(session, 16);
    assert.equal(session.grid[5][5], null);
    assert.deepEqual(session.effectEvents, [BREAKOUT_EFFECTS[i]]);
    assert.ok(breakoutEffectStatus(session).some(({ kind }) => kind === BREAKOUT_EFFECTS[i]));
  }
  const normal = breakoutTestSession();
  normal.grid[5][5] = { type: "O", g: 2 };
  normal.balls[0] = { x: 154, y: 167, vx: 0, vy: -normal.speed, r: 6 };
  updateSession(normal, 16);
  assert.deepEqual(normal.effectEvents, []);
});

test("speed boost refreshes without stacking and expires to the current progression speed", () => {
  const session = breakoutTestSession();
  activateBreakoutEffect(session, "speed");
  activateBreakoutEffect(session, "speed");
  assert.equal(session.speed, session.baseSpeed * 2);
  session.progressSpeed = session.baseSpeed * 1.12;
  session.balls = [];
  updateSession(session, BREAKOUT_DURATION.speed);
  assert.equal(session.speed, session.progressSpeed);
});

test("paddle effects replace each other, clamp to the table, and expire", () => {
  const session = breakoutTestSession();
  session.paddleX = 44;
  activateBreakoutEffect(session, "wide");
  assert.equal(session.paddleW, 132);
  assert.ok(session.paddleX >= 66);
  activateBreakoutEffect(session, "narrow");
  assert.equal(session.paddleW, 62);
  assert.equal(session.effects.wide, 0);
  session.balls = [];
  updateSession(session, BREAKOUT_DURATION.narrow);
  assert.equal(session.paddleW, 88);
});

test("multi-ball multiplies active balls with distinct directions and has a twelve-ball limit", () => {
  for (const [kind, count] of [["double", 2], ["triple", 3]]) {
    const session = breakoutTestSession();
    activateBreakoutEffect(session, kind);
    updateSession(session, 16);
    assert.equal(session.balls.length, count);
    assert.equal(new Set(session.balls.map((b) => Math.atan2(b.vy, b.vx))).size, count);
    for (let i = 0; i < 5; i += 1) {
      activateBreakoutEffect(session, "triple");
      updateSession(session, 16);
    }
    assert.equal(session.balls.length, 12);
  }
});

test("multi-ball expiry keeps a surviving ball if the original was lost", () => {
  const session = breakoutTestSession();
  activateBreakoutEffect(session, "triple");
  updateSession(session, 16);
  session.balls = session.balls.filter((ball) => ball.effectBall);
  updateSession(session, BREAKOUT_DURATION.triple);
  assert.equal(session.balls.length, 1);
  assert.equal(session.balls[0].effectBall, false);
  assert.equal(session.over, false);
});

test("Breakout speeds up every four bricks and high-speed balls cannot skip a brick row", () => {
  const session = breakoutTestSession();
  session.cleared = 3;
  session.grid[5][5] = { type: "O", g: 2 };
  session.balls[0] = { x: 154, y: 180, vx: 0, vy: -1800, r: 6 };
  updateSession(session, 32);
  assert.equal(session.grid[5][5], null);
  assert.equal(session.progressSpeed, session.baseSpeed * 1.12);
  assert.ok(session.balls[0].vy > 0);
});


test("pinball launch and a flipper strike can reach the top of the table", () => {
  for (const launch of [true, false]) {
    const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    grid[1][0] = { type: "O", g: 1 };
    const session = createSession("pinball", grid, 1, () => 0.5);
    session.prep = 0;
    if (!launch) {
      session.launched = true;
      session.left = true;
      const left = flipper("left", false);
      session.balls = [{ x: 65, y: left.y1 + (left.y2 - left.y1) * (65 - left.x1) / (left.x2 - left.x1) - 14, vx: 0, vy: 100, r: 7, gravity: true }];
    }
    let top = H;
    for (let i = 0; i < 150 && !session.over; i += 1) {
      updateSession(session, 16);
      if (session.balls[0]) top = Math.min(top, session.balls[0].y);
    }
    assert.ok(top <= 20, `launch=${launch}, highest y=${top}`);
  }
});


test("arcade bomb hits do not forward blast-destroyed penalties, direct penalty hits do", () => {
  const session = breakoutTestSession(() => 0);
  session.grid[5][5] = { type: "B", g: 3, bomb: true };
  session.grid[5][6] = { type: "C", g: 4, curse: "garbage" };
  session.balls = [{ x: 154, y: 167, vx: 0, vy: -260, r: 6 }];
  updateSession(session, 16);
  assert.equal(session.grid[5][6], null);
  assert.equal(session.curseHits.length, 0);
  const direct = breakoutTestSession(() => 0);
  direct.grid[5][5] = { type: "C", g: 3, curse: "nohold" };
  direct.balls = [{ x: 154, y: 167, vx: 0, vy: -260, r: 6 }];
  updateSession(direct, 16);
  assert.equal(direct.curseHits.length, 1);
});

for (const kind of ["pinball", "breakout", "bbtan"]) {
  test(`garbage grace returns from ${kind} without flipping garbage into the spawn area`, () => {
    const game = createGame({ random: () => 0.5 });
    startGame(game);
    game.active = null;
    game.phase = "resolving";
    game.grid[12][4] = { type: "O", g: 99 };
    game.pendingGarbage = 2;
    assert.equal(pump(game).type, "garbage");
    game.pendingReward = kind;
    const step = pump(game);
    assert.equal(step.type, "reward");
    assert.equal(step.flip, false);
    if (step.flip) flipGrid(game);
    const session = createSession(kind, game.grid, game.stage, game.random);
    session.over = true;
    game.phase = "resolving";
    assert.equal(pump(game).type, "spawn");
    assert.equal(game.phase, "playing");
    assert.equal(game.garbageGraceLeft, 2);
    assert.equal(garbageGraceActive(game), true);
    assert.ok(game.grid[10][4]);
    assert.ok(game.grid.slice(0, 2).every(row => row.every(cell => cell === null)));
  });
}

for (const kind of ["breakout", "bbtan", "pinball"]) {
  test(`${kind} destroys garbage penalty bricks for points without forwarding garbage`, () => {
    const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    grid[2][0] = { type: "O", g: 1 };
    grid[5][5] = { type: "G", g: 2, curse: "garbage" };
    const session = createSession(kind, grid, 1, () => .5);
    session.prep = 0; session.launched = true; session.aiming = false;
    session.balls = [{ x: 154, y: 167, vx: 0, vy: -260, r: 6 }];
    updateSession(session, 16);
    assert.equal(grid[5][5], null);
    assert.equal(session.curseHits.length, 0);
    assert.ok(session.score > 0);
    assert.equal(session.cleared, 1);
  });
}

test("BBTAN playback accelerates after three real seconds and caps at 3x after six", () => {
  const session = createSession("bbtan", brickWall(() => .5), 1, () => .5);
  session.prep = 0; session.aiming = false; session.queueLeft = 0;
  session.balls = [{ x: 100, y: 400, vx: 10, vy: 0, r: 4, gravity: false }];
  session.shotElapsed = 2990;
  updateSession(session, 20);
  assert.equal(session.shotElapsed, 3010); assert.equal(session.playbackRate, 2);
  assert.ok(Math.abs(session.balls[0].x - 100.3) < 1e-8);
  session.shotElapsed = 5990;
  const x = session.balls[0].x; updateSession(session, 20);
  assert.equal(session.shotElapsed, 6010); assert.equal(session.playbackRate, 3);
  assert.ok(Math.abs(session.balls[0].x - x - .5) < 1e-8);
  assert.equal(session.balls[0].vx, 10); assert.equal(session.score, 0);
});

test("BBTAN resets fast-forward between volleys and excludes preparation and aiming", () => {
  const session = createSession("bbtan", brickWall(() => .5), 1, () => .5);
  updateSession(session, 3000); assert.equal(session.shotElapsed, 0);
  session.prep = 0; updateSession(session, 50); assert.equal(session.shotElapsed, 0);
  session.fire = true; updateSession(session, 16);
  assert.equal(session.shotElapsed, 16); assert.equal(session.playbackRate, 1); assert.equal(session.chances, 2);
  session.queueLeft = 0; session.shotElapsed = 6500;
  session.balls = [{ x: 140, y: H + 20, vx: 0, vy: 100, r: 4, gravity: false }];
  updateSession(session, 16);
  assert.equal(session.aiming, true); assert.equal(session.shotElapsed, 0); assert.equal(session.playbackRate, 1);
  session.fire = true; updateSession(session, 16);
  assert.equal(session.shotElapsed, 16); assert.equal(session.playbackRate, 1); assert.equal(session.chances, 1);
});

test("Fast-forwarded BBTAN still hits bricks and scores each contact once", () => {
  const grid = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
  grid[0][0] = { type: "O", g: 1 }; grid[10][5] = { type: "O", g: 2 };
  const session = createSession("bbtan", grid, 1, () => .5);
  session.prep = 0; session.aiming = false; session.shotElapsed = 6500;
  session.balls = [{ x: 126, y: 10 * 28 + 14, vx: 220, vy: 0, r: 4, gravity: false }];
  updateSession(session, 32);
  assert.equal(session.grid[10][5], null); assert.equal(session.cleared, 1); assert.equal(session.score, 40);
  assert.ok(session.balls[0].vx < 0); assert.equal(session.over, false);
});
