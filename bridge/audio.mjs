export const TEMPO = 112;
export const STEP = 60 / TEMPO / 2;

export const MIX = { music: 0.78, sfx: 1, lead: 0.34, bass: 0.24, blip: 0.55, clear: 0.48 };

export const LEAD = [
  64, 67, 72, 67, 69, 67, 64, null,
  72, 76, 79, 76, 72, null, 67, 64,
  69, 72, 76, 72, 69, 67, 64, null,
  62, 64, 67, 64, 60, null, null, 64,
];

export const BASS = [
  48, null, null, null, 48, null, null, null,
  43, null, null, null, 43, null, 48, null,
  45, null, null, null, 45, null, null, null,
  41, null, null, null, 48, null, null, null,
];

export function midi(note) {
  return 440 * 2 ** ((note - 69) / 12);
}

export function clearPitches(rows) {
  const count = Math.max(1, Math.min(4, rows | 0));
  return [72, 76, 79, 84].slice(0, count);
}

export function tspinPitches() {
  return [70, 74, 79, 86];
}

export function comboPitches(combo) {
  const count = Math.max(2, Math.min(6, combo | 0));
  const root = 60 + Math.min(8, combo) * 2;
  return Array.from({ length: count }, (_, index) => root + index * 2);
}

export function sandPitches() {
  return [62, 67, 74];
}

