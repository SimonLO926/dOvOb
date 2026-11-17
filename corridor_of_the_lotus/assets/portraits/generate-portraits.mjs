#!/usr/bin/env node
/**
 * Procedural Watercolor × Monument Valley × Macau Azulejos Portrait Generator (v2.2)
 * Generates 15 crisp 300×400 WebP portraits (0 facial features: zero eyes/nose/mouth/eye-dots/glasses),
 * each framed in a Portuguese Macau Azulejo ceramic arch with a bilingual bottom ceramic tile plaque,
 * a 5×3 labeled _contact_sheet.png, and writes corridor_of_the_lotus/src/portrait-atlas.js.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '/Volumes/Elements/fun/鏡海豪情/node_modules/playwright/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORTRAITS_DIR = __dirname;
const LOTUS_ROOT = path.resolve(__dirname, '..', '..');
const ATLAS_OUTPUT_PATH = path.join(LOTUS_ROOT, 'src', 'portrait-atlas.js');
const CONTACT_SHEET_PATH = path.join(PORTRAITS_DIR, '_contact_sheet.png');

export const PORTRAIT_IDS = [
  'sofia',
  'sofia_astral',
  'afonso',
  'ryan',
  'zero7',
  'ajan',
  'old_man',
  'luzhisi',
  'corvo',
  'mother',
  'liang9',
  'couple_1622',
  'couple_2026',
  'couple_2077',
  'narrator'
];

export const PORTRAIT_SPEAKER_IDS = [...PORTRAIT_IDS];

export const SPEAKER_BILINGUAL_META = {
  sofia: { zh: '盧曉晴', pt: 'SOFIA LOU', tileHue: '#173a8a', accent: '#c9342d' },
  sofia_astral: { zh: '金光虛影', pt: 'ESPECTRO ASTRAL', tileHue: '#3b2d7a', accent: '#d4a64a' },
  afonso: { zh: '阿方索', pt: 'AFONSO FERREIRA', tileHue: '#1b387a', accent: '#a8382e' },
  ryan: { zh: '盧辰', pt: 'RYAN LOU', tileHue: '#174287', accent: '#208a9c' },
  zero7: { zh: 'Zero-7', pt: 'AGENTE ZERO-7', tileHue: '#13326b', accent: '#1e88b8' },
  ajan: { zh: '阿珍 / 林海珍', pt: 'A-JAN · LIN HAIZHEN', tileHue: '#1d4c7a', accent: '#3d8f7d' },
  old_man: { zh: '白髮老人', pt: 'ANCIÃO 05:53', tileHue: '#1e4268', accent: '#487f6e' },
  luzhisi: { zh: '盧日寺 / 日寺使徒', pt: 'LOU YAT-ZI', tileHue: '#261b5e', accent: '#b8882e' },
  corvo: { zh: '黑烏鴉', pt: 'CORVO · AGENT C-01', tileHue: '#162d59', accent: '#a6823b' },
  mother: { zh: '盧母', pt: 'MÃE LOU · RESIDÊNCIA LOU', tileHue: '#1e4884', accent: '#a85a50' },
  liang9: { zh: '梁氏後人・梁九', pt: 'LIANG IX', tileHue: '#1b4778', accent: '#8f4f28' },
  couple_1622: { zh: '洛維＆施迪', pt: 'LOVEL & SADIE · 1622', tileHue: '#1a3678', accent: '#c7592c' },
  couple_2026: { zh: '西米露＆加利', pt: 'SAGO & GARY · 2026', tileHue: '#173a8a', accent: '#2f7b8a' },
  couple_2077: { zh: 'K＆N', pt: 'K & N · 2077', tileHue: '#18367a', accent: '#b88b2e' },
  narrator: { zh: '鏡海旁白', pt: 'CRÓNICA DE MACAU', tileHue: '#173a8a', accent: '#b5872a' }
};

export const SPEAKER_ALIASES = {
  elder: 'old_man',
  white_haired_elder: 'old_man',
  old_man_553: 'old_man',
  zero_7: 'zero7',
  zero7_silhouette: 'zero7',
  lu_chen: 'ryan',
  lu_zhisi: 'luzhisi',
  lou_yat_zi: 'luzhisi',
  luzhisi_figure: 'luzhisi',
  corvo_figure: 'corvo',
  corvo_c01: 'corvo',
  agent_c01: 'corvo',
  c03: 'corvo',
  ajan_npc: 'ajan',
  lin_haizhen: 'ajan',
  lin_teacher: 'ajan',
  lu_mother: 'mother',
  mae_lou: 'mother',
  liang_9: 'liang9',
  liangjiu: 'liang9',
  liang_ix: 'liang9',
  luowei: 'couple_1622',
  shidi: 'couple_1622',
  ximilu: 'couple_2026',
  jiali: 'couple_2026',
  k: 'couple_2077',
  n: 'couple_2077',
  macau_citizen: 'narrator'
};

const PORTRAIT_THEMES = {
  sofia: {
    seed: 101,
    cobalt: '#173a8a',
    cobaltLight: '#2452bd',
    washes: ['#7fb5a3', '#2e5299', '#d16a60', '#e5c98e'],
    skyTop: '#e3ede8',
    skyMid: '#bfd8cf',
    skyBot: '#7f9fb0',
    archDark: '#1c3461',
    archMid: '#568c7d',
    gold: '#d4a64a'
  },
  sofia_astral: {
    seed: 202,
    cobalt: '#2e2b7a',
    cobaltLight: '#4f46b8',
    washes: ['#7654a8', '#e3bd66', '#61a5c4', '#b684d4'],
    skyTop: '#e2d8f0',
    skyMid: '#b89ed8',
    skyBot: '#654d94',
    archDark: '#2d2057',
    archMid: '#7a5ea8',
    gold: '#f0d486'
  },
  afonso: {
    seed: 303,
    cobalt: '#1a387a',
    cobaltLight: '#2452bd',
    washes: ['#c96747', '#e0ac58', '#3e649e', '#9e3e36'],
    skyTop: '#f2e1c7',
    skyMid: '#deb482',
    skyBot: '#995240',
    archDark: '#3d2226',
    archMid: '#8a4a3d',
    gold: '#e0b356'
  },
  ryan: {
    seed: 404,
    cobalt: '#174287',
    cobaltLight: '#2359bd',
    washes: ['#325585', '#42abbf', '#dab084', '#243a63'],
    skyTop: '#dfeaf2',
    skyMid: '#9db8d1',
    skyBot: '#3f5f85',
    archDark: '#182947',
    archMid: '#3a708c',
    gold: '#e0bb68'
  },
  zero7: {
    seed: 505,
    cobalt: '#13326b',
    cobaltLight: '#1f50ad',
    washes: ['#1b2b47', '#32b3d4', '#4d6887', '#131f36'],
    skyTop: '#cedae6',
    skyMid: '#7892ad',
    skyBot: '#253957',
    archDark: '#0f1729',
    archMid: '#264461',
    gold: '#6cc0d6'
  },
  ajan: {
    seed: 606,
    cobalt: '#1d4c7a',
    cobaltLight: '#2364a8',
    washes: ['#6cb09a', '#e6c28a', '#487aa8', '#9dd1be'],
    skyTop: '#edf4ec',
    skyMid: '#c6e0d6',
    skyBot: '#6a9d98',
    archDark: '#1b414a',
    archMid: '#518c7f',
    gold: '#e3bd68'
  },
  old_man: {
    seed: 707,
    cobalt: '#1e4268',
    cobaltLight: '#255894',
    washes: ['#6c9c8c', '#c3cfd6', '#cfb06b', '#41696b'],
    skyTop: '#e9efe9',
    skyMid: '#bfd4cc',
    skyBot: '#658a84',
    archDark: '#1d393c',
    archMid: '#518077',
    gold: '#d4af5c'
  },
  luzhisi: {
    seed: 808,
    cobalt: '#221b63',
    cobaltLight: '#43389c',
    washes: ['#2b194d', '#d4a64c', '#54317d', '#1b204f'],
    skyTop: '#dcd4eb',
    skyMid: '#7866a3',
    skyBot: '#1f163d',
    archDark: '#140c29',
    archMid: '#3b2866',
    gold: '#e8c164'
  },
  corvo: {
    seed: 909,
    cobalt: '#162d59',
    cobaltLight: '#234c91',
    washes: ['#204457', '#162742', '#bfa062', '#355c6e'],
    skyTop: '#d4dfe6',
    skyMid: '#869eab',
    skyBot: '#294052',
    archDark: '#0f1a26',
    archMid: '#294a5e',
    gold: '#d4ad5b'
  },
  mother: {
    seed: 1010,
    cobalt: '#1e4884',
    cobaltLight: '#2960ad',
    washes: ['#de9a8a', '#eed8b6', '#86aba0', '#c77c6b'],
    skyTop: '#f7efe2',
    skyMid: '#e8d0ba',
    skyBot: '#998b88',
    archDark: '#473335',
    archMid: '#9c786e',
    gold: '#ddb260'
  },
  liang9: {
    seed: 1111,
    cobalt: '#1b4778',
    cobaltLight: '#255c9c',
    washes: ['#cc8449', '#3f7358', '#2e5485', '#e0b575'],
    skyTop: '#f3e7d2',
    skyMid: '#dbb891',
    skyBot: '#66756a',
    archDark: '#263830',
    archMid: '#597a63',
    gold: '#deb155'
  },
  couple_1622: {
    seed: 1212,
    cobalt: '#1a3678',
    cobaltLight: '#254fa6',
    washes: ['#cf5c36', '#edb258', '#426a73', '#9e3c28'],
    skyTop: '#f5dab0',
    skyMid: '#e69f5c',
    skyBot: '#576b73',
    archDark: '#362320',
    archMid: '#854c38',
    gold: '#f0bc5e'
  },
  couple_2026: {
    seed: 1313,
    cobalt: '#173a8a',
    cobaltLight: '#2452bd',
    washes: ['#e09458', '#529ca8', '#e6bd6c', '#295773'],
    skyTop: '#f5dec2',
    skyMid: '#e6a572',
    skyBot: '#397382',
    archDark: '#1b3d4a',
    archMid: '#4c808a',
    gold: '#edc168'
  },
  couple_2077: {
    seed: 1414,
    cobalt: '#18367a',
    cobaltLight: '#2c4fa3',
    washes: ['#32316e', '#e5b850', '#38b0c2', '#524087'],
    skyTop: '#dcd9ed',
    skyMid: '#8c89b8',
    skyBot: '#313469',
    archDark: '#19183b',
    archMid: '#3a4375',
    gold: '#f2ca6b'
  },
  narrator: {
    seed: 1515,
    cobalt: '#173a8a',
    cobaltLight: '#2452bd',
    washes: ['#2452ad', '#7ba1d9', '#d6b05c', '#1a3e8a'],
    skyTop: '#eef3fa',
    skyMid: '#bfd2ed',
    skyBot: '#406ab3',
    archDark: '#173a8a',
    archMid: '#3b6cc4',
    gold: '#d9ae4e'
  }
};

function buildBgArchitectureSvg(id, theme) {
  const dark = theme.archDark;
  const mid = theme.archMid;
  const gold = theme.gold;

  switch (id) {
    case 'sofia':
      return `
        <g opacity="0.54">
          <!-- Left two-tier octagonal tower of Pui Ching A-Block -->
          <polygon points="86,322 132,292 182,292 182,660 86,660" fill="${mid}" />
          <polygon points="100,292 132,242 164,292" fill="${dark}" opacity="0.74" />
          <rect x="114" y="334" width="16" height="34" rx="8" fill="#f6efe2" opacity="0.48" />
          <rect x="146" y="334" width="16" height="34" rx="8" fill="#f6efe2" opacity="0.48" />
          <!-- Central Pui Ching mint facade & pediment -->
          <rect x="180" y="318" width="244" height="342" fill="${mid}" opacity="0.82" />
          <polygon points="218,318 300,252 382,318" fill="${dark}" opacity="0.64" />
          <rect x="174" y="310" width="256" height="8" fill="${dark}" opacity="0.58" />
          <!-- Right arcade wing -->
          <rect x="422" y="344" width="106" height="316" fill="${mid}" opacity="0.74" />
          <path d="M438,658 L438,476 Q452,450 466,476 L466,658 Z" fill="#f6efe2" opacity="0.3" />
          <path d="M480,658 L480,476 Q494,450 508,476 L508,658 Z" fill="#f6efe2" opacity="0.3" />
          <!-- Arched upper windows -->
          <rect x="240" y="346" width="22" height="48" rx="11" fill="#f6efe2" opacity="0.36" />
          <rect x="288" y="338" width="24" height="54" rx="12" fill="#f6efe2" opacity="0.4" />
          <rect x="338" y="346" width="22" height="48" rx="11" fill="#f6efe2" opacity="0.36" />
          <!-- Central double-door porch recess -->
          <path d="M262,660 L262,468 Q300,432 338,468 L338,660 Z" fill="${dark}" opacity="0.48" />
        </g>
        <!-- Hexagram star sigil in gold -->
        <g opacity="0.62" stroke="${gold}" fill="none" stroke-width="1.4">
          <circle cx="300" cy="238" r="104" stroke-dasharray="4 6" />
          <polygon points="300,174 355,270 245,270" opacity="0.6" />
          <polygon points="300,302 355,206 245,206" opacity="0.6" />
        </g>
      `;

    case 'sofia_astral':
      return `
        <g opacity="0.44">
          <path d="M114,660 L114,420 Q300,275 486,420 L486,660 Z" fill="${dark}" opacity="0.38" />
          <path d="M188,660 L188,452 Q300,360 412,452 L412,660 Z" fill="${mid}" opacity="0.46" />
        </g>
        <g stroke="${gold}" fill="none" opacity="0.8">
          <circle cx="300" cy="264" r="150" stroke-width="1.3" stroke-dasharray="3 5" />
          <circle cx="300" cy="264" r="118" stroke-width="1.1" />
          <ellipse cx="300" cy="264" rx="168" ry="50" transform="rotate(-24 300 264)" stroke-width="1.6" />
          <ellipse cx="300" cy="264" rx="168" ry="50" transform="rotate(24 300 264)" stroke-width="1.3" opacity="0.72" />
          <line x1="300" y1="96" x2="300" y2="432" stroke-width="0.9" stroke-dasharray="2 6" />
        </g>
      `;

    case 'afonso':
      return `
        <!-- Intact 1622 St. Paul's Cathedral Baroque spire & Portuguese red-cross caravel -->
        <g opacity="0.5">
          <rect x="104" y="396" width="166" height="264" fill="${mid}" />
          <rect x="126" y="302" width="122" height="98" fill="${mid}" />
          <rect x="148" y="228" width="78" height="78" fill="${dark}" opacity="0.74" />
          <polygon points="140,228 187,168 234,228" fill="${dark}" opacity="0.86" />
          <line x1="187" y1="138" x2="187" y2="172" stroke="${dark}" stroke-width="4" />
          <line x1="172" y1="152" x2="202" y2="152" stroke="${dark}" stroke-width="3.5" />
          <path d="M170,660 L170,540 Q187,518 204,540 L204,660 Z" fill="#f6efe2" opacity="0.3" />
          <!-- Caravel mast & wind-filled lateen sails -->
          <line x1="454" y1="196" x2="454" y2="610" stroke="${dark}" stroke-width="3.2" opacity="0.72" />
          <path d="M454,212 Q524,284 496,416 Q464,394 454,404 Z" fill="${mid}" opacity="0.74" />
          <path d="M388,292 Q442,340 422,438 Q398,424 388,432 Z" fill="${dark}" opacity="0.5" />
        </g>
        <g stroke="${gold}" fill="none" opacity="0.58" stroke-width="1.3">
          <circle cx="300" cy="256" r="134" stroke-dasharray="6 4" />
        </g>
      `;

    case 'ryan':
      return `
        <!-- Macau Sai Van / cable-stayed bridge & soft cyan circuit horizon -->
        <g opacity="0.48">
          <polygon points="142,590 156,374 170,590" fill="${dark}" opacity="0.62" />
          <polygon points="430,590 444,374 458,590" fill="${dark}" opacity="0.62" />
          <line x1="74" y1="518" x2="526" y2="518" stroke="${dark}" stroke-width="4" opacity="0.58" />
          <path d="M156,384 L92,518 M156,384 L120,518 M156,384 L208,518 M156,384 L238,518" stroke="${mid}" stroke-width="1.5" />
          <path d="M444,384 L366,518 M444,384 L402,518 M444,384 L488,518 M444,384 L518,518" stroke="${mid}" stroke-width="1.5" />
          <path d="M74,660 Q180,456 320,500 Q440,532 526,482 L526,660 Z" fill="${mid}" opacity="0.56" />
        </g>
        <g stroke="#44bed4" fill="none" opacity="0.54" stroke-width="1.4">
          <circle cx="300" cy="256" r="126" stroke-dasharray="8 6" />
          <path d="M126,232 L176,232 L200,256 L236,256" />
          <path d="M474,284 L422,284 L398,260 L364,260" />
        </g>
      `;

    case 'zero7':
      return `
        <!-- 2077 cyber Macau monolithic towers & telemetry arcs -->
        <g opacity="0.58">
          <polygon points="102,660 132,258 164,284 164,660" fill="${dark}" />
          <polygon points="180,660 216,178 244,198 244,660" fill="${mid}" opacity="0.72" />
          <polygon points="366,660 400,192 430,220 430,660" fill="${mid}" opacity="0.68" />
          <polygon points="440,660 466,280 500,302 500,660" fill="${dark}" />
          <line x1="118" y1="340" x2="220" y2="470" stroke="#38bdf8" stroke-width="1.2" opacity="0.48" />
          <line x1="396" y1="320" x2="482" y2="450" stroke="#38bdf8" stroke-width="1.2" opacity="0.48" />
        </g>
        <g stroke="#38bdf8" fill="none" opacity="0.56" stroke-width="1.3">
          <circle cx="300" cy="252" r="140" stroke-dasharray="12 5 3 5" />
          <path d="M148,172 L452,472" stroke-width="0.9" opacity="0.32" />
        </g>
      `;

    case 'ajan':
      return `
        <!-- 1622 A-Ma Temple coastal eaves, Ship Rock outline & serene harbour mist -->
        <g opacity="0.52">
          <!-- Distant sweeping Chinese Lingnan roof eaves of A-Ma Temple -->
          <path d="M84,386 Q152,344 218,386 L204,412 L98,412 Z" fill="${dark}" opacity="0.78" />
          <path d="M108,412 L108,568 L196,568 L196,412 Z" fill="${mid}" opacity="0.66" />
          <!-- Calm coastal rocks & harbour horizon -->
          <path d="M366,586 Q396,466 462,456 Q518,468 530,586 Z" fill="${mid}" opacity="0.74" />
          <path d="M74,562 Q190,542 300,560 Q415,578 526,554 L526,660 L74,660 Z" fill="${dark}" opacity="0.34" />
          <!-- Graceful rising temple incense & sea-mist wisps -->
          <path d="M152,332 C134,296 176,262 150,224 C134,198 164,172 154,148" fill="none" stroke="#faf5ea" stroke-width="3.6" opacity="0.56" />
          <path d="M428,348 C406,306 456,268 426,220 C406,190 438,154 426,124" fill="none" stroke="#faf5ea" stroke-width="3.2" opacity="0.44" />
        </g>
        <g stroke="${gold}" fill="none" opacity="0.56" stroke-width="1.2">
          <circle cx="300" cy="254" r="128" stroke-dasharray="3 6" />
        </g>
      `;

    case 'old_man':
      return `
        <!-- Lou Lim Ioc pavilion eaves & 9-bend zigzag bridge (九曲橋) -->
        <g opacity="0.48">
          <path d="M358,312 Q418,266 478,312 L462,336 L374,336 Z" fill="${dark}" opacity="0.74" />
          <path d="M372,348 Q418,314 464,348 L452,368 L384,368 Z" fill="${mid}" opacity="0.82" />
          <rect x="392" y="368" width="52" height="118" fill="${mid}" opacity="0.66" />
          <polyline points="82,566 170,526 225,556 335,516 420,546 520,510" fill="none" stroke="${dark}" stroke-width="9" opacity="0.56" />
          <polyline points="82,554 170,514 225,544 335,504 420,534 520,498" fill="none" stroke="${mid}" stroke-width="2.5" opacity="0.72" />
        </g>
        <g stroke="${gold}" fill="none" opacity="0.54" stroke-width="1.2">
          <circle cx="300" cy="256" r="130" stroke-dasharray="5 5" />
        </g>
      `;

    case 'luzhisi':
      return `
        <!-- Obsidian cyber-monolith skyline & subtle 5:53 golden astrolabe clock arcs -->
        <g opacity="0.48">
          <path d="M88,660 L88,468 L142,468 L142,428 L196,428 L196,660 Z" fill="${dark}" opacity="0.54" />
          <path d="M406,660 L406,432 L462,432 L462,476 L518,476 L518,660 Z" fill="${dark}" opacity="0.54" />
        </g>
        <!-- Subtle 5:53 clock arcs & astrolabe dial in Azulejo sky -->
        <g transform="translate(300,264)" stroke="${gold}" fill="none">
          <circle cx="0" cy="0" r="172" stroke-width="1.6" opacity="0.76" />
          <circle cx="0" cy="0" r="154" stroke-width="1.0" stroke-dasharray="5 7" opacity="0.62" />
          <circle cx="0" cy="0" r="134" stroke-width="1.2" opacity="0.52" />
          <!-- 12 clock hour ticks -->
          ${Array.from({ length: 12 }, (_, idx) => {
            const ang = (idx * 30 - 90) * (Math.PI / 180);
            const x1 = Math.cos(ang) * 144;
            const y1 = Math.sin(ang) * 144;
            const x2 = Math.cos(ang) * 158;
            const y2 = Math.sin(ang) * 158;
            return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="${idx % 3 === 0 ? 2.2 : 1.1}" opacity="0.7" />`;
          }).join('')}
          <!-- Subtle clock arcs freezing at 5:53 (hour ~176.5deg, minute 318deg) -->
          <path d="M0,-134 A134,134 0 1,1 -89.7,-99.5" stroke-width="2.6" opacity="0.58" />
          <line x1="0" y1="0" x2="8" y2="108" stroke-width="2.4" stroke-linecap="round" opacity="0.62" />
          <line x1="0" y1="0" x2="-92" y2="-102" stroke-width="1.8" stroke-linecap="round" opacity="0.72" />
          <ellipse cx="0" cy="0" rx="166" ry="56" transform="rotate(-26)" stroke-width="1.2" opacity="0.5" />
          <ellipse cx="0" cy="0" rx="166" ry="56" transform="rotate(26)" stroke-width="1.2" opacity="0.5" />
        </g>
      `;

    case 'corvo':
      return `
        <!-- Monument Valley dark colonnade arches + golden C-01 targeting arcs -->
        <g opacity="0.54">
          <rect x="78" y="256" width="444" height="404" fill="${dark}" opacity="0.32" />
          <path d="M102,660 L102,386 Q146,336 190,386 L190,660 Z" fill="${mid}" opacity="0.56" />
          <path d="M222,660 L222,386 Q266,336 310,386 L310,660 Z" fill="${mid}" opacity="0.46" />
          <path d="M342,660 L342,386 Q386,336 430,386 L430,660 Z" fill="${mid}" opacity="0.56" />
          <path d="M462,660 L462,386 Q494,350 524,386 L524,660 Z" fill="${mid}" opacity="0.46" />
        </g>
        <!-- Precision golden targeting arc behind Corvo -->
        <g transform="translate(300,262)" stroke="${gold}" fill="none">
          <path d="M-136,-72 A154,154 0 0,1 136,-72" stroke-width="2.2" opacity="0.82" />
          <path d="M-156,12 A156,156 0 0,1 156,12" stroke-width="1.2" stroke-dasharray="6 6" opacity="0.68" />
          <path d="M-112,86 A140,140 0 0,0 112,86" stroke-width="1.6" stroke-dasharray="14 6 4 6" opacity="0.65" />
          <line x1="-172" y1="0" x2="-128" y2="0" stroke-width="1.6" opacity="0.72" />
          <line x1="128" y1="0" x2="172" y2="0" stroke-width="1.6" opacity="0.72" />
          <line x1="0" y1="-172" x2="0" y2="-134" stroke-width="1.6" opacity="0.72" />
        </g>
      `;

    case 'mother':
      return `
        <!-- 2026 warm domestic Macau Lou Residence arched veranda & waiting porch lantern -->
        <g opacity="0.48">
          <rect x="116" y="314" width="368" height="346" fill="${mid}" opacity="0.34" />
          <path d="M156,660 L156,432 Q212,374 268,432 L268,660 Z" fill="#fff8ec" opacity="0.38" />
          <path d="M332,660 L332,432 Q388,374 444,432 L444,660 Z" fill="#fff8ec" opacity="0.38" />
          <!-- Warm glowing domestic porch lantern left on for Sofia & Ryan -->
          <line x1="138" y1="224" x2="138" y2="274" stroke="${dark}" stroke-width="2.2" opacity="0.7" />
          <circle cx="138" cy="296" r="36" fill="#ffdf94" opacity="0.44" filter="url(#soft-glow)" />
          <rect x="124" y="274" width="28" height="38" rx="10" fill="#fce4a6" stroke="${dark}" stroke-width="2" />
          <line x1="124" y1="286" x2="152" y2="286" stroke="${dark}" stroke-width="1.2" opacity="0.6" />
          <line x1="124" y1="300" x2="152" y2="300" stroke="${dark}" stroke-width="1.2" opacity="0.6" />
          <!-- Soft hanging garden vine leaves on right -->
          <path d="M466,188 Q432,262 456,356 M484,202 Q458,284 476,374" fill="none" stroke="#5c7d68" stroke-width="2.4" opacity="0.54" />
        </g>
        <g stroke="${gold}" fill="none" opacity="0.5" stroke-width="1.2">
          <circle cx="300" cy="256" r="126" stroke-dasharray="4 6" />
        </g>
      `;

    case 'liang9':
      return `
        <!-- 2026 Inner Harbour fish market timber veranda & warm amber lantern -->
        <g opacity="0.5">
          <path d="M84,296 L516,296 L490,342 L110,342 Z" fill="${dark}" opacity="0.62" />
          <rect x="120" y="342" width="16" height="318" fill="${dark}" opacity="0.52" />
          <rect x="464" y="342" width="16" height="318" fill="${dark}" opacity="0.52" />
          <line x1="440" y1="196" x2="440" y2="256" stroke="${dark}" stroke-width="2" />
          <ellipse cx="440" cy="278" rx="22" ry="26" fill="#d9753b" opacity="0.78" />
          <rect x="428" y="252" width="24" height="5" fill="${dark}" />
          <!-- Subtle curling wood-shaving / cloud filigree in left sky -->
          <path d="M116,232 Q146,192 186,216 Q164,234 182,258 Q144,268 116,232 Z" fill="${gold}" opacity="0.52" />
        </g>
        <g stroke="${gold}" fill="none" opacity="0.48" stroke-width="1.2">
          <circle cx="300" cy="256" r="126" stroke-dasharray="5 5" />
        </g>
      `;

    case 'couple_1622':
      return `
        <!-- 1622 untouched A-Ma coastline, Ship Rock (媽閣帆石) & harbour stone lantern (NO ruined church!) -->
        <g>
          <!-- Soft untouched 1622 coastal ridge & sea horizon -->
          <path d="M74,478 Q168,424 268,458 Q376,436 526,468 L526,530 L74,530 Z" fill="${mid}" opacity="0.45" />
          <rect x="74" y="514" width="452" height="146" fill="#3a636e" opacity="0.44" />
          <g stroke="#f7d594" stroke-width="1.6" opacity="0.42">
            <line x1="120" y1="538" x2="245" y2="538" />
            <line x1="340" y1="548" x2="480" y2="548" />
            <line x1="168" y1="562" x2="310" y2="562" />
          </g>
          <!-- Layered coastal granite boulders of A-Ma Barra Point & Ship Rock (媽閣帆石) -->
          <path d="M74,564 L74,478 Q98,444 134,458 Q152,442 184,462 Q212,486 204,564 Z" fill="${mid}" opacity="0.72" />
          <path d="M98,554 Q110,438 158,418 Q198,434 202,510 Q198,546 176,558 Z" fill="#6b5c4d" opacity="0.92" />
          <!-- Weathered mineral-gold & red carved sailboat stone relief on Ship Rock (帆石刻舟) -->
          <path d="M126,486 Q150,498 174,484 L166,498 Q148,504 132,498 Z" fill="#c94b34" opacity="0.88" />
          <line x1="150" y1="452" x2="150" y2="488" stroke="#f0c878" stroke-width="2" opacity="0.9" />
          <path d="M150,454 Q176,466 164,483 L150,483 Z" fill="#e8b861" opacity="0.86" />
          <!-- Distant curved Ming-era A-Ma pavilion eave silhouette peeking behind hillside -->
          <path d="M84,424 Q118,402 152,418 L142,428 L94,428 Z" fill="${dark}" opacity="0.65" />
          <!-- Distant 1622 junk sail on harbour water -->
          <path d="M396,472 L424,492 L398,510 Z" fill="${dark}" opacity="0.46" />
          <!-- Traditional 1622 seaside harbour stone lantern on right shore -->
          <g transform="translate(464,442)" opacity="0.82">
            <rect x="-12" y="42" width="24" height="72" fill="${dark}" />
            <rect x="-20" y="20" width="40" height="24" rx="4" fill="${dark}" />
            <circle cx="0" cy="32" r="22" fill="#ffe18c" opacity="0.45" filter="url(#soft-glow)" />
            <rect x="-8" y="24" width="16" height="16" rx="3" fill="#ffdf85" />
            <polygon points="-28,20 0,-2 28,20" fill="${dark}" />
          </g>
        </g>
        <g stroke="${gold}" fill="none" opacity="0.52" stroke-width="1.2">
          <circle cx="300" cy="272" r="144" stroke-dasharray="4 6" />
        </g>
      `;

    case 'couple_2026':
      return `
        <!-- 2026 Macao dusk sky over waterfront promenade (NO umbrella, NO rain!) -->
        <g>
          <!-- Glowing golden dusk sun setting behind Macau harbour -->
          <circle cx="300" cy="336" r="108" fill="#ffe7ad" opacity="0.42" filter="url(#soft-glow)" />
          <circle cx="300" cy="336" r="54" fill="#fff0c4" opacity="0.54" />
          <!-- Gentle waterfront palm/banyan canopy & Macau coastal bridge horizon -->
          <path d="M74,476 Q178,434 274,468 Q390,446 526,478 L526,536 L74,536 Z" fill="${mid}" opacity="0.5" />
          <rect x="74" y="514" width="452" height="146" fill="#2b6170" opacity="0.48" />
          <line x1="74" y1="514" x2="526" y2="514" stroke="#f5cb78" stroke-width="1.8" opacity="0.68" />
          <!-- Subtle sunset sparkles on bay water -->
          <g stroke="#ffe39e" stroke-width="1.8" opacity="0.56">
            <line x1="234" y1="532" x2="366" y2="532" />
            <line x1="258" y1="546" x2="342" y2="546" />
            <line x1="274" y1="560" x2="326" y2="560" />
          </g>
          <!-- Warm streetlamp post on left promenade -->
          <line x1="118" y1="224" x2="118" y2="534" stroke="${dark}" stroke-width="3.6" opacity="0.62" />
          <circle cx="118" cy="222" r="14" fill="#ffe8a8" opacity="0.78" />
        </g>
        <g stroke="${gold}" fill="none" opacity="0.48" stroke-width="1.2">
          <circle cx="300" cy="262" r="138" stroke-dasharray="5 5" />
        </g>
      `;

    case 'couple_2077':
      return `
        <g opacity="0.58">
          <polygon points="86,660 110,254 146,284 146,660" fill="${dark}" opacity="0.84" />
          <polygon points="152,660 174,330 204,354 204,660" fill="${mid}" opacity="0.62" />
          <polygon points="396,660 418,330 448,354 448,660" fill="${mid}" opacity="0.62" />
          <polygon points="454,660 478,250 514,284 514,660" fill="${dark}" opacity="0.84" />
        </g>
        <g>
          <rect x="282" y="76" width="36" height="584" fill="${gold}" opacity="0.32" filter="url(#soft-glow)" />
          <rect x="295" y="76" width="10" height="584" fill="#fff3c4" opacity="0.68" />
          <line x1="280" y1="96" x2="280" y2="656" stroke="${gold}" stroke-width="1.3" opacity="0.78" />
          <line x1="320" y1="96" x2="320" y2="656" stroke="${gold}" stroke-width="1.3" opacity="0.78" />
        </g>
      `;

    case 'narrator':
      return `
        <!-- Layered Monument Valley corridor arches & astrolabe meridian rings -->
        <g opacity="0.34">
          <path d="M108,656 L108,356 Q300,204 492,356 L492,656 Z" fill="${mid}" />
          <path d="M164,656 L164,394 Q300,276 436,394 L436,656 Z" fill="${dark}" />
        </g>
        <g stroke="${gold}" fill="none" opacity="0.76">
          <circle cx="300" cy="356" r="196" stroke-width="1.8" />
          <circle cx="300" cy="356" r="168" stroke-width="1.2" stroke-dasharray="4 5" />
          <circle cx="300" cy="356" r="142" stroke-width="1.6" />
          <line x1="300" y1="126" x2="300" y2="586" stroke-width="1.1" opacity="0.58" />
          <line x1="88" y1="356" x2="512" y2="356" stroke-width="1.1" opacity="0.58" />
        </g>
      `;

    default:
      return '';
  }
}

/**
 * Character + Foreground Props SVG (STRICTLY ZERO facial features: 0 eyes, 0 nose, 0 mouth, 0 eye-dots, 0 glasses!)
 * Crafted in Monument Valley × Gris mineral-watercolor geometric silhouettes.
 */
