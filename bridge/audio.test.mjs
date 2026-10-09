import assert from "node:assert/strict";
import test from "node:test";
import { BASS, LEAD, MIX, STEP, CASINO_EFFECTS, createSound, clearPitches, comboPitches, midi, sandPitches, tspinPitches } from "./audio.mjs";
import { COUNTDOWN_TONES, COUNTDOWN_ENVELOPE } from './puzzle-countdown.mjs';

test("the loop is a four-bar 8-bit phrase loud enough to hear", () => {
  assert.equal(LEAD.length, 32);
  assert.equal(BASS.length, LEAD.length);
  assert.ok(LEAD.filter((note) => note != null).length >= 20);
  assert.ok(STEP > 0.2 && STEP < 0.4);
  assert.ok(MIX.music >= 0.6);
  assert.ok(MIX.lead >= 0.25);
  assert.ok(MIX.sfx >= 0.8);
});

test("middle C is the expected pitch", () => {
  assert.ok(Math.abs(midi(69) - 440) < 0.001);
});

test("t-spin, combo, and sand each have their own rising chime", () => {
  assert.deepEqual(tspinPitches(), [70, 74, 79, 86]);
  assert.deepEqual(sandPitches(), [62, 67, 74]);
  assert.ok(comboPitches(5).at(-1) > comboPitches(2).at(-1));
  assert.ok(comboPitches(5).length > comboPitches(2).length);
});

test("a line clear rings more notes as more rows disappear", () => {
  assert.deepEqual(clearPitches(1), [72]);
  assert.deepEqual(clearPitches(2), [72, 76]);
  assert.deepEqual(clearPitches(3), [72, 76, 79]);
  assert.deepEqual(clearPitches(4), [72, 76, 79, 84]);
  assert.deepEqual(clearPitches(8), [72, 76, 79, 84]);
});

test('BGM and sound effect gains can be muted independently and restored live', async () => {
  const original = globalThis.AudioContext, gains = [];
  globalThis.AudioContext = class {
    constructor() { this.destination = {}; this.currentTime = 0; this.state = 'running'; }
    createGain() {
      const node = {gain:{value:0,setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){}};
      gains.push(node); return node;
    }
    createOscillator() { return {frequency:{setValueAtTime(){}},connect(){},start(){},stop(){}}; }
  };
  try {
    const { createSound } = await import('./audio.mjs');
    let music = .7, sfx = .5;
    const sound = createSound(() => 1, { music: () => music, sfx: () => sfx });
    sound.blip(400); assert.equal(gains[1].gain.value, MIX.music * .7); assert.equal(gains[2].gain.value, MIX.sfx * .5);
    music = 0; sound.setVolume(); assert.equal(gains[1].gain.value, 0); assert.equal(gains[2].gain.value, MIX.sfx * .5);
    music = 1; sfx = 0; sound.setVolume(); assert.equal(gains[1].gain.value, MIX.music); assert.equal(gains[2].gain.value, 0);
  } finally { if (original === undefined) delete globalThis.AudioContext; else globalThis.AudioContext = original; }
});

