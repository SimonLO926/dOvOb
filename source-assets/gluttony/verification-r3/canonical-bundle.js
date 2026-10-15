var scope0v0 = ["I", "O", "T", "S", "Z", "J", "L"],
  scope0v1 = {
    I: [[[0, 1], [1, 1], [2, 1], [3, 1]], [[2, 0], [2, 1], [2, 2], [2, 3]], [[0, 2], [1, 2], [2, 2], [3, 2]], [[1, 0], [1, 1], [1, 2], [1, 3]]],
    O: [[[1, 0], [2, 0], [1, 1], [2, 1]]],
    T: [[[1, 0], [0, 1], [1, 1], [2, 1]], [[1, 0], [1, 1], [2, 1], [1, 2]], [[0, 1], [1, 1], [2, 1], [1, 2]], [[1, 0], [0, 1], [1, 1], [1, 2]]],
    S: [[[1, 0], [2, 0], [0, 1], [1, 1]], [[1, 0], [1, 1], [2, 1], [2, 2]], [[1, 1], [2, 1], [0, 2], [1, 2]], [[0, 0], [0, 1], [1, 1], [1, 2]]],
    Z: [[[0, 0], [1, 0], [1, 1], [2, 1]], [[2, 0], [1, 1], [2, 1], [1, 2]], [[0, 1], [1, 1], [1, 2], [2, 2]], [[1, 0], [0, 1], [1, 1], [0, 2]]],
    J: [[[0, 0], [0, 1], [1, 1], [2, 1]], [[1, 0], [2, 0], [1, 1], [1, 2]], [[0, 1], [1, 1], [2, 1], [2, 2]], [[1, 0], [1, 1], [0, 2], [1, 2]]],
    L: [[[2, 0], [0, 1], [1, 1], [2, 1]], [[1, 0], [1, 1], [1, 2], [2, 2]], [[0, 1], [1, 1], [2, 1], [0, 2]], [[0, 0], [1, 0], [1, 1], [1, 2]]],
    B: scope0v33(),
    X: [[[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]], [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]], [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]], [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]]],
    D: scope0v32([[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]]),
    R: [[[0, 0]]],
    A: [[[0, 0]]],
    C: [[[0, 0]]],
    G: scope0v32([[1, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]]),
    F: [Array.from({
      length: 9
    }, (scope1v0, scope1v1) => [scope1v1 % 3, Math.floor(scope1v1 / 3)])]
  },
  scope0v2 = ["seal", "reverse", "blind", "rush", "norotate"],
  scope0v3 = 1 / 30,
  scope0v4 = 1 / 60,
  scope0v5 = 15,
  scope0v6 = 1 / 400,
  scope0v7 = 15,
  scope0v8 = 1 / 50,
  scope0v9 = [.24, .24, .24, ...[16, 8, 4, 2, 1].map(scope2v0 => .28 * scope2v0 / 31)],
  scope0v10 = 2;
function scope0v11(scope3v0 = 1) {
  return 1 + .04 * Math.max(0, Math.min(15, Math.floor(Number(scope3v0) || 1) - 1));
}
function scope0v12(scope5v0 = 1) {
  let scope5v1 = scope0v11(scope5v0);
  return {
    nohold: scope0v4 * scope5v1,
    curse: scope0v3 * scope5v1,
    garbage: scope0v8 * scope5v1
  };
}
function scope0v13(scope7v0 = 1) {
  let scope7v1 = scope0v11(scope7v0) - 1,
    scope7v2 = scope0v9.map((scope9v0, scope9v1) => scope9v0 * (1 + scope7v1 * scope9v1)),
    scope7v3 = scope7v2.reduce((scope10v0, scope10v1) => scope10v0 + scope10v1, 0);
  return scope7v2.map(scope11v0 => scope11v0 / scope7v3);
}
function scope0v14(scope12v0 = Math.random, scope12v1 = 1) {
  let scope12v2 = scope12v0(),
    scope12v3 = 0,
    scope12v4 = scope0v13(scope12v1);
  for (let scope15v0 = 0; scope15v0 < scope12v4.length; scope15v0 += 1) if (scope12v3 += scope12v4[scope15v0], scope12v2 < scope12v3) return scope15v0 + 1;
  return 8;
}
function scope0v15(scope16v0) {
  return scope16v0.garbageGraceLeft > 0 || !!scope16v0.garbageGraceResolving;
}
var scope0v16 = {
  breakout: .005,
  bbtan: .005,
  pinball: .01,
  sand: .005
};
var scope0v17 = 4,
  scope0v18 = Object.freeze(["#ffd84a", "#ff4b4b", "#3c8dff", "#3dce6e"]),
  scope0v19 = 8,
  scope0v20 = {
    I: [0, 1],
    O: [1, 2],
    T: [2, 3],
    S: [3, 0],
    Z: [0, 2],
    J: [1, 3],
    L: [0, 3],
    B: [2, 0],
    X: [3, 1],
    D: [2, 1],
    R: [3, 2],
    A: [0, 1],
    C: [1, 0]
  };
function scope0v21(scope17v0) {
  return scope0v20[scope17v0] ?? [0, 1];
}
var scope0v22 = 1 / 8,
  scope0v23 = 1 / 2.2;
