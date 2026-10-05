import { pusherFront, PUSHER_STEP } from './crazy-reactions.mjs?v=1.2.22';
import { GREED_ATTACKS, ROULETTE_LASER_WIDTH } from './crazy-reactions.mjs?v=1.2.22';
const label = (c, value, x, y, size = 13, color = '#ffe7a3') => { c.fillStyle = color; c.font = `bold ${size}px "Pixel Latin", "Pixel Hant", sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(value, x, y, 248); };
export function pixelCore(c, x, y, color) {
  const pixels = ['.XX.XX.', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...'];
  c.fillStyle = color; pixels.forEach((row, j) => [...row].forEach((v, i) => { if (v === 'X') c.fillRect(Math.round(x - 7 + i * 2), Math.round(y - 6 + j * 2), 2, 2); }));
}
function coin(c, x, y, r, green = false) {
  c.fillStyle = green ? '#175b44' : '#754116'; c.fillRect(Math.round(x - r), Math.round(y - r + 2), r * 2, r * 2);
  c.fillStyle = green ? '#79efbd' : '#ffda77'; c.fillRect(Math.round(x - r + 2), Math.round(y - r), r * 2 - 4, r * 2);
  c.fillStyle = green ? '#d7ffe8' : '#fff0b8'; c.fillRect(Math.round(x - r + 3), Math.round(y - r + 2), 3, Math.max(2, r));
}
export function drawReaction(c, s, t, reduced) {
  const m = s.mini; if (!GREED_ATTACKS.includes(s.mode)) return;
  c.save(); c.beginPath(); c.rect(12, 152, 256, 356); c.clip();
  if (s.mode === 'jump') { c.fillStyle = '#7b4934'; c.fillRect(12, 480, 256, 8); c.fillStyle = '#ffe4a2'; c.fillRect(12, 480, 256, 2); }
  if (s.mode === 'vortex') {
    c.strokeStyle = '#bf549e'; c.lineWidth = 2;
    for (let i = 0; i < 4; i++) { const r = 20 + ((reduced ? i * 18 : m.clock / 22 + i * 18) % 72); c.strokeRect(140 - r, 265 - r, r * 2, r * 2); }
    c.fillStyle = '#e9479e'; c.fillRect(131, 256, 18, 18);
  }
  for (const h of m.hazards) {
    const warn = h.age < h.warn;
    c.globalAlpha = warn ? reduced ? .5 : .35 + Math.sin(h.age / 80) * .1 : 1;
    if (h.kind === 'ground' || h.kind === 'high') {
      if (warn) { c.fillStyle = '#ff476f'; c.fillRect(12, h.y, 256, h.h); label(c, h.kind === 'ground' ? '↑' : '↓', 246, h.y + h.h / 2, 20, '#fff0bc'); }
      else { c.fillStyle = '#925428'; c.fillRect(h.x, h.y, h.w, h.h); c.fillStyle = '#ffdc7c'; c.fillRect(h.x + 3, h.y + 3, h.w - 6, h.h - 6); c.fillStyle = '#fff3bd'; c.fillRect(h.x + 4, h.y + 3, h.w - 8, 4); }
    } else if (h.kind === 'coin') {
      if (warn) { c.fillStyle = '#df466a'; c.fillRect(h.x - 7, 155, 14, 18); label(c, '↓', h.x, 179, 15); }
      else coin(c, h.x, h.y, 6);
    } else if (h.kind === 'motion') {
      const color = h.tone === 'blue' ? '#62d2ff' : '#ffb455';
      if (h.offset == null) { c.fillStyle = color; c.fillRect(12, warn ? 188 : h.y - 4, 256, warn ? 3 : 8); }
      else {
        const x = h.nx*h.offset, y = h.ny*h.offset;
        c.strokeStyle = color; c.lineWidth = warn ? 3 : 8;
        c.beginPath();c.moveTo(x-h.ny*600,y+h.nx*600);c.lineTo(x+h.ny*600,y-h.nx*600);c.stroke();
        if (warn) {
          const reach = Math.min(h.nx ? 128/Math.abs(h.nx) : Infinity, h.ny ? 178/Math.abs(h.ny) : Infinity);
          label(c,['→','↘','↓','↙','←','↖','↑','↗'][h.direction],Math.max(30,Math.min(250,140-h.nx*reach)),Math.max(174,Math.min(486,330-h.ny*reach)),20,color);
        }
      }
      if (warn) label(c, t(h.tone === 'blue' ? 'crazyKeepMoving' : 'crazyStayStill'), 140, 214, 16, color);
    } else if (h.kind === 'laser') {
      if (!warn) c.globalAlpha = Math.max(0, Math.min(1, (h.warn + 350 - h.age) / 100));
      const width = h.width ?? ROULETTE_LASER_WIDTH, alpha = c.globalAlpha;
      c.strokeStyle = warn ? '#d56688' : '#ffe294'; c.lineWidth = width;
      if (warn) c.globalAlpha *= .28;
      c.beginPath(); c.moveTo(h.a.x, h.a.y); c.lineTo(h.b.x, h.b.y); c.stroke();
      c.globalAlpha = alpha; c.lineWidth = warn ? 2 : width * .35;
      c.strokeStyle = warn ? '#f6a0b7' : '#fff7d4'; c.setLineDash(warn ? [8, 6] : []);
      c.stroke(); c.setLineDash([]);
    }
  }
  c.globalAlpha = 1; for (const d of m.drops) coin(c, d.x, d.y, 7, true);
  pixelCore(c, m.x, m.y, m.dash > 0 ? '#89ffee' : s.protection > 0 ? '#ffd18a' : '#ff5178');
  c.restore();
  label(c, s.mode === 'jump' ? t('crazyJumpHint') : m.dashReady > 0 ? `${t('crazyDash')} ${(m.dashReady / 1000).toFixed(1)}s` : t('crazyDashReady'), 140, 498, 11, '#8fffdb');
}
function trayPoint(x, y) {
  const depth = Math.max(0, Math.min(1, (y - 250) / 215));
  return { x: 140 + (x - 140) * (140 + 100 * depth) / 226, y: 280 + (y - 250) * .8, depth };
}
function trayPolygon(c, points, color) {
  c.fillStyle = color; c.beginPath(); points.forEach(([x,y],i) => i ? c.lineTo(x,y) : c.moveTo(x,y)); c.closePath(); c.fill();
}
function metalCoin(c, x, y, radius, kind, shine = 0) {
  const color = kind === 'heal' ? ['#175847','#56d7a5','#c1ffe1'] : kind === 'ruby' ? ['#783049','#e96a98','#ffd4e9'] : kind === 'lucky' ? ['#59365e','#cf97ef','#fff0ff'] : ['#7d4a19','#e8b958','#fff0ad'];
  c.fillStyle = color[0]; c.beginPath(); c.ellipse(x,y+2,radius,radius*.58,0,0,Math.PI*2); c.fill();
  c.fillStyle = color[1]; c.beginPath(); c.ellipse(x,y,radius,radius*.58,0,0,Math.PI*2); c.fill();
  c.strokeStyle=color[0];c.lineWidth=.7;c.beginPath();c.ellipse(x,y,radius-1.6,Math.max(1,radius*.58-1.3),0,0,Math.PI*2);c.stroke();
  c.strokeStyle=color[2];c.beginPath();c.ellipse(x,y-1,radius-1.3,radius*.45,0,Math.PI*1.05,Math.PI*1.85);c.stroke();
  c.fillStyle=color[2];c.fillRect(x-2+shine*2,y-2,2,1);
  if(kind==='lucky') label(c,'7',x,y,Math.max(7,radius),'#fff0ff');
  else if(kind==='ruby') {c.fillStyle='#fff0ed';c.fillRect(x-1,y-1,2,2);}
}
export function drawPusher(c, s, t, reduced = false) {
  const m = s.mini, front = pusherFront(m), lip = trayPoint(140,465).y;
  c.save(); c.beginPath(); c.rect(12,152,256,356);c.clip();
  const background=c.createLinearGradient(0,185,0,500);background.addColorStop(0,'#302b4a');background.addColorStop(1,'#160f25');c.fillStyle=background;c.fillRect(14,185,252,320);
  // Casino cabinet: chance reels sit above the physical two-level coin bed.
  trayPolygon(c,[[20,188],[260,188],[249,480],[31,480]],'#493345');
  c.fillStyle='#c09052';c.fillRect(25,190,230,2);c.fillStyle='#211323';c.fillRect(76,197,128,57);
  const symbols=['●','♥','7','♦'];
  for(let i=0;i<3;i++) {
    const moving=m.spin&&m.spin.time<350+i*220;
    const value=moving&&!reduced?Math.floor(m.spin.time/65+i)%4:m.spin?.reels[i]??m.reels[i];
    c.fillStyle='#e0bb7c';c.fillRect(84+i*38,203,34,38);c.fillStyle='#fff0d3';c.fillRect(86+i*38,205,30,33);
    label(c,symbols[value],101+i*38,221,22,value===1?'#bc3260':'#412735');
  }
  for(let tier=0;tier<3;tier++) {
    const y=207+tier*17,active=m.jackpotFlash>0&&m.jackpotTier===tier+1;
    c.fillStyle=active?'#af7446':'#271b33';c.fillRect(28,y-7,43,14);
    label(c,`JP${tier+1}`,41,y,8,active?'#fff5c9':'#b6a0a9');label(c,String(m.jackpots[tier]),60,y,9,'#ffd879');
  }
  for(let i=0;i<3;i++){metalCoin(c,226,241-i*5,10,'gold');metalCoin(c,242,244-i*4,7,'gold');}
  label(c,m.jackpotFlash>0?`JP${m.jackpotTier} +${m.jackpots[m.jackpotTier-1]}`:'CHANCE',140,247,10,m.jackpotFlash>0?'#fff0ab':'#ca9fb5');
  const lift=22, step=trayPoint(140,PUSHER_STEP), stepHalf=(140+100*step.depth)/2;
  trayPolygon(c,[[70,280],[210,280],[260,lip],[20,lip]],'#674f48');
  trayPolygon(c,[[74,281],[206,281],[255,lip-4],[25,lip-4]],'#ae8553');
  // Lower coins sit under a visibly raised upper shelf.
  const tokens=[...m.coins].sort((a,b)=>a.y-b.y);
  for(const token of tokens.filter(o=>o.level!=='upper'&&o.level!=='transfer')) {
    const q=trayPoint(token.x,token.y);
    metalCoin(c,q.x,q.y,5.4+q.depth*3.1,token.kind||(token.green?'heal':'gold'),token.shine||0);
  }
  trayPolygon(c,[[70,280-lift],[210,280-lift],[140+stepHalf,step.y-lift],[140-stepHalf,step.y-lift]],'#9d967c');
  trayPolygon(c,[[140-stepHalf,step.y-lift],[140+stepHalf,step.y-lift],[140+stepHalf,step.y],[140-stepHalf,step.y]],'#514044');
  c.fillStyle='#f1d692';c.fillRect(140-stepHalf,step.y-lift,stepHalf*2,3);
  const edge=trayPoint(140,front),half=(140+100*edge.depth)/2;
  const platform=c.createLinearGradient(0,280-lift,0,Math.max(281-lift,edge.y-lift));platform.addColorStop(0,'#718087');platform.addColorStop(1,'#d4d0b2');
  trayPolygon(c,[[70,280-lift],[210,280-lift],[140+half,edge.y-lift],[140-half,edge.y-lift]],platform);
  trayPolygon(c,[[140-half,edge.y-lift],[140+half,edge.y-lift],[140+half,edge.y-lift+5],[140-half,edge.y-lift+5]],'#655665');
  c.fillStyle='#fff1b9';c.fillRect(140-half,edge.y-lift,half*2,2);
  for(const token of tokens.filter(o=>o.level==='upper'||o.level==='transfer')) {
    const q=trayPoint(token.x,token.y);
    const height=token.level==='transfer'?lift*token.transfer/180:lift+(reduced?0:(token.entry||0)/140*18);
    metalCoin(c,q.x,q.y-height,5.4+q.depth*3.1,token.kind,token.shine||0);
  }
  for(const o of m.obstacles){const q=trayPoint(o.x,o.y);c.fillStyle='#49355e';c.fillRect(q.x-8,q.y-7,16,14);label(c,'♠',q.x,q.y,10);}
  // Raised side rails and a real collection chute; dropped coins animate into it.
  trayPolygon(c,[[63,277-lift],[71,280-lift],[24,lip],[15,lip+12]],'#48344a');
  trayPolygon(c,[[209,280-lift],[217,277-lift],[265,lip+12],[256,lip]],'#48344a');
  c.strokeStyle='#c6a36e';c.lineWidth=2;c.beginPath();c.moveTo(67,280-lift);c.lineTo(19,lip+4);c.moveTo(213,280-lift);c.lineTo(261,lip+4);c.stroke();
  trayPolygon(c,[[19,lip+4],[261,lip+4],[244,486],[36,486]],'#100e1a');
  c.fillStyle='#f2cc7a';c.fillRect(21,lip+2,238,3);
  for(const token of m.falling) {
    const progress=token.time/700,q=trayPoint(token.x,465);
    c.globalAlpha=1-progress;metalCoin(c,q.x,lip+9+progress*24,8*(1-progress*.45),token.kind);c.globalAlpha=1;
  }
  const aim=trayPoint(m.aim,250);label(c,'▼',aim.x,258,11,'#ffd2a1');
  c.restore();
  label(c,`${t('crazyPusherStock')} ${m.stock} · ${t('crazyPending')} ${m.pending}`,140,170,12);
  label(c,s.timeLeft<=2000?t('crazyPusherSettle'):m.risk?t('crazyPusherRisk'):t('crazyPusherReward'),140,497,11,'#93ffe0');
}
