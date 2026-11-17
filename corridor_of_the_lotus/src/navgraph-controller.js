import {
  EVENTS,
  normalizeQuarterTurns,
  rotatePointAroundPivotY
} from './contracts.js';

function toSet(input) {
  if (input instanceof Set) return input;
  if (!input) return new Set();
  return new Set(input);
}

function toOffsetsMap(input) {
  if (input instanceof Map) return input;
  if (!input) return new Map();
  return new Map(Object.entries(input));
}

function toRotatorStatesMap(input) {
  if (input instanceof Map) return input;
  if (!input || typeof input !== 'object') return new Map();
  return new Map(Object.entries(input));
}

function cloneVec3(v) {
  if (Array.isArray(v)) {
    return {
      x: Number(v[0]) || 0,
      y: Number(v[1]) || 0,
      z: Number(v[2]) || 0
    };
  }
  return {
    x: Number(v?.x) || 0,
    y: Number(v?.y) || 0,
    z: Number(v?.z) || 0
  };
}

function toPivotTuple(pivot) {
  if (Array.isArray(pivot)) {
    return [
      Number(pivot[0]) || 0,
      Number(pivot[1]) || 0,
      Number(pivot[2]) || 0
    ];
  }
  if (pivot && typeof pivot === 'object') {
    return [
      Number(pivot.x) || 0,
      Number(pivot.y) || 0,
      Number(pivot.z) || 0
    ];
  }
  return [0, 0, 0];
}

function normalizeRotatorTurnValue(value, maxTurns = 4, clamp = false) {
  const num = Math.round(Number(value) || 0);
  const cycle = Number.isFinite(Number(maxTurns)) && Number(maxTurns) > 0 ? Math.floor(Number(maxTurns)) : 4;
  if (clamp) {
    const clamped = Math.max(0, Math.min(cycle, num));
    return clamped === 0 ? 0 : clamped;
  }
  const wrapped = ((num % cycle) + cycle) % cycle;
  return wrapped === 0 ? 0 : wrapped;
}

function normalizeStringList(input) {
  if (!input) return [];
  if (typeof input === 'string') return [input];
  if (input instanceof Set || Array.isArray(input)) {
    return [...input].filter((v) => typeof v === 'string' && v.length > 0);
  }
  return [];
}

function normalizeRequiredRotators(raw, ownerRotatorId = null, rawTurnCond = undefined) {
  let out = null;
  if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
    out = {};
    for (const [rid, val] of Object.entries(raw)) {
      if (Array.isArray(val)) {
        out[rid] = val.map((v) => normalizeQuarterTurns(v));
      } else if (val !== undefined && val !== null) {
        out[rid] = normalizeQuarterTurns(val);
      }
    }
  }
  if (ownerRotatorId && rawTurnCond !== undefined && rawTurnCond !== null) {
    out = out || {};
    if (Array.isArray(rawTurnCond)) {
      out[ownerRotatorId] = rawTurnCond.map((v) => normalizeQuarterTurns(v));
    } else {
      out[ownerRotatorId] = normalizeQuarterTurns(rawTurnCond);
    }
  }
  return out;
}

function normalizeMechanismsListOrMap(input) {
  if (!input) return null;
  if (Array.isArray(input)) return [...input];
  if (typeof input === 'object') return { ...input };
  return null;
}

function checkMechanismEntry(entry, { activePlates, activeMechanisms, rotatorStates }) {
  if (typeof entry === 'string') {
    if (entry.startsWith('!')) {
      const targetId = entry.slice(1);
      return !activePlates.has(targetId) && !activeMechanisms.has(targetId);
    }
    const colonIdx = entry.indexOf(':');
    if (colonIdx > 0) {
      const id = entry.slice(0, colonIdx);
      const expected = Number(entry.slice(colonIdx + 1));
      if (rotatorStates.has(id) && Number.isFinite(expected)) {
        return normalizeQuarterTurns(rotatorStates.get(id)) === normalizeQuarterTurns(expected);
      }
    }
    return (
      activePlates.has(entry) ||
      activeMechanisms.has(entry) ||
      (rotatorStates.has(entry) && normalizeQuarterTurns(rotatorStates.get(entry)) !== 0)
    );
  }
  if (entry && typeof entry === 'object') {
    if (entry.rotatorId != null) {
      const cur = normalizeQuarterTurns(rotatorStates.get(entry.rotatorId) ?? 0);
      const expected = entry.quarterTurns ?? entry.turns ?? entry.atTurns;
      if (Array.isArray(expected)) {
        return expected.some((v) => normalizeQuarterTurns(v) === cur);
      }
      if (expected !== undefined) {
        return normalizeQuarterTurns(expected) === cur;
      }
      return cur !== 0;
    }
    const id = entry.plateId ?? entry.mechanismId ?? entry.id;
    if (!id) return true;
    const expectedActive = entry.active !== false;
    const isActive = activePlates.has(id) || activeMechanisms.has(id);
    return isActive === expectedActive;
  }
  return true;
}

function areGateConditionsMet(cond, { activePlates, activeMechanisms, rotatorStates, actorId = null }) {
  if (!cond) return true;

  if (Array.isArray(cond.requiredPlates)) {
    for (const req of cond.requiredPlates) {
      if (!activePlates.has(req)) return false;
    }
  }
  if (Array.isArray(cond.blockedByPlates)) {
    for (const blk of cond.blockedByPlates) {
      if (activePlates.has(blk)) return false;
    }
  }
  if (cond.requiredRotators && typeof cond.requiredRotators === 'object') {
    for (const [rid, expected] of Object.entries(cond.requiredRotators)) {
      const cur = normalizeQuarterTurns(rotatorStates.get(rid) ?? 0);
      if (Array.isArray(expected)) {
        if (!expected.some((v) => normalizeQuarterTurns(v) === cur)) return false;
      } else if (normalizeQuarterTurns(expected) !== cur) {
        return false;
      }
    }
  }
  if (cond.requiredMechanisms) {
    if (Array.isArray(cond.requiredMechanisms)) {
      for (const m of cond.requiredMechanisms) {
        if (!checkMechanismEntry(m, { activePlates, activeMechanisms, rotatorStates })) {
          return false;
        }
      }
    } else if (typeof cond.requiredMechanisms === 'object') {
      for (const [id, expected] of Object.entries(cond.requiredMechanisms)) {
        if (rotatorStates.has(id) && (typeof expected === 'number' || Array.isArray(expected))) {
          const cur = normalizeQuarterTurns(rotatorStates.get(id) ?? 0);
          if (Array.isArray(expected)) {
            if (!expected.some((v) => normalizeQuarterTurns(v) === cur)) return false;
          } else if (normalizeQuarterTurns(expected) !== cur) {
            return false;
          }
        } else {
          const isActive = activePlates.has(id) || activeMechanisms.has(id);
          if (isActive !== Boolean(expected)) return false;
        }
      }
    }
  }
  if (actorId != null && Array.isArray(cond.requiredActors) && cond.requiredActors.length > 0) {
    if (!cond.requiredActors.includes(actorId)) return false;
  }
  return true;
}

function isStagePortalNode(node) {
  return Boolean(
    node &&
      (node.style === 'stage_portal_arch' ||
        node.type === 'stage_portal_arch' ||
        node.isStagePortal === true ||
        node.stagePortal === true)
  );
}

function setGroupPosition(group, pos) {
  if (!group || !group.position) return;
  if (typeof group.position.set === 'function') {
    group.position.set(pos.x, pos.y, pos.z);
  } else {
    group.position.x = pos.x;
    group.position.y = pos.y;
    group.position.z = pos.z;
  }
}

function setGroupFacing(group, dx, dz) {
  if (!group || !group.rotation) return;
  if (Math.hypot(dx, dz) > 1e-4) {
    group.rotation.y = Math.atan2(dx, dz);
  }
}

function setMaterialDepthTest(material, depthTest) {
  if (!material) return;
  if (Array.isArray(material)) {
    for (const m of material) {
      if (m && typeof m === 'object') m.depthTest = depthTest;
    }
  } else if (typeof material === 'object') {
    material.depthTest = depthTest;
  }
}

