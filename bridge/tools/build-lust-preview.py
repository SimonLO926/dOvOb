#!/usr/bin/env python3
"""Build a portable preview from the same local modules; no push/deployment."""
import argparse,base64,hashlib,json,re,subprocess,tempfile
from pathlib import Path
root=Path(__file__).resolve().parents[2];bridge=root/'bridge'
p=argparse.ArgumentParser();p.add_argument('--out',type=Path,required=True);p.add_argument('--esbuild',default='esbuild');p.add_argument('--revision',default='r9');p.add_argument('--download-lite',action='store_true',help='Additional smaller single-file delivery; resize Lust illustrations in the package only.');p.add_argument('--reuse-lite',type=Path,help='Reuse verified unchanged image bytes from a prior lite HTML and its adjacent assets JSON.');p.add_argument('--external-audio',action='store_true',help='Keep audio in an adjacent audio/ folder for smaller separate downloads.');p.add_argument('--audio-dir',type=Path,help='Use preserved full-length portable audio copies for embedding.');args=p.parse_args();args.out.mkdir(parents=True,exist_ok=True)
if not re.fullmatch(r'r[0-9]+',args.revision):p.error('--revision must be r followed by digits')
encoded={};asset_records=[]
packed_cache={}
if args.reuse_lite:
 if not args.download_lite:p.error('--reuse-lite requires --download-lite')
 previous=json.loads(args.reuse_lite.with_name(args.reuse_lite.stem+'-assets.json').read_text())
 if 'WebP quality 88' not in previous['encoding']:p.error('incompatible image encoding')
 blobs={}
 for b64 in re.findall(r'data:image/webp;base64,([A-Za-z0-9+/=]+)',args.reuse_lite.read_text()):
  blob=base64.b64decode(b64);blobs[hashlib.sha256(blob).hexdigest()]=blob
 for record in previous['assets']:
  if record['packedSHA256'] in blobs and (record['fixedSizeScene'] or record['halfSizeIllustration']):
   packed_cache[(record['sourceSHA256'],record['fixedSizeScene'])]=blobs[record['packedSHA256']]
def data(path):
 if path in encoded:return encoded[path]
 suffix=path.suffix;mime={'.webp':'image/webp','.woff2':'font/woff2','.woff':'font/woff','.mp3':'audio/mpeg'}.get(suffix,'application/octet-stream');original=path.read_bytes();raw=(args.audio_dir/path.name).read_bytes() if suffix=='.mp3' and args.audio_dir else original
 scaled=args.download_lite and suffix=='.webp' and path.name.startswith('lust-')
 fixed_scene=scaled and path.name.startswith('lust-vn-scene-')
 if scaled:
  resize='scale=640:480:flags=neighbor' if fixed_scene else 'scale=iw/2:ih/2:flags=neighbor'
  cached=packed_cache.get((hashlib.sha256(original).hexdigest(),bool(fixed_scene)))
  raw=cached if cached is not None else subprocess.run(['ffmpeg','-v','error','-i',str(path),'-vf',resize,'-c:v','libwebp','-quality','88','-compression_level','6','-threads','1','-f','webp','pipe:1'],check=True,capture_output=True).stdout
 asset_records.append({'source':str(path.relative_to(root)),'sourceBytes':len(original),'packedBytes':len(raw),'sourceSHA256':hashlib.sha256(original).hexdigest(),'packedSHA256':hashlib.sha256(raw).hexdigest(),'halfSizeIllustration':scaled and not fixed_scene,'fixedSizeScene':fixed_scene})
 encoded[path]='data:'+mime+';base64,'+base64.b64encode(raw).decode();return encoded[path]
with tempfile.TemporaryDirectory() as tmp:
 bundle=Path(tmp)/'bundle.js';command=[args.esbuild,str(bridge/'lust/app.mjs'),'--bundle','--format=esm','--minify','--outfile='+str(bundle)]
 if args.download_lite:command.append('--pure:Object.freeze')
 subprocess.run(command,check=True)
 js=bundle.read_text()
 # Explicit story URLs may use a preserved prior revision for unchanged illustrations.
 js=re.sub(r'\./assets/lust-[a-z-]+-r[2345]\.webp',lambda m:data(bridge/m.group(0)[2:]),js)
 html=(bridge/'lust-preview.html').read_text();html=re.sub(r'<script type="module" src="./lust/app.mjs(?:\?[^"]*)?"></script>',lambda _: '<script type="module">'+js.replace('</script','<\\/script')+'</script>',html)
 def url(match):
  path=bridge/match.group(1).removeprefix('./');return data(path) if path.exists() else match.group(0)
 html=re.sub(r'\./(?:assets|fonts)/[^\s\'"()<>]+',lambda m:('./audio/'+Path(m.group(0)).name if args.external_audio and m.group(0).endswith('.mp3') else data(bridge/m.group(0)[2:])) if (bridge/m.group(0)[2:]).exists() else m.group(0),html)
 if args.download_lite:
  html=html.replace(f'<title>Crazy Lust · 色慾試玩 {args.revision}</title>',f'<title>Crazy Lust · 色慾 {args.revision} 輕量下載版</title>').replace(f'獨立 {args.revision} · 不寫正式紀錄。',f'獨立 {args.revision} 輕量版 · 插圖縮尺寸 · 不寫正式紀錄。').replace(f'Standalone {args.revision} · No saved progress.',f'Standalone {args.revision} lite · Smaller illustrations · No saved progress.')
 target=args.out/f'lust-{args.revision}-{"download" if args.download_lite else "playable"}.html';target.write_text(html)
 if args.download_lite:(args.out/f'lust-{args.revision}-download-assets.json').write_text(json.dumps({'encoding':'Additional delivery only: 12 chapter scenes 640x480, other Lust illustrations half width/height, nearest-neighbor, WebP quality 88. Original PNGs, canonical WebPs, cat, fonts, gameplay and complete revision remain unchanged.','assets':asset_records},indent=2))
 print(target, target.stat().st_size)
