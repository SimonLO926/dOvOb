import {
  DEFAULT_SEAM_THRESHOLD_PX,
  SNAP_TOLERANCE_DEG,
  computeAlignedBlockPos as rawComputeAlignedBlockPos,
  computeSeamEndpoints,
  getIsoRayDirection,
  normalizeQuarterTurns,
  rotatePointAroundPivotY,
} from './contracts.js';

function toVecObj(pt) {
  if (Array.isArray(pt)) return { x: Number(pt[0]) || 0, y: Number(pt[1]) || 0, z: Number(pt[2]) || 0 };
  return { x: Number(pt?.x) || 0, y: Number(pt?.y) || 0, z: Number(pt?.z) || 0 };
}

function computeAlignedBlockPos(posA, stepDir, azimuthDeg, depthK) {
  return rawComputeAlignedBlockPos(toVecObj(posA), toVecObj(stepDir), azimuthDeg, depthK);
}

function toArr3(pt) {
  if (Array.isArray(pt)) return [Number(pt[0]) || 0, Number(pt[1]) || 0, Number(pt[2]) || 0];
  return [Number(pt?.x) || 0, Number(pt?.y) || 0, Number(pt?.z) || 0];
}

function shiftPosY(pt, dy) {
  const [x, y, z] = toArr3(pt);
  return [x, y + dy, z];
}

function makeNode(id, pos, style = 'bluestone', opts = {}) {
  const [x, y, z] = toArr3(pos);
  return { id, x, y, z, style, ...opts };
}

function makeChain(nodeIds, opts = {}) {
  const edges = [];
  for (let i = 0; i < nodeIds.length - 1; i += 1) {
    edges.push({
      from: nodeIds[i],
      to: nodeIds[i + 1],
      bidirectional: true,
      ...opts,
    });
  }
  return edges;
}

function makeLineNodesAndEdges(prefix, coordsList, style = 'bluestone', opts = {}, edgeOpts = {}) {
  const nodes = coordsList.map((coords, idx) =>
    makeNode(`${prefix}${idx + 1}`, coords, style, typeof opts === 'function' ? opts(idx) : opts)
  );
  const edges = makeChain(nodes.map((n) => n.id), edgeOpts);
  return { nodes, edges };
}

function buildIllusionSeam({
  id,
  nodeA,
  nodeB,
  posA,
  posB,
  stepDir,
  targetAzimuthDeg,
  requiredPlates = [],
  blockedByPlates = [],
  requiredRotators = null,
  requiredMechanisms = [],
  requiredActors = [],
  allowOccluderIds = [],
  thresholdPx = DEFAULT_SEAM_THRESHOLD_PX,
  toleranceDeg = SNAP_TOLERANCE_DEG,
}) {
  const { seamA, seamB } = computeSeamEndpoints(toVecObj(posA), toVecObj(posB), toVecObj(stepDir));
  return {
    id,
    nodeA,
    nodeB,
    seamA,
    seamB,
    targetAzimuthDeg,
    toleranceDeg,
    thresholdPx,
    requiredPlates,
    blockedByPlates,
    ...(requiredRotators ? { requiredRotators } : {}),
    ...(requiredMechanisms.length ? { requiredMechanisms } : {}),
    ...(requiredActors.length ? { requiredActors } : {}),
    allowOccluderIds,
    bidirectional: true,
  };
}

/**
 * Computes an integer grid coordinate on the exact orthographic sightline in front
 * of a seam so a 1x1x1 unit occluder node cleanly intercepts the ray until moved/rotated.
 */
function computeSightlineOccluderPos(posA, posB, stepDir, targetAzimuthDeg, depthK, aheadSteps = 2.25) {
  const { seamA, seamB } = computeSeamEndpoints(toVecObj(posA), toVecObj(posB), toVecObj(stepDir));
  const ray = getIsoRayDirection(targetAzimuthDeg);
  const closer = depthK >= 0 ? seamB : seamA;
  return [
    Math.round(closer.x + ray.x * aheadSteps),
    Math.round(closer.y + ray.y * aheadSteps),
    Math.round(closer.z + ray.z * aheadSteps),
  ];
}

/**
 * Returns the q=0 base position such that rotating it around `pivot` by `atQ`
 * places it on `targetWorldPos`.
 */
function basePosForRotatedSpot(targetWorldPos, pivot, atQ) {
  return rotatePointAroundPivotY(targetWorldPos, pivot, normalizeQuarterTurns(-atQ));
}

function computeSeamEndpointAtQuarterTurn(basePos, pivot, reqQ) {
  return rotatePointAroundPivotY(basePos, pivot, normalizeQuarterTurns(reqQ));
}

function normalizeChapterStages(rawChapters) {
  let globalCounter = 0;

  return rawChapters.map((ch) => {
    const totalStages = ch.stages.length;
    const stages = ch.stages.map((st, idx) => {
      globalCounter += 1;
      const isFinalStage = idx === totalStages - 1;
      const hasNextStage = idx < totalStages - 1;

      return {
        // Inherited chapter defaults
        chapterId: ch.id,
        id: ch.id,
        era: ch.era,
        themeKey: ch.themeKey,
        stepDeg: ch.stepDeg ?? 90,
        baseHalfHeight: ch.baseHalfHeight ?? 6.6,
        cameraTarget: ch.cameraTarget ?? { x: 2, y: 0.45, z: 0 },
        actors: ch.actors,
        // Stage-specific overrides & geometry
        ...st,
        stageId: st.stageId || `ch${ch.id}_s${idx + 1}`,
        stageIndex: idx,
        totalStages,
        globalStageNumber: globalCounter,
        isSubStage: hasNextStage,
        hasNextStage,
        nextStageIndex: hasNextStage ? idx + 1 : null,
        isFinalStage,
        plates: st.plates || [],
        rotators: st.rotators || [],
        mechanismEdges: st.mechanismEdges || [],
        seams: st.seams || [],
        edges: st.edges || [],
        props: st.props || [],
      };
    });

    const stage0 = stages[0];
    // Aggregate unique chapter props cleanly across sub-stages for chapter preview/canon inspection
    const seenPropIds = new Set();
    const mergedProps = [];
    for (const st of stages) {
      for (const p of st.props || []) {
        const key = p.id || `${p.type}:${p.x},${p.y},${p.z}`;
        if (!seenPropIds.has(key)) {
          seenPropIds.add(key);
          mergedProps.push(p);
        }
      }
    }

    return {
      ...stage0,
      ...ch,
      chapterId: ch.id,
      stages,
      props: ch.props ? ch.props : mergedProps,
    };
  });
}

/* ============================================================================
 * Chapter 1 (2026・培正中學): 2 Stages (Sofia)
 * ========================================================================== */
function makeChapter1() {
  // Stage 1: Front Brick Steps & Bluestone Corridor (45 -> 135 illusion)
  const s1_aPos = [2, 0, 0];
  const s1_bPos = computeAlignedBlockPos(s1_aPos, [1, 0, 0], 135, 2); // [5, 2, -2]
  const s1_seam = buildIllusionSeam({
    id: 'c1s1_seam',
    nodeA: 'c1s1_a3',
    nodeB: 'c1s1_b1',
    posA: s1_aPos,
    posB: s1_bPos,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
  });
  const stage1 = {
    stageId: 'ch1_s1',
    title: '培正紅磚階與青石前廊',
    subtitle: '2026・荷蘭園馬路側階 17:53',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 3.2, y: 0.45, z: -1 },
    baseHalfHeight: 6.51,
    nodes: [
      makeNode('c1s1_a1', [0, 0, 0], 'brick'),
      makeNode('c1s1_a2', [1, 0, 0], 'bluestone'),
      makeNode('c1s1_a3', s1_aPos, 'bluestone'),
      makeNode('c1s1_b1', s1_bPos, 'mint'),
      makeNode('c1s1_b2', [6, 2, -2], 'mint'),
      makeNode('c1s1_goal', [7, 2, -2], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
      }),
    ],
    edges: [
      ...makeChain(['c1s1_a1', 'c1s1_a2', 'c1s1_a3']),
      ...makeChain(['c1s1_b1', 'c1s1_b2', 'c1s1_goal']),
    ],
    seams: [s1_seam],
    props: [
      { id: 'c1_arcade', type: 'puiching_arcade', x: 7.2, y: 2, z: -0.2, label: '培正薄荷綠走廊與白柱' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c1s1_goal' },
    hintText: '轉至 135° 使斷裂青石前廊與培正薄荷綠拱廊接軌，踏入通往 A 座行政樓的傳送拱門。',
    automatedSolution: [
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c1s1_goal' },
    ],
  };

  // Stage 2: A-Block Hexagram Portal & Decoy Elevator Occluder + Zero-7 Sighting
  const s2_plDockBase = [0, 0, -1];
  const s2_plTarget = computeAlignedBlockPos(s2_plDockBase, [0, 0, -1], 315, -2); // [2, -2, -4]
  const s2_seamPlate = buildIllusionSeam({
    id: 'c1s2_seam_plate',
    nodeA: 'c1s2_spur',
    nodeB: 'c1s2_pl',
    posA: s2_plDockBase,
    posB: s2_plTarget,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 315,
  });

  const s2_bridgeA = [3, 0, 0];
  const s2_bridgeB = computeAlignedBlockPos(s2_bridgeA, [1, 0, 0], 135, 2); // [6, 2, -2]
  const s2_seamMain = buildIllusionSeam({
    id: 'c1s2_seam_main',
    nodeA: 'c1s2_b_a',
    nodeB: 'c1s2_b_b',
    posA: s2_bridgeA,
    posB: s2_bridgeB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredPlates: ['p_c1_shutter'],
  });
  const s2_occPos = computeSightlineOccluderPos(s2_bridgeA, s2_bridgeB, [1, 0, 0], 135, 2, 1.75);

  const stage2 = {
    stageId: 'ch1_s2',
    actors: [{ id: 'sofia', name: '盧曉晴', startNodeId: 'c1s2_start' }],
    title: 'A 座行政樓六角星正門與黑影驚鴻',
    subtitle: '2026・培正 A 座行政樓紅黑白綠六角星陣眼',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 3.5, y: 0.25, z: -1.5 },
    baseHalfHeight: 7.05,
    nodes: [
      makeNode('c1s2_start', [0, 0, 0], 'bluestone'),
      makeNode('c1s2_spur', s2_plDockBase, 'granite'),
      makeNode('c1s2_pl', s2_plTarget, 'granite', { plateId: 'p_c1_shutter' }),
      makeNode('c1s2_m1', [1, 0, 0], 'bluestone'),
      makeNode('c1s2_m2', [2, 0, 0], 'bluestone'),
      makeNode('c1s2_b_a', s2_bridgeA, 'stone'),
      makeNode('c1s2_b_b', s2_bridgeB, 'mint'),
      makeNode('c1s2_g1', [7, 2, -2], 'mint'),
      makeNode('c1s2_goal', [8, 2, -2], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
      }),
      // Decoy occluder pillar blocking 135° main seam until p_c1_shutter drops it!
      makeNode('c1s2_occ', s2_occPos, 'brick', {
        groupId: 'lift_c1_occ',
        pillarHeight: 2,
      }),
    ],
    edges: [
      ...makeChain(['c1s2_spur', 'c1s2_start', 'c1s2_m1', 'c1s2_m2', 'c1s2_b_a']),
      ...makeChain(['c1s2_b_b', 'c1s2_g1', 'c1s2_goal']),
    ],
    plates: [
      {
        id: 'p_c1_shutter',
        nodeId: 'c1s2_pl',
        mode: 'latch',
        targetGroupId: 'lift_c1_occ',
        moveOffset: { x: 0, y: -5, z: 0 },
      },
    ],
    seams: [s2_seamPlate, s2_seamMain],
    props: [
      { id: 'c1_paifang', type: 'paifang', x: 3, y: 0, z: -1.3, label: '培正 A 座麻石門階與紅牆牌樓' },
      { id: 'c1_arcade_2', type: 'puiching_arcade', x: 9.8, y: 2, z: -1.8, label: '行政樓門廊六角星陣眼' },
      {
        id: 'zero7_ch1',
        type: 'zero7_silhouette',
        loreId: 'zero7_ch1',
        x: 7,
        y: 2.5,
        z: -2.9,
        label: '走廊轉角的青藍面罩黑影',
      },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c1s2_goal' },
    hintText: '先轉 315° 踩下銅印機關降下遮擋 135° 視線的紅磚柱，再轉至 135° 踏上 A 座行政樓六角星祭壇（可與走廊黑影交互）。',
    automatedSolution: [
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c1s2_pl' },
      { action: 'move', nodeId: 'c1s2_b_a' },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c1s2_goal' },
    ],
  };

  return {
    id: 1,
    era: '2026',
    themeKey: '2026_dusk',
    title: '培正六角星的召喚',
    subtitle: '2026・高士德培正中學 17:53',
    hintText: '於培正前廊先以 135° 接通傳送門，再於 A 座行政樓解鎖遮柱視錯覺，踏入六角星蓮花祭壇。',
    actors: [{ id: 'sofia', name: '盧曉晴', startNodeId: 'c1s1_a1' }],
    stages: [stage1, stage2],
  };
}

/* ============================================================================
 * Chapter 2 (1488 / 1622・媽閣岬與洋船石): 2 Stages (Afonso)
 * ========================================================================== */
