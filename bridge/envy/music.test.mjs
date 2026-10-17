import test from 'node:test';
import assert from 'node:assert/strict';
import {createEnvy, hitBoss, continueScene, startRound, updateEnvy, retryCapture, finishEnvy} from './engine.mjs';
import {createEnvyMusic, envyTrack, ENVY_TRACKS} from './music.mjs';

test('all seven Envy tracks follow real form thresholds, puzzle/combat rounds and the final Bridge', () => {
  for (const difficulty of ['normal','hard']) {
    const child=createEnvy({scenario:'first-bridge',difficulty});
    assert.equal(envyTrack(child),'first-bridge');
    startRound(child,'window');assert.equal(envyTrack(child),'first-special');
    child.bossHp=201;assert.equal(envyTrack(child),'first-special');
    hitBoss(child,1);assert.equal(envyTrack(child),'first-last');
    hitBoss(child,9999);assert.equal(child.scene.kind,'first-defeat');assert.equal(envyTrack(child),'first-last');
    child.scene.time=700;continueScene(child);assert.equal(child.scene.kind,'transform');
    assert.equal(envyTrack(child),'first-last');child.scene.time=1400;assert.equal(envyTrack(child),'second-bridge');
    const dragon=createEnvy({scenario:'dragon',difficulty});
    assert.equal(envyTrack(dragon),'second-bridge');
    startRound(dragon,'eye-room');assert.equal(envyTrack(dragon),'second-special');
    startRound(dragon,'bridge');dragon.bossHp=dragon.bossMaxHp*.5+.1;
    assert.equal(envyTrack(dragon),'second-bridge');hitBoss(dragon,1);assert.equal(envyTrack(dragon),'second-mid');
    startRound(dragon,'eye-room');assert.equal(envyTrack(dragon),'second-special');
    hitBoss(dragon,99999);assert.equal(dragon.scene.kind,'rage');assert.equal(envyTrack(dragon),'second-last');
    dragon.scene.time=700;continueScene(dragon);assert.equal(dragon.mode,'chase');assert.equal(envyTrack(dragon),'second-last');
    const final=createEnvy({scenario:'final-bridge',difficulty});assert.equal(envyTrack(final),'second-last');
    hitBoss(final,99999);assert.equal(final.scene.kind,'dragon-defeat');assert.equal(envyTrack(final),'second-last');
    final.scene.time=700;continueScene(final);assert.equal(final.scene.kind,'worm-reveal');assert.equal(envyTrack(final),'second-last');
    final.scene.time=700;continueScene(final);assert.equal(final.mode,'capture');assert.equal(envyTrack(final),'second-last');
    final.round.clock=final.round.duration-16;updateEnvy(final,16);
    assert.equal(final.scene.kind,'capture-retry');assert.equal(envyTrack(final),'second-last');
    retryCapture(final);assert.equal(final.scene,null);assert.equal(final.mode,'capture');assert.equal(envyTrack(final),'second-last');
    finishEnvy(final);assert.equal(final.scene.kind,'victory');assert.equal(envyTrack(final),null);
    final.scene={kind:'lost'};assert.equal(envyTrack(final),null);
  }
});

test('rage vocals keep their playhead through reveal, capture timeout and retry without other-song requests',async()=>{
 const players=[],music=createEnvyMusic(()=>.7,{audioFactory:()=>{const a={paused:true,volume:0,currentTime:0,plays:0,play(){this.paused=false;this.plays++;return Promise.resolve();},pause(){this.paused=true;}};players.push(a);return a;}});
 const s=createEnvy({scenario:'final-bridge'});music.select(envyTrack(s));music.unlock('envy');await Promise.resolve();music.tick(100);const vocal=players.find(a=>a.volume>0);vocal.currentTime=37;const plays=vocal.plays;
 hitBoss(s,99999);music.select(envyTrack(s));s.scene.time=700;continueScene(s);music.select(envyTrack(s));s.scene.time=700;continueScene(s);music.select(envyTrack(s));assert.equal(s.mode,'capture');s.round.clock=s.round.duration-16;updateEnvy(s,16);music.select(envyTrack(s));retryCapture(s);music.select(envyTrack(s));
 assert.equal(music.active,'second-last');assert.equal(vocal.currentTime,37);assert.equal(vocal.plays,plays);assert.ok(players.every(a=>a.src.endsWith('07_second_last_vocal_en.mp3')));finishEnvy(s);music.select(envyTrack(s));assert.equal(music.active,null);
});
test('all seven Envy tracks use two reusable streams, crossfade and resume after eviction',async()=>{
 const players=[];let volume=.7;const music=createEnvyMusic(()=>volume,{audioFactory:()=>{const a={paused:true,volume:0,currentTime:0,play(){this.paused=false;return Promise.resolve();},pause(){this.paused=true;}};players.push(a);return a;}});
 music.unlock('envy');await Promise.resolve();assert.equal(players.length,2);assert.ok(players.every(a=>a.src.endsWith('01_first_bridge.mp3')));
 const positions=new Map();for(const[key,file]of Object.entries(ENVY_TRACKS)){music.select(key);for(let n=0;n<5;n++)music.tick(100);const a=players.find(a=>a.volume>0);assert.ok(a.src.endsWith(file));a.currentTime=positions.size+18;positions.set(key,a.currentTime);}
 for(const[key,pos]of positions){music.select(key);for(let n=0;n<5;n++)music.tick(100);assert.equal(players.find(a=>a.volume>0).currentTime,pos);}
 volume=0;music.tick(100);assert.ok(players.every(a=>a.volume===0));music.pause();assert.ok(players.every(a=>a.paused));music.reset();assert.ok(players.every(a=>a.currentTime===0));
});
