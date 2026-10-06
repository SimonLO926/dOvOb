import { drawPrideBackdrop } from './pride-theme.mjs';
// Canvas-only Pride ornamentation. Visual state never participates in collision rules.
export function path(c, points, fill, stroke) {
  c.beginPath(); points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y)); c.closePath();
  if(fill){c.fillStyle=fill;c.fill();} if(stroke){c.strokeStyle=stroke;c.stroke();}
}
export function sparkle(c,x,y,size=3,color='#fff1b0') {
  c.fillStyle=color;c.fillRect(x-size,y, size*2+1,1);c.fillRect(x,y-size,1,size*2+1);
}
export function gem(c,x,y,w,h,color='#98e8ff') {
  path(c,[[x-w/2,y],[x-w/2+2,y-h/2],[x+w/2-2,y-h/2],[x+w/2,y],[x+w/2-2,y+h/2],[x-w/2+2,y+h/2]],color,'#d9b45e');
  path(c,[[x-w/2+2,y-h/2],[x,y],[x+w/2-2,y-h/2]],'#ffffff99');
  path(c,[[x,y],[x+w/2,y],[x+w/2-2,y+h/2]],'#28305277');
}
export function prideEmblem(c, symbol, size = 12) {
  c.save(); c.scale(size / 12, size / 12);
  const marks=['♛','◈','✦','♜','☾','❖','⚜','✧'], i=marks.indexOf(symbol);
  if(i===0)path(c,[[-10,6],[-11,-7],[-5,-2],[0,-11],[5,-2],[11,-7],[10,6]],'#d6b36e','#fff0c6');
  else if(i===1||i===5){gem(c,0,0,i===1?9:6,12,'#d4a9ef');if(i===5){gem(c,-8,0,3,6,'#e5c886');gem(c,8,0,3,6,'#e5c886');}}
  else if(i===2||i===7){path(c,[[0,-12],[3,-3],[12,0],[3,3],[0,12],[-3,3],[-12,0],[-3,-3]],i===2?'#e5c886':'#b9a1ee','#fff0c6');if(i===7)gem(c,0,0,4,4,'#352143');}
  else if(i===3){c.fillStyle='#d6b36e';c.fillRect(-8,-9,16,5);c.fillRect(-5,-4,10,12);c.fillRect(-9,8,18,3);c.fillStyle='#261734';c.fillRect(-2,0,4,6);}
  else if(i===4){c.fillStyle='#d4a9ef';c.beginPath();c.arc(0,0,11,0,Math.PI*2);c.fill();c.fillStyle='#372247';c.beginPath();c.arc(5,-4,9,0,Math.PI*2);c.fill();}
  else if(i===6){path(c,[[0,-12],[5,-5],[2,2],[10,-3],[8,5],[2,6],[2,11],[-2,11],[-2,6],[-8,5],[-10,-3],[-2,2],[-5,-5]],'#e5c886','#fff0c6');}
  c.restore(); return i>=0;
}
export function royalCrown(c,x,y,width=10,variant=0,scale=1) {
  c.save();c.translate(x,y);c.scale(scale,scale);c.lineWidth=1;
  const rise=[-17,-20,-15,-22][variant%4] - Math.floor(variant/4);
  const sideGemY=[-6,-3,0][Math.floor(variant/4)%3];
  path(c,[[-24,15],[-28,rise],[-15,-6],[0,-25],[15,-6],[28,rise],[24,15]],'#ae762e','#ffe898');
  path(c,[[-22,10],[-24,rise+6],[-14,-2],[0,-19],[14,-2],[24,rise+6],[22,10]],'#ffd700');
  path(c,[[-19,7],[-14,-2],[0,-15],[14,-2],[19,7]],'#6b4d9e');
  for(const px of [-26,0,26]){gem(c,px,px===0?-25:rise,5,6,px===0?'#d7b4ff':'#fff1b0');}
  for(let i=-18;i<=18;i+=6){c.strokeStyle='#e9b84f';c.beginPath();c.arc(i,8,3,Math.PI,Math.PI*2);c.stroke();}
  c.fillStyle='#8d5429';c.fillRect(-24,10,48,9);c.fillStyle='#edbd59';c.fillRect(-24,10,48,2);c.fillStyle='#ffeab1';c.fillRect(-24,17,48,2);
  for(const px of [-16,16])gem(c,px,sideGemY,3+variant%3,5,variant%2?'#a6ddeb':'#d7b4ff');
  for(const px of [-17,17])gem(c,px,14,4,5,variant%2?'#cab2ff':'#e4a5d6');
  gem(c,0,12,width,10);c.fillStyle='#fff0ad';for(let i=-21;i<23;i+=7)c.fillRect(i,20,2,2);
  c.restore();
}
export function palace(c,x,y,w,h,t=0,{theme}={}) {
  drawPrideBackdrop(c,{x,y,w,h,time:t,variant:theme||'palace',bands:false});
}
export function mirror(c,x,y,marked=false,hp=3,broken=false,t=0,index=0,{royal=false,showHealth=true,shootHint=true}={}) {
  c.save();c.translate(x,y);c.lineWidth=2;const color=royal?'#ffe095':['#ff697a','#63bfff','#c089ff'][index%3];c.shadowColor=color;c.shadowBlur=12;
  if(broken){for(let i=0;i<7;i++)gem(c,Math.sin(i*2.4)*18,Math.cos(i*2.4)*22,5,9,'#9eb2d0');c.restore();return;}
  const frames=[[[-18,-19],[-10,-30],[0,-25],[10,-30],[18,-19],[15,19],[0,31],[-15,19]],[[-18,-25],[0,-30],[18,-25],[18,15],[12,26],[0,32],[-12,26],[-18,15]],[[0,-32],[20,-18],[15,22],[0,31],[-15,22],[-20,-18]]];
  path(c,frames[index%3],'#523550',marked?'#ffd700':color);
  path(c,[[-11,-19],[-7,-23],[7,-23],[11,-19],[11,19],[7,23],[-7,23],[-11,19]],royal?'#5b4675':['#71344b','#315d7b','#634284'][index%3],'#e1eaff');
  path(c,[[-10,-18],[-4,-22],[8,-22],[-10,8]],'#e3f5ff88');path(c,[[11,-6],[-8,22],[-2,22],[11,4]],'#e3f5ff55');
  for(const sy of [-1,1]){for(const sx of [-1,1]){c.strokeStyle=marked?'#ffd700':'#bac6dc';c.beginPath();c.arc(sx*12,sy*22,5,0,Math.PI*1.5);c.stroke();}gem(c,0,sy*28,6,8,marked?'#d8b0ff':'#d5f0ff');}
  c.shadowBlur=0;if(showHealth){c.fillStyle='#0e182a';c.fillRect(-20,-44,40,5);c.fillStyle=color;c.fillRect(-20,-44,40*hp/3,5);c.textAlign='center';c.font='10px sans-serif';c.fillStyle='#fff';c.fillText(`${royal?'王鏡':['攻','守','幻'][index%3]} ${hp}/3`,0,-49);}for(let i=0;i<3-hp;i++)path(c,[[0,0],[i*7-12,-8],[i*6-9,19]],null,'#fff');
  if(marked){c.strokeStyle='#fff2a0';c.lineWidth=3;c.beginPath();c.arc(0,0,21+Math.sin(t*.01)*2,0,Math.PI*2);c.stroke();path(c,[[-7,-36],[7,-36],[0,-26]],'#fff2a0');if(shootHint){c.fillStyle='#fff2a0';c.font='10px sans-serif';c.fillText('空白鍵 射呢面',0,47);}}c.restore();
}
// Player heart, pixel-identical to Greed's pixelCore() in crazy-reaction-view.mjs:
// same 6-row pixel map, same 2px cells, same centering, same default color.
const HEART_ROWS = ['.XX.XX.','XXXXXXX','XXXXXXX','.XXXXX.','..XXX..','...X...'];
export function avatar(c,x,y,color='#ff5178',alpha=1) {
  c.save();c.globalAlpha=alpha;c.fillStyle=color;
  HEART_ROWS.forEach((row,j)=>[...row].forEach((v,i)=>{if(v==='X')c.fillRect(Math.round(x-7+i*2),Math.round(y-6+j*2),2,2);}));
  c.restore();
}
export function burst(c,x,y,t,color='#ffd700',count=18) {
  c.save();for(let i=0;i<count;i++){const a=i*2.399,r=5+(t%500)/500*(12+i%5*5);c.globalAlpha=1-(t%500)/500;sparkle(c,x+Math.cos(a)*r,y+Math.sin(a)*r,1+i%2,color);}c.restore();
}