function makeChapter2() {
  // Stage 1: Coastal Reefs & Ama Ship Rock (315 -> plate -> 135)
  const s1_reefA = [1, 0, 0];
  const s1_reefB = computeAlignedBlockPos(s1_reefA, [0, 0, -1], 315, -2); // [3, -2, -3]
  const s1_seam1 = buildIllusionSeam({
    id: 'c2s1_seam_reef',
    nodeA: 'c2s1_a2',
    nodeB: 'c2s1_b1',
    posA: s1_reefA,
    posB: s1_reefB,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 315,
  });

  const s1_bridgeA = [2, -2, -3];
  const s1_bridgeBAligned = computeAlignedBlockPos(s1_bridgeA, [0, 0, -1], 135, 2); // [4, 0, -6]
  const s1_bridgeB = shiftPosY(s1_bridgeBAligned, -2); // [4, -2, -6]
  const s1_seam2 = buildIllusionSeam({
    id: 'c2s1_seam_shrine',
    nodeA: 'c2s1_b2',
    nodeB: 'c2s1_c1',
    posA: s1_bridgeA,
    posB: s1_bridgeB,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 135,
    requiredPlates: ['p_c2_tide'],
  });

  const stage1 = {
    stageId: 'ch2_s1',
    title: '媽閣岬礁岸與洋船石初遇',
    subtitle: '1488 / 1622・未填海的蓮島海岸線',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.0, y: -0.75, z: -3.2 },
    baseHalfHeight: 7.4,
    nodes: [
      makeNode('c2s1_a1', [0, 0, 0], 'sand'),
      makeNode('c2s1_a2', s1_reefA, 'sand'),
      makeNode('c2s1_b1', s1_reefB, 'stone'),
      makeNode('c2s1_b2', s1_bridgeA, 'stone', { plateId: 'p_c2_tide' }),
      makeNode('c2s1_c1', s1_bridgeB, 'ochre', { groupId: 'grp_c2_shrine' }),
      makeNode('c2s1_goal', [4, -2, -7], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c2_shrine',
      }),
    ],
    edges: [
      ...makeChain(['c2s1_a1', 'c2s1_a2']),
      ...makeChain(['c2s1_b1', 'c2s1_b2']),
      ...makeChain(['c2s1_c1', 'c2s1_goal']),
    ],
    plates: [
      {
        id: 'p_c2_tide',
        nodeId: 'c2s1_b2',
        mode: 'latch',
        targetGroupId: 'grp_c2_shrine',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    seams: [s1_seam1, s1_seam2],
    props: [
      { id: 'ship_rock_ch2', type: 'ama_ship_rock', loreId: 'ship_rock_ch2', x: 1.8, y: -1.5, z: -4.4, label: '媽閣洋船石摩崖刻畫' },
      { id: 'couple_1622', type: 'couple_1622', loreId: 'couple_1622', x: 0.8, y: 0.5, z: 1.4, label: '1622 海岸石椅情侶（洛維＆施迪）' },
      { id: 'ajan_ch2', type: 'ajan_npc', loreId: 'ajan_ch2', x: -0.9, y: 0.5, z: -0.8, label: '林海珍（阿珍）' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c2s1_goal' },
    hintText: '切至 315° 登上洋船石礁岸並踏上退潮石印（可向阿珍及海岸情侶對話），再轉 135° 走進廟階傳送門。',
    automatedSolution: [
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c2s1_b2' },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c2s1_goal' },
    ],
  };

  // Stage 2: Mazu Tidal Stone Turntable (Rotator + 225° Sea-Calming Seam)
  const s2_pivot = [0, 0, 0];
  const s2_armBase = [1, 0, 0]; // rotates around [0,0,0]
  const s2_seamA = [2, 0, 0];
  const s2_seamB = computeAlignedBlockPos(s2_seamA, [1, 0, 0], 225, -2); // [5, -2, 2]
  const s2_seam = buildIllusionSeam({
    id: 'c2s2_seam_mazu',
    nodeA: 'c2s2_dock_a',
    nodeB: 'c2s2_dock_b',
    posA: s2_seamA,
    posB: s2_seamB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 225,
    requiredRotators: { turret_c2: [0, 2] },
  });

  const stage2 = {
    stageId: 'ch2_s2',
    actors: [{ id: 'afonso', name: '阿方索', startNodeId: 'c2s2_start' }],
    title: '娘媽角海潮轉石與定海珠壇',
    subtitle: '1622・媽閣廟前天然潮汐石盤',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2, y: -1.05, z: 1 },
    baseHalfHeight: 6.6,
    nodes: [
      makeNode('c2s2_start', [-2, 0, 0], 'sand'),
      makeNode('c2s2_a1', [-1, 0, 0], 'stone', { rotatorId: 'turret_c2' }),
      makeNode('c2s2_hub', s2_pivot, 'ochre', { rotatorId: 'turret_c2' }),
      makeNode('c2s2_arm', s2_armBase, 'ochre', { rotatorId: 'turret_c2' }),
      makeNode('c2s2_occ', [1, 1, 1], 'stone', { rotatorId: 'turret_c2', pillarHeight: 2 }),
      makeNode('c2s2_occ2', [-1, 1, -1], 'stone', { rotatorId: 'turret_c2', pillarHeight: 2 }),
      makeNode('c2s2_dock_a', s2_seamA, 'stone'),
      makeNode('c2s2_dock_b', s2_seamB, 'ochre'),
      makeNode('c2s2_goal', [6, -2, 2], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
      }),
    ],
    edges: [
      ...makeChain(['c2s2_a1', 'c2s2_hub', 'c2s2_arm']),
      ...makeChain(['c2s2_dock_b', 'c2s2_goal']),
    ],
    rotators: [
      {
        id: 'turret_c2',
        pivot: s2_pivot,
        axis: 'y',
        nodeIds: ['c2s2_a1', 'c2s2_hub', 'c2s2_arm', 'c2s2_occ', 'c2s2_occ2'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c2s2_start', to: 'c2s2_a1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c2s2_arm', to: 'c2s2_dock_a', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c2s2_start', to: 'c2s2_arm', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c2s2_a1', to: 'c2s2_dock_a', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s2_seam],
    props: [
      { id: 'c2_bench', type: 'era_bench', x: -1, y: 0.5, z: 1.4, label: '媽閣海岸石凳' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c2s2_goal' },
    hintText: '轉動媽閣潮汐石盤（逆時針轉一格至 0°）接通海岬渡橋，再將視角切至 225° 踏上媽祖定海珠蓮座。',
    automatedSolution: [
      { action: 'rotateTurret', rotatorId: 'turret_c2', deltaSteps: -1 },
      { action: 'rotate', deg: 225 },
      { action: 'move', nodeId: 'c2s2_goal' },
    ],
  };

  return {
    id: 2,
    era: '1622',
    themeKey: '1622_dawn',
    title: '洋船石與媽祖的呼喚',
    subtitle: '1488 / 1622・媽閣岬與古海岸線',
    hintText: '於媽閣礁岸先解開潮汐引道，再轉動潮汐石盤結合 225° 視錯覺踏上媽祖蓮座。',
    actors: [{ id: 'afonso', name: '阿方索', startNodeId: 'c2s1_a1' }],
    stages: [stage1, stage2],
  };
}

/* ============================================================================
 * Chapter 3 (1622・聖保祿完整教堂): 2 Stages (Afonso)
 * ========================================================================== */
function makeChapter3() {
  // Stage 1: Basilica Facade & Armillary Choir Bridge
  const s1_a = [-1, 0, 0];
  const s1_b = computeAlignedBlockPos(s1_a, [0, 0, -1], 315, -2); // [1, -2, -3]
  const s1_seam1 = buildIllusionSeam({
    id: 'c3s1_seam_choir',
    nodeA: 'c3s1_a2',
    nodeB: 'c3s1_b1',
    posA: s1_a,
    posB: s1_b,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 315,
  });
  const s1_seam2A = [0, -2, -3];
  const s1_seam2BAligned = computeAlignedBlockPos(s1_seam2A, [1, 0, 0], 135, 2); // [3, 0, -5]
  const s1_seam2B = shiftPosY(s1_seam2BAligned, -2); // [3, -2, -5]
  const s1_seam2 = buildIllusionSeam({
    id: 'c3s1_seam_sacristy',
    nodeA: 'c3s1_b2',
    nodeB: 'c3s1_c1',
    posA: s1_seam2A,
    posB: s1_seam2B,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredPlates: ['p_c3_armillary'],
  });

  const stage1 = {
    stageId: 'ch3_s1',
    title: '聖保祿大教堂前階與渾天儀廊',
    subtitle: '1622・未焚毀的巴洛克完整聖堂',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 1.5, y: -0.9, z: -2.8 },
    baseHalfHeight: 7.2,
    nodes: [
      makeNode('c3s1_a1', [0, 0, 0], 'granite'),
      makeNode('c3s1_a2', s1_a, 'granite'),
      makeNode('c3s1_b1', s1_b, 'ochre'),
      makeNode('c3s1_b2', s1_seam2A, 'ochre', { plateId: 'p_c3_armillary' }),
      makeNode('c3s1_c1', s1_seam2B, 'granite', { groupId: 'grp_c3_sacristy' }),
      makeNode('c3s1_goal', [4, -2, -5], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c3_sacristy',
      }),
    ],
    edges: [
      ...makeChain(['c3s1_a1', 'c3s1_a2']),
      ...makeChain(['c3s1_b1', 'c3s1_b2']),
      ...makeChain(['c3s1_c1', 'c3s1_goal']),
    ],
    plates: [
      {
        id: 'p_c3_armillary',
        nodeId: 'c3s1_b2',
        mode: 'latch',
        targetGroupId: 'grp_c3_sacristy',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    seams: [s1_seam1, s1_seam2],
    props: [
      { id: 'c3_basilica', type: 'st_pauls_full', x: 2.0, y: 0, z: -6.8, label: '1622 未焚毀之完整聖保祿大教堂' },
      { id: 'corvo_ch3', type: 'corvo_figure', loreId: 'corvo_ch3', x: -0.9, y: -1.5, z: -3.2, label: '地宮暗影守衛・烏鴉' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c3s1_goal' },
    hintText: '切至 315° 踏上歌詠樓渾天儀踏板，再轉 135° 走過主殿穹頂進入地宮密室入口（留意烏鴉守衛動向）。',
    automatedSolution: [
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c3s1_b2' },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c3s1_goal' },
    ],
  };

  // Stage 2: 28-Mansion Star Chart Crypt (Rotator + Rotating Occluder Pillar + Sofia Astral)
  const s2_pivot = [2, 0, 0];
  const s2_bA = [5, 0, 0];
  const s2_bB = computeAlignedBlockPos(s2_bA, [0, 0, -1], 315, 2); // [3, 2, 1]
  const s2_seam = buildIllusionSeam({
    id: 'c3s2_seam_chart',
    nodeA: 'c3s2_b1',
    nodeB: 'c3s2_b2',
    posA: s2_bA,
    posB: s2_bB,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 315,
    requiredRotators: { turret_c3_ring: 0 },
  });
  const s2_occAtQ1 = computeSightlineOccluderPos(s2_bA, s2_bB, [0, 0, -1], 315, 2, 2.25);
  const s2_occBase = basePosForRotatedSpot(s2_occAtQ1, s2_pivot, 1);

  const stage2 = {
    stageId: 'ch3_s2',
    actors: [{ id: 'afonso', name: '阿方索', startNodeId: 'c3s2_start' }],
    title: '星圖地宮二十八宿轉盤',
    subtitle: '1622・金色虛影指引的密卷聖壇',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 3, y: 0.45, z: 0 },
    baseHalfHeight: 6.86,
    nodes: [
      makeNode('c3s2_start', [0, 0, 0], 'granite'),
      makeNode('c3s2_a1', [1, 0, 0], 'stone'),
      makeNode('c3s2_hub', s2_pivot, 'ochre', { rotatorId: 'turret_c3_ring' }),
      makeNode('c3s2_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c3_ring' }), // wait: avoid duplicate coordinate with a1! Let a1=[0,0,0], hub=[2,0,0], arm_w=[1,0,0]!
      makeNode('c3s2_arm_e', [3, 0, 0], 'ochre', { rotatorId: 'turret_c3_ring' }),
      makeNode('c3s2_occ', s2_occBase, 'stone', {
        rotatorId: 'turret_c3_ring',
        pillarHeight: 2,
      }),
      makeNode('c3s2_b1', s2_bA, 'granite'),
      makeNode('c3s2_b2', s2_bB, 'ochre'),
      makeNode('c3s2_goal', [3, 2, 0], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
      }),
    ],
    edges: [
      ...makeChain(['c3s2_start', 'c3s2_hub']), // Wait: start=[0,0,0], arm_w=[1,0,0], hub=[2,0,0]!
      ...makeChain(['c3s2_hub', 'c3s2_arm_w']),
      ...makeChain(['c3s2_hub', 'c3s2_arm_e']),
      ...makeChain(['c3s2_b2', 'c3s2_goal']),
    ],
    rotators: [
      {
        id: 'turret_c3_ring',
        pivot: s2_pivot,
        axis: 'y',
        nodeIds: ['c3s2_hub', 'c3s2_arm_w', 'c3s2_arm_e', 'c3s2_occ'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c3s2_start', to: 'c3s2_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c3s2_arm_e', to: 'c3s2_b1', requiredQuarterTurns: 0, bidirectional: true },
        ],
      },
    ],
    seams: [s2_seam],
    props: [
      { id: 'astral_ch3', type: 'sofia_astral', loreId: 'astral_ch3', x: 3.9, y: 2.5, z: 0.4, label: '來自 2026 的金色虛影' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c3s2_goal' },
    hintText: '轉動二十八宿銅環（-1 格）移開遮擋 315° 視線的星碑並接通石橋，隨金色虛影踏入星圖祭壇。',
    automatedSolution: [
      { action: 'rotateTurret', rotatorId: 'turret_c3_ring', deltaSteps: -1 },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c3s2_goal' },
    ],
  };

  // Fix duplicate [1,0,0] on c3s2_a1 vs c3s2_arm_w cleanly: remove unused c3s2_a1 and wire c3s2_start [0,0,0] -> c3s2_arm_w [1,0,0] -> c3s2_hub [2,0,0] -> c3s2_arm_e [3,0,0] -> c3s2_b1 [4,0,0]
  // Wait! c3s2_b1 should be [4,0,0] so [3,0,0] touches [4,0,0] (dist 1)! Let's recalculate cleanly right now!
  const s2_bA_clean = [4, 0, 0];
  const s2_bB_clean = computeAlignedBlockPos(s2_bA_clean, [0, 0, -1], 315, -2); // [6, -2, -3]
  const s2_seamClean = buildIllusionSeam({
    id: 'c3s2_seam_chart',
    nodeA: 'c3s2_b1',
    nodeB: 'c3s2_b2',
    posA: s2_bA_clean,
    posB: s2_bB_clean,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 315,
    requiredRotators: { turret_c3_ring: 0 },
  });
  const s2_occAtQ1Clean = computeSightlineOccluderPos(s2_bA_clean, s2_bB_clean, [0, 0, -1], 315, -2, 2.25);
  const s2_occBaseClean = basePosForRotatedSpot(s2_occAtQ1Clean, s2_pivot, 1);

  stage2.cameraTarget = { x: 3.5, y: -0.6, z: -1.4 };
  stage2.baseHalfHeight = 7.3;
  stage2.nodes = [
    makeNode('c3s2_start', [0, 0, 0], 'granite'),
    makeNode('c3s2_hub', s2_pivot, 'ochre', { rotatorId: 'turret_c3_ring' }),
    makeNode('c3s2_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c3_ring' }),
    makeNode('c3s2_arm_e', [3, 0, 0], 'ochre', { rotatorId: 'turret_c3_ring' }),
    makeNode('c3s2_occ', s2_occBaseClean, 'stone', { rotatorId: 'turret_c3_ring', pillarHeight: 2 }),
    makeNode('c3s2_b1', s2_bA_clean, 'granite'),
    makeNode('c3s2_b2', s2_bB_clean, 'ochre'),
    makeNode('c3s2_goal', [7, -2, -3], 'hexagram_lotus_altar', { isGoal: true, isFinalGoal: true }),
  ];
  stage2.edges = [
    ...makeChain(['c3s2_arm_w', 'c3s2_hub', 'c3s2_arm_e']),
    ...makeChain(['c3s2_b2', 'c3s2_goal']),
  ];
  stage2.rotators[0].linkedEdges = [
    { from: 'c3s2_start', to: 'c3s2_arm_w', requiredQuarterTurns: 0, bidirectional: true },
    { from: 'c3s2_arm_e', to: 'c3s2_b1', requiredQuarterTurns: 0, bidirectional: true },
    { from: 'c3s2_start', to: 'c3s2_arm_e', requiredQuarterTurns: 2, bidirectional: true },
    { from: 'c3s2_arm_w', to: 'c3s2_b1', requiredQuarterTurns: 2, bidirectional: true },
  ];
  stage2.props = [
    { id: 'astral_ch3', type: 'sofia_astral', loreId: 'astral_ch3', x: 7.4, y: -1.5, z: -2.0, label: '來自 2026 的金色虛影' },
  ];
  stage2.seams = [s2_seamClean];

  return {
    id: 3,
    era: '1622',
    themeKey: '1622_dawn',
    title: '聖保祿的星圖密卷',
    subtitle: '1622・大三巴未焚毀完整教堂',
    hintText: '先由渾天儀樓踏上地宮入口，再轉動二十八宿銅環清開遮碑，藉 315° 視錯覺取回密卷。',
    actors: [{ id: 'afonso', name: '阿方索', startNodeId: 'c3s1_a1' }],
    stages: [stage1, stage2],
  };
}

/* ============================================================================
 * Chapter 4 (1622-06-24・大炮台竹棚): 2 Stages (Afonso)
 * ========================================================================== */
function makeChapter4() {
  // Stage 1: Bamboo Scaffolding Climb + Mutually Exclusive Lock Pin (blockedByPlates)
  const s1_lowA = [1, 0, 0];
  const s1_lowB = computeAlignedBlockPos(s1_lowA, [1, 0, 0], 135, 2); // [4, 2, -2]
  const s1_seam1 = buildIllusionSeam({
    id: 'c4s1_seam_pin',
    nodeA: 'c4s1_a2',
    nodeB: 'c4s1_pin_b',
    posA: s1_lowA,
    posB: s1_lowB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
  });
  const s1_upA = [1, 0, -1];
  const s1_upB = computeAlignedBlockPos(s1_upA, [0, 0, -1], 225, 2); // [-1, 2, -4]
  const s1_seam2 = buildIllusionSeam({
    id: 'c4s1_seam_bamboo',
    nodeA: 'c4s1_stair',
    nodeB: 'c4s1_upper',
    posA: s1_upA,
    posB: s1_upB,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 225,
    blockedByPlates: ['p_c4_safety_pin'],
  });

  const stage1 = {
    stageId: 'ch4_s1',
    title: '大炮台竹棚下層砲階',
    subtitle: '1622-06-24・荷艦壓境前的竹架防線',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 1.5, y: 0.95, z: -1 },
    baseHalfHeight: 6.86,
    nodes: [
      makeNode('c4s1_start', [0, 0, 0], 'wood'),
      makeNode('c4s1_a2', s1_lowA, 'wood'),
      makeNode('c4s1_stair', s1_upA, 'stone'),
      makeNode('c4s1_pin_b', s1_lowB, 'brick', { plateId: 'p_c4_release' }),
      makeNode('c4s1_upper', s1_upB, 'wood', { groupId: 'grp_c4_bamboo' }),
      makeNode('c4s1_goal', [-1, 2, -5], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c4_bamboo',
      }),
    ],
    edges: [
      ...makeChain(['c4s1_start', 'c4s1_a2', 'c4s1_stair']),
      ...makeChain(['c4s1_upper', 'c4s1_goal']),
    ],
    plates: [
      {
        id: 'p_c4_safety_pin',
        nodeId: 'c4s1_start',
        mode: 'seal',
        initialActive: true,
        targetGroupId: 'grp_c4_bamboo',
        moveOffset: { x: 0, y: -1, z: 0 },
      },
      { id: 'p_c4_release', nodeId: 'c4s1_pin_b', mode: 'latch', deactivatesPlates: ['p_c4_safety_pin'] },
    ],
    seams: [s1_seam1, s1_seam2],
    props: [
      { id: 'c4_ajan', type: 'ajan_npc', loreId: 'ajan_ch4', x: 0, y: 0.5, z: 1.2, label: '望廈山腳祈禱的阿珍' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c4s1_goal' },
    hintText: '竹棚火藥保險栓已鎖死 225° 通道！先轉 135° 踩下砲栓釋放板，再回階梯並切至 225° 躍上竹棚傳送門。',
    automatedSolution: [
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c4s1_pin_b' },
      { action: 'move', nodeId: 'c4s1_stair' },
      { action: 'rotate', deg: 225 },
      { action: 'move', nodeId: 'c4s1_goal' },
    ],
  };

  // Stage 2: Red Cannon Turntable & Zero-7 Duel on Bamboo Scaffold
  const s2_pivot = [2, 0, 0];
  const s2_seamA = [4, 0, 0];
  const s2_seamB = computeAlignedBlockPos(s2_seamA, [1, 0, 0], 135, 2); // [7, 2, -2]
  const s2_seam = buildIllusionSeam({
    id: 'c4s2_seam_cannon',
    nodeA: 'c4s2_b1',
    nodeB: 'c4s2_b2',
    posA: s2_seamA,
    posB: s2_seamB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredRotators: { turret_c4_cannon: 0 },
  });
  const s2_occAtQ2 = computeSightlineOccluderPos(s2_seamA, s2_seamB, [1, 0, 0], 135, 2, 2.25);
  const s2_occBase = basePosForRotatedSpot(s2_occAtQ2, s2_pivot, 2);

  const stage2 = {
    stageId: 'ch4_s2',
    actors: [{ id: 'afonso', name: '阿方索', startNodeId: 'c4s2_start' }],
    title: '紅衣大炮台頂層竹架陣',
    subtitle: '1622-06-24・聖若翰神蹟發炮瞬間',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 4, y: 0.45, z: -1 },
    baseHalfHeight: 7.22,
    nodes: [
      makeNode('c4s2_start', [0, 0, 0], 'stone'),
      makeNode('c4s2_arm_w', [1, 0, 0], 'wood', { rotatorId: 'turret_c4_cannon' }),
      makeNode('c4s2_hub', s2_pivot, 'brick', { rotatorId: 'turret_c4_cannon' }),
      makeNode('c4s2_arm_e', [3, 0, 0], 'wood', { rotatorId: 'turret_c4_cannon' }),
      makeNode('c4s2_occ', s2_occBase, 'stone', { rotatorId: 'turret_c4_cannon', pillarHeight: 2 }),
      makeNode('c4s2_b1', s2_seamA, 'wood'),
      makeNode('c4s2_b2', s2_seamB, 'brick'),
      makeNode('c4s2_goal', [8, 2, -2], 'hexagram_lotus_altar', { isGoal: true, isFinalGoal: true }),
    ],
    edges: [
      ...makeChain(['c4s2_arm_w', 'c4s2_hub', 'c4s2_arm_e']),
      ...makeChain(['c4s2_b2', 'c4s2_goal']),
    ],
    rotators: [
      {
        id: 'turret_c4_cannon',
        pivot: s2_pivot,
        axis: 'y',
        nodeIds: ['c4s2_arm_w', 'c4s2_hub', 'c4s2_arm_e', 'c4s2_occ'],
        initialQuarterTurns: 2,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c4s2_start', to: 'c4s2_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c4s2_arm_e', to: 'c4s2_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c4s2_start', to: 'c4s2_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c4s2_arm_w', to: 'c4s2_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s2_seam],
    props: [
      { id: 'c4_scaffold', type: 'monte_cannon_scaffold', x: 8.6, y: 2.2, z: -0.6, label: '大炮台竹棚與紅衣炮陣' },
      { id: 'zero7_ch4', type: 'zero7_silhouette', loreId: 'zero7_ch4', x: 7.4, y: 2.5, z: -1.1, label: '竹棚上的黑甲面具劍客' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c4s2_goal' },
    hintText: '將紅衣炮台轉盤旋回 180°（2 格）對齊竹架並移開炮盾遮障，再切至 135° 迎戰面具劍客並登上聖若翰金斗篷壇。',
    automatedSolution: [
      { action: 'rotateTurret', rotatorId: 'turret_c4_cannon', deltaSteps: 2 },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c4s2_goal' },
    ],
  };

  return {
    id: 4,
    era: '1622',
    themeKey: '1622_dawn',
    title: '六月廿四・大炮台神蹟之日',
    subtitle: '1622-06-24・大炮台竹棚與紅衣炮陣',
    hintText: '先卸除炮栓安全鎖攀上竹棚，再調轉紅衣炮台轉盤接軌 135° 視錯覺直登頂層聖壇。',
    actors: [{ id: 'afonso', name: '阿方索', startNodeId: 'c4s1_start' }],
    stages: [stage1, stage2],
  };
}

/* ============================================================================
 * Chapter 5 (1808・東望洋白霧 — NO Lighthouse!): 2 Stages (Duo: Sofia + Afonso)
 * ========================================================================== */
function makeChapter5() {
  // Stage 1: Foothill Mist — Afonso holds plate to lower fog pillar & enable 135° bridge for Sofia
  const s1_bA = [1, 0, 0];
  const s1_bB = computeAlignedBlockPos(s1_bA, [1, 0, 0], 135, 2); // [4, 2, -2]
  const s1_seam = buildIllusionSeam({
    id: 'c5s1_seam_mist',
    nodeA: 'c5s1_s2',
    nodeB: 'c5s1_s3',
    posA: s1_bA,
    posB: s1_bB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredPlates: ['p_c5_weight'],
  });
  const s1_occPos = computeSightlineOccluderPos(s1_bA, s1_bB, [1, 0, 0], 135, 2, 2.25);

  const stage1 = {
    stageId: 'ch5_s1',
    title: '濃霧松山山腳雙人石徑',
    subtitle: '1808・白霧東望洋砲台山麓（無哨塔年代）',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.5, y: 0.45, z: -1 },
    baseHalfHeight: 7.04,
    actors: [
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c5s1_s1' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c5s1_a1' },
    ],
    defaultActorId: 'afonso',
    nodes: [
      makeNode('c5s1_s1', [0, 0, 0], 'bluestone'),
      makeNode('c5s1_s2', s1_bA, 'bluestone'),
      makeNode('c5s1_s3', s1_bB, 'stone'),
      makeNode('c5s1_goal', [5, 2, -2], 'stage_portal_arch', { isGoal: true, isFinalGoal: false }),
      makeNode('c5s1_a1', [0, 0, 2], 'stone'),
      makeNode('c5s1_a_plate', [1, 0, 2], 'ochre', { plateId: 'p_c5_weight' }),
      makeNode('c5s1_occ', s1_occPos, 'stone', { groupId: 'lift_c5_fog', pillarHeight: 2 }),
    ],
    edges: [
      ...makeChain(['c5s1_s1', 'c5s1_s2']),
      ...makeChain(['c5s1_s3', 'c5s1_goal']),
      ...makeChain(['c5s1_a1', 'c5s1_a_plate']),
    ],
    plates: [
      {
        id: 'p_c5_weight',
        nodeId: 'c5s1_a_plate',
        mode: 'hold',
        targetGroupId: 'lift_c5_fog',
        moveOffset: { x: 0, y: -6, z: 0 },
      },
    ],
    seams: [s1_seam],
    props: [
      { id: 'c5_fort_s1', type: 'guia_fort_1808', x: 6.8, y: 2.2, z: -1.4, label: '1808 東望洋古砲台低矮石牆' },
      { id: 'corvo_ch5', type: 'corvo_figure', loreId: 'corvo_ch5', x: 0.2, y: 0.5, z: 3.1, label: '伽思欄刪檔軍令殘頁' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c5s1_goal', requiredActors: ['sofia'] },
    hintText: '阿方索先踩住長按式山徑石秤降下霧柱遮障，再切換盧曉晴切至 135° 踏入砲台山腰傳送門。',
    automatedSolution: [
      { action: 'move', nodeId: 'c5s1_a_plate' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c5s1_goal' },
    ],
  };

  // Stage 2: 1808 Ancient Bastion (Duo + Plate-Locked Rotator + Old Man Mist Vanish + all_on_goals)
  const s2_pivot = [2, 0, 0];
  const s2_bA = [4, 0, 0];
  const s2_bB = computeAlignedBlockPos(s2_bA, [0, 0, -1], 315, -2); // [6, -2, -3]
  const s2_seam = buildIllusionSeam({
    id: 'c5s2_seam_bastion',
    nodeA: 'c5s2_b1',
    nodeB: 'c5s2_b2',
    posA: s2_bA,
    posB: s2_bB,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 315,
    requiredRotators: { turret_c5_bastion: [0, 2] },
  });

  const s2_sA = [1, 0, 3];
  const s2_sBAligned = computeAlignedBlockPos(s2_sA, [0, 0, 1], 315, 2); // [-1, 2, 6]
  const s2_sB = shiftPosY(s2_sBAligned, -2); // [-1, 0, 6]
  const s2_seamS = buildIllusionSeam({
    id: 'c5s2_seam_sofia',
    nodeA: 'c5s2_s_dock',
    nodeB: 'c5s2_s_goal_bridge',
    posA: s2_sA,
    posB: s2_sB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
    requiredPlates: ['p_c5_release_sofia'],
  });

  const stage2 = {
    stageId: 'ch5_s2',
    title: '東望洋古砲台白霧壇',
    subtitle: '1808・五時五十三分提燈老人現身處',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.2, y: 0.0, z: 1.5 },
    baseHalfHeight: 7.5,
    actors: [
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c5s2_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c5s2_a_start' },
    ],
    defaultActorId: 'sofia',
    nodes: [
      // Sofia on side bay holding plate to unlock turret_c5_bastion, plus 315° seam to goal_s once latched
      makeNode('c5s2_s_start', [0, 0, 2], 'bluestone'),
      makeNode('c5s2_s_plate', [1, 0, 2], 'ochre', { plateId: 'p_c5_unlock_rot' }),
      makeNode('c5s2_s_dock', s2_sA, 'bluestone'),
      makeNode('c5s2_s_goal_bridge', s2_sB, 'stone', { groupId: 'grp_c5_sofia_bridge' }),
      makeNode('c5s2_goal_s', [-1, 0, 7], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c5_sofia_bridge',
      }),
      // Afonso turns rotator (locked while p_c5_unlock_rot inactive), crosses 315° seam to latch bridge for Sofia, then reaches goal_a
      makeNode('c5s2_a_start', [0, 0, 0], 'stone'),
      makeNode('c5s2_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c5_bastion' }),
      makeNode('c5s2_hub', s2_pivot, 'stone', { rotatorId: 'turret_c5_bastion' }),
      makeNode('c5s2_arm_e', [3, 0, 0], 'ochre', { rotatorId: 'turret_c5_bastion' }),
      makeNode('c5s2_occ', [1, 1, 1], 'stone', { rotatorId: 'turret_c5_bastion', pillarHeight: 2 }),
      makeNode('c5s2_occ2', [3, 1, -1], 'stone', { rotatorId: 'turret_c5_bastion', pillarHeight: 2 }),
      makeNode('c5s2_b1', s2_bA, 'stone'),
      makeNode('c5s2_b2', s2_bB, 'granite'),
      makeNode('c5s2_latch', [5, -2, -3], 'ochre', { plateId: 'p_c5_release_sofia' }),
      makeNode('c5s2_goal_a', [4, -2, -3], 'hexagram_lotus_altar', { isGoal: true, isFinalGoal: true }),
    ],
    edges: [
      ...makeChain(['c5s2_s_start', 'c5s2_s_plate', 'c5s2_s_dock']),
      ...makeChain(['c5s2_s_goal_bridge', 'c5s2_goal_s']),
      ...makeChain(['c5s2_arm_w', 'c5s2_hub', 'c5s2_arm_e']),
      ...makeChain(['c5s2_b2', 'c5s2_latch', 'c5s2_goal_a']),
    ],
    plates: [
      { id: 'p_c5_unlock_rot', nodeId: 'c5s2_s_plate', mode: 'hold' },
      {
        id: 'p_c5_release_sofia',
        nodeId: 'c5s2_latch',
        mode: 'latch',
        targetGroupId: 'grp_c5_sofia_bridge',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c5_bastion',
        pivot: s2_pivot,
        axis: 'y',
        nodeIds: ['c5s2_arm_w', 'c5s2_hub', 'c5s2_arm_e', 'c5s2_occ', 'c5s2_occ2'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        requiredPlates: ['p_c5_unlock_rot'],
        linkedEdges: [
          { from: 'c5s2_a_start', to: 'c5s2_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c5s2_arm_e', to: 'c5s2_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c5s2_a_start', to: 'c5s2_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c5s2_arm_w', to: 'c5s2_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s2_seam, s2_seamS],
    props: [
      { id: 'c5_fort_s2', type: 'guia_fort_1808', x: 5.0, y: -1.8, z: -4.2, label: '1808 東望洋古砲台白霧石壇' },
      { id: 'old_man_ch5', type: 'old_man_553', loreId: 'old_man_ch5', x: 1.6, y: 0.5, z: -1.7, label: '提燈的五時五十三分白髮老人' },
    ],
    winCondition: {
      type: 'all_on_goals',
      goals: { sofia: 'c5s2_goal_s', afonso: 'c5s2_goal_a' },
    },
    hintText: '盧曉晴先踩住轉盤解鎖踏板，讓阿方索旋回砲台石橋（-1 格）並切 315° 踩下苔階機關打開盧曉晴前方 315° 視錯覺石橋，二人雙雙登上砲台蓮座。',
    automatedSolution: [
      { action: 'move', nodeId: 'c5s2_s_plate' },
      { action: 'switch', actorId: 'afonso' },
      { action: 'rotateTurret', rotatorId: 'turret_c5_bastion', deltaSteps: -1 },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c5s2_latch' },
      { action: 'move', nodeId: 'c5s2_goal_a' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'move', nodeId: 'c5s2_goal_s' },
    ],
  };

  return {
    id: 5,
    era: '1808',
    themeKey: '1808_fog',
    title: '霧鎖東望洋與英艦暗影',
    subtitle: '1808・白霧東望洋砲台古址',
    hintText: '兩代主角前後協作：先以長按石秤退散濃霧遮柱，再解鎖砲台轉盤接通 315° 青苔階梯。',
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c5s1_a1' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c5s1_s1' },
    ],
    defaultActorId: 'afonso',
    stages: [stage1, stage2],
  };
}

/* ============================================================================
 * Chapter 6 (1835 / 1839・大三巴殘垣與崗頂): 2 Stages (Duo: Sofia + Afonso)
 * ========================================================================== */
function makeChapter6() {
  // Stage 1: Burning Facade Bridge — Afonso extinguishes ember lock (deactivatesPlates), Sofia crosses 315°
  const s1_aA = [1, 0, 2];
  const s1_aB = computeAlignedBlockPos(s1_aA, [1, 0, 0], 135, 2); // [4, 2, 0]
  const s1_seam1 = buildIllusionSeam({
    id: 'c6s1_seam_quench',
    nodeA: 'c6s1_a2',
    nodeB: 'c6s1_a_quench',
    posA: s1_aA,
    posB: s1_aB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
  });

  const s1_sA = [1, 0, 0];
  const s1_sB = computeAlignedBlockPos(s1_sA, [0, 0, -1], 315, -2); // [3, -2, -3]
  const s1_seam2 = buildIllusionSeam({
    id: 'c6s1_seam_ruin',
    nodeA: 'c6s1_s2',
    nodeB: 'c6s1_s3',
    posA: s1_sA,
    posB: s1_sB,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 315,
    blockedByPlates: ['p_c6_ember_gate'],
  });

  const stage1 = {
    stageId: 'ch6_s1',
    title: '聖保祿烈焰鐘樓與殘垣石橋',
    subtitle: '1835・火海余燼中的大三巴孤壁',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.0, y: 0.0, z: -0.6 },
    baseHalfHeight: 7.4,
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c6s1_a1' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c6s1_s1' },
    ],
    defaultActorId: 'afonso',
    nodes: [
      makeNode('c6s1_a1', [0, 0, 2], 'granite'),
      makeNode('c6s1_a2', s1_aA, 'granite'),
      makeNode('c6s1_a_quench', s1_aB, 'stone', { plateId: 'p_c6_quench' }),
      makeNode('c6s1_s1', [0, 0, 0], 'bluestone'),
      makeNode('c6s1_s2', s1_sA, 'granite'),
      makeNode('c6s1_s3', s1_sB, 'brick', { groupId: 'grp_c6_ruin' }),
      makeNode('c6s1_goal', [3, -2, -4], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c6_ruin',
      }),
    ],
    edges: [
      ...makeChain(['c6s1_a1', 'c6s1_a2']),
      ...makeChain(['c6s1_s1', 'c6s1_s2']),
      ...makeChain(['c6s1_s3', 'c6s1_goal']),
    ],
    plates: [
      {
        id: 'p_c6_ember_gate',
        nodeId: 'c6s1_a1',
        mode: 'seal',
        initialActive: true,
        targetGroupId: 'grp_c6_ruin',
        moveOffset: { x: 0, y: -1, z: 0 },
      },
      { id: 'p_c6_quench', nodeId: 'c6s1_a_quench', mode: 'latch', deactivatesPlates: ['p_c6_ember_gate'] },
    ],
    seams: [s1_seam1, s1_seam2],
    props: [
      { id: 'c6_ruin', type: 'st_pauls_ruin_wall', x: 1.9, y: -2.0, z: -4.2, label: '1835 大三巴牌坊焦黑孤壁' },
      { id: 'corvo_ch6', type: 'corvo_figure', loreId: 'corvo_ch6', x: 4.9, y: 2.5, z: 0.4, label: '延遲三分鐘的密電殘頁' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c6s1_goal', requiredActors: ['sofia'] },
    hintText: '火牆鎖印正阻斷牌坊視線！先讓阿方索切 135° 踩下熄火石印解除阻隔，再切盧曉晴轉 315° 跨過牌坊孤壁。',
    automatedSolution: [
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c6s1_a_quench' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c6s1_goal' },
    ],
  };

  // Stage 2: 1839 St. Augustine's Nineteen-Gun Salute + Y-Rotator + Old Man Drop Candle
  const s2_pivot = [2, 0, 0];
  const s2_bA = [4, 0, 0];
  const s2_bBAligned = computeAlignedBlockPos(s2_bA, [1, 0, 0], 225, -2); // [7, -2, 2]
  const s2_bB = shiftPosY(s2_bBAligned, -2); // [7, -4, 2]
  const s2_seam0 = buildIllusionSeam({
    id: 'c6s2_seam_salute',
    nodeA: 'c6s2_b1',
    nodeB: 'c6s2_b2',
    posA: s2_bA,
    posB: s2_bB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 225,
    requiredRotators: { turret_c6_salute: [0, 2] },
    requiredPlates: ['p_c6_salute'],
  });

  const s2_sA = [1, 0, 3];
  const s2_sBAligned = computeAlignedBlockPos(s2_sA, [0, 0, 1], 225, -2); // [3, -2, 6]
  const s2_sB = shiftPosY(s2_sBAligned, -2); // [3, -4, 6]
  const s2_seamS = buildIllusionSeam({
    id: 'c6s2_seam_sofia',
    nodeA: 'c6s2_s_dock',
    nodeB: 'c6s2_s_bridge',
    posA: s2_sA,
    posB: s2_sB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 225,
    requiredPlates: ['p_c6_bell'],
  });

  const stage2 = {
    stageId: 'ch6_s2',
    title: '崗頂十九響禮炮台與紫金祭壇燭',
    subtitle: '1839・大耶穌聖像復活之力覺醒處',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 4.0, y: -2.0, z: 2.5 },
    baseHalfHeight: 7.7,
    actors: [
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c6s2_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c6s2_a_start' },
    ],
    defaultActorId: 'sofia',
    nodes: [
      makeNode('c6s2_s_start', [0, 0, 2], 'bluestone'),
      makeNode('c6s2_s_plate', [1, 0, 2], 'ochre', { plateId: 'p_c6_salute' }),
      makeNode('c6s2_s_dock', s2_sA, 'bluestone'),
      makeNode('c6s2_s_bridge', s2_sB, 'granite', { groupId: 'grp_c6_sofia_bell' }),
      makeNode('c6s2_goal_s', [3, -4, 7], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c6_sofia_bell',
      }),
      makeNode('c6s2_a_start', [0, 0, 0], 'granite'),
      makeNode('c6s2_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c6_salute' }),
      makeNode('c6s2_hub', s2_pivot, 'stone', { rotatorId: 'turret_c6_salute' }),
      makeNode('c6s2_arm_e', [3, 0, 0], 'ochre', { rotatorId: 'turret_c6_salute' }),
      makeNode('c6s2_b1', s2_bA, 'granite'),
      makeNode('c6s2_b2', s2_bB, 'ochre', { groupId: 'grp_c6_salute' }),
      makeNode('c6s2_latch_s', [8, -4, 2], 'ochre', { plateId: 'p_c6_bell', groupId: 'grp_c6_salute' }),
      makeNode('c6s2_goal_a', [9, -4, 2], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c6_salute',
      }),
    ],
    edges: [
      ...makeChain(['c6s2_s_start', 'c6s2_s_plate', 'c6s2_s_dock']),
      ...makeChain(['c6s2_s_bridge', 'c6s2_goal_s']),
      ...makeChain(['c6s2_arm_w', 'c6s2_hub', 'c6s2_arm_e']),
      ...makeChain(['c6s2_b2', 'c6s2_latch_s', 'c6s2_goal_a']),
    ],
    plates: [
      {
        id: 'p_c6_salute',
        nodeId: 'c6s2_s_plate',
        mode: 'hold',
        targetGroupId: 'grp_c6_salute',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
      {
        id: 'p_c6_bell',
        nodeId: 'c6s2_latch_s',
        mode: 'latch',
        targetGroupId: 'grp_c6_sofia_bell',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c6_salute',
        pivot: s2_pivot,
        axis: 'y',
        nodeIds: ['c6s2_arm_w', 'c6s2_hub', 'c6s2_arm_e'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c6s2_a_start', to: 'c6s2_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c6s2_arm_e', to: 'c6s2_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c6s2_a_start', to: 'c6s2_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c6s2_arm_w', to: 'c6s2_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s2_seam0, s2_seamS],
    props: [
      { id: 'old_man_ch6', type: 'old_man_553', loreId: 'old_man_ch6', x: 8.2, y: -1.5, z: 3.4, label: '歸還紫金祭壇燭的白髮老人' },
    ],
    winCondition: {
      type: 'all_on_goals',
      goals: { sofia: 'c6s2_goal_s', afonso: 'c6s2_goal_a' },
    },
    hintText: '盧曉晴守住十九響禮炮機關，阿方索將砲台轉盤轉至 0°／180°（-1 或 +1 格）並切 225° 登上聖堂對岸拉下鐘樓鎖，兩人共登大耶穌蓮座。',
    automatedSolution: [
      { action: 'move', nodeId: 'c6s2_s_plate' },
      { action: 'switch', actorId: 'afonso' },
      { action: 'rotateTurret', rotatorId: 'turret_c6_salute', deltaSteps: -1 },
      { action: 'rotate', deg: 225 },
      { action: 'move', nodeId: 'c6s2_latch_s' },
      { action: 'move', nodeId: 'c6s2_goal_a' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'move', nodeId: 'c6s2_goal_s' },
    ],
  };

  return {
    id: 6,
    era: '1835 / 1839',
    themeKey: '1835_ember',
    title: '紅蓮業火與十九響禮炮',
    subtitle: '1835 / 1839・牌坊孤壁與崗頂教堂',
    hintText: '雙人接力滅卻餘燼封印並轉動禮炮台，借孤壁與聖堂長階重現第四重奇蹟。',
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c6s1_a1' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c6s1_s1' },
    ],
    defaultActorId: 'afonso',
    stages: [stage1, stage2],
  };
}

