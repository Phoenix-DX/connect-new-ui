## Result
status: pass
summary: Locality_Details is a page now. The screen flows moved to `hooks/useLocalityDetails` (useFlowState, pure `localityDetailsState`, W23 once-guard). The four tag blocks and Household_Card call their own hooks (`localityBlocksState`). `api.ts` and `types.ts` are deleted: the two household calls are in `api/household` and the locality types come from `api/locality`. A temporary old-vs-new probe (deleted) ran 12 scripted scenarios and gave the same DOM, calls, bodies, URLs and preload objects. Typecheck, lint, prettier and the full unit suite (2644 tests) pass. arch_baseline exits 0.

## Files changed
app/src/api/household/index.ts
app/src/api/household/mapper.ts
app/src/api/household/mapper.test.ts
app/src/api/household/repository.ts
app/src/api/household/repository.test.ts
app/src/api/household/types.ts
app/src/pages/Locality_Details/Locality_DetailsPage.tsx
app/src/pages/Locality_Details/Locality_Details.test.tsx (new)
app/src/pages/Locality_Details/inputs.ts (new)
app/src/pages/Locality_Details/api.ts (deleted)
app/src/pages/Locality_Details/types.ts (deleted)
app/src/pages/Locality_Details/hooks/localityDetailsState.ts (new)
app/src/pages/Locality_Details/hooks/localityDetailsState.test.ts (new)
app/src/pages/Locality_Details/hooks/localityBlocksState.ts (new)
app/src/pages/Locality_Details/hooks/localityBlocksState.test.ts (new)
app/src/pages/Locality_Details/hooks/readyOnce.ts (new)
app/src/pages/Locality_Details/hooks/useLocalityDetails.ts (new)
app/src/pages/Locality_Details/hooks/useLocalityDetails.test.tsx (new)
app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts (new)
app/src/pages/Locality_Details/hooks/useHouseholdCardMembers.ts (new)
app/src/pages/Locality_Details/hooks/useLocalitySubdivisions.ts (new)
app/src/pages/Locality_Details/hooks/useLocalityInterchange.ts (new)
app/src/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts (new)
app/src/pages/Locality_Details/components/actions.ts
app/src/pages/Locality_Details/components/Directory_Interchange_StatisticsList.tsx
app/src/pages/Locality_Details/components/Household_Card.tsx
app/src/pages/Locality_Details/components/Locality_DateTimeLabel.tsx
app/src/pages/Locality_Details/components/Locality_Households.tsx
app/src/pages/Locality_Details/components/Locality_Households_HouseholdList.tsx
app/src/pages/Locality_Details/components/Locality_Interchange.tsx
app/src/pages/Locality_Details/components/Locality_OneSchoolGlobal.tsx
app/src/pages/Locality_Details/components/Locality_Subdivisions.tsx
app/src/pages/Locality_Details/components/OneSchoolGlobal_List.tsx
app/src/pages/Locality_Details/components/StopPropagationHelper.tsx
app/src/pages/Locality_Details/components/SubHeader_MainPages.tsx
app/src/pages/Locality_Details/components/Timer.tsx
app/src/pages/Locality_Details/components/UBT_LazyImage_List.tsx
migration/refactor/handoffs/P6-G4-B-Locality_Details/dev.md (this report)

37 code files. No shared block changed (`components/directory/*` and `containers/EntityDetailsActions` are only imported). No change to `openapi.yaml`, `src/mocks/**` or `public/UBTConnect/css/**`. `pages/Locality_Details/mocks.ts` and `components/staticEntities.ts` are unchanged.

## Commands run
npm --prefix app run typecheck → exit 0
cd app && npx vitest run src/pages/Locality_Details src/api/household src/api/locality → exit 0, 10 files, 90 tests
cd app && npx vitest run (full unit suite) → exit 0, 481 files, 2644 tests
cd app && npx eslint src/pages/Locality_Details src/api/household → exit 0, 0 problems
cd app && npx prettier --check src/pages/Locality_Details src/api/household → clean
python3 migration/tools/refactor/arch_baseline.py check → exit 0 (87 warnings, 87 baseline rows, 0 new, 0 gone; the step had no baseline rows)
cd app && npx depcruise src --config .dependency-cruiser.cjs --output-type err → 0 errors, 206 warnings (base 213: the 7 rule-9 warnings of the page's flow files are gone; only `mocks.ts → legacy/os/os-wire` stays, as on the other pages)
cd app && npm run build && node build/bundle-report.mjs → HomeFeed 244.16 kB gzip (base commit 244.19), Login 184.17 (base 184.16): W21 holds
cd app && npx knip → no unused file or value export in the changed files (only exported Props/State/Flows types, as on the other pages)
Temporary old-vs-new probe (a vitest file, run on this tree and on a `git archive` copy of the base commit in the scratchpad, then deleted) → 12 scenarios, identical results: default (also in StrictMode: 46 GetMembers calls before and after), own locality and My Household tab, the four tags and back to Households, card clicks with the carousel on and off (URL and preload object), back navigation restore, Get_LocalityDetails error, flags (C2EnableMaps, C2EnableC1DirectoryView off, mobileDirectoryLocalityContacts on), unmount while GetUserInformation is pending (W23: Get_LocalityDetails is still called once with LocalityId 585 and IsScreenInitialized true), unmount while GetLocalityHouseholds is pending. The only difference between two runs of the old code is a call-order race in the My Household tab (ActionGetSignedImagesInBulk and DataActionFetchContactDetails); the comparison sorts that call list.

## Deviations from the brief
1. The block components (Locality_Households_HouseholdList, Locality_Subdivisions, Locality_Interchange, Locality_OneSchoolGlobal, Household_Card) call their own hook instead of becoming props-only views with a wrapper. The tag blocks mount and unmount with the selected tag, and Household_Card fetches per row, so a hook in the page would change when OnReady runs. The flows, the state and the reducers are in `hooks/`. The page reads all flags and gives them as `flags` (rule 4).
2. `getSample_FilterTags` takes the `mobileDirectoryLocalityContacts` flag as an argument. The C1 directory view, carousel and new-bookmarks flags come from the page (`useFlagOn`) instead of `getHasC1DirectoryView()` and `isOn()` inside the flows. The values come from the same flag store.
3. No `use<Thing>Query` hooks for the two household calls. The flows call the repository functions (`fetchLocalityHouseholds`, `fetchHouseholdCardMembers`), as the page template says for OnReady flows.
4. The view-cache key of the screen variables changed from `Model` to `Directory_Locality.Locality_Details`. This key is internal. The block keys are unchanged.
5. `useHouseholdCardMembers` keeps the old effect without a once-guard. In StrictMode (dev) each card still fetches GetMembers twice, as in the old port, so the calls stay the same. Follow-up candidate.
6. `hooks/readyOnce.ts` is a small page-local helper for the W23 once-guard (the same pattern as `useMessageDetail`), used by the five flow hooks.
7. Merge note for the master: `api/household/{index,mapper,repository,types}.ts` get new sections at the end of each file. The dependency step P6-G4-B-Household_Relations may also edit `api/household`, so a rebase may give append-only text conflicts.
8. For the documenter: `src/api/README.md` ("The household calls of Locality_Details stay for the household domain", "seven old caller files") and `docs/refactor/calls-by-domain.md` (the two `screens/Locality_Details/api.ts` rows) are now out of date. The move-map row and the CHANGELOG are also left for the documenter.

## Questions for the user
none
