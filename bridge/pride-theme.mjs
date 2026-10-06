// One visual language for Pride: amethyst glass, antique gold and quiet dark HUDs.
export const PRIDE_COLORS = Object.freeze({ ink: '#140c25', glass: '#372247', gold: '#d6b36e', light: '#fff0c6', heart: '#ff5178' });
let palace = null;

export function drawPrideBackdrop(c, { x = 0, y = 0, w = 280, h = 560, time = 0, reduced = false, variant = 'palace', bands = true } = {}) {
  if (!palace && typeof Image !== 'undefined') {
    palace = new Image(); palace.src = new URL('./assets/pride-palace.webp', import.meta.url).href;
  }
  c.save(); c.beginPath(); c.rect(x, y, w, h); c.clip();
  const t = reduced ? 0 : time;
  const bg = c.createLinearGradient(x, y, x + w, y + h);
  bg?.addColorStop(0, '#281339'); bg?.addColorStop(.55, '#1e122d'); bg?.addColorStop(1, '#100c1c');
  c.fillStyle = bg || '#1e122d'; c.fillRect(x, y, w, h);
  if (palace?.naturalWidth) {
    const scale = Math.max(w / palace.naturalWidth, h / palace.naturalHeight);
    c.globalAlpha = .32;
    c.drawImage(palace, x + (w - palace.naturalWidth * scale) / 2, y + (h - palace.naturalHeight * scale) / 2, palace.naturalWidth * scale, palace.naturalHeight * scale);
    c.globalAlpha = 1;
  }
  // Recessed looking glasses stay behind the interactive objects, never the text.
  for (let i = 0; i < 5; i++) {
    const mx = x + (i + .5) * w / 5, top = y + h * .27, bottom = y + h * .82, half = w * .062;
    c.fillStyle = i % 2 ? '#3d285433' : '#71577722'; c.strokeStyle = '#c7a56933'; c.lineWidth = 1;
    c.beginPath(); c.moveTo(mx - half, top + 10); c.lineTo(mx, top); c.lineTo(mx + half, top + 10);
    c.lineTo(mx + half, bottom); c.lineTo(mx - half, bottom); c.closePath(); c.fill(); c.stroke();
    c.strokeStyle = '#e2baf422'; c.beginPath(); c.moveTo(mx - half + 3, bottom - 18); c.lineTo(mx + half - 3, top + 30); c.stroke();
  }
  c.strokeStyle = '#b18b5022'; c.lineWidth = 1;
  for (let i = 0; i < 4; i++) { const fy = y + h * (.82 + i * .06); c.beginPath(); c.moveTo(x, fy); c.lineTo(x + w, fy); c.stroke(); }
  for (let i = 0; i < 12; i++) {
    const sx = x + (17 + i * 67) % w, sy = y + h * .28 + ((i * 47 + t * .006) % (h * .5));
    c.fillStyle = i % 3 ? '#dfc4ff33' : '#d6b36e44'; c.fillRect(Math.round(sx), Math.round(sy), 2, 2);
  }
  if (variant.includes('nested') || variant.includes('maze')) {
    c.strokeStyle = '#9874bb22';
    for (let n = 0; n < 3; n++) c.strokeRect(x + w * (.1 + n * .06), y + h * (.3 + n * .05), w * (.8 - n * .12), h * (.5 - n * .1));
  }
  if (bands) {
    c.fillStyle = '#140c25ee'; c.fillRect(x, y, w, Math.min(140, h)); c.fillRect(x, y + h - 100, w, 100);
    c.fillStyle = '#d6b36e55'; c.fillRect(x + 12, y + 139, w - 24, 1); c.fillRect(x + 12, y + h - 100, w - 24, 1);
  }
  c.restore();
}

// Brackets and a double border are visible even on a small touch screen.
// The interior stays clear, particularly for the shared pixel-heart puzzle.
export function drawPrideFocus(c, { x, y, w, h }, time = 0, selected = false) {
  c.save();
  c.lineWidth = 4; c.strokeStyle = '#120b24'; c.strokeRect(x + 1, y + 1, w - 2, h - 2);
  c.lineWidth = 2; c.strokeStyle = selected ? '#98ffe0' : '#fff2c6'; c.strokeRect(x + 1, y + 1, w - 2, h - 2);
  c.strokeStyle = selected ? '#98ffe0' : '#f4c771'; c.lineWidth = 4;
  const n = Math.min(11, w / 4, h / 4);
  for (const [cx, cy, dx, dy] of [[x,y,1,1],[x+w,y,-1,1],[x,y+h,1,-1],[x+w,y+h,-1,-1]]) {
    c.beginPath(); c.moveTo(cx + dx * n, cy); c.lineTo(cx, cy); c.lineTo(cx, cy + dy * n); c.stroke();
  }
  // Keep animation at the edge rather than flashing the selected object.
  c.fillStyle = selected ? '#98ffe0' : '#ffffff';
  c.fillRect(x + w / 2 - 4, y - 3, 8, 3);
  c.restore();
}
