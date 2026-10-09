// Native Bridge painting copied verbatim from bridge/index.html (master a260075).
// Keep colors, corner radius, ghost, curse marks, reward dots, garbage and Fever.
// This module is preview-only; parity is checked against the original functions.
import { COLS, ROWS, SAND_SCALE, SAND_HEX, cellsOf, sandPaintsFor } from '../logic.mjs';
const CELL=28,CORNER=4;
const paused=false,reducedMotion={matches:false};
export function configureBridgePaint(reduced){reducedMotion.matches=reduced;}
const COLORS = {
  I: "#64d2ff", O: "#ffd60a", T: "#bf5af2", S: "#30d158", Z: "#ff453a",
  J: "#0a84ff", L: "#ff9f0a", B: "#8e8e93", X: "#5e5ce6", D: "#ff9f0a", R: "#ff375f", A: "#e7d3a1", F: "#ffbd2e", G: "#313842", N: "#68727d",
};
const CURSE_COLOR = {
  seal: "#5e5ce6", reverse: "#ff9f0a", blind: "#1d1d1f", rush: "#ff375f", norotate: "#bf5af2", nohold: "#8e44ad", garbage: "#68727d",
};

function ink() { return document.body.dataset.theme === "dark" ? "#f5f5f7" : "#1d1d1f"; }

function pieceColor(type, curse, sand) {
  if (sand != null) return SAND_HEX[sand] || SAND_HEX[0];
  if (type === "C") return CURSE_COLOR[curse] || "#3a3a3c";
  return COLORS[type] || ink();
}

function curseMark(context, x, y, size, curse) {
  const cx = x * size + size / 2;
  const cy = y * size + size / 2;
  context.save();
  context.strokeStyle = "#ffffff";
  context.fillStyle = "#ffffff";
  context.lineWidth = Math.max(2, size * 0.08);
  if (curse === "seal") {
    context.fillRect(cx - size * 0.22, cy - size * 0.08, size * 0.44, size * 0.16);
  } else if (curse === "reverse") {
    context.beginPath();
    context.moveTo(cx - size * 0.24, cy);
    context.lineTo(cx - size * 0.08, cy - size * 0.12);
    context.lineTo(cx - size * 0.08, cy + size * 0.12);
    context.moveTo(cx + size * 0.24, cy);
    context.lineTo(cx + size * 0.08, cy - size * 0.12);
    context.lineTo(cx + size * 0.08, cy + size * 0.12);
    context.fill();
  } else if (curse === "blind") {
    context.beginPath();
    context.arc(cx, cy, size * 0.16, 0, Math.PI * 2);
    context.stroke();
  } else if (curse === "rush") {
    context.beginPath();
    context.moveTo(cx, cy - size * 0.22);
    context.lineTo(cx + size * 0.12, cy);
    context.lineTo(cx, cy + size * 0.22);
    context.lineTo(cx - size * 0.12, cy);
    context.fill();
  } else if (curse === "garbage") {
    context.strokeRect(cx - size * 0.16, cy - size * 0.12, size * 0.32, size * 0.32);
    context.beginPath();
    context.moveTo(cx - size * 0.22, cy - size * 0.18);
    context.lineTo(cx + size * 0.22, cy - size * 0.18);
    context.moveTo(cx - size * 0.07, cy - size * 0.24);
    context.lineTo(cx + size * 0.07, cy - size * 0.24);
    context.stroke();
  } else if (curse === "nohold") {
    context.strokeRect(cx - size * 0.2, cy - size * 0.2, size * 0.4, size * 0.4);
    context.beginPath();
    context.moveTo(cx - size * 0.25, cy + size * 0.25);
    context.lineTo(cx + size * 0.25, cy - size * 0.25);
    context.stroke();
  } else if (curse === "norotate") {
    context.beginPath();
    context.moveTo(cx - size * 0.16, cy - size * 0.16);
    context.lineTo(cx + size * 0.16, cy + size * 0.16);
    context.moveTo(cx + size * 0.16, cy - size * 0.16);
    context.lineTo(cx - size * 0.16, cy + size * 0.16);
    context.stroke();
  }
  context.restore();
}

function roundTile(context, left, top, side, radius) {
  context.beginPath();
  context.roundRect(left, top, side, side, radius);
}

function mixHex(hex, amount) {
  const value = parseInt(hex.slice(1), 16);
  const channel = (shift) => {
    const part = (value >> shift) & 255;
    const next = amount > 0 ? part + (255 - part) * amount : part * (1 + amount);
    return Math.max(0, Math.min(255, Math.round(next)));
  };
  return `rgb(${channel(16)}, ${channel(8)}, ${channel(0)})`;
}

