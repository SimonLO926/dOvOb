import { drawPrideFocus } from './pride-theme.mjs';
import { prideHud } from './pride-layout.mjs';
import { avatar, path, sparkle } from './pride-visuals.mjs';
import { drawPrideBackdrop } from './pride-theme.mjs';

export const MIRROR_GAME_IDS = Object.freeze(['pride-shard-puzzle', 'pride-truth-trial', 'pride-mirror-maze']);
const wrap = (n, size) => (n + size) % size;
export const TRUTH_SWAP_MS = 700 / 1.5;
const hard = s => s.difficulty === 'hard';
export function createMirrorGame(s) {
  const m = { clock: 0, focus: 0, score: 0, stage: 0, finished: false, rewards: [], feedback: '', feedbackUntil: 0 };
  if (s.mode === MIRROR_GAME_IDS[0]) Object.assign(m, { duration: hard(s) ? 28000 : 35000, goal: hard(s) ? 2 : 1, turns: 0 });
  if (s.mode === MIRROR_GAME_IDS[1]) Object.assign(m, { duration: hard(s) ? 26000 : 28000, goal: hard(s) ? 6 : 4, correct: 0, combo: 0, phase: 'preview' });
  if (s.mode === MIRROR_GAME_IDS[2]) Object.assign(m, { duration: hard(s) ? 32000 : 40000, goal: 2, beam: null });
  setup(s, m); return m;
}
function setup(s, m) {
  m.focus = 0;
  if (s.mode === MIRROR_GAME_IDS[0]) m.pieces = Array.from({length: 9}, () => 1 + Math.floor(s.random() * 3));
  if (s.mode === MIRROR_GAME_IDS[1]) {
    m.phase = 'preview'; m.phaseUntil = m.clock + (hard(s) ? 1300 : 1900);
    m.truth = Math.floor(s.random() * 3); m.order = [0, 1, 2]; m.swap = Math.min(2, Math.floor(s.random() * 3));
    m.swapsTotal = 3 + Math.min(2, Math.floor(s.random() * 3)); m.swapsDone = 0;
  }
  if (s.mode === MIRROR_GAME_IDS[2]) {
    m.cells = Array(25).fill(null);
    // 空白鍵 guaranteed route, reflected/rotated between rooms; decorative mirrors are off the route.
    m.route = m.stage % 2 ? [11, 21, 23, 3] : [11, 1, 3, 23];
    m.solution = m.stage % 2 ? ['\\', '\\', '/', '/'] : ['/', '/', '\\', '\\'];
    m.route.forEach((i, n) => { m.cells[i] = s.random() < .5 ? '/' : '\\'; });
    m.cells[9] = '/'; m.cells[15] = '\\';
    m.crystals = m.stage % 2 ? [16, 22, 13] : [6, 2, 18];
    m.exitRow = m.stage % 2 ? 0 : 4; m.focus = 11; m.beam = null;
  }
}
function say(m, text) { m.feedback = text; m.feedbackUntil = m.clock + 1700; }
function cleared(s, m) {
  m.score += 300; m.rewards.push(m.stage % 3); m.stage++;
  say(m, '修復成功 +300 · 傲慢削弱');
  if (m.stage >= m.goal) m.finished = true; else setup(s, m);
}
export function mirrorGameInput(s, action) {
  const m = s.mini; if (m.finished || m.failed) return;
  const cols = s.mode === MIRROR_GAME_IDS[1] ? 3 : s.mode === MIRROR_GAME_IDS[0] ? 3 : 5;
  const count = s.mode === MIRROR_GAME_IDS[1] ? 3 : s.mode === MIRROR_GAME_IDS[0] ? 9 : 25;
  const step = {left: -1, right: 1, up: -cols, down: cols}[action];
  if (step) { m.focus = wrap(m.focus + step, count); return; }
  if (s.mode === MIRROR_GAME_IDS[0]) {
    if (action === 'alt') { const i = m.pieces.findIndex(v => v !== 0); m.focus = i < 0 ? 0 : i; say(m, '提示：接回鏡框，皇冠朝上'); s.timeLeft = Math.max(0, s.timeLeft - 1000); }
    if (action === 'action') { m.pieces[m.focus] = wrap(m.pieces[m.focus] + 1, 4); m.turns++; if (m.pieces.every(v => v === 0)) cleared(s, m); }
  } else if (s.mode === MIRROR_GAME_IDS[1]) {
    if (action === 'alt' && m.phase === 'choose') { s.timeLeft = Math.max(0, s.timeLeft - 2000); m.phase = 'preview'; m.phaseUntil = m.clock + 1000; m.swapsDone = 0; say(m, '重看真鏡 −2秒'); }
    if (action === 'action' && m.phase === 'choose') {
      if (m.order[m.focus] === m.truth) { m.correct++; m.combo++; m.score += 100 + 20 * m.combo; say(m, `真鏡！連中 ${m.combo}`); if (m.correct % 2 === 0) m.rewards.push((m.correct / 2 - 1) % 3); }
      else { m.combo = 0; s.timeLeft = Math.max(0, s.timeLeft - 2000); say(m, '假鏡！−2秒，再試下一題'); }
      if (m.correct >= m.goal) m.finished = true;
      else { m.phase = 'result'; m.phaseUntil = m.clock + 650; }
    }
  } else if (s.mode === MIRROR_GAME_IDS[2]) {
    if (action === 'action' && m.cells[m.focus]) { m.cells[m.focus] = m.cells[m.focus] === '/' ? '\\' : '/'; m.beam = traceMirrorMaze(m); }
    if (action === 'alt') { m.beam = traceMirrorMaze(m); if (m.beam.success) cleared(s, m); else say(m, `光線未到出口 · 水晶 ${m.beam.collected.length}/3`); }
  }
}
export function mirrorGamePoint(s, x, y) {
  const m = s.mini; if (m.finished || m.failed) return;
  if (s.mode === MIRROR_GAME_IDS[1]) { if (y >= 250 && y <= 405 && x >= 16 && x < 264) { m.focus = Math.min(2, Math.floor((x - 16) / 83)); mirrorGameInput(s, 'action'); } return; }
  if (s.mode === MIRROR_GAME_IDS[2] && y >= 505 && y <= 535) { mirrorGameInput(s, 'alt'); return; }
  const cols = s.mode === MIRROR_GAME_IDS[0] ? 3 : 5, size = cols === 3 ? 72 : 44, top = cols === 3 ? 190 : 238, left = cols === 3 ? 32 : 30;
  const col = Math.floor((x - left) / size), row = Math.floor((y - top) / size);
  if (col < 0 || col >= cols || row < 0 || row >= cols) return;
  m.focus = row * cols + col; mirrorGameInput(s, 'action');
}
export function updateMirrorGame(s, dt) {
  const m = s.mini;
  if (s.mode !== MIRROR_GAME_IDS[1] || m.finished || m.failed) return;
  // Advance from the scheduled boundary so frame rate does not change shuffle speed.
  while (m.clock >= m.phaseUntil) {
    const boundary = m.phaseUntil;
    if (m.phase === 'preview' || (m.phase === 'swap' && m.swapsDone < m.swapsTotal)) {
      if (m.phase === 'swap') m.swap = (m.swap + 1 + Math.min(1, Math.floor(s.random() * 2))) % 3;
      m.phase = 'swap'; m.phaseUntil = boundary + TRUTH_SWAP_MS;
      m.fromOrder = [...m.order]; const [a, b] = [[0, 1], [1, 2], [0, 2]][m.swap];
      [m.order[a], m.order[b]] = [m.order[b], m.order[a]];
      m.swapsDone++;
    } else if (m.phase === 'swap') { m.phase = 'choose'; m.phaseUntil = Infinity; }
    else if (m.phase === 'result') { setup(s, m); }
    else break;
  }
}
export function traceMirrorMaze(m) {
  let x = -1, y = 2, dx = 1, dy = 0;
  const points = [{x, y}], visited = new Set(), collected = [];
  for (let n = 0; n < 120; n++) {
    x += dx; y += dy; points.push({x, y});
    if (x < 0 || x >= 5 || y < 0 || y >= 5) return {points, collected, success: x === 5 && y === m.exitRow && collected.length === 3};
    const key = `${x},${y},${dx},${dy}`; if (visited.has(key)) break; visited.add(key);
    const i = y * 5 + x; if (m.crystals.includes(i) && !collected.includes(i)) collected.push(i);
    if (m.cells[i] === '/') [dx, dy] = [-dy, -dx]; else if (m.cells[i] === '\\') [dx, dy] = [dy, dx];
  }
  return {points, collected, success: false};
}
export function drawPuzzleMirror(c) {
 c.save();c.translate(-108,-108);
 const glass=c.createLinearGradient(25,0,190,216);glass.addColorStop(0,'#c6edff');glass.addColorStop(.42,'#5786b8');glass.addColorStop(1,'#243e70');
 path(c,[[12,26],[28,9],[108,0],[188,9],[204,26],[204,199],[184,210],[32,210],[12,199]],'#c8a366','#fff0b6');
 path(c,[[24,33],[38,22],[108,13],[178,22],[192,33],[192,190],[180,196],[36,196],[24,190]],glass,'#fff');
 path(c,[[37,29],[61,25],[187,160],[187,183],[176,186]],'#effaffaa');
 path(c,[[76,22],[85,21],[190,128],[190,143]],'#cceaff66');
 for(let i=0;i<3;i++){c.fillStyle=['#263758','#385981','#57739b'][i];c.fillRect(45+i*42,127-i*18,29,61+i*18);c.fillStyle='#f1cd7c';c.fillRect(45+i*42,126-i*18,29,3);}
 for(const [x,y]of [[15,38],[15,182],[201,38],[201,182]])path(c,[[x,y-6],[x+5,y],[x,y+6],[x-5,y]],'#a88fd4','#fff0bb');
 path(c,[[86,20],[83,6],[95,12],[108,1],[121,12],[133,6],[130,20]],'#f4d394','#fff1c2');
 c.fillStyle='#ac713c';c.fillRect(45,202,126,8);c.fillStyle='#fff0b1';c.fillRect(45,202,126,2);c.restore();
}
export function drawMirrorGame(c, s) {
  const m = s.mini; c.save(); c.textAlign = 'center'; c.textBaseline = 'alphabetic';
  const index = MIRROR_GAME_IDS.indexOf(s.mode);
  drawPrideBackdrop(c, { time: m.clock, variant: s.mode });
  const status = index===0?`修復 ${m.stage}/${m.goal} 面`:index===1?`找到 ${m.correct}/${m.goal} 次真鏡 · 連中 ${m.combo}`:`導光 ${m.stage}/${m.goal} 關`;
  const hints=['轉動碎片，拼回完整鏡子','記住真鏡，追蹤鏡子換位','收集 3 粒水晶再去出口'];
  const controls=['點碎片 / 空白鍵 旋轉 · C／Shift 提示','點鏡 / 方向鍵＋空白鍵 · C／Shift 重看（−2秒）','點鏡 / 空白鍵 轉向 · C／Shift 發光驗證'];
  c.font='12px sans-serif';
  if (index === 0) {
    c.save();c.translate(140,165);c.scale(.16,.16);drawPuzzleMirror(c);c.restore();c.font='10px sans-serif';c.fillStyle='#e6d5b7';c.fillText('原鏡',82,165);
    for (let i = 0; i < 9; i++) {
      const x = 68 + i % 3 * 72, y = 226 + Math.floor(i / 3) * 72;
      c.save(); c.translate(x, y); c.rotate(m.pieces[i] * Math.PI / 2); c.shadowBlur = 0;
      c.fillStyle='#291b39';c.fillRect(-36,-36,72,72);
      c.save();c.beginPath();c.rect(-36,-36,72,72);c.clip();c.translate(140-x,298-y);drawPuzzleMirror(c);c.restore();
      c.shadowBlur=0;c.strokeStyle='#a8896255';c.lineWidth=1;c.strokeRect(-36,-36,72,72);
      path(c, [[-3,-35],[0,-31],[3,-35]], '#ffe48e');c.restore();
      if (m.focus === i) drawPrideFocus(c,{x:x-35,y:y-35,w:70,h:70},m.clock);
    }
  } else if (index === 1) {
    for (let i = 0; i < 3; i++) {
      let x = 57 + i * 83;
      if (m.phase === 'swap') { const old = m.fromOrder.indexOf(m.order[i]), f = Math.min(1, Math.max(0, 1-(m.phaseUntil-m.clock)/TRUTH_SWAP_MS)); x = 57 + (old+(i-old)*f)*83; }
      c.save(); c.translate(x,325); c.shadowColor='#c69bef';c.shadowBlur=12;
      path(c,[[-31,-62],[0,-77],[31,-62],[31,62],[0,77],[-31,62]],'#362445',m.focus===i?'#ffeda8':'#d6b36e');
      path(c,[[-25,-56],[23,-66],[-25,36]],'#d4eaff44');
      if (m.phase==='preview') { c.save();c.scale(2,2);avatar(c,0,0);c.restore(); if(m.order[i]!==m.truth){c.strokeStyle='#362445';c.lineWidth=1.5;c.beginPath();c.moveTo(-4,-1);c.lineTo(4,1);c.stroke();} } else {c.fillStyle='#d3eaff';c.font='32px serif';c.fillText('?',0,10);}
      c.restore(); if(m.focus===i)drawPrideFocus(c,{x:x-33,y:247,w:66,h:156},m.clock); c.fillStyle='#e4c9f3';c.font='12px sans-serif';c.fillText(`${i+1}`,x,432);
    }
  } else {
    for (let i=0;i<25;i++) {const x=30+i%5*44,y=238+Math.floor(i/5)*44;c.fillStyle='#2a1b39';c.fillRect(x+2,y+2,40,40);c.lineWidth=1;c.strokeStyle='#ac8d6388';c.strokeRect(x+2,y+2,40,40);
      if(m.cells[i]){c.strokeStyle='#cffcf4';c.lineWidth=4;c.beginPath();c.moveTo(x+10,y+(m.cells[i]==='/'?34:10));c.lineTo(x+34,y+(m.cells[i]==='/'?10:34));c.stroke();}
      if(m.focus===i)drawPrideFocus(c,{x:x+2,y:y+2,w:40,h:40},m.clock);
      if(m.crystals.includes(i))path(c,[[x+22,y+12],[x+29,y+22],[x+22,y+32],[x+15,y+22]],'#ffdaa2','#fff');
    }
    c.save();c.beginPath();c.rect(0,140,280,320);c.clip();
    if(m.beam){c.strokeStyle=m.beam.success?'#fff1b0':'#69ffe4';c.shadowColor='#61ffe1';c.shadowBlur=10;c.lineWidth=3;c.beginPath();m.beam.points.forEach((p,i)=>c[i?'lineTo':'moveTo'](52+p.x*44,260+p.y*44));c.stroke();c.shadowBlur=0;}
    c.restore();
    avatar(c,16,348,'#ff5178'); c.fillStyle='#fff2a0';c.fillText('出口 →',242,226);
    c.fillStyle='#8861a755';c.fillRect(45,499,190,37);c.lineWidth=1;c.strokeStyle='#d6b36e66';c.strokeRect(45,499,190,37);c.fillStyle='#dcfff7';
    c.fillText('→',270,260+m.exitRow*44);
  }
  c.restore();
  const phase=index===1?{preview:'記住心心反光完整嘅真鏡',swap:'留意！鏡子換位中',choose:'真鏡去咗邊？',result:'準備下一題…'}[m.phase]:'';
  prideHud(c, { encounter: s, title: ['碎鏡拼圖','真假鏡','鏡面迷宮'][index],
    status: `${Math.ceil(s.timeLeft/1000)}秒 · ${m.score}分`, detail: status,
    hint: hints[index], elapsed: m.clock,
    feedback: m.finished?'挑戰完成！':m.feedbackUntil>m.clock?m.feedback:phase,
    controls: controls[index] });
}
