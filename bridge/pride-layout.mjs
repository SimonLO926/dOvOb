// Logical 280×560 canvas contract shared by every Pride attack and minigame.
export const PRIDE_TEXT_BANDS = Object.freeze({
  title: Object.freeze([92, 113]), status: Object.freeze([114, 139]),
  hint: Object.freeze([462, 480]), play: Object.freeze([140, 460]),
  feedback: Object.freeze([475, 495]), controls: Object.freeze([505, 535]),
});
export function prideText(c, band, text, { row = 0, color = '#fff1cc', size = 12, plain = false } = {}) {
  if (!text) return;
  const y = plain && ['title','status'].includes(band) ? (band==='title'?43:row?88:68) : { title: 110, status: row ? 138 : 125, hint: 474, feedback: 490, controls: row ? 532 : 514 }[band];
  c.save(); c.textBaseline = 'alphabetic'; c.textAlign = 'center'; c.fillStyle = color;
  c.font = `${band === 'title' || band === 'feedback' ? 'bold ' : ''}${size}px sans-serif`;
  c.fillText(text, 140, y, 264); c.restore();
}
export function prideHud(c, { title, status, detail, hint, elapsed = 0, feedback, controls, touch, encounter, plain = false }) {
  prideText(c, 'title', title, { size: plain ? 20 : 18, plain });
  prideText(c, 'status', status, { size: plain ? 12 : 11, plain });
  const health=encounter && Number.isFinite(encounter.hp)?`HP ${encounter.hp}`:'';
  prideText(c, 'status', [detail,health].filter(Boolean).join(' · '), { row: 1, size: plain ? 10 : 9, plain });
  if (elapsed < 3000) prideText(c, 'hint', hint);
  prideText(c, 'feedback', encounter?.result || feedback);
  prideText(c, 'controls', controls);
  prideText(c, 'controls', touch, { row: 1, size: 11 });
}
// Keep collision coordinates and speeds intact; only map the legacy arena to its new viewport.
export const prideArenaY = y => 140 + (y - 140) * 320 / 370;
export const prideWorldY = y => 140 + (y - 140) * 370 / 320;
export function beginPrideArena(c) {
  c.save(); c.beginPath(); c.rect(0, 140, 280, 320); c.clip();
  c.translate(0, 140); c.scale(1, 320 / 370); c.translate(0, -140);
}
