import {sinProgress,recordSinClear,crazyLeaderboardKey} from '../crazy-sins.mjs?v=1.2.38';
import {rememberScore} from '../ranks.mjs';
export const gluttonyScore = s => Math.round(s.stats.damage * 10 + 5000 + s.hp * 50);
export const gluttonyUnlocked = (storage, options) => sinProgress(storage, undefined, options).find(b => b.id === 'gluttony').unlocked;
export function createGluttonyRecorder(storage) {
  const recorded = new WeakSet();
  return s => {
    if (recorded.has(s) || s.sin !== 'gluttony' || !recordSinClear(storage, s)) return false;
    recorded.add(s);
    try {const key = crazyLeaderboardKey('gluttony', s.difficulty); storage.setItem(key, JSON.stringify(rememberScore([storage.getItem(key)], gluttonyScore(s))));} catch {}
    return true;
  };
}