test('Casino collection batches produce metallic clatter, throttle bursts and obey SFX mute', () => {
  const original=globalThis.AudioContext, tones=[];let context,sfx=1;
  globalThis.AudioContext=class {
    constructor(){context=this;this.destination={};this.currentTime=0;this.state='running';}
    createGain(){return{gain:{value:0,setValueAtTime(){},exponentialRampToValueAtTime(){}},connect(){}};}
    createOscillator(){return{frequency:{setValueAtTime(f){tones.push(f);}},connect(){},start(){},stop(){}};}
  };
  try {
    const sound=createSound(()=>1,{music:()=>0,sfx:()=>sfx});
    assert.equal(CASINO_EFFECTS.crazyPusherDropSound,'coinDrop');
    assert.equal(CASINO_EFFECTS.crazyPusherStepSound,'coinDrop');
    assert.notEqual(CASINO_EFFECTS.crazyPusherInsertSound,CASINO_EFFECTS.crazyPusherDropSound);
    assert.equal(CASINO_EFFECTS.crazyCasinoPayoutSound,'payout');
    sound.playCasino('coinDrop',2);const first=tones.length;assert.ok(first>=4);
    sound.playCasino('coinDrop',6);assert.equal(tones.length,first,'Rapid batches must not stack unlimited sounds');
    context.currentTime=.1;sound.playCasino('coinDrop',6);assert.ok(tones.length-first>first);
    const beforeMute=tones.length;sfx=0;sound.playCasino('jackpot');assert.equal(tones.length,beforeMute);
    sfx=1;sound.playCasino('slotWin');assert.ok(tones.length>beforeMute);
  } finally { if(original===undefined)delete globalThis.AudioContext;else globalThis.AudioContext=original; }
});

test('puzzle countdown has a gentle audible sustain, independent SFX volume, and never queues muted cues', () => {
  const original = globalThis.AudioContext, tones = [], gains = [];
  let master = 1, sfx = .5;
  globalThis.AudioContext = class {
    constructor() { this.destination = {}; this.currentTime = 2; this.state = 'running'; }
    createGain() {
      const node = {gain: {value: 0, ramps: [], sets: [], setValueAtTime(v, t) { this.sets.push([v, t]); },
        exponentialRampToValueAtTime(v, t) { this.ramps.push([v, t]); }},
        connect(dest) { this.dest = dest; }};
      gains.push(node); return node;
    }
    createOscillator() {
      const o = {frequency: {setValueAtTime(f) { o.freq = f; }},
        connect(g) { o.gain = g; }, start(t) { o.startAt = t; }, stop(t) { o.stopAt = t; }};
      tones.push(o); return o;
    }
  };
  try {
    const sound = createSound(() => master, {music: () => 0, sfx: () => sfx});
    sound.playPuzzleCountdown('tick'); sound.playPuzzleCountdown('end');
    assert.equal(tones.length, 2);
    for (const [i, tone] of [[0, COUNTDOWN_TONES.tick], [1, COUNTDOWN_TONES.end]]) {
      const o = tones[i]; assert.equal(o.type, 'sine'); assert.equal(o.freq, 580);
      assert.deepEqual(o.gain.gain.ramps, [[tone.volume, 2 + COUNTDOWN_ENVELOPE.attack], [COUNTDOWN_ENVELOPE.floor, 2 + tone.duration]]);
      assert.deepEqual(o.gain.gain.sets, [[COUNTDOWN_ENVELOPE.floor, 2], [tone.volume, 2 + tone.duration * COUNTDOWN_ENVELOPE.sustain]]);
      assert.equal(o.stopAt, 2 + tone.duration + COUNTDOWN_ENVELOPE.tail); assert.equal(o.gain.dest, gains[2]);
      assert.ok(tone.volume < MIX.blip / 6, 'Countdown stays substantially softer than normal feedback');
    }
    assert.equal(gains[1].gain.value, 0, 'Muted BGM must not mute the countdown');
    assert.equal(gains[2].gain.value, MIX.sfx * .5);
    sfx = 0; sound.playPuzzleCountdown('tick'); sound.playPuzzleCountdown('end');
    assert.equal(tones.length, 2);
    sfx = .8; sound.setVolume(); assert.equal(tones.length, 2, 'Unmuting must not replay skipped cues');
    sound.playPuzzleCountdown('tick'); assert.equal(tones.length, 3);
    assert.equal(gains[2].gain.value, MIX.sfx * .8);
    master = 0; sound.playPuzzleCountdown('tick'); assert.equal(tones.length, 3);
    sound.playPuzzleCountdown('unknown'); assert.equal(tones.length, 3);
  } finally { if (original === undefined) delete globalThis.AudioContext; else globalThis.AudioContext = original; }
});
