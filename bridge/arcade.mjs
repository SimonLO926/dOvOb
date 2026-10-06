import { COLS, ROWS, brickCount, emptyGrid, hitBrick } from "./logic.mjs?v=1.2.25";

export const CELL = 28;
export const W = COLS * CELL;
export const H = ROWS * CELL;
export const BREAKOUT_EFFECTS = ["speed", "double", "triple", "wide", "narrow"];
export const BREAKOUT_DURATION = { speed: 8000, double: 12000, triple: 12000, wide: 10000, narrow: 8000 };
const MAX_BREAKOUT_BALLS = 12;

function syncBreakoutSpeed(session) {
  session.speed = session.progressSpeed * (session.effects.speed > 0 ? 2 : 1);
  for (const ball of [...session.balls, ...session.pendingBalls]) rescale(ball, session.speed);
}

export function breakoutEffectStatus(session) {
  if (session.kind !== "breakout") return [];
  return Object.entries(session.effects).filter(([, remaining]) => remaining > 0)
    .map(([kind, remaining]) => ({ kind, seconds: Math.ceil(remaining / 1000) }));
}

export function activateBreakoutEffect(session, kind, source) {
  if (session.kind !== "breakout" || !BREAKOUT_EFFECTS.includes(kind)) return;
  if (kind === "speed") {
    session.effects.speed = BREAKOUT_DURATION.speed;
    syncBreakoutSpeed(session);
  } else if (kind === "wide" || kind === "narrow") {
    session.effects.wide = 0;
    session.effects.narrow = 0;
    session.effects[kind] = BREAKOUT_DURATION[kind];
    session.paddleW = kind === "wide" ? 132 : 62;
    session.paddleX = Math.max(session.paddleW / 2, Math.min(W - session.paddleW / 2, session.paddleX));
  } else {
    session.effects.double = 0;
    session.effects.triple = 0;
    session.effects[kind] = BREAKOUT_DURATION[kind];
    const originals = session.balls.length ? [...session.balls, ...session.pendingBalls] : source ? [source] : [];
    for (const ball of originals) {
      const angle = Math.atan2(ball.vy, ball.vx);
      const offsets = kind === "double" ? [0.3] : [-0.3, 0.3];
      for (const offset of offsets) {
        if (session.balls.length + session.pendingBalls.length >= MAX_BREAKOUT_BALLS) break;
        const extra = makeBall(session, angle + offset, ball.x, ball.y);
        extra.effectBall = true;
        session.pendingBalls.push(extra);
      }
    }
  }
  session.effectEvents.push(kind);
}

function tickBreakoutEffects(session, dtMs) {
  for (const kind of BREAKOUT_EFFECTS) {
    const before = session.effects[kind];
    session.effects[kind] = Math.max(0, before - dtMs);
    if (!before || session.effects[kind]) continue;
    if (kind === "speed") syncBreakoutSpeed(session);
    else if (kind === "wide" || kind === "narrow") session.paddleW = 88;
    else {
      const survivors = session.balls.filter((ball) => !ball.effectBall);
      if (!survivors.length && session.balls.length) {
        const survivor = session.balls[0];
        survivor.effectBall = false;
        survivors.push(survivor);
      }
      session.balls = survivors;
    }
  }
}


export function brickWall(random = Math.random) {
  const grid = emptyGrid();
  const types = ["I", "O", "T", "S", "Z", "J", "L"];
  for (let y = 1; y <= 8; y += 1) {
    for (let x = 0; x < COLS; x += 1) {
      if (random() < 0.14) continue;
      grid[y][x] = {
        type: types[Math.floor(random() * types.length)],
        g: y * COLS + x + 1,
        bomb: random() < 0.08,
        reward: null,
        curse: null,
        sand: null,
      };
    }
  }
  return grid;
}

