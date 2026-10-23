## Result
status: pass
summary: Tested the main tree (HEAD b314574 + the diff) against the dev server on 5174 (cwd = this repo's app/). `npm run ci` exit 0; parity strict --changed --since HEAD --ref both: 64/0 on OutSystems and 64/0 on self, no flake retry named. The "call 1" and loading differences of the stopped run did not come back under normal load, so they were load flakes. Diff review has no finding.

## Files changed
migration/refactor/handoffs/P5-2-update/test.md
app/docs/refactor/reports/P5-2-update.md (parity report, replaced)

## Commands run
export PATH=...node24 (all commands)
curl http://localhost:5174/UBTConnect/HomeFeed → 200; lsof cwd of the listener → /Users/khaitruong/Projects/connect-new/app
npm --prefix app run ci → exit 0; vitest 358 files, 1739 tests passed; build ok
npm --prefix app run lint:arch → 0 errors, 204 warnings; none in app/src/api/update (developer's base had 207, so no new warning)
cd app && npx eslint src/api/update + the 7 changed files → exit 0, no warning
refactor_parity.py --level strict --changed --since HEAD --explain → all 64 routes are affected (shared/UBTConnect/lib/actions.ts, used by the bottom bar)
refactor_parity.py --level strict --changed --since HEAD --ref both --jobs 2 --app http://localhost:5174 --out migration/refactor-parity/p52u-all → exit 0; outsystems 64/64 clean, self 64/64 clean; 8.5 min, load average 5 to 14; "flake" appears 0 times in the report. One run, no split needed.
node app/build/bundle-report.mjs (after ci build) → HomeFeed 240.17 kB gzip vs baseline 236.40 (+1.6%); Login 188.28 vs 184.61 (+2.0%); both under +5%
step "Check" (parity strict --changed; exemption list written) → holds: exemptions.json is `[]`, no exemption needed
Call parity (plan §5.4), by reading git diff against HEAD: no `call` difference to trace. Every function of the old modules maps to one repository function with the same action name, inputs and order:
  - useFetchUpdates → fetchFeedUpdates: same action, same CarouselPreloadedHouseholds empty list
  - Updates_SingleList getDateRanges/fetchUpdates → same 19 variables in the same key order (toUpdatesListVariablesWire = old screenVariables)
  - directory_Updates_RefreshBottomBarCount (actions.ts:93-102): same guard, same action ServiceAPIGet_UI_UpdateItems_UnreadCount_All with {}, same setClientVar order (count, then last check); UnreadCount is not wrapped in osNumber, as before
  - updateItemMarkAsRead keeps ActionUpdateItem_MarkAsRead with In_UpdateItemId; requestPhotoUpdate unchanged

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change. Pass.
2. No deleted test file; 3 test files added in api/update. Pass.
3. Scope: only api/update, the 4 old api.ts/types.ts, shared/UBTConnect/lib/actions.ts. Pass.
4. @origin: not required (the repository does not port one screen or block). Pass.
5. (move step) not applicable; this is a change step.
6. Behavior: none found.
   - One `UpdateItem` type; two mappers: toFeedUpdateItem keeps the date "1900-01-01" (mapper.ts), toUpdateItem gives "" (null or 1900-01-01 prefix). Key order of each old mapper kept.
   - useFeedUpdatesQuery (hooks.ts) keeps `retry: false` and the default staleTime and gcTime of the old useFetchUpdates. Only the key changed, to ['update','feed']; grep finds no reader of the old key.
   - 4 removed exports (toItem, filterWire of Updates_SingleList/api.ts; ScreenVariablesWire, FetchUpdatesResult of its types.ts): grep of src and build finds no importer (the hits are private functions with the same name in MyBookmarks, Notifications and AssembleEvents).
   - Old api.ts/types.ts re-export under the old names (useFetchUpdates, markAsRead, markAsUnread, getDateRanges, fetchUpdates, markAllAsRead, updateItemMarkAsRead, requestPhotoUpdate, UpdateItem, Breakpoint, DateRange, TagOption, UpdatesVariables, FilterUpdates). UpdateItemWire stays for mocks.
   - Note, not a failure: requestPhotoUpdate sits in api/update only because of its name (the developer noted it; a later step can move it).
7. No secret, password, PIN or email in the diff. Pass.

## Deviations from the brief
none

## Questions for the user
none