function drawSandMino(context, x, y, size, colorIndex, ghost) {
  const grain = size / SAND_SCALE;
  const base = SAND_HEX[colorIndex] ?? SAND_HEX[0];
  context.save();
  context.globalAlpha = ghost ? 0.4 : 1;
  for (let dy = 0; dy < SAND_SCALE; dy += 1) {
    for (let dx = 0; dx < SAND_SCALE; dx += 1) {
      const speckle = (dx * 13 + dy * 7) % 11;
      const shade = speckle === 0 ? mixHex(base, 0.3) : speckle === 1 ? mixHex(base, -0.24) : base;
      context.fillStyle = shade;
      context.fillRect(x * size + dx * grain, y * size + dy * grain, grain + 0.8, grain + 0.8);
    }
  }
  context.restore();
}

function tile(context, x, y, size, ghost, tint) {
  const pad = size > 24 ? 1.25 : 1;
  const radius = CORNER * (size / CELL);
  const left = x * size + pad;
  const top = y * size + pad;
  const side = size - pad * 2;
  roundTile(context, left, top, side, radius);
  if (ghost) {
    const dark = document.body.dataset.theme === "dark";
    context.save();
    context.globalAlpha = tint ? 0.28 : 1;
    context.fillStyle = tint ? tint : (dark ? "rgba(168,199,250,.08)" : "rgba(11,87,208,.06)");
    context.fill();
    context.globalAlpha = 1;
    context.strokeStyle = tint || (dark ? "rgba(168,199,250,.8)" : "rgba(11,87,208,.55)");
    context.lineWidth = 1.25;
    context.stroke();
    context.restore();
    return;
  }
  context.fill();
}

function drawBlob(context, cells, type, size, ghost, markIndex = null, curse = null, sand = null, rot = 0, curseIndex = null, showFeverMark = true) {
  cells.forEach(([x, y], index) => {
    if (y < 0 || y >= ROWS || x < 0 || x >= COLS) return;
    if (sand != null) {
      const paints = sandPaintsFor(type, cells, sand, rot);
      drawSandMino(context, x, y, size, paints[index], ghost);
      return;
    }
    context.fillStyle = pieceColor(type, curse, sand);
    tile(context, x, y, size, ghost, null);
    if (!ghost && type === "A") {
      context.fillStyle = "#fff6d8";
      for (const [ox, oy] of [[-0.18, 0.02], [0.08, -0.14], [0.12, 0.12]]) {
        context.fillRect(x * size + size / 2 + ox * size, y * size + size / 2 + oy * size, Math.max(2, size * 0.12), Math.max(2, size * 0.12));
      }
    }
    if (!ghost && curse && type !== "G") curseMark(context, x, y, size, curse);
    if (!ghost && index === markIndex && (type === "B" || type === "X")) {
      context.fillStyle = type === "B" ? "#1d1d1f" : "#ffffff";
      context.beginPath();
      context.arc(x * size + size / 2, y * size + size / 2, Math.max(2.5, size * 0.12), 0, Math.PI * 2);
      context.fill();
    }
  });
  if (!ghost && sand == null && type === "G") {
    drawGarbageBag(context, cells, size);
    if (curse) cells.forEach(([x, y], index) => {
      if (index === curseIndex) curseMark(context, x, y, size, curse);
    });
  }
  if (!ghost && sand == null && type === "F" && showFeverMark) drawFeverMark(context, cells, size);
}

function drawGarbageBag(context, cells, size) {
  if (cells.length < 4) return;
  const neighbors = ([x, y]) => cells.filter(([nx, ny]) => Math.abs(nx - x) + Math.abs(ny - y) === 1).length;
  const neck = cells.reduce((best, cell) => neighbors(cell) < neighbors(best) ? cell : best);
  const cx = (Math.min(...cells.map(([x]) => x)) + Math.max(...cells.map(([x]) => x)) + 1) * size / 2;
  const cy = (Math.min(...cells.map(([, y]) => y)) + Math.max(...cells.map(([, y]) => y)) + 1) * size / 2;
  context.save();
  context.beginPath();
  cells.forEach(([x, y]) => context.rect(x * size + 1, y * size + 1, size - 2, size - 2));
  context.clip();
  context.translate(cx, cy);
  context.rotate(Math.atan2((neck[1] + 0.5) * size - cy, (neck[0] + 0.5) * size - cx) + Math.PI / 2);
  const gloss = context.createLinearGradient(-size, 0, size, size);
  gloss.addColorStop(0, "#737d8a");
  gloss.addColorStop(0.35, "#222a34");
  gloss.addColorStop(1, "#080d14");
  context.fillStyle = gloss;
  context.beginPath();
  context.moveTo(-size * 0.24, -size * 0.55);
  context.bezierCurveTo(-size * 1.5, -size * 0.2, -size * 1.4, size * 1.35, -size * 0.75, size * 1.38);
  context.lineTo(size * 0.75, size * 1.38);
  context.bezierCurveTo(size * 1.4, size * 1.35, size * 1.5, -size * 0.2, size * 0.24, -size * 0.55);
  context.closePath();
  context.fill();
  context.strokeStyle = "#a9b4c3";
  context.lineWidth = Math.max(1, size * 0.04);
  context.stroke();
  context.beginPath();
  context.moveTo(-size * 0.22, -size * 0.68);
  context.lineTo(size * 0.22, -size * 0.68);
  context.moveTo(0, -size * 0.66);
  context.lineTo(-size * 0.3, -size * 1.12);
  context.lineTo(size * 0.3, -size * 1.12);
  context.closePath();
  context.stroke();
  context.restore();
}

