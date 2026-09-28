> canon-version: 2026-09
> Rules for one long-form article on dev.to, Medium, Hashnode, or a self-hosted blog: length, canonical URL and cross-posting, tags, and what each platform punishes.

# article

## Format question

Ask which platform: dev.to, Medium, Hashnode, or a self-hosted blog.

## dev.to

| Rule | Value | Source |
|---|---|---|
| Length band | No enforced minimum or maximum; community norms favor scannable long-form (headers, code blocks, bullet lists) over a wall of text, and 1,500 to 2,500 words is the general cross-platform benchmark, with 2,100 to 2,400 words correlating with the most organic traffic | https://dev.to/3z/the-anatomy-of-a-great-devto-post-2hcl, https://www.blogtyrant.com/long-vs-short-blog-posts/ |
| Canonical URL | Set with the `canonical_url:` front matter field, described officially as the link for the content's canonical version | https://dev.to/p/editor_guide |
| Cross-posting | Publish here and set `canonical_url:` back to the original when the piece already lives elsewhere; DEV's own moderation treats uncredited duplication as a plagiarism violation | https://dev.to/p/editor_guide, https://dev.to/code-of-conduct |
| Tags | Max 4 tags in `tags:` front matter; tag moderators actively police tags used for reach rather than topical accuracy | https://dev.to/p/editor_guide, https://dev.to/j3ffjessie/moderating-tags-on-dev-23oo |
| Self-promotion policy | No dedicated self-promo rule found; the Code of Conduct's plagiarism and AI-disclosure clauses are the ones enforced against low-effort or promotional posts | https://dev.to/code-of-conduct |
| AI disclosure | Contributors must transparently disclose any AI-assisted content creation | https://dev.to/code-of-conduct |

## Medium

| Rule | Value | Source |
|---|---|---|
| Length band | A roughly 7 minute read time (about 1,600 words) correlates with peak recommends; a 10,000-post analysis found 6 to 7 minute reads earned 20%+ more recommends than reads under 5 minutes | https://medium.com/the-mission/after-10-000-data-points-we-figured-out-how-to-find-a-perfect-medium-post-58c41c314f6a |
| Canonical URL | "Import a story" auto-sets a canonical link back to the original; publishing directly requires checking "This story was originally published elsewhere" in Advanced Settings and entering the link by hand | https://help.medium.com/hc/en-us/articles/214550207-Importing-a-post-to-Medium, https://help.medium.com/hc/en-us/articles/360033930293-Set-a-canonical-link |
| Cross-posting | A story missing its canonical link risks the Medium copy outranking the original in search, even though Medium documents no formal duplicate-content penalty | https://help.medium.com/hc/en-us/articles/360033930293-Set-a-canonical-link |
| Tags | Max 5 tags per story, minimum 1 required | https://medium.com/@jaimedavid327/mediums-five-tag-limit-annoying-or-actually-useful-2030ab410fca |
| Self-promotion policy | Posts primarily about "making money on Medium" or the Partner Program itself are restricted to Network Distribution, the narrowest reach tier, regardless of quality | https://help.medium.com/hc/en-us/articles/360006362473-Medium-s-Distribution-Guidelines-How-curators-review-stories-for-Boost-General-and-Network-Distribution |
| Medium's AI-disclosure rule | Disclosed AI-assisted writing is eligible for General Distribution only, never Boost; undisclosed or low-quality AI content is capped out of Boost entirely, capping both reach and earnings | https://medium.com/blog/our-curation-teams-approach-to-keeping-ai-generated-content-out-of-your-recommendations-7e57384d897a |

## Hashnode

