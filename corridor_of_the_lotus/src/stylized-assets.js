// Monument Valley 2 Pastel Mineral Macau Stylized Assets, Architecture, Figurines & Effect Engine
// 100% Procedural Three.js Geometry + Pre-rendered Portrait Atlas Delegation (Zero external URLs or CDN dependencies)

import * as portraitAtlas from './portrait-atlas.js';
import { getIsoRayDirection, normalizeQuarterTurns, rotatePointAroundPivotY } from './contracts.js';
import {
  MONUMENT_ERA_THEMES,
  resolveMonumentTheme,
  hexToSrgbVec3,
  createMonumentMaterial,
  createMonumentSkyBackdrop,
  buildDistantMonumentSilhouettes,
  normalizeBgMode,
  getMonumentBgMode,
  setMonumentBgMode,
  applyMonumentBgModeToRoot
} from './monument-shader.js';
import { buildStPaulsMonument, buildMacauCoverDiorama } from './stpauls-and-cover.js';

export const PALETTE = Object.freeze({
  bluestone: '#8ea2e6',
  bluestoneDark: '#7588d4',
  lingnanBrick: '#9bb3e6',
  crimsonArch: '#e46374',
  mintArcade: '#8be0c8',
  ochreStucco: '#f6d19f',
  warmGold: '#f6cf7d',
  lotusPink: '#f6b4c6',
  jadeGreen: '#6fe0cc',
  jadeSea: '#6fe0cc',
  cinnabar: '#e86874',
  cyberTeal: '#62e8ec',
  mistBg: '#f6dfe7',
  inkShadow: '#2b335c',
  parchment: '#fff3df',
  parchmentDark: '#f1d4b8',
  granite: '#f5ccb8',
  roofTile: '#2c8fae',
  timber: '#d6977c',
  navyUniform: '#2f57bf',
  burgundyCloak: '#cf3b4c',
  ashCoat: '#2e4294',
  creamPlaster: '#fff8eb'
});

const ERA_THEMES = {
  '1622_dawn': {
    bg: 0xfad7c7,
    fog: 0xfde2d6,
    hemiSky: 0xfff8ee,
    hemiGround: 0x9aa9eb,
    hemiIntensity: 1.18,
    sunColor: 0xffecd2,
    sunIntensity: 0.78,
    fillColor: 0xf6b4c6,
    fillIntensity: 0.45,
    particleColor: 0xffe49c,
    particleKind: 'dust',
    particleCount: 95
  },
  '1808_fog': {
    bg: 0xe2eafb,
    fog: 0xedf1fe,
    hemiSky: 0xffffff,
    hemiGround: 0x92a8e6,
    hemiIntensity: 1.16,
    sunColor: 0xfff4e0,
    sunIntensity: 0.72,
    fillColor: 0x9de6db,
    fillIntensity: 0.46,
    particleColor: 0xf8fbff,
    particleKind: 'mist',
    particleCount: 120
  },
  '1835_ember': {
    bg: 0xf9cbc8,
    fog: 0xfddbd4,
    hemiSky: 0xfff3e6,
    hemiGround: 0x918be0,
    hemiIntensity: 1.14,
    sunColor: 0xffd5b5,
    sunIntensity: 0.80,
    fillColor: 0xc2b0f2,
    fillIntensity: 0.44,
    particleColor: 0xffb38a,
    particleKind: 'ember',
    particleCount: 110
  },
  '1849_tide': {
    bg: 0xdeeafa,
    fog: 0xe8f2fd,
    hemiSky: 0xfffdf7,
    hemiGround: 0x8ea7e6,
    hemiIntensity: 1.18,
    sunColor: 0xfff0d4,
    sunIntensity: 0.76,
    fillColor: 0x8ce3d5,
    fillIntensity: 0.45,
    particleColor: 0xe8fbf5,
    particleKind: 'mist',
    particleCount: 90
  },
  '1910_storm': {
    bg: 0xd6e1f7,
    fog: 0xe1eafb,
    hemiSky: 0xf4f8ff,
    hemiGround: 0x8096dc,
    hemiIntensity: 1.12,
    sunColor: 0xedf4ff,
    sunIntensity: 0.70,
    fillColor: 0x99d9dc,
    fillIntensity: 0.48,
    particleColor: 0xddeeff,
    particleKind: 'rain',
    particleCount: 130
  },
  '2026_dusk': {
    bg: 0xf5d6e4,
    fog: 0xf9e4ee,
    hemiSky: 0xfff9f0,
    hemiGround: 0x8da4e8,
    hemiIntensity: 1.18,
    sunColor: 0xffe8cb,
    sunIntensity: 0.78,
    fillColor: 0xaad4f5,
    fillIntensity: 0.44,
    particleColor: 0xf6b4c6,
    particleKind: 'petal',
    particleCount: 95
  },
  '2077_cyber': {
    bg: 0x374787,
    fog: 0x4b5da3,
    hemiSky: 0x8ee8ec,
    hemiGround: 0x3e4b8c,
    hemiIntensity: 1.14,
    sunColor: 0xc9f4ff,
    sunIntensity: 0.74,
    fillColor: 0xf6cf7d,
    fillIntensity: 0.42,
    particleColor: 0x7ff2ea,
    particleKind: 'cyber',
    particleCount: 110
  },
  'finale_convergence': {
    bg: 0xf5e4ec,
    fog: 0xfbeee6,
    hemiSky: 0xfffcf4,
    hemiGround: 0x8fa1ea,
    hemiIntensity: 1.22,
    sunColor: 0xfff0cc,
    sunIntensity: 0.80,
    fillColor: 0xa9e4e2,
    fillIntensity: 0.46,
    particleColor: 0xf6cf7d,
    particleKind: 'petal',
    particleCount: 125
  }
};

export const NIGHT_ERA_THEMES = {
  '1622_dawn': {
    bg: 0x101733,
    fog: 0x1a2347,
    hemiSky: 0x5c7bc9,
    hemiGround: 0x1b234d,
    hemiIntensity: 0.92,
    sunColor: 0xaac4ff,
    sunIntensity: 0.68,
    fillColor: 0x6286d6,
    fillIntensity: 0.42,
    particleColor: 0xffe49c
  },
  '1808_fog': {
    bg: 0x111a36,
    fog: 0x1c294f,
    hemiSky: 0x668ad4,
    hemiGround: 0x182147,
    hemiIntensity: 0.92,
    sunColor: 0xc2d8ff,
    sunIntensity: 0.66,
    fillColor: 0x56c7be,
    fillIntensity: 0.42,
    particleColor: 0xd9ecff
  },
  '1835_ember': {
    bg: 0x171430,
    fog: 0x251f47,
    hemiSky: 0x7066bd,
    hemiGround: 0x1e1942,
    hemiIntensity: 0.90,
    sunColor: 0xbcb0ff,
    sunIntensity: 0.70,
    fillColor: 0xd9809c,
    fillIntensity: 0.44,
    particleColor: 0xffb38a
  },
  '1849_tide': {
    bg: 0x0e1936,
    fog: 0x17274e,
    hemiSky: 0x5684d1,
    hemiGround: 0x142147,
    hemiIntensity: 0.94,
    sunColor: 0xb5d6ff,
    sunIntensity: 0.68,
    fillColor: 0x52c4bd,
    fillIntensity: 0.42,
    particleColor: 0x9ef5ec
  },
  '1910_storm': {
    bg: 0x0f162e,
    fog: 0x192344,
    hemiSky: 0x5878c4,
    hemiGround: 0x141b3c,
    hemiIntensity: 0.88,
    sunColor: 0x9bb8f5,
    sunIntensity: 0.64,
    fillColor: 0x58aeb8,
    fillIntensity: 0.44,
    particleColor: 0xbcd8ff
  },
  '2026_dusk': {
    bg: 0x0e142d,
    fog: 0x182144,
    hemiSky: 0x5c7dd1,
    hemiGround: 0x161f47,
    hemiIntensity: 0.92,
    sunColor: 0xadc8ff,
    sunIntensity: 0.68,
    fillColor: 0x7e8ee6,
    fillIntensity: 0.42,
    particleColor: 0xf6cf7d
  },
  '2077_cyber': {
    bg: 0x090f24,
    fog: 0x111a3b,
    hemiSky: 0x56c7d4,
    hemiGround: 0x10183c,
    hemiIntensity: 0.96,
    sunColor: 0x96f0ff,
    sunIntensity: 0.72,
    fillColor: 0xf6cf7d,
    fillIntensity: 0.46,
    particleColor: 0x7ff2ea
  },
  'finale_convergence': {
    bg: 0x0e132c,
    fog: 0x192045,
    hemiSky: 0x6c86db,
    hemiGround: 0x171d45,
    hemiIntensity: 0.96,
    sunColor: 0xc2d4ff,
    sunIntensity: 0.72,
    fillColor: 0x6ed4cc,
    fillIntensity: 0.44,
    particleColor: 0xffe49c
  }
};

function resolveTHREE(arg) {
  return arg && arg.THREE ? arg.THREE : arg;
}

function disposeObjectTree(root, extraTextures = []) {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set(extraTextures.filter(Boolean));
  if (root && typeof root.traverse === 'function') {
    root.traverse((obj) => {
      if (obj.geometry) geometries.add(obj.geometry);
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const m of mats) {
          if (!m) continue;
          materials.add(m);
          if (m.map) textures.add(m.map);
        }
      }
    });
  }
  for (const g of geometries) g.dispose?.();
  for (const m of materials) m.dispose?.();
  for (const t of textures) t.dispose?.();
}

function makeParticleSpriteTexture(THREE, kind) {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.clearRect(0, 0, 64, 64);
  if (kind === 'petal') {
    ctx.save();
    ctx.translate(32, 32);
    ctx.rotate(-0.4);
    const g = ctx.createRadialGradient(0, -4, 2, 0, 0, 22);
    g.addColorStop(0, 'rgba(255, 240, 242, 0.95)');
    g.addColorStop(0.55, 'rgba(227, 169, 173, 0.85)');
    g.addColorStop(1, 'rgba(227, 169, 173, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(0, 0, 11, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  } else if (kind === 'rain') {
    const g = ctx.createLinearGradient(32, 6, 32, 58);
    g.addColorStop(0, 'rgba(220, 238, 248, 0)');
    g.addColorStop(0.5, 'rgba(220, 238, 248, 0.85)');
    g.addColorStop(1, 'rgba(220, 238, 248, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(29, 8, 6, 48);
  } else if (kind === 'cyber') {
    ctx.save();
    ctx.translate(32, 32);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = 'rgba(130, 235, 246, 0.85)';
    ctx.fillRect(-10, -10, 20, 20);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 2;
    ctx.strokeRect(-10, -10, 20, 20);
    ctx.restore();
  } else {
    const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 28);
    g.addColorStop(0, 'rgba(255, 250, 235, 0.95)');
    g.addColorStop(0.45, 'rgba(255, 236, 196, 0.55)');
    g.addColorStop(1, 'rgba(255, 236, 196, 0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(32, 32, 28, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

export function createSceneEnvironment(THREEArg, scene, themeKey = '2026_dusk', options = {}) {
  const T = resolveTHREE(THREEArg);
  const dayTheme = ERA_THEMES[themeKey] || ERA_THEMES['2026_dusk'];
  const nightTheme = NIGHT_ERA_THEMES[themeKey] || NIGHT_ERA_THEMES['2026_dusk'];
  let activeBgMode = setMonumentBgMode(options.bgMode ?? getMonumentBgMode());
  const theme = activeBgMode === 'night' ? { ...dayTheme, ...nightTheme } : dayTheme;
  const monumentTheme = resolveMonumentTheme(themeKey, activeBgMode);
  const addedNodes = [];
  const textures = [];

  if (scene) {
    scene.background = new T.Color(theme.bg);
    // Start fog far beyond stage & distant silhouette depth so illusion seams & silhouettes stay vivid
    scene.fog = new T.Fog(theme.fog, 145, 260);
  }

  const hemi = new T.HemisphereLight(theme.hemiSky, theme.hemiGround, theme.hemiIntensity);
  hemi.position.set(0, 24, 0);

  const sun = new T.DirectionalLight(theme.sunColor, theme.sunIntensity);
  sun.position.set(16, 28, 14);
  sun.castShadow = true;
  sun.shadow.mapSize.width = 1024;
  sun.shadow.mapSize.height = 1024;
  sun.shadow.camera.left = -18;
  sun.shadow.camera.right = 18;
  sun.shadow.camera.top = 18;
  sun.shadow.camera.bottom = -18;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 75;
  sun.shadow.bias = -0.0005;
  if ('normalBias' in sun.shadow) sun.shadow.normalBias = 0.02;

  const fill = new T.DirectionalLight(theme.fillColor, theme.fillIntensity);
  fill.position.set(-14, 12, -16);
  fill.castShadow = false;

  const skyBackdrop = createMonumentSkyBackdrop(T, monumentTheme);
  skyBackdrop.userData = { ...skyBackdrop.userData, ignoreOcclusion: true };
  skyBackdrop.raycast = () => {};

  const distantSilhouettes = buildDistantMonumentSilhouettes(T, monumentTheme, {
    variant: 'stage',
    anchor: options.anchor || [0, 0, 0]
  });
  distantSilhouettes.traverse?.((obj) => {
    if (obj.isMesh) {
      obj.userData = { ...obj.userData, ignoreOcclusion: true };
      obj.raycast = () => {};
    }
  });

  const count = theme.particleCount;
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const speeds = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    // Deterministic seeded-like spread without relying on external RNG
    const s1 = Math.sin(i * 12.9898 + 1.23) * 43758.5453;
    const s2 = Math.sin(i * 78.233 + 4.56) * 43758.5453;
    const s3 = Math.sin(i * 39.425 + 7.89) * 43758.5453;
    const r1 = s1 - Math.floor(s1);
    const r2 = s2 - Math.floor(s2);
    const r3 = s3 - Math.floor(s3);
    positions[i * 3] = (r1 - 0.5) * 30;
    positions[i * 3 + 1] = r2 * 15 - 2;
    positions[i * 3 + 2] = (r3 - 0.5) * 30;
    phases[i] = r1 * Math.PI * 2;
    speeds[i] = 0.35 + r2 * 0.55;
  }

  const pGeo = new T.BufferGeometry();
  pGeo.setAttribute('position', new T.BufferAttribute(positions, 3));
  const spriteTex = makeParticleSpriteTexture(T, theme.particleKind);
  if (spriteTex) textures.push(spriteTex);

  const pMat = new T.PointsMaterial({
    color: theme.particleColor,
    size: theme.particleKind === 'rain' ? 0.28 : theme.particleKind === 'petal' ? 0.36 : 0.26,
    transparent: true,
    opacity: theme.particleKind === 'mist' ? 0.36 : 0.65,
    depthWrite: false,
    sizeAttenuation: false,
    map: spriteTex || null
  });
  // When sizeAttenuation is false in orthographic camera, scale size in pixels cleanly
  pMat.size = theme.particleKind === 'petal' ? 11 : theme.particleKind === 'rain' ? 9 : 8;

  const particles = new T.Points(pGeo, pMat);
  particles.userData = { ignoreOcclusion: true };
  particles.raycast = () => {};

  if (scene) {
    scene.add(skyBackdrop, distantSilhouettes, hemi, sun, fill, particles);
    addedNodes.push(skyBackdrop, distantSilhouettes, hemi, sun, fill, particles);
  }

  function applyEnvBgMode(nextMode) {
    activeBgMode = setMonumentBgMode(normalizeBgMode(nextMode));
    const env = activeBgMode === 'night' ? { ...dayTheme, ...nightTheme } : dayTheme;
    if (scene) {
      if (scene.background?.setHex) {
        scene.background.setHex(env.bg);
      } else {
        scene.background = new T.Color(env.bg);
      }
      if (scene.fog?.color?.setHex) {
        scene.fog.color.setHex(env.fog);
      }
    }
    hemi.color?.setHex?.(env.hemiSky);
    hemi.groundColor?.setHex?.(env.hemiGround);
    hemi.intensity = env.hemiIntensity;
    sun.color?.setHex?.(env.sunColor);
    sun.intensity = env.sunIntensity;
    fill.color?.setHex?.(env.fillColor);
    fill.intensity = env.fillIntensity;
    pMat.color?.setHex?.(env.particleColor);
    if (scene) {
      applyMonumentBgModeToRoot(T, scene, activeBgMode, themeKey);
    } else {
      applyMonumentBgModeToRoot(T, skyBackdrop, activeBgMode, themeKey);
      applyMonumentBgModeToRoot(T, distantSilhouettes, activeBgMode, themeKey);
    }
    return activeBgMode;
  }

  applyEnvBgMode(activeBgMode);

  return {
    setBgMode: applyEnvBgMode,
    getBgMode() {
      return activeBgMode;
    },
    update(dt = 0.016, elapsed = 0) {
      const step = Math.min(Math.max(dt, 0), 0.1);
      const posAttr = pGeo.getAttribute('position');
      const arr = posAttr.array;
      const isRain = theme.particleKind === 'rain';
      const isEmber = theme.particleKind === 'ember' || theme.particleKind === 'cyber';
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        const ph = phases[i];
        const sp = speeds[i];
        if (isRain) {
          arr[idx] -= step * 1.4;
          arr[idx + 1] -= step * (4.2 * sp);
          if (arr[idx + 1] < -2.5) arr[idx + 1] = 13.5;
          if (arr[idx] < -15) arr[idx] = 15;
        } else if (isEmber) {
          arr[idx] += Math.sin(elapsed * 0.9 + ph) * step * 0.45;
          arr[idx + 1] += step * (0.65 * sp);
          arr[idx + 2] += Math.cos(elapsed * 0.7 + ph) * step * 0.35;
          if (arr[idx + 1] > 13.5) arr[idx + 1] = -2;
        } else {
          arr[idx] += (0.42 * sp + Math.sin(elapsed * 0.8 + ph) * 0.25) * step;
          arr[idx + 1] -= (0.28 * sp - Math.cos(elapsed * 1.1 + ph) * 0.12) * step;
          arr[idx + 2] += Math.sin(elapsed * 0.65 + ph) * 0.22 * step;
          if (arr[idx] > 15) arr[idx] = -15;
          if (arr[idx + 1] < -2.2) arr[idx + 1] = 13.2;
        }
      }
      posAttr.needsUpdate = true;
    },
    dispose() {
      for (const node of addedNodes) {
        scene?.remove?.(node);
        disposeObjectTree(node);
      }
      pGeo.dispose?.();
      pMat.dispose?.();
      for (const tex of textures) tex.dispose?.();
    }
  };
}

function makeMat(T, color, opts = {}) {
  return new T.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.78,
    metalness: opts.metalness ?? 0.08,
    flatShading: opts.flatShading !== false,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    transparent: Boolean(opts.transparent),
    opacity: opts.opacity ?? 1,
    depthWrite: opts.depthWrite !== undefined ? opts.depthWrite : !opts.transparent,
    side: opts.side ?? T.FrontSide
  });
}

