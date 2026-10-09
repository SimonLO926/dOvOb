import { createCrazyMusic } from '../crazy-music.mjs';

export const ENVY_TRACKS = Object.freeze({
  'first-bridge': '01_first_bridge.mp3',
  'first-special': '02_first_special.mp3',
  'first-last': '03_first_last.mp3',
  'second-bridge': '04_second_bridge.mp3',
  'second-special': '05_second_special.mp3',
  'second-mid': '06_second_mid.mp3',
  'second-last': '07_second_last_vocal_en.mp3',
});
export const ENVY_FIRST_LAST_THRESHOLD = .2;

export function envyTrack(s) {
  if (!s || s.over || ['victory', 'lost'].includes(s.scene?.kind)) return null;
  const scene = s.scene?.kind;
  if (s.mode === 'capture') return 'second-last';
  if (scene === 'first-defeat') return 'first-last';
  if (scene === 'transform') return s.scene.time < 1400 ? 'first-last' : 'second-bridge';
  if (['dragon-defeat', 'worm-reveal', 'rage', 'capture-retry'].includes(scene)) return 'second-last';
  if (s.form === 1) {
    if (s.bossHp <= s.bossMaxHp * ENVY_FIRST_LAST_THRESHOLD) return 'first-last';
    return s.mode === 'bridge' ? 'first-bridge' : 'first-special';
  }
  if (s.chaseEntered || s.finalBridge || s.bossHp <= s.bossMaxHp * .2) return 'second-last';
  if (s.mode !== 'bridge') return 'second-special';
  return s.bossHp <= s.bossMaxHp * .5 ? 'second-mid' : 'second-bridge';
}

export function createEnvyMusic(getVolume, {audioFactory} = {}) {
  return createCrazyMusic(getVolume, {
    audioFactory,
    unlockTracks: Object.keys(ENVY_TRACKS),
    resolveUrl: key => {
      if (!Object.hasOwn(ENVY_TRACKS, key)) throw new RangeError('Unknown Envy track: ' + key);
      const path = './assets/envy-music/' + ENVY_TRACKS[key];
      return globalThis.__envyAsset ? globalThis.__envyAsset(path) : new URL('../assets/envy-music/' + ENVY_TRACKS[key], import.meta.url).href;
    },
  });
}
