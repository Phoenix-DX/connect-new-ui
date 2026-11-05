# context-074: route actions pipeline (2026-11-04, layout v2 2026-11-05)

## Result
- Pipeline in [`route-actions/`](../../route-actions/README.md) at the repository root: one file per route in
  `route-actions/routes/`, status in [`ROUTES.md`](../../route-actions/ROUTES.md), the app shell in
  [`APP_SHELL.md`](../../route-actions/APP_SHELL.md). Mermaid diagrams as text.
- 51 of 68 build routes done (all routes with a TST capture), 2026-11-04. Layout v2 on all 51, 2026-11-05:
  the conclusions first (differences, questions), own code only, folded diagrams, a shared section. 17,751 lines
  in all (30,806 in v1). 40 differences: 38 server calls, 2 navigation parameters; 33 routes have none.
- Real gaps found (section 3 of the route files):
  - `HouseholdRelations_Block/DataActionFetchNotes`: React opens the notes sheet without the fetch.
  - `GetEventsForCalendar`: React has no LDM calendar view.
  - `CS_CreateShareProfileLink` and `GetAllApplicationEvents`: share to others and the audit events.
  - `AppManager_Logout`: PINRegister "Back to login".
  - `HouseholdDetails(HouseholdId)`: HomeFeed and Updates_SingleList do not build the carousel-off branch.
- No file in `app/` changed.

## Decisions (who, date)
- User 2026-11-04: one route at a time; facts only, no inference; two independent user action lists, no mapping;
  no KB; MCP only for the UI flow; Mermaid text, no SVG; folder `route-actions/` at the root; inputs through `config.json`.
- User 2026-11-05: layout v2. Conclusions first, own code only, folded diagrams. A diagram only for a handler
  with two or more effects. No screenshot table, no call flowchart, no method.
- User 2026-11-05: no data flow section. Claude built it; it did not help a developer or an agent. A `Read by`
  column of the data actions and queries keeps its one useful fact: a fetch that nothing reads.

## Facts learned (evidence)
- 17 of 68 build routes have `no-capture.json` and no `facts.json`. The tool stops for them.
- Each screen places the bottom bar and the notification icon itself (TST view, `HomeFeed.mvc.js`), not
  `CommonUI_InsideLayout`. They count as shared blocks of the route, not as the app shell.
- React reads client variables through `clientVar.<name>` accessors (`platform/session/session.ts`) and gives
  navigation parameters through `{ path, inputs }` objects and functions; the scan reads these forms.

## Files changed
- `route-actions/`: `tools/render_v2.py` (new), `tools/os_extras.py` (new), `tools/extras_md.py` (new),
  `tools/check_route.py` (v1 render removed), `tools/react_calls.mjs` (extras scan), README, 51 route files.
- `.claude/skills/route-actions/SKILL.md` (sections 3 and 4 in the hand-check). This context, `INDEX.md`.

## Open issues
- The 17 routes without a TST capture (the tool stops).
- The questions in the route files (section 4) and in `APP_SHELL.md`; some come from blocks that TST did not
  render in the capture (empty lists).

## Next
- The user decides: the 17 routes without a capture (capture them first, or leave them), and the open questions.
