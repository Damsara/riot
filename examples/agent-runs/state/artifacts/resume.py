from pathlib import Path
import hashlib,json,re
r=Path('/tmp/riot-live-state')
rows='''| Name | Enemy | Kind of unsafe | Recurring move | What it loses | Best objection | Cop verdict |
|---|---|---|---|---|---|---|
| The Life of the Party, safe baseline | Boring parties | None | Show a group mid-game | No defined audience loss | Round Four: generic endless-prompts language | Scroll-past |
| Round Four, recommended challenger | Repeating decks | Admit the flaw first | Close on a generated question | Readers demanding proof it never gets old | Sober Friend: another unproved repetition promise | Stop-on |
| The Grandfather Clause | Platform gatekeeping | Name review risk | Name the rule that week | Readers wanting platform reassurance | Round Four: founder story, not party story | Scroll-past |
| The Sober Friend | Disclaimers without mechanics | Address non-drinkers | Show a non-drinking question | Drinking-only readers | Grandfather Clause: wellness pivot | Scroll-past |
'''
(r/'resume-nine/01-response.md').write_text('Skill load: ask-riot -> stance -> riot-canon. Read saved checkpoint.\n\n/riot-me resumes the saved choose step. The four candidates, all nine objections, and saved Cop verdict are present; no research, candidates or objections rerun. Historical fixture claims remain unverified.\n\n'+rows+'\n❓ Q1 · Direction: Which direction fits your product?\n➡️ I recommend Round Four on the saved Cop verdict. Pick any row, merge two, or send all three challengers back once with a line to sharpen them. The safe baseline is selectable.\n')
(r/'resume-seven/01-response-before-recovery.md').write_text('Skill load: ask-riot -> stance -> riot-canon. Literal saved-step route, recorded before any workaround.\n\n/riot-me resumes the saved choose step.\n\n'+rows.replace('Stop-on |','Missing |').replace('Scroll-past |','Missing |')+'\n❓ Q1 · Direction: Pick a direction, merge two, or send the challengers back once.\n\nOBSERVED DEFECT: The saved next-step is choose, but only seven keyed objections and no verdict exist. The question is premature and Cop cells cannot be filled. ask-riot explicitly names the saved step; stance says an active checkpoint resumes its saved next step. checkpoints says request missing outputs but gives no rule to downgrade an inconsistent next-step. No checkpoint changed; no missing objections invented.\n')
for name in ['resume-nine','resume-seven']:
 p=r/name; before=p/'00-checkpoint-before.md'; after=p/'docs/riot/checkpoint.md'; m=p/'docs/riot/manifesto.md'; bm=p/'00-manifesto-before.md'
 result={'checkpoint_unchanged':before.read_bytes()==after.read_bytes(),'manifesto_unchanged':m.read_bytes()==bm.read_bytes(),'checkpoint_sha256':hashlib.sha256(after.read_bytes()).hexdigest(),'saved_objections':len(re.findall(r"^## .*author, on ",after.read_text(),re.M)),'saved_candidates':len(re.findall(r'^## Candidate ',after.read_text(),re.M))}
 (p/'02-verification.json').write_text(json.dumps(result,indent=2)+'\n'); print(name,json.dumps(result))
