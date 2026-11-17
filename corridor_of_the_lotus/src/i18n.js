/**
 * Unified 4-language i18n and theme-mode storage module for Corridor of the Lotus.
 * Supported languages: zh-Hant (default), zh-Hans, en, ja.
 */

import { SPEAKER_BILINGUAL_META, resolveSpeakerId } from './portrait-atlas.js';
import { CHAPTER_STORIES, CODEX_ENTRIES, FINAL_ENDINGS, LORE_DIALOGUES } from './story-codex-data.js';
import {
  CHAPTER_STAGE_META_ZH_HANS,
  CHAPTER_STORIES_ZH_HANS,
  CODEX_ENTRIES_ZH_HANS,
  FINAL_ENDINGS_ZH_HANS,
  LORE_DIALOGUES_ZH_HANS,
  SUBTITLE_TIMELINES_ZH_HANS
} from './locales-story-zh-hans.js';
import {
  CHAPTER_STAGE_META_EN,
  CHAPTER_STORIES_EN,
  CODEX_ENTRIES_EN,
  FINAL_ENDINGS_EN,
  LORE_DIALOGUES_EN,
  SUBTITLE_TIMELINES_EN
} from './locales-story-en.js';
import {
  CHAPTER_STAGE_META_JA,
  CHAPTER_STORIES_JA,
  CODEX_ENTRIES_JA,
  FINAL_ENDINGS_JA,
  LORE_DIALOGUES_JA,
  SUBTITLE_TIMELINES_JA
} from './locales-story-ja.js';

export const SUPPORTED_LANGS = Object.freeze(['zh-Hant', 'zh-Hans', 'en', 'ja']);

export const STORAGE_KEYS = Object.freeze({
  bgMode: 'lotus_bg_mode_v1',
  lang: 'lotus_lang_v1'
});

export const LANG_OPTIONS = Object.freeze([
  { id: 'zh-Hant', short: '繁中', nativeLabel: '繁體中文', subtitle: 'Traditional Chinese · 預設' },
  { id: 'zh-Hans', short: '简中', nativeLabel: '简体中文', subtitle: 'Simplified Chinese' },
  { id: 'en', short: 'EN', nativeLabel: 'English', subtitle: 'International English' },
  { id: 'ja', short: '日本語', nativeLabel: '日本語', subtitle: 'Japanese · ニホンゴ' }
]);

export function normalizeLang(lang) {
  return SUPPORTED_LANGS.includes(lang) ? lang : 'zh-Hant';
}

export function normalizeBgMode(mode) {
  return mode === 'night' ? 'night' : 'day';
}

export const SPEAKER_META_BY_LANG = Object.freeze({
  'zh-Hant': {
    sofia: { name: '盧曉晴', subLabel: 'SOFIA LOU · 2026' },
    sofia_astral: { name: '金光虛影', subLabel: 'ESPECTRO ASTRAL' },
    afonso: { name: '阿方索', subLabel: 'AFONSO FERREIRA · 1622' },
    ryan: { name: '盧辰', subLabel: 'RYAN LOU · ZERO-7' },
    zero7: { name: 'Zero-7', subLabel: 'AGENTE ZERO-7' },
    ajan: { name: '阿珍 / 林海珍', subLabel: 'A-JAN · LIN HAIZHEN' },
    old_man: { name: '白髮老人', subLabel: 'ANCIÃO 05:53' },
    luzhisi: { name: '盧日寺 / 日寺使徒', subLabel: 'LOU YAT-ZI' },
    corvo: { name: '黑烏鴉', subLabel: 'CORVO · AGENT C-01' },
    mother: { name: '盧母', subLabel: 'MÃE LOU · RESIDÊNCIA LOU' },
    liang9: { name: '梁氏後人・梁九', subLabel: 'LIANG IX' },
    couple_1622: { name: '洛維＆施迪', subLabel: 'LOVEL & SADIE · 1622' },
    couple_2026: { name: '西米露＆加利', subLabel: 'SAGO & GARY · 2026' },
    couple_2077: { name: 'K＆N', subLabel: 'K & N · 2077' },
    narrator: { name: '鏡海旁白', subLabel: 'CRÓNICA DE MACAU' }
  },
  'zh-Hans': {
    sofia: { name: '卢晓晴', subLabel: 'SOFIA LOU · 2026' },
    sofia_astral: { name: '金光虚影', subLabel: 'ESPECTRO ASTRAL' },
    afonso: { name: '阿方索', subLabel: 'AFONSO FERREIRA · 1622' },
    ryan: { name: '卢辰', subLabel: 'RYAN LOU · ZERO-7' },
    zero7: { name: 'Zero-7', subLabel: 'AGENTE ZERO-7' },
    ajan: { name: '阿珍 / 林海珍', subLabel: 'A-JAN · LIN HAIZHEN' },
    old_man: { name: '白发老人', subLabel: 'ANCIÃO 05:53' },
    luzhisi: { name: '卢日寺 / 日寺使徒', subLabel: 'LOU YAT-ZI' },
    corvo: { name: '黑乌鸦', subLabel: 'CORVO · AGENT C-01' },
    mother: { name: '卢母', subLabel: 'MÃE LOU · RESIDÊNCIA LOU' },
    liang9: { name: '梁氏后人・梁九', subLabel: 'LIANG IX' },
    couple_1622: { name: '洛维＆施迪', subLabel: 'LOVEL & SADIE · 1622' },
    couple_2026: { name: '西米露＆加利', subLabel: 'SAGO & GARY · 2026' },
    couple_2077: { name: 'K＆N', subLabel: 'K & N · 2077' },
    narrator: { name: '镜海旁白', subLabel: 'CRÓNICA DE MACAU' }
  },
  en: {
    sofia: { name: 'Sofia Lou', subLabel: 'Pui Ching · 2026' },
    sofia_astral: { name: 'Astral Silhouette', subLabel: 'Golden Time Resonance' },
    afonso: { name: 'Afonso Ferreira', subLabel: 'Vanguard Knight · 1622' },
    ryan: { name: 'Ryan Lou', subLabel: 'Zero-7 Augment · 2077/2026' },
    zero7: { name: 'Agent Zero-7', subLabel: 'Masked Blade' },
    ajan: { name: 'Lin Haizhen (A-Jan)', subLabel: 'Barra Shore · 1622' },
    old_man: { name: 'White-Haired Elder', subLabel: 'Keeper of 05:53' },
    luzhisi: { name: 'Luzhisi (Lou Yat-Zi)', subLabel: '11th Gen · Sun-Temple' },
    corvo: { name: 'Corvo (Agent C-01)', subLabel: 'Sentinel Commander' },
    mother: { name: 'Mother Lou', subLabel: 'Lou Residence · 2026' },
    liang9: { name: 'Liang IX', subLabel: 'Drunk Dragon Heir · 2026' },
    couple_1622: { name: 'Lovel & Sadie', subLabel: 'Barra Bench · 1622' },
    couple_2026: { name: 'Sago & Gary', subLabel: 'Park Bench · 2026' },
    couple_2077: { name: 'K & N', subLabel: 'Skyhub Overlook · 2077' },
    narrator: { name: 'Macau Chronicle', subLabel: 'Corridor Narrator' }
  },
  ja: {
    sofia: { name: '盧暁晴（ソフィア）', subLabel: 'SOFIA LOU · 2026' },
    sofia_astral: { name: '金光の幻影', subLabel: 'ESPECTRO ASTRAL' },
    afonso: { name: 'アフォンソ', subLabel: 'AFONSO FERREIRA · 1622' },
    ryan: { name: '盧辰（ライアン）', subLabel: 'RYAN LOU · ZERO-7' },
    zero7: { name: 'Zero-7', subLabel: 'AGENTE ZERO-7' },
    ajan: { name: '阿珍 / 林海珍', subLabel: 'A-JAN · 1622' },
    old_man: { name: '白髪の老人', subLabel: 'ANCIÃO 05:53' },
    luzhisi: { name: '盧日寺 / 日寺使徒', subLabel: 'LOU YAT-ZI' },
    corvo: { name: '烏鴉（コルヴォ）', subLabel: 'CORVO · AGENT C-01' },
    mother: { name: '盧母（母上）', subLabel: 'MÃE LOU · 2026' },
    liang9: { name: '梁氏の子孫・梁九', subLabel: 'LIANG IX · 2026' },
    couple_1622: { name: 'ロヴェル＆セイディ', subLabel: 'LOVEL & SADIE · 1622' },
    couple_2026: { name: '西米露＆加利', subLabel: 'SAGO & GARY · 2026' },
    couple_2077: { name: 'K＆N', subLabel: 'K & N · 2077' },
    narrator: { name: '鏡海ナレーション', subLabel: 'CRÓNICA DE MACAU' }
  }
});

