import {sinProgress,crazyLeaderboardKey} from '../crazy-sins.mjs';
import {filmingEnabled} from '../filming.mjs';
import {loadBoard} from '../ranks.mjs';
export function cartridgeProgress(storage,session){return sinProgress(storage,undefined,{filming:filmingEnabled(session)});}
export function campaignTarget(sin,progress,base,difficulty='normal'){
 const boss=progress.find(b=>b.id===sin);
 if(!boss?.developed||!boss.unlocked)throw new RangeError('Locked Boss');
 const url=new URL(boss.entry||'index.html',base);
 if(!boss.entry)url.searchParams.set('campaign',sin);
 url.searchParams.set('difficulty',difficulty==='hard'?'hard':'normal');
 return url.href;
}
export function cartridgeRanks(storage){const read=key=>{try{return storage?.getItem(key);}catch{return null;}};return ['greed','pride','envy','lust','gluttony'].flatMap(sin=>['normal','hard'].map(difficulty=>({sin,difficulty,scores:loadBoard([read(crazyLeaderboardKey(sin,difficulty))])})));}
