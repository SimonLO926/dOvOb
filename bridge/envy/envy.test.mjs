import test from 'node:test';
import assert from 'node:assert/strict';
import { seeded, rollingBoard, solveBlock, rollBlock, validBlock, makeMaze, mazeRoute, DIRS, keyOf, segmentHitsRect } from './geometry.mjs';
import { createRound, updateRound, roundInput, roundPoint, rollingMove, drawCard, cardRarity, chooseEye, TAROT, cardEffects, describeCard, laserEyePosition, laserRules } from './rounds.mjs';
import { createEnvy, SCENARIOS, updateEnvy, envyInput, hitBoss, hurt, heal, startRound, appearance, continueScene, finishEnvy } from './engine.mjs';

function tick(s,ms){while(ms>0){const dt=Math.min(16,ms);updateEnvy(s,dt);ms-=dt;}}
function roundTick(m,ms,held=new Set()){while(ms>0){const dt=Math.min(16,ms);updateRound(m,dt,held);ms-=dt;}}
function tap(s,action){envyInput(s,action);envyInput(s,action,false);}

test('All preview entries initialize without developing or unlocking Envy in the official game',()=>{
  for(const scenario of SCENARIOS){const s=createEnvy({scenario:scenario.id,random:seeded(6)});tick(s,100);assert.equal(s.preview,true);assert.ok(s.hp>0);assert.ok(Number.isFinite(s.bossHp));}
  assert.throws(()=>createEnvy({scenario:'missing'}),RangeError);
});
test('The two health bars and 50% / 20% appearances match Normal and Hard',()=>{
  assert.equal(createEnvy().bossMaxHp,1000);
  for(const difficulty of['normal','hard']){
    const s=createEnvy({scenario:'dragon',difficulty});assert.equal(s.bossMaxHp,difficulty==='hard'?1750:1300);assert.equal(appearance(s),'dragon');
    hitBoss(s,s.bossMaxHp*.5);assert.equal(appearance(s),'cyclops');assert.equal(s.scene,null);
    hitBoss(s,99999);assert.equal(s.bossHp,s.bossMaxHp*.2);assert.equal(appearance(s),'rage');assert.equal(s.scene.kind,'rage');
    hitBoss(s,999);assert.equal(s.bossHp,s.bossMaxHp*.2);tick(s,1900);assert.equal(s.mode,'chase');assert.equal(s.round.duration,60000);
  }
});
test('The optional worm maze can be skipped without undoing the defeated boss',()=>{
  const s=createEnvy({scenario:'capture'});assert.equal(s.won,true);assert.equal(s.bossDefeated,true);assert.equal(s.captured,false);finishEnvy(s);
  assert.equal(s.over,true);assert.equal(s.scene.kind,'victory');assert.equal(s.won,true);assert.equal(s.captured,false);
  const fighting=createEnvy();finishEnvy(fighting);assert.equal(fighting.over,false);
});
test('Dragon breath can genuinely burn five eyes by moving the heart, with no teleport or forced damage',()=>{
  for(const difficulty of['normal','hard']){
    const m=createRound('breath',{difficulty});
    while(!m.done){
      const eye=m.eyes.filter(e=>!e.burned).sort((a,b)=>Math.hypot(a.x-m.flame.x,a.y-m.flame.y)-Math.hypot(b.x-m.flame.x,b.y-m.flame.y))[0];
      const dx=eye.x-m.flame.x,dy=eye.y-m.flame.y,len=Math.hypot(dx,dy)||1;
      roundPoint(m,eye.x+dx/len*60,eye.y+dy/len*60);updateRound(m,16);
    }
    assert.equal(m.burned,5);assert.equal(m.success,true);assert.ok(m.clock<14000);assert.equal(m.effects.filter(e=>e.kind==='hurt').length,0);
  }
});
test('First defeat and transformation freeze gameplay, then initialize the second bar',()=>{
  const s=createEnvy({scenario:'first-bridge'});hitBoss(s,1000);const elapsed=s.elapsed;
  tick(s,1000);assert.equal(s.elapsed,elapsed);assert.equal(s.scene.kind,'first-defeat');continueScene(s);assert.equal(s.scene.kind,'transform');
  tick(s,2800);assert.equal(s.form,2);assert.equal(s.bossHp,1300);assert.equal(s.mode,'bridge');assert.equal(s.scene,null);
});
test('Rolling geometry handles both lying orientations and only standing lands in the eye hole',()=>{
  const a={x:3,y:3,orientation:0};assert.deepEqual(rollBlock(rollBlock(a,'left'),'right'),a);assert.deepEqual(rollBlock(rollBlock(a,'up'),'down'),a);
  const m=createRound('rolling',{random:seeded(17)});const route=solveBlock(m.board);assert.ok(route.length>0);
  for(const direction of route){rollingMove(m,direction);roundTick(m,450);}
  assert.equal(m.round,1);assert.equal(m.falls,0);
});
test('All three authored 3D islands have a valid stand-into-hole route',()=>{
  for(let seed=0;seed<1;seed++)for(let level=0;level<3;level++){
    const board=rollingBoard(level,seeded(seed*3+level));const route=solveBlock(board);assert.ok(route?.length);
    let block={...board.start};for(const direction of route){block=rollBlock(block,direction);assert.ok(validBlock(board,block));}
    assert.deepEqual(block,{x:board.goal.x,y:board.goal.y,orientation:0});
  }
});
test('Rolling off a tile causes a real penalty and resets without a fake win',()=>{
  const m=createRound('rolling',{random:seeded(3)});rollingMove(m,'left');roundTick(m,450);
  assert.equal(m.falls,1);assert.equal(m.round,0);assert.ok(m.effects.some(e=>e.kind==='hurt'&&e.amount===3));assert.deepEqual(m.block,m.board.start);
});
test('Odd-eye rounds require three actual choices; wrong choices hurt but stay playable',()=>{
  const m=createRound('difference',{random:seeded(9)});chooseEye(m,(m.odd+1)%12);assert.equal(m.round,0);assert.ok(m.effects.some(e=>e.kind==='hurt'));
  roundTick(m,250);for(let i=0;i<3;i++){chooseEye(m,m.odd);roundTick(m,250);}assert.equal(m.done,true);assert.equal(m.success,true);assert.equal(m.round,3);
});
test('Card boundaries preserve C70 U20 R7 SR2 SAR1, with no false high-rarity boost',()=>{
  const counts={C:0,U:0,R:0,SR:0,SAR:0};for(let i=0;i<10000;i++)counts[cardRarity(i/10000)]++;
  assert.deepEqual(counts,{C:7000,U:2000,R:700,SR:200,SAR:100});
  assert.equal(cardRarity(.7),'U');assert.equal(cardRarity(.97),'SR');assert.equal(cardRarity(.99),'SAR');
});
test('Tarot rewards resolve once after the reveal, including reversed reward and Death sacrifice',()=>{
  const m=createRound('tarot',{random:()=>.02});drawCard(m);drawCard(m);assert.equal(m.effects.length,0);roundTick(m,600);drawCard(m);
  assert.equal(m.drawn,1);assert.ok(m.effects.some(e=>e.kind==='heal'&&e.amount===15));
  const values=[.99,.8],death=createRound('tarot',{random:()=>values.shift()??.5});drawCard(death);roundTick(death,600);drawCard(death);
  assert.deepEqual(death.effects.map(e=>[e.kind,e.amount]),[['boss',60],['hurt',30]]);
});
test('SR/SAR affects the next attack once: attack +50%, incoming counter damage +30%',()=>{
  const s=createEnvy({scenario:'second:pack',random:()=>.995});tap(s,'action');tick(s,1200);tap(s,'action');
  assert.equal(s.pendingEnrage,true);assert.equal(s.collection[0].rarity,'SAR');startRound(s,'net');assert.equal(s.attackMultiplier,1.5);assert.equal(s.vulnerable,1.3);assert.equal(s.pendingEnrage,false);
  const hp=s.bossHp;hitBoss(s,20);assert.equal(hp-s.bossHp,26);hurt(s,10,true);assert.equal(s.hp,85);
  startRound(s,'laser-up');assert.equal(s.attackMultiplier,1);assert.equal(s.vulnerable,1);
});
test('Eye tarot shields only the next attack; Hard healing is half and HP clamps',()=>{
  const s=createEnvy({scenario:'tarot',random:()=>.7,difficulty:'hard'});tap(s,'action');tick(s,600);tap(s,'action');assert.equal(s.pendingShield,true);
  startRound(s,'laser');hurt(s,20,true);assert.equal(s.hp,90);heal(s,10);assert.equal(s.hp,95);heal(s,500);assert.equal(s.hp,100);
  startRound(s,'steal');hurt(s,20,true);assert.equal(s.hp,80);
});
test('Theft targets a fixed place: movement dodges, nearby counter interrupts, grabbed HP can be reclaimed',()=>{
  const grabbed=createEnvy({scenario:'steal'});tick(grabbed,1700);assert.equal(grabbed.hp,80);assert.ok(grabbed.slowTime>0);
  for(let i=0;i<3;i++)tap(grabbed,'action');assert.equal(grabbed.hp,100);assert.equal(grabbed.slowTime,0);assert.ok(grabbed.bossHp<1000);
  const dodge=createEnvy({scenario:'steal'});tick(dodge,900);envyInput(dodge,'right');tick(dodge,800);envyInput(dodge,'right',false);assert.equal(dodge.hp,100);assert.equal(dodge.slowTime,0);
  const counter=createEnvy({scenario:'steal'});tick(counter,1300);tap(counter,'action');tick(counter,400);assert.equal(counter.hp,100);assert.ok(counter.bossHp<1000);
});
test('Original lasers retain 750ms tracking and warning; both versions fire sequentially',()=>{
  const first=createRound('laser'),second=createRound('laser-up');roundTick(first,1400);roundTick(second,1400);assert.equal(first.firing,false);assert.equal(second.firing,true);assert.equal(first.beams.length,2);assert.equal(second.beams.length,3);
  const angle=first.beams[0].angle;roundTick(first,120,new Set(['left']));assert.equal(first.firing,true);assert.equal(first.beams[0].angle,angle);
  for(let i=0;i<150;i++){updateRound(second,16);assert.ok(second.beams.filter(b=>b.firing).length<=1);}
});
test('Net counters require proximity to a visible eye; gaps really let the player through the web',()=>{
  const m=createRound('net');m.x=m.gaps[0];m.y=400;roundInput(m,'action');assert.equal(m.integrity,3);
  m.netY=400;roundInput(m,'action');assert.equal(m.integrity,2);roundInput(m,'action');assert.equal(m.integrity,2);
  m.netHit=false;m.invulnerable=0;m.x=m.gaps[1];updateRound(m,16);assert.equal(m.effects.filter(e=>e.kind==='hurt').length,0);
  m.x=100;m.y=m.netY;updateRound(m,16);assert.ok(m.effects.some(e=>e.kind==='hurt'));
});
test('Rolling accepts one press per completed roll; holding an arrow cannot overshoot',()=>{
  const m=createRound('rolling');roundInput(m,'down');roundTick(m,150,new Set(['down']));assert.equal(m.block.orientation,0);assert.ok(m.roll);
  roundTick(m,800,new Set(['down']));assert.equal(m.moves,1);assert.equal(m.block.orientation,2);
});
test('Territory closes a real tail loop, floods enclosed land, and gives a completion reward',()=>{
  const m=createRound('territory',{random:seeded(4)});
  const route=[...Array(7).fill('up'),...Array(6).fill('left'),...Array(7).fill('down')];
  for(const dir of route){roundInput(m,dir);roundTick(m,10);}
  assert.ok(m.owned.size>39);assert.equal(m.trail.length,0);assert.equal(m.done,true);
});
test('Every capture maze has a long reachable route through walls, not a teleport: 200 seeds',()=>{
  for(let seed=0;seed<200;seed++){
    const maze=makeMaze(17,23,seeded(seed));const route=mazeRoute(maze,maze.start,maze.goal);assert.ok(route.length>=30);
    let p={...maze.start};for(const step of route){p.x+=DIRS[step][0];p.y+=DIRS[step][1];assert.equal(maze.cells[p.y][p.x],0);}assert.deepEqual(p,maze.goal);
  }
});
test('Pupil blindness requires three seconds at the actual reachable blind cell',()=>{
  const m=createRound('pupil',{random:seeded(5)}),route=mazeRoute(m.maze,{x:m.cx,y:m.cy},m.maze.goal);
  for(const step of route){roundInput(m,step);roundTick(m,150);}assert.equal(m.done,false);roundTick(m,2850);assert.equal(m.success,true);
});
test('Capture requires proximity and action; the true body flees, but real movement can catch it',()=>{
  const s=createEnvy({scenario:'capture',random:seeded(6)});tap(s,'action');assert.equal(s.captured,false);
  for(let n=0;n<600&&!s.captured;n++){
    const m=s.round,route=mazeRoute(m.maze,{x:m.cx,y:m.cy},m.worm);
    if(route.length<=1)tap(s,'action');else tap(s,route[0]);tick(s,150);
  }
  assert.equal(s.won,true);assert.equal(s.captured,true);assert.equal(s.scene.kind,'victory');assert.equal(s.bossHp,0);
});
test('Occlusion tests the same segment against a real tree rectangle',()=>{
  assert.equal(segmentHitsRect({x:0,y:0},{x:100,y:100},{x:40,y:40,w:20,h:30}),true);
  assert.equal(segmentHitsRect({x:0,y:0},{x:100,y:100},{x:40,y:75,w:20,h:10}),false);
});
test('Jumping and stopping behind cover completes the chase as soon as the route reaches 100%',()=>{
  for(const difficulty of['normal','hard']){
    const s=createEnvy({scenario:'chase',difficulty,random:seeded(21)});
    const chase=s.round;
    for(let i=0;i<3800&&s.mode==='chase'&&!s.over&&!s.scene;i++){
      const m=s.round,next=m.obstacles.find(o=>o.x+o.w>m.x);
      if(next&&next.x-m.x<72&&m.y>=m.ground-1)tap(s,'action');
      s.held=new Set([m.beam.state==='active'&&m.covered?'left':'right']);updateEnvy(s,16);
      if(m.x<m.goal)assert.equal(s.chaseCleared,false);
    }
    assert.equal(chase.x,chase.goal);assert.ok(chase.clock<chase.duration);assert.equal(chase.success,true);
    assert.equal(s.over,false,`${difficulty}: HP ${s.hp}`);assert.equal(s.chaseCleared,true);assert.equal(s.scene,null);assert.equal(s.mode,'bridge');
    assert.equal(s.bossHp,s.bossMaxHp*.1);assert.equal(s.finalBridge,true);assert.equal(s.bossDefeated,false);assert.equal(s.won,false);
    finishEnvy(s);assert.equal(s.over,false);
  }
});
test('The final real movement step finishes once and does not leave the heart exposed at 100%',()=>{
  const s=createEnvy({scenario:'chase'}),m=s.round;
  // Near-goal state fixture: completion still requires the real movement update.
  m.x=m.goal-4;m.clock=4900;m.beam.angle=Math.atan2(m.y-245,130);
  m.covers=[];s.hp=1;s.held=new Set(['left']);
  updateEnvy(s,16);assert.equal(s.chaseCleared,false);assert.equal(s.mode,'chase');
  assert.equal(m.x,m.goal-4);assert.equal(s.hp,1);
  m.clock=5715;m.exposure=699;s.held=new Set(['right']);updateEnvy(s,32);
  assert.equal(m.x,m.goal);assert.equal(m.done,true);assert.equal(m.success,true);
  assert.equal(s.chaseCleared,true);assert.equal(s.mode,'bridge');assert.equal(s.hp,1);
  assert.equal(s.round.clock,0);assert.equal(s.bossHp,s.bossMaxHp*.1);
  updateRound(m,50,new Set(['right']));assert.equal(m.x,m.goal);assert.deepEqual(m.effects,[]);
});
test('A stalled chase fails honestly, charges 40 HP and keeps the main bar locked for retry',()=>{
  const s=createEnvy({scenario:'chase',random:seeded(21)});
  // Standing at the first physical obstacle stalls the route. Test the failure effect without granting a clear.
  const m=s.round;roundTick(m,60000);assert.equal(m.success,false);assert.ok(m.effects.some(e=>e.kind==='chaseFail'&&e.amount===40));
  const retry=createEnvy({scenario:'chase'});retry.round.clock=59984;retry.held=new Set(['left']);
  updateEnvy(retry,16);assert.equal(retry.hp,60);assert.equal(retry.chaseCleared,false);assert.equal(retry.mode,'bridge');
  assert.equal(retry.chaseRetry,20000);hitBoss(retry,99999);assert.equal(retry.bossHp,retry.bossMaxHp*.2);
  retry.bridge.active=null;tick(retry,20000);assert.equal(retry.mode,'chase');assert.equal(retry.chaseRetry,0);assert.equal(retry.round.clock,0);
});

