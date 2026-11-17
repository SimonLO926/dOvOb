// Ending Cinematics Director for Corridor of the Lotus (Macau Chrono-Drifter)
// 100% Procedural Three.js + Monument Valley 2 Pastel Mineral Shading (Zero external URLs / CDN)
// Supports Ending A (~38s), Ending B (~44s), and Ending C (~64s JOJO "Made in Heaven" 4-Phase Reset)

import {
  MONUMENT_ERA_THEMES,
  applyMonumentBgModeToRoot,
  createMonumentMaterial,
  createMonumentSkyBackdrop,
  hexToSrgbVec3
} from './monument-shader.js';
import { buildStPaulsMonument } from './stpauls-and-cover.js';
import { getLocalizedSubtitleCue, normalizeBgMode, normalizeLang } from './i18n.js';

const ENDING_DURATIONS = Object.freeze({
  A: 38,
  B: 44,
  C: 64
});

const SUBTITLE_TIMELINES = Object.freeze({
  A: [
    {
      id: 'A_1',
      start: 0,
      end: 9.5,
      speakerId: 'sofia',
      speakerName: '盧曉晴',
      speakerEn: 'Sofia Lou',
      zh: '五重奇蹟的星環歸位——以海藍念珠與青銅羅盤，親手封起這道撕裂四百年的迴廊。',
      en: 'With sea-blue prayer beads and bronze compass rings, we seal the corridor torn across four centuries.'
    },
    {
      id: 'A_2',
      start: 9.5,
      end: 18.5,
      speakerId: 'sofia',
      speakerName: '盧曉晴',
      speakerEn: 'Sofia Lou',
      zh: '金色晨昏霧氣落回培正紅瓦與東望洋山脊，我終於能牽著盧辰推開家門。',
      en: 'Golden dusk settles softly upon Pui Ching red roofs as I lead Ryan back through our sunset gate.'
    },
    {
      id: 'A_3',
      start: 18.5,
      end: 27.5,
      speakerId: 'afonso',
      speakerName: '阿方索',
      speakerEn: 'Afonso Ferreira',
      zh: '我回到一六二二年的媽閣暖沙卸下火銃——阿珍仍在椰影與紅帆下安然等我。',
      en: 'Returning to 1622 A-Ma beach, I lay down my musket—my beloved A-Jan awaits beneath red sails.'
    },
    {
      id: 'A_4',
      start: 27.5,
      end: 34.5,
      speakerId: 'luzhisi',
      speakerName: '盧日寺',
      speakerEn: 'Old Man 5:53 (Luzhisi)',
      zh: '停擺半生的 5:53 懷錶終於輕輕跳過 5:54……你們走上了最溫柔、也最正確的歸途。',
      en: 'My frozen 5:53 pocket watch finally ticks past 5:54... You found the gentlest path home.'
    },
    {
      id: 'A_5',
      start: 34.5,
      end: 38.5,
      speakerId: 'narrator',
      speakerName: '守望旁白',
      speakerEn: 'Chronicle',
      zh: '澳門靜止在安寧的晨昏之間，只餘海風與燈塔守望這座雙蓮之城。',
      en: 'Macau rests in tranquil eternal twilight, guarded by sea breeze and golden lighthouse glow.'
    }
  ],
  B: [
    {
      id: 'B_1',
      start: 0,
      end: 10.5,
      speakerId: 'ryan',
      speakerName: '盧辰',
      speakerEn: 'Ryan (Zero-7)',
      zh: '若每一次告別都要把至親隔開四百年——那就由我們三代同體，親自重寫這座城的規則！',
      en: 'If farewell means four hundred years apart, we reject it—three generations merge as one anchor!'
    },
    {
      id: 'B_2',
      start: 10.5,
      end: 20.5,
      speakerId: 'sofia',
      speakerName: '盧曉晴',
      speakerEn: 'Sofia Lou',
      zh: '一六二二的聖火、二〇二六的蓮心、二〇七七的蒼藍脈衝——於雙蓮祭壇共振昇華！',
      en: '1622 amber flame, 2026 Azulejo lotus, and 2077 cyber pulse lock in harmony above Macau Bay.'
    },
    {
      id: 'B_3',
      start: 20.5,
      end: 30.5,
      speakerId: 'couple_2077',
      speakerName: 'K＆N（結界外側）',
      speakerEn: 'K & N',
      zh: '金色禁飛結界大門轟然敞開！K 牽著 N 步入無邊霓虹夜色，烏鴉在屋脊化作忠誠的盾。',
      en: 'The golden barrier gates swing wide—K and N step into open neon skies under Corvo’s silent watch.'
    },
    {
      id: 'B_4',
      start: 30.5,
      end: 38.5,
      speakerId: 'afonso',
      speakerName: '阿方索',
      speakerEn: 'Afonso Ferreira',
      zh: '縱使改寫潮汐，我也要把海珍留在紫金高宅之中，從此再無戰火與分離。',
      en: 'Even rewriting the tides, I keep A-Jan safe beside me within this timeless purple-gold sanctuary.'
    },
    {
      id: 'B_5',
      start: 38.5,
      end: 44.5,
      speakerId: 'luzhisi',
      speakerName: '盧日寺',
      speakerEn: 'Luzhisi',
      zh: '接過王座便得替全城揹負因果——繁華若成金絲籠，莫忘最初你們曾是凡人。',
      en: 'To claim the throne is to bear the city’s karma—never forget you began as mortals beneath these stars.'
    }
  ],
  C: [
    {
      id: 'C_1',
      start: 0,
      end: 8.5,
      speakerId: 'sofia',
      speakerName: '盧曉晴',
      speakerEn: 'Sofia Lou',
      zh: '不是修補裂痕，也不是佔據黑夜——把五重奇蹟全部推過十七時五十三分的極限！',
      en: 'Neither patching cracks nor claiming endless night—push all Five Miracles past 5:53!'
    },
    {
      id: 'C_2',
      start: 8.5,
      end: 15.5,
      speakerId: 'narrator',
      speakerName: '天穹星環',
      speakerEn: 'Heaven Rings',
      zh: '金銀雙天環於六芒星壇燃起！日月軌跡開始加速，整座蓮島的時鐘突破重圍！',
      en: 'Dual gold and silver Heaven Rings ignite! Sun and moon accelerate as time itself breaks free.'
    },
    {
      id: 'C_3',
      start: 15.5,
      end: 25.5,
      speakerId: 'ryan',
      speakerName: '盧辰',
      speakerEn: 'Ryan (Zero-7)',
      zh: '抓緊了，家姐！一六二二、二〇二六與二〇七七正在光潮裡高速摺疊——這就是《天堂製造》的加速度！',
      en: 'Hold fast, Sofia! 1622, 2026, and 2077 fold into pure starlight trails at Made in Heaven speed!'
    },
    {
      id: 'C_4',
      start: 25.5,
      end: 34.5,
      speakerId: 'afonso',
      speakerName: '阿方索',
      speakerEn: 'Afonso Ferreira',
      zh: '日月化作貫穿蒼穹的光帶！所有苦難、戰火與失蹤的傷痕，都將在光速奇點中重新編織！',
      en: 'Sun and moon blur into blazing celestial ribbons—every wound of history is rewoven through the singularity!'
    },
    {
      id: 'C_5',
      start: 34.5,
      end: 48.0,
      speakerId: 'luzhisi',
      speakerName: '盧日寺',
      speakerEn: 'Luzhisi',
      zh: '五時五十三分的終點徹底化作純白——告別殘破的舊時間線，去迎接沒有斷層的 5:54 吧……',
      en: 'The fractured 5:53 timeline dissolves into pure white singularity... Step forward into the unbroken 5:54.'
    },
    {
      id: 'C_6',
      start: 48.0,
      end: 57.0,
      speakerId: 'sofia',
      speakerName: '盧曉晴＆盧母',
      speakerEn: 'Sofia, Ryan & Mother',
      zh: '晨霧散盡，是二零二六早春五時五十四分——母親、阿珍、曉晴與盧辰在培正薄荷綠長廊下微笑重逢。',
      en: 'Morning mist clears onto 5:54 early spring—Mother, A-Jan, Sofia, and Ryan reunite beneath Pui Ching’s mint colonnade.'
    },
    {
      id: 'C_7',
      start: 57.0,
      end: 64.5,
      speakerId: 'narrator',
      speakerName: '新世界清晨',
      speakerEn: 'Dawn of 5:54',
      zh: '雙蓮綻放於澄澈天光之上，1622 的海岸、2026 的校門與 2077 的蒼穹終成同一首安穩清晨。',
      en: 'The sacred Twin Lotus blooms in pastel dawn—every era reborn into one gentle, unbroken Macau morning.'
    }
  ]
});

function clamp01(v) {
  return Math.max(0, Math.min(1, Number(v) || 0));
}

function lerp(a, b, t) {
  return a + (b - a) * clamp01(t);
}

