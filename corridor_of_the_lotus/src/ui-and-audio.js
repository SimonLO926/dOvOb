import { EVENTS } from './contracts.js';
import { getPortraitDataUri, getSpeakerMeta } from './portrait-atlas.js';
import {
  CHAPTER_STORIES,
  CODEX_ENTRIES,
  FINAL_ENDINGS,
  LORE_DIALOGUES
} from './story-codex-data.js';
import { ALL_STAGES, CHAPTERS, LEVELS, getTotalStageCount } from './levels-12-chapters.js';
import {
  LANG_OPTIONS,
  getLocalizedActorName,
  getLocalizedChapterMeta,
  getLocalizedChapterStory,
  getLocalizedCodexEntries,
  getLocalizedFinalEnding,
  getLocalizedLoreDialogue,
  getLocalizedPhaseLabel,
  getLocalizedSpeakerMeta,
  getLocalizedStageMeta,
  getLocalizedUi,
  normalizeBgMode,
  normalizeLang
} from './i18n.js';

const COUPLE_LORE_IDS = ['couple_1622', 'couple_2026', 'couple_2077'];

const ENDING_MURAL_CAST = {
  A: ['sofia', 'ryan', 'mother', 'afonso', 'ajan'],
  B: ['afonso', 'sofia', 'ryan', 'luzhisi'],
  C: ['mother', 'ajan', 'sofia', 'ryan']
};

function pad2(n) {
  return String(Math.max(0, Number(n) || 0)).padStart(2, '0');
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function azulejoCornersMarkup() {
  const pathSvg =
    '<svg viewBox="0 0 28 28" aria-hidden="true">' +
    '<path d="M1,1 L16,1 A15,15 0 0,1 1,16 Z" fill="rgba(23,58,138,0.12)" />' +
    '<path d="M15,1 A14,14 0 0,1 1,15" fill="none" stroke="#173a8a" stroke-width="2" />' +
    '<path d="M21,1 A20,20 0 0,1 1,21" fill="none" stroke="rgba(23,58,138,0.55)" stroke-width="1.2" />' +
    '<circle cx="6.5" cy="6.5" r="2.2" fill="#173a8a" />' +
    '</svg>';
  return (
    `<span class="az-corner az-corner-tl" aria-hidden="true">${pathSvg}</span>` +
    `<span class="az-corner az-corner-tr" aria-hidden="true">${pathSvg}</span>` +
    `<span class="az-corner az-corner-bl" aria-hidden="true">${pathSvg}</span>` +
    `<span class="az-corner az-corner-br" aria-hidden="true">${pathSvg}</span>`
  );
}

/**
 * Pure zero-network WebAudio synthesizer for Corridor of the Lotus.
 * Supports safe autoplay unlock, headless/muted fallback, 9 prop effects,
 * turret ratchets, portal chimes, and Ending A/B/C scores (incl. Ending C Shepard-Risset tone).
 */
export class LotusAudioEngine {
  constructor(bus = null) {
    this.bus = bus;
    this.ctx = null;
    this.masterGain = null;
    this.muted = false;
    this.unlocked = false;
    this._ambientTimer = null;
    this._ambientStep = 0;
    this._unsubs = [];

    this._pentatonicHz = [293.66, 329.63, 392.0, 440.0, 493.88, 587.33];
    this._lastRotatorAudioAt = 0;
    this._lastPortalAudioAt = 0;
    this._endingState = {
      activeKey: null,
      startedAt: 0,
      lastElapsed: -1,
      singularityTriggered: false,
      dawnTriggered: false,
      lastTickAt: 0,
      lastBeatStep: -1,
      shepardPhase: 0,
      cuesFired: []
    };
    this._shepardNodes = null;
    this._noiseBuffer = null;

    this._subscribeBus();
  }

  _subscribeBus() {
    if (!this.bus || typeof this.bus.on !== 'function') return;
    this._unsubs.push(
      this.bus.on(EVENTS.CAMERA_ROTATED, () => {
        if (!this._rotateCooldown) {
          this.playRotateChime();
          this._rotateCooldown = true;
          if (typeof setTimeout === 'function') {
            setTimeout(() => {
              this._rotateCooldown = false;
            }, 160);
          }
        }
      }),
      this.bus.on(EVENTS.ILLUSION_ALIGNED, () => {
        this.playAlignedChord();
      }),
      this.bus.on(EVENTS.PLATE_TOGGLED, (payload) => {
        if (payload?.active === true) {
          this.playPlateRumble();
        }
      }),
      this.bus.on(EVENTS.ROTATOR_TURNED, () => {
        this.playRotatorTurn();
      }),
      this.bus.on(EVENTS.LORE_TRIGGERED, () => {
        this.playLoreChime();
      }),
      this.bus.on(EVENTS.NAV_GOAL_REACHED, () => {
        this.playCelebrationChime();
      })
    );
  }

  _ensureContext() {
    if (this.ctx) return this.ctx;
    if (typeof window === 'undefined') return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    try {
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.muted ? 0 : 0.36;
      this.masterGain.connect(this.ctx.destination);
      return this.ctx;
    } catch {
      this.ctx = null;
      this.masterGain = null;
      return null;
    }
  }

  unlock() {
    const ctx = this._ensureContext();
    if (!ctx) return false;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    if (!this.unlocked) {
      this.unlocked = true;
      this._startAmbientLoop();
    }
    return true;
  }

  isMuted() {
    return this.muted;
  }

  setMuted(nextMuted) {
    this.muted = Boolean(nextMuted);
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.setTargetAtTime(
          this.muted ? 0 : 0.36,
          this.ctx.currentTime,
          0.04
        );
      } catch {}
    }
    return this.muted;
  }

  toggleMute() {
    this.unlock();
    return this.setMuted(!this.muted);
  }

  _canPlayAudio() {
    if (this.muted || !this.unlocked) return false;
    const ctx = this._ensureContext();
    return Boolean(ctx && ctx.state === 'running' && this.masterGain);
  }

  _playTone({
    freq = 440,
    type = 'sine',
    duration = 0.35,
    gain = 0.14,
    attack = 0.015,
    freqEnd = null,
    delay = 0
  }) {
    if (!this._canPlayAudio()) return;
    const ctx = this.ctx;
    try {
      const now = ctx.currentTime + delay;
      const osc = ctx.createOscillator();
      const amp = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(Math.max(20, freq), now);
      if (freqEnd !== null) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(20, freqEnd), now + Math.max(0.02, duration));
      }

      amp.gain.setValueAtTime(0.0001, now);
      amp.gain.linearRampToValueAtTime(Math.max(0.0002, gain), now + Math.max(0.004, attack));
      amp.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(0.02, duration));

      osc.connect(amp);
      amp.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + duration + 0.04);
    } catch {}
  }

  _playNoiseBurst({
    duration = 0.25,
    gain = 0.06,
    filterType = 'bandpass',
    freqStart = 900,
    freqEnd = 400,
    q = 1.6,
    delay = 0
  } = {}) {
    if (!this._canPlayAudio()) return;
    const ctx = this.ctx;
    try {
      if (!this._noiseBuffer) {
        const len = Math.floor(ctx.sampleRate * 0.8);
        const buf = ctx.createBuffer(1, len, ctx.sampleRate);
        const ch = buf.getChannelData(0);
        for (let i = 0; i < len; i += 1) {
          ch[i] = Math.random() * 2 - 1;
        }
        this._noiseBuffer = buf;
      }
      const now = ctx.currentTime + delay;
      const src = ctx.createBufferSource();
      src.buffer = this._noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = filterType;
      filter.frequency.setValueAtTime(Math.max(40, freqStart), now);
      filter.frequency.exponentialRampToValueAtTime(Math.max(40, freqEnd), now + duration);
      filter.Q.value = q;

      const amp = ctx.createGain();
      amp.gain.setValueAtTime(0.0001, now);
      amp.gain.linearRampToValueAtTime(gain, now + 0.02);
      amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      src.connect(filter);
      filter.connect(amp);
      amp.connect(this.masterGain);
      src.start(now);
      src.stop(now + duration + 0.03);
    } catch {}
  }

  _startAmbientLoop() {
    if (this._ambientTimer !== null || typeof window === 'undefined') return;
    this._ambientTimer = window.setInterval(() => {
      if (this._endingState.activeKey) return;
      if (!this._canPlayAudio()) return;
      const step = this._ambientStep++;
      const note = this._pentatonicHz[step % this._pentatonicHz.length];
      this._playTone({
        freq: note,
        type: 'triangle',
        duration: 1.15,
        gain: 0.042,
        attack: 0.02
      });
      if (step % 4 === 0) {
        this._playTone({
          freq: 146.83,
          type: 'sine',
          duration: 3.4,
          gain: 0.038,
          attack: 0.45
        });
        this._playTone({
          freq: 220.0,
          type: 'sine',
          duration: 3.2,
          gain: 0.026,
          attack: 0.55
        });
      }
    }, 1850);
  }

  playTileTap() {
    this._playTone({
      freq: 360,
      freqEnd: 240,
      type: 'triangle',
      duration: 0.11,
      gain: 0.08,
      attack: 0.006
    });
  }

  playRotateChime() {
    const idx = Math.floor(Math.random() * 3) + 2;
    this._playTone({
      freq: this._pentatonicHz[idx],
      type: 'sine',
      duration: 0.34,
      gain: 0.08,
      attack: 0.012
    });
  }

  playRotatorTurn() {
    const nowMs = typeof performance !== 'undefined' ? performance.now() : Date.now();
    if (nowMs - this._lastRotatorAudioAt < 80) return;
    this._lastRotatorAudioAt = nowMs;
    this._playTone({
      freq: 196,
      freqEnd: 112,
      type: 'triangle',
      duration: 0.18,
      gain: 0.1,
      attack: 0.008
    });
    this._playTone({
      freq: 523.25,
      freqEnd: 659.25,
      type: 'sine',
      duration: 0.28,
      gain: 0.075,
      attack: 0.01,
      delay: 0.05
    });
    this._playNoiseBurst({
      duration: 0.08,
      gain: 0.04,
      filterType: 'bandpass',
      freqStart: 1200,
      freqEnd: 600
    });
  }

  playStagePortal() {
    const nowMs = typeof performance !== 'undefined' ? performance.now() : Date.now();
    if (nowMs - this._lastPortalAudioAt < 180) return;
    this._lastPortalAudioAt = nowMs;
    const notes = [329.63, 440.0, 587.33, 659.25, 880.0];
    notes.forEach((hz, idx) => {
      this._playTone({
        freq: hz,
        type: 'sine',
        duration: 0.55,
        gain: 0.085,
        attack: 0.015,
        delay: idx * 0.06
      });
    });
    this._playTone({
      freq: 146.83,
      freqEnd: 293.66,
      type: 'triangle',
      duration: 0.65,
      gain: 0.065,
      attack: 0.04
    });
  }

  playPropEffect(type) {
    switch (type) {
      case 'flash_zero7_vanish':
        this._playTone({ freq: 980, freqEnd: 210, type: 'sawtooth', duration: 0.26, gain: 0.09, attack: 0.005 });
        this._playTone({ freq: 1318.5, freqEnd: 1760, type: 'sine', duration: 0.22, gain: 0.08, attack: 0.005, delay: 0.06 });
        break;
      case 'astral_dissolve':
        [783.99, 987.77, 1174.66].forEach((hz, idx) => {
          this._playTone({ freq: hz, freqEnd: hz * 0.92, type: 'sine', duration: 0.65, gain: 0.075, attack: 0.025, delay: idx * 0.09 });
        });
        break;
      case 'shadow_retreat':
        this._playNoiseBurst({ duration: 0.32, gain: 0.08, filterType: 'lowpass', freqStart: 950, freqEnd: 180 });
        this._playTone({ freq: 220, freqEnd: 110, type: 'triangle', duration: 0.42, gain: 0.08, attack: 0.015, delay: 0.05 });
        break;
      case 'rift_leap_drop_shard':
        this._playTone({ freq: 190, freqEnd: 880, type: 'sawtooth', duration: 0.24, gain: 0.075, attack: 0.01 });
        this._playTone({ freq: 1480, freqEnd: 1320, type: 'sine', duration: 0.35, gain: 0.09, attack: 0.005, delay: 0.16 });
        this._playTone({ freq: 2217.46, type: 'sine', duration: 0.28, gain: 0.05, attack: 0.005, delay: 0.21 });
        break;
      case 'mist_vanish':
        this._playNoiseBurst({ duration: 0.5, gain: 0.055, filterType: 'bandpass', freqStart: 700, freqEnd: 320, q: 2.2 });
        this._playTone({ freq: 293.66, freqEnd: 440, type: 'sine', duration: 0.72, gain: 0.07, attack: 0.06 });
        break;
      case 'drop_lit_candle_vanish':
        this._playTone({ freq: 587.33, type: 'sine', duration: 0.55, gain: 0.085, attack: 0.02 });
        this._playTone({ freq: 880, type: 'triangle', duration: 0.62, gain: 0.06, attack: 0.04, delay: 0.08 });
        this._playNoiseBurst({ duration: 0.18, gain: 0.035, filterType: 'highpass', freqStart: 2200, freqEnd: 1400, delay: 0.05 });
        break;
      case 'drop_herbal_tea_vanish':
        this._playTone({ freq: 1046.5, type: 'sine', duration: 0.28, gain: 0.085, attack: 0.004 });
        this._playTone({ freq: 1567.98, type: 'sine', duration: 0.32, gain: 0.055, attack: 0.005, delay: 0.05 });
        this._playTone({ freq: 392.0, type: 'triangle', duration: 0.55, gain: 0.06, attack: 0.02, delay: 0.12 });
        break;
      case 'unmask_to_ryan':
        this._playNoiseBurst({ duration: 0.14, gain: 0.085, filterType: 'highpass', freqStart: 1900, freqEnd: 800 });
        this._playTone({ freq: 293.66, type: 'sine', duration: 0.8, gain: 0.09, attack: 0.02, delay: 0.08 });
        this._playTone({ freq: 440.0, type: 'triangle', duration: 0.85, gain: 0.08, attack: 0.03, delay: 0.12 });
        this._playTone({ freq: 659.25, type: 'sine', duration: 0.95, gain: 0.08, attack: 0.04, delay: 0.16 });
        break;
      case 'drop_pocket_watch_vanish':
        [0, 0.13, 0.26].forEach((d) => {
          this._playTone({ freq: 2400, freqEnd: 1800, type: 'square', duration: 0.035, gain: 0.04, attack: 0.002, delay: d });
        });
        this._playTone({ freq: 587.33, type: 'sine', duration: 0.72, gain: 0.08, attack: 0.015, delay: 0.34 });
        break;
      default:
        this.playLoreChime();
        break;
    }
  }

  playAlignedChord() {
    this._playTone({ freq: 293.66, type: 'sine', duration: 0.95, gain: 0.11, attack: 0.02, delay: 0 });
    this._playTone({ freq: 440.0, type: 'triangle', duration: 1.05, gain: 0.09, attack: 0.03, delay: 0.05 });
    this._playTone({ freq: 587.33, type: 'sine', duration: 1.2, gain: 0.085, attack: 0.04, delay: 0.1 });
  }

  playPlateRumble() {
    this._playTone({
      freq: 92,
      freqEnd: 56,
      type: 'sawtooth',
      duration: 0.45,
      gain: 0.075,
      attack: 0.025
    });
    this._playTone({
      freq: 138,
      freqEnd: 110,
      type: 'triangle',
      duration: 0.38,
      gain: 0.065,
      attack: 0.02,
      delay: 0.04
    });
  }

  playLoreChime() {
    this._playTone({ freq: 493.88, type: 'sine', duration: 0.45, gain: 0.08, delay: 0 });
    this._playTone({ freq: 587.33, type: 'sine', duration: 0.55, gain: 0.085, delay: 0.08 });
  }

  playCelebrationChime() {
    const notes = [293.66, 392.0, 440.0, 587.33, 659.25];
    notes.forEach((hz, idx) => {
      this._playTone({
        freq: hz,
        type: idx % 2 === 0 ? 'sine' : 'triangle',
        duration: 0.72,
        gain: 0.1,
        attack: 0.015,
        delay: idx * 0.085
      });
    });
  }

  _stopShepardRig() {
    if (!this._shepardNodes) return;
    try {
      for (const layer of this._shepardNodes.layers) {
        layer.osc.stop();
        layer.osc.disconnect();
        layer.gain.disconnect();
      }
      this._shepardNodes.bus.disconnect();
    } catch {}
    this._shepardNodes = null;
  }

  _ensureShepardRig() {
    if (this._shepardNodes || !this._canPlayAudio()) return this._shepardNodes;
    try {
      const ctx = this.ctx;
      const bus = ctx.createGain();
      bus.gain.value = 0.0001;
      bus.connect(this.masterGain);
      const layers = [];
      for (let k = 0; k < 6; k += 1) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 110 * Math.pow(2, k);
        gain.gain.value = 0.0001;
        osc.connect(gain);
        gain.connect(bus);
        osc.start();
        layers.push({ osc, gain, octaveOffset: k });
      }
      this._shepardNodes = { bus, layers };
      return this._shepardNodes;
    } catch {
      this._shepardNodes = null;
      return null;
    }
  }

  playEndingMusic(endingKey = 'A') {
    this.stopEndingMusic();
    this._endingState = {
      activeKey: endingKey,
      startedAt: typeof performance !== 'undefined' ? performance.now() : Date.now(),
      lastElapsed: 0,
      singularityTriggered: false,
      dawnTriggered: false,
      lastTickAt: -1,
      lastBeatStep: -1,
      shepardPhase: 0,
      cuesFired: [`ending_${String(endingKey).toLowerCase()}_init`]
    };

    if (endingKey === 'A') {
      [293.66, 440.0, 659.25].forEach((hz, i) => {
        this._playTone({ freq: hz, type: 'sine', duration: 2.8, gain: 0.08, attack: 0.18, delay: i * 0.2 });
      });
    } else if (endingKey === 'B') {
      [196.0, 293.66, 440.0, 587.33].forEach((hz, i) => {
        this._playTone({ freq: hz, type: i % 2 ? 'triangle' : 'sawtooth', duration: 2.2, gain: 0.065, attack: 0.08, delay: i * 0.14 });
      });
    } else if (endingKey === 'C') {
      this._ensureShepardRig();
      this._playTone({ freq: 220.0, type: 'sine', duration: 1.8, gain: 0.07, attack: 0.15 });
    }
    return this._endingState;
  }

  handleEndingCue(cue) {
    if (!cue || !cue.id) return;
    if (!this._endingState.cuesFired.includes(cue.id)) {
      this._endingState.cuesFired.push(cue.id);
    }
    switch (cue.id) {
      case 'ending_a_seal_lock':
        this.playAlignedChord();
        break;
      case 'ending_a_watch_chime':
        this._playTone({ freq: 587.33, type: 'sine', duration: 1.6, gain: 0.095, attack: 0.01 });
        this._playTone({ freq: 880.0, type: 'sine', duration: 1.8, gain: 0.06, attack: 0.03, delay: 0.18 });
        break;
      case 'ending_b_triad_resonance':
        [293.66, 440.0, 659.25, 880.0].forEach((hz, i) => {
          this._playTone({ freq: hz, type: 'triangle', duration: 1.8, gain: 0.075, attack: 0.06, delay: i * 0.1 });
        });
        break;
      case 'ending_b_gates_open':
        this.playCelebrationChime();
        break;
      case 'ending_c_heaven_ignite':
      case 'ending_c_made_in_heaven':
        this._ensureShepardRig();
        break;
      case 'ending_c_singularity_whiteout':
        this._triggerSingularitySilence();
        break;
      case 'ending_c_dawn_554':
        this._triggerDawn554Resolution();
        break;
      default:
        break;
    }
  }

  _triggerSingularitySilence() {
    if (this._endingState.singularityTriggered) return;
    this._endingState.singularityTriggered = true;
    if (this._shepardNodes && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this._shepardNodes.bus.gain.setTargetAtTime(0.0001, now, 0.08);
      } catch {}
    }
    this._playTone({
      freq: 880,
      freqEnd: 55,
      type: 'sine',
      duration: 0.55,
      gain: 0.11,
      attack: 0.005
    });
  }

  _triggerDawn554Resolution() {
    if (this._endingState.dawnTriggered) return;
    this._endingState.dawnTriggered = true;
    this._stopShepardRig();
    const dawnChord = [293.66, 329.63, 440.0, 587.33, 659.25, 880.0];
    dawnChord.forEach((hz, idx) => {
      this._playTone({
        freq: hz,
        type: idx % 2 === 0 ? 'sine' : 'triangle',
        duration: 4.5,
        gain: 0.072,
        attack: 0.22,
        delay: idx * 0.16
      });
    });
  }

  updateEndingAudio(endingKey, elapsed = 0, ringSpeed = 1) {
    if (!endingKey) return;
    if (this._endingState.activeKey !== endingKey) {
      this.playEndingMusic(endingKey);
    }
    const t = Math.max(0, Number(elapsed) || 0);
    const speed = Math.max(0.5, Number(ringSpeed) || 1);
    this._endingState.lastElapsed = t;

    if (endingKey === 'C') {
      if (t < 34) {
        // Shepard-Risset perpetual rising tone + accelerating clock tick
        const progress = t / 34;
        const rate = 0.14 + Math.pow(progress, 1.85) * 0.65;
        this._endingState.shepardPhase = (t * rate) % 1;

        const rig = this._ensureShepardRig();
        if (rig && this.ctx && this.ctx.state === 'running' && !this.muted) {
          try {
            const now = this.ctx.currentTime;
            const masterLevel = 0.09 + progress * 0.11;
            rig.bus.gain.setTargetAtTime(masterLevel, now, 0.05);
            for (const layer of rig.layers) {
              const x = (layer.octaveOffset + this._endingState.shepardPhase) % 6;
              const freq = 55 * Math.pow(2, x);
              // Smooth Gaussian bell peaking near middle octaves (x ~ 3.0)
              const norm = (x - 3.0) / 1.45;
              const env = Math.exp(-0.5 * norm * norm);
              layer.osc.frequency.setTargetAtTime(freq, now, 0.03);
              layer.gain.gain.setTargetAtTime(Math.max(0.0001, env * 0.26), now, 0.04);
            }
          } catch {}
        }

        // Accelerating clock tick cadence tied to ringSpeed
        const tickInterval = Math.max(0.065, 0.62 / Math.pow(speed, 0.68));
        if (this._endingState.lastTickAt < 0 || t - this._endingState.lastTickAt >= tickInterval) {
          this._endingState.lastTickAt = t;
          this._playTone({
            freq: 1500 + Math.min(1800, speed * 90),
            freqEnd: 780,
            type: 'triangle',
            duration: 0.03,
            gain: 0.045 + Math.min(0.04, progress * 0.04),
            attack: 0.002
          });
        }
      } else if (t < 48) {
        this._triggerSingularitySilence();
      } else {
        this._triggerDawn554Resolution();
        const beat = Math.floor((t - 48) / 2.2);
        if (beat > this._endingState.lastBeatStep) {
          this._endingState.lastBeatStep = beat;
          const note = this._pentatonicHz[beat % this._pentatonicHz.length];
          this._playTone({ freq: note, type: 'sine', duration: 2.0, gain: 0.06, attack: 0.1 });
        }
      }
    } else if (endingKey === 'A') {
      const beat = Math.floor(t / 2.4);
      if (beat > this._endingState.lastBeatStep) {
        this._endingState.lastBeatStep = beat;
        const motif = [293.66, 392.0, 440.0, 329.63, 293.66];
        this._playTone({
          freq: motif[beat % motif.length],
          type: 'sine',
          duration: 2.1,
          gain: 0.055,
          attack: 0.12
        });
      }
    } else if (endingKey === 'B') {
      const beat = Math.floor(t / 1.6);
      if (beat > this._endingState.lastBeatStep) {
        this._endingState.lastBeatStep = beat;
        const chord = [293.66, 440.0, 587.33, 659.25];
        this._playTone({
          freq: chord[beat % chord.length],
          type: beat % 2 ? 'triangle' : 'sine',
          duration: 1.5,
          gain: 0.058,
          attack: 0.05
        });
      }
    }
  }

  stopEndingMusic() {
    this._stopShepardRig();
    this._endingState = {
      activeKey: null,
      startedAt: 0,
      lastElapsed: -1,
      singularityTriggered: false,
      dawnTriggered: false,
      lastTickAt: -1,
      lastBeatStep: -1,
      shepardPhase: 0,
      cuesFired: []
    };
  }

  getEndingAudioState() {
    return {
      ...this._endingState,
      hasShepardRig: Boolean(this._shepardNodes)
    };
  }

  dispose() {
    this.stopEndingMusic();
    if (this._ambientTimer !== null && typeof window !== 'undefined') {
      window.clearInterval(this._ambientTimer);
      this._ambientTimer = null;
    }
    for (const unsub of this._unsubs) {
      if (typeof unsub === 'function') unsub();
    }
    this._unsubs = [];
    if (this.ctx && typeof this.ctx.close === 'function') {
      this.ctx.close().catch(() => {});
      this.ctx = null;
    }
  }
}

