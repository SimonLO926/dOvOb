import assert from 'node:assert/strict';
import test from 'node:test';
import { createCrazy, advanceCrazy, updateCrazy, inputCrazy, skipCrazyCinematic } from './crazy.mjs';
import { COUNTDOWN_TONES, CRAZY_COUNTDOWN_PUZZLES, countdownCue } from './puzzle-countdown.mjs';
import { PRIDE_SECOND_MODES } from './pride-second.mjs';
import { createPridePreview } from './pride-preview.mjs';
import { enterCrazyVault } from './crazy.mjs';

const phases = ['pride-kaleidoscope', 'pride-nested'];
const second = ['pride-shard-puzzle', 'pride-truth-trial', 'pride-mirror-maze', ...phases];
function encounter(mode, difficulty = 'normal') {
  const s = createCrazy({sin: mode.startsWith('pride-') ? 'pride' : 'greed', difficulty, random: () => .4});
  if (s.cutscene) { s.cutscene.time = 1000; skipCrazyCinematic(s); }
  if (PRIDE_SECOND_MODES.includes(mode)) { s.cutscene = {kind: 'transform', time: 1000}; s.prideDuelCleared = true; skipCrazyCinematic(s); }
  advanceCrazy(s, mode);
  s.catDue = Infinity; s.attackDone = true; s.actionReady = true;
  s.events.length = 0;
  return s;
}
const drain = s => s.events.splice(0).filter(e => e.key === 'crazyPuzzleCountdown').map(e => e.cue);
const run = (s, ms) => { for (let left = ms; left > 0; left -= 50) updateCrazy(s, Math.min(50, left)); };
function deadline(s, ms) {
  if (s.mode === 'cards' || s.mode === 'mahjong') s.mini.roundLeft = ms;
  else if (phases.includes(s.mode)) s.mini.phaseUntil = s.mini.clock + ms;
  else if (second.includes(s.mode)) s.timeLeft = ms;
  else s.timeLeft = s.mini.timeLeft = ms;
}

test('both bosses use the shared audible sine tones and one cue per crossed boundary', () => {
  assert.deepEqual(COUNTDOWN_TONES, {
    tick: {frequency:580, duration:.12, type:'sine', volume:.065},
    end: {frequency:580, duration:.36, type:'sine', volume:.075},
  });
  assert.equal(countdownCue(3010, 3000), 'tick');
  assert.equal(countdownCue(3000, 2990), null);
  assert.equal(countdownCue(3000, 2990, false, true), 'tick');
  assert.equal(countdownCue(20, 0), 'end');
  assert.equal(countdownCue(0, 0), null);
  assert.equal(countdownCue(3010, 3000, true), null);
  assert.equal(countdownCue(5000, 900), 'tick', 'Skipped seconds must not queue a burst');
});

test('all ten real puzzle modes produce 3, 2, 1 and one expiry in Normal and Hard', () => {
  for (const difficulty of ['normal', 'hard']) for (const mode of CRAZY_COUNTDOWN_PUZZLES) {
    const s = encounter(mode, difficulty); deadline(s, 3100);
    run(s, 3150);
    assert.deepEqual(drain(s), ['tick', 'tick', 'tick', 'end'], `${difficulty}: ${mode}`);
    updateCrazy(s, 50); assert.deepEqual(drain(s), [], 'Expiry must not repeat on the next frame');
  }
});

test('Greed’s actual short pair clock restarts after success and pauses during cat block / cooldown', () => {
  for (const mode of ['cards', 'mahjong']) {
    const s = encounter(mode); assert.equal(s.mini.roundLeft, 3000);
    updateCrazy(s, 0); assert.deepEqual(drain(s), [], 'Zero elapsed time is not a countdown update');
    run(s, 50); assert.deepEqual(drain(s), ['tick'], 'A fresh three-second pair must give its first quiet tick');
    s.cooldown = 500; const left = s.mini.roundLeft;
    run(s, 200); assert.equal(s.mini.roundLeft, left); assert.deepEqual(drain(s), []);
    s.cooldown = 0; s.catBlock = 500; run(s, 200);
    assert.equal(s.mini.roundLeft, left); assert.deepEqual(drain(s), []);
    s.catBlock = 0; s.mini.items = mode === 'cards' ? [1, 1, 2, 3] : [1, 1, 2, 2, 3, 3]; s.mini.target = 1;
    s.mini.roundLeft = 5; s.mini.focus = 0; inputCrazy(s, 'action'); inputCrazy(s, 'action', false);
    s.mini.focus = 1; inputCrazy(s, 'action'); inputCrazy(s, 'action', false);
    updateCrazy(s, 50); assert.deepEqual(drain(s), [], 'Completed pair must not give a false expiry');
    run(s, 400); assert.deepEqual(drain(s), ['tick'], 'Next pair is a fresh countdown');
  }
});

test('Pride early completion, puzzle-to-counter changes and cutscenes stop cues', () => {
  for (const mode of CRAZY_COUNTDOWN_PUZZLES.filter(m => m.startsWith('pride-'))) {
    const s = encounter(mode); deadline(s, 5);
    if (phases.includes(mode)) { s.mini.phase = 'counter'; s.mini.phaseUntil = s.mini.clock + 1400; }
    else if (second.includes(mode)) s.mini.finished = true;
    else s.mini.status = 'won';
    updateCrazy(s, 50); assert.deepEqual(drain(s), [], mode);
    const paused = encounter(mode); deadline(paused, 3010);
    paused.cutscene = {kind: 'intro', time: 0, duration: 3000};
    run(paused, 1000); assert.deepEqual(drain(paused), []);
  }
});

test('time penalties sound once at the current boundary, with no duplicate or skipped-second replay', () => {
  const s = encounter('pride-mirror-match'); deadline(s, 1500);
  s.mini.items = ['a', 'b', 'c', 'd', 'b', 'a', 'c', 'd']; s.mini.focus = 0;
  inputCrazy(s, 'action'); inputCrazy(s, 'action', false); s.mini.focus = 4; inputCrazy(s, 'action');
  assert.deepEqual(drain(s), ['end']); updateCrazy(s, 50); assert.deepEqual(drain(s), []);
  const hint = encounter('pride-truth-trial'); deadline(hint, 4500); hint.mini.phase = 'choose';
  inputCrazy(hint, 'alt'); assert.deepEqual(drain(hint), ['tick']);
  updateCrazy(hint, 50); assert.deepEqual(drain(hint), []);
});

test('Bridge, combat, rhythm, red mirror, climbing and escape never emit puzzle countdowns', () => {
  for (const mode of ['bridge', 'sand', 'slots', 'dodge', 'pusher', 'vault', 'pride-gaze', 'pride-shard-storm', 'pride-doodle', 'pride-tower', 'pride-red-survival', 'pride-mirror-duel', 'pride-escape']) {
    const s = mode === 'pride-mirror-duel' ? createPridePreview('duel')
      : mode === 'pride-escape' ? createPridePreview('escape')
      : encounter(mode === 'vault' ? 'bridge' : mode);
    if (mode === 'vault') { s.form = 2; enterCrazyVault(s); }
    s.timeLeft = 3010; if (s.mini?.timeLeft != null) s.mini.timeLeft = 3010;
    run(s, 150); assert.deepEqual(drain(s), [], mode);
  }
});
