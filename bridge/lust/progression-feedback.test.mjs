import test from 'node:test';
import assert from 'node:assert/strict';
import {createLust,startRound,finishRound,input,update,GAMES1,GAMES2} from './engine.mjs';
import {CHARM_RULES} from './charm.mjs';
test('both forms finish the five unique date cards within ten completed rounds',()=>{
 for(const form of [1,2]){
  const s=createLust({scenario:'first-bridge',random:()=>.5});s.scene=null;s.form=form;s.bossHp=s.bossMaxHp=100000;startRound(s,'bridge');
  const games=form===1?GAMES1:GAMES2,seen=[];let rounds=0;
  while(seen.length<5&&rounds<10){if(games.includes(s.mode))seen.push(s.mode);finishRound(s,true);rounds++;}
  assert.equal(seen.length,5);assert.equal(new Set(seen).size,5);assert.ok(rounds<=10);assert.deepEqual(new Set(s.played[form]),new Set(games));
 }
});
test('low HP schedules remaining cards consecutively rather than waiting through Bridge',()=>{
 const s=createLust({scenario:'first-bridge'});s.scene=null;s.bossHp=s.bossMaxHp*.45;s.played[1]=GAMES1.slice(0,2);startRound(s,'bridge');
 for(let i=0;i<3;i++){finishRound(s,true);assert.ok(GAMES1.includes(s.mode));assert.ok(!s.played[1].includes(s.mode));}
});
test('shorter ordinary dates retain full rhythm charts and all haunted rooms',()=>{
 const expected={archery:6,claw:2,tennis:2,feeding:3,cinema:3,wheel:2,volley:3,haunted:3};
 for(const [id,target]of Object.entries(expected))assert.equal(createLust({scenario:id}).round.target,target);
 assert.equal(createLust({scenario:'piano'}).round.notes.length,32);assert.equal(createLust({scenario:'dance'}).round.steps.length,20);
});
test('electric-eye input-only route clears both difficulties; passive holding fails',()=>{
 for(const difficulty of ['normal','hard'])for(const tapping of [false,true]){
  const s=createLust({scenario:'charm',difficulty}),m=s.round;
  for(let tick=0;tick<5000&&!s.scene&&!s.over;tick++){
   const target=m.npcs.find(n=>n.id===m.targetPerson&&n.status==='walking');
   input(s,'right',!target||Math.abs(target.x-m.worldX)>75);input(s,'up',m.y>410);
   input(s,'alt',m.teacherWarning);if(tapping&&m.duel&&tick%10===0)input(s,'action',false);
   input(s,'action');update(s,20);
  }
  assert.equal(m.success,tapping);if(tapping){assert.ok(m.score>=m.target);assert.ok(m.duelTaps>0);}
 }
 assert.ok(CHARM_RULES.hard.target>CHARM_RULES.normal.target);assert.ok(CHARM_RULES.hard.duration<CHARM_RULES.normal.duration);assert.ok(CHARM_RULES.hard.rival>CHARM_RULES.normal.rival);
});
test('Bridge reward routes to an unplayed date when its mapped card is already finished',()=>{
 const s=createLust({scenario:'first-bridge'});s.played[1]=GAMES1.slice(0,4);s.bridge.phase='resolving';s.bridge.pendingReward='sand';s.round.resolve=0;
 for(let i=0;i<100&&s.mode==='bridge';i++)update(s,20);
 assert.equal(s.mode,'feeding');assert.equal(s.played[1].includes('feeding'),false);
});
