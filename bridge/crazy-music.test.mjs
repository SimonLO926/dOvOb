import test from 'node:test';
import assert from 'node:assert/strict';
import { createCrazyMusic, crazyTrack, PRIDE_TRACKS } from './crazy-music.mjs';
import { createCrazy } from './crazy.mjs';
import { readGreedClear, recordGreedClear } from './crazy-screen.mjs';
import { createPridePreview } from './pride-preview.mjs';
import { advanceCrazy, hitCrazyBoss, skipCrazyCinematic, updateCrazy } from './crazy.mjs';
test('Pride routes all eight scenes and keeps red/escape music through defeat and revival', () => {
  const king = createPridePreview('pride-crown-choice');
  assert.equal(crazyTrack(king), 'pride-first-special');
  advanceCrazy(king, 'bridge'); assert.equal(crazyTrack(king), 'pride-first-bridge');
  king.bossHp = 200; assert.equal(crazyTrack(king), 'pride-first-last');
  king.bossHp = 400; king.prideDuelLocked = true; assert.equal(crazyTrack(king), 'pride-first-last');
  king.cutscene = { kind: 'king-defeat' }; assert.equal(crazyTrack(king), 'pride-first-last');
  king.cutscene = { kind: 'transform', time: 2199 }; assert.equal(crazyTrack(king), 'pride-first-last');
  king.cutscene.time = 2200; assert.equal(crazyTrack(king), 'pride-second-bridge');
  for (const difficulty of ['normal', 'hard']) {
    const second = createPridePreview('mirror', { difficulty }); assert.equal(crazyTrack(second), 'pride-second-bridge');
    advanceCrazy(second, 'pride-gaze-up'); assert.equal(crazyTrack(second), 'pride-second-special');
    const tower = createPridePreview('tower', { difficulty }); assert.equal(crazyTrack(tower), 'pride-second-mid');
    const red = createPridePreview('red', { difficulty }); assert.equal(crazyTrack(red), 'pride-second-last');
    advanceCrazy(red, 'bridge'); assert.equal(crazyTrack(red), 'pride-second-last');
    red.mirrorWorld.redCleared=true;red.damageLeft = Infinity; hitCrazyBoss(red, 9999); assert.equal(crazyTrack(red), 'pride-second-last');
    red.cutscene.time = 1000; skipCrazyCinematic(red); assert.equal(red.cutscene.kind,'tower-collapse'); assert.equal(crazyTrack(red), 'pride-escape');
    red.cutscene.time=1000; skipCrazyCinematic(red); assert.equal(red.mode,'pride-escape'); assert.equal(crazyTrack(red), 'pride-escape');
    red.mini.timeLeft = 1; updateCrazy(red, 16); assert.equal(crazyTrack(red), 'pride-second-last');
    const exit = createPridePreview('escape', { difficulty }); assert.equal(crazyTrack(exit), 'pride-escape');
    exit.over = exit.won = true; assert.equal(crazyTrack(exit), null);
  }
});
test('Mobile unlock uses two streams for the current boss; every track retains a separate position',async()=>{
 const players=[];let volume=.8;const music=createCrazyMusic(()=>volume,{audioFactory:()=>{const a={paused:true,volume:0,currentTime:0,muted:false,play(){this.paused=false;return Promise.resolve();},pause(){this.paused=true;}};players.push(a);return a;}});
 music.unlock('pride');await Promise.resolve();assert.equal(players.length,2);assert.ok(players.every(a=>a.src.endsWith('/pride-music/first-bridge.mp3')&&a.loop));
 const positions=new Map();
 for(const [i,key]of [...PRIDE_TRACKS,'first-bridge','first-special'].entries()){
  music.select(key);for(let n=0;n<5;n++)music.tick(100);
  const a=players.find(a=>!a.paused&&a.volume>0);assert.ok(a);a.currentTime=11+i;positions.set(key,11+i);
 }
 for(const[key,pos]of positions){music.select(key);for(let n=0;n<5;n++)music.tick(100);assert.equal(players.find(a=>!a.paused&&a.volume>0).currentTime,pos);}
 volume=0;music.tick(100);assert.ok(players.every(a=>a.volume===0));music.pause();assert.ok(players.every(a=>a.paused));music.reset();assert.ok(players.every(a=>a.currentTime===0));
});
test('Six-track routing selects each form, special/Bridge and last-15% priority', () => {
  const s = createCrazy(); assert.equal(crazyTrack(s), 'first-bridge');
  s.mode = 'slots'; assert.equal(crazyTrack(s), 'first-special');
  s.bossHp = 135; assert.equal(crazyTrack(s), 'first-last'); s.mode = 'bridge'; assert.equal(crazyTrack(s), 'first-last');
  s.form = 2; s.bossMaxHp = 1200; s.bossHp = 1200; assert.equal(crazyTrack(s), 'second-bridge');
  s.mode = 'jump'; assert.equal(crazyTrack(s), 'second-special'); s.bossHp = 180; assert.equal(crazyTrack(s), 'second-last');
  s.form = 1; s.cutscene = {kind: 'transform', time: 1000}; assert.equal(crazyTrack(s), 'first-last');
  s.cutscene.time = 2200; assert.equal(crazyTrack(s), 'second-bridge');
  s.over = true; assert.equal(crazyTrack(s), null);
});
test('Crossfades preserve evicted song positions; pause keeps positions and reset clears them',async()=>{
 const players=[];const music=createCrazyMusic(()=>.7,{audioFactory:()=>{const a={paused:true,currentTime:0,volume:0,play(){this.paused=false;return Promise.resolve();},pause(){this.paused=true;}};players.push(a);return a;}});
 music.unlock();await Promise.resolve();for(let n=0;n<5;n++)music.tick(100);const first=players.find(a=>a.volume>0);first.currentTime=24.5;
 music.select('first-special');music.tick(100);assert.ok(!first.paused&&first.volume>0);for(let n=0;n<5;n++)music.tick(100);assert.ok(first.paused);
 const special=players.find(a=>a.volume>0);special.currentTime=13.2;music.select('second-bridge');for(let n=0;n<5;n++)music.tick(100);music.select('first-bridge');for(let n=0;n<5;n++)music.tick(100);assert.equal(players.find(a=>a.volume>0).currentTime,24.5);
 music.pause();assert.ok(players.every(a=>a.paused));music.select('first-special');for(let n=0;n<5;n++)music.tick(100);assert.equal(players.find(a=>a.volume>0).currentTime,13.2);music.reset();assert.equal(music.active,null);assert.ok(players.every(a=>a.currentTime===0));
});
test('Rejected autoplay is handled without unhandled errors and can be retried on a gesture', async () => {
  let fail = true;
  const music = createCrazyMusic(() => 1, { audioFactory: () => ({ paused: true, currentTime: 0, volume: 0, pause() {}, play() { return fail ? Promise.reject(new Error('blocked')) : Promise.resolve(); } }) });
  music.unlock(); await Promise.resolve(); await Promise.resolve(); assert.equal(music.blocked, true);
  fail = false; music.unlock(); await Promise.resolve(); await Promise.resolve(); assert.equal(music.blocked, false);
});
test('Pending mobile priming is not cancelled by a frame; intentional pause aborts are not permission failures', async () => {
  const pending = [], players = [];
  const music = createCrazyMusic(() => 1, { audioFactory: () => {
    const audio = { paused: true, volume: 0, currentTime: 0, pause() { this.paused = true; },
      play() { this.paused = false; return new Promise((resolve, reject) => pending.push({ resolve, reject })); } };
    players.push(audio); return audio;
  } });
  music.unlock('pride'); music.tick(50); assert.ok(players.every(a => !a.paused));
  music.pause(); assert.ok(players.every(a => a.paused));
  pending.forEach(p => p.reject(Object.assign(new Error('Paused while loading'), { name: 'AbortError' })));
  await Promise.resolve(); await Promise.resolve(); assert.equal(music.blocked, false);
});
test('Only complete second-form victory unlocks the persistent silhouette, storage failures stay playable', () => {
  const data = new Map(); const storage = { getItem: key => data.get(key), setItem: (key, value) => data.set(key, value) };
  assert.equal(readGreedClear(storage), false);
  assert.equal(recordGreedClear(storage, {won: true, form: 1, bossHp: 0}), false);
  assert.equal(recordGreedClear(storage, {won: false, form: 2, bossHp: 0}), false);
  assert.equal(recordGreedClear(storage, {won: true, form: 2, bossHp: 0}), true); assert.equal(readGreedClear(storage), true);
  const denied = { getItem() { throw Error('denied'); }, setItem() { throw Error('denied'); } };
  assert.equal(readGreedClear(denied), false); assert.equal(recordGreedClear(denied, {won: true, form: 2, bossHp: 0}), false);
});
