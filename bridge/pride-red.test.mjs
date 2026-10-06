import test from 'node:test';
import assert from 'node:assert/strict';
import { createRedRound, updateRedRound, redInput, RED_DURATION, redBossPosition } from './pride-red.mjs';
import { createPridePreview } from './pride-preview.mjs';
import { updateCrazy, hitCrazyBoss, skipCrazyCinematic } from './crazy.mjs';

function dodge(m, hp=100) {
  let best=-Infinity;
  for(let x=30;x<=250;x+=22)for(const y of [325,365,405,445,475]){
    let clearance=90;
    for(const b of m.bullets)for(const t of [0,.2,.4])clearance=Math.min(clearance,Math.hypot(x-b.x-b.vx*t,y-b.y-b.vy*t));
    for(const e of m.enemies)clearance=Math.min(clearance,Math.hypot(x-e.x,y-e.y-20));
    let value=clearance-Math.hypot(x-m.x,y-m.y)*.3-Math.abs(x-redBossPosition(m).x)*.4;for(const item of m.items)if(item.kind==='power'||hp<85)value+=Math.max(0,100-Math.hypot(x-item.x,y-item.y-12))*.5;
    if(value>best){best=value;m.target={x,y};}
  }
}
test('Red shooter fires automatically, supports burst and precision, and has bounded movement', () => {
  const s = {mini:createRedRound(),held:new Set(),difficulty:'normal',random:()=>.4};
  updateRedRound(s,16);assert.equal(s.mini.shots.length,2);
  redInput(s.mini,'action');assert.equal(s.mini.shots.length,7);
  redInput(s.mini,'action');assert.equal(s.mini.shots.length,7);
  redInput(s.mini,'alt');assert.equal(s.mini.focused,true);
  s.held.add('right');const x=s.mini.x;updateRedRound(s,100);assert.equal(s.mini.x-x,9);
  for(let n=0;n<200;n++)updateRedRound(s,16);
  assert.equal(s.mini.x,258);assert.ok(s.mini.bullets.length>0);assert.ok(s.mini.enemies.length>0);
});
test('Only actual bullet and enemy collisions hurt; upward shots destroy enemy shards', () => {
  for(const difficulty of ['normal','hard']){
    const s={mini:createRedRound(),held:new Set(),difficulty};let damage=0;
    const m=s.mini;m.bullets.push({x:m.x,y:m.y,vx:0,vy:0,r:4,age:0});
    updateRedRound(s,16,{hurt:(_,n)=>damage+=n});assert.equal(damage,difficulty==='hard'?7:5);assert.equal(m.bullets.length,0);
    m.enemies=[{x:m.x,y:350,baseX:m.x,phase:0,age:0,hp:1}];m.shots=[{x:m.x,y:365,vy:-440}];m.fire=500;
    updateRedRound(s,40);assert.equal(m.kills,1);assert.equal(m.score,100);
  }
});
test('Red HP stays locked until a complete 30-second live round, then regular combat can defeat the Boss and enter escape', () => {
  for(const difficulty of ['normal','hard']){
    const s=createPridePreview('red',{difficulty,random:()=>.4});
    s.damageLeft=Infinity;hitCrazyBoss(s,9999);assert.equal(s.bossHp,s.bossMaxHp*.15);assert.equal(s.cutscene,null);
    // Real movement and collisions, with no invulnerability or disabled damage.
    for(let n=0;n<1874&&!s.over;n++){if(n%5===0)dodge(s.mini,s.hp);updateCrazy(s,16);}
    assert.equal(s.over,false);assert.equal(s.mini.clock,29984);assert.equal(s.cutscene,null);
    const round=s.mini;updateCrazy(s,16);assert.equal(round.clock,RED_DURATION);
    assert.equal(s.mode,'pride-red-survival');assert.equal(s.mirrorWorld.redCleared,false);assert.ok(round.bossHp>0);
    if(difficulty==='hard'){assert.equal(round.bossMax,1800);assert.ok(round.bossHp>100);}
    for(let n=0;n<2000&&s.mode==='pride-red-survival'&&!s.over;n++){if(n%5===0)dodge(s.mini,s.hp);updateCrazy(s,16);}
    assert.equal(s.over,false);assert.equal(round.bossHp,0);assert.ok(round.clock>=RED_DURATION);
    assert.equal(s.mirrorWorld.redCleared,true);assert.equal(s.mode,'bridge');assert.equal(s.cutscene,null);s.damageLeft=Infinity;hitCrazyBoss(s,9999);
    assert.equal(s.cutscene.kind,'mirror-defeat');assert.equal(s.won,false);
    s.cutscene.time=1000;skipCrazyCinematic(s);assert.equal(s.cutscene.kind,'tower-collapse');s.cutscene.time=1000;skipCrazyCinematic(s);assert.equal(s.mode,'pride-escape');
    s.mini.timeLeft=1;updateCrazy(s,16);assert.equal(s.mode,'pride-red-survival');assert.equal(s.mirrorWorld.redCleared,false);
    assert.equal(s.bossHp,s.bossMaxHp*.15);assert.equal(s.mini.clock,0);
  }
});
test('Dying during red survival cannot trigger a defeat picture or escape', () => {
  const s=createPridePreview('red');s.hp=1;s.protection=0;
  s.mini.bullets=[{x:s.mini.x,y:s.mini.y,vx:0,vy:0,r:4,age:0}];
  updateCrazy(s,16);assert.equal(s.over,true);assert.equal(s.won,false);assert.equal(s.mode,'pride-red-survival');
  assert.equal(s.mirrorWorld.redCleared,false);
});

