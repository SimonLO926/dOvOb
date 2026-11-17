import * as THREE from 'three';
import { EVENTS, createEventBus } from './contracts.js';
import { OrthographicIllusionRig } from './camera-illusion.js';
import { DynamicNavGraph, MultiCharacterController } from './navgraph-controller.js';
import {
  PALETTE,
  buildLevelScene,
  buildTitleDioramaScene,
  createCharacterFigurine,
  createSceneEnvironment
} from './stylized-assets.js';
import { EndingCinematicsDirector } from './ending-cinematics.js';
import { getPortraitDataUri } from './portrait-atlas.js';
import { setMonumentBgMode } from './monument-shader.js';
import {
  STORAGE_KEYS as I18N_STORAGE_KEYS,
  getLocalizedChapterStory,
  getLocalizedCodexEntries,
  getLocalizedLoreDialogue,
  getLocalizedStageMeta,
  getLocalizedUi,
  normalizeBgMode,
  normalizeLang
} from './i18n.js';
import {
  CHAPTERS,
  getLevelById,
  getStageLevelDef,
  getTotalStageCount
} from './levels-12-chapters.js';
import { CHAPTER_STORIES, CODEX_ENTRIES, LORE_DIALOGUES } from './story-codex-data.js';
import { LotusAudioEngine, LotusUI } from './ui-and-audio.js';

const STORAGE_KEYS = {
  completedChapters: 'lotus_completed_chapters_v1',
  completedStages: 'lotus_completed_stages_v2',
  discoveredLore: 'lotus_discovered_lore_v1',
  ...I18N_STORAGE_KEYS
};

const COUPLE_LORE_IDS = ['couple_1622', 'couple_2026', 'couple_2077'];

