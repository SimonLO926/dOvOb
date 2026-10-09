import { endStroke } from './lore-games.mjs';
import { touchControlsEnabled } from '../touch-controls.mjs?v=1.2.32';
import { createEnvy, SCENARIOS, envyInput, envyPoint, updateEnvy, continueScene, retryCapture, finishEnvy } from './engine.mjs?v=1.2.31';
import { createCampaignRecorder, envyUnlocked } from './campaign.mjs?v=1.2.31';
import { filmingEnabled } from '../filming.mjs?v=1.2.31';
import { canvasHeight, drawEnvy } from './view.mjs';
import { drawFrame, loadArt, images } from './art.mjs';
import { endingPresentation, drawEndingPage } from './ending.mjs';
import { puzzleCountdownCue, playCountdownTone } from './countdown.mjs';
import { createEnvyMusic, envyTrack } from './music.mjs';
import { ATTACKS, gridLayout } from './rounds.mjs';
import { createCombatEffects, resetCombatEffects, updateCombatEffects, drawCombatEffects, createCombatOverlay, combatLayout } from '../combat-effects.mjs?v=1.2.31';

const $=selector=>document.querySelector(selector);
const campaign=document.body.dataset.envyCampaign==='true';
let campaignStorage;try{campaignStorage=localStorage;}catch{}
const recordCampaign=createCampaignRecorder(campaignStorage);
function returnToBosses(){location.assign(new URL('./index.html?bosses=1&sin=envy',location.href));}
const board=$('#envy-board'),context=board.getContext('2d'),frame=$('#boss-frame'),frameContext=frame.getContext('2d'),wrap=$('#board-wrap');
const combatEffects=createCombatEffects(),combatOverlay=createCombatOverlay(board,'envy-combat-effects'),combatContext=combatOverlay.getContext('2d');
let encounter=null,paused=true,last=performance.now(),hitTime=0,lastHp=100,boardPointer=null;
let selected='full',difficulty='normal',audio=null,lastMode='';
let endingKey='',catLayoutKey='';
const preferences={danger:'warning',reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,sound:true,music:.7};
let mainSettings={};try{mainSettings=JSON.parse(campaignStorage?.getItem('bridge-settings')||'{}')||{};}catch{}
preferences.touch=mainSettings.touch||'auto';
let sfxVolume=1;
if(campaign){
  const saved=mainSettings;
  const volume=(value,fallback=.7)=>Number.isFinite(Number(value))?Math.max(0,Math.min(1,Number(value))):fallback;
  preferences.danger=saved.dangerEffect==='shake'?'shake':'warning';
  preferences.music=volume(saved.bgmVolume??saved.volume??.7);
  sfxVolume=volume(saved.sfxVolume??saved.volume??.7);preferences.sound=sfxVolume>0;
  const requested=new URLSearchParams(location.search).get('difficulty');
  difficulty=(requested??saved.crazyDifficulty)==='hard'?'hard':'normal';
}
function savePreferences(){
  if(!campaign||filmingEnabled())return;
  try{
    const saved=JSON.parse(localStorage.getItem('bridge-settings')||'{}');
    Object.assign(saved,{dangerEffect:preferences.danger,bgmVolume:preferences.music,sfxVolume:preferences.sound?sfxVolume:0,crazyDifficulty:difficulty});
    localStorage.setItem('bridge-settings',JSON.stringify(saved));
  }catch{}
}
const music=createEnvyMusic(()=>preferences.music);
$('#reduce').checked=preferences.reduced;
$('#danger').value=preferences.danger;$('#sound').checked=preferences.sound;
$('#music-volume').value=Math.round(preferences.music*100);$('#music-level').textContent=$('#music-volume').value+'%';
Object.defineProperty(window,campaign?'envyGame':'envyPreview',{get:()=>encounter});
const select=$('#scenario');
for(const option of SCENARIOS){const el=document.createElement('option');el.value=option.id;el.textContent=option.label;select.append(el);}
function tone(frequency=180,duration=.12,type='sine',volume=.045){
  if(!preferences.sound||!audio)return;
  const oscillator=audio.createOscillator(),gain=audio.createGain(),time=audio.currentTime;
  oscillator.type=type;oscillator.frequency.setValueAtTime(frequency,time);gain.gain.setValueAtTime(.001,time);gain.gain.exponentialRampToValueAtTime(Math.max(.001,volume*sfxVolume),time+.025);gain.gain.exponentialRampToValueAtTime(.001,time+duration);
  oscillator.connect(gain);gain.connect(audio.destination);oscillator.start(time);oscillator.stop(time+duration+.025);
}
function unlockAudio(){
  music.unlock('envy');
  if(!preferences.sound)return;
  try{audio??=new (window.AudioContext||window.webkitAudioContext)();audio.resume().catch(()=>{});}catch{}
}
function stopHeld(){if(encounter){for(const action of [...encounter.held])envyInput(encounter,action,false);endStroke(encounter.round);}boardPointer=null;}
function fit(){
  const touch=touchControlsEnabled(preferences.touch),pads=$('.pads');
  if(pads.hidden===touch)stopHeld();
  pads.hidden=!touch;document.body.classList.toggle('touch',touch);document.body.classList.toggle('desktop',!touch);
  const w=innerWidth,h=window.visualViewport?.height||innerHeight,wide=w>h&&h<620;
  document.body.classList.toggle('wide',wide);
  const world=canvasHeight(encounter),available=wide?h-6:!touch?h-152:h-254;
  const maxWidth=wide?Math.min(310,w*.43):Math.min(310,w-62);
  const height=Math.max(100,Math.min(available,maxWidth*world/280));
  wrap.style.width=`${height*280/world}px`;wrap.style.height=`${height}px`;
  if(board.height!==world){board.height=world;frame.height=world;}
}
function controls(){
  if(!encounter)return;
  const mode=encounter.mode,bridge=mode==='bridge';
  const modal=encounter.round.modal;
  const labels={window:encounter.round.reveal?'下一窗':'擦拭','eye-room':({code:'開盒',mask:'放入',painting:'轉畫',clue:'返回'})[modal]||'查看',difference:'選擇',tarot:encounter.round.revealed?'收牌':'翻牌',pack:encounter.round.revealed?'收牌':'拆包',territory:'衝刺',capture:'捕捉',chase:'跳躍',steal:'打斷','steal-up':'打斷',net:'擊碎'};
  $('#action .pad-label').textContent=bridge?'落':labels[mode]||'—';$('#action').disabled=!bridge&&!labels[mode]||!!encounter.scene;
  $('#alt .pad-label').textContent=bridge?'留':mode==='rolling'?'回一步':mode==='capture'?'衝刺':mode==='eye-room'?'返回':'—';$('#alt').disabled=(!bridge&&!['rolling','capture','eye-room'].includes(mode))||!!encounter.scene;
  $('#up .pad-label').textContent=bridge?'右旋':'上移';$('#up svg').style.display=bridge?'':'none';$('#rotate-left').hidden=!bridge;$('#up').setAttribute('aria-label',bridge?'旋轉':'向上');$('#down .pad-label').textContent=bridge?'降':'下移';
  if(mode==='eye-room'){
    $('#up .pad-label').textContent=modal==='code'?'加數':modal==='mask'?'選眼':'選物';
    $('#down .pad-label').textContent=modal==='code'?'減數':modal==='mask'?'選眼':'選物';
    $('#up').setAttribute('aria-label',$('#up .pad-label').textContent);
    $('#down').setAttribute('aria-label',$('#down .pad-label').textContent);
  }else $('#down').setAttribute('aria-label',bridge?'緩降':'向下');
  for(const id of['left','right','up','down','rotate-left'])$('#'+id).disabled=!!encounter.scene||['tarot','pack'].includes(mode);
}
function presentation(){
  const visible=!!encounter&&$('#launcher').hidden;
  const ending=visible?endingPresentation(encounter):null;
  const screen=$('#ending-screen'),actions=$('#scene-actions');
  const wasHidden=screen.hidden;
  screen.hidden=!ending;document.body.classList.toggle('ending-page',!!ending);
  const parent=ending?$('#ending-footer'):wrap;
  if(actions.parentNode!==parent)parent.append(actions);
  if(ending&&wasHidden)screen.focus({preventScroll:true});
  if(ending){
    const w=innerWidth,h=window.visualViewport?.height||innerHeight,dpr=Math.min(2,devicePixelRatio||1);
    screen.style.height=`${h}px`;
    const art=$('#ending-art'),key=`${encounter.scene.kind}:${ending.index}:${w}:${h}:${dpr}:${images.endings?.naturalWidth||0}`;
    $('#ending-title').textContent=ending.title;$('#ending-caption').textContent=ending.caption;
    if(key!==endingKey){
      endingKey=key;art.width=Math.round(w*dpr);art.height=Math.round(h*dpr);
      const c=art.getContext('2d');c.setTransform(dpr,0,0,dpr,0,0);drawEndingPage(c,images.endings,ending.index,w,h);
    }
  }else endingKey='';
  const cat=$('#envy-cat');cat.hidden=!visible;cat.classList.toggle('gift',encounter?.catTime>0);
  if(!visible){catLayoutKey='';return;}
  const w=innerWidth,h=window.visualViewport?.height||innerHeight,ratio=images.cat?.naturalWidth/images.cat?.naturalHeight||1.8;
  const touch=document.body.classList.contains('touch');
  const layoutKey=`${w}:${h}:${touch}:${encounter.mode}:${ending?.index??''}:${ratio}`;
  if(layoutKey===catLayoutKey)return;catLayoutKey=layoutKey;
  let width=w<620?110:130,x,y;
  if(ending){
    width=w<620?110:130;x=16;y=$('#ending-footer').getBoundingClientRect().top-width/ratio-12;
  }else if(!touch){
    x=document.body.classList.contains('wide')?20:(w-width)/2;y=h-width/ratio-12;
  }else if(document.body.classList.contains('wide')){
    const top=Math.min(...[...document.querySelectorAll('.move-pads button')].filter(b=>!b.hidden).map(b=>b.getBoundingClientRect().top));
    width=120;x=20;y=top-width/ratio-26;
  }else{
    const boardRect=wrap.getBoundingClientRect(),left=$('#right').getBoundingClientRect(),up=$('#up').getBoundingClientRect();
    const lo=left.right+4,hi=up.left-4;
    if(hi-lo>=width){x=Math.max(lo,Math.min(hi-width,(w-width)/2));y=boardRect.bottom+4;}
    else {
      // Extra-narrow devices use the clear strip above the control buttons.
      const gap=Math.min(left.top,up.top)-boardRect.bottom-8;
      width=Math.min(width,Math.max(52,gap*ratio));x=(w-width)/2;y=boardRect.bottom+4;
    }
  }
  cat.style.width=`${width}px`;cat.style.left=`${Math.max(4,Math.min(w-width-4,x))}px`;
  cat.style.top=`${Math.max(48,Math.min(h-width/ratio-4,y))}px`;
}
function start(){
  if(campaign&&!envyUnlocked(campaignStorage)){returnToBosses();return;}
  music.reset();unlockAudio();encounter=createEnvy({scenario:campaign?'full':selected,difficulty,preview:!campaign,filming:campaign&&filmingEnabled()});lastHp=100;hitTime=0;lastMode='';paused=false;last=performance.now();
  resetCombatEffects(combatEffects,encounter);
  for(const id of['launcher','menu','album-panel'])$('#'+id).hidden=true;fit();controls();
}
$('#launch-form').addEventListener('submit',event=>{event.preventDefault();selected=select.value;difficulty=$('#difficulty').value;start();});
function openMenu(){if(!encounter)return;paused=true;music.pause();stopHeld();$('#menu').hidden=false;}
function resume(){unlockAudio();paused=false;$('#menu').hidden=true;$('#album-panel').hidden=true;last=performance.now();}
function choose(){stopHeld();paused=true;music.pause();if(campaign){returnToBosses();return;}$('#menu').hidden=true;$('#album-panel').hidden=true;$('#launcher').hidden=false;}
$('#menu-button').addEventListener('click',openMenu);$('#resume').addEventListener('click',resume);$('#menu-return').addEventListener('click',resume);$('#retry').addEventListener('click',start);$('#pick').addEventListener('click',choose);
$('#danger').addEventListener('change',event=>{preferences.danger=event.target.value;savePreferences();});$('#reduce').addEventListener('change',event=>preferences.reduced=event.target.checked);$('#sound').addEventListener('change',event=>{preferences.sound=event.target.checked;if(preferences.sound){if(!sfxVolume)sfxVolume=.7;unlockAudio();}savePreferences();});
$('#music-volume').addEventListener('input',event=>{preferences.music=Number(event.target.value)/100;$('#music-level').textContent=event.target.value+'%';if(preferences.music>0)unlockAudio();savePreferences();});
$('#album').addEventListener('click',()=>{
  $('#menu').hidden=true;$('#album-panel').hidden=false;
  const collection=encounter?.collection||[];
  $('#album-content').textContent=collection.length?['C','U','R','SR','SAR'].map(r=>`${r} · ${collection.filter(c=>c.rarity===r).length} 張`).join('　／　'):'還沒有秘藏，試試多眼龍的卡包回合。';
});$('#album-back').addEventListener('click',()=>{$('#album-panel').hidden=true;$('#menu').hidden=false;});
$('#scene-pick').addEventListener('click',choose);$('#scene-retry').addEventListener('click',()=>{if(encounter?.scene?.kind==='capture-retry'){retryCapture(encounter);fit();}else start();});
$('#scene-continue').addEventListener('click',()=>{unlockAudio();continueScene(encounter);fit();controls();});
$('#scene-finish').addEventListener('click',()=>finishEnvy(encounter));$('#bonus-finish').addEventListener('click',()=>{finishEnvy(encounter);resume();});
const actions={left:'left',right:'right',up:'up',down:'down',alt:'alt',action:'action','rotate-left':'rotateLeft'};
for(const[id,action]of Object.entries(actions)){
  const button=$('#'+id);
  button.addEventListener('pointerdown',event=>{if(paused||!encounter)return;event.preventDefault();button.setPointerCapture(event.pointerId);unlockAudio();envyInput(encounter,action,true,'touch');});
  button.addEventListener('pointermove',event=>{
    if(!button.hasPointerCapture(event.pointerId))return;
    const r=button.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom){
      if(encounter)envyInput(encounter,action,false);button.releasePointerCapture(event.pointerId);
    }
  });
  for(const type of['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,event=>{if(encounter)envyInput(encounter,action,false);});
}
const keys={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down',' ':'action',Enter:'action',c:'alt',C:'alt',Shift:'alt',x:'up',X:'up',z:'rotateLeft',Z:'rotateLeft'};
window.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&encounter){event.preventDefault();if(paused&&$('#launcher').hidden)resume();else openMenu();return;}
  if(!$('#ending-screen').hidden&&event.target instanceof HTMLButtonElement&&[' ','Enter'].includes(event.key))return;
  if(!encounter||paused||!keys[event.key])return;event.preventDefault();unlockAudio();envyInput(encounter,keys[event.key]);
});window.addEventListener('keyup',event=>{if(encounter&&keys[event.key])envyInput(encounter,keys[event.key],false);});
window.addEventListener('blur',()=>{stopHeld();if(encounter&&!encounter.over)openMenu();});document.addEventListener('visibilitychange',()=>{if(document.hidden){stopHeld();if(encounter&&!encounter.over)openMenu();}});
function point(event){const r=board.getBoundingClientRect();envyPoint(encounter,(event.clientX-r.left)*280/r.width,(event.clientY-r.top)*board.height/r.height);}
board.addEventListener('pointerdown',event=>{if(paused||!encounter||boardPointer!==null)return;event.preventDefault();unlockAudio();boardPointer=event.pointerId;board.setPointerCapture(event.pointerId);point(event);});
board.addEventListener('pointermove',event=>{if(paused||!encounter||boardPointer!==event.pointerId)return;event.preventDefault();if(ATTACKS.includes(encounter.mode)||['territory','pellets','capture','window'].includes(encounter.mode))point(event);});
for(const type of ['pointerup','pointercancel','lostpointercapture'])board.addEventListener(type,event=>{if(boardPointer===event.pointerId){boardPointer=null;endStroke(encounter?.round);}});
board.addEventListener('dblclick',event=>event.preventDefault());for(const type of['gesturestart','gesturechange','gestureend'])document.addEventListener(type,event=>{if(!paused)event.preventDefault();},{passive:false});
for(const target of[board,$('.pads')])target.addEventListener('touchstart',event=>{if(event.touches.length>1)event.preventDefault();},{passive:false});
window.addEventListener('resize',fit);window.visualViewport?.addEventListener('resize',fit);
for(const query of ['(pointer: coarse)','(hover: none)'])matchMedia(query).addEventListener('change',fit);
window.addEventListener('storage',event=>{
  if(event.key!=='bridge-settings')return;
  try{preferences.touch=JSON.parse(event.newValue||'{}')?.touch||'auto';fit();}catch{}
});
loadArt().then(()=>fit());document.fonts?.ready.then(()=>{catLayoutKey='';});fit();
function tick(now){
  const dt=Math.min(50,Math.max(0,now-last));last=now;
  if(encounter){
    if(!paused){
      const timedRound=encounter.round,beforeClock=timedRound?.clock;
      updateEnvy(encounter,dt);if(encounter.hp<lastHp){hitTime=350;tone(80,.13,'triangle');}else if(encounter.hp>lastHp)tone(580,.15);
      const cue=puzzleCountdownCue(timedRound,beforeClock);
      if(cue&&preferences.sound&&audio){const gain=audio.createGain();gain.gain.value=sfxVolume;gain.connect(audio.destination);playCountdownTone(audio,gain,cue);setTimeout(()=>gain.disconnect(),1000);}
      lastHp=encounter.hp;hitTime=Math.max(0,hitTime-dt);
      music.select(envyTrack(encounter));music.tick(dt);
    }
    if(campaign)recordCampaign(encounter);
    let player;
    const m=encounter.round;
    if(['territory','pellets','pupil','capture'].includes(encounter.mode)){
      const g=gridLayout(m);player={x:g.x+(m.cx-(g.offsetX||0)+.5)*g.cell,y:g.y+(m.cy-(g.offsetY||0)+.5)*g.cell};
    }else if(encounter.mode==='chase')player={x:156,y:m.y};
    updateCombatEffects(combatEffects,encounter,dt,{paused,visible:$('#launcher').hidden,reducedMotion:preferences.reduced,layout:combatLayout(encounter,{player})});
    if(lastMode!==encounter.mode){lastMode=encounter.mode;fit();tone(240,.14,'triangle');}
    controls();const danger=encounter.hp<=25||hitTime>0;
    wrap.classList.toggle('danger',danger&&preferences.danger==='warning');wrap.classList.toggle('shake',danger&&preferences.danger==='shake'&&!preferences.reduced);
    drawFrame(frameContext,encounter,{reduced:preferences.reduced});drawEnvy(context,encounter,{reduced:preferences.reduced});
    if(combatOverlay.height!==board.height)combatOverlay.height=board.height;
    if(combatOverlay.width!==board.width)combatOverlay.width=board.width;
    drawCombatEffects(combatContext,combatEffects,{reducedMotion:preferences.reduced});
    const kind=encounter.scene?.kind,canContinue=kind&&!['victory','lost','capture-retry'].includes(kind);
    $('#scene-actions').hidden=!kind;$('#scene-continue').hidden=!canContinue;$('#scene-continue').disabled=encounter.scene?.time<700;
    $('#scene-retry').hidden=!['victory','lost','round-result','capture-retry'].includes(kind);
    $('#scene-finish').hidden=!['worm-reveal','capture-retry'].includes(kind);$('#bonus-finish').hidden=!encounter.bossDefeated||encounter.over;
    $('#scene-continue').textContent=kind==='round-result'?'繼續挑戰':'繼續';
    presentation();
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
if(campaign)start();
