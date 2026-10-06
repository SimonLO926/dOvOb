import { setupDemoUI, DEMO_KEYS } from './pride-demo-ui.mjs';
import { playMirrorFeedback } from './pride-second-visuals.mjs';
let mirrorAudio;
function unlockMirrorAudio() { const Audio = window.AudioContext || window.webkitAudioContext; if (Audio) { mirrorAudio ||= new Audio(); mirrorAudio.resume().catch(() => {}); } }
window.addEventListener('pointerdown', unlockMirrorAudio);
window.addEventListener('keydown', unlockMirrorAudio);
import { PRIDE_SECOND_ATTACKS } from './pride-second.mjs';
import { createSecondDemo, inputSecondDemo, pointSecondDemo, updateSecondDemo, drawSecondDemo } from './pride-second-demo.mjs';
import {createPrideAttack,pridePoint,prideInput,updatePrideAttack,drawPrideAttack} from './pride-attacks.mjs';
import {createMirrorDuel,mirrorDuelInput,mirrorDuelPoint,updateMirrorDuel,drawMirrorDuel,finishPrideFinisher} from './pride-finisher.mjs';
const canvas=document.querySelector('canvas'),c=canvas.getContext('2d'),game=document.querySelector('#game'),difficulty=document.querySelector('#difficulty'),ratio=document.querySelector('#ratio'),status=document.querySelector('#status');let s,previous,duelView;
const second=()=>PRIDE_SECOND_ATTACKS.includes(game.value);
const requested=new URLSearchParams(location.search).get('game');
if([...game.options].some(option=>option.value===requested))game.value=requested;
const duel=()=>game.value==='pride-mirror-duel';
function sendAction(action){if(second())inputSecondDemo(s,action);else if(duel())mirrorDuelInput(s.mini,action);else prideInput(s,action);}
function restart(){s={mode:game.value,held:new Set(),events:[],hp:100,bossHp:100,stats:{damageTaken:0},difficulty:difficulty.value};if(second()){s=createSecondDemo(game.value,{difficulty:difficulty.value,bossHpRatio:Number(ratio.value)});}else s.mini=duel()?createMirrorDuel({difficulty:s.difficulty}):createPrideAttack(s.mode,{difficulty:s.difficulty,bossHpRatio:Number(ratio.value)});duelView=s.mini;previous=null;protection=0;ui.present();canvas.focus({preventScroll:true});}
for(const el of [game,difficulty,ratio])el.addEventListener('change',restart);document.querySelector('#restart').onclick=restart;
const key=DEMO_KEYS;
canvas.addEventListener('keydown',e=>{const a=key[e.key];if(a&&ui.playing()){e.preventDefault();s.held.add(a);if(!e.repeat){if(second())inputSecondDemo(s,a);else if(duel())mirrorDuelInput(s.mini,a);else prideInput(s,a);}}});window.addEventListener('keyup',e=>s.held.delete(key[e.key]));window.addEventListener('blur',()=>s.held.clear());
function point(e){if(!ui.playing())return;if(e.isPrimary===false)return;e.preventDefault();const r=canvas.getBoundingClientRect(),x=(e.clientX-r.left)*280/r.width,y=(e.clientY-r.top)*560/r.height;if(second())pointSecondDemo(s,x,y);else if(duel())mirrorDuelPoint(s.mini,x,y);else pridePoint(s,x,y);}
canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);canvas.focus();point(e);});canvas.addEventListener('pointermove',e=>{if(e.buttons)point(e);});document.addEventListener('visibilitychange',()=>{previous=null;s.held.clear();});
let protection=0;function hurt(amount){if(protection)return;s.hp=Math.max(0,s.hp-amount);protection=650;}
function frame(now){if(!document.hidden){const dt=previous==null?0:Math.min(50,now-previous);previous=now;protection=Math.max(0,protection-dt);c.clearRect(0,0,280,560);if(second()){if(ui.playing())updateSecondDemo(s,dt);drawSecondDemo(c,s);playMirrorFeedback(s,mirrorAudio);}else if(duel()){const result=ui.playing()?updateMirrorDuel(duelView,dt,s.held):null;drawMirrorDuel(c,duelView);if(result&&!s.prideDuelResult)finishPrideFinisher(s,result);}else if(s.mini){if(ui.playing()&&!s.over)updatePrideAttack(s,dt,{hurt:(_,n)=>hurt(n),hit:(_,n)=>s.bossHp=Math.max(0,s.bossHp-n)});drawPrideAttack(c,s.mini);playMirrorFeedback(s,mirrorAudio);}ui.decorate();if(!ui.playing())previous=null;status.textContent=`HP ${s.hp} · Boss ${s.bossHp} · ${s.result||s.prideDuelResult?.result||''}`;}requestAnimationFrame(frame);}

const ui=setupDemoUI({canvas, context:c, game, getState:()=>s, sendAction, resetClock:()=>{previous=null;}});
restart();requestAnimationFrame(frame);