export function createSession(kind, grid, stage, random) {
  const speed = kind === "breakout"
    ? Math.min(520, 260 + (Math.max(1, stage) - 1) * 18)
    : Math.min(460, 220 + (Math.max(1, stage) - 1) * 16);
  if (kind === "pinball" && grid?.[0]?.length) {
    for (let y = ROWS - 6; y < ROWS; y += 1) {
      if (!grid[y]) continue;
      for (let x = 0; x < COLS; x += 1) grid[y][x] = null;
    }
  }
  return {
    kind,
    grid,
    stage: Math.max(1, stage),
    random,
    prep: 4000,
    baseSpeed: speed,
    progressSpeed: speed,
    effects: Object.fromEntries(BREAKOUT_EFFECTS.map((kind) => [kind, 0])),
    effectEvents: [],
    pendingBalls: [],
    speed,
    cleared: 0,
    streak: 0,
    score: 0,
    paddleX: W / 2,
    paddleW: 88,
    aim: -Math.PI / 2,
    chances: kind === "bbtan" ? 3 : 1,
    balls: kind === "pinball" ? [launcherBall()] : [],
    queueLeft: 0,
    queueTime: 0,
    shotElapsed: 0,
    playbackRate: 1,
    aiming: kind === "bbtan",
    launched: false,
    over: false,
    full: false,
    left: false,
    right: false,
    fire: false,
    flashes: [],
    curseHits: [],
    feverHits: [],
  };
}

function rescale(ball, speed) {
  const mag = Math.hypot(ball.vx, ball.vy) || 1;
  ball.vx = (ball.vx / mag) * speed;
  ball.vy = (ball.vy / mag) * speed;
}

function makeBall(session, angle, x, y) {
  return {
    x,
    y,
    vx: Math.cos(angle) * session.speed,
    vy: Math.sin(angle) * session.speed,
    r: 6,
    gravity: session.kind === "pinball",
  };
}

function award(session) {
  session.streak += 1;
  const mult = Math.min(8, 1 + Math.floor((session.streak - 1) / 4));
  session.score += 40 * session.stage * mult;
  session.cleared += 1;
  if (session.kind === "breakout" && session.cleared % 4 === 0) {
    session.progressSpeed = Math.min(session.baseSpeed * 3, session.progressSpeed * 1.12);
    syncBreakoutSpeed(session);
  }
}

function hit(session, x, y) {
  const removed = hitBrick(session.grid, x, y, session.random);
  for (const cell of removed) {
    award(session);
    session.flashes.push({ x: cell.x, y: cell.y, life: 200 });
    if (cell.curse && cell.curse !== "garbage" && cell.cause !== "blast") session.curseHits.push(cell);
    if (cell.type === "F") session.feverHits.push(cell);
  }
  return removed.length > 0;
}

function bounceOffCell(ball, x, y) {
  const cx = x * CELL + CELL / 2;
  const cy = y * CELL + CELL / 2;
  if (Math.abs(ball.x - cx) > Math.abs(ball.y - cy)) ball.vx = -ball.vx;
  else ball.vy = -ball.vy;
  ball.x += Math.sign(ball.vx || 1) * 3;
  ball.y += Math.sign(ball.vy || -1) * 3;
}

function collideBricks(session, ball) {
  const samples = [
    [ball.x, ball.y],
    [ball.x - ball.r, ball.y],
    [ball.x + ball.r, ball.y],
    [ball.x, ball.y - ball.r],
    [ball.x, ball.y + ball.r],
  ];
  for (const [px, py] of samples) {
    const x = Math.floor(px / CELL);
    const y = Math.floor(py / CELL);
    if (x < 0 || y < 0 || x >= COLS || y >= ROWS) continue;
    if (!session.grid[y][x]) continue;
    const cell = session.grid[y][x];
    const special = !!(cell.bomb || cell.reward || cell.curse || ["B", "X", "D", "R", "A", "C", "F", "G"].includes(cell.type));
    hit(session, x, y);
    bounceOffCell(ball, x, y);
    if (session.kind === "breakout" && special) {
      const index = Math.min(BREAKOUT_EFFECTS.length - 1, Math.floor(session.random() * BREAKOUT_EFFECTS.length));
      activateBreakoutEffect(session, BREAKOUT_EFFECTS[index], ball);
    }
    return;
  }
}