function smoothstep(edge0, edge1, x) {
  if (edge1 <= edge0) return x >= edge1 ? 1 : 0;
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

/**
 * Generates a procedural 64x64 radial soft circular glow CanvasTexture for starlight motes.
 */
function makeSoftStarlightTexture(T) {
  if (typeof document === 'undefined' || !T || !T.CanvasTexture) return null;
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
  grad.addColorStop(0.28, 'rgba(255, 255, 255, 0.72)');
  grad.addColorStop(0.65, 'rgba(255, 255, 255, 0.18)');
  grad.addColorStop(1.0, 'rgba(255, 255, 255, 0.0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new T.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function makeSoftPointsMaterial(T, opts = {}) {
  const glowTex = makeSoftStarlightTexture(T);
  const params = {
    size: opts.size ?? 0.24,
    transparent: true,
    opacity: opts.opacity ?? 0.70,
    alphaTest: 0.03,
    depthWrite: false
  };
  if (opts.color !== undefined) params.color = opts.color;
  if (opts.vertexColors !== undefined) params.vertexColors = opts.vertexColors;
  if (glowTex) {
    params.map = glowTex;
    if (T.AdditiveBlending !== undefined) params.blending = T.AdditiveBlending;
  }
  return new T.PointsMaterial(params);
}

function disposeTree(T, obj) {
  if (!obj) return;
  const disposedGeos = new Set();
  const disposedMats = new Set();
  obj.traverse?.((node) => {
    if (node.geometry && typeof node.geometry.dispose === 'function' && !disposedGeos.has(node.geometry)) {
      disposedGeos.add(node.geometry);
      node.geometry.dispose();
    }
    if (node.material) {
      const mats = Array.isArray(node.material) ? node.material : [node.material];
      for (const m of mats) {
        if (!m || disposedMats.has(m)) continue;
        disposedMats.add(m);
        for (const k of ['map', 'alphaMap', 'emissiveMap']) {
          if (m[k] && typeof m[k].dispose === 'function') m[k].dispose();
        }
        if (typeof m.dispose === 'function') m.dispose();
      }
    }
  });
}

function resolveTHREE(THREEArg) {
  const T = THREEArg || (typeof globalThis !== 'undefined' ? globalThis.THREE : null);
  if (!T || !T.Group) {
    throw new Error('EndingCinematicsDirector requires a valid Three.js namespace.');
  }
  return T;
}

/**
 * Analytic angular velocity and integral angle for Ending C ("Made in Heaven").
 * Closed-form evaluation guarantees exact state on both incremental update(dt) and seekTo(seconds).
 */
function evalMadeInHeavenKinematics(t) {
  const w0 = 0.65;
  const k1 = 3.85;
  const p1 = 2.2;
  const k2 = 26.5;
  const p2 = 2.35;

  let omega = w0;
  let angle = w0 * t;

  // Phase 1 acceleration (0..14s)
  const u1 = Math.min(Math.max(t, 0), 14) / 14;
  if (u1 > 0) {
    omega += k1 * Math.pow(u1, p1);
    angle += (14 * k1 / (p1 + 1)) * Math.pow(u1, p1 + 1);
  }
  if (t > 14) {
    const dtPast14 = Math.min(t, 35) - 14;
    if (t <= 35) {
      const u2 = dtPast14 / 21;
      omega += k2 * Math.pow(u2, p2);
      angle += k1 * dtPast14 + (21 * k2 / (p2 + 1)) * Math.pow(u2, p2 + 1);
    } else {
      // Decelerate rapidly through singularity whiteout (35..48s) -> gentle dawn (48..64s)
      const peakOmega = w0 + k1 + k2;
      const angleAt35 = w0 * 35 + (14 * k1 / (p1 + 1)) + k1 * 21 + (21 * k2 / (p2 + 1));
      const uBrake = clamp01((t - 35) / 11);
      const decay = 1 - smoothstep(0, 1, uBrake);
      omega = 0.28 + (peakOmega - 0.28) * decay;
      angle = angleAt35 + (peakOmega * 0.22) * smoothstep(0, 1, uBrake) + 0.28 * Math.max(0, t - 35);
    }
  }
  return { omega, angle };
}

function lerpColorHex(T, hexA, hexB, t) {
  const cA = hexToSrgbVec3(T, hexA);
  const cB = hexToSrgbVec3(T, hexB);
  return cA.lerp(cB, clamp01(t));
}

function updateSkyBackdrop(T, skyMesh, topHex, midHex, bottomHex, haloHex, starry = 0) {
  if (!skyMesh || !skyMesh.material || !skyMesh.material.uniforms) return;
  const u = skyMesh.material.uniforms;
  if (u.uSkyTop) u.uSkyTop.value.copy(hexToSrgbVec3(T, topHex));
  if (u.uSkyMid) u.uSkyMid.value.copy(hexToSrgbVec3(T, midHex));
  if (u.uSkyBottom) u.uSkyBottom.value.copy(hexToSrgbVec3(T, bottomHex));
  if (u.uHaloColor) u.uHaloColor.value.copy(hexToSrgbVec3(T, haloHex));
  if (u.uStarry) u.uStarry.value = starry;
}

function blendSkyBackdrop(T, skyMesh, themeA, themeB, mixT, starry = 0) {
  if (!skyMesh || !skyMesh.material || !skyMesh.material.uniforms) return;
  const u = skyMesh.material.uniforms;
  const t = clamp01(mixT);
  if (u.uSkyTop) u.uSkyTop.value.copy(lerpColorHex(T, themeA.skyTop, themeB.skyTop, t));
  if (u.uSkyMid) u.uSkyMid.value.copy(lerpColorHex(T, themeA.skyMid, themeB.skyMid, t));
  if (u.uSkyBottom) u.uSkyBottom.value.copy(lerpColorHex(T, themeA.skyBottom, themeB.skyBottom, t));
  if (u.uHaloColor) u.uHaloColor.value.copy(lerpColorHex(T, themeA.topColor, themeB.topColor, t));
  if (u.uStarry) u.uStarry.value = starry;
}

function toHexString(c, fallback = '#f6b4c6') {
  if (typeof c === 'string') return c;
  if (typeof c === 'number' && Number.isFinite(c)) {
    return `#${Math.max(0, Math.min(0xffffff, Math.round(c))).toString(16).padStart(6, '0')}`;
  }
  return fallback;
}

/**
 * Pure-white-head faceless Monument Valley 2 geometric character silhouette.
 */
function makeSilhouetteFigure(T, cfg) {
  const g = new T.Group();
  g.name = cfg.name || 'ending_silhouette';

  const coatHex = toHexString(cfg.color, '#76e0d0');
  const shadeHex = toHexString(cfg.shadeColor, '#5a6cb2');
  const topHex = toHexString(cfg.topColor, '#fff5e6');
  const theme = cfg.theme || MONUMENT_ERA_THEMES['2026_dusk'];

  const bodyMat = createMonumentMaterial(T, theme, {
    anchor: [0, 0, 0],
    heightRange: [-0.5, 2.2],
    topColor: topHex,
    litLeftColor: coatHex,
    shadeRightColor: shadeHex,
    bottomColor: shadeHex,
    emissiveBoost: cfg.emissiveBoost || '#121828',
    transparent: true,
    opacity: cfg.opacity ?? 0.98
  });

  const pureWhiteHeadMat = createMonumentMaterial(T, theme, {
    anchor: [0, 0, 0],
    heightRange: [-0.5, 2.2],
    topColor: '#ffffff',
    litLeftColor: '#fff9f4',
    shadeRightColor: '#dde6fa',
    bottomColor: '#c3d0f2',
    emissiveBoost: '#1e1f2c',
    transparent: true,
    opacity: cfg.opacity ?? 0.98
  });

  const trimMat = createMonumentMaterial(T, theme, {
    variant: 'gold',
    anchor: [0, 0, 0],
    heightRange: [-0.5, 2.2]
  });

  const height = cfg.height ?? 1.25;
  // Geometric draped tunic / cloak skirt + slender shoulder yoke
  const cloakLower = new THREE_CappedCone(T, 0.24, 0.11, height * 0.56, 10, bodyMat);
  cloakLower.position.y = height * 0.28;
  g.add(cloakLower);

  const shoulderCollar = new T.Mesh(
    new T.CylinderGeometry(0.115, 0.155, height * 0.14, 10),
    trimMat
  );
  shoulderCollar.position.y = height * 0.56;
  g.add(shoulderCollar);

  // Pure-white faceless geometric head (smooth ovoid + clean neck stem)
  const neck = new T.Mesh(new T.CylinderGeometry(0.045, 0.055, height * 0.09, 8), pureWhiteHeadMat);
  neck.position.y = height * 0.66;
  const head = new T.Mesh(new T.SphereGeometry(0.125, 14, 12), pureWhiteHeadMat);
  head.scale.set(0.92, 1.06, 0.94);
  head.position.y = height * 0.78;
  g.add(neck, head);

  if (cfg.cape) {
    const cape = new T.Mesh(
      new T.ConeGeometry(0.28, height * 0.58, 9),
      bodyMat
    );
    cape.position.set(0, height * 0.30, -0.04);
    g.add(cape);
  }

  if (cfg.hat === 'plumed') {
    const brim = new T.Mesh(new T.CylinderGeometry(0.22, 0.23, 0.032, 12), bodyMat);
    brim.position.y = height * 0.87;
    const coneCap = new T.Mesh(new T.ConeGeometry(0.11, 0.20, 10), bodyMat);
    coneCap.position.y = height * 0.96;
    const plume = new T.Mesh(new T.BoxGeometry(0.04, 0.15, 0.09), trimMat);
    plume.position.set(0.10, height * 0.93, -0.04);
    plume.rotation.z = -0.35;
    g.add(brim, coneCap, plume);
  } else if (cfg.hat === 'visor') {
    const hairCrest = new T.Mesh(new T.ConeGeometry(0.12, 0.19, 10), bodyMat);
    hairCrest.position.set(0, height * 0.90, -0.01);
    const visorMat = createMonumentMaterial(T, theme, {
      topColor: '#d9ffff',
      litLeftColor: '#6ef0ff',
      shadeRightColor: '#3cb9e8',
      bottomColor: '#2d82c6',
      emissiveBoost: '#287b99'
    });
    const visor = new T.Mesh(new T.CylinderGeometry(0.132, 0.132, 0.048, 12, 1, false, -0.8, 1.6), visorMat);
    visor.position.set(0, height * 0.79, 0.01);
    g.add(hairCrest, visor);
  } else if (cfg.hat === 'conical' || !cfg.hat) {
    // Monument Valley serene geometric headdress / hair contour
    const crownCap = new T.Mesh(new T.ConeGeometry(0.122, 0.18, 10), pureWhiteHeadMat);
    crownCap.position.y = height * 0.90;
    g.add(crownCap);
  }

  if (cfg.lantern) {
    const lanternMat = createMonumentMaterial(T, theme, {
      topColor: '#fffde6',
      litLeftColor: '#ffe79e',
      shadeRightColor: '#f5be66',
      bottomColor: '#db9a46',
      emissiveBoost: '#684c18'
    });
    const lantern = new T.Mesh(new T.OctahedronGeometry(0.095, 0), lanternMat);
    lantern.position.set(0.22, height * 0.48, 0.10);
    g.add(lantern);
  }

  // Soft pastel periwinkle ground shadow (zero flat black disc)
  const shadowMat = createMonumentMaterial(T, theme, {
    topColor: '#6978ba',
    litLeftColor: '#6978ba',
    shadeRightColor: '#5664a3',
    bottomColor: '#48548e',
    transparent: true,
    opacity: 0.32,
    depthWrite: false
  });
  const shadow = new T.Mesh(new T.CircleGeometry(0.25, 16), shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.015;
  g.add(shadow);

  g.userData.materials = [bodyMat, pureWhiteHeadMat, trimMat];
  return g;
}

function THREE_CappedCone(T, rBottom, rTop, height, segs, mat) {
  return new T.Mesh(new T.CylinderGeometry(rTop, rBottom, height, segs), mat);
}

function makeTwinLotusSculpture(T, scale = 1.0, theme = MONUMENT_ERA_THEMES['finale_convergence']) {
  const root = new T.Group();
  root.name = 'sacred_twin_lotus';
  root.scale.setScalar(scale);

  const stemMat = createMonumentMaterial(T, theme, {
    variant: 'gold',
    anchor: [0, 0, 0],
    heightRange: [-0.5, 3.0]
  });
  const sakuraPetalMat = createMonumentMaterial(T, theme, {
    anchor: [0, 0, 0],
    heightRange: [-0.5, 3.0],
    topColor: '#fff7ee',
    litLeftColor: '#f9bed0',
    shadeRightColor: '#b3a9eb',
    bottomColor: '#8488d8',
    emissiveBoost: '#28141c',
    transparent: true,
    opacity: 0.96
  });
  const celadonPetalMat = createMonumentMaterial(T, theme, {
    variant: 'mech',
    anchor: [0, 0, 0],
    heightRange: [-0.5, 3.0],
    emissiveBoost: '#14383b',
    transparent: true,
    opacity: 0.95
  });
  const coreMat = createMonumentMaterial(T, theme, {
    topColor: '#fffbe6',
    litLeftColor: '#ffea9f',
    shadeRightColor: '#f6c36e',
    bottomColor: '#df9c4c',
    emissiveBoost: '#684c14'
  });

  const stem = new T.Mesh(new T.CylinderGeometry(0.058, 0.105, 1.38, 10), stemMat);
  stem.position.y = 0.66;
  const collar = new T.Mesh(new T.CylinderGeometry(0.16, 0.12, 0.09, 8), stemMat);
  collar.position.y = 0.08;
  root.add(stem, collar);

  const blossoms = [];
  const offsets = [
    { x: -0.28, y: 1.28, z: 0.04, mat: sakuraPetalMat, tilt: -0.14 },
    { x: 0.28, y: 1.42, z: -0.04, mat: celadonPetalMat, tilt: 0.14 }
  ];

  for (const bCfg of offsets) {
    const flower = new T.Group();
    flower.position.set(bCfg.x, bCfg.y, bCfg.z);
    flower.rotation.z = bCfg.tilt;

    const core = new T.Mesh(new T.OctahedronGeometry(0.16, 1), coreMat);
    flower.add(core);

    const petals = [];
    const petalCount = 10;
    for (let i = 0; i < petalCount; i++) {
      const pivot = new T.Group();
      pivot.rotation.y = (i / petalCount) * Math.PI * 2;
      const petalGeo = new T.ConeGeometry(0.145, 0.58, 5);
      petalGeo.translate(0, 0.29, 0);
      const petal = new T.Mesh(petalGeo, bCfg.mat);
      petal.scale.set(1.0, 1.0, 0.36);
      petal.position.set(0, 0, 0.1);
      pivot.add(petal);
      flower.add(pivot);
      petals.push({ pivot, petal, ringIndex: i % 2 });
    }
    root.add(flower);
    blossoms.push({ flower, petals });
  }

  return {
    group: root,
    blossoms,
    materials: [stemMat, sakuraPetalMat, celadonPetalMat, coreMat],
    setBloom(bloom01) {
      const b = clamp01(bloom01);
      for (const bl of blossoms) {
        for (const p of bl.petals) {
          const openAngle = p.ringIndex === 0 ? lerp(0.18, 1.05, b) : lerp(0.12, 0.68, b);
          p.petal.rotation.x = openAngle;
        }
      }
    }
  };
}

function makeHexagramPedestal(T, radius = 2.9, theme = MONUMENT_ERA_THEMES['2026_dusk']) {
  const g = new T.Group();
  g.name = 'ending_hexagram_altar';

  const basePlinthMat = createMonumentMaterial(T, theme, {
    anchor: [0, 0, 0],
    heightRange: [-1.5, 2.5],
    topColor: '#e4ecf9',
    litLeftColor: '#98aee8',
    shadeRightColor: '#697ec9',
    bottomColor: '#4e5ea8'
  });
  const creamCapMat = createMonumentMaterial(T, theme, {
    variant: 'parapet',
    anchor: [0, 0, 0],
    heightRange: [-1.5, 2.5]
  });
  const brassMat = createMonumentMaterial(T, theme, {
    variant: 'gold',
    anchor: [0, 0, 0],
    heightRange: [-1.5, 2.5]
  });

  const basePlinth = new T.Mesh(new T.CylinderGeometry(radius, radius * 1.08, 0.38, 12), basePlinthMat);
  basePlinth.position.y = -0.19;
  g.add(basePlinth);

  const capDisc = new T.Mesh(new T.CylinderGeometry(radius * 0.9, radius * 0.92, 0.12, 12), creamCapMat);
  capDisc.position.y = 0.04;
  g.add(capDisc);

  const rimRing = new T.Mesh(new T.TorusGeometry(radius * 0.88, 0.055, 8, 36), brassMat);
  rimRing.rotation.x = Math.PI / 2;
  rimRing.position.y = 0.11;
  g.add(rimRing);

  // Classic Pui Ching 4-color hexagram mosaic inlays (Red, Obsidian-Indigo, Ivory-Cream, Jade-Green)
  const segPalette = [
    { top: '#ffc9bf', lit: '#ef7b74', shade: '#a4578a' },
    { top: '#5d6790', lit: '#3f4772', shade: '#2c3358' },
    { top: '#ffffff', lit: '#fff3e8', shade: '#cad5f3' },
    { top: '#9cf2d2', lit: '#47b588', shade: '#2f827c' }
  ];
  const rInner = radius * 0.42;
  const rOuter = radius * 0.72;
  for (let i = 0; i < 6; i++) {
    const p = segPalette[i % segPalette.length];
    const segMat = createMonumentMaterial(T, theme, {
      topColor: p.top,
      litLeftColor: p.lit,
      shadeRightColor: p.shade,
      bottomColor: p.shade
    });
    const a0 = (i * Math.PI) / 3;
    const a1 = ((i + 1) * Math.PI) / 3;
    const aMid = (a0 + a1) * 0.5;
    const tri = new T.Shape();
    tri.moveTo(Math.cos(a0) * rInner, Math.sin(a0) * rInner);
    tri.lineTo(Math.cos(a1) * rInner, Math.sin(a1) * rInner);
    tri.lineTo(Math.cos(aMid) * rOuter, Math.sin(aMid) * rOuter);
    tri.closePath();
    const triGeo = new T.ExtrudeGeometry(tri, { depth: 0.032, bevelEnabled: false });
    triGeo.rotateX(-Math.PI / 2);
    const seg = new T.Mesh(triGeo, segMat);
    seg.position.y = 0.105;
    g.add(seg);

    const gem = new T.Mesh(new T.OctahedronGeometry(0.13, 0), segMat);
    gem.position.set(Math.cos(aMid) * radius * 0.78, 0.18, Math.sin(aMid) * radius * 0.78);
    g.add(gem);
  }

  return g;
}

function makeGuiaSilhouetteMesh(T, theme, scale = 1.0) {
  const g = new T.Group();
  const cream = createMonumentMaterial(T, theme, { variant: 'parapet', transparent: true, opacity: 0.92 });
  const gold = createMonumentMaterial(T, theme, { variant: 'gold', transparent: true, opacity: 0.92 });
  const glow = createMonumentMaterial(T, theme, {
    topColor: '#fffde0',
    litLeftColor: '#ffeaab',
    shadeRightColor: '#f6cb80',
    emissiveBoost: '#6a4e16',
    transparent: true,
    opacity: 0.95
  });
  const mintDome = createMonumentMaterial(T, theme, { variant: 'mech', transparent: true, opacity: 0.94 });

  const bastion = new T.Mesh(new T.BoxGeometry(1.1 * scale, 0.65 * scale, 0.9 * scale), cream);
  bastion.position.y = 0.32 * scale;
  const shaft = new T.Mesh(new T.CylinderGeometry(0.18 * scale, 0.30 * scale, 1.35 * scale, 10), cream);
  shaft.position.y = 1.30 * scale;
  const band = new T.Mesh(new T.CylinderGeometry(0.24 * scale, 0.25 * scale, 0.1 * scale, 10), gold);
  band.position.y = 1.55 * scale;
  const lantern = new T.Mesh(new T.CylinderGeometry(0.16 * scale, 0.16 * scale, 0.28 * scale, 10), glow);
  lantern.position.y = 2.08 * scale;
  const cupola = new T.Mesh(
    new T.SphereGeometry(0.20 * scale, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.56),
    mintDome
  );
  cupola.position.y = 2.22 * scale;
  g.add(bastion, shaft, band, lantern, cupola);
  return g;
}

function makePuiChingColonnadeMonument(T, theme) {
  const g = new T.Group();
  g.name = 'pui_ching_colonnade_dawn';
  const mint = createMonumentMaterial(T, theme, {
    topColor: '#ecfcf7',
    litLeftColor: '#9cebd7',
    shadeRightColor: '#61b7b5',
    bottomColor: '#458b95'
  });
  const cream = createMonumentMaterial(T, theme, { variant: 'parapet' });
  const roof = createMonumentMaterial(T, theme, {
    topColor: '#ffe0cc',
    litLeftColor: '#f59f87',
    shadeRightColor: '#9677be',
    bottomColor: '#6c5a9e'
  });
  const terracotta = createMonumentMaterial(T, theme, { variant: 'roof' });

  // Central cream-mint pedimented Pavilion + Octagonal Pui Ching Left Turret
  const mainHall = new T.Mesh(new T.BoxGeometry(5.2, 2.15, 0.72), mint);
  mainHall.position.set(0, 1.075, 0);
  const hallRoof = new T.Mesh(
    new T.CylinderGeometry(0.24, 1.48, 0.68, 4, 1, false, Math.PI / 4),
    roof
  );
  hallRoof.scale.set(2.55, 1.0, 0.54);
  hallRoof.position.set(0, 2.52, 0);
  const entablature = new T.Mesh(new T.BoxGeometry(5.45, 0.28, 0.86), cream);
  entablature.position.set(0, 2.12, 0.08);
  g.add(mainHall, hallRoof, entablature);

  // 6 white arched colonnade piers in front
  for (let i = -2.5; i <= 2.5; i += 1.0) {
    const pier = new T.Mesh(new T.BoxGeometry(0.26, 2.05, 0.28), cream);
    pier.position.set(i, 1.025, 0.42);
    g.add(pier);
  }

  // Left octagonal wood-shuttered tower Wing
  const octTower = new T.Mesh(new T.CylinderGeometry(0.72, 0.76, 2.55, 8), mint);
  octTower.rotation.y = Math.PI / 8;
  octTower.position.set(-2.95, 1.275, 0.16);
  const octCap = new T.Mesh(new T.ConeGeometry(0.86, 0.56, 8), terracotta);
  octCap.rotation.y = Math.PI / 8;
  octCap.position.set(-2.95, 2.82, 0.16);
  g.add(octTower, octCap);

  return g;
}

function makeMacauHorizonRing(T, count = 18, radius = 9.2, theme = MONUMENT_ERA_THEMES['2026_dusk']) {
  const g = new T.Group();
  g.name = 'ending_macau_horizon';

  const items = [];
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2;
    const hBase = 1.2 + ((i * 7) % 5) * 0.52;
    const slot = new T.Group();
    slot.position.set(Math.cos(a) * radius, 0, Math.sin(a) * radius);
    slot.rotation.y = -a + Math.PI / 2;

    // 1622 Baroque heritage landmark (St. Paul's Cathedral silhouette at cardinal index 0 / count/2)
    let mesh1622;
    if (i === 0) {
      mesh1622 = buildStPaulsMonument(T, '1622_dawn', {
        mode: 'full',
        anchor: [0, 0, 0],
        heightRange: [-1.0, 5.0]
      });
      mesh1622.scale.setScalar(0.85);
      mesh1622.position.y = -0.35;
    } else {
      const m1622 = createMonumentMaterial(T, '1622_dawn', {
        transparent: true,
        opacity: 0.92
      });
      mesh1622 = new T.Mesh(new T.ConeGeometry(0.55, hBase * 1.15, 4), m1622);
      mesh1622.rotation.y = Math.PI / 4;
      mesh1622.position.y = (hBase * 1.15) / 2 - 0.3;
    }
    slot.add(mesh1622);

    // 2026 Ruins of St. Paul's (slot 0), Guia Lighthouse (slot 4 & 14), Macau Tower (slot 9), Pui Ching/heritage blocks
    let mesh2026;
    if (i === 0) {
      mesh2026 = buildStPaulsMonument(T, '2026_dusk', {
        mode: 'ruin',
        anchor: [0, 0, 0],
        heightRange: [-1.0, 5.0]
      });
      mesh2026.scale.setScalar(0.92);
      mesh2026.position.y = -0.35;
    } else if (i === 3 || i === count - 3) {
      mesh2026 = makeGuiaSilhouetteMesh(T, '2026_dusk', 0.9);
      mesh2026.position.y = -0.35;
    } else if (i === Math.floor(count / 2)) {
      const towerGrp = new T.Group();
      const tMat = createMonumentMaterial(T, '2026_dusk', { variant: 'parapet', transparent: true, opacity: 0.92 });
      const shaft = new T.Mesh(new T.CylinderGeometry(0.11, 0.28, 3.4, 8), tMat);
      shaft.position.y = 1.4;
      const pod = new T.Mesh(new T.CylinderGeometry(0.42, 0.32, 0.34, 12), tMat);
      pod.position.y = 2.4;
      const needle = new T.Mesh(new T.CylinderGeometry(0.025, 0.06, 1.3, 6), tMat);
      needle.position.y = 3.6;
      towerGrp.add(shaft, pod, needle);
      mesh2026 = towerGrp;
    } else {
      const m2026 = createMonumentMaterial(T, theme, {
        variant: i % 3 === 0 ? 'mech' : 'parapet',
        transparent: true,
        opacity: 0.92
      });
      mesh2026 = new T.Mesh(new T.BoxGeometry(0.78, hBase * 1.35, 0.68), m2026);
      mesh2026.position.y = (hBase * 1.35) / 2 - 0.3;
    }
    slot.add(mesh2026);

    // 2077 cyber holographic spire + golden protective sphere over St. Paul's slot
    let mesh2077;
    if (i === 0) {
      const cyberGroup = new T.Group();
      const barrierMat = createMonumentMaterial(T, '2077_cyber', {
        variant: 'gold',
        transparent: true,
        opacity: 0.58
      });
      const dome = new T.Mesh(new T.SphereGeometry(1.45, 16, 12), barrierMat);
      dome.position.y = 0.85;
      const spireRuins = buildStPaulsMonument(T, '2077_cyber', {
        mode: 'ruin',
        anchor: [0, 0, 0],
        heightRange: [-1.0, 5.0]
      });
      spireRuins.scale.setScalar(0.84);
      spireRuins.position.y = -0.35;
      cyberGroup.add(spireRuins, dome);
      mesh2077 = cyberGroup;
    } else {
      const m2077 = createMonumentMaterial(T, '2077_cyber', {
        topColor: i % 2 === 0 ? '#a8fbff' : '#ffe8b8',
        litLeftColor: i % 2 === 0 ? '#55d8f0' : '#f4b96a',
        shadeRightColor: '#4e5da8',
        bottomColor: '#364182',
        emissiveBoost: i % 2 === 0 ? '#18445e' : '#4a3210',
        transparent: true,
        opacity: 0.92
      });
      mesh2077 = new T.Mesh(new T.BoxGeometry(0.46, hBase * 2.25, 0.46), m2077);
      mesh2077.position.y = (hBase * 2.25) / 2 - 0.3;
    }
    slot.add(mesh2077);

    g.add(slot);
    items.push({ slot, mesh1622, mesh2026, mesh2077, baseH: hBase });
  }

  return { group: g, items };
}

export class EndingCinematicsDirector {
  /**
   * @param {{
   *   THREE?: any,
   *   scene?: any,
   *   camera?: any,
   *   onSubtitle?: (cue: any) => void,
   *   onAudioCue?: (cue: any) => void,
   *   onFinish?: (result: any) => void
   * }} options
   */
  constructor(options = {}) {
    this.THREE = resolveTHREE(options.THREE);
    this.scene = options.scene || new this.THREE.Scene();
    this.ownsScene = !options.scene;
    this.camera = options.camera || null;
    this.onSubtitle = typeof options.onSubtitle === 'function' ? options.onSubtitle : null;
    this.onAudioCue = typeof options.onAudioCue === 'function' ? options.onAudioCue : null;
    this.onFinish = typeof options.onFinish === 'function' ? options.onFinish : null;
    this.lang = normalizeLang(options.lang || 'zh-Hant');
    this.bgMode = normalizeBgMode(options.bgMode || 'day');

    this.root = null;
    this.endingKey = null;
    this.active = false;
    this.finished = false;
    this.elapsed = 0;
    this.duration = 0;
    this.phase = 'idle';
    this.activeSubtitle = null;
    this.particleCount = 0;
    this.ringSpeed = 0;

    this._lastSubtitleId = null;
    this._firedAudioIds = new Set();
    this._savedSceneState = null;
    this._savedCameraState = null;
    this._rig = null;
  }

  _saveEnvironmentState() {
    if (!this._savedSceneState && this.scene) {
      this._savedSceneState = {
        background: this.scene.background ?? null,
        fog: this.scene.fog ?? null
      };
    }
    if (!this._savedCameraState && this.camera) {
      this._savedCameraState = {
        position: this.camera.position ? this.camera.position.clone() : null,
        quaternion: this.camera.quaternion ? this.camera.quaternion.clone() : null,
        zoom: this.camera.zoom ?? 1,
        fov: this.camera.fov ?? 45
      };
    }
  }

  _restoreEnvironmentState() {
    if (this._savedSceneState && this.scene) {
      this.scene.background = this._savedSceneState.background;
      this.scene.fog = this._savedSceneState.fog;
      this._savedSceneState = null;
    }
    if (this._savedCameraState && this.camera) {
      if (this._savedCameraState.position && this.camera.position) {
        this.camera.position.copy(this._savedCameraState.position);
      }
      if (this._savedCameraState.quaternion && this.camera.quaternion) {
        this.camera.quaternion.copy(this._savedCameraState.quaternion);
      }
      if (typeof this.camera.zoom === 'number') {
        this.camera.zoom = this._savedCameraState.zoom;
      }
      if (this.camera.isPerspectiveCamera && typeof this.camera.fov === 'number') {
        this.camera.fov = this._savedCameraState.fov;
      }
      this.camera.updateProjectionMatrix?.();
      this.camera.updateMatrixWorld?.(true);
      this._savedCameraState = null;
    }
  }

  _cleanupRigOnly() {
    if (this.root) {
      this.root.parent?.remove?.(this.root);
      disposeTree(this.THREE, this.root);
      this.root = null;
    }
    this._rig = null;
    this.particleCount = 0;
  }

  _applyCameraFrame(pos, lookAt, zoomOrFov = 1.0) {
    const cam = this.camera;
    if (!cam || !cam.position) return;
    cam.position.set(pos[0], pos[1], pos[2]);
    if (typeof cam.lookAt === 'function') {
      cam.lookAt(lookAt[0], lookAt[1], lookAt[2]);
    }
    if (cam.isOrthographicCamera) {
      const baseZoom = this._savedCameraState?.zoom ?? 1.0;
      cam.zoom = Math.max(0.45, baseZoom * zoomOrFov);
      cam.updateProjectionMatrix?.();
    } else if (cam.isPerspectiveCamera) {
      const baseFov = this._savedCameraState?.fov ?? 46;
      cam.fov = Math.max(24, Math.min(75, baseFov / Math.max(0.55, zoomOrFov)));
      cam.updateProjectionMatrix?.();
    }
    cam.updateMatrixWorld?.(true);
  }

  _emitAudio(id, payload = {}) {
    if (this._firedAudioIds.has(id)) return;
    this._firedAudioIds.add(id);
    this.onAudioCue?.({ id, endingKey: this.endingKey, elapsed: this.elapsed, ...payload });
  }

  setLang(nextLang) {
    this.lang = normalizeLang(nextLang);
    if (this.active) {
      this._updateSubtitles(this.elapsed, true);
    }
  }

  setBgMode(nextMode) {
    this.bgMode = normalizeBgMode(nextMode);
    if (this.root) {
      applyMonumentBgModeToRoot(this.THREE, this.root, this.bgMode, 'endings');
    }
  }

  _updateSubtitles(t, forceEmit = false) {
    const list = SUBTITLE_TIMELINES[this.endingKey] || [];
    let found = null;
    let foundIdx = -1;
    for (let i = 0; i < list.length; i++) {
      const cue = list[i];
      if (t >= cue.start && t <= cue.end) {
        found = cue;
        foundIdx = i;
        break;
      }
    }
    if (!found && list.length > 0 && t >= list[list.length - 1].start) {
      foundIdx = list.length - 1;
      found = list[foundIdx];
    }
    this.activeSubtitle = found
      ? getLocalizedSubtitleCue(found, this.endingKey, foundIdx, this.lang)
      : null;

    const curId = this.activeSubtitle ? this.activeSubtitle.id : null;
    if (forceEmit || curId !== this._lastSubtitleId) {
      this._lastSubtitleId = curId;
      this.onSubtitle?.(this.activeSubtitle);
    }
  }

  _buildEndingA() {
    const T = this.THREE;
    const root = new T.Group();
    root.name = 'ending_A_frozen_dusk';
    const theme = MONUMENT_ERA_THEMES['1835_ember'];

    const skyBackdrop = createMonumentSkyBackdrop(T, '1835_ember');
    root.add(skyBackdrop);

    const waterMat = createMonumentMaterial(T, theme, {
      topColor: '#8ec4df',
      litLeftColor: '#a6d2ec',
      shadeRightColor: '#5c7ec4',
      bottomColor: '#4561a3',
      emissiveBoost: '#0e1d36'
    });
    const water = new T.Mesh(new T.CircleGeometry(24, 48), waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.35;
    root.add(water);

    const altar = makeHexagramPedestal(T, 2.8, theme);
    root.add(altar);

    const horizon = makeMacauHorizonRing(T, 16, 9.6, '2026_dusk');
    for (const item of horizon.items) {
      item.mesh1622.visible = false;
      item.mesh2077.visible = false;
      item.mesh2026.visible = true;
    }
    root.add(horizon.group);

    // Sofia guardian pure-white-head Monument Valley silhouette
    const sofia = makeSilhouetteFigure(T, {
      name: 'ending_A_sofia',
      theme,
      color: '#88e0dc',
      shadeColor: '#5579be',
      topColor: '#fff7eb',
      height: 1.32
    });
    sofia.position.set(0, 0.12, 0.2);
    root.add(sofia);

    // Distant Pui Ching colonnade & St. Paul's dusk silhouette framing Mother + Ryan
    const homeGroup = new T.Group();
    homeGroup.position.set(0, 0.05, -6.2);
    const homeColonade = makePuiChingColonnadeMonument(T, '2026_dusk');
    homeColonade.scale.setScalar(0.55);
    homeColonade.position.set(0, 0, -1.35);
    const distantStPauls = buildStPaulsMonument(T, '1835_ember', {
      mode: 'ruin',
      anchor: [0, 0, 0],
      heightRange: [-1.0, 5.5]
    });
    distantStPauls.scale.setScalar(0.75);
    distantStPauls.position.set(2.4, 0, -2.0);
    homeGroup.add(homeColonade, distantStPauls);

    const mother = makeSilhouetteFigure(T, {
      name: 'ending_A_mother',
      theme,
      color: '#f5be9f',
      shadeColor: '#8d88cc',
      topColor: '#fff6ea',
      height: 1.24
    });
    mother.position.x = -0.45;
    const ryan = makeSilhouetteFigure(T, {
      name: 'ending_A_ryan',
      theme,
      color: '#9eddf4',
      shadeColor: '#6784cf',
      topColor: '#ffffff',
      height: 1.18
    });
    ryan.position.x = 0.42;
    homeGroup.add(mother, ryan);
    root.add(homeGroup);

    // Sea-blue luminous prayer beads (24 spheres) + Pastel gold compass rings
    const beadsGroup = new T.Group();
    const beads = [];
    const beadMat = createMonumentMaterial(T, theme, {
      topColor: '#dffcff',
      litLeftColor: '#78e2f6',
      shadeRightColor: '#4c98d8',
      bottomColor: '#3671b2',
      emissiveBoost: '#1e506b'
    });
    for (let i = 0; i < 24; i++) {
      const m = new T.Mesh(new T.OctahedronGeometry(0.115, 1), beadMat);
      beadsGroup.add(m);
      beads.push(m);
    }
    root.add(beadsGroup);

    const bronzeMat = createMonumentMaterial(T, theme, {
      variant: 'gold',
      emissiveBoost: '#38280b'
    });
    const compassOuter = new T.Mesh(new T.TorusGeometry(3.4, 0.06, 10, 56), bronzeMat);
    compassOuter.rotation.x = Math.PI / 2;
    compassOuter.position.y = 1.2;
    const compassInner = new T.Mesh(new T.TorusGeometry(2.35, 0.05, 10, 48), bronzeMat);
    compassInner.rotation.x = Math.PI / 2.4;
    compassInner.position.y = 1.45;
    root.add(compassOuter, compassInner);

    // Golden dusk mist motes (180 particles)
    const count = 180;
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 * 5;
      const r = 1.5 + (i % 23) * 0.45;
      seeds[i * 3 + 0] = a;
      seeds[i * 3 + 1] = r;
      seeds[i * 3 + 2] = 0.25 + ((i * 13) % 19) * 0.22;
      positions[i * 3 + 0] = Math.cos(a) * r;
      positions[i * 3 + 1] = seeds[i * 3 + 2];
      positions[i * 3 + 2] = Math.sin(a) * r;
    }
    const particleGeo = new T.BufferGeometry();
    particleGeo.setAttribute('position', new T.BufferAttribute(positions, 3));
    const particleMat = makeSoftPointsMaterial(T, {
      color: 0xffe49e,
      size: 0.24,
      opacity: 0.70
    });
    const mistPoints = new T.Points(particleGeo, particleMat);
    root.add(mistPoints);

    // Ambient + sunset key light inside root
    const keyLight = new T.DirectionalLight(0xffcb8c, 1.35);
    keyLight.position.set(8, 11, 6);
    const fillLight = new T.AmbientLight(0x88a2bc, 0.75);
    root.add(keyLight, fillLight);

    this.particleCount = count + beads.length;
    this._rig = {
      type: 'A',
      skyBackdrop,
      horizon,
      sofia,
      homeGroup,
      beads,
      compassOuter,
      compassInner,
      particleGeo,
      seeds,
      particleMat,
      beadMat,
      count
    };
    this.root = root;
    this.scene.add(root);
  }

  _buildEndingB() {
    const T = this.THREE;
    const root = new T.Group();
    root.name = 'ending_B_three_generations';
    const theme = MONUMENT_ERA_THEMES['finale_convergence'];

    const skyBackdrop = createMonumentSkyBackdrop(T, 'finale_convergence');
    root.add(skyBackdrop);

    const waterMat = createMonumentMaterial(T, theme, {
      topColor: '#8ba4e6',
      litLeftColor: '#768bd6',
      shadeRightColor: '#4e5aa6',
      bottomColor: '#394284',
      emissiveBoost: '#141736'
    });
    const water = new T.Mesh(new T.CircleGeometry(24, 48), waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.35;
    root.add(water);

    const altar = makeHexagramPedestal(T, 3.15, theme);
    root.add(altar);

    const horizon = makeMacauHorizonRing(T, 20, 10.2, theme);
    for (const item of horizon.items) {
      item.mesh1622.visible = false;
      item.mesh2026.visible = true;
      item.mesh2077.visible = true;
      item.mesh2026.traverse?.((c) => {
        if (c.isMesh && c.material) c.material.opacity = 0.65;
      });
    }
    root.add(horizon.group);

    // Twin lotus rising at altar center
    const twinLotus = makeTwinLotusSculpture(T, 1.18, theme);
    twinLotus.group.position.set(0, 0.1, 0);
    root.add(twinLotus.group);

    // Three generational heroes around the altar: Afonso (amber), Sofia (mint-teal), Ryan (cyber cyan)
    const afonso = makeSilhouetteFigure(T, {
      name: 'ending_B_afonso',
      theme,
      color: '#f2b179',
      shadeColor: '#8b63a8',
      topColor: '#fff6e4',
      height: 1.38,
      hat: 'plumed',
      cape: true
    });
    const sofia = makeSilhouetteFigure(T, {
      name: 'ending_B_sofia',
      theme,
      color: '#76e0cc',
      shadeColor: '#548bb8',
      topColor: '#f8fffc',
      height: 1.28
    });
    const ryan = makeSilhouetteFigure(T, {
      name: 'ending_B_ryan',
      theme,
      color: '#73dcff',
      shadeColor: '#4e63b8',
      topColor: '#f5fcff',
      height: 1.32,
      hat: 'visor',
      cape: true
    });
    root.add(afonso, sofia, ryan);

    // Ascending 3 harmonic rings (Amber, Teal-Jade, Cyber Sapphire)
    const ringSpecs = [
      { top: '#fff2be', lit: '#f6cf7d', shade: '#d49a4c' },
      { top: '#cffcf0', lit: '#6fe0cc', shade: '#48a4b2' },
      { top: '#d6f7ff', lit: '#6fdfff', shade: '#4e79d4' }
    ];
    const rings = ringSpecs.map((spec, idx) => {
      const mat = createMonumentMaterial(T, theme, {
        topColor: spec.top,
        litLeftColor: spec.lit,
        shadeRightColor: spec.shade,
        bottomColor: spec.shade,
        emissiveBoost: '#242038'
      });
      const r = new T.Mesh(new T.TorusGeometry(2.6 + idx * 0.78, 0.065, 10, 56), mat);
      r.position.y = 0.8 + idx * 0.85;
      root.add(r);
      return r;
    });

    // Monument Valley 2 pastel barrier colonnade slabs opening outward
    const barrierDoors = [];
    const barrierMat = createMonumentMaterial(T, theme, {
      variant: 'gold',
      transparent: true,
      opacity: 0.62,
      emissiveBoost: '#281e0c'
    });
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const door = new T.Mesh(new T.BoxGeometry(2.4, 2.8, 0.14), barrierMat);
      door.position.set(Math.cos(a) * 6.5, 1.1, Math.sin(a) * 6.5);
      door.rotation.y = -a + Math.PI / 2;
      root.add(door);
      barrierDoors.push({ door, angle: a });
    }

    // Floating three-color energy motes (240 particles)
    const count = 240;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 3);
    const paletteCols = [new T.Color(0xffc978), new T.Color(0x6fe0cc), new T.Color(0x7ae8ff)];
    for (let i = 0; i < count; i++) {
      const col = paletteCols[i % 3];
      colors[i * 3 + 0] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
      seeds[i * 3 + 0] = (i / count) * Math.PI * 2 * 7;
      seeds[i * 3 + 1] = 0.9 + (i % 17) * 0.25;
      seeds[i * 3 + 2] = (i % 29) * 0.18;
      positions[i * 3 + 0] = Math.cos(seeds[i * 3]) * seeds[i * 3 + 1];
      positions[i * 3 + 1] = seeds[i * 3 + 2];
      positions[i * 3 + 2] = Math.sin(seeds[i * 3]) * seeds[i * 3 + 1];
    }
    const pGeo = new T.BufferGeometry();
    pGeo.setAttribute('position', new T.BufferAttribute(positions, 3));
    pGeo.setAttribute('color', new T.BufferAttribute(colors, 3));
    const pMat = makeSoftPointsMaterial(T, {
      size: 0.24,
      vertexColors: true,
      opacity: 0.72
    });
    const points = new T.Points(pGeo, pMat);
    root.add(points);

    const keyLight = new T.DirectionalLight(0xe5c8ff, 1.3);
    keyLight.position.set(-6, 12, 8);
    const fillLight = new T.AmbientLight(0x524878, 0.85);
    root.add(keyLight, fillLight);

    this.particleCount = count;
    this._rig = {
      type: 'B',
      skyBackdrop,
      horizon,
      twinLotus,
      afonso,
      sofia,
      ryan,
      rings,
      barrierDoors,
      pGeo,
      seeds,
      count
    };
    this.root = root;
    this.scene.add(root);
  }

  _buildEndingC() {
    const T = this.THREE;
    const root = new T.Group();
    root.name = 'ending_C_made_in_heaven';
    const dawnTheme = MONUMENT_ERA_THEMES['2026_dusk'];
    const cosmosTheme = MONUMENT_ERA_THEMES['2077_cyber'];

    const skyBackdrop = createMonumentSkyBackdrop(T, '2026_dusk');
    root.add(skyBackdrop);

    const waterMat = createMonumentMaterial(T, cosmosTheme, {
      topColor: '#699cd4',
      litLeftColor: '#5482c4',
      shadeRightColor: '#364d94',
      bottomColor: '#2a3b7a',
      emissiveBoost: '#101d3b'
    });
    const water = new T.Mesh(new T.CircleGeometry(28, 48), waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.35;
    root.add(water);

    const altar = makeHexagramPedestal(T, 3.0, dawnTheme);
    root.add(altar);

    // Era-morphing Monument horizon landmarks (1622 St. Paul's Full <-> 2026 Ruins+Guia+Macau Tower <-> 2077 Cyber)
    const horizon = makeMacauHorizonRing(T, 20, 10.6, dawnTheme);
    root.add(horizon.group);

    // Dual Gold & Pearl-Silver Heaven Rings (JOJO Made in Heaven centerpiece)
    const heavenGroup = new T.Group();
    heavenGroup.position.set(0, 2.35, 0);
    const goldRingMat = createMonumentMaterial(T, dawnTheme, {
      topColor: '#fff5be',
      litLeftColor: '#ffd978',
      shadeRightColor: '#df9d46',
      bottomColor: '#b5782c',
      emissiveBoost: '#52380c'
    });
    const silverRingMat = createMonumentMaterial(T, cosmosTheme, {
      topColor: '#ffffff',
      litLeftColor: '#d9ecff',
      shadeRightColor: '#8baae8',
      bottomColor: '#6682cc',
      emissiveBoost: '#28406e'
    });
    const goldHeavenRing = new T.Mesh(new T.TorusGeometry(4.2, 0.11, 12, 72), goldRingMat);
    const silverHeavenRing = new T.Mesh(new T.TorusGeometry(3.45, 0.095, 12, 64), silverRingMat);
    const innerClockRing = new T.Mesh(new T.TorusGeometry(2.15, 0.055, 10, 48), goldRingMat);

    // Clock tick markers along outer gold Heaven Ring
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const tick = new T.Mesh(new T.BoxGeometry(0.12, 0.36, 0.12), silverRingMat);
      tick.position.set(Math.cos(a) * 4.2, Math.sin(a) * 4.2, 0);
      tick.rotation.z = a + Math.PI / 2;
      goldHeavenRing.add(tick);
    }
    heavenGroup.add(goldHeavenRing, silverHeavenRing, innerClockRing);
    root.add(heavenGroup);

    // Sun & Moon celestial bodies + light-trail ribbons
    const celestialDome = new T.Group();
    const sunMat = createMonumentMaterial(T, dawnTheme, {
      topColor: '#fffde8',
      litLeftColor: '#ffe188',
      shadeRightColor: '#f5b248',
      emissiveBoost: '#785014',
      transparent: true,
      opacity: 0.96
    });
    const sunMesh = new T.Mesh(new T.SphereGeometry(0.68, 16, 14), sunMat);
    const moonMat = createMonumentMaterial(T, cosmosTheme, {
      topColor: '#f5fbff',
      litLeftColor: '#b8dcff',
      shadeRightColor: '#769fe8',
      emissiveBoost: '#2e4e85',
      transparent: true,
      opacity: 0.96
    });
    const moonMesh = new T.Mesh(new T.SphereGeometry(0.52, 16, 14), moonMat);
    celestialDome.add(sunMesh, moonMesh);

    const sunTrail = [];
    const moonTrail = [];
    for (let i = 0; i < 16; i++) {
      const frac = 1 - i / 16;
      const stMat = new T.MeshBasicMaterial({
        color: 0xffe08a,
        transparent: true,
        opacity: frac * 0.72,
        depthWrite: false
      });
      const st = new T.Mesh(new T.SphereGeometry(0.18 + frac * 0.34, 8, 6), stMat);
      celestialDome.add(st);
      sunTrail.push({ mesh: st, mat: stMat });

      const mtMat = new T.MeshBasicMaterial({
        color: 0xaed4ff,
        transparent: true,
        opacity: frac * 0.68,
        depthWrite: false
      });
      const mt = new T.Mesh(new T.SphereGeometry(0.14 + frac * 0.25, 8, 6), mtMat);
      celestialDome.add(mt);
      moonTrail.push({ mesh: mt, mat: mtMat });
    }
    root.add(celestialDome);

    // Panoramic Starfield Vortex (1200 stars) + Time-dilation Spiral Helix (240 motes)
    const starCount = 1200;
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    const starSeeds = new Float32Array(starCount * 3);
    const cGold = new T.Color(0xffe194);
    const cBlue = new T.Color(0xa6d2ff);
    const cWhite = new T.Color(0xfafcff);
    for (let i = 0; i < starCount; i++) {
      const theta = ((i * 137.508) % 360) * (Math.PI / 180);
      const phi = Math.acos(1 - 2 * ((i + 0.5) / starCount)) * 0.78;
      const r = 13.5 + (i % 7) * 0.9;
      starSeeds[i * 3 + 0] = theta;
      starSeeds[i * 3 + 1] = phi;
      starSeeds[i * 3 + 2] = r;
      starPos[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = Math.max(0.4, r * Math.cos(phi));
      starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      const c = i % 5 === 0 ? cGold : i % 3 === 0 ? cBlue : cWhite;
      starCol[i * 3 + 0] = c.r;
      starCol[i * 3 + 1] = c.g;
      starCol[i * 3 + 2] = c.b;
    }
    const starGeo = new T.BufferGeometry();
    starGeo.setAttribute('position', new T.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new T.BufferAttribute(starCol, 3));
    const starMat = makeSoftPointsMaterial(T, {
      size: 0.30,
      vertexColors: true,
      opacity: 0.70
    });
    const starField = new T.Points(starGeo, starMat);
    root.add(starField);

    const spiralCount = 240;
    const spiralPos = new Float32Array(spiralCount * 3);
    const spiralSeeds = new Float32Array(spiralCount * 3);
    for (let i = 0; i < spiralCount; i++) {
      spiralSeeds[i * 3 + 0] = (i / spiralCount) * Math.PI * 2 * 8;
      spiralSeeds[i * 3 + 1] = 2.1 + (i % 15) * 0.42;
      spiralSeeds[i * 3 + 2] = 0.2 + ((i * 7) % 24) * 0.26;
      spiralPos[i * 3 + 0] = Math.cos(spiralSeeds[i * 3]) * spiralSeeds[i * 3 + 1];
      spiralPos[i * 3 + 1] = spiralSeeds[i * 3 + 2];
      spiralPos[i * 3 + 2] = Math.sin(spiralSeeds[i * 3]) * spiralSeeds[i * 3 + 1];
    }
    const spiralGeo = new T.BufferGeometry();
    spiralGeo.setAttribute('position', new T.BufferAttribute(spiralPos, 3));
    const spiralMat = makeSoftPointsMaterial(T, {
      color: 0xffeba8,
      size: 0.26,
      opacity: 0.72
    });
    const spiralPoints = new T.Points(spiralGeo, spiralMat);
    root.add(spiralPoints);

    // Singularity Whiteout Dome (translucent pearl wash drawn cleanly over scene)
    const whiteoutMat = new T.MeshBasicMaterial({
      color: 0xfdfcf5,
      transparent: true,
      opacity: 0,
      side: T.DoubleSide,
      depthWrite: false,
      depthTest: false
    });
    const whiteoutSphere = new T.Mesh(new T.SphereGeometry(22, 24, 18), whiteoutMat);
    whiteoutSphere.renderOrder = 900;
    root.add(whiteoutSphere);

    // Phase 4: "5:54 Dawn of the New World" — Monument Valley 2 Pui Ching + 5-Tier St. Paul's + Guia + Sacred Twin Lotus + 4 Pure-White-Head Silhouettes
    const dawnGroup = new T.Group();
    const twinLotus = makeTwinLotusSculpture(T, 1.35, dawnTheme);
    twinLotus.group.position.set(0, 0.1, -0.4);
    dawnGroup.add(twinLotus.group);

    const puiChingColonade = makePuiChingColonnadeMonument(T, dawnTheme);
    puiChingColonade.position.set(0, 0, -3.55);
    dawnGroup.add(puiChingColonade);

    // Flanking St. Paul's 5-Tier Ruins & Guia Lighthouse silhouettes on the morning ridge
    const dawnStPauls = buildStPaulsMonument(T, dawnTheme, {
      mode: 'cover',
      anchor: [0, 0, 0],
      heightRange: [-1.2, 6.2]
    });
    dawnStPauls.position.set(3.95, 0.0, -4.3);
    dawnStPauls.rotation.y = -0.35;
    dawnStPauls.scale.setScalar(1.05);
    dawnGroup.add(dawnStPauls);

    const dawnGuia = makeGuiaSilhouetteMesh(T, dawnTheme, 1.25);
    dawnGuia.position.set(-4.3, 0.0, -4.5);
    dawnGroup.add(dawnGuia);

    const lumu = makeSilhouetteFigure(T, {
      name: 'ending_C_lumu',
      theme: dawnTheme,
      color: '#f5be9f',
      shadeColor: '#8d88cc',
      topColor: '#fff6ea',
      height: 1.24
    });
    lumu.position.set(-1.35, 0.12, 1.15);

    const ajan = makeSilhouetteFigure(T, {
      name: 'ending_C_ajan',
      theme: dawnTheme,
      color: '#f8cf8c',
      shadeColor: '#9b7ec4',
      topColor: '#fff7e0',
      height: 1.22,
      lantern: true
    });
    ajan.position.set(-0.48, 0.12, 1.35);

    const sofiaDawn = makeSilhouetteFigure(T, {
      name: 'ending_C_sofia',
      theme: dawnTheme,
      color: '#76e0cc',
      shadeColor: '#568bb8',
      topColor: '#f8fffc',
      height: 1.26
    });
    sofiaDawn.position.set(0.48, 0.12, 1.35);

    const ryanDawn = makeSilhouetteFigure(T, {
      name: 'ending_C_ryan',
      theme: dawnTheme,
      color: '#88d6ff',
      shadeColor: '#5b72c8',
      topColor: '#f8fcff',
      height: 1.3,
      hat: 'visor'
    });
    ryanDawn.position.set(1.35, 0.12, 1.15);

    dawnGroup.add(lumu, ajan, sofiaDawn, ryanDawn);
    dawnGroup.visible = false;
    root.add(dawnGroup);

    const keyLight = new T.DirectionalLight(0xfff1d6, 1.45);
    keyLight.position.set(7, 13, 8);
    const fillLight = new T.AmbientLight(0x88a8cc, 0.9);
    root.add(keyLight, fillLight);

    this.particleCount = starCount + spiralCount;
    this._rig = {
      type: 'C',
      skyBackdrop,
      waterMat,
      horizon,
      heavenGroup,
      goldHeavenRing,
      silverHeavenRing,
      innerClockRing,
      celestialDome,
      sunMesh,
      moonMesh,
      sunTrail,
      moonTrail,
      starField,
      starMat,
      spiralGeo,
      spiralMat,
      spiralSeeds,
      spiralCount,
      whiteoutSphere,
      whiteoutMat,
      dawnGroup,
      twinLotus
    };
    this.root = root;
    this.scene.add(root);
  }

  _updateEndingA(t) {
    const rig = this._rig;
    const T = this.THREE;
    let phase = 'compass_convergence';
    if (t >= 22) phase = 'twilight_vigil';
    else if (t >= 10) phase = 'temporal_freeze';
    this.phase = phase;

    // Pastel Monument sunset -> sea lavender freeze -> quiet indigo vigil
    const e1835 = MONUMENT_ERA_THEMES['1835_ember'];
    const e1910 = MONUMENT_ERA_THEMES['1910_storm'];
    const eVigil = {
      skyTop: '#5b6fb0',
      skyMid: '#8ea2dc',
      skyBottom: '#d8c5dc',
      topColor: '#ffe7d4'
    };
    if (t < 15) {
      blendSkyBackdrop(T, rig.skyBackdrop, e1835, e1910, smoothstep(0, 15, t), 0);
    } else {
      blendSkyBackdrop(T, rig.skyBackdrop, e1910, eVigil, smoothstep(15, 36, t), 0);
    }

    const cDawn = new T.Color('#f2cac0');
    const cFreeze = new T.Color('#aec2e8');
    const cVigil = new T.Color('#6f82ba');
    const bg = t < 15 ? cDawn.lerp(cFreeze, smoothstep(0, 15, t)) : cFreeze.lerp(cVigil, smoothstep(15, 36, t));
    this.scene.background = bg;
    if (T.FogExp2) this.scene.fog = new T.FogExp2(bg.getHex(), 0.015 + 0.01 * smoothstep(8, 22, t));

    // Beads orbit inward then freeze over altar
    const sealProgress = smoothstep(2, 18, t);
    const freezeSlow = 1 - 0.88 * smoothstep(14, 24, t);
    const beadAngleBase = t * 1.15 * freezeSlow;
    this.ringSpeed = 1.15 * freezeSlow + 0.12;
    rig.beads.forEach((b, idx) => {
      const a = beadAngleBase + (idx / rig.beads.length) * Math.PI * 2;
      const rad = lerp(3.8, 1.85, sealProgress);
      const y = lerp(0.25, 1.35, sealProgress) + Math.sin(t * 1.8 + idx) * 0.12 * (1 - sealProgress * 0.65);
      b.position.set(Math.cos(a) * rad, y, Math.sin(a) * rad);
    });

    rig.compassOuter.rotation.z = t * 0.45 * freezeSlow;
    rig.compassInner.rotation.z = -t * 0.72 * freezeSlow;
    rig.compassInner.rotation.y = t * 0.32 * freezeSlow;
    rig.homeGroup.scale.setScalar(lerp(0.65, 1.05, smoothstep(10, 26, t)));

    // Floating mist motes
    const posAttr = rig.particleGeo.getAttribute('position');
    for (let i = 0; i < rig.count; i++) {
      const a0 = rig.seeds[i * 3 + 0];
      const r0 = rig.seeds[i * 3 + 1];
      const y0 = rig.seeds[i * 3 + 2];
      const angle = a0 + t * 0.25 * freezeSlow;
      posAttr.setXYZ(i, Math.cos(angle) * r0, y0 + Math.sin(t * 0.7 + i) * 0.18, Math.sin(angle) * r0);
    }
    posAttr.needsUpdate = true;

    // Wide serene camera pull-out
    const pull = smoothstep(0, 36, t);
    const camAngle = lerp(0.4, 0.92, pull);
    const camDist = lerp(6.8, 12.8, pull);
    this._applyCameraFrame(
      [Math.sin(camAngle) * camDist, lerp(3.4, 6.2, pull), Math.cos(camAngle) * camDist],
      [0, lerp(1.0, 0.6, pull), 0],
      lerp(1.08, 0.88, pull)
    );

    if (t >= 10) this._emitAudio('ending_a_seal_lock');
    if (t >= 27.5) this._emitAudio('ending_a_watch_chime');
  }

  _updateEndingB(t) {
    const rig = this._rig;
    const T = this.THREE;
    let phase = 'triad_ignition';
    if (t >= 28) phase = 'eternal_vigil';
    else if (t >= 12) phase = 'tripartite_merge';
    this.phase = phase;

    const eFin = MONUMENT_ERA_THEMES['finale_convergence'];
    const eAurora = {
      skyTop: '#8e88d6',
      skyMid: '#e6cdf0',
      skyBottom: '#fde5d8',
      topColor: '#fff6de'
    };
    blendSkyBackdrop(T, rig.skyBackdrop, eFin, eAurora, smoothstep(6, 30, t), 0);

    const cNight = new T.Color('#8e8dd6');
    const cPurpleGold = new T.Color('#c8bce8');
    this.scene.background = cNight.clone().lerp(cPurpleGold, smoothstep(6, 26, t));
    if (T.FogExp2) this.scene.fog = new T.FogExp2(0x9a96d8, 0.012);

    const mergeT = smoothstep(4, 24, t);
    const orbitRad = lerp(2.25, 0.78, mergeT);
    const spinAngle = t * 0.85;
    const actors = [rig.afonso, rig.sofia, rig.ryan];
    actors.forEach((actor, idx) => {
      const a = spinAngle + (idx * Math.PI * 2) / 3;
      actor.position.set(Math.cos(a) * orbitRad, 0.12 + mergeT * 0.68, Math.sin(a) * orbitRad);
      actor.rotation.y = -a;
    });

    rig.twinLotus.setBloom(smoothstep(6, 30, t));
    const speed = lerp(1.1, 2.8, smoothstep(0, 26, t)) * (1 - 0.55 * smoothstep(30, 42, t));
    this.ringSpeed = speed;
    rig.rings.forEach((ring, idx) => {
      ring.rotation.x = Math.PI / 2 + Math.sin(t * 0.9 + idx) * (0.35 - mergeT * 0.2);
      ring.rotation.y = t * (idx % 2 === 0 ? 0.9 : -1.1);
      ring.position.y = lerp(0.55 + idx * 0.45, 1.35 + idx * 0.85, mergeT);
    });

    const doorOpen = smoothstep(18, 28, t);
    for (const d of rig.barrierDoors) {
      d.door.position.set(Math.cos(d.angle) * lerp(6.5, 9.8, doorOpen), 1.1, Math.sin(d.angle) * lerp(6.5, 9.8, doorOpen));
      d.door.rotation.y = -d.angle + Math.PI / 2 + doorOpen * 0.85;
    }

    const posAttr = rig.pGeo.getAttribute('position');
    for (let i = 0; i < rig.count; i++) {
      const a = rig.seeds[i * 3 + 0] + t * 1.4;
      const r = rig.seeds[i * 3 + 1] * lerp(1.2, 0.75, mergeT);
      const y = (rig.seeds[i * 3 + 2] + t * 0.55) % 5.2;
      posAttr.setXYZ(i, Math.cos(a) * r, y, Math.sin(a) * r);
    }
    posAttr.needsUpdate = true;

    const camAngle = t * 0.09 + 0.55;
    const camDist = lerp(8.2, 11.4, smoothstep(0, 40, t));
    this._applyCameraFrame(
      [Math.sin(camAngle) * camDist, lerp(3.6, 5.4, smoothstep(0, 40, t)), Math.cos(camAngle) * camDist],
      [0, lerp(1.1, 1.65, mergeT), 0],
      1.0
    );

    if (t >= 12) this._emitAudio('ending_b_triad_resonance');
    if (t >= 20.5) this._emitAudio('ending_b_gates_open');
  }

  _updateEndingC(t) {
    const rig = this._rig;
    const T = this.THREE;
    const { omega, angle } = evalMadeInHeavenKinematics(t);
    this.ringSpeed = omega;

    let phase = 'heaven_ignition';
    if (t >= 48) phase = 'new_world_dawn_554';
    else if (t >= 34) phase = 'singularity_whiteout';
    else if (t >= 14) phase = 'made_in_heaven_acceleration';
    this.phase = phase;

    // Singularity whiteout curve (peaking crisp pure white around t = 40..44s)
    const whiteRise = smoothstep(34.5, 40.5, t);
    const whiteFade = 1 - smoothstep(43.5, 49.5, t);
    const whiteout = clamp01(whiteRise * whiteFade);
    rig.whiteoutMat.opacity = whiteout * 0.96;
    rig.whiteoutSphere.visible = whiteout > 0.005;

    // Monument Valley Sky Gradient Trajectory: dusk -> cosmic indigo star-streak -> singularity pearl -> 5:54 mint-celadon-peach Dawn
    const eStart = MONUMENT_ERA_THEMES['1910_storm'];
    const eCosmos = MONUMENT_ERA_THEMES['2077_cyber'];
    const eWhite = {
      skyTop: '#fffef8',
      skyMid: '#fffef8',
      skyBottom: '#fffdf5',
      topColor: '#ffffff'
    };
    const eDawn554 = MONUMENT_ERA_THEMES['2026_dusk'];

    if (t < 16) {
      const m = smoothstep(2, 16, t);
      blendSkyBackdrop(T, rig.skyBackdrop, eStart, eCosmos, m, m > 0.45 ? 1 : 0);
    } else if (t < 35) {
      updateSkyBackdrop(T, rig.skyBackdrop, eCosmos.skyTop, eCosmos.skyMid, eCosmos.skyBottom, eCosmos.topColor, 1);
    } else if (t < 43) {
      const m = smoothstep(35, 41, t);
      blendSkyBackdrop(T, rig.skyBackdrop, eCosmos, eWhite, m, m < 0.5 ? 1 : 0);
    } else {
      blendSkyBackdrop(T, rig.skyBackdrop, eWhite, eDawn554, smoothstep(43, 52, t), 0);
    }

    const cStart = new T.Color('#8094d8');
    const cCosmos = new T.Color('#2c3a76');
    const cWhite = new T.Color('#fdfcf5');
    const cDawn = new T.Color('#e7fbf5');
    const sky = cStart.clone();
    if (t < 16) {
      sky.lerp(cCosmos, smoothstep(2, 16, t));
    } else if (t < 35) {
      sky.copy(cCosmos);
    } else if (t < 43) {
      sky.copy(cCosmos).lerp(cWhite, smoothstep(35, 41, t));
    } else {
      sky.copy(cWhite).lerp(cDawn, smoothstep(43, 52, t));
    }
    this.scene.background = sky;
    if (T.FogExp2) {
      this.scene.fog = new T.FogExp2(sky.getHex(), t >= 48 ? 0.008 : 0.015);
    }

    // Heaven Rings rotation (analytical integral so seekTo(26) hits exact high-speed frame)
    const dawnCalm = 1 - smoothstep(44, 52, t);
    rig.heavenGroup.visible = t < 51;
    rig.goldHeavenRing.rotation.set(0.55 + angle * 0.14, angle * 0.22, angle * 0.18);
    rig.silverHeavenRing.rotation.set(-0.62 + angle * 0.16, -angle * 0.28, angle * 0.12);
    rig.innerClockRing.rotation.set(Math.PI / 2, 0, -angle * 0.45);
    rig.goldHeavenRing.scale.setScalar(lerp(0.6, 1.15, smoothstep(0, 14, t)));
    rig.silverHeavenRing.scale.setScalar(lerp(0.55, 1.15, smoothstep(2, 15, t)));

    // Orbiting Sun & Moon + trailing light arcs
    rig.celestialDome.visible = t < 48;
    const sunOrbitRadius = 9.5;
    const stretch = clamp01((omega - 0.8) / 26);
    const trailLag = 0.06 + stretch * 0.18;
    const setBodyPos = (mesh, theta) => {
      mesh.position.set(
        Math.cos(theta) * sunOrbitRadius,
        Math.sin(theta) * sunOrbitRadius * 0.85 + 2.2,
        Math.sin(theta * 0.5) * 4.2
      );
    };
    setBodyPos(rig.sunMesh, angle * 0.42);
    setBodyPos(rig.moonMesh, angle * 0.42 + Math.PI);
    rig.sunTrail.forEach((seg, idx) => {
      setBodyPos(seg.mesh, angle * 0.42 - (idx + 1) * trailLag);
      seg.mat.opacity = (1 - idx / rig.sunTrail.length) * (0.25 + stretch * 0.65) * dawnCalm;
    });
    rig.moonTrail.forEach((seg, idx) => {
      setBodyPos(seg.mesh, angle * 0.42 + Math.PI - (idx + 1) * trailLag);
      seg.mat.opacity = (1 - idx / rig.moonTrail.length) * (0.25 + stretch * 0.65) * dawnCalm;
    });

    // Panoramic Starfield spin + Spiral Vortex
    rig.starField.rotation.y = angle * 0.085;
    rig.starField.rotation.z = Math.sin(angle * 0.03) * 0.22 * dawnCalm;
    rig.starMat.opacity = clamp01(smoothstep(3, 14, t) * (1 - smoothstep(38, 48, t))) * 0.70;

    rig.spiralMat.opacity = clamp01(smoothstep(4, 16, t) * (1 - smoothstep(37, 47, t))) * 0.72;
    const spAttr = rig.spiralGeo.getAttribute('position');
    for (let i = 0; i < rig.spiralCount; i++) {
      const a = rig.spiralSeeds[i * 3 + 0] + angle * 0.18;
      const r = rig.spiralSeeds[i * 3 + 1] * lerp(1.0, 0.72, stretch);
      const y = ((rig.spiralSeeds[i * 3 + 2] + angle * 0.08) % 6.2);
      spAttr.setXYZ(i, Math.cos(a) * r, y, Math.sin(a) * r);
    }
    spAttr.needsUpdate = true;

    // Era-morphing horizon buildings: rapidly alternate 1622 -> 2026 -> 2077 during Made in Heaven
    const morphPhase = t < 38 ? angle * 0.18 : 0;
    const isDawn = t >= 46;
    for (let i = 0; i < rig.horizon.items.length; i++) {
      const item = rig.horizon.items[i];
      if (isDawn) {
        item.mesh1622.visible = false;
        item.mesh2077.visible = false;
        item.mesh2026.visible = true;
        item.mesh2026.scale.y = 0.92;
      } else {
        const eraIdx = Math.floor((morphPhase + i * 0.22) % 3);
        item.mesh1622.visible = eraIdx === 0;
        item.mesh2026.visible = eraIdx === 1;
        item.mesh2077.visible = eraIdx === 2;
      }
    }

    // Phase 4: 5:54 Dawn of the New World with Twin Lotus + Pui Ching + St. Paul's + Guia + 4 reunion silhouettes
    const dawnReveal = smoothstep(45.5, 52.5, t);
    rig.dawnGroup.visible = dawnReveal > 0.01;
    if (rig.dawnGroup.visible) {
      rig.twinLotus.setBloom(smoothstep(47, 58, t));
      rig.twinLotus.group.rotation.y = (t - 48) * 0.14;
      const wu = rig.waterMat.uniforms;
      if (wu) {
        wu.uTopColor.value.copy(hexToSrgbVec3(T, '#b2ecea'));
        wu.uLitLeftColor.value.copy(hexToSrgbVec3(T, '#89d7df'));
        wu.uShadeRightColor.value.copy(hexToSrgbVec3(T, '#6e9ee0'));
      }
    } else {
      const wu = rig.waterMat.uniforms;
      if (wu) {
        wu.uTopColor.value.copy(hexToSrgbVec3(T, '#699cd4'));
        wu.uLitLeftColor.value.copy(hexToSrgbVec3(T, '#5482c4'));
        wu.uShadeRightColor.value.copy(hexToSrgbVec3(T, '#364d94'));
      }
    }

    // Camera motion: orbiting crescendo in Phase 2, settling onto front-angle Pui Ching 5:54 reunion in Phase 4
    if (t < 44) {
      const orbitA = 0.45 + angle * 0.025;
      const dist = lerp(9.0, 12.2, smoothstep(8, 32, t));
      const height = lerp(3.8, 5.2, smoothstep(10, 34, t));
      this._applyCameraFrame(
        [Math.sin(orbitA) * dist, height, Math.cos(orbitA) * dist],
        [0, 1.95, 0],
        lerp(1.0, 0.92, stretch)
      );
    } else {
      const settle = smoothstep(44, 54, t);
      this._applyCameraFrame(
        [lerp(4.2, 0.35, settle), lerp(4.8, 2.75, settle), lerp(7.8, 7.2, settle)],
        [0, lerp(1.8, 1.15, settle), 0],
        lerp(0.95, 1.08, settle)
      );
    }

    if (t >= 8.5) this._emitAudio('ending_c_heaven_ignite');
    if (t >= 16) this._emitAudio('ending_c_made_in_heaven');
    if (t >= 34.5) this._emitAudio('ending_c_singularity_whiteout');
    if (t >= 48) this._emitAudio('ending_c_dawn_554');
  }

  _applyTime(t) {
    const duration = this.duration || 1;
    const clamped = Math.max(0, Math.min(duration, t));
    this.elapsed = clamped;

    if (this.endingKey === 'A') this._updateEndingA(clamped);
    else if (this.endingKey === 'B') this._updateEndingB(clamped);
    else if (this.endingKey === 'C') this._updateEndingC(clamped);

    this._updateSubtitles(clamped);
  }

  start(endingKey = 'A') {
    const key = String(endingKey || 'A').trim().toUpperCase();
    const validKey = key === 'B' || key === 'C' ? key : 'A';

    this._cleanupRigOnly();
    this._saveEnvironmentState();

    this.endingKey = validKey;
    this.duration = ENDING_DURATIONS[validKey];
    this.elapsed = 0;
    this.active = true;
    this.finished = false;
    this._lastSubtitleId = null;
    this._firedAudioIds.clear();

    if (validKey === 'A') this._buildEndingA();
    else if (validKey === 'B') this._buildEndingB();
    else this._buildEndingC();

    this._emitAudio(`ending_${validKey.toLowerCase()}_start`, { endingKey: validKey });
    this._applyTime(0);
    return this.getState();
  }

  update(dt = 0.016) {
    if (!this.active || this.finished) {
      return this.getState();
    }
    const step = Math.max(0, Number(dt) || 0);
    const nextT = Math.min(this.duration, this.elapsed + step);
    this._applyTime(nextT);

    if (nextT >= this.duration) {
      this.active = false;
      this.finished = true;
      this.onFinish?.({
        endingKey: this.endingKey,
        duration: this.duration,
        skipped: false,
        state: this.getState()
      });
    }
    return this.getState();
  }

  seekTo(seconds = 0) {
    if (!this.endingKey || !this._rig) {
      this.start('C');
    }
    const clamped = Math.max(0, Math.min(this.duration, Number(seconds) || 0));
    this.active = clamped < this.duration;
    this.finished = clamped >= this.duration;
    this._applyTime(clamped);
    if (this.finished) {
      this.onFinish?.({
        endingKey: this.endingKey,
        duration: this.duration,
        skipped: false,
        state: this.getState()
      });
    }
    return this.getState();
  }

  seekToEnd() {
    if (!this.endingKey || !this._rig) {
      this.start('A');
    }
    this.active = false;
    this.finished = true;
    this._applyTime(this.duration);
    this.onFinish?.({
      endingKey: this.endingKey,
      duration: this.duration,
      skipped: false,
      state: this.getState()
    });
    return this.getState();
  }

  skip() {
    if (!this.endingKey || !this._rig) {
      this.start('A');
    }
    this.active = false;
    this.finished = true;
    this._applyTime(this.duration);
    this.onFinish?.({
      endingKey: this.endingKey,
      duration: this.duration,
      skipped: true,
      state: this.getState()
    });
    return this.getState();
  }

  getState() {
    const duration = this.duration || 0;
    const progress = duration > 0 ? clamp01(this.elapsed / duration) : 0;
    return {
      active: this.active,
      endingKey: this.endingKey,
      elapsed: this.elapsed,
      duration,
      phase: this.phase,
      progress,
      activeSubtitle: this.activeSubtitle,
      particleCount: this.particleCount,
      ringSpeed: this.ringSpeed
    };
  }

  dispose() {
    this.active = false;
    this._cleanupRigOnly();
    this._restoreEnvironmentState();
    this.endingKey = null;
    this.elapsed = 0;
    this.duration = 0;
    this.phase = 'idle';
    this.activeSubtitle = null;
    this.ringSpeed = 0;
  }
}

export default EndingCinematicsDirector;
