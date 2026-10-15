import {freshBoard,swap,settle,executionJellies,W,H} from './match.mjs';
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const FRUITS=[{r:9,color:'#ee697f'},{r:12,color:'#efbc48'},{r:15,color:'#b398e9'},{r:19,color:'#f2904d'},{r:24,color:'#e8546d'},{r:29,color:'#e8d37c'},{r:35,color:'#81d095'},{r:42,color:'#4cc995'}];
export const AREA={x:20,y:204,w:240,h:276};
export function initGame(s,m){const hard=s.difficulty==='hard';m.objects=[];m.score=0;m.x=140;m.y=445;m.invincible=0;m.cooldown=0;m.selected=0;m.feedback='';m.feedbackTime=0;
 if(m.id==='snake'){m.duration=45000;m.target=hard?12:10;m.snake=[[5,9],[4,9],[3,9]];m.dir=[1,0];m.nextDir=null;m.step=0;m.stepMs=hard?170:210;snakeFood(s,m);}
 if(['match','execution'].includes(m.id)){m.board=freshBoard(s.random);m.cursor=0;m.chosen=null;m.moves=m.id==='execution'?(hard?20:24):22;m.goal=0;m.collected=0;m.target=m.id==='execution'?(hard?22:18):(hard?48:36);m.match=[];m.busy=0;m.combo=0;m.specials=Array(W*H).fill(null);m.jellies=m.id==='execution'?executionJellies(hard):Array(W*H).fill(0);m.jellyTarget=m.jellies.reduce((a,b)=>a+b,0);m.jellyCleared=0;m.falling=Array(W*H).fill(0);m.duration=m.id==='execution'?Infinity:55000;}
 if(m.id==='merge'){m.duration=Infinity;m.target=FRUITS.length-1;m.watermelon=false;m.fruits=[];m.next=Math.floor(s.random()*3);m.aim=140;m.topTime=0;m.swaps=3;m.dropCooldown=0;}
 if(m.id==='rope'){m.duration=65000;m.target=3;m.level=0;setupRope(m);}
 if(m.id==='slice'){m.duration=40000;m.target=hard?24:20;m.spawn=0;m.cursor={x:140,y:340};m.trail=[];m.sliceEffects=[];m.slashes=[];m.lastSlash=0;m.missed=0;}
 if(['gravity','ricochet','floor','burst'].includes(m.id)){m.duration=m.id==='burst'?Infinity:16000;m.target=1;m.spawn=0;m.floor=[];m.anchor=null;m.counter={x:140,y:385,ready:false};m.counterTime=0;m.mouth={x:140,y:212};m.anchors=[{x:45,y:420},{x:235,y:420}];}
 if(m.id==='escape'){m.duration=hard?50000:60000;m.target=100;m.distance=0;m.y=437;m.jump=0;m.vy=0;m.spawn=1200;m.obstacles=[];m.closed=0;m.lane=1;m.lanePosition=1;m.slide=0;m.stumble=0;m.escapeGesture=null;}
}
function snakeFood(s,m){const free=[];for(let y=0;y<15;y++)for(let x=0;x<12;x++)if(!m.snake.some(p=>p[0]===x&&p[1]===y))free.push([x,y]);m.food=free[Math.floor(s.random()*free.length)]||null;}
export function setupRope(m){const k=m.level;m.candy={x:140,y:267,vx:0,vy:0,r:10};m.ropes=[{x:80,y:218,len:Math.hypot(60,49),cut:false},{x:200,y:218,len:Math.hypot(60,49),cut:false}];m.receiver={x:140+(k===1?56:k===2?-56:0),y:455};m.stars=[{x:140,y:338,taken:false}];m.selected=0;m.ropeAge=0;m.resetWait=0;m.wall=k===0?null:{x:k===1?105:150,y:353,w:25,h:17};}
export function cutRope(m,i){if(!m.ropes[i]||m.ropes[i].cut)return false;m.ropes[i].cut=true;m.candy.vx+=(i===0?1:-1)*28;m.feedback='cut';m.feedbackTime=700;return true;}
function dropFruit(s,m){if(m.dropCooldown>0)return;m.fruits.push({x:clamp(m.aim,24+FRUITS[m.next].r,256-FRUITS[m.next].r),y:224,vx:0,vy:0,level:m.next,age:0});m.next=Math.floor(s.random()*3);m.dropCooldown=600;}
export function gameInput(s,key,hooks){const m=s.round;if(m.id==='snake'){const d={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]}[key];if(d&&!m.nextDir&&(d[0]!==-m.dir[0]||d[1]!==-m.dir[1]))m.nextDir=d;return;}
 if(['match','execution'].includes(m.id)){if(m.busy)return;const x=m.cursor%W,y=Math.floor(m.cursor/W);if(key==='left')m.cursor=y*W+Math.max(0,x-1);if(key==='right')m.cursor=y*W+Math.min(W-1,x+1);if(key==='up')m.cursor=Math.max(0,y-1)*W+x;if(key==='down')m.cursor=Math.min(H-1,y+1)*W+x;if(key==='alt')m.chosen=null;if(key==='action')selectMatch(s,m.cursor);return;}
 if(m.id==='merge'){if(key==='action')dropFruit(s,m);if(key==='alt'&&m.swaps){m.next=(m.next+1)%3;m.swaps--;}return;}
 if(m.id==='rope'){if(key==='left'||key==='right')m.selected=1-m.selected;if(key==='action')cutRope(m,m.selected);if(key==='alt')setupRope(m);return;}
 if(m.id==='slice'){if(key==='action'&&m.clock-m.lastSlash>120){m.lastSlash=m.clock;sliceLine(s,m.cursor,{x:m.cursor.x+1,y:m.cursor.y},hooks,25);}return;}
 if(m.id==='gravity'){if(key==='alt')m.anchor=null;if(key==='action'){const near=m.anchors.find(a=>Math.hypot(a.x-m.x,a.y-m.y)<35);if(near)m.anchor=near;}return;}
 if(m.id==='escape'){if(key==='left'||key==='right')m.lane=clamp(m.lane+(key==='left'?-1:1),0,2);if((key==='action'||key==='up')&&m.jump===0){m.vy=255;m.slide=0;}if((key==='alt'||key==='down')&&m.jump===0)m.slide=850;return;}
 if(['ricochet','floor','burst'].includes(m.id)&&key==='action'&&m.cooldown<=0&&m.counter.ready&&Math.hypot(m.counter.x-m.x,m.counter.y-m.y)<34){m.counter.ready=false;m.counterTime=0;m.cooldown=400;hooks.hit(m.id==='burst'?32:20);hooks.heal(2);m.feedback='counter';m.feedbackTime=900;}
}
export function selectMatch(s,i){const m=s.round;if(m.busy||i<0||i>=W*H)return;if(m.chosen===null){m.chosen=i;return;}if(m.chosen===i){m.chosen=null;return;}const a=m.chosen;m.chosen=null;swap(m,a,i,s.random);}
export function gamePoint(s,x,y,phase,hooks){const m=s.round;
 if(['match','execution'].includes(m.id)){const cx=Math.floor((x-26)/38),cy=Math.floor((y-204)/38),inside=cx>=0&&cx<W&&cy>=0&&cy<H;if(phase==='start'&&inside&&!m.busy){m.cursor=cy*W+cx;selectMatch(s,m.cursor);m.matchGesture={cell:m.cursor,x,y};}else if(phase==='move'&&inside&&m.matchGesture&&!m.busy){const i=cy*W+cx,a=m.matchGesture.cell;if(Math.abs(a%W-i%W)+Math.abs(Math.floor(a/W)-Math.floor(i/W))===1&&Math.hypot(x-m.matchGesture.x,y-m.matchGesture.y)>12){m.cursor=i;selectMatch(s,i);m.matchGesture=null;}}if(phase==='end'||phase==='cancel')m.matchGesture=null;return;}
 if(m.id==='merge'){m.aim=clamp(x,36,244);if(phase==='end')dropFruit(s,m);return;}
 if(m.id==='rope'){if(phase==='start'){m.pointer={x,y};return;}if(phase==='move'&&m.pointer){for(let i=0;i<m.ropes.length;i++){const r=m.ropes[i];if(!r.cut&&segments(m.pointer,{x,y},r,m.candy))cutRope(m,i);}m.pointer={x,y};}if(phase==='end'||phase==='cancel')m.pointer=null;return;}
 if(m.id==='slice'){const p={x:clamp(x,25,255),y:clamp(y,208,478)};if(phase==='move'&&m.pointer){sliceLine(s,m.pointer,p,hooks);m.trail.push({...p,age:0});}m.cursor=p;m.pointer=phase==='end'||phase==='cancel'?null:p;return;}
 if(m.id==='escape'){if(phase==='start')m.escapeGesture={x,y};else if(phase==='move'&&m.escapeGesture){const dx=x-m.escapeGesture.x,dy=y-m.escapeGesture.y;if(Math.max(Math.abs(dx),Math.abs(dy))>=22){gameInput(s,Math.abs(dx)>Math.abs(dy)?dx>0?'right':'left':dy<0?'action':'alt',hooks);m.escapeGesture=null;}}if(phase==='end'||phase==='cancel')m.escapeGesture=null;return;}
 if(['gravity','ricochet','floor','burst'].includes(m.id)){m.pointer=phase==='end'||phase==='cancel'?null:{x:clamp(x,28,252),y:clamp(y,230,465)};}
}
function segments(a,b,c,d){const cross=(p,q,r)=>(q.x-p.x)*(r.y-p.y)-(q.y-p.y)*(r.x-p.x);return cross(a,b,c)*cross(a,b,d)<=0&&cross(c,d,a)*cross(c,d,b)<=0&&Math.max(a.x,b.x)>=Math.min(c.x,d.x)&&Math.min(a.x,b.x)<=Math.max(c.x,d.x)&&Math.max(a.y,b.y)>=Math.min(c.y,d.y)&&Math.min(a.y,b.y)<=Math.max(c.y,d.y);}
function distLine(o,a,b){const dx=b.x-a.x,dy=b.y-a.y,t=clamp(((o.x-a.x)*dx+(o.y-a.y)*dy)/(dx*dx+dy*dy||1),0,1);return Math.hypot(o.x-a.x-t*dx,o.y-a.y-t*dy);}
export function sliceLine(s,a,b,hooks,radius=0){const m=s.round;const angle=Math.atan2(b.y-a.y,b.x-a.x);m.slashes.push({a:{...a},b:{...b},age:0});
 for(const o of [...m.objects]){if(o.hit||distLine(o,a,b)>o.r+radius)continue;o.hit=true;
 if(o.bomb){hooks.hurt(8);m.feedback='bomb';for(let i=0;i<10;i++){const t=i*Math.PI/5;m.sliceEffects.push({kind:'spark',x:o.x,y:o.y,vx:Math.cos(t)*70,vy:Math.sin(t)*70-35,angle:0,spin:0,age:0,life:380,color:'#ffba73'});}}
 else{m.score++;hooks.hit(3);if(m.score%4===0)hooks.heal(2);m.feedback='success';
 for(const side of[-1,1])m.sliceEffects.push({kind:'half',type:o.type,x:o.x,y:o.y,vx:o.vx+Math.cos(angle+Math.PI/2)*side*55,vy:o.vy*.35+Math.sin(angle+Math.PI/2)*side*55-30,angle,spin:side*2,side,age:0,life:680,r:o.r});
 const colors=['#ef6277','#efc461','#b69be6','#f49a55','#b8db78'];for(let i=0;i<8;i++){const t=i*Math.PI/4;m.sliceEffects.push({kind:'juice',x:o.x,y:o.y,vx:Math.cos(t)*(35+i*6),vy:Math.sin(t)*50-30,angle:0,spin:0,age:0,life:450,color:colors[o.type%5]});}}
 m.feedbackTime=800;if(s.over||s.scene)return;}
 if(m.score>=m.target)hooks.finish(true);}
