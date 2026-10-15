import test from 'node:test';
import assert from 'node:assert/strict';
import {createGluttony, startRound, finishRound, update, hitBoss, continueScene, FIRST_GAMES, roundPool} from './engine.mjs';
import {gluttonyUnlocked,createGluttonyRecorder} from './campaign.mjs';
import {campaignTarget} from '../cartridge/campaign.mjs';
import {sinProgress,crazyLeaderboardKey} from '../crazy-sins.mjs';
const storage=(entries={})=>{const data=new Map(Object.entries(entries));return {data,getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};};
const time=(s,ms)=>{for(let n=0;n<ms;n+=20)update(s,Math.min(20,ms-n));};
test('ordinary fusion stays outside every scheduled round until the first execution succeeds',()=>{
 const s=createGluttony({scenario:'phase-1'});
 assert.equal(roundPool(s).includes('merge'),false);
 for(let i=0;i<40;i++){
  s.hp=100;s.scene=null;s.bossHp=s.bossMaxHp;s.played=[...FIRST_GAMES];
  if(s.mode==='bridge'){s.round.clock=s.round.duration;update(s,20);}else{assert.notEqual(s.mode,'merge');finishRound(s,false);time(s,1220);}
  assert.notEqual(s.mode,'merge');
 }
 s.watermelonDone=true;assert.equal(roundPool(s).includes('merge'),true);
 s.played=[...FIRST_GAMES];s.cycle=0;startRound(s,'bridge');s.round.clock=s.round.duration;update(s,20);assert.equal(s.mode,'merge');
});
test('failed or forged watermelon success never unlocks fusion; retry remains first execution',()=>{
 const s=createGluttony({scenario:'watermelon-execution'});
 finishRound(s,true);assert.equal(s.watermelonDone,false);assert.equal(s.round.success,false);assert.equal(s.hp,20);assert.equal(s.retry,20000);
 time(s,1220);s.hp=100;startRound(s,'bridge');time(s,20020);assert.equal(s.scene.kind,'watermelon-start');s.scene.time=500;continueScene(s);assert.equal(s.round.execution,true);
});
test('ordinary fusion has shorter real-fruit goals while execution still requires watermelon in both difficulties',()=>{
 for(const difficulty of ['normal','hard']){
  const s=createGluttony({scenario:'merge',difficulty}),m=s.round;
  assert.equal(m.target,difficulty==='hard'?6:5);m.score=99999;update(s,20);assert.equal(m.done,false);
  m.fruits=[{x:140,y:430,level:m.target,age:0,vx:0,vy:0}];update(s,20);assert.equal(m.success,true);assert.equal(s.watermelonDone,false);
  const e=createGluttony({scenario:'watermelon-execution',difficulty});e.round.fruits=[{x:140,y:430,level:6,age:0,vx:0,vy:0}];update(e,20);assert.equal(e.round.done,false);
 }
});
test('existing Lust completion unlocks formal Gluttony without migrating or changing old saves',()=>{
 const save=storage({'bridge-crazy-cleared-lust':'1'});assert.equal(gluttonyUnlocked(save,{filming:false}),true);assert.equal(save.data.size,1);
 assert.equal(gluttonyUnlocked(storage(),{filming:false}),false);
 assert.equal(campaignTarget('gluttony',sinProgress(save,undefined,{filming:false}),'https://example.com/bridge/','hard'),'https://example.com/bridge/gluttony.html?difficulty=hard');
 for(const scenario of ['merge','watermelon-execution','story:victory'])assert.throws(()=>createGluttony({preview:false,scenario}),/full encounter/);
});
function victory(opts={}){
 const s=createGluttony(opts);s.scene=null;s.stage=3;s.bossHp=1;s.watermelonDone=true;s.executionDone=true;s.escapeDone=true;s.played=[...FIRST_GAMES];
 hitBoss(s,1);assert.equal(s.scene.kind,'abyss-defeat');s.scene.time=500;continueScene(s);assert.equal(s.scene.kind,'body');s.scene.time=500;continueScene(s);return s;
}
test('only genuine final body continuation writes a formal clear and one rank per difficulty',()=>{
 const save=storage(),record=createGluttonyRecorder(save);
 for(const difficulty of ['normal','hard']){const s=victory({preview:false,difficulty});assert.equal(s.gluttonyCleared,true);assert.equal(record(s),true);assert.equal(record(s),false);assert.equal(JSON.parse(save.getItem(crazyLeaderboardKey('gluttony',difficulty))).length,1);}
 assert.equal(save.getItem('bridge-crazy-cleared-gluttony'),'1');assert.equal(sinProgress(save).find(b=>b.id==='sloth').unlocked,false);
});
test('preview, filming, incomplete trials and blocked storage cannot record a clear',()=>{
 const save=storage(),record=createGluttonyRecorder(save);
 for(const opts of [{},{preview:false,filming:true}])assert.equal(record(victory(opts)),false);
 for(const missing of ['watermelonDone','executionDone','escapeDone']){const s=victory({preview:false});s[missing]=false;assert.equal(record(s),false);}
 const s=victory({preview:false});s.played=[];s.gluttonyCleared=false;assert.equal(record(s),false);assert.equal(save.data.size,0);
 const blocked={getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}};assert.equal(createGluttonyRecorder(blocked)(victory({preview:false})),false);
});
