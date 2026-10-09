import test from 'node:test';
import assert from 'node:assert/strict';
import { createEnvy, hitBoss, hurt, updateEnvy, continueScene, finishEnvy } from './engine.mjs';

function tick(s,ms){while(ms>0){const dt=Math.min(50,ms);updateEnvy(s,dt);ms-=dt;}}

test('first defeat automatically transforms without spending combat time or damaging the player',()=>{
  for(const difficulty of ['normal','hard']){
    const s=createEnvy({scenario:'first-bridge',difficulty});hitBoss(s,1000);
    const hp=s.hp,elapsed=s.elapsed;tick(s,3950);
    assert.equal(s.scene.kind,'first-defeat');assert.equal(s.hp,hp);assert.equal(s.elapsed,elapsed);
    tick(s,50);assert.equal(s.scene.kind,'transform');assert.equal(s.scene.time,0);
    assert.equal(s.form,2);assert.equal(s.bossHp,difficulty==='hard'?1750:1300);
    tick(s,2800);assert.equal(s.scene,null);assert.equal(s.mode,'bridge');assert.equal(s.elapsed,elapsed);
  }
});

test('Continue advances early once, while final defeat automatically reveals the worm then starts capture',()=>{
  const manual=createEnvy({scenario:'first-bridge'});hitBoss(manual,1000);
  tick(manual,650);continueScene(manual);assert.equal(manual.scene.kind,'first-defeat');
  tick(manual,50);continueScene(manual);assert.equal(manual.scene.kind,'transform');
  continueScene(manual);assert.equal(manual.scene.kind,'transform');assert.equal(manual.scene.time,0);
  const s=createEnvy({scenario:'final-bridge'});hitBoss(s,9999);
  const elapsed=s.elapsed;tick(s,4000);assert.equal(s.scene.kind,'worm-reveal');assert.equal(s.won,false);
  tick(s,2300);assert.equal(s.scene,null);assert.equal(s.mode,'capture');
  assert.equal(s.bossDefeated,true);assert.equal(s.bossHp,0);assert.equal(s.elapsed,elapsed);
});

test('puzzle-secret and preview-result scenes automatically resume the next round',()=>{
  for(const scenario of ['second:eye-room','difference']){
    const s=createEnvy({scenario});s.round.done=true;s.round.success=true;updateEnvy(s,0);
    assert.equal(s.scene.kind,scenario==='difference'?'round-result':'room-secret');
    const elapsed=s.elapsed,hp=s.hp;tick(s,4000);
    assert.equal(s.scene,null);assert.equal(s.mode,'bridge');assert.equal(s.elapsed,elapsed);assert.equal(s.hp,hp);
  }
});

test('capture retry and final win/loss wait for the player rather than automatically exiting',()=>{
  const retry=createEnvy({scenario:'capture'});retry.round.done=true;retry.round.success=false;updateEnvy(retry,0);
  const won=createEnvy({scenario:'capture'});finishEnvy(won);
  const lost=createEnvy({scenario:'first-bridge'});hurt(lost,100);
  for(const [s,kind] of [[retry,'capture-retry'],[won,'victory'],[lost,'lost']]){
    tick(s,12000);assert.equal(s.scene.kind,kind);
    continueScene(s);assert.equal(s.scene.kind,kind);
  }
});
