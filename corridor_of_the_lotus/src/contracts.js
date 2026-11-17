/**
 * Shared contracts, constants, event bus, and exact isometric illusion math
 * for Corridor of the Lotus (蓮島迴廊).
 */

export const ISO_ELEVATION_RAD = Math.atan(1 / Math.SQRT2); // ~35.2643897 deg
export const SNAP_TOLERANCE_DEG = 1.5;
export const MAGNET_TOLERANCE_DEG = 4.0;
export const DEFAULT_SEAM_THRESHOLD_PX = 8.5;

export const EVENTS = Object.freeze({
  CAMERA_ROTATED: 'camera:rotated',
  ILLUSION_ALIGNED: 'illusion:aligned',
  ILLUSION_BROKEN: 'illusion:broken',
  CAMERA_LOCK_CHANGED: 'camera:lockChanged',
  NAV_PATH_STARTED: 'nav:pathStarted',
  NAV_NODE_ENTERED: 'nav:nodeEntered',
  NAV_BRIDGE_ENTER: 'nav:bridgeEnter',
  NAV_BRIDGE_EXIT: 'nav:bridgeExit',
  NAV_GOAL_REACHED: 'nav:goalReached',
  PLATE_TOGGLED: 'puzzle:plateToggled',
  ACTOR_SWITCHED: 'actor:switched',
  LORE_TRIGGERED: 'lore:triggered',
  CHAPTER_COMPLETED: 'chapter:completed',
  ROTATOR_TURNED: 'rotator:turned',
  STAGE_TRANSITION_START: 'stage:transition-start',
  STAGE_COMPLETED: 'stage:completed',
  PROP_EFFECT_TRIGGERED: 'prop:effect-triggered',
  ENDING_CINEMATIC_STARTED: 'ending:cinematic-started',
  ENDING_CINEMATIC_FINISHED: 'ending:cinematic-finished',
});

/**
 * Creates a lightweight synchronous pub/sub event bus.
 * @returns {{ on: (event: string, handler: Function) => () => void, off: (event: string, handler: Function) => void, emit: (event: string, payload?: any) => void, clear: () => void }}
 */
export function createEventBus() {
  const listeners = new Map();

  function off(event, handler) {
    const set = listeners.get(event);
    if (!set) return;
    set.delete(handler);
    if (set.size === 0) {
      listeners.delete(event);
    }
  }

  function on(event, handler) {
    if (typeof handler !== 'function') {
      return () => {};
    }
    let set = listeners.get(event);
    if (!set) {
      set = new Set();
      listeners.set(event, set);
    }
    set.add(handler);
    return () => off(event, handler);
  }

  function emit(event, payload) {
    const set = listeners.get(event);
    if (!set || set.size === 0) return;
    for (const handler of [...set]) {
      handler(payload);
    }
  }

  function clear() {
    listeners.clear();
  }

  return { on, off, emit, clear };
}

/**
 * Normalizes an angle in degrees into [0, 360).
 * @param {number} deg
 * @returns {number}
 */
export function normalizeDeg(deg) {
  const n = ((deg % 360) + 360) % 360;
  if (n >= 360 || n === 0) return 0;
  return n;
}

/**
 * Returns the shortest signed angular delta in [-180, 180] from `current` to `target`
 * such that `normalizeDeg(current + delta) === normalizeDeg(target)` (within float precision).
 * @param {number} current
 * @param {number} target
 * @returns {number}
 */
export function shortestAngleDiffDeg(current, target) {
  let d = normalizeDeg(target - current);
  if (d > 180) {
    d -= 360;
  }
  return d === 0 ? 0 : d;
}

function snapNearInt(value) {
  const rounded = Math.round(value);
  if (Math.abs(value - rounded) < 1e-9) {
    return rounded === 0 ? 0 : rounded;
  }
  return value;
}

/**
 * Returns the unnormalized isometric camera ray direction pointing from the origin
 * toward the orthographic camera at `azimuthDeg`, scaled so `y === 1`.
 * At 45 -> (1,1,1), 135 -> (1,1,-1), 225 -> (-1,1,-1), 315 -> (-1,1,1).
 * @param {number} azimuthDeg
 * @returns {{ x: number, y: number, z: number }}
 */
export function getIsoRayDirection(azimuthDeg) {
  const rad = (azimuthDeg * Math.PI) / 180;
  return {
    x: snapNearInt(Math.sin(rad) * Math.SQRT2),
    y: 1,
    z: snapNearInt(Math.cos(rad) * Math.SQRT2),
  };
}

