// Second-form attacks and earned coin-pusher rewards use logical 280 × 560 coordinates.
export const GREED_ATTACKS = Object.freeze(['jump', 'coins', 'motion', 'vortex', 'roulette']);
export const FLYING_ATTACKS = Object.freeze(['coins', 'motion', 'vortex', 'roulette']);
export function createReaction(mode) {
  return { x: 140, y: mode === 'jump' ? 464 : 410, vy: 0, grounded: true, target: null,
    hazards: [], drops: [], spawn: 850, wave: 0, clock: 0, survival: 0,
    dash: 0, dashReady: 0, lastX: 0, lastY: -1, moving: false, jumped: 0 };
}
export function reactionInput(s, action, emit) {
  const m = s.mini;
  if (action !== 'action' || s.catBlock > 0) return;
  if (s.mode === 'jump') {
    if (m.grounded) { m.vy = -480; m.grounded = false; m.jumped++; emit(s, 'crazyJump'); }
  } else if (m.dashReady <= 0) { m.dash = 180; m.dashReady = 1400; emit(s, 'crazyDashSound'); }
}
export function reactionPoint(s, x, y) {
  s.mini.target = { x: Math.max(22, Math.min(258, x)), y: Math.max(180, Math.min(484, y)) };
}
const distanceLine = (x, y, a, b) => {
  const dx = b.x - a.x, dy = b.y - a.y, length = dx * dx + dy * dy;
  const t = Math.max(0, Math.min(1, ((x - a.x) * dx + (y - a.y) * dy) / (length || 1)));
  return Math.hypot(x - a.x - t * dx, y - a.y - t * dy);
};
function wave(s) {
  const m = s.mini, rand = s.random, speed = 210 + s.phase * 24;
  if (s.mode === 'jump') {
    const high = m.wave % 4 === 2;
    m.hazards.push({ kind: high ? 'high' : 'ground', x: 290, y: high ? 356 : 446,
      w: high ? 58 : 26, h: high ? 64 : 36, warn: 600, age: 0, vx: -speed });
  } else if (s.mode === 'roulette') {
    const angle = rand() * Math.PI, a = { x: 140 - Math.cos(angle) * 320, y: 330 - Math.sin(angle) * 320 }, b = { x: 140 + Math.cos(angle) * 320, y: 330 + Math.sin(angle) * 320 };
    m.hazards.push({ kind: 'laser', a, b, warn: 750, age: 0, fired: false });
  } else if (s.mode === 'motion') {
    m.hazards.push({ kind: 'motion', tone: m.wave % 2 ? 'orange' : 'blue', y: 160, warn: 850, age: 0, speed: 190 + s.phase * 22 });
  } else {
    const safe = Math.floor(rand() * 6);
    for (let i = 0; i < 6; i++) {
      if (i === safe) continue;
      m.hazards.push({ kind: 'coin', x: 34 + i * 42, y: 158, vx: s.mode === 'vortex' ? (140 - (34 + i * 42)) * .18 : 0,
        vy: 160 + s.phase * 24, warn: 600, age: 0 });
    }
    if (m.wave % 3 === 1) m.drops.push({ x: 34 + safe * 42, y: 160, vy: 100, life: 5000 });
  }
  m.wave++; m.spawn += s.mode === 'jump' ? 1450 - s.phase * 100 : s.mode === 'roulette' ? 1400 - s.phase * 100 : s.mode === 'motion' ? 1800 : 1500 - s.phase * 100;
}
export function updateReaction(s, dt, { hurt, hit, heal, emit }) {
  const m = s.mini, sec = dt / 1000;
  m.clock += dt; m.dash = Math.max(0, m.dash - dt); m.dashReady = Math.max(0, m.dashReady - dt);
  const oldX = m.x, oldY = m.y;
  let dx = Number(s.held.has('right')) - Number(s.held.has('left'));
  let dy = s.mode === 'jump' ? 0 : Number(s.held.has('down')) - Number(s.held.has('up'));
  if (dx || dy) m.target = null;
  else if (m.target) { dx = m.target.x - m.x; dy = s.mode === 'jump' ? 0 : m.target.y - m.y; }
  const length = Math.hypot(dx, dy), speed = m.dash > 0 ? 620 : 205;
  if (length) {
    const distance = m.target ? Math.min(length, speed * sec) : speed * sec;
    m.lastX = dx / length; m.lastY = dy / length; m.x += m.lastX * distance; m.y += m.lastY * distance;
  } else if (m.dash > 0) { m.x += m.lastX * speed * sec; m.y += m.lastY * speed * sec; }
  if (s.mode === 'jump') {
    if (!m.grounded) {
      m.vy += (s.held.has('action') && m.vy < 0 ? 900 : 1450) * sec;
      m.y += m.vy * sec;
      if (m.y >= 464) { m.y = 464; m.vy = 0; m.grounded = true; }
    }
  } else if (s.mode === 'vortex') {
    const nx = 140 - m.x, ny = 265 - m.y, len = Math.hypot(nx, ny) || 1;
    m.x += nx / len * (45 + s.phase * 8) * sec; m.y += ny / len * (45 + s.phase * 8) * sec;
  }
  m.x = Math.max(22, Math.min(258, m.x)); m.y = Math.max(180, Math.min(484, m.y));
  // Input, not involuntary pull, determines blue/orange movement conditions.
  m.moving = length > 0 && Math.hypot(m.x - oldX, m.y - oldY) > .1;
  m.spawn -= dt; if (m.spawn <= 0) wave(s);
  let collision = s.mode === 'vortex' && Math.hypot(m.x - 140, m.y - 265) < 22;
  for (const h of m.hazards) {
    h.age += dt; if (h.age < h.warn) continue;
    const step = Math.min(dt, h.age - h.warn) / 1000;
    if (h.kind === 'ground' || h.kind === 'high') {
      h.x += h.vx * step;
      if (m.x + 6 > h.x && m.x - 6 < h.x + h.w && m.y + 7 > h.y && m.y - 7 < h.y + h.h) collision = true;
    } else if (h.kind === 'coin') {
      const a = { x: h.x, y: h.y }; h.x += h.vx * step; h.y += h.vy * step;
      if (distanceLine(m.x, m.y, a, h) < 13) collision = true;
    } else if (h.kind === 'motion') {
      const y = h.y; h.y += h.speed * step;
      if (m.y >= y - 9 && m.y <= h.y + 9 && (h.tone === 'blue' ? !m.moving : m.moving)) collision = true;
    } else if (h.kind === 'laser' && h.age < h.warn + 250) {
      if (!h.fired) { h.fired = true; emit(s, 'crazyLaserSound'); }
      if (distanceLine(m.x, m.y, h.a, h.b) < 12) collision = true;
    }
  }
  m.hazards = m.hazards.filter(h => h.kind === 'laser' ? h.age < h.warn + 350 : (h.x ?? 0) > -80 && (h.y ?? 0) < 530);
  for (const drop of m.drops) {
    drop.y += drop.vy * sec; drop.life -= dt;
    if (Math.hypot(m.x - drop.x, m.y - drop.y) < 15) { drop.life = 0; heal(s, 3); emit(s, 'crazyCoinSound'); }
  }
  m.drops = m.drops.filter(d => d.life > 0 && d.y < 510);
  if (collision && m.dash <= 0 && hurt(s, 5 + s.phase, 'crazyDodgeHit')) m.survival = 0;
  m.survival += dt;
  if (m.survival >= 2000) { m.survival -= 2000; hit(s, 12); s.stats.counters++; }
}

