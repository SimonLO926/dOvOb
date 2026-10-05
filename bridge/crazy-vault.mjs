export const VAULT_RULES = Object.freeze({ duration: 60000, retry: 20000, goal: 360, capacity: 120, penalty: 80 });
export const VAULT_WORLD = Object.freeze({ width: 1320, floor: 560, viewport: 400, gravity: 1200, jump: 560 });
export const VAULT_BANK = Object.freeze({ x: 65, y: 560 });
export const VAULT_EXIT = VAULT_BANK;
const grounds = [[0,420],[490,850],[930,1320]];
const platforms = [[240,508,70],[340,438,100],[585,488,90],[710,420,100],[1030,488,90],[1150,414,120]];
const coinPositions = [[165,535,20],[205,535,20],[275,483,40],[380,413,60],[520,535,20],[565,535,20],[620,463,40],[760,395,60],[815,535,20],[980,535,20],[1065,463,40],[1200,389,60],[1260,535,20]];
export function createVault() {
  return { x: 65, y: 560, vy: 0, grounded: true, coyote: 100, jumpBuffer: 0, jumpLatch: false, camera: 0,
    carry: 0, banked: 0, goal: VAULT_RULES.goal, target: null, elapsed: 0, timeLeft: VAULT_RULES.duration,
    hitCooldown: 0, flash: '', flashTime: 0, result: null, facing: 1, safeX: 65,
    platforms: platforms.map(([x,y,w])=>({x,y,w,h:18})), grounds: grounds.map(([x,end])=>({x,end})),
    spikes: [{x:330,w:30},{x:790,w:32},{x:990,w:30}],
    enemies: [{x:550,y:560,min:510,max:580,dir:1},{x:1130,y:560,min:1120,max:1285,dir:-1}],
    loot: coinPositions.map(([x,y,value])=>({x,y,value,collected:false})) };
}
export function vaultSpeed(v) { return 260 / (1 + v.carry / 360); }
export function vaultPoint(v, screenX) { v.target={x:Math.max(18,Math.min(VAULT_WORLD.width-18,(screenX-12)*VAULT_WORLD.viewport/256+v.camera))}; }
function damageVault(v, amount, pit, hurt) {
  if (v.hitCooldown && !pit) return;
  hurt?.(amount, 'crazyVaultObstacle');
  v.hitCooldown=1200;v.flash=`−${amount} HP${pit?' · 回到安全地面':''}`;v.flashTime=1500;
  if(pit){v.x=v.safeX;v.y=VAULT_WORLD.floor;v.vy=0;v.grounded=true;v.target=null;}
}
export function updateVault(v, elapsed, held=new Set(), {hurt}={}) {
  if(v.result)return v.result;
  const dt=Math.max(0,Math.min(50,elapsed));
  v.elapsed+=dt;v.timeLeft=Math.max(0,VAULT_RULES.duration-v.elapsed);v.hitCooldown=Math.max(0,v.hitCooldown-dt);v.flashTime=Math.max(0,v.flashTime-dt);
  const jump=held.has('up')||held.has('action');
  if(jump&&!v.jumpLatch)v.jumpBuffer=120;v.jumpLatch=jump;
  const direction=Number(held.has('right'))-Number(held.has('left'));
  if(direction)v.target=null;
  let dx=direction;
  if(!dx&&v.target){const gap=v.target.x-v.x;dx=Math.abs(gap)>3?Math.sign(gap):0;}
  if(dx)v.facing=dx;
  for(let left=dt;left>0;){
    const ms=Math.min(8,left),sec=ms/1000;left-=ms;
    v.jumpBuffer=Math.max(0,v.jumpBuffer-ms);v.coyote=v.grounded?100:Math.max(0,v.coyote-ms);
    if(v.jumpBuffer&&v.coyote){v.vy=-VAULT_WORLD.jump;v.grounded=false;v.coyote=0;v.jumpBuffer=0;}
    const oldX=v.x,oldY=v.y;v.x=Math.max(18,Math.min(VAULT_WORLD.width-18,v.x+dx*vaultSpeed(v)*sec));
    for(const p of v.platforms){
      if(v.y>p.y+2&&v.y-28<p.y+p.h){
        if(oldX+10<=p.x&&v.x+10>p.x)v.x=p.x-10;
        if(oldX-10>=p.x+p.w&&v.x-10<p.x+p.w)v.x=p.x+p.w+10;
      }
    }
    v.vy+=VAULT_WORLD.gravity*sec;v.y+=v.vy*sec;v.grounded=false;
    const surfaces=[...v.platforms,...v.grounds.map(g=>({x:g.x,y:VAULT_WORLD.floor,w:g.end-g.x}))];
    if(v.vy>=0)for(const p of surfaces){
      if(v.x+9>p.x&&v.x-9<p.x+p.w&&oldY<=p.y+.1&&v.y>=p.y){v.y=p.y;v.vy=0;v.grounded=true;break;}
    }
    // Solid undersides prevent jumping through a platform.
    if(v.vy<0)for(const p of v.platforms){if(v.x+9>p.x&&v.x-9<p.x+p.w&&oldY-28>=p.y+p.h&&v.y-28<p.y+p.h){v.y=p.y+p.h+28;v.vy=0;}}
    for(const enemy of v.enemies){enemy.x+=enemy.dir*48*sec;if(enemy.x>enemy.max){enemy.x=enemy.max;enemy.dir=-1;}if(enemy.x<enemy.min){enemy.x=enemy.min;enemy.dir=1;}}
    const safeFromSpikes=v.spikes.every(spike=>v.x+16<=spike.x||v.x-16>=spike.x+spike.w);
    const safeFromEnemies=v.enemies.every(enemy=>Math.abs(v.x-enemy.x)>=32);
    if(v.grounded&&v.y===VAULT_WORLD.floor&&safeFromSpikes&&safeFromEnemies&&v.grounds.some(g=>v.x>g.x+24&&v.x<g.end-24))v.safeX=v.x;
    for(const spike of v.spikes)if(v.x+9>spike.x&&v.x-9<spike.x+spike.w&&v.y>VAULT_WORLD.floor-18)damageVault(v,3,false,hurt);
    for(const enemy of v.enemies)if(Math.abs(v.x-enemy.x)<23&&v.y>enemy.y-24&&v.y-28<enemy.y)damageVault(v,8,false,hurt);
    if(v.y>680)damageVault(v,12,true,hurt);
    for(const item of v.loot){if(!item.collected&&v.carry+item.value<=VAULT_RULES.capacity&&Math.hypot(v.x-item.x,v.y-14-item.y)<23){item.collected=true;v.carry+=item.value;v.flash=`+${item.value}`;v.flashTime=700;}}
    if(v.x<105&&v.grounded&&v.y===VAULT_WORLD.floor&&v.carry){v.banked+=v.carry;v.flash=`自動存入 ${v.carry}`;v.flashTime=1500;v.carry=0;v.safeX=65;}
    if(v.banked>=v.goal&&v.x<105&&v.grounded&&v.y===VAULT_WORLD.floor)v.result='success';
  }
  v.camera=Math.max(0,Math.min(VAULT_WORLD.width-VAULT_WORLD.viewport,v.x-VAULT_WORLD.viewport*.4));
  if(!v.result&&!v.timeLeft)v.result='failure';return v.result;
}

