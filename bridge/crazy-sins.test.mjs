import test from 'node:test';
import assert from 'node:assert/strict';
import { SIN_BOSSES, sinProgress } from './crazy-sins.mjs';
const storage = entries => ({ getItem: key => entries[key] ?? null });

test('Pride unlocks after a full Greed clear; Wrath remains unavailable', () => {
  assert.equal(SIN_BOSSES.at(-1).id, 'wrath');
  for (const save of [{}, {'bridge-greed-cleared':'1'}]) {
    const states = sinProgress(storage(save));
    assert.deepEqual(states.filter(s => s.unlocked).map(s => s.id), save['bridge-greed-cleared'] ? ['greed', 'pride'] : ['greed']);
  }
});
test('Future developed bosses unlock only after clearing their immediate predecessor', () => {
  const released = SIN_BOSSES.map(b => ({...b, developed: true}));
  let progress = sinProgress(storage({}), released);
  assert.equal(progress[1].unlocked, false);
  progress = sinProgress(storage({'bridge-greed-cleared':'1'}), released);
  assert.equal(progress[1].unlocked, true); assert.equal(progress[2].unlocked, false);
  progress = sinProgress(storage({'bridge-crazy-cleared-sloth':'1'}), released);
  assert.equal(progress.at(-1).unlocked, true);
  const unavailable = sinProgress(storage({'bridge-crazy-cleared-sloth':'1'}));
  assert.equal(unavailable.at(-1).unlocked, false);
});
test('Unavailable storage leaves future bosses locked without blocking Greed', () => {
  const progress = sinProgress({getItem(){throw Error('blocked')}});
  assert.deepEqual(progress.filter(s => s.unlocked).map(s => s.id), ['greed']);
});

test('Greed configuration preserves the full ordered deck, five attacks and arcade pool', () => {
  const greed = SIN_BOSSES[0];
  assert.deepEqual(greed.minigames, ['slots', 'tiger', 'pachinko', 'cards', 'mahjong', 'breakout', 'pinball', 'bbtan', 'sand', 'dodge']);
  assert.deepEqual(greed.attacks, ['jump', 'coins', 'motion', 'vortex', 'roulette']);
  assert.deepEqual(greed.arcadePool, ['breakout', 'pinball', 'bbtan', 'sand']);
  assert.equal(greed.finisher, 'vault');
  for (const boss of SIN_BOSSES) {
    assert.ok(boss.name && boss.icon);
    assert.ok(Object.isFrozen(boss) && Object.isFrozen(boss.minigames) && Object.isFrozen(boss.attacks));
    if (!boss.developed) {
      assert.deepEqual(boss.minigames, boss.id === 'pride' ? ['pride-mirror-match', 'pride-crown-choice', 'pride-lianliankan'] : []); assert.deepEqual(boss.attacks, boss.id === 'pride' ? ['pride-gaze', 'pride-mirror', 'pride-crown-shock'] : []);
      assert.deepEqual(boss.arcadePool, []); assert.equal(boss.finisher, boss.id === 'pride' ? 'pride-mirror-duel' : null);
    }
  }
});