export function gameUpdate(s,dt,hooks){const m=s.round,sec=dt/1000,hard=s.difficulty==='hard';m.invincible=Math.max(0,m.invincible-dt);m.cooldown=Math.max(0,m.cooldown-dt);m.feedbackTime=Math.max(0,m.feedbackTime-dt);updateGameEffects(m,dt);
 if(m.id==='snake'){m.step+=dt;if(m.step>=m.stepMs){m.step-=m.stepMs;if(m.nextDir){m.dir=m.nextDir;m.nextDir=null;}const head=[(m.snake[0][0]+m.dir[0]+12)%12,(m.snake[0][1]+m.dir[1]+15)%15],eat=m.food&&head[0]===m.food[0]&&head[1]===m.food[1];if(m.snake.slice(0,eat?undefined:-1).some(p=>p[0]===head[0]&&p[1]===head[1])){hooks.finish(false);return;}m.snake.unshift(head);if(eat){m.score++;hooks.hit(5);hooks.heal(2);snakeFood(s,m);if(m.score>=m.target)hooks.finish(true);}else m.snake.pop();}return;}
 if(['match','execution'].includes(m.id)){if(m.busy){m.busy-=dt;if(m.busy<=0){const e=settle(m,s.random);hooks.hit(Math.min(25,e.cleared*2));if(e.cleared>=4)hooks.heal(2);m.feedback='success';m.feedbackTime=1000;if(s.round!==m||s.scene)return;}}if(!m.busy){if((m.id==='execution'?m.collected>=m.target&&m.jellies.every(n=>n===0):m.score>=m.target))hooks.finish(true);else if(m.moves===0)hooks.finish(false);}return;}
 if(m.id==='merge'){m.aim=clamp(m.aim+((s.held.has('right')?1:0)-(s.held.has('left')?1:0))*sec*140,36,244);m.dropCooldown=Math.max(0,m.dropCooldown-dt);fruitPhysics(s,m,sec,hooks);if(s.round!==m||s.scene)return;const crowded=m.fruits.some(o=>o.age>1500&&o.y-FRUITS[o.level].r<238&&Math.abs(o.vy)<45);m.topTime=crowded?m.topTime+dt:Math.max(0,m.topTime-dt);if(m.topTime>1800)hooks.finish(false);else if(m.watermelon)hooks.finish(true);return;}
 if(m.id==='rope'){ropePhysics(s,m,sec,hooks);return;}
 if(m.id==='slice'){m.cursor.x=clamp(m.cursor.x+((s.held.has('right')?1:0)-(s.held.has('left')?1:0))*sec*180,26,254);m.cursor.y=clamp(m.cursor.y+((s.held.has('down')?1:0)-(s.held.has('up')?1:0))*sec*180,210,475);m.spawn-=dt;if(m.spawn<=0){m.spawn=hard?680:850;const x=45+s.random()*190;m.objects.push({x,y:478,vx:(140-x)*.4,vy:-230-s.random()*90,r:12,bomb:s.random()<.22,type:Math.floor(s.random()*5)});}for(const o of m.objects){o.vy+=sec*280;o.x+=o.vx*sec;o.y+=o.vy*sec;if(!o.hit&&o.y>510){o.hit=true;if(!o.bomb){m.missed++;if(m.missed%3===0)hooks.hurt(3);}}}m.objects=m.objects.filter(o=>!o.hit&&o.y<515);return;}
 if(m.id==='escape'){escapeUpdate(s,m,dt,hooks);return;}
 attackUpdate(s,m,dt,hooks);
}
export function fruitPhysics(s,m,sec,hooks){const steps=Math.ceil(sec/.012),step=sec/steps;for(let k=0;k<steps;k++){for(const o of m.fruits){const r=FRUITS[o.level].r;o.age+=step*1000;o.vy+=step*430;o.x+=o.vx*step;o.y+=o.vy*step;o.vx*=.995;if(o.x<24+r){o.x=24+r;o.vx=Math.abs(o.vx)*.35;}if(o.x>256-r){o.x=256-r;o.vx=-Math.abs(o.vx)*.35;}if(o.y>478-r){o.y=478-r;o.vy=-Math.abs(o.vy)*.16;if(Math.abs(o.vy)<7)o.vy=0;}}
 for(let iter=0;iter<3;iter++)for(let i=0;i<m.fruits.length;i++)for(let j=i+1;j<m.fruits.length;j++){const a=m.fruits[i],b=m.fruits[j],ar=FRUITS[a.level].r,br=FRUITS[b.level].r,dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||.01;if(d>ar+br)continue;if(a.level===b.level&&a.level<7){const level=a.level+1;m.fruits.splice(j,1);m.fruits.splice(i,1);m.fruits.push({x:clamp((a.x+b.x)/2,24+FRUITS[level].r,256-FRUITS[level].r),y:(a.y+b.y)/2,vx:(a.vx+b.vx)/2,vy:Math.min(0,(a.vy+b.vy)/2),level,age:0});const gain=2**level;m.score+=gain;if(level===FRUITS.length-1)m.watermelon=true;hooks.hit(Math.min(12,gain));hooks.heal(level>=4?3:1);m.feedback='merge';m.feedbackTime=800;return;}
 const nx=dx/d,ny=dy/d,push=(ar+br-d)*.5;a.x-=nx*push;a.y-=ny*push;b.x+=nx*push;b.y+=ny*push;const v=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;if(v<0){a.vx+=v*nx*.52;a.vy+=v*ny*.52;b.vx-=v*nx*.52;b.vy-=v*ny*.52;}a.vx*=.98;b.vx*=.98;}
 }}
