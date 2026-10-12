#!/usr/bin/env python3
"""Package the prebuilt, locally vendored three.js demo without CDN requests."""
import argparse
import base64
import hashlib
import json
import mimetypes
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[2]

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--out', type=Path, required=True)
    args = parser.parse_args()
    args.out.mkdir(parents=True, exist_ok=True)
    html = (ROOT / 'bridge/cartridge-preview.html').read_text()
    script = (ROOT / 'bridge/cartridge/demo.bundle.js').read_text()
    assets = [f'assets/{p}.webp' for p in ['greed-first', 'pride-first', 'envy-first', 'lust-cupid-r2', 'mischief-cat']]
    assets += ['fonts/fusion-pixel-zh-hant.woff2']
    sources = []
    for relative in assets:
        source = ROOT / 'bridge' / relative
        data = source.read_bytes()
        mime = mimetypes.guess_type(source)[0] or 'application/octet-stream'
        uri = f'data:{mime};base64,' + base64.b64encode(data).decode()
        html = html.replace('./' + relative, uri)
        script = script.replace('./' + relative, uri)
        sources.append({'path': str(source.relative_to(ROOT)), 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()})
    html = html.replace('<script type="module" src="./cartridge/demo.bundle.js"></script>', '<script type="module">' + script.replace('</script', '<\\/script') + '</script>')
    output = args.out / 'crazy-cartridge-r1.html'
    output.write_text(html)
    license_path = ROOT / 'source-assets/cartridge-demo/THREE-LICENSE.txt'
    (args.out / 'THREE-LICENSE.txt').write_bytes(license_path.read_bytes())
    with zipfile.ZipFile(args.out / 'crazy-cartridge-r1.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
        archive.write(output, output.name)
        archive.write(license_path, 'THREE-LICENSE.txt')
    manifest = {'version':'r1','three':'0.180.0','assets':sources,'external_models':False,'network_required':False,'scope':'Standalone cartridge selection and original Bridge sample; no full Boss binding or formal progress.'}
    manifest['artifacts'] = [{'file':p.name,'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in [output, args.out / 'crazy-cartridge-r1.zip']]
    (args.out / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(manifest['artifacts']))

if __name__ == '__main__':
    main()