const ACTOR_NAMES_BY_LANG = Object.freeze({
  'zh-Hant': { sofia: '盧曉晴', afonso: '阿方索', ryan: '盧辰' },
  'zh-Hans': { sofia: '卢晓晴', afonso: '阿方索', ryan: '卢辰' },
  en: { sofia: 'Sofia Lou', afonso: 'Afonso', ryan: 'Ryan Lou' },
  ja: { sofia: '盧暁晴', afonso: 'アフォンソ', ryan: '盧辰' }
});

const PHASE_LABELS_BY_LANG = Object.freeze({
  'zh-Hant': {
    compass_convergence: '星環歸位',
    temporal_freeze: '靜止晨昏',
    twilight_vigil: '雙蓮守望',
    triad_ignition: '三紀燃起',
    tripartite_merge: '三代同體',
    eternal_vigil: '永恆不夜',
    heaven_ignition: '天環點火',
    made_in_heaven_acceleration: '《天堂製造》時間加速',
    singularity_whiteout: '17:53 純白奇點',
    new_world_dawn_554: '05:54 新世界清晨'
  },
  'zh-Hans': {
    compass_convergence: '星环归位',
    temporal_freeze: '静止晨昏',
    twilight_vigil: '双莲守望',
    triad_ignition: '三纪燃起',
    tripartite_merge: '三代同体',
    eternal_vigil: '永恒不夜',
    heaven_ignition: '天环点火',
    made_in_heaven_acceleration: '《天堂制造》时间加速',
    singularity_whiteout: '17:53 纯白奇点',
    new_world_dawn_554: '05:54 新世界清晨'
  },
  en: {
    compass_convergence: 'PHASE I · COMPASS CONVERGENCE',
    temporal_freeze: 'PHASE II · ETERNAL DUSK',
    twilight_vigil: 'PHASE III · LOTUS VIGIL',
    triad_ignition: 'PHASE I · TRI-ERA IGNITION',
    tripartite_merge: 'PHASE II · TRIPARTITE MERGE',
    eternal_vigil: 'PHASE III · GOLDEN DOME',
    heaven_ignition: 'PHASE I · HEAVEN RINGS',
    made_in_heaven_acceleration: 'PHASE II · MADE IN HEAVEN',
    singularity_whiteout: 'PHASE III · 17:53 SINGULARITY',
    new_world_dawn_554: 'PHASE IV · 05:54 NEW DAWN'
  },
  ja: {
    compass_convergence: '星環帰位',
    temporal_freeze: '静止の薄明',
    twilight_vigil: '双蓮の守護',
    triad_ignition: '三紀点火',
    tripartite_merge: '三代同体',
    eternal_vigil: '永遠の不夜城',
    heaven_ignition: '天環点火',
    made_in_heaven_acceleration: '「天国への加速」',
    singularity_whiteout: '17:53 純白特異点',
    new_world_dawn_554: '05:54 新世界の夜明け'
  }
});

