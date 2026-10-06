import test from 'node:test';
import assert from 'node:assert/strict';
import { PRIDE_PREVIEW_SCENARIOS, createPridePreview, prideControls } from './pride-preview.mjs';
import { inputCrazy, pointCrazy, updateCrazy, advanceCrazy, skipCrazyCinematic } from './crazy.mjs';
import { duelDecision } from './tools/pride-duel-driver.mjs';
import { prideArenaY } from './pride-layout.mjs';
import { drawPrideAttack } from './pride-attacks.mjs';

test('Every Pride preview starts a valid real round in both difficulties', () => {
  for (const difficulty of ['normal', 'hard']) for (const scenario of PRIDE_PREVIEW_SCENARIOS) {
    const s = createPridePreview(scenario.id, { difficulty, random: () => .4 });
    assert.equal(s.config.id, 'pride'); assert.equal(s.form, scenario.form);
    assert.equal(s.hp, 100); assert.equal(s.preview, true);
    if (scenario.mode) assert.equal(s.mode, scenario.mode);
    assert.equal(s.over, false); assert.ok(s.timeLeft > 0);
    assert.equal(s.held.size, 0);
    if (!['full','escape-story'].includes(scenario.id)) assert.equal(s.cutscene, null);
    if(scenario.id==='escape-story')assert.equal(s.cutscene.kind,'mirror-defeat');
    updateCrazy(s, 50);
  }
  assert.throws(() => createPridePreview('missing'), RangeError);
});

test('First encounter Doodle Jump updates its own state without requiring the mirror world', () => {
  const s = createPridePreview('pride-doodle', { difficulty: 'normal' });
  assert.equal(s.mirrorWorld, undefined);
  const before = s.mini.x;
  inputCrazy(s, 'right'); updateCrazy(s, 50); inputCrazy(s, 'right', false);
  assert.ok(s.mini.x > before);
  assert.equal(s.mini.elapsed, 50); assert.equal(s.elapsed, 50);
});

test('The king summons one royal mirror and only the incarnation uses three combat mirrors', () => {
  for (const difficulty of ['normal', 'hard']) {
    const king = createPridePreview('pride-mirror', { difficulty });
    updateCrazy(king, 50);
    assert.equal(king.form, 1); assert.equal(king.mirrorWorld, undefined);
    assert.equal(king.mini.mirrors.length, 1); assert.equal(king.mini.mirrors[0].designated, true);
    const labels = [];
    const canvas = new Proxy({}, { get: (object, key) => {
      if (key === 'fillText') return text => labels.push(text);
      if (key.startsWith('create')) return () => ({ addColorStop() {} });
      return object[key] ?? (() => {});
    } });
    drawPrideAttack(canvas, king.mini);
    assert.ok(labels.some(text => text.startsWith('王鏡')));
    assert.ok(!labels.some(text => /^[攻守幻] \d\/3$/.test(text)));
    const mirror = createPridePreview('second:pride-reflect-up', { difficulty });
    updateCrazy(mirror, 50);
    assert.equal(mirror.mirrorWorld.mirrors.length, 3);
  }
});

test('The mirror incarnation starts in Bridge and returns every third encounter without losing its board or mirrors', () => {
  for (const difficulty of ['normal', 'hard']) {
    const s = createPridePreview('mirror', { difficulty, random: () => .4 });
    assert.equal(s.mode, 'bridge');
    const world = s.mirrorWorld, board = s.bridge, modes = new Set();
    world.mirrors[0].hp = 70;
    board.grid[19][0] = { type: 'T' };
    for (let i = 0; i < 30; i++) {
      advanceCrazy(s); modes.add(s.mode);
      if (s.encounter % 3 === 0) assert.equal(s.mode, 'bridge');
      else assert.notEqual(s.mode, 'bridge');
      assert.equal(s.mirrorWorld, world); assert.equal(world.mirrors[0].hp, 70);
      assert.equal(s.bridge, board); assert.equal(board.grid[19][0].type, 'T');
      updateCrazy(s, 0);
    }
    assert.ok(modes.has('pride-doodle')); assert.ok(modes.has('pride-kaleidoscope'));
    assert.ok(modes.has('pride-mirror-maze')); assert.ok(modes.has('bridge'));
  }
});

