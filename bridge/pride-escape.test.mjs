import test from 'node:test';
import assert from 'node:assert/strict';
import { createPrideEscape, prideEscapePoint, prideEscapeInput, updatePrideEscape, PRIDE_ESCAPE_PHYSICS } from './pride-escape.mjs';
import { createPridePreview } from './pride-preview.mjs';
import { updateCrazy, inputCrazy, pointCrazy, hitCrazyBoss, skipCrazyCinematic, advanceCrazy } from './crazy.mjs';

import {escapeDecision} from './tools/pride-escape-driver.mjs';

const seeded = seed => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
function steer(m) {const d=escapeDecision(m);prideEscapePoint(m,d.x);if(d.drop)prideEscapeInput(m,'action');}
test('Both difficulties have real routes to floor 100 across 200 seeded towers', () => {
  for (const difficulty of ['normal', 'hard']) for (let seed = 1; seed <= 100; seed++) {
    const m = createPrideEscape({ difficulty, random: seeded(seed * 2654435761 >>> 0) });
    for (let frame = 0; frame < 8000 && m.status === 'playing'; frame++) { steer(m); updatePrideEscape(m, 16); }
    assert.equal(m.status, 'won', `${difficulty}/${seed}`); assert.equal(m.floor, 100);
    assert.ok(m.lives >= 1);
    assert.equal(m.healQueue,m.healedFloors.size*4);assert.ok(m.healedFloors.has(100));assert.ok(m.healedFloors.size>=6);
    const snapshot = JSON.stringify(m); updatePrideEscape(m, 50); prideEscapeInput(m, 'action'); assert.equal(JSON.stringify(m), snapshot);
  }
});
test('Idle players lose to the rising ceiling, spikes cost one life with protection, and timeout fails', () => {
  for (const difficulty of ['normal', 'hard']) {
    const idle = createPrideEscape({ difficulty });
    for (let n = 0; n < 3000 && idle.status === 'playing'; n++) updatePrideEscape(idle, 16);
    assert.equal(idle.status, 'lost'); assert.equal(idle.floor, 0);
    const spike = createPrideEscape({ difficulty }); const p = spike.platforms.find(v => v.spikes);
    Object.assign(spike, { x: p.x + p.w * .75, y: p.y - 8, safe: p, camera: p.y - 240 });
    updatePrideEscape(spike, 16); assert.equal(spike.lives, difficulty === 'hard' ? 1 : 2);
    assert.ok(spike.protection > 0); updatePrideEscape(spike, 16); assert.equal(spike.lives, difficulty === 'hard' ? 1 : 2);
    const timer = createPrideEscape({ difficulty }); timer.timeLeft = 1; updatePrideEscape(timer, 16); assert.equal(timer.status, 'lost');
  }
});
test('Platforms vary in length, crumble after standing, and springs bounce on landing', () => {
  for(const difficulty of ['normal','hard']){
    const m=createPrideEscape({difficulty,random:seeded(42)});
    assert.ok(new Set(m.platforms.map(p=>p.w)).size>20);
    for(const kind of ['stone','crumble','spring','conveyor'])assert.ok(m.platforms.some(p=>p.kind===kind));
    const p=m.platforms.find(p=>p.kind==='crumble');
    Object.assign(m,{x:p.x+p.w/2,y:p.y-8,vy:0,camera:p.y-350,on:p,safe:p});
    for(let n=0;n<70&&!p.collapsed;n++)updatePrideEscape(m,16);
    assert.equal(p.collapsed,true);assert.equal(m.on,null);assert.ok(m.vy>0);
    assert.equal(m.checkpoint.kind,'stone');
    const spring=m.platforms.find(p=>p.kind==='spring');
    Object.assign(m,{x:spring.x+spring.w/2,y:spring.y-9,vy:80,camera:spring.y-350,on:null,safe:spring});
    updatePrideEscape(m,16);assert.ok(m.vy<0);assert.ok(spring.bounceCooldown>0);
    const highest=m.floor,healing=m.healQueue;
    Object.assign(m,{x:spring.x+spring.w/2,y:spring.y-9,vy:80,on:null});
    updatePrideEscape(m,16);assert.equal(m.floor,highest);assert.equal(m.healQueue,healing);
  }
});
test('Escape failure revives exactly 15% HP and only the red mirror; victory requires the actual exit', () => {
  for (const difficulty of ['normal', 'hard']) {
    const s = createPridePreview('escape', { difficulty, random: () => .4 }); s.hp = 60;
    s.mini.timeLeft = 1; updateCrazy(s, 16);
    assert.equal(s.won, false); assert.equal(s.over, false); assert.equal(s.escapeFailures, 1);
    assert.equal(s.bossHp, difficulty === 'hard' ? 240 : 180); assert.equal(s.mode, 'pride-red-survival');
    assert.deepEqual(s.mirrorWorld.mirrors.map(v => v.broken), [false, true, true]);
    const red = s.mirrorWorld.mirrors[0]; pointCrazy(s, red.x, 140 + (red.y - 140) * 320 / 370);
    assert.equal(s.mirrorWorld.selected, 0); inputCrazy(s, 'alt'); assert.equal(s.mini.focused, true);
    s.mirrorWorld.redCleared=true;s.damageLeft = Infinity; hitCrazyBoss(s, 1000); assert.equal(s.cutscene.kind, 'mirror-defeat'); assert.equal(s.won, false);
    s.cutscene.time = 1000; skipCrazyCinematic(s); assert.equal(s.cutscene.kind,'tower-collapse'); s.cutscene.time=1000; skipCrazyCinematic(s); assert.equal(s.mode, 'pride-escape');
    for (let n = 0; n < 8000 && !s.over; n++) { steer(s.mini); updateCrazy(s, 16); }
    assert.equal(s.mini.floor, 100); assert.equal(s.escaped, true); assert.equal(s.won, true); assert.equal(s.cutscene.kind, 'victory');
    assert.equal(s.hp,Math.min(100,60+s.mini.healedFloors.size*(difficulty==='hard'?2:4)));
    const score = s.score; updateCrazy(s, 16); assert.equal(s.score, score);
  }
});
test('Large hits cannot skip Tower or red stage; reflection waves respect surviving mirror counts', () => {
  for (const difficulty of ['normal', 'hard']) {
    const s = createPridePreview('mirror', { difficulty }); s.damageLeft = Infinity;
    hitCrazyBoss(s, 9999); assert.equal(s.mode, 'pride-tower'); assert.equal(s.bossHp, s.bossMaxHp * .5);
    s.mini.finished = true; updateCrazy(s, 16); assert.equal(s.mirrorWorld.mirrors.filter(v => !v.broken).length, 2);
    advanceCrazy(s, 'pride-reflect-up'); updateCrazy(s, 16); assert.equal(s.mini.mirrors.length, 2); assert.ok(s.mini.mirrors.some(v => v.designated));
    s.damageLeft = Infinity; hitCrazyBoss(s, 9999); assert.equal(s.bossHp, s.bossMaxHp * .15); assert.equal(s.mode, 'pride-red-survival');
    assert.equal(s.mirrorWorld.mirrors.filter(v => !v.broken).length, 1); assert.equal(s.over, false);
  }
});

