import { GREED_ATTACKS, FLYING_ATTACKS, createReaction, reactionInput, reactionPoint, updateReaction, createPusher, pusherAction, updatePusher } from './crazy-reactions.mjs?v=1.2.2';
import { COLS, ROWS, SAND_SCALE, createGame, startGame, fits, tryMove, tryRotate, hold, hardDrop, lockActive, pump, beginSand, finishSand, flipGrid, sandFallStep, feverActive, penaltyCells, activateFever, applyNoHoldCurse } from './logic.mjs?v=1.2.2';
import { brickWall, createSession, updateSession } from './arcade.mjs?v=1.2.2';

export const FIRST_BOSS = Object.freeze({ id: 'mad-dealer', name: 'crazyDealer', hp: 900, secondHp: 1200, limit: 720000 });
export const CRAZY_MODES = Object.freeze(['slots', 'tiger', 'pachinko', 'cards', 'mahjong', 'breakout', 'pinball', 'bbtan', 'sand', 'dodge']);
export const CAT_ACTIONS = Object.freeze(['heal', 'boss', 'player', 'blocks', 'mischief']);
export function catAction(random = Math.random) {
  const roll = random();
  return roll < .25 ? 'heal' : roll < .45 ? 'boss' : roll < .60 ? 'player' : roll < .85 ? 'blocks' : 'mischief';
}
const HARD = new Set(['pinball', 'breakout', 'bbtan', 'sand', 'dodge']);
const RECOVERY = ['cards', 'mahjong', 'slots'];
const shuffled = (items, random) => {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
  return out;
};

export function createCrazy({ random = Math.random, boss = FIRST_BOSS } = {}) {
  const bridge = createGame({ mode: 'marathon', random });
  startGame(bridge, 'marathon');
  const state = {
    random, boss, hp: 100, maxHp: 100, bossHp: boss.hp, bossMaxHp: boss.hp, form: 1, phase: 1, cutscene: null, rewardCharge: 0, pusherDue: false,
    stats: { hits: 0, damage: 0, damageTaken: 0, healed: 0, counters: 0, coins: 0, firstTime: 0, secondTime: 0 }, score: 0, elapsed: 0,
    over: false, won: false, damageLeft: 50, mode: 'bridge', encounter: 0, bag: [], hardStreak: 0,
    bridge, parkedPiece: null, curses: { reverse: 0, blind: 0, rush: 0, norotate: 0 }, arcade: null, mini: null, held: new Set(), actionReady: true,
    timeLeft: 20000, duration: 20000, protection: 500, cooldown: 0, fallMs: 0, lockMs: 0, repeatMs: 0,
    resolveMs: 0, successes: 0, events: [], hitFlash: 0, cat: null, catDue: 9000, catBlock: 0,
    transition: null, notice: 'crazyOpening', noticeTime: 3500, attack: null, attackDone: false,
  };
  return state;
}

function notify(s, key, amount = 0) {
  s.notice = key; s.noticeAmount = amount; s.noticeTime = 1800;
  s.events.push({ key, amount });
}
export function hurtCrazy(s, amount, reason = 'crazyHurt') {
  if (s.over || s.cutscene || s.protection > 0 || s.mode === 'pusher') return false;
  s.stats.damageTaken += Math.min(s.hp, amount);
  s.hp = Math.max(0, s.hp - amount); s.protection = 650; s.hitFlash = 300;
  notify(s, reason, -amount);
  if (s.hp === 0) { s.over = true; s.won = false; s.finishReason = reason; }
  return true;
}
export function healCrazy(s, amount) {
  if (s.over) return;
  const gained = Math.min(amount, s.maxHp - s.hp);
  s.hp += gained; s.stats.healed += gained;
  if (gained) notify(s, 'crazyHeal', gained);
}
export function hitCrazyBoss(s, amount) {
  if (s.over || s.cutscene) return;
  const damage = Math.min(amount, s.damageLeft, s.bossHp);
  s.damageLeft -= damage;
  s.bossHp -= damage;
  if (damage) { s.stats.hits++; s.stats.damage += damage; }
  if (GREED_ATTACKS.includes(s.mode) && damage) { s.rewardCharge += damage; if (s.rewardCharge >= 40) { s.rewardCharge -= 40; s.pusherDue = true; } }
  if (s.attack) { s.attack = null; notify(s, 'crazyCounter'); }
  s.score += damage * 10; s.successes += 1;
  const phase = s.bossHp <= s.bossMaxHp / 3 ? 3 : s.bossHp <= s.bossMaxHp * 2 / 3 ? 2 : 1;
  if (phase > s.phase) { s.phase = phase; healCrazy(s, 12); notify(s, 'crazyPhase', phase); }
  else notify(s, damage ? 'crazyHit' : 'crazyGuard', damage);
  if (s.bossHp === 0) {
    s.held.clear(); s.attack = null;
    if (s.form === 1 && s.boss.secondHp) {
      s.stats.firstTime = s.elapsed; s.cutscene = { kind: 'transform', time: 0, duration: 4500 }; notify(s, 'crazyTransform');
    } else {
      s.stats.secondTime = s.elapsed - s.stats.firstTime;
      s.over = true; s.won = true; s.score += 5000 + s.hp * 50;
      s.cutscene = { kind: 'victory', time: 0, duration: 6500 }; notify(s, 'crazyVictorySound');
    }
  }
}

