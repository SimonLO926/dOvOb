from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
import subprocess,json,hashlib
r=Path.cwd();out=r.parent/'slim-candidates';out.mkdir(exist_ok=True)
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
records=[]
def audio(p):
 dest=out/p.name
 original=r/'source-assets/greed/music'/p.name
 source=original if original.exists()else p
 subprocess.run(['/opt/homebrew/bin/ffmpeg','-y','-i',str(source),'-map','0:a:0','-map_metadata','-1','-c:a','libmp3lame','-b:a','128k','-ar','44100','-ac','2',str(dest)],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,check=True)
 def info(f):return json.loads(subprocess.check_output(['/opt/homebrew/bin/ffprobe','-v','quiet','-show_format','-show_streams','-of','json',str(f)]))
 a,b=info(source),info(dest);assert abs(float(a['format']['duration'])-float(b['format']['duration']))<.15
 return {'runtime':str(p),'candidate':str(dest),'beforeBytes':source.stat().st_size,'afterBytes':dest.stat().st_size,'beforeSHA256':sha(source),'afterSHA256':sha(dest),'beforeDuration':a['format']['duration'],'afterDuration':b['format']['duration'],'codec':'mp3','bitrate':128000,'channels':b['streams'][0]['channels'],'sampleRate':b['streams'][0]['sample_rate']}
with ThreadPoolExecutor(max_workers=3)as pool:records=list(pool.map(audio,sorted((r/'bridge/assets/greed-music').glob('*.mp3'))))
images=[]
for boss in ['greed','pride','envy']:
 for p in sorted((r/'bridge/assets').glob(boss+'-*.webp')):
  im=Image.open(p)
  # Retain photo cat, all transparent character art, crop atlases and pixel sprites.
  if im.mode=='RGBA' or any(x in p.name for x in ['tarot','secret','endings','sar','room','windows']):continue
  src=r/'source-assets'/boss/'images'/(p.stem+'.png')
  if p.name=='envy-first.webp':src=r/'source-assets/envy/images/envy-first-concept-r15.png'
  if not src.exists():continue
  im=Image.open(src);size=im.size;scale=min(1,1280/max(size));newsize=tuple(round(n*scale)for n in size);im=im.resize(newsize,Image.Resampling.NEAREST);dest=out/p.name;im.save(dest,'WEBP',quality=88,method=6,exact=True)
  if dest.stat().st_size>=p.stat().st_size:continue
  images.append({'runtime':str(p.relative_to(r)),'candidate':str(dest),'source':str(src.relative_to(r)),'beforeBytes':p.stat().st_size,'afterBytes':dest.stat().st_size,'beforeSize':size,'afterSize':newsize,'beforeSHA256':sha(p),'afterSHA256':sha(dest),'sourceSHA256':sha(src),'quality':88,'resample':'nearest','source':'source-assets/'+str(src.relative_to(r/'source-assets'))})
(out/'manifest.json').write_text(json.dumps({'audio':records,'images':images},indent=2))
print(json.dumps({'audioBefore':sum(x['beforeBytes']for x in records),'audioAfter':sum(x['afterBytes']for x in records),'imagesBefore':sum(x['beforeBytes']for x in images),'imagesAfter':sum(x['afterBytes']for x in images),'imageCount':len(images)}))