/* ============================================================================
 * Chapter 7 (1849 / 1895・蓮花莖關閘、柿山與娛園 — NO Western Arch!): 3 Stages
 * ========================================================================== */
function makeChapter7() {
  // Stage 1: Lotus Stem Causeway & Qing Hip-and-Gable Border Gate
  const s1_aA = [1, 0, 0];
  const s1_aBAligned = computeAlignedBlockPos(s1_aA, [1, 0, 0], 225, -2); // [4, -2, 2]
  const s1_aB = shiftPosY(s1_aBAligned, -2); // [4, -4, 2]
  const s1_seam = buildIllusionSeam({
    id: 'c7s1_seam_tide',
    nodeA: 'c7s1_a2',
    nodeB: 'c7s1_b1',
    posA: s1_aA,
    posB: s1_aB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 225,
    requiredPlates: ['p_c7_tide'],
  });

  const stage1 = {
    stageId: 'ch7_s1',
    title: '蓮花莖退潮沙堤與清代歇山頂關閘',
    subtitle: '1849・中式傳統飛簷汛營門檻',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.5, y: -1.6, z: 1 },
    baseHalfHeight: 7.04,
    actors: [
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c7s1_s1' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c7s1_a1' },
    ],
    defaultActorId: 'sofia',
    nodes: [
      makeNode('c7s1_s1', [0, 0, 2], 'bluestone'),
      makeNode('c7s1_s_tide', [1, 0, 2], 'sand', { plateId: 'p_c7_tide' }),
      makeNode('c7s1_a1', [0, 0, 0], 'sand'),
      makeNode('c7s1_a2', s1_aA, 'sand'),
      makeNode('c7s1_b1', s1_aB, 'brick', { groupId: 'grp_c7_gate' }),
      makeNode('c7s1_goal', [5, -4, 2], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c7_gate',
      }),
    ],
    edges: [
      ...makeChain(['c7s1_s1', 'c7s1_s_tide']),
      ...makeChain(['c7s1_a1', 'c7s1_a2']),
      ...makeChain(['c7s1_b1', 'c7s1_goal']),
    ],
    plates: [
      {
        id: 'p_c7_tide',
        nodeId: 'c7s1_s_tide',
        mode: 'latch',
        targetGroupId: 'grp_c7_gate',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    seams: [s1_seam],
    props: [
      { id: 'c7_gate', type: 'qing_border_gate', x: 5, y: -1.5, z: 0.8, label: '清代歇山頂舊關閘汛營' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c7s1_goal', requiredActors: ['afonso'] },
    hintText: '盧曉晴踏上退潮石印露出蓮花莖沙堤，再切阿方索轉至 225° 穿過清代歇山頂舊關閘傳送門。',
    automatedSolution: [
      { action: 'move', nodeId: 'c7s1_s_tide' },
      { action: 'switch', actorId: 'afonso' },
      { action: 'rotate', deg: 225 },
      { action: 'move', nodeId: 'c7s1_goal' },
    ],
  };

  // Stage 2: 1895 Kak Shan Plague Quarter — Rotator Lantern + Decoy Occluder + BlockedByPlates
  const s2_pivot = [2, 0, 0];
  const s2_bA = [4, 0, 0];
  const s2_bB = computeAlignedBlockPos(s2_bA, [1, 0, 0], 135, 2); // [7, 2, -2]
  const s2_seamMain = buildIllusionSeam({
    id: 'c7s2_seam_kakshan',
    nodeA: 'c7s2_b1',
    nodeB: 'c7s2_b2',
    posA: s2_bA,
    posB: s2_bB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredRotators: { turret_c7_lantern: 0 },
    blockedByPlates: ['p_c7_miasma'],
  });
  const s2_occAtQ1 = computeSightlineOccluderPos(s2_bA, s2_bB, [1, 0, 0], 135, 2, 2.25);
  const s2_occBase = basePosForRotatedSpot(s2_occAtQ1, s2_pivot, 1);

  const s2_clearA = [0, 0, 2];
  const s2_clearB = computeAlignedBlockPos(s2_clearA, [0, 0, 1], 315, 2); // [-2, 2, 5]
  const s2_seamClear = buildIllusionSeam({
    id: 'c7s2_seam_tea',
    nodeA: 'c7s2_s_spur',
    nodeB: 'c7s2_tea',
    posA: s2_clearA,
    posB: s2_clearB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
  });

  const stage2 = {
    stageId: 'ch7_s2',
    title: '柿山疫霧壇與老者涼茶攤',
    subtitle: '1895・哪吒三昧蓮火降疫之途',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.5, y: 0.45, z: 0.5 },
    baseHalfHeight: 7.22,
    actors: [
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c7s2_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c7s2_a_start' },
    ],
    defaultActorId: 'sofia',
    nodes: [
      makeNode('c7s2_s_start', [0, 0, 1], 'bluestone'),
      makeNode('c7s2_s_spur', s2_clearA, 'stone'),
      makeNode('c7s2_tea', s2_clearB, 'ochre', { plateId: 'p_c7_herbal_cleanse' }),
      makeNode('c7s2_a_start', [0, 0, 0], 'granite'),
      makeNode('c7s2_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c7_lantern' }),
      makeNode('c7s2_hub', s2_pivot, 'stone', { rotatorId: 'turret_c7_lantern' }),
      makeNode('c7s2_arm_e', [3, 0, 0], 'ochre', { rotatorId: 'turret_c7_lantern' }),
      makeNode('c7s2_occ', s2_occBase, 'brick', { rotatorId: 'turret_c7_lantern', pillarHeight: 2 }),
      makeNode('c7s2_b1', s2_bA, 'stone'),
      makeNode('c7s2_b2', s2_bB, 'mint', { groupId: 'grp_c7_miasma' }),
      makeNode('c7s2_goal', [8, 2, -2], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c7_miasma',
      }),
    ],
    edges: [
      ...makeChain(['c7s2_s_start', 'c7s2_s_spur']),
      ...makeChain(['c7s2_arm_w', 'c7s2_hub', 'c7s2_arm_e']),
      ...makeChain(['c7s2_b2', 'c7s2_goal']),
    ],
    plates: [
      {
        id: 'p_c7_miasma',
        nodeId: 'c7s2_s_spur',
        mode: 'seal',
        initialActive: true,
        targetGroupId: 'grp_c7_miasma',
        moveOffset: { x: 0, y: -1, z: 0 },
      },
      { id: 'p_c7_herbal_cleanse', nodeId: 'c7s2_tea', mode: 'latch', deactivatesPlates: ['p_c7_miasma'] },
    ],
    rotators: [
      {
        id: 'turret_c7_lantern',
        pivot: s2_pivot,
        axis: 'y',
        nodeIds: ['c7s2_arm_w', 'c7s2_hub', 'c7s2_arm_e', 'c7s2_occ'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c7s2_a_start', to: 'c7s2_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c7s2_arm_e', to: 'c7s2_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c7s2_a_start', to: 'c7s2_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c7s2_arm_w', to: 'c7s2_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s2_seamClear, s2_seamMain],
    props: [
      { id: 'old_man_ch7', type: 'old_man_553', loreId: 'old_man_ch7', x: -2.6, y: 2.5, z: 5.5, label: '涼茶攤邊的五時五十三分白髮老者' },
      { id: 'corvo_ch7', type: 'corvo_figure', loreId: 'corvo_ch7', x: 7.5, y: 2.5, z: -2.9, label: '關閘密件與收槍記錄' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c7s2_goal', requiredActors: ['afonso'] },
    hintText: '盧曉晴切 315° 至涼茶攤淨化疫瘴（解除封鎖板），阿方索轉動燈籠碑架（-1 格）清開遮柱並轉 135° 跨入通往娛園的前門拱門。',
    automatedSolution: [
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c7s2_tea' },
      { action: 'switch', actorId: 'afonso' },
      { action: 'rotateTurret', rotatorId: 'turret_c7_lantern', deltaSteps: -1 },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c7s2_goal' },
    ],
  };

  // Stage 3: 1895 娛園密室血脈鐵匣 — Twin Garden Turntable & Dual Convergence (all_on_goals)
  const s3_pivot = [2, 0, 0];
  const s3_aA = [4, 0, 0];
  const s3_aB = computeAlignedBlockPos(s3_aA, [1, 0, 0], 135, 2); // [7, 2, -2]
  const s3_seamA = buildIllusionSeam({
    id: 'c7s3_seam_east',
    nodeA: 'c7s3_e1',
    nodeB: 'c7s3_e2',
    posA: s3_aA,
    posB: s3_aB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredRotators: { turret_c7_garden: [0, 2] },
  });
  const s3_sA = [2, 0, 3];
  const s3_sBAligned = computeAlignedBlockPos(s3_sA, [0, 0, 1], 315, 2); // [0, 2, 6]
  const s3_sB = shiftPosY(s3_sBAligned, -2); // [0, 0, 6]
  const s3_seamS = buildIllusionSeam({
    id: 'c7s3_seam_south',
    nodeA: 'c7s3_s1',
    nodeB: 'c7s3_s2',
    posA: s3_sA,
    posB: s3_sB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
    requiredPlates: ['p_c7_garden_lock'],
  });

  const stage3 = {
    stageId: 'ch7_s3',
    title: '娛園密室血脈鐵匣與哪吒蓮火壇',
    subtitle: '1895・盧園春草堂密閣雙橋會合',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 3.2, y: 0.45, z: 1.5 },
    baseHalfHeight: 7.39,
    actors: [
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c7s3_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c7s3_a_start' },
    ],
    defaultActorId: 'afonso',
    nodes: [
      makeNode('c7s3_a_start', [0, 0, 0], 'granite'),
      makeNode('c7s3_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c7_garden' }),
      makeNode('c7s3_hub', s3_pivot, 'stone', { rotatorId: 'turret_c7_garden' }),
      makeNode('c7s3_arm_e', [3, 0, 0], 'ochre', { rotatorId: 'turret_c7_garden' }),
      makeNode('c7s3_occ', [3, 1, 3], 'stone', { rotatorId: 'turret_c7_garden', pillarHeight: 2 }),
      makeNode('c7s3_occ2', [1, 1, -3], 'stone', { rotatorId: 'turret_c7_garden', pillarHeight: 2 }),
      makeNode('c7s3_e1', s3_aA, 'stone'),
      makeNode('c7s3_e2', s3_aB, 'mint'),
      makeNode('c7s3_latch', [7, 2, -3], 'ochre', { plateId: 'p_c7_garden_lock' }),
      makeNode('c7s3_goal_a', [8, 2, -2], 'hexagram_lotus_altar', { isGoal: true, isFinalGoal: true }),
      makeNode('c7s3_s_start', [2, 0, 2], 'bluestone'),
      makeNode('c7s3_s1', s3_sA, 'bluestone'),
      makeNode('c7s3_s2', s3_sB, 'mint', { groupId: 'grp_c7_garden_s' }),
      makeNode('c7s3_goal_s', [0, 0, 7], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c7_garden_s',
      }),
    ],
    edges: [
      ...makeChain(['c7s3_arm_w', 'c7s3_hub', 'c7s3_arm_e']),
      ...makeChain(['c7s3_e2', 'c7s3_latch']),
      ...makeChain(['c7s3_e2', 'c7s3_goal_a']),
      ...makeChain(['c7s3_s_start', 'c7s3_s1']),
      ...makeChain(['c7s3_s2', 'c7s3_goal_s']),
    ],
    plates: [
      {
        id: 'p_c7_garden_lock',
        nodeId: 'c7s3_latch',
        mode: 'latch',
        targetGroupId: 'grp_c7_garden_s',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c7_garden',
        pivot: s3_pivot,
        axis: 'y',
        nodeIds: ['c7s3_arm_w', 'c7s3_hub', 'c7s3_arm_e', 'c7s3_occ', 'c7s3_occ2'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c7s3_a_start', to: 'c7s3_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c7s3_arm_e', to: 'c7s3_e1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c7s3_a_start', to: 'c7s3_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c7s3_arm_w', to: 'c7s3_e1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s3_seamA, s3_seamS],
    props: [
      { id: 'c7_yu_arcade', type: 'puiching_arcade', x: 9.8, y: 2.2, z: -2.0, label: '娛園春草堂密室血脈鐵匣' },
    ],
    winCondition: {
      type: 'all_on_goals',
      goals: { afonso: 'c7s3_goal_a', sofia: 'c7s3_goal_s' },
    },
    hintText: '於娛園密室調轉花窗橋（-1 格），阿方索先切 135° 踩下鐵匣鎖印並登壇，盧曉晴隨即切 315° 踏過九曲荷橋會合蓮座。',
    automatedSolution: [
      { action: 'rotateTurret', rotatorId: 'turret_c7_garden', deltaSteps: -1 },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c7s3_latch' },
      { action: 'move', nodeId: 'c7s3_goal_a' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c7s3_goal_s' },
    ],
  };

  return {
    id: 7,
    era: '1849 / 1895',
    themeKey: '1849_tide',
    title: '蓮花莖硝煙與春草堂之約',
    subtitle: '1849 / 1895・蓮花莖潮汐與中式歇山頂關閘',
    hintText: '穿過清代歇山頂舊關閘與柿山疫霧，在娛園密室打開血脈鐵匣喚醒哪吒蓮火之力。',
    actors: [
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c7s1_s1' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c7s1_a1' },
    ],
    defaultActorId: 'sofia',
    stages: [stage1, stage2, stage3],
  };
}

/* ============================================================================
 * Chapter 8 (1910・九澳狂瀾與海盜迷城 — NO St. Francis Church!): 3 Stages
 * ========================================================================== */
function makeChapter8() {
  // Stage 1: Ka Ho Cliff Jetty (Afonso holds brazier -> lifts reef trestle; Sofia 315° crossing)
  const s1_a = [1, 0, 0];
  const s1_bAligned = computeAlignedBlockPos(s1_a, [0, 0, 1], 315, 2); // [-1, 2, 3]
  const s1_b = shiftPosY(s1_bAligned, -2); // [-1, 0, 3]
  const s1_seam = buildIllusionSeam({
    id: 'c8s1_seam_jetty',
    nodeA: 'c8s1_s2',
    nodeB: 'c8s1_s3',
    posA: s1_a,
    posB: s1_b,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
    requiredPlates: ['p_c8_brazier'],
  });

  const stage1 = {
    stageId: 'ch8_s1',
    title: '九澳寨岸崖棧橋與學童密道',
    subtitle: '1910・風雨狂瀾中的海賊寨堡外圍',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 0.0, y: 0.15, z: 1.2 },
    baseHalfHeight: 7.04,
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c8s1_a1' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c8s1_s1' },
    ],
    defaultActorId: 'afonso',
    nodes: [
      makeNode('c8s1_a1', [0, 0, -2], 'stone'),
      makeNode('c8s1_a_plate', [1, 0, -2], 'ochre', { plateId: 'p_c8_brazier' }),
      makeNode('c8s1_s1', [0, 0, 0], 'bluestone'),
      makeNode('c8s1_s2', s1_a, 'wood'),
      makeNode('c8s1_s3', s1_b, 'wood', { groupId: 'grp_c8_jetty' }),
      makeNode('c8s1_goal', [-2, 0, 3], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c8_jetty',
      }),
    ],
    edges: [
      ...makeChain(['c8s1_a1', 'c8s1_a_plate']),
      ...makeChain(['c8s1_s1', 'c8s1_s2']),
      ...makeChain(['c8s1_s3', 'c8s1_goal']),
    ],
    plates: [
      {
        id: 'p_c8_brazier',
        nodeId: 'c8s1_a_plate',
        mode: 'hold',
        targetGroupId: 'grp_c8_jetty',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    seams: [s1_seam],
    props: [
      { id: 'c8_fort', type: 'ka_ho_fort', x: -3.8, y: 2.0, z: 0.4, label: '1910 九澳寨海岸礁堡' },
      { id: 'corvo_ch8', type: 'corvo_figure', loreId: 'corvo_ch8', x: 1.8, y: 0.5, z: -2.8, label: '暗斷東閘的九澳異議通訊' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c8s1_goal', requiredActors: ['sofia'] },
    hintText: '阿方索守住海岸火把台（長按），盧曉晴切至 315° 沿救童木棧道踏入寨堡內門。',
    automatedSolution: [
      { action: 'move', nodeId: 'c8s1_a_plate' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c8s1_goal' },
    ],
  };

  // Stage 2: Pirate Winch Towers (Plate-Gated Rotator + Occluder Crane + Dual Portal)
  const s2_pivot = [2, 0, 0];
  const s2_bA = [4, 0, 0];
  const s2_bB = computeAlignedBlockPos(s2_bA, [1, 0, 0], 135, 2); // [7, 2, -2]
  const s2_seam = buildIllusionSeam({
    id: 'c8s2_seam_crane',
    nodeA: 'c8s2_b1',
    nodeB: 'c8s2_b2',
    posA: s2_bA,
    posB: s2_bB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredRotators: { turret_c8_winch: 0 },
  });
  const s2_occAtQ1 = computeSightlineOccluderPos(s2_bA, s2_bB, [1, 0, 0], 135, 2, 2.25);
  const s2_occBase = basePosForRotatedSpot(s2_occAtQ1, s2_pivot, 1);

  const s2_sA = [1, 0, 4];
  const s2_sBAligned = computeAlignedBlockPos(s2_sA, [1, 0, 0], 135, 2); // [4, 2, 2]
  const s2_sB = shiftPosY(s2_sBAligned, -2); // [4, 0, 2]
  const s2_seamS = buildIllusionSeam({
    id: 'c8s2_seam_sofia',
    nodeA: 'c8s2_s_dock',
    nodeB: 'c8s2_s_bridge',
    posA: s2_sA,
    posB: s2_sB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredPlates: ['p_c8_unlock_s'],
  });

  const stage2 = {
    stageId: 'ch8_s2',
    title: '海盜礁岩風雨絞盤雙塔',
    subtitle: '1910・雙人操作礁堡吊臂對接',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 3.5, y: 0.45, z: -0.5 },
    baseHalfHeight: 7.22,
    actors: [
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c8s2_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c8s2_a_start' },
    ],
    defaultActorId: 'sofia',
    nodes: [
      makeNode('c8s2_s_start', [0, 0, 3], 'bluestone'),
      makeNode('c8s2_s_winch', [1, 0, 3], 'ochre', { plateId: 'p_c8_clutch' }),
      makeNode('c8s2_s_dock', s2_sA, 'bluestone'),
      makeNode('c8s2_s_bridge', s2_sB, 'wood', { groupId: 'grp_c8_sofia_bridge' }),
      makeNode('c8s2_goal_s', [5, 0, 2], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c8_sofia_bridge',
      }),
      makeNode('c8s2_a_start', [0, 0, 0], 'granite'),
      makeNode('c8s2_arm_w', [1, 0, 0], 'wood', { rotatorId: 'turret_c8_winch' }),
      makeNode('c8s2_hub', s2_pivot, 'stone', { rotatorId: 'turret_c8_winch' }),
      makeNode('c8s2_arm_e', [3, 0, 0], 'wood', { rotatorId: 'turret_c8_winch' }),
      makeNode('c8s2_occ', s2_occBase, 'wood', { rotatorId: 'turret_c8_winch', pillarHeight: 2 }),
      makeNode('c8s2_b1', s2_bA, 'granite'),
      makeNode('c8s2_b2', s2_bB, 'wood'),
      makeNode('c8s2_latch', [7, 2, -3], 'ochre', { plateId: 'p_c8_unlock_s' }),
    ],
    edges: [
      ...makeChain(['c8s2_s_start', 'c8s2_s_winch', 'c8s2_s_dock']),
      ...makeChain(['c8s2_s_bridge', 'c8s2_goal_s']),
      ...makeChain(['c8s2_arm_w', 'c8s2_hub', 'c8s2_arm_e']),
      ...makeChain(['c8s2_b2', 'c8s2_latch']),
    ],
    plates: [
      { id: 'p_c8_clutch', nodeId: 'c8s2_s_winch', mode: 'hold' },
      {
        id: 'p_c8_unlock_s',
        nodeId: 'c8s2_latch',
        mode: 'latch',
        targetGroupId: 'grp_c8_sofia_bridge',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c8_winch',
        pivot: s2_pivot,
        axis: 'y',
        nodeIds: ['c8s2_arm_w', 'c8s2_hub', 'c8s2_arm_e', 'c8s2_occ'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        requiredPlates: ['p_c8_clutch'],
        linkedEdges: [
          { from: 'c8s2_a_start', to: 'c8s2_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c8s2_arm_e', to: 'c8s2_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c8s2_a_start', to: 'c8s2_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c8s2_arm_w', to: 'c8s2_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s2_seam, s2_seamS],
    props: [],
    winCondition: { type: 'reach', goalNodeId: 'c8s2_goal_s', requiredActors: ['sofia'] },
    hintText: '盧曉晴按住絞盤離合板解鎖吊臂，阿方索轉動吊臂（-1 格）移開木柱並切 135° 拉開棧橋，盧曉晴隨即登階進入斷橋傳送門。',
    automatedSolution: [
      { action: 'move', nodeId: 'c8s2_s_winch' },
      { action: 'switch', actorId: 'afonso' },
      { action: 'rotateTurret', rotatorId: 'turret_c8_winch', deltaSteps: -1 },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c8s2_latch' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'move', nodeId: 'c8s2_goal_s' },
    ],
  };

  // Stage 3: Broken Bridge Climax — Mask Shattered (blockedByPlates + Dual Camera + Zero-7 Unmask)
  const s3_cleanA = [1, 0, 2];
  const s3_cleanB = computeAlignedBlockPos(s3_cleanA, [0, 0, 1], 315, 2); // [-1, 2, 5]
  const s3_seam1 = buildIllusionSeam({
    id: 'c8s3_seam_brake',
    nodeA: 'c8s3_a2',
    nodeB: 'c8s3_a_brake',
    posA: s3_cleanA,
    posB: s3_cleanB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
  });

  const s3_bridgeA = [1, 0, 0];
  const s3_bridgeB = computeAlignedBlockPos(s3_bridgeA, [1, 0, 0], 135, 2); // [4, 2, -2]
  const s3_seam2 = buildIllusionSeam({
    id: 'c8s3_seam_bridge',
    nodeA: 'c8s3_s2',
    nodeB: 'c8s3_s3',
    posA: s3_bridgeA,
    posB: s3_bridgeB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    blockedByPlates: ['p_c8_storm_lock'],
  });

  const stage3 = {
    stageId: 'ch8_s3',
    title: '九澳斷橋終決・碎裂面具之夜',
    subtitle: '1910・暴風雨斷橋與青藍面罩碎裂處',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2, y: 0.45, z: 1.5 },
    baseHalfHeight: 7.22,
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c8s3_a1' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c8s3_s1' },
    ],
    defaultActorId: 'afonso',
    nodes: [
      makeNode('c8s3_a1', [0, 0, 2], 'granite'),
      makeNode('c8s3_a2', s3_cleanA, 'granite'),
      makeNode('c8s3_a_brake', s3_cleanB, 'ochre', { plateId: 'p_c8_release' }),
      makeNode('c8s3_goal_a', [-1, 2, 6], 'hexagram_lotus_altar', { isGoal: true, isFinalGoal: true }),
      makeNode('c8s3_s1', [0, 0, 0], 'bluestone'),
      makeNode('c8s3_s2', s3_bridgeA, 'wood'),
      makeNode('c8s3_s3', s3_bridgeB, 'wood', { groupId: 'grp_c8_storm_bridge' }),
      makeNode('c8s3_goal_s', [5, 2, -2], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c8_storm_bridge',
      }),
    ],
    edges: [
      ...makeChain(['c8s3_a1', 'c8s3_a2']),
      ...makeChain(['c8s3_a_brake', 'c8s3_goal_a']),
      ...makeChain(['c8s3_s1', 'c8s3_s2']),
      ...makeChain(['c8s3_s3', 'c8s3_goal_s']),
    ],
    plates: [
      {
        id: 'p_c8_storm_lock',
        nodeId: 'c8s3_a1',
        mode: 'seal',
        initialActive: true,
        targetGroupId: 'grp_c8_storm_bridge',
        moveOffset: { x: 0, y: -1, z: 0 },
      },
      { id: 'p_c8_release', nodeId: 'c8s3_a_brake', mode: 'latch', deactivatesPlates: ['p_c8_storm_lock'] },
    ],
    seams: [s3_seam1, s3_seam2],
    props: [
      { id: 'zero7_ch8', type: 'zero7_silhouette', loreId: 'zero7_ch8', x: 5, y: 2.5, z: -2.9, label: '暴雨斷橋盡頭的黑甲面具人' },
    ],
    winCondition: {
      type: 'all_on_goals',
      goals: { afonso: 'c8s3_goal_a', sofia: 'c8s3_goal_s' },
    },
    hintText: '阿方索先轉 315° 踏破風暴栓鎖定並就位，盧曉晴隨即切至 135° 衝上九澳斷橋正面劈碎黑甲面具！',
    automatedSolution: [
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c8s3_goal_a' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c8s3_goal_s' },
    ],
  };

  return {
    id: 8,
    era: '1910',
    themeKey: '1910_storm',
    title: '九澳狂瀾與海盜迷城',
    subtitle: '1910・九澳寨岸崖與風雨棧橋（無教堂碑記年代）',
    hintText: '連破九澳海岸礁堡與風雨絞盤雙塔，最終於九澳斷橋正面劈裂黑甲面具。',
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c8s1_a1' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c8s1_s1' },
    ],
    defaultActorId: 'afonso',
    stages: [stage1, stage2, stage3],
  };
}

/* ============================================================================
 * Chapter 9 (2026・盧廉若公園與 1931 三層防空洞): 3 Stages
 * ========================================================================== */
function makeChapter9() {
  // Stage 1: Lou Lim Ieoc Nine-Turn Lotus Bridge (Ryan + Sofia)
  const s1_a = [1, 0, 0];
  const s1_bAligned = computeAlignedBlockPos(s1_a, [1, 0, 0], 135, 2); // [4, 2, -2]
  const s1_b = shiftPosY(s1_bAligned, -2); // [4, 0, -2]
  const s1_seam = buildIllusionSeam({
    id: 'c9s1_seam_nineturn',
    nodeA: 'c9s1_s2',
    nodeB: 'c9s1_s3',
    posA: s1_a,
    posB: s1_b,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredPlates: ['p_c9_harmonic'],
  });

  const stage1 = {
    stageId: 'ch9_s1',
    title: '盧廉若公園九曲橋與 5:53 懷錶',
    subtitle: '2026・盧辰歸來後兩姐弟並肩初行',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.5, y: 0.45, z: -0.5 },
    baseHalfHeight: 7.04,
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c9s1_r1' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c9s1_s1' },
    ],
    defaultActorId: 'ryan',
    nodes: [
      makeNode('c9s1_r1', [0, 0, 2], 'cyber'),
      makeNode('c9s1_r_pad', [1, 0, 2], 'ochre', { plateId: 'p_c9_harmonic' }),
      makeNode('c9s1_s1', [0, 0, 0], 'bluestone'),
      makeNode('c9s1_s2', s1_a, 'bluestone'),
      makeNode('c9s1_s3', s1_b, 'mint', { groupId: 'grp_c9_nineturn' }),
      makeNode('c9s1_goal', [5, 0, -2], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c9_nineturn',
      }),
    ],
    edges: [
      ...makeChain(['c9s1_r1', 'c9s1_r_pad']),
      ...makeChain(['c9s1_s1', 'c9s1_s2']),
      ...makeChain(['c9s1_s3', 'c9s1_goal']),
    ],
    plates: [
      {
        id: 'p_c9_harmonic',
        nodeId: 'c9s1_r_pad',
        mode: 'latch',
        targetGroupId: 'grp_c9_nineturn',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    seams: [s1_seam],
    props: [
      { id: 'couple_2026', type: 'couple_2026', loreId: 'couple_2026', x: 5.8, y: 2.5, z: -1.1, label: '2026 盧廉若公園九曲橋情侶（西米露＆加利）' },
      { id: 'old_man_ch9', type: 'old_man_553', loreId: 'old_man_ch9', x: 2.5, y: 0.5, z: 1.9, label: '九曲橋上的和藹白髮老人' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c9s1_goal', requiredActors: ['sofia'] },
    hintText: '盧辰啟動 5.53Hz 九曲橋諧振踏板，再切換盧曉晴轉至 135° 橫越荷池前往松山防空洞入口。',
    automatedSolution: [
      { action: 'move', nodeId: 'c9s1_r_pad' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c9s1_goal' },
    ],
  };

  // Stage 2: East Guia Grandstand & 1931 Spiral Bunker (Rotator + Occluder Blast Pillar)
  const s2_pivot = [2, 0, 0];
  const s2_bA = [4, 0, 0];
  const s2_bB = computeAlignedBlockPos(s2_bA, [1, 0, 0], 225, -2); // [7, -2, 2]
  const s2_seam = buildIllusionSeam({
    id: 'c9s2_seam_bunker',
    nodeA: 'c9s2_b1',
    nodeB: 'c9s2_b2',
    posA: s2_bA,
    posB: s2_bB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 225,
    requiredRotators: { turret_c9_bunker: 0 },
  });
  const s2_occBase = [3, 1, 1]; // rotates around [2,0,0] to [3,1,-1] at q=1 to occlude 225° ray; clear at q=0

  const stage2 = {
    stageId: 'ch9_s2',
    title: '東望洋賽道看台與 1931 防空洞階梯',
    subtitle: '2026・深入松山山腹三層立體混凝土甬道',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 3.5, y: -1.05, z: 1 },
    baseHalfHeight: 7.22,
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c9s2_r_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c9s2_s_start' },
    ],
    defaultActorId: 'ryan',
    nodes: [
      makeNode('c9s2_r_start', [0, 0, 0], 'cyber'),
      makeNode('c9s2_s_start', [0, 0, 2], 'bluestone'),
      makeNode('c9s2_arm_w', [1, 0, 0], 'stone', { rotatorId: 'turret_c9_bunker' }),
      makeNode('c9s2_hub', s2_pivot, 'stone', { rotatorId: 'turret_c9_bunker' }),
      makeNode('c9s2_arm_e', [3, 0, 0], 'stone', { rotatorId: 'turret_c9_bunker' }),
      makeNode('c9s2_occ', s2_occBase, 'granite', { rotatorId: 'turret_c9_bunker', pillarHeight: 2 }),
      makeNode('c9s2_b1', s2_bA, 'stone', { isStair: true }),
      makeNode('c9s2_b2', s2_bB, 'granite'),
      makeNode('c9s2_goal', [8, -2, 2], 'stage_portal_arch', { isGoal: true, isFinalGoal: false }),
    ],
    edges: [
      ...makeChain(['c9s2_arm_w', 'c9s2_hub', 'c9s2_arm_e']),
      ...makeChain(['c9s2_b2', 'c9s2_goal']),
    ],
    rotators: [
      {
        id: 'turret_c9_bunker',
        pivot: s2_pivot,
        axis: 'y',
        nodeIds: ['c9s2_arm_w', 'c9s2_hub', 'c9s2_arm_e', 'c9s2_occ'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c9s2_r_start', to: 'c9s2_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c9s2_arm_e', to: 'c9s2_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c9s2_r_start', to: 'c9s2_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c9s2_arm_w', to: 'c9s2_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s2_seam],
    props: [
      { id: 'c9_bunker', type: 'bunker_arches', x: 7.5, y: -1.6, z: 3.1, label: '1931 三層立體防空洞拱頂' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c9s2_goal', requiredActors: ['ryan'] },
    hintText: '轉動 1931 混凝土防爆閘門轉盤（-1 格）移開遮擋拱柱，再轉至 225° 令盧辰沿階進入底層脈衝室。',
    automatedSolution: [
      { action: 'rotateTurret', rotatorId: 'turret_c9_bunker', deltaSteps: -1 },
      { action: 'rotate', deg: 225 },
      { action: 'move', nodeId: 'c9s2_goal' },
    ],
  };

  // Stage 3: 1931 Level-3 Bunker Vault — Trio Convergence (Afonso + Sofia + Ryan)
  const s3_pivot = [2, 0, 0];
  const s3_aA = [4, 0, 0];
  const s3_aB = computeAlignedBlockPos(s3_aA, [1, 0, 0], 135, 2); // [7, 2, -2]
  const s3_seamA = buildIllusionSeam({
    id: 'c9s3_seam_vault_e',
    nodeA: 'c9s3_e1',
    nodeB: 'c9s3_e2',
    posA: s3_aA,
    posB: s3_aB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredRotators: { turret_c9_vault: [0, 2] },
  });
  const s3_sA = [2, 0, 3];
  const s3_sBAligned = computeAlignedBlockPos(s3_sA, [0, 0, 1], 315, 2); // [0, 2, 6]
  const s3_sB = shiftPosY(s3_sBAligned, -2); // [0, 0, 6]
  const s3_seamS = buildIllusionSeam({
    id: 'c9s3_seam_vault_s',
    nodeA: 'c9s3_s1',
    nodeB: 'c9s3_s2',
    posA: s3_sA,
    posB: s3_sB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
    requiredPlates: ['p_c9_vault_open'],
  });
  const s3_rA = [1, 0, -3];
  const s3_rBAligned = computeAlignedBlockPos(s3_rA, [0, 0, -1], 315, -2); // [3, -2, -6]
  const s3_rB = shiftPosY(s3_rBAligned, -2); // [3, -4, -6]
  const s3_seamR = buildIllusionSeam({
    id: 'c9s3_seam_vault_r',
    nodeA: 'c9s3_r_dock',
    nodeB: 'c9s3_r_bridge',
    posA: s3_rA,
    posB: s3_rB,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 315,
    requiredPlates: ['p_c9_vault_open'],
  });

  const stage3 = {
    stageId: 'ch9_s3',
    title: '1931 三層立體防空洞主脈衝室',
    subtitle: '2026・三代跨世紀實質會師處',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 3.0, y: -0.4, z: 0.0 },
    baseHalfHeight: 8.2,
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c9s3_r_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c9s3_a_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c9s3_s_start' },
    ],
    defaultActorId: 'ryan',
    nodes: [
      makeNode('c9s3_r_start', [0, 0, -2], 'cyber'),
      makeNode('c9s3_r_pad', [1, 0, -2], 'ochre', { plateId: 'p_c9_pulse_hold' }),
      makeNode('c9s3_r_dock', s3_rA, 'cyber'),
      makeNode('c9s3_r_bridge', s3_rB, 'cyber', { groupId: 'grp_c9_vault_gates' }),
      makeNode('c9s3_goal_r', [3, -4, -7], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c9_vault_gates',
      }),
      makeNode('c9s3_a_start', [0, 0, 0], 'granite'),
      makeNode('c9s3_arm_w', [1, 0, 0], 'stone', { rotatorId: 'turret_c9_vault' }),
      makeNode('c9s3_hub', s3_pivot, 'stone', { rotatorId: 'turret_c9_vault' }),
      makeNode('c9s3_arm_e', [3, 0, 0], 'stone', { rotatorId: 'turret_c9_vault' }),
      makeNode('c9s3_occ', [4, 2, 4], 'stone', { rotatorId: 'turret_c9_vault', pillarHeight: 2 }),
      makeNode('c9s3_occ2', [0, 2, -4], 'stone', { rotatorId: 'turret_c9_vault', pillarHeight: 2 }),
      makeNode('c9s3_e1', s3_aA, 'stone'),
      makeNode('c9s3_e2', s3_aB, 'ochre'),
      makeNode('c9s3_latch', [7, 2, -3], 'ochre', { plateId: 'p_c9_vault_open' }),
      makeNode('c9s3_goal_a', [8, 2, -2], 'hexagram_lotus_altar', { isGoal: true, isFinalGoal: true }),
      makeNode('c9s3_s_start', [2, 0, 2], 'bluestone'),
      makeNode('c9s3_s1', s3_sA, 'bluestone'),
      makeNode('c9s3_s2', s3_sB, 'mint', { groupId: 'grp_c9_vault_gates' }),
      makeNode('c9s3_goal_s', [0, 0, 7], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c9_vault_gates',
      }),
    ],
    edges: [
      ...makeChain(['c9s3_r_start', 'c9s3_r_pad', 'c9s3_r_dock']),
      ...makeChain(['c9s3_r_bridge', 'c9s3_goal_r']),
      ...makeChain(['c9s3_arm_w', 'c9s3_hub', 'c9s3_arm_e']),
      ...makeChain(['c9s3_e2', 'c9s3_latch']),
      ...makeChain(['c9s3_e2', 'c9s3_goal_a']),
      ...makeChain(['c9s3_s_start', 'c9s3_s1']),
      ...makeChain(['c9s3_s2', 'c9s3_goal_s']),
    ],
    plates: [
      { id: 'p_c9_pulse_hold', nodeId: 'c9s3_r_pad', mode: 'hold' },
      {
        id: 'p_c9_vault_open',
        nodeId: 'c9s3_latch',
        mode: 'latch',
        targetGroupId: 'grp_c9_vault_gates',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c9_vault',
        pivot: s3_pivot,
        axis: 'y',
        nodeIds: ['c9s3_arm_w', 'c9s3_hub', 'c9s3_arm_e', 'c9s3_occ', 'c9s3_occ2'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        requiredPlates: ['p_c9_pulse_hold'],
        linkedEdges: [
          { from: 'c9s3_a_start', to: 'c9s3_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c9s3_arm_e', to: 'c9s3_e1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c9s3_a_start', to: 'c9s3_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c9s3_arm_w', to: 'c9s3_e1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s3_seamA, s3_seamS, s3_seamR],
    props: [],
    winCondition: {
      type: 'all_on_goals',
      goals: { ryan: 'c9s3_goal_r', afonso: 'c9s3_goal_a', sofia: 'c9s3_goal_s' },
    },
    hintText: '盧辰踩住 5.53Hz 頻率墊解鎖主室轉盤，阿方索將轉盤旋回水平對接（-1 或 +1 格）並切 135° 拉下防空總閘，盧曉晴隨即切 315° 引領三代會合！',
    automatedSolution: [
      { action: 'move', nodeId: 'c9s3_r_pad' },
      { action: 'switch', actorId: 'afonso' },
      { action: 'rotateTurret', rotatorId: 'turret_c9_vault', deltaSteps: -1 },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c9s3_latch' },
      { action: 'move', nodeId: 'c9s3_goal_a' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c9s3_goal_s' },
      { action: 'switch', actorId: 'ryan' },
      { action: 'move', nodeId: 'c9s3_goal_r' },
    ],
  };

  return {
    id: 9,
    era: '2026',
    themeKey: '2026_dusk',
    title: '東望洋極速與松山防空洞',
    subtitle: '2026・盧廉若公園與 1931 三層立體防空洞',
    hintText: '先由九曲橋引動諧振進入防空洞，再轉動混凝土閘門並以三代協作打開總脈衝室。',
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c9s1_r1' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c9s1_s1' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c9s3_a_start' },
    ],
    defaultActorId: 'ryan',
    stages: [stage1, stage2, stage3],
  };
}

/* ============================================================================
 * Chapter 10 (2026・內港、新城 A 區與對撞環 — 梁氏後人梁九 & 醉龍龍頭木雕): 3 Stages
 * ========================================================================== */
function makeChapter10() {
  // Stage 1: Inner Harbour Pier & Timber Drunk Dragon Turntable (Trio, Liang 9)
  const s1_pivot = [2, 0, 0];
  const s1_bA = [4, 0, 0];
  const s1_bB = computeAlignedBlockPos(s1_bA, [0, 0, 1], 315, 2); // [2, 2, 3]
  const s1_seam = buildIllusionSeam({
    id: 'c10s1_seam_harbour',
    nodeA: 'c10s1_b1',
    nodeB: 'c10s1_b2',
    posA: s1_bA,
    posB: s1_bB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
    requiredRotators: { turret_c10_barge: 0 },
  });
  const s1_occAtQ1 = computeSightlineOccluderPos(s1_bA, s1_bB, [0, 0, 1], 315, 2, 2.25);
  const s1_occBase = basePosForRotatedSpot(s1_occAtQ1, s1_pivot, 1);

  const stage1 = {
    stageId: 'ch10_s1',
    title: '內港魚欄・梁氏後人梁九與醉龍龍頭木雕',
    subtitle: '2026・三代於內港碼頭踐約傳承第五重奇蹟',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.5, y: 0.45, z: 1.5 },
    baseHalfHeight: 7.22,
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c10s1_a_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c10s1_s_start' },
      { id: 'ryan', name: '盧辰', startNodeId: 'c10s1_r_start' },
    ],
    defaultActorId: 'afonso',
    nodes: [
      makeNode('c10s1_a_start', [0, 0, -2], 'wood'),
      makeNode('c10s1_a_pier', [1, 0, -2], 'ochre', { plateId: 'p_c10_pier' }),
      makeNode('c10s1_s_start', [0, 0, 0], 'bluestone'),
      makeNode('c10s1_r_start', [-1, 0, 0], 'cyber'),
      makeNode('c10s1_arm_w', [1, 0, 0], 'wood', { rotatorId: 'turret_c10_barge' }),
      makeNode('c10s1_hub', s1_pivot, 'wood', { rotatorId: 'turret_c10_barge' }),
      makeNode('c10s1_arm_e', [3, 0, 0], 'wood', { rotatorId: 'turret_c10_barge' }),
      makeNode('c10s1_occ', s1_occBase, 'ochre', { rotatorId: 'turret_c10_barge', pillarHeight: 2 }),
      makeNode('c10s1_b1', s1_bA, 'wood'),
      makeNode('c10s1_b2', s1_bB, 'bluestone'),
      makeNode('c10s1_goal', [2, 2, 4], 'stage_portal_arch', { isGoal: true, isFinalGoal: false }),
    ],
    edges: [
      ...makeChain(['c10s1_a_start', 'c10s1_a_pier']),
      ...makeChain(['c10s1_r_start', 'c10s1_s_start']),
      ...makeChain(['c10s1_arm_w', 'c10s1_hub', 'c10s1_arm_e']),
      ...makeChain(['c10s1_b2', 'c10s1_goal']),
    ],
    plates: [{ id: 'p_c10_pier', nodeId: 'c10s1_a_pier', mode: 'hold' }],
    rotators: [
      {
        id: 'turret_c10_barge',
        pivot: s1_pivot,
        axis: 'y',
        nodeIds: ['c10s1_arm_w', 'c10s1_hub', 'c10s1_arm_e', 'c10s1_occ'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        requiredPlates: ['p_c10_pier'],
        linkedEdges: [
          { from: 'c10s1_s_start', to: 'c10s1_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c10s1_arm_e', to: 'c10s1_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c10s1_s_start', to: 'c10s1_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c10s1_arm_w', to: 'c10s1_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s1_seam],
    props: [
      { id: 'liang9_ch10', type: 'paifang', loreId: 'liang9_ch10', x: 1.5, y: 0.5, z: -2.9, label: '內港魚欄・梁氏後人梁九與醉龍龍頭木雕' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c10s1_goal', requiredActors: ['sofia'] },
    hintText: '阿方索先穩住內港木棧壓板，盧曉晴調轉魚欄駁船轉盤（-1 格）移開桅杆遮柱並切 315° 跨往新城 A 區閘口。',
    automatedSolution: [
      { action: 'move', nodeId: 'c10s1_a_pier' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotateTurret', rotatorId: 'turret_c10_barge', deltaSteps: -1 },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c10s1_goal' },
    ],
  };

  // Stage 2: Zone A Sea Gates (Dual requiredPlates + blockedByPlates alarm interlock)
  const s2_bA = [1, 0, 0];
  const s2_bBAligned = computeAlignedBlockPos(s2_bA, [1, 0, 0], 225, -2); // [4, -2, 2]
  const s2_bB = shiftPosY(s2_bBAligned, -2); // [4, -4, 2]
  const s2_seam = buildIllusionSeam({
    id: 'c10s2_seam_zonea',
    nodeA: 'c10s2_s2',
    nodeB: 'c10s2_s3',
    posA: s2_bA,
    posB: s2_bB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 225,
    requiredPlates: ['p_c10_east', 'p_c10_west'],
    blockedByPlates: ['p_c10_alarm'],
  });

  const stage2 = {
    stageId: 'ch10_s2',
    title: '新城 A 區跨海閘門與烏鴉密圖',
    subtitle: '2026・雙閘同步啟閉避開紅外線警報鎖',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.5, y: -1.6, z: 1 },
    baseHalfHeight: 7.4,
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c10s2_a1' },
      { id: 'ryan', name: '盧辰', startNodeId: 'c10s2_r1' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c10s2_s1' },
    ],
    defaultActorId: 'afonso',
    nodes: [
      makeNode('c10s2_a1', [0, 0, -2], 'stone'),
      makeNode('c10s2_a_east', [1, 0, -2], 'ochre', { plateId: 'p_c10_east' }),
      makeNode('c10s2_r1', [0, 0, 2], 'cyber'),
      makeNode('c10s2_r_west', [1, 0, 2], 'ochre', { plateId: 'p_c10_west' }),
      makeNode('c10s2_s1', [0, 0, 0], 'bluestone'),
      makeNode('c10s2_s2', s2_bA, 'cyber'),
      makeNode('c10s2_s3', s2_bB, 'cyber', { groupId: 'grp_c10_zonea' }),
      makeNode('c10s2_goal', [5, -4, 2], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c10_zonea',
      }),
    ],
    edges: [
      ...makeChain(['c10s2_a1', 'c10s2_a_east']),
      ...makeChain(['c10s2_r1', 'c10s2_r_west']),
      ...makeChain(['c10s2_s1', 'c10s2_s2']),
      ...makeChain(['c10s2_s3', 'c10s2_goal']),
    ],
    plates: [
      {
        id: 'p_c10_alarm',
        nodeId: 'c10s2_a1',
        mode: 'seal',
        initialActive: true,
        targetGroupId: 'grp_c10_zonea',
        moveOffset: { x: 0, y: -1, z: 0 },
      },
      {
        id: 'p_c10_east',
        nodeId: 'c10s2_a_east',
        mode: 'hold',
        deactivatesPlates: ['p_c10_alarm'],
        targetGroupId: 'grp_c10_zonea',
        moveOffset: { x: 0, y: 1, z: 0 },
      },
      {
        id: 'p_c10_west',
        nodeId: 'c10s2_r_west',
        mode: 'latch',
        targetGroupId: 'grp_c10_zonea',
        moveOffset: { x: 0, y: 1, z: 0 },
      },
    ],
    seams: [s2_seam],
    props: [
      { id: 'corvo_ch10', type: 'corvo_figure', loreId: 'corvo_ch10', x: 5.5, y: -1.5, z: 3.0, label: '匿名送來的 A 區設防藍圖' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c10s2_goal', requiredActors: ['sofia'] },
    hintText: '阿方索駐守東閘解除警報並供電，盧辰啟動西閘磁鎖，再由盧曉晴轉至 225° 經人工島海閘踏入對撞環隧道。',
    automatedSolution: [
      { action: 'move', nodeId: 'c10s2_a_east' },
      { action: 'switch', actorId: 'ryan' },
      { action: 'move', nodeId: 'c10s2_r_west' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotate', deg: 225 },
      { action: 'move', nodeId: 'c10s2_goal' },
    ],
  };

  // Stage 3: HZMB Undersea Collider Ring & "日寺" Seal (Collider Rotator + Trio Convergence)
  const s3_pivot = [2, 0, 0];
  const s3_bA = [4, 0, 0];
  const s3_bB = computeAlignedBlockPos(s3_bA, [1, 0, 0], 135, 2); // [7, 2, -2]
  const s3_seam = buildIllusionSeam({
    id: 'c10s3_seam_ring',
    nodeA: 'c10s3_e1',
    nodeB: 'c10s3_e2',
    posA: s3_bA,
    posB: s3_bB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredRotators: { turret_c10_ring: [0, 2] },
  });

  const s3_sA = [1, 0, 3];
  const s3_sBAligned = computeAlignedBlockPos(s3_sA, [1, 0, 0], 135, 2); // [4, 2, 1]
  const s3_sB = shiftPosY(s3_sBAligned, -2); // [4, 0, 1]
  const s3_seamS = buildIllusionSeam({
    id: 'c10s3_seam_sofia',
    nodeA: 'c10s3_s_dock',
    nodeB: 'c10s3_s_bridge',
    posA: s3_sA,
    posB: s3_sB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredPlates: ['p_c10_core_open'],
  });
  const s3_afA = [1, 0, -3];
  const s3_afBAligned = computeAlignedBlockPos(s3_afA, [1, 0, 0], 135, 2); // [4, 2, -5]
  const s3_afB = shiftPosY(s3_afBAligned, -2); // [4, 0, -5]
  const s3_seamA = buildIllusionSeam({
    id: 'c10s3_seam_afonso',
    nodeA: 'c10s3_a_dock',
    nodeB: 'c10s3_a_bridge',
    posA: s3_afA,
    posB: s3_afB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredPlates: ['p_c10_core_open'],
  });

  const stage3 = {
    stageId: 'ch10_s3',
    title: '港珠澳海底對撞環「日寺」密印核心',
    subtitle: '2026・澳門口岸人工島地下加速器',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 4, y: 0.45, z: -0.5 },
    baseHalfHeight: 7.57,
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c10s3_r_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c10s3_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c10s3_a_start' },
    ],
    defaultActorId: 'ryan',
    nodes: [
      makeNode('c10s3_r_start', [0, 0, 0], 'cyber'),
      makeNode('c10s3_arm_w', [1, 0, 0], 'cyber', { rotatorId: 'turret_c10_ring' }),
      makeNode('c10s3_hub', s3_pivot, 'ochre', { rotatorId: 'turret_c10_ring' }),
      makeNode('c10s3_arm_e', [3, 0, 0], 'cyber', { rotatorId: 'turret_c10_ring' }),
      makeNode('c10s3_occ', [3, 2, 3], 'cyber', { rotatorId: 'turret_c10_ring', pillarHeight: 2 }),
      makeNode('c10s3_occ2', [1, 2, -3], 'cyber', { rotatorId: 'turret_c10_ring', pillarHeight: 2 }),
      makeNode('c10s3_e1', s3_bA, 'cyber'),
      makeNode('c10s3_e2', s3_bB, 'cyber'),
      makeNode('c10s3_latch', [7, 2, -3], 'ochre', { plateId: 'p_c10_core_open' }),
      makeNode('c10s3_goal_r', [8, 2, -2], 'hexagram_lotus_altar', { isGoal: true, isFinalGoal: true }),
      makeNode('c10s3_s_start', [0, 0, 3], 'bluestone'),
      makeNode('c10s3_s_dock', s3_sA, 'bluestone'),
      makeNode('c10s3_s_bridge', s3_sB, 'cyber', { groupId: 'grp_c10_core_gates' }),
      makeNode('c10s3_goal_s', [5, 0, 1], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c10_core_gates',
      }),
      makeNode('c10s3_a_start', [0, 0, -3], 'granite'),
      makeNode('c10s3_a_dock', s3_afA, 'granite'),
      makeNode('c10s3_a_bridge', s3_afB, 'cyber', { groupId: 'grp_c10_core_gates' }),
      makeNode('c10s3_goal_a', [5, 0, -5], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c10_core_gates',
      }),
    ],
    edges: [
      ...makeChain(['c10s3_arm_w', 'c10s3_hub', 'c10s3_arm_e']),
      ...makeChain(['c10s3_e2', 'c10s3_latch']),
      ...makeChain(['c10s3_e2', 'c10s3_goal_r']),
      ...makeChain(['c10s3_s_start', 'c10s3_s_dock']),
      ...makeChain(['c10s3_s_bridge', 'c10s3_goal_s']),
      ...makeChain(['c10s3_a_start', 'c10s3_a_dock']),
      ...makeChain(['c10s3_a_bridge', 'c10s3_goal_a']),
    ],
    plates: [
      {
        id: 'p_c10_core_open',
        nodeId: 'c10s3_latch',
        mode: 'latch',
        targetGroupId: 'grp_c10_core_gates',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c10_ring',
        pivot: s3_pivot,
        axis: 'y',
        nodeIds: ['c10s3_arm_w', 'c10s3_hub', 'c10s3_arm_e', 'c10s3_occ', 'c10s3_occ2'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c10s3_r_start', to: 'c10s3_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c10s3_arm_e', to: 'c10s3_e1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c10s3_r_start', to: 'c10s3_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c10s3_arm_w', to: 'c10s3_e1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s3_seam, s3_seamS, s3_seamA],
    props: [
      { id: 'signature_ch10', type: 'collider_ring', loreId: 'signature_ch10', x: 9.2, y: 2.5, z: -2.0, label: '港珠澳人工島「日寺」密印終端環' },
    ],
    winCondition: {
      type: 'all_on_goals',
      goals: { ryan: 'c10s3_goal_r', sofia: 'c10s3_goal_s', afonso: 'c10s3_goal_a' },
    },
    hintText: '盧辰旋回對撞環轉盤（-1 或 +1 格）並切至 135° 跨過主環按下核心開門印，三代齊步踏入「日寺」核心壇！',
    automatedSolution: [
      { action: 'rotateTurret', rotatorId: 'turret_c10_ring', deltaSteps: -1 },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c10s3_latch' },
      { action: 'move', nodeId: 'c10s3_goal_r' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'move', nodeId: 'c10s3_goal_s' },
      { action: 'switch', actorId: 'afonso' },
      { action: 'move', nodeId: 'c10s3_goal_a' },
    ],
  };

  return {
    id: 10,
    era: '2026',
    themeKey: '2026_dusk',
    title: '人工島暗湧與金光大道大劫案',
    subtitle: '2026・三代合流・內港與港珠澳海底對撞環',
    hintText: '於內港由梁氏後人梁九承接醉龍木雕奇蹟，接續攻破 A 區雙閘與人工島海底對撞環。',
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c10s1_a_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c10s1_s_start' },
      { id: 'ryan', name: '盧辰', startNodeId: 'c10s1_r_start' },
    ],
    defaultActorId: 'afonso',
    stages: [stage1, stage2, stage3],
  };
}

/* ============================================================================
 * Chapter 11 (2077・金色光學結界與天穹樞紐港): 2 Stages (Trio)
 * ========================================================================== */
function makeChapter11() {
  // Stage 1: Inner Golden Heritage Dome vs Outer Cyber Maglev Bridge (Rotator + 315° Dome Boundary)
  const s1_pivot = [2, 0, 0];
  const s1_bA = [4, 0, 0];
  const s1_bBAligned = computeAlignedBlockPos(s1_bA, [0, 0, 1], 315, 2); // [2, 2, 3]
  const s1_bB = shiftPosY(s1_bBAligned, -2); // [2, 0, 3]
  const s1_seam = buildIllusionSeam({
    id: 'c11s1_seam_dome',
    nodeA: 'c11s1_b1',
    nodeB: 'c11s1_b2',
    posA: s1_bA,
    posB: s1_bB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
    requiredRotators: { turret_c11_gate: [0, 2] },
    requiredPlates: ['p_c11_maglev'],
  });

  const stage1 = {
    stageId: 'ch11_s1',
    title: '金色光學禁飛結界內外雙世天橋',
    subtitle: '2077・結界內古老葡磚與外環賽博磁軌交界',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.5, y: 0.45, z: 1.5 },
    baseHalfHeight: 7.22,
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c11s1_r_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c11s1_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c11s1_a_start' },
    ],
    defaultActorId: 'ryan',
    nodes: [
      makeNode('c11s1_r_start', [0, 0, -2], 'cyber'),
      makeNode('c11s1_r_plate', [1, 0, -2], 'ochre', { plateId: 'p_c11_maglev' }),
      makeNode('c11s1_a_start', [-1, 0, 0], 'granite'),
      makeNode('c11s1_s_start', [0, 0, 0], 'bluestone'),
      makeNode('c11s1_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c11_gate' }),
      makeNode('c11s1_hub', s1_pivot, 'stone', { rotatorId: 'turret_c11_gate' }),
      makeNode('c11s1_arm_e', [3, 0, 0], 'cyber', { rotatorId: 'turret_c11_gate' }),
      makeNode('c11s1_b1', s1_bA, 'cyber'),
      makeNode('c11s1_b2', s1_bB, 'cyber', { groupId: 'grp_c11_maglev' }),
      makeNode('c11s1_goal', [2, 0, 4], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c11_maglev',
      }),
    ],
    edges: [
      ...makeChain(['c11s1_r_start', 'c11s1_r_plate']),
      ...makeChain(['c11s1_a_start', 'c11s1_s_start']),
      ...makeChain(['c11s1_arm_w', 'c11s1_hub', 'c11s1_arm_e']),
      ...makeChain(['c11s1_b2', 'c11s1_goal']),
    ],
    plates: [
      {
        id: 'p_c11_maglev',
        nodeId: 'c11s1_r_plate',
        mode: 'latch',
        targetGroupId: 'grp_c11_maglev',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c11_gate',
        pivot: s1_pivot,
        axis: 'y',
        nodeIds: ['c11s1_arm_w', 'c11s1_hub', 'c11s1_arm_e'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c11s1_s_start', to: 'c11s1_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c11s1_arm_e', to: 'c11s1_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c11s1_s_start', to: 'c11s1_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c11s1_arm_w', to: 'c11s1_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s1_seam],
    props: [
      { id: 'c11_dome', type: 'golden_barrier_dome', x: -1.5, y: 0.5, z: 1.5, label: '2077 金色光學禁飛結界穹頂' },
      { id: 'c11_ruin', type: 'st_pauls_ruin_wall', x: -1.5, y: 0.5, z: -1.3, label: '結界保護下完好如初的古街牌坊' },
      { id: 'couple_2077', type: 'couple_2077', loreId: 'couple_2077', x: 3.1, y: 2.5, z: 3.9, label: '2077 結界外鈦金護欄情侶（K＆N）' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c11s1_goal', requiredActors: ['sofia'] },
    hintText: '盧辰接駁外環磁軌開關，再轉動結界閘橋轉盤（-1 格）並切換盧曉晴轉至 315° 跨出金色結界進入天穹樞紐港。',
    automatedSolution: [
      { action: 'move', nodeId: 'c11s1_r_plate' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotateTurret', rotatorId: 'turret_c11_gate', deltaSteps: -1 },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c11s1_goal' },
    ],
  };

  // Stage 2: Sky Nexus Twin-Rotator Finale (2 Rotators + Decoy Occluder + BlockedByPlates + all_on_goals)
  const s2_pivotN = [2, 0, 0];
  const s2_pivotS = [4, 0, -2];
  const s2_bA = [4, 0, 0];
  const s2_bB = computeAlignedBlockPos(s2_bA, [1, 0, 0], 225, -2); // [7, -2, 2]
  const s2_seam = buildIllusionSeam({
    id: 'c11s2_seam_nexus',
    nodeA: 'c11s2_b1',
    nodeB: 'c11s2_b2',
    posA: s2_bA,
    posB: s2_bB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 225,
    requiredRotators: { turret_c11_north: [0, 2], turret_c11_south: 0 },
    blockedByPlates: ['p_c11_jammer'],
  });
  // Place occluder pylon on turret_c11_south that blocks 225° sightline at initQ=1!
  const s2_occAtQ1 = computeSightlineOccluderPos(s2_bA, s2_bB, [1, 0, 0], 225, -2, 2.25);
  const s2_occBase = basePosForRotatedSpot(s2_occAtQ1, s2_pivotS, 1);

  const s2_rA = [1, 0, 3];
  const s2_rBAligned = computeAlignedBlockPos(s2_rA, [1, 0, 0], 225, -2); // [4, -2, 5]
  const s2_rB = shiftPosY(s2_rBAligned, -2); // [4, -4, 5]
  const s2_seamR = buildIllusionSeam({
    id: 'c11s2_seam_ryan',
    nodeA: 'c11s2_r_clear',
    nodeB: 'c11s2_r_bridge',
    posA: s2_rA,
    posB: s2_rB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 225,
    requiredPlates: ['p_c11_sky_open'],
  });
  const s2_sA = [1, 0, -5];
  const s2_sBAligned = computeAlignedBlockPos(s2_sA, [1, 0, 0], 225, -2); // [4, -2, -3]
  const s2_sB = shiftPosY(s2_sBAligned, -2); // [4, -4, -3]
  const s2_seamS = buildIllusionSeam({
    id: 'c11s2_seam_sofia',
    nodeA: 'c11s2_s_dock',
    nodeB: 'c11s2_s_bridge',
    posA: s2_sA,
    posB: s2_sB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 225,
    requiredPlates: ['p_c11_sky_open'],
  });

  const stage2 = {
    stageId: 'ch11_s2',
    title: '天穹樞紐港主軸與烏鴉最後警告',
    subtitle: '2077・雙重力轉盤協作攻入主樞紐',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 4, y: -1.6, z: 0.5 },
    baseHalfHeight: 7.9,
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c11s2_r_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c11s2_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c11s2_a_start' },
    ],
    defaultActorId: 'ryan',
    nodes: [
      makeNode('c11s2_r_start', [0, 0, 3], 'cyber'),
      makeNode('c11s2_r_clear', s2_rA, 'ochre', { plateId: 'p_c11_clear' }),
      makeNode('c11s2_r_bridge', s2_rB, 'cyber', { groupId: 'grp_c11_sky_gates' }),
      makeNode('c11s2_goal_r', [5, -4, 5], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c11_sky_gates',
      }),
      makeNode('c11s2_s_start', [0, 0, -5], 'bluestone'),
      makeNode('c11s2_s_dock', s2_sA, 'bluestone'),
      makeNode('c11s2_s_bridge', s2_sB, 'cyber', { groupId: 'grp_c11_sky_gates' }),
      makeNode('c11s2_goal_s', [5, -4, -3], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c11_sky_gates',
      }),
      makeNode('c11s2_a_start', [0, 0, 0], 'granite'),
      makeNode('c11s2_n_arm_w', [1, 0, 0], 'cyber', { rotatorId: 'turret_c11_north' }),
      makeNode('c11s2_n_hub', s2_pivotN, 'ochre', { rotatorId: 'turret_c11_north' }),
      makeNode('c11s2_n_arm_e', [3, 0, 0], 'cyber', { rotatorId: 'turret_c11_north' }),
      // South pylon rotor (separate independent rotator whose occ pylon shields 225° at q=1!)
      makeNode('c11s2_s_hub', s2_pivotS, 'cyber', { rotatorId: 'turret_c11_south' }),
      makeNode('c11s2_occ', s2_occBase, 'cyber', { rotatorId: 'turret_c11_south', pillarHeight: 2 }),
      makeNode('c11s2_b1', s2_bA, 'cyber'),
      makeNode('c11s2_b2', s2_bB, 'cyber', { groupId: 'grp_c11_jammer_target' }),
      makeNode('c11s2_latch', [7, -2, 1], 'ochre', {
        plateId: 'p_c11_sky_open',
        groupId: 'grp_c11_jammer_target',
      }),
      makeNode('c11s2_goal_a', [8, -2, 2], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c11_jammer_target',
      }),
    ],
    edges: [
      ...makeChain(['c11s2_r_start', 'c11s2_r_clear']),
      ...makeChain(['c11s2_r_bridge', 'c11s2_goal_r']),
      ...makeChain(['c11s2_s_start', 'c11s2_s_dock']),
      ...makeChain(['c11s2_s_bridge', 'c11s2_goal_s']),
      ...makeChain(['c11s2_n_arm_w', 'c11s2_n_hub', 'c11s2_n_arm_e']),
      ...makeChain(['c11s2_b2', 'c11s2_latch']),
      ...makeChain(['c11s2_b2', 'c11s2_goal_a']),
    ],
    plates: [
      {
        id: 'p_c11_jammer',
        nodeId: 'c11s2_r_start',
        mode: 'seal',
        initialActive: true,
        targetGroupId: 'grp_c11_jammer_target',
        moveOffset: { x: 0, y: -1, z: 0 },
      },
      { id: 'p_c11_clear', nodeId: 'c11s2_r_clear', mode: 'latch', deactivatesPlates: ['p_c11_jammer'] },
      {
        id: 'p_c11_sky_open',
        nodeId: 'c11s2_latch',
        mode: 'latch',
        targetGroupId: 'grp_c11_sky_gates',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c11_north',
        pivot: s2_pivotN,
        axis: 'y',
        nodeIds: ['c11s2_n_arm_w', 'c11s2_n_hub', 'c11s2_n_arm_e'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c11s2_a_start', to: 'c11s2_n_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c11s2_n_arm_e', to: 'c11s2_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c11s2_a_start', to: 'c11s2_n_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c11s2_n_arm_w', to: 'c11s2_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
      {
        id: 'turret_c11_south',
        pivot: s2_pivotS,
        axis: 'y',
        nodeIds: ['c11s2_s_hub', 'c11s2_occ'],
        initialQuarterTurns: 1,
        maxTurns: 4,
      },
    ],
    seams: [s2_seam, s2_seamR, s2_seamS],
    props: [
      { id: 'corvo_ch11', type: 'corvo_figure', loreId: 'corvo_ch11', x: 8.8, y: -1.5, z: 3.2, label: '天穹走廊盡頭的烏鴉本體' },
    ],
    winCondition: {
      type: 'all_on_goals',
      goals: { ryan: 'c11s2_goal_r', sofia: 'c11s2_goal_s', afonso: 'c11s2_goal_a' },
    },
    hintText: '盧辰先切斷電磁干擾栓，盧曉晴轉開南側遮障轉盤（-1 格），阿方索對準北橋（-1 或 +1 格）並轉至 225° 開啟天穹傳送鎖，三人齊聚主軸壇！',
    automatedSolution: [
      { action: 'move', nodeId: 'c11s2_r_clear' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotateTurret', rotatorId: 'turret_c11_south', deltaSteps: -1 },
      { action: 'switch', actorId: 'afonso' },
      { action: 'rotateTurret', rotatorId: 'turret_c11_north', deltaSteps: -1 },
      { action: 'rotate', deg: 225 },
      { action: 'move', nodeId: 'c11s2_latch' },
      { action: 'move', nodeId: 'c11s2_goal_a' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'move', nodeId: 'c11s2_goal_s' },
      { action: 'switch', actorId: 'ryan' },
      { action: 'move', nodeId: 'c11s2_goal_r' },
    ],
  };

  return {
    id: 11,
    era: '2077',
    themeKey: '2077_cyber',
    title: '2077：歷史城區最後結界與天穹樞紐港',
    subtitle: '2077・金色光學禁飛結界內外雙世',
    hintText: '突破內外雙世磁浮結界，雙轉盤聯動直搗二〇七七天穹樞紐核心。',
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c11s1_r_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c11s1_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c11s1_a_start' },
    ],
    defaultActorId: 'ryan',
    stages: [stage1, stage2],
  };
}

/* ============================================================================
 * Chapter 12 (三紀合流・終局 17:53): 3 Stages (Trio)
 * ========================================================================== */
function makeChapter12() {
  // Stage 1: Tri-Era Floating Islands Convergence (135° & 225° & Rotator Bridge -> stage_portal_arch all_on_goals)
  const s1_pivot = [2, 0, 0];
  const s1_aA = [4, 0, 0];
  const s1_aB = computeAlignedBlockPos(s1_aA, [1, 0, 0], 135, 2); // [7, 2, -2]
  const s1_seamA = buildIllusionSeam({
    id: 'c12s1_seam_1622',
    nodeA: 'c12s1_e1',
    nodeB: 'c12s1_e2',
    posA: s1_aA,
    posB: s1_aB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredRotators: { turret_c12_nexus: [0, 2] },
  });
  const s1_rA = [0, 0, -2];
  const s1_rBAligned = computeAlignedBlockPos(s1_rA, [1, 0, 0], 225, -2); // [3, -2, 0]
  const s1_rB = shiftPosY(s1_rBAligned, -2); // [3, -4, 0]
  const s1_seamR = buildIllusionSeam({
    id: 'c12s1_seam_2077',
    nodeA: 'c12s1_r2',
    nodeB: 'c12s1_r3',
    posA: s1_rA,
    posB: s1_rB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 225,
    requiredPlates: ['p_c12_tri_bridge', 'p_c12_2026_seal'],
  });

  const s1_sA = [1, 0, 3];
  const s1_sBAligned = computeAlignedBlockPos(s1_sA, [1, 0, 0], 135, 2); // [4, 2, 1]
  const s1_sB = shiftPosY(s1_sBAligned, -2); // [4, 0, 1]
  const s1_seamS = buildIllusionSeam({
    id: 'c12s1_seam_2026',
    nodeA: 'c12s1_s_dock',
    nodeB: 'c12s1_s_bridge',
    posA: s1_sA,
    posB: s1_sB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredPlates: ['p_c12_tri_bridge'],
  });

  const stage1 = {
    stageId: 'ch12_s1',
    title: '三紀交匯・媽閣暖沙×培正拱廊×天穹霓虹',
    subtitle: 'convergence・三時代浮島於高空首次並立',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 3.5, y: -0.45, z: -0.5 },
    baseHalfHeight: 7.7,
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c12s1_a_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c12s1_s_start' },
      { id: 'ryan', name: '盧辰', startNodeId: 'c12s1_r1' },
    ],
    defaultActorId: 'afonso',
    nodes: [
      makeNode('c12s1_a_start', [0, 0, 0], 'sand'),
      makeNode('c12s1_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c12_nexus' }),
      makeNode('c12s1_hub', s1_pivot, 'stone', { rotatorId: 'turret_c12_nexus' }),
      makeNode('c12s1_arm_e', [3, 0, 0], 'mint', { rotatorId: 'turret_c12_nexus' }),
      makeNode('c12s1_occ', [3, 1, 3], 'stone', { rotatorId: 'turret_c12_nexus', pillarHeight: 2 }),
      makeNode('c12s1_occ2', [1, 1, -3], 'stone', { rotatorId: 'turret_c12_nexus', pillarHeight: 2 }),
      makeNode('c12s1_e1', s1_aA, 'mint'),
      makeNode('c12s1_e2', s1_aB, 'mint'),
      makeNode('c12s1_latch', [7, 2, -3], 'ochre', { plateId: 'p_c12_tri_bridge' }),
      makeNode('c12s1_s_start', [0, 0, 3], 'bluestone'),
      makeNode('c12s1_s_dock', s1_sA, 'bluestone'),
      makeNode('c12s1_s_bridge', s1_sB, 'mint', { groupId: 'grp_c12_s' }),
      makeNode('c12s1_s_plate', [5, 0, 1], 'ochre', {
        plateId: 'p_c12_2026_seal',
        groupId: 'grp_c12_s',
      }),
      makeNode('c12s1_r1', [-1, 0, -2], 'cyber'),
      makeNode('c12s1_r2', s1_rA, 'cyber'),
      makeNode('c12s1_r3', s1_rB, 'cyber', { groupId: 'grp_c12_r' }),
      makeNode('c12s1_goal_r', [4, -4, 0], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c12_r',
      }),
    ],
    edges: [
      ...makeChain(['c12s1_arm_w', 'c12s1_hub', 'c12s1_arm_e']),
      ...makeChain(['c12s1_e2', 'c12s1_latch']),
      ...makeChain(['c12s1_s_start', 'c12s1_s_dock']),
      ...makeChain(['c12s1_s_bridge', 'c12s1_s_plate']),
      ...makeChain(['c12s1_r1', 'c12s1_r2']),
      ...makeChain(['c12s1_r3', 'c12s1_goal_r']),
    ],
    plates: [
      {
        id: 'p_c12_tri_bridge',
        nodeId: 'c12s1_latch',
        mode: 'latch',
        targetGroupId: 'grp_c12_s',
        moveOffset: { x: 0, y: 2, z: 0 },
        extraMoves: [{ targetGroupId: 'grp_c12_r', moveOffset: { x: 0, y: 1, z: 0 } }],
      },
      {
        id: 'p_c12_2026_seal',
        nodeId: 'c12s1_s_plate',
        mode: 'latch',
        targetGroupId: 'grp_c12_r',
        moveOffset: { x: 0, y: 1, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c12_nexus',
        pivot: s1_pivot,
        axis: 'y',
        nodeIds: ['c12s1_arm_w', 'c12s1_hub', 'c12s1_arm_e', 'c12s1_occ', 'c12s1_occ2'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c12s1_a_start', to: 'c12s1_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c12s1_arm_e', to: 'c12s1_e1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c12s1_a_start', to: 'c12s1_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c12s1_arm_w', to: 'c12s1_e1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s1_seamA, s1_seamR, s1_seamS],
    props: [
      { id: 'c12_ship', type: 'ama_ship_rock', x: -1, y: 0.4, z: 1.1, label: '一六二二媽閣洋船石錨點' },
      { id: 'c12_arcade', type: 'puiching_arcade', x: 7.4, y: 2.2, z: -5.2, label: '二〇二六培正薄荷綠拱廊錨點' },
      { id: 'c12_dome', type: 'golden_barrier_dome', x: 5.2, y: -1.5, z: 0, label: '二〇七七金色結界殘環' },
      { id: 'couple_ch12_cameo', type: 'couple_2077', loreId: 'couple_ch12_cameo', x: -1.2, y: 0.5, z: 3.0, label: '跨越四百五十年的三代情侶重影' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c12s1_goal_r', requiredActors: ['ryan'] },
    hintText: '阿方索先將三紀接力橋旋正（-1 格）並切至 135° 開啟共鳴鎖，盧曉晴隨即踩上 2026 校門鎖印，最後由盧辰轉至 225° 踏入中央交匯門！',
    automatedSolution: [
      { action: 'rotateTurret', rotatorId: 'turret_c12_nexus', deltaSteps: -1 },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c12s1_latch' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'move', nodeId: 'c12s1_s_plate' },
      { action: 'switch', actorId: 'ryan' },
      { action: 'rotate', deg: 225 },
      { action: 'move', nodeId: 'c12s1_goal_r' },
    ],
  };

  // Stage 2: Twin Aspect Labyrinth ("日相" & "寺相" Opposing Rotators + Dual Occluders + Paradox Seal)
  const s2_pivotRi = [2, 0, 0];
  const s2_pivotSi = [3, 0, 3];
  const s2_bA = [4, 0, 0];
  const s2_bB = computeAlignedBlockPos(s2_bA, [0, 0, 1], 315, 2); // [2, 2, 3]
  const s2_seam = buildIllusionSeam({
    id: 'c12s2_seam_labyrinth',
    nodeA: 'c12s2_b1',
    nodeB: 'c12s2_b2',
    posA: s2_bA,
    posB: s2_bB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
    requiredRotators: { turret_c12_ri: [0, 2], turret_c12_si: 0 },
    blockedByPlates: ['p_c12_paradox'],
  });
  const s2_occAtQ2 = computeSightlineOccluderPos(s2_bA, s2_bB, [0, 0, 1], 315, 2, 2.25);
  const s2_occBase = basePosForRotatedSpot(s2_occAtQ2, s2_pivotSi, 2);

  const stage2 = {
    stageId: 'ch12_s2',
    title: '時間大崩壞・日相與寺相雙生旋轉迷宮',
    subtitle: 'convergence・破除雙面鐘擺封鎖之迷陣',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 2.5, y: 0.45, z: 1.5 },
    baseHalfHeight: 7.57,
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c12s2_r_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c12s2_s_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c12s2_a_start' },
    ],
    defaultActorId: 'ryan',
    nodes: [
      makeNode('c12s2_r_start', [0, 0, -2], 'cyber'),
      makeNode('c12s2_r_clear', [1, 0, -2], 'ochre', { plateId: 'p_c12_unseal' }),
      makeNode('c12s2_a_start', [-1, 0, 2], 'granite'),
      makeNode('c12s2_s_start', [0, 0, 0], 'bluestone'),
      makeNode('c12s2_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c12_ri' }),
      makeNode('c12s2_hub_ri', s2_pivotRi, 'stone', { rotatorId: 'turret_c12_ri' }),
      makeNode('c12s2_arm_e', [3, 0, 0], 'ochre', { rotatorId: 'turret_c12_ri' }),
      makeNode('c12s2_hub_si', s2_pivotSi, 'cyber', { rotatorId: 'turret_c12_si' }),
      makeNode('c12s2_occ_si', s2_occBase, 'cyber', { rotatorId: 'turret_c12_si', pillarHeight: 2 }),
      makeNode('c12s2_b1', s2_bA, 'stone'),
      makeNode('c12s2_b2', s2_bB, 'mint', { groupId: 'grp_c12_labyrinth' }),
      makeNode('c12s2_goal', [2, 2, 4], 'stage_portal_arch', {
        isGoal: true,
        isFinalGoal: false,
        groupId: 'grp_c12_labyrinth',
      }),
    ],
    edges: [
      ...makeChain(['c12s2_r_start', 'c12s2_r_clear']),
      ...makeChain(['c12s2_arm_w', 'c12s2_hub_ri', 'c12s2_arm_e']),
      ...makeChain(['c12s2_b2', 'c12s2_goal']),
    ],
    plates: [
      {
        id: 'p_c12_paradox',
        nodeId: 'c12s2_r_start',
        mode: 'seal',
        initialActive: true,
        targetGroupId: 'grp_c12_labyrinth',
        moveOffset: { x: 0, y: -1, z: 0 },
      },
      { id: 'p_c12_unseal', nodeId: 'c12s2_r_clear', mode: 'latch', deactivatesPlates: ['p_c12_paradox'] },
    ],
    rotators: [
      {
        id: 'turret_c12_ri',
        pivot: s2_pivotRi,
        axis: 'y',
        nodeIds: ['c12s2_arm_w', 'c12s2_hub_ri', 'c12s2_arm_e'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        linkedEdges: [
          { from: 'c12s2_s_start', to: 'c12s2_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c12s2_arm_e', to: 'c12s2_b1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c12s2_s_start', to: 'c12s2_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c12s2_arm_w', to: 'c12s2_b1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
      {
        id: 'turret_c12_si',
        pivot: s2_pivotSi,
        axis: 'y',
        nodeIds: ['c12s2_hub_si', 'c12s2_occ_si'],
        initialQuarterTurns: 2,
        maxTurns: 4,
      },
    ],
    seams: [s2_seam],
    props: [
      { id: 'corvo_ch12', type: 'corvo_figure', loreId: 'corvo_ch12', x: -1.2, y: 0.5, z: 3.2, label: '五次違令倒戈護城的烏鴉' },
    ],
    winCondition: { type: 'reach', goalNodeId: 'c12s2_goal', requiredActors: ['sofia'] },
    hintText: '盧辰踩破悖論封鎖印，阿方索旋正「寺相」遮障（2 格），盧曉晴旋正「日相」主橋（-1 格）並切至 315° 直闖六角星總壇前階！',
    automatedSolution: [
      { action: 'move', nodeId: 'c12s2_r_clear' },
      { action: 'switch', actorId: 'afonso' },
      { action: 'rotateTurret', rotatorId: 'turret_c12_si', deltaSteps: 2 },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotateTurret', rotatorId: 'turret_c12_ri', deltaSteps: -1 },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c12s2_goal' },
    ],
  };

  // Stage 3: Final 17:53 Pui Ching Hexagram Lotus Altar (Grand Trio Finale all_on_goals)
  const s3_pivot = [2, 0, 0];
  const s3_aA = [4, 0, 0];
  const s3_aB = computeAlignedBlockPos(s3_aA, [1, 0, 0], 135, 2); // [7, 2, -2]
  const s3_seamEast = buildIllusionSeam({
    id: 'c12s3_seam_hex_e',
    nodeA: 'c12s3_e1',
    nodeB: 'c12s3_e2',
    posA: s3_aA,
    posB: s3_aB,
    stepDir: [1, 0, 0],
    targetAzimuthDeg: 135,
    requiredRotators: { turret_c12_hexagram: [0, 2] },
  });
  const s3_sA = [2, 0, 3];
  const s3_sBAligned = computeAlignedBlockPos(s3_sA, [0, 0, 1], 315, 2); // [0, 2, 6]
  const s3_sB = shiftPosY(s3_sBAligned, -2); // [0, 0, 6]
  const s3_seamSouth = buildIllusionSeam({
    id: 'c12s3_seam_hex_s',
    nodeA: 'c12s3_s1',
    nodeB: 'c12s3_s2',
    posA: s3_sA,
    posB: s3_sB,
    stepDir: [0, 0, 1],
    targetAzimuthDeg: 315,
    requiredPlates: ['p_c12_altar_harmonic'],
  });
  const s3_rA = [1, 0, -3];
  const s3_rBAligned = computeAlignedBlockPos(s3_rA, [0, 0, -1], 315, -2); // [3, -2, -6]
  const s3_rB = shiftPosY(s3_rBAligned, -2); // [3, -4, -6]
  const s3_seamRyan = buildIllusionSeam({
    id: 'c12s3_seam_hex_r',
    nodeA: 'c12s3_r_dock',
    nodeB: 'c12s3_r_bridge',
    posA: s3_rA,
    posB: s3_rB,
    stepDir: [0, 0, -1],
    targetAzimuthDeg: 315,
    requiredPlates: ['p_c12_finale_gate'],
  });

  const stage3 = {
    stageId: 'ch12_s3',
    title: '終局：17:53 培正六角星蓮花總壇・盧日寺對決',
    subtitle: 'convergence・五重奇蹟交匯於六角星陣心',
    initialAzimuthDeg: 45,
    cameraTarget: { x: 3.5, y: -0.4, z: 0.0 },
    baseHalfHeight: 8.2,
    actors: [
      { id: 'ryan', name: '盧辰', startNodeId: 'c12s3_r_start' },
      { id: 'afonso', name: '阿方索', startNodeId: 'c12s3_a_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c12s3_s_start' },
    ],
    defaultActorId: 'ryan',
    nodes: [
      makeNode('c12s3_r_start', [0, 0, -2], 'cyber'),
      makeNode('c12s3_r_pad', [1, 0, -2], 'ochre', { plateId: 'p_c12_altar_harmonic' }),
      makeNode('c12s3_r_dock', s3_rA, 'cyber'),
      makeNode('c12s3_r_bridge', s3_rB, 'cyber', { groupId: 'grp_c12_ryan_gate' }),
      makeNode('c12s3_goal_r', [3, -4, -7], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c12_ryan_gate',
      }),
      makeNode('c12s3_a_start', [0, 0, 0], 'sand'),
      makeNode('c12s3_arm_w', [1, 0, 0], 'ochre', { rotatorId: 'turret_c12_hexagram' }),
      makeNode('c12s3_hub', s3_pivot, 'mint', { rotatorId: 'turret_c12_hexagram' }),
      makeNode('c12s3_arm_e', [3, 0, 0], 'ochre', { rotatorId: 'turret_c12_hexagram' }),
      makeNode('c12s3_occ', [4, 2, 4], 'mint', { rotatorId: 'turret_c12_hexagram', pillarHeight: 2 }),
      makeNode('c12s3_occ2', [0, 2, -4], 'mint', { rotatorId: 'turret_c12_hexagram', pillarHeight: 2 }),
      makeNode('c12s3_e1', s3_aA, 'mint'),
      makeNode('c12s3_e2', s3_aB, 'mint'),
      makeNode('c12s3_latch', [7, 2, -3], 'ochre', { plateId: 'p_c12_finale_gate' }),
      makeNode('c12s3_goal_a', [8, 2, -2], 'hexagram_lotus_altar', { isGoal: true, isFinalGoal: true }),
      makeNode('c12s3_s_start', [2, 0, 2], 'bluestone'),
      makeNode('c12s3_s1', s3_sA, 'bluestone'),
      makeNode('c12s3_s2', s3_sB, 'mint', { groupId: 'grp_c12_south_gate' }),
      makeNode('c12s3_goal_s', [0, 0, 7], 'hexagram_lotus_altar', {
        isGoal: true,
        isFinalGoal: true,
        groupId: 'grp_c12_south_gate',
      }),
    ],
    edges: [
      ...makeChain(['c12s3_r_start', 'c12s3_r_pad', 'c12s3_r_dock']),
      ...makeChain(['c12s3_r_bridge', 'c12s3_goal_r']),
      ...makeChain(['c12s3_arm_w', 'c12s3_hub', 'c12s3_arm_e']),
      ...makeChain(['c12s3_e2', 'c12s3_latch']),
      ...makeChain(['c12s3_e2', 'c12s3_goal_a']),
      ...makeChain(['c12s3_s_start', 'c12s3_s1']),
      ...makeChain(['c12s3_s2', 'c12s3_goal_s']),
    ],
    plates: [
      {
        id: 'p_c12_altar_harmonic',
        nodeId: 'c12s3_r_pad',
        mode: 'hold',
        targetGroupId: 'grp_c12_south_gate',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
      {
        id: 'p_c12_finale_gate',
        nodeId: 'c12s3_latch',
        mode: 'latch',
        targetGroupId: 'grp_c12_ryan_gate',
        moveOffset: { x: 0, y: 2, z: 0 },
      },
    ],
    rotators: [
      {
        id: 'turret_c12_hexagram',
        pivot: s3_pivot,
        axis: 'y',
        nodeIds: ['c12s3_arm_w', 'c12s3_hub', 'c12s3_arm_e', 'c12s3_occ', 'c12s3_occ2'],
        initialQuarterTurns: 1,
        maxTurns: 4,
        requiredPlates: ['p_c12_altar_harmonic'],
        linkedEdges: [
          { from: 'c12s3_a_start', to: 'c12s3_arm_w', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c12s3_arm_e', to: 'c12s3_e1', requiredQuarterTurns: 0, bidirectional: true },
          { from: 'c12s3_a_start', to: 'c12s3_arm_e', requiredQuarterTurns: 2, bidirectional: true },
          { from: 'c12s3_arm_w', to: 'c12s3_e1', requiredQuarterTurns: 2, bidirectional: true },
        ],
      },
    ],
    seams: [s3_seamEast, s3_seamSouth, s3_seamRyan],
    props: [
      { id: 'luzhisi_ch12', type: 'luzhisi_figure', loreId: 'luzhisi_ch12', x: 9.1, y: 2.5, z: -2.0, label: '培正六角星蓮花總壇・盧日寺' },
    ],
    winCondition: {
      type: 'all_on_goals',
      goals: { ryan: 'c12s3_goal_r', afonso: 'c12s3_goal_a', sofia: 'c12s3_goal_s' },
    },
    hintText: '盧辰踩定 5:53 諧振墊解鎖六角星轉盤，阿方索轉正古銅星橋（-1 或 +1 格）並切 135° 開啟總壇樞紐，盧曉晴同步切 315° 引領三代人共登終局蓮座！',
    automatedSolution: [
      { action: 'move', nodeId: 'c12s3_r_pad' },
      { action: 'switch', actorId: 'afonso' },
      { action: 'rotateTurret', rotatorId: 'turret_c12_hexagram', deltaSteps: -1 },
      { action: 'rotate', deg: 135 },
      { action: 'move', nodeId: 'c12s3_latch' },
      { action: 'move', nodeId: 'c12s3_goal_a' },
      { action: 'switch', actorId: 'sofia' },
      { action: 'rotate', deg: 315 },
      { action: 'move', nodeId: 'c12s3_goal_s' },
      { action: 'switch', actorId: 'ryan' },
      { action: 'move', nodeId: 'c12s3_goal_r' },
    ],
  };

  return {
    id: 12,
    era: 'convergence',
    themeKey: 'finale_convergence',
    title: '蓮島三紀：時間大崩壞的終局',
    subtitle: '1622 × 2026 × 2077・培正六角星蓮花祭壇 17:53',
    hintText: '跨越三紀並立浮島與日相寺相雙生迷宮，三代英雄於培正六角星蓮花總壇直面盧日寺，作出終極抉擇。',
    actors: [
      { id: 'afonso', name: '阿方索', startNodeId: 'c12s1_a_start' },
      { id: 'sofia', name: '盧曉晴', startNodeId: 'c12s1_s_start' },
      { id: 'ryan', name: '盧辰', startNodeId: 'c12s1_r1' },
    ],
    defaultActorId: 'afonso',
    stages: [stage1, stage2, stage3],
  };
}

export const CHAPTERS = normalizeChapterStages([
  makeChapter1(),
  makeChapter2(),
  makeChapter3(),
  makeChapter4(),
  makeChapter5(),
  makeChapter6(),
  makeChapter7(),
  makeChapter8(),
  makeChapter9(),
  makeChapter10(),
  makeChapter11(),
  makeChapter12(),
]);

export const ALL_STAGES = CHAPTERS.flatMap((chapter) => chapter.stages);

// Keep LEVELS pointing to the 12 chapters (each carrying .stages plus stage[0] playable mirror)
export const LEVELS = CHAPTERS;

export function getChapterById(id) {
  return CHAPTERS.find((ch) => ch.id === Number(id)) || null;
}

export function getStageLevelDef(chapterIdOrStageId, stageIndex = 0) {
  if (typeof chapterIdOrStageId === 'string' && !/^\d+$/.test(chapterIdOrStageId.trim())) {
    return ALL_STAGES.find((st) => st.stageId === chapterIdOrStageId) || null;
  }
  const ch = getChapterById(chapterIdOrStageId);
  if (!ch || !Array.isArray(ch.stages)) return null;
  const idx = Math.max(0, Math.min(ch.stages.length - 1, Number(stageIndex) || 0));
  return ch.stages[idx] || null;
}

export function getLevelById(id) {
  if (typeof id === 'string' && !/^\d+$/.test(id.trim())) {
    return ALL_STAGES.find((st) => st.stageId === id) || null;
  }
  return getChapterById(id);
}

export function getTotalStageCount() {
  return ALL_STAGES.length;
}

export default LEVELS;
