import test from 'node:test';
import assert from 'node:assert/strict';
import { createMirrorDuel, mirrorDuelInput, updateMirrorDuel } from './pride-finisher.mjs';
import { duelDecision } from './tools/pride-duel-driver.mjs';
const seeded=seed=>()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
const step=(m,n)=>{for(let i=0;i<n&&!m.result;i++)updateMirrorDuel(m,50);};
function charge(m){m.target={x:m.gate.x,y:m.gate.y};for(let n=0;n<100&&!m.gate.charged;n++)updateMirrorDuel(m,50);assert.ok(m.gate.charged);}

test('Both difficulties allow real bait-and-seal wins across 100 arena layouts without damage immunity',()=>{
 for(const difficulty of ['normal','hard'])for(let seed=1;seed<=100;seed++){
  const m=createMirrorDuel({difficulty,random:seeded(seed)}),posts=new Set();let activations=0;
  for(let n=0;n<900&&!m.result;n++){
   posts.add(`${m.gate.x},${m.gate.y}`);const d=duelDecision(m);
   if(d.target)m.target=d.target;
   if(d.action){assert.ok(m.gate.charged);assert.ok(mirrorDuelInput(m,'action'));activations++;}
   updateMirrorDuel(m,50);
  }
  assert.equal(m.result,'success',`${difficulty}/${seed}`);assert.equal(m.hits,3);assert.equal(activations,3);
  assert.ok(posts.size>=2);assert.ok(m.lives>0);assert.ok(m.elapsed<45000);
 }
});
test('The old automatic left-right strategy cannot seal the mirror without an action',()=>{
 for(const difficulty of ['normal','hard']){
  const m=createMirrorDuel({difficulty,random:seeded(1)});
  for(let i=0;i<900&&!m.result;i++){
   const phase=m.elapsed%3500;
   updateMirrorDuel(m,50,new Set(m.elapsed>=2500&&phase>=2500?['left']:m.elapsed>=3500&&phase<1000?['right']:[]));
  }
  assert.equal(m.hits,0);assert.equal(m.result,'failure');
 }
});
test('Even a charged gate does not automatically hit a delayed mirror walking over it',()=>{
 const m=createMirrorDuel({random:()=>0});charge(m);m.target={x:m.gate.x+75,y:m.gate.y};step(m,45);
 assert.ok(m.gate.charged);assert.equal(m.hits,0);assert.equal(m.result,null);
});
test('An early seal misses, consumes charge and blocks spam; it must be baited again',()=>{
 const m=createMirrorDuel({random:()=>0});charge(m);
 m.target={x:m.gate.x+75,y:m.gate.y};step(m,6);
 assert.equal(mirrorDuelInput(m,'action'),true);assert.equal(mirrorDuelInput(m,'action'),false);
 step(m,12);assert.equal(m.hits,0);assert.equal(m.gate.charged,false);
 assert.equal(mirrorDuelInput(m,'action'),false);
 step(m,26);assert.equal(mirrorDuelInput(m,'action'),false);
});
test('Activating a seal under the player costs a life, with protection against duplicate collisions',()=>{
 for(const difficulty of ['normal','hard']){
  const m=createMirrorDuel({difficulty,random:()=>0});charge(m);const before=m.lives;
  mirrorDuelInput(m,'action');step(m,3);assert.equal(m.lives,before-1);assert.equal(m.hits,0);assert.equal(m.result,null);
 }
});
test('Telegraphed mirror retaliation can defeat a stationary player in Normal and Hard',()=>{
 for(const difficulty of ['normal','hard']){
  const m=createMirrorDuel({difficulty,random:()=>0});step(m,47);assert.equal(m.attack,null);assert.equal(m.lives,difficulty==='hard'?2:3);
  step(m,2);assert.ok(m.attack);assert.equal(m.bullets.length,0);
  step(m,300);assert.equal(m.result,'failure');assert.equal(m.lives,0);assert.equal(m.hits,0);
 }
});
test('Timeout fails and result remains final despite later actions',()=>{
 const m=createMirrorDuel();m.elapsed=44950;assert.equal(updateMirrorDuel(m,50),'failure');
 assert.equal(mirrorDuelInput(m,'action'),false);assert.equal(updateMirrorDuel(m,50),'failure');assert.equal(m.elapsed,45000);
});
