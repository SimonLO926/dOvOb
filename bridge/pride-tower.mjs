import { prideHud } from './pride-layout.mjs';
import { drawBabelFloor, drawMirrorSky, drawMirrorCrane } from './pride-tower-art.mjs';

export const TOWER_ID = 'pride-tower';
export function createPrideTower(s) {
  const designated = 1; // The half-health story always shatters the blue guard mirror.
  const mirror = s.mirrorWorld.mirrors[designated];
  if (mirror.broken) { mirror.broken = false; mirror.hp = 120; }
  const goal = 10 + Math.min(10, Math.floor(s.random() * 11));
  return { clock: 0, duration: s.difficulty === 'hard' ? 45000 : 55000, goal,
    designated, damagePerFloor: mirror.hp / goal, floors: 0, score: 0, hitQueue: 0, rewards: [], finished: false, failed: false,
    blocks: [{ x: 95, w: 90 }], hanging: { x: 95, w: 90 }, falling: null, imbalance: 0, feedback: '' };
}
export function prideTowerInput(s, action) {
  const m = s.mini;
  if (m.finished || m.failed || m.falling || action !== 'action') return;
  m.falling = { ...m.hanging, distance: 0, speed: 0 };
}
// Floors have equal height/density, so width is their mass. Work in tower-local coordinates.
export function prideTowerPhysics(m, clock = m.clock) {
  const base = m.blocks[0], origin = base.x + base.w / 2;
  const mass = m.blocks.reduce((sum, b) => sum + b.w, 0);
  const center = m.blocks.reduce((sum, b) => sum + (b.x + b.w / 2) * b.w, 0) / mass;
  const centerHeight = m.blocks.reduce((sum, b, i) => sum + i * 24 * b.w, 0) / mass;
  const offset = center - origin;
  const amplitude = m.floors * .9 * (1 + (m.imbalance || 0) / 45 + Math.abs(offset) / 45);
  const sway = Math.sin(clock * .002) * amplitude;
  const lean = offset / Math.max(24, m.floors * 24) * .8;
  return { offset, amplitude, sway, lean, effectiveOffset: offset + sway + lean * centerHeight,
    limit: base.w / 2, topShift: sway + lean * m.floors * 24 };
}
export function prideTowerTopX(m, clock = m.clock) {
  return m.blocks.at(-1).x + prideTowerPhysics(m, clock).topShift;
}
function collapsed(m) {
  const p = prideTowerPhysics(m);
  if (Math.abs(p.effectiveOffset) <= p.limit) return false;
  m.failed = true; m.feedback = '重心失衡 · 冧塔！'; return true;
}
export function updatePrideTower(s, dt) {
  const m = s.mini;
  if (m.finished || m.failed || collapsed(m)) return;
  const top = m.blocks.at(-1);
  if (!m.falling) {
    m.hanging.x = 140 - m.hanging.w / 2 + Math.sin(m.clock * .0035) * 88;
    return;
  }
  const b = m.falling;
  b.speed += 1200 * dt / 1000; b.distance += b.speed * dt / 1000;
  if (b.distance < 64) return;
  // The crane stays in world space while the entire supporting tower swings beneath it.
  const localX = b.x - prideTowerPhysics(m).topShift;
  const offset = localX - top.x;
  const left = Math.max(localX, top.x), right = Math.min(localX + b.w, top.x + top.w);
  if (right - left < 8) { m.failed = true; m.feedback = '跌落咗！等下一次半血重試'; return; }
  const grade = Math.abs(offset) <= 4 ? 'perfect' : Math.abs(offset) <= top.w * .3 ? 'good' : 'poor';
  // Buildings keep their full mass and overhang. Repeated offsets can move the whole
  // tower's center beyond the foundation even while every adjacent floor is supported.
  m.blocks.push({ x: grade === 'perfect' ? top.x : localX, w: b.w });
  m.imbalance = ((m.imbalance || 0) * m.floors + Math.abs(offset)) / (m.floors + 1);
  m.grade = grade; m.floors++;
  m.falling = null;
  if (collapsed(m)) return;
  m.score += 100; m.hitQueue++;
  m.feedback = `${{perfect: '完美！', good: '好！', poor: '差 · 小心對準！'}[grade]}指定鏡 −1 擊`;
  m.hanging = { x: 140 - m.blocks.at(-1).w / 2, w: m.blocks.at(-1).w };
  if (m.floors === m.goal) { m.finished = true; m.rewards.push(m.designated); m.feedback = '高塔完成 · 指定鏡碎裂！'; }
}
export function drawPrideTower(c, s, reduced = false) {
  const m = s.mini, v = s.mirrorWorld.mirrors[m.designated];
  c.save(); c.textAlign = 'center'; c.textBaseline = 'middle';
  drawMirrorSky(c, m.clock, reduced);
  const baseY = 436 + Math.max(0, m.floors - 8) * 24;
  c.save(); c.beginPath(); c.rect(0, 140, 280, 320); c.clip();
  const physics = prideTowerPhysics(m);
  // Tower motion is an essential timing cue, including with reduced decorative motion.
  const sway = physics.sway;
  c.save(); c.transform(1, 0, -physics.lean, 1, sway + physics.lean * baseY, 0);
  m.blocks.forEach((b, i) => drawBabelFloor(c, b.x, baseY - i * 24, b.w, i,
    { clock: m.clock, stress: sway + physics.lean * i * 24, reduced }));
  c.restore();
  if (!m.finished && !m.failed) {
    const b = m.falling || m.hanging, y = baseY - (m.floors + 1) * 24 - 64 + Math.min(64, m.falling?.distance || 0);
    drawMirrorCrane(c, b, y, !m.falling);
    drawBabelFloor(c, b.x, y, b.w, m.floors + 1);
  }
  c.restore();
  prideHud(c, { encounter: s, title: '巴別塔 · 半血試煉',
    status: `${Math.ceil(s.timeLeft / 1000)}秒 · ${m.floors}/${m.goal} 層 · ${m.score}分`,
    detail: `指定「${v.name}之鏡」`,
    hint: '等吊臂對準搖擺嘅塔，再放手！', elapsed: m.clock, feedback: m.feedback,
    controls: '點畫面 / 空白鍵 放層 · 每層打指定鏡一下' }); c.restore();
}
