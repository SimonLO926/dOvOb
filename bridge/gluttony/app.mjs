import {gluttonyUnlocked, createGluttonyRecorder, gluttonyScore} from './campaign.mjs';
import {filmingEnabled} from '../filming.mjs';
import {createGluttonyMusic, gluttonyTrack} from './music.mjs';
import {
  createGluttony,
  update,
  input,
  point,
  release,
  continueScene,
  SCENARIOS,
  GAMES,
  ATTACKS,
} from "./engine.mjs";
import { draw, height, theme, stories } from "./view.mjs";
import { drawFrame } from "./art.mjs";
import { drawPhotoCat } from "../lust/cat.mjs";
import { touchControlsEnabled } from "../touch-controls.mjs";
import {
  createCombatEffects,
  resetCombatEffects,
  updateCombatEffects,
  drawCombatEffects,
  createCombatOverlay,
} from "../combat-effects.mjs";
import {
  countdownCue,
  COUNTDOWN_TONES,
  playCountdownTone,
} from "../puzzle-countdown.mjs";
const $ = (id) => document.getElementById(id),
  board = $("gluttony-board"),
  c = board.getContext("2d"),
  frame = $("boss-frame"),
  fc = frame.getContext("2d"),
  wrap = $("board-wrap");
const campaign = document.body.dataset.gluttonyCampaign === 'true';
let campaignStorage; try {campaignStorage = localStorage;} catch {}
const recordCampaign = createGluttonyRecorder(campaignStorage);
const returnToBosses = () => location.assign(new URL('./cartridge.html?sin=gluttony', location.href));
let saved = {};
try {
  saved = JSON.parse(localStorage.getItem("bridge-settings") || "{}");
} catch {}
const vol = (v) =>
  Number.isFinite(Number(v)) ? Math.max(0, Math.min(1, Number(v))) : 0.7;
const prefs = {
  lang: new URLSearchParams(location.search).get("lang") || saved.lang || "en",
  touch: saved.touch || "auto",
  danger: saved.dangerEffect === "shake" ? "shake" : "warning",
  music: vol(saved.bgmVolume ?? saved.volume),
  sound: saved.sound === false ? 0 : vol(saved.sfxVolume ?? saved.volume),
  reduced: matchMedia("(prefers-reduced-motion:reduce)").matches,
};
prefs.lang = ["zh", "zh-Hant", "zh-Hans"].includes(prefs.lang)
  ? "zh-Hant"
  : "en";
document.body.dataset.theme = saved.theme === "light" ? "light" : "dark";
let s = null,
  paused = true,
  selected = "full",
  last = performance.now(),
  audio = null,
  sfx = null,
  pointer = null,
  endingKey = "",
  themeKey = "",
  previousRound = null,
  raf = 0,
  lastSoundStats = { damage: 0, taken: 0, score: 0 };
const activeTones = new Set();
const fx = createCombatEffects(),
  overlay = createCombatOverlay(board, "gluttony-combat"),
  fxc = overlay.getContext("2d");
