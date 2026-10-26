## Result
status: pass
summary: Main tree (uncommitted diff on HEAD f695b28) passes ci, lint, strict parity on all 64 routes against both references (0 differences), bundle limits and the diff review. No behavior change found.

## Files changed
none (this file only; the parity tool wrote app/docs/refactor/reports/P5-2-locality.md)

## Commands run
- dev server check: http://localhost:5174/UBTConnect/HomeFeed → 200; cwd of the vite process = /Users/khaitruong/Projects/connect-new/app
- `npm --prefix app run ci` → exit 0; vitest 355 files, 1720 tests passed; build ok
- `npm --prefix app run lint:arch` → 0 errors, 1 warning, in src/components/ui/os/OSPopup/usePopupWidget.ts (not a file of this step)
- `npx eslint <changed files + src/api/locality>` → exit 0, no warning in the changed files
- `refactor_parity.py --level strict --changed --since HEAD --ref both --app http://localhost:5174 --explain` → 64 of 64 routes selected (22 changed files; the new api/locality files are a shared dependency, so every route is selected)
- `refactor_parity.py --level strict --changed --since HEAD --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P5-2-locality.md` → exit 0, PASS; outsystems 64 routes / 64 clean / 0 differences; self 64 / 64 / 0; 4.2 min
- `migration/refactor-exemptions.json` → `[]` (unchanged); no exemptions.json in the handoff
- `npm --prefix app run build && node app/build/bundle-report.mjs` → HomeFeed 239.34 kB gzip (baseline 236.40, +1.2%), Login 187.33 (baseline 184.61, +1.5%); both under +5%
- parity_sweep.py and diffcheck --move: not applicable (after P0-2; change step)

## Diff review
1. openapi.yaml, mocks fixtures, public/UBTConnect/css: no change. Pass.
2. Deleted test files: none. Pass.
3. Scope: only the 7 caller files, the 6 shared/lib files and the new src/api/locality. Pass.
4. @origin: no new file ports a screen or block. Not required. Pass.
5. Move rule: not a move step.
6. Behavior (change step), checked by reading the old and new code:
   - Call parity (§5.4): every caller still calls the function directly; no call moved into a query. Module, path, inputs and order are equal to the old code (toSubdivisionNameInputs, toLocalityCardListInputs, toLocalityDetailsInputs, toSubdivisionListInputs, toOneSchoolListInputs, interchanges and bulk inputs all reproduce the old payload; EventLocalities and GetCacheInfo pass the inputs as they were). Pass.
   - Dropped fields, readers searched by me (grep for the field names, the cache types, the structure names, fixtures and mockUser):
     - Subdivision_Actions: no reader in src except the lib action mock (shared/UBTConnect/lib/actions.ts, writes it) and the openapi/schema. SupperMeeting_DetailsBlock reads Subdivision_Card only. Pass.
     - All-localities CountryName, Latitude, Longitude: the only reader of the list is FilterSheet (LocalityId, Name, CountryCode); the memory-cache type allLocalities is used only by CacheControl_AllLocalities. mockUser reads the fixture directly. Pass.
     - Bulk subdivision record: the only reader is householdRowsOf and the countryCode/localityId state in AssembleEventDetail_Localities (Id, Name, Family, Location, IsBookmarked, Photo340 x4, Locality.Id, Locality.Country.Code); cache type AssembleSubdivision is used only in actions.ts; memory cache only. Pass.
   - GetLocalityInformation keeps the full contract record (toLocalityInformation returns the wire record as is). Pass.
   - The explicit field lists in the mappers (card content, interchange statistics) cover the full contract shape. Pass.
   - getLocalityInformation lost its default '0'; its only caller (getCacheableLocality, line 299) passes an id. Pass.
7. The 7 old caller files (AssembleEvents, BrowseDirectory, LDM_MyEvents_V2, Locality_Details, SupperMeeting_DetailsBlock api.ts, LegacyShared actions.ts, CacheControl_AllLocalities) re-export under the old names. Pass.
8. Rule 7: api/locality imports no other api domain (only api/client and legacy/os-wire). Its tests import fixtures and mocks from mocks/ and screens/ (test files only; lint passes). Pass.
9. Hooks: 5 hooks, no caller outside api/locality and its tests; staleTime 0, gcTime 0, retry false (overridable only by the caller). Pass.
10. Secrets, passwords, PINs, emails in the diff: none found. Pass.

## Deviations from the brief
none

## Questions for the user
none
