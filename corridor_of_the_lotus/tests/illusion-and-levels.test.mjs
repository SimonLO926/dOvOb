import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import * as THREE from '/Volumes/Elements/fun/鏡海豪情/node_modules/three/build/three.module.js';

import {
  EVENTS,
  SNAP_TOLERANCE_DEG,
  DEFAULT_SEAM_THRESHOLD_PX,
  createEventBus,
  normalizeQuarterTurns,
  rotatePointAroundPivotY
} from '../src/contracts.js';
import { OrthographicIllusionRig } from '../src/camera-illusion.js';
import { DynamicNavGraph, MultiCharacterController } from '../src/navgraph-controller.js';
import { buildLevelScene } from '../src/stylized-assets.js';
import {
  LEVELS,
  CHAPTERS,
  ALL_STAGES,
  getStageLevelDef
} from '../src/levels-12-chapters.js';
import {
  CHAPTER_STORIES,
  LORE_DIALOGUES,
  CODEX_ENTRIES,
  FINAL_ENDINGS
} from '../src/story-codex-data.js';
import {
  PORTRAIT_IDS,
  PORTRAIT_DATA_URIS,
  SPEAKER_BILINGUAL_META,
  resolveSpeakerId,
  getPortraitDataUri,
  getSpeakerMeta
} from '../src/portrait-atlas.js';
import { EndingCinematicsDirector } from '../src/ending-cinematics.js';

const LOTUS_DIR = path.resolve(import.meta.dirname, '..');
const WORKSPACE_ROOT = path.resolve(LOTUS_DIR, '..');

function computeGroupOffsetsFromPlates(level, activePlates) {
  const offsets = new Map();
  for (const plate of level.plates || []) {
    if (!activePlates.has(plate.id)) continue;
    const moves = [];
    if (plate.targetGroupId && plate.moveOffset) {
      moves.push({ targetGroupId: plate.targetGroupId, moveOffset: plate.moveOffset });
    }
    for (const extra of plate.extraMoves || []) {
      if (extra?.targetGroupId && extra?.moveOffset) moves.push(extra);
    }
    for (const move of moves) {
      const prev = offsets.get(move.targetGroupId) || { x: 0, y: 0, z: 0 };
      offsets.set(move.targetGroupId, {
        x: prev.x + (move.moveOffset.x || 0),
        y: prev.y + (move.moveOffset.y || 0),
        z: prev.z + (move.moveOffset.z || 0)
      });
    }
  }
  return offsets;
}

function createLevelOccluders(level) {
  const sceneObj = buildLevelScene(THREE, level);
  const nodeById = new Map();
  for (const node of level.nodes || []) {
    nodeById.set(node.id, node);
  }

  function syncOffsets(groupOffsets, activePlates = new Set(), rotatorStates = null) {
    sceneObj.update(0.05, 0, {
      activeSeamIds: [],
      activePlates,
      groupOffsets,
      ...(rotatorStates ? { rotatorStates, snapRotators: true } : {})
    });
    sceneObj.root.updateMatrixWorld(true);
  }

  function getDynamicWorldPos(nodeId, basePos) {
    const node = nodeById.get(nodeId);
    if (!node || !node.groupId) return basePos;
    const grp = sceneObj.platformGroups?.get(node.groupId);
    if (!grp) return basePos;
    return {
      x: basePos.x + grp.position.x,
      y: basePos.y + grp.position.y,
      z: basePos.z + grp.position.z
    };
  }

  function dispose() {
    sceneObj.dispose();
  }

  return {
    sceneObj,
    occluderMeshes: sceneObj.occluderMeshes,
    nodeById,
    syncOffsets,
    getDynamicWorldPos,
    dispose
  };
}

function createActorEntries(level) {
  const entries = {};
  for (const actor of level.actors || []) {
    entries[actor.id] = {
      group: new THREE.Group(),
      setMoving() {},
      setActive() {},
      update() {}
    };
  }
  return entries;
}

function sha256File(filePath) {
  const hash = createHash('sha256');
  hash.update(fs.readFileSync(filePath));
  return hash.digest('hex');
}

function findGoalNodeForStage(stage) {
  if (stage.winCondition?.type === 'reach') {
    return (stage.nodes || []).find((n) => n.id === stage.winCondition.goalNodeId) || null;
  }
  if (stage.winCondition?.type === 'all_on_goals') {
    const goalIds = Object.values(stage.winCondition.goals || {});
    return (stage.nodes || []).find((n) => goalIds.includes(n.id)) || null;
  }
  return null;
}

test('All 12 chapters & 29 stages exist with exact [2,2,2,2,2,2,3,3,3,3,2,3] counts and fail initial direct A*', () => {
  assert.equal(LEVELS.length, 12);
  assert.equal(CHAPTERS.length, 12);
  assert.deepEqual(LEVELS.map((l) => l.id), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  assert.equal(ALL_STAGES.length, 29, `Expected 29 total stages across 12 chapters, got ${ALL_STAGES.length}`);
  assert.deepEqual(
    CHAPTERS.map((ch) => ch.stages.length),
    [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 3],
    'Chapter stage counts must strictly match [2,2,2,2,2,2,3,3,3,3,2,3]'
  );

  let portalSubStageCount = 0;
  let lotusFinalStageCount = 0;

  for (const stage of ALL_STAGES) {
    assert.ok(stage.stageId, 'Each stage must define stageId');
    const goalNode = findGoalNodeForStage(stage);
    assert.ok(goalNode, `${stage.stageId} missing goal node`);
    if (stage.isFinalStage) {
      assert.equal(goalNode.style, 'hexagram_lotus_altar', `${stage.stageId} final stage must use hexagram_lotus_altar`);
      lotusFinalStageCount += 1;
    } else {
      assert.equal(goalNode.style, 'stage_portal_arch', `${stage.stageId} sub-stage must use stage_portal_arch`);
      portalSubStageCount += 1;
    }

    const bus = createEventBus();
    const { occluderMeshes, syncOffsets, getDynamicWorldPos, dispose } = createLevelOccluders(stage);
    const rig = new OrthographicIllusionRig({
      THREE,
      bus,
      viewportWidth: 1280,
      viewportHeight: 720,
      initialAzimuthDeg: stage.initialAzimuthDeg,
      baseHalfHeight: stage.baseHalfHeight || 7.5,
      target: stage.cameraTarget || { x: 0, y: 0, z: 0 }
    });
    const graph = new DynamicNavGraph();
    const ctrl = new MultiCharacterController({ THREE, bus, graph });

    ctrl.loadLevel(stage, createActorEntries(stage));
    rig.setNavGraph?.(graph);
    rig.configureLevel({
      seams: stage.seams || [],
      occluderMeshes,
      initialAzimuthDeg: stage.initialAzimuthDeg,
      stepDeg: stage.stepDeg || 90,
      baseHalfHeight: stage.baseHalfHeight || 7.5,
      target: stage.cameraTarget || { x: 0, y: 0, z: 0 }
    });

    syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates(), ctrl.getRotatorStates());
    rig.evaluateSeams({
      activePlates: ctrl.getActivePlates(),
      getDynamicWorldPos,
      navGraph: graph,
      rotatorStates: ctrl.getRotatorStates(),
      rotators: stage.rotators
    });

    if (stage.winCondition.type === 'reach') {
      const blocked = new Set(
        (stage.actors || []).slice(1).map((a) => a.startNodeId)
      );
      const actor = stage.actors.find((a) => a.id === (stage.defaultActorId || stage.actors[0].id)) || stage.actors[0];
      const pathRes = graph.findPath(actor.startNodeId, stage.winCondition.goalNodeId, { blockedNodeIds: blocked });
      assert.equal(
        pathRes.reachable,
        false,
        `${stage.stageId} must NOT have direct start->goal A* path at initialAzimuthDeg=${stage.initialAzimuthDeg}`
      );
    } else if (stage.winCondition.type === 'all_on_goals') {
      const unreachableCount = (stage.actors || []).filter((actor) => {
        const goalId = stage.winCondition.goals[actor.id];
        const blocked = new Set((stage.actors || []).filter((o) => o.id !== actor.id).map((o) => o.startNodeId));
        return !graph.findPath(actor.startNodeId, goalId, { blockedNodeIds: blocked }).reachable;
      }).length;
      assert.ok(
        unreachableCount > 0,
        `${stage.stageId} all_on_goals must block at least one actor at initialAzimuthDeg=${stage.initialAzimuthDeg}`
      );
    } else {
      assert.fail(`Unknown winCondition type on ${stage.stageId}: ${stage.winCondition?.type}`);
    }

    ctrl.dispose();
    rig.dispose();
    dispose();
  }

  assert.equal(portalSubStageCount, 17, 'Must have exactly 17 stage_portal_arch sub-stages');
  assert.equal(lotusFinalStageCount, 12, 'Must have exactly 12 hexagram_lotus_altar final stages');
});