export function skipCrazyCinematic(s) {
  if (!s.cutscene || s.cutscene.time < 1000) return false;
  finishCinematic(s); return true;
}
function finishCinematic(s) {
  const kind = s.cutscene.kind; s.cutscene = null; s.held.clear();
  if (kind === 'transform') {
    leaveSand(s); s.form = 2; s.bossMaxHp = s.boss.secondHp; s.bossHp = s.bossMaxHp; s.phase = 1;
    s.bag = []; s.pusherDue = false; s.rewardCharge = 0;
    for (const key of Object.keys(s.curses)) s.curses[key] = 0;
    healCrazy(s, 20); advanceCrazy(s, 'jump'); notify(s, 'crazyTrueForm');
  }
}
function nextMode(s) {
  if (s.encounter % 3 === 0) return 'bridge';
  if (!s.bag.length) s.bag = shuffled(s.form === 2 ? [...CRAZY_MODES, ...GREED_ATTACKS] : CRAZY_MODES, s.random);
  let index = s.form === 2 && s.encounter % 3 === 1 ? s.bag.findIndex(m => GREED_ATTACKS.includes(m) && m !== s.mode) : -1;
  if (index < 0) index = s.bag.findIndex(m => m !== s.mode && (s.hardStreak < 2 || RECOVERY.includes(m)));
  if (index < 0) {
    // Insert a recovery encounter without discarding the rest of the shuffled deck.
    return RECOVERY.find(m => m !== s.mode) || 'cards';
  }
  return s.bag.splice(index, 1)[0];
}