function buildCharacterSvg(id, theme) {
  const gold = theme.gold;

  const porcelainHead = (cx, cy, rx = 37, ry = 46, skin = '#f8f0e2', shadow = '#cbd7e8') => `
    <g>
      <path d="M${cx - rx},${cy - ry * 0.24}
               C${cx - rx},${cy - ry * 1.04} ${cx + rx},${cy - ry * 1.04} ${cx + rx},${cy - ry * 0.24}
               C${cx + rx},${cy + ry * 0.56} ${cx + rx * 0.52},${cy + ry * 0.96} ${cx},${cy + ry}
               C${cx - rx * 0.52},${cy + ry * 0.96} ${cx - rx},${cy + ry * 0.56} ${cx - rx},${cy - ry * 0.24} Z"
            fill="${skin}" stroke="#3b3630" stroke-width="1.1" stroke-opacity="0.28" />
      <path d="M${cx + 4},${cy - ry * 0.94}
               C${cx + rx * 0.88},${cy - ry * 0.84} ${cx + rx},${cy - ry * 0.24} ${cx + rx},${cy - ry * 0.24}
               C${cx + rx},${cy + ry * 0.56} ${cx + rx * 0.52},${cy + ry * 0.96} ${cx},${cy + ry}
               C${cx + 12},${cy + ry * 0.52} ${cx + 14},${cy - ry * 0.14} ${cx + 4},${cy - ry * 0.94} Z"
            fill="${shadow}" opacity="0.54" />
    </g>
  `;

  switch (id) {
    case 'sofia':
      return `
        <!-- Sleek sweeping black high-mid ponytail over left shoulder -->
        <path d="M258,244 C194,274 162,380 182,516 C204,468 226,422 252,392 Z" fill="#172030" />
        <path d="M248,256 C204,310 194,398 208,476" fill="none" stroke="#394f78" stroke-width="2.4" opacity="0.62" />
        <!-- Tapered Pui Ching navy uniform blazer (framed cleanly above y=656) -->
        <path d="M164,660 L192,454 Q212,400 272,382 L328,382 Q388,400 408,454 L436,660 Z" fill="url(#sofia-coat)" />
        <path d="M300,382 L328,382 Q388,400 408,454 L436,660 L300,660 Z" fill="#0f1b38" opacity="0.42" />
        <path d="M210,492 Q224,572 220,656 M390,492 Q376,572 380,656" fill="none" stroke="#0d152b" stroke-width="2" opacity="0.46" />
        <!-- Crimson-piped collar & crisp white shirt V -->
        <path d="M264,386 L300,476 L336,386" fill="none" stroke="#c9342d" stroke-width="5.2" stroke-linejoin="round" />
        <polygon points="270,383 330,383 300,470" fill="#f7f2e8" />
        <!-- Crimson bow ribbon -->
        <polygon points="300,404 276,392 279,416" fill="#c9342d" />
        <polygon points="300,404 324,392 321,416" fill="#a3231d" />
        <polygon points="295,408 283,448 293,452" fill="#c9342d" />
        <polygon points="305,408 317,448 307,452" fill="#a3231d" />
        <circle cx="300" cy="404" r="5.5" fill="#df4b44" />
        <!-- Gold-foil six-pointed star emblem on left chest -->
        <g transform="translate(344,462)">
          <circle cx="0" cy="0" r="15" fill="${gold}" opacity="0.28" />
          <polygon points="0,-12 10.5,6.5 -10.5,6.5" fill="${gold}" />
          <polygon points="0,12 10.5,-6.5 -10.5,-6.5" fill="${gold}" />
        </g>
        <!-- Clean tapered neck & smooth 3/4 ivory head (0 facial features) -->
        <path d="M285,316 L315,316 L320,386 Q300,395 280,386 Z" fill="#eadccb" />
        <path d="M285,324 Q300,340 315,324 L317,350 Q300,358 283,350 Z" fill="#9fb2cc" opacity="0.48" />
        ${porcelainHead(300, 274, 37, 46, '#f8f0e2', '#c8d6eb')}
        <!-- Refined black hair crown & clean modern bangs + crimson ribbon tie -->
        <path d="M258,280 C254,220 280,196 303,196 C334,196 346,226 342,280
                 C334,250 322,240 306,258 C294,242 280,242 268,266 Z"
              fill="#172030" />
        <ellipse cx="255" cy="242" rx="5" ry="10" transform="rotate(-32 255 242)" fill="#c9342d" />
        <!-- Ancestral bronze short-sword with golden resonance blade -->
        <g>
          <polygon points="390,464 476,204 516,220 412,484" fill="#fae191" opacity="0.24" filter="url(#soft-glow)" />
          <polygon points="396,468 460,274 471,279 406,474" fill="#ebc975" />
          <line x1="382" y1="462" x2="418" y2="478" stroke="#8f6728" stroke-width="6.5" stroke-linecap="round" />
          <line x1="398" y1="472" x2="378" y2="518" stroke="#593f16" stroke-width="7.5" stroke-linecap="round" />
          <circle cx="466" cy="276" r="9" fill="#fff7d1" filter="url(#soft-glow)" />
        </g>
      `;

    case 'sofia_astral':
      return `
        <g opacity="0.92">
          <ellipse cx="300" cy="364" rx="146" ry="42" transform="rotate(-18 300 364)" fill="none" stroke="#f5da87" stroke-width="2.4" />
          <ellipse cx="300" cy="364" rx="136" ry="36" transform="rotate(20 300 364)" fill="none" stroke="#be9af0" stroke-width="2" />
          <circle cx="300" cy="322" r="114" fill="none" stroke="#f5da87" stroke-width="1" stroke-dasharray="3 6" opacity="0.72" />
          <path d="M262,240 C196,274 170,378 196,496 C218,452 234,412 254,386 Z" fill="url(#astral-hair)" opacity="0.78" />
          <path d="M170,660 L198,454 Q216,400 272,382 L328,382 Q384,400 402,454 L430,660 Z" fill="url(#astral-grad)" opacity="0.88" />
          <path d="M266,386 L300,470 L334,386" fill="none" stroke="#fae29b" stroke-width="2.8" />
          <g transform="translate(342,462)">
            <circle cx="0" cy="0" r="15" fill="#fff2be" opacity="0.34" filter="url(#soft-glow)" />
            <polygon points="0,-11 9.5,5.5 -9.5,5.5" fill="#fff3c2" />
            <polygon points="0,11 9.5,-5.5 -9.5,-5.5" fill="#fff3c2" />
          </g>
          <path d="M285,316 L315,316 L318,386 L282,386 Z" fill="#ebd9f7" opacity="0.88" />
          ${porcelainHead(300, 274, 37, 46, '#f7ebff', '#cca6eb')}
          <path d="M258,278 C254,220 280,196 303,196 C334,196 346,226 342,278
                   C334,250 322,242 306,260 C294,242 280,244 268,266 Z"
                fill="#7353ab" opacity="0.86" />
          <g fill="#fff5cc">
            <polygon points="186,266 190,278 202,282 190,286 186,298 182,286 170,282 182,278" />
            <polygon points="418,236 422,250 436,254 422,258 418,272 414,258 400,254 414,250" />
            <circle cx="386" cy="418" r="4" />
            <circle cx="208" cy="482" r="4.5" />
          </g>
        </g>
      `;

    case 'afonso':
      return `
        <!-- Baroque golden cascading curls (ZERO BEARD, ZERO FACIAL FEATURES) -->
        <path d="M238,260 C216,302 216,368 236,416 Q254,402 268,418 L332,418 Q346,402 364,416 C384,368 384,302 362,260 Z" fill="url(#afonso-hair)" />
        <path d="M236,318 Q214,358 234,404 Q250,386 260,414" fill="#cfa03e" />
        <path d="M364,318 Q386,358 366,404 Q350,386 340,414" fill="#b88428" />
        <!-- Ochre-crimson baroque coat & shoulder cloak -->
        <path d="M144,660 L178,448 Q206,390 272,376 L328,376 Q394,390 422,448 L456,660 Z" fill="url(#afonso-coat)" />
        <path d="M300,376 L328,376 Q394,390 422,448 L456,660 L300,660 Z" fill="#5e1613" opacity="0.45" />
        <path d="M200,482 Q218,568 214,656 M400,482 Q382,568 386,656" fill="none" stroke="#4d110e" stroke-width="2" opacity="0.48" />
        <!-- Ornate gold filigree trim -->
        <path d="M258,380 L274,660 M342,380 L326,660" stroke="${gold}" stroke-width="4.2" />
        <path d="M242,396 Q260,488 254,656 M358,396 Q340,488 346,656" stroke="${gold}" stroke-width="1.8" stroke-dasharray="6 4" opacity="0.9" />
        <!-- Baroque ruffled white lace jabot cravat -->
        <path d="M282,374 L318,374 L328,444 Q314,458 300,446 Q286,458 272,444 Z" fill="#f7efe2" />
        <path d="M286,392 L314,392 M282,410 L318,410 M278,426 L322,426" stroke="#c9bba6" stroke-width="1.6" />
        <!-- Smooth clean jawline & neck — STRICTLY ZERO BEARD, ZERO FACIAL FEATURES -->
        <path d="M284,318 L316,318 L320,380 Q300,390 280,380 Z" fill="#eedcc8" />
        ${porcelainHead(300, 272, 37, 46, '#faf2e5', '#d9c5b4')}
        <!-- Baroque golden wavy hair parting & temple curls -->
        <path d="M250,278 C244,224 268,188 300,188 C332,188 356,224 350,278
                 C344,246 328,230 300,242 C272,230 256,246 250,278 Z"
              fill="#e3b652" />
        <path d="M250,256 Q226,296 240,348 Q254,330 258,298 Z" fill="#d1a03b" />
        <path d="M350,256 Q374,296 360,348 Q346,330 342,298 Z" fill="#ba892b" />
        <path d="M256,222 Q278,208 300,222 Q322,208 344,222" fill="none" stroke="#8f6318" stroke-width="1.5" opacity="0.52" />
        <!-- 1622 flintlock musket across chest -->
        <g transform="rotate(-28 306 512)">
          <path d="M116,496 L194,502 L476,502 L476,513 L200,516 L120,530 Q112,512 116,496 Z" fill="#4f2d1e" />
          <rect x="246" y="495" width="242" height="8" rx="2" fill="#2c3542" />
          <rect x="338" y="493" width="12" height="22" fill="${gold}" />
          <rect x="410" y="493" width="10" height="20" fill="${gold}" />
          <path d="M226,510 Q236,498 250,510" fill="none" stroke="${gold}" stroke-width="3.5" />
          <path d="M200,516 Q212,532 230,516" fill="none" stroke="${gold}" stroke-width="2.5" />
        </g>
      `;

    case 'ryan':
      return `
        <!-- Backpack behind left shoulder -->
        <path d="M172,404 Q158,480 166,614 L244,614 L244,404 Z" fill="#212e42" />
        <path d="M172,404 Q194,372 242,376 L242,414 Z" fill="#2c3c57" />
        <!-- Well-proportioned athletic shoulders & layered jacket -->
        <path d="M172,660 L198,448 Q218,392 268,378 L332,378 Q382,392 402,448 L428,660 Z" fill="url(#ryan-coat)" />
        <polygon points="274,378 326,378 318,660 282,660" fill="#6f7e91" opacity="0.58" />
        <!-- Backpack straps & chest buckle -->
        <path d="M236,382 Q242,482 254,588" stroke="#161f2e" stroke-width="14" stroke-linecap="round" fill="none" />
        <path d="M362,386 Q356,482 348,588" stroke="#161f2e" stroke-width="12" stroke-linecap="round" opacity="0.72" fill="none" />
        <path d="M254,508 Q300,518 348,508" stroke="#161f2e" stroke-width="9" fill="none" />
        <rect x="292" y="504" width="16" height="16" rx="3" fill="#4f6078" />
        <!-- Balanced youthful neck (wider than before for natural proportions) & faceless 3/4 head -->
        <path d="M280,312 L320,312 L324,382 Q300,390 276,382 Z" fill="#efe2d1" />
        ${porcelainHead(300, 272, 37, 45, '#f8f0e4', '#bfd6e6')}
        <!-- Subtle cyan cybernetic neck/collarbone circuit traces -->
        <g stroke="#34c5db" fill="none" stroke-width="2.4" opacity="0.92">
          <path d="M326,318 L316,340 L316,390 L338,422" />
          <circle cx="338" cy="422" r="3.8" fill="#78edff" />
          <path d="M316,364 L300,374" stroke-width="1.8" />
        </g>
        <!-- Tousled dark spiky hair + signature sweeping golden crown highlight -->
        <path d="M252,278 C248,236 266,204 296,192 C328,190 352,218 348,278
                 L336,252 L320,268 L304,244 L288,268 L272,248 Z"
              fill="#181e28" />
        <path d="M292,194 Q314,206 306,264 Q296,248 284,244 Z" fill="#edd272" />
      `;

    case 'zero7':
      return `
        <!-- High-speed cybernetic afterimage echoes (高速殘影) flanking Zero-7 -->
        <g opacity="0.22">
          <path d="M114,660 L144,444 Q174,380 236,370 L282,370 L256,660 Z" fill="#38bdf8" />
          <circle cx="248" cy="272" r="36" fill="#38bdf8" />
        </g>
        <g opacity="0.16">
          <path d="M332,370 L376,370 Q432,380 462,444 L488,660 L348,660 Z" fill="#22d3ee" />
          <circle cx="354" cy="272" r="36" fill="#22d3ee" />
        </g>
        <!-- Battle-worn high-collar dark gray trench coat (戰損深灰長風衣) -->
        <path d="M142,660 L174,448 Q208,384 272,372 L328,372 Q392,384 426,448 L458,660 Z" fill="url(#zero7-coat)" />
        <polygon points="218,398 252,306 286,390" fill="#364152" />
        <polygon points="382,398 348,306 314,390" fill="#1b222e" />
        <path d="M162,468 Q206,400 252,420 L236,488 Z" fill="#1b2129" />
        <path d="M438,468 Q394,400 348,420 L364,488 Z" fill="#1b2129" />
        <!-- Battle-frayed coat pleats & shoulder scar seams -->
        <path d="M198,504 Q216,580 212,656 M402,504 Q384,580 388,656" fill="none" stroke="#10151f" stroke-width="2" opacity="0.6" />
        <!-- Glowing cybernetic left-arm plasma cannon assembly (左臂青藍發光腦機迴路＋等離子光炮) -->
        <g>
          <path d="M372,446 L422,520 L402,656 L354,656 L362,530 Z" fill="#141e2b" stroke="#38bdf8" stroke-width="1.6" />
          <circle cx="394" cy="590" r="34" fill="#38bdf8" opacity="0.34" filter="url(#soft-glow)" />
          <polygon points="376,554 414,554 406,646 368,646" fill="#0d1724" stroke="#6ee7ff" stroke-width="1.8" />
          <line x1="388" y1="564" x2="384" y2="636" stroke="#a5f3fc" stroke-width="3.2" opacity="0.95" />
          <circle cx="388" cy="596" r="8" fill="#a5f3fc" filter="url(#soft-glow)" />
        </g>
        <!-- Brain-machine cyan traces ascending along collar -->
        <g stroke="#38bdf8" fill="none" stroke-width="2.2" opacity="0.92">
          <path d="M352,432 L386,490 L382,556" />
          <path d="M366,442 L398,498" stroke-width="1.3" opacity="0.7" />
          <circle cx="386" cy="490" r="3.8" fill="#a5f3fc" />
        </g>
        <!-- Faceless shadowed Ryan silhouette: ZERO eyes, ZERO nose, ZERO mouth, ZERO glasses/visor! -->
        <path d="M286,318 L314,318 L318,382 L282,382 Z" fill="#5e6d82" />
        ${porcelainHead(300, 272, 35, 44, '#92a3b8', '#2a374a')}
        <!-- Asymmetric lower-cheek & jaw cybernetic neural circuit trace (below eye-level, NOT glasses!) -->
        <path d="M312,350 L318,318 L330,304 L326,286" fill="none" stroke="#5eead4" stroke-width="2.2" stroke-linecap="round" opacity="0.95" />
        <circle cx="326" cy="286" r="2.6" fill="#b8fff4" />
        <!-- Windswept obsidian hair with Zero-7's signature muted gold top highlight streak (挑染金髮) -->
        <path d="M256,272 C252,214 276,190 302,190 C332,190 348,218 342,272
                 L332,248 L314,264 L298,242 L276,264 Z"
              fill="#111722" />
        <path d="M284,200 Q306,184 330,204 Q314,218 302,240 Q294,216 284,200 Z" fill="#d9a841" opacity="0.9" />
      `;

    case 'ajan':
      return `
        <!-- 1622 ADULT LINGNAN YOUNG WOMAN (graceful adult shoulders, coiled hairpin bun, glowing sea-blue beads) -->
        <!-- Flowing dark coiled bun & soft Lingnan side locks behind neck -->
        <ellipse cx="300" cy="212" rx="34" ry="24" fill="#171e29" />
        <path d="M254,282 C246,326 248,364 258,388 L342,388 C352,364 354,326 346,282 Z" fill="#1b2230" opacity="0.88" />
        <!-- Adult 1622 Lingnan cross-collar tunic (交領廣袖衫) with jade-teal trim & silk sash -->
        <path d="M168,660 L194,442 Q218,392 272,380 L328,380 Q382,392 406,442 L432,660 Z" fill="url(#ajan-tunic)" />
        <path d="M300,380 L328,380 Q382,392 406,442 L432,660 L300,660 Z" fill="#cfc19f" opacity="0.46" />
        <!-- Traditional Lingnan right-over-left embroidered collar & teal-jade border -->
        <path d="M266,382 L322,478 L338,382" fill="none" stroke="#4d8f7e" stroke-width="7" stroke-linejoin="round" />
        <path d="M274,384 L318,462" fill="none" stroke="#d4a64a" stroke-width="1.6" opacity="0.8" />
        <!-- Sea-teal silk waist sash -->
        <path d="M236,542 Q300,564 364,542 L372,588 Q300,608 228,588 Z" fill="#4b8c7c" opacity="0.88" />
        <path d="M242,560 Q300,580 358,560" fill="none" stroke="${gold}" stroke-width="1.5" opacity="0.7" />
        <!-- Graceful slender adult neck & serene 3/4 ivory face (ZERO facial features) -->
        <path d="M285,314 L315,314 L318,384 Q300,394 282,384 Z" fill="#efe2d0" />
        <path d="M285,322 Q300,336 315,322 L316,348 Q300,356 284,348 Z" fill="#a8c2bd" opacity="0.48" />
        ${porcelainHead(300, 272, 36, 45, '#faf2e6', '#bfd1cb')}
        <!-- Adult 1622 Lingnan parted hair crown + sculpted jade & gold hairpin (翠玉金簪) -->
        <path d="M258,278 C254,224 278,200 300,200 C322,200 346,224 342,278
                 Q322,244 300,254 Q278,244 258,278 Z"
              fill="#171e29" />
        <line x1="252" y1="224" x2="362" y2="196" stroke="${gold}" stroke-width="3.6" stroke-linecap="round" />
        <circle cx="362" cy="196" r="6" fill="#52bfa0" stroke="${gold}" stroke-width="1.6" />
        <!-- Graceful adult sleeves & hands cradling glowing sea-blue glass beads (海藍靈珠) -->
        <g>
          <circle cx="300" cy="492" r="62" fill="#32c5f0" opacity="0.38" filter="url(#soft-glow)" />
          <!-- Left & right draped Lingnan sleeves -->
          <path d="M196,464 Q212,534 264,518 L266,496 Q234,496 220,446 Z" fill="#e6dcc6" />
          <path d="M404,464 Q388,534 336,518 L334,496 Q366,496 380,446 Z" fill="#d8cbb0" />
          <path d="M254,504 Q280,536 300,536 Q320,536 346,504 Q324,514 300,514 Q276,514 254,504 Z" fill="#f3e5d2" stroke="#c9b498" stroke-width="1.2" />
          <!-- Strand of luminous sea-blue beads (海藍靈珠) held in adult hands -->
          <path d="M262,482 Q300,524 338,482" fill="none" stroke="#1888b0" stroke-width="2.4" />
          <g fill="#23b9ec" stroke="#e8fdff" stroke-width="1.4">
            <circle cx="268" cy="488" r="7.5" />
            <circle cx="283" cy="499" r="8" />
            <circle cx="300" cy="503" r="9.2" fill="#5ce1ff" />
            <circle cx="317" cy="499" r="8" />
            <circle cx="332" cy="488" r="7.5" />
          </g>
          <circle cx="298" cy="499" r="3.2" fill="#ffffff" opacity="0.95" />
        </g>
      `;

    case 'old_man':
      return `
        <!-- Slender 3/4 back-side scholar silhouette in emerald-pine long gown -->
        <path d="M170,660 L194,444 Q228,382 286,376 L322,376 Q372,386 404,452 L430,660 Z" fill="url(#oldman-robe)" />
        <path d="M294,378 L322,376 Q372,386 404,452 L430,660 L294,660 Z" fill="#1b3d35" opacity="0.46" />
        <path d="M204,444 Q232,542 312,562 L334,514 Q276,502 252,424 Z" fill="#3b786a" />
        <path d="M276,316 L310,316 L314,384 L272,384 Z" fill="#e8dcc9" />
        <path d="M312,226 C344,236 346,300 326,326 C312,344 292,340 280,324 C264,300 268,234 312,226 Z" fill="#f3eadb" />
        <path d="M250,268 C246,202 318,184 342,228 C350,252 326,254 308,272
                 C294,300 294,346 278,412 C264,446 236,460 224,432 C228,376 252,322 250,268 Z"
              fill="#e4e8ed" />
        <path d="M262,224 Q232,318 238,426" fill="none" stroke="#9ba7b5" stroke-width="2" opacity="0.62" />
        <!-- Brass 5:53 pocket watch & white magnolia blossom -->
        <g transform="translate(342,538)">
          <path d="M-28,-12 Q-12,8 0,-28" fill="none" stroke="${gold}" stroke-width="2.2" />
          <circle cx="0" cy="0" r="27" fill="${gold}" />
          <circle cx="0" cy="0" r="21" fill="#fbf4e2" />
          <circle cx="0" cy="-31" r="5" fill="none" stroke="${gold}" stroke-width="2.5" />
          <!-- Clock hands precisely at 5:53 -->
          <line x1="0" y1="0" x2="2" y2="12" stroke="#362819" stroke-width="2.6" stroke-linecap="round" />
          <line x1="0" y1="0" x2="-12" y2="-13" stroke="#362819" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="0" cy="0" r="2.2" fill="#362819" />
        </g>
        <g transform="translate(230,502) rotate(-18)" opacity="0.96">
          <path d="M0,0 C-14,-24 -8,-46 0,-54 C8,-46 14,-24 0,0 Z" fill="#fbf7ee" />
          <path d="M0,0 C-26,-10 -36,-30 -32,-40 C-16,-36 -4,-20 0,0 Z" fill="#efe6d4" />
          <path d="M0,0 C26,-10 36,-30 32,-40 C16,-36 4,-20 0,0 Z" fill="#efe6d4" />
          <circle cx="0" cy="-6" r="3.5" fill="#d4b15e" />
        </g>
      `;

    case 'luzhisi':
      return `
        <!-- Obsidian purple-gold mastermind robe (NO sailor cloak, NO compass!) -->
        <!-- Broken 日・寺 geometric crown / halo framing upper head -->
        <g stroke="#f0c869" fill="none" opacity="0.96">
          <!-- Left broken solar glyph (日) geometric crown fragment -->
          <path d="M204,218 L204,162 L252,162 L252,212" stroke-width="3.2" />
          <line x1="208" y1="188" x2="248" y2="188" stroke-width="2.6" />
          <!-- Right broken temple glyph (寺) stepped geometric crown fragment -->
          <line x1="346" y1="166" x2="394" y2="166" stroke-width="3" />
          <line x1="370" y1="146" x2="370" y2="188" stroke-width="2.8" />
          <line x1="340" y1="188" x2="400" y2="188" stroke-width="3.2" />
          <path d="M348,208 L394,208 M382,194 L382,224 L371,220" stroke-width="2.4" />
          <!-- Fractured royal halo arc connecting 日 and 寺 -->
          <path d="M196,272 A108,108 0 0,1 264,196" stroke-width="1.8" opacity="0.82" />
          <path d="M336,196 A108,108 0 0,1 404,272" stroke-width="1.8" opacity="0.82" />
        </g>
        <!-- Imperial obsidian purple-gold robe & layered high collar -->
        <path d="M132,660 L172,418 Q216,356 300,350 Q384,356 428,418 L468,660 Z" fill="url(#luzhisi-cloak)" />
        <path d="M300,350 Q384,356 428,418 L468,660 L300,660 Z" fill="#120926" opacity="0.52" />
        <!-- Sharp Monument Valley structural shoulder lapels & gold filigree borders -->
        <polygon points="184,412 276,358 292,516 170,486" fill="#2e1b52" stroke="${gold}" stroke-width="2" />
        <polygon points="416,412 324,358 308,516 430,486" fill="#1d1138" stroke="${gold}" stroke-width="2" />
        <path d="M254,370 L282,660 M346,370 L318,660" stroke="${gold}" stroke-width="2.8" opacity="0.92" />
        <!-- Central crimson-plum geometric chest sash & gold time-axis line -->
        <polygon points="282,424 318,424 312,660 288,660" fill="#4f2269" />
        <line x1="300" y1="424" x2="300" y2="660" stroke="${gold}" stroke-width="1.8" opacity="0.85" />
        <!-- High dark royal collar & strictly faceless pale silhouette -->
        <polygon points="262,366 254,316 300,340 346,316 338,366" fill="#190e33" stroke="${gold}" stroke-width="1.8" />
        <path d="M285,310 L315,310 L318,360 Q300,368 282,360 Z" fill="#e0d6eb" />
        ${porcelainHead(300, 268, 36, 45, '#ece4f5', '#68568f')}
        <!-- Sleek swept-back dark-plum hair silhouette (strictly 0 eyes/nose/mouth) -->
        <path d="M258,274 C252,216 276,192 300,192 C324,192 348,216 342,274
                 Q322,236 300,248 Q278,236 258,274 Z"
              fill="#130b26" />
        <!-- Subtle golden temporal crest on lapel -->
        <g transform="translate(300,522)">
          <circle cx="0" cy="0" r="24" fill="${gold}" opacity="0.22" filter="url(#soft-glow)" />
          <polygon points="0,-24 18,0 0,24 -18,0" fill="none" stroke="${gold}" stroke-width="2" />
          <line x1="0" y1="-16" x2="0" y2="0" stroke="${gold}" stroke-width="2" />
          <line x1="0" y1="0" x2="11" y2="9" stroke="${gold}" stroke-width="2" />
        </g>
      `;

    case 'corvo':
      return `
        <!-- Angular black-feather C-01 cloak silhouette (NO fedora, NO newspaper!) -->
        <!-- Jagged raven-wing cape silhouette sweeping left & right -->
        <polygon points="122,660 156,422 228,364 372,364 444,422 478,660" fill="url(#corvo-coat)" />
        <polygon points="300,364 372,364 444,422 478,660 300,660" fill="#09131c" opacity="0.54" />
        <!-- Sharp folded wing-mantle edges -->
        <polygon points="146,520 186,386 278,434 218,568" fill="#182a3b" stroke="#2c4961" stroke-width="1.2" />
        <polygon points="454,520 414,386 322,434 382,568" fill="#101e2b" stroke="#233d52" stroke-width="1.2" />
        <!-- Angular soaring raven cowl / high pointed collar framing faceless head -->
        <polygon points="230,402 246,304 294,358" fill="#0d1722" />
        <polygon points="370,402 354,304 306,358" fill="#152536" />
        <path d="M284,316 L316,316 L320,382 L280,382 Z" fill="#5e6e80" />
        <!-- Deeply shadowed, strictly faceless obsidian-silver profile head + sleek windswept hair (ZERO hat!) -->
        ${porcelainHead(300, 274, 35, 44, '#7d8fa3', '#1d2b3b')}
        <path d="M258,274 C254,214 278,192 302,192 C332,192 346,220 342,274
                 L332,248 L314,264 L296,242 L276,262 Z"
              fill="#0d1520" />
        <!-- 5 crisp black feather marks with gold quill spines (representing his 5 disobediences) -->
        <g>
          ${[
            { x: 162, y: 312, rot: -42, s: 0.92 },
            { x: 184, y: 262, rot: -26, s: 0.85 },
            { x: 432, y: 274, rot: 28, s: 0.88 },
            { x: 446, y: 332, rot: 46, s: 0.95 },
            { x: 386, y: 454, rot: 34, s: 1.05 }
          ]
            .map(
              (f) => `
            <g transform="translate(${f.x},${f.y}) rotate(${f.rot}) scale(${f.s})">
              <path d="M0,-34 C10,-14 11,14 0,34 C-9,18 -10,-12 0,-34 Z" fill="#0d1520" stroke="#36536b" stroke-width="1" />
              <path d="M0,-30 L0,36" stroke="${gold}" stroke-width="1.4" opacity="0.88" />
            </g>
          `
            )
            .join('')}
        </g>
        <!-- Crisp gold C-01 tactical insignia on chest -->
        <g transform="translate(300,486)" stroke="${gold}" fill="none">
          <polygon points="0,-24 20,0 0,24 -20,0" stroke-width="2" />
          <circle cx="0" cy="0" r="6" fill="${gold}" opacity="0.85" />
        </g>
      `;

    case 'mother':
      return `
        <!-- 2026 warm domestic Macau mother (cardigan + family scarf + warm ceramic teacup — ZERO beads, NO Prof. Lin!) -->
        <!-- Soft shoulder-length Macau mother waves -->
        <path d="M262,254 C268,204 318,196 346,226 C372,256 374,328 358,390 C344,404 326,402 316,380
                 C322,334 320,266 292,256 Z"
              fill="#232936" />
        <!-- Warm terracotta-oatmeal domestic Macau cardigan & ivory blouse -->
        <path d="M166,660 L194,448 Q218,394 272,380 L328,380 Q382,394 406,448 L434,660 Z" fill="url(#mother-coat)" />
        <path d="M300,380 L328,380 Q382,394 406,448 L434,660 L300,660 Z" fill="#7d4a40" opacity="0.34" />
        <!-- Gentle cream domestic blouse neckline -->
        <polygon points="274,380 326,380 300,464" fill="#faf4e8" />
        <!-- Warm woven rose-ochre family scarf draped comfortably around shoulders -->
        <path d="M248,382 Q300,432 352,382 L368,416 Q300,466 232,416 Z" fill="#c9715b" />
        <path d="M250,394 Q300,442 350,394" fill="none" stroke="#f0d5a3" stroke-width="2" opacity="0.72" />
        <path d="M316,418 L348,538 L322,548 L296,434 Z" fill="#b35c47" />
        <!-- Graceful neck & cameo side profile (0 facial features) -->
        <path d="M284,316 L316,316 L318,384 L280,384 Z" fill="#efe2d0" />
        <path d="M300,226 C334,226 346,262 340,302 C334,332 310,348 286,344 C264,338 258,314 260,288
                 C258,268 262,254 266,248 C272,234 284,226 300,226 Z"
              fill="#f8f0e4" stroke="#3b3630" stroke-width="1" stroke-opacity="0.22" />
        <path d="M306,228 C338,232 346,266 340,302 C334,332 314,346 296,344 C308,314 310,262 306,228 Z" fill="#d9c6be" opacity="0.46" />
        <path d="M352,300 Q368,338 346,378" fill="none" stroke="#47536b" stroke-width="2.4" opacity="0.58" />
        <!-- Subtle tortoiseshell hairpin -->
        <ellipse cx="348" cy="272" rx="4" ry="12" transform="rotate(14 348 272)" fill="#b87642" />
        <!-- Warm cardigan sleeves & gentle hands cradling a steaming ceramic teacup (NO beads!) -->
        <path d="M192,480 Q198,554 252,554 L256,532 Q222,528 214,474 Z" fill="#ba7b6e" />
        <path d="M408,480 Q402,554 348,554 L344,532 Q378,528 386,474 Z" fill="#9c6156" />
        <g transform="translate(292,534)">
          <circle cx="0" cy="-16" r="40" fill="#ffe6b0" opacity="0.32" filter="url(#soft-glow)" />
          <!-- Delicate steam wisps -->
          <path d="M-8,-22 C-16,-38 -2,-50 -10,-66" fill="none" stroke="#fff9ee" stroke-width="2.6" stroke-linecap="round" opacity="0.82" />
          <path d="M8,-20 C16,-36 4,-48 12,-62" fill="none" stroke="#fff9ee" stroke-width="2.4" stroke-linecap="round" opacity="0.72" />
          <!-- Warm porcelain Macau ceramic teacup with blue lotus rim -->
          <path d="M-24,-10 L24,-10 C22,18 12,28 0,28 C-12,28 -22,18 -24,-10 Z" fill="#faf5eb" stroke="#173a8a" stroke-width="1.5" />
          <path d="M-22,-4 Q0,2 22,-4" fill="none" stroke="#173a8a" stroke-width="2" opacity="0.8" />
          <path d="M23,-3 C34,-3 34,14 20,15" fill="none" stroke="#faf5eb" stroke-width="4" />
          <!-- Tender faceless hands cradling teacup -->
          <path d="M-32,2 C-36,16 -24,28 -12,24 C-16,12 -20,2 -32,2 Z" fill="#f3e5d3" />
          <path d="M32,2 C36,16 24,28 12,24 C16,12 20,2 32,2 Z" fill="#e8d4be" />
        </g>
      `;

    case 'liang9':
      return `
        <!-- Inner Harbour heritage woodcarver & Drunken Dragon heir holding carved teakwood dragon head (NO soup bowl!) -->
        <path d="M150,660 L178,444 Q212,388 272,376 L328,376 Q388,388 422,444 L450,660 Z" fill="url(#liang9-coat)" />
        <path d="M300,376 L328,376 Q388,388 422,444 L450,660 L300,660 Z" fill="#1b382d" opacity="0.46" />
        <!-- Weathered ochre-canvas woodcarver apron -->
        <path d="M232,436 L368,436 L388,660 L212,660 Z" fill="#d9c6a3" />
        <line x1="252" y1="382" x2="248" y2="440" stroke="#c7af87" stroke-width="11" />
        <line x1="348" y1="382" x2="352" y2="440" stroke="#c7af87" stroke-width="11" />
        <!-- Clean faceless 3/4 craftsman head & neck -->
        <path d="M282,316 L318,316 L322,382 Q300,390 278,382 Z" fill="#ead8c0" />
        ${porcelainHead(300, 272, 38, 45, '#f6ecda', '#d4c3aa')}
        <path d="M258,266 C256,216 278,198 300,198 C322,198 344,216 342,266
                 Q322,234 300,238 Q278,234 258,266 Z"
              fill="#262c36" />
        <!-- Craftsman sleeves & hands gripping the carved teakwood Drunken Dragon head (醉龍龍頭木雕) -->
        <path d="M174,478 Q186,554 244,554 L248,530 Q212,526 202,472 Z" fill="#2c5947" />
        <path d="M426,478 Q414,554 356,554 L352,530 Q388,526 398,472 Z" fill="#214537" />
        <g transform="translate(300,524)">
          <!-- Warm golden wood-carving glow -->
          <circle cx="0" cy="-16" r="66" fill="#ffdf9e" opacity="0.28" filter="url(#soft-glow)" />
          <!-- Carved teakwood dragon neck & wooden stand grip -->
          <path d="M-24,26 L-18,76 L16,76 L20,26 Z" fill="#6b3416" />
          <path d="M-16,32 L-10,74" stroke="#9c562c" stroke-width="2" opacity="0.65" />
          <!-- Branched carved wooden dragon horns (龍角) -->
          <path d="M-12,-46 C-28,-86 -54,-92 -62,-74 C-44,-74 -34,-62 -24,-40 Z" fill="#a85d2d" stroke="#52260d" stroke-width="1.4" />
          <path d="M10,-48 C-2,-92 -24,-104 -38,-88 C-20,-86 -8,-68 -2,-42 Z" fill="#c77842" stroke="#52260d" stroke-width="1.4" />
          <!-- Sculpted wooden mane & whisker curls behind dragon head -->
          <path d="M-38,-38 C-62,-44 -68,-20 -52,-8 C-66,4 -60,24 -38,24 Z" fill="#7c3e1b" />
          <!-- Upper sculpted dragon snout & roaring carved ridge (facing right-upward clearly!) -->
          <path d="M-34,-42 C-12,-58 28,-54 58,-34 C72,-24 76,-10 62,-2 L26,-2 L16,-14 L-12,-10 Z" fill="#b86634" stroke="#52260d" stroke-width="1.5" />
          <!-- Distinct upturned sculpted dragon nose/snout tip & wooden teeth facets -->
          <path d="M46,-38 C64,-44 74,-34 70,-22 C60,-18 48,-24 46,-38 Z" fill="#d9894a" />
          <polygon points="24,-4 32,8 40,-4 48,7 54,-4" fill="#ecd2a2" />
          <!-- Lower articulated carved wooden jaw (龍口開合) -->
          <path d="M-22,-4 L42,16 C58,20 62,32 46,36 L-12,26 C-24,22 -30,10 -22,-4 Z" fill="#8f4a22" stroke="#47200a" stroke-width="1.4" />
          <polygon points="18,10 26,1 34,14 42,4 48,16" fill="#e6c48a" />
          <!-- Faceted chisel planes (NO eye dot, pure sculpted brow ridge!) -->
          <path d="M-18,-36 Q10,-46 32,-32 L14,-22 Q-6,-28 -18,-36 Z" fill="#dfa05b" opacity="0.85" />
          <!-- Craftsman hands holding dragon neck grip -->
          <path d="M-42,16 C-48,36 -34,50 -16,44 C-18,30 -24,18 -42,16 Z" fill="#ead8c0" />
          <path d="M40,22 C46,42 32,54 14,48 C18,34 24,24 40,22 Z" fill="#d8c0a0" />
        </g>
      `;

    case 'couple_1622':
      return `
        <!-- 1622 Lovel & Sadie seated closely on A-Ma seaside stone bench (NO ruined church!) -->
        <g>
          <!-- Weathered 1622 seaside granite stone bench (媽閣海邊石長椅) -->
          <rect x="148" y="544" width="304" height="24" rx="4" fill="#8a8275" stroke="#3b332b" stroke-width="1.4" />
          <!-- Extended lower skirt/bench legs down to y=760 for full-arch bust framing -->
          <rect x="172" y="568" width="32" height="196" fill="#6b6358" />
          <rect x="396" y="568" width="32" height="196" fill="#5e574d" />
          <!-- Subtle carved notch detail on stone bench corner -->
          <path d="M158,550 L168,560 M168,550 L158,560" stroke="#e6c58a" stroke-width="1.6" opacity="0.8" />
          <!-- Sadie (left, 1622 Lingnan coastal blouse & warm vermilion shawl) -->
          <path d="M188,760 L204,462 Q222,418 256,416 Q286,420 300,468 L304,760 Z" fill="#b84a39" />
          <path d="M196,450 Q248,504 302,458 L286,416 Q248,412 214,424 Z" fill="#e6be8a" opacity="0.94" />
          <path d="M200,456 Q248,506 298,462" fill="none" stroke="${gold}" stroke-width="2.2" stroke-dasharray="4 4" />
          <!-- Clean faceless head + coiled bun -->
          <circle cx="252" cy="378" r="30" fill="#231d24" />
          <circle cx="228" cy="388" r="13" fill="#1a151b" />
          <!-- Lovel (right, 1622 Portuguese mariner burgundy coat & golden curls, leaning tenderly) -->
          <path d="M286,760 L296,450 Q316,400 358,396 Q396,400 416,456 L434,760 Z" fill="#4f2024" />
          <path d="M236,464 Q296,418 362,418 L384,760 L278,760 Z" fill="#6b2b2b" opacity="0.88" />
          <path d="M238,464 Q298,420 362,420" fill="none" stroke="${gold}" stroke-width="2.6" />
          <path d="M322,374 C322,322 384,322 384,374 C384,402 372,418 353,418 C334,418 322,402 322,374 Z" fill="#cf9c3e" />
        </g>
      `;

    case 'couple_2026':
      return `
        <!-- 2026 Sago & Gary on sunset wooden bench with film camera & coconut sago cup (NO umbrella!) -->
        <g>
          <!-- Warm wooden park bench slats & cast-iron legs -->
          <rect x="140" y="544" width="320" height="22" rx="4" fill="#9c6844" stroke="#4f311c" stroke-width="1.4" />
          <rect x="148" y="492" width="304" height="14" rx="3" fill="#825435" opacity="0.9" />
          <rect x="148" y="514" width="304" height="14" rx="3" fill="#73492e" opacity="0.9" />
          <rect x="172" y="566" width="18" height="198" fill="#2d3840" />
          <rect x="410" y="566" width="18" height="198" fill="#2d3840" />
          <!-- Sago (left figure in 2026 denim-teal jacket) -->
          <path d="M188,760 L200,456 Q220,414 256,412 Q284,416 292,464 L294,760 Z" fill="#244f69" />
          <path d="M232,374 C232,336 276,336 276,374 C276,396 266,408 254,408 C242,408 232,396 232,374 Z" fill="#1b2230" />
          <!-- Gary (right figure in 2026 warm navy-slate windbreaker) -->
          <path d="M306,760 L312,448 Q330,406 362,404 Q392,410 408,464 L420,760 Z" fill="#3a6380" />
          <path d="M332,366 C332,326 382,326 382,366 C382,390 370,404 357,404 C344,404 332,390 332,366 Z" fill="#1f2533" />
          <!-- Romantic sunset glow & Props between them on the wooden bench: Film Camera & Coconut Sago Cup -->
          <g transform="translate(274,522)">
            <!-- Retro film camera (底片相機) -->
            <rect x="-24" y="-6" width="44" height="28" rx="4" fill="#232a34" stroke="#d9b466" stroke-width="1.6" />
            <rect x="-18" y="-12" width="16" height="6" rx="2" fill="#d9b466" />
            <circle cx="0" cy="8" r="10" fill="#46596e" stroke="#e6c67e" stroke-width="2" />
            <circle cx="0" cy="8" r="5" fill="#18222e" />
          </g>
          <g transform="translate(332,512)">
            <!-- Clear cup of coconut sago (椰汁西米露) with straw & creamy pearls -->
            <line x1="4" y1="-26" x2="0" y2="8" stroke="#53c2b3" stroke-width="4" stroke-linecap="round" />
            <polygon points="-14,-4 14,-4 10,32 -10,32" fill="#f7f4eb" stroke="#9dbcc4" stroke-width="1.4" />
            <path d="M-15,-4 Q0,-16 15,-4 Z" fill="#eef6f7" stroke="#9dbcc4" stroke-width="1.2" />
            <!-- Subtle coconut sago pearls inside cup -->
            <circle cx="-4" cy="24" r="3" fill="#dbe8eb" />
            <circle cx="4" cy="25" r="3" fill="#dbe8eb" />
            <circle cx="0" cy="19" r="3" fill="#e6f0f2" />
          </g>
        </g>
      `;

    case 'couple_2077':
      return `
        <!-- K & N leaning across 2077 titanium railing & antique brass padlock touching fingertips at golden barrier -->
        <g>
          <!-- Titanium viewing railing (鈦金護欄) -->
          <rect x="110" y="546" width="380" height="10" rx="3" fill="#708094" opacity="0.86" />
          <line x1="166" y1="556" x2="166" y2="760" stroke="#536275" stroke-width="8" />
          <line x1="434" y1="556" x2="434" y2="760" stroke="#536275" stroke-width="8" />
          <!-- Antique brass padlock (舊銅掛鎖) hanging on railing -->
          <g transform="translate(300,564)">
            <path d="M-7,-8 A7,7 0 0,1 7,-8 L7,-2 L-7,-2 Z" fill="none" stroke="#e0b65c" stroke-width="3" />
            <rect x="-11" y="-2" width="22" height="18" rx="3" fill="#c9963b" stroke="#755216" stroke-width="1.2" />
          </g>
        </g>
        <g>
          <path d="M134,760 L154,462 Q178,410 228,414 L246,520 L232,760 Z" fill="#212d45" />
          <path d="M204,466 Q234,496 256,490 L296,474 L296,464 L252,472 Q232,470 218,448 Z" fill="#2e4266" />
          <path d="M182,366 L210,366 L212,418 L180,418 Z" fill="#dbe6f2" />
          <path d="M196,282 C226,282 234,312 228,346 C222,372 204,380 184,376 C166,370 162,334 166,306 C170,290 182,282 196,282 Z" fill="#eef4fa" />
          <path d="M160,320 L158,286 L184,270 L214,268 L232,284 Q204,284 176,308 Z" fill="#171f2e" />
        </g>
        <g>
          <path d="M466,760 L446,462 Q422,410 372,414 L354,520 L368,760 Z" fill="#2e3e5c" />
          <path d="M396,466 Q366,496 344,490 L304,474 L304,464 L348,472 Q368,470 382,448 Z" fill="#3e5680" />
          <path d="M390,366 L418,366 L420,418 L388,418 Z" fill="#efe2d0" />
          <path d="M404,282 C374,282 366,312 372,346 C378,372 396,380 416,376 C434,370 438,334 434,306 C430,290 418,282 404,282 Z" fill="#faf2e4" />
          <path d="M438,330 C444,282 408,262 374,280 C388,300 416,310 438,330 Z" fill="#26202b" />
          <circle cx="442" cy="342" r="14" fill="#26202b" />
        </g>
        <circle cx="300" cy="469" r="24" fill="#ffe89e" opacity="0.62" filter="url(#soft-glow)" />
        <circle cx="300" cy="469" r="6" fill="#fffdf0" />
      `;

    case 'narrator':
      return `
        <g transform="translate(300,356)">
          <polygon points="0,-168 19,-44 139,-80 44,-19 168,0 44,19 139,80 19,44 0,168 -19,44 -139,80 -44,19 -168,0 -44,-19 -139,-80 -19,-44"
                   fill="#173a8a" opacity="0.28" />
          <polygon points="0,-138 14,-22 138,0 14,22 0,138 -14,22 -138,0 -14,-22"
                   fill="#1d4ed8" opacity="0.8" />
          <polygon points="0,-138 14,-22 0,0" fill="#102963" />
          <polygon points="138,0 14,22 0,0" fill="#102963" />
          <polygon points="0,138 -14,22 0,0" fill="#102963" />
          <polygon points="-138,0 -14,-22 0,0" fill="#102963" />
          <circle cx="0" cy="0" r="98" fill="none" stroke="${gold}" stroke-width="2.6" />
          <circle cx="0" cy="0" r="84" fill="#f7f0e2" opacity="0.96" />
          <circle cx="0" cy="0" r="84" fill="none" stroke="#173a8a" stroke-width="2.4" />
          <path d="M0,-64 C24,-34 26,6 0,32 C-26,6 -24,-34 0,-64 Z" fill="#faf6ed" stroke="#173a8a" stroke-width="2.8" />
          <path d="M0,26 C-34,10 -54,-12 -52,-38 C-26,-28 -10,-4 0,26 Z" fill="#edf4fc" stroke="#173a8a" stroke-width="2.4" />
          <path d="M0,26 C34,10 54,-12 52,-38 C26,-28 10,-4 0,26 Z" fill="#edf4fc" stroke="#173a8a" stroke-width="2.4" />
          <path d="M0,34 C-46,32 -66,14 -68,-6 C-42,0 -16,14 0,34 Z" fill="#d4e3f7" stroke="#173a8a" stroke-width="2.2" />
          <path d="M0,34 C46,32 66,14 68,-6 C42,0 16,14 0,34 Z" fill="#d4e3f7" stroke="#173a8a" stroke-width="2.2" />
          <path d="M-52,44 Q0,24 52,44" fill="none" stroke="${gold}" stroke-width="2.6" />
          <path d="M-48,55 Q-24,45 0,55 Q24,65 48,55" fill="none" stroke="#173a8a" stroke-width="2.8" />
          <path d="M-36,66 Q0,57 36,66" fill="none" stroke="#173a8a" stroke-width="2.2" />
          <polygon points="0,-82 4,-71 14,-68 4,-64 0,-54 -4,-64 -14,-68 -4,-71" fill="${gold}" />
        </g>
      `;

    default:
      return '';
  }
}

