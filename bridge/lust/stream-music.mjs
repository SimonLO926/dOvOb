// Two persistent HTMLAudio elements preserve mobile gesture permission and
// crossfade without starting eight network streams when an encounter opens.
export function createStreamMusic(getVolume,{resolveUrl,audioFactory=()=>new Audio()}={}) {
 const positions=new Map();let wanted=null,unlocked=false,blocked=false;
 const slots=Array.from({length:2},()=>{const audio=audioFactory();audio.loop=true;audio.preload='none';audio.volume=0;return {audio,key:null,level:0,target:0,generation:0};});
 function play(slot){if(!unlocked)return;const generation=slot.generation;const promise=slot.audio.play();promise?.catch(error=>{if(generation===slot.generation&&error?.name!=='AbortError')blocked=true;});}
 function assign(slot,key,url){
  if(slot.key)positions.set(slot.key,slot.audio.currentTime);
  slot.audio.pause();slot.key=key;slot.generation++;slot.audio.muted=false;
  slot.audio.src=url;slot.audio.preload='auto';slot.level=0;
  const seek=()=>{if(slot.key!==key)return;try{slot.audio.currentTime=positions.get(key)||0;}catch{}};
  if(slot.audio.readyState===0&&slot.audio.addEventListener)slot.audio.addEventListener('loadedmetadata',seek,{once:true});else seek();
 }
 function select(key){
  if(wanted===key)return;
  const url=key?resolveUrl(key):null; // Validate before changing the current stream.
  wanted=key;
  for(const slot of slots)slot.target=0;
  if(!key)return;
  let chosen=slots.find(slot=>slot.key===key);
  if(!chosen){chosen=[...slots].sort((a,b)=>a.level-b.level)[0];assign(chosen,key,url);}
  chosen.target=1;play(chosen);
 }
 function unlock(){
  if(unlocked&&!blocked)return;
  unlocked=true;blocked=false;
  const current=slots.find(slot=>slot.key===wanted);
  if(!current)return;
  for(const slot of slots){
   if(!slot.key){slot.audio.src=resolveUrl(wanted);slot.audio.preload='none';slot.generation++;}
   const generation=slot.generation;slot.audio.muted=true;
   const promise=slot.audio.play();
   promise?.then(()=>{if(generation!==slot.generation)return;slot.audio.muted=false;if(!slot.target)slot.audio.pause();}).catch(error=>{if(generation!==slot.generation)return;slot.audio.muted=false;if(error?.name!=='AbortError')blocked=true;});
  }
 }
 function tick(dt=16){
  const step=Math.max(0,Math.min(100,dt))/420,volume=Math.max(0,Math.min(1,getVolume()));
  for(const slot of slots){slot.level=slot.target>slot.level?Math.min(slot.target,slot.level+step):Math.max(slot.target,slot.level-step);slot.audio.volume=slot.level*volume*.78;if(!slot.target&&!slot.level&&!slot.audio.paused)slot.audio.pause();}
 }
 function pause(){wanted=null;for(const slot of slots){if(slot.key)positions.set(slot.key,slot.audio.currentTime);slot.audio.pause();slot.audio.volume=0;slot.level=0;slot.target=0;}}
 function reset(){pause();positions.clear();for(const slot of slots)slot.audio.currentTime=0;}
 return {select,unlock,tick,pause,reset,get active(){return wanted;},get blocked(){return blocked;}};
}
