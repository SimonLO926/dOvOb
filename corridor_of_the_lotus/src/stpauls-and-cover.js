// Sculpted Monument Valley 2 Macau Landmarks & Cover Diorama Generator
// Zero bare 'three' imports (THREE is passed cleanly as a parameter).

import {
  MONUMENT_ERA_THEMES,
  resolveMonumentTheme,
  createMonumentMaterial,
  createMonumentSkyBackdrop,
  buildDistantMonumentSilhouettes,
  normalizeBgMode,
  getMonumentBgMode,
  setMonumentBgMode,
  applyMonumentBgModeToRoot
} from './monument-shader.js';

const DEG2RAD = Math.PI / 180;
const ISO_BASE_AZIMUTH_DEG = 45;
const ISO_BASE_ELEVATION_DEG = 35.264;
const COVER_ORBIT_RADIUS = 56;
const COVER_CAMERA_TARGET = { x: 0, y: 0.85, z: 0 };

function markNonBlocking(obj) {
  if (!obj) return obj;
  obj.traverse?.((child) => {
    if (child.isMesh || child.isLine || child.isPoints) {
      child.userData = { ...(child.userData || {}), ignoreOcclusion: true };
      child.raycast = () => {};
    }
  });
  return obj;
}

function makeMatSet(THREE, themeSpec, anchor, heightRange) {
  const theme = resolveMonumentTheme(themeSpec);
  const baseOpts = { anchor, heightRange };
  const c = (opts = {}) => createMonumentMaterial(THREE, theme, { ...baseOpts, ...opts });

  return {
    theme,
    stoneMain: c({ variant: 'default' }),
    stonePilaster: c({
      variant: 'parapet',
      litLeftColor: theme.parapetLit || '#fcd8e0',
      shadeRightColor: theme.parapetShade || '#9bb2ee',
      bottomColor: '#7a8fd4'
    }),
    corniceCream: c({
      variant: 'parapet',
      topColor: '#fff9ee',
      litLeftColor: '#ffe7ea',
      shadeRightColor: '#adc0f2',
      bottomColor: '#849be0'
    }),
    graniteStep: c({
      topColor: '#f8f0f3',
      litLeftColor: '#ebd7e4',
      shadeRightColor: '#919dd9',
      bottomColor: '#6f7dc3'
    }),
    alcoveDeep: c({
      variant: 'alcove',
      side: THREE.DoubleSide
    }),
    gold: c({
      variant: 'gold'
    }),
    goldCross: c({
      variant: 'gold',
      topColor: '#fff6c6',
      litLeftColor: '#f8d278',
      shadeRightColor: '#e2ab55',
      bottomColor: '#bf853a',
      emissiveBoost: '#281e06',
      preserveInNight: true
    }),
    sconceWarm: c({
      topColor: '#fffbe2',
      litLeftColor: '#ffeaab',
      shadeRightColor: '#f6cb80',
      bottomColor: '#deac62',
      emissiveBoost: '#6b4f18',
      preserveInNight: true,
      nightEmissiveBoost: '#8c651c'
    }),
    roofCerulean: c({
      topColor: '#7be8f5',
      litLeftColor: '#3cb0df',
      shadeRightColor: '#2678bc',
      bottomColor: '#1b5594'
    }),
    roofTerracotta: c({
      topColor: '#ffe0cc',
      litLeftColor: '#f59f87',
      shadeRightColor: '#9677be',
      bottomColor: '#6c5a9e'
    }),
    puiChingMint: c({
      topColor: '#ecfcf7',
      litLeftColor: '#9beed8',
      shadeRightColor: '#61b7b5',
      bottomColor: '#468d98'
    }),
    jadeMech: c({
      variant: 'mech',
      emissiveBoost: '#0e3633'
    }),
    jadeTree: c({
      topColor: '#d2fbf0',
      litLeftColor: '#76e3c9',
      shadeRightColor: '#48a4a6',
      bottomColor: '#367e8b'
    }),
    coralRed: c({
      topColor: '#ffd4ca',
      litLeftColor: '#ef7b74',
      shadeRightColor: '#a65c8d',
      bottomColor: '#784476'
    }),
    obsidianCharcoal: c({
      topColor: '#5c668e',
      litLeftColor: '#424b74',
      shadeRightColor: '#2d355a',
      bottomColor: '#222848'
    }),
    hexGreen: c({
      topColor: '#9ef2d2',
      litLeftColor: '#47b588',
      shadeRightColor: '#2e887a',
      bottomColor: '#246668'
    }),
    pureWhiteHead: c({
      topColor: '#ffffff',
      litLeftColor: '#fff8f2',
      shadeRightColor: '#e9effd',
      bottomColor: '#cdd8f6',
      emissiveBoost: '#181822',
      preserveInNight: true
    }),
    sapphireGlow: c({
      topColor: '#c9f3ff',
      litLeftColor: '#78d2f8',
      shadeRightColor: '#5282df',
      bottomColor: '#3d58b4',
      emissiveBoost: '#1b355c',
      preserveInNight: true
    }),
    lotusSaintGlow: c({
      topColor: '#fff9e6',
      litLeftColor: '#ffdca8',
      shadeRightColor: '#c4b8f0',
      bottomColor: '#8d8fd6',
      emissiveBoost: '#3d2f18',
      preserveInNight: true
    })
  };
}

function addArchHolePath(THREE, pathShape, cx, bottomY, width, rectHeight, archRadius) {
  const hw = width * 0.5;
  const hole = new THREE.Path();
  hole.moveTo(cx - hw, bottomY);
  hole.lineTo(cx + hw, bottomY);
  hole.lineTo(cx + hw, bottomY + rectHeight);
  hole.absarc(cx, bottomY + rectHeight, archRadius, 0, Math.PI, false);
  hole.lineTo(cx - hw, bottomY);
  pathShape.holes.push(hole);
}

function addCircleHolePath(THREE, pathShape, cx, cy, radius) {
  const hole = new THREE.Path();
  hole.absarc(cx, cy, radius, 0, Math.PI * 2, true);
  pathShape.holes.push(hole);
}

function addOvalHolePath(THREE, pathShape, cx, cy, rx, ry) {
  const hole = new THREE.Path();
  const segs = 20;
  for (let i = 0; i <= segs; i += 1) {
    const a = (i / segs) * Math.PI * 2;
    const x = cx + Math.cos(a) * rx;
    const y = cy + Math.sin(a) * ry;
    if (i === 0) hole.moveTo(x, y);
    else hole.lineTo(x, y);
  }
  pathShape.holes.push(hole);
}

function extrudeCenteredZ(THREE, shape, depth, curveSegments = 16) {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
    curveSegments
  });
  geo.translate(0, 0, -depth * 0.5);
  geo.computeVertexNormals();
  return geo;
}

function buildPilasterPair(THREE, mats, xLeft, xRight, baseY, height, zFront, depth = 0.065, width = 0.052) {
  const grp = new THREE.Group();
  for (const px of [xLeft, xRight]) {
    const plinth = new THREE.Mesh(
      new THREE.BoxGeometry(width * 1.45, 0.06, depth * 1.35),
      mats.corniceCream
    );
    plinth.position.set(px, baseY + 0.03, zFront);

    const shaft = new THREE.Mesh(
      new THREE.BoxGeometry(width, height - 0.11, depth),
      mats.stonePilaster
    );
    shaft.position.set(px, baseY + 0.06 + (height - 0.11) * 0.5, zFront);

    const capital = new THREE.Mesh(
      new THREE.BoxGeometry(width * 1.55, 0.055, depth * 1.45),
      mats.corniceCream
    );
    capital.position.set(px, baseY + height - 0.025, zFront);

    grp.add(plinth, shaft, capital);
  }
  return grp;
}

function buildArchivoltAndKeystone(THREE, mats, cx, springY, innerRadius, radialWidth, depth, zCenter) {
  const g = new THREE.Group();
  const outerR = innerRadius + radialWidth;
  const shape = new THREE.Shape();
  shape.absarc(0, 0, outerR, 0, Math.PI, false);
  shape.lineTo(-innerRadius, 0);
  shape.absarc(0, 0, innerRadius, Math.PI, 0, true);
  shape.closePath();

  const archMesh = new THREE.Mesh(extrudeCenteredZ(THREE, shape, depth, 18), mats.corniceCream);
  archMesh.position.set(cx, springY, zCenter);
  g.add(archMesh);

  const keystone = new THREE.Mesh(
    new THREE.BoxGeometry(radialWidth * 1.15, radialWidth * 1.5, depth * 1.25),
    mats.corniceCream
  );
  keystone.position.set(cx, springY + innerRadius + radialWidth * 0.5, zCenter + 0.01);
  g.add(keystone);
  return g;
}

function buildSaintFigurineMini(THREE, mats, scale = 1, isCenterVirgin = false) {
  const g = new THREE.Group();
  const robe = new THREE.Mesh(
    new THREE.CylinderGeometry(0.032 * scale, 0.062 * scale, 0.19 * scale, 8),
    isCenterVirgin ? mats.lotusSaintGlow : mats.corniceCream
  );
  robe.position.y = 0.095 * scale;
  const halo = new THREE.Mesh(
    new THREE.CylinderGeometry(0.036 * scale, 0.036 * scale, 0.018 * scale, 12),
    mats.goldCross
  );
  halo.rotation.x = Math.PI / 2;
  halo.position.set(0, 0.22 * scale, -0.02 * scale);
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.034 * scale, 10, 8),
    mats.pureWhiteHead
  );
  head.position.y = 0.22 * scale;
  g.add(robe, head);
  if (isCenterVirgin) {
    const lotus = new THREE.Mesh(
      new THREE.CylinderGeometry(0.078 * scale, 0.052 * scale, 0.034 * scale, 8),
      mats.goldCross
    );
    lotus.position.y = 0.017 * scale;
    g.add(halo, lotus);
  }
  return g;
}

