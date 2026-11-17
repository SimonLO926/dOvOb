// Monument Valley 2 Pastel Mineral Shading & Atmospheric Backdrop Engine
// 100% Procedural GLSL Shaders + Zero Bare 'three' Imports (Accepts THREE Parameter for Node & Browser Compatibility)

const DEFAULT_THEME_KEY = '2026_dusk';
let currentMonumentBgMode = 'day';

export function normalizeBgMode(mode) {
  return String(mode || '').toLowerCase() === 'night' ? 'night' : 'day';
}

export function getMonumentBgMode() {
  return currentMonumentBgMode;
}

export function setMonumentBgMode(mode) {
  currentMonumentBgMode = normalizeBgMode(mode);
  return currentMonumentBgMode;
}

export const MONUMENT_ERA_THEMES = Object.freeze({
  '2026_dusk': {
    id: '2026_dusk',
    skyTop: '#b7ebea',
    skyMid: '#e7fbf5',
    skyBottom: '#fde9df',
    topColor: '#fff3df',
    litLeftColor: '#f6b4c6',
    shadeRightColor: '#86a1e8',
    bottomColor: '#6d85d4',
    mechTop: '#bbf5e8',
    mechLit: '#6fe0cc',
    mechShade: '#52b8be',
    parapetTop: '#fff8eb',
    parapetLit: '#fbd8df',
    parapetShade: '#9cb2ee',
    roofTop: '#4fc2cf',
    roofLit: '#2c8fae',
    roofShade: '#276996',
    alcoveDeep: '#3d4888',
    alcoveFloor: '#6ac5d8',
    sconceGlow: '#fff4c8',
    goldTrim: '#f6cf7d',
    silhouetteNear: '#c8d8f5',
    silhouetteFar: '#dbe9f8',
    topTint: '#fffdf9',
    bottomTint: '#dde4fc'
  },
  '1622_dawn': {
    id: '1622_dawn',
    skyTop: '#ffd2c4',
    skyMid: '#ffeedd',
    skyBottom: '#dff4f2',
    topColor: '#fff4e0',
    litLeftColor: '#f7be9c',
    shadeRightColor: '#7d92de',
    bottomColor: '#6578c9',
    mechTop: '#bbf5e8',
    mechLit: '#6fe0cc',
    mechShade: '#52b8be',
    parapetTop: '#fff8eb',
    parapetLit: '#fde0d4',
    parapetShade: '#98abe8',
    roofTop: '#4fc2cf',
    roofLit: '#2c8fae',
    roofShade: '#276996',
    alcoveDeep: '#3d4888',
    alcoveFloor: '#6ac5d8',
    sconceGlow: '#fff4c8',
    goldTrim: '#f6cf7d',
    silhouetteNear: '#e4c9dd',
    silhouetteFar: '#f3ddd7',
    topTint: '#fffdf8',
    bottomTint: '#e2dff9'
  },
  '1808_fog': {
    id: '1808_fog',
    skyTop: '#b6e3de',
    skyMid: '#e2f5f1',
    skyBottom: '#f3eef8',
    topColor: '#fff6e6',
    litLeftColor: '#84dfd1',
    shadeRightColor: '#86a1e8',
    bottomColor: '#6985d1',
    mechTop: '#c7faee',
    mechLit: '#75e4d0',
    mechShade: '#4db4bc',
    parapetTop: '#fff9ee',
    parapetLit: '#d5f4ed',
    parapetShade: '#9cb2ee',
    roofTop: '#4fc2cf',
    roofLit: '#2c8fae',
    roofShade: '#276996',
    alcoveDeep: '#3d4888',
    alcoveFloor: '#6ac5d8',
    sconceGlow: '#fff4c8',
    goldTrim: '#f6cf7d',
    silhouetteNear: '#bdd8ea',
    silhouetteFar: '#d7eae9',
    topTint: '#ffffff',
    bottomTint: '#dce7fb'
  },
  '1835_ember': {
    id: '1835_ember',
    skyTop: '#f7b8ba',
    skyMid: '#ffe2cf',
    skyBottom: '#e6d9f6',
    topColor: '#fff2dc',
    litLeftColor: '#f7ae9c',
    shadeRightColor: '#7a78c6',
    bottomColor: '#5f5eb0',
    mechTop: '#bbf5e8',
    mechLit: '#6fe0cc',
    mechShade: '#52b8be',
    parapetTop: '#fff6ea',
    parapetLit: '#fdd6cc',
    parapetShade: '#9b9ae0',
    roofTop: '#57c4d1',
    roofLit: '#318db0',
    roofShade: '#286796',
    alcoveDeep: '#413f84',
    alcoveFloor: '#6ac5d8',
    sconceGlow: '#fff4c8',
    goldTrim: '#f6cf7d',
    silhouetteNear: '#d9b7da',
    silhouetteFar: '#eed3df',
    topTint: '#fffbf5',
    bottomTint: '#dfd6f7'
  },
  '1849_tide': {
    id: '1849_tide',
    skyTop: '#a5e4e6',
    skyMid: '#dff8f7',
    skyBottom: '#f9e8ea',
    topColor: '#fff5e4',
    litLeftColor: '#84dfd1',
    shadeRightColor: '#7d92de',
    bottomColor: '#637ac9',
    mechTop: '#c6f9ee',
    mechLit: '#6fe0cc',
    mechShade: '#4fb6bf',
    parapetTop: '#fff9ee',
    parapetLit: '#e0f7f3',
    parapetShade: '#9ab0ec',
    roofTop: '#4fc2cf',
    roofLit: '#2c8fae',
    roofShade: '#276996',
    alcoveDeep: '#3d4888',
    alcoveFloor: '#6ac5d8',
    sconceGlow: '#fff4c8',
    goldTrim: '#f6cf7d',
    silhouetteNear: '#b9d8ef',
    silhouetteFar: '#d4ecf2',
    topTint: '#ffffff',
    bottomTint: '#dce5fa'
  },
  '1910_storm': {
    id: '1910_storm',
    skyTop: '#9fc1ea',
    skyMid: '#d6e5f8',
    skyBottom: '#efe0ef',
    topColor: '#faf4eb',
    litLeftColor: '#efb6ca',
    shadeRightColor: '#738bd9',
    bottomColor: '#5b73c4',
    mechTop: '#bbf5e8',
    mechLit: '#6fe0cc',
    mechShade: '#52b8be',
    parapetTop: '#fff8eb',
    parapetLit: '#f7dbe4',
    parapetShade: '#92a8e6',
    roofTop: '#4fc2cf',
    roofLit: '#2c8fae',
    roofShade: '#276996',
    alcoveDeep: '#384585',
    alcoveFloor: '#6ac5d8',
    sconceGlow: '#fff4c8',
    goldTrim: '#f6cf7d',
    silhouetteNear: '#adc3ea',
    silhouetteFar: '#cad9f2',
    topTint: '#fffdfc',
    bottomTint: '#d6dff8'
  },
  '2077_cyber': {
    id: '2077_cyber',
    skyTop: '#263066',
    skyMid: '#374787',
    skyBottom: '#4b5da3',
    topColor: '#e9f7ff',
    litLeftColor: '#84dfd1',
    shadeRightColor: '#7a78c6',
    bottomColor: '#5458a8',
    mechTop: '#bbf5e8',
    mechLit: '#6fe0cc',
    mechShade: '#52b8be',
    parapetTop: '#fff8eb',
    parapetLit: '#bceef2',
    parapetShade: '#8894e0',
    roofTop: '#4fc2cf',
    roofLit: '#2c8fae',
    roofShade: '#276996',
    alcoveDeep: '#323c7a',
    alcoveFloor: '#6ac5d8',
    sconceGlow: '#fff4c8',
    goldTrim: '#f6cf7d',
    silhouetteNear: '#5c6db8',
    silhouetteFar: '#49589e',
    topTint: '#f7fcff',
    bottomTint: '#cfd6fa',
    isStarry: true
  },
  'finale_convergence': {
    id: 'finale_convergence',
    skyTop: '#c9c4f2',
    skyMid: '#f5e4ec',
    skyBottom: '#fff1da',
    topColor: '#fff5e2',
    litLeftColor: '#f6b4c6',
    shadeRightColor: '#8397e8',
    bottomColor: '#6a7fd4',
    mechTop: '#bbf5e8',
    mechLit: '#6fe0cc',
    mechShade: '#52b8be',
    parapetTop: '#fff8eb',
    parapetLit: '#fbd8df',
    parapetShade: '#9cb2ee',
    roofTop: '#4fc2cf',
    roofLit: '#2c8fae',
    roofShade: '#276996',
    alcoveDeep: '#3d4888',
    alcoveFloor: '#6ac5d8',
    sconceGlow: '#fff4c8',
    goldTrim: '#f6cf7d',
    silhouetteNear: '#cfc8ef',
    silhouetteFar: '#e5dff7',
    topTint: '#fffef9',
    bottomTint: '#e2e2fc'
  }
});

