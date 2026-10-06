import {avatar,path} from './pride-visuals.mjs';
import {prideHud} from './pride-layout.mjs';

export const RHYTHM_RULES=Object.freeze({normal:{best:70,good:180,beat:900,travel:1200},hard:{best:55,good:135,beat:650,travel:1000}});
const xs=[60,140,220], keys=['left','action','right'];
export function createRhythm(s){
  const rules=RHYTHM_RULES[s.difficulty]||RHYTHM_RULES.normal,notes=[];
  for(let at=1500,beat=0;at<13500;at+=rules.beat,beat++){
    const lane=Math.min(2,Math.floor((s.random||Math.random)()*3));notes.push({lane,at,status:'pending'});
    if(s.difficulty==='hard'&&beat%4===3)notes.push({lane:(lane+1)%3,at,status:'pending'});
  }
  return {clock:0,duration:14000,damage:0,finished:false,notes,rules,laneCooldown:[0,0,0],flashes:[null,null,null],
    pendingHit:0,pendingHurt:0,pendingHeal:0,combo:0,best:0,good:0,misses:0,feedback:'',x:140,y:410};
}
function judge(m,n,result){
  n.status=result;n.resolved=m.clock;m.flashes[n.lane]={result,until:m.clock+450};m.feedback=result;
  if(result==='damage'){m.pendingHurt+=m.rules===RHYTHM_RULES.hard?7:6;m.combo=0;m.misses++;}
  else{const hit=result==='best'?32:18;m.pendingHit+=hit;m.damage+=hit;m.combo++;m[result]++;if(m.combo%3===0)m.pendingHeal+=6;}
}
export function rhythmInput(s,action){
  const m=s.mini,lane=keys.indexOf(action);if(lane<0||m.finished||m.laneCooldown[lane]>m.clock)return;
  m.laneCooldown[lane]=m.clock+180;
  const n=m.notes.filter(n=>n.lane===lane&&n.status==='pending').sort((a,b)=>Math.abs(a.at-m.clock)-Math.abs(b.at-m.clock))[0];
  if(n&&Math.abs(n.at-m.clock)<=m.rules.good)judge(m,n,Math.abs(n.at-m.clock)<=m.rules.best?'best':'good');
  else if(m.notes.some(n=>n.status==='pending'&&n.at-m.clock<=m.rules.travel)){
    // Wrong lane / early taps hurt once; they cannot reflect a shard from another lane.
    m.pendingHurt+=4;m.combo=0;m.feedback='damage';m.flashes[lane]={result:'damage',until:m.clock+450};
  }
}
export function rhythmPoint(s,x,y){if(y>=140&&y<=535)rhythmInput(s,keys[x<100?0:x<180?1:2]);}
export function updateRhythm(s,dt,api={}){
  const m=s.mini;if(m.finished)return;
  for(const n of m.notes)if(n.status==='pending'&&m.clock>n.at+m.rules.good)judge(m,n,'damage');
  if(m.pendingHit)api.hit?.(s,m.pendingHit);
  if(m.pendingHurt)api.hurt?.(s,m.pendingHurt,'prideShardHit');
  if(m.pendingHeal)api.heal?.(s,m.pendingHeal);
  m.pendingHit=m.pendingHurt=m.pendingHeal=0;
}
export function drawRhythm(c,s,reduced=false){
  const m=s.mini;c.save();c.save();c.beginPath();c.rect(0,140,280,320);c.clip();
  for(let lane=0;lane<3;lane++){
    const x=xs[lane],flash=m.flashes[lane],active=flash?.until>m.clock;
    c.fillStyle=lane===1?'#3a233b':'#241c34';c.fillRect(x-35,174,70,286);
    c.strokeStyle='#9b779855';c.lineWidth=1;c.strokeRect(x-35,174,70,286);
    c.fillStyle='#f1d19233';c.fillRect(x-33,402,66,16);
    c.strokeStyle=active?(flash.result==='damage'?'#ff617e':flash.result==='best'?'#fff29b':'#8cf2dc'):'#d8bc91';c.lineWidth=active?3:1;
    c.beginPath();c.arc(x,410,22,0,Math.PI*2);c.stroke();avatar(c,x,410);
    if(active){c.fillStyle=c.strokeStyle;c.font='bold 12px sans-serif';c.textAlign='center';c.fillText(flash.result,x,384);}
  }
  for(const n of m.notes){
    const progress=(m.clock-(n.at-m.rules.travel))/m.rules.travel;
    if(progress<0||progress>1.8)continue;
    if(n.status==='pending'||n.status==='damage'){
      const x=xs[n.lane],y=190+progress*220;
      path(c,[[x,y-11],[x+8,y],[x,y+11],[x-8,y]],n.status==='damage'?'#ff537b':'#ddaaff','#ffedca');
      if(!reduced){c.fillStyle='#f3b8f355';c.fillRect(x-2,y-25,4,10);}
    }else if(m.clock-n.resolved<500){
      const x=xs[n.lane],y=410-(m.clock-n.resolved)*.5;
      path(c,[[x,y-10],[x+5,y],[x,y+10],[x-5,y]],'#b1ffdc','#fff4c4');
    }
  }
  c.restore();prideHud(c,{encounter:s,title:'碎鏡風暴',status:`${Math.ceil(Math.max(0,s.timeLeft)/1000)}秒 · ${m.combo} 連擊`,detail:`best ${m.best} · good ${m.good}`,
    hint:'碎片到達金線時按對應軌道',elapsed:m.clock,feedback:m.feedback,controls:'左鍵／空白鍵／右鍵',touch:'左 · 中 · 右'});c.restore();
}