function buildObeliskPair(THREE, mats, positions, baseY, height, zPos) {
  const g = new THREE.Group();
  for (const ox of positions) {
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.09, 0.11), mats.corniceCream);
    plinth.position.set(ox, baseY + 0.045, zPos);

    const midTier = new THREE.Mesh(new THREE.BoxGeometry(0.075, height * 0.34, 0.075), mats.stonePilaster);
    midTier.position.set(ox, baseY + 0.09 + height * 0.17, zPos);

    const spireH = height * 0.54;
    const spire = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.042, spireH, 4),
      mats.corniceCream
    );
    spire.rotation.y = Math.PI / 4;
    spire.position.set(ox, baseY + 0.09 + height * 0.34 + spireH * 0.5, zPos);

    const finialBall = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), mats.goldCross);
    finialBall.position.set(ox, baseY + 0.09 + height * 0.34 + spireH + 0.022, zPos);

    g.add(plinth, midTier, spire, finialBall);
  }
  return g;
}

function buildScrollVolutes(THREE, mats, innerX, outerX, topY, bottomY, depth, zPos) {
  const g = new THREE.Group();
  for (const dir of [-1, 1]) {
    const shape = new THREE.Shape();
    const x0 = 0;
    const x1 = (outerX - innerX) * dir;
    const h = topY - bottomY;
    if (dir > 0) {
      shape.moveTo(x0, 0);
      shape.lineTo(x1, 0);
      shape.bezierCurveTo(x1, h * 0.42, x1 * 0.45, h * 0.38, x1 * 0.42, h * 0.68);
      shape.bezierCurveTo(x1 * 0.38, h * 0.94, x0 + 0.05, h, x0, h);
      shape.closePath();
    } else {
      shape.moveTo(x0, 0);
      shape.lineTo(x0, h);
      shape.bezierCurveTo(x0 - 0.05, h, x1 * 0.38, h * 0.94, x1 * 0.42, h * 0.68);
      shape.bezierCurveTo(x1 * 0.45, h * 0.38, x1, h * 0.42, x1, 0);
      shape.closePath();
    }
    const wing = new THREE.Mesh(extrudeCenteredZ(THREE, shape, depth * 0.86, 14), mats.stoneMain);
    wing.position.set(innerX * dir, bottomY, zPos);

    // Molded coping curl bead
    const curl = new THREE.Mesh(
      new THREE.TorusGeometry(0.055, 0.024, 8, 16, Math.PI * 1.45),
      mats.corniceCream
    );
    curl.position.set((outerX - 0.05) * dir, bottomY + 0.09, zPos + depth * 0.44);
    curl.rotation.z = dir > 0 ? 0.35 : Math.PI - 0.35;

    // Miniature obelisk finial crowning outer scroll shelf
    const miniObelisk = buildObeliskPair(THREE, mats, [outerX * dir - 0.05 * dir], bottomY + 0.04, 0.22, zPos);
    g.add(wing, curl, miniObelisk);
  }
  return g;
}

/**
 * Builds the 5-Tier Sculpted Baroque Ruins / Full Cathedral of St. Paul's.
 * Every mesh marks ignoreOcclusion: true and raycast = () => {} so puzzle sightlines & tile picks stay clear.
 */
