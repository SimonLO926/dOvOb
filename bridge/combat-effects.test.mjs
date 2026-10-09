import test from 'node:test';
import assert from 'node:assert/strict';
import { createCombatEffects, resetCombatEffects, updateCombatEffects, combatLayout, drawCombatEffects } from './combat-effects.mjs';
import { createCrazy, hitCrazyBoss, hurtCrazy, healCrazy, advanceCrazy, updateCrazy } from './crazy.mjs';
import { createEnvy, hitBoss, hurt, heal, startRound } from './envy/engine.mjs';
import { createPridePreview } from './pride-preview.mjs';

function observe(s) { return resetCombatEffects(createCombatEffects(), s); }
function official(sin) { const s = createCrazy({ sin, difficulty: 'normal', random: () => .25 }); s.cutscene = null; s.protection = 0; return s; }
test('actual accepted Greed, Pride and Envy hits fly once; healing cannot hide accepted player damage', () => {
  for (const sin of ['greed', 'pride', 'envy']) {
    const s = sin === 'envy' ? createEnvy({ scenario: 'first-bridge' }) : official(sin), fx = observe(s);
    if (sin === 'envy') { hitBoss(s, 18); hurt(s, 8); heal(s, 8); }
    else { hitCrazyBoss(s, 18); hurtCrazy(s, 8); healCrazy(s, 8); }
    assert.equal(s.hp, 100, sin);
    updateCombatEffects(fx, s, 16);
    assert.equal(fx.flights.length, 1, sin); assert.ok(fx.playerHit, sin);
    assert.deepEqual(fx.flights[0].to, combatLayout(s).boss);
    updateCombatEffects(fx, s, 16);
    assert.equal(fx.flights.length, 1); assert.equal(fx.flights[0].age, 16);
    for (let i = 0; i < 12; i++) updateCombatEffects(fx, s, 50);
    assert.equal(fx.flights.length, 0); assert.equal(fx.playerHit, null);
  }
});
test('guards / invulnerability cause no fake effects, including independent red-mirror locked final HP', () => {
  const greed = official('greed'); greed.vaultLocked = true;
  const g = observe(greed); hitCrazyBoss(greed, 50); greed.protection = 500; hurtCrazy(greed, 10);
  updateCombatEffects(g, greed, 16); assert.equal(g.flights.length, 0); assert.equal(g.playerHit, null);
  const envy = createEnvy({ scenario: 'rage' }), e = observe(envy);
  hitBoss(envy, 40); updateCombatEffects(e, envy, 16); assert.equal(e.flights.length, 0);
  const red = createPridePreview('red'); red.cutscene = null; const r = observe(red);
  // The independent red bar can take accepted damage while main HP is locked.
  red.mini.damage += 4; red.mini.bossHp -= 4;
  updateCombatEffects(r, red, 16); assert.equal(r.flights.length, 1);
  red.mini.bossHp = 1; updateCombatEffects(r, red, 16); assert.equal(r.flights.length, 1);
  // A final accepted hit remains observable if the same update changes mode.
  r.flights = [];
  red.mini.damage++; advanceCrazy(red, 'bridge'); updateCombatEffects(r, red, 16);
  assert.equal(r.flights.length, 1); assert.deepEqual(r.flights[0].to, { x: 140, y: 68 });
});
test('pause freezes cues, hidden views consume damage, reset and defeat cannot replay damage on another form', () => {
  const s = official('greed'), fx = observe(s); hitCrazyBoss(s, 20); updateCombatEffects(fx, s, 16);
  const saved = JSON.stringify(fx.flights); updateCombatEffects(fx, s, 50, { paused: true });
  assert.equal(JSON.stringify(fx.flights), saved);
  hitCrazyBoss(s, 10); updateCombatEffects(fx, s, 50, { paused: true });
  updateCombatEffects(fx, s, 16); assert.equal(fx.flights.length, 1);
  updateCombatEffects(fx, s, 16, { visible: false }); assert.equal(fx.flights.length, 0);
  s.stats.damage += 10; updateCombatEffects(fx, s, 16, { visible: false });
  updateCombatEffects(fx, s, 16); assert.equal(fx.flights.length, 0);
  s.cutscene = { kind: 'transform' }; s.stats.damage += 200; updateCombatEffects(fx, s, 16);
  s.cutscene = null; s.form = 2; updateCombatEffects(fx, s, 16); assert.equal(fx.flights.length, 0);
  const fresh = official('pride'); fresh.stats.damage = 100; updateCombatEffects(fx, fresh, 16);
  assert.equal(fx.flights.length, 0);
});
test('cat damage and all native head positions are observed without changing the gameplay UI', () => {
  const s = official('greed'), fx = observe(s); s.cat = { action: 'boss', time: 1190, applied: false };
  updateCrazy(s, 50); updateCombatEffects(fx, s, 50); assert.equal(fx.flights.length, 1);
  for (const scenario of ['full', 'mirror', 'mirror-two', 'mirror-red', 'red', 'pride-mirror-match']) {
    const p = createPridePreview(scenario); p.cutscene = null;
    assert.equal(combatLayout(p).boss.y, p.mode === 'bridge' ? 68 : 40, scenario);
  }
  const envy = createEnvy({ scenario: 'first-bridge' }); assert.equal(combatLayout(envy).boss.y, 77);
  startRound(envy, 'window'); assert.equal(combatLayout(envy).boss.y, 57);
  const flight = observe(envy); hitBoss(envy, 18); updateCombatEffects(flight, envy, 16);
  assert.ok(flight.flights[0].from.y >= 152 && flight.flights[0].from.y <= 450);
});
test('plain escape and capture never attack an absent head; reduced motion draws a static head cue', () => {
  const escape = createPridePreview('escape'), capture = createEnvy({ scenario: 'capture' });
  for (const s of [escape, capture]) {
    const fx = observe(s); s.stats.damage += 10; s.stats.damageTaken += 4;
    updateCombatEffects(fx, s, 16); assert.equal(fx.flights.length, 0); assert.ok(fx.playerHit);
    assert.equal(combatLayout(s).boss, null);
  }
  const s = official('pride'), fx = observe(s); hitCrazyBoss(s, 20);
  updateCombatEffects(fx, s, 16, { reducedMotion: true }); assert.equal(fx.flights[0].flight, 0);
  const calls = [], context = new Proxy({ canvas: { width: 280, height: 720 } }, {
    get(target, key) { return key in target ? target[key] : (...args) => calls.push([key, ...args]); }
  });
  drawCombatEffects(context, fx, { reducedMotion: true });
  assert.ok(calls.some(([name]) => name === 'stroke')); assert.ok(!calls.some(([name]) => name === 'arc'));
  assert.ok(!calls.some(([name]) => name === 'fillRect'), 'no opaque board wash or heart replacement');
});