const PORTRAIT_BUST_FRAMING = {
  sofia: { zoom: 1.48, sourceY: 305, targetY: 295, shiftX: 8 },
  sofia_astral: { zoom: 1.44, sourceY: 315, targetY: 310, shiftX: 0 },
  afonso: { zoom: 1.48, sourceY: 305, targetY: 295, shiftX: 0 },
  ryan: { zoom: 1.56, sourceY: 300, targetY: 295, shiftX: 0 },
  zero7: { zoom: 1.48, sourceY: 330, targetY: 312, shiftX: 0 },
  ajan: { zoom: 1.52, sourceY: 310, targetY: 300, shiftX: 0 },
  old_man: { zoom: 1.50, sourceY: 315, targetY: 305, shiftX: 0 },
  luzhisi: { zoom: 1.40, sourceY: 305, targetY: 322, shiftX: 0 },
  corvo: { zoom: 1.42, sourceY: 315, targetY: 310, shiftX: 0 },
  mother: { zoom: 1.50, sourceY: 320, targetY: 305, shiftX: 0 },
  liang9: { zoom: 1.48, sourceY: 325, targetY: 305, shiftX: 0 },
  couple_1622: { zoom: 1.40, sourceY: 430, targetY: 415, shiftX: 0 },
  couple_2026: { zoom: 1.40, sourceY: 430, targetY: 415, shiftX: 0 },
  couple_2077: { zoom: 1.34, sourceY: 415, targetY: 395, shiftX: 0 },
  narrator: { zoom: 1.28, sourceY: 356, targetY: 398, shiftX: 0 }
};

