# context-074: route actions pipeline (2026-11-04, layout v2 and static check 2026-11-05)

## Result
- Pipeline in [`route-actions/`](../../route-actions/README.md) at the repository root: one file per route in
  `route-actions/routes/`, status in [`ROUTES.md`](../../route-actions/ROUTES.md), the app shell in
  [`APP_SHELL.md`](../../route-actions/APP_SHELL.md). Mermaid diagrams as text.
- **68 of 68 build routes done** (2026-11-05): 51 from a TST capture, 17 from the compiled code (static check,
  `done (static)`). Layout v2: conclusions first, own code only, folded diagrams. 23,356 lines in all.
- 48 differences, 29 route questions, 8 app shell questions. The gaps to close for production (section 3 of the
  route files; the user wants them fixed, BE stays mock):
  - `GetAllApplicationEvents` (16 routes) and `CS_CreateShareProfileLink` (11 + 11): share to others and the audit events.
  - `AppManager_Logout` (Login, PINRegister), `AppManager_ChangeDevice` (Login).
  - `HouseholdRelations_Block/DataActionFetchNotes`, `AssembleDetail/DataActionGetAssembleNotes` (React takes the
    notes from another call), `Notifications MarkAllAsRead`, `GetEventsForCalendar` and `GetEventViewInfo` (no LDM calendar).
  - `HouseholdDetails(HouseholdId)`: HomeFeed and Updates_SingleList do not build the carousel-off branch.
- No file in `app/` changed.

## Decisions (who, date)
- User 2026-11-04: one route at a time; facts only, no inference; two independent user action lists, no mapping;
  no KB; MCP only for the UI flow; Mermaid text, no SVG; folder `route-actions/` at the root; inputs through `config.json`.
- User 2026-11-05: layout v2; no data flow section (a `Read by` column keeps its one useful fact).
- User 2026-11-05: questions by rule. A call site in the shell closure is a shell question (`APP_SHELL.md`). A call
  reached only through shared code goes to the shared section. The rest is a route question.
- User 2026-11-05: the 17 routes without a capture get a static check from the compiled code. Claude fetched 71 files
  read-only from the TST manifest (`migration/knowledge/runtime-sources.md`).
- User 2026-11-05: goal = fix the remaining gaps toward production; BE mock; MCP may build mock data for screens
  that the web capture cannot reach.

## Facts learned (evidence)
- React reads client variables through `clientVar.<name>` accessors (`platform/session/session.ts`) and gives
  navigation parameters through `{ path, inputs }` objects; a static GET of a manifest script needs no session.

## Files changed
- `route-actions/` (tools, README, 68 route files, `APP_SHELL.md`, `ROUTES.md`), `migration/runtime-sources/`
  (+71 files), `migration/knowledge/runtime-sources.md`, the skill `route-actions`, this context, `INDEX.md`.

## Open issues
- 29 route questions: MilestoneDetail 11, AssembleDetail 6, HelpersDetail 3, Profile 2, HostSurvey 2, static
  routes 5. 8 app shell questions. The user answers them per route.
- The gaps above are not fixed in `app/` yet.

## Next
- The user chooses the first gap to fix in `app/`; a design (Fable) before the build, per
  `feedback-fable-architect-solutions`.