function createContactShadow(T) {
  const geo = new T.CircleGeometry(0.27, 20);
  const mat = new T.MeshBasicMaterial({
    color: PALETTE.inkShadow,
    transparent: true,
    opacity: 0.28,
    depthWrite: false
  });
  const shadow = new T.Mesh(geo, mat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.set(1.0, 0.74, 1.0);
  shadow.position.set(0, 0.02, 0);
  shadow.userData = { ignoreOcclusion: true, isContactShadow: true };
  shadow.raycast = () => {};
  return shadow;
}

function createActiveDiamond(T) {
  const geo = new T.OctahedronGeometry(0.11, 0);
  const mat = makeMat(T, PALETTE.warmGold, {
    emissive: 0x9c7324,
    emissiveIntensity: 0.55,
    roughness: 0.35,
    metalness: 0.3
  });
  const mesh = new T.Mesh(geo, mat);
  mesh.scale.set(0.82, 1.35, 0.82);
  mesh.position.set(0, 1.65, 0);
  mesh.visible = false;
  mesh.userData = { ignoreOcclusion: true };
  mesh.raycast = () => {};
  return mesh;
}

function makeFigureMonMat(T, topHex, litHex, shadeHex, opts = {}) {
  return createMonumentMaterial(T, MONUMENT_ERA_THEMES['2026_dusk'], {
    topColor: topHex,
    litLeftColor: litHex,
    shadeRightColor: shadeHex,
    bottomColor: shadeHex,
    topTint: '#ffffff',
    bottomTint: '#eef2ff',
    heightRange: [-2, 4],
    preserveInNight: true,
    ...opts
  });
}

function makePorcelainHeadMat(T, isAstral = false) {
  if (isAstral) {
    return makeFigureMonMat(T, '#ffffff', '#c8fff9', '#8cece4', {
      emissiveBoost: '#18505a',
      transparent: true,
      opacity: 0.72,
      depthWrite: false
    });
  }
  return makeFigureMonMat(T, '#ffffff', '#ffffff', '#eef2ff', {
    emissiveBoost: '#141418'
  });
}

export function createCharacterFigurine(THREEArg, actorId = 'sofia') {
  const T = resolveTHREE(THREEArg);
  const group = new T.Group();
  group.name = `figurine_${actorId}`;

  const bodyGroup = new T.Group();
  group.add(bodyGroup);

  const contactShadow = createContactShadow(T);
  group.add(contactShadow);

  const activeDiamond = createActiveDiamond(T);
  group.add(activeDiamond);

  const isAstral = actorId === 'sofia_astral';
  const baseActor = isAstral ? 'sofia' : actorId;

  const astralMat = isAstral
    ? makeFigureMonMat(T, '#c8fff9', '#82f2e4', '#55b8d4', {
        emissiveBoost: '#1e5866',
        transparent: true,
        opacity: 0.64,
        depthWrite: false
      })
    : null;
  const astralTrimMat = isAstral
    ? makeFigureMonMat(T, '#ffffff', '#a6fbff', '#5fd2f0', {
        emissiveBoost: '#2c768e',
        transparent: true,
        opacity: 0.80,
        depthWrite: false
      })
    : null;
  let astralAccent = null;

  const porcelainHeadMat = makePorcelainHeadMat(T, isAstral);
  const darkHairMat = astralMat || makeFigureMonMat(T, '#333b66', '#252d54', '#1a2042');
  const goldHairMat = astralMat || makeFigureMonMat(T, '#fff2bc', '#f6cf7d', '#d8a64e');
  const legMat = astralMat || makeFigureMonMat(T, '#384068', '#293056', '#1e2444');

  // Articulated leg/arm pivots preserved for walking animation & scale
  const leftLeg = new T.Group();
  leftLeg.position.set(-0.062, 0.34, 0);
  const rightLeg = new T.Group();
  rightLeg.position.set(0.062, 0.34, 0);
  const leftArm = new T.Group();
  leftArm.position.set(-0.17, 0.78, 0);
  const rightArm = new T.Group();
  rightArm.position.set(0.17, 0.78, 0);

  bodyGroup.add(leftLeg, rightLeg, leftArm, rightArm);

  // Thin crisp Monument Valley legs reaching y = 0 cleanly
  const legGeo = new T.CylinderGeometry(0.028, 0.022, 0.34, 8);
  const footGeo = new T.SphereGeometry(0.030, 8, 6);
  for (const leg of [leftLeg, rightLeg]) {
    const legMesh = new T.Mesh(legGeo, legMat);
    legMesh.position.set(0, -0.17, 0);
    const footMesh = new T.Mesh(footGeo, legMat);
    footMesh.scale.set(0.9, 0.7, 1.45);
    footMesh.position.set(0, -0.325, 0.015);
    leg.add(legMesh, footMesh);
  }

  // Pure-white faceless porcelain sphere head (#ffffff, zero eyes/mouth)
  const headMesh = new T.Mesh(new T.SphereGeometry(0.142, 16, 12), porcelainHeadMat);
  headMesh.position.set(0, 1.07, 0);
  bodyGroup.add(headMesh);

  if (baseActor === 'sofia') {
    // 2026 Sofia Lou: Cobalt conical uniform cloak + crimson sash/collar + hexagram emblem + black bob silhouette
    const cobaltMat = astralMat || makeFigureMonMat(T, '#5382e8', '#3360c7', '#25449c');
    const crimsonMat = astralMat || makeFigureMonMat(T, '#ff8e9a', '#eb5365', '#bd3c5c');
    const collarMat = astralMat || makeFigureMonMat(T, '#ffffff', '#fff6e8', '#dce4fa');
    const goldMat = astralMat || makeFigureMonMat(T, '#fff4bf', '#f6cf7d', '#d9a44b');

    const cloakCone = new T.Mesh(new T.CylinderGeometry(0.095, 0.235, 0.64, 16), cobaltMat);
    cloakCone.position.set(0, 0.56, 0);
    const cloakHem = new T.Mesh(new T.CylinderGeometry(0.228, 0.244, 0.055, 16), crimsonMat);
    cloakHem.position.set(0, 0.26, 0);
    const shawl = new T.Mesh(new T.CylinderGeometry(0.105, 0.165, 0.16, 14), collarMat);
    shawl.position.set(0, 0.85, 0);
    const tie = new T.Mesh(new T.ConeGeometry(0.042, 0.20, 4), crimsonMat);
    tie.rotation.z = Math.PI;
    tie.position.set(0, 0.72, 0.135);
    const hexPin = new T.Mesh(new T.OctahedronGeometry(0.028, 0), goldMat);
    hexPin.position.set(0.078, 0.79, 0.115);
    bodyGroup.add(cloakCone, cloakHem, shawl, tie, hexPin);

    // Subtle tucked conical sleeves
    const sleeveGeo = new T.ConeGeometry(0.052, 0.26, 10);
    for (const arm of [leftArm, rightArm]) {
      const sl = new T.Mesh(sleeveGeo, cobaltMat);
      sl.position.set(0, -0.10, 0);
      arm.add(sl);
    }

    // Ancestral short-sword silhouette at left hip
    const swordGroup = new T.Group();
    swordGroup.position.set(-0.185, 0.52, -0.02);
    swordGroup.rotation.set(0.45, 0, -0.22);
    const scabbard = new T.Mesh(new T.CylinderGeometry(0.017, 0.012, 0.34, 6), darkHairMat);
    scabbard.position.set(0, -0.15, 0);
    const guard = new T.Mesh(new T.BoxGeometry(0.08, 0.018, 0.026), goldMat);
    const hilt = new T.Mesh(new T.CylinderGeometry(0.014, 0.014, 0.085, 6), goldMat);
    hilt.position.set(0, 0.05, 0);
    swordGroup.add(scabbard, guard, hilt);
    bodyGroup.add(swordGroup);

    // Sculpted back hair cap preserving clean pure-white front porcelain face silhouette
    const hairCrown = new T.Mesh(
      new T.SphereGeometry(0.149, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.54),
      darkHairMat
    );
    hairCrown.position.set(0, 1.078, -0.012);
    hairCrown.rotation.x = -0.28;
    const hairBackCape = new T.Mesh(new T.CylinderGeometry(0.125, 0.175, 0.42, 12, 1, false, Math.PI * 0.65, Math.PI * 0.7), darkHairMat);
    hairBackCape.position.set(0, 0.90, -0.02);
    const ribbonHair = new T.Mesh(new T.BoxGeometry(0.11, 0.032, 0.045), crimsonMat);
    ribbonHair.position.set(0, 1.03, -0.135);
    bodyGroup.add(hairCrown, hairBackCape, ribbonHair);

    if (isAstral) {
      astralAccent = new T.Group();
      const astralCrown = new T.Mesh(new T.OctahedronGeometry(0.068, 0), astralTrimMat);
      astralCrown.position.set(0, 1.35, 0);
      const backPrism = new T.Mesh(new T.TorusGeometry(0.18, 0.016, 6, 6), astralTrimMat);
      backPrism.position.set(0, 0.96, -0.15);
      const shardL = new T.Mesh(new T.TetrahedronGeometry(0.052, 0), astralTrimMat);
      shardL.position.set(-0.26, 0.98, 0);
      const shardR = new T.Mesh(new T.TetrahedronGeometry(0.052, 0), astralTrimMat);
      shardR.position.set(0.26, 0.98, 0);
      astralAccent.add(astralCrown, backPrism, shardL, shardR);
      bodyGroup.add(astralAccent);
    }
  } else if (baseActor === 'afonso') {
    // 1622 Afonso Ferreira: Carmine baroque conical cloak + gold trim + golden crown hair + silver rapier
    const carmineMat = makeFigureMonMat(T, '#f06775', '#d63e4f', '#9c2d4a');
    const goldMat = makeFigureMonMat(T, '#fff4bf', '#f6cf7d', '#d9a44b');
    const laceMat = makeFigureMonMat(T, '#ffffff', '#fff6e8', '#e2e6fb');
    const silverMat = makeFigureMonMat(T, '#ffffff', '#d8e3f5', '#8fa5d9');

    const cloakCone = new T.Mesh(new T.CylinderGeometry(0.10, 0.245, 0.67, 16), carmineMat);
    cloakCone.position.set(0, 0.565, 0);
    const goldHem = new T.Mesh(new T.CylinderGeometry(0.238, 0.252, 0.05, 16), goldMat);
    goldHem.position.set(0, 0.25, 0);
    const capelet = new T.Mesh(new T.CylinderGeometry(0.11, 0.20, 0.19, 14), carmineMat);
    capelet.position.set(0, 0.83, 0);
    const goldShoulder = new T.Mesh(new T.CylinderGeometry(0.118, 0.195, 0.04, 14), goldMat);
    goldShoulder.position.set(0, 0.74, 0);
    const jabot = new T.Mesh(new T.ConeGeometry(0.055, 0.16, 6), laceMat);
    jabot.rotation.x = 0.18;
    jabot.position.set(0, 0.84, 0.125);
    bodyGroup.add(cloakCone, goldHem, capelet, goldShoulder, jabot);

    const sleeveGeo = new T.ConeGeometry(0.054, 0.26, 10);
    for (const arm of [leftArm, rightArm]) {
      const sl = new T.Mesh(sleeveGeo, carmineMat);
      sl.position.set(0, -0.10, 0);
      const cuff = new T.Mesh(new T.CylinderGeometry(0.048, 0.055, 0.04, 8), goldMat);
      cuff.position.set(0, -0.21, 0);
      arm.add(sl, cuff);
    }

    const rapier = new T.Group();
    rapier.position.set(-0.20, 0.55, -0.02);
    rapier.rotation.set(0.55, 0, -0.18);
    const blade = new T.Mesh(new T.CylinderGeometry(0.01, 0.004, 0.52, 5), silverMat);
    blade.position.set(0, -0.24, 0);
    const guard = new T.Mesh(new T.TorusGeometry(0.042, 0.008, 6, 10), goldMat);
    guard.rotation.x = Math.PI / 2;
    const grip = new T.Mesh(new T.CylinderGeometry(0.014, 0.014, 0.085, 6), goldMat);
    grip.position.set(0, 0.045, 0);
    rapier.add(blade, guard, grip);
    bodyGroup.add(rapier);

    const hairCrown = new T.Mesh(
      new T.SphereGeometry(0.152, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.52),
      goldHairMat
    );
    hairCrown.position.set(0, 1.08, -0.014);
    hairCrown.rotation.x = -0.32;
    const wavyBack = new T.Mesh(new T.CylinderGeometry(0.13, 0.18, 0.30, 10, 1, false, Math.PI * 0.6, Math.PI * 0.8), goldHairMat);
    wavyBack.position.set(0, 0.94, -0.03);
    bodyGroup.add(hairCrown, wavyBack);
  } else {
    // 2077 Ryan (Zero-7): Indigo conical windbreaker + luminous cyan trace + blonde spike
    const indigoMat = makeFigureMonMat(T, '#5368c9', '#31449e', '#233075');
    const cyanMat = makeFigureMonMat(T, '#ccffff', '#74f5ff', '#48c8de', { emissiveBoost: '#287e94' });

    const coatCone = new T.Mesh(new T.CylinderGeometry(0.105, 0.24, 0.66, 16), indigoMat);
    coatCone.position.set(0, 0.56, 0);
    const highCollar = new T.Mesh(new T.CylinderGeometry(0.145, 0.145, 0.11, 12, 1, true, Math.PI * 0.45, Math.PI * 1.1), indigoMat);
    highCollar.material.side = T.DoubleSide;
    highCollar.position.set(0, 0.92, -0.01);
    const cyanRibbon = new T.Mesh(new T.BoxGeometry(0.03, 0.46, 0.26), cyanMat);
    cyanRibbon.position.set(-0.04, 0.62, 0.04);
    cyanRibbon.rotation.z = 0.22;
    bodyGroup.add(coatCone, highCollar, cyanRibbon);

    const slR = new T.Mesh(new T.ConeGeometry(0.052, 0.26, 10), indigoMat);
    slR.position.set(0, -0.10, 0);
    rightArm.add(slR);

    const slL = new T.Mesh(new T.ConeGeometry(0.052, 0.26, 10), cyanMat);
    slL.position.set(0, -0.10, 0);
    const emitter = new T.Mesh(new T.OctahedronGeometry(0.045, 0), cyanMat);
    emitter.position.set(0, -0.24, 0.02);
    leftArm.add(slL, emitter);

    const hairCrown = new T.Mesh(
      new T.SphereGeometry(0.15, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.52),
      darkHairMat
    );
    hairCrown.position.set(0, 1.08, -0.015);
    hairCrown.rotation.x = -0.32;
    const tuftBack = new T.Mesh(new T.ConeGeometry(0.10, 0.22, 6), darkHairMat);
    tuftBack.rotation.x = -0.68;
    tuftBack.position.set(0, 1.12, -0.13);
    const goldSpike = new T.Mesh(new T.ConeGeometry(0.046, 0.20, 5), goldHairMat);
    goldSpike.rotation.set(0.55, 0, -0.35);
    goldSpike.position.set(0.055, 1.21, 0.05);
    bodyGroup.add(hairCrown, tuftBack, goldSpike);
  }

  bodyGroup.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = !isAstral;
      child.receiveShadow = false;
      child.userData = { ...child.userData, ignoreOcclusion: true };
      child.raycast = () => {};
    }
  });

  // Track initial material opacities so setOpacity(alpha) scales cleanly
  const materialBaseOpacity = new Map();
  bodyGroup.traverse((child) => {
    if (child.isMesh && child.material) {
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      for (const m of mats) {
        if (!materialBaseOpacity.has(m)) {
          materialBaseOpacity.set(m, { opacity: m.opacity ?? 1, transparent: Boolean(m.transparent), depthWrite: m.depthWrite });
        }
      }
    }
  });

  let isMoving = false;
  let walkPhase = 0;

  return {
    group,
    setMoving(flag) {
      isMoving = Boolean(flag);
      if (!isMoving) {
        leftLeg.rotation.x = 0;
        rightLeg.rotation.x = 0;
        leftArm.rotation.x = 0;
        rightArm.rotation.x = 0;
        bodyGroup.position.y = 0;
      }
    },
    setActive(flag) {
      activeDiamond.visible = Boolean(flag);
    },
    setOpacity(alpha) {
      const a = Math.max(0, Math.min(1, alpha));
      for (const [m, base] of materialBaseOpacity.entries()) {
        m.opacity = base.opacity * a;
        m.transparent = base.transparent || a < 0.99;
        m.depthWrite = a < 0.99 ? false : base.depthWrite;
        if (m.uniforms?.uOpacity) {
          m.uniforms.uOpacity.value = m.opacity;
        }
      }
      contactShadow.material.opacity = 0.28 * a;
    },
    update(dt = 0.016, elapsed = 0) {
      if (isMoving) {
        walkPhase += Math.min(dt, 0.1) * 11;
        const swing = Math.sin(walkPhase) * 0.55;
        leftLeg.rotation.x = swing;
        rightLeg.rotation.x = -swing;
        leftArm.rotation.x = -swing * 0.45;
        rightArm.rotation.x = swing * 0.45;
        bodyGroup.position.y = Math.abs(Math.sin(walkPhase)) * 0.04;
      } else {
        bodyGroup.position.y = Math.sin(elapsed * 2.1) * 0.01;
      }
      if (activeDiamond.visible) {
        activeDiamond.position.y = 1.65 + Math.sin(elapsed * 3.2) * 0.06;
        activeDiamond.rotation.y = elapsed * 1.4;
      }
      if (isAstral && astralMat && astralTrimMat) {
        const pulse = 0.5 + 0.5 * Math.sin(elapsed * 3.6);
        astralMat.opacity = 0.54 + pulse * 0.18;
        if (astralMat.uniforms?.uOpacity) astralMat.uniforms.uOpacity.value = astralMat.opacity;
        astralTrimMat.opacity = 0.68 + pulse * 0.22;
        if (astralTrimMat.uniforms?.uOpacity) astralTrimMat.uniforms.uOpacity.value = astralTrimMat.opacity;
        if (astralAccent) {
          astralAccent.rotation.y = elapsed * 0.75;
          astralAccent.position.y = Math.sin(elapsed * 2.8) * 0.03;
        }
      }
    }
  };
}

/**
 * Cover Monument Diorama Delegation
 * Delegates title screen monument diorama cleanly to stpauls-and-cover.js.
 */
export function buildTitleDioramaScene(THREEArg, options = {}) {
  const T = resolveTHREE(THREEArg);
  return buildMacauCoverDiorama(T, {
    ...options,
    createCharacterFigurine
  });
}

const NODE_STYLE_COLORS = {
  bluestone: {},
  stone: {},
  granite: { topColor: '#fff6ea', litLeftColor: '#f7cbb4', shadeRightColor: '#8aa2e8', bottomColor: '#6d82cc' },
  brick: { topColor: '#fff3e4', litLeftColor: '#f5b0bc', shadeRightColor: '#8d8cd6', bottomColor: '#6d6ec2' },
  mint: { topColor: '#fff7ea', litLeftColor: '#96e4ce', shadeRightColor: '#69b4c2', bottomColor: '#5293ab' },
  ochre: { topColor: '#fff7e0', litLeftColor: '#f7d29c', shadeRightColor: '#9da3de', bottomColor: '#7b84c7' },
  sand: { topColor: '#fff6e0', litLeftColor: '#f6d6aa', shadeRightColor: '#98a0dc', bottomColor: '#7781c2' },
  wood: { topColor: '#f6dfc7', litLeftColor: '#dc9d82', shadeRightColor: '#7f72ab', bottomColor: '#62578f' },
  cyber: { topColor: '#e9f7ff', litLeftColor: '#78e3d6', shadeRightColor: '#686ec8', bottomColor: '#4c52a8' },
  bridge: { topColor: '#fff7e8', litLeftColor: '#f4cfa8', shadeRightColor: '#8d9ce0', bottomColor: '#6e7fc9' },
  stage_portal_arch: { topColor: '#fff5e6', litLeftColor: '#b7ece6', shadeRightColor: '#7c96df', bottomColor: '#5e78c2' },
  hexagram_lotus_altar: { topColor: '#fff6e8', litLeftColor: '#f6c3cf', shadeRightColor: '#869be6', bottomColor: '#687ec9' }
};

function createRoundArchSpandrelGeo(T, width, totalH, depth, archR, springY) {
  const halfW = width * 0.5;
  const clampedR = Math.min(archR, halfW - 0.04);
  const clampedSpring = Math.min(springY, totalH - clampedR - 0.06);
  const shape = new T.Shape();
  shape.moveTo(-halfW, 0);
  shape.lineTo(-halfW, totalH);
  shape.lineTo(halfW, totalH);
  shape.lineTo(halfW, 0);
  shape.lineTo(clampedR, 0);
  shape.lineTo(clampedR, clampedSpring);
  shape.absarc(0, clampedSpring, clampedR, 0, Math.PI, false);
  shape.lineTo(-clampedR, 0);
  shape.closePath();

  const geo = new T.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
    curveSegments: 14
  });
  geo.translate(0, 0, -depth * 0.5);
  return geo;
}

function createHexagramInlayGroup(T, radius, baseY, monumentTheme, anchor) {
  const hex = new T.Group();
  const outerStone = new T.Mesh(
    new T.RingGeometry(radius * 0.85, radius * 1.12, 6),
    createMonumentMaterial(T, monumentTheme, { variant: 'parapet', anchor })
  );
  outerStone.rotation.x = -Math.PI / 2;
  outerStone.position.y = baseY;

  const blackHex = new T.Mesh(
    new T.RingGeometry(radius * 0.77, radius * 0.86, 6),
    createMonumentMaterial(T, monumentTheme, {
      topColor: '#23294a',
      litLeftColor: '#23294a',
      shadeRightColor: '#1a203c',
      bottomColor: '#1a203c',
      anchor
    })
  );
  blackHex.rotation.x = -Math.PI / 2;
  blackHex.position.y = baseY + 0.0007;

  const triCrimsonMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#ee6070',
    litLeftColor: '#e45266',
    shadeRightColor: '#b94162',
    bottomColor: '#9e3857',
    anchor
  });
  const triJadeMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#66d9aa',
    litLeftColor: '#4bc496',
    shadeRightColor: '#36998b',
    bottomColor: '#2b7d75',
    anchor
  });

  const triA = new T.Mesh(new T.RingGeometry(radius * 0.44, radius * 0.69, 3), triCrimsonMat);
  triA.rotation.x = -Math.PI / 2;
  triA.position.y = baseY + 0.0014;

  const triB = new T.Mesh(new T.RingGeometry(radius * 0.44, radius * 0.69, 3), triJadeMat);
  triB.rotation.x = -Math.PI / 2;
  triB.rotation.z = Math.PI;
  triB.position.y = baseY + 0.0021;

  const blackCoreRing = new T.Mesh(
    new T.RingGeometry(radius * 0.25, radius * 0.32, 12),
    createMonumentMaterial(T, monumentTheme, {
      topColor: '#23294a',
      litLeftColor: '#23294a',
      shadeRightColor: '#1a203c',
      anchor
    })
  );
  blackCoreRing.rotation.x = -Math.PI / 2;
  blackCoreRing.position.y = baseY + 0.0028;

  const whiteCore = new T.Mesh(
    new T.CircleGeometry(radius * 0.25, 12),
    createMonumentMaterial(T, monumentTheme, {
      topColor: '#fffcf5',
      litLeftColor: '#fff5e4',
      shadeRightColor: '#f6d8b8',
      emissiveBoost: '#181410',
      anchor
    })
  );
  whiteCore.rotation.x = -Math.PI / 2;
  whiteCore.position.y = baseY + 0.0033;

  hex.add(outerStone, blackHex, triA, triB, blackCoreRing, whiteCore);
  hex.traverse((m) => {
    if (m.isMesh) {
      m.userData = { ignoreOcclusion: true };
      m.raycast = () => {};
    }
  });
  return hex;
}

function addMechanismMedallions(T, nodeGroup, monumentTheme, anchor) {
  const ringMat = createMonumentMaterial(T, monumentTheme, {
    variant: 'parapet',
    anchor
  });
  const recessMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#276c7a',
    litLeftColor: '#2a7985',
    shadeRightColor: '#1f536b',
    bottomColor: '#1a4559',
    anchor
  });

  const outerGeo = new T.RingGeometry(0.044, 0.068, 16);
  const recessGeo = new T.CircleGeometry(0.042, 14);
  const pinGeo = new T.CircleGeometry(0.017, 10);

  const faces = [
    { pos: [0, 0, 0.502], rotY: 0 },
    { pos: [0, 0, -0.502], rotY: Math.PI },
    { pos: [0.502, 0, 0], rotY: Math.PI / 2 },
    { pos: [-0.502, 0, 0], rotY: -Math.PI / 2 }
  ];

  for (const face of faces) {
    const faceGroup = new T.Group();
    faceGroup.position.set(face.pos[0], face.pos[1], face.pos[2]);
    faceGroup.rotation.y = face.rotY;
    for (const dx of [-0.25, 0, 0.25]) {
      const recess = new T.Mesh(recessGeo, recessMat);
      recess.position.set(dx, 0, 0.0005);
      const ring = new T.Mesh(outerGeo, ringMat);
      ring.position.set(dx, 0, 0.0012);
      const pin = new T.Mesh(pinGeo, ringMat);
      pin.position.set(dx, 0, 0.0018);
      for (const m of [recess, ring, pin]) {
        m.userData = { ignoreOcclusion: true };
        m.raycast = () => {};
      }
      faceGroup.add(recess, ring, pin);
    }
    nodeGroup.add(faceGroup);
  }
}

