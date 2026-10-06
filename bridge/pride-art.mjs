import { drawFineGauntlet } from './crazy-boss-art.mjs?v=1.2.25';
import { drawPrideBackdrop } from './pride-theme.mjs';
// Runtime WebP portraits; byte-identical PNG sources live in source-assets/pride.
// Canvas artwork remains available when an image cannot be loaded.
export const prideImages = {};
let prideArtPromise;
export function loadPrideArt() {
  return prideArtPromise ??= typeof Image === 'undefined' ? Promise.resolve([]) : Promise.all(
  [['first', 'pride-first.webp'], ['defeated', 'pride-defeated.webp'], ['mirrorDefeated', 'pride-mirror-defeated.webp'], ['second', 'pride-second.webp'], ['towerCollapse', 'pride-tower-collapse.webp'], ['towerRuins', 'pride-tower-ruins.webp']].map(([key, file]) => new Promise(resolve => {
    const img = new Image(); prideImages[key] = img;
    img.onload = () => resolve(true); img.onerror = () => resolve(false);
    img.src = new URL(`./assets/${file}`, import.meta.url).href;
  }))
  );
}
function cover(c, img) {
  if (!img?.naturalWidth) return false;
  const scale = Math.max(c.canvas.width / img.naturalWidth, c.canvas.height / img.naturalHeight);
  c.drawImage(img, (c.canvas.width - img.naturalWidth * scale) / 2, (c.canvas.height - img.naturalHeight * scale) / 2, img.naturalWidth * scale, img.naturalHeight * scale);
  return true;
}
function contain(c, img, x, y, w, h) {
  if (!img?.naturalWidth) return false;
  const scale = Math.min(w / img.naturalWidth, h / img.naturalHeight);
  c.drawImage(img, x + (w - img.naturalWidth * scale) / 2, y + (h - img.naturalHeight * scale) / 2, img.naturalWidth * scale, img.naturalHeight * scale);
  return true;
}
export function drawPrideMirrorPortrait(c, x = 140, y = 66) {
  if (contain(c, prideImages.second, x - 68, y - 42, 136, 84)) return;
  c.save(); c.translate(x, y);
  c.fillStyle = '#6b4d9e'; c.strokeStyle = '#ffe095'; c.lineWidth = 2;
  c.beginPath(); c.moveTo(0, -28); c.lineTo(23, -6); c.lineTo(0, 32); c.lineTo(-23, -6); c.closePath(); c.fill(); c.stroke();
  c.fillStyle = '#efb8ff'; c.fillRect(-12, -5, 8, 3); c.fillRect(4, -5, 8, 3);
  c.fillStyle = '#ffe095'; c.fillRect(-20, -37, 40, 5);
  c.restore();
}
// Canvas fallback art (used while images load, or if both WebP and PNG fail).
export function drawPridePortrait(c, x = 140, y = 66, size = 1) {
  const img = prideImages.first;
  if (img?.naturalWidth) {
    c.save(); c.beginPath(); c.roundRect(x - 38 * size, y - 42 * size, 76 * size, 84 * size, 6 * size); c.clip();
    c.drawImage(img, img.naturalWidth * .36, img.naturalHeight * .09, img.naturalWidth * .29, img.naturalHeight * .52, x - 38 * size, y - 42 * size, 76 * size, 84 * size);
    c.restore(); return;
  }
  c.save(); c.translate(x, y); c.scale(size, size);
  c.fillStyle = '#715399'; c.beginPath(); c.moveTo(-38, 40); c.lineTo(-25, 8); c.lineTo(25, 8); c.lineTo(38, 40); c.closePath(); c.fill();
  c.fillStyle = '#daf3ff'; c.fillRect(-18, -12, 36, 40);
  c.fillStyle = '#795ca2'; c.fillRect(-13, 3, 8, 3); c.fillRect(5, 3, 8, 3);
  c.fillStyle = '#ffdc80'; c.beginPath(); c.moveTo(-24, -10); c.lineTo(-28, -34); c.lineTo(-12, -23); c.lineTo(0, -42); c.lineTo(12, -23); c.lineTo(28, -34); c.lineTo(24, -10); c.closePath(); c.fill();
  c.fillStyle = '#83e5ff'; c.fillRect(-3, -23, 6, 8); c.restore();
}
export function drawPridePalace(c,w,h,time=0,reduced=false) {
  drawPrideBackdrop(c,{w,h,time,reduced,bands:false});
}
export function drawPrideCinematic(c, s, t, reduced = false) {
 const {width:w,height:h}=c.canvas,kind=s.cutscene.kind;
 const transform=kind==='transform',king=kind==='king-defeat',shattered=kind==='mirror-defeat',collapsing=kind==='tower-collapse',victory=kind==='victory';
 c.save();c.imageSmoothingEnabled=false;drawPridePalace(c,w,h,s.cutscene.time,reduced);
 const hasArt=transform?contain(c,prideImages.second,w*.08,h*.05,w*.84,h*.64):cover(c,victory?prideImages.towerRuins:collapsing?prideImages.towerCollapse:shattered?prideImages.mirrorDefeated:king?prideImages.defeated:prideImages.first);
 if(hasArt&&!transform){c.fillStyle='#160d2588';c.fillRect(0,0,w,h);}
 const title=king?'鏡宮之王敗北':transform?'鏡之化身甦醒':kind==='mirror-defeat'?'鏡之化身崩解':collapsing?'塔頂崩塌，墜落！':kind==='victory'?'打敗傲慢':t('prideIntro');
 const sub=king?'王冠墜落 · 傲慢尚未散去':transform?'鏡宮之王已被打敗':kind==='mirror-defeat'?'全部鏡子碎裂 · 傲慢化身敗北':collapsing?'':kind==='victory'?'成功逃離傲慢之塔 · 100 層':'';
 c.fillStyle='#130d27bb';c.fillRect(0,h*.71,w,h*(collapsing?.11:.18));c.fillStyle='#ffe7a9';c.textAlign='center';c.font='bold 28px sans-serif';c.fillText(title,w/2,h*.77,w-24);c.font='16px sans-serif';if(sub)c.fillText(sub,w/2,h*.84,w-24);c.restore();
}