function restoreParkedPiece(s) {
  const g = s.bridge, piece = s.parkedPiece;
  if (!piece) return;
  s.parkedPiece = null;
  const candidate = { ...piece, sand: g.sanding ? piece.sand : null };
  if (!fits(g.grid, candidate.type, candidate.rot, candidate.x, candidate.y, g)) {
    candidate.y = 0;
    const origins = [candidate.x, 3, 2, 4, 1, 5, 0, 6, 7];
    const x = origins.find(x => fits(g.grid, candidate.type, candidate.rot, x, 0, g));
    if (x == null) {
      // This is a genuine blocked spawn, not an overlapping conversion write.
      g.active = candidate; g.phase = 'over'; return;
    }
    candidate.x = x;
  }
  g.active = candidate; g.phase = 'playing'; g.spinEligible = false;
}
function leaveSand(s) {
  const g = s.bridge;
  if (!g.sanding) return;
  if (g.active) s.parkedPiece = { ...g.active };
  finishSand(g);
  if (s.parkedPiece) restoreParkedPiece(s);
}
export function advanceCrazy(s, preferredMode = null) {
  if (s.over || s.cutscene) return;
  if (s.mode === 'sand') leaveSand(s);
  const from = s.mode;
  const bonus = preferredMode === 'pusher' || (!preferredMode && s.pusherDue);
  if (!bonus) s.encounter += 1;
  s.mode = bonus ? 'pusher' : preferredMode || nextMode(s);
  if (bonus) s.pusherDue = false;
  s.transition = { from, to: s.mode, time: 0 };
  s.hardStreak = HARD.has(s.mode) ? s.hardStreak + 1 : 0;
  s.duration = s.mode === 'pusher' ? 12000 : (s.form === 2 ? 18000 : 22000) - s.phase * 2000;
  s.damageLeft = (s.form === 2 ? 80 : 45) + s.phase * 5;
  s.timeLeft = s.duration; s.protection = 500; s.held.clear(); s.actionReady = false;
  s.cooldown = 0; s.fallMs = 0; s.lockMs = 0; s.repeatMs = 0; s.resolveMs = 0;
  s.successes = 0; s.arcade = null; s.mini = null; s.cat = null; s.catBlock = 0; s.attack = null; s.attackDone = false;
  s.catDue = Math.min(8000, s.duration / 2);
  if (s.mode === 'bridge' || s.mode === 'sand') {
    if (s.mode === 'sand') {
      beginSand(s.bridge, Infinity);
      // Settle converted grains before resuming the SAME falling piece.
      if (s.bridge.active) { s.parkedPiece = { ...s.bridge.active }; s.bridge.active = null; }
      s.bridge.phase = 'resolving';
    }
    // Finish outstanding Bridge resolution before accepting a new active piece.
    if (!s.bridge.active) s.bridge.phase = 'resolving';
  } else if (['breakout', 'pinball', 'bbtan'].includes(s.mode)) {
    s.arcade = createSession(s.mode, brickWall(s.random), s.phase, s.random);
    s.arcade.prep = 0; s.arcade.teach = false;
  } else if (s.mode === 'slots') {
    s.mini = { reels: [null, null, null], stop: 0, clock: 0, round: 0 };
  } else if (s.mode === 'tiger') {
    s.mini = { reels: [0, 1, 2], pending: 0, risks: 0, clock: 0, spin: null };
  } else if (s.mode === 'pachinko') {
    s.mini = { aim: 140, balls: [], pegs: Array.from({ length: 36 }, (_, i) => ({ x: 28 + (i % 6) * 42 + (Math.floor(i / 6) % 2) * 12 + (s.random() - .5) * 14, y: 174 + Math.floor(i / 6) * 48 + (s.random() - .5) * 12 })) };
  } else if (s.mode === 'dodge') {
    s.mini = { x: 140, y: 400, target: null, hazards: [], wave: 0, spawn: 850, survival: 0, dash: 0, dashReady: 0, lastX: 0, lastY: -1 };
  } else if (GREED_ATTACKS.includes(s.mode)) { s.mini = createReaction(s.mode); }
  else if (s.mode === 'pusher') { s.mini = createPusher(s.random); }
  else deal(s);
  notify(s, 'crazySwitch');
}

function deal(s) {
  const streak = s.mini?.streak || 0;
  const roundTime = 3400 - s.phase * 400;
  if (s.mode === 'cards') {
    const target = 1 + Math.floor(s.random() * 9);
    s.mini = { items: shuffled([target, target, target % 9 + 1, (target + 2) % 9 + 1], s.random), selected: [], focus: 0, target, streak, roundTime, roundLeft: roundTime };
  } else {
    const a = Math.floor(s.random() * 4);
    s.mini = { items: shuffled([a, a, (a + 1) % 4, (a + 1) % 4, (a + 2) % 4, (a + 2) % 4], s.random), selected: [], focus: 0, removed: [], target: a, streak, roundTime, roundLeft: roundTime };
  }
}

function choose(s, index) {
  const m = s.mini;
  if (!m || s.cooldown > 0 || m.removed?.includes(index) || m.selected?.includes(index)) return;
  m.focus = index; m.selected.push(index); notify(s, s.mode === 'cards' ? 'crazyCardSound' : 'crazyTileSound');
  if (m.selected.length < 2) return;
  const [a, b] = m.selected;
  if (m.items[a] === m.items[b] && (m.target == null || m.items[a] === m.target)) {
    m.streak = (m.streak || 0) + 1;
    hitCrazyBoss(s, (s.mode === 'cards' ? 22 : 16) + Math.min(8, (m.streak - 1) * 2)); healCrazy(s, 2);
    m.roundLeft = m.roundTime;
    if (s.mode === 'mahjong') {
      m.removed.push(a, b); m.selected = []; s.cooldown = 350;
      const available = m.items.filter((_, i) => !m.removed.includes(i));
      if (available.length) m.target = available[Math.floor(s.random() * available.length)];
      if (m.removed.length === 6) { hitCrazyBoss(s, 20); s.cooldown = 450; }
    } else s.cooldown = 350;
  } else { m.streak = 0; hurtCrazy(s, 5, 'crazyWrong'); s.cooldown = 350; }
}

