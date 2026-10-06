// Presentation only: geometry here never changes combat collision or timing.
import { drawPrideFocus } from './pride-theme.mjs';
import { path } from './pride-visuals.mjs';
export function drawEncounterMirror(c,v,i,p,selected,clock,reduced=false,statusOnly=false) {
  c.save(); c.translate(v.x,v.y);
  const frames=[ [[-28,-25],[-18,-38],[18,-38],[28,-25],[24,30],[0,39],[-24,30]], [[-27,-32],[0,-39],[27,-32],[27,22],[17,36],[-17,36],[-27,22]], [[0,-40],[28,-24],[24,26],[0,39],[-24,26],[-28,-24]] ];
  c.shadowColor=v.color;c.shadowBlur=selected?18:9;c.lineWidth=selected?3:2;
  path(c,frames[i],'#33203f','#d6b36e');c.shadowBlur=0;
  for(const [x,y] of [[-22,-23],[22,-23],[-19,26],[19,26]])path(c,[[x,y-3],[x+3,y],[x,y+3],[x-3,y]],'#e5c886',v.color);
  const glass=c.createLinearGradient(-20,-30,20,30);glass.addColorStop(0,v.color);glass.addColorStop(.45,'#273550');glass.addColorStop(1,'#111827');
  path(c,[[-20,-25],[0,-32],[20,-25],[18,25],[0,31],[-18,25]],glass,'#ffffff99');
  path(c,[[-17,-23],[-3,-28],[-17,15]],'#ffffff44');
  for(const y of [-36,35])path(c,[[0,y-4],[4,y],[0,y+4],[-4,y]],v.color,'#fff');
  const lost=1-v.hp/120;c.strokeStyle='#f3f7ff';c.lineWidth=1.5;
  for(let n=0;n<Math.ceil(lost*5);n++){const a=n*2.4;c.beginPath();c.moveTo(0,0);c.lineTo(Math.cos(a)*10,Math.sin(a)*12);c.lineTo(Math.cos(a+.3)*20,Math.sin(a+.3)*27);c.stroke();}
  c.fillStyle=v.color;c.font='bold 11px sans-serif';c.fillText(`${v.name}之鏡`,0,-52);
  if(selected)drawPrideFocus(c,{x:-31,y:-42,w:62,h:85},clock);
  if(v.broken){c.fillStyle='#fff1b0';c.fillText('已破鏡',0,5);c.restore();return;}
  if(statusOnly){c.fillStyle='#e3ebff';c.font='10px sans-serif';c.fillText('反攻削鏡',0,53);c.restore();return;}
  const px=p.x-v.x,py=p.y-v.y,pulse=reduced?0:Math.sin(clock*.012);
  c.shadowColor='#ffe783';c.shadowBlur=p.open?18:0;c.strokeStyle=p.open?'#fff5a0':v.color;c.lineWidth=3;
  c.beginPath();c.arc(px,py,p.open?22+pulse*2:14,0,Math.PI*2);c.stroke();c.fillStyle=p.open?'#fff6bc':'#40506b';c.beginPath();c.arc(px,py,p.open?12:6,0,Math.PI*2);c.fill();c.shadowBlur=0;
  if(p.open){path(c,[[px-7,-34-pulse*2],[px+7,-34-pulse*2],[px,-24-pulse*2]],'#fff1a0');}
  c.fillStyle=p.open?'#fff1a0':'#d1d9ed';c.font='10px sans-serif';c.fillText(p.open?(i===2&&v.illusions?`幻影 ×${v.illusions}`:'點光圈反攻'):(p.shield?'護盾中':'蓄力中'),0,53);
  c.restore();
}
export function playMirrorFeedback(s,audio) {
  const events=s.events?.splice(0)||[];
  if(!audio)return;
  for(const e of events){if(!['prideMirrorAppearSound','prideMirrorHitSound','prideMirrorBreakSound'].includes(e.key))continue;
    const osc=audio.createOscillator(),gain=audio.createGain(),now=audio.currentTime;
    osc.type='triangle';osc.frequency.setValueAtTime(e.key==='prideMirrorAppearSound'?880:e.key==='prideMirrorBreakSound'?700:460,now);osc.frequency.exponentialRampToValueAtTime(e.key==='prideMirrorAppearSound'?1320:90,now+.18);
    gain.gain.setValueAtTime(.09,now);gain.gain.exponentialRampToValueAtTime(.001,now+.2);osc.connect(gain);gain.connect(audio.destination);osc.start(now);osc.stop(now+.21);
  }
}