function applyFigurineBridgeRenderState(group, crossing) {
  if (!group) return;
  const order = crossing ? 950 : 10;
  const depthTest = !crossing;
  group.renderOrder = order;

  const applyObj = (obj) => {
    if (!obj) return;
    obj.renderOrder = order;
    if (obj.material) {
      setMaterialDepthTest(obj.material, depthTest);
    }
  };

  if (typeof group.traverse === 'function') {
    group.traverse(applyObj);
  } else {
    const visit = (obj) => {
      if (!obj) return;
      applyObj(obj);
      if (Array.isArray(obj.children)) {
        for (const child of obj.children) {
          visit(child);
        }
      }
    };
    visit(group);
  }
}

/**
 * Dynamic navigation graph supporting static tiles, plate-gated mechanism edges,
 * moving platform groups, and orthographic screen-space illusion bridge edges.
 */
export class DynamicNavGraph {
  constructor() {
    this.nodes = new Map();
    this.baseEdges = [];
    this.activeBaseEdges = [];
    this.illusionEdges = new Map();
    this.seamMeta = new Map();
    this.activePlates = new Set();
    this.activeMechanisms = new Set();
    this.groupOffsets = new Map();
    this.rotators = new Map();
    this.rotatorStates = new Map();
    this.nodeToRotator = new Map();
  }

  /**
   * Loads nodes, static edges, mechanism edges, rotators, and seam gating rules from a level definition.
   * Does NOT auto-connect disconnected illusion seams across coordinates.
   */
  loadLevel(levelDef) {
    this.nodes.clear();
    this.baseEdges = [];
    this.activeBaseEdges = [];
    this.illusionEdges.clear();
    this.seamMeta.clear();
    this.activePlates = new Set();
    this.activeMechanisms = new Set();
    this.groupOffsets = new Map();
    this.rotators.clear();
    this.rotatorStates.clear();
    this.nodeToRotator.clear();

    const rotators = Array.isArray(levelDef?.rotators) ? levelDef.rotators : [];
    for (const rawRot of rotators) {
      if (!rawRot || !rawRot.id) continue;
      const maxTurns =
        Number.isFinite(Number(rawRot.maxTurns)) && Number(rawRot.maxTurns) > 0
          ? Math.floor(Number(rawRot.maxTurns))
          : 4;
      const clamp = Boolean(rawRot.clamp);
      const initialQuarterTurns = normalizeRotatorTurnValue(
        rawRot.initialQuarterTurns ?? 0,
        maxTurns,
        clamp
      );
      const nodeIds = Array.isArray(rawRot.nodeIds) ? [...rawRot.nodeIds] : [];
      const rotRecord = {
        id: rawRot.id,
        pivot: toPivotTuple(rawRot.pivot),
        axis: String(rawRot.axis || 'y').toLowerCase(),
        nodeIds,
        initialQuarterTurns,
        maxTurns,
        clamp,
        linkedEdges: Array.isArray(rawRot.linkedEdges) ? [...rawRot.linkedEdges] : [],
        requiredPlates: normalizeStringList(rawRot.requiredPlates),
        blockedByPlates: normalizeStringList(rawRot.blockedByPlates),
        requiredMechanisms: normalizeMechanismsListOrMap(rawRot.requiredMechanisms),
        lockWhenOccupied: Boolean(rawRot.lockWhenOccupied)
      };
      this.rotators.set(rotRecord.id, rotRecord);
      this.rotatorStates.set(rotRecord.id, initialQuarterTurns);
      for (const nid of nodeIds) {
        if (nid) this.nodeToRotator.set(nid, rotRecord.id);
      }
    }

    const nodes = Array.isArray(levelDef?.nodes) ? levelDef.nodes : [];
    for (const raw of nodes) {
      if (!raw || !raw.id) continue;
      const basePos = cloneVec3(raw);
      const walkYOffset = Number(raw.walkYOffset) || 0;
      const walkPos = {
        x: basePos.x,
        y: basePos.y + 0.5 + walkYOffset,
        z: basePos.z
      };
      if (raw.rotatorId && !this.nodeToRotator.has(raw.id)) {
        this.nodeToRotator.set(raw.id, raw.rotatorId);
        const ownerRot = this.rotators.get(raw.rotatorId);
        if (ownerRot && !ownerRot.nodeIds.includes(raw.id)) {
          ownerRot.nodeIds.push(raw.id);
        }
      }
      this.nodes.set(raw.id, {
        ...raw,
        x: basePos.x,
        y: basePos.y,
        z: basePos.z,
        walkYOffset,
        basePos,
        worldPos: { ...basePos },
        walkPos,
        requiredPlates: normalizeStringList(raw.requiredPlates),
        blockedByPlates: normalizeStringList(raw.blockedByPlates),
        requiredRotators: normalizeRequiredRotators(raw.requiredRotators),
        requiredMechanisms: normalizeMechanismsListOrMap(raw.requiredMechanisms),
        requiredActors: normalizeStringList(raw.requiredActors ?? raw.allowedActors)
      });
    }

    for (const seam of levelDef?.seams || []) {
      if (!seam || seam.id == null) continue;
      this.seamMeta.set(seam.id, {
        requiredPlates: normalizeStringList(seam.requiredPlates),
        blockedByPlates: normalizeStringList(seam.blockedByPlates),
        requiredRotators: normalizeRequiredRotators(seam.requiredRotators),
        requiredMechanisms: normalizeMechanismsListOrMap(seam.requiredMechanisms),
        requiredActors: normalizeStringList(seam.requiredActors ?? seam.allowedActors)
      });
    }

    const addNormalizedEdge = (edge, ownerRotatorId = null) => {
      if (!edge || !edge.from || !edge.to) return;
      const rawTurnCond =
        edge.requiredQuarterTurns ??
        edge.quarterTurns ??
        edge.turn ??
        edge.atTurns ??
        edge.turns ??
        edge.allowedQuarterTurns;
      this.baseEdges.push({
        id: edge.id ?? null,
        from: edge.from,
        to: edge.to,
        bidirectional: edge.bidirectional !== false,
        requiredPlates: normalizeStringList(edge.requiredPlates),
        blockedByPlates: normalizeStringList(edge.blockedByPlates),
        requiredRotators: normalizeRequiredRotators(
          edge.requiredRotators,
          ownerRotatorId,
          rawTurnCond
        ),
        requiredMechanisms: normalizeMechanismsListOrMap(edge.requiredMechanisms),
        requiredActors: normalizeStringList(
          edge.requiredActors ?? edge.allowedActors ?? edge.requiredActorId
        ),
        isStair: Boolean(edge.isStair),
        cost: typeof edge.cost === 'number' && edge.cost > 0 ? edge.cost : 1
      });
    };

    const rawEdges = [
      ...(Array.isArray(levelDef?.edges) ? levelDef.edges : []),
      ...(Array.isArray(levelDef?.mechanismEdges) ? levelDef.mechanismEdges : [])
    ];
    for (const edge of rawEdges) {
      addNormalizedEdge(edge, null);
    }

    for (const rotRecord of this.rotators.values()) {
      for (const le of rotRecord.linkedEdges) {
        if (le && typeof le === 'object' && le.from && le.to) {
          addNormalizedEdge(le, rotRecord.id);
        }
      }
    }

    this.syncMechanisms(new Set(), new Map());
  }

  /**
   * Returns a plain object mapping `{ [rotatorId]: quarterTurns }`.
   */
  getRotatorStates() {
    const states = {};
    for (const [id, q] of this.rotatorStates.entries()) {
      states[id] = q;
    }
    return states;
  }

  /**
   * Returns serializable rotator definitions with live `quarterTurns`.
   */
  getRotatorsSnapshot() {
    const out = [];
    for (const rot of this.rotators.values()) {
      out.push({
        id: rot.id,
        pivot: [...rot.pivot],
        axis: rot.axis,
        nodeIds: [...rot.nodeIds],
        maxTurns: rot.maxTurns,
        quarterTurns: this.rotatorStates.get(rot.id) ?? 0
      });
    }
    return out;
  }

  /**
   * Returns the rotator descriptor governing `nodeId`, if any.
   */
  getNodeRotator(nodeId) {
    const rid = this.nodeToRotator.get(nodeId);
    if (!rid) return null;
    const rot = this.rotators.get(rid);
    if (!rot) return null;
    return {
      ...rot,
      pivot: [...rot.pivot],
      nodeIds: [...rot.nodeIds],
      quarterTurns: this.rotatorStates.get(rid) ?? 0
    };
  }

