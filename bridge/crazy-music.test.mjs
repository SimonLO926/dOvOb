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
test('Mobile unlock primes the requested boss only and preserves independent Pride and Greed playheads', async () => {
  const players = new Map(); let volume = .8;
  const music = createCrazyMusic(() => volume, { audioFactory: url => {
    const audio = { paused: true, volume: 0, currentTime: 0, muted: false, loop: false,
      play() { this.paused = false; return Promise.resolve(); }, pause() { this.paused = true; } };
    players.set(url, audio); return audio;
  } });
  music.unlock('pride'); music.select('pride-first-bridge'); await Promise.resolve();
  assert.equal(players.size, 8); assert.ok([...players.keys()].every(url => url.includes('/pride-music/')));
  assert.equal(PRIDE_TRACKS.length, 8); assert.ok([...players.values()].every(a => a.loop));
  const pride = [...players.entries()].find(([url]) => url.endsWith('/pride-music/first-bridge.mp3'))[1];
  for (let i = 0; i < 5; i++) music.tick(100);
  assert.equal(pride.paused, false); assert.ok(pride.volume > 0); pride.currentTime = 12;
  music.select('pride-escape'); for (let i = 0; i < 5; i++) music.tick(100);
  assert.equal(pride.paused, true); assert.equal(pride.currentTime, 12);
  music.unlock('greed'); music.select('first-bridge'); await Promise.resolve(); assert.equal(players.size, 14);
  const greed = [...players.entries()].find(([url]) => url.endsWith('/greed-music/first-bridge.mp3'))[1];
  assert.notEqual(pride, greed); assert.equal(greed.currentTime, 0);
  music.select('pride-first-bridge'); assert.equal(pride.currentTime, 12);
  volume = 0; music.tick(100); assert.equal(pride.volume, 0);
  music.pause(); assert.ok([...players.values()].every(a => a.paused));
  music.reset(); assert.ok([...players.values()].every(a => a.currentTime === 0));
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
test('Crossfades retain independent playheads; pause and replay reset have distinct behavior', async () => {
  const players = new Map(); let volume = .7;
  const music = createCrazyMusic(() => volume, { audioFactory: url => {
    const key = url.split('/').at(-1).replace('.mp3', '');
    const audio = { paused: true, volume: 0, currentTime: 0, play() { this.paused = false; return Promise.resolve(); }, pause() { this.paused = true; } };
    players.set(key, audio); return audio;
  }});
  music.unlock(); music.select('first-bridge'); await Promise.resolve();
  for (let i = 0; i < 5; i++) music.tick(100);
  const bridge = players.get('first-bridge'); bridge.currentTime = 24.5;
  music.select('first-special'); music.tick(100); assert.equal(bridge.paused, false); assert.ok(bridge.volume > 0);
  for (let i = 0; i < 4; i++) music.tick(100); assert.equal(bridge.paused, true); assert.equal(bridge.currentTime, 24.5);
  const special = players.get('first-special'); special.currentTime = 13.2;
  music.select('first-bridge'); assert.equal(bridge.currentTime, 24.5); assert.equal(bridge.paused, false);
  for (let i = 0; i < 5; i++) music.tick(100); assert.equal(special.paused, true);
  music.pause(); assert.equal(bridge.paused, true); assert.equal(bridge.currentTime, 24.5);
  music.select('first-special'); assert.equal(special.currentTime, 13.2);
  volume = 0; music.tick(100); assert.equal(special.volume, 0);
  music.reset(); assert.equal(special.currentTime, 0); assert.equal(bridge.currentTime, 0); assert.equal(music.active, null);
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
