import test from "node:test";
import assert from "node:assert/strict";
import { createGluttony, update, input, point, release } from "./engine.mjs";
import { swap, legalMoves, matches } from "./match.mjs";
import { draw } from "./view.mjs";
const rng =
  (seed = 11) =>
  () =>
    (seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 2 ** 32;
const make = (scenario = "match", difficulty = "normal") =>
  createGluttony({ scenario, difficulty, random: rng() });
function time(s, ms) {
  while (ms > 0) {
    const dt = Math.min(20, ms);
    update(s, dt);
    ms -= dt;
  }
}
function drain(s) {
  let n = 0;
  while (s.round.busy && !s.scene && !s.over) {
    time(s, 20);
    assert.ok(++n < 1000, "cascade must terminate");
  }
}
const press = (s, key) => {
  input(s, key);
  input(s, key, false);
};
function invalid(m) {
  for (let a = 0; a < 36; a++) {
    const b = a + 6,
      g = [...m.board];
    [g[a], g[b]] = [g[b], g[a]];
    if (!matches(g).length) return [a, b];
  }
  throw Error("no invalid move");
}
test("r3 rejects animate out and back without changing board, specials, moves or score", () => {
  const s = make(),
    m = s.round,
    [a, b] = invalid(m),
    before = structuredClone({
      board: m.board,
      specials: m.specials,
      moves: m.moves,
    });
  assert.equal(swap(m, a, b), false);
  assert.equal(m.animState, "reject");
  assert.equal(m.swapTween.a, a);
  assert.equal(m.swapTween.b, b);
  time(s, 200);
  assert.equal(m.animState, "reject");
  assert.ok(m.busy);
  assert.equal(m.score, 0);
  time(s, 200);
  assert.equal(m.busy, 0);
  assert.equal(m.swapTween, null);
  assert.deepEqual(
    { board: m.board, specials: m.specials, moves: m.moves },
    before,
  );
});
test("r3 valid swap, clear and fall remain distinct and input stays locked until landing", () => {
  const s = make(),
    m = s.round,
    [a, b] = legalMoves(m.board)[0];
  swap(m, a, b);
  assert.equal(m.animState, "swap");
  assert.equal(m.score, 0);
  for (const phase of ["swap", "clear", "fall"]) {
    assert.equal(m.animState, phase);
    const snapshot = JSON.stringify({
      board: m.board,
      cursor: m.cursor,
      chosen: m.chosen,
      moves: m.moves,
    });
    for (const key of ["left", "right", "up", "down", "alt", "action"])
      press(s, key);
    point(s, 43, 221, "start");
    point(s, 81, 221, "move");
    point(s, 81, 221, "end");
    assert.equal(
      JSON.stringify({
        board: m.board,
        cursor: m.cursor,
        chosen: m.chosen,
        moves: m.moves,
      }),
      snapshot,
    );
    if (phase === "swap") time(s, 200);
    else if (phase === "clear") time(s, 300);
    else {
      assert.ok(m.falling.some((v) => v < 0));
      const initial = [...m.falling];
      time(s, 160);
      assert.ok(m.falling.some((v, i) => v !== initial[i]));
    }
  }
  drain(s);
  assert.ok(m.score >= 3);
  assert.equal(m.moves, 21);
  assert.ok(m.falling.every((v) => v === 0));
});
test("r3 last execution move waits through the fall before success or failure in both difficulties", () => {
  for (const difficulty of ["normal", "hard"])
    for (const success of [true, false]) {
      const s = make("execution", difficulty),
        m = s.round;
      m.moves = 1;
      m.specials[0] = "rainbow";
      m.jellies.fill(0);
      m.collected = success ? m.target : 0;
      if (!success) m.target = 10000;
      swap(m, 0, 1);
      assert.equal(m.moves, 0);
      time(s, 500);
      assert.equal(m.animState, "fall");
      assert.equal(m.done, false);
      drain(s);
      assert.equal(m.done, true);
      assert.equal(m.success, success);
      assert.equal(s.executionDone, success);
    }
});
test("r3 a timed match clamps its clock and drains all started cascades before settlement", () => {
  for (const success of [true, false]) {
    const s = make(),
      m = s.round;
    m.clock = m.duration - 10;
    m.target = success ? 3 : 10000;
    swap(m, ...legalMoves(m.board)[0]);
    time(s, 20);
    assert.equal(m.clock, 55000);
    assert.equal(m.done, false);
    assert.equal(m.animState, "swap");
    drain(s);
    assert.equal(m.clock, 55000);
    assert.equal(m.done, true);
    assert.equal(m.success, success);
  }
});
test("r3 cascades have separate fall and clear phases and cannot spend a second move", () => {
  const s = make(),
    m = s.round;
  m.specials[0] = "rainbow";
  s.random = () => 0;
  swap(m, 0, 1);
  const seen = new Set();
  while (m.busy) {
    seen.add(`${m.chain}:${m.animState}`);
    time(s, 20);
  }
  assert.ok(seen.has("2:clear"));
  assert.ok(seen.has("2:fall"));
  assert.equal(m.moves, 21);
  assert.ok(m.combo > 1);
  assert.equal(matches(m.board).length, 0);
});
test("r3 snake continues scoring past goal, retains speed, and settles only at 45 seconds", () => {
  for (const difficulty of ["normal", "hard"]) {
    const s = make("snake", difficulty),
      m = s.round;
    assert.equal(m.stepMs, difficulty === "hard" ? 170 : 210);
    assert.equal(m.target, difficulty === "hard" ? 12 : 10);
    // Explicit near-goal fixture: test real eating and timeout handlers, not an artificial finish.
    m.score = m.target - 1;
    m.food = [6, 9];
    time(s, m.stepMs);
    assert.equal(m.score, m.target);
    assert.equal(m.done, false);
    assert.equal(m.feedback, "snake-bonus");
    m.food = [7, 9];
    const damage = s.stats.damage;
    time(s, m.stepMs);
    assert.equal(m.score, m.target + 1);
    assert.equal(s.stats.damage, damage + 5);
    assert.equal(m.done, false);
    m.clock = 44990;
    time(s, 20);
    assert.equal(m.clock, 45000);
    assert.equal(m.done, true);
    assert.equal(m.success, true);
  }
});
test("r3 self collision still fails after reaching snake goal; insufficient score fails at timeout", () => {
  const s = make("snake"),
    m = s.round;
  m.score = m.target;
  m.snake = [
    [3, 3],
    [4, 3],
    [4, 4],
    [3, 4],
  ];
  m.dir = [1, 0];
  time(s, m.stepMs);
  assert.equal(m.done, true);
  assert.equal(m.success, false);
  const t = make("snake");
  t.round.clock = 44990;
  time(t, 20);
  assert.equal(t.round.success, false);
  assert.equal(t.round.done, true);
});
test("r3 canvas rendering accepts all animation phases, specials and reduced motion", () => {
  const s = make(),
    m = s.round;
  const commands = [];
  const ctx = new Proxy(
    { measureText: () => ({ width: 10 }) },
    {
      get: (obj, key) =>
        key in obj
          ? obj[key]
          : (...args) => {
              assert.ok(
                args.every((v) => typeof v !== "number" || Number.isFinite(v)),
                `${key}: nonfinite`,
              );
              commands.push(key);
            },
    },
  );
  m.specials[0] = "rainbow";
  swap(m, 0, 1);
  for (const reduced of [false, true])
    for (const state of ["swap", "reject", "clear", "fall", "shuffle"]) {
      m.animState = state;
      m.animTime = 100;
      m.animDuration = 400;
      draw(ctx, s, { reduced });
    }
  assert.ok(commands.includes("fillRect"));
  assert.ok(commands.includes("clip"));
  release(s);
});