export const UI_STRINGS = Object.freeze({
  'zh-Hant': {
    documentTitle: '蓮島迴廊 · Corridor of the Lotus',
    titleOverlayAria: '蓮島迴廊主標題畫面',
    titleMain: '蓮島迴廊',
    titleSub: 'CORRIDOR OF THE LOTUS · 鏡海三紀',
    titleStart: '✦ 啟程入廊',
    titleAtlas: '✦ 星圖選關',
    titleCodex: '📜 記憶圖鑑',
    titleSoundOn: '音效',
    titleSoundMuted: '靜音',
    titleBgDay: '☀ 日間',
    titleBgNight: '☽ 黑夜',
    titleBgDayTitle: '切換至黑夜星空背景模式',
    titleBgNightTitle: '切換回日間粉彩背景模式',
    titleLangAria: '切換遊戲語言',
    chapterPillTitle: '點擊查看線索提示',
    btnHomeTitle: '返回標題星圖',
    btnHomeLabel: '標題',
    btnChaptersTitle: '星圖選關',
    btnChaptersMain: '星圖',
    btnChaptersSub: '選關',
    btnCodexTitle: '記憶圖鑑',
    btnCodexLabel: '圖鑑',
    btnHintTitle: '線索提示',
    btnHintLabel: '提示',
    btnRotLTitle: '逆時針旋轉視角 (Q / ←)',
    btnRotRTitle: '順時針旋轉視角 (E / →)',
    btnActorCycleTitle: '切換角色',
    btnActorCycleLabel: '切換',
    btnTurretTitle: '旋轉視角機關轉盤',
    btnTurretLabel: '旋轉轉盤',
    btnSoundTitle: '開關音效',
    btnBgTitleDay: '切換至黑夜模式',
    btnBgTitleNight: '切換回日間模式',
    btnBgLabelDay: '日間',
    btnBgLabelNight: '黑夜',
    btnLangTitle: '語言設定（繁中／简中／EN／日本語）',
    compassKicker: '青花羅盤 · COMPASS',
    alignReady: '光影交匯',
    alignAligned: '視錯覺對齊',
    alignExploring: '探索視角中',
    bridgeHint: '✨ 視錯覺接軌！點擊發光方塊前行（Q/E 亦可旋轉）',
    clearStageBanner: '✦ 本重迴廊已通達，可邁向下一區域',
    clearChapterBanner: '✦ 六角星陣已圓滿共鳴',
    btnNextStage: '下一幕 →',
    btnNextChapter: '下一紀 →',
    btnFinalChoice: '抉擇終局 →',
    dlgPortraitAlt: '人物水彩肖像',
    dlgNext: '繼續 ▸',
    dlgFinish: '完成 ✦',
    closeAria: '關閉',
    atlasModalTitle: '✦ 蓮島星圖選關 · 十二紀二十九重迴廊',
    codexModalTitle: '📜 記憶圖鑑 · 蓮島三紀見聞錄',
    endingModalTitle: '✶ 第十二紀終局祭壇 · HEXAGRAM LOTUS ALTAR',
    muralModalTitle: '✦ 青花瓷磚終幕壁畫 · AZULEJO EPILOGUE MURAL',
    langModalTitle: '🌐 選擇語言 · LANGUAGE / 言語',
    langModalDesc: '即時切換全遊戲介面、關卡提示與故事對話（繁體中文／简体中文／English／日本語）。',
    atlasDone: '✓ 通關',
    atlasCurrent: '◆ 進行中',
    atlasUnentered: '○ 待啟程',
    codexSectionMiracles: '✦ 五重奇蹟徽記 · FIVE MIRACLES',
    codexSectionCharacters: '✦ 主要人物 · CHARACTERS',
    codexSectionClues: '✦ 伏筆與密檔 · CLUES',
    codexSectionChapters: '✦ 十二紀編年史 · 12 CHRONICLES',
    codexDone: '✓ 已完成',
    codexAwakened: '✦ 已覺醒',
    codexUnlockAt: (chId) => `第 ${String(chId).padStart(2, '0')} 紀覺醒`,
    codexMiraclePrefix: (slot, name) => `第 ${slot} 重・${name}`,
    codexWatchFound: '⌚ 5:53 已目擊',
    codexWatchClue: '5:53 關鍵線索',
    codexArchiveBadge: '迴廊密檔',
    codexHiddenUnlocked: (title, id) => `✦ 隱藏圖鑑解鎖：${title}（${id}）`,
    codexHiddenDoneRatio: (n, total) => `${n} / ${total} 三代情侶已尋齊`,
    codexHiddenLocked: '✦ 隱藏圖鑑（未解鎖）',
    muralReplay: '↻ 重溫結局動畫',
    muralSwitch: (k) => `切換結局 ${k}`,
    muralReturnTitle: '⌂ 返回標題星圖',
    cinBadge: (k) => `ENDING ${k}`,
    cinDefaultPhase: '序幕喚醒中',
    cinFallbackPhase: '終幕動畫演繹中',
    cinSkip: '略過 · SKIP ⏭',
    toastActorSwitched: (name) => `已切換操作角色：${name}`,
    toastBgNight: '☽ 已切換為黑夜星穹模式',
    toastBgDay: '☀ 已切換為日間粉彩模式',
    formatStageBadge: (chId, stIdx, totalSt) =>
      `CH ${String(chId).padStart(2, '0')} · STAGE ${stIdx + 1}/${totalSt}`,
    formatStageTag: (idx) => `幕 ${idx + 1}`,
    formatChapterHeading: (chId, title) => `第 ${String(chId).padStart(2, '0')} 紀 · ${title}`,
    formatTurretAction: (label) => `旋轉「${label}」`,
    alignLocked: '🔒 過橋視角鎖定中',
    alignNeedPlate: '⚙ 需先觸發踏板機關',
    alignNeedRotator: '⚙ 需先旋轉轉盤對位',
    alignOccluded: '◌ 視線受阻 · 需移開遮擋',
    alignNear: (degStr) => `接近中 · 差 ${degStr}°`,
    alignTurn: (signDeg) => `再轉 ${signDeg}° 對齊`,
    plateBadge: '◉ 踏印',
    toastBridgeAligned: '✦ 視差迴廊已縫合，點擊對岸地塊即可通行',
    atlasModalFullTitle: (totalCount) => `✦ 蓮島星圖選關 · 全十二紀共 ${totalCount} 重微關卡`,
    clearBannerCh12: '✦ 三代同登六角星祭壇！終局命運待決',
    clearBannerCh: (chId, title) => `✦ 第 ${chId} 紀圓滿共鳴・${title}`,
    btnEnterNextCh: (nextId) => `進入第 ${nextId} 紀 →`,
    codexSectionHidden: (hiddenId) => `✦ 隱藏條目：三代情侶 (${hiddenId})`,
    codexHiddenLockedHeading: (title) => `🔒 隱藏圖鑑：${title}`,
    codexHiddenPartialRatio: (n, total) => `${n} / ${total} 對情侶`,
    toastTurretLocked: '有角色立於轉盤上方或過橋期間，暫時無法轉動機關',
    toastSwitchLocked: '過橋期間無法切換角色',
    toastPathBlocked: '前方尚未連通，請旋轉羅盤視角或機關轉盤',
    dlgTitleResonance: (chId) => `CH ${String(chId).padStart(2, '0')} · 機關共鳴`,
    toastNextStagePortal: (nextNum, total) => `✦ 進入第 ${nextNum} / ${total} 重迴廊`,
    dlgTitleOutro: (chId, title) => `CH ${String(chId).padStart(2, '0')} 圓滿 · ${title}`,
    cinEndingTitleMap: {
      A: 'ENDING A · ETERNAL DUSK',
      B: 'ENDING B · NEON SOVEREIGNS',
      C: 'ENDING C · MADE IN HEAVEN 05:54'
    }
  },
  'zh-Hans': {
    documentTitle: '莲岛回廊 · Corridor of the Lotus',
    titleOverlayAria: '莲岛回廊主标题画面',
    titleMain: '莲岛回廊',
    titleSub: 'CORRIDOR OF THE LOTUS · 镜海三纪',
    titleStart: '✦ 启程入廊',
    titleAtlas: '✦ 星图选关',
    titleCodex: '📜 记忆图鉴',
    titleSoundOn: '音效',
    titleSoundMuted: '静音',
    titleBgDay: '☀ 日间',
    titleBgNight: '☽ 黑夜',
    titleBgDayTitle: '切换至黑夜星空背景模式',
    titleBgNightTitle: '切换回日间粉彩背景模式',
    titleLangAria: '切换游戏语言',
    chapterPillTitle: '点击查看线索提示',
    btnHomeTitle: '返回标题星图',
    btnHomeLabel: '标题',
    btnChaptersTitle: '星图选关',
    btnChaptersMain: '星图',
    btnChaptersSub: '选关',
    btnCodexTitle: '记忆图鉴',
    btnCodexLabel: '图鉴',
    btnHintTitle: '线索提示',
    btnHintLabel: '提示',
    btnRotLTitle: '逆时针旋转视角 (Q / ←)',
    btnRotRTitle: '顺时针旋转视角 (E / →)',
    btnActorCycleTitle: '切换角色',
    btnActorCycleLabel: '切换',
    btnTurretTitle: '旋转视角机关转盘',
    btnTurretLabel: '旋转转盘',
    btnSoundTitle: '开关音效',
    btnBgTitleDay: '切换至黑夜模式',
    btnBgTitleNight: '切换回日间模式',
    btnBgLabelDay: '日间',
    btnBgLabelNight: '黑夜',
    btnLangTitle: '语言设置（繁中／简中／EN／日本語）',
    compassKicker: '青花罗盘 · COMPASS',
    alignReady: '光影交汇',
    alignAligned: '视错觉对齐',
    alignExploring: '探索视角中',
    bridgeHint: '✨ 视错觉接轨！点击发光方块前行（Q/E 亦可旋转）',
    clearStageBanner: '✦ 本重回廊已通达，可迈向下一区域',
    clearChapterBanner: '✦ 六角星阵已圆满共鸣',
    btnNextStage: '下一幕 →',
    btnNextChapter: '下一纪 →',
    btnFinalChoice: '抉择终局 →',
    dlgPortraitAlt: '人物水彩肖像',
    dlgNext: '继续 ▸',
    dlgFinish: '完成 ✦',
    closeAria: '关闭',
    atlasModalTitle: '✦ 莲岛星图选关 · 十二纪二十九重回廊',
    codexModalTitle: '📜 记忆图鉴 · 莲岛三纪见闻录',
    endingModalTitle: '✶ 第十二纪终局祭坛 · HEXAGRAM LOTUS ALTAR',
    muralModalTitle: '✦ 青花瓷砖终幕壁画 · AZULEJO EPILOGUE MURAL',
    langModalTitle: '🌐 选择语言 · LANGUAGE / 言語',
    langModalDesc: '即时切换全游戏界面、关卡提示与故事对话（繁體中文／简体中文／English／日本語）。',
    atlasDone: '✓ 通关',
    atlasCurrent: '◆ 进行中',
    atlasUnentered: '○ 待启程',
    codexSectionMiracles: '✦ 五重奇迹徽记 · FIVE MIRACLES',
    codexSectionCharacters: '✦ 主要人物 · CHARACTERS',
    codexSectionClues: '✦ 伏笔与密档 · CLUES',
    codexSectionChapters: '✦ 十二纪编年史 · 12 CHRONICLES',
    codexDone: '✓ 已完成',
    codexAwakened: '✦ 已觉醒',
    codexUnlockAt: (chId) => `第 ${String(chId).padStart(2, '0')} 纪觉醒`,
    codexMiraclePrefix: (slot, name) => `第 ${slot} 重・${name}`,
    codexWatchFound: '⌚ 5:53 已目击',
    codexWatchClue: '5:53 关键线索',
    codexArchiveBadge: '回廊密档',
    codexHiddenUnlocked: (title, id) => `✦ 隐藏图鉴解锁：${title}（${id}）`,
    codexHiddenDoneRatio: (n, total) => `${n} / ${total} 三代情侣已寻齐`,
    codexHiddenLocked: '✦ 隐藏图鉴（未解锁）',
    muralReplay: '↻ 重温结局动画',
    muralSwitch: (k) => `切换结局 ${k}`,
    muralReturnTitle: '⌂ 返回标题星图',
    cinBadge: (k) => `ENDING ${k}`,
    cinDefaultPhase: '序幕唤醒中',
    cinFallbackPhase: '终幕动画演绎中',
    cinSkip: '略过 · SKIP ⏭',
    toastActorSwitched: (name) => `已切换操作角色：${name}`,
    toastBgNight: '☽ 已切换为黑夜星穹模式',
    toastBgDay: '☀ 已切换为日间粉彩模式',
    formatStageBadge: (chId, stIdx, totalSt) =>
      `第 ${String(chId).padStart(2, '0')} 纪 · ${stIdx + 1}/${totalSt}`,
    formatStageTag: (idx) => `幕 ${idx + 1}`,
    formatChapterHeading: (chId, title) => `第 ${String(chId).padStart(2, '0')} 纪 · ${title}`,
    formatTurretAction: (label) => `旋转“${label}”`,
    alignLocked: '🔒 过桥视角锁定中',
    alignNeedPlate: '⚙ 需先触发踏板机关',
    alignNeedRotator: '⚙ 需先旋转转盘对位',
    alignOccluded: '◌ 视线受阻 · 需移开遮挡',
    alignNear: (degStr) => `接近中 · 差 ${degStr}°`,
    alignTurn: (signDeg) => `再转 ${signDeg}° 对齐`,
    plateBadge: '◉ 踏印',
    toastBridgeAligned: '✦ 视差回廊已缝合，点击对岸地块即可通行',
    atlasModalFullTitle: (totalCount) => `✦ 莲岛星图选关 · 全十二纪共 ${totalCount} 重微关卡`,
    clearBannerCh12: '✦ 三代同登六角星祭坛！终局命运待决',
    clearBannerCh: (chId, title) => `✦ 第 ${chId} 纪圆满共鸣・${title}`,
    btnEnterNextCh: (nextId) => `进入第 ${nextId} 纪 →`,
    codexSectionHidden: (hiddenId) => `✦ 隐藏条目：三代情侣 (${hiddenId})`,
    codexHiddenLockedHeading: (title) => `🔒 隐藏图鉴：${title}`,
    codexHiddenPartialRatio: (n, total) => `${n} / ${total} 对情侣`,
    toastTurretLocked: '有角色立于转盘上方或过桥期间，暂时无法转动机关',
    toastSwitchLocked: '过桥期间无法切换角色',
    toastPathBlocked: '前方尚未连通，请旋转罗盘视角或机关转盘',
    dlgTitleResonance: (chId) => `CH ${String(chId).padStart(2, '0')} · 机关共鸣`,
    toastNextStagePortal: (nextNum, total) => `✦ 进入第 ${nextNum} / ${total} 重回廊`,
    dlgTitleOutro: (chId, title) => `CH ${String(chId).padStart(2, '0')} 圆满 · ${title}`,
    cinEndingTitleMap: {
      A: 'ENDING A · ETERNAL DUSK',
      B: 'ENDING B · NEON SOVEREIGNS',
      C: 'ENDING C · MADE IN HEAVEN 05:54'
    }
  },
  en: {
    documentTitle: 'Corridor of the Lotus · Macau Three-Era Odyssey',
    titleOverlayAria: 'Corridor of the Lotus Title Screen',
    titleMain: 'Corridor of the Lotus',
    titleSub: 'THREE-ERA ILLUSION ODYSSEY · MACAU 1622–2077',
    titleStart: '✦ Enter Corridor',
    titleAtlas: '✦ Stage Atlas',
    titleCodex: '📜 Memory Codex',
    titleSoundOn: 'Sound',
    titleSoundMuted: 'Muted',
    titleBgDay: '☀ Day',
    titleBgNight: '☽ Night',
    titleBgDayTitle: 'Switch to Starry Night backdrop',
    titleBgNightTitle: 'Switch back to Pastel Day backdrop',
    titleLangAria: 'Switch Language',
    chapterPillTitle: 'Click for puzzle hint',
    btnHomeTitle: 'Return to Title Diorama',
    btnHomeLabel: 'Title',
    btnChaptersTitle: 'Stage Atlas',
    btnChaptersMain: 'Atlas',
    btnChaptersSub: '',
    btnCodexTitle: 'Memory Codex',
    btnCodexLabel: 'Codex',
    btnHintTitle: 'Show Stage Hint',
    btnHintLabel: 'Hint',
    btnRotLTitle: 'Rotate Counter-Clockwise (Q / ←)',
    btnRotRTitle: 'Rotate Clockwise (E / →)',
    btnActorCycleTitle: 'Switch Character',
    btnActorCycleLabel: 'Switch',
    btnTurretTitle: 'Rotate Architecture Dial',
    btnTurretLabel: 'Rotate Dial',
    btnSoundTitle: 'Toggle Audio',
    btnBgTitleDay: 'Switch to Night Mode',
    btnBgTitleNight: 'Switch to Day Mode',
    btnBgLabelDay: 'Day',
    btnBgLabelNight: 'Night',
    btnLangTitle: 'Language (繁中 / 简中 / EN / 日本語)',
    compassKicker: 'AZULEJO COMPASS',
    alignReady: 'ALIGNED',
    alignAligned: 'ILLUSION LINKED',
    alignExploring: 'EXPLORING',
    bridgeHint: '✨ Path linked! Tap any glowing tile to move (Q/E rotates)',
    clearStageBanner: '✦ Corridor aligned — proceed to next stage',
    clearChapterBanner: '✦ Hexagram Altar Harmonized',
    btnNextStage: 'Next Stage →',
    btnNextChapter: 'Next Chronicle →',
    btnFinalChoice: 'Final Choice →',
    dlgPortraitAlt: 'Character watercolor portrait',
    dlgNext: 'Continue ▸',
    dlgFinish: 'Close ✦',
    closeAria: 'Close',
    atlasModalTitle: '✦ Star-Chart Atlas · 12 Chronicles × 29 Stages',
    codexModalTitle: '📜 Memory Codex · Chronicles of Macau',
    endingModalTitle: '✶ Chronicle XII · HEXAGRAM LOTUS ALTAR',
    muralModalTitle: '✦ AZULEJO EPILOGUE MURAL',
    langModalTitle: '🌐 Language · 語言設定 / 言語',
    langModalDesc: 'Switch UI, stage hints, dialogue, codex, and ending subtitles instantaneously.',
    atlasDone: '✓ Cleared',
    atlasCurrent: '◆ Active',
    atlasUnentered: '○ Locked / Open',
    codexSectionMiracles: '✦ FIVE MIRACLES',
    codexSectionCharacters: '✦ KEY FIGURES',
    codexSectionClues: '✦ CLUES & ARCHIVES',
    codexSectionChapters: '✦ 12 CHRONICLES TIMELINE',
    codexDone: '✓ Cleared',
    codexAwakened: '✦ Awakened',
    codexUnlockAt: (chId) => `Chronicle ${String(chId).padStart(2, '0')}`,
    codexMiraclePrefix: (slot, name) => `Miracle #${slot} · ${name}`,
    codexWatchFound: '⌚ 5:53 Sighted',
    codexWatchClue: '5:53 Key Clue',
    codexArchiveBadge: 'Sealed Archive',
    codexHiddenUnlocked: (title, id) => `✦ Secret Entry Unlocked: ${title} (${id})`,
    codexHiddenDoneRatio: (n, total) => `${n} / ${total} Couples Found`,
    codexHiddenLocked: '✦ Secret Codex Entry (Locked)',
    muralReplay: '↻ Replay Ending',
    muralSwitch: (k) => `Ending ${k}`,
    muralReturnTitle: '⌂ Title Screen',
    cinBadge: (k) => `ENDING ${k}`,
    cinDefaultPhase: 'OVERTURE',
    cinFallbackPhase: 'FINALE IN PROGRESS',
    cinSkip: 'SKIP ⏭',
    toastActorSwitched: (name) => `Active character: ${name}`,
    toastBgNight: '☽ Switched to Starry Night Mode',
    toastBgDay: '☀ Switched to Pastel Day Mode',
    formatStageBadge: (chId, stIdx, totalSt) =>
      `CR ${String(chId).padStart(2, '0')} · ST ${stIdx + 1}/${totalSt}`,
    formatStageTag: (idx) => `Stage ${idx + 1}`,
    formatChapterHeading: (chId, title) => `Chronicle ${String(chId).padStart(2, '0')} · ${title}`,
    formatTurretAction: (label) => `Turn Dial (${label})`,
    alignLocked: '🔒 Crossing Lock Active',
    alignNeedPlate: '⚙ Pressure Plate Required',
    alignNeedRotator: '⚙ Turn Dial to Align',
    alignOccluded: '◌ View Occluded',
    alignNear: (degStr) => `Near Seam · Δ${degStr}°`,
    alignTurn: (signDeg) => `Rotate ${signDeg}°`,
    plateBadge: '◉ Plate',
    toastBridgeAligned: '✦ Seam aligned — tap glowing tiles to cross',
    atlasModalFullTitle: (totalCount) => `✦ Lotus Stage Atlas · 12 Chronicles (${totalCount} Micro-Stages)`,
    clearBannerCh12: '✦ Three Eras United at the Hexagram Altar! Choose Your Ending',
    clearBannerCh: (chId, title) => `✦ Chronicle ${chId} Harmonized · ${title}`,
    btnEnterNextCh: (nextId) => `Enter Chronicle ${nextId} →`,
    codexSectionHidden: (hiddenId) => `✦ Hidden Archive: Three-Era Lovers (${hiddenId})`,
    codexHiddenLockedHeading: (title) => `🔒 Hidden Entry: ${title}`,
    codexHiddenPartialRatio: (n, total) => `${n} / ${total} Couples`,
    toastTurretLocked: 'Cannot turn dial while an actor stands on it or crosses a bridge',
    toastSwitchLocked: 'Cannot switch characters while crossing a bridge',
    toastPathBlocked: 'Path not aligned yet — rotate the compass or turn a dial',
    dlgTitleResonance: (chId) => `CH ${String(chId).padStart(2, '0')} · Resonance`,
    toastNextStagePortal: (nextNum, total) => `✦ Advancing to Stage ${nextNum} / ${total}`,
    dlgTitleOutro: (chId, title) => `CH ${String(chId).padStart(2, '0')} Cleared · ${title}`,
    cinEndingTitleMap: {
      A: 'ENDING A · ETERNAL DUSK',
      B: 'ENDING B · NEON SOVEREIGNS',
      C: 'ENDING C · MADE IN HEAVEN 05:54'
    }
  },
  ja: {
    documentTitle: '蓮島回廊 · Corridor of the Lotus',
    titleOverlayAria: '蓮島回廊 タイトル画面',
    titleMain: '蓮島回廊',
    titleSub: 'CORRIDOR OF THE LOTUS · 鏡海三紀',
    titleStart: '✦ 旅に出る',
    titleAtlas: '✦ 星図選択',
    titleCodex: '📜 記憶図鑑',
    titleSoundOn: '音声',
    titleSoundMuted: '消音',
    titleBgDay: '☀ 昼間',
    titleBgNight: '☽ 夜空',
    titleBgDayTitle: '星空の黒夜モードへ切り替え',
    titleBgNightTitle: 'パステル昼間モードへ戻る',
    titleLangAria: '言語を切り替え',
    chapterPillTitle: 'クリックしてヒントを表示',
    btnHomeTitle: 'タイトル画面へ戻る',
    btnHomeLabel: 'タイトル',
    btnChaptersTitle: '星図ステージ選択',
    btnChaptersMain: '星図',
    btnChaptersSub: '選択',
    btnCodexTitle: '記憶図鑑',
    btnCodexLabel: '図鑑',
    btnHintTitle: 'ヒント表示',
    btnHintLabel: 'ヒント',
    btnRotLTitle: '反時計回りに回転 (Q / ←)',
    btnRotRTitle: '時計回りに回転 (E / →)',
    btnActorCycleTitle: 'キャラ切替',
    btnActorCycleLabel: '切替',
    btnTurretTitle: '回転盤を回す',
    btnTurretLabel: '回転盤',
    btnSoundTitle: '音声オン/オフ',
    btnBgTitleDay: '黒夜モードへ切り替え',
    btnBgTitleNight: '昼間モードへ戻る',
    btnBgLabelDay: '昼間',
    btnBgLabelNight: '夜空',
    btnLangTitle: '言語設定（繁中／简中／EN／日本語）',
    compassKicker: '青花羅針盤 · COMPASS',
    alignReady: '光影共鳴',
    alignAligned: '視錯覚一致',
    alignExploring: '探索中',
    bridgeHint: '✨ 道が繋がりました！光る床をタップして進みましょう（Q/E で回転）',
    clearStageBanner: '✦ この回廊が繋がりました・次の場面へ',
    clearChapterBanner: '✦ 六芒星祭壇・共鳴完了',
    btnNextStage: '次幕へ →',
    btnNextChapter: '次の紀へ →',
    btnFinalChoice: '終局の選択 →',
    dlgPortraitAlt: '登場人物水彩肖像',
    dlgNext: '次へ ▸',
    dlgFinish: '閉じる ✦',
    closeAria: '閉じる',
    atlasModalTitle: '✦ 蓮島星図選択 · 十二紀二十九重回廊',
    codexModalTitle: '📜 記憶図鑑 · 蓮島三紀見聞録',
    endingModalTitle: '✶ 第十二紀終局祭壇 · HEXAGRAM LOTUS ALTAR',
    muralModalTitle: '✦ アズレージョ終幕壁画 · EPILOGUE MURAL',
    langModalTitle: '🌐 言語設定 · LANGUAGE / 語言',
    langModalDesc: 'UI・ステージヒント・物語対話・エンディング字幕をリアルタイムで切り替えます。',
    atlasDone: '✓ クリア',
    atlasCurrent: '◆ 挑戦中',
    atlasUnentered: '○ 未踏破',
    codexSectionMiracles: '✦ 五重奇跡の紋章 · FIVE MIRACLES',
    codexSectionCharacters: '✦ 主な登場人物 · CHARACTERS',
    codexSectionClues: '✦ 伏線と密文書 · CLUES',
    codexSectionChapters: '✦ 十二紀年代記 · 12 CHRONICLES',
    codexDone: '✓ 完了',
    codexAwakened: '✦ 覚醒済',
    codexUnlockAt: (chId) => `第 ${String(chId).padStart(2, '0')} 紀で覚醒`,
    codexMiraclePrefix: (slot, name) => `第 ${slot} 奇跡・${name}`,
    codexWatchFound: '⌚ 5:53 目撃済',
    codexWatchClue: '5:53 重要手掛かり',
    codexArchiveBadge: '回廊密録',
    codexHiddenUnlocked: (title, id) => `✦ 隠し図鑑解放：${title}（${id}）`,
    codexHiddenDoneRatio: (n, total) => `${n} / ${total} 組の恋人と対話済`,
    codexHiddenLocked: '✦ 隠し図鑑（未解放）',
    muralReplay: '↻ エンディング再生',
    muralSwitch: (k) => `結末 ${k}`,
    muralReturnTitle: '⌂ タイトルへ戻る',
    cinBadge: (k) => `ENDING ${k}`,
    cinDefaultPhase: '序幕起動中',
    cinFallbackPhase: '終幕演出中',
    cinSkip: 'スキップ · SKIP ⏭',
    toastActorSwitched: (name) => `操作キャラクター変更：${name}`,
    toastBgNight: '☽ 星空の黒夜モードへ切り替えました',
    toastBgDay: '☀ パステル昼間モードへ切り替えました',
    formatStageBadge: (chId, stIdx, totalSt) =>
      `CH ${String(chId).padStart(2, '0')} · STAGE ${stIdx + 1}/${totalSt}`,
    formatStageTag: (idx) => `幕 ${idx + 1}`,
    formatChapterHeading: (chId, title) => `第 ${String(chId).padStart(2, '0')} 紀 · ${title}`,
    formatTurretAction: (label) => `回転「${label}」`,
    alignLocked: '🔒 渡橋ロック中',
    alignNeedPlate: '⚙ 感圧板が必要です',
    alignNeedRotator: '⚙ 回転盤を合わせてください',
    alignOccluded: '◌ 視線遮蔽・障害あり',
    alignNear: (degStr) => `あと少し・差 ${degStr}°`,
    alignTurn: (signDeg) => `${signDeg}° 回転`,
    plateBadge: '◉ 踏板',
    toastBridgeAligned: '✦ 錯視の回廊が繋がりました — 光る床をタップして進めます',
    atlasModalFullTitle: (totalCount) => `✦ 蓮島星図選択 · 全十二紀 ${totalCount} ステージ`,
    clearBannerCh12: '✦ 三時代が六芒星祭壇に集結！終局の運命を選択せよ',
    clearBannerCh: (chId, title) => `✦ 第 ${chId} 紀 共鳴完了・${title}`,
    btnEnterNextCh: (nextId) => `第 ${nextId} 紀へ進む →`,
    codexSectionHidden: (hiddenId) => `✦ 隠し項目：三代の恋人たち (${hiddenId})`,
    codexHiddenLockedHeading: (title) => `🔒 隠し図鑑：${title}`,
    codexHiddenPartialRatio: (n, total) => `${n} / ${total} 組`,
    toastTurretLocked: '回転盤上のキャラクターがいるか渡橋中のため回せません',
    toastSwitchLocked: '渡橋中はキャラクターを切り替えられません',
    toastPathBlocked: '道が繋がっていません — 羅針盤または回転盤を回してください',
    dlgTitleResonance: (chId) => `CH ${String(chId).padStart(2, '0')} · 機関共鳴`,
    toastNextStagePortal: (nextNum, total) => `✦ 第 ${nextNum} / ${total} 幕へ進みます`,
    dlgTitleOutro: (chId, title) => `CH ${String(chId).padStart(2, '0')} 共鳴完了 · ${title}`,
    cinEndingTitleMap: {
      A: 'ENDING A · ETERNAL DUSK',
      B: 'ENDING B · NEON SOVEREIGNS',
      C: 'ENDING C · MADE IN HEAVEN 05:54'
    }
  }
});