test('Bridge cleared rewards launch Envy games even when they clear the last occupied row; curses have an actual duration',()=>{
  const s=createEnvy({scenario:'first-bridge',random:seeded(5)}),g=s.bridge;
  for(let x=0;x<10;x++)g.grid[19][x]={type:'O',g:x+1,bomb:false,reward:x===0?'pinball':null,curse:x===1?'reverse':null};
  g.phase='resolving';g.combo=0;g.active=null;g.comboArmed=true;
  tick(s,2000);assert.equal(s.mode,'tarot');assert.ok(s.curses.reverse>0);assert.equal(g.pendingReward,null);
});
test('Complex capture maze is camera-readable, has loops, and the worm leaves a real fleeing trail',()=>{
  const m=createRound('capture',{random:seeded(6)});assert.equal(m.maze.w,29);assert.equal(m.maze.h,35);
  const route=mazeRoute(m.maze,{x:m.cx,y:m.cy},m.worm);for(const dir of route.slice(0,-10)){roundInput(m,dir);roundTick(m,150);}
  roundTick(m,1000);assert.ok(m.tracks.length>0);assert.ok(m.tracks.some(p=>p.x!==m.worm.x||p.y!==m.worm.y));
});

test('The giant eye stays visible: render origin and damage origin match while running or stopping',()=>{
 const m=createRound('chase');roundTick(m,1300,new Set(['right']));assert.equal(m.x-m.beam.origin.x,130);assert.equal(m.beam.state,'active');
 roundTick(m,300,new Set(['left']));assert.equal(m.x-m.beam.origin.x,130);
});
test('A net survived without breaking its three eyes is not falsely marked complete',()=>{
 const m=createRound('net');roundTick(m,m.duration);assert.equal(m.success,false);assert.equal(m.integrity,3);
});

