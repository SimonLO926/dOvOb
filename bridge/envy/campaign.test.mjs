import test from 'node:test';
import assert from 'node:assert/strict';
import { createEnvy, hitBoss, continueScene, finishEnvy } from './engine.mjs';
import { envyUnlocked, createCampaignRecorder } from './campaign.mjs';
import { sinProgress, recordSinClear, crazyLeaderboardKey } from '../crazy-sins.mjs';
import { FILMING_KEY, filmingEnabled } from '../filming.mjs';
import { recordGreedClear } from '../crazy-screen.mjs';
import { createCrazy } from '../crazy.mjs';
import { combatLayout } from '../combat-effects.mjs';

function storage(entries = {}) {
  const data = new Map(Object.entries(entries));
  return { data, getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) };
}
const campaign = difficulty => createEnvy({ preview: false, difficulty, random: () => .4 });
function defeat(state) {
  state.scene = null; state.form = 2; state.chaseCleared = true;
  state.bossHp = 20; hitBoss(state, 20);
}

test('existing Pride completion unlocks released Envy without replay or migration', () => {
  const save = storage({ 'bridge-crazy-cleared-pride': '1' });
  assert.equal(envyUnlocked(save), true);
  assert.equal(envyUnlocked(storage({ 'bridge-greed-cleared': '1' })), false);
  assert.equal(save.data.size, 1);
  const envy = sinProgress(save).find(boss => boss.id === 'envy');
  assert.equal(envy.entry, 'envy.html'); assert.equal(envy.cleared, false);
  assert.throws(() => createCrazy({ sin: 'envy' }), /dedicated encounter/);
});
test('filming unlocks only released bosses and preserves real clears', () => {
  assert.equal(filmingEnabled(storage({ [FILMING_KEY]: '1' })), true);
  assert.equal(filmingEnabled(storage()), false);
  assert.equal(filmingEnabled({ getItem() { throw Error('blocked'); } }), false);
  const save = storage();
  const states = sinProgress(save, undefined, { filming: true });
  assert.deepEqual(states.filter(boss => boss.unlocked).map(boss => boss.id), ['greed', 'pride', 'envy']);
  assert.ok(states.every(boss => !boss.cleared)); assert.equal(save.data.size, 0);
});
test('campaign cannot launch a partial preview and retains full encounter difficulty and feedback', () => {
  assert.throws(() => createEnvy({ preview: false, scenario: 'capture' }), /full encounter/);
  const state = campaign('hard');
  assert.equal(state.preview, false); assert.equal(state.scenario.id, 'full');
  assert.equal(state.form, 1); assert.equal(state.bossHp, 1000); assert.equal(state.difficulty, 'hard');
  assert.deepEqual(combatLayout(state).boss, { x: 140, y: 77 });
});
test('first defeat and locked second bar cannot count as an Envy clear', () => {
  const save = storage(), record = createCampaignRecorder(save), state = campaign();
  state.scene = null; state.bossHp = 1; hitBoss(state, 1);
  assert.equal(state.scene.kind, 'first-defeat'); assert.equal(record(state), false);
  state.scene.time = 700; continueScene(state);
  assert.equal(state.form, 2); assert.equal(state.bossMaxHp, 1300);
  state.scene = null; hitBoss(state, 10000);
  assert.equal(state.bossHp, 260); assert.equal(record(state), false);
  assert.equal(save.data.size, 0);
});
test('actual final counterattack records clear and separate Normal/Hard scores once; capture is optional', () => {
  const save = storage(), record = createCampaignRecorder(save);
  for (const difficulty of ['normal', 'hard']) {
    const state = campaign(difficulty); defeat(state);
    assert.equal(state.bossDefeated, true); assert.equal(state.won, false);
    assert.equal(record(state), true); assert.equal(record(state), false);
    const key = crazyLeaderboardKey('envy', difficulty);
    assert.deepEqual(JSON.parse(save.getItem(key)), [10200]);
    finishEnvy(state); assert.equal(state.won, true);
    assert.equal(record(state), false); assert.deepEqual(JSON.parse(save.getItem(key)), [10200]);
  }
  assert.equal(save.getItem('bridge-crazy-cleared-envy'), '1');
  assert.equal(sinProgress(save).find(boss => boss.id === 'lust').unlocked, false);
});
test('independent full/partial previews and filming never write official clears or scores', () => {
  const save = storage(), record = createCampaignRecorder(save);
  for (const state of [createEnvy(), createEnvy({ scenario: 'capture' }), createEnvy({ preview: false, filming: true })]) {
    defeat(state); assert.equal(record(state), false); assert.equal(recordSinClear(save, state), false);
  }
  for (const id of ['greed', 'pride']) {
    const state = { config: { id }, form: 2, won: true, bossHp: 0, prideDuelCleared: true, filming: true };
    assert.equal(recordSinClear(save, state), false); assert.equal(recordGreedClear(save, state), false);
  }
  assert.equal(save.data.size, 0);
});
test('blocked storage leaves Envy gated and recording does not crash gameplay', () => {
  const blocked = { getItem() { throw Error('blocked'); }, setItem() { throw Error('blocked'); } };
  assert.equal(envyUnlocked(blocked, { filming: false }), false);
  assert.equal(envyUnlocked(blocked, { filming: true }), true);
  const state = campaign(); defeat(state);
  assert.equal(createCampaignRecorder(blocked)(state), false);
});
