import test from 'node:test';
import assert from 'node:assert/strict';
import {createLust,startRound,hitBoss,continueScene,scene,GAMES1,GAMES2,ATTACKS1,ATTACKS2} from './engine.mjs';
import {lustTrack,createLustMusic,LUST_TRACKS} from './music.mjs';

test('eight supplied Lust tracks follow actual rounds rather than low HP overriding date music',()=>{
 const heard=new Set();
 for(const difficulty of ['normal','hard']){
  const s=createLust({scenario:'first-bridge',difficulty});
  for(const [form,games] of [[1,[...GAMES1,...ATTACKS1]],[2,[...GAMES2,...ATTACKS2]]]){
   s.form=form;const part=form===1?'first':'second';startRound(s,'bridge');s.bossHp=s.bossMaxHp*.1;assert.equal(lustTrack(s),part+'-bridge');heard.add(lustTrack(s));
   for(const id of games){startRound(s,id);assert.equal(lustTrack(s),part+'-special');heard.add(lustTrack(s));}
  }
  s.form=1;startRound(s,'charm');assert.equal(lustTrack(s),'first-last');heard.add(lustTrack(s));
  s.form=2;startRound(s,'dating');assert.equal(lustTrack(s),'second-last');heard.add(lustTrack(s));
  for(const kind of ['good','bad']){scene(s,kind,0);s.over=true;assert.equal(lustTrack(s),'ending-'+kind);heard.add(lustTrack(s));}
 }
 assert.deepEqual([...heard].sort(),Object.keys(LUST_TRACKS).sort());
});

test('defeat and transformation keep first execution music; true final endings remain audible after over',()=>{
 const s=createLust({scenario:'first-bridge'});scene(s,'first-defeat');assert.equal(lustTrack(s),'first-last');s.scene.time=500;continueScene(s);assert.equal(s.scene.kind,'transform');assert.equal(lustTrack(s),'first-last');s.scene.time=1400;assert.equal(lustTrack(s),'second-bridge');
 for(const bad of [false,true]){
  const f=createLust({scenario:'second-bridge'});f.datingDone=true;f.bad=bad;hitBoss(f,999999);assert.equal(f.scene.kind,'body');f.scene.time=500;continueScene(f);assert.equal(f.over,true);assert.equal(lustTrack(f),bad?'ending-bad':'ending-good');
 }
 scene(s,'rage-story');assert.equal(lustTrack(s),'second-last');scene(s,'collapse');assert.equal(lustTrack(s),'second-last');s.scene.time=500;continueScene(s);assert.equal(lustTrack(s),'second-bridge');s.over=true;scene(s,'lost');assert.equal(lustTrack(s),null);assert.equal(lustTrack(null),null);
});

test('two persistent streams load only the requested track, retain positions across reuse, fade, pause and reset',async()=>{
 let volume=.7;const players=[];const m=createLustMusic(()=>volume,{audioFactory:()=>{const a={src:'',paused:true,currentTime:0,volume:0,muted:false,play(){this.paused=false;return Promise.resolve()},pause(){this.paused=true}};players.push(a);return a;}});
 assert.equal(players.length,2);assert.ok(players.every(a=>!a.src));
 m.select('first-bridge');m.unlock('lust');await Promise.resolve();assert.ok(players.every(a=>a.src===LUST_TRACKS['first-bridge']));assert.ok(players.every(a=>a.loop));
 for(let i=0;i<5;i++)m.tick(100);const first=players.find(a=>a.volume>0);first.currentTime=24;
 m.select('first-special');m.tick(100);assert.ok(first.volume>0);for(let i=0;i<5;i++)m.tick(100);assert.equal(first.paused,true);assert.equal(first.currentTime,24);
 m.select('second-bridge');for(let i=0;i<5;i++)m.tick(100);assert.ok(!players.some(a=>a.src===LUST_TRACKS['first-bridge']));
 m.select('first-bridge');for(let i=0;i<5;i++)m.tick(100);const resumed=players.find(a=>a.src===LUST_TRACKS['first-bridge']);assert.equal(resumed.currentTime,24);
 volume=0;m.tick(100);assert.ok(players.every(a=>a.volume===0));m.pause();assert.ok(players.every(a=>a.paused));assert.equal(resumed.currentTime,24);
 volume=.5;m.select('first-bridge');m.tick(100);assert.ok(resumed.volume>0);m.select('ending-good');for(let i=0;i<5;i++)m.tick(100);assert.equal(m.active,'ending-good');assert.ok(players.find(a=>a.src===LUST_TRACKS['ending-good']).volume>0);
 m.reset();assert.ok(players.every(a=>a.currentTime===0&&a.paused));
});

test('unknown music routes fail explicitly instead of playing another Boss track',()=>{
 const m=createLustMusic(()=>1,{audioFactory:()=>({pause(){},play(){return Promise.resolve();}})});assert.throws(()=>m.select('second-mid'),RangeError);
});
