import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';
import { buildSingleHtml } from './build-single-html.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOTUS_DIR = path.resolve(__dirname, '..');

// Precompute IEEE 802.3 CRC32 lookup table for PNG chunks.
const CRC_TABLE = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) !== 0 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  CRC_TABLE[n] = c >>> 0;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makePngChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcInput = Buffer.concat([typeBuf, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(crcInput), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function encodeRgbaToPng(width, height, rgbaPixels) {
  const stride = width * 4 + 1;
  const raw = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y++) {
    const rowStart = y * stride;
    raw[rowStart] = 0; // Filter type 0 (None)
    const srcOffset = y * width * 4;
    rgbaPixels.copy(raw, rowStart + 1, srcOffset, srcOffset + width * 4);
  }
  const compressed = zlib.deflateSync(raw, { level: 6 });

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  return Buffer.concat([
    signature,
    makePngChunk('IHDR', ihdr),
    makePngChunk('IDAT', compressed),
    makePngChunk('IEND', Buffer.alloc(0))
  ]);
}

function sdEquilateralTriangle(px, py, r) {
  const k = 1.7320508075688772; // sqrt(3)
  let x = Math.abs(px) - r;
  let y = py + r / k;
  if (x + k * y > 0) {
    const nx = (x - k * y) * 0.5;
    const ny = (-k * x - y) * 0.5;
    x = nx;
    y = ny;
  }
  const clampedX = Math.max(-2 * r, Math.min(0, x));
  x -= clampedX;
  return -Math.hypot(x, y) * Math.sign(y);
}

function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function smoothCoverage(dist, aa) {
  return clamp01(0.5 - dist / aa);
}

export function renderLotusHexagramIconPng(size) {
  const pixels = Buffer.alloc(size * size * 4);
  const invSize = 2 / size;
  const aa = invSize * 1.4;
  const cosTable = new Float64Array(8);
  const sinTable = new Float64Array(8);
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    cosTable[i] = Math.cos(a);
    sinTable[i] = Math.sin(a);
  }

  for (let y = 0; y < size; y++) {
    const ny = (y + 0.5) * invSize - 1;
    for (let x = 0; x < size; x++) {
      const nx = (x + 0.5) * invSize - 1;
      const distCenter = Math.hypot(nx, ny);

      // Background radial parchment-ink gradient (#1d262b -> #2a3e44)
      const bgGlow = Math.exp(-distCenter * distCenter * 2.1);
      let r = 29 + 16 * bgGlow;
      let g = 38 + 26 * bgGlow;
      let b = 43 + 28 * bgGlow;

      // Subtle inner astrolabe ring (#97bfb0 at low alpha)
      const innerRingDist = Math.abs(distCenter - 0.68) - 0.008;
      const innerRingA = smoothCoverage(innerRingDist, aa) * 0.42;
      if (innerRingA > 0) {
        r = r * (1 - innerRingA) + 151 * innerRingA;
        g = g * (1 - innerRingA) + 191 * innerRingA;
        b = b * (1 - innerRingA) + 176 * innerRingA;
      }

      // Outer golden compass ring (#dfb86a)
      const outerRingDist = Math.abs(distCenter - 0.8) - 0.022;
      const outerRingA = smoothCoverage(outerRingDist, aa) * 0.92;
      if (outerRingA > 0) {
        r = r * (1 - outerRingA) + 223 * outerRingA;
        g = g * (1 - outerRingA) + 184 * outerRingA;
        b = b * (1 - outerRingA) + 106 * outerRingA;
      }

      // Hexagram downward crimson triangle outline (#943f38)
      const dTriDown = Math.abs(sdEquilateralTriangle(nx, ny, 0.56)) - 0.024;
      const downA = smoothCoverage(dTriDown, aa) * 0.95;
      if (downA > 0) {
        r = r * (1 - downA) + 148 * downA;
        g = g * (1 - downA) + 63 * downA;
        b = b * (1 - downA) + 56 * downA;
      }

      // Hexagram upward gold triangle outline (#dfb86a)
      const dTriUp = Math.abs(sdEquilateralTriangle(nx, -ny, 0.56)) - 0.024;
      const upA = smoothCoverage(dTriUp, aa) * 0.96;
      if (upA > 0) {
        r = r * (1 - upA) + 223 * upA;
        g = g * (1 - upA) + 184 * upA;
        b = b * (1 - upA) + 106 * upA;
      }

      // 8-petal stylized blooming lotus in center
      let minPetalDist = 999;
      let isDiagonal = false;
      for (let i = 0; i < 8; i++) {
        const c = cosTable[i];
        const s = sinTable[i];
        const rx = nx * c + ny * s - 0.22;
        const ry = -nx * s + ny * c;
        // Elliptical lotus petal SDF approximation
        const ex = rx / 0.16;
        const ey = ry / 0.068;
        const d = (Math.hypot(ex, ey) - 1.0) * 0.085;
        if (d < minPetalDist) {
          minPetalDist = d;
          isDiagonal = i % 2 === 1;
        }
      }
      const petalA = smoothCoverage(minPetalDist, aa) * 0.92;
      if (petalA > 0) {
        const pr = isDiagonal ? 151 : 227;
        const pg = isDiagonal ? 191 : 169;
        const pb = isDiagonal ? 176 : 173;
        r = r * (1 - petalA) + pr * petalA;
        g = g * (1 - petalA) + pg * petalA;
        b = b * (1 - petalA) + pb * petalA;
      }

      // Central golden stamen core (#f0d48a)
      const coreDist = distCenter - 0.085;
      const coreA = smoothCoverage(coreDist, aa);
      if (coreA > 0) {
        r = r * (1 - coreA) + 240 * coreA;
        g = g * (1 - coreA) + 212 * coreA;
        b = b * (1 - coreA) + 138 * coreA;
      }

      const idx = (y * size + x) * 4;
      pixels[idx] = Math.round(clamp01(r / 255) * 255);
      pixels[idx + 1] = Math.round(clamp01(g / 255) * 255);
      pixels[idx + 2] = Math.round(clamp01(b / 255) * 255);
      pixels[idx + 3] = 255;
    }
  }

  return encodeRgbaToPng(size, size, pixels);
}

