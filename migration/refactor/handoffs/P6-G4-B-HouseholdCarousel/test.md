## Result
status: pass
summary: Re-run after F20 fix (3024d755) passes. Earlier summary: only `npm run ci` failed: exit 1 twice, each time only on the Services flake F20 (Services.test.tsx "Save changes" message). Services is untouched by the step; it passes 3 of 3 alone, and the full suite without it passes. Parity, arch baseline, bundle, eslint, W23 and the diff review pass. Master decides whether F20 counts as a flake here.

## Files changed
none (test.md only; gate tools wrote app/docs/refactor/reports/P6-G4-B-HouseholdCarousel.md)

## Commands run
- Dev server http://localhost:5174 → 200, cwd /Users/khaitruong/Projects/connect-new/app
- `npm --prefix app run ci` (run 1) → exit 1; 1 failed / 2680 passed; only Services F20. gen:api, typecheck, lint, format:check passed (reached test).
- `npm --prefix app run ci` (rerun) → exit 1; same single failure (F20), 2680 passed.
- `npx vitest run src/pages/Services` x3 → 30/30 pass each time. `npx vitest run --exclude src/pages/Services/**` → 484 files, 2651 tests, all pass.
- `npm --prefix app run build` → exit 0
- `npm --prefix app run lint:arch` → depcruise 0 errors, 209 warnings; eslint 76 warnings; none in pages/HouseholdCarousel, EntitiesCarousel, EntitiesCarouselElement, CarouselHouseholdDetails
- `npx eslint` on the 4 changed folders → exit 0
- `arch_baseline.py check` → 75 warnings, 75 baseline rows, 0 new, 0 gone
- `refactor_parity.py --level visual --changed --ref both --app http://localhost:5174` → 4 routes (CountryDetails, CountryList, HouseholdCarousel, SupperMeeting_Carousel), 24 runs, outsystems 4/4 clean, self 4/4 clean, PASS
- `bundle-report.mjs` → HomeFeed 244.19 gzip (limit 236.40 x 1.05 = 248.2 OK, 40 chunks); Login 184.19 (baseline 184.61 OK); HouseholdCarousel 264.51; SupperMeeting_Carousel 252.66 (dev measured -9.4 kB raw)
- W23 review of hooks/useHouseholdCarousel.ts: the `unmounted` ref (lines with `if (unmounted.current) return;`) sits after `await directory_Updates_CarouselSwipeAction(...)` and before `setHouseholdPreload` / `setSwippedItems` only. MarkAsRead (`markCarouselUpdateItemAsRead` passed into the action, which also lowers the unread count) runs before the guard, so it still runs after an unmount. PASS.
- Re-run after F20: `npm --prefix app run ci` → exit 0; 489 test files passed, 2681 tests passed, 0 failed (no rerun needed).

## Diff review
1. openapi.yaml, src/mocks, public css: no change. Pass.
2. Deleted files: api.ts, types.ts (replaced by inputs.ts and hooks); no test file deleted (logic.test.ts renamed, tests added). Pass.
3. Scope: only HouseholdCarousel and its three carousel components. SupperMeeting_Carousel page unchanged. Pass.
4. @origin: present in page, hook, actions, inputs. Pass.
5. n/a (change step).
6. Behavior: slot `renderHouseholdDetails` is optional; household-detail flags now read once in the page instead of per slide (dev deviation 2); documented, the dev's old-vs-new check shows equal DOM. No behavior change found.
7. No secret, password, PIN or email in the diff. Pass.

## Deviations from the brief
none

## Questions for the user
none