function buildNodeVisuals(T, node, plateInfo, isGoal, nodeCtx = {}) {
  const nodeGroup = new T.Group();
  nodeGroup.position.set(node.x, node.y, node.z);

  const isStagePortal = Boolean(
    node.style === 'stage_portal_arch' ||
    node.type === 'stage_portal_arch' ||
    node.isStagePortal === true ||
    node.stagePortal === true
  );
  const isAltarGoal = Boolean(isGoal && !isStagePortal);

  const monumentTheme = nodeCtx.theme || MONUMENT_ERA_THEMES['2026_dusk'];
  const anchor = nodeCtx.anchor || [0, 0, 0];
  const isDynamicMech = Boolean(node.groupId || nodeCtx.isRotatorNode);

  const styleOverride =
    NODE_STYLE_COLORS[node.style] ||
    (isStagePortal ? NODE_STYLE_COLORS.stage_portal_arch : NODE_STYLE_COLORS.bluestone);

  const bodyMat = isDynamicMech
    ? createMonumentMaterial(T, monumentTheme, { variant: 'mech', anchor })
    : createMonumentMaterial(T, monumentTheme, { ...styleOverride, anchor });

  // Exact 1x1x1 block for watertight Monument Valley illusion seam alignment
  const mainBlock = new T.Mesh(new T.BoxGeometry(1, 1, 1), bodyMat);
  mainBlock.castShadow = true;
  mainBlock.receiveShadow = true;
  mainBlock.userData = node.ignoreOcclusion
    ? { nodeId: node.id, occluderId: `node_${node.id}`, ignoreOcclusion: true }
    : { nodeId: node.id, occluderId: `node_${node.id}`, isOccluder: true };
  nodeGroup.add(mainBlock);

  // Subtle translucent stone bevel hairline so walkway edges stay rhythmic while illusion seams match 100%
  const topInlay = new T.Mesh(
    new T.RingGeometry(0.56, 0.62, 4),
    createMonumentMaterial(T, monumentTheme, {
      variant: isDynamicMech ? 'mech' : 'parapet',
      topColor: '#ffffff',
      transparent: true,
      opacity: isDynamicMech ? 0.34 : 0.16,
      depthWrite: false,
      anchor
    })
  );
  topInlay.rotation.x = -Math.PI / 2;
  topInlay.rotation.z = Math.PI / 4;
  topInlay.position.set(0, 0.5015, 0);
  topInlay.userData = { ignoreOcclusion: true };
  topInlay.raycast = () => {};
  nodeGroup.add(topInlay);

  // Signature Monument Valley '◦ ◦ ◦' recessed triple-ring medallions on dynamic blocks
  if (isDynamicMech) {
    addMechanismMedallions(T, nodeGroup, monumentTheme, anchor);
  }

  // Luminous aqua trim accent for cyber blocks
  if (node.style === 'cyber') {
    const rimMat = createMonumentMaterial(T, monumentTheme, {
      variant: 'mech',
      emissiveBoost: '#287a8c',
      anchor
    });
    const rim = new T.Mesh(new T.BoxGeometry(1.003, 0.045, 1.003), rimMat);
    rim.position.set(0, 0.44, 0);
    rim.userData = { ignoreOcclusion: true };
    rim.raycast = () => {};
    nodeGroup.add(rim);
  }

  // Optional lower grounding plinth skirt / pillar (never added to occluderMeshes)
  let pillarMesh = null;
  if (node.pillarHeight && node.pillarHeight > 0) {
    const ph = node.pillarHeight;
    const pillarMat = createMonumentMaterial(T, monumentTheme, { ...styleOverride, anchor });
    pillarMesh = new T.Mesh(new T.BoxGeometry(0.88, ph, 0.88), pillarMat);
    pillarMesh.position.set(0, -0.5 - ph / 2, 0);
    pillarMesh.receiveShadow = true;
    pillarMesh.userData = { nodeId: node.id, isSupportPier: true, pierColNodeIds: [node.id] };
    nodeGroup.add(pillarMesh);

    const plinth = new T.Mesh(
      new T.BoxGeometry(0.95, 0.12, 0.95),
      createMonumentMaterial(T, monumentTheme, { variant: 'parapet', anchor })
    );
    plinth.position.set(0, -0.56, 0);
    plinth.userData = { ignoreOcclusion: true };
    plinth.raycast = () => {};
    nodeGroup.add(plinth);
  }

  // Stepped Monument cream-apricot stair treads on top
  if (node.isStair) {
    const stairMat = createMonumentMaterial(T, monumentTheme, { variant: 'parapet', anchor });
    const stepCount = 4;
    for (let s = 0; s < stepCount; s++) {
      const w = 0.92 - s * 0.2;
      const step = new T.Mesh(new T.BoxGeometry(w, 0.065, 0.92), stairMat);
      step.position.set(0, 0.532 + s * 0.065, 0);
      step.castShadow = true;
      step.receiveShadow = true;
      step.userData = { ignoreOcclusion: true };
      step.raycast = () => {};
      nodeGroup.add(step);
    }
  }

  // Invisible top pickable cap slab (BoxGeometry prevents diagonal click ray misses)
  const walkY = 0.503 + (node.walkYOffset || 0) + (node.isStair ? 0.12 : 0);
  const pickGeo = node.isStair
    ? new T.BoxGeometry(0.98, 0.30, 0.98)
    : new T.BoxGeometry(0.98, 0.08, 0.98);
  const pickMat = new T.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
  const pickMesh = new T.Mesh(pickGeo, pickMat);
  pickMesh.position.set(0, node.isStair ? walkY : walkY - 0.04, 0);
  pickMesh.userData = { nodeId: node.id, pickType: 'tile', ignoreOcclusion: true };
  nodeGroup.add(pickMesh);

  let plateRecord = null;
  if (plateInfo) {
    const pid = plateInfo.id || node.plateId || node.plate;
    const baseRingMat = createMonumentMaterial(T, monumentTheme, { variant: 'parapet', anchor });
    const glowRingMat = createMonumentMaterial(T, monumentTheme, {
      variant: 'gold',
      emissiveBoost: '#281e0a',
      anchor
    });

    const outerRing = new T.Mesh(new T.RingGeometry(0.24, 0.35, 16), baseRingMat);
    outerRing.rotation.x = -Math.PI / 2;
    outerRing.position.set(0, 0.503, 0);

    const innerRing = new T.Mesh(new T.RingGeometry(0.11, 0.22, 8), glowRingMat);
    innerRing.rotation.x = -Math.PI / 2;
    innerRing.position.set(0, 0.504, 0);

    const coreDisc = new T.Mesh(new T.CircleGeometry(0.085, 8), glowRingMat);
    coreDisc.rotation.x = -Math.PI / 2;
    coreDisc.position.set(0, 0.5045, 0);

    for (const m of [outerRing, innerRing, coreDisc]) {
      m.userData = { ignoreOcclusion: true };
      m.raycast = () => {};
      nodeGroup.add(m);
    }

    plateRecord = {
      id: pid,
      nodeId: node.id,
      mesh: innerRing,
      material: glowRingMat,
      setActive(active) {
        const isActive = Boolean(active);
        glowRingMat.userData = { ...(glowRingMat.userData || {}), isPlateActive: isActive };
        if (glowRingMat.uniforms?.uTopColor) {
          const topHex = isActive ? '#b8fff3' : '#fff2be';
          const litHex = isActive ? '#6fe0cc' : '#f6cf7d';
          const boostHex = isActive ? '#287a6c' : '#241a08';
          glowRingMat.uniforms.uTopColor.value.copy(hexToSrgbVec3(T, topHex));
          glowRingMat.uniforms.uLitLeftColor.value.copy(hexToSrgbVec3(T, litHex));
          glowRingMat.uniforms.uEmissiveBoost.value.copy(hexToSrgbVec3(T, boostHex));
        }
      }
    };
  }

  let stagePortalVisual = null;
  if (isStagePortal) {
    const discMat = createMonumentMaterial(T, monumentTheme, { variant: 'parapet', anchor });
    const azulejoRimMat = createMonumentMaterial(T, monumentTheme, {
      topColor: '#6994e8',
      litLeftColor: '#4874d4',
      shadeRightColor: '#3758b0',
      bottomColor: '#2a4594',
      anchor
    });
    const archStoneMat = createMonumentMaterial(T, monumentTheme, {
      variant: 'parapet',
      topColor: '#fffdf7',
      litLeftColor: '#fbd8df',
      shadeRightColor: '#8ea2e6',
      anchor
    });
    const archCyanMat = createMonumentMaterial(T, monumentTheme, {
      topColor: '#cfffff',
      litLeftColor: '#76f2ff',
      shadeRightColor: '#50c4e2',
      emissiveBoost: '#3896ab',
      transparent: true,
      opacity: 0.90,
      preserveInNight: true,
      anchor
    });
    const veilMat = createMonumentMaterial(T, monumentTheme, {
      topColor: '#e4ffff',
      litLeftColor: '#82f7ee',
      shadeRightColor: '#58d4e8',
      emissiveBoost: '#2e8896',
      transparent: true,
      opacity: 0.42,
      side: T.DoubleSide,
      depthWrite: false,
      preserveInNight: true,
      anchor
    });

    const disc = new T.Mesh(new T.CircleGeometry(0.42, 12), discMat);
    disc.rotation.x = -Math.PI / 2;
    disc.position.set(0, 0.5035, 0);

    const rim = new T.Mesh(new T.RingGeometry(0.28, 0.37, 8), azulejoRimMat);
    rim.rotation.x = -Math.PI / 2;
    rim.position.set(0, 0.5045, 0);

    const archGroup = new T.Group();
    archGroup.position.set(0, 0.505, 0);

    // Sculpted Monument Valley vaulted doorway frame
    const portalShell = new T.Mesh(
      createRoundArchSpandrelGeo(T, 0.90, 1.18, 0.22, 0.29, 0.72),
      archStoneMat
    );
    const portalTrim = new T.Mesh(new T.BoxGeometry(0.96, 0.075, 0.26), azulejoRimMat);
    portalTrim.position.set(0, 1.21, 0);

    const veil = new T.Mesh(new T.PlaneGeometry(0.56, 0.96), veilMat);
    veil.position.set(0, 0.50, 0);

    const keyGlyph = new T.Mesh(
      new T.OctahedronGeometry(0.115, 0),
      createMonumentMaterial(T, monumentTheme, { variant: 'gold', emissiveBoost: '#3a2c0c', anchor })
    );
    keyGlyph.position.set(0, 1.44, 0);

    archGroup.add(portalShell, portalTrim, veil, keyGlyph);
    for (const obj of [disc, rim, portalShell, portalTrim, veil, keyGlyph]) {
      obj.userData = { ignoreOcclusion: true };
      obj.raycast = () => {};
    }
    nodeGroup.add(disc, rim, archGroup);
    stagePortalVisual = { archGroup, keyGlyph, veilMat, archCyanMat };
  }

  let lotusPetals = null;
  if (isAltarGoal) {
    const mosaicBase = new T.Mesh(
      new T.CircleGeometry(0.43, 24),
      createMonumentMaterial(T, monumentTheme, { variant: 'parapet', anchor })
    );
    mosaicBase.rotation.x = -Math.PI / 2;
    mosaicBase.position.set(0, 0.503, 0);
    mosaicBase.userData = { ignoreOcclusion: true };
    mosaicBase.raycast = () => {};
    nodeGroup.add(mosaicBase);

    // Pui Ching hollow interwoven red-black-white-green 6-pointed star mosaic
    const hexMosaic = createHexagramInlayGroup(T, 0.36, 0.504, monumentTheme, anchor);
    nodeGroup.add(hexMosaic);

    // 8 blooming glazed pastel sakura-pink & teal lotus petals
    const petalGroup = new T.Group();
    petalGroup.position.set(0, 0.51, 0);
    const petalMat = createMonumentMaterial(T, monumentTheme, {
      topColor: '#ffe4eb',
      litLeftColor: '#f6b4c6',
      shadeRightColor: '#d482b6',
      emissiveBoost: '#28141e',
      side: T.DoubleSide,
      preserveInNight: true,
      anchor
    });
    const petalGeo = new T.ConeGeometry(0.088, 0.25, 4);
    const petals = [];
    for (let i = 0; i < 8; i++) {
      const pivot = new T.Group();
      pivot.rotation.y = (i / 8) * Math.PI * 2;
      const petal = new T.Mesh(petalGeo, petalMat);
      petal.position.set(0, 0.08, 0.36);
      petal.rotation.x = 1.05;
      petal.scale.set(1.0, 1.0, 0.45);
      petal.userData = { ignoreOcclusion: true };
      petal.raycast = () => {};
      pivot.add(petal);
      petalGroup.add(pivot);
      petals.push(petal);
    }
    nodeGroup.add(petalGroup);
    lotusPetals = { petalGroup, petals, petalMat };
  }

  return { nodeGroup, mainBlock, pillarMesh, pickMesh, plateRecord, lotusPetals, stagePortalVisual };
}

function buildNpcBody(T, kind, monumentTheme = MONUMENT_ERA_THEMES['2026_dusk']) {
  const npc = new T.Group();
  const shadow = createContactShadow(T);
  npc.add(shadow);

  const headMat = makePorcelainHeadMat(T, false);
  const darkHairMat = makeFigureMonMat(T, '#2e355e', '#23294d', '#191e3c');
  const legMat = makeFigureMonMat(T, '#333b66', '#252d54', '#1a2042');

  const addPerson = (xOff, robeColors, hairMat, heightScale = 1, accessoryFn = null) => {
    const p = new T.Group();
    p.position.set(xOff, 0, 0);
    p.scale.setScalar(heightScale);

    const robeMat = makeFigureMonMat(T, robeColors[0], robeColors[1], robeColors[2]);
    // Thin crisp Monument Valley legs below conical robe
    for (const lx of [-0.048, 0.048]) {
      const leg = new T.Mesh(new T.CylinderGeometry(0.024, 0.018, 0.24, 7), legMat);
      leg.position.set(lx, 0.12, 0);
      p.add(leg);
    }

    const cloak = new T.Mesh(new T.CylinderGeometry(0.095, 0.215, 0.68, 14), robeMat);
    cloak.position.set(0, 0.50, 0);

    // Pure-white faceless porcelain sphere head (#ffffff)
    const head = new T.Mesh(new T.SphereGeometry(0.138, 14, 10), headMat);
    head.position.set(0, 0.96, 0);

    const hair = new T.Mesh(
      new T.SphereGeometry(0.145, 12, 9, 0, Math.PI * 2, 0, Math.PI * 0.54),
      hairMat
    );
    hair.position.set(0, 0.97, -0.014);
    hair.rotation.x = -0.32;

    p.add(cloak, head, hair);
    if (accessoryFn) accessoryFn(p);
    npc.add(p);
    return p;
  };

  if (kind === 'old_man_553') {
    const silverHairMat = makeFigureMonMat(T, '#ffffff', '#e8eefc', '#c2ceee');
    const goldMat = createMonumentMaterial(T, monumentTheme, { variant: 'gold', emissiveBoost: '#281e08' });
    addPerson(0, ['#fffcf5', '#e4eaf8', '#aab8e4'], silverHairMat, 1.0, (p) => {
      const bun = new T.Mesh(new T.SphereGeometry(0.052, 8, 6), silverHairMat);
      bun.position.set(0, 1.11, -0.09);
      const watch = new T.Mesh(new T.CylinderGeometry(0.05, 0.05, 0.02, 10), goldMat);
      watch.rotation.x = Math.PI / 2;
      watch.position.set(0.15, 0.54, 0.14);
      p.add(bun, watch);
    });
  } else if (kind === 'sofia_astral') {
    const jadeBodyMat = makeFigureMonMat(T, '#d8fffb', '#86f2e4', '#58bfd6', {
      emissiveBoost: '#246674',
      transparent: true,
      opacity: 0.64,
      depthWrite: false
    });
    const azurePrismMat = makeFigureMonMat(T, '#ffffff', '#aafaff', '#62d4f0', {
      emissiveBoost: '#32829c',
      transparent: true,
      opacity: 0.78,
      depthWrite: false
    });
    const astralHeadMat = makePorcelainHeadMat(T, true);
    const p = new T.Group();
    const robe = new T.Mesh(new T.CylinderGeometry(0.095, 0.22, 0.70, 12), jadeBodyMat);
    robe.position.set(0, 0.44, 0);
    const head = new T.Mesh(new T.SphereGeometry(0.138, 12, 10), astralHeadMat);
    head.position.set(0, 0.94, 0);
    const crown = new T.Mesh(new T.OctahedronGeometry(0.072, 0), azurePrismMat);
    crown.position.set(0, 1.22, 0);
    const backMandala = new T.Mesh(new T.TorusGeometry(0.18, 0.016, 6, 6), azurePrismMat);
    backMandala.position.set(0, 0.80, -0.14);
    p.add(robe, head, crown, backMandala);
    npc.add(p);
  } else if (kind === 'ryan') {
    const cyanMat = makeFigureMonMat(T, '#d8ffff', '#74f5ff', '#48c8de', { emissiveBoost: '#287e94' });
    const goldStreakMat = makeFigureMonMat(T, '#fff2bc', '#f6cf7d', '#d8a64e');
    addPerson(0, ['#5368c9', '#31449e', '#233075'], darkHairMat, 1.02, (p) => {
      const spike = new T.Mesh(new T.ConeGeometry(0.044, 0.18, 5), goldStreakMat);
      spike.rotation.set(0.55, 0, -0.35);
      spike.position.set(0.055, 1.10, 0.05);
      const cyberArm = new T.Mesh(new T.ConeGeometry(0.048, 0.28, 8), cyanMat);
      cyberArm.position.set(-0.17, 0.56, 0.04);
      p.add(spike, cyberArm);
    });
  } else if (kind === 'couple_1622') {
    addPerson(-0.18, ['#8faee8', '#688ad4', '#4e6ab2'], darkHairMat, 0.96, (p) => {
      const scroll = new T.Mesh(
        new T.CylinderGeometry(0.022, 0.022, 0.22, 6),
        makeFigureMonMat(T, '#fff8ea', '#f4dec0', '#d4b590')
      );
      scroll.rotation.z = 0.6;
      scroll.position.set(0.14, 0.54, 0.1);
      p.add(scroll);
    });
    addPerson(0.18, ['#f8bcc8', '#e68c9e', '#ba6688'], darkHairMat, 0.92);
  } else if (kind === 'couple_2026') {
    addPerson(-0.18, ['#6d8fe0', '#486bc2', '#35509e'], darkHairMat, 0.96, (p) => {
      const sagoCup = new T.Mesh(
        new T.CylinderGeometry(0.045, 0.032, 0.11, 8),
        makeFigureMonMat(T, '#ffffff', '#fff6ec', '#dce6fa')
      );
      sagoCup.position.set(0.15, 0.54, 0.11);
      p.add(sagoCup);
    });
    addPerson(0.18, ['#ffe6b8', '#f5c07e', '#c98e72'], darkHairMat, 0.92, (p) => {
      const cam = new T.Mesh(new T.BoxGeometry(0.09, 0.06, 0.05), darkHairMat);
      cam.position.set(-0.12, 0.55, 0.12);
      p.add(cam);
    });
  } else if (kind === 'couple_2077') {
    const cyan = makeFigureMonMat(T, '#d0ffff', '#74f5ff', '#4ac4dc', { emissiveBoost: '#287e94' });
    for (const x of [-0.18, 0.18]) {
      addPerson(x, ['#6a7fd4', '#4a5fb5', '#344491'], darkHairMat, 0.95, (p) => {
        const badge = new T.Mesh(new T.BoxGeometry(0.12, 0.035, 0.04), cyan);
        badge.position.set(0, 0.95, 0.12);
        p.add(badge);
      });
    }
  } else if (kind === 'zero7_silhouette') {
    const visorHoodMat = makeFigureMonMat(T, '#3a467a', '#283261', '#1c2448');
    const slitMat = makeFigureMonMat(T, '#d0ffff', '#78f6ff', '#48c8de', { emissiveBoost: '#3896ab' });
    addPerson(0, ['#4a5ca8', '#2e3e85', '#212d66'], visorHoodMat, 1.02, (p) => {
      const maskBand = new T.Mesh(new T.CylinderGeometry(0.144, 0.144, 0.10, 12), visorHoodMat);
      maskBand.position.set(0, 0.96, 0.005);
      const visor = new T.Mesh(new T.BoxGeometry(0.20, 0.042, 0.08), slitMat);
      visor.position.set(0, 0.96, 0.115);
      p.add(maskBand, visor);
    });
  } else if (kind === 'corvo_figure') {
    const goldMat = createMonumentMaterial(T, monumentTheme, { variant: 'gold' });
    const slateHairMat = makeFigureMonMat(T, '#7582ba', '#535f99', '#3c467a');
    addPerson(0, ['#484b8a', '#2e3066', '#21224d'], slateHairMat, 1.04, (p) => {
      const shoulderGold = new T.Mesh(new T.CylinderGeometry(0.16, 0.21, 0.13, 10), goldMat);
      shoulderGold.position.set(0, 0.72, 0);
      p.add(shoulderGold);
    });
  } else if (kind === 'ajan_npc') {
    const celadonMat = makeFigureMonMat(T, '#bdf5e6', '#72dec6', '#4fb0aa');
    addPerson(0, ['#ffc0ca', '#f08e9e', '#c26989'], darkHairMat, 0.95, (p) => {
      const pin = new T.Mesh(new T.BoxGeometry(0.14, 0.025, 0.025), celadonMat);
      pin.position.set(0, 1.08, -0.04);
      p.add(pin);
    });
  } else {
    // luzhisi_figure: Ivory-silver elder silhouette with warm gold collar
    const silverHairMat = makeFigureMonMat(T, '#ffffff', '#e8eefc', '#c2ceee');
    const goldTrim = createMonumentMaterial(T, monumentTheme, { variant: 'gold' });
    addPerson(0, ['#fffdf8', '#e6ecfa', '#adbce8'], silverHairMat, 1.05, (p) => {
      const collar = new T.Mesh(new T.CylinderGeometry(0.14, 0.20, 0.14, 10), goldTrim);
      collar.position.set(0, 0.72, 0);
      p.add(collar);
    });
  }

  return npc;
}

