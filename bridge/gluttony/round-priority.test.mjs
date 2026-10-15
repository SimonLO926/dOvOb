import test from 'node:test';
import assert from 'node:assert/strict';
import {createGluttony,startRound,finishRound,update,GAMES,FIRST_GAMES,ATTACKS,pendingGames} from './engine.mjs';
const afterResult=s=>{for(let n=0;n<1300;n+=20)update(s,20);};
test('unplayed ordinary games replace attack slots until the pool has been covered',()=>{
 for(const difficulty of ['normal','hard'])for(const unlocked of [false,true]){
  const s=createGluttony({scenario:'phase-1',difficulty});s.watermelonDone=unlocked;s.bossHp=s.bossMaxHp=100000;startRound(s,'bridge');
  const pool=unlocked?GAMES:FIRST_GAMES,seen=[];
  for(let i=0;i<pool.length*2;i++){
   if(s.mode==='bridge'){s.round.clock=s.round.duration;update(s,20);}
   else {assert.ok(pool.includes(s.mode));assert.ok(!seen.includes(s.mode));seen.push(s.mode);finishRound(s,true);afterResult(s);}
  }
  assert.deepEqual(seen,pool);assert.deepEqual(pendingGames(s),[]);
 }
});
test('half HP prioritizes remaining games consecutively and preserves the watermelon gate',()=>{
 const s=createGluttony({scenario:'phase-1'});s.played=['snake'];s.bossHp=s.bossMaxHp*.45;startRound(s,'bridge');
 for(const expected of ['match','rope','slice']){s.round.clock=s.round.duration;if(s.mode==='bridge')update(s,20);else{finishRound(s,false);afterResult(s);}assert.equal(s.mode,expected);assert.equal(s.watermelonDone,false);}
 assert.ok(!pendingGames(s).includes('merge'));
});
test('ordinary watermelon is the next pending game only after execution succeeds',()=>{
 const s=createGluttony({scenario:'phase-1'});startRound(s,'merge',true);s.played=[...FIRST_GAMES];s.bossHp=s.bossMaxHp;
 s.round.fruits=[106,174].map(x=>({x,y:425,level:6,age:0,vx:0,vy:0}));update(s,20);assert.equal(s.watermelonDone,true);afterResult(s);assert.equal(s.mode,'merge');assert.equal(s.round.execution,false);
});
test('Bridge rewards skip played games and complete pools retain the original attack cadence',()=>{
 const s=createGluttony({scenario:'phase-1'});s.played=FIRST_GAMES.slice(0,3);s.bridge.phase='resolving';s.bridge.pendingReward='sand';s.round.resolve=0;
 for(let i=0;i<100&&s.mode==='bridge';i++)update(s,20);assert.equal(s.mode,'slice');
 s.played=[...GAMES];s.watermelonDone=true;s.cycle=2;startRound(s,'bridge');assert.equal(s.round.duration,24000);s.round.clock=s.round.duration;update(s,20);assert.equal(s.mode,ATTACKS[0]);
});