test('actual Pride spike / mirror-duel life loss is visible even when player HP remains unchanged', () => {
  const escape = createPridePreview('escape', { difficulty: 'normal' }), m = escape.mini;
  const spike = m.platforms.find(p => p.spikes);
  Object.assign(m, { x: spike.x + spike.w * .75, y: spike.y - 8, safe: spike, camera: spike.y - 240 });
  const e = observe(escape); updateCrazy(escape, 16); updateCombatEffects(e, escape, 16);
  assert.equal(m.lives, 2); assert.equal(escape.hp, 100); assert.ok(e.playerHit); assert.equal(e.flights.length, 0);
  const duel = createPridePreview('duel', { difficulty: 'normal' }), d = observe(duel), game = duel.mini;
  game.bullets.push({ x: game.x, y: game.y, vx: 0, vy: 0, age: 0 });
  updateCrazy(duel, 16); updateCombatEffects(d, duel, 16);
  assert.equal(game.lives, 2); assert.equal(duel.hp, 100); assert.ok(d.playerHit);
  assert.equal(d.playerHit.at.x, 280 - game.x);
  assert.equal(d.playerHit.at.y, 140 + (game.y - 140) * 320 / 370);
  updateCrazy(duel, 16); updateCombatEffects(d, duel, 16);
  assert.equal(d.playerHit.age, 16, 'protected repeated collision does not retrigger the cue');
});

test('Pride short landscape feedback uses the native visible 560 rows instead of stretching 720-row coordinates', () => {
  const s = official('pride'), layout = combatLayout(s, { height: 560 });
  assert.equal(layout.height, 560); assert.deepEqual(layout.boss, { x: 140, y: 68 });
  assert.ok(layout.player.y < 496);
  const fx = observe(s); hitCrazyBoss(s, 20); updateCombatEffects(fx, s, 16, { layout });
  assert.equal(fx.flights[0].to.y, 68); assert.ok(fx.flights[0].from.y < 496);
});