export const MONUMENT_NIGHT_ERA_THEMES = Object.freeze({
  '2026_dusk': {
    id: '2026_dusk',
    skyTop: '#070e26',
    skyMid: '#12224d',
    skyBottom: '#243c75',
    haloColor: '#90b8ff',
    topColor: '#dbe7ff',
    litLeftColor: '#91adeb',
    shadeRightColor: '#43589b',
    bottomColor: '#233266',
    mechTop: '#9ff7eb',
    mechLit: '#4ac8be',
    mechShade: '#266d85',
    mechBottom: '#1a4964',
    parapetTop: '#edf3ff',
    parapetLit: '#adc0f2',
    parapetShade: '#536bb0',
    parapetBottom: '#314482',
    roofTop: '#49b8cb',
    roofLit: '#236e98',
    roofShade: '#194976',
    roofBottom: '#113358',
    alcoveDeep: '#15204a',
    alcoveFloor: '#3d8da6',
    sconceGlow: '#ffe9a8',
    goldTrim: '#f6d27a',
    goldTop: '#fff4c6',
    goldShade: '#c68f3d',
    goldBottom: '#8f6224',
    silhouetteNear: '#1d3269',
    silhouetteFar: '#2c478a',
    topTint: '#e8f0ff',
    bottomTint: '#25356e',
    isStarry: true,
    moonGlow: 1.0
  },
  '1622_dawn': {
    id: '1622_dawn',
    skyTop: '#091229',
    skyMid: '#162854',
    skyBottom: '#2c3d75',
    haloColor: '#ffd7a6',
    topColor: '#e4e9ff',
    litLeftColor: '#9aa8e6',
    shadeRightColor: '#485699',
    bottomColor: '#263166',
    mechTop: '#9cf5e8',
    mechLit: '#49c6bc',
    mechShade: '#266d85',
    mechBottom: '#1a4964',
    parapetTop: '#f2f4ff',
    parapetLit: '#b6bfe8',
    parapetShade: '#5665ad',
    parapetBottom: '#333f80',
    roofTop: '#4ab6ca',
    roofLit: '#246c94',
    roofShade: '#194773',
    roofBottom: '#113154',
    alcoveDeep: '#161f47',
    alcoveFloor: '#3c8aa3',
    sconceGlow: '#ffe9a8',
    goldTrim: '#f6d27a',
    goldTop: '#fff4c6',
    goldShade: '#c68f3d',
    goldBottom: '#8f6224',
    silhouetteNear: '#223166',
    silhouetteFar: '#324485',
    topTint: '#eef1ff',
    bottomTint: '#283369',
    isStarry: true,
    moonGlow: 1.0
  },
  '1808_fog': {
    id: '1808_fog',
    skyTop: '#061526',
    skyMid: '#102948',
    skyBottom: '#21476e',
    haloColor: '#9ae6de',
    topColor: '#d9f0f7',
    litLeftColor: '#7eb7cf',
    shadeRightColor: '#3a628f',
    bottomColor: '#1f3961',
    mechTop: '#a6faf0',
    mechLit: '#4ed1c4',
    mechShade: '#28768c',
    mechBottom: '#195066',
    parapetTop: '#e8f7fc',
    parapetLit: '#9ed2e3',
    parapetShade: '#4a75a3',
    parapetBottom: '#2a4b78',
    roofTop: '#47b8cc',
    roofLit: '#227196',
    roofShade: '#184b73',
    roofBottom: '#103454',
    alcoveDeep: '#122645',
    alcoveFloor: '#3c8fa6',
    sconceGlow: '#ffe9a8',
    goldTrim: '#f6d27a',
    goldTop: '#fff4c6',
    goldShade: '#c68f3d',
    goldBottom: '#8f6224',
    silhouetteNear: '#1a385c',
    silhouetteFar: '#274f7a',
    topTint: '#e6f6ff',
    bottomTint: '#223e6b',
    isStarry: true,
    moonGlow: 1.0
  },
  '1835_ember': {
    id: '1835_ember',
    skyTop: '#0f0921',
    skyMid: '#241540',
    skyBottom: '#4b244b',
    haloColor: '#ffa685',
    topColor: '#ebd9ed',
    litLeftColor: '#b388b8',
    shadeRightColor: '#50458c',
    bottomColor: '#292259',
    mechTop: '#9ff7eb',
    mechLit: '#4ac8be',
    mechShade: '#2b6a8a',
    mechBottom: '#1c4666',
    parapetTop: '#f5e8f7',
    parapetLit: '#c9a6cf',
    parapetShade: '#5d549e',
    parapetBottom: '#352f70',
    roofTop: '#4eb8c9',
    roofLit: '#286e96',
    roofShade: '#1c4873',
    roofBottom: '#133154',
    alcoveDeep: '#1a1640',
    alcoveFloor: '#428ca3',
    sconceGlow: '#ffe29e',
    goldTrim: '#f6cf78',
    goldTop: '#fff2be',
    goldShade: '#c48a38',
    goldBottom: '#8c5e21',
    silhouetteNear: '#312159',
    silhouetteFar: '#462e73',
    topTint: '#f5ebff',
    bottomTint: '#2d245e',
    isStarry: true,
    moonGlow: 1.0
  },
  '1849_tide': {
    id: '1849_tide',
    skyTop: '#071429',
    skyMid: '#122952',
    skyBottom: '#23467a',
    haloColor: '#8ee5eb',
    topColor: '#dcf2fc',
    litLeftColor: '#83bed9',
    shadeRightColor: '#3c5e99',
    bottomColor: '#203666',
    mechTop: '#a6faf0',
    mechLit: '#4ed1c4',
    mechShade: '#28768c',
    mechBottom: '#195066',
    parapetTop: '#ebf7ff',
    parapetLit: '#a6d2eb',
    parapetShade: '#4d71ad',
    parapetBottom: '#2c487d',
    roofTop: '#47b8cc',
    roofLit: '#227196',
    roofShade: '#184b73',
    roofBottom: '#103454',
    alcoveDeep: '#132447',
    alcoveFloor: '#3d8fa6',
    sconceGlow: '#ffe9a8',
    goldTrim: '#f6d27a',
    goldTop: '#fff4c6',
    goldShade: '#c68f3d',
    goldBottom: '#8f6224',
    silhouetteNear: '#1a3663',
    silhouetteFar: '#274d85',
    topTint: '#e8f6ff',
    bottomTint: '#22396b',
    isStarry: true,
    moonGlow: 1.0
  },
  '1910_storm': {
    id: '1910_storm',
    skyTop: '#060c1f',
    skyMid: '#111f47',
    skyBottom: '#223870',
    haloColor: '#8fb4f5',
    topColor: '#d4e2fa',
    litLeftColor: '#8ba4db',
    shadeRightColor: '#3f5394',
    bottomColor: '#202d61',
    mechTop: '#9ff7eb',
    mechLit: '#4ac8be',
    mechShade: '#266d85',
    mechBottom: '#1a4964',
    parapetTop: '#e6eeff',
    parapetLit: '#a6b7e8',
    parapetShade: '#4e64a8',
    parapetBottom: '#2e3f78',
    roofTop: '#49b8cb',
    roofLit: '#236e98',
    roofShade: '#194976',
    roofBottom: '#113358',
    alcoveDeep: '#131d45',
    alcoveFloor: '#3c8aa3',
    sconceGlow: '#ffe9a8',
    goldTrim: '#f6d27a',
    goldTop: '#fff4c6',
    goldShade: '#c68f3d',
    goldBottom: '#8f6224',
    silhouetteNear: '#1b2c5e',
    silhouetteFar: '#283f7d',
    topTint: '#e6eeff',
    bottomTint: '#223066',
    isStarry: true,
    moonGlow: 1.0
  },
  '2077_cyber': {
    id: '2077_cyber',
    skyTop: '#04091a',
    skyMid: '#0d193d',
    skyBottom: '#1c2f66',
    haloColor: '#6cf0f5',
    topColor: '#cff2ff',
    litLeftColor: '#6ec4cf',
    shadeRightColor: '#434d94',
    bottomColor: '#222861',
    mechTop: '#a6fff4',
    mechLit: '#54e0d8',
    mechShade: '#297a94',
    mechBottom: '#1b506b',
    parapetTop: '#e8f9ff',
    parapetLit: '#90d8e6',
    parapetShade: '#4e5da8',
    parapetBottom: '#2d3778',
    roofTop: '#4ac4d6',
    roofLit: '#24759e',
    roofShade: '#1a4d78',
    roofBottom: '#113557',
    alcoveDeep: '#111842',
    alcoveFloor: '#429bb0',
    sconceGlow: '#ffe9a8',
    goldTrim: '#f6d27a',
    goldTop: '#fff4c6',
    goldShade: '#c68f3d',
    goldBottom: '#8f6224',
    silhouetteNear: '#192a63',
    silhouetteFar: '#253c82',
    topTint: '#dff7ff',
    bottomTint: '#202863',
    isStarry: true,
    moonGlow: 1.0
  },
  'finale_convergence': {
    id: 'finale_convergence',
    skyTop: '#0b0c29',
    skyMid: '#181c4f',
    skyBottom: '#2d3375',
    haloColor: '#f5d284',
    topColor: '#e8e4ff',
    litLeftColor: '#a3a4e6',
    shadeRightColor: '#4a549e',
    bottomColor: '#272f6b',
    mechTop: '#9ff7eb',
    mechLit: '#4ac8be',
    mechShade: '#266d85',
    mechBottom: '#1a4964',
    parapetTop: '#f3f0ff',
    parapetLit: '#bdbbe8',
    parapetShade: '#5862ad',
    parapetBottom: '#353e80',
    roofTop: '#49b8cb',
    roofLit: '#236e98',
    roofShade: '#194976',
    roofBottom: '#113358',
    alcoveDeep: '#181d4d',
    alcoveFloor: '#3f8fa8',
    sconceGlow: '#ffebb0',
    goldTrim: '#f6d47d',
    goldTop: '#fff5c8',
    goldShade: '#c9933f',
    goldBottom: '#916526',
    silhouetteNear: '#232863',
    silhouetteFar: '#323882',
    topTint: '#f0edff',
    bottomTint: '#272f6b',
    isStarry: true,
    moonGlow: 1.0
  }
});

