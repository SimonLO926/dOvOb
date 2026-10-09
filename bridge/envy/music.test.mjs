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

test('rage vocals keep their playhead from the final Bridge through reveal, capture timeout and retry', () => {
  const players=new Map(),music=createEnvyMusic(()=>.7,{audioFactory:url=>{
    const audio={paused:true,volume:0,currentTime:0,muted:false,loop:false,plays:0,
      play(){this.paused=false;this.plays++;return Promise.resolve();},pause(){this.paused=true;}};
    players.set(url,audio);return audio;
  }});
  const s=createEnvy({scenario:'final-bridge'});
  music.select(envyTrack(s));music.tick(100);
  const vocal=[...players.values()][0];vocal.currentTime=37;
  hitBoss(s,99999);music.select(envyTrack(s));
  s.scene.time=700;continueScene(s);music.select(envyTrack(s));
  s.scene.time=700;continueScene(s);music.select(envyTrack(s));
  assert.equal(s.mode,'capture');assert.equal(music.active,'second-last');
  s.round.clock=s.round.duration-16;updateEnvy(s,16);music.select(envyTrack(s));
  assert.equal(s.scene.kind,'capture-retry');retryCapture(s);music.select(envyTrack(s));
  assert.equal(players.size,1,'Capture must not start a first-bar special track');
  assert.equal(vocal.currentTime,37);assert.equal(vocal.plays,1);assert.equal(vocal.paused,false);
  finishEnvy(s);music.select(envyTrack(s));assert.equal(music.active,null);
});

test('Envy primes only its seven supplied files, crossfades, loops and retains independent playheads',async()=>{
  const players=new Map();let volume=.7;
  const music=createEnvyMusic(()=>volume,{audioFactory:url=>{
    const audio={paused:true,volume:0,currentTime:0,muted:false,loop:false,
      play(){this.paused=false;return Promise.resolve();},pause(){this.paused=true;}};
    players.set(url,audio);return audio;
  }});
  music.unlock('envy');music.select('first-bridge');await Promise.resolve();
  assert.equal(players.size,7);assert.ok([...players.keys()].every(url=>url.includes('/envy-music/')));
  for(const file of Object.values(ENVY_TRACKS))assert.ok([...players.keys()].some(url=>url.endsWith('/'+file)));
  assert.ok([...players.values()].every(a=>a.loop));
  const first=[...players.entries()].find(([url])=>url.endsWith('01_first_bridge.mp3'))[1];
  for(let i=0;i<5;i++)music.tick(100);assert.ok(first.volume>0);
  first.currentTime=24;music.select('first-special');music.tick(100);
  assert.ok(first.volume>0&&!first.paused,'Outgoing music must fade rather than cut abruptly');
  for(let i=0;i<4;i++)music.tick(100);assert.ok(first.paused);assert.equal(first.currentTime,24);
  music.select('first-bridge');assert.equal(first.currentTime,24);
  volume=0;music.tick(100);assert.equal(first.volume,0);
  music.pause();assert.ok([...players.values()].every(a=>a.paused));assert.equal(first.currentTime,24);
  music.select('first-bridge');volume=.5;music.tick(100);assert.equal(first.currentTime,24);assert.ok(first.volume>0);
  music.select(null);for(let i=0;i<5;i++)music.tick(100);assert.ok([...players.values()].every(a=>a.paused));
  music.reset();assert.ok([...players.values()].every(a=>a.currentTime===0));
});
