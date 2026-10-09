// Preview scenes 4–6 remain provisional until bosses-lore.md is supplied.
export const LIVES = Object.freeze([
  {name:'新玩具',symbol:'★',color:'#efb867'}, {name:'被稱讚',symbol:'✦',color:'#eb9daa'},
  {name:'開心家庭',symbol:'♥',color:'#f08086'}, {name:'收到禮物',symbol:'◆',color:'#b3a0ed'},
  {name:'得到掌聲',symbol:'●',color:'#79bbdf'}, {name:'有人陪伴',symbol:'☾',color:'#ead392'},
]);
export const WINDOW = Object.freeze({x:30,y:180,w:220,h:238,cols:44,rows:48,radius:27,coverage:.72,revealMs:1100});
export const ROOM_NAMES=['床邊','書桌','畫牆','面具'];
export const ROOM_TARGETS=[
  [{id:'pillow',x:36,y:232,w:92,h:70,label:'枕頭'},{id:'bed-key',x:155,y:322,w:88,h:75,label:'床底'}],
  [{id:'desk-key',x:36,y:225,w:94,h:70,label:'盒子'},{id:'drawer',x:153,y:225,w:94,h:70,label:'抽屜'},{id:'code',x:83,y:335,w:114,h:70,label:'密碼盒'}],
  [{id:'painting',x:32,y:205,w:96,h:92,label:'倒置畫'},{id:'curtain',x:152,y:205,w:96,h:92,label:'窗簾'},{id:'clue',x:73,y:332,w:134,h:73,label:'便條'}],
  [{id:'mask',x:49,y:202,w:182,h:195,label:'面具'}],
];
const say=(m,t)=>{m.feedback=t;m.feedbackTime=2200;};
const emit=(m,kind,amount)=>m.effects.push({kind,amount});
function collect(m,i){if(m.eyes.has(i))return;m.eyes.add(i);emit(m,'heal',3);say(m,`找到「${LIVES[i].name}」之眼`);}
export function initLore(m){
  if(m.id==='window'){m.duration=60000;m.stage=0;m.cleared=0;m.mask=new Uint8Array(WINDOW.cols*WINDOW.rows);m.brush={x:140,y:300};m.stroke=null;m.reveal=0;}
  else {m.duration=180000;m.room=0;m.focus=0;m.eyes=new Set();m.keyParts=new Set();m.opened=new Set();m.modal=null;m.digits=[0,0,0];m.code=Array.from({length:3},()=>Math.floor(m.random()*6)+1);m.order=[0,1,2,3,4,5];for(let i=5;i>0;i--){const j=Math.floor(m.random()*(i+1));[m.order[i],m.order[j]]=[m.order[j],m.order[i]];}m.maskSlots=Array(6).fill(-1);m.slot=0;m.choice=0;m.turns=0;}
}
export function endStroke(m){if(m?.id==='window')m.stroke=null;}
export function erase(m,x,y){
  if(m.done||m.reveal||m.clock>=m.duration){m.stroke=null;return;}
  const r=WINDOW;
  if(x<r.x||x>r.x+r.w||y<r.y||y>r.y+r.h){m.stroke=null;return;}
  const a=m.stroke||{x,y};m.stroke={x,y};m.brush={x,y};
  const dx=x-a.x,dy=y-a.y,len=dx*dx+dy*dy;
  for(let row=0;row<r.rows;row++)for(let col=0;col<r.cols;col++){
    const i=row*r.cols+col;if(m.mask[i])continue;
    const px=r.x+(col+.5)*r.w/r.cols,py=r.y+(row+.5)*r.h/r.rows;
    const t=len?Math.max(0,Math.min(1,((px-a.x)*dx+(py-a.y)*dy)/len)):0;
    if(Math.hypot(px-a.x-t*dx,py-a.y-t*dy)<=r.radius){m.mask[i]=1;m.cleared++;}
  }
  if(m.cleared/m.mask.length>=r.coverage){m.reveal=r.revealMs;m.stroke=null;emit(m,'boss',12);emit(m,'heal',2);say(m,`看見「${LIVES[m.stage].name}」`);}
}
function inspect(m,id){
  if(id==='pillow')collect(m,0);
  if(id==='bed-key'||id==='desk-key'){m.keyParts.add(id);say(m,m.keyParts.size===2?'鑰匙拼好了，去開抽屜':'找到半截鑰匙');}
  if(id==='drawer'){if(m.keyParts.size===2){m.opened.add(id);collect(m,1);}else say(m,'缺少另一半鑰匙');}
  if(id==='code'){m.modal='code';m.focus=0;say(m,'便條上的三個數字');}
  if(id==='painting'){m.modal='painting';m.focus=0;say(m,'讓畫中的星星朝上');}
  if(id==='curtain')collect(m,4);
  if(id==='clue'){m.modal='clue';say(m,'記住數字與眼洞順序');}
  if(id==='mask'){if(m.eyes.size<5){say(m,'先找齊五隻眼；最後一隻藏在面具');return;}m.modal='mask';m.slot=m.order.findIndex(i=>i!==5);m.choice=0;}
}
function confirm(m,finish){
  if(m.modal==='code'){if(m.digits.every((n,i)=>n===m.code[i])){collect(m,2);m.opened.add('code');m.modal=null;}else say(m,'密碼不符，回看便條');}
  else if(m.modal==='painting'){m.turns=(m.turns+1)%4;if(m.turns===2){collect(m,3);m.opened.add('painting');m.modal=null;}else say(m,'再轉一次');}
  else if(m.modal==='mask'){
    // The sixth eye is revealed by five correctly matched collected eyes.
    const expected=m.order[m.slot];
    if(m.choice!==expected){say(m,'眼紋不符，看看便條');return;}
    if(!m.eyes.has(expected)&&expected!==5){say(m,'還未找到這種眼球');return;}
    if(expected===5&&m.maskSlots.filter(v=>v>=0&&v!==5).length<5){say(m,'先放好五隻眼，最後眼洞才會開');return;}
    m.maskSlots[m.slot]=expected;if(expected===5)collect(m,5);
    if(m.maskSlots.every((v,i)=>v===m.order[i])){finish(m,true,75);say(m,'六段人生，沒有一段屬於我');}
    else {const next=m.maskSlots.findIndex((v,i)=>v<0&&m.order[i]!==5);m.slot=next>=0?next:m.maskSlots.findIndex(v=>v<0);say(m,'眼洞亮了');}
  }else m.modal=null;
}
export function loreInput(m,action,finish){
  if(m.id==='window'){
    if(action==='action'&&m.reveal>0&&m.reveal<=WINDOW.revealMs-450)m.reveal=Math.min(m.reveal,50);
    return;
  }
  if(action==='alt'){m.modal=null;return;}
  if(m.modal){
    if(m.modal==='code'){
      if(action==='left'||action==='right')m.focus=(m.focus+(action==='left'?2:1))%3;
      if(action==='up'||action==='down')m.digits[m.focus]=(m.digits[m.focus]+(action==='up'?1:9))%10;
    }else if(m.modal==='mask'){
      if(action==='left'||action==='right')m.slot=(m.slot+(action==='left'?5:1))%6;
      if(action==='up'||action==='down')m.choice=(m.choice+(action==='up'?1:5))%6;
    }
    if(action==='action')confirm(m,finish);
    return;
  }
  if(action==='left'||action==='right'){m.room=(m.room+(action==='left'?3:1))%4;m.focus=0;}
  if(action==='up'||action==='down')m.focus=(m.focus+(action==='up'?ROOM_TARGETS[m.room].length-1:1))%ROOM_TARGETS[m.room].length;
  if(action==='action')inspect(m,ROOM_TARGETS[m.room][m.focus].id);
}
export function lorePoint(m,x,y,finish){
  if(m.id==='window'){erase(m,x,y);return;}
  if(m.modal){
    if(x>=219&&y>=165&&y<=206){m.modal=null;return;}
    if(m.modal==='code'){
      if(y>=245&&y<=330&&x>=29&&x<=251){const i=Math.min(2,Math.floor((x-29)/74));m.focus=i;m.digits[i]=(m.digits[i]+(y<288?1:9))%10;}
      if(y>=355&&y<=419)confirm(m,finish);
    }else if(m.modal==='mask'){
      if(y>=214&&y<=330&&x>=35&&x<=245)m.slot=Math.min(5,Math.floor((x-35)/70)+3*(y>=272?1:0));
      if(y>=346&&y<=403&&x>=30&&x<=250)m.choice=Math.min(5,Math.floor((x-30)/(220/6)));
      if(y>=410&&y<=460)confirm(m,finish);
    }else if(m.modal==='painting')confirm(m,finish);
    else m.modal=null;
    return;
  }
  const targets=ROOM_TARGETS[m.room],i=targets.findIndex(r=>x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h);
  if(i>=0){m.focus=i;inspect(m,targets[i].id);}
  if(y>=420&&y<=465){if(x<88)loreInput(m,'left',finish);else if(x>192)loreInput(m,'right',finish);}
}
export function updateLore(m,dt,held,finish){
  if(m.id!=='window')return;
  if(m.reveal){m.reveal=Math.max(0,m.reveal-dt);if(!m.reveal){m.stage++;if(m.stage===6){finish(m,true,20);return;}m.mask.fill(0);m.cleared=0;m.stroke=null;}return;}
  const dx=(held.has('right')?1:0)-(held.has('left')?1:0),dy=(held.has('down')?1:0)-(held.has('up')?1:0),l=Math.hypot(dx,dy)||1;
  m.brush.x=Math.max(WINDOW.x,Math.min(WINDOW.x+WINDOW.w,m.brush.x+dx/l*190*dt/1000));
  m.brush.y=Math.max(WINDOW.y,Math.min(WINDOW.y+WINDOW.h,m.brush.y+dy/l*190*dt/1000));
  if(held.has('action'))erase(m,m.brush.x,m.brush.y);else if(dx||dy)m.stroke=null;
}
