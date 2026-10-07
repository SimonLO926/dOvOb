import { PRIDE_MINIGAME_IDS } from './minigames/index.mjs';
import { readGreedClear } from './crazy-screen.mjs?v=1.2.28';

// Add a playable encounter and mark it developed when each future boss ships.
export const SIN_BOSSES = Object.freeze([
  // Greed's complete ordered deck includes its arcade pool; never sample or reorder it here.
  { id: 'greed', name: '貪婪', icon: '💰',
    minigames: ['slots', 'tiger', 'pachinko', 'cards', 'mahjong', 'breakout', 'pinball', 'bbtan', 'sand', 'dodge'],
    attacks: ['jump', 'coins', 'motion', 'vortex', 'roulette'], finisher: 'vault', arcadePool: ['breakout', 'pinball', 'bbtan', 'sand'],
    recovery: ['cards', 'mahjong', 'slots'], label: 'crazyGreed', developed: true },
  { id: 'pride', name: '傲慢', icon: '👑', minigames: PRIDE_MINIGAME_IDS, attacks: ['pride-gaze', 'pride-mirror', 'pride-crown-shock'], finisher: 'pride-mirror-duel', arcadePool: ['breakout', 'pinball', 'bbtan', 'sand'], recovery: PRIDE_MINIGAME_IDS, label: 'sinPride', developed: true },
  { id: 'envy', name: '嫉妒', icon: '👁', minigames: [], attacks: [], finisher: null, arcadePool: [], recovery: [], label: 'sinEnvy', developed: false },
  { id: 'lust', name: '色慾', icon: '💘', minigames: [], attacks: [], finisher: null, arcadePool: [], recovery: [], label: 'sinLust', developed: false },
  { id: 'gluttony', name: '暴食', icon: '🍔', minigames: [], attacks: [], finisher: null, arcadePool: [], recovery: [], label: 'sinGluttony', developed: false },
  { id: 'sloth', name: '怠惰', icon: '😴', minigames: [], attacks: [], finisher: null, arcadePool: [], recovery: [], label: 'sinSloth', developed: false },
  { id: 'wrath', name: '憤怒', icon: '🔥', minigames: [], attacks: [], finisher: null, arcadePool: [], recovery: [], label: 'sinWrath', developed: false },
].map(boss => Object.freeze({ ...boss, minigames: Object.freeze(boss.minigames), attacks: Object.freeze(boss.attacks), arcadePool: Object.freeze(boss.arcadePool), recovery: Object.freeze(boss.recovery) })));

export function sinProgress(storage, bosses = SIN_BOSSES) {
  const cleared = id => {
    if (id === 'greed') return readGreedClear(storage);
    try { return storage.getItem(`bridge-crazy-cleared-${id}`) === '1'; } catch { return false; }
  };
  return bosses.map((boss, index) => ({ ...boss, cleared: cleared(boss.id),
    unlocked: boss.developed && (index === 0 || cleared(bosses[index - 1].id)) }));
}

export function crazyLeaderboardKey(sin = 'greed', difficulty = 'hard') {
  const base = sin === 'greed' ? 'bridge-best-crazy' : `bridge-best-crazy-${sin}`;
  return base + (difficulty === 'normal' ? '-normal' : '');
}
export function recordSinClear(storage, s) {
  if (s.config?.id !== 'pride' || !s.won || s.bossHp !== 0 || !s.prideDuelCleared) return false;
  try { storage.setItem('bridge-crazy-cleared-pride', '1'); return true; } catch { return false; }
}