  /**
   * Returns the live world position `{ x, y, z }` of `nodeId` (or transformed `pointOverride`)
   * after applying its rotator pivot rotation and platform group offset.
   */
  getNodeWorldPos(nodeId, pointOverride = null) {
    const node = this.nodes.get(nodeId);
    if (!node && !pointOverride) return null;

    const baseVec = pointOverride ? cloneVec3(pointOverride) : node.basePos;
    let wx = baseVec.x;
    let wy = baseVec.y;
    let wz = baseVec.z;

    const rid = this.nodeToRotator.get(nodeId);
    if (rid && this.rotators.has(rid)) {
      const rot = this.rotators.get(rid);
      const q = this.rotatorStates.get(rid) ?? 0;
      const [rx, ry, rz] = rotatePointAroundPivotY([wx, wy, wz], rot.pivot, q);
      wx = rx;
      wy = ry;
      wz = rz;
    }

    const gid = node?.groupId ?? node?.platformGroup;
    const off = gid ? this.groupOffsets.get(gid) : null;
    if (off) {
      wx += off.x;
      wy += off.y;
      wz += off.z;
    }

    return { x: wx, y: wy, z: wz };
  }

  /**
   * Sets a single rotator's quarter-turns and refreshes node world positions & edges.
   */
  setRotatorTurns(rotatorId, quarterTurns) {
    const rot = this.rotators.get(rotatorId);
    if (!rot) return false;
    const next = normalizeRotatorTurnValue(quarterTurns, rot.maxTurns, rot.clamp);
    this.rotatorStates.set(rotatorId, next);
    this.syncMechanisms(this.activePlates, this.groupOffsets);
    return true;
  }

  /**
   * Immediately snaps multiple rotators from `{ [rotatorId]: quarterTurns }` or Map.
   */
  snapRotatorsImmediate(rotatorMap = {}) {
    const entries =
      rotatorMap instanceof Map
        ? [...rotatorMap.entries()]
        : Object.entries(rotatorMap || {});
    let changed = false;
    for (const [rid, q] of entries) {
      const rot = this.rotators.get(rid);
      if (!rot) continue;
      const next = normalizeRotatorTurnValue(q, rot.maxTurns, rot.clamp);
      if (this.rotatorStates.get(rid) !== next) {
        changed = true;
      }
      this.rotatorStates.set(rid, next);
    }
    this.syncMechanisms(this.activePlates, this.groupOffsets);
    return changed;
  }

  /**
   * Checks whether `nodeId` is currently unlocked/accessible for `actorId`.
   */
  isNodeAccessible(nodeId, actorId = null) {
    const node = this.nodes.get(nodeId);
    if (!node) return false;
    return areGateConditionsMet(node, {
      activePlates: this.activePlates,
      activeMechanisms: this.activeMechanisms,
      rotatorStates: this.rotatorStates,
      actorId
    });
  }

  /**
   * Adds or removes a bidirectional illusion bridge edge for a seam.
   */
  setIllusionEdge(seamId, nodeA, nodeB, active) {
    if (seamId == null) return;
    if (active === true) {
      if (!nodeA || !nodeB || nodeA === nodeB) return;
      this.illusionEdges.set(seamId, { seamId, nodeA, nodeB });
    } else {
      this.illusionEdges.delete(seamId);
    }
  }

  /**
   * Updates node world/walk positions from rotators & platform group offsets and recomputes active mechanism edges.
   */
  syncMechanisms(
    activePlates = new Set(),
    groupOffsets = new Map(),
    rotatorStates = null,
    activeMechanisms = null
  ) {
    const activeSet = toSet(activePlates);
    const offsetsMap = toOffsetsMap(groupOffsets);
    this.activePlates = new Set(activeSet);
    this.groupOffsets = new Map();
    for (const [gid, off] of offsetsMap.entries()) {
      this.groupOffsets.set(gid, cloneVec3(off));
    }

    if (rotatorStates !== null && rotatorStates !== undefined) {
      const rotMap = toRotatorStatesMap(rotatorStates);
      for (const [rid, q] of rotMap.entries()) {
        const rot = this.rotators.get(rid);
        if (rot) {
          this.rotatorStates.set(rid, normalizeRotatorTurnValue(q, rot.maxTurns, rot.clamp));
        }
      }
    }

    if (activeMechanisms !== null && activeMechanisms !== undefined) {
      this.activeMechanisms = new Set(toSet(activeMechanisms));
    }

    for (const node of this.nodes.values()) {
      const worldPos = this.getNodeWorldPos(node.id) || { ...node.basePos };
      node.worldPos = worldPos;
      node.walkPos = {
        x: worldPos.x,
        y: worldPos.y + 0.5 + (node.walkYOffset || 0),
        z: worldPos.z
      };
    }

    const gateCtx = {
      activePlates: this.activePlates,
      activeMechanisms: this.activeMechanisms,
      rotatorStates: this.rotatorStates,
      actorId: null
    };
    this.activeBaseEdges = this.baseEdges.filter((edge) => areGateConditionsMet(edge, gateCtx));
  }

  /**
   * Returns currently traversable outgoing edges from nodeId.
   */
  getNeighbors(nodeId, { actorId = null } = {}) {
    if (!this.nodes.has(nodeId)) return [];
    const neighbors = [];
    const gateCtx = {
      activePlates: this.activePlates,
      activeMechanisms: this.activeMechanisms,
      rotatorStates: this.rotatorStates,
      actorId
    };

    for (const edge of this.activeBaseEdges) {
      if (actorId != null && edge.requiredActors.length > 0 && !edge.requiredActors.includes(actorId)) {
        continue;
      }
      if (edge.from === nodeId && this.nodes.has(edge.to) && this.isNodeAccessible(edge.to, actorId)) {
        neighbors.push({
          to: edge.to,
          cost: edge.cost,
          isIllusionEdge: false,
          seamId: null
        });
      }
      if (
        edge.bidirectional &&
        edge.to === nodeId &&
        this.nodes.has(edge.from) &&
        this.isNodeAccessible(edge.from, actorId)
      ) {
        neighbors.push({
          to: edge.from,
          cost: edge.cost,
          isIllusionEdge: false,
          seamId: null
        });
      }
    }

    for (const ie of this.illusionEdges.values()) {
      const meta = this.seamMeta.get(ie.seamId);
      if (meta && !areGateConditionsMet(meta, gateCtx)) {
        continue;
      }
      if (ie.nodeA === nodeId && this.nodes.has(ie.nodeB) && this.isNodeAccessible(ie.nodeB, actorId)) {
        neighbors.push({
          to: ie.nodeB,
          cost: 1,
          isIllusionEdge: true,
          seamId: ie.seamId
        });
      }
      if (ie.nodeB === nodeId && this.nodes.has(ie.nodeA) && this.isNodeAccessible(ie.nodeA, actorId)) {
        neighbors.push({
          to: ie.nodeA,
          cost: 1,
          isIllusionEdge: true,
          seamId: ie.seamId
        });
      }
    }

    return neighbors;
  }

  /**
   * Returns the registered node object for nodeId, or null if missing.
   */
  getNode(nodeId) {
    return this.nodes.get(nodeId) ?? null;
  }

  /**
   * Finds the optimal shortest path using A* with zero heuristic (admissible across arbitrary 3D illusion jumps).
   */
  findPath(startId, goalId, { blockedNodeIds = new Set(), actorId = null } = {}) {
    const blocked = toSet(blockedNodeIds);
    if (
      !this.nodes.has(startId) ||
      !this.nodes.has(goalId) ||
      blocked.has(goalId) ||
      !this.isNodeAccessible(goalId, actorId)
    ) {
      return { reachable: false, nodes: [], segments: [] };
    }
    if (startId === goalId) {
      return { reachable: true, nodes: [startId], segments: [] };
    }

    const gScore = new Map([[startId, 0]]);
    const cameFrom = new Map();
    const closed = new Set();
    const open = [{ id: startId, g: 0 }];

    let found = false;
    while (open.length > 0) {
      let bestIdx = 0;
      for (let i = 1; i < open.length; i++) {
        if (open[i].g < open[bestIdx].g) {
          bestIdx = i;
        }
      }
      const current = open[bestIdx];
      open[bestIdx] = open[open.length - 1];
      open.pop();

      if (closed.has(current.id)) continue;
      closed.add(current.id);

      if (current.id === goalId) {
        found = true;
        break;
      }

      const neighbors = this.getNeighbors(current.id, { actorId });
      for (const neighbor of neighbors) {
        if (closed.has(neighbor.to) || blocked.has(neighbor.to)) continue;
        const tentativeG = current.g + (neighbor.cost ?? 1);
        const prevG = gScore.get(neighbor.to);
        if (prevG === undefined || tentativeG < prevG) {
          gScore.set(neighbor.to, tentativeG);
          cameFrom.set(neighbor.to, { from: current.id, edge: neighbor });
          open.push({ id: neighbor.to, g: tentativeG });
        }
      }
    }

    if (!found) {
      return { reachable: false, nodes: [], segments: [] };
    }

    const nodes = [];
    const segments = [];
    let cursor = goalId;
    while (cursor !== startId) {
      const step = cameFrom.get(cursor);
      if (!step) {
        return { reachable: false, nodes: [], segments: [] };
      }
      nodes.push(cursor);
      segments.push({
        from: step.from,
        to: cursor,
        isIllusionEdge: Boolean(step.edge.isIllusionEdge),
        seamId: step.edge.seamId ?? null
      });
      cursor = step.from;
    }
    nodes.push(startId);
    nodes.reverse();
    segments.reverse();

    return { reachable: true, nodes, segments };
  }
}