Object.defineProperty(window, campaign ? "gluttonyGame" : "gluttonyPreview", { get: () => s });
const music = createGluttonyMusic(() => prefs.music * (s && ['match','rope'].includes(s.mode) && s.round.duration - s.round.clock <= 3000 && !s.round.done ? .3 : 1));
let musicKey = null, musicFadeUntil = 0;
function selectMusic() {
  const key = gluttonyTrack(s);
  if (key !== musicKey || music.active !== key) {
    musicKey = key;
    musicFadeUntil = performance.now() + 600;
  }
  music.select(key);
}
function savePreferences({languageChanged = false} = {}) {
  if (!campaign || s?.filming || filmingEnabled()) return;
  try {const value = JSON.parse(localStorage.getItem('bridge-settings') || '{}');
    Object.assign(value, {touch:prefs.touch, dangerEffect:prefs.danger, bgmVolume:prefs.music, sfxVolume:prefs.sound});
    if (languageChanged) value.lang = prefs.lang;
    localStorage.setItem('bridge-settings', JSON.stringify(value));
  } catch {}
}
const t = (zh, en) => (prefs.lang === "zh-Hant" ? zh : en);
// Animate only the true stomach silhouette; the environmental painting stays still.
const stomachLayer = document.createElement("img");
stomachLayer.id = "stomach-pulse";
stomachLayer.alt = "";
stomachLayer.hidden = true;
Object.assign(stomachLayer.style, {
  position: "absolute",
  inset: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  pointerEvents: "none",
  imageRendering: "pixelated",
});
$("ending-art").after(stomachLayer);
function stomachMotion() {
  const active = s?.scene?.kind === "body" && !prefs.reduced;
  stomachLayer.hidden = !active;
  if (!active) return;
  if (stomachLayer.getAttribute("src") !== storyArt.body)
    stomachLayer.src = storyArt.body;
  const w = innerWidth,
    h = innerHeight,
    scale = Math.max(w / 1536, h / 1024),
    ox = (w - 1536 * scale) / 2,
    oy = (h - 1024 * scale) / 2;
  const points = [
    [572, 260],
    [615, 252],
    [624, 309],
    [708, 307],
    [801, 318],
    [858, 364],
    [898, 429],
    [916, 472],
    [956, 480],
    [984, 463],
    [1016, 480],
    [1010, 526],
    [974, 547],
    [933, 607],
    [888, 639],
    [829, 668],
    [749, 676],
    [673, 657],
    [616, 620],
    [587, 559],
    [583, 476],
    [598, 358],
  ];
  stomachLayer.style.clipPath =
    "polygon(" +
    points
      .map(([x, y]) => `${ox + x * scale}px ${oy + y * scale}px`)
      .join(",") +
    ")";
  stomachLayer.style.transformOrigin = `${ox + 782 * scale}px ${oy + 490 * scale}px`;
  const breath = Math.sin(s.scene.time / 480);
  stomachLayer.style.transform = `scale(${1 + breath * 0.012},${1 + breath * 0.024})`;
}
const storyArt = {
  intro: "./assets/gluttony-intro-r1.webp",
  "chef-defeat": "./assets/gluttony-chef-defeat-r1.webp",
  mouth: "./assets/gluttony-mouth-r1.webp",
  "mouth-defeat": "./assets/gluttony-mouth-defeat-r1.webp",
  abyss: "./assets/gluttony-abyss-r1.webp",
  "abyss-defeat": "./assets/gluttony-abyss-defeat-r1.webp",
  body: "./assets/gluttony-body-r1.webp",
  victory: "./assets/gluttony-victory-r1.webp",
  lost: "./assets/gluttony-lost-r1.webp",
};
function ui() {
  document.documentElement.lang = prefs.lang;
  document.body.style.fontFamily =
    prefs.lang === "en"
      ? '"Pixel Latin",sans-serif'
      : '"Pixel Hant",sans-serif';
  const labels = {
    "launcher-title": ["暴食試玩", "Gluttony preview"],
    "launch-description": [
      "巨大餐桌、食物山與深淵巨口。填不滿的空虛。",
      "An immense table, mountains of food, and hunger without end.",
    ],
    "scenario-label": ["試玩內容", "Scenario"],
    "difficulty-label": ["難度", "Difficulty"],
    start: ["開始試玩", "Start preview"],
    "prototype-note": [
      "獨立試玩 · 不寫設定、通關或排行榜。七首專屬配樂已接入。",
      "Independent preview · No saved settings or progress. Seven dedicated music tracks are included.",
    ],
    "menu-title": ["試玩已暫停", "Preview paused"],
    "control-guide": [
      "方向：移動／選擇；空白：主動作；C／Shift：副動作；Bridge 上／X 右旋、Z 左旋。三消：選相鄰兩格；割繩：拖劃或選繩割；切果：拖劃或方向＋空白。逃亡：左右換道、空白／↑跳、C／Shift／↓滑；亦可滑動。合成：不限時，處決須合出西瓜；成功後普通回合合出目標大果。四連造條紋、五連造彩虹、T／L造爆破。",
      "Arrows: move / select. Space: primary. C / Shift: secondary. Bridge: Up / X rotate, Z reverse. Match: select neighbors. Ropes: swipe or select and cut. Slicer: swipe or arrows + Space. Runner: Left/Right lanes, Space/Up jump, C/Shift/Down slide; swipes also work. Fusion: no timer; make a watermelon in the execution, then reach the target fruit in ordinary rounds. Match 4: striped; 5: rainbow; T/L: wrapped.",
    ],
    resume: ["繼續遊玩", "Resume"],
    retry: ["重試這一關", "Retry scenario"],
    pick: ["返回試玩選擇", "Preview selection"],
    "touch-label": ["觸控按鈕", "Touch controls"],
    "danger-label": ["危險效果", "Danger effect"],
    "reduce-label": ["減少動態效果", "Reduce motion"],
    "music-label": ["音樂音量", "Music volume"],
    "sound-label": ["音效音量", "Effects volume"],
    "music-note": [
      "七首專屬配樂依戰鬥、小遊戲與處決切換。",
      "Seven dedicated tracks follow combat, minigames and executions.",
    ],
    "menu-return": ["返回遊戲", "Back to game"],
    "scene-continue": ["繼續", "Continue"],
    "scene-retry": ["重試", "Retry"],
    "scene-pick": ["返回試玩選擇", "Preview selection"],
  };
  if (campaign) Object.assign(labels, {
    'launcher-title':['暴食','Gluttony'], 'menu-title':['遊戲已暫停','Game paused'],
    retry:['重新挑戰','Retry encounter'], pick:['返回關卡','Boss selection'],
    'scene-pick':['返回關卡','Boss selection'], 'prototype-note':['',''],
  });
  for (const [id, p] of Object.entries(labels)) $(id).textContent = t(...p);
  const value = $("scenario").value || selected;
  $("scenario").replaceChildren(
    ...SCENARIOS.map((p) => {
      const o = document.createElement("option");
      o.value = p.id;
      o.textContent = t(...p.label);
      return o;
    }),
  );
  $("scenario").value = value;
  $("gluttony-language").value = prefs.lang;
  endingKey = "";
  controls();
}
$("difficulty").value = saved.crazyDifficulty === "hard" ? "hard" : "normal";
$("touch").value = prefs.touch;
$("danger").value = prefs.danger;
$("reduce").checked = prefs.reduced;
$("music-volume").value = prefs.music * 100;
$("sound-volume").value = prefs.sound * 100;
ui();
function unlock() {
  selectMusic();
  music.unlock();
  try {
    if (!audio) {
      audio = new AudioContext();
      const create = audio.createOscillator.bind(audio);
      audio.createOscillator = () => {
        const node = create();
        activeTones.add(node);
        node.addEventListener("ended", () => activeTones.delete(node));
        return node;
      };
    }
    if (!sfx) {
      sfx = audio.createGain();
      sfx.connect(audio.destination);
    }
    audio.resume();
    sfx.gain.value = prefs.sound;
  } catch {}
}
function silence() {
  music.pause();
  for (const node of activeTones) {
    try {
      node.stop();
    } catch {}
  }
  activeTones.clear();
  if (audio) {
    sfx.gain.value = 0;
    audio.suspend();
  }
}
function tone(freq, length = 0.12) {
  if (!audio || audio.state !== "running" || !prefs.sound || paused) return;
  const o = audio.createOscillator(),
    g = audio.createGain(),
    now = audio.currentTime;
  o.type = "sine";
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, now);
  g.gain.linearRampToValueAtTime(0.075, now + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, now + length);
  o.connect(g);
  g.connect(sfx);
  o.start(now);
  o.stop(now + length + 0.015);
}
function stopHeld() {
  if (s) release(s);
  pointer = null;
}
function fit() {
  const touch = touchControlsEnabled(prefs.touch),
    w = innerWidth,
    h = visualViewport?.height || innerHeight,
    wide = w > h && h < 620,
    H = height(s);
  document.querySelector(".pads").hidden = !touch;
  document.body.classList.toggle("desktop", !touch);
  document.body.classList.toggle("wide", wide);
  const available = wide
      ? h - 6
      : touch
        ? h - 298
        : w < 620
          ? h - 164
          : h - 120,
    max = wide ? Math.min(310, w * 0.43) : Math.min(310, w - 62);
  const hh = Math.max(100, Math.min(available, (max * H) / 280));
  wrap.style.width = (hh * 280) / H + "px";
  wrap.style.height = hh + "px";
  if (board.height !== H) {
    board.height = H;
    frame.height = H;
    overlay.height = H;
  }
  cat();
}
function controls() {
  if (!s) return;
  const bridge = s.mode === "bridge",
    blocked = !!s.scene || s.over || s.round.done;
  for (const id of [
    "left",
    "right",
    "up",
    "down",
    "rotate-left",
    "action",
    "alt",
  ])
    $(id).disabled = blocked;
  const primary = {
    snake: ["轉向", "Steer"],
    match: ["交換", "Swap"],
    execution: ["交換", "Swap"],
    merge: ["落果", "Drop"],
    rope: ["割繩", "Cut"],
    slice: ["切", "Slice"],
    gravity: ["抓住", "Grip"],
    escape: ["跳躍", "Jump"],
  };
  $("action").querySelector("span").textContent = bridge
    ? t("落", "Drop")
    : t(...(primary[s.mode] || ["反攻", "Counter"]));
  if (s.mode === "snake") $("action").disabled = true;
  const secondary = {
    match: ["取消", "Cancel"],
    execution: ["取消", "Cancel"],
    merge: ["換果", "Swap"],
    rope: ["重擺", "Reset"],
    gravity: ["放手", "Release"],
    escape: ["滑行", "Slide"],
  };
  $("alt").querySelector("span").textContent = bridge
    ? t("留", "Hold")
    : t(...(secondary[s.mode] || ["—", "—"]));
  $("alt").disabled = blocked || (!bridge && !secondary[s.mode]);
  $("up").querySelector("span").textContent = bridge
    ? t("右旋", "Rotate")
    : t("上移", "Up");
  $("down").querySelector("span").textContent = bridge
    ? t("降", "Soft")
    : t("下移", "Down");
  $("rotate-left").hidden = !bridge;
  $("rotate-left").querySelector("span").textContent = t("左旋", "CCW");
  if (s.mode === "escape") {
    $("up").querySelector("span").textContent = t("跳躍", "Jump");
    $("down").querySelector("span").textContent = t("滑行", "Slide");
  }
  if (["rope", "merge"].includes(s.mode)) {
    $("up").disabled = true;
    $("down").disabled = true;
  }
}
function cat() {
  const el = $("gluttony-cat");
  el.hidden = !s || !$("launcher").hidden;
  if (el.hidden) return;
  const w = innerWidth,
    h = innerHeight,
    wide = document.body.classList.contains("wide"),
    touch = !document.querySelector(".pads").hidden,
    ending = !$("ending-screen").hidden;
  let width = w < 620 ? 124 : 146,
    x,
    y;
  const photo = el.querySelector("img"),
    ratio = photo.naturalWidth / photo.naturalHeight || 1.8;
  if (ending) {
    x = 16;
    y = $("ending-footer").getBoundingClientRect().top - width / ratio - 12;
  } else if (wide && touch) {
    width = 130;
    x = 20;
    y =
      Math.min(
        $("rotate-left").hidden
          ? 999
          : $("rotate-left").getBoundingClientRect().top,
        $("left").getBoundingClientRect().top,
      ) -
      width / ratio -
      15;
  } else if (touch) {
    width = w < 620 ? 124 : 136;
    const rect = wrap.getBoundingClientRect();
    x = (w - width) / 2;
    y = rect.bottom + 4;
  } else {
    const rect = wrap.getBoundingClientRect();
    if (w < 620) {
      x = (w - width) / 2;
      y = Math.min(h - width / ratio - 12, rect.bottom + 12);
    } else {
      x = Math.max(16, rect.left - width - 20);
      y = Math.min(h - width / ratio - 16, rect.bottom - width / ratio - 18);
    }
  }
  el.style.width = width + "px";
  el.style.left = Math.max(4, x) + "px";
  el.style.top = Math.max(44, Math.min(y, h - width / ratio - 4)) + "px";
  el.classList.toggle("gift", s.catTime > 0);
  drawPhotoCat($("cat-photo-motion"), photo, s, { reduced: prefs.reduced });
}
function presentation() {
  const story = s?.scene,
    screen = $("ending-screen"),
    show = !!story && $("launcher").hidden;
  screen.hidden = !show;
  document.body.classList.toggle("ending-page", show);
  const actions = $("scene-actions");
  actions.hidden = !show;
  if (show) {
    $("ending-footer").append(actions);
    let p = stories[story.kind];
    if (story.kind === "result")
      p = [
        s.round.success ? "反攻成功" : "挑戰未完成",
        s.round.success ? "Counter successful" : "Challenge incomplete",
        s.stage === 1 ? "intro" : s.stage === 2 ? "mouth" : "abyss",
        s.round.id === "execution" && !s.round.success
          ? "已扣 80 HP，稍後重試。"
          : s.round.id === "escape" && !s.round.success
            ? "已扣 60 HP，稍後重試。"
            : "即將繼續。",
        s.round.id === "execution" && !s.round.success
          ? "80 HP lost. The trial will return."
          : s.round.id === "escape" && !s.round.success
            ? "60 HP lost. The trial will return."
            : "Continuing shortly.",
      ];
    p ??= stories.intro;
    const key = story.kind + prefs.lang + Boolean(s.round.success);
    if (key !== endingKey) {
      endingKey = key;
      $("ending-art").src = storyArt[p[2]];
      $("ending-title").textContent = t(p[0], p[1]);
      $("ending-caption").textContent = t(p[3], p[4]);
      if (campaign && s.won) $("ending-caption").textContent += ' · ' + s.difficulty + ' · ' + t('分數 ', 'Score ') + gluttonyScore(s);
    }
    const terminal = s.over || s.scenario.story;
    $("scene-continue").hidden = terminal;
    $("scene-retry").hidden = !terminal;
    $("scene-pick").hidden = !terminal;
  }
  stomachMotion();
  cat();
}
function start() {
  if (campaign && !gluttonyUnlocked(campaignStorage)) {returnToBosses(); return;}
  music.reset();
  stopHeld();
  selected = $("scenario").value;
  s = createGluttony({ scenario: campaign ? 'full' : selected, difficulty: $("difficulty").value,
    preview: !campaign, filming: campaign && filmingEnabled() });
  paused = false;
  $("launcher").hidden = true;
  $("menu").hidden = true;
  endingKey = "";
  themeKey = "";
  previousRound = null;
  lastSoundStats = { damage: 0, taken: 0, score: 0 };
  resetCombatEffects(fx, s);
  unlock();
  fit();
  render(0);
  wake();
}
$("launch-form").onsubmit = (e) => {
  e.preventDefault();
  start();
};
function openMenu() {
  if (!s) return;
  paused = true;
  stopHeld();
  silence();
  $("menu").hidden = false;
  render(0);
}
function resume() {
  paused = false;
  $("menu").hidden = true;
  unlock();
  last = performance.now();
  wake();
}
function pick() {
  if (campaign) {silence(); returnToBosses(); return;}
  paused = true;
  stopHeld();
  silence();
  $("menu").hidden = true;
  $("launcher").hidden = false;
  $("ending-screen").hidden = true;
  document.body.classList.remove("ending-page");
  $("gluttony-cat").hidden = true;
}
$("menu-button").onclick = openMenu;
$("resume").onclick = resume;
$("menu-return").onclick = resume;
$("retry").onclick = start;
$("pick").onclick = pick;
$("scene-continue").onclick = () => {
  unlock();
  continueScene(s);
  fit();
  render(0);
  wake();
};
$("scene-retry").onclick = start;
$("scene-pick").onclick = pick;
$("gluttony-language").onchange = (e) => {
  prefs.lang = e.target.value;
  savePreferences({languageChanged:true});
  ui();
  render(0);
};
$("touch").onchange = (e) => {
  stopHeld();
  prefs.touch = e.target.value;
  savePreferences();
  fit();
  render(0);
};
$("danger").onchange = (e) => {
  prefs.danger = e.target.value;
  savePreferences();
  render(0);
};
$("reduce").onchange = (e) => {
  prefs.reduced = e.target.checked;
  render(0);
};
$("music-volume").oninput = (e) => {prefs.music = e.target.value / 100; savePreferences();};
$("sound-volume").oninput = (e) => {
  prefs.sound = e.target.value / 100;
  savePreferences();
  if (sfx) sfx.gain.value = paused ? 0 : prefs.sound;
};
const keymap = {
  ArrowLeft: "left",
  ArrowRight: "right",
  ArrowUp: "up",
  ArrowDown: "down",
  Space: "action",
  KeyC: "alt",
  ShiftLeft: "alt",
  ShiftRight: "alt",
  KeyZ: "rotateLeft",
  KeyX: "up",
};
addEventListener("keydown", (e) => {
  if (
    e.target instanceof HTMLSelectElement ||
    e.target instanceof HTMLInputElement ||
    !$("launcher").hidden
  )
    return;
  if (e.code === "Escape") {
    e.preventDefault();
    if (!$("menu").hidden) resume();
    else openMenu();
    return;
  }
  if (keymap[e.code] && s && !paused) {
    e.preventDefault();
    unlock();
    input(s, keymap[e.code], true);
  }
});
addEventListener("keyup", (e) => {
  if (keymap[e.code] && s) input(s, keymap[e.code], false);
});
addEventListener("blur", () => {
  stopHeld();
  if (s && $("launcher").hidden) openMenu();
});
for (const id of [
  "left",
  "right",
  "up",
  "down",
  "rotate-left",
  "action",
  "alt",
]) {
  const el = $(id),
    key = id === "rotate-left" ? "rotateLeft" : id;
  el.onpointerdown = (e) => {
    if (paused || el.disabled) return;
    e.preventDefault();
    unlock();
    el.setPointerCapture(e.pointerId);
    input(s, key, true, "touch");
  };
  for (const event of ["pointerup", "pointercancel", "lostpointercapture"])
    el.addEventListener(event, () => {
      if (s) input(s, key, false);
    });
  if (id !== "action")
    el.onpointerleave = () => {
      if (s) input(s, key, false);
    };
}
const coord = (e) => {
  const r = board.getBoundingClientRect();
  return [
    ((e.clientX - r.left) * 280) / r.width,
    ((e.clientY - r.top) * height(s)) / r.height,
  ];
};
board.onpointerdown = (e) => {
  if (!s || paused || s.scene || s.mode === "bridge") return;
  e.preventDefault();
  unlock();
  pointer = e.pointerId;
  board.setPointerCapture(pointer);
  point(s, ...coord(e), "start");
};
board.onpointermove = (e) => {
  if (pointer !== e.pointerId || !s || paused || s.scene) return;
  point(s, ...coord(e), "move");
};
for (const event of ["pointerup", "pointercancel", "lostpointercapture"])
  board.addEventListener(event, (e) => {
    if (pointer !== e.pointerId || !s) return;
    point(s, ...coord(e), event === "pointerup" ? "end" : "cancel");
    pointer = null;
  });