export function resolveMonumentThemeKey(themeOrKey) {
  if (typeof themeOrKey === 'string') {
    return MONUMENT_ERA_THEMES[themeOrKey] ? themeOrKey : DEFAULT_THEME_KEY;
  }
  if (themeOrKey && typeof themeOrKey === 'object') {
    const k = themeOrKey.id || themeOrKey.themeKey;
    if (k && MONUMENT_ERA_THEMES[k]) return k;
  }
  return DEFAULT_THEME_KEY;
}

export function resolveMonumentTheme(themeOrKey, bgMode = currentMonumentBgMode) {
  const mode = normalizeBgMode(bgMode);
  const table = mode === 'night' ? MONUMENT_NIGHT_ERA_THEMES : MONUMENT_ERA_THEMES;
  if (typeof themeOrKey === 'string') {
    return table[themeOrKey] || table[DEFAULT_THEME_KEY];
  }
  if (themeOrKey && typeof themeOrKey === 'object') {
    const k = resolveMonumentThemeKey(themeOrKey);
    const base = table[k] || table[DEFAULT_THEME_KEY];
    if (mode === 'night') {
      return base;
    }
    return { ...base, ...themeOrKey, id: k };
  }
  return table[DEFAULT_THEME_KEY];
}

/**
 * Parses a hex color string ('#fff3df', '#abc') or integer (0xfff3df) into
 * perceptual sRGB Vector3(r/255, g/255, b/255) without Three.js linear conversion.
 */
