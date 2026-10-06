import test from 'node:test';
import assert from 'node:assert/strict';
import {createCrazy,skipCrazyCinematic,advanceCrazy,hitCrazyBoss,updateCrazy,inputCrazy} from './crazy.mjs';
import {initPrideSecond,mirrorWeakpoint,strikePrideMirror,breakPrideMirror,prideSecondThresholds,PRIDE_SECOND_ATTACKS,UPGRADED_BASES,updatePrideSecond} from './pride-second.mjs';
const state=(difficulty='normal')=>{const s=createCrazy({sin:'pride',difficulty,random:()=>.4});s.cutscene={kind:'transform',time:1000};s.prideDuelCleared=true;skipCrazyCinematic(s);s.actionReady=true;return s;};
test('Pride transforms into shared Normal/Hard mirror health',()=>{for(const [d,hp] of [['normal',1200],['hard',1600]]){const s=state(d);assert.equal(s.bossHp,hp);const w=s.mirrorWorld;advanceCrazy(s,'pride-mirror-maze');assert.equal(s.mirrorWorld,w);}});
test('All six attacks run their intended original actions',()=>{for(const mode of PRIDE_SECOND_ATTACKS){const s=state();advanceCrazy(s,mode);s.actionReady=true;inputCrazy(s,'action');updateCrazy(s,50);assert.equal(s.mini.clock,50);if(UPGRADED_BASES[mode]){assert.ok(s.mini.hazards.length||s.mini.mirrors.length);assert.equal(s.mini.mode,UPGRADED_BASES[mode]);}else{if(mode==='pride-shard-storm')assert.ok(s.mini.notes.length>0);else assert.ok(['search','plan','recover'].includes(s.mini.phase));assert.equal(s.mini.shots,undefined);}}});
test('Weakpoints reject misses, blue shield closes, purple illusions must break first',()=>{const s=state();const p=mirrorWeakpoint(s,0);assert.equal(strikePrideMirror(s,0,20,{x:0,y:0}),0);assert.equal(strikePrideMirror(s,0,20,p),20);s.mirrorWorld.clock=2000;assert.equal(strikePrideMirror(s,1,20,mirrorWeakpoint(s,1)),0);s.mirrorWorld.clock=0;const q=mirrorWeakpoint(s,2);assert.equal(strikePrideMirror(s,2,20,q),0);assert.equal(strikePrideMirror(s,2,20,q),0);assert.equal(strikePrideMirror(s,2,20,q),20);});
test('Only story thresholds break mirrors: Tower leaves two, 15% leaves one red mirror, each breaks once',()=>{
 const s=state();breakPrideMirror(s,0);assert.equal(s.mirrorWorld.mirrors[0].broken,false);
 s.mirrorWorld.puzzleCleared=true;s.bossHp=600;prideSecondThresholds(s);
 assert.equal(s.mirrorWorld.mirrors[1].broken,true);assert.equal(s.mirrorWorld.mirrors[2].broken,false);
 const particles=s.mirrorWorld.particles.length;prideSecondThresholds(s);assert.equal(s.mirrorWorld.particles.length,particles);
 s.bossHp=180;prideSecondThresholds(s);assert.equal(s.mirrorWorld.mirrors.filter(v=>!v.broken).length,1);assert.ok(s.mirrorWorld.red);
});
test('Restoration triggers at half HP, failure costs HP and heals above half for retry',()=>{const s=state();s.bossHp=610;hitCrazyBoss(s,20);assert.equal(s.mode,'pride-tower');assert.equal(s.mini.goal,14);s.mini.failed=true;updateCrazy(s,50);assert.ok(s.bossHp>600);assert.equal(s.hp,52);advanceCrazy(s,'pride-shard-storm');s.damageLeft=Infinity;hitCrazyBoss(s,150);assert.equal(s.mode,'pride-tower');});
test('Half-health Tower lands each floor as one designated mirror hit and only finishes at its goal',()=>{
 const s=state();s.bossHp=610;hitCrazyBoss(s,20);s.actionReady=true;
 const m=s.mini,designated=m.designated;const drop=()=>{
  m.hanging.x=m.blocks.at(-1).x;inputCrazy(s,'action',false);inputCrazy(s,'action');
  for(let n=0;n<20&&m.falling;n++)updateCrazy(s,50);
 };
 const hp=s.mirrorWorld.mirrors[designated].hp;drop();
 assert.equal(s.mode,'pride-tower');assert.equal(m.floors,1);
 assert.equal(s.mirrorWorld.mirrors[designated].hp,hp-m.damagePerFloor);assert.equal(s.mirrorWorld.mirrors[designated].broken,false);
 while(!m.finished)drop();
 assert.equal(m.floors,m.goal);assert.ok(s.mirrorWorld.puzzleCleared);assert.ok(s.mirrorWorld.mirrors[designated].broken);assert.notEqual(s.mode,'pride-tower');
 const old=s.mode;hitCrazyBoss(s,1);assert.equal(s.mode,old);
});
test('All three new games appear in second-form rotation and boss thresholds cannot interrupt active play',()=>{
 const s=state(),modes=new Set();s.mirrorWorld.puzzleCleared=true;
 for(let i=0;i<18;i++){advanceCrazy(s);modes.add(s.mode);}
 for(const mode of ['pride-shard-puzzle','pride-truth-trial','pride-mirror-maze','pride-doodle'])assert.ok(modes.has(mode));assert.ok(!modes.has('pride-tower'));
 advanceCrazy(s,'pride-truth-trial');s.bossHp=185;hitCrazyBoss(s,999);assert.equal(s.mode,'pride-truth-trial');assert.equal(s.bossHp,180);assert.equal(s.over,false);
});
test('Defeating the red mirror shows its shattered illustration before escape, without awarding victory',()=>{
 const s=state();s.mirrorWorld.puzzleCleared=true;s.bossHp=185;hitCrazyBoss(s,10);
 assert.equal(s.mode,'pride-red-survival');s.mirrorWorld.redCleared=true;hitCrazyBoss(s,999);
 assert.equal(s.bossHp,0);assert.equal(s.over,false);assert.equal(s.won,false);assert.equal(s.cutscene.kind,'mirror-defeat');
 s.cutscene.time=1000;skipCrazyCinematic(s);assert.equal(s.cutscene.kind,'tower-collapse');s.cutscene.time=1000;skipCrazyCinematic(s);assert.equal(s.mode,'pride-escape');assert.equal(s.mini.floor,0);
});

test('Surviving upgraded originals rewards boss damage and preserves the next phase',()=>{
 for(const mode of ['pride-gaze-up','pride-crown-up','pride-reflect-up']){
  const s=state();s.mirrorWorld.puzzleCleared=true;advanceCrazy(s,mode);s.timeLeft=1;const hp=s.bossHp;updateCrazy(s,50);assert.equal(s.bossHp,hp-24);assert.notEqual(s.mode,mode);
 }
 const s=state();s.mirrorWorld.puzzleCleared=true;advanceCrazy(s,'pride-gaze-up');s.bossHp=130;s.timeLeft=1;updateCrazy(s,50);assert.equal(s.mode,'pride-red-survival');
});