function buildSpawnedPropVisual(T, propType, animatedHooks = []) {
  const g = new T.Group();
  g.name = `prop_${propType}`;

  if (propType === 'cyan_arc_mark') {
    const padMat = makeMat(T, '#1d3642', { roughness: 0.45 });
    const cyanMat = makeMat(T, '#52f0ff', {
      emissive: 0x35d6f2,
      emissiveIntensity: 1.25,
      transparent: true,
      opacity: 0.88,
      depthWrite: false
    });
    const base = new T.Mesh(new T.CylinderGeometry(0.32, 0.35, 0.03, 6), padMat);
    base.position.y = 0.015;
    const ring = new T.Mesh(new T.RingGeometry(0.18, 0.28, 6), cyanMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.035;
    const spark = new T.Mesh(new T.OctahedronGeometry(0.08, 0), cyanMat);
    spark.position.y = 0.24;
    g.add(base, ring, spark);
    animatedHooks.push((elapsed) => {
      spark.rotation.y = elapsed * 2.6;
      spark.position.y = 0.22 + Math.sin(elapsed * 4.2) * 0.05;
      cyanMat.opacity = 0.72 + Math.sin(elapsed * 5.0) * 0.18;
    });
  } else if (propType === 'raven_feather_ember') {
    const featherMat = makeMat(T, '#1c2128', { roughness: 0.65 });
    const emberMat = makeMat(T, '#ff6d3b', {
      emissive: 0xd93a26,
      emissiveIntensity: 1.15,
      transparent: true,
      opacity: 0.9
    });
    for (let i = 0; i < 4; i++) {
      const blade = new T.Mesh(new T.ConeGeometry(0.045, 0.34, 4), featherMat);
      blade.rotation.set(Math.PI / 2 - 0.15, i * 0.78, 0.18 * (i - 1.5));
      blade.scale.set(1.0, 1.0, 0.3);
      blade.position.set(Math.cos(i * 1.4) * 0.08, 0.04 + i * 0.012, Math.sin(i * 1.4) * 0.08);
      g.add(blade);
    }
    const ember = new T.Mesh(new T.OctahedronGeometry(0.05, 0), emberMat);
    ember.position.set(0.05, 0.12, 0.02);
    g.add(ember);
    animatedHooks.push((elapsed) => {
      emberMat.emissiveIntensity = 0.85 + Math.sin(elapsed * 4.5) * 0.35;
      ember.position.y = 0.12 + Math.sin(elapsed * 3.1) * 0.025;
    });
  } else if (propType === 'future_armor_shard') {
    const alloyMat = makeMat(T, '#2c3d4a', { metalness: 0.72, roughness: 0.32 });
    const coreMat = makeMat(T, '#59ebff', { emissive: 0x3ecae6, emissiveIntensity: 1.1 });
    const shard = new T.Mesh(new T.OctahedronGeometry(0.16, 0), alloyMat);
    shard.scale.set(1.25, 0.45, 0.85);
    shard.position.y = 0.18;
    const vein = new T.Mesh(new T.BoxGeometry(0.22, 0.04, 0.06), coreMat);
    vein.position.y = 0.19;
    vein.rotation.y = 0.45;
    g.add(shard, vein);
    animatedHooks.push((elapsed) => {
      shard.rotation.y = elapsed * 0.85;
      vein.rotation.y = elapsed * 0.85 + 0.45;
      shard.position.y = 0.18 + Math.sin(elapsed * 2.5) * 0.03;
      vein.position.y = shard.position.y + 0.01;
    });
  } else if (propType === 'lit_altar_candle') {
    const brassMat = makeMat(T, '#cfa246', { metalness: 0.75, roughness: 0.28 });
    const waxMat = makeMat(T, '#f3ecda', { roughness: 0.65 });
    const flameMat = makeMat(T, '#ffda78', {
      emissive: 0xffa62e,
      emissiveIntensity: 1.45,
      transparent: true,
      opacity: 0.92
    });
    const dish = new T.Mesh(new T.CylinderGeometry(0.16, 0.12, 0.04, 12), brassMat);
    dish.position.y = 0.02;
    const wax = new T.Mesh(new T.CylinderGeometry(0.065, 0.072, 0.26, 10), waxMat);
    wax.position.y = 0.17;
    const flame = new T.Mesh(new T.ConeGeometry(0.042, 0.12, 6), flameMat);
    flame.position.y = 0.35;
    g.add(dish, wax, flame);
    animatedHooks.push((elapsed) => {
      const flicker = 0.92 + Math.sin(elapsed * 9.5) * 0.12;
      flame.scale.set(1, flicker, 1);
      flameMat.emissiveIntensity = 1.2 + Math.sin(elapsed * 8.2) * 0.35;
    });
  } else if (propType === 'herbal_tea_bowl') {
    const coasterMat = makeMat(T, PALETTE.timber, { roughness: 0.72 });
    const celadonMat = makeMat(T, '#75b59c', { roughness: 0.35, metalness: 0.08 });
    const teaMat = makeMat(T, '#332015', { roughness: 0.22 });
    const mistMat = makeMat(T, '#dff5ec', {
      emissive: 0x8ad6bf,
      emissiveIntensity: 0.55,
      transparent: true,
      opacity: 0.52,
      depthWrite: false
    });
    const saucer = new T.Mesh(new T.CylinderGeometry(0.18, 0.19, 0.03, 12), coasterMat);
    saucer.position.y = 0.015;
    const bowl = new T.Mesh(new T.CylinderGeometry(0.145, 0.085, 0.13, 12), celadonMat);
    bowl.position.y = 0.095;
    const liquid = new T.Mesh(new T.CircleGeometry(0.13, 12), teaMat);
    liquid.rotation.x = -Math.PI / 2;
    liquid.position.y = 0.158;
    const steam = new T.Mesh(new T.SphereGeometry(0.055, 8, 6), mistMat);
    steam.position.y = 0.26;
    g.add(saucer, bowl, liquid, steam);
    animatedHooks.push((elapsed) => {
      steam.position.y = 0.24 + ((elapsed * 0.25) % 0.18);
      mistMat.opacity = 0.52 * (1 - ((elapsed * 0.25) % 0.18) / 0.18);
    });
  } else if (propType === 'shattered_mask_shards') {
    const shellMat = makeMat(T, '#242a30', { metalness: 0.55, roughness: 0.38 });
    const slitMat = makeMat(T, PALETTE.cyberTeal, { emissive: 0x45cbe0, emissiveIntensity: 0.85 });
    const leftHalf = new T.Mesh(new T.BoxGeometry(0.14, 0.04, 0.11), shellMat);
    leftHalf.position.set(-0.14, 0.025, 0.14);
    leftHalf.rotation.y = 0.55;
    const rightHalf = new T.Mesh(new T.BoxGeometry(0.13, 0.04, 0.1), shellMat);
    rightHalf.position.set(0.15, 0.025, 0.12);
    rightHalf.rotation.y = -0.62;
    const spark = new T.Mesh(new T.BoxGeometry(0.08, 0.015, 0.02), slitMat);
    spark.position.set(0.01, 0.03, 0.16);
    g.add(leftHalf, rightHalf, spark);
  } else if (propType === 'pocket_watch_553') {
    const brassMat = makeMat(T, '#d6a94e', { metalness: 0.82, roughness: 0.24, emissive: 0x5c4212, emissiveIntensity: 0.25 });
    const faceMat = makeMat(T, '#f6efe0', { roughness: 0.4 });
    const handMat = makeMat(T, '#1d2429');
    const body = new T.Mesh(new T.CylinderGeometry(0.15, 0.15, 0.04, 16), brassMat);
    body.position.y = 0.02;
    const face = new T.Mesh(new T.CircleGeometry(0.12, 16), faceMat);
    face.rotation.x = -Math.PI / 2;
    face.position.y = 0.042;
    const lid = new T.Mesh(new T.CylinderGeometry(0.145, 0.145, 0.02, 16), brassMat);
    lid.position.set(0, 0.14, -0.13);
    lid.rotation.x = -0.95;
    const handHour = new T.Mesh(new T.BoxGeometry(0.018, 0.008, 0.07), handMat);
    handHour.position.set(-0.02, 0.048, 0.03);
    handHour.rotation.y = 0.45;
    const handMin = new T.Mesh(new T.BoxGeometry(0.014, 0.008, 0.095), handMat);
    handMin.position.set(-0.035, 0.05, -0.025);
    handMin.rotation.y = -0.7;
    g.add(body, face, lid, handHour, handMin);
  } else {
    const fallbackGem = new T.Mesh(
      new T.OctahedronGeometry(0.12, 0),
      makeMat(T, PALETTE.warmGold, { emissive: 0x997024, emissiveIntensity: 0.55 })
    );
    fallbackGem.position.y = 0.16;
    g.add(fallbackGem);
  }
  return g;
}

const NPC_PROP_TYPES = new Set([
  'old_man_553',
  'sofia_astral',
  'ryan',
  'couple_1622',
  'couple_2026',
  'couple_2077',
  'zero7_silhouette',
  'corvo_figure',
  'ajan_npc',
  'luzhisi_figure'
]);

const SPAWNED_PROP_TYPES = new Set([
  'cyan_arc_mark',
  'raven_feather_ember',
  'future_armor_shard',
  'lit_altar_candle',
  'herbal_tea_bowl',
  'shattered_mask_shards',
  'pocket_watch_553'
]);

function buildPropVisuals(T, prop, eraContext, animatedHooks, visualCtx = {}) {
  const g = new T.Group();
  g.position.set(prop.x || 0, prop.y || 0, prop.z || 0);
  if (prop.rotY) g.rotation.y = prop.rotY;
  if (prop.scale) g.scale.setScalar(prop.scale);

  const type = prop.type;
  const monumentTheme = resolveMonumentTheme(visualCtx.theme || eraContext || '2026_dusk');
  const anchor = visualCtx.anchor || [0, 0, 0];

  const stoneMat = createMonumentMaterial(T, monumentTheme, { anchor });
  const creamMat = createMonumentMaterial(T, monumentTheme, { variant: 'parapet', anchor });
  const roofMat = createMonumentMaterial(T, monumentTheme, { variant: 'roof', anchor });
  const goldMat = createMonumentMaterial(T, monumentTheme, { variant: 'gold', emissiveBoost: '#241a08', anchor });
  const crimsonMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#ffa8b0',
    litLeftColor: '#e86878',
    shadeRightColor: '#b34b74',
    bottomColor: '#913c62',
    anchor
  });
  const mintMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#fff8ec',
    litLeftColor: '#95e6cf',
    shadeRightColor: '#66b8c4',
    bottomColor: '#4e96ab',
    anchor
  });
  const coralRoofMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#ffb7aa',
    litLeftColor: '#ec8279',
    shadeRightColor: '#ba6288',
    bottomColor: '#964c73',
    anchor
  });
  const timberMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#f8dfbe',
    litLeftColor: '#dc9c7e',
    shadeRightColor: '#8d73ad',
    bottomColor: '#6c568c',
    anchor
  });
  const brickMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#eff4ff',
    litLeftColor: '#a6bce8',
    shadeRightColor: '#7282cc',
    bottomColor: '#5664ad',
    anchor
  });

  if (type === 'st_pauls_full' || type === 'st_pauls_ruin_wall') {
    const res = buildStPaulsMonument(T, monumentTheme, {
      mode: type === 'st_pauls_full' ? 'full' : 'ruin',
      anchor
    });
    const stObj = res?.isObject3D ? res : res?.group || res?.root || res;
    if (stObj?.isObject3D) {
      g.add(stObj);
    }
    if (typeof res?.update === 'function') {
      animatedHooks.push((elapsed, dt) => res.update(elapsed, dt));
    }
  } else if (type === 'paifang') {
    const paifangRoofMat = createMonumentMaterial(T, monumentTheme, {
      topColor: '#78e6f4',
      litLeftColor: '#3baadf',
      shadeRightColor: '#2574b8',
      bottomColor: '#1a528e',
      anchor
    });
    for (const sx of [-0.68, 0.68]) {
      const drum = new T.Mesh(new T.CylinderGeometry(0.16, 0.19, 0.22, 10), creamMat);
      drum.position.set(sx, 0.11, 0);
      const pillar = new T.Mesh(new T.CylinderGeometry(0.095, 0.105, 1.68, 10), crimsonMat);
      pillar.position.set(sx, 0.96, 0);
      g.add(drum, pillar);
    }
    const lintel = new T.Mesh(new T.BoxGeometry(1.76, 0.22, 0.24), crimsonMat);
    lintel.position.set(0, 1.70, 0);
    const plaque = new T.Mesh(new T.BoxGeometry(0.64, 0.16, 0.27), goldMat);
    plaque.position.set(0, 1.70, 0);
    const eaveBase = new T.Mesh(new T.BoxGeometry(1.94, 0.08, 0.44), goldMat);
    eaveBase.position.set(0, 1.84, 0);
    const lowerRoof = new T.Mesh(new T.CylinderGeometry(0.45, 0.92, 0.22, 4, 1, false, Math.PI / 4), paifangRoofMat);
    lowerRoof.scale.set(1.54, 1.0, 0.42);
    lowerRoof.position.set(0, 1.99, 0);
    const upperNeck = new T.Mesh(new T.BoxGeometry(0.92, 0.14, 0.24), crimsonMat);
    upperNeck.position.set(0, 2.15, 0);
    const upperRoof = new T.Mesh(new T.CylinderGeometry(0.16, 0.62, 0.24, 4, 1, false, Math.PI / 4), paifangRoofMat);
    upperRoof.scale.set(1.46, 1.0, 0.42);
    upperRoof.position.set(0, 2.32, 0);
    const ridgeBar = new T.Mesh(new T.BoxGeometry(0.30, 0.055, 0.08), goldMat);
    ridgeBar.position.set(0, 2.46, 0);
    g.add(lintel, plaque, eaveBase, lowerRoof, upperNeck, upperRoof, ridgeBar);
  } else if (type === 'puiching_arcade') {
    // 2-story mint-green Pui Ching Administration Building with octagonal turret & hollow hexagram porch
    const shutterMat = createMonumentMaterial(T, monumentTheme, {
      topColor: '#9c786a',
      litLeftColor: '#7a5a52',
      shadeRightColor: '#564259',
      anchor
    });
    const podium = new T.Mesh(new T.BoxGeometry(2.96, 0.22, 1.02), creamMat);
    podium.position.set(0, 0.11, 0.08);
    g.add(podium);

    // Central grand curved stone steps
    for (let s = 0; s < 3; s++) {
      const step = new T.Mesh(new T.BoxGeometry(1.08 - s * 0.14, 0.06, 0.24 + (2 - s) * 0.11), creamMat);
      step.position.set(0.14, 0.03 + s * 0.06, 0.62 - s * 0.07);
      g.add(step);
    }

    // Two-story mint-green colonnade wall
    const wallCore = new T.Mesh(new T.BoxGeometry(2.38, 2.02, 0.52), mintMat);
    wallCore.position.set(0.18, 1.23, -0.14);
    g.add(wallCore);

    // Second floor classical pediment windows
    for (const wx of [-0.52, 0.18, 0.88]) {
      const winFrame = new T.Mesh(new T.BoxGeometry(0.32, 0.48, 0.06), creamMat);
      winFrame.position.set(wx, 1.72, 0.13);
      const shutter = new T.Mesh(new T.BoxGeometry(0.22, 0.38, 0.07), shutterMat);
      shutter.position.set(wx, 1.72, 0.14);
      g.add(winFrame, shutter);
    }

    // Front open cream round archways on the ground arcade
    for (const ax of [-0.48, 0.18, 0.84]) {
      const archBay = new T.Mesh(createRoundArchSpandrelGeo(T, 0.66, 1.08, 0.16, 0.23, 0.68), creamMat);
      archBay.position.set(ax, 0.22, 0.34);
      g.add(archBay);
    }

    // Left 2-story octagonal shuttered corner turret
    const turretBody = new T.Mesh(new T.CylinderGeometry(0.42, 0.44, 2.18, 8), mintMat);
    turretBody.position.set(-1.14, 1.31, 0.08);
    const turretBelts = [0.22, 1.24, 2.26].map((by) => {
      const ring = new T.Mesh(new T.CylinderGeometry(0.45, 0.45, 0.08, 8), creamMat);
      ring.position.set(-1.14, by, 0.08);
      return ring;
    });
    for (const ang of [0, Math.PI / 4, -Math.PI / 4, Math.PI / 2]) {
      for (const ty of [0.80, 1.72]) {
        const louver = new T.Mesh(new T.BoxGeometry(0.15, 0.36, 0.06), shutterMat);
        louver.position.set(-1.14 + Math.sin(ang) * 0.41, ty, 0.08 + Math.cos(ang) * 0.41);
        louver.rotation.y = ang;
        g.add(louver);
      }
    }
    const turretRoof = new T.Mesh(new T.ConeGeometry(0.56, 0.56, 8), coralRoofMat);
    turretRoof.position.set(-1.14, 2.58, 0.08);
    const turretFinial = new T.Mesh(new T.OctahedronGeometry(0.08, 0), goldMat);
    turretFinial.position.set(-1.14, 2.90, 0.08);
    g.add(turretBody, ...turretBelts, turretRoof, turretFinial);

    // Main belt cornice & coral-terracotta structured hipped roof seated flush on topCornice
    const midBelt = new T.Mesh(new T.BoxGeometry(2.48, 0.10, 0.72), creamMat);
    midBelt.position.set(0.18, 1.26, -0.02);
    const topCornice = new T.Mesh(new T.BoxGeometry(2.52, 0.12, 0.78), creamMat);
    topCornice.position.set(0.18, 2.24, -0.02);
    const mainRoof = new T.Mesh(new T.CylinderGeometry(0.18, 1.48, 0.40, 4, 1, false, Math.PI / 4), coralRoofMat);
    mainRoof.scale.set(1.22, 1.0, 0.38);
    mainRoof.position.set(0.18, 2.50, -0.02);
    const roofRidge = new T.Mesh(new T.BoxGeometry(0.36, 0.065, 0.10), creamMat);
    roofRidge.position.set(0.18, 2.72, -0.02);
    const roofCrest = new T.Mesh(new T.BoxGeometry(0.42, 0.035, 0.075), goldMat);
    roofCrest.position.set(0.18, 2.76, -0.02);
    const plaque = new T.Mesh(new T.BoxGeometry(0.42, 0.16, 0.06), goldMat);
    plaque.position.set(0.18, 1.38, 0.38);
    g.add(midBelt, topCornice, mainRoof, roofRidge, roofCrest, plaque);

    // Hollow red-black-white-green interwoven hexagram inlaid on entrance porch platform
    const hexPorch = createHexagramInlayGroup(T, 0.25, 0.226, monumentTheme, anchor);
    hexPorch.position.set(0.18, 0, 0.36);
    g.add(hexPorch);
  } else if (type === 'ama_ship_rock') {
    const boulder = new T.Mesh(new T.DodecahedronGeometry(0.84, 0), stoneMat);
    boulder.scale.set(1.24, 1.04, 0.90);
    boulder.position.set(-0.18, 0.66, 0);
    const sideRock = new T.Mesh(new T.DodecahedronGeometry(0.44, 0), stoneMat);
    sideRock.position.set(0.56, 0.36, 0.18);
    const tablet = new T.Mesh(new T.BoxGeometry(0.74, 0.48, 0.09), creamMat);
    tablet.position.set(-0.18, 0.72, 0.58);
    const shipHull = new T.Mesh(new T.BoxGeometry(0.42, 0.10, 0.05), crimsonMat);
    shipHull.position.set(-0.18, 0.60, 0.64);
    const sail = new T.Mesh(new T.BoxGeometry(0.17, 0.24, 0.04), crimsonMat);
    sail.position.set(-0.18, 0.78, 0.64);

    // Double-tiered curved teal glazed Lingnan pavilion beside the sacred ship rock
    const pavGroup = new T.Group();
    pavGroup.position.set(0.62, 0, -0.18);
    const pavBase = new T.Mesh(new T.BoxGeometry(0.92, 0.16, 0.86), creamMat);
    pavBase.position.y = 0.08;
    const pavColPos = [[-0.32, -0.30], [0.32, -0.30], [-0.32, 0.30], [0.32, 0.30]];
    for (const [cx, cz] of pavColPos) {
      const col = new T.Mesh(new T.CylinderGeometry(0.04, 0.048, 0.92, 8), crimsonMat);
      col.position.set(cx, 0.62, cz);
      pavGroup.add(col);
    }
    const lowerEave = new T.Mesh(new T.CylinderGeometry(0.24, 0.78, 0.24, 4, 1, false, Math.PI / 4), roofMat);
    lowerEave.position.y = 1.16;
    const upperTier = new T.Mesh(new T.BoxGeometry(0.56, 0.34, 0.52), creamMat);
    upperTier.position.y = 1.38;
    const upperEave = new T.Mesh(new T.CylinderGeometry(0.12, 0.64, 0.28, 4, 1, false, Math.PI / 4), roofMat);
    upperEave.position.y = 1.68;
    const roofPeak = new T.Mesh(new T.OctahedronGeometry(0.09, 0), goldMat);
    roofPeak.position.y = 1.88;
    pavGroup.add(pavBase, lowerEave, upperTier, upperEave, roofPeak);

    g.add(boulder, sideRock, tablet, shipHull, sail, pavGroup);
  } else if (type === 'era_bench') {
    const eraStr = String(prop.style || prop.era || eraContext || '2026');
    if (eraStr.includes('1622') || eraStr.includes('old')) {
      const seat = new T.Mesh(new T.BoxGeometry(1.12, 0.12, 0.42), creamMat);
      seat.position.set(0, 0.42, 0);
      for (const lx of [-0.4, 0.4]) {
        const leg = new T.Mesh(new T.BoxGeometry(0.16, 0.38, 0.36), stoneMat);
        leg.position.set(lx, 0.19, 0);
        g.add(leg);
      }
      const notch = new T.Mesh(new T.BoxGeometry(0.12, 0.02, 0.04), goldMat);
      notch.position.set(0.22, 0.35, 0.19);
      const teaCup = new T.Mesh(new T.CylinderGeometry(0.06, 0.04, 0.08, 8), mintMat);
      teaCup.position.set(-0.28, 0.52, 0.05);
      g.add(seat, notch, teaCup);
    } else if (eraStr.includes('2077') || eraStr.includes('cyber')) {
      const tiMat = createMonumentMaterial(T, monumentTheme, {
        topColor: '#d0e2ff',
        litLeftColor: '#6984d4',
        shadeRightColor: '#48529e',
        anchor
      });
      const cyan = createMonumentMaterial(T, monumentTheme, {
        variant: 'mech',
        emissiveBoost: '#287a8c',
        anchor
      });
      const seat = new T.Mesh(new T.BoxGeometry(1.18, 0.09, 0.44), tiMat);
      seat.position.set(0, 0.44, 0);
      const back = new T.Mesh(new T.BoxGeometry(1.18, 0.32, 0.07), tiMat);
      back.position.set(0, 0.66, -0.18);
      const strip = new T.Mesh(new T.BoxGeometry(1.14, 0.025, 0.04), cyan);
      strip.position.set(0, 0.45, 0.22);
      const rail = new T.Mesh(new T.BoxGeometry(1.26, 0.04, 0.04), tiMat);
      rail.position.set(0, 0.78, -0.34);
      const padlock = new T.Mesh(new T.BoxGeometry(0.08, 0.10, 0.05), goldMat);
      padlock.position.set(0.32, 0.72, -0.34);
      g.add(seat, back, strip, rail, padlock);
    } else {
      const seat = new T.Mesh(new T.BoxGeometry(1.16, 0.09, 0.44), timberMat);
      seat.position.set(0, 0.42, 0);
      const back = new T.Mesh(new T.BoxGeometry(1.16, 0.30, 0.07), timberMat);
      back.position.set(0, 0.64, -0.18);
      for (const lx of [-0.46, 0.46]) {
        const frame = new T.Mesh(new T.BoxGeometry(0.08, 0.40, 0.40), stoneMat);
        frame.position.set(lx, 0.20, 0);
        g.add(frame);
      }
      const sago = new T.Mesh(new T.CylinderGeometry(0.055, 0.04, 0.13, 8), creamMat);
      sago.position.set(-0.26, 0.53, 0.06);
      const cam = new T.Mesh(
        new T.BoxGeometry(0.11, 0.075, 0.065),
        createMonumentMaterial(T, monumentTheme, {
          topColor: '#6972a6',
          litLeftColor: '#485085',
          shadeRightColor: '#323866',
          anchor
        })
      );
      cam.position.set(0.28, 0.50, 0.04);
      const sticker = new T.Mesh(
        new T.PlaneGeometry(0.11, 0.07),
        createMonumentMaterial(T, monumentTheme, {
          topColor: '#ffe0ea',
          litLeftColor: '#f6b4c6',
          shadeRightColor: '#d482b6',
          side: T.DoubleSide,
          anchor
        })
      );
      sticker.rotation.x = Math.PI / 2;
      sticker.position.set(0.1, 0.37, 0.12);
      g.add(seat, back, sago, cam, sticker);
    }
  } else if (type === 'monte_cannon_scaffold') {
    const bastion = new T.Mesh(new T.BoxGeometry(2.1, 0.85, 0.85), stoneMat);
    bastion.position.set(0, 0.425, 0);
    g.add(bastion);
    for (const mx of [-0.82, -0.25, 0.82]) {
      const merlon = new T.Mesh(new T.BoxGeometry(0.38, 0.32, 0.26), creamMat);
      merlon.position.set(mx, 1.01, 0.28);
      g.add(merlon);
    }
    const bambooMat = createMonumentMaterial(T, monumentTheme, {
      topColor: '#fff0c4',
      litLeftColor: '#ebcb7f',
      shadeRightColor: '#b0915a',
      anchor
    });
    for (const bx of [0.22, 0.68]) {
      const pole = new T.Mesh(new T.CylinderGeometry(0.03, 0.03, 1.55, 6), bambooMat);
      pole.position.set(bx, 0.77, 0.52);
      g.add(pole);
    }
    const crossBar = new T.Mesh(new T.CylinderGeometry(0.025, 0.025, 1.05, 6), bambooMat);
    crossBar.rotation.z = Math.PI / 2;
    crossBar.position.set(0.45, 1.15, 0.52);
    const carriage = new T.Mesh(new T.BoxGeometry(0.32, 0.22, 0.44), crimsonMat);
    carriage.position.set(-0.35, 0.96, 0);
    const barrel = new T.Mesh(
      new T.CylinderGeometry(0.075, 0.10, 0.68, 8),
      createMonumentMaterial(T, monumentTheme, {
        topColor: '#8d9ad4',
        litLeftColor: '#6673ad',
        shadeRightColor: '#485287',
        anchor
      })
    );
    barrel.rotation.x = Math.PI / 2 - 0.12;
    barrel.position.set(-0.35, 1.10, 0.18);
    g.add(crossBar, carriage, barrel);
  } else if (type === 'guia_fort_1808') {
    // Canon: 1808 Guia stone fort bastion and brass lantern post only
    const parapet = new T.Mesh(new T.BoxGeometry(1.9, 0.75, 0.55), stoneMat);
    parapet.position.set(0, 0.375, 0);
    const trim = new T.Mesh(new T.BoxGeometry(1.96, 0.12, 0.60), creamMat);
    trim.position.set(0, 0.78, 0);
    const post = new T.Mesh(new T.CylinderGeometry(0.035, 0.045, 1.35, 6), goldMat);
    post.position.set(0.55, 1.15, 0.12);
    const lanternMat = createMonumentMaterial(T, monumentTheme, {
      topColor: '#ffffff',
      litLeftColor: '#fff4c8',
      shadeRightColor: '#f6cf7d',
      emissiveBoost: '#684e18',
      anchor
    });
    const lantern = new T.Mesh(new T.OctahedronGeometry(0.115, 0), lanternMat);
    lantern.position.set(0.55, 1.84, 0.12);
    g.add(parapet, trim, post, lantern);
    animatedHooks.push((elapsed) => {
      const pulse = 0.36 + Math.sin(elapsed * 4.2) * 0.08;
      if (lanternMat.uniforms?.uEmissiveBoost) {
        lanternMat.uniforms.uEmissiveBoost.value.set(pulse, pulse * 0.75, pulse * 0.25);
      }
    });
  } else if (type === 'qing_border_gate') {
    // Canon: Qing tiled xieshanding gatehouse and square stone lintel gateway only
    const leftWall = new T.Mesh(new T.BoxGeometry(0.85, 1.05, 0.48), brickMat);
    leftWall.position.set(-0.78, 0.525, 0);
    const rightWall = new T.Mesh(new T.BoxGeometry(0.85, 1.05, 0.48), brickMat);
    rightWall.position.set(0.78, 0.525, 0);
    const lintelWall = new T.Mesh(new T.BoxGeometry(2.42, 0.38, 0.52), creamMat);
    lintelWall.position.set(0, 1.18, 0);
    const pavilionBody = new T.Mesh(new T.BoxGeometry(1.32, 0.56, 0.54), crimsonMat);
    pavilionBody.position.set(0, 1.64, 0);
    const qingRoof = new T.Mesh(new T.CylinderGeometry(0.26, 1.12, 0.46, 4, 1, false, Math.PI / 4), roofMat);
    qingRoof.scale.set(1.22, 1.0, 0.52);
    qingRoof.position.set(0, 2.13, 0);
    const ridge = new T.Mesh(new T.BoxGeometry(0.56, 0.075, 0.08), goldMat);
    ridge.position.set(0, 2.38, 0);
    g.add(leftWall, rightWall, lintelWall, pavilionBody, qingRoof, ridge);
  } else if (type === 'ka_ho_fort') {
    // Canon: Timber watchtower and Lingnan blue-brick school storehouse only
    for (const [wx, wz] of [[-0.55, -0.22], [-0.15, -0.22], [-0.55, 0.22], [-0.15, 0.22]]) {
      const leg = new T.Mesh(new T.CylinderGeometry(0.035, 0.045, 1.35, 6), timberMat);
      leg.position.set(wx, 0.675, wz);
      g.add(leg);
    }
    const deck = new T.Mesh(new T.BoxGeometry(0.65, 0.10, 0.65), timberMat);
    deck.position.set(-0.35, 1.25, 0);
    const towerRoof = new T.Mesh(new T.ConeGeometry(0.55, 0.38, 4, 1, false, Math.PI / 4), roofMat);
    towerRoof.position.set(-0.35, 1.75, 0);
    const storehouse = new T.Mesh(new T.BoxGeometry(1.05, 0.88, 0.78), brickMat);
    storehouse.position.set(0.68, 0.44, 0);
    const storeRoof = new T.Mesh(new T.ConeGeometry(0.84, 0.36, 4, 1, false, Math.PI / 4), roofMat);
    storeRoof.scale.set(1.15, 1, 0.85);
    storeRoof.position.set(0.68, 1.05, 0);
    g.add(deck, towerRoof, storehouse, storeRoof);
  } else if (type === 'bunker_arches') {
    for (const az of [-0.55, 0.55]) {
      const archBay = new T.Mesh(createRoundArchSpandrelGeo(T, 1.48, 1.62, 0.28, 0.52, 0.96), creamMat);
      archBay.position.set(0, 0, az);
      g.add(archBay);
    }
    const bulb = new T.Mesh(
      new T.SphereGeometry(0.085, 8, 8),
      createMonumentMaterial(T, monumentTheme, {
        topColor: '#ffffff',
        litLeftColor: '#fff4c8',
        shadeRightColor: '#f6cf7d',
        emissiveBoost: '#684e18',
        anchor
      })
    );
    bulb.position.set(0, 1.44, 0);
    g.add(bulb);
  } else if (type === 'collider_ring') {
    const outerRing = new T.Mesh(
      new T.TorusGeometry(1.05, 0.11, 8, 24),
      createMonumentMaterial(T, monumentTheme, {
        topColor: '#c2d3fa',
        litLeftColor: '#7691dc',
        shadeRightColor: '#4e5ea6',
        anchor
      })
    );
    outerRing.position.set(0, 1.25, 0);
    const cyanMat = createMonumentMaterial(T, monumentTheme, {
      variant: 'mech',
      emissiveBoost: '#287a8c',
      anchor
    });
    const innerRing = new T.Mesh(new T.TorusGeometry(0.78, 0.06, 8, 20), cyanMat);
    innerRing.position.set(0, 1.25, 0);
    const brassRing = new T.Mesh(new T.TorusGeometry(0.92, 0.04, 6, 18), goldMat);
    brassRing.position.set(0, 1.25, 0);
    for (const px of [-0.85, 0.85]) {
      const pylon = new T.Mesh(new T.BoxGeometry(0.24, 1.15, 0.24), stoneMat);
      pylon.position.set(px, 0.575, 0);
      g.add(pylon);
    }
    g.add(outerRing, innerRing, brassRing);
    animatedHooks.push((elapsed) => {
      innerRing.rotation.z = elapsed * 0.9;
      brassRing.rotation.y = Math.sin(elapsed * 0.7) * 0.35;
      const boost = 0.2 + Math.sin(elapsed * 3.0) * 0.1;
      if (cyanMat.uniforms?.uEmissiveBoost) {
        cyanMat.uniforms.uEmissiveBoost.value.set(boost * 0.4, boost, boost * 1.1);
      }
    });
  } else if (type === 'golden_barrier_dome') {
    const domeMat = createMonumentMaterial(T, monumentTheme, {
      variant: 'gold',
      emissiveBoost: '#453208',
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
      side: T.DoubleSide,
      anchor
    });
    const ribMat = createMonumentMaterial(T, monumentTheme, {
      variant: 'gold',
      emissiveBoost: '#5a420c',
      transparent: true,
      opacity: 0.80,
      anchor
    });
    const shell = new T.Mesh(new T.IcosahedronGeometry(1.45, 1), domeMat);
    shell.position.set(0, 0.95, 0);
    const wire = new T.Mesh(new T.TorusGeometry(1.38, 0.035, 6, 20), ribMat);
    wire.rotation.x = Math.PI / 2;
    wire.position.set(0, 0.16, 0);
    const arch1 = new T.Mesh(new T.TorusGeometry(1.42, 0.03, 6, 18, Math.PI), ribMat);
    arch1.position.set(0, 0.16, 0);
    const arch2 = arch1.clone();
    arch2.rotation.y = Math.PI / 2;
    g.add(shell, wire, arch1, arch2);
    animatedHooks.push((elapsed) => {
      domeMat.opacity = 0.26 + Math.sin(elapsed * 2.2) * 0.08;
      if (domeMat.uniforms?.uOpacity) domeMat.uniforms.uOpacity.value = domeMat.opacity;
    });
  } else if (NPC_PROP_TYPES.has(type)) {
    const npc = buildNpcBody(T, type, monumentTheme);
    g.add(npc);
    if (prop.loreId) {
      const isAstralMarker = type === 'sofia_astral';
      const marker = new T.Mesh(
        new T.OctahedronGeometry(0.068, 0),
        createMonumentMaterial(T, monumentTheme, {
          variant: isAstralMarker ? 'mech' : 'gold',
          emissiveBoost: isAstralMarker ? '#246674' : '#3a2c0c',
          anchor
        })
      );
      marker.position.set(0, 1.38, 0);
      marker.userData = { ignoreOcclusion: true };
      marker.raycast = () => {};
      g.add(marker);
      animatedHooks.push((elapsed) => {
        if (!g.visible) return;
        marker.position.y = 1.38 + Math.sin(elapsed * 2.8) * 0.05;
        marker.rotation.y = elapsed * 1.1;
      });
    }
  } else if (SPAWNED_PROP_TYPES.has(type)) {
    const spawned = buildSpawnedPropVisual(T, type, animatedHooks);
    g.add(spawned);
  } else {
    const pillar = new T.Mesh(new T.CylinderGeometry(0.12, 0.15, 0.85, 8), creamMat);
    pillar.position.set(0, 0.425, 0);
    const cap = new T.Mesh(new T.OctahedronGeometry(0.14, 0), goldMat);
    cap.position.set(0, 0.96, 0);
    g.add(pillar, cap);
  }

  // Occlusion tagging: explicit isOccluder OR opaque non-NPC solid architectural props block illusion rays
  const NON_OCCLUDING_PROP_TYPES = new Set(['golden_barrier_dome', 'collider_ring']);
  const isPropOccluder = Boolean(prop.isOccluder);
  const isSolidArchProp =
    !prop.ignoreOcclusion &&
    !NPC_PROP_TYPES.has(type) &&
    !NON_OCCLUDING_PROP_TYPES.has(type) &&
    !SPAWNED_PROP_TYPES.has(type);
  const propOccluders = [];
  const occId = prop.occluderId || prop.id || prop.nodeId || type;
  g.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      const matTransparent = Boolean(
        child.material?.transparent ||
        (typeof child.material?.opacity === 'number' && child.material.opacity < 0.99)
      );
      if (isPropOccluder) {
        child.userData = {
          ...child.userData,
          nodeId: prop.nodeId || prop.id || type,
          occluderId: occId,
          propId: prop.id || type,
          rotatorId: prop.rotatorId ?? child.userData?.rotatorId,
          isOccluder: true
        };
        propOccluders.push(child);
      } else if (isSolidArchProp && !child.userData?.ignoreOcclusion && !matTransparent) {
        child.userData = {
          ...child.userData,
          propId: prop.id || type,
          ...(prop.nodeId ? { nodeId: prop.nodeId } : {}),
          rotatorId: prop.rotatorId ?? child.userData?.rotatorId
        };
        propOccluders.push(child);
      } else {
        child.userData = { ...child.userData, ignoreOcclusion: true };
      }
    }
  });

  // Compact tap hitbox for any lore-bearing prop (avoids swallowing adjacent walkway tiles)
  let loreHitbox = null;
  if (prop.loreId) {
    const hitGeo = new T.BoxGeometry(0.70, 1.35, 0.70);
    const hitMat = new T.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
    loreHitbox = new T.Mesh(hitGeo, hitMat);
    loreHitbox.visible = true;
    loreHitbox.position.set(0, 0.675, 0);
    loreHitbox.userData = {
      loreId: prop.loreId,
      npcId: prop.id || prop.loreId,
      pickType: 'lore',
      ignoreOcclusion: true
    };
    g.add(loreHitbox);
  }

  return { group: g, propOccluders, loreHitbox };
}

