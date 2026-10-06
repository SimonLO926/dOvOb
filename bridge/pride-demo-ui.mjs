export const DEMO_PROFILES = {
  'pride-tower': ['巴別塔 · 半血試煉', '#ffe0a2', '#19436c', '等吊臂對準，點畫面或 空白鍵 放層。每層打指定鏡一下；疊夠隨機 10–20 層碎鏡。只在半血劇情出現。'],
  'pride-doodle': ['爬塔', '#9af0c1', '#16583c', '心心自動跳！方向鍵或點左右移動，空白鍵 向上射擊幻影；跳上宮殿頂過關。'],
  'pride-mirror-match': ['鏡像配對', '#78caff', '#164c80', '左右各翻一張，找相同圖案。點卡牌，或方向鍵選牌、空白鍵 翻牌。'],
  'pride-crown-choice': ['加冕抉擇', '#ffda75', '#735018', '比較上方原石，選中央冰藍寶石闊度相同的皇冠。點皇冠，或方向鍵＋空白鍵。'],
  'pride-lianliankan': ['連連看', '#7de7ad', '#16583c', '選兩張相同牌；連線不可穿過其他牌，最多轉兩個彎。點牌，或方向鍵＋空白鍵。'],
  'pride-shard-puzzle': ['碎鏡拼圖', '#ffa7d7', '#633453', '點碎片或 空白鍵 旋轉，拼回完整鏡子。依目標修復鏡子過關；C／Shift 提示。'],
  'pride-truth-trial': ['真假鏡', '#89b6ff', '#193666', '記住心心反光完整的真鏡；假鏡有細小斷紋。追蹤加速的 3–5 次換位。點真鏡或 空白鍵 選擇，依目標答中過關；C／Shift 重看。'],
  'pride-mirror-maze': ['鏡面迷宮', '#6aefd5', '#15564c', '點斜鏡或 空白鍵 轉向，用 C／Shift 發光；光線收集三粒水晶再到右邊出口，完成兩關。'],
  'pride-gaze': ['王之蔑視', '#ff5178', '#76274d', '方向鍵或拖動心心。雙眼追蹤、鎖定後掃射；離開金色射線。'],
  'pride-mirror': ['鏡像反射', '#87dfff', '#17596f', '方向鍵或拖動避彈，空白鍵 射擊黃色箭頭指定鏡；來不及破鏡就躲開反擊碎片。'],
  'pride-crown-shock': ['加冕衝擊', '#ffdc73', '#705219', '方向鍵或拖動離開衝擊中心，避開波紋，或 空白鍵 跳過衝擊。'],
  'pride-mirror-duel': ['鏡像決鬥', '#d5acff', '#57317b', '踩亮鏡座後離開，等慢兩秒的鏡像進圈，按空白鍵封鏡。封印三次過關；躲開鏡像碎片。'],
  'pride-kaleidoscope': ['鏡像萬花筒', '#a2afff', '#343e79', '觀察原圖的金點位置，找出九幅圖中相同的一幅。點圖或方向鍵＋空白鍵 揀選；找到後，再按 空白鍵 限時反攻。'],
  'pride-shard-storm': ['碎鏡風暴', '#ff9290', '#762c32', '三軌碎片落到金線時按 左／空白鍵／右。best／good 反射反攻，錯過或按錯叫 damage 並扣血；手機用左中右。'],
  'pride-nested': ['鏡中鏡', '#dc9fff', '#643579', '考策略！點格或方向鍵＋空白鍵 轉導光片，串連兩個封印再到出口；入口、封印與出口每輪換位。C／Shift 發光成功後，空白鍵 限時釋放反攻。'],
  'pride-gaze-up': ['王之蔑視・改', '#ffa580', '#773a2b', '鏡面從不同位置掃射：鎖定更快、射線更闊、攻勢更密。鎖定後離開射線。'],
  'pride-reflect-up': ['鏡像反射・改', '#8df0de', '#225e59', '原版反射加強：空白鍵 射指定鏡，反射彈更快更密；移動避彈，避開反擊碎片。'],
  'pride-crown-up': ['加冕衝擊・改', '#ffedac', '#78652a', '原版衝擊加強：波紋更多、更快、更闊。避波紋，或 空白鍵 跳過。']
};
export function setupDemoUI({canvas, context: c, game, getState, sendAction, resetClock}) {
  const touch = ('ontouchstart' in window), tutorial = document.querySelector('#tutorial');
  const controls = document.querySelector('.touch-controls'), pointers = new Map();
  controls.hidden = !touch; document.body.classList.toggle('is-touch', touch);
  let timer;
  function fitStage() {
    const stage=document.querySelector('.stage');
    if(!touch || !stage?.getBoundingClientRect)return;
    const height=window.visualViewport?.height || window.innerHeight;
    const available=height-(stage.getBoundingClientRect().top+(window.scrollY||0))-controls.getBoundingClientRect().height-16;
    if(Number.isFinite(available))document.documentElement.style.setProperty('--stage-height',`${Math.max(180,Math.min(560,available))}px`);
  }
  window.addEventListener('resize',fitStage);
  window.visualViewport?.addEventListener('resize',fitStage);
  if(window.ResizeObserver){const observer=new window.ResizeObserver(fitStage);for(const selector of ['nav','.banner','#status','.touch-controls']){const element=document.querySelector(selector);if(element)observer.observe(element);}}

  function releaseControls() {
    getState()?.held?.clear(); pointers.clear();
    controls.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', 'false'));
  }
  function dismiss() { clearTimeout(timer); tutorial.hidden = true; resetClock(); canvas.focus({preventScroll:true}); }
  document.querySelector('#skip').addEventListener('click', dismiss);
  function present() {
    const [title, accent, theme, hint] = DEMO_PROFILES[game.value];
    document.documentElement.style.setProperty('--accent', '#d6b36e'); document.documentElement.style.setProperty('--theme', '#321b43');
    document.body.classList.toggle('upgraded', game.value.endsWith('-up'));
    document.querySelector('#game-title').textContent = title;
    document.querySelector('#tutorial-title').textContent = title + ' · 玩法';
    const instructions=hint;
    document.querySelector('#instructions').textContent = instructions;
    document.querySelector('#control-hint').textContent = touch ? '方向掣 · 動作／保留 · 亦可點畫面' : '方向鍵 · 空白鍵動作 · C／Shift 副動作';
    canvas.setAttribute('aria-label', title + '：' + instructions);
    releaseControls(); fitStage(); clearTimeout(timer); tutorial.hidden = false; timer = setTimeout(dismiss, 3000);
  }
  for (const button of controls.querySelectorAll('button')) {
    button.addEventListener('pointerdown', e => {
      if(e.button!==0 || !tutorial.hidden || getState()?.over)return;
      e.preventDefault();button.setPointerCapture(e.pointerId);
      const action=button.dataset.action;pointers.set(e.pointerId,action);getState().held?.add(action);sendAction(action);button.setAttribute('aria-pressed','true');
    });
    const release=e=>{const action=pointers.get(e.pointerId);pointers.delete(e.pointerId);if(action && ![...pointers.values()].includes(action)){getState()?.held?.delete(action);button.setAttribute('aria-pressed','false');}};
    for(const type of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,release);
  }
  window.addEventListener('blur',releaseControls);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)releaseControls();resetClock();});
  function decorate() {
    c.save(); const g=c.createLinearGradient(0,0,280,560);g.addColorStop(0,DEMO_PROFILES[game.value][2]);g.addColorStop(1,'#101421');
    c.globalCompositeOperation='destination-over';c.fillStyle=g;c.fillRect(0,0,280,560);c.restore();
  }
  return {present, decorate, playing:()=>tutorial.hidden};
}
export const DEMO_KEYS = {ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down',Enter:'action',' ':'action',c:'alt',C:'alt',Shift:'alt'};
