import { drawPrideFocus } from './pride-theme.mjs';
import { prideHud } from './pride-layout.mjs';
import { avatar, path, royalCrown } from './pride-visuals.mjs';
import {createRhythm,rhythmInput,rhythmPoint,updateRhythm,drawRhythm} from './pride-rhythm.mjs';

export const CHALLENGE_IDS = Object.freeze(['pride-kaleidoscope', 'pride-shard-storm', 'pride-nested']);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const randomIndex = (s, n) => Math.min(n - 1, Math.floor(s.random() * n));
export function createPrideChallenge(s) {
  if(s.mode==='pride-shard-storm')return createRhythm(s);
  const m = { clock: 0, duration: 14000, x: 140, y: 450, target: null, focus: 0, fire: 0,
    damage: 0, finished: false, cycle: 0, phase: 'setup', phaseUntil: 0, pendingHit: 0, pendingHurt: 0, feedback: '', flashUntil: 0 };
  setup(s, m); return m;
}
function setup(s, m) {
  m.cycle++; m.focus = 0; m.feedback = ''; m.claimed = false;
  if (s.mode === 'pride-shard-storm') { m.phase = 'warning'; m.phaseUntil = m.clock + 850; }
  if (s.mode === 'pride-kaleidoscope') {
    m.phase = 'search'; m.phaseUntil = m.clock + 3500;
    m.reference = randomIndex(s, 4); m.answer = randomIndex(s, 9);
    m.patterns = Array.from({ length: 9 }, (_, i) => i === m.answer ? m.reference : (m.reference + 1 + i % 3) % 4);
  }
  if (s.mode === 'pride-nested') {
    m.phase = 'plan'; m.phaseUntil = m.clock + 5500;
    const variant=randomIndex(s,8),last=m.variant;
    m.variant=variant===last?(variant+1)%8:variant;
    const transform=([x,y])=>{if(m.variant>=4)x=2-x;for(let n=0;n<m.variant%4;n++)[x,y]=[2-y,x];return {x,y};};
    const cell=i=>{const p=transform([i%3,Math.floor(i/3)]);return p.y*3+p.x;};
    const slash=v=>{const a=transform(v==='/'?[0,1]:[0,0]),b=transform(v==='/'?[1,0]:[1,1]);return (b.x-a.x)*(b.y-a.y)>0?'\\':'/';};
    m.route=[3,0,2,8].map(cell);m.solution=['/','/','\\','\\'].map(slash);
    m.source=transform([-1,1]);m.entry=transform([0,1]);m.exit=transform([3,2]);m.seals=[1,5].map(cell);
    m.tiles = Array(9).fill(null);
    m.route.forEach((i, n) => { m.tiles[i] = s.random() < .5 ? '/' : '\\'; });
    // Every board requires thought; it cannot start already solved.
    m.tiles[m.route[0]]=m.solution[0]==='/'?'\\':'/';m.tiles[m.route[2]]=m.solution[2]==='/'?'\\':'/';m.ray=traceNested(m);
  }
}
export function traceNested(m) {
  let {x,y}=m.source||{x:-1,y:1};const entry=m.entry||{x:0,y:1},exit=m.exit||{x:3,y:2};let dx=entry.x-x,dy=entry.y-y;
  const points = [{ x, y }], seals = new Set(), seen = new Set();
  for (let i = 0; i < 40; i++) {
    x += dx; y += dy; points.push({ x, y });
    if (x < 0 || x > 2 || y < 0 || y > 2) return { points, seals: [...seals], success: x === exit.x && y === exit.y && seals.size === 2 };
    const key = `${x},${y},${dx},${dy}`; if (seen.has(key)) break; seen.add(key);
    const cell = y * 3 + x; if ((m.seals||[1,5]).includes(cell)) seals.add(cell);
    if (m.tiles[cell] === '/') [dx, dy] = [-dy, -dx];
    else if (m.tiles[cell] === '\\') [dx, dy] = [dy, dx];
  }
  return { points, seals: [...seals], success: false };
}
function counter(m, amount, text) {
  if (m.claimed) return;
  m.claimed = true; m.pendingHit += amount; m.damage += amount;
  m.flashUntil = m.clock + 550; m.feedback = text; m.phase = 'recover'; m.phaseUntil = m.clock + 850;
}
export function prideChallengeInput(s, action) {
  if(s.mode==='pride-shard-storm'){rhythmInput(s,action);return;}
  const m = s.mini;
  if (m.finished || m.clock >= m.phaseUntil) return;
  if (s.mode === 'pride-shard-storm') {
    if (action !== 'action' || m.fire) return;
    m.fire = 650;
    if (m.phase === 'parry') counter(m, 35, '格擋成功 · 碎片反射 −35');
    else m.feedback = '太早！等紅色碎片進入金圈再按 空白鍵';
    return;
  }
  const step = { left: -1, right: 1, up: -3, down: 3 }[action];
  if (step && ['search', 'plan'].includes(m.phase)) { m.focus = (m.focus + step + 9) % 9; return; }
  if (m.phase === 'counter' && action === 'action') {
    counter(m, s.mode === 'pride-kaleidoscope' ? 80 : 60, s.mode === 'pride-kaleidoscope' ? '異常現形 · 萬花筒反攻 −80' : '導光反攻 · 封印破開 −60'); return;
  }
  if (s.mode === 'pride-kaleidoscope' && m.phase === 'search' && action === 'action') {
    if (m.focus === m.answer) { m.phase = 'counter'; m.phaseUntil = m.clock + 1400; m.feedback = '搵到原圖！再按 空白鍵 發動反攻'; }
    else { m.pendingHurt += 8; m.phase = 'recover'; m.phaseUntil = m.clock + 850; m.feedback = '圖案唔同！下一輪再觀察'; }
  }
  if (s.mode === 'pride-nested' && m.phase === 'plan') {
    if (action === 'action' && m.tiles[m.focus]) { m.tiles[m.focus] = m.tiles[m.focus] === '/' ? '\\' : '/'; m.ray = traceNested(m); }
    if (action === 'alt') {
      m.ray = traceNested(m);
      if (m.ray.success) { m.phase = 'counter'; m.phaseUntil = m.clock + 1800; m.feedback = '兩個封印串連！空白鍵 釋放儲存光束'; }
      else { m.pendingHurt += 8; m.phase = 'recover'; m.phaseUntil = m.clock + 850; m.feedback = '光束走錯路！先串連兩個封印'; }
    }
  }
}
export function prideChallengePoint(s, x, y) {
  if(s.mode==='pride-shard-storm'){rhythmPoint(s,x,y);return;}
  const m = s.mini;
  if (s.mode === 'pride-shard-storm') {
    if (Math.hypot(x - m.x, y - (m.y - 20)) < 40) prideChallengeInput(s, 'action');
    else m.target = { x: clamp(x, 30, 250), y: 450 };
    return;
  }
  if (m.phase === 'counter') { if (y >= 505 && y <= 535) prideChallengeInput(s, 'action'); return; }
  if (s.mode === 'pride-nested' && y >= 505 && y <= 535) { prideChallengeInput(s, 'alt'); return; }
  const col = Math.floor((x - 50) / 60), row = Math.floor((y - 294) / 54);
  if (col >= 0 && col < 3 && row >= 0 && row < 3) { m.focus = row * 3 + col; prideChallengeInput(s, 'action'); }
}
export function updatePrideChallenge(s, dt, api = {}) {
  if(s.mode==='pride-shard-storm'){updateRhythm(s,dt,api);return;}
  const m = s.mini;
  if (m.finished) return;
  m.fire = Math.max(0, m.fire - dt);
  if (s.mode === 'pride-shard-storm') {
    let dx = Number(s.held?.has('right')) - Number(s.held?.has('left'));
    if (dx) m.target = null;
    else if (m.target) dx = clamp((m.target.x - m.x) / (170 * dt / 1000 || 1), -1, 1);
    m.x = clamp(m.x + dx * 170 * dt / 1000, 30, 250);
  }
  if (m.clock >= m.phaseUntil) {
    if (m.phase === 'warning') { m.phase = 'parry'; m.phaseUntil += 400; m.feedback = '依家！空白鍵 格擋反攻'; }
    else if (m.phase === 'recover') setup(s, m);
    else { if (m.phase !== 'counter') m.pendingHurt += 8; m.phase = 'recover'; m.phaseUntil = m.clock + 650; m.feedback = '錯過窗口 · 準備下一輪'; }
  }
  const hit = m.pendingHit, hurt = m.pendingHurt; m.pendingHit = 0; m.pendingHurt = 0;
  if (hurt) api.hurt?.(s, hurt, 'prideShardHit');
  if (hit) api.hit?.(s, hit);
}
function flower(c, x, y, notch, size = 16) {
  for (let i = 0; i < 6; i++) {
    const a = i * Math.PI / 3;
    path(c, [[x,y],[x+Math.cos(a-.2)*size,y+Math.sin(a-.2)*size],[x+Math.cos(a+.2)*size,y+Math.sin(a+.2)*size]], i % 2 ? '#97ccff' : '#e0aaff', '#dceeff');
  }
  const a = notch * Math.PI / 2; c.fillStyle = '#ffeb9c'; c.beginPath(); c.arc(x + Math.cos(a) * size * .5, y + Math.sin(a) * size * .5, 3, 0, Math.PI * 2); c.fill();
}
export function drawPrideChallenge(c, s, reduced = false) {
  if(s.mode==='pride-shard-storm'){drawRhythm(c,s,reduced);return;}
  const m = s.mini; c.save(); c.textBaseline = 'alphabetic'; c.textAlign = 'center'; c.font = '12px sans-serif'; c.fillStyle = '#fff1cc';
  c.save(); c.beginPath(); c.rect(0, 140, 280, 320); c.clip();
  if (s.mode === 'pride-shard-storm') {
    c.save(); c.translate(0, -20); // Keep the full parry ring inside the play area.
    const warning = m.phase === 'warning', parry = m.phase === 'parry';
    c.strokeStyle = parry ? '#ffeb8c' : '#7789ba'; c.lineWidth = parry ? 4 : 1; c.beginPath(); c.arc(m.x, m.y, 28, 0, Math.PI * 2); c.stroke();
    if (warning || parry) {
      const progress = warning ? 1 - Math.max(0, m.phaseUntil - m.clock) / 850 : 1;
      const y = 325 + progress * 105;
      path(c, [[m.x,y-15],[m.x+9,y],[m.x,y+14],[m.x-9,y]], '#ff637a', '#ffe0e8');
    }
    avatar(c, m.x, m.y, '#ff5178'); c.restore();
  } else {
    if (s.mode === 'pride-kaleidoscope') flower(c, 140, 270, m.reference, 18);
    for (let i = 0; i < 9; i++) {
      const x = 50 + i % 3 * 60, y = 294 + Math.floor(i / 3) * 54;
      c.fillStyle = '#281a38ee'; c.fillRect(x + 2, y + 2, 54, 50);
      c.strokeStyle = m.focus === i ? '#fff0a6' : '#b99a67'; c.lineWidth = m.focus === i ? 2 : 1; c.strokeRect(x + 2, y + 2, 54, 50);
      if(m.focus===i)drawPrideFocus(c,{x:x+2,y:y+2,w:54,h:50},m.clock);
      if (s.mode === 'pride-kaleidoscope') flower(c, x + 29, y + 27, m.patterns[i]);
      else {
        if (m.tiles[i]) { c.strokeStyle = '#d2eaff'; c.lineWidth = 4; c.beginPath(); c.moveTo(x+12, y+(m.tiles[i] === '/' ? 42 : 12)); c.lineTo(x+46,y+(m.tiles[i] === '/' ? 12 : 42)); c.stroke(); }
        if (m.seals.includes(i)) path(c, [[x+29,y+15],[x+37,y+27],[x+29,y+39],[x+21,y+27]], '#dca968', '#fff4bd');
      }
    }
    if (s.mode === 'pride-nested') {
      c.strokeStyle = m.ray.success ? '#96ffcc' : '#ffe28b'; c.lineWidth = 2; c.setLineDash(m.phase === 'plan' ? [4, 4] : []); c.beginPath();
      m.ray.points.forEach((p, i) => c[i ? 'lineTo' : 'moveTo'](79+p.x*60,321+p.y*54)); c.stroke(); c.setLineDash([]);
      const arrow=(dx,dy)=>dx>0?'→':dx<0?'←':dy>0?'↓':'↑';
      c.fillText(arrow(m.entry.x-m.source.x,m.entry.y-m.source.y),clamp(79+m.source.x*60,22,257),clamp(321+m.source.y*54,260,449));
      const exit=m.exit;c.fillText(arrow(exit.x===-1?-1:exit.x===3?1:0,exit.y===-1?-1:exit.y===3?1:0),clamp(79+exit.x*60,22,257),clamp(321+exit.y*54,260,449));
    }

  }
  if (m.flashUntil > m.clock) {
    c.strokeStyle = '#b4ffe4'; c.lineWidth = reduced ? 3 : 7; c.beginPath(); c.moveTo(m.x, m.y); c.lineTo(140, 174); c.stroke(); royalCrown(c, 140, 174, 8, 0, .8);
  }
  c.restore();
  if (s.mode !== 'pride-shard-storm') {
    const counterOpen = m.phase === 'counter';
    c.fillStyle = counterOpen ? '#40775d' : '#493154'; c.fillRect(40, 505, 200, 30); c.fillStyle = '#fff2b9';
    c.fillText(counterOpen ? `空白鍵 反攻 · ${((m.phaseUntil-m.clock)/1000).toFixed(1)}秒` : s.mode === 'pride-nested' ? 'C／Shift 發光 · 空白鍵 轉向' : '方向鍵 / 點圖案 · 空白鍵 確認', 140, 525);
    avatar(c, 22, 520, '#ff5178');
  }
  c.restore();
  const names={'pride-kaleidoscope':'鏡像萬花筒','pride-shard-storm':'碎鏡風暴','pride-nested':'鏡中鏡'};
  const hints={'pride-kaleidoscope':'搵出同原圖金點位置相同嘅圖案','pride-shard-storm':'金線判定 · 左／空白鍵／右','pride-nested':'入口與出口會換位 · 經 ◇◇ 導光'};
  const storm=s.mode==='pride-shard-storm';
  prideHud(c, { encounter: s, title: names[s.mode], status: `${Math.ceil(s.timeLeft/1000)}秒 · ${m.damage} 反攻傷害`,
    hint: hints[s.mode], elapsed: m.clock,
    feedback: m.feedback || s.mirrorWorld?.feedback.at(-1)?.text || (storm?(m.phase==='parry'?'空白鍵！':'準備…'):''),
    controls: storm?'左右移動 · 點心心 / 空白鍵 格擋':'' });
}
