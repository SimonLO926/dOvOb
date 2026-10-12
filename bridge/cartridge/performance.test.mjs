import test from 'node:test';
import assert from 'node:assert/strict';
import {createRenderBudget} from './performance.mjs';
test('large and high DPI monitors cannot multiply selector fill rate without bound',()=>{
 const b=createRenderBudget();
 for(const [w,h,dpr]of [[5120,2880,3],[1280,900,2],[390,844,3]]) {
  const ratio=b.ratio(w,h,dpr);assert.ok(w*h*ratio*ratio<=600001);assert.ok(ratio<=1.5);
 }
 b.set('light');assert.ok(5120*2880*b.ratio(5120,2880,3)**2<=240001);
});
test('auto protects constrained machines and sustained slow renders while allowing a manual choice',()=>{
 const low=createRenderBudget({memory:4,cores:8});assert.equal(low.quality,'light');
 const b=createRenderBudget();b.observe(1000);assert.equal(b.quality,'standard');
 for(let i=0;i<24;i++)b.observe(i%2?30:10);assert.equal(b.quality,'light');
 b.set('standard');for(let i=0;i<24;i++)b.observe(100);assert.equal(b.quality,'standard');
 b.set('auto');assert.equal(b.quality,'standard');
 assert.ok(b.interval({active:false})>b.interval({active:true}));
});