test('Every seam across all 29 stages aligns (<8.5px, unoccluded) at target, +1.4deg, -1.4deg and breaks at +2.2deg', () => {
  for (const stage of ALL_STAGES) {
    assert.ok(Array.isArray(stage.seams) && stage.seams.length > 0, `${stage.stageId} must define seams`);

    for (const seam of stage.seams) {
      const bus = createEventBus();
      const { occluderMeshes, syncOffsets, getDynamicWorldPos, dispose } = createLevelOccluders(stage);
      const graph = new DynamicNavGraph();
      graph.loadLevel(stage);

      const rig = new OrthographicIllusionRig({
        THREE,
        bus,
        viewportWidth: 1280,
        viewportHeight: 720,
        initialAzimuthDeg: seam.targetAzimuthDeg,
        baseHalfHeight: stage.baseHalfHeight || 7.5,
        target: stage.cameraTarget || { x: 0, y: 0, z: 0 }
      });

      const simulatedPlates = new Set(seam.requiredPlates || []);
      const simulatedRotators = graph.getRotatorStates();
      if (seam.requiredRotators && typeof seam.requiredRotators === 'object') {
        for (const [rotId, reqTurns] of Object.entries(seam.requiredRotators)) {
          const normQ = normalizeQuarterTurns(Array.isArray(reqTurns) ? reqTurns[0] : reqTurns);
          graph.setRotatorTurns(rotId, normQ);
          simulatedRotators[rotId] = normQ;
        }
      }
      // Rotate away any turret-mounted occluder turrets only when the turret itself does NOT stay at initial position
      // If a turret holds a decoy occluder at initialQuarterTurns and seam does not specify requiredRotators,
      // check whether the stage solution turns it away, or check direct seam requirements first:
      if (!seam.requiredRotators) {
        for (const step of stage.automatedSolution || []) {
          if (step.action === 'rotateTurret' && simulatedRotators[step.rotatorId] !== undefined) {
            const rotDef = (stage.rotators || []).find((r) => r.id === step.rotatorId);
            const curQ = simulatedRotators[step.rotatorId];
            const nextQ = normalizeQuarterTurns(curQ + step.deltaSteps);
            simulatedRotators[step.rotatorId] = nextQ;
            graph.setRotatorTurns(step.rotatorId, nextQ);
            void rotDef;
          }
        }
      }
      graph.syncMechanisms(simulatedPlates);

      const offsets = computeGroupOffsetsFromPlates(stage, simulatedPlates);
      syncOffsets(offsets, simulatedPlates, simulatedRotators);

      rig.setNavGraph?.(graph);
      rig.configureLevel({
        seams: stage.seams,
        occluderMeshes,
        initialAzimuthDeg: seam.targetAzimuthDeg,
        stepDeg: stage.stepDeg || 90,
        baseHalfHeight: stage.baseHalfHeight || 7.5,
        target: stage.cameraTarget || { x: 0, y: 0, z: 0 }
      });

      for (const delta of [0, 1.4, -1.4]) {
        rig.setAzimuthImmediate(seam.targetAzimuthDeg + delta);
        const evalRes = rig.evaluateSeams({
          activePlates: simulatedPlates,
          getDynamicWorldPos,
          navGraph: graph,
          rotatorStates: simulatedRotators,
          rotators: stage.rotators
        });
        const status = evalRes.seamStatuses.find((s) => (s.id || s.seamId) === seam.id);
        assert.ok(status, `Missing seamStatus for ${stage.stageId} seam ${seam.id}`);
        assert.equal(
          status.depthParityOk,
          true,
          `${stage.stageId} seam ${seam.id} at delta ${delta}deg must satisfy depthParityOk`
        );
        assert.equal(
          status.occluded,
          false,
          `${stage.stageId} seam ${seam.id} at delta ${delta}deg must NOT be occluded (occluder=${status.occluderNodeId})`
        );
        assert.ok(
          status.pxDist < DEFAULT_SEAM_THRESHOLD_PX,
          `${stage.stageId} seam ${seam.id} at delta ${delta}deg pxDist=${status.pxDist} must be < ${DEFAULT_SEAM_THRESHOLD_PX}`
        );
        assert.equal(
          status.aligned,
          true,
          `${stage.stageId} seam ${seam.id} at delta ${delta}deg must be aligned`
        );
      }

      rig.setAzimuthImmediate(seam.targetAzimuthDeg + 2.2);
      const brokenRes = rig.evaluateSeams({
        activePlates: simulatedPlates,
        getDynamicWorldPos,
        navGraph: graph,
        rotatorStates: simulatedRotators,
        rotators: stage.rotators
      });
      const brokenStatus = brokenRes.seamStatuses.find((s) => (s.id || s.seamId) === seam.id);
      assert.ok(brokenStatus, `Missing broken seamStatus for ${stage.stageId} seam ${seam.id}`);
      assert.equal(
        brokenStatus.aligned,
        false,
        `${stage.stageId} seam ${seam.id} at +2.2deg (tolerance=${SNAP_TOLERANCE_DEG}) MUST break`
      );

      rig.dispose();
      dispose();
    }
  }
});

