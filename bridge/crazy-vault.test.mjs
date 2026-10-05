import test from 'node:test';
import assert from 'node:assert/strict';
import {createCrazy,hitCrazyBoss,updateCrazy,healCrazy,advanceCrazy,inputCrazy} from './crazy.mjs';
import {createVault,updateVault,vaultSpeed,vaultPoint,VAULT_RULES} from './crazy-vault.mjs';
import {crazyTrack} from './crazy-music.mjs';
const gate=()=>{const s=createCrazy({random:()=>.5});s.form=2;s.phase=3;s.bossMaxHp=1200;s.bossHp=250;s.damageLeft=500;hitCrazyBoss(s,500);return s;};
const run=(s,ms)=>{for(let i=0;i<ms;i+=50)updateCrazy(s,Math.min(50,ms-i));};
test('Second-form damage clamps exactly at 20%, enters the 60s vault and selects last BGM',()=>{
 const s=gate();assert.equal(s.bossHp,240);assert.equal(s.mode,'vault');assert.equal(s.timeLeft,60000);assert.equal(s.vaultLocked,true);assert.equal(crazyTrack(s),'second-last');
 hitCrazyBoss(s,500);advanceCrazy(s,'pusher');healCrazy(s,10);assert.equal(s.bossHp,240);assert.equal(s.mode,'vault');assert.equal(s.hp,100);
 const first=createCrazy();first.bossHp=190;first.damageLeft=100;hitCrazyBoss(first,20);assert.notEqual(first.mode,'vault');
});
test('Timeout charges exactly 80 HP despite protection, remains locked, and retries after 20s',()=>{
 const s=gate();s.protection=Infinity;run(s,60000);assert.equal(s.hp,20);assert.equal(s.stats.damageTaken,80);assert.equal(s.vaultLocked,true);assert.equal(s.vaultRetry,20000);assert.equal(crazyTrack(s),'second-last');
 hitCrazyBoss(s,500);assert.equal(s.bossHp,240);for(let i=0;i<399;i++){s.protection=Infinity;s.catDue=Infinity;s.attackDone=true;updateCrazy(s,50);}assert.notEqual(s.mode,'vault');run(s,50);assert.equal(s.mode,'vault');assert.equal(s.mini.banked,0);assert.equal(s.timeLeft,60000);run(s,60000);assert.equal(s.hp,0);assert.equal(s.over,true);
});
test('The goal completes at the bank, unlocks permanently and permits the finishing fight',()=>{
 const s=gate();s.mini.banked=VAULT_RULES.goal;s.mini.x=200;updateCrazy(s,50);assert.equal(s.vaultLocked,true);
 s.mini.x=65;s.mini.y=560;updateCrazy(s,50);assert.equal(s.vaultCleared,true);assert.equal(s.vaultLocked,false);assert.equal(s.vaultRetry,null);assert.equal(crazyTrack(s),'second-last');
 s.damageLeft=500;hitCrazyBoss(s,500);assert.equal(s.won,true);assert.equal(s.bossHp,0);
});
test('Jump input leaves the ground, gravity lands, and holding jump cannot bounce repeatedly',()=>{
 const v=createVault();updateVault(v,50,new Set(['action']));assert.ok(v.y<560);assert.ok(v.vy<0);
 for(let n=0;n<40;n++)updateVault(v,50,new Set(['action']));assert.equal(v.y,560);assert.equal(v.grounded,true);
 updateVault(v,50);updateVault(v,50,new Set(['up']));assert.ok(v.y<560);
});
test('Carry slows running without changing jump height; screen clicks account for camera scrolling',()=>{
 const v=createVault();v.carry=120;assert.equal(vaultSpeed(v),195);v.camera=300;vaultPoint(v,112);assert.deepEqual(v.target,{x:456.25});
});
test('Platform sides block walking, landings remain solid, and coins require physical contact',()=>{
 const v=createVault();v.x=225;v.y=520;updateVault(v,50,new Set(['right']));assert.equal(v.x,230);
 v.x=275;v.y=490;v.vy=120;for(let n=0;n<10;n++)updateVault(v,50);assert.equal(v.y,508);assert.ok(v.loot.find(i=>i.x===275).collected);assert.equal(v.carry,40);
});
test('Returning to the bank automatically deposits; over-capacity pickups stay available',()=>{
 const v=createVault();v.carry=110;v.x=165;updateVault(v,50);assert.equal(v.carry,110);assert.equal(v.loot[0].collected,false);
 v.x=65;updateVault(v,50);assert.equal(v.carry,0);assert.equal(v.banked,110);
});
test('Spikes and patrols deal real HP damage with cooldown; pits respawn without erasing deposits',()=>{
 const s=gate();s.protection=0;s.mini.x=345;updateCrazy(s,50);assert.equal(s.hp,97);updateCrazy(s,50);assert.equal(s.hp,97);
 const v=createVault();let damage=0;v.banked=80;v.carry=40;v.safeX=380;v.x=450;v.y=675;v.vy=300;updateVault(v,50,new Set(),{hurt:n=>damage+=n});assert.equal(damage,12);assert.equal(v.x,380);assert.equal(v.banked,80);assert.equal(v.carry,40);
 const e=createVault();e.x=550;updateVault(e,50,new Set(),{hurt:n=>damage+=n});assert.equal(damage,20);
});
test('Hard healing restores original floored 50% awards, remains bounded, and stays disabled in the vault and after defeat',()=>{
 const s=createCrazy();s.hp=50;
 for(const [award,expected] of [[1,1],[2,1],[3,1],[4,2],[6,3],[8,4],[12,6],[20,10]]){
  const before=s.hp;healCrazy(s,award);assert.equal(s.hp-before,expected);
 }
 const hp=s.hp;healCrazy(s,0);healCrazy(s,-10);assert.equal(s.hp,hp);
 healCrazy(s,100);assert.equal(s.hp,100);assert.equal(s.stats.healed,50);
 healCrazy(s,8);assert.equal(s.hp,100);assert.equal(s.stats.healed,50);
 s.hp=50;s.mode='vault';healCrazy(s,20);assert.equal(s.hp,50);assert.equal(s.stats.healed,50);
 s.mode='bridge';s.over=true;healCrazy(s,20);assert.equal(s.hp,50);assert.equal(s.stats.healed,50);
});
test('Cat boss damage may cross the gate mid-update without leaving stale cat state',()=>{
 const s=createCrazy();s.form=2;s.phase=3;s.bossMaxHp=1200;s.bossHp=250;s.cat={action:'boss',time:1190,applied:false};s.catDue=Infinity;s.damageLeft=100;
 updateCrazy(s,50);assert.equal(s.mode,'vault');assert.equal(s.bossHp,240);assert.equal(s.cat,null);assert.equal(s.mini.elapsed,0);
});
test('Waiting-period attacks remain counterable without reducing locked Boss health',()=>{
 const s=gate();run(s,60000);s.attack={time:500};hitCrazyBoss(s,30);assert.equal(s.attack,null);assert.equal(s.bossHp,240);
});
test('Only second-form music changes at 20%; selection stays on last during retry and after unlock',()=>{
 const s=createCrazy();s.form=2;s.bossMaxHp=1200;s.bossHp=241;assert.equal(crazyTrack(s),'second-bridge');s.bossHp=240;assert.equal(crazyTrack(s),'second-last');s.form=1;s.bossMaxHp=900;s.bossHp=180;assert.equal(crazyTrack(s),'first-bridge');
});