test('Conveyors carry left/right, can be resisted, and stop affecting the player after stepping off',()=>{
 for(const difficulty of ['normal','hard'])for(const belt of [-1,1]){
  const m=createPrideEscape({difficulty,random:seeded(7)}),p=m.platforms[0];
  Object.assign(p,{kind:'conveyor',belt,x:16,w:248});const x=m.x;
  updatePrideEscape(m,100);assert.ok(Math.abs(m.x-x-belt*PRIDE_ESCAPE_PHYSICS[difficulty].beltSpeed*.1)<.001);assert.equal(m.on,p);
  const carried=m.x;updatePrideEscape(m,100,new Set([belt<0?'right':'left']));assert.ok(belt<0?m.x>carried:m.x<carried);
  prideEscapeInput(m,'action');const off=m.x;updatePrideEscape(m,100);assert.equal(m.x,off);assert.equal(m.on,null);
 }
});
test('Hard stone platforms are narrower and unsupported falling accelerates faster with a higher speed cap',()=>{
 const normal=createPrideEscape({random:seeded(42)}),hard=createPrideEscape({difficulty:'hard',random:seeded(42)});
 for(const p of hard.platforms.slice(1,-1))assert.ok(p.w>=54&&p.w<=109);
 for(const p of normal.platforms.slice(1,-1))assert.ok(p.w>=78&&p.w<=155);
 assert.equal(hard.platforms.at(-1).w,248);assert.equal(normal.platforms.at(-1).w,248);
 for(const m of [normal,hard]){m.platforms=[];m.on=null;updatePrideEscape(m,100);}
 assert.ok(hard.vy>normal.vy);assert.ok(hard.y>normal.y);
 assert.ok(PRIDE_ESCAPE_PHYSICS.hard.maxFall>PRIDE_ESCAPE_PHYSICS.normal.maxFall);
});
test('Both defeat and summit-collapse cards pause play and must finish before the escape begins',()=>{
 const s=createPridePreview('escape-story',{random:seeded(42)});assert.equal(s.cutscene.kind,'mirror-defeat');
 assert.equal(skipCrazyCinematic(s),false);assert.equal(s.won,false);assert.equal(s.over,false);
 const elapsed=s.elapsed;for(let n=0;n<80;n++)updateCrazy(s,50);
 assert.equal(s.cutscene.kind,'tower-collapse');assert.equal(s.cutscene.time,0);assert.equal(s.elapsed,elapsed);assert.equal(s.won,false);
 assert.equal(skipCrazyCinematic(s),false);
 for(let n=0;n<70;n++)updateCrazy(s,50);
 assert.equal(s.cutscene,null);assert.equal(s.mode,'pride-escape');assert.equal(s.mini.elapsed,0);assert.equal(s.mini.floor,0);
});
