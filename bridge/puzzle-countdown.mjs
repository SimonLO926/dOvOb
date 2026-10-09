// All bosses share a gentle but audible countdown, separate from BGM.
export const COUNTDOWN_TONES = Object.freeze({
  tick: Object.freeze({frequency: 580, duration: .12, type: 'sine', volume: .065}),
  end: Object.freeze({frequency: 580, duration: .36, type: 'sine', volume: .075}),
});
export const COUNTDOWN_ENVELOPE = Object.freeze({floor: .0001, attack: .015, sustain: .55, tail: .015});

// The short sustain prevents BGM from masking a nearly instantaneous peak.
// Callers apply their SFX setting before calling; nothing is queued in advance.
export function playCountdownTone(context, destination, tone) {
  if (!context || !destination || !Object.values(COUNTDOWN_TONES).includes(tone)) return false;
  const now = context.currentTime, osc = context.createOscillator(), gain = context.createGain();
  osc.type = tone.type;
  osc.frequency.setValueAtTime(tone.frequency, now);
  gain.gain.setValueAtTime(COUNTDOWN_ENVELOPE.floor, now);
  gain.gain.exponentialRampToValueAtTime(tone.volume, now + COUNTDOWN_ENVELOPE.attack);
  gain.gain.setValueAtTime(tone.volume, now + tone.duration * COUNTDOWN_ENVELOPE.sustain);
  gain.gain.exponentialRampToValueAtTime(COUNTDOWN_ENVELOPE.floor, now + tone.duration);
  osc.connect(gain); gain.connect(destination);
  osc.start(now); osc.stop(now + tone.duration + COUNTDOWN_ENVELOPE.tail);
  return true;
}
export const CRAZY_COUNTDOWN_PUZZLES = Object.freeze([
  'cards', 'mahjong', 'pride-mirror-match', 'pride-crown-choice',
  'pride-lianliankan', 'pride-shard-puzzle', 'pride-truth-trial', 'pride-mirror-maze',
  'pride-kaleidoscope', 'pride-nested',
]);

// Only report the boundary crossed by this update. Never schedule future cues
// or catch up missed seconds after mute, pause, completion or a new round.
export function countdownCue(beforeMs, afterMs, completed = false, starting = false) {
  if (completed || !Number.isFinite(beforeMs) || !Number.isFinite(afterMs)) return null;
  const before = Math.ceil(beforeMs / 1000), after = Math.ceil(afterMs / 1000);
  if (before > 0 && after <= 0) return 'end';
  if (after >= 1 && after <= 3 && (before > after || (starting && afterMs < beforeMs))) return 'tick';
  return null;
}
