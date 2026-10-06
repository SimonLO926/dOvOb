import test from 'node:test';
import assert from 'node:assert/strict';
import {createPrideAttack,updatePrideAttack,prideInput,PRIDE_RULES} from './pride-attacks.mjs';
import {createMirrorDuel,updateMirrorDuel,mirrorDuelPoint,startPrideFinisher,finishPrideFinisher,retryPrideFinisher} from './pride-finisher.mjs';
const state=(mode,options)=>({mode,mini:createPrideAttack(mode,options),held:new Set()});
test('gaze tracks for one second, locks and warns before damaging',()=>{const s=state('pride-gaze');let hits=0;const step=()=>updatePrideAttack(s,50,{hurt:()=>hits++});step();s.held.add('right');for(let i=0;i<19;i++)step();s.held.clear();step();const h=s.mini.hazards[0],locked=h.x;for(let i=0;i<15;i++)step();assert.equal(h.x,locked);assert.equal(hits,0);for(let i=0;i<12;i++)step();assert.ok(hits>0);assert.ok(PRIDE_RULES.hard.warn<PRIDE_RULES.normal.warn);});
test('crown scales 1 to 3 and warning precedes impact',()=>{for(const [ratio,count] of [[1,1],[.6,2],[.2,3]]){const s=state('pride-crown-shock',{bossHpRatio:ratio});let hits=0;updatePrideAttack(s,50,{hurt:()=>hits++});assert.equal(s.mini.hazards.length,count);assert.equal(hits,0);}});
test('designated mirror takes three reflected shots and bursts slow fragments',()=>{const s=state('pride-mirror');let damage=0;updatePrideAttack(s,0);for(let n=0;n<3;n++){prideInput(s,'action');for(let i=0;i<25;i++)updatePrideAttack(s,50,{hit:(_,amount)=>damage+=amount});}assert.equal(s.mini.mirrors[0].broken,true);assert.equal(damage,12);assert.ok(s.mini.bullets.some(b=>b.enemy));});
test('duel replays exactly two seconds ago and pointer compensates horizontal flip',()=>{const m=createMirrorDuel();mirrorDuelPoint(m,40,440);assert.equal(m.target.x,240);for(let i=0;i<20;i++)updateMirrorDuel(m,50,new Set(['left']));const old=m.x;for(let i=0;i<40;i++)updateMirrorDuel(m,50,new Set(['right']));assert.equal(m.mirror.x,old);});
const encounter=()=>({config:{id:'pride'},bossHp:21,bossMaxHp:100,hp:100,stats:{damageTaken:0},held:new Set(),difficulty:'normal'});
test('20% trigger, immediate execution, 80 HP penalty and retry',()=>{const s=encounter();assert.equal(startPrideFinisher(s),false);s.bossHp=20;assert.equal(startPrideFinisher(s),true);finishPrideFinisher(s,'failure');assert.equal(s.hp,20);assert.equal(s.stats.damageTaken,80);assert.equal(retryPrideFinisher(s,19999),false);assert.equal(retryPrideFinisher(s,1),true);finishPrideFinisher(s,'success');assert.equal(s.bossHp,0);assert.equal(s.won,true);const dead=encounter();dead.hp=80;dead.bossHp=20;startPrideFinisher(dead);finishPrideFinisher(dead,'failure');assert.equal(dead.over,true);});
test('both difficulties render every attack and the mirrored world without exceptions',async()=>{const {drawPrideAttack}=await import('./pride-attacks.mjs');const {drawMirrorDuel}=await import('./pride-finisher.mjs');const c=new Proxy({}, {get:(o,k)=>o[k]??(()=>{}),set:(o,k,v)=>(o[k]=v,true)});for(const difficulty of ['normal','hard']){for(const mode of ['pride-gaze','pride-mirror','pride-crown-shock']){const s=state(mode,{difficulty,bossHpRatio:.2});for(let i=0;i<100;i++){updatePrideAttack(s,50);drawPrideAttack(c,s.mini);}}drawMirrorDuel(c,createMirrorDuel({difficulty}));}});

