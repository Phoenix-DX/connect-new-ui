## Result
status: pass
summary: Added `app/src/api/locality/` (types, mapper, repository, keys, hooks, barrel, 3 test files) for the 11 locality calls in `calls-by-domain.md`. The 7 caller files re-export the domain functions and types under their old names, so no caller changes. Work done in the worktree `rf/prefetch-P5-2-locality` (base 879ccc8). Typecheck, the full vitest suite (352 files), eslint, prettier and arch pass. A 3-way merge check with the uncommitted country work in the main tree gives 0 conflicts.

## Files changed
app/src/api/locality/types.ts (new)
app/src/api/locality/mapper.ts (new)
app/src/api/locality/repository.ts (new)
app/src/api/locality/keys.ts (new)
app/src/api/locality/hooks.ts (new)
app/src/api/locality/index.ts (new)
app/src/api/locality/mapper.test.ts (new)
app/src/api/locality/repository.test.ts (new)
app/src/api/locality/hooks.test.tsx (new)
app/src/screens/AssembleEvents/api.ts
app/src/screens/BrowseDirectory/api.ts
app/src/screens/BrowseDirectory/types.ts
app/src/screens/LDM_MyEvents_V2/api.ts
app/src/screens/LDM_MyEvents_V2/types.ts
app/src/screens/Locality_Details/api.ts
app/src/screens/Locality_Details/types.ts
app/src/shared/Connect2_LegacyShared/lib/actions.ts
app/src/shared/Connect2_LegacyShared/lib/structures.ts
app/src/shared/UBTConnect/SupperMeeting_DetailsBlock/api.ts
app/src/shared/UBTConnect_Utils/CacheControl_AllLocalities/CacheControl_AllLocalities.tsx
app/src/shared/UBTConnect_Utils/CacheControl_AllLocalities/types.ts
app/src/shared/UBTConnect_Utils/lib/structures.ts

Shared files that the country step also changes (main tree, uncommitted): `app/src/shared/Connect2_LegacyShared/lib/actions.ts` and `app/src/shared/Connect2_LegacyShared/lib/structures.ts`. `git merge-file` (current main-tree version, HEAD 879ccc8 as base, this worktree version) merges both with 0 conflicts. The hunks are in different places. In `actions.ts` the country import is after line 3 and the locality import is after line 4. This step does not change `FilterSheet.tsx` or any country screen file (BrowseCountries, CountryDetails, CountryList, Profile).

## Commands run
All commands ran in the worktree, with Node 24.21.0.
npm --prefix app run typecheck → exit 0
npx vitest run src/api/locality → exit 0; 3 files, 32 tests passed
npx vitest run --changed → exit 0; 26 files, 154 tests passed (includes AssembleEvents, FilterSheet, SupperMeeting_DetailsBlock, CacheControl_AllLocalities, Connect2_LegacyShared actions, Connect2_Assemble_MUI actions and toggleBookmarkItem, Assemble_FilterSubdivisionByLocality)
npx vitest run (full suite) → exit 0; 352 files, 1697 tests passed (includes src/mocks/handlers.test.ts)
npx eslint <the changed files and src/api/locality> → exit 0
npx prettier --write src/api/locality src/screens/Locality_Details/types.ts → formatted 7 files (the project formatter)
npm --prefix app run format:check → exit 0, all files clean
npm --prefix app run arch → exit 0; 0 errors, 209 warnings. In the changed files there are 5 warnings, all rule-9 os-wire/os-exceptions imports that existed before. BrowseDirectory/api.ts lost its warning. src/api/locality has no warning.
git merge-file (main-tree country version, HEAD base, locality version) for the 2 shared LegacyShared files → 0 conflicts
After the full suite, two comments changed (mapper.ts, BrowseDirectory/api.ts: compiled-line references removed). Typecheck, eslint and prettier ran again and passed.
Parity was not run (no dev server for the worktree, as instructed).

## Deviations from the brief
- Domain contents, all 11 actions of the locality table:
  - DataActionGetSubdivisionName (AssembleEvents)
  - DataActionGetLocalityStatistics (BrowseDirectory)
  - DataActionGetEventLocalitiesForFilter (LDM_MyEvents_V2)
  - Get_LocalityDetails, Get_Subdivision_List, GetInterchangesByLocalityId and Get_OneSchoolGlobal_List (Locality_Details)
  - GetLocalityInformation and GetBulkSubdivisions_V2 (Connect2_LegacyShared)
  - DataActionGetSubdivision (SupperMeeting_DetailsBlock)
  - DataActionGetCacheInfo (CacheControl_AllLocalities)
  - Not moved: the household calls of `Locality_Details/api.ts` (GetLocalityHouseholds, GetMembers) stay for the household domain. CountryDetails' GetLocalityStatistics is a country call and is not touched.
