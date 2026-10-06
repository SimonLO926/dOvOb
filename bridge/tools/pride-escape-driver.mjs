// Input-only recording/test driver: aims at a reachable platform and avoids visible spikes.
export function escapeDecision(m){
 const next=m.platforms.find(p=>p.floor>m.safe.floor&&!p.collapsed&&p.y>=m.y+7)||m.platforms.at(-1);
 const ready=next.y-m.camera<390,p=ready?next:m.safe;
 let x=Math.max(p.x+8,Math.min(p.x+p.w-8,m.x));
 if(p.spikes){const spike=p.x+p.w*.75;if(Math.abs(x-spike)<17)x=spike-18;}
 return {x,drop:!!m.on&&!m.vy&&m.safe.floor<100&&ready&&(m.on.spikes||Math.abs(m.x-x)<8)};
}
