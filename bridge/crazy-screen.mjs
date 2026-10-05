export const greedImages = {};
let artPromise;
export function loadGreedArt() {
  return artPromise ??= typeof Image === 'undefined' ? Promise.resolve([]) : Promise.all(
  [['first', 'greed-first.png'], ['firstSprite', 'greed-first-sprite.png'], ['second', 'greed-second.png'], ['defeated', 'greed-defeated.png']].map(([key, file]) => new Promise(resolve => {
    const img = new Image(); greedImages[key] = img;
    img.onload = () => resolve(true); img.onerror = () => resolve(false);
    img.src = new URL(`./assets/${file}?v=1.2.19`, import.meta.url).href;
  }))
  );
}
export function readGreedClear(storage) {
  try { return storage.getItem('bridge-greed-cleared') === '1'; } catch { return false; }
}
export function recordGreedClear(storage, s) {
  if (!s.won || s.form !== 2 || s.bossHp !== 0) return false;
  try { storage.setItem('bridge-greed-cleared', '1'); return true; } catch { return false; }
}
const text = (c, value, x, y, size, color = '#ffe7ae') => { c.font = `bold ${size}px "Pixel Latin", "Pixel Hant", sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = color; c.fillText(value, x, y, c.canvas.width * .9); };
function cover(c, img) {
  if (!img?.naturalWidth) return;
  const scale = Math.max(c.canvas.width / img.naturalWidth, c.canvas.height / img.naturalHeight);
  c.drawImage(img, (c.canvas.width - img.naturalWidth * scale) / 2, (c.canvas.height - img.naturalHeight * scale) / 2, img.naturalWidth * scale, img.naturalHeight * scale);
}
function coinRain(c, time, reduced, burst = false) {
  const { width: w, height: h } = c.canvas;
  for (let i = 0; i < 64; i++) {
    const x = (i * 83 % w) + (reduced ? 0 : Math.sin(time / 480 + i) * 12);
    const y = reduced ? i * 47 % h : (i * 47 + time * (burst ? .18 : .085) * (1 + i % 3 * .2)) % (h + 30) - 15;
    c.fillStyle = i % 3 ? '#dda04a' : '#ffe5a0'; const width = reduced ? 5 : 2 + Math.round(Math.abs(Math.sin(time / 220 + i)) * 5);
    c.fillRect(Math.round(x), Math.round(y), width, 8); c.fillStyle = '#fff4c9'; c.fillRect(Math.round(x), Math.round(y), 2, 3);
  }
}
export function drawGreedCinematic(c, s, t, reduced = false) {
  const scene = s.cutscene; if (!scene) return;
  const { width: w, height: h } = c.canvas, time = scene.time;
  c.save(); c.imageSmoothingEnabled = false; c.fillStyle = '#120b1d'; c.fillRect(0, 0, w, h);
  if (scene.kind === 'victory') {
    cover(c, greedImages.defeated); c.fillStyle = '#13091888'; c.fillRect(0, 0, w, h * .37); coinRain(c, time, reduced);
    text(c, 'GREED', w / 2, h * .12, 28); text(c, t('crazyGreedBroken'), w / 2, h * .21, 24, '#fff0c9');
    text(c, t('crazyVictorySub'), w / 2, h * .29, 12, '#ffe0a1');
  } else if (reduced || time >= 2200) {
    cover(c, greedImages.first); c.fillStyle = '#12081dde'; c.fillRect(0, 0, w, h);
    text(c, 'FORM II', w / 2, h * .15, 25, '#ffc971');
    c.strokeStyle = '#a67643'; c.lineWidth = 2;
    for (let i = 0; i < 12; i++) { const angle = i * Math.PI / 6 + (reduced ? 0 : time / 2500); c.beginPath(); c.moveTo(w / 2, h * .48); c.lineTo(w / 2 + Math.cos(angle) * w, h * .48 + Math.sin(angle) * h); c.stroke(); }
    coinRain(c, time, reduced, true);
    const img = greedImages.second;
    if (img?.naturalWidth) {
      const size = Math.min(w * .98, h * 1.05) * (reduced ? 1 : .86 + Math.min(1, (time - 2200) / 1400) * .14);
      c.drawImage(img, (w - size) / 2, h * .43 - size / 3, size, size * img.naturalHeight / img.naturalWidth);
    }
    c.fillStyle = '#160a20cc'; c.fillRect(0, h * .73, w, h * .19);
    text(c, t('crazyTrueForm'), w / 2, h * .79, 24); text(c, t('crazyTransformSub'), w / 2, h * .86, 12, '#fbc08d');
  } else {
    cover(c, greedImages.first); c.fillStyle = '#0f081e88'; c.fillRect(0, 0, w, h);
    if (time > 850) {
      c.strokeStyle = '#ffd580'; c.lineWidth = 3;
      for (let i = 0; i < 9; i++) { const x = w / 2 + (i - 4) * 8, y = h * .32; c.beginPath(); c.moveTo(x, y); c.lineTo(x + (i - 4) * 12, y + 70); c.lineTo(x + (i - 4) * 36, y + 155); c.stroke(); }
      for (let i = 0; i < 20; i++) { const shift = Math.max(0, time - 1450) * .35; c.fillStyle = i % 2 ? '#c28849' : '#301b35'; c.fillRect((i * 71 % w) + Math.sin(i) * shift, (i * 43 % h) - shift * .2, 10 + i % 5 * 4, 9); }
    }
    text(c, t('crazyTransform'), w / 2, h * .75, 24); text(c, t('crazyNeverEnough'), w / 2, h * .83, 15);
  }
  c.restore();
}
