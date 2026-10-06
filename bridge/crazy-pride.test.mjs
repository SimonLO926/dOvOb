import test from 'node:test';
import assert from 'node:assert/strict';
import { SIN_BOSSES, sinProgress, crazyLeaderboardKey, recordSinClear } from './crazy-sins.mjs';
import { createCrazy, advanceCrazy, hitCrazyBoss, healCrazy, inputCrazy, pointCrazy, updateCrazy, skipCrazyCinematic } from './crazy.mjs';
import { PRIDE_MINIGAMES } from './minigames/index.mjs';
import { PRIDE_ATTACKS } from './pride-attacks.mjs';
const storage = () => { const data = new Map(); return { getItem: k => data.get(k), setItem: (k,v) => data.set(k,v) }; };
const pride = (difficulty = 'normal', random = () => .4) => { const s = createCrazy({ sin: 'pride', difficulty, random }); s.cutscene.time = 1000; skipCrazyCinematic(s); return s; };
const duel = s => { s.bossHp = 205; s.damageLeft = 100; hitCrazyBoss(s, 100); assert.equal(s.mode, 'pride-mirror-duel'); };
test('Pride unlock and separate Normal/Hard records use established storage', () => {
  const save = storage(); assert.equal(sinProgress(save)[1].unlocked, false);
  save.setItem('bridge-greed-cleared', '1'); assert.equal(sinProgress(save)[1].unlocked, true);
  assert.equal(crazyLeaderboardKey('pride', 'hard'), 'bridge-best-crazy-pride');
  assert.equal(crazyLeaderboardKey('pride', 'normal'), 'bridge-best-crazy-pride-normal');
  assert.equal(crazyLeaderboardKey('greed', 'hard'), 'bridge-best-crazy');
  assert.equal(crazyLeaderboardKey('greed', 'normal'), 'bridge-best-crazy-normal');
  const s = pride(); s.won = true; s.bossHp = 0; assert.equal(recordSinClear(save, s), false);
  s.prideDuelCleared = true; assert.equal(recordSinClear(save, s), true); assert.equal(sinProgress(save)[1].cleared, true);
});
test('Pride samples two distinct arcades per fight and visits every registered mode', () => {
  for (const difficulty of ['normal', 'hard']) {
    const s = pride(difficulty); const modes = new Set();
    assert.equal(s.boss.secondHp, undefined); assert.equal(s.arcadeModes.length, 2);
    assert.equal(new Set(s.arcadeModes).size, 2);
    for (let i = 0; i < 30; i++) {
      advanceCrazy(s); modes.add(s.mode);
      if (s.encounter % 3 === 0) assert.equal(s.mode, 'bridge');
      if (PRIDE_MINIGAMES[s.mode]) assert.equal(s.mini.difficulty, difficulty);
      if (PRIDE_ATTACKS.includes(s.mode)) assert.ok(s.mini.rules);
    }
    for (const mode of [...SIN_BOSSES[1].minigames, ...PRIDE_ATTACKS, ...s.arcadeModes]) assert.ok(modes.has(mode), mode);
    for (const mode of SIN_BOSSES[1].arcadePool.filter(m => !s.arcadeModes.includes(m))) assert.ok(!modes.has(mode));
  }
});
test('Mini-game keyboard, full-canvas touch, scoring, healing and completion reach combat', () => {
  for (const difficulty of ['normal', 'hard']) {
    const s = pride(difficulty); s.hp = 60;
    advanceCrazy(s, 'pride-crown-choice'); s.actionReady = true;
    const game = PRIDE_MINIGAMES[s.mode], r = game.rect(s.mini, s.mini.target);
    pointCrazy(s, r.x + r.w/2, r.y + r.h/2);
    updateCrazy(s, 16); assert.equal(s.hp, difficulty === 'normal' ? 80 : 67);
    assert.equal(s.bossHp, 950); assert.ok(s.score >= 800);
    advanceCrazy(s, 'pride-crown-choice'); s.actionReady = true;
    s.mini.focus = s.mini.target; inputCrazy(s, 'action'); updateCrazy(s, 16);
    assert.notEqual(s.mode, 'pride-crown-choice');
  }
});
test('All damage routes clamp at 20%, lock the boss and pause ordinary time during duel', () => {
  for (const difficulty of ['normal', 'hard']) {
    const s = pride(difficulty); advanceCrazy(s, 'sand'); duel(s);
    assert.equal(s.bossHp, 200); assert.equal(s.bridge.sanding, false);
    const elapsed = s.elapsed, encounter = s.encounter; hitCrazyBoss(s, 999); advanceCrazy(s);
    updateCrazy(s, 50); assert.equal(s.elapsed, elapsed); assert.equal(s.encounter, encounter);
    assert.equal(s.timeLeft, s.mini.timeLeft); assert.equal(s.mini.difficulty, difficulty);
    assert.equal(s.attack, null); assert.equal(s.cat, null); assert.equal(s.bossHp, 200);
    s.mini.result = 'success'; updateCrazy(s, 16);
    assert.equal(s.won, false); assert.equal(s.bossHp, 0); assert.equal(s.prideDuelCleared, true);
    assert.equal(s.cutscene.kind, 'king-defeat'); assert.ok(s.score >= 2000);
    const score = s.score; updateCrazy(s, 16); assert.equal(s.score, score);
    s.cutscene.time = 1000; skipCrazyCinematic(s); assert.equal(s.cutscene.kind, 'transform'); s.cutscene.time = 1000; skipCrazyCinematic(s); assert.equal(s.form, 2); assert.equal(s.bossHp, difficulty === 'normal' ? 1200 : 1600);
  }
});
test('Duel failure ignores protection; survivors resume Bridge and retry after 20 seconds', () => {
  const s = pride(); duel(s); s.protection = 999; s.mini.result = 'failure'; updateCrazy(s, 16);
  assert.equal(s.hp, 20); assert.equal(s.stats.damageTaken, 80); assert.equal(s.mode, 'bridge');
  assert.equal(s.prideDuelLocked, true); hitCrazyBoss(s, 999); assert.equal(s.bossHp, 200);
  s.prideDuelRetry = 50; updateCrazy(s, 50); assert.equal(s.mode, 'pride-mirror-duel');
  s.mini.result = 'failure'; updateCrazy(s, 16); assert.equal(s.hp, 0); assert.equal(s.over, true);
  assert.equal(s.won, false); assert.equal(s.finishReason, 'prideDuelFailed');
});
test('Pride mini-game and attack rewards can trigger finisher without replacing it', () => {
  const s = pride(); advanceCrazy(s, 'pride-crown-choice'); s.actionReady = true;
  s.bossHp = 205; s.mini.focus = s.mini.target; inputCrazy(s, 'action'); updateCrazy(s, 16);
  assert.equal(s.mode, 'pride-mirror-duel'); assert.equal(s.bossHp, 200);
  const a = pride(); advanceCrazy(a, 'pride-gaze'); a.bossHp = 205; a.timeLeft = 1;
  updateCrazy(a, 16); assert.equal(a.mode, 'pride-mirror-duel');
});
test('Pride retains total combat timeout during timed mini-games', () => {
  const s = pride(); advanceCrazy(s, 'pride-lianliankan'); s.elapsed = s.boss.limit - 1;
  updateCrazy(s, 16); assert.equal(s.over, true); assert.equal(s.finishReason, 'crazyTimeout');
});

