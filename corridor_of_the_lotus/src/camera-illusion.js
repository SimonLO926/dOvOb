import {
  DEFAULT_SEAM_THRESHOLD_PX,
  EVENTS,
  ISO_ELEVATION_RAD,
  MAGNET_TOLERANCE_DEG,
  SNAP_TOLERANCE_DEG,
  normalizeDeg,
  normalizeQuarterTurns,
  rotatePointAroundPivotY,
  shortestAngleDiffDeg,
} from './contracts.js';

const CANONICAL_CARDINALS = [45, 135, 225, 315];
const MIN_ZOOM_SCALE = 0.65;
const MAX_ZOOM_SCALE = 1.85;
const DRAG_DEG_PER_PX = 0.38;
const DAMP_SPEED = 12;

function toVec3Obj(v) {
  if (!v) return null;
  if (Array.isArray(v)) {
    return {
      x: Number(v[0]) || 0,
      y: Number(v[1]) || 0,
      z: Number(v[2]) || 0,
    };
  }
  return {
    x: Number(v.x) || 0,
    y: Number(v.y) || 0,
    z: Number(v.z) || 0,
  };
}

function findRotatorById(rotators, rid) {
  if (!rotators || !rid) return null;
  if (rotators instanceof Map) return rotators.get(rid) || null;
  if (Array.isArray(rotators)) return rotators.find((r) => r && r.id === rid) || null;
  if (typeof rotators === 'object') return rotators[rid] || null;
  return null;
}

function findRotatorForNode(nodeId, navGraph, rotators) {
  if (!nodeId) return null;
  if (typeof navGraph?.getNodeRotator === 'function') {
    const r = navGraph.getNodeRotator(nodeId);
    if (r) return r;
  }
  if (!rotators) return null;
  const list =
    rotators instanceof Map
      ? [...rotators.values()]
      : Array.isArray(rotators)
        ? rotators
        : Object.values(rotators);
  for (const r of list) {
    if (r && Array.isArray(r.nodeIds) && r.nodeIds.includes(nodeId)) {
      return r;
    }
  }
  return null;
}

function findRotatorAncestorGroup(object) {
  let cur = object?.parent || null;
  while (cur) {
    const ud = cur.userData;
    if (ud?.isRotatorGroup === true && ud?.rotatorId) {
      return { group: cur, rotatorId: ud.rotatorId };
    }
    if (ud?.rotatorId !== undefined && cur.isGroup) {
      return { group: cur, rotatorId: ud.rotatorId };
    }
    if (typeof cur.name === 'string' && cur.name.startsWith('rotator_')) {
      return { group: cur, rotatorId: ud?.rotatorId || cur.name.slice('rotator_'.length) };
    }
    cur = cur.parent;
  }
  return null;
}

function getRootAncestor(object) {
  let cur = object;
  while (cur && cur.parent) {
    cur = cur.parent;
  }
  return cur;
}

function dedupeAngles(angles) {
  const out = [];
  for (const raw of angles) {
    if (!Number.isFinite(raw)) continue;
    const norm = normalizeDeg(raw);
    const exists = out.some((existing) => Math.abs(shortestAngleDiffDeg(existing, norm)) < 1e-4);
    if (!exists) {
      out.push(norm);
    }
  }
  return out;
}

function resolveHitMeta(object) {
  let cur = object;
  let nodeId;
  let rotatorId;
  let propId;
  const pierColSet = new Set();
  let ignoreOcclusion = false;
  let visible = true;

  while (cur) {
    if (cur.visible === false) {
      visible = false;
    }
    const ud = cur.userData;
    if (ud) {
      if (ud.ignoreOcclusion === true) {
        ignoreOcclusion = true;
      }
      if (nodeId === undefined && ud.nodeId !== undefined) {
        nodeId = ud.nodeId;
      }
      if (rotatorId === undefined && ud.rotatorId !== undefined) {
        rotatorId = ud.rotatorId;
      }
      if (propId === undefined && ud.propId !== undefined) {
        propId = ud.propId;
      }
      if (Array.isArray(ud.pierColNodeIds)) {
        for (const cid of ud.pierColNodeIds) {
          if (cid !== undefined && cid !== null) pierColSet.add(cid);
        }
      }
    }
    cur = cur.parent;
  }

  return {
    nodeId,
    rotatorId,
    propId,
    pierColNodeIds: pierColSet.size > 0 ? [...pierColSet] : undefined,
    ignoreOcclusion,
    visible,
  };
}

/**
 * Orthographic Isometric Camera + Screen-Space Optical Illusion Evaluator.
 */
export class OrthographicIllusionRig {
  /**
   * @param {object} opts
   * @param {object} opts.THREE Three.js namespace
   * @param {object} [opts.bus] Event bus from createEventBus()
   * @param {object} [opts.navGraph] Optional DynamicNavGraph instance for live rotated node queries
   * @param {number} [opts.viewportWidth=1280]
   * @param {number} [opts.viewportHeight=720]
   * @param {number} [opts.distance=48]
   * @param {number} [opts.baseHalfHeight=7.5]
   * @param {number} [opts.initialAzimuthDeg=45]
   * @param {{ x: number, y: number, z: number }} [opts.target]
   */
  constructor({
    THREE,
    bus = null,
    navGraph = null,
    viewportWidth = 1280,
    viewportHeight = 720,
    distance = 48,
    baseHalfHeight = 7.5,
    initialAzimuthDeg = 45,
    target = { x: 0, y: 0, z: 0 },
  } = {}) {
    if (!THREE) {
      throw new Error('OrthographicIllusionRig requires { THREE } in constructor');
    }

    this.THREE = THREE;
    this.bus = bus;
    this._navGraph = navGraph || null;
    this.viewportWidth = Math.max(1, Number(viewportWidth) || 1280);
    this.viewportHeight = Math.max(1, Number(viewportHeight) || 720);
    this.distance = Number(distance) || 48;
    this.baseHalfHeight = Number(baseHalfHeight) || 7.5;
    this.zoomScale = 1.0;
    this.stepDeg = 90;
    this.target = {
      x: target?.x ?? 0,
      y: target?.y ?? 0,
      z: target?.z ?? 0,
    };

    this.seams = [];
    this.occluderMeshes = [];
    this.snapCandidatesDeg = [...CANONICAL_CARDINALS];
    this._gridAnchorDeg = normalizeDeg(initialAzimuthDeg);
    this.currentAzimuthDeg = normalizeDeg(initialAzimuthDeg);
    this.targetAzimuthDeg = normalizeDeg(initialAzimuthDeg);

    this._isLocked = false;
    this._lockReason = '';
    this._isDragging = false;
    this._lastDragX = 0;
    this._activeSeamIds = new Set();

    this._lastActivePlates = new Set();
    this._lastRotators = null;
    this._lastRotatorStates = {};
    this._lastNodeWorldPos = null;
    this._lastGetDynamicWorldPos = null;
    this._lastGetNodeWorldPos = null;
    this._standaloneOccluderBase = new WeakMap();

    this._raycaster = new THREE.Raycaster();
    this._ndcMid = new THREE.Vector2();
    this._tmpVecA = new THREE.Vector3();
    this._tmpVecB = new THREE.Vector3();

    this.camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 200);
    this._updateProjection();
    this._updateCameraTransform();