test('A real run/jump/bank route completes in 60s at desktop and mobile frame intervals',()=>{
 const route=[
 [165,560,false],[205,560,false],[275,508,true],[65,560,false],
 [210,560,false],[275,508,true],[380,438,true],[520,560,false],[565,560,false],[510,560,false],[380,438,true],[275,508,false],[65,560,false],
 [210,560,false],[275,508,true],[380,438,true],[520,560,false],[620,488,true],[760,420,true],[830,560,false],[740,560,true],[510,560,false],[380,438,true],[275,508,false],[65,560,false],
 [210,560,false],[275,508,true],[380,438,true],[520,560,false],[620,488,true],[760,420,true],[800,420,false],[980,560,true],[1065,488,true],[1200,414,true],[1065,488,false],[975,560,false],[800,560,true],[740,560,false],[510,560,false],[380,438,true],[275,508,false],[65,560,false]
];
 for(const dt of [16,50]){
  const v=createVault();let i=0,launched=false,jumpAt=0,damage=0;
  while(!v.result&&v.elapsed<60000){
   const [x,y,jump]=route[i]??[65,560,false];const held=new Set();
   if(Math.abs(v.x-x)>5)held.add(v.x<x?'right':'left');
   if(jump&&!launched&&v.grounded){held.add('action');launched=true;jumpAt=v.elapsed;}
   updateVault(v,dt,held,{hurt:n=>damage+=n});
   if(Math.abs(v.x-x)<10&&v.grounded&&Math.abs(v.y-y)<2){i++;launched=false;}
   if(jump&&launched&&v.grounded&&v.elapsed-jumpAt>1000&&Math.abs(v.x-x)>6)launched=false;
  }
  assert.equal(v.result,'success',`${dt}ms route reached waypoint ${i}`);assert.ok(v.banked>=360);assert.ok(damage>0&&damage<100);
 }
});