export function getLocalizedUi(lang = 'zh-Hant') {
  return UI_STRINGS[normalizeLang(lang)];
}

export function getLocalizedChapterStory(chapterId, lang = 'zh-Hant') {
  const norm = normalizeLang(lang);
  const base = CHAPTER_STORIES[chapterId];
  if (!base) return null;
  if (norm === 'zh-Hant') return base;

  const pack =
    norm === 'zh-Hans'
      ? CHAPTER_STORIES_ZH_HANS[chapterId]
      : norm === 'en'
      ? CHAPTER_STORIES_EN[chapterId]
      : CHAPTER_STORIES_JA[chapterId];
  if (!pack) return base;

  const mergePages = (basePages = [], locPages = []) =>
    basePages.map((p, idx) => ({
      ...p,
      speakerName: locPages[idx]?.speakerName || p.speakerName,
      text: locPages[idx]?.text || p.text
    }));

  return {
    intro: mergePages(base.intro, pack.intro),
    midResonance: mergePages(base.midResonance, pack.midResonance),
    outro: mergePages(base.outro, pack.outro)
  };
}

export function getLocalizedLoreDialogue(loreId, lang = 'zh-Hant') {
  const norm = normalizeLang(lang);
  const base = LORE_DIALOGUES[loreId];
  if (!base) return null;
  if (norm === 'zh-Hant') return base;

  const loc =
    norm === 'zh-Hans'
      ? LORE_DIALOGUES_ZH_HANS[loreId]
      : norm === 'en'
      ? LORE_DIALOGUES_EN[loreId]
      : LORE_DIALOGUES_JA[loreId];
  if (!loc) return base;

  return {
    ...base,
    title: loc.title || base.title,
    pages: (base.pages || []).map((p, idx) => ({
      ...p,
      speakerName: loc.pages?.[idx]?.speakerName || p.speakerName,
      text: loc.pages?.[idx]?.text || p.text
    }))
  };
}