test('Turret rotation lock/unlock, blockedByPlates interlock, and decoy sightline occluders work as designed', () => {
  // 1. Turret gating & seam alignment on ch2_s2 (turret_c2)
  {
    const ch2s2 = getStageLevelDef('ch2_s2');
    const bus = createEventBus();
    const { occluderMeshes, syncOffsets, getDynamicWorldPos, dispose } = createLevelOccluders(ch2s2);
    const rig = new OrthographicIllusionRig({
      THREE,
      bus,
      viewportWidth: 1280,
      viewportHeight: 720,
      initialAzimuthDeg: 225,
      baseHalfHeight: ch2s2.baseHalfHeight || 7.5,
      target: ch2s2.cameraTarget
    });
    const graph = new DynamicNavGraph();
    const ctrl = new MultiCharacterController({ THREE, bus, graph });
    ctrl.loadLevel(ch2s2, createActorEntries(ch2s2));
    rig.setNavGraph?.(graph);
    rig.configureLevel({
      seams: ch2s2.seams,
      occluderMeshes,
      initialAzimuthDeg: 225,
      stepDeg: ch2s2.stepDeg || 90,
      baseHalfHeight: ch2s2.baseHalfHeight || 7.5,
      target: ch2s2.cameraTarget
    });

    syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates(), ctrl.getRotatorStates());
    const beforeRot = rig.evaluateSeams({
      activePlates: ctrl.getActivePlates(),
      getDynamicWorldPos,
      navGraph: graph,
      rotatorStates: ctrl.getRotatorStates(),
      rotators: ch2s2.rotators
    });
    assert.equal(beforeRot.seamStatuses[0].aligned, false, 'ch2_s2 seam must NOT align while turret_c2 is at q=1');

    const rotRes = ctrl.rotateTurret('turret_c2', -1);
    assert.equal(rotRes.accepted, true, 'turret_c2 rotateTurret(-1) must succeed');
    assert.equal(ctrl.getRotatorStates().turret_c2, 0);
    syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates(), ctrl.getRotatorStates());
    const afterRot = rig.evaluateSeams({
      activePlates: ctrl.getActivePlates(),
      getDynamicWorldPos,
      navGraph: graph,
      rotatorStates: ctrl.getRotatorStates(),
      rotators: ch2s2.rotators
    });
    assert.equal(afterRot.seamStatuses[0].aligned, true, 'ch2_s2 seam MUST align once turret_c2 turns to q=0');

    ctrl.dispose();
    rig.dispose();
    dispose();
  }

  // 2. blockedByPlates safety interlock on ch4_s1 (p_c4_safety_pin blocks c4s1_seam_bamboo at 225° until p_c4_release fires)
  {
    const ch4s1 = getStageLevelDef('ch4_s1');
    const bus = createEventBus();
    const { occluderMeshes, syncOffsets, getDynamicWorldPos, dispose } = createLevelOccluders(ch4s1);
    const rig = new OrthographicIllusionRig({
      THREE,
      bus,
      viewportWidth: 1280,
      viewportHeight: 720,
      initialAzimuthDeg: 225,
      baseHalfHeight: ch4s1.baseHalfHeight || 7.5,
      target: ch4s1.cameraTarget
    });
    const graph = new DynamicNavGraph();
    const ctrl = new MultiCharacterController({ THREE, bus, graph });
    ctrl.loadLevel(ch4s1, createActorEntries(ch4s1));
    rig.configureLevel({
      seams: ch4s1.seams,
      occluderMeshes,
      initialAzimuthDeg: 225,
      stepDeg: ch4s1.stepDeg || 90,
      baseHalfHeight: ch4s1.baseHalfHeight || 7.5,
      target: ch4s1.cameraTarget
    });

    assert.equal(ctrl.getActivePlates().has('p_c4_safety_pin'), true, 'ch4_s1 must initialize p_c4_safety_pin active');
    syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates());
    const blockedEval = rig.evaluateSeams({ activePlates: ctrl.getActivePlates(), getDynamicWorldPos });
    const bambooBlocked = blockedEval.seamStatuses.find((s) => s.id === 'c4s1_seam_bamboo');
    assert.equal(bambooBlocked.aligned, false, 'c4s1_seam_bamboo MUST stay blocked while p_c4_safety_pin is active');

    rig.setAzimuthImmediate(135);
    rig.evaluateSeams({ activePlates: ctrl.getActivePlates(), getDynamicWorldPos });
    const mv = ctrl.commandMoveTo('c4s1_pin_b');
    assert.equal(mv.accepted, true);
    ctrl.stepUntilIdle(15, 0.05);
    assert.equal(ctrl.getActivePlates().has('p_c4_release'), true);
    assert.equal(ctrl.getActivePlates().has('p_c4_safety_pin'), false, 'Stepping on p_c4_release must deactivate p_c4_safety_pin');

    rig.setAzimuthImmediate(225);
    syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates());
    const unlockedEval = rig.evaluateSeams({ activePlates: ctrl.getActivePlates(), getDynamicWorldPos });
    const bambooOpen = unlockedEval.seamStatuses.find((s) => s.id === 'c4s1_seam_bamboo');
    assert.equal(bambooOpen.aligned, true, 'c4s1_seam_bamboo MUST align once p_c4_safety_pin is deactivated');

    ctrl.dispose();
    rig.dispose();
    dispose();
  }

  // 3. Decoy occluders: ch1_s2 c1s2_occ and ch10_s1 rotated turret mast c10s1_occ
  {
    const ch1s2 = getStageLevelDef('ch1_s2');
    const bus = createEventBus();
    const { occluderMeshes, syncOffsets, getDynamicWorldPos, dispose } = createLevelOccluders(ch1s2);
    const rig = new OrthographicIllusionRig({
      THREE,
      bus,
      viewportWidth: 1280,
      viewportHeight: 720,
      initialAzimuthDeg: 135,
      baseHalfHeight: ch1s2.baseHalfHeight || 7.5,
      target: ch1s2.cameraTarget
    });
    rig.configureLevel({
      seams: ch1s2.seams,
      occluderMeshes,
      initialAzimuthDeg: 135,
      stepDeg: ch1s2.stepDeg || 90,
      baseHalfHeight: ch1s2.baseHalfHeight || 7.5,
      target: ch1s2.cameraTarget
    });
    syncOffsets(new Map(), new Set());
    const occEval = rig.evaluateSeams({ activePlates: new Set(), getDynamicWorldPos });
    const mainSeamStatus = occEval.seamStatuses.find((s) => s.id === 'c1s2_seam_main');
    assert.equal(mainSeamStatus.occluded, true, 'ch1_s2 decoy c1s2_occ must occlude c1s2_seam_main initially');
    assert.equal(mainSeamStatus.occluderNodeId, 'c1s2_occ');
    rig.dispose();
    dispose();
  }

  {
    const ch10s1 = getStageLevelDef('ch10_s1');
    const bus = createEventBus();
    const { occluderMeshes, syncOffsets, getDynamicWorldPos, dispose } = createLevelOccluders(ch10s1);
    const graph = new DynamicNavGraph();
    const ctrl = new MultiCharacterController({ THREE, bus, graph });
    ctrl.loadLevel(ch10s1, createActorEntries(ch10s1));
    const rig = new OrthographicIllusionRig({
      THREE,
      bus,
      viewportWidth: 1280,
      viewportHeight: 720,
      initialAzimuthDeg: 315,
      baseHalfHeight: ch10s1.baseHalfHeight || 7.5,
      target: ch10s1.cameraTarget
    });
    rig.setNavGraph?.(graph);
    rig.configureLevel({
      seams: ch10s1.seams,
      occluderMeshes,
      initialAzimuthDeg: 315,
      stepDeg: ch10s1.stepDeg || 90,
      baseHalfHeight: ch10s1.baseHalfHeight || 7.5,
      target: ch10s1.cameraTarget
    });

    // Rotator turret_c10_barge must reject rotation before p_c10_pier is held
    const lockedTurn = ctrl.rotateTurret('turret_c10_barge', -1);
    assert.equal(lockedTurn.accepted, false, 'turret_c10_barge must lock until p_c10_pier is active');

    syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates(), ctrl.getRotatorStates());
    const occluded = rig.evaluateSeams({
      activePlates: ctrl.getActivePlates(),
      getDynamicWorldPos,
      navGraph: graph,
      rotatorStates: ctrl.getRotatorStates(),
      rotators: ch10s1.rotators
    }).seamStatuses[0];
    assert.equal(occluded.occluded, true, 'ch10_s1 mast c10s1_occ must occlude sightline while turret is at q=1');
    assert.equal(occluded.occluderNodeId, 'c10s1_occ');

    ctrl.dispose();
    rig.dispose();
    dispose();
  }
});

test('All 29 stages complete via automatedSolution with portal vs altar events and bridge rotation lock', () => {
  let totalBridgeCrossings = 0;
  let totalPortalCompletions = 0;
  let totalFinalGoalCompletions = 0;

  for (const stage of ALL_STAGES) {
    assert.ok(
      Array.isArray(stage.automatedSolution) && stage.automatedSolution.length > 0,
      `${stage.stageId} must provide automatedSolution`
    );

    const bus = createEventBus();
    const { occluderMeshes, syncOffsets, getDynamicWorldPos, dispose } = createLevelOccluders(stage);
    const rig = new OrthographicIllusionRig({
      THREE,
      bus,
      viewportWidth: 1280,
      viewportHeight: 720,
      initialAzimuthDeg: stage.initialAzimuthDeg,
      baseHalfHeight: stage.baseHalfHeight || 7.5,
      target: stage.cameraTarget || { x: 0, y: 0, z: 0 }
    });
    const graph = new DynamicNavGraph();
    const ctrl = new MultiCharacterController({ THREE, bus, graph });

    const stageCompletedEvents = [];
    let goalReachedCount = 0;
    let bridgeEnterCount = 0;
    let bridgeExitCount = 0;
    let lockedWhileOnBridge = false;
    let rotateBlockedWhileLocked = false;

    bus.on(EVENTS.STAGE_COMPLETED, (ev) => {
      stageCompletedEvents.push(ev);
    });
    bus.on(EVENTS.NAV_GOAL_REACHED, () => {
      goalReachedCount += 1;
    });
    bus.on(EVENTS.NAV_BRIDGE_ENTER, () => {
      bridgeEnterCount += 1;
      totalBridgeCrossings += 1;
      if (rig.isLocked === true) {
        lockedWhileOnBridge = true;
      }
      if (rig.rotateStep(1) === false) {
        rotateBlockedWhileLocked = true;
      }
    });
    bus.on(EVENTS.NAV_BRIDGE_EXIT, () => {
      bridgeExitCount += 1;
      assert.equal(rig.isLocked, false, `${stage.stageId} camera lock must release on NAV_BRIDGE_EXIT`);
    });

    ctrl.loadLevel(stage, createActorEntries(stage));
    rig.setNavGraph?.(graph);
    rig.configureLevel({
      seams: stage.seams || [],
      occluderMeshes,
      initialAzimuthDeg: stage.initialAzimuthDeg,
      stepDeg: stage.stepDeg || 90,
      baseHalfHeight: stage.baseHalfHeight || 7.5,
      target: stage.cameraTarget || { x: 0, y: 0, z: 0 }
    });

    syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates(), ctrl.getRotatorStates());
    rig.evaluateSeams({
      activePlates: ctrl.getActivePlates(),
      getDynamicWorldPos,
      navGraph: graph,
      rotatorStates: ctrl.getRotatorStates(),
      rotators: stage.rotators
    });

    for (const step of stage.automatedSolution) {
      if (step.action === 'rotate') {
        assert.equal(rig.isLocked, false, `${stage.stageId} cannot rotate when camera is locked`);
        rig.setAzimuthImmediate(step.deg);
        syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates(), ctrl.getRotatorStates());
        rig.evaluateSeams({
          activePlates: ctrl.getActivePlates(),
          getDynamicWorldPos,
          navGraph: graph,
          rotatorStates: ctrl.getRotatorStates(),
          rotators: stage.rotators
        });
      } else if (step.action === 'rotateTurret') {
        assert.equal(rig.isLocked, false, `${stage.stageId} cannot rotateTurret while camera locked`);
        const rotRes = ctrl.rotateTurret(step.rotatorId, step.deltaSteps);
        assert.equal(
          rotRes.accepted,
          true,
          `${stage.stageId} rotateTurret(${step.rotatorId}, ${step.deltaSteps}) failed: ${rotRes.reason}`
        );
        syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates(), ctrl.getRotatorStates());
        rig.evaluateSeams({
          activePlates: ctrl.getActivePlates(),
          getDynamicWorldPos,
          navGraph: graph,
          rotatorStates: ctrl.getRotatorStates(),
          rotators: stage.rotators
        });
      } else if (step.action === 'switch') {
        const switched = ctrl.switchActor(step.actorId);
        assert.equal(switched, true, `${stage.stageId} failed to switch actor to ${step.actorId}`);
      } else if (step.action === 'move') {
        const moveCmd = ctrl.commandMoveTo(step.nodeId);
        assert.equal(
          moveCmd.accepted,
          true,
          `${stage.stageId} move to ${step.nodeId} rejected (azimuth=${rig.currentAzimuthDeg}, plates=${[...ctrl.getActivePlates()].join(',')}, rotators=${JSON.stringify(ctrl.getRotatorStates())})`
        );
        for (let tick = 0; tick < 600; tick += 1) {
          ctrl.update(0.05);
          if (ctrl.isCrossingBridge()) {
            assert.equal(rig.isLocked, true, `${stage.stageId} rig.isLocked must stay true during bridge crossing`);
          }
          if (!ctrl.activePath) break;
        }
        ctrl.stepUntilIdle(15, 0.05);
        syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates(), ctrl.getRotatorStates());
        rig.evaluateSeams({
          activePlates: ctrl.getActivePlates(),
          getDynamicWorldPos,
          navGraph: graph,
          rotatorStates: ctrl.getRotatorStates(),
          rotators: stage.rotators
        });
      } else {
        assert.fail(`${stage.stageId} unknown automatedSolution action: ${step.action}`);
      }
    }

    assert.equal(ctrl.goalReached, true, `${stage.stageId} ctrl.goalReached must be true`);
    if (stage.isFinalStage) {
      assert.ok(goalReachedCount >= 1, `${stage.stageId} (hexagram_lotus_altar) failed to fire NAV_GOAL_REACHED`);
      totalFinalGoalCompletions += 1;
    } else {
      assert.ok(stageCompletedEvents.length >= 1, `${stage.stageId} (stage_portal_arch) failed to fire STAGE_COMPLETED`);
      assert.equal(stageCompletedEvents[0].isFinalStage, false, `${stage.stageId} sub-stage must emit isFinalStage=false`);
      assert.equal(goalReachedCount, 0, `${stage.stageId} sub-stage portal must NOT prematurely emit NAV_GOAL_REACHED`);
      totalPortalCompletions += 1;
    }

    assert.equal(bridgeEnterCount, bridgeExitCount, `${stage.stageId} bridge enter/exit counts must match`);
    assert.equal(rig.isLocked, false, `${stage.stageId} rig must end unlocked`);
    if (bridgeEnterCount > 0) {
      assert.equal(lockedWhileOnBridge, true, `${stage.stageId} failed to assert rig.isLocked === true on NAV_BRIDGE_ENTER`);
      assert.equal(rotateBlockedWhileLocked, true, `${stage.stageId} rotateStep must return false while locked`);
    }

    ctrl.dispose();
    rig.dispose();
    dispose();
  }

  assert.equal(totalPortalCompletions, 17, 'Expected 17 STAGE_COMPLETED portal stage completions');
  assert.equal(totalFinalGoalCompletions, 12, 'Expected 12 NAV_GOAL_REACHED final altar completions');
  assert.ok(totalBridgeCrossings >= 29, `Expected at least 29 illusion bridge crossings across 29 stages, got ${totalBridgeCrossings}`);
});

