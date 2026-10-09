export const GREED_TRACKS = Object.freeze(['first-bridge', 'first-special', 'first-last', 'second-bridge', 'second-special', 'second-last']);
export const PRIDE_TRACKS = Object.freeze([...GREED_TRACKS, 'second-mid', 'escape'].map(key => `pride-${key}`));
export function crazyTrack(s) {
  if (!s || s.over) return null;
  if (s.config?.id === 'pride') {
    if (s.mode === 'pride-escape' || s.cutscene?.kind === 'tower-collapse') return 'pride-escape';
    if (s.cutscene?.kind === 'transform') return s.cutscene.time >= 2200 ? 'pride-second-bridge' : 'pride-first-last';
    if (s.form === 2) {
      if (s.mode === 'pride-tower') return 'pride-second-mid';
      if (s.mirrorWorld?.red || s.bossHp <= s.bossMaxHp * .15) return 'pride-second-last';
      return s.mode === 'bridge' ? 'pride-second-bridge' : 'pride-second-special';
    }
    if (s.prideDuelLocked || s.cutscene?.kind === 'king-defeat' || s.bossHp <= s.bossMaxHp * .2) return 'pride-first-last';
    return s.mode === 'bridge' ? 'pride-first-bridge' : 'pride-first-special';
  }
  if (s.cutscene?.kind === 'transform') return s.cutscene.time >= 2200 ? 'second-bridge' : 'first-last';
  const form = s.form === 2 ? 'second' : 'first';
  const lastStand = s.form === 2 && s.vaultStarted;
  const lowHealth = s.bossHp <= s.bossMaxHp * (s.form === 2 ? .2 : .15);
  const part = lastStand || lowHealth ? 'last' : s.mode === 'bridge' ? 'bridge' : 'special';
  return `${form}-${part}`;
}
// Each boss's persistent players retain independent playheads across mode switches.
export function createCrazyMusic(getVolume, { audioFactory = url => new Audio(url), resolveUrl = null, unlockTracks = null } = {}) {
  const tracks = new Map(), primed = new Set(); let wanted = null, blocked = false;
  function get(key) {
    if (!tracks.has(key)) {
      const pride = key.startsWith('pride-');
      const audio = audioFactory(resolveUrl ? resolveUrl(key) : new URL(`./assets/${pride ? 'pride' : 'greed'}-music/${pride ? key.slice(6) : key}.mp3`, import.meta.url).href);
      audio.loop = true; audio.preload = 'metadata'; audio.volume = 0;
      tracks.set(key, { audio, level: 0, target: 0, failed: false, priming: false });
    }
    return tracks.get(key);
  }
  function play(track) {
    if (!track.audio.paused) return;
    const promise = track.audio.play();
    promise?.catch(error => { if (error?.name === 'AbortError') return; track.failed = true; blocked = true; });
  }
  function unlock(sin = 'greed') {
    // Prime on the explicit boss-selection gesture for mobile playback permission.
    if (primed.has(sin) && !blocked) return;
    primed.add(sin); blocked = false;
    for (const key of unlockTracks || (sin === 'pride' ? PRIDE_TRACKS : GREED_TRACKS)) {
      const track = get(key); track.priming = true; track.audio.muted = true;
      const result = track.audio.play();
      result?.then(() => {
        track.priming = false;
        if (wanted !== key) track.audio.pause();
        track.audio.muted = false; track.failed = false;
      }).catch(error => { track.priming = false; track.audio.muted = false; if (error?.name === 'AbortError') return; track.failed = true; blocked = true; });
    }
  }
  function select(key) {
    if (wanted === key) return;
    wanted = key;
    for (const [name, track] of tracks) track.target = name === key ? 1 : 0;
    if (key) { const track = get(key); track.target = 1; track.failed = false; play(track); }
  }
  function tick(dtMs = 16) {
    const step = Math.max(0, Math.min(100, dtMs)) / 420;
    const volume = Math.max(0, Math.min(1, getVolume()));
    for (const track of tracks.values()) {
      track.level = track.target > track.level ? Math.min(track.target, track.level + step) : Math.max(track.target, track.level - step);
      track.audio.volume = Math.max(0, Math.min(1, track.level * volume * .78));
      if (!track.priming && track.target === 0 && track.level === 0 && !track.audio.paused) track.audio.pause();
    }
  }
  function pause() {
    // Pause immediately on blur or game pause; never advance a hidden playhead.
    wanted = null;
    for (const track of tracks.values()) { track.audio.pause(); track.audio.volume = 0; track.level = 0; track.target = 0; }
  }
  function reset() { pause(); for (const track of tracks.values()) track.audio.currentTime = 0; }
  return { unlock, select, tick, pause, reset, get active() { return wanted; }, get blocked() { return blocked; } };
}