test('Pride attack clock advances once per frame and arrow-up reaches grid navigation', () => {
  const s = pride(); advanceCrazy(s, 'pride-mirror'); updateCrazy(s, 50);
  assert.equal(s.mini.clock, 50);
  advanceCrazy(s, 'pride-crown-choice'); s.mini.focus = 4; inputCrazy(s, 'up');
  assert.equal(s.mini.focus, 1);
});
test('Cat and arcade hits safely interrupt into the locked finisher', () => {
  const s = pride(); s.bossHp = 205; s.cat = {action:'boss',time:1190,applied:false};
  updateCrazy(s, 50); assert.equal(s.mode, 'pride-mirror-duel'); assert.equal(s.cat, null);
  const a = pride(); advanceCrazy(a, 'breakout'); a.bossHp = 205;
  // The cat removes a real arcade brick and routes the damage through combat.
  a.cat = {action:'blocks',time:1190,applied:false}; updateCrazy(a, 50);
  assert.equal(a.mode, 'pride-mirror-duel'); assert.equal(a.arcade, null);
});

test('Mirror matching finishes its own objective before the first-form finisher without changing HP thresholds',()=>{
 const s=pride();advanceCrazy(s,'pride-mirror-match');s.bossHp=205;s.actionReady=true;const game=PRIDE_MINIGAMES[s.mode],m=s.mini;
 for(let i=0;i<m.pairs;i++){
  game.choose(m,i);game.choose(m,m.items.findIndex((v,n)=>n>=m.pairs&&v===m.items[i]));updateCrazy(s,16);
  assert.equal(s.bossHp,200);if(i<m.pairs-1)assert.equal(s.mode,'pride-mirror-match');
 }
 assert.equal(s.mode,'pride-mirror-duel');assert.equal(m.status,'won');
});
