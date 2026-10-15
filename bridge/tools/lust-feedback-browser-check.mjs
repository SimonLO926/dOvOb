// Explicit end-state fixtures exercise real engine conclusions and pointer input.
// This is not a natural complete boss clear; input-only charm routes live in Node tests.
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true});
const base=process.env.AUDIT_BASE||'http://127.0.0.1:8767';
const out=path.resolve(process.argv[2]||'../lust-feedback-audit');await fs.mkdir(out,{recursive:true});
const report={cases:[],errors:[],fixture:'Near-final good/bad/lost state via real engine; not a natural full boss clear.'};
try{
 for(const [width,height]of [[390,844],[844,390],[1024,768],[1280,900]])for(const campaign of [true,false]){
 const context=await browser.newContext({viewport:{width,height},hasTouch:width<1100});
 await context.addInitScript(()=>{localStorage.setItem('bridge-crazy-cleared-envy','1');localStorage.setItem('bridge-settings',JSON.stringify({lang:'zh-Hant',touch:'auto'}));});
 const page=await context.newPage();page.on('pageerror',e=>report.errors.push(e.message));page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('favicon.ico'))report.errors.push(`${r.status()} ${r.url()}`);});
 for(const ending of ['good','bad','lost']){
 await page.goto(base+'/bridge/'+(campaign?'lust.html':'lust-preview.html'));
 if(!campaign){await page.locator('#start').click();}
 await page.waitForFunction(campaign=>!!window[campaign?'lustGame':'lustPreview'],campaign);
 await page.evaluate(async({campaign,ending})=>{
 const E=await import('./lust/engine.mjs?v=1.2.39'),s=window[campaign?'lustGame':'lustPreview'];s.scene=null;s.over=false;s.hp=100;
 if(ending==='lost'){E.startRound(s,'bomb');s.hp=1;s.round.spawn=99999;s.round.objects=[{type:'blast',x:140,y:442,age:1050,r:30}];E.update(s,20);}
 else{s.form=2;s.bossHp=1;s.firstTrial=true;s.datingDone=true;s.bad=ending==='bad';s.played={1:[...E.GAMES1],2:[...E.GAMES2]};E.hitBoss(s,1);s.scene.time=500;E.continueScene(s);}
 },{campaign,ending});
 await page.waitForFunction(()=>!document.getElementById('scene-pick').hidden);
 const box=await page.locator('#scene-pick').boundingBox();assert.ok(box.x>=0&&box.y>=0&&box.x+box.width<=width+1&&box.y+box.height<=height+1);
 await page.screenshot({path:path.join(out,`${width}x${height}-${campaign?'formal':'preview'}-${ending}.png`)});
 await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.mouse.down();await page.waitForTimeout(250);await page.mouse.up();
 if(campaign)await page.waitForURL('**/cartridge.html?sin=lust');else await page.waitForFunction(()=>!document.getElementById('launcher').hidden);
 if(!campaign)assert.equal(await page.evaluate(()=>localStorage.getItem('bridge-crazy-cleared-lust')),null);
 report.cases.push({width,height,campaign,ending,returned:true});
 }
 await context.close();
 }
 assert.deepEqual(report.errors,[]);report.ok=true;
}finally{await fs.writeFile(path.join(out,'report.json'),JSON.stringify(report,null,2));await browser.close();}
console.log(JSON.stringify({ok:report.ok,cases:report.cases.length,errors:report.errors}));
