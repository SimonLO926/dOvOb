import test from 'node:test';
import assert from 'node:assert/strict';
import {createSecondDemo} from './pride-second-demo.mjs';
import {drawPrideSecond, strikePrideMirror, mirrorWeakpoint, breakPrideMirror, updatePrideSecond} from './pride-second.mjs';
import {redBossPosition} from './pride-red.mjs';
import {playMirrorFeedback} from './pride-second-visuals.mjs';
function canvas(){const calls=[];const c=new Proxy({}, {get:(o,k)=>o[k]??((...args)=>{calls.push([k,...args]);if(k==='createLinearGradient'||k==='createRadialGradient')return {addColorStop(){}};}),set:(o,k,v)=>{o[k]=v;calls.push([k,v]);return true;}});return {c,calls};}
test('Mirrors hide health, render opening cues and damage feedback with a larger usable hit target',()=>{
 const s=createSecondDemo('pride-kaleidoscope');const p=mirrorWeakpoint(s,0);
 assert.equal(strikePrideMirror(s,0,18,{x:p.x+23,y:p.y}),0);
 assert.equal(strikePrideMirror(s,0,18,p),18);
 assert.equal(s.mirrorWorld.mirrors[0].hp,102);
 assert.equal(s.events.at(-1).key,'prideMirrorHitSound');
 const {c,calls}=canvas();drawPrideSecond(c,s);
 for(const text of ['攻之鏡','守之鏡','幻之鏡','反攻削鏡','−18'])assert.ok(calls.some(v=>v[0]==='fillText'&&v[1]===text));
 assert.ok(s.mirrorWorld.particles.length);
 playMirrorFeedback(s);assert.equal(s.events.length,0);
});
test('Each second attack draws a different backdrop and a heart player',()=>{
 const callsByMode=[];for(const mode of ['pride-kaleidoscope','pride-shard-storm','pride-nested']){const s=createSecondDemo(mode);const {c,calls}=canvas();drawPrideSecond(c,s);assert.ok(calls.filter(v=>v[0]==='fillRect'&&v[4]===2).length>=27,'pixel heart drawn');callsByMode.push(JSON.stringify(calls));}
 assert.equal(new Set(callsByMode).size,3);
});

test('Red shooter shows its independent proportional bar and visible hit target without HP numbers',()=>{
 const s=createSecondDemo('pride-red-survival');const boss=redBossPosition(s.mini),hp=s.mini.bossHp;
 s.mini.shots=[{x:boss.x,y:245,vy:-440,damage:4}];updatePrideSecond(s,16,{hit(){}});assert.equal(s.mini.bossHp,hp-4);
 const {c,calls}=canvas();drawPrideSecond(c,s);assert.ok(calls.some(v=>v[0]==='fillText'&&v[1]==='命中紅鏡'));
 assert.ok(calls.some(v=>v[0]==='lineTo'&&v[1]===26&&v[2]===18),'Expanded red mirror frame');
 assert.ok(calls.some(v=>v[0]==='moveTo'&&v[1]===-20&&v[2]===-3),'Visible single red eye');
 assert.ok(calls.some(v=>v[0]==='strokeRect'&&v[1]===redBossPosition(s.mini).x-25&&v[3]===50),'Hit feedback outlines the active mirror');
 assert.ok(calls.some(v=>v[0]==='fillRect'&&v[1]===34&&v[2]===178&&v[3]===212*(hp-4)/hp));
 assert.ok(!calls.some(v=>v[0]==='fillText'&&v[1].includes('/3')));
});
