// Shared, transparent feedback for accepted damage. All coordinates are in the
// original 280px board space; the overlay scales with that board, not the screen.
export const COMBAT_EFFECT_TIMING = Object.freeze({ flight: 280, impact: 260, player: 420 });
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const point = (p, height) => p && Number.isFinite(p.x) && Number.isFinite(p.y)
  ? { x: clamp(p.x, 18, 262), y: clamp(p.y, 158, height - 64) } : null;

export function combatLayout(s, { player, height: visibleHeight } = {}) {
  const envy = s?.sin === 'envy' || s?.preview === true && !s?.config, sin = envy ? 'envy' : s?.config?.id;
  const blocks = ['bridge', 'sand'].includes(s?.mode);
  const height = Number.isFinite(visibleHeight) && visibleHeight > 0 ? visibleHeight : blocks ? 720 : 560;
  const plain = s?.mode === 'pride-escape' || envy && ['capture', 'chase'].includes(s?.mode);
  const boss = !plain ? { x: 140, y: sin === 'envy' ? blocks ? 77 : 57 : sin === 'pride' && !blocks && s.mode.startsWith('pride-') ? 40 : 68 } : null;
  const m = envy ? s?.round : s?.mini;
  let location = player;
  if (!location && m && Number.isFinite(m.x) && Number.isFinite(m.y)) {
    location = { x: m.x, y: m.y };
    if (sin === 'pride' && s.mode === 'pride-escape') location.y -= m.camera;
    else if (sin === 'pride' && s.mode === 'pride-doodle') location.y -= m.camera + 100;
    else if (sin === 'pride') {
      if (s.mode === 'pride-mirror-duel') location.x = 280 - location.x;
      location.y -= (m.jump || 0) / 100;
      location.y = 140 + (location.y - 140) * 320 / 370;
    }
  }
  // Board / puzzle feedback starts in the play area, clear of its HP and hints.
  location = point(location, height) || { x: 140, y: Math.min(blocks ? 608 : 408, height - 100) };
  return { height, boss, player: location, color: sin === 'greed' ? '#ffe29b' : sin === 'pride' ? '#e9c3ff' : '#dfffc7' };
}

function snapshot(s) {
  return {
    damage: Math.max(0, Number(s?.stats?.damage) || 0),
    taken: Math.max(0, Number(s?.stats?.damageTaken) || 0),
    redRound: s?.mode === 'pride-red-survival' ? s.mini : null,
    redDamage: s?.mode === 'pride-red-survival' ? Math.max(0, Number(s.mini?.damage) || 0) : 0,
    lifeRound: ['pride-escape', 'pride-mirror-duel'].includes(s?.mode) ? s.mini : null,
    lives: ['pride-escape', 'pride-mirror-duel'].includes(s?.mode) ? s.mini?.lives : null,
  };
}
export function createCombatEffects() {
  return { encounter: null, previous: null, flights: [], playerHit: null, layout: null, serial: 0 };
}
export function resetCombatEffects(fx, s = null) {
  fx.encounter = s; fx.previous = snapshot(s); fx.flights = []; fx.playerHit = null;
  fx.layout = s ? combatLayout(s) : null; fx.serial = 0;
  return fx;
}
export function updateCombatEffects(fx, s, dt, { paused = false, visible = true, reducedMotion = false, layout = combatLayout(s) } = {}) {
  if (!s || fx.encounter !== s) return resetCombatEffects(fx, s);
  const next = snapshot(s), before = fx.previous;
  fx.previous = next;
  if (!visible || s.scene || s.cutscene) {
    fx.flights = []; fx.playerHit = null; fx.layout = layout; return fx;
  }
  // Consuming the snapshot while paused prevents delayed bursts on resume.
  if (paused) return fx;
  const ms = clamp(Number(dt) || 0, 0, 50);
  if (fx.layout?.height !== layout.height || !layout.boss) fx.flights = [];
  fx.layout = layout;
  fx.flights = fx.flights.filter(f => (f.age += ms) < f.flight + COMBAT_EFFECT_TIMING.impact);
  if (fx.playerHit && (fx.playerHit.age += ms) >= COMBAT_EFFECT_TIMING.player) fx.playerHit = null;
  const mainDamage = next.damage > before.damage;
  // Red round damage is accepted against its independent, time-locked bar;
  // a shot rejected at the final locked HP does not increment this counter.
  const redDamage = before.redRound && before.redRound.damage > before.redDamage;
  if ((mainDamage || redDamage) && layout.boss) {
    fx.serial++;
    fx.flights.push({ age: 0, flight: reducedMotion ? 0 : COMBAT_EFFECT_TIMING.flight,
      from: { ...layout.player }, to: { ...layout.boss }, side: fx.serial % 2 ? 22 : 258,
      color: layout.color });
    // Several bullets accepted together share a cue, keeping the arena readable.
    fx.flights = fx.flights.slice(-8);
  }
  const lostLife = before.lifeRound && before.lifeRound.lives < before.lives;
  if (next.taken > before.taken || lostLife) fx.playerHit = { age: 0, at: { ...layout.player } };
  return fx;
}