export function hexToSrgbVec3(THREE, hex) {
  if (!THREE || !THREE.Vector3) {
    throw new Error('hexToSrgbVec3 requires THREE with Vector3');
  }
  if (hex && typeof hex === 'object' && hex.isVector3) {
    return hex.clone();
  }
  if (typeof hex === 'number' && Number.isFinite(hex)) {
    const n = Math.max(0, Math.min(0xffffff, Math.round(hex)));
    const r = ((n >> 16) & 0xff) / 255;
    const g = ((n >> 8) & 0xff) / 255;
    const b = (n & 0xff) / 255;
    return new THREE.Vector3(r, g, b);
  }
  const raw = String(hex ?? '#ffffff').trim().replace(/^#/, '');
  let expanded = raw;
  if (raw.length === 3) {
    expanded = raw[0] + raw[0] + raw[1] + raw[1] + raw[2] + raw[2];
  } else if (raw.length < 6) {
    expanded = raw.padEnd(6, '0');
  }
  const intVal = Number.parseInt(expanded.slice(0, 6), 16);
  if (!Number.isFinite(intVal)) {
    return new THREE.Vector3(1, 1, 1);
  }
  const r = ((intVal >> 16) & 0xff) / 255;
  const g = ((intVal >> 8) & 0xff) / 255;
  const b = (intVal & 0xff) / 255;
  return new THREE.Vector3(r, g, b);
}

function toVec3Arg(THREE, val, fallback = [0, 0, 0]) {
  if (val && typeof val === 'object' && val.isVector3) return val.clone();
  if (Array.isArray(val)) {
    return new THREE.Vector3(Number(val[0]) || 0, Number(val[1]) || 0, Number(val[2]) || 0);
  }
  if (val && typeof val === 'object') {
    return new THREE.Vector3(Number(val.x) || 0, Number(val.y) || 0, Number(val.z) || 0);
  }
  return new THREE.Vector3(fallback[0], fallback[1], fallback[2]);
}

function toVec2Arg(THREE, val, fallback = [-8.5, 5.5]) {
  if (val && typeof val === 'object' && val.isVector2) return val.clone();
  if (Array.isArray(val)) {
    return new THREE.Vector2(
      Number.isFinite(Number(val[0])) ? Number(val[0]) : fallback[0],
      Number.isFinite(Number(val[1])) ? Number(val[1]) : fallback[1]
    );
  }
  if (val && typeof val === 'object') {
    return new THREE.Vector2(
      Number.isFinite(Number(val.x ?? val.min)) ? Number(val.x ?? val.min) : fallback[0],
      Number.isFinite(Number(val.y ?? val.max)) ? Number(val.y ?? val.max) : fallback[1]
    );
  }
  return new THREE.Vector2(fallback[0], fallback[1]);
}

function syncMonumentOpacity() {
  if (this.uniforms && this.uniforms.uOpacity) {
    this.uniforms.uOpacity.value = this.opacity ?? 1;
  }
}

const MONUMENT_VERTEX_SHADER = /* glsl */ `
varying vec3 vWorldNormal;
varying vec3 vViewNormal;
varying float vScreenY;

uniform vec3 uAnchor;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  vViewNormal = normalize((viewMatrix * vec4(vWorldNormal, 0.0)).xyz);
  vScreenY = (viewMatrix * worldPos).y - (viewMatrix * vec4(uAnchor, 1.0)).y;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`;

const MONUMENT_FRAGMENT_SHADER = /* glsl */ `
varying vec3 vWorldNormal;
varying vec3 vViewNormal;
varying float vScreenY;

uniform vec3 uTopColor;
uniform vec3 uLitLeftColor;
uniform vec3 uShadeRightColor;
uniform vec3 uBottomColor;
uniform vec3 uTopTint;
uniform vec3 uBottomTint;
uniform vec2 uHeightRange;
uniform vec3 uEmissiveBoost;
uniform float uOpacity;

void main() {
  float sideMix = smoothstep(-0.32, 0.32, -vViewNormal.x);
  vec3 wallColor = mix(uShadeRightColor, uLitLeftColor, sideMix);

  float topMix = smoothstep(0.38, 0.78, clamp(vWorldNormal.y, 0.0, 1.0));
  float bottomMix = smoothstep(0.38, 0.78, clamp(-vWorldNormal.y, 0.0, 1.0));
  vec3 baseColor = mix(wallColor, uTopColor, topMix);
  baseColor = mix(baseColor, uBottomColor, bottomMix);

  float hSpan = max(0.001, uHeightRange.y - uHeightRange.x);
  float hNorm = clamp((vScreenY - uHeightRange.x) / hSpan, 0.0, 1.0);
  vec3 tint = mix(uBottomTint, uTopTint, hNorm);

  vec3 finalColor = clamp(baseColor * tint + uEmissiveBoost, 0.0, 1.0);
  gl_FragColor = vec4(finalColor, uOpacity);
}
`;

function scaleHexByNightFactor(THREE, hex, rx, gx, bx) {
  const v = hexToSrgbVec3(THREE, hex);
  v.set(
    Math.min(1, Math.max(0, v.x * rx)),
    Math.min(1, Math.max(0, v.y * gx)),
    Math.min(1, Math.max(0, v.z * bx))
  );
  return v;
}

function resolveVariantColors(theme, specObj, opts) {
  const variant = opts.variant || specObj.variant || 'default';
  let top = theme.topColor;
  let litLeft = theme.litLeftColor;
  let shadeRight = theme.shadeRightColor;
  let bottom = theme.bottomColor;

  if (variant === 'mech') {
    top = theme.mechTop;
    litLeft = theme.mechLit;
    shadeRight = theme.mechShade;
    bottom = theme.mechBottom || '#3f95a3';
  } else if (variant === 'parapet') {
    top = theme.parapetTop;
    litLeft = theme.parapetLit;
    shadeRight = theme.parapetShade;
    bottom = theme.parapetBottom || '#7b92d8';
  } else if (variant === 'roof') {
    top = theme.roofTop;
    litLeft = theme.roofLit;
    shadeRight = theme.roofShade;
    bottom = theme.roofBottom || '#1e5078';
  } else if (variant === 'alcove') {
    top = theme.alcoveFloor;
    litLeft = theme.alcoveDeep;
    shadeRight = theme.alcoveDeep;
    bottom = theme.alcoveDeep;
  } else if (variant === 'gold') {
    top = theme.goldTop || '#fff2be';
    litLeft = theme.goldTrim;
    shadeRight = theme.goldShade || '#d9a452';
    bottom = theme.goldBottom || '#b6833c';
  }

  return {
    topColor: opts.topColor ?? specObj.topColor ?? top,
    litLeftColor: opts.litLeftColor ?? specObj.litLeftColor ?? litLeft,
    shadeRightColor: opts.shadeRightColor ?? specObj.shadeRightColor ?? shadeRight,
    bottomColor: opts.bottomColor ?? specObj.bottomColor ?? bottom,
    topTint: opts.topTint ?? specObj.topTint ?? theme.topTint ?? '#ffffff',
    bottomTint: opts.bottomTint ?? specObj.bottomTint ?? theme.bottomTint ?? '#dee6fc',
    emissiveBoost: opts.emissiveBoost ?? specObj.emissiveBoost ?? '#000000',
    hasCustomColors: Boolean(
      opts.topColor || opts.litLeftColor || opts.shadeRightColor || opts.bottomColor ||
      specObj.topColor || specObj.litLeftColor || specObj.shadeRightColor || specObj.bottomColor
    )
  };
}

function resolveMaterialUniformVectors(THREE, themeKey, bgMode, customOpts = {}, specOverrides = {}) {
  const mode = normalizeBgMode(bgMode);
  const theme = resolveMonumentTheme(themeKey, mode);
  const colors = resolveVariantColors(theme, specOverrides, customOpts);
  const preserve = Boolean(customOpts.preserveInNight || specOverrides.preserveInNight);

  const scaleFactor = mode === 'night' && !preserve
    ? {
        top: [0.76, 0.81, 0.96],
        lit: [0.60, 0.67, 0.90],
        shade: [0.46, 0.54, 0.82],
        bottom: [0.35, 0.42, 0.72]
      }
    : null;

  const pickVec = (hex, kind) => {
    if (!scaleFactor) return hexToSrgbVec3(THREE, hex);
    const hasCustomForField =
      (kind === 'top' && (customOpts.topColor || specOverrides.topColor)) ||
      (kind === 'lit' && (customOpts.litLeftColor || specOverrides.litLeftColor)) ||
      (kind === 'shade' && (customOpts.shadeRightColor || specOverrides.shadeRightColor)) ||
      (kind === 'bottom' && (customOpts.bottomColor || specOverrides.bottomColor));
    if (!hasCustomForField) {
      return hexToSrgbVec3(THREE, hex);
    }
    const f = scaleFactor[kind];
    return scaleHexByNightFactor(THREE, hex, f[0], f[1], f[2]);
  };

  const shadeVec = pickVec(colors.shadeRightColor, 'shade');
  const bottomVec = colors.bottomColor
    ? pickVec(colors.bottomColor, 'bottom')
    : shadeVec.clone().multiplyScalar(0.84);

  const emissiveVec = hexToSrgbVec3(THREE, colors.emissiveBoost);
  if (mode === 'night' && customOpts.nightEmissiveBoost) {
    const nb = hexToSrgbVec3(THREE, customOpts.nightEmissiveBoost);
    emissiveVec.copy(nb);
  }

  return {
    uTopColor: pickVec(colors.topColor, 'top'),
    uLitLeftColor: pickVec(colors.litLeftColor, 'lit'),
    uShadeRightColor: shadeVec,
    uBottomColor: bottomVec,
    uTopTint: hexToSrgbVec3(THREE, colors.topTint),
    uBottomTint: hexToSrgbVec3(THREE, colors.bottomTint),
    uEmissiveBoost: emissiveVec
  };
}

/**
 * Creates a view-aligned Monument Valley 2 ShaderMaterial writing perceptual sRGB directly
 * (toneMapped: false) so orthographic illusion seams share 100% pixel-identical shading.
 */
export function createMonumentMaterial(THREE, spec = {}, opts = {}) {
  if (!THREE || !THREE.ShaderMaterial) {
    throw new Error('createMonumentMaterial requires THREE');
  }

  const themeKey = resolveMonumentThemeKey(spec);
  const specObj = spec && typeof spec === 'object' ? spec : {};
  const specOverrides = {};
  for (const k of [
    'variant',
    'topColor',
    'litLeftColor',
    'shadeRightColor',
    'bottomColor',
    'topTint',
    'bottomTint',
    'emissiveBoost',
    'preserveInNight'
  ]) {
    if (specObj[k] !== undefined && !(MONUMENT_ERA_THEMES[themeKey] && specObj[k] === MONUMENT_ERA_THEMES[themeKey][k]) && !(MONUMENT_NIGHT_ERA_THEMES[themeKey] && specObj[k] === MONUMENT_NIGHT_ERA_THEMES[themeKey][k])) {
      specOverrides[k] = specObj[k];
    }
  }
  const vecs = resolveMaterialUniformVectors(THREE, themeKey, currentMonumentBgMode, opts, specOverrides);

  const anchor = toVec3Arg(THREE, opts.anchor ?? specObj.anchor, [0, 0, 0]);
  const heightRange = toVec2Arg(THREE, opts.heightRange ?? specObj.heightRange, [-8.5, 5.5]);
  const opacity = opts.opacity ?? specObj.opacity ?? 1;
  const transparent = Boolean(opts.transparent || specObj.transparent || opacity < 0.999);
  const depthWrite = opts.depthWrite ?? specObj.depthWrite ?? !transparent;
  const depthTest = opts.depthTest ?? specObj.depthTest ?? true;
  const side = opts.side ?? specObj.side ?? THREE.FrontSide;

  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTopColor: { value: vecs.uTopColor },
      uLitLeftColor: { value: vecs.uLitLeftColor },
      uShadeRightColor: { value: vecs.uShadeRightColor },
      uBottomColor: { value: vecs.uBottomColor },
      uTopTint: { value: vecs.uTopTint },
      uBottomTint: { value: vecs.uBottomTint },
      uAnchor: { value: anchor },
      uHeightRange: { value: heightRange },
      uEmissiveBoost: { value: vecs.uEmissiveBoost },
      uOpacity: { value: opacity }
    },
    vertexShader: MONUMENT_VERTEX_SHADER,
    fragmentShader: MONUMENT_FRAGMENT_SHADER,
    transparent,
    depthWrite,
    depthTest,
    side,
    toneMapped: false
  });

  mat.transparent = transparent;
  mat.opacity = opacity;
  mat.toneMapped = false;
  mat.userData = {
    baseOpacity: mat.opacity,
    isMonumentMaterial: true,
    monumentMeta: {
      themeKey,
      customOpts: { ...opts },
      specOverrides
    }
  };
  mat.onBeforeRender = syncMonumentOpacity;

  const baseClone = THREE.ShaderMaterial.prototype.clone;
  mat.clone = function cloneMonumentMaterial() {
    const cloned = baseClone.call(this);
    cloned.opacity = this.opacity;
    cloned.transparent = this.transparent;
    cloned.depthWrite = this.depthWrite;
    cloned.depthTest = this.depthTest;
    cloned.side = this.side;
    cloned.toneMapped = false;
    cloned.userData = {
      ...(this.userData || {}),
      monumentMeta: this.userData?.monumentMeta
        ? {
            themeKey: this.userData.monumentMeta.themeKey,
            customOpts: { ...(this.userData.monumentMeta.customOpts || {}) },
            specOverrides: { ...(this.userData.monumentMeta.specOverrides || {}) }
          }
        : undefined
    };
    cloned.onBeforeRender = syncMonumentOpacity;
    cloned.clone = this.clone;
    if (cloned.uniforms && cloned.uniforms.uOpacity) {
      cloned.uniforms.uOpacity.value = cloned.opacity ?? 1;
    }
    return cloned;
  };

  return mat;
}

