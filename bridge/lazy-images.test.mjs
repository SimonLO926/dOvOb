import test from 'node:test';import assert from 'node:assert/strict';import {createLazyImages} from './lazy-images.mjs';
test('unvisited story images cause no requests; first use and explicit load share one image',async()=>{
 const requested=[],made=[];const art=createLazyImages({intro:'intro.webp',ending:'ending.webp'},{imageFactory:()=>{const image={set src(v){requested.push(v);},naturalWidth:0};made.push(image);return image;}});
 assert.deepEqual(requested,[]);const ready=art.load(['intro']);assert.deepEqual(requested,['intro.webp']);assert.equal(art.images.intro,made[0]);const same=art.load(['intro']);made[0].naturalWidth=1280;made[0].onload();assert.deepEqual(await ready,[true]);assert.deepEqual(await same,[true]);assert.equal(art.images.intro.naturalWidth,1280);assert.equal(art.images.unknown,undefined);assert.deepEqual(requested,['intro.webp']);
 assert.equal(art.images.ending,made[1]);assert.deepEqual(requested,['intro.webp','ending.webp']);made[1].onerror();assert.deepEqual(await art.load(['ending']),[false]);assert.equal(made.length,2);
});
test('canvas fixtures may inject images and non-browser rendering never constructs an image',async()=>{
 const art=createLazyImages({ending:'ending.webp'},{imageFactory:()=>null});assert.equal(art.images.ending,undefined);assert.deepEqual(await art.load(['ending']),[false]);const image={naturalWidth:1536};art.images.ending=image;assert.equal(art.images.ending,image);assert.deepEqual(await art.load(['ending']),[true]);
});