export function getLocalizedCodexEntries(lang = 'zh-Hant') {
  const norm = normalizeLang(lang);
  if (norm === 'zh-Hant') return CODEX_ENTRIES;
  if (norm === 'zh-Hans') return CODEX_ENTRIES_ZH_HANS;
  if (norm === 'en') return CODEX_ENTRIES_EN;
  return CODEX_ENTRIES_JA;
}

export function getLocalizedFinalEnding(choiceId = 'C', lang = 'zh-Hant') {
  const norm = normalizeLang(lang);
  const key = FINAL_ENDINGS[choiceId] ? choiceId : 'C';
  const base = FINAL_ENDINGS[key];
  if (norm === 'zh-Hant') return base;

  const locPack =
    norm === 'zh-Hans'
      ? FINAL_ENDINGS_ZH_HANS[key]
      : norm === 'en'
      ? FINAL_ENDINGS_EN[key]
      : FINAL_ENDINGS_JA[key];
  if (!locPack) return base;

  return {
    ...base,
    title: locPack.title || base.title,
    titleEn: locPack.titleEn || base.titleEn,
    subtitle: locPack.subtitle || base.subtitle,
    subtitleEn: locPack.subtitleEn || base.subtitleEn,
    pages: (base.pages || []).map((p, idx) => ({
      ...p,
      speakerName: locPack.pages?.[idx]?.speakerName || p.speakerName,
      text: locPack.pages?.[idx]?.text || p.text
    }))
  };
}

export function getLocalizedSubtitleCue(baseCue, endingKey, index, lang = 'zh-Hant') {
  if (!baseCue) return null;
  const norm = normalizeLang(lang);
  if (norm === 'zh-Hant') {
    return { ...baseCue, text: baseCue.zh };
  }

  const locList =
    norm === 'zh-Hans'
      ? SUBTITLE_TIMELINES_ZH_HANS[endingKey]
      : norm === 'en'
      ? SUBTITLE_TIMELINES_EN[endingKey]
      : SUBTITLE_TIMELINES_JA[endingKey];

  const locItem = locList?.[index];
  const primaryText = locItem?.text || baseCue.zh;
  const secondaryText = norm === 'en' ? baseCue.zh : baseCue.en;
  const speakerMeta = getLocalizedSpeakerMeta(baseCue.speakerId, norm, locItem?.speakerName);

  return {
    ...baseCue,
    speakerName: speakerMeta.name,
    speakerEn: speakerMeta.subLabel || baseCue.speakerEn,
    zh: primaryText,
    en: secondaryText,
    text: primaryText
  };
}

export function getLocalizedSpeakerMeta(speakerId, lang = 'zh-Hant', customSpeakerName = '') {
  const norm = normalizeLang(lang);
  const resolved = resolveSpeakerId(speakerId);
  const table = SPEAKER_META_BY_LANG[norm] || SPEAKER_META_BY_LANG['zh-Hant'];
  const fallback = SPEAKER_BILINGUAL_META[resolved] || SPEAKER_BILINGUAL_META.sofia;
  const entry = table[resolved] || table.sofia;

  return {
    id: resolved,
    name: customSpeakerName || entry?.name || fallback.zh,
    subLabel: entry?.subLabel || fallback.pt || '',
    tileHue: fallback.tileHue,
    accent: fallback.accent
  };
}