const SKY_VERTEX_SHADER = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.9999, 1.0);
}
`;

const SKY_FRAGMENT_SHADER = /* glsl */ `
varying vec2 vUv;

uniform vec3 uSkyTop;
uniform vec3 uSkyMid;
uniform vec3 uSkyBottom;
uniform vec3 uHaloColor;
uniform float uStarry;
uniform float uMoonGlow;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  float y = clamp(vUv.y, 0.0, 1.0);
  vec3 lowToMid = mix(uSkyBottom, uSkyMid, smoothstep(0.0, 0.48, y));
  vec3 grad = mix(lowToMid, uSkyTop, smoothstep(0.42, 1.0, y));

  float radial = length((vUv - vec2(0.5, 0.56)) * vec2(1.15, 1.0));
  float halo = smoothstep(0.68, 0.04, radial) * (uMoonGlow > 0.5 ? 0.16 : 0.22);
  vec3 col = mix(grad, uHaloColor, halo);

  if (uMoonGlow > 0.5) {
    float moonMist = smoothstep(0.48, 0.02, length((vUv - vec2(0.78, 0.80)) * vec2(1.25, 1.0))) * 0.24;
    col = mix(col, uHaloColor, moonMist);
  }

  if (uStarry > 0.5) {
    vec2 grid = vUv * vec2(68.0, 40.0);
    vec2 id = floor(grid);
    vec2 f = fract(grid) - 0.5;
    float rnd = hash21(id);
    if (rnd > 0.962) {
      float d = length(f);
      float star = smoothstep(0.24, 0.02, d) * (0.45 + 0.55 * fract(rnd * 17.3));
      vec3 starTint = fract(rnd * 53.7) > 0.65 ? vec3(1.0, 0.92, 0.72) : vec3(0.80, 0.94, 1.0);
      col += starTint * star * smoothstep(0.14, 0.92, y);
    }
    if (uMoonGlow > 0.5) {
      vec2 grid2 = vUv * vec2(44.0, 26.0) + vec2(11.3, 7.7);
      vec2 id2 = floor(grid2);
      vec2 f2 = fract(grid2) - 0.5;
      float rnd2 = hash21(id2);
      if (rnd2 > 0.986) {
        float crossDist = min(abs(f2.x) + abs(f2.y) * 2.8, abs(f2.y) + abs(f2.x) * 2.8);
        float glint = smoothstep(0.28, 0.02, crossDist) * 0.85;
        col += vec3(1.0, 0.96, 0.84) * glint * smoothstep(0.26, 0.94, y);
      }
    }
  }

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