export function buildStPaulsMonument(THREEArg, theme = '2026_dusk', opts = {}) {
  const THREE = THREEArg;
  if (!THREE || !THREE.Group || !THREE.Mesh) {
    throw new Error('buildStPaulsMonument requires THREE');
  }

  const mode = opts.mode === 'full' || opts.mode === 'cover' ? opts.mode : 'ruin';
  const anchor = opts.anchor ?? [0, 0, 0];
  const heightRange = opts.heightRange ?? (mode === 'cover' ? [-7.0, 6.2] : [-1.2, 4.4]);
  const mats = makeMatSet(THREE, theme, anchor, heightRange);

  const root = new THREE.Group();
  root.name = `st_pauls_monument_${mode}`;

  // Core wall parameters
  const wallDepth = mode === 'ruin' ? 0.34 : 0.38;
  const podiumTopY = 0.14;

  // 0. Forecourt 3-flight granite terrace steps + cream cheek balustrades (compact +Z <= 0.56)
  const forecourt = new THREE.Group();
  const basePodium = new THREE.Mesh(
    new THREE.BoxGeometry(2.78, podiumTopY, 0.58),
    mats.graniteStep
  );
  basePodium.position.set(0, podiumTopY * 0.5, 0.08);
  forecourt.add(basePodium);

  const stepSpecs = [
    { w: 1.98, h: 0.045, d: 0.44, z: 0.34, y: 0.0225 },
    { w: 1.72, h: 0.045, d: 0.32, z: 0.27, y: 0.0675 },
    { w: 1.46, h: 0.05, d: 0.22, z: 0.21, y: 0.115 }
  ];
  for (const s of stepSpecs) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(s.w, s.h, s.d), mats.graniteStep);
    step.position.set(0, s.y, s.z);
    forecourt.add(step);
  }
  // Low cheek balustrades flanking the forecourt flight
  for (const bx of [-0.94, 0.94]) {
    const cheek = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.16, 0.42), mats.corniceCream);
    cheek.position.set(bx, 0.09, 0.33);
    const newelPost = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.21, 0.14), mats.corniceCream);
    newelPost.position.set(bx, 0.11, 0.51);
    const newelCap = new THREE.Mesh(new THREE.SphereGeometry(0.036, 8, 6), mats.goldCross);
    newelCap.position.set(bx, 0.235, 0.51);
    forecourt.add(cheek, newelPost, newelCap);
  }
  root.add(forecourt);

  // 1. TIER 1: 5-Bay Base (W ~ 2.6, H ~ 0.88) with 3 true pierced round-arch portals
  const t1Y = podiumTopY;
  const t1W = 2.6;
  const t1H = 0.88;
  const t1Shape = new THREE.Shape();
  t1Shape.moveTo(-t1W * 0.5, 0);
  t1Shape.lineTo(t1W * 0.5, 0);
  t1Shape.lineTo(t1W * 0.5, t1H);
  t1Shape.lineTo(-t1W * 0.5, t1H);
  t1Shape.closePath();

  const portalSpecs = [
    { x: 0, w: 0.42, rectH: 0.36, r: 0.21 },
    { x: -0.78, w: 0.31, rectH: 0.32, r: 0.155 },
    { x: 0.78, w: 0.31, rectH: 0.32, r: 0.155 }
  ];
  for (const p of portalSpecs) {
    addArchHolePath(THREE, t1Shape, p.x, 0, p.w, p.rectH, p.r);
  }
  const tier1Wall = new THREE.Mesh(extrudeCenteredZ(THREE, t1Shape, wallDepth, 16), mats.stoneMain);
  tier1Wall.position.set(0, t1Y, 0);
  root.add(tier1Wall);

  // Deep indigo-cornflower recessed portal vaults (and warm inner light reveal in 'full')
  for (const p of portalSpecs) {
    const portalR = p.r;
    root.add(
      buildArchivoltAndKeystone(THREE, mats, p.x, t1Y + p.rectH, portalR, 0.052, wallDepth * 0.24, wallDepth * 0.52)
    );
    const vaultShape = new THREE.Shape();
    vaultShape.moveTo(-p.w * 0.5, 0);
    vaultShape.lineTo(p.w * 0.5, 0);
    vaultShape.lineTo(p.w * 0.5, p.rectH);
    vaultShape.absarc(0, p.rectH, p.r, 0, Math.PI, false);
    vaultShape.closePath();
    const vaultBacking = new THREE.Mesh(
      extrudeCenteredZ(THREE, vaultShape, mode === 'ruin' ? 0.08 : 0.12, 14),
      mode === 'full' && p.x === 0 ? mats.sconceWarm : mats.alcoveDeep
    );
    vaultBacking.position.set(p.x, t1Y, mode === 'ruin' ? -wallDepth * 0.22 : -0.08);
    root.add(vaultBacking);
  }

  // 10 paired Ionic/Corinthian pilasters framing the 5 bays of Tier 1
  const t1PilasterPairs = [
    [-1.24, -1.07],
    [-0.51, -0.34],
    [0.34, 0.51],
    [1.07, 1.24],
    [-0.99, 0.99] // outer paired frame inner return
  ];
  for (const [lx, rx] of t1PilasterPairs) {
    root.add(buildPilasterPair(THREE, mats, lx, rx, t1Y, t1H - 0.06, wallDepth * 0.52, 0.068, 0.048));
  }

  // Sculpted frieze cornice + central "MATER DEI" stone inscription tablet plaque above center portal
  const t1Cornice = new THREE.Mesh(
    new THREE.BoxGeometry(t1W + 0.16, 0.085, wallDepth + 0.13),
    mats.corniceCream
  );
  t1Cornice.position.set(0, t1Y + t1H + 0.042, 0.02);
  const tabletPlaque = new THREE.Mesh(
    new THREE.BoxGeometry(0.46, 0.11, 0.06),
    mats.corniceCream
  );
  tabletPlaque.position.set(0, t1Y + 0.72, wallDepth * 0.54);
  const tabletGoldRim = new THREE.Mesh(
    new THREE.BoxGeometry(0.36, 0.048, 0.07),
    mats.gold
  );
  tabletGoldRim.position.set(0, t1Y + 0.72, wallDepth * 0.545);
  root.add(t1Cornice, tabletPlaque, tabletGoldRim);

  // 2. TIER 2: Saint Niche Gallery (W ~ 2.28, H ~ 0.74) with 3 true pierced arched niches + obelisks
  const t2Y = t1Y + t1H + 0.085;
  const t2W = 2.28;
  const t2H = 0.74;
  const t2Shape = new THREE.Shape();
  t2Shape.moveTo(-t2W * 0.5, 0);
  t2Shape.lineTo(t2W * 0.5, 0);
  t2Shape.lineTo(t2W * 0.5, t2H);
  t2Shape.lineTo(-t2W * 0.5, t2H);
  t2Shape.closePath();

  const nicheSpecs = [
    { x: 0, w: 0.34, rectH: 0.25, r: 0.17 },
    { x: -0.68, w: 0.26, rectH: 0.21, r: 0.13 },
    { x: 0.68, w: 0.26, rectH: 0.21, r: 0.13 }
  ];
  for (const n of nicheSpecs) {
    addArchHolePath(THREE, t2Shape, n.x, 0.08, n.w, n.rectH, n.r);
  }
  const tier2Wall = new THREE.Mesh(extrudeCenteredZ(THREE, t2Shape, wallDepth * 0.92, 16), mats.stoneMain);
  tier2Wall.position.set(0, t2Y, 0);
  root.add(tier2Wall);

  for (const n of nicheSpecs) {
    root.add(
      buildArchivoltAndKeystone(THREE, mats, n.x, t2Y + 0.08 + n.rectH, n.r, 0.045, wallDepth * 0.22, wallDepth * 0.48)
    );
    const corbel = new THREE.Mesh(
      new THREE.BoxGeometry(n.w * 0.9, 0.045, wallDepth * 0.6),
      mats.corniceCream
    );
    corbel.position.set(n.x, t2Y + 0.10, 0.02);
    const figurine = buildSaintFigurineMini(THREE, mats, n.x === 0 ? 1.0 : 0.78, n.x === 0);
    figurine.position.set(n.x, t2Y + 0.12, 0.02);
    root.add(corbel, figurine);

    // Only close back of niches in 'full' cathedral mode; in 'ruin' & 'cover' sky shines cleanly behind
    if (mode === 'full') {
      const backPane = new THREE.Mesh(
        new THREE.BoxGeometry(n.w + 0.02, n.rectH + n.r + 0.02, 0.05),
        n.x === 0 ? mats.sapphireGlow : mats.alcoveDeep
      );
      backPane.position.set(n.x, t2Y + 0.08 + (n.rectH + n.r) * 0.5, -wallDepth * 0.42);
      root.add(backPane);
    }
  }

  // 10 paired Corinthian pilasters framing Tier 2 bays
  const t2PilasterPairs = [
    [-1.08, -0.92],
    [-0.44, -0.28],
    [0.28, 0.44],
    [0.92, 1.08],
    [-0.87, 0.87]
  ];
  for (const [lx, rx] of t2PilasterPairs) {
    root.add(buildPilasterPair(THREE, mats, lx, rx, t2Y, t2H - 0.04, wallDepth * 0.48, 0.06, 0.044));
  }

  // Projecting cornice over Tier 2 + paired 2-stage pyramidal Obelisks on outer ledges
  const t2Cornice = new THREE.Mesh(
    new THREE.BoxGeometry(t2W + 0.14, 0.08, wallDepth + 0.11),
    mats.corniceCream
  );
  t2Cornice.position.set(0, t2Y + t2H + 0.04, 0.015);
  root.add(t2Cornice);
  root.add(buildObeliskPair(THREE, mats, [-1.24, 1.24], t1Y + t1H + 0.085, 0.48, 0.02));
  root.add(buildObeliskPair(THREE, mats, [-1.06, 1.06], t2Y + t2H + 0.08, 0.44, 0.02));

  // 3. TIER 3: Rose Window & Baroque Scroll Volutes (W ~ 1.48, H ~ 0.64)
  const t3Y = t2Y + t2H + 0.08;
  const t3W = 1.48;
  const t3H = 0.64;
  const t3Shape = new THREE.Shape();
  t3Shape.moveTo(-t3W * 0.5, 0);
  t3Shape.lineTo(t3W * 0.5, 0);
  t3Shape.lineTo(t3W * 0.5, t3H);
  t3Shape.lineTo(-t3W * 0.5, t3H);
  t3Shape.closePath();

  const roseY = 0.34;
  const roseR = 0.18;
  addCircleHolePath(THREE, t3Shape, 0, roseY, roseR);
  addOvalHolePath(THREE, t3Shape, -0.48, roseY - 0.02, 0.095, 0.145);
  addOvalHolePath(THREE, t3Shape, 0.48, roseY - 0.02, 0.095, 0.145);

  const tier3Wall = new THREE.Mesh(extrudeCenteredZ(THREE, t3Shape, wallDepth * 0.84, 20), mats.stoneMain);
  tier3Wall.position.set(0, t3Y, 0);
  root.add(tier3Wall);

  // Rose window outer stone ring, radiating tracery spokes & warm sapphire-gold center medallion
  const roseRing = new THREE.Mesh(
    new THREE.TorusGeometry(roseR + 0.015, 0.028, 8, 24),
    mats.corniceCream
  );
  roseRing.position.set(0, t3Y + roseY, wallDepth * 0.42);
  root.add(roseRing);

  const spokeMat = mats.corniceCream;
  for (let i = 0; i < 4; i += 1) {
    const spoke = new THREE.Mesh(
      new THREE.BoxGeometry(roseR * 1.9, 0.018, wallDepth * 0.52),
      spokeMat
    );
    spoke.rotation.z = (i * Math.PI) / 4;
    spoke.position.set(0, t3Y + roseY, 0);
    root.add(spoke);
  }
  const roseCenter = new THREE.Mesh(
    new THREE.CylinderGeometry(0.052, 0.052, wallDepth * 0.58, 12),
    mats.goldCross
  );
  roseCenter.rotation.x = Math.PI / 2;
  roseCenter.position.set(0, t3Y + roseY, 0);
  root.add(roseCenter);

  if (mode === 'full') {
    const roseGlass = new THREE.Mesh(
      new THREE.CylinderGeometry(roseR * 0.96, roseR * 0.96, 0.04, 20),
      mats.sapphireGlow
    );
    roseGlass.rotation.x = Math.PI / 2;
    roseGlass.position.set(0, t3Y + roseY, -0.05);
    root.add(roseGlass);
  }

  for (const ox of [-0.48, 0.48]) {
    const ovalRim = new THREE.Mesh(
      new THREE.TorusGeometry(0.115, 0.022, 8, 18),
      mats.corniceCream
    );
    ovalRim.scale.set(0.84, 1.26, 1.0);
    ovalRim.position.set(ox, t3Y + roseY - 0.02, wallDepth * 0.42);
    root.add(ovalRim);
  }

  root.add(buildPilasterPair(THREE, mats, -0.68, 0.68, t3Y, t3H - 0.03, wallDepth * 0.44, 0.055, 0.044));
  root.add(buildPilasterPair(THREE, mats, -0.30, 0.30, t3Y, t3H - 0.03, wallDepth * 0.44, 0.055, 0.042));

  // Symmetrical Baroque Scroll Volutes sweeping outward from Tier 3 edges onto Tier 2 ledges
  root.add(buildScrollVolutes(THREE, mats, t3W * 0.48, 1.12, t3Y + t3H * 0.88, t3Y, wallDepth * 0.82, 0));

  const t3Cornice = new THREE.Mesh(
    new THREE.BoxGeometry(t3W + 0.14, 0.075, wallDepth + 0.09),
    mats.corniceCream
  );
  t3Cornice.position.set(0, t3Y + t3H + 0.038, 0.01);
  root.add(t3Cornice);

  // 4. TIER 4 & 5: Triangular Pediment with recessed tympanum, Dove/Star relief & Gilded Baroque Cross Crown
  const t4Y = t3Y + t3H + 0.075;
  const pedW = 1.06;
  const pedH = 0.52;
  const pedShape = new THREE.Shape();
  pedShape.moveTo(-pedW * 0.5, 0);
  pedShape.lineTo(pedW * 0.5, 0);
  pedShape.lineTo(0, pedH);
  pedShape.closePath();

  const pediment = new THREE.Mesh(extrudeCenteredZ(THREE, pedShape, wallDepth * 0.78, 8), mats.stoneMain);
  pediment.position.set(0, t4Y, 0);
  root.add(pediment);

  // Recessed triangular tympanum + star/dove emblem
  const tympShape = new THREE.Shape();
  tympShape.moveTo(-pedW * 0.34, 0.055);
  tympShape.lineTo(pedW * 0.34, 0.055);
  tympShape.lineTo(0, pedH * 0.72);
  tympShape.closePath();
  const tympanum = new THREE.Mesh(
    extrudeCenteredZ(THREE, tympShape, 0.05, 6),
    mode === 'full' ? mats.sapphireGlow : mats.alcoveDeep
  );
  tympanum.position.set(0, t4Y, wallDepth * 0.38);
  root.add(tympanum);

  // Sculpted 4-point Star / Dove relief in tympanum
  const doveBody = new THREE.Mesh(new THREE.OctahedronGeometry(0.068, 0), mats.goldCross);
  doveBody.scale.set(1.25, 0.78, 0.55);
  doveBody.position.set(0, t4Y + pedH * 0.33, wallDepth * 0.42);
  const doveHalo = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.014, 6, 14), mats.corniceCream);
  doveHalo.position.set(0, t4Y + pedH * 0.33, wallDepth * 0.41);
  root.add(doveBody, doveHalo);

  // Pediment sloped raking cornice bars
  const slopeLen = Math.hypot(pedW * 0.5 + 0.06, pedH + 0.04);
  const slopeAngle = Math.atan2(pedH, pedW * 0.5);
  for (const dir of [-1, 1]) {
    const raking = new THREE.Mesh(
      new THREE.BoxGeometry(slopeLen, 0.06, wallDepth * 0.88),
      mats.corniceCream
    );
    raking.rotation.z = -dir * slopeAngle;
    raking.position.set(dir * pedW * 0.25, t4Y + pedH * 0.5 + 0.025, 0.01);
    root.add(raking);
  }
  root.add(buildObeliskPair(THREE, mats, [-0.56, 0.56], t4Y, 0.30, 0.01));

  // Apex pedestal + Gilded Baroque Cross Finial (#f8d278)
  const apexPlinth = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.11, 0.16), mats.corniceCream);
  apexPlinth.position.set(0, t4Y + pedH + 0.04, 0);
  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.046, 0.31, 0.046), mats.goldCross);
  crossV.position.set(0, t4Y + pedH + 0.24, 0);
  const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.046, 0.046), mats.goldCross);
  crossH.position.set(0, t4Y + pedH + 0.29, 0);
  const crossOrb = new THREE.Mesh(new THREE.SphereGeometry(0.036, 8, 6), mats.goldCross);
  crossOrb.position.set(0, t4Y + pedH + 0.29, 0);
  root.add(apexPlinth, crossV, crossH, crossOrb);

  // 5. Mode-specific extensions behind the facade (-Z)
  if (mode === 'full') {
    // 1622 Full Basilica Nave (-Z, L ~ 2.5) with buttresses, lit clerestory windows, apse dome, and double-tiered cerulean-terracotta roof
    const naveGroup = new THREE.Group();
    const naveW = 2.24;
    const naveL = 2.48;
    const naveH = 1.66;
    const naveZ = -wallDepth * 0.5 - naveL * 0.5 + 0.02;

    const naveBody = new THREE.Mesh(new THREE.BoxGeometry(naveW, naveH, naveL), mats.stoneMain);
    naveBody.position.set(0, podiumTopY + naveH * 0.5, naveZ);
    naveGroup.add(naveBody);

    // Side buttresses & warm-lit arched clerestory windows along both nave flanks
    for (const sx of [-1, 1]) {
      for (const bz of [-0.62, -1.32, -2.02]) {
        const buttress = new THREE.Mesh(
          new THREE.BoxGeometry(0.16, naveH * 0.88, 0.18),
          mats.stonePilaster
        );
        buttress.position.set(sx * (naveW * 0.5 + 0.06), podiumTopY + naveH * 0.44, bz);
        naveGroup.add(buttress);
      }
      for (const wz of [-0.97, -1.67]) {
        const winFrame = new THREE.Mesh(
          new THREE.BoxGeometry(0.06, 0.38, 0.22),
          mats.corniceCream
        );
        winFrame.position.set(sx * (naveW * 0.5 + 0.01), podiumTopY + naveH * 0.68, wz);
        const winGlow = new THREE.Mesh(
          new THREE.BoxGeometry(0.075, 0.30, 0.15),
          mats.sconceWarm
        );
        winGlow.position.set(sx * (naveW * 0.5 + 0.012), podiumTopY + naveH * 0.68, wz);
        naveGroup.add(winFrame, winGlow);
      }
    }

    // Semicircular apse + cerulean cupola at the -Z rear
    const apseBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.72, 0.76, naveH * 0.86, 16),
      mats.stoneMain
    );
    apseBody.position.set(0, podiumTopY + naveH * 0.43, naveZ - naveL * 0.5 - 0.14);
    const apseDome = new THREE.Mesh(
      new THREE.SphereGeometry(0.74, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.52),
      mats.roofCerulean
    );
    apseDome.position.set(0, podiumTopY + naveH * 0.86, naveZ - naveL * 0.5 - 0.14);
    const apseFinial = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), mats.goldCross);
    apseFinial.position.set(0, podiumTopY + naveH * 0.86 + 0.76, naveZ - naveL * 0.5 - 0.14);
    naveGroup.add(apseBody, apseDome, apseFinial);

    // Double-tiered cerulean-terracotta pitched roof (cleanly extruded behind front facade)
    const lowerRoofY = podiumTopY + naveH;
    const lowerSlopeShape = new THREE.Shape();
    lowerSlopeShape.moveTo(-1.26, 0);
    lowerSlopeShape.lineTo(1.26, 0);
    lowerSlopeShape.lineTo(0.62, 0.44);
    lowerSlopeShape.lineTo(-0.62, 0.44);
    lowerSlopeShape.closePath();
    const lowerRoof = new THREE.Mesh(
      extrudeCenteredZ(THREE, lowerSlopeShape, naveL - 0.08, 4),
      mats.roofTerracotta
    );
    lowerRoof.position.set(0, lowerRoofY, naveZ);

    const clerestoryNeck = new THREE.Mesh(
      new THREE.BoxGeometry(1.18, 0.28, naveL * 0.86),
      mats.corniceCream
    );
    clerestoryNeck.position.set(0, lowerRoofY + 0.56, naveZ);

    const upperGableShape = new THREE.Shape();
    upperGableShape.moveTo(-0.74, 0);
    upperGableShape.lineTo(0.74, 0);
    upperGableShape.lineTo(0, 0.48);
    upperGableShape.closePath();
    const upperRoof = new THREE.Mesh(
      extrudeCenteredZ(THREE, upperGableShape, naveL * 0.90, 4),
      mats.roofCerulean
    );
    upperRoof.position.set(0, lowerRoofY + 0.70, naveZ);

    const ridgeBeam = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, naveL * 0.92),
      mats.goldCross
    );
    ridgeBeam.position.set(0, lowerRoofY + 1.20, naveZ);

    const ridgeCross = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), mats.goldCross);
    ridgeCross.position.set(0, lowerRoofY + 1.28, naveZ - 0.65);

    naveGroup.add(lowerRoof, clerestoryNeck, upperRoof, ridgeBeam, ridgeCross);
    root.add(naveGroup);
  } else if (mode === 'ruin') {
    // Open-air Ruins: pastel rear buttress ribs + rear stair terrace behind the facade
    const rearGroup = new THREE.Group();
    const rearTerrace = new THREE.Mesh(
      new THREE.BoxGeometry(2.34, 0.24, 0.82),
      mats.graniteStep
    );
    rearTerrace.position.set(0, 0.12, -wallDepth * 0.5 - 0.39);
    rearGroup.add(rearTerrace);

    for (const bx of [-0.94, 0.94]) {
      const buttressLower = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 1.05, 0.52),
        mats.stonePilaster
      );
      buttressLower.position.set(bx, 0.525, -wallDepth * 0.5 - 0.26);
      const buttressUpper = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.72, 0.30),
        mats.stonePilaster
      );
      buttressUpper.position.set(bx, 1.38, -wallDepth * 0.5 - 0.15);
      rearGroup.add(buttressLower, buttressUpper);
    }
    const rearStair = new THREE.Mesh(
      new THREE.BoxGeometry(0.86, 0.12, 0.34),
      mats.graniteStep
    );
    rearStair.position.set(0, 0.06, -wallDepth * 0.5 - 0.84);
    rearGroup.add(rearStair);
    root.add(rearGroup);
  }

  return markNonBlocking(root);
}

