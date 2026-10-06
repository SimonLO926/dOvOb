import test from 'node:test';
import assert from 'node:assert/strict';
import { createPridePreview } from './pride-preview.mjs';
import { updateCrazy, healCrazy, hitCrazyBoss, skipCrazyCinematic, createCrazy } from './crazy.mjs';

test('A real single-line Bridge clear restores Normal health in both difficulties without requiring a combo', () => {
  for (const difficulty of ['normal', 'hard']) {
    const s = createPridePreview('mirror', { difficulty, random: () => .4 });
    s.hp = 50;
    s.bridge.grid.at(-1).fill({ type: 'T' });
    s.bridge.active = null; s.bridge.phase = 'resolving'; s.resolveMs = 0;
    updateCrazy(s, 0);
    assert.equal(s.bridge.combo, 1);
    assert.equal(s.hp, difficulty === 'normal' ? 54 : 52);
  }
});

test('Normal rewards earned minigame progress once and Hard also earns progress recovery at 50%', () => {
  for (const scenario of ['pride-mirror-match', 'second:pride-shard-puzzle']) {
    const normal = createPridePreview(scenario, { difficulty: 'normal', random: () => .4 });
    normal.hp = 50; normal.mini.score = 200;
    updateCrazy(normal, 0);
    assert.equal(normal.hp, 54);
    updateCrazy(normal, 0);
    assert.equal(normal.hp, 54);
    normal.mini.score = 400;
    updateCrazy(normal, 0);
    assert.equal(normal.hp, 58);
    const hard = createPridePreview(scenario, { difficulty: 'hard', random: () => .4 });
    hard.hp = 50; hard.mini.score = 400;
    updateCrazy(hard, 0);
    assert.equal(hard.hp, 54);
    healCrazy(hard, 12);
    assert.equal(hard.hp, 60);
  }
});

test('The cat appears and applies its gift in both Pride bosses, including second minigames', () => {
  for (const scenario of ['pride-crown-choice', 'mirror', 'second:pride-shard-puzzle', 'second:pride-crown-up']) {
    const s = createPridePreview(scenario, { difficulty: 'normal', random: () => .9 });
    assert.ok(Number.isFinite(s.catDue) && s.catDue > 0 && s.catDue <= 8000, scenario);
    s.hp = 30; s.catDue = 0;
    updateCrazy(s, 0);
    assert.equal(s.cat.action, 'heal', scenario);
    s.cat.time = 1200;
    updateCrazy(s, 0);
    assert.equal(s.hp, 38, scenario);
    assert.equal(s.stats.healed, 8, scenario);
    updateCrazy(s, 0);
    assert.equal(s.hp, 38, 'A gift cannot apply twice');
  }
});

test('Normal tower recovery follows successful floors and cannot repeat at one floor count', () => {
  const normal = createPridePreview('tower', { difficulty: 'normal', random: () => .4 });
  normal.hp = 50; normal.mini.floors = 3;
  updateCrazy(normal, 0);
  assert.equal(normal.hp, 55);
  updateCrazy(normal, 0);
  assert.equal(normal.hp, 55);
  normal.mini.floors = 6;
  updateCrazy(normal, 0);
  assert.equal(normal.hp, 60);
  const hard = createPridePreview('tower', { difficulty: 'hard', random: () => .4 });
  hard.hp = 50; hard.mini.floors = 6;
  updateCrazy(hard, 0);
  assert.equal(hard.hp, 55);
});

test('Surviving an attack adds Normal recovery with smaller Hard recovery and never after death', () => {
  for (const scenario of ['pride-gaze', 'second:pride-gaze-up']) {
    const normal = createPridePreview(scenario, { difficulty: 'normal', random: () => .4 });
    normal.hp = 50; normal.timeLeft = 0; normal.attackDone = true;
    updateCrazy(normal, 0);
    assert.equal(normal.hp, 58);
    const hard = createPridePreview(scenario, { difficulty: 'hard', random: () => .4 });
    hard.hp = 50; hard.timeLeft = 0; hard.attackDone = true;
    updateCrazy(hard, 0);
    assert.equal(hard.hp, 52);
    hard.hp = 0; hard.over = true;
    healCrazy(hard, 12);
    assert.equal(hard.hp, 0);
  }
});


test('Hard large Pride awards are trimmed by one HP while Normal and Greed keep their amounts', () => {
  for (const difficulty of ['normal', 'hard']) {
    const s = createPridePreview('pride-crown-choice', {difficulty, random:()=>.4});
    s.hp=50; s.mini.status='won'; updateCrazy(s,0);
    assert.equal(s.hp, difficulty==='hard'?55:66, 'First minigame win');
    const phase = createPridePreview('pride-gaze', {difficulty, random:()=>.4});
    phase.hp=50; phase.bossHp=667; phase.damageLeft=20; hitCrazyBoss(phase,10);
    assert.equal(phase.hp,difficulty==='hard'?55:62,'Phase reward');
    phase.cutscene={kind:'transform',time:1000}; skipCrazyCinematic(phase);
    assert.equal(phase.hp,difficulty==='hard'?64:82,'Transformation reward');
  }
  const greed=createCrazy({difficulty:'hard',random:()=>.4});
  greed.hp=50;greed.bossHp=601;greed.damageLeft=20;hitCrazyBoss(greed,10);
  assert.equal(greed.hp,56,'Greed phase remains 6');
  greed.cutscene={kind:'transform',time:1000};skipCrazyCinematic(greed);
  assert.equal(greed.hp,66,'Greed transformation remains 10');
});
