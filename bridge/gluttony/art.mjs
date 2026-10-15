import { phase } from "./engine.mjs";
const rect = (c, x, y, w, h, color) => {
  c.fillStyle = color;
  c.fillRect(Math.round(x), Math.round(y), w, h);
};
function poly(c, points, color) {
  c.fillStyle = color;
  c.beginPath();
  points.forEach(([x, y], i) => c[i ? "lineTo" : "moveTo"](x, y));
  c.closePath();
  c.fill();
}
export function food(c, x, y, type = 0, size = 12) {
  c.save();
  c.translate(Math.round(x), Math.round(y));
  c.scale(size / 12, size / 12);
  const cols = ["#ed687f", "#f5cc67", "#b898f0", "#ef954f", "#76d8a6"];
  const col = cols[type % 5];
  if (type % 5 === 0) {
    rect(c, -8, -7, 16, 16, "#813340");
    rect(c, -10, -4, 20, 10, col);
    rect(c, -7, -8, 14, 15, col);
    rect(c, -5, -6, 4, 4, "#ffd1b0");
    rect(c, 0, -11, 3, 5, "#976950");
    rect(c, 3, -11, 6, 3, "#7add9b");
  }
  if (type % 5 === 1) {
    poly(
      c,
      [
        [-10, -2],
        [-7, -7],
        [6, -7],
        [11, -1],
        [8, 6],
        [-7, 6],
      ],
      "#a88732",
    );
    poly(
      c,
      [
        [-9, -1],
        [-5, -5],
        [6, -5],
        [9, 0],
        [6, 4],
        [-6, 4],
      ],
      col,
    );
    rect(c, -3, -4, 8, 2, "#fff1b2");
  }
  if (type % 5 === 2) {
    for (const [xx, yy] of [
      [-4, -6],
      [4, -6],
      [-8, 1],
      [0, 1],
      [8, 1],
      [-4, 8],
      [4, 8],
      [0, 14],
    ]) {
      rect(c, xx - 3, yy - 3, 6, 6, col);
      rect(c, xx - 2, yy - 2, 2, 2, "#f0d6ff");
    }
    rect(c, -1, -14, 3, 6, "#63bba7");
  }
  if (type % 5 === 3) {
    rect(c, -9, -7, 18, 14, col);
    rect(c, -6, -10, 12, 20, col);
    rect(c, -5, -7, 4, 4, "#ffcf8e");
    rect(c, -1, -13, 3, 4, "#739c55");
    rect(c, 3, -13, 6, 3, "#8ad795");
  }
  if (type % 5 === 4) {
    poly(
      c,
      [
        [-10, -7],
        [10, -7],
        [8, 4],
        [0, 12],
        [-8, 4],
      ],
      col,
    );
    rect(c, -10, -10, 20, 4, "#95eead");
    for (const [xx, yy] of [
      [-4, -3],
      [3, -2],
      [0, 5],
    ])
      rect(c, xx, yy, 2, 3, "#234955");
  }
  c.restore();
}
function teeth(c, x, y, width, count, down = true) {
  for (let i = 0; i < count; i++) {
    const xx = x + (i * width) / count;
    rect(c, xx, y, width / count - 3, down ? 8 : 6, "#96774f");
    rect(c, xx + 1, y + (down ? 0 : -3), width / count - 6, 8, "#fff0ce");
  }
}
export function drawFrame(c, s) {
  c.clearRect(0, 0, 560, c.canvas.height);
  if (s.scene) return;
  const h = c.canvas.height,
    p = phase(s),
    rust = p === 5 ? "#793b38" : "#a65e3b",
    trim = p === 5 ? "#64acb4" : "#e7ba73";
  // Whole body surrounds original opening; all limbs stay outside main canvas.
  for (const side of [-1, 1]) {
    c.save();
    c.translate(280, 0);
    c.scale(side, 1);
    poly(
      c,
      [
        [80, 104],
        [138, 122],
        [165, 205],
        [166, h - 110],
        [138, h - 48],
        [140, h - 30],
        [118, h - 25],
        [112, 210],
        [86, 174],
      ],
      p < 3 ? "#182d43" : rust,
    );
    poly(
      c,
      [
        [105, 122],
        [132, 136],
        [148, 216],
        [144, h - 122],
        [126, h - 81],
        [124, 230],
      ],
      p < 3 ? "#31516a" : "#bd8759",
    );
    rect(c, 126, 310, 19, 64, p < 3 ? "#dbb487" : "#dda46b");
    for (let i = 0; i < 4; i++)
      rect(c, 116 + i * 7, 318 + i * 4, 7, 27, p < 3 ? "#f5d7a7" : "#f0c487");
    rect(c, 132, 140, 8, 80, trim);
    for (let y = 242; y < h - 100; y += 41) {
      rect(c, 132, y, 5, 17, trim);
      rect(c, 140, y + 5, 7, 3, "#532e25");
    }
    c.restore();
  }
  rect(c, 134, h - 28, 292, 8, "#573827");
  rect(c, 140, h - 28, 280, 3, trim);
  c.save();
  c.translate(280, 0);
  c.scale(1, p < 3 ? 0.78 : 0.86);
  if (p < 3) {
    const wide = p === 2 ? 86 : 72;
    poly(
      c,
      [
        [-wide + 8, 46],
        [-wide, 58],
        [-wide, 86],
        [-wide + 15, 101],
        [wide - 15, 101],
        [wide, 86],
        [wide, 58],
        [wide - 8, 46],
      ],
      "#6c3930",
    );
    poly(
      c,
      [
        [-wide + 10, 43],
        [-wide + 2, 58],
        [-wide + 9, 86],
        [-wide + 24, 99],
        [wide - 24, 99],
        [wide - 9, 86],
        [wide - 2, 58],
        [wide - 10, 43],
      ],
      "#dba478",
    );
    rect(c, -wide + 16, 47, wide * 2 - 32, 10, "#f3c799");
    rect(c, -55, 53, 32, p === 2 ? 4 : 6, "#512b2a");
    rect(c, 23, 53, 32, p === 2 ? 4 : 6, "#512b2a");
    rect(c, -47, 59, 14, 4, "#f6ead0");
    rect(c, 34, 59, 14, 4, "#f6ead0");
    rect(c, -7, 61, 14, 9, "#a5543b");
    poly(
      c,
      [
        [-wide + 21, 73],
        [wide - 21, 73],
        [wide - 30, 92],
        [-wide + 30, 92],
      ],
      "#321d23",
    );
    teeth(c, -wide + 25, 73, wide * 2 - 50, p === 2 ? 10 : 8);
    rect(c, -21, 86, 42, 5, p === 2 ? "#cf6966" : "#b95650");
    poly(
      c,
      [
        [-57, 35],
        [-68, 28],
        [-68, 15],
        [-54, 7],
        [-32, 9],
        [-26, 2],
        [4, 2],
        [12, 8],
        [39, 5],
        [62, 13],
        [66, 26],
        [56, 35],
      ],
      "#d0bfa4",
    );
    rect(c, -53, 16, 106, 18, "#eee2c6");
    rect(c, -55, 34, 110, 11, "#bbaa8d");
    rect(c, -54, 35, 108, 5, "#fff2d3");
    for (const x of [-35, -8, 20]) rect(c, x, 13, 4, 15, "#b1a28e");
    poly(
      c,
      [
        [-28, 101],
        [0, 109],
        [28, 101],
        [38, 107],
        [8, 117],
        [-8, 117],
        [-38, 107],
      ],
      "#b45139",
    );
    if (p === 2) {
      rect(c, -64, 65, 8, 5, "#a96650");
      rect(c, 57, 65, 8, 5, "#a96650");
    }
  } else if (p < 5) {
    const w = p === 4 ? 101 : 85;
    poly(
      c,
      [
        [-w + 17, 15],
        [w - 17, 15],
        [w, 31],
        [w, 88],
        [w - 24, 104],
        [-w + 24, 104],
        [-w, 88],
        [-w, 31],
      ],
      "#53332b",
    );
    poly(
      c,
      [
        [-w + 20, 19],
        [w - 20, 19],
        [w - 7, 35],
        [w - 7, 82],
        [w - 23, 99],
        [-w + 23, 99],
        [-w + 7, 82],
        [-w + 7, 35],
      ],
      rust,
    );
    rect(c, -w + 21, 36, w * 2 - 42, 47, "#161e26");
    teeth(c, -w + 23, 34, w * 2 - 46, p === 4 ? 12 : 9);
    teeth(c, -w + 23, 78, w * 2 - 46, p === 4 ? 10 : 8, false);
    rect(c, -w + 28, 85, w * 2 - 56, 5, "#cf8261");
    for (let i = 0; i < 8; i++)
      rect(c, -w + 24 + i * 20, 22 + (i % 2) * 3, 9, 4, "#d39c66");
    if (p === 4) {
      poly(
        c,
        [
          [-56, 18],
          [-44, 33],
          [-54, 45],
          [-38, 55],
        ],
        "#302a2a",
      );
      poly(
        c,
        [
          [61, 59],
          [46, 73],
          [56, 86],
          [42, 100],
        ],
        "#302a2a",
      );
      rect(c, -28, 39, 12, 3, "#52b9c1");
      rect(c, 19, 51, 22, 3, "#52b9c1");
    }
  } else {
    for (let i = 0; i < 4; i++) {
      const w = 104 - i * 22,
        y = 5 + i * 11;
      poly(
        c,
        [
          [-w + 16, y],
          [w - 16, y],
          [w, y + 12],
          [w, 95 - i * 8],
          [w - 15, 106 - i * 7],
          [-w + 15, 106 - i * 7],
          [-w, 95 - i * 8],
          [-w, y + 12],
        ],
        i % 2 ? "#874b3e" : "#392d32",
      );
      teeth(c, -w + 18, y + 10, w * 2 - 36, Math.max(3, 12 - i * 3));
    }
    rect(c, -25, 45, 50, 25, "#091d29");
    rect(c, -16, 55, 32, 4, "#41a6b2");
  }
  c.restore();
}
