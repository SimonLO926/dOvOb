#!/usr/bin/env python3
"""Preserve canonical WebPs, optimize only active delivery copies, archive old drafts."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import hashlib, json, re, shutil
from PIL import Image, __version__, features

root=Path(__file__).resolve().parents[2]
assets=root/'bridge/assets'
archive=root/'source-assets/lust/canonical-webp'
archive.mkdir(parents=True,exist_ok=True)
output=root/'source-assets/lust/release-1.2.35-assets.json'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
texts=[root/'bridge/lust-preview.html',*(root/'bridge/lust').glob('*.mjs')]
active=set()
for p in texts:
    if not p.name.endswith('.test.mjs'):
        active.update(re.findall(r'\./assets/(lust-[\w-]+\.webp)',p.read_text()))
existing=json.loads(output.read_text()) if output.exists() else {}
previous={x['runtime']:x for x in existing.get('active',[])}
for p in sorted(assets.glob('lust-*.webp')):
    target=archive/p.name
    if not target.exists():shutil.copy2(p,target)
    elif p.name not in active:assert sha(p)==sha(target),p

def optimize(name):
    path=assets/name;canonical=archive/name
    if not canonical.exists():raise FileNotFoundError(canonical)
    prior=previous.get(str(path.relative_to(root)))
    assert sha(path) in {sha(canonical),prior['runtimeSHA256'] if prior else ''},path
    image=Image.open(canonical);original_size=image.size
    portrait=name.startswith(('lust-vn-event-','lust-vn-shadow-','lust-vn-cupid-portrait-'))
    scale=min(1,960/image.height) if portrait else min(1,1280/image.width)
    size=tuple(round(n*scale) for n in image.size)
    if size!=image.size:image=image.resize(size,Image.Resampling.NEAREST)
    image.save(path,'WEBP',quality=88,method=6,exact=True)
    return {'canonical':str(canonical.relative_to(root)),'runtime':str(path.relative_to(root)),
            'originalSize':original_size,'size':size,'quality':88,'resize':'nearest',
            'canonicalBytes':canonical.stat().st_size,'runtimeBytes':path.stat().st_size,
            'canonicalSHA256':sha(canonical),'runtimeSHA256':sha(path),
            'transparent':image.mode=='RGBA'}

with ThreadPoolExecutor(max_workers=4)as pool:records=list(pool.map(optimize,sorted(active)))
relocations=[]
for canonical in sorted(archive.glob('*.webp')):
    if canonical.name in active:continue
    p=assets/canonical.name
    relocations.append({'oldRuntime':str(p.relative_to(root)),'preserved':str(canonical.relative_to(root)),
                        'bytes':canonical.stat().st_size,'sha256':sha(canonical)})
    if p.exists():assert sha(p)==sha(canonical);p.unlink()
report={'version':'1.2.35','basis':'Active runtime URLs in Lust modules and preview HTML',
        'preservation':'All PNG/MP3 originals, prompts, drafts and canonical WebPs retained in excluded source-assets.',
        'active':records,'historicalRuntimeRelocations':relocations,
        'encoder':{'pillow':__version__,'libwebp':features.version('webp'),'quality':88,'method':6,'resize':'nearest','exactTransparentRGB':True},
        'bytes':{'canonicalActive':sum(x['canonicalBytes']for x in records),
                 'optimizedActive':sum(x['runtimeBytes']for x in records),
                 'historicalRemovedFromDeployment':sum(x['bytes']for x in relocations)}}
output.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report['bytes']))