function scope0v24(scope18v0, scope18v1, scope18v2) {
  if (scope18v0.length < 2) return scope18v0.map(() => scope18v1);
  let scope18v3 = scope18v0.map(([scope20v0]) => scope20v0),
    scope18v4 = scope18v0.map(([, scope22v0]) => scope22v0),
    scope18v5 = Math.max(...scope18v3) !== Math.min(...scope18v3),
    scope18v6 = scope18v5 ? (Math.min(...scope18v3) + Math.max(...scope18v3)) / 2 : (Math.min(...scope18v4) + Math.max(...scope18v4)) / 2;
  return scope18v0.map(([scope24v0, scope24v1]) => (scope18v5 ? scope24v0 : scope24v1) <= scope18v6 ? scope18v1 : scope18v2);
}
function scope0v25(scope26v0, scope26v1, scope26v2 = !0) {
  let [scope26v3, scope26v4] = scope0v21(scope26v0);
  return !scope26v2 || scope26v1.length < 2 ? scope26v1.map(() => scope26v3) : scope0v24(scope26v1, scope26v3, scope26v4);
}
var scope0v26 = {};
function scope0v27(scope29v0) {
  if (Object.prototype.hasOwnProperty.call(scope0v26, scope29v0)) return scope0v26[scope29v0];
  let scope29v1 = scope0v1[scope29v0] || [],
    scope29v2 = null;
  if (scope29v1.length > 1) {
    let scope30v0 = scope29v1[0],
      scope30v1 = new Set(scope29v1[1].map(([scope31v0, scope31v1]) => `${scope31v0},${scope31v1}`));
    for (let scope33v0 of [3, 4, 5]) {
      for (let scope35v0 of [(scope36v0, scope36v1) => [scope33v0 - 1 - scope36v1, scope36v0], (scope37v0, scope37v1) => [scope37v1, scope33v0 - 1 - scope37v0]]) if (scope30v0.every(([scope38v0, scope38v1]) => scope30v1.has(scope35v0(scope38v0, scope38v1).join(",")))) {
        scope29v2 = scope35v0;
        break;
      }
      if (scope29v2) break;
    }
  }
  return scope0v26[scope29v0] = scope29v2, scope29v2;
}
function scope0v28(scope41v0, scope41v1, scope41v2 = 0) {
  let scope41v3 = scope0v1[scope41v0] || [[]],
    scope41v4 = scope41v3.length,
    scope41v5 = (scope41v2 % scope41v4 + scope41v4) % scope41v4,
    scope41v6 = Array.isArray(scope41v1) ? scope41v1 : scope41v3[0].map(() => scope41v1);
  if (!Array.isArray(scope41v1)) return scope41v3[scope41v5].map(() => scope41v1);
  if (!scope41v5) return scope41v6.slice();
  let scope41v7 = scope0v27(scope41v0),
    scope41v8 = scope41v3[scope41v5];
  if (!scope41v7) return scope41v8.map((scope45v0, scope45v1) => scope41v6[scope45v1] ?? scope41v6[0]);
  let scope41v9 = Array(scope41v8.length).fill(scope41v6[0]);
  return scope41v3[0].forEach(([scope46v0, scope46v1], scope46v2) => {
    let scope46v3 = scope46v0,
      scope46v4 = scope46v1;
    for (let scope48v0 = 0; scope48v0 < scope41v5; scope48v0 += 1) [scope46v3, scope46v4] = scope41v7(scope46v3, scope46v4);
    let scope46v5 = scope41v8.findIndex(([scope49v0, scope49v1]) => scope49v0 === scope46v3 && scope49v1 === scope46v4);
    scope46v5 >= 0 && (scope41v9[scope46v5] = scope41v6[scope46v2] ?? scope41v6[0]);
  }), scope41v9;
}
function scope0v29(scope51v0, scope51v1 = Math.random) {
  if (scope51v0 != null && scope51v1() < scope0v23) return scope51v0;
  let scope51v2 = [0, 1, 2, 3].filter(scope53v0 => scope53v0 !== scope51v0);
  return scope51v2[Math.floor(scope51v1() * scope51v2.length)] ?? 0;
}
function scope0v30(scope54v0, scope54v1 = Math.random, scope54v2 = null) {
  let scope54v3 = scope0v29(scope54v2, scope54v1),
    scope54v4 = scope0v1[scope54v0]?.[0] ?? [[0, 0]];
  if (scope54v4.length < 2 || scope54v1() >= scope0v22) return {
    sand: scope54v3,
    hue: scope54v3
  };
  let scope54v5 = [0, 1, 2, 3].filter(scope57v0 => scope57v0 !== scope54v3),
    scope54v6 = scope54v5[Math.floor(scope54v1() * scope54v5.length)] ?? scope54v3;
  return {
    sand: scope0v24(scope54v4, scope54v3, scope54v6),
    hue: scope54v3
  };
}
function scope0v31(scope58v0, scope58v1, scope58v2, scope58v3 = 0) {
  return typeof scope58v2 == "number" ? scope58v1.map(() => scope58v2) : Array.isArray(scope58v2) && scope58v2.length === 2 && (scope0v1[scope58v0]?.[0].length ?? 0) !== 2 ? scope0v28(scope58v0, scope0v24(scope0v1[scope58v0][0], scope58v2[0], scope58v2[1]), scope58v3) : Array.isArray(scope58v2) ? scope0v28(scope58v0, scope58v2, scope58v3) : scope0v25(scope58v0, scope58v1, !0);
}
function scope0v32(scope61v0) {
  let scope61v1 = [scope61v0.map(scope62v0 => [...scope62v0])];
  for (let scope63v0 = 0; scope63v0 < 3; scope63v0 += 1) {
    let scope64v0 = scope61v1[scope63v0].map(([scope65v0, scope65v1]) => [scope65v1, -scope65v0]),
      scope64v1 = Math.min(...scope64v0.map(([scope67v0]) => scope67v0)),
      scope64v2 = Math.min(...scope64v0.map(([, scope69v0]) => scope69v0));
    scope61v1.push(scope64v0.map(([scope71v0, scope71v1]) => [scope71v0 - scope64v1, scope71v1 - scope64v2]));
  }
  return scope61v1;
}
function scope0v33() {
  return scope0v32([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1]]);
}
function scope0v34(scope74v0) {
  return scope74v0 <= 1 ? 10 : scope74v0 === 2 ? 20 : scope74v0 === 3 ? 40 : 80;
}
function scope0v35(scope75v0) {
  return ["breakout", "bbtan", "pinball", "sand"].find(scope76v0 => scope75v0.includes(scope76v0)) ?? null;
}
function scope0v36(scope77v0) {
  let scope77v1 = Number(scope77v0?.pace);
  return Number.isFinite(scope77v1) ? Math.min(10, Math.max(.5, Math.round(scope77v1 * 2) / 2)) : 1;
}
var scope0v37 = [[0, 0], [-1, 0], [1, 0], [0, -1], [-2, 0], [2, 0], [-1, -1], [1, -1]],
  scope0v38 = {
    "0>1": [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
    "1>0": [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
    "1>2": [[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],
    "2>1": [[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],
    "2>3": [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],
    "3>2": [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
    "3>0": [[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]],
    "0>3": [[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]]
  },
  scope0v39 = [0, 100, 300, 500, 800];
function scope0v40() {
  return Array.from({
    length: 20
  }, () => Array(10).fill(null));
}
function scope0v41(scope80v0, scope80v1, scope80v2, scope80v3) {
  return scope0v1[scope80v0][scope80v1 % scope0v1[scope80v0].length].map(([scope81v0, scope81v1]) => [scope80v2 + scope81v0, scope80v3 + scope81v1]);
}
function scope0v42(scope83v0, scope83v1, scope83v2) {
  let scope83v3 = scope83v0?.sandGrid;
  if (!scope83v3) return !1;
  let scope83v4 = scope0v19,
    scope83v5 = scope83v2 * scope83v4,
    scope83v6 = scope83v1 * scope83v4;
  for (let scope84v0 = 0; scope84v0 < scope83v4; scope84v0 += 1) {
    let scope85v0 = scope83v3[scope83v5 + scope84v0];
    if (!scope85v0) return !0;
    for (let scope86v0 = 0; scope86v0 < scope83v4; scope86v0 += 1) if (scope85v0[scope83v6 + scope86v0]) return !0;
  }
  return !1;
}
function scope0v43(scope87v0, scope87v1, scope87v2, scope87v3, scope87v4, scope87v5 = null) {
  return scope0v41(scope87v1, scope87v2, scope87v3, scope87v4).every(([scope89v0, scope89v1]) => scope89v0 < 0 || scope89v0 >= 10 || scope89v1 < 0 || scope89v1 >= 20 || scope87v0[scope89v1][scope89v0] ? !1 : !scope0v42(scope87v5, scope89v0, scope89v1));
}
function scope0v44(scope91v0, scope91v1) {
  let scope91v2 = [...scope91v0];
  for (let scope92v0 = scope91v2.length - 1; scope92v0 > 0; scope92v0 -= 1) {
    let scope93v0 = Math.floor(scope91v1() * (scope92v0 + 1));
    [scope91v2[scope92v0], scope91v2[scope93v0]] = [scope91v2[scope93v0], scope91v2[scope92v0]];
  }
  return scope91v2;
}
function scope0v45(scope94v0 = {}) {
  let scope94v1 = scope94v0.random ?? Math.random,
    scope94v2 = scope94v0.sequence ? [...scope94v0.sequence] : null,
    scope94v3 = [],
    scope94v4 = 0,
    scope94v5 = scope94v0.mode ?? "marathon";
  function scope94v6(scope96v0, scope96v1 = null) {
    let scope96v2 = {
      type: scope96v0,
      bombIndex: scope96v0 === "B" || scope96v0 === "X" ? Math.floor(scope94v1() * scope0v1[scope96v0][0].length) : null,
      curse: scope96v1,
      curseIndex: scope96v0 === "G" ? Math.floor(scope94v1() * scope0v1.G[0].length) : null
    };
    if (scope94v8.sanding) {
      let scope98v0 = scope0v30(scope96v0, scope94v1, scope94v8.sandHue);
      scope94v8.sandHue = scope98v0.hue, scope96v2.sand = scope98v0.sand;
    }
    return scope96v2;
  }
  function scope94v7() {
    if (scope94v2) {
      if (!scope94v2.length) throw new Error("piece sequence exhausted");
      let scope100v0 = scope94v2.shift();
      return scope94v6(scope100v0, scope100v0 === "G" ? "garbage" : null);
    }
    if (scope94v5 === "tetris" || scope94v5 === "sand" || scope94v5 === "marathon" && scope94v8.sanding) return scope94v3.length || scope94v3.push(...scope0v44(scope0v0, scope94v1)), scope94v6(scope94v3.pop());
    if (scope94v5 === "marathon") {
      let scope101v0 = scope0v12(scope94v8.stage),
        scope101v1 = scope94v1();
      if (scope101v1 < scope101v0.nohold) return scope94v6("C", "nohold");
      if (scope101v1 < scope101v0.nohold + scope101v0.curse) return scope94v6("C", scope0v2[Math.floor(scope94v1() * scope0v2.length)]);
      if (scope101v1 < scope101v0.nohold + scope101v0.curse + scope0v6) return scope94v6("F");
      if (scope101v1 < scope101v0.nohold + scope101v0.curse + scope0v6 + scope101v0.garbage) return scope94v6("G", "garbage");
      let scope101v2 = scope0v12(1),
        scope101v3 = 1 - scope101v2.nohold - scope101v2.curse - scope0v6 - scope101v2.garbage,
        scope101v4 = 1 - scope101v0.nohold - scope101v0.curse - scope0v6 - scope101v0.garbage,
        scope101v5 = scope94v1() * scope101v4 / scope101v3,
        scope101v6 = scope0v16.breakout,
        scope101v7 = scope101v6 + scope0v16.bbtan,
        scope101v8 = scope101v7 + scope0v16.pinball,
        scope101v9 = scope101v8 + scope0v16.sand;
      if (scope101v5 < scope101v6) return scope94v6("R");
      if (scope101v5 < scope101v7) return scope94v6("X");
      if (scope101v5 < scope101v8) return scope94v6("D");
      if (scope101v5 < scope101v9) return scope94v6("A");
    }
    return scope94v4 += 1, scope94v4 >= 8 ? (scope94v4 = 0, scope94v6("B")) : (scope94v3.length || scope94v3.push(...scope0v44(scope0v0, scope94v1)), scope94v6(scope94v3.pop()));
  }
  let scope94v8 = {
    grid: scope0v40(),
    active: null,
    hold: null,
    holdLocked: !1,
    noHoldLeft: 0,
    feverLeft: 0,
    feverResolving: !1,
    feverGroups: new Set(),
    feverBlastX: 4,
    pendingGarbage: 0,
    garbageGraceLeft: 0,
    garbageGraceResolving: !1,
    queue: [],
    mode: scope94v5,
    score: 0,
    lines: 0,
    stage: 1,
    stageLines: 0,
    stageGoal: 10,
    pendingFlips: 0,
    pendingReward: null,
    combo: 0,
    comboArmed: !1,
    pendingBoom: null,
    sanding: !1,
    sandGrid: null,
    sandLeft: 0,
    sandExit: !1,
    spin: null,
    spinEligible: !1,
    sandHue: null,
    pace: 1,
    paceName: "normal",
    phase: "ready",
    gid: 1,
    random: scope94v1,
    pull: scope94v7
  };
  return scope94v8.setMode = scope102v0 => {
    scope94v5 = scope102v0, scope94v8.mode = scope102v0;
  }, scope94v8;
}
function scope0v46(scope103v0) {
  return scope103v0.gid += 1, scope103v0.gid;
}
function scope0v47(scope104v0, scope104v1) {
  return scope104v1 && scope104v0.setMode(scope104v1), scope104v0.grid = scope0v40(), scope104v0.hold = null, scope104v0.holdLocked = !1, scope104v0.noHoldLeft = 0, scope104v0.feverLeft = 0, scope104v0.feverResolving = !1, scope104v0.feverGroups = new Set(), scope104v0.feverBlastX = 4, scope104v0.pendingGarbage = 0, scope104v0.garbageGraceLeft = 0, scope104v0.garbageGraceResolving = !1, scope104v0.score = 0, scope104v0.lines = 0, scope104v0.stage = 1, scope104v0.stageLines = 0, scope104v0.stageGoal = scope0v34(1), scope104v0.pendingFlips = 0, scope104v0.pendingReward = null, scope104v0.combo = 0, scope104v0.comboArmed = !1, scope104v0.pendingBoom = null, scope104v0.sanding = !1, scope104v0.sandGrid = null, scope104v0.sandLeft = 0, scope104v0.sandExit = !1, scope104v0.sandHue = null, scope104v0.spin = null, scope104v0.spinEligible = !1, scope104v0.phase = "playing", scope104v0.queue = [scope104v0.pull(), scope104v0.pull(), scope104v0.pull()], scope0v48(scope104v0), scope104v0;
}
function scope0v48(scope105v0, scope105v1) {
  scope105v0.feverResolving = !1, scope105v0.garbageGraceResolving = !1;
  let scope105v2 = scope105v1 ?? scope105v0.queue.shift();
  scope105v1 || scope105v0.queue.push(scope105v0.pull());
  let scope105v3 = {
    type: scope105v2.type,
    rot: 0,
    x: 3,
    y: 0,
    bombIndex: scope105v2.bombIndex ?? null,
    curse: scope105v2.curse ?? null,
    curseIndex: scope105v2.curseIndex ?? null,
    sand: scope105v2.sand ?? null
  };
  return scope105v0.spinEligible = !1, scope0v43(scope105v0.grid, scope105v3.type, scope105v3.rot, scope105v3.x, scope105v3.y, scope105v0) ? (scope105v0.active = scope105v3, !0) : (scope105v0.active = null, scope105v0.phase = "over", !1);
}
function scope0v49(scope106v0, scope106v1, scope106v2) {
  if (scope106v0.phase !== "playing" || !scope106v0.active) return !1;
  let {
    type: scope106v3,
    rot: scope106v4,
    x: scope106v5,
    y: scope106v6
  } = scope106v0.active;
  return scope0v43(scope106v0.grid, scope106v3, scope106v4, scope106v5 + scope106v1, scope106v6 + scope106v2, scope106v0) ? (scope106v0.active.x += scope106v1, scope106v0.active.y += scope106v2, (scope106v1 || scope106v2) && (scope106v0.spinEligible = !1), !0) : !1;
}
function scope0v50(scope107v0, scope107v1) {
  if (scope107v0.phase !== "playing" || !scope107v0.active) return !1;
  let {
      type: scope107v2,
      rot: scope107v3,
      x: scope107v4,
      y: scope107v5
    } = scope107v0.active,
    scope107v6 = scope0v1[scope107v2].length,
    scope107v7 = (scope107v3 + scope107v1 + scope107v6) % scope107v6,
    scope107v8 = scope0v38[`${scope107v3}>${scope107v7}`] && "JLSTZ".includes(scope107v2) ? scope0v38[`${scope107v3}>${scope107v7}`] : scope0v37;
  for (let scope108v0 = 0; scope108v0 < scope107v8.length; scope108v0 += 1) {
    let [scope109v0, scope109v1] = scope107v8[scope108v0];
    if (scope0v43(scope107v0.grid, scope107v2, scope107v7, scope107v4 + scope109v0, scope107v5 + scope109v1, scope107v0)) return scope107v0.active.rot = scope107v7, scope107v0.active.x += scope109v0, scope107v0.active.y += scope109v1, scope107v0.spinEligible = !0, scope107v0.lastKick = scope108v0, !0;
  }
  return !1;
}
function scope0v51(scope110v0) {
  if (scope110v0.phase !== "playing" || !scope110v0.active || scope110v0.holdLocked || scope110v0.noHoldLeft > 0) return !1;
  let scope110v1 = {
    type: scope110v0.active.type,
    bombIndex: scope110v0.active.bombIndex ?? null,
    curse: scope110v0.active.curse ?? null,
    curseIndex: scope110v0.active.curseIndex ?? null,
    sand: scope110v0.active.sand ?? null
  };
  if (scope110v0.hold == null) return scope110v0.hold = scope110v1, scope110v0.holdLocked = !0, scope0v48(scope110v0);
  let scope110v2 = scope110v0.hold;
  return scope110v0.hold = scope110v1, scope110v0.holdLocked = !0, scope0v48(scope110v0, scope110v2);
}
function scope0v52(scope111v0) {
  if (!scope111v0.active) return null;
  let {
      type: scope111v1,
      rot: scope111v2,
      x: scope111v3
    } = scope111v0.active,
    scope111v4 = scope111v0.active.y;
  for (; scope0v43(scope111v0.grid, scope111v1, scope111v2, scope111v3, scope111v4 + 1, scope111v0);) scope111v4 += 1;
  return scope111v4;
}
function scope0v53(scope113v0) {
  if (scope113v0.phase !== "playing" || !scope113v0.active) return 0;
  let scope113v1 = scope113v0.active.y,
    scope113v2 = scope0v52(scope113v0),
    scope113v3 = scope113v2 - scope113v1;
  return scope113v0.active.y = scope113v2, scope113v3 > 0 && (scope113v0.spinEligible = !1), scope113v0.score += scope113v3 * 2 * scope0v36(scope113v0) * (scope0v56(scope113v0) ? 3 : 1), scope0v74(scope113v0), scope113v3;
}
function scope0v54(scope114v0) {
  let scope114v1 = scope114v0();
  if (scope114v1 < .4) {
    let scope115v0 = [];
    for (let scope116v0 = -1; scope116v0 <= 1; scope116v0 += 1) for (let scope117v0 = -1; scope117v0 <= 1; scope117v0 += 1) (scope117v0 || scope116v0) && scope115v0.push([scope117v0, scope116v0]);
    return scope115v0;
  }
  if (scope114v1 < .75) return [[1, 0], [-1, 0], [0, 1], [0, -1], [2, 0], [-2, 0], [0, 2], [0, -2], [1, 1], [-1, 1]];
  let scope114v2 = [];
  for (let scope118v0 = -2; scope118v0 <= 2; scope118v0 += 1) for (let scope119v0 = -2; scope119v0 <= 2; scope119v0 += 1) !scope119v0 && !scope118v0 || scope114v0() < .55 && scope114v2.push([scope119v0, scope118v0]);
  return scope114v2;
}
function scope0v55(scope120v0, scope120v1) {
  return scope120v0.type === "X" && scope120v1 === scope120v0.bombIndex ? "bbtan" : scope120v0.type === "D" ? "pinball" : scope120v0.type === "R" ? "breakout" : scope120v0.type === "A" ? "sand" : null;
}
function scope0v56(scope121v0) {
  return scope121v0.mode === "marathon" && (scope121v0.feverLeft > 0 || !!scope121v0.feverResolving);
}
function scope0v57(scope122v0, scope122v1 = []) {
  if (scope122v0.mode !== "marathon") return !1;
  let scope122v2 = !1;
  for (let scope124v0 of scope122v1) {
    if (scope124v0.type !== "F") continue;
    let scope125v0 = scope124v0.feverId ?? scope124v0.g ?? `${scope124v0.x},${scope124v0.y}`;
    scope122v0.feverGroups.has(scope125v0) || (scope122v0.feverGroups.add(scope125v0), scope122v2 = !0);
  }
  return scope122v2 && (scope122v0.feverLeft = scope0v7, scope122v0.feverResolving = !0, scope122v0.noHoldLeft = 0), scope122v2;
}
function scope0v58(scope126v0) {
  return (scope126v0.mode === "sprint" || scope126v0.mode === "tetris" ? 1 + Math.floor(scope126v0.lines / 10) : scope126v0.stage * scope0v36(scope126v0)) * (scope0v56(scope126v0) ? 3 : 1);
}
function scope0v59(scope127v0, scope127v1) {
  let scope127v2 = [];
  for (let scope128v0 of scope127v1) for (let scope129v0 = Math.max(0, scope128v0 - 1); scope129v0 <= Math.min(19, scope128v0 + 1); scope129v0 += 1) for (let scope130v0 = Math.max(0, scope127v0.feverBlastX - 1); scope130v0 <= Math.min(9, scope127v0.feverBlastX + 1); scope130v0 += 1) {
    let scope131v0 = scope127v0.grid[scope129v0][scope130v0];
    scope131v0 && (scope127v2.push({
      x: scope130v0,
      y: scope129v0,
      ...scope0v65(scope131v0),
      cause: "blast"
    }), scope127v0.grid[scope129v0][scope130v0] = null);
  }
  return scope127v2;
}
function scope0v60(scope132v0, scope132v1, scope132v2, scope132v3 = []) {
  let scope132v4 = new Map(scope132v3.map(scope134v0 => [`${scope134v0.x},${scope134v0.y}`, scope134v0])),
    scope132v5 = [],
    scope132v6 = new Set();
  for (let scope135v0 of scope132v1) for (let [scope136v0, scope136v1] of scope0v54(scope132v2)) {
    let scope137v0 = scope135v0.x + scope136v0,
      scope137v1 = scope135v0.y + scope136v1,
      scope137v2 = `${scope137v0},${scope137v1}`;
    if (scope137v0 < 0 || scope137v1 < 0 || scope137v0 >= 10 || scope137v1 >= 20 || scope132v6.has(scope137v2)) continue;
    scope132v6.add(scope137v2), scope132v4.has(scope137v2) && (scope132v4.get(scope137v2).cause = "blast");
    let scope137v3 = scope132v0[scope137v1][scope137v0];
    scope137v3 && (scope132v5.push({
      x: scope137v0,
      y: scope137v1,
      type: scope137v3.type,
      feverId: scope137v3.feverId ?? null,
      reward: scope137v3.reward ?? null,
      curse: scope137v3.curse ?? null,
      cause: "blast"
    }), scope132v0[scope137v1][scope137v0] = null);
  }
  return scope132v5;
}
var scope0v61 = {
  0: [[-1, -1], [1, -1]],
  1: [[1, -1], [1, 1]],
  2: [[-1, 1], [1, 1]],
  3: [[-1, -1], [-1, 1]]
};
function scope0v62(scope138v0) {
  let scope138v1 = scope138v0.active;
  if (!scope138v1 || scope138v1.type !== "T" || !scope138v0.spinEligible) return null;
  let scope138v2 = scope138v1.x + 1,
    scope138v3 = scope138v1.y + 1,
    scope138v4 = (scope139v0, scope139v1) => {
      let scope139v2 = scope138v2 + scope139v0,
        scope139v3 = scope138v3 + scope139v1;
      return scope139v2 < 0 || scope139v2 >= 10 || scope139v3 < 0 || scope139v3 >= 20 || !!scope138v0.grid[scope139v3][scope139v2];
    };
  return [[-1, -1], [1, -1], [-1, 1], [1, 1]].filter(([scope140v0, scope140v1]) => scope138v4(scope140v0, scope140v1)).length < 3 ? null : scope0v61[scope138v1.rot].filter(([scope142v0, scope142v1]) => scope138v4(scope142v0, scope142v1)).length === 2 || scope138v0.lastKick === 4 ? "tspin" : "mini";
}
function scope0v63(scope144v0, scope144v1) {
  let scope144v2 = Math.max(0, Math.min(3, scope144v1));
  return scope144v0 === "mini" ? [100, 200, 400, 400][scope144v2] : [400, 800, 1200, 1600][scope144v2];
}
function scope0v64(scope145v0, scope145v1) {
  return scope145v0 === "mini" ? scope145v1 === 1 ? "mini-single" : "mini" : ["tspin", "single", "double", "triple"][Math.max(0, Math.min(3, scope145v1))];
}
function scope0v65(scope146v0, scope146v1) {
  return {
    type: scope146v0.type,
    g: scope146v0.g,
    feverId: scope146v0.feverId ?? null,
    bomb: !!scope146v0.bomb,
    reward: scope146v0.reward ?? null,
    curse: scope146v0.curse ?? null,
    sand: scope146v1 === void 0 ? scope146v0.sand ?? null : scope146v1
  };
}
function scope0v66(scope147v0, scope147v1, scope147v2, scope147v3) {
  let scope147v4 = scope0v19,
    scope147v5 = scope147v2 * scope147v4,
    scope147v6 = scope147v1 * scope147v4;
  for (let scope148v0 = 0; scope148v0 < scope147v4; scope148v0 += 1) {
    let scope149v0 = scope147v0[scope147v5 + scope148v0];
    if (scope149v0) for (let scope150v0 = 0; scope150v0 < scope147v4; scope150v0 += 1) {
      let scope151v0 = scope147v6 + scope150v0;
      scope151v0 >= 0 && scope151v0 < scope149v0.length && (scope149v0[scope151v0] = scope147v3);
    }
  }
}
function scope0v67(scope152v0) {
  let scope152v1 = scope152v0.sandGrid;
  if (scope152v1) {
    let scope153v0 = Array(10).fill(0),
      scope153v1 = Array.from({
        length: 10
      }, () => Array(scope0v17).fill(0));
    for (let scope155v0 of scope152v1) scope155v0.forEach((scope156v0, scope156v1) => {
      if (!scope156v0) return;
      let scope156v2 = Math.floor(scope156v1 / scope0v19);
      scope153v0[scope156v2] += 1, scope153v1[scope156v2][scope156v0 - 1] += 1;
    });
    let scope153v2 = scope153v0.reduce((scope157v0, scope157v1) => scope157v0 + scope157v1, 0),
      scope153v3 = [3, 4, 5, 6].reduce((scope158v0, scope158v1) => scope153v0[scope158v1] < scope153v0[scope158v0] ? scope158v1 : scope158v0, 4),
      scope153v4 = Math.min(180, Math.round(scope153v2 / (scope0v19 * scope0v19))),
      scope153v5 = [...scope153v0];
    scope153v5[scope153v3 - 1] += scope153v0[scope153v3] / 2, scope153v5[scope153v3 + 1] += scope153v0[scope153v3] / 2, scope153v5[scope153v3] = 0;
    let scope153v6 = Array(10).fill(0);
    for (let scope159v0 = 0; scope159v0 < scope153v4; scope159v0 += 1) {
      let scope160v0 = -1;
      for (let scope161v0 = 0; scope161v0 < 10; scope161v0 += 1) scope161v0 === scope153v3 || scope153v6[scope161v0] >= 20 || (scope160v0 < 0 || scope153v5[scope161v0] / scope153v2 * scope153v4 - scope153v6[scope161v0] > scope153v5[scope160v0] / scope153v2 * scope153v4 - scope153v6[scope160v0]) && (scope160v0 = scope161v0);
      scope153v6[scope160v0] += 1;
    }
    let scope153v7 = scope153v1.reduce((scope162v0, scope162v1) => scope162v0.map((scope163v0, scope163v1) => scope163v0 + scope162v1[scope163v1]), Array(scope0v17).fill(0));
    scope152v0.grid = scope0v40();
    for (let scope164v0 = 0; scope164v0 < 10; scope164v0 += 1) {
      let scope165v0 = scope153v0[scope164v0] ? scope153v1[scope164v0] : scope153v7,
        scope165v1 = scope165v0.indexOf(Math.max(...scope165v0));
      for (let scope166v0 = 20 - scope153v6[scope164v0]; scope166v0 < 20; scope166v0 += 1) scope152v0.grid[scope166v0][scope164v0] = {
        type: ["I", "O", "T", "S"][scope165v1],
        g: scope0v46(scope152v0),
        bomb: !1,
        reward: null,
        curse: null,
        sand: null
      };
    }
  }
  scope152v0.sandGrid = null, scope152v0.sanding = !1, scope152v0.sandLeft = 0, scope152v0.sandExit = !1;
  for (let scope167v0 of scope152v0.queue) scope167v0 && (scope167v0.sand = null);
  scope152v0.hold && (scope152v0.hold.sand = null), scope152v0.active && (scope152v0.active.sand = null);
}
function scope0v68(scope168v0) {
  let scope168v1 = scope168v0.length,
    scope168v2 = scope168v0[0].length,
    scope168v3 = !1;
  for (let scope169v0 = scope168v1 - 2; scope169v0 >= 0; scope169v0 -= 1) {
    let scope170v0 = [];
    for (let scope171v0 = 0; scope171v0 < scope168v2; scope171v0 += 1) scope170v0.push(scope171v0);
    scope169v0 % 2 && scope170v0.reverse();
    for (let scope172v0 of scope170v0) {
      let scope173v0 = scope168v0[scope169v0][scope172v0];
      if (!scope173v0) continue;
      if (!scope168v0[scope169v0 + 1][scope172v0]) {
        scope168v0[scope169v0 + 1][scope172v0] = scope173v0, scope168v0[scope169v0][scope172v0] = 0, scope168v3 = !0;
        continue;
      }
      let scope173v1 = scope169v0 % 2 ? [1, -1] : [-1, 1];
      for (let scope175v0 of scope173v1) {
        let scope176v0 = scope172v0 + scope175v0;
        if (!(scope176v0 < 0 || scope176v0 >= scope168v2 || scope168v0[scope169v0 + 1][scope176v0])) {
          scope168v0[scope169v0 + 1][scope176v0] = scope173v0, scope168v0[scope169v0][scope172v0] = 0, scope168v3 = !0;
          break;
        }
      }
    }
  }
  return scope168v3;
}
function scope0v69(scope178v0) {
  if (!scope178v0.length || !scope178v0[0].length) return {
    colors: [],
    count: 0
  };
  let scope178v1 = scope178v0[0].length,
    scope178v2 = new Set(),
    scope178v3 = new Set(),
    scope178v4 = 0;
  for (let scope179v0 = 0; scope179v0 < scope178v0.length; scope179v0 += 1) {
    let scope180v0 = scope178v0[scope179v0][0];
    if (!scope180v0 || scope178v2.has(scope179v0 * scope178v1)) continue;
    let scope180v1 = [],
      scope180v2 = [[0, scope179v0]];
    scope178v2.add(scope179v0 * scope178v1);
    let scope180v3 = !1;
    for (; scope180v2.length;) {
      let [scope182v0, scope182v1] = scope180v2.pop();
      scope180v1.push([scope182v0, scope182v1]), scope182v0 === scope178v1 - 1 && (scope180v3 = !0);
      for (let [scope183v0, scope183v1] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        let scope184v0 = scope182v0 + scope183v0,
          scope184v1 = scope182v1 + scope183v1;
        if (scope184v0 < 0 || scope184v0 >= scope178v1 || scope184v1 < 0 || scope184v1 >= scope178v0.length) continue;
        let scope184v2 = scope184v1 * scope178v1 + scope184v0;
        scope178v2.has(scope184v2) || scope178v0[scope184v1][scope184v0] !== scope180v0 || (scope178v2.add(scope184v2), scope180v2.push([scope184v0, scope184v1]));
      }
    }
    if (scope180v3) {
      scope178v3.add(scope180v0 - 1);
      for (let [scope186v0, scope186v1] of scope180v1) scope178v0[scope186v1][scope186v0] = 0;
      scope178v4 += scope180v1.length;
    }
  }
  return {
    colors: [...scope178v3],
    count: scope178v4
  };
}
function scope0v70(scope187v0 = []) {
  return scope187v0.filter(scope189v0 => scope189v0?.curse && scope189v0.cause !== "blast");
}
function scope0v71(scope190v0, scope190v1 = []) {
  if (scope0v56(scope190v0)) return 0;
  let scope190v2 = 0;
  for (let scope192v0 of scope0v70(scope190v1)) scope192v0.curse === "garbage" && (scope190v2 += scope0v14(scope190v0.random, scope190v0.mode === "marathon" ? scope190v0.stage : 1));
  return scope190v0.pendingGarbage += scope190v2, scope190v2;
}
function scope0v72(scope193v0, scope193v1) {
  let scope193v2 = Math.min(9, Math.floor(scope193v0.random() * 10)),
    scope193v3 = [],
    scope193v4 = !1;
  for (let scope194v0 = 0; scope194v0 < 20; scope194v0 += 1) for (let scope195v0 = 0; scope195v0 < 10; scope195v0 += 1) {
    let scope196v0 = scope193v0.grid[scope194v0][scope195v0];
    scope196v0 && (scope194v0 < scope193v1 ? scope193v4 = !0 : scope193v3.push({
      x: scope195v0,
      y0: scope194v0,
      y1: scope194v0 - scope193v1,
      ...scope0v65(scope196v0)
    }));
  }
  for (let scope197v0 = 0; scope197v0 < scope193v1; scope197v0 += 1) {
    scope193v0.grid.shift();
    let scope198v0 = scope0v46(scope193v0);
    scope193v0.grid.push(Array.from({
      length: 10
    }, (scope199v0, scope199v1) => scope199v1 === scope193v2 ? null : {
      type: "N",
      g: scope198v0,
      bomb: !1,
      curse: null,
      reward: null,
      sand: null
    }));
  }
  return scope193v4 ? (scope193v0.phase = "over", {
    type: "over",
    reason: "garbage",
    rows: scope193v1
  }) : (scope193v0.garbageGraceLeft = scope0v10, scope193v0.garbageGraceResolving = !0, {
    type: "garbage",
    rows: scope193v1,
    hole: scope193v2,
    moves: scope193v3,
    grace: scope0v10
  });
}
function scope0v73(scope200v0, scope200v1 = []) {
  !scope0v56(scope200v0) && scope0v70(scope200v1).some(scope202v0 => scope202v0.curse === "nohold") && (scope200v0.noHoldLeft = scope0v5);
}
function scope0v74(scope203v0) {
  if (!scope203v0.active) return;
  scope203v0.garbageGraceResolving = scope203v0.garbageGraceLeft > 0, scope203v0.garbageGraceLeft > 0 && (scope203v0.garbageGraceLeft -= 1), scope203v0.feverResolving = scope203v0.feverLeft > 0, scope203v0.feverLeft > 0 && (scope203v0.feverLeft -= 1), scope203v0.noHoldLeft > 0 && (scope203v0.noHoldLeft -= 1), scope203v0.spin = scope0v62(scope203v0);
  let scope203v1 = scope0v46(scope203v0),
    scope203v2 = !!scope203v0.sanding && scope203v0.sandGrid,
    scope203v3 = scope0v41(scope203v0.active.type, scope203v0.active.rot, scope203v0.active.x, scope203v0.active.y);
  if (scope203v0.feverBlastX = Math.max(0, Math.min(9, Math.round(scope203v3.reduce((scope204v0, [scope204v1]) => scope204v0 + scope204v1, 0) / scope203v3.length))), scope203v2) {
    let scope206v0 = scope0v31(scope203v0.active.type, scope203v3, scope203v0.active.sand, scope203v0.active.rot);
    scope203v3.forEach(([scope207v0, scope207v1], scope207v2) => scope0v66(scope203v0.sandGrid, scope207v0, scope207v1, scope206v0[scope207v2] + 1)), scope203v0.sandLeft -= 1, scope203v0.sandLeft <= 0 && (scope203v0.sandExit = !0), scope203v0.active = null, scope203v0.holdLocked = !1, scope203v0.comboArmed = !0, scope203v0.spinEligible = !1, scope203v0.phase = "resolving";
    return;
  }
  scope203v3.forEach(([scope209v0, scope209v1], scope209v2) => {
    scope203v0.grid[scope209v1][scope209v0] = {
      type: scope203v0.active.type,
      g: scope203v1,
      feverId: scope203v0.active.type === "F" ? scope203v1 : null,
      bomb: scope203v0.active.type === "B" && scope209v2 === scope203v0.active.bombIndex,
      reward: scope0v55(scope203v0.active, scope209v2),
      curse: scope203v0.active.type === "C" || scope203v0.active.type === "G" && scope209v2 === scope203v0.active.curseIndex ? scope203v0.active.curse : null,
      sand: null
    };
  }), scope203v0.active = null, scope203v0.holdLocked = !1, scope203v0.comboArmed = !0, scope203v0.spinEligible = !1, scope203v0.phase = "resolving";
}
function scope0v75(scope211v0) {
  let scope211v1 = scope0v40();
  for (let scope212v0 = 0; scope212v0 < 20; scope212v0 += 1) for (let scope213v0 = 0; scope213v0 < 10; scope213v0 += 1) {
    let scope214v0 = scope211v0.grid[scope212v0][scope213v0];
    scope214v0 && (scope211v1[19 - scope212v0][9 - scope213v0] = scope0v65(scope214v0));
  }
  scope211v0.grid = scope211v1;
}
function scope0v76(scope215v0) {
  let scope215v1 = [];
  for (let scope216v0 = 0; scope216v0 < 20; scope216v0 += 1) scope215v0[scope216v0].every(scope217v0 => scope217v0) && scope215v1.push(scope216v0);
  return scope215v1;
}
function scope0v77(scope218v0, scope218v1) {
  let scope218v2 = new Set(scope218v1.map(scope219v0 => `${scope219v0.x},${scope219v0.y}`));
  return scope218v1.some(scope220v0 => scope220v0.y === 19 ? !0 : scope218v0[scope220v0.y + 1][scope220v0.x] && !scope218v2.has(`${scope220v0.x},${scope220v0.y + 1}`));
}
function scope0v78(scope221v0) {
  let scope221v1 = new Set(),
    scope221v2 = [];
  for (let scope222v0 = 0; scope222v0 < 20; scope222v0 += 1) for (let scope223v0 = 0; scope223v0 < 10; scope223v0 += 1) {
    let scope224v0 = scope221v0[scope222v0][scope223v0],
      scope224v1 = scope223v0 + scope222v0 * 10;
    if (!scope224v0 || scope221v1.has(scope224v1)) continue;
    let scope224v2 = [],
      scope224v3 = [[scope223v0, scope222v0]];
    for (scope221v1.add(scope224v1); scope224v3.length;) {
      let [scope226v0, scope226v1] = scope224v3.pop();
      scope224v2.push({
        x: scope226v0,
        y: scope226v1,
        type: scope221v0[scope226v1][scope226v0].type,
        g: scope224v0.g,
        feverId: scope221v0[scope226v1][scope226v0].feverId ?? null,
        bomb: !!scope221v0[scope226v1][scope226v0].bomb,
        reward: scope221v0[scope226v1][scope226v0].reward ?? null,
        curse: scope221v0[scope226v1][scope226v0].curse ?? null,
        sand: scope221v0[scope226v1][scope226v0].sand ?? null
      });
      for (let [scope227v0, scope227v1] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        let scope228v0 = scope226v0 + scope227v0,
          scope228v1 = scope226v1 + scope227v1;
        if (scope228v0 < 0 || scope228v1 < 0 || scope228v0 >= 10 || scope228v1 >= 20) continue;
        let scope228v2 = scope228v0 + scope228v1 * 10;
        if (scope221v1.has(scope228v2)) continue;
        let scope228v3 = scope221v0[scope228v1][scope228v0];
        !scope228v3 || scope228v3.g !== scope224v0.g || (scope221v1.add(scope228v2), scope224v3.push([scope228v0, scope228v1]));
      }
    }
    scope0v77(scope221v0, scope224v2) || scope221v2.push(scope224v2);
  }
  return scope221v2;
}
function scope0v79(scope229v0, scope229v1, scope229v2) {
  let scope229v3 = scope229v1.flat();
  for (let scope230v0 of scope229v3) scope229v0[scope230v0.y][scope230v0.x] = null;
  let scope229v4 = new Map();
  for (let scope231v0 of scope229v3) scope229v4.has(scope231v0.x) || scope229v4.set(scope231v0.x, []), scope229v4.get(scope231v0.x).push(scope231v0);
  let scope229v5 = [];
  for (let [scope232v0, scope232v1] of scope229v4) {
    scope232v1.sort((scope234v0, scope234v1) => scope234v1.y - scope234v0.y);
    for (let scope235v0 of scope232v1) {
      let scope236v0 = scope235v0.y;
      for (; scope236v0 + 1 < 20 && !scope229v0[scope236v0 + 1][scope232v0];) scope236v0 += 1;
      let scope236v1 = scope229v2();
      scope229v0[scope236v0][scope232v0] = {
        type: scope235v0.type,
        g: scope236v1,
        feverId: scope235v0.feverId ?? null,
        bomb: !!scope235v0.bomb,
        reward: scope235v0.reward ?? null,
        curse: scope235v0.curse ?? null,
        sand: scope235v0.sand ?? null
      }, scope229v5.push({
        x: scope232v0,
        y0: scope235v0.y,
        y1: scope236v0,
        type: scope235v0.type,
        g: scope236v1
      });
    }
  }
  return scope229v5;
}
function scope0v80(scope238v0) {
  let scope238v1 = scope0v76(scope238v0);
  return scope238v1.length ? scope238v1.some(scope239v0 => scope238v0[scope239v0].some(scope240v0 => scope240v0?.bomb)) ? scope238v1 : scope238v1.filter(scope241v0 => !scope238v0[scope241v0].some(scope242v0 => scope242v0?.curse === "seal")) : [];
}
function scope0v81(scope243v0) {
  return scope243v0.combo += 1, scope243v0.comboArmed = !1, scope243v0.combo > 1 ? (scope243v0.combo - 1) * 50 * scope0v58(scope243v0) : 0;
}
function scope0v82(scope244v0, scope244v1) {
  let scope244v2 = scope244v0.mode === "sprint" ? 0 : Math.min(5, Math.floor(scope244v0.combo / 2));
  if (scope244v1 += scope244v2, scope244v0.lines += scope244v1, scope244v0.mode !== "marathon") return scope244v2;
  for (scope244v0.stageLines += scope244v1; scope244v0.stageLines >= scope244v0.stageGoal;) scope244v0.stageLines -= scope244v0.stageGoal, scope244v0.pendingFlips += 1, scope244v0.stage += 1, scope244v0.stageGoal = scope0v34(scope244v0.stage);
  return scope244v2;
}
function scope0v83(scope246v0) {
  if (scope246v0.phase !== "resolving") return null;
  if (scope246v0.sanding) {
    if (scope246v0.spin) {
      let scope248v0 = scope246v0.spin;
      return scope246v0.spin = null, scope246v0.score += scope0v63(scope248v0, 0) * scope0v58(scope246v0), {
        type: "spin",
        kind: scope248v0,
        spinName: scope0v64(scope248v0, 0),
        combo: scope246v0.combo
      };
    }
    if (scope246v0.sandGrid && scope0v68(scope246v0.sandGrid)) return {
      type: "sand",
      moves: []
    };
    let scope247v0 = scope246v0.sandGrid ? scope0v69(scope246v0.sandGrid) : {
      colors: [],
      count: 0
    };
    if (scope247v0.count) {
      let scope249v0 = scope0v81(scope246v0),
        scope249v1 = Math.max(1, Math.round(scope247v0.count / (scope0v19 * scope0v19)));
      scope246v0.score += scope249v1 * 25 * scope0v58(scope246v0) + scope249v0;
      let scope249v2 = scope0v82(scope246v0, Math.max(1, Math.floor(scope249v1 / 4)));
      return {
        type: "clear",
        rows: [],
        cells: [],
        blasts: [],
        combo: scope246v0.combo,
        sand: !0,
        bonus: scope249v0,
        lineBonus: scope249v2,
        colors: scope247v0.colors
      };
    }
    if (scope246v0.sandExit) scope0v67(scope246v0);else return scope246v0.comboArmed && !scope0v56(scope246v0) && (scope246v0.combo = 0), scope246v0.comboArmed = !1, scope246v0.phase = "playing", scope0v48(scope246v0), scope246v0.phase === "over" ? {
      type: "over"
    } : {
      type: "spawn"
    };
  }
  let scope246v1 = scope0v56(scope246v0) ? scope0v76(scope246v0.grid) : scope0v80(scope246v0.grid);
  if (scope246v1.length) {
    let scope250v0 = [],
      scope250v1 = [],
      scope250v2 = [];
    for (let scope251v0 of scope246v1) for (let scope252v0 = 0; scope252v0 < 10; scope252v0 += 1) {
      let scope253v0 = scope246v0.grid[scope251v0][scope252v0];
      scope253v0?.bomb && scope250v1.push({
        x: scope252v0,
        y: scope251v0
      }), scope253v0?.reward && scope250v2.push(scope253v0.reward), scope253v0 && scope250v0.push({
        x: scope252v0,
        y: scope251v0,
        type: scope253v0.type,
        feverId: scope253v0.feverId ?? null,
        reward: scope253v0.reward ?? null,
        curse: scope253v0.curse ?? null,
        sand: scope253v0.sand ?? null
      }), scope246v0.grid[scope251v0][scope252v0] = null;
    }
    let scope250v3 = scope0v57(scope246v0, scope250v0),
      scope250v4 = scope0v60(scope246v0.grid, scope250v1, scope246v0.random, scope250v0);
    if (scope250v3 = scope0v57(scope246v0, scope250v4) || scope250v3, scope0v56(scope246v0)) {
      let scope254v0 = scope0v59(scope246v0, scope246v1);
      scope250v3 = scope0v57(scope246v0, scope254v0) || scope250v3, scope250v4.push(...scope254v0);
    }
    scope0v73(scope246v0, scope250v0);
    let scope250v5 = scope0v71(scope246v0, scope250v0);
    scope246v0.score += scope250v4.length * 15 * scope0v36(scope246v0) * (scope0v56(scope246v0) ? 3 : 1);
    let scope250v6 = scope246v0.spin;
    scope246v0.spin = null;
    let scope250v7 = scope0v58(scope246v0),
      scope250v8 = scope0v81(scope246v0),
      scope250v9 = scope250v6 ? scope0v63(scope250v6, scope246v1.length) : scope0v39[scope246v1.length] ?? scope0v39[4] + (scope246v1.length - 4) * 300;
    scope246v0.score += scope250v9 * scope250v7 + scope250v8;
    let scope250v10 = scope0v82(scope246v0, scope246v1.length);
    if ((scope246v0.mode === "tetris" || scope0v15(scope246v0) || scope250v5 > 0) && scope0v86(scope246v0.grid, scope246v1), scope246v0.mode === "marathon") {
      let scope255v0 = scope0v35([...scope250v2, ...scope250v4.map(scope256v0 => scope256v0.reward)]);
      scope255v0 && (scope246v0.pendingReward = scope255v0);
    }
    return {
      type: "clear",
      rows: scope246v1,
      cells: scope250v0,
      blasts: scope250v4,
      fever: scope0v56(scope246v0),
      feverStarted: scope250v3,
      garbageQueued: scope250v5,
      combo: scope246v0.combo,
      tspin: scope250v6 === "tspin",
      spinName: scope250v6 ? scope0v64(scope250v6, scope246v1.length) : null,
      bonus: scope250v8,
      lineBonus: scope250v10
    };
  }
  if (scope246v0.spin) {
    let scope257v0 = scope246v0.spin;
    return scope246v0.spin = null, scope246v0.score += scope0v63(scope257v0, 0) * scope0v58(scope246v0), {
      type: "spin",
      kind: scope257v0,
      spinName: scope0v64(scope257v0, 0),
      combo: scope246v0.combo
    };
  }
  if (scope246v0.pendingGarbage > 0) {
    let scope258v0 = scope246v0.pendingGarbage;
    return scope246v0.pendingGarbage = 0, scope0v72(scope246v0, scope258v0);
  }
  if (scope246v0.pendingReward) {
    let scope259v0 = scope246v0.pendingReward;
    if (scope246v0.pendingReward = null, scope259v0 === "sand") return {
      type: "reward",
      reward: scope259v0,
      flip: !1
    };
    if (scope0v84(scope246v0.grid) === 0) scope246v0.score += 2e3 * scope0v58(scope246v0);else if (!scope0v85(scope246v0.grid)) scope246v0.score += 500 * scope0v58(scope246v0);else return {
      type: "reward",
      reward: scope259v0,
      flip: scope259v0 !== "sand" && !scope0v15(scope246v0)
    };
  }
  if (scope246v0.mode !== "tetris" && !scope0v15(scope246v0)) {
    let scope260v0 = scope0v78(scope246v0.grid);
    if (scope260v0.length) return {
      type: "drop",
      moves: scope0v79(scope246v0.grid, scope260v0, () => scope0v46(scope246v0))
    };
  }
  return scope246v0.mode === "marathon" && scope246v0.pendingFlips > 0 && !scope0v15(scope246v0) ? (scope246v0.pendingFlips -= 1, {
    type: "flip",
    stage: scope246v0.stage
  }) : scope246v0.mode === "sprint" && scope246v0.lines >= 40 ? (scope246v0.phase = "done", {
    type: "done"
  }) : (scope246v0.comboArmed && !scope0v56(scope246v0) && (scope246v0.combo = 0), scope246v0.comboArmed = !1, scope246v0.phase = "playing", scope0v48(scope246v0), scope246v0.phase === "over" ? {
    type: "over"
  } : {
    type: "spawn"
  });
}
function scope0v84(scope262v0) {
  let scope262v1 = 0;
  for (let scope263v0 of scope262v0) for (let scope264v0 of scope263v0) scope264v0 && (scope262v1 += 1);
  return scope262v1;
}
function scope0v85(scope265v0) {
  let scope265v1 = 20;
  for (let scope266v0 = 0; scope266v0 < 20; scope266v0 += 1) for (let scope267v0 = 0; scope267v0 < 10; scope267v0 += 1) scope265v0[scope266v0][scope267v0] && (scope265v1 = Math.min(scope265v1, scope266v0));
  return scope265v1 === 20 ? !1 : 19 - scope265v1 < 15;
}
function scope0v86(scope268v0, scope268v1) {
  let scope268v2 = new Set(scope268v1),
    scope268v3 = [];
  for (let scope269v0 = 0; scope269v0 < 20; scope269v0 += 1) scope268v2.has(scope269v0) || scope268v3.push(scope268v0[scope269v0]);
  for (; scope268v3.length < 20;) scope268v3.unshift(Array(10).fill(null));
  for (let scope271v0 = 0; scope271v0 < 20; scope271v0 += 1) scope268v0[scope271v0] = scope268v3[scope271v0];
}
var scope0v87 = Object.freeze({
  keyboardDelay: 150,
  keyboardInterval: 35,
  touchInterval: 70
});
function scope0v88(scope272v0) {
  let scope272v1 = [];
  for (let scope273v0 = 0; scope273v0 < 7; scope273v0++) {
    let scope274v0 = 0;
    for (; scope274v0 < 6;) {
      let scope276v0 = scope274v0,
        scope276v1 = scope272v0[scope273v0 * 6 + scope274v0];
      for (; scope274v0 < 6 && scope272v0[scope273v0 * 6 + scope274v0] === scope276v1;) scope274v0++;
      scope276v1 != null && scope274v0 - scope276v0 >= 3 && scope272v1.push({
        axis: "row",
        cells: Array.from({
          length: scope274v0 - scope276v0
        }, (scope278v0, scope278v1) => scope273v0 * 6 + scope276v0 + scope278v1)
      });
    }
  }
  for (let scope279v0 = 0; scope279v0 < 6; scope279v0++) {
    let scope280v0 = 0;
    for (; scope280v0 < 7;) {
      let scope282v0 = scope280v0,
        scope282v1 = scope272v0[scope280v0 * 6 + scope279v0];
      for (; scope280v0 < 7 && scope272v0[scope280v0 * 6 + scope279v0] === scope282v1;) scope280v0++;
      scope282v1 != null && scope280v0 - scope282v0 >= 3 && scope272v1.push({
        axis: "column",
        cells: Array.from({
          length: scope280v0 - scope282v0
        }, (scope284v0, scope284v1) => (scope282v0 + scope284v1) * 6 + scope279v0)
      });
    }
  }
  return scope272v1;
}
function scope0v89(scope285v0) {
  return [...new Set(scope0v88(scope285v0).flatMap(scope286v0 => scope286v0.cells))];
}
function scope0v90(scope287v0, scope287v1) {
  return Number.isInteger(scope287v0) && Number.isInteger(scope287v1) && scope287v0 >= 0 && scope287v1 >= 0 && scope287v0 < 42 && scope287v1 < 42 && Math.abs(scope287v0 % 6 - scope287v1 % 6) + Math.abs(Math.floor(scope287v0 / 6) - Math.floor(scope287v1 / 6)) === 1;
}
function scope0v91(scope288v0, scope288v1 = []) {
  let scope288v2 = [];
  for (let scope290v0 = 0; scope290v0 < scope288v0.length; scope290v0++) for (let scope291v0 of [scope290v0 + 1, scope290v0 + 6]) {
    if (!scope0v90(scope290v0, scope291v0)) continue;
    let scope292v0 = [...scope288v0];
    [scope292v0[scope290v0], scope292v0[scope291v0]] = [scope292v0[scope291v0], scope292v0[scope290v0]], (scope0v89(scope292v0).length || scope288v1[scope290v0] === "rainbow" || scope288v1[scope291v0] === "rainbow" || scope288v1[scope290v0] && scope288v1[scope291v0]) && scope288v2.push([scope290v0, scope291v0]);
  }
  return scope288v2;
}
function scope0v92(scope293v0 = Math.random) {
  for (let scope295v0 = 0; scope295v0 < 100; scope295v0++) {
    let scope296v0 = [];
    for (let scope297v0 = 0; scope297v0 < 42; scope297v0++) {
      let scope298v0 = [0, 1, 2, 3, 4].filter(scope299v0 => !(scope297v0 % 6 >= 2 && scope296v0[scope297v0 - 1] === scope299v0 && scope296v0[scope297v0 - 2] === scope299v0) && !(scope297v0 >= 12 && scope296v0[scope297v0 - 6] === scope299v0 && scope296v0[scope297v0 - 12] === scope299v0));
      scope296v0.push(scope298v0[Math.min(scope298v0.length - 1, Math.floor(scope293v0() * scope298v0.length))]);
    }
    if (scope0v91(scope296v0).length) return scope296v0;
  }
  return Array.from({
    length: 42
  }, (scope300v0, scope300v1) => scope300v1 % 6 < 3 ? [0, 1, 0][scope300v1 % 6] : (scope300v1 + Math.floor(scope300v1 / 6)) % 5).map((scope301v0, scope301v1) => scope301v1 === 7 ? 0 : scope301v0);
}
function scope0v93(scope302v0 = !1) {
  let scope302v1 = Array(42).fill(0);
  for (let scope304v0 of scope302v0 ? [7, 10, 13, 16, 19, 22, 25, 28] : [13, 16, 19, 22]) scope302v1[scope304v0] = 1;
  return scope302v1;
}
function scope0v94(scope305v0, scope305v1 = []) {
  let scope305v2 = scope0v88(scope305v0),
    scope305v3 = new Map(),
    scope305v4 = new Set();
  for (let scope307v0 of scope305v2.filter(scope308v0 => scope308v0.cells.length >= 5)) {
    let scope309v0 = scope305v1.find(scope310v0 => scope307v0.cells.includes(scope310v0)) ?? scope307v0.cells[2];
    scope305v3.set(scope309v0, "rainbow"), scope307v0.cells.forEach(scope311v0 => scope305v4.add(scope311v0));
  }
  for (let scope312v0 of scope305v2.filter(scope313v0 => scope313v0.axis === "row")) for (let scope314v0 of scope305v2.filter(scope315v0 => scope315v0.axis === "column")) {
    let scope316v0 = scope312v0.cells.find(scope317v0 => scope314v0.cells.includes(scope317v0));
    scope316v0 != null && !scope305v4.has(scope316v0) && (scope305v3.set(scope316v0, "wrapped"), [...scope312v0.cells, ...scope314v0.cells].forEach(scope318v0 => scope305v4.add(scope318v0)));
  }
  for (let scope319v0 of scope305v2.filter(scope320v0 => scope320v0.cells.length === 4)) {
    if (scope319v0.cells.some(scope322v0 => scope305v4.has(scope322v0))) continue;
    let scope321v0 = scope305v1.find(scope323v0 => scope319v0.cells.includes(scope323v0)) ?? scope319v0.cells[1];
    scope305v3.set(scope321v0, scope319v0.axis), scope319v0.cells.forEach(scope324v0 => scope305v4.add(scope324v0));
  }
  return scope305v3;
}
function scope0v95(scope325v0, scope325v1, scope325v2 = null) {
  let scope325v3 = new Set(scope325v1),
    scope325v4 = [...scope325v1],
    scope325v5 = new Set();
  for (; scope325v4.length;) {
    let scope328v0 = scope325v4.shift(),
      scope328v1 = scope325v0.specials[scope328v0];
    if (!scope328v1 || scope325v5.has(scope328v0)) continue;
    scope325v5.add(scope328v0);
    let scope328v2 = [];
    if (scope328v1 === "row" && (scope328v2 = Array.from({
      length: 6
    }, (scope329v0, scope329v1) => Math.floor(scope328v0 / 6) * 6 + scope329v1)), scope328v1 === "column" && (scope328v2 = Array.from({
      length: 7
    }, (scope330v0, scope330v1) => scope330v1 * 6 + scope328v0 % 6)), scope328v1 === "wrapped") for (let scope331v0 = -1; scope331v0 <= 1; scope331v0++) for (let scope332v0 = -1; scope332v0 <= 1; scope332v0++) {
      let scope333v0 = scope328v0 % 6 + scope332v0,
        scope333v1 = Math.floor(scope328v0 / 6) + scope331v0;
      scope333v0 >= 0 && scope333v0 < 6 && scope333v1 >= 0 && scope333v1 < 7 && scope328v2.push(scope333v1 * 6 + scope333v0);
    }
    scope328v1 === "rainbow" && (scope328v2 = scope325v0.board.map((scope334v0, scope334v1) => scope334v0 === (scope325v2 ?? scope325v0.board[scope328v0]) ? scope334v1 : -1).filter(scope335v0 => scope335v0 >= 0));
    for (let scope336v0 of scope328v2) scope325v3.has(scope336v0) || (scope325v3.add(scope336v0), scope325v4.push(scope336v0));
  }
  return scope325v0.activated = [...scope325v5], [...scope325v3];
}
var scope0v96 = {
  swap: 200,
  reject: 400,
  clear: 300,
  fall: 360,
  shuffle: 220
};
function scope0v97(scope337v0, scope337v1) {
  scope337v0.animState = scope337v1, scope337v0.animTime = 0, scope337v0.animDuration = scope0v96[scope337v1], scope337v0.busy = scope337v0.animDuration;
}
function scope0v98(scope338v0, scope338v1 = [], scope338v2 = null, scope338v3 = null) {
  scope338v0.creations = scope338v2 ? new Map() : scope0v94(scope338v0.board, scope338v1), scope338v0.match = scope0v95(scope338v0, scope338v2 ?? scope0v89(scope338v0.board), scope338v3);
  for (let scope342v0 of scope338v0.activated) scope338v0.creations.delete(scope342v0);
  scope0v97(scope338v0, "clear");
}
function scope0v99(scope343v0, scope343v1, scope343v2, scope343v3 = Math.random) {
  if (scope343v0.busy || !scope0v90(scope343v1, scope343v2) || scope343v0.moves <= 0) return !1;
  scope343v0.specials ??= Array(42).fill(null);
  let scope343v4 = [{
    i: scope343v1,
    type: scope343v0.board[scope343v1],
    special: scope343v0.specials[scope343v1]
  }, {
    i: scope343v2,
    type: scope343v0.board[scope343v2],
    special: scope343v0.specials[scope343v2]
  }];
  [scope343v0.board[scope343v1], scope343v0.board[scope343v2]] = [scope343v0.board[scope343v2], scope343v0.board[scope343v1]], [scope343v0.specials[scope343v1], scope343v0.specials[scope343v2]] = [scope343v0.specials[scope343v2], scope343v0.specials[scope343v1]];
  let scope343v5 = scope343v0.specials[scope343v1] === "rainbow" || scope343v0.specials[scope343v2] === "rainbow",
    scope343v6 = scope343v0.specials[scope343v1] && scope343v0.specials[scope343v2];
  return !scope0v89(scope343v0.board).length && !scope343v5 && !scope343v6 ? ([scope343v0.board[scope343v1], scope343v0.board[scope343v2]] = [scope343v0.board[scope343v2], scope343v0.board[scope343v1]], [scope343v0.specials[scope343v1], scope343v0.specials[scope343v2]] = [scope343v0.specials[scope343v2], scope343v0.specials[scope343v1]], scope343v0.feedback = "invalid", scope343v0.feedbackTime = 1e3, scope343v0.match = [], scope343v0.swapTween = {
    a: scope343v1,
    b: scope343v2,
    original: scope343v4,
    valid: !1
  }, scope0v97(scope343v0, "reject"), !1) : (scope343v0.moves--, scope343v0.chain = 1, scope343v5 && scope343v6 && scope343v0.specials[scope343v1] === scope343v0.specials[scope343v2] ? scope0v98(scope343v0, [], Array.from({
    length: 42
  }, (scope345v0, scope345v1) => scope345v1)) : scope343v5 ? scope0v98(scope343v0, [], [scope343v1, scope343v2], scope343v0.specials[scope343v1] === "rainbow" ? scope343v0.board[scope343v2] : scope343v0.board[scope343v1]) : scope343v6 ? scope0v98(scope343v0, [], [scope343v1, scope343v2]) : scope0v98(scope343v0, [scope343v2, scope343v1]), scope343v0.swapTween = {
    a: scope343v1,
    b: scope343v2,
    original: scope343v4,
    valid: !0
  }, scope0v97(scope343v0, "swap"), !0);
}
function scope0v100(scope346v0, scope346v1) {
  if (scope346v0.falling.fill(0), scope346v0.fallFrom = null, scope346v0.match = scope0v89(scope346v0.board), scope346v0.match.length && scope346v0.chain < 12) {
    scope346v0.chain++, scope0v98(scope346v0), scope346v0.feedback = "chain", scope346v0.feedbackTime = 900;
    return;
  }
  scope346v0.match = [], scope346v0.busy = 0, scope346v0.animState = null, (scope0v89(scope346v0.board).length || !scope0v91(scope346v0.board, scope346v0.specials).length) && (scope346v0.board = scope0v92(scope346v1), scope346v0.specials.fill(null), scope346v0.feedback = "reshuffle", scope346v0.feedbackTime = 1300, scope0v97(scope346v0, "shuffle"));
}
function scope0v101(scope348v0, scope348v1) {
  if (scope348v0.animState === "fall") return scope0v100(scope348v0, scope348v1), {
    cleared: 0,
    goal: 0
  };
  let scope348v2 = scope348v0.match,
    scope348v3 = 0;
  scope348v0.specials ??= Array(42).fill(null), scope348v0.jellies ??= Array(42).fill(0), scope348v0.jellyCleared ??= 0, scope348v0.clearEffects = scope348v2.map(scope349v0 => ({
    i: scope349v0,
    type: scope348v0.board[scope349v0],
    special: scope348v0.specials[scope349v0]
  })), scope348v0.clearAge = 0, scope348v0.blasts = (scope348v0.activated || []).map(scope350v0 => ({
    i: scope350v0,
    kind: scope348v0.specials[scope350v0]
  })), scope348v0.swapTween = null;
  for (let scope351v0 of scope348v2) scope348v0.board[scope351v0] === scope348v0.goal && scope348v3++, scope348v0.jellies[scope351v0] && (scope348v0.jellies[scope351v0]--, scope348v0.jellyCleared++), scope348v0.creations?.has(scope351v0) ? scope348v0.specials[scope351v0] = scope348v0.creations.get(scope351v0) : (scope348v0.board[scope351v0] = null, scope348v0.specials[scope351v0] = null);
  scope348v0.score += scope348v2.length, scope348v0.collected += scope348v3, scope348v0.lastClear = scope348v2.length, scope348v0.combo = Math.max(scope348v0.combo || 0, scope348v0.chain), scope348v0.falling = Array(42).fill(0);
  for (let scope352v0 = 0; scope352v0 < 6; scope352v0++) {
    let scope353v0 = [];
    for (let scope354v0 = 6; scope354v0 >= 0; scope354v0--) scope348v0.board[scope354v0 * 6 + scope352v0] != null && scope353v0.push({
      v: scope348v0.board[scope354v0 * 6 + scope352v0],
      special: scope348v0.specials[scope354v0 * 6 + scope352v0],
      from: scope354v0
    });
    let scope353v1 = 0;
    for (; scope353v0.length < 7;) scope353v0.push({
      v: Math.floor(scope348v1() * 5),
      special: null,
      from: --scope353v1
    });
    for (let scope356v0 = 6; scope356v0 >= 0; scope356v0--) {
      let scope357v0 = scope353v0[6 - scope356v0];
      scope348v0.board[scope356v0 * 6 + scope352v0] = scope357v0.v, scope348v0.specials[scope356v0 * 6 + scope352v0] = scope357v0.special, scope348v0.falling[scope356v0 * 6 + scope352v0] = (scope357v0.from - scope356v0) * 38;
    }
  }
  return scope348v0.fallFrom = [...scope348v0.falling], scope348v0.creations = new Map(), scope348v0.activated = [], scope348v0.match = [], scope0v97(scope348v0, "fall"), {
    cleared: scope348v2.length,
    goal: scope348v3
  };
}
function scope0v102(scope358v0, scope358v1, scope358v2) {
  if (!scope358v0.busy) return null;
  if (scope358v0.animDuration ||= scope358v0.busy, scope358v0.animTime = (scope358v0.animTime || 0) + scope358v1, scope358v0.busy = Math.max(0, scope358v0.animDuration - scope358v0.animTime), scope358v0.animState === "fall") {
    let scope359v0 = Math.max(0, 1 - scope358v0.animTime / scope358v0.animDuration);
    scope358v0.falling = scope358v0.fallFrom.map(scope360v0 => scope360v0 * scope359v0 ** 3);
  }
  return scope358v0.busy ? null : scope358v0.animState === "swap" ? (scope358v0.swapTween = null, scope0v97(scope358v0, "clear"), null) : scope358v0.animState === "reject" || scope358v0.animState === "shuffle" ? (scope358v0.swapTween = null, scope358v0.animState = null, null) : scope358v0.animState === "fall" ? (scope0v100(scope358v0, scope358v2), null) : scope0v101(scope358v0, scope358v2);
}
var scope0v103 = (scope361v0, scope361v1, scope361v2) => Math.max(scope361v1, Math.min(scope361v2, scope361v0)),
  scope0v104 = [{
    r: 9,
    color: "#ee697f"
  }, {
    r: 12,
    color: "#efbc48"
  }, {
    r: 15,
    color: "#b398e9"
  }, {
    r: 19,
    color: "#f2904d"
  }, {
    r: 24,
    color: "#e8546d"
  }, {
    r: 29,
    color: "#e8d37c"
  }, {
    r: 35,
    color: "#81d095"
  }, {
    r: 42,
    color: "#4cc995"
  }];
function scope0v105(scope362v0, scope362v1) {
  let scope362v2 = scope362v0.difficulty === "hard";
  scope362v1.objects = [], scope362v1.score = 0, scope362v1.x = 140, scope362v1.y = 445, scope362v1.invincible = 0, scope362v1.cooldown = 0, scope362v1.selected = 0, scope362v1.feedback = "", scope362v1.feedbackTime = 0, scope362v1.id === "snake" && (scope362v1.duration = 45e3, scope362v1.target = scope362v2 ? 12 : 10, scope362v1.snake = [[5, 9], [4, 9], [3, 9]], scope362v1.dir = [1, 0], scope362v1.nextDir = null, scope362v1.step = 0, scope362v1.stepMs = scope362v2 ? 170 : 210, scope0v106(scope362v0, scope362v1)), ["match", "execution"].includes(scope362v1.id) && (scope362v1.board = scope0v92(scope362v0.random), scope362v1.cursor = 0, scope362v1.chosen = null, scope362v1.moves = scope362v1.id === "execution" ? scope362v2 ? 20 : 24 : 22, scope362v1.goal = 0, scope362v1.collected = 0, scope362v1.target = scope362v1.id === "execution" ? scope362v2 ? 22 : 18 : scope362v2 ? 48 : 36, scope362v1.match = [], scope362v1.busy = 0, scope362v1.animState = null, scope362v1.animTime = 0, scope362v1.animDuration = 0, scope362v1.swapTween = null, scope362v1.combo = 0, scope362v1.specials = Array(42).fill(null), scope362v1.jellies = scope362v1.id === "execution" ? scope0v93(scope362v2) : Array(42).fill(0), scope362v1.jellyTarget = scope362v1.jellies.reduce((scope363v0, scope363v1) => scope363v0 + scope363v1, 0), scope362v1.jellyCleared = 0, scope362v1.falling = Array(42).fill(0), scope362v1.duration = scope362v1.id === "execution" ? 1 / 0 : 55e3), scope362v1.id === "merge" && (scope362v1.duration = 1 / 0, scope362v1.target = scope0v104.length - 1, scope362v1.watermelon = !1, scope362v1.fruits = [], scope362v1.next = Math.floor(scope362v0.random() * 3), scope362v1.aim = 140, scope362v1.topTime = 0, scope362v1.swaps = 3, scope362v1.dropCooldown = 0), scope362v1.id === "rope" && (scope362v1.duration = 65e3, scope362v1.target = 3, scope362v1.level = 0, scope0v107(scope362v1)), scope362v1.id === "slice" && (scope362v1.duration = 4e4, scope362v1.target = scope362v2 ? 24 : 20, scope362v1.spawn = 0, scope362v1.cursor = {
    x: 140,
    y: 340
  }, scope362v1.trail = [], scope362v1.sliceEffects = [], scope362v1.slashes = [], scope362v1.lastSlash = 0, scope362v1.missed = 0), ["gravity", "ricochet", "floor", "burst"].includes(scope362v1.id) && (scope362v1.duration = scope362v1.id === "burst" ? 1 / 0 : 16e3, scope362v1.target = 1, scope362v1.spawn = 0, scope362v1.floor = [], scope362v1.anchor = null, scope362v1.counter = {
    x: 140,
    y: 385,
    ready: !1
  }, scope362v1.counterTime = 0, scope362v1.mouth = {
    x: 140,
    y: 212
  }, scope362v1.anchors = [{
    x: 45,
    y: 420
  }, {
    x: 235,
    y: 420
  }]), scope362v1.id === "escape" && (scope362v1.duration = scope362v2 ? 5e4 : 6e4, scope362v1.target = 100, scope362v1.distance = 0, scope362v1.y = 437, scope362v1.jump = 0, scope362v1.vy = 0, scope362v1.spawn = 1200, scope362v1.obstacles = [], scope362v1.closed = 0, scope362v1.lane = 1, scope362v1.lanePosition = 1, scope362v1.slide = 0, scope362v1.stumble = 0, scope362v1.escapeGesture = null);
}
function scope0v106(scope364v0, scope364v1) {
  let scope364v2 = [];
  for (let scope365v0 = 0; scope365v0 < 15; scope365v0++) for (let scope366v0 = 0; scope366v0 < 12; scope366v0++) scope364v1.snake.some(scope367v0 => scope367v0[0] === scope366v0 && scope367v0[1] === scope365v0) || scope364v2.push([scope366v0, scope365v0]);
  scope364v1.food = scope364v2[Math.floor(scope364v0.random() * scope364v2.length)] || null;
}
function scope0v107(scope368v0) {
  let scope368v1 = scope368v0.level;
  scope368v0.candy = {
    x: 140,
    y: 267,
    vx: 0,
    vy: 0,
    r: 10
  }, scope368v0.ropes = [{
    x: 80,
    y: 218,
    len: Math.hypot(60, 49),
    cut: !1
  }, {
    x: 200,
    y: 218,
    len: Math.hypot(60, 49),
    cut: !1
  }], scope368v0.receiver = {
    x: 140 + (scope368v1 === 1 ? 56 : scope368v1 === 2 ? -56 : 0),
    y: 455
  }, scope368v0.stars = [{
    x: 140,
    y: 338,
    taken: !1
  }], scope368v0.selected = 0, scope368v0.ropeAge = 0, scope368v0.resetWait = 0, scope368v0.wall = scope368v1 === 0 ? null : {
    x: scope368v1 === 1 ? 105 : 150,
    y: 353,
    w: 25,
    h: 17
  };
}
function scope0v108(scope369v0, scope369v1) {
  return !scope369v0.ropes[scope369v1] || scope369v0.ropes[scope369v1].cut ? !1 : (scope369v0.ropes[scope369v1].cut = !0, scope369v0.candy.vx += (scope369v1 === 0 ? 1 : -1) * 28, scope369v0.feedback = "cut", scope369v0.feedbackTime = 700, !0);
}
function scope0v109(scope370v0, scope370v1) {
  scope370v1.dropCooldown > 0 || (scope370v1.fruits.push({
    x: scope0v103(scope370v1.aim, 24 + scope0v104[scope370v1.next].r, 256 - scope0v104[scope370v1.next].r),
    y: 224,
    vx: 0,
    vy: 0,
    level: scope370v1.next,
    age: 0
  }), scope370v1.next = Math.floor(scope370v0.random() * 3), scope370v1.dropCooldown = 600);
}
function scope0v110(scope371v0, scope371v1, scope371v2) {
  let scope371v3 = scope371v0.round;
  if (scope371v3.id === "snake") {
    let scope372v0 = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    }[scope371v1];
    scope372v0 && !scope371v3.nextDir && (scope372v0[0] !== -scope371v3.dir[0] || scope372v0[1] !== -scope371v3.dir[1]) && (scope371v3.nextDir = scope372v0);
    return;
  }
  if (["match", "execution"].includes(scope371v3.id)) {
    if (scope371v3.busy) return;
    let scope373v0 = scope371v3.cursor % 6,
      scope373v1 = Math.floor(scope371v3.cursor / 6);
    scope371v1 === "left" && (scope371v3.cursor = scope373v1 * 6 + Math.max(0, scope373v0 - 1)), scope371v1 === "right" && (scope371v3.cursor = scope373v1 * 6 + Math.min(5, scope373v0 + 1)), scope371v1 === "up" && (scope371v3.cursor = Math.max(0, scope373v1 - 1) * 6 + scope373v0), scope371v1 === "down" && (scope371v3.cursor = Math.min(6, scope373v1 + 1) * 6 + scope373v0), scope371v1 === "alt" && (scope371v3.chosen = null), scope371v1 === "action" && scope0v111(scope371v0, scope371v3.cursor);
    return;
  }
  if (scope371v3.id === "merge") {
    scope371v1 === "action" && scope0v109(scope371v0, scope371v3), scope371v1 === "alt" && scope371v3.swaps && (scope371v3.next = (scope371v3.next + 1) % 3, scope371v3.swaps--);
    return;
  }
  if (scope371v3.id === "rope") {
    (scope371v1 === "left" || scope371v1 === "right") && (scope371v3.selected = 1 - scope371v3.selected), scope371v1 === "action" && scope0v108(scope371v3, scope371v3.selected), scope371v1 === "alt" && scope0v107(scope371v3);
    return;
  }
  if (scope371v3.id === "slice") {
    scope371v1 === "action" && scope371v3.clock - scope371v3.lastSlash > 120 && (scope371v3.lastSlash = scope371v3.clock, scope0v115(scope371v0, scope371v3.cursor, {
      x: scope371v3.cursor.x + 1,
      y: scope371v3.cursor.y
    }, scope371v2, 25));
    return;
  }
  if (scope371v3.id === "gravity") {
    if (scope371v1 === "alt" && (scope371v3.anchor = null), scope371v1 === "action") {
      let scope378v0 = scope371v3.anchors.find(scope379v0 => Math.hypot(scope379v0.x - scope371v3.x, scope379v0.y - scope371v3.y) < 35);
      scope378v0 && (scope371v3.anchor = scope378v0);
    }
    return;
  }
  if (scope371v3.id === "escape") {
    (scope371v1 === "left" || scope371v1 === "right") && (scope371v3.lane = scope0v103(scope371v3.lane + (scope371v1 === "left" ? -1 : 1), 0, 2)), (scope371v1 === "action" || scope371v1 === "up") && scope371v3.jump === 0 && (scope371v3.vy = 255, scope371v3.slide = 0), (scope371v1 === "alt" || scope371v1 === "down") && scope371v3.jump === 0 && (scope371v3.slide = 850);
    return;
  }
  ["ricochet", "floor", "burst"].includes(scope371v3.id) && scope371v1 === "action" && scope371v3.cooldown <= 0 && scope371v3.counter.ready && Math.hypot(scope371v3.counter.x - scope371v3.x, scope371v3.counter.y - scope371v3.y) < 34 && (scope371v3.counter.ready = !1, scope371v3.counterTime = 0, scope371v3.cooldown = 400, scope371v2.hit(scope371v3.id === "burst" ? 32 : 20), scope371v2.heal(2), scope371v3.feedback = "counter", scope371v3.feedbackTime = 900);
}
function scope0v111(scope381v0, scope381v1) {
  let scope381v2 = scope381v0.round;
  if (scope381v2.busy || scope381v1 < 0 || scope381v1 >= 42) return;
  if (scope381v2.chosen === null) {
    scope381v2.chosen = scope381v1;
    return;
  }
  if (scope381v2.chosen === scope381v1) {
    scope381v2.chosen = null;
    return;
  }
  let scope381v3 = scope381v2.chosen;
  scope381v2.chosen = null, scope0v99(scope381v2, scope381v3, scope381v1, scope381v0.random);
}
function scope0v112(scope384v0, scope384v1, scope384v2, scope384v3, scope384v4) {
  let scope384v5 = scope384v0.round;
  if (["match", "execution"].includes(scope384v5.id)) {
    let scope385v0 = Math.floor((scope384v1 - 26) / 38),
      scope385v1 = Math.floor((scope384v2 - 204) / 38),
      scope385v2 = scope385v0 >= 0 && scope385v0 < 6 && scope385v1 >= 0 && scope385v1 < 7;
    if (scope384v3 === "start" && scope385v2 && !scope384v5.busy) scope384v5.cursor = scope385v1 * 6 + scope385v0, scope0v111(scope384v0, scope384v5.cursor), scope384v5.matchGesture = {
      cell: scope384v5.cursor,
      x: scope384v1,
      y: scope384v2
    };else if (scope384v3 === "move" && scope385v2 && scope384v5.matchGesture && !scope384v5.busy) {
      let scope386v0 = scope385v1 * 6 + scope385v0,
        scope386v1 = scope384v5.matchGesture.cell;
      Math.abs(scope386v1 % 6 - scope386v0 % 6) + Math.abs(Math.floor(scope386v1 / 6) - Math.floor(scope386v0 / 6)) === 1 && Math.hypot(scope384v1 - scope384v5.matchGesture.x, scope384v2 - scope384v5.matchGesture.y) > 12 && (scope384v5.cursor = scope386v0, scope0v111(scope384v0, scope386v0), scope384v5.matchGesture = null);
    }
    (scope384v3 === "end" || scope384v3 === "cancel") && (scope384v5.matchGesture = null);
    return;
  }
  if (scope384v5.id === "merge") {
    scope384v5.aim = scope0v103(scope384v1, 36, 244), scope384v3 === "end" && scope0v109(scope384v0, scope384v5);
    return;
  }
  if (scope384v5.id === "rope") {
    if (scope384v3 === "start") {
      scope384v5.pointer = {
        x: scope384v1,
        y: scope384v2
      };
      return;
    }
    if (scope384v3 === "move" && scope384v5.pointer) {
      for (let scope391v0 = 0; scope391v0 < scope384v5.ropes.length; scope391v0++) {
        let scope392v0 = scope384v5.ropes[scope391v0];
        !scope392v0.cut && scope0v113(scope384v5.pointer, {
          x: scope384v1,
          y: scope384v2
        }, scope392v0, scope384v5.candy) && scope0v108(scope384v5, scope391v0);
      }
      scope384v5.pointer = {
        x: scope384v1,
        y: scope384v2
      };
    }
    (scope384v3 === "end" || scope384v3 === "cancel") && (scope384v5.pointer = null);
    return;
  }
  if (scope384v5.id === "slice") {
    let scope393v0 = {
      x: scope0v103(scope384v1, 25, 255),
      y: scope0v103(scope384v2, 208, 478)
    };
    scope384v3 === "move" && scope384v5.pointer && (scope0v115(scope384v0, scope384v5.pointer, scope393v0, scope384v4), scope384v5.trail.push({
      ...scope393v0,
      age: 0
    })), scope384v5.cursor = scope393v0, scope384v5.pointer = scope384v3 === "end" || scope384v3 === "cancel" ? null : scope393v0;
    return;
  }
  if (scope384v5.id === "escape") {
    if (scope384v3 === "start") scope384v5.escapeGesture = {
      x: scope384v1,
      y: scope384v2
    };else if (scope384v3 === "move" && scope384v5.escapeGesture) {
      let scope395v0 = scope384v1 - scope384v5.escapeGesture.x,
        scope395v1 = scope384v2 - scope384v5.escapeGesture.y;
      Math.max(Math.abs(scope395v0), Math.abs(scope395v1)) >= 22 && (scope0v110(scope384v0, Math.abs(scope395v0) > Math.abs(scope395v1) ? scope395v0 > 0 ? "right" : "left" : scope395v1 < 0 ? "action" : "alt", scope384v4), scope384v5.escapeGesture = null);
    }
    (scope384v3 === "end" || scope384v3 === "cancel") && (scope384v5.escapeGesture = null);
    return;
  }
  ["gravity", "ricochet", "floor", "burst"].includes(scope384v5.id) && (scope384v5.pointer = scope384v3 === "end" || scope384v3 === "cancel" ? null : {
    x: scope0v103(scope384v1, 28, 252),
    y: scope0v103(scope384v2, 230, 465)
  });
}
function scope0v113(scope396v0, scope396v1, scope396v2, scope396v3) {
  let scope396v4 = (scope397v0, scope397v1, scope397v2) => (scope397v1.x - scope397v0.x) * (scope397v2.y - scope397v0.y) - (scope397v1.y - scope397v0.y) * (scope397v2.x - scope397v0.x);
  return scope396v4(scope396v0, scope396v1, scope396v2) * scope396v4(scope396v0, scope396v1, scope396v3) <= 0 && scope396v4(scope396v2, scope396v3, scope396v0) * scope396v4(scope396v2, scope396v3, scope396v1) <= 0 && Math.max(scope396v0.x, scope396v1.x) >= Math.min(scope396v2.x, scope396v3.x) && Math.min(scope396v0.x, scope396v1.x) <= Math.max(scope396v2.x, scope396v3.x) && Math.max(scope396v0.y, scope396v1.y) >= Math.min(scope396v2.y, scope396v3.y) && Math.min(scope396v0.y, scope396v1.y) <= Math.max(scope396v2.y, scope396v3.y);
}
function scope0v114(scope398v0, scope398v1, scope398v2) {
  let scope398v3 = scope398v2.x - scope398v1.x,
    scope398v4 = scope398v2.y - scope398v1.y,
    scope398v5 = scope0v103(((scope398v0.x - scope398v1.x) * scope398v3 + (scope398v0.y - scope398v1.y) * scope398v4) / (scope398v3 * scope398v3 + scope398v4 * scope398v4 || 1), 0, 1);
  return Math.hypot(scope398v0.x - scope398v1.x - scope398v5 * scope398v3, scope398v0.y - scope398v1.y - scope398v5 * scope398v4);
}
function scope0v115(scope399v0, scope399v1, scope399v2, scope399v3, scope399v4 = 0) {
  let scope399v5 = scope399v0.round,
    scope399v6 = Math.atan2(scope399v2.y - scope399v1.y, scope399v2.x - scope399v1.x);
  scope399v5.slashes.push({
    a: {
      ...scope399v1
    },
    b: {
      ...scope399v2
    },
    age: 0
  });
  for (let scope401v0 of [...scope399v5.objects]) if (!(scope401v0.hit || scope0v114(scope401v0, scope399v1, scope399v2) > scope401v0.r + scope399v4)) {
    if (scope401v0.hit = !0, scope401v0.bomb) {
      scope399v3.hurt(8), scope399v5.feedback = "bomb";
      for (let scope404v0 = 0; scope404v0 < 10; scope404v0++) {
        let scope405v0 = scope404v0 * Math.PI / 5;
        scope399v5.sliceEffects.push({
          kind: "spark",
          x: scope401v0.x,
          y: scope401v0.y,
          vx: Math.cos(scope405v0) * 70,
          vy: Math.sin(scope405v0) * 70 - 35,
          angle: 0,
          spin: 0,
          age: 0,
          life: 380,
          color: "#ffba73"
        });
      }
    } else {
      scope399v5.score++, scope399v3.hit(3), scope399v5.score % 4 === 0 && scope399v3.heal(2), scope399v5.feedback = "success";
      for (let scope407v0 of [-1, 1]) scope399v5.sliceEffects.push({
        kind: "half",
        type: scope401v0.type,
        x: scope401v0.x,
        y: scope401v0.y,
        vx: scope401v0.vx + Math.cos(scope399v6 + Math.PI / 2) * scope407v0 * 55,
        vy: scope401v0.vy * .35 + Math.sin(scope399v6 + Math.PI / 2) * scope407v0 * 55 - 30,
        angle: scope399v6,
        spin: scope407v0 * 2,
        side: scope407v0,
        age: 0,
        life: 680,
        r: scope401v0.r
      });
      let scope406v0 = ["#ef6277", "#efc461", "#b69be6", "#f49a55", "#b8db78"];
      for (let scope408v0 = 0; scope408v0 < 8; scope408v0++) {
        let scope409v0 = scope408v0 * Math.PI / 4;
        scope399v5.sliceEffects.push({
          kind: "juice",
          x: scope401v0.x,
          y: scope401v0.y,
          vx: Math.cos(scope409v0) * (35 + scope408v0 * 6),
          vy: Math.sin(scope409v0) * 50 - 30,
          angle: 0,
          spin: 0,
          age: 0,
          life: 450,
          color: scope406v0[scope401v0.type % 5]
        });
      }
    }
    if (scope399v5.feedbackTime = 800, scope399v0.over || scope399v0.scene) return;
  }
  scope399v5.score >= scope399v5.target && scope399v3.finish(!0);
}
function scope0v116(scope410v0, scope410v1, scope410v2) {
  let scope410v3 = scope410v0.round,
    scope410v4 = scope410v1 / 1e3,
    scope410v5 = scope410v0.difficulty === "hard";
  if (scope410v3.invincible = Math.max(0, scope410v3.invincible - scope410v1), scope410v3.cooldown = Math.max(0, scope410v3.cooldown - scope410v1), scope410v3.feedbackTime = Math.max(0, scope410v3.feedbackTime - scope410v1), scope0v123(scope410v3, scope410v1), scope410v3.id === "snake") {
    if (scope410v3.step += scope410v1, scope410v3.step >= scope410v3.stepMs) {
      scope410v3.step -= scope410v3.stepMs, scope410v3.nextDir && (scope410v3.dir = scope410v3.nextDir, scope410v3.nextDir = null);
      let scope412v0 = [(scope410v3.snake[0][0] + scope410v3.dir[0] + 12) % 12, (scope410v3.snake[0][1] + scope410v3.dir[1] + 15) % 15],
        scope412v1 = scope410v3.food && scope412v0[0] === scope410v3.food[0] && scope412v0[1] === scope410v3.food[1];
      if (scope410v3.snake.slice(0, scope412v1 ? void 0 : -1).some(scope413v0 => scope413v0[0] === scope412v0[0] && scope413v0[1] === scope412v0[1])) {
        scope410v2.finish(!1);
        return;
      }
      scope410v3.snake.unshift(scope412v0), scope412v1 ? (scope410v3.score++, scope410v2.hit(5), scope410v2.heal(2), scope0v106(scope410v0, scope410v3), scope410v3.score === scope410v3.target && (scope410v3.feedback = "snake-bonus", scope410v3.feedbackTime = 1800)) : scope410v3.snake.pop();
    }
    return;
  }
  if (["match", "execution"].includes(scope410v3.id)) {
    let scope415v0 = scope0v102(scope410v3, scope410v1, scope410v0.random);
    if (scope415v0 && scope415v0.cleared && (scope410v2.hit(Math.min(25, scope415v0.cleared * 2)), scope415v0.cleared >= 4 && scope410v2.heal(2), scope410v3.feedback = scope410v3.chain > 1 ? "chain" : "success", scope410v3.feedbackTime = 1e3, scope410v0.round !== scope410v3 || scope410v0.scene)) return;
    scope410v3.busy || ((scope410v3.id === "execution" ? scope410v3.collected >= scope410v3.target && scope410v3.jellies.every(scope416v0 => scope416v0 === 0) : scope410v3.score >= scope410v3.target) ? scope410v2.finish(!0) : scope410v3.moves === 0 && scope410v2.finish(!1));
    return;
  }
  if (scope410v3.id === "merge") {
    if (scope410v3.aim = scope0v103(scope410v3.aim + ((scope410v0.held.has("right") ? 1 : 0) - (scope410v0.held.has("left") ? 1 : 0)) * scope410v4 * 140, 36, 244), scope410v3.dropCooldown = Math.max(0, scope410v3.dropCooldown - scope410v1), scope0v117(scope410v0, scope410v3, scope410v4, scope410v2), scope410v0.round !== scope410v3 || scope410v0.scene) return;
    let scope417v0 = scope410v3.fruits.some(scope418v0 => scope418v0.age > 1500 && scope418v0.y - scope0v104[scope418v0.level].r < 238 && Math.abs(scope418v0.vy) < 45);
    scope410v3.topTime = scope417v0 ? scope410v3.topTime + scope410v1 : Math.max(0, scope410v3.topTime - scope410v1), scope410v3.topTime > 1800 ? scope410v2.finish(!1) : scope410v3.watermelon && scope410v2.finish(!0);
    return;
  }
  if (scope410v3.id === "rope") {
    scope0v118(scope410v0, scope410v3, scope410v4, scope410v2);
    return;
  }
  if (scope410v3.id === "slice") {
    if (scope410v3.cursor.x = scope0v103(scope410v3.cursor.x + ((scope410v0.held.has("right") ? 1 : 0) - (scope410v0.held.has("left") ? 1 : 0)) * scope410v4 * 180, 26, 254), scope410v3.cursor.y = scope0v103(scope410v3.cursor.y + ((scope410v0.held.has("down") ? 1 : 0) - (scope410v0.held.has("up") ? 1 : 0)) * scope410v4 * 180, 210, 475), scope410v3.spawn -= scope410v1, scope410v3.spawn <= 0) {
      scope410v3.spawn = scope410v5 ? 680 : 850;
      let scope421v0 = 45 + scope410v0.random() * 190;
      scope410v3.objects.push({
        x: scope421v0,
        y: 478,
        vx: (140 - scope421v0) * .4,
        vy: -230 - scope410v0.random() * 90,
        r: 12,
        bomb: scope410v0.random() < .22,
        type: Math.floor(scope410v0.random() * 5)
      });
    }
    for (let scope422v0 of scope410v3.objects) scope422v0.vy += scope410v4 * 280, scope422v0.x += scope422v0.vx * scope410v4, scope422v0.y += scope422v0.vy * scope410v4, !scope422v0.hit && scope422v0.y > 510 && (scope422v0.hit = !0, scope422v0.bomb || (scope410v3.missed++, scope410v3.missed % 3 === 0 && scope410v2.hurt(3)));
    scope410v3.objects = scope410v3.objects.filter(scope423v0 => !scope423v0.hit && scope423v0.y < 515);
    return;
  }
  if (scope410v3.id === "escape") {
    scope0v122(scope410v0, scope410v3, scope410v1, scope410v2);
    return;
  }
  scope0v121(scope410v0, scope410v3, scope410v1, scope410v2);
}
function scope0v117(scope425v0, scope425v1, scope425v2, scope425v3) {
  let scope425v4 = Math.ceil(scope425v2 / .012),
    scope425v5 = scope425v2 / scope425v4;
  for (let scope426v0 = 0; scope426v0 < scope425v4; scope426v0++) {
    for (let scope428v0 of scope425v1.fruits) {
      let scope429v0 = scope0v104[scope428v0.level].r;
      scope428v0.age += scope425v5 * 1e3, scope428v0.vy += scope425v5 * 430, scope428v0.x += scope428v0.vx * scope425v5, scope428v0.y += scope428v0.vy * scope425v5, scope428v0.vx *= .995, scope428v0.x < 24 + scope429v0 && (scope428v0.x = 24 + scope429v0, scope428v0.vx = Math.abs(scope428v0.vx) * .35), scope428v0.x > 256 - scope429v0 && (scope428v0.x = 256 - scope429v0, scope428v0.vx = -Math.abs(scope428v0.vx) * .35), scope428v0.y > 478 - scope429v0 && (scope428v0.y = 478 - scope429v0, scope428v0.vy = -Math.abs(scope428v0.vy) * .16, Math.abs(scope428v0.vy) < 7 && (scope428v0.vy = 0));
    }
    for (let scope430v0 = 0; scope430v0 < 3; scope430v0++) for (let scope431v0 = 0; scope431v0 < scope425v1.fruits.length; scope431v0++) for (let scope432v0 = scope431v0 + 1; scope432v0 < scope425v1.fruits.length; scope432v0++) {
      let scope433v0 = scope425v1.fruits[scope431v0],
        scope433v1 = scope425v1.fruits[scope432v0],
        scope433v2 = scope0v104[scope433v0.level].r,
        scope433v3 = scope0v104[scope433v1.level].r,
        scope433v4 = scope433v1.x - scope433v0.x,
        scope433v5 = scope433v1.y - scope433v0.y,
        scope433v6 = Math.hypot(scope433v4, scope433v5) || .01;
      if (scope433v6 > scope433v2 + scope433v3) continue;
      if (scope433v0.level === scope433v1.level && scope433v0.level < 7) {
        let scope434v0 = scope433v0.level + 1;
        scope425v1.fruits.splice(scope432v0, 1), scope425v1.fruits.splice(scope431v0, 1), scope425v1.fruits.push({
          x: scope0v103((scope433v0.x + scope433v1.x) / 2, 24 + scope0v104[scope434v0].r, 256 - scope0v104[scope434v0].r),
          y: (scope433v0.y + scope433v1.y) / 2,
          vx: (scope433v0.vx + scope433v1.vx) / 2,
          vy: Math.min(0, (scope433v0.vy + scope433v1.vy) / 2),
          level: scope434v0,
          age: 0
        });
        let scope434v1 = 2 ** scope434v0;
        scope425v1.score += scope434v1, scope434v0 === scope0v104.length - 1 && (scope425v1.watermelon = !0), scope425v3.hit(Math.min(12, scope434v1)), scope425v3.heal(scope434v0 >= 4 ? 3 : 1), scope425v1.feedback = "merge", scope425v1.feedbackTime = 800;
        return;
      }
      let scope433v7 = scope433v4 / scope433v6,
        scope433v8 = scope433v5 / scope433v6,
        scope433v9 = (scope433v2 + scope433v3 - scope433v6) * .5;
      scope433v0.x -= scope433v7 * scope433v9, scope433v0.y -= scope433v8 * scope433v9, scope433v1.x += scope433v7 * scope433v9, scope433v1.y += scope433v8 * scope433v9;
      let scope433v10 = (scope433v1.vx - scope433v0.vx) * scope433v7 + (scope433v1.vy - scope433v0.vy) * scope433v8;
      scope433v10 < 0 && (scope433v0.vx += scope433v10 * scope433v7 * .52, scope433v0.vy += scope433v10 * scope433v8 * .52, scope433v1.vx -= scope433v10 * scope433v7 * .52, scope433v1.vy -= scope433v10 * scope433v8 * .52), scope433v0.vx *= .98, scope433v1.vx *= .98;
    }
  }
}
function scope0v118(scope435v0, scope435v1, scope435v2, scope435v3) {
  let scope435v4 = scope435v1.candy;
  if (scope435v1.ropeAge += scope435v2, scope435v1.resetWait) {
    scope435v1.resetWait -= scope435v2, scope435v1.resetWait <= 0 && scope0v107(scope435v1);
    return;
  }
  scope435v4.vy += scope435v2 * 270, scope435v4.x += scope435v4.vx * scope435v2, scope435v4.y += scope435v4.vy * scope435v2;
  for (let scope437v0 = 0; scope437v0 < 6; scope437v0++) for (let scope438v0 of scope435v1.ropes) {
    if (scope438v0.cut) continue;
    let scope439v0 = scope435v4.x - scope438v0.x,
      scope439v1 = scope435v4.y - scope438v0.y,
      scope439v2 = Math.hypot(scope439v0, scope439v1),
      scope439v3 = scope439v0 / scope439v2,
      scope439v4 = scope439v1 / scope439v2;
    if (scope439v2 > scope438v0.len) {
      scope435v4.x = scope438v0.x + scope439v3 * scope438v0.len, scope435v4.y = scope438v0.y + scope439v4 * scope438v0.len;
      let scope440v0 = scope435v4.vx * scope439v3 + scope435v4.vy * scope439v4;
      scope440v0 > 0 && (scope435v4.vx -= scope440v0 * scope439v3, scope435v4.vy -= scope440v0 * scope439v4);
    }
  }
  scope435v1.wall && scope435v4.x > scope435v1.wall.x - 10 && scope435v4.x < scope435v1.wall.x + scope435v1.wall.w + 10 && Math.abs(scope435v4.y - scope435v1.wall.y) < 18 && (scope435v4.x += scope435v4.vx >= 0 ? -12 : 12, scope435v4.vx *= -.5, scope435v4.vy = -40);
  for (let scope441v0 of scope435v1.stars) !scope441v0.taken && Math.hypot(scope435v4.x - scope441v0.x, scope435v4.y - scope441v0.y) < 25 && (scope441v0.taken = !0, scope435v3.heal(2));
  Math.hypot(scope435v4.x - scope435v1.receiver.x, scope435v4.y - scope435v1.receiver.y) < 28 ? (scope435v1.score++, scope435v3.hit(18), scope435v3.heal(3), scope435v1.score >= scope435v1.target ? scope435v3.finish(!0) : (scope435v1.level++, scope0v107(scope435v1))) : (scope435v4.y > 492 || scope435v4.x < 10 || scope435v4.x > 270) && (scope435v1.feedback = "miss", scope435v1.feedbackTime = 900, scope435v1.resetWait = .9, scope435v3.hurt(3));
}
function scope0v119(scope442v0, scope442v1, scope442v2) {
  let scope442v3 = (scope442v0.held.has("right") ? 1 : 0) - (scope442v0.held.has("left") ? 1 : 0),
    scope442v4 = (scope442v0.held.has("down") ? 1 : 0) - (scope442v0.held.has("up") ? 1 : 0);
  if (scope442v1.pointer) {
    let scope443v0 = scope442v1.pointer.x - scope442v1.x,
      scope443v1 = scope442v1.pointer.y - scope442v1.y,
      scope443v2 = Math.hypot(scope443v0, scope443v1);
    scope442v3 = scope443v2 > 3 ? scope443v0 / scope443v2 : 0, scope442v4 = scope443v2 > 3 ? scope443v1 / scope443v2 : 0;
  }
  let scope442v5 = Math.max(1, Math.hypot(scope442v3, scope442v4));
  scope442v1.x = scope0v103(scope442v1.x + scope442v3 / scope442v5 * scope442v2 * 155, 30, 250), scope442v1.y = scope0v103(scope442v1.y + scope442v4 / scope442v5 * scope442v2 * 155, 236, 466);
}
function scope0v120(scope444v0, scope444v1, scope444v2, scope444v3) {
  scope444v1.invincible <= 0 && (scope444v2.hurt(scope444v3), scope444v1.invincible = 950, scope444v1.feedback = "hit", scope444v1.feedbackTime = 800);
}
function scope0v121(scope445v0, scope445v1, scope445v2, scope445v3) {
  let scope445v4 = scope445v2 / 1e3,
    scope445v5 = scope445v0.difficulty === "hard",
    scope445v6 = 1 + (scope445v0.stage - 1) * .22 + (scope445v5 ? .12 : 0);
  scope0v119(scope445v0, scope445v1, scope445v4);
  let scope445v7 = scope445v1.clock % 4e3;
  if (scope445v1.id === "gravity") {
    let scope446v0 = scope445v7 > 1e3 && scope445v7 < 3300;
    if (scope445v1.pulling = scope446v0, scope445v1.anchor) scope445v1.x = scope445v1.anchor.x, scope445v1.y = scope445v1.anchor.y;else if (scope446v0) {
      let scope447v0 = scope445v1.mouth.x - scope445v1.x,
        scope447v1 = scope445v1.mouth.y - scope445v1.y,
        scope447v2 = Math.hypot(scope447v0, scope447v1);
      scope445v1.x += scope447v0 / scope447v2 * scope445v4 * (102 * scope445v6 + (scope447v2 < 95 ? 45 : 0)), scope445v1.y += scope447v1 / scope447v2 * scope445v4 * (102 * scope445v6 + (scope447v2 < 95 ? 45 : 0)), scope447v2 < 25 && (scope0v120(scope445v0, scope445v1, scope445v3, 22), scope445v1.x = 140, scope445v1.y = 447);
    }
    !scope446v0 && scope445v7 > 3300 && !scope445v1.rewarded && (scope445v3.hit(12), scope445v1.rewarded = !0), scope445v7 < 1e3 && (scope445v1.rewarded = !1);
    return;
  }
  if (scope445v1.counterTime += scope445v2, scope445v1.counterTime > 2300 && !scope445v1.counter.ready) {
    let scope448v0 = scope445v1.id === "floor" ? scope445v1.floor.filter(scope449v0 => scope449v0.active === !1) : null;
    scope445v1.counter = {
      x: scope448v0?.length ? scope448v0[0].x + 20 : 70 + scope445v0.random() * 140,
      y: scope448v0?.length ? scope448v0[0].y + 20 : 350 + scope445v0.random() * 80,
      ready: !0
    };
  }
  if (scope445v1.id === "floor") {
    if (scope445v1.spawn -= scope445v2, scope445v1.spawn <= 0) {
      scope445v1.spawn = 2100 / scope445v6;
      let scope451v0 = [];
      for (let scope452v0 = 0; scope452v0 < 5; scope452v0++) for (let scope453v0 = 0; scope453v0 < 5; scope453v0++) scope453v0 === 2 || scope452v0 === 4 || scope445v1.floor.some(scope454v0 => scope454v0.cx === scope453v0 && scope454v0.cy === scope452v0) || scope451v0.push({
        cx: scope453v0,
        cy: scope452v0,
        x: 30 + scope453v0 * 44,
        y: 244 + scope452v0 * 44,
        age: 0,
        active: !1
      });
      scope451v0.length && scope445v1.floor.push(scope451v0[Math.floor(scope445v0.random() * scope451v0.length)]);
    }
    for (let scope455v0 of scope445v1.floor) scope455v0.age += scope445v2, scope455v0.active = scope455v0.age > 1e3, scope455v0.active && scope445v1.x > scope455v0.x && scope445v1.x < scope455v0.x + 40 && scope445v1.y > scope455v0.y && scope445v1.y < scope455v0.y + 40 && (scope0v120(scope445v0, scope445v1, scope445v3, 12), scope445v1.x = 140, scope445v1.y = 455);
    return;
  }
  if (scope445v1.spawn -= scope445v2, scope445v1.spawn <= 0) {
    scope445v1.spawn = (scope445v1.id === "burst" ? 1050 : 1600) / scope445v6;
    let scope456v0 = .4 + scope445v0.random() * 2.3,
      scope456v1 = (scope445v1.id === "burst" ? 145 : 120) * scope445v6;
    scope445v1.objects.push({
      x: 140,
      y: 250,
      vx: Math.cos(scope456v0) * scope456v1,
      vy: Math.sin(scope456v0) * scope456v1,
      r: 9,
      bounces: 0,
      type: Math.floor(scope445v0.random() * 5)
    });
  }
  for (let scope457v0 of scope445v1.objects) scope457v0.x += scope457v0.vx * scope445v4, scope457v0.y += scope457v0.vy * scope445v4, (scope457v0.x < 30 || scope457v0.x > 250) && (scope457v0.x = scope0v103(scope457v0.x, 30, 250), scope457v0.vx = -scope457v0.vx, scope457v0.bounces++), (scope457v0.y < 242 || scope457v0.y > 470) && (scope457v0.y = scope0v103(scope457v0.y, 242, 470), scope457v0.vy = -scope457v0.vy, scope457v0.bounces++), scope457v0.bounces < 5 && Math.hypot(scope445v1.x - scope457v0.x, scope445v1.y - scope457v0.y) < scope457v0.r + 7 && scope0v120(scope445v0, scope445v1, scope445v3, 6);
  scope445v1.objects = scope445v1.objects.filter(scope458v0 => scope458v0.bounces < 5), scope445v1.id === "burst" && (scope445v1.burstOpen = scope445v7 > 2700, scope445v1.burstOpen ? !scope445v1.counter.ready && scope445v1.counterTime > 1e3 && (scope445v1.counter = {
    x: 140,
    y: 385,
    ready: !0
  }) : scope445v1.counter.ready = !1);
}
function scope0v122(scope459v0, scope459v1, scope459v2, scope459v3) {
  let scope459v4 = scope459v2 / 1e3,
    scope459v5 = scope459v0.difficulty === "hard";
  scope459v1.lanePosition += (scope459v1.lane - scope459v1.lanePosition) * Math.min(1, scope459v4 * 12), scope459v1.x = 140 + (scope459v1.lanePosition - 1) * 65, scope459v1.vy -= scope459v4 * 590, scope459v1.jump = Math.max(0, scope459v1.jump + scope459v1.vy * scope459v4), scope459v1.jump === 0 && (scope459v1.vy = 0), scope459v1.slide = Math.max(0, scope459v1.slide - scope459v2), scope459v1.stumble = Math.max(0, scope459v1.stumble - scope459v2);
  let scope459v6 = (scope459v5 ? 28 : 24) * (scope459v1.stumble > 0 ? .35 : 1);
  if (scope459v1.distance = Math.min(100, scope459v1.distance + scope459v4 * scope459v6 / 10), scope459v1.distance >= 100) {
    scope459v3.finish(!0);
    return;
  }
  if (scope459v1.closed = scope459v1.clock / scope459v1.duration, scope459v1.spawn -= scope459v2, scope459v1.spawn <= 0) {
    scope459v1.spawn = scope459v5 ? 1250 : 1650;
    let scope461v0 = Math.floor(scope459v0.random() * 3),
      scope461v1 = ["crumb", "pit", "beam"][Math.floor(scope459v0.random() * 3)],
      scope461v2 = [0, 1, 2].filter(scope462v0 => scope462v0 !== scope461v0);
    scope459v0.random() < .55 && scope461v2.splice(1, 1);
    for (let scope463v0 of scope461v2) scope459v1.obstacles.push({
      lane: scope463v0,
      z: 95,
      kind: scope461v1,
      hit: !1
    });
  }
  for (let scope464v0 of scope459v1.obstacles) {
    let scope465v0 = scope464v0.z;
    if (scope464v0.z -= scope459v4 * scope459v6, !scope464v0.hit && scope465v0 > 0 && scope464v0.z <= 0) {
      if (scope464v0.hit = !0, Math.abs(scope464v0.lane - scope459v1.lanePosition) >= .43) continue;
      (scope464v0.kind === "beam" ? scope459v1.slide > 0 && scope459v1.jump < 5 : scope459v1.jump >= (scope464v0.kind === "pit" ? 18 : 24)) || (scope0v120(scope459v0, scope459v1, scope459v3, 7), scope459v1.stumble = 650), scope464v0.hit = !0;
    }
  }
  scope459v1.obstacles = scope459v1.obstacles.filter(scope467v0 => scope467v0.z > -10), scope459v1.y = 437 - scope459v1.jump;
}
function scope0v123(scope468v0, scope468v1) {
  let scope468v2 = scope468v1 / 1e3;
  scope468v0.falling && (scope468v0.clearAge = (scope468v0.clearAge || 0) + scope468v1), scope468v0.id === "slice" && (scope468v0.trail = scope468v0.trail.filter(scope469v0 => (scope469v0.age += scope468v1) < 170), scope468v0.slashes = scope468v0.slashes.filter(scope470v0 => (scope470v0.age += scope468v1) < 210), scope468v0.sliceEffects = scope468v0.sliceEffects.filter(scope471v0 => (scope471v0.age += scope468v1, scope471v0.x += scope471v0.vx * scope468v2, scope471v0.y += scope471v0.vy * scope468v2, scope471v0.vy += scope468v2 * 240, scope471v0.angle += scope471v0.spin * scope468v2, scope471v0.age < scope471v0.life)));
}
var scope0v124 = {
    normal: [560, 700, 840],
    hard: [560, 840, 1050]
  },
  scope0v125 = ["snake", "match", "merge", "rope", "slice"],
  scope0v126 = ["gravity", "ricochet", "floor"],
  scope0v127 = {
    bridge: ["Bridge", "Bridge"],
    snake: ["\u8CAA\u5403\u86C7", "Hungry snake"],
    match: ["\u98DF\u7269\u4E09\u6D88", "Food match"],
    merge: ["\u5408\u6210\u897F\u74DC", "Fruit fusion"],
    rope: ["\u5272\u7E69\u9935\u7CD6", "Cut & feed"],
    slice: ["\u5207\u98DF\u7269", "Food slicer"],
    gravity: ["\u98E2\u9913\u5F15\u529B", "Hunger pull"],
    ricochet: ["\u53CD\u82BB\u5F48\u5C04", "Ricochet scraps"],
    floor: ["\u5543\u98DF\u5730\u677F", "Devoured floor"],
    execution: ["\u6700\u5F8C\u4E00\u9910", "Last serving"],
    escape: ["\u5927\u5634\u9003\u4EA1", "Mouth escape"],
    burst: ["\u6700\u7D42\u7206\u767C", "Final outburst"]
  },
  scope0v128 = [{
    id: "full",
    label: ["\u5B8C\u6574\u6311\u6230", "Full encounter"]
  }, ...[1, 2, 3, 4, 5].map(scope472v0 => ({
    id: "phase-" + scope472v0,
    stage: scope472v0 < 3 ? 1 : scope472v0 < 5 ? 2 : 3,
    ratio: scope472v0 === 2 || scope472v0 === 4 ? .45 : 1,
    label: [["\u5EDA\u5E2B", "\u98E2\u9913\u5EDA\u5E2B", "\u5DE8\u53E3", "\u81A8\u8139\u5DE8\u53E3", "\u6DF1\u6DF5\u5DE8\u53E3"][scope472v0 - 1] + " \xB7 Bridge", ["Chef", "Hungry chef", "Maw", "Swollen maw", "Abyss maw"][scope472v0 - 1] + " \xB7 Bridge"]
  })), ...scope0v125.map(scope473v0 => ({
    id: scope473v0,
    mode: scope473v0,
    stage: 1,
    single: !0,
    label: scope0v127[scope473v0]
  })), ...scope0v126.flatMap(scope474v0 => [1, 2, 3].map(scope475v0 => ({
    id: scope474v0 + "-" + scope475v0,
    mode: scope474v0,
    stage: scope475v0,
    single: !0,
    label: [scope0v127[scope474v0][0] + " \xB7 " + ["\u5EDA\u5E2B", "\u5DE8\u53E3", "\u6DF1\u6DF5"][scope475v0 - 1], scope0v127[scope474v0][1] + " \xB7 " + ["Chef", "Maw", "Abyss"][scope475v0 - 1]]
  }))), {
    id: "execution",
    mode: "execution",
    stage: 2,
    ratio: .2,
    single: !0,
    label: ["\u4E09\u6D88\u8655\u6C7A", "Match execution"]
  }, {
    id: "escape",
    mode: "escape",
    stage: 3,
    ratio: .2,
    single: !0,
    label: ["\u98DF\u9053\u9003\u4EA1", "Gullet escape"]
  }, {
    id: "burst",
    mode: "burst",
    stage: 3,
    ratio: .1,
    single: !0,
    label: scope0v127.burst
  }, ...["intro", "chef-defeat", "mouth", "mouth-defeat", "abyss", "abyss-defeat", "body", "victory", "lost"].map(scope476v0 => ({
    id: "story:" + scope476v0,
    story: scope476v0,
    stage: scope476v0 === "intro" || scope476v0 === "chef-defeat" ? 1 : scope476v0.startsWith("mouth") ? 2 : 3,
    label: ["\u63D2\u5716 \xB7 " + scope476v0, "Story \xB7 " + scope476v0]
  }))];
function scope0v129(scope477v0) {
  let scope477v1 = scope0v45({
    mode: "marathon",
    random: scope477v0
  });
  return scope0v47(scope477v1, "marathon"), scope477v1;
}
function scope0v130({
  scenario: scope478v0 = "full",
  difficulty: scope478v1 = "normal",
  random: scope478v2 = Math.random
} = {}) {
  let scope478v3 = scope0v128.find(scope480v0 => scope480v0.id === scope478v0);
  if (!scope478v3) throw new RangeError("Unknown Gluttony scenario");
  scope478v1 = scope478v1 === "hard" ? "hard" : "normal";
  let scope478v4 = scope478v3.stage || 1,
    scope478v5 = scope0v124[scope478v1][scope478v4 - 1],
    scope478v6 = {
      sin: "gluttony",
      preview: !0,
      difficulty: scope478v1,
      scenario: scope478v3,
      random: scope478v2,
      stage: scope478v4,
      bossHp: scope478v5 * (scope478v3.ratio ?? 1),
      bossMaxHp: scope478v5,
      hp: 100,
      maxHp: 100,
      bridge: scope0v129(scope478v2),
      held: new Set(),
      mode: "bridge",
      round: null,
      scene: null,
      sceneHistory: [],
      played: [],
      completed: [],
      executionDone: scope478v3.mode === "burst",
      escapeDone: scope478v3.mode === "burst",
      retry: 0,
      elapsed: 0,
      over: !1,
      won: !1,
      cycle: 0,
      gameIndex: 0,
      attackIndex: 0,
      phaseSeen: scope478v3.ratio < .5,
      catDue: 18e3,
      catTime: 0,
      stats: {
        damage: 0,
        damageTaken: 0,
        healed: 0
      },
      curses: {
        reverse: 0,
        blind: 0,
        rush: 0,
        norotate: 0
      }
    };
  return scope0v139(scope478v6, scope478v3.mode || "bridge"), scope478v0 === "full" && scope0v132(scope478v6, "intro"), scope478v3.story && scope0v132(scope478v6, scope478v3.story, 0), scope478v6;
}
function scope0v131(scope481v0) {
  return scope481v0.stage === 3 ? 5 : scope481v0.stage === 2 ? scope481v0.bossHp / scope481v0.bossMaxHp <= .5 ? 4 : 3 : scope481v0.bossHp / scope481v0.bossMaxHp <= .5 ? 2 : 1;
}
function scope0v132(scope482v0, scope482v1, scope482v2 = 4e3) {
  scope482v0.scene = {
    kind: scope482v1,
    time: 0,
    duration: scope482v2
  }, scope482v0.sceneHistory.push(scope482v1), scope0v133(scope482v0);
}
function scope0v133(scope484v0) {
  scope484v0.held.clear(), scope484v0.round && (scope484v0.round.horizontalDir = 0, scope484v0.round.pointer = null, scope484v0.round.escapeGesture = null, scope484v0.round.matchGesture = null, scope484v0.round.nextDir = null);
}
function scope0v134(scope485v0, scope485v1) {
  if (scope485v0.over || scope485v1 <= 0) return;
  let scope485v2 = Math.min(scope485v0.maxHp - scope485v0.hp, Math.max(1, Math.floor(scope485v1 * (scope485v0.difficulty === "hard" ? .5 : 1))));
  scope485v0.hp += scope485v2, scope485v0.stats.healed += scope485v2;
}
function scope0v135(scope486v0, scope486v1) {
  if (scope486v0.over || scope486v0.scene || scope486v1 <= 0) return;
  let scope486v2 = Math.min(scope486v0.hp, scope486v1);
  scope486v0.hp -= scope486v2, scope486v0.stats.damageTaken += scope486v2, scope486v0.hp <= 0 && (scope486v0.over = !0, scope486v0.won = !1, scope0v132(scope486v0, "lost", 0));
}
function scope0v136(scope487v0) {
  return scope487v0.stage === 1 && scope0v125.some(scope488v0 => !scope487v0.played.includes(scope488v0)) ? scope487v0.bossMaxHp * .08 : scope487v0.stage === 2 && !scope487v0.executionDone || scope487v0.stage === 3 && !scope487v0.escapeDone ? scope487v0.bossMaxHp * .2 : 0;
}
function scope0v137(scope489v0, scope489v1) {
  if (scope489v0.over || scope489v0.scene || scope489v1 <= 0) return 0;
  let scope489v2 = Math.max(0, Math.min(scope489v1, scope489v0.bossHp - scope0v136(scope489v0)));
  return scope489v0.bossHp = Math.max(0, scope489v0.bossHp - scope489v2), scope489v0.stats.damage += scope489v2, scope489v0.bossHp === 0 ? scope0v132(scope489v0, scope489v0.stage === 1 ? "chef-defeat" : scope489v0.stage === 2 ? "mouth-defeat" : "abyss-defeat") : !scope0v125.includes(scope489v0.mode) && scope489v0.mode !== "execution" && scope489v0.mode !== "escape" && scope0v138(scope489v0), scope489v2;
}
function scope0v138(scope490v0) {
  if (!(scope490v0.over || scope490v0.scene)) {
    if (scope490v0.stage === 1 && scope490v0.bossHp === 0) {
      scope0v132(scope490v0, "chef-defeat");
      return;
    }
    if (scope490v0.stage === 2 && !scope490v0.executionDone && scope490v0.bossHp <= scope490v0.bossMaxHp * .2 && !scope490v0.retry && scope490v0.mode !== "execution") {
      scope0v132(scope490v0, "execution-start");
      return;
    }
    scope490v0.stage === 3 && !scope490v0.escapeDone && scope490v0.bossHp <= scope490v0.bossMaxHp * .2 && !scope490v0.retry && scope490v0.mode !== "escape" && scope0v132(scope490v0, "escape-start");
  }
}
function scope0v139(scope494v0, scope494v1) {
  scope494v0.mode = scope494v1, scope0v133(scope494v0), scope494v0.round = {
    id: scope494v1,
    clock: 0,
    duration: scope494v1 === "bridge" ? 24e3 : 16e3,
    score: 0,
    done: !1,
    success: !1,
    fall: 0,
    lock: 0,
    resolve: 0,
    horizontalDir: 0,
    horizontalMs: 0,
    horizontalRepeating: !1,
    horizontalSource: "keyboard"
  }, scope494v1 !== "bridge" && scope0v105(scope494v0, scope494v0.round);
}
function scope0v140(scope495v0) {
  if (scope495v0.cycle++, scope495v0.escapeDone && scope495v0.stage === 3) {
    scope0v139(scope495v0, "burst");
    return;
  }
  if (scope495v0.cycle % 2 === 0) {
    scope0v139(scope495v0, "bridge");
    return;
  }
  if (scope495v0.cycle % 4 === 3) {
    scope0v139(scope495v0, scope0v126[scope495v0.attackIndex++ % scope0v126.length]);
    return;
  }
  let scope495v1 = scope0v125.filter(scope499v0 => !scope495v0.played.includes(scope499v0));
  scope0v139(scope495v0, scope495v1[0] || scope0v125[scope495v0.gameIndex++ % scope0v125.length]);
}
function scope0v141(scope500v0, scope500v1) {
  let scope500v2 = scope500v0.round;
  if (!(scope500v2.done || scope500v0.scene || scope500v0.over)) {
    if (scope500v2.done = !0, scope500v2.success = scope500v1, scope0v133(scope500v0), scope0v125.includes(scope500v2.id) && (scope500v0.played.includes(scope500v2.id) || scope500v0.played.push(scope500v2.id), scope500v1 && !scope500v0.completed.includes(scope500v2.id) && scope500v0.completed.push(scope500v2.id)), scope500v2.id === "execution") scope500v1 ? (scope500v0.executionDone = !0, scope0v134(scope500v0, 12), scope0v137(scope500v0, 70)) : (scope0v135(scope500v0, 80), scope500v0.retry = 2e4);else if (scope500v2.id === "escape") {
      if (scope500v1) {
        scope500v0.escapeDone = !0, scope0v134(scope500v0, 12);
        let scope502v0 = Math.max(0, scope500v0.bossHp - scope500v0.bossMaxHp * .1);
        scope500v0.bossHp -= scope502v0, scope500v0.stats.damage += scope502v0;
      } else scope0v135(scope500v0, 60), scope500v0.retry = 2e4;
    } else scope500v1 ? (scope0v134(scope500v0, scope0v126.includes(scope500v2.id) ? 4 : 8), scope0v137(scope500v0, scope0v126.includes(scope500v2.id) ? 50 : 80)) : scope0v135(scope500v0, scope500v0.difficulty === "hard" ? 15 : 12);
    scope500v0.scene || scope500v0.over || (scope500v2.resultTime = 1200, scope500v2.feedback = scope500v1 ? "complete" : "incomplete", scope500v2.feedbackTime = 2400);
  }
}
function scope0v142(scope503v0) {
  if (!scope503v0.scene || scope503v0.scene.time < 450 || scope503v0.scenario.story) return;
  let scope503v1 = scope503v0.scene.kind;
  if (scope503v0.scene = null, scope503v1 !== "intro") {
    if (scope503v1 === "chef-defeat" || scope503v1 === "mouth-defeat") {
      scope503v0.stage++, scope503v0.bossMaxHp = scope0v124[scope503v0.difficulty][scope503v0.stage - 1], scope503v0.bossHp = scope503v0.bossMaxHp, scope503v0.retry = 0, scope503v0.cycle = 0, scope503v0.phaseSeen = !1, scope0v134(scope503v0, 14), scope0v132(scope503v0, scope503v0.stage === 2 ? "mouth" : "abyss");
      return;
    }
    if (scope503v1 === "mouth" || scope503v1 === "abyss") {
      scope0v139(scope503v0, "bridge");
      return;
    }
    if (scope503v1 === "execution-start") {
      scope0v139(scope503v0, "execution");
      return;
    }
    if (scope503v1 === "escape-start") {
      scope0v139(scope503v0, "escape");
      return;
    }
    if (scope503v1 === "escaped") {
      if (scope503v0.scenario.single) {
        scope0v139(scope503v0, "burst");
        return;
      }
      scope0v139(scope503v0, "burst");
      return;
    }
    if (scope503v1 === "abyss-defeat") {
      scope0v132(scope503v0, "body");
      return;
    }
    if (scope503v1 === "body") {
      scope503v0.over = !0, scope503v0.won = !0, scope0v132(scope503v0, "victory", 0);
      return;
    }
    if (scope503v1 === "result") {
      if (scope503v0.scenario.single) {
        scope0v139(scope503v0, scope503v0.scenario.mode);
        return;
      }
      scope0v138(scope503v0), scope503v0.scene || scope0v140(scope503v0);
    }
  }
}
var scope0v143 = scope515v0 => ({
  hit: scope516v0 => scope0v137(scope515v0, scope516v0),
  hurt: scope517v0 => scope0v135(scope515v0, scope517v0),
  heal: scope518v0 => scope0v134(scope515v0, scope518v0),
  finish: scope519v0 => scope0v141(scope515v0, scope519v0)
});
function scope0v144(scope520v0, scope520v1, scope520v2 = !0, scope520v3 = "keyboard") {
  let scope520v4 = scope520v0.round;
  if (!scope520v2) {
    scope520v0.held.delete(scope520v1), (scope520v1 === "left" && scope520v4.horizontalDir === -1 || scope520v1 === "right" && scope520v4.horizontalDir === 1) && (scope520v4.horizontalDir = 0);
    return;
  }
  if (scope520v0.scene) {
    scope520v1 === "action" && scope0v142(scope520v0);
    return;
  }
  if (scope520v0.over || scope520v4.done || scope520v4.clock >= scope520v4.duration || scope520v0.held.has(scope520v1)) return;
  if (scope520v0.held.add(scope520v1), scope520v0.mode !== "bridge") {
    scope0v110(scope520v0, scope520v1, scope0v143(scope520v0));
    return;
  }
  let scope520v5 = scope520v0.bridge;
  scope520v5.phase === "playing" && ((scope520v1 === "left" || scope520v1 === "right") && (scope520v4.horizontalDir = scope520v1 === "left" ? -1 : 1, scope520v4.horizontalMs = 0, scope520v4.horizontalRepeating = !1, scope520v4.horizontalSource = scope520v3, scope0v49(scope520v5, scope520v4.horizontalDir * (scope520v0.curses.reverse > 0 ? -1 : 1), 0)), scope520v1 === "up" && !scope520v0.curses.norotate && scope0v50(scope520v5, 1), scope520v1 === "rotateLeft" && !scope520v0.curses.norotate && scope0v50(scope520v5, -1), scope520v1 === "action" && scope0v53(scope520v5), scope520v1 === "alt" && scope0v51(scope520v5), scope520v1 === "down" && scope0v49(scope520v5, 0, 1));
}
function scope0v145(scope526v0, scope526v1, scope526v2, scope526v3 = "start") {
  scope526v0.scene || scope526v0.over || scope526v0.round.done || scope526v0.round.clock >= scope526v0.round.duration || scope526v0.mode === "bridge" || scope0v112(scope526v0, scope526v1, scope526v2, scope526v3, scope0v143(scope526v0));
}
function scope0v146(scope528v0, scope528v1) {
  let scope528v2 = scope528v0.round,
    scope528v3 = scope528v0.bridge;
  if (scope528v3.phase === "over") {
    scope0v135(scope528v0, scope528v0.difficulty === "hard" ? 18 : 12), scope528v0.bridge = scope0v129(scope528v0.random);
    return;
  }
  if (scope528v3.phase === "resolving") {
    if (scope528v2.resolve -= scope528v1, scope528v2.resolve <= 0) {
      let scope531v0 = scope0v83(scope528v3);
      if (scope528v2.resolve = scope531v0?.type === "clear" ? 140 : 35, scope531v0?.type === "clear") {
        let scope532v0 = scope531v0.rows?.length || 1;
        if (scope0v137(scope528v0, 28 * scope532v0 + Math.min(12, (scope531v0.combo || 0) * 2)), scope0v134(scope528v0, 2 + 2 * scope532v0), scope528v0.scene || scope528v0.round !== scope528v2) return;
        for (let scope533v0 of scope531v0.cells || []) !scope0v56(scope528v3) && scope533v0.curse && scope533v0.cause !== "blast" && scope533v0.curse in scope528v0.curses && (scope528v0.curses[scope533v0.curse] = scope533v0.curse === "blind" ? 2200 : 6e3);
        let scope532v1 = [...(scope531v0.cells || []), ...(scope531v0.blasts || [])].find(scope534v0 => scope534v0.reward)?.reward;
        scope532v1 && (scope528v2.reward = scope532v1), scope528v3.pendingReward = null;
      }
      if (scope531v0?.type === "flip" && scope0v75(scope528v3), scope531v0?.type === "reward" && (scope528v2.reward = scope531v0.reward), scope528v2.reward && scope528v3.phase === "playing") {
        let scope535v0 = scope0v125.filter(scope536v0 => !scope528v0.played.includes(scope536v0));
        scope0v139(scope528v0, scope535v0[0] || scope0v125[{
          breakout: 0,
          bbtan: 1,
          pinball: 4,
          sand: 2
        }[scope528v2.reward] ?? 0]);
        return;
      }
    }
  } else if (scope528v3.active) {
    if (scope528v2.horizontalDir && scope528v0.held.has(scope528v2.horizontalDir < 0 ? "left" : "right")) {
      scope528v2.horizontalMs += scope528v1;
      let scope538v0 = scope528v2.horizontalSource === "touch" ? scope0v87.touchInterval : scope528v2.horizontalRepeating ? scope0v87.keyboardInterval : scope0v87.keyboardDelay;
      for (; scope528v2.horizontalMs >= scope538v0;) scope528v2.horizontalMs -= scope538v0, scope528v2.horizontalRepeating = !0, scope0v49(scope528v3, scope528v2.horizontalDir * (scope528v0.curses.reverse > 0 ? -1 : 1), 0), scope538v0 = scope528v2.horizontalSource === "touch" ? scope0v87.touchInterval : scope0v87.keyboardInterval;
    }
    scope528v2.fall += scope528v1;
    let scope537v0 = scope528v0.held.has("down") || scope528v0.curses.rush ? 100 : scope528v0.difficulty === "hard" ? 430 : 550;
    scope528v2.fall >= scope537v0 && (scope528v2.fall -= scope537v0, scope0v49(scope528v3, 0, 1)), scope0v43(scope528v3.grid, scope528v3.active.type, scope528v3.active.rot, scope528v3.active.x, scope528v3.active.y + 1, scope528v3) ? scope528v2.lock = 0 : (scope528v2.lock += scope528v1, scope528v2.lock >= 380 && (scope0v74(scope528v3), scope528v2.lock = 0));
  }
  scope528v0.scene || scope528v0.over || scope528v0.round !== scope528v2 || (scope0v138(scope528v0), !scope528v0.scene && scope528v2.clock >= scope528v2.duration && !scope528v2.reward && scope0v140(scope528v0));
}
function scope0v147(scope540v0, scope540v1) {
  if (scope540v1 = scope0v103(scope540v1, 0, 50), scope540v0.scene) {
    scope540v0.scene.time += scope540v1, scope540v0.scene.duration && scope540v0.scene.time >= scope540v0.scene.duration && scope0v142(scope540v0);
    return;
  }
  if (scope540v0.over) return;
  if (scope540v0.round.done) {
    let scope542v0 = scope540v0.round;
    scope0v123(scope542v0, scope540v1), scope542v0.resultTime = Math.max(0, scope542v0.resultTime - scope540v1), scope542v0.resultTime === 0 && (scope542v0.id === "escape" && scope542v0.success ? scope0v139(scope540v0, "burst") : scope540v0.scenario.single ? scope0v139(scope540v0, "bridge") : (scope0v138(scope540v0), scope540v0.scene || scope0v140(scope540v0)), scope540v0.notice = {
      success: scope542v0.success,
      id: scope542v0.id,
      time: 1800
    });
    return;
  }
  scope540v0.notice && (scope540v0.notice.time = Math.max(0, scope540v0.notice.time - scope540v1)), scope540v0.elapsed += scope540v1, scope540v0.catTime = Math.max(0, scope540v0.catTime - scope540v1), scope540v0.catDue -= scope540v1, scope540v0.catDue <= 0 && (scope540v0.catDue = 18e3, scope540v0.catTime = 2e3, scope0v134(scope540v0, 8));
  for (let scope543v0 in scope540v0.curses) scope540v0.curses[scope543v0] = Math.max(0, scope540v0.curses[scope543v0] - scope540v1);
  if (scope540v0.retry && (scope540v0.retry = Math.max(0, scope540v0.retry - scope540v1), scope540v0.retry === 0)) {
    scope0v132(scope540v0, scope540v0.stage === 2 ? "execution-start" : "escape-start");
    return;
  }
  let scope540v2 = scope540v0.round;
  if (scope540v2.clock = Math.min(scope540v2.duration, scope540v2.clock + scope540v1), scope540v0.mode === "bridge") {
    scope0v146(scope540v0, scope540v1);
    return;
  }
  scope0v116(scope540v0, scope540v1, scope0v143(scope540v0)), !(scope540v0.round !== scope540v2 || scope540v0.over || scope540v0.scene) && (scope0v138(scope540v0), !scope540v0.scene && (scope540v2.clock >= scope540v2.duration && ["match", "execution"].includes(scope540v2.id) && scope540v2.busy || scope540v2.clock >= scope540v2.duration && scope0v141(scope540v0, scope0v126.includes(scope540v2.id) || scope540v2.score >= scope540v2.target)));
}
var scope0v148 = 28,
  scope0v149 = 4,
  scope0v150 = !1,
  scope0v151 = {
    matches: !1
  };
function scope0v152(scope546v0) {
  scope0v151.matches = scope546v0;
}
var scope0v153 = {
    I: "#64d2ff",
    O: "#ffd60a",
    T: "#bf5af2",
    S: "#30d158",
    Z: "#ff453a",
    J: "#0a84ff",
    L: "#ff9f0a",
    B: "#8e8e93",
    X: "#5e5ce6",
    D: "#ff9f0a",
    R: "#ff375f",
    A: "#e7d3a1",
    F: "#ffbd2e",
    G: "#313842",
    N: "#68727d"
  },
  scope0v154 = {
    seal: "#5e5ce6",
    reverse: "#ff9f0a",
    blind: "#1d1d1f",
    rush: "#ff375f",
    norotate: "#bf5af2",
    nohold: "#8e44ad",
    garbage: "#68727d"
  };
function scope0v155() {
  return document.body.dataset.theme === "dark" ? "#f5f5f7" : "#1d1d1f";
}
function scope0v156(scope548v0, scope548v1, scope548v2) {
  return scope548v2 != null ? scope0v18[scope548v2] || scope0v18[0] : scope548v0 === "C" ? scope0v154[scope548v1] || "#3a3a3c" : scope0v153[scope548v0] || scope0v155();
}
function scope0v157(scope549v0, scope549v1, scope549v2, scope549v3, scope549v4) {
  let scope549v5 = scope549v1 * scope549v3 + scope549v3 / 2,
    scope549v6 = scope549v2 * scope549v3 + scope549v3 / 2;
  scope549v0.save(), scope549v0.strokeStyle = "#ffffff", scope549v0.fillStyle = "#ffffff", scope549v0.lineWidth = Math.max(2, scope549v3 * .08), scope549v4 === "seal" ? scope549v0.fillRect(scope549v5 - scope549v3 * .22, scope549v6 - scope549v3 * .08, scope549v3 * .44, scope549v3 * .16) : scope549v4 === "reverse" ? (scope549v0.beginPath(), scope549v0.moveTo(scope549v5 - scope549v3 * .24, scope549v6), scope549v0.lineTo(scope549v5 - scope549v3 * .08, scope549v6 - scope549v3 * .12), scope549v0.lineTo(scope549v5 - scope549v3 * .08, scope549v6 + scope549v3 * .12), scope549v0.moveTo(scope549v5 + scope549v3 * .24, scope549v6), scope549v0.lineTo(scope549v5 + scope549v3 * .08, scope549v6 - scope549v3 * .12), scope549v0.lineTo(scope549v5 + scope549v3 * .08, scope549v6 + scope549v3 * .12), scope549v0.fill()) : scope549v4 === "blind" ? (scope549v0.beginPath(), scope549v0.arc(scope549v5, scope549v6, scope549v3 * .16, 0, Math.PI * 2), scope549v0.stroke()) : scope549v4 === "rush" ? (scope549v0.beginPath(), scope549v0.moveTo(scope549v5, scope549v6 - scope549v3 * .22), scope549v0.lineTo(scope549v5 + scope549v3 * .12, scope549v6), scope549v0.lineTo(scope549v5, scope549v6 + scope549v3 * .22), scope549v0.lineTo(scope549v5 - scope549v3 * .12, scope549v6), scope549v0.fill()) : scope549v4 === "garbage" ? (scope549v0.strokeRect(scope549v5 - scope549v3 * .16, scope549v6 - scope549v3 * .12, scope549v3 * .32, scope549v3 * .32), scope549v0.beginPath(), scope549v0.moveTo(scope549v5 - scope549v3 * .22, scope549v6 - scope549v3 * .18), scope549v0.lineTo(scope549v5 + scope549v3 * .22, scope549v6 - scope549v3 * .18), scope549v0.moveTo(scope549v5 - scope549v3 * .07, scope549v6 - scope549v3 * .24), scope549v0.lineTo(scope549v5 + scope549v3 * .07, scope549v6 - scope549v3 * .24), scope549v0.stroke()) : scope549v4 === "nohold" ? (scope549v0.strokeRect(scope549v5 - scope549v3 * .2, scope549v6 - scope549v3 * .2, scope549v3 * .4, scope549v3 * .4), scope549v0.beginPath(), scope549v0.moveTo(scope549v5 - scope549v3 * .25, scope549v6 + scope549v3 * .25), scope549v0.lineTo(scope549v5 + scope549v3 * .25, scope549v6 - scope549v3 * .25), scope549v0.stroke()) : scope549v4 === "norotate" && (scope549v0.beginPath(), scope549v0.moveTo(scope549v5 - scope549v3 * .16, scope549v6 - scope549v3 * .16), scope549v0.lineTo(scope549v5 + scope549v3 * .16, scope549v6 + scope549v3 * .16), scope549v0.moveTo(scope549v5 + scope549v3 * .16, scope549v6 - scope549v3 * .16), scope549v0.lineTo(scope549v5 - scope549v3 * .16, scope549v6 + scope549v3 * .16), scope549v0.stroke()), scope549v0.restore();
}
function scope0v158(scope550v0, scope550v1, scope550v2, scope550v3, scope550v4) {
  scope550v0.beginPath(), scope550v0.roundRect(scope550v1, scope550v2, scope550v3, scope550v3, scope550v4);
}
function scope0v159(scope551v0, scope551v1) {
  let scope551v2 = parseInt(scope551v0.slice(1), 16),
    scope551v3 = scope552v0 => {
      let scope552v1 = scope551v2 >> scope552v0 & 255,
        scope552v2 = scope551v1 > 0 ? scope552v1 + (255 - scope552v1) * scope551v1 : scope552v1 * (1 + scope551v1);
      return Math.max(0, Math.min(255, Math.round(scope552v2)));
    };
  return `rgb(${scope551v3(16)}, ${scope551v3(8)}, ${scope551v3(0)})`;
}
function scope0v160(scope553v0, scope553v1, scope553v2, scope553v3, scope553v4, scope553v5) {
  let scope553v6 = scope553v3 / scope0v19,
    scope553v7 = scope0v18[scope553v4] ?? scope0v18[0];
  scope553v0.save(), scope553v0.globalAlpha = scope553v5 ? .4 : 1;
  for (let scope554v0 = 0; scope554v0 < scope0v19; scope554v0 += 1) for (let scope555v0 = 0; scope555v0 < scope0v19; scope555v0 += 1) {
    let scope556v0 = (scope555v0 * 13 + scope554v0 * 7) % 11,
      scope556v1 = scope556v0 === 0 ? scope0v159(scope553v7, .3) : scope556v0 === 1 ? scope0v159(scope553v7, -.24) : scope553v7;
    scope553v0.fillStyle = scope556v1, scope553v0.fillRect(scope553v1 * scope553v3 + scope555v0 * scope553v6, scope553v2 * scope553v3 + scope554v0 * scope553v6, scope553v6 + .8, scope553v6 + .8);
  }
  scope553v0.restore();
}
function scope0v161(scope557v0, scope557v1, scope557v2, scope557v3, scope557v4, scope557v5) {
  let scope557v6 = scope557v3 > 24 ? 1.25 : 1,
    scope557v7 = scope0v149 * (scope557v3 / scope0v148),
    scope557v8 = scope557v1 * scope557v3 + scope557v6,
    scope557v9 = scope557v2 * scope557v3 + scope557v6,
    scope557v10 = scope557v3 - scope557v6 * 2;
  if (scope0v158(scope557v0, scope557v8, scope557v9, scope557v10, scope557v7), scope557v4) {
    let scope558v0 = document.body.dataset.theme === "dark";
    scope557v0.save(), scope557v0.globalAlpha = scope557v5 ? .28 : 1, scope557v0.fillStyle = scope557v5 || (scope558v0 ? "rgba(168,199,250,.08)" : "rgba(11,87,208,.06)"), scope557v0.fill(), scope557v0.globalAlpha = 1, scope557v0.strokeStyle = scope557v5 || (scope558v0 ? "rgba(168,199,250,.8)" : "rgba(11,87,208,.55)"), scope557v0.lineWidth = 1.25, scope557v0.stroke(), scope557v0.restore();
    return;
  }
  scope557v0.fill();
}
function scope0v162(scope559v0, scope559v1, scope559v2, scope559v3, scope559v4, scope559v5 = null, scope559v6 = null, scope559v7 = null, scope559v8 = 0, scope559v9 = null, scope559v10 = !0) {
  scope559v1.forEach(([scope566v0, scope566v1], scope566v2) => {
    if (!(scope566v1 < 0 || scope566v1 >= 20 || scope566v0 < 0 || scope566v0 >= 10)) {
      if (scope559v7 != null) {
        let scope569v0 = scope0v31(scope559v2, scope559v1, scope559v7, scope559v8);
        scope0v160(scope559v0, scope566v0, scope566v1, scope559v3, scope569v0[scope566v2], scope559v4);
        return;
      }
      if (scope559v0.fillStyle = scope0v156(scope559v2, scope559v6, scope559v7), scope0v161(scope559v0, scope566v0, scope566v1, scope559v3, scope559v4, null), !scope559v4 && scope559v2 === "A") {
        scope559v0.fillStyle = "#fff6d8";
        for (let [scope571v0, scope571v1] of [[-.18, .02], [.08, -.14], [.12, .12]]) scope559v0.fillRect(scope566v0 * scope559v3 + scope559v3 / 2 + scope571v0 * scope559v3, scope566v1 * scope559v3 + scope559v3 / 2 + scope571v1 * scope559v3, Math.max(2, scope559v3 * .12), Math.max(2, scope559v3 * .12));
      }
      !scope559v4 && scope559v6 && scope559v2 !== "G" && scope0v157(scope559v0, scope566v0, scope566v1, scope559v3, scope559v6), !scope559v4 && scope566v2 === scope559v5 && (scope559v2 === "B" || scope559v2 === "X") && (scope559v0.fillStyle = scope559v2 === "B" ? "#1d1d1f" : "#ffffff", scope559v0.beginPath(), scope559v0.arc(scope566v0 * scope559v3 + scope559v3 / 2, scope566v1 * scope559v3 + scope559v3 / 2, Math.max(2.5, scope559v3 * .12), 0, Math.PI * 2), scope559v0.fill());
    }
  }), !scope559v4 && scope559v7 == null && scope559v2 === "G" && (scope0v163(scope559v0, scope559v1, scope559v3), scope559v6 && scope559v1.forEach(([scope572v0, scope572v1], scope572v2) => {
    scope572v2 === scope559v9 && scope0v157(scope559v0, scope572v0, scope572v1, scope559v3, scope559v6);
  })), !scope559v4 && scope559v7 == null && scope559v2 === "F" && scope559v10 && scope0v164(scope559v0, scope559v1, scope559v3);
}
function scope0v163(scope574v0, scope574v1, scope574v2) {
  if (scope574v1.length < 4) return;
  let scope574v3 = ([scope575v0, scope575v1]) => scope574v1.filter(([scope577v0, scope577v1]) => Math.abs(scope577v0 - scope575v0) + Math.abs(scope577v1 - scope575v1) === 1).length,
    scope574v4 = scope574v1.reduce((scope579v0, scope579v1) => scope574v3(scope579v1) < scope574v3(scope579v0) ? scope579v1 : scope579v0),
    scope574v5 = (Math.min(...scope574v1.map(([scope580v0]) => scope580v0)) + Math.max(...scope574v1.map(([scope582v0]) => scope582v0)) + 1) * scope574v2 / 2,
    scope574v6 = (Math.min(...scope574v1.map(([, scope584v0]) => scope584v0)) + Math.max(...scope574v1.map(([, scope586v0]) => scope586v0)) + 1) * scope574v2 / 2;
  scope574v0.save(), scope574v0.beginPath(), scope574v1.forEach(([scope588v0, scope588v1]) => scope574v0.rect(scope588v0 * scope574v2 + 1, scope588v1 * scope574v2 + 1, scope574v2 - 2, scope574v2 - 2)), scope574v0.clip(), scope574v0.translate(scope574v5, scope574v6), scope574v0.rotate(Math.atan2((scope574v4[1] + .5) * scope574v2 - scope574v6, (scope574v4[0] + .5) * scope574v2 - scope574v5) + Math.PI / 2);
  let scope574v7 = scope574v0.createLinearGradient(-scope574v2, 0, scope574v2, scope574v2);
  scope574v7.addColorStop(0, "#737d8a"), scope574v7.addColorStop(.35, "#222a34"), scope574v7.addColorStop(1, "#080d14"), scope574v0.fillStyle = scope574v7, scope574v0.beginPath(), scope574v0.moveTo(-scope574v2 * .24, -scope574v2 * .55), scope574v0.bezierCurveTo(-scope574v2 * 1.5, -scope574v2 * .2, -scope574v2 * 1.4, scope574v2 * 1.35, -scope574v2 * .75, scope574v2 * 1.38), scope574v0.lineTo(scope574v2 * .75, scope574v2 * 1.38), scope574v0.bezierCurveTo(scope574v2 * 1.4, scope574v2 * 1.35, scope574v2 * 1.5, -scope574v2 * .2, scope574v2 * .24, -scope574v2 * .55), scope574v0.closePath(), scope574v0.fill(), scope574v0.strokeStyle = "#a9b4c3", scope574v0.lineWidth = Math.max(1, scope574v2 * .04), scope574v0.stroke(), scope574v0.beginPath(), scope574v0.moveTo(-scope574v2 * .22, -scope574v2 * .68), scope574v0.lineTo(scope574v2 * .22, -scope574v2 * .68), scope574v0.moveTo(0, -scope574v2 * .66), scope574v0.lineTo(-scope574v2 * .3, -scope574v2 * 1.12), scope574v0.lineTo(scope574v2 * .3, -scope574v2 * 1.12), scope574v0.closePath(), scope574v0.stroke(), scope574v0.restore();
}
function scope0v164(scope590v0, scope590v1, scope590v2) {
  if (!scope590v1.length) return;
  let scope590v3 = Math.min(...scope590v1.map(([scope591v0]) => scope591v0)) * scope590v2,
    scope590v4 = Math.min(...scope590v1.map(([, scope593v0]) => scope593v0)) * scope590v2,
    scope590v5 = (Math.max(...scope590v1.map(([scope595v0]) => scope595v0)) + 1) * scope590v2 - scope590v3,
    scope590v6 = (Math.max(...scope590v1.map(([, scope597v0]) => scope597v0)) + 1) * scope590v2 - scope590v4,
    scope590v7 = scope0v150 || scope0v151.matches ? 0 : performance.now();
  scope590v0.save(), scope590v0.beginPath(), scope590v1.forEach(([scope599v0, scope599v1]) => scope590v0.rect(scope599v0 * scope590v2 + 1, scope599v1 * scope590v2 + 1, scope590v2 - 2, scope590v2 - 2)), scope590v0.clip();
  let scope590v8 = scope590v3 - scope590v5 + scope590v7 % 1500 / 1500 * scope590v5 * 3,
    scope590v9 = scope590v0.createLinearGradient(scope590v8 - scope590v2, scope590v4, scope590v8 + scope590v2, scope590v4 + scope590v6);
  scope590v9.addColorStop(0, "rgba(255, 235, 160, 0)"), scope590v9.addColorStop(.5, "rgba(255, 250, 210, .55)"), scope590v9.addColorStop(1, "rgba(255, 235, 160, 0)"), scope590v0.fillStyle = scope590v9, scope590v0.fillRect(scope590v3, scope590v4, scope590v5, scope590v6), scope590v0.strokeStyle = "#ffe19c", scope590v0.shadowColor = "#ff9f0a", scope590v0.shadowBlur = 12, scope590v0.lineWidth = Math.max(1, scope590v2 * .045), scope590v1.forEach(([scope601v0, scope601v1]) => scope590v0.strokeRect(scope601v0 * scope590v2 + 2, scope601v1 * scope590v2 + 2, scope590v2 - 4, scope590v2 - 4)), scope590v0.restore(), scope590v0.save();
  let scope590v10 = Math.min(scope590v5, scope590v6) * .75,
    scope590v11 = scope590v3 + scope590v5 / 2,
    scope590v12 = scope590v4 + scope590v6 / 2;
  scope590v0.translate(scope590v11, scope590v12), scope590v0.rotate(-.12), scope590v0.font = `400 ${Math.round(scope590v10)}px "Fever Brush", "KaiTi", "STKaiti", serif`, scope590v0.textAlign = "center", scope590v0.textBaseline = "middle", scope590v0.lineJoin = "round", scope590v0.strokeStyle = "#5a2200", scope590v0.lineWidth = Math.max(2, scope590v10 * .07), scope590v0.strokeText("\u7279", 0, 0), scope590v0.fillStyle = "#fff3b0", scope590v0.shadowColor = "#ff9f0a", scope590v0.shadowBlur = 10, scope590v0.fillText("\u7279", 0, 0), scope590v0.restore();
}
function scope0v165(scope603v0, scope603v1, scope603v2, scope603v3) {
  let scope603v4 = new Set(),
    scope603v5 = new Map();
  for (let scope604v0 = 0; scope604v0 < 20; scope604v0 += 1) for (let scope605v0 = 0; scope605v0 < 10; scope605v0 += 1) {
    let scope606v0 = scope603v1[scope604v0][scope605v0];
    if (!scope606v0 || scope603v2.has(scope606v0.g) || scope603v4.has(scope606v0.g)) continue;
    scope603v4.add(scope606v0.g);
    let scope606v1 = [];
    for (let scope607v0 = 0; scope607v0 < 20; scope607v0 += 1) for (let scope608v0 = 0; scope608v0 < 10; scope608v0 += 1) scope603v1[scope607v0][scope608v0]?.g === scope606v0.g && scope606v1.push([scope608v0, scope607v0]);
    if (scope0v162(scope603v0, scope606v1, scope606v0.type, scope603v3, !1, null, scope606v0.type === "G" ? null : scope606v0.curse, scope606v0.sand ?? null, 0, null, !1), scope606v0.type === "F" && scope606v0.sand == null) {
      let scope609v0 = scope606v0.feverId ?? scope606v0.g;
      scope603v5.has(scope609v0) || scope603v5.set(scope609v0, []), scope603v5.get(scope609v0).push(...scope606v1);
    }
  }
  for (let scope610v0 of scope603v5.values()) scope0v164(scope603v0, scope610v0, scope603v3);
  scope603v0.fillStyle = "#dfff45";
  for (let scope611v0 = 0; scope611v0 < 20; scope611v0 += 1) for (let scope612v0 = 0; scope612v0 < 10; scope612v0 += 1) {
    let scope613v0 = scope603v1[scope611v0][scope612v0];
    !scope613v0 || scope603v2.has(scope613v0.g) || (scope613v0.type === "G" && scope613v0.curse && scope0v157(scope603v0, scope612v0, scope611v0, scope603v3, scope613v0.curse), !(!scope613v0.bomb && scope613v0.reward !== "bbtan") && (scope603v0.fillStyle = scope613v0.bomb ? "#1d1d1f" : "#ffffff", scope603v0.beginPath(), scope603v0.arc(scope612v0 * scope603v3 + scope603v3 / 2, scope611v0 * scope603v3 + scope603v3 / 2, Math.max(3, scope603v3 * .16), 0, Math.PI * 2), scope603v0.fill()));
  }
}
function scope0v166(scope614v0, scope614v1, scope614v2 = !1) {
  scope0v162(scope614v0, scope0v41(scope614v1.type, scope614v1.rot, scope614v1.x, scope614v1.y), scope614v1.type, scope0v148, scope614v2, scope614v1.bombIndex, scope614v1.curse, scope614v1.sand ?? null, scope614v1.rot, scope614v1.curseIndex);
}
var scope0v167 = Object.freeze({
  ink: "#140c25",
  glass: "#372247",
  gold: "#d6b36e",
  light: "#fff0c6",
  heart: "#ff5178"
});
var scope0v168 = [".XX.XX.", "XXXXXXX", "XXXXXXX", ".XXXXX.", "..XXX..", "...X..."];
function scope0v169(scope616v0, scope616v1, scope616v2, scope616v3 = "#ff5178", scope616v4 = 1) {
  scope616v0.save(), scope616v0.globalAlpha = scope616v4, scope616v0.fillStyle = scope616v3, scope0v168.forEach((scope619v0, scope619v1) => [...scope619v0].forEach((scope620v0, scope620v1) => {
    scope620v0 === "X" && scope616v0.fillRect(Math.round(scope616v1 - 7 + scope620v1 * 2), Math.round(scope616v2 - 6 + scope619v1 * 2), 2, 2);
  })), scope616v0.restore();
}
var scope0v170 = (scope621v0, scope621v1, scope621v2, scope621v3, scope621v4, scope621v5) => {
  scope621v0.fillStyle = scope621v5, scope621v0.fillRect(Math.round(scope621v1), Math.round(scope621v2), scope621v3, scope621v4);
};
function scope0v171(scope622v0, scope622v1, scope622v2) {
  scope622v0.fillStyle = scope622v2, scope622v0.beginPath(), scope622v1.forEach(([scope623v0, scope623v1], scope623v2) => scope622v0[scope623v2 ? "lineTo" : "moveTo"](scope623v0, scope623v1)), scope622v0.closePath(), scope622v0.fill();
}
function scope0v172(scope625v0, scope625v1, scope625v2, scope625v3 = 0, scope625v4 = 12) {
  scope625v0.save(), scope625v0.translate(Math.round(scope625v1), Math.round(scope625v2)), scope625v0.scale(scope625v4 / 12, scope625v4 / 12);
  let scope625v5 = ["#ed687f", "#f5cc67", "#b898f0", "#ef954f", "#76d8a6"][scope625v3 % 5];
  if (scope625v3 % 5 === 0 && (scope0v170(scope625v0, -8, -7, 16, 16, "#813340"), scope0v170(scope625v0, -10, -4, 20, 10, scope625v5), scope0v170(scope625v0, -7, -8, 14, 15, scope625v5), scope0v170(scope625v0, -5, -6, 4, 4, "#ffd1b0"), scope0v170(scope625v0, 0, -11, 3, 5, "#976950"), scope0v170(scope625v0, 3, -11, 6, 3, "#7add9b")), scope625v3 % 5 === 1 && (scope0v171(scope625v0, [[-10, -2], [-7, -7], [6, -7], [11, -1], [8, 6], [-7, 6]], "#a88732"), scope0v171(scope625v0, [[-9, -1], [-5, -5], [6, -5], [9, 0], [6, 4], [-6, 4]], scope625v5), scope0v170(scope625v0, -3, -4, 8, 2, "#fff1b2")), scope625v3 % 5 === 2) {
    for (let [scope629v0, scope629v1] of [[-4, -6], [4, -6], [-8, 1], [0, 1], [8, 1], [-4, 8], [4, 8], [0, 14]]) scope0v170(scope625v0, scope629v0 - 3, scope629v1 - 3, 6, 6, scope625v5), scope0v170(scope625v0, scope629v0 - 2, scope629v1 - 2, 2, 2, "#f0d6ff");
    scope0v170(scope625v0, -1, -14, 3, 6, "#63bba7");
  }
  if (scope625v3 % 5 === 3 && (scope0v170(scope625v0, -9, -7, 18, 14, scope625v5), scope0v170(scope625v0, -6, -10, 12, 20, scope625v5), scope0v170(scope625v0, -5, -7, 4, 4, "#ffcf8e"), scope0v170(scope625v0, -1, -13, 3, 4, "#739c55"), scope0v170(scope625v0, 3, -13, 6, 3, "#8ad795")), scope625v3 % 5 === 4) {
    scope0v171(scope625v0, [[-10, -7], [10, -7], [8, 4], [0, 12], [-8, 4]], scope625v5), scope0v170(scope625v0, -10, -10, 20, 4, "#95eead");
    for (let [scope631v0, scope631v1] of [[-4, -3], [3, -2], [0, 5]]) scope0v170(scope625v0, scope631v0, scope631v1, 2, 3, "#234955");
  }
  scope625v0.restore();
}
function scope0v173(scope632v0, scope632v1, scope632v2, scope632v3, scope632v4, scope632v5 = !0) {
  for (let scope634v0 = 0; scope634v0 < scope632v4; scope634v0++) {
    let scope635v0 = scope632v1 + scope634v0 * scope632v3 / scope632v4;
    scope0v170(scope632v0, scope635v0, scope632v2, scope632v3 / scope632v4 - 3, scope632v5 ? 8 : 6, "#96774f"), scope0v170(scope632v0, scope635v0 + 1, scope632v2 + (scope632v5 ? 0 : -3), scope632v3 / scope632v4 - 6, 8, "#fff0ce");
  }
}
function scope0v174(scope636v0, scope636v1) {
  if (scope636v0.clearRect(0, 0, 560, scope636v0.canvas.height), scope636v1.scene) return;
  let scope636v2 = scope636v0.canvas.height,
    scope636v3 = scope0v131(scope636v1),
    scope636v4 = scope636v3 === 5 ? "#793b38" : "#a65e3b",
    scope636v5 = scope636v3 === 5 ? "#64acb4" : "#e7ba73";
  for (let scope637v0 of [-1, 1]) {
    scope636v0.save(), scope636v0.translate(280, 0), scope636v0.scale(scope637v0, 1), scope0v171(scope636v0, [[80, 104], [138, 122], [165, 205], [166, scope636v2 - 110], [138, scope636v2 - 48], [140, scope636v2 - 30], [118, scope636v2 - 25], [112, 210], [86, 174]], scope636v3 < 3 ? "#182d43" : scope636v4), scope0v171(scope636v0, [[105, 122], [132, 136], [148, 216], [144, scope636v2 - 122], [126, scope636v2 - 81], [124, 230]], scope636v3 < 3 ? "#31516a" : "#bd8759"), scope0v170(scope636v0, 126, 310, 19, 64, scope636v3 < 3 ? "#dbb487" : "#dda46b");
    for (let scope639v0 = 0; scope639v0 < 4; scope639v0++) scope0v170(scope636v0, 116 + scope639v0 * 7, 318 + scope639v0 * 4, 7, 27, scope636v3 < 3 ? "#f5d7a7" : "#f0c487");
    scope0v170(scope636v0, 132, 140, 8, 80, scope636v5);
    for (let scope640v0 = 242; scope640v0 < scope636v2 - 100; scope640v0 += 41) scope0v170(scope636v0, 132, scope640v0, 5, 17, scope636v5), scope0v170(scope636v0, 140, scope640v0 + 5, 7, 3, "#532e25");
    scope636v0.restore();
  }
  if (scope0v170(scope636v0, 134, scope636v2 - 28, 292, 8, "#573827"), scope0v170(scope636v0, 140, scope636v2 - 28, 280, 3, scope636v5), scope636v0.save(), scope636v0.translate(280, 0), scope636v0.scale(1, scope636v3 < 3 ? .78 : .86), scope636v3 < 3) {
    let scope641v0 = scope636v3 === 2 ? 86 : 72;
    scope0v171(scope636v0, [[-scope641v0 + 8, 46], [-scope641v0, 58], [-scope641v0, 86], [-scope641v0 + 15, 101], [scope641v0 - 15, 101], [scope641v0, 86], [scope641v0, 58], [scope641v0 - 8, 46]], "#6c3930"), scope0v171(scope636v0, [[-scope641v0 + 10, 43], [-scope641v0 + 2, 58], [-scope641v0 + 9, 86], [-scope641v0 + 24, 99], [scope641v0 - 24, 99], [scope641v0 - 9, 86], [scope641v0 - 2, 58], [scope641v0 - 10, 43]], "#dba478"), scope0v170(scope636v0, -scope641v0 + 16, 47, scope641v0 * 2 - 32, 10, "#f3c799"), scope0v170(scope636v0, -55, 53, 32, scope636v3 === 2 ? 4 : 6, "#512b2a"), scope0v170(scope636v0, 23, 53, 32, scope636v3 === 2 ? 4 : 6, "#512b2a"), scope0v170(scope636v0, -47, 59, 14, 4, "#f6ead0"), scope0v170(scope636v0, 34, 59, 14, 4, "#f6ead0"), scope0v170(scope636v0, -7, 61, 14, 9, "#a5543b"), scope0v171(scope636v0, [[-scope641v0 + 21, 73], [scope641v0 - 21, 73], [scope641v0 - 30, 92], [-scope641v0 + 30, 92]], "#321d23"), scope0v173(scope636v0, -scope641v0 + 25, 73, scope641v0 * 2 - 50, scope636v3 === 2 ? 10 : 8), scope0v170(scope636v0, -21, 86, 42, 5, scope636v3 === 2 ? "#cf6966" : "#b95650"), scope0v171(scope636v0, [[-57, 35], [-68, 28], [-68, 15], [-54, 7], [-32, 9], [-26, 2], [4, 2], [12, 8], [39, 5], [62, 13], [66, 26], [56, 35]], "#d0bfa4"), scope0v170(scope636v0, -53, 16, 106, 18, "#eee2c6"), scope0v170(scope636v0, -55, 34, 110, 11, "#bbaa8d"), scope0v170(scope636v0, -54, 35, 108, 5, "#fff2d3");
    for (let scope642v0 of [-35, -8, 20]) scope0v170(scope636v0, scope642v0, 13, 4, 15, "#b1a28e");
    scope0v171(scope636v0, [[-28, 101], [0, 109], [28, 101], [38, 107], [8, 117], [-8, 117], [-38, 107]], "#b45139"), scope636v3 === 2 && (scope0v170(scope636v0, -64, 65, 8, 5, "#a96650"), scope0v170(scope636v0, 57, 65, 8, 5, "#a96650"));
  } else if (scope636v3 < 5) {
    let scope643v0 = scope636v3 === 4 ? 101 : 85;
    scope0v171(scope636v0, [[-scope643v0 + 17, 15], [scope643v0 - 17, 15], [scope643v0, 31], [scope643v0, 88], [scope643v0 - 24, 104], [-scope643v0 + 24, 104], [-scope643v0, 88], [-scope643v0, 31]], "#53332b"), scope0v171(scope636v0, [[-scope643v0 + 20, 19], [scope643v0 - 20, 19], [scope643v0 - 7, 35], [scope643v0 - 7, 82], [scope643v0 - 23, 99], [-scope643v0 + 23, 99], [-scope643v0 + 7, 82], [-scope643v0 + 7, 35]], scope636v4), scope0v170(scope636v0, -scope643v0 + 21, 36, scope643v0 * 2 - 42, 47, "#161e26"), scope0v173(scope636v0, -scope643v0 + 23, 34, scope643v0 * 2 - 46, scope636v3 === 4 ? 12 : 9), scope0v173(scope636v0, -scope643v0 + 23, 78, scope643v0 * 2 - 46, scope636v3 === 4 ? 10 : 8, !1), scope0v170(scope636v0, -scope643v0 + 28, 85, scope643v0 * 2 - 56, 5, "#cf8261");
    for (let scope644v0 = 0; scope644v0 < 8; scope644v0++) scope0v170(scope636v0, -scope643v0 + 24 + scope644v0 * 20, 22 + scope644v0 % 2 * 3, 9, 4, "#d39c66");
    scope636v3 === 4 && (scope0v171(scope636v0, [[-56, 18], [-44, 33], [-54, 45], [-38, 55]], "#302a2a"), scope0v171(scope636v0, [[61, 59], [46, 73], [56, 86], [42, 100]], "#302a2a"), scope0v170(scope636v0, -28, 39, 12, 3, "#52b9c1"), scope0v170(scope636v0, 19, 51, 22, 3, "#52b9c1"));
  } else {
    for (let scope646v0 = 0; scope646v0 < 4; scope646v0++) {
      let scope647v0 = 104 - scope646v0 * 22,
        scope647v1 = 5 + scope646v0 * 11;
      scope0v171(scope636v0, [[-scope647v0 + 16, scope647v1], [scope647v0 - 16, scope647v1], [scope647v0, scope647v1 + 12], [scope647v0, 95 - scope646v0 * 8], [scope647v0 - 15, 106 - scope646v0 * 7], [-scope647v0 + 15, 106 - scope646v0 * 7], [-scope647v0, 95 - scope646v0 * 8], [-scope647v0, scope647v1 + 12]], scope646v0 % 2 ? "#874b3e" : "#392d32"), scope0v173(scope636v0, -scope647v0 + 18, scope647v1 + 10, scope647v0 * 2 - 36, Math.max(3, 12 - scope646v0 * 3));
    }
    scope0v170(scope636v0, -25, 45, 50, 25, "#091d29"), scope0v170(scope636v0, -16, 55, 32, 4, "#41a6b2");
  }
  scope636v0.restore();
}
var scope0v175 = scope648v0 => scope648v0?.mode === "bridge" ? 720 : 600,
  scope0v176 = {
    bridge: ["#13212d", "#182e40", "#dfb67b"],
    snake: ["#123033", "#204744", "#a2e6bb"],
    match: ["#182941", "#21395a", "#8ed6ec"],
    execution: ["#2e213b", "#493251", "#e6b875"],
    merge: ["#352922", "#544131", "#ffd590"],
    rope: ["#223443", "#314e61", "#aaddf5"],
    slice: ["#39272b", "#59323a", "#f6a99b"],
    gravity: ["#172e3c", "#234454", "#8ae3df"],
    ricochet: ["#332939", "#49384e", "#d9b6fb"],
    floor: ["#2d3029", "#424b36", "#cbdf95"],
    escape: ["#292e40", "#394958", "#97e8ed"],
    burst: ["#312b3c", "#493546", "#ffb28b"]
  };
function scope0v177(scope649v0) {
  let scope649v1 = scope0v176[scope649v0?.mode] || scope0v176.bridge;
  return {
    base: scope649v1[0],
    field: scope649v1[1],
    accent: scope649v1[2]
  };
}
function scope0v178(scope650v0, scope650v1, scope650v2, scope650v3, scope650v4 = 12, scope650v5 = "#f5dfb4", scope650v6 = 252) {
  scope650v0.fillStyle = scope650v5, scope650v0.font = `${scope650v4}px "Pixel Latin", "Pixel Hant",sans-serif`, scope650v0.textAlign = "center", scope650v0.fillText(scope650v1, scope650v2, scope650v3, scope650v6);
}
var scope0v179 = (scope654v0, scope654v1, scope654v2, scope654v3, scope654v4, scope654v5) => {
    scope654v0.fillStyle = scope654v5, scope654v0.fillRect(scope654v1, scope654v2, scope654v3, scope654v4);
  },
  scope0v180 = (scope655v0, scope655v1, scope655v2, scope655v3 = 1) => {
    scope655v0.save(), scope655v0.translate(scope655v1, scope655v2), scope655v0.scale(scope655v3, scope655v3), scope0v169(scope655v0, 0, 0, "#ff5178", 1), scope655v0.restore();
  },
  scope0v181 = (scope657v0, scope657v1) => scope657v1[scope657v0 === "zh-Hant" ? 0 : 1],
  scope0v182 = {
    snake: ["\u5403\u679C\u52A0\u5206\uFF1B\u7A7F\u908A\uFF0C\u907F\u958B\u81EA\u5DF1\uFF0C\u73A9\u5230\u6642\u9593\u5B8C", "Eat for score; wrap edges, avoid your tail"],
    match: ["\u76F8\u9130\u4EA4\u63DB\uFF1B\u4E09\u500B\u540C\u6B3E\u624D\u6709\u6548", "Swap neighbors; match three alike"],
    execution: ["\u6B65\u6578\u5167\u6536\u860B\u679C\u4E26\u6E05\u679C\u51CD\uFF1B\u56DB\u9023\u9020\u7279\u7CD6", "Collect apples + jelly; match four for specials"],
    merge: ["\u5408\u51FA\u897F\u74DC\u624D\u5B8C\u6210\uFF1B\u5DE6\u53F3\u7784\u6E96\u3001\u7A7A\u767D\u843D\u679C", "Make a watermelon; aim, Space drops"],
    rope: ["\u5DE6\u53F3\u9078\u7E69\uFF0C\u7A7A\u767D\u5272\uFF1BC \u91CD\u64FA", "Select \u2190 \u2192, Space cuts; C resets"],
    slice: ["\u62D6\u66F3\u5207\u679C\u907F\u70B8\u5F48\uFF1B\u65B9\u5411\uFF0B\u7A7A\u767D\u5207", "Swipe fruit, avoid bombs; arrows + Space"],
    gravity: ["\u53CD\u5411\u8DD1\uFF1B\u8FD1\u684C\u817F\u7A7A\u767D\u6293\u4F4F\uFF0CC \u653E\u624B", "Run away; Space grips post, C releases"],
    ricochet: ["\u907F\u958B\u53CD\u5F48\u788E\u5C51\uFF1B\u8FD1\u91D1\u7CD6\u7A7A\u767D\u53CD\u653B", "Dodge bouncing scraps; counter near candy"],
    floor: ["\u907F\u7D05\u8272\u5543\u54AC\uFF1B\u4E2D\u8DEF\u6C38\u9060\u9023\u901A", "Avoid red bites; center stays connected"],
    escape: ["\u5DE6\u53F3\u63DB\u9053\uFF0C\u7A7A\u767D\u8DF3\uFF0CC \u6ED1\u884C\uFF1B\u53EF\u6ED1\u52D5", "Change lanes; Space jumps, C slides; swipe"],
    burst: ["\u907F\u788E\u5C51\uFF1B\u5DE8\u53E3\u5F35\u958B\u6642\u8FD1\u91D1\u7CD6\u53CD\u653B", "Dodge; counter near gold candy when open"]
  },
  scope0v183 = {
    "snake-bonus": ["\u5DF2\u9054\u6A19 \xB7 \u6642\u9593\u5167\u7E7C\u7E8C\u52A0\u5206", "Goal reached \xB7 Keep scoring until time ends"],
    complete: ["\u6311\u6230\u5B8C\u6210 \xB7 \u8FD4\u56DE\u6230\u9B25", "Complete \xB7 Returning to battle"],
    incomplete: ["\u672A\u5B8C\u6210 \xB7 \u8FD4\u56DE\u6230\u9B25", "Incomplete \xB7 Returning to battle"],
    success: ["\u6210\u529F\u53CD\u653B", "Counter landed"],
    invalid: ["\u9808\u4EA4\u63DB\u76F8\u9130\u4E14\u9023\u6210\u4E09\u500B", "Make a line of three with neighbors"],
    reshuffle: ["\u7121\u89E3\u76E4\u9762\u91CD\u65B0\u6D17\u724C", "No moves \u2014 board reshuffled"],
    merge: ["\u5408\u6210\u6210\u529F", "Fruit merged"],
    cut: ["\u7E69\u5DF2\u5272\u65B7", "Rope cut"],
    miss: ["\u98DF\u7CD6\u843D\u7A7A \xB7 C \u91CD\u64FA", "Candy missed \xB7 C resets"],
    bomb: ["\u70B8\u5F48\u53D7\u64CA", "Bomb hit"],
    counter: ["\u53CD\u653B\u547D\u4E2D", "Counter hit"],
    hit: ["\u53D7\u64CA", "Hit"]
  };
function scope0v184(scope658v0, scope658v1, {
  lang: scope658v2 = "en",
  reduced: scope658v3 = !1
} = {}) {
  let scope658v4 = scope0v175(scope658v1),
    scope658v5 = scope658v1.round,
    scope658v6 = scope0v177(scope658v1),
    scope658v7 = scope658v2 === "zh-Hant";
  scope658v0.clearRect(0, 0, 280, scope658v4), scope0v179(scope658v0, 0, 108, 280, scope658v4 - 108, scope658v6.base);
  let scope658v8 = scope658v1.stage === 1 ? scope0v181(scope658v2, ["\u7121\u98FD\u5EDA\u5E2B", "Ravenous chef"]) : scope658v1.stage === 2 ? scope0v181(scope658v2, ["\u566C\u5BB4\u5DE8\u53E3", "Feasting maw"]) : scope0v181(scope658v2, ["\u6DF1\u6DF5\u5DE8\u53E3", "Abyss maw"]);
  scope0v178(scope658v0, "BOSS \xB7 " + scope658v8, 140, 110, 13), scope0v179(scope658v0, 24, 120, 232, 6, "#3c4248"), scope0v179(scope658v0, 24, 120, 232 * scope658v1.bossHp / scope658v1.bossMaxHp, 6, "#e0b077");
  let scope658v9 = scope658v1.bossHp <= scope0v136(scope658v1) + .01 && scope0v136(scope658v1) > 0 ? scope0v181(scope658v2, ["\u9396\u8840 \xB7 \u5B8C\u6210\u6311\u6230", "SEALED \xB7 Complete the challenge"]) : scope658v1.stage === 1 ? scope0v181(scope658v2, [`\u76DB\u5BB4 ${scope658v1.played.length}/5`, `Feast ${scope658v1.played.length}/5`]) : scope658v1.retry ? scope0v181(scope658v2, ["\u6311\u6230\u7A0D\u5F8C\u91CD\u8A66", "Trial will return soon"]) : "";
  if (scope0v178(scope658v0, scope658v1.notice?.time > 0 ? scope0v181(scope658v2, scope658v1.notice.success ? ["\u53CD\u653B\u6210\u529F", "Counter successful"] : ["\u672A\u5B8C\u6210 \xB7 \u53EF\u91CD\u8A66", "Incomplete \xB7 Retry available"]) : scope658v9, 140, 143, 10, "#bddeea"), scope658v5.id === "bridge") {
    scope0v152(scope658v3), scope0v179(scope658v0, 10, 150, 260, 516, "#7c634e"), scope0v179(scope658v0, 12, 152, 256, 512, "#131b26"), scope658v0.save(), scope658v0.translate(12, 152), scope658v0.scale(256 / 280, 256 / 280), scope658v1.curses.blind || scope0v165(scope658v0, scope658v1.bridge.grid, new Set(), 28), scope658v1.bridge.active && scope658v1.bridge.phase === "playing" && (scope0v166(scope658v0, {
      ...scope658v1.bridge.active,
      y: scope0v52(scope658v1.bridge)
    }, !0), scope0v166(scope658v0, scope658v1.bridge.active)), scope658v0.restore(), scope0v178(scope658v0, scope658v7 ? "\u7559" : "HOLD", 40, 37, 10, "#ffe2ad", 58), scope0v178(scope658v0, scope658v7 ? "\u4E0B\u4E00\u500B" : "NEXT", 240, 37, 10, "#ffe2ad", 58);
    let scope660v0 = (scope661v0, scope661v1, scope661v2) => {
      if (!scope661v0) return;
      let scope661v3 = scope0v41(scope661v0.type, 0, 0, 0);
      scope658v0.save(), scope658v0.translate(scope661v1, scope661v2), scope658v0.scale(6 / 28, 6 / 28), scope0v166(scope658v0, {
        ...scope661v0,
        rot: 0,
        x: -Math.min(...scope661v3.map(scope662v0 => scope662v0[0])),
        y: -Math.min(...scope661v3.map(scope663v0 => scope663v0[1]))
      }), scope658v0.restore();
    };
    scope660v0(scope658v1.bridge.hold, 26, 53), scope658v1.bridge.queue.slice(0, 3).forEach((scope664v0, scope664v1) => scope660v0(scope664v0, 226, 49 + scope664v1 * 21));
  } else {
    scope0v179(scope658v0, 12, 152, 256, 340, scope658v6.field), scope0v179(scope658v0, 12, 152, 256, 3, scope658v6.accent);
    let scope665v0 = ["match", "execution"].includes(scope658v5.id);
    scope0v178(scope658v0, scope0v181(scope658v2, scope0v127[scope658v5.id]), 140, scope665v0 ? 164 : 171, 13, scope658v6.accent);
    let scope665v1 = scope658v5.id === "snake" ? scope0v181(scope658v2, [`\u5F97\u5206 ${scope658v5.score} \xB7 \u76EE\u6A19 ${scope658v5.target}`, `Score ${scope658v5.score} \xB7 Goal ${scope658v5.target}`]) : `${scope658v5.score}/${scope658v5.target}`;
    scope665v0 ? scope658v5.id === "execution" ? (scope665v1 = scope0v181(scope658v2, [`\u860B\u679C ${scope658v5.collected}/${scope658v5.target} \xB7 \u679C\u51CD ${scope658v5.jellyCleared}/${scope658v5.jellyTarget}`, `Apples ${scope658v5.collected}/${scope658v5.target} \xB7 Jelly ${scope658v5.jellyCleared}/${scope658v5.jellyTarget}`]), scope0v178(scope658v0, scope665v1, 140, 180, 11, "#f1e4ce"), scope665v1 = scope0v181(scope658v2, [`\u5269\u9918 ${scope658v5.moves} \u6B65`, `${scope658v5.moves} moves left`])) : scope665v1 = `${scope658v5.score}/${scope658v5.target} \xB7 ${scope658v5.moves}${scope658v7 ? "\u6B65" : " moves"}` : scope658v5.id === "merge" ? scope665v1 = scope0v181(scope658v2, [scope658v5.watermelon ? "\u897F\u74DC\u5408\u6210\u6210\u529F" : "\u76EE\u6A19\uFF1A\u5408\u51FA\u897F\u74DC", scope658v5.watermelon ? "Watermelon made" : "Goal: make a watermelon"]) + (scope658v5.watermelon ? "" : " \xB7 C " + (scope658v5.swaps ? "\u25C6".repeat(scope658v5.swaps) : "\u2014")) : scope658v5.id === "escape" ? scope665v1 = `${Math.floor(scope658v5.distance)}%` : ["gravity", "ricochet", "floor", "burst"].includes(scope658v5.id) && (scope665v1 = scope658v5.id === "burst" ? scope0v181(scope658v2, [scope658v5.burstOpen ? "\u5DE8\u53E3\u5F35\u958B \xB7 \u53CD\u653B" : "\u7B49\u5F85\u5DE8\u53E3\u5F35\u958B", scope658v5.burstOpen ? "Maw open \xB7 Counter" : "Wait for the maw to open"]) : scope0v181(scope658v2, ["\u5B58\u6D3B\u4E26\u53CD\u653B", "Survive and counter"])), scope0v178(scope658v0, scope665v1 + (Number.isFinite(scope658v5.duration) && scope658v5.id !== "ricochet" ? ` \xB7 ${Math.max(0, Math.ceil((scope658v5.duration - scope658v5.clock) / 1e3))}s` : ""), 140, scope665v0 ? 197 : 190, 11, "#f1e4ce"), scope0v185(scope658v0, scope658v1, scope658v2, scope658v3), scope0v178(scope658v0, scope0v181(scope658v2, scope0v182[scope658v5.id]), 140, 513, 10, "#c9e0e6"), scope658v5.feedbackTime > 0 ? scope0v178(scope658v0, scope658v5.feedback === "chain" ? scope0v181(scope658v2, [`\u9023\u9396 \xD7${scope658v5.chain}`, `Cascade \xD7${scope658v5.chain}`]) : scope0v181(scope658v2, scope0v183[scope658v5.feedback] || ["", ""]), 140, 535, 11, scope658v6.accent) : scope658v5.id === "snake" && scope658v5.score >= scope658v5.target && !scope658v5.done && scope0v178(scope658v0, scope0v181(scope658v2, ["\u5DF2\u9054\u6A19 \xB7 \u7E7C\u7E8C\u52A0\u5206", "Goal reached \xB7 Keep scoring"]), 140, 535, 11, scope658v6.accent);
  }
  scope0v178(scope658v0, `HP ${Math.ceil(scope658v1.hp)}/${scope658v1.maxHp}`, 140, scope658v4 - 38, 12, "#ffbdcf"), scope0v179(scope658v0, 24, scope658v4 - 25, 232, 6, "#4b3341"), scope0v179(scope658v0, 24, scope658v4 - 25, 232 * scope658v1.hp / scope658v1.maxHp, 6, "#ff5178"), scope658v1.hp <= 25 && scope0v178(scope658v0, "WARNING", 140, scope658v4 - 10, 10, "#ff697d");
}
function scope0v185(scope666v0, scope666v1, scope666v2, scope666v3) {
  let scope666v4 = scope666v1.round,
    scope666v5 = scope666v2 === "zh-Hant";
  if (scope666v0.save(), scope666v0.beginPath(), scope666v0.rect(20, 202, 240, 285), scope666v0.clip(), scope666v4.id === "snake") {
    scope0v179(scope666v0, 30, 204, 220, 276, "#112e31");
    for (let scope668v0 = 0; scope668v0 < 15; scope668v0++) for (let scope669v0 = 0; scope669v0 < 12; scope669v0++) scope0v179(scope666v0, 32 + scope669v0 * 18, 207 + scope668v0 * 18, 17, 17, (scope669v0 + scope668v0) % 2 ? "#183b3a" : "#1a3e3c");
    scope666v4.snake.forEach(([scope670v0, scope670v1], scope670v2) => {
      scope670v2 === 0 ? scope0v180(scope666v0, 40 + scope670v0 * 18, 215 + scope670v1 * 18, .8) : (scope0v179(scope666v0, 33 + scope670v0 * 18, 208 + scope670v1 * 18, 15, 15, "#66c9b0"), scope0v179(scope666v0, 36 + scope670v0 * 18, 211 + scope670v1 * 18, 7, 4, "#b6f2c2"));
    }), scope666v4.food && scope0v172(scope666v0, 40 + scope666v4.food[0] * 18, 215 + scope666v4.food[1] * 18, 0, 9);
  }
  if (["match", "execution"].includes(scope666v4.id) && scope0v195(scope666v0, scope666v4, scope666v3), scope666v4.id === "merge") {
    scope0v179(scope666v0, 24, 239, 232, 240, "#211f27");
    for (let scope673v0 of scope666v4.fruits) scope0v187(scope666v0, scope673v0);
    scope666v0.strokeStyle = scope666v4.topTime ? "#ff657a" : "#e7b485", scope666v0.setLineDash([5, 4]), scope666v0.beginPath(), scope666v0.moveTo(25, 238), scope666v0.lineTo(255, 238), scope666v0.stroke(), scope666v0.setLineDash([]), scope0v187(scope666v0, {
      x: scope666v4.aim,
      y: 219,
      level: scope666v4.next
    }), scope666v0.strokeStyle = "#d9c99d", scope666v0.beginPath(), scope666v0.moveTo(scope666v4.aim, 236), scope666v0.lineTo(scope666v4.aim, 257), scope666v0.stroke();
  }
  if (scope666v4.id === "rope") {
    scope0v179(scope666v0, 24, 206, 232, 274, "#182d3d"), scope666v4.wall && (scope0v179(scope666v0, scope666v4.wall.x, scope666v4.wall.y, scope666v4.wall.w, scope666v4.wall.h, "#d65c6b"), scope0v179(scope666v0, scope666v4.wall.x + 4, scope666v4.wall.y + 2, scope666v4.wall.w - 8, 3, "#f89b8e"));
    for (let scope675v0 = 0; scope675v0 < scope666v4.ropes.length; scope675v0++) {
      let scope676v0 = scope666v4.ropes[scope675v0];
      scope676v0.cut || (scope666v0.strokeStyle = scope675v0 === scope666v4.selected ? "#ffe38b" : "#a6bfd0", scope666v0.lineWidth = scope675v0 === scope666v4.selected ? 3 : 2, scope666v0.beginPath(), scope666v0.moveTo(scope676v0.x, scope676v0.y), scope666v0.lineTo(scope666v4.candy.x, scope666v4.candy.y), scope666v0.stroke(), scope0v179(scope666v0, scope676v0.x - 5, scope676v0.y - 5, 10, 10, "#b18261"), scope0v178(scope666v0, String(scope675v0 + 1), scope676v0.x, scope676v0.y + 17, 10));
    }
    for (let scope677v0 of scope666v4.stars) scope677v0.taken || scope0v178(scope666v0, "\u2605", scope677v0.x, scope677v0.y, 20, "#f5db85");
    scope0v172(scope666v0, scope666v4.candy.x, scope666v4.candy.y, 1, 10), scope0v179(scope666v0, scope666v4.receiver.x - 23, scope666v4.receiver.y - 8, 46, 24, "#47aab4"), scope0v179(scope666v0, scope666v4.receiver.x - 19, scope666v4.receiver.y - 4, 38, 11, "#0d2733");
    for (let scope678v0 = 0; scope678v0 < 5; scope678v0++) scope0v179(scope666v0, scope666v4.receiver.x - 16 + scope678v0 * 7, scope666v4.receiver.y - 5, 4, 4, "#f9e2ab");
    scope0v180(scope666v0, scope666v4.receiver.x, scope666v4.receiver.y + 22, .45);
  }
  if (scope666v4.id === "slice") {
    scope0v179(scope666v0, 24, 205, 232, 277, "#34262d");
    for (let scope680v0 of scope666v4.objects) scope680v0.hit || (scope680v0.bomb ? (scope666v0.fillStyle = "#182638", scope666v0.beginPath(), scope666v0.arc(scope680v0.x, scope680v0.y, 12, 0, Math.PI * 2), scope666v0.fill(), scope0v178(scope666v0, "!", scope680v0.x, scope680v0.y + 5, 14, "#ffb38d"), scope0v179(scope666v0, scope680v0.x + 2, scope680v0.y - 18, 3, 8, "#ffd398")) : scope0v172(scope666v0, scope680v0.x, scope680v0.y, scope680v0.type, 12));
    for (let scope681v0 of scope666v4.sliceEffects) if (!(scope666v3 && scope681v0.kind !== "half")) {
      if (scope666v0.save(), scope666v0.globalAlpha = Math.min(1, (scope681v0.life - scope681v0.age) / 180), scope666v0.translate(scope681v0.x, scope681v0.y), scope666v0.rotate(scope681v0.angle), scope681v0.kind === "half") {
        scope666v0.save(), scope666v0.beginPath(), scope666v0.rect(-scope681v0.r - 3, scope681v0.side > 0 ? 0 : -scope681v0.r - 3, scope681v0.r * 2 + 6, scope681v0.r + 3), scope666v0.clip(), scope0v172(scope666v0, 0, 0, scope681v0.type, scope681v0.r), scope666v0.restore(), scope666v0.fillStyle = ["#ffe0bb", "#fff2b2", "#edcbff", "#ffd9a2", "#ff8799"][scope681v0.type % 5], scope666v0.beginPath(), scope666v0.ellipse(0, 0, scope681v0.r * .82, 3, 0, 0, Math.PI * 2), scope666v0.fill();
        for (let scope684v0 of [-4, 0, 4]) scope0v179(scope666v0, scope684v0, -1, 2, 2, "#76424c");
      } else scope0v179(scope666v0, -2, -2, scope681v0.kind === "juice" ? 3 : 4, 3, scope681v0.color);
      scope666v0.restore();
    }
    for (let scope685v0 of scope666v4.slashes) {
      let scope686v0 = 1 - scope685v0.age / 210;
      scope666v0.globalAlpha = scope686v0, scope666v0.strokeStyle = "#66d8ef", scope666v0.lineWidth = scope666v3 ? 2 : 7, scope666v0.beginPath(), scope666v0.moveTo(scope685v0.a.x, scope685v0.a.y), scope666v0.lineTo(scope685v0.b.x, scope685v0.b.y), scope666v0.stroke(), scope666v0.strokeStyle = "#fff7d7", scope666v0.lineWidth = 2, scope666v0.stroke();
    }
    scope666v0.globalAlpha = 1, scope666v0.strokeStyle = "#fff0c5", scope666v0.lineWidth = 2, scope666v0.beginPath(), scope666v4.trail.forEach((scope687v0, scope687v1) => scope666v0[scope687v1 ? "lineTo" : "moveTo"](scope687v0.x, scope687v0.y)), scope666v0.stroke(), scope666v0.strokeStyle = "#a4dcf2", scope666v0.lineWidth = 1, scope666v0.strokeRect(scope666v4.cursor.x - 17, scope666v4.cursor.y - 17, 34, 34);
  }
  if (scope666v4.id === "gravity") {
    scope0v179(scope666v0, 24, 232, 232, 247, "#182f3a"), scope0v186(scope666v0, 140, 226, scope666v4.pulling ? 38 : 25);
    for (let scope689v0 of scope666v4.anchors) scope0v179(scope666v0, scope689v0.x - 8, scope689v0.y - 31, 16, 58, "#8f7152"), scope0v179(scope666v0, scope689v0.x - 5, scope689v0.y - 29, 4, 54, "#c9a273"), scope666v4.anchor === scope689v0 && (scope666v0.strokeStyle = "#ffe5a7", scope666v0.strokeRect(scope689v0.x - 12, scope689v0.y - 34, 24, 62));
    if (scope666v4.pulling) {
      scope666v0.strokeStyle = "#91dee7", scope666v0.lineWidth = 2;
      for (let scope691v0 = 0; scope691v0 < 4; scope691v0++) {
        let scope692v0 = 45 + scope691v0 * 62;
        scope666v0.beginPath(), scope666v0.moveTo(scope692v0, 351), scope666v0.lineTo(140 + (scope692v0 - 140) * .5, 284), scope666v0.stroke();
      }
    }
    scope0v180(scope666v0, scope666v4.x, scope666v4.y, .8), scope0v178(scope666v0, scope666v5 ? scope666v4.anchor ? "\u5DF2\u6293\u4F4F" : "\u6293\u684C\u817F\u62B5\u6297" : scope666v4.anchor ? "GRIPPED" : "GRIP A TABLE LEG", 140, 472, 9, "#d8eadb");
  }
  if (["ricochet", "floor", "burst"].includes(scope666v4.id)) {
    if (scope0v179(scope666v0, 24, 235, 232, 246, "#242835"), scope666v4.id === "floor") {
      for (let scope695v0 = 0; scope695v0 < 5; scope695v0++) for (let scope696v0 = 0; scope696v0 < 5; scope696v0++) scope0v179(scope666v0, 30 + scope696v0 * 44, 244 + scope695v0 * 44, 40, 40, "#536447"), scope0v179(scope666v0, 32 + scope696v0 * 44, 246 + scope695v0 * 44, 36, 2, "#829365");
      for (let scope697v0 of scope666v4.floor) if (scope0v179(scope666v0, scope697v0.x, scope697v0.y, 40, 40, scope697v0.active ? "#0a1724" : "#78444a"), !scope697v0.active) scope666v0.strokeStyle = "#ff7980", scope666v0.lineWidth = 3, scope666v0.strokeRect(scope697v0.x + 2, scope697v0.y + 2, 36, 36), scope0v178(scope666v0, "!", scope697v0.x + 20, scope697v0.y + 25, 18, "#ffcfaa");else for (let scope698v0 = 0; scope698v0 < 3; scope698v0++) scope0v179(scope666v0, scope697v0.x + scope698v0 * 13 + 2, scope697v0.y + 2, 8, 4, "#decaa8");
    } else {
      scope0v186(scope666v0, 140, 228, scope666v4.id === "burst" && scope666v4.burstOpen ? 34 : 24);
      for (let scope700v0 of scope666v4.objects) scope0v172(scope666v0, scope700v0.x, scope700v0.y, scope700v0.type, 9);
    }
    scope666v4.counter.ready && (scope0v172(scope666v0, scope666v4.counter.x, scope666v4.counter.y, 1, 13), scope666v0.strokeStyle = "#ffdf87", scope666v0.lineWidth = 2, scope666v0.strokeRect(scope666v4.counter.x - 17, scope666v4.counter.y - 16, 34, 32), scope0v178(scope666v0, "\u2197", scope666v4.counter.x, scope666v4.counter.y - 23, 12, "#ffedb1")), scope0v180(scope666v0, scope666v4.x, scope666v4.y, .8);
  }
  scope666v4.id === "escape" && scope0v191(scope666v0, scope666v4, scope666v5, scope666v3), scope666v0.restore();
}
function scope0v186(scope701v0, scope701v1, scope701v2, scope701v3) {
  scope0v179(scope701v0, scope701v1 - scope701v3, scope701v2 - 10, scope701v3 * 2, 28, "#7b4a3b"), scope0v179(scope701v0, scope701v1 - scope701v3 + 6, scope701v2 - 7, scope701v3 * 2 - 12, 20, "#13232e");
  for (let scope702v0 = 0; scope702v0 < 5; scope702v0++) scope0v179(scope701v0, scope701v1 - scope701v3 + 8 + scope702v0 * (scope701v3 * 2 - 16) / 5, scope701v2 - 7, 6, 5, "#f4e4c5");
}
function scope0v187(scope703v0, scope703v1) {
  let scope703v2 = scope0v104[scope703v1.level];
  if (scope703v0.fillStyle = "#101d27", scope703v0.beginPath(), scope703v0.arc(scope703v1.x, scope703v1.y, scope703v2.r + 1, 0, Math.PI * 2), scope703v0.fill(), scope703v0.fillStyle = scope703v2.color, scope703v0.beginPath(), scope703v0.arc(scope703v1.x, scope703v1.y, scope703v2.r, 0, Math.PI * 2), scope703v0.fill(), scope0v179(scope703v0, scope703v1.x - scope703v2.r * .45, scope703v1.y - scope703v2.r * .5, Math.max(3, scope703v2.r * .4), Math.max(3, scope703v2.r * .2), "#ffecbe"), scope703v1.level === 7) {
    scope703v0.strokeStyle = "#277865", scope703v0.lineWidth = 3;
    for (let scope705v0 = -1; scope705v0 <= 1; scope705v0++) scope703v0.beginPath(), scope703v0.ellipse(scope703v1.x + scope705v0 * scope703v2.r * .4, scope703v1.y, scope703v2.r * .2, scope703v2.r * .9, 0, 0, Math.PI * 2), scope703v0.stroke();
  } else scope0v179(scope703v0, scope703v1.x - 1, scope703v1.y - scope703v2.r - 3, 3, 5, "#638c5a");
}
var scope0v188 = {
  intro: ["\u6C38\u9060\u5403\u4E0D\u98FD", "Never enough", "intro", "\u4ED6\u5690\u904E\u6BCF\u4E00\u9053\u83DC\uFF0C\u537B\u5F9E\u672A\u5690\u5230\u6EFF\u8DB3\u3002", "He tasted every dish, but never satisfaction."],
  "chef-defeat": ["\u76DB\u5BB4\u6563\u76E1", "The feast crumbles", "chef-defeat", "\u7A7A\u865B\u541E\u6389\u4E86\u5EDA\u5E2B\u7684\u5F62\u9AD4\u3002", "Emptiness devours the chef\u2019s form."],
  mouth: ["\u566C\u5BB4\u5DE8\u53E3", "The feasting maw", "mouth", "\u9910\u684C\u4E5F\u6210\u4E86\u4E0B\u4E00\u9053\u83DC\u3002", "Even the table becomes another serving."],
  "mouth-defeat": ["\u5DE8\u53E3\u5D29\u88C2", "The maw breaks", "mouth-defeat", "\u8D8A\u5403\u8D8A\u5927\uFF0C\u4ECD\u7136\u98E2\u9913\u3002", "Growing larger, still hungry."],
  abyss: ["\u6DF1\u6DF5\u5DE8\u53E3", "The abyss opens", "abyss", "\u7A7A\u865B\u958B\u59CB\u541E\u566C\u6574\u500B\u76DB\u5BB4\u3002", "Emptiness consumes the whole feast."],
  "execution-start": ["\u6700\u5F8C\u4E00\u9910", "Last serving", "mouth", "\u6B65\u6578\u5167\u6536\u860B\u679C\u3001\u6E05\u679C\u51CD\uFF1B\u5931\u6557\u6263 80 HP\u3002", "Collect apples and clear jelly within the moves. Failure costs 80 HP."],
  "escape-start": ["\u9003\u51FA\u98DF\u9053", "Escape the gullet", "abyss", "\u63DB\u9053\u3001\u8DF3\u8E8D\u3001\u6ED1\u884C\uFF0C\u5728\u5DE8\u53E3\u9589\u5408\u524D\u8DD1\u51FA\u53BB\u3002", "Change lanes, jump and slide before the maw closes."],
  escaped: ["\u51FA\u53E3\u5DF2\u958B", "The exit opens", "abyss", "\u5DE8\u53E3\u4ECD\u672A\u5012\u4E0B\uFF0C\u6293\u4F4F\u6700\u5F8C\u53CD\u653B\u7A97\u53E3\u3002", "The maw still lives. Counter its final outburst."],
  "abyss-defeat": ["\u6DF1\u6DF5\u6C89\u5BC2", "The abyss falls silent", "abyss-defeat", "\u5DE8\u53E3\u771F\u6B63\u5D29\u6F70\uFF0C\u672C\u9AD4\u7D42\u65BC\u73FE\u8EAB\u3002", "The maw is destroyed. Its true body emerges."],
  body: ["\u586B\u4E0D\u6EFF\u7684\u7A7A\u865B", "An emptiness unfilled", "body", "\u672A\u6D88\u5316\u7684\u98DF\u7269\u586B\u6EFF\u80C3\uFF0C\u537B\u586B\u4E0D\u6EFF\u7A7A\u865B\u3002", "Undigested food fills the stomach, but not the void."],
  victory: ["\u6253\u6557\u66B4\u98DF", "Gluttony defeated", "victory", "\u4ED6\u771F\u6B63\u60F3\u5403\u7684\uFF0C\u662F\u6EFF\u8DB3\u611F\u3002", "What he truly craved was satisfaction."],
  lost: ["\u88AB\u98E2\u9913\u541E\u6C92", "Consumed by hunger", "lost", "\u76DB\u5BB4\u6C92\u6709\u76E1\u982D\u3002", "The feast has no end."]
};
function scope0v189(scope706v0, scope706v1) {
  let scope706v2 = 1 / (1 + Math.max(0, scope706v0) / 20);
  return {
    x: 140 + (scope706v1 - 1) * 65 * scope706v2,
    y: 220 + 217 * scope706v2,
    scale: scope706v2
  };
}
function scope0v190(scope707v0, scope707v1, scope707v2) {
  scope707v0.fillStyle = scope707v2, scope707v0.beginPath(), scope707v1.forEach(([scope708v0, scope708v1], scope708v2) => scope707v0[scope708v2 ? "lineTo" : "moveTo"](scope708v0, scope708v1)), scope707v0.closePath(), scope707v0.fill();
}
function scope0v191(scope710v0, scope710v1, scope710v2, scope710v3) {
  scope0v179(scope710v0, 24, 204, 232, 278, "#14242e"), scope0v190(scope710v0, [[112, 220], [168, 220], [250, 482], [30, 482]], "#574047"), scope0v190(scope710v0, [[24, 204], [111, 220], [29, 482], [24, 482]], "#613b40"), scope0v190(scope710v0, [[169, 220], [256, 204], [256, 482], [251, 482]], "#613b40");
  for (let scope711v0 = 0; scope711v0 < 9; scope711v0++) {
    let scope712v0 = scope711v0 * 15 + (1e3 - scope710v1.distance * 10) % 15,
      scope712v1 = scope0v189(scope712v0, 0),
      scope712v2 = scope0v189(scope712v0, 2),
      scope712v3 = 18 * scope712v1.scale;
    scope710v0.strokeStyle = scope711v0 % 2 ? "#9e6560" : "#bc8272", scope710v0.lineWidth = Math.max(2, 4 * scope712v1.scale), scope710v0.beginPath(), scope710v0.moveTo(scope712v1.x - scope712v3, scope712v1.y), scope710v0.lineTo(scope712v1.x - scope712v3 * 2, scope712v1.y - 8 * scope712v1.scale), scope710v0.moveTo(scope712v2.x + scope712v3, scope712v2.y), scope710v0.lineTo(scope712v2.x + scope712v3 * 2, scope712v2.y - 8 * scope712v2.scale), scope710v0.stroke();
  }
  for (let scope713v0 of [.5, 1.5]) {
    let scope714v0 = scope0v189(140, scope713v0),
      scope714v1 = scope0v189(-1, scope713v0);
    scope710v0.strokeStyle = "#c69b79", scope710v0.lineWidth = 2, scope710v0.beginPath(), scope710v0.moveTo(scope714v0.x, scope714v0.y), scope710v0.lineTo(scope714v1.x, 480), scope710v0.stroke();
  }
  for (let scope715v0 = 0; scope715v0 < 14; scope715v0++) {
    let scope716v0 = scope715v0 * 10 + (1e3 - scope710v1.distance * 10) % 10,
      scope716v1 = scope0v189(scope716v0, 1),
      scope716v2 = 99 * scope716v1.scale;
    scope710v0.strokeStyle = "#725659", scope710v0.lineWidth = Math.max(1, 2 * scope716v1.scale), scope710v0.beginPath(), scope710v0.moveTo(scope716v1.x - scope716v2, scope716v1.y), scope710v0.lineTo(scope716v1.x + scope716v2, scope716v1.y), scope710v0.stroke();
  }
  let scope710v4 = scope710v1.distance > 85 ? 12 + (scope710v1.distance - 85) * 2 : 12;
  scope0v179(scope710v0, 140 - scope710v4 / 2, 208, scope710v4, 13, "#91dfd2");
  for (let scope717v0 of [...scope710v1.obstacles].sort((scope718v0, scope718v1) => scope718v1.z - scope718v0.z)) {
    let scope719v0 = scope0v189(scope717v0.z, scope717v0.lane),
      scope719v1 = 46 * scope719v0.scale,
      scope719v2 = 26 * scope719v0.scale;
    scope717v0.kind === "pit" ? (scope0v190(scope710v0, [[scope719v0.x - scope719v1 / 2, scope719v0.y], [scope719v0.x + scope719v1 / 2, scope719v0.y], [scope719v0.x + scope719v1 * .6, scope719v0.y + scope719v2 * .5], [scope719v0.x - scope719v1 * .6, scope719v0.y + scope719v2 * .5]], "#07131e"), scope710v0.strokeStyle = "#ec918a", scope710v0.lineWidth = 2, scope710v0.strokeRect(scope719v0.x - scope719v1 / 2, scope719v0.y, scope719v1, scope719v2 * .4)) : scope717v0.kind === "beam" ? (scope0v179(scope710v0, scope719v0.x - scope719v1 / 2, scope719v0.y - scope719v2 * 2, scope719v1, scope719v2 * .45, "#dba06f"), scope0v179(scope710v0, scope719v0.x - scope719v1 / 2, scope719v0.y - scope719v2 * 1.6, 4 * scope719v0.scale, scope719v2 * 1.6, "#bb795b"), scope0v179(scope710v0, scope719v0.x + scope719v1 / 2 - 4 * scope719v0.scale, scope719v0.y - scope719v2 * 1.6, 4 * scope719v0.scale, scope719v2 * 1.6, "#bb795b"), scope719v0.scale > .35 && scope0v178(scope710v0, "\u2193", scope719v0.x, scope719v0.y - scope719v2, 14 * scope719v0.scale + 4, "#8de8e8")) : (scope0v179(scope710v0, scope719v0.x - scope719v1 / 2, scope719v0.y - scope719v2, scope719v1, scope719v2, "#bf8059"), scope0v179(scope710v0, scope719v0.x - scope719v1 / 2 + 2, scope719v0.y - scope719v2, scope719v1 - 4, 3 * scope719v0.scale, "#f1c88e"), scope0v172(scope710v0, scope719v0.x, scope719v0.y - scope719v2 * .5, 3, Math.max(3, 13 * scope719v0.scale))), scope717v0.z < 38 && !scope717v0.hit && scope717v0.kind !== "beam" && scope0v178(scope710v0, "\u2191", scope719v0.x, scope719v0.y - scope719v2 - 5, 14, "#ffdd8c");
  }
  let scope710v5 = scope0v189(0, scope710v1.lanePosition).x;
  if (scope0v179(scope710v0, scope710v5 - 9, 443, 18, 3, "#161e26"), scope710v0.save(), scope710v0.translate(scope710v5, scope710v1.y), scope710v1.slide > 0 && scope710v0.scale(1.25, .55), scope0v180(scope710v0, 0, 0, 1), scope710v0.restore(), !scope710v3) {
    let scope720v0 = Math.sin(scope710v1.clock / 75) * 4;
    scope710v0.strokeStyle = "#ffd0d7", scope710v0.lineWidth = 2, scope710v0.beginPath(), scope710v0.moveTo(scope710v5 - 5, 448), scope710v0.lineTo(scope710v5 - 8, 454 + scope720v0), scope710v0.moveTo(scope710v5 + 5, 448), scope710v0.lineTo(scope710v5 + 8, 454 - scope720v0), scope710v0.stroke();
  }
  scope710v1.slide > 0 && scope0v178(scope710v0, scope710v2 ? "\u6ED1\u884C" : "SLIDING", 140, 477, 10, "#a3edf2");
}
var scope0v192 = scope721v0 => ({
    x: 43 + scope721v0 % 6 * 38,
    y: 221 + Math.floor(scope721v0 / 6) * 38
  }),
  scope0v193 = scope722v0 => scope722v0 * scope722v0 * (3 - 2 * scope722v0);
function scope0v194(scope723v0, scope723v1, scope723v2, scope723v3, scope723v4, scope723v5 = 1, scope723v6 = 1) {
  if (scope723v3 != null) {
    if (scope723v0.save(), scope723v0.globalAlpha = scope723v6, scope723v0.translate(scope723v1, scope723v2), scope723v0.scale(scope723v5, scope723v5), scope0v172(scope723v0, 0, 0, scope723v3, 10), scope723v4 === "row" || scope723v4 === "column") {
      scope723v0.strokeStyle = "#fff0bd", scope723v0.lineWidth = 2;
      for (let scope728v0 = -1; scope728v0 <= 1; scope728v0++) scope723v0.beginPath(), scope723v4 === "row" ? (scope723v0.moveTo(-10, scope728v0 * 5), scope723v0.lineTo(11, scope728v0 * 5)) : (scope723v0.moveTo(scope728v0 * 5, -10), scope723v0.lineTo(scope728v0 * 5, 10)), scope723v0.stroke();
    }
    if (scope723v4 === "wrapped" && (scope723v0.strokeStyle = "#ffe5a3", scope723v0.lineWidth = 2, scope723v0.strokeRect(-11, -11, 23, 23), scope0v179(scope723v0, -2, -12, 4, 26, "#fff1cb")), scope723v4 === "rainbow") {
      scope723v0.fillStyle = "#4b303b", scope723v0.beginPath(), scope723v0.arc(0, 0, 12, 0, Math.PI * 2), scope723v0.fill();
      for (let scope730v0 = 0; scope730v0 < 6; scope730v0++) scope0v179(scope723v0, -2 + Math.cos(scope730v0 * Math.PI / 3) * 7, -2 + Math.sin(scope730v0 * Math.PI / 3) * 7, 4, 4, ["#fa7186", "#f5d275", "#9bbdfa", "#c699ed", "#8ed8a1", "#fff0c9"][scope730v0]);
    }
    scope723v0.restore();
  }
}
function scope0v195(scope731v0, scope731v1, scope731v2) {
  let scope731v3 = scope731v1.animState,
    scope731v4 = Math.min(1, (scope731v1.animTime || 0) / (scope731v1.animDuration || 1)),
    scope731v5 = scope731v1.swapTween;
  for (let scope732v0 = 0; scope732v0 < scope731v1.board.length; scope732v0++) {
    let {
      x: scope733v0,
      y: scope733v1
    } = scope0v192(scope732v0);
    scope0v179(scope731v0, scope733v0 - 17, scope733v1 - 17, 35, 35, (Math.floor(scope732v0 / 6) + scope732v0 % 6) % 2 ? "#1c324c" : "#213b53"), scope731v1.jellies[scope732v0] && (scope0v179(scope731v0, scope733v0 - 15, scope733v1 - 15, 31, 31, "#596caf"), scope731v0.strokeStyle = "#c4c6ff", scope731v0.lineWidth = 2, scope731v0.strokeRect(scope733v0 - 14, scope733v1 - 14, 29, 29), scope0v179(scope731v0, scope733v0 - 12, scope733v1 - 12, 5, 3, "#e2e5ff"));
  }
  scope731v0.save(), scope731v0.beginPath(), scope731v0.rect(26, 204, 228, 266), scope731v0.clip();
  for (let scope734v0 = 0; scope734v0 < scope731v1.board.length; scope734v0++) {
    if (scope731v5 && (scope734v0 === scope731v5.a || scope734v0 === scope731v5.b)) continue;
    let scope735v0 = scope0v192(scope734v0),
      scope735v1 = scope731v3 === "clear" && scope731v1.match.includes(scope734v0),
      scope735v2 = 1,
      scope735v3 = 1,
      scope735v4 = scope735v0.y;
    scope731v3 === "fall" && !scope731v2 && (scope735v4 += scope731v1.falling[scope734v0] || 0), scope735v1 && (scope731v2 ? scope735v3 = .55 : (scope735v2 = 1 + Math.sin(scope731v4 * Math.PI) * .16 - scope731v4 * .7, scope735v3 = 1 - scope731v4 * .85)), scope731v3 === "shuffle" && !scope731v2 && (scope735v3 = .4 + .6 * scope731v4), scope0v194(scope731v0, scope735v0.x, scope735v4, scope731v1.board[scope734v0], scope731v1.specials[scope734v0], scope735v2, scope735v3), scope735v1 && (scope731v0.strokeStyle = "#ffe3a1", scope731v0.lineWidth = 2, scope731v0.globalAlpha = scope731v2 ? 1 : 1 - scope731v4 * .7, scope731v0.strokeRect(scope735v0.x - 14, scope735v0.y - 14, 28, 28), scope731v0.globalAlpha = 1);
  }
  if (scope731v5) {
    let scope736v0 = scope0v192(scope731v5.a),
      scope736v1 = scope0v192(scope731v5.b),
      scope736v2 = scope731v5.valid ? scope0v193(scope731v4) : scope731v4 < .5 ? scope0v193(scope731v4 * 2) : 1 - scope0v193((scope731v4 - .5) * 2);
    scope731v2 && (scope736v2 = scope731v5.valid ? 1 : 0);
    for (let scope737v0 = 0; scope737v0 < 2; scope737v0++) {
      let scope738v0 = scope737v0 ? scope736v0 : scope736v1,
        scope738v1 = scope737v0 ? scope736v1 : scope736v0,
        scope738v2 = scope731v5.original[1 - scope737v0];
      scope0v194(scope731v0, scope738v0.x + (scope738v1.x - scope738v0.x) * scope736v2, scope738v0.y + (scope738v1.y - scope738v0.y) * scope736v2, scope738v2.type, scope738v2.special);
    }
  }
  if (scope731v3 === "clear") {
    let scope739v0 = scope731v2 ? .7 : Math.sin(scope731v4 * Math.PI) * .7;
    for (let scope740v0 of scope731v1.activated || []) {
      let scope741v0 = scope0v192(scope740v0),
        scope741v1 = scope731v1.specials[scope740v0];
      if (scope731v0.save(), scope731v0.globalAlpha = scope739v0, scope731v0.strokeStyle = "#ffe6a8", scope731v0.lineWidth = scope731v2 ? 2 : 4, (scope741v1 === "row" || scope741v1 === "column") && (scope731v0.beginPath(), scope731v0.moveTo(scope741v1 === "row" ? 26 : scope741v0.x, scope741v1 === "row" ? scope741v0.y : 204), scope731v0.lineTo(scope741v1 === "row" ? 254 : scope741v0.x, scope741v1 === "row" ? scope741v0.y : 470), scope731v0.stroke()), scope741v1 === "wrapped" && scope731v0.strokeRect(scope741v0.x - 30, scope741v0.y - 30, 60, 60), scope741v1 === "rainbow") for (let scope742v0 of scope731v1.match.slice(0, 14)) {
        let scope743v0 = scope0v192(scope742v0);
        scope731v0.beginPath(), scope731v0.moveTo(scope741v0.x, scope741v0.y), scope731v0.lineTo(scope743v0.x, scope743v0.y), scope731v0.stroke();
      }
      scope731v0.restore();
    }
  }
  if (!scope731v2 && scope731v1.clearAge < 300) {
    let scope744v0 = scope731v1.clearAge / 300;
    scope731v0.save(), scope731v0.globalAlpha = 1 - scope744v0;
    for (let scope745v0 of scope731v1.clearEffects || []) {
      let scope746v0 = scope0v192(scope745v0.i),
        scope746v1 = ["#f29cae", "#ffdf88", "#d8b5ff", "#ffc086", "#a9ebc3"][scope745v0.type];
      for (let scope747v0 = 0; scope747v0 < 3; scope747v0++) {
        let scope748v0 = scope747v0 * Math.PI * 2 / 3;
        scope0v179(scope731v0, scope746v0.x + Math.cos(scope748v0) * (3 + scope744v0 * 14) - 1, scope746v0.y + Math.sin(scope748v0) * (3 + scope744v0 * 14) - scope744v0 * 8 - 1, 3, 3, scope746v1);
      }
    }
    scope731v0.restore();
  }
  scope731v0.restore();
  let scope731v6 = (scope749v0, scope749v1) => {
    let scope749v2 = scope0v192(scope749v0);
    scope731v0.strokeStyle = scope749v1, scope731v0.lineWidth = 2, scope731v0.strokeRect(scope749v2.x - 16, scope749v2.y - 16, 33, 33), scope731v0.strokeRect(scope749v2.x - 13, scope749v2.y - 13, 27, 27);
  };
  scope731v1.busy || (scope731v6(scope731v1.cursor, "#d6edf7"), scope731v1.chosen !== null && scope731v6(scope731v1.chosen, "#ffe084"));
}
var scope0v196,
  scope0v197 = 0,
  scope0v198 = 0,
  scope0v199 = 0,
  scope0v200 = 0,
  scope0v201 = "idle";
function scope0v202(scope750v0, scope750v1, scope750v2, {
  reduced: scope750v3 = !1
} = {}) {
  if (!scope750v1.complete || !scope750v1.naturalWidth) return;
  scope0v196 !== scope750v2 && (scope0v196 = scope750v2, scope0v197 = scope750v2.stats.damage, scope0v198 = scope750v2.stats.damageTaken, scope0v199 = scope750v2.round.score, scope0v200 = 0);
  let scope750v4 = scope750v2.elapsed;
  scope750v2.stats.damageTaken > scope0v198 ? (scope0v201 = "hurt", scope0v200 = scope750v4 + 650) : scope750v2.stats.damage > scope0v197 ? (scope0v201 = "attack", scope0v200 = scope750v4 + 700) : scope750v2.round.score > scope0v199 && (scope0v201 = "victory", scope0v200 = scope750v4 + 650), scope0v197 = scope750v2.stats.damage, scope0v198 = scope750v2.stats.damageTaken, scope0v199 = scope750v2.round.score;
  let scope750v5 = scope750v2.catTime > 0 ? "victory" : scope750v4 < scope0v200 ? scope0v201 : scope750v4 % 9e3 > 7600 ? "attack" : "idle",
    scope750v6 = scope750v0.getBoundingClientRect(),
    scope750v7 = Math.min(2, devicePixelRatio || 1);
  (scope750v0.width !== Math.round(scope750v6.width * scope750v7) || scope750v0.height !== Math.round(scope750v6.height * scope750v7)) && (scope750v0.width = Math.round(scope750v6.width * scope750v7), scope750v0.height = Math.round(scope750v6.height * scope750v7));
  let scope750v8 = scope750v0.getContext("2d"),
    scope750v9 = scope750v6.width - 6,
    scope750v10 = scope750v9 * scope750v1.naturalHeight / scope750v1.naturalWidth;
  scope750v8.setTransform(scope750v7, 0, 0, scope750v7, 0, 0), scope750v8.clearRect(0, 0, scope750v6.width, scope750v6.height);
  let scope750v11 = scope750v3 ? 0 : Math.sin(scope750v4 / 420);
  if (scope750v8.save(), scope750v8.translate(scope750v6.width / 2, 12 + scope750v10 / 2 - scope750v11 * 2), scope750v8.imageSmoothingEnabled = !0, scope750v3 || (scope750v5 === "hurt" ? (scope750v8.translate(0, scope750v10 * .12), scope750v8.scale(1.06, .8), scope750v8.rotate(-.06)) : scope750v5 === "attack" ? scope750v8.rotate(Math.sin(scope750v4 / 85) * .08) : scope750v5 === "victory" ? (scope750v8.translate(0, -scope750v10 * .06), scope750v8.scale(.96, 1.06)) : scope750v8.scale(1 + scope750v11 * .012, 1 + scope750v11 * .025)), !scope750v3 && (scope750v5 === "attack" || scope750v5 === "victory")) {
    let scope752v0 = [{
      x: scope750v9 * .15,
      y: scope750v10 * .29,
      w: scope750v9 * .19,
      h: scope750v10 * .19
    }, {
      x: scope750v9 * .35,
      y: scope750v10 * .21,
      w: scope750v9 * .12,
      h: scope750v10 * .26
    }];
    scope750v8.save(), scope750v8.beginPath(), scope750v8.rect(-scope750v9 / 2, -scope750v10 / 2, scope750v9, scope750v10);
    for (let scope753v0 of scope752v0) scope750v8.rect(scope753v0.x, scope753v0.y, scope753v0.w, scope753v0.h);
    scope750v8.clip("evenodd"), scope750v8.drawImage(scope750v1, -scope750v9 / 2, -scope750v10 / 2, scope750v9, scope750v10), scope750v8.restore();
    for (let [scope754v0, scope754v1] of scope752v0.entries()) scope750v8.save(), scope750v8.translate(scope754v1.x + scope754v1.w * .5, scope754v1.y), scope750v8.rotate(scope750v5 === "victory" ? -2.5 - scope754v0 * .2 : Math.sin(scope750v4 / 85 + scope754v0 * .4) * .65 - .65), scope750v8.translate(-scope754v1.x - scope754v1.w * .5, -scope754v1.y), scope750v8.beginPath(), scope750v8.rect(scope754v1.x, scope754v1.y, scope754v1.w, scope754v1.h), scope750v8.clip(), scope750v8.drawImage(scope750v1, -scope750v9 / 2, -scope750v10 / 2, scope750v9, scope750v10), scope750v8.restore();
  } else scope750v8.drawImage(scope750v1, -scope750v9 / 2, -scope750v10 / 2, scope750v9, scope750v10);
  scope750v8.restore();
}
function scope0v203(scope755v0 = "auto", scope755v1 = globalThis.matchMedia?.bind(globalThis)) {
  return scope755v0 === "on" ? !0 : scope755v0 === "off" || !scope755v1 ? !1 : scope755v1("(pointer: coarse)").matches || scope755v1("(hover: none)").matches;
}
var scope0v204 = Object.freeze({
    flight: 280,
    impact: 260,
    player: 420
  }),
  scope0v205 = (scope758v0, scope758v1, scope758v2) => Math.max(scope758v1, Math.min(scope758v2, scope758v0)),
  scope0v206 = (scope759v0, scope759v1) => scope759v0 && Number.isFinite(scope759v0.x) && Number.isFinite(scope759v0.y) ? {
    x: scope0v205(scope759v0.x, 18, 262),
    y: scope0v205(scope759v0.y, 158, scope759v1 - 64)
  } : null;
function scope0v207(scope760v0, {
  player: scope760v1,
  height: scope760v2
} = {}) {
  let scope760v3 = scope760v0?.sin === "envy" || scope760v0?.preview === !0 && !scope760v0?.config,
    scope760v4 = scope760v3 ? "envy" : scope760v0?.config?.id,
    scope760v5 = ["bridge", "sand"].includes(scope760v0?.mode),
    scope760v6 = Number.isFinite(scope760v2) && scope760v2 > 0 ? scope760v2 : scope760v5 ? 720 : 560,
    scope760v7 = scope760v0?.mode === "pride-escape" || scope760v3 && ["capture", "chase"].includes(scope760v0?.mode) ? null : {
      x: 140,
      y: scope760v4 === "envy" ? scope760v5 ? 77 : 57 : scope760v4 === "pride" && !scope760v5 && scope760v0.mode.startsWith("pride-") ? 40 : 68
    },
    scope760v8 = scope760v3 ? scope760v0?.round : scope760v0?.mini,
    scope760v9 = scope760v1;
  return !scope760v9 && scope760v8 && Number.isFinite(scope760v8.x) && Number.isFinite(scope760v8.y) && (scope760v9 = {
    x: scope760v8.x,
    y: scope760v8.y
  }, scope760v4 === "pride" && scope760v0.mode === "pride-escape" ? scope760v9.y -= scope760v8.camera : scope760v4 === "pride" && scope760v0.mode === "pride-doodle" ? scope760v9.y -= scope760v8.camera + 100 : scope760v4 === "pride" && (scope760v0.mode === "pride-mirror-duel" && (scope760v9.x = 280 - scope760v9.x), scope760v9.y -= (scope760v8.jump || 0) / 100, scope760v9.y = 140 + (scope760v9.y - 140) * 320 / 370)), scope760v9 = scope0v206(scope760v9, scope760v6) || {
    x: 140,
    y: Math.min(scope760v5 ? 608 : 408, scope760v6 - 100)
  }, {
    height: scope760v6,
    boss: scope760v7,
    player: scope760v9,
    color: scope760v4 === "greed" ? "#ffe29b" : scope760v4 === "pride" ? "#e9c3ff" : "#dfffc7"
  };
}
function scope0v208(scope762v0) {
  return {
    damage: Math.max(0, Number(scope762v0?.stats?.damage) || 0),
    taken: Math.max(0, Number(scope762v0?.stats?.damageTaken) || 0),
    redRound: scope762v0?.mode === "pride-red-survival" ? scope762v0.mini : null,
    redDamage: scope762v0?.mode === "pride-red-survival" ? Math.max(0, Number(scope762v0.mini?.damage) || 0) : 0,
    lifeRound: ["pride-escape", "pride-mirror-duel"].includes(scope762v0?.mode) ? scope762v0.mini : null,
    lives: ["pride-escape", "pride-mirror-duel"].includes(scope762v0?.mode) ? scope762v0.mini?.lives : null
  };
}
function scope0v209() {
  return {
    encounter: null,
    previous: null,
    flights: [],
    playerHit: null,
    layout: null,
    serial: 0
  };
}
function scope0v210(scope764v0, scope764v1 = null) {
  return scope764v0.encounter = scope764v1, scope764v0.previous = scope0v208(scope764v1), scope764v0.flights = [], scope764v0.playerHit = null, scope764v0.layout = scope764v1 ? scope0v207(scope764v1) : null, scope764v0.serial = 0, scope764v0;
}
function scope0v211(scope766v0, scope766v1, scope766v2, {
  paused: scope766v3 = !1,
  visible: scope766v4 = !0,
  reducedMotion: scope766v5 = !1,
  layout: scope766v6 = scope0v207(scope766v1)
} = {}) {
  if (!scope766v1 || scope766v0.encounter !== scope766v1) return scope0v210(scope766v0, scope766v1);
  let scope766v7 = scope0v208(scope766v1),
    scope766v8 = scope766v0.previous;
  if (scope766v0.previous = scope766v7, !scope766v4 || scope766v1.scene || scope766v1.cutscene) return scope766v0.flights = [], scope766v0.playerHit = null, scope766v0.layout = scope766v6, scope766v0;
  if (scope766v3) return scope766v0;
  let scope766v9 = scope0v205(Number(scope766v2) || 0, 0, 50);
  (scope766v0.layout?.height !== scope766v6.height || !scope766v6.boss) && (scope766v0.flights = []), scope766v0.layout = scope766v6, scope766v0.flights = scope766v0.flights.filter(scope768v0 => (scope768v0.age += scope766v9) < scope768v0.flight + scope0v204.impact), scope766v0.playerHit && (scope766v0.playerHit.age += scope766v9) >= scope0v204.player && (scope766v0.playerHit = null);
  let scope766v10 = scope766v7.damage > scope766v8.damage,
    scope766v11 = scope766v8.redRound && scope766v8.redRound.damage > scope766v8.redDamage;
  (scope766v10 || scope766v11) && scope766v6.boss && (scope766v0.serial++, scope766v0.flights.push({
    age: 0,
    flight: scope766v5 ? 0 : scope0v204.flight,
    from: {
      ...scope766v6.player
    },
    to: {
      ...scope766v6.boss
    },
    side: scope766v0.serial % 2 ? 22 : 258,
    color: scope766v6.color
  }), scope766v0.flights = scope766v0.flights.slice(-8));
  let scope766v12 = scope766v8.lifeRound && scope766v8.lifeRound.lives < scope766v8.lives;
  return (scope766v7.taken > scope766v8.taken || scope766v12) && (scope766v0.playerHit = {
    age: 0,
    at: {
      ...scope766v6.player
    }
  }), scope766v0;
}
function scope0v212(scope769v0, scope769v1) {
  let scope769v2 = 1 - scope769v1;
  return {
    x: scope769v2 * scope769v2 * scope769v0.from.x + 2 * scope769v2 * scope769v1 * scope769v0.side + scope769v1 * scope769v1 * scope769v0.to.x,
    y: scope769v2 * scope769v2 * scope769v0.from.y + 2 * scope769v2 * scope769v1 * (scope769v0.to.y + 65) + scope769v1 * scope769v1 * scope769v0.to.y
  };
}
function scope0v213(scope770v0, scope770v1, scope770v2, scope770v3, scope770v4) {
  scope770v0.fillStyle = scope770v4, scope770v0.beginPath(), scope770v0.moveTo(scope770v1, scope770v2 - scope770v3), scope770v0.lineTo(scope770v1 + scope770v3, scope770v2), scope770v0.lineTo(scope770v1, scope770v2 + scope770v3), scope770v0.lineTo(scope770v1 - scope770v3, scope770v2), scope770v0.closePath(), scope770v0.fill();
}
function scope0v214(scope771v0, scope771v1, scope771v2, scope771v3, scope771v4, scope771v5, scope771v6, scope771v7 = 3) {
  scope771v0.strokeStyle = scope771v6, scope771v0.lineWidth = scope771v7;
  for (let [scope773v0, scope773v1, scope773v2, scope773v3] of [[scope771v1, scope771v2, 1, 1], [scope771v1 + scope771v3, scope771v2, -1, 1], [scope771v1, scope771v2 + scope771v4, 1, -1], [scope771v1 + scope771v3, scope771v2 + scope771v4, -1, -1]]) scope771v0.beginPath(), scope771v0.moveTo(scope773v0 + scope773v2 * scope771v5, scope773v1), scope771v0.lineTo(scope773v0, scope773v1), scope771v0.lineTo(scope773v0, scope773v1 + scope773v3 * scope771v5), scope771v0.stroke();
}
function scope0v215(scope774v0, scope774v1, {
  reducedMotion: scope774v2 = !1
} = {}) {
  let scope774v3 = scope774v0.canvas.height;
  scope774v0.clearRect(0, 0, scope774v0.canvas.width, scope774v3), scope774v0.save(), scope774v0.imageSmoothingEnabled = !1;
  for (let scope776v0 of scope774v1.flights) {
    if (!scope774v2 && scope776v0.flight && scope776v0.age < scope776v0.flight) {
      let scope778v0 = scope776v0.age / scope776v0.flight,
        scope778v1 = scope0v212(scope776v0, scope778v0);
      scope774v0.strokeStyle = scope776v0.color, scope774v0.lineWidth = 2, scope774v0.globalAlpha = .7, scope774v0.beginPath();
      for (let scope779v0 = 0; scope779v0 <= 4; scope779v0++) {
        let scope780v0 = scope0v212(scope776v0, Math.max(0, scope778v0 - .13 + scope779v0 * .0325));
        scope774v0[scope779v0 ? "lineTo" : "moveTo"](scope780v0.x, scope780v0.y);
      }
      scope774v0.stroke(), scope774v0.globalAlpha = 1, scope0v213(scope774v0, scope778v1.x, scope778v1.y, 4, scope776v0.color), scope0v213(scope774v0, scope778v1.x, scope778v1.y, 1.5, "#ffffff");
      continue;
    }
    let scope777v0 = scope0v205((scope776v0.age - (scope774v2 ? 0 : scope776v0.flight)) / scope0v204.impact, 0, 1);
    if (scope774v0.globalAlpha = (1 - scope777v0) * .9, scope774v2) scope0v214(scope774v0, scope776v0.to.x - 21, scope776v0.to.y - 18, 42, 36, 8, scope776v0.color, 2);else {
      let scope781v0 = 12 + scope777v0 * 17;
      scope774v0.strokeStyle = scope776v0.color, scope774v0.lineWidth = 2, scope774v0.beginPath(), scope774v0.arc(scope776v0.to.x, scope776v0.to.y, scope781v0, 0, Math.PI * 2), scope774v0.stroke();
      for (let scope782v0 = 0; scope782v0 < 6; scope782v0++) {
        let scope783v0 = scope782v0 * Math.PI / 3 + .3;
        scope0v213(scope774v0, scope776v0.to.x + Math.cos(scope783v0) * scope781v0, scope776v0.to.y + Math.sin(scope783v0) * scope781v0, 2, scope782v0 % 2 ? scope776v0.color : "#fff6dc");
      }
      scope0v213(scope774v0, scope776v0.to.x, scope776v0.to.y, 5 * (1 - scope777v0), "#fff6dc");
    }
  }
  if (scope774v1.playerHit) {
    let scope784v0 = scope774v1.playerHit.age / scope0v204.player,
      scope784v1 = scope774v1.playerHit.at;
    scope774v0.globalAlpha = (1 - scope784v0) * .9, scope0v214(scope774v0, 8, 150, 264, scope774v3 - 198, 26, "#ff546d", 4), scope774v0.globalAlpha = (1 - scope784v0) * .95;
    let scope784v2 = scope774v2 ? 19 : 13 + scope784v0 * 17;
    scope0v214(scope774v0, scope784v1.x - scope784v2, scope784v1.y - scope784v2, scope784v2 * 2, scope784v2 * 2, 7, "#fff0cd", 2), scope774v0.strokeStyle = "#ff546d", scope774v0.lineWidth = 3, scope774v0.beginPath(), scope774v0.arc(scope784v1.x, scope784v1.y, scope784v2 + 3, 0, Math.PI * 2), scope774v0.stroke();
  }
  scope774v0.restore();
}
function scope0v216(scope785v0, scope785v1 = "combat-effects") {
  let scope785v2 = scope785v0.ownerDocument.createElement("canvas");
  return scope785v2.width = 280, scope785v2.id = scope785v1, scope785v2.setAttribute("aria-hidden", "true"), Object.assign(scope785v2.style, {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "3",
    imageRendering: "pixelated"
  }), scope785v0.after(scope785v2), scope785v2;
}
var scope0v217 = Object.freeze({
    tick: Object.freeze({
      frequency: 580,
      duration: .12,
      type: "sine",
      volume: .065
    }),
    end: Object.freeze({
      frequency: 580,
      duration: .36,
      type: "sine",
      volume: .075
    })
  }),
  scope0v218 = Object.freeze({
    floor: 1e-4,
    attack: .015,
    sustain: .55,
    tail: .015
  });
function scope0v219(scope787v0, scope787v1, scope787v2) {
  if (!scope787v0 || !scope787v1 || !Object.values(scope0v217).includes(scope787v2)) return !1;
  let scope787v3 = scope787v0.currentTime,
    scope787v4 = scope787v0.createOscillator(),
    scope787v5 = scope787v0.createGain();
  return scope787v4.type = scope787v2.type, scope787v4.frequency.setValueAtTime(scope787v2.frequency, scope787v3), scope787v5.gain.setValueAtTime(scope0v218.floor, scope787v3), scope787v5.gain.exponentialRampToValueAtTime(scope787v2.volume, scope787v3 + scope0v218.attack), scope787v5.gain.setValueAtTime(scope787v2.volume, scope787v3 + scope787v2.duration * scope0v218.sustain), scope787v5.gain.exponentialRampToValueAtTime(scope0v218.floor, scope787v3 + scope787v2.duration), scope787v4.connect(scope787v5), scope787v5.connect(scope787v1), scope787v4.start(scope787v3), scope787v4.stop(scope787v3 + scope787v2.duration + scope0v218.tail), !0;
}
var scope0v220 = Object.freeze(["cards", "mahjong", "pride-mirror-match", "pride-crown-choice", "pride-lianliankan", "pride-shard-puzzle", "pride-truth-trial", "pride-mirror-maze", "pride-kaleidoscope", "pride-nested"]);
function scope0v221(scope788v0, scope788v1, scope788v2 = !1, scope788v3 = !1) {
  if (scope788v2 || !Number.isFinite(scope788v0) || !Number.isFinite(scope788v1)) return null;
  let scope788v4 = Math.ceil(scope788v0 / 1e3),
    scope788v5 = Math.ceil(scope788v1 / 1e3);
  return scope788v4 > 0 && scope788v5 <= 0 ? "end" : scope788v5 >= 1 && scope788v5 <= 3 && (scope788v4 > scope788v5 || scope788v3 && scope788v1 < scope788v0) ? "tick" : null;
}
var scope0v222 = scope791v0 => document.getElementById(scope791v0),
  scope0v223 = scope0v222("gluttony-board"),
  scope0v224 = scope0v223.getContext("2d"),
  scope0v225 = scope0v222("boss-frame"),
  scope0v226 = scope0v225.getContext("2d"),
  scope0v227 = scope0v222("board-wrap"),
  scope0v228 = {};
try {
  scope0v228 = JSON.parse(localStorage.getItem("bridge-settings") || "{}");
} catch {}
var scope0v229 = scope794v0 => Number.isFinite(Number(scope794v0)) ? Math.max(0, Math.min(1, Number(scope794v0))) : .7,
  scope0v230 = {
    lang: new URLSearchParams(location.search).get("lang") || scope0v228.lang || "en",
    touch: scope0v228.touch || "auto",
    danger: scope0v228.dangerEffect === "shake" ? "shake" : "warning",
    music: scope0v229(scope0v228.bgmVolume ?? scope0v228.volume),
    sound: scope0v228.sound === !1 ? 0 : scope0v229(scope0v228.sfxVolume ?? scope0v228.volume),
    reduced: matchMedia("(prefers-reduced-motion:reduce)").matches
  };
scope0v230.lang = ["zh", "zh-Hant", "zh-Hans"].includes(scope0v230.lang) ? "zh-Hant" : "en";
document.body.dataset.theme = scope0v228.theme === "light" ? "light" : "dark";
var scope0v231 = null,
  scope0v232 = !0,
  scope0v233 = "full",
  scope0v234 = performance.now(),
  scope0v235 = null,
  scope0v236 = null,
  scope0v237 = null,
  scope0v238 = "",
  scope0v239 = "",
  scope0v240 = null,
  scope0v241 = 0,
  scope0v242 = {
    damage: 0,
    taken: 0,
    score: 0
  },
  scope0v243 = new Set(),
  scope0v244 = scope0v209(),
  scope0v245 = scope0v216(scope0v223, "gluttony-combat"),
  scope0v246 = scope0v245.getContext("2d");
Object.defineProperty(window, "gluttonyPreview", {
  get: () => scope0v231
});
var scope0v247 = (scope796v0, scope796v1) => scope0v230.lang === "zh-Hant" ? scope796v0 : scope796v1,
  scope0v248 = document.createElement("img");
scope0v248.id = "stomach-pulse";
scope0v248.alt = "";
scope0v248.hidden = !0;
Object.assign(scope0v248.style, {
  position: "absolute",
  inset: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  pointerEvents: "none",
  imageRendering: "pixelated"
});
scope0v222("ending-art").after(scope0v248);
function scope0v249() {
  let scope797v0 = scope0v231?.scene?.kind === "body" && !scope0v230.reduced;
  if (scope0v248.hidden = !scope797v0, !scope797v0) return;
  scope0v248.getAttribute("src") !== scope0v250.body && (scope0v248.src = scope0v250.body);
  let scope797v1 = innerWidth,
    scope797v2 = innerHeight,
    scope797v3 = Math.max(scope797v1 / 1536, scope797v2 / 1024),
    scope797v4 = (scope797v1 - 1536 * scope797v3) / 2,
    scope797v5 = (scope797v2 - 1024 * scope797v3) / 2,
    scope797v6 = [[572, 260], [615, 252], [624, 309], [708, 307], [801, 318], [858, 364], [898, 429], [916, 472], [956, 480], [984, 463], [1016, 480], [1010, 526], [974, 547], [933, 607], [888, 639], [829, 668], [749, 676], [673, 657], [616, 620], [587, 559], [583, 476], [598, 358]];
  scope0v248.style.clipPath = "polygon(" + scope797v6.map(([scope798v0, scope798v1]) => `${scope797v4 + scope798v0 * scope797v3}px ${scope797v5 + scope798v1 * scope797v3}px`).join(",") + ")", scope0v248.style.transformOrigin = `${scope797v4 + 782 * scope797v3}px ${scope797v5 + 490 * scope797v3}px`;
  let scope797v7 = Math.sin(scope0v231.scene.time / 480);
  scope0v248.style.transform = `scale(${1 + scope797v7 * .012},${1 + scope797v7 * .024})`;
}
var scope0v250 = {
  intro: "./assets/gluttony-intro-r1.webp",
  "chef-defeat": "./assets/gluttony-chef-defeat-r1.webp",
  mouth: "./assets/gluttony-mouth-r1.webp",
  "mouth-defeat": "./assets/gluttony-mouth-defeat-r1.webp",
  abyss: "./assets/gluttony-abyss-r1.webp",
  "abyss-defeat": "./assets/gluttony-abyss-defeat-r1.webp",
  body: "./assets/gluttony-body-r1.webp",
  victory: "./assets/gluttony-victory-r1.webp",
  lost: "./assets/gluttony-lost-r1.webp"
};
function scope0v251() {
  document.documentElement.lang = scope0v230.lang, document.body.style.fontFamily = scope0v230.lang === "en" ? '"Pixel Latin",sans-serif' : '"Pixel Hant",sans-serif';
  let scope800v0 = {
    "launcher-title": ["\u66B4\u98DF\u8A66\u73A9", "Gluttony preview"],
    "launch-description": ["\u5DE8\u5927\u9910\u684C\u3001\u98DF\u7269\u5C71\u8207\u6DF1\u6DF5\u5DE8\u53E3\u3002\u586B\u4E0D\u6EFF\u7684\u7A7A\u865B\u3002", "An immense table, mountains of food, and hunger without end."],
    "scenario-label": ["\u8A66\u73A9\u5167\u5BB9", "Scenario"],
    "difficulty-label": ["\u96E3\u5EA6", "Difficulty"],
    start: ["\u958B\u59CB\u8A66\u73A9", "Start preview"],
    "prototype-note": ["\u7368\u7ACB\u8A66\u73A9 \xB7 \u4E0D\u5BEB\u8A2D\u5B9A\u3001\u901A\u95DC\u6216\u6392\u884C\u699C\u3002\u7D30\u7BC0\u8207\u7F8E\u8853\u5C6C\u8A66\u4F5C\uFF1B\u672C\u7248\u53EA\u6709\u97F3\u6548\uFF0C\u5C08\u5C6C BGM\uFF0F\u7B2C\u4E09\u968E\u6BB5\u6B4C\u8A5E\u7248\u5F85\u63D0\u4F9B\u3002", "Independent preview \xB7 No saved settings or progress. Details and art are provisional. Effects only; dedicated BGM and the final vocal track are pending."],
    "menu-title": ["\u8A66\u73A9\u5DF2\u66AB\u505C", "Preview paused"],
    "control-guide": ["\u65B9\u5411\uFF1A\u79FB\u52D5\uFF0F\u9078\u64C7\uFF1B\u7A7A\u767D\uFF1A\u4E3B\u52D5\u4F5C\uFF1BC\uFF0FShift\uFF1A\u526F\u52D5\u4F5C\uFF1BBridge \u4E0A\uFF0FX \u53F3\u65CB\u3001Z \u5DE6\u65CB\u3002\u4E09\u6D88\uFF1A\u9078\u76F8\u9130\u5169\u683C\uFF1B\u5272\u7E69\uFF1A\u62D6\u5283\u6216\u9078\u7E69\u5272\uFF1B\u5207\u679C\uFF1A\u62D6\u5283\u6216\u65B9\u5411\uFF0B\u7A7A\u767D\u3002\u9003\u4EA1\uFF1A\u5DE6\u53F3\u63DB\u9053\u3001\u7A7A\u767D\uFF0F\u2191\u8DF3\u3001C\uFF0FShift\uFF0F\u2193\u6ED1\uFF1B\u4EA6\u53EF\u6ED1\u52D5\u3002\u5408\u6210\uFF1A\u4E0D\u9650\u6642\uFF0C\u5408\u51FA\u897F\u74DC\u3002\u56DB\u9023\u9020\u689D\u7D0B\u3001\u4E94\u9023\u9020\u5F69\u8679\u3001T\uFF0FL\u9020\u7206\u7834\u3002", "Arrows: move / select. Space: primary. C / Shift: secondary. Bridge: Up / X rotate, Z reverse. Match: select neighbors. Ropes: swipe or select and cut. Slicer: swipe or arrows + Space. Runner: Left/Right lanes, Space/Up jump, C/Shift/Down slide; swipes also work. Fusion: no timer, make a watermelon. Match 4: striped; 5: rainbow; T/L: wrapped."],
    resume: ["\u7E7C\u7E8C\u904A\u73A9", "Resume"],
    retry: ["\u91CD\u8A66\u9019\u4E00\u95DC", "Retry scenario"],
    pick: ["\u8FD4\u56DE\u8A66\u73A9\u9078\u64C7", "Preview selection"],
    "touch-label": ["\u89F8\u63A7\u6309\u9215", "Touch controls"],
    "danger-label": ["\u5371\u96AA\u6548\u679C", "Danger effect"],
    "reduce-label": ["\u6E1B\u5C11\u52D5\u614B\u6548\u679C", "Reduce motion"],
    "music-label": ["\u97F3\u6A02\u97F3\u91CF\uFF08\u5F85\u63D0\u4F9B\uFF09", "Music volume (pending)"],
    "sound-label": ["\u97F3\u6548\u97F3\u91CF", "Effects volume"],
    "music-note": ["\u6C92\u6709\u66AB\u7528 BGM\uFF0C\u4E0D\u501F\u5176\u4ED6 Boss \u7684\u6B4C\u66F2\u3002\u672C\u6B21\u8ABF\u6574\u53EA\u7559\u7576\u524D\u9801\u9762\u3002", "No placeholder BGM or borrowed boss tracks. Changes last only for this page."],
    "menu-return": ["\u8FD4\u56DE\u904A\u6232", "Back to game"],
    "scene-continue": ["\u7E7C\u7E8C", "Continue"],
    "scene-retry": ["\u91CD\u8A66", "Retry"],
    "scene-pick": ["\u8FD4\u56DE\u8A66\u73A9\u9078\u64C7", "Preview selection"]
  };
  for (let [scope801v0, scope801v1] of Object.entries(scope800v0)) scope0v222(scope801v0).textContent = scope0v247(...scope801v1);
  let scope800v1 = scope0v222("scenario").value || scope0v233;
  scope0v222("scenario").replaceChildren(...scope0v128.map(scope802v0 => {
    let scope802v1 = document.createElement("option");
    return scope802v1.value = scope802v0.id, scope802v1.textContent = scope0v247(...scope802v0.label), scope802v1;
  })), scope0v222("scenario").value = scope800v1, scope0v222("gluttony-language").value = scope0v230.lang, scope0v238 = "", scope0v257();
}
scope0v222("difficulty").value = scope0v228.crazyDifficulty === "hard" ? "hard" : "normal";
scope0v222("touch").value = scope0v230.touch;
scope0v222("danger").value = scope0v230.danger;
scope0v222("reduce").checked = scope0v230.reduced;
scope0v222("music-volume").value = scope0v230.music * 100;
scope0v222("sound-volume").value = scope0v230.sound * 100;
scope0v251();
function scope0v252() {
  try {
    if (!scope0v235) {
      scope0v235 = new AudioContext();
      let scope805v0 = scope0v235.createOscillator.bind(scope0v235);
      scope0v235.createOscillator = () => {
        let scope806v0 = scope805v0();
        return scope0v243.add(scope806v0), scope806v0.addEventListener("ended", () => scope0v243.delete(scope806v0)), scope806v0;
      };
    }
    scope0v236 || (scope0v236 = scope0v235.createGain(), scope0v236.connect(scope0v235.destination)), scope0v235.resume(), scope0v236.gain.value = scope0v230.sound;
  } catch {}
}
function scope0v253() {
  for (let scope810v0 of scope0v243) try {
    scope810v0.stop();
  } catch {}
  scope0v243.clear(), scope0v235 && (scope0v236.gain.value = 0, scope0v235.suspend());
}
function scope0v254(scope813v0, scope813v1 = .12) {
  if (!scope0v235 || scope0v235.state !== "running" || !scope0v230.sound || scope0v232) return;
  let scope813v2 = scope0v235.createOscillator(),
    scope813v3 = scope0v235.createGain(),
    scope813v4 = scope0v235.currentTime;
  scope813v2.type = "sine", scope813v2.frequency.value = scope813v0, scope813v3.gain.setValueAtTime(1e-4, scope813v4), scope813v3.gain.linearRampToValueAtTime(.075, scope813v4 + .015), scope813v3.gain.exponentialRampToValueAtTime(1e-4, scope813v4 + scope813v1), scope813v2.connect(scope813v3), scope813v3.connect(scope0v236), scope813v2.start(scope813v4), scope813v2.stop(scope813v4 + scope813v1 + .015);
}
function scope0v255() {
  scope0v231 && scope0v133(scope0v231), scope0v237 = null;
}
function scope0v256() {
  let scope816v0 = scope0v203(scope0v230.touch),
    scope816v1 = innerWidth,
    scope816v2 = visualViewport?.height || innerHeight,
    scope816v3 = scope816v1 > scope816v2 && scope816v2 < 620,
    scope816v4 = scope0v175(scope0v231);
  document.querySelector(".pads").hidden = !scope816v0, document.body.classList.toggle("desktop", !scope816v0), document.body.classList.toggle("wide", scope816v3);
  let scope816v5 = scope816v3 ? scope816v2 - 6 : scope816v0 ? scope816v2 - 298 : scope816v1 < 620 ? scope816v2 - 164 : scope816v2 - 120,
    scope816v6 = scope816v3 ? Math.min(310, scope816v1 * .43) : Math.min(310, scope816v1 - 62),
    scope816v7 = Math.max(100, Math.min(scope816v5, scope816v6 * scope816v4 / 280));
  scope0v227.style.width = scope816v7 * 280 / scope816v4 + "px", scope0v227.style.height = scope816v7 + "px", scope0v223.height !== scope816v4 && (scope0v223.height = scope816v4, scope0v225.height = scope816v4, scope0v245.height = scope816v4), scope0v258();
}
function scope0v257() {
  if (!scope0v231) return;
  let scope817v0 = scope0v231.mode === "bridge",
    scope817v1 = !!scope0v231.scene || scope0v231.over || scope0v231.round.done;
  for (let scope818v0 of ["left", "right", "up", "down", "rotate-left", "action", "alt"]) scope0v222(scope818v0).disabled = scope817v1;
  let scope817v2 = {
    snake: ["\u8F49\u5411", "Steer"],
    match: ["\u4EA4\u63DB", "Swap"],
    execution: ["\u4EA4\u63DB", "Swap"],
    merge: ["\u843D\u679C", "Drop"],
    rope: ["\u5272\u7E69", "Cut"],
    slice: ["\u5207", "Slice"],
    gravity: ["\u6293\u4F4F", "Grip"],
    escape: ["\u8DF3\u8E8D", "Jump"]
  };
  scope0v222("action").querySelector("span").textContent = scope817v0 ? scope0v247("\u843D", "Drop") : scope0v247(...(scope817v2[scope0v231.mode] || ["\u53CD\u653B", "Counter"])), scope0v231.mode === "snake" && (scope0v222("action").disabled = !0);
  let scope817v3 = {
    match: ["\u53D6\u6D88", "Cancel"],
    execution: ["\u53D6\u6D88", "Cancel"],
    merge: ["\u63DB\u679C", "Swap"],
    rope: ["\u91CD\u64FA", "Reset"],
    gravity: ["\u653E\u624B", "Release"],
    escape: ["\u6ED1\u884C", "Slide"]
  };
  scope0v222("alt").querySelector("span").textContent = scope817v0 ? scope0v247("\u7559", "Hold") : scope0v247(...(scope817v3[scope0v231.mode] || ["\u2014", "\u2014"])), scope0v222("alt").disabled = scope817v1 || !scope817v0 && !scope817v3[scope0v231.mode], scope0v222("up").querySelector("span").textContent = scope817v0 ? scope0v247("\u53F3\u65CB", "Rotate") : scope0v247("\u4E0A\u79FB", "Up"), scope0v222("down").querySelector("span").textContent = scope817v0 ? scope0v247("\u964D", "Soft") : scope0v247("\u4E0B\u79FB", "Down"), scope0v222("rotate-left").hidden = !scope817v0, scope0v222("rotate-left").querySelector("span").textContent = scope0v247("\u5DE6\u65CB", "CCW"), scope0v231.mode === "escape" && (scope0v222("up").querySelector("span").textContent = scope0v247("\u8DF3\u8E8D", "Jump"), scope0v222("down").querySelector("span").textContent = scope0v247("\u6ED1\u884C", "Slide")), ["rope", "merge"].includes(scope0v231.mode) && (scope0v222("up").disabled = !0, scope0v222("down").disabled = !0);
}
function scope0v258() {
  let scope819v0 = scope0v222("gluttony-cat");
  if (scope819v0.hidden = !scope0v231 || !scope0v222("launcher").hidden, scope819v0.hidden) return;
  let scope819v1 = innerWidth,
    scope819v2 = innerHeight,
    scope819v3 = document.body.classList.contains("wide"),
    scope819v4 = !document.querySelector(".pads").hidden,
    scope819v5 = !scope0v222("ending-screen").hidden,
    scope819v6 = scope819v1 < 620 ? 124 : 146,
    scope819v7,
    scope819v8,
    scope819v9 = scope819v0.querySelector("img"),
    scope819v10 = scope819v9.naturalWidth / scope819v9.naturalHeight || 1.8;
  if (scope819v5) scope819v7 = 16, scope819v8 = scope0v222("ending-footer").getBoundingClientRect().top - scope819v6 / scope819v10 - 12;else if (scope819v3 && scope819v4) scope819v6 = 130, scope819v7 = 20, scope819v8 = Math.min(scope0v222("rotate-left").hidden ? 999 : scope0v222("rotate-left").getBoundingClientRect().top, scope0v222("left").getBoundingClientRect().top) - scope819v6 / scope819v10 - 15;else if (scope819v4) {
    scope819v6 = scope819v1 < 620 ? 124 : 136;
    let scope820v0 = scope0v227.getBoundingClientRect();
    scope819v7 = (scope819v1 - scope819v6) / 2, scope819v8 = scope820v0.bottom + 4;
  } else {
    let scope821v0 = scope0v227.getBoundingClientRect();
    scope819v1 < 620 ? (scope819v7 = (scope819v1 - scope819v6) / 2, scope819v8 = Math.min(scope819v2 - scope819v6 / scope819v10 - 12, scope821v0.bottom + 12)) : (scope819v7 = Math.max(16, scope821v0.left - scope819v6 - 20), scope819v8 = Math.min(scope819v2 - scope819v6 / scope819v10 - 16, scope821v0.bottom - scope819v6 / scope819v10 - 18));
  }
  scope819v0.style.width = scope819v6 + "px", scope819v0.style.left = Math.max(4, scope819v7) + "px", scope819v0.style.top = Math.max(44, Math.min(scope819v8, scope819v2 - scope819v6 / scope819v10 - 4)) + "px", scope819v0.classList.toggle("gift", scope0v231.catTime > 0), scope0v202(scope0v222("cat-photo-motion"), scope819v9, scope0v231, {
    reduced: scope0v230.reduced
  });
}
function scope0v259() {
  let scope822v0 = scope0v231?.scene,
    scope822v1 = scope0v222("ending-screen"),
    scope822v2 = !!scope822v0 && scope0v222("launcher").hidden;
  scope822v1.hidden = !scope822v2, document.body.classList.toggle("ending-page", scope822v2);
  let scope822v3 = scope0v222("scene-actions");
  if (scope822v3.hidden = !scope822v2, scope822v2) {
    scope0v222("ending-footer").append(scope822v3);
    let scope823v0 = scope0v188[scope822v0.kind];
    scope822v0.kind === "result" && (scope823v0 = [scope0v231.round.success ? "\u53CD\u653B\u6210\u529F" : "\u6311\u6230\u672A\u5B8C\u6210", scope0v231.round.success ? "Counter successful" : "Challenge incomplete", scope0v231.stage === 1 ? "intro" : scope0v231.stage === 2 ? "mouth" : "abyss", scope0v231.round.id === "execution" && !scope0v231.round.success ? "\u5DF2\u6263 80 HP\uFF0C\u7A0D\u5F8C\u91CD\u8A66\u3002" : scope0v231.round.id === "escape" && !scope0v231.round.success ? "\u5DF2\u6263 60 HP\uFF0C\u7A0D\u5F8C\u91CD\u8A66\u3002" : "\u5373\u5C07\u7E7C\u7E8C\u3002", scope0v231.round.id === "execution" && !scope0v231.round.success ? "80 HP lost. The trial will return." : scope0v231.round.id === "escape" && !scope0v231.round.success ? "60 HP lost. The trial will return." : "Continuing shortly."]), scope823v0 ??= scope0v188.intro;
    let scope823v1 = scope822v0.kind + scope0v230.lang + !!scope0v231.round.success;
    scope823v1 !== scope0v238 && (scope0v238 = scope823v1, scope0v222("ending-art").src = scope0v250[scope823v0[2]], scope0v222("ending-title").textContent = scope0v247(scope823v0[0], scope823v0[1]), scope0v222("ending-caption").textContent = scope0v247(scope823v0[3], scope823v0[4]));
    let scope823v2 = scope0v231.over || scope0v231.scenario.story;
    scope0v222("scene-continue").hidden = scope823v2, scope0v222("scene-retry").hidden = !scope823v2, scope0v222("scene-pick").hidden = !scope823v2;
  }
  scope0v249(), scope0v258();
}
function scope0v260() {
  scope0v255(), scope0v233 = scope0v222("scenario").value, scope0v231 = scope0v130({
    scenario: scope0v233,
    difficulty: scope0v222("difficulty").value
  }), scope0v232 = !1, scope0v222("launcher").hidden = !0, scope0v222("menu").hidden = !0, scope0v238 = "", scope0v239 = "", scope0v240 = null, scope0v242 = {
    damage: 0,
    taken: 0,
    score: 0
  }, scope0v210(scope0v244, scope0v231), scope0v252(), scope0v256(), scope0v266(0), scope0v268();
}
scope0v222("launch-form").onsubmit = scope825v0 => {
  scope825v0.preventDefault(), scope0v260();
};
function scope0v261() {
  scope0v231 && (scope0v232 = !0, scope0v255(), scope0v253(), scope0v222("menu").hidden = !1, scope0v266(0));
}
function scope0v262() {
  scope0v232 = !1, scope0v222("menu").hidden = !0, scope0v252(), scope0v234 = performance.now(), scope0v268();
}
function scope0v263() {
  scope0v232 = !0, scope0v255(), scope0v253(), scope0v222("menu").hidden = !0, scope0v222("launcher").hidden = !1, scope0v222("ending-screen").hidden = !0, document.body.classList.remove("ending-page"), scope0v222("gluttony-cat").hidden = !0;
}
scope0v222("menu-button").onclick = scope0v261;
scope0v222("resume").onclick = scope0v262;
scope0v222("menu-return").onclick = scope0v262;
scope0v222("retry").onclick = scope0v260;
scope0v222("pick").onclick = scope0v263;
scope0v222("scene-continue").onclick = () => {
  scope0v252(), scope0v142(scope0v231), scope0v256(), scope0v266(0), scope0v268();
};
scope0v222("scene-retry").onclick = scope0v260;
scope0v222("scene-pick").onclick = scope0v263;
scope0v222("gluttony-language").onchange = scope830v0 => {
  scope0v230.lang = scope830v0.target.value, scope0v251(), scope0v266(0);
};
scope0v222("touch").onchange = scope831v0 => {
  scope0v255(), scope0v230.touch = scope831v0.target.value, scope0v256(), scope0v266(0);
};
scope0v222("danger").onchange = scope832v0 => {
  scope0v230.danger = scope832v0.target.value, scope0v266(0);
};
scope0v222("reduce").onchange = scope833v0 => {
  scope0v230.reduced = scope833v0.target.checked, scope0v266(0);
};
scope0v222("music-volume").oninput = scope834v0 => scope0v230.music = scope834v0.target.value / 100;
scope0v222("sound-volume").oninput = scope835v0 => {
  scope0v230.sound = scope835v0.target.value / 100, scope0v236 && (scope0v236.gain.value = scope0v232 ? 0 : scope0v230.sound);
};
var scope0v264 = {
  ArrowLeft: "left",
  ArrowRight: "right",
  ArrowUp: "up",
  ArrowDown: "down",
  Space: "action",
  KeyC: "alt",
  ShiftLeft: "alt",
  ShiftRight: "alt",
  KeyZ: "rotateLeft",
  KeyX: "up"
};
addEventListener("keydown", scope836v0 => {
  if (!(scope836v0.target instanceof HTMLSelectElement || scope836v0.target instanceof HTMLInputElement || !scope0v222("launcher").hidden)) {
    if (scope836v0.code === "Escape") {
      scope836v0.preventDefault(), scope0v222("menu").hidden ? scope0v261() : scope0v262();
      return;
    }
    scope0v264[scope836v0.code] && scope0v231 && !scope0v232 && (scope836v0.preventDefault(), scope0v252(), scope0v144(scope0v231, scope0v264[scope836v0.code], !0));
  }
});
addEventListener("keyup", scope839v0 => {
  scope0v264[scope839v0.code] && scope0v231 && scope0v144(scope0v231, scope0v264[scope839v0.code], !1);
});
addEventListener("blur", () => {
  scope0v255(), scope0v231 && scope0v222("launcher").hidden && scope0v261();
});
for (let scope841v0 of ["left", "right", "up", "down", "rotate-left", "action", "alt"]) {
  let scope842v0 = scope0v222(scope841v0),
    scope842v1 = scope841v0 === "rotate-left" ? "rotateLeft" : scope841v0;
  scope842v0.onpointerdown = scope843v0 => {
    scope0v232 || scope842v0.disabled || (scope843v0.preventDefault(), scope0v252(), scope842v0.setPointerCapture(scope843v0.pointerId), scope0v144(scope0v231, scope842v1, !0, "touch"));
  };
  for (let scope844v0 of ["pointerup", "pointercancel", "lostpointercapture"]) scope842v0.addEventListener(scope844v0, () => {
    scope0v231 && scope0v144(scope0v231, scope842v1, !1);
  });
  scope841v0 !== "action" && (scope842v0.onpointerleave = () => {
    scope0v231 && scope0v144(scope0v231, scope842v1, !1);
  });
}
var scope0v265 = scope847v0 => {
  let scope847v1 = scope0v223.getBoundingClientRect();
  return [(scope847v0.clientX - scope847v1.left) * 280 / scope847v1.width, (scope847v0.clientY - scope847v1.top) * scope0v175(scope0v231) / scope847v1.height];
};
scope0v223.onpointerdown = scope848v0 => {
  !scope0v231 || scope0v232 || scope0v231.scene || scope0v231.mode === "bridge" || (scope848v0.preventDefault(), scope0v252(), scope0v237 = scope848v0.pointerId, scope0v223.setPointerCapture(scope0v237), scope0v145(scope0v231, ...scope0v265(scope848v0), "start"));
};
scope0v223.onpointermove = scope849v0 => {
  scope0v237 !== scope849v0.pointerId || !scope0v231 || scope0v232 || scope0v231.scene || scope0v145(scope0v231, ...scope0v265(scope849v0), "move");
};
for (let scope850v0 of ["pointerup", "pointercancel", "lostpointercapture"]) scope0v223.addEventListener(scope850v0, scope851v0 => {
  scope0v237 !== scope851v0.pointerId || !scope0v231 || (scope0v145(scope0v231, ...scope0v265(scope851v0), scope850v0 === "pointerup" ? "end" : "cancel"), scope0v237 = null);
});
document.addEventListener("visibilitychange", () => {
  document.hidden && scope0v231 && scope0v222("launcher").hidden && scope0v261();
});
addEventListener("resize", () => {
  scope0v255(), scope0v256(), scope0v231 && scope0v266(0);
});
visualViewport?.addEventListener("resize", () => {
  scope0v256(), scope0v231 && scope0v266(0);
});
function scope0v266(scope855v0) {
  if (!scope0v231) return;
  let scope855v1 = scope0v175(scope0v231);
  if (scope0v223.height !== scope855v1 && scope0v256(), scope0v239 !== scope0v231.mode) {
    scope0v239 = scope0v231.mode;
    let scope856v0 = scope0v177(scope0v231);
    document.body.style.setProperty("--task-base", scope856v0.base), document.body.style.setProperty("--task-field", scope856v0.field), document.body.style.setProperty("--task-accent", scope856v0.accent);
  }
  scope0v184(scope0v224, scope0v231, {
    lang: scope0v230.lang,
    reduced: scope0v230.reduced
  }), scope0v174(scope0v226, scope0v231);
  let scope855v2 = {
    height: scope855v1,
    boss: scope0v231.mode === "escape" ? null : {
      x: 140,
      y: 65
    },
    player: {
      x: scope0v231.mode === "bridge" ? 140 : scope0v231.round.x,
      y: scope0v231.mode === "bridge" ? 600 : scope0v231.round.y
    },
    color: "#ffe0a6"
  };
  scope0v211(scope0v244, scope0v231, scope855v0, {
    paused: scope0v232,
    reducedMotion: scope0v230.reduced,
    layout: scope855v2
  }), scope0v215(scope0v246, scope0v244, {
    reducedMotion: scope0v230.reduced
  });
  let scope855v3 = document.querySelector(".nav small");
  scope855v3.textContent = scope0v231.hp <= 25 ? "WARNING" : "CRAZY \xB7 GLUTTONY \xB7 r3", scope855v3.style.color = scope0v231.hp <= 25 ? "#ff5b78" : "", scope0v227.classList.toggle("danger", scope0v231.hp <= 25), scope0v227.classList.toggle("shake", scope0v231.hp <= 25 && scope0v230.danger === "shake" && !scope0v230.reduced && !scope0v232), scope0v257(), scope0v259();
}
function scope0v267(scope857v0) {
  scope0v241 = 0;
  let scope857v1 = Math.min(50, scope857v0 - scope0v234);
  if (scope0v234 = scope857v0, scope0v231 && !scope0v232) {
    let scope858v0 = scope0v231.round,
      scope858v1 = scope858v0.duration,
      scope858v2 = scope858v1 - scope858v0.clock;
    if (scope0v147(scope0v231, scope857v1), scope0v235 && scope0v235.state === "running") {
      if (scope0v236.gain.value = scope0v230.sound, ["match", "rope"].includes(scope858v0.id) && scope0v231.round === scope858v0) {
        let scope860v0 = scope0v221(scope858v2, scope858v1 - scope858v0.clock, scope858v0.done && scope858v0.success, scope0v240 !== scope858v0);
        scope860v0 && scope0v230.sound && (!scope0v231.scene || scope860v0 === "end") && scope0v219(scope0v235, scope0v236, scope0v217[scope860v0]);
      }
      scope0v231.stats.damageTaken > scope0v242.taken ? scope0v254(180, .2) : (scope0v231.stats.damage > scope0v242.damage || scope0v231.round === scope858v0 && scope0v231.round.score > scope0v242.score) && scope0v254(660), scope0v242 = {
        damage: scope0v231.stats.damage,
        taken: scope0v231.stats.damageTaken,
        score: scope0v231.round.score
      };
    }
    scope0v240 = scope0v231.round, scope0v266(scope857v1);
  }
  scope0v231 && !scope0v232 && !document.hidden && !scope0v231.over && (!scope0v231.scenario.story || scope0v231.scene?.kind === "body" && !scope0v230.reduced) && (scope0v241 = requestAnimationFrame(scope0v267));
}
function scope0v268() {
  scope0v241 || (scope0v234 = performance.now(), scope0v241 = requestAnimationFrame(scope0v267));
}
addEventListener("storage", scope862v0 => {
  if (scope862v0.key === "bridge-settings") try {
    let scope863v0 = JSON.parse(scope862v0.newValue || "{}");
    scope0v230.lang = ["zh", "zh-Hant", "zh-Hans"].includes(scope863v0.lang) ? "zh-Hant" : "en", scope0v230.touch = scope863v0.touch || "auto", scope0v230.danger = scope863v0.dangerEffect === "shake" ? "shake" : "warning", scope0v230.music = scope0v229(scope863v0.bgmVolume ?? scope863v0.volume), scope0v230.sound = scope0v229(scope863v0.sfxVolume ?? scope863v0.volume), document.body.dataset.theme = scope863v0.theme === "light" ? "light" : "dark", scope0v222("touch").value = scope0v230.touch, scope0v222("danger").value = scope0v230.danger, scope0v222("music-volume").value = scope0v230.music * 100, scope0v222("sound-volume").value = scope0v230.sound * 100, scope0v251(), scope0v256(), scope0v266(0);
  } catch {}
});
scope0v222("gluttony-cat").querySelector("img").addEventListener("load", () => {
  scope0v256(), scope0v231 && scope0v266(0);
});
scope0v256();