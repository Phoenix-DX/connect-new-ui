# CR-Notifications-1: serve the UBT_CW app logos used as notification avatars

- Status: applied
- Raised by: Notifications, 2026-10-15
- Block: app static assets (foundation owner), consumed by shared `ConnectPatterns.AvatarImage`
- Other routes using it: any route showing notifications or update avatars with these logos (MessageList, HomeFeed updates)
- Related question: Notifications Q2

## Evidence
- `migration/screens/Notifications/analysis/dom/default.html`: 10 of 19 notification avatars are
  `<img src="/UBT_CW/img/UBT_CW.directory_entity_logo.png">` (50x50) or `/UBT_CW/img/UBT_CW.logo_assemble.svg` (50x49):
  application logos sent as `ProfileIconURL`, not person photos.
- `curl http://localhost:5173/UBT_CW/img/UBT_CW.directory_entity_logo.png` returns the SPA `index.html`;
  `app/src/lib/os-assets.manifest.json` lists no `UBT_CW.directory_entity_logo` / `UBT_CW.logo_assemble`.

## Expected change
Serve the two original TST files (static, read-only GET) at `/UBT_CW/img/UBT_CW.directory_entity_logo.png` and
`/UBT_CW/img/UBT_CW.logo_assemble.svg` (or under `/os-assets/` with a documented URL mapping for mock data).

## Workaround in the route until applied
None needed any more: the mock sends the original paths (no markup change).

## Resolution (foundation owner)
Applied by the foundation (user, 2026-10-15, Notifications Q2): the two logos were fetched read-only from TST and are
served by the dev server at `/UBT_CW/img/<file>` (`app/vite.config.ts:34-44`, files in `app/public/os-assets/UBT_CW/img/`).
Checked by the route on 2026-10-15: both URLs answer 200 (`image/png`, `image/svg+xml`).