function movePaddle(session, dt) {
  const dir = (session.right ? 1 : 0) - (session.left ? 1 : 0);
  session.paddleX = Math.max(session.paddleW / 2, Math.min(W - session.paddleW / 2, session.paddleX + dir * 420 * dt));
}

function collidePaddle(session, ball) {
  const top = H - 30;
  const left = session.paddleX - session.paddleW / 2;
  const right = session.paddleX + session.paddleW / 2;
  if (ball.vy <= 0 || ball.y < top - 8 || ball.y > top + 16) return;
  if (ball.x < left || ball.x > right) return;
  const offset = (ball.x - session.paddleX) / (session.paddleW / 2);
  ball.vy = -Math.abs(ball.vy);
  ball.vx += offset * session.speed * 0.55;
  rescale(ball, session.speed);
  ball.y = top - ball.r - 1;
}

const PIN_RAIL = 18;
const PIN_PIVOT_Y = H - 56;
const FLIP_LEN = 102;
const FLIP_REST = 0.34;
const FLIP_UP = -0.46;

function tableWalls() {
  return [
    [PIN_RAIL, 0, PIN_RAIL, H],
    [W - PIN_RAIL, 0, W - PIN_RAIL, H],
  ];
}

export function flipper(side, raised) {
  const left = side === "left";
  const pivotX = left ? PIN_RAIL : W - PIN_RAIL;
  const angle = left ? (raised ? FLIP_UP : FLIP_REST) : (raised ? Math.PI - FLIP_UP : Math.PI - FLIP_REST);
  return {
    x1: pivotX,
    y1: PIN_PIVOT_Y,
    x2: pivotX + Math.cos(angle) * FLIP_LEN,
    y2: PIN_PIVOT_Y + Math.sin(angle) * FLIP_LEN,
  };
}

function bounceFlipper(ball, segment, kicking, previous) {
  const dx = segment.x2 - segment.x1;
  const dy = segment.y2 - segment.y1;
  const length = Math.hypot(dx, dy);
  const nx = Math.sign(dx) * dy / length;
  const ny = -Math.abs(dx) / length;
  const t = (ball.x - segment.x1) / dx;
  if (t < 0 || t > 1) return false;
  const yLine = segment.y1 + dy * t;
  const distance = (ball.y - yLine) * ny;
  const radius = ball.r + 6;
  const oldDistance = (previous.y - (segment.y1 + dy * (previous.x - segment.x1) / dx)) * ny;
  const rest = flipper(dx > 0 ? "left" : "right", false);
  const restY = rest.y1 + (rest.y2 - rest.y1) * t;
  const swept = kicking && ball.y >= yLine - radius && previous.y <= restY - ball.r + 6;
  const crossing = oldDistance >= radius && distance <= radius;
  if (!swept && !crossing && (distance < 0 || distance > radius)) return false;
  const incoming = ball.vx * nx + ball.vy * ny;
  if (!swept && incoming >= 0) return false;
  // Passive contacts lose energy and roll toward the drain; only a press adds energy.
  if (incoming < 0) {
    ball.vx -= 1.6 * incoming * nx;
    ball.vy -= 1.6 * incoming * ny;
  }
  if (kicking) {
    ball.vy = Math.min(ball.vy, -1080);
    ball.vx += Math.sign(dx) * 140;
  }
  ball.x += nx * Math.max(0, radius - distance + 0.5);
  ball.y += ny * Math.max(0, radius - distance + 0.5);
  return true;
}

function launcherBall() {
  return {
    x: W - PIN_RAIL - 11,
    y: H - 100,
    vx: 0,
    vy: 0,
    r: 7,
    gravity: true,
  };
}

function collideSegment(ball, segment, kicking) {
  const { x1, y1, x2, y2 } = segment;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len2 = dx * dx + dy * dy || 1;
  let along = ((ball.x - x1) * dx + (ball.y - y1) * dy) / len2;
  along = Math.max(0, Math.min(1, along));
  const qx = x1 + along * dx;
  const qy = y1 + along * dy;
  const dist = Math.hypot(ball.x - qx, ball.y - qy);
  if (dist > ball.r + 6) return false;
  const nx = dist ? (ball.x - qx) / dist : 0;
  const ny = dist ? (ball.y - qy) / dist : -1;
  const outwardY = ny > 0 ? ny : -ny;
  const dot = ball.vx * nx + ball.vy * ny;
  if (dot < 0) {
    ball.vx -= 2 * dot * nx;
    ball.vy -= 2 * dot * ny;
  }
  if (kicking) {
    ball.vy = Math.min(ball.vy, -720);
    ball.vx += nx * 80;
  }
  ball.x = qx + nx * (ball.r + 7);
  ball.y = qy - outwardY * (ball.r + 7);
  return true;
}