/**
 * Multi-character controller coordinating navigation, illusion bridge depth-override traversal,
 * pressure plates, moving platform animations, and win condition evaluation.
 */
export class MultiCharacterController {
  constructor({ THREE = null, bus = null, graph = null, navGraph = null, rig = null, speed = 3.6 } = {}) {
    this.THREE = THREE;
    this.bus = bus;
    this.graph = graph || navGraph || new DynamicNavGraph();
    this.rig = rig || null;
    this.speed = speed;

    this.levelDef = null;
    this.parentLevelDef = null;
    this.stageIndex = 0;
    this.totalStages = 1;
    this.stageCompleted = false;
    this._actorEntriesArg = {};
    this.actors = new Map();
    this.activeActorId = null;
    this.activePath = null;
    this.goalReached = false;
    this.activePlates = new Set();
    this.plateState = new Map();
    this.groupOffsets = new Map();
    this.targetGroupOffsets = new Map();
    this._bridgeState = null;
    this._seamMap = new Map();
    this._triggeredPortals = new Set();
    this._elapsed = 0;
    this._unsubs = [];

    this._subscribeBus();
  }

  /**
   * Optional direct reference to OrthographicIllusionRig (also synchronized automatically via bus).
   */
  setIllusionRig(rig) {
    this.rig = rig || null;
  }

  _subscribeBus() {
    if (!this.bus || typeof this.bus.on !== 'function') return;

    const onAligned = (payload) => {
      const seamId = payload?.seamId ?? payload?.id;
      if (seamId == null) return;
      this.graph.setIllusionEdge(seamId, payload.nodeA, payload.nodeB, true);
    };

    const onBroken = (payload) => {
      const seamId = payload?.seamId ?? payload?.id;
      if (seamId == null) return;
      this.graph.setIllusionEdge(seamId, null, null, false);
    };

    const unsubA = this.bus.on(EVENTS.ILLUSION_ALIGNED, onAligned);
    const unsubB = this.bus.on(EVENTS.ILLUSION_BROKEN, onBroken);

    if (typeof unsubA === 'function') {
      this._unsubs.push(unsubA);
    } else if (typeof this.bus.off === 'function') {
      this._unsubs.push(() => this.bus.off(EVENTS.ILLUSION_ALIGNED, onAligned));
    }

    if (typeof unsubB === 'function') {
      this._unsubs.push(unsubB);
    } else if (typeof this.bus.off === 'function') {
      this._unsubs.push(() => this.bus.off(EVENTS.ILLUSION_BROKEN, onBroken));
    }
  }

  _emit(event, payload) {
    this.bus?.emit?.(event, payload);
  }

  _getEntryFromCollection(actorEntries, actorId) {
    if (!actorEntries) return null;
    if (actorEntries instanceof Map) return actorEntries.get(actorId) || null;
    return actorEntries[actorId] || null;
  }

  _getPlateAtNode(nodeId) {
    const plates = this.levelDef?.plates;
    if (!Array.isArray(plates)) return null;
    for (const plate of plates) {
      if (plate?.nodeId === nodeId) return plate.id;
    }
    return null;
  }

  _collectKnownGroupIds(levelDef) {
    const ids = new Set();
    for (const node of levelDef?.nodes || []) {
      const gid = node?.groupId ?? node?.platformGroup;
      if (gid) ids.add(gid);
    }
    for (const plate of levelDef?.plates || []) {
      if (plate?.targetGroupId) ids.add(plate.targetGroupId);
      for (const extra of plate?.extraMoves || []) {
        if (extra?.targetGroupId) ids.add(extra.targetGroupId);
      }
    }
    return ids;
  }

  _computeTargetGroupOffsets() {
    const targets = new Map();
    for (const gid of this._collectKnownGroupIds(this.levelDef)) {
      targets.set(gid, { x: 0, y: 0, z: 0 });
    }
    for (const plate of this.levelDef?.plates || []) {
      if (!this.activePlates.has(plate.id)) continue;
      if (plate?.targetGroupId) {
        const cur = targets.get(plate.targetGroupId) || { x: 0, y: 0, z: 0 };
        const move = plate.moveOffset || {};
        cur.x += Number(move.x) || 0;
        cur.y += Number(move.y) || 0;
        cur.z += Number(move.z) || 0;
        targets.set(plate.targetGroupId, cur);
      }
      for (const extra of plate?.extraMoves || []) {
        if (!extra?.targetGroupId) continue;
        const cur = targets.get(extra.targetGroupId) || { x: 0, y: 0, z: 0 };
        const move = extra.moveOffset || {};
        cur.x += Number(move.x) || 0;
        cur.y += Number(move.y) || 0;
        cur.z += Number(move.z) || 0;
        targets.set(extra.targetGroupId, cur);
      }
    }
    return targets;
  }

  _hasPendingPlatformAnimation() {
    for (const [gid, target] of this.targetGroupOffsets.entries()) {
      const cur = this.groupOffsets.get(gid) || { x: 0, y: 0, z: 0 };
      if (
        Math.abs(cur.x - target.x) > 1e-5 ||
        Math.abs(cur.y - target.y) > 1e-5 ||
        Math.abs(cur.z - target.z) > 1e-5
      ) {
        return true;
      }
    }
    return false;
  }

  _snapPlatformsToTargets() {
    this.groupOffsets = new Map();
    for (const [gid, target] of this.targetGroupOffsets.entries()) {
      this.groupOffsets.set(gid, { ...target });
    }
    this.graph.syncMechanisms(this.activePlates, this.groupOffsets);
    this._syncIdleActorPositions();
  }

  _syncIdleActorPositions() {
    for (const actor of this.actors.values()) {
      if (this.activePath && this.activePath.actorId === actor.id) continue;
      const node = this.graph.getNode(actor.nodeId);
      if (node) {
        setGroupPosition(actor.entry?.group, node.walkPos);
      }
    }
  }

  _getResolvedWinCondition(levelDef = this.levelDef) {
    if (!levelDef) return null;
    const raw = levelDef.winCondition;
    if (raw) {
      const goalNodeId = raw.goalNodeId ?? raw.goalId ?? levelDef.goalNodeId ?? levelDef.goalId;
      return {
        ...raw,
        ...(goalNodeId !== undefined ? { goalNodeId } : {})
      };
    }
    const fallbackGoal = levelDef.goalNodeId ?? levelDef.goalId;
    if (fallbackGoal) {
      return { type: 'reach', goalNodeId: fallbackGoal };
    }
    return null;
  }

  _isTargetSharedGoalAllowed(targetNodeId) {
    if (!this.levelDef?.allowSharedGoalTile) return false;
    const node = this.graph.getNode(targetNodeId);
    const wc = this._getResolvedWinCondition();
    return Boolean(node?.isGoal || wc?.goalNodeId === targetNodeId);
  }

  _getBlockedNodeIds(movingActorId, targetNodeId = null) {
    const blocked = new Set();
    const allowShared = targetNodeId ? this._isTargetSharedGoalAllowed(targetNodeId) : false;
    for (const other of this.actors.values()) {
      if (other.id === movingActorId) continue;
      if (allowShared && other.nodeId === targetNodeId) continue;
      blocked.add(other.nodeId);
    }
    return blocked;
  }