test('A brief touch down/up queues a jump even when both events arrive before the next frame',()=>{
 const s=gate();s.cooldown=650;inputCrazy(s,'action',true,'touch');inputCrazy(s,'action',false,'touch');
 updateCrazy(s,16);assert.ok(s.mini.y<560);assert.ok(s.mini.vy<0);
});

test('A completed vault resumes controllable combat without a covering transition banner',()=>{
 const s=gate();s.mini.carry=VAULT_RULES.goal;s.mini.x=65;updateCrazy(s,16);
 assert.equal(s.vaultCleared,true);assert.equal(s.mode,'jump');assert.equal(s.transition,null);assert.equal(s.cutscene,null);
 const x=s.mini.x;inputCrazy(s,'right');updateCrazy(s,50);assert.ok(s.mini.x>x);
 inputCrazy(s,'action');updateCrazy(s,16);assert.ok(s.mini.y<464);
});

test('Spikes and patrols cannot overwrite the safe checkpoint used after falling into a pit',()=>{
 const v=createVault();v.x=300;updateVault(v,16);assert.equal(v.safeX,300);
 v.x=345;updateVault(v,16);assert.equal(v.safeX,300);
 v.x=550;updateVault(v,16);assert.equal(v.safeX,300);
 v.x=450;v.y=675;v.vy=300;let damage=0;
 updateVault(v,16,new Set(),{hurt:amount=>damage+=amount});
 assert.equal(v.x,300);assert.equal(v.y,560);assert.equal(damage,12);
 for(let i=0;i<100;i++)updateVault(v,16,new Set(),{hurt:amount=>damage+=amount});
 assert.equal(damage,12,'Respawning and waiting must not cause another spike hit');
});

test('A fully loaded player can run and briefly tap jump out of every spike patch in either direction',()=>{
 for(const dt of [16,50])for(const spike of createVault().spikes)for(const direction of ['left','right']){
  const s=gate();s.protection=0;s.mini.carry=120;s.mini.x=spike.x+spike.w/2;
  updateCrazy(s,dt);assert.equal(s.hp,97);
  inputCrazy(s,direction,true,'touch');inputCrazy(s,'action',true,'touch');inputCrazy(s,'action',false,'touch');
  updateCrazy(s,dt);assert.ok(s.mini.y<560);
  for(let i=0;i<Math.ceil(400/dt);i++)updateCrazy(s,dt);
  assert.ok(s.mini.x+9<=spike.x||s.mini.x-9>=spike.x+spike.w);
  assert.equal(s.hp,97,'Leaving the spike patch must not cause repeated damage');
 }
});
