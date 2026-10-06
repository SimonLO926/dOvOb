import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { PRIDE_SECOND_ATTACKS, MIRROR_GAME_IDS, UPGRADED_BASES, breakPrideMirror } from './pride-second.mjs';
import { createSecondDemo, inputSecondDemo, updateSecondDemo, secondDemoModule } from './pride-second-demo.mjs';
test('Every second-form attack is selectable and runs the shared encounter or its original upgraded attack', () => {
  const html = readFileSync(new URL('./pride-attacks.html', import.meta.url), 'utf8');
  for (const mode of PRIDE_SECOND_ATTACKS) {
    assert.ok(html.includes(`value="${mode}"`));
    const s = createSecondDemo(mode, { random: () => .4 });
    updateSecondDemo(s, 50); inputSecondDemo(s, 'action');
    if(UPGRADED_BASES[mode]){
      assert.equal(s.mini.mode,UPGRADED_BASES[mode]);assert.equal(s.mini.upgraded,true);
      if(mode==='pride-reflect-up')assert.ok(s.mini.bullets.length);
      else assert.ok(s.mini.hazards.length);
      if(mode==='pride-crown-up')assert.ok(s.mini.jump>0);
    }else{if(mode==='pride-shard-storm')assert.ok(s.mini.notes.length>0);else assert.ok(['search','plan','recover'].includes(s.mini.phase));assert.equal(s.mini.shots,undefined);}
    assert.equal(s.mini.clock,50);assert.equal(s.timeLeft,13950);
  }
});
test('Tower has its story-only selector group and Doodle is available for ordinary play',()=>{
 const html=readFileSync(new URL('./pride-minigames.html',import.meta.url),'utf8');
 for(const mode of MIRROR_GAME_IDS)assert.ok(html.includes(`value="${mode}"`));
 assert.ok(html.includes('<optgroup label="50% 血劇情專用"><option value="pride-tower">'));assert.ok(html.includes('value="pride-doodle"'));
});
test('Boss defeat and all mirror breaks never truncate any demo round',()=>{
 for(const mode of [...MIRROR_GAME_IDS,...PRIDE_SECOND_ATTACKS]){
  const s=createSecondDemo(mode,{random:()=>.4});s.bossHp=0;
  for(let i=0;i<3;i++)breakPrideMirror(s,i,{story:true});
  updateSecondDemo(s,0);assert.equal(s.over,false);assert.equal(s.timeLeft,s.mini.duration);assert.equal(s.mirrorWorld.bonuses,3);
 }
});
test('Each mirror game ends on its own objective or timer, then rejects further input',()=>{
 for(const mode of MIRROR_GAME_IDS){
  const module=secondDemoModule(mode),s=module.init({bossHpRatio:.6});assert.equal(s.bossHp,60);
  s.timeLeft=1;module.update(s,50);assert.ok(s.result.includes('時間到'));assert.equal(s.over,true);
  const snap=JSON.stringify(s);module.input(s,'action');module.point(s,140,300);module.update(s,50);assert.equal(JSON.stringify(s),snap);
  module.dispose(s);assert.equal(s.held.size,0);
 }
});
