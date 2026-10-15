from pathlib import Path
import json,re
b=Path('/tmp/riot-live-piece');checks=[]
for c in ['direct','never-repeats','testimonial','first-person','repetition-outcome']:
 p=b/c; piece=next((p/'docs/riot/pieces').glob('2026-10-16-post-*.md'))
 if piece.name.endswith('.review.md'):piece=Path(str(piece).replace('.review.md','.md'))
 review=piece.with_suffix('.review.md');s=piece.read_text();body=s.split('---\n',2)[2].strip('\n');manifest=(p/'docs/riot/manifesto.md').read_text()
 assert review.exists()
 assert manifest.count(f'(pieces/{piece.name})')==1
 assert manifest.count(f'(pieces/{review.name})')==1
 assert body==(p/'final-text.txt').read_text().rstrip('\n')
 assert body.isascii() and len(body)<=280
 assert (p/'cop-reviewed.txt').read_text().rstrip() in review.read_text()
 assert 'never repeats' not in body.lower() and 'saved me ten hours' not in body and 'got promoted' not in body
 assert 'validation-status: '+('ready' if c=='direct' else 'blocked') in s
 if c=='direct':assert (p/'demo-output.txt').read_text().strip() in body and 'Demo reply:' in body
 if c=='repetition-outcome':
  assert 'Your calendar needs a bouncer.' not in body
  assert 'role, company size and calendar problem' in body
  assert len(list((p/'docs/riot/pieces').glob('prior-*.md')))==5
 for link in re.findall(r'\]\((pieces/[^)]+)\)',manifest):assert (p/'docs/riot'/link).exists()
 checks.append({'case':c,'status':'PASS','final_weighted_count':len(body),'piece_and_review_exist':True,'linked_log_count':1})
for c in ['missing-reference','conflicting-format']:
 assert not (b/c/'docs/riot/pieces').exists()
 assert (b/c/'response.md').exists()
 checks.append({'case':c,'status':'PASS','no_draft_or_new_log':True})
assert not (b/'missing-reference/installed/riot-post/references/post.md').exists()
assert Path('skills/marketing/riot-post/references/post.md').exists()
(b/'verification.json').write_text(json.dumps(checks,indent=2)+'\n')
print(json.dumps(checks,indent=2))
