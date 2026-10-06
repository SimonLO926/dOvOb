import { drawPrideFocus } from '../pride-theme.mjs';
import { palace, royalCrown, sparkle, burst, avatar } from '../pride-visuals.mjs';
import { state, update as tick, dispose, active, frame, hit, keyboard } from './common.mjs';
export { dispose };
export const id = 'pride-crown-choice';
export function init(options = {}) {
  const s = state(options, 12000, 9000);
  const ratio = Math.max(0, Math.min(1, options.bossHpRatio ?? 1));
  s.phase = ratio <= 1 / 3 ? 3 : ratio <= 2 / 3 ? 2 : 1;
  s.count = (s.difficulty === 'hard' ? 6 : 3) + (s.phase - 1) * 3;
  s.target = Math.floor(s.random() * s.count); s.rejected = [];
  s.difference = Math.max(1, 4 - s.phase - (s.difficulty === 'hard' ? .5 : 0));
  s.gemWidth = [10, 8, 6][s.phase - 1] - (s.difficulty === 'hard' ? 1 : 0); return s;
}
export function rect(s, i) { return { x: 16 + i % 3 * 84, y: 188 + Math.floor(i / 3) * 66, w: 78, h: 58 }; }
export function choose(s, i) {
  if (!active(s) || !Number.isInteger(i) || i < 0 || i >= s.count || s.rejected.includes(i)) return;
  s.focus = i; s.visualSelection = 0;
  if (i === s.target) { s.score = 300; s.status = 'won'; s.feedback = '真正王冠 +300'; }
  else { s.rejected.push(i); s.hp = Math.max(0, s.hp - (s.difficulty === 'hard' ? 15 : 10)); s.lock = 350; s.feedback = '假皇冠，扣血！'; if (!s.hp) s.status = 'lost'; }
}
export function point(s, x, y) { choose(s, Array.from({ length: s.count }, (_, i) => i).find(i => hit(rect(s, i), x, y))); }
export function input(s, action) { keyboard(s, action, s.count, 3, choose); }
export function update(s, dt) { tick(s, dt); if (!s.disposed && Number.isFinite(dt)) { s.visualTime = (s.visualTime || 0) + Math.max(0,dt); s.visualSelection = (s.visualSelection ?? 500) + Math.max(0,dt); } }
export function render(c, s, encounter) {
  frame(c, s, '加冕抉擇', '比較中央冰藍寶石闊度', 'crown', {encounter});
  const t=s.visualTime||0;
  // Capture the actual drawing transform, including the encounter's scaled canvas.
  if(c.canvas?.addEventListener && c.getTransform) {
    const matrix=c.getTransform(); c.canvas._prideCrownHover={s,matrix};
    if(!c.canvas._prideCrownListener){c.canvas._prideCrownListener=true;c.canvas.addEventListener('pointermove',e=>{
      const data=c.canvas._prideCrownHover;if(data.s.disposed)return;
      const r=c.canvas.getBoundingClientRect(),p=new DOMPoint((e.clientX-r.left)*c.canvas.width/r.width,(e.clientY-r.top)*c.canvas.height/r.height).matrixTransform(data.matrix.inverse());
      data.s.hover=Array.from({length:data.s.count},(_,i)=>i).find(i=>hit(rect(data.s,i),p.x,p.y));
    });c.canvas.addEventListener('pointerleave',()=>{if(c.canvas._prideCrownHover)c.canvas._prideCrownHover.s.hover=undefined;});}
  }
  c.save();palace(c,15,142,250,38,t);royalCrown(c,140,159,s.gemWidth+s.difference,0,.8);
  c.fillStyle='#dfc78c';c.font='9px sans-serif';c.fillText('御藏原石',65,174);c.fillText('辨認闊度',216,174);
  for (let i = 0; i < s.count; i++) {
    const r=rect(s,i),selected=s.focus===i,hover=s.hover===i,won=s.status==='won'&&i===s.target;
    c.globalAlpha=s.rejected.includes(i)?.25:1;
    palace(c,r.x,r.y,r.w,r.h,t);c.fillStyle=hover||selected?'#6b4d9e66':'#35234299';c.fillRect(r.x+4,r.y+4,r.w-8,r.h-8);
    c.strokeStyle=won?'#fff4c1':hover||selected?'#ffd700':'#936f48';c.lineWidth=hover||selected?2:1;c.strokeRect(r.x+2,r.y+2,r.w-4,r.h-4);
    const lift=won?Math.sin(Math.min(1,(s.visualSelection||0)/350)*Math.PI)*4:0;
    royalCrown(c,r.x+r.w/2,r.y+30-lift,s.gemWidth+(i===s.target?s.difference:0),i,.8);
    if(hover||selected||won)drawPrideFocus(c,{x:r.x+2,y:r.y+2,w:r.w-4,h:r.h-4},t,won);
    if(selected)avatar(c,r.x+r.w-10,r.y+10,'#ff5178');
    if(hover||selected){sparkle(c,r.x+8,r.y+8,2);sparkle(c,r.x+r.w-9,r.y+r.h-9,2);}
    if(won)burst(c,r.x+r.w/2,r.y+28,t);
  }
  c.restore();
}
