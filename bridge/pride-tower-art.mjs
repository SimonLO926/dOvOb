import { path, sparkle } from './pride-visuals.mjs';

// Decoration only: the front face keeps the physics block's exact x / width.
// Height changes the stone palette, never the floor's mass or support geometry.
function stonePalette(level) {
  const rise = Math.min(1, level / 16), variation = Math.sin(level * 2.3) * 3;
  return {
    light: `rgb(${238 - rise * 38 + variation} ${208 - rise * 47 + variation} ${155 + rise * 31 + variation})`,
    stone: `rgb(${188 - rise * 38 + variation} ${138 - rise * 40 + variation} ${82 + rise * 55 + variation})`,
    shade: `rgb(${113 - rise * 26 + variation} ${76 - rise * 21 + variation} ${51 + rise * 53 + variation})`,
    roof: `hsl(${44 - rise * 7} 67% ${82 - rise * 9}%)`,
    gold: '#e5bb68', mortar: '#503650', window: '#302139',
  };
}

function face(c, x, y, w) { c.beginPath(); c.rect(x, y, w, 22); }

function wedges(c, x, y, color) {
  // Incised wedge-shaped marks, rather than font-dependent pseudo lettering.
  path(c, [[x, y], [x + 2.4, y + .7], [x + .7, y + 2.5]], color);
  path(c, [[x + 3.1, y + .2], [x + 5.6, y + .8], [x + 3.8, y + 2]], color);
  c.strokeStyle = color; c.lineWidth = .5;
  c.beginPath(); c.moveTo(x + .7, y + 1); c.lineTo(x + 2, y + 3.5); c.stroke();
}

export function drawBabelFloor(c, x, y, w, level, { clock = 0, stress = 0, reduced = false } = {}) {
  const p = stonePalette(level);
  c.save(); c.lineWidth = .8;
  // All masonry remains inside the exact rectangular physics support.
  c.fillStyle = p.stone; c.fillRect(x, y, w, 22);
  c.beginPath(); c.rect(x, y, w, 22); c.clip();
  const wall = c.createLinearGradient(x, y, x, y + 22);
  wall.addColorStop(0, p.light); wall.addColorStop(.38, p.stone);
  wall.addColorStop(.86, p.stone); wall.addColorStop(1, p.shade);
  face(c, x, y, w); c.fillStyle = wall; c.fill();
  c.save(); face(c, x, y, w); c.clip();
  // Only the inset masonry shivers. The outline, windows and landing edge stay exact.
  const shiver = reduced ? 0 : Math.sin(clock * .006 + level * 1.7) * Math.min(.65, Math.abs(stress) * .02);
  for (let row = 0; row < 3; row++) {
    const by = y + 6 + row * 5, shift = (row % 2 ? -1 : 1) * shiver;
    for (let col = -1; col < Math.ceil(w / 13); col++) {
      const bx = x + col * 13 + (row % 2 ? 6 : 0) + shift;
      c.fillStyle = (col + row + level) % 3 ? '#fff0c51a' : '#39254624';
      c.fillRect(bx + .6, by + .5, 12, 4);
      c.strokeStyle = '#63415366'; c.lineWidth = .5; c.strokeRect(bx, by, 13, 5);
      c.fillStyle = '#fff0c54a'; c.fillRect(bx + 1, by + .5, 5 + (col + row + 4) % 4, .5);
    }
  }
  c.restore();

  // Stepped cornices and an inscribed frieze make each piece a temple storey.
  c.fillStyle = p.gold; c.fillRect(x, y, w, 1.5);
  c.fillStyle = '#fff0bb'; c.fillRect(x + 1, y + 1.5, w - 2, .7);
  c.fillStyle = '#754d4377'; c.fillRect(x + 2, y + 3, w - 4, 3);
  for (let mark = 5; mark < w - 6; mark += 10) wedges(c, x + mark, y + 3.1, '#ffe1a6cc');
  for (let center = 15; center < w - 7; center += 25) {
    const wx = x + center;
    c.beginPath(); c.moveTo(wx - 4, y + 18.5); c.lineTo(wx - 4, y + 12);
    c.arc(wx, y + 12, 4, Math.PI, 0); c.lineTo(wx + 4, y + 18.5); c.closePath();
    c.fillStyle = p.window; c.fill(); c.strokeStyle = p.roof; c.lineWidth = 1.6; c.stroke();
    c.fillStyle = '#bd8bd166'; c.fillRect(wx - 2.5, y + 12, 1, 5);
    c.fillStyle = '#f2ca76'; c.fillRect(wx - 5, y + 19, 10, 1);
    c.strokeStyle = '#8f664b'; c.lineWidth = .6;
    c.beginPath(); c.moveTo(wx, y + 7.5); c.lineTo(wx, y + 9.5); c.stroke();
  }
  c.fillStyle = '#432d4266'; c.fillRect(x + 2, y + 20, w - 4, 1);
  c.fillStyle = p.gold; c.fillRect(x, y + 21, w, 1);
  face(c, x, y, w); c.strokeStyle = '#6b4b54'; c.lineWidth = .7; c.stroke();
  c.restore();
}

function cloud(c, x, y, scale) {
  c.save(); c.translate(x, y); c.scale(scale, scale);
  c.beginPath(); c.moveTo(-42, 4);
  c.bezierCurveTo(-51, -6, -33, -13, -23, -10);
  c.bezierCurveTo(-22, -30, 6, -33, 12, -14);
  c.bezierCurveTo(27, -24, 40, -11, 38, -4);
  c.bezierCurveTo(58, -3, 53, 10, 38, 11);
  c.bezierCurveTo(7, 15, -20, 12, -42, 4); c.closePath();
  const mist = c.createLinearGradient(0, -30, 0, 15);
  mist.addColorStop(0, '#ffe5c7cc'); mist.addColorStop(1, '#c1a1db08');
  c.fillStyle = mist; c.fill(); c.restore();
}

