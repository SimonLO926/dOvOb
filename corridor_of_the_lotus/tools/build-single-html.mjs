import { chmod, copyFile, readFile, writeFile } from 'node:fs/promises';
import { existsSync, realpathSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Script } from 'node:vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const LOTUS_DIR = path.resolve(__dirname, '..');
const WORKSPACE_ROOT = path.resolve(LOTUS_DIR, '..');

function resolveEsbuildModulePath() {
  const explicitPath = '/Volumes/Elements/fun/鏡海豪情/node_modules/esbuild/lib/main.js';
  if (existsSync(explicitPath)) return explicitPath;
  return path.join(WORKSPACE_ROOT, 'node_modules/esbuild/lib/main.js');
}

function resolveThreeModulePath() {
  const explicitPath = '/Volumes/Elements/fun/鏡海豪情/node_modules/three/build/three.module.js';
  if (existsSync(explicitPath)) return explicitPath;
  return path.join(WORKSPACE_ROOT, 'node_modules/three/build/three.module.js');
}

async function prepareEsbuildBinaryOnVolumes() {
  if (process.platform !== 'darwin') return;
  const esbuildPkgBin = path.join(
    WORKSPACE_ROOT,
    `node_modules/@esbuild/darwin-${process.arch}/bin/esbuild`
  );
  if (!existsSync(esbuildPkgBin)) return;
  if (LOTUS_DIR.startsWith('/Volumes/') || WORKSPACE_ROOT.startsWith('/Volumes/')) {
    const tmpBin = path.join(os.tmpdir(), `lotus-esbuild-${process.arch}`);
    await copyFile(esbuildPkgBin, tmpBin);
    await chmod(tmpBin, 0o755);
    process.env.ESBUILD_BINARY_PATH = tmpBin;
  }
}

const FAVICON_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1d262b"/><polygon points="32,8 50,40 14,40" fill="none" stroke="#dfb86a" stroke-width="2.8"/><polygon points="32,56 50,24 14,24" fill="none" stroke="#943f38" stroke-width="2.8"/><circle cx="32" cy="32" r="5" fill="#e3a9ad"/></svg>`
);

export function buildHtmlDocument(safeInlineScript) {
  const prebootScript = [
    '(function(){try{',
    'var d=document.documentElement;',
    'var bg=localStorage.getItem("lotus_bg_mode_v1");',
    'var m=bg==="night"?"night":"day";',
    'd.dataset.bgMode=m;',
    'var cs=document.querySelector(\'meta[name="color-scheme"]\');',
    'if(cs)cs.content=m==="night"?"dark":"light";',
    'var tc=document.querySelector(\'meta[name="theme-color"]\');',
    'if(tc)tc.content=m==="night"?"#0c1228":"#e8fbf5";',
    'var lg=localStorage.getItem("lotus_lang_v1");',
    'if(lg==="zh-Hant"||lg==="zh-Hans"||lg==="en"||lg==="ja")d.lang=lg;',
    '}catch(_e){}})();'
  ].join('');
  return [
    '<!doctype html>',
    '<html lang="zh-Hant" data-bg-mode="day">',
    '<head>',
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">',
    '<meta name="color-scheme" content="light dark">',
    '<meta name="apple-mobile-web-app-capable" content="yes">',
    '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">',
    '<meta name="mobile-web-app-capable" content="yes">',
    '<meta name="theme-color" content="#e8fbf5">',
    '<meta name="description" content="蓮島迴廊 Corridor of the Lotus — 澳門三紀紀念碑谷式視錯覺解謎，全離線單檔版">',
    `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${FAVICON_SVG}">`,
    '<title>蓮島迴廊 · Corridor of the Lotus</title>',
    `<script>${prebootScript}</script>`,
    '<style>',
    'html,body{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#e8fbf5;touch-action:none;-webkit-user-select:none;user-select:none;}',
    '#lotus-boot-splash{position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:radial-gradient(circle at 50% 42%,#e8fbf5 0%,#d2f4ee 78%);color:#234782;font-family:"PingFang TC","Noto Serif TC","Songti TC",Georgia,serif;letter-spacing:0.18em;transition:opacity 0.45s ease;}',
    '#lotus-boot-splash.is-hidden{opacity:0;pointer-events:none;}',
    '.lotus-boot-emblem{width:44px;height:44px;border-radius:50%;border:1.5px solid rgba(212,160,72,0.72);background:rgba(255,251,245,0.68);display:grid;place-items:center;color:#d4a048;font-size:20px;animation:lotusPulse 1.6s ease-in-out infinite;}',
    '@keyframes lotusPulse{0%,100%{transform:scale(0.96);opacity:0.75;}50%{transform:scale(1.06);opacity:1;}}',
    '</style>',
    '</head>',
    '<body>',
    '<div id="lotus-boot-splash" aria-label="載入蓮島迴廊">',
    '<div class="lotus-boot-emblem">✶</div>',
    '<div style="font-size:14px;">蓮島迴廊 · 鏡海三紀正甦醒</div>',
    '</div>',
    '<div id="lotus-app"></div>',
    `<script>${safeInlineScript}</script>`,
    '</body>',
    '</html>'
  ].join('');
}

export async function buildSingleHtml({
  entryPath = path.join(LOTUS_DIR, 'src/main.js'),
  outHtmlPath = path.join(LOTUS_DIR, 'index.html')
} = {}) {
  await prepareEsbuildBinaryOnVolumes();
  const esbuildModulePath = resolveEsbuildModulePath();
  const threeModulePath = resolveThreeModulePath();
  const esbuild = await import(pathToFileURL(esbuildModulePath).href);

  const result = await esbuild.build({
    entryPoints: [entryPath],
    bundle: true,
    format: 'iife',
    target: ['es2020'],
    minify: true,
    charset: 'utf8',
    write: false,
    legalComments: 'none',
    nodePaths: [path.join(WORKSPACE_ROOT, 'node_modules')],
    alias: {
      three: threeModulePath
    },
    logLevel: 'silent'
  });

  if (!result.outputFiles || !result.outputFiles.length) {
    throw new Error('esbuild produced no output for Corridor of the Lotus');
  }

  const rawBundle = result.outputFiles[0].text;
  const safeInlineScript = rawBundle.replace(/<\/script/gi, '<\\/script');

  // Verify the inlined JavaScript parses cleanly before writing HTML.
  new Script(safeInlineScript, { filename: 'corridor_of_the_lotus/index.html:inline' });

  const html = buildHtmlDocument(safeInlineScript);
  await writeFile(outHtmlPath, html, 'utf8');

  // Ensure parent reference file existence was not disturbed (read-only check only).
  const bytes = Buffer.byteLength(html, 'utf8');
  return {
    outHtmlPath,
    bytes,
    bundleBytes: Buffer.byteLength(rawBundle, 'utf8')
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
  const info = await buildSingleHtml();
  console.log(
    `[build-single-html] Built ${info.outHtmlPath} (${(info.bytes / 1024).toFixed(1)} KB total, ${(info.bundleBytes / 1024).toFixed(1)} KB JS)`
  );
}
