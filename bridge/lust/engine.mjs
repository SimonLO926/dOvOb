import {createGame,startGame,tryMove,tryRotate,hold,hardDrop,lockActive,fits,pump,flipGrid,feverActive} from '../logic.mjs';
import {BRIDGE_REPEAT} from '../bridge-controls.mjs';
import {ARCADE,initArcade,arcadeInput,arcadePoint,arcadeUpdate} from './arcade.mjs';
import {choiceStep} from './dating-story.mjs';
export const BOSS_HP={first:1800,firstHard:2200,second:2200,secondHard:3000};
export const datesComplete=s=>(s.form===1?GAMES1:GAMES2).every(id=>s.played[s.form].includes(id));
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const GAMES1=['archery','piano','claw','tennis','feeding'];
export const GAMES2=['cinema','wheel','volley','haunted','dance'];
export const ATTACKS1=['wave','bomb','arrows'];
export const ATTACKS2=['wave-up','bomb-up','arrows-up','ribbon','echo','shatter'];
export const names={bridge:['Bridge','Bridge'],archery:['丘比特射箭','Cupid archery'],piano:['粉紅琴鍵','Rose piano'],claw:['心願夾娃娃','Wish catcher'],tennis:['網球約會','Tennis date'],feeding:['餐廳餵食','Dinner date'],cinema:['電影院之吻','Cinema kiss'],wheel:['摩天輪之吻','Ferris wheel kiss'],volley:['海灘排球','Beach volley'],haunted:['鬼屋約會','Haunted date'],dance:['雙人舞步','Duet dance'],wave:['魅惑波','Charm wave'],bomb:['愛心炸彈','Heart bombs'],arrows:['丘比特連射','Cupid volley'],'wave-up':['魅惑漩渦','Charm spiral'],'bomb-up':['碎心連爆','Broken-heart blasts'],'arrows-up':['追心六連射','Six seeking arrows'],ribbon:['緋紅束縛','Scarlet ribbons'],echo:['影子回聲','Shadow echo'],shatter:['斷弓裂隙','Broken-bow rift'],charm:['電眼巡遊','Charm promenade'],dating:['心碎育成','Mending a shadow']};
export const SCENARIOS=[{id:'full',label:['完整挑戰','Full encounter']},{id:'first-bridge',mode:'bridge',form:1,label:['丘比特 · Bridge','Cupid · Bridge']},{id:'second-bridge',mode:'bridge',form:2,label:['慾望化身 · Bridge','Incarnation · Bridge']},{id:'monster',mode:'bridge',form:2,ratio:.5,label:['破弓怪物 · Bridge','Broken bow · Bridge']},{id:'rage',mode:'bridge',form:2,ratio:.2,bad:true,label:['心碎狂暴 · Bridge','Heartbreak · Bridge']},...[...GAMES1,...ATTACKS1,'charm'].map(mode=>({id:mode,mode,form:1,single:true,label:names[mode]})),...[...GAMES2,...ATTACKS2,'dating'].map(mode=>({id:mode,mode,form:2,single:true,label:names[mode]})),...['first-defeat','transform','mid','rage-story','body','good','bad','lost'].map(story=>({id:'story:'+story,story,form:2,label:['插圖 · '+story,'Story · '+story]}))];
export const DIALOGUE=[
{line:['影子：「你只喜歡我閃耀的樣子？」','Shadow: “Do you only like me when I shine?”'],options:[['聽她說完','Listen to her'],['答應永遠完美','Promise perfection'],['要求她微笑','Demand a smile']],values:[9,-3,-7]},
{line:['她說今天不想出門。','She does not want to go out today.'],options:[['陪她安靜坐著','Sit quietly together'],['替她決定行程','Choose for her'],['催她趕快走','Hurry her along']],values:[8,-4,-7]},
{line:['丘比特想送出昂貴禮物。','Cupid wants to buy an expensive gift.'],options:[['先問她想要甚麼','Ask what she wants'],['用禮物換承諾','Buy a promise'],['炫耀金弓','Show off the bow']],values:[8,-6,-4]},
{line:['她想保留自己的名字。','She wants to keep her own name.'],options:[['尊重她的名字','Respect her name'],['叫她我的影子','Call her my shadow'],['假裝沒有聽見','Ignore her']],values:[9,-8,-4]},
{line:['雨停了，她仍在哭。','The rain stops; she is still crying.'],options:[['問她需要甚麼','Ask what she needs'],['叫她別哭','Tell her to stop'],['說這不重要','Dismiss it']],values:[8,-5,-7]},
{line:['她邀你一起修補斷弓。','She invites you to mend the bow.'],options:[['一起慢慢修好','Mend it together'],['全由你代勞','Do it all for her'],['用新弓取代','Replace it']],values:[9,-2,-4]},
{line:['影子需要一些獨處時間。','The shadow needs time alone.'],options:[['約好稍後再見','Agree to meet later'],['不准離開','Forbid her to leave'],['不停追問','Keep questioning']],values:[8,-8,-5]},
{line:['她的夢想與你的不同。','Her dream differs from yours.'],options:[['支持她的選擇','Support her choice'],['說服她放棄','Make her give up'],['只談你的夢','Talk only about yours']],values:[9,-7,-4]},
{line:['丘比特承認害怕被遺忘。','Cupid admits fearing being forgotten.'],options:[['坦白自己的不安','Share your feelings'],['控制她的行蹤','Control her movements'],['強裝無所謂','Pretend not to care']],values:[8,-8,-3]},
{line:['她問：「愛需要命令嗎？」','She asks: “Does love need orders?”'],options:[['愛需要自由','Love needs freedom'],['愛必須服從','Love requires obedience'],['愛是一場交易','Love is a bargain']],values:[9,-9,-7]},
{line:['金色箭矢可以強迫她留下。','A golden arrow could force her to stay.'],options:[['放下箭矢','Put the arrow down'],['拉滿弓弦','Draw the bow'],['藏起箭矢','Hide the arrow']],values:[10,-12,-5]},
{line:['她走到黎明的雲橋。','She reaches the cloud bridge at dawn.'],options:[['讓她自己選擇','Let her choose'],['攔住去路','Block her path'],['要求回報','Demand repayment']],values:[10,-12,-8]}
];
function newBridge(random){const g=createGame({mode:'marathon',random});startGame(g,'marathon');return g;}
export function createLust({scenario='full',difficulty='normal',random=Math.random,preview=true,filming=false}={}){
 if(!preview&&scenario!=='full')throw new RangeError('A campaign requires the full encounter');
 const pick=SCENARIOS.find(p=>p.id===scenario);if(!pick)throw Error('Unknown scenario');const form=pick.form||1,max=form===1?BOSS_HP[difficulty==='hard'?'firstHard':'first']:BOSS_HP[difficulty==='hard'?'secondHard':'second'];
 const s={sin:'lust',preview,filming,lustCleared:false,difficulty,random,scenario:pick,form,hp:100,maxHp:100,bossHp:max*(pick.ratio??1),bossMaxHp:max,bridge:newBridge(random),held:new Set(),scene:null,over:false,won:false,elapsed:0,cycle:0,firstTrial:false,datingDone:!!pick.bad,bad:!!pick.bad,midSeen:pick.ratio<=.5,rageSeen:!!pick.bad,retry:0,catDue:18000,catTime:0,notice:'',noticeTime:0,curses:{reverse:0,blind:0,rush:0,norotate:0},stats:{damage:0,damageTaken:0,healed:0},bag:[],attackBag:[]};
 s.played={1:[],2:[]};s.sceneHistory=[];startRound(s,pick.mode||'bridge');if(scenario==='full')scene(s,'intro');if(pick.story)scene(s,pick.story,0);return s;
}
export function appearance(s){return s.form===1?'cupid':s.bad||s.bossHp/s.bossMaxHp<=.2?'rage':s.bossHp/s.bossMaxHp<=.5?'monster':'succubus';}
export function scene(s,kind,duration=4000){s.scene={kind,time:0,duration};s.sceneHistory.push(kind);s.held.clear();}
export function heal(s,amount){if(s.over||amount<=0)return;const n=Math.min(100-s.hp,Math.max(1,Math.floor(amount*(s.difficulty==='hard'?.5:1))));s.hp+=n;s.stats.healed+=n;}
export function hurt(s,n){if(s.over||s.scene||n<=0)return;n=Math.min(s.hp,Math.round(n*(s.difficulty==='hard'?1.25:1)));s.hp=Math.max(0,s.hp-n);s.stats.damageTaken+=n;if(!s.hp){s.over=true;s.won=false;scene(s,'lost',0);}}
export function hitBoss(s,n){if(s.scene||s.over||n<=0)return;const floor=s.form===1?(!s.firstTrial?s.bossMaxHp*.2:!datesComplete(s)?s.bossMaxHp*.08:0):!s.datingDone?s.bossMaxHp*(s.midSeen?.2:.5):0;const damage=Math.max(0,Math.min(n,s.bossHp-floor));s.bossHp-=damage;s.stats.damage+=damage;checkGates(s);
}
function checkGates(s){if(s.scene||s.over)return;const floor=s.bossMaxHp*.2;
 if(s.form===1&&s.bossHp<=floor&&datesComplete(s)&&!s.firstTrial&&!s.retry&&s.mode!=='charm')startRound(s,'charm');
 else if(s.bossHp<=0)scene(s,s.form===1?'first-defeat':'body');
 else if(s.form===2&&!s.datingDone&&!s.midSeen&&s.bossHp<=s.bossMaxHp*.5){s.midSeen=true;scene(s,'mid');}
 else if(s.form===2&&!s.datingDone&&datesComplete(s)&&s.bossHp<=floor&&!s.retry){s.rageSeen=true;scene(s,'rage-story');}
}
export function startRound(s,id){s.mode=id;s.held.clear();s.round={id,clock:0,duration:id==='bridge'?24000:id==='dating'?600000:id==='archery'?45000:id==='charm'?45000:ATTACKS1.includes(id)||ATTACKS2.includes(id)?16000:30000,x:140,y:442,aim:140,score:0,target:id==='wheel'?3:id==='archery'?10:id==='charm'?6:['piano','dance'].includes(id)?16:8,cooldown:0,invincible:0,objects:[],spawn:0,done:false,success:false,feedback:'',feedbackTime:0,selected:0,chapter:0,affection:25,choiceOrder:null,fall:0,lock:0,resolve:0,horizontalDir:0,horizontalMs:0,horizontalRepeating:false,horizontalSource:'keyboard',reverse:0,phase:'move',clawY:190,cycle:-1,ball:{x:140,y:235,vx:64,vy:100},swing:0,partnerHelp:0,combo:0};
 if(id==='dating')Object.assign(s.round,{choiceOrder:shuffle(s),step:0,storyClock:0,epilogue:false,epilogueStep:0,history:[],forced:false});
 if(s.bad&&ATTACKS2.includes(id))s.round.duration=18000;
 initArcade(s);

}
function shuffle(s){const a=[0,1,2];for(let i=2;i>0;i--){const j=Math.floor(s.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const arcadeHooks=s=>({progress:()=>progress(s),hurt:n=>hurt(s,n),finish:ok=>finishRound(s,ok)});
function feedback(m,key){m.feedback=key;m.feedbackTime=1200;}
function progress(s){const m=s.round;m.score++;if(s.difficulty!=='hard'||!['piano','dance'].includes(m.id)||m.score%2===0)heal(s,2);feedback(m,'success');if(m.score>=m.target&&!['piano','dance','haunted','charm'].includes(m.id))finishRound(s,true);}
export function finishRound(s,success){const m=s.round;if(m.done||s.over||s.scene)return;m.done=true;m.success=success;s.held.clear();
 if(m.id==='dating') {s.datingDone=true;s.bad=!success;if(success){heal(s,18);s.bossHp=Math.min(s.bossHp,s.bossMaxHp*.1);scene(s,'bond');}else{s.bossHp=s.bossMaxHp*.5;scene(s,'collapse');}return;}
 if((s.form===1?GAMES1:GAMES2).includes(m.id)&&!s.played[s.form].includes(m.id))s.played[s.form].push(m.id);
 if(m.id==='charm'){if(success){s.firstTrial=true;heal(s,12);hitBoss(s,150);}else{hurt(s,35);s.retry=20000;} }
 else if(success){heal(s,8);hitBoss(s,ATTACKS2.includes(m.id)||ATTACKS1.includes(m.id)?95:135);}else hurt(s,12);
 checkGates(s);if(s.scene||s.over||s.round!==m)return;if((s.scenario.single&&!s.datingDone)||(m.id==='charm'&&!success))scene(s,'result');else nextRound(s);
}
function nextRound(s){s.cycle++;if(s.datingDone){if(!s.bad||s.cycle%2===0){startRound(s,'bridge');return;}if(!s.attackBag.length)s.attackBag=[...ATTACKS2];startRound(s,s.attackBag.shift());return;}
 if(s.cycle%2===0){startRound(s,'bridge');return;}const attacks=s.cycle%4===3,key=attacks?'attackBag':'bag';if(!s[key].length){const list=attacks?s.form===1?ATTACKS1:ATTACKS2:s.form===1?GAMES1:GAMES2;s[key]=shuffleList(s,list);}if(!attacks){const pending=(s.form===1?GAMES1:GAMES2).filter(id=>!s.played[s.form].includes(id));if(pending.length){const id=s[key].find(id=>pending.includes(id))||pending[0];s[key]=s[key].filter(v=>v!==id);startRound(s,id);return;}}startRound(s,s[key].shift());}
function shuffleList(s,list){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(s.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function continueScene(s){if(!s.scene||s.scene.time<450||s.scenario.story)return;const kind=s.scene.kind;s.scene=null;if(kind==='intro')return;if(kind==='first-defeat'){s.form=2;s.bag=[];s.attackBag=[];s.cycle=0;s.bossMaxHp=BOSS_HP[s.difficulty==='hard'?'secondHard':'second'];s.bossHp=s.bossMaxHp;heal(s,18);scene(s,'transform');}else if(kind==='transform'||kind==='mid'||kind==='bond'||kind==='collapse')startRound(s,'bridge');else if(kind==='rage-story')startRound(s,'dating');else if(kind==='body'){s.over=true;s.won=true;s.lustCleared=s.scenario.id==='full'&&s.form===2&&s.bossHp===0&&s.firstTrial&&s.datingDone&&GAMES1.every(id=>s.played[1].includes(id))&&GAMES2.every(id=>s.played[2].includes(id));scene(s,s.bad?'bad':'good',0);}else if(kind==='result'){if(s.scenario.single)startRound(s,'bridge');else nextRound(s);} }
export function input(s,key,down=true,source='keyboard'){
 const m=s.round;if(!down){s.held.delete(key);if(!s.scene&&!s.over&&ARCADE.includes(s.mode))arcadeInput(s,key,false,arcadeHooks(s));if((key==='left'&&m.horizontalDir===-1)||(key==='right'&&m.horizontalDir===1)){m.horizontalDir=0;m.horizontalMs=0;}return;}
 if(s.scene){if(key==='action')continueScene(s);return;}if(s.over||s.held.has(key))return;s.held.add(key);
 if(s.mode==='bridge'){const g=s.bridge;if(g.phase!=='playing')return;if(key==='left'||key==='right'){m.horizontalDir=key==='left'?-1:1;m.horizontalMs=0;m.horizontalRepeating=false;m.horizontalSource=source;tryMove(g,m.horizontalDir*(s.curses.reverse>0?-1:1),0);}if(key==='up'&&s.curses.norotate<=0)tryRotate(g,1);if(key==='rotateLeft'&&s.curses.norotate<=0)tryRotate(g,-1);if(key==='action')hardDrop(g);if(key==='alt')hold(g);if(key==='down')tryMove(g,0,1);return;}
 if(s.mode==='dating'){if(m.step===choiceStep(m.chapter)&&!m.epilogue){if(key==='up'||key==='left')m.selected=(m.selected+2)%3;if(key==='down'||key==='right')m.selected=(m.selected+1)%3;}if(key==='action')advanceDating(s);return;}
 if(arcadeInput(s,key,true,arcadeHooks(s)))return;
 if(key==='alt'&&['haunted',...ATTACKS2].includes(s.mode)){if(m.cooldown<=0){m.invincible=600;m.cooldown=2200;feedback(m,'guard');}return;}
 if(key!=='action'||m.cooldown>0)return;m.cooldown=300;
 if(s.mode==='charm'){const person=m.objects.find(o=>o.type==='person'&&Math.hypot(o.x-m.x,o.y-m.y)<65);if(person){person.charm+=1;if(person.charm>=3){m.objects.splice(m.objects.indexOf(person),1);progress(s);}feedback(m,'charm');}}
 else if(ATTACKS2.includes(s.mode)){const counter=m.objects.find(o=>o.type==='counter'&&Math.hypot(o.x-m.x,o.y-m.y)<70);if(counter){m.objects.splice(m.objects.indexOf(counter),1);hitBoss(s,45);feedback(m,'counter');}}
}
export function advanceDating(s){const m=s.round;if(s.scene||s.over||m.id!=='dating'||m.done)return;
 if(m.epilogue){if(m.epilogueStep<3)m.epilogueStep++;else finishRound(s,m.affection>=70&&!m.forced);return;}
 const at=choiceStep(m.chapter);if(m.step===at){choose(s,m.selected);return;}if(m.step<at+4){m.step++;return;}
 m.chapter++;m.step=0;m.selected=0;if(m.chapter>=DIALOGUE.length){m.epilogue=true;m.epilogueStep=0;}else m.choiceOrder=shuffle(s);
}
export function choose(s,index){const m=s.round;if(s.scene||s.over||m.id!=='dating'||m.done||m.epilogue||m.step!==choiceStep(m.chapter)||!Number.isInteger(index)||index<0||index>2)return;
 const d=DIALOGUE[m.chapter],choice=m.choiceOrder[index];m.lastChoice=choice;m.history.push({chapter:m.chapter,choice});m.affection=clamp(m.affection+d.values[choice],0,100);if(m.chapter===10&&choice===1)m.forced=true;m.step=choiceStep(m.chapter)+1;m.selected=0;heal(s,2);
}
export function point(s,x,y){if(s.scene||s.over)return;const m=s.round;if(s.mode==='dating'){advanceDating(s);return;}if(arcadePoint(s,x,y,arcadeHooks(s)))return;m.x=clamp(x,26,254);m.y=clamp(y,190,475);input(s,'action');input(s,'action',false);}
function bridgeUpdate(s,dt){const m=s.round,g=s.bridge;m.clock+=dt;
 if(g.phase==='over'){hurt(s,s.difficulty==='hard'?16:12);s.bridge=newBridge(s.random);return;}
 if(g.phase==='resolving'){m.resolve-=dt;if(m.resolve<=0){const e=pump(g);m.resolve=e?.type==='clear'?140:35;if(e?.type==='clear'){const n=e.rows?.length||1;hitBoss(s,26*n+Math.min(12,(e.combo||0)*2));heal(s,2+2*n);if(s.scene||s.round!==m)return;for(const cell of e.cells||[]){if(!feverActive(g)&&cell.curse&&cell.cause!=='blast'&&cell.curse in s.curses)s.curses[cell.curse]=cell.curse==='blind'?2200:6000;}
 const reward=[...(e.cells||[]),...(e.blasts||[])].find(c=>c.reward)?.reward;if(reward&&!s.datingDone)m.reward=reward;else if(reward)heal(s,6);g.pendingReward=null;}
 if(e?.type==='flip')flipGrid(g);if(e?.type==='reward'&&!s.datingDone)m.reward=e.reward;if(m.reward&&g.phase==='playing'){const choices=s.form===1?GAMES1:GAMES2;startRound(s,choices[{breakout:0,bbtan:1,pinball:2,sand:3}[m.reward]??0]);return;}}}
 else if(g.active){if(m.horizontalDir&&s.held.has(m.horizontalDir<0?'left':'right')){m.horizontalMs+=dt;const interval=m.horizontalSource==='touch'?BRIDGE_REPEAT.touchInterval:m.horizontalRepeating?BRIDGE_REPEAT.keyboardInterval:BRIDGE_REPEAT.keyboardDelay;if(m.horizontalMs>=interval){m.horizontalMs-=interval;m.horizontalRepeating=true;tryMove(g,m.horizontalDir*(s.curses.reverse>0?-1:1),0);}}
 m.fall+=dt;const fall=s.held.has('down')||s.curses.rush>0?100:s.difficulty==='hard'?430:550;if(m.fall>=fall){m.fall=0;tryMove(g,0,1);}if(!fits(g.grid,g.active.type,g.active.rot,g.active.x,g.active.y+1,g)){m.lock+=dt;if(m.lock>=380){lockActive(g);m.lock=0;}}else m.lock=0;}
 if((!s.datingDone||s.bad)&&m.clock>=m.duration&&!m.reward){if(s.scenario.single&&!s.datingDone)scene(s,'result');else nextRound(s);}
}
export function update(s,dt){dt=clamp(dt,0,50);if(s.scene){s.scene.time+=dt;if(s.scene.duration&&s.scene.time>=s.scene.duration)continueScene(s);return;}if(s.over)return;
 s.elapsed+=dt;s.catTime=Math.max(0,s.catTime-dt);s.catDue-=dt;if(s.catDue<=0){s.catDue=18000;s.catTime=2000;heal(s,10);}for(const k in s.curses)s.curses[k]=Math.max(0,s.curses[k]-dt);
 if(s.retry){s.retry=Math.max(0,s.retry-dt);if(!s.retry){startRound(s,s.form===1?'charm':'dating');return;}}
 if(s.mode==='bridge'){bridgeUpdate(s,dt);return;}const m=s.round;if(s.mode==='dating'){m.storyClock+=dt;if(!m.epilogue&&m.step===choiceStep(m.chapter))m.clock+=dt;}else m.clock+=dt;m.cooldown=Math.max(0,m.cooldown-dt);m.invincible=Math.max(0,m.invincible-dt);m.feedbackTime=Math.max(0,m.feedbackTime-dt);m.reverse=Math.max(0,m.reverse-dt);m.swing=Math.max(0,m.swing-dt);m.partnerHelp=Math.max(0,m.partnerHelp-dt);
 if(arcadeUpdate(s,dt,arcadeHooks(s))){if(s.round===m&&!s.scene&&!s.over&&m.clock>=m.duration)finishRound(s,m.score>=m.target);return;}
 const move=(s.held.has('right')?1:0)-(s.held.has('left')?1:0),vertical=(s.held.has('down')?1:0)-(s.held.has('up')?1:0);m.x=clamp(m.x+move*dt*.16*(m.reverse>0?-1:1),26,254);m.y=clamp(m.y+vertical*dt*.16,190,475);m.aim=clamp(m.aim+move*dt*.17,28,252);
 const attack=ATTACKS1.includes(s.mode)||ATTACKS2.includes(s.mode),up=s.mode.endsWith('-up');
 if(s.mode==='charm'||attack){m.spawn-=dt;if(m.spawn<=0){m.spawn=attack?(up?650:1000)*(s.bad?.78:1):1500;
 if(s.mode==='charm')m.objects.push({x:40+s.random()*200,y:180,type:'person',charm:0,rival:0});
 else if(s.mode.startsWith('bomb')){m.objects.push({x:m.x,y:m.y,type:'blast',age:0,r:up?38:30});}
 else if(s.mode==='shatter'){m.objects.push({x:m.x,y:200,type:'rift',age:0,r:18});}
 else if(s.mode==='echo'){m.objects.push({x:m.x,y:m.y,type:'blast',age:-600,r:26});}
 else if(s.mode.startsWith('arrows')){const dx=m.x-140,dy=m.y-178,len=Math.hypot(dx,dy);for(let i=0;i<(up?6:3);i++)m.objects.push({x:140,y:178,vx:dx/len*.19+(i-1)*.025,vy:dy/len*.19,type:'arrow',delay:i*120});}
 else if(s.mode==='ribbon'){const gap=35+s.random()*210;m.objects.push({x:gap,y:180,type:'wall',gap:52});}
 else{for(let i=0;i<5;i++)m.objects.push({x:35+i*50,y:180,vx:Math.sin(i+m.clock/1000)*.025,vy:.075,type:'orb'});}
 if(ATTACKS2.includes(s.mode)&&m.clock>1000)m.objects.push({x:45+s.random()*190,y:280,type:'counter',age:0});}}
 for(const o of [...m.objects]){if(o.type==='blast'||o.type==='rift'){o.age+=dt;if(o.age>1050){if((o.type==='rift'?Math.abs(o.x-m.x)<o.r:Math.hypot(o.x-m.x,o.y-m.y)<o.r)&&m.invincible<=0){hurt(s,7);m.invincible=700;}m.objects.splice(m.objects.indexOf(o),1);}continue;}if(o.type==='counter'){o.age+=dt;if(o.age>2500)m.objects.splice(m.objects.indexOf(o),1);continue;}
 if(o.delay>0){o.delay-=dt;continue;}o.y+=(o.vy??(['note','cake'].includes(o.type)?.15:.065))*dt;o.x+=(o.vx||0)*dt;
 if(o.type==='person'){o.rival+=dt;if(o.rival>4800){m.objects.splice(m.objects.indexOf(o),1);feedback(m,'rival');hurt(s,3);}continue;}
 if(attack&&m.invincible<=0&&Math.abs(o.y-m.y)<16&&(o.type==='wall'?Math.abs(o.x-m.x)>o.gap/2:Math.abs(o.x-m.x)<16)){hurt(s,6);m.invincible=700;if(o.type==='orb')m.reverse=3000;feedback(m,o.type==='orb'?'reverse':'hit');}
 if(o.y>480){m.objects.splice(m.objects.indexOf(o),1);if(['note','cake','ghost'].includes(o.type)){hurt(s,3);feedback(m,'miss');}}}
 if(s.scene||s.over||s.round!==m)return;
 if(s.mode==='dating'&&m.clock>=m.duration)finishRound(s,false);
 else if(m.clock>=m.duration)finishRound(s,attack||m.score>=m.target);
}
