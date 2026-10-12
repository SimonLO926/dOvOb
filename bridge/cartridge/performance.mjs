// Bound fill rate and animation work independently of display resolution.
export function createRenderBudget({memory,cores}={}) {
 const constrained=(Number.isFinite(memory)&&memory<=4)||(Number.isFinite(cores)&&cores<=4);
 let preference='auto',slow=constrained,samples=[];
 return {
  get preference(){return preference;},
  get quality(){return preference==='auto'?(slow?'light':'standard'):preference;},
  set(value){if(!['auto','standard','light'].includes(value))return;preference=value;slow=constrained;samples=[];},
  observe(ms){if(preference!=='auto'||slow||!Number.isFinite(ms))return;samples.push(ms);if(samples.length>24)samples.shift();if(samples.length===24&&samples.filter(n=>n>24).length>=12)slow=true;},
  ratio(width,height,dpr=1){const light=this.quality==='light';return Math.min(dpr,light?1:1.5,Math.sqrt((light?240000:600000)/Math.max(1,width*height)));},
  interval({active=false,reduced=false}={}){return 1000/(active?(this.quality==='light'?24:30):reduced?1:this.quality==='light'?6:12);},
 };
}
