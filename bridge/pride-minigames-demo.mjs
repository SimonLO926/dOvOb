import { setupDemoUI, DEMO_KEYS } from './pride-demo-ui.mjs';
import { PRIDE_SECOND_GAMES } from './pride-second.mjs';
import { playMirrorFeedback } from './pride-second-visuals.mjs';
let mirrorAudio;
function unlockMirrorAudio() { const Audio = window.AudioContext || window.webkitAudioContext; if (Audio) { mirrorAudio ||= new Audio(); mirrorAudio.resume().catch(() => {}); } }
window.addEventListener('pointerdown', unlockMirrorAudio);
window.addEventListener('keydown', unlockMirrorAudio);
import { PRIDE_MINIGAMES } from './minigames/index.mjs';
import { secondDemoModule } from './pride-second-demo.mjs';
const games = { ...PRIDE_MINIGAMES, ...Object.fromEntries(PRIDE_SECOND_GAMES.map(id => [id, secondDemoModule(id)])) };
const canvas = document.querySelector('canvas'), c = canvas.getContext('2d');
const game = document.querySelector('#game'), difficulty = document.querySelector('#difficulty'), boss = document.querySelector('#boss');
let module, state, previous;
const requested = new URLSearchParams(location.search).get('game');
if (games[requested]) game.value = requested;
function sendAction(action) { module.input(state, action); }
function restart() {
  if (state) module.dispose(state);
  module = games[game.value]; state = module.init({ difficulty: difficulty.value, bossHpRatio: Number(boss.value) }); previous = undefined; ui.present(); canvas.focus({preventScroll:true});
}
for (const control of [game, difficulty, boss]) control.addEventListener('change', restart);
document.querySelector('#restart').addEventListener('click', restart);
canvas.addEventListener('pointerdown', event => {
  if (!ui.playing()) return;
  if (event.isPrimary === false || event.button !== 0) return;
  event.preventDefault(); canvas.focus(); const r = canvas.getBoundingClientRect();
  module.point(state, (event.clientX - r.left) * 280 / r.width, (event.clientY - r.top) * 560 / r.height);
});
canvas.addEventListener('keydown', event => {
  const action = DEMO_KEYS[event.key];
  if (action && ui.playing()) { event.preventDefault(); state.held?.add(action); if (!event.repeat) module.input(state, action); }
});
window.addEventListener('keyup', event => state.held?.delete(DEMO_KEYS[event.key]));
window.addEventListener('blur', () => state.held?.clear());
// Hidden tabs pause the timer; pointerdown handles even taps shorter than one frame.
document.addEventListener('visibilitychange', () => { previous = undefined; state.held?.clear(); });
function animate(now) {
  if (!document.hidden) { if (ui.playing()) module.update(state, previous == null ? 0 : now - previous); module.render(c, state); playMirrorFeedback(state, mirrorAudio); ui.decorate(); previous = ui.playing() ? now : undefined; }
  requestAnimationFrame(animate);
}

const ui = setupDemoUI({canvas, context:c, game, getState:()=>state, sendAction, resetClock:()=>{previous=undefined;}});
restart(); requestAnimationFrame(animate);