// Pixel head / mirror core is part of the enclosing body, not a concept portrait.
export function drawPrideBossHead(c,s,{bridge=false}={}) {
 const alive=s.mirrorWorld?.mirrors.filter(v=>!v.broken)||[{color:'#ff5369'},{color:'#53baff'},{color:'#bb71ff'}];
 const count=alive.length,red=s.form===2&&count===1,fractured=s.form===2&&count===2;
 // The collar physically reaches the top of the playfield; keep its centre clear for the HUD.
 c.save();c.fillStyle=s.form!==2?'#60334d':red?'#76283e':fractured?'#50335d':'#4a365e';c.strokeStyle='#caa269';c.lineWidth=2;
 for(const side of [-1,1]){c.beginPath();c.moveTo(140+side*39,bridge?85:55);c.lineTo(140+side*101,bridge?117:99);c.lineTo(140+side*134,bridge?150:139);c.lineTo(140+side*116,bridge?150:139);c.lineTo(140+side*85,bridge?109:91);c.lineTo(140+side*32,bridge?91:62);c.closePath();c.fill();c.stroke();}c.restore();
 c.save();c.translate(140,bridge?68:40);c.scale(bridge?1.6:1.4,bridge?1.12:1.05);
 const shape=(p,fill,stroke)=>{c.beginPath();p.forEach(([x,y],i)=>c[i?'lineTo':'moveTo'](x,y));c.closePath();c.fillStyle=fill;c.fill();if(stroke){c.strokeStyle=stroke;c.lineWidth=1;c.stroke();}};
 if(s.form!==2){
  shape([[-43,42],[-29,20],[-16,19],[16,19],[29,20],[43,42]],'#6a3553','#e1bd7c');
  shape([[-26,23],[-15,29],[0,23],[15,29],[26,23],[16,37],[0,32],[-16,37]],'#eddfce');
  c.fillStyle='#4c314c';c.fillRect(-21,-8,42,34);c.fillStyle='#ead6c5';c.fillRect(-15,-8,30,34);
  c.fillStyle='#c5b082';c.fillRect(-22,-10,44,9);c.fillRect(-20,-1,6,20);c.fillRect(14,-1,6,20);c.fillStyle='#f1dfae';c.fillRect(-19,-8,36,3);
  c.fillStyle='#675375';c.fillRect(-11,5,8,2);c.fillRect(3,5,8,2);c.fillStyle='#bf9f99';c.fillRect(-3,18,6,1);
  shape([[-27,-7],[-31,-30],[-16,-20],[0,-35],[16,-20],[31,-30],[27,-7]],'#cda45a','#fff1b4');c.fillStyle='#f6da92';c.fillRect(-25,-9,50,3);shape([[0,-26],[4,-20],[0,-14],[-4,-20]],'#94cbe7','#fff0cd');
 }else{
  shape([[-28,31],[-18,18],[0,23],[18,18],[28,31]],red?'#853848':'#5e3c72','#ddb774');
  if(red){
    shape([[-22,2],[-13,-15],[0,-20],[13,-15],[22,2],[13,22],[0,31],[-13,22]],'#6d182d','#f4ad88');
    shape([[-20,6],[-11,-4],[0,-8],[11,-4],[20,6],[11,15],[0,19],[-11,15]],'#ff647e','#ffe4b1');
    c.fillStyle='#321222';c.fillRect(-3,-5,6,21);c.fillStyle='#fff4d3';c.fillRect(-2,-3,2,6);
    shape([[-32,-13],[-37,-32],[-22,-27],[-25,-10]],'#d2ad62','#fff2bc');
    shape([[-10,-22],[0,-37],[10,-22],[0,-27]],'#d2ad62','#fff2bc');
    shape([[25,-10],[22,-27],[37,-32],[32,-13]],'#d2ad62','#fff2bc');
  }else if(fractured){
    shape([[-3,-12],[-20,0],[-15,23],[-2,30],[4,10],[-6,4]],'#694a88','#f3dba2');
    shape([[5,-9],[23,3],[17,27],[5,33],[9,13],[0,6]],'#aa608d','#e8bb98');
    c.fillStyle='#edc8fa';c.fillRect(-13,6,7,2);c.fillStyle='#ffb6cf';c.fillRect(9,9,6,2);
    shape([[-28,-11],[-32,-30],[-17,-21],[0,-37],[7,-25],[2,-17],[9,-11]],'#cca45b','#fff2bc');
    shape([[16,-16],[22,-31],[35,-20],[29,-6]],'#bd9857','#fff2bc');
    shape([[7,-2],[10,7],[4,13]],'#d6ecff','#f5e8d2');
  }else{
    shape([[0,-12],[20,0],[15,23],[0,30],[-15,23],[-20,0]],'#684b89','#f3dba2');
    shape([[-16,-1],[0,-9],[0,27],[-13,20]],'#bc9be544');c.fillStyle='#ebc5ff';c.fillRect(-11,6,8,2);c.fillRect(3,6,8,2);
    shape([[-28,-11],[-32,-30],[-17,-21],[0,-37],[17,-21],[32,-30],[28,-11]],'#cca45b','#fff2bc');c.fillStyle='#efd59a';c.fillRect(-26,-12,52,3);
  }
  const xs=alive.length===3?[-42,0,42]:alive.length===2?[-38,38]:[0];
  alive.forEach((v,i)=>{const x=xs[i],y=alive.length===1?35:i===1&&alive.length===3?36:5;shape([[x,y-9],[x+6,y],[x,y+9],[x-6,y]],v.color,'#f3dba6');});
 }
 c.restore();
}
// Follow Greed's enclosing body composition: shoulder, sleeve and gripping
// hand sit beside x=140..420. The mirror boss replaces anatomy with its shell.
export function drawPrideFrame(c, height, s = {}, reduced = false) {
  c.clearRect(0, 0, 560, height); if(s.mode==='pride-escape')return; c.save(); c.imageSmoothingEnabled = false;
  const mirror = s.form === 2, clock = reduced ? 0 : s.elapsed || 0;
  const pulse = reduced ? 0 : Math.round(Math.sin(clock / 350)) * 3;
  const count=s.mirrorWorld?.mirrors.filter(v=>!v.broken).length||3,red=count===1;
  const leftGlass=red?'#8b283f':'#744764',rightGlass=red?'#8b283f':count===2?'#634277':'#355574';
  const shape = (points, color, stroke) => {
    c.beginPath(); points.forEach(([x,y],i) => c[i?'lineTo':'moveTo'](x,y)); c.closePath();
    if(color){c.fillStyle=color;c.fill();} if(stroke){c.strokeStyle=stroke;c.lineWidth=1;c.stroke();}
  };
  const jewel = (x,y,w,h,color) => {
    shape([[x,y-h],[x+w,y],[x,y+h],[x-w,y]],color,'#e6bf77');
    shape([[x,y-h+2],[x,y+h-2],[x-w+2,y]],'#ffffff22');
    c.fillStyle='#fff0c7';c.fillRect(x-1,y-h+3,2,3);
  };
  for (const side of [-1,1]) {
    c.save(); if(side===1){c.translate(560,0);c.scale(-1,1);}
    // All animated body parts are clipped outside the same central arena as Greed.
    c.beginPath();c.rect(0,0,140,height);c.clip();
    if(!mirror){
      // Broad royal shoulders taper into a long velvet cape around the board.
      shape([[140,65],[110,65],[110,85],[82,85],[82,125],[64,125],[64,height-75],[90,height-75],[90,height-45],[138,height-32],[138,120],[140,120]],'#401d43');
      shape([[72,148],[103,139],[127,174],[127,height-63],[107,height-55],[80,height-78]],'#6b3055');
      shape([[76,156],[84,162],[87,height-92],[77,height-107]],'#a0537733');
      shape([[99,151],[106,160],[111,height-69],[102,height-60]],'#a66a9133');
      // Ermine border, individual dark flecks and gold embroidery.
      c.fillStyle='#eadccc';c.fillRect(129,142,9,height-192);
      c.fillStyle='#fff0e2';c.fillRect(129,142,2,height-192);
      for(let y=151;y<height-62;y+=17){c.fillStyle='#3c243e';c.fillRect(134,y,2,4);c.fillRect(133,y+4,4,2);}
      for(let y=173;y<height-75;y+=9){const x=85+Math.round(Math.sin(y/110)*7);c.fillStyle='#9b703c';c.fillRect(x,y,4,5);c.fillStyle='#e7c17a';c.fillRect(x,y,1,5);c.fillRect(x+1,y,2,1);c.fillStyle='#542445';c.fillRect(x+1,y+1,2,3);}
      for(let y=165;y<height-70;y+=6){c.fillStyle='#b77b9833';c.fillRect(112,y,2,4);c.fillStyle='#28122d';c.fillRect(121,y,2,5);}
      // Bevelled shoulder plates carry the king's crown and amethyst insignia.
      shape([[81,82],[126,82],[136,92],[136,142],[124,154],[80,148],[73,133],[73,96]],'#8c663d');
      shape([[79,95],[127,95],[129,133],[82,140],[77,130]],'#c59c62');
      c.fillStyle='#f4d598';c.fillRect(82,85,42,2);c.fillRect(77,95,2,36);c.fillRect(82,143,42,2);
      c.fillStyle='#fff1c9';c.fillRect(85,85,15,1);c.fillRect(77,100,1,13);
      c.fillStyle='#583356';c.fillRect(88,99,35,27);
      shape([[94,117],[92,104],[100,110],[106,101],[112,110],[120,104],[118,117]],'#e6c47e');
      c.fillStyle='#fff1c7';c.fillRect(95,119,23,2);jewel(106,112,3,5,'#b58fe5');
      for(const [x,y] of [[81,93],[126,93],[82,135],[125,136]]){c.fillStyle='#6a452b';c.fillRect(x,y,3,3);c.fillStyle='#fff0c7';c.fillRect(x,y,1,1);}
      jewel(122,162,6,8,'#a467cc');
      // The actual arms grasp the frame, just as the dealer's hands do.
      const y=220+pulse,reach=s.attack?14:0;
      shape([[75,y-18],[113,y-24],[128,y+6],[115,y+60],[82,y+46]],'#633355');
      c.fillStyle='#d2aa68';c.fillRect(89,y-20,26,3);c.fillStyle='#eddbc3';c.fillRect(112,y-14,7,48);
      drawFineGauntlet(c,103+reach,y,false);
      jewel(91+reach,y-9,4,6,'#9d7cca');
      c.fillStyle='#d6ad67';c.fillRect(90,height-46,46,3);c.fillStyle='#f2d598';c.fillRect(97,height-42,38,1);
    }else{
      if(red){
        // A single burning eye with blade wings and long talons: a different silhouette.
        shape([[138,83],[111,52],[101,92],[66,114],[79,148],[42,198],[66,239],[49,306],[77,height-149],[55,height-97],[112,height-43],[139,height-27],[133,height-141],[139,159]],'#49202f','#d59c68');
        shape([[121,119],[90,128],[66,207],[87,258],[68,height-130],[115,height-63],[130,height-97]],'#872b43','#f2bd91');
        jewel(113,108,17,31,'#ae3b54');c.fillStyle='#ffd9b0';c.fillRect(100,106,26,4);c.fillStyle='#431124';c.fillRect(111,94,4,28);
        const wy=height*.43+pulse;
        for(let i=0;i<4;i++){const y=wy+i*26;shape([[76,y-28],[121,y-11],[139,y+4],[129,y+48],[121,y+24],[116,y+4],[58,y-2]],'#bd5262','#eac292');}
        for(let i=0;i<5;i++)jewel(77+i%2*18,height-100-i*45,4,10,'#ed839b');
      }else if(count===2){
        // The lost guard mirror leaves an asymmetric split shell and detached shards.
        const brokenSide=side>0;
        shape(brokenSide?[[138,71],[107,68],[82,101],[97,140],[56,202],[87,243],[61,299],[92,height-100],[138,height-43],[129,height-125],[139,161]]:[[139,76],[114,61],[89,87],[62,137],[50,215],[62,height-137],[90,height-60],[137,height-28],[137,150],[140,129]],'#35253f','#c59964');
        shape([[126,106],[100,121],[77,204],[94,height-128],[131,height-58]],brokenSide?'#6f3c62':'#644277','#dbb078');
        const wy=height*.42+pulse;
        shape([[66,wy-53],[102,wy-65],[127,wy-26],[104,wy-2],[120,wy+40],[82,wy+72],[62,wy+16],[90,wy-6]],'#a48259','#edce93');
        shape([[72,wy-43],[100,wy-55],[117,wy-23],[98,wy-3],[111,wy+34],[83,wy+57],[70,wy+14],[96,wy-5]],brokenSide?'#3d3b53':'#58396d');
        for(const [x,y] of [[62,132],[50,wy+80],[101,height-83]])jewel(x,y,7,16,brokenSide?'#7eacca':'#b780c6');
        for(let i=0;i<3;i++){const y=wy+i*25;shape([[111,y],[129,y-6],[139,y+7],[132,y+38],[127,y+10],[111,y+8]],'#8d5d80','#eac792');}
        c.strokeStyle='#d0e5f9';c.lineWidth=2;c.beginPath();c.moveTo(105,118);c.lineTo(93,151);c.lineTo(114,164);c.lineTo(90,196);c.stroke();
        shape([[111,49],[93,86],[122,76]],'#d0af76','#fff0bb');shape([[126,87],[139,65],[138,96]],'#a78c58','#e6c994');
      }else{
      // A continuous faceted shell surrounds the arena, rather than mirror posts.
      shape([[139,76],[114,61],[89,87],[89,108],[62,137],[50,215],[62,height-137],[90,height-60],[137,height-28],[137,150],[140,129]],'#372342','#b68c53');
      shape([[137,100],[116,80],[93,111],[70,172],[64,height-174],[92,height-91],[134,height-48]],'#79527e');
      shape([[130,119],[106,99],[91,143],[77,height-202],[103,height-100],[130,height-65]],side<0?leftGlass:rightGlass);
      shape([[111,106],[120,109],[120,height-75],[96,height-96],[82,height-171]],'#281b36');
      shape([[88,163],[97,129],[97,height-161],[90,height-158],[73,237]],'#d7bcdf33');
      // Segmented gilt filigree follows the boss silhouette and its glass facets.
      c.strokeStyle='#e5c078';c.lineWidth=2;c.beginPath();c.moveTo(135,128);c.lineTo(119,96);c.lineTo(101,122);c.lineTo(81,210);c.lineTo(91,height-141);c.lineTo(117,height-66);c.stroke();
      c.strokeStyle='#fff0bd';c.lineWidth=1;c.beginPath();c.moveTo(130,125);c.lineTo(117,106);c.lineTo(101,144);c.stroke();
      for(let y=168;y<height-94;y+=21){const x=126+Math.round(Math.sin(y/45)*4);shape([[x,y-5],[x+5,y],[x,y+5],[x-5,y]],'#bc945e');jewel(x,y,2,3,'#d8b5ea');}
      // Crown shards and a split glowing core belong to the enclosing body.
      shape([[90,95],[86,69],[99,78],[110,54],[121,79],[137,66],[131,100],[118,109]],'#b58a45');
      shape([[94,95],[91,78],[101,85],[111,65],[121,86],[130,78],[127,96]],'#efcf84');
      jewel(113,93,5,9,'#b394dc');jewel(122,132,13,24,red?'#b53c58':'#80529c');
      c.fillStyle=red?'#ffb5c3':'#edc6ff';c.fillRect(116,131,9,2);c.fillStyle='#fff0ff';c.fillRect(123,130,3,2);
      // Large physical mirror wings, with reflected edges and cracks.
      const wingY=height*.42+pulse;
      shape([[62,wingY-48],[98,wingY-66],[125,wingY-34],[118,wingY+52],[79,wingY+80],[63,wingY+33]],'#d0a66b','#fff1c1');
      shape([[68,wingY-43],[97,wingY-58],[117,wingY-29],[111,wingY+46],[80,wingY+69],[69,wingY+29]],red?'#5c1e30':side<0?'#53334e':count===2?'#463153':'#324662');
      shape([[73,wingY-36],[96,wingY-50],[75,wingY+28]],'#eac8f54a');
      c.strokeStyle='#f0d2fd88';c.lineWidth=1;c.beginPath();c.moveTo(100,wingY-20);c.lineTo(89,wingY+6);c.lineTo(98,wingY+28);c.stroke();
      // Floating shard talons curl towards the game's edge without entering it.
      for(let finger=0;finger<3;finger++){const y=wingY+finger*20;shape([[108,y-4],[128,y-7],[138,y+3],[139,y+20],[134,y+30],[132,y+11],[125,y+4],[108,y+5]],red?'#bd5b6b':'#956685','#dfc081');shape([[112,y-2],[127,y-4],[135,y+3],[132,y+5],[124,y+1]],'#e0bfdc');}
      for(const [x,y] of [[65,144],[51,height-118],[111,height-55]])jewel(x,y,5,12,'#b491c077');
      }
    }
    c.restore();
  }
  // A broken, embroidered hem encloses the lower edge in Greed's pixel style.
  c.fillStyle='#b98f56';for(let x=140;x<420;x+=28)c.fillRect(x,height-4,16,4);
  c.fillStyle='#edcf91';for(let x=142;x<420;x+=28)c.fillRect(x,height-4,8,1);
  c.restore();
}
