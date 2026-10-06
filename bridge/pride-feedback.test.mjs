import { prideTowerTopX } from './pride-tower.mjs';
import test from 'node:test';
import assert from 'node:assert/strict';
import { createCrazy, skipCrazyCinematic, advanceCrazy, hitCrazyBoss, inputCrazy, pointCrazy, updateCrazy } from './crazy.mjs';
import { createSecondDemo, inputSecondDemo, pointSecondDemo, updateSecondDemo } from './pride-second-demo.mjs';
import { PRIDE_ROTATING_GAMES, PRIDE_SECOND_GAMES, drawPrideSecond } from './pride-second.mjs';
import { TRUTH_SWAP_MS } from './pride-mirror-games.mjs';
import { traceNested } from './pride-challenges.mjs';
import { PRIDE_MINIGAME_IDS } from './minigames/index.mjs';
import * as doodle from './minigames/doodle.mjs';
import * as mirror from './minigames/mirror-match.mjs';
import * as crown from './minigames/crown-choice.mjs';
import * as links from './minigames/lianliankan.mjs';
import { createMirrorDuel, MIRROR_DUEL_RULES } from './pride-finisher.mjs';

const seeded = seed => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const tick = (s, ms) => { for (let left = ms; left > 0 && !s.over; left -= 50) updateSecondDemo(s, Math.min(50, left)); };
function live(difficulty = 'normal') {
  const s = createCrazy({ sin: 'pride', difficulty, random: seeded(42) });
  s.cutscene = { kind: 'transform', time: 1000 }; s.prideDuelCleared = true; skipCrazyCinematic(s); s.actionReady = true; return s;
}
test('Pride time limits follow difficulty tuning while preserving objectives, scoring and penalties', () => {
  for (const [difficulty, durations] of [['normal', [22000,12000,30000,35000,28000,40000]], ['hard',[26000,9000,30000,28000,26000,32000]]]) {
    const [a,b,c,d,e,f] = durations;
    assert.equal(mirror.init({difficulty}).timeLeft,a); assert.equal(crown.init({difficulty}).timeLeft,b); assert.equal(links.init({difficulty}).timeLeft,c);
    for (const [mode,limit] of [['pride-shard-puzzle',d],['pride-truth-trial',e],['pride-mirror-maze',f]]) assert.equal(createSecondDemo(mode,{difficulty}).timeLeft,limit);
    assert.equal(createSecondDemo('pride-red-survival',{difficulty}).timeLeft,30000);
  }
  assert.equal(MIRROR_DUEL_RULES.duration,45000); assert.equal(createMirrorDuel().timeLeft,45000);
  const s=createCrazy({sin:'pride'}); s.cutscene.time=1000;skipCrazyCinematic(s);
  const g=createCrazy({sin:'greed'});assert.equal(s.timeLeft,15000);assert.equal(g.timeLeft,20000);
  for(const mode of ['bridge','breakout','pinball','bbtan','sand']) {
    advanceCrazy(s,mode); advanceCrazy(g,mode);assert.equal(s.duration,g.duration*.75);assert.equal(s.damageLeft,g.damageLeft);assert.equal(s.catDue,g.catDue);
  }
});
test('Truth shuffles at 150% speed for three to five complete steps and never accepts an early guess', () => {
  const counts=new Set();
  for (let seed=1;seed<=100;seed++) {
    const s=createSecondDemo('pride-truth-trial',{random:seeded(seed)}),m=s.mini;
    assert.equal(TRUTH_SWAP_MS,700/1.5);counts.add(m.swapsTotal);
    tick(s,m.phaseUntil);assert.equal(m.phase,'swap');assert.equal(m.swapsDone,1);
    inputSecondDemo(s,'action');assert.equal(m.correct,0);
    const start=m.phaseUntil-TRUTH_SWAP_MS;
    tick(s,(m.swapsTotal-1)*TRUTH_SWAP_MS);assert.equal(m.phase,'swap');assert.equal(m.swapsDone,m.swapsTotal);
    tick(s,TRUTH_SWAP_MS);assert.equal(m.phase,'choose');assert.ok(m.clock-start>=m.swapsTotal*TRUTH_SWAP_MS);
    assert.equal(new Set(m.order).size,3);m.focus=m.order.indexOf(m.truth);inputSecondDemo(s,'action');assert.equal(m.correct,1);
  }
  assert.deepEqual([...counts].sort(),[3,4,5]);
});
test('Three-lane storm reflects best / good timing and punishes wrong lanes or misses',()=>{
 for(const pointer of [false,true])for(const offset of [0,-140]){
  const s=createSecondDemo('pride-shard-storm',{random:()=>.4}),n=s.mini.notes[0];tick(s,n.at+offset);
  if(pointer)pointSecondDemo(s,60+n.lane*80,430);else inputSecondDemo(s,['left','action','right'][n.lane]);tick(s,1);
  assert.equal(n.status,offset?'good':'best');assert.equal(s.mini.damage,offset?18:32);assert.equal(s.bossHp,offset?82:68);
  inputSecondDemo(s,['left','action','right'][n.lane]);tick(s,1);assert.equal(s.mini.damage,offset?18:32);
 }
 const miss=createSecondDemo('pride-shard-storm',{random:()=>.4});tick(miss,1681);assert.equal(miss.hp,94);assert.equal(miss.mini.notes[0].status,'damage');
 const wrong=createSecondDemo('pride-shard-storm',{random:()=>.4});tick(wrong,1500);inputSecondDemo(wrong,'left');tick(wrong,1);assert.equal(wrong.hp,96);assert.equal(wrong.mini.damage,0);
});
test('Kaleidoscope presents one matching pattern; observation unlocks a separate, expiring counter', () => {
  for (let seed=1;seed<=50;seed++) for(const pointer of [false,true]) {
    const s=createSecondDemo('pride-kaleidoscope',{random:seeded(seed)}),m=s.mini;
    const answer=m.patterns.findIndex(v=>v===m.reference);assert.equal(m.patterns.filter(v=>v===m.reference).length,1);
    if(pointer)pointSecondDemo(s,79+answer%3*60,321+Math.floor(answer/3)*54);
    else {for(let n=0;n<answer;n++)inputSecondDemo(s,'right');inputSecondDemo(s,'action');}
    assert.equal(m.phase,'counter');assert.equal(s.bossHp,100);
    if(pointer)pointSecondDemo(s,140,520);else inputSecondDemo(s,'action');tick(s,1);
    assert.equal(s.bossHp,20);assert.equal(m.damage,80);
  }
  const wrong=createSecondDemo('pride-kaleidoscope');wrong.mini.focus=(wrong.mini.answer+1)%9;inputSecondDemo(wrong,'action');tick(wrong,1);assert.equal(wrong.hp,92);assert.equal(wrong.mini.damage,0);
  const expire=createSecondDemo('pride-kaleidoscope');expire.mini.focus=expire.mini.answer;inputSecondDemo(expire,'action');tick(expire,1400);inputSecondDemo(expire,'action');tick(expire,1);assert.equal(expire.mini.damage,0);
});
test('Nested requires a valid route through both seals, launch with B, then claim the counter with A', () => {
  for(let seed=1;seed<=50;seed++) for(const pointer of [false,true]) {
    const s=createSecondDemo('pride-nested',{random:seeded(seed)}),m=s.mini;assert.equal(traceNested(m).success,false);
    for(const [n,i] of m.route.entries()) if(m.tiles[i]!==m.solution[n]) {
      if(pointer)pointSecondDemo(s,79+i%3*60,321+Math.floor(i/3)*54);
      else {m.focus=i;inputSecondDemo(s,'action');}
    }
    assert.equal(traceNested(m).success,true);assert.equal(s.bossHp,100);
    if(pointer)pointSecondDemo(s,140,520);else inputSecondDemo(s,'alt');assert.equal(m.phase,'counter');
    if(pointer)pointSecondDemo(s,140,520);else inputSecondDemo(s,'action');tick(s,1);
    assert.equal(m.damage,60);assert.equal(s.bossHp,40);
  }
  const wrong=createSecondDemo('pride-nested');inputSecondDemo(wrong,'alt');tick(wrong,1);assert.equal(wrong.hp,92);assert.equal(wrong.mini.damage,0);
});
test('Every redesigned attack can counter through production keyboard and pointer routing', () => {
  for(const mode of ['pride-kaleidoscope','pride-shard-storm','pride-nested'])for(const pointer of [false,true]) {
    const s=live();advanceCrazy(s,mode);s.actionReady=true;const m=s.mini;
    const action=key=>{inputCrazy(s,key,false);inputCrazy(s,key);};
    if(mode==='pride-shard-storm'){for(let n=0;n<30;n++)updateCrazy(s,50);const note=m.notes[0];if(pointer)pointCrazy(s,60+note.lane*80,430);else action(['left','action','right'][note.lane]);}
    if(mode==='pride-kaleidoscope'){m.focus=m.answer;if(pointer)pointCrazy(s,79+m.answer%3*60,321+Math.floor(m.answer/3)*54);else action('action');if(pointer)pointCrazy(s,140,520);else action('action');}
    if(mode==='pride-nested'){m.route.forEach((i,n)=>{m.focus=i;if(m.tiles[i]!==m.solution[n])action('action');});if(pointer)pointCrazy(s,140,520);else action('alt');if(pointer)pointCrazy(s,140,520);else action('action');}
    const hp=s.bossHp;updateCrazy(s,1);assert.ok(s.bossHp<hp);assert.ok(m.damage>0);assert.equal(s.mode,mode);
  }
});
test('Tower random goals cover 10–20; every real landing hits once and only the final layer breaks the designated mirror', () => {
  const goals=new Set();
  for(let seed=1;seed<=100;seed++) {
    const s=createSecondDemo('pride-tower',{random:seeded(seed*2654435761>>>0)}),m=s.mini;goals.add(m.goal);
    for(let floor=1;floor<=m.goal;floor++) {
      // Anticipate the moving tower at impact, using actual update and pointer input.
      let frames=0;while(Math.abs(m.hanging.x-prideTowerTopX(m,m.clock+320))>=3&&frames++<150)tick(s,16);
      assert.ok(frames<150);pointSecondDemo(s,140,400);pointSecondDemo(s,140,400);
      while(m.falling&&!s.over)tick(s,16);
      assert.equal(m.floors,floor);assert.equal(s.mirrorWorld.mirrors[m.designated].broken,floor===m.goal);
      assert.equal(s.events.filter(e=>e.key==='prideMirrorHitSound').length,floor);
      assert.equal(s.mirrorWorld.bonuses,floor===m.goal?1:0);
    }
    assert.equal(s.result,'完成');
  }
  assert.equal(goals.size,11);assert.equal(Math.min(...goals),10);assert.equal(Math.max(...goals),20);
});
test('Tower is outside both rotation pools; puzzle rewards never satisfy the half-health story', () => {
  assert.ok(!PRIDE_ROTATING_GAMES.includes('pride-tower'));assert.ok(!PRIDE_MINIGAME_IDS.includes('pride-tower'));
  assert.ok(PRIDE_ROTATING_GAMES.includes('pride-doodle'));assert.ok(PRIDE_MINIGAME_IDS.includes('pride-doodle'));
  const s=live();advanceCrazy(s,'pride-shard-puzzle');s.mini.finished=true;updateCrazy(s,1);assert.equal(s.mirrorWorld.puzzleCleared,false);
  advanceCrazy(s,'pride-shard-storm');s.bossHp=601;hitCrazyBoss(s,2);assert.equal(s.mode,'pride-tower');assert.equal(s.mirrorWorld.puzzlePending,true);
  const hp=s.bossHp;hitCrazyBoss(s,999);advanceCrazy(s,'pride-doodle');assert.equal(s.mode,'pride-tower');assert.equal(s.bossHp,hp);
  const m=s.mini;m.hanging.x=-100;inputCrazy(s,'action',false);s.actionReady=true;inputCrazy(s,'action');for(let i=0;i<20&&s.mode==='pride-tower';i++)updateCrazy(s,50);
  assert.ok(m.failed);assert.equal(s.mirrorWorld.puzzleCleared,false);assert.ok(s.bossHp>=480);
});
test('Doodle jumping remains winnable across seeded routes, shoots enemies, and stops after completion', () => {
  for(const difficulty of ['normal','hard'])for(let seed=1;seed<=10;seed++) {
    const s=doodle.init({difficulty,random:seeded(seed)});
    for(let n=0;n<4000&&s.status==='playing';n++) {
      const platform=s.platforms.filter(p=>!p.landed).sort((a,b)=>b.y-a.y)[0];
      if(platform){const center=platform.x+platform.w/2;doodle.point(s,platform.enemy?(s.x<center?platform.x+5:platform.x+65):center,350);}
      doodle.input(s,'action');doodle.update(s,16);
    }
    assert.equal(s.status,'won',`${difficulty} seed ${seed}`);assert.ok(s.score>0);
    const snapshot=JSON.stringify(s);doodle.update(s,50);doodle.input(s,'action');assert.equal(JSON.stringify(s),snapshot);
  }
  const s=doodle.init();s.platforms[1].enemy=true;s.shots=[{x:s.platforms[1].x+35,y:s.platforms[1].y-13}];doodle.update(s,1);assert.equal(s.platforms[1].enemy,false);assert.equal(s.score,100);
  const liveState=live();liveState.form=1;advanceCrazy(liveState,'pride-doodle');liveState.actionReady=true;
  inputCrazy(liveState,'left');updateCrazy(liveState,50);assert.ok(liveState.mini.x<140);inputCrazy(liveState,'left',false);assert.equal(liveState.mini.held.size,0);
  const second=live();advanceCrazy(second,'pride-doodle');second.protection=0;second.mini.y=second.mini.camera+600;
  updateCrazy(second,16);assert.notEqual(second.mode,'pride-doodle');assert.equal(second.hp,92);
});
test('All new game screens render with finite geometry in normal and reduced motion', () => {
  for(const mode of [...PRIDE_SECOND_GAMES,'pride-kaleidoscope','pride-shard-storm','pride-nested'])for(const reduced of [false,true]) {
    const s=createSecondDemo(mode,{random:seeded(1)});
    const c=new Proxy({}, {get:(o,k)=>o[k]??((...args)=>{for(const a of args)if(typeof a==='number')assert.ok(Number.isFinite(a),`${mode}: ${k}`);if(k.startsWith('create'))return {addColorStop(){}};}),set:(o,k,v)=>{o[k]=v;return true;}});
    drawPrideSecond(c,s,reduced);tick(s,100);drawPrideSecond(c,s,reduced);
  }
});

test('Nested moves its entry, seals, exit and route between eight valid layouts',()=>{
 const layouts=new Set();for(let i=0;i<8;i++){const s=createSecondDemo('pride-nested',{random:()=>i/8+.01}),m=s.mini;
 layouts.add(JSON.stringify([m.source,m.seals,m.exit]));assert.equal(traceNested(m).success,false);
 m.route.forEach((cell,n)=>m.tiles[cell]=m.solution[n]);assert.equal(traceNested(m).success,true);
 }
 assert.equal(layouts.size,8);
});
