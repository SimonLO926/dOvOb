// Original Lust promenade. Numeric tuning is provisional; the unavailable
// i-gamer festival SWF has not been claimed as a frame-perfect port.
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const CHARM_HEAD_OFFSET=47,CHARM_Y_MIN=408,CHARM_Y_MAX=460;
export const CHARM_POINTS={ordinary:1000,handsome:10000};
export function initCharm(s){
 const m=s.round;
 Object.assign(m,{duration:90000,target:8,streetWidth:2500,worldX:90,camera:0,x:90,y:433,stamina:60,targetPerson:null,duelTaps:0,beam:false,followers:[],stolen:0,duel:false,fever:0,stun:0,teacherGrace:0,teacherWarning:false,dodge:0,dodgeCooldown:0,dodgeDir:-1,mask:0,promScore:0,heartDrops:[],lastPrize:0,prizeTime:0,teachers:[{x:725,y:433,direction:-1},{x:1715,y:433,direction:1}],ghostPursuer:null,
  npcs:Array.from({length:18},(_,i)=>{
   const kind=i===3?'mask':i===6?'ghost':i===10||i===15?'star':'guest',handsome=kind==='star'||i%4===1;
   return {id:i,kind,handsome,x:215+i*121,y:411+(i%3)*15,direction:i%2?1:-1,progress:0,rivalProgress:0,duelStarted:false,duelClock:0,rival:i%3===1||kind==='star',rivals:kind==='star'?3:i%3===1?1:0,status:'walking',tone:['#d7bb80','#96cfc9','#b8a8e0'][i%3],points:handsome?CHARM_POINTS.handsome:CHARM_POINTS.ordinary};
  })});
}
export function charmInput(s,key,down){
 const m=s.round;if(!down)return true;
 if(key==='alt'&&!m.stun&&!m.dodgeCooldown){m.dodge=650;m.dodgeCooldown=1800;m.dodgeDir=m.y>434?1:-1;m.pointerY=null;m.feedback='sidestep';m.feedbackTime=900;return true;}
 if(key==='action'&&m.duel&&m.cooldown<=0&&!m.stun&&!m.dodge&&m.stamina>0){
  m.duelTaps++;m.cooldown=100;m.stamina=Math.max(0,m.stamina-.6);
  const target=m.npcs.find(n=>n.id===m.targetPerson);if(target)target.progress=Math.min(100,target.progress+12*(m.fever>0?1.7:1));
 }
 return true;
}
export function charmPoint(s,x,y){
 const m=s.round,wx=x+m.camera;
 const person=m.npcs.filter(n=>n.status==='walking'&&Math.abs(n.x-wx)<24&&Math.abs(n.y-CHARM_HEAD_OFFSET-y)<24).sort((a,b)=>Math.abs(a.x-wx)-Math.abs(b.x-wx))[0];
 if(person&&Math.abs(person.x-m.worldX)<180){m.targetPerson=person.id;m.pointerX=null;}
 else{m.pointerX=clamp(wx,28,m.streetWidth-28);if(y>=390)m.pointerY=clamp(y,CHARM_Y_MIN,CHARM_Y_MAX);}
 return true;
}
export function charmUpdate(s,dt,h){
 const m=s.round,sec=dt/1000,axis=Number(s.held.has('right'))-Number(s.held.has('left')),vertical=Number(s.held.has('down'))-Number(s.held.has('up'));
 for(const key of ['fever','stun','teacherGrace','dodge','dodgeCooldown','prizeTime'])m[key]=Math.max(0,m[key]-dt);
 if(axis)m.pointerX=null;if(vertical)m.pointerY=null;
 if(!m.stun){
  if(m.pointerX!=null){const speed=clamp(Math.abs(m.pointerX-m.worldX)*1.7,35,190);m.worldX+=clamp(m.pointerX-m.worldX,-sec*speed,sec*speed);}else m.worldX+=axis*sec*155*(m.fever?1.2:1);
  if(m.dodge)m.y+=m.dodgeDir*sec*180;
  else if(m.pointerY!=null)m.y+=clamp(m.pointerY-m.y,-sec*120,sec*120);
  else m.y+=vertical*sec*120;
 }
 m.y=clamp(m.y,CHARM_Y_MIN,CHARM_Y_MAX);m.worldX=clamp(m.worldX,30,m.streetWidth-30);m.camera=clamp(m.worldX-105,0,m.streetWidth-252);m.x=m.worldX-m.camera;
 for(const n of m.npcs)if(n.status==='walking'){n.x=clamp(n.x+n.direction*sec*9,32,m.streetWidth-32);if(n.x<=32||n.x>=m.streetWidth-32)n.direction*=-1;}
 m.teacherWarning=false;
 for(const teacher of m.teachers){
  teacher.x+=teacher.direction*sec*45;if(teacher.x<50||teacher.x>m.streetWidth-50)teacher.direction*=-1;
  const dx=Math.abs(teacher.x-m.worldX),dy=Math.abs(teacher.y-m.y);
  if(dx<120&&dy<24&&!m.teacherGrace&&!m.dodge)m.teacherWarning=true;
  if(Math.hypot(dx,dy)<21&&!m.teacherGrace&&!m.dodge){
   m.teacherGrace=2500;
   if(m.mask){m.mask--;m.feedback='mask-save';m.feedbackTime=1200;}
   else{m.stun=1800;m.stamina=clamp(m.stamina-14,0,100);m.beam=false;m.feedback='teacher';m.feedbackTime=1800;}
  }
 }
 const visible=n=>n.status==='walking'&&Math.abs(n.x-m.worldX)<180&&n.x>=m.camera+28&&n.x<=m.camera+236;
 let target=m.npcs.find(n=>n.id===m.targetPerson&&visible(n));
 if(!target){target=m.npcs.filter(visible).sort((a,b)=>Math.abs(a.x-m.worldX)-Math.abs(b.x-m.worldX))[0];m.targetPerson=target?.id??null;}
 m.beam=s.held.has('action')&&!!target&&m.stamina>0&&!m.stun&&!m.dodge;
 if(target?.rival&&target.progress>=30)target.duelStarted=true;
 m.duel=!!target?.duelStarted;
 if(m.duel&&!m.stun&&!m.dodge)target.duelClock+=dt;
 const rivalReady=m.duel&&target.duelClock>=800&&!m.stun&&!m.dodge;
 if(m.beam){
  m.stamina=clamp(m.stamina-sec*(m.duel?7:6),0,100);target.progress+=sec*(m.duel?25:32)*(m.fever>0?2.4:1);
  if(rivalReady)target.rivalProgress+=sec*(s.difficulty==='hard'?22:18)*(1+(target.rivals-1)*.2);
  m.feedback=m.duel?'duel':'eye-beam';m.feedbackTime=400;
 }else{
  if(!m.stun&&!m.dodge&&target?.progress>0&&target.progress<100)target.progress=Math.max(0,target.progress-sec*4);
  if(rivalReady)target.rivalProgress+=sec*10;
 }
 if(target?.progress>=100){
  target.status='following';m.followers.push(target.id);m.promScore+=target.points;m.lastPrize=target.points;m.prizeTime=2000;
  m.heartDrops.push({x:target.x,y:target.y-26,value:target.handsome?40:25});if(target.kind==='mask')m.mask++;
  if(target.kind==='ghost')m.ghostPursuer={x:target.x+100,y:m.y,active:true,id:target.id};
  m.targetPerson=null;m.duel=false;h.progress();m.feedback=target.handsome?'handsome-win':'charmed';m.feedbackTime=1700;
 }else if(target?.rivalProgress>=100){target.status='stolen';m.stolen++;m.targetPerson=null;m.duel=false;m.stamina=Math.max(0,m.stamina-10);m.feedback='rival';m.feedbackTime=1200;}
 for(const drop of [...m.heartDrops]){
  drop.x+=clamp(m.worldX-drop.x,-sec*75,sec*75);
  if(Math.abs(drop.x-m.worldX)<40){m.stamina=clamp(m.stamina+drop.value,0,100);m.heartDrops.splice(m.heartDrops.indexOf(drop),1);}
 }
 if(m.stamina>=100&&!m.fever){m.fever=8000;m.stamina=99;m.feedback='beauty';m.feedbackTime=1800;}
 const ghost=m.ghostPursuer;
 if(ghost?.active){
  ghost.x+=clamp(m.worldX-ghost.x,-sec*180,sec*180);ghost.y+=clamp(m.y-ghost.y,-sec*50,sec*50);
  if(Math.hypot(ghost.x-m.worldX,ghost.y-m.y)<18&&!m.dodge){ghost.active=false;m.followers=m.followers.filter(id=>id!==ghost.id);m.npcs[ghost.id].status='stolen';m.score=Math.max(0,m.score-1);m.promScore=Math.max(0,m.promScore-m.npcs[ghost.id].points);m.stun=700;m.feedback='ghost-kick';m.feedbackTime=1500;}
 }
 if(m.stamina<=0){m.beam=false;m.failureReason='energy';m.outcome=['愛心能量耗盡。成功後收集愛心；情敵可長按，連按更快。老師靠近時上下換路或 C 閃避。','Love energy ran out. Collect hearts; hold to compete, tap for speed. Move up/down or use C to dodge teachers.'];h.finish(false);return true;}
 if(m.clock>=m.duration&&!m.done&&!s.scene&&!s.over){
  const ok=m.score>=m.target;m.failureReason=ok?null:'quota';
  m.outcome=ok?[`時間到：${m.score} 位追隨者，積分 ${m.promScore}。`,`Time up: ${m.score} followers, score ${m.promScore}.`]:[`時間到：${m.score}／${m.target} 位追隨，積分 ${m.promScore}。帥哥積分10倍；老師用上下或 C 閃避。`,`Time up: ${m.score}/${m.target} followers, score ${m.promScore}. Handsome boys score 10×. Dodge teachers with up/down or C.`];h.finish(ok);
 }
 return true;
}