/**
 * Inject Macau Azulejos glazed ceramic tile UI stylesheet once into document.head.
 */
function injectLotusStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('lotus-ui-styles')) return;

  const style = document.createElement('style');
  style.id = 'lotus-ui-styles';
  style.textContent = `
    :root {
      color-scheme: light;
      --az-glaze: #fffcf7;
      --az-glaze-deep: #f4efe5;
      --az-limestone: #ebe6da;
      --az-limestone-edge: #d5cebe;
      --az-cobalt: #2b579a;
      --az-cobalt-ink: #1e3f76;
      --az-cobalt-mid: #3a6ab5;
      --az-gold: #d4a048;
      --az-gold-bright: #ebc576;
      --az-teal: #23837a;
      --az-mint-glow: #6fe0cc;
      --az-shadow: rgba(35, 71, 130, 0.16);
      --az-body-ink: #162447;
      --az-surface-glass: rgba(255, 252, 247, 0.86);
      --az-surface-card: rgba(255, 252, 247, 0.96);
    }

    :root[data-bg-mode="night"] {
      color-scheme: dark;
      --az-glaze: #101b33;
      --az-glaze-deep: #0b1326;
      --az-limestone: #26385e;
      --az-limestone-edge: #385082;
      --az-cobalt: #82aeff;
      --az-cobalt-ink: #f0f5ff;
      --az-cobalt-mid: #bad2ff;
      --az-gold: #f0c060;
      --az-gold-bright: #ffe199;
      --az-teal: #5ce6d0;
      --az-mint-glow: #7ef7e4;
      --az-shadow: rgba(2, 6, 18, 0.62);
      --az-body-ink: #e8efff;
      --az-surface-glass: rgba(12, 22, 44, 0.86);
      --az-surface-card: rgba(14, 24, 48, 0.95);
    }

    .lotus-hud-root,
    .lotus-hud-root * {
      box-sizing: border-box;
    }

    .lotus-hud-root button:focus-visible,
    .lotus-hud-root [tabindex]:focus-visible {
      outline: 2.5px solid var(--az-gold);
      outline-offset: 2px;
    }

    @supports (font-size-adjust: from-font) {
      .lotus-hud-root {
        font-size-adjust: from-font;
      }
    }

    .lotus-modal-body {
      scrollbar-width: thin;
      scrollbar-color: var(--az-cobalt) transparent;
    }
    @supports not (scrollbar-width: thin) {
      .lotus-modal-body::-webkit-scrollbar {
        width: 8px;
      }
      .lotus-modal-body::-webkit-scrollbar-thumb {
        background: var(--az-cobalt);
        border-radius: 999px;
      }
    }

    .lotus-hud-root {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 20;
      font-family: "Songti TC", "Noto Serif TC", "PMingLiU", "PingFang TC", Georgia, serif;
      color: var(--az-cobalt-ink);
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    .lotus-sans {
      font-family: "Gill Sans", "Avenir Next", "Helvetica Neue", "PingFang TC", sans-serif;
    }

    /* Glazed Macau 2x4 Ceramic Tile Surface + Limestone Outer Molding + Double Cobalt Border */
    .az-tile-panel {
      position: relative;
      background-color: var(--az-glaze);
      background-image:
        linear-gradient(135deg, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0) 48%, rgba(215, 212, 200, 0.25) 100%),
        repeating-linear-gradient(90deg, rgba(168, 164, 150, 0.16) 0 1px, transparent 1px 78px),
        repeating-linear-gradient(0deg, rgba(168, 164, 150, 0.16) 0 1px, transparent 1px 64px);
      border: 4px solid var(--az-limestone);
      border-radius: 6px;
      box-shadow:
        0 10px 26px var(--az-shadow),
        0 1px 0 var(--az-limestone-edge),
        inset 0 0 0 2px var(--az-cobalt),
        inset 0 0 0 6px var(--az-glaze),
        inset 0 0 0 7.5px rgba(23, 58, 138, 0.65);
      color: var(--az-cobalt-ink);
    }

    .az-corner {
      position: absolute;
      width: 22px;
      height: 22px;
      pointer-events: none;
      z-index: 2;
    }
    .az-corner svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .az-corner-tl { top: 4px; left: 4px; }
    .az-corner-tr { top: 4px; right: 4px; transform: scaleX(-1); }
    .az-corner-bl { bottom: 4px; left: 4px; transform: scaleY(-1); }
    .az-corner-br { bottom: 4px; right: 4px; transform: scale(-1, -1); }

    /* Shared Tactile Azulejo Button (>= 44x44 touch target guarantee) */
    .az-btn {
      pointer-events: auto;
      min-width: 46px;
      min-height: 46px;
      padding: 8px 13px;
      border-radius: 8px;
      border: 1.5px solid rgba(43, 87, 154, 0.44);
      background: rgba(255, 252, 247, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow:
        0 4px 12px rgba(35, 71, 130, 0.14),
        inset 0 0 0 1px rgba(255, 255, 255, 0.72);
      color: var(--az-cobalt-ink);
      font-family: inherit;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.04em;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      line-height: 1.15;
      transition: transform 0.14s ease, background 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
    }
    .az-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      background: rgba(255, 253, 250, 0.96);
      border-color: var(--az-cobalt);
      box-shadow: 0 6px 16px rgba(35, 71, 130, 0.22), inset 0 0 0 1.5px rgba(43, 87, 154, 0.18);
    }
    .az-btn:active:not(:disabled) {
      transform: translateY(0);
    }
    .az-btn:disabled,
    .az-btn.is-locked {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .az-btn-primary {
      background-color: var(--az-cobalt);
      background-image: linear-gradient(180deg, #3264ad 0%, #234782 100%);
      color: #fffcf7;
      border-color: #1c3b6f;
      box-shadow: 0 5px 16px rgba(35, 71, 130, 0.28), inset 0 0 0 1.5px rgba(235, 197, 118, 0.52);
    }
    .az-btn-primary:hover:not(:disabled) {
      background-image: linear-gradient(180deg, #3a6fc0 0%, #285195 100%);
      box-shadow: 0 7px 20px rgba(35, 71, 130, 0.36), inset 0 0 0 1.5px rgba(235, 197, 118, 0.78);
    }
    .az-btn-gold {
      border-color: rgba(182, 131, 40, 0.72);
      background: linear-gradient(180deg, rgba(255, 250, 235, 0.94) 0%, rgba(247, 232, 194, 0.92) 100%);
      color: #5b3b00;
    }
    .az-btn-active {
      background-color: var(--az-cobalt);
      background-image: linear-gradient(180deg, #3264ad 0%, #21457d 100%);
      color: #fffcf7;
      border-color: var(--az-gold);
    }

    /* ======================== 3D TITLE SCREEN OVERLAY ======================== */
    .lotus-title-overlay {
      position: fixed;
      inset: 0;
      z-index: 25;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px 16px;
      background: transparent;
      transition: opacity 0.42s ease, visibility 0.42s ease;
    }
    .lotus-title-overlay[hidden] {
      display: none !important;
    }

    .lotus-title-plaque {
      pointer-events: auto;
      width: auto;
      max-width: min(460px, calc(100vw - 28px));
      padding: 10px 26px;
      text-align: center;
      border-radius: 14px;
      background: rgba(255, 251, 245, 0.72);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(43, 87, 154, 0.28);
      box-shadow: 0 8px 24px rgba(35, 71, 130, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.65);
    }
    .lotus-title-zh {
      margin: 0;
      font-size: clamp(22px, 3.4vw, 30px);
      font-weight: 800;
      letter-spacing: 0.34em;
      padding-left: 0.34em;
      color: #234782;
      line-height: 1.18;
    }
    .lotus-title-en {
      margin: 4px 0 0;
      font-family: "Gill Sans", "Avenir Next", "PingFang TC", sans-serif;
      font-size: clamp(10px, 1.4vw, 11.5px);
      font-weight: 700;
      letter-spacing: 0.2em;
      padding-left: 0.2em;
      color: rgba(43, 87, 154, 0.88);
      text-transform: uppercase;
    }

    .lotus-title-actions {
      pointer-events: auto;
      width: auto;
      max-width: min(820px, calc(100vw - 20px));
      padding: 8px 14px;
      border-radius: 26px;
      background: rgba(255, 251, 245, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(43, 87, 154, 0.24);
      box-shadow: 0 10px 28px rgba(35, 71, 130, 0.14), inset 0 0 0 1px rgba(255, 255, 255, 0.7);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .lotus-title-actions .az-btn {
      border-radius: 999px;
      min-width: 46px;
      min-height: 46px;
      padding: 8px 15px;
      white-space: nowrap;
      font-size: 13px;
    }
    .lotus-title-start-btn {
      min-height: 46px;
      padding: 8px 20px;
      font-size: 14px;
      letter-spacing: 0.14em;
    }

    /* ======================== IN-GAME MINIMAL HUD ======================== */
    .lotus-hud-top {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      padding: 12px 14px 8px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 10px;
      pointer-events: none;
    }
    .lotus-hud-top[hidden],
    .lotus-hud-bottom[hidden] {
      display: none !important;
    }

    .lotus-chapter-pill {
      pointer-events: auto;
      min-width: 46px;
      min-height: 48px;
      padding: 10px 18px 10px 15px;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 3px;
      cursor: pointer;
      text-align: left;
      max-width: min(410px, 48vw);
      background: rgba(255, 252, 247, 0.85);
      background-image: none;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1.5px solid rgba(43, 87, 154, 0.34);
      border-radius: 10px;
      box-shadow:
        0 8px 22px rgba(35, 71, 130, 0.12),
        inset 0 0 0 1px rgba(255, 255, 255, 0.72),
        inset 0 0 0 4px rgba(43, 87, 154, 0.08);
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .lotus-chapter-pill:hover {
      transform: translateY(-1px);
    }
    .lotus-ch-top-row {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .lotus-badge-ch {
      font-family: "Gill Sans", "Avenir Next", sans-serif;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.12em;
      padding: 2px 7px;
      border-radius: 4px;
      background: var(--az-cobalt);
      color: var(--az-glaze);
      flex-shrink: 0;
    }
    .lotus-badge-era {
      font-family: "Gill Sans", "Avenir Next", "PingFang TC", sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: var(--az-teal);
    }
    .lotus-chapter-pill-text {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: var(--az-cobalt-ink);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    .lotus-toolbar {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 6px;
      pointer-events: none;
    }
    .lotus-toolbar .az-btn {
      background: rgba(255, 252, 247, 0.85);
      background-image: none;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1.5px solid rgba(43, 87, 154, 0.36);
      min-width: 46px;
      min-height: 46px;
    }

    .lotus-toolbar .az-btn[hidden] {
      display: none !important;
    }

    .lotus-toast {
      position: fixed;
      top: 76px;
      left: 50%;
      transform: translateX(-50%) translateY(-8px);
      max-width: min(92vw, 540px);
      padding: 10px 18px;
      border-radius: 8px;
      border: 2px solid var(--az-cobalt);
      background: rgba(247, 246, 241, 0.96);
      box-shadow: 0 10px 26px var(--az-shadow), inset 0 0 0 2px rgba(23, 58, 138, 0.18);
      color: var(--az-cobalt-ink);
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-align: center;
      opacity: 0;
      transition: opacity 0.22s ease, transform 0.22s ease;
      pointer-events: none;
      z-index: 36;
    }
    .lotus-toast.is-visible {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    /* ======================== BOTTOM HUD + AZULEJO COMPASS ======================== */
    .lotus-hud-bottom {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 10px 14px 14px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 12px;
      pointer-events: none;
    }

    .lotus-center-stack {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      min-width: 0;
      pointer-events: none;
    }

    .lotus-actor-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: 8px;
      pointer-events: auto;
    }
    .lotus-actor-bar[hidden] {
      display: none !important;
    }
    .lotus-actor-btn {
      min-width: 46px;
      min-height: 46px;
      padding: 7px 14px;
      border-radius: 6px;
      border: 1.5px solid var(--az-cobalt);
      background: var(--az-glaze);
      color: var(--az-cobalt-ink);
      font-family: inherit;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .lotus-actor-btn.is-active {
      background: var(--az-cobalt);
      color: var(--az-glaze);
      border-color: var(--az-gold-bright);
      box-shadow: 0 3px 10px rgba(16, 42, 107, 0.34);
    }
    .lotus-plate-tag {
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 999px;
      background: var(--az-gold-bright);
      color: #412800;
    }

    .lotus-clear-banner {
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px 18px;
      font-weight: 700;
    }
    .lotus-clear-banner[hidden] {
      display: none !important;
    }

    /* Bottom-Right Azulejo Compass Alignment Dial */
    .lotus-alignment-hud {
      pointer-events: auto;
      flex: 0 0 auto;
      min-width: 204px;
      max-width: 270px;
      padding: 10px 16px 10px 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(255, 252, 247, 0.85);
      background-image: none;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1.5px solid rgba(43, 87, 154, 0.34);
      border-radius: 12px;
      box-shadow:
        0 8px 22px rgba(35, 71, 130, 0.12),
        inset 0 0 0 1px rgba(255, 255, 255, 0.72),
        inset 0 0 0 4px rgba(43, 87, 154, 0.08);
      transition: box-shadow 0.24s ease, border-color 0.24s ease;
    }
    .lotus-alignment-hud.is-aligned {
      border-color: rgba(58, 178, 156, 0.88);
      box-shadow:
        0 8px 26px rgba(96, 206, 186, 0.34),
        inset 0 0 0 1.5px rgba(111, 224, 204, 0.76),
        inset 0 0 0 4px rgba(212, 160, 72, 0.24);
    }
    .az-compass-dial {
      position: relative;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      flex-shrink: 0;
      border: 2px solid var(--az-cobalt);
      background: radial-gradient(circle, #ffffff 30%, #e5f3f0 100%);
      display: grid;
      place-items: center;
    }
    .lotus-alignment-hud.is-aligned .az-compass-dial {
      border-color: #2ea892;
      box-shadow: 0 0 14px rgba(111, 224, 204, 0.65);
    }
    .az-compass-needle {
      width: 34px;
      height: 34px;
      transition: transform 0.2s ease-out;
    }
    .az-compass-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }
    .lotus-align-kicker {
      font-family: "Gill Sans", "Avenir Next", sans-serif;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.14em;
      color: var(--az-cobalt-mid);
      text-transform: uppercase;
    }
    .lotus-align-main {
      display: flex;
      align-items: baseline;
      gap: 7px;
      flex-wrap: wrap;
    }
    .lotus-align-deg {
      font-family: "Gill Sans", "Avenir Next", sans-serif;
      font-size: 17px;
      font-weight: 800;
      color: var(--az-cobalt-ink);
    }
    .lotus-align-status {
      font-size: 12px;
      font-weight: 700;
      color: var(--az-cobalt);
    }
    .lotus-align-status.is-aligned-text {
      color: #1b7e6d;
    }

    /* ======================== DIALOGUE CARD (3:4 NON-CROPPED PORTRAIT + CRISP SUBCAPTION) ======================== */
    .lotus-dialogue-card {
      pointer-events: auto;
      width: min(932px, 95vw, 100%);
      padding: 18px 24px;
      display: grid;
      grid-template-columns: 184px 1fr;
      gap: 20px;
      align-items: stretch;
      border-radius: 14px;
      background-color: var(--az-surface-card);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 28;
    }
    .lotus-dialogue-card[hidden] {
      display: none !important;
    }

    .lotus-portrait-col {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      gap: 7px;
      width: 184px;
      flex-shrink: 0;
    }

    .lotus-portrait-frame {
      width: 184px;
      aspect-ratio: 3 / 4;
      align-self: center;
      border-radius: 8px;
      border: 2px solid var(--az-cobalt);
      background: #fffcf7;
      padding: 0;
      box-shadow: 0 5px 14px rgba(35, 71, 130, 0.2);
      overflow: hidden;
      flex-shrink: 0;
    }
    .lotus-portrait-frame img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
    .lotus-portrait-subcaption {
      width: 100%;
      padding: 6px 8px;
      border-radius: 7px;
      border: 1.5px solid rgba(43, 87, 154, 0.32);
      background: rgba(244, 239, 229, 0.92);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .lotus-portrait-cap-name {
      font-size: 16px;
      font-weight: 800;
      line-height: 1.24;
      letter-spacing: 0.04em;
      color: var(--az-cobalt-ink);
      overflow-wrap: break-word;
    }
    .lotus-portrait-cap-sub {
      font-family: "Gill Sans", "Avenir Next", "PingFang TC", sans-serif;
      font-size: 13px;
      font-weight: 700;
      line-height: 1.26;
      letter-spacing: 0.05em;
      color: var(--az-teal);
      overflow-wrap: break-word;
    }

    .lotus-dialogue-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      min-width: 0;
    }
    .lotus-dialogue-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      border-bottom: 1.5px solid rgba(43, 87, 154, 0.22);
      padding-bottom: 6px;
    }
    .lotus-speaker-name {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: 0.06em;
      color: var(--az-cobalt-ink);
    }
    .lotus-speaker-era {
      display: inline-block;
      margin-left: 6px;
      padding: 3px 10px;
      border-radius: 999px;
      background: rgba(35, 131, 122, 0.12);
      font-family: "Gill Sans", "Avenir Next", sans-serif;
      font-size: 12.5px;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: var(--az-teal);
    }
    .lotus-speaker-era:empty {
      display: none;
    }
    .lotus-dialogue-title {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.14em;
      color: var(--az-cobalt-mid);
      opacity: 0.92;
    }
    .lotus-dialogue-text {
      margin: 0;
      font-size: 17.5px;
      line-height: 1.72;
      color: var(--az-body-ink);
      min-height: 76px;
    }
    .lotus-dialogue-foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-top: 4px;
    }
    .lotus-page-count,
    .lotus-dialogue-page {
      font-family: "Gill Sans", "Avenir Next", sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: var(--az-cobalt-mid);
    }
    .lotus-dialogue-next-btn {
      min-width: 128px;
      min-height: 48px;
      padding: 0 22px;
      font-size: 15.5px;
    }

    /* ======================== MODALS (ATLAS, CODEX, ALTAR, EPILOGUE MURAL) ======================== */
    .lotus-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 40;
      background: rgba(11, 20, 44, 0.68);
      backdrop-filter: blur(4px);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 14px;
      pointer-events: auto;
    }
    .lotus-modal-backdrop.is-open {
      display: flex;
    }

    .lotus-modal-panel {
      width: min(940px, 100%);
      max-height: min(88dvh, 780px);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .lotus-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 14px 20px 12px;
      border-bottom: 2px solid rgba(23, 58, 138, 0.22);
      background: rgba(23, 58, 138, 0.05);
    }
    .lotus-modal-title {
      margin: 0;
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 0.08em;
      color: var(--az-cobalt-ink);
    }
    .lotus-modal-close {
      min-width: 46px;
      min-height: 46px;
      padding: 0;
      border-radius: 6px;
    }
    .lotus-modal-body {
      padding: 14px 18px 18px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    /* Stage Atlas (12 Chapters x 29 Micro-Stages) */
    .lotus-chapter-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
      gap: 12px;
    }
    .lotus-chapter-card {
      padding: 11px 12px;
      border-radius: 6px;
      border: 2px solid rgba(23, 58, 138, 0.42);
      background: rgba(255, 255, 255, 0.78);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .lotus-chapter-card.is-current {
      border-color: var(--az-cobalt);
      background: #ffffff;
      box-shadow: inset 0 0 0 1.5px var(--az-gold);
    }
    .lotus-ch-head-btn {
      width: 100%;
      justify-content: space-between;
      text-align: left;
      padding: 8px 10px;
    }
    .lotus-stage-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .lotus-stage-btn {
      min-width: 46px;
      min-height: 46px;
      padding: 6px 10px;
      font-size: 12px;
      flex: 1 1 auto;
      justify-content: flex-start;
      text-align: left;
    }

    .lotus-tag-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-size: 11px;
      font-weight: 700;
      color: var(--az-cobalt);
    }
    .lotus-badge {
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(23, 58, 138, 0.12);
      color: var(--az-cobalt-ink);
      font-size: 10.5px;
      font-weight: 700;
      white-space: nowrap;
    }
    .lotus-badge.is-done {
      background: rgba(28, 106, 116, 0.18);
      color: #114b53;
    }

    /* Codex Modal */
    .lotus-codex-section {
      padding: 12px 14px;
      border-radius: 6px;
      border: 1.5px solid rgba(23, 58, 138, 0.26);
      background: rgba(255, 255, 255, 0.65);
    }
    .lotus-codex-section h3 {
      margin: 0 0 10px;
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 0.06em;
      color: var(--az-cobalt-ink);
      border-bottom: 1.5px dashed rgba(23, 58, 138, 0.28);
      padding-bottom: 5px;
    }
    .lotus-codex-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 10px;
    }
    .lotus-codex-item {
      padding: 9px 11px;
      border-radius: 6px;
      background: rgba(247, 246, 241, 0.92);
      border: 1.5px solid rgba(23, 58, 138, 0.24);
      font-size: 12.5px;
      line-height: 1.5;
    }
    .lotus-codex-char-card {
      display: grid;
      grid-template-columns: 96px 1fr;
      gap: 12px;
      align-items: start;
    }
    .lotus-codex-portrait-fig {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
    .lotus-codex-char-card img {
      width: 96px;
      aspect-ratio: 3 / 4;
      object-fit: contain;
      border-radius: 6px;
      border: 1.5px solid var(--az-cobalt);
      background: #f7f6f1;
    }
    .lotus-codex-portrait-cap {
      font-size: 13px;
      font-weight: 800;
      line-height: 1.25;
      color: var(--az-cobalt-ink);
      text-align: center;
    }
    .lotus-codex-item.is-hidden-unlocked {
      border: 2px solid var(--az-gold);
      background: linear-gradient(145deg, #fffbe9, #f5e6bc);
    }

    /* Ch 12 Ending Altar & Large Azulejo Epilogue Mural */
    .lotus-ending-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
    }
    .lotus-ending-btn {
      min-height: 92px;
      padding: 14px;
      text-align: left;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 5px;
    }

    /* Cinematic Letterbox Subtitles + SKIP */
    .lotus-cinematic-overlay {
      position: fixed;
      inset: 0;
      z-index: 38;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .lotus-cinematic-overlay[hidden] {
      display: none !important;
    }
    .lotus-cin-topbar {
      padding: 16px 20px 26px;
      background: linear-gradient(180deg, rgba(8, 15, 34, 0.94) 0%, rgba(8, 15, 34, 0.72) 68%, transparent 100%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      color: #f7f6f1;
    }
    .lotus-cin-meta {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .lotus-cin-badge {
      font-family: "Gill Sans", "Avenir Next", sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.18em;
      color: var(--az-gold-bright);
    }
    .lotus-cin-phase {
      font-size: 13px;
      font-weight: 600;
      color: rgba(247, 246, 241, 0.88);
    }
    .lotus-cin-bottombar {
      padding: 28px 22px 24px;
      background: linear-gradient(0deg, rgba(8, 15, 34, 0.96) 0%, rgba(8, 15, 34, 0.78) 72%, transparent 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 6px;
      color: #f7f6f1;
    }
    .lotus-cin-sub-zh {
      margin: 0;
      font-size: clamp(16px, 2.4vw, 20px);
      font-weight: 700;
      letter-spacing: 0.08em;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
      max-width: min(780px, 92vw);
    }
    .lotus-cin-sub-en {
      margin: 0;
      font-family: "Gill Sans", "Avenir Next", sans-serif;
      font-size: clamp(11.5px, 1.5vw, 13.5px);
      letter-spacing: 0.08em;
      color: #dfe6fb;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.85);
      max-width: min(780px, 92vw);
    }

    /* Large Azulejo Epilogue Mural */
    .az-mural-panel {
      width: min(980px, 100%);
      max-height: min(90dvh, 840px);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .az-mural-hero {
      padding: 14px 16px;
      border-radius: 6px;
      border: 2px solid var(--az-cobalt);
      background: linear-gradient(135deg, #ffffff 0%, #eef2fa 100%);
      text-align: center;
    }
    .az-mural-hero h3 {
      margin: 0 0 4px;
      font-size: clamp(18px, 2.5vw, 23px);
      color: var(--az-cobalt-ink);
      letter-spacing: 0.1em;
    }
    .az-mural-hero .az-en-title {
      font-family: "Gill Sans", "Avenir Next", sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.14em;
      color: var(--az-cobalt);
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .az-mural-hero .az-sub {
      font-size: 13px;
      color: #203774;
    }
    .az-mural-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
      gap: 12px;
      justify-items: center;
    }
    .az-mural-cast-item {
      margin: 0;
      width: 100%;
      max-width: 152px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .az-mural-arch {
      width: 100%;
      max-width: 152px;
      aspect-ratio: 3 / 4;
      border-radius: 6px;
      border: 2px solid var(--az-cobalt);
      background: #f7f6f1;
      padding: 3px;
      box-shadow: 0 5px 14px rgba(16, 42, 107, 0.22);
    }
    .az-mural-arch img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
    .az-mural-caption {
      width: 100%;
      padding: 5px 8px;
      border-radius: 6px;
      background: rgba(244, 239, 229, 0.92);
      border: 1px solid rgba(43, 87, 154, 0.26);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }
    .az-mural-caption strong {
      font-size: 15.2px;
      font-weight: 800;
      color: var(--az-cobalt-ink);
      line-height: 1.25;
    }
    .az-mural-caption span {
      font-family: "Gill Sans", "Avenir Next", "PingFang TC", sans-serif;
      font-size: 13px;
      font-weight: 700;
      color: var(--az-teal);
      line-height: 1.25;
    }
    .lotus-ending-reader {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .lotus-ending-page-row {
      display: grid;
      grid-template-columns: 88px 1fr;
      gap: 12px;
      align-items: start;
      padding: 10px 12px;
      border-radius: 6px;
      border: 1.5px solid rgba(23, 58, 138, 0.25);
      background: rgba(255, 255, 255, 0.78);
    }
    .lotus-ending-page-row img {
      width: 88px;
      aspect-ratio: 3 / 4;
      object-fit: contain;
      border-radius: 4px;
      border: 1.5px solid var(--az-cobalt);
      background: #f7f6f1;
    }
    .az-mural-actions {
      flex-shrink: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      padding: 10px 16px 14px;
      border-top: 2px solid rgba(23, 58, 138, 0.22);
      background: rgba(247, 246, 241, 0.96);
    }

    /* Language Selector Modal */
    .lotus-lang-desc {
      margin: 0;
      font-size: 13.5px;
      line-height: 1.55;
      color: var(--az-body-ink);
    }
    .lotus-lang-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 10px;
    }
    .lotus-lang-btn {
      min-height: 68px;
      padding: 12px 16px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 3px;
      text-align: left;
    }
    .lotus-lang-native {
      font-size: 16px;
      font-weight: 800;
    }
    .lotus-lang-sub {
      font-family: "Gill Sans", "Avenir Next", sans-serif;
      font-size: 12px;
      font-weight: 600;
      opacity: 0.85;
    }

    /* ======================== NIGHT SKY AZULEJO PALETTE OVERRIDES ======================== */
    :root[data-bg-mode="night"] .az-tile-panel {
      background-color: var(--az-glaze);
      background-image:
        linear-gradient(135deg, rgba(130, 174, 255, 0.14) 0%, rgba(16, 27, 51, 0) 48%, rgba(6, 12, 26, 0.45) 100%),
        repeating-linear-gradient(90deg, rgba(130, 174, 255, 0.14) 0 1px, transparent 1px 78px),
        repeating-linear-gradient(0deg, rgba(130, 174, 255, 0.14) 0 1px, transparent 1px 64px);
      box-shadow:
        0 12px 28px var(--az-shadow),
        0 1px 0 var(--az-limestone-edge),
        inset 0 0 0 2px var(--az-cobalt),
        inset 0 0 0 6px var(--az-glaze),
        inset 0 0 0 7.5px rgba(130, 174, 255, 0.55);
      color: var(--az-cobalt-ink);
    }
    :root[data-bg-mode="night"] .az-btn {
      background: rgba(16, 28, 56, 0.88);
      border-color: rgba(130, 174, 255, 0.42);
      color: #edf3ff;
      box-shadow:
        0 4px 14px rgba(2, 6, 18, 0.42),
        inset 0 0 0 1px rgba(154, 192, 255, 0.22);
    }
    :root[data-bg-mode="night"] .az-btn:hover:not(:disabled) {
      background: rgba(24, 42, 82, 0.96);
      border-color: var(--az-cobalt);
      box-shadow: 0 6px 18px rgba(4, 10, 28, 0.55), inset 0 0 0 1.5px rgba(130, 174, 255, 0.35);
    }
    :root[data-bg-mode="night"] .az-btn-primary,
    :root[data-bg-mode="night"] .az-btn-active {
      background-color: #2f5fb3;
      background-image: linear-gradient(180deg, #3c73cf 0%, #244a8c 100%);
      color: #fffcf7;
      border-color: var(--az-gold);
    }
    :root[data-bg-mode="night"] .az-btn-gold {
      background: linear-gradient(180deg, rgba(98, 70, 22, 0.94) 0%, rgba(66, 46, 12, 0.94) 100%);
      border-color: rgba(240, 192, 96, 0.78);
      color: #ffe8b0;
    }
    :root[data-bg-mode="night"] .lotus-title-plaque,
    :root[data-bg-mode="night"] .lotus-title-actions {
      background: rgba(11, 20, 42, 0.84);
      border-color: rgba(130, 174, 255, 0.36);
      box-shadow: 0 12px 30px rgba(2, 6, 20, 0.56), inset 0 0 0 1px rgba(130, 174, 255, 0.2);
    }
    :root[data-bg-mode="night"] .lotus-title-zh {
      color: #f4f7ff;
    }
    :root[data-bg-mode="night"] .lotus-title-en {
      color: #b4cdfa;
    }
    :root[data-bg-mode="night"] .lotus-chapter-pill,
    :root[data-bg-mode="night"] .lotus-toolbar .az-btn,
    :root[data-bg-mode="night"] .lotus-alignment-hud {
      background: var(--az-surface-glass);
      border-color: rgba(130, 174, 255, 0.4);
      box-shadow:
        0 8px 24px rgba(2, 6, 20, 0.45),
        inset 0 0 0 1px rgba(130, 174, 255, 0.16);
    }
    :root[data-bg-mode="night"] .lotus-badge-ch {
      background: #4e80de;
      color: #ffffff;
    }
    :root[data-bg-mode="night"] .lotus-toast {
      background: rgba(14, 25, 50, 0.96);
      border-color: var(--az-gold);
      color: #f4f7ff;
    }
    :root[data-bg-mode="night"] .lotus-actor-btn {
      background: #142448;
      color: #eef4ff;
      border-color: rgba(130, 174, 255, 0.55);
    }
    :root[data-bg-mode="night"] .lotus-actor-btn.is-active {
      background: #3a6bc4;
      color: #ffffff;
      border-color: var(--az-gold-bright);
    }
    :root[data-bg-mode="night"] .az-compass-dial {
      background: radial-gradient(circle, #182b52 30%, #0d1730 100%);
      border-color: var(--az-cobalt);
    }
    :root[data-bg-mode="night"] .lotus-align-status.is-aligned-text {
      color: #6df2db;
    }
    :root[data-bg-mode="night"] .lotus-dialogue-card {
      background-color: var(--az-surface-card);
    }
    :root[data-bg-mode="night"] .lotus-portrait-frame,
    :root[data-bg-mode="night"] .lotus-codex-char-card img,
    :root[data-bg-mode="night"] .az-mural-arch,
    :root[data-bg-mode="night"] .lotus-ending-page-row img {
      background: #1a294a;
      border-color: var(--az-gold);
    }
    :root[data-bg-mode="night"] .lotus-portrait-subcaption,
    :root[data-bg-mode="night"] .az-mural-caption {
      background: rgba(20, 34, 66, 0.94);
      border-color: rgba(130, 174, 255, 0.42);
    }
    :root[data-bg-mode="night"] .lotus-modal-header,
    :root[data-bg-mode="night"] .az-mural-actions {
      background: rgba(12, 22, 44, 0.95);
      border-color: rgba(130, 174, 255, 0.28);
    }
    :root[data-bg-mode="night"] .lotus-chapter-card,
    :root[data-bg-mode="night"] .lotus-codex-section,
    :root[data-bg-mode="night"] .lotus-codex-item,
    :root[data-bg-mode="night"] .lotus-ending-page-row,
    :root[data-bg-mode="night"] .az-mural-hero {
      background: rgba(18, 30, 58, 0.9);
      background-image: none;
      border-color: rgba(130, 174, 255, 0.36);
      color: var(--az-body-ink);
    }
    :root[data-bg-mode="night"] .lotus-chapter-card.is-current {
      background: #1b2f5c;
      border-color: var(--az-gold);
    }
    :root[data-bg-mode="night"] .lotus-codex-item.is-hidden-unlocked {
      background: linear-gradient(145deg, #2b2310, #1f1a0e);
      border-color: var(--az-gold);
    }
    :root[data-bg-mode="night"] .lotus-badge {
      background: rgba(130, 174, 255, 0.18);
      color: #dfeaff;
    }
    :root[data-bg-mode="night"] .lotus-badge.is-done {
      background: rgba(92, 230, 208, 0.2);
      color: #84f5e4;
    }
    :root[data-bg-mode="night"] .lotus-mural-page-text,
    :root[data-bg-mode="night"] .lotus-ending-reader .az-mural-hero .az-sub {
      color: var(--az-body-ink);
    }

    @media (max-width: 680px) {
      .lotus-title-overlay {
        padding: 12px 10px 14px;
      }
      .lotus-title-plaque {
        padding: 9px 18px;
        max-width: calc(100vw - 20px);
      }
      .lotus-title-zh {
        font-size: 23px;
        letter-spacing: 0.28em;
        padding-left: 0.28em;
      }
      .lotus-title-en {
        font-size: 9.5px;
        letter-spacing: 0.14em;
        padding-left: 0.14em;
      }
      .lotus-title-actions {
        width: min(368px, calc(100vw - 20px));
        border-radius: 22px;
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        padding: 8px 10px;
        gap: 6px;
      }
      .lotus-title-start-btn {
        grid-column: 1 / -1;
        min-height: 46px;
      }
      .lotus-title-actions [data-testid="btn-title-atlas"],
      .lotus-title-actions [data-testid="btn-title-codex"] {
        grid-column: span 3;
      }
      .lotus-title-actions .az-btn:not(.lotus-title-start-btn):not([data-testid="btn-title-atlas"]):not([data-testid="btn-title-codex"]) {
        grid-column: span 2;
      }
      .lotus-title-actions .az-btn:not(.lotus-title-start-btn) {
        padding: 8px 4px;
        font-size: 12px;
        min-height: 46px;
      }
      .lotus-hud-top {
        flex-direction: column;
        align-items: stretch;
        padding: 8px 10px 4px;
        gap: 6px;
      }
      .lotus-chapter-pill {
        max-width: 100%;
        width: 100%;
        min-height: 46px;
        padding: 8px 14px;
      }
      .lotus-toolbar {
        justify-content: flex-start;
        gap: 6px;
      }
      .lotus-toolbar .az-btn {
        min-width: 46px;
        min-height: 46px;
        padding: 6px 9px;
      }
      .lotus-btn-label.lotus-hide-sm {
        display: none;
      }
      .lotus-hud-bottom {
        flex-direction: column;
        align-items: stretch;
        padding: 8px 10px 10px;
        gap: 8px;
      }
      .lotus-alignment-hud {
        align-self: flex-end;
        max-width: 100%;
        min-width: 185px;
        padding: 7px 10px;
      }
      .az-compass-dial {
        width: 40px;
        height: 40px;
      }
      .az-compass-needle {
        width: 28px;
        height: 28px;
      }
      .lotus-ending-page-row {
        grid-template-columns: 68px 1fr;
        gap: 10px;
      }
      .lotus-ending-page-row img {
        width: 68px;
      }
      .az-mural-gallery {
        grid-template-columns: repeat(2, minmax(110px, 148px));
        justify-content: center;
      }
    }

    @media (max-width: 640px) {
      .lotus-dialogue-card {
        width: 100%;
        grid-template-columns: 120px 1fr;
        gap: 12px;
        padding: 12px 14px;
      }
      .lotus-portrait-col {
        width: 120px;
        gap: 5px;
      }
      .lotus-portrait-frame {
        width: 120px;
        aspect-ratio: 3 / 4;
      }
      .lotus-portrait-subcaption {
        padding: 4px 6px;
      }
      .lotus-portrait-cap-name {
        font-size: 13.5px;
      }
      .lotus-portrait-cap-sub {
        font-size: 11.5px;
      }
      .lotus-speaker-name {
        font-size: 17px;
      }
      .lotus-dialogue-text {
        font-size: 15.5px;
        line-height: 1.62;
        min-height: 62px;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Authentic Macau Azulejos UI Controller:
 * - 3D Title Overlay
 * - Minimal In-Game HUD + Turret Rotator Button + Azulejo Compass Dial
 * - 3:4 Non-Cropped Portrait Dialogue Card with page & close callbacks
 * - 12 Chapters x 29 Micro-Stages Star-Chart Atlas & Codex
 * - Ch 12 Ending Choice Altar, Cinematic Subtitles/SKIP, Large Epilogue Mural
 */
export class LotusUI {
  constructor({
    bus,
    audio = null,
    lang = 'zh-Hant',
    bgMode = 'day',
    onStartGame,
    onReturnTitle,
    onRotateStep,
    onRotateTurret,
    onSelectChapter,
    onSelectStage,
    onSwitchActor,
    onRequestHint,
    onToggleBgMode,
    onChangeLanguage,
    onStartEndingCinematic,
    onSwitchEndingMural,
    onSkipEndingCinematic,
    getGameProgress
  }) {
    this.bus = bus;
    this.audio = audio;
    this.lang = normalizeLang(lang);
    this.bgMode = normalizeBgMode(bgMode);
    this.onStartGame = onStartGame;
    this.onReturnTitle = onReturnTitle;
    this.onRotateStep = onRotateStep;
    this.onRotateTurret = onRotateTurret;
    this.onSelectChapter = onSelectChapter;
    this.onSelectStage = onSelectStage;
    this.onSwitchActor = onSwitchActor;
    this.onRequestHint = onRequestHint;
    this.onToggleBgMode = onToggleBgMode;
    this.onChangeLanguage = onChangeLanguage;
    this.onStartEndingCinematic = onStartEndingCinematic;
    this.onSwitchEndingMural = onSwitchEndingMural;
    this.onSkipEndingCinematic = onSkipEndingCinematic;
    this.getGameProgress = getGameProgress;

    this.currentLevel = CHAPTERS[0]?.stages?.[0] || LEVELS[0];
    this.dialogueQueue = [];
    this.dialogueIndex = 0;
    this.dialogueTitle = '';
    this.dialogueLoreId = null;
    this.dialogueSource = null;
    this.onDialoguePageChange = null;
    this.onDialogueClose = null;
    this.onDialogueFinish = null;
    this.selectedEndingId = null;
    this._titleVisible = true;
    this._cinematicActive = false;
    this._toastTimer = null;
    this._unsubs = [];
    this._lastActorBarKey = '';
    this._lastSeamEval = null;
    this._lastActors = [];

    injectLotusStyles();
    this._buildDOM();
    this._bindEvents();
    this._applyBgModeToDocument();
    this._applyLanguageToStaticDOM();
    this.setTitleVisible(true);
  }

  _buildDOM() {
    const root = document.createElement('div');
    root.className = 'lotus-hud-root';
    const corners = azulejoCornersMarkup();

    root.innerHTML = `
      <!-- 3D Title Screen Overlay -->
      <section class="lotus-title-overlay" data-testid="title-overlay" aria-label="蓮島迴廊主標題畫面">
        <div class="lotus-title-plaque" data-testid="title-plaque">
          <h1 class="lotus-title-zh" data-role="title-main">蓮島迴廊</h1>
          <div class="lotus-title-en" data-role="title-sub">CORRIDOR OF THE LOTUS · 鏡海三紀</div>
        </div>

        <div class="lotus-title-actions">
          <button type="button" class="az-btn az-btn-primary lotus-title-start-btn" data-testid="btn-title-start">
            ✦ 啟程入廊
          </button>
          <button type="button" class="az-btn" data-testid="btn-title-atlas">
            ✦ 星圖選關
          </button>
          <button type="button" class="az-btn" data-testid="btn-title-codex">
            📜 記憶圖鑑
          </button>
          <button type="button" class="az-btn" data-testid="btn-title-sound">
            <span data-role="title-sound-icon">♪</span><span data-role="title-sound-label">音效</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-title-bg-mode" aria-pressed="false">
            <span data-role="title-bg-icon">☀</span><span data-role="title-bg-label">日間</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-title-lang">
            <span>🌐</span><span data-role="title-lang-label">繁中</span>
          </button>
        </div>
      </section>

      <!-- Minimal In-Game Azulejo HUD -->
      <header class="lotus-hud-top" hidden>
        <button type="button" class="az-tile-panel lotus-chapter-pill" data-testid="chapter-pill" title="點擊查看線索提示">
          <div class="lotus-ch-top-row">
            <span class="lotus-badge-ch" data-role="ch-num">CH 01 · STAGE 1/2</span>
            <span class="lotus-badge-era" data-role="ch-era">2026</span>
          </div>
          <span class="lotus-chapter-pill-text" data-role="ch-label">培正紅磚階與青石前廊</span>
        </button>

        <div class="lotus-toolbar">
          <button type="button" class="az-btn" data-testid="btn-home" title="返回標題星圖">
            <span>⌂</span><span class="lotus-btn-label lotus-hide-sm" data-role="lbl-home">標題</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-chapter-select" title="星圖選關">
            <span>✦</span><span class="lotus-btn-label"><span data-role="lbl-chapters-main">星圖</span><span class="lotus-hide-sm" data-role="lbl-chapters-sub">選關</span></span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-codex" title="記憶圖鑑">
            <span>📜</span><span class="lotus-btn-label" data-role="lbl-codex">圖鑑</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-hint" title="線索提示">
            <span>◈</span><span class="lotus-btn-label lotus-hide-sm" data-role="lbl-hint">提示</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-rotate-left" title="逆時針旋轉視角 (Q / ←)">
            <span>↺</span><span class="lotus-btn-label lotus-hide-sm" data-role="rot-left-label">-90°</span><span class="lotus-lock-tag" data-role="lock-tag" hidden>🔒</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-rotate-right" title="順時針旋轉視角 (E / →)">
            <span>↻</span><span class="lotus-btn-label lotus-hide-sm" data-role="rot-right-label">+90°</span><span class="lotus-lock-tag" data-role="lock-tag" hidden>🔒</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-actor-cycle" title="切換角色" hidden>
            <span>⇄</span><span class="lotus-btn-label lotus-hide-sm" data-role="lbl-actor-cycle">切換</span>
          </button>
          <button type="button" class="az-btn az-btn-gold" data-testid="btn-rotate-turret" title="旋轉視角機關轉盤" hidden>
            <span>⚙</span><span class="lotus-btn-label" data-role="lbl-turret">旋轉轉盤</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-sound-toggle" title="開關音效">
            <span data-role="sound-icon">♪</span><span class="lotus-btn-label lotus-hide-sm" data-role="sound-label">音效</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-bg-mode" title="切換至黑夜模式" aria-pressed="false">
            <span data-role="bg-icon">☀</span><span class="lotus-btn-label lotus-hide-sm" data-role="bg-label">日間</span>
          </button>
          <button type="button" class="az-btn" data-testid="btn-lang" title="語言設定（繁中／简中／EN／日本語）">
            <span>🌐</span><span class="lotus-btn-label lotus-hide-sm" data-role="lang-label">繁中</span>
          </button>
        </div>
      </header>

      <div class="lotus-toast" data-testid="hint-toast" role="status" aria-live="polite"></div>

      <footer class="lotus-hud-bottom" hidden>
        <div class="lotus-center-stack">
          <div class="az-tile-panel lotus-actor-bar" data-testid="actor-switch-bar" hidden></div>

          <div class="az-tile-panel lotus-clear-banner" data-testid="chapter-clear-banner" hidden>
            <span data-role="clear-text">✦ 六角星陣已圓滿共鳴</span>
            <button type="button" class="az-btn az-btn-primary" data-testid="btn-next-chapter">下一紀 →</button>
          </div>

          <section class="az-tile-panel lotus-dialogue-card" data-testid="dialogue-card" hidden>
            ${corners}
            <div class="lotus-portrait-col">
              <div class="lotus-portrait-frame">
                <img data-role="dlg-portrait" alt="人物水彩肖像" />
              </div>
              <div class="lotus-portrait-subcaption" data-testid="dlg-portrait-caption">
                <div class="lotus-portrait-cap-name" data-role="dlg-cap-name"></div>
                <div class="lotus-portrait-cap-sub" data-role="dlg-cap-sub"></div>
              </div>
            </div>
            <div class="lotus-dialogue-body">
              <div class="lotus-dialogue-head">
                <div>
                  <span class="lotus-speaker-name" data-role="dlg-speaker">盧曉晴</span>
                  <span class="lotus-speaker-era" data-role="dlg-era"></span>
                </div>
                <span class="lotus-dialogue-title" data-role="dlg-title"></span>
              </div>
              <p class="lotus-dialogue-text" data-role="dlg-text"></p>
              <div class="lotus-dialogue-foot">
                <span class="lotus-page-count" data-role="dlg-page">1 / 1</span>
                <button type="button" class="az-btn az-btn-primary lotus-dialogue-next-btn" data-testid="dialogue-next">繼續 ▸</button>
              </div>
            </div>
          </section>
        </div>

        <div class="az-tile-panel lotus-alignment-hud" data-testid="alignment-hud">
          <div class="az-compass-dial" aria-hidden="true">
            <svg class="az-compass-needle" data-role="compass-needle" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(23,58,138,0.3)" stroke-width="1.4" stroke-dasharray="2 3" />
              <polygon points="20,4 24.5,20 20,17 15.5,20" fill="#173a8a" />
              <polygon points="20,36 24.5,20 20,23 15.5,20" fill="#c89128" />
              <circle cx="20" cy="20" r="3" fill="#f7f6f1" stroke="#173a8a" stroke-width="1.5" />
            </svg>
          </div>
          <div class="az-compass-info">
            <span class="lotus-align-kicker" data-role="compass-kicker">青花羅盤 · COMPASS</span>
            <div class="lotus-align-main">
              <span class="lotus-align-deg" data-role="align-deg">45°</span>
              <span class="lotus-align-status" data-role="align-status">探索視角中</span>
            </div>
          </div>
        </div>
      </footer>

      <!-- Star-Chart Stage Atlas Modal (12 Chapters x 29 Micro-Stages) -->
      <div class="lotus-modal-backdrop" data-testid="chapter-select-modal" role="dialog" aria-modal="true">
        <div class="az-tile-panel lotus-modal-panel">
          ${corners}
          <div class="lotus-modal-header">
            <h2 class="lotus-modal-title" data-role="atlas-modal-title">✦ 蓮島星圖選關 · 十二紀二十九重迴廊</h2>
            <button type="button" class="az-btn lotus-modal-close" data-role="close-chapter-modal" aria-label="關閉">✕</button>
          </div>
          <div class="lotus-modal-body">
            <div class="lotus-chapter-grid" data-role="chapter-grid"></div>
          </div>
        </div>
      </div>

      <!-- Codex Modal -->
      <div class="lotus-modal-backdrop" data-testid="codex-modal" role="dialog" aria-modal="true">
        <div class="az-tile-panel lotus-modal-panel">
          ${corners}
          <div class="lotus-modal-header">
            <h2 class="lotus-modal-title" data-role="codex-modal-title">📜 記憶圖鑑 · 蓮島三紀見聞錄</h2>
            <button type="button" class="az-btn lotus-modal-close" data-role="close-codex-modal" aria-label="關閉">✕</button>
          </div>
          <div class="lotus-modal-body" data-role="codex-body"></div>
        </div>
      </div>

      <!-- Ch 12 Ending Choice Altar -->
      <div class="lotus-modal-backdrop" data-testid="ending-choice-modal" role="dialog" aria-modal="true">
        <div class="az-tile-panel lotus-modal-panel">
          ${corners}
          <div class="lotus-modal-header">
            <h2 class="lotus-modal-title" data-role="ending-modal-title">✶ 第十二紀終局祭壇 · HEXAGRAM LOTUS ALTAR</h2>
            <button type="button" class="az-btn lotus-modal-close" data-role="close-ending-modal" aria-label="關閉">✕</button>
          </div>
          <div class="lotus-modal-body" data-role="ending-body">
            <div class="lotus-ending-grid" data-role="ending-grid"></div>
          </div>
        </div>
      </div>

      <!-- Ending Cinematic Letterbox Subtitles + SKIP -->
      <section class="lotus-cinematic-overlay" data-testid="cinematic-overlay" hidden>
        <div class="lotus-cin-topbar">
          <div class="lotus-cin-meta">
            <span class="lotus-cin-badge" data-role="cin-badge">ENDING C · 05:54 DAWN</span>
            <span class="lotus-cin-phase" data-role="cin-phase">序幕喚醒中</span>
          </div>
          <button type="button" class="az-btn az-btn-gold" data-testid="btn-skip-ending">
            略過 · SKIP ⏭
          </button>
        </div>
        <div class="lotus-cin-bottombar">
          <p class="lotus-cin-sub-zh" data-role="cin-sub-zh"></p>
          <p class="lotus-cin-sub-en" data-role="cin-sub-en"></p>
        </div>
      </section>

      <!-- Large Azulejo Epilogue Mural -->
      <div class="lotus-modal-backdrop" data-testid="epilogue-mural-modal" role="dialog" aria-modal="true">
        <div class="az-tile-panel az-mural-panel">
          ${corners}
          <div class="lotus-modal-header">
            <h2 class="lotus-modal-title" data-role="mural-modal-title">✦ 青花瓷磚終幕壁畫 · AZULEJO EPILOGUE MURAL</h2>
            <button type="button" class="az-btn lotus-modal-close" data-role="close-mural-modal" aria-label="關閉">✕</button>
          </div>
          <div class="lotus-modal-body" data-role="mural-body">
            <div class="lotus-ending-reader" data-role="ending-reader"></div>
          </div>
          <div class="az-mural-actions">
            <button type="button" class="az-btn az-btn-primary" data-testid="btn-replay-ending">↻ 重溫結局動畫</button>
            <button type="button" class="az-btn" data-testid="btn-switch-ending-A" data-mural-ending="A">切換結局 A</button>
            <button type="button" class="az-btn" data-testid="btn-switch-ending-B" data-mural-ending="B">切換結局 B</button>
            <button type="button" class="az-btn az-btn-gold" data-testid="btn-switch-ending-C" data-mural-ending="C">切換結局 C</button>
            <button type="button" class="az-btn" data-testid="btn-epilogue-title">⌂ 返回標題星圖</button>
          </div>
        </div>
      </div>

      <!-- Language Selector Modal -->
      <div class="lotus-modal-backdrop" data-testid="language-select-modal" role="dialog" aria-modal="true">
        <div class="az-tile-panel lotus-modal-panel" style="max-width: min(560px, 100%);">
          ${corners}
          <div class="lotus-modal-header">
            <h2 class="lotus-modal-title" data-role="lang-modal-title">🌐 選擇語言 · LANGUAGE / 言語</h2>
            <button type="button" class="az-btn lotus-modal-close" data-role="close-lang-modal" aria-label="關閉">✕</button>
          </div>
          <div class="lotus-modal-body">
            <p class="lotus-lang-desc" data-role="lang-modal-desc"></p>
            <div class="lotus-lang-grid" data-role="lang-grid">
              ${LANG_OPTIONS.map(
                (opt) => `
                  <button
                    type="button"
                    class="az-btn lotus-lang-btn"
                    data-testid="lang-option-${escapeHtml(opt.id)}"
                    data-lang-choice="${escapeHtml(opt.id)}"
                  >
                    <span class="lotus-lang-native">${escapeHtml(opt.nativeLabel)}</span>
                    <span class="lotus-lang-sub">${escapeHtml(opt.subtitle)}</span>
                  </button>
                `
              ).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(root);
    this.root = root;

    this.els = {
      titleOverlay: root.querySelector('[data-testid="title-overlay"]'),
      titleMain: root.querySelector('[data-role="title-main"]'),
      titleSub: root.querySelector('[data-role="title-sub"]'),
      btnTitleStart: root.querySelector('[data-testid="btn-title-start"]'),
      btnTitleAtlas: root.querySelector('[data-testid="btn-title-atlas"]'),
      btnTitleCodex: root.querySelector('[data-testid="btn-title-codex"]'),
      btnTitleSound: root.querySelector('[data-testid="btn-title-sound"]'),
      titleSoundIcon: root.querySelector('[data-role="title-sound-icon"]'),
      titleSoundLabel: root.querySelector('[data-role="title-sound-label"]'),
      btnTitleBgMode: root.querySelector('[data-testid="btn-title-bg-mode"]'),
      titleBgIcon: root.querySelector('[data-role="title-bg-icon"]'),
      titleBgLabel: root.querySelector('[data-role="title-bg-label"]'),
      btnTitleLang: root.querySelector('[data-testid="btn-title-lang"]'),
      titleLangLabel: root.querySelector('[data-role="title-lang-label"]'),

      hudTop: root.querySelector('.lotus-hud-top'),
      hudBottom: root.querySelector('.lotus-hud-bottom'),
      chapterPill: root.querySelector('[data-testid="chapter-pill"]'),
      chNum: root.querySelector('[data-role="ch-num"]'),
      chEra: root.querySelector('[data-role="ch-era"]'),
      chLabel: root.querySelector('[data-role="ch-label"]'),
      btnHome: root.querySelector('[data-testid="btn-home"]'),
      lblHome: root.querySelector('[data-role="lbl-home"]'),
      lblChaptersMain: root.querySelector('[data-role="lbl-chapters-main"]'),
      lblChaptersSub: root.querySelector('[data-role="lbl-chapters-sub"]'),
      lblCodex: root.querySelector('[data-role="lbl-codex"]'),
      btnHint: root.querySelector('[data-testid="btn-hint"]'),
      lblHint: root.querySelector('[data-role="lbl-hint"]'),
      btnRotL: root.querySelector('[data-testid="btn-rotate-left"]'),
      btnRotR: root.querySelector('[data-testid="btn-rotate-right"]'),
      rotLeftLabel: root.querySelector('[data-role="rot-left-label"]'),
      rotRightLabel: root.querySelector('[data-role="rot-right-label"]'),
      lockTags: root.querySelectorAll('[data-role="lock-tag"]'),
      btnActorCycle: root.querySelector('[data-testid="btn-actor-cycle"]'),
      lblActorCycle: root.querySelector('[data-role="lbl-actor-cycle"]'),
      btnRotateTurret: root.querySelector('[data-testid="btn-rotate-turret"]'),
      lblTurret: root.querySelector('[data-role="lbl-turret"]'),
      btnSound: root.querySelector('[data-testid="btn-sound-toggle"]'),
      soundIcon: root.querySelector('[data-role="sound-icon"]'),
      soundLabel: root.querySelector('[data-role="sound-label"]'),
      btnBgMode: root.querySelector('[data-testid="btn-bg-mode"]'),
      bgIcon: root.querySelector('[data-role="bg-icon"]'),
      bgLabel: root.querySelector('[data-role="bg-label"]'),
      btnLang: root.querySelector('[data-testid="btn-lang"]'),
      langLabel: root.querySelector('[data-role="lang-label"]'),
      btnChapters: root.querySelector('[data-testid="btn-chapter-select"]'),
      btnCodex: root.querySelector('[data-testid="btn-codex"]'),

      toast: root.querySelector('[data-testid="hint-toast"]'),
      alignHud: root.querySelector('[data-testid="alignment-hud"]'),
      compassKicker: root.querySelector('[data-role="compass-kicker"]'),
      compassNeedle: root.querySelector('[data-role="compass-needle"]'),
      alignDeg: root.querySelector('[data-role="align-deg"]'),
      alignStatus: root.querySelector('[data-role="align-status"]'),
      actorBar: root.querySelector('[data-testid="actor-switch-bar"]'),
      clearBanner: root.querySelector('[data-testid="chapter-clear-banner"]'),
      clearText: root.querySelector('[data-role="clear-text"]'),
      btnNextChapter: root.querySelector('[data-testid="btn-next-chapter"]'),

      dlgCard: root.querySelector('[data-testid="dialogue-card"]'),
      dlgPortrait: root.querySelector('[data-role="dlg-portrait"]'),
      dlgPortraitCaption: root.querySelector('[data-testid="dlg-portrait-caption"]'),
      dlgCapName: root.querySelector('[data-role="dlg-cap-name"]'),
      dlgCapSub: root.querySelector('[data-role="dlg-cap-sub"]'),
      dlgSpeaker: root.querySelector('[data-role="dlg-speaker"]'),
      dlgEra: root.querySelector('[data-role="dlg-era"]'),
      dlgTitle: root.querySelector('[data-role="dlg-title"]'),
      dlgText: root.querySelector('[data-role="dlg-text"]'),
      dlgPage: root.querySelector('[data-role="dlg-page"]'),
      btnDlgNext: root.querySelector('[data-testid="dialogue-next"]'),

      chapterModal: root.querySelector('[data-testid="chapter-select-modal"]'),
      atlasModalTitle: root.querySelector('[data-role="atlas-modal-title"]'),
      chapterGrid: root.querySelector('[data-role="chapter-grid"]'),
      codexModal: root.querySelector('[data-testid="codex-modal"]'),
      codexModalTitle: root.querySelector('[data-role="codex-modal-title"]'),
      codexBody: root.querySelector('[data-role="codex-body"]'),

      endingModal: root.querySelector('[data-testid="ending-choice-modal"]'),
      endingModalTitle: root.querySelector('[data-role="ending-modal-title"]'),
      endingGrid: root.querySelector('[data-role="ending-grid"]'),
      endingBtns: [],

      cinOverlay: root.querySelector('[data-testid="cinematic-overlay"]'),
      cinBadge: root.querySelector('[data-role="cin-badge"]'),
      cinPhase: root.querySelector('[data-role="cin-phase"]'),
      cinSubZh: root.querySelector('[data-role="cin-sub-zh"]'),
      cinSubEn: root.querySelector('[data-role="cin-sub-en"]'),
      btnSkipEnding: root.querySelector('[data-testid="btn-skip-ending"]'),

      muralModal: root.querySelector('[data-testid="epilogue-mural-modal"]'),
      muralModalTitle: root.querySelector('[data-role="mural-modal-title"]'),
      endingReader: root.querySelector('[data-role="ending-reader"]'),
      btnReplayEnding: root.querySelector('[data-testid="btn-replay-ending"]'),
      muralSwitchBtns: root.querySelectorAll('[data-mural-ending]'),
      btnEpilogueTitle: root.querySelector('[data-testid="btn-epilogue-title"]'),

      langModal: root.querySelector('[data-testid="language-select-modal"]'),
      langModalTitle: root.querySelector('[data-role="lang-modal-title"]'),
      langModalDesc: root.querySelector('[data-role="lang-modal-desc"]'),
      langOptionBtns: root.querySelectorAll('[data-lang-choice]'),
      closeButtons: root.querySelectorAll('.lotus-modal-close')
    };

    this._renderEndingChoiceCards();
  }

  _syncAudioLabels(muted = this.audio?.muted) {
    const t = getLocalizedUi(this.lang);
    const icon = muted ? '🔇' : '♪';
    const label = muted ? t.titleSoundMuted : t.titleSoundOn;
    if (this.els.soundIcon) this.els.soundIcon.textContent = icon;
    if (this.els.soundLabel) this.els.soundLabel.textContent = label;
    if (this.els.titleSoundIcon) this.els.titleSoundIcon.textContent = icon;
    if (this.els.titleSoundLabel) this.els.titleSoundLabel.textContent = label;
  }

  _applyBgModeToDocument() {
    this.bgMode = normalizeBgMode(this.bgMode);
    const isNight = this.bgMode === 'night';
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.dataset.bgMode = this.bgMode;
      document.documentElement.style.colorScheme = isNight ? 'dark' : 'light';
    }
    const t = getLocalizedUi(this.lang);
    const icon = isNight ? '☽' : '☀';
    if (this.els?.btnTitleBgMode) {
      this.els.btnTitleBgMode.setAttribute('aria-pressed', String(isNight));
      this.els.btnTitleBgMode.title = isNight ? t.titleBgNightTitle : t.titleBgDayTitle;
      this.els.titleBgIcon.textContent = icon;
      this.els.titleBgLabel.textContent = isNight ? t.titleBgNight : t.titleBgDay;
    }
    if (this.els?.btnBgMode) {
      this.els.btnBgMode.setAttribute('aria-pressed', String(isNight));
      this.els.btnBgMode.title = isNight ? t.btnBgTitleNight : t.btnBgTitleDay;
      this.els.bgIcon.textContent = icon;
      this.els.bgLabel.textContent = isNight ? t.btnBgLabelNight : t.btnBgLabelDay;
    }
  }

  setBgMode(mode, notify = false) {
    this.bgMode = normalizeBgMode(mode);
    this._applyBgModeToDocument();
    if (notify) {
      this.onToggleBgMode?.(this.bgMode);
    }
    return this.bgMode;
  }

  toggleBgMode(notify = true) {
    const next = this.bgMode === 'night' ? 'day' : 'night';
    return this.setBgMode(next, notify);
  }

  _applyLanguageToStaticDOM() {
    const t = getLocalizedUi(this.lang);
    const langOpt = LANG_OPTIONS.find((opt) => opt.id === this.lang) || LANG_OPTIONS[0];
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = this.lang;
      if (t.documentTitle) document.title = t.documentTitle;
    }
    this.els.titleOverlay?.setAttribute('aria-label', t.titleOverlayAria);
    if (this.els.titleMain) this.els.titleMain.textContent = t.titleMain;
    if (this.els.titleSub) this.els.titleSub.textContent = t.titleSub;
    if (this.els.btnTitleStart) this.els.btnTitleStart.textContent = t.titleStart;
    if (this.els.btnTitleAtlas) this.els.btnTitleAtlas.textContent = t.titleAtlas;
    if (this.els.btnTitleCodex) this.els.btnTitleCodex.textContent = t.titleCodex;
    if (this.els.btnTitleLang) this.els.btnTitleLang.setAttribute('aria-label', t.titleLangAria);
    if (this.els.titleLangLabel) this.els.titleLangLabel.textContent = langOpt.short;

    if (this.els.chapterPill) this.els.chapterPill.title = t.chapterPillTitle;
    if (this.els.btnHome) this.els.btnHome.title = t.btnHomeTitle;
    if (this.els.lblHome) this.els.lblHome.textContent = t.btnHomeLabel;
    if (this.els.btnChapters) this.els.btnChapters.title = t.btnChaptersTitle;
    if (this.els.lblChaptersMain) this.els.lblChaptersMain.textContent = t.btnChaptersMain;
    if (this.els.lblChaptersSub) this.els.lblChaptersSub.textContent = t.btnChaptersSub;
    if (this.els.btnCodex) this.els.btnCodex.title = t.btnCodexTitle;
    if (this.els.lblCodex) this.els.lblCodex.textContent = t.btnCodexLabel;
    if (this.els.btnHint) this.els.btnHint.title = t.btnHintTitle;
    if (this.els.lblHint) this.els.lblHint.textContent = t.btnHintLabel;
    if (this.els.btnRotL) this.els.btnRotL.title = t.btnRotLTitle;
    if (this.els.btnRotR) this.els.btnRotR.title = t.btnRotRTitle;
    if (this.els.btnActorCycle) this.els.btnActorCycle.title = t.btnActorCycleTitle;
    if (this.els.lblActorCycle) this.els.lblActorCycle.textContent = t.btnActorCycleLabel;
    if (this.els.btnRotateTurret) this.els.btnRotateTurret.title = t.btnTurretTitle;
    if (this.els.lblTurret) this.els.lblTurret.textContent = t.btnTurretLabel;
    if (this.els.btnSound) this.els.btnSound.title = t.btnSoundTitle;
    if (this.els.btnLang) this.els.btnLang.title = t.btnLangTitle;
    if (this.els.langLabel) this.els.langLabel.textContent = langOpt.short;
    if (this.els.compassKicker) this.els.compassKicker.textContent = t.compassKicker;

    if (this.els.dlgPortrait) this.els.dlgPortrait.alt = t.dlgPortraitAlt;
    if (this.els.atlasModalTitle) this.els.atlasModalTitle.textContent = t.atlasModalTitle;
    if (this.els.codexModalTitle) this.els.codexModalTitle.textContent = t.codexModalTitle;
    if (this.els.endingModalTitle) this.els.endingModalTitle.textContent = t.endingModalTitle;
    if (this.els.muralModalTitle) this.els.muralModalTitle.textContent = t.muralModalTitle;
    if (this.els.langModalTitle) this.els.langModalTitle.textContent = t.langModalTitle;
    if (this.els.langModalDesc) this.els.langModalDesc.textContent = t.langModalDesc;
    if (this.els.btnSkipEnding) this.els.btnSkipEnding.textContent = t.cinSkip;
    if (this.els.btnReplayEnding) this.els.btnReplayEnding.textContent = t.muralReplay;
    if (this.els.btnEpilogueTitle) this.els.btnEpilogueTitle.textContent = t.muralReturnTitle;

    for (const btn of this.els.muralSwitchBtns || []) {
      const k = btn.dataset.muralEnding;
      btn.textContent = t.muralSwitch(k);
    }
    for (const btn of this.els.closeButtons || []) {
      btn.setAttribute('aria-label', t.closeAria);
    }
    for (const btn of this.els.langOptionBtns || []) {
      const isSelected = btn.dataset.langChoice === this.lang;
      btn.classList.toggle('az-btn-primary', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
    }

    this._syncAudioLabels(this.audio?.muted);
    this._applyBgModeToDocument();
    this._renderEndingChoiceCards();
  }

  _renderEndingChoiceCards() {
    if (!this.els?.endingGrid) return;
    const keys = ['A', 'B', 'C'];
    this.els.endingGrid.innerHTML = keys
      .map((key) => {
        const ending = getLocalizedFinalEnding(key, this.lang);
        const goldClass = key === 'C' ? 'az-btn-gold' : '';
        const enColor = key === 'C' && this.bgMode !== 'night' ? '#7a4e00' : 'var(--az-teal)';
        return `
          <button type="button" class="az-btn lotus-ending-btn ${goldClass}" data-testid="ending-choice-${key}" data-ending="${key}">
            <strong>${escapeHtml(ending.title)}</strong>
            <span class="lotus-sans" style="font-size:11px;color:${enColor};">${escapeHtml(ending.titleEn || '')}</span>
            <span style="font-size:12px;opacity:0.86;font-weight:500;">${escapeHtml(ending.subtitle || '')}</span>
          </button>
        `;
      })
      .join('');
    this.els.endingBtns = this.els.endingGrid.querySelectorAll('[data-ending]');
  }

  setLanguage(nextLang, notify = false) {
    this.lang = normalizeLang(nextLang);
    this._applyLanguageToStaticDOM();
    if (this.currentLevel) {
      this._updateLevelHudLabels(this.currentLevel);
    }
    if (this.els?.clearBanner && !this.els.clearBanner.hidden && this.currentLevel) {
      this.showChapterCleared(this.currentLevel);
    }
    if (this.isDialogueOpen()) {
      this._renderDialoguePage();
    }
    if (this._lastSeamEval || (this._lastActors && this._lastActors.length > 0)) {
      this._lastActorBarKey = '';
      this.updateRuntimeState({ seamEval: this._lastSeamEval, actors: this._lastActors });
    }
    if (this.els?.chapterModal?.classList.contains('is-open')) {
      this.openChapterSelectModal();
    }
    if (this.els?.codexModal?.classList.contains('is-open')) {
      this.openCodexModal();
    }
    if (this.els?.muralModal?.classList.contains('is-open')) {
      this.showEpilogueMural(this.selectedEndingId || 'C');
    }
    if (notify) {
      this.onChangeLanguage?.(this.lang);
    }
    return this.lang;
  }

  openLanguageModal() {
    this._applyLanguageToStaticDOM();
    this.els.langModal?.classList.add('is-open');
  }

  closeLanguageModal() {
    this.els.langModal?.classList.remove('is-open');
  }

  _bindEvents() {
    const unlockAudio = () => this.audio?.unlock?.();

    const triggerHint = () => {
      unlockAudio();
      const stageMeta = getLocalizedStageMeta(this.currentLevel, this.lang);
      const hint = this.onRequestHint?.() || stageMeta.hintText || this.currentLevel?.hintText || '';
      if (hint) this.showToast(hint, 4800);
    };

    const toggleMuteHandler = () => {
      const muted = this.audio ? this.audio.toggleMute() : false;
      this._syncAudioLabels(muted);
    };

    const toggleBgModeHandler = () => {
      unlockAudio();
      const next = this.toggleBgMode(true);
      const t = getLocalizedUi(this.lang);
      this.showToast(next === 'night' ? t.toastBgNight : t.toastBgDay, 2200);
    };

    this.els.btnTitleStart.addEventListener('click', () => {
      unlockAudio();
      this.onStartGame?.();
    });
    this.els.btnTitleAtlas.addEventListener('click', () => {
      unlockAudio();
      this.openChapterSelectModal();
    });
    this.els.btnTitleCodex.addEventListener('click', () => {
      unlockAudio();
      this.openCodexModal();
    });
    this.els.btnTitleSound.addEventListener('click', toggleMuteHandler);
    this.els.btnTitleBgMode.addEventListener('click', toggleBgModeHandler);
    this.els.btnTitleLang.addEventListener('click', () => {
      unlockAudio();
      this.openLanguageModal();
    });

    this.els.btnHome.addEventListener('click', () => {
      unlockAudio();
      this.onReturnTitle?.();
    });
    this.els.chapterPill.addEventListener('click', triggerHint);
    this.els.btnHint.addEventListener('click', triggerHint);

    this.els.btnRotL.addEventListener('click', () => {
      unlockAudio();
      this.onRotateStep?.(-1);
    });
    this.els.btnRotR.addEventListener('click', () => {
      unlockAudio();
      this.onRotateStep?.(1);
    });
    this.els.btnActorCycle.addEventListener('click', () => {
      unlockAudio();
      this.onSwitchActor?.();
    });
    this.els.btnRotateTurret.addEventListener('click', () => {
      unlockAudio();
      this.onRotateTurret?.();
    });
    this.els.btnSound.addEventListener('click', toggleMuteHandler);
    this.els.btnBgMode.addEventListener('click', toggleBgModeHandler);
    this.els.btnLang.addEventListener('click', () => {
      unlockAudio();
      this.openLanguageModal();
    });

    this.els.btnChapters.addEventListener('click', () => {
      unlockAudio();
      this.openChapterSelectModal();
    });
    this.els.btnCodex.addEventListener('click', () => {
      unlockAudio();
      this.openCodexModal();
    });

    this.els.btnDlgNext.addEventListener('click', () => {
      unlockAudio();
      this.advanceDialogue();
    });

    this.els.btnNextChapter.addEventListener('click', () => {
      unlockAudio();
      const chId = this.currentLevel?.chapterId || this.currentLevel?.id || 1;
      if (chId >= 12) {
        this.openEndingModal();
      } else {
        this.onSelectChapter?.(chId + 1);
      }
    });

    this.root.querySelector('[data-role="close-chapter-modal"]').addEventListener('click', () => {
      this.els.chapterModal.classList.remove('is-open');
    });
    this.root.querySelector('[data-role="close-codex-modal"]').addEventListener('click', () => {
      this.els.codexModal.classList.remove('is-open');
    });
    this.root.querySelector('[data-role="close-ending-modal"]').addEventListener('click', () => {
      this.els.endingModal.classList.remove('is-open');
    });
    this.root.querySelector('[data-role="close-lang-modal"]').addEventListener('click', () => {
      this.closeLanguageModal();
    });
    this.root.querySelector('[data-role="close-mural-modal"]').addEventListener('click', () => {
      this.els.muralModal.classList.remove('is-open');
      if (!this._titleVisible && this.els.cinOverlay.hidden) {
        this.els.hudTop.hidden = false;
        this.els.hudBottom.hidden = false;
      }
    });

    for (const modal of [
      this.els.chapterModal,
      this.els.codexModal,
      this.els.endingModal,
      this.els.muralModal,
      this.els.langModal
    ]) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('is-open');
      });
    }

    for (const btn of this.els.langOptionBtns) {
      btn.addEventListener('click', () => {
        unlockAudio();
        const choice = btn.dataset.langChoice;
        this.setLanguage(choice, true);
        this.closeLanguageModal();
      });
    }

    this.els.endingGrid.addEventListener('click', (e) => {
      const btn = e.target?.closest?.('[data-ending]');
      if (!btn) return;
      unlockAudio();
      const choice = btn.dataset.ending;
      this.els.endingModal.classList.remove('is-open');
      if (typeof this.onStartEndingCinematic === 'function') {
        this.onStartEndingCinematic(choice);
      } else {
        this.showEpilogueMural(choice);
      }
    });

    this.els.btnSkipEnding.addEventListener('click', () => {
      unlockAudio();
      this.onSkipEndingCinematic?.();
    });

    this.els.btnReplayEnding.addEventListener('click', () => {
      unlockAudio();
      const key = this.selectedEndingId || 'C';
      this.closeEpilogueMural();
      this.onStartEndingCinematic?.(key);
    });

    for (const btn of this.els.muralSwitchBtns) {
      btn.addEventListener('click', () => {
        unlockAudio();
        const key = btn.dataset.muralEnding;
        if (typeof this.onSwitchEndingMural === 'function') {
          this.onSwitchEndingMural(key);
        } else {
          this.showEpilogueMural(key);
        }
      });
    }

    this.els.btnEpilogueTitle.addEventListener('click', () => {
      unlockAudio();
      this.closeEpilogueMural();
      this.onReturnTitle?.();
    });

    if (this.bus && typeof this.bus.on === 'function') {
      this._unsubs.push(
        this.bus.on(EVENTS.ILLUSION_ALIGNED, () => {
          if (
            !this._titleVisible &&
            !this._cinematicActive &&
            !this.els.muralModal.classList.contains('is-open')
          ) {
            this.showToast(getLocalizedUi(this.lang).toastBridgeAligned, 2200);
          }
        })
      );
    }
  }

  setTitleVisible(visible) {
    this._titleVisible = Boolean(visible);
    this.els.titleOverlay.hidden = !this._titleVisible;
    this.els.hudTop.hidden = this._titleVisible;
    this.els.hudBottom.hidden = this._titleVisible;
    if (this._titleVisible) {
      this._cinematicActive = false;
      this.hideToast();
      this.hideDialogue();
      this.els.clearBanner.hidden = true;
      this.els.cinOverlay.hidden = true;
    }
  }

  _updateLevelHudLabels(levelDef) {
    if (!levelDef) return;
    const t = getLocalizedUi(this.lang);
    const chId = levelDef.chapterId || levelDef.id || 1;
    const stageIdx = Number(levelDef.stageIndex || 0);
    const totalStages = Number(levelDef.totalStages || 1);
    const stageMeta = getLocalizedStageMeta(levelDef, this.lang);

    this.els.chNum.textContent = t.formatStageBadge(chId, stageIdx, totalStages);
    this.els.chEra.textContent = String(levelDef.era || '2026');
    this.els.chLabel.textContent = stageMeta.title || levelDef.title || '';
  }

  setLevel(levelDef) {
    this._cinematicActive = false;
    this.currentLevel = levelDef;
    this._updateLevelHudLabels(levelDef);

    const hasRotators = Array.isArray(levelDef.rotators) && levelDef.rotators.length > 0;
    this.els.btnRotateTurret.hidden = !hasRotators;
    this.els.btnRotateTurret.disabled = !hasRotators;

    const stepDeg = Math.round(Number(levelDef?.camera?.stepDeg ?? levelDef?.stepDeg ?? 90) || 90);
    if (this.els.rotLeftLabel) this.els.rotLeftLabel.textContent = `-${stepDeg}°`;
    if (this.els.rotRightLabel) this.els.rotRightLabel.textContent = `+${stepDeg}°`;

    const hasMultiActor = Array.isArray(levelDef.actors) && levelDef.actors.length >= 2;
    this.els.btnActorCycle.hidden = !hasMultiActor;

    this.els.clearBanner.hidden = true;
    this.els.cinOverlay.hidden = true;
    this.els.chapterModal.classList.remove('is-open');
    this.els.codexModal.classList.remove('is-open');
    this.els.endingModal.classList.remove('is-open');
    this.els.muralModal.classList.remove('is-open');
    this.els.langModal?.classList.remove('is-open');
    if (!this._titleVisible) {
      this.els.hudTop.hidden = false;
      this.els.hudBottom.hidden = false;
    }
    this._lastActorBarKey = '';
    this._lastActors = [];
    this.renderActorBar([]);
  }

  hideToast() {
    if (this._toastTimer && typeof window !== 'undefined') {
      window.clearTimeout(this._toastTimer);
      this._toastTimer = null;
    }
    if (this.els?.toast) {
      this.els.toast.classList.remove('is-visible');
      this.els.toast.textContent = '';
    }
  }

  showToast(text, durationMs = 3200) {
    if (this._cinematicActive) return;
    this.els.toast.textContent = text;
    this.els.toast.classList.add('is-visible');
    if (this._toastTimer && typeof window !== 'undefined') {
      window.clearTimeout(this._toastTimer);
    }
    if (typeof window !== 'undefined') {
      this._toastTimer = window.setTimeout(() => {
        this.els.toast.classList.remove('is-visible');
      }, durationMs);
    }
  }

  showDialogue(
    pages,
    { title = '', loreId = null, source = null, onPageChange = null, onClose = null, onFinish = null } = {}
  ) {
    if (!Array.isArray(pages) || pages.length === 0) {
      this.hideDialogue();
      if (typeof onClose === 'function') onClose();
      if (typeof onFinish === 'function') onFinish();
      return;
    }
    this.dialogueQueue = pages;
    this.dialogueIndex = 0;
    this.dialogueTitle = title;
    this.dialogueLoreId = loreId;
    this.dialogueSource = source || (loreId ? { kind: 'lore', loreId } : null);
    this.onDialoguePageChange = typeof onPageChange === 'function' ? onPageChange : null;
    this.onDialogueClose = typeof onClose === 'function' ? onClose : null;
    this.onDialogueFinish = typeof onFinish === 'function' ? onFinish : null;
    this._renderDialoguePage();
  }

  _resolveLocalizedDialogueState() {
    const src = this.dialogueSource;
    if (src?.kind === 'lore' && src.loreId) {
      const lore = getLocalizedLoreDialogue(src.loreId, this.lang);
      if (lore?.pages?.length) {
        return { pages: lore.pages, title: lore.title || this.dialogueTitle };
      }
    }
    if (src?.kind === 'chapter_story' && src.chapterId) {
      const story = getLocalizedChapterStory(src.chapterId, this.lang);
      const partKey = src.part || 'intro';
      const pages = story?.[partKey];
      let title = this.dialogueTitle;
      if (partKey === 'intro' && this.currentLevel) {
        const stageMeta = getLocalizedStageMeta(this.currentLevel, this.lang);
        const chNum = this.currentLevel.chapterId || src.chapterId;
        title = `CH ${pad2(chNum)} · ${stageMeta.title || this.currentLevel.title || ''}`;
      }
      if (Array.isArray(pages) && pages.length) {
        return { pages, title };
      }
    }
    return { pages: this.dialogueQueue, title: this.dialogueTitle };
  }

  _renderDialoguePage() {
    const resolved = this._resolveLocalizedDialogueState();
    const activePages = resolved.pages || this.dialogueQueue;
    const page = activePages[this.dialogueIndex];
    if (!page) {
      this.closeDialogue();
      return;
    }
    const t = getLocalizedUi(this.lang);
    const speakerId = page.speakerId || 'narrator';
    const speakerMeta = getLocalizedSpeakerMeta(speakerId, this.lang, page.speakerName);

    this.els.dlgCard.hidden = false;
    this.els.dlgPortrait.src = getPortraitDataUri(speakerId);
    this.els.dlgPortrait.alt = speakerMeta.name || t.dlgPortraitAlt;
    this.els.dlgSpeaker.textContent = speakerMeta.name;
    this.els.dlgEra.textContent = speakerMeta.subLabel ? ` · ${speakerMeta.subLabel}` : '';
    if (this.els.dlgCapName) this.els.dlgCapName.textContent = speakerMeta.name;
    if (this.els.dlgCapSub) this.els.dlgCapSub.textContent = speakerMeta.subLabel || '';
    this.els.dlgTitle.textContent = resolved.title || '';
    this.els.dlgText.textContent = page.text || '';

    const total = activePages.length;
    this.els.dlgPage.textContent = `${this.dialogueIndex + 1} / ${total}`;
    this.els.btnDlgNext.textContent = this.dialogueIndex >= total - 1 ? t.dlgFinish : t.dlgNext;

    if (typeof this.onDialoguePageChange === 'function') {
      this.onDialoguePageChange(this.dialogueIndex, page);
    }
  }

  advanceDialogue() {
    if (this.els.dlgCard.hidden) return false;
    const activePages = this._resolveLocalizedDialogueState().pages || this.dialogueQueue;
    if (this.dialogueIndex < activePages.length - 1) {
      this.dialogueIndex += 1;
      this._renderDialoguePage();
      return true;
    }
    this.closeDialogue();
    return true;
  }

  closeDialogue() {
    const wasOpen = !this.els.dlgCard.hidden;
    const onCloseCb = this.onDialogueClose;
    const onFinishCb = this.onDialogueFinish;
    this.hideDialogue();
    if (wasOpen) {
      if (typeof onCloseCb === 'function') onCloseCb();
      if (typeof onFinishCb === 'function') onFinishCb();
    }
    return wasOpen;
  }

  hideDialogue() {
    this.els.dlgCard.hidden = true;
    this.dialogueQueue = [];
    this.dialogueIndex = 0;
    this.dialogueLoreId = null;
    this.dialogueSource = null;
    this.onDialoguePageChange = null;
    this.onDialogueClose = null;
    this.onDialogueFinish = null;
  }

  isDialogueOpen() {
    return !this.els.dlgCard.hidden;
  }

  getDialogueState() {
    return {
      open: this.isDialogueOpen(),
      loreId: this.dialogueLoreId,
      pageIndex: this.dialogueIndex,
      totalPages: this.dialogueQueue.length
    };
  }

  showChapterCleared(levelDef) {
    this.els.clearBanner.hidden = false;
    const t = getLocalizedUi(this.lang);
    const chId = levelDef.chapterId || levelDef.id || 1;
    const stageMeta = getLocalizedStageMeta(levelDef, this.lang);
    const title = stageMeta.title || levelDef.title || '';
    if (chId >= 12) {
      this.els.clearText.textContent = t.clearBannerCh12;
      this.els.btnNextChapter.textContent = t.btnFinalChoice;
    } else {
      this.els.clearText.textContent = t.clearBannerCh(chId, title);
      this.els.btnNextChapter.textContent = t.btnEnterNextCh(chId + 1);
    }
  }

  renderActorBar(actorsSnapshot = []) {
    if (!Array.isArray(actorsSnapshot) || actorsSnapshot.length < 2) {
      this.els.actorBar.hidden = true;
      this.els.actorBar.innerHTML = '';
      return;
    }

    const t = getLocalizedUi(this.lang);
    const key =
      this.lang +
      '::' +
      actorsSnapshot
        .map((a) => `${a.id}:${a.isActive ? 1 : 0}:${a.onPlateId || ''}`)
        .join('|');
    if (this._lastActorBarKey === key) return;
    this._lastActorBarKey = key;

    this.els.actorBar.hidden = false;
    this.els.actorBar.innerHTML = actorsSnapshot
      .map((actor) => {
        const activeClass = actor.isActive ? 'is-active' : '';
        const marker = actor.isActive ? '❖ ' : '';
        const locName = getLocalizedActorName(actor.id, actor.name, this.lang);
        const plateBadge = actor.onPlateId
          ? `<span class="lotus-plate-tag">${escapeHtml(t.plateBadge)}</span>`
          : '';
        return `<button type="button" class="lotus-actor-btn ${activeClass}" data-testid="actor-btn-${escapeHtml(actor.id)}" data-actor-id="${escapeHtml(actor.id)}">${marker}${escapeHtml(locName)}${plateBadge}</button>`;
      })
      .join('');

    for (const btn of this.els.actorBar.querySelectorAll('[data-actor-id]')) {
      btn.addEventListener('click', () => {
        this.audio?.unlock?.();
        this.onSwitchActor?.(btn.dataset.actorId);
      });
    }
  }

  updateRuntimeState({ seamEval, actors = [] }) {
    this._lastSeamEval = seamEval ?? this._lastSeamEval;
    this._lastActors = Array.isArray(actors) ? actors : this._lastActors;
    const t = getLocalizedUi(this.lang);

    if (seamEval) {
      const degInt = Math.round(((seamEval.azimuthDeg % 360) + 360) % 360);
      this.els.alignDeg.textContent = `${degInt}°`;
      if (this.els.compassNeedle) {
        this.els.compassNeedle.style.transform = `rotate(${-degInt}deg)`;
      }

      const aligned = Array.isArray(seamEval.activeSeamIds) && seamEval.activeSeamIds.length > 0;
      this.els.alignHud.classList.toggle('is-aligned', aligned);
      this.els.alignStatus.classList.toggle('is-aligned-text', aligned);

      if (seamEval.isLocked) {
        this.els.alignStatus.textContent = t.alignLocked;
      } else if (aligned) {
        this.els.alignStatus.textContent = `✦ ${t.alignAligned}`;
      } else {
        const atTargetSeam = Array.isArray(seamEval.seamStatuses)
          ? seamEval.seamStatuses.find((st) => st.angleOk)
          : null;
        if (atTargetSeam && !atTargetSeam.plateOk) {
          this.els.alignStatus.textContent = t.alignNeedPlate;
        } else if (atTargetSeam && !atTargetSeam.rotatorOk) {
          this.els.alignStatus.textContent = t.alignNeedRotator;
        } else if (atTargetSeam && (atTargetSeam.occluded || atTargetSeam.depthParityOk === false)) {
          this.els.alignStatus.textContent = t.alignOccluded;
        } else if (typeof seamEval.nearestSeamDiffDeg === 'number') {
          const diff = seamEval.nearestSeamDiffDeg;
          const absDiff = Math.abs(diff);
          if (absDiff <= 8) {
            this.els.alignStatus.textContent = t.alignNear(absDiff.toFixed(1));
          } else {
            const sign = diff > 0 ? '+' : '';
            this.els.alignStatus.textContent = t.alignTurn(`${sign}${Math.round(diff)}`);
          }
        } else {
          this.els.alignStatus.textContent = t.alignExploring;
        }
      }

      const locked = Boolean(seamEval.isLocked);
      this.els.btnRotL.classList.toggle('is-locked', locked);
      this.els.btnRotR.classList.toggle('is-locked', locked);
      this.els.btnRotL.disabled = locked;
      this.els.btnRotR.disabled = locked;
      for (const tag of this.els.lockTags) {
        tag.hidden = !locked;
      }
    }

    this.renderActorBar(actors);
  }

  openChapterSelectModal() {
    const t = getLocalizedUi(this.lang);
    const progress = this.getGameProgress?.() || {};
    const completed = new Set(progress.completedChapters || []);
    const completedStages = new Set(progress.completedStageIds || []);
    const curChId = this.currentLevel?.chapterId || this.currentLevel?.id || 1;
    const curStageId = this.currentLevel?.stageId || '';

    this.els.chapterGrid.innerHTML = CHAPTERS.map((ch) => {
      const chMeta = getLocalizedChapterMeta(ch, this.lang);
      const isCurCh = ch.id === curChId;
      const isDoneCh = completed.has(ch.id);
      const badge = isDoneCh
        ? `<span class="lotus-badge is-done">${escapeHtml(t.atlasDone)}</span>`
        : isCurCh
          ? `<span class="lotus-badge">${escapeHtml(t.atlasCurrent)}</span>`
          : `<span class="lotus-badge">CH ${pad2(ch.id)}</span>`;

      const stages = Array.isArray(ch.stages) && ch.stages.length > 0 ? ch.stages : [ch];
      const stageBtns = stages
        .map((st, idx) => {
          const stMeta = getLocalizedStageMeta(st, this.lang);
          const isCurStage = st.stageId === curStageId || (isCurCh && idx === (this.currentLevel?.stageIndex || 0));
          const isDoneStage = completedStages.has(st.stageId);
          const cls = isCurStage ? 'az-btn-primary' : isDoneStage ? 'az-btn-gold' : '';
          return `
            <button
              type="button"
              class="az-btn lotus-stage-btn ${cls}"
              data-testid="stage-item-${escapeHtml(st.stageId || `ch${ch.id}_s${idx + 1}`)}"
              data-stage-ch="${ch.id}"
              data-stage-index="${idx}"
            >
              <span>${idx + 1}/${stages.length} · ${escapeHtml(stMeta.title || chMeta.title || ch.title)}</span>
            </button>
          `;
        })
        .join('');

      return `
        <div class="lotus-chapter-card ${isCurCh ? 'is-current' : ''}" data-testid="chapter-card-${ch.id}">
          <button
            type="button"
            class="az-btn lotus-ch-head-btn ${isCurCh ? 'az-btn-active' : ''}"
            data-testid="chapter-item-${ch.id}"
            data-chapter-id="${ch.id}"
          >
            <span>${escapeHtml(t.formatChapterHeading(ch.id, ch.era))}</span>
            ${badge}
          </button>
          <div style="font-size:12px;color:var(--az-cobalt-mid);padding:0 2px;">${escapeHtml(chMeta.subtitle || ch.subtitle || '')}</div>
          <div class="lotus-stage-pills">${stageBtns}</div>
        </div>
      `;
    }).join('');

    for (const cardBtn of this.els.chapterGrid.querySelectorAll('[data-chapter-id]')) {
      cardBtn.addEventListener('click', () => {
        const cid = Number(cardBtn.dataset.chapterId);
        this.els.chapterModal.classList.remove('is-open');
        if (typeof this.onSelectStage === 'function') {
          this.onSelectStage(cid, 0);
        } else {
          this.onSelectChapter?.(cid);
        }
      });
    }

    for (const stBtn of this.els.chapterGrid.querySelectorAll('[data-stage-ch]')) {
      stBtn.addEventListener('click', () => {
        const cid = Number(stBtn.dataset.stageCh);
        const sIdx = Number(stBtn.dataset.stageIndex || 0);
        this.els.chapterModal.classList.remove('is-open');
        if (typeof this.onSelectStage === 'function') {
          this.onSelectStage(cid, sIdx);
        } else {
          this.onSelectChapter?.(cid);
        }
      });
    }

    const totalStageCount = typeof getTotalStageCount === 'function' ? getTotalStageCount() : ALL_STAGES.length;
    if (this.els.atlasModalTitle) {
      this.els.atlasModalTitle.textContent = t.atlasModalFullTitle(totalStageCount);
    }

    this.els.chapterModal.classList.add('is-open');
  }

  openCodexModal() {
    const t = getLocalizedUi(this.lang);
    const codex = getLocalizedCodexEntries(this.lang);
    const progress = this.getGameProgress?.() || {};
    const completed = new Set(progress.completedChapters || []);
    const discoveredLore = new Set(progress.discoveredLoreIds || []);
    const foundCouples = COUPLE_LORE_IDS.filter((id) => discoveredLore.has(id));
    const hiddenUnlocked = foundCouples.length === COUPLE_LORE_IDS.length;
    const curChId = this.currentLevel?.chapterId || this.currentLevel?.id || 1;
    const maxReached = Math.max(curChId, ...[0, ...completed]);

    const chaptersHtml = (codex.chapters || [])
      .map((ch) => {
        const isDone = completed.has(ch.chapterId);
        return `
          <div class="lotus-codex-item">
            <div class="lotus-tag-row">
              <strong>${escapeHtml(ch.title)}</strong>
              <span class="lotus-badge ${isDone ? 'is-done' : ''}">${isDone ? escapeHtml(t.codexDone) : escapeHtml(ch.era)}</span>
            </div>
            <div style="margin-top:4px;opacity:0.9;">${escapeHtml(ch.summary)}</div>
          </div>
        `;
      })
      .join('');

    const miraclesHtml = (codex.miracles || [])
      .map((m) => {
        const unlocked = completed.has(m.unlockChapter) || maxReached >= m.unlockChapter;
        return `
          <div class="lotus-codex-item">
            <div class="lotus-tag-row">
              <strong>${escapeHtml(t.codexMiraclePrefix(m.slot, m.name))}</strong>
              <span class="lotus-badge ${unlocked ? 'is-done' : ''}">${unlocked ? escapeHtml(t.codexAwakened) : escapeHtml(t.codexUnlockAt(m.unlockChapter))}</span>
            </div>
            <div style="margin-top:4px;opacity:0.9;">${escapeHtml(m.description)}</div>
          </div>
        `;
      })
      .join('');

    const charsHtml = (codex.characters || [])
      .map((c) => {
        const rawId = String(c.id || '').replace(/^char_/, '') || 'narrator';
        const portraitUri = getPortraitDataUri(rawId);
        return `
          <div class="lotus-codex-item lotus-codex-char-card">
            <figure class="lotus-codex-portrait-fig">
              <img src="${portraitUri}" alt="${escapeHtml(c.name)}" />
              <figcaption class="lotus-codex-portrait-cap">${escapeHtml(c.name)}</figcaption>
            </figure>
            <div>
              <div class="lotus-tag-row">
                <strong style="font-size:14.5px;">${escapeHtml(c.name)}</strong>
              </div>
              <div style="font-size:12px;color:var(--az-teal);font-weight:700;margin:2px 0 5px;">${escapeHtml(c.era)}</div>
              <div style="font-size:13px;line-height:1.55;opacity:0.94;">${escapeHtml(c.bio)}</div>
            </div>
          </div>
        `;
      })
      .join('');

    const cluesHtml = (codex.clues || [])
      .map((c) => {
        const isWatch = c.id === 'clue_oldman_watch';
        const watchFound =
          isWatch &&
          ['old_man_ch5', 'old_man_ch6', 'old_man_ch7', 'old_man_ch9'].some((id) =>
            discoveredLore.has(id)
          );
        const tag = isWatch
          ? watchFound
            ? `<span class="lotus-badge is-done">${escapeHtml(t.codexWatchFound)}</span>`
            : `<span class="lotus-badge">${escapeHtml(t.codexWatchClue)}</span>`
          : `<span class="lotus-badge">${escapeHtml(t.codexArchiveBadge)}</span>`;
        return `
          <div class="lotus-codex-item">
            <div class="lotus-tag-row">
              <strong>${escapeHtml(c.title)}</strong>
              ${tag}
            </div>
            <div style="margin-top:4px;opacity:0.9;">${escapeHtml(c.text)}</div>
          </div>
        `;
      })
      .join('');

    const hidden = codex.hidden || CODEX_ENTRIES.hidden;
    const quoteColor = this.bgMode === 'night' ? '#ffe099' : '#6b4300';
    const hiddenHtml = hiddenUnlocked
      ? `
        <div class="lotus-codex-item is-hidden-unlocked" data-testid="codex-hidden-entry">
          <div class="lotus-tag-row">
            <strong>${escapeHtml(t.codexHiddenUnlocked(hidden.title, hidden.id))}</strong>
            <span class="lotus-badge is-done">${escapeHtml(t.codexHiddenDoneRatio(foundCouples.length, COUPLE_LORE_IDS.length))}</span>
          </div>
          <p style="margin:6px 0;font-style:italic;color:${quoteColor};">「${escapeHtml(hidden.quote)}」</p>
          <ul style="margin:4px 0 0;padding-left:18px;">
            ${(hidden.eraRecords || [])
              .map(
                (r) =>
                  `<li><strong>${escapeHtml(r.era)}</strong>（${escapeHtml(r.location)}）：${escapeHtml(r.couple)} — ${escapeHtml(r.token)}</li>`
              )
              .join('')}
          </ul>
        </div>
      `
      : `
        <div class="lotus-codex-item" data-testid="codex-hidden-entry">
          <div class="lotus-tag-row">
            <strong>${escapeHtml(t.codexHiddenLockedHeading(hidden.title))}</strong>
            <span class="lotus-badge">${escapeHtml(t.codexHiddenPartialRatio(foundCouples.length, COUPLE_LORE_IDS.length))}</span>
          </div>
          <div style="margin-top:4px;opacity:0.9;">${escapeHtml(hidden.unlockConditionText)}</div>
        </div>
      `;

    this.els.codexBody.innerHTML = `
      <div class="lotus-codex-section">
        <h3>${escapeHtml(t.codexSectionHidden(hidden.id))}</h3>
        ${hiddenHtml}
      </div>
      <div class="lotus-codex-section">
        <h3>${escapeHtml(t.codexSectionMiracles)}</h3>
        <div class="lotus-codex-list">${miraclesHtml}</div>
      </div>
      <div class="lotus-codex-section">
        <h3>${escapeHtml(t.codexSectionCharacters)}</h3>
        <div class="lotus-codex-list">${charsHtml}</div>
      </div>
      <div class="lotus-codex-section">
        <h3>${escapeHtml(t.codexSectionClues)}</h3>
        <div class="lotus-codex-list">${cluesHtml}</div>
      </div>
      <div class="lotus-codex-section">
        <h3>${escapeHtml(t.codexSectionChapters)}</h3>
        <div class="lotus-codex-list">${chaptersHtml}</div>
      </div>
    `;

    this.els.codexModal.classList.add('is-open');
  }

  openEndingModal(initialChoice = null) {
    this.hideToast();
    this.els.muralModal.classList.remove('is-open');
    if (initialChoice && FINAL_ENDINGS[initialChoice]) {
      this.showEpilogueMural(initialChoice);
      return;
    }
    this._renderEndingChoiceCards();
    this.els.endingModal.classList.add('is-open');
  }

  setCinematicActive(active, endingKey = 'A') {
    const show = Boolean(active);
    this._cinematicActive = show;
    this.els.cinOverlay.hidden = !show;
    if (show) {
      const t = getLocalizedUi(this.lang);
      this.selectedEndingId = endingKey;
      this.hideToast();
      this.els.hudTop.hidden = true;
      this.els.hudBottom.hidden = true;
      this.els.endingModal.classList.remove('is-open');
      this.els.muralModal.classList.remove('is-open');
      this.els.clearBanner.hidden = true;
      this.hideDialogue();
      this.els.cinBadge.textContent = t.cinEndingTitleMap?.[endingKey] || `ENDING ${endingKey}`;
      this.els.cinPhase.textContent = t.cinDefaultPhase;
      this.els.cinSubZh.textContent = '';
      this.els.cinSubEn.textContent = '';
    } else if (!this._titleVisible) {
      this.els.hudTop.hidden = false;
      this.els.hudBottom.hidden = false;
    }
  }

  updateCinematicSubtitle(cue, state = null) {
    if (!this.els.cinOverlay.hidden && state) {
      const pct = Math.round((state.progress || 0) * 100);
      const phaseLabel = getLocalizedPhaseLabel(state.phase, this.lang);
      this.els.cinPhase.textContent = `${phaseLabel} · ${pct}%`;
    }
    if (!cue) {
      this.els.cinSubZh.textContent = '';
      this.els.cinSubEn.textContent = '';
      return;
    }
    this.els.cinSubZh.textContent = cue.zh || cue.text || '';
    this.els.cinSubEn.textContent = cue.en || '';
  }

  showEpilogueMural(choiceId = 'C') {
    const key = FINAL_ENDINGS[choiceId] ? choiceId : 'C';
    const ending = getLocalizedFinalEnding(key, this.lang);
    this._cinematicActive = false;
    this.selectedEndingId = key;
    this.hideToast();
    this.els.cinOverlay.hidden = true;
    this.els.hudTop.hidden = true;
    this.els.hudBottom.hidden = true;
    this.els.endingModal.classList.remove('is-open');

    for (const btn of this.els.muralSwitchBtns) {
      const isMatch = btn.dataset.muralEnding === key;
      btn.classList.toggle('az-btn-primary', isMatch);
    }

    const castIds = ENDING_MURAL_CAST[key] || ['mother', 'ajan', 'sofia', 'ryan'];
    const archesHtml = castIds
      .map((speakerId) => {
        const uri = getPortraitDataUri(speakerId);
        const speakerMeta = getLocalizedSpeakerMeta(speakerId, this.lang);
        const speakerLabel = speakerMeta.name;
        const speakerSub = speakerMeta.subLabel || '';
        const speakerTitle = speakerSub ? `${speakerLabel} · ${speakerSub}` : speakerLabel;
        return `
          <figure class="az-mural-cast-item">
            <div class="az-mural-arch">
              <img src="${uri}" alt="${escapeHtml(speakerLabel)}" title="${escapeHtml(speakerTitle)}" />
            </div>
            <figcaption class="az-mural-caption">
              <strong>${escapeHtml(speakerLabel)}</strong>
              ${speakerSub ? `<span>${escapeHtml(speakerSub)}</span>` : ''}
            </figcaption>
          </figure>
        `;
      })
      .join('');

    const pagesHtml = (ending.pages || [])
      .map((p) => {
        const portrait = getPortraitDataUri(p.speakerId);
        const speakerMeta = getLocalizedSpeakerMeta(p.speakerId, this.lang, p.speakerName);
        const speakerLabel = speakerMeta.name;
        return `
          <div class="lotus-ending-page-row">
            <img src="${portrait}" alt="${escapeHtml(speakerLabel)}" />
            <div>
              <div style="font-size:14.5px;font-weight:800;color:var(--az-cobalt-ink);margin-bottom:4px;">${escapeHtml(speakerLabel)}</div>
              <div class="lotus-mural-page-text" style="font-size:14.5px;line-height:1.66;color:var(--az-body-ink);">${escapeHtml(p.text)}</div>
            </div>
          </div>
        `;
      })
      .join('');

    this.els.endingReader.innerHTML = `
      <div class="az-mural-hero">
        <h3>${escapeHtml(ending.title)}</h3>
        <div class="az-en-title">${escapeHtml(ending.titleEn || '')}</div>
        <div class="az-sub">${escapeHtml(ending.subtitle)}</div>
        ${ending.subtitleEn ? `<div class="lotus-sans" style="font-size:12px;color:var(--az-cobalt-mid);margin-top:3px;">${escapeHtml(ending.subtitleEn)}</div>` : ''}
      </div>
      <div class="az-mural-gallery" data-testid="epilogue-cast-arches">${archesHtml}</div>
      ${pagesHtml}
    `;

    this.els.muralModal.classList.add('is-open');
  }

  closeEpilogueMural() {
    this.els.muralModal.classList.remove('is-open');
  }

  selectEnding(choiceId) {
    this.showEpilogueMural(choiceId);
  }

  dispose() {
    if (this._toastTimer && typeof window !== 'undefined') {
      window.clearTimeout(this._toastTimer);
    }
    for (const unsub of this._unsubs) {
      if (typeof unsub === 'function') unsub();
    }
    this._unsubs = [];
    this.root?.remove?.();
  }
}

export { CHAPTER_STORIES, LORE_DIALOGUES };
