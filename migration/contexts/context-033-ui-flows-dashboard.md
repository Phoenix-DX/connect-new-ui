# context-033 · UI Flows dashboard for the manager (2026-10-21, updated 2026-10-22)

## Result
- Static English page by UI flow: 44 flows, 86 DEV / 83 TST screens, 64 in scope, 19 out (reasons), 3 DEV only.
- Views: Overview, flow pages with maps, Journeys, App map, Health, Method; screen panel with TST screenshots.
- 38 journeys run on TST read-only (2026-10-22): 20 verified, 18 stop (reasons in `journeys/journeys.json`, `knownBlock`).
- No React content (user, 2026-10-21). Artifacts: v1 by the user, v2 new (URLs in the flows-dashboard README).

## Decisions (who, date)
- User, 2026-10-21: no React content; include TST screenshots after a privacy check; keep "Health of the original app".
- User, 2026-10-21: add journeys and flow maps; journeys are the source for future e2e tests (`migration/journeys/`).
- User, 2026-10-21: several accounts in one file, order global → regional → local, stop at the first success.
- User, 2026-10-21: publish only after the user accepts the local build. Accepted and published 2026-10-22.
- User, 2026-10-22: allow `ActionGet_BookmarkPills_ByBookmarkCategoryIds` (a read); add householder to the order.

## Facts learned (evidence)
- Shared navigation: `CommonUI_InsideLayout` adds 5 targets and `BottomBarMenu` 7 targets (intersection of navOut).
- Reopen (J1): a tab that opens `/UBTConnect/Splash` keeps it as LastURL, so after the PIN the app locks again. The
  start URL `/UBTConnect/` works: PIN, then the home feed at `/UBTConnect/` ([shell-facts](../knowledge/shell-facts.md) U3).
- The share link of the capture plan has a placeholder ShareId: ConnectShare shows the server exception (J4).
- The guard blocks `ActionGet_BookmarkPills_ByBookmarkCategoryIds` because the name contains "Book" (a WRITE word).
- The regional and local test accounts have a pending policy; only the global account runs the journeys.
- Privacy: journey renders mask every text that is not in the reviewed captures; 80 journey images checked 2026-10-22.

## Files changed
- `migration/flows-dashboard/` (builder, `src/page.html`, content), `migration/survey/dev-inventory.json`.
- `migration/journeys/` (journeys, screens, README, runs), `migration/tools/journey_capture.cjs`, root `README.md`, `.gitignore`.

## Open issues (user decisions)
- Bookmarks Q1 (TST C2NewBookmarks is now true; `route.py` question). J33 and J34 wait for it.
- Accept the pending policy of the regional and local accounts by hand, so that the runner can use them.
- Test data or other accounts for the data stops (J17, J20, J22–J26, J30–J32); a real share link (J4).
- Writes on open (J3 accept, J5 MarkAsRead): keep the stop, or a new runner mode (decision).

## Next (resume here)
- The owner adds householder to `order` in `.auth/accounts.json` (the agent never opens that file).
- Then re-run the stopped journeys: `node migration/tools/journey_capture.cjs run` (verified are skipped).
- After a re-run: the user accepts the new local build before the publish to
  https://claude.ai/artifact/JJCYpEtp6Q2V3xSbRkXA69. Commit only when the user asks.
