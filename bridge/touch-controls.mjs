// All encounters follow the main game's Auto / On / Off preference.
export function touchControlsEnabled(mode = 'auto', media = globalThis.matchMedia?.bind(globalThis)) {
  if (mode === 'on') return true;
  if (mode === 'off') return false;
  if (!media) return false;
  return media('(pointer: coarse)').matches || media('(hover: none)').matches;
}