function ropePhysics(s,m,sec,hooks){const o=m.candy;m.ropeAge+=sec;if(m.resetWait){m.resetWait-=sec;if(m.resetWait<=0)setupRope(m);return;}o.vy+=sec*270;o.x+=o.vx*sec;o.y+=o.vy*sec;for(let k=0;k<6;k++)for(const r of m.ropes){if(r.cut)continue;const dx=o.x-r.x,dy=o.y-r.y,d=Math.hypot(dx,dy),nx=dx/d,ny=dy/d;if(d>r.len){o.x=r.x+nx*r.len;o.y=r.y+ny*r.len;const dot=o.vx*nx+o.vy*ny;if(dot>0){o.vx-=dot*nx;o.vy-=dot*ny;}}}if(m.wall&&o.x>m.wall.x-10&&o.x<m.wall.x+m.wall.w+10&&Math.abs(o.y-m.wall.y)<18){o.x+=o.vx>=0?-12:12;o.vx*=-.5;o.vy=-40;}for(const star of m.stars)if(!star.taken&&Math.hypot(o.x-star.x,o.y-star.y)<25){star.taken=true;hooks.heal(2);}if(Math.hypot(o.x-m.receiver.x,o.y-m.receiver.y)<28){m.score++;hooks.hit(18);hooks.heal(3);if(m.score>=m.target)hooks.finish(true);else{m.level++;setupRope(m);}}else if(o.y>492||o.x<10||o.x>270){m.feedback='miss';m.feedbackTime=900;m.resetWait=.9;hooks.hurt(3);}}
function movePlayer(s,m,sec){let dx=(s.held.has('right')?1:0)-(s.held.has('left')?1:0),dy=(s.held.has('down')?1:0)-(s.held.has('up')?1:0);if(m.pointer){const x=m.pointer.x-m.x,y=m.pointer.y-m.y,len=Math.hypot(x,y);dx=len>3?x/len:0;dy=len>3?y/len:0;}const len=Math.max(1,Math.hypot(dx,dy));m.x=clamp(m.x+dx/len*sec*155,30,250);m.y=clamp(m.y+dy/len*sec*155,236,466);}
function damage(s,m,hooks,n){if(m.invincible<=0){hooks.hurt(n);m.invincible=950;m.feedback='hit';m.feedbackTime=800;}}
function attackUpdate(s,m,dt,hooks){const sec=dt/1000,hard=s.difficulty==='hard',power=1+(s.stage-1)*.22+(hard?.12:0);movePlayer(s,m,sec);const cycle=m.clock%4000;
 if(m.id==='gravity'){const pulling=cycle>1000&&cycle<3300;m.pulling=pulling;if(m.anchor){m.x=m.anchor.x;m.y=m.anchor.y;}else if(pulling){const dx=m.mouth.x-m.x,dy=m.mouth.y-m.y,d=Math.hypot(dx,dy);m.x+=dx/d*sec*(102*power+(d<95?45:0));m.y+=dy/d*sec*(102*power+(d<95?45:0));if(d<25){damage(s,m,hooks,22);m.x=140;m.y=447;}}if(!pulling&&cycle>3300&&!m.rewarded){hooks.hit(12);m.rewarded=true;}if(cycle<1000)m.rewarded=false;return;}
 m.counterTime+=dt;if(m.counterTime>2300&&!m.counter.ready){const safe=m.id==='floor'?m.floor.filter(o=>o.active===false):null;m.counter={x:safe?.length?safe[0].x+20:70+s.random()*140,y:safe?.length?safe[0].y+20:350+s.random()*80,ready:true};}
 if(m.id==='floor'){m.spawn-=dt;if(m.spawn<=0){m.spawn=2100/power;const cells=[];for(let y=0;y<5;y++)for(let x=0;x<5;x++){// Permanent central corridor and bottom escape lane.
 if(x===2||y===4||m.floor.some(o=>o.cx===x&&o.cy===y))continue;cells.push({cx:x,cy:y,x:30+x*44,y:244+y*44,age:0,active:false});}if(cells.length)m.floor.push(cells[Math.floor(s.random()*cells.length)]);}for(const o of m.floor){o.age+=dt;o.active=o.age>1000;if(o.active&&m.x>o.x&&m.x<o.x+40&&m.y>o.y&&m.y<o.y+40){damage(s,m,hooks,12);m.x=140;m.y=455;}}return;}
 m.spawn-=dt;if(m.spawn<=0){m.spawn=(m.id==='burst'?1050:1600)/power;const a=.4+s.random()*2.3,speed=(m.id==='burst'?145:120)*power;m.objects.push({x:140,y:250,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,r:9,bounces:0,type:Math.floor(s.random()*5)});}
 for(const o of m.objects){o.x+=o.vx*sec;o.y+=o.vy*sec;if(o.x<30||o.x>250){o.x=clamp(o.x,30,250);o.vx=-o.vx;o.bounces++;}if(o.y<242||o.y>470){o.y=clamp(o.y,242,470);o.vy=-o.vy;o.bounces++;}if(o.bounces<5&&Math.hypot(m.x-o.x,m.y-o.y)<o.r+7)damage(s,m,hooks,6);}m.objects=m.objects.filter(o=>o.bounces<5);
 if(m.id==='burst'){m.burstOpen=cycle>2700;if(!m.burstOpen)m.counter.ready=false;else if(!m.counter.ready&&m.counterTime>1000){m.counter={x:140,y:385,ready:true};}}
}
function escapeUpdate(s,m,dt,hooks){const sec=dt/1000,hard=s.difficulty==='hard';
 m.lanePosition+=(m.lane-m.lanePosition)*Math.min(1,sec*12);m.x=140+(m.lanePosition-1)*65;
 m.vy-=sec*590;m.jump=Math.max(0,m.jump+m.vy*sec);if(m.jump===0)m.vy=0;m.slide=Math.max(0,m.slide-dt);m.stumble=Math.max(0,m.stumble-dt);
 const speed=(hard?28:24)*(m.stumble>0?.35:1);m.distance=Math.min(100,m.distance+sec*speed/10);
 // Completing the actual course stops collision processing in this same update.
 if(m.distance>=100){hooks.finish(true);return;}m.closed=m.clock/m.duration;
 m.spawn-=dt;if(m.spawn<=0){m.spawn=hard?1250:1650;const free=Math.floor(s.random()*3),kind=['crumb','pit','beam'][Math.floor(s.random()*3)];
 const blocked=[0,1,2].filter(lane=>lane!==free);if(s.random()<.55)blocked.splice(1,1);
 for(const lane of blocked)m.obstacles.push({lane,z:95,kind,hit:false});}
 for(const o of m.obstacles){const previousZ=o.z;o.z-=sec*speed;if(!o.hit&&previousZ>0&&o.z<=0){o.hit=true;if(Math.abs(o.lane-m.lanePosition)>=.43)continue;
 const safe=o.kind==='beam'?m.slide>0&&m.jump<5:m.jump>=(o.kind==='pit'?18:24);
 if(!safe){damage(s,m,hooks,7);m.stumble=650;}o.hit=true;}}
 m.obstacles=m.obstacles.filter(o=>o.z>-10);m.y=437-m.jump;}

export function updateGameEffects(m,dt){const sec=dt/1000;if(m.falling){m.falling=m.falling.map(v=>v*Math.max(0,1-sec*14));m.clearAge=(m.clearAge||0)+dt;}
 if(m.id==='slice'){m.trail=m.trail.filter(o=>(o.age+=dt)<170);m.slashes=m.slashes.filter(o=>(o.age+=dt)<210);m.sliceEffects=m.sliceEffects.filter(o=>{o.age+=dt;o.x+=o.vx*sec;o.y+=o.vy*sec;o.vy+=sec*240;o.angle+=o.spin*sec;return o.age<o.life;});}}
