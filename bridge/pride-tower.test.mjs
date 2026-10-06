import test from 'node:test';
import assert from 'node:assert/strict';
import { createSecondDemo } from './pride-second-demo.mjs';
import { prideTowerPhysics, prideTowerTopX, updatePrideTower, drawPrideTower } from './pride-tower.mjs';
const tower = () => createSecondDemo('pride-tower', { random: () => .4 });
function stack(m, floors, step = 0, width = 90) {
  m.floors = floors; m.blocks = Array.from({length: floors + 1}, (_, i) => ({x: 95 + i * step, w: width}));
}
function land(s, offset) {
  const m=s.mini;
  m.falling={x:prideTowerTopX(m)+offset,w:m.blocks.at(-1).w,distance:64,speed:0};
  updatePrideTower(s,0);
}
test('Sine sway reverses direction and its amplitude grows in proportion to tower height', () => {
  const {mini:m}=tower();stack(m,2);const low=prideTowerPhysics(m,Math.PI/2/.002);
  stack(m,12);const high=prideTowerPhysics(m,Math.PI/2/.002);
  assert.equal(high.amplitude,low.amplitude*6);assert.equal(high.sway,high.amplitude);
  assert.ok(prideTowerPhysics(m,Math.PI*1.5/.002).sway<0);
});
test('Balance uses the mass of the entire tower and previous offsets, including trimmed widths', () => {
  const {mini:m}=tower();m.floors=2;m.blocks=[{x:95,w:90},{x:115,w:70},{x:130,w:55}];
  const expected=(140*90+150*70+157.5*55)/215-140;
  assert.equal(prideTowerPhysics(m).offset,expected);assert.ok(prideTowerPhysics(m).lean>0);
  const top={...m.blocks.at(-1)};m.blocks[1]={x:95,w:70};
  assert.deepEqual(m.blocks.at(-1),top);assert.ok(prideTowerPhysics(m).offset<expected);
});
test('Off-center landings accumulate without assisted correction and increase sway; grades remain visible', () => {
  for(const [offset,grade] of [[0,'perfect'],[12,'good'],[35,'poor']]){
    const s=tower(),m=s.mini;land(s,offset);
    assert.equal(m.grade,grade);assert.equal(m.blocks.at(-1).x,95+offset);
    assert.equal(m.blocks.at(-1).w,90);assert.equal(m.hitQueue,1);assert.equal(m.score,100);
    assert.ok(m.feedback.includes({perfect:'完美',good:'好',poor:'差'}[grade]));
    if(offset)assert.ok(prideTowerPhysics(m).amplitude>.9);
  }
  const s=tower();land(s,12);const first=prideTowerPhysics(s.mini).offset;land(s,12);
  assert.ok(prideTowerPhysics(s.mini).offset>first);
});
test('A supported stack can collapse from accumulated center of mass with no falling block', () => {
  for(const sign of [-1,1]){
    const s=tower(),m=s.mini;stack(m,16,sign*6);m.clock=0;
    assert.ok(m.blocks.slice(1).every((b,i)=>90-Math.abs(b.x-m.blocks[i].x)>8));
    updatePrideTower(s,0);assert.equal(m.failed,true);assert.ok(m.feedback.includes('重心失衡'));
    assert.equal(m.hitQueue,0);assert.equal(m.finished,false);assert.deepEqual(m.rewards,[]);
  }
});
test('Sway can carry a biased tower beyond its balance limit between landings', () => {
  const s=tower(),m=s.mini;stack(m,16,2.8);m.clock=0;
  assert.ok(Math.abs(prideTowerPhysics(m).effectiveOffset)<prideTowerPhysics(m).limit);
  updatePrideTower(s,0);assert.equal(m.failed,false);
  m.clock=Math.PI/2/.002;updatePrideTower(s,0);assert.equal(m.failed,true);
});
test('Landing support follows the moving tower, rather than stationary block coordinates', () => {
  const s=tower(),m=s.mini;stack(m,12);m.clock=Math.PI/2/.002;
  land(s,0);assert.equal(m.grade,'perfect');assert.equal(m.blocks.at(-1).x,95);
  const wrong=tower();stack(wrong.mini,12);wrong.mini.clock=m.clock;
  wrong.mini.falling={x:95,w:90,distance:64,speed:0};updatePrideTower(wrong,0);
  assert.notEqual(wrong.mini.grade,'perfect');
});
test('Every floor shares one tower transform and essential sway stays visible with reduced motion', () => {
  const s=tower(),m=s.mini;stack(m,10,1);m.clock=500;
  const render=reduced=>{
    const calls=[];const c=new Proxy({}, {get:(o,k)=>o[k]??((...args)=>{calls.push([k,...args]);if(k==='createLinearGradient')return {addColorStop(){}};})});
    drawPrideTower(c,s,reduced);return calls;
  };
  const calls=render(false),transforms=calls.filter(v=>v[0]==='transform');
  assert.equal(transforms.length,1);assert.notEqual(transforms[0][3],0);assert.notEqual(transforms[0][5],0);
  const start=calls.findIndex(v=>v[0]==='transform');
  let depth=1,end=start;
  while(depth&&++end<calls.length){if(calls[end][0]==='save')depth++;if(calls[end][0]==='restore')depth--;}
  // Flat floors keep their actual support widths inside the shared sway transform.
  const faces=calls.slice(start,end).filter(v=>v[0]==='fillRect'&&v[4]===22);
  assert.equal(faces.length,m.blocks.length);
  faces.forEach((face,i)=>{assert.equal(face[1],m.blocks[i].x);assert.equal(face[3],m.blocks[i].w);});
  assert.deepEqual(render(true).filter(v=>v[0]==='transform'),transforms);
});

test('Repeated supported landings lean and collapse the actual tower before a single-floor miss', () => {
  for (const sign of [-1, 1]) {
    const s=tower(),m=s.mini;
    while(!m.failed&&!m.finished)land(s,sign*8);
    assert.equal(m.failed,true);assert.equal(m.finished,false);
    assert.ok(m.feedback.includes('重心失衡'));assert.ok(m.floors<m.goal);
    assert.ok(m.blocks.every(b=>b.w===90));
    assert.ok(m.blocks.slice(1).every((b,i)=>90-Math.abs(b.x-m.blocks[i].x)>8));
  }
});

test('Animated Babel masonry never mutates landing geometry or gameplay state', () => {
  for(const reduced of [false,true])for(const floors of [0,8,20])for(const phase of ['hanging','falling','finished','failed']){
    const s=tower(),m=s.mini;stack(m,floors,.5);m.clock=650;
    if(phase==='falling')m.falling={x:138,w:90,distance:32,speed:100};
    m.finished=phase==='finished';m.failed=phase==='failed';
    const before=JSON.stringify(s);let depth=0;
    const c=new Proxy({}, {get:(o,k)=>o[k]??((...args)=>{
      if(k==='save')depth++;
      if(k==='restore'){depth--;assert.ok(depth>=0);}
      for(const arg of args)if(typeof arg==='number')assert.ok(Number.isFinite(arg),k+' finite geometry');
      if(k==='createLinearGradient')return {addColorStop(){}};
    })});
    drawPrideTower(c,s,reduced);
    assert.equal(depth,0);assert.equal(JSON.stringify(s),before);
  }
});
