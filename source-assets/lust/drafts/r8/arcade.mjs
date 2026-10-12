// Independent date mechanics. Native Bridge/attacks remain in engine.mjs.
import {initCharm,charmInput,charmPoint,charmUpdate} from './charm.mjs';
export const ARCADE=['archery','piano','claw','tennis','feeding','cinema','wheel','volley','haunted','dance','charm'];
const limit=(v,a,b)=>Math.max(a,Math.min(b,v)),axis=(s,a,b)=>Number(s.held.has(b))-Number(s.held.has(a));
export const HAUNT_WALLS=[];
export const CLAW_WINDOW=[.36,.8],FEED_IDEALS=[.72,.45,.85],WHEEL_HEIGHT=.89,WHEEL_BALANCE=.48;
export const wheelHeight=m=>(1-Math.sin(m.angle))/2;
export function timingState(m){
 if(m.id==='claw')return {value:m.grip,low:CLAW_WINDOW[0],high:CLAW_WINDOW[1],ready:m.phase==='grip'&&m.grip>=CLAW_WINDOW[0]&&m.grip<=CLAW_WINDOW[1]};
 if(m.id==='feeding'){const ideal=FEED_IDEALS[m.request];return {value:m.heat,low:ideal-.13,high:ideal+.13,ready:m.phase==='cook'&&m.selectedFood===m.request&&Math.abs(m.heat-ideal)<.13};}
 if(m.id==='wheel')return {value:wheelHeight(m),low:WHEEL_HEIGHT,high:1,ready:wheelHeight(m)>WHEEL_HEIGHT&&Math.abs(m.balance)<WHEEL_BALANCE&&!m.windowDone};
}
export function initArcade(s){const m=s.round;if(!ARCADE.includes(m.id))return;
 Object.assign(m,{duration:m.id==='archery'?45000:['tennis','volley'].includes(m.id)?75000:m.id==='haunted'?65000:50000,target:{archery:10,piano:24,claw:3,tennis:3,feeding:5,cinema:5,wheel:3,volley:5,haunted:3,dance:12}[m.id],lostPoints:0,charge:0,trail:[],stamina:100,player:{x:72,y:458,vy:0,jump:0,pose:0},opponent:{x:215,y:458,vy:0,pose:0},rally:0,serve:0,reset:900});
 if(m.id==='volley'){m.ball={x:64,y:315,vx:0,vy:0};m.x=72;m.y=458;m.lastTouch=null;m.contact=0;}
 if(m.id==='tennis'){m.x=174;m.y=438;m.partner={x:68,y:394};m.opponents=[{x:80,y:238,stamina:100},{x:205,y:264,stamina:100}];m.ball={x:m.x,y:m.y,z:12,vx:0,vy:0,vz:0,bounces:0};m.flight=null;m.serve=1;m.reset=0;}
 if(m.id==='archery'){m.arrows=[];m.wind=.2;m.charge=0;}
 if(m.id==='claw'){m.phase='move';m.aim=140;m.clawY=230;m.sway=0;m.toys=[{x:64,y:442,weight:.6,color:'#aedfcc'},{x:121,y:447,weight:1,color:'#eccca5'},{x:190,y:440,weight:.75,color:'#c4b5ef'},{x:223,y:450,weight:.9,color:'#8fcedc'}];m.grip=0;m.carry=null;}
 if(m.id==='feeding'){m.selectedFood=0;m.request=0;m.heat=0;m.patience=100;m.phase='cook';m.serving=0;m.menu=[['草莓蛋糕','Strawberry cake'],['香草茶','Herbal tea'],['烤布甸','Baked pudding']];}
 if(m.id==='cinema'){m.watching=false;m.warning=false;m.kiss=0;m.suspicion=0;m.peek=0;m.lastCycle=-1;}
 if(m.id==='wheel'){m.angle=-Math.PI/2;m.balance=0;m.wind=0;m.kiss=0;m.windowDone=false;m.cycle=0;}
 if(m.id==='haunted'){m.x=45;m.y=432;m.partner={x:70,y:435};m.fear=0;m.roomIndex=0;m.hauntPhase='approach';m.scareTime=0;m.handHeld=0;m.collected=0;m.escaped=false;}
 if(m.id==='piano'){m.notes=Array.from({length:32},(_,i)=>({at:1800+i*650,lane:[0,2,1,3,2,0,3,1,0,1,2,3,2,1,0,2][i%16],hold:i%8===6?600:0,hit:false,miss:false,held:0}));m.precision=0;m.combo=0;}
 if(m.id==='dance'){m.steps=Array.from({length:20},(_,i)=>({at:1800+i*1250-i*i*7,key:['left','right','up','action','left','action','right','up'][i%8],hold:i%4===3?420:0,hit:false,miss:false,held:0}));m.combo=0;m.precision=0;m.lead=0;}
 if(['piano','dance'].includes(m.id)){const notes=m.notes||m.steps;m.duration=Math.max(...notes.map(n=>n.at+n.hold))+700;m.sequenceEnd=m.duration;}
 if(m.id==='charm')initCharm(s);
}
function message(m,v){m.feedback=v;m.feedbackTime=1100;}
function award(s,h){h.progress();}
function lose(s,h){const m=s.round;m.lostPoints++;h.hurt(5);message(m,'point-lost');if(m.lostPoints>=({volley:5,tennis:3}[m.id]||99))h.finish(false);}
function serveVolley(m,side){m.ball={x:side===0?66:215,y:305,vx:side===0?112:-100,vy:-120};m.lastTouch=side;m.contact=350;m.reset=0;m.rally=0;}
export function tennisStroke(m,x,y,lob=false,side=0){const b=m.ball;const tx=limit(x,36,244),ty=limit(y,215,471),duration=lob?1.55:side===0?.72:1.1;
 const defender=side===0?m.opponents.reduce((best,o,i)=>Math.hypot(o.x-tx,o.y-ty)<Math.hypot(m.opponents[best].x-tx,m.opponents[best].y-ty)?i:best,0):null;
 Object.assign(b,{vx:(tx-b.x)/duration,vy:(ty-b.y)/duration,vz:(0-b.z+380*duration*duration/2)/duration,bounces:0});m.flight={x:tx,y:ty,side,age:0,duration,defender};m.lastTouch=side;m.swing=240;m.rally++;m.serve=0;}
