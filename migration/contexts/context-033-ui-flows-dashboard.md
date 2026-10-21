# context-033 · UI Flows dashboard for the manager (2026-10-21)

## Result
- A static page in English that shows the UBTConnect module by UI flow.
  - Flows: 44 (33 with screens, 11 with blocks only).
  - Screens: 86 on DEV, 83 on TST, 64 in scope, 19 out of scope (each with a reason), 3 DEV only, 64 specified.
- Views: Overview, one page per flow, Health of the original app, Method (decisions D1–D11, terms).
  - Overview: KPIs, a DEV-to-specification funnel, flows by area, a "Needs attention" list.
  - A side panel per screen shows its TST screenshots (149 images, 390 px).
- No content about the React app (user, 2026-10-21). Build only; the user publishes the artifact in another session.

## Decisions (who, date)
- User, 2026-10-21: no React content. The migration part shows scope and specification only.
- User, 2026-10-21: include TST screenshots after a privacy check. Keep "Health of the original app".
- User, 2026-10-21: save the DEV MCP inventory in the repository.
- User, 2026-10-21: CommunityBusinessDetails keeps "Test or development screen" (zDEV flow; the board says skip:dead).

## Facts learned (evidence)
- Shared navigation: `CommonUI_InsideLayout` adds 5 targets and `BottomBarMenu` 7 targets to each screen that renders
  them (intersection of `survey/screens.json` navOut). The page shows them as two labels.
- 33 TST screens have no screenshot: in-scope screens with `no-capture.json` (no data for the test account in
  read-only mode) and out-of-scope screens (not captured).
- Privacy check: 13 contact sheets, 149 images; names and texts are masked. Visible text is country names, totals and
  test data only.

## Files changed
- New: `migration/survey/dev-inventory.json` (DEV snapshot), `migration/flows-dashboard/` (`build_dashboard.py`,
  `src/page.html`, `content/content.en.json`, output `site/`). `.gitignore`: `site-review/` (local review sheets).
- Content: writer agent, then a reviewer agent (8 category fixes, 5 flow purposes). Tokens in the ledger (`_docs`).

## Open issues
- None.

## Next
- The user publishes the page in another session: steps in `migration/flows-dashboard/README.md`.