function buildMosaicHexagramMesh(THREE, mats, radius = 0.42) {
  const g = new THREE.Group();
  const frameRing = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 1.16, radius * 1.18, 0.04, 6),
    mats.corniceCream
  );
  frameRing.position.y = 0.02;
  g.add(frameRing);

  const colors = [mats.coralRed, mats.obsidianCharcoal, mats.corniceCream, mats.hexGreen];
  const rInner = radius * 0.54;
  for (let i = 0; i < 6; i += 1) {
    const a0 = (i * Math.PI) / 3;
    const a1 = ((i + 1) * Math.PI) / 3;
    const aMid = (a0 + a1) * 0.5;
    const tip = new THREE.Vector2(Math.cos(aMid) * radius, Math.sin(aMid) * radius);
    const p0 = new THREE.Vector2(Math.cos(a0) * rInner, Math.sin(a0) * rInner);
    const p1 = new THREE.Vector2(Math.cos(a1) * rInner, Math.sin(a1) * rInner);

    const tri = new THREE.Shape();
    tri.moveTo(p0.x, p0.y);
    tri.lineTo(p1.x, p1.y);
    tri.lineTo(tip.x, tip.y);
    tri.closePath();

    const geo = new THREE.ExtrudeGeometry(tri, { depth: 0.026, bevelEnabled: false });
    geo.rotateX(-Math.PI / 2);
    const segMesh = new THREE.Mesh(geo, colors[i % colors.length]);
    segMesh.position.y = 0.041;
    g.add(segMesh);
  }

  const hollowCenter = new THREE.Mesh(
    new THREE.CylinderGeometry(rInner * 0.94, rInner * 0.94, 0.025, 6),
    mats.alcoveDeep
  );
  hollowCenter.position.y = 0.036;
  const centerRim = new THREE.Mesh(
    new THREE.TorusGeometry(rInner * 0.65, 0.024, 6, 6),
    mats.corniceCream
  );
  centerRim.rotation.x = Math.PI / 2;
  centerRim.position.y = 0.056;
  g.add(hollowCenter, centerRim);
  return g;
}

