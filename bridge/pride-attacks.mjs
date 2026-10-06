import { prideHud, beginPrideArena, prideWorldY } from './pride-layout.mjs';
import { palace, royalCrown, mirror, avatar, burst, sparkle, path } from './pride-visuals.mjs';
// Crazy reaction interface: state.mini + held, with hurt/hit callbacks receiving state.
export const PRIDE_ATTACKS = Object.freeze(['pride-gaze','pride-mirror','pride-crown-shock']);
export const PRIDE_RULES = Object.freeze({normal:{track:1000,warn:800,crownWarn:1000,speed:65},hard:{track:1000,warn:550,crownWarn:700,speed:95}});
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function createPrideAttack(mode,{difficulty='normal',bossHpRatio=1,upgraded=false}={}) {
  if(!PRIDE_ATTACKS.includes(mode))throw new RangeError(mode);
  const base=PRIDE_RULES[difficulty]||PRIDE_RULES.normal;
  const rules=upgraded?{...base,track:base.track*.8,warn:base.warn*.7,crownWarn:base.crownWarn*.7,speed:base.speed*1.6}:base;
  return {mode,upgraded,rules,bossHpRatio,x:140,y:430,target:null,clock:0,wave:0,spawn:0,hazards:[],bullets:[],jump:0,fire:0,mirrors:[]};
}
export function pridePoint(s,x,y){s.mini.target={x:clamp(x,22,258),y:clamp(prideWorldY(y),205,484)};}
export function prideInput(s,action){const m=s.mini;if(action==='action'){if(m.mode==='pride-crown-shock')m.jump=650;else if(m.mode==='pride-mirror')shoot(m);} }
function shoot(m){if(m.fire)return; m.fire=m.upgraded?160:220;const mirror=m.mirrors.find(v=>v.designated&&!v.broken);if(mirror){const angle=Math.atan2(mirror.y-m.y,mirror.x-m.x);m.bullets.push({x:m.x,y:m.y,vx:Math.cos(angle)*(m.upgraded?330:240),vy:Math.sin(angle)*(m.upgraded?330:240),enemy:false});}}
function wave(m){
  m.wave++;
  if(m.mode==='pride-gaze'){
    const layouts=[[[48,230],[140,188],[232,230]],[[28,290],[252,310],[140,196]],[[40,410],[240,410],[140,188]],[[36,245],[244,440],[205,188]]];
    const positions=m.upgraded?layouts[(m.wave-1)%layouts.length]:[[127,190],[153,190]],active=m.upgraded?(m.activeMirrors||[0,1,2]):[0,1];
    for(const [order,index] of active.entries()){const [ox,oy]=positions[index];m.hazards.push({kind:'gaze',age:-order*180,x:m.x,y:m.y,ox,oy,index,source:m.upgraded?'mirror':'eye',locked:false,sweep:(m.wave+index)%2?1:-1});}
  }
  if(m.mode==='pride-mirror'){const positions=[55,140,225],active=m.activeMirrors||[0,1,2],target=active[(m.wave-1)%active.length];m.mirrors=m.upgraded?active.map(i=>({index:i,x:active.length===1?140:positions[i],y:290,designated:i===target,hp:3,broken:false})):[{x:positions[target],y:290,designated:true,hp:3,broken:false}];m.deadline=m.clock+5000;}
  if(m.mode==='pride-crown-shock'){const n=(m.bossHpRatio>2/3?1:m.bossHpRatio>1/3?2:3)+(m.upgraded?1:0);for(let i=0;i<n;i++)m.hazards.push({kind:'crown',age:-i*350,x:clamp(m.x+(i-1)*55*(n>1),35,245),y:m.y,r:0,gap:m.wave*.75+i*.4});}
  m.spawn=(m.mode==='pride-mirror'?6500:3400)*(m.upgraded?.65:1);
}
const angleDiff=(a,b)=>Math.atan2(Math.sin(a-b),Math.cos(a-b));
export function updatePrideAttack(s,elapsed,api={}){
  const m=s.mini,dt=clamp(elapsed,0,50),sec=dt/1000;m.clock+=dt;m.spawn-=dt;m.fire=Math.max(0,m.fire-dt);m.jump=Math.max(0,m.jump-dt);
  let dx=Number(s.held?.has('right'))-Number(s.held?.has('left')),dy=Number(s.held?.has('down'))-Number(s.held?.has('up'));
  if(dx||dy)m.target=null;else if(m.target){const d=Math.hypot(m.target.x-m.x,m.target.y-m.y);if(d>2){dx=(m.target.x-m.x)/d;dy=(m.target.y-m.y)/d;}}
  const length=Math.max(1,Math.hypot(dx,dy));m.x=clamp(m.x+dx/length*150*sec,22,258);m.y=clamp(m.y+dy/length*150*sec,205,484);
  if(m.spawn<=0){
    if(m.upgraded&&s.mirrorWorld)m.activeMirrors=s.mirrorWorld.mirrors.flatMap((v,i)=>v.broken?[]:[i]);
    wave(m);
    if(m.mode==='pride-gaze'&&!s.prideGazeTutorialSeen){s.prideGazeTutorialSeen=true;m.tutorialUntil=m.clock+3000;}
  }
  const hurt=()=>{m.visualHit=m.clock;m.visualShake=m.clock;api.hurt?.(s,m.upgraded?12:8,'prideAttackHit');};
  for(const h of m.hazards){h.age+=dt;if(h.age<0)continue;
    if(h.kind==='gaze'){
      if(h.age<=m.rules.track){h.x=m.x;h.y=m.y;}else if(!h.locked){h.locked=true;h.angle=Math.atan2(h.y-h.oy,h.x-h.ox);}
      const active=h.age-m.rules.track-m.rules.warn;
      if(active>=0&&!h.visualImpact){h.visualImpact=true;m.visualShake=m.clock;}
      if(active>=0&&active<650){const angle=h.angle+(active/650*.22-.11)*h.sweep,dx=m.x-h.ox,dy=m.y-h.oy;
        const forward=dx*Math.cos(angle)+dy*Math.sin(angle),distance=Math.abs(dx*Math.sin(angle)-dy*Math.cos(angle));
        if(forward>=0&&forward<520&&distance<(m.upgraded?18:12))hurt();}
    }else if(h.age>=m.rules.crownWarn){const age=h.age-m.rules.crownWarn;if(!h.visualImpact){h.visualImpact=true;m.visualShake=m.clock;}h.r=age/1000*m.rules.speed;if(age<160&&Math.hypot(m.x-h.x,m.y-h.y)<(m.upgraded?34:25))hurt();const d=Math.hypot(m.x-h.x,m.y-h.y),angle=Math.atan2(m.y-h.y,m.x-h.x);if(Math.abs(d-h.r)<(m.upgraded?15:10)&&Math.abs(angleDiff(angle,h.gap))>.55&&m.jump<=0)hurt();}
  }
  m.hazards=m.hazards.filter(h=>h.age<(h.kind==='gaze'?m.rules.track+m.rules.warn+650:m.rules.crownWarn+5500));
  for(const b of m.bullets){const ox=b.x,oy=b.y;b.x+=b.vx*sec;b.y+=b.vy*sec;
    if(!b.enemy)for(const mirror of m.mirrors){if(mirror.broken)continue;if(Math.hypot(b.x-mirror.x,b.y-mirror.y)<20){mirror.visualImpact=m.clock;m.visualShake=m.clock;s.events?.push({key:'prideMirrorHitSound'});m.feedback={x:mirror.x,y:mirror.y,text:'−1',at:m.clock};b.enemy=true;b.vx=-b.vx;b.vy=-b.vy;b.x=ox;b.y=oy;if(mirror.designated&&--mirror.hp===0){mirror.broken=true;s.events?.push({key:'prideMirrorBreakSound'});api.hit?.(s,m.upgraded?18:12);for(let i=0;i<(m.upgraded?12:8);i++){const a=i*Math.PI*2/(m.upgraded?12:8);m.bullets.push({x:mirror.x,y:mirror.y,vx:Math.cos(a)*m.rules.speed,vy:Math.sin(a)*m.rules.speed,enemy:true});}}break;}}
    if(b.enemy&&Math.hypot(b.x-m.x,b.y-m.y)<12){hurt();b.dead=true;}
  }
  m.bullets=m.bullets.filter(b=>!b.dead&&b.x>5&&b.x<275&&b.y>170&&b.y<510);
  if(m.deadline&&m.clock>=m.deadline){for(const v of m.mirrors.filter(v=>v.designated&&!v.broken)){
    const aim=Math.atan2(m.y-v.y,m.x-v.x),n=m.upgraded?9:7;
    for(let i=0;i<n;i++){const a=aim+(i-(n-1)/2)*.24;m.bullets.push({x:v.x,y:v.y,vx:Math.cos(a)*m.rules.speed*1.35,vy:Math.sin(a)*m.rules.speed*1.35,enemy:true});}
    m.feedback={x:v.x,y:v.y,text:'碎鏡反擊！',at:m.clock};}m.deadline=null;}
}
export function drawPrideAttack(c,m,reducedMotion=false, labels={}){
  const t=m.clock;
  beginPrideArena(c);
  const shake=reducedMotion||labels.screenShake===false?0:Math.max(0,1-(t-(m.visualShake??-1000))/220)*2;
  c.translate(Math.sin(t*.15)*shake,Math.cos(t*.19)*shake);
  palace(c,12,174,256,322,t,{theme:m.mode});
  c.save();c.beginPath();c.rect(12,150,256,346);c.clip();
  const ring=(x,y,r,color,width=1,start=0,end=Math.PI*2)=>{c.strokeStyle=color;c.lineWidth=width;c.beginPath();c.arc(x,y,Math.max(0,r),start,end);c.stroke();};
  for(const h of m.hazards){if(h.age<0)continue;
    if(h.kind==='gaze'){
      const active=h.age>=m.rules.track+m.rules.warn;
      const a=(h.angle??Math.atan2(h.y-h.oy,h.x-h.ox))+(active?((h.age-m.rules.track-m.rules.warn)/650*.22-.11)*h.sweep:0);
      const x=h.ox,y=h.oy;
      {
        c.save();c.beginPath();c.rect(12,174,256,322);c.clip();
        for(const [w,col] of active?[[m.upgraded?34:22,'#6b4d9e88'],[m.upgraded?24:14,'#ffd70077'],[m.upgraded?12:7,'#ffe597'],[2,'#fffbea']]:[[3,'#ffd70033'],[1,'#ffd700']]){c.lineWidth=w;c.strokeStyle=col;c.beginPath();c.moveTo(x,y);c.lineTo(x+Math.cos(a)*520,y+Math.sin(a)*520);c.stroke();}
        if(active&&!reducedMotion)for(let i=0;i<18;i++){const d=(i*23+t*.3)%420,offset=Math.sin(i*7+t*.01)*10;sparkle(c,x+Math.cos(a)*d-Math.sin(a)*offset,y+Math.sin(a)*d+Math.cos(a)*offset,1+i%2,'#ffe898');}
        c.restore();
      }
      if(m.upgraded){c.save();c.translate(x,y);c.scale(.62,.62);mirror(c,0,0,false,3,false,reducedMotion?0:t,h.index,{showHealth:false,shootHint:false});gemEye(c,0,0,active);c.restore();}
      else{const sign=h.index===0?1:-1;path(c,[[x-11,y-2],[x-5,y-6],[x+6,y-5],[x+11,y-2],[x+5,y+4],[x-5,y+3]],'#e4d5ff','#ffd700');gemEye(c,x,y,active);path(c,[[x-12,y-11-sign*2],[x+11,y-8+sign*2],[x+10,y-6+sign*2],[x-12,y-8-sign*2]],'#ffd700');}
      if(active&&!reducedMotion)burst(c,x,y,t);
    }else{
      const warning=h.age<m.rules.crownWarn;
      // The crown briefly marks the warning, then leaves the dodge area clear.
      if(warning){c.save();c.globalAlpha=.5;royalCrown(c,h.x,h.y-8,9,2,.35);c.restore();}
      if(warning){ring(h.x,h.y,25,'#ffd70099',2);for(let i=0;i<8;i++){const a=i*Math.PI/4+t*.002;sparkle(c,h.x+Math.cos(a)*25,h.y+Math.sin(a)*25,2);}}
      else{
        for(const [offset,width,col] of [[-6,2,'#b88a4477'],[0,7,'#ffd70055'],[0,2,'#fff0ad'],[6,1,'#ffd70088']])ring(h.x,h.y,h.r+offset,col,width,h.gap+.55,h.gap+Math.PI*2-.55);
        for(let i=0;i<32;i++){const a=i/32*Math.PI*2;if(Math.abs(angleDiff(a,h.gap))<=.55)continue;sparkle(c,h.x+Math.cos(a)*h.r,h.y+Math.sin(a)*h.r,1+i%2,'#ffe898');}
        if(h.age-m.rules.crownWarn<250)burst(c,h.x,h.y,h.age-m.rules.crownWarn);
      }
    }
  }
  for(const v of m.mirrors){mirror(c,v.x,v.y,v.designated,v.hp,v.broken,t,v.index??m.mirrors.indexOf(v),{royal:!m.upgraded});if(t-(v.visualImpact??-1000)<450)burst(c,v.x,v.y,t-v.visualImpact,'#e3f6ff');}
  for(const b of m.bullets){const color=b.enemy?'#e0b1ff':'#b3ffff';for(let i=5;i>0;i--){c.save();c.globalAlpha=(6-i)/12;sparkle(c,b.x-b.vx*.012*i,b.y-b.vy*.012*i,2,color);c.restore();}sparkle(c,b.x,b.y,4,color);sparkle(c,b.x,b.y,1,'#fff');}
  avatar(c,m.x,m.y-m.jump/100,m.jump?'#ffd700':'#ff5178');
  if(t-(m.visualHit??-1000)<180){c.fillStyle='#fff1d833';c.fillRect(12,174,256,322);burst(c,m.x,m.y,t-m.visualHit,'#fff1b0');}
  c.restore();c.restore();
  const names={'pride-gaze':'王之蔑視','pride-mirror':'鏡像反射','pride-crown-shock':'加冕衝擊'};
  const hints={'pride-gaze':m.tutorialUntil>t?(m.upgraded?'鏡面鎖定後，離開金色射線！':'雙眼鎖定後，離開金色射線！'):(m.upgraded?'多方向追蹤 → 鎖定 → 掃射':'雙眼追蹤 → 鎖定 → 掃射'),
    'pride-mirror':'射指定鏡，避開反射碎片', 'pride-crown-shock':'離開衝擊中心，避波紋或跳躍'};
  prideHud(c, { encounter: labels.encounter, title: names[m.mode]+(m.upgraded?'・改':''),
    status: labels.status || `第 ${m.wave} 波`, detail: labels.detail,
    hint: hints[m.mode], elapsed: t, feedback: labels.feedback ?? (m.feedback&&t-m.feedback.at<700?m.feedback.text:''),
    controls: labels.controls || (m.mode==='pride-gaze'?'方向鍵 / 拖動移動':m.mode==='pride-mirror'?'方向鍵移動 · 空白鍵 射擊':'方向鍵移動 · 空白鍵 跳躍') });

}
function gemEye(c,x,y,active){c.fillStyle=active?'#ffd700':'#6b4d9e';c.fillRect(x-3,y-4,6,8);c.fillStyle='#180f2b';c.fillRect(x-1,y-3,2,6);c.fillStyle='#fff';c.fillRect(x-2,y-3,2,2);}
