import { avatar, path } from './pride-visuals.mjs';
import { drawBabelFloor, drawMirrorSky } from './pride-tower-art.mjs';
import { prideHud } from './pride-layout.mjs';

export const PRIDE_ESCAPE_ID = 'pride-escape';
export const ESCAPE_GOAL = 100;
export const PRIDE_ESCAPE_PHYSICS=Object.freeze({normal:Object.freeze({gravity:760,maxFall:370,beltSpeed:70}),hard:Object.freeze({gravity:920,maxFall:430,beltSpeed:90})});
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
export function createPrideEscape({ difficulty = 'normal', random = Math.random } = {}) {
  const hard = difficulty === 'hard';
  const platforms = [{ floor: 0, x: 87, y: 240, w: 106, kind: 'stone', stood: 0 }];
  for (let floor = 1; floor <= ESCAPE_GOAL; floor++) {
    const last = platforms.at(-1), width = (hard ? 54 : 78) + Math.floor(random() * (hard ? 56 : 78));
    const center = clamp(last.x + last.w/2 + (floor % 2 ? 1 : -1) * (38 + random() * 24), 16 + width/2, 264 - width/2);
    const chance = random(), kind = floor === ESCAPE_GOAL ? 'stone' : chance < .2 ? 'crumble' : chance < .36 && last.kind !== 'spring' ? 'spring' : chance >= .36 && chance < .52 ? 'conveyor' : 'stone';
    platforms.push({ floor, x: center-width/2, y: 240 + floor * 60, w: floor === ESCAPE_GOAL ? 248 : width,
      kind, belt:kind==='conveyor'?(random()<.5?-1:1):0, stood: 0, collapsed: false, bounceCooldown: 0, spikes: kind === 'stone' && floor < ESCAPE_GOAL && floor % (hard ? 5 : 7) === 0 });
  }
  platforms.at(-1).x = 16;
  return { difficulty, elapsed: 0, timeLeft: hard ? 105000 : 120000, x: 140, y: 232, vy: 0, camera: 0,
    floor: 0, lives: hard ? 2 : 3, platforms, safe: platforms[0], checkpoint: platforms[0], on: platforms[0], status: 'playing', targetX: null, drop: 0,
    protection: 0, healedFloors: new Set(), healQueue: 0, score: 0, feedback: '' };
}
export function prideEscapeInput(m, action) {
  if (m.status !== 'playing') return;
  if (action === 'action' || action === 'down') { m.drop = 160; m.y += 10; m.vy = 100; m.on = null; }
}
export function prideEscapePoint(m, x) { if (m.status === 'playing') m.targetX = clamp(x, 20, 260); }
function mistake(m, message) {
  if (m.protection > 0) return;
  m.lives--; m.feedback = message; m.targetX = null; m.drop = 0;
  if (!m.lives) { m.status = 'lost'; return; }
  m.safe = m.checkpoint; m.on = m.safe;
  m.x = m.safe.x + m.safe.w * .25; m.y = m.safe.y - 8; m.vy = 0;
  m.camera = m.safe.y - 240; m.protection = 900;
}
export function updatePrideEscape(m, elapsed, held = new Set()) {
  if (m.status !== 'playing') return m.status;
  let remaining = Number.isFinite(elapsed) ? clamp(elapsed, 0, 100) : 0;
  while (remaining > 0 && m.status === 'playing') {
    const dt = Math.min(16, remaining), sec = dt / 1000, physics=PRIDE_ESCAPE_PHYSICS[m.difficulty]; remaining -= dt;
    m.elapsed += dt; m.timeLeft = Math.max(0, m.timeLeft - dt);
    m.drop = Math.max(0, m.drop - dt); m.protection = Math.max(0, m.protection - dt);
    for (const p of m.platforms) p.bounceCooldown = Math.max(0, (p.bounceCooldown || 0)-dt);
    let dx = Number(held.has('right')) - Number(held.has('left'));
    if (dx) m.targetX = null;
    else if (m.targetX != null) dx = clamp((m.targetX - m.x) / (190 * sec || 1), -1, 1);
    const belt=m.on?.kind==='conveyor'&&!m.drop&&m.vy===0?m.on.belt*physics.beltSpeed:0;
    m.x = clamp(m.x + (dx * 190 + belt) * sec, 20, 260);
    const previous = m.y, previousOn = m.on; m.on = null;
    m.vy = Math.min(physics.maxFall, m.vy + physics.gravity * sec); m.y += m.vy * sec;
    if (!m.drop) for (const p of m.platforms) {
      if (!p.collapsed && m.vy>=0 && p.y-m.camera<=460 && previous + 8 <= p.y && m.y + 8 >= p.y && m.x >= p.x - 3 && m.x <= p.x + p.w + 3) {
        m.y = p.y - 8; m.vy = 0; m.safe = p; m.on = p;
        if (p.kind === 'stone') m.checkpoint = p;
        if(p.kind==='conveyor'&&previousOn!==p)m.feedback=p.belt<0?'傳送帶 ← · 方向鍵抵抗':'傳送帶 → · 方向鍵抵抗';
        if (p.floor > m.floor) {
          m.floor = p.floor; m.score += 100;
          const every = 10;
          if (p.floor && p.floor % every === 0 && !m.healedFloors.has(p.floor)) { m.healedFloors.add(p.floor); m.healQueue += 4; }
        }
        if (p.floor === ESCAPE_GOAL) { m.status = 'won'; m.feedback = '成功逃離傲慢之塔！'; break; }
        if (p.spikes && Math.abs(m.x - (p.x + p.w * .75)) < 13) mistake(m, '避開尖刺，繼續往下！');
        if (p.kind === 'crumble') {
          p.stood += dt;
          if (p.stood >= (m.difficulty === 'hard' ? 750 : 1000)) { p.collapsed = true; m.on = null; m.vy = 80; m.feedback = '石台碎裂！'; }
        }
        if (p.kind === 'spring' && previousOn !== p && !p.bounceCooldown) {
          m.vy = m.difficulty === 'hard' ? -270 : -240; m.on = null; p.bounceCooldown = 950; m.feedback = '彈跳石台 · 移向下一層';
        }
        break;
      }
    }
    m.camera += Math.max(m.difficulty === 'hard' ? 65 : 54, Math.min(m.difficulty === 'hard' ? 145 : 125, (m.y-m.camera-330)*3)) * sec;
    if (m.y - m.camera < 153 || m.y-m.camera>472 || m.y > m.safe.y + 230) mistake(m, '失足！搵下一層落腳');
    if (!m.timeLeft && m.status !== 'won') { m.status = 'lost'; m.feedback = '未到出口，紅鏡即將復甦…'; }
  }
  return m.status;
}
export function drawPrideEscape(c, m, {reducedMotion=false}={}) {
  c.save(); drawMirrorSky(c, m.elapsed, true);
  c.save(); c.beginPath(); c.rect(8, 140, 264, 320); c.clip();
  for (const p of m.platforms) {
    const y = p.y - m.camera; if (y < 118 || y > 480 || p.collapsed) continue;
    drawBabelFloor(c, p.x, y, p.w, p.floor, { reduced: true });
    if(p.kind==='crumble'){
      c.strokeStyle='#f3a077';c.lineWidth=2;c.beginPath();c.moveTo(p.x+p.w*.45,y+1);c.lineTo(p.x+p.w*.36,y+9);c.lineTo(p.x+p.w*.56,y+15);c.lineTo(p.x+p.w*.5,y+22);c.stroke();
      const fraction=Math.min(1,p.stood/(m.difficulty==='hard'?750:1000));c.fillStyle='#ff947b';c.fillRect(p.x,y-3,p.w*fraction,2);
    }
    if(p.kind==='spring'){
      c.strokeStyle='#7ee8d0';c.lineWidth=2;const x=p.x+p.w/2;
      c.beginPath();c.moveTo(x-12,y-2);for(let i=0;i<6;i++)c.lineTo(x+(i%2?10:-10),y-14+i*2);c.lineTo(x+12,y-2);c.stroke();
      path(c,[[x-5,y-19],[x,y-25],[x+5,y-19]],null,'#abffe2');
    }
    if(p.kind==='conveyor'){
      c.save();c.beginPath();c.rect(p.x,y,p.w,22);c.clip();
      c.fillStyle='#263a66';c.fillRect(p.x+2,y+1,p.w-4,5);c.strokeStyle='#9edcff';c.lineWidth=1.5;
      const offset=reducedMotion?0:(m.elapsed*.025*p.belt)%14;
      for(let x=p.x-14+offset;x<p.x+p.w+14;x+=14){const sign=p.belt;c.beginPath();c.moveTo(x-sign*3,y+1);c.lineTo(x+sign*2,y+3.5);c.lineTo(x-sign*3,y+6);c.stroke();}
      for(const x of [p.x+5,p.x+p.w-5]){c.fillStyle='#aee8ff';c.beginPath();c.arc(x,y+4,2,0,Math.PI*2);c.fill();}c.restore();
    }
    if (p.spikes) for (let i = 0; i < 3; i++) path(c, [[p.x+p.w*.75-12+i*8,y],[p.x+p.w*.75-8+i*8,y-10],[p.x+p.w*.75-4+i*8,y]], '#ce586b', '#f8c995');
    if (p.floor && p.floor % 10 === 0 && !m.healedFloors.has(p.floor)) avatar(c, p.x+12,y-14);
    if (p.floor === ESCAPE_GOAL) { c.fillStyle='#f8d991'; c.fillRect(129,y-41,22,41); c.fillStyle='#241b32';c.fillRect(133,y-36,14,36); }
  }
  if (!m.protection || Math.floor(m.elapsed/100)%2) avatar(c, m.x, m.y-m.camera);
  c.fillStyle='#9e5863';for(let x=8;x<272;x+=12)path(c,[[x,140],[x+6,151],[x+12,140]],'#9e5863');
  c.restore();
  prideHud(c, { plain:true, title: '逃離傲慢之塔', status: `${m.floor}/${ESCAPE_GOAL} 層 · ${Math.ceil(m.timeLeft/1000)}秒`, detail: `機會 ${m.lives}`,
    elapsed: m.elapsed, hint: '裂紋碎 · 綠色彈跳 · 藍色傳送', feedback: m.feedback, controls: '左右移動 · 空白鍵／下鍵 下降', touch: '下到 100 層才能逃離' });
  c.restore();
}
