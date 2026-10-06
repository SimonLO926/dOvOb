import test from 'node:test';
import assert from 'node:assert/strict';
import { createPrideAttack, updatePrideAttack, drawPrideAttack } from './pride-attacks.mjs';
import { drawPridePalace } from './pride-art.mjs';

function canvas() {
  const calls=[];
  const c=new Proxy({}, {
    get:(o,k)=>o[k]??((...args)=>{
      calls.push([k,...args]);
      if(k==='createLinearGradient')return {addColorStop:(...v)=>calls.push(['addColorStop',...v])};
    }),
    set:(o,k,v)=>{calls.push([k,v]);o[k]=v;return true;},
  });
  return {c,calls};
}
test('gaze tutorial lasts three seconds and is remembered across waves and encounters',()=>{
  const s={mini:createPrideAttack('pride-gaze'),held:new Set()};
  updatePrideAttack(s,0);
  assert.equal(s.prideGazeTutorialSeen,true);
  assert.equal(s.mini.tutorialUntil,3000);
  const first=canvas();drawPrideAttack(first.c,s.mini);
  assert.ok(first.calls.some(v=>v[0]==='fillText'&&v[1]==='雙眼鎖定後，離開金色射線！'));
  assert.ok(!first.calls.some(v=>v[0]==='fillText'&&v[1]==='SAFE'));assert.equal(s.mini.safe,undefined);
  for(let i=0;i<60;i++)updatePrideAttack(s,50);
  const expired=canvas();drawPrideAttack(expired.c,s.mini);
  assert.ok(!expired.calls.some(v=>v[0]==='fillText'&&v[1]==='雙眼鎖定後，離開金色射線！'));
  s.mini.spawn=0;updatePrideAttack(s,0);assert.equal(s.mini.tutorialUntil,3000);
  s.mini=createPrideAttack('pride-gaze');updatePrideAttack(s,0);
  assert.equal(s.mini.tutorialUntil,undefined);
});
test('other Pride attacks do not consume the gaze tutorial',()=>{
  const s={mini:createPrideAttack('pride-mirror'),held:new Set()};
  updatePrideAttack(s,0);assert.equal(s.prideGazeTutorialSeen,undefined);
});
test('palace animation stops completely with reduced motion',()=>{
  const render=(time,reduced)=>{const {c,calls}=canvas();drawPridePalace(c,280,560,time,reduced);return JSON.stringify(calls);};
  assert.deepEqual(render(0,true),render(9000,true));
  assert.notDeepEqual(render(0,false),render(9000,false));
});

test('cat poses use canvas transforms and leave the default rendering unchanged',async()=>{
  const previous=globalThis.Image;
  globalThis.Image=class {
    complete=true; naturalWidth=1696; naturalHeight=944;
    set src(value){queueMicrotask(()=>this.onload?.());}
  };
  try {
    const {drawMischiefCat,catImageReady}=await import('./crazy-view.mjs?pride-ux');
    await catImageReady;
    const render=pose=>{const {c,calls}=canvas();drawMischiefCat(c,140,400,1,false,pose);return calls;};
    const baseline=render(null);
    assert.equal(baseline.filter(v=>v[0]==='drawImage').length,1);
    assert.ok(!baseline.some(v=>v[0]==='rotate'));
    for(const action of ['idle','attack','hurt','victory']){
      assert.notDeepEqual(render({action,time:1000}),baseline);
      assert.equal(JSON.stringify(render({action,time:0,reducedMotion:true})),JSON.stringify(render({action,time:9000,reducedMotion:true})));
    }
    assert.equal(render({action:'victory',time:1000}).filter(v=>v[0]==='drawImage').length,3);
  } finally {globalThis.Image=previous;}
});