  _buildNodeWorldPosMap() {
    const map = {};
    for (const node of this.graph.nodes.values()) {
      const wp = this.graph.getNodeWorldPos(node.id);
      if (wp) map[node.id] = wp;
    }
    return map;
  }

  /**
   * Initializes level graph, actor positions, initial plates, rotators, and mechanism offsets.
   * Supports both single-stage levels and multi-stage levels (`levelDef.stages`).
   */
  loadLevel(levelDef, actorEntries = {}, options = {}) {
    for (const oldActor of this.actors.values()) {
      applyFigurineBridgeRenderState(oldActor.entry?.group, false);
      oldActor.entry?.setMoving?.(false);
    }

    this._actorEntriesArg = actorEntries || {};
    this.parentLevelDef = levelDef || null;

    const hasStages = Array.isArray(levelDef?.stages) && levelDef.stages.length > 0;
    if (hasStages) {
      this.totalStages = levelDef.stages.length;
      const reqIdx = Number.isInteger(options.stageIndex)
        ? options.stageIndex
        : Number.isInteger(levelDef.initialStageIndex)
          ? levelDef.initialStageIndex
          : 0;
      this.stageIndex = Math.max(0, Math.min(this.totalStages - 1, reqIdx));
      const stageRaw = levelDef.stages[this.stageIndex] || {};
      this.levelDef = {
        ...levelDef,
        ...stageRaw,
        id: levelDef.id,
        stageId: stageRaw.stageId ?? stageRaw.id ?? `stage_${this.stageIndex}`,
        era: stageRaw.era ?? levelDef.era,
        title: stageRaw.title ?? levelDef.title,
        actors: stageRaw.actors ?? levelDef.actors,
        defaultActorId: stageRaw.defaultActorId ?? levelDef.defaultActorId,
        plates: stageRaw.plates ?? [],
        rotators: stageRaw.rotators ?? [],
        seams: stageRaw.seams ?? [],
        edges: stageRaw.edges ?? [],
        mechanismEdges: stageRaw.mechanismEdges ?? []
      };
    } else {
      this.totalStages = Number.isInteger(options.totalStages)
        ? options.totalStages
        : Number.isInteger(levelDef?.totalStages)
          ? levelDef.totalStages
          : 1;
      this.stageIndex = Number.isInteger(options.stageIndex)
        ? options.stageIndex
        : Number.isInteger(levelDef?.stageIndex)
          ? levelDef.stageIndex
          : 0;
      this.levelDef = levelDef || null;
    }

    const activeLevel = this.levelDef;
    this.actors.clear();
    this.activePath = null;
    this.goalReached = false;
    this.stageCompleted = false;
    this._bridgeState = null;
    this.activePlates = new Set();
    this.plateState = new Map();
    this.groupOffsets = new Map();
    this.targetGroupOffsets = new Map();
    this._seamMap = new Map();
    this._triggeredPortals = new Set();
    this._elapsed = 0;

    for (const seam of activeLevel?.seams || []) {
      if (seam?.id != null) {
        this._seamMap.set(seam.id, seam);
      }
    }

    this.graph.loadLevel(activeLevel);

    const actorDefs = Array.isArray(activeLevel?.actors) ? activeLevel.actors : [];
    for (const def of actorDefs) {
      if (!def || !def.id) continue;
      const entry = this._getEntryFromCollection(actorEntries, def.id);
      this.actors.set(def.id, {
        id: def.id,
        name: def.name || def.id,
        nodeId: def.startNodeId,
        startNodeId: def.startNodeId,
        entry
      });
    }

    if (activeLevel?.defaultActorId && this.actors.has(activeLevel.defaultActorId)) {
      this.activeActorId = activeLevel.defaultActorId;
    } else {
      this.activeActorId = actorDefs[0]?.id ?? null;
    }

    for (const plate of activeLevel?.plates || []) {
      if (!plate || !plate.id) continue;
      const reqActors = normalizeStringList(plate.requiredActors ?? plate.requiredActorId);
      let initial = Boolean(plate.initialActive);
      if (plate.mode === 'hold') {
        const occupied = Array.from(this.actors.values()).some(
          (a) => a.nodeId === plate.nodeId && (reqActors.length === 0 || reqActors.includes(a.id))
        );
        initial = occupied || initial;
      }
      this.plateState.set(plate.id, initial);
      if (initial) {
        this.activePlates.add(plate.id);
      }
    }

    // Enforce blockedByPlates on initial plates
    for (const plate of activeLevel?.plates || []) {
      if (!plate || !plate.id) continue;
      const blockedBy = normalizeStringList(plate.blockedByPlates);
      if (blockedBy.some((bid) => this.activePlates.has(bid))) {
        this.plateState.set(plate.id, false);
        this.activePlates.delete(plate.id);
      }
    }

    this.targetGroupOffsets = this._computeTargetGroupOffsets();
    this.groupOffsets = new Map();
    for (const [gid, off] of this.targetGroupOffsets.entries()) {
      this.groupOffsets.set(gid, { ...off });
    }

    this.graph.syncMechanisms(this.activePlates, this.groupOffsets);

    for (const actor of this.actors.values()) {
      const node = this.graph.getNode(actor.nodeId);
      if (node) {
        setGroupPosition(actor.entry?.group, node.walkPos);
      }
      applyFigurineBridgeRenderState(actor.entry?.group, false);
      actor.entry?.setMoving?.(false);
      actor.entry?.setActive?.(actor.id === this.activeActorId);
    }
  }

  /**
   * Transitions to stage `stageIndex` on a multi-stage level, emitting STAGE_TRANSITION_START.
   */
  loadStage(stageIndex, actorEntries = null) {
    if (!this.parentLevelDef) return false;
    const fromStageIndex = this.stageIndex;
    const nextIdx = Number(stageIndex) || 0;
    this._emit(EVENTS.STAGE_TRANSITION_START, {
      levelId: this.parentLevelDef.id,
      fromStageIndex,
      toStageIndex: nextIdx,
      totalStages: this.totalStages
    });
    this.loadLevel(this.parentLevelDef, actorEntries ?? this._actorEntriesArg, {
      stageIndex: nextIdx
    });
    return true;
  }

  getStageInfo() {
    return {
      stageIndex: this.stageIndex,
      totalStages: this.totalStages,
      stageCompleted: this.stageCompleted,
      goalReached: this.goalReached
    };
  }

  /**
   * Returns `{ [rotatorId]: quarterTurns }` for all rotators in the active level.
   */
  getRotatorStates() {
    return this.graph.getRotatorStates();
  }

  /**
   * Returns live world position `{ x, y, z }` of `nodeId` after applying rotator pivot rotation and group offset.
   */
  getNodeWorldPos(nodeId) {
    return this.graph.getNodeWorldPos(nodeId);
  }

  /**
   * Returns true while any actor has an active walking path.
   */
  isWalking() {
    return Boolean(this.activePath);
  }

  /**
   * Alias of isCrossingBridge() for safety lock checks.
   */
  isOnIllusionBridge() {
    return this.isCrossingBridge();
  }