function along(f, t) {
  const u = 1 - t;
  return { x: u * u * f.from.x + 2 * u * t * f.side + t * t * f.to.x,
    y: u * u * f.from.y + 2 * u * t * (f.to.y + 65) + t * t * f.to.y };
}
function diamond(c, x, y, size, color) {
  c.fillStyle = color; c.beginPath(); c.moveTo(x, y - size); c.lineTo(x + size, y);
  c.lineTo(x, y + size); c.lineTo(x - size, y); c.closePath(); c.fill();
}
function corners(c, x, y, w, h, length, color, width = 3) {
  c.strokeStyle = color; c.lineWidth = width;
  for (const [px, py, dx, dy] of [[x,y,1,1],[x+w,y,-1,1],[x,y+h,1,-1],[x+w,y+h,-1,-1]]) {
    c.beginPath(); c.moveTo(px + dx * length, py); c.lineTo(px, py); c.lineTo(px, py + dy * length); c.stroke();
  }
}
export function drawCombatEffects(c, fx, { reducedMotion = false } = {}) {
  const h = c.canvas.height;
  c.clearRect(0, 0, c.canvas.width, h);
  c.save(); c.imageSmoothingEnabled = false;
  for (const f of fx.flights) {
    if (!reducedMotion && f.flight && f.age < f.flight) {
      const t = f.age / f.flight, p = along(f, t);
      c.strokeStyle = f.color; c.lineWidth = 2; c.globalAlpha = .7;
      c.beginPath();
      for (let i = 0; i <= 4; i++) {
        const q = along(f, Math.max(0, t - .13 + i * .0325));
        c[i ? 'lineTo' : 'moveTo'](q.x, q.y);
      }
      c.stroke(); c.globalAlpha = 1;
      diamond(c, p.x, p.y, 4, f.color); diamond(c, p.x, p.y, 1.5, '#ffffff');
      continue;
    }
    const progress = clamp((f.age - (reducedMotion ? 0 : f.flight)) / COMBAT_EFFECT_TIMING.impact, 0, 1);
    c.globalAlpha = (1 - progress) * .9;
    if (reducedMotion) {
      // Static brackets are gentle but still mark exactly the existing head.
      corners(c, f.to.x - 21, f.to.y - 18, 42, 36, 8, f.color, 2);
    } else {
      const r = 12 + progress * 17;
      c.strokeStyle = f.color; c.lineWidth = 2; c.beginPath(); c.arc(f.to.x, f.to.y, r, 0, Math.PI * 2); c.stroke();
      for (let i = 0; i < 6; i++) {
        const a = i * Math.PI / 3 + .3;
        diamond(c, f.to.x + Math.cos(a) * r, f.to.y + Math.sin(a) * r, 2, i % 2 ? f.color : '#fff6dc');
      }
      diamond(c, f.to.x, f.to.y, 5 * (1 - progress), '#fff6dc');
    }
  }
  if (fx.playerHit) {
    const progress = fx.playerHit.age / COMBAT_EFFECT_TIMING.player, at = fx.playerHit.at;
    c.globalAlpha = (1 - progress) * .9;
    // Strong static red arena corners, never a full-screen opaque flash or shake.
    corners(c, 8, 150, 264, h - 198, 26, '#ff546d', 4);
    c.globalAlpha = (1 - progress) * .95;
    const r = reducedMotion ? 19 : 13 + progress * 17;
    corners(c, at.x - r, at.y - r, r * 2, r * 2, 7, '#fff0cd', 2);
    c.strokeStyle = '#ff546d'; c.lineWidth = 3; c.beginPath(); c.arc(at.x, at.y, r + 3, 0, Math.PI * 2); c.stroke();
  }
  c.restore();
}

export function createCombatOverlay(board, id = 'combat-effects') {
  const canvas = board.ownerDocument.createElement('canvas');
  canvas.width = 280;
  canvas.id = id; canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, { position: 'absolute', inset: '0', width: '100%', height: '100%',
    pointerEvents: 'none', zIndex: '3', imageRendering: 'pixelated' });
  board.after(canvas);
  return canvas;
}
