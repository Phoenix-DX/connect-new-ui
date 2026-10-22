## Result
status: pass
summary: Loop 1 re-test. F1 is fixed: `--changed` now reads the depcruise graph and selects routes by import closure. ci, explain cases, graph regeneration, py_compile and diff review pass. Earlier runs: the first integration run passed everything except F1 (64/0 parity, arch, move dry run); the prefetch run in the worktree passed. Parity was not re-run (no app input changed since the 64/0 run).

## Files changed
none (only this file)

## Commands run
- curl HomeFeed -> 200
- npm --prefix app run ci -> exit 0 (build ok)
- `refactor_parity.py --level strict --changed --explain --files <shared block HouseholdDetails_Block.tsx>` -> 5 of 64 routes: HouseholdCarousel, HouseholdDetails, Locality_Details, Profile, SupperMeeting_Carousel.
- Independent check of (a): a separate script (own regex import scan, alias `@/` resolved, in scratchpad clos.py) computed the closure of all 64 route entries from source, not from graph.json. Routes that reach the block: the same 5. None missing, none extra. Grep of importers agrees (HouseholdCarousel/HouseholdDetails/Locality_Details/Profile import it directly or through api/mocks/components; SupperMeeting_Carousel through EntitiesCarousel_HouseholdDetails).
- `... --explain --files app/src/screens/Profile/api.ts` -> 1 of 64: Profile.
- `... --explain --files app/src/shell/session.ts` -> 64 routes, each with reason "(global path)" (list started at HelpersDetail in the tail; same global rule as dev.md).
- Missing graph: moved app/docs/refactor/graph.json to scratchpad, re-ran case (b) -> "1 of 64: Profile", graph.json back (4.5 MB, 14:12); moved copy deleted. graph.json is git-ignored (`git check-ignore` confirms).
- python3 -m py_compile migration/tools/refactor_parity.py -> exit 0.

## Failures
none (F1 closed)

## Diff review
Loop 1 changed only migration/tools/refactor_parity.py and migration/tools/README.md (plus the P0-3 move.ts/package.json already reviewed).
1. openapi.yaml, mocks fixtures, public css: no change. Pass.
2. No deleted test file. Pass.
3. Scope: tool files only; no route file. Pass.
4. @origin: not applicable.
5. Move step: not applicable.
6. Change step: the parity tool change is the requested fix; global path list changed as described in dev.md (shared/lib/components removed, build config added). Pass.
7. Secrets: none found in the refactor_parity.py diff. Pass.

## Deviations from the brief
none

## Questions for the user
none
