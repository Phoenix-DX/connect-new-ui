# context-062: TST source switch after the survey drift (2026-10-28)

## Result
- Decision (c) of `migration/clarify/review/survey-drift-2026-10-28.md` is done: the live TST code of 2026-10-27 is
  the source of truth. React code, parity captures, verdicts and `migration/survey/` did not change.
- 1885 of 5412 clarify checklist rows are `stale`, 422 of them strong (`INDEX.md` §1 column "Stale (strong)").

## Decisions
- User, 2026-10-28: option (c), switch the source and mark the stale rows.
- User, 2026-10-28: do not commit the live survey (25 MB).
- User, 2026-10-28: mark all affected rows, in two levels. Strong: a removed file, changed cited lines, or a changed
  file cited without lines. Weak: the cited lines are the same, or only the screen name matches.

## Facts learned (evidence)
- The old `survey-drift/impact.txt` held only the error message of a lost scratchpad script; the 574-row count was not
  reproducible. `migration/clarify/tools/mark_stale.py` replaces it.
- `static_entities.py` read record names only from the captures of 2026-10-14; it now reads the live
  `migration/runtime-sources/*.model.js` first. Changes: `migration/knowledge/static-entities.md` (2026-10-28 section).
- React drift found: `app/src/lib/ubtConnect/staticEntities.ts:157` bookmarkCategory "OneSchoolGlobal"; TST now
  "OneSchool Global" (record OneSchoolGlobal2). The HomeFeed constant (Connect_Services) did not change.
- 147 line citations in `app/src` comments, specs and docs point to the 20 replaced files: they refer to f9f68bfc
  (`migration/knowledge/runtime-sources.md`).
- Two checklists use indent 2: a tool that rewrites checklists must keep the indent of each file.

## Files changed
- `capture/survey-UBTConnect-2026-10-13.json` (git mv), `.gitignore`, 19 files of `migration/runtime-sources/`,
  `migration/shell/sources/UBTConnect.App_Common.controller.js`, `migration/runtime-sources/moduleinfo.json`.
- `migration/tools/static_entities.py`, `migration/knowledge/static-entities-tst.json`, `static-entities.md`,
  `runtime-sources.md`.
- `migration/clarify/tools/mark_stale.py` (new), `collect.py`, `tst_source.py`; 35 checklists; `INDEX.md`;
  `review/survey-drift-2026-10-28.md`, `review/survey-drift/impact.txt`; `builds/README.md`; `RESUME.md`.
- Artifacts: both templates have the column "Stale (strong)"; VI v6 and EN v9 republished to the same URLs.

## Open issues
- For the user, later: the scope of the 5 new TST screens and of the routes MyBookmarks and BookmarksByGroup.
- For the user, later: the bookmarkCategory constant, and a new judge of the stale rows, one route at a time.

## Next
- Item 2 of the user's list in `migration/clarify/RESUME.md`: error handling of the data calls (B4 follow-up).