document.addEventListener("visibilitychange", () => {
  if (document.hidden && s && $("launcher").hidden) openMenu();
});
addEventListener("resize", () => {
  stopHeld();
  fit();
  if (s) render(0);
});
visualViewport?.addEventListener("resize", () => {
  fit();
  if (s) render(0);
});
function render(dt) {
  if (!s) return;
  const H = height(s);
  if (board.height !== H) fit();
  if (themeKey !== s.mode) {
    themeKey = s.mode;
    const p = theme(s);
    document.body.style.setProperty("--task-base", p.base);
    document.body.style.setProperty("--task-field", p.field);
    document.body.style.setProperty("--task-accent", p.accent);
  }
  draw(c, s, { lang: prefs.lang, reduced: prefs.reduced });
  drawFrame(fc, s);
  const layout = {
    height: H,
    boss: s.mode === "escape" ? null : { x: 140, y: 65 },
    player: {
      x: s.mode === "bridge" ? 140 : s.round.x,
      y: s.mode === "bridge" ? 600 : s.round.y,
    },
    color: "#ffe0a6",
  };
  updateCombatEffects(fx, s, dt, {
    paused,
    reducedMotion: prefs.reduced,
    layout,
  });
  drawCombatEffects(fxc, fx, { reducedMotion: prefs.reduced });
  if (campaign) recordCampaign(s);
  const nav = document.querySelector(".nav small");
  nav.textContent = s.hp <= 25 ? "WARNING" : "CRAZY · GLUTTONY · 1.2.38";
  nav.style.color = s.hp <= 25 ? "#ff5b78" : "";
  wrap.classList.toggle("danger", s.hp <= 25);
  wrap.classList.toggle(
    "shake",
    s.hp <= 25 && prefs.danger === "shake" && !prefs.reduced && !paused,
  );
  controls();
  presentation();
}
function tick(now) {
  raf = 0;
  const dt = Math.min(50, now - last);
  last = now;
  if (s && !paused) {
    const before = s.round,
      duration = before.duration,
      remaining = duration - before.clock;
    update(s, dt);
    if (audio && audio.state === "running") {
      sfx.gain.value = prefs.sound;
      const puzzle = ["match", "rope"].includes(before.id);
      if (puzzle && s.round === before) {
        const cue = countdownCue(
          remaining,
          duration - before.clock,
          before.done && before.success,
          previousRound !== before,
        );
        if (cue && prefs.sound && (!s.scene || cue === "end"))
          playCountdownTone(audio, sfx, COUNTDOWN_TONES[cue]);
      }
      if (s.stats.damageTaken > lastSoundStats.taken) tone(180, 0.2);
      else if (
        s.stats.damage > lastSoundStats.damage ||
        (s.round === before && s.round.score > lastSoundStats.score)
      )
        tone(660);
      lastSoundStats = {
        damage: s.stats.damage,
        taken: s.stats.damageTaken,
        score: s.round.score,
      };
    }
    previousRound = s.round;
    if (s.scene?.kind === "lost") music.pause();
    else {selectMusic(); music.tick(dt);}
    render(dt);
  }
  if (
    s &&
    !paused &&
    !document.hidden &&
    ((!s.over && (!s.scenario.story || (s.scene?.kind === "body" && !prefs.reduced))) ||
      now < musicFadeUntil)
  )
    raf = requestAnimationFrame(tick);
}
function wake() {
  if (!raf) {
    last = performance.now();
    raf = requestAnimationFrame(tick);
  }
}
addEventListener("storage", (e) => {
  if (e.key !== "bridge-settings") return;
  try {
    const v = JSON.parse(e.newValue || "{}");
    prefs.lang = ["zh", "zh-Hant", "zh-Hans"].includes(v.lang)
      ? "zh-Hant"
      : "en";
    prefs.touch = v.touch || "auto";
    prefs.danger = v.dangerEffect === "shake" ? "shake" : "warning";
    prefs.music = vol(v.bgmVolume ?? v.volume);
    prefs.sound = vol(v.sfxVolume ?? v.volume);
    document.body.dataset.theme = v.theme === "light" ? "light" : "dark";
    $("touch").value = prefs.touch;
    $("danger").value = prefs.danger;
    $("music-volume").value = prefs.music * 100;
    $("sound-volume").value = prefs.sound * 100;
    ui();
    fit();
    render(0);
  } catch {}
});
$("gluttony-cat")
  .querySelector("img")
  .addEventListener("load", () => {
    fit();
    if (s) render(0);
  });
fit();

if (campaign) {
  const requested = new URLSearchParams(location.search).get('difficulty');
  if (requested) $('difficulty').value = requested === 'hard' ? 'hard' : 'normal';
  if (gluttonyUnlocked(campaignStorage)) start(); else returnToBosses();
}
