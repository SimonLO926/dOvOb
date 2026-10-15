#!/usr/bin/env python3
"""Read-only check of all preserved original images, drafts and runtime WebPs."""
from pathlib import Path
import hashlib,json
ROOT=Path(__file__).resolve().parents[2]
m=json.loads((ROOT/'source-assets/gluttony/r1-sources.json').read_text())
checked=[]
for group in ['references','adopted','runtime','drafts']:
 for item in m[group]:
  p=ROOT/item['path'];data=p.read_bytes()
  assert len(data)==item['bytes'],str(p)
  assert hashlib.sha256(data).hexdigest()==item['sha256'],str(p)
  checked.append(item['path'])
print(json.dumps({'files':len(checked),'adoptedPNGBytes':m['adoptedPNGBytes'],'runtimeWebPBytes':m['runtimeWebPBytes'],'savedDraftBytes':m['savedDraftBytes'],'sourceBytes':sum(p.stat().st_size for p in (ROOT/'source-assets/gluttony').rglob('*') if p.is_file())}))
