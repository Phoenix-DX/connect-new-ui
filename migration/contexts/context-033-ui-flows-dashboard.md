# context-033 · UI Flows dashboard for the manager (2026-10-21, updated 2026-10-22)

## Result
- Static English page by UI flow: 44 flows, 86 DEV / 83 TST screens, 64 in scope, 19 out (reasons), 3 DEV only.
- Views: Overview, flow pages with maps, Journeys, App map, Health, Method; screen panel with TST screenshots.
- 38 journeys run on TST read-only (2026-10-22): 20 verified, 13 stop, 5 need another flag value (`journeys.json`).
- No React content (user, 2026-10-21). Artifacts: v1 by the user, v2 new (URLs in the flows-dashboard README).

## Decisions (who, date)
- User, 2026-10-21: no React content; include TST screenshots after a privacy check; keep "Health of the original app".
- User, 2026-10-21: add journeys and flow maps; journeys are the source for future e2e tests (`migration/journeys/`).
- User, 2026-10-21: several accounts in one file, order global → regional → local, stop at the first success.
- User, 2026-10-21: publish only after the user accepts the local build. Accepted and published 2026-10-22.
- User, 2026-10-22: allow `ActionGet_BookmarkPills_ByBookmarkCategoryIds` (a read); add householder; Bookmarks Q1 a.
- User, 2026-10-22: flag journeys (J10, J15, J16, J33, J34) are `not-run` when no account has the value; J3 and J5
  keep their stop (writes stay blocked; e2e tests on the mock app cover the rest).

## Facts learned (evidence)
- Shared navigation: `CommonUI_InsideLayout` adds 5 targets and `BottomBarMenu` 7 targets (intersection of navOut).
- Reopen (J1): a tab that opens `/UBTConnect/Splash` keeps it as LastURL, so after the PIN the app locks again. The
  start URL `/UBTConnect/` works: PIN, then the home feed at `/UBTConnect/` ([shell-facts](../knowledge/shell-facts.md) U3).
- The share link of the capture plan has a placeholder ShareId: ConnectShare shows the server exception (J4).
- The guard blocks `ActionGet_BookmarkPills_ByBookmarkCategoryIds` because the name contains "Book" (a WRITE word).
- 2026-10-22: the owner accepted the policy of regional and householder; local keeps its pending policy (J3).
  Regional and householder have fewer data than global (no Orbit events; householder has no messages) and
  C2NewBookmarks on. Runs with `--accounts regional` and `--accounts householder` verified no new journey.
- Privacy: journey renders mask every text that is not in the reviewed captures; 80 journey images checked 2026-10-22.

## Files changed
- `migration/flows-dashboard/` (builder, `src/page.html`, content), `migration/survey/dev-inventory.json`.
- `migration/journeys/` (journeys, screens, README, runs), `migration/tools/journey_capture.cjs`, root `README.md`, `.gitignore`.

## Open issues (user decisions)
- Data stops (J4, J17, J20, J22–J26, J30–J32): the user asks the team for test data (user, 2026-10-22). Then re-run.

## Next (resume here)
- The user reviewed the new local build (2026-10-22) and publishes later: wait until the user names the artifact
  (JJCYpEtp…, KNHgnHAA… or both; URLs in the flows-dashboard README). Commit only when the user asks.
