// Original food match-three with striped, wrapped and rainbow specials.
// Numbers are internal food kinds; the renderer always shows fruit / candy icons.
export const W=6,H=7;
function runs(a){const out=[];for(let y=0;y<H;y++){let x=0;while(x<W){const start=x,v=a[y*W+x];while(x<W&&a[y*W+x]===v)x++;if(v!=null&&x-start>=3)out.push({axis:'row',cells:Array.from({length:x-start},(_,i)=>y*W+start+i)});}}
 for(let x=0;x<W;x++){let y=0;while(y<H){const start=y,v=a[y*W+x];while(y<H&&a[y*W+x]===v)y++;if(v!=null&&y-start>=3)out.push({axis:'column',cells:Array.from({length:y-start},(_,i)=>(start+i)*W+x)});}}return out;}
export function matches(a){return [...new Set(runs(a).flatMap(g=>g.cells))];}
export function adjacent(a,b){return Number.isInteger(a)&&Number.isInteger(b)&&a>=0&&b>=0&&a<W*H&&b<W*H&&Math.abs(a%W-b%W)+Math.abs(Math.floor(a/W)-Math.floor(b/W))===1;}
export function legalMoves(a,specials=[]){const out=[];for(let i=0;i<a.length;i++)for(const j of[i+1,i+W]){if(!adjacent(i,j))continue;const b=[...a];[b[i],b[j]]=[b[j],b[i]];if(matches(b).length||specials[i]==='rainbow'||specials[j]==='rainbow'||specials[i]&&specials[j])out.push([i,j]);}return out;}
export function freshBoard(random=Math.random){for(let attempt=0;attempt<100;attempt++){const a=[];for(let i=0;i<W*H;i++){const choices=[0,1,2,3,4].filter(v=>!(i%W>=2&&a[i-1]===v&&a[i-2]===v)&&!(i>=2*W&&a[i-W]===v&&a[i-2*W]===v));a.push(choices[Math.min(choices.length-1,Math.floor(random()*choices.length))]);}if(legalMoves(a).length)return a;}return Array.from({length:W*H},(_,i)=>i%W<3?[0,1,0][i%W]:(i+Math.floor(i/W))%5).map((v,i)=>i===W+1?0:v);}
export function executionJellies(hard=false){const a=Array(W*H).fill(0);for(const i of(hard?[7,10,13,16,19,22,25,28]:[13,16,19,22]))a[i]=1;return a;}
function creations(board,preferred=[]){const groups=runs(board),result=new Map(),claimed=new Set();
 // Five in a line creates a rainbow. A crossing T/L creates a wrapped sweet.
 for(const g of groups.filter(g=>g.cells.length>=5)){const i=preferred.find(i=>g.cells.includes(i))??g.cells[2];result.set(i,'rainbow');g.cells.forEach(i=>claimed.add(i));}
 for(const row of groups.filter(g=>g.axis==='row'))for(const col of groups.filter(g=>g.axis==='column')){const i=row.cells.find(i=>col.cells.includes(i));if(i!=null&&!claimed.has(i)){result.set(i,'wrapped');[...row.cells,...col.cells].forEach(i=>claimed.add(i));}}
 for(const g of groups.filter(g=>g.cells.length===4)){if(g.cells.some(i=>claimed.has(i)))continue;const i=preferred.find(i=>g.cells.includes(i))??g.cells[1];result.set(i,g.axis);g.cells.forEach(i=>claimed.add(i));}return result;}
function expand(m,seeds,rainbowColor=null){const hit=new Set(seeds),queue=[...seeds],activated=new Set();while(queue.length){const i=queue.shift(),special=m.specials[i];if(!special||activated.has(i))continue;activated.add(i);let more=[];
 if(special==='row')more=Array.from({length:W},(_,x)=>Math.floor(i/W)*W+x);
 if(special==='column')more=Array.from({length:H},(_,y)=>y*W+i%W);
 if(special==='wrapped'){for(let y=-1;y<=1;y++)for(let x=-1;x<=1;x++){const xx=i%W+x,yy=Math.floor(i/W)+y;if(xx>=0&&xx<W&&yy>=0&&yy<H)more.push(yy*W+xx);}}
 if(special==='rainbow')more=m.board.map((v,k)=>v===(rainbowColor??m.board[i])?k:-1).filter(i=>i>=0);
 for(const k of more)if(!hit.has(k)){hit.add(k);queue.push(k);}}m.activated=[...activated];return [...hit];}
function prepare(m,preferred=[],seeds=null,rainbowColor=null){m.creations=seeds?new Map():creations(m.board,preferred);m.match=expand(m,seeds??matches(m.board),rainbowColor);for(const i of m.activated)m.creations.delete(i);m.busy=300;}
export function swap(m,a,b,random=Math.random){if(m.busy||!adjacent(a,b)||m.moves<=0)return false;m.specials??=Array(W*H).fill(null);[m.board[a],m.board[b]]=[m.board[b],m.board[a]];[m.specials[a],m.specials[b]]=[m.specials[b],m.specials[a]];
 const rainbow=m.specials[a]==='rainbow'||m.specials[b]==='rainbow',both=m.specials[a]&&m.specials[b];
 if(!matches(m.board).length&&!rainbow&&!both){[m.board[a],m.board[b]]=[m.board[b],m.board[a]];[m.specials[a],m.specials[b]]=[m.specials[b],m.specials[a]];m.feedback='invalid';m.feedbackTime=1000;return false;}
 m.moves--;m.chain=1;
 if(rainbow&&both&&m.specials[a]===m.specials[b])prepare(m,[],Array.from({length:W*H},(_,i)=>i));
 else if(rainbow)prepare(m,[],[a,b],m.specials[a]==='rainbow'?m.board[b]:m.board[a]);
 else if(both)prepare(m,[],[a,b]);else prepare(m,[b,a]);return true;}
export function settle(m,random){const hit=m.match;let goal=0;m.specials??=Array(W*H).fill(null);m.jellies??=Array(W*H).fill(0);m.jellyCleared??=0;
 for(const i of hit){if(m.board[i]===m.goal)goal++;if(m.jellies[i]){m.jellies[i]--;m.jellyCleared++;}if(m.creations?.has(i)){m.specials[i]=m.creations.get(i);}else{m.board[i]=null;m.specials[i]=null;}}
 m.score+=hit.length;m.collected+=goal;m.lastClear=hit.length;m.combo=Math.max(m.combo||0,m.chain);m.clearEffects=hit.map(i=>({i,type:m.board[i]}));m.clearAge=0;m.falling=Array(W*H).fill(0);
 for(let x=0;x<W;x++){const col=[];for(let y=H-1;y>=0;y--)if(m.board[y*W+x]!=null)col.push({v:m.board[y*W+x],special:m.specials[y*W+x],from:y});let incoming=0;while(col.length<H)col.push({v:Math.floor(random()*5),special:null,from:--incoming});for(let y=H-1;y>=0;y--){const o=col[H-1-y];m.board[y*W+x]=o.v;m.specials[y*W+x]=o.special;m.falling[y*W+x]=(o.from-y)*38;}}
 m.creations=new Map();m.activated=[];m.match=matches(m.board);if(m.match.length&&m.chain<12){m.chain++;prepare(m);}else{m.busy=0;m.match=[];if(matches(m.board).length||!legalMoves(m.board,m.specials).length){m.board=freshBoard(random);m.specials.fill(null);m.feedback='reshuffle';m.feedbackTime=1300;}}return {cleared:hit.length,goal};}