function distPointToSegmentXZ(px, pz, ax, az, bx, bz) {
  const vx = bx - ax;
  const vz = bz - az;
  const lenSq = vx * vx + vz * vz;
  if (lenSq <= 1e-12) return Math.hypot(px - ax, pz - az);
  const t = Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / lenSq));
  return Math.hypot(px - (ax + t * vx), pz - (az + t * vz));
}

function resolveStageNodeRotatorMap(stage) {
  const rots = stage.rotators || [];
  const rotById = new Map(rots.map((r) => [r.id, r]));
  const nodeToRotator = new Map();
  for (const r of rots) {
    for (const nid of r.nodeIds || []) {
      if (nid) nodeToRotator.set(nid, r);
    }
  }
  for (const n of stage.nodes || []) {
    if (n.rotatorId && !nodeToRotator.has(n.id) && rotById.has(n.rotatorId)) {
      nodeToRotator.set(n.id, rotById.get(n.rotatorId));
    }
  }
  return nodeToRotator;
}

function getNodePosAtRotatorTurns(node, nodeToRotator, rotatorTurnsMap) {
  const rot = nodeToRotator.get(node.id);
  if (!rot) return [node.x, node.y, node.z];
  const q = rotatorTurnsMap.has(rot.id)
    ? rotatorTurnsMap.get(rot.id)
    : (rot.initialQuarterTurns ?? 0);
  return rotatePointAroundPivotY([node.x, node.y, node.z], rot.pivot, q);
}

function assertNoNodeOverlaps(stage, nodeToRotator, rotatorTurnsMap, stateLabel) {
  const nodes = stage.nodes || [];
  const pts = nodes.map((n) => ({
    id: n.id,
    pos: getNodePosAtRotatorTurns(n, nodeToRotator, rotatorTurnsMap)
  }));
  for (let i = 0; i < pts.length; i += 1) {
    for (let j = i + 1; j < pts.length; j += 1) {
      const a = pts[i];
      const b = pts[j];
      const dist3D = Math.hypot(
        a.pos[0] - b.pos[0],
        a.pos[1] - b.pos[1],
        a.pos[2] - b.pos[2]
      );
      assert.ok(
        dist3D >= 0.95,
        `${stage.stageId} (${stateLabel}) 3D node overlap between ${a.id} and ${b.id}: dist3D=${dist3D.toFixed(4)} < 0.95`
      );
    }
  }
}

test('Anti-clipping & puzzle-integrity across all 29 stages: zero node overlaps, zero air-walk edges, clear lore props', () => {
  for (const stage of ALL_STAGES) {
    const nodeMap = new Map((stage.nodes || []).map((n) => [n.id, n]));
    const nodeToRotator = resolveStageNodeRotatorMap(stage);
    const rotators = stage.rotators || [];

    // 1. Zero 3D node-node overlaps at initial state & across q=0..3 rotator turns
    assertNoNodeOverlaps(stage, nodeToRotator, new Map(), 'initial');
    for (const rot of rotators) {
      for (let q = 0; q < 4; q += 1) {
        assertNoNodeOverlaps(stage, nodeToRotator, new Map([[rot.id, q]]), `${rot.id}@q=${q}`);
      }
    }
    if (rotators.length === 2) {
      for (let q1 = 0; q1 < 4; q1 += 1) {
        for (let q2 = 0; q2 < 4; q2 += 1) {
          assertNoNodeOverlaps(
            stage,
            nodeToRotator,
            new Map([[rotators[0].id, q1], [rotators[1].id, q2]]),
            `${rotators[0].id}@${q1},${rotators[1].id}@${q2}`
          );
        }
      }
    }

    // 2. Zero non-illusion edges (edges, linkedEdges, mechanismEdges) with |dx|+|dz| > 1.05 or |dy| > 1.05
    for (const edge of [...(stage.edges || []), ...(stage.mechanismEdges || [])]) {
      const nodeA = nodeMap.get(edge.from);
      const nodeB = nodeMap.get(edge.to);
      assert.ok(nodeA && nodeB, `${stage.stageId} edge references missing node: ${edge.from} -> ${edge.to}`);
      const turnsMap = new Map();
      if (edge.requiredRotators && typeof edge.requiredRotators === 'object') {
        for (const [rid, q] of Object.entries(edge.requiredRotators)) {
          turnsMap.set(rid, normalizeQuarterTurns(Array.isArray(q) ? q[0] : q));
        }
      } else {
        // Static/internal edges hold invariant adjacency at base (q=0) when on same rotator
        for (const rot of rotators) turnsMap.set(rot.id, 0);
      }
      const [ax, ay, az] = getNodePosAtRotatorTurns(nodeA, nodeToRotator, turnsMap);
      const [bx, by, bz] = getNodePosAtRotatorTurns(nodeB, nodeToRotator, turnsMap);
      const manhattanXZ = Math.abs(ax - bx) + Math.abs(az - bz);
      const dy = Math.abs(ay - by);
      assert.ok(
        manhattanXZ <= 1.05 && dy <= 1.05,
        `${stage.stageId} non-illusion edge ${edge.from}->${edge.to} spans air/gap (|dx|+|dz|=${manhattanXZ.toFixed(3)}, |dy|=${dy.toFixed(3)})`
      );
    }

    for (const rot of rotators) {
      for (const le of rot.linkedEdges || []) {
        const nodeA = nodeMap.get(le.from);
        const nodeB = nodeMap.get(le.to);
        assert.ok(nodeA && nodeB, `${stage.stageId} linkedEdge references missing node: ${le.from} -> ${le.to}`);
        const rawTurns =
          le.requiredQuarterTurns ??
          le.quarterTurns ??
          le.turn ??
          le.atTurns ??
          le.turns ??
          le.allowedQuarterTurns ??
          rot.initialQuarterTurns ??
          0;
        const turnsList = Array.isArray(rawTurns) ? rawTurns : [rawTurns];
        for (const t of turnsList) {
          const q = normalizeQuarterTurns(t);
          const turnsMap = new Map([[rot.id, q]]);
          if (le.requiredRotators && typeof le.requiredRotators === 'object') {
            for (const [rid, rq] of Object.entries(le.requiredRotators)) {
              turnsMap.set(rid, normalizeQuarterTurns(Array.isArray(rq) ? rq[0] : rq));
            }
          }
          const [ax, ay, az] = getNodePosAtRotatorTurns(nodeA, nodeToRotator, turnsMap);
          const [bx, by, bz] = getNodePosAtRotatorTurns(nodeB, nodeToRotator, turnsMap);
          const manhattanXZ = Math.abs(ax - bx) + Math.abs(az - bz);
          const dy = Math.abs(ay - by);
          assert.ok(
            manhattanXZ <= 1.05 && dy <= 1.05,
            `${stage.stageId} linkedEdge ${le.from}->${le.to} at ${rot.id}@q=${q} exceeds adjacency (|dx|+|dz|=${manhattanXZ.toFixed(3)}, |dy|=${dy.toFixed(3)})`
          );
        }
      }
    }

    // 3. Zero same-floor lore/NPC props within 0.55 XZ distance of any walkable horizontal edge centerline
    for (const prop of stage.props || []) {
      if (!prop?.loreId) continue;
      for (const edge of stage.edges || []) {
        const nodeA = nodeMap.get(edge.from);
        const nodeB = nodeMap.get(edge.to);
        if (!nodeA || !nodeB) continue;
        if (Math.abs(nodeA.y - nodeB.y) > 0.05) continue;
        if (Math.abs(prop.y - (nodeA.y + 0.5)) >= 1.3) continue;

        const rotA = nodeToRotator.get(nodeA.id);
        const rotB = nodeToRotator.get(nodeB.id);
        const statesToCheck = rotA || rotB
          ? [0, 1, 2, 3].map((q) => {
              const m = new Map();
              if (rotA) m.set(rotA.id, q);
              if (rotB) m.set(rotB.id, q);
              return m;
            })
          : [new Map()];

        for (const turnsMap of statesToCheck) {
          const [ax, , az] = getNodePosAtRotatorTurns(nodeA, nodeToRotator, turnsMap);
          const [bx, , bz] = getNodePosAtRotatorTurns(nodeB, nodeToRotator, turnsMap);
          const distXZ = distPointToSegmentXZ(prop.x, prop.z, ax, az, bx, bz);
          assert.ok(
            distXZ >= 0.55,
            `${stage.stageId} lore prop ${prop.id} (${prop.loreId}) overlaps edge ${edge.from}->${edge.to}: distXZ=${distXZ.toFixed(3)} < 0.55`
          );
        }
      }
    }
  }
});

test('v2.2 Portraits (15 WebP <350KB), bilingual speakers, all 9 postEffect specs & Ch5 Elder mist_vanish', () => {
  // 1. All 15 WebP portraits exist and total < 350 KB
  const expectedPortraitIds = [
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
  assert.equal(PORTRAIT_IDS.length, 15, 'PORTRAIT_IDS must contain all 15 speakers');
  assert.deepEqual([...PORTRAIT_IDS].sort(), [...expectedPortraitIds].sort());

  const portraitsDir = path.join(LOTUS_DIR, 'assets/portraits');
  let totalWebpBytes = 0;
  for (const id of expectedPortraitIds) {
    const filePath = path.join(portraitsDir, `${id}.webp`);
    assert.equal(fs.existsSync(filePath), true, `Missing WebP portrait file: ${id}.webp`);
    const buf = fs.readFileSync(filePath);
    assert.equal(buf.subarray(0, 4).toString('ascii'), 'RIFF', `${id}.webp invalid RIFF header`);
    assert.equal(buf.subarray(8, 12).toString('ascii'), 'WEBP', `${id}.webp invalid WEBP signature`);
    totalWebpBytes += buf.length;

    const uri = getPortraitDataUri(id);
    assert.ok(typeof uri === 'string' && uri.startsWith('data:image/webp;base64,'), `Portrait URI for ${id} must be inline WebP data URI`);
    assert.equal(PORTRAIT_DATA_URIS[id], uri);
    assert.equal(resolveSpeakerId(id), id);
  }
  assert.ok(
    totalWebpBytes < 350 * 1024,
    `Total WebP portrait size ${totalWebpBytes} bytes must be < 350 KB (${350 * 1024} bytes)`
  );

  // 2. Mother & Liang9 canon speaker metadata
  assert.equal(SPEAKER_BILINGUAL_META.mother?.zh, '盧母', 'SPEAKER_BILINGUAL_META.mother.zh must be 盧母');
  assert.equal(getSpeakerMeta('mother')?.zh, '盧母');
  assert.equal(LORE_DIALOGUES.liang9_ch10?.pages?.[0]?.speakerId, 'liang9');
  assert.ok(LORE_DIALOGUES.liang9_ch10?.pages?.[0]?.speakerName?.includes('梁九'));

  // 3. All 9 postEffect specs & Ch5 old_man_ch5 triggerOnPageIndex === 1
  const expectedPostEffectLoreIds = [
    'zero7_ch1',
    'astral_ch3',
    'corvo_ch3',
    'zero7_ch4',
    'old_man_ch5',
    'old_man_ch6',
    'old_man_ch7',
    'zero7_ch8',
    'old_man_ch9'
  ];
  const actualPostEffectLoreIds = Object.entries(LORE_DIALOGUES)
    .filter(([, entry]) => Boolean(entry?.postEffect))
    .map(([id]) => id);
  assert.deepEqual(
    [...actualPostEffectLoreIds].sort(),
    [...expectedPostEffectLoreIds].sort(),
    'Must define exact 9 postEffect specs across LORE_DIALOGUES'
  );

  for (const loreId of expectedPostEffectLoreIds) {
    const pe = LORE_DIALOGUES[loreId].postEffect;
    assert.ok(pe && typeof pe.type === 'string' && pe.type.length > 0, `postEffect on ${loreId} invalid`);
  }

  const oldManEffect = LORE_DIALOGUES.old_man_ch5.postEffect;
  assert.equal(oldManEffect.type, 'mist_vanish');
  assert.equal(oldManEffect.targetNpcId, 'old_man_ch5');
  assert.equal(oldManEffect.triggerOnPageIndex, 1);
  assert.equal(oldManEffect.triggerOnClose, false);

  // Verify buildLevelScene + triggerPropEffect cleanly removes old_man_ch5 from npcClickables
  const ch5s2 = getStageLevelDef('ch5_s2');
  const ch5Scene = buildLevelScene(THREE, ch5s2);
  assert.equal(ch5Scene.npcClickables.length, 1, 'ch5_s2 must start with 1 clickable NPC hitbox (old_man_ch5)');
  assert.equal(ch5Scene.getActivePropStates().activeNpcs.length, 1);
  ch5Scene.triggerPropEffect(oldManEffect);
  const propStates = ch5Scene.getActivePropStates();
  assert.equal(ch5Scene.npcClickables.length, 0, 'mist_vanish must remove old_man_ch5 from npcClickables immediately');
  assert.equal(propStates.activeNpcs.length, 0);
  assert.equal(propStates.vanishedNpcs[0]?.id, 'old_man_ch5');
  assert.equal(propStates.vanishedNpcs[0]?.status, 'vanished');
  ch5Scene.dispose();
});

test('EndingCinematicsDirector headless Three.js lifecycle for Endings A, B, and C', () => {
  for (const key of ['A', 'B', 'C']) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 16 / 9, 0.1, 200);
    const finishPayloads = [];
    const subtitles = [];

    const director = new EndingCinematicsDirector({
      THREE,
      scene,
      camera,
      onSubtitle: (cue) => {
        if (cue) subtitles.push(cue);
      },
      onFinish: (payload) => {
        finishPayloads.push(payload);
      }
    });

    const startState = director.start(key);
    assert.equal(startState.active, true, `Ending ${key} must be active after start()`);
    assert.equal(startState.endingKey, key);
    assert.ok(startState.duration > 28, `Ending ${key} natural duration ${startState.duration}s must be > 28s`);
    assert.ok(startState.particleCount > 0, `Ending ${key} must build 3D starfield/lotus particles`);

    const st26 = director.seekTo(26);
    assert.equal(st26.elapsed, 26);
    assert.ok(st26.activeSubtitle && st26.activeSubtitle.zh, `Ending ${key} at 26s must have bilingual subtitle`);
    assert.ok(Number.isFinite(st26.ringSpeed) && st26.ringSpeed > 0, `Ending ${key} ringSpeed must be finite positive`);
    if (key === 'C') {
      assert.ok(st26.ringSpeed > 5, `Ending C Made-in-Heaven seekTo(26) ringSpeed=${st26.ringSpeed} must be > 5`);
      assert.equal(st26.phase, 'made_in_heaven_acceleration');
    }

    const stEnd = director.seekToEnd();
    assert.ok(stEnd.elapsed >= stEnd.duration, `Ending ${key} seekToEnd() must reach duration`);
    assert.equal(stEnd.active, false);
    assert.equal(finishPayloads.length, 1, `Ending ${key} seekToEnd() must trigger onFinish once`);
    assert.equal(finishPayloads[0].skipped, false);

    // Restart and test skip() independently
    director.start(key);
    const stSkip = director.skip();
    assert.equal(stSkip.active, false, `Ending ${key} skip() must deactivate director`);
    assert.equal(finishPayloads.length, 2, `Ending ${key} skip() must trigger onFinish`);
    assert.equal(finishPayloads[1].skipped, true);

    director.dispose();
  }
});

