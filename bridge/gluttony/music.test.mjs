import test from 'node:test';
import assert from 'node:assert/strict';
import {createGluttony,startRound,scene} from './engine.mjs';
import {gluttonyTrack,createGluttonyMusic,GLUTTONY_TRACKS} from './music.mjs';
test('all seven supplied songs follow chef, maw, execution and final outburst states',()=>{
 const heard=new Set();
 for(const stage of [1,2]){const s=createGluttony({scenario:stage===1?'phase-1':'phase-3'});for(const mode of ['bridge','snake']){startRound(s,mode);const key=(stage===1?'first':'second')+(mode==='bridge'?'-bridge':'-special');assert.equal(gluttonyTrack(s),key);heard.add(key);}
 scene(s,stage===1?'watermelon-start':'execution-start');const key=(stage===1?'first':'second')+'-last';assert.equal(gluttonyTrack(s),key);heard.add(key);
 s.scene=null;startRound(s,stage===1?'merge':'execution',stage===1);assert.equal(gluttonyTrack(s),key);
 }
 const s=createGluttony({scenario:'phase-5'});for(const mode of ['bridge','escape','burst']){startRound(s,mode);assert.equal(gluttonyTrack(s),'third-last');heard.add(gluttonyTrack(s));}s.over=true;scene(s,'victory',0);assert.equal(gluttonyTrack(s),'third-last');scene(s,'lost',0);assert.equal(gluttonyTrack(s),null);assert.equal(gluttonyTrack(null),null);
 assert.deepEqual([...heard].sort(),Object.keys(GLUTTONY_TRACKS).sort());
});
test('Gluttony streams do not request tracks before selection and reject missing routes',()=>{
 const players=[];const m=createGluttonyMusic(()=>.7,{audioFactory:()=>{const a={src:'',pause(){},play(){return Promise.resolve()}};players.push(a);return a;}});assert.equal(players.length,2);assert.ok(players.every(a=>!a.src));assert.throws(()=>m.select('third-special'),RangeError);m.select('first-bridge');assert.equal(players.filter(a=>a.src).length,1);m.pause();
});
