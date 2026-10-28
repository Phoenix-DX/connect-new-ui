# context-061: survey drift check (2026-10-28)

## Result
- The live TST code was fetched again (read-only static GET, no session) and compared with the survey of 2026-10-13
  and with `migration/runtime-sources/`. Report: `migration/clarify/review/survey-drift-2026-10-28.md`.
- 641 live `.mvc.js` files. 286 have the same text, 255 have only new debugger ids, and 79 have logic changes.
  TST added 21 files and removed 20. 19 of 155 runtime sources changed.

## Decisions
- The user ordered the check (2026-10-28, "làm từng cái 1", item 1). What to do with the drift is open.

## Facts learned (evidence)
- TST was published again after 2026-10-15: manifest version 15568 to 15682; `Last-Modified` 2026-10-27 06:48 GMT.
- OutSystems makes new `OutSystemsDebugger` ids at each publish: mask them before a comparison.
- TST removed the module Connect2_MyBookmarks_MUI and the Legacy_MyBookmarks screens. The React routes MyBookmarks
  and BookmarksByGroup copy screens that TST no longer has.
- TST added NotificationDetails, PassportScan, OrbitAdminMilestones, OrbitAdminMilestoneDetail and
  OneSchoolGlobalCarousel.
- Most large drift comes from the notes blocks (NotesSheet, AddNote, Note_Item, ItemCard_WithNotes) and from
  Directory_EntityDetailsActions.
- Some static entities changed (milestone check-in statuses, "OneSchool Global" in UBTConnect_Bookmarks_MCS):
  `migration/knowledge/static-entities-tst.json` is out of date for them.

## Files changed
- `migration/clarify/review/survey-drift-2026-10-28.md` and `survey-drift/` (data), `migration/runtime-sources/
  moduleinfo-2026-10-28.json`, `migration/knowledge/runtime-sources.md`, `migration/clarify/builds/README.md`,
  `migration/clarify/RESUME.md`.
- Not committed (large): `capture/survey-UBTConnect-2026-10-28.json`, `capture/runtime-sources-live-2026-10-28/`.

## Open issues
- The user decides how to use the live code: switch the source of truth or not, and re-judge the affected flows.
- The scope of the new and the removed TST screens is also the user's decision.

## Next
- Ask the user, then the next item of the list (error handling of the data calls).
