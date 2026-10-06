// Test/recording driver: uses ordinary movement and action, without altering combat state.
export function duelDecision(m){
  const g=m.gate,near=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  if(g.charged&&!g.spent&&!g.pulse&&!m.cooldown&&near(m.mirror,g)<13&&near(m,g)>30)
    return {action:true};
  if(!g.charged&&!g.pulse&&!g.spent)return {target:{x:g.x,y:g.y}};
  const candidates=[];
  for(let x=30;x<=250;x+=44)for(let y=220;y<=475;y+=51){
    const p={x,y};if(near(p,g)<65)continue;
    let danger=0;
    for(const b of m.bullets){const d=Math.hypot(x-(b.x+b.vx*.5),y-(b.y+b.vy*.5));danger+=Math.max(0,55-d)*4;}
    if(m.attack)danger+=Math.max(0,65-near(p,m.attack))*4;
    candidates.push({p,score:near(p,m)+near(p,g)*.1+danger});
  }
  candidates.sort((a,b)=>a.score-b.score);return {target:candidates[0].p};
}
