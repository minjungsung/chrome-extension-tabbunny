# Market evidence and daily-use decisions

Observed: 2026-10-16. This is directional desk research, not product-market fit validation. Store user totals are installed-user snapshots, not daily active users, retention or forecasts. The sample is small and convenience-selected; product age and acquisition spend are unknown.

## Public evidence

| Product | Store users observed | Source |
| --- | ---: | --- |
| Session Buddy | 1,000,000 | [Store listing](https://chromewebstore.google.com/detail/edacconmaakjimmfgnblocblbcdcpbko) |
| Web Highlights | 200,000 | [Store listing](https://chromewebstore.google.com/detail/hldjnlbobkdkghfidgoecgmklcemanhm) |
| Tiny Tasks | 17 | [Store listing](https://chromewebstore.google.com/detail/mifkjpgjobdndcgeepeljjncgipfopjm) |
| Pomogochi | 50 | [Store listing](https://chromewebstore.google.com/detail/mkkghmhliibkmldopomkapjaahakcfhm) |
| SlimeForge | 16 | [Store listing](https://chromewebstore.google.com/detail/dobhabpmcmpfdihchnhbickecelihhbc) |

Tab/session management and research capture have established demand. Those broad incumbents also offer more functionality than these products. Three sampled cute timers have very small installations; cuteness alone has not demonstrated demand. These observations do not prove that any of our four products can reach 20,000 users.

User-reported reliability concerns provide design clues, not verified defects: [Tab Session Manager restore report](https://github.com/sienori/Tab-Session-Manager/issues/1668), [storage usage report](https://github.com/sienori/Tab-Session-Manager/issues/1667), [ClearURLs site breakage report](https://github.com/ClearURLs/Addon/issues/539), and [authentication report](https://github.com/ClearURLs/Addon/issues/535). Favor small local snapshots, transparent previews, and conservative cleanup.

## Product choices

| Product | Repeated trigger / audience | Existing alternative | Primary benefit | Cuteness |
| --- | --- | --- | --- | --- |
| TabBunny | Ending a study/work window; students and multitaskers | Bookmarks, browser history, Session Buddy | Save all links without naming; restore later | Bunny guards the saved window; success feedback |
| FocusPet | Starting a short work block; people already interested in timers | Phone timer, Pomodoro apps | Start without task or settings; one-click break | Cat/bunny and earned flower/star/crown; no feeding, guilt or daily chores |
| LinkLoom | Sharing a tracked link; people who often send URLs | Manual editing, ClearURLs | Current URL is ready to copy, with changes visible | Quiet utility styling; no mascot needed |
| QuoteHarbor | Finding a useful sentence; students and writers | Copy into notes, Web Highlights | Quote plus source in one save, searchable later | Calm library styling; no mascot needed |

TabBunny has the strongest observed category signal, but must earn trust against mature managers. QuoteHarbor has a strong adjacent category signal but lacks persistent highlights, PDF annotation and sync. LinkLoom addresses a clear small task; installation and toolbar friction may still exceed its benefit for infrequent sharers. FocusPet remains the highest-risk demand hypothesis: test whether companionship actually brings people back.

## Feature priorities

Ship first: zero required setup, visible result, safe defaults, local processing, recovery and accurate demos. Defer accounts, cloud sync, pet care economies, mandatory naming/tags, automatic URL rewriting, broad host permissions and AI features until research shows a need. A screenshot should explain the user trigger and result before listing features.

## Validation before scaling

Use a voluntary pilot with 10–15 target users per concept and observe real tasks. Suggested decision gates are hypotheses, not benchmark data: 8/10 complete the first core action without help; at least 5/10 return on three separate days in a week; users can name a concrete reason to prefer it to their existing method. Record failed tasks and setup complaints. Do not interpret a successful automated demo as user validation.

Track store impressions to installs through the publisher dashboard, and collect repeated-use feedback through consented interviews/manual diaries. No silent analytics are included. If first-use success is high but repeat use is low, change the value proposition rather than adding more decoration. Prioritize promotion of products that show repeat use; treat 20,000 users as a growth target, not an outcome promised by this release.
