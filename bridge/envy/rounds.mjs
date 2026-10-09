import { initLore, loreInput, lorePoint, updateLore } from './lore-games.mjs';
import { clamp, DIRS, keyOf, makeMaze, mazeDistances, mazeRoute, openCell, pointInRect, rollBlock, rollingBoard, validBlock, segmentHitsRect, braidMaze, CARD_LAYOUT } from './geometry.mjs';

export const FIRST_GAMES = ['difference', 'tarot', 'rolling', 'window'];
export const SECOND_GAMES = ['rolling', 'pack', 'territory', 'pellets', 'eye-room'];
export const FIRST_ATTACKS = ['laser', 'steal', 'gaze'];
export const SECOND_ATTACKS = ['net', 'breath', 'pupil', 'laser-up', 'steal-up', 'gaze-up'];
export const ATTACKS = [...FIRST_ATTACKS, ...SECOND_ATTACKS];
export const NAMES = { window:'偷窺之窗', 'eye-room':'眼睛收藏室', bridge:'窺視之橋', difference:'尋找異瞳', tarot:'命運塔羅', rolling:'滾石入瞳', pack:'嫉妒秘藏', territory:'眼界爭奪', pellets:'幽林巡遊', laser:'六眼鐳射', steal:'偷竊', gaze:'嫉妒凝視', net:'萬眼天羅', breath:'嫉妒龍息', pupil:'瞳孔迷宮', 'laser-up':'六眼交織', 'steal-up':'竊命之觸', 'gaze-up':'三重凝視', chase:'逃離巨瞳', capture:'捕捉嫉妒本體' };
export const HINTS = { window:'拖曳擦窗・方向鍵移動＋長按空白鍵', 'eye-room':'左右轉房・上下選物・空白鍵查看・C 返回', bridge:'方向鍵移動・空白鍵下落・C 保留', difference:'找出不同的眼球，完成三輪', tarot:'空白鍵翻牌，再按一次收下命運', rolling:'方向鍵滾動，直立落入眼球洞', pack:'空白鍵拆包／翻牌，收下三張秘藏', territory:'圈回綠地佔領領域，避開尾巴上的眼鬼', pellets:'收集光點・綠果反制三隻追蹤眼鬼', laser:'預告線亮起時，移出射線', steal:'避開抓取線；被抓按空白鍵斷繩取回血', gaze:'不停移動，離開追蹤視線', net:'走綠色缺口；靠近金眼按空白鍵擊碎', breath:'引龍息燒小眼，燒滿五隻可反攻', pupil:'走到沒有眼紋的盲點，停留三秒', 'laser-up':'六眼交叉發射，留意下一組預告', 'steal-up':'躲雙觸手；被抓按空白鍵搶回血', 'gaze-up':'離開輪流追蹤的三道視線', chase:'← 停在樹後避光・→ 跑・空白鍵跳', capture:'沿腳印追蟲・C 衝刺・靠近按空白鍵' };
export const CARD_RATES = Object.freeze([['C', .7], ['U', .2], ['R', .07], ['SR', .02], ['SAR', .01]]);
export function cardRarity(roll) {
  let sum = 0; for (const [name, rate] of CARD_RATES) { sum += rate; if (roll < sum - 1e-12) return name; }
  return 'SAR';
}
export const TAROT = Object.freeze([
  { name:'月亮', icon:'moon', kind:'heal', amount:30 },
  { name:'寶劍', icon:'sword', kind:'boss', amount:40 },
  { name:'小丑', icon:'jester', kind:'hurt', amount:20 },
  { name:'眼睛', icon:'eye', kind:'shield', amount:.5 },
  { name:'死神', icon:'death', kind:'death', amount:60 },
]);
// Effect descriptions and confirmation use the same source of card rules.
export function cardEffects(card,mode){
  if(mode==='tarot'){
    const scale=card.reversed?.5:1;
    return card.kind==='death'?[{kind:'boss',amount:60*scale},{kind:'hurt',amount:30}]:[{kind:card.kind,amount:card.kind==='hurt'?card.amount:card.kind==='shield'?.5:card.amount*scale}];
  }
  const r=card.rarity;
  const effects=[r==='C'||r==='U'?{kind:'heal',amount:r==='C'?10:25}:{kind:'boss',amount:r==='R'?30:r==='SR'?50:80}];
  if(r==='SR'||r==='SAR')effects.push({kind:'enrage',amount:1});
  return [...effects,{kind:'collect',amount:card}];
}
export function describeCard(card,mode,{difficulty='normal'}={}){
  if(!card)return [];
  return cardEffects(card,mode).flatMap(e=>{
    if(e.kind==='heal')return [`回復 ${Math.max(1,difficulty==='hard'?Math.floor(e.amount/2):Math.round(e.amount))} HP`];
    if(e.kind==='boss')return [`反攻 Boss ${e.amount}`];
    if(e.kind==='hurt')return [`自己扣 ${e.amount} HP`];
    if(e.kind==='shield')return ['下次攻擊受傷減半'];
    if(e.kind==='enrage')return ['下次攻擊：受傷 +50%','同回合：反攻 +30%'];
    return [];
  });
}
const effect = (m, kind, amount = 0) => m.effects.push({ kind, amount });
const feedback = (m, text) => { m.feedback = text; m.feedbackTime = 1600; };
function hurt(m, amount) {
  if (m.invulnerable > 0 || m.done) return;
  effect(m, 'hurt', amount); m.invulnerable = 650; feedback(m, '受到窺視攻擊');
}
function finish(m, success, amount = 45) {
  if (m.done) return;
  m.done = true; m.success = success;
  if (success) { effect(m, 'boss', amount); effect(m, 'heal', ATTACKS.includes(m.id) ? 6 : 8); feedback(m, '突破窺視！'); }
  else if (!['capture', 'chase', 'tarot', 'pack'].includes(m.id)) { effect(m, 'hurt', 10); feedback(m, '挑戰未完成'); }
}
function differenceRound(m) {
  m.odd = Math.floor(m.random() * 12); m.focus = 0;
  m.baseEye = { pupil: (m.round % 3 - 1) * 5, hue: m.round === 1 ? '#8cea9d' : '#b2e8a3', size: 6 };
  m.oddEye = { ...m.baseEye, ...(m.round === 0 ? { pupil: 7 } : m.round === 1 ? { hue: '#c5e582' } : { size: 3.8 }) };
}
function createChase(m) {
  m.duration=60000;m.x=80;m.y=443;m.vy=0;m.speed=m.hard?162:155;m.ground=443;m.goal=6400;
  m.obstacles=Array.from({length:13},(_,i)=>({x:480+i*460,w:24,h:26+(i%3)*8}));
  m.covers=Array.from({length:20},(_,i)=>({x:160+i*320,y:230,w:28,h:230}));
  m.beam={state:'rest',angle:.8,phase:0,origin:{x:-50,y:245}};m.exposure=0;
  m.fruit=Array.from({length:5},(_,i)=>({x:1000+i*1150,y:402,taken:false}));
}
export function createRound(id, { random = Math.random, difficulty = 'normal', form = 1 } = {}) {
  const hard = difficulty === 'hard';
  const durations = { difference:30000, tarot:45000, rolling:90000, pack:30000, territory:hard?30000:26000, pellets:hard?42000:38000, pupil:20000, net:hard?20000:24000, chase:60000, capture:hard?150000:180000 };
  const m = { id, random, hard, form, clock:0, duration:durations[id] || 14000, effects:[], done:false, success:false,
    x:140, y:405, focus:0, invulnerable:0, feedback:'', feedbackTime:0, step:0, cooldown:0, counters:0, round:0, wave:-1 };
  if(['window','eye-room'].includes(id))initLore(m);
  if (id === 'difference') differenceRound(m);
  if (id === 'rolling') { m.board = rollingBoard(0, random); m.block = { ...m.board.start }; m.moves = 0; m.falls = 0; m.undo = []; }
  if (id === 'tarot' || id === 'pack') { m.drawn = 0; m.total = id === 'tarot' ? 5 : 3; m.revealed = null; m.revealTime = 0; m.history = []; }
  if (id === 'territory') {
    m.w = 13; m.h = 15; m.cx = 6; m.cy = 13; m.direction = 'up'; m.trail = [];
    m.owned = new Set(); for (let y = 12; y < m.h; y++) for (let x = 0; x < m.w; x++) m.owned.add(keyOf(x,y));
    m.ghosts = [{ x:2, y:2 }, { x:10, y:5 }]; m.ghostStep = 0; m.boost = 0; m.boostCooldown = 0;
  }
  if (['pellets', 'pupil', 'capture'].includes(id)) {
    m.maze = makeMaze(id === 'capture' ? 29 : 13, id === 'capture' ? 35 : 15, random);
    if(id!=='pupil')braidMaze(m.maze,random,id==='capture'?.28:.48);
    m.tracks=[];m.dash=0;m.dashCooldown=0;m.wormPause=0;
    m.cx = 1; m.cy = 1; m.worm = { ...m.maze.goal }; m.ghostStep = 0; m.power = 0; m.hold = 0;
    if (id === 'pellets') {
      m.pellets = new Set(); for (let y=0;y<m.maze.h;y++) for(let x=0;x<m.maze.w;x++) if(openCell(m.maze,x,y)&&(x!==1||y!==1))m.pellets.add(keyOf(x,y));
      m.fruit = new Set([...m.pellets].filter((_,i)=>i%18===0)); m.eaten=0; m.target=hard?66:54;
      m.ghosts = [{ ...m.maze.goal }, { x:1, y:m.maze.h-2 }, {x:m.maze.w-2,y:1}];
      m.fruit.add('3,1');
    }
  }
  if (id === 'net') { m.netY=165;m.gaps=[60,140,220];m.integrity=3;m.netWave=0;m.netHit=false;m.netEye=0; }
  if (id === 'breath') { m.flame = {x:140,y:174}; m.eyes = Array.from({length:8},(_,i)=>({x:40+(i%4)*66,y:245+Math.floor(i/4)*105,burned:false}));m.burned=0;m.flameTick=0; }
  if (id.startsWith('gaze')) m.zones = Array.from({length:id==='gaze-up'?3:1},(_,i)=>({x:50+i*85,y:235,exposure:0}));
  if (id === 'chase') createChase(m);
  return m;
}
export function eyeRect(index) { return { x: 23 + index % 3 * 80, y: 170 + Math.floor(index / 3) * 66, w: 74, h: 58 }; }
export function chooseEye(m, index) {
  if (m.done || m.cooldown || index < 0 || index > 11) return;
  m.focus = index;
  if (index === m.odd) {
    m.round++; effect(m,'boss',20); effect(m,'heal',3); feedback(m,'找到異瞳！');
    if(m.round===3)finish(m,true,20);else differenceRound(m);
  } else { hurt(m,5); feedback(m,'再看清楚瞳孔'); }
  m.cooldown = 220;
}
export function drawCard(m) {
  if (m.done || m.cooldown || m.revealTime > 0) return;
  if (m.revealed) {
    const card = m.revealed; m.history.push(card); m.drawn++;
    for(const e of cardEffects(card,m.id))effect(m,e.kind,e.amount);
    m.revealed = null; m.cooldown = 250;
    if (m.drawn === m.total) finish(m,true,m.id==='tarot'?0:0);
    return;
  }
  m.revealed = m.id==='tarot'?{...TAROT[Math.floor(m.random()*TAROT.length)],reversed:m.random()<.3}:{rarity:cardRarity(m.random()),variant:Math.floor(m.random()*5)};
  m.revealTime = m.id==='pack'&&['SR','SAR'].includes(m.revealed.rarity)?1100:500;
  feedback(m,m.id==='tarot'?`${m.revealed.name} · ${m.revealed.reversed?'逆位':'正位'}`:`${m.revealed.rarity} · 秘藏現身`);
}
export function rollingMove(m, direction) {
  if(m.done||m.cooldown||m.roll||!DIRS[direction])return;
  const next=rollBlock(m.block,direction);
  m.roll={from:{...m.block},to:next,direction,age:0,duration:280,valid:validBlock(m.board,next)};
  m.moves++;m.cooldown=430;
}
function settleRoll(m) {
  const {to,valid}=m.roll;m.roll=null;
  if(!valid){m.falls++;effect(m,'hurt',3);m.block={...m.board.start};m.undo=[];feedback(m,'跌落 · 回到起點');return;}
  m.undo.push({...m.block});m.block=to;
  if(!to.orientation&&to.x===m.board.goal.x&&to.y===m.board.goal.y){
    m.round++;effect(m,'boss',25);effect(m,'heal',5);
    if(m.round===3)finish(m,true,25);
    else{m.board=rollingBoard(m.round);m.block={...m.board.start};m.undo=[];feedback(m,'直立入洞！');m.cooldown=800;}
  }
}
function cellMove(m, direction) {
  if(!DIRS[direction])return;
  const [dx,dy]=DIRS[direction],x=m.cx+dx,y=m.cy+dy;
  if(m.id==='territory'){
    if(x<0||x>=m.w||y<0||y>=m.h)return;
    const key=keyOf(x,y);
    if(m.trail.includes(key)){hurt(m,12);m.trail=[];m.cx=6;m.cy=13;return;}
    m.cx=x;m.cy=y;
    if(m.owned.has(key)){
      if(m.trail.length){
        const fence=new Set([...m.owned,...m.trail]);const outside=new Set();const queue=m.ghosts.filter(g=>!fence.has(keyOf(g.x,g.y)));
        for(const g of queue)outside.add(keyOf(g.x,g.y));
        for(let i=0;i<queue.length;i++)for(const [vx,vy]of Object.values(DIRS)){
          const nx=queue[i].x+vx,ny=queue[i].y+vy,k=keyOf(nx,ny);
          if(nx<0||nx>=m.w||ny<0||ny>=m.h||fence.has(k)||outside.has(k))continue;
          outside.add(k);queue.push({x:nx,y:ny});
        }
        const before=m.owned.size;
        for(let yy=0;yy<m.h;yy++)for(let xx=0;xx<m.w;xx++)if(!outside.has(keyOf(xx,yy)))m.owned.add(keyOf(xx,yy));
        m.trail=[];if(m.owned.size>before){effect(m,'heal',3);effect(m,'boss',Math.min(20,m.owned.size-before));feedback(m,'圈回領域！');}
        if(m.owned.size/(m.w*m.h)>=(m.hard?.43:.38))finish(m,true,35);
      }
    }else m.trail.push(key);
  }else if(openCell(m.maze,x,y)){
    m.cx=x;m.cy=y;
    if(m.id==='pellets'){
      const key=keyOf(x,y);if(m.pellets.delete(key)){m.eaten++;if(m.eaten%8===0){effect(m,'heal',3);effect(m,'boss',12);}if(m.eaten>=m.target)finish(m,true,30);}
      if(m.fruit.delete(key)){m.power=4000;feedback(m,'綠果 · 反制眼鬼');}
    }
  }
}
export function roundInput(m, action) {
  if(m.done)return;
  if(['window','eye-room'].includes(m.id)){loreInput(m,action,finish);return;}
  if(m.id==='difference'){
    if(action==='action')chooseEye(m,m.focus);
    else if(DIRS[action]){const [dx,dy]=DIRS[action];m.focus=(m.focus+dx+dy*3+12)%12;}
  }else if(m.id==='tarot'||m.id==='pack'){if(action==='action')drawCard(m);}
  else if(m.id==='rolling'){
    if(action==='alt'&&m.undo.length&&!m.cooldown){m.block=m.undo.pop();m.cooldown=150;}
    else rollingMove(m,action);
  }else if(['territory','pellets','pupil','capture'].includes(m.id)){
    if(DIRS[action]){cellMove(m,action);m.step=150;m.direction=action;}
    if(action==='action'&&m.id==='territory'&&!m.boostCooldown){m.boost=1200;m.boostCooldown=4000;}
    if(action==='alt'&&m.id==='capture'&&!m.dashCooldown){m.dash=2400;m.dashCooldown=7000;feedback(m,'追蹤衝刺！');}
    if(action==='action'&&m.id==='capture'&&Math.abs(m.cx-m.worm.x)+Math.abs(m.cy-m.worm.y)<=1){m.done=true;m.success=true;effect(m,'capture',1);feedback(m,'捉到嫉妒本體！');}
  }else if(m.id.startsWith('steal')){
    if(action==='action'&&m.tether&&!m.tether.broken){
      m.tether.hits++;feedback(m,`斷繩 ${m.tether.hits}/3`);
      if(m.tether.hits>=3){m.tether.broken=true;m.counters++;effect(m,'heal',m.tether.stolen);effect(m,'boss',35);effect(m,'slow',0);feedback(m,'搶回生命！');}
    }else if(action==='action'){
      const claw=(m.claws||[]).find(v=>v.age>=1200&&v.age<1900&&!v.deflected&&Math.hypot(m.x-v.tx,m.y-v.ty)<45);
      if(claw){claw.deflected=true;m.counters++;effect(m,'boss',25);feedback(m,'反擊觸手！');}
    }
  }else if(m.id==='net'){
    const ex=m.gaps[m.netEye]+26,ey=m.netY;
    if(action==='action'&&!m.netHit&&Math.hypot(m.x-ex,m.y-ey)<42){m.netHit=true;m.integrity--;m.counters++;effect(m,'boss',22);effect(m,'heal',4);feedback(m,'擊碎金眼！');if(!m.integrity)finish(m,true,35);}
  }else if(m.id==='chase'&&action==='action'&&m.y>=m.ground-1){m.vy=-335;}
}
export function gridLayout(m) {
  const w=m.id==='territory'?m.w:m.maze.w,h=m.id==='territory'?m.h:m.maze.h;
  if(m.id==='capture'){const cols=11,rows=13,cell=22,offsetX=clamp(m.cx-5,0,w-cols),offsetY=clamp(m.cy-6,0,h-rows);return{x:19,y:166,cell,w:cols,h:rows,offsetX,offsetY};}
  const cell=Math.min(240/w,286/h);return{x:(280-w*cell)/2,y:166+(286-h*cell)/2,cell,w,h,offsetX:0,offsetY:0};
}
export function roundPoint(m,x,y){
  if(m.done)return;
  if(['window','eye-room'].includes(m.id)){lorePoint(m,x,y,finish);return;}
  if(m.id==='difference'){const i=Array.from({length:12},(_,i)=>i).find(i=>pointInRect(x,y,eyeRect(i)));if(i!=null)chooseEye(m,i);}
  else if(['tarot','pack'].includes(m.id)&&pointInRect(x,y,CARD_LAYOUT))drawCard(m);
  else if(['territory','pellets','pupil','capture'].includes(m.id)){
    const g=gridLayout(m),cx=Math.floor((x-g.x)/g.cell)+(g.offsetX||0),cy=Math.floor((y-g.y)/g.cell)+(g.offsetY||0);
    const dx=cx-m.cx,dy=cy-m.cy;
    if(dx||dy)roundInput(m,Math.abs(dx)>Math.abs(dy)?dx<0?'left':'right':dy<0?'up':'down');
  }else if(ATTACKS.includes(m.id)&&m.id!=='pupil')m.target={x:clamp(x,22,258),y:clamp(y,168,444)};
}
function moveHeart(m,dt,held,speed){
  const sec=dt/1000;let dx=(held.has('right')?1:0)-(held.has('left')?1:0),dy=(held.has('down')?1:0)-(held.has('up')?1:0);
  if(dx||dy){m.target=null;const len=Math.hypot(dx,dy);m.x+=dx/len*speed*sec;m.y+=dy/len*speed*sec;}
  else if(m.target){const x=m.target.x-m.x,y=m.target.y-m.y,len=Math.hypot(x,y);if(len){const step=Math.min(len,speed*sec);m.x+=x/len*step;m.y+=y/len*step;}}
  m.x=clamp(m.x,22,258);m.y=clamp(m.y,168,444);
}
export const LASER_EYES = [[34,195],[140,177],[246,195],[250,320],[140,442],[30,320]];
const LASER_RULES=Object.freeze({track:750,warning:750,fire:600,gap:700,cycle:4200});
const CROSSED_LASER_RULES=Object.freeze({track:550,warning:550,fire:450,gap:500,cycle:3100});
export const laserRules=m=>m.id==='laser-up'?CROSSED_LASER_RULES:LASER_RULES;
export function laserEyePosition(m,index){
  if(m.id!=='laser-up')return {x:LASER_EYES[index][0],y:LASER_EYES[index][1]};
  const angle=-5*Math.PI/6+index*Math.PI/3+m.clock*.0003;
  return {x:140+Math.cos(angle)*107,y:315+Math.sin(angle)*130};
}
function laserWave(m,wave){
  const count=m.id==='laser-up'?3:2,rules=laserRules(m);
  m.beams=Array.from({length:count},(_,i)=>{
    const index=(wave*2+i*2)%6;
    return {origin:laserEyePosition(m,index),target:{x:m.x,y:m.y},index,age:-i*rules.gap,locked:false,firing:false,angle:0};
  });
}
function distanceToLine(x,y,a,b){const vx=b.x-a.x,vy=b.y-a.y,len=vx*vx+vy*vy;const t=clamp(((x-a.x)*vx+(y-a.y)*vy)/(len||1),0,1);return Math.hypot(x-a.x-t*vx,y-a.y-t*vy);}
export function updateRound(m,dt,held=new Set(),speedScale=1){
  if(m.done)return;
  dt=clamp(dt,0,50);m.clock+=dt;m.invulnerable=Math.max(0,m.invulnerable-dt);m.cooldown=Math.max(0,m.cooldown-dt);m.feedbackTime=Math.max(0,m.feedbackTime-dt);
  if(['window','eye-room'].includes(m.id))updateLore(m,dt,held,finish);
  if(m.id==='tarot'||m.id==='pack'){m.revealTime=Math.max(0,m.revealTime-dt);}
  if(m.id==='rolling'&&m.roll){m.roll.age+=dt;if(m.roll.age>=m.roll.duration)settleRoll(m);}
  if(['territory','pellets','pupil','capture'].includes(m.id)){
    m.step=Math.max(0,m.step-dt);m.ghostStep+=dt;
    m.power=Math.max(0,(m.power||0)-dt);m.boost=Math.max(0,(m.boost||0)-dt);m.boostCooldown=Math.max(0,(m.boostCooldown||0)-dt);m.dash=Math.max(0,(m.dash||0)-dt);m.dashCooldown=Math.max(0,(m.dashCooldown||0)-dt);m.wormPause=Math.max(0,(m.wormPause||0)-dt);
    if(!m.step){const direction=Object.keys(DIRS).find(d=>held.has(d))||(m.id==='territory'?m.direction:null);if(direction){cellMove(m,direction);m.step=m.dash?75:m.boost?80:150;}}
    if(m.id==='territory'&&m.ghostStep>=(m.hard?260:350)){
      m.ghostStep=0;for(const ghost of m.ghosts){
        const choices=Object.values(DIRS).map(([dx,dy])=>({x:ghost.x+dx,y:ghost.y+dy})).filter(g=>g.x>=0&&g.x<m.w&&g.y>=0&&g.y<m.h&&!m.owned.has(keyOf(g.x,g.y)));
        if(choices.length){const next=choices[Math.floor(m.random()*choices.length)];ghost.x=next.x;ghost.y=next.y;}
        if(m.trail.includes(keyOf(ghost.x,ghost.y))||(ghost.x===m.cx&&ghost.y===m.cy)){hurt(m,18);m.trail=[];m.cx=6;m.cy=13;}
      }
    }
    if(m.id==='pellets'&&m.ghostStep>=(m.hard?235:290)){
      m.ghostStep=0;for(const ghost of m.ghosts){if(ghost.stun>0)continue;const route=mazeRoute(m.maze,ghost,{x:m.cx,y:m.cy});if(route?.length){const[dx,dy]=DIRS[m.power?Object.keys(DIRS).find(d=>openCell(m.maze,ghost.x+DIRS[d][0],ghost.y+DIRS[d][1])&&d!==route[0])||route[0]:route[0]];ghost.x+=dx;ghost.y+=dy;}}
    }
    if(m.id==='pellets')for(const ghost of m.ghosts){
      ghost.stun=Math.max(0,(ghost.stun||0)-dt);
      if(!ghost.stun&&ghost.x===m.cx&&ghost.y===m.cy){if(m.power){effect(m,'boss',15);ghost.x=m.maze.goal.x;ghost.y=m.maze.goal.y;ghost.stun=1200;feedback(m,'反制眼鬼！');}else hurt(m,12);}
    }
    if(m.id==='pupil'){
      if(m.cx===m.maze.goal.x&&m.cy===m.maze.goal.y){m.hold+=dt;if(m.hold>=3000)finish(m,true,75);}else m.hold=0;
    }
    if(m.id==='capture'&&m.ghostStep>=(m.hard?210:250)){
      m.ghostStep=0;
      const distances=mazeDistances(m.maze,{x:m.cx,y:m.cy}),d=distances.get(keyOf(m.worm.x,m.worm.y))||0;
      if(!m.wormPause&&d<18){
        const options=Object.values(DIRS).map(([dx,dy])=>({x:m.worm.x+dx,y:m.worm.y+dy})).filter(g=>openCell(m.maze,g.x,g.y)).sort((a,b)=>(distances.get(keyOf(b.x,b.y))||0)-(distances.get(keyOf(a.x,a.y))||0));
        if(options.length){m.tracks.push({...m.worm,at:m.clock});m.worm=options[0];m.tracks=m.tracks.filter(v=>m.clock-v.at<6000);}
        // It pauses to look back; sprint closes the gap without a guaranteed catch.
        if(m.clock%6000<300)m.wormPause=1000;
      }
    }

  }
  if(ATTACKS.includes(m.id)&&m.id!=='pupil'){
    moveHeart(m,dt,held,175*speedScale);
    if(m.id.startsWith('laser')){
      const rules=laserRules(m),wave=Math.floor(m.clock/rules.cycle);
      if(m.wave!==wave){m.wave=wave;laserWave(m,wave);}
      const fireStart=rules.track+rules.warning;
      for(const beam of m.beams||[]){
        beam.age+=dt;beam.origin=laserEyePosition(m,beam.index);if(beam.age<0)continue;
        if(beam.age<rules.track)beam.target={x:m.x,y:m.y};
        else beam.locked=true;
        // Lock the marked target, not a stale off-screen emitter. Moving eyes,
        // warning rays and actual collision all share this visible origin.
        beam.angle=Math.atan2(beam.target.y-beam.origin.y,beam.target.x-beam.origin.x);
        beam.firing=beam.age>=fireStart&&beam.age<fireStart+rules.fire;
        const sweep=beam.firing?(beam.age-fireStart-rules.fire/2)/rules.fire*.18:0,a=beam.angle+sweep;
        beam.end={x:beam.origin.x+Math.cos(a)*500,y:beam.origin.y+Math.sin(a)*500};
        if(beam.firing&&distanceToLine(m.x,m.y,beam.origin,beam.end)<(m.hard?11:8))hurt(m,m.hard?10:8);
      }
      m.firing=m.beams.some(b=>b.firing);
    }
    if(m.id.startsWith('steal')){
      const wave=Math.floor(m.clock/4200);
      if(wave!==m.wave){m.wave=wave;m.claws=Array.from({length:m.id==='steal-up'?2:1},(_,i)=>({ox:i?248:32,oy:190,tx:m.x+(i?35:0),ty:m.y,age:-i*650,deflected:false,hit:false}));}
      for(const v of m.claws){
        v.age+=dt;if(v.age<0)continue;
        if(v.age<750){v.tx=m.x;v.ty=m.y;}
        if(v.age>=1550&&v.age<1950&&!v.hit&&!v.deflected){v.hit=true;if(Math.hypot(m.x-v.tx,m.y-v.ty)<26&&!m.tether){effect(m,'hurt',20);effect(m,'slow',10000);m.tether={age:0,hits:0,stolen:20,broken:false,ox:v.ox,oy:v.oy};feedback(m,'被抓！連按空白鍵斷繩');}}
      }
      if(m.tether){m.tether.age+=dt;if(m.tether.age>2600||m.tether.broken)m.tether=null;}
    }
    if(m.id.startsWith('gaze'))for(const [i,z]of m.zones.entries()){
      const active=m.id==='gaze'||Math.floor(m.clock/1100)%3===i;
      const gain=Math.min(1,dt/(m.hard?620:850));if(active){z.x+=(m.x-z.x)*gain;z.y+=(m.y-z.y)*gain;}
      z.active=active;
      if(active&&Math.hypot(m.x-z.x,m.y-z.y)<(m.hard?40:34)){z.exposure+=dt;if(z.exposure>=1000){z.exposure-=1000;effect(m,'hurt',5);}}else z.exposure=Math.max(0,z.exposure-dt*2);
    }
    if(m.id==='net'){
      m.netY+=dt*(m.hard?.060:.048);
      if(m.netY>475){m.netY=155;m.netWave++;m.netHit=false;m.netEye=m.netWave%3;m.gaps=m.netWave%2?[45,128,211]:[60,140,220];}
      if(Math.abs(m.netY-m.y)<29&&!m.gaps.some(x=>Math.abs(x-m.x)<20))hurt(m,m.hard?12:9);
    }
    if(m.id==='breath'){
      const f=m.flame,sec=dt/1000;const dx=m.x-f.x,dy=m.y-f.y,len=Math.hypot(dx,dy)||1;f.x+=dx/len*102*sec;f.y+=dy/len*102*sec;
      if(m.clock%4400<3000){if(Math.hypot(dx,dy)<18)hurt(m,10);for(const eye of m.eyes)if(!eye.burned&&Math.hypot(f.x-eye.x,f.y-eye.y)<23){eye.burned=true;m.burned++;effect(m,'boss',16);effect(m,'heal',2);feedback(m,'引火燒瞳！');}}
      else if(m.clock%4400>4100){f.x=140;f.y=174;}
      if(m.burned>=5)finish(m,true,45);
    }
  }
  if(m.id==='chase'){
    const sec=dt/1000,previous=m.x;
    m.x+=m.speed*sec*(held.has('left')?0:held.has('right')?1.2:1);
    m.vy+=700*sec;m.y=Math.min(m.ground,m.y+m.vy*sec);if(m.y>=m.ground)m.vy=0;
    for(const obstacle of m.obstacles)if(m.x+7>obstacle.x&&m.x-7<obstacle.x+obstacle.w&&m.y+6>m.ground-obstacle.h){m.x=previous;hurt(m,5);}
    for(const fruit of m.fruit)if(!fruit.taken&&Math.hypot(m.x-fruit.x,m.y-fruit.y)<32){fruit.taken=true;effect(m,'heal',8);feedback(m,'拾到幽林綠果');}
    // Reaching the route goal completes the escape immediately. The 60 seconds
    // are a deadline, not a required survival time after showing 100% progress.
    if(m.x>=m.goal){m.x=m.goal;m.done=true;m.success=true;effect(m,'chaseClear',1);return;}
    const local=m.clock%4800;
    m.beam.origin={x:m.x-130,y:245};
    if(local<900)m.beam.angle=Math.atan2(m.y-245,130);
    m.beam.state=local<900?'warning':local<2450?'active':'rest';
    const origin=m.beam.origin,target={x:m.x,y:m.y};
    m.covered=m.covers.some(r=>r.x<target.x&&r.x+r.w>origin.x&&segmentHitsRect(origin,target,r));
    const angle=Math.atan2(m.y-origin.y,m.x-origin.x),delta=Math.atan2(Math.sin(angle-m.beam.angle),Math.cos(angle-m.beam.angle));
    if(m.beam.state==='active'&&!m.covered&&Math.abs(delta)<.23){m.exposure+=dt;if(m.exposure>=700){m.exposure-=700;effect(m,'hurt',8);feedback(m,'離開照射線，或停在樹後');}}else m.exposure=0;
    if(m.clock>=m.duration){m.done=true;m.success=false;effect(m,'chaseFail',40);}
  }
  if(m.clock>=m.duration&&!m.done){
    // The last window was actually erased before the deadline; its reveal
    // animation must not turn that completed goal into a timeout failure.
    if(m.id==='window'&&m.stage===5&&m.reveal>0)finish(m,true,20);
    else if(m.id==='net')finish(m,m.integrity===0,35);
    else if(ATTACKS.includes(m.id)&&m.id!=='pupil')finish(m,true,m.counters?25:12);
    else if(m.id==='capture'){m.done=true;m.success=false;feedback(m,'本體逃到更深處，可重試');}
    else finish(m,false);
  }
}