test('Completing the real mirror duel enters playable second Bridge without repeating the transformation', () => {
  for (const difficulty of ['normal', 'hard']) {
    // Reproducible integration route; varied arenas are covered by the seeded
    // duel suite. Unseeded layouts made this fixed 50ms input route flaky.
    const s = createPridePreview('duel', { difficulty, random: () => .4 });
    const duel = s.mini;
    for (let i = 0; i < 900 && !s.cutscene && !s.over; i++) {
      const decision = duelDecision(duel);
      if (decision.target) pointCrazy(s, 280-decision.target.x, prideArenaY(decision.target.y));
      if (decision.action) { inputCrazy(s, 'action', true); inputCrazy(s, 'action', false); }
      updateCrazy(s, 50);
    }
    assert.equal(duel.hits, 3); assert.equal(s.cutscene.kind, 'king-defeat');
    s.cutscene.time = 1000; skipCrazyCinematic(s); assert.equal(s.cutscene.kind, 'transform');
    s.cutscene.time = 1000; assert.equal(skipCrazyCinematic(s), true);
    const world = s.mirrorWorld;
    assert.equal(s.form, 2); assert.equal(s.mode, 'bridge'); assert.equal(s.mini, null);
    updateCrazy(s, 50);
    assert.equal(s.cutscene, null); assert.equal(s.over, false);
    assert.equal(s.mode, 'bridge'); assert.equal(s.mirrorWorld, world);
    assert.ok(s.bridge.active);
  }
});

test('Pride story previews retain objective locks and difficulty-specific Boss HP', () => {
  for (const difficulty of ['normal', 'hard']) {
    const maxHp = difficulty === 'normal' ? 1200 : 1600;
    const duel = createPridePreview('duel', { difficulty });
    assert.equal(duel.bossHp, 200); assert.equal(duel.mode, 'pride-mirror-duel');
    assert.equal(duel.prideDuelLocked, true); assert.equal(duel.prideDuelCleared, undefined);
    const tower = createPridePreview('tower', { difficulty });
    assert.equal(tower.bossMaxHp, maxHp); assert.equal(tower.bossHp, maxHp / 2);
    assert.equal(tower.mirrorWorld.puzzlePending, true); assert.equal(tower.mirrorWorld.puzzleCleared, false);
    const red = createPridePreview('red', { difficulty });
    assert.equal(red.bossHp, maxHp * .15); assert.equal(red.mode, 'pride-red-survival');
    assert.equal(red.mirrorWorld.redEntered, true); assert.equal(red.mirrorWorld.mirrors.filter(v=>!v.broken).length,1);
  }
});

test('Touch labels expose necessary Pride alternate actions and preserve Bridge controls', () => {
  assert.equal(prideControls('bridge'), null);
  assert.equal(prideControls('pride-shard-puzzle').alt, '提示');
  assert.equal(prideControls('pride-truth-trial').alt, '重看');
  assert.equal(prideControls('pride-mirror-maze').alt, '驗證');
  assert.equal(prideControls('pride-nested').alt, '驗證');
  assert.equal(prideControls('pride-red-survival').alt, '精準');
  assert.equal(prideControls('pride-tower').action, '放層');
});

test('Pride attack screen shake obeys the saved option and reduced-motion preference', () => {
  const s = createPridePreview('pride-gaze');
  s.mini.clock = s.mini.visualShake = 400;
  const render = (reduced, screenShake) => {
    const translations = [];
    const c = new Proxy({}, { get: (object, key) => {
      if (key === 'translate') return (x, y) => translations.push([x, y]);
      if (key.startsWith('create')) return () => ({ addColorStop() {} });
      return object[key] ?? (() => {});
    } });
    drawPrideAttack(c, s.mini, reduced, { screenShake });
    return translations[2];
  };
  assert.ok(render(false, false).every(value => value === 0));
  assert.ok(render(true, true).every(value => value === 0));
  assert.ok(render(false, true).some(value => Math.abs(value) > 0));
});