test('Every tarot orientation resolves exactly the advertised effect, with Hard healing shown at its actual value',()=>{
  for(const [index,card] of TAROT.entries())for(const reversed of [false,true])for(const difficulty of ['normal','hard']){
    const values=[(index+.25)/5,reversed?.1:.8],m=createRound('tarot',{random:()=>values.shift()??.5});
    drawCard(m);const revealed={...card,reversed};assert.deepEqual(m.revealed,revealed);
    const expected=cardEffects(revealed,'tarot');roundTick(m,600);drawCard(m);assert.deepEqual(m.effects,expected);
    const lines=describeCard(revealed,'tarot',{difficulty});assert.ok(lines.length>=1&&lines.length<=3);
    const s=createEnvy({scenario:'tarot',difficulty});hurt(s,80,true);const before=s.hp;
    if(expected[0].kind==='heal'){heal(s,expected[0].amount);assert.deepEqual(lines,[`回復 ${s.hp-before} HP`]);}
    if(card.kind==='death')assert.deepEqual(lines,[`反攻 Boss ${reversed?30:60}`,'自己扣 30 HP']);
    if(card.kind==='shield')assert.deepEqual(lines,['下次攻擊受傷減半']);
  }
});
test('Secret cards explain the actual heal, counter damage and next-attack risk before collection',()=>{
  for(const rarity of ['C','U','R','SR','SAR'])for(const difficulty of ['normal','hard']){
    const card={rarity,variant:2},effects=cardEffects(card,'pack'),m=createRound('pack');m.revealed=card;drawCard(m);assert.deepEqual(m.effects,effects);assert.equal(m.drawn,1);
    const lines=describeCard(card,'pack',{difficulty});const first=effects[0];
    if(first.kind==='heal'){const s=createEnvy({scenario:'dragon',difficulty});hurt(s,80,true);const before=s.hp;heal(s,first.amount);assert.equal(lines[0],`回復 ${s.hp-before} HP`);}
    else assert.equal(lines[0],`反攻 Boss ${first.amount}`);
    if(['SR','SAR'].includes(rarity))assert.deepEqual(lines.slice(1),['下次攻擊：受傷 +50%','同回合：反攻 +30%']);
  }
});
test('Crossed laser eyes move, keep visible beam origins and a locked target, and fire sooner',()=>{
  const original=createRound('laser'),upgraded=createRound('laser-up');const start=Array.from({length:6},(_,i)=>laserEyePosition(upgraded,i));roundTick(upgraded,650);
  for(let i=0;i<6;i++){const point=laserEyePosition(upgraded,i);assert.ok(Math.hypot(point.x-start[i].x,point.y-start[i].y)>10);assert.ok(point.x>=33&&point.x<=247&&point.y>=185&&point.y<=445);}
  const target={...upgraded.beams[0].target},origin={...upgraded.beams[0].origin};roundTick(upgraded,300,new Set(['left']));assert.deepEqual(upgraded.beams[0].target,target);assert.notDeepEqual(upgraded.beams[0].origin,origin);
  assert.ok(laserRules(upgraded).cycle<laserRules(original).cycle);assert.ok(laserRules(upgraded).track+laserRules(upgraded).warning<1500);
  let firstFire=null,secondFire=null;const testRound=createRound('laser-up');
  for(let time=0;time<13500;time+=16){updateRound(testRound,16);assert.ok(testRound.beams.filter(b=>b.firing).length<=1);
    for(const b of testRound.beams)assert.deepEqual(b.origin,laserEyePosition(testRound,b.index));
    if(testRound.beams[0].firing&&firstFire===null)firstFire=testRound.clock;
    if(testRound.beams[1].firing&&secondFire===null)secondFire=testRound.clock;
  }
  assert.ok(firstFire>=1100&&firstFire<1150);assert.ok(secondFire>=1600&&secondFire<1650);
});