function miniAction(s, action) {
  const m = s.mini;
  if (!m || s.cooldown > 0 || s.catBlock > 0 || m.spin) return;
  if (s.mode === 'slots' && action === 'action') {
    m.reels[m.stop] = Math.floor(m.clock / (250 - s.phase * 20) + m.stop) % 4;
    m.stop += 1; notify(s, 'crazyReelStop');
    if (m.stop === 3) {
      const count = Math.max(...m.reels.map(v => m.reels.filter(x => x === v).length));
      if (count >= 2) { hitCrazyBoss(s, count === 3 ? 48 : 24); healCrazy(s, count === 3 ? 8 : 3); }
      else hurtCrazy(s, 6, 'crazyMiss');
      s.cooldown = 650;
    }
  } else if (s.mode === 'tiger') {
    if (action === 'alt' && m.pending) {
      hitCrazyBoss(s, m.pending); healCrazy(s, 4); m.pending = 0; s.cooldown = 650;
    } else if (action === 'action' && !m.spin) {
      const risk = m.pending > 0;
      m.spin = { time: 0, duration: 1050, risk, won: risk ? s.random() < .55 : null,
        result: risk ? null : Array.from({ length: 3 }, () => Math.floor(s.random() * 4)) };
      notify(s, risk ? 'crazyRiskRolling' : 'crazyRolling');
    }
  } else if (GREED_ATTACKS.includes(s.mode)) {
    reactionInput(s, action, notify);
  } else if (s.mode === 'pusher') {
    pusherAction(s, action, reactionApi);
  } else if (s.mode === 'dodge' && action === 'action' && m.dashReady <= 0) {
    m.dash = 180; m.dashReady = 1400; notify(s, 'crazyDashSound');
  } else if (s.mode === 'pachinko' && action === 'action' && m.balls.length < 3) {
    notify(s, 'crazyLaunchSound'); m.balls.push({ x: m.aim, y: 154, vx: (m.aim - 140) * 0.7 + (s.random() - .5) * 48, vy: 40 }); s.cooldown = 500;
  } else if (['cards', 'mahjong'].includes(s.mode)) {
    if (action === 'left') m.focus = (m.focus - 1 + m.items.length) % m.items.length;
    if (action === 'right') m.focus = (m.focus + 1) % m.items.length;
    if (action === 'action') choose(s, m.focus);
    if (action === 'alt' && s.mode === 'mahjong') m.selected = [];
  }
}

export function inputCrazy(s, action, down = true) {
  if (s.over || s.cutscene) return;
  if (!down) {
    s.held.delete(action);
    if (action === 'action') s.actionReady = true;
    if (s.arcade && ['left', 'right'].includes(action)) s.arcade[action] = false;
    return;
  }
  if (s.cat?.action === 'player' && s.cat.time < 1200 && ['left', 'right'].includes(action)) s.cat.dodged = true;
  if (s.held.has(action)) return;
  s.held.add(action);
  if (action === 'action' && !s.actionReady) return;
  if (s.arcade) {
    if (action === 'left' || action === 'right') { s.arcade[action] = true; if (s.mode === 'pinball') notify(s, 'crazyFlipperSound'); }
    if (action === 'action') { s.arcade.fire = true; if (s.arcade.aiming || !s.arcade.launched) notify(s, 'crazyLaunchSound'); }
  } else if (s.mode === 'bridge' || s.mode === 'sand') {
    const g = s.bridge;
    if (g.phase !== 'playing') return;
    if (action === 'left' || action === 'right') tryMove(g, (action === 'left' ? -1 : 1) * (s.curses.reverse > 0 ? -1 : 1), 0);
    if (action === 'down') tryMove(g, 0, 1);
    if ((action === 'rotate' || action === 'rotateLeft') && s.curses.norotate <= 0) tryRotate(g, action === 'rotate' ? 1 : -1);
    if (action === 'alt') hold(g);
    if (action === 'action') hardDrop(g);
  } else miniAction(s, action);
}

