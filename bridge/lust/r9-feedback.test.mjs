import test from 'node:test';
import assert from 'node:assert/strict';
import {createLust,input,point,update,hurt,finishRound} from './engine.mjs';
import {danceTiming} from './arcade.mjs';
const advance=(s,ms)=>{for(let i=0;i<ms&&!s.scene&&!s.over;i+=20)update(s,Math.min(20,ms-i));};

test('dance long beats can be armed early, then sustain from the beat rather than the first press',()=>{
 for(const difficulty of ['normal','hard']){
  const s=createLust({scenario:'dance',difficulty}),n=s.round.steps.find(n=>n.hold);
  s.round.clock=n.at-800;input(s,n.key);assert.equal(n.armed,true);assert.equal(n.started,undefined);
  advance(s,780);assert.equal(n.hit,false);assert.equal(n.miss,false);assert.equal(n.held,0);
  advance(s,440);assert.equal(n.hit,true);assert.equal(n.miss,false);assert.equal(s.round.score,1);assert.equal(s.round.combo,1);assert.equal(s.round.lead,n.key);
 }
});
test('releasing an armed or sustained long beat never awards a free hit',()=>{
 const s=createLust({scenario:'dance'}),n=s.round.steps.find(n=>n.hold);s.round.clock=n.at-500;
 input(s,n.key);input(s,n.key,false);advance(s,750);assert.equal(n.miss,true);assert.equal(s.round.score,0);
 const t=createLust({scenario:'dance'}),tail=t.round.steps.find(n=>n.hold);t.round.clock=tail.at;
 input(t,tail.key);advance(t,160);input(t,tail.key,false);advance(t,20);assert.equal(tail.miss,true);assert.equal(tail.hit,false);
});
test('dance cue card touch uses the displayed direction, while bottom lanes retain their mapping',()=>{
 const s=createLust({scenario:'dance'});s.round.clock=1800;point(s,140,410);
 assert.equal(s.round.score,1);assert.equal(s.held.has('left'),true);
 input(s,'left',false);s.round.pointerKey=null;s.round.clock=s.round.steps[1].at;
 point(s,237,466);assert.equal(s.round.score,2);assert.equal(s.held.has('right'),true);
});
test('holding the wrong lane cannot satisfy a long beat',()=>{
 const s=createLust({scenario:'dance'}),n=s.round.steps.find(n=>n.hold);s.round.clock=n.at-500;
 input(s,n.key==='action'?'left':'action');advance(s,1200);assert.equal(n.hit,false);assert.equal(n.miss,true);
});
test('dance timing cue uses the actual Normal and Hard input windows',()=>{
 for(const difficulty of ['normal','hard']){
  const s=createLust({scenario:'dance',difficulty});s.round.clock=1660;
  assert.equal(danceTiming(s).ready,difficulty==='normal');
  input(s,'left');assert.equal(s.round.score,difficulty==='normal'?1:0);
 }
});
test('Hard collision and failed date damage rise slightly, with Normal unchanged',()=>{
 for(const difficulty of ['normal','hard']){
  const s=createLust({scenario:'bomb',difficulty});hurt(s,7);assert.equal(s.hp,difficulty==='hard'?91:93);
  const date=createLust({scenario:'claw',difficulty});finishRound(date,false);assert.equal(date.hp,difficulty==='hard'?85:88);
 }
});
test('Hard rhythm healing is earned every two successes; Normal heals each beat',()=>{
 for(const difficulty of ['normal','hard']){
  const s=createLust({scenario:'dance',difficulty});s.hp=50;
  for(const n of s.round.steps.slice(0,2)){s.round.clock=n.at;input(s,n.key);input(s,n.key,false);}
  assert.equal(s.round.score,2);assert.equal(s.hp,difficulty==='hard'?51:54);
 }
});
test('cat fish recovery and paused scene timing retain their existing rules',()=>{
 const s=createLust({scenario:'first-bridge',difficulty:'hard'});s.hp=50;s.catDue=10;update(s,20);
 assert.equal(s.hp,55);assert.equal(s.catTime,2000);
 const scene=createLust();const due=scene.catDue;update(scene,50);assert.equal(scene.catDue,due);
});
