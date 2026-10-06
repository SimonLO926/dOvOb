import { createRedRound, redPoint, redInput, updateRedRound, drawRedRound } from './pride-red.mjs';
import { drawPrideBackdrop } from './pride-theme.mjs';
import { prideHud, beginPrideArena, prideWorldY } from './pride-layout.mjs';
import { CHALLENGE_IDS, createPrideChallenge, prideChallengeInput, prideChallengePoint, updatePrideChallenge, drawPrideChallenge } from './pride-challenges.mjs';
import { TOWER_ID, createPrideTower, prideTowerInput, updatePrideTower, drawPrideTower } from './pride-tower.mjs';
import * as doodle from './minigames/doodle.mjs';
import { createPrideAttack, pridePoint, prideInput, updatePrideAttack, drawPrideAttack } from './pride-attacks.mjs';
import { avatar, path } from './pride-visuals.mjs';
import { MIRROR_GAME_IDS, createMirrorGame, mirrorGameInput, mirrorGamePoint, updateMirrorGame, drawMirrorGame } from './pride-mirror-games.mjs';
export { MIRROR_GAME_IDS } from './pride-mirror-games.mjs';
import { drawEncounterMirror } from './pride-second-visuals.mjs';
// Shared mirror encounter state: it survives every round change.
// puzzlePending/puzzleCleared now track the half-health Tower story only.
export const PRIDE_SECOND_RULES = Object.freeze({normal:1200,hard:1600,mirrorHp:120});
export const PRIDE_SECOND_ATTACKS = Object.freeze(['pride-kaleidoscope','pride-shard-storm','pride-nested','pride-gaze-up','pride-reflect-up','pride-crown-up']);
export const PRIDE_ROTATING_GAMES = Object.freeze([...MIRROR_GAME_IDS, doodle.id]);
export const PRIDE_SECOND_GAMES = Object.freeze([...PRIDE_ROTATING_GAMES, TOWER_ID]);
export const PRIDE_SECOND_MODES = Object.freeze([...PRIDE_SECOND_ATTACKS,...PRIDE_SECOND_GAMES,'pride-red-survival']);
export const SECOND_NAMES = {'pride-tower':'巴別塔 · 半血試煉','pride-doodle':'爬塔','pride-kaleidoscope':'鏡像萬花筒','pride-shard-storm':'碎鏡風暴','pride-nested':'鏡中鏡','pride-gaze-up':'王之蔑視・改','pride-reflect-up':'鏡像反射・改','pride-crown-up':'加冕衝擊・改','pride-shard-puzzle':'碎鏡拼圖','pride-truth-trial':'真假鏡','pride-mirror-maze':'鏡面迷宮','pride-red-survival':'紅鏡生存'};
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function initPrideSecond(s){s.mirrorWorld={clock:0,selected:0,red:false,puzzleCleared:false,puzzlePending:false,redCleared:false,redPending:false,particles:[],feedback:[],bonuses:0,mirrors:['攻','守','幻'].map((name,i)=>({name,x:55+i*85,y:245,hp:120,broken:false,color:['#ff5369','#53baff','#bb71ff'][i],illusions:i===2?2:0}))};}
export function breakPrideMirror(s,i,{story=false}={}){const w=s.mirrorWorld,v=w.mirrors[i];if(!v||v.broken)return;if(!story){v.hp=Math.max(1,v.hp);return;}v.broken=true;v.hp=0;w.bonuses++;w.feedback.push({x:v.x,y:v.y-15,text:'破鏡獎勵 +1',life:900});s.events.push({key:'prideMirrorBreakSound'});for(let n=0;n<24;n++){const a=n*Math.PI/12;w.particles.push({x:v.x,y:v.y,vx:Math.cos(a)*90,vy:Math.sin(a)*90,life:700,color:v.color});}}
export function mirrorWeakpoint(s,i){const w=s.mirrorWorld,v=w.mirrors[i];return {x:v.x+(i===0?Math.sin(w.clock*.003)*17:0),y:v.y,open:w.clock%4000<1500,shield:i===1&&w.clock%4000>=1500};}
export function strikePrideMirror(s,i,amount,{x,y,scripted=false}={}){const w=s.mirrorWorld,v=w.mirrors[i];if(!v)return 0;if(v.broken){const p=mirrorWeakpoint(s,i);if(w.mirrors.every(v=>v.broken)&&!scripted&&p.open&&Number.isFinite(x)&&Number.isFinite(y)&&Math.hypot(x-p.x,y-p.y)<=22){s.events.push({key:'prideMirrorHitSound'});w.feedback.push({x:p.x,y:p.y,text:`核心 −${Math.ceil(amount)}`,life:700});for(let n=0;n<10;n++){const a=n*Math.PI/5;w.particles.push({x:p.x,y:p.y,vx:Math.cos(a)*65,vy:Math.sin(a)*65,life:350,color:v.color});}return amount;}return 0;}const p=mirrorWeakpoint(s,i);if(!scripted){if(!p.open||!Number.isFinite(x)||!Number.isFinite(y)||Math.hypot(x-p.x,y-p.y)>22)return 0;if(w.mirrors[1].hp>0&&w.clock%4000>=1500)return 0;if(i===2&&v.illusions>0){v.illusions--;s.events.push({key:'prideMirrorHitSound'});w.feedback.push({x:v.x,y:v.y,text:`幻影消散 · 餘${v.illusions}`,life:700});for(let n=0;n<8;n++){const a=n*Math.PI/4;w.particles.push({x:v.x,y:v.y,vx:Math.cos(a)*65,vy:Math.sin(a)*65,life:350,color:v.color});}return 0;}}const dealt=Math.min(Math.max(0,v.hp-1),amount);v.hp-=dealt;if(dealt){s.events.push({key:'prideMirrorHitSound'});w.feedback.push({x:v.x,y:v.y,text:`−${Math.ceil(dealt)}`,life:700});for(let n=0;n<10;n++){const a=n*Math.PI/5;w.particles.push({x:v.x,y:v.y,vx:Math.cos(a)*65,vy:Math.sin(a)*65,life:350,color:v.color});}}return dealt || amount;}
export function prideSecondThresholds(s){
 const w=s.mirrorWorld;
 if(w.puzzleCleared)breakPrideMirror(s,1,{story:true});
 if(w.puzzleCleared && s.bossHp<=s.bossMaxHp*.15){breakPrideMirror(s,2,{story:true});w.red=true;w.selected=0;w.mirrors[0].x=140;}
}
export const UPGRADED_BASES = Object.freeze({'pride-gaze-up':'pride-gaze','pride-reflect-up':'pride-mirror','pride-crown-up':'pride-crown-shock'});
const COUNTER_MIRRORS = Object.freeze({
 'pride-gaze-up':{name:'攻之鏡',color:'#ff5369',x:55,effect:'光束傷害減半'},
 'pride-reflect-up':{name:'幻之鏡',color:'#bb71ff',x:225,effect:'假鏡消散 · 真鏡現形'},
 'pride-crown-up':{name:'守之鏡',color:'#53baff',x:140,effect:'衝擊波粉碎 · 傷害減半'}
});
// One opportunity per short attack round, independent of the persistent mirror HP.
export const PRIDE_COUNTER_RULES = Object.freeze({chance:.35,lifetime:4000,radius:24,fire:180,speed:420});
export function createPrideSecondRound(s){
 if(s.mode==='pride-red-survival')return createRedRound(s);
 if(s.mode===TOWER_ID)return createPrideTower(s);
 if(s.mode===doodle.id){
  const m=doodle.init({difficulty:s.difficulty,random:s.random});
  return {...m,duration:m.timeLeft,clock:0,finished:false};
 }
 if(CHALLENGE_IDS.includes(s.mode))return createPrideChallenge(s);
 if(MIRROR_GAME_IDS.includes(s.mode))return createMirrorGame(s);
 if(UPGRADED_BASES[s.mode])return {...createPrideAttack(UPGRADED_BASES[s.mode],{difficulty:s.difficulty,bossHpRatio:s.bossHp/(s.bossMaxHp||100),upgraded:true}),duration:14000,damage:0,finished:false,counter:{eligible:(s.random||Math.random)()<PRIDE_COUNTER_RULES.chance,appeared:false,mirror:null,resolved:false,shots:[],fire:0,particles:[],feedback:null}};
 return {clock:0,x:140,y:450,target:null,bullets:[],shots:[],spawn:0,fire:0,wave:0,window:0,damage:0,finished:false,duration:s.mode==='pride-red-survival'?14000:14000};
}
export function prideSecondPoint(s,x,y){
 if(s.mode==='pride-red-survival'){redPoint(s.mini,x,y);return;}
 if(s.mode===TOWER_ID){prideTowerInput(s,'action');return;}
 if(s.mode===doodle.id){doodle.point(s.mini,x,y);return;}
 if(CHALLENGE_IDS.includes(s.mode)){prideChallengePoint(s,x,y);return;}
 if(MIRROR_GAME_IDS.includes(s.mode)){mirrorGamePoint(s,x,y);return;}
 if(UPGRADED_BASES[s.mode]){const v=s.mini.counter.mirror;if(v&&Math.hypot(x-v.x,prideWorldY(y)-v.y)<=PRIDE_COUNTER_RULES.radius){shootCounterMirror(s);return;}pridePoint(s,x,y);return;}
 const w=s.mirrorWorld,m=s.mini;
 y=prideWorldY(y);
 if(y<285){w.selected=w.mirrors.map((v,i)=>({v,i})).filter(({v})=>!v.broken).sort((a,b)=>Math.abs(x-a.v.x)-Math.abs(x-b.v.x))[0]?.i??0;m.aim={x,y};prideSecondInput(s,'action');}
 else m.target={x:clamp(x,22,258),y:clamp(y,300,480)};
}
export function prideSecondInput(s,action){
 if(s.mode==='pride-red-survival'){redInput(s.mini,action);return;}
 if(s.mode===TOWER_ID){prideTowerInput(s,action);return;}
 if(s.mode===doodle.id){doodle.input(s.mini,action);return;}
 if(CHALLENGE_IDS.includes(s.mode)){prideChallengeInput(s,action);return;}
 if(MIRROR_GAME_IDS.includes(s.mode)){mirrorGameInput(s,action);return;}
 if(UPGRADED_BASES[s.mode]){if(action==='action'&&s.mini.counter.mirror){shootCounterMirror(s);if(s.mode==='pride-crown-up')prideInput(s,action);}else prideInput(s,action);return;}
 const m=s.mini,w=s.mirrorWorld;
 if(action==='alt'){for(let n=1;n<=3;n++){const i=(w.selected+n)%3;if(!w.mirrors[i].broken){w.selected=i;break;}}m.aim=null;return;}
 if(action!=='action'||m.fire)return;
 m.fire=220;const p=m.aim||mirrorWeakpoint(s,w.selected),a=Math.atan2(p.y-m.y,p.x-m.x);
 m.shots.push({x:m.x,y:m.y,vx:Math.cos(a)*370,vy:Math.sin(a)*370});
}
function volley(s){const m=s.mini,w=s.mirrorWorld; m.wave++;m.window=1500;w.clock=Math.floor(w.clock/4000)*4000;const attack=w.mirrors[0].broken?.6:1,illusion=w.mirrors[2].broken?0:3,n=Math.round((w.red?(s.difficulty==='hard'?20:12):10)*attack)+illusion;for(let i=0;i<n;i++){const a=i/n*Math.PI*2+m.wave*.25;m.bullets.push({x:140,y:300,vx:Math.cos(a)*85,vy:Math.sin(a)*85,red:false,tracking:w.red,age:0});}m.spawn=w.red?800:2300;}
function shootCounterMirror(s){
 const m=s.mini,k=m.counter,v=k.mirror;
 if(!v||m.clock>=v.until||k.fire)return;
 const a=Math.atan2(v.y-m.y,v.x-m.x);k.fire=PRIDE_COUNTER_RULES.fire;
 k.shots.push({x:m.x,y:m.y,vx:Math.cos(a)*PRIDE_COUNTER_RULES.speed,vy:Math.sin(a)*PRIDE_COUNTER_RULES.speed});
}
function hitCounterMirror(s){
 const m=s.mini,k=m.counter,v=k.mirror;if(!v)return;
 k.mirror=null;k.resolved=true;k.shots=[];
 if(s.mode==='pride-reflect-up'){
  m.mirrors=m.mirrors.filter(v=>v.designated);m.bullets=m.bullets.filter(b=>!b.enemy);
  for(const real of m.mirrors)real.visualImpact=m.clock;
 }else if(s.mode==='pride-crown-up')m.hazards=[];
 k.feedback={x:v.x,y:v.y,text:v.effect,at:m.clock};
 s.events?.push({key:'prideMirrorBreakSound'});
 for(let n=0;n<24;n++){const a=n*Math.PI/12;k.particles.push({x:v.x,y:v.y,vx:Math.cos(a)*100,vy:Math.sin(a)*100,life:700,color:v.color});}
}
function updateUpgraded(s,elapsed,api={}){
 const m=s.mini,k=m.counter,dt=clamp(elapsed,0,50),sec=dt/1000;
 k.fire=Math.max(0,k.fire-dt);
 k.particles=k.particles.filter(p=>(p.life-=dt)>0);
 for(const p of k.particles){p.x+=p.vx*sec;p.y+=p.vy*sec;}
 if(k.mirror&&m.clock+dt>=k.mirror.until){k.mirror=null;k.shots=[];}
 for(const b of k.shots){
  const ox=b.x,oy=b.y;b.x+=b.vx*sec;b.y+=b.vy*sec;
  const v=k.mirror;if(!v)continue;
  const dx=b.x-ox,dy=b.y-oy,length=dx*dx+dy*dy;
  const t=length?clamp(((v.x-ox)*dx+(v.y-oy)*dy)/length,0,1):0;
  if(Math.hypot(ox+t*dx-v.x,oy+t*dy-v.y)<=PRIDE_COUNTER_RULES.radius){hitCounterMirror(s);break;}
 }
 k.shots=k.shots.filter(b=>b.x>5&&b.x<275&&b.y>170&&b.y<510);
 updatePrideAttack(s,dt,{...api,hurt:(state,amount,reason)=>api.hurt?.(state,k.resolved&&s.mode!=='pride-reflect-up'?amount/2:amount,reason)});
 // The original engine rebuilds reflection mirrors on each wave.
 if(k.resolved&&s.mode==='pride-reflect-up')m.mirrors=m.mirrors.filter(v=>v.designated);
 if(k.eligible&&!k.appeared&&m.wave>0){
  k.appeared=true;k.mirror={...COUNTER_MIRRORS[s.mode],y:230,until:m.clock+PRIDE_COUNTER_RULES.lifetime};
  s.events?.push({key:'prideMirrorAppearSound'});
 }
}
export function updatePrideSecond(s,dt,api){const m=s.mini,w=s.mirrorWorld,sec=dt/1000;w.clock+=dt;if(!UPGRADED_BASES[s.mode]&&s.mode!=='pride-red-survival')m.clock+=dt;w.feedback=w.feedback.filter(f=>(f.life-=dt)>0);w.particles=w.particles.filter(p=>(p.life-=dt)>0);for(const p of w.particles){p.x+=p.vx*sec;p.y+=p.vy*sec;}
 if(s.mode==='pride-red-survival'){updateRedRound(s,dt,api);return;}
 if(s.mode===TOWER_ID){
  updatePrideTower(s,dt);
  while(m.hitQueue>0){
   m.hitQueue--;
   const last=m.finished&&m.hitQueue===0;
   strikePrideMirror(s,m.designated,last?w.mirrors[m.designated].hp:m.damagePerFloor,{scripted:true});
  }
  for(const i of m.rewards.splice(0))breakPrideMirror(s,i);if(m.finished){w.puzzleCleared=true;breakPrideMirror(s,1,{story:true});}return;
 }
 if(s.mode===doodle.id){
  m.held=s.held;doodle.update(m,dt);s.timeLeft=m.timeLeft;
  m.finished=m.status==='won';m.failed=m.status==='lost';
  if(m.finished&&!m.rewarded){m.rewarded=true;breakPrideMirror(s,w.selected);}
  return;
 }
 if(CHALLENGE_IDS.includes(s.mode)){
  updatePrideChallenge(s,dt,{...api,hit:(state,amount)=>{
   if(!strikePrideMirror(state,w.selected,18,{scripted:true}))state.events?.push({key:'prideMirrorHitSound'});
   api?.hit?.(state,amount);
  }});
  return;
 }
 if(MIRROR_GAME_IDS.includes(s.mode)){updateMirrorGame(s,dt);for(const i of m.rewards.splice(0))breakPrideMirror(s,i);return;}
 if(UPGRADED_BASES[s.mode]){updateUpgraded(s,dt,api);return;}
 if(w.red)w.selected=0;
 let dx=Number(s.held.has('right'))-Number(s.held.has('left')),dy=Number(s.held.has('down'))-Number(s.held.has('up'));
 if(dx||dy)m.target=null;else if(m.target){const d=Math.hypot(m.target.x-m.x,m.target.y-m.y);if(d>2){dx=(m.target.x-m.x)/d;dy=(m.target.y-m.y)/d;}}
 const length=Math.max(1,Math.hypot(dx,dy));m.x=clamp(m.x+dx/length*170*sec,22,258);m.y=clamp(m.y+dy/length*170*sec,300,480);
 m.spawn-=dt;if(m.spawn<=0)volley(s);
 for(const b of m.bullets){b.age+=dt;if(b.tracking){const a=Math.atan2(m.y-b.y,m.x-b.x);b.vx+=Math.cos(a)*35*sec;b.vy+=Math.sin(a)*35*sec;}b.x+=b.vx*sec;b.y+=b.vy*sec;if(Math.hypot(b.x-m.x,b.y-m.y)<10){api.hurt(s,8,'prideShardHit');b.dead=true;}}
 for(const shot of m.shots){shot.x+=shot.vx*sec;shot.y+=shot.vy*sec;for(let i=0;i<3;i++){const p=mirrorWeakpoint(s,i);if(!shot.dead&&Math.hypot(shot.x-p.x,shot.y-p.y)<22){shot.dead=true;const damage=m.window>0?strikePrideMirror(s,i,18,{x:shot.x,y:shot.y}):0;if(damage){m.damage+=damage;api.hit(s,damage);}}}}
 m.shots=m.shots.filter(b=>!b.dead&&b.y>170&&b.y<510);m.bullets=m.bullets.filter(b=>!b.dead&&b.age<6000&&b.x>10&&b.x<270&&b.y>170&&b.y<510);
}
export function drawPrideSecond(c,s,reduced=false,{screenShake=true}={}){if(s.mode==='pride-red-survival'){drawRedRound(c,s,reduced);return;}if(s.mode===TOWER_ID){drawPrideTower(c,s,reduced);return;}if(s.mode===doodle.id){doodle.render(c,s.mini,s);return;}if(MIRROR_GAME_IDS.includes(s.mode)){drawMirrorGame(c,s);return;}if(UPGRADED_BASES[s.mode]){drawUpgraded(c,s,reduced,screenShake);return;}const w=s.mirrorWorld,m=s.mini;c.save();drawSecondBackdrop(c,s,reduced);const challenge=CHALLENGE_IDS.includes(s.mode);if(!challenge)beginPrideArena(c);if(w.red&&!reduced&&screenShake)c.translate(Math.sin(w.clock*.09)*2,Math.cos(w.clock*.11)*2);c.font='11px sans-serif';c.textAlign='center';for(let i=0;i<3;i++){const v=w.mirrors[i],p=mirrorWeakpoint(s,i);if(v.broken&&!w.mirrors.every(v=>v.broken))continue;if(challenge){c.save();c.translate(v.x,218);c.scale(.55,.55);c.translate(-v.x,-v.y);}drawEncounterMirror(c,v,i,p,w.selected===i,w.clock,reduced,challenge);if(challenge)c.restore();if(v.broken&&w.mirrors.every(v=>v.broken)&&!CHALLENGE_IDS.includes(s.mode)){c.save();c.strokeStyle=p.open?'#fff1a0':v.color;c.lineWidth=3;c.shadowColor='#ffe783';c.shadowBlur=p.open?16:0;c.beginPath();c.arc(p.x,p.y,p.open?22:14,0,Math.PI*2);c.stroke();if(p.open)path(c,[[p.x-6,p.y-35],[p.x+6,p.y-35],[p.x,p.y-25]],'#fff1a0');c.restore();}}
 if(CHALLENGE_IDS.includes(s.mode))drawPrideChallenge(c,s,reduced);
 for(const b of [...(m.bullets||[]),...(m.shots||[])]){c.fillStyle=b.red?'#ff3344':m.shots?.includes(b)?'#9affdd':'#dab5ff';c.fillRect(b.x-3,b.y-3,6,6);}for(const p of w.particles){c.globalAlpha=p.life/700;c.fillStyle=p.color;c.fillRect(p.x,p.y,4,7);}c.globalAlpha=1;
 if(!CHALLENGE_IDS.includes(s.mode))avatar(c,m.x,m.y,'#ff5178');
 if(w.red){const g=c.createRadialGradient(140,330,65,140,330,260);g.addColorStop(0,'#ff000000');g.addColorStop(1,'#ff001866');c.fillStyle=g;c.fillRect(12,174,256,322);}
 if(!challenge)c.restore();
 if(!challenge)prideHud(c,{encounter:s,title:SECOND_NAMES[s.mode],status:`${Math.ceil(s.timeLeft/1000)}秒 · ${m.damage} 反攻傷害`,
  detail:w.mirrors.every(v=>v.broken)?(mirrorWeakpoint(s,0).open?'▼ 核心開啟 · 空白鍵 反攻':'核心蓄力中'):'',
  hint:'等光圈亮起，點光圈反攻',elapsed:m.clock,feedback:w.feedback.at(-1)?.text,
  controls:'方向鍵移動 · C／Shift 換鏡 · 空白鍵 射擊'});

 c.restore();}


