#!/usr/bin/env python3
"""Verify delivery budgets and retained source assets; optionally inspect real Jekyll output."""
import argparse,hashlib,json
from pathlib import Path
root=Path(__file__).resolve().parents[2]
p=argparse.ArgumentParser();p.add_argument('--site',type=Path);p.add_argument('--out',type=Path);a=p.parse_args()
def size(d):return sum(f.stat().st_size for f in d.rglob('*')if f.is_file())
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
m=json.loads((root/'source-assets/optimization-1.2.40/assets.json').read_text())
for record in m['audio']:
 assert sha(root/record['original'])==record['beforeSHA256'],record
 assert sha(root/record['runtime'])==record['afterSHA256'],record
 assert abs(float(record['beforeDuration'])-float(record['afterDuration']))<.15,record
 assert record['channels']==2 and record['sampleRate']=='44100',record
for record in m['images']:
 assert sha(root/record['source'])==record['sourceSHA256'],record
 assert sha(root/record['previousDelivery'])==record['beforeSHA256'],record
 assert sha(root/record['runtime'])==record['afterSHA256'],record
for record in m['relocations']:
 assert sha(root/record['preserved'])==record['sha256'],record
 assert not (root/record['old']).exists(),record
baseline=json.loads((root/'source-assets/optimization-1.2.40/preserved-source-sha256.json').read_text())
for name,digest in baseline.items():assert sha(root/name)==digest,name
report={'bridgeWorkingTreeBytes':size(root/'bridge'),'preservedSourceBytes':size(root/'source-assets'),
 'audioSavedBytes':sum(x['beforeBytes']-x['afterBytes']for x in m['audio']),
 'imageSavedBytes':sum(x['beforeBytes']-x['afterBytes']for x in m['images']),
 'historicalDeliverySavedBytes':sum(x['bytes']for x in m['relocations']),
 'preservedSourceFilesVerified':len(baseline),
 'scope':'Working tree counts include documentation and tests. Source preservation is not deployed size or Git history size.'}
assert report['bridgeWorkingTreeBytes']<120_000_000,report
if a.site:
 site=a.site.resolve();assert site.is_dir(),site
 for name in ['memory','source-assets','bridge/tools']:assert not(site/name).exists(),name
 for f in site.rglob('*'):
  assert 'node_modules'not in f.parts and not f.name.endswith('.test.mjs'),f
 for name in ['bridge/index.html','bridge/cartridge.html','bridge/envy.html','bridge/lust.html','bridge/gluttony.html']:assert (site/name).is_file(),name
 for rec in m['relocations']:assert not(site/rec['old']).exists(),rec
 assert len(list((site/'bridge/assets').rglob('*.mp3')))==36
 for rec in m['audio']+m['images']:assert sha(site/rec['runtime'])==rec['afterSHA256'],rec
 report['actualJekyllSiteBytes']=size(site);report['actualJekyllBridgeBytes']=size(site/'bridge')
 assert report['actualJekyllBridgeBytes']<120_000_000,report
if a.out:a.out.parent.mkdir(parents=True,exist_ok=True);a.out.write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report))