function toVec3Tuple(val, fallback = [0, 0, 0]) {
  if (Array.isArray(val)) {
    return { x: Number(val[0]) || 0, y: Number(val[1]) || 0, z: Number(val[2]) || 0 };
  }
  if (val && typeof val === 'object') {
    return { x: Number(val.x) || 0, y: Number(val.y) || 0, z: Number(val.z) || 0 };
  }
  return { x: fallback[0], y: fallback[1], z: fallback[2] };
}

function buildCrankHandleVisual(T, rotatorId, offset, monumentTheme = MONUMENT_ERA_THEMES['2026_dusk'], anchor = [0, 0, 0]) {
  const crankRoot = new T.Group();
  crankRoot.name = `rotator_crank_${rotatorId}`;
  crankRoot.position.set(offset.x, offset.y, offset.z);

  const brassMat = createMonumentMaterial(T, monumentTheme, { variant: 'gold', emissiveBoost: '#201606', anchor });
  const azulejoMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#6994e8',
    litLeftColor: '#4874d4',
    shadeRightColor: '#3758b0',
    bottomColor: '#2a4594',
    anchor
  });
  const glowMat = createMonumentMaterial(T, monumentTheme, {
    variant: 'mech',
    emissiveBoost: '#287a8c',
    anchor
  });

  // If crank is offset away from pivot, bridge back to center with horizontal brass axle
  if (Math.hypot(offset.x, offset.z) > 0.25) {
    const len = Math.hypot(offset.x, offset.z);
    const axle = new T.Mesh(new T.CylinderGeometry(0.035, 0.035, len, 6), brassMat);
    axle.position.set(-offset.x * 0.5, 0, -offset.z * 0.5);
    axle.rotation.z = Math.PI / 2;
    axle.rotation.y = Math.atan2(-offset.z, offset.x);
    axle.userData = { rotatorId, ignoreOcclusion: true };
    axle.raycast = () => {};
    crankRoot.add(axle);
  }

  const collar = new T.Mesh(new T.CylinderGeometry(0.14, 0.17, 0.12, 8), azulejoMat);
  collar.position.y = 0.06;
  const stem = new T.Mesh(new T.CylinderGeometry(0.045, 0.055, 0.42, 8), brassMat);
  stem.position.y = 0.3;

  const wheel = new T.Group();
  wheel.position.y = 0.54;
  const rim = new T.Mesh(new T.TorusGeometry(0.24, 0.032, 8, 16), brassMat);
  rim.rotation.x = Math.PI / 2;
  const spokeA = new T.Mesh(new T.BoxGeometry(0.46, 0.035, 0.05), brassMat);
  const spokeB = new T.Mesh(new T.BoxGeometry(0.05, 0.035, 0.46), brassMat);
  const centerGem = new T.Mesh(new T.OctahedronGeometry(0.085, 0), glowMat);
  centerGem.position.y = 0.05;
  wheel.add(rim, spokeA, spokeB, centerGem);

  for (const m of [collar, stem, rim, spokeA, spokeB, centerGem]) {
    m.userData = { rotatorId, ignoreOcclusion: true };
    m.raycast = () => {};
  }
  crankRoot.add(collar, stem, wheel);

  const hitMesh = new T.Mesh(
    new T.SphereGeometry(0.46, 10, 8),
    new T.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
  );
  hitMesh.position.y = 0.48;
  hitMesh.userData = { rotatorId, pickType: 'rotator', ignoreOcclusion: true };
  crankRoot.add(hitMesh);

  return { crankRoot, wheel, hitMesh };
}

const EFFECT_TYPE_SPEC_FALLBACK = {
  flash_zero7_vanish: { propType: 'zero7_silhouette', color: 0x52f0ff, duration: 0.55, kind: 'flash' },
  astral_dissolve: { propType: 'sofia_astral', color: 0x6ceee0, duration: 0.85, kind: 'dissolve' },
  shadow_retreat: { propType: 'corvo_figure', color: 0x993532, duration: 0.72, kind: 'retreat' },
  rift_leap_drop_shard: { propType: 'zero7_silhouette', color: 0x45d8ff, duration: 0.65, kind: 'leap' },
  mist_vanish: { propType: 'old_man_553', color: 0xd8e5de, duration: 0.95, kind: 'mist' },
  drop_lit_candle_vanish: { propType: 'old_man_553', color: 0xffc663, duration: 0.8, kind: 'mist' },
  drop_herbal_tea_vanish: { propType: 'old_man_553', color: 0x89d6b8, duration: 0.85, kind: 'mist' },
  unmask_to_ryan: { propType: 'zero7_silhouette', color: 0x62ecff, duration: 0.68, kind: 'unmask' },
  drop_pocket_watch_vanish: { propType: 'old_man_553', color: 0xe6ba5e, duration: 0.85, kind: 'mist' }
};

