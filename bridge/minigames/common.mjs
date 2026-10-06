import { prideHud } from '../pride-layout.mjs';
import { avatar, prideEmblem } from '../pride-visuals.mjs';
import { drawPrideBackdrop, drawPrideFocus } from '../pride-theme.mjs';
export const symbols = ['♛', '◈', '✦', '♜', '☾', '❖', '⚜', '✧'];
export function shuffle(values, random) {
  const out = [...values];
  for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
  return out;
}
export function state(options, normal, hard) {
  const difficulty = options.difficulty === 'hard' ? 'hard' : 'normal';
  return { elapsed: 0, difficulty, random: options.random || Math.random, timeLeft: difficulty === 'hard' ? hard : normal, score: 0, hp: 100, status: 'playing', focus: 0, selected: [], feedback: '', lock: 0, disposed: false };
}
export function update(s, dt) {
  if (s.disposed || s.status !== 'playing') return;
  dt = Number.isFinite(dt) ? Math.max(0, dt) : 0;
  s.elapsed += dt;
  s.timeLeft = Math.max(0, s.timeLeft - dt); s.lock = Math.max(0, s.lock - dt);
  if (!s.lock && s.mismatch) { s.selected = []; s.mismatch = false; }
  if (!s.timeLeft) s.status = 'lost';
}
export function dispose(s) { s.disposed = true; s.selected = []; }
export function active(s) { return !s.disposed && s.status === 'playing' && !s.lock; }
export function frame(c, s, title, hint, theme = 'mirror', labels = {}) {
  // Use fixed text bands regardless of the caller's inherited canvas baseline.
  c.textBaseline = 'alphabetic';
  drawPrideBackdrop(c, { time: s.elapsed, variant: theme });
  c.strokeStyle = '#d6b36e'; c.lineWidth = 1; c.strokeRect(6, 6, 268, 548);
  prideHud(c, { title, encounter: labels.encounter, status: `${Math.ceil(s.timeLeft / 1000)}秒 · ${s.score}分${labels.encounter?'':` · HP ${s.hp}`}`,
    detail: labels.status, hint, elapsed: s.elapsed, feedback: s.feedback,
    controls: s.status === 'won' ? '過關！' : s.status === 'lost' ? '挑戰失敗' : (labels.controls || '方向鍵移動 · 空白鍵揀選'),
    touch: s.status === 'playing' ? (labels.touch || '觸控直接揀') : '' });
}
export function tile(c, s, i, rect, text, flipped = false, theme = 'mirror') {
  const { x, y, w, h } = rect, selected=s.selected.includes(i), focused=s.focus===i, links=theme==='links';
  c.save();c.shadowColor='#0008';c.shadowBlur=5;c.shadowOffsetY=3;
  const g=c.createLinearGradient(x,y,x+w,y+h);g?.addColorStop(0,selected?'#80633d':'#50335f');g?.addColorStop(1,selected?'#493649':'#24162f');
  c.fillStyle=g||'#372247';c.beginPath();c.roundRect(x,y,w,h,5);c.fill();c.shadowBlur=0;
  c.lineWidth=focused?2:1;c.strokeStyle=focused?'#fff0c6':'#b89863';c.stroke();
  if(!links){c.strokeStyle='#addcff66';c.strokeRect(x+5,y+5,w-10,h-10);c.fillStyle='#d0edff22';c.fillRect(x+9,y+8,5,h-16);}
  c.save(); c.translate(x+w/2,y+h/2);if(flipped)c.scale(-1,1);
  c.fillStyle='#fff0c6';c.font=links?'24px serif':'28px serif';c.textAlign='center';c.textBaseline='middle';if(!prideEmblem(c,text,links?10:14))c.fillText(text,0,0);c.restore();
  if(focused || selected)drawPrideFocus(c,rect,s.elapsed,selected);
  if(focused)avatar(c,x+w-9,y+9,'#ff5178');c.restore();
}
export function hit(rect, x, y) { return x >= rect.x && x < rect.x + rect.w && y >= rect.y && y < rect.y + rect.h; }
export function keyboard(s, action, count, cols, choose) {
  if (!active(s)) return;
  const step = { left: -1, right: 1, up: -cols, down: cols }[action];
  if (step) s.focus = (s.focus + step + count) % count;
  if (action === 'action') choose(s, s.focus);
}
