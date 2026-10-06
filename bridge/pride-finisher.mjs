import { prideHud, beginPrideArena, prideWorldY } from './pride-layout.mjs';
import { palace, avatar, gem, sparkle, burst } from './pride-visuals.mjs';
export const MIRROR_DUEL_RULES=Object.freeze({duration:45000,delay:2000,penalty:80,retry:20000,goal:3});
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const rules=m=>m.difficulty==='hard'?{lives:2,charge:250,radius:20,pulse:380,cooldown:2100,warn:650,interval:3000,speed:145}:{lives:3,charge:200,radius:22,pulse:520,cooldown:1800,warn:800,interval:3600,speed:120};
const POSTS=[[52,290],[140,235],[228,290],[52,400],[140,450],[228,400],[104,350],[180,350]];
function relocate(m){
  const candidates=POSTS.map(([x,y])=>({x,y})).filter(p=>!m.gate||distance(p,m.gate)>60);
  const available=candidates.filter(p=>distance(p,m)>65&&distance(p,m.mirror)>65);
  const pool=available.length?available:candidates.sort((a,b)=>distance(b,m)-distance(a,m)).slice(0,1);
  const index=clamp(Math.floor(m.random()*pool.length),0,pool.length-1);
  m.gate={...pool[index],charge:0,charged:false,pulse:0,spent:false};
}
export function createMirrorDuel({difficulty='normal',random=Math.random}={}){
  const m={x:85,y:440,mirror:{x:85,y:440},target:null,elapsed:0,timeLeft:MIRROR_DUEL_RULES.duration,
    history:[{t:0,x:85,y:440}],visualTrail:[],bullets:[],attack:null,attackIn:2400,
    hits:0,result:null,difficulty,random,lives:difficulty==='hard'?2:3,protection:0,cooldown:0,relocateIn:0,feedback:'',feedbackTime:0};
  relocate(m);return m;
}
export function mirrorDuelPoint(m,x,y){m.target={x:clamp(280-x,24,256),y:clamp(prideWorldY(y),210,480)};}
function feedback(m,text){m.feedback=text;m.feedbackTime=850;}
export function mirrorDuelInput(m,action){
  if(m.result||action!=='action'||m.cooldown||m.relocateIn)return false;
  if(!m.gate.charged){feedback(m,'先踩亮鏡座');return false;}
  m.gate.pulse=rules(m).pulse;m.gate.spent=false;m.cooldown=rules(m).cooldown;
  feedback(m,'封印啟動！');return true;
}
function strike(m){
  if(m.protection||m.result)return;
  m.lives--;m.protection=1000;feedback(m,'damage · 避開碎片');
  if(m.lives<=0)m.result='failure';
}
export function updateMirrorDuel(m,elapsed,held=new Set()){
  if(m.result)return m.result;
  const dt=clamp(elapsed,0,50),sec=dt/1000,r=rules(m);
  m.elapsed+=dt;m.timeLeft=Math.max(0,MIRROR_DUEL_RULES.duration-m.elapsed);
  m.protection=Math.max(0,m.protection-dt);m.cooldown=Math.max(0,m.cooldown-dt);m.feedbackTime=Math.max(0,m.feedbackTime-dt);
  // The reflected world and movement agree: screen-right still moves right.
  let dx=Number(held.has('left'))-Number(held.has('right')),dy=Number(held.has('down'))-Number(held.has('up'));
  if(dx||dy)m.target=null;else if(m.target){const d=distance(m,m.target);if(d>2){dx=(m.target.x-m.x)/d;dy=(m.target.y-m.y)/d;}}
  const n=Math.max(1,Math.hypot(dx,dy));
  // Stop on the pointer target instead of oscillating around it on slow frames.
  const travel=m.target&&!held.size?Math.min(150*sec,distance(m,m.target)):150*sec;
  m.x=clamp(m.x+dx/n*travel,24,256);m.y=clamp(m.y+dy/n*travel,210,480);
  m.history.push({t:m.elapsed,x:m.x,y:m.y});const delayed=m.elapsed-MIRROR_DUEL_RULES.delay;
  while(m.history.length>1&&m.history[1].t<=delayed)m.history.shift();
  const a=m.history[0],b=m.history[1]||a,f=clamp((delayed-a.t)/(b.t-a.t||1),0,1);
  m.mirror={x:a.x+(b.x-a.x)*f,y:a.y+(b.y-a.y)*f};
  m.visualTrail.push({x:m.x,y:m.y,mx:m.mirror.x,my:m.mirror.y});if(m.visualTrail.length>24)m.visualTrail.shift();
  const g=m.gate;
  if(m.relocateIn){m.relocateIn=Math.max(0,m.relocateIn-dt);if(!m.relocateIn)relocate(m);}
  else if(g.pulse>0){
    if(distance(m,g)<r.radius)strike(m);
    if(!m.result&&distance(m.mirror,g)<r.radius&&!g.spent){
      g.spent=true;g.pulse=0;m.hits++;m.relocateIn=650;feedback(m,'鏡像封印！');
      if(m.hits>=MIRROR_DUEL_RULES.goal)m.result='success';
    }else{g.pulse=Math.max(0,g.pulse-dt);if(!g.pulse&&!g.spent){g.charged=false;g.charge=0;feedback(m,'落空 · 再次踩亮鏡座');}}
  }else if(!g.charged){
    g.charge=distance(m,g)<r.radius?g.charge+dt:0;
    if(g.charge>=r.charge){g.charged=true;feedback(m,'已蓄力 · 離開再封鏡');}
  }
  // The mirror counters with a telegraphed, aimed fan. It never damages an entire arena.
  if(!m.result){
    m.attackIn-=dt;
    if(!m.attack&&m.attackIn<=0)m.attack={age:0,x:m.x,y:m.y};
    if(m.attack){m.attack.age+=dt;if(m.attack.age>=r.warn){
      const aim=Math.atan2(m.attack.y-m.mirror.y,m.attack.x-m.mirror.x),count=m.difficulty==='hard'?5:3;
      for(let i=0;i<count;i++){const angle=aim+(i-(count-1)/2)*.23;
        m.bullets.push({x:m.mirror.x,y:m.mirror.y,vx:Math.cos(angle)*r.speed,vy:Math.sin(angle)*r.speed,age:0});}
      m.attack=null;m.attackIn=r.interval;
    }}
    for(const b of m.bullets){b.x+=b.vx*sec;b.y+=b.vy*sec;b.age+=dt;if(distance(m,b)<9){strike(m);b.age=5000;}}
    m.bullets=m.bullets.filter(b=>b.age<5000&&b.x>8&&b.x<272&&b.y>185&&b.y<500);
  }
  if(!m.result&&!m.timeLeft)m.result='failure';return m.result;
}
export function drawMirrorDuel(c,m,encounter,{reducedMotion=false}={}){
  beginPrideArena(c);c.translate(280,0);c.scale(-1,1);palace(c,12,174,256,322,m.elapsed);
  c.strokeStyle='#b7cae333';c.lineWidth=1;
  for(let i=0;i<5;i++){c.beginPath();c.moveTo(20+i*53,174);c.lineTo(75+i*26,280);c.lineTo(30+i*51,360);c.lineTo(60+i*40,496);c.stroke();}
  if(!reducedMotion){const trail=m.visualTrail;
    for(let i=0;i<trail.length;i+=4){const p=trail[i],alpha=(i+1)/trail.length*.22;avatar(c,p.x,p.y,'#ff5178',alpha);avatar(c,p.mx,p.my,'#cb8aff',alpha);}}
  const g=m.gate,r=rules(m),color=g.spent?'#dbb4ff':g.pulse?'#ff8b7b':g.charged?'#ffe084':'#91cef9';
  c.save();c.translate(g.x,g.y);c.fillStyle='#201939';c.fillRect(-17,-17,34,34);c.strokeStyle=color;c.lineWidth=2;c.strokeRect(-17,-17,34,34);c.strokeRect(-13,-13,26,26);
  c.beginPath();c.arc(0,0,r.radius,0,Math.PI*2);c.stroke();gem(c,0,0,8,19,color);
  if(g.charge&&!g.charged){c.lineWidth=4;c.beginPath();c.arc(0,0,r.radius+4,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(1,g.charge/r.charge));c.stroke();}
  if(g.pulse){for(let i=0;i<6;i++){const a=i*Math.PI/3;sparkle(c,Math.cos(a)*r.radius,Math.sin(a)*r.radius,3,color);}}
  if(g.spent&&!reducedMotion)burst(c,0,0,650-m.relocateIn,'#dbb4ff');
  // Counter-reflect labels so they remain readable inside the mirrored arena.
  c.scale(-1,1);c.fillStyle=color;c.font='bold 10px sans-serif';c.textAlign='center';c.fillText(g.spent?'已封印':g.charged?'空白鍵封鏡':'踩亮鏡座',0,-30,100);c.restore();
  if(m.attack){c.strokeStyle='#ff647f';c.lineWidth=2;c.setLineDash([4,4]);c.beginPath();c.moveTo(m.mirror.x,m.mirror.y);c.lineTo(m.attack.x,m.attack.y);c.stroke();c.setLineDash([]);c.beginPath();c.arc(m.attack.x,m.attack.y,15,0,Math.PI*2);c.stroke();}
  for(const b of m.bullets)gem(c,b.x,b.y,4,11,'#f6b6ff');
  avatar(c,m.mirror.x,m.mirror.y,'#cb8aff');sparkle(c,m.mirror.x,m.mirror.y-17,3,'#dfb5ff');
  avatar(c,m.x,m.y,'#ff5178',m.protection&&!reducedMotion?.55:1);c.restore();
  prideHud(c,{encounter,title:'鏡中對決',status:`封印 ${m.hits}/3 · ${Math.ceil(m.timeLeft/1000)}秒`,detail:`機會 ${m.lives}/${r.lives}`,
    hint:'踩亮鏡座 → 離開 → 封住延遲鏡像',elapsed:m.elapsed,
    feedback:m.result==='success'?'挑戰完成！':m.result==='failure'?'挑戰失敗':m.feedbackTime?m.feedback:'',
    controls:'方向鍵 / 拖動移動 · 空白鍵封鏡'});
}
// Adapter for Crazy: call after boss damage and on each frame; task 4 owns routing.
export function startPrideFinisher(s){if(s.config?.id!=='pride'||s.bossHp>s.bossMaxHp*.2||s.prideDuelCleared||s.prideDuelStarted)return false;s.prideDuelStarted=true;s.prideDuelLocked=true;s.mode='pride-mirror-duel';s.mini=createMirrorDuel({difficulty:s.difficulty,random:s.random});s.held.clear();s.arcade=null;s.attack=null;s.cat=null;s.timeLeft=s.duration=MIRROR_DUEL_RULES.duration;return true;}
export function finishPrideFinisher(s,result){if(s.mode!=='pride-mirror-duel'||s.prideDuelResult)return;s.prideDuelResult={result,elapsed:s.mini.elapsed};if(result==='success'){s.prideDuelCleared=true;s.prideDuelLocked=false;s.bossHp=0;s.over=true;s.won=true;s.held.clear();}else{s.stats.damageTaken+=Math.min(s.hp,80);s.hp=Math.max(0,s.hp-80);s.over=!s.hp;s.won=false;s.prideDuelRetry=20000;s.mode='bridge';s.mini=null;s.held.clear();}}
export function retryPrideFinisher(s,dt){if(s.prideDuelRetry==null||s.over)return false;s.prideDuelRetry=Math.max(0,s.prideDuelRetry-dt);if(s.prideDuelRetry)return false;s.prideDuelRetry=null;s.prideDuelStarted=false;s.prideDuelResult=null;return startPrideFinisher(s);}
