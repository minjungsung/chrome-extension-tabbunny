"""Validate static extension inputs and produce a clean upload ZIP."""
import json
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
ROOT=Path(__file__).resolve().parents[1]
source=ROOT/'extension'
m=json.loads((source/'manifest.json').read_text())
assert m['manifest_version']==3 and len(m['description'])<=132
assert not m.get('host_permissions')
for path in [m['action']['default_popup'], *m['icons'].values()]:
 assert (source/path).is_file()
out=ROOT/'dist'/f"{ROOT.name}-{m['version']}.zip"
out.parent.mkdir(exist_ok=True)
with ZipFile(out,'w',ZIP_DEFLATED) as z:
 for p in sorted(source.rglob('*')):
  if p.is_file() and not p.name.startswith('.'):
   assert p.suffix in {'.json','.html','.css','.js','.png','.svg'}
   z.write(p,p.relative_to(source))
with ZipFile(out) as z: assert z.testzip() is None
print(f"Validated {m['name']}; created {out.relative_to(ROOT)} ({out.stat().st_size} bytes)")
