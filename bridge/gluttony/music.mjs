import {createStreamMusic} from '../lust/stream-music.mjs';
export const GLUTTONY_TRACKS = Object.freeze(Object.fromEntries([
  'first-bridge', 'first-special', 'first-last', 'second-bridge', 'second-special', 'second-last', 'third-last',
].map(key => [key, './assets/gluttony-music/gluttony_' + key.replaceAll('-', '_') + '.mp3'])));
export function gluttonyTrack(s) {
  if (!s || s.scene?.kind === 'lost') return null;
  if (s.stage === 3) return 'third-last';
  if (s.over) return null;
  if (s.stage === 1 && (s.scene?.kind === 'watermelon-start' || s.scene?.kind === 'chef-defeat' || s.round?.execution || s.watermelonDone || s.bossHp <= s.bossMaxHp * .2)) return 'first-last';
  if (s.stage === 2 && (s.mode === 'execution' || s.executionDone || ['execution-start','mouth-defeat'].includes(s.scene?.kind) || s.bossHp <= s.bossMaxHp * .2)) return 'second-last';
  return (s.stage === 1 ? 'first' : 'second') + (s.mode === 'bridge' || s.scene ? '-bridge' : '-special');
}
export function createGluttonyMusic(getVolume, {audioFactory} = {}) {
  return createStreamMusic(getVolume, {audioFactory, resolveUrl: key => {
    if (!Object.hasOwn(GLUTTONY_TRACKS, key)) throw new RangeError('Unknown Gluttony track: ' + key);
    return GLUTTONY_TRACKS[key];
  }});
}