- Plan §5.4: no call moved into a query. Every caller calls the function directly; none uses a query. So the call behavior does not change. `hooks.ts` has 5 queries without a caller, with staleTime 0, gcTime 0 and retry false, as in member: useLocalityCardListQuery, useLocalityDetailsQuery, useInterchangesQuery, useSubdivisionDetailsQuery and useAllLocalitiesQuery. No exemptions are needed, so `exemptions.json` was not written.
- `LocalityInformation` (GetLocalityInformation) keeps the contract record. It is not narrowed, as with member's MemberAccountForm. GetCacheableLocality keeps it in the memory cache. The 1:1 port of GetLocalBookmarkedLocalityInformation (Connect2_Assemble_MUI) clones it and sets IsBookmarked in the locality and in 5 of its lists. A narrow type would require a change to that client action.
- Fields that the mappers drop, and the reader search (typecheck, grep, casts, JSON and storage):
  - SubdivisionDetails drops Subdivision_Actions. The only reader is SupperMeeting_DetailsBlock, which reads Subdivision_Card only and keeps it in useState.
  - AllLocalities drops CountryName, Latitude and Longitude:
    - FilterSheet reads LocalityId, Name and CountryCode (FilterSheet.tsx:184-216). Its `same()` compares only the option lists that it builds.
    - Only CacheControl_AllLocalities writes and reads the memory-cache type allLocalities.
    - mockUser.test reads the fixture directly.
  - SubdivisionInformation (GetBulkSubdivisions_V2) keeps only these fields:
    - in each HouseholdListResponse item: Id, Name, Family, Location, IsBookmarked and Photo340 (Bucket, Path, Type, SignedURL)
    - Subdivision.Locality.Id and Subdivision.Locality.Country.Code

    The readers are householdRowsOf of AssembleEventDetail_Localities, its countryCode and localityId state, and toggleBookmarkItem.test. Only getCacheableSubdivision_V2 uses the cache type AssembleSubdivision. memoryCache is in memory only (no JSON storage).
  - The mappers now list the fields one by one, where the old code copied the record (subdivision card content, interchange statistics items). These lists contain every field of the contract and of the mocks, so nothing is dropped.
- To keep FilterSheet.tsx unchanged (the country step changes the same import lines), `CacheControl_AllLocalities` in `shared/UBTConnect_Utils/lib/structures.ts` now aliases the domain type AllLocalities. The country step used the same alias pattern in LegacyShared structures. The block's `types.ts` points to the domain directly, as the country step did for AllCountries.
- Unused exports removed:
  - BrowseDirectory/types.ts: StatisticItemWire, LocalityStatisticsWire, LocalityStatisticsData
  - LDM_MyEvents_V2/types.ts: GetEventLocalitiesForFilterWire, EventLocalitiesFilterWire
  - Connect2_LegacyShared structures: CacheableSubdivisionInformationTextText
  - Locality_Details/api.ts: the 3 CallInputs interfaces (no importer)
- `getLocalityInformation` is now `export const getLocalityInformation = fetchLocalityInformation` (as country did for getCountryInformation). It lost its default `'0'`. Typecheck confirms that every caller passes an id.
- The documenter has these docs to update (not changed here):
  - app/src/api/README.md
  - app/docs/refactor/calls-by-domain.md
  - app/docs/reference/api.md
  - app/docs/guides/api-and-mocks.md (the list of domain folders)
  - app/src/shared/UBTConnect/SupperMeeting_DetailsBlock/README.md
  - app/src/shared/UBTConnect_Utils/CacheControl_AllLocalities/README.md
- Parity strict `--changed` was not run: there is no dev server for the worktree. The tester must run it in the main tree. Affected routes include:
  - AssembleEvents, BrowseDirectory, LDM_MyEvents_V2, Locality_Details (and its tags)
  - SupperMeeting_Details and SupperMeeting_Carousel
  - the FilterSheet routes (for example Updates_SingleList)
  - AssembleDetail and the Assemble filters

## Questions for the user
none
