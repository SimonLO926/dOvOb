// Shared runtime images are requested when their scene first reads them.
// Cached objects remain stable for canvas users and keep all source pixels.
export function createLazyImages(urls,{imageFactory=()=>typeof Image==='undefined'?null:new Image()}={}) {
 const cache={},pending=new Map();
 function request(key){
  if(!Object.hasOwn(urls,key)||Object.hasOwn(cache,key))return cache[key];
  const image=imageFactory();if(!image)return undefined;
  cache[key]=image;
  const ready=new Promise(resolve=>{image.onload=()=>resolve(true);image.onerror=()=>resolve(false);});
  pending.set(key,ready);image.src=urls[key];return image;
 }
 const images=new Proxy(cache,{get(target,key){return Object.hasOwn(target,key)?target[key]:request(key);}});
 function load(keys){return Promise.all(keys.map(key=>{request(key);return pending.get(key)||Promise.resolve(!!cache[key]);}));}
 return {images,load};
}
