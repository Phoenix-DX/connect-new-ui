# context-080: one store for every compiled TST file (2026-11-06)

## Result
- `migration/sources/` is now the only place of compiled TST code. New plain folders next to the per-route kinds:
  - `runtime/` (ex `migration/runtime-sources/`, 296 files + `css/` 3): the `live/` copy (291 files, byte-identical
    to the top level) is gone; `runtime/live-files.txt` lists the 286 names TST changed after the captures and the
    route check reads those from `runtime/`. The live `moduleinfo.json` of 2026-11-05 replaced the copy of 2026-10-28.
  - `contract/` (ex `migration/contract/sources/raw/`, 72 files); `shell/` (ex `migration/shell/sources/`, 16 files).
  - `survey/` also holds the 50 block sources of `migration/blocks/sources/` (7 are an older survey version:
    `@<sha8>` names); `block_pack.py` writes new survey copies there.
- Deleted: the 67 stale per-route copies `migration/screens/<S>/sources/` (9 routes) and `analysis/sources/<file>`
  (7 routes). They came from the clarify builds of 2026-10-29. No tool read them; 36 were older versions of runtime files.
- Tools through the store (`sources_store.py` gained `EXTRA_KINDS`, `RUNTIME`, `CONTRACT`, `SHELL`, `live_files()`,
  `runtime_path()`):
  - route check: `os_static.py`, `check_route.py` (live files by the list), `extras_md.py`, `render_v2.py`, `os_extras.py`;
  - generators: `contract_gen.py`, `static_entities.py`, `css_sets.py`, `block_pack.py`;
  - pipeline: `flags.py` (store in place of the per-route globs), `context_pack.py`, `scope_guard.py`;
  - clarify: `tst_source.py`, `mark_stale.py`.
- Citations rewritten in 372 files: `app/src`, `app/docs`, route specs, block packs, knowledge, `stack.json`,
  `parity-exemptions.json`, `extra-actions.json`, tools, skills, root docs. The two JSON files still had
  `analysis/sources/...` paths from before context-078. History folders keep the old paths.

## Decisions (who, date)
- User 2026-11-06: wave 3 approved ("có làm đợt 3").
- Fable: the stale per-route copies are deleted, not stored. TST live wins, and an older version in the store
  competes with the live file. `live/` becomes a name list, not a copy.

## Facts learned (evidence)
- `openapi.yaml` unchanged through the new paths (182 operations, 747 schemas). `routes.css.generated.ts` unchanged.
- `static-entities-tst.json`: 486 → 488 entities (the live `moduleinfo.json`; 3 modules with other values).
- `flags.py scan` through the store reports 66 flags "no longer detected". Cause: the copies of the deleted routes
  MyBookmarks, BookmarksByGroup, LDM_MyEvents and the live survey. The output was reverted; the user decides when
  to re-scan.
- Route check: 68 route files, `APP_SHELL.md` and `ROUTES.md` regenerated from the MCP cache; only the source links
  changed. CI green; parity HomeFeed, Bookmarks, Login OK.

## Files changed
- Moved and deleted: above. Code: the tools above. Docs: `tools/README.md` (store table), `README.md`,
  `migration/AGENTS.md`, `route-check/README.md`, `migration/knowledge/runtime-sources.md`, `migration/contract/README.md`,
  `migration/shell/README.md`, `app/docs/reference/stack.md` (regenerated), skill `route-check`.

## Open issues
- `flags.py scan` refresh (above). Row 23 and the re-captures (context-075).

## Next
- Row 23, re-captures, `confirm` of Bookmarks, NotificationDetails, OrbitAdminMilestoneDetail.