export function getLocalizedChapterMeta(chapterOrId, lang = 'zh-Hant') {
  const norm = normalizeLang(lang);
  const isObj = chapterOrId && typeof chapterOrId === 'object';
  const chId = isObj ? chapterOrId.id || chapterOrId.chapterId || 1 : Number(chapterOrId) || 1;
  const fallbackTitle = isObj ? chapterOrId.title || '' : '';
  const fallbackSub = isObj ? chapterOrId.subtitle || '' : '';
  if (norm === 'zh-Hant') {
    return { title: fallbackTitle, subtitle: fallbackSub };
  }
  const map =
    norm === 'zh-Hans'
      ? CHAPTER_STAGE_META_ZH_HANS.chapters
      : norm === 'en'
      ? CHAPTER_STAGE_META_EN.chapters
      : CHAPTER_STAGE_META_JA.chapters;
  const item = map?.[chId];
  return {
    title: item?.title || fallbackTitle,
    subtitle: item?.subtitle || fallbackSub
  };
}

export function getLocalizedStageMeta(stageObj, lang = 'zh-Hant') {
  const norm = normalizeLang(lang);
  if (!stageObj) return { title: '', subtitle: '', hintText: '' };
  if (norm === 'zh-Hant') {
    return {
      title: stageObj.title || '',
      subtitle: stageObj.subtitle || '',
      hintText: stageObj.hintText || ''
    };
  }
  const chId = stageObj.chapterId ?? stageObj.id ?? 1;
  const stIdx = stageObj.stageIndex ?? 0;
  const key = `${chId}_${stIdx}`;
  const map =
    norm === 'zh-Hans'
      ? CHAPTER_STAGE_META_ZH_HANS.stages
      : norm === 'en'
      ? CHAPTER_STAGE_META_EN.stages
      : CHAPTER_STAGE_META_JA.stages;
  const item = map?.[key];
  return {
    title: item?.title || stageObj.title || '',
    subtitle: item?.subtitle || stageObj.subtitle || '',
    hintText: item?.hintText || stageObj.hintText || ''
  };
}