// All mini-game hit regions use the same logical 280 x 560 coordinates as the renderer.
export function pointCrazy(s, x, y) {
  if (s.over || s.cutscene || !s.actionReady || s.catBlock > 0) return;
  if (GREED_ATTACKS.includes(s.mode)) { reactionPoint(s, x, y); return; }
  if (s.mode === 'pusher') { s.mini.aim = Math.max(30, Math.min(250, x)); return; }
  if (s.mode === 'dodge') { s.mini.target = { x: Math.max(22, Math.min(258, x)), y: Math.max(172, Math.min(494, y)) }; return; }
  if (s.mode === 'pachinko') { s.mini.aim = Math.max(20, Math.min(260, x)); return; }
  if (s.mode === 'cards' && y >= 190 && y <= 290) {
    const i = Math.floor((x - 12) / 65);
    if (i >= 0 && i < 4) choose(s, i);
  }
  if (s.mode === 'mahjong' && y >= 185 && y <= 385) {
    const col = Math.floor((x - 28) / 78), row = Math.floor((y - 185) / 105);
    if (col >= 0 && col < 3 && row >= 0 && row < 2) choose(s, row * 3 + col);
  }
}

function updateTiger(s, dt) {
  const m = s.mini, spin = m.spin;
  if (!spin) return;
  spin.time += dt;
  if (spin.time < spin.duration) return;
  m.spin = null;
  if (spin.risk) {
    if (spin.won) { m.pending *= 2; m.risks++; notify(s, 'crazyBankOrRisk'); if (m.risks === 3) miniAction(s, 'alt'); }
    else { m.pending = 0; hurtCrazy(s, 10, 'crazyRiskLost'); s.cooldown = 650; }
  } else {
    m.reels = spin.result; m.risks = 0;
    const count = Math.max(...m.reels.map(v => m.reels.filter(x => x === v).length));
    if (count >= 2) { m.pending = count === 3 ? 32 : 18; notify(s, 'crazyBankOrRisk'); }
    else { hurtCrazy(s, 6, 'crazyMiss'); s.cooldown = 650; }
  }
}
function updatePairs(s, dt) {
  const m = s.mini;
  if (s.cooldown > 0 || m.roundLeft == null || s.catBlock > 0) return;
  m.roundLeft -= dt;
  if (m.roundLeft <= 0) {
    m.streak = 0; hurtCrazy(s, 5, 'crazyPairTimeout'); deal(s); s.cooldown = 250;
  }
}
function updateDodge(s, dt) {
  const m = s.mini, seconds = dt / 1000;
  m.dash = Math.max(0, m.dash - dt); m.dashReady = Math.max(0, m.dashReady - dt);
  let dx = Number(s.held.has('right')) - Number(s.held.has('left'));
  let dy = Number(s.held.has('down')) - Number(s.held.has('up'));
  if (dx || dy) m.target = null;
  else if (m.target) { dx = m.target.x - m.x; dy = m.target.y - m.y; }
  const length = Math.hypot(dx, dy), speed = m.dash > 0 ? 620 : 190;
  if (length) {
    const distance = m.target ? Math.min(length, speed * seconds) : speed * seconds;
    m.lastX = dx / length; m.lastY = dy / length;
    m.x += m.lastX * distance; m.y += m.lastY * distance;
  } else if (m.dash > 0) { m.x += m.lastX * speed * seconds; m.y += m.lastY * speed * seconds; }
  m.x = Math.max(22, Math.min(258, m.x)); m.y = Math.max(172, Math.min(494, m.y));
  m.spawn -= dt;
  if (m.spawn <= 0) {
    const horizontal = m.wave % 2 === 1;
    const low = horizontal ? 172 : 22, range = horizontal ? 322 : 236;
    const gap = low + 36 + s.random() * (range - 72), gapSize = 84 - s.phase * 8;
    // A visible lane warns before either attack enters the arena.
    m.hazards.push({ horizontal, gap, gapSize, age: 0, warn: 700, pos: horizontal ? 12 : 152, speed: 115 + s.phase * 25 });
    m.wave++; m.spawn += 1900 - s.phase * 200;
  }
  let hit = false;
  for (const h of m.hazards) {
    const oldPos = h.pos; h.age += dt;
    if (h.age < h.warn) continue;
    h.pos += h.speed * Math.min(dt, h.age - h.warn) / 1000;
    const along = h.horizontal ? m.x : m.y, across = h.horizontal ? m.y : m.x;
    if (along >= oldPos - 10 && along <= h.pos + 10 && Math.abs(across - h.gap) > h.gapSize / 2 - 6) hit = true;
  }
  m.hazards = m.hazards.filter(h => h.pos < (h.horizontal ? 280 : 520));
  if (hit && m.dash <= 0) { if (hurtCrazy(s, 5 + s.phase, 'crazyDodgeHit')) m.survival = 0; }
  m.survival += dt;
  if (m.survival >= 2000) { m.survival -= 2000; hitCrazyBoss(s, 8); }
}

