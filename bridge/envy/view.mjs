import { drawLoreGame, drawLoreSecret } from './lore-view.mjs';
import { WINDOW } from './lore-games.mjs';
import { cellsOf, ghostY } from '../logic.mjs';
import { configureBridgePaint, drawGridCells, paintPiece } from './bridge-paint.mjs';
import { appearance, bossName, CURSE_NAMES } from './engine.mjs';
import { NAMES, HINTS, ATTACKS, eyeRect, gridLayout, LASER_EYES, laserEyePosition, laserRules, describeCard } from './rounds.mjs';
import { keyOf, blockCells, clamp, segmentHitsRect } from './geometry.mjs';
import { text, path, box, eye, heart, drawCard, drawWorm, backdrop, images } from './art.mjs';

export const canvasHeight = s => s?.mode==='bridge'?720:560;
function bar(c,x,y,w,ratio,color){box(c,x,y,w,5,'#142720',null,2);box(c,x,y,w*Math.max(0,Math.min(1,ratio)),5,color,null,2);}
function stateLine(s){
  const m=s.round,left=Math.max(0,Math.ceil((m.duration-m.clock)/1000));
  if(s.mode==='window')return `${Math.min(6,m.stage+1)}/6 窗 · 擦開 ${Math.min(100,Math.round(m.cleared/m.mask.length/WINDOW.coverage*100))}% · ${left} 秒`;
  if(s.mode==='eye-room')return `眼球 ${m.eyes.size}/6 · ${left} 秒`;
  if(s.mode==='difference')return `${m.round}/3 輪 · ${left} 秒`;
  if(s.mode==='rolling')return `${m.round}/3 關 · ${left} 秒`;
  if(s.mode==='tarot'||s.mode==='pack')return `${m.drawn}/${m.total} 張 · ${left} 秒`;
  if(s.mode==='territory')return `領域 ${Math.floor(m.owned.size/(m.w*m.h)*100)}% · ${left} 秒`;
  if(s.mode==='pellets')return `光點 ${m.eaten}/${m.target} · ${left} 秒`;
  if(s.mode==='pupil')return m.hold?`盲點封印 ${Math.ceil((3000-m.hold)/1000)}`:`找到盲點 · ${left} 秒`;
  if(s.mode==='chase')return `終點 ${Math.min(100,Math.floor(m.x/m.goal*100))}% · ${left} 秒`;
  if(s.mode==='capture')return `捕捉本體 · ${left} 秒`;
  if(s.mode==='bridge')return `${s.form===2&&s.chaseEntered?'巨瞳鎖血 · ':''}BOSS ${bossName(s)}`;
  if(s.pendingShield)return `塔羅護佑 · ${left} 秒`;
  return `${s.vulnerable>1?'暴走 · 反攻強化 · ':''}${left} 秒`;
}
// Same 280×560 board mapped into CRAZY_BLOCK_ARENA as crazyPlayfield('bridge').
export const BRIDGE_LAYOUT=Object.freeze({x:12,y:152,w:256,h:512,scale:256/280});
function bridge(c,s,reduced){
  const g=s.bridge,a=BRIDGE_LAYOUT;configureBridgePaint(reduced);
  box(c,a.x-2,a.y-2,a.w+4,a.h+4,'#526e49',null,5);
  box(c,a.x,a.y,a.w,a.h,'#0c1916',null,3);
  c.save();c.translate(a.x,a.y);c.scale(a.scale,a.scale);
  if(s.curses.blind<=0)drawGridCells(c,g.grid,new Set(),28);
  if(g.active&&g.phase==='playing'){
    paintPiece(c,{...g.active,y:ghostY(g)},true);paintPiece(c,g.active,false);
  }
  c.restore();
  // Original Crazy preview positions: labels y=37, hold y=53, three next slots.
  text(c,g.noHoldLeft>0?'封印':'留',40,37,10,'#bdcda8');
  text(c,'下一個',240,37,10,'#bdcda8');
  const preview=(piece,x,y)=>{
    if(!piece)return;
    const cells=cellsOf(piece.type,0,0,0),minX=Math.min(...cells.map(([x])=>x)),minY=Math.min(...cells.map(([,y])=>y));
    c.save();c.translate(x,y);c.scale(6/28,6/28);paintPiece(c,{...piece,rot:0,x:-minX,y:-minY});c.restore();
  };
  c.save();c.globalAlpha=g.holdLocked||g.noHoldLeft>0?.35:1;preview(g.hold,26,53);c.restore();
  g.queue.slice(0,3).forEach((piece,i)=>preview(piece,226,49+i*21));
}
function playerHud(c,s,h){
  // Preserve the original Crazy bottom HUD and bar geometry; only theme changes.
  text(c,`HP ${s.hp}/${s.maxHp}${s.slowTime>0?' · 移速減慢':''}`,140,h-38,14,'#e5efd5');
  box(c,24,h-25,232,6,'#24352a',null,3);
  box(c,24,h-25,Math.max(.01,232*s.hp/s.maxHp),6,s.hp<=25?'#ff466c':'#6bdfb2',null,3);
  const curses=s.mode==='bridge'?Object.entries(s.curses).filter(([,v])=>v>0).map(([k,v])=>`${CURSE_NAMES[k]} ${Math.ceil(v/1000)}`).join(' · '):'';
  const status=curses||s.noticeTime>0&&s.notice||'';
  if(status)text(c,status,140,h-10,11,curses?'#ffb0a3':'#e5e7b0');
}
function difference(c,m,reduced){
  for(let i=0;i<12;i++){
    const r=eyeRect(i);box(c,r.x,r.y,r.w,r.h,'#173329','#58764d',4);
    const data=i===m.odd?m.oddEye:m.baseEye;eye(c,r.x+r.w/2,r.y+r.h/2,55,27,{...data,clock:m.clock,reduced});
    if(i===m.focus){c.strokeStyle='#f4f3b0';c.lineWidth=2;c.strokeRect(r.x-2,r.y-2,r.w+4,r.h+4);c.strokeRect(r.x+2,r.y+2,r.w-4,r.h-4);}
  }
}
function rolling(c,m){
  const board=m.board,scale=board.w<=5?26:22,depth=scale*.67;
  const project=(x,y,z=0)=>({x:140+(x-board.w/2)*scale-(y-board.h/2)*scale*.34,y:300+(x+y-(board.w+board.h)/2)*depth-z*scale});
  const poly=(points,fill,stroke)=>path(c,points.map(v=>{const p=project(...v);return[p.x,p.y];}),fill,stroke);
  // Depth-sorted 3D slab island and a genuine dark hole, following the original rolling puzzle view.
  const tiles=[...board.tiles].map(k=>k.split(',').map(Number)).sort((a,b)=>a[0]+a[1]-b[0]-b[1]);
  for(const[x,y]of tiles){
    poly([[x,y+1,0],[x+1,y+1,0],[x+1,y+1,-.24],[x,y+1,-.24]],'#152d27','#586c46');
    poly([[x+1,y,0],[x+1,y+1,0],[x+1,y+1,-.24],[x+1,y,-.24]],'#253e31','#586c46');
    const goal=x===board.goal.x&&y===board.goal.y,start=x===board.start.x&&y===board.start.y;
    poly([[x,y,0],[x+1,y,0],[x+1,y+1,0],[x,y+1,0]],goal?'#020d0b':start?'#799052':'#51644a',goal?'#d8db92':'#93a374');
    if(goal){const p=project(x+.5,y+.5,-.05);eye(c,p.x,p.y,scale*.7,depth*.5,{size:3,hue:'#b6d779'});}
    else poly([[x+.12,y+.12,.008],[x+.88,y+.12,.008],[x+.88,y+.22,.008],[x+.12,y+.22,.008]],'#cedba232');
  }
  const b=m.roll?.from||m.block,dx=b.orientation===1?2:1,dy=b.orientation===2?2:1,dz=b.orientation?1:2;
  const verts=[[0,0,0],[dx,0,0],[dx,dy,0],[0,dy,0],[0,0,dz],[dx,0,dz],[dx,dy,dz],[0,dy,dz]].map(([x,y,z])=>[x+b.x,y+b.y,z]);
  if(m.roll){
    const t=Math.min(1,m.roll.age/m.roll.duration),angle=(t*t*(3-2*t))*Math.PI/2,d=m.roll.direction;
    const axis=(d==='left'||d==='right')?0:1,positive=d==='right'||d==='down',hinge=(axis===0?b.x:b.y)+(positive?(axis===0?dx:dy):0),a=positive?angle:-angle;
    for(const v of verts){const offset=v[axis]-hinge,z=v[2];v[axis]=hinge+Math.cos(a)*offset+Math.sin(a)*z;v[2]=-Math.sin(a)*offset+Math.cos(a)*z;}
  }
  const faces=[{v:[0,1,5,4],fill:'#a59c68'},{v:[1,2,6,5],fill:'#5c6b44'},{v:[2,3,7,6],fill:'#83915b'},{v:[3,0,4,7],fill:'#536e50'},{v:[4,5,6,7],fill:'#d1c68e'}];
  faces.sort((a,b)=>a.v.reduce((v,i)=>v+verts[i][0]+verts[i][1],0)-b.v.reduce((v,i)=>v+verts[i][0]+verts[i][1],0));
  for(const f of faces)poly(f.v.map(i=>verts[i]),f.fill,'#e4e3b0');
  const center=verts[6].map((v,i)=>(v+verts[4][i])/2),p=project(...center);eye(c,p.x,p.y,15,10,{size:3,hue:'#3f7348'});
  const hints=[['←',-1,0],['→',1,0],['↑',0,-1],['↓',0,1]];
  for(const[label,x,y]of hints){const p=project(board.w/2+x*(board.w/2+.7),board.h/2+y*(board.h/2+.7));text(c,label,p.x,p.y,15,'#bdc898');}
  text(c,m.roll?'滾動中':m.block.orientation?'橫躺 · 佔兩格':'直立 · 佔一格',140,421,11,'#e8dfad');
  text(c,`移動 ${m.moves} · C 撤回 · ${m.falls} 次跌落`,140,445,10,'#b8d399');
}
function grid(c,m,reduced){
  const g=gridLayout(m),maze=m.maze,ox=g.offsetX||0,oy=g.offsetY||0;
  const pos=(x,y)=>({x:g.x+(x-ox+.5)*g.cell,y:g.y+(y-oy+.5)*g.cell});
  c.save();c.beginPath();c.rect(g.x,g.y,g.w*g.cell,g.h*g.cell);c.clip();
  for(let yy=0;yy<g.h;yy++)for(let xx=0;xx<g.w;xx++){
    const x=xx+ox,y=yy+oy,px=g.x+xx*g.cell,py=g.y+yy*g.cell,key=keyOf(x,y);
    if(m.id==='territory'){
      box(c,px,py,g.cell-1,g.cell-1,m.owned.has(key)?'#3e7d50':'#112820',null,0);
      if(m.trail.includes(key)){c.fillStyle='#e6d887';c.fillRect(px+g.cell*.25,py+g.cell*.25,g.cell*.5,g.cell*.5);}
    }else if(maze.cells[y][x]){
      box(c,px,py,g.cell-1,g.cell-1,'#36533e','#738859',0);c.fillStyle='#8fa665';c.fillRect(px+2,py+2,g.cell-5,2);
      if(m.id==='pupil')eye(c,px+g.cell/2,py+g.cell/2,g.cell*.74,g.cell*.43,{size:2,hue:'#889c5e'});
    }else{
      c.fillStyle='#0c201c';c.fillRect(px,py,g.cell,g.cell);
      if(m.id==='pellets'&&m.pellets.has(key)){c.fillStyle=m.fruit.has(key)?'#9ae776':'#d4dfa1';const size=m.fruit.has(key)?7:3;c.fillRect(px+(g.cell-size)/2,py+(g.cell-size)/2,size,size);}
    }
  }
  if(m.id==='pupil'){const p=pos(m.maze.goal.x,m.maze.goal.y);box(c,p.x-g.cell/2+2,p.y-g.cell/2+2,g.cell-4,g.cell-4,'#020c08','#a4c07d',1);}
  if(m.id==='capture'){
    for(const v of m.tracks){const p=pos(v.x,v.y);c.fillStyle=`rgba(180,203,119,${Math.max(.12,1-(m.clock-v.at)/6000)})`;c.fillRect(p.x-5,p.y,3,2);c.fillRect(p.x+2,p.y-2,3,2);}
    const p=pos(m.worm.x,m.worm.y);drawWorm(c,p.x,p.y,g.cell*2);
  }
  for(const ghost of m.ghosts||[]){const p=pos(ghost.x,ghost.y);eye(c,p.x,p.y,g.cell*.9,g.cell*.67,{size:3,hue:ghost.stun?'#778c78':m.power?'#9fc8ed':'#d2ba6d',glow:true,clock:m.clock,reduced});}
  const p=pos(m.cx,m.cy);heart(c,p.x,p.y,Math.min(1,g.cell/17));
  c.strokeStyle=m.dash?'#ffe3a6':'#e6efb1';c.lineWidth=1;c.strokeRect(p.x-g.cell/2,p.y-g.cell/2,g.cell,g.cell);c.restore();
  if(m.id==='pupil'&&m.hold)bar(c,70,455,140,m.hold/3000,'#dae6a6');
  if(m.id==='capture'){
    // A small whole-map navigator plus a large camera-following play area.
    const cell=1.15,x=20,y=453;for(let yy=0;yy<maze.h;yy++)for(let xx=0;xx<maze.w;xx++){c.fillStyle=maze.cells[yy][xx]?'#658257':'#10251c';c.fillRect(x+xx*cell,y+yy*.55,cell,.55);}
    c.fillStyle='#ff7894';c.fillRect(x+m.cx*cell,y+m.cy*.55,3,2);c.fillStyle='#d6f896';c.fillRect(x+m.worm.x*cell,y+m.worm.y*.55,3,2);
    const d=Math.abs(m.cx-m.worm.x)+Math.abs(m.cy-m.worm.y);
    text(c,d<2?'空白鍵 捕捉！':m.dash?'衝刺中':m.dashCooldown?`衝刺 ${Math.ceil(m.dashCooldown/1000)}`:'C 衝刺可用',166,457,11,'#e5dfa7',160);
  }
}
function attacks(c,m,reduced){
  if(m.id==='pupil'){grid(c,m,reduced);return;}
  c.save();c.beginPath();c.rect(12,166,256,298);c.clip();
  if(m.id.startsWith('laser')){
    const rules=laserRules(m),endAge=rules.track+rules.warning+rules.fire;
    for(const i of LASER_EYES.keys()){
      const {x,y}=laserEyePosition(m,i),active=(m.beams||[]).some(b=>b.index===i&&b.age>=0&&b.age<endAge);
      if(m.id==='laser-up'){
        const ring=c.createRadialGradient(x,y,3,x,y,19);ring.addColorStop(0,'#9be7a326');ring.addColorStop(1,'#9be7a300');c.fillStyle=ring;c.fillRect(x-19,y-19,38,38);
        c.strokeStyle=active?'#c6db8d':'#78945b88';c.lineWidth=1;c.beginPath();c.ellipse(x,y,16,12,0,0,Math.PI*2);c.stroke();
      }
      eye(c,x,y,26,17,{size:5,hue:'#83b786',glow:active,clock:m.clock,reduced});
    }
    for(const beam of m.beams||[]){
      if(beam.age<0||beam.age>=endAge)continue;
      const end=beam.end||beam.target;
      const layers=beam.firing?[[17,'#62c38655'],[9,'#dbff9b'],[3,'#f7ffe0']]:[[2,beam.locked?'#ffb77b':'#80cca777']];
      for(const[w,col]of layers){c.strokeStyle=col;c.lineWidth=w;c.setLineDash(beam.firing?[]:beam.locked?[6,4]:[2,6]);c.beginPath();c.moveTo(beam.origin.x,beam.origin.y);c.lineTo(end.x,end.y);c.stroke();}c.setLineDash([]);
      eye(c,beam.origin.x,beam.origin.y,29,20,{size:6,glow:true,hue:beam.firing?'#e5ff8d':beam.locked?'#f9b784':'#9be7af',clock:m.clock,reduced});
      if(beam.locked&&!beam.firing){const p=beam.target;c.strokeStyle='#f2bc88';c.strokeRect(p.x-7,p.y-7,14,14);}
    }
  }
  if(m.id.startsWith('steal')){
    for(const v of m.claws||[]){
      if(v.age<0||v.age>2200)continue;
      eye(c,v.ox,v.oy,34,22,{size:7,glow:true,clock:m.clock,reduced});
      const p=Math.min(1,Math.max(0,(v.age-1200)/350)),x=v.ox+(v.tx-v.ox)*p,y=v.oy+(v.ty-v.oy)*p;
      c.setLineDash([5,6]);c.lineWidth=1;c.strokeStyle=v.deflected?'#92e6b0':'#e3ba83';c.beginPath();c.moveTo(v.ox,v.oy);c.lineTo(v.tx,v.ty);c.stroke();c.setLineDash([]);
      c.strokeStyle=v.deflected?'#72b781':'#718e53';c.lineWidth=9;c.beginPath();c.moveTo(v.ox,v.oy);c.quadraticCurveTo(v.ox+30,y,x,y);c.stroke();
      c.strokeStyle='#d7d79a';c.lineWidth=2;c.stroke();
      if(!v.deflected){c.strokeStyle='#eba589';c.lineWidth=2;c.beginPath();c.arc(v.tx,v.ty,25,0,Math.PI*2);c.stroke();path(c,[[x-9,y-5],[x-13,y+9],[x,y+4],[x+13,y+9],[x+9,y-5]],'#adc179','#e7e4ad');}
    }
    if(m.tether){
      c.strokeStyle='#f5c794';c.lineWidth=3;c.beginPath();c.moveTo(m.tether.ox,m.tether.oy);c.lineTo(m.x,m.y);c.stroke();
      text(c,`空白鍵斷繩 ${m.tether.hits}/3`,140,449,12,'#fff0b9');
    }
  }
  if(m.id.startsWith('gaze'))for(const z of m.zones){
    const radius=m.hard?40:34;c.fillStyle=z.active?'#d3de7950':'#b8d37e13';c.strokeStyle=z.active?'#d5e696':'#789364';c.lineWidth=2;
    c.beginPath();c.arc(z.x,z.y,radius,0,Math.PI*2);c.fill();c.stroke();eye(c,z.x,z.y,35,20,{size:6,hue:'#c7d989',clock:m.clock,reduced});
  }
  if(m.id==='net'){
    // The collision slab and visible woven slab share the same 58px height.
    c.save();c.beginPath();c.rect(12,m.netY-29,256,58);for(const g of m.gaps)c.rect(g-20,m.netY-29,40,58);c.clip('evenodd');
    c.fillStyle='#729e7040';c.fillRect(12,m.netY-29,256,58);c.strokeStyle='#91b776';c.lineWidth=1;
    for(let x=-60;x<330;x+=14){c.beginPath();c.moveTo(x,m.netY-29);c.lineTo(x+58,m.netY+29);c.stroke();c.beginPath();c.moveTo(x,m.netY+29);c.lineTo(x+58,m.netY-29);c.stroke();}
    c.restore();
    for(const g of m.gaps){c.fillStyle='#8cdb7a20';c.fillRect(g-20,m.netY-29,40,58);c.strokeStyle='#b4eaa0';c.strokeRect(g-20,m.netY-29,40,58);text(c,'↓',g,m.netY,16,'#bde7aa');}
    const ex=m.gaps[m.netEye]+26;
    if(!m.netHit){eye(c,ex,m.netY,24,20,{size:5,hue:'#fce59b',glow:true,clock:m.clock,reduced});c.strokeStyle='#ffe29e';c.lineWidth=2;c.beginPath();c.arc(ex,m.netY,21,0,Math.PI*2);c.stroke();if(Math.hypot(m.x-ex,m.y-m.netY)<42)text(c,'空白鍵',ex,m.netY-36,10,'#ffe9a9');}
    text(c,`金眼 ${3-m.integrity}/3`,140,453,11,'#e5dfa7');
  }
  if(m.id==='breath'){
    for(const e of m.eyes)if(!e.burned)eye(c,e.x,e.y,33,24,{size:6,glow:true,clock:m.clock,reduced});
    const f=m.flame,active=m.clock%4400<3000;
    if(active){for(let i=3;i>=0;i--){c.fillStyle=['#e4ff9d','#acd96b','#6cbd66','#3f865170'][i];c.beginPath();c.arc(f.x+Math.sin(m.clock*.02+i)*4,f.y+i*4,6+i*3,0,Math.PI*2);c.fill();}}
    text(c,`引燃 ${m.burned}/5`,140,450,11,'#dae8a4');
  }
  heart(c,m.x,m.y,1,m.invulnerable>0&&!reduced?(Math.floor(m.clock/100)%2?.3:1):1);
  c.restore();
}
function chase(c,m,reduced){
  const camera=m.x-156,origin={x:m.beam.origin.x-camera,y:m.beam.origin.y};c.save();c.beginPath();c.rect(12,166,256,298);c.clip();
  c.fillStyle='#102f29';c.fillRect(12,166,256,298);
  for(let i=0;i<6;i++){const x=((i*76-camera*.22)%430+430)%430-70;path(c,[[x,166],[x+16,166],[x+28,450],[x-8,450]],'#214c3d','#416c44');}
  if(m.beam.state!=='rest'){
    const a=m.beam.angle;c.fillStyle=m.beam.state==='warning'?'#ffba7155':'#d3f8865c';
    path(c,[[origin.x,origin.y],[origin.x+Math.cos(a-.23)*650,origin.y+Math.sin(a-.23)*650],[origin.x+Math.cos(a+.23)*650,origin.y+Math.sin(a+.23)*650]],c.fillStyle);
    // Clip shadows with the exact occlusion predicate, sampling only the local viewport.
    c.fillStyle='#072019e8';
    for(let x=12;x<268;x+=4)for(let y=166;y<453;y+=4){const target={x:x+camera+2,y:y+2};if(m.covers.some(r=>segmentHitsRect(m.beam.origin,target,r)))c.fillRect(x,y,4,4);}
  }
  eye(c,origin.x,origin.y,72,62,{size:16,hue:m.beam.state==='active'?'#eaff97':'#b7d98f',angry:true,glow:true,clock:m.clock,reduced});
  for(const r of m.covers){const x=r.x-camera;if(x<-50||x>290)continue;path(c,[[x,r.y],[x+r.w,r.y],[x+r.w+9,465],[x-10,465]],'#254d3b','#99ad70');c.fillStyle='#a7b77b';c.fillRect(x+3,r.y+8,2,170);for(let y=268;y<430;y+=25){c.fillStyle='#0d3028';c.fillRect(x+7,y,12,4);}text(c,'樹',x+r.w/2,r.y-10,10,'#c8dba1');}
  c.fillStyle='#526b40';c.fillRect(12,451,256,13);c.fillStyle='#95aa5e';c.fillRect(12,451,256,2);
  for(const r of m.obstacles){const x=r.x-camera;if(x<-40||x>290)continue;path(c,[[x,m.ground],[x-2,m.ground-r.h+12],[x+6,m.ground-r.h],[x+r.w-5,m.ground-r.h-3],[x+r.w+4,m.ground]],'#706d4d','#b4b87d');}
  for(const fruit of m.fruit)if(!fruit.taken){const x=fruit.x-camera;if(x<0||x>280)continue;box(c,x-7,fruit.y-7,14,14,'#72b570','#dce9ac',6);path(c,[[x,fruit.y-8],[x+6,fruit.y-15],[x+9,fruit.y-8]],'#a3cc77');}
  heart(c,156,m.y,1,m.invulnerable&&!reduced?.6:1);
  const label=m.beam.state==='rest'?'快跑':m.covered?'樹後 · 視線擋住了':m.beam.state==='warning'?'即將照射 · 躲樹後':'照射中 · 離開亮區';
  box(c,37,173,206,23,'#071e1cd9',null);text(c,label,140,185,11,m.covered?'#b0e6b1':'#f5d3a0');
  c.restore();
}
function scene(c,s,reduced){
  const h=c.canvas.height,kind=s.scene.kind,time=s.scene.time;
  const titles={'room-secret':'主眼的秘密',intro:'窺視之子',transform:'嫉妒化身',rage:'巨瞳睜眼', 'first-defeat':'窺視之子倒下了','dragon-defeat':'擊破嫉妒化身','worm-reveal':'原來，這才是本體',victory:s.captured?'擊破嫉妒 · 捕獲本體':'嫉妒已敗 · 本體逃入幽林',lost:'被嫉妒吞沒','round-result':s.lastResult?.success?'挑戰完成':'挑戰未完成','capture-retry':'本體溜走了'};
  c.fillStyle='#081d17ed';c.fillRect(0,0,280,h);
  const gradient=c.createRadialGradient(140,h*.42,5,140,h*.42,155);gradient.addColorStop(0,'#6b95553b');gradient.addColorStop(1,'#081d1700');c.fillStyle=gradient;c.fillRect(0,0,280,h);
  text(c,titles[kind]||'嫉妒',140,112,20,'#e2edb9');
  const endingIndex={'first-defeat':0,'dragon-defeat':1,'worm-reveal':2,victory:s.captured?3:4,lost:5,'capture-retry':4}[kind];
  const ending=images.endings;
  if(endingIndex!==undefined&&ending?.complete&&ending.naturalWidth){
    const sw=ending.naturalWidth/3,sh=ending.naturalHeight/2;
    const y=Math.round(h*.29),w=244;
    c.drawImage(ending,endingIndex%3*sw,Math.floor(endingIndex/3)*sh,sw,sh,18,y,w,w);
    const captions={'first-defeat':'眼球深處，有東西正在甦醒。','dragon-defeat':'眾目熄滅，只剩逃跑的身影。','worm-reveal':'追進幽林，抓住它。',victory:s.captured?'擊破化身，捕獲嫉妒本體。':'巨瞳散去，本體逃入幽林。',lost:'換個節奏，再試一次。','capture-retry':'本體仍藏在幽林深處。'};
    text(c,captions[kind],140,y+w+24,11,'#bdcead');return;
  }
  if(kind==='room-secret'){
    drawLoreSecret(c,time,reduced);
  }else if(['worm-reveal','victory','capture-retry'].includes(kind)){
    drawWorm(c,140,h*.48,240);text(c,kind==='victory'?'巨瞳散去，森林再次沉睡。':'追進幽林，抓住它。',140,h*.74,12,'#bdcead');
  }else if(kind==='first-defeat'){
    path(c,[[80,h*.56],[98,h*.4],[149,h*.34],[178,h*.52],[203,h*.57]],'#34503b','#9ea671');
    for(let i=0;i<6;i++){const a=i*Math.PI/3;eye(c,140+Math.cos(a)*86,h*.42+Math.sin(a)*60,38,5,{size:2,hue:'#768e62'});}
    text(c,'眼球深處，有東西正在甦醒。',140,h*.75,11,'#bbd299');
  }else if(kind==='dragon-defeat'){
    for(let i=0;i<12;i++){const a=i*2.399,r=40+i*6;path(c,[[140+Math.cos(a)*r,h*.43+Math.sin(a)*r],[145+Math.cos(a)*r,h*.43+12+Math.sin(a)*r],[130+Math.cos(a)*r,h*.43+15+Math.sin(a)*r]],'#466746','#96af70');}
    eye(c,140,h*.44,138,8,{size:3,hue:'#5e754d'});text(c,'眾目熄滅，只剩一個逃跑的身影。',140,h*.75,10,'#bdcead');
  }else if(kind==='round-result'){
    eye(c,140,h*.42,155,83,{size:27,glow:true,clock:time,reduced});text(c,NAMES[s.lastResult?.id]||'',140,h*.66,14,'#c4dbaa');
  }else if(kind==='lost'){
    eye(c,140,h*.43,165,92,{size:31,hue:'#8fab68',angry:true});heart(c,140,h*.64,2,.45);text(c,'換個節奏，再試一次。',140,h*.78,12,'#c2d2a9');
  }else if(kind==='intro'){
    path(c,[[91,h*.64],[97,h*.39],[114,h*.33],[165,h*.33],[183,h*.41],[189,h*.64]],'#2d4e3a','#a6bb82');
    eye(c,140,h*.37,103,50,{size:17,glow:true,clock:time,reduced});
    for(let i=0;i<6;i++){const a=i*Math.PI/3;eye(c,140+Math.cos(a)*94,h*.46+Math.sin(a)*94,34,23,{size:5,hue:'#afdc93',glow:true,clock:time,reduced});}
    text(c,'那些眼睛，總在看著別人。',140,h*.81,12,'#c3d7a4');
  }else{
    const art=images.card;
    if(kind==='transform'&&art?.complete&&art.naturalWidth){const w=205,hh=260;c.save();c.beginPath();c.roundRect(38,163,w,hh,8);c.clip();c.drawImage(art,38,163,w,hh);c.restore();}
    else eye(c,140,h*.44,180,110,{size:39,hue:'#c9ee92',glow:true,angry:true,clock:time,reduced});
    text(c,kind==='rage'?'逃離它的視線。':'嫉妒，長出了新的眼睛。',140,h*.81,12,'#d3dda4');
  }
}
export function drawEnvy(c,s,{reduced=false}={}){
  const h=canvasHeight(s);c.clearRect(0,0,280,h);
  if(s.scene){scene(c,s,reduced);return;}
  if(s.mode==='bridge'){
    text(c,`嫉妒 · ${bossName(s)}`,140,15,16,'#e5ddb0');
    text(c,s.form===2&&s.chaseEntered&&!s.chaseCleared?'🔒 BOSS':'BOSS',140,117,12,'#d3dfa0');
    box(c,24,128,232,6,'#24352a',null,3);box(c,24,128,Math.max(.01,232*s.bossHp/s.bossMaxHp),6,'#bbd677',null,3);
    text(c,s.finalBridge?'最後反攻 · 消行擊破巨瞳':`架塊 · ${Math.ceil(Math.max(0,s.round.duration-s.round.clock)/1000)}s`,140,141,12,'#cadbb3');
  }else{
    backdrop(c,h);
    if(s.mode!=='capture')bar(c,44,97,192,s.bossHp/s.bossMaxHp,'#bbd677');
    text(c,NAMES[s.mode],140,117,15,'#f0efd0');
    text(c,stateLine(s),140,136,10,'#b2caa0');
  }
  const m=s.round;
  if(s.mode==='bridge')bridge(c,s,reduced);
  else if(['window','eye-room'].includes(s.mode))drawLoreGame(c,m,reduced);
  else if(s.mode==='difference')difference(c,m,reduced);
  else if(s.mode==='rolling')rolling(c,m);
  else if(['tarot','pack'].includes(s.mode)){
    if(m.revealed&&!reduced){
      const progress=Math.max(0,1-m.revealTime/1100);c.save();c.beginPath();c.rect(12,152,256,262);c.clip();
      for(let i=0;i<22;i++){const a=i*2.399,r=96+progress*24,x=140+Math.cos(a)*r,y=304+Math.sin(a)*r;const v=2+i%2;c.fillStyle=i%3?'#bbdfa34d':'#efd89b80';c.fillRect(x-v,y,v*2+1,1);c.fillRect(x,y-v,1,v*2+1);}
      c.restore();
    }
    drawCard(c,{tarotBack:s.mode==='tarot',revealProgress:reduced?1:m.revealed?Math.max(0,1-m.revealTime/(s.mode==='pack'&&['SR','SAR'].includes(m.revealed.rarity)?1100:500)):1,face:!!m.revealed,rarity:m.revealed?.rarity||'U',tarot:s.mode==='tarot'?m.revealed:null,clock:m.clock,reduced});
    // Persistent effects sit inside the enlarged card caption, above the native HP.
    const lines=describeCard(m.revealed,s.mode,{difficulty:s.difficulty});
    if(lines.length&&!m.revealTime){
      lines.forEach((line,i)=>text(c,line,140,458+i*15,11,i?'#f0ded9':'#fff1dd',216));
    }
  }else if(['territory','pellets','capture'].includes(s.mode))grid(c,m,reduced);
  else if(ATTACKS.includes(s.mode))attacks(c,m,reduced);
  else if(s.mode==='chase')chase(c,m,reduced);
  if(s.mode!=='bridge'){
    const cards=['tarot','pack'].includes(s.mode);
    text(c,cards&&m.revealed?(m.revealTime?'揭示中':'空白鍵 · 確認收牌'):s.mode==='window'&&m.reveal?'看見幸福 · 空白鍵下一窗':HINTS[s.mode],140,cards?509:482,10,'#d9e3b5');
    if(!cards){
      const lore=['window','eye-room'].includes(s.mode);
      text(c,m.feedbackTime>0?m.feedback:'',140,lore?506:509,lore?10:11,'#f1e8a6');
    }
  }
  playerHud(c,s,h);
}
