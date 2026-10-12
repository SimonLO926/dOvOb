export const CARTRIDGES=Object.freeze([
 {id:'greed',title:'貪婪',english:'GREED',subtitle:'The Mad Dealer',color:'#b27343',art:'./assets/greed-first.webp',available:true},
 {id:'pride',title:'傲慢',english:'PRIDE',subtitle:'The Mirror Palace',color:'#8464ae',art:'./assets/pride-first.webp',available:true},
 {id:'envy',title:'嫉妒',english:'ENVY',subtitle:'The Watching Child',color:'#548c76',art:'./assets/envy-first.webp',available:true},
 {id:'lust',title:'色慾',english:'LUST',subtitle:'Cupid in the Clouds',color:'#c56b8a',art:'./assets/lust-cupid-r2.webp',available:true,preview:true},
 ...[5,6,7].map(n=>({id:'sealed-'+n,title:'封印 '+n,english:'SEALED '+n,color:'#8a8982',available:false})),
]);
export function createSelection(){return {index:0,phase:'browse',elapsed:0,rotate:false,yaw:0,pitch:0,drop:{x:0,y:0},message:'',available:CARTRIDGES.map(p=>p.available)};}
export function selectCartridge(s,index){if(s.phase!=='browse'||!CARTRIDGES[index])return false;if(!s.available[index]){s.message='sealed';return false;}s.index=index;s.drop={x:0,y:0};s.yaw=0;s.pitch=0;s.message='';return true;}
export function moveCard(s,x,y){if(s.phase!=='browse')return false;s.drop.x=Math.max(-6,Math.min(6,x));s.drop.y=Math.max(-6,Math.min(6,y));return true;}
export function rotateCard(s,dx,dy){if(s.phase!=='browse')return false;s.yaw=Math.max(-Math.PI,Math.min(Math.PI,s.yaw+dx));s.pitch=Math.max(-1.1,Math.min(1.1,s.pitch+dy));return true;}
// A drop must be near the slot and face the machine. Unaligned cards snap back.
export function dropCard(s,{distance,aligned=true}){if(s.phase!=='browse')return false;if(distance>.72||!aligned){s.drop={x:0,y:0};s.message=aligned?'returned':'align';return false;}return insertCard(s);}
export function insertCard(s){if(s.phase!=='browse'||!s.available[s.index])return false;s.phase='insert';s.elapsed=0;s.rotate=false;s.message='';return true;}
export function tickSelection(s,dt,{paused=false,reduced=false}={}){if(paused)return;s.elapsed+=Math.max(0,Math.min(250,dt));if(s.phase==='insert'&&s.elapsed>=(reduced?300:1250)){s.phase='boot';s.elapsed=0;}else if(s.phase==='boot'&&s.elapsed>=(reduced?250:2100)){s.phase='playing';s.elapsed=0;}}
export function ejectCard(s){if(s.phase==='browse')return false;s.phase='browse';s.elapsed=0;s.drop={x:0,y:0};s.yaw=0;s.pitch=0;s.message='';return true;}
export const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};
