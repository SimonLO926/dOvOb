import { drawBabelFloor, drawMirrorSky } from '../pride-tower-art.mjs';
import { state, dispose, frame } from './common.mjs';
import { avatar, path } from '../pride-visuals.mjs';
export { dispose };
export const id = 'pride-doodle';
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export function init(options = {}) {
  const s = state(options, 32000, 26000);
  Object.assign(s, { x: 140, y: 430, vy: -340, camera: 0, height: 0, goal: s.difficulty === 'hard' ? 1200 : 900,
    held: new Set(), platforms: [{ x: 105, y: 460, w: 70, landed: true }], shots: [], fire: 0, targetX: null });
  extend(s); return s;
}
function extend(s) {
  while (s.platforms.at(-1).y > s.camera - 120) {
    const last = s.platforms.at(-1), x = clamp(last.x + (s.random() - .5) * 130, 12, 198);
    s.platforms.push({ x, y: last.y - 62, w: 70, enemy: s.platforms.length % 5 === 0 });
  }
}
export function input(s, action) {
  if (s.disposed || s.status !== 'playing') return;
  if (action === 'left' || action === 'right') s.targetX = clamp(s.x + (action === 'left' ? -42 : 42), 12, 268);
  if (action === 'action' && !s.fire) { s.shots.push({ x: s.x, y: s.y }); s.fire = 220; }
}
export function point(s, x, y) {
  if (s.disposed || s.status !== 'playing' || x < 0 || x > 280 || y < 0 || y > 560) return;
  s.targetX = clamp(x, 12, 268); if (y < 220) input(s, 'action');
}
export function update(s, elapsed) {
  if (s.disposed || s.status !== 'playing') return;
  let remaining = Number.isFinite(elapsed) ? Math.max(0, elapsed) : 0;
  while (remaining > 0 && s.status === 'playing') {
    const dt = Math.min(16, remaining), sec = dt / 1000; remaining -= dt;
    s.elapsed += dt;
    s.timeLeft = Math.max(0, s.timeLeft - dt); s.fire = Math.max(0, s.fire - dt);
    let dx = Number(s.held.has('right')) - Number(s.held.has('left'));
    if (dx) s.targetX = null;
    else if (s.targetX != null) dx = clamp((s.targetX - s.x) / (170 * sec || 1), -1, 1);
    s.x = clamp(s.x + dx * 170 * sec, 12, 268);
    const oldY = s.y; s.vy += 700 * sec; s.y += s.vy * sec;
    for (const shot of s.shots) {
      shot.y -= 430 * sec;
      for (const p of s.platforms) if (p.enemy && Math.hypot(shot.x - (p.x + p.w / 2), shot.y - (p.y - 13)) < 20) {
        p.enemy = false; shot.dead = true; s.score += 100; s.feedback = '反攻命中 +100'; break;
      }
    }
    s.shots = s.shots.filter(b => !b.dead && b.y > s.camera - 30);
    for (const p of s.platforms) {
      if (p.enemy && Math.hypot(s.x - (p.x + p.w / 2), s.y - (p.y - 13)) < 18) { s.status = 'lost'; s.feedback = '撞到幻影！空白鍵 可向上反攻'; break; }
      if (s.vy > 0 && oldY + 8 <= p.y && s.y + 8 >= p.y && s.x >= p.x - 5 && s.x <= p.x + p.w + 5) {
        s.y = p.y - 8; s.vy = -340;
        if (!p.landed) { p.landed = true; s.score += 100; }
        break;
      }
    }
    s.height = Math.max(s.height, 430 - s.y); s.camera = Math.min(s.camera, s.y - 280);
    extend(s); s.platforms = s.platforms.filter(p => p.y < s.camera + 590);
    if (s.status === 'playing' && s.height >= s.goal) { s.status = 'won'; s.feedback = '登上傲慢之塔！'; }
    else if (!s.timeLeft || s.y > s.camera + 565) s.status = 'lost';
  }
}
export function render(c, s, encounter) {
  c.save(); frame(c, s, '爬塔', '左右移動自動跳 · 空白鍵 向上反攻', 'links', { encounter, status: `${Math.floor(s.height)}/${s.goal} 米`, controls: '左右移動 · 空白鍵 向上反攻', touch: '點左右移動 · 點上方射擊' });
  c.save(); c.beginPath(); c.rect(8, 140, 264, 320); c.clip();
  drawMirrorSky(c,s.elapsed,true);
  const screenY = y => y - s.camera - 100;
  c.strokeStyle = '#b8976355'; c.lineWidth = 1;
  for (let y = 115; y < 460; y += 20) { c.beginPath(); c.moveTo(8, y); c.lineTo(272, y); c.stroke(); }
  for (const p of s.platforms) {
    const y = screenY(p.y); drawBabelFloor(c,p.x,y,p.w,Math.floor((460-p.y)/62),{reduced:true});
    if (p.enemy) path(c, [[p.x+35,y-27],[p.x+48,y-13],[p.x+35,y-2],[p.x+22,y-13]], '#bd8bea', '#fff');
  }
  c.fillStyle = '#ffdf86'; for (const b of s.shots) c.fillRect(b.x - 2, screenY(b.y) - 4, 4, 9);
  avatar(c, s.x, screenY(s.y), '#ff5178'); c.restore(); c.restore();
}
