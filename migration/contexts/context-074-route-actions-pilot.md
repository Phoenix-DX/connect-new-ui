# context-074: route actions pipeline, pilot HomeFeed (2026-11-04)

## Result
- New pipeline `migration/tools/route_actions/` ([README](../tools/route_actions/README.md)): one route at a time, one
  file `migration/route-actions/<Route>.md` with an SVG diagram; list and status in
  [`ROUTES.md`](../route-actions/ROUTES.md).
- Pilot [`HomeFeed.md`](../route-actions/HomeFeed.md) is `done`:
  - 21 TST endpoints: 18 implemented, 3 missing (`CS_CreateShareProfileLink` ×2, `GetAllApplicationEvents`);
  - 2 React calls with no TST chain (questions);
  - 65 of 65 blocks ported; 23 of 23 navigation targets found.
- No file in `app/` changed.

## Decisions (who, date)
- User 2026-11-04: per-route pipeline, no summary report.
- User 2026-11-04: KB `~/Projects/ubt_sharing_kb` first, MCP only for gaps.
- User 2026-11-04: read the React app shell as well as the page.
- User 2026-11-04: MCP modules UBTConnect + Connect2_* + UBTConnect_Utils + UBT_AppManager + UBTConnectLibrary +
  NavigationHandler; scope 68 build routes; Mermaid + SVG.
- User 2026-11-04: pilot HomeFeed first, wait for feedback before the next route.

## Facts learned (evidence)
- MCP reads UBTConnect without opening it. Other modules answer "No module is currently open".
- TST compiled sources in `migration/screens/<S>/analysis/sources/raw/` cover UBTConnectLibrary and NavigationHandler,
  so the per-element dump was not needed for the pilot.
- The KB has no data action internals in `contracts/ui.json`. MCP `getScreen`/`getWebBlock` give them; for example
  `FetchCount` → `Connect_Geography_CS.Get_UI_MembersStatistics`, which agrees with the KB page `ui/home-feed.md`.
- 17 of 68 build routes have `no-capture.json` (no `facts.json`). The tool stops for them; the user decides how to
  cover them.

## Files changed
- New: `migration/tools/route_actions/` (4 tools + README), `migration/route-actions/` (`ROUTES.md`, `HomeFeed.md`,
  `svg/HomeFeed.svg`), this context.
- Updated: `.gitignore` (`migration/route-actions/raw/`, `data/`), `INDEX.md`.

## Open issues
- The user's feedback on the pilot format.
- The 17 routes without a TST capture.
- MCP for modules other than UBTConnect needs the module open in Service Studio.

## Next
- After the user's feedback: run the next routes one by one, and mark each one `done`.
