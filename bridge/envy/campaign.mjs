import { sinProgress, recordSinClear, crazyLeaderboardKey } from '../crazy-sins.mjs?v=1.2.31';
import { rememberScore } from '../ranks.mjs';

export function envyUnlocked(storage, options) {
  return sinProgress(storage, undefined, options).find(boss => boss.id === 'envy').unlocked;
}

// Commit at the actual defeat after the escape and final Bridge counterattack.
// The optional capture cannot undo a clear or pay another victory bonus.
export function createCampaignRecorder(storage) {
  const recorded = new WeakSet();
  return state => {
    if (recorded.has(state) || state.sin !== 'envy' || !recordSinClear(storage, state)) return false;
    recorded.add(state);
    const score = state.stats.damage * 10 + 5000 + state.hp * 50;
    const key = crazyLeaderboardKey('envy', state.difficulty);
    try { storage.setItem(key, JSON.stringify(rememberScore([storage.getItem(key)], score))); }
    catch { /* A valid clear remains valid if the leaderboard is unavailable. */ }
    return true;
  };
}