function stepBall(session, ball, dt) {
  const slices = session.kind === "pinball" ? 4 : session.kind === "breakout"
    ? Math.max(1, Math.ceil(Math.hypot(ball.vx, ball.vy) * dt / (ball.r * 0.8))) : 1;
  const step = dt / slices;
  for (let i = 0; i < slices; i += 1) {
    const previous = { x: ball.x, y: ball.y };
    if (ball.gravity) ball.vy += 900 * step;
    ball.x += ball.vx * step;
    ball.y += ball.vy * step;
    const inset = session.kind === "pinball" ? PIN_RAIL + ball.r : ball.r;
    if (ball.x < inset) {
      ball.x = inset;
      ball.vx = Math.abs(ball.vx);
    }
    if (ball.x > W - inset) {
      ball.x = W - inset;
      ball.vx = -Math.abs(ball.vx);
    }
    if (session.kind === "pinball") {
      bounceFlipper(ball, flipper("left", session.left), session.leftKick > 0, previous);
      bounceFlipper(ball, flipper("right", session.right), session.rightKick > 0, previous);
    }
    if (ball.y < ball.r) {
      ball.y = ball.r;
      ball.vy = Math.abs(ball.vy);
    }
    collideBricks(session, ball);
    if (session.kind === "breakout") collidePaddle(session, ball);
    if (session.kind === "pinball") {
      for (const wall of tableWalls()) {
        collideSegment(ball, { x1: wall[0], y1: wall[1], x2: wall[2], y2: wall[3] }, false);
      }
    }
  }
  const limit = session.kind === "pinball" ? 1200 : session.speed * 1.4;
  const mag = Math.hypot(ball.vx, ball.vy);
  if (mag > limit) {
    ball.vx = (ball.vx / mag) * limit;
    ball.vy = (ball.vy / mag) * limit;
  }
}

function keepBall(session, ball) {
  if (session.kind !== "pinball") return ball.y < H + 12;
  return ball.y < H + 12;
}

// Fast-forward the simulation, rather than altering ball velocities or scoring.
// Small physics steps preserve contacts at 2x / 3x playback.
export function updateSession(session, dtMs) {
  if (session.kind !== "bbtan" || session.over || session.prep > 0) return updateSessionStep(session, dtMs);
  if (session.aiming) {
    session.shotElapsed = 0; session.playbackRate = 1;
    if (!session.fire) return updateSessionStep(session, dtMs);
    updateSessionStep(session, 0);
  }
  let remaining = Math.max(0, Math.min(100, Number(dtMs) || 0));
  while (remaining > 0 && !session.over && !session.aiming) {
    const elapsed = session.shotElapsed || 0;
    const boundary = elapsed < 3000 ? 3000 : elapsed < 6000 ? 6000 : Infinity;
    const realStep = Math.min(remaining, 16, boundary - elapsed);
    session.playbackRate = elapsed >= 6000 ? 3 : elapsed >= 3000 ? 2 : 1;
    session.shotElapsed = elapsed + realStep;
    let simulated = realStep * session.playbackRate;
    while (simulated > 0 && !session.over && !session.aiming) {
      const step = Math.min(8, simulated);
      updateSessionStep(session, step); simulated -= step;
    }
    remaining -= realStep;
  }
  if (session.aiming || session.over) session.playbackRate = 1;
  return session;
}

