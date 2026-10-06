import { prideArenaY } from './pride-layout.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import {createSecondDemo} from './pride-second-demo.mjs';
import {createPrideSecondRound,prideSecondInput,prideSecondPoint,updatePrideSecond,drawPrideSecond,PRIDE_COUNTER_RULES,UPGRADED_BASES} from './pride-second.mjs';
import {createPrideAttack,updatePrideAttack} from './pride-attacks.mjs';
import {CASINO_EFFECTS} from './audio.mjs';
import {playMirrorFeedback} from './pride-second-visuals.mjs';
import {createCrazy,skipCrazyCinematic,advanceCrazy,updateCrazy,inputCrazy,pointCrazy} from './crazy.mjs';

const modes=Object.keys(UPGRADED_BASES);
const tick=(s,dt=50,api={})=>updatePrideSecond(s,dt,api);
function encounter(mode,options={}){
 const s=createSecondDemo(mode,{random:()=>0,...options});tick(s,0);return s;
}
function shoot(s,pointer=false){
 const v=s.mini.counter.mirror;
 if(pointer)prideSecondPoint(s,v.x,prideArenaY(v.y));else prideSecondInput(s,'action');
 for(let i=0;i<25&&s.mini.counter.mirror;i++)tick(s);
 assert.equal(s.mini.counter.resolved,true,'A real player projectile must reach the mirror');
}

test('Each upgrade occasionally offers its matching mirror, exactly once per round for four seconds',()=>{
 for(const difficulty of ['normal','hard'])for(const [mode,name,color] of [
  ['pride-gaze-up','攻之鏡','#ff5369'],['pride-reflect-up','幻之鏡','#bb71ff'],['pride-crown-up','守之鏡','#53baff']
 ]){
  const s=encounter(mode,{difficulty}),k=s.mini.counter,v=k.mirror;
  assert.equal(v.name,name);assert.equal(v.color,color);assert.equal(v.until-s.mini.clock,4000);
  assert.equal(s.events.at(-1).key,'prideMirrorAppearSound');
  for(let i=0;i<79;i++)tick(s);assert.ok(k.mirror);
  tick(s);assert.equal(k.mirror,null);assert.equal(k.resolved,false);
  for(let i=0;i<280;i++)tick(s);
  assert.ok(s.mini.wave>1);assert.equal(k.mirror,null);
  assert.equal(s.events.filter(e=>e.key==='prideMirrorAppearSound').length,1);
 }
 for(const roll of [0,PRIDE_COUNTER_RULES.chance-Number.EPSILON,PRIDE_COUNTER_RULES.chance,.99]){
  const s=encounter('pride-gaze-up',{random:()=>roll});
  assert.equal(Boolean(s.mini.counter.mirror),roll<PRIDE_COUNTER_RULES.chance);
 }
});

test('Pointer and A fire at the mirror without consuming movement; crown A still jumps',()=>{
 for(const difficulty of ['normal','hard'])for(const mode of modes)for(const pointer of [false,true]){
  const s=encounter(mode,{difficulty}),m=s.mini;
  prideSecondPoint(s,40,prideArenaY(470));assert.deepEqual(m.target,{x:40,y:470});
  m.target=null;const v=m.counter.mirror;
  if(pointer)prideSecondPoint(s,v.x,prideArenaY(v.y));else prideSecondInput(s,'action');
  assert.equal(m.target,null);assert.equal(m.counter.shots.length,1);
  prideSecondInput(s,'action');assert.equal(m.counter.shots.length,1,'Shooting respects the cooldown');
  if(!pointer&&mode==='pride-crown-up')assert.equal(m.jump,650);
  for(let i=0;i<25&&!m.counter.resolved;i++)tick(s);
  assert.ok(m.counter.resolved);assert.equal(m.counter.mirror,null);
  assert.equal(m.counter.particles.length,24);assert.equal(s.events.at(-1).key,'prideMirrorBreakSound');
 }
});

test('Red halves real beam collision damage and blue shatters waves then halves subsequent collision damage',()=>{
 for(const difficulty of ['normal','hard'])for(const mode of ['pride-gaze-up','pride-crown-up']){
  for(const hit of [false,true]){
   const s=encounter(mode,{difficulty}),m=s.mini;m.spawn=99999;
   if(hit){
    shoot(s);
    if(mode==='pride-crown-up')assert.equal(m.hazards.length,0);
    assert.ok(m.counter.feedback.text.includes('傷害減半'));
   }
   if(mode==='pride-gaze-up')m.hazards=[{kind:'gaze',age:m.rules.track+m.rules.warn+325,locked:true,ox:140,oy:170,sweep:1,index:0,angle:Math.atan2(m.y-170,m.x-140)}];
   else {m.jump=0;m.hazards=[{kind:'crown',age:m.rules.crownWarn+300,x:m.x-.3*m.rules.speed,y:m.y,gap:Math.PI}];}
   const amounts=[];tick(s,0,{hurt:(_,amount)=>amounts.push(amount)});
   assert.ok(amounts.length);assert.ok(amounts.every(n=>n===(hit?6:12)));
  }
 }
});

test('Purple removes fake mirrors and enemy shards, revealing the real mirror across later waves',()=>{
 const s=encounter('pride-reflect-up'),m=s.mini;m.spawn=99999;
 m.bullets=[{x:260,y:190,vx:0,vy:0,enemy:true}];shoot(s);
 assert.equal(m.mirrors.length,1);assert.ok(m.mirrors[0].designated);assert.equal(m.bullets.length,0);
 let damage=0;
 for(let n=0;n<3;n++){
  m.fire=0;prideSecondInput(s,'action');
  for(let i=0;i<15;i++)tick(s,50,{hit:(_,amount)=>damage+=amount});
 }
 assert.equal(damage,18,'The revealed real mirror retains the original shooting objective');
 m.spawn=0;tick(s,0);assert.equal(m.mirrors.length,1);assert.ok(m.mirrors[0].designated);
 assert.equal(s.events.filter(e=>e.key==='prideMirrorAppearSound').length,1);
});