function drawUpgraded(c,s,reduced,screenShake=true){
 const m=s.mini,k=m.counter;
 const activeFeedback=k.feedback&&m.clock-k.feedback.at<1400?k.feedback.text:k.resolved?COUNTER_MIRRORS[s.mode].effect:undefined;
 drawPrideAttack(c,m,reduced,{encounter:s,screenShake,status:`${Math.ceil(s.timeLeft/1000)}秒 · 第 ${m.wave} 波`,detail:k.mirror?.name,feedback:activeFeedback,
  controls:k.mirror?`點鏡 / 空白鍵 反攻 · ${Math.ceil((k.mirror.until-m.clock)/1000)}秒`:undefined});
 beginPrideArena(c);c.textAlign='center';
 for(const b of k.shots){c.fillStyle='#b3ffff';c.beginPath();c.arc(b.x,b.y,4,0,Math.PI*2);c.fill();}
 const v=k.mirror;
 if(v){
  const pulse=reduced?0:Math.sin(m.clock*.012)*2;
  c.save();c.translate(v.x,v.y);c.shadowColor=v.color;c.shadowBlur=22+pulse;
  c.lineWidth=3;path(c,[[0,-32],[24,-20],[21,22],[0,32],[-21,22],[-24,-20]],'#17233a',v.color);
  path(c,[[-15,-18],[0,-24],[15,-18],[13,18],[0,24],[-13,18]],v.color,'#fff');
  path(c,[[-12,-15],[-3,-20],[-12,9]],'#ffffff99');
  c.strokeStyle='#fff1a0';c.beginPath();c.arc(0,0,PRIDE_COUNTER_RULES.radius+pulse,0,Math.PI*2);c.stroke();
  path(c,[[-8,-48-pulse],[8,-48-pulse],[0,-36-pulse]],'#fff1a0');
  c.restore();
 }
 for(const p of k.particles){c.globalAlpha=p.life/700;c.fillStyle=p.color;c.fillRect(p.x,p.y,4,7);}c.globalAlpha=1;
 if(k.feedback&&m.clock-k.feedback.at<1400){
  if(!reduced){c.fillStyle='#ffffff22';c.fillRect(12,174,256,322);}
 }
 c.restore();
}

function drawSecondBackdrop(c,s,reduced){
 const mode=s.mode,clock=reduced?0:s.mini.clock;
 drawPrideBackdrop(c,{time:clock,reduced,variant:mode});
 c.save();c.globalAlpha=.28;c.lineWidth=1.5;
 if(mode==='pride-shard-storm'){for(let i=0;i<14;i++){const x=(i*71)%280,y=170+(i*61+clock*.025)%330;path(c,[[x-7,y-20],[x+6,y-4],[x+2,y+17],[x-5,y+1]],'#ff8090','#ffa0ac');}}
 else if(mode==='pride-nested'){c.strokeStyle='#c396ff';for(let n=0;n<7;n++){c.save();c.translate(140,365);c.rotate(Math.sin(clock*.0005)*.08*n);c.strokeRect(-120+n*14,-160+n*18,240-n*28,300-n*36);c.restore();}}
 else {c.strokeStyle='#8aabff';for(let i=0;i<12;i++){const a=i*Math.PI/6+clock*.0001;path(c,[[140,360],[140+Math.cos(a)*190,360+Math.sin(a)*190],[140+Math.cos(a+.5)*100,360+Math.sin(a+.5)*100]],null,'#8aabff');}}
 c.restore();
}