function tennisHit(s,h,lob=false){const m=s.round,b=m.ball;if(m.serve){const dir=axis(s,'left','right');b.x=m.x;b.y=m.y;b.z=16;tennisStroke(m,dir<0?47:dir>0?233:145,240,lob);return;}
 if(m.cooldown>0)return;m.cooldown=260;m.swing=200;if(m.lastTouch===1&&Math.hypot(b.x-m.x,b.y-m.y)<42&&b.z<58&&b.z>0){const dir=axis(s,'left','right'),tx=dir<0?47:dir>0?233:140;tennisStroke(m,tx,226+s.random()*30,lob);message(m,lob?'lob':'return');}else message(m,'miss');}
export function arcadeInput(s,key,down,h){const m=s.round;if(!ARCADE.includes(m.id))return false;
 if(m.id==='charm')return charmInput(s,key,down,h);
 if(m.id==='archery'){if(key==='action'){if(down)m.charge=1;else if(m.charge){const power=limit(m.charge/1000,.12,1);m.arrows.push({x:m.aim,y:435,vx:m.wind*30,vy:-250-power*170,power});m.charge=0;}}else if(down&&key==='alt')m.charge=0;return true;}
 if(!down)return true;
 if(m.id==='volley'){if(key==='up'&&m.player.y>=458)m.player.vy=-330;if(key==='alt'&&m.stamina>=30){m.player.x=limit(m.player.x+axis(s,'left','right')*28,28,119);m.stamina-=30;m.player.pose=400;}
 if(key==='action'&&m.cooldown<=0){const b=m.ball,p=m.player;m.cooldown=240;p.pose=300;if(m.lastTouch!==0&&!m.contact&&Math.hypot(b.x-p.x,b.y-(p.y-28))<49){const spike=p.y<403&&b.y<375;Object.assign(b,{vx:spike?235:125,vy:spike?(b.y<312?105:-95):-270});m.lastTouch=0;m.contact=260;m.rally++;message(m,spike?'spike':'return');}else message(m,'miss');}return true;}
 if(m.id==='tennis'){if(key==='action'||key==='alt')tennisHit(s,h,key==='alt');return true;}
 if(m.id==='claw'){if(key==='action'){if(m.phase==='move'){m.phase='drop';m.grip=0;}else if(m.phase==='grip'&&timingState(m).ready){const x=m.aim+Math.sin(m.clock/250)*m.sway;m.carry=m.toys.find(t=>!t.caught&&Math.abs(t.x-x)<18)||null;if(m.carry){m.carry.caught=true;m.carry.slip=Math.abs(x-m.carry.x)*m.carry.weight;}m.phase='rise';}else if(m.phase==='grip'){m.phase='rise';message(m,'miss');}}if(key==='alt'&&m.phase==='move'){m.sway*=.25;m.stamina=Math.max(0,m.stamina-15);}return true;}
 if(m.id==='feeding'){if(key==='left'||key==='right'){m.selectedFood=(m.selectedFood+(key==='left'?2:1))%3;m.heat=0;}if(key==='alt'&&m.phase==='cook')m.heat=Math.max(0,m.heat-.12);if(key==='action'&&m.phase==='cook'){const good=timingState(m).ready;m.phase='serve';m.serving=0;m.mealGood=good;message(m,m.mealGood?'serve':'burnt');}return true;}
 if(m.id==='haunted'){if(key==='alt'&&m.cooldown<=0&&m.stamina>=35){m.stamina-=35;m.cooldown=2800;m.invincible=1000;m.fear=Math.max(0,m.fear-30);message(m,'guard');}return true;}
 if(m.id==='piano'||m.id==='dance'){const notes=m.id==='piano'?m.notes:m.steps,lane={left:0,up:1,action:2,right:3}[key];if(lane==null)return true;const note=notes.filter(n=>!n.hit&&!n.miss&&!n.started&&(m.id==='piano'?n.lane===lane:n.key===key)).sort((a,b)=>Math.abs(a.at-m.clock)-Math.abs(b.at-m.clock))[0];if(note&&Math.abs(note.at-m.clock)<(s.difficulty==='hard'?125:175)){if(note.hold){note.started=true;note.held=0;}else{note.hit=true;award(s,h);}m.lastNoteLane=lane;m.combo++;m.precision+=Math.abs(note.at-m.clock)<65?100:65;m.lead=key;message(m,note.hold?'hold-start':Math.abs(note.at-m.clock)<65?'perfect':'success');}else{m.combo=0;message(m,'miss');h.hurt(1);}return true;}
 return true;
}
export function arcadePoint(s,x,y,h){const m=s.round;if(!ARCADE.includes(m.id))return false;if(m.id==='charm')return charmPoint(s,x,y,h);if(['archery','claw'].includes(m.id)){m.aim=limit(x,30,250);}else if(m.id==='volley')m.pointerX=limit(x,28,119);else if(m.id==='tennis'){m.pointerX=limit(x,35,245);m.pointerY=limit(y,345,471);}else if(m.id==='haunted')m.pointerX=limit(x,28,245);else if(['piano','dance'].includes(m.id)){const key=['left','up','action','right'][limit(Math.floor((x-16)/62),0,3)];if(m.pointerKey!==key){if(m.pointerKey)s.held.delete(m.pointerKey);m.pointerKey=key;s.held.add(key);arcadeInput(s,key,true,h);}}else if(m.id==='feeding'&&y>420&&y<460){m.selectedFood=limit(Math.floor((x-20)/80),0,2);m.heat=0;}return true;}
function seek(v,target,speed,dt){return v+limit(target-v,-speed*dt,speed*dt);}
function collideWalls(x,y){return HAUNT_WALLS.some(w=>x+9>w.x&&x-9<w.x+w.w&&y+9>w.y&&y-9<w.y+w.h);}
export function arcadeUpdate(s,dt,h){const m=s.round;if(!ARCADE.includes(m.id))return false;const sec=dt/1000,mv=axis(s,'left','right'),vert=axis(s,'up','down');if(m.id==='charm')return charmUpdate(s,dt,h);m.stamina=limit(m.stamina+sec*12,0,100);
 if(m.id==='archery'){m.aim=limit(m.aim+mv*dt*.13,30,250);m.wind=Math.sin(m.clock/4700)*.8;if(s.held.has('action')&&m.charge)m.charge=limit(m.charge+dt,1,1300);for(const a of [...m.arrows]){a.x+=a.vx*sec;a.y+=a.vy*sec;if(a.y<266){const target=55+170*(.5+.5*Math.sin(m.clock/950));if(Math.abs(a.x-target)<(s.difficulty==='hard'?18:24)&&a.power>.3){award(s,h);message(m,'perfect');}else message(m,'miss');m.arrows.splice(m.arrows.indexOf(a),1);}}}
 if(m.id==='volley'){const p=m.player,o=m.opponent,b=m.ball;p.x=limit(m.pointerX!=null?seek(p.x,m.pointerX,150,sec):p.x+mv*sec*150,27,120);p.y+=p.vy*sec;p.vy+=650*sec;if(p.y>=458){p.y=458;p.vy=0;}p.pose=Math.max(0,p.pose-dt);m.x=p.x;m.y=p.y;
 if(m.reset>0){m.reset-=dt;if(m.reset<=0)serveVolley(m,m.serve);return true;}m.contact=Math.max(0,m.contact-dt);b.x+=b.vx*sec;b.y+=b.vy*sec;b.vy+=320*sec;
 if(b.x<23||b.x>257){b.x=limit(b.x,23,257);b.vx*=-.8;}if(b.y<207){b.y=207;b.vy=Math.abs(b.vy)*.65;}if(Math.abs(b.x-140)<10&&b.y>363){b.x=b.x<140?129:151;b.vx*=-.68;b.vy-=20;}
 // Rival predicts landing, moves at limited speed, and cannot cover every attack.
 const desired=b.x>145?limit(b.x+b.vx*.20,162,250):215;o.think=(o.think||0)-dt;if(o.think<=0){o.target=desired;o.think=s.difficulty==='hard'?140:340;}o.x=seek(o.x,o.target??215,s.difficulty==='hard'?125:72,sec);o.y+=o.vy*sec;o.vy+=650*sec;if(o.y>=458){o.y=458;o.vy=0;}if(b.x>156&&b.y<370&&b.vy>0&&Math.abs(b.x-o.x)<24&&o.y===458)o.vy=-275;
 if(m.lastTouch!==0&&!m.contact&&Math.hypot(b.x-p.x,b.y-(p.y-23))<25&&b.vy>0){b.vx=85+(b.x-p.x)*3;b.vy=-245;m.lastTouch=0;m.contact=260;m.rally++;}
 else if(m.lastTouch!==1&&!m.contact&&Math.hypot(b.x-o.x,b.y-(o.y-24))<30&&b.vy>0){b.vx=-90-(b.x-o.x)*2;b.vy=o.y<425&&m.rally>1?95:-245;m.lastTouch=1;m.contact=260;m.rally++;}
 if(b.y>468){const won=b.x>140;if(won)award(s,h);else lose(s,h);m.serve=won?0:1;m.reset=1050;message(m,won?'point-won':'point-lost');}}
 if(m.id==='tennis'){m.x=limit(m.pointerX!=null?seek(m.x,m.pointerX,155,sec):m.x+mv*sec*155,35,245);m.y=limit(m.pointerY!=null?seek(m.y,m.pointerY,130,sec):m.y+vert*sec*125,347,473);const b=m.ball;
 for(const o of m.opponents)o.stamina=limit(o.stamina+sec*(m.reset||m.serve?38:m.lastTouch===1?8:0),0,100);
 if(m.reset>0){m.reset-=dt;if(m.reset<=0){m.serve=1;m.ball={x:m.x,y:m.y,z:16,vx:0,vy:0,vz:0,bounces:0};m.flight=null;}return true;}if(m.serve){b.x=m.x;b.y=m.y;return true;}
 b.x+=b.vx*sec;b.y+=b.vy*sec;b.z+=b.vz*sec;b.vz-=380*sec;m.flight.age+=sec;
 // One defender commits to a shot after a visible reaction delay. No defender
 // swapping each frame or perfect immediate tracking of the landing marker.
 const reacting=m.lastTouch===0&&m.flight.age>=(s.difficulty==='hard'?.18:.34),nearest=m.opponents[m.flight.defender??0];
 if(reacting){const ox=nearest.x,oy=nearest.y,fatigue=.55+.45*nearest.stamina/100;nearest.x=limit(seek(nearest.x,m.flight.x,(s.difficulty==='hard'?82:52)*fatigue,sec),35,245);nearest.y=limit(seek(nearest.y,m.flight.y,(s.difficulty==='hard'?68:48)*fatigue,sec),218,301);nearest.stamina=Math.max(0,nearest.stamina-Math.hypot(nearest.x-ox,nearest.y-oy)*.11);}
 for(const [i,o]of m.opponents.entries()){if(m.lastTouch===1){o.x=seek(o.x,i?205:80,36,sec);o.y=seek(o.y,i?264:238,32,sec);}o.y=limit(o.y,218,301);}m.partner.x=limit(seek(m.partner.x,m.lastTouch===1&&b.x<115?b.x:65,86,sec),35,245);m.partner.y=limit(m.partner.y,350,465);
 if(reacting&&nearest.stamina>=28&&b.y<309&&b.z<46&&b.z>0&&Math.hypot(b.x-nearest.x,b.y-nearest.y)<18){nearest.stamina=Math.max(0,nearest.stamina-(s.difficulty==='hard'?28:34));tennisStroke(m,45+s.random()*190,432+s.random()*22,s.random()<.2,1);message(m,'rally');}
 else if(m.lastTouch===1&&b.y>365&&b.z>0&&b.z<42&&Math.hypot(b.x-m.partner.x,b.y-m.partner.y)<26&&m.partnerHelp<=0){tennisStroke(m,200,238,false,0);m.partnerHelp=2000;message(m,'partner');}
 if(b.z<=0){b.z=0;b.bounces++;if(b.bounces===1){const outside=b.x<32||b.x>248||b.y<210||b.y>478,net=Math.abs(b.y-326)<12,wrongSide=m.lastTouch===0?b.y>326:b.y<326;if(outside||net||wrongSide){if(m.lastTouch===1)award(s,h);else lose(s,h);m.reset=1000;message(m,m.lastTouch===1?'point-won':'point-lost');}else{b.vz=128;b.vx*=.68;b.vy*=.62;message(m,'bounce');}}else{if(m.lastTouch===0)award(s,h);else lose(s,h);m.reset=1000;message(m,m.lastTouch===0?'point-won':'point-lost');}}
 }
 if(m.id==='claw'){if(m.phase==='move'){m.aim=limit(m.aim+mv*sec*140,38,241);m.sway=limit(m.sway+Math.abs(mv)*sec*18-sec*8,0,22);}else if(m.phase==='drop'){m.clawY+=sec*140;if(m.clawY>=430){m.clawY=430;m.phase='grip';m.grip=0;}}else if(m.phase==='grip'){m.grip+=sec*.85;if(m.grip>1){m.phase='rise';message(m,'miss');}}else if(m.phase==='rise'){m.clawY-=sec*140;if(m.carry&&m.carry.slip+m.sway*m.carry.weight>24){m.carry.caught=false;m.carry=null;message(m,'slip');}if(m.clawY<=230){m.clawY=230;m.phase=m.carry?'carry':'move';}}else if(m.phase==='carry'){m.aim=seek(m.aim,42,130,sec);if(m.aim<=43){award(s,h);m.carry=null;m.phase='move';m.sway=0;}}}
 if(m.id==='feeding'){m.patience=Math.max(0,m.patience-sec*2.1);if(m.phase==='cook')m.heat=limit(m.heat+sec*.16,0,1.1);else{m.serving+=sec;if(m.serving>1.0){if(m.mealGood){award(s,h);m.patience=100;message(m,'success');}else{h.hurt(4);m.patience-=15;}m.request=(m.request+1+Math.floor(s.random()*2))%3;m.heat=0;m.phase='cook';}}
 if(m.patience<=0){h.hurt(5);m.patience=80;m.heat=0;message(m,'patience');}}
 if(m.id==='cinema'){const t=m.clock%7200;m.warning=t>=3500&&t<4200;m.watching=t>=4200&&t<6250;const kissing=s.held.has('action');if(kissing&&!m.watching&&!m.warning){m.kiss+=dt/1700;if(m.kiss>=1){m.kiss=0;award(s,h);message(m,'success');}}else if(kissing&&m.watching){m.suspicion+=dt*.11;m.kiss=Math.max(0,m.kiss-dt*.0005);}else{m.suspicion=Math.max(0,m.suspicion-dt*.027);m.kiss=Math.max(0,m.kiss-dt*.00008);}if(s.held.has('alt')&&m.stamina>0){m.stamina-=sec*35;m.suspicion=Math.max(0,m.suspicion-dt*.08);m.kiss=0;}if(m.suspicion>=100){h.hurt(8);m.lostPoints++;m.suspicion=25;message(m,'seen');}}
 if(m.id==='wheel'){m.angle+=sec*.62;m.wind=Math.sin(m.clock/1700)*.48+Math.cos(m.clock/900)*.18;m.balance=limit(m.balance+(m.wind+mv*.9)*sec,-1.4,1.4);if(s.held.has('alt')&&m.stamina>0){m.balance*=1-sec*2.6;m.stamina-=sec*32;}const top=wheelHeight(m)>WHEEL_HEIGHT,cycle=Math.floor((m.angle+Math.PI/2)/(Math.PI*2));if(cycle!==m.cycle){m.cycle=cycle;m.windowDone=false;m.kiss=0;}if(timingState(m).ready&&s.held.has('action')){m.kiss+=dt/850;if(m.kiss>=1){m.windowDone=true;award(s,h);message(m,'success');}}if(Math.abs(m.balance)>1.2&&m.cooldown<=0){h.hurt(3);m.cooldown=2000;message(m,'wind');}if(!top)m.kiss=0;}
 if(m.id==='haunted'){const holding=s.held.has('action'),speed=holding?82:120;m.x=limit(m.pointerX!=null?seek(m.x,m.pointerX,speed,sec):m.x+mv*speed*sec,30,m.hauntPhase==='escape'?245:176);m.y=432;m.partner.x=seek(m.partner.x,m.x+23,holding?150:90,sec);m.partner.y=435;m.handHeld=holding?m.handHeld+dt:0;m.fear=limit(m.fear-sec*4,0,100);
 if(m.hauntPhase==='approach'&&m.x>=164){m.hauntPhase='warning';m.scareTime=0;message(m,'scare-warning');}
 if(m.hauntPhase==='warning'){m.scareTime+=dt;if(m.scareTime>=1200){if(m.handHeld>=350){m.hauntPhase='escape';m.collected++;award(s,h);message(m,'together');}else{h.hurt(m.invincible>0?2:7);m.fear=limit(m.fear+25,0,100);m.scareTime=0;message(m,'scared');}}}
 if(m.hauntPhase==='escape'&&m.x>=235){if(m.roomIndex===2){m.escaped=true;h.finish(true);}else{m.roomIndex++;m.x=45;m.partner.x=69;m.hauntPhase='approach';m.handHeld=0;m.pointerX=null;message(m,'next-room');}}}
 if(m.id==='piano'||m.id==='dance'){const notes=m.id==='piano'?m.notes:m.steps;for(const n of notes){if(n.hit||n.miss)continue;const key=m.id==='piano'?['left','up','action','right'][n.lane]:n.key;if(n.started){if(s.held.has(key)){n.held+=dt;if(n.held>=n.hold){n.hit=true;award(s,h);message(m,'perfect');}}else{n.miss=true;m.combo=0;h.hurt(2);message(m,'hold');}}else if(m.clock>n.at+190){n.miss=true;m.combo=0;h.hurt(1);message(m,'miss');}}}
 if(m.clock>=m.duration&&!s.scene&&!s.over&&!m.done)h.finish(m.id==='haunted'?m.escaped:m.score>=m.target);return true;
}
export const ARCADE_HINTS={archery:['左右瞄準；按住空白，放開射箭','Aim ← →; hold Space, release to shoot'],piano:['到金線短音按一下；長音按住到尾','Tap at gold line; sustain long notes'],claw:['左右移夾；空白下降／抓合；C 穩定','Move ← →; Space drop / grip; C steadies'],tennis:['走位；←中→調球；空白揮拍；C 高吊','Move; ← center → aim; Space swing; C lob'],volley:['左右跑；↑ 跳；空白扣殺；C 撲救','Run ← →; ↑ jump; Space spike; C dive'],feeding:['選相同圖標；指針到綠區按空白','Match icon; serve in green zone'],cinema:['按住空白；預警放手；C 掩飾','Hold Space kiss; release at warning; C hide'],wheel:['左右平衡；綠區按住空白；C 穩定','Balance ← →; hold Space in green; C steady'],haunted:['向右到出口；驚嚇時按住空白牽手','Walk right; hold Space when warned'],dance:['短拍按一下；金色長拍持續按住','Tap short beats; hold gold long beats'],charm:['方向走位；空白魅惑；C 閃老師','Move; Space charms; C dodges teachers']};
