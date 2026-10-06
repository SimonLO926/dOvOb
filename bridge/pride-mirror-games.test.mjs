import test from 'node:test';
import assert from 'node:assert/strict';
import { MIRROR_GAME_IDS, traceMirrorMaze } from './pride-mirror-games.mjs';
import { createSecondDemo, inputSecondDemo, pointSecondDemo, updateSecondDemo } from './pride-second-demo.mjs';
const seeded = seed => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
function solvePuzzle(s) {
  const stage=s.mini.stage;for(let i=0;i<9&&s.mini.stage===stage;i++){s.mini.focus=i;while(s.mini.stage===stage&&s.mini.pieces[i]!==0&&!s.mini.finished)inputSecondDemo(s,'action');}
}
function chooseTruth(s, correct=true) {
  for(let n=0;n<100 && s.mini.phase!=='choose';n++)updateSecondDemo(s,50);
  assert.equal(s.mini.phase,'choose');
  s.mini.focus=s.mini.order.indexOf(s.mini.truth);
  if(!correct)s.mini.focus=(s.mini.focus+1)%3;
  inputSecondDemo(s,'action');updateSecondDemo(s,0);
}
test('Puzzle rotates via touch and keyboard; broken mirrors reward without ending restoration',()=>{
 for(const difficulty of ['normal','hard']){
  const s=createSecondDemo(MIRROR_GAME_IDS[0],{difficulty,random:seeded(4)});
  const before=s.mini.pieces[0];pointSecondDemo(s,68,226);assert.equal(s.mini.pieces[0],(before+1)%4);
  inputSecondDemo(s,'right');assert.equal(s.mini.focus,1);
  pointSecondDemo(s,0,0);assert.equal(s.mini.focus,1);
  solvePuzzle(s);updateSecondDemo(s,0);
  assert.equal(s.mini.stage,1);assert.equal(s.mirrorWorld.bonuses,0);assert.equal(s.over,difficulty==='normal');
  while(!s.mini.finished)solvePuzzle(s);updateSecondDemo(s,0);
  assert.equal(s.result,'完成');assert.equal(s.mini.score,s.mini.goal*300);
  const snap=JSON.stringify(s);inputSecondDemo(s,'action');pointSecondDemo(s,68,226);updateSecondDemo(s,50);assert.equal(JSON.stringify(s),snap);
 }
});
test('Truth requires observation and tracked swaps; wrong guesses and hints cost time, not instant failure',()=>{
 for(const difficulty of ['normal','hard']){
  const s=createSecondDemo(MIRROR_GAME_IDS[1],{difficulty,random:seeded(10)});
  inputSecondDemo(s,'action');assert.equal(s.mini.correct,0);
  chooseTruth(s,false);assert.equal(s.mini.correct,0);assert.equal(s.hp,100);assert.ok(s.timeLeft<s.mini.duration-2000);
  chooseTruth(s);chooseTruth(s);assert.equal(s.mirrorWorld.bonuses,0);assert.equal(s.over,false);
  while(s.mini.phase!=='choose')updateSecondDemo(s,50);
  const t=s.timeLeft;inputSecondDemo(s,'alt');assert.equal(s.timeLeft,t-2000);assert.equal(s.mini.phase,'preview');
  const clean=createSecondDemo(MIRROR_GAME_IDS[1],{difficulty,random:seeded(10)});
  while(!clean.mini.finished&&!clean.over)chooseTruth(clean);
  assert.equal(clean.result,'完成');assert.equal(clean.mini.correct,difficulty==='hard'?6:4);
 }
});
test('Every seeded maze has a legal route collecting all crystals; A rotates and B validates all three rooms',()=>{
 for(const difficulty of ['normal','hard'])for(let seed=1;seed<=50;seed++){
  const s=createSecondDemo(MIRROR_GAME_IDS[2],{difficulty,random:seeded(seed)});
  const first=s.mini.cells[11];s.mini.focus=11;inputSecondDemo(s,'action');assert.notEqual(s.mini.cells[11],first);
  while(!s.mini.finished){
   const m=s.mini,stage=m.stage;
   m.route.forEach((i,n)=>{m.focus=i;if(m.cells[i]!==m.solution[n])inputSecondDemo(s,'action');});
   assert.equal(traceMirrorMaze(m).success,true);assert.equal(traceMirrorMaze(m).collected.length,3);
   pointSecondDemo(s,140,520);updateSecondDemo(s,0);assert.equal(m.stage,stage+1);
   if(stage<s.mini.goal-1)assert.equal(s.over,false);
  }
  assert.equal(s.result,'完成');assert.equal(s.mirrorWorld.bonuses,0);
 }
});
test('Maze rejects an exit without all crystals and stops when the beam escapes elsewhere',()=>{
 const s=createSecondDemo(MIRROR_GAME_IDS[2]);s.mini.cells.fill(null);
 const ray=traceMirrorMaze(s.mini);assert.equal(ray.success,false);assert.equal(ray.collected.length,0);
 inputSecondDemo(s,'alt');assert.equal(s.mini.stage,0);assert.ok(s.mini.feedback.includes('0/3'));
});