function recoverBridge(s) {
  hurtCrazy(s, 20, 'crazyTopout');
  const g = s.bridge;
  if (g.sanding) for (let y = 0; y < 8 * SAND_SCALE; y++) g.sandGrid[y].fill(0);
  for (let y = 0; y < 8; y++) g.grid[y].fill(null);
  if (s.parkedPiece || g.active) {
    const saved = s.parkedPiece || g.active;
    s.parkedPiece = { ...saved, y: 0 }; restoreParkedPiece(s);
  } else { g.active = null; g.phase = 'resolving'; }
  g.pendingFlips = 0; s.resolveMs = 150;
}
function updateBridge(s, dt) {
  const g = s.bridge;
  if (g.phase === 'over') { recoverBridge(s); return; }
  if (g.phase === 'resolving') {
    s.resolveMs -= dt;
    if (s.resolveMs > 0) return;
    // Sand resolution needs several grain steps per frame; one 35ms step per
    // pixel used to stall each piece for several seconds in a 20s encounter.
    if (g.sanding) for (let i = 0; i < 3; i++) if (!sandFallStep(g.sandGrid)) break;
    const queueBefore = s.parkedPiece ? [...g.queue] : null;
    const step = pump(g);
    s.resolveMs = step?.type === 'clear' ? 140 : g.sanding ? 0 : 35;
    if (step?.type === 'spawn' && s.parkedPiece) {
      g.queue = queueBefore;
      restoreParkedPiece(s);
    }
    if (step?.type === 'clear') {
      hitCrazyBoss(s, ((step.sand ? 12 : 16 * step.rows.length) + Math.min(12, step.combo * 2)) * (feverActive(g) ? 3 : 1));
      if (step.combo >= 2) healCrazy(s, 2);
      if (feverActive(g)) for (const key of Object.keys(s.curses)) s.curses[key] = 0;
      else for (const cell of penaltyCells(step.cells)) if (cell.curse in s.curses) s.curses[cell.curse] = cell.curse === 'blind' ? 5000 : 20000;
    }
    if (step?.type === 'flip') flipGrid(g);
    if (step?.type === 'reward') { advanceCrazy(s, step.reward); return; }
    if (step?.type === 'over') recoverBridge(s);
    return;
  }
  if (!g.active) return;
  s.repeatMs += dt;
  if (s.repeatMs >= 100) {
    s.repeatMs = 0;
    if (s.held.has('left')) tryMove(g, s.curses.reverse > 0 ? 1 : -1, 0);
    if (s.held.has('right')) tryMove(g, s.curses.reverse > 0 ? -1 : 1, 0);
    if (s.held.has('down')) tryMove(g, 0, 1);
  }
  s.fallMs += dt;
  if (s.fallMs >= (640 - s.phase * 110) * (s.curses.rush > 0 ? .35 : 1)) { s.fallMs = 0; tryMove(g, 0, 1); }
  if (!fits(g.grid, g.active.type, g.active.rot, g.active.x, g.active.y + 1, g)) {
    s.lockMs += dt;
    if (s.lockMs >= 380) { lockActive(g); s.lockMs = 0; }
  } else s.lockMs = 0;
}
function updatePachinko(s, dt) {
  const m = s.mini, t = dt / 1000; m.pegSound = Math.max(0, (m.pegSound || 0) - dt);
  if (s.held.has('left')) m.aim = Math.max(20, m.aim - dt * 0.18);
  if (s.held.has('right')) m.aim = Math.min(260, m.aim + dt * 0.18);
  for (const b of m.balls) {
    b.vy = Math.min(370, b.vy + 370 * t); b.x += b.vx * t; b.y += b.vy * t;
    if (b.x < 10 || b.x > 270) { b.x = Math.max(10, Math.min(270, b.x)); b.vx *= -0.8; }
    for (const p of m.pegs) {
      const dx = b.x - p.x, dy = b.y - p.y, d = Math.hypot(dx, dy);
      if (d < 10) {
        const nx = d ? dx / d : 1, ny = d ? dy / d : 0;
        const dot = b.vx * nx + b.vy * ny;
        b.x = p.x + nx * 10.1; b.y = p.y + ny * 10.1;
        if (dot < 0) { b.vx -= 1.55 * dot * nx; b.vy -= 1.55 * dot * ny; if (m.pegSound <= 0) { notify(s, 'crazyPegSound'); m.pegSound = 85; } }
        b.vx = Math.max(-240, Math.min(240, b.vx + (dx >= 0 ? 10 : -10) + (s.random() - .5) * 70));
      }
    }
    if (b.y >= 505) {
      const bin = Math.min(4, Math.max(0, Math.floor(b.x / 56)));
      if (bin === 0 || bin === 4) healCrazy(s, 8);
      else if (bin === 2) hurtCrazy(s, 6, 'crazyMiss');
      else hitCrazyBoss(s, 22);
    }
  }
  m.balls = m.balls.filter(b => b.y < 505);
}

