import test from 'node:test';
import assert from 'node:assert/strict';
import { puzzleCountdownCue,COUNTDOWN_TONES,COUNTDOWN_PUZZLES } from './countdown.mjs';
import { createEnvy,updateEnvy } from './engine.mjs';
import { COUNTDOWN_TONES as COMMON_TONES } from '../puzzle-countdown.mjs';

test('Every puzzle produces three soft ticks and one longer end cue, each only at its actual clock boundary',()=>{
  for(const id of COUNTDOWN_PUZZLES){
    const m={id,duration:60000,clock:56984,done:false},heard=[];
    while(m.clock<60032){const before=m.clock;m.clock+=16;const cue=puzzleCountdownCue(m,before);if(cue)heard.push(cue);}
    assert.deepEqual(heard,[COUNTDOWN_TONES.tick,COUNTDOWN_TONES.tick,COUNTDOWN_TONES.tick,COUNTDOWN_TONES.end],id);
  }
  assert.equal(COUNTDOWN_TONES,COMMON_TONES,'Every Boss must use the same tone parameters');
  assert.ok(COUNTDOWN_TONES.tick.volume<.1);assert.equal(COUNTDOWN_TONES.end.duration,COUNTDOWN_TONES.tick.duration*3);
});
test('Pause, early completion and final-window reveal cannot produce false timeout warnings',()=>{
  const m={id:'eye-room',duration:180000,clock:177000,done:false};
  assert.equal(puzzleCountdownCue(m,m.clock),null);
  m.done=true;m.success=true;m.clock=180000;assert.equal(puzzleCountdownCue(m,179984),null);
  const last={id:'window',duration:60000,clock:60000,stage:5,reveal:800,done:false};assert.equal(puzzleCountdownCue(last,59984),null);
  for(const id of ['bridge','chase','laser','net','pellets','territory'])assert.equal(puzzleCountdownCue({id,duration:20000,clock:17000},16984),null);
});
test('A real timeout still sounds once after the engine changes round, while a retry starts with no old cue',()=>{
  const s=createEnvy({scenario:'window'}),old=s.round;old.clock=old.duration-16;
  updateEnvy(s,16);assert.equal(old.done,true);assert.equal(old.success,false);assert.equal(s.scene.kind,'round-result');
  assert.equal(puzzleCountdownCue(old,59984),COUNTDOWN_TONES.end);
  const fresh=createEnvy({scenario:'window'});assert.equal(puzzleCountdownCue(fresh.round,0),null);
  // A muted threshold is consumed by game time, so unmuting cannot replay it.
  fresh.round.clock=57000;puzzleCountdownCue(fresh.round,56984);fresh.round.clock=57016;assert.equal(puzzleCountdownCue(fresh.round,57000),null);
});
