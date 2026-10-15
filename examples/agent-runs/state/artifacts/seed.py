from pathlib import Path
import re, shutil, hashlib, json
root=Path('/Users/damasu/Desktop/Personal Projects/riot'); out=Path('/tmp/riot-live-state')
def write(p,s): p.parent.mkdir(parents=True,exist_ok=True); p.write_text(s)
pool=(root/'test/fixtures/cop-dry-run/candidates.md').read_text(); obs=(root/'test/fixtures/cop-dry-run/objections.md').read_text(); pack=(root/'test/fixtures/cop-dry-run/pack.md').read_text(); verdict=(root/'test/fixtures/cop-dry-run/verdict.md').read_text()
for name,n in [('resume-nine',9),('resume-seven',7),('merge',9),('baseline',9)]:
 d=out/name/'docs/riot'; write(d/'manifesto.md',pack+'\n## 5. Direction\nPending.\n\n## 6. Rules for pieces\nPending.\n\n## 7. Rejected candidates\n\n## 8. Debate minutes\n\n## 9. Log\n')
 objections='## '.join(obs.split('## ')[:n+1])
 cp=f'---\nmode: kickoff\nbase-version: 0\nnext-step: choose\nsend-backs: 0\n---\n\n# TEST INPUT checkpoint\nSeeded saved outputs copied from historical fixtures, not newly generated or verified audience evidence.\n\n# Working manifesto\n{(d/"manifesto.md").read_text()}\n# Complete candidate pool\n{pool}\n# Saved objections\n{objections}'
 if n==9: cp+='\n# Saved Cop verdict\n'+verdict
 cp+='\n# Pending question\nChoose a direction, merge two, or send back once.\n'
 write(d/'checkpoint.md',cp); shutil.copyfile(d/'checkpoint.md',out/name/'00-checkpoint-before.md'); shutil.copyfile(d/'manifesto.md',out/name/'00-manifesto-before.md')
base=(root/'test/fixtures/manifesto.md').read_text()
for name in ['revision-cancel','revision-commit']:
 d=out/name/'docs/riot'; write(d/'manifesto.md',base); shutil.copyfile(d/'manifesto.md',out/name/'00-manifesto-before.md')
 write(out/name/'README.md','# FocusFence, TEST INPUT product evidence\nFocusFence now routes team purchase approvals in Slack. A request has an owner, amount, deadline, and approval status. It does not auto-decline calendar events. The product changed from personal calendar protection to team approvals.\n')
 write(out/name/'01-user-input.md','TEST INPUT, synthetic user message for acceptance execution, not a real user approval:\n/riot-revise. The product changed from personal calendar protection to team purchase approvals. Our users are now operations leads who chase approval owners. Keep my dislike of euphemisms and my origin story, but refresh the audience examples.\n')
manifest={str(p.relative_to(out)):hashlib.sha256(p.read_bytes()).hexdigest() for p in out.rglob('*.md')}
write(out/'00-seed-hashes.json',json.dumps(manifest,indent=2)+'\n')
print('Created six isolated fixture directories. No production files changed.')
