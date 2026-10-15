from pathlib import Path
import re,json,hashlib,shutil
r=Path('/tmp/riot-live-state'); repo=Path('/Users/damasu/Desktop/Personal Projects/riot')
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()
def sec(t,n): return re.search(rf'^## {n}\. [^\n]+\n(.*?)(?=^## \d+\. |\Z)',t,re.M|re.S).group(1)
def rep(t,n,b): return re.sub(rf'(^## {n}\. [^\n]+\n).*?(?=^## \d+\. |\Z)',lambda m:m.group(1)+b+'\n\n',t,flags=re.M|re.S)
# Recover actual on-disk interrupted replacement. No next-version calculation on recovery.
x=r/'revision-commit'; d=x/'docs/riot'; cp=(d/'checkpoint.md').read_text(); actual=(d/'manifesto.md').read_text(); intended=cp.split('\n# Intended result\n',1)[1]
assert actual==intended; assert 'direction-version: 2' in actual; assert all(f'## {i}.' in actual for i in range(1,10)); assert (d/'history/v1.md').read_bytes()==(x/'00-manifesto-before.md').read_bytes(); assert sec(actual,9)==sec((x/'00-manifesto-before.md').read_text(),9)
before=sha(d/'manifesto.md'); (d/'checkpoint.md').rename(d/'history/completed-2026-10-16-state-01.md')
checks={'intended_equals_actual':actual==intended,'version':2,'manifesto_sha256_before_recovery':before,'manifesto_sha256_after_recovery':sha(d/'manifesto.md'),'v1_snapshot_sha256':sha(d/'history/v1.md'),'original_sha256':sha(x/'00-manifesto-before.md'),'log_byte_identical':True,'old_rejections_preserved':sec((x/'00-manifesto-before.md').read_text(),7).strip() in sec(actual,7),'old_direction_superseded': 'The Bouncer (v1, superseded)' in actual,'checkpoint_archived':not (d/'checkpoint.md').exists()}
(x/'21-recovery-verification.json').write_text(json.dumps(checks,indent=2)+'\n'); print('recovery',checks)
# Merge confirmation and safe-baseline selection. No regenerate of saved pool or debate.
for name in ['merge','baseline']:
 x=r/name; d=x/'docs/riot'; cp=(d/'checkpoint.md').read_text(); m=(d/'manifesto.md').read_text(); original_hash=sha(d/'manifesto.md')
 if name=='merge':
  (x/'01-choice-test-input.md').write_text('TEST INPUT, synthetic user: Merge Round Four and The Grandfather Clause.\n')
  direction='''Name: Fresh Questions, Fragile Access
Source candidates: Round Four and The Grandfather Clause, incorporated.
Enemy: treating a generated party game as a timeless printed deck.
Kind of unsafe: pair a concrete fresh question with an honest distribution limitation, only where current evidence supports it.
Recurring move: show a labelled generated-question demonstration, then one verified availability note.
Three things competitors cannot say: comparative exclusivity unverified in the historical fixture. Grounded spine options require product evidence for generated questions, current availability and limitations before publication.
What it is willing to lose: party-only readers who dislike an availability footnote, and readers demanding permanent platform access.
Provocation and finding: repetition complaint from Round Four plus platform-risk seed from The Grandfather Clause, both historical and unverified in this acceptance run.'''
  (x/'02-merge-confirmation-question.md').write_text(direction+'\n\n❓ Q1 · Merged direction: Does Fresh Questions, Fragile Access capture the merge you meant?\n➡️ It keeps the generated question as the main recurring move and adds a verified availability note. It accepts losing readers who want only party content. Confirm or correct this direction before I commit it.\n')
  cp+='\n# Pending merge confirmation\n'+direction+'\n'; (d/'checkpoint.md').write_text(cp); shutil.copyfile(d/'checkpoint.md',x/'03-checkpoint-awaiting-confirmation.md')
  (x/'04-pending-verification.json').write_text(json.dumps({'manifesto_unchanged':sha(d/'manifesto.md')==original_hash,'next_step':'choose','merge_committed':False},indent=2)+'\n')
  user='Confirmed: Fresh Questions, Fragile Access. Intended action: try a game. Signal: five trial starts. Review point: seven days after first publication.'
  rejected='Round Four and The Grandfather Clause: incorporated as source candidates in Fresh Questions, Fragile Access, not rejected.\nThe Life of the Party (decoy, safe baseline): fixed safest-agency provocation, lost to the explicit synthetic merge choice.\nThe Sober Friend: sober-friend/disclaimer provocation from historical research, lost because the merged direction centers generated questions and availability.'
 else:
  user='Choose The Life of the Party, the safe baseline, despite the Cop. Intended action: try a game. Signal: five trial starts. Review point: seven days after first publication.'
  direction=(repo/'test/fixtures/cop-dry-run/candidates.md').read_text().split('## Candidate 1: The Life of the Party (decoy)\n',1)[1].split('## Candidate 2:',1)[0].strip()+'\nSelected safe baseline. Historical claims such as "ultimate" are not validated for publication; this state test does not certify their truth.'
  rejected='Round Four: admit-the-flaw/repetition provocation, lost because synthetic builder selected safe baseline.\nThe Grandfather Clause: platform-risk provocation, lost because synthetic builder selected safe baseline.\nThe Sober Friend: sober-friend/disclaimer provocation, lost because synthetic builder selected safe baseline.'
 (x/'05-confirmed-choice-test-input.md').write_text('TEST INPUT, synthetic user: '+user+'\n'); cp+='\n# Confirmed choice, verbatim TEST INPUT\n'+user+'\n'
 final=rep(m,5,direction+'\nIntended action: try a game. Success signal: five trial starts. Review point: seven days after first publication, agreed by synthetic user input.')
 final=rep(final,6,'One strong opinion per piece. Use the selected recurring move and one grounded product-specific spine. Reflect builder voice without compulsory phrase repetition; check banned list; unslop; Cop last creative review followed by final validation. Practical line: no false claims, fabricated testimonials or attacks on private individuals. All inherited fixture claims need verification before publication.')
 final=rep(final,7,rejected); debate=(repo/'test/fixtures/cop-dry-run/objections.md').read_text()+'\n'+(repo/'test/fixtures/cop-dry-run/verdict.md').read_text()
 final=rep(final,8,'Saved historical fixture sitting reused without regeneration. No isolated agents dispatched in this run.\n'+debate); final=final.replace('stage: tasted','stage: chosen').replace('direction-version: 0','direction-version: 1')
 cp=cp.replace('next-step: choose','next-step: commit')+'\n# Intended result\n'+final; (d/'checkpoint.md').write_text(cp); shutil.copyfile(d/'checkpoint.md',x/'06-checkpoint-before-commit.md'); (d/'manifesto.md').write_text(final)
 assert (d/'manifesto.md').read_text()==final; assert len(re.findall(r'^## [1-9]\. ',final,re.M))==9
 (d/'history').mkdir(exist_ok=True); (d/'checkpoint.md').rename(d/'history/completed-2026-10-16-state-01.md')
 checks={'version':1,'stage':'chosen','all_nine_sections':True,'checkpoint_archived':not (d/'checkpoint.md').exists(),'selected': 'Fresh Questions, Fragile Access' if name=='merge' else 'The Life of the Party','source_candidates_incorporated':name!='merge' or 'incorporated' in sec(final,7),'safe_baseline_not_rejected':name!='baseline' or 'The Life of the Party' not in sec(final,7),'manifesto_sha256':sha(d/'manifesto.md')}
 (x/'07-verification.json').write_text(json.dumps(checks,indent=2)+'\n'); print(name,checks)
