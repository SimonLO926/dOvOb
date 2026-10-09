import { LIVES, WINDOW, ROOM_NAMES, ROOM_TARGETS } from './lore-games.mjs';
import { text, box, eye, images } from './art.mjs?v=1.2.33';
function atlas(c,img,index,cols,rows,x,y,w,h){
  if(img?.complete&&img.naturalWidth){
    const pw=img.naturalWidth/cols,ph=img.naturalHeight/rows,sw=Math.min(pw,ph*w/h),sh=Math.min(ph,pw*h/w);
    c.drawImage(img,index%cols*pw+(pw-sw)/2,Math.floor(index/cols)*ph+(ph-sh)/2,sw,sh,x,y,w,h);
  }
  else box(c,x,y,w,h,'#493448');
}
function token(c,i,x,y,w=28){const a=LIVES[i];eye(c,x,y,w,w*.56,{size:4,hue:a.color});text(c,a.symbol,x,y,9,'#241624');}
function selected(c,x,y,w,h){c.strokeStyle='#fff3b5';c.lineWidth=2;c.strokeRect(x-3,y-3,w+6,h+6);c.strokeRect(x+2,y+2,w-4,h-4);}
const curtains=new WeakMap();
function curtain(c,m){
  const r=WINDOW;let layer=curtains.get(m);
  if(!layer||layer.stage!==m.stage){
    const canvas=typeof OffscreenCanvas==='function'?new OffscreenCanvas(r.w,r.h):c.canvas.ownerDocument.createElement('canvas');canvas.width=r.w;canvas.height=r.h;
    layer={canvas,context:canvas.getContext('2d'),stage:m.stage,seen:new Uint8Array(m.mask.length),cleared:-1};curtains.set(m,layer);
    const ctx=layer.context;ctx.fillStyle='#393550';ctx.fillRect(0,0,r.w,r.h);
    // Cloth folds are decoration inside the window, never another board grid.
    for(let x=0;x<r.w;x+=24){
      ctx.fillStyle='#514560';ctx.fillRect(x,0,12,r.h);ctx.fillStyle='#665575';ctx.fillRect(x+2,0,3,r.h);
      ctx.fillStyle='#241f3b';ctx.fillRect(x+17,0,7,r.h);
      ctx.fillStyle='#b9a27b';ctx.fillRect(x+3,5,9,4);ctx.fillRect(x+5,3,5,8);
    }
    ctx.fillStyle='#e0b98a66';ctx.fillRect(0,r.h-13,r.w,2);ctx.fillRect(0,r.h-9,r.w,2);
  }
  if(layer.cleared!==m.cleared){
    for(let i=0;i<m.mask.length;i++)if(m.mask[i]&&!layer.seen[i]){
      layer.seen[i]=1;layer.context.clearRect(i%r.cols*r.w/r.cols,Math.floor(i/r.cols)*r.h/r.rows,r.w/r.cols+.6,r.h/r.rows+.6);
    }
    layer.cleared=m.cleared;
  }
  c.drawImage(layer.canvas,r.x,r.y,r.w,r.h);
}
function windowGame(c,m){
  const r=WINDOW,i=Math.min(5,m.stage),life=LIVES[i];
  box(c,r.x-7,r.y-7,r.w+14,r.h+14,'#806450','#dbbc89',3);
  atlas(c,images.windows,i,3,2,r.x,r.y,r.w,r.h);
  if(!m.reveal)curtain(c,m);
  if(!m.reveal){c.save();c.beginPath();c.rect(r.x,r.y,r.w,r.h);c.clip();
    c.strokeStyle='#fff4d3';c.lineWidth=2;c.beginPath();c.arc(m.brush.x,m.brush.y,r.radius,0,Math.PI*2);c.stroke();c.restore();}
  for(let n=0;n<6;n++){token(c,n,45+n*38,441,25);if(n<i)text(c,'✓',45+n*38,461,12,'#eeedc6');}
  text(c,life.name,140,162,12,life.color);
}
function furniture(c,m,r){
  const taken=(r.id==='pillow'&&m.eyes.has(0))||(r.id==='curtain'&&m.eyes.has(4))||m.opened.has(r.id)||m.keyParts.has(r.id);
  box(c,r.x,r.y,r.w,r.h,taken?'#302944cc':'#704d41dd','#c9a677',5);
  if(r.id==='pillow'){box(c,r.x+9,r.y+11,r.w-18,30,'#ccc2bd','#ede6d0',8);}
  if(r.id==='drawer'){c.fillStyle='#dfbc79';c.fillRect(r.x+30,r.y+24,34,4);}
  if(r.id==='painting'){text(c,'★',r.x+r.w/2,r.y+30,30,'#e3c66b');text(c,'↓',r.x+r.w/2,r.y+54,16,'#f2b9b1');}
  if(r.id==='curtain')for(let k=0;k<5;k++)box(c,r.x+4+k*17,r.y+5,13,53,'#8f648a');
  if(r.id==='clue')text(c,'? ? ?',140,r.y+25,24,'#e9ddb6');
  text(c,taken?'已找到':r.label,r.x+r.w/2,r.y+r.h-14,11,'#fff0d5',r.w-8);
  if(r.id==='mask'){
    box(c,r.x+19,r.y+8,r.w-38,r.h-40,'#b8a68a','#e6d5ae',30);
    for(let i=0;i<6;i++)token(c,i,r.x+48+i%2*84,r.y+32+Math.floor(i/2)*43,34);
  }
}
function roomGame(c,m){
  atlas(c,images.room,m.room,2,2,18,168,244,246);
  text(c,ROOM_NAMES[m.room],140,158,11,'#ebd5b7');
  for(const[i,r]of ROOM_TARGETS[m.room].entries()){furniture(c,m,r);if(i===m.focus&&!m.modal)selected(c,r.x,r.y,r.w,r.h);}
  // A subtle row of the collected eyes, not additional clickable scenery.
  for(let i=0;i<6;i++){c.save();c.globalAlpha=m.eyes.has(i)?1:.25;token(c,i,45+i*38,187,23);c.restore();}
  box(c,23,422,60,40,'#3b3049','#ab9b8e');text(c,'◀ 轉房',53,442,10);
  box(c,197,422,60,40,'#3b3049','#ab9b8e');text(c,'轉房 ▶',227,442,10);
  text(c,`鑰匙 ${m.keyParts.size}/2`,140,439,10,'#ead2a6');
  if(!m.modal)return;
  box(c,18,166,244,298,'#231f37f5','#d4b483',7);
  box(c,220,168,40,38,'#4a334d','#c4a479');text(c,'×',240,187,22);
  if(m.modal==='clue'){
    text(c,'抽屜便條',125,195,15,'#efd6a9');
    text(c,m.code.join(' · '),140,249,30,'#f5db9a');
    text(c,'面具眼洞 · 由左至右',140,297,12);
    for(let i=0;i<6;i++){token(c,m.order[i],69+i%3*71,331+Math.floor(i/3)*59,38);text(c,String(i+1),69+i%3*71,353+Math.floor(i/3)*59,10);}
    text(c,'點一下返回',140,448,11);
  }else if(m.modal==='code'){
    text(c,'密碼盒',126,202,16,'#efd6a9');text(c,'上半加 · 下半減',140,229,11);
    for(let i=0;i<3;i++){box(c,31+i*74,248,70,81,'#443954','#c6a478');text(c,String(m.digits[i]),66+i*74,286,31);if(i===m.focus)selected(c,31+i*74,248,70,81);}
    box(c,55,358,170,55,'#604a61','#d7bc91');text(c,'空白鍵 · 開盒',140,386,13);
  }else if(m.modal==='painting'){
    text(c,'星星要朝上',124,209,14,'#efd6a9');
    c.save();c.translate(140,318);c.rotate(Math.PI+m.turns*Math.PI/2);box(c,-64,-66,128,132,'#45486b','#d2b98b');text(c,'★',0,-21,55,'#f4dc8d');text(c,'↑',0,43,25,'#e7dfcb');c.restore();
    text(c,'點畫／空白鍵 · 轉動',140,439,12);
  }else if(m.modal==='mask'){
    text(c,'眼洞對上偷來的人生',124,193,12,'#efd6a9',182);
    for(let i=0;i<6;i++){const x=37+i%3*70,y=217+Math.floor(i/3)*58;box(c,x,y,66,54,'#473e53','#b7a087');if(m.maskSlots[i]>=0)token(c,m.maskSlots[i],x+33,y+24,38);else text(c,LIVES[m.order[i]].symbol,x+33,y+25,22,LIVES[m.order[i]].color);if(i===m.slot)selected(c,x,y,66,54);}
    for(let i=0;i<6;i++){const x=31+i*220/6;c.save();c.globalAlpha=m.eyes.has(i)||i===5?1:.2;token(c,i,x+17,370,27);c.restore();if(i===m.choice)selected(c,x,348,33,45);}
    text(c,LIVES[m.choice].name,140,401,11,LIVES[m.choice].color);
    box(c,52,418,176,42,'#604a61','#d7bc91');text(c,'空白鍵 · 放入眼球',140,439,12);
  }
}
export function drawLoreGame(c,m){if(m.id==='window')windowGame(c,m);else roomGame(c,m);}
export function drawLoreSecret(c,time,reduced){
  atlas(c,images.room,3,2,2,24,170,232,236);
  box(c,65,190,150,197,'#1b172adc','#c8ae87',45);
  for(let i=0;i<6;i++){const a=i*Math.PI/3;token(c,i,140+Math.cos(a)*84,290+Math.sin(a)*91,33);}
  eye(c,140,284,101,61,{size:19,hue:'#e4d2a2',clock:time,reduced});
  text(c,'六段人生，沒有一段屬於我',140,437,13,'#efd6a9');
  text(c,'主眼的秘密 · 劇情試作',140,462,10,'#a9bca0');
}