function buildFallbackCharacterFigurine(THREE, mats, actorId) {
  const g = new THREE.Group();
  let coatMat = mats.obsidianCharcoal;
  let accentMat = mats.jadeMech;
  if (actorId === 'afonso') {
    coatMat = mats.coralRed;
    accentMat = mats.goldCross;
  } else if (actorId === 'ryan') {
    coatMat = mats.alcoveDeep;
    accentMat = mats.jadeGlow ? mats.jadeMech : mats.sapphireGlow;
  } else {
    coatMat = mats.stonePilaster;
    accentMat = mats.coralRed;
  }

  const cloak = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.36, 8), coatMat);
  cloak.position.y = 0.18;
  const sash = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.105, 0.10, 8), accentMat);
  sash.position.y = 0.25;
  const head = new THREE.Mesh(new THREE.ConeGeometry(0.095, 0.18, 10), mats.pureWhiteHead);
  head.position.y = 0.45;
  const faceSphere = new THREE.Mesh(new THREE.SphereGeometry(0.082, 10, 8), mats.pureWhiteHead);
  faceSphere.position.y = 0.41;
  g.add(cloak, sash, head, faceSphere);
  return g;
}

function resolveFigurine(THREE, helpers, mats, actorId) {
  if (helpers && typeof helpers.createCharacterFigurine === 'function') {
    try {
      const fig = helpers.createCharacterFigurine(THREE, actorId);
      if (fig) {
        if (typeof fig.setActive === 'function') fig.setActive(false);
        const obj = fig.group || fig.root || fig;
        if (obj && obj.scale && obj.position) {
          obj.userData = { ...(obj.userData || {}), isExternalFigurine: true };
          return obj;
        }
      }
    } catch {
      // Fall back cleanly to white-head geometric silhouette
    }
  }
  return buildFallbackCharacterFigurine(THREE, mats, actorId);
}

function buildGuiaBastion(THREE, mats) {
  const g = new THREE.Group();
  g.name = 'guia_lighthouse_bastion';

  // Pastel arched fort bastion plinth
  const fortBase = new THREE.Mesh(new THREE.BoxGeometry(1.55, 1.35, 1.45), mats.stoneMain);
  fortBase.position.y = 0.675;
  const fortParapet = new THREE.Mesh(new THREE.BoxGeometry(1.66, 0.14, 1.56), mats.corniceCream);
  fortParapet.position.y = 1.42;
  const sideArch = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.56, 0.12), mats.alcoveDeep);
  sideArch.position.set(0, 0.44, 0.72);

  // Small adjacent white Chapel of Our Lady of Guia gable
  const chapel = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.52, 0.68), mats.corniceCream);
  chapel.position.set(-0.46, 1.72, -0.22);
  const chapelRoof = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.48, 0.28, 4), mats.roofTerracotta);
  chapelRoof.rotation.y = Math.PI / 4;
  chapelRoof.position.set(-0.46, 2.12, -0.22);

  // Tapered cream-white Guia Lighthouse shaft
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.38, 1.42, 12), mats.corniceCream);
  shaft.position.set(0.18, 2.20, 0.12);
  const redBand = new THREE.Mesh(new THREE.CylinderGeometry(0.30, 0.32, 0.10, 12), mats.goldCross);
  redBand.position.set(0.18, 2.48, 0.12);
  const galleryDeck = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.28, 0.11, 12), mats.corniceCream);
  galleryDeck.position.set(0.18, 2.94, 0.12);
  const galleryGoldRim = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.025, 6, 16), mats.goldCross);
  galleryGoldRim.rotation.x = Math.PI / 2;
  galleryGoldRim.position.set(0.18, 3.04, 0.12);

  // Glowing warm-gold lantern gallery
  const lanternDrum = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.34, 12), mats.sconceWarm);
  lanternDrum.position.set(0.18, 3.16, 0.12);

  // Mint-teal glazed cupola dome + gold finial needle
  const cupola = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.56),
    mats.jadeMech
  );
  cupola.position.set(0.18, 3.31, 0.12);
  const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.024, 0.24, 6), mats.goldCross);
  finial.position.set(0.18, 3.64, 0.12);

  g.add(
    fortBase,
    fortParapet,
    sideArch,
    chapel,
    chapelRoof,
    shaft,
    redBand,
    galleryDeck,
    galleryGoldRim,
    lanternDrum,
    cupola,
    finial
  );
  return g;
}

function buildAMaPavilion(THREE, mats) {
  const g = new THREE.Group();
  g.name = 'ama_temple_terrace';

  // Granite harbor terrace + carved Ship Rock
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.78, 1.15, 1.56), mats.graniteStep);
  base.position.y = 0.575;
  const trim = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.12, 1.66), mats.corniceCream);
  trim.position.y = 1.18;
  const shipRock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.38, 0), mats.graniteStep);
  shipRock.scale.set(1.25, 0.85, 0.95);
  shipRock.position.set(0.56, 1.44, 0.42);
  const shipSailStele = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.30, 0.18), mats.coralRed);
  shipSailStele.position.set(0.56, 1.72, 0.42);

  // 4 coral lacquer pillars + warm shrine hearth inside
  const pxOff = [-0.46, 0.26];
  const pzOff = [-0.42, 0.30];
  for (const px of pxOff) {
    for (const pz of pzOff) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.056, 0.88, 8), mats.coralRed);
      col.position.set(px, 1.68, pz);
      g.add(col);
    }
  }
  const shrineGlow = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.58, 0.44), mats.sconceWarm);
  shrineGlow.position.set(-0.10, 1.56, -0.06);

  // Double-tiered curved cerulean-teal flying-eave roof
  const lowerEave = new THREE.Mesh(
    new THREE.CylinderGeometry(0.52, 1.08, 0.32, 4, 1, false, Math.PI / 4),
    mats.roofCerulean
  );
  lowerEave.scale.set(1.15, 1.0, 1.12);
  lowerEave.position.set(-0.10, 2.24, -0.06);

  const upperNeck = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.24, 0.62), mats.corniceCream);
  upperNeck.position.set(-0.10, 2.48, -0.06);

  const upperEave = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.82, 0.36, 4, 1, false, Math.PI / 4),
    mats.roofCerulean
  );
  upperEave.scale.set(1.12, 1.0, 1.10);
  upperEave.position.set(-0.10, 2.74, -0.06);

  const ridgeOrb = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 6), mats.goldCross);
  ridgeOrb.position.set(-0.10, 2.98, -0.06);

  // Flying eave corner upturned fins
  for (const [fx, fz] of [
    [-0.86, 0.62],
    [0.66, 0.62],
    [0.66, -0.74],
    [-0.86, -0.74]
  ]) {
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.20, 4), mats.goldCross);
    horn.position.set(fx, 2.22, fz);
    horn.rotation.z = fx < 0 ? 0.55 : -0.55;
    horn.rotation.x = fz > 0 ? 0.55 : -0.55;
    g.add(horn);
  }

  g.add(base, trim, shipRock, shipSailStele, shrineGlow, lowerEave, upperNeck, upperEave, ridgeOrb);
  return g;
}

