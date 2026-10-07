import { createCrazy, advanceCrazy, hitCrazyBoss, skipCrazyCinematic, startPrideEscape } from './crazy.mjs?v=1.2.26';
import { PRIDE_MINIGAME_IDS } from './minigames/index.mjs';
import { PRIDE_ATTACKS } from './pride-attacks.mjs';
import { PRIDE_SECOND_ATTACKS, PRIDE_ROTATING_GAMES } from './pride-second.mjs';
import { DEMO_PROFILES } from './pride-demo-ui.mjs';

export const PRIDE_PREVIEW_SCENARIOS = Object.freeze([
  { id: 'full', label: '完整挑戰', group: 'Boss 戰', form: 1 },
  { id: 'mirror-red', label: '一面紅鏡 · Bridge', group: 'Boss 戰', form: 2 },
  { id: 'mirror-two', label: '兩面鏡 · Bridge', group: 'Boss 戰', form: 2 },
  { id: 'escape', label: '逃離傲慢之塔 · 100 層', group: '關鍵挑戰', form: 2, mode:'pride-escape' },
  { id: 'mirror', label: '三面鏡 · Bridge', group: 'Boss 戰', form: 2 },
  { id: 'escape-story', label: '敗北 → 崩塔 → 逃離', group: '關鍵挑戰', form: 2 },
  { id: 'duel', label: '鏡中對決', group: '關鍵挑戰', form: 1 },
  { id: 'tower', label: '巴別塔 · 半血挑戰', group: '關鍵挑戰', form: 2 },
  { id: 'red', label: '紅鏡決戰 · 彈幕 Boss', group: '關鍵挑戰', form: 2 },
  ...[...PRIDE_MINIGAME_IDS, ...PRIDE_ATTACKS].map(mode => ({ id: mode, mode, form: 1, group: '鏡宮之王', label: DEMO_PROFILES[mode][0] })),
  ...[...PRIDE_ROTATING_GAMES, ...PRIDE_SECOND_ATTACKS].map(mode => ({ id: 'second:' + mode, mode, form: 2, group: '鏡之化身', label: DEMO_PROFILES[mode][0] })),
].map(Object.freeze));

// Preview starts follow real encounter initialization, without writing unlocks.
export function createPridePreview(scenarioId = 'full', options = {}) {
  const scenario = PRIDE_PREVIEW_SCENARIOS.find(value => value.id === scenarioId);
  if (!scenario) throw new RangeError('Unknown Pride preview: ' + scenarioId);
  const s = createCrazy({ ...options, sin: 'pride' });
  s.preview = true;
  if (scenario.id === 'full') return s;
  s.cutscene.time = 1000;
  skipCrazyCinematic(s);
  if (scenario.form === 2) {
    s.prideDuelCleared = true;
    s.cutscene = { kind: 'transform', time: 1000, duration: 4500 };
    skipCrazyCinematic(s);
  }
  if(scenario.id==='escape'){s.bossHp=0;s.mirrorWorld.mirrors.forEach(v=>{v.hp=0;v.broken=true;});startPrideEscape(s);}
  else if(scenario.id==='escape-story'){s.bossHp=1;s.damageLeft=1;s.mirrorWorld.puzzleCleared=true;s.mirrorWorld.redEntered=true;s.mirrorWorld.redCleared=true;hitCrazyBoss(s,1);}
  else if(scenario.id==='mirror-two'){s.bossHp=s.bossMaxHp*.45;s.mirrorWorld.puzzleCleared=true;s.mirrorWorld.mirrors[1].broken=true;s.mirrorWorld.mirrors[1].hp=0;}
  else if (scenario.id === 'duel') {
    s.bossHp = s.bossMaxHp * .2 + 1;
    s.damageLeft = 1;
    hitCrazyBoss(s, 1);
  } else if (scenario.id === 'tower' || scenario.id === 'red' || scenario.id === 'mirror-red') {
    if (scenario.id !== 'tower') {s.mirrorWorld.puzzleCleared = true;s.mirrorWorld.mirrors[1].broken=true;s.mirrorWorld.mirrors[1].hp=0;}
    s.bossHp = s.bossMaxHp * (scenario.id === 'tower' ? .5 : .15) + 1;
    s.damageLeft = 1;
    hitCrazyBoss(s, 1);
    if(scenario.id==='mirror-red')advanceCrazy(s,'bridge');
  } else if (scenario.mode) advanceCrazy(s, scenario.mode);
  s.transition = null;
  s.held.clear();
  s.actionReady = true;
  return s;
}

export function prideControls(mode) {
  const labels = {
    'pride-mirror-match': ['揀牌', null],
    'pride-crown-choice': ['揀冠', null],
    'pride-lianliankan': ['揀牌', null],
    'pride-escape': ['下降', null],
    'pride-doodle': ['射擊', null],
    'pride-gaze': [null, null],
    'pride-crown-shock': ['跳躍', null],
    'pride-mirror': ['射擊', null],
    'pride-mirror-duel': ['封鏡', null],
    'pride-tower': ['放層', null],
    'pride-shard-puzzle': ['轉片', '提示'],
    'pride-truth-trial': ['揀鏡', '重看'],
    'pride-mirror-maze': ['轉鏡', '驗證'],
    'pride-nested': ['轉片', '驗證'],
    'pride-shard-storm': ['中', null],
    'pride-kaleidoscope': ['選擇', null],
    'pride-gaze-up': ['反攻', null],
    'pride-reflect-up': ['射擊', null],
    'pride-crown-up': ['跳躍', null],
    'pride-red-survival': ['集火', '精準'],
  };
  const pair = labels[mode];
  return pair ? { action: pair[0], alt: pair[1] } : null;
}

export function mountPridePreview(onStart, onPick) {
  const section = document.createElement('section');
  section.id = 'pride-preview';
  section.innerHTML = `<form class="pride-preview-card">
    <small>CRAZY · PRIDE</small><h1>傲慢試玩</h1><p>直接挑戰鏡宮之王。</p>
    <label>試玩內容<select id="pride-preview-scenario"></select></label>
    <label>難度<select id="pride-preview-difficulty"><option value="normal">Normal</option><option value="hard">Hard</option></select></label>
    <button id="pride-preview-start" type="submit">開始試玩</button>
    <p class="pride-preview-note">☰ 可換關或重試。已接入傲慢專屬音樂。</p>
  </form>`;
  const select = section.querySelector('#pride-preview-scenario');
  const groups = new Map();
  for (const scenario of PRIDE_PREVIEW_SCENARIOS) {
    if (!groups.has(scenario.group)) {
      const group = document.createElement('optgroup'); group.label = scenario.group;
      groups.set(scenario.group, group); select.append(group);
    }
    const option = document.createElement('option'); option.value = scenario.id; option.textContent = scenario.label;
    groups.get(scenario.group).append(option);
  }
  section.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); section.hidden = true;
    onStart(select.value, section.querySelector('#pride-preview-difficulty').value);
  });
  document.body.append(section);
  for (const [id, label, run] of [
    ['pride-preview-again', '重試這一關', () => section.querySelector('form').requestSubmit()],
    ['pride-preview-pick', '換一關', onPick],
  ]) {
    const button = document.createElement('button'); button.id = id; button.type = 'button'; button.textContent = label;
    button.addEventListener('click', run);
    document.querySelector('#play-menu-options').insertBefore(button, document.querySelector('#play-menu-quit'));
  }
  return { show() { section.hidden = false; }, hide() { section.hidden = true; } };
}
