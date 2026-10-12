import {woman,drawArcade,arcadeHint,FEEDBACK} from './arcade-view.mjs';
import {cellsOf,ghostY} from '../logic.mjs';
import {configureBridgePaint,drawGridCells,paintPiece} from '../envy/bridge-paint.mjs';
import {heart} from '../envy/art.mjs';
import {names,appearance,DIALOGUE,ATTACKS1,ATTACKS2,datesComplete} from './engine.mjs';
export const height=s=>s?.mode==='bridge'?720:600;
// Theme colors identify the task; native blocks, ghost, player heart and HP stay native.
const themes={
 bridge:['#131e2b','#182c3b','#79bacb','#c7dfed'],archery:['#102f46','#17445c','#f2c574','#b9e5ff'],
 piano:['#131b3d','#202b52','#68ddd9','#c7dcff'],dance:['#30203c','#493056','#edc16e','#f0d3ee'],
 claw:['#163a37','#23524c','#f3ce83','#c6efdc'],tennis:['#13362d','#235540','#d8ea8c','#daf5d9'],
 volley:['#103b46','#205863','#eed59e','#bbf1f2'],feeding:['#39251c','#583a28','#ffc884','#f5e2c9'],
 cinema:['#151f38','#253455','#9cadf3','#d6e0ff'],wheel:['#342039','#55334a','#f5bc77','#f6d8bc'],
 haunted:['#101d2b','#182d37','#a7dbb0','#c7e8db'],charm:['#153532','#23524a','#ecc091','#c5eee0'],
 dating:['#25374a','#354c62','#f2dfac','#e5edf8'],wave:['#28213c','#3c3154','#cfa5ef','#e4dafa'],
 'wave-up':['#252444','#35385c','#a9b7f6','#dae4ff'],bomb:['#37251e','#4c372b','#f1bc81','#fae0bc'],
 'bomb-up':['#352127','#4a3039','#f5b493','#ffe0ce'],arrows:['#142c3d','#203e54','#e6c776','#d2eafa'],
 'arrows-up':['#162944','#273d60','#dac47b','#d7e5ff'],ribbon:['#302039','#48304f','#ebcb7c','#eddef5'],
 echo:['#12323c','#204854','#83d5dc','#d0f4f6'],shatter:['#302920','#493e2c','#efc98b','#f0e7cd']};