function buildPuiChingCourtyardWing(THREE, mats) {
  const g = new THREE.Group();
  g.name = 'pui_ching_building_a';

  // Mint-green 2-story octagonal wooden-shuttered turret (left front corner, cleanly below Guia y >= 1.64)
  const turretX = -1.62;
  const turretZ = 0.62;
  const turretBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.44, 0.94, 8), mats.puiChingMint);
  turretBody.rotation.y = Math.PI / 8;
  turretBody.position.set(turretX, 0.47, turretZ);
  const turretCornice = new THREE.Mesh(new THREE.CylinderGeometry(0.47, 0.44, 0.065, 8), mats.corniceCream);
  turretCornice.rotation.y = Math.PI / 8;
  turretCornice.position.set(turretX, 0.97, turretZ);
  const turretRoof = new THREE.Mesh(new THREE.ConeGeometry(0.49, 0.26, 8), mats.roofTerracotta);
  turretRoof.rotation.y = Math.PI / 8;
  turretRoof.position.set(turretX, 1.13, turretZ);

  // Warm wooden shutters on visible turret faces
  for (const angle of [0, Math.PI / 4, Math.PI / 2]) {
    const shutter = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.26, 0.04), mats.coralRed);
    shutter.position.set(
      turretX + Math.sin(angle) * 0.40,
      0.70,
      turretZ + Math.cos(angle) * 0.40
    );
    shutter.rotation.y = angle;
    const shutterLow = shutter.clone();
    shutterLow.position.y = 0.30;
    g.add(shutter, shutterLow);
  }

  // Adjacent mint-green gallery + white 3-bay arched colonnade facing courtyard (shifted left to clear grand stair & Guia)
  const hallX = -1.00;
  const hallZ = -0.44;
  const hall = new THREE.Mesh(new THREE.BoxGeometry(1.06, 0.96, 0.64), mats.puiChingMint);
  hall.position.set(hallX, 0.48, hallZ);
  const hallRoof = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.72, 0.30, 4, 1, false, Math.PI / 4),
    mats.roofTerracotta
  );
  hallRoof.scale.set(1.06, 1.0, 0.66);
  hallRoof.position.set(hallX, 1.13, hallZ);
  const hallRoofBeam = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.055, 0.07), mats.corniceCream);
  hallRoofBeam.position.set(hallX, 1.29, hallZ);

  const arcadePlinth = new THREE.Mesh(new THREE.BoxGeometry(1.10, 0.12, 0.22), mats.corniceCream);
  arcadePlinth.position.set(hallX, 0.94, hallZ + 0.34);
  for (const ax of [-1.42, -1.14, -0.86, -0.58]) {
    const col = new THREE.Mesh(new THREE.BoxGeometry(0.095, 0.88, 0.12), mats.corniceCream);
    col.position.set(ax, 0.44, hallZ + 0.34);
    g.add(col);
  }

  // Hollow red-black-white-green interwoven mosaic hexagram on courtyard stone porch
  const hexagram = buildMosaicHexagramMesh(THREE, mats, 0.40);
  hexagram.position.set(-0.78, 0.0, 0.72);

  // Sunken courtyard planter with sculpted geometric mint-jade banyan / lotus tree
  const planterRim = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.16, 0.92), mats.corniceCream);
  planterRim.position.set(-1.32, 0.08, 1.56);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.10, 0.54, 7), mats.coralRed);
  trunk.position.set(-1.32, 0.41, 1.56);
  const foliageA = new THREE.Mesh(new THREE.DodecahedronGeometry(0.35, 0), mats.jadeTree);
  foliageA.position.set(-1.32, 0.84, 1.56);
  const foliageB = new THREE.Mesh(new THREE.DodecahedronGeometry(0.24, 0), mats.puiChingMint);
  foliageB.position.set(-1.12, 0.72, 1.72);

  g.add(
    turretBody,
    turretCornice,
    turretRoof,
    hall,
    hallRoof,
    hallRoofBeam,
    arcadePlinth,
    hexagram,
    planterRim,
    trunk,
    foliageA,
    foliageB
  );
  return { group: g, hallRoof, turretRoof };
}

function buildJadeSlidingMech(THREE, mats) {
  const g = new THREE.Group();
  g.name = 'mint_jade_sliding_mech';

  const block = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.46, 0.78), mats.jadeMech);
  block.position.set(0, 0.23, 0);
  g.add(block);

  // Signature Monument Valley 2 "◦ ◦ ◦" three concentric recessed circles on both +Z & +X faces
  for (const dx of [-0.34, 0, 0.34]) {
    const outerRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.088, 0.022, 8, 18),
      mats.corniceCream
    );
    outerRing.position.set(dx, 0.23, 0.395);
    const innerDot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.044, 0.044, 0.03, 12),
      mats.alcoveDeep
    );
    innerDot.rotation.x = Math.PI / 2;
    innerDot.position.set(dx, 0.23, 0.392);
    g.add(outerRing, innerDot);
  }
  for (const dz of [-0.18, 0.18]) {
    const sideRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.075, 0.02, 8, 16),
      mats.corniceCream
    );
    sideRing.rotation.y = Math.PI / 2;
    sideRing.position.set(0.595, 0.23, dz);
    g.add(sideRing);
  }

  // Octagonal interactive button pillar beside the sliding block
  const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.17, 0.62, 8), mats.corniceCream);
  pillar.position.set(0.84, 0.31, 0.16);
  const buttonCap = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.08, 8), mats.jadeMech);
  buttonCap.position.set(0.84, 0.66, 0.16);
  const buttonOrb = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), mats.sconceWarm);
  buttonOrb.position.set(0.84, 0.76, 0.16);
  g.add(pillar, buttonCap, buttonOrb);

  return { group: g, buttonOrb };
}

function buildArchCutawaySurround(THREE, mats, outerW, outerH, openW, rectH, archR, depth = 0.08) {
  const surround = new THREE.Group();
  const shape = new THREE.Shape();
  shape.moveTo(-outerW * 0.5, -outerH * 0.5);
  shape.lineTo(outerW * 0.5, -outerH * 0.5);
  shape.lineTo(outerW * 0.5, outerH * 0.5);
  shape.lineTo(-outerW * 0.5, outerH * 0.5);
  shape.closePath();

  const bottomY = -outerH * 0.5 + 0.10;
  addArchHolePath(THREE, shape, 0, bottomY, openW, rectH, archR);

  const frameMesh = new THREE.Mesh(extrudeCenteredZ(THREE, shape, depth, 18), mats.corniceCream);
  surround.add(frameMesh);

  // Top molded hood & bottom sill ledge framing the cutaway arch
  const hood = new THREE.Mesh(new THREE.BoxGeometry(outerW + 0.08, 0.085, depth + 0.05), mats.corniceCream);
  hood.position.set(0, outerH * 0.5 + 0.025, 0.015);
  const sill = new THREE.Mesh(new THREE.BoxGeometry(outerW + 0.06, 0.09, depth + 0.06), mats.corniceCream);
  sill.position.set(0, -outerH * 0.5 + 0.045, 0.02);
  surround.add(hood, sill);
  return surround;
}

