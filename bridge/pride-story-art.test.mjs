import test from 'node:test';
import assert from 'node:assert/strict';
import { drawPrideCinematic, prideImages } from './pride-art.mjs';

test('Existing defeat art, summit falling art and final ruins art are three distinct story images',()=>{
 const original={...prideImages};
 for(const key of ['mirrorDefeated','towerCollapse','towerRuins'])prideImages[key]={naturalWidth:1672,naturalHeight:941,key};
 try{
  for(const [kind,key] of [['mirror-defeat','mirrorDefeated'],['tower-collapse','towerCollapse'],['victory','towerRuins']]){
   const images=[],texts=[];
   const c=new Proxy({canvas:{width:360,height:780},drawImage:image=>images.push(image),fillText:text=>texts.push(String(text)),createLinearGradient:()=>({addColorStop(){}})}, {get:(o,k)=>o[k]??(()=>{}),set:(o,k,v)=>(o[k]=v,true)});
   drawPrideCinematic(c,{cutscene:{kind,time:1000}},v=>v,true);
   assert.ok(images.includes(prideImages[key]));assert.equal(images.filter(i=>i.key).length,1);
   if(kind==='tower-collapse'){assert.deepEqual(texts.filter(Boolean),['塔頂崩塌，墜落！']);assert.ok([...texts[0]].length<=10);}
   if(kind==='victory')assert.ok(texts.some(t=>t.includes('成功逃離')));
  }
 }finally{for(const key of Object.keys(prideImages))delete prideImages[key];Object.assign(prideImages,original);}
});
