export const FILMING_KEY = 'bridge-filming-unlock';

// A per-tab override for filming. Actual clears and unreleased bosses stay intact.
export function filmingEnabled(storage) {
  try { return (storage ?? globalThis.sessionStorage)?.getItem(FILMING_KEY) === '1'; }
  catch { return false; }
}