export function theme(s){const p=themes[s?.mode]||themes.bridge;return {base:p[0],field:p[1],accent:p[2],ink:p[3]};}
export function text(c,v,x,y,size=12,color='#ffdfec',width=256){c.fillStyle=color;c.font=`${size}px "Pixel Latin", "Pixel Hant", sans-serif`;c.textAlign='center';c.fillText(v,x,y,width);}
function box(c,x,y,w,h,color){c.fillStyle=color;c.fillRect(x,y,w,h);}
function gem(c,x,y,size=12,color='#ff82bc'){c.fillStyle=color;c.beginPath();c.moveTo(x,y-size);c.lineTo(x+size,y);c.lineTo(x,y+size);c.lineTo(x-size,y);c.closePath();c.fill();}
const translate=(lang,pair)=>pair[lang==='zh-Hant'?0:1];
export const instructions={archery:['左右瞄準；空白射中移動靶','Aim ← →; Space hits moving target'],piano:['← ↑ 空白 →：四條琴鍵','← ↑ Space →: four note lanes'],dance:['← ↑ 空白 →：跟上加速舞步','← ↑ Space →: accelerating duet'],claw:['左右移夾；空白下降','Move claw ← →; Space drops'],tennis:['左右接球；近球空白揮拍','Move ← →; Space swings near ball'],volley:['左右接球；近球空白扣殺','Move ← →; Space spikes near ball'],feeding:['左右接食物；空白餵食','Move ← →; Space serves falling cake'],cinema:['帶位員背向時，空白親吻','Space kisses while usher looks away'],wheel:['車廂到頂時，空白親吻','Space kisses when gondola reaches top'],haunted:['方向移動；空白牽手，C 守護','Move; Space holds hands; C guards'],charm:['走近路人；空白魅惑三次','Move near guests; Space charms 3 times'],dating:['方向選擇；空白確認','Arrows choose; Space confirms']};
export function draw(c,s,{lang='en',reduced=false}={}){const h=height(s),m=s.round,zh=lang==='zh-Hant',p=theme(s);c.clearRect(0,0,280,h);box(c,0,108,280,h-108,p.base);
 const name=s.form===1?(zh?'丘比特':'Cupid'):(zh?'慾望化身':'Desire incarnate');text(c,'BOSS · '+name,140,110,13);box(c,24,120,232,6,'#452239');box(c,24,120,232*s.bossHp/s.bossMaxHp,6,'#f287ba');
 const locked=s.form===1&&(!s.firstTrial&&s.bossHp<=s.bossMaxHp*.2||s.firstTrial&&!datesComplete(s)&&s.bossHp<=s.bossMaxHp*.08)||s.form===2&&!s.datingDone&&s.bossHp<=s.bossMaxHp*.2;if(locked)text(c,zh?'鎖血 · '+s.played[s.form].length+'/5 約會':'SEALED · DATES '+s.played[s.form].length+'/5',140,140,10,'#ffca8b');else if(!s.datingDone)text(c,(zh?'約會 ':'DATES ')+s.played[s.form].length+'/5',140,140,10,'#b5d9d8');
 if(s.mode==='bridge'){configureBridgePaint(reduced);box(c,10,150,260,516,'#86506f');box(c,12,152,256,512,'#14111f');c.save();c.translate(12,152);c.scale(256/280,256/280);if(!s.curses.blind)drawGridCells(c,s.bridge.grid,new Set(),28);if(s.bridge.active&&s.bridge.phase==='playing'){paintPiece(c,{...s.bridge.active,y:ghostY(s.bridge)},true);paintPiece(c,s.bridge.active);}c.restore();
 text(c,zh?'留':'HOLD',40,37,10,'#ffdaeb',58);text(c,zh?'下一個':'NEXT',240,37,10,'#ffdaeb',58);
 const preview=(p,x,y)=>{if(!p)return;const cells=cellsOf(p.type,0,0,0);c.save();c.translate(x,y);c.scale(6/28,6/28);paintPiece(c,{...p,rot:0,x:-Math.min(...cells.map(a=>a[0])),y:-Math.min(...cells.map(a=>a[1]))});c.restore();};preview(s.bridge.hold,26,53);s.bridge.queue.slice(0,3).forEach((p,i)=>preview(p,226,49+i*21));
 }else{box(c,12,152,256,340,p.field);box(c,12,152,256,3,p.accent);text(c,translate(lang,names[s.mode]),140,163,12,p.ink);text(c,s.mode==='dating'?`${zh?'好感':'Bond'} ${m.affection}/100 · ${m.chapter+1}/12`:`${m.score}/${m.target} · ${Math.max(0,Math.ceil((m.duration-m.clock)/1000))}s`,140,181,11,p.ink);
 if(drawArcade(c,s,lang,reduced)){}
 else if(s.mode==='dating'){text(c,zh?'劇情育成':'Story mode',140,300,16);}
 else{if(s.mode==='haunted'){box(c,26,205,228,270,'#102733');text(c,zh?'牽手驅散驚嚇':'Hold hands near a ghost',140,215,11);}for(const o of m.objects){if(o.type==='rift'){c.fillStyle=o.age<800?'#ffbc8450':'#ff527850';c.fillRect(o.x-o.r,195,o.r*2,280);c.strokeStyle='#ff9dba';c.beginPath();c.moveTo(o.x-4,200);c.lineTo(o.x+5,300);c.lineTo(o.x-5,400);c.lineTo(o.x,475);c.stroke();}else if(o.type==='blast'){if(s.mode.startsWith('bomb')){const fall=Math.max(0,1-Math.max(0,o.age)/800);heart(c,o.x,o.y-90*fall,1.2,1);box(c,o.x+8,o.y-90*fall-15,3,9,'#f4ca87');gem(c,o.x+11,o.y-90*fall-20,3,o.age%200<100?'#fff2b4':'#ff8c59');}c.strokeStyle=o.age<800?'#ffcd92':'#ff546f';c.lineWidth=3;c.beginPath();c.arc(o.x,o.y,o.r,0,Math.PI*2);c.stroke();text(c,'!',o.x,o.y+5,18);}else if(o.type==='wall'){box(c,14,o.y,Math.max(0,o.x-o.gap/2-14),6,'#ff537d');box(c,o.x+o.gap/2,o.y,Math.max(0,266-o.x-o.gap/2),6,'#ff537d');}else if(o.type==='counter'){gem(c,o.x,o.y,12,'#ffdb87');text(c,'↗',o.x,o.y+4,12,'#49244d');}else if(o.type==='person'){woman(c,o.x,o.y,o.rival>3000?'#cb69d6':'#a4c6ff',o.charm>0,.7);text(c,`${o.charm}/3`,o.x,o.y+29,10);}else if(o.type==='cake'){box(c,o.x-10,o.y-8,20,16,'#ffd7b0');box(c,o.x-10,o.y-9,20,4,'#ff8cb9');}else if(o.type==='ghost'){gem(c,o.x,o.y,20,'#b7edca');text(c,'!',o.x,o.y+5,15,'#362942');}else gem(c,o.x,o.y,o.type==='arrow'?7:10,'#ff78b4');}
 heart(c,m.x,m.y,1,m.invincible>0?.65:1);if(m.reverse>0)text(c,zh?'左右反轉':'REVERSED',140,485,12,'#ffc89d');}
 const hint=instructions[s.mode]||[ATTACKS2.includes(s.mode)?'躲避；近金碎片空白反攻，C 守護':'方向移動躲避預告',ATTACKS2.includes(s.mode)?'Dodge; Space near gold counters; C guards':'Move to dodge warned attacks'];text(c,arcadeHint(s,lang)||translate(lang,hint),140,508,11);if(m.feedbackTime)text(c,translate(lang,{...FEEDBACK,success:['成功','Success'],miss:['錯過','Miss'],seen:['被看見','Spotted'],rival:['被搶走','Rival wins'],guard:['守護','Guard'],reverse:['左右反轉','Reversed'],hit:['受擊','Hit'],counter:['反攻','Counter'],charm:['魅惑中','Charming']}[m.feedback]||['','']),140,523,11,'#ffe1a5');}
 text(c,`HP ${s.hp}/${s.maxHp}`,140,h-38,14);box(c,24,h-25,232,6,'#492f43');box(c,24,h-25,232*s.hp/100,6,s.hp<25?'#ff496b':'#f48ab9');if(s.mode==='bridge'&&s.curses.reverse>0)text(c,zh?'左右反轉':'REVERSED',140,h-10,11,'#ffc690');
}
export function wrapText(c,str,x,y,max,size=13,line=19){const words=/\s/.test(str)?str.split(' '):[...str];c.font=`${size}px "Pixel Latin", "Pixel Hant",sans-serif`;let row='';for(const word of words){const next=row+(row&&words.length<str.length?' ':'')+word;if(c.measureText(next).width>max&&row){text(c,row,x,y,size);y+=line;row=word;}else row=next;}if(row)text(c,row,x,y,size);}
// Battle art is constructed as stepped original-style sprites, not cropped concept art.
function drawFemaleMonster(c,s){
 const h=height(s),rage=appearance(s)==='rage',unit=84,top=14;
 const px=(x,y,w,hh,color)=>box(c,Math.round(x/4)*4,Math.round(y/4)*4,Math.round(w/4)*4,Math.round(hh/4)*4,color);
 const skin=rage?'#eab795':'#f0cab0',shade='#bc8b7f',petal=rage?'#bd4058':'#a44768',gold=rage?'#ffc46d':'#dabb83';
 // One compact female body: one head unit + one torso unit + one leg unit.
 // The native board covers the central body; long wings, rather than stretched arms,
 // surround the board. Story illustrations show the complete three-head silhouette.
 for(const side of[-1,1]){
  for(let i=0;i<9;i++){
   const x=side<0?44+i*8:492-i*8,y=112+i*24;
   px(x,y,24,Math.max(28,h-210-i*36),'#234c57');
   px(x,y,8,Math.max(20,h-246-i*36),'#598b91');
  }
  const armX=side<0?112:424;
  px(armX,top+unit+8,24,36,shade);px(armX+4,top+unit+12,16,32,skin);
  px(armX+(side<0?-8:8),top+unit+40,24,48,skin);
  px(armX+(side<0?-4:4),top+unit+76,20,20,skin);
  px(armX,top+unit+68,24,8,gold);
  for(let finger=0;finger<3;finger++)px(armX+(side<0?-8:12)+finger*4,top+unit+88,4,12,shade);
 }
 px(236,top+unit+28,88,32,skin);
 px(244,top+unit+40,72,32,petal);px(220,top+unit+64,120,20,petal);
 px(236,top+unit*2,36,unit-8,skin);px(288,top+unit*2,36,unit-8,skin);
 px(232,top+unit*3-16,44,16,petal);px(284,top+unit*3-16,44,16,petal);
 // Paired covered organic lobes are the only head; keep the compact female body.
 for(const side of[-1,1]){const x=side<0?203:281;const widths=[36,52,64,72,76,72,64,52,36];for(let i=0;i<widths.length;i++){const w=widths[i];px(x+(76-w)/2,top+i*8,w,8,i<2?shade:petal);}for(let i=0;i<5;i++){px(x+16+i*4,top+12+i*8,8,12,i<3?'#f2a4b8':'#d67899');px(x+48-i*4,top+20+i*8,8,12,'#783656');}px(x+12,top+52,52,4,gold);px(x+20,top+64,36,4,gold);px(x+8,top+24,4,20,skin);px(x+60,top+32,4,16,skin);for(let i=0;i<3;i++)px(x+34+side*i*8,top-4-i*4,12,8,gold);}
 if(rage){for(const [dx,dy]of [[-4,16],[0,28],[-4,40],[4,48],[0,60],[4,72]])px(280+dx,top+dy,4,12,'#ffdf8e');for(const side of[-1,1])for(let i=0;i<3;i++)px(280+side*(88+i*12),top+12+i*16,8,12,'#f18e6c');}

}
function drawBossFace(c,a){const devil=a==='succubus',skin=devil?'#edc4ad':'#f7cfb9',hair=devil?'#74334f':'#aa416b',light=devil?'#bb6587':'#df7f9b';const p=(x,y,w,h,col)=>box(c,x,y,w,h,col);
 // Tall tapered adult feminine face, with separate hair masses and facial planes.
 for(const [x,y,w,h,col]of [[242,12,76,12,hair],[232,24,96,12,hair],[228,36,16,36,hair],[316,36,16,36,hair],[232,70,16,28,hair],[312,70,16,28,hair],[248,26,64,32,skin],[252,58,56,18,skin],[256,76,48,8,skin],[262,84,36,8,skin],[270,88,20,6,skin],[272,94,16,4,skin]])p(x,y,w,h,col);
 for(const [x,y,w,h]of [[242,18,24,8],[238,28,24,8],[246,36,12,8],[264,14,20,8],[286,12,16,8],[302,20,12,8],[312,30,8,12],[234,56,8,32],[318,56,8,32],[240,84,8,10],[312,84,8,10]])p(x,y,w,h,light);
 p(252,40,12,2,'#754653');p(296,40,12,2,'#754653');p(250,48,16,4,'#352b41');p(294,48,16,4,'#352b41');p(252,52,12,6,'#41606b');p(296,52,12,6,'#41606b');p(254,51,3,3,'#fff4e0');p(298,51,3,3,'#fff4e0');p(248,46,4,3,'#352b41');p(308,46,4,3,'#352b41');p(278,61,4,8,'#d49c91');p(276,71,8,2,'#d49c91');p(272,79,16,2,'#9d4564');p(276,82,8,2,'#e899a4');p(254,66,8,3,'#eda2a5');p(298,66,8,3,'#eda2a5');
 if(devil){for(const side of[-1,1]){const x=side<0?228:320;p(x,20,12,16,'#d5ac79');p(x+(side<0?4:-4),8,8,16,'#e6c58e');p(x+(side<0?8:-8),0,4,12,'#f1dba5');}p(258,18,44,4,'#4b314b');p(278,22,4,9,'#f0b783');}else{p(250,0,60,4,'#f7d985');p(244,4,8,8,'#dca76c');p(308,4,8,8,'#dca76c');p(252,12,56,3,'#f7d985');p(246,14,10,5,'#f9e5c0');p(247,16,7,9,'#d8779b');p(250,13,3,12,'#f4b3be');}
}
export function drawFrame(c,s){const h=height(s),a=appearance(s);c.clearRect(0,0,560,h);if(['monster','rage'].includes(a)){drawFemaleMonster(c,s);return;}const devil=a==='succubus',dark=devil?'#41536c':'#a46985',light=devil?'#e7bbaa':'#efa2b8',pixel=(x,y,w,hh,col)=>box(c,Math.round(x/4)*4,Math.round(y/4)*4,Math.round(w/4)*4,Math.round(hh/4)*4,col);
 for(const side of[-1,1]){const x=side<0?110:422;for(let i=0;i<7;i++)pixel(side<0?x-i*7:x+i*7,126+i*18,32,30,i%2?dark:light);pixel(x,190,28,h-285,dark);pixel(x-4,220,12,h-315,'#dbad82');for(const y of[250,h-150]){pixel(side<0?116:420,y,28,16,light);pixel(side<0?126:414,y+12,16,24,'#f5b9c8');for(let finger=0;finger<3;finger++)pixel(side<0?132-finger*4:416+finger*4,y+8+finger*4,4,12,'#a15b84');}for(let i=0;i<6;i++){const xx=side<0?58+i*13:490-i*13;pixel(xx,87+i*10,20,68-i*5,devil?'#263c51':'#e0e4ed');pixel(xx,87+i*10,8,45-i*4,devil?'#52808b':'#b9d3da');}}
 drawBossFace(c,a);
}
export const stories={intro:['丘比特','Cupid','intro'], 'first-defeat':['金弓低垂','The bow falls','cupid'],transform:['慾望化身','Desire incarnate','transform'],mid:['破弓怪物','The broken bow','monster'],'rage-story':['心碎狂暴','Heartbreak','rage'],bond:['放下金箭','Put down the arrow','recovery'],collapse:['狂暴再起','Rage returns','rage'],body:['斷弓本體','The broken-bow spirit','body'],good:['自由的選擇','A choice freely made','good'],bad:['色慾崩壞','Desire collapses','bad'],lost:['心碎敗北','Heartbroken','lost'],result:['試玩回合完成','Preview round complete','cupid']};
