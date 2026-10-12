import test from 'node:test';
import assert from 'node:assert/strict';
import {createLust,hitBoss,continueScene,GAMES1,GAMES2} from './engine.mjs';
import {lustUnlocked,createLustRecorder} from './campaign.mjs';
import {sinProgress,crazyLeaderboardKey} from '../crazy-sins.mjs';
import {createCrazy} from '../crazy.mjs';
const storage=(entries={})=>{const data=new Map(Object.entries(entries));return {data,getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};};
function completed(s,{bad=false}={}){
 s.scene=null;s.form=2;s.bossMaxHp=2200;s.bossHp=15;
 s.firstTrial=true;s.played[1]=[...GAMES1];s.played[2]=[...GAMES2];s.datingDone=true;s.bad=bad;
 hitBoss(s,15);assert.equal(s.scene.kind,'body');s.scene.time=500;continueScene(s);
}
test('existing Envy completion unlocks the dedicated Lust encounter without modifying old saves',()=>{
 const save=storage({'bridge-crazy-cleared-envy':'1'});assert.equal(lustUnlocked(save),true);assert.equal(lustUnlocked(storage({'bridge-crazy-cleared-pride':'1'})),false);assert.equal(save.data.size,1);
 assert.equal(sinProgress(save).find(b=>b.id==='lust').entry,'lust.html');assert.throws(()=>createCrazy({sin:'lust'}),/dedicated encounter/);
});
test('official Lust only accepts full encounters and cannot record a first defeat or unfinished final battle',()=>{
 for(const scenario of ['dating','second-bridge','story:good'])assert.throws(()=>createLust({preview:false,scenario}),/full encounter/);
 const save=storage(),record=createLustRecorder(save),s=createLust({preview:false});s.scene=null;s.form=1;s.bossHp=0;assert.equal(record(s),false);
 s.form=2;s.bossHp=1;s.datingDone=true;s.firstTrial=true;assert.equal(record(s),false);assert.equal(save.data.size,0);
});
test('actual zero, body continuation and both good/bad victories save separate difficulty ranks only once',()=>{
 const save=storage();for(const [difficulty,bad]of [['normal',false],['hard',true]]){
  const s=createLust({preview:false,difficulty});const record=createLustRecorder(save);completed(s,{bad});assert.equal(s.lustCleared,true);assert.equal(record(s),true);assert.equal(record(s),false);
  assert.equal(save.getItem('bridge-crazy-cleared-lust'),'1');assert.deepEqual(JSON.parse(save.getItem(crazyLeaderboardKey('lust',difficulty))),[10150]);
 }
 assert.equal(sinProgress(save).find(b=>b.id==='gluttony').unlocked,false);
});
test('partial dates, previews, filming and blocked storage cannot save a fourth Boss clear',()=>{
 const save=storage(),record=createLustRecorder(save);
 for(const opts of [{},{preview:false,filming:true}]){const s=createLust(opts);completed(s);assert.equal(record(s),false);}
 const s=createLust({preview:false});s.scene=null;s.form=2;s.bossHp=15;s.firstTrial=true;s.datingDone=true;s.played[1]=GAMES1.slice(1);s.played[2]=[...GAMES2];hitBoss(s,15);s.scene.time=500;continueScene(s);assert.equal(s.lustCleared,false);assert.equal(record(s),false);assert.equal(save.data.size,0);
 const blocked={getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}};assert.equal(lustUnlocked(blocked,{filming:false}),false);assert.equal(lustUnlocked(blocked,{filming:true}),true);const good=createLust({preview:false});completed(good);assert.equal(createLustRecorder(blocked)(good),false);
});
