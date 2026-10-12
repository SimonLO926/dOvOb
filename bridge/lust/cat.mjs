// Original photographic cutout and paw poses adapted from crazy-view.mjs.
// Keep this isolated so Lust does not import the other bosses' renderers/assets.
let lastState, damage=0, taken=0, score=0, poseUntil=0, pose='idle';
export function drawPhotoCat(canvas,photo,s,{reduced=false}={}) {
 if(!photo.complete||!photo.naturalWidth)return;
 if(lastState!==s){lastState=s;damage=s.stats.damage;taken=s.stats.damageTaken;score=s.round.score;poseUntil=0;}
 const time=s.elapsed;
 if(s.stats.damageTaken>taken){pose='hurt';poseUntil=time+650;}
 else if(s.stats.damage>damage){pose='attack';poseUntil=time+700;}
 else if(s.round.score>score){pose='victory';poseUntil=time+650;}
 damage=s.stats.damage;taken=s.stats.damageTaken;score=s.round.score;
 const action=s.catTime>0?'victory':time<poseUntil?pose:time%9000>7600?'attack':'idle';
 const r=canvas.getBoundingClientRect(),dpr=Math.min(2,devicePixelRatio||1);
 if(canvas.width!==Math.round(r.width*dpr)||canvas.height!==Math.round(r.height*dpr)){canvas.width=Math.round(r.width*dpr);canvas.height=Math.round(r.height*dpr);}
 const c=canvas.getContext('2d'),w=r.width-6,h=w*photo.naturalHeight/photo.naturalWidth;
 c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,r.width,r.height);
 const breath=reduced?0:Math.sin(time/420);
 c.save();c.translate(r.width/2,12+h/2-breath*2);c.imageSmoothingEnabled=true;
 if(!reduced){
  if(action==='hurt'){c.translate(0,h*.12);c.scale(1.06,.80);c.rotate(-.06);}
  else if(action==='attack')c.rotate(Math.sin(time/85)*.08);
  else if(action==='victory'){c.translate(0,-h*.06);c.scale(.96,1.06);}
  else c.scale(1+breath*.012,1+breath*.025);
 }
 if(!reduced&&(action==='attack'||action==='victory')){
  const paws=[{x:w*.15,y:h*.29,w:w*.19,h:h*.19},{x:w*.35,y:h*.21,w:w*.12,h:h*.26}];
  c.save();c.beginPath();c.rect(-w/2,-h/2,w,h);for(const paw of paws)c.rect(paw.x,paw.y,paw.w,paw.h);c.clip('evenodd');c.drawImage(photo,-w/2,-h/2,w,h);c.restore();
  for(const [i,paw]of paws.entries()){
   c.save();c.translate(paw.x+paw.w*.5,paw.y);c.rotate(action==='victory'?-2.5-i*.2:Math.sin(time/85+i*.4)*.65-.65);c.translate(-paw.x-paw.w*.5,-paw.y);
   c.beginPath();c.rect(paw.x,paw.y,paw.w,paw.h);c.clip();c.drawImage(photo,-w/2,-h/2,w,h);c.restore();
  }
 }else c.drawImage(photo,-w/2,-h/2,w,h);
 c.restore();
}