function buildDeepCornflowerBaseAndAlcoves(THREE, mats, helpers) {
  const g = new THREE.Group();
  g.name = 'deep_cornflower_vaulted_base';
  const sconces = [];

  // Main towering core spanning y = -6.2 .. +0.1 (h = 6.3, center y = -3.05)
  const lowerTier = new THREE.Mesh(new THREE.BoxGeometry(4.2, 3.1, 3.4), mats.stoneMain);
  lowerTier.position.set(0, -4.65, 0);
  const midTier = new THREE.Mesh(new THREE.BoxGeometry(3.9, 3.2, 3.2), mats.stoneMain);
  midTier.position.set(0, -1.5, 0);

  // Horizontal string-course parapets separating base levels
  const bandLow = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.14, 3.6), mats.corniceCream);
  bandLow.position.set(0, -3.12, 0);
  const bandDeck = new THREE.Mesh(new THREE.BoxGeometry(4.65, 0.18, 3.85), mats.corniceCream);
  bandDeck.position.set(0, 0.01, 0);
  g.add(lowerTier, midTier, bandLow, bandDeck);

  // Deep vaulted colonnade arches along the bottom pier base (y = -6.2 .. -3.4)
  for (const ax of [-1.25, 0, 1.25]) {
    const frontVault = new THREE.Mesh(new THREE.BoxGeometry(0.76, 2.05, 0.20), mats.alcoveDeep);
    frontVault.position.set(ax, -5.15, 1.62);
    const frontArchCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.38, 0.22, 14),
      mats.alcoveDeep
    );
    frontArchCap.rotation.x = Math.PI / 2;
    frontArchCap.position.set(ax, -4.12, 1.62);
    g.add(frontVault, frontArchCap);
  }
  for (const az of [-0.95, 0, 0.95]) {
    const sideVault = new THREE.Mesh(new THREE.BoxGeometry(0.20, 2.05, 0.68), mats.alcoveDeep);
    sideVault.position.set(2.02, -5.15, az);
    const sideArchCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.34, 0.34, 0.22, 14),
      mats.alcoveDeep
    );
    sideArchCap.rotation.z = Math.PI / 2;
    sideArchCap.position.set(2.02, -4.12, az);
    g.add(sideVault, sideArchCap);
  }

  // Cutaway Alcove 1 (+Z left upper on midTier z = 1.60, y ~ -1.45): Rounded cream arch spandrel + recessed chamber
  const alc1 = new THREE.Group();
  alc1.position.set(-0.92, -1.45, 1.61);
  const alc1Surround = buildArchCutawaySurround(THREE, mats, 1.44, 1.44, 1.04, 0.68, 0.52, 0.08);
  const alc1Box = new THREE.Mesh(new THREE.BoxGeometry(1.10, 1.24, 0.14), mats.alcoveDeep);
  alc1Box.position.set(0, -0.02, -0.10);
  const alc1Floor = new THREE.Mesh(new THREE.BoxGeometry(1.10, 0.10, 0.18), mats.jadeMech);
  alc1Floor.position.set(0, -0.60, -0.06);
  alc1.add(alc1Surround, alc1Box, alc1Floor);
  for (let s = 0; s < 7; s += 1) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.12, 0.16), mats.jadeMech);
    step.position.set(-0.39 + s * 0.13, -0.50 + s * 0.10, -0.06);
    alc1.add(step);
  }
  const sconce1 = new THREE.Mesh(new THREE.SphereGeometry(0.062, 10, 8), mats.sconceWarm);
  sconce1.position.set(0.30, 0.24, -0.04);
  sconces.push(sconce1);
  const reader = resolveFigurine(THREE, helpers, mats, 'sofia');
  reader.scale.setScalar(reader.userData?.isExternalFigurine ? 0.42 : 0.72);
  reader.position.set(0.0, -0.14, -0.04);
  alc1.add(sconce1, reader);
  g.add(alc1);

  // Cutaway Alcove 2 (+X right face on midTier x = 1.95, y ~ -1.85): Rounded cream arch spandrel + round tea table + twin sconces + elder silhouette
  const alc2 = new THREE.Group();
  alc2.position.set(1.96, -1.85, 0.10);
  alc2.rotation.y = Math.PI / 2;
  const alc2Surround = buildArchCutawaySurround(THREE, mats, 1.56, 1.46, 1.14, 0.68, 0.57, 0.08);
  const alc2Box = new THREE.Mesh(new THREE.BoxGeometry(1.20, 1.26, 0.14), mats.alcoveDeep);
  alc2Box.position.set(0, -0.02, -0.10);
  const alc2Floor = new THREE.Mesh(new THREE.BoxGeometry(1.20, 0.10, 0.18), mats.jadeMech);
  alc2Floor.position.set(0, -0.61, -0.06);
  const teaTableStem = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.07, 0.30, 8), mats.corniceCream);
  teaTableStem.position.set(0.08, -0.41, -0.05);
  const teaTableTop = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.20, 0.042, 12), mats.corniceCream);
  teaTableTop.position.set(0.08, -0.24, -0.05);
  const elder = buildFallbackCharacterFigurine(THREE, mats, 'afonso');
  elder.scale.setScalar(0.80);
  elder.position.set(-0.30, -0.55, -0.05);
  for (const sx of [-0.34, 0.34]) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.062, 10, 8), mats.sconceWarm);
    s.position.set(sx, 0.26, -0.04);
    sconces.push(s);
    alc2.add(s);
  }
  alc2.add(alc2Surround, alc2Box, alc2Floor, teaTableStem, teaTableTop, elder);
  g.add(alc2);

  // Cutaway Alcove 3 (+Z lower right-center on lowerTier z = 1.70, y ~ -3.85): Rounded cream arch spandrel + bookshelf grid + sconce + scholar figurine
  const alc3 = new THREE.Group();
  alc3.position.set(0.74, -3.85, 1.71);
  const alc3Surround = buildArchCutawaySurround(THREE, mats, 1.46, 1.38, 1.04, 0.62, 0.52, 0.08);
  const alc3Box = new THREE.Mesh(new THREE.BoxGeometry(1.12, 1.18, 0.14), mats.alcoveDeep);
  alc3Box.position.set(0, -0.02, -0.10);
  const alc3Floor = new THREE.Mesh(new THREE.BoxGeometry(1.12, 0.10, 0.18), mats.jadeMech);
  alc3Floor.position.set(0, -0.57, -0.06);
  alc3.add(alc3Surround, alc3Box, alc3Floor);

  const bookMats = [mats.corniceCream, mats.jadeMech, mats.coralRed];
  for (let row = 0; row < 3; row += 1) {
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.030, 0.12), mats.corniceCream);
    shelf.position.set(-0.18, -0.35 + row * 0.26, -0.06);
    alc3.add(shelf);
    for (let b = 0; b < 4; b += 1) {
      const book = new THREE.Mesh(
        new THREE.BoxGeometry(0.10, 0.16, 0.10),
        bookMats[(row + b) % bookMats.length]
      );
      book.position.set(-0.40 + b * 0.14, -0.25 + row * 0.26, -0.05);
      alc3.add(book);
    }
  }
  const sconce3 = new THREE.Mesh(new THREE.SphereGeometry(0.060, 10, 8), mats.sconceWarm);
  sconce3.position.set(0.30, 0.24, -0.04);
  sconces.push(sconce3);
  const scholar = resolveFigurine(THREE, helpers, mats, 'ryan');
  scholar.scale.setScalar(scholar.userData?.isExternalFigurine ? 0.42 : 0.72);
  scholar.position.set(0.28, -0.52, -0.04);
  alc3.add(sconce3, scholar);
  g.add(alc3);

  return { group: g, sconces };
}

/**
 * Towering Monument Valley 2 isometric Macau Landmark Wonder Tower for the Title Cover.
 */