function catSmashBlocks(s) {
  const sand = s.mode === 'sand' && s.bridge.sandGrid;
  const grid = s.arcade?.grid || sand || s.bridge.grid;
  const occupied = [];
  for (let y = 0; y < grid.length; y++) for (let x = 0; x < grid[y].length; x++) if (grid[y][x]) occupied.push({ x, y });
  if (!occupied.length) return false;
  const center = occupied[Math.floor(s.random() * occupied.length)];
  const radius = sand ? SAND_SCALE : 1;
  const cells = [];
  for (let y = Math.max(0, center.y - radius); y <= Math.min(grid.length - 1, center.y + radius); y++) {
    for (let x = Math.max(0, center.x - radius); x <= Math.min(grid[y].length - 1, center.x + radius); x++) {
      if (!grid[y][x]) continue;
      cells.push({ x: sand ? x / SAND_SCALE : x, y: sand ? y / SAND_SCALE : y });
      grid[y][x] = sand ? 0 : null;
    }
  }
  s.cat.cells = cells;
  if (s.arcade) { s.arcade.cleared += cells.length; s.arcade.score += cells.length * 10; }
  // Directly removing cells does not activate their bombs or penalties.
  hitCrazyBoss(s, Math.min(12, sand ? Math.ceil(cells.length / (SAND_SCALE * SAND_SCALE)) * 2 : cells.length * 2));
  notify(s, 'crazyCatSmash');
  return true;
}
function catMischief(s) {
  if (s.arcade) for (const ball of s.arcade.balls) ball.vx = -ball.vx + 35;
  else if (s.mode === 'bridge' || s.mode === 'sand') {
    if (s.bridge.active) tryMove(s.bridge, s.random() < .5 ? -1 : 1, 0);
  } else s.catBlock = 700;
  notify(s, 'crazyCatSwipe');
}
function updateCat(s, dt) {
  s.catDue -= dt;
  s.catBlock = Math.max(0, s.catBlock - dt);
  if (!s.cat && s.catDue <= 0) {
    let action = catAction(s.random);
    if (s.mode === 'pusher' && action === 'player') action = 'heal';
    // There are no bricks to smash in the card/slot mini-games.
    if (action === 'blocks' && !s.arcade && !['bridge', 'sand'].includes(s.mode)) action = 'boss';
    s.cat = { time: 0, applied: false, action, gift: action === 'heal', dodged: false };
    notify(s, action === 'player' ? 'crazyCatPlayerWarning' : action === 'boss' ? 'crazyCatBossWarning' : action === 'heal' ? 'crazyCatGiftWarning' : action === 'blocks' ? 'crazyCatBlocksWarning' : 'crazyCatWarning');
  }
  if (!s.cat) return;
  s.cat.time += dt;
  if (s.cat.time >= 1200 && !s.cat.applied) {
    s.cat.applied = true;
    if (s.cat.action === 'heal') { healCrazy(s, 8); notify(s, 'crazyCatGift', 8); }
    else if (s.cat.action === 'boss') {
      const before = s.bossHp; hitCrazyBoss(s, 18); notify(s, 'crazyCatBossScratch', before - s.bossHp);
    } else if (s.cat.action === 'player') {
      if (s.cat.dodged) notify(s, 'crazyCatDodge');
      else hurtCrazy(s, 6, 'crazyCatPlayerScratch');
    } else if (s.cat.action === 'blocks') { if (!catSmashBlocks(s)) catMischief(s); }
    else catMischief(s);
  }
  if (s.cat.time >= 2400) { s.cat = null; s.catDue = 10000 - s.phase * 1000; }
}

