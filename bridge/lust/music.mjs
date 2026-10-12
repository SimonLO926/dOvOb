import {createStreamMusic} from './stream-music.mjs';

export const LUST_TRACKS = Object.freeze({
  'first-bridge': './assets/lust-music/lust_first_bridge.mp3',
  'first-special': './assets/lust-music/lust_first_special.mp3',
  'first-last': './assets/lust-music/lust_first_last.mp3',
  'second-bridge': './assets/lust-music/lust_second_bridge.mp3',
  'second-special': './assets/lust-music/lust_second_special.mp3',
  'second-last': './assets/lust-music/lust_second_last.mp3',
  'ending-good': './assets/lust-music/lust_ending_good.mp3',
  'ending-bad': './assets/lust-music/lust_ending_bad.mp3',
});

export function lustTrack(s) {
  if (!s) return null;
  const scene = s.scene?.kind;
  // Final ending music must remain available after combat has stopped.
  if (scene === 'good') return 'ending-good';
  if (scene === 'bad') return 'ending-bad';
  if (s.over || scene === 'lost') return null;
  if (scene === 'first-defeat') return 'first-last';
  if (scene === 'transform') return s.scene.time < 1400 ? 'first-last' : 'second-bridge';
  if (['rage-story', 'bond', 'collapse'].includes(scene) || s.mode === 'dating') return 'second-last';
  if (s.form === 1 && s.mode === 'charm') return 'first-last';
  return `${s.form === 2 ? 'second' : 'first'}-${s.mode === 'bridge' ? 'bridge' : 'special'}`;
}

export function createLustMusic(getVolume, {audioFactory} = {}) {
  return createStreamMusic(getVolume, {
    audioFactory,
    resolveUrl: key => {
      if (!Object.hasOwn(LUST_TRACKS, key)) throw new RangeError('Unknown Lust track: ' + key);
      return LUST_TRACKS[key];
    },
  });
}