| Rule | Value | Source |
|---|---|---|
| Length band | No Hashnode-specific guidance found, `unverified`; general long-form SEO norms of 1,500 to 2,500 words apply since Hashnode blogs are self-hosted-style and search indexed | https://www.searchenginejournal.com/ideal-blog-post-length-for-seo/255633/ |
| Canonical URL | The `originalArticleURL` field (labeled "canonical URL" in the editor) declares the post originated elsewhere; Hashnode then sets the canonical tag to that link | https://hashnode.com/post/canonical-url-what-is-it-and-why-should-you-care |
| Cross-posting | Set the canonical URL back to the original whenever this piece is also published elsewhere; the Code of Conduct requires content to be original work or clearly attributed | https://hashnode.com/post/canonical-url-what-is-it-and-why-should-you-care, https://hashnode.com/code-of-conduct |
| Tags | Up to 5 tags per post, minimum 1 required | https://docs.hashnode.com/help-center/hashnode-editor/adding-tags-to-your-blog-post |
| Self-promotion policy | The Code of Conduct explicitly bans "using the platform primarily for self-promotion without contributing to the community," alongside automated posting, engagement farming, and SEO abuse | https://hashnode.com/code-of-conduct |
| AI disclosure | No Hashnode-specific AI-disclosure rule found, `unverified`; automated AI spam detection can auto-delete posts flagged as spam, with an acknowledged false-positive risk | https://hashnode.com/forums/thread/wrongful-community-guidelines-flag-on-my-blog-post |

## Self-hosted blog

| Rule | Value | Source |
|---|---|---|
| Length band | Backlinko's analysis of 1M+ Google results found the average first-page result is about 1,447 words; 1,500 to 2,500 words is a common baseline, 2,500 to 4,000 for competitive keywords; word count itself is not a Google ranking factor, it correlates with depth and backlinks | https://www.orbitmedia.com/blog/does-word-count-matter-for-seo/, https://www.searchenginejournal.com/revisiting-word-count/316335/ |
| Canonical URL | This is the canonical home; when the same piece also runs on dev.to, Medium, or Hashnode, point each of those copies' canonical field back here | https://www.seroundtable.com/google-updates-canonicalization-help-documentation-35329.html |
| Cross-posting | Google no longer recommends cross-domain `rel=canonical` for general syndication as of its May 2022 guidance; a syndicating third party should apply `noindex` instead of relying on a canonical to protect the original | https://www.seroundtable.com/google-updates-canonicalization-help-documentation-35329.html, https://developers.google.com/search/blog/2009/12/handling-legitimate-cross-domain |
| Tags | No platform limit; tag for a reader finding the piece, not for a crawler | n/a |
| Self-promotion policy | No platform to violate, but scraped or scaled auto-generated content used to manipulate rankings is sanctioned under Google's spam policies | https://raddinteractive.com/what-is-thin-content-understand-googles-thin-content-penalty-seo/ |
| AI disclosure | No enforced rule; Google states there is no blanket duplicate-content penalty and takes action only when duplication is used deceptively | https://developers.google.com/search/blog/2008/09/demystifying-duplicate-content-penalty |

## What gets you punished

- A missing or wrong canonical URL when the same article runs on more than one platform lets the copy outrank the original, a real ranking loss on every platform above.
- Undisclosed AI-assisted writing caps distribution on dev.to (a Code of Conduct violation) and on Medium (locked out of Boost, capped at General Distribution).
- Tag-stuffing for reach rather than topical accuracy draws tag-moderator action on dev.to and is a named Code of Conduct violation on Hashnode.
- Publishing primarily to promote rather than to contribute restricts a Hashnode post under its self-promotion clause and a Medium post to Network Distribution.
- Plagiarized or unattributed content is a named Code of Conduct violation on dev.to and Hashnode, and a Medium Rules violation.

## Draft rules

1. Write three title options; none is a listicle title unless the manifesto's recurring move is itself a listicle.
2. The hook is the first two sentences; nothing after them earns the scroll past the fold.
3. One argument per article. A second argument is a second article.
4. End on the opinion, not a summary or a call to action.
5. Every claim carries a source URL or is marked `unverified`.