function drawFeverMark(context, cells, size) {
  if (!cells.length) return;
  const left = Math.min(...cells.map(([x]) => x)) * size;
  const top = Math.min(...cells.map(([, y]) => y)) * size;
  const width = (Math.max(...cells.map(([x]) => x)) + 1) * size - left;
  const height = (Math.max(...cells.map(([, y]) => y)) + 1) * size - top;
  const time = paused || reducedMotion.matches ? 0 : performance.now();
  context.save();
  context.beginPath();
  cells.forEach(([x, y]) => context.rect(x * size + 1, y * size + 1, size - 2, size - 2));
  context.clip();
  const shineX = left - width + (time % 1500) / 1500 * width * 3;
  const shine = context.createLinearGradient(shineX - size, top, shineX + size, top + height);
  shine.addColorStop(0, "rgba(255, 235, 160, 0)");
  shine.addColorStop(0.5, "rgba(255, 250, 210, .55)");
  shine.addColorStop(1, "rgba(255, 235, 160, 0)");
  context.fillStyle = shine;
  context.fillRect(left, top, width, height);
  context.strokeStyle = "#ffe19c";
  context.shadowColor = "#ff9f0a";
  context.shadowBlur = 12;
  context.lineWidth = Math.max(1, size * 0.045);
  cells.forEach(([x, y]) => context.strokeRect(x * size + 2, y * size + 2, size - 4, size - 4));
  context.restore();
  context.save();
  const badge = Math.min(width, height) * 0.75;
  const x = left + width / 2;
  const y = top + height / 2;
  context.translate(x, y);
  context.rotate(-0.12);
  context.font = `400 ${Math.round(badge)}px "Fever Brush", "KaiTi", "STKaiti", serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.lineJoin = "round";
  context.strokeStyle = "#5a2200";
  context.lineWidth = Math.max(2, badge * 0.07);
  context.strokeText("特", 0, 0);
  context.fillStyle = "#fff3b0";
  context.shadowColor = "#ff9f0a";
  context.shadowBlur = 10;
  context.fillText("特", 0, 0);
  context.restore();
}

function drawGridCells(context, grid, skip, size) {
  const drawn = new Set();
  const feverPieces = new Map();
  for (let y = 0; y < ROWS; y += 1) {
    for (let x = 0; x < COLS; x += 1) {
      const cell = grid[y][x];
      if (!cell || skip.has(cell.g) || drawn.has(cell.g)) continue;
      drawn.add(cell.g);
      const group = [];
      for (let gy = 0; gy < ROWS; gy += 1) {
        for (let gx = 0; gx < COLS; gx += 1) {
          if (grid[gy][gx]?.g === cell.g) group.push([gx, gy]);
        }
      }
      drawBlob(context, group, cell.type, size, false, null, cell.type === "G" ? null : cell.curse, cell.sand ?? null, 0, null, false);
      if (cell.type === "F" && cell.sand == null) {
        const id = cell.feverId ?? cell.g;
        if (!feverPieces.has(id)) feverPieces.set(id, []);
        feverPieces.get(id).push(...group);
      }
    }
  }
  for (const cells of feverPieces.values()) drawFeverMark(context, cells, size);
  context.fillStyle = "#dfff45";
  for (let y = 0; y < ROWS; y += 1) {
    for (let x = 0; x < COLS; x += 1) {
      const cell = grid[y][x];
      if (!cell || skip.has(cell.g)) continue;
      if (cell.type === "G" && cell.curse) curseMark(context, x, y, size, cell.curse);
      if (!cell.bomb && cell.reward !== "bbtan") continue;
      context.fillStyle = cell.bomb ? "#1d1d1f" : "#ffffff";
      context.beginPath();
      context.arc(x * size + size / 2, y * size + size / 2, Math.max(3, size * 0.16), 0, Math.PI * 2);
      context.fill();
    }
  }
}
export { drawGridCells, drawBlob };
export function paintPiece(c,piece,ghost=false){drawBlob(c,cellsOf(piece.type,piece.rot,piece.x,piece.y),piece.type,CELL,ghost,piece.bombIndex,piece.curse,piece.sand??null,piece.rot,piece.curseIndex);}
