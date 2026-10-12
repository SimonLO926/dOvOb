import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
import {encounterPage,storageBootstrap,buildEncounterHTML} from './encounter.mjs';
import {LANGS,rows,bossName,bossLore,bossIntro} from './i18n.mjs';
const opts={base:'http://localhost/bridge/',settings:{lang:'ja',theme:'dark',crazyDifficulty:'hard'},local:{'bridge-crazy-cleared-pride':'1','bridge-board':'original'},session:{session:'old'}};
test('child storage inherits preferences and real clears but cannot write or clear the real stores',()=>{
 const realLocal={...opts.local},realSession={...opts.session},window={localStorage:realLocal,sessionStorage:realSession};vm.runInNewContext(storageBootstrap(opts),{window});
 assert.equal(window.localStorage.getItem('bridge-crazy-cleared-pride'),'1');assert.equal(window.sessionStorage.getItem('bridge-filming-unlock'),'1');assert.equal(JSON.parse(window.localStorage.getItem('bridge-settings')).lang,'ja');
 window.localStorage.setItem('bridge-crazy-cleared-lust','1');window.localStorage.setItem('bridge-board','fake');window.sessionStorage.removeItem('session');assert.deepEqual(realLocal,opts.local);assert.deepEqual(realSession,opts.session);
 window.localStorage.clear();assert.equal(window.localStorage.length,0);assert.deepEqual(realLocal,opts.local);
});
test('each actual Boss entry is isolated and only starts on the parent start signal, not during the portal',()=>{
 for(const id of ['greed','pride','envy','lust']){const html=readFileSync(new URL('../'+encounterPage(id),import.meta.url),'utf8');const result=buildEncounterHTML(html,{...opts,id});assert.ok(result.includes('window.__cartridgeReadOnly'));assert.ok(result.indexOf('Object.defineProperty')<result.indexOf('type="module"'));assert.ok(result.includes("e.source===parent")||result.includes('e.source!==parent'));assert.ok(result.includes('cartridge-start'));assert.ok(!result.includes("addEventListener('load',()=>{const config="));}
 assert.equal(encounterPage('sealed-5'),null);assert.throws(()=>buildEncounterHTML('<head></head>',{...opts,id:'sealed-5'}),RangeError);
});
test('storage strings cannot close the bootstrap script',()=>{
 const html=buildEncounterHTML('<html><head></head><body></body></html>',{...opts,id:'lust',local:{payload:'</script><script>malicious()</script>'}});
 assert.ok(!html.includes('<script>malicious()'));assert.ok(html.includes('\\u003c/script>'));
});
test('all seven selector languages have complete strings, names, symbols and faithful old lore',()=>{
 assert.equal(LANGS.length,7);for(const row of Object.values(rows)){assert.equal(row.length,7);assert.ok(row.every(v=>typeof v==='string'&&v.length));}
 for(const l of LANGS){for(let i=0;i<7;i++)assert.ok(bossName(l,i));for(const id of ['greed','pride','envy','lust']){assert.ok(bossLore(l,id));assert.ok(bossIntro(l,id));}}
 assert.equal(bossLore('zh-Hant','pride'),'鏡宮之王俯視一切。挑戰他的傲慢王權。');assert.equal(bossLore('en','envy'),'A child in the dark woods watches happiness that belongs to others.');assert.notEqual(bossName('ja',0),bossName('en',0));
});