test('Final Bridge persists without passive damage or reward detours, and real clears can exceed the old cap',()=>{
  for(const difficulty of ['normal','hard']){
    const s=createEnvy({scenario:'final-bridge',difficulty,random:seeded(5)});
    const initial=s.bossHp;s.bridge.active=null;tick(s,30000);
    assert.equal(s.mode,'bridge');assert.equal(s.bossHp,initial);assert.equal(s.round.done,false);assert.equal(s.scene,null);
    finishEnvy(s);assert.equal(s.over,false);
    let clears=0;
    while(!s.scene&&clears<12){
      const g=s.bridge;
      for(let x=0;x<10;x++)g.grid[19][x]={type:'O',g:x+1,bomb:false,reward:x===0?'pinball':null,curse:null};
      g.phase='resolving';g.combo=0;g.active=null;g.comboArmed=true;
      tick(s,1000);clears++;
      assert.equal(s.mode,'bridge');assert.equal(g.pendingReward,null);
    }
    assert.ok(clears>5);assert.equal(s.bossHp,0);assert.equal(s.scene.kind,'dragon-defeat');assert.equal(s.bossDefeated,true);assert.equal(s.won,false);
    tick(s,700);continueScene(s);assert.equal(s.scene.kind,'worm-reveal');tick(s,2300);assert.equal(s.mode,'capture');assert.equal(s.scene,null);
  }
});
test('The cat gift keeps Normal and Hard healing, appears once, and remains timed independently of round transitions',()=>{
  for(const difficulty of ['normal','hard']){
    const s=createEnvy({scenario:'first-bridge',difficulty});s.hp=50;s.bridge.active=null;
    tick(s,14000);assert.equal(s.hp,difficulty==='normal'?62:56);assert.equal(s.catTime,2400);assert.equal(s.notice,'貓送來魚乾');
    tick(s,2400);assert.equal(s.catTime,0);assert.equal(s.hp,difficulty==='normal'?62:56);
  }
});