function buildCutawayAlcove(T, variantIdx, monumentTheme, anchor) {
  const alcove = new T.Group();

  const parapetMat = createMonumentMaterial(T, monumentTheme, { variant: 'parapet', anchor });
  const deepMat = createMonumentMaterial(T, monumentTheme, {
    variant: 'alcove',
    topColor: monumentTheme.alcoveDeep,
    litLeftColor: monumentTheme.alcoveDeep,
    shadeRightColor: monumentTheme.alcoveDeep,
    bottomColor: monumentTheme.alcoveDeep,
    anchor
  });
  const floorMat = createMonumentMaterial(T, monumentTheme, {
    topColor: monumentTheme.alcoveFloor,
    litLeftColor: monumentTheme.alcoveFloor,
    shadeRightColor: '#489eb8',
    bottomColor: '#3a7f99',
    emissiveBoost: '#0a222a',
    anchor
  });
  const sconceMat = createMonumentMaterial(T, monumentTheme, {
    topColor: '#ffffff',
    litLeftColor: monumentTheme.sconceGlow,
    shadeRightColor: monumentTheme.goldTrim,
    emissiveBoost: '#785a18',
    anchor
  });

  // Sculpted cream arch surround protruding cleanly on the tower front face (+Z in alcove frame)
  const archFrame = new T.Mesh(
    createRoundArchSpandrelGeo(T, 0.84, 1.38, 0.14, 0.29, 0.92),
    parapetMat
  );
  archFrame.position.set(0, 0, 0.055);

  const deepWall = new T.Mesh(new T.PlaneGeometry(0.60, 1.24), deepMat);
  deepWall.position.set(0, 0.62, 0.008);

  const floorSill = new T.Mesh(new T.BoxGeometry(0.76, 0.085, 0.30), floorMat);
  floorSill.position.set(0, 0.02, 0.11);

  alcove.add(archFrame, deepWall, floorSill);

  const sconceGeo = new T.OctahedronGeometry(0.048, 0);
  const addMiniFigurine = (fx, fy, fz, robeColors) => {
    const fg = new T.Group();
    fg.position.set(fx, fy, fz);
    const robe = new T.Mesh(
      new T.CylinderGeometry(0.032, 0.068, 0.22, 10),
      makeFigureMonMat(T, robeColors[0], robeColors[1], robeColors[2])
    );
    robe.position.y = 0.11;
    const head = new T.Mesh(new T.SphereGeometry(0.044, 10, 8), makePorcelainHeadMat(T, false));
    head.position.y = 0.255;
    fg.add(robe, head);
    alcove.add(fg);
  };

  if (variantIdx % 3 === 0) {
    // 7-step winding mini staircase inside glowing cutaway alcove + tiny faceless figure
    for (let s = 0; s < 7; s++) {
      const step = new T.Mesh(new T.BoxGeometry(0.11, 0.065, 0.12), parapetMat);
      step.position.set(-0.20 + s * 0.065, 0.09 + s * 0.075, 0.08 + (s % 2) * 0.02);
      alcove.add(step);
    }
    const sconceL = new T.Mesh(sconceGeo, sconceMat);
    sconceL.position.set(-0.20, 0.78, 0.08);
    const sconceR = new T.Mesh(sconceGeo, sconceMat);
    sconceR.position.set(0.20, 0.78, 0.08);
    alcove.add(sconceL, sconceR);
    addMiniFigurine(0.18, 0.065, 0.11, ['#f8b8c8', '#e6788e', '#ba587c']);
  } else if (variantIdx % 3 === 1) {
    // Macau tea nook: round pedestal table + celadon pot + twin sconces + tiny ivory elder
    const table = new T.Mesh(new T.CylinderGeometry(0.11, 0.07, 0.13, 10), parapetMat);
    table.position.set(0.02, 0.12, 0.11);
    const pot = new T.Mesh(
      new T.SphereGeometry(0.04, 8, 6),
      createMonumentMaterial(T, monumentTheme, { variant: 'mech', anchor })
    );
    pot.position.set(0.02, 0.21, 0.11);
    for (const sx of [-0.18, 0.18]) {
      const sc = new T.Mesh(sconceGeo, sconceMat);
      sc.position.set(sx, 0.72, 0.08);
      alcove.add(sc);
    }
    alcove.add(table, pot);
    addMiniFigurine(-0.14, 0.065, 0.11, ['#fffcf5', '#e4eaf8', '#aab8e4']);
  } else {
    // Archival bookshelf nook: colorful pastel spines + warm sconce + tiny scholar figurine
    const shelfCase = new T.Mesh(new T.BoxGeometry(0.30, 0.56, 0.08), parapetMat);
    shelfCase.position.set(-0.10, 0.34, 0.055);
    const spineColors = [
      ['#ffa8b8', '#f6b4c6', '#c97da8'],
      ['#bbf5e8', '#6fe0cc', '#52b8be'],
      ['#fff2be', '#f6cf7d', '#d9a452']
    ];
    for (let r = 0; r < 3; r++) {
      const sc = spineColors[r];
      const bookRow = new T.Mesh(
        new T.BoxGeometry(0.24, 0.085, 0.06),
        makeFigureMonMat(T, sc[0], sc[1], sc[2])
      );
      bookRow.position.set(-0.10, 0.19 + r * 0.15, 0.075);
      alcove.add(bookRow);
    }
    const sc = new T.Mesh(sconceGeo, sconceMat);
    sc.position.set(0.18, 0.76, 0.08);
    alcove.add(shelfCase, sc);
    addMiniFigurine(0.14, 0.065, 0.12, ['#6d8fe0', '#486bc2', '#35509e']);
  }

  return alcove;
}

function buildStageMonumentArchitecture(T, levelDef, monumentTheme, archCtx = {}) {
  const archRoot = new T.Group();
  archRoot.name = `monument_arch_${levelDef?.id ?? 'stage'}`;

  const anchor = archCtx.anchor || [0, 0, 0];
  const nodeToRotator = archCtx.nodeToRotator || new Map();
  const goalNodeIds = archCtx.goalNodeIds || new Set();

  const towerMat = createMonumentMaterial(T, monumentTheme, { anchor });
  const parapetMat = createMonumentMaterial(T, monumentTheme, { variant: 'parapet', anchor });
  const blindRecessMat = createMonumentMaterial(T, monumentTheme, {
    topColor: monumentTheme.shadeRightColor,
    litLeftColor: monumentTheme.shadeRightColor,
    shadeRightColor: monumentTheme.alcoveDeep,
    bottomColor: monumentTheme.alcoveDeep,
    anchor
  });

  const nodes = levelDef?.nodes || [];
  const props = levelDef?.props || [];
  const nodePosMap = new Map();
  for (const n of nodes) nodePosMap.set(n.id, n);

  const seamNodeIds = new Set();
  const seamSightlines = [];
  for (const s of levelDef?.seams || []) {
    const aId = s.nodeA ?? s.from;
    const bId = s.nodeB ?? s.to;
    if (aId) seamNodeIds.add(aId);
    if (bId) seamNodeIds.add(bId);
    if (typeof s?.targetAzimuthDeg === 'number') {
      const dir = getIsoRayDirection(s.targetAzimuthDeg);
      const pts = [];
      const addPt = (raw) => {
        if (!raw) return;
        const t = toVec3Tuple(raw);
        if (Number.isFinite(t.x) && Number.isFinite(t.y) && Number.isFinite(t.z)) {
          pts.push(t);
        }
      };
      addPt(s.seamA ?? s.endpointA);
      addPt(s.seamB ?? s.endpointB);
      if (pts.length === 0) {
        const na = aId ? nodePosMap.get(aId) : null;
        const nb = bId ? nodePosMap.get(bId) : null;
        if (na) pts.push({ x: na.x, y: na.y + 0.5, z: na.z });
        if (nb) pts.push({ x: nb.x, y: nb.y + 0.5, z: nb.z });
      }
      if (pts.length === 2) {
        pts.push({
          x: (pts[0].x + pts[1].x) * 0.5,
          y: (pts[0].y + pts[1].y) * 0.5,
          z: (pts[0].z + pts[1].z) * 0.5
        });
      }
      if (pts.length > 0) {
        seamSightlines.push({ aId, bId, dir, pts });
      }
    }
  }

  const rayIntersectsBox = (origin, dir, minX, maxX, minY, maxY, minZ, maxZ) => {
    let tMin = 0.42;
    let tMax = 20;
    const slab = (o, d, bMin, bMax) => {
      if (Math.abs(d) < 1e-6) {
        return o >= bMin && o <= bMax;
      }
      let t1 = (bMin - o) / d;
      let t2 = (bMax - o) / d;
      if (t1 > t2) [t1, t2] = [t2, t1];
      tMin = Math.max(tMin, t1);
      tMax = Math.min(tMax, t2);
      return tMin <= tMax;
    };
    return (
      slab(origin.x, dir.x, minX, maxX) &&
      slab(origin.y, dir.y, minY, maxY) &&
      slab(origin.z, dir.z, minZ, maxZ)
    );
  };

  const isBlockingSeamSightline = (cx, cz, minY, maxY, halfExtX = 0.5, halfExtZ = 0.5, ownNodeIds = null) => {
    const padXZ = 0.14;
    const padY = 0.08;
    for (const sl of seamSightlines) {
      if (ownNodeIds && (ownNodeIds.has(sl.aId) || ownNodeIds.has(sl.bId))) {
        continue;
      }
      for (const pt of sl.pts) {
        if (
          rayIntersectsBox(
            pt,
            sl.dir,
            cx - halfExtX - padXZ,
            cx + halfExtX + padXZ,
            minY - padY,
            maxY + padY,
            cz - halfExtZ - padXZ,
            cz + halfExtZ + padXZ
          )
        ) {
          return true;
        }
      }
    }
    return false;
  };

  // Record occupied horizontal footprints across ALL nodes, rotator 4-turn orbits, and props
  const allOccupancy = [];
  for (const n of nodes) {
    const isDynamic = Boolean(n.groupId || nodeToRotator.has(n.id));
    allOccupancy.push({ x: n.x, y: n.y, z: n.z, isDynamic });
    const rotRec = nodeToRotator.get(n.id);
    if (rotRec) {
      for (let q = 0; q < 4; q++) {
        const rp = rotatePointAroundPivotY(n, rotRec.pivot, q);
        allOccupancy.push({ x: rp.x, y: rp.y, z: rp.z, isDynamic: true });
      }
    }
  }
  const propOccupancy = props.map((p) => {
    const fallback = p.nodeId && nodePosMap.has(p.nodeId) ? nodePosMap.get(p.nodeId) : { x: 0, y: 0, z: 0 };
    return {
      x: p.x !== undefined ? p.x : fallback.x,
      y: p.y !== undefined ? p.y : fallback.y + 0.5,
      z: p.z !== undefined ? p.z : fallback.z
    };
  });

  const hasObstacleInColumn = (cx, cz, minY, maxY, onlyDynamic = false) => {
    for (const o of allOccupancy) {
      if (onlyDynamic && !o.isDynamic) continue;
      if (Math.abs(o.x - cx) < 0.72 && Math.abs(o.z - cz) < 0.72 && o.y >= minY && o.y <= maxY) {
        return true;
      }
    }
    if (!onlyDynamic) {
      for (const p of propOccupancy) {
        if (Math.abs(p.x - cx) < 0.78 && Math.abs(p.z - cz) < 0.78 && p.y >= minY && p.y <= maxY) {
          return true;
        }
      }
    }
    return false;
  };

  // Edge connections (never place a parapet curb across a connected walkway edge)
  const blockedEdgeDirs = new Set();
  for (const e of [...(levelDef?.edges || []), ...(levelDef?.mechanismEdges || [])]) {
    const aId = Array.isArray(e) ? e[0] : e?.from ?? e?.a;
    const bId = Array.isArray(e) ? e[1] : e?.to ?? e?.b;
    const na = nodePosMap.get(aId);
    const nb = nodePosMap.get(bId);
    if (!na || !nb) continue;
    const dx = nb.x - na.x;
    const dz = nb.z - na.z;
    if (Math.abs(dx) + Math.abs(dz) <= 1.25) {
      if (dx > 0.4) {
        blockedEdgeDirs.add(`${aId}:+x`);
        blockedEdgeDirs.add(`${bId}:-x`);
      } else if (dx < -0.4) {
        blockedEdgeDirs.add(`${aId}:-x`);
        blockedEdgeDirs.add(`${bId}:+x`);
      }
      if (dz > 0.4) {
        blockedEdgeDirs.add(`${aId}:+z`);
        blockedEdgeDirs.add(`${bId}:-z`);
      } else if (dz < -0.4) {
        blockedEdgeDirs.add(`${aId}:-z`);
        blockedEdgeDirs.add(`${bId}:+z`);
      }
    }
  }

  const rotatorPivots = (levelDef?.rotators || []).map((r) => toVec3Tuple(r.pivot || [0, 0, 0]));

  // 1. Group static nodes by XZ column & extend downward vertical tower piers (7.2..10.5 deep, 0.998 wide)
  const staticColumns = new Map();
  for (const n of nodes) {
    if (n.groupId || nodeToRotator.has(n.id)) continue;
    const colKey = `${Math.round(n.x * 2)}:${Math.round(n.z * 2)}`;
    if (!staticColumns.has(colKey)) staticColumns.set(colKey, []);
    staticColumns.get(colKey).push(n);
  }

  const builtPiers = [];
  const builtPierMap = new Map();

  for (const [colKey, colNodes] of staticColumns.entries()) {
    colNodes.sort((a, b) => a.y - b.y);
    const baseNode = colNodes[0];
    const hasLowerDynamic = hasObstacleInColumn(baseNode.x, baseNode.z, -99, baseNode.y - 0.15, true);
    const hasLowerProp = propOccupancy.some(
      (p) => Math.abs(p.x - baseNode.x) < 0.72 && Math.abs(p.z - baseNode.z) < 0.72 && p.y < baseNode.y - 0.2
    );
    if (hasLowerDynamic || hasLowerProp) continue;

    const hSeed = Math.abs(Math.sin(baseNode.x * 12.9898 + baseNode.z * 78.233) * 43758.5453) % 1;
    const pierDepth = 7.2 + hSeed * 3.3;
    const pierMinY = baseNode.y - 0.5 - pierDepth;
    const pierMaxY = baseNode.y - 0.5;
    const colNodeIdList = colNodes.map((cn) => cn.id);
    const colNodeIdSet = new Set(colNodeIdList);

    if (isBlockingSeamSightline(baseNode.x, baseNode.z, pierMinY, pierMaxY, 0.5, 0.5, colNodeIdSet)) {
      continue;
    }

    const colUserData = {
      isSupportPier: true,
      nodeId: baseNode.id,
      pierColNodeIds: colNodeIdList
    };

    const pier = new T.Mesh(new T.BoxGeometry(0.998, pierDepth, 0.998), towerMat);
    pier.position.set(baseNode.x, baseNode.y - 0.5 - pierDepth * 0.5, baseNode.z);
    pier.userData = { ...colUserData };
    archRoot.add(pier);

    // Flush pier-to-block stone collar eliminating hairline gaps beneath static walkable blocks
    const isRotatorHub =
      /hub/i.test(String(baseNode.id || '')) ||
      rotatorPivots.some(
        (pv) => Math.abs(pv.x - baseNode.x) < 0.6 && Math.abs(pv.z - baseNode.z) < 0.6 && Math.abs(pv.y - baseNode.y) < 0.6
      );
    const hasSeamInColumn = colNodes.some((cn) => seamNodeIds.has(cn.id));
    if (!isRotatorHub && !seamNodeIds.has(baseNode.id) && !hasSeamInColumn) {
      const collar = new T.Mesh(new T.BoxGeometry(1.006, 0.055, 1.006), parapetMat);
      collar.position.set(baseNode.x, baseNode.y - 0.525, baseNode.z);
      collar.userData = { ...colUserData };
      archRoot.add(collar);
    }

    // Horizontal architectural cornices below deck level (strictly <= y - 1.55, skipping neighbor contacts)
    for (const cy of [baseNode.y - 1.55, baseNode.y - 4.15]) {
      const touchesNeighbor = allOccupancy.some(
        (o) =>
          (Math.abs(o.x - baseNode.x) > 0.1 || Math.abs(o.z - baseNode.z) > 0.1) &&
          Math.abs(o.x - baseNode.x) <= 1.04 &&
          Math.abs(o.z - baseNode.z) <= 1.04 &&
          o.y + 0.5 >= cy - 0.05 &&
          o.y - 0.5 <= cy + 0.05
      );
      if (touchesNeighbor) continue;
      const cornice = new T.Mesh(new T.BoxGeometry(1.028, 0.085, 1.028), parapetMat);
      cornice.position.set(baseNode.x, cy, baseNode.z);
      cornice.userData = { ...colUserData };
      archRoot.add(cornice);
    }

    const plinthFoot = new T.Mesh(new T.BoxGeometry(1.04, 0.22, 1.04), parapetMat);
    plinthFoot.position.set(baseNode.x, baseNode.y - 0.5 - pierDepth + 0.11, baseNode.z);
    plinthFoot.userData = { ...colUserData };
    archRoot.add(plinthFoot);

    const rec = {
      key: colKey,
      node: baseNode,
      rx: baseNode.x,
      ry: baseNode.y,
      rz: baseNode.z,
      depth: pierDepth
    };
    builtPiers.push(rec);
    builtPierMap.set(colKey, rec);
  }

  // 2. Vaulted Round Archways spanning 2-unit gaps between aligned static tower columns
  const spannedGaps = new Set();
  for (let i = 0; i < builtPiers.length; i++) {
    const p1 = builtPiers[i];
    for (let j = i + 1; j < builtPiers.length; j++) {
      const p2 = builtPiers[j];
      if (Math.abs(p1.ry - p2.ry) > 0.1) continue;
      const dx = Math.abs(p1.rx - p2.rx);
      const dz = Math.abs(p1.rz - p2.rz);
      const spanX = Math.abs(dx - 2) < 0.08 && dz < 0.08;
      const spanZ = Math.abs(dz - 2) < 0.08 && dx < 0.08;
      if (!spanX && !spanZ) continue;

      const mx = (p1.rx + p2.rx) * 0.5;
      const mz = (p1.rz + p2.rz) * 0.5;
      const gapKey = `${Math.round(mx * 2)}:${Math.round(p1.ry * 2)}:${Math.round(mz * 2)}`;
      if (spannedGaps.has(gapKey)) continue;
      spannedGaps.add(gapKey);

      if (hasObstacleInColumn(mx, mz, p1.ry - 4.2, p1.ry + 1.4, false)) continue;
      if (isBlockingSeamSightline(mx, mz, p1.ry - 4.05, p1.ry - 0.5, spanZ ? 0.48 : 0.51, spanZ ? 0.51 : 0.48)) {
        continue;
      }

      const archMesh = new T.Mesh(
        createRoundArchSpandrelGeo(T, 1.01, 2.35, 0.94, 0.41, 1.48),
        towerMat
      );
      archMesh.position.set(mx, p1.ry - 2.85, mz);
      if (spanZ) archMesh.rotation.y = Math.PI / 2;
      archMesh.userData = { isSupportArch: true };

      const archBand = new T.Mesh(new T.BoxGeometry(spanZ ? 0.96 : 1.01, 0.08, spanZ ? 1.01 : 0.96), parapetMat);
      archBand.position.set(mx, p1.ry - 0.54, mz);
      archBand.userData = { isSupportArch: true };
      archRoot.add(archMesh, archBand);
    }
  }

  // 3. Seam-Safe Cream Parapet Curbs (h = 0.095) on exposed static edges
  const curbDirs = [
    { key: '+x', dx: 1, dz: 0, px: 0.464, pz: 0, w: 0.072, d: 0.92 },
    { key: '-x', dx: -1, dz: 0, px: -0.464, pz: 0, w: 0.072, d: 0.92 },
    { key: '+z', dx: 0, dz: 1, px: 0, pz: 0.464, w: 0.92, d: 0.072 },
    { key: '-z', dx: 0, dz: -1, px: 0, pz: -0.464, w: 0.92, d: 0.072 }
  ];

  for (const n of nodes) {
    if (n.groupId || nodeToRotator.has(n.id)) continue;
    if (
      n.isStair ||
      n.isGoal ||
      n.goalForActor ||
      n.isStagePortal ||
      n.stagePortal ||
      n.style === 'stage_portal_arch' ||
      n.style === 'hexagram_lotus_altar' ||
      goalNodeIds.has(n.id) ||
      seamNodeIds.has(n.id)
    ) {
      continue;
    }
    const propNearby = propOccupancy.some(
      (p) => Math.abs(p.x - n.x) < 0.85 && Math.abs(p.z - n.z) < 0.85 && Math.abs(p.y - (n.y + 0.5)) < 1.25
    );
    if (propNearby) continue;

    for (const dir of curbDirs) {
      if (blockedEdgeDirs.has(`${n.id}:${dir.key}`)) continue;
      if (hasObstacleInColumn(n.x + dir.dx, n.z + dir.dz, n.y - 1.25, n.y + 1.25, false)) continue;

      const curb = new T.Mesh(new T.BoxGeometry(dir.w, 0.095, dir.d), parapetMat);
      curb.position.set(n.x + dir.px, n.y + 0.5 + 0.0475, n.z + dir.pz);
      curb.userData = { ignoreOcclusion: true };
      archRoot.add(curb);
    }
  }

  // 4. Select 1–3 front-facing static piers for Lit Cutaway Alcoves & blind vaulted arch wall reliefs
  const frontCandidates = [];
  for (const rec of builtPiers) {
    const clearZ = !hasObstacleInColumn(rec.rx, rec.rz + 1, rec.ry - 4.4, rec.ry + 0.4, false);
    const clearX = !hasObstacleInColumn(rec.rx + 1, rec.rz, rec.ry - 4.4, rec.ry + 0.4, false);
    if (!clearZ && !clearX) continue;
    const face = clearZ ? '+z' : '+x';
    const score = rec.rx + rec.rz - (seamNodeIds.has(rec.node.id) ? 3.5 : 0);
    frontCandidates.push({ rec, face, score });
  }
  frontCandidates.sort((a, b) => b.score - a.score);

  const chosenAlcoves = [];
  for (const cand of frontCandidates) {
    if (chosenAlcoves.length >= 3) break;
    const spaced = chosenAlcoves.every(
      (c) => Math.abs(c.rec.rx - cand.rec.rx) + Math.abs(c.rec.rz - cand.rec.rz) >= 2
    );
    if (spaced || chosenAlcoves.length === 0) {
      chosenAlcoves.push(cand);
    }
  }
  if (chosenAlcoves.length === 0 && builtPiers.length > 0) {
    const fallback = [...builtPiers].sort((a, b) => (b.rx + b.rz) - (a.rx + a.rz))[0];
    chosenAlcoves.push({ rec: fallback, face: '+z', score: 0 });
  }

  const alcovePierKeys = new Set(chosenAlcoves.map((a) => a.rec.key));

  chosenAlcoves.forEach((entry, idx) => {
    const { rec, face } = entry;
    const alcove = buildCutawayAlcove(T, idx, monumentTheme, anchor);
    if (face === '+z') {
      alcove.position.set(rec.rx, rec.ry - 2.98, rec.rz + 0.499);
    } else {
      alcove.position.set(rec.rx + 0.499, rec.ry - 2.98, rec.rz);
      alcove.rotation.y = Math.PI / 2;
    }
    alcove.traverse((m) => {
      if (m.isMesh) m.userData = { ...m.userData, ignoreOcclusion: true };
    });
    archRoot.add(alcove);
  });

  // Add subtle vaulted blind arch frames on exposed non-alcove tower walls
  for (const cand of frontCandidates) {
    if (alcovePierKeys.has(cand.rec.key)) continue;
    if (Math.abs(Math.round(cand.rec.rx + cand.rec.rz)) % 2 !== 0) continue;
    const { rec, face } = cand;
    const blindGroup = new T.Group();
    const frame = new T.Mesh(createRoundArchSpandrelGeo(T, 0.86, 1.56, 0.055, 0.27, 1.04), parapetMat);
    frame.position.set(0, 0, 0.025);
    const backing = new T.Mesh(new T.PlaneGeometry(0.54, 1.32), blindRecessMat);
    backing.position.set(0, 0.66, 0.008);
    blindGroup.add(frame, backing);
    if (face === '+z') {
      blindGroup.position.set(rec.rx, rec.ry - 3.35, rec.rz + 0.499);
    } else {
      blindGroup.position.set(rec.rx + 0.499, rec.ry - 3.35, rec.rz);
      blindGroup.rotation.y = Math.PI / 2;
    }
    blindGroup.traverse((m) => {
      if (m.isMesh) m.userData = { ...m.userData, ignoreOcclusion: true };
    });
    archRoot.add(blindGroup);
  }

  // 5. Ground all off-node solid props & NPCs with stepped cream terrace plinths + downward piers
  const NON_SOLID_PROP_TYPES = new Set(['golden_barrier_dome', 'collider_ring']);
  const GRAND_FACADE_TYPES = new Set(['puiching_arcade', 'st_pauls_full', 'st_pauls_ruin', 'st_pauls_ruin_wall']);
  const WIDE_WALL_MEDIUM_TYPES = new Set(['guia_fort_1808', 'monte_cannon_scaffold', 'qing_border_gate']);
  const MEDIUM_PROP_TYPES = new Set([
    'guia_fort_1808',
    'paifang',
    'ama_ship_rock',
    'monte_cannon_scaffold',
    'qing_border_gate',
    'ka_ho_fort',
    'bunker_arches'
  ]);

  const clampAabbToObstacles = (rawBox, anchorX, anchorZ, minY, maxY, opts = {}) => {
    const clearance = opts.clearance ?? 0.02;
    const anchorMargin = opts.anchorMargin ?? 0.04;
    const minSpan = opts.minSpan ?? 0.36;
    const skipAnchorInsideLower = Boolean(opts.skipAnchorInsideLower);
    const box = { ...rawBox };

    for (let pass = 0; pass < 3; pass++) {
      let changed = false;
      for (const o of allOccupancy) {
        if (o.y + 0.5 < minY || o.y - 0.5 > maxY) continue;
        const nx0 = o.x - 0.5 - clearance;
        const nx1 = o.x + 0.5 + clearance;
        const nz0 = o.z - 0.5 - clearance;
        const nz1 = o.z + 0.5 + clearance;
        if (box.maxX <= nx0 || box.minX >= nx1 || box.maxZ <= nz0 || box.minZ >= nz1) continue;

        const anchorInside =
          anchorX >= nx0 - anchorMargin &&
          anchorX <= nx1 + anchorMargin &&
          anchorZ >= nz0 - anchorMargin &&
          anchorZ <= nz1 + anchorMargin;
        if (skipAnchorInsideLower && anchorInside && o.y + 0.5 <= maxY - 0.45) {
          continue;
        }

        const spanX = Math.max(0.05, box.maxX - box.minX);
        const spanZ = Math.max(0.05, box.maxZ - box.minZ);
        const candidates = [];
        if (box.maxX > nx0 && nx0 - box.minX >= minSpan && (anchorInside || anchorX <= nx0 - anchorMargin)) {
          candidates.push({ edge: 'maxX', val: nx0, loss: (box.maxX - nx0) * spanZ });
        }
        if (box.minX < nx1 && box.maxX - nx1 >= minSpan && (anchorInside || anchorX >= nx1 + anchorMargin)) {
          candidates.push({ edge: 'minX', val: nx1, loss: (nx1 - box.minX) * spanZ });
        }
        if (box.maxZ > nz0 && nz0 - box.minZ >= minSpan && (anchorInside || anchorZ <= nz0 - anchorMargin)) {
          candidates.push({ edge: 'maxZ', val: nz0, loss: (box.maxZ - nz0) * spanX });
        }
        if (box.minZ < nz1 && box.maxZ - nz1 >= minSpan && (anchorInside || anchorZ >= nz1 + anchorMargin)) {
          candidates.push({ edge: 'minZ', val: nz1, loss: (nz1 - box.minZ) * spanX });
        }

        if (candidates.length > 0) {
          candidates.sort((a, b) => a.loss - b.loss);
          const pick = candidates[0];
          box[pick.edge] = pick.val;
          changed = true;
        }
      }
      if (!changed) break;
    }
    return box;
  };

  for (const p of props) {
    const pType = String(p?.type || '');
    if (NON_SOLID_PROP_TYPES.has(pType)) continue;
    if (p.groupId || p.rotatorId || (p.nodeId && nodeToRotator.has(p.nodeId))) continue;

    const fb = p.nodeId && nodePosMap.has(p.nodeId) ? nodePosMap.get(p.nodeId) : { x: 0, y: 0, z: 0 };
    const px = p.x !== undefined ? Number(p.x) : Number(fb.x) || 0;
    const py = p.y !== undefined ? Number(p.y) : (Number(fb.y) || 0) + 0.5;
    const pz = p.z !== undefined ? Number(p.z) : Number(fb.z) || 0;

    const onStaticNode = nodes.some((n) => {
      if (n.groupId || nodeToRotator.has(n.id)) return false;
      return Math.abs(n.x - px) < 0.34 && Math.abs(n.z - pz) < 0.34 && Math.abs(n.y + 0.5 - py) < 0.3;
    });
    if (onStaticNode) continue;

    const pScale = Number.isFinite(Number(p.scale)) && Number(p.scale) > 0 ? Number(p.scale) : 1;
    const rotSwap = Math.abs(Math.sin(Number(p.rotY) || 0)) > 0.707;

    let capHalfW = 0.52 * pScale;
    let capBackD = 0.52 * pScale;
    let capFrontD = 0.52 * pScale;
    let pierHalfW = 0.52 * pScale;
    let pierBackD = 0.52 * pScale;
    let pierFrontD = 0.52 * pScale;

    if (GRAND_FACADE_TYPES.has(pType)) {
      capHalfW = (pType === 'puiching_arcade' ? 1.50 : 1.325) * pScale;
      pierHalfW = 1.325 * pScale;
      if (pType === 'st_pauls_full') {
        capHalfW = 1.40 * pScale;
        pierHalfW = 1.38 * pScale;
        capBackD = 3.58 * pScale;
        capFrontD = 0.62 * pScale;
        pierBackD = 3.54 * pScale;
        pierFrontD = 0.58 * pScale;
      } else if (pType === 'st_pauls_ruin' || pType === 'st_pauls_ruin_wall') {
        capHalfW = 1.38 * pScale;
        pierHalfW = 1.35 * pScale;
        capBackD = 1.18 * pScale;
        capFrontD = 0.62 * pScale;
        pierBackD = 1.14 * pScale;
        pierFrontD = 0.58 * pScale;
      } else {
        capBackD = 0.65 * pScale;
        capFrontD = 0.65 * pScale;
        pierBackD = 0.65 * pScale;
        pierFrontD = 0.65 * pScale;
      }
    } else if (MEDIUM_PROP_TYPES.has(pType)) {
      capHalfW = (WIDE_WALL_MEDIUM_TYPES.has(pType) ? 1.00 : 0.725) * pScale;
      capBackD = 0.575 * pScale;
      capFrontD = 0.575 * pScale;
      pierHalfW = 0.725 * pScale;
      pierBackD = 0.575 * pScale;
      pierFrontD = 0.575 * pScale;
    }

    if (rotSwap) {
      [capHalfW, capBackD] = [Math.max(capBackD, capFrontD), capHalfW];
      capFrontD = capBackD;
      [pierHalfW, pierBackD] = [Math.max(pierBackD, pierFrontD), pierHalfW];
      pierFrontD = pierBackD;
    }

    const pSeed = Math.abs(Math.sin(px * 19.37 + pz * 47.13 + py * 7.1) * 43758.5453) % 1;
    const capTotalH = 0.32;
    const capUpperH = 0.14;
    const capLowerH = capTotalH - capUpperH;
    const pierDepth = 7.25 + pSeed * 0.45;
    const capBottomY = py - capTotalH;
    const pierBottomY = py - capTotalH - pierDepth;

    const rawCap = {
      minX: px - capHalfW,
      maxX: px + capHalfW,
      minZ: pz - capBackD,
      maxZ: pz + capFrontD
    };
    const capBox = clampAabbToObstacles(rawCap, px, pz, pierBottomY - 0.05, py + 0.05, {
      skipAnchorInsideLower: true,
      clearance: 0.025,
      minSpan: 0.42
    });
    // Ensure terrace cap itself has zero overlap even inside its own upper Y band
    const capSafeBox = clampAabbToObstacles(capBox, px, pz, capBottomY - 0.03, py + 0.05, {
      skipAnchorInsideLower: false,
      clearance: 0.025,
      minSpan: 0.42
    });

    const capW = Math.max(0.36, capSafeBox.maxX - capSafeBox.minX);
    const capD = Math.max(0.36, capSafeBox.maxZ - capSafeBox.minZ);
    const capCx = (capSafeBox.minX + capSafeBox.maxX) * 0.5;
    const capCz = (capSafeBox.minZ + capSafeBox.maxZ) * 0.5;

    const propPierMeta = {
      isSupportPier: true,
      propId: p.id || pType,
      ...(p.nodeId ? { nodeId: p.nodeId } : {})
    };

    const capUpper = new T.Mesh(new T.BoxGeometry(capW, capUpperH, capD), parapetMat);
    capUpper.position.set(capCx, py - capUpperH * 0.5, capCz);
    capUpper.userData = { ...propPierMeta };
    archRoot.add(capUpper);

    const lowerStepW = Math.max(0.30, capW - 0.04);
    const lowerStepD = Math.max(0.30, capD - 0.04);
    const capLower = new T.Mesh(new T.BoxGeometry(lowerStepW, capLowerH, lowerStepD), parapetMat);
    capLower.position.set(capCx, py - capUpperH - capLowerH * 0.5, capCz);
    capLower.userData = { ...propPierMeta };
    archRoot.add(capLower);

    const rawPier = {
      minX: Math.max(capSafeBox.minX + 0.03, px - pierHalfW + 0.02),
      maxX: Math.min(capSafeBox.maxX - 0.03, px + pierHalfW - 0.02),
      minZ: Math.max(capSafeBox.minZ + 0.03, pz - pierBackD + 0.02),
      maxZ: Math.min(capSafeBox.maxZ - 0.03, pz + pierFrontD - 0.02)
    };
    const pierBox = clampAabbToObstacles(rawPier, px, pz, pierBottomY - 0.05, capBottomY + 0.02, {
      skipAnchorInsideLower: false,
      clearance: 0.025,
      minSpan: 0.34
    });
    const pierW = Math.max(0.28, pierBox.maxX - pierBox.minX);
    const pierD = Math.max(0.28, pierBox.maxZ - pierBox.minZ);
    const pierCx = (pierBox.minX + pierBox.maxX) * 0.5;
    const pierCz = (pierBox.minZ + pierBox.maxZ) * 0.5;

    if (!isBlockingSeamSightline(pierCx, pierCz, pierBottomY, capBottomY, pierW * 0.5, pierD * 0.5)) {
      const propPier = new T.Mesh(new T.BoxGeometry(pierW, pierDepth, pierD), towerMat);
      propPier.position.set(pierCx, capBottomY - pierDepth * 0.5, pierCz);
      propPier.userData = { ...propPierMeta };
      archRoot.add(propPier);

      // Subtle horizontal stone cornices along the prop pier flush within clamped XZ bounds
      const corW = Math.min(capW, pierW + 0.03);
      const corD = Math.min(capD, pierD + 0.03);
      for (const cy of [py - 1.75, py - 4.35]) {
        const cor = new T.Mesh(new T.BoxGeometry(corW, 0.075, corD), parapetMat);
        cor.position.set(pierCx, cy, pierCz);
        cor.userData = { ...propPierMeta };
        archRoot.add(cor);
      }
    }
  }

  // Only surface curbs, cutaway alcoves, and blind frames ignore occlusion rays; real solid piers/arches remain occluders
  archRoot.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
      if (obj.userData?.ignoreOcclusion === true) {
        obj.raycast = () => {};
      }
    }
  });

  return archRoot;
}