function loadSavedSet(key) {
  try {
    const raw = window.localStorage?.getItem(key);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function persistSet(key, set) {
  try {
    window.localStorage?.setItem(key, JSON.stringify([...set]));
  } catch {}
}

function loadSavedString(key, fallback = '') {
  try {
    const val = window.localStorage?.getItem(key);
    return val ? String(val) : fallback;
  } catch {
    return fallback;
  }
}

function persistString(key, value) {
  try {
    window.localStorage?.setItem(key, String(value));
  } catch {}
}

export function bootCorridorOfTheLotus(mountEl = document.getElementById('lotus-app') || document.body) {
  const bus = createEventBus();
  const audio = new LotusAudioEngine(bus);
  let bgMode = normalizeBgMode(loadSavedString(STORAGE_KEYS.bgMode, 'day'));
  let lang = normalizeLang(loadSavedString(STORAGE_KEYS.lang, 'zh-Hant'));
  setMonumentBgMode(bgMode);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.04;
  renderer.domElement.style.display = 'block';
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.position = 'fixed';
  renderer.domElement.style.inset = '0';
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.setAttribute('data-testid', 'lotus-canvas');
  mountEl.appendChild(renderer.domElement);

  const initWidth = Math.max(320, window.innerWidth || 1280);
  const initHeight = Math.max(240, window.innerHeight || 720);
  const aspect0 = Math.max(0.25, initWidth / initHeight);

  function configureTitleOrthoCamera(cam, width, height) {
    const baseHalfH = 7.1;
    const minHalfW = 4.9;
    const aspect = Math.max(0.25, width / Math.max(1, height));
    const halfH = aspect < minHalfW / baseHalfH ? minHalfW / aspect : baseHalfH;
    const halfW = halfH * aspect;
    cam.left = -halfW;
    cam.right = halfW;
    cam.top = halfH;
    cam.bottom = -halfH;
    cam.near = 0.1;
    cam.far = 180;
    cam.updateProjectionMatrix();
  }

  // 1. Isometric Monument Valley Macau Title Diorama Scene & Orthographic Camera
  const titleScene = new THREE.Scene();
  titleScene.background = new THREE.Color(bgMode === 'night' ? '#070c1c' : '#e8fbf5');
  const titleCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 180);
  configureTitleOrthoCamera(titleCamera, initWidth, initHeight);
  const titleDiorama = buildTitleDioramaScene(THREE);
  titleDiorama?.setBgMode?.(bgMode);
  titleScene.add(titleDiorama.root);
  titleDiorama.enterPortalAnimation(0, titleCamera);
  titleDiorama.update(0, { x: 0, y: 0 }, titleCamera);

  // 2. Main Isometric Illusion Gameplay Scene
  const gameScene = new THREE.Scene();
  const graph = new DynamicNavGraph({ bus });
  const rig = new OrthographicIllusionRig({
    THREE,
    bus,
    viewport: { width: window.innerWidth, height: window.innerHeight },
    baseHalfHeight: 7.8,
    elevationDeg: 35.264,
    initialAzimuthDeg: 45,
    stepDeg: 45
  });
  rig.setNavGraph(graph);

  const controller = new MultiCharacterController({ graph, navGraph: graph, bus });
  controller.setIllusionRig(rig);

  // 3. Dedicated Ending Cinematics Scene & Perspective Camera
  const endingScene = new THREE.Scene();
  const endingCamera = new THREE.PerspectiveCamera(46, aspect0, 0.1, 240);
  endingCamera.position.set(0, 6.2, 13.5);
  endingCamera.lookAt(0, 0.8, 0);

  const completedChapters = loadSavedSet(STORAGE_KEYS.completedChapters);
  const completedStageIds = loadSavedSet(STORAGE_KEYS.completedStages);
  const discoveredLoreIds = loadSavedSet(STORAGE_KEYS.discoveredLore);

  let mode = 'title'; // 'title' | 'entering_portal' | 'gameplay' | 'cinematic' | 'epilogue'
  let portalProgress = 0;
  let pointerNorm = { x: 0, y: 0 };

  let currentLevel = getStageLevelDef(1, 0);
  let levelEnv = null;
  let levelScene = null;
  const actorMeshes = new Map();
  const activeRipples = [];
  let lastSeamEval = null;
  let totalElapsed = 0;
  let toolbarRotatorCursor = 0;
  let midResonanceShown = false;
  const triggeredLoreEffects = new Set();

  const stageTransition = {
    active: false,
    phase: 'idle', // 'idle' | 'sink' | 'rise'
    elapsed: 0,
    sinkDuration: 0.38,
    riseDuration: 0.45,
    targetChapterId: 1,
    targetStageIndex: 0
  };

  function renderActiveScene() {
    if (mode === 'title' || mode === 'entering_portal') {
      renderer.render(titleScene, titleCamera);
    } else if (mode === 'cinematic' || mode === 'epilogue') {
      renderer.render(endingScene, endingCamera);
    } else {
      renderer.render(gameScene, rig.camera);
    }
  }

  function spawnLotusRipple(worldPos, accepted = true) {
    if (!worldPos) return;
    const geo = new THREE.RingGeometry(0.18, 0.28, 24);
    const mat = new THREE.MeshBasicMaterial({
      color: accepted ? PALETTE.jadeSea : PALETTE.cinnabar,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(worldPos.x, (worldPos.y || 0) + 0.08, worldPos.z);
    mesh.userData = { ignoreOcclusion: true };
    mesh.raycast = () => {};
    gameScene.add(mesh);
    activeRipples.push({ mesh, age: 0, maxAge: 0.55 });
  }

  function updateRipples(dt) {
    for (let i = activeRipples.length - 1; i >= 0; i -= 1) {
      const r = activeRipples[i];
      r.age += dt;
      const p = r.age / r.maxAge;
      if (p >= 1) {
        gameScene.remove(r.mesh);
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
        activeRipples.splice(i, 1);
      } else {
        const s = 1 + p * 2.2;
        r.mesh.scale.set(s, s, s);
        r.mesh.material.opacity = 0.85 * (1 - p);
      }
    }
  }

  const ui = new LotusUI({
    bus,
    audio,
    lang,
    bgMode,
    onStartGame: () => startFromTitle({ instant: false }),
    onReturnTitle: () => showTitle(),
    onRotateStep: (dir) => {
      if (mode !== 'gameplay') return;
      rig.rotateStep(dir);
    },
    onRotateTurret: () => rotateTurret(null, 1),
    onSelectChapter: (chId) => loadStage(Number(chId), 0),
    onSelectStage: (chId, stageIdx) => loadStage(Number(chId), Number(stageIdx)),
    onSwitchActor: (actorId) => switchActor(actorId),
    onRequestHint: () => getLocalizedStageMeta(currentLevel, lang).hintText || currentLevel?.hintText || '',
    onToggleBgMode: (nextMode) => setBgMode(nextMode, { syncUi: false }),
    onChangeLanguage: (nextLang) => setLanguage(nextLang, { syncUi: false }),
    onStartEndingCinematic: (endingKey) => playEnding(endingKey),
    onSwitchEndingMural: (endingKey) => showEndingMural(endingKey),
    onSkipEndingCinematic: () => skipEnding(),
    getGameProgress: () => ({
      completedChapters: [...completedChapters],
      completedStageIds: [...completedStageIds],
      discoveredLoreIds: [...discoveredLoreIds]
    })
  });

  const endingDirector = new EndingCinematicsDirector({
    THREE,
    scene: endingScene,
    camera: endingCamera,
    lang,
    bgMode,
    onSubtitle: (cue) => {
      ui.updateCinematicSubtitle(cue, endingDirector.getState());
    },
    onAudioCue: (cue) => {
      audio.handleEndingCue(cue);
    },
    onFinish: ({ endingKey }) => {
      audio.stopEndingMusic();
      mode = 'epilogue';
      ui.setCinematicActive(false);
      ui.showEpilogueMural(endingKey);
    }
  });

  function setBgMode(nextMode, { syncUi = true } = {}) {
    bgMode = normalizeBgMode(nextMode);
    persistString(STORAGE_KEYS.bgMode, bgMode);
    setMonumentBgMode(bgMode);
    titleScene.background = new THREE.Color(bgMode === 'night' ? '#070c1c' : '#e8fbf5');
    titleDiorama?.setBgMode?.(bgMode);
    levelEnv?.setBgMode?.(bgMode);
    levelScene?.setBgMode?.(bgMode);
    endingDirector?.setBgMode?.(bgMode);
    if (syncUi) {
      ui.setBgMode(bgMode, false);
    }
    renderActiveScene();
    return bgMode;
  }

  function toggleBgMode() {
    return setBgMode(bgMode === 'night' ? 'day' : 'night');
  }

  function setLanguage(nextLang, { syncUi = true } = {}) {
    lang = normalizeLang(nextLang);
    persistString(STORAGE_KEYS.lang, lang);
    if (syncUi) {
      ui.setLanguage(lang, false);
    }
    endingDirector?.setLang?.(lang);
    return lang;
  }

  function getSafeNodeWorldPos(nodeId) {
    if (typeof controller.getNodeWorldPos === 'function') {
      return controller.getNodeWorldPos(nodeId);
    }
    if (typeof graph.getNodeWorldPos === 'function') {
      return graph.getNodeWorldPos(nodeId);
    }
    return graph.getNode(nodeId)?.walkPos || null;
  }

  function clearCurrentLevel() {
    for (const fig of actorMeshes.values()) {
      if (fig?.group) gameScene.remove(fig.group);
      fig?.dispose?.();
    }
    actorMeshes.clear();

    if (levelScene) {
      levelScene.dispose();
      levelScene = null;
    }
    if (levelEnv) {
      levelEnv.dispose?.();
      levelEnv = null;
    }
    for (let i = activeRipples.length - 1; i >= 0; i -= 1) {
      const r = activeRipples[i];
      gameScene.remove(r.mesh);
      r.mesh.geometry.dispose();
      r.mesh.material.dispose();
    }
    activeRipples.length = 0;
  }

  function syncFrameSimulation(dt = 0.016) {
    rig.update(dt);
    controller.update(dt);

    const rotStates = controller.getRotatorStates();
    const groupOffsets = controller.getGroupOffsets();
    const activePlates = [...controller.getActivePlates()];

    if (levelScene) {
      levelScene.updateRotators?.(rotStates, dt);
      levelScene.update?.(dt, totalElapsed, {
        activeSeamIds: [],
        activePlates,
        groupOffsets,
        rotatorStates: rotStates,
        syncOnly: true
      });
      gameScene.updateMatrixWorld?.(true);
    }

    lastSeamEval = rig.evaluateSeams({
      activePlates: controller.getActivePlates(),
      getDynamicWorldPos: (nodeId, basePt) => {
        const node = graph.getNode(nodeId);
        const gid = node?.groupId ?? node?.platformGroup;
        const off = gid ? groupOffsets.get(gid) : null;
        if (!off || !basePt) return basePt;
        return {
          x: basePt.x + (off.x || 0),
          y: basePt.y + (off.y || 0),
          z: basePt.z + (off.z || 0)
        };
      },
      navGraph: graph,
      rotatorStates: rotStates,
      rotators: currentLevel?.rotators || []
    });

    const activeSeams = lastSeamEval?.activeSeamIds || [];

    levelScene?.update?.(dt, totalElapsed, {
      activeSeamIds: activeSeams,
      activePlates,
      groupOffsets,
      rotatorStates: rotStates,
      stageTransition: stageTransition.active
        ? {
            phase: stageTransition.phase,
            progress: Math.min(
              1,
              stageTransition.elapsed /
                (stageTransition.phase === 'sink' ? stageTransition.sinkDuration : stageTransition.riseDuration)
            )
          }
        : { phase: 'idle', progress: 0 }
    });

    ui.updateRuntimeState({
      seamEval: lastSeamEval,
      actors: controller.getActorsSnapshot()
    });
  }

  function configureGameplayStage(
    chapterIdOrStageId,
    stageIndex = 0,
    { skipIntro = false, fromPortal = false, targetMode = 'gameplay' } = {}
  ) {
    const resolved = getStageLevelDef(chapterIdOrStageId, stageIndex) || getLevelById(chapterIdOrStageId) || getStageLevelDef(1, 0);
    currentLevel = resolved;

    if (targetMode === 'gameplay') {
      if (mode === 'cinematic' || mode === 'epilogue') {
        endingDirector.dispose();
        audio.stopEndingMusic();
        ui.setCinematicActive(false);
        ui.closeEpilogueMural();
      }
      mode = 'gameplay';
      ui.setTitleVisible(false);
    }

    clearCurrentLevel();
    midResonanceShown = false;
    triggeredLoreEffects.clear();
    toolbarRotatorCursor = 0;

    if (!fromPortal) {
      stageTransition.active = false;
      stageTransition.phase = 'idle';
      stageTransition.elapsed = 0;
    }

    levelEnv = createSceneEnvironment(THREE, gameScene, resolved.themeKey);
    levelEnv?.setBgMode?.(bgMode);
    levelScene = buildLevelScene(THREE, resolved);
    levelScene?.setBgMode?.(bgMode);
    gameScene.add(levelScene.root);

    const actorEntries = {};
    for (const actorDef of resolved.actors || []) {
      const fig = createCharacterFigurine(THREE, actorDef.id);
      if (fig?.group) {
        gameScene.add(fig.group);
      }
      actorMeshes.set(actorDef.id, fig);
      actorEntries[actorDef.id] = fig;
    }

    controller.loadLevel(resolved, actorEntries, { stageIndex: resolved.stageIndex ?? 0 });
    levelScene.snapRotators?.(controller.getRotatorStates());
    gameScene.updateMatrixWorld?.(true);

    rig.setNavGraph(graph);
    rig.configureLevel({
      seams: resolved.seams || [],
      occluderMeshes: levelScene.occluderMeshes || [],
      initialAzimuthDeg: resolved.initialAzimuthDeg ?? 45,
      stepDeg: resolved.stepDeg ?? 45,
      baseHalfHeight: resolved.baseHalfHeight ?? 7.8,
      target: resolved.cameraTarget || [0, 0.8, 0],
      navGraph: graph,
      rotators: resolved.rotators || [],
      rotatorStates: controller.getRotatorStates()
    });
    rig.setAzimuthImmediate(resolved.initialAzimuthDeg ?? 45);

    ui.setLevel(resolved);
    if (targetMode === 'gameplay') {
      ui.setTitleVisible(false);
    }

    const chId = resolved.chapterId || resolved.id;
    const story = getLocalizedChapterStory(chId, lang) || CHAPTER_STORIES[chId];
    const stageMeta = getLocalizedStageMeta(resolved, lang);
    if (targetMode === 'gameplay' && !skipIntro && !fromPortal && (resolved.stageIndex || 0) === 0 && story?.intro) {
      ui.showDialogue(story.intro, {
        title: `CH ${String(chId).padStart(2, '0')} · ${stageMeta.title || resolved.title}`,
        source: { kind: 'chapter_story', chapterId: chId, part: 'intro' }
      });
    } else {
      ui.hideDialogue();
    }

    syncFrameSimulation(0.016);
    if (fromPortal) {
      levelScene?.setStageTransitionState?.('rise', 0);
    }
    return resolved;
  }

  function loadStage(chapterIdOrStageId, stageIndex = 0, options = {}) {
    return configureGameplayStage(chapterIdOrStageId, stageIndex, {
      ...options,
      targetMode: 'gameplay'
    });
  }

  function loadChapter(chapterId, stageIndex = 0, options = {}) {
    return loadStage(chapterId, stageIndex, options);
  }

  function startFromTitle({ instant = false } = {}) {
    if (instant) {
      portalProgress = 1;
      loadStage(1, 0, { skipIntro: false });
      renderActiveScene();
      return getState();
    }
    if (mode === 'entering_portal') return getState();
    if (mode !== 'title') {
      loadStage(1, 0, { skipIntro: false });
      renderActiveScene();
      return getState();
    }
    audio.playStagePortal();
    portalProgress = 0;
    mode = 'entering_portal';
    ui.setTitleVisible(false);
    return getState();
  }

  function showTitle() {
    if (mode === 'cinematic' || mode === 'epilogue') {
      endingDirector.dispose();
      audio.stopEndingMusic();
    }
    stageTransition.active = false;
    stageTransition.phase = 'idle';
    portalProgress = 0;
    titleDiorama.enterPortalAnimation(0, titleCamera);
    titleCamera.zoom = 1;
    titleCamera.updateProjectionMatrix();
    titleDiorama.update(0, pointerNorm, titleCamera);
    mode = 'title';
    ui.closeEpilogueMural();
    ui.setCinematicActive(false);
    ui.setTitleVisible(true);
    renderActiveScene();
    return getState();
  }

  function triggerLore(loreId) {
    const baseEntry = LORE_DIALOGUES[loreId];
    if (!baseEntry) return false;
    const entry = getLocalizedLoreDialogue(loreId, lang) || baseEntry;

    const hadBefore = discoveredLoreIds.has(loreId);
    discoveredLoreIds.add(loreId);
    persistSet(STORAGE_KEYS.discoveredLore, discoveredLoreIds);
    bus.emit(EVENTS.LORE_TRIGGERED, {
      loreId,
      chapterId: currentLevel?.chapterId || currentLevel?.id,
      stageId: currentLevel?.stageId
    });

    if (!hadBefore && COUPLE_LORE_IDS.every((id) => discoveredLoreIds.has(id))) {
      const hiddenMeta = getLocalizedCodexEntries(lang)?.hidden || CODEX_ENTRIES.hidden;
      const t = getLocalizedUi(lang);
      ui.showToast(t.codexHiddenUnlocked(hiddenMeta.title, hiddenMeta.id), 4200);
    }

    const effect = baseEntry.postEffect || null;
    const effectKey = `${currentLevel?.stageId || currentLevel?.id}:${loreId}`;
    let firedThisDialogue = false;

    const triggerEffectOnce = () => {
      if (!effect || firedThisDialogue || triggeredLoreEffects.has(effectKey)) return null;
      firedThisDialogue = true;
      triggeredLoreEffects.add(effectKey);
      const res = levelScene?.triggerPropEffect?.(effect) || null;
      audio.playPropEffect?.(effect.type);
      bus.emit(EVENTS.PROP_EFFECT_TRIGGERED, { loreId, type: effect.type, result: res });
      syncFrameSimulation(0);
      renderActiveScene();
      return res;
    };

    ui.showDialogue(entry.pages, {
      title: entry.title,
      loreId,
      source: { kind: 'lore', loreId },
      onPageChange: (pageIndex) => {
        if (
          effect &&
          effect.triggerOnPageIndex !== null &&
          effect.triggerOnPageIndex !== undefined &&
          Number(effect.triggerOnPageIndex) === Number(pageIndex)
        ) {
          triggerEffectOnce();
        }
      },
      onClose: () => {
        if (effect && effect.triggerOnClose === true) {
          triggerEffectOnce();
        }
      }
    });
    return true;
  }

  function rotateTurret(rotatorId = null, deltaSteps = 1) {
    if (mode !== 'gameplay') return { accepted: false, reason: 'not_gameplay' };
    const rotators = currentLevel?.rotators || [];
    if (rotators.length === 0) return { accepted: false, reason: 'no_rotators' };

    let targetId = rotatorId;
    if (!targetId) {
      const idx = toolbarRotatorCursor % rotators.length;
      targetId = rotators[idx].id;
      toolbarRotatorCursor = (toolbarRotatorCursor + 1) % rotators.length;
    }

    const res = controller.rotateTurret(targetId, Number(deltaSteps) || 1);
    if (res.accepted) {
      audio.playRotatorTurn();
      levelScene?.updateRotators?.(res.rotatorStates || controller.getRotatorStates(), 0.016);
      gameScene.updateMatrixWorld?.(true);
      syncFrameSimulation(0);
      renderActiveScene();
    } else if (res.locked) {
      ui.showToast(getLocalizedUi(lang).toastTurretLocked, 2200);
    }
    return res;
  }

  function switchActor(actorId = null) {
    const actors = currentLevel?.actors || [];
    if (actors.length < 2) return false;
    let targetId = actorId;
    if (!targetId) {
      const curIdx = actors.findIndex((a) => a.id === controller.getActiveActorId());
      targetId = actors[(curIdx + 1) % actors.length]?.id;
    }
    const ok = controller.switchActor(targetId);
    if (ok) {
      audio.playTileTap();
      syncFrameSimulation(0);
      renderActiveScene();
    } else if (controller.isCrossingBridge()) {
      ui.showToast(getLocalizedUi(lang).toastSwitchLocked, 1800);
    }
    return ok;
  }

  function walkToNode(nodeId, { immediate = false } = {}) {
    if (mode !== 'gameplay') return { accepted: false, reason: 'not_gameplay' };
    const res = controller.commandMoveTo(nodeId);
    const wp = getSafeNodeWorldPos(nodeId);
    if (wp) spawnLotusRipple(wp, res.accepted);
    if (res.accepted) {
      audio.playTileTap();
      if (immediate) {
        controller.stepUntilIdle(20, 0.05);
      }
      syncFrameSimulation(0);
      renderActiveScene();
    } else {
      ui.showToast(getLocalizedUi(lang).toastPathBlocked, 2000);
    }
    return res;
  }

  function togglePlateOrStep(targetId, options = {}) {
    if (!targetId) return { accepted: false, reason: 'missing_target' };
    const plate = (currentLevel?.plates || []).find((p) => p.id === targetId || p.nodeId === targetId);
    const nodeId = plate ? plate.nodeId : targetId;
    return walkToNode(nodeId, { immediate: options.immediate !== false });
  }

  function playEnding(endingKey = 'A', { seekSeconds = null } = {}) {
    const key = ['A', 'B', 'C'].includes(String(endingKey).toUpperCase())
      ? String(endingKey).toUpperCase()
      : 'A';

    stageTransition.active = false;
    stageTransition.phase = 'idle';
    mode = 'cinematic';
    ui.setTitleVisible(false);
    ui.closeEpilogueMural();
    ui.setCinematicActive(true, key);
    audio.playEndingMusic(key);

    endingDirector.start(key);
    if (typeof seekSeconds === 'number' && !Number.isNaN(seekSeconds)) {
      endingDirector.seekTo(seekSeconds);
      const st = endingDirector.getState();
      audio.updateEndingAudio(key, st.elapsed, st.ringSpeed);
      ui.updateCinematicSubtitle(st.activeSubtitle, st);
    } else {
      const st = endingDirector.getState();
      ui.updateCinematicSubtitle(st.activeSubtitle, st);
    }
    renderActiveScene();
    return endingDirector.getState();
  }

  function seekEndingTo(seconds = 0) {
    if (mode !== 'cinematic' || !endingDirector.endingKey) {
      playEnding(ui.selectedEndingId || 'C');
    }
    const st = endingDirector.seekTo(Number(seconds) || 0);
    audio.updateEndingAudio(st.endingKey, st.elapsed, st.ringSpeed);
    ui.updateCinematicSubtitle(st.activeSubtitle, st);
    renderActiveScene();
    return st;
  }

  function skipEnding() {
    if (mode === 'cinematic' || endingDirector.active) {
      const st = endingDirector.skip();
      audio.stopEndingMusic();
      mode = 'epilogue';
      ui.setCinematicActive(false);
      ui.showEpilogueMural(st.endingKey || ui.selectedEndingId || 'C');
      renderActiveScene();
      return st;
    }
    const key = ui.selectedEndingId || 'C';
    mode = 'epilogue';
    ui.showEpilogueMural(key);
    return { skipped: true, endingKey: key };
  }

  function showEndingMural(endingKey = 'C') {
    const key = ['A', 'B', 'C'].includes(String(endingKey).toUpperCase())
      ? String(endingKey).toUpperCase()
      : 'C';
    if (endingDirector.active) {
      endingDirector.dispose();
    }
    audio.stopEndingMusic();
    mode = 'epilogue';
    ui.setTitleVisible(false);
    ui.setCinematicActive(false);
    ui.showEpilogueMural(key);
    renderActiveScene();
    return getState();
  }

  function solveCurrentStage({ autoAdvancePortal = false } = {}) {
    if (mode !== 'gameplay') {
      loadStage(currentLevel?.chapterId || 1, currentLevel?.stageIndex || 0, { skipIntro: true });
    }
    if (ui.isDialogueOpen()) {
      ui.closeDialogue();
    }
    const steps = currentLevel?.automatedSolution || [];
    let stepsExecuted = 0;

    for (const step of steps) {
      if (step.action === 'rotate') {
        rig.setAzimuthImmediate(Number(step.deg));
        syncFrameSimulation(0);
      } else if (step.action === 'rotateTurret') {
        const res = controller.rotateTurret(step.rotatorId, step.deltaSteps ?? 1);
        levelScene?.snapRotators?.(res.rotatorStates || controller.getRotatorStates());
        gameScene.updateMatrixWorld?.(true);
        syncFrameSimulation(0);
      } else if (step.action === 'switch') {
        controller.switchActor(step.actorId);
        syncFrameSimulation(0);
      } else if (step.action === 'move') {
        const mv = controller.commandMoveTo(step.nodeId);
        if (mv.accepted) {
          controller.stepUntilIdle(20, 0.05);
        }
        syncFrameSimulation(0);
      }
      stepsExecuted += 1;
    }

    if (autoAdvancePortal && stageTransition.active && stageTransition.targetStageIndex != null) {
      const { targetChapterId, targetStageIndex } = stageTransition;
      stageTransition.active = false;
      stageTransition.phase = 'idle';
      stageTransition.elapsed = 0;
      loadStage(targetChapterId, targetStageIndex, { skipIntro: true, fromPortal: true });
      stageTransition.phase = 'idle';
      levelScene?.setStageTransitionState?.('idle', 0);
    }

    renderActiveScene();
    return {
      stageId: currentLevel?.stageId,
      stepsExecuted,
      stageInfo: controller.getStageInfo(),
      state: getState()
    };
  }

  // Subscribe stage / chapter progression events
  bus.on(EVENTS.PLATE_TOGGLED, (payload) => {
    if (payload?.active !== true) return;
    const chId = currentLevel?.chapterId || currentLevel?.id;
    const story = getLocalizedChapterStory(chId, lang) || CHAPTER_STORIES[chId];
    if ((currentLevel?.stageIndex || 0) === 0 && story?.midResonance && !ui.isDialogueOpen() && payload?.plateId) {
      if (!midResonanceShown) {
        midResonanceShown = true;
        ui.showDialogue(story.midResonance, {
          title: getLocalizedUi(lang).dlgTitleResonance(chId),
          source: { kind: 'chapter_story', chapterId: chId, part: 'midResonance' }
        });
      }
    }
  });

  bus.on(EVENTS.STAGE_COMPLETED, (payload) => {
    if (currentLevel?.stageId) {
      completedStageIds.add(currentLevel.stageId);
      persistSet(STORAGE_KEYS.completedStages, completedStageIds);
    }
    if (
      payload &&
      payload.nextStageIndex !== null &&
      payload.nextStageIndex !== undefined &&
      currentLevel?.hasNextStage &&
      !stageTransition.active
    ) {
      stageTransition.active = true;
      stageTransition.phase = 'sink';
      stageTransition.elapsed = 0;
      stageTransition.targetChapterId = currentLevel.chapterId;
      stageTransition.targetStageIndex = Number(payload.nextStageIndex);
      audio.playStagePortal();
      ui.showToast(
        getLocalizedUi(lang).toastNextStagePortal(
          stageTransition.targetStageIndex + 1,
          currentLevel.totalStages
        ),
        1800
      );
    }
  });

  bus.on(EVENTS.NAV_GOAL_REACHED, () => {
    if (!currentLevel) return;
    const chId = currentLevel.chapterId || currentLevel.id;
    completedChapters.add(chId);
    persistSet(STORAGE_KEYS.completedChapters, completedChapters);
    if (currentLevel.stageId) {
      completedStageIds.add(currentLevel.stageId);
      persistSet(STORAGE_KEYS.completedStages, completedStageIds);
    }

    ui.showChapterCleared(currentLevel);

    const story = getLocalizedChapterStory(chId, lang) || CHAPTER_STORIES[chId];
    const stageMeta = getLocalizedStageMeta(currentLevel, lang);
    if (story?.outro) {
      ui.showDialogue(story.outro, {
        title: getLocalizedUi(lang).dlgTitleOutro(chId, stageMeta.title || currentLevel.title),
        source: { kind: 'chapter_story', chapterId: chId, part: 'outro' },
        onClose: () => {
          if (chId >= 12) {
            ui.openEndingModal();
          }
        }
      });
    } else if (chId >= 12) {
      ui.openEndingModal();
    }
  });

  // Canvas Raycasting & Pointer Drag
  const raycaster = new THREE.Raycaster();
  const pointerDownInfo = { active: false, x: 0, y: 0, time: 0, moved: false };

  function handleCanvasTap(clientX, clientY) {
    if (mode !== 'gameplay' || !levelScene || stageTransition.active) return;
    const rect = renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1,
      -((clientY - rect.top) / Math.max(1, rect.height)) * 2 + 1
    );
    raycaster.setFromCamera(ndc, rig.camera);

    // 1. Lore NPCs
    if (levelScene.npcClickables?.length) {
      const npcHits = raycaster.intersectObjects(levelScene.npcClickables, false);
      if (npcHits.length > 0) {
        const loreId = npcHits[0].object?.userData?.loreId;
        if (loreId) {
          triggerLore(loreId);
          return;
        }
      }
    }

    // 2. Rotator Crank Handles
    if (levelScene.rotatorClickables?.length) {
      const rotHits = raycaster.intersectObjects(levelScene.rotatorClickables, false);
      if (rotHits.length > 0) {
        const rotatorId = rotHits[0].object?.userData?.rotatorId;
        if (rotatorId) {
          rotateTurret(rotatorId, 1);
          return;
        }
      }
    }

    // 3. Walkable Tiles
    if (levelScene.pickableMeshes?.length) {
      const tileHits = raycaster.intersectObjects(levelScene.pickableMeshes, false);
      if (tileHits.length > 0) {
        const hitObj = tileHits[0].object;
        const nodeId = hitObj?.userData?.nodeId;
        if (nodeId) {
          walkToNode(nodeId);
        }
      }
    }
  }

  const canvas = renderer.domElement;
  canvas.addEventListener('pointerdown', (e) => {
    audio.unlock();
    pointerDownInfo.active = true;
    pointerDownInfo.x = e.clientX;
    pointerDownInfo.y = e.clientY;
    pointerDownInfo.time = performance.now();
    pointerDownInfo.moved = false;
    if (mode === 'gameplay') {
      rig.beginDrag(e.clientX);
    }
  });

  window.addEventListener('pointermove', (e) => {
    if (mode === 'title' || mode === 'entering_portal') {
      const w = Math.max(1, window.innerWidth);
      const h = Math.max(1, window.innerHeight);
      pointerNorm = {
        x: (e.clientX / w) * 2 - 1,
        y: (e.clientY / h) * 2 - 1
      };
    }
    if (!pointerDownInfo.active) return;
    if (Math.hypot(e.clientX - pointerDownInfo.x, e.clientY - pointerDownInfo.y) > 8) {
      pointerDownInfo.moved = true;
    }
    if (mode === 'gameplay') {
      rig.moveDrag(e.clientX);
    }
  });

  window.addEventListener('pointerup', (e) => {
    if (!pointerDownInfo.active) return;
    const dist = Math.hypot(e.clientX - pointerDownInfo.x, e.clientY - pointerDownInfo.y);
    const elapsedTap = performance.now() - pointerDownInfo.time;
    pointerDownInfo.active = false;
    if (mode === 'gameplay') {
      rig.endDrag();
      if (dist < 9 && elapsedTap < 420 && !ui.isDialogueOpen()) {
        handleCanvasTap(e.clientX, e.clientY);
      }
    }
  });

  canvas.addEventListener(
    'wheel',
    (e) => {
      if (mode !== 'gameplay') return;
      e.preventDefault();
      rig.adjustZoom(e.deltaY > 0 ? 1.07 : 0.93);
    },
    { passive: false }
  );

  window.addEventListener('keydown', (e) => {
    audio.unlock();
    if (mode !== 'gameplay') {
      if (mode === 'title' && e.key === 'Enter') {
        startFromTitle({ instant: false });
      } else if (mode === 'cinematic' && e.key === 'Escape') {
        skipEnding();
      }
      return;
    }

    if (e.key === 'q' || e.key === 'Q' || e.key === 'ArrowLeft') {
      rig.rotateStep(-1);
    } else if (e.key === 'e' || e.key === 'E' || e.key === 'ArrowRight') {
      rig.rotateStep(1);
    } else if (e.key === 'r' || e.key === 'R') {
      if ((currentLevel?.rotators || []).length > 0) {
        rotateTurret(null, 1);
      }
    } else if (e.key === 'Tab') {
      if ((currentLevel?.actors || []).length >= 2) {
        e.preventDefault();
        switchActor(null);
      }
    } else if ((e.key === ' ' || e.key === 'Enter') && ui.isDialogueOpen()) {
      e.preventDefault();
      ui.advanceDialogue();
    }
  });

  function handleResize() {
    const width = Math.max(320, window.innerWidth || 1280);
    const height = Math.max(240, window.innerHeight || 720);
    const aspect = width / height;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);

    if (titleCamera.isOrthographicCamera) {
      configureTitleOrthoCamera(titleCamera, width, height);
    } else {
      titleCamera.aspect = aspect;
      titleCamera.updateProjectionMatrix();
    }

    endingCamera.aspect = aspect;
    endingCamera.updateProjectionMatrix();

    rig.resize(width, height);
    renderActiveScene();
  }
  window.addEventListener('resize', handleResize);

  // Pre-stage Chapter 1 Stage 0 state silently while presenting 3D Title Diorama
  configureGameplayStage(1, 0, { skipIntro: true, targetMode: 'title' });
  mode = 'title';
  ui.setTitleVisible(true);
  renderActiveScene();

  const splash = document.getElementById('lotus-boot-splash');
  if (splash) {
    splash.classList.add('is-hidden');
    window.setTimeout(() => splash.remove(), 450);
  }

  let prevTs = performance.now();
  function animate(now) {
    requestAnimationFrame(animate);
    const dt = Math.min((now - prevTs) / 1000, 0.05);
    prevTs = now;
    totalElapsed += dt;

    if (mode === 'title') {
      titleDiorama.update(dt, pointerNorm, titleCamera);
    } else if (mode === 'entering_portal') {
      portalProgress = Math.min(1, portalProgress + dt / 0.65);
      titleDiorama.update(dt, pointerNorm, titleCamera);
      titleDiorama.enterPortalAnimation(portalProgress, titleCamera);
      if (portalProgress >= 1) {
        loadStage(1, 0, { skipIntro: false });
      }
    } else if (mode === 'cinematic') {
      endingDirector.update(dt);
      const st = endingDirector.getState();
      if (endingDirector.active) {
        audio.updateEndingAudio(st.endingKey, st.elapsed, st.ringSpeed);
        ui.updateCinematicSubtitle(st.activeSubtitle, st);
      }
    } else if (mode === 'gameplay') {
      if (stageTransition.active) {
        stageTransition.elapsed += dt;
        if (stageTransition.phase === 'sink' && stageTransition.elapsed >= stageTransition.sinkDuration) {
          loadStage(stageTransition.targetChapterId, stageTransition.targetStageIndex, {
            skipIntro: true,
            fromPortal: true
          });
          stageTransition.phase = 'rise';
          stageTransition.elapsed = 0;
        } else if (
          stageTransition.phase === 'rise' &&
          stageTransition.elapsed >= stageTransition.riseDuration
        ) {
          stageTransition.active = false;
          stageTransition.phase = 'idle';
          stageTransition.elapsed = 0;
          levelScene?.setStageTransitionState?.('idle', 0);
        }
      }

      levelEnv?.update(dt, totalElapsed);
      updateRipples(dt);
      syncFrameSimulation(dt);
    }

    renderActiveScene();
  }
  requestAnimationFrame(animate);

  function getState() {
    const stageInfo = controller.getStageInfo();
    const rotStates = controller.getRotatorStates();
    return {
      mode,
      titleActive: mode === 'title' || mode === 'entering_portal',
      chapterId: currentLevel?.chapterId || currentLevel?.id || 1,
      chapterTitle: currentLevel?.title || '',
      stageId: currentLevel?.stageId || 'ch1_s1',
      stageIndex: stageInfo.stageIndex ?? (currentLevel?.stageIndex || 0),
      totalStages: stageInfo.totalStages ?? (currentLevel?.totalStages || 1),
      globalStageNumber: currentLevel?.globalStageNumber || 1,
      totalGlobalStages: getTotalStageCount(),
      hasNextStage: Boolean(currentLevel?.hasNextStage),
      isFinalStage: Boolean(currentLevel?.isFinalStage),
      stageCompleted: Boolean(stageInfo.stageCompleted),
      azimuthDeg: rig.currentAzimuthDeg,
      targetAzimuthDeg: rig.targetAzimuthDeg,
      isRotating: Math.abs(rig.currentAzimuthDeg - rig.targetAzimuthDeg) > 0.1,
      isLocked: lastSeamEval?.isLocked || false,
      isCrossingBridge: controller.isCrossingBridge(),
      activeSeamIds: lastSeamEval?.activeSeamIds || [],
      activePlates: [...controller.getActivePlates()],
      rotators: (currentLevel?.rotators || []).map((r) => ({
        id: r.id,
        quarterTurns: rotStates[r.id] ?? r.initialQuarterTurns ?? 0
      })),
      rotatorStates: rotStates,
      activePropStates: levelScene?.getActivePropStates?.() || null,
      goalReached: Boolean(stageInfo.goalReached),
      actors: controller.getActorsSnapshot(),
      activeActorId: controller.getActiveActorId(),
      completedChapters: [...completedChapters],
      completedStageIds: [...completedStageIds],
      discoveredLoreIds: [...discoveredLoreIds],
      isDialogueOpen: ui.isDialogueOpen(),
      dialogueState: ui.getDialogueState(),
      selectedEndingId: ui.selectedEndingId,
      endingState: endingDirector.getState(),
      bgMode,
      lang,
      stageTransition: {
        active: stageTransition.active,
        phase: stageTransition.phase
      },
      chaptersTotal: CHAPTERS.length
    };
  }

  window.__lotusGame = {
    getState,
    setBgMode: (nextMode) => setBgMode(nextMode),
    toggleBgMode,
    getBgMode: () => bgMode,
    setLanguage: (nextLang) => setLanguage(nextLang),
    getLanguage: () => lang,
    openLanguageModal: () => {
      ui.openLanguageModal();
      return getState();
    },
    startFromTitle,
    showTitle,
    loadStage: (chOrId, idx = 0, opts = {}) => {
      loadStage(chOrId, Number(idx) || 0, opts);
      renderActiveScene();
      return getState();
    },
    loadChapter: (n, idx = 0, opts = {}) => {
      loadChapter(Number(n), Number(idx) || 0, opts);
      renderActiveScene();
      return getState();
    },
    rotateCameraTo: (deg, { smooth = false } = {}) => {
      if (mode !== 'gameplay') loadStage(currentLevel?.chapterId || 1, currentLevel?.stageIndex || 0, { skipIntro: true });
      const targetDeg = Number(deg);
      if (smooth) {
        rig.targetAzimuthDeg = targetDeg;
      } else {
        rig.setAzimuthImmediate(targetDeg);
      }
      syncFrameSimulation(0);
      renderActiveScene();
      return getState();
    },
    rotateStep: (d) => {
      if (mode !== 'gameplay') loadStage(currentLevel?.chapterId || 1, currentLevel?.stageIndex || 0, { skipIntro: true });
      const res = rig.rotateStep(Number(d));
      syncFrameSimulation(0);
      renderActiveScene();
      return res;
    },
    setAzimuthImmediate: (deg) => {
      if (mode !== 'gameplay') loadStage(currentLevel?.chapterId || 1, currentLevel?.stageIndex || 0, { skipIntro: true });
      rig.setAzimuthImmediate(Number(deg));
      syncFrameSimulation(0);
      renderActiveScene();
      return getState();
    },
    rotateTurret: (rotatorId = null, deltaSteps = 1) => rotateTurret(rotatorId, deltaSteps),
    switchActor: (id) => switchActor(id),
    togglePlateOrStep: (id, opts = {}) => togglePlateOrStep(id, opts),
    walkToNode: (id, opts = {}) => walkToNode(id, opts),
    moveToNode: (id) => walkToNode(id, { immediate: false }),
    triggerNpcDialogue: (loreId) => triggerLore(loreId),
    triggerLore: (loreId) => triggerLore(loreId),
    advanceDialoguePage: () => {
      ui.advanceDialogue();
      return ui.getDialogueState();
    },
    advanceDialogue: () => ui.advanceDialogue(),
    closeDialogue: () => ui.closeDialogue(),
    solveCurrentStage: (opts = {}) => solveCurrentStage(opts),
    triggerEndingAltar: () => {
      ui.openEndingModal();
      return getState();
    },
    triggerEnding: (choice) => {
      if (choice) return playEnding(choice);
      ui.openEndingModal();
      return getState();
    },
    playEnding,
    seekEndingTo,
    skipEnding,
    showEndingMural,
    getActivePropStates: () => levelScene?.getActivePropStates?.() || null,
    getRotatorStates: () => controller.getRotatorStates(),
    getPortraitUri: (speakerId) => getPortraitDataUri(speakerId),
    getScreenPosOfNode: (nodeId) => {
      if (levelScene?.pickableMeshes) {
        gameScene.updateMatrixWorld?.(true);
        for (const hitMesh of levelScene.pickableMeshes) {
          if (hitMesh.userData?.nodeId === nodeId && hitMesh.userData?.pickType === 'tile') {
            const wp = new THREE.Vector3();
            hitMesh.getWorldPosition(wp);
            return rig.projectWorldToScreen(wp);
          }
        }
      }
      const wp = getSafeNodeWorldPos(nodeId);
      if (!wp) return null;
      const node = graph.getNode(nodeId);
      const topY = wp.y + 0.503 + (node?.walkYOffset || 0) + (node?.isStair ? 0.12 : 0);
      return rig.projectWorldToScreen({ x: wp.x, y: topY, z: wp.z });
    },
    getScreenPosOfLore: (loreId) => {
      if (!levelScene?.npcClickables) return null;
      for (const hitMesh of levelScene.npcClickables) {
        if (hitMesh.userData?.loreId === loreId) {
          const wp = new THREE.Vector3();
          hitMesh.getWorldPosition(wp);
          return rig.projectWorldToScreen(wp);
        }
      }
      return null;
    },
    getScreenPosOfRotator: (rotatorId) => {
      if (!levelScene?.rotatorClickables) return null;
      for (const hitMesh of levelScene.rotatorClickables) {
        if (!rotatorId || hitMesh.userData?.rotatorId === rotatorId) {
          const wp = new THREE.Vector3();
          hitMesh.getWorldPosition(wp);
          return rig.projectWorldToScreen(wp);
        }
      }
      return null;
    },
    getAudioDebugState: () => audio.getEndingAudioState()
  };

  return window.__lotusGame;
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const autoStart = () => {
    if (!window.__lotusGame) {
      bootCorridorOfTheLotus();
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoStart, { once: true });
  } else {
    autoStart();
  }
}