export function drawVault(c,v){
  const text=(s,x,y,size=11,color='#ffe2a1')=>{c.fillStyle=color;c.font=`bold ${size}px "Pixel Hant",sans-serif`;c.textAlign='center';c.textBaseline='middle';c.fillText(s,x,y,248);};
  c.save();c.beginPath();c.rect(12,174,256,322);c.clip();
  const bg=c.createLinearGradient(0,174,0,496);bg.addColorStop(0,'#1c1830');bg.addColorStop(1,'#302439');c.fillStyle=bg;c.fillRect(12,174,256,322);
  // Distant vault architecture scrolls more slowly than the platforms.
  for(let i=-1;i<9;i++){const x=12+i*56-(v.camera*.14%56);c.fillStyle='#392738';c.fillRect(x,255,14,224);c.fillStyle='#93653d';c.fillRect(x-3,255,20,5);c.fillStyle='#594035';c.fillRect(x+3,263,3,200);}
  c.fillStyle='#ffc56b';for(let i=0;i<8;i++){const x=34+i*72-(v.camera*.2%72);c.fillRect(x,304,3,14);c.fillStyle='#ffde9a';c.fillRect(x-1,303,5,4);c.fillStyle='#ffc56b';}
  c.save();c.translate(12-v.camera*(256/VAULT_WORLD.viewport),30);c.scale(256/VAULT_WORLD.viewport,.8);
  const floor=VAULT_WORLD.floor;
  for(const g of v.grounds){c.fillStyle='#6a413a';c.fillRect(g.x,floor,g.end-g.x,90);c.fillStyle='#dab16b';c.fillRect(g.x,floor,g.end-g.x,8);for(let x=g.x;x<g.end;x+=32){c.fillStyle='#35242f';c.fillRect(x,floor+14,30,20);c.fillRect(x+16,floor+38,30,20);}}
  for(const p of v.platforms){c.fillStyle='#b58248';c.fillRect(p.x,p.y,p.w,p.h);c.fillStyle='#ffe0a0';c.fillRect(p.x,p.y,p.w,4);c.fillStyle='#5a3430';for(let x=p.x+4;x<p.x+p.w;x+=20)c.fillRect(x,p.y+7,15,7);}
  // A green bank is the permanent home and automatic settlement point.
  c.fillStyle='#214c46';c.fillRect(25,floor-65,80,65);c.strokeStyle='#85f5bb';c.lineWidth=3;c.strokeRect(25,floor-65,80,65);c.fillStyle='#b9ffd5';c.fillRect(42,floor-43,47,6);c.fillStyle='#15302e';c.fillRect(45,floor-26,40,26);
  for(const spike of v.spikes){c.fillStyle='#ef6c74';for(let x=spike.x;x<spike.x+spike.w;x+=10){c.beginPath();c.moveTo(x,floor);c.lineTo(x+5,floor-18);c.lineTo(x+10,floor);c.fill();}}
  for(const e of v.enemies){c.fillStyle='#bd4562';c.fillRect(e.x-16,e.y-22,32,19);c.fillStyle='#ffe0a7';c.fillRect(e.x-11,e.y-19,7,5);c.fillRect(e.x+4,e.y-19,7,5);c.fillStyle='#281d2a';c.fillRect(e.x-13,e.y-3,10,3);c.fillRect(e.x+3,e.y-3,10,3);}
  for(const item of v.loot){if(item.collected)continue;c.fillStyle=item.value===60?'#6deee3':item.value===40?'#ffc45e':'#ffe8a2';if(item.value===60){c.beginPath();c.moveTo(item.x,item.y-14);c.lineTo(item.x+12,item.y);c.lineTo(item.x,item.y+14);c.lineTo(item.x-12,item.y);c.fill();}else{c.beginPath();c.ellipse(item.x,item.y,10,13,0,0,7);c.fill();c.fillStyle='#b57930';c.fillRect(item.x-2,item.y-8,4,16);}}
  // Original little thief, with a scarf and a visible coin bag.
  if(!v.hitCooldown||Math.floor(v.hitCooldown/90)%2){const x=v.x,y=v.y;c.fillStyle='#15152b';c.fillRect(x-9,y-28,18,25);c.fillStyle='#aefff0';c.fillRect(x-10,y-29,20,12);c.fillStyle='#132a35';c.fillRect(x+(v.facing>0?3:-6),y-25,3,3);c.fillStyle='#fb799d';c.fillRect(x-10,y-17,20,4);c.fillRect(x-v.facing*17,y-16,9,4);c.fillStyle='#8eb6c9';c.fillRect(x-9,y-5,7,5);c.fillRect(x+2,y-5,7,5);if(v.carry){c.fillStyle='#dda85c';c.fillRect(x-v.facing*15-5,y-15,10,13);}}
  c.restore();c.restore();
  text(`已存 ${v.banked}/${v.goal} · 負重 ${v.carry}/${VAULT_RULES.capacity}`,140,163,9);
  text(v.x<105?'起點銀行 · 回來自動存款':'← 回起點銀行 · 滿載就折返',140,197,10,'#b0f4d5');
  text('← → 跑 · ↑ / SPACE 跳 · 紅色障礙扣血',140,507,9,'#cbbaca');
  if(v.flashTime)text(v.flash,140,226,12,v.flash.startsWith('−')?'#ff9f9f':'#ffe8aa');
}