export function buildLevelScene(THREEArg, levelDef) {
  const T = resolveTHREE(THREEArg);
  const root = new T.Group();
  root.name = `level_${levelDef?.id ?? 'unknown'}`;

  const themeKey = levelDef?.themeKey || levelDef?.era || '2026_dusk';
  let activeBgMode = setMonumentBgMode(levelDef?.bgMode ?? getMonumentBgMode());
  const monumentTheme = resolveMonumentTheme(themeKey, activeBgMode);
  const ct = toVec3Tuple(levelDef?.cameraTarget, [0, 0, 0]);
  const levelAnchor = [ct.x, ct.y, ct.z];

  const pickableMeshes = [];
  const occluderMeshes = [];
  const platformGroups = new Map();
  const seamIndicators = new Map();
  const plateMeshes = new Map();
  const npcClickables = [];
  const rotatorGroups = new Map();
  const rotatorClickables = [];

  const nodeGroupMap = new Map();
  const nodePosMap = new Map();
  const occupiedExactCoords = new Set();
  const lotusGoals = [];
  const stagePortals = [];
  const animatedHooks = [];

  const rotatorRecords = new Map();
  const nodeToRotator = new Map();

  // Index nodes first for exact coordinate & pivot clearance lookup
  for (const node of levelDef?.nodes || []) {
    nodePosMap.set(node.id, { x: node.x, y: node.y, z: node.z });
    occupiedExactCoords.add(`${Math.round(node.x)}:${Math.round(node.y)}:${Math.round(node.z)}`);
    if (node.groupId && !platformGroups.has(node.groupId)) {
      const pg = new T.Group();
      pg.name = `platform_${node.groupId}`;
      platformGroups.set(node.groupId, pg);
      root.add(pg);
    }
    if (node.groupId) nodeGroupMap.set(node.id, node.groupId);
  }

  // Create dedicated pivot groups for architectural Turret Rotators
  for (const rot of levelDef?.rotators || []) {
    if (!rot || !rot.id) continue;
    const pivot = toVec3Tuple(rot.pivot || [0, 0, 0]);
    const baseRotY = Number(rot.baseRotationY) || 0;
    const initQ = normalizeQuarterTurns(rot.quarterTurns ?? rot.initialQuarterTurns ?? 0);

    const rotGroup = new T.Group();
    rotGroup.name = `rotator_${rot.id}`;
    rotGroup.position.set(pivot.x, pivot.y, pivot.z);
    rotGroup.userData = {
      isRotatorGroup: true,
      rotatorId: rot.id,
      baseRotationY: baseRotY
    };
    rotGroup.rotation.y = baseRotY + initQ * (Math.PI / 2);
    root.add(rotGroup);
    rotatorGroups.set(rot.id, rotGroup);

    let crankOffset;
    if (rot.handleOffset || rot.crankOffset) {
      crankOffset = toVec3Tuple(rot.handleOffset || rot.crankOffset);
    } else if (rot.handlePos || rot.crankPos) {
      const hp = toVec3Tuple(rot.handlePos || rot.crankPos);
      crankOffset = { x: hp.x - pivot.x, y: hp.y - pivot.y, z: hp.z - pivot.z };
    } else {
      const pKey = `${Math.round(pivot.x)}:${Math.round(pivot.y)}:${Math.round(pivot.z)}`;
      crankOffset = occupiedExactCoords.has(pKey)
        ? { x: 0.66, y: 0.22, z: 0.66 }
        : { x: 0, y: 0.22, z: 0 };
    }

    const { crankRoot, wheel, hitMesh } = buildCrankHandleVisual(
      T,
      rot.id,
      crankOffset,
      monumentTheme,
      levelAnchor
    );
    rotGroup.add(crankRoot);
    rotatorClickables.push(hitMesh);

    const rec = {
      id: rot.id,
      group: rotGroup,
      pivot,
      baseRotY,
      currentAngle: rotGroup.rotation.y,
      targetQuarterTurns: initQ,
      nodeIds: new Set(Array.isArray(rot.nodeIds) ? rot.nodeIds : []),
      wheel
    };
    rotatorRecords.set(rot.id, rec);
    for (const nid of rec.nodeIds) {
      nodeToRotator.set(nid, rec);
    }
  }

  // Index plates by nodeId and goals by nodeId
  const plateByNodeId = new Map();
  for (const p of levelDef?.plates || []) {
    plateByNodeId.set(p.nodeId, p);
  }
  const goalNodeIds = new Set();
  if (levelDef?.winCondition?.goalNodeId) goalNodeIds.add(levelDef.winCondition.goalNodeId);
  if (levelDef?.winCondition?.goals) {
    for (const nid of Object.values(levelDef.winCondition.goals)) goalNodeIds.add(nid);
  }

  // Build every node
  for (const node of levelDef?.nodes || []) {
    const plateInfo =
      plateByNodeId.get(node.id) ||
      (node.plateId || node.plate ? { id: node.plateId || node.plate, nodeId: node.id } : null);
    const isGoal = Boolean(
      node.isGoal ||
      node.goalForActor ||
      node.style === 'hexagram_lotus_altar' ||
      node.style === 'stage_portal_arch' ||
      node.isStagePortal ||
      node.stagePortal ||
      goalNodeIds.has(node.id)
    );

    const { nodeGroup, mainBlock, pillarMesh, pickMesh, plateRecord, lotusPetals, stagePortalVisual } = buildNodeVisuals(
      T,
      node,
      plateInfo,
      isGoal,
      {
        theme: monumentTheme,
        anchor: levelAnchor,
        isRotatorNode: nodeToRotator.has(node.id)
      }
    );

    const rotRec = nodeToRotator.get(node.id);
    if (rotRec) {
      nodeGroup.position.set(
        node.x - rotRec.pivot.x,
        node.y - rotRec.pivot.y,
        node.z - rotRec.pivot.z
      );
      mainBlock.userData.rotatorId = rotRec.id;
      pickMesh.userData.rotatorId = rotRec.id;
      rotRec.group.add(nodeGroup);
    } else {
      const parentGroup = node.groupId ? platformGroups.get(node.groupId) : root;
      parentGroup.add(nodeGroup);
    }

    pickableMeshes.push(pickMesh);
    if (!node.ignoreOcclusion) {
      occluderMeshes.push(mainBlock);
      if (pillarMesh) occluderMeshes.push(pillarMesh);
    }
    if (plateRecord) {
      plateMeshes.set(plateRecord.id, plateRecord);
    }
    if (lotusPetals) {
      lotusGoals.push(lotusPetals);
    }
    if (stagePortalVisual) {
      stagePortals.push(stagePortalVisual);
    }
  }

  // Build seam endpoint markers (subtle warm gold motes that brighten on alignment)
  const isFiniteVec3 = (v) =>
    v && Number.isFinite(v.x) && Number.isFinite(v.y) && Number.isFinite(v.z);

  for (const seam of levelDef?.seams || []) {
    const posA = isFiniteVec3(seam.seamA)
      ? seam.seamA
      : (() => {
          const n = nodePosMap.get(seam.nodeA);
          return n ? { x: n.x, y: n.y + 0.5, z: n.z } : { x: 0, y: 0.5, z: 0 };
        })();
    const posB = isFiniteVec3(seam.seamB)
      ? seam.seamB
      : (() => {
          const n = nodePosMap.get(seam.nodeB);
          return n ? { x: n.x, y: n.y + 0.5, z: n.z } : { x: 0, y: 0.5, z: 0 };
        })();

    const mat = makeMat(T, PALETTE.warmGold, {
      emissive: 0xc29230,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.38,
      depthWrite: false
    });
    const pipGeo = new T.OctahedronGeometry(0.065, 0);
    const pipA = new T.Mesh(pipGeo, mat);
    const pipB = new T.Mesh(pipGeo, mat);

    for (const pip of [pipA, pipB]) {
      pip.userData = { ignoreOcclusion: true };
      pip.raycast = () => {};
    }

    const rotA = nodeToRotator.get(seam.nodeA);
    if (rotA) {
      pipA.position.set(posA.x - rotA.pivot.x, posA.y + 0.08 - rotA.pivot.y, posA.z - rotA.pivot.z);
      rotA.group.add(pipA);
    } else {
      pipA.position.set(posA.x, posA.y + 0.08, posA.z);
      const parentA = nodeGroupMap.has(seam.nodeA) ? platformGroups.get(nodeGroupMap.get(seam.nodeA)) : root;
      parentA.add(pipA);
    }

    const rotB = nodeToRotator.get(seam.nodeB);
    if (rotB) {
      pipB.position.set(posB.x - rotB.pivot.x, posB.y + 0.08 - rotB.pivot.y, posB.z - rotB.pivot.z);
      rotB.group.add(pipB);
    } else {
      pipB.position.set(posB.x, posB.y + 0.08, posB.z);
      const parentB = nodeGroupMap.has(seam.nodeB) ? platformGroups.get(nodeGroupMap.get(seam.nodeB)) : root;
      parentB.add(pipB);
    }

    seamIndicators.set(seam.id, {
      id: seam.id,
      pipA,
      pipB,
      material: mat,
      aligned: false
    });
  }

  // NPC & Prop Effect tracking state
  const npcEntries = [];
  const activeEffectAnims = [];
  const spawnedProps = [];
  const revealedActors = [];
  const triggeredEffects = [];

  // Build architectural & NPC props
  const eraContext = levelDef?.era || levelDef?.themeKey || '2026';
  const rawProps = levelDef?.props || [];
  for (let i = 0; i < rawProps.length; i++) {
    const rawProp = rawProps[i];
    const fallbackPos = rawProp.nodeId && nodePosMap.has(rawProp.nodeId)
      ? nodePosMap.get(rawProp.nodeId)
      : { x: 0, y: 0, z: 0 };
    const prop = {
      ...rawProp,
      x: rawProp.x !== undefined ? rawProp.x : fallbackPos.x,
      y: rawProp.y !== undefined ? rawProp.y : fallbackPos.y + 0.5,
      z: rawProp.z !== undefined ? rawProp.z : fallbackPos.z
    };

    const rotRec = prop.rotatorId
      ? rotatorRecords.get(prop.rotatorId)
      : prop.nodeId
      ? nodeToRotator.get(prop.nodeId)
      : null;
    if (rotRec && prop.rotatorId === undefined) {
      prop.rotatorId = rotRec.id;
    }

    const { group: propGroup, propOccluders, loreHitbox } = buildPropVisuals(
      T,
      prop,
      eraContext,
      animatedHooks,
      { theme: monumentTheme, anchor: levelAnchor }
    );

    let parentGroup = root;
    if (rotRec) {
      propGroup.position.set(
        prop.x - rotRec.pivot.x,
        prop.y - rotRec.pivot.y,
        prop.z - rotRec.pivot.z
      );
      parentGroup = rotRec.group;
    } else if (prop.groupId && platformGroups.has(prop.groupId)) {
      parentGroup = platformGroups.get(prop.groupId);
    }
    parentGroup.add(propGroup);

    if (propOccluders.length > 0) occluderMeshes.push(...propOccluders);
    if (loreHitbox) npcClickables.push(loreHitbox);

    if (prop.loreId || NPC_PROP_TYPES.has(prop.type)) {
      const npcId = prop.id || prop.loreId || `npc_${i}`;
      npcEntries.push({
        id: npcId,
        loreId: prop.loreId || null,
        propType: prop.type,
        group: propGroup,
        parentGroup,
        localPos: propGroup.position.clone(),
        worldPos: { x: prop.x, y: prop.y, z: prop.z },
        loreHitbox,
        occluders: propOccluders,
        status: 'active',
        effectType: null,
        disposed: false
      });
    }
  }

  // Build architectural piers, vaulted archways, seam-safe parapet curbs, and cutaway alcoves
  const stageMonumentArch = buildStageMonumentArchitecture(T, levelDef, monumentTheme, {
    nodeToRotator,
    goalNodeIds,
    anchor: levelAnchor
  });
  root.add(stageMonumentArch);
  occluderMeshes.push(stageMonumentArch);

  function applyRotatorDict(rotatorStates, immediate, dt) {
    if (!rotatorStates) return;
    const rate = 1 - Math.exp(-12 * Math.max(0.001, dt || 0.016));
    for (const [rid, rec] of rotatorRecords.entries()) {
      const rawQ =
        typeof rotatorStates.get === 'function'
          ? rotatorStates.get(rid)
          : rotatorStates[rid];
      if (rawQ !== undefined && rawQ !== null) {
        rec.targetQuarterTurns = normalizeQuarterTurns(rawQ);
      }
      const targetAngle = rec.baseRotY + rec.targetQuarterTurns * (Math.PI / 2);
      if (immediate) {
        rec.currentAngle = targetAngle;
      } else {
        const diff = Math.atan2(
          Math.sin(targetAngle - rec.currentAngle),
          Math.cos(targetAngle - rec.currentAngle)
        );
        rec.currentAngle = Math.abs(diff) < 0.0015 ? targetAngle : rec.currentAngle + diff * rate;
      }
      rec.group.rotation.y = rec.currentAngle;
    }
  }

  function spawnEffectBurst(parentGroup, localPos, spec, cfg) {
    const burstGroup = new T.Group();
    burstGroup.position.copy(localPos);
    parentGroup.add(burstGroup);

    const shardCount = cfg.kind === 'mist' ? 22 : 18;
    const burstMat = makeMat(T, cfg.color, {
      emissive: cfg.color,
      emissiveIntensity: 0.95,
      transparent: true,
      opacity: 0.92,
      depthWrite: false
    });
    const shards = [];
    for (let i = 0; i < shardCount; i++) {
      const a = (i / shardCount) * Math.PI * 2;
      const geo =
        cfg.kind === 'mist'
          ? new T.SphereGeometry(0.09, 6, 6)
          : cfg.kind === 'retreat'
          ? new T.ConeGeometry(0.045, 0.22, 4)
          : new T.OctahedronGeometry(0.06, 0);
      const m = new T.Mesh(geo, burstMat);
      m.position.set(Math.cos(a) * 0.14, 0.25 + (i % 4) * 0.16, Math.sin(a) * 0.14);
      m.userData = { ignoreOcclusion: true };
      m.raycast = () => {};
      burstGroup.add(m);
      shards.push({
        mesh: m,
        vx: Math.cos(a) * (0.55 + (i % 3) * 0.25),
        vy: cfg.kind === 'retreat' ? 0.9 + (i % 4) * 0.2 : 0.45 + (i % 5) * 0.22,
        vz: Math.sin(a) * (0.55 + (i % 3) * 0.25)
      });
    }

    let riftSlit = null;
    if (cfg.kind === 'leap' || cfg.kind === 'flash' || cfg.kind === 'unmask') {
      const slitGeo = new T.TorusGeometry(0.45, 0.035, 8, 20);
      riftSlit = new T.Mesh(slitGeo, burstMat);
      riftSlit.rotation.x = Math.PI / 2;
      riftSlit.position.y = 0.45;
      riftSlit.userData = { ignoreOcclusion: true };
      riftSlit.raycast = () => {};
      burstGroup.add(riftSlit);
    }

    return { burstGroup, burstMat, shards, riftSlit };
  }

  function triggerPropEffect(effectSpec, options = {}) {
    const spec =
      typeof effectSpec === 'string'
        ? { type: effectSpec }
        : { ...(effectSpec || {}) };
    const effectType = String(spec.type || 'mist_vanish');
    const cfg = EFFECT_TYPE_SPEC_FALLBACK[effectType] || {
      propType: spec.propType || null,
      color: 0xdfb86a,
      duration: 0.75,
      kind: 'mist'
    };

    const targetKey = spec.targetNpcId ?? spec.targetNpc ?? spec.loreId ?? spec.npcId ?? null;
    let targetNpc = null;
    if (targetKey) {
      targetNpc = npcEntries.find(
        (n) => (n.id === targetKey || n.loreId === targetKey) && n.status === 'active'
      ) || npcEntries.find((n) => n.id === targetKey || n.loreId === targetKey);
    } else if (spec.propType || cfg.propType) {
      const wantType = spec.propType || cfg.propType;
      targetNpc = npcEntries.find((n) => n.propType === wantType && n.status === 'active');
    }

    const parentGroup = targetNpc?.parentGroup || root;
    const localPos = targetNpc
      ? targetNpc.localPos.clone()
      : (() => {
          const p = toVec3Tuple(options.position || spec.position || [0, 0.5, 0]);
          return new T.Vector3(p.x, p.y, p.z);
        })();
    const worldPos = targetNpc
      ? { ...targetNpc.worldPos }
      : { x: localPos.x, y: localPos.y, z: localPos.z };

    // Remove NPC hitbox from npcClickables IMMEDIATELY so vanished NPC cannot be clicked again
    if (targetNpc) {
      if (targetNpc.loreHitbox) {
        const hitIdx = npcClickables.indexOf(targetNpc.loreHitbox);
        if (hitIdx !== -1) npcClickables.splice(hitIdx, 1);
        targetNpc.loreHitbox.visible = false;
        targetNpc.loreHitbox.raycast = () => {};
        targetNpc.loreHitbox.parent?.remove?.(targetNpc.loreHitbox);
      }
      if (targetNpc.occluders?.length) {
        for (const occ of targetNpc.occluders) {
          const oi = occluderMeshes.indexOf(occ);
          if (oi !== -1) occluderMeshes.splice(oi, 1);
        }
      }
      targetNpc.status =
        effectType === 'unmask_to_ryan'
          ? 'unmasked'
          : effectType === 'shadow_retreat'
          ? 'retreated'
          : effectType === 'astral_dissolve'
          ? 'dissolved'
          : 'vanished';
      targetNpc.effectType = effectType;

      // Clone materials so shared palettes remain intact and WebGL recompiles for smooth dissolve fade
      targetNpc.group.traverse?.((obj) => {
        if (obj.material) {
          const cloneAndPrep = (m) => {
            if (!m || typeof m.clone !== 'function') return m;
            const cloned = m.clone();
            const op = cloned.opacity ?? 1;
            cloned.userData = { ...(cloned.userData || {}), baseOpacity: op };
            cloned.transparent = true;
            cloned.depthWrite = false;
            if (cloned.uniforms?.uOpacity) {
              cloned.uniforms.uOpacity.value = op;
            }
            cloned.needsUpdate = true;
            return cloned;
          };
          obj.material = Array.isArray(obj.material)
            ? obj.material.map(cloneAndPrep)
            : cloneAndPrep(obj.material);
        }
      });
    }

    // Spawn persistent post-effect prop if requested (lit candle, cold tea bowl, shard, watch, etc.)
    const spawnPropType = spec.spawnProp ?? null;
    if (spawnPropType) {
      const propVisual = buildSpawnedPropVisual(T, spawnPropType, animatedHooks);
      propVisual.position.copy(localPos);
      propVisual.traverse?.((c) => {
        if (c.isMesh) {
          c.userData = { ...c.userData, ignoreOcclusion: true };
          c.raycast = () => {};
        }
      });
      parentGroup.add(propVisual);
      spawnedProps.push({
        id: `${spawnPropType}_${spawnedProps.length + 1}`,
        propType: spawnPropType,
        revealActor: null,
        sourceNpcId: targetNpc?.id || targetKey || null,
        effectType,
        position: worldPos,
        group: propVisual
      });
    }

    // If effect unmasks/reveals an actor (e.g. zero7_ch8 -> unmask_to_ryan with revealActor: 'ryan')
    const revealActor = spec.revealActor || null;
    if (revealActor) {
      const revealedBody = buildNpcBody(T, revealActor);
      revealedBody.position.copy(localPos);
      revealedBody.traverse?.((c) => {
        if (c.isMesh) {
          c.userData = { ...c.userData, ignoreOcclusion: true };
          c.raycast = () => {};
        }
      });
      parentGroup.add(revealedBody);
      revealedActors.push(revealActor);
      spawnedProps.push({
        id: `revealed_${revealActor}_${spawnedProps.length + 1}`,
        propType: revealActor,
        revealActor,
        sourceNpcId: targetNpc?.id || targetKey || null,
        effectType,
        position: worldPos,
        group: revealedBody
      });
    }

    triggeredEffects.push({
      type: effectType,
      targetNpcId: targetNpc?.id || targetKey || null,
      spawnProp: spawnPropType,
      revealActor
    });

    const burst = spawnEffectBurst(parentGroup, localPos, spec, cfg);
    const animEntry = {
      effectType,
      kind: cfg.kind,
      duration: options.immediate ? 0.001 : cfg.duration,
      elapsed: 0,
      targetNpc,
      baseScale: targetNpc ? targetNpc.group.scale.x : 1,
      basePos: localPos.clone(),
      burst,
      done: false
    };
    activeEffectAnims.push(animEntry);

    if (options.immediate) {
      advanceEffectAnims(1.0);
    }

    return {
      effectType,
      targetNpcId: targetNpc?.id || targetKey || null,
      spawnedProp: spawnPropType,
      revealActor,
      clickableNpcCount: npcClickables.length
    };
  }

  function advanceEffectAnims(dt) {
    for (let i = activeEffectAnims.length - 1; i >= 0; i--) {
      const anim = activeEffectAnims[i];
      anim.elapsed += Math.max(0, dt || 0.016);
      const t = Math.max(0, Math.min(1, anim.elapsed / anim.duration));
      const inv = 1 - t;

      // Animate bursts
      anim.burst.burstMat.opacity = 0.92 * inv;
      for (const sh of anim.burst.shards) {
        sh.mesh.position.x += sh.vx * dt;
        sh.mesh.position.y += sh.vy * dt;
        sh.mesh.position.z += sh.vz * dt;
        sh.mesh.rotation.y += dt * 4.5;
        sh.mesh.scale.setScalar(Math.max(0.05, inv));
      }
      if (anim.burst.riftSlit) {
        const s = 1 + t * 1.45;
        anim.burst.riftSlit.scale.set(s, s, 1);
      }

      // Animate target NPC disappearing cleanly
      const npc = anim.targetNpc;
      if (npc && !npc.disposed) {
        npc.group.traverse?.((obj) => {
          if (obj.material) {
            const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
            for (const m of mats) {
              const baseOp = m.userData?.baseOpacity ?? 1;
              m.transparent = true;
              m.opacity = baseOp * inv;
              if (m.uniforms?.uOpacity) {
                m.uniforms.uOpacity.value = m.opacity;
              }
            }
          }
        });
        if (anim.kind === 'leap' || anim.kind === 'flash') {
          npc.group.position.y = anim.basePos.y + t * 1.35;
          npc.group.scale.set(anim.baseScale * (1 - t * 0.45), anim.baseScale * (1 + t * 0.55), anim.baseScale * (1 - t * 0.45));
        } else if (anim.kind === 'retreat') {
          npc.group.position.z = anim.basePos.z - t * 0.9;
          npc.group.position.y = anim.basePos.y + t * 0.45;
          npc.group.scale.setScalar(anim.baseScale * (1 - t * 0.4));
        } else if (anim.kind === 'dissolve') {
          npc.group.position.y = anim.basePos.y + t * 0.65;
          npc.group.rotation.y += dt * 3.2;
          npc.group.scale.setScalar(anim.baseScale * (1 - t * 0.25));
        } else {
          npc.group.position.y = anim.basePos.y + t * 0.28;
          npc.group.scale.setScalar(anim.baseScale * (1 - t * 0.2));
        }
      }

      if (t >= 1) {
        if (npc && !npc.disposed) {
          npc.group.visible = false;
          npc.group.parent?.remove?.(npc.group);
          disposeObjectTree(npc.group);
          npc.disposed = true;
        }
        anim.burst.burstGroup.parent?.remove?.(anim.burst.burstGroup);
        disposeObjectTree(anim.burst.burstGroup);
        anim.done = true;
        activeEffectAnims.splice(i, 1);
      }
    }
  }

  function setStageTransitionState(phase = 'idle', progress = 0) {
    const p = Math.max(0, Math.min(1, Number(progress) || 0));
    const norm = String(phase || 'idle').toLowerCase();
    if (norm === 'sink' || norm === 'out' || norm === 'exit') {
      const easeIn = p * p * p;
      root.position.y = -easeIn * 6.5;
      root.scale.setScalar(1 - easeIn * 0.08);
    } else if (norm === 'rise' || norm === 'in' || norm === 'enter') {
      const easeOut = 1 - Math.pow(1 - p, 3);
      root.position.y = -(1 - easeOut) * 6.5;
      root.scale.setScalar(0.92 + easeOut * 0.08);
    } else {
      root.position.y = 0;
      root.scale.setScalar(1);
    }
  }

  return {
    root,
    pickableMeshes,
    occluderMeshes,
    platformGroups,
    seamIndicators,
    plateMeshes,
    npcClickables,
    rotatorGroups,
    rotatorClickables,
    updateRotators(rotatorStates, dt = 0.016) {
      applyRotatorDict(rotatorStates, false, dt);
    },
    snapRotators(rotatorStates) {
      applyRotatorDict(rotatorStates, true, 0);
    },
    setStageTransitionState,
    triggerPropEffect,
    getActivePropStates() {
      return {
        activeNpcs: npcEntries
          .filter((n) => n.status === 'active')
          .map((n) => ({ id: n.id, loreId: n.loreId, propType: n.propType, status: n.status })),
        vanishedNpcs: npcEntries
          .filter((n) => n.status !== 'active')
          .map((n) => ({
            id: n.id,
            loreId: n.loreId,
            propType: n.propType,
            status: n.status,
            effectType: n.effectType,
            disposed: n.disposed
          })),
        clickableNpcCount: npcClickables.length,
        spawnedProps: spawnedProps.map((sp) => ({
          id: sp.id,
          propType: sp.propType,
          revealActor: sp.revealActor,
          sourceNpcId: sp.sourceNpcId,
          effectType: sp.effectType,
          position: sp.position
        })),
        revealedActors: [...revealedActors],
        triggeredEffects: triggeredEffects.map((e) => ({ ...e }))
      };
    },
    update(dt = 0.016, elapsed = 0, state = {}) {
      const activeSeamSet =
        state.activeSeamIds instanceof Set
          ? state.activeSeamIds
          : new Set(Array.isArray(state.activeSeamIds) ? state.activeSeamIds : []);
      const activePlateSet =
        state.activePlates instanceof Set
          ? state.activePlates
          : new Set(Array.isArray(state.activePlates) ? state.activePlates : []);
      const groupOffsets = state.groupOffsets;

      if (groupOffsets) {
        for (const [gid, pGroup] of platformGroups.entries()) {
          const off =
            typeof groupOffsets.get === 'function' ? groupOffsets.get(gid) : groupOffsets[gid];
          if (off) {
            pGroup.position.set(off.x || 0, off.y || 0, off.z || 0);
          } else {
            pGroup.position.set(0, 0, 0);
          }
        }
      }

      if (state.rotatorStates) {
        applyRotatorDict(state.rotatorStates, Boolean(state.snapRotators), dt);
      }

      if (state.syncOnly) return;

      if (state.stageTransition) {
        setStageTransitionState(state.stageTransition.phase, state.stageTransition.progress);
      }

      for (const [pid, rec] of plateMeshes.entries()) {
        rec.setActive(activePlateSet.has(pid));
      }

      for (const [sid, ind] of seamIndicators.entries()) {
        const aligned = activeSeamSet.has(sid);
        ind.aligned = aligned;
        const pulse = aligned ? 1.18 + Math.sin(elapsed * 4.5) * 0.16 : 0.78 + Math.sin(elapsed * 2.0) * 0.08;
        ind.pipA.scale.setScalar(pulse);
        ind.pipB.scale.setScalar(pulse);
        ind.pipA.rotation.y = elapsed * (aligned ? 2.2 : 0.7);
        ind.pipB.rotation.y = -elapsed * (aligned ? 2.2 : 0.7);
        ind.material.opacity = aligned ? 0.94 : 0.34;
        ind.material.emissiveIntensity = aligned ? 1.25 : 0.3;
      }

      for (const goal of lotusGoals) {
        const sway = Math.sin(elapsed * 1.8) * 0.08;
        goal.petalGroup.rotation.y = elapsed * 0.25;
        for (const p of goal.petals) {
          p.rotation.x = 0.95 + sway;
        }
        const petalGlow = 0.32 + Math.sin(elapsed * 2.4) * 0.14;
        if (goal.petalMat.uniforms?.uEmissiveBoost) {
          goal.petalMat.uniforms.uEmissiveBoost.value.set(petalGlow * 0.55, petalGlow * 0.26, petalGlow * 0.38);
        } else {
          goal.petalMat.emissiveIntensity = petalGlow;
        }
      }

      for (const sp of stagePortals) {
        sp.keyGlyph.rotation.y = elapsed * 1.85;
        sp.keyGlyph.position.y = 1.44 + Math.sin(elapsed * 2.8) * 0.06;
        sp.veilMat.opacity = 0.34 + Math.sin(elapsed * 3.1) * 0.08;
        if (sp.veilMat.uniforms?.uOpacity) {
          sp.veilMat.uniforms.uOpacity.value = sp.veilMat.opacity;
        }
        const cyanBoost = 0.24 + Math.sin(elapsed * 3.6) * 0.10;
        if (sp.archCyanMat.uniforms?.uEmissiveBoost) {
          sp.archCyanMat.uniforms.uEmissiveBoost.value.set(cyanBoost * 0.45, cyanBoost, cyanBoost * 1.15);
        } else {
          sp.archCyanMat.emissiveIntensity = 0.85 + Math.sin(elapsed * 3.6) * 0.25;
        }
      }

      advanceEffectAnims(dt);

      for (const fn of animatedHooks) {
        fn(elapsed, dt);
      }
    },
    setBgMode(nextMode) {
      activeBgMode = setMonumentBgMode(normalizeBgMode(nextMode));
      applyMonumentBgModeToRoot(T, root, activeBgMode, themeKey);
      return activeBgMode;
    },
    getBgMode() {
      return activeBgMode;
    },
    dispose() {
      root.parent?.remove?.(root);
      disposeObjectTree(root);
    }
  };
}

// ============================================================================
// Hand-Crafted Naoki-Ikushima-Style Portrait Atlas Delegation (Zero Stick Faces)
// ============================================================================

export function renderWatercolorPortraitDataURL(speakerId = 'sofia', options = {}) {
  const getter = portraitAtlas.getPortraitDataURL || portraitAtlas.getPortraitDataUri;
  if (typeof getter === 'function') {
    return getter(speakerId, options);
  }
  const resolved = typeof portraitAtlas.resolveSpeakerId === 'function'
    ? portraitAtlas.resolveSpeakerId(speakerId)
    : String(speakerId || 'sofia');
  return portraitAtlas.PORTRAIT_DATA_URIS?.[resolved] || portraitAtlas.PORTRAIT_DATA_URIS?.sofia || '';
}
