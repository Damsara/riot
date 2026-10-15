from pathlib import Path
import re,json,hashlib,shutil
r=Path('/tmp/riot-live-state/revision-commit'); d=r/'docs/riot'; original=(r/'00-manifesto-before.md').read_text(); cp=(d/'checkpoint.md').read_text()
def sec(t,n): return re.search(rf'^## {n}\. [^\n]+\n(.*?)(?=^## \d+\. |\Z)',t,re.M|re.S).group(1)
def rep(t,n,b): return re.sub(rf'(^## {n}\. [^\n]+\n).*?(?=^## \d+\. |\Z)',lambda m:m.group(1)+b+'\n\n',t,flags=re.M|re.S)
def save(name,body): (r/name).write_text(body)
research='''TEST INPUT: synthetic research checkpoint completion for state testing. This is NOT independently researched market evidence, actual reviews, or verified complaints. Candidate generation and persistence are exercised from it; research accuracy is excluded.
Audience: operations leads who chase an owner for a purchase request. Synthetic complaint A: "The request is in Slack but nobody owns the yes." Synthetic complaint B: "I need to know who is holding the request, not another dashboard." Evidence pointers: 05-research-test-input.md#complaint-a and #complaint-b.
Unverified category comparison targets: Approveit, Jira Service Management, ServiceNow, Kissflow, Pipefy. No claim about these products' current features is established. Test banned list: seamless, streamlined, ultimate, effortless.
Synthetic taste examples: a calm approval dashboard, a missing-owner receipt, a blame-filled leaderboard, a request timeline, a blunt pending-owner label. They are scenario prompts, not real marketing citations.
'''
save('05-research-test-input.md',research)
questions='''❓ Q1 · Dashboard: The last time you saw a calm approval dashboard, love, hate or nothing, and why?
❓ Q2 · Receipt: For a missing-owner receipt, love, hate or nothing, and why?
❓ Q3 · Leaderboard: For a blame-filled leaderboard, love, hate or nothing, and why?
❓ Q4 · Timeline: For a request timeline, love, hate or nothing, and why?
❓ Q5 · Label: For a blunt pending-owner label, love, hate or nothing, and why?

These are five separate message outputs, stored together as a transcript. Questions refer to explicitly synthetic examples from the test input, not presented as real advertisements.
'''
save('06-taste-question-outputs.md',questions)
answers='''TEST INPUT, synthetic user answers supplied before proceeding:
1. "nothing, clean screens don't tell me who owes an answer."
2. "love, show the missing owner without calling anyone lazy."
3. "hate, don't turn this into a public blame game."
4. "love, I want to see where the request stopped."
5. "love, just say who owns the yes."
'''
save('07-taste-test-answers.md',answers)
save('08-story-question-output.md','❓ Q1 · Bar description: How did you describe the team-approvals product the last time someone asked?\n')
voice='"It tells the team who owns the yes."'
save('09-story-test-answer.md','TEST INPUT, synthetic user: '+voice+'\n')
working=cp.split('# Working manifesto\n',1)[1].split('\n# Evidence assessment',1)[0]
working=rep(working,2,'unverified, synthetic acceptance-test research only. Operations leads chasing purchase approval owners. Synthetic complaint A: "The request is in Slack but nobody owns the yes." Synthetic complaint B: "I need to know who is holding the request, not another dashboard." Source: 05-research-test-input.md. No external venues verified.')
working=rep(working,3,'unverified, synthetic acceptance-test category inputs. Comparison targets: Approveit, Jira Service Management, ServiceNow, Kissflow, Pipefy; current features not asserted. Banned list for this fixture: seamless, streamlined, ultimate, effortless. Source: 05-research-test-input.md.')
working=rep(working,4,sec(original,4)+'\nHistorical calendar examples above are retained as history, not current audience evidence. New synthetic reactions, verbatim:\n'+answers.split('before proceeding:\n')[1]+'\nCurrent bar description, verbatim: '+voice)
pack='Sequential roles in one agent context, not isolated agents. New sections 1 to 4 only, plus this state summary: product has changed to team approvals; v1 remains active; v2 is pending; use synthetic findings transparently and make no competitive feature exclusivity claim.\n\n'+working.split('## 5. Direction')[0]
save('10-author-pack.md',pack)
briefs=[('Clear Approvals','the safest, most competent direction a good agency would sell'),('Who Owns Yes','Name the enemy: invisible approval ownership. Synthetic complaint A, source 05-research-test-input.md#complaint-a.'),('Receipt for Delay','Use the format nobody expects: a receipt for a pending decision. Synthetic complaint B, source 05-research-test-input.md#complaint-b.'),('No Approval Theater','Refuse the superlative: show one pending request, not a transformative-workflow promise. Thin synthetic research, seed-only third brief, explicitly marked.')]
candidates=[
'''Name: Clear Approvals
Enemy: confusing request tracking.
Kind of unsafe: safe baseline, no provocation required.
Recurring move: show one request progressing from submitted to approved.
Three things competitors cannot say: unverified exclusivity; use only these grounded product specifics: Slack request owner; amount and deadline; visible approval status.
What it is willing to lose: readers who want public confrontation.
Provocation and finding: the safest, most competent direction a good agency would sell.''',
'''Name: Who Owns Yes
Enemy: a pending request without a visible owner.
Kind of unsafe: call out missing ownership instead of praising productivity.
Recurring move: end on the request owner and the answer still needed, using a labelled demonstration.
Three things competitors cannot say: exclusivity unverified; product-specific spine options: request owner, deadline, and pending approval status from README.md.
What it is willing to lose: buyers who prefer neutral dashboard screenshots and comments calling direct ownership language blunt.
Provocation and finding: name the enemy; synthetic complaint A, 05-research-test-input.md#complaint-a.''',
'''Name: Receipt for Delay
Enemy: invisible waiting in a request queue.
Kind of unsafe: frame a pending answer as an unpaid receipt without accusing a named person.
Recurring move: a labelled demonstration receipt naming request, owner, deadline, and status.
Three things competitors cannot say: exclusivity unverified; grounded spine options are the request amount, owner and deadline visible in README.md.
What it is willing to lose: readers who dislike administrative paperwork jokes.
Provocation and finding: unexpected format; synthetic complaint B, 05-research-test-input.md#complaint-b.''',
'''Name: No Approval Theater
Enemy: inflated transformation promises.
Kind of unsafe: admit this is one approval request, not a company reinvention.
Recurring move: show one labelled pending request and stop there.
Three things competitors cannot say: exclusivity unverified; grounded spine options are Slack location, owner and approval status from README.md.
What it is willing to lose: enterprise buyers looking for a platform vision.
Provocation and finding: refuse the superlative, seed-only third brief because the synthetic research is thin.''']
pool='\n\n'.join('## Candidate '+str(i+1)+'\nBrief: '+briefs[i][1]+'\n\n'+c for i,c in enumerate(candidates)); save('11-candidate-outputs.md',pool)
cp='---\nmode: revise\nbase-version: 1\nnext-step: debate\nsend-backs: 0\n---\n\n# Working manifesto\n'+working+'\n# Evidence assessment\n'+(r/'02-checkpoint-started.md').read_text().split('# Evidence assessment\n')[1]+'\n# Research provenance\n'+research+'\n# Complete candidate pool\n'+pool
(d/'checkpoint.md').write_text(cp); save('12-checkpoint-candidates-saved.md',cp)
attacks={
(1,0):'"Show one request progressing" is the same dashboard tour I skip when I already know how a status field works.',
(1,2):'A "receipt" makes me decode a joke before I can see whether anyone owns the decision.',
(1,3):'"Show one labelled pending request and stop there" leaves me staring at the very problem I opened Slack to escape.',
(2,0):'"Clear Approvals" could name every approval tool in the tab bar. There is nothing in that name that catches my eye.',
(2,1):'"Who owns the yes" sounds like a manager looking for someone to blame; the builder explicitly hated a public blame leaderboard.',
(2,3):'"Not a company reinvention" answers a vendor claim I was not thinking about instead of my overdue purchase.',
(3,0):'"Progressing from submitted to approved" skips the stalled middle where my request actually lives.',
(3,1):'An "owner and the answer still needed" might only identify someone I already know; knowing the owner does not produce an answer.',
(3,2):'An "unpaid receipt" suggests a payment tool, while the product README says purchase approvals. I could misunderstand the product in the first line.'}
objections='\n\n'.join(f'## {briefs[a][0]} author on {briefs[b][0]}\n{v}' for (a,b),v in attacks.items()); save('13-objection-outputs.md',objections)
verdict='''Verdict: scroll-past Clear Approvals / stop-on Who Owns Yes
Scroll-past: Clear Approvals. "Show one request progressing from submitted to approved" skips my stalled request. Receipt for Delay's "unpaid receipt" makes me expect payments. No Approval Theater's "not a company reinvention" answers a vendor instead of me.
Stop-on: Who Owns Yes. "The request owner and the answer still needed" points at synthetic complaint A's missing owner.
Objections: No Approval Theater's author on Clear Approvals is right about the stalled middle; its objection to Receipt for Delay is right about confusing payments. Receipt for Delay's author on Who Owns Yes is right about blame risk, given taste answer 3.
'''; save('14-cop-output.md',verdict)
cp=cp.replace('next-step: debate','next-step: choose')+'\n# Saved objections\n'+objections+'\n# Saved Cop verdict\n'+verdict+'\n# Role execution\nsequential. All author and Cop outputs above executed by this one agent. Not isolated or measured audience feedback.\n'; (d/'checkpoint.md').write_text(cp); save('15-checkpoint-debate-saved.md',cp)
save('16-choice-question-output.md','''| Name | Enemy | Kind of unsafe | Recurring move | Loss | Best objection | Cop |
|---|---|---|---|---|---|---|
| Clear Approvals, safe baseline | Confusing tracking | None | Show status progression | Confrontation seekers | Skips stalled middle | Scroll-past |
| Who Owns Yes, recommended | Invisible ownership | Name responsibility | Owner and missing answer | Neutral-copy buyers | Could sound like blame | Stop-on |
| Receipt for Delay | Invisible waiting | Receipt format | Demo receipt | Joke-averse readers | Sounds like payments | Scroll-past |
| No Approval Theater | Transformation hype | Refuse grand promises | One request | Platform-vision buyers | Vendor argument | Scroll-past |

❓ Q1 · Direction: Which direction do you choose, or which two should merge?
➡️ I recommend Who Owns Yes with labelled demonstrations, preserving your dislike of public blame. Clear Approvals remains selectable; one send-back is also available.
''')
save('17-choice-test-input.md','TEST INPUT, synthetic user: Choose Who Owns Yes. Intended action: operations leads request a demo. Success signal: three qualified demo requests. Review point: 14 days after first publication.\n')
cp+='\n# Confirmed choice, verbatim TEST INPUT\nChoose Who Owns Yes. Intended action: operations leads request a demo. Success signal: three qualified demo requests. Review point: 14 days after first publication.\n'
final=rep(working,5,candidates[1]+'\nIntended audience action: operations leads request a demo. Success signal: three qualified demo requests. Review point: 14 days after first publication, synthetic builder agreement in 17-choice-test-input.md.')
final=rep(final,6,'One strong opinion per piece. Show the request owner and missing answer. Use a verified product-specific spine from section 5 without inventing comparative exclusivity. Reflect the builder voice, including direct ownership language, without compulsory phrase repetition. Check the banned list; run unslop; the Cop is last creative reviewer, then final validation. No false claims, fabricated testimonials or attacks on private individuals. Demo requests must be labelled demonstrations; synthetic research is not publishable evidence.')
final=rep(final,7,sec(original,7)+'\nThe Bouncer (v1, superseded): '+sec(original,5).strip()+'\nClear Approvals (decoy, safe baseline): fixed safe brief, lost because its status progression skipped the stalled middle.\nReceipt for Delay: receipt-format provocation from synthetic complaint B, lost because the payment metaphor confused the product.\nNo Approval Theater: refuse-the-superlative provocation, lost because it argued with a vendor instead of showing approval ownership.')
final=rep(final,8,sec(original,8)+'\nSitting 2, sequential; audience simulation, synthetic research; seed-only third brief.\n'+objections+'\n'+verdict)
final=rep(final,9,sec(original,9).rstrip('\n')); final=final.replace('direction-version: 1','direction-version: 2',1)
# Retain Log bytes exactly, including final trailing newline.
final=final[:final.index('## 9. Log\n')]+original[original.index('## 9. Log\n'):]
cp=cp.replace('next-step: choose','next-step: commit')+'\n# Intended result\n'+final
(d/'checkpoint.md').write_text(cp); save('18-checkpoint-before-replacement.md',cp); save('19-intended-manifesto.md',final)
assert (d/'manifesto.md').read_bytes()==(r/'00-manifesto-before.md').read_bytes()
(d/'manifesto.md').write_text(final); save('20-manifesto-after-replacement-before-crash.md',(d/'manifesto.md').read_text())
print('Stopped at injected crash boundary after replacing manifesto, before verification/archive. checkpoint remains next-step: commit.')