export async function stageMobileWww({ rebuild = false } = {}) {
  const indexHtmlPath = path.join(LOTUS_DIR, 'index.html');
  const mainEntryPath = path.join(LOTUS_DIR, 'src/main.js');
  if ((rebuild || !existsSync(indexHtmlPath)) && existsSync(mainEntryPath)) {
    await buildSingleHtml({ entryPath: mainEntryPath, outHtmlPath: indexHtmlPath });
  }
  if (!existsSync(indexHtmlPath)) {
    throw new Error(
      `Missing ${indexHtmlPath}. Build single HTML first via node corridor_of_the_lotus/tools/build-single-html.mjs`
    );
  }

  const wwwDir = path.join(LOTUS_DIR, 'www');
  const iconsDir = path.join(wwwDir, 'icons');
  await mkdir(iconsDir, { recursive: true });

  await copyFile(indexHtmlPath, path.join(wwwDir, 'index.html'));

  const manifest = {
    name: '蓮島迴廊 Corridor of the Lotus',
    short_name: '蓮島迴廊',
    description: '澳門三紀紀念碑谷式視錯覺解謎（1622 · 2026 · 2077）',
    start_url: './index.html',
    display: 'standalone',
    orientation: 'any',
    background_color: '#1d262b',
    theme_color: '#1d262b',
    lang: 'zh-Hant',
    icons: [
      {
        src: './icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: './icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: './icons/icon-1024.png',
        sizes: '1024x1024',
        type: 'image/png',
        purpose: 'any'
      }
    ]
  };
  await writeFile(
    path.join(wwwDir, 'manifest.webmanifest'),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf8'
  );

  const iconSizes = [192, 512, 1024];
  const iconFiles = [];
  for (const size of iconSizes) {
    const outPath = path.join(iconsDir, `icon-${size}.png`);
    const pngBuffer = renderLotusHexagramIconPng(size);
    await writeFile(outPath, pngBuffer);
    iconFiles.push({ size, outPath, bytes: pngBuffer.length });
  }

  return {
    wwwDir,
    indexHtml: path.join(wwwDir, 'index.html'),
    manifest: path.join(wwwDir, 'manifest.webmanifest'),
    iconFiles
  };
}

function isDirectCliRun() {
  if (!process.argv[1]) return false;
  try {
    return realpathSync(process.argv[1]) === realpathSync(__filename);
  } catch {
    return path.resolve(process.argv[1]) === path.resolve(__filename);
  }
}

if (isDirectCliRun()) {
  const rebuild = process.argv.includes('--rebuild');
  const res = await stageMobileWww({ rebuild });
  console.log(`[stage-mobile-www] Staged ${res.wwwDir}`);
  for (const icon of res.iconFiles) {
    console.log(`  - icon-${icon.size}.png (${icon.bytes} bytes)`);
  }
}