const reactionApi = { hurt: hurtCrazy, hit: hitCrazyBoss, heal: healCrazy, emit: notify, advance: advanceCrazy };
export function updateCrazy(s, elapsed) {
  const dt = Math.max(0, Math.min(50, elapsed));
  if (s.cutscene) {
    s.cutscene.time += dt;
    if (s.cutscene.time >= s.cutscene.duration) finishCinematic(s);
    return s;
  }
  if (s.over) return s;
  if (s.transition) { s.transition.time += dt; if (s.transition.time >= 800) s.transition = null; }
  s.elapsed += dt; s.timeLeft -= dt; s.protection = Math.max(0, s.protection - dt);
  s.hitFlash = Math.max(0, s.hitFlash - dt); s.noticeTime = Math.max(0, s.noticeTime - dt);
  if (!s.actionReady && !s.held.has('action') && s.duration - s.timeLeft >= 500) s.actionReady = true;
  for (const key of Object.keys(s.curses)) s.curses[key] = Math.max(0, s.curses[key] - dt);
  const oldCooldown = s.cooldown; s.cooldown = Math.max(0, s.cooldown - dt);
  if (oldCooldown > 0 && s.cooldown === 0 && s.mini) {
    if (s.mode === 'slots') { s.mini.reels = [null, null, null]; s.mini.stop = 0; }
    else if (s.mode === 'cards' || (s.mode === 'mahjong' && s.mini.removed.length === 6)) deal(s);
    else if (s.mode === 'mahjong') s.mini.selected = [];
  }
  if (s.mode !== 'pusher' && !s.attackDone && s.duration - s.timeLeft >= 4500 && !s.cat) {
    s.attackDone = true; s.attack = { time: 3500 }; notify(s, 'crazyAttackWarning');
  }
  if (s.attack) {
    s.attack.time -= dt;
    if (s.attack.time <= 0) { s.attack = null; hurtCrazy(s, 4 + s.phase * 2, 'crazyBossAttack'); }
  }
  updateCat(s, dt);
  if (s.mode === 'bridge' || s.mode === 'sand') updateBridge(s, dt);
  else if (s.arcade) {
    const cleared = s.arcade.cleared;
    updateSession(s.arcade, dt);
    if (s.arcade.feverHits.length) {
      activateFever(s.bridge, s.arcade.feverHits); s.arcade.feverHits = [];
      for (const key of Object.keys(s.curses)) s.curses[key] = 0;
    }
    if (s.arcade.curseHits.length) {
      const cells = s.arcade.curseHits; s.arcade.curseHits = [];
      applyNoHoldCurse(s.bridge, cells);
      if (!feverActive(s.bridge)) for (const cell of penaltyCells(cells)) if (cell.curse in s.curses) s.curses[cell.curse] = cell.curse === 'blind' ? 5000 : 20000;
    }
    const hits = s.arcade.cleared - cleared;
    if (hits) hitCrazyBoss(s, hits * 4);
    if (s.arcade.over) {
      if (s.arcade.full) { hitCrazyBoss(s, 30); healCrazy(s, 6); }
      else hurtCrazy(s, 12, 'crazyBallLost');
      advanceCrazy(s);
    }
  } else if (s.mode === 'pachinko') updatePachinko(s, dt);
  else if (s.mode === 'tiger') updateTiger(s, dt);
  else if (s.mode === 'cards' || s.mode === 'mahjong') updatePairs(s, dt);
  else if (s.mode === 'dodge') updateDodge(s, dt);
  else if (GREED_ATTACKS.includes(s.mode)) updateReaction(s, dt, reactionApi);
  else if (s.mode === 'pusher') { updatePusher(s, dt, reactionApi); return s; }
  if (s.mini?.clock != null) s.mini.clock += dt;
  if (s.cutscene) return s;
  if (s.elapsed >= s.boss.limit && !s.over) {
    s.hp = 0; s.over = true; s.finishReason = 'crazyTimeout'; notify(s, 'crazyTimeout');
  } else if (s.timeLeft <= 0 && !s.over) {
    if (s.mode === 'tiger') {
      // Finish an in-flight wager before auto-banking; a last-second loss cannot be escaped.
      if (s.mini.spin) updateTiger(s, s.mini.spin.duration - s.mini.spin.time);
      if (s.mini.pending) { s.cooldown = 0; miniAction(s, 'alt'); }
    }
    if (!s.successes) hurtCrazy(s, 8, 'crazyTimeoutRound');
    advanceCrazy(s);
  }
  return s;
}
