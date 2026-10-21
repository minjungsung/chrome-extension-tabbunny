# TabBunny

Save tonight. Hop back tomorrow.

Save the web links in your current window with one click. Your bunny keeps them ready to reopen later; no project naming or tab selection is required.

## See it work

![Actual Chrome walkthrough](store/demo/walkthrough.gif)

[Video and steps](store/demo/README.md). Fictional demo data; FocusPet completion is accelerated and disclosed.

## Features

- Save this window with an automatic date label; current tabs stay open.
- Resume the latest saved links in a new window.
- Repeated identical quick saves refresh the latest snapshot.
- Optionally organize selected tabs into named projects and export backups.

## Limits

Stores up to 100 burrows with 300 web tabs each. HTTP and HTTPS pages only; internal browser pages, local files, and URLs with embedded credentials are skipped. TabBunny keeps current tabs open unless you explicitly choose to close them. Saved links do not preserve form edits, cookies, page scroll positions, or login state. Closing tabs can lose unsaved page input. At 100 collections, new quick saves retire the oldest quick snapshot; named projects are preserved. Renaming a quick snapshot makes it a named project.

## Feedback

The help page links to honest Chrome Web Store reviews. An optional, dismissible notice appears after repeated successful use across at least one week; preferences stay on this device.

## Development

Load `extension/` unpacked in Chrome Developer mode. Run `npm test` and `npm run package`. There is no runtime dependency or build step.

## Privacy

Local collections contain names, page URLs and titles, pinned flags, and creation timestamps.

`tabs` reads the current window's URLs, titles, and pinned state when you use the app. `storage` saves your burrows on this device. No website content is read.

See [PRIVACY.md](PRIVACY.md). No accounts, ads or analytics.

## Product evidence

[Market analysis and validation plan](docs/market-analysis.md). Adoption remains unvalidated.

## Support and license

Use the repository issue tracker; remove private information. MIT.
