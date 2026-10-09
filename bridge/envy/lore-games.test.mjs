import test from 'node:test';
import assert from 'node:assert/strict';
import { createEnvy, envyInput, updateEnvy, continueScene, SCENARIOS } from './engine.mjs';
import { createRound, roundPoint, roundInput, updateRound } from './rounds.mjs';
import { WINDOW, endStroke } from './lore-games.mjs';
const tick=(m,ms,held=new Set())=>{for(let t=0;t<ms;t+=50)updateRound(m,Math.min(50,ms-t),held);};
function sweep(m){const r=WINDOW;for(let y=r.y+8;y<r.y+r.h;y+=30){endStroke(m);roundPoint(m,r.x+5,y);roundPoint(m,r.x+r.w-5,y);if(m.reveal)break;}}
function collectFive(m){
  roundPoint(m,80,260);roundPoint(m,200,350);roundInput(m,'right');
  roundPoint(m,80,260);roundPoint(m,200,260);roundPoint(m,140,365);
  for(let i=0;i<3;i++)for(let j=0;j<m.code[i];j++)roundPoint(m,65+i*74,270);
  roundInput(m,'action');roundInput(m,'right');roundPoint(m,200,240);
  roundPoint(m,80,250);roundInput(m,'action');roundInput(m,'action');
}
test('New preview entries join the right health-bar pools, preserving the native Bridge',()=>{
  assert.equal(SCENARIOS.length,28);assert.equal(createEnvy({scenario:'window'}).form,1);assert.equal(createEnvy({scenario:'second:eye-room'}).form,2);
  const s=createEnvy({scenario:'first-bridge'});assert.equal(s.mode,'bridge');assert.ok(s.bridge.active);
});
test('Erasure is local, disconnected strokes do not erase the space between; outside strokes do nothing',()=>{
  const m=createRound('window');roundPoint(m,35,185);const first=m.cleared;assert.ok(first>0&&first<m.mask.length/8);
  endStroke(m);roundPoint(m,245,410);assert.equal(m.mask[24*WINDOW.cols+22],0);
  const count=m.cleared;roundPoint(m,0,0);assert.equal(m.cleared,count);assert.equal(m.stage,0);
});
test('All six windows require genuine coverage, share one clock and grant rewards once',()=>{
  const m=createRound('window');for(let i=0;i<6;i++){sweep(m);assert.equal(m.stage,i);assert.ok(m.reveal);tick(m,1100);}
  assert.equal(m.done,true);assert.equal(m.success,true);assert.equal(m.clock,6600);
  assert.equal(m.effects.filter(e=>e.kind==='boss').length,7);const count=m.effects.length;sweep(m);tick(m,50);assert.equal(m.effects.length,count);
});
test('Keyboard eraser moves with simultaneous arrows and action; release breaks the stroke',()=>{
  const s=createEnvy({scenario:'window'});envyInput(s,'action');envyInput(s,'right');for(let i=0;i<20;i++)updateEnvy(s,50);
  assert.ok(s.round.cleared>0);assert.ok(s.round.brush.x>140);envyInput(s,'action',false);assert.equal(s.round.stroke,null);
});
test('Window timeout fails with a real penalty, without a false clear',()=>{
  const m=createRound('window');tick(m,60000);assert.equal(m.success,false);assert.equal(m.done,true);assert.deepEqual(m.effects,[{kind:'hurt',amount:10}]);
});
test('Revealed pictures stay long enough to view, can advance by a fresh action, and cannot skip an un-erased window',()=>{
  const m=createRound('window');roundInput(m,'action');assert.equal(m.stage,0);sweep(m);
  roundInput(m,'action');tick(m,449);assert.equal(m.stage,0);tick(m,1);roundInput(m,'action');tick(m,50);assert.equal(m.stage,1);assert.equal(m.cleared,0);
});
test('Last window cleared within 60 seconds wins even when its reveal crosses the deadline',()=>{
  const m=createRound('window');for(let i=0;i<5;i++){sweep(m);tick(m,1100);}
  tick(m,60000-m.clock-10);sweep(m);tick(m,50);assert.equal(m.done,true);assert.equal(m.success,true);assert.equal(m.effects.filter(e=>e.kind==='hurt').length,0);
  const late=createRound('window');tick(late,60000);sweep(late);assert.equal(late.success,false);
});
test('Room clues stay accessible, drawers need both key halves, and wrong codes grant no eye',()=>{
  const m=createRound('eye-room',{random:()=>.4});roundInput(m,'right');roundPoint(m,200,260);assert.equal(m.eyes.size,0);
  roundPoint(m,140,365);roundInput(m,'action');assert.equal(m.eyes.size,0);roundInput(m,'alt');roundInput(m,'right');roundPoint(m,140,365);
  assert.equal(m.modal,'clue');roundInput(m,'action');assert.equal(m.modal,null);assert.equal(m.code.join(''),'333');
});
test('Complete escape-room route solves code, combines key, turns painting and matches every mask hole',()=>{
  for(const random of [()=>0,()=>.4,()=>.9]){
    const m=createRound('eye-room',{random});collectFive(m);assert.equal(m.eyes.size,5);assert.equal(m.done,false);
    roundInput(m,'right');roundPoint(m,140,270);assert.equal(m.modal,'mask');
    // Clicking the sixth eye too early must not reveal it.
    m.slot=m.order.indexOf(5);m.choice=5;roundInput(m,'action');assert.equal(m.eyes.has(5),false);
    for(let i=0;i<6;i++){const index=m.order.indexOf(i);m.slot=index;m.choice=i;roundInput(m,'action');}
    assert.equal(m.success,true);assert.equal(m.eyes.size,6);assert.equal(m.effects.filter(e=>e.kind==='boss').length,1);
  }
});
test('Room cannot win by waiting; Normal and Hard provide the same puzzle time',()=>{
  for(const difficulty of ['normal','hard']){const m=createRound('eye-room',{difficulty});assert.equal(m.duration,180000);tick(m,180000);assert.equal(m.done,true);assert.equal(m.success,false);}
});
test('Revealed main-eye secret pauses combat and resumes the full challenge after confirmation',()=>{
  const s=createEnvy({scenario:'second:eye-room',random:()=>.4});s.scenario={...s.scenario,single:false};s.cycle=1;
  const m=s.round;collectFive(m);roundInput(m,'right');roundPoint(m,140,270);
  for(let i=0;i<6;i++){m.slot=m.order.indexOf(i);m.choice=i;roundInput(m,'action');}
  updateEnvy(s,50);assert.equal(s.scene.kind,'room-secret');const elapsed=s.elapsed,health=s.hp;
  for(let i=0;i<20;i++)updateEnvy(s,50);assert.equal(s.elapsed,elapsed);assert.equal(s.hp,health);
  continueScene(s);assert.equal(s.scene,null);assert.equal(s.mode,'bridge');assert.equal(s.form,2);
});
