import test from 'node:test';
import assert from 'node:assert/strict';
import { createCrazyMusic, crazyTrack } from './crazy-music.mjs';
import { createCrazy } from './crazy.mjs';
import { readGreedClear, recordGreedClear } from './crazy-screen.mjs';
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
test('Only complete second-form victory unlocks the persistent silhouette, storage failures stay playable', () => {
  const data = new Map(); const storage = { getItem: key => data.get(key), setItem: (key, value) => data.set(key, value) };
  assert.equal(readGreedClear(storage), false);
  assert.equal(recordGreedClear(storage, {won: true, form: 1, bossHp: 0}), false);
  assert.equal(recordGreedClear(storage, {won: false, form: 2, bossHp: 0}), false);
  assert.equal(recordGreedClear(storage, {won: true, form: 2, bossHp: 0}), true); assert.equal(readGreedClear(storage), true);
  const denied = { getItem() { throw Error('denied'); }, setItem() { throw Error('denied'); } };
  assert.equal(readGreedClear(denied), false); assert.equal(recordGreedClear(denied, {won: true, form: 2, bossHp: 0}), false);
});
