import { COUNTDOWN_TONES, countdownCue } from '../puzzle-countdown.mjs';
export { COUNTDOWN_TONES, playCountdownTone } from '../puzzle-countdown.mjs';

export const COUNTDOWN_PUZZLES = Object.freeze(['difference','tarot','rolling','window','pack','eye-room','pupil','capture']);

// Use the old round's clock even if its timeout has already started the next round.
// Crossing a boundary once avoids queued beeps, repeat frames and mute/resume catch-up.
export function puzzleCountdownCue(round,beforeClock){
  if(!round||!COUNTDOWN_PUZZLES.includes(round.id)||!Number.isFinite(beforeClock)||!Number.isFinite(round.duration))return null;
  if(round.id==='window'&&(round.stage>=6||(round.stage===5&&round.reveal>0)))return null;
  if(round.done&&round.success)return null;
  const cue=countdownCue(round.duration-beforeClock,round.duration-round.clock);
  return cue&&(!round.done||cue==='end')?COUNTDOWN_TONES[cue]:null;
}
