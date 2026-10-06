import test from 'node:test';
import assert from 'node:assert/strict';
import { PRIDE_TEXT_BANDS, prideArenaY, prideWorldY } from './pride-layout.mjs';
import { PRIDE_MINIGAMES } from './minigames/index.mjs';
import { PRIDE_ATTACKS, createPrideAttack, drawPrideAttack, pridePoint } from './pride-attacks.mjs';
import { createMirrorDuel, drawMirrorDuel, mirrorDuelPoint } from './pride-finisher.mjs';
import { PRIDE_SECOND_MODES } from './pride-second.mjs';
import { createSecondDemo, drawSecondDemo } from './pride-second-demo.mjs';
import { createCrazy, skipCrazyCinematic, advanceCrazy } from './crazy.mjs';
import { drawCrazy } from './crazy-view.mjs';

// Track the real drawing transforms and saved styles, including the encounter host.
function canvas() {
  let matrix=[1,0,0,1,0,0];const stack=[],texts=[];
  const multiply=n=>{const [a,b,c,d,e,f]=matrix,[g,h,i,j,k,l]=n;matrix=[a*g+c*h,b*g+d*h,a*i+c*j,b*i+d*j,a*k+c*l+e,b*k+d*l+f];};
  const target={font:'12px sans-serif',textBaseline:'middle',textAlign:'center',
    save(){stack.push({matrix:[...matrix],font:this.font,textBaseline:this.textBaseline,textAlign:this.textAlign});},
    restore(){const saved=stack.pop();assert.ok(saved,'Canvas restore must match save');matrix=saved.matrix;Object.assign(this,{font:saved.font,textBaseline:saved.textBaseline,textAlign:saved.textAlign});},
    transform(...m){multiply(m);},translate(x,y){multiply([1,0,0,1,x,y]);},scale(x,y){multiply([x,0,0,y,0,0]);},rotate(a){multiply([Math.cos(a),Math.sin(a),-Math.sin(a),Math.cos(a),0,0]);},
    fillText(text,x,y,maxWidth=Infinity){
      if(!text)return;const size=Number(this.font.match(/([\d.]+)px/)?.[1]||12);
      const width=Math.min(maxWidth,[...String(text)].reduce((sum,ch)=>sum+size*(ch.charCodeAt(0)>255?1:.6),0));
      const left=x-(this.textAlign==='center'?width/2:this.textAlign==='right'?width:0);
      const top=y-size*(this.textBaseline==='middle'?.5:.8),bottom=top+size;
      const corners=[[left,top],[left+width,top],[left,bottom],[left+width,bottom]].map(([x,y])=>[matrix[0]*x+matrix[2]*y+matrix[4],matrix[1]*x+matrix[3]*y+matrix[5]]);
      texts.push({text:String(text),y:matrix[1]*x+matrix[3]*y+matrix[5],left:Math.min(...corners.map(p=>p[0])),right:Math.max(...corners.map(p=>p[0])),top:Math.min(...corners.map(p=>p[1])),bottom:Math.max(...corners.map(p=>p[1]))});
    },createLinearGradient(){return {addColorStop(){}};},createRadialGradient(){return {addColorStop(){}};}};
  const c=new Proxy(target,{get:(o,k)=>o[k]??(()=>{})});return {c,texts,stack};
}
function check(draw,label,{hint=true}={}) {
  const {c,texts,stack}=canvas();draw(c);assert.equal(stack.length,0,label+' canvas state');
  const band=name=>texts.filter(v=>v.y>=PRIDE_TEXT_BANDS[name][0]&&v.y<=PRIDE_TEXT_BANDS[name][1]);
  assert.equal(band('title').length,1,label+' title');assert.ok(band('status').length>=1,label+' status');
  assert.equal(band('hint').length,hint?1:0,label+' timed hint');assert.ok(band('controls').length>=1,label+' controls');
  assert.ok(band('feedback').length<=1,label+' single feedback row');
  for(const text of texts)assert.ok(Object.values(PRIDE_TEXT_BANDS).some(([a,b])=>text.y>=a&&text.y<=b),`${label}: ${text.text} at ${text.y} outside its bands`);
  for(let i=0;i<texts.length;i++)for(let j=i+1;j<texts.length;j++){
    const a=texts[i],b=texts[j],overlap=Math.min(a.right,b.right)-Math.max(a.left,b.left)>1&&Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top)>1;
    assert.equal(overlap,false,`${label}: overlapping ${a.text} / ${b.text}`);
  }
}
test('All 19 specified screens use bounded, non-overlapping text in both difficulties and motion settings',()=>{
  for(const difficulty of ['normal','hard'])for(const reduced of [false,true])for(const clock of [0,3000]){
    const hint=clock<3000;
    for(const game of Object.values(PRIDE_MINIGAMES)){
      const s=game.init({difficulty,bossHpRatio:.2,random:()=>.4});s.elapsed=clock;s.feedback='完美！';
      check(c=>game.render(c,s),`${game.id}/${difficulty}/${clock}`,{hint});
    }
    for(const mode of PRIDE_ATTACKS){const m=createPrideAttack(mode,{difficulty});m.clock=clock;m.feedback={text:'好！',at:clock};
      check(c=>drawPrideAttack(c,m,reduced),`${mode}/${difficulty}/${clock}`,{hint});}
    const duel=createMirrorDuel({difficulty});duel.elapsed=clock;
    check(c=>drawMirrorDuel(c,duel),`duel/${clock}`,{hint});
    for(const mode of PRIDE_SECOND_MODES){const s=createSecondDemo(mode,{difficulty,random:()=>.4});s.mini.clock=clock;s.mini.elapsed=clock;
      if(s.mini.counter){s.mini.counter.mirror={x:55,y:230,name:'攻之鏡',color:'#ff5369',until:clock+4000};s.mini.counter.feedback={text:'光束傷害減半',at:clock};}
      else s.mini.feedback='差 · 小心對準！';
      check(c=>drawSecondDemo(c,s),`${mode}/${difficulty}/${clock}`,{hint});}
  }
});
test('Production encounter renders Pride screens at the same coordinates with one HUD and correct health status',()=>{
  for(const mode of [...Object.keys(PRIDE_MINIGAMES),...PRIDE_ATTACKS,'pride-mirror-duel',...PRIDE_SECOND_MODES]){
    const s=createCrazy({sin:'pride',random:()=>.4});s.cutscene.time=1000;skipCrazyCinematic(s);
    if(PRIDE_SECOND_MODES.includes(mode)){s.form=2;s.cutscene={kind:'transform',time:1000};skipCrazyCinematic(s);}
    advanceCrazy(s,mode);s.transition=null;s.cat=null;
    if(mode==='pride-mirror-duel')s.mini=createMirrorDuel();
    check(c=>drawCrazy(c,s,k=>k),`encounter/${mode}`);
    const {c,texts}=canvas();drawCrazy(c,s,k=>k);
    assert.ok(texts.some(v=>v.text.includes(`HP ${s.hp}`)&&v.y>=114&&v.y<=139),mode+' player health');
    assert.ok(!texts.some(v=>v.text.includes('Boss ')),mode+' hidden Boss HP');
  }
});
test('Arena pointer mapping is the inverse of its render transform, preserving world movement bounds',()=>{
  for(const y of [205,245,430,470,484]){
    assert.ok(Math.abs(prideWorldY(prideArenaY(y))-y)<1e-10);
    const s={mini:createPrideAttack('pride-gaze')};pridePoint(s,90,prideArenaY(y));
    assert.ok(Math.abs(s.mini.target.y-y)<1e-10);
  }
  const m=createMirrorDuel();mirrorDuelPoint(m,80,prideArenaY(470));assert.equal(m.target.x,200);assert.equal(m.target.y,470);
});
test('Broken cores and challenge counter/result phases keep status and feedback separated',()=>{
  for(const clock of [0,3000]){
    const core=createSecondDemo('pride-red-survival');core.mini.clock=clock;
    core.mirrorWorld.mirrors.forEach(v=>{v.hp=0;v.broken=true;});
    check(c=>drawSecondDemo(c,core),'broken cores',{hint:clock<3000});
    for(const mode of ['pride-kaleidoscope','pride-shard-storm','pride-nested'])for(const phase of ['counter','recover','parry']){
      const s=createSecondDemo(mode);s.mini.clock=clock;s.mini.phase=phase;s.mini.phaseUntil=clock+1000;
      s.mini.feedback='完美 · 反攻成功';s.mirrorWorld.feedback=[{text:'−18',life:700,x:140,y:245}];
      check(c=>drawSecondDemo(c,s),`${mode}/${phase}`,{hint:clock<3000});
    }
  }
});

test('Demo completion and timeout results replace the feedback row without adding another overlay',()=>{
  for(const mode of PRIDE_SECOND_MODES)for(const result of ['完成','時間到 · 再試一次','失敗']){
    const s=createSecondDemo(mode);s.over=true;s.result=result;s.mini.feedback='舊回饋';
    const {c,texts}=canvas();drawSecondDemo(c,s);
    const feedback=texts.filter(v=>v.y>=475&&v.y<=495);
    assert.equal(feedback.length,1,mode);assert.equal(feedback[0].text,result);
  }
});
