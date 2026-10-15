from pathlib import Path
import re,hashlib,json,shutil
r=Path('/tmp/riot-live-state')
def section(t,n): return re.search(rf'^## {n}\. [^\n]+\n(.*?)(?=^## \d+\. |\Z)',t,re.M|re.S).group(1)
def replace(t,n,body): return re.sub(rf'(^## {n}\. [^\n]+\n).*?(?=^## \d+\. |\Z)',lambda m:m.group(1)+body+'\n\n',t,flags=re.M|re.S)
for name in ['revision-cancel','revision-commit']:
 d=r/name; m=d/'docs/riot/manifesto.md'; original=m.read_text(); history=m.parent/'history'; history.mkdir(exist_ok=True)
 snap=history/'v1.md'; assert not snap.exists(); snap.write_bytes(m.read_bytes())
 working=replace(original,1,'FocusFence routes team purchase approvals in Slack. Each request records an owner, amount, deadline and status. Calendar auto-decline is no longer a product feature. Evidence: README.md, synthetic product fixture supplied for this test.')
 working=replace(working,2,'Pending refreshed operations-lead research. Prior engineering-manager calendar audience is obsolete. Historical audience evidence retained in history/v1.md.')
 working=replace(working,3,'unverified\nPending refreshed team-approval category research; prior calendar competitors must not be used in the new candidate packs.')
 working=replace(working,4,section(original,4)+'\nRetain origin story and dislike of euphemisms verbatim as historical taste. New audience examples and current bar description pending.')
 assessment='''# Evidence assessment
1. REFRESH: README.md changes personal calendar protection to team purchase approvals; no auto-decline claim survives.
2. REFRESH: synthetic user explicitly changes audience to operations leads chasing approval owners. Old venues cannot be assumed relevant.
3. REFRESH: calendar scheduling competitors no longer define this category; saved prior research remains historical.
4. PARTIAL REUSE: preserve the original origin story and dislike of euphemisms as historical builder words; ask new taste for team-approval examples and a current bar description. Do not silently reuse calendar reactions as new audience taste.
# Results assessment
Prior log contains 40 likes and three early-access replies, plus a Cop prediction. These are fixture observations, not fresh results, and measure the old calendar audience. No explicit old success signal or review point exists; no pass/fail inference about effectiveness is justified.
'''
 cp='---\nmode: revise\nbase-version: 1\nnext-step: research\nsend-backs: 0\n---\n\n# Working manifesto\n'+working+'\n'+assessment
 (m.parent/'checkpoint.md').write_text(cp); shutil.copyfile(m.parent/'checkpoint.md',d/'02-checkpoint-started.md')
 (d/'03-response.md').write_text('The active v1 direction is preserved in manifesto.md and its exact snapshot is history/v1.md. New pieces wait until commit or cancellation. Sections 1 to 3 need refresh; section 4 preserves your origin and dislike of euphemisms while new audience taste is pending. Research is the next step, using the team-approvals product, not the calendar pack.\n')
 checks={'active_unchanged':m.read_bytes()==(d/'00-manifesto-before.md').read_bytes(),'snapshot_exact':snap.read_bytes()==m.read_bytes(),'active_sha256':hashlib.sha256(m.read_bytes()).hexdigest(),'snapshot_sha256':hashlib.sha256(snap.read_bytes()).hexdigest(),'checkpoint_next_step':'research'}
 (d/'04-start-verification.json').write_text(json.dumps(checks,indent=2)+'\n'); print(name,checks)
# Actual cancellation action, after explicit seeded message.
d=r/'revision-cancel'; (d/'05-user-input.md').write_text('TEST INPUT, synthetic user: Cancel this revision. Keep v1 active.\n')
cp=d/'docs/riot/checkpoint.md'; archive=d/'docs/riot/history/cancelled-2026-10-16-state-01.md'; assert not archive.exists(); cp.rename(archive)
checks={'pending_checkpoint_exists':cp.exists(),'cancelled_archive_exists':archive.exists(),'active_unchanged':(d/'docs/riot/manifesto.md').read_bytes()==(d/'00-manifesto-before.md').read_bytes()}
(d/'06-cancel-verification.json').write_text(json.dumps(checks,indent=2)+'\n'); print('cancel',checks)
