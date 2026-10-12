#!/usr/bin/env python3
"""Read-only asset inventory for the compression review required before a PR."""
import argparse
import hashlib
import json
from pathlib import Path

root=Path(__file__).resolve().parents[2]
parser=argparse.ArgumentParser()
parser.add_argument('--manifest',type=Path,required=True,help='Assets JSON produced by build-lust-preview.py')
parser.add_argument('--out',type=Path,required=True)
args=parser.parse_args()
records=json.loads(args.manifest.read_text())['assets']
live={r['source'] for r in records}
def record(path):
    data=path.read_bytes()
    return {'path':str(path.relative_to(root)),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()}
active=[record(root/p) for p in sorted(live)]
historical=[record(p) for p in sorted((root/'bridge/assets').glob('lust-*.webp')) if str(p.relative_to(root)) not in live]
canonical_music=[record(p) for p in sorted((root/'bridge/assets/lust-music').glob('*.mp3'))]
report={'readOnly':True,'basis':'Current portable build manifest. Validate site runtime references and Jekyll output again before any authorized PR.',
 'activeAssets':active,'historicalWebPsStillInRuntimeFolder':historical,'canonicalMusic':canonical_music,
 'bytes':{'activeCanonicalAssets':sum(p['bytes'] for p in active),'portableAssets':sum(p['packedBytes'] for p in records),'historicalWebPs':sum(p['bytes'] for p in historical),'canonicalMusic':sum(p['bytes'] for p in canonical_music)},
 'requiredBeforePR':['Optimize delivery copies while retaining all originals and drafts in source-assets.',
 'Keep historical/unused assets out of the deployed output; update historical references when relocating.',
 'Preserve full music duration, readable pixel art, cat detail, transparency and all 12 story scenes/expression variants.',
 'Load assets by boss/scene; distinguish deployed total bytes, initial network bytes and offline package bytes.',
 'Record before/after dimensions, codec/quality, bytes and SHA; inspect four viewport crops and test audio duration.',
 'Inspect actual Pages/Jekyll build output. Do not deploy node_modules, raw source, offline bundles or recordings.']}
args.out.parent.mkdir(parents=True,exist_ok=True)
args.out.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report['bytes']))