/**
 * Fullscreen clip-space pastel mineral sky gradient backdrop (renderOrder -1000, toneMapped false).
 */
export function createMonumentSkyBackdrop(THREE, themeOrKey = DEFAULT_THEME_KEY, opts = {}) {
  if (!THREE || !THREE.Mesh || !THREE.PlaneGeometry || !THREE.ShaderMaterial) {
    throw new Error('createMonumentSkyBackdrop requires THREE');
  }
  const themeKey = resolveMonumentThemeKey(themeOrKey);
  const bgMode = normalizeBgMode(opts.bgMode ?? currentMonumentBgMode);
  const theme = resolveMonumentTheme(themeKey, bgMode);
  const geo = new THREE.PlaneGeometry(2, 2);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uSkyTop: { value: hexToSrgbVec3(THREE, theme.skyTop) },
      uSkyMid: { value: hexToSrgbVec3(THREE, theme.skyMid) },
      uSkyBottom: { value: hexToSrgbVec3(THREE, theme.skyBottom) },
      uHaloColor: { value: hexToSrgbVec3(THREE, theme.haloColor || theme.topColor || '#fff7ea') },
      uStarry: { value: theme.isStarry ? 1.0 : 0.0 },
      uMoonGlow: { value: theme.moonGlow ? Number(theme.moonGlow) : 0.0 }
    },
    vertexShader: SKY_VERTEX_SHADER,
    fragmentShader: SKY_FRAGMENT_SHADER,
    depthTest: false,
    depthWrite: false,
    toneMapped: false
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'monument_sky_backdrop';
  mesh.frustumCulled = false;
  mesh.renderOrder = -1000;
  mesh.userData = {
    ignoreOcclusion: true,
    monumentSkyMeta: { themeKey }
  };
  mesh.raycast = () => {};
  return mesh;
}

