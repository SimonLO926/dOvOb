// Explicit near-goal fixtures verify the real gates/physics/recording, not a natural full clear.
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const out=path.resolve(process.argv[2]||'../campaign-audit');await fs.mkdir(out,{recursive:true});
const base=process.env.AUDIT_BASE||'http://127.0.0.1:8765';
const report={viewports:[],errors:[],fixtures:'Existing Lust clear, near-execution merge, near-final damage; not a natural full boss clear.'};
try {
 for(const [width,height] of [[390,844],[844,390],[1024,768],[1280,900]]){
  const context=await browser.newContext({viewport:{width,height},hasTouch:width<1100});
  await context.addInitScript(()=>{
   localStorage.setItem('bridge-crazy-cleared-lust','1');localStorage.setItem('bridge-settings',JSON.stringify({lang:'zh-Hant',touch:'auto',bgmVolume:.7,sfxVolume:.7}));
   const NativeAudio=window.Audio;window.auditPlayers=[];window.Audio=class extends NativeAudio {constructor(...args){super(...args);window.auditPlayers.push(this);}};
  });
  const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/favicon.ico'))report.errors.push(r.status()+' '+r.url());});
  await page.goto(base+'/bridge/cartridge.html?sin=gluttony');await page.waitForFunction(()=>window.cartridgeDemo?.state.index===4&&!document.getElementById('loading').hidden===false);
  assert.equal(await page.evaluate(()=>window.cartridgeDemo.state.available[4]),true);
  await page.screenshot({path:path.join(out,`${width}x${height}-cartridge.png`)});
  await page.locator('#insert').click();await page.waitForURL('**/gluttony.html?difficulty=*');
  await page.waitForFunction(()=>window.gluttonyGame?.scene?.time>=450);
  assert.equal(await page.evaluate(()=>window.gluttonyGame.preview),false);
  assert.equal(await page.evaluate(()=>window.gluttonyGame.scenario.id),'full');
  await page.locator('#scene-continue').click();await page.waitForTimeout(1000);
  assert.ok(await page.evaluate(()=>window.auditPlayers.some(a=>!a.paused&&a.volume>0&&a.currentTime>0)),'BGM playing after gesture');
  const row={width,height,music:[]};
  // Exercise all seven actual tracks, with real loaded audio playback.
  for(const [stage,mode,execution,key] of [[1,'bridge',false,'first_bridge'],[1,'snake',false,'first_special'],[1,'merge',true,'first_last'],[2,'bridge',false,'second_bridge'],[2,'snake',false,'second_special'],[2,'execution',false,'second_last'],[3,'burst',false,'third_last']]){
   await page.evaluate(async({stage,mode,execution})=>{const E=await import('./gluttony/engine.mjs');const s=window.gluttonyGame;s.scene=null;s.stage=stage;s.bossHp=s.bossMaxHp=1000;s.watermelonDone=false;s.executionDone=false;E.startRound(s,mode,execution);},{stage,mode,execution});
   await page.waitForTimeout(750);
   const audio=await page.evaluate(key=>{const p=window.auditPlayers.find(a=>!a.paused&&a.volume>0&&a.src.includes(key));return p&&{src:p.src,seconds:p.currentTime,volume:p.volume};},key);
   assert.ok(audio?.seconds>0,'actual playback '+key);row.music.push(audio);
  }
  await page.locator('#menu-button').click();assert.ok(await page.evaluate(()=>window.auditPlayers.every(a=>a.paused)));
  await page.locator('#music-volume').fill('0');await page.locator('#resume').click();await page.waitForTimeout(200);assert.ok(await page.evaluate(()=>window.auditPlayers.every(a=>a.volume===0)));
  await page.locator('#menu-button').click();await page.locator('#music-volume').fill('70');await page.locator('#resume').click();
  await page.evaluate(async()=>{const E=await import('./gluttony/engine.mjs');const s=window.gluttonyGame;s.scene=null;s.stage=1;s.bossMaxHp=s.bossHp=560;s.watermelonDone=false;s.executionDone=false;s.hp=100;s.played=[...E.FIRST_GAMES];E.startRound(s,'bridge');E.hitBoss(s,9999);if(s.scene?.kind!=='watermelon-start')throw Error('missing first execution');s.scene.time=500;E.continueScene(s);});
  await page.waitForTimeout(100);await page.screenshot({path:path.join(out,`${width}x${height}-watermelon.png`)});
  await page.evaluate(async()=>{const E=await import('./gluttony/engine.mjs');const s=window.gluttonyGame,m=s.round;m.fruits=[106,174].map(x=>({x,y:425,level:6,age:0,vx:0,vy:0}));E.update(s,20);if(!s.watermelonDone||!m.watermelon||!m.success)throw Error('execution did not unlock');});
  assert.equal(await page.evaluate(()=>localStorage.getItem('bridge-crazy-cleared-gluttony')),null);
  // End-of-run fixture calls real final hit and two story continuations; recorder runs in app render.
  await page.evaluate(async()=>{const E=await import('./gluttony/engine.mjs');const s=window.gluttonyGame;s.scene=null;s.stage=3;s.bossHp=1;s.executionDone=s.escapeDone=true;s.watermelonDone=true;s.hp=91;s.over=false;E.startRound(s,'burst');E.hitBoss(s,1);s.scene.time=500;E.continueScene(s);s.scene.time=500;E.continueScene(s);});
  await page.waitForFunction(()=>localStorage.getItem('bridge-crazy-cleared-gluttony')==='1');
  assert.ok(await page.evaluate(()=>JSON.parse(localStorage.getItem('bridge-best-crazy-gluttony-normal')).length===1));
  await page.locator('#scene-pick').click();await page.waitForURL('**/cartridge.html?sin=gluttony');await page.waitForFunction(()=>window.cartridgeDemo?.state.index===4);
  await page.locator('#ranks-toggle').click();assert.ok((await page.locator('#ranks-content').innerText()).includes('暴食'));row.recording='one formal clear and rank, returns to selected cartridge';
  report.viewports.push(row);await context.close();
 }
 // A direct URL cannot bypass the Lust unlock; scenario parameters never skip the formal flow.
 const locked=await browser.newPage();await locked.goto(base+'/bridge/gluttony.html?scenario=story:victory');await locked.waitForURL('**/cartridge.html?sin=gluttony');await locked.close();
 assert.deepEqual(report.errors,[]);report.ok=true;
} finally {await fs.writeFile(path.join(out,'campaign-audit.json'),JSON.stringify(report,null,2));await browser.close();}
console.log(JSON.stringify({ok:report.ok,viewports:report.viewports.length,tracks:report.viewports[0]?.music.length,errors:report.errors}));