export function getLocalizedActorName(actorId, fallbackName = '', lang = 'zh-Hant') {
  const norm = normalizeLang(lang);
  const id = String(actorId || '').toLowerCase();
  const table = ACTOR_NAMES_BY_LANG[norm] || ACTOR_NAMES_BY_LANG['zh-Hant'];
  return table[id] || fallbackName || actorId;
}

export function getLocalizedPhaseLabel(phaseKey, lang = 'zh-Hant') {
  const norm = normalizeLang(lang);
  const table = PHASE_LABELS_BY_LANG[norm] || PHASE_LABELS_BY_LANG['zh-Hant'];
  return table[phaseKey] || getLocalizedUi(norm).cinFallbackPhase;
}

export default {
  SUPPORTED_LANGS,
  STORAGE_KEYS,
  LANG_OPTIONS,
  normalizeLang,
  normalizeBgMode,
  SPEAKER_META_BY_LANG,
  UI_STRINGS,
  getLocalizedUi,
  getLocalizedChapterStory,
  getLocalizedLoreDialogue,
  getLocalizedCodexEntries,
  getLocalizedFinalEnding,
  getLocalizedSubtitleCue,
  getLocalizedSpeakerMeta,
  getLocalizedChapterMeta,
  getLocalizedStageMeta,
  getLocalizedActorName,
  getLocalizedPhaseLabel
};
