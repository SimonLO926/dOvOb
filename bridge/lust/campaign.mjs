import {sinProgress,recordSinClear,crazyLeaderboardKey} from '../crazy-sins.mjs?v=1.2.36';
import {rememberScore} from '../ranks.mjs';
export const lustScore=s=>s.stats.damage*10+5000+s.hp*50;
export const lustUnlocked=(storage,options)=>sinProgress(storage,undefined,options).find(b=>b.id==='lust').unlocked;
export function createLustRecorder(storage){
 const recorded=new WeakSet();
 return s=>{
  if(recorded.has(s)||s.sin!=='lust'||!recordSinClear(storage,s))return false;
  recorded.add(s);
  const score=lustScore(s);
  try{const key=crazyLeaderboardKey('lust',s.difficulty);storage.setItem(key,JSON.stringify(rememberScore([storage.getItem(key)],score)));}catch{}
  return true;
 };
}
