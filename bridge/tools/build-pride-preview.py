"""Bundle the local Pride preview into an offline HTML file; no network needed."""
from pathlib import Path
from tempfile import TemporaryDirectory
import argparse
import base64
import json
import mimetypes
import re
import shutil
import subprocess

repo = Path(__file__).resolve().parents[2]
bridge = repo / 'bridge'
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--out', type=Path, required=True)
parser.add_argument('--preview-audio-bitrate', default='128k', help='MP3 bitrate for the portable preview only; originals remain untouched')
args = parser.parse_args()
args.out.mkdir(parents=True, exist_ok=True)
esbuild = repo / 'sanctum/node_modules/.bin/esbuild'
if not esbuild.exists():
    found = shutil.which('esbuild')
    if not found:
        raise SystemExit('Install the Sanctum development dependencies or put esbuild on PATH.')
    esbuild = Path(found)

def data(path):
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    return 'data:' + mime + ';base64,' + base64.b64encode(path.read_bytes()).decode()

# Encode complete stereo preview copies. Keep all eight supplied originals in the repository.
files = [bridge / 'assets' / name for name in [
    'pride-tower-collapse.webp', 'pride-tower-ruins.webp', 'pride-first.webp', 'pride-defeated.webp', 'pride-mirror-defeated.webp', 'pride-palace.webp', 'pride-second.webp', 'mischief-cat.webp',
    'greed-first.webp', 'greed-second.webp', 'greed-defeated.webp', 'greed-first-sprite.webp',
]]
payloads = {str(path.relative_to(bridge)): data(path) for path in files}
with TemporaryDirectory(prefix='pride-preview-audio-') as temporary:
    # Portable copies only; full-resolution story PNG/WebP originals stay intact.
    for name in ['pride-tower-collapse.webp', 'pride-tower-ruins.webp']:
        target = Path(temporary) / name
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', str(bridge / 'assets' / name),
                        '-vf', 'scale=1152:-1', '-c:v', 'libwebp', '-quality', '70', str(target)], check=True)
        payloads['assets/' + name] = data(target)
    for source in sorted((bridge / 'assets/pride-music').glob('*.mp3')):
        target = Path(temporary) / source.name
        shutil.copy2(source, target) if args.preview_audio_bitrate == '128k' else subprocess.run(
            ['ffmpeg', '-v', 'error', '-y', '-i', str(source), '-map', '0:a:0',
             '-c:a', 'libmp3lame', '-b:a', args.preview_audio_bitrate, '-ac', '2', str(target)], check=True)
        payloads[str(source.relative_to(bridge))] = data(target)
asset_refs = {name: index for index, name in enumerate(payloads)}
for name, index in list(asset_refs.items()):
    if name.endswith('.webp'):
        asset_refs[name.replace('.webp', '.png')] = index
# Greed is unreachable from the Pride-only launcher; keep its dormant references
# self-contained without embedding unrelated audio.
for key in ['first-bridge', 'first-special', 'first-last', 'second-bridge', 'second-special', 'second-last']:
    asset_refs[f'assets/greed-music/{key}.mp3'] = asset_refs[f'assets/pride-music/{key}.mp3']
runtime = 'const previewPayloads=' + json.dumps(list(payloads.values())) + ';\n'
runtime += 'const previewAssetRefs=' + json.dumps(asset_refs) + ';\n'
runtime += '''globalThis.__prideAsset = value => {
  const path = String(value).replace(/^[.][/]/, '').split('?')[0];
  if (path.startsWith('data:')) return value;
  const index = previewAssetRefs[path];
  if (index === undefined) throw new Error('Missing offline asset: ' + path);
  return previewPayloads[index];
};\n'''

url_pattern = re.compile(r'new URL\(((?:"[^"]*"|\'[^\']*\'|`[^`]*`)),\s*import\.meta\.url\)\.href')
literal_pattern = re.compile(r'(["\'])(\./assets/[^"\']+)\1')
def transform(code):
    code = url_pattern.sub(lambda match: '__prideAsset(' + match[1] + ')', code)
    return literal_pattern.sub(lambda match: '__prideAsset(' + json.dumps(match[2]) + ')', code)

html = (bridge / 'index.html').read_text()
start = html.index('<script type="module">')
end = html.index('</script>', start)
entry = html[start + len('<script type="module">'):end]
with TemporaryDirectory(prefix='pride-bundle-') as temporary:
    root = Path(temporary)
    for path in bridge.rglob('*.mjs'):
        if path.name.endswith('.test.mjs'):
            continue
        target = root / path.relative_to(bridge)
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(transform(path.read_text()))
    entry_path = root / 'preview-entry.mjs'
    entry_path.write_text(transform(entry))
    bundle_path = root / 'preview-bundle.js'
    subprocess.run([str(esbuild), str(entry_path), '--bundle', '--format=esm', '--minify',
                    '--outfile=' + str(bundle_path)], check=True, capture_output=True)
    javascript = runtime + bundle_path.read_text()

html = html[:start] + '<script type="module">' + javascript.replace('</script', '<\\/script') + html[end:]
html = html.replace('<body', '<body data-pride-preview', 1)
html = html.replace('<title>Bridge</title>', '<title>Crazy Pride · 試玩</title>')
# Embed styles, preload links and image tags without touching the bundled JS.
head, module = html.split('<script type="module">', 1)
resource_pattern = re.compile(r'(["\'])(\./(?:assets|fonts)/[^"\']+)\1')
def inline_resource(match):
    name = match[2].removeprefix('./').split('?')[0]
    value = payloads.get(name)
    if value is None:
        value = data(bridge / name)
    return match[1] + value + match[1]
head = resource_pattern.sub(inline_resource, head)
html = head + '<script type="module">' + module
target = args.out / 'crazy-pride-playable.html'
target.write_text(html)
print(str(target), target.stat().st_size, 'bytes')