export function buildMacauCoverDiorama(THREEArg, helpers = {}) {
  const THREE = THREEArg;
  if (!THREE || !THREE.Group || !THREE.Mesh) {
    throw new Error('buildMacauCoverDiorama requires THREE');
  }

  const themeKey = helpers.themeKey || '2026_dusk';
  let activeBgMode = setMonumentBgMode(helpers.bgMode ?? getMonumentBgMode());
  const theme = resolveMonumentTheme(themeKey, activeBgMode);
  const root = new THREE.Group();
  root.name = 'macau_cover_diorama';

  const cameraTarget = {
    x: COVER_CAMERA_TARGET.x,
    y: COVER_CAMERA_TARGET.y,
    z: COVER_CAMERA_TARGET.z
  };
  const targetVec = new THREE.Vector3(cameraTarget.x, cameraTarget.y, cameraTarget.z);

  // Soft built-in lighting in case host uses standard/phong extras alongside MonumentShader
  const sunLight = new THREE.DirectionalLight(0xffe7c2, 1.15);
  sunLight.position.set(8, 14, 10);
  const skyFill = new THREE.HemisphereLight(0xd9f6f0, 0x7b92db, 0.95);
  root.add(sunLight, skyFill);

  function applyCoverBgMode(nextMode) {
    activeBgMode = setMonumentBgMode(normalizeBgMode(nextMode));
    const isNight = activeBgMode === 'night';
    sunLight.color.setHex(isNight ? 0x9bb8ff : 0xffe7c2);
    sunLight.intensity = isNight ? 0.85 : 1.15;
    skyFill.color.setHex(isNight ? 0x4663ad : 0xd9f6f0);
    skyFill.groundColor.setHex(isNight ? 0x151e45 : 0x7b92db);
    skyFill.intensity = isNight ? 0.80 : 0.95;
    applyMonumentBgModeToRoot(THREE, root, activeBgMode, themeKey);
    return activeBgMode;
  }

  // 1. Pastel mineral sky backdrop & distant Macau Tower + Sai Van Bridge silhouettes
  const skyBackdrop = createMonumentSkyBackdrop(THREE, theme);
  const silhouettes = buildDistantMonumentSilhouettes(THREE, theme, {
    variant: 'cover',
    anchor: [cameraTarget.x, cameraTarget.y, cameraTarget.z],
    azimuthDeg: ISO_BASE_AZIMUTH_DEG,
    distance: 32
  });
  root.add(skyBackdrop, silhouettes);

  // 2. Monument Wonder Tower group
  const dioramaGroup = new THREE.Group();
  dioramaGroup.name = 'macau_wonder_tower';
  root.add(dioramaGroup);

  const mats = makeMatSet(THREE, theme, [cameraTarget.x, cameraTarget.y, cameraTarget.z], [-7.0, 6.2]);

  // A. Deep Cornflower Vaulted Base (y = -6.2 .. +0.1) with 3 cutaway story alcoves
  const { group: vaultedBase, sconces } = buildDeepCornflowerBaseAndAlcoves(THREE, mats, helpers);
  dioramaGroup.add(vaultedBase);

  // Soft pastel cloud/water mist ring framing bottom of tower around y = -6.2
  const mistRing = new THREE.Mesh(
    new THREE.TorusGeometry(2.85, 0.14, 8, 36),
    mats.corniceCream
  );
  mistRing.rotation.x = Math.PI / 2;
  mistRing.position.set(0, -6.18, 0);
  dioramaGroup.add(mistRing);

  // B. Mid Courtyard Platform & Pui Ching Building A (y ~ +0.1 .. +2.8)
  const midDeck = new THREE.Mesh(new THREE.BoxGeometry(4.45, 0.24, 3.65), mats.graniteStep);
  midDeck.position.set(-0.08, 0.12, 0.10);
  dioramaGroup.add(midDeck);

  const { group: puiChing, hallRoof, turretRoof } = buildPuiChingCourtyardWing(THREE, mats);
  puiChing.position.set(0, 0.24, 0.18);
  dioramaGroup.add(puiChing);

  const { group: slidingMech, buttonOrb } = buildJadeSlidingMech(THREE, mats);
  slidingMech.position.set(0.72, 0.24, 1.54);
  dioramaGroup.add(slidingMech);

  // Grand granite staircase connecting Mid Courtyard up to Top Crown St. Paul's platform (cleared from Pui Ching hall/roof)
  const grandStairs = [];
  for (let i = 0; i < 6; i += 1) {
    const stair = new THREE.Mesh(
      new THREE.BoxGeometry(1.18, 0.42, 0.34),
      mats.graniteStep
    );
    stair.position.set(0.32, 0.45 + i * 0.39, 0.56 - i * 0.24);
    dioramaGroup.add(stair);
    grandStairs.push(stair);
  }

  // Upper terrace landing slab supporting St. Paul's Top Crown (y ~ +2.8)
  const upperTerrace = new THREE.Mesh(new THREE.BoxGeometry(3.15, 0.32, 1.85), mats.graniteStep);
  upperTerrace.position.set(0.05, 2.66, -0.58);
  dioramaGroup.add(upperTerrace);

  // C. Top Crown (y ~ +2.8 .. +6.4): 5-Tier Ruins of St. Paul's
  const stPaulsCrown = buildStPaulsMonument(THREE, theme, {
    mode: 'cover',
    anchor: [cameraTarget.x, cameraTarget.y, cameraTarget.z],
    heightRange: [-7.0, 6.2]
  });
  stPaulsCrown.position.set(0.05, 2.82, -0.62);
  stPaulsCrown.scale.setScalar(1.06);
  dioramaGroup.add(stPaulsCrown);

  // D. Left Upper Bastion: Guia Lighthouse (x ~ -2.28, z ~ +0.42, y ~ +1.64 .. +5.3) clearing Pui Ching roofs cleanly
  const guia = buildGuiaBastion(THREE, mats);
  guia.position.set(-2.28, 1.64, 0.42);
  dioramaGroup.add(guia);

  // E. Right Terrace: A-Ma Temple Double-Tiered Pavilion (x ~ +2.1, z ~ -0.35, y ~ -0.3 .. +2.9)
  const aMa = buildAMaPavilion(THREE, mats);
  aMa.position.set(2.10, -0.30, -0.35);
  dioramaGroup.add(aMa);

  // F. 3 Pure-White-Head Faceless Characters (Sofia, Afonso aligned on stair, Ryan)
  const sofiaFig = resolveFigurine(THREE, helpers, mats, 'sofia');
  sofiaFig.scale.setScalar(sofiaFig.userData?.isExternalFigurine ? 0.68 : 0.95);
  sofiaFig.position.set(-0.22, 0.30, 0.90);

  const afonsoFig = resolveFigurine(THREE, helpers, mats, 'afonso');
  afonsoFig.scale.setScalar(afonsoFig.userData?.isExternalFigurine ? 0.68 : 0.95);
  afonsoFig.position.set(0.32, 2.04, -0.22);

  const ryanFig = resolveFigurine(THREE, helpers, mats, 'ryan');
  ryanFig.scale.setScalar(ryanFig.userData?.isExternalFigurine ? 0.68 : 0.95);
  ryanFig.position.set(0.96, 0.72, 1.62);

  const figurines = [
    { mesh: sofiaFig, baseY: 0.30, phase: 0.0 },
    { mesh: afonsoFig, baseY: 2.04, phase: 2.1 },
    { mesh: ryanFig, baseY: 0.72, phase: 4.2 }
  ];
  dioramaGroup.add(sofiaFig, afonsoFig, ryanFig);

  // G. Softly drifting pastel cherry-mint petals
  const driftingPetals = [];
  const petalGeo = new THREE.BoxGeometry(0.11, 0.016, 0.07);
  for (let i = 0; i < 16; i += 1) {
    const petal = new THREE.Mesh(
      petalGeo,
      i % 2 === 0 ? mats.corniceCream : mats.jadeMech
    );
    const angle = (i / 16) * Math.PI * 2;
    const radius = 2.4 + (i % 4) * 0.65;
    const yBase = -2.8 + (i % 7) * 1.25;
    petal.userData = {
      angle,
      radius,
      yBase,
      speed: 0.14 + (i % 3) * 0.04,
      spin: 0.65 + (i % 5) * 0.12
    };
    petal.position.set(Math.cos(angle) * radius, yBase, Math.sin(angle) * radius);
    dioramaGroup.add(petal);
    driftingPetals.push(petal);
  }

  markNonBlocking(dioramaGroup);

  let elapsed = 0;
  let enterProgress = 0;
  const smoothPointer = { x: 0, y: 0 };

  function computeCameraPose(azDeg, elDeg, progress) {
    const p = Math.max(0, Math.min(1, Number(progress) || 0));
    const ease = p * p * (3 - 2 * p);
    const azRad = azDeg * DEG2RAD;
    const elRad = elDeg * DEG2RAD;
    const horiz = COVER_ORBIT_RADIUS * Math.cos(elRad);
    const vert = COVER_ORBIT_RADIUS * Math.sin(elRad);

    // Subtle lift toward central St. Paul's / Pui Ching portal when zooming in
    const lookY = cameraTarget.y + ease * 0.85;
    const camPos = [
      cameraTarget.x + horiz * Math.sin(azRad),
      lookY + vert,
      cameraTarget.z + horiz * Math.cos(azRad)
    ];

    return {
      position: camPos,
      lookAt: [cameraTarget.x, lookY, cameraTarget.z],
      zoom: 1 + ease * 1.35,
      intensity: ease
    };
  }

  function applyCameraPose(camera, pose) {
    if (!camera || !camera.position) return;
    camera.position.set(pose.position[0], pose.position[1], pose.position[2]);
    camera.lookAt?.(pose.lookAt[0], pose.lookAt[1], pose.lookAt[2]);
    if (camera.isOrthographicCamera) {
      camera.zoom = pose.zoom;
      camera.updateProjectionMatrix?.();
    } else if (camera.isPerspectiveCamera) {
      camera.fov = Math.max(24, 46 / pose.zoom);
      camera.updateProjectionMatrix?.();
    }
    camera.updateMatrixWorld?.(true);
  }

  function update(dt = 0.016, pointerNorm = { x: 0, y: 0 }, camera = null) {
    const step = Math.max(0, Math.min(0.1, Number(dt) || 0.016));
    elapsed += step;

    let px = 0;
    let py = 0;
    if (Array.isArray(pointerNorm)) {
      px = Number(pointerNorm[0]) || 0;
      py = Number(pointerNorm[1]) || 0;
    } else if (pointerNorm && typeof pointerNorm === 'object') {
      px = Number(pointerNorm.x) || 0;
      py = Number(pointerNorm.y) || 0;
    }
    px = Math.max(-1, Math.min(1, px));
    py = Math.max(-1, Math.min(1, py));

    const lerpRate = 1 - Math.exp(-6 * step);
    smoothPointer.x += (px - smoothPointer.x) * lerpRate;
    smoothPointer.y += (py - smoothPointer.y) * lerpRate;

    // Gentle life motion keeping orthographic seams razor-clean
    dioramaGroup.rotation.y = smoothPointer.x * 0.04 + Math.sin(elapsed * 0.32) * 0.015;
    dioramaGroup.position.y = Math.sin(elapsed * 0.85) * 0.04;

    const sconcePulse = 1.0 + Math.sin(elapsed * 2.4) * 0.14;
    for (const sc of sconces) {
      sc.scale.setScalar(sconcePulse);
    }
    buttonOrb.position.y = 0.76 + Math.sin(elapsed * 2.2) * 0.03;

    for (const f of figurines) {
      f.mesh.position.y = f.baseY + Math.sin(elapsed * 1.9 + f.phase) * 0.025;
    }

    for (const petal of driftingPetals) {
      const u = petal.userData;
      const a = u.angle + elapsed * u.speed;
      petal.position.set(
        Math.cos(a) * u.radius,
        u.yBase + Math.sin(elapsed * 1.1 + u.angle) * 0.22,
        Math.sin(a) * u.radius
      );
      petal.rotation.set(elapsed * u.spin, a, elapsed * 0.65);
    }

    if (camera && camera.isOrthographicCamera && enterProgress <= 0.0001) {
      const az = ISO_BASE_AZIMUTH_DEG + smoothPointer.x * 4.0 + Math.sin(elapsed * 0.25) * 0.6;
      const el = ISO_BASE_ELEVATION_DEG + smoothPointer.y * 1.25;
      const pose = computeCameraPose(az, el, 0);
      applyCameraPose(camera, pose);
    }
  }

  function enterPortalAnimation(progress = 0, camera = null) {
    enterProgress = Math.max(0, Math.min(1, Number(progress) || 0));
    const az = ISO_BASE_AZIMUTH_DEG + smoothPointer.x * 4.0 * (1 - enterProgress);
    const el = ISO_BASE_ELEVATION_DEG;
    const pose = computeCameraPose(az, el, enterProgress);
    applyCameraPose(camera, pose);
    return pose;
  }

  function dispose() {
    root.parent?.remove?.(root);
    const disposedMats = new Set();
    const disposedGeos = new Set();
    root.traverse((obj) => {
      if (obj.geometry && !disposedGeos.has(obj.geometry)) {
        disposedGeos.add(obj.geometry);
        obj.geometry.dispose?.();
      }
      const matsArr = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of matsArr) {
        if (!m || disposedMats.has(m)) continue;
        disposedMats.add(m);
        for (const k of ['map', 'alphaMap', 'emissiveMap']) {
          if (m[k]?.dispose) m[k].dispose();
        }
        m.dispose?.();
      }
    });
  }

  applyCoverBgMode(activeBgMode);

  return {
    root,
    dioramaGroup,
    stPaulsCrown,
    guia,
    aMa,
    puiChing,
    cameraTarget,
    update,
    setBgMode: applyCoverBgMode,
    getBgMode() {
      return activeBgMode;
    },
    setEnterTransition(t = 0) {
      enterProgress = Math.max(0, Math.min(1, Number(t) || 0));
    },
    enterPortalAnimation,
    getState() {
      return {
        elapsed,
        enterProgress,
        parallax: { ...smoothPointer },
        cameraTarget: { ...targetVec }
      };
    },
    dispose
  };
}