test('Thirty seconds alone does not unlock an uncleared red bar, and pickups heal / widen automatic fire',()=>{
 const s=createPridePreview('red',{difficulty:'hard',random:()=>.4});s.mini.bossHp=s.mini.bossMax=100000;
 for(let n=0;n<1875&&!s.over;n++){if(n%5===0)dodge(s.mini,s.hp);updateCrazy(s,16);}
 assert.equal(s.over,false);assert.equal(s.mini.finished,false);assert.equal(s.cutscene,null);assert.ok(s.mini.bossHp>0);
 const boss=redBossPosition(s.mini);s.mini.bossHp=4;s.mini.shots=[{x:boss.x,y:245,vy:-440,damage:4}];updateCrazy(s,16);
 assert.equal(s.mirrorWorld.redCleared,true);assert.equal(s.mode,'bridge');assert.equal(s.cutscene,null);s.damageLeft=Infinity;hitCrazyBoss(s,9999);assert.equal(s.cutscene.kind,'mirror-defeat');
 const power=createPridePreview('red',{difficulty:'hard'});power.hp=30;power.mini.items=[{kind:'heart',x:140,y:450,vy:0,age:0},{kind:'power',x:140,y:450,vy:0,age:0}];
 updateCrazy(power,16);assert.equal(power.hp,37);assert.equal(power.mini.power,1);power.mini.shots=[];power.mini.fire=0;updateCrazy(power,16);assert.equal(power.mini.shots.length,5);
});

test('Overwhelming early shots cannot empty the red bar before 30 seconds; later damage can finish it',()=>{
 const s={mini:createRedRound({difficulty:'hard'}),held:new Set(),difficulty:'hard',random:()=>.4},m=s.mini;
 const shoot=()=>{const boss=redBossPosition({...m,clock:m.clock+16});m.shots=[{x:boss.x,y:245,vy:-440,damage:10000}];m.fire=500;};
 m.clock=1000;shoot();updateRedRound(s,16);assert.equal(m.bossHp,1);assert.equal(m.finished,false);
 m.clock=29968;shoot();updateRedRound(s,16);assert.equal(m.bossHp,1);assert.equal(m.finished,false);
 shoot();updateRedRound(s,16);assert.equal(m.clock,30000);assert.equal(m.bossHp,0);assert.equal(m.finished,true);
});
test('Red combat HUD has no remaining seconds or countdown, only lock state and the live bar',async()=>{
 const {drawRedRound}=await import('./pride-red.mjs');const texts=[];
 const c=new Proxy({createLinearGradient:()=>({addColorStop(){}})}, {get:(o,k)=>k==='fillText'?text=>texts.push(String(text)):o[k]??(()=>{}),set:(o,k,v)=>(o[k]=v,true)});
 for(const clock of [0,29000,30000,40000]){
  texts.length=0;const s={mini:createRedRound(),hp:100};s.mini.clock=clock;drawRedRound(c,s,true);
  assert.ok(!texts.some(t=>/秒|還需|時間達成|countdown/i.test(t)));
  assert.ok(texts.includes(clock<30000?'紅鏡鎖血':'擊破紅鏡'));
 }
});


test('Red hearts restore 7 Hard HP and the same 12 Normal HP, without changing pickup cadence',()=>{
 for(const difficulty of ['normal','hard']){
  const s=createPridePreview('red',{difficulty,random:()=>.4});s.hp=30;
  s.mini.items=[{kind:'heart',x:140,y:450,vy:0,age:0}];
  updateCrazy(s,16);assert.equal(s.hp,difficulty==='hard'?37:42);
  s.mini.itemDue=0;updateCrazy(s,16);
  assert.equal(s.mini.itemDue,difficulty==='hard'?4000:4500);
 }
});

test('The enraged crowned mirror stays below its bar and above player movement, with static reduced effects',async()=>{
 const {drawRedBoss}=await import('./pride-red.mjs');
 const render=(clock)=>{const points=[],shadows=[];
  const c=new Proxy({}, {get:(o,k)=>['moveTo','lineTo'].includes(k)?(x,y)=>points.push([x,y]):o[k]??(()=>{}),set:(o,k,v)=>{o[k]=v;if(k==='shadowBlur')shadows.push(v);return true;}});
  drawRedBoss(c,140,218,clock,true);return {points,shadows};};
 const a=render(0);assert.deepEqual(a,render(7777));assert.ok(a.shadows.every(v=>v===0));
 assert.equal(Math.max(...a.points.map(p=>Math.abs(p[0]))),44);
 assert.ok(Math.min(...a.points.map(p=>p[1]))+218>183,'Clear of HP bar');
 assert.ok(Math.max(...a.points.map(p=>p[1]))+218<305,'Clear of player arena');
});
