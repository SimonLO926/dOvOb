import { readGreedClear } from './crazy-screen.mjs?v=1.2.18';

// Add a playable encounter and mark it developed when each future boss ships.
export const SIN_BOSSES = Object.freeze([
  { id: 'greed', label: 'crazyGreed', developed: true },
  { id: 'pride', label: 'sinPride', developed: false },
  { id: 'envy', label: 'sinEnvy', developed: false },
  { id: 'lust', label: 'sinLust', developed: false },
  { id: 'gluttony', label: 'sinGluttony', developed: false },
  { id: 'sloth', label: 'sinSloth', developed: false },
  { id: 'wrath', label: 'sinWrath', developed: false },
].map(Object.freeze));

export function sinProgress(storage, bosses = SIN_BOSSES) {
  const cleared = id => {
    if (id === 'greed') return readGreedClear(storage);
    try { return storage.getItem(`bridge-crazy-cleared-${id}`) === '1'; } catch { return false; }
  };
  return bosses.map((boss, index) => ({ ...boss, cleared: cleared(boss.id),
    unlocked: boss.developed && (index === 0 || cleared(bosses[index - 1].id)) }));
}
