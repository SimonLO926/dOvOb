import test from 'node:test';
import assert from 'node:assert/strict';
import {createSelection,selectCartridge,moveCard,rotateCard,dropCard,insertCard,tickSelection,ejectCard} from './state.mjs';

test('sealed cartridge cannot replace the current selection or enter a level',()=>{
 const s=createSelection();assert.equal(selectCartridge(s,5),false);assert.equal(s.index,0);assert.equal(s.message,'sealed');
 s.index=5;assert.equal(insertCard(s),false);assert.equal(s.phase,'browse');
});
test('drag bounds and rotation prevent losing a card off screen indefinitely',()=>{
 const s=createSelection();moveCard(s,100,-100);rotateCard(s,100,-100);
 assert.deepEqual(s.drop,{x:6,y:-6});assert.equal(s.yaw,Math.PI);assert.equal(s.pitch,-1.1);
});
test('far and incorrectly oriented drops return the card without starting a level',()=>{
 const s=createSelection();moveCard(s,1,2);assert.equal(dropCard(s,{distance:.1,aligned:false}),false);
 assert.equal(s.message,'align');assert.deepEqual(s.drop,{x:0,y:0});
 assert.equal(dropCard(s,{distance:2}),false);assert.equal(s.phase,'browse');
});
test('valid insertion locks selection and repeated insertions',()=>{
 const s=createSelection();selectCartridge(s,3);assert.equal(dropCard(s,{distance:.2}),true);
 assert.equal(selectCartridge(s,0),false);assert.equal(insertCard(s),false);assert.equal(s.index,3);
 assert.equal(moveCard(s,3,4),false);assert.equal(rotateCard(s,1,1),false);
});
test('pause freezes insertion and boot, then advances once',()=>{
 const s=createSelection();insertCard(s);tickSelection(s,250,{paused:true});assert.equal(s.elapsed,0);
 for(let i=0;i<5;i++)tickSelection(s,250);assert.equal(s.phase,'boot');
 tickSelection(s,250,{paused:true});assert.equal(s.elapsed,0);
 for(let i=0;i<5;i++)tickSelection(s,250);assert.equal(s.phase,'playing');
});
test('reduced motion keeps a readable boot with shorter transitions',()=>{
 const s=createSelection();insertCard(s);tickSelection(s,200,{reduced:true});tickSelection(s,100,{reduced:true});
 assert.equal(s.phase,'boot');tickSelection(s,250,{reduced:true});assert.equal(s.phase,'playing');
});
test('eject cancels unfinished boot and permits choosing a different card',()=>{
 const s=createSelection();insertCard(s);tickSelection(s,250);ejectCard(s);
 assert.equal(s.phase,'browse');assert.equal(s.elapsed,0);assert.equal(selectCartridge(s,2),true);
});