  /**
   * Rotates a local turret/rotator by `deltaSteps` quarter turns if safe.
   * Rejects safely when walking, crossing an illusion bridge, or blocked by plates.
   */
  rotateTurret(rotatorId, deltaSteps = 1) {
    if (!this.levelDef) {
      return { accepted: false, reason: 'no_level' };
    }
    if (this.isCrossingBridge()) {
      return { accepted: false, reason: 'crossing_bridge', locked: true };
    }
    if (this.isWalking()) {
      return { accepted: false, reason: 'is_walking', locked: true };
    }

    const rot = this.graph.rotators.get(rotatorId);
    if (!rot) {
      return { accepted: false, reason: 'unknown_rotator' };
    }
    if (rot.blockedByPlates.some((pid) => this.activePlates.has(pid))) {
      return { accepted: false, reason: 'blocked_by_plate', locked: true };
    }
    if (rot.requiredPlates.some((pid) => !this.activePlates.has(pid))) {
      return { accepted: false, reason: 'missing_required_plate', locked: true };
    }
    if (
      rot.requiredMechanisms &&
      !areGateConditionsMet(
        { requiredMechanisms: rot.requiredMechanisms },
        {
          activePlates: this.activePlates,
          activeMechanisms: this.graph.activeMechanisms,
          rotatorStates: this.graph.rotatorStates
        }
      )
    ) {
      return { accepted: false, reason: 'missing_required_mechanism', locked: true };
    }
    if (rot.lockWhenOccupied) {
      const nodeSet = new Set(rot.nodeIds);
      const occupied = Array.from(this.actors.values()).some((a) => nodeSet.has(a.nodeId));
      if (occupied) {
        return { accepted: false, reason: 'actor_on_rotator', locked: true };
      }
    }

    const stepsNum = Number(deltaSteps);
    if (!Number.isFinite(stepsNum) || Math.round(stepsNum) === 0) {
      return { accepted: false, reason: 'invalid_steps' };
    }
    const steps = Math.round(stepsNum);
    const prevQuarterTurns = this.graph.rotatorStates.get(rotatorId) ?? 0;
    const nextQuarterTurns = normalizeRotatorTurnValue(
      prevQuarterTurns + steps,
      rot.maxTurns,
      rot.clamp
    );

    this.graph.setRotatorTurns(rotatorId, nextQuarterTurns);
    this._syncIdleActorPositions();

    const rotatorStates = this.getRotatorStates();
    const payload = {
      rotatorId,
      quarterTurns: nextQuarterTurns,
      prevQuarterTurns,
      deltaSteps: steps,
      rotatorStates,
      rotators: this.graph.getRotatorsSnapshot(),
      nodeWorldPos: this._buildNodeWorldPosMap(),
      activePlates: [...this.activePlates],
      immediate: false
    };

    this._emit(EVENTS.ROTATOR_TURNED, payload);

    if (this.rig && typeof this.rig.evaluateSeams === 'function' && (!this.bus || !this.rig.bus)) {
      this.rig.evaluateSeams({
        activePlates: this.activePlates,
        rotatorStates,
        navGraph: this.graph
      });
    }

    return {
      accepted: true,
      rotatorId,
      quarterTurns: nextQuarterTurns,
      prevQuarterTurns,
      rotatorStates
    };
  }

  /**
   * Immediately snaps rotators to specified quarter turns (for level load or deterministic tests).
   */
  snapRotatorsImmediate(rotatorMap = {}) {
    const changed = this.graph.snapRotatorsImmediate(rotatorMap);
    this._syncIdleActorPositions();

    const rotatorStates = this.getRotatorStates();
    if (changed) {
      this._emit(EVENTS.ROTATOR_TURNED, {
        rotatorId: null,
        quarterTurns: null,
        prevQuarterTurns: null,
        deltaSteps: 0,
        rotatorStates,
        rotators: this.graph.getRotatorsSnapshot(),
        nodeWorldPos: this._buildNodeWorldPosMap(),
        activePlates: [...this.activePlates],
        immediate: true
      });
      if (this.rig && typeof this.rig.evaluateSeams === 'function' && (!this.bus || !this.rig.bus)) {
        this.rig.evaluateSeams({
          activePlates: this.activePlates,
          rotatorStates,
          navGraph: this.graph
        });
      }
    }
    return rotatorStates;
  }

  /**
   * Switches active character if valid and no character is crossing an illusion bridge.
   */
  switchActor(actorId) {
    if (this.isCrossingBridge()) return false;
    if (!this.actors.has(actorId)) return false;
    if (actorId === this.activeActorId) return true;

    if (this.activePath) {
      const movingActor = this.actors.get(this.activePath.actorId);
      const seg = this.activePath.segments[this.activePath.segmentIndex];
      if (movingActor && seg) {
        if (this.activePath.progress >= 0.5) {
          this._completeSegmentArrival(movingActor, seg);
        } else {
          const fromNode = this.graph.getNode(seg.from);
          if (fromNode) {
            setGroupPosition(movingActor.entry?.group, fromNode.walkPos);
          }
        }
      }
      movingActor?.entry?.setMoving?.(false);
      this.activePath = null;
      this._checkWinCondition();
    }

    const previousActorId = this.activeActorId;
    this.activeActorId = actorId;
    for (const actor of this.actors.values()) {
      actor.entry?.setActive?.(actor.id === this.activeActorId);
    }

    this._emit(EVENTS.ACTOR_SWITCHED, {
      actorId,
      previousActorId,
      actor: this.getActorState(actorId)
    });
    return true;
  }

  getActiveActorId() {
    return this.activeActorId;
  }

  getActorState(actorId = this.activeActorId) {
    const actor = this.actors.get(actorId);
    if (!actor) return null;
    const node = this.graph.getNode(actor.nodeId);
    return {
      id: actor.id,
      name: actor.name,
      nodeId: actor.nodeId,
      walkPos: node ? { ...node.walkPos } : null,
      isActive: actor.id === this.activeActorId,
      isMoving: Boolean(this.activePath && this.activePath.actorId === actor.id),
      isCrossingBridge: Boolean(this._bridgeState && this._bridgeState.actorId === actor.id),
      onPlateId: this._getPlateAtNode(actor.nodeId)
    };
  }

  getActorsSnapshot() {
    const snapshot = [];
    for (const id of this.actors.keys()) {
      snapshot.push(this.getActorState(id));
    }
    return snapshot;
  }

  getActivePlates() {
    return new Set(this.activePlates);
  }

  getGroupOffsets() {
    const copy = new Map();
    for (const [gid, off] of this.groupOffsets.entries()) {
      copy.set(gid, { ...off });
    }
    return copy;
  }

  isCrossingBridge() {
    return Boolean(this._bridgeState);
  }

  /**
   * Plans and starts moving the active actor toward targetNodeId.
   */
  commandMoveTo(targetNodeId) {
    if (!this.levelDef || !this.activeActorId) {
      return { accepted: false, reason: 'no_level' };
    }
    if (this.goalReached) {
      return { accepted: false, reason: 'goal_reached' };
    }
    if (this.isCrossingBridge()) {
      return { accepted: false, reason: 'crossing_bridge' };
    }
    if (!this.graph.getNode(targetNodeId)) {
      return { accepted: false, reason: 'unknown_node' };
    }

    const activeActor = this.actors.get(this.activeActorId);
    if (!activeActor) {
      return { accepted: false, reason: 'unknown_actor' };
    }
    if (!this.graph.isNodeAccessible(targetNodeId, this.activeActorId)) {
      return { accepted: false, reason: 'unreachable' };
    }

    const blockedNodeIds = this._getBlockedNodeIds(this.activeActorId, targetNodeId);

    if (this.activePath && this.activePath.actorId === this.activeActorId && this.activePath.progress > 0) {
      const currSeg = this.activePath.segments[this.activePath.segmentIndex];
      if (currSeg) {
        if (targetNodeId === currSeg.to) {
          const singleSeg = { ...currSeg };
          this.activePath = {
            actorId: this.activeActorId,
            targetNodeId,
            nodes: [currSeg.from, currSeg.to],
            segments: [singleSeg],
            segmentIndex: 0,
            progress: this.activePath.progress
          };
          const path = {
            reachable: true,
            nodes: [...this.activePath.nodes],
            segments: [{ from: singleSeg.from, to: singleSeg.to, isIllusionEdge: singleSeg.isIllusionEdge, seamId: singleSeg.seamId }]
          };
          this._emit(EVENTS.NAV_PATH_STARTED, {
            actorId: this.activeActorId,
            targetNodeId,
            nodes: path.nodes,
            segments: path.segments
          });
          return { accepted: true, path };
        }

        const tail = this.graph.findPath(currSeg.to, targetNodeId, {
          blockedNodeIds,
          actorId: this.activeActorId
        });
        if (!tail.reachable) {
          return { accepted: false, reason: 'unreachable' };
        }
        const combinedSegments = [
          { ...currSeg },
          ...tail.segments.map((s) => ({ ...s, _entered: false }))
        ];
        const combinedNodes = [currSeg.from, ...tail.nodes];
        this.activePath = {
          actorId: this.activeActorId,
          targetNodeId,
          nodes: combinedNodes,
          segments: combinedSegments,
          segmentIndex: 0,
          progress: this.activePath.progress
        };
        const path = {
          reachable: true,
          nodes: [...combinedNodes],
          segments: combinedSegments.map((s) => ({
            from: s.from,
            to: s.to,
            isIllusionEdge: s.isIllusionEdge,
            seamId: s.seamId
          }))
        };
        this._emit(EVENTS.NAV_PATH_STARTED, {
          actorId: this.activeActorId,
          targetNodeId,
          nodes: path.nodes,
          segments: path.segments
        });
        return { accepted: true, path };
      }
    }

    const result = this.graph.findPath(activeActor.nodeId, targetNodeId, {
      blockedNodeIds,
      actorId: this.activeActorId
    });
    if (!result.reachable) {
      return { accepted: false, reason: 'unreachable' };
    }

    if (result.segments.length === 0) {
      this.activePath = null;
      activeActor.entry?.setMoving?.(false);
      this._checkWinCondition();
      return { accepted: true, path: result };
    }

    this.activePath = {
      actorId: this.activeActorId,
      targetNodeId,
      nodes: [...result.nodes],
      segments: result.segments.map((s) => ({ ...s, _entered: false })),
      segmentIndex: 0,
      progress: 0
    };
    activeActor.entry?.setMoving?.(true);
    this._emit(EVENTS.NAV_PATH_STARTED, {
      actorId: this.activeActorId,
      targetNodeId,
      nodes: [...result.nodes],
      segments: result.segments.map((s) => ({ ...s }))
    });
    return { accepted: true, path: result };
  }