/**
 * Computes the world-space seam endpoints on the top faces of two 1x1x1 blocks
 * `posA` and `posB` separated visually along horizontal `stepDir`.
 * @param {{ x: number, y: number, z: number }} posA
 * @param {{ x: number, y: number, z: number }} posB
 * @param {{ x?: number, y?: number, z?: number }} stepDir
 * @returns {{ seamA: { x: number, y: number, z: number }, seamB: { x: number, y: number, z: number } }}
 */
export function computeSeamEndpoints(posA, posB, stepDir) {
  const sx = stepDir?.x ?? 0;
  const sz = stepDir?.z ?? 0;
  return {
    seamA: {
      x: posA.x + 0.5 * sx,
      y: posA.y + 0.5,
      z: posA.z + 0.5 * sz,
    },
    seamB: {
      x: posB.x - 0.5 * sx,
      y: posB.y + 0.5,
      z: posB.z - 0.5 * sz,
    },
  };
}

/**
 * Computes the exact 3D center of block B aligned with block A across `stepDir`
 * along the isometric camera ray at `azimuthDeg` with depth disparity `depthK`.
 * Guarantees `seamB - seamA === depthK * getIsoRayDirection(azimuthDeg)`.
 * @param {{ x: number, y: number, z: number }} posA
 * @param {{ x?: number, y?: number, z?: number }} stepDir
 * @param {number} azimuthDeg
 * @param {number} depthK
 * @returns {{ x: number, y: number, z: number }}
 */
export function computeAlignedBlockPos(posA, stepDir, azimuthDeg, depthK) {
  const sx = stepDir?.x ?? 0;
  const sz = stepDir?.z ?? 0;
  const r = getIsoRayDirection(azimuthDeg);
  return {
    x: snapNearInt(posA.x + sx + depthK * r.x),
    y: snapNearInt(posA.y + depthK * r.y),
    z: snapNearInt(posA.z + sz + depthK * r.z),
  };
}

function readCoordTuple(input, fallback = [0, 0, 0]) {
  if (Array.isArray(input)) {
    return [
      Number(input[0]) || 0,
      Number(input[1]) || 0,
      Number(input[2]) || 0,
    ];
  }
  if (input && typeof input === 'object') {
    return [
      Number(input.x) || 0,
      Number(input.y) || 0,
      Number(input.z) || 0,
    ];
  }
  return fallback;
}

function cleanGridCoord(value) {
  const roundedInt = Math.round(value);
  if (Math.abs(value - roundedInt) < 1e-6) {
    return roundedInt === 0 ? 0 : roundedInt;
  }
  const roundedMicro = Math.round(value * 1e6) / 1e6;
  return roundedMicro === 0 ? 0 : roundedMicro;
}

/**
 * Normalizes an integer quarter-turn count into [0, 3].
 * @param {number} quarterTurns
 * @returns {number}
 */
export function normalizeQuarterTurns(quarterTurns) {
  const q = Math.round(Number(quarterTurns) || 0);
  const n = ((q % 4) + 4) % 4;
  return n === 0 ? 0 : n;
}

/**
 * Rotates a 3D point around a Y-axis pivot `[px, py, pz]` by `quarterTurns`
 * (right-hand rule around +Y: +1 quarter turn = +90 deg in XZ plane, +Z -> +X -> -Z -> -X).
 * Accepts array `[x, y, z]` or `{ x, y, z }` inputs and returns `[rx, ry, rz]`.
 * @param {number[] | { x: number, y: number, z: number }} point
 * @param {number[] | { x: number, y: number, z: number }} [pivot=[0, 0, 0]]
 * @param {number} [quarterTurns=0]
 * @returns {[number, number, number]}
 */
export function rotatePointAroundPivotY(point, pivot = [0, 0, 0], quarterTurns = 0) {
  const [x, y, z] = readCoordTuple(point);
  const [px, py, pz] = readCoordTuple(pivot);
  const qt = Number(quarterTurns) || 0;
  const dx = x - px;
  const dy = y - py;
  const dz = z - pz;

  let rx;
  let rz;
  const nearestInt = Math.round(qt);
  if (Math.abs(qt - nearestInt) < 1e-9) {
    const q = ((nearestInt % 4) + 4) % 4;
    if (q === 0) {
      rx = px + dx;
      rz = pz + dz;
    } else if (q === 1) {
      rx = px + dz;
      rz = pz - dx;
    } else if (q === 2) {
      rx = px - dx;
      rz = pz - dz;
    } else {
      rx = px - dz;
      rz = pz + dx;
    }
  } else {
    const theta = qt * (Math.PI / 2);
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    rx = px + dx * cos + dz * sin;
    rz = pz - dx * sin + dz * cos;
  }

  return [
    cleanGridCoord(rx),
    cleanGridCoord(py + dy),
    cleanGridCoord(rz),
  ];
}
