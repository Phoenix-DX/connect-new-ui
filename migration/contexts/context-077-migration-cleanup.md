# context-077: migration folder cleanup (2026-11-05)

## Result
- `migration/` went from 2.5 GB to 1.9 GB on disk; git lost about 160 MB of tracked files.
- Deleted, not in git (run outputs, re-creatable): `refactor-parity/` (254 MB), `refactor-reference/` (155 MB,
  re-record with `refactor_parity.py --record-self`), `refactor/prefetch/` (14 MB), `journeys/runs/*.debug` (3 MB).
- Deleted from git (history keeps them, last commit with them: `67ce25f1`): `screens/*/checkpoint/` (19 MB, the
  resume points of the fixing rounds; all 68 routes are finished), `screens/MyBookmarks` and `screens/BookmarksByGroup`
  (81 MB, screens removed on TST 2026-10-27), `screens/LDM_MyEvents` (43 MB, V1, never built),
  `screens/Locality_Details/capture-tags-2026-10-16` (19 MB, a one-off capture that no tool reads).
- Kept on purpose: `screens/*/capture/` (882 MB, untracked raw captures: the source of `analysis/` and of the
  parity references), `runtime-sources/`, `clarify/`, `refactor/handoffs/`, `journeys/runs/` (tracked part),
  `flows-dashboard/site/`, `blocks/`, `shell/`, `contract/sources/`.
- `css_sets.py` re-run: LDM_MyEvents from `compiled` (its capture is gone; the route is `skip`, NotMigrated).

## Decisions (who, date)
- User 2026-11-05: delete groups A (run outputs), B1 (checkpoints), B2 (the three captured skip routes), B3
  (capture-tags); keep the raw captures; plan the dedupe of the compiled sources now.

## Facts learned (evidence)
- The tracked copies of the compiled TST code are duplicated per route: `analysis/sources/raw` 608 MB holds 470
  distinct files (41 MB); `sources/pretty` 146 MB holds 457 distinct files (25 MB); `analysis/styles` 239 MB holds
  43 distinct files (91 MB). Readers: `contract_gen.py`, `static_entities.py`, `tools/route-check/*` (raw),
  `context_pack.py` (pretty), `css_sets.py` (styles); about 150 comments in `app/src` cite `sources/pretty/...:line`.
- `route.py restore` needs a checkpoint only while a route is in `fixing`; `make_checkpoint` writes a new one at the
  next review round.

## Files changed
- Deletions above; `app/src/app/routes.css.generated.ts` (LDM_MyEvents); this context and `INDEX.md`.

## Open issues
- Dedupe of the compiled sources (plan next, user 2026-11-05).
- `migration/capture-plan.json` (not in git) still lists the three deleted skip routes; harmless, the plan skips
  `skip` rows.

## Next
- The dedupe plan; then row 23 and the re-captures (context-075).