export function createSound(getVolume) {
  let ctx = null;
  let master = null;
  let musicGain = null;
  let sfxGain = null;
  let playing = false;
  let nextTime = 0;
  let step = 0;

  function ensure() {
    if (typeof AudioContext === "undefined") return false;
    ctx ??= new AudioContext();
    if (!master) {
      master = ctx.createGain();
      master.connect(ctx.destination);
      musicGain = ctx.createGain();
      musicGain.gain.value = MIX.music;
      musicGain.connect(master);
      sfxGain = ctx.createGain();
      sfxGain.gain.value = MIX.sfx;
      sfxGain.connect(master);
    }
    master.gain.value = Math.max(0, getVolume());
    if (ctx.state === "suspended") ctx.resume();
    return getVolume() > 0;
  }

  function setVolume() {
    if (master) master.gain.value = Math.max(0, getVolume());
  }

  function beep(freq, when, dur, type, peak, dest) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, when);
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), when + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + Math.max(0.03, dur));
    osc.connect(gain);
    gain.connect(dest);
    osc.start(when);
    osc.stop(when + dur + 0.03);
  }

  function blip(freq, dur = 0.05) {
    if (!ensure()) return;
    beep(freq, ctx.currentTime, dur, "square", MIX.blip, sfxGain);
  }

  function playClear(rows) {
    if (!ensure()) return;
    const pitches = clearPitches(rows);
    const start = ctx.currentTime;
    beep(midi(pitches[0] - 12), start, 0.28, "square", MIX.clear * 0.7, sfxGain);
    pitches.forEach((note, index) => {
      beep(midi(note), start + index * 0.07, 0.2, "square", MIX.clear, sfxGain);
    });
  }

  function playRun(notes, gap, dur, peak) {
    if (!ensure()) return;
    const start = ctx.currentTime;
    notes.forEach((note, index) => {
      beep(midi(note), start + index * gap, dur, "square", peak, sfxGain);
    });
  }

  function playTspin() {
    playRun(tspinPitches(), 0.045, 0.16, MIX.clear);
    if (!ctx) return;
    beep(midi(58), ctx.currentTime, 0.24, "square", MIX.clear * 0.65, sfxGain);
  }

  function playCombo(combo) {
    playRun(comboPitches(combo), 0.038, 0.09, Math.min(0.72, MIX.clear + combo * 0.03));
  }

  function playSand() {
    playRun(sandPitches(), 0.05, 0.12, MIX.clear * 0.8);
  }

  function playBoom() {
    if (!ensure()) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(48, now + 0.32);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.62, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);
    osc.connect(gain);
    gain.connect(sfxGain);
    osc.start(now);
    osc.stop(now + 0.36);
    const length = Math.floor(ctx.sampleRate * 0.22);
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.5, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
    noise.connect(noiseGain);
    noiseGain.connect(sfxGain);
    noise.start(now);
  }

  function playCasino(kind, amount = 0) {
    if (!ensure()) return;
    const start = ctx.currentTime;
    const ping = (freq, offset, dur = .06, gain = .12, type = "triangle") => beep(freq, start + offset, dur, type, gain, sfxGain);
    if (kind === "victory") {
      [60, 64, 67, 72, 76, 79, 84].forEach((note, i) => ping(midi(note), i * .105, .32, .2));
      // Metallic coin pairs, with diminishing scattered impacts and a bright final chord.
      for (let i = 0; i < 42; i++) {
        const offset = .35 + i * .047 + (i % 5) * .018, frequency = 1700 + (i * 317 % 2400);
        ping(frequency, offset, .055, .08); ping(frequency * 1.47, offset + .006, .035, .045, "sine");
      }
      [72, 76, 79, 84].forEach(note => ping(midi(note), 2.55, .7, .1));
    } else if (kind === "lever" || kind === "risk") {
      ping(110, 0, .1, .18, "square");
      for (let i = 0; i < 14; i++) ping(430 + i % 4 * 110, .06 + i * .057, .026, .075, "square");
      [0, .25, .5].forEach((v, i) => ping(1000 + i * 180, .55 + v, .045, .1));
    } else if (kind === "coin") { ping(2200, 0, .055, .12); ping(3300, .024, .065, .07, "sine"); }
    else if (kind === "tile") { ping(280, 0, .024, .16, "square"); ping(1250, .02, .034, .06); }
    else if (kind === "card") { for (let i = 0; i < 4; i++) ping(700 + i * 280, i * .009, .016, .05, "sawtooth"); }
    else if (kind === "jump") { [260, 390, 520].forEach((f, i) => ping(f, i * .04, .045, .1, "square")); }
    else if (kind === "dash" || kind === "laser") { for (let i = 0; i < 5; i++) ping((kind === "laser" ? 1250 : 450) + i * 160, i * .012, .045, .06, "sawtooth"); }
    else if (kind === "transform") { [130, 155, 196, 260].forEach((f, i) => ping(f, i * .18, .3, .17, "sawtooth")); }
    else if (kind === "reel") { ping(175, 0, .035, .14, "square"); ping(1200, .025, .08, .08); }
    else if (kind === "launch") { ping(160, 0, .06, .14, "square"); ping(680, .055, .07, .08); }
    else if (kind === "hit") { ping(240 + Math.min(8, amount) * 28, 0, .035, .12, "square"); ping(960, .015, .035, .06); }
  }

  function mark() {
    if (typeof document !== "undefined") document.body.dataset.music = playing ? "on" : "off";
  }

  function start() {
    if (!ensure()) return;
    if (playing) return;
    playing = true;
    nextTime = ctx.currentTime + 0.02;
    mark();
  }

  function restart() {
    step = 0;
    playing = false;
    start();
  }

  function stop() {
    playing = false;
    mark();
  }

  function tick() {
    if (!playing || !ctx || getVolume() <= 0) return;
    if (nextTime < ctx.currentTime) nextTime = ctx.currentTime + 0.02;
    const horizon = ctx.currentTime + 0.28;
    while (nextTime < horizon) {
      const index = step % LEAD.length;
      const lead = LEAD[index];
      const bass = BASS[index];
      if (lead != null) beep(midi(lead), nextTime, STEP * 0.92, "square", MIX.lead, musicGain);
      if (bass != null) beep(midi(bass), nextTime, STEP * 1.7, "square", MIX.bass, musicGain);
      nextTime += STEP;
      step += 1;
    }
  }

  return { setVolume, playCasino, blip, playClear, playBoom, playTspin, playCombo, playSand, start, restart, stop, tick, get playing() { return playing; } };
}