test('Static Canon Linter passes 100% across source, portrait-atlas, index.html, and www/index.html', () => {
  const storySrc = fs.readFileSync(path.join(LOTUS_DIR, 'src/story-codex-data.js'), 'utf8');
  const levelsSrc = fs.readFileSync(path.join(LOTUS_DIR, 'src/levels-12-chapters.js'), 'utf8');
  const portraitSrc = fs.readFileSync(path.join(LOTUS_DIR, 'src/portrait-atlas.js'), 'utf8');

  // 1. Zero 子軒 / 林老師 anywhere & Zero 九歲失蹤 (canon missing age is 十歲)
  for (const [label, src] of [
    ['story-codex-data.js', storySrc],
    ['levels-12-chapters.js', levelsSrc],
    ['portrait-atlas.js', portraitSrc]
  ]) {
    assert.equal(/子軒/.test(src), false, `${label} must NOT contain obsolete name 子軒`);
    assert.equal(/林老師/.test(src), false, `${label} must NOT contain obsolete speaker 林老師`);
  }
  assert.equal(/九歲失蹤/.test(storySrc), false, 'story-codex-data.js must use canon 十歲失蹤 (architecture_lock.md:7), not 九歲失蹤');

  const forbiddenCantonese = /[咗嘅喺啲嘢冇]|佢哋|唔係|乜嘢|點解/;
  const chapterMetaPattern = /第[一二三四五六七八九十百零\d]+章|這一章/;

  const collectText = (pages = []) => pages.map((p) => `${p.speakerName || ''}:${p.text || ''}`).join('\n');

  const checkDialogueLine = (line, ctx) => {
    const text = line.text || '';
    const spId = (line.speakerId || '').toLowerCase();
    const spName = line.speakerName || '';

    assert.equal(
      chapterMetaPattern.test(text),
      false,
      `Forbidden meta chapter phrasing (第X章/這一章) in ${ctx}: "${text}"`
    );
    assert.equal(
      forbiddenCantonese.test(text),
      false,
      `Forbidden Cantonese token in ${ctx}: "${text}"`
    );

    if (spId === 'afonso' || spName.includes('阿方索')) {
      assert.equal(
        /盧家|盧氏/.test(text),
        false,
        `1622 Afonso must NEVER say 盧家/盧氏 in ${ctx}: "${text}"`
      );
    }
  };

  for (let ch = 1; ch <= 12; ch += 1) {
    const chStory = CHAPTER_STORIES[ch];
    assert.ok(chStory, `Missing CHAPTER_STORIES[${ch}]`);
    const sections = [
      ['intro', chStory.intro || []],
      ['midResonance', chStory.midResonance || []],
      ['outro', chStory.outro || []]
    ];

    for (const [secName, pages] of sections) {
      for (const line of pages) {
        checkDialogueLine(line, `Ch${ch}.${secName}`);
        const text = `${line.speakerName || ''} ${line.text || ''}`;

        if (ch === 1) {
          if (/盧辰/.test(text)) {
            assert.equal(
              /Zero-7|面具|黑甲|黑影|刺客/i.test(text),
              false,
              `Ch1 must NOT link 盧辰 to Zero-7/assassin: "${text}"`
            );
          }
        } else if (ch <= 7 || (ch === 8 && secName !== 'outro')) {
          assert.equal(/盧辰/.test(text), false, `Zero-7 must NOT be called 盧辰 before Ch 8 completion (Ch${ch}.${secName}): "${text}"`);
        }
        if (ch <= 11) {
          assert.equal(/盧日寺/.test(text), false, `Mastermind full name 盧日寺 forbidden in Ch ${ch}.${secName}: "${text}"`);
          if (/日寺/.test(text)) {
            assert.equal(
              /姓氏|盧家|盧氏|血脈/.test(text),
              false,
              `Ch ${ch}.${secName} must NOT connect 日寺 to Lu bloodline/surname before Ch 12: "${text}"`
            );
          }
        }
      }
    }
  }

  for (const [loreId, lore] of Object.entries(LORE_DIALOGUES)) {
    for (const line of lore.pages || []) {
      checkDialogueLine(line, `lore:${loreId}`);
      if (!/ch12|ending/i.test(loreId)) {
        assert.equal(/盧日寺/.test(line.text || ''), false, `Full name 盧日寺 forbidden in lore ${loreId}`);
        if (/日寺/.test(line.text || '')) {
          assert.equal(
            /姓氏|盧家|盧氏|血脈/.test(line.text || ''),
            false,
            `Pre-Ch12 lore ${loreId} must NOT connect 日寺 to Lu bloodline/surname: "${line.text}"`
          );
        }
      }
      if (/(?:^|_)ch[1-8](?![0-9])|zero7_ch4|zero7_ch8/i.test(loreId)) {
        assert.equal(/盧辰/.test(line.text || ''), false, `Zero-7 identity 盧辰 forbidden in lore ${loreId}`);
      }
    }
  }

  for (const level of LEVELS) {
    const chText = [
      level.title,
      level.subtitle,
      level.hintText,
      ...(level.props || []).map((p) => `${p.type || ''} ${p.label || ''}`)
    ].join('\n');

    assert.equal(forbiddenCantonese.test(chText), false, `Forbidden Cantonese token in Ch ${level.id} level text`);
    if (level.id <= 8) {
      assert.equal(/盧辰/.test(chText), false, `Ch ${level.id} level metadata must not spoil 盧辰`);
    }
    if (level.id <= 11) {
      assert.equal(/盧日寺/.test(chText), false, `Ch ${level.id} level metadata must not spoil 盧日寺`);
    }
  }

  // Endings A, B (三代同體), C all explicitly include 阿珍 (林海珍)
  for (const key of ['A', 'B', 'C']) {
    const ending = FINAL_ENDINGS[key];
    assert.ok(ending && Array.isArray(ending.pages) && ending.pages.length > 0, `Missing FINAL_ENDINGS.${key}`);
    const body = `${ending.title || ''}\n${collectText(ending.pages)}`;
    for (const line of ending.pages) {
      checkDialogueLine(line, `Ending.${key}`);
    }
    assert.ok(/阿珍|林海珍/.test(body), `Ending ${key} MUST explicitly include 阿珍 / 林海珍`);
    if (key === 'B') {
      assert.ok(/三代同體/.test(body), 'Ending B MUST explicitly specify 三代同體');
    }
  }

  // Historical era prohibitions
  const ch5Props = (LEVELS[4].props || []).map((p) => `${p.type || ''} ${p.label || ''}`).join(' ');
  assert.equal(/lighthouse|燈塔/i.test(ch5Props), false, 'Ch 5 (1808) MUST NOT contain Guia Lighthouse');

  const ch7Props = (LEVELS[6].props || []).map((p) => `${p.type || ''} ${p.label || ''}`).join(' ');
  assert.equal(/western_arch|neoclassical_arch|西洋拱門/i.test(ch7Props), false, 'Ch 7 (1849/1895) MUST NOT contain 1871 Western arch');

  const ch8Props = (LEVELS[7].props || []).map((p) => `${p.type || ''} ${p.label || ''}`).join(' ');
  assert.equal(/st_francis|francis_church|聖方濟各/i.test(ch8Props), false, 'Ch 8 (1910) MUST NOT contain 1928 St. Francis church');

  // Codex required entries
  assert.ok(CODEX_ENTRIES?.hidden?.id === 'same_place_people', 'CODEX_ENTRIES.hidden must be same_place_people');

  // Historical / place-name canon & obsolete name checks across source and built distributables
  const typoRegex = /錦山|愉園|老漁商|梁姓漁師|林老師|子軒/;
  const requiredCanonTokens = ['柿山', '娛園', '梁氏後人・梁九', '醉龍龍頭木雕', '盧母'];
  const checkFiles = [
    'src/story-codex-data.js',
    'src/levels-12-chapters.js',
    'src/portrait-atlas.js',
    'index.html',
    'www/index.html'
  ];
  for (const rel of checkFiles) {
    const content = fs.readFileSync(path.join(LOTUS_DIR, rel), 'utf8');
    const match = content.match(typoRegex);
    assert.equal(match, null, `Forbidden pattern "${match?.[0]}" found in ${rel}`);
  }
  for (const rel of ['src/story-codex-data.js', 'index.html', 'www/index.html']) {
    const content = fs.readFileSync(path.join(LOTUS_DIR, rel), 'utf8');
    for (const token of requiredCanonTokens) {
      assert.ok(content.includes(token), `Required canon token "${token}" missing in ${rel}`);
    }
  }
  const levelsFileText = fs.readFileSync(path.join(LOTUS_DIR, 'src/levels-12-chapters.js'), 'utf8');
  for (const token of ['娛園', '梁氏後人梁九', '醉龍龍頭木雕']) {
    assert.ok(levelsFileText.includes(token), `Required canon token "${token}" missing in src/levels-12-chapters.js`);
  }
});