export function createPusher(random) {
  return { aim: 140, clock: 0, stock: 8, pending: 0, collected: 0, risk: null, riskUsed: false,
    coins: Array.from({ length: 30 }, (_, i) => ({ x: 46 + i % 6 * 36 + (random() - .5) * 4, y: 292 + Math.floor(i / 6) * 33, vx: 0, vy: 0, green: i % 11 === 0 })), obstacles: [] };
}
export function pusherAction(s, action, { hit, heal, emit, advance }) {
  const m = s.mini;
  if (action === 'alt') {
    if (m.risk && !m.risk.win) m.pending = Math.floor(m.pending / 2);
    hit(s, m.pending); m.pending = 0; emit(s, 'crazyPusherBank'); advance(s); return;
  }
  if (action !== 'action' || s.cooldown > 0 || s.timeLeft <= 2000) return;
  if (m.stock > 0) {
    m.stock--; m.coins.push({ x: m.aim, y: 250, vx: 0, vy: 245, green: false }); s.cooldown = 280; emit(s, 'crazyCoinSound');
  } else if (!m.riskUsed && m.pending > 0) {
    m.riskUsed = true; m.stock = 4; s.timeLeft += 4000;
    m.risk = { time: 4000, win: s.random() < .6 }; m.obstacles = [{ x: 82, y: 367 }, { x: 198, y: 367 }]; emit(s, 'crazyPusherRisk');
  }
}
export function updatePusher(s, dt, api) {
  const m = s.mini, sec = dt / 1000; m.clock += dt;
  if (s.held.has('left')) m.aim = Math.max(30, m.aim - dt * .18);
  if (s.held.has('right')) m.aim = Math.min(250, m.aim + dt * .18);
  if (m.risk) { m.risk.time -= dt; if (m.risk.time <= 0) { if (!m.risk.win) m.pending = Math.floor(m.pending / 2); m.risk = null; api.emit(s, 'crazyPusherSettled'); } }
  const front = 260 + (Math.sin(m.clock / 500) + 1) * 28;
  for (const c of m.coins) {
    c.x += c.vx * sec; c.y += c.vy * sec; c.vx *= Math.exp(-4 * sec); c.vy *= Math.exp(-4 * sec);
    if (c.y < front + 9) { c.y = front + 9; c.vy = Math.max(c.vy, 35); }
    c.x = Math.max(27, Math.min(253, c.x));
  }
  for (let pass = 0; pass < 3; pass++) for (let a = 0; a < m.coins.length; a++) {
    const c = m.coins[a];
    for (const o of m.obstacles) { const dx = c.x - o.x, dy = c.y - o.y, d = Math.hypot(dx, dy) || 1; if (d < 24) { c.x += dx / d * (24 - d); c.y += dy / d * (24 - d); } }
    for (let b = a + 1; b < m.coins.length; b++) {
      const other = m.coins[b]; let dx = other.x - c.x, dy = other.y - c.y;
      if (Math.abs(dx) + Math.abs(dy) < .001) dy = 1;
      const d = Math.hypot(dx, dy);
      if (d >= 18) continue;
      const overlap = (18 - d) / 2, nx = dx / d, ny = dy / d;
      c.x -= nx * overlap; c.y -= ny * overlap; other.x += nx * overlap; other.y += ny * overlap;
      if (c.vy > other.vy) other.vy += (c.vy - other.vy) * .3;
    }
  }
  m.coins = m.coins.filter(c => {
    if (c.y < 465) return true;
    m.collected++; s.stats.coins++; if (c.green) api.heal(s, 3); else m.pending += 3;
    api.emit(s, 'crazyCoinSound'); return false;
  });
  if (s.timeLeft <= 0) pusherAction(s, 'alt', api);
}
