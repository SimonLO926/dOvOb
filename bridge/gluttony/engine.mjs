import {
  createGame,
  startGame,
  tryMove,
  tryRotate,
  hold,
  hardDrop,
  lockActive,
  fits,
  pump,
  flipGrid,
  feverActive,
} from "../logic.mjs";
import { BRIDGE_REPEAT } from "../bridge-controls.mjs";
import {
  initGame,
  gameInput,
  gamePoint,
  gameUpdate,
  updateGameEffects,
  clamp,
} from "./games.mjs";
export const HP = { normal: [560, 700, 840], hard: [560, 840, 1050] };
export const GAMES = ["snake", "match", "merge", "rope", "slice"];
export const ATTACKS = ["gravity", "ricochet", "floor"];
export const names = {
  bridge: ["Bridge", "Bridge"],
  snake: ["貪吃蛇", "Hungry snake"],
  match: ["食物三消", "Food match"],
  merge: ["合成西瓜", "Fruit fusion"],
  rope: ["割繩餵糖", "Cut & feed"],
  slice: ["切食物", "Food slicer"],
  gravity: ["飢餓引力", "Hunger pull"],
  ricochet: ["反芻彈射", "Ricochet scraps"],
  floor: ["啃食地板", "Devoured floor"],
  execution: ["最後一餐", "Last serving"],
  escape: ["大嘴逃亡", "Mouth escape"],
  burst: ["最終爆發", "Final outburst"],
};
export const SCENARIOS = [
  { id: "full", label: ["完整挑戰", "Full encounter"] },
  ...[1, 2, 3, 4, 5].map((phase) => ({
    id: "phase-" + phase,
    stage: phase < 3 ? 1 : phase < 5 ? 2 : 3,
    ratio: phase === 2 || phase === 4 ? 0.45 : 1,
    label: [
      ["廚師", "飢餓廚師", "巨口", "膨脹巨口", "深淵巨口"][phase - 1] +
        " · Bridge",
      ["Chef", "Hungry chef", "Maw", "Swollen maw", "Abyss maw"][phase - 1] +
        " · Bridge",
    ],
  })),
  ...GAMES.map((mode) => ({
    id: mode,
    mode,
    stage: 1,
    single: true,
    label: names[mode],
  })),
  ...ATTACKS.flatMap((mode) =>
    [1, 2, 3].map((stage) => ({
      id: mode + "-" + stage,
      mode,
      stage,
      single: true,
      label: [
        names[mode][0] + " · " + ["廚師", "巨口", "深淵"][stage - 1],
        names[mode][1] + " · " + ["Chef", "Maw", "Abyss"][stage - 1],
      ],
    })),
  ),
  {
    id: "execution",
    mode: "execution",
    stage: 2,
    ratio: 0.2,
    single: true,
    label: ["三消處決", "Match execution"],
  },
  {
    id: "escape",
    mode: "escape",
    stage: 3,
    ratio: 0.2,
    single: true,
    label: ["食道逃亡", "Gullet escape"],
  },
  {
    id: "burst",
    mode: "burst",
    stage: 3,
    ratio: 0.1,
    single: true,
    label: names.burst,
  },
  ...[
    "intro",
    "chef-defeat",
    "mouth",
    "mouth-defeat",
    "abyss",
    "abyss-defeat",
    "body",
    "victory",
    "lost",
  ].map((story) => ({
    id: "story:" + story,
    story,
    stage:
      story === "intro" || story === "chef-defeat"
        ? 1
        : story.startsWith("mouth")
          ? 2
          : 3,
    label: ["插圖 · " + story, "Story · " + story],
  })),
];
function newBridge(random) {
  const g = createGame({ mode: "marathon", random });
  startGame(g, "marathon");
  return g;
}
export function createGluttony({
  scenario = "full",
  difficulty = "normal",
  random = Math.random,
} = {}) {
  const pick = SCENARIOS.find((p) => p.id === scenario);
  if (!pick) throw new RangeError("Unknown Gluttony scenario");
  difficulty = difficulty === "hard" ? "hard" : "normal";
  const stage = pick.stage || 1,
    max = HP[difficulty][stage - 1];
  const s = {
    sin: "gluttony",
    preview: true,
    difficulty,
    scenario: pick,
    random,
    stage,
    bossHp: max * (pick.ratio ?? 1),
    bossMaxHp: max,
    hp: 100,
    maxHp: 100,
    bridge: newBridge(random),
    held: new Set(),
    mode: "bridge",
    round: null,
    scene: null,
    sceneHistory: [],
    played: [],
    completed: [],
    executionDone: pick.mode === "burst",
    escapeDone: pick.mode === "burst",
    retry: 0,
    elapsed: 0,
    over: false,
    won: false,
    cycle: 0,
    gameIndex: 0,
    attackIndex: 0,
    phaseSeen: pick.ratio < 0.5,
    catDue: 18000,
    catTime: 0,
    stats: { damage: 0, damageTaken: 0, healed: 0 },
    curses: { reverse: 0, blind: 0, rush: 0, norotate: 0 },
  };
  startRound(s, pick.mode || "bridge");
  if (scenario === "full") scene(s, "intro");
  if (pick.story) scene(s, pick.story, 0);
  return s;
}
export function phase(s) {
  return s.stage === 3
    ? 5
    : s.stage === 2
      ? s.bossHp / s.bossMaxHp <= 0.5
        ? 4
        : 3
      : s.bossHp / s.bossMaxHp <= 0.5
        ? 2
        : 1;
}
export function scene(s, kind, duration = 4000) {
  s.scene = { kind, time: 0, duration };
  s.sceneHistory.push(kind);
  release(s);
}
export function release(s) {
  s.held.clear();
  if (s.round) {
    s.round.horizontalDir = 0;
    s.round.pointer = null;
    s.round.escapeGesture = null;
    s.round.matchGesture = null;
    s.round.nextDir = null;
  }
}
export function heal(s, amount) {
  if (s.over || amount <= 0) return;
  const n = Math.min(
    s.maxHp - s.hp,
    Math.max(1, Math.floor(amount * (s.difficulty === "hard" ? 0.5 : 1))),
  );
  s.hp += n;
  s.stats.healed += n;
}
export function hurt(s, amount) {
  if (s.over || s.scene || amount <= 0) return;
  const n = Math.min(s.hp, amount);
  s.hp -= n;
  s.stats.damageTaken += n;
  if (s.hp <= 0) {
    s.over = true;
    s.won = false;
    scene(s, "lost", 0);
  }
}
export function bossFloor(s) {
  if (s.stage === 1 && GAMES.some((id) => !s.played.includes(id)))
    return s.bossMaxHp * 0.08;
  if (s.stage === 2 && !s.executionDone) return s.bossMaxHp * 0.2;
  if (s.stage === 3 && !s.escapeDone) return s.bossMaxHp * 0.2;
  return 0;
}
export function hitBoss(s, amount) {
  if (s.over || s.scene || amount <= 0) return 0;
  const n = Math.max(0, Math.min(amount, s.bossHp - bossFloor(s)));
  s.bossHp = Math.max(0, s.bossHp - n);
  s.stats.damage += n;
  if (s.bossHp === 0) {
    scene(
      s,
      s.stage === 1
        ? "chef-defeat"
        : s.stage === 2
          ? "mouth-defeat"
          : "abyss-defeat",
    );
  } else if (
    !GAMES.includes(s.mode) &&
    s.mode !== "execution" &&
    s.mode !== "escape"
  )
    checkGates(s);
  return n;
}
export function checkGates(s) {
  if (s.over || s.scene) return;
  if (s.stage === 1 && s.bossHp === 0) {
    scene(s, "chef-defeat");
    return;
  }
  if (
    s.stage === 2 &&
    !s.executionDone &&
    s.bossHp <= s.bossMaxHp * 0.2 &&
    !s.retry &&
    s.mode !== "execution"
  ) {
    scene(s, "execution-start");
    return;
  }
  if (
    s.stage === 3 &&
    !s.escapeDone &&
    s.bossHp <= s.bossMaxHp * 0.2 &&
    !s.retry &&
    s.mode !== "escape"
  ) {
    scene(s, "escape-start");
  }
}
export function startRound(s, id) {
  s.mode = id;
  release(s);
  s.round = {
    id,
    clock: 0,
    duration: id === "bridge" ? 24000 : 16000,
    score: 0,
    done: false,
    success: false,
    fall: 0,
    lock: 0,
    resolve: 0,
    horizontalDir: 0,
    horizontalMs: 0,
    horizontalRepeating: false,
    horizontalSource: "keyboard",
  };
  if (id !== "bridge") initGame(s, s.round);
}
function nextRound(s) {
  s.cycle++;
  if (s.escapeDone && s.stage === 3) {
    startRound(s, "burst");
    return;
  }
  if (s.cycle % 2 === 0) {
    startRound(s, "bridge");
    return;
  }
  if (s.cycle % 4 === 3) {
    startRound(s, ATTACKS[s.attackIndex++ % ATTACKS.length]);
    return;
  }
  const pending = GAMES.filter((id) => !s.played.includes(id));
  startRound(s, pending[0] || GAMES[s.gameIndex++ % GAMES.length]);
}
export function finishRound(s, success) {
  const m = s.round;
  if (m.done || s.scene || s.over) return;
  m.done = true;
  m.success = success;
  release(s);
  if (GAMES.includes(m.id)) {
    if (!s.played.includes(m.id)) s.played.push(m.id);
    if (success && !s.completed.includes(m.id)) s.completed.push(m.id);
  }
  if (m.id === "execution") {
    if (success) {
      s.executionDone = true;
      heal(s, 12);
      hitBoss(s, 70);
    } else {
      hurt(s, 80);
      s.retry = 20000;
    }
  } else if (m.id === "escape") {
    if (success) {
      s.escapeDone = true;
      heal(s, 12);
      const n = Math.max(0, s.bossHp - s.bossMaxHp * 0.1);
      s.bossHp -= n;
      s.stats.damage += n;
    } else {
      hurt(s, 60);
      s.retry = 20000;
    }
  } else if (success) {
    heal(s, ATTACKS.includes(m.id) ? 4 : 8);
    hitBoss(s, ATTACKS.includes(m.id) ? 50 : 80);
  } else hurt(s, s.difficulty === "hard" ? 15 : 12);
  if (s.scene || s.over) return;
  // Keep the actual board visible for the result; ordinary rounds never open concept art.
  m.resultTime = 1200;
  m.feedback = success ? "complete" : "incomplete";
  m.feedbackTime = 2400;
}
export function continueScene(s) {
  if (!s.scene || s.scene.time < 450 || s.scenario.story) return;
  const kind = s.scene.kind;
  s.scene = null;
  if (kind === "intro") return;
  if (kind === "chef-defeat" || kind === "mouth-defeat") {
    s.stage++;
    s.bossMaxHp = HP[s.difficulty][s.stage - 1];
    s.bossHp = s.bossMaxHp;
    s.retry = 0;
    s.cycle = 0;
    s.phaseSeen = false;
    heal(s, 14);
    scene(s, s.stage === 2 ? "mouth" : "abyss");
    return;
  }
  if (kind === "mouth" || kind === "abyss") {
    startRound(s, "bridge");
    return;
  }
  if (kind === "execution-start") {
    startRound(s, "execution");
    return;
  }
  if (kind === "escape-start") {
    startRound(s, "escape");
    return;
  }
  if (kind === "escaped") {
    if (s.scenario.single) {
      startRound(s, "burst");
      return;
    }
    startRound(s, "burst");
    return;
  }
  if (kind === "abyss-defeat") {
    scene(s, "body");
    return;
  }
  if (kind === "body") {
    s.over = true;
    s.won = true;
    scene(s, "victory", 0);
    return;
  }
  if (kind === "result") {
    if (s.scenario.single) {
      startRound(s, s.scenario.mode);
      return;
    }
    checkGates(s);
    if (!s.scene) nextRound(s);
  }
}
const hooks = (s) => ({
  hit: (n) => hitBoss(s, n),
  hurt: (n) => hurt(s, n),
  heal: (n) => heal(s, n),
  finish: (ok) => finishRound(s, ok),
});
export function input(s, key, down = true, source = "keyboard") {
  const m = s.round;
  if (!down) {
    s.held.delete(key);
    if (
      (key === "left" && m.horizontalDir === -1) ||
      (key === "right" && m.horizontalDir === 1)
    )
      m.horizontalDir = 0;
    return;
  }
  if (s.scene) {
    if (key === "action") continueScene(s);
    return;
  }
  if (s.over || m.done || m.clock >= m.duration || s.held.has(key)) return;
  s.held.add(key);
  if (s.mode !== "bridge") {
    gameInput(s, key, hooks(s));
    return;
  }
  const g = s.bridge;
  if (g.phase !== "playing") return;
  if (key === "left" || key === "right") {
    m.horizontalDir = key === "left" ? -1 : 1;
    m.horizontalMs = 0;
    m.horizontalRepeating = false;
    m.horizontalSource = source;
    tryMove(g, m.horizontalDir * (s.curses.reverse > 0 ? -1 : 1), 0);
  }
  if (key === "up" && !s.curses.norotate) tryRotate(g, 1);
  if (key === "rotateLeft" && !s.curses.norotate) tryRotate(g, -1);
  if (key === "action") hardDrop(g);
  if (key === "alt") hold(g);
  if (key === "down") tryMove(g, 0, 1);
}
export function point(s, x, y, phase = "start") {
  if (
    s.scene ||
    s.over ||
    s.round.done ||
    s.round.clock >= s.round.duration ||
    s.mode === "bridge"
  )
    return;
  gamePoint(s, x, y, phase, hooks(s));
}
function bridgeUpdate(s, dt) {
  const m = s.round,
    g = s.bridge;
  if (g.phase === "over") {
    hurt(s, s.difficulty === "hard" ? 18 : 12);
    s.bridge = newBridge(s.random);
    return;
  }
  if (g.phase === "resolving") {
    m.resolve -= dt;
    if (m.resolve <= 0) {
      const e = pump(g);
      m.resolve = e?.type === "clear" ? 140 : 35;
      if (e?.type === "clear") {
        const n = e.rows?.length || 1;
        hitBoss(s, 28 * n + Math.min(12, (e.combo || 0) * 2));
        heal(s, 2 + 2 * n);
        if (s.scene || s.round !== m) return;
        for (const cell of e.cells || [])
          if (
            !feverActive(g) &&
            cell.curse &&
            cell.cause !== "blast" &&
            cell.curse in s.curses
          )
            s.curses[cell.curse] = cell.curse === "blind" ? 2200 : 6000;
        const reward = [...(e.cells || []), ...(e.blasts || [])].find(
          (c) => c.reward,
        )?.reward;
        if (reward) m.reward = reward;
        g.pendingReward = null;
      }
      if (e?.type === "flip") flipGrid(g);
      if (e?.type === "reward") m.reward = e.reward;
      if (m.reward && g.phase === "playing") {
        const pending = GAMES.filter((id) => !s.played.includes(id));
        startRound(
          s,
          pending[0] ||
            GAMES[
              { breakout: 0, bbtan: 1, pinball: 4, sand: 2 }[m.reward] ?? 0
            ],
        );
        return;
      }
    }
  } else if (g.active) {
    if (m.horizontalDir && s.held.has(m.horizontalDir < 0 ? "left" : "right")) {
      m.horizontalMs += dt;
      let interval =
        m.horizontalSource === "touch"
          ? BRIDGE_REPEAT.touchInterval
          : m.horizontalRepeating
            ? BRIDGE_REPEAT.keyboardInterval
            : BRIDGE_REPEAT.keyboardDelay;
      while (m.horizontalMs >= interval) {
        m.horizontalMs -= interval;
        m.horizontalRepeating = true;
        tryMove(g, m.horizontalDir * (s.curses.reverse > 0 ? -1 : 1), 0);
        interval =
          m.horizontalSource === "touch"
            ? BRIDGE_REPEAT.touchInterval
            : BRIDGE_REPEAT.keyboardInterval;
      }
    }
    m.fall += dt;
    const fall =
      s.held.has("down") || s.curses.rush
        ? 100
        : s.difficulty === "hard"
          ? 430
          : 550;
    if (m.fall >= fall) {
      m.fall -= fall;
      tryMove(g, 0, 1);
    }
    if (
      !fits(g.grid, g.active.type, g.active.rot, g.active.x, g.active.y + 1, g)
    ) {
      m.lock += dt;
      if (m.lock >= 380) {
        lockActive(g);
        m.lock = 0;
      }
    } else m.lock = 0;
  }
  if (s.scene || s.over || s.round !== m) return;
  checkGates(s);
  if (s.scene) return;
  if (m.clock >= m.duration && !m.reward) nextRound(s);
}
export function update(s, dt) {
  dt = clamp(dt, 0, 50);
  if (s.scene) {
    s.scene.time += dt;
    if (s.scene.duration && s.scene.time >= s.scene.duration) continueScene(s);
    return;
  }
  if (s.over) return;
  if (s.round.done) {
    const m = s.round;
    updateGameEffects(m, dt);
    m.resultTime = Math.max(0, m.resultTime - dt);
    if (m.resultTime === 0) {
      if (m.id === "escape" && m.success) startRound(s, "burst");
      else if (s.scenario.single) startRound(s, "bridge");
      else {
        checkGates(s);
        if (!s.scene) nextRound(s);
      }
      s.notice = { success: m.success, id: m.id, time: 1800 };
    }
    return;
  }
  if (s.notice) s.notice.time = Math.max(0, s.notice.time - dt);
  s.elapsed += dt;
  s.catTime = Math.max(0, s.catTime - dt);
  s.catDue -= dt;
  if (s.catDue <= 0) {
    s.catDue = 18000;
    s.catTime = 2000;
    heal(s, 8);
  }
  for (const k in s.curses) s.curses[k] = Math.max(0, s.curses[k] - dt);
  if (s.retry) {
    s.retry = Math.max(0, s.retry - dt);
    if (s.retry === 0) {
      scene(s, s.stage === 2 ? "execution-start" : "escape-start");
      return;
    }
  }
  const m = s.round;
  m.clock = Math.min(m.duration, m.clock + dt);
  if (s.mode === "bridge") {
    bridgeUpdate(s, dt);
    return;
  }
  gameUpdate(s, dt, hooks(s));
  if (s.round !== m || s.over || s.scene) return;
  checkGates(s);
  if (s.scene) return;
  if (m.clock >= m.duration && ["match", "execution"].includes(m.id) && m.busy)
    return;
  if (m.clock >= m.duration)
    finishRound(s, ATTACKS.includes(m.id) || m.score >= m.target);
}
