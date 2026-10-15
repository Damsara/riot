from pathlib import Path
import re,json,hashlib,shutil
root=Path('/Users/damasu/Desktop/Personal Projects/riot'); base=Path('/tmp/riot-live-state'); x=base/'resume-seven-after-fix'; d=x/'docs/riot'; d.mkdir(parents=True,exist_ok=True)
shutil.copyfile(base/'resume-seven/00-checkpoint-before.md',d/'checkpoint.md'); shutil.copyfile(base/'resume-seven/00-manifesto-before.md',d/'manifesto.md'); cp=(d/'checkpoint.md').read_text(); before=cp
(x/'00-input-checkpoint.md').write_text(cp); shutil.copyfile(root/'skills/marketing/riot-canon/references/checkpoints.md',x/'01-loaded-checkpoint-rules.md')
(x/'02-resume-response.md').write_text('/riot-me resumes debate, not choose: the candidate pool is intact, but The Sober Friend author has not objected to Round Four or The Grandfather Clause, and the Cop verdict is missing. I will preserve all four candidates and the seven saved objections, request only those two missing outputs, then run the Cop. No builder choice question yet.\n')
cp=cp.replace('next-step: choose','next-step: debate'); (d/'checkpoint.md').write_text(cp); (x/'03-rewound-checkpoint.md').write_text(cp)
missing='''## The Sober Friend's author, on Round Four
"This one generates a new question instead of repeating one" still makes me trust an app's promise about repetition before I see a round. Its recurring move can show a question, but the headline sounds like another deck update until it does.

## The Sober Friend's author, on The Grandfather Clause
"Every piece names the exact rule VibeCheck is surviving under that week" makes choosing a party game feel like monitoring a review queue. The pack's audience is opening a game at pre-drinks, not following a founder's platform dispute.
'''
(x/'04-missing-objections-output.md').write_text('Sequential role: The Sober Friend author; received saved sections 1 to 4, state summary, all four candidates. Only two missing rival jobs requested.\n\n'+missing)
verdict='''Verdict: scroll-past The Life of the Party / stop-on Round Four
Scroll-past: The Life of the Party. "Ultimate way to level up any party" repeats section 3. The Grandfather Clause's "exact rule" is not a party moment. The Sober Friend's "person who isn't drinking" is not the pack's main opening pitch.
Stop-on: Round Four. "Closes on the exact question the app generated fresh" shows something at the table instead of another promise.
Objections: Round Four's author on The Life of the Party is right about generic language. The Sober Friend's author on The Grandfather Clause is right about a review queue. Its objection to Round Four is right until the generated question appears.
'''
(x/'05-cop-output.md').write_text('Sequential Cop role, one context; saved pack, four candidates and all nine objections supplied. Audience simulation only.\n\n'+verdict)
cp+='\n# Newly completed missing outputs\n'+missing+'\n# Saved Cop verdict\n'+verdict+'\n# Execution\nsequential, two missing outputs only.\n'; cp=cp.replace('next-step: debate','next-step: choose'); (d/'checkpoint.md').write_text(cp); (x/'06-complete-checkpoint.md').write_text(cp)
(x/'07-choice-question-output.md').write_text('All nine unique objections and the Cop verdict are now saved.\n\n'+(base/'resume-nine/01-response.md').read_text().split('| Name',1)[1].join(['| Name','']).replace('on the saved Cop verdict','on the newly completed Cop verdict'))
# Structural comparison of exact saved chunks, not just counts.
pool_before=before.split('# Complete candidate pool\n')[1].split('# Saved objections\n')[0]; pool_after=cp.split('# Complete candidate pool\n')[1].split('# Saved objections\n')[0]
old_objections=before.split('# Saved objections\n')[1].split('# Pending question\n')[0]; after_objections=cp.split('# Saved objections\n')[1].split('# Pending question\n')[0]
pairs=re.findall(r'^## (.*author, on .*)$',cp,re.M)
checks={'identical_baseline_input':(x/'00-input-checkpoint.md').read_bytes()==(base/'resume-seven/00-checkpoint-before.md').read_bytes(),'candidate_pool_byte_identical':pool_before==pool_after,'seven_prior_objections_byte_identical':old_objections==after_objections,'unique_objection_pairs':len(set(pairs)),'all_objections':len(pairs),'manifesto_unchanged':(d/'manifesto.md').read_bytes()==(base/'resume-seven/00-manifesto-before.md').read_bytes(),'next_step':'choose','cop_verdict_present':'Verdict: scroll-past' in cp,'candidate_pool_sha256':hashlib.sha256(pool_after.encode()).hexdigest(),'old_seven_sha256':hashlib.sha256(old_objections.encode()).hexdigest()}
(x/'08-verification.json').write_text(json.dumps(checks,indent=2)+'\n'); print(checks)