function updateSessionStep(session, dtMs) {
  const dt = Math.min(0.032, dtMs / 1000);
  session.flashes = session.flashes.filter((flash) => {
    flash.life -= dtMs;
    return flash.life > 0;
  });
  if (session.over) return session;
  if (session.prep > 0) {
    session.prep -= dtMs;
    if (session.kind === "breakout") movePaddle(session, dt);
    if (session.kind === "bbtan") session.aim += ((session.right ? 1 : 0) - (session.left ? 1 : 0)) * 1.3 * dt;
    session.aim = Math.max(-Math.PI + 0.28, Math.min(-0.28, session.aim));
    return session;
  }
  if (session.kind === "breakout") tickBreakoutEffects(session, dtMs);
  if (session.kind === "breakout" && !session.launched) {
    const tilt = (session.random() - 0.5) * 0.7;
    session.balls.push(makeBall(session, -Math.PI / 2 + tilt, session.paddleX, H - 46));
    session.launched = true;
  }
  if (session.kind === "pinball" && !session.launched) {
    if (!session.balls.length) session.balls.push(launcherBall());
    const ball = session.balls[0];
    const seat = launcherBall();
    ball.x = seat.x;
    ball.y = seat.y;
    ball.vx = 0;
    ball.vy = 0;
    session.launched = true;
    ball.x = W - PIN_RAIL - ball.r - 4;
    ball.y = H - 100;
    ball.vx = -110;
    ball.vy = -1080;
    return session;
  }
  if (session.kind === "breakout") movePaddle(session, dt);
  if (session.kind === "bbtan") {
    if (session.aiming) session.aim += ((session.right ? 1 : 0) - (session.left ? 1 : 0)) * 1.3 * dt;
    session.aim = Math.max(-Math.PI + 0.28, Math.min(-0.28, session.aim));
    if (session.fire && session.aiming && session.chances > 0) {
      session.aiming = false;
      session.queueLeft = 3;
      session.queueTime = 0;
      session.chances -= 1;
    }
    session.fire = false;
    if (session.queueLeft > 0) {
      session.queueTime -= dtMs;
      if (session.queueTime <= 0) {
        session.balls.push(makeBall(session, session.aim, W / 2, H - 24));
        session.queueLeft -= 1;
        session.queueTime = 90;
      }
    }
  }
  if (session.kind === "pinball") {
    if (session.left && !session.wasLeft) session.leftKick = 120;
    if (session.right && !session.wasRight) session.rightKick = 120;
  }
  for (const ball of session.balls) stepBall(session, ball, dt);
  session.balls.push(...session.pendingBalls);
  session.pendingBalls = [];
  if (session.kind === "pinball") {
    session.leftKick = Math.max(0, (session.leftKick || 0) - dtMs);
    session.rightKick = Math.max(0, (session.rightKick || 0) - dtMs);
    session.wasLeft = session.left;
    session.wasRight = session.right;
  }
  session.balls = session.balls.filter((ball) => keepBall(session, ball));
  if (brickCount(session.grid) === 0) {
    session.full = true;
    session.over = true;
    return session;
  }
  if (session.kind === "breakout" && session.launched && session.balls.length === 0) session.over = true;
  if (session.kind === "pinball" && session.launched && session.balls.length === 0) session.over = true;
  if (session.kind === "bbtan" && !session.aiming && session.queueLeft === 0 && session.balls.length === 0) {
    session.shotElapsed = 0; session.playbackRate = 1;
    if (session.chances > 0) session.aiming = true;
    else session.over = true;
  }
  return session;
}

