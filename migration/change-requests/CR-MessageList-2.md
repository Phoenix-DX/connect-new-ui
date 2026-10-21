# CR-MessageList-2: serve the UBT_CW module images at /UBT_CW/img/

- Status: applied (record updated 2026-10-21: both files are in `app/public/os-assets/UBT_CW/img/`; MessageList parity 0)
- Raised by: MessageList, 2026-10-15
- Block: `app/public/os-assets/` + the image middleware of `app/vite.config.ts` (foundation owner)
- Other routes using it: any route whose data carries `/UBT_CW/img/…` URLs (MessageList ProfileIconURL)
- Related question: none (missing static files; MessageList parity default, pixel hotspots x 0-60, rows 0-4)

## Evidence
- `migration/screens/MessageList/analysis/dom/default.html`: message rows 0-4, 13-15, 17-18 render
  `<img class="notification-list-icon-badge" src="/UBT_CW/img/UBT_CW.directory_entity_logo.png">` and
  `src="/UBT_CW/img/UBT_CW.logo_assemble.svg"` (ProfileIconURL from the server; module UBT_CW, not UBTConnect).
- `curl http://localhost:5173/UBT_CW/img/UBT_CW.logo_assemble.svg` answers the SPA `index.html` (200 text/html): the dev
  server serves only `/UBTConnect/img/*`; `public/os-assets/UBTConnect/img/` has other `UBT_CW.*` flags but not these two.
- Parity default: the replayed original shows broken images, the build shows the HandleImageLoadError fallback; on TST
  both images load.

## Expected change
Fetch (read-only GET on TST) `/UBT_CW/img/UBT_CW.directory_entity_logo.png` and `/UBT_CW/img/UBT_CW.logo_assemble.svg`
into the os-assets folder and serve them at their TST path `/UBT_CW/img/<file>` (same middleware as `/UBTConnect/img/`).

## Workaround in the route until applied
None: the mock keeps the captured paths; the images show the error fallback until the files are served.

## Resolution (foundation owner)
Set `- Status: applied` above when done.