test('Misses, ordinary attack bullets and shots reaching the expiry boundary do not activate a counter',()=>{
 for(const mode of modes){
  const s=encounter(mode),m=s.mini,k=m.counter,v=k.mirror;m.spawn=99999;
  prideSecondPoint(s,v.x+PRIDE_COUNTER_RULES.radius+1,v.y);
  assert.equal(k.shots.length,0);assert.ok(m.target);m.target=null;
  m.bullets=[{x:v.x,y:v.y,vx:0,vy:0,enemy:true}];tick(s,0);assert.equal(k.resolved,false);
  k.shots=[{x:20,y:470,vx:0,vy:0}];tick(s);assert.equal(k.resolved,false);
  m.clock=v.until-1;k.shots=[{x:v.x,y:v.y,vx:0,vy:0}];tick(s,1);
  assert.equal(k.mirror,null);assert.equal(k.resolved,false);assert.equal(k.shots.length,0);
  assert.ok(!s.events.some(e=>e.key==='prideMirrorBreakSound'));
 }
});

test('Unused opportunities leave the original upgraded attack intact; counters reset without changing shared mirror health',()=>{
 for(const mode of modes){
  const s=encounter(mode),m=s.mini;
  const original={mini:createPrideAttack(UPGRADED_BASES[mode],{difficulty:s.difficulty,bossHpRatio:1,upgraded:true}),held:new Set(),events:[]};
  updatePrideAttack(original,0);
  for(let i=0;i<160;i++){tick(s);updatePrideAttack(original,50);}
  for(const key of ['hazards','bullets','mirrors','wave','spawn','clock'])assert.deepEqual(m[key],original.mini[key]);
  s.mini=createPrideSecondRound(s);tick(s,0);
  const health=JSON.stringify(s.mirrorWorld.mirrors),bonuses=s.mirrorWorld.bonuses;shoot(s);
  assert.equal(JSON.stringify(s.mirrorWorld.mirrors),health);assert.equal(s.mirrorWorld.bonuses,bonuses);
  s.mini=createPrideSecondRound(s);assert.equal(s.mini.counter.resolved,false);assert.equal(s.mini.counter.appeared,false);
 }
});

function canvas(){
 const calls=[];
 const c=new Proxy({}, {get:(o,k)=>o[k]??((...args)=>{calls.push([k,...args]);if(k==='createLinearGradient')return {addColorStop(){}};}),set:(o,k,v)=>{o[k]=v;calls.push([k,v]);return true;}});
 return {c,calls};
}
test('Mirrors show glow, arrows, countdown and clear hit feedback, including reduced motion',()=>{
 for(const mode of modes)for(const reduced of [false,true]){
  const s=encounter(mode),v=s.mini.counter.mirror,{c,calls}=canvas();drawPrideSecond(c,s,reduced);
  assert.ok(calls.some(a=>a[0]==='shadowColor'&&a[1]===v.color));
  assert.ok(calls.some(a=>a[0]==='shadowBlur'&&a[1]>=20));
  assert.ok(calls.some(a=>a[0]==='moveTo'&&a[1]===-8));
  assert.ok(calls.some(a=>a[0]==='fillText'&&a[1].includes(v.name)));
  assert.ok(calls.some(a=>a[0]==='fillText'&&a[1].includes('反攻 · 4秒')));
  shoot(s);const hit=canvas();drawPrideSecond(hit.c,s,reduced);
  assert.ok(hit.calls.some(a=>a[0]==='fillText'&&a[1]===v.effect));
  assert.ok(hit.calls.some(a=>a[0]==='fillRect'&&a[3]===4&&a[4]===7));
 }
});

test('Appearance and hit events produce distinct audible feedback in both production and demo routing',()=>{
 assert.equal(CASINO_EFFECTS.prideMirrorAppearSound,'laser');
 const starts=[],ends=[];
 const audio={currentTime:0,destination:{},createOscillator:()=>({frequency:{setValueAtTime:n=>starts.push(n),exponentialRampToValueAtTime:n=>ends.push(n)},connect(){},start(){},stop(){}}),createGain:()=>({gain:{setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){}})};
 const s=encounter('pride-gaze-up');playMirrorFeedback(s,audio);shoot(s);playMirrorFeedback(s,audio);
 assert.deepEqual(starts,[880,700]);assert.deepEqual(ends,[1320,90]);assert.equal(s.events.length,0);
});

test('Live second-form encounters route keyboard and pointer counter shots through the Crazy lifecycle',()=>{
 for(const mode of modes)for(const pointer of [false,true]){
  const s=createCrazy({sin:'pride',difficulty:'normal',random:()=>0});
  s.cutscene={kind:'transform',time:1000};s.prideDuelCleared=true;skipCrazyCinematic(s);
  advanceCrazy(s,mode);s.actionReady=true;updateCrazy(s,0);
  const v=s.mini.counter.mirror;assert.ok(v);
  if(pointer)pointCrazy(s,v.x,prideArenaY(v.y));else inputCrazy(s,'action');
  for(let i=0;i<25&&!s.mini.counter.resolved;i++)updateCrazy(s,50);
  assert.equal(s.form,2);assert.equal(s.mode,mode);assert.ok(s.mini.counter.resolved);
  assert.equal(s.events.filter(e=>e.key==='prideMirrorAppearSound').length,1);
 }
});
