import test from 'node:test';
import assert from 'node:assert/strict';
import { createEnvy, envyInput, updateEnvy, startRound } from './engine.mjs';
import { createCrazy, inputCrazy, updateCrazy } from '../crazy.mjs';
const run=(s,ms,update=updateEnvy)=>{for(let left=ms;left>0;left-=50)update(s,Math.min(50,left));};
function board(){const s=createEnvy({scenario:'first-bridge'});s.bridge.active={...s.bridge.active,type:'O',rot:0,x:4,y:0};return s;}
test('Idle time never shortens a fresh Bridge keyboard press; 150ms delay then 35ms repeats',()=>{
  const s=board();run(s,105);envyInput(s,'left');assert.equal(s.bridge.active.x,3);
  run(s,149);assert.equal(s.bridge.active.x,3);run(s,1);assert.equal(s.bridge.active.x,2);
  run(s,34);assert.equal(s.bridge.active.x,2);run(s,1);assert.equal(s.bridge.active.x,1);
  envyInput(s,'left',false);run(s,150);assert.equal(s.bridge.active.x,1);
});
test('Touch taps stay one cell, restart their own 70ms timer and stop on release',()=>{
  const s=board();run(s,105);envyInput(s,'left',true,'touch');run(s,69);assert.equal(s.bridge.active.x,3);
  envyInput(s,'left',false);run(s,100);assert.equal(s.bridge.active.x,3);
  envyInput(s,'right',true,'touch');run(s,69);assert.equal(s.bridge.active.x,4);run(s,1);assert.equal(s.bridge.active.x,5);
  envyInput(s,'right',false);run(s,100);assert.equal(s.bridge.active.x,5);
});
test('Latest direction owns the hold; reverse curse and switching rounds preserve correct releases',()=>{
  const s=board();s.curses.reverse=10000;envyInput(s,'left');assert.equal(s.bridge.active.x,5);
  envyInput(s,'right');assert.equal(s.bridge.active.x,4);run(s,150);assert.equal(s.bridge.active.x,3);
  envyInput(s,'right',false);run(s,100);assert.equal(s.bridge.active.x,3);
  startRound(s,'bridge');assert.equal(s.round.horizontalDir,0);assert.equal(s.held.size,0);
});
test('Envy follows the shipped Crazy Bridge horizontal positions for keyboard and touch input streams',()=>{
  for(const source of ['keyboard','touch']){
    const a=board(),b=createCrazy();b.catDue=Infinity;b.attackDone=true;b.bridge.active={...b.bridge.active,type:'O',rot:0,x:4,y:0};
    for(const event of [{dt:105},{key:'left',down:true},{dt:40},{key:'left',down:false},{dt:100},{key:'right',down:true},{dt:69},{dt:1},{dt:80},{key:'left',down:true},{dt:150},{key:'left',down:false},{dt:100},{key:'right',down:false},{dt:50}]){
      if('dt'in event){run(a,event.dt);run(b,event.dt,updateCrazy);}else {envyInput(a,event.key,event.down,source);inputCrazy(b,event.key,event.down,source);}
      assert.equal(a.bridge.active.x,b.bridge.active.x,JSON.stringify({source,event}));
    }
  }
});
