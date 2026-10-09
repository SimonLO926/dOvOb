import { createGame, startGame, tryMove, tryRotate, hold, hardDrop, lockActive, fits, pump, flipGrid, feverActive } from '../logic.mjs';
import { endStroke } from './lore-games.mjs';
import { BRIDGE_REPEAT } from '../bridge-controls.mjs';
import { ATTACKS, FIRST_GAMES, SECOND_GAMES, FIRST_ATTACKS, SECOND_ATTACKS, NAMES, createRound, roundInput, roundPoint, updateRound } from './rounds.mjs';
import { clamp, shuffled } from './geometry.mjs';

export const ENVY_RULES = Object.freeze({ firstHp:1000, secondNormal:1300, secondHard:1750, chaseThreshold:.2, chaseDuration:60000, retryDuration:20000 });
export const SCENARIOS = Object.freeze([
  { id:'full', label:'完整挑戰', form:1 },
  { id:'first-bridge', label:'窺視之子 · Bridge', form:1, mode:'bridge' },
  { id:'dragon', label:'多眼龍 · Bridge', form:2, mode:'bridge', ratio:1 },
  { id:'cyclops', label:'獨眼觸手 · Bridge', form:2, mode:'bridge', ratio:.48 },
  { id:'rage', label:'狂暴巨瞳 · Bridge', form:2, mode:'bridge', ratio:.2 },
  ...FIRST_GAMES.map(mode=>({ id:mode, label:NAMES[mode], form:1, mode, single:true })),
  ...FIRST_ATTACKS.map(mode=>({ id:mode, label:NAMES[mode], form:1, mode, single:true })),
  ...SECOND_GAMES.map(mode=>({ id:`second:${mode}`, label:`多眼龍 · ${NAMES[mode]}`, form:2, mode, single:true })),
  ...SECOND_ATTACKS.map(mode=>({ id:mode, label:NAMES[mode], form:2, mode, single:true })),
  { id:'chase', label:'逃離巨瞳 · 限時 60 秒', form:2, mode:'chase', ratio:.2 },
  { id:'final-bridge', label:'逃離後 · Bridge 反攻', form:2, mode:'bridge', ratio:.1, finalBridge:true },
  { id:'capture', label:'捕捉綠色本體 · 隨機迷宮', form:2, mode:'capture', ratio:0 },
  { id:'show-sr', label:'SR 卡牌演出 · 固定示範', form:2, mode:'pack', single:true, previewRare:'SR' },
  { id:'show-sar', label:'SAR 卡牌演出 · 固定示範', form:2, mode:'pack', single:true, previewRare:'SAR' },
]);
export function appearance(s) {
  if (s.mode==='capture'||s.won) return 'worm';
  if (s.form===1) return 'child';
  return s.bossHp/s.bossMaxHp>.5?'dragon':s.bossHp/s.bossMaxHp>.2?'cyclops':'rage';
}
export function bossName(s) { return s.form===1?'窺視之子':appearance(s)==='worm'?'嫉妒本體':'嫉妒化身'; }
function newBridge(random) { const game=createGame({mode:'marathon',random});startGame(game,'marathon');return game; }
export function createEnvy({ scenario='full', difficulty='normal', random=Math.random, preview=true, filming=false }={}) {
  if(!preview&&scenario!=='full')throw new RangeError('Envy campaign requires the full encounter');
  const pick=SCENARIOS.find(value=>value.id===scenario);
  if(!pick)throw new RangeError('Unknown Envy preview: '+scenario);
  const max=pick.form===1?1000:difficulty==='hard'?1750:1300;
  const s={sin:'envy',preview,filming,scenario:pick,random,difficulty:difficulty==='hard'?'hard':'normal',form:pick.form,
    hp:100,maxHp:100,bossHp:max*(pick.ratio??1),bossMaxHp:max,mode:'bridge',round:null,bridge:newBridge(random),
    elapsed:0,held:new Set(),notice:'',noticeTime:0,events:[],rounds:0,bag:[],attackBag:[],cycle:0,
    scene:scenario==='full'?{kind:'intro',time:0,duration:2300}:null,over:false,won:false,collection:[],
    pendingShield:false,pendingEnrage:false,attackMultiplier:1,vulnerable:1,slowTime:0,catDue:14000,catTime:0,
    curses:{reverse:0,blind:0,rush:0,norotate:0},bridgeSpecialDry:0,bridgeSpecialIndex:0,
    chaseEntered:false,chaseCleared:false,chaseRetry:0,finalBridge:false,bossDefeated:false,captured:false,stats:{damage:0,damageTaken:0,healed:0,counters:0,rounds:0},lastResult:null};
  if(pick.mode==='chase'||pick.ratio===.2){s.chaseEntered=true;s.chaseRetry=pick.mode==='chase'?0:20000;}
  if(pick.mode==='capture'){s.chaseCleared=true;s.bossHp=0;s.bossDefeated=true;s.won=true;}
  if(pick.finalBridge){s.chaseEntered=true;s.chaseCleared=true;s.finalBridge=true;}
  startRound(s,pick.mode||'bridge');
  if(pick.previewRare){s.round.revealed={rarity:pick.previewRare,variant:4};s.round.revealTime=1100;}
  return s;
}
export function notice(s,label,amount=0){s.notice=label;s.noticeAmount=amount;s.noticeTime=1800;s.events.push({label,amount});}
export function heal(s,amount){
  if(s.over||amount<=0)return;
  const value=Math.min(s.maxHp-s.hp,Math.max(1,s.difficulty==='hard'?Math.floor(amount*.5):Math.round(amount)));
  s.hp+=value;s.stats.healed+=value;if(value)notice(s,`回復 +${value}`);
}
export function hurt(s,amount,attack=false){
  if(s.over||amount<=0)return;
  const value=Math.max(1,Math.round(amount*(attack?s.attackMultiplier:1)));
  const lost=Math.min(s.hp,value);s.hp-=lost;s.stats.damageTaken+=lost;notice(s,`受到傷害 −${lost}`);
  if(s.hp<=0){s.over=true;s.won=false;s.scene={kind:'lost',time:0};s.held.clear();}
}
export function hitBoss(s,amount){
  if(s.over||s.scene||s.mode==='capture'||amount<=0)return;
  const floor=s.form===2&&!s.chaseCleared?s.bossMaxHp*.2:0;
  const damage=Math.min(Math.round(amount*s.vulnerable),Math.max(0,s.bossHp-floor));
  s.bossHp=Math.max(floor,s.bossHp-damage);s.stats.damage+=damage;if(damage)notice(s,'反攻成功');
  if(s.form===1&&s.bossHp<=0){s.scene={kind:'first-defeat',time:0,duration:4000};s.held.clear();}
  else if(s.form===2&&s.chaseCleared&&s.bossHp<=0){
    s.bossDefeated=true;s.finalBridge=false;s.scene={kind:'dragon-defeat',time:0,duration:4000};s.held.clear();
  }
  else if(s.form===2&&s.bossHp<=floor&&!s.chaseEntered){
    s.chaseEntered=true;s.scene={kind:'rage',time:0,duration:1900};s.held.clear();
  }
}
export function startRound(s,id){
  s.mode=id;s.held.clear();s.attackMultiplier=1;s.vulnerable=1;
  if(ATTACKS.includes(id)){
    if(s.pendingShield){s.attackMultiplier*=.5;s.pendingShield=false;notice(s,'塔羅護佑');}
    if(s.pendingEnrage){s.attackMultiplier*=1.5;s.vulnerable=1.3;s.pendingEnrage=false;notice(s,'嫉妒暴走 · 反攻機會');}
  }
  if(id==='bridge')s.round={id,clock:0,duration:24000,done:false,effects:[],fall:0,lock:0,resolve:0,repeat:0,horizontalDir:0,horizontalMs:0,horizontalRepeating:false,horizontalSource:'keyboard',damage:0,feedback:''};
  else s.round=createRound(id,{random:s.random,difficulty:s.difficulty,form:s.form});
}
function nextRound(s){
  s.cycle++;
  if(s.cycle%2===0){startRound(s,'bridge');return;}
  const attack=s.cycle%4===3,bagKey=attack?'attackBag':'bag';
  if(!s[bagKey].length)s[bagKey]=shuffled(attack?s.form===1?FIRST_ATTACKS:SECOND_ATTACKS:s.form===1?FIRST_GAMES:SECOND_GAMES,s.random);
  startRound(s,s[bagKey].shift());
}
function drainEffects(s,m){
  const events=m.effects.splice(0);
  for(const e of events){
    if(e.kind==='heal')heal(s,e.amount);
    else if(e.kind==='hurt')hurt(s,e.amount,ATTACKS.includes(m.id));
    else if(e.kind==='boss')hitBoss(s,e.amount);
    else if(e.kind==='shield'){s.pendingShield=true;notice(s,'下次攻擊減半');}
    else if(e.kind==='enrage'){s.pendingEnrage=true;notice(s,'秘藏令嫉妒暴走');}
    else if(e.kind==='slow'){s.slowTime=e.amount;if(e.amount)notice(s,'移速被偷走');}
    else if(e.kind==='collect')s.collection.push({...e.amount});
    else if(e.kind==='chaseClear'){
      s.chaseCleared=true;s.chaseRetry=0;s.finalBridge=true;s.bossHp=Math.round(s.bossMaxHp*.1);
      startRound(s,'bridge');notice(s,'逃出視線 · 消行擊破巨瞳');
    }else if(e.kind==='chaseFail'){
      hurt(s,e.amount);if(!s.over){s.chaseRetry=20000;startRound(s,'bridge');notice(s,'巨瞳仍在窺視 · 重新蓄力');}
    }else if(e.kind==='capture'){
      s.over=true;s.won=true;s.captured=true;s.scene={kind:'victory',time:0};s.held.clear();
    }
  }
}
export function continueScene(s){
  if(!s.scene||s.scene.time<700)return;
  const kind=s.scene.kind;
  if(kind==='first-defeat'){
    s.form=2;s.bossMaxHp=s.difficulty==='hard'?1750:1300;s.bossHp=s.bossMaxHp;s.bag=[];s.attackBag=[];s.cycle=0;
    s.scene={kind:'transform',time:0,duration:2800};heal(s,16);
  }else if(kind==='dragon-defeat')s.scene={kind:'worm-reveal',time:0,duration:2300};
  else if(kind==='round-result'){s.scene=null;startRound(s,'bridge');}
  else if(kind==='room-secret'){s.scene=null;if(s.scenario.single)startRound(s,'bridge');else nextRound(s);}
  else if(kind==='intro'||kind==='transform'){s.scene=null;startRound(s,'bridge');}
  else if(kind==='rage'){s.scene=null;startRound(s,'chase');}
  else if(kind==='worm-reveal'){s.scene=null;startRound(s,'capture');}
}
export function envyInput(s,action,down=true,source='keyboard'){
  if(!down){
    s.held.delete(action);if(action==='action')endStroke(s.round);
    const m=s.round;
    if(s.mode==='bridge'&&((action==='left'&&m.horizontalDir===-1)||(action==='right'&&m.horizontalDir===1))){m.horizontalDir=0;m.horizontalMs=0;m.horizontalRepeating=false;}
    return;
  }
  if(s.scene){if(action==='action')continueScene(s);return;}
  if(s.over)return;
  if(s.held.has(action))return;s.held.add(action);
  if(s.mode==='bridge'){
    const g=s.bridge;if(g.phase!=='playing')return;
    if(action==='left'||action==='right'){
      const m=s.round;m.horizontalDir=action==='left'?-1:1;m.horizontalMs=0;m.horizontalRepeating=false;m.horizontalSource=source;
      tryMove(g,m.horizontalDir*(s.curses.reverse>0?-1:1),0);
    }
    if(action==='up'&&s.curses.norotate<=0)tryRotate(g,1);if(action==='rotateLeft'&&s.curses.norotate<=0)tryRotate(g,-1);
    if(action==='action')hardDrop(g);if(action==='alt')hold(g);
    if(action==='down')tryMove(g,0,1);
  }else roundInput(s.round,action);
  drainEffects(s,s.round);
}
export function envyPoint(s,x,y){if(s.over||s.scene)return;roundPoint(s.round,x,y);drainEffects(s,s.round);}
export const BRIDGE_REWARDS=Object.freeze({breakout:'difference',bbtan:'rolling',pinball:'tarot',sand:'pack'});
export const CURSE_NAMES=Object.freeze({reverse:'左右反轉',blind:'黑幕',rush:'急落',norotate:'禁止旋轉',nohold:'封印保留',garbage:'垃圾上升'});
function applyCurses(s,cells){
  if(feverActive(s.bridge))return;
  for(const cell of cells||[])if(cell.curse&&cell.cause!=='blast'){
    const name=cell.curse;
    if(name in s.curses)s.curses[name]=Math.max(s.curses[name],{reverse:10000,blind:2200,rush:6000,norotate:6500}[name]);
    notice(s,`懲罰 · ${CURSE_NAMES[name]||name}`);
  }
}
function bridgeUpdate(s,dt){
  const m=s.round,g=s.bridge;m.clock+=dt;
  for(const name of Object.keys(s.curses))s.curses[name]=Math.max(0,s.curses[name]-dt);
  if(g.phase==='over'){hurt(s,s.difficulty==='hard'?15:12);s.bridge=newBridge(s.random);return;}
  if(g.phase==='resolving'){
    m.resolve-=dt;if(m.resolve<=0){
      const event=pump(g);m.resolve=event?.type==='clear'?140:35;
      if(s.finalBridge)g.pendingReward=null;
      if(event?.type==='clear'){
        const counter=20*(event.rows?.length||1)+Math.min(12,event.combo*2);
        const damage=s.finalBridge?counter:Math.min(120-m.damage,counter);m.damage+=damage;hitBoss(s,damage);heal(s,2+2*(event.rows?.length||1));
        if(s.scene)return;
        applyCurses(s,event.cells);
        const reward=[...(event.cells||[]),...(event.blasts||[])].find(v=>v.reward)?.reward;
        if(reward&&s.finalBridge){g.pendingReward=null;notice(s,'獎勵 · 回復');heal(s,6);}
        else if(reward){
          // Envy routes cleared rewards regardless of the original arcade's remaining-brick requirement.
          g.pendingReward=null;m.reward=reward;notice(s,'獎勵 · 開啟嫉妒挑戰');
        }
      }
      if(event?.type==='flip')flipGrid(g);
      if(event?.type==='reward'&&!s.finalBridge)m.reward=event.reward;
      if(m.reward&&g.phase==='playing'){
        const id=s.form===1?{breakout:'difference',bbtan:'rolling',pinball:'tarot',sand:'tarot'}[m.reward]:{breakout:'territory',bbtan:'rolling',pinball:'pellets',sand:'pack'}[m.reward];
        startRound(s,id);return;
      }
      if(event?.type==='spawn'){
        const special=['R','X','D','A','C','G','F','B'].includes(g.active?.type);
        s.bridgeSpecialDry=special?0:s.bridgeSpecialDry+1;
        // A preview-only drought guard; Marathon and existing Boss rates are untouched.
        if(s.bridgeSpecialDry>=5&&g.queue[0]){
          const type=s.bridgeSpecialIndex++%2?'C':['R','X','D','A'][Math.floor(s.random()*4)];
          g.queue[0]={type,bombIndex:type==='X'?0:null,curse:type==='C'?['reverse','rush','norotate'][Math.floor(s.random()*3)]:null,curseIndex:null};s.bridgeSpecialDry=0;
        }
      }
    }
  }else if(g.active){
    if(m.horizontalDir&&s.held.has(m.horizontalDir<0?'left':'right')){
      m.horizontalMs+=dt;
      const touch=m.horizontalSource==='touch',interval=touch?BRIDGE_REPEAT.touchInterval:m.horizontalRepeating?BRIDGE_REPEAT.keyboardInterval:BRIDGE_REPEAT.keyboardDelay;
      if(m.horizontalMs>=interval){m.horizontalMs=touch?m.horizontalMs-interval:0;m.horizontalRepeating=true;tryMove(g,m.horizontalDir*(s.curses.reverse>0?-1:1),0);}
    }else {m.horizontalMs=0;m.horizontalRepeating=false;}
    m.repeat+=dt;
    if(m.repeat>=100){m.repeat=0;if(s.held.has('down'))tryMove(g,0,1);}
    m.fall+=dt;const fall=s.curses.rush>0?100:s.difficulty==='hard'?430:550;
    if(m.fall>=fall){m.fall=0;tryMove(g,0,1);}
    if(!fits(g.grid,g.active.type,g.active.rot,g.active.x,g.active.y+1,g)){m.lock+=dt;if(m.lock>=380){lockActive(g);m.lock=0;}}else m.lock=0;
  }
  if(!s.finalBridge&&m.clock>=m.duration&&!m.reward){m.done=true;m.success=g.phase!=='over';hitBoss(s,15);heal(s,3);}
}
export function updateEnvy(s,dt){
  dt=clamp(dt,0,50);s.events=[];
  if(s.scene){
    s.scene.time+=dt;
    if(s.scene.duration&&s.scene.time>=s.scene.duration)continueScene(s);
    return;
  }
  if(s.over)return;s.elapsed+=dt;s.noticeTime=Math.max(0,s.noticeTime-dt);s.slowTime=Math.max(0,s.slowTime-dt);s.catTime=Math.max(0,s.catTime-dt);
  if(s.chaseRetry>0){s.chaseRetry=Math.max(0,s.chaseRetry-dt);if(!s.chaseRetry){startRound(s,'chase');return;}}
  if(!['chase','capture'].includes(s.mode)){
    s.catDue-=dt;if(s.catDue<=0){s.catDue=18000;s.catTime=2400;heal(s,12);notice(s,'貓送來魚乾');}
  }
  const m=s.round;
  if(s.mode==='bridge')bridgeUpdate(s,dt);else updateRound(m,dt,s.held,s.slowTime>0?.7:1);
  drainEffects(s,m);
  if(s.scene||s.over||s.round!==m||!m.done)return;
  s.stats.rounds++;s.stats.counters+=m.counters||0;s.lastResult={id:m.id,success:m.success,time:m.clock};
  if(m.id==='eye-room'&&m.success){s.scene={kind:'room-secret',time:0,duration:4000};s.held.clear();}
  else if(s.scenario.single){s.scene={kind:'round-result',time:0,duration:4000};s.held.clear();}
  else if(s.mode==='capture'){s.scene={kind:'capture-retry',time:0};s.held.clear();}
  else nextRound(s);
}
export function retryCapture(s){if(s.scene?.kind==='capture-retry'){s.scene=null;startRound(s,'capture');}}
export function finishEnvy(s){if(s.bossDefeated){s.over=true;s.won=true;s.scene={kind:'victory',time:0};s.held.clear();}}
