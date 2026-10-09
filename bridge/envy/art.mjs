import { avatar } from '../pride-visuals.mjs';
import { appearance } from './engine.mjs';
import { CARD_LAYOUT } from './geometry.mjs';
import { t } from './i18n.mjs';

export const ENDING_ART_URLS = Object.freeze(['first-defeat','dragon-defeat','worm-reveal','victory-captured','victory-escaped','lost'].map(kind=>`./assets/envy-${kind}-r16.webp`));
export const ART_URLS = Object.freeze({ windows:'./assets/envy-windows-r7.webp', room:'./assets/envy-room-r7.webp', background:'./assets/envy-swamp.webp', card:'./assets/envy-sar.webp', worm:'./assets/envy-worm.webp', tarot:'./assets/envy-tarot-r6.webp', secret:'./assets/envy-secret-r6.webp', cat:'./assets/mischief-cat.webp' });
export const images = {};
export function loadArt(){
  if(typeof Image==='undefined')return Promise.resolve();
  const entries=[...Object.entries(ART_URLS),...ENDING_ART_URLS.map((url,index)=>[`ending${index}`,url])];
  return Promise.all(entries.map(([key,url])=>new Promise(resolve=>{
    const image=new Image();images[key]=image;image.onload=()=>resolve(true);image.onerror=()=>resolve(false);image.src=url;
  })));
}
export function text(c,label,x,y,size=12,color='#e5f4dd',width=260){
  c.fillStyle=color;c.font=`bold ${size}px "Pixel Latin", "Pixel Hant", sans-serif`;c.textAlign='center';c.textBaseline='middle';c.fillText(t(label),x,y,width);
}
export function path(c,points,fill,stroke){
  c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();
  if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.stroke();}
}
export function box(c,x,y,w,h,fill,stroke='#7eac73',radius=5){
  c.beginPath();c.roundRect(x,y,w,h,radius);c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1;c.stroke();}
}
export function eye(c,x,y,w=30,h=17,{pupil=0,hue='#98e289',size=5,glow=false,angry=false,clock=0,reduced=false}={}){
  c.save();c.translate(x,y);
  if(glow){c.shadowColor=hue;c.shadowBlur=reduced?5:9+Math.sin(clock*.003)*2;}
  path(c,[[-w/2,0],[-w*.3,-h*.48],[0,-h*.6],[w*.32,-h*.4],[w/2,0],[w*.3,h*.4],[0,h*.5],[-w*.3,h*.35]],'#dbe9be','#31453b');
  c.shadowBlur=0;c.fillStyle=hue;c.beginPath();c.ellipse(pupil,0,size*1.45,size*1.5,0,0,Math.PI*2);c.fill();
  c.fillStyle='#091611';c.beginPath();c.ellipse(pupil,0,Math.max(1.2,size*.35),size*1.2,0,0,Math.PI*2);c.fill();
  c.fillStyle='#f2ffed';c.fillRect(pupil-size*.4,-size*.6,Math.max(1,size*.4),Math.max(1,size*.35));
  if(angry){path(c,[[-w*.52,-h*.45],[w*.5,-h*.2],[w*.22,-h*.6],[-w*.3,-h*.8]],'#294c32','#9ab478');}
  c.restore();
}
export function drawWorm(c,x,y,w=40,{alpha=1}={}){
  c.save();c.globalAlpha=alpha;
  const image=images.worm;
  if(image?.complete&&image.naturalWidth){const h=w*image.naturalHeight/image.naturalWidth;c.drawImage(image,x-w/2,y-h/2,w,h);}
  else{
    c.translate(x,y);c.scale(w/55,w/55);
    c.strokeStyle='#4c7c49';c.lineWidth=7;c.beginPath();c.moveTo(18,3);c.bezierCurveTo(31,-4,26,-19,19,-14);c.stroke();
    path(c,[[17,-17],[24,-25],[27,-15],[23,-11]],'#76a451','#2e573c');
    for(let i=3;i>=0;i--){c.fillStyle=['#7da460','#699953','#588948','#45753e'][i];c.beginPath();c.ellipse(-11+i*9,4-i,12,10,0,0,Math.PI*2);c.fill();}
    c.fillStyle='#264e37';for(const px of[-12,0,12])c.fillRect(px,9,5,6);
    c.fillStyle='#e4e7cb';c.beginPath();c.arc(-13,0,11,0,Math.PI*2);c.fill();c.fillStyle='#273b34';c.beginPath();c.arc(-15,2,4,0,Math.PI*2);c.fill();
    c.strokeStyle='#354f33';c.lineWidth=2;c.beginPath();c.moveTo(-24,-6);c.lineTo(-5,-10);c.stroke();
    c.fillStyle='#a0c06f';for(const[px,py]of[[5,-2],[11,3],[19,0]])c.fillRect(px,py,2,2);
  }
  c.restore();
}
function tendril(c,x,y,height,flip,clock,reduced){
  c.save();c.translate(x,y);c.scale(flip,1);const sway=reduced?0:Math.sin(clock*.0015+y)*3;
  c.strokeStyle='#112f27';c.lineWidth=18;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-30,55,23+sway,height*.65,5,height);c.stroke();
  c.strokeStyle='#537650';c.lineWidth=11;c.stroke();c.strokeStyle='#92ad68';c.lineWidth=2;c.stroke();
  for(let i=20;i<height;i+=30){path(c,[[-9,i],[-23,i-7],[-14,i+10]],'#668447','#a7b974');}
  c.restore();
}
// Integer facets, stepped silhouettes and one-pixel highlights match the
// existing drawFineDealer / drawPrideBossHead battle art, rather than portraits.
function pixelEye(c,x,y,w,h,{rage=false}={}){
  c.save();c.translate(x,y);
  const a=Math.round(w/2),b=Math.round(h/2),step=Math.max(3,Math.round(h/5));
  path(c,[[-a,-step],[-a+step,-step],[-a+step,-b+step],[-a+step*3,-b+step],[-a+step*3,-b],[a-step*3,-b],[a-step*3,-b+step],[a-step,-b+step],[a-step,-step],[a,-step],[a,step],[a-step,step],[a-step,b-step],[a-step*3,b-step],[a-step*3,b],[-a+step*3,b],[-a+step*3,b-step],[-a+step,b-step],[-a+step,step],[-a,step]],'#cbd8ad','#112e25');
  c.fillStyle='#f1edc1';c.fillRect(-a+step*3,-b+1,w-step*6,2);
  c.fillStyle='#7d9d68';c.fillRect(-a+step*3,b-3,w-step*6,2);
  const iris=Math.round(h*.66),iw=Math.round(iris*.72);
  c.fillStyle='#355d3d';c.fillRect(-iw,-Math.floor(iris/2)-1,iw*2,iris+2);
  c.fillStyle=rage?'#c4eb6c':'#85b86c';c.fillRect(-iw+2,-Math.floor(iris/2),iw*2-4,iris);
  c.fillStyle='#142f28';c.fillRect(-2,-Math.floor(iris/2),4,iris);
  c.fillStyle='#f7ffd2';c.fillRect(-iw+3,-Math.floor(iris/2)+1,3,3);
  c.restore();
}
export function drawBattleHead(c,kind,{collar=true}={}){
  c.save();c.translate(280,0);c.imageSmoothingEnabled=false;c.lineWidth=1;
  const ink='#15362c',moss='#52724b',leaf='#9aaf70',bronze='#a29e61',shine='#d9d49b';
  // Collar reaches the same shoulders as the enclosing Greed/Pride bodies.
  if(collar)for(const side of[-1,1]){
    c.save();c.scale(side,1);
    path(c,[[140,68],[110,63],[72,74],[43,87],[58,92],[82,84],[112,77],[140,85]],ink,bronze);
    path(c,[[136,71],[108,68],[74,79],[58,87],[81,81],[111,73]],moss);
    c.fillStyle=leaf;c.fillRect(111,70,20,1);c.restore();
  }
  if(kind==='child'){
    // Moss hood, dark hair and a simple pixel face, with its watching eye above.
    path(c,[[-63,88],[-54,62],[-54,43],[-43,28],[-28,20],[28,20],[43,28],[54,43],[54,62],[63,88],[48,93],[-48,93]],ink,bronze);
    path(c,[[-53,78],[-46,40],[-29,27],[29,27],[46,40],[53,78],[36,87],[-36,87]],'#395b3c',leaf);
    path(c,[[-42,58],[-35,37],[-24,31],[24,31],[35,37],[42,58],[35,85],[23,92],[-23,92],[-35,85]],'#203e30');
    path(c,[[-27,42],[27,42],[27,67],[22,78],[13,84],[-13,84],[-22,78],[-27,67]],'#bdc5a0');
    path(c,[[-27,46],[-30,37],[-19,31],[19,31],[30,37],[28,53],[19,46],[15,54],[7,43],[0,53],[-8,43],[-18,53],[-21,45]],'#142a25');
    c.fillStyle='#879a78';c.fillRect(-27,54,4,15);c.fillRect(23,54,4,15);
    c.fillStyle='#315142';c.fillRect(-18,59,12,3);c.fillRect(6,59,12,3);
    c.fillStyle='#789d62';c.fillRect(-14,59,4,3);c.fillRect(10,59,4,3);
    c.fillStyle='#dce2bc';c.fillRect(-14,59,1,1);c.fillRect(10,59,1,1);
    c.fillStyle='#91a386';c.fillRect(-1,66,2,4);
    c.fillStyle='#657b61';c.fillRect(-4,74,8,1);
    path(c,[[-39,80],[-20,86],[0,90],[20,86],[39,80],[43,90],[20,94],[-20,94],[-43,90]],'#638052',bronze);
    // Bronze vine clasp connects the main eye to the hood, without a crown.
    path(c,[[-34,14],[-28,5],[-15,4],[-9,1],[9,1],[15,4],[28,5],[34,14],[28,27],[14,31],[-14,31],[-28,27]],'#4e6740',bronze);
    pixelEye(c,0,16,58,22);
    c.fillStyle=shine;c.fillRect(-17,4,10,1);c.fillRect(16,25,8,1);
  }else if(kind==='dragon'){
    // Branch antlers, a three-eyed dragon mask and a bevelled scale jaw.
    for(const side of[-1,1]){
      c.save();c.scale(side,1);
      path(c,[[29,31],[50,21],[65,4],[72,4],[65,21],[88,13],[92,3],[97,3],[97,17],[73,29],[92,32],[104,22],[109,22],[104,36],[76,41],[59,50]],'#53633d',bronze);
      path(c,[[38,32],[56,25],[68,12],[63,28],[82,21],[74,32],[91,35],[64,39]],'#82945a');
      c.fillStyle=shine;c.fillRect(89,14,5,1);c.fillRect(67,5,4,1);
      path(c,[[48,41],[80,38],[101,48],[83,58],[98,67],[67,77],[47,70]],'#284c36',leaf);
      path(c,[[57,46],[76,44],[90,48],[70,54],[86,64],[61,70]],moss);
      c.restore();
    }
    path(c,[[0,19],[-35,27],[-51,48],[-44,70],[-29,83],[0,93],[29,83],[44,70],[51,48],[35,27]],'#284d37',bronze);
    path(c,[[-33,32],[-40,50],[-28,66],[-6,61],[0,31]],'#648450');
    path(c,[[0,31],[6,61],[28,66],[40,50],[33,32]],'#3c643f');
    pixelEye(c,0,40,39,21);pixelEye(c,-31,58,25,13);pixelEye(c,31,58,25,13);
    path(c,[[0,54],[-12,67],[-5,76],[5,76],[12,67]],'#80995b',leaf);
    c.fillStyle='#18372b';c.fillRect(-4,69,2,2);c.fillRect(2,69,2,2);
    path(c,[[-26,76],[-15,82],[15,82],[26,76],[20,88],[0,94],[-20,88]],'#143027',bronze);
    c.fillStyle='#d0d5a2';for(let i=0;i<6;i++)c.fillRect(-17+i*6,81,3,i%2?5:3);
    c.fillStyle=shine;c.fillRect(-20,29,9,1);c.fillRect(30,40,1,7);
  }else{
    const rage=kind==='rage',outer=rage?'#668547':'#49683e';
    // Root tendrils and angular eye shell distinguish the two cyclops stages.
    for(const side of[-1,1]){
      c.save();c.scale(side,1);
      for(const[base,end]of[[[51,30],[110,8]],[[69,44],[119,40]],[[59,67],[106,88]]]){
        const[x,y]=base,[ex,ey]=end;
        path(c,[[x,y-5],[ex-17,ey-4],[ex,ey],[ex-5,ey+7],[ex-20,ey+3],[x,y+7]],outer,bronze);
        c.fillStyle=leaf;c.fillRect(ex-14,ey,7,1);
      }
      c.restore();
    }
    const w=rage?80:70;
    path(c,[[-w+17,16],[w-17,16],[w+8,37],[w+8,66],[w-12,86],[25,94],[-25,94],[-w+12,86],[-w-8,66],[-w-8,37]],ink,bronze);
    path(c,[[-w+17,22],[w-17,22],[w,40],[w,63],[w-17,80],[22,88],[-22,88],[-w+17,80],[-w,63],[-w,40]],outer,leaf);
    path(c,[[-w+22,27],[w-22,27],[w-8,43],[w-8,59],[w-24,76],[-w+24,76],[-w+8,59],[-w+8,43]],'#2a4d32');
    pixelEye(c,0,52,rage?136:116,rage?48:42,{rage});
    if(rage){
      for(const[x,top]of[[-67,11],[-40,1],[-13,7],[17,0],[44,6],[71,15]])path(c,[[x-8,28],[x-5,top+9],[x,top],[x+3,top+12],[x+8,28]],'#94b55d',shine);
      path(c,[[-69,33],[-42,33],[-22,41],[-2,43],[-20,48],[-45,42],[-69,42]],'#9abc62');
      path(c,[[69,33],[42,33],[22,41],[2,43],[20,48],[45,42],[69,42]],'#9abc62');
      c.fillStyle='#e7f2b0';c.fillRect(-59,29,15,1);c.fillRect(45,29,15,1);
    }else{c.fillStyle=shine;c.fillRect(-44,21,25,1);c.fillRect(62,42,1,12);}
    c.fillStyle=leaf;for(const x of[-30,-10,10,30])c.fillRect(x,84,5,2);
  }
  c.restore();
}
export function drawFrame(c,s,{reduced=false}={}){
  const h=c.canvas.height,kind=appearance(s);c.clearRect(0,0,560,h);
  if(kind==='worm'||s.mode==='chase')return;
  c.save();c.imageSmoothingEnabled=false;
  // Same shoulder → sleeve/shell → gripping hand composition and 280px opening as Greed/Pride.
  for(const side of[-1,1]){
    c.save();if(side===1){c.translate(560,0);c.scale(-1,1);}
    c.beginPath();c.rect(0,0,140,h);c.clip();
    const child=kind==='child',rage=kind==='rage',ink=child?'#17382f':rage?'#294330':'#163f36',light=child?'#577751':rage?'#8caa57':'#54865a';
    path(c,[[140,68],[110,68],[110,84],[82,84],[82,124],[62,124],[62,h-75],[90,h-75],[90,h-44],[138,h-30],[138,120],[140,120]],ink,'#8baa6c');
    path(c,[[73,148],[104,139],[127,174],[127,h-64],[107,h-54],[79,h-78]],light);
    path(c,[[78,160],[88,165],[92,h-86],[80,h-105]],'#91ac5a30');
    c.fillStyle='#bdc58a';c.fillRect(132,144,5,h-204);c.fillStyle='#e2dfa3';c.fillRect(132,144,1,h-204);
    if(child){
      for(let y=163;y<h-70;y+=8){c.fillStyle='#0d2b27';c.fillRect(115,y,3,6);c.fillStyle='#7a925d';c.fillRect(98,y,2,5);}
    }else{
      for(let y=154;y<h-75;y+=20)for(let j=0;j<3;j++){const x=77+j*17+(Math.floor(y/20)%2)*7;path(c,[[x,y],[x+11,y-5],[x+15,y+6],[x+5,y+13]],j%2?ink:light,'#86a168');}
      tendril(c,75,140,h-200,1,s.elapsed,reduced);
      if(kind==='cyclops'||rage)tendril(c,110,174,h-235,-1,s.elapsed,reduced);
    }
    // Broad moss-bronze shoulder plates, following the bevelled Greed armor.
    path(c,[[81,82],[126,82],[136,92],[136,142],[124,154],[80,148],[73,133],[73,96]],'#596b3d','#c0b278');
    path(c,[[79,95],[127,95],[129,133],[82,140],[77,130]],'#355e42','#d2c38a');
    c.fillStyle='#d3cd91';c.fillRect(82,85,42,2);c.fillRect(77,95,2,36);c.fillRect(82,143,42,2);
    eye(c,106,114,37,23,{size:7,glow:true,hue:rage?'#d6ff80':'#9be39a',clock:s.elapsed,reduced});
    for(let i=0;i<3;i++){const y=181+i*(h-245)/3;eye(c,87,y,child?36:27,child?22:17,{size:child?6:5,glow:true,clock:s.elapsed,reduced});}
    const y=225+(reduced?0:Math.round(Math.sin(s.elapsed*.003))*3);
    path(c,[[75,y-18],[109,y-24],[128,y+8],[115,y+57],[82,y+44]],light,'#a5b777');
    path(c,[[106,y+1],[127,y+4],[136,y+13],[137,y+43],[131,y+51],[126,y+24],[120,y+47],[115,y+24],[110,y+42]],child?'#b5c39a':'#7daa66','#dce6af');
    for(let i=0;i<3;i++)path(c,[[128-i*6,y+24],[133-i*6,y+48],[127-i*6,y+51]],'#d7dcb1','#7b945c');
    c.fillStyle='#acb775';c.fillRect(90,h-46,46,3);c.restore();
  }
  // Like Greed/Pride, the battle head is pixel geometry joined to the body.
  // Concept portraits remain source references, never cropped into this slot.
  c.save();c.beginPath();c.rect(140,0,280,s.mode==='bridge'?112:94);c.clip();
  if(s.mode==='bridge'){
    // Keep the native hold / three next preview columns clear of horns and vines.
    c.save();c.translate(280,25);c.scale(.7,.85);c.translate(-280,0);
    drawBattleHead(c,kind,{collar:false});c.restore();
    c.fillStyle='#52724b';c.fillRect(259,103,42,7);
    for(const side of[-1,1])path(c,[[280+side*140,106],[280+side*60,105],[280+side*22,103],[280+side*22,110],[280+side*63,112],[280+side*140,112]],'#395b3c','#a29e61');
  }else drawBattleHead(c,kind);
  c.restore();

  c.restore();
}
export function drawCard(c,{x=CARD_LAYOUT.x,y=CARD_LAYOUT.y,w=CARD_LAYOUT.w,h=CARD_LAYOUT.h,rarity='C',face=false,clock=0,reduced=false,tarot=null,tarotBack=false,revealProgress=1}={}){
  const palettes={C:['#613c23','#f5d7a0'],U:['#163a64','#c3e9ff'],R:['#64192f','#ffc6ba'],SR:['#43245c','#e7c5ff'],SAR:['#463729','#ffdfa0'],moon:['#292340','#ded5ff'],sword:['#284353','#ecf1ff'],jester:['#601c2c','#ffdabd'],eye:['#472658','#ecd0ff'],death:['#362c29','#efc599'],back:['#172e4c','#e6cfaa']};
  const[ink,metal]=palettes[face?(tarot?.icon||rarity):'back']||palettes.C;
  c.save();c.beginPath();c.rect(12,152,256,346);c.clip();
  if(revealProgress<1){const p=revealProgress,scale=Math.max(.045,Math.abs(Math.cos(p*Math.PI)));c.translate(x+w/2,y+h/2+(1-p)*12);c.rotate((1-p)*-.05);c.scale(scale,1);c.translate(-x-w/2,-y-h/2);face=face&&p>.5;}
  const gradient=c.createLinearGradient(x,y,x+w,y+h);gradient.addColorStop(0,ink);gradient.addColorStop(.45,'#111421');gradient.addColorStop(1,ink);
  box(c,x,y,w,h,gradient,metal,8);box(c,x+5,y+5,w-10,h-10,'#10131f',metal,5);
  c.fillStyle='#fff2dd';c.fillRect(x+14,y+2,w-28,1);c.fillRect(x+2,y+14,1,h-28);
  c.fillStyle='#090d1c';c.fillRect(x+14,y+h-3,w-28,1);c.fillRect(x+w-3,y+14,1,h-28);
  const ax=x+11,ay=y+11,aw=w-22,ah=h-(face?96:60);
  const atlas=tarot||tarotBack?images.tarot:images.secret;
  const index=tarot||tarotBack?(face&&tarot?{moon:0,sword:1,jester:2,eye:3,death:4}[tarot.icon]:5):(face?{C:0,U:1,R:2,SR:3,SAR:5}[rarity]:4);
  c.save();c.beginPath();c.roundRect(ax,ay,aw,ah,4);c.clip();
  c.translate(ax+aw/2,ay+ah/2);if(face&&tarot?.reversed)c.rotate(Math.PI);
  if(atlas?.complete&&atlas.naturalWidth){
    const sw=atlas.naturalWidth/3,sh=atlas.naturalHeight/2;
    // Cover crop in source coordinates: every panel retains its aspect ratio.
    const scale=Math.max(aw/(sw-8),ah/(sh-8)),cw=aw/scale,ch=ah/scale;
    c.drawImage(atlas,(index%3)*sw+(sw-cw)/2,Math.floor(index/3)*sh+(sh-ch)/2,cw,ch,-aw/2,-ah/2,aw,ah);
  }else{
    c.fillStyle=ink;c.fillRect(-aw/2,-ah/2,aw,ah);
    eye(c,0,0,aw*.6,ah*.2,{size:23,hue:metal,glow:true,clock,reduced});
  }
  c.restore();
  if(face){
    // Name, orientation/rarity and three effect lines share an opaque caption.
    box(c,x+12,y+h-82,w-24,76,ink,null,3);
    const name=tarot?.name||{C:'晨光護符',U:'冰晶靈藥',R:'赤瞳龍面',SR:'翡翠秘典',SAR:'萬眼龍 · 秘藏'}[rarity];
    text(c,name,x+w/2,y+h-69,14,metal,w-28);
    text(c,tarot?(tarot.reversed?'逆位':'正位'):rarity,x+w/2,y+h-54,10,'#f0e5dd');
  }else{
    box(c,x+12,y+h-50,w-24,38,ink,null,3);
    text(c,tarotBack?'命運之書':'嫉妒秘藏',x+w/2,y+h-36,17,metal);
    text(c,'空白鍵 · 揭開秘藏',x+w/2,y+h-17,10,'#e3dded');
  }
  for(const [px,py]of[[x+8,y+8],[x+w-8,y+8],[x+8,y+h-8],[x+w-8,y+h-8]])path(c,[[px-4,py],[px,py-4],[px+4,py],[px,py+4]],metal,'#fff2dd');
  if(face&&['SR','SAR'].includes(rarity)){
    c.save();c.beginPath();c.roundRect(ax,ay,aw,ah,4);c.clip();
    const shine=c.createLinearGradient(x,y,x+w,y+h);shine.addColorStop(0,'#b7e7ff00');shine.addColorStop(.32,'#b7e7ff00');shine.addColorStop(.48,rarity==='SAR'?'#fff4ba60':'#d9b7ff50');shine.addColorStop(.56,'#bbe1ff25');shine.addColorStop(.74,'#a8deff00');shine.addColorStop(1,'#a8deff00');
    c.translate(reduced?0:Math.sin(clock*.0015)*w*.38,0);c.fillStyle=shine;c.fillRect(x-w/2,y,w*2,h);c.restore();
  }
  c.restore();
}
export function heart(c,x,y,scale=1,alpha=1){c.save();c.translate(x,y);c.scale(scale,scale);avatar(c,0,0,'#ff5178',alpha);c.restore();}
export function backdrop(c,h){
  const g=c.createLinearGradient(0,142,280,h);g.addColorStop(0,'#0b201de8');g.addColorStop(.6,'#071a18ef');g.addColorStop(1,'#12271ff2');c.fillStyle=g;c.fillRect(0,166,280,h-166);
  // Unruled backdrop: each game owns its grid, drawn once at its cell spacing.
  c.strokeStyle='#789163';c.strokeRect(12,166,256,h===720?512:298);
}
