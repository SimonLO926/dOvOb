import test from 'node:test';
import assert from 'node:assert/strict';
import { t, setEnvyLanguage } from './i18n.mjs';
import { createEnvy, heal, hurt, SCENARIOS } from './engine.mjs';
import { NAMES, HINTS, TAROT, describeCard, cardEffects } from './rounds.mjs';
import { LIVES, ROOM_NAMES, ROOM_TARGETS } from './lore-games.mjs';
import { endingPresentation } from './ending.mjs';
const english = value => assert.doesNotMatch(t(value), /\p{Script=Han}/u);

test('language switches preserve original labels and all scenario/lore instructions translate', () => {
  const labels = [...SCENARIOS.map(s=>s.label), ...Object.values(NAMES), ...Object.values(HINTS), ...LIVES.map(l=>l.name), ...ROOM_NAMES, ...ROOM_TARGETS.flat().map(r=>r.label)];
  setEnvyLanguage('en');labels.forEach(english);
  assert.equal(t('找到「開心家庭」之眼'),'Found the “Happy family” eye');
  assert.equal(t('1/6 窗 · 擦開 72% · 59 秒'),'1/6 windows · Erased 72% · 59s');
  setEnvyLanguage('zh-Hant');for(const label of labels)assert.equal(t(label),label);
  assert.equal(setEnvyLanguage('es'),'en');
});

test('English card effects retain actual Normal/Hard amounts and upright/reversed rules', () => {
  setEnvyLanguage('en');
  for(const card of TAROT)for(const reversed of [false,true])for(const difficulty of ['normal','hard']) {
    english(card.name);english(reversed?'逆位':'正位');
    const choice={...card,reversed},before=cardEffects(choice,'tarot');
    for(const line of describeCard(choice,'tarot',{difficulty}))english(line);
    assert.deepEqual(cardEffects(choice,'tarot'),before);
  }
  for(const rarity of ['C','U','R','SR','SAR'])for(const difficulty of ['normal','hard'])describeCard({rarity},'pack',{difficulty}).forEach(english);
  assert.deepEqual(describeCard({...TAROT[0],reversed:true},'tarot',{difficulty:'hard'}).map(t),['Heal 7 HP']);
  assert.deepEqual(describeCard({rarity:'SAR'},'pack').map(t),['Boss damage 80','Next attack: damage taken +50%','Same round: counterattack +30%']);
});

test('actual health feedback and every ending translate without changing encounter state', () => {
  setEnvyLanguage('en');const s=createEnvy({scenario:'first-bridge',difficulty:'hard'});
  hurt(s,20);english(s.notice);assert.equal(s.hp,80);
  heal(s,10);english(s.notice);assert.equal(s.hp,85);
  for(const kind of ['first-defeat','dragon-defeat','worm-reveal','victory','lost','capture-retry'])for(const captured of [false,true]) {
    const state={...s,scene:{kind},captured},result=endingPresentation(state);
    english(result.title);english(result.caption);assert.equal(state.hp,85);
    setEnvyLanguage('zh-Hant');assert.match(endingPresentation(state).title,/\p{Script=Han}/u);setEnvyLanguage('en');
  }
});