    this._unsubBridgeEnter = null;
    this._unsubBridgeExit = null;
    this._unsubRotatorTurned = null;
    if (this.bus && typeof this.bus.on === 'function') {
      this._unsubBridgeEnter = this.bus.on(EVENTS.NAV_BRIDGE_ENTER, () => {
        this.setRotationLocked(true, 'crossing_illusion_bridge');
      });
      this._unsubBridgeExit = this.bus.on(EVENTS.NAV_BRIDGE_EXIT, () => {
        this.setRotationLocked(false, '');
      });
      this._unsubRotatorTurned = this.bus.on(EVENTS.ROTATOR_TURNED, (payload) => {
        this._handleRotatorTurned(payload);
      });
    }
  }

  /**
   * Connects or updates the DynamicNavGraph used for live rotated node queries.
   * @param {object|null} navGraph
   */
  setNavGraph(navGraph) {
    this._navGraph = navGraph || null;
    if (this._navGraph) {
      if (typeof this._navGraph.getRotatorsSnapshot === 'function') {
        this._lastRotators = this._navGraph.getRotatorsSnapshot();
      } else if (this._navGraph.rotators !== undefined) {
        this._lastRotators = this._navGraph.rotators;
      }
      if (typeof this._navGraph.getRotatorStates === 'function') {
        this._lastRotatorStates = this._navGraph.getRotatorStates();
      }
    }
  }

  _handleRotatorTurned(payload = {}) {
    if (payload?.rotatorStates && typeof payload.rotatorStates === 'object') {
      this._lastRotatorStates = { ...payload.rotatorStates };
    } else if (
      payload?.rotatorId !== undefined &&
      payload?.rotatorId !== null &&
      payload?.quarterTurns !== undefined
    ) {
      this._lastRotatorStates = {
        ...(this._lastRotatorStates || {}),
        [payload.rotatorId]: normalizeQuarterTurns(payload.quarterTurns),
      };
    }

    if (payload?.rotators !== undefined) {
      this._lastRotators = payload.rotators;
    }
    if (payload?.nodeWorldPos !== undefined) {
      this._lastNodeWorldPos = payload.nodeWorldPos;
    }
    if (payload?.activePlates !== undefined) {
      this._lastActivePlates =
        payload.activePlates instanceof Set
          ? new Set(payload.activePlates)
          : new Set(payload.activePlates || []);
    }

    this.evaluateSeams({ fromRotatorEvent: true });
  }

  _captureStandaloneOccluders(occluderMeshes, rotators, rotatorStates) {
    this._standaloneOccluderBase = new WeakMap();
    if (!Array.isArray(occluderMeshes)) return;

    for (const mesh of occluderMeshes) {
      if (!mesh) continue;
      if (findRotatorAncestorGroup(mesh)) continue;
      const meta = resolveHitMeta(mesh);
      const rid =
        meta.rotatorId ??
        findRotatorForNode(meta.nodeId, this._navGraph, rotators)?.id ??
        null;
      if (!rid) continue;

      const explicitBase = toVec3Obj(mesh.userData?.basePos);
      if (explicitBase) {
        this._standaloneOccluderBase.set(mesh, {
          pos: explicitBase,
          rotY: Number(mesh.userData?.baseRotationY) || 0,
          capturedAtQ: 0,
        });
      } else {
        const rotDef = findRotatorById(rotators, rid);
        const initQ = normalizeQuarterTurns(
          rotatorStates?.[rid] ?? rotDef?.quarterTurns ?? rotDef?.initialQuarterTurns ?? 0
        );
        this._standaloneOccluderBase.set(mesh, {
          pos: {
            x: Number(mesh.position?.x) || 0,
            y: Number(mesh.position?.y) || 0,
            z: Number(mesh.position?.z) || 0,
          },
          rotY: Number(mesh.rotation?.y) || 0,
          capturedAtQ: initQ,
        });
      }
    }
  }

  get isLocked() {
    return this._isLocked;
  }

  get lockReason() {
    return this._lockReason;
  }

  _updateProjection() {
    const aspect = this.viewportWidth / this.viewportHeight;
    let effectiveHalfHeight;
    if (aspect < 1.0) {
      const portraitScale = Math.max(0.55, Math.min(1.0, aspect * 1.15));
      effectiveHalfHeight = this.baseHalfHeight / portraitScale / this.zoomScale;
    } else {
      effectiveHalfHeight = this.baseHalfHeight / this.zoomScale;
    }
    const halfWidth = effectiveHalfHeight * aspect;
    this.camera.left = -halfWidth;
    this.camera.right = halfWidth;
    this.camera.top = effectiveHalfHeight;
    this.camera.bottom = -effectiveHalfHeight;
    this.camera.near = 0.1;
    this.camera.far = 200;
    this.camera.updateProjectionMatrix();
  }

  _updateCameraTransform() {
    const rad = (this.currentAzimuthDeg * Math.PI) / 180;
    const horiz = this.distance * Math.cos(ISO_ELEVATION_RAD);
    const vert = this.distance * Math.sin(ISO_ELEVATION_RAD);
    this.camera.position.set(
      this.target.x + horiz * Math.sin(rad),
      this.target.y + vert,
      this.target.z + horiz * Math.cos(rad)
    );
    this.camera.lookAt(this.target.x, this.target.y, this.target.z);
    this.camera.updateMatrixWorld(true);
  }

  /**
   * Configures camera, seams, occluders, and snap angles immediately for a level.
   */
  configureLevel({
    seams = [],
    occluderMeshes = [],
    initialAzimuthDeg = 45,
    stepDeg = 90,
    baseHalfHeight = 7.5,
    target = { x: 0, y: 0, z: 0 },
    snapCandidatesDeg,
    navGraph,
    rotators,
    rotatorStates,
  } = {}) {
    this.seams = Array.isArray(seams) ? seams.map((s) => ({ ...s })) : [];
    this.occluderMeshes = Array.isArray(occluderMeshes) ? [...occluderMeshes] : [];
    this.stepDeg = Number(stepDeg) || 90;
    this.baseHalfHeight = Number(baseHalfHeight) || 7.5;
    this.zoomScale = 1.0;
    this.target = {
      x: target?.x ?? 0,
      y: target?.y ?? 0,
      z: target?.z ?? 0,
    };
    this._gridAnchorDeg = normalizeDeg(initialAzimuthDeg);
    this._activeSeamIds.clear();
    this._isDragging = false;

    this._lastActivePlates = new Set();
    this._lastNodeWorldPos = null;
    this._lastGetDynamicWorldPos = null;
    this._lastGetNodeWorldPos = null;

    if (navGraph !== undefined) {
      this._navGraph = navGraph || null;
    }

    if (rotators !== undefined) {
      this._lastRotators = rotators;
    } else if (this._navGraph) {
      this._lastRotators =
        typeof this._navGraph.getRotatorsSnapshot === 'function'
          ? this._navGraph.getRotatorsSnapshot()
          : (this._navGraph.rotators ?? null);
    } else {
      this._lastRotators = null;
    }

    if (rotatorStates !== undefined) {
      this._lastRotatorStates = { ...(rotatorStates || {}) };
    } else if (this._navGraph && typeof this._navGraph.getRotatorStates === 'function') {
      this._lastRotatorStates = this._navGraph.getRotatorStates();
    } else {
      this._lastRotatorStates = {};
      if (this._lastRotators) {
        const list =
          this._lastRotators instanceof Map
            ? [...this._lastRotators.values()]
            : Array.isArray(this._lastRotators)
              ? this._lastRotators
              : Object.values(this._lastRotators);
        for (const r of list) {
          if (r && r.id) {
            this._lastRotatorStates[r.id] = normalizeQuarterTurns(
              r.quarterTurns ?? r.initialQuarterTurns ?? 0
            );
          }
        }
      }
    }

    this._captureStandaloneOccluders(
      this.occluderMeshes,
      this._lastRotators,
      this._lastRotatorStates
    );

    if (this._isLocked) {
      this.setRotationLocked(false, '');
    }

    if (Array.isArray(snapCandidatesDeg) && snapCandidatesDeg.length > 0) {
      this.snapCandidatesDeg = dedupeAngles(snapCandidatesDeg);
    } else {
      const seamTargets = this.seams.map((s) => s.targetAzimuthDeg);
      this.snapCandidatesDeg = dedupeAngles([...CANONICAL_CARDINALS, ...seamTargets]);
    }

    this._updateProjection();
    this.setAzimuthImmediate(initialAzimuthDeg);
  }

  /**
   * Immediately snaps both current and target azimuth without damping lag.
   * @param {number} deg
   */
  setAzimuthImmediate(deg) {
    const prev = this.currentAzimuthDeg;
    const norm = normalizeDeg(deg);
    this.currentAzimuthDeg = norm;
    this.targetAzimuthDeg = norm;
    this._updateCameraTransform();
    if (Math.abs(shortestAngleDiffDeg(prev, norm)) > 1e-5) {
      this.bus?.emit(EVENTS.CAMERA_ROTATED, {
        azimuthDeg: this.currentAzimuthDeg,
        targetAzimuthDeg: this.targetAzimuthDeg,
      });
    }
  }

  /**
   * Sets zoom scale clamped within [0.65, 1.85] and updates projection.
   * @param {number} scale
   * @returns {number}
   */
  setZoomScale(scale) {
    const next = Number.isFinite(scale) ? scale : 1.0;
    this.zoomScale = Math.max(MIN_ZOOM_SCALE, Math.min(MAX_ZOOM_SCALE, next));
    this._updateProjection();
    return this.zoomScale;
  }

  /**
   * Adjusts zoom scale by delta.
   * @param {number} delta
   * @returns {number}
   */
  adjustZoom(delta) {
    return this.setZoomScale(this.zoomScale + (Number(delta) || 0));
  }

  /**
   * Updates viewport dimensions and recomputes responsive orthographic frustum.
   * @param {number} width
   * @param {number} height
   */
  resize(width, height) {
    this.viewportWidth = Math.max(1, Number(width) || 1);
    this.viewportHeight = Math.max(1, Number(height) || 1);
    this._updateProjection();
  }

  /**
   * Locks or unlocks camera rotation, emitting EVENTS.CAMERA_LOCK_CHANGED on state change.
   * @param {boolean} locked
   * @param {string} [reason='']
   */
  setRotationLocked(locked, reason = '') {
    const nextLocked = Boolean(locked);
    const nextReason = nextLocked ? String(reason || '') : '';
    if (nextLocked === this._isLocked && nextReason === this._lockReason) {
      return;
    }
    this._isLocked = nextLocked;
    this._lockReason = nextReason;
    if (nextLocked) {
      this._isDragging = false;
    }
    this.bus?.emit(EVENTS.CAMERA_LOCK_CHANGED, {
      locked: this._isLocked,
      reason: this._lockReason,
    });
  }

  /**
   * Rotates target azimuth by `deltaSteps * stepDeg` aligned to the level's step grid.
   * @param {number} deltaSteps
   * @returns {boolean}
   */
  rotateStep(deltaSteps) {
    if (this._isLocked) return false;
    const steps = Number(deltaSteps);
    if (!Number.isFinite(steps) || steps === 0) return false;

    const step = this.stepDeg || 90;
    const rel = shortestAngleDiffDeg(this._gridAnchorDeg, this.targetAzimuthDeg);
    const snapDeadzone = Math.min(0.5, step * 0.1);
    let nextGridIndex;
    if (steps > 0) {
      nextGridIndex = Math.floor((rel + snapDeadzone) / step) + steps;
    } else {
      nextGridIndex = Math.ceil((rel - snapDeadzone) / step) + steps;
    }
    this.targetAzimuthDeg = normalizeDeg(this._gridAnchorDeg + nextGridIndex * step);
    return true;
  }

  /**
   * Begins horizontal drag orbit at screen X coordinate.
   * @param {number} clientX
   * @returns {boolean}
   */
  beginDrag(clientX) {
    if (this._isLocked || !Number.isFinite(clientX)) {
      this._isDragging = false;
      return false;
    }
    this._isDragging = true;
    this._lastDragX = clientX;
    return true;
  }

  /**
   * Updates target azimuth smoothly during horizontal drag (~0.38 deg/px).
   * @param {number} clientX
   * @returns {boolean}
   */
  moveDrag(clientX) {
    if (this._isLocked || !this._isDragging || !Number.isFinite(clientX)) {
      return false;
    }
    const dx = clientX - this._lastDragX;
    this._lastDragX = clientX;
    this.targetAzimuthDeg = normalizeDeg(this.targetAzimuthDeg - dx * DRAG_DEG_PER_PX);
    return true;
  }

  /**
   * Ends horizontal drag and magnetically snaps to nearby candidate angles within +-MAGNET_TOLERANCE_DEG.
   * @returns {boolean}
   */
  endDrag() {
    if (!this._isDragging) return false;
    this._isDragging = false;
    if (this._isLocked) return false;

    let bestCandidate = null;
    let bestAbsDiff = Infinity;
    for (const candidate of this.snapCandidatesDeg) {
      const absDiff = Math.abs(shortestAngleDiffDeg(this.targetAzimuthDeg, candidate));
      if (absDiff <= MAGNET_TOLERANCE_DEG && absDiff < bestAbsDiff) {
        bestAbsDiff = absDiff;
        bestCandidate = candidate;
      }
    }
    if (bestCandidate !== null) {
      this.targetAzimuthDeg = normalizeDeg(bestCandidate);
    }
    return true;
  }

  /**
   * Smoothly damps current azimuth toward target azimuth and updates camera world matrices.
   * @param {number} dt Delta time in seconds
   */
  update(dt) {
    const prevAzimuth = this.currentAzimuthDeg;
    const diff = shortestAngleDiffDeg(this.currentAzimuthDeg, this.targetAzimuthDeg);

    if (Math.abs(diff) < 0.01) {
      this.currentAzimuthDeg = normalizeDeg(this.targetAzimuthDeg);
    } else {
      const safeDt = Math.max(0, Number.isFinite(dt) ? dt : 0);
      const alpha = 1 - Math.exp(-DAMP_SPEED * safeDt);
      this.currentAzimuthDeg = normalizeDeg(this.currentAzimuthDeg + diff * alpha);
      if (Math.abs(shortestAngleDiffDeg(this.currentAzimuthDeg, this.targetAzimuthDeg)) < 0.01) {
        this.currentAzimuthDeg = normalizeDeg(this.targetAzimuthDeg);
      }
    }

    this._updateCameraTransform();

    if (Math.abs(shortestAngleDiffDeg(prevAzimuth, this.currentAzimuthDeg)) > 1e-5) {
      this.bus?.emit(EVENTS.CAMERA_ROTATED, {
        azimuthDeg: this.currentAzimuthDeg,
        targetAzimuthDeg: this.targetAzimuthDeg,
      });
    }
  }

  /**
   * Projects a 3D world point to screen pixels and NDC coordinates.
   * @param {{ x: number, y: number, z: number }} worldVec3Like
   * @returns {{ xPx: number, yPx: number, ndcX: number, ndcY: number, ndcZ: number }}
   */
  projectWorldToScreen(worldVec3Like) {
    const vec =
      worldVec3Like && typeof worldVec3Like.clone === 'function'
        ? worldVec3Like.clone()
        : new this.THREE.Vector3(worldVec3Like.x, worldVec3Like.y, worldVec3Like.z);
    vec.project(this.camera);
    return {
      xPx: (vec.x * 0.5 + 0.5) * this.viewportWidth,
      yPx: (-vec.y * 0.5 + 0.5) * this.viewportHeight,
      ndcX: vec.x,
      ndcY: vec.y,
      ndcZ: vec.z,
    };
  }

  _resolveSeamEndpoint(seam, side, ctx) {
    const nodeId = side === 'A' ? (seam.nodeA ?? seam.from) : (seam.nodeB ?? seam.to);
    const staticRaw =
      side === 'A' ? (seam.seamA ?? seam.fromPos ?? null) : (seam.seamB ?? seam.toPos ?? null);
    const staticPt = toVec3Obj(staticRaw);

    const queryLiveNodePos = (id) => {
      if (!id) return null;
      if (typeof ctx.getNodeWorldPos === 'function') {
        const p = toVec3Obj(ctx.getNodeWorldPos(id, staticPt));
        if (p) return p;
      }
      if (ctx.navGraph && typeof ctx.navGraph.getNodeWorldPos === 'function') {
        const p = toVec3Obj(ctx.navGraph.getNodeWorldPos(id));
        if (p) return p;
      }
      if (ctx.nodeWorldPos && ctx.nodeWorldPos[id]) {
        const p = toVec3Obj(ctx.nodeWorldPos[id]);
        if (p) return p;
      }
      if (ctx.navGraph) {
        const n = ctx.navGraph.getNode?.(id) ?? ctx.navGraph.nodes?.get?.(id);
        const p = toVec3Obj(n?.pos ?? n?.basePos);
        if (p) return p;
      }
      return null;
    };

    const applyPlatformDelta = (pt) => {
      if (!pt) return pt;
      if (typeof ctx.getDynamicWorldPos === 'function') {
        return toVec3Obj(ctx.getDynamicWorldPos(nodeId, pt)) || pt;
      }
      return pt;
    };

    // Priority 1: Explicit getNodeWorldPos callback passed by caller
    if (typeof ctx.getNodeWorldPos === 'function' && nodeId) {
      const live = toVec3Obj(ctx.getNodeWorldPos(nodeId, staticPt));
      if (live) return live;
    }

    // Priority 2/3: Node belongs to a Y-axis rotator group/turret
    const rotator = findRotatorForNode(nodeId, ctx.navGraph, ctx.rotators);
    if (rotator) {
      const curQ = normalizeQuarterTurns(
        ctx.rotatorStates?.[rotator.id] ??
          rotator.quarterTurns ??
          rotator.initialQuarterTurns ??
          0
      );
      let liveNodePos = queryLiveNodePos(nodeId);
      const baseNode = ctx.navGraph?.getNode?.(nodeId) ?? ctx.navGraph?.nodes?.get?.(nodeId);
      const basePos = toVec3Obj(baseNode?.basePos ?? baseNode?.pos);

      if (!liveNodePos && basePos && rotator.pivot) {
        const r = rotatePointAroundPivotY(basePos, rotator.pivot, curQ);
        liveNodePos = { x: r[0], y: r[1], z: r[2] };
      }

      if (!staticPt) {
        return liveNodePos ? applyPlatformDelta(liveNodePos) : { x: 0, y: 0, z: 0 };
      }

      if (basePos && rotator.pivot) {
        if (
          Math.abs(staticPt.x - basePos.x) <= 0.05 &&
          Math.abs(staticPt.z - basePos.z) <= 0.05
        ) {
          const dy = staticPt.y - basePos.y;
          const baseTarget = liveNodePos
            ? { x: liveNodePos.x, y: liveNodePos.y + dy, z: liveNodePos.z }
            : (() => {
                const r = rotatePointAroundPivotY(staticPt, rotator.pivot, curQ);
                return { x: r[0], y: r[1], z: r[2] };
              })();
          return applyPlatformDelta(baseTarget);
        }

        const initDist = Math.hypot(staticPt.x - basePos.x, staticPt.z - basePos.z);
        const initDy = Math.abs(staticPt.y - basePos.y);

        const reqRaw = seam.requiredRotators?.[rotator.id];
        const reqQ = Array.isArray(reqRaw)
          ? reqRaw.length > 0
            ? normalizeQuarterTurns(reqRaw[0])
            : null
          : reqRaw !== undefined
            ? normalizeQuarterTurns(reqRaw)
            : null;

        let reqMatch = false;
        if (reqQ !== null && reqQ !== 0) {
          const [rx, ry, rz] = rotatePointAroundPivotY(basePos, rotator.pivot, reqQ);
          const reqDist = Math.hypot(staticPt.x - rx, staticPt.z - rz);
          const reqDy = Math.abs(staticPt.y - ry);
          if (reqDist <= 0.75 && reqDy <= 0.75 && reqDist + 1e-4 < initDist) {
            reqMatch = true;
          }
        }

        if (reqMatch) {
          const deltaQ = normalizeQuarterTurns(curQ - reqQ);
          const r = rotatePointAroundPivotY(staticPt, rotator.pivot, deltaQ);
          return applyPlatformDelta({ x: r[0], y: r[1], z: r[2] });
        }

        if (initDist <= 0.75 && initDy <= 0.75) {
          const r = rotatePointAroundPivotY(staticPt, rotator.pivot, curQ);
          return applyPlatformDelta({ x: r[0], y: r[1], z: r[2] });
        }

        if (liveNodePos) {
          return applyPlatformDelta(liveNodePos);
        }
      } else {
        if (ctx.nodeWorldPos?.[nodeId]) {
          const np = toVec3Obj(ctx.nodeWorldPos[nodeId]);
          if (np) return applyPlatformDelta(np);
        }
        if (rotator.pivot) {
          const r = rotatePointAroundPivotY(staticPt, rotator.pivot, curQ);
          return applyPlatformDelta({ x: r[0], y: r[1], z: r[2] });
        }
      }
    }

    // Priority 4: Static / non-rotator node (preserves v1 getDynamicWorldPos behavior)
    if (staticPt) {
      return applyPlatformDelta(staticPt);
    }

    const fallbackPos = queryLiveNodePos(nodeId);
    if (fallbackPos) {
      return applyPlatformDelta(fallbackPos);
    }
    return { x: 0, y: 0, z: 0 };
  }

  _resolveNodeCenter(nodeId, ctx = {}) {
    if (!nodeId) return null;
    const applyPlatformDelta = (pt) => {
      if (!pt) return null;
      if (typeof ctx.getDynamicWorldPos === 'function') {
        return toVec3Obj(ctx.getDynamicWorldPos(nodeId, pt)) || pt;
      }
      return pt;
    };

    const baseNode = ctx.navGraph?.getNode?.(nodeId) ?? ctx.navGraph?.nodes?.get?.(nodeId);
    const staticBase = toVec3Obj(baseNode?.basePos ?? baseNode?.pos);

    if (typeof ctx.getNodeWorldPos === 'function') {
      const live = toVec3Obj(ctx.getNodeWorldPos(nodeId, staticBase));
      if (live) return live;
    }

    const rotator = findRotatorForNode(nodeId, ctx.navGraph, ctx.rotators);
    if (rotator && staticBase && rotator.pivot) {
      const curQ = normalizeQuarterTurns(
        ctx.rotatorStates?.[rotator.id] ??
          rotator.quarterTurns ??
          rotator.initialQuarterTurns ??
          0
      );
      const [rx, ry, rz] = rotatePointAroundPivotY(staticBase, rotator.pivot, curQ);
      return applyPlatformDelta({ x: rx, y: ry, z: rz });
    }

    if (typeof ctx.getDynamicWorldPos === 'function' && staticBase) {
      return applyPlatformDelta(staticBase);
    }
    if (ctx.navGraph?.getNodeWorldPos) {
      const live = toVec3Obj(ctx.navGraph.getNodeWorldPos(nodeId));
      if (live) return live;
    }
    if (ctx.nodeWorldPos?.[nodeId]) {
      const np = toVec3Obj(ctx.nodeWorldPos[nodeId]);
      if (np) return applyPlatformDelta(np);
    }
    return staticBase ? applyPlatformDelta(staticBase) : null;
  }

  _applyTempDynamicOccluders(navGraph, resolvedRotators, resolvedRotatorStates) {
    const restores = [];
    const seenGroups = new Set();
    const seenMeshes = new Set();
    const roots = new Set();

    for (const mesh of this.occluderMeshes) {
      if (!mesh) continue;
      const root = getRootAncestor(mesh);
      if (root) roots.add(root);

      const groupInfo = findRotatorAncestorGroup(mesh);
      if (groupInfo) {
        const { group, rotatorId } = groupInfo;
        if (seenGroups.has(group)) continue;
        seenGroups.add(group);

        const rotObj = findRotatorById(resolvedRotators, rotatorId);
        const curQRaw =
          resolvedRotatorStates?.[rotatorId] ??
          rotObj?.quarterTurns ??
          rotObj?.initialQuarterTurns;

        if (curQRaw !== undefined && curQRaw !== null && group.rotation) {
          const curQ = normalizeQuarterTurns(curQRaw);
          const baseRotY = Number(group.userData?.baseRotationY) || 0;
          restores.push({
            type: 'group',
            obj: group,
            prevRotY: group.rotation.y,
          });
          group.rotation.y = baseRotY + curQ * (Math.PI / 2);
        }
        continue;
      }

      if (seenMeshes.has(mesh)) continue;
      seenMeshes.add(mesh);

      const meta = resolveHitMeta(mesh);
      const rid =
        meta.rotatorId ??
        findRotatorForNode(meta.nodeId, navGraph, resolvedRotators)?.id ??
        null;
      if (!rid) continue;

      const rotObj = findRotatorById(resolvedRotators, rid);
      const curQRaw =
        resolvedRotatorStates?.[rid] ??
        rotObj?.quarterTurns ??
        rotObj?.initialQuarterTurns;
      if (curQRaw === undefined || curQRaw === null || !rotObj?.pivot) continue;

      let base = this._standaloneOccluderBase.get(mesh);
      if (!base) {
        const explicitBase = toVec3Obj(mesh.userData?.basePos);
        base = explicitBase
          ? {
              pos: explicitBase,
              rotY: Number(mesh.userData?.baseRotationY) || 0,
              capturedAtQ: 0,
            }
          : {
              pos: {
                x: Number(mesh.position?.x) || 0,
                y: Number(mesh.position?.y) || 0,
                z: Number(mesh.position?.z) || 0,
              },
              rotY: Number(mesh.rotation?.y) || 0,
              capturedAtQ: normalizeQuarterTurns(rotObj.initialQuarterTurns ?? 0),
            };
        this._standaloneOccluderBase.set(mesh, base);
      }

      const deltaQ = normalizeQuarterTurns(normalizeQuarterTurns(curQRaw) - base.capturedAtQ);
      const [rx, ry, rz] = rotatePointAroundPivotY(base.pos, rotObj.pivot, deltaQ);
      restores.push({
        type: 'mesh',
        obj: mesh,
        prevPos: [
          Number(mesh.position?.x) || 0,
          Number(mesh.position?.y) || 0,
          Number(mesh.position?.z) || 0,
        ],
        prevRotY: Number(mesh.rotation?.y) || 0,
      });

      if (typeof mesh.position?.set === 'function') {
        mesh.position.set(rx, ry, rz);
      } else if (mesh.position) {
        mesh.position.x = rx;
        mesh.position.y = ry;
        mesh.position.z = rz;
      }
      if (mesh.rotation) {
        mesh.rotation.y = base.rotY + deltaQ * (Math.PI / 2);
      }
    }

    for (const root of roots) {
      if (typeof root?.updateMatrixWorld === 'function') {
        root.updateMatrixWorld(true);
      }
    }

    return { restores, roots };
  }

  _restoreTempDynamicOccluders(snapshot) {
    if (!snapshot) return;
    const { restores, roots } = snapshot;
    for (const entry of restores) {
      if (entry.type === 'group') {
        if (entry.obj.rotation) {
          entry.obj.rotation.y = entry.prevRotY;
        }
      } else if (entry.type === 'mesh') {
        const [px, py, pz] = entry.prevPos;
        if (typeof entry.obj.position?.set === 'function') {
          entry.obj.position.set(px, py, pz);
        } else if (entry.obj.position) {
          entry.obj.position.x = px;
          entry.obj.position.y = py;
          entry.obj.position.z = pz;
        }
        if (entry.obj.rotation) {
          entry.obj.rotation.y = entry.prevRotY;
        }
      }
    }
    for (const root of roots) {
      if (typeof root?.updateMatrixWorld === 'function') {
        root.updateMatrixWorld(true);
      }
    }
  }

  /**
   * Evaluates all configured optical illusion seams using plate gating, rotator gating,
   * angle tolerance, screen-space pixel alignment, and orthographic occlusion raycasting.
   * @param {object} [opts]
   * @param {Set<string>|Array<string>} [opts.activePlates]
   * @param {(nodeId: string, basePos: {x:number,y:number,z:number}) => {x:number,y:number,z:number}} [opts.getDynamicWorldPos]
   * @param {(nodeId: string, staticPos?: {x:number,y:number,z:number}|null) => {x:number,y:number,z:number}|number[]} [opts.getNodeWorldPos]
   * @param {object} [opts.navGraph]
   * @param {object} [opts.rotatorStates]
   * @param {Array|Map|object} [opts.rotators]
   * @param {object} [opts.nodeWorldPos]
   */
  evaluateSeams(opts = {}) {
    const {
      activePlates,
      getDynamicWorldPos,
      getNodeWorldPos,
      navGraph,
      rotatorStates,
      rotators,
      nodeWorldPos,
      fromRotatorEvent = false,
    } = opts || {};

    let plateSet;
    if (activePlates !== undefined) {
      plateSet = activePlates instanceof Set ? new Set(activePlates) : new Set(activePlates || []);
      this._lastActivePlates = new Set(plateSet);
    } else {
      plateSet = new Set(this._lastActivePlates);
    }

    if (getDynamicWorldPos !== undefined) {
      this._lastGetDynamicWorldPos = getDynamicWorldPos;
    }
    if (getNodeWorldPos !== undefined) {
      this._lastGetNodeWorldPos = getNodeWorldPos;
    }

    const resolvedNavGraph = navGraph !== undefined ? navGraph : this._navGraph;
    const resolvedRotators =
      rotators ??
      (resolvedNavGraph
        ? (typeof resolvedNavGraph.getRotatorsSnapshot === 'function'
            ? resolvedNavGraph.getRotatorsSnapshot()
            : resolvedNavGraph.rotators ?? null)
        : null) ??
      this._lastRotators;

    if (rotators !== undefined) {
      this._lastRotators = rotators;
    } else if (!this._lastRotators && resolvedRotators) {
      this._lastRotators = resolvedRotators;
    }

    const resolvedRotatorStates = { ...(this._lastRotatorStates || {}) };
    if (resolvedRotators) {
      const list =
        resolvedRotators instanceof Map
          ? [...resolvedRotators.values()]
          : Array.isArray(resolvedRotators)
            ? resolvedRotators
            : Object.values(resolvedRotators);
      for (const r of list) {
        if (r && r.id && resolvedRotatorStates[r.id] === undefined) {
          resolvedRotatorStates[r.id] = normalizeQuarterTurns(
            r.quarterTurns ?? r.initialQuarterTurns ?? 0
          );
        }
      }
    }
    if (resolvedNavGraph && typeof resolvedNavGraph.getRotatorStates === 'function') {
      Object.assign(resolvedRotatorStates, resolvedNavGraph.getRotatorStates());
    }
    if (rotatorStates && typeof rotatorStates === 'object') {
      for (const [rid, q] of Object.entries(rotatorStates)) {
        resolvedRotatorStates[rid] = normalizeQuarterTurns(q);
      }
    }
    if (rotatorStates !== undefined || resolvedNavGraph) {
      this._lastRotatorStates = { ...resolvedRotatorStates };
    }

    if (nodeWorldPos !== undefined) {
      this._lastNodeWorldPos = nodeWorldPos;
    }

    const resolvedGetDynamicWorldPos =
      typeof getDynamicWorldPos === 'function'
        ? getDynamicWorldPos
        : fromRotatorEvent
          ? this._lastGetDynamicWorldPos
          : null;
    const resolvedGetNodeWorldPos =
      typeof getNodeWorldPos === 'function'
        ? getNodeWorldPos
        : fromRotatorEvent
          ? this._lastGetNodeWorldPos
          : null;
    const resolvedNodeWorldPos = nodeWorldPos ?? this._lastNodeWorldPos ?? null;

    const endpointCtx = {
      navGraph: resolvedNavGraph,
      rotators: resolvedRotators,
      rotatorStates: resolvedRotatorStates,
      nodeWorldPos: resolvedNodeWorldPos,
      getDynamicWorldPos: resolvedGetDynamicWorldPos,
      getNodeWorldPos: resolvedGetNodeWorldPos,
    };

    const seamStatuses = [];
    const nextActiveSet = new Set();

    let nearestGateOkDiff = null;
    let nearestGateOkTarget = null;
    let nearestAnyDiff = null;
    let nearestAnyTarget = null;

    if (typeof this.camera?.updateMatrixWorld === 'function') {
      this.camera.updateMatrixWorld(true);
    }

    let occluderSnapshot = null;
    try {
      if (this.occluderMeshes.length > 0) {
        occluderSnapshot = this._applyTempDynamicOccluders(
          resolvedNavGraph,
          resolvedRotators,
          resolvedRotatorStates
        );
      }

      for (const seam of this.seams) {
        const seamNodeA = seam.nodeA ?? seam.from;
        const seamNodeB = seam.nodeB ?? seam.to;
        const toleranceDeg = seam.toleranceDeg ?? SNAP_TOLERANCE_DEG;
        const thresholdPx = seam.thresholdPx ?? DEFAULT_SEAM_THRESHOLD_PX;
        const requiredPlates = seam.requiredPlates || [];
        const blockedByPlates = seam.blockedByPlates || [];
        const allowOccluderSet = new Set(seam.allowOccluderIds || []);

        const plateOk =
          requiredPlates.every((p) => plateSet.has(p)) &&
          blockedByPlates.every((p) => !plateSet.has(p));

        let rotatorOk = true;
        if (seam.requiredRotators && typeof seam.requiredRotators === 'object') {
          for (const [rid, reqRaw] of Object.entries(seam.requiredRotators)) {
            const rotObj = findRotatorById(resolvedRotators, rid);
            const curRaw =
              resolvedRotatorStates?.[rid] ??
              rotObj?.quarterTurns ??
              rotObj?.initialQuarterTurns;
            if (curRaw === undefined || curRaw === null) {
              rotatorOk = false;
              break;
            }
            const curQ = normalizeQuarterTurns(curRaw);
            if (Array.isArray(reqRaw)) {
              if (!reqRaw.some((q) => curQ === normalizeQuarterTurns(q))) {
                rotatorOk = false;
                break;
              }
            } else if (curQ !== normalizeQuarterTurns(reqRaw)) {
              rotatorOk = false;
              break;
            }
          }
        }

        const angleDiffDeg = shortestAngleDiffDeg(this.currentAzimuthDeg, seam.targetAzimuthDeg);
        const angleOk = Math.abs(angleDiffDeg) <= toleranceDeg;

        if (
          nearestAnyDiff === null ||
          Math.abs(angleDiffDeg) < Math.abs(nearestAnyDiff)
        ) {
          nearestAnyDiff = angleDiffDeg;
          nearestAnyTarget = normalizeDeg(seam.targetAzimuthDeg);
        }
        if (
          plateOk &&
          rotatorOk &&
          (nearestGateOkDiff === null ||
            Math.abs(angleDiffDeg) < Math.abs(nearestGateOkDiff))
        ) {
          nearestGateOkDiff = angleDiffDeg;
          nearestGateOkTarget = normalizeDeg(seam.targetAzimuthDeg);
        }

        const rawA = this._resolveSeamEndpoint(seam, 'A', endpointCtx);
        const rawB = this._resolveSeamEndpoint(seam, 'B', endpointCtx);

        const projA = this.projectWorldToScreen(rawA);
        const projB = this.projectWorldToScreen(rawB);
        const pxDist = Math.hypot(projA.xPx - projB.xPx, projA.yPx - projB.yPx);
        const pxOk = pxDist <= thresholdPx;

        const posA = this._resolveNodeCenter(seamNodeA, endpointCtx);
        const posB = this._resolveNodeCenter(seamNodeB, endpointCtx);

        // Compute world direction from scene toward orthographic camera at screen center
        let toCam = null;
        if (this._raycaster && this.camera) {
          this._ndcMid.set(0, 0);
          this._raycaster.setFromCamera(this._ndcMid, this.camera);
          const camRayDir = this._raycaster.ray?.direction;
          if (camRayDir) {
            toCam = { x: -camRayDir.x, y: -camRayDir.y, z: -camRayDir.z };
          }
        }
        if (!toCam) {
          const azRad = ((this.currentAzimuthDeg || 0) * Math.PI) / 180;
          const sq = 1 / Math.sqrt(3);
          toCam = {
            x: Math.sin(azRad) * sq * Math.SQRT2,
            y: sq,
            z: Math.cos(azRad) * sq * Math.SQRT2,
          };
        }

        // Escher Depth-Parity Check: walking toward/away from camera along stepDir must match depth delta (posB - posA)·toCam
        let depthParityOk = true;
        if (posA && posB && toCam) {
          const camDepthDelta =
            (posB.x - posA.x) * toCam.x +
            (posB.y - posA.y) * toCam.y +
            (posB.z - posA.z) * toCam.z;
          let stepX = rawA.x - posA.x;
          let stepZ = rawA.z - posA.z;
          if (Math.hypot(stepX, stepZ) < 0.05 && Array.isArray(seam.stepDir)) {
            stepX = Number(seam.stepDir[0]) || 0;
            stepZ = Number(seam.stepDir[2]) || 0;
          }
          const stepTowardCam = stepX * toCam.x + stepZ * toCam.z;
          if (
            Math.abs(camDepthDelta) > 0.25 &&
            Math.abs(stepTowardCam) > 0.05 &&
            stepTowardCam * camDepthDelta < -0.01
          ) {
            depthParityOk = false;
          }
        }

        let occluded = false;
        let occluderNodeId = null;
        let occluderRotatorId = null;

        if (this.occluderMeshes.length > 0) {
          const midPt = {
            x: (rawA.x + rawB.x) * 0.5,
            y: (rawA.y + rawB.y) * 0.5,
            z: (rawA.z + rawB.z) * 0.5,
          };
          const horizLen = Math.hypot(toCam.x, toCam.z) || 1;
          const perpX = toCam.z / horizLen;
          const perpZ = -toCam.x / horizLen;

          const samplePts = [
            midPt,
            { x: midPt.x - 0.18 * perpX, y: midPt.y, z: midPt.z - 0.18 * perpZ },
            { x: midPt.x + 0.18 * perpX, y: midPt.y, z: midPt.z + 0.18 * perpZ },
          ];
          if (posA) {
            samplePts.push({
              x: posA.x + (rawA.x - posA.x) * 0.55,
              y: rawA.y,
              z: posA.z + (rawA.z - posA.z) * 0.55,
            });
          }
          if (posB) {
            samplePts.push({
              x: posB.x + (rawB.x - posB.x) * 0.55,
              y: rawB.y,
              z: posB.z + (rawB.z - posB.z) * 0.55,
            });
          }

          for (const sp of samplePts) {
            const projS = this.projectWorldToScreen(sp);
            this._ndcMid.set(projS.ndcX, projS.ndcY);
            this._raycaster.setFromCamera(this._ndcMid, this.camera);

            const rayOrigin = this._raycaster.ray?.origin;
            const rayDir = this._raycaster.ray?.direction;
            this._tmpVecA.set(sp.x, sp.y, sp.z);
            const distS =
              rayOrigin && rayDir
                ? this._tmpVecA.clone().sub(rayOrigin).dot(rayDir)
                : this.camera.position.distanceTo(this._tmpVecA);

            const maxOccluderDist = distS - 0.35;
            const hits = this._raycaster.intersectObjects(this.occluderMeshes, true);

            for (const hit of hits) {
              if (hit.distance >= maxOccluderDist) continue;
              const meta = resolveHitMeta(hit.object);
              if (!meta.visible || meta.ignoreOcclusion) continue;
              if (
                meta.nodeId !== undefined &&
                (meta.nodeId === seamNodeA || meta.nodeId === seamNodeB)
              ) {
                continue;
              }
              if (
                depthParityOk &&
                Array.isArray(meta.pierColNodeIds) &&
                meta.pierColNodeIds.some((cid) => cid === seamNodeA || cid === seamNodeB)
              ) {
                continue;
              }
              if (meta.nodeId !== undefined && allowOccluderSet.has(meta.nodeId)) continue;
              if (meta.propId !== undefined && allowOccluderSet.has(meta.propId)) continue;
              occluded = true;
              occluderNodeId = meta.nodeId ?? meta.propId ?? null;
              occluderRotatorId =
                meta.rotatorId ??
                findRotatorAncestorGroup(hit.object)?.rotatorId ??
                findRotatorForNode(meta.nodeId, resolvedNavGraph, resolvedRotators)?.id ??
                null;
              break;
            }
            if (occluded) break;
          }
        }

        const aligned = plateOk && rotatorOk && angleOk && pxOk && depthParityOk && !occluded;
        if (aligned) {
          nextActiveSet.add(seam.id);
        }

        seamStatuses.push({
          id: seam.id,
          nodeA: seamNodeA,
          nodeB: seamNodeB,
          from: seamNodeA,
          to: seamNodeB,
          targetAzimuthDeg: seam.targetAzimuthDeg,
          plateOk,
          rotatorOk,
          angleOk,
          angleDiffDeg,
          pxDist,
          pxOk,
          depthParityOk,
          occluded,
          occluderNodeId,
          occluderRotatorId,
          aligned,
          projA,
          projB,
        });
      }
    } finally {
      this._restoreTempDynamicOccluders(occluderSnapshot);
    }

    for (const seam of this.seams) {
      const seamNodeA = seam.nodeA ?? seam.from;
      const seamNodeB = seam.nodeB ?? seam.to;
      const wasActive = this._activeSeamIds.has(seam.id);
      const isActive = nextActiveSet.has(seam.id);
      if (!wasActive && isActive) {
        const st = seamStatuses.find((s) => s.id === seam.id);
        this.bus?.emit(EVENTS.ILLUSION_ALIGNED, {
          seamId: seam.id,
          nodeA: seamNodeA,
          nodeB: seamNodeB,
          from: seamNodeA,
          to: seamNodeB,
          targetAzimuthDeg: seam.targetAzimuthDeg,
          pxDist: st?.pxDist ?? 0,
        });
      } else if (wasActive && !isActive) {
        this.bus?.emit(EVENTS.ILLUSION_BROKEN, {
          seamId: seam.id,
          nodeA: seamNodeA,
          nodeB: seamNodeB,
          from: seamNodeA,
          to: seamNodeB,
        });
      }
    }

    this._activeSeamIds = nextActiveSet;

    const nearestSeamDiffDeg =
      nearestGateOkDiff !== null ? nearestGateOkDiff : nearestAnyDiff;
    const nearestTargetDeg =
      nearestGateOkTarget !== null ? nearestGateOkTarget : nearestAnyTarget;

    return {
      azimuthDeg: this.currentAzimuthDeg,
      targetAzimuthDeg: this.targetAzimuthDeg,
      isLocked: this._isLocked,
      lockReason: this._lockReason,
      activeSeamIds: [...nextActiveSet],
      nearestSeamDiffDeg,
      nearestTargetDeg,
      seamStatuses,
    };
  }

  /**
   * Unsubscribes bus listeners cleanly.
   */
  dispose() {
    if (typeof this._unsubBridgeEnter === 'function') {
      this._unsubBridgeEnter();
      this._unsubBridgeEnter = null;
    }
    if (typeof this._unsubBridgeExit === 'function') {
      this._unsubBridgeExit();
      this._unsubBridgeExit = null;
    }
    if (typeof this._unsubRotatorTurned === 'function') {
      this._unsubRotatorTurned();
      this._unsubRotatorTurned = null;
    }
    this._activeSeamIds.clear();
  }
}
