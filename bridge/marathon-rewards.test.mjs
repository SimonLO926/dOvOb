import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,startGame,pump,marathonPenaltyRates,FEVER_CHANCE} from './logic.mjs';
const special=new Set(['R','X','D','A']);
test('Reward roll boundaries compensate stage penalties equally for Normal and Hard',()=>{
 const base=marathonPenaltyRates(1),baseEligible=1-base.nohold-base.curse-base.garbage-FEVER_CHANCE;
 for(const paceName of ['normal','hard'])for(const stage of [1,5,16,100]){
  const rates=marathonPenaltyRates(stage),eligible=1-rates.nohold-rates.curse-rates.garbage-FEVER_CHANCE;
  for(const [roll,type] of [[.002,'R'],[.007,'X'],[.015,'D'],[.023,'A'],[.026,null]]){
   let n=0;const g=createGame({random:()=>n++===0?.9:roll*baseEligible/eligible});g.stage=stage;g.paceName=paceName;
   const piece=g.pull();assert.equal(type?piece.type:special.has(piece.type),type??false);
  }
 }
});
test('A Hard Marathon row-clearing bomb activates the reward it destroys without activating blast penalties',()=>{
 const g=createGame({random:()=>.5});startGame(g);g.paceName='hard';g.phase='resolving';g.active=null;
 for(let x=0;x<10;x++)g.grid[19][x]={type:'O',g:100+x,bomb:x===4};
 g.grid[18][4]={type:'R',g:80,reward:'breakout',curse:'garbage'};
 g.grid[12][4]={type:'O',g:81};
 const step=pump(g);assert.equal(step.type,'clear');assert.equal(g.pendingReward,'breakout');assert.equal(g.pendingGarbage,0);
 assert.ok(step.blasts.some(c=>c.reward==='breakout'));
 const next=pump(g);assert.equal(next.type,'reward');assert.equal(next.reward,'breakout');
});
test('Sand starts even with an empty or crowded board; ball modes keep their safety fallback',()=>{
 for(const crowded of [false,true]){
  const g=createGame();startGame(g);g.phase='resolving';g.active=null;g.pendingReward='sand';
  if(crowded)g.grid[18][4]={type:'O',g:90};
  const step=pump(g);assert.equal(step.type,'reward');assert.equal(step.reward,'sand');assert.equal(step.flip,false);
 }
 const ball=createGame();startGame(ball);ball.phase='resolving';ball.active=null;ball.pendingReward='pinball';const old=ball.score;
 assert.notEqual(pump(ball)?.type,'reward');assert.ok(ball.score>old);
});