test('Isolation, offline single-HTML (<4.0MB, wwwSynced), mobile www staging, shell syntax, and untouched parent files', () => {
  const indexHtmlPath = path.join(LOTUS_DIR, 'index.html');
  const wwwIndexPath = path.join(LOTUS_DIR, 'www/index.html');
  assert.equal(fs.existsSync(indexHtmlPath), true, 'corridor_of_the_lotus/index.html must exist');
  assert.equal(fs.existsSync(wwwIndexPath), true, 'corridor_of_the_lotus/www/index.html must exist');

  const maxBuildBytes = 4 * 1024 * 1024;
  for (const [label, filePath] of [
    ['index.html', indexHtmlPath],
    ['www/index.html', wwwIndexPath]
  ]) {
    const sizeBytes = fs.statSync(filePath).size;
    assert.ok(sizeBytes < maxBuildBytes, `${label} size ${sizeBytes} must be < 4.0 MB (${maxBuildBytes})`);
    const html = fs.readFileSync(filePath, 'utf8');
    assert.equal(/<script[^>]+src=["']https?:/i.test(html), false, `${label} must contain zero external script tags`);
    assert.equal(/<link[^>]+href=["']https?:/i.test(html), false, `${label} must contain zero external link tags`);
  }

  const indexHash = sha256File(indexHtmlPath);
  const wwwHash = sha256File(wwwIndexPath);
  assert.equal(wwwHash, indexHash, 'wwwSynced: www/index.html must match index.html SHA-256');

  const manifestPath = path.join(LOTUS_DIR, 'www/manifest.webmanifest');
  assert.equal(fs.existsSync(manifestPath), true, 'www/manifest.webmanifest must exist');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert.ok(manifest.name && Array.isArray(manifest.icons) && manifest.icons.length >= 3);

  for (const size of [192, 512, 1024]) {
    const iconPath = path.join(LOTUS_DIR, `www/icons/icon-${size}.png`);
    assert.equal(fs.existsSync(iconPath), true, `Missing icon-${size}.png`);
    const buf = fs.readFileSync(iconPath);
    assert.deepEqual([...buf.subarray(0, 4)], [0x89, 0x50, 0x4e, 0x47], `icon-${size}.png invalid PNG magic bytes`);
  }

  for (const scriptRel of ['tools/build-apk.sh', 'tools/build-ipa.sh']) {
    execFileSync('bash', ['-n', path.join(LOTUS_DIR, scriptRel)], { stdio: 'pipe' });
  }

  // Verify parent files untouched against exact baseline SHA-256
  assert.equal(
    sha256File(path.join(WORKSPACE_ROOT, 'Macau_Chrono_Drifter_HD2D.html')),
    'f03e8d1590dcb941da11043a7ce7880d6e8dfba28fa2321801875527008b045e',
    'Macau_Chrono_Drifter_HD2D.html must remain unmodified'
  );
  assert.equal(
    sha256File(path.join(WORKSPACE_ROOT, 'index.html')),
    '0b33b44751cca662f8d8ec92cb6b58e7e5f309ee47b2c27e639e68f7ef7ddf83',
    'Root index.html must remain unmodified'
  );
});

test('All 29 stages enforce visual-logical seam parity (zero fake align), symmetric q=0/q=2 parity, and ch4_s1 seal backtracking', () => {
  const EIGHT_AZIMUTHS = [0, 45, 90, 135, 180, 225, 270, 315];

  for (const stage of ALL_STAGES) {
    const bus = createEventBus();
    const { occluderMeshes, syncOffsets, getDynamicWorldPos, dispose } = createLevelOccluders(stage);
    const graph = new DynamicNavGraph();
    const ctrl = new MultiCharacterController({ THREE, bus, graph });
    ctrl.loadLevel(stage, createActorEntries(stage));

    const rig = new OrthographicIllusionRig({
      THREE,
      bus,
      viewportWidth: 1280,
      viewportHeight: 720,
      initialAzimuthDeg: stage.initialAzimuthDeg ?? 45,
      baseHalfHeight: stage.baseHalfHeight ?? 7.5,
      target: stage.cameraTarget || { x: 0, y: 0, z: 0 }
    });
    rig.setNavGraph?.(graph);
    rig.configureLevel({
      seams: stage.seams || [],
      occluderMeshes,
      initialAzimuthDeg: stage.initialAzimuthDeg ?? 45,
      stepDeg: stage.stepDeg || 90,
      baseHalfHeight: stage.baseHalfHeight || 7.5,
      target: stage.cameraTarget || { x: 0, y: 0, z: 0 }
    });

    const evalWithState = (rotObj, plateSet, deg) => {
      for (const [rid, q] of Object.entries(rotObj)) graph.setRotatorTurns(rid, q);
      graph.syncMechanisms(plateSet);
      const offsets = computeGroupOffsetsFromPlates(stage, plateSet);
      syncOffsets(offsets, plateSet, rotObj);
      rig.setAzimuthImmediate(deg);
      return rig.evaluateSeams({
        activePlates: plateSet,
        getDynamicWorldPos,
        navGraph: graph,
        rotatorStates: rotObj,
        rotators: stage.rotators || []
      });
    };

    const initRot = Object.fromEntries((stage.rotators || []).map((r) => [r.id, r.initialQuarterTurns ?? 0]));
    const initPlates = new Set((stage.plates || []).filter((p) => p.initialActive).map((p) => p.id));
    const solvedRot = Object.fromEntries((stage.rotators || []).map((r) => [r.id, 0]));
    const solvedPlates = new Set((stage.plates || []).filter((p) => !p.initialActive).map((p) => p.id));

    // 1. At initial state across all 8 angles, blocked seams must NOT look visually aligned
    for (const deg of EIGHT_AZIMUTHS) {
      const res = evalWithState(initRot, initPlates, deg);
      for (const st of res.seamStatuses) {
        if (!st.plateOk || !st.rotatorOk) {
          assert.equal(st.aligned, false, `${stage.stageId} @${deg} seam ${st.id} must not align while blocked`);
          assert.equal(
            st.pxOk && st.depthParityOk && !st.occluded,
            false,
            `${stage.stageId} @${deg} seam ${st.id} looks visually aligned while blocked (plateOk=${st.plateOk}, rotOk=${st.rotatorOk}, px=${st.pxDist})`
          );
        }
      }
    }

    // 2. Omitting any required (!initialActive) plate breaks visual alignment of gated seams
    for (const plate of (stage.plates || []).filter((p) => !p.initialActive)) {
      const minusOne = new Set([...solvedPlates].filter((id) => id !== plate.id));
      for (const seam of stage.seams || []) {
        if (!(seam.requiredPlates || []).includes(plate.id)) continue;
        const res = evalWithState(solvedRot, minusOne, seam.targetAzimuthDeg);
        const st = res.seamStatuses.find((s) => (s.id || s.seamId) === seam.id);
        assert.ok(st, `${stage.stageId} missing status for ${seam.id}`);
        assert.equal(
          st.pxOk && st.depthParityOk && !st.occluded,
          false,
          `${stage.stageId} seam ${seam.id} must NOT look visually aligned before plate ${plate.id} activates (px=${st.pxDist})`
        );
      }
    }

    // 3. Symmetric rotators allowing [0, 2] must align at BOTH q=0 and q=2 without occlusion
    for (const seam of stage.seams || []) {
      for (const [rid, req] of Object.entries(seam.requiredRotators || {})) {
        if (!Array.isArray(req) || !req.includes(2)) continue;
        const resQ2 = evalWithState({ ...solvedRot, [rid]: 2 }, solvedPlates, seam.targetAzimuthDeg);
        const stQ2 = resQ2.seamStatuses.find((s) => (s.id || s.seamId) === seam.id);
        assert.equal(stQ2?.aligned, true, `${stage.stageId} seam ${seam.id} must align cleanly at ${rid}=2`);
        assert.equal(stQ2?.depthParityOk, true, `${stage.stageId} seam ${seam.id} depthParityOk at ${rid}=2`);
        assert.equal(stQ2?.occluded, false, `${stage.stageId} seam ${seam.id} must not be occluded at ${rid}=2 (${stQ2?.occluderNodeId})`);
      }
    }

    ctrl.dispose();
    rig.dispose();
    dispose();
  }

  // 4. ch4_s1 backtracking over deactivated seal plate (p_c4_safety_pin) cannot re-lock the bamboo bridge
  const ch4s1 = getStageLevelDef(4, 0);
  const bus = createEventBus();
  const { occluderMeshes, syncOffsets, getDynamicWorldPos, dispose } = createLevelOccluders(ch4s1);
  const graph = new DynamicNavGraph();
  const ctrl = new MultiCharacterController({ THREE, bus, graph });
  ctrl.loadLevel(ch4s1, createActorEntries(ch4s1));

  const rig = new OrthographicIllusionRig({
    THREE,
    bus,
    viewportWidth: 1280,
    viewportHeight: 720,
    initialAzimuthDeg: ch4s1.initialAzimuthDeg,
    baseHalfHeight: ch4s1.baseHalfHeight || 7.5,
    target: ch4s1.cameraTarget || { x: 0, y: 0, z: 0 }
  });
  rig.setNavGraph?.(graph);
  rig.configureLevel({
    seams: ch4s1.seams,
    occluderMeshes,
    initialAzimuthDeg: ch4s1.initialAzimuthDeg,
    stepDeg: ch4s1.stepDeg || 90,
    baseHalfHeight: ch4s1.baseHalfHeight || 7.5,
    target: ch4s1.cameraTarget || { x: 0, y: 0, z: 0 }
  });

  const syncAll = () => {
    syncOffsets(ctrl.getGroupOffsets(), ctrl.getActivePlates(), ctrl.getRotatorStates());
    rig.evaluateSeams({
      activePlates: ctrl.getActivePlates(),
      getDynamicWorldPos,
      navGraph: graph,
      rotatorStates: ctrl.getRotatorStates(),
      rotators: ch4s1.rotators
    });
  };

  assert.equal(ctrl.getActivePlates().has('p_c4_safety_pin'), true, 'ch4_s1 must start with p_c4_safety_pin active');

  rig.setAzimuthImmediate(135);
  syncAll();
  assert.equal(ctrl.commandMoveTo('c4s1_pin_b').accepted, true, 'ch4_s1 move to c4s1_pin_b at 135deg');
  ctrl.stepUntilIdle(60, 0.05);
  assert.equal(ctrl.getActivePlates().has('p_c4_safety_pin'), false, 'p_c4_release must deactivate p_c4_safety_pin');

  // Backtrack directly onto c4s1_start (where seal plate p_c4_safety_pin sits)
  assert.equal(ctrl.commandMoveTo('c4s1_start').accepted, true, 'ch4_s1 backtrack to c4s1_start');
  ctrl.stepUntilIdle(60, 0.05);
  assert.equal(
    ctrl.getActivePlates().has('p_c4_safety_pin'),
    false,
    'seal plate p_c4_safety_pin must NOT re-trigger when backtracking onto c4s1_start'
  );

  // Proceed to c4s1_stair, rotate to 225deg, and complete at c4s1_goal
  assert.equal(ctrl.commandMoveTo('c4s1_stair').accepted, true, 'ch4_s1 move to c4s1_stair');
  ctrl.stepUntilIdle(60, 0.05);
  rig.setAzimuthImmediate(225);
  syncAll();
  assert.equal(ctrl.commandMoveTo('c4s1_goal').accepted, true, 'ch4_s1 move to c4s1_goal at 225deg after backtracking');
  ctrl.stepUntilIdle(60, 0.05);
  assert.equal(ctrl.goalReached, true, 'ch4_s1 must complete cleanly after backtracking over start node');

  ctrl.dispose();
  rig.dispose();
  dispose();
});

test('v2.5 Dual Background (Day/Night) & 4-Language (zh-Hant/zh-Hans/en/ja) completeness', async () => {
  const [shaderMod, assetsMod, i18nMod] = await Promise.all([
    import('../src/monument-shader.js'),
    import('../src/stylized-assets.js'),
    import('../src/i18n.js')
  ]);

  const { MONUMENT_ERA_THEMES, MONUMENT_NIGHT_ERA_THEMES, setMonumentBgMode, getMonumentBgMode } =
    shaderMod;
  const { NIGHT_ERA_THEMES, buildTitleDioramaScene } = assetsMod;
  const {
    SUPPORTED_LANGS,
    SPEAKER_META_BY_LANG,
    getLocalizedUi,
    getLocalizedChapterStory,
    getLocalizedLoreDialogue,
    getLocalizedCodexEntries,
    getLocalizedFinalEnding,
    getLocalizedChapterMeta,
    getLocalizedStageMeta
  } = i18nMod;

  // 1. Night era themes match all 8 Monument themes
  for (const themeKey of Object.keys(MONUMENT_ERA_THEMES)) {
    assert.ok(MONUMENT_NIGHT_ERA_THEMES[themeKey], `Missing MONUMENT_NIGHT_ERA_THEMES.${themeKey}`);
    assert.ok(NIGHT_ERA_THEMES[themeKey], `Missing NIGHT_ERA_THEMES.${themeKey}`);
  }

  // 2. Title Diorama & Level Scene toggle Day <-> Night without mutating activePlate userData
  const titleDiorama = buildTitleDioramaScene(THREE);
  assert.equal(typeof titleDiorama.setBgMode, 'function');
  assert.equal(titleDiorama.setBgMode('night'), 'night');
  assert.equal(getMonumentBgMode(), 'night');
  assert.equal(titleDiorama.setBgMode('day'), 'day');
  assert.equal(getMonumentBgMode(), 'day');

  const ch1s2 = getStageLevelDef(1, 1);
  const firstPlateId = ch1s2.plates?.[0]?.id;
  assert.ok(firstPlateId, 'ch1_s2 must have at least one plate for activePlate preservation check');
  const levelScene = buildLevelScene(THREE, ch1s2);
  levelScene.update(0.016, 0.1, { activePlates: new Set([firstPlateId]) });

  const countActivePlateRings = () => {
    let activeRings = 0;
    levelScene.root.traverse((obj) => {
      if (obj?.material?.userData?.isPlateActive === true) {
        activeRings += 1;
      }
    });
    return activeRings;
  };
  assert.ok(countActivePlateRings() >= 1, 'Expected active plate ring userData before night toggle');

  assert.equal(levelScene.setBgMode('night'), 'night');
  assert.ok(countActivePlateRings() >= 1, 'Expected active plate ring userData preserved in night mode');
  assert.equal(levelScene.setBgMode('day'), 'day');
  assert.ok(countActivePlateRings() >= 1, 'Expected active plate ring userData preserved after return to day mode');

  levelScene.dispose?.();
  titleDiorama.dispose?.();
  setMonumentBgMode('day');

  // 3. Complete 4-language coverage across stories, lore, codex, endings, metadata & speakers
  assert.deepEqual([...SUPPORTED_LANGS], ['zh-Hant', 'zh-Hans', 'en', 'ja']);
  const speakerIds = Object.keys(SPEAKER_BILINGUAL_META);
  const loreIds = Object.keys(LORE_DIALOGUES);
  assert.equal(loreIds.length, 26, 'Expected 26 LORE_DIALOGUES entries');

  for (const lang of SUPPORTED_LANGS) {
    const uiStr = getLocalizedUi(lang);
    assert.ok(uiStr.titleStart && uiStr.btnNextChapter && uiStr.langModalTitle, `Incomplete UI strings for ${lang}`);

    for (const spId of speakerIds) {
      const sp = SPEAKER_META_BY_LANG[lang]?.[spId];
      assert.ok(sp?.name && sp.name.length > 0, `Missing speaker ${spId} in ${lang}`);
    }

    for (const ch of CHAPTERS) {
      const chMeta = getLocalizedChapterMeta(ch, lang);
      assert.ok(chMeta.title && chMeta.subtitle, `Missing chapter ${ch.id} meta in ${lang}`);

      const baseStory = CHAPTER_STORIES[ch.id];
      const locStory = getLocalizedChapterStory(ch.id, lang);
      assert.equal(locStory.intro.length, baseStory.intro.length, `Ch${ch.id} intro page count in ${lang}`);
      assert.equal(locStory.outro.length, baseStory.outro.length, `Ch${ch.id} outro page count in ${lang}`);
      for (const p of [...locStory.intro, ...locStory.outro]) {
        assert.ok(p.text && p.speakerName, `Empty story page text/speaker in Ch${ch.id} (${lang})`);
      }
      if (baseStory.midResonance) {
        assert.equal(
          locStory.midResonance.length,
          baseStory.midResonance.length,
          `Ch${ch.id} midResonance page count in ${lang}`
        );
      }
    }

    for (const st of ALL_STAGES) {
      const stMeta = getLocalizedStageMeta(st, lang);
      assert.ok(stMeta.title && stMeta.subtitle && stMeta.hintText, `Missing stage meta for ${st.stageId} in ${lang}`);
    }

    for (const lid of loreIds) {
      const baseLore = LORE_DIALOGUES[lid];
      const locLore = getLocalizedLoreDialogue(lid, lang);
      assert.ok(locLore?.title, `Missing lore title ${lid} in ${lang}`);
      assert.equal(locLore.pages.length, baseLore.pages.length, `Lore ${lid} page count in ${lang}`);
    }

    const codex = getLocalizedCodexEntries(lang);
    assert.equal(codex.miracles.length, 5, `Codex miracles count in ${lang}`);
    assert.equal(codex.characters.length, 6, `Codex characters count in ${lang}`);
    assert.equal(codex.clues.length, 6, `Codex clues count in ${lang}`);
    assert.equal(codex.chapters.length, 12, `Codex chapters count in ${lang}`);
    assert.equal(codex.hidden?.eraRecords?.length, 3, `Codex hidden eraRecords count in ${lang}`);

    for (const choiceId of ['A', 'B', 'C']) {
      const baseEnd = FINAL_ENDINGS[choiceId];
      const locEnd = getLocalizedFinalEnding(choiceId, lang);
      assert.ok(locEnd.title && locEnd.subtitle, `Ending ${choiceId} title/subtitle in ${lang}`);
      assert.equal(locEnd.pages.length, baseEnd.pages.length, `Ending ${choiceId} page count in ${lang}`);
      if (lang !== 'zh-Hant') {
        assert.notEqual(locEnd.title, baseEnd.title, `Ending ${choiceId} title must be localized for ${lang}`);
        assert.notEqual(
          locEnd.pages[0].text,
          baseEnd.pages[0].text,
          `Ending ${choiceId} opening text must be localized for ${lang}`
        );
      }
    }
  }
});