function paintBall(ctx, ball) {
  ctx.save();
  ctx.shadowColor = "rgba(10,132,255,.35)";
  ctx.shadowBlur = 10;
  const gloss = ctx.createRadialGradient(ball.x - ball.r * 0.35, ball.y - ball.r * 0.4, 1, ball.x, ball.y, ball.r);
  gloss.addColorStop(0, "#ffffff");
  gloss.addColorStop(0.42, "#d7ebff");
  gloss.addColorStop(1, "#0071e3");
  ctx.fillStyle = gloss;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function drawSession(ctx, session, ink, labels = {}) {
  for (const flash of session.flashes) {
    const age = 1 - Math.max(0, flash.life / 200);
    const cx = flash.x * CELL + CELL / 2;
    const cy = flash.y * CELL + CELL / 2;
    ctx.save();
    ctx.globalAlpha = Math.max(0, 1 - age);
    ctx.strokeStyle = "#ffd60a";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, CELL * (0.25 + age * 1.1), 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cx, cy, CELL * (0.45 * (1 - age)), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  if (session.kind === "breakout") {
    ctx.save();
    ctx.font = "bold 12px system-ui";
    ctx.textAlign = "center";
    const statuses = breakoutEffectStatus(session);
    statuses.forEach(({ kind, seconds }, i) => {
      const label = `${labels[kind] || kind} ${seconds}s`;
      const width = ctx.measureText(label).width + 16;
      const y = H - 64 - i * 22;
      ctx.fillStyle = "rgba(0, 0, 0, .72)";
      ctx.fillRect((W - width) / 2, y - 14, width, 20);
      ctx.fillStyle = kind === "narrow" || kind === "speed" ? "#ffd60a" : "#7ee0ff";
      ctx.fillText(label, W / 2, y);
    });
    ctx.restore();
    const x = session.paddleX - session.paddleW / 2;
    const y = H - 34;
    const gloss = ctx.createLinearGradient(x, y, x, y + 12);
    gloss.addColorStop(0, "#9bdcff");
    gloss.addColorStop(1, "#0071e3");
    ctx.save();
    ctx.shadowColor = "rgba(0,113,227,.4)";
    ctx.shadowBlur = 14;
    ctx.fillStyle = gloss;
    ctx.beginPath();
    ctx.roundRect(x, y, session.paddleW, 12, 8);
    ctx.fill();
    ctx.restore();
  }
  if (session.kind === "pinball") {
    ctx.save();
    ctx.fillStyle = "#d7e4f5";
    ctx.fillRect(0, 0, PIN_RAIL, H);
    ctx.fillRect(W - PIN_RAIL, 0, PIN_RAIL, H);
    ctx.fillStyle = "#7aa2d4";
    ctx.fillRect(PIN_RAIL - 4, 0, 4, H);
    ctx.fillRect(W - PIN_RAIL, 0, 4, H);
    ctx.lineCap = "round";
    ctx.lineWidth = 18;
    for (const side of ["left", "right"]) {
      const segment = flipper(side, side === "left" ? session.left : session.right);
      const gloss = ctx.createLinearGradient(segment.x1, segment.y1, segment.x2, segment.y2);
      gloss.addColorStop(0, "#9bdcff");
      gloss.addColorStop(1, "#0a66c2");
      ctx.strokeStyle = gloss;
      ctx.beginPath();
      ctx.moveTo(segment.x1, segment.y1);
      ctx.lineTo(segment.x2, segment.y2);
      ctx.stroke();
      ctx.fillStyle = ink;
      ctx.beginPath();
      ctx.arc(segment.x1, segment.y1, 7, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
  if (session.kind === "bbtan" && session.aiming) {
    const x2 = W / 2 + Math.cos(session.aim) * 92;
    const y2 = H - 24 + Math.sin(session.aim) * 92;
    ctx.save();
    ctx.strokeStyle = "rgba(0,113,227,.85)";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 6]);
    ctx.beginPath();
    ctx.moveTo(W / 2, H - 24);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#0071e3";
    ctx.beginPath();
    ctx.arc(W / 2, H - 24, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    const left = session.chances;
    for (let i = 0; i < 3; i += 1) {
      ctx.beginPath();
      ctx.fillStyle = i < left ? "#0071e3" : "rgba(0,113,227,.2)";
      ctx.arc(18 + i * 16, H - 18, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  if (session.kind === "bbtan" && !session.aiming && session.playbackRate > 1 && !session.over) {
    ctx.save(); ctx.font = 'bold 14px sans-serif'; ctx.textAlign = "center";
    ctx.fillStyle = "rgba(0,0,0,.75)"; ctx.fillRect(W / 2 - 34, H - 48, 68, 24);
    ctx.fillStyle = "#ffd56a"; ctx.fillText(`▶▶ ×${session.playbackRate}`, W / 2, H - 31); ctx.restore();
  }
  for (const ball of session.balls) paintBall(ctx, ball);
}