const SILHOUETTE_VERTEX_SHADER = /* glsl */ `
varying float vLocalY;

void main() {
  vLocalY = position.y;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const SILHOUETTE_FRAGMENT_SHADER = /* glsl */ `
varying float vLocalY;

uniform vec3 uColor;
uniform vec3 uMistColor;
uniform float uOpacity;
uniform float uFadeHeight;

void main() {
  float h = clamp(vLocalY / max(0.5, uFadeHeight), 0.0, 1.0);
  vec3 col = mix(uMistColor, uColor, smoothstep(0.0, 0.55, h));
  float alpha = uOpacity * smoothstep(0.0, 0.25, h);
  gl_FragColor = vec4(col, alpha);
}
`;

function makeSilhouetteMat(THREE, hexColor, mistHex, opacity, fadeHeight = 10.0) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: hexToSrgbVec3(THREE, hexColor) },
      uMistColor: { value: hexToSrgbVec3(THREE, mistHex) },
      uOpacity: { value: opacity },
      uFadeHeight: { value: fadeHeight }
    },
    vertexShader: SILHOUETTE_VERTEX_SHADER,
    fragmentShader: SILHOUETTE_FRAGMENT_SHADER,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    toneMapped: false
  });
}

function buildSilhouetteCluster(THREE, nearMat, farMat) {
  const cluster = new THREE.Group();

  // 1. Distant Macau Tower spire + observation skywalk pod (left rear)
  const tower = new THREE.Group();
  tower.position.set(-4.35, 0, 0);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.34, 8.2, 8), nearMat);
  shaft.position.y = 4.1;
  const podLower = new THREE.Mesh(new THREE.CylinderGeometry(0.76, 0.42, 0.42, 12), nearMat);
  podLower.position.y = 6.2;
  const podUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.76, 0.36, 12), nearMat);
  podUpper.position.y = 6.58;
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.08, 3.2, 6), nearMat);
  mast.position.y = 8.4;
  tower.add(shaft, podLower, podUpper, mast);
  cluster.add(tower);

  // 2. Distant Sai Van Bridge twin cable-stayed arches + slender deck (right rear)
  const bridge = new THREE.Group();
  bridge.position.set(4.15, 0, 0);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.18, 0.22), farMat);
  deck.position.y = 2.6;
  bridge.add(deck);
  for (const px of [-1.45, 1.45]) {
    const arch = new THREE.Mesh(
      new THREE.TorusGeometry(1.02, 0.085, 6, 16, Math.PI),
      nearMat
    );
    arch.position.set(px, 2.65, 0);
    arch.scale.set(0.58, 2.25, 1.0);
    const pier = new THREE.Mesh(new THREE.BoxGeometry(0.22, 2.65, 0.22), farMat);
    pier.position.set(px, 1.32, 0);
    bridge.add(arch, pier);
  }
  cluster.add(bridge);

  // 3. Stepped classical gables & tall flanking colonnade silhouettes (mid-far)
  const gables = new THREE.Group();
  for (const [gx, w, h] of [
    [-7.8, 1.7, 6.2],
    [-2.0, 1.9, 4.8],
    [1.6, 1.8, 5.1],
    [7.9, 1.7, 5.9]
  ]) {
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.24), farMat);
    body.position.set(gx, h * 0.5, -1.2);
    const stepCap = new THREE.Mesh(new THREE.BoxGeometry(w * 0.72, 0.72, 0.24), farMat);
    stepCap.position.set(gx, h + 0.36, -1.2);
    const pediment = new THREE.Mesh(new THREE.ConeGeometry(w * 0.48, 0.88, 4, 1, false, Math.PI / 4), farMat);
    pediment.scale.set(1.0, 1.0, 0.35);
    pediment.position.set(gx, h + 1.16, -1.2);
    gables.add(body, stepCap, pediment);
  }
  for (let c = -3; c <= 3; c += 1) {
    if (c === 0) continue;
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.17, 5.4, 8), farMat);
    col.position.set(c * 2.35, 2.7, -2.0);
    gables.add(col);
  }
  cluster.add(gables);

  return cluster;
}

/**
 * Translucent distant Macau landmarks (Macau Tower, Sai Van Bridge, stepped classical gables
 * & colonnades) rendered far behind the puzzle/cover stage without occluding seams.
 */
export function buildDistantMonumentSilhouettes(THREE, themeOrKey = DEFAULT_THEME_KEY, opts = {}) {
  if (!THREE || !THREE.Group || !THREE.Mesh) {
    throw new Error('buildDistantMonumentSilhouettes requires THREE');
  }
  const themeKey = resolveMonumentThemeKey(themeOrKey);
  const bgMode = normalizeBgMode(opts.bgMode ?? currentMonumentBgMode);
  const theme = resolveMonumentTheme(themeKey, bgMode);
  const root = new THREE.Group();
  root.name = 'distant_monument_silhouettes';

  const variant = opts.variant || 'stage';
  const anchor = toVec3Arg(THREE, opts.anchor, variant === 'cover' ? [0, 0.85, 0] : [0, 0, 0]);
  const nearOpacity = Math.max(0.22, Math.min(0.34, Number(opts.nearOpacity ?? 0.30)));
  const farOpacity = Math.max(0.22, Math.min(0.34, Number(opts.farOpacity ?? 0.23)));

  const nearMat = makeSilhouetteMat(
    THREE,
    theme.silhouetteNear,
    theme.skyMid || theme.skyBottom,
    nearOpacity,
    9.0
  );
  nearMat.userData = { monumentSilhouetteMeta: { themeKey, role: 'near' } };
  const farMat = makeSilhouetteMat(
    THREE,
    theme.silhouetteFar,
    theme.skyMid || theme.skyBottom,
    farOpacity,
    9.0
  );
  farMat.userData = { monumentSilhouetteMeta: { themeKey, role: 'far' } };

  if (variant === 'cover') {
    const dist = Number(opts.distance) || 32;
    const cluster = buildSilhouetteCluster(THREE, nearMat, farMat);
    const rad = ((Number(opts.azimuthDeg) || 45) * Math.PI) / 180;
    cluster.position.set(
      anchor.x - dist * Math.sin(rad),
      anchor.y - dist / Math.SQRT2 - 4.8,
      anchor.z - dist * Math.cos(rad)
    );
    cluster.rotation.y = rad;
    root.add(cluster);
  } else {
    // Place one cluster opposite each of the 4 isometric viewing directions at R = 56
    // so the far-side cluster frames the stage while near/side clusters lie well outside the frustum.
    const radius = Number(opts.distance) || 56;
    const baseY = anchor.y - radius / Math.SQRT2 - 4.5;
    for (const azDeg of [45, 135, 225, 315]) {
      const rad = (azDeg * Math.PI) / 180;
      const cluster = buildSilhouetteCluster(THREE, nearMat, farMat);
      cluster.position.set(
        anchor.x - radius * Math.sin(rad),
        baseY,
        anchor.z - radius * Math.cos(rad)
      );
      cluster.rotation.y = rad;
      root.add(cluster);
    }
  }

  root.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = false;
      obj.receiveShadow = false;
      obj.renderOrder = -500;
      obj.userData = { ...obj.userData, ignoreOcclusion: true };
      obj.raycast = () => {};
    }
  });

  return root;
}

/**
 * Live-updates Monument ShaderMaterials, sky backdrops, and distant silhouettes in-place
 * between Day ('day') and Night ('night') background modes without rebuilding scene meshes.
 */
export function applyMonumentBgModeToRoot(THREE, rootObj, bgMode = currentMonumentBgMode, fallbackThemeKey = DEFAULT_THEME_KEY) {
  const mode = normalizeBgMode(bgMode);
  setMonumentBgMode(mode);
  if (!THREE || !rootObj || typeof rootObj.traverse !== 'function') return mode;

  const updatedMats = new Set();

  rootObj.traverse((obj) => {
    if (obj.userData?.monumentSkyMeta && obj.material?.uniforms) {
      const tk = obj.userData.monumentSkyMeta.themeKey || fallbackThemeKey;
      const th = resolveMonumentTheme(tk, mode);
      const u = obj.material.uniforms;
      u.uSkyTop?.value?.copy?.(hexToSrgbVec3(THREE, th.skyTop));
      u.uSkyMid?.value?.copy?.(hexToSrgbVec3(THREE, th.skyMid));
      u.uSkyBottom?.value?.copy?.(hexToSrgbVec3(THREE, th.skyBottom));
      u.uHaloColor?.value?.copy?.(hexToSrgbVec3(THREE, th.haloColor || th.topColor || '#fff7ea'));
      if (u.uStarry) u.uStarry.value = th.isStarry ? 1.0 : 0.0;
      if (u.uMoonGlow) u.uMoonGlow.value = th.moonGlow ? Number(th.moonGlow) : 0.0;
    }

    const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const mat of mats) {
      if (!mat || updatedMats.has(mat)) continue;
      updatedMats.add(mat);

      if (mat.userData?.monumentSilhouetteMeta && mat.uniforms) {
        const meta = mat.userData.monumentSilhouetteMeta;
        const th = resolveMonumentTheme(meta.themeKey || fallbackThemeKey, mode);
        const colHex = meta.role === 'far' ? th.silhouetteFar : th.silhouetteNear;
        mat.uniforms.uColor?.value?.copy?.(hexToSrgbVec3(THREE, colHex));
        mat.uniforms.uMistColor?.value?.copy?.(hexToSrgbVec3(THREE, th.skyMid || th.skyBottom));
        continue;
      }

      if (mat.userData?.monumentMeta && mat.uniforms) {
        const meta = mat.userData.monumentMeta;
        const vecs = resolveMaterialUniformVectors(
          THREE,
          meta.themeKey || fallbackThemeKey,
          mode,
          meta.customOpts || {},
          meta.specOverrides || {}
        );
        const u = mat.uniforms;
        // Preserve active plate glow colors if plate is currently held/unlocked
        if (!mat.userData?.isPlateActive) {
          u.uTopColor?.value?.copy?.(vecs.uTopColor);
          u.uLitLeftColor?.value?.copy?.(vecs.uLitLeftColor);
          u.uEmissiveBoost?.value?.copy?.(vecs.uEmissiveBoost);
        }
        u.uShadeRightColor?.value?.copy?.(vecs.uShadeRightColor);
        u.uBottomColor?.value?.copy?.(vecs.uBottomColor);
        u.uTopTint?.value?.copy?.(vecs.uTopTint);
        u.uBottomTint?.value?.copy?.(vecs.uBottomTint);
      }
    }
  });

  return mode;
}
