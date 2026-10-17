import {createStreamMusic} from './lust/stream-music.mjs';
export const GREED_TRACKS = Object.freeze(['first-bridge', 'first-special', 'first-last', 'second-bridge', 'second-special', 'second-last']);
export const PRIDE_TRACKS = Object.freeze([...GREED_TRACKS, 'second-mid', 'escape'].map(key => `pride-${key}`));
export function crazyTrack(s) {
  if (!s || s.over) return null;
  if (s.config?.id === 'pride') {
    if (s.mode === 'pride-escape' || s.cutscene?.kind === 'tower-collapse') return 'pride-escape';
    if (s.cutscene?.kind === 'transform') return s.cutscene.time >= 2200 ? 'pride-second-bridge' : 'pride-first-last';
    if (s.form === 2) {
      if (s.mode === 'pride-tower') return 'pride-second-mid';
      if (s.mirrorWorld?.red || s.bossHp <= s.bossMaxHp * .15) return 'pride-second-last';
      return s.mode === 'bridge' ? 'pride-second-bridge' : 'pride-second-special';
    }
    if (s.prideDuelLocked || s.cutscene?.kind === 'king-defeat' || s.bossHp <= s.bossMaxHp * .2) return 'pride-first-last';
    return s.mode === 'bridge' ? 'pride-first-bridge' : 'pride-first-special';
  }
  if (s.cutscene?.kind === 'transform') return s.cutscene.time >= 2200 ? 'second-bridge' : 'first-last';
  const form = s.form === 2 ? 'second' : 'first';
  const lastStand = s.form === 2 && s.vaultStarted;
  const lowHealth = s.bossHp <= s.bossMaxHp * (s.form === 2 ? .2 : .15);
  const part = lastStand || lowHealth ? 'last' : s.mode === 'bridge' ? 'bridge' : 'special';
  return `${form}-${part}`;
}
// Reuse two gesture-unlocked streams; cache positions by track instead of
// opening every song in this boss at once.
export function createCrazyMusic(getVolume,{audioFactory,resolveUrl=null,unlockTracks=null}={}) {
 const music=createStreamMusic(getVolume,{audioFactory,resolveUrl:resolveUrl|| (key=>{
  const pride=key.startsWith('pride-');
  if(!(pride?PRIDE_TRACKS:GREED_TRACKS).includes(key))throw new RangeError('Unknown Crazy track: '+key);
  return new URL('./assets/'+(pride?'pride':'greed')+'-music/'+(pride?key.slice(6):key)+'.mp3',import.meta.url).href;
 })});
 return {...music,unlock(sin='greed'){
  if(!music.active)music.select(unlockTracks?.[0]||(sin==='pride'?'pride-first-bridge':'first-bridge'));
  music.unlock();
 },get active(){return music.active;},get blocked(){return music.blocked;}};
}
