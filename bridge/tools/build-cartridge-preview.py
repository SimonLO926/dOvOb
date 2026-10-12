#!/usr/bin/env python3
"""Local Crazy r2 selector + unchanged encounters; no website deployment."""
import argparse,base64,hashlib,json,mimetypes,re,shutil,subprocess,zipfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
BRIDGE=ROOT/'bridge'
def sha(data):return hashlib.sha256(data).hexdigest()
def main():
 p=argparse.ArgumentParser();p.add_argument('--out',type=Path,required=True);p.add_argument('--reuse-lust-lite',type=Path);p.add_argument('--portable-audio',action='store_true');args=p.parse_args();args.out.mkdir(parents=True,exist_ok=True)
 package=args.out/'local-demo';target=package/'bridge';target.mkdir(parents=True,exist_ok=True)
 records=[]
 def copy(source,data=None,rule='unchanged'):
  raw=source.read_bytes();packed=raw if data is None else data;relative=source.relative_to(BRIDGE);dest=target/relative;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(packed);records.append({'source':str(source.relative_to(ROOT)),'sourceBytes':len(raw),'sourceSHA256':sha(raw),'file':str(dest.relative_to(package)),'bytes':len(packed),'sha256':sha(packed),'rule':rule})
 # Runtime modules only: no tests, source PNGs, development dependencies or recordings.
 for source in BRIDGE.rglob('*.mjs'):
  if '.test.' not in source.name:copy(source)
 for name in ['index.html','envy-preview.html','lust-preview.html','cartridge-preview.html','pride-demo.css','cartridge/demo.bundle.js'] :copy(BRIDGE/name)
 for source in (BRIDGE/'fonts').iterdir():copy(source)
 cache={};active_lust=set()
 if args.reuse_lust_lite:
  meta=json.loads(args.reuse_lust_lite.with_name(args.reuse_lust_lite.stem+'-assets.json').read_text());blobs={}
  for value in re.findall(r'data:image/webp;base64,([A-Za-z0-9+/=]+)',args.reuse_lust_lite.read_text()):
   raw=base64.b64decode(value);blobs[sha(raw)]=raw
  for record in meta['assets']:
   if record['source'].endswith('.webp'):
    source=ROOT/record['source'];active_lust.add(source.name)
    if record['sourceSHA256']!=sha(source.read_bytes()):raise ValueError('Lust source changed: '+str(source))
    cache[source.name]=blobs[record['packedSHA256']]
 for source in (BRIDGE/'assets').glob('*.webp'):
  if source.name.startswith('lust-'):
   if source.name not in active_lust and args.reuse_lust_lite:continue
   # The large concept cover remains identical to the source at the new selector size.
   if source.name!='lust-cupid-r2.webp' and source.name in cache:copy(source,cache[source.name],'r9 verified portable illustration: chapter 640x480 / other half-size, nearest, q88');continue
  copy(source)
 audio=[]
 for source in sorted((BRIDGE/'assets').glob('*-music/*.mp3')):
  relative=source.relative_to(BRIDGE);dest=target/relative;dest.parent.mkdir(parents=True,exist_ok=True)
  if args.portable_audio:
   subprocess.run(['ffmpeg','-v','error','-y','-i',str(source),'-map','0:a:0','-c:a','libmp3lame','-b:a','64k','-ar','44100','-ac','2',str(dest)],check=True)
  else:shutil.copy2(source,dest)
  def duration(path):return float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','default=nw=1:nk=1',str(path)]))
  before,after=duration(source),duration(dest)
  if abs(before-after)>=.15:raise ValueError('Audio duration changed: '+str(source))
  audio.append({'source':str(source.relative_to(ROOT)),'file':str(dest.relative_to(package)),'sourceBytes':source.stat().st_size,'bytes':dest.stat().st_size,'sourceSHA256':sha(source.read_bytes()),'sha256':sha(dest.read_bytes()),'sourceDuration':before,'duration':after,'codec':'full-length stereo 64kbps MP3 (portable only)' if args.portable_audio else 'unchanged'})
 license_path=ROOT/'source-assets/cartridge-demo/THREE-LICENSE.txt';shutil.copy2(license_path,package/'THREE-LICENSE.txt')
 (package/'start.py').write_text('''from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from functools import partial
from pathlib import Path
import webbrowser
root=Path(__file__).resolve().parent
server=ThreadingHTTPServer(('127.0.0.1',0),partial(SimpleHTTPRequestHandler,directory=str(root)))
url=f'http://127.0.0.1:{server.server_port}/bridge/cartridge-preview.html'
print(url,flush=True)
webbrowser.open(url)
try:server.serve_forever()
except KeyboardInterrupt:server.server_close()
''')
 (package/'README.txt').write_text('Crazy 卡帶選關 r2，本地示範。需要 Python 3。\n1. 遊戲 ZIP 及音樂 ZIP 解壓到同一資料夾，保留 local-demo/bridge 結構。\n2. 在 local-demo 執行 python start.py（Windows 也可 py start.py）。自動開本機網址；Ctrl+C 停止。\n3. 選卡、拖動／旋轉／±縮放，插卡後進入各自完整 Boss。色慾是 r9 試玩；未推出三罪封印。\n只讀主遊戲偏好，不寫正式進度／排行榜；本地演示切換主題及語言不寫偏好。\n概念圖及原貓／字型保留。Lust 其他插圖為 r9 便攜縮尺寸副本；音樂完整64k立體聲，不剪歌。\n沒有 CDN，不需上網或發布。由於 ES 模組與 fetch，請用本機伺服器，而非直接雙擊 HTML。\n\nLocal demo, Python 3 required. Extract game and music ZIPs together, then run python start.py in local-demo. No CDN or saved progress.\n')
 manifest={'version':'r2','three':'0.180.0','scope':'Local selector and actual Greed/Pride/Envy encounters plus Lust r9 preview; no formal progress or deployment','assets':records,'audio':audio,'runtimeBytes':sum(v['bytes']for v in records)+sum(v['bytes']for v in audio),'sourceBytes':sum(v['sourceBytes']for v in records)+sum(v['sourceBytes']for v in audio),'network':'Local HTTP server only, no CDN','external_models':False}
 (package/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
 music_files={v['file'] for v in audio};zips=[]
 for kind in ['game','music']:
  output=args.out/f'crazy-cartridge-r2-{kind}.zip'
  with zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
   for source in sorted(package.rglob('*')):
    if not source.is_file():continue
    is_music=str(source.relative_to(package))in music_files
    if (kind=='music')!=is_music:continue
    z.write(source,str(source.relative_to(args.out)))
  zips.append({'file':output.name,'bytes':output.stat().st_size,'sha256':sha(output.read_bytes())})
 (args.out/'delivery.json').write_text(json.dumps({'version':'r2','artifacts':zips,'sourceBytes':manifest['sourceBytes'],'runtimeBytes':manifest['runtimeBytes']},indent=2)+'\n');print(json.dumps(zips),flush=True)
if __name__=='__main__':main()