export function drawMirrorSky(c, clock, reduced) {
  c.save();
  const sky = c.createLinearGradient(0, 0, 0, 460);
  sky.addColorStop(0, '#21152f'); sky.addColorStop(.33, '#583769');
  sky.addColorStop(.68, '#9d6d91'); sky.addColorStop(1, '#e7bb83');
  c.fillStyle = sky; c.fillRect(0, 0, 280, 560);
  // Soft, distant reflected light keeps the foreground stone silhouette readable.
  path(c, [[190, 155], [280, 315], [280, 430], [226, 228]], '#fff1c20d');
  path(c, [[47, 249], [0, 345], [0, 402], [71, 279]], '#f4d6ff0c');
  const drift = reduced ? 0 : Math.sin(clock * .00016) * 5;
  cloud(c, 42 + drift, 199, .9); cloud(c, 226 - drift, 256, 1.05);
  cloud(c, 80 - drift * .5, 332, .58);
  c.save(); c.beginPath(); c.rect(0, 140, 280, 320); c.clip();
  // Faceted mirror obelisks and a terraced palace on the horizon.
  for (const [x, top, width] of [[-9, 346, 27], [32, 380, 22], [65, 359, 25], [211, 370, 23], [248, 327, 31]]) {
    path(c, [[x, 453], [x, top + 13], [x + width / 2, top], [x + width, top + 13], [x + width, 453]], '#65527655', '#ebc89666');
    path(c, [[x + 2, top + 15], [x + width / 2, top + 4], [x + width / 2, 450], [x + 2, 450]], '#f6d9e033');
    path(c, [[x + 3, top + 48], [x + width - 3, top + 27], [x + width - 3, top + 35], [x + 3, top + 56]], '#fff3d677');
    c.strokeStyle = '#ffe9bb77'; c.lineWidth = .7;
    c.beginPath(); c.moveTo(x + width / 2, top); c.lineTo(x + width / 2, 452); c.stroke();
  }
  for (let tier = 0; tier < 3; tier++) {
    c.fillStyle = ['#98778766', '#80607c66', '#76567366'][tier];
    c.fillRect(12 + tier * 8, 448 - tier * 8, 68 - tier * 16, 8);
    c.fillRect(205 + tier * 7, 450 - tier * 7, 64 - tier * 14, 7);
  }
  for (const [x, y] of [[254, 349], [44, 401], [222, 389]]) sparkle(c, x, y, 2, '#fff0c7bb');
  c.restore();
  const ground = c.createLinearGradient(0, 445, 0, 460);
  ground.addColorStop(0, '#93728600'); ground.addColorStop(1, '#5a3e63');
  c.fillStyle = ground; c.fillRect(0, 445, 280, 15);
  // Calm HUD bands retain the existing text layout and contrast.
  const shade = c.createLinearGradient(0, 90, 0, 140);
  shade.addColorStop(0, '#21152f77'); shade.addColorStop(1, '#21152f00');
  c.fillStyle = shade; c.fillRect(0, 0, 280, 140);
  c.fillStyle = '#24182f'; c.fillRect(0, 460, 280, 100);
  c.fillStyle = '#d0a96866'; c.fillRect(12, 460, 256, 1);
  c.restore();
}

export function drawMirrorCrane(c, b, y, suspended) {
  c.save(); c.lineWidth = 1;
  const metal = c.createLinearGradient(0, 140, 0, 147);
  metal.addColorStop(0, '#fff2c3'); metal.addColorStop(.35, '#e7b85e');
  metal.addColorStop(.55, '#806179'); metal.addColorStop(.78, '#f9df99'); metal.addColorStop(1, '#88613d');
  path(c, [[9, 140], [265, 140], [269, 146], [9, 146]], metal, '#f1d092');
  for (let x = 16; x < 258; x += 24) {
    path(c, [[x, 141], [x + 10, 145], [x + 20, 141]], '#573b6266', '#ffebb38c');
  }
  path(c, [[9, 147], [18, 147], [18, 203], [9, 215]], '#99733f', '#f5d697');
  path(c, [[11, 150], [15, 150], [15, 202], [11, 207]], '#d3b4c7');
  path(c, [[18, 183], [47, 147], [55, 147], [18, 191]], '#d2a85a', '#ffdf93');
  c.fillStyle = '#fff0ba'; c.fillRect(12, 140, 250, 1);
  const cx = b.x + b.w / 2;
  path(c, [[cx - 7, 141], [cx + 7, 141], [cx + 5, 148], [cx - 5, 148]], metal, '#ffdf93');
  c.beginPath(); c.arc(cx, 145, 2.5, 0, Math.PI * 2); c.fillStyle = '#765482'; c.fill();
  c.strokeStyle = '#fff0c5'; c.stroke();
  if (suspended) {
    const hookY = Math.max(149, y - 15);
    c.strokeStyle = '#664359'; c.lineWidth = 3;
    c.beginPath(); c.moveTo(cx, 148); c.lineTo(cx, hookY); c.stroke();
    c.strokeStyle = '#efd296'; c.lineWidth = 1;
    c.beginPath(); c.moveTo(cx - .6, 148); c.lineTo(cx - .6, hookY); c.stroke();
    path(c, [[cx, hookY], [b.x + 9, y - 5], [b.x + b.w - 1, y - 5]], null, '#ffe2a4');
    if (hookY > 154) path(c, [[cx - 4, hookY - 3], [cx, hookY - 6], [cx + 4, hookY - 3], [cx, hookY + 2]], '#ceb5e9', '#ffde8c');
  }
  c.restore();
}
