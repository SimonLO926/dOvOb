import { cellsOf, ghostY } from "../logic.mjs";
import {
  configureBridgePaint,
  drawGridCells,
  paintPiece,
} from "../envy/bridge-paint.mjs";
import { avatar } from "../pride-visuals.mjs";
import { food } from "./art.mjs";
import { FRUITS } from "./games.mjs";
import { names, bossFloor } from "./engine.mjs";
export const height = (s) => (s?.mode === "bridge" ? 720 : 600);
export const palettes = {
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
  burst: ["#312b3c", "#493546", "#ffb28b"],
};
export function theme(s) {
  const p = palettes[s?.mode] || palettes.bridge;
  return { base: p[0], field: p[1], accent: p[2] };
}
export function text(c, v, x, y, size = 12, color = "#f5dfb4", max = 252) {
  c.fillStyle = color;
  c.font = `${size}px "Pixel Latin", "Pixel Hant",sans-serif`;
  c.textAlign = "center";
  c.fillText(v, x, y, max);
}
const box = (c, x, y, w, h, color) => {
  c.fillStyle = color;
  c.fillRect(x, y, w, h);
};
const heart = (c, x, y, scale = 1) => {
  c.save();
  c.translate(x, y);
  c.scale(scale, scale);
  avatar(c, 0, 0, "#ff5178", 1);
  c.restore();
};
const pair = (lang, p) => p[lang === "zh-Hant" ? 0 : 1];
export const hints = {
  snake: [
    "吃果加分；穿邊，避開自己，玩到時間完",
    "Eat for score; wrap edges, avoid your tail",
  ],
  match: ["相鄰交換；三個同款才有效", "Swap neighbors; match three alike"],
  execution: [
    "步數內收蘋果並清果凍；四連造特糖",
    "Collect apples + jelly; match four for specials",
  ],
  merge: [
    "合出西瓜才完成；左右瞄準、空白落果",
    "Make a watermelon; aim, Space drops",
  ],
  rope: ["左右選繩，空白割；C 重擺", "Select ← →, Space cuts; C resets"],
  slice: [
    "拖曳切果避炸彈；方向＋空白切",
    "Swipe fruit, avoid bombs; arrows + Space",
  ],
  gravity: [
    "反向跑；近桌腿空白抓住，C 放手",
    "Run away; Space grips post, C releases",
  ],
  ricochet: [
    "避開反彈碎屑；近金糖空白反攻",
    "Dodge bouncing scraps; counter near candy",
  ],
  floor: [
    "避紅色啃咬；中路永遠連通",
    "Avoid red bites; center stays connected",
  ],
  escape: [
    "左右換道，空白跳，C 滑行；可滑動",
    "Change lanes; Space jumps, C slides; swipe",
  ],
  burst: [
    "避碎屑；巨口張開時近金糖反攻",
    "Dodge; counter near gold candy when open",
  ],
};
const feedback = {
  "snake-bonus": [
    "已達標 · 時間內繼續加分",
    "Goal reached · Keep scoring until time ends",
  ],
  complete: ["挑戰完成 · 返回戰鬥", "Complete · Returning to battle"],
  incomplete: ["未完成 · 返回戰鬥", "Incomplete · Returning to battle"],
  success: ["成功反攻", "Counter landed"],
  invalid: ["須交換相鄰且連成三個", "Make a line of three with neighbors"],
  reshuffle: ["無解盤面重新洗牌", "No moves — board reshuffled"],
  merge: ["合成成功", "Fruit merged"],
  cut: ["繩已割斷", "Rope cut"],
  miss: ["食糖落空 · C 重擺", "Candy missed · C resets"],
  bomb: ["炸彈受擊", "Bomb hit"],
  counter: ["反攻命中", "Counter hit"],
  hit: ["受擊", "Hit"],
};
export function draw(c, s, { lang = "en", reduced = false } = {}) {
  const h = height(s),
    m = s.round,
    p = theme(s),
    zh = lang === "zh-Hant";
  c.clearRect(0, 0, 280, h);
  box(c, 0, 108, 280, h - 108, p.base);
  const bossName =
    s.stage === 1
      ? pair(lang, ["無飽廚師", "Ravenous chef"])
      : s.stage === 2
        ? pair(lang, ["噬宴巨口", "Feasting maw"])
        : pair(lang, ["深淵巨口", "Abyss maw"]);
  text(c, "BOSS · " + bossName, 140, 110, 13);
  box(c, 24, 120, 232, 6, "#3c4248");
  box(c, 24, 120, (232 * s.bossHp) / s.bossMaxHp, 6, "#e0b077");
  const lock = s.bossHp <= bossFloor(s) + 0.01 && bossFloor(s) > 0;
  const status = lock
    ? pair(lang, ["鎖血 · 完成挑戰", "SEALED · Complete the challenge"])
    : s.stage === 1
      ? pair(lang, [`盛宴 ${s.played.filter(id => id !== "merge").length}/4`, `Feast ${s.played.filter(id => id !== "merge").length}/4`])
      : s.retry
        ? pair(lang, ["挑戰稍後重試", "Trial will return soon"])
        : "";
  text(
    c,
    s.notice?.time > 0
      ? pair(
          lang,
          s.notice.success
            ? ["反攻成功", "Counter successful"]
            : ["未完成 · 可重試", "Incomplete · Retry available"],
        )
      : status,
    140,
    143,
    10,
    "#bddeea",
  );
  if (m.id === "bridge") {
    configureBridgePaint(reduced);
    box(c, 10, 150, 260, 516, "#7c634e");
    box(c, 12, 152, 256, 512, "#131b26");
    c.save();
    c.translate(12, 152);
    c.scale(256 / 280, 256 / 280);
    if (!s.curses.blind) drawGridCells(c, s.bridge.grid, new Set(), 28);
    if (s.bridge.active && s.bridge.phase === "playing") {
      paintPiece(c, { ...s.bridge.active, y: ghostY(s.bridge) }, true);
      paintPiece(c, s.bridge.active);
    }
    c.restore();
    text(c, zh ? "留" : "HOLD", 40, 37, 10, "#ffe2ad", 58);
    text(c, zh ? "下一個" : "NEXT", 240, 37, 10, "#ffe2ad", 58);
    const preview = (piece, x, y) => {
      if (!piece) return;
      const cells = cellsOf(piece.type, 0, 0, 0);
      c.save();
      c.translate(x, y);
      c.scale(6 / 28, 6 / 28);
      paintPiece(c, {
        ...piece,
        rot: 0,
        x: -Math.min(...cells.map((a) => a[0])),
        y: -Math.min(...cells.map((a) => a[1])),
      });
      c.restore();
    };
    preview(s.bridge.hold, 26, 53);
    s.bridge.queue.slice(0, 3).forEach((v, i) => preview(v, 226, 49 + i * 21));
  } else {
    box(c, 12, 152, 256, 340, p.field);
    box(c, 12, 152, 256, 3, p.accent);
    const match = ["match", "execution"].includes(m.id);
    text(c, pair(lang, names[m.id]), 140, match ? 164 : 171, 13, p.accent);
    let progress =
      m.id === "snake"
        ? pair(lang, [
            `得分 ${m.score} · 目標 ${m.target}`,
            `Score ${m.score} · Goal ${m.target}`,
          ])
        : `${m.score}/${m.target}`;
    if (match) {
      if (m.id === "execution") {
        progress = pair(lang, [
          `蘋果 ${m.collected}/${m.target} · 果凍 ${m.jellyCleared}/${m.jellyTarget}`,
          `Apples ${m.collected}/${m.target} · Jelly ${m.jellyCleared}/${m.jellyTarget}`,
        ]);
        text(c, progress, 140, 180, 11, "#f1e4ce");
        progress = pair(lang, [`剩餘 ${m.moves} 步`, `${m.moves} moves left`]);
      } else
        progress = `${m.score}/${m.target} · ${m.moves}${zh ? "步" : " moves"}`;
    } else if (m.id === "merge")
      progress =
        pair(lang, [
          m.execution ? (m.watermelon ? "西瓜合成成功" : "處決：真正合出西瓜") : (m.target === 6 ? "目標：合出綠色大果" : "目標：合出金色大果"),
          m.execution ? (m.watermelon ? "Watermelon made" : "Execution: make a watermelon") : (m.target === 6 ? "Goal: make the large green fruit" : "Goal: make the large golden fruit"),
        ]) +
        (m.watermelon ? "" : " · C " + (m.swaps ? "◆".repeat(m.swaps) : "—"));
    else if (m.id === "escape") progress = `${Math.floor(m.distance)}%`;
    else if (["gravity", "ricochet", "floor", "burst"].includes(m.id))
      progress =
        m.id === "burst"
          ? pair(lang, [
              m.burstOpen ? "巨口張開 · 反攻" : "等待巨口張開",
              m.burstOpen ? "Maw open · Counter" : "Wait for the maw to open",
            ])
          : pair(lang, ["存活並反攻", "Survive and counter"]);
    text(
      c,
      progress +
        (Number.isFinite(m.duration) && m.id !== "ricochet"
          ? ` · ${Math.max(0, Math.ceil((m.duration - m.clock) / 1000))}s`
          : ""),
      140,
      match ? 197 : 190,
      11,
      "#f1e4ce",
    );
    drawGame(c, s, lang, reduced);
    text(c, pair(lang, m.id === "merge" && !m.execution ? ["普通合成：不限時，合出目標大果", "Fusion reprise: no timer, reach the target fruit"] : hints[m.id]), 140, 513, 10, "#c9e0e6");
    if (m.feedbackTime > 0)
      text(
        c,
        m.feedback === "chain"
          ? pair(lang, [`連鎖 ×${m.chain}`, `Cascade ×${m.chain}`])
          : pair(lang, feedback[m.feedback] || ["", ""]),
        140,
        535,
        11,
        p.accent,
      );
    else if (m.id === "snake" && m.score >= m.target && !m.done)
      text(
        c,
        pair(lang, ["已達標 · 繼續加分", "Goal reached · Keep scoring"]),
        140,
        535,
        11,
        p.accent,
      );
  }
  text(c, `HP ${Math.ceil(s.hp)}/${s.maxHp}`, 140, h - 38, 12, "#ffbdcf");
  box(c, 24, h - 25, 232, 6, "#4b3341");
  box(c, 24, h - 25, (232 * s.hp) / s.maxHp, 6, "#ff5178");
  if (s.hp <= 25) text(c, "WARNING", 140, h - 10, 10, "#ff697d");
}
function drawGame(c, s, lang, reduced) {
  const m = s.round,
    zh = lang === "zh-Hant";
  c.save();
  c.beginPath();
  c.rect(20, 202, 240, 285);
  c.clip();
  if (m.id === "snake") {
    box(c, 30, 204, 220, 276, "#112e31");
    for (let y = 0; y < 15; y++)
      for (let x = 0; x < 12; x++)
        box(
          c,
          32 + x * 18,
          207 + y * 18,
          17,
          17,
          (x + y) % 2 ? "#183b3a" : "#1a3e3c",
        );
    m.snake.forEach(([x, y], i) => {
      if (i === 0) heart(c, 40 + x * 18, 215 + y * 18, 0.8);
      else {
        box(c, 33 + x * 18, 208 + y * 18, 15, 15, "#66c9b0");
        box(c, 36 + x * 18, 211 + y * 18, 7, 4, "#b6f2c2");
      }
    });
    if (m.food) food(c, 40 + m.food[0] * 18, 215 + m.food[1] * 18, 0, 9);
  }
  if (["match", "execution"].includes(m.id)) drawMatch(c, m, reduced);
  if (m.id === "merge") {
    box(c, 24, 239, 232, 240, "#211f27");
    for (const o of m.fruits) drawFruit(c, o);
    c.strokeStyle = m.topTime ? "#ff657a" : "#e7b485";
    c.setLineDash([5, 4]);
    c.beginPath();
    c.moveTo(25, 238);
    c.lineTo(255, 238);
    c.stroke();
    c.setLineDash([]);
    drawFruit(c, { x: m.aim, y: 219, level: m.next });
    c.strokeStyle = "#d9c99d";
    c.beginPath();
    c.moveTo(m.aim, 236);
    c.lineTo(m.aim, 257);
    c.stroke();
  }
  if (m.id === "rope") {
    box(c, 24, 206, 232, 274, "#182d3d");
    if (m.wall) {
      box(c, m.wall.x, m.wall.y, m.wall.w, m.wall.h, "#d65c6b");
      box(c, m.wall.x + 4, m.wall.y + 2, m.wall.w - 8, 3, "#f89b8e");
    }
    for (let i = 0; i < m.ropes.length; i++) {
      const r = m.ropes[i];
      if (r.cut) continue;
      c.strokeStyle = i === m.selected ? "#ffe38b" : "#a6bfd0";
      c.lineWidth = i === m.selected ? 3 : 2;
      c.beginPath();
      c.moveTo(r.x, r.y);
      c.lineTo(m.candy.x, m.candy.y);
      c.stroke();
      box(c, r.x - 5, r.y - 5, 10, 10, "#b18261");
      text(c, String(i + 1), r.x, r.y + 17, 10);
    }
    for (const star of m.stars)
      if (!star.taken) {
        text(c, "★", star.x, star.y, 20, "#f5db85");
      }
    food(c, m.candy.x, m.candy.y, 1, 10);
    box(c, m.receiver.x - 23, m.receiver.y - 8, 46, 24, "#47aab4");
    box(c, m.receiver.x - 19, m.receiver.y - 4, 38, 11, "#0d2733");
    for (let i = 0; i < 5; i++)
      box(c, m.receiver.x - 16 + i * 7, m.receiver.y - 5, 4, 4, "#f9e2ab");
    heart(c, m.receiver.x, m.receiver.y + 22, 0.45);
  }
  if (m.id === "slice") {
    box(c, 24, 205, 232, 277, "#34262d");
    for (const o of m.objects) {
      if (o.hit) continue;
      if (o.bomb) {
        c.fillStyle = "#182638";
        c.beginPath();
        c.arc(o.x, o.y, 12, 0, Math.PI * 2);
        c.fill();
        text(c, "!", o.x, o.y + 5, 14, "#ffb38d");
        box(c, o.x + 2, o.y - 18, 3, 8, "#ffd398");
      } else food(c, o.x, o.y, o.type, 12);
    }
    for (const o of m.sliceEffects) {
      if (reduced && o.kind !== "half") continue;
      c.save();
      c.globalAlpha = Math.min(1, (o.life - o.age) / 180);
      c.translate(o.x, o.y);
      c.rotate(o.angle);
      if (o.kind === "half") {
        c.save();
        c.beginPath();
        c.rect(-o.r - 3, o.side > 0 ? 0 : -o.r - 3, o.r * 2 + 6, o.r + 3);
        c.clip();
        food(c, 0, 0, o.type, o.r);
        c.restore();
        c.fillStyle = ["#ffe0bb", "#fff2b2", "#edcbff", "#ffd9a2", "#ff8799"][
          o.type % 5
        ];
        c.beginPath();
        c.ellipse(0, 0, o.r * 0.82, 3, 0, 0, Math.PI * 2);
        c.fill();
        for (const x of [-4, 0, 4]) box(c, x, -1, 2, 2, "#76424c");
      } else {
        box(c, -2, -2, o.kind === "juice" ? 3 : 4, 3, o.color);
      }
      c.restore();
    }
    for (const o of m.slashes) {
      const alpha = 1 - o.age / 210;
      c.globalAlpha = alpha;
      c.strokeStyle = "#66d8ef";
      c.lineWidth = reduced ? 2 : 7;
      c.beginPath();
      c.moveTo(o.a.x, o.a.y);
      c.lineTo(o.b.x, o.b.y);
      c.stroke();
      c.strokeStyle = "#fff7d7";
      c.lineWidth = 2;
      c.stroke();
    }
    c.globalAlpha = 1;
    c.strokeStyle = "#fff0c5";
    c.lineWidth = 2;
    c.beginPath();
    m.trail.forEach((o, i) => c[i ? "lineTo" : "moveTo"](o.x, o.y));
    c.stroke();
    c.strokeStyle = "#a4dcf2";
    c.lineWidth = 1;
    c.strokeRect(m.cursor.x - 17, m.cursor.y - 17, 34, 34);
  }
  if (m.id === "gravity") {
    box(c, 24, 232, 232, 247, "#182f3a");
    mouth(c, 140, 226, m.pulling ? 38 : 25);
    for (const a of m.anchors) {
      box(c, a.x - 8, a.y - 31, 16, 58, "#8f7152");
      box(c, a.x - 5, a.y - 29, 4, 54, "#c9a273");
      if (m.anchor === a) {
        c.strokeStyle = "#ffe5a7";
        c.strokeRect(a.x - 12, a.y - 34, 24, 62);
      }
    }
    if (m.pulling) {
      c.strokeStyle = "#91dee7";
      c.lineWidth = 2;
      for (let i = 0; i < 4; i++) {
        const x = 45 + i * 62;
        c.beginPath();
        c.moveTo(x, 351);
        c.lineTo(140 + (x - 140) * 0.5, 284);
        c.stroke();
      }
    }
    heart(c, m.x, m.y, 0.8);
    text(
      c,
      zh
        ? m.anchor
          ? "已抓住"
          : "抓桌腿抵抗"
        : m.anchor
          ? "GRIPPED"
          : "GRIP A TABLE LEG",
      140,
      472,
      9,
      "#d8eadb",
    );
  }
  if (["ricochet", "floor", "burst"].includes(m.id)) {
    box(c, 24, 235, 232, 246, "#242835");
    if (m.id === "floor") {
      for (let y = 0; y < 5; y++)
        for (let x = 0; x < 5; x++) {
          box(c, 30 + x * 44, 244 + y * 44, 40, 40, "#536447");
          box(c, 32 + x * 44, 246 + y * 44, 36, 2, "#829365");
        }
      for (const o of m.floor) {
        box(c, o.x, o.y, 40, 40, o.active ? "#0a1724" : "#78444a");
        if (!o.active) {
          c.strokeStyle = "#ff7980";
          c.lineWidth = 3;
          c.strokeRect(o.x + 2, o.y + 2, 36, 36);
          text(c, "!", o.x + 20, o.y + 25, 18, "#ffcfaa");
        } else {
          for (let i = 0; i < 3; i++)
            box(c, o.x + i * 13 + 2, o.y + 2, 8, 4, "#decaa8");
        }
      }
    } else {
      mouth(c, 140, 228, m.id === "burst" && m.burstOpen ? 34 : 24);
      for (const o of m.objects) {
        food(c, o.x, o.y, o.type, 9);
      }
    }
    if (m.counter.ready) {
      food(c, m.counter.x, m.counter.y, 1, 13);
      c.strokeStyle = "#ffdf87";
      c.lineWidth = 2;
      c.strokeRect(m.counter.x - 17, m.counter.y - 16, 34, 32);
      text(c, "↗", m.counter.x, m.counter.y - 23, 12, "#ffedb1");
    }
    heart(c, m.x, m.y, 0.8);
  }
  if (m.id === "escape") drawRunner(c, m, zh, reduced);
  c.restore();
}
function mouth(c, x, y, r) {
  box(c, x - r, y - 10, r * 2, 28, "#7b4a3b");
  box(c, x - r + 6, y - 7, r * 2 - 12, 20, "#13232e");
  for (let i = 0; i < 5; i++)
    box(c, x - r + 8 + (i * (r * 2 - 16)) / 5, y - 7, 6, 5, "#f4e4c5");
}
function drawFruit(c, o) {
  const f = FRUITS[o.level];
  c.fillStyle = "#101d27";
  c.beginPath();
  c.arc(o.x, o.y, f.r + 1, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = f.color;
  c.beginPath();
  c.arc(o.x, o.y, f.r, 0, Math.PI * 2);
  c.fill();
  box(
    c,
    o.x - f.r * 0.45,
    o.y - f.r * 0.5,
    Math.max(3, f.r * 0.4),
    Math.max(3, f.r * 0.2),
    "#ffecbe",
  );
  if (o.level === 7) {
    c.strokeStyle = "#277865";
    c.lineWidth = 3;
    for (let i = -1; i <= 1; i++) {
      c.beginPath();
      c.ellipse(
        o.x + i * f.r * 0.4,
        o.y,
        f.r * 0.2,
        f.r * 0.9,
        0,
        0,
        Math.PI * 2,
      );
      c.stroke();
    }
  } else {
    box(c, o.x - 1, o.y - f.r - 3, 3, 5, "#638c5a");
  }
}
export const stories = {
  intro: [
    "永遠吃不飽",
    "Never enough",
    "intro",
    "他嚐過每一道菜，卻從未嚐到滿足。",
    "He tasted every dish, but never satisfaction.",
  ],
  "chef-defeat": [
    "盛宴散盡",
    "The feast crumbles",
    "chef-defeat",
    "空虛吞掉了廚師的形體。",
    "Emptiness devours the chef’s form.",
  ],
  mouth: [
    "噬宴巨口",
    "The feasting maw",
    "mouth",
    "餐桌也成了下一道菜。",
    "Even the table becomes another serving.",
  ],
  "mouth-defeat": [
    "巨口崩裂",
    "The maw breaks",
    "mouth-defeat",
    "越吃越大，仍然飢餓。",
    "Growing larger, still hungry.",
  ],
  abyss: [
    "深淵巨口",
    "The abyss opens",
    "abyss",
    "空虛開始吞噬整個盛宴。",
    "Emptiness consumes the whole feast.",
  ],
  "execution-start": [
    "最後一餐",
    "Last serving",
    "mouth",
    "步數內收蘋果、清果凍；失敗扣 80 HP。",
    "Collect apples and clear jelly within the moves. Failure costs 80 HP.",
  ],
  "watermelon-start": [
    "廚師的最後一餐", "The chef’s last serving", "intro",
    "不限時，真正合出西瓜才解鎖；失敗扣 80 HP。",
    "No timer. Make a watermelon to unlock fusion. Failure costs 80 HP.",
  ],
  "escape-start": [
    "逃出食道",
    "Escape the gullet",
    "abyss",
    "換道、跳躍、滑行，在巨口閉合前跑出去。",
    "Change lanes, jump and slide before the maw closes.",
  ],
  escaped: [
    "出口已開",
    "The exit opens",
    "abyss",
    "巨口仍未倒下，抓住最後反攻窗口。",
    "The maw still lives. Counter its final outburst.",
  ],
  "abyss-defeat": [
    "深淵沉寂",
    "The abyss falls silent",
    "abyss-defeat",
    "巨口真正崩潰，本體終於現身。",
    "The maw is destroyed. Its true body emerges.",
  ],
  body: [
    "填不滿的空虛",
    "An emptiness unfilled",
    "body",
    "未消化的食物填滿胃，卻填不滿空虛。",
    "Undigested food fills the stomach, but not the void.",
  ],
  victory: [
    "打敗暴食",
    "Gluttony defeated",
    "victory",
    "他真正想吃的，是滿足感。",
    "What he truly craved was satisfaction.",
  ],
  lost: [
    "被飢餓吞沒",
    "Consumed by hunger",
    "lost",
    "盛宴沒有盡頭。",
    "The feast has no end.",
  ],
};

// Perspective shares its depth coordinates with the runner's collision model.
function runnerProjection(z, lane) {
  const scale = 1 / (1 + Math.max(0, z) / 20);
  return { x: 140 + (lane - 1) * 65 * scale, y: 220 + 217 * scale, scale };
}
function runnerPoly(c, points, color) {
  c.fillStyle = color;
  c.beginPath();
  points.forEach(([x, y], i) => c[i ? "lineTo" : "moveTo"](x, y));
  c.closePath();
  c.fill();
}
function drawRunner(c, m, zh, reduced) {
  box(c, 24, 204, 232, 278, "#14242e");
  runnerPoly(
    c,
    [
      [112, 220],
      [168, 220],
      [250, 482],
      [30, 482],
    ],
    "#574047",
  );
  runnerPoly(
    c,
    [
      [24, 204],
      [111, 220],
      [29, 482],
      [24, 482],
    ],
    "#613b40",
  );
  runnerPoly(
    c,
    [
      [169, 220],
      [256, 204],
      [256, 482],
      [251, 482],
    ],
    "#613b40",
  );
  // Muscular folds move towards the player, never across the gameplay lanes.
  for (let i = 0; i < 9; i++) {
    const z = i * 15 + ((1000 - m.distance * 10) % 15),
      p = runnerProjection(z, 0),
      q = runnerProjection(z, 2),
      width = 18 * p.scale;
    c.strokeStyle = i % 2 ? "#9e6560" : "#bc8272";
    c.lineWidth = Math.max(2, 4 * p.scale);
    c.beginPath();
    c.moveTo(p.x - width, p.y);
    c.lineTo(p.x - width * 2, p.y - 8 * p.scale);
    c.moveTo(q.x + width, q.y);
    c.lineTo(q.x + width * 2, q.y - 8 * q.scale);
    c.stroke();
  }
  for (const lane of [0.5, 1.5]) {
    const far = runnerProjection(140, lane),
      near = runnerProjection(-1, lane);
    c.strokeStyle = "#c69b79";
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(far.x, far.y);
    c.lineTo(near.x, 480);
    c.stroke();
  }
  for (let i = 0; i < 14; i++) {
    const z = i * 10 + ((1000 - m.distance * 10) % 10),
      p = runnerProjection(z, 1),
      half = 99 * p.scale;
    c.strokeStyle = "#725659";
    c.lineWidth = Math.max(1, 2 * p.scale);
    c.beginPath();
    c.moveTo(p.x - half, p.y);
    c.lineTo(p.x + half, p.y);
    c.stroke();
  }
  // The exit's light grows only after the real course is nearly complete.
  const exitWidth = m.distance > 85 ? 12 + (m.distance - 85) * 2 : 12;
  box(c, 140 - exitWidth / 2, 208, exitWidth, 13, "#91dfd2");
  for (const o of [...m.obstacles].sort((a, b) => b.z - a.z)) {
    const p = runnerProjection(o.z, o.lane),
      w = 46 * p.scale,
      h = 26 * p.scale;
    if (o.kind === "pit") {
      runnerPoly(
        c,
        [
          [p.x - w / 2, p.y],
          [p.x + w / 2, p.y],
          [p.x + w * 0.6, p.y + h * 0.5],
          [p.x - w * 0.6, p.y + h * 0.5],
        ],
        "#07131e",
      );
      c.strokeStyle = "#ec918a";
      c.lineWidth = 2;
      c.strokeRect(p.x - w / 2, p.y, w, h * 0.4);
    } else if (o.kind === "beam") {
      box(c, p.x - w / 2, p.y - h * 2, w, h * 0.45, "#dba06f");
      box(c, p.x - w / 2, p.y - h * 1.6, 4 * p.scale, h * 1.6, "#bb795b");
      box(
        c,
        p.x + w / 2 - 4 * p.scale,
        p.y - h * 1.6,
        4 * p.scale,
        h * 1.6,
        "#bb795b",
      );
      if (p.scale > 0.35)
        text(c, "↓", p.x, p.y - h, 14 * p.scale + 4, "#8de8e8");
    } else {
      box(c, p.x - w / 2, p.y - h, w, h, "#bf8059");
      box(c, p.x - w / 2 + 2, p.y - h, w - 4, 3 * p.scale, "#f1c88e");
      food(c, p.x, p.y - h * 0.5, 3, Math.max(3, 13 * p.scale));
    }
    if (o.z < 38 && !o.hit && o.kind !== "beam")
      text(c, "↑", p.x, p.y - h - 5, 14, "#ffdd8c");
  }
  const px = runnerProjection(0, m.lanePosition).x;
  box(c, px - 9, 443, 18, 3, "#161e26");
  c.save();
  c.translate(px, m.y);
  if (m.slide > 0) c.scale(1.25, 0.55);
  heart(c, 0, 0, 1);
  c.restore();
  if (!reduced) {
    const run = Math.sin(m.clock / 75) * 4;
    c.strokeStyle = "#ffd0d7";
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(px - 5, 448);
    c.lineTo(px - 8, 454 + run);
    c.moveTo(px + 5, 448);
    c.lineTo(px + 8, 454 - run);
    c.stroke();
  }
  if (m.slide > 0) text(c, zh ? "滑行" : "SLIDING", 140, 477, 10, "#a3edf2");
}

// r3 rendering: interpolation is visual only; logic owns the input lock.
var matchCell = (e) => ({
    x: 43 + (e % 6) * 38,
    y: 221 + Math.floor(e / 6) * 38,
  }),
  smoothStep = (e) => e * e * (3 - 2 * e);
function drawSweet(ctx, x, y, type, special, scale = 1, alpha = 1) {
  if (type != null) {
    if (
      (ctx.save(),
      (ctx.globalAlpha = alpha),
      ctx.translate(x, y),
      ctx.scale(scale, scale),
      food(ctx, 0, 0, type, 10),
      special === "row" || special === "column")
    ) {
      ((ctx.strokeStyle = "#fff0bd"), (ctx.lineWidth = 2));
      for (let l = -1; l <= 1; l++)
        (ctx.beginPath(),
          special === "row"
            ? (ctx.moveTo(-10, l * 5), ctx.lineTo(11, l * 5))
            : (ctx.moveTo(l * 5, -10), ctx.lineTo(l * 5, 10)),
          ctx.stroke());
    }
    if (
      (special === "wrapped" &&
        ((ctx.strokeStyle = "#ffe5a3"),
        (ctx.lineWidth = 2),
        ctx.strokeRect(-11, -11, 23, 23),
        box(ctx, -2, -12, 4, 26, "#fff1cb")),
      special === "rainbow")
    ) {
      ((ctx.fillStyle = "#4b303b"),
        ctx.beginPath(),
        ctx.arc(0, 0, 12, 0, Math.PI * 2),
        ctx.fill());
      for (let l = 0; l < 6; l++)
        box(
          ctx,
          -2 + Math.cos((l * Math.PI) / 3) * 7,
          -2 + Math.sin((l * Math.PI) / 3) * 7,
          4,
          4,
          ["#fa7186", "#f5d275", "#9bbdfa", "#c699ed", "#8ed8a1", "#fff0c9"][l],
        );
    }
    ctx.restore();
  }
}
function drawMatch(ctx, m, reduced) {
  let state = m.animState,
    progress = Math.min(1, (m.animTime || 0) / (m.animDuration || 1)),
    tween = m.swapTween;
  for (let l = 0; l < m.board.length; l++) {
    let { x: s, y: f } = matchCell(l);
    (box(
      ctx,
      s - 17,
      f - 17,
      35,
      35,
      (Math.floor(l / 6) + (l % 6)) % 2 ? "#1c324c" : "#213b53",
    ),
      m.jellies[l] &&
        (box(ctx, s - 15, f - 15, 31, 31, "#596caf"),
        (ctx.strokeStyle = "#c4c6ff"),
        (ctx.lineWidth = 2),
        ctx.strokeRect(s - 14, f - 14, 29, 29),
        box(ctx, s - 12, f - 12, 5, 3, "#e2e5ff")));
  }
  (ctx.save(), ctx.beginPath(), ctx.rect(26, 204, 228, 266), ctx.clip());
  for (let l = 0; l < m.board.length; l++) {
    if (tween && (l === tween.a || l === tween.b)) continue;
    let s = matchCell(l),
      f = state === "clear" && m.match.includes(l),
      c = 1,
      u = 1,
      h = s.y;
    (state === "fall" && !reduced && (h += m.falling[l] || 0),
      f &&
        (reduced
          ? (u = 0.55)
          : ((c = 1 + Math.sin(progress * Math.PI) * 0.16 - progress * 0.7),
            (u = 1 - progress * 0.85))),
      state === "shuffle" && !reduced && (u = 0.4 + 0.6 * progress),
      drawSweet(ctx, s.x, h, m.board[l], m.specials[l], c, u),
      f &&
        ((ctx.strokeStyle = "#ffe3a1"),
        (ctx.lineWidth = 2),
        (ctx.globalAlpha = reduced ? 1 : 1 - progress * 0.7),
        ctx.strokeRect(s.x - 14, s.y - 14, 28, 28),
        (ctx.globalAlpha = 1)));
  }
  if (tween) {
    let l = matchCell(tween.a),
      s = matchCell(tween.b),
      f = tween.valid
        ? smoothStep(progress)
        : progress < 0.5
          ? smoothStep(progress * 2)
          : 1 - smoothStep((progress - 0.5) * 2);
    reduced && (f = tween.valid ? 1 : 0);
    for (let c = 0; c < 2; c++) {
      let u = c ? l : s,
        h = c ? s : l,
        b = tween.original[1 - c];
      drawSweet(
        ctx,
        u.x + (h.x - u.x) * f,
        u.y + (h.y - u.y) * f,
        b.type,
        b.special,
      );
    }
  }
  if (state === "clear") {
    let l = reduced ? 0.7 : Math.sin(progress * Math.PI) * 0.7;
    for (let s of m.activated || []) {
      let f = matchCell(s),
        c = m.specials[s];
      if (
        (ctx.save(),
        (ctx.globalAlpha = l),
        (ctx.strokeStyle = "#ffe6a8"),
        (ctx.lineWidth = reduced ? 2 : 4),
        (c === "row" || c === "column") &&
          (ctx.beginPath(),
          ctx.moveTo(c === "row" ? 26 : f.x, c === "row" ? f.y : 204),
          ctx.lineTo(c === "row" ? 254 : f.x, c === "row" ? f.y : 470),
          ctx.stroke()),
        c === "wrapped" && ctx.strokeRect(f.x - 30, f.y - 30, 60, 60),
        c === "rainbow")
      )
        for (let u of m.match.slice(0, 14)) {
          let h = matchCell(u);
          (ctx.beginPath(),
            ctx.moveTo(f.x, f.y),
            ctx.lineTo(h.x, h.y),
            ctx.stroke());
        }
      ctx.restore();
    }
  }
  if (!reduced && m.clearAge < 300) {
    let l = m.clearAge / 300;
    (ctx.save(), (ctx.globalAlpha = 1 - l));
    for (let s of m.clearEffects || []) {
      let f = matchCell(s.i),
        c = ["#f29cae", "#ffdf88", "#d8b5ff", "#ffc086", "#a9ebc3"][s.type];
      for (let u = 0; u < 3; u++) {
        let h = (u * Math.PI * 2) / 3;
        box(
          ctx,
          f.x + Math.cos(h) * (3 + l * 14) - 1,
          f.y + Math.sin(h) * (3 + l * 14) - l * 8 - 1,
          3,
          3,
          c,
        );
      }
    }
    ctx.restore();
  }
  ctx.restore();
  let i = (l, s) => {
    let f = matchCell(l);
    ((ctx.strokeStyle = s),
      (ctx.lineWidth = 2),
      ctx.strokeRect(f.x - 16, f.y - 16, 33, 33),
      ctx.strokeRect(f.x - 13, f.y - 13, 27, 27));
  };
  m.busy ||
    (i(m.cursor, "#d6edf7"), m.chosen !== null && i(m.chosen, "#ffe084"));
}
