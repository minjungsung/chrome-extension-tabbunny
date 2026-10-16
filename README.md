# TabShelf

Keep your next task ready.

Save and restore tab collections for work, study, and projects. Search your saved sessions and keep everything on your device.

## Development

Open `chrome://extensions`, enable Developer mode, choose **Load unpacked**, and select `extension/`. No build or package dependencies are needed.

Run `npm test` for logic tests and `npm run package` to validate and create a clean ZIP in `dist/`.

## Privacy

See [PRIVACY.md](PRIVACY.md) for stored data and permission explanations. No accounts, analytics, ads, or developer servers.

## Support

Report bugs through this repository's issue tracker. Include reproducible steps and the extension version, with private information removed.

## License

MIT.

## Features and limits

TabShelf helps you pick up a project without rebuilding your browser window. Save a named collection, search by title or URL, and restore it in a new window.

FEATURES
- Save up to 100 tab collections, with up to 300 web tabs per collection.
- Deduplicate repeated URLs and restore pinned tabs.
- Search collection names, page titles, and saved links.
- Export and import portable JSON backups.
- Keep saved collections locally; no account or cloud service.

TabShelf saves HTTP and HTTPS tabs from the current window. It keeps your current tabs open. Restoring links does not restore cookies, form input, browser history, or logged-in sessions. Internal browser pages and local files are skipped.

PRIVACY
Tab access is used when you save a window. Saved page titles and URLs stay in local extension storage. No analytics, advertising, or developer servers.

Open the extension, name a collection, and choose Save tabs. Choose Open window to return to it.
