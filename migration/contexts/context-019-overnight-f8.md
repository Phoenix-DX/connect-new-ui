# context-019 · Overnight auto window F8 (2026-10-16 01:14 → ~02:00 +07)

## Result
- Still 41/41 routes finished. Second full regression sweep over the 41 routes: 0 differences (`route.py parity`).
- F8a: OutSystems request timeouts in `callAction` (per module: UBTConnect 20 s, the other 7 modules 10 s;
  CommunicationException "The connection has timed out"), 13 tests.
- F8b: Login and ContactUsDetails validate through `app/src/components/OSValidation/`; `UnbuiltValidationWidget` for
  NotCaptured fields that the original still registers. Login and ContactUsDetails re-stamped.
- Locality_Details reopened (F1) and re-finished: tags Supper Meetings, Interchange and OneSchool Global captured
  read-only (`migration/screens/Locality_Details/capture-tags-2026-10-16/`) and built. 6 states at 0.
- Docs: `app/docs` updated (new `guides/os-widgets.md`; shell, shared-code, api-and-mocks, overview); reference pages regenerated.

## Decisions (who, date)
- Auto window (user, 2026-10-16 01:14): list in `migration/knowledge/auto-decisions-2026-10-16.md`.
- Against the recommendation: bookmark 91001 vs Locality household 91001 = option d (keep the mismatch). Option a broke
  MyBookmarks/BookmarksByGroup default parity; for the user's review.

## Facts learned (evidence)
- Timeout rule: `applicationDefaultTimeout || call timeout || controller.getDefaultTimeout()` (OutSystems.js), TST
  `applicationDefaultTimeout` 0; TST runs with debugEnabled (extra `checkrequestsuspended` round trip, not imitated).
- The original renders `novalidate` on forms; the capture strips it (KEEP_ATTR).
- Locality 252 has 4 tags; My Household (own locality) and Locality Contacts (flag) are not shown there.

## Files changed
- `app/src/lib/api.ts`, `os-exceptions.ts`, `components/OSValidation/*`, `screens/{Login,ContactUsDetails,Locality_Details}/*`,
  `migration/capture-plan.json` (Locality_Details steps + latency), `migration/parity-exemptions.json` (TAGS-*).

## Open issues
- User review: `auto-decisions-2026-10-15.md` + `-2026-10-16.md` (ADR-8, CR-ContactByEmailMember-2 rejected, 91001
  option d, facts LegacyShareObject Q2 / MyBookmarks Q3 / ConnectShare Q1).
- Known data drift: Locality cards 11/8/6 households vs SupperMeeting mocks 7/5 (TST captures of two dates).

## Next
User decisions on the review list; then the next phase (backend / production plan).
