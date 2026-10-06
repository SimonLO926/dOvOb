import { avatar, path } from './pride-visuals.mjs';
import { prideHud, beginPrideArena, prideWorldY } from './pride-layout.mjs';
import { drawPrideBackdrop } from './pride-theme.mjs';

export const RED_DURATION = 30000;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export function createRedRound({difficulty='normal'}={}) {
  const bossMax = difficulty==='hard'?1800:680;
  return { clock: 0, duration: RED_DURATION, x: 140, y: 450, target: null, focused: false,
    bullets: [], shots: [], enemies: [], spawn: 900, enemySpawn: 500, fire: 0, burst: 0,
    wave: 0, kills: 0, damage: 0, score: 0, finished: false, feedback: '', hitAt: -1000,
    bossHp:bossMax,bossMax,power:0,items:[],itemDue:4500,itemCount:0,particles:[],healQueue:0 };
}
export function redPoint(m, x, y) { m.target = { x: clamp(x, 22, 258), y: clamp(prideWorldY(y), 305, 482) }; }
export function redInput(m, action) {
  if (action === 'alt') m.focused = !m.focused;
  if (action === 'action' && !m.burst) { m.burst = 1100; fire(m, true); }
}
function fire(m, burst = false) {
  const offsets=burst?[-24,-12,0,12,24]:m.power?Array.from({length:3+m.power*2},(_,i)=>(i-(2+m.power*2)/2)*9):[-5,5];
  for (const offset of offsets) m.shots.push({ x: m.x + offset, y: m.y - 12, vy: -440, dead: false,damage:burst?5:4,power:m.power });
  m.fire = burst ? 100 : 240-m.power*25;
}
function sparks(m,x,y,color,count=10){for(let i=0;i<count;i++){const a=i*2.399;m.particles.push({x,y,vx:Math.cos(a)*(30+i*3),vy:Math.sin(a)*(30+i*3),life:400,color});}m.particles=m.particles.slice(-180);}
function drop(m,kind,x,y){m.items.push({kind,x:clamp(x,30,250),y,vy:55,age:0});}
export function redBossPosition(m) { return { x: 140 + Math.sin(m.clock * .0013) * 64, y: 218 }; }
// Keep the central 52×54 shot target; broken wings and crown are ornaments.
export function drawRedBoss(c, x, y, clock = 0, reduced = false) {
  c.save(); c.translate(x, y); c.lineWidth = 2;
  const pulse = reduced ? 0 : Math.sin(clock * .009);
  c.shadowColor = '#ff244f'; c.shadowBlur = reduced ? 0 : 8 + pulse * 2;
  for (const side of [-1, 1]) {
    path(c, [[side*22,-15],[side*40,-25],[side*34,-7],[side*44,4],[side*29,13],[side*37,28],[side*20,21]], '#54152e', '#dd6472');
    path(c, [[side*29,-10],[side*36,-17],[side*30,2],[side*39,5],[side*25,11]], '#b9304c', '#ffba9a');
    path(c, [[side*24,23],[side*32,31],[side*23,36]], '#79243e', '#d69b70');
  }
  path(c, [[-24,-19],[-18,-27],[18,-27],[24,-19],[26,18],[16,27],[-16,27],[-26,18]], '#9c3547', '#ffd08b');
  path(c, [[-19,-16],[-14,-21],[14,-21],[19,-16],[20,16],[12,22],[-12,22],[-20,16]], '#351020', '#e95365');
  path(c, [[-19,-23],[-23,-32],[-10,-27],[-4,-33],[0,-25],[10,-32],[16,-25],[23,-29],[19,-22]], '#b66c3d', '#ffe0a0');
  c.shadowBlur = 0;
  // An angry single eye and slit pupil. Rage stays local, with no screen shake.
  path(c, [[-20,-3],[-11,-10],[0,-6],[11,-10],[20,-3],[11,7],[0,10],[-11,7]], '#ff4162', '#ffcfaa');
  path(c, [[-16,-3],[-8,-5],[0,-3],[8,-5],[16,-3],[8,4],[0,6],[-8,4]], '#ffa286');
  path(c, [[0,-6],[4,-1],[2,6],[0,9],[-2,6],[-4,-1]], '#260718');
  c.fillStyle = '#fff1c9'; c.fillRect(-7,-3,3,2);
  for (const side of [-1,1]) path(c, [[side*17,10],[side*9,14],[side*14,19],[side*5,22]], null, '#f48c90');
  path(c, [[-13,-16],[-5,-12],[-8,-7]], null, '#ff887f');
  c.restore();
}
function volley(m, hard) {
  const boss = redBossPosition(m), late = m.clock >= 20000;
  m.wave++;
  if (m.wave % 5 === 0) {
    for(let i=0;i<(hard?18:14);i++){const a=i*Math.PI*2/(hard?18:14)+m.wave*.27;m.bullets.push({x:boss.x,y:boss.y+28,vx:Math.cos(a)*92,vy:Math.sin(a)*92,r:4,age:0,kind:'rose'});}
  } else if (m.wave % 3 === 0) {
    // A readable lane curtain always leaves a wide gap to dodge through.
    const gap = 45 + (m.wave * 47 % 190);
    for (let x = 24; x <= 258; x += hard ? 19 : 25) if (Math.abs(x - gap) > (hard ? 26 : 34))
      m.bullets.push({ x, y: 270, vx: 0, vy: late ? 116 : 98, r: 4, age: 0, kind: 'curtain' });
  } else {
    const count = hard ? 7 : 5, aim = Math.atan2(m.y - boss.y, m.x - boss.x);
    for (let i = 0; i < count; i++) {
      const angle = m.wave % 2 ? Math.PI / 2 + (i - (count - 1) / 2) * .24 : aim + (i - (count - 1) / 2) * .17;
      const speed = (hard ? 106 : 84) + (late ? 15 : 0);
      m.bullets.push({ x: boss.x, y: boss.y + 28, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, r: 4, age: 0, kind: 'fan' });
    }
  }
  m.spawn = hard ? 850 : 1150;
}
export function updateRedRound(s, dt, api = {}) {
  const m = s.mini, hard = s.difficulty === 'hard', sec = dt / 1000;
  m.clock += dt; m.fire = Math.max(0, m.fire - dt); m.burst = Math.max(0, m.burst - dt);
  m.particles=m.particles.filter(p=>(p.life-=dt)>0);for(const p of m.particles){p.x+=p.vx*sec;p.y+=p.vy*sec;}
  let dx = Number(s.held.has('right')) - Number(s.held.has('left')), dy = Number(s.held.has('down')) - Number(s.held.has('up'));
  if (dx || dy) m.target = null;
  else if (m.target) { const d = Math.hypot(m.target.x - m.x, m.target.y - m.y); if (d > 2) { dx = (m.target.x - m.x) / d; dy = (m.target.y - m.y) / d; } }
  const speed = m.focused ? 90 : 195, length = Math.max(1, Math.hypot(dx, dy));
  m.x = clamp(m.x + dx / length * speed * sec, 22, 258); m.y = clamp(m.y + dy / length * speed * sec, 305, 482);
  if (!m.fire) fire(m);
  m.spawn -= dt; if (m.spawn <= 0) volley(m, hard);
  m.enemySpawn -= dt;
  m.itemDue-=dt;if(m.itemDue<=0){drop(m,m.itemCount++%2?'heart':'power',m.x+((s.random||Math.random)()-.5)*70,300);m.itemDue=hard?4000:4500;}
  if (m.enemySpawn <= 0) {
    const random = s.random || Math.random;
    m.enemies.push({ x: 35 + random() * 210, y: 175, baseX: 35 + random() * 210, phase: random() * 6.28, age: 0, hp: 3, dead: false });
    m.enemySpawn = hard ? 900 : 1300;
  }
  const boss = redBossPosition(m);
  for (const enemy of m.enemies) { enemy.age += dt; enemy.x = clamp(enemy.baseX + Math.sin(enemy.age * .002 + enemy.phase) * 26, 22, 258); enemy.y += (hard ? 63 : 48) * sec; }
  for (const shot of m.shots) {
    const oldY = shot.y; shot.y += shot.vy * sec;
    for (const enemy of m.enemies) if (!shot.dead && !enemy.dead && Math.abs(shot.x - enemy.x) < 15 && oldY >= enemy.y - 14 && shot.y <= enemy.y + 14) {
      shot.dead = true; enemy.hp--; if (enemy.hp <= 0) { enemy.dead = true; m.kills++; m.score += 100; m.feedback = '擊落碎鏡 +100';sparks(m,enemy.x,enemy.y,'#e0c2ff');if(m.kills%3===0)drop(m,m.kills%6?'heart':'power',enemy.x,enemy.y); }
    }
    if (!shot.dead && Math.abs(shot.x - boss.x) < 26 && oldY >= boss.y - 27 && shot.y <= boss.y + 27) {
      shot.dead = true;const floor=m.clock<RED_DURATION?1:0,amount=Math.min(Math.max(0,m.bossHp-floor),shot.damage||4);m.bossHp=Math.max(floor,m.bossHp-amount);m.damage+=amount;m.hitAt=m.clock;
      if(amount){api.hit?.(s,amount);sparks(m,shot.x,boss.y+20,'#ffe8aa',4);if(!m.feedback)m.feedback='命中紅鏡';}
    }
  }
  for (const b of m.bullets) { b.age += dt; b.x += b.vx * sec; b.y += b.vy * sec;
    if (Math.hypot(b.x - m.x, b.y - m.y) < b.r + 4) { b.dead = true; api.hurt?.(s, hard ? 7 : 5, 'prideShardHit');sparks(m,m.x,m.y,'#ff7297',6); }
  }
  for (const enemy of m.enemies) if (!enemy.dead && Math.hypot(enemy.x - m.x, enemy.y - m.y) < 14) { enemy.dead = true; api.hurt?.(s, hard ? 9 : 6, 'prideShardHit'); }
  m.shots = m.shots.filter(b => !b.dead && b.y > 168);
  m.bullets = m.bullets.filter(b => !b.dead && b.age < 6500 && b.x > 8 && b.x < 272 && b.y < 510);
  m.enemies = m.enemies.filter(e => !e.dead && e.y < 510);
  for(const item of m.items){item.age+=dt;item.y+=item.vy*sec;
    if(Math.hypot(item.x-m.x,item.y-m.y)<18){item.dead=true;if(item.kind==='heart'){m.healQueue+=hard?14:12;m.feedback='回復道具';}else{m.power=Math.min(3,m.power+1);m.feedback='火力提升';m.burst=0;}sparks(m,item.x,item.y,item.kind==='heart'?'#a1ffca':'#a8eaff',14);}}
  m.items=m.items.filter(i=>!i.dead&&i.y<505&&i.age<7000);
  if(m.healQueue&&api.heal){api.heal(s,m.healQueue);m.healQueue=0;}
  if (m.clock >= RED_DURATION && m.bossHp<=0) m.finished = true;
}
export function drawRedRound(c, s, reduced = false) {
  const m = s.mini, boss = redBossPosition(m);
  c.save(); drawPrideBackdrop(c, { time: reduced ? 0 : m.clock, reduced, variant: 'pride-red-survival' }); beginPrideArena(c);
  c.fillStyle = '#301421'; c.fillRect(12, 174, 256, 322);
  c.strokeStyle = '#a8485733'; c.lineWidth = 1;
  for (let y = 178; y < 500; y += 30) { const yy = y + (reduced ? 0 : m.clock * .035 % 30); c.beginPath(); c.moveTo(12, yy); c.lineTo(268, yy); c.stroke(); }
  drawRedBoss(c, boss.x, boss.y, m.clock, reduced);
  c.fillStyle='#261423';c.fillRect(34,178,212,5);c.fillStyle='#ff779b';c.fillRect(34,178,212*m.bossHp/m.bossMax,5);
  if (m.clock - m.hitAt < 130) { c.strokeStyle = '#fff0c7'; c.lineWidth = 2; c.strokeRect(boss.x - 25, boss.y - 29, 50, 58); }
  for (const e of m.enemies) {
    path(c, [[e.x, e.y-13], [e.x+13,e.y+8],[e.x+3,e.y+5],[e.x,e.y+13],[e.x-3,e.y+5],[e.x-13,e.y+8]], '#987899', '#ead4a4');
    c.fillStyle = '#ff7292'; c.fillRect(e.x-2,e.y-4,4,8);
  }
  for (const b of m.bullets) { c.fillStyle = b.kind === 'curtain' ? '#ffc18c' : b.kind==='rose'?'#c59aff':'#fa678b';c.shadowColor=c.fillStyle;c.shadowBlur=reduced?0:6; c.beginPath(); c.arc(b.x,b.y,b.r,0,Math.PI*2); c.fill(); c.fillStyle = '#fff2d0'; c.fillRect(b.x-1,b.y-1,2,2); }c.shadowBlur=0;
  for (const b of m.shots) {if(!reduced){c.fillStyle='#aaffdf44';c.fillRect(b.x-2,b.y+5,4,16);} c.fillStyle = b.power?'#fff0a5':'#aaffdf'; c.fillRect(b.x-1,b.y-7,2+(b.power?1:0),12); }
  for(const item of m.items){c.strokeStyle=item.kind==='heart'?'#9bffc9':'#91ddff';c.lineWidth=2;c.strokeRect(item.x-10,item.y-10,20,20);if(item.kind==='heart')avatar(c,item.x,item.y);else{c.fillStyle='#d6f4ff';c.font='bold 14px sans-serif';c.textAlign='center';c.fillText('P',item.x,item.y+5);}}
  if(!reduced)for(const p of m.particles){c.globalAlpha=p.life/400;c.fillStyle=p.color;c.fillRect(p.x,p.y,2,4);}c.globalAlpha=1;
  // The player remains the original pixel heart, including its hit artwork.
  avatar(c,m.x,m.y);
  if (m.focused) { c.strokeStyle = '#b8ffe4'; c.beginPath(); c.arc(m.x,m.y,4,0,Math.PI*2); c.stroke(); }
  c.restore();
  prideHud(c, { encounter:s, title:'紅鏡決戰', status:m.clock<RED_DURATION?'紅鏡鎖血':'擊破紅鏡',
    detail:`火力 ${m.power+1}${m.focused?' · 精準':''}`, elapsed:m.clock, hint:'自動射擊 · 拾道具 · 擊破紅鏡', feedback:m.feedback,
    controls:'方向鍵／拖動移動 · 空白鍵 集火', touch:'C／Shift 精準移動' }); c.restore();
}
