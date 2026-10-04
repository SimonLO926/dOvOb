import assert from "node:assert/strict";
import test from "node:test";
import { BASS, LEAD, MIX, STEP, clearPitches, comboPitches, midi, sandPitches, tspinPitches } from "./audio.mjs";

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
