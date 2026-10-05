import test from 'node:test';
import assert from 'node:assert/strict';
import { SIN_BOSSES, sinProgress } from './crazy-sins.mjs';
const storage = entries => ({ getItem: key => entries[key] ?? null });

test('Only Greed is playable; Wrath is the final sin even after a full Greed clear', () => {
  assert.equal(SIN_BOSSES.at(-1).id, 'wrath');
  for (const save of [{}, {'bridge-greed-cleared':'1'}]) {
    const states = sinProgress(storage(save));
    assert.deepEqual(states.filter(s => s.unlocked).map(s => s.id), ['greed']);
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
