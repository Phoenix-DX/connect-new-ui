# CR-Notes-1: shell local entities (mock) — a mock scenario starts with the local notes copy of another scenario

- Status: open
- Raised by: Notes, 2026-10-15
- Block: shell `app/src/shell/localEntities/` (local notes database, IndexedDB) and the mock scenario switch
  `app/src/mocks/scenario.ts` (`?mock=`)
- Other routes using it (catalog/blocks.md): every route that reads the local notes copy (Notes; the notes blocks)
- Related question: Notes Q1 (user, 2026-10-15: parity of state default runs with `?mock=empty`; `?mock=empty` must show
  the captured EmptyList state with no notes at all, local notes copy included)

## Evidence
- The local notes copy lives in IndexedDB (`app/src/shell/localEntities/localNotes.ts:45-53`), so it survives reloads
  and scenario changes in the same browser profile.
- The signed-in app start runs Sync_Info_GetMain → SyncNotes only after the first screen's load calls
  (`app/src/shell/startup.ts:124` `await syncNotes(notes)`; the wait for the first screen: CR-Search-3 resolution, as
  the captures), so Notes' OnInitialize / OnReady read
  the copy left by the previous session first (`GetNotes_FilterYear`, `Get_Note_DynamicPills`).
- Observed (browser check, 2026-10-15): open `/UBTConnect/Notes?mock=real`, then `?mock=empty` in the same tab: the
  first `empty` load sends `In_NoteCategoryIds ["Household"]` to ActionGet_NotePills_ByNoteCategoryIds and the filter
  sheet's "Filter by year" list shows `2026` (built once at its OnInitialize). The app start's SyncNotes then empties the
  copy; a reload shows the captured state exactly. In a fresh profile (as `route.py parity` runs) `empty` is exact:
  parity default (scenario empty) 0 differences.
- The same order explains why a fresh `?mock=real` first load shows only the "All" pill: the copy is filled by SyncNotes
  after the screen read it (the second load shows the "Household" pill). Faithful to the original order; no change asked
  for that.

## Expected change
A mock scenario never starts with local entity data written under another scenario: e.g. the local notes database is
scoped per mock scenario (database name with the scenario), or it is cleared when `?mock=` changes the remembered
scenario. Production behaviour (local copy kept between app opens, sync after the first screen) stays unchanged.

## Workaround in the route until applied
None in the route code. Reviewers open `?mock=empty` in a fresh profile, or reload once after switching from `real`.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change:
- Regression parity run on:
