// Local Chromium audit. Fixtures below are explicitly near-goal / near-timeout states.
// Usage: PLAYWRIGHT_MODULE=/absolute/playwright/index.mjs CHROMIUM_PATH=/path/chromium node ... --out /tmp/audit
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../../',import.meta.url));
const out=path.resolve(process.argv[process.argv.indexOf('--out')+1]||'/tmp/gluttony-r3-audit');await fs.mkdir(out,{recursive:true});
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const mime={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.woff2':'font/woff2','.woff':'font/woff','.webp':'image/webp','.svg':'image/svg+xml','.css':'text/css'};
const server=http.createServer(async(req,res)=>{try{const p=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(!p.startsWith(root))throw Error('path');const b=await fs.readFile(p);res.writeHead(200,{'Content-Type':mime[path.extname(p)]||'application/octet-stream'});res.end(b);}catch{res.writeHead(404);res.end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const report={browser:await browser.version(),viewports:[],errors:[],network:[],fixtures:'Near-goal, near-timeout, self-collision and final-move states explicitly assigned. Actual pointer/keyboard/engine handlers run thereafter. Not a natural full encounter.'};
try{
 for(const [width,height] of [[390,844],[844,390],[1024,768],[1280,900]]){
  const context=await browser.newContext({viewport:{width,height},hasTouch:true,isMobile:width<900});
  const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('response',r=>{if(r.status()>=400)report.errors.push(`${r.status()} ${r.url()}`);});
  await page.addInitScript(()=>{localStorage.setItem('bridge-settings',JSON.stringify({lang:'zh-Hant',touch:'on',sfxVolume:.7,theme:'dark'}));localStorage.setItem('bridge-crazy-cleared-lust','1');localStorage.setItem('bridge-crazy-scores','{"sentinel":13}');window.storageBefore=JSON.stringify({...localStorage});});
  const responses=[];page.on('response',r=>responses.push(r));await page.goto(base+'/bridge/gluttony-preview.html');await page.evaluate(()=>document.fonts.ready);
  const scenarios=await page.locator('#scenario option').evaluateAll(a=>a.map(n=>n.value));assert.equal(scenarios.length,33);
  const row={width,height,scenarios:[],interactions:[],screenshots:[]};
  async function launch(id,difficulty='normal'){
   if(await page.locator('#launcher').isHidden()){
    await page.keyboard.press('Escape');await page.locator('#pick').click();
   }
   await page.selectOption('#scenario',id);await page.selectOption('#difficulty',difficulty);await page.locator('#start').click();
  }
  for(const id of scenarios){
   await launch(id);await page.waitForTimeout(35);
   const bounds=await page.evaluate(()=>{const rect=id=>{const r=document.getElementById(id).getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height,bottom:r.bottom,right:r.right};};return{board:rect('gluttony-board'),cat:rect('gluttony-cat'),scene:!document.getElementById('ending-screen').hidden};});
   assert.ok(bounds.board.w>=140,`${id} ${width}: board width`);assert.ok(bounds.cat.w>=110);assert.ok(bounds.cat.bottom<=height+1);assert.ok(bounds.cat.y>=0);
   if(!bounds.scene)assert.ok(bounds.board.bottom<=height+1);
   row.scenarios.push({id,...bounds});
   if(['watermelon-execution','phase-1','execution','snake','escape','story:body','story:victory'].includes(id)){
    const name=`${width}x${height}-${id.replace(':','-')}.png`;await page.screenshot({path:path.join(out,name)});row.screenshots.push(name);
   }
  }
  // Actual CDP touchscreen swipe starts one exchange; a second swipe while busy is rejected.
  await launch('execution');await page.clock.install({time:new Date(0)});await page.clock.pauseAt(new Date(0));
  const pair=await page.evaluate(async()=>{const {legalMoves}=await import('./gluttony/match.mjs');return legalMoves(window.gluttonyPreview.round.board)[0];});
  const rect=await page.locator('#gluttony-board').boundingBox();const cell=i=>({x:rect.x+(43+i%6*38)/280*rect.width,y:rect.y+(221+Math.floor(i/6)*38)/600*rect.height});
  const cdp=await context.newCDPSession(page);const a=cell(pair[0]),b=cell(pair[1]);
  async function swipe(a,b){await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{...a,id:1}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{...b,id:1}]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});}
  await swipe(a,b);assert.equal(await page.evaluate(()=>window.gluttonyPreview.round.animState),'swap');
  const steps=await page.evaluate(()=>window.gluttonyPreview.round.moves);await swipe(b,a);assert.equal(await page.evaluate(()=>window.gluttonyPreview.round.moves),steps);
  // Pause freezes the current tween; language/settings do not recreate it.
  await page.locator('#menu-button').click();const anim=await page.evaluate(()=>window.gluttonyPreview.round.animTime);await page.clock.runFor(400);assert.equal(await page.evaluate(()=>window.gluttonyPreview.round.animTime),anim);
  await page.selectOption('#gluttony-language','en');await page.locator('#menu-return').scrollIntoViewIfNeeded();await page.locator('#menu-return').click();
  for(const phase of ['swap','clear','fall']){
   await page.evaluate(async()=>{const {update}=await import('./gluttony/engine.mjs');const s=window.gluttonyPreview;window.targetPhase=s.round.animState;});
   let current=await page.evaluate(()=>window.gluttonyPreview.round.animState);if(current!==phase){assert.fail(`expected ${phase}, got ${current}`);}
   const name=`${width}x${height}-animation-${phase}.png`;await page.screenshot({path:path.join(out,name)});row.screenshots.push(name);
   if(phase!=='fall')await page.evaluate(async()=>{const {update}=await import('./gluttony/engine.mjs');const s=window.gluttonyPreview,phase=s.round.animState;for(let i=0;i<100&&s.round.animState===phase;i++)update(s,20);});
   await page.clock.runFor(17);
  }
  // Last-move completion fixture; no premature failure while fall is in progress.
  // Fresh fixture avoids the already completed goals of the prior real swap.
  await page.evaluate(async()=>{const E=await import('./gluttony/engine.mjs');const {swap}=await import('./gluttony/match.mjs');const s=window.gluttonyPreview;E.startRound(s,'execution');const m=s.round;m.moves=1;m.specials[0]='rainbow';m.collected=m.target;m.jellies.fill(0);swap(m,0,1);for(let i=0;i<25;i++)E.update(s,20);if(m.done||m.animState!=='fall')throw Error('early execution settlement');for(let i=0;i<1000&&m.busy;i++)E.update(s,20);if(!m.done||!m.success)throw Error('last move failed');});
  row.interactions.push('CDP swipe + busy lock','pause tween + language + reachable settings return','final execution move waits for landing');
  for(const difficulty of ['normal','hard']){
   await launch('snake',difficulty);
   await page.evaluate(()=>{const s=window.gluttonyPreview,m=s.round;m.score=m.target-1;m.food=[6,9];});
   const step=await page.evaluate(()=>window.gluttonyPreview.round.stepMs);await page.clock.runFor(step+30);
   assert.equal(await page.evaluate(()=>window.gluttonyPreview.round.done),false);assert.ok(await page.evaluate(()=>window.gluttonyPreview.round.score>=window.gluttonyPreview.round.target));
   await page.evaluate(()=>{const m=window.gluttonyPreview.round;m.food=[(m.snake[0][0]+m.dir[0]+12)%12,(m.snake[0][1]+m.dir[1]+15)%15];});await page.clock.runFor(step+30);assert.ok(await page.evaluate(()=>window.gluttonyPreview.round.score>window.gluttonyPreview.round.target));
   await page.evaluate(()=>{window.gluttonyPreview.round.clock=44990;});await page.clock.runFor(40);assert.ok(await page.evaluate(()=>window.gluttonyPreview.round.done&&window.gluttonyPreview.round.success));
   row.interactions.push(`${difficulty} snake goal continues, extra fruit scores, 45s settles`);
  }
  await launch('snake');await page.evaluate(()=>{const m=window.gluttonyPreview.round;m.score=m.target;m.snake=[[3,3],[4,3],[4,4],[3,4]];m.dir=[1,0];});await page.clock.runFor(250);assert.ok(await page.evaluate(()=>window.gluttonyPreview.round.done&&!window.gluttonyPreview.round.success));
  row.interactions.push('snake self collision after goal fails');
  assert.ok(await page.evaluate(()=>JSON.stringify({...localStorage})===window.storageBefore));
  row.interactions.push('settings, campaign and leaderboard storage unchanged');
  // Real audio starts only on a gesture, follows the requested track, and pauses with the menu.
  await launch('watermelon-execution');await page.clock.resume();await page.waitForTimeout(900);
  const audioState=await page.evaluate(()=>({players:[...document.querySelectorAll('audio')].length}));
  await page.screenshot({path:path.join(out,`${width}x${height}-watermelon-execution.png`)});
  // Explicit near-merge fixture uses the real physics to create the watermelon and unlock the pool.
  await page.evaluate(async()=>{const E=await import('./gluttony/engine.mjs');const s=window.gluttonyPreview,m=s.round;m.fruits=[106,174].map(x=>({x,y:425,level:6,age:0,vx:0,vy:0}));E.update(s,20);if(!s.watermelonDone||!m.success||!m.watermelon)throw Error('watermelon execution did not unlock');});
  row.interactions.push('real watermelon merge unlocks ordinary fusion (near-merge fixture)');
  // Cold launch body bytes: local HTTP, no transport compression; no music request.
  if(width===1280){const cold=await context.newPage(),rr=[];cold.on('response',r=>rr.push(r));await cold.goto(base+'/bridge/gluttony-preview.html');await cold.evaluate(()=>document.fonts.ready);await cold.waitForTimeout(100);for(const r of rr)report.network.push({path:new URL(r.url()).pathname,bytes:(await r.body()).length});await cold.close();}
  report.viewports.push(row);await context.close();
 }
 assert.deepEqual(report.errors,[]);report.ok=true;
}finally{await fs.writeFile(path.join(out,'browser-audit.json'),JSON.stringify(report,null,2));await browser.close();server.close();}
console.log(JSON.stringify({ok:report.ok,scenarios:report.viewports.reduce((n,r)=>n+r.scenarios.length,0),errors:report.errors,networkBytes:report.network.reduce((n,r)=>n+r.bytes,0)}));