test('Upgraded attacks reuse the original mechanics with strictly stronger numeric parameters',()=>{
 for(const difficulty of ['normal','hard'])for(const mode of ['pride-gaze','pride-mirror','pride-crown-shock']){
  const base=state(mode,{difficulty,bossHpRatio:.6}),up=state(mode,{difficulty,bossHpRatio:.6,upgraded:true});
  updatePrideAttack(base,0);updatePrideAttack(up,0);
  assert.equal(up.mini.mode,base.mini.mode);assert.equal(up.mini.safe,undefined);assert.equal(base.mini.safe,undefined);
  assert.ok(up.mini.rules.warn<base.mini.rules.warn);assert.ok(up.mini.rules.crownWarn<base.mini.rules.crownWarn);assert.ok(up.mini.rules.speed>base.mini.rules.speed);assert.ok(up.mini.spawn<base.mini.spawn);
  assert.ok(up.mini.hazards.every(h=>h.kind===(mode==='pride-gaze'?'gaze':'crown')));
  if(mode==='pride-crown-shock'){
   assert.equal(up.mini.hazards.length,base.mini.hazards.length+1);prideInput(up,'action');assert.equal(up.mini.jump,650);
  }
  if(mode==='pride-mirror'){
   assert.equal(up.mini.mirrors.length,3);prideInput(base,'action');prideInput(up,'action');assert.ok(Math.hypot(up.mini.bullets[0].vx,up.mini.bullets[0].vy)>Math.hypot(base.mini.bullets[0].vx,base.mini.bullets[0].vy));assert.ok(up.mini.fire<base.mini.fire);
   let damage=0;for(let n=0;n<3;n++){up.mini.fire=0;prideInput(up,'action');for(let i=0;i<10;i++)updatePrideAttack(up,50,{hit:(_,amount)=>damage+=amount});}
   assert.equal(up.mini.mirrors[0].broken,true);assert.equal(damage,18);
  }else{
   let amounts=[];for(let n=0;n<50;n++)updatePrideAttack(up,50,{hurt:(_,amount)=>amounts.push(amount)});assert.ok(amounts.length);assert.ok(amounts.every(v=>v===12));
  }
 }
 assert.deepEqual(PRIDE_RULES.normal,{track:1000,warn:800,crownWarn:1000,speed:65});assert.deepEqual(PRIDE_RULES.hard,{track:1000,warn:550,crownWarn:700,speed:95});
});

test('First-form gaze uses fixed royal eyes; only mirror incarnation has changing mirror origins',()=>{
 const king=state('pride-gaze');updatePrideAttack(king,0);
 assert.equal(king.mini.hazards.length,2);assert.ok(king.mini.hazards.every(h=>h.source==='eye'));
 const eyes=king.mini.hazards.map(h=>[h.ox,h.oy]);assert.deepEqual(eyes,[[127,190],[153,190]]);
 king.mini.spawn=0;updatePrideAttack(king,0);assert.deepEqual(king.mini.hazards.slice(-2).map(h=>[h.ox,h.oy]),eyes);
 const s=state('pride-gaze',{upgraded:true});updatePrideAttack(s,0);assert.equal(s.mini.hazards.length,3);
 assert.ok(s.mini.hazards.every(h=>h.source==='mirror'));
 assert.equal(new Set(s.mini.hazards.map(h=>`${h.ox},${h.oy}`)).size,3);
 const first=s.mini.hazards.map(h=>[h.ox,h.oy]);for(let n=0;n<26;n++)updatePrideAttack(s,50);
 assert.ok(s.mini.hazards.every(h=>h.locked));assert.equal(new Set(s.mini.hazards.map(h=>h.angle)).size,3);
 s.mini.spawn=0;updatePrideAttack(s,0);assert.notDeepEqual(s.mini.hazards.slice(-3).map(h=>[h.ox,h.oy]),first);
 const two=state('pride-gaze',{upgraded:true});two.mirrorWorld={mirrors:[{broken:false},{broken:true},{broken:false}]};updatePrideAttack(two,0);
 assert.deepEqual(two.mini.hazards.map(h=>h.index),[0,2]);
});
test('Missing a reflection deadline launches physical bullets without a SAFE disk or unavoidable damage',()=>{
 const s=state('pride-mirror');let damage=0;updatePrideAttack(s,0);for(let n=0;n<100;n++)updatePrideAttack(s,50,{hurt:()=>damage++});
 assert.equal(s.mini.safe,undefined);assert.equal(damage,0);assert.equal(s.mini.bullets.filter(b=>b.enemy).length,7);
 for(let n=0;n<55;n++)updatePrideAttack(s,50,{hurt:()=>damage++});assert.ok(damage>0);
});

test('All gaze patterns allow actual movement routes from centre and both edges without SAFE immunity',()=>{
 for(const difficulty of ['normal','hard'])for(const upgraded of [false,true])for(const startX of [22,140,258]){
  const s=state('pride-gaze',{difficulty,upgraded});s.mini.x=startX;let hp=100,protection=0;
  for(let n=0;n<875;n++){const m=s.mini;
   if(n%5===0){let best=-Infinity;for(let x=30;x<=250;x+=22)for(let y=220;y<=475;y+=40){let clear=100;
    for(const h of m.hazards)if(h.locked)for(const offset of [-.11,0,.11]){const a=h.angle+offset,dx=x-h.ox,dy=y-h.oy;if(dx*Math.cos(a)+dy*Math.sin(a)>0)clear=Math.min(clear,Math.abs(dx*Math.sin(a)-dy*Math.cos(a)));}
    const rating=clear-Math.hypot(x-m.x,y-m.y)*.2;if(rating>best){best=rating;m.target={x,y};}
   }}
   protection=Math.max(0,protection-16);updatePrideAttack(s,16,{hurt:(_,amount)=>{if(!protection){hp-=amount;protection=650;}}});
  }
  assert.ok(hp>0,`${difficulty}/${upgraded}/${startX}`);assert.equal(s.mini.safe,undefined);
 }
});
