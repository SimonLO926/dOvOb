#!/usr/bin/env python3
"""Build a local single HTML and a small HTTP folder; never publish or alter sources."""
import argparse,base64,hashlib,json,mimetypes,re,shutil,subprocess,zipfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
def main():
 p=argparse.ArgumentParser();p.add_argument('--out',required=True);p.add_argument('--esbuild',required=True);p.add_argument('--revision',default='r3',choices=['r1','r2','r3']);a=p.parse_args();out=Path(a.out);out.mkdir(parents=True,exist_ok=True)
 subprocess.run([a.esbuild,str(ROOT/'bridge/gluttony/app.mjs'),'--bundle','--format=esm','--minify','--outfile='+str(out/'preview.bundle.js')],check=True)
 html=(ROOT/'bridge/gluttony-preview.html').read_text();bundle=(out/'preview.bundle.js').read_text();html=re.sub(r'<script type="module" src="./gluttony/preview.bundle.js[^\"]*"></script>',lambda _: '<script type="module">'+bundle.replace('</script','<\\/script')+'</script>',html)
 paths=sorted(set(re.findall(r'\./(?:assets|fonts)/[A-Za-z0-9_.-]+',html)));manifest=[]
 local=out/'local-preview';(local/'gluttony').mkdir(parents=True,exist_ok=True)
 for url in paths:
  src=ROOT/'bridge'/url[2:];data=src.read_bytes();mime=mimetypes.guess_type(src.name)[0] or 'application/octet-stream';embedded='data:'+mime+';base64,'+base64.b64encode(data).decode();html=html.replace(url,embedded);dest=local/url[2:];dest.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(src,dest);manifest.append({'path':'bridge/'+url[2:],'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
 single=out/f'gluttony-{a.revision}-playable.html';single.write_text(html)
 shutil.copy2(ROOT/'bridge/gluttony-preview.html',local/'gluttony-preview.html');shutil.copy2(out/'preview.bundle.js',local/'gluttony/preview.bundle.js')
 (local/'start.py').write_text('import http.server,webbrowser,os\nfrom pathlib import Path\nos.chdir(Path(__file__).resolve().parent)\nserver=http.server.ThreadingHTTPServer(("127.0.0.1",0),http.server.SimpleHTTPRequestHandler)\nurl=f"http://127.0.0.1:{server.server_port}/gluttony-preview.html"\nprint(url,flush=True)\nwebbrowser.open(url)\nserver.serve_forever()\n')
 if (out/'README.md').exists():shutil.copy2(out/'README.md',local/'README.md')
 (out/'assets.json').write_text(json.dumps(manifest,indent=2))
 with zipfile.ZipFile(out/f'gluttony-{a.revision}-preview.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
  for f in local.rglob('*'):
   if f.is_file():z.write(f,f.relative_to(out))
 print(json.dumps({'htmlBytes':single.stat().st_size,'zipBytes':(out/f'gluttony-{a.revision}-preview.zip').stat().st_size,'runtimeAssetBytes':sum(r['bytes'] for r in manifest),'assets':len(manifest)}))
if __name__=='__main__':main()