  _isSegmentTraversable(seg, actorId) {
    const neighbors = this.graph.getNeighbors(seg.from, { actorId });
    const hasEdge = neighbors.some(
      (n) =>
        n.to === seg.to &&
        Boolean(n.isIllusionEdge) === Boolean(seg.isIllusionEdge) &&
        (n.seamId ?? null) === (seg.seamId ?? null)
    );
    if (!hasEdge) return false;

    const blocked = this._getBlockedNodeIds(actorId, seg.to);
    return !blocked.has(seg.to);
  }

  _computeSegmentFacing(seg, dx, dz) {
    if (seg.isIllusionEdge && seg.seamId != null) {
      const seam = this._seamMap.get(seg.seamId);
      if (seam && seam.stepDir) {
        const sNodeA = seam.nodeA ?? seam.from;
        const sNodeB = seam.nodeB ?? seam.to;
        const sign = seg.from === sNodeA && seg.to === sNodeB ? 1 : -1;
        const sx = (Number(seam.stepDir.x) || 0) * sign;
        const sz = (Number(seam.stepDir.z) || 0) * sign;
        if (Math.hypot(sx, sz) > 1e-4) {
          return { fx: sx, fz: sz };
        }
      }
    }
    return { fx: dx, fz: dz };
  }

  _evaluatePlatesOnArrival(arrivedNodeId, actorId) {
    const plates = this.levelDef?.plates;
    if (!Array.isArray(plates) || plates.length === 0) return;

    const prevActive = new Set(this.activePlates);
    const newlyActivatedIds = new Set();

    const deactSourceIds = new Set();
    for (const plate of plates) {
      if (!plate || !plate.id) continue;
      const reqActors = normalizeStringList(plate.requiredActors ?? plate.requiredActorId);
      const actorAllowed = reqActors.length === 0 || reqActors.includes(actorId);

      if (plate.mode === 'hold') {
        const held = Array.from(this.actors.values()).some(
          (a) => a.nodeId === plate.nodeId && (reqActors.length === 0 || reqActors.includes(a.id))
        );
        const was = Boolean(this.plateState.get(plate.id));
        this.plateState.set(plate.id, held);
        if (!was && held) newlyActivatedIds.add(plate.id);
        if (held) deactSourceIds.add(plate.id);
      } else if (plate.mode === 'seal' || plate.retriggerable === false) {
        // Initial obstacle/lock seals only deactivate via deactivatesPlates; walking back onto their tile never re-latches them.
      } else if (plate.mode === 'latch') {
        if (arrivedNodeId === plate.nodeId && actorAllowed) {
          if (!this.plateState.get(plate.id)) newlyActivatedIds.add(plate.id);
          this.plateState.set(plate.id, true);
          deactSourceIds.add(plate.id);
        }
      } else {
        if (arrivedNodeId === plate.nodeId && actorAllowed) {
          const nextVal = !this.plateState.get(plate.id);
          this.plateState.set(plate.id, nextVal);
          if (nextVal) {
            newlyActivatedIds.add(plate.id);
            deactSourceIds.add(plate.id);
          }
        }
      }
    }

    // Mutually exclusive deactivations triggered by active/newly-activated plates
    for (const plate of plates) {
      if (!plate?.id || !deactSourceIds.has(plate.id)) continue;
      const deact = normalizeStringList(plate.deactivatesPlates);
      for (const targetPid of deact) {
        this.plateState.set(targetPid, false);
      }
    }

    // Enforce blockedByPlates on plates themselves
    for (const plate of plates) {
      if (!plate?.id || !this.plateState.get(plate.id)) continue;
      const blockedBy = normalizeStringList(plate.blockedByPlates);
      if (blockedBy.some((bid) => bid !== plate.id && this.plateState.get(bid))) {
        this.plateState.set(plate.id, false);
      }
    }

    const nextActive = new Set();
    for (const plate of plates) {
      if (plate?.id && this.plateState.get(plate.id)) {
        nextActive.add(plate.id);
      }
    }

    const changedPlates = [];
    for (const plate of plates) {
      if (!plate?.id) continue;
      const was = prevActive.has(plate.id);
      const now = nextActive.has(plate.id);
      if (was !== now) {
        changedPlates.push({ plate, active: now });
      }
    }

    if (changedPlates.length === 0) return;

    this.activePlates = nextActive;
    this.targetGroupOffsets = this._computeTargetGroupOffsets();
    this.graph.syncMechanisms(this.activePlates, this.groupOffsets);

    const activeList = Array.from(this.activePlates);
    for (const { plate, active } of changedPlates) {
      this._emit(EVENTS.PLATE_TOGGLED, {
        plateId: plate.id,
        nodeId: plate.nodeId,
        active,
        activePlates: activeList,
        actorId
      });
    }
  }

  _checkWinCondition() {
    const wc = this._getResolvedWinCondition();
    if (this.goalReached || !wc) return false;
    if (this.activePath !== null) return false;

    let satisfied = false;
    let winnerActorId = this.activeActorId;
    let winnerNodeId = this.actors.get(this.activeActorId)?.nodeId ?? null;

    if (wc.type === 'reach' || (!wc.type && wc.goalNodeId)) {
      const reqActorIds = normalizeStringList(wc.requiredActors ?? wc.requiredActorId);
      if (reqActorIds.length > 0) {
        for (const aid of reqActorIds) {
          const reqActor = this.actors.get(aid);
          if (reqActor && reqActor.nodeId === wc.goalNodeId) {
            satisfied = true;
            winnerActorId = reqActor.id;
            winnerNodeId = reqActor.nodeId;
            break;
          }
        }
      } else {
        for (const actor of this.actors.values()) {
          if (actor.nodeId === wc.goalNodeId) {
            satisfied = true;
            winnerActorId = actor.id;
            winnerNodeId = actor.nodeId;
            break;
          }
        }
      }
    } else if (wc.type === 'all_on_goals') {
      const entries = Object.entries(wc.goals || {});
      satisfied =
        entries.length > 0 &&
        entries.every(([aid, goalNodeId]) => {
          const actor = this.actors.get(aid);
          return actor && actor.nodeId === goalNodeId;
        });
    }

    if (!satisfied) return false;

    const reachedNode = winnerNodeId ? this.graph.getNode(winnerNodeId) : null;
    const isPortal = isStagePortalNode(reachedNode);
    const hasMoreStages = this.totalStages > 1 && this.stageIndex < this.totalStages - 1;
    const explicitSubStage =
      this.levelDef.isSubStage === true ||
      this.levelDef.hasNextStage === true ||
      this.levelDef.isFinalStage === false;
    const portalSubStage =
      isPortal &&
      reachedNode?.isFinalGoal !== true &&
      this.levelDef.isFinalStage !== true;

    this.goalReached = true;
    this.stageCompleted = true;

    const rootLevelId = this.parentLevelDef?.id ?? this.levelDef.id;
    const stageId = this.levelDef.stageId ?? this.levelDef.id ?? `stage_${this.stageIndex}`;

    if (hasMoreStages || explicitSubStage || portalSubStage) {
      this._emit(EVENTS.STAGE_COMPLETED, {
        levelId: rootLevelId,
        stageId,
        stageIndex: this.stageIndex,
        totalStages: this.totalStages,
        nextStageIndex: reachedNode?.targetStageIndex ?? this.stageIndex + 1,
        nextStageId: reachedNode?.nextStageId ?? null,
        isFinalStage: false,
        winCondition: wc,
        actorId: winnerActorId,
        nodeId: winnerNodeId
      });
      return true;
    }

    if (this.totalStages > 1) {
      this._emit(EVENTS.STAGE_COMPLETED, {
        levelId: rootLevelId,
        stageId,
        stageIndex: this.stageIndex,
        totalStages: this.totalStages,
        nextStageIndex: null,
        nextStageId: null,
        isFinalStage: true,
        winCondition: wc,
        actorId: winnerActorId,
        nodeId: winnerNodeId
      });
    }

    this._emit(EVENTS.NAV_GOAL_REACHED, {
      levelId: rootLevelId,
      stageIndex: this.stageIndex,
      totalStages: this.totalStages,
      winCondition: wc,
      actorId: winnerActorId,
      nodeId: winnerNodeId
    });
    return true;
  }

