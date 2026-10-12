import test from 'node:test';
import assert from 'node:assert/strict';
import {createLust,input,point,update,hitBoss,GAMES1} from './engine.mjs';
import {timingState} from './arcade.mjs';
const advance=(s,ms)=>{for(let i=0;i<ms&&!s.scene&&!s.over;i+=20)update(s,Math.min(20,ms-i));};
test('real serves and directional returns can win doubles without fabricated points',()=>{
 for(const difficulty of ['normal','hard']){const s=createLust({scenario:'tennis',difficulty,random:()=>.5}),m=s.round;let strokes=0,returns=0;
  for(let i=0;i<2000&&!s.scene;i++){
   if(m.serve){input(s,'action');input(s,'action',false);strokes++;}
   else if(m.lastTouch===1&&!m.reset){point(s,m.flight.x,m.flight.y);if(m.ball.z>0&&m.ball.z<58&&Math.hypot(m.ball.x-m.x,m.ball.y-m.y)<36&&m.cooldown===0){const dir=m.ball.x<140?'right':'left';input(s,dir);input(s,'action');input(s,'action',false);input(s,dir,false);strokes++;returns++;}}
   update(s,20);for(const o of m.opponents)assert.ok(o.y<=301&&o.y>=218);
  }
  assert.ok(returns>0);assert.ok(strokes>=3);assert.equal(m.score,3);assert.equal(m.success,true);assert.equal(s.scene.kind,'result');
 }
});
test('unreturned opponent balls still lose points and AI waits before chasing',()=>{
 const s=createLust({scenario:'tennis',random:()=>.5}),m=s.round;input(s,'right');input(s,'action');input(s,'action',false);input(s,'right',false);const positions=m.opponents.map(o=>({...o}));advance(s,300);assert.deepEqual(m.opponents,positions);advance(s,2800);assert.equal(m.score,0);assert.equal(m.lostPoints,1);
});
test('claw pointer green region accepts a real catch and early grip misses',()=>{
 for(const [wait,success]of [[140,false],[600,true]]){const s=createLust({scenario:'claw'}),m=s.round;point(s,64,440);input(s,'action');input(s,'action',false);while(m.phase!=='grip')update(s,20);advance(s,wait);assert.equal(timingState(m).ready,success);input(s,'action');input(s,'action',false);advance(s,4000);assert.equal(m.score,success?1:0);}
});
test('wheel pointer green and balance agree with actual kissing windows',()=>{
 const s=createLust({scenario:'wheel'}),m=s.round;m.angle=0;assert.equal(timingState(m).ready,false);input(s,'action');advance(s,1000);assert.equal(m.score,0);m.angle=-Math.PI/2;m.balance=.7;assert.equal(timingState(m).ready,false);advance(s,400);assert.equal(m.score,0);m.angle=-Math.PI/2;m.balance=0;assert.equal(timingState(m).ready,true);advance(s,900);assert.equal(m.score,1);assert.equal(timingState(m).ready,false);
});
test('electric eye does not consume energy on invisible auto targets',()=>{
 const s=createLust({scenario:'charm'}),m=s.round;m.npcs.forEach(n=>n.x=260);input(s,'action');advance(s,500);assert.equal(m.targetPerson,null);assert.equal(m.beam,false);assert.equal(m.stamina,60);
});
test('electric eye states both energy failure and timed follower shortage',()=>{
 const energy=createLust({scenario:'charm'});energy.round.stamina=.01;input(energy,'action');update(energy,20);assert.equal(energy.round.failureReason,'energy');assert.ok(energy.round.outcome.every(t=>t.length>30));assert.equal(energy.scene.kind,'result');
 const time=createLust({scenario:'charm'});time.round.clock=time.round.duration-10;update(time,20);assert.equal(time.round.failureReason,'quota');assert.ok(time.round.outcome[0].includes('0／8'));assert.ok(time.round.outcome[1].includes('0/8'));
});
test('full encounter pauses on execution failure reason then keeps the retry gate',()=>{
 const s=createLust({scenario:'first-bridge'});s.played[1]=[...GAMES1];hitBoss(s,10000);s.round.stamina=.01;input(s,'action');update(s,20);assert.equal(s.scene.kind,'result');assert.equal(s.firstTrial,false);const clock=s.round.clock,elapsed=s.elapsed;for(let i=0;i<150;i++)update(s,20);assert.equal(s.round.clock,clock);assert.equal(s.elapsed,elapsed);for(let i=0;i<50;i++)update(s,20);assert.equal(s.retry,20000);for(let i=0;i<1000&&!s.over;i++)update(s,20);assert.equal(s.mode,'charm');assert.equal(s.firstTrial,false);
});
test('electric-eye rival mode survives release so real short taps win the duel',()=>{
 const s=createLust({scenario:'charm'}),m=s.round;m.worldX=m.npcs[1].x-40;input(s,'action');advance(s,1020);assert.equal(m.duel,true);input(s,'action',false);advance(s,200);assert.equal(m.duel,true);const energy=m.stamina;input(s,'action');assert.ok(m.stamina<energy);input(s,'action',false);advance(s,100);
 for(let i=0;i<8&&m.score<1;i++){input(s,'action');input(s,'action',false);advance(s,100);}
 assert.equal(m.score,1);assert.ok(m.duelTaps>0);assert.equal(m.npcs[1].status,'following');
});