function buildPortraitSvgBundle(id) {
  const theme = PORTRAIT_THEMES[id];
  const bgArch = buildBgArchitectureSvg(id, theme);
  const charSvg = buildCharacterSvg(id, theme);
  const framing = PORTRAIT_BUST_FRAMING[id] || { zoom: 1.48, sourceY: 310, targetY: 305, shiftX: 0 };

  const archClipPath = `
    <path d="M64,748 L64,236 C64,124 166,62 300,48 C434,62 536,124 536,236 L536,748 Z" />
  `;

  const plaqueOuter = `
    M 56,18 L 544,18 A 38,38 0 0 0 582,56
    L 582,744 A 38,38 0 0 0 544,782
    L 56,782 A 38,38 0 0 0 18,744
    L 18,56 A 38,38 0 0 0 56,18 Z
  `;
  const plaqueInner = `
    M 66,28 L 534,28 A 44,44 0 0 0 572,66
    L 572,734 A 44,44 0 0 0 534,772
    L 66,772 A 44,44 0 0 0 28,734
    L 28,66 A 44,44 0 0 0 66,28 Z
  `;

  const cornerAzulejo = (tx, ty, sx, sy) => `
    <g transform="translate(${tx},${ty}) scale(${sx},${sy})" fill="none" stroke="${theme.cobalt}">
      <path d="M40,40 Q74,26 108,42 Q90,72 40,40 Z" fill="${theme.cobaltLight}" opacity="0.28" stroke-width="1.6" />
      <path d="M40,40 Q26,74 42,108 Q72,90 40,40 Z" fill="${theme.cobaltLight}" opacity="0.28" stroke-width="1.6" />
      <path d="M44,44 Q72,44 90,64 Q64,62 44,44 Z" fill="${theme.cobalt}" opacity="0.38" stroke-width="1.3" />
      <path d="M44,44 Q44,72 64,90 Q62,64 44,44 Z" fill="${theme.cobalt}" opacity="0.38" stroke-width="1.3" />
      <path d="M46,46 Q96,42 134,74" stroke-width="1.8" opacity="0.88" />
      <path d="M46,46 Q42,96 74,134" stroke-width="1.8" opacity="0.88" />
      <circle cx="46" cy="46" r="7" fill="${theme.cobalt}" />
      <circle cx="46" cy="46" r="2.8" fill="#f7f0e2" />
      <circle cx="118" cy="54" r="3.5" fill="${theme.cobaltLight}" />
      <circle cx="54" cy="118" r="3.5" fill="${theme.cobaltLight}" />
      <circle cx="88" cy="64" r="2.5" fill="${theme.gold}" stroke="none" />
      <circle cx="64" cy="88" r="2.5" fill="${theme.gold}" stroke="none" />
    </g>
  `;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
      <defs>
        <clipPath id="arch-clip">
          ${archClipPath}
        </clipPath>
        <linearGradient id="sofia-coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#27407a" />
          <stop offset="60%" stop-color="#1b2d59" />
          <stop offset="100%" stop-color="#111d3b" />
        </linearGradient>
        <linearGradient id="afonso-coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#b54035" />
          <stop offset="60%" stop-color="#8f2d24" />
          <stop offset="100%" stop-color="#611916" />
        </linearGradient>
        <linearGradient id="afonso-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#deb14e" />
          <stop offset="55%" stop-color="#bf892a" />
          <stop offset="100%" stop-color="#9c6a1b" />
        </linearGradient>
        <linearGradient id="ryan-coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#37465c" />
          <stop offset="65%" stop-color="#273242" />
          <stop offset="100%" stop-color="#1a222e" />
        </linearGradient>
        <linearGradient id="zero7-coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#343d4a" />
          <stop offset="65%" stop-color="#252c36" />
          <stop offset="100%" stop-color="#171b21" />
        </linearGradient>
        <linearGradient id="ajan-tunic" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f7f2e6" />
          <stop offset="65%" stop-color="#e3ded0" />
          <stop offset="100%" stop-color="#c4ccb8" />
        </linearGradient>
        <linearGradient id="oldman-robe" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3a7a6b" />
          <stop offset="65%" stop-color="#2a5c50" />
          <stop offset="100%" stop-color="#1b3d35" />
        </linearGradient>
        <linearGradient id="luzhisi-cloak" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#281647" />
          <stop offset="65%" stop-color="#1a0e33" />
          <stop offset="100%" stop-color="#0f071f" />
        </linearGradient>
        <linearGradient id="corvo-coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1c3145" />
          <stop offset="65%" stop-color="#112130" />
          <stop offset="100%" stop-color="#09131c" />
        </linearGradient>
        <linearGradient id="mother-coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#d49381" />
          <stop offset="65%" stop-color="#b87665" />
          <stop offset="100%" stop-color="#965a4d" />
        </linearGradient>
        <linearGradient id="liang9-coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#365c6b" />
          <stop offset="65%" stop-color="#24424f" />
          <stop offset="100%" stop-color="#172c36" />
        </linearGradient>
        <linearGradient id="astral-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#c9a2f5" />
          <stop offset="55%" stop-color="#7c5bb5" />
          <stop offset="100%" stop-color="#e3be68" />
        </linearGradient>
        <linearGradient id="astral-hair" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6c4ea6" />
          <stop offset="100%" stop-color="#e0ba67" />
        </linearGradient>
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="11" />
        </filter>
        <filter id="wc-ink" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves="2" seed="${theme.seed + 7}" result="inkNoise" />
          <feDisplacementMap in="SourceGraphic" in2="inkNoise" scale="1.6" />
        </filter>
      </defs>

      <!-- Warm Azulejo porcelain plaque scalloped border -->
      <path d="${plaqueOuter}" fill="none" stroke="${theme.cobalt}" stroke-width="8" filter="url(#wc-ink)" />
      <path d="${plaqueInner}" fill="none" stroke="${theme.cobaltLight}" stroke-width="2.4" opacity="0.9" />
      <path d="${plaqueInner}" fill="none" stroke="${theme.gold}" stroke-width="0.9" opacity="0.68" />

      <!-- Top & bottom Azulejos corner floral rosettes -->
      ${cornerAzulejo(18, 18, 1, 1)}
      ${cornerAzulejo(582, 18, -1, 1)}
      ${cornerAzulejo(18, 782, 1, -1)}
      ${cornerAzulejo(582, 782, -1, -1)}

      <!-- Clipped Arch Niche Scene: Expanded Architecture + Zoomed Enlarged Character Bust (0 baked tiny text) -->
      <g clip-path="url(#arch-clip)">
        <g transform="translate(300, 402) scale(1.19) translate(-300, -356)">
          ${bgArch}
        </g>
        <g transform="translate(300, ${framing.targetY}) scale(${framing.zoom}) translate(${-300 - framing.shiftX}, ${-framing.sourceY})">
          ${charSvg}
        </g>
      </g>

      <!-- Arch niche Azulejo ceramic border + inner gold-foil temple arc -->
      <path d="M64,748 L64,236 C64,124 166,62 300,48 C434,62 536,124 536,236 L536,748 Z"
            fill="none" stroke="${theme.cobalt}" stroke-width="8" filter="url(#wc-ink)" />
      <path d="M52,756 L52,232 C52,114 160,48 300,34 C440,48 548,114 548,232 L548,756"
            fill="none" stroke="${theme.cobaltLight}" stroke-width="2.2" stroke-dasharray="10 6" opacity="0.78" />
      <path d="M72,740 L72,240 C72,134 172,74 300,60 C428,74 528,134 528,240 L528,740 Z"
            fill="none" stroke="${theme.gold}" stroke-width="1.6" opacity="0.86" />
    </svg>
  `;

  return { svg, theme, meta: SPEAKER_BILINGUAL_META[id] };
}

async function generateAll() {
  fs.mkdirSync(PORTRAITS_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1800, height: 1400 } });
    await page.setContent(`<!DOCTYPE html><html><body style="margin:0;background:#fff;"></body></html>`);

    const results = [];

    for (const id of PORTRAIT_IDS) {
      const { svg, theme, meta } = buildPortraitSvgBundle(id);

      const encoded = await page.evaluate(async ({ svgMarkup, themeData, metaData }) => {
        function mulberry32(a) {
          return function () {
            let t = (a += 0x6d2b79f5);
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
          };
        }

        const rand = mulberry32(themeData.seed * 997 + 13);
        const W = 600;
        const H = 800;

        const canvas = document.createElement('canvas');
        canvas.width = W;
        canvas.height = H;
        const ctx = canvas.getContext('2d');

        // 1. Warm porcelain ivory glaze base
        const baseGrad = ctx.createRadialGradient(W * 0.44, H * 0.34, 40, W * 0.5, H * 0.5, H * 0.72);
        baseGrad.addColorStop(0, '#fbf6eb');
        baseGrad.addColorStop(0.65, '#f2e6cf');
        baseGrad.addColorStop(1, '#e0cfb0');
        ctx.fillStyle = baseGrad;
        ctx.fillRect(0, 0, W, H);

        // 2. Arch niche atmospheric Gris-style mineral watercolor washes (expanded arch 64..536 x 48..748)
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(64, 748);
        ctx.lineTo(64, 236);
        ctx.bezierCurveTo(64, 124, 166, 62, 300, 48);
        ctx.bezierCurveTo(434, 62, 536, 124, 536, 236);
        ctx.lineTo(536, 748);
        ctx.closePath();
        ctx.clip();

        const skyGrad = ctx.createLinearGradient(0, 48, 0, 748);
        skyGrad.addColorStop(0, themeData.skyTop);
        skyGrad.addColorStop(0.54, themeData.skyMid);
        skyGrad.addColorStop(1, themeData.skyBot);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(50, 40, 500, 720);

        const washLayer = document.createElement('canvas');
        washLayer.width = W;
        washLayer.height = H;
        const wctx = washLayer.getContext('2d');
        const washes = themeData.washes;

        for (let i = 0; i < 18; i++) {
          const col = washes[i % washes.length];
          const cx = 84 + rand() * 432;
          const cy = 80 + rand() * 620;
          const baseR = 62 + rand() * 110;
          const lobes = 16;

          wctx.save();
          wctx.filter = `blur(${16 + Math.floor(rand() * 14)}px)`;
          wctx.globalAlpha = 0.24 + rand() * 0.2;
          wctx.fillStyle = col;
          wctx.beginPath();
          for (let k = 0; k <= lobes; k++) {
            const ang = (k / lobes) * Math.PI * 2;
            const jitter = 0.68 + 0.45 * Math.sin(ang * 3 + i) + (rand() - 0.5) * 0.26;
            const px = cx + Math.cos(ang) * baseR * jitter;
            const py = cy + Math.sin(ang) * baseR * (0.85 + rand() * 0.35) * jitter;
            if (k === 0) wctx.moveTo(px, py);
            else wctx.lineTo(px, py);
          }
          wctx.closePath();
          wctx.fill();
          wctx.restore();
        }

        ctx.save();
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = 0.6;
        ctx.drawImage(washLayer, 0, 0);
        ctx.restore();

        const mistBloom = ctx.createRadialGradient(300, 248, 15, 300, 248, 220);
        mistBloom.addColorStop(0, 'rgba(255, 250, 236, 0.56)');
        mistBloom.addColorStop(1, 'rgba(255, 250, 236, 0)');
        ctx.fillStyle = mistBloom;
        ctx.fillRect(50, 40, 500, 480);

        for (let s = 0; s < 175; s++) {
          const sx = 68 + rand() * 464;
          const sy = 64 + rand() * 668;
          const sr = 0.7 + rand() * 2.4;
          ctx.fillStyle = washes[s % washes.length];
          ctx.globalAlpha = 0.08 + rand() * 0.16;
          ctx.beginPath();
          ctx.arc(sx, sy, sr, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        // 3. Render SVG Architecture + Enlarged Character Bust + Azulejo Arch Frame
        const img = new Image();
        const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        await new Promise((res, rej) => {
          img.onload = res;
          img.onerror = rej;
          img.src = url;
        });
        ctx.drawImage(img, 0, 0, W, H);
        URL.revokeObjectURL(url);

        // 4. Clean Azulejo sill bar (NO baked tiny raster text — crisp HTML captions render below portraits in UI!)
        {
          ctx.save();
          ctx.fillStyle = themeData.cobalt;
          ctx.fillRect(58, 744, 484, 14);
          ctx.strokeStyle = themeData.gold;
          ctx.lineWidth = 1.6;
          ctx.strokeRect(58, 744, 484, 14);
          ctx.restore();
        }

        // 5. Fine cotton watercolor paper texture + glaze sheen
        const grainCanvas = document.createElement('canvas');
        grainCanvas.width = 256;
        grainCanvas.height = 256;
        const gctx = grainCanvas.getContext('2d');
        const gData = gctx.createImageData(256, 256);
        for (let p = 0; p < gData.data.length; p += 4) {
          const n = 236 + Math.floor((rand() - 0.5) * 32);
          gData.data[p] = n;
          gData.data[p + 1] = n - 2;
          gData.data[p + 2] = n - 6;
          gData.data[p + 3] = 255;
        }
        gctx.putImageData(gData, 0, 0);

        ctx.save();
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = 0.3;
        const pat = ctx.createPattern(grainCanvas, 'repeat');
        ctx.fillStyle = pat;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();

        const sheen = ctx.createLinearGradient(0, 0, W * 0.65, H * 0.55);
        sheen.addColorStop(0, 'rgba(255, 252, 245, 0.16)');
        sheen.addColorStop(0.5, 'rgba(255, 252, 245, 0)');
        ctx.fillStyle = sheen;
        ctx.fillRect(0, 0, W, H);

        // 6. Downsample smoothly to 300×400
        const out = document.createElement('canvas');
        out.width = 300;
        out.height = 400;
        const octx = out.getContext('2d');
        octx.imageSmoothingEnabled = true;
        octx.imageSmoothingQuality = 'high';
        octx.drawImage(canvas, 0, 0, 300, 400);

        let bestDataUrl = out.toDataURL('image/webp', 0.89);
        let bestBytes = Math.ceil((bestDataUrl.split(',')[1].length * 3) / 4);
        let bestQ = 0.89;

        if (bestBytes > 21500 || bestBytes < 14500) {
          let lo = 0.72;
          let hi = 0.96;
          for (let step = 0; step < 9; step++) {
            const mid = (lo + hi) / 2;
            const testUrl = out.toDataURL('image/webp', mid);
            const testBytes = Math.ceil((testUrl.split(',')[1].length * 3) / 4);
            if (testBytes > 21500) {
              hi = mid;
            } else if (testBytes < 14500) {
              lo = mid;
            } else {
              bestDataUrl = testUrl;
              bestBytes = testBytes;
              bestQ = mid;
              break;
            }
            bestDataUrl = testUrl;
            bestBytes = testBytes;
            bestQ = mid;
          }
        }

        return { dataUrl: bestDataUrl, quality: Number(bestQ.toFixed(3)) };
      }, { svgMarkup: svg, themeData: theme, metaData: meta });

      const base64 = encoded.dataUrl.split(',')[1];
      const buf = Buffer.from(base64, 'base64');
      const webpPath = path.join(PORTRAITS_DIR, `${id}.webp`);
      fs.writeFileSync(webpPath, buf);

      results.push({
        id,
        bytes: buf.length,
        quality: encoded.quality,
        dataUrl: encoded.dataUrl,
        meta: SPEAKER_BILINGUAL_META[id]
      });
    }

    const sheetBuffer = await page.evaluate(async (items) => {
      const cols = 5;
      const rows = 3;
      const cellW = 300;
      const cellH = 400;
      const padX = 28;
      const padY = 26;
      const labelH = 58;
      const headerH = 92;
      const outerPad = 36;

      const totalW = outerPad * 2 + cols * cellW + (cols - 1) * padX;
      const totalH = headerH + outerPad + rows * (cellH + labelH) + (rows - 1) * padY + outerPad;

      const c = document.createElement('canvas');
      c.width = totalW;
      c.height = totalH;
      const ctx = c.getContext('2d');

      ctx.fillStyle = '#efe6d5';
      ctx.fillRect(0, 0, totalW, totalH);

      ctx.fillStyle = '#173a8a';
      ctx.fillRect(0, 0, totalW, headerH - 8);
      ctx.fillStyle = '#d4a64a';
      ctx.fillRect(0, headerH - 8, totalW, 4);

      ctx.fillStyle = '#faf5ea';
      ctx.font = 'bold 28px "PingFang TC", "Noto Serif TC", Georgia, serif';
      ctx.fillText('《蓮島迴廊 Corridor of the Lotus》v2.2 — 無五官幾何剪影 × 礦物水彩 × 澳門青花瓷立繪圖集 (15/15)', outerPad, 48);
      ctx.fillStyle = '#c8d9f7';
      ctx.font = '15px ui-monospace, Menlo, monospace';
      const sumKb = (items.reduce((a, b) => a + b.bytes, 0) / 1024).toFixed(1);
      ctx.fillText(`300×400 WebP · Total ${sumKb} KB · Zero Eyes / Zero Nose / Zero Mouth · Monument Valley × Gris × Azulejos`, outerPad, 72);

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = outerPad + col * (cellW + padX);
        const y = headerH + outerPad + row * (cellH + labelH + padY);

        ctx.fillStyle = 'rgba(18, 28, 52, 0.18)';
        ctx.fillRect(x + 5, y + 6, cellW, cellH);

        const img = new Image();
        await new Promise((res, rej) => {
          img.onload = res;
          img.onerror = rej;
          img.src = item.dataUrl;
        });
        ctx.drawImage(img, x, y, cellW, cellH);

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y + cellH + 8, cellW, labelH - 8);
        ctx.strokeStyle = item.meta.tileHue;
        ctx.lineWidth = 2.2;
        ctx.strokeRect(x + 1, y + cellH + 9, cellW - 2, labelH - 10);

        ctx.fillStyle = item.meta.tileHue;
        ctx.font = 'bold 16px ui-monospace, Menlo, monospace';
        ctx.fillText(item.id, x + 12, y + cellH + 30);

        ctx.fillStyle = item.meta.accent;
        ctx.font = 'bold 14px "PingFang TC", sans-serif';
        ctx.fillText(`${item.meta.zh}`, x + 12, y + cellH + 50);

        ctx.fillStyle = '#5a6578';
        ctx.textAlign = 'right';
        ctx.font = '11.5px ui-monospace, Menlo, monospace';
        ctx.fillText(`${(item.bytes / 1024).toFixed(1)} KB`, x + cellW - 10, y + cellH + 30);
        ctx.fillText(item.meta.pt, x + cellW - 10, y + cellH + 50);
        ctx.textAlign = 'left';
      }

      return c.toDataURL('image/png').split(',')[1];
    }, results);

    fs.writeFileSync(CONTACT_SHEET_PATH, Buffer.from(sheetBuffer, 'base64'));

    const atlasLines = [
      '/**',
      ' * Portrait Atlas for 《蓮島迴廊 Corridor of the Lotus》 v2.2',
      ' * Generated by assets/portraits/generate-portraits.mjs',
      ' * Style: Zero-facial-feature Monument Valley × Gris mineral watercolor × Macau Azulejos (300×400 WebP)',
      ' */',
      '',
      `export const PORTRAIT_IDS = ${JSON.stringify(PORTRAIT_IDS, null, 2)};`,
      '',
      'export const PORTRAIT_SPEAKER_IDS = PORTRAIT_IDS;',
      '',
      'export const PORTRAIT_DATA_URIS = {'
    ];
    for (let i = 0; i < results.length; i++) {
      const r = results[i];
      const comma = i < results.length - 1 ? ',' : '';
      atlasLines.push(`  ${r.id}: '${r.dataUrl}'${comma}`);
    }
    atlasLines.push('};');
    atlasLines.push('');
    atlasLines.push(`export const SPEAKER_BILINGUAL_META = ${JSON.stringify(SPEAKER_BILINGUAL_META, null, 2)};`);
    atlasLines.push('');
    atlasLines.push(`export const SPEAKER_ALIASES = ${JSON.stringify(SPEAKER_ALIASES, null, 2)};`);
    atlasLines.push('');
    atlasLines.push(`export function resolveSpeakerId(speakerId) {
  const raw = String(speakerId || '').trim();
  const lower = raw.toLowerCase();
  const mapped =
    SPEAKER_ALIASES[raw] ||
    SPEAKER_ALIASES[lower] ||
    (Object.prototype.hasOwnProperty.call(PORTRAIT_DATA_URIS, lower) ? lower : raw);
  return Object.prototype.hasOwnProperty.call(PORTRAIT_DATA_URIS, mapped) ? mapped : 'narrator';
}

export function getPortraitDataUri(speakerId) {
  const key = resolveSpeakerId(speakerId);
  return PORTRAIT_DATA_URIS[key] || PORTRAIT_DATA_URIS.narrator;
}

export const getPortraitDataURL = getPortraitDataUri;

export function getSpeakerMeta(speakerId) {
  const key = resolveSpeakerId(speakerId);
  return SPEAKER_BILINGUAL_META[key] || SPEAKER_BILINGUAL_META.narrator;
}

export default {
  PORTRAIT_IDS,
  PORTRAIT_SPEAKER_IDS,
  PORTRAIT_DATA_URIS,
  SPEAKER_BILINGUAL_META,
  SPEAKER_ALIASES,
  resolveSpeakerId,
  getPortraitDataUri,
  getPortraitDataURL,
  getSpeakerMeta
};
`);

    fs.writeFileSync(ATLAS_OUTPUT_PATH, atlasLines.join('\n'), 'utf8');

    const totalBytes = results.reduce((sum, r) => sum + r.bytes, 0);
    console.log('Generated 15 portraits:');
    for (const r of results) {
      console.log(`  - ${r.id.padEnd(14)} ${String(r.bytes).padStart(6)} B (${(r.bytes / 1024).toFixed(2)} KB) q=${r.quality}`);
    }
    console.log(`Total WebP bytes: ${totalBytes} B (${(totalBytes / 1024).toFixed(2)} KB)`);
    console.log(`Contact sheet: ${CONTACT_SHEET_PATH}`);
    console.log(`Atlas JS:      ${ATLAS_OUTPUT_PATH}`);
  } finally {
    await browser.close();
  }
}

generateAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