  _completeSegmentArrival(actor, seg) {
    const toNode = this.graph.getNode(seg.to);
    actor.nodeId = seg.to;
    if (toNode) {
      setGroupPosition(actor.entry?.group, toNode.walkPos);
    }

    if (seg.isIllusionEdge) {
      applyFigurineBridgeRenderState(actor.entry?.group, false);
      this._bridgeState = null;
      this._emit(EVENTS.NAV_BRIDGE_EXIT, {
        actorId: actor.id,
        seamId: seg.seamId,
        from: seg.from,
        to: seg.to
      });
    }

    this._emit(EVENTS.NAV_NODE_ENTERED, {
      actorId: actor.id,
      nodeId: seg.to,
      from: seg.from,
      isIllusionEdge: Boolean(seg.isIllusionEdge)
    });

    this._evaluatePlatesOnArrival(seg.to, actor.id);

    if (toNode && isStagePortalNode(toNode) && !this._triggeredPortals.has(toNode.id)) {
      const wc = this._getResolvedWinCondition();
      const wcGoalId = wc?.goalNodeId ?? null;
      if (toNode.id !== wcGoalId && toNode.isFinalGoal !== true) {
        this._triggeredPortals.add(toNode.id);
        this._emit(EVENTS.STAGE_COMPLETED, {
          levelId: this.parentLevelDef?.id ?? this.levelDef?.id,
          stageId: this.levelDef?.stageId ?? this.levelDef?.id ?? `stage_${this.stageIndex}`,
          stageIndex: this.stageIndex,
          totalStages: this.totalStages,
          nextStageIndex: toNode.targetStageIndex ?? this.stageIndex + 1,
          nextStageId: toNode.nextStageId ?? null,
          isFinalStage: false,
          actorId: actor.id,
          nodeId: toNode.id
        });
      }
    }
  }

  _animatePlatforms(dt) {
    if (dt <= 0 || !this._hasPendingPlatformAnimation()) return;

    const maxStep = 6.0 * dt;
    let moved = false;

    for (const [gid, target] of this.targetGroupOffsets.entries()) {
      const cur = this.groupOffsets.get(gid) || { x: 0, y: 0, z: 0 };
      const dx = target.x - cur.x;
      const dy = target.y - cur.y;
      const dz = target.z - cur.z;
      const dist = Math.hypot(dx, dy, dz);
      if (dist <= 1e-6) continue;

      moved = true;
      if (dist <= maxStep) {
        this.groupOffsets.set(gid, { ...target });
      } else {
        const ratio = maxStep / dist;
        this.groupOffsets.set(gid, {
          x: cur.x + dx * ratio,
          y: cur.y + dy * ratio,
          z: cur.z + dz * ratio
        });
      }
    }

    if (moved) {
      this.graph.syncMechanisms(this.activePlates, this.groupOffsets);
      this._syncIdleActorPositions();
    }
  }

  /**
   * Advances active actor movement, illusion bridge state transitions, plate animations, and figurine updates.
   */
  update(dt = 0) {
    const stepDt = Math.max(0, Number(dt) || 0);
    this._elapsed += stepDt;
    if (!this.levelDef) return;

    let remaining = stepDt;
    while (this.activePath && remaining > 1e-9) {
      const actor = this.actors.get(this.activePath.actorId);
      const seg = this.activePath.segments[this.activePath.segmentIndex];
      if (!actor || !seg) {
        this.activePath = null;
        actor?.entry?.setMoving?.(false);
        this._checkWinCondition();
        break;
      }

      if (!seg._entered) {
        if (!this._isSegmentTraversable(seg, actor.id)) {
          this.activePath = null;
          actor.entry?.setMoving?.(false);
          const standNode = this.graph.getNode(actor.nodeId);
          if (standNode) {
            setGroupPosition(actor.entry?.group, standNode.walkPos);
          }
          break;
        }
        seg._entered = true;
        if (seg.isIllusionEdge) {
          this._bridgeState = {
            actorId: actor.id,
            seamId: seg.seamId,
            from: seg.from,
            to: seg.to
          };
          applyFigurineBridgeRenderState(actor.entry?.group, true);
          this._emit(EVENTS.NAV_BRIDGE_ENTER, {
            actorId: actor.id,
            seamId: seg.seamId,
            from: seg.from,
            to: seg.to
          });
        }
      }

      const fromNode = this.graph.getNode(seg.from);
      const toNode = this.graph.getNode(seg.to);
      if (!fromNode || !toNode) {
        if (seg.isIllusionEdge) {
          applyFigurineBridgeRenderState(actor.entry?.group, false);
          this._bridgeState = null;
          this._emit(EVENTS.NAV_BRIDGE_EXIT, {
            actorId: actor.id,
            seamId: seg.seamId,
            from: seg.from,
            to: seg.to
          });
        }
        this.activePath = null;
        actor.entry?.setMoving?.(false);
        break;
      }

      const dx = toNode.walkPos.x - fromNode.walkPos.x;
      const dy = toNode.walkPos.y - fromNode.walkPos.y;
      const dz = toNode.walkPos.z - fromNode.walkPos.z;
      const dist3D = Math.hypot(dx, dy, dz);
      // Illusion bridges span arbitrary camera-ray depth k*r while appearing ~1 tile apart on screen.
      const segDist = seg.isIllusionEdge ? 1.15 : Math.max(0.5, dist3D);
      const segDuration = segDist / Math.max(0.01, this.speed);
      const dtNeeded = (1 - this.activePath.progress) * segDuration;

      const { fx, fz } = this._computeSegmentFacing(seg, dx, dz);
      setGroupFacing(actor.entry?.group, fx, fz);

      if (remaining < dtNeeded) {
        this.activePath.progress += remaining / segDuration;
        remaining = 0;
        const t = this.activePath.progress;
        const bob = Math.abs(Math.sin(t * Math.PI)) * 0.12;
        setGroupPosition(actor.entry?.group, {
          x: fromNode.walkPos.x + dx * t,
          y: fromNode.walkPos.y + dy * t + bob,
          z: fromNode.walkPos.z + dz * t
        });
      } else {
        remaining -= dtNeeded;
        this.activePath.progress = 1;
        this._completeSegmentArrival(actor, seg);

        this.activePath.segmentIndex += 1;
        this.activePath.progress = 0;

        if (this.activePath.segmentIndex >= this.activePath.segments.length) {
          this.activePath = null;
          actor.entry?.setMoving?.(false);
          this._checkWinCondition();
          break;
        }
      }
    }

    this._animatePlatforms(stepDt);

    for (const actor of this.actors.values()) {
      actor.entry?.update?.(stepDt, this._elapsed);
    }
  }

  /**
   * Deterministically advances simulation ticks until movement and platform glides finish.
   */
  stepUntilIdle(maxSeconds = 15, dt = 0.05) {
    const step = dt > 0 ? dt : 0.05;
    let elapsed = 0;
    while ((this.activePath !== null || this._hasPendingPlatformAnimation()) && elapsed < maxSeconds) {
      this.update(step);
      elapsed += step;
    }
    if (this._hasPendingPlatformAnimation()) {
      this._snapPlatformsToTargets();
    }
    return {
      idle: this.activePath === null,
      elapsed,
      goalReached: this.goalReached
    };
  }

  /**
   * Cleans up bus subscriptions and resets active bridge state.
   */
  dispose() {
    for (const unsub of this._unsubs) {
      if (typeof unsub === 'function') unsub();
    }
    this._unsubs = [];
    this.activePath = null;
    this._bridgeState = null;
  }
}
