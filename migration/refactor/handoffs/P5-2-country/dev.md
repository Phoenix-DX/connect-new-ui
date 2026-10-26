## Result
status: pass
summary: Added the domain `app/src/api/country/` (types, mapper, repository, keys, hooks, barrel, 3 test files) for the 7 calls in the country table of `app/docs/refactor/calls-by-domain.md`. The old `api.ts` and `types.ts` files of BrowseCountries, CountryList, CountryDetails and Profile re-export the domain under their old names. Connect2_LegacyShared and CacheControl_AllCountries now call the repository. Typecheck, the full vitest suite, eslint, format:check and arch pass in the worktree. Parity was not run (no dev server for the worktree).

## Files changed
All paths are in the worktree `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/b1c0f7f3-a5be-42a8-b170-074abce216da/scratchpad/wt-country` (branch `rf/prefetch-P5-2-country`, base 524edb7). `app/src/api/country/` is untracked, so include untracked files when you take the diff.
app/src/api/country/types.ts (added)
app/src/api/country/mapper.ts (added)
app/src/api/country/repository.ts (added)
app/src/api/country/keys.ts (added)
app/src/api/country/hooks.ts (added)
app/src/api/country/index.ts (added, barrel)
app/src/api/country/mapper.test.ts (added)
app/src/api/country/repository.test.ts (added)
app/src/api/country/hooks.test.tsx (added)
app/src/screens/BrowseCountries/api.ts (changed: re-export only)
app/src/screens/BrowseCountries/types.ts (changed: re-export only)
app/src/screens/CountryList/api.ts (changed: re-export only)
app/src/screens/CountryList/types.ts (changed: CountryStatistics re-exported; UserGeography stays)
app/src/screens/CountryDetails/api.ts (changed: re-export only)
app/src/screens/CountryDetails/types.ts (changed: re-export only)
app/src/screens/Profile/api.ts (changed: useGetCountryInfo re-exported; member_EditDetails_Service not touched)
app/src/screens/Profile/types.ts (changed: CountryInfo, CountryInfoWire and GetCountryInfoOutputs removed; the member types not touched)
app/src/shared/Connect2_LegacyShared/lib/actions.ts (changed: getCountryInformation and getRegionSubscribedCountries are the domain functions)
app/src/shared/Connect2_LegacyShared/lib/structures.ts (changed: CountryWithMapPosition and LocalityResultItemWithGPS re-export the domain types)
app/src/shared/UBTConnect_Utils/CacheControl_AllCountries/CacheControl_AllCountries.tsx (changed: calls fetchAllCountries)
app/src/shared/UBTConnect_Utils/CacheControl_AllCountries/types.ts (changed: CacheControl_AllCountriesRec re-exports AllCountries)
app/src/shared/UBTConnect/FilterSheet/FilterSheet.tsx (changed: one type import, now from the block CacheControl_AllCountries)
Main tree, written by this stage:
migration/refactor/handoffs/P5-2-country/dev.md (added)
migration/refactor/handoffs/P5-2-country/exemptions.json (added, `[]`)
No `git mv` was used. No mocks, fixtures, `openapi.yaml` or CSS changed.

## Commands run
All commands ran from the worktree with Node 24.
npm --prefix app run typecheck → first run: 1 error (FilterSheet.tsx:627, it typed the country list with the wire alias); fixed with the type import; second run exit 0
npx vitest run src/api/country → 3 files, 23 tests passed
npx vitest run src/api src/shared/Connect2_LegacyShared src/shared/UBTConnect_Utils/CacheControl_AllCountries src/shared/UBTConnect/FilterSheet src/shared/Connect2_Assemble_MUI src/screens/Assemble_BrowseByCountry src/screens/AssembleEvents src/screens/BrowseCountries src/screens/CountryList src/screens/CountryDetails src/screens/Profile src/mocks → 58 files, 241 tests passed
npx vitest run (full suite) → 349 files, 1673 tests passed
npx eslint src/api/country <the 13 changed files> → exit 0, no warning
npx prettier --write src/api/country/mapper.test.ts src/api/country/repository.test.ts (line wraps only); npm run format:check → all files use Prettier code style
npm run arch → 0 errors, 207 warnings. The base 524edb7 (copied with `git archive` to the scratchpad, same config) gives 210 warnings. The 3 removed warnings are rule 9 for `BrowseCountries/api.ts`, `CountryDetails/api.ts` and `CountryList/api.ts` → `legacy/os/os-wire.ts`. There is no new warning and no warning in `src/api/country/`.
Parity: not run. The worktree has no dev server, as the master instructed. The tester runs the gate on the main tree.

## Deviations from the brief
- Scope of the domain. The 7 calls are the ones that `app/docs/refactor/calls-by-domain.md` (P0-4) puts under "country":
  - BrowseCountries and CountryList: DataActionGetCountriesStatistics.
  - CountryDetails: DataActionGetLocalityStatistics.
  - Profile: DataActionGetCountryInfo.
  - Connect2_LegacyShared: GetUserLocalitiesForCountryCodeWithGPS and GetCountriesBySubscription.
  - CacheControl_AllCountries: DataActionGetCacheInfo.
  
  ContactUsDetails' DataAction_GetCountriesNames is under "message" in that table, so this step does not include it.
- Names. Repository: `fetchBrowseCountriesStatistics`, `fetchCountryListStatistics`, `fetchCountryLocalityStatistics`, `fetchCountryInfo`, `fetchCountryLocalities`, `fetchRegionSubscribedCountries`, `fetchAllCountries`. Hooks: `useCountryLocalityStatisticsQuery`, `useCountryInfoQuery`, `useAllCountriesQuery`. The old modules keep their names through aliases: `getCountriesStatistics`, `useGetLocalityStatistics`, `useGetCountryInfo`, `CountryStatistics`, `LocalityStatistics`, `getCountryInformation`, `getRegionSubscribedCountries`, `CacheControl_AllCountriesRec`, `CountryWithMapPosition` and `LocalityResultItemWithGPS`. No screen or block caller changed, except the one type import in FilterSheet.
- Types. Each domain type has the shape that its readers use today: camelCase where a screen mapped the record, OutSystems names where the reader takes the record as it is. The two DataActionGetCountriesStatistics actions have two shapes: `CountryCard` (BrowseCountries) and `CountrySummary` (CountryList). The domain cannot import `shared/` (rule 7), so `StatisticsCard`, `StatisticsCount` and `StatisticsTexts` are the domain copies of StatisticsOptions, its count record and UI_StatisticsTexts. They have the same fields.
- Fields that the mappers drop, for the tester to check:
  - BrowseCountries, CountryList, CountryDetails, Profile and GetCountriesBySubscription: no change. They keep the fields that the old mappers kept. CountryList `texts` and CountryDetails `typedStatisticsTexts` are now copies of the 7 UI_StatisticsTexts fields, not the wire object.
  - GetUserLocalitiesForCountryCodeWithGPS (new): only `Id` and `Name` stay. The dropped fields are Active, Country, HouseholdCount, Latitude, Longitude, MainHallAddress, MemberCount and SubdivisionsCount. The only reader is `Assemble_FilterLocalityByCountry`, which reads `Id` and `Name`; typecheck confirms it. The memory cache (DirectoryCacheType.Countries) now keeps the short records.
  - CacheControl_AllCountries (new): only `CountryCode` and `CountryName` stay. The dropped fields are Latitude, Longitude and the list's EmptyListItem. The list stays wrapped (`CountryList.List`): the block puts the record in the memory cache and raises it in its Result event. FilterSheet reads `.CountryList.List[].CountryCode` and `.CountryName`; typecheck confirms it.
- Hooks. The two queries that existed before keep their exact options and signatures, so the old `api.ts` files can re-export them:
  - CountryDetails: `placeholderData: keepPreviousData`, `staleTime: Infinity`, `gcTime: 0`, `retry: false`. The query reads `variables()` at fetch time.
  - Profile: `enabled: isRequested`, `retry: false`, the library cache defaults.
  
  Only the query keys changed, to `countryKeys`: `['country', 'localityStatistics', { countryCode }]` and `['country', 'info', code]`. Nothing else reads these keys; grep found no `invalidateQueries`, `setQueryData` or `getQueryData`, and the view cache stores whatever key a query has. `useAllCountriesQuery` is new and has no caller yet (move-map row "becomes useAllCountriesQuery (P5-2, P5-4)"). It follows the household pattern: `staleTime: 0` and `gcTime: 0` fixed, `retry: false` by default.
- §5.4 and exemptions. No call moves into a new query in this step: the two queries existed before with the same options, and the new hook has no caller. So no `call` difference is expected. The file `migration/refactor/handoffs/P5-2-country/exemptions.json` is `[]`.
- `LocalityStatisticsVariables` replaces `LocalityStatisticsInputs & { localMapId }`. It has no `countryCode`, because the query always sends the `countryCode` argument and never read `variables().countryCode`. The caller's object still has `countryCode`, which is allowed through the spread.
- `@origin`: none in `api/country/`. The repository does not port one screen or block; it has the data actions of 4 screens and 1 block and 2 server actions. Each function's JSDoc names its action and owner. The household repository has a tag because all of its calls belong to one block.
- Compiled-line references (`mvc.js:…`, `controller.js:…`) were removed only in the comments that this step rewrote: the old `api.ts` files and the two functions of `actions.ts`.
- Left as is, to avoid a conflict with the member step: `CacheControl_AllCountries` in `shared/UBTConnect_Utils/lib/structures.ts` (the wire alias) has no importer now. It is two lines below `CacheControl_UserInformation`, which the member step can change.
- Merge with P5-2-member: `screens/Profile/api.ts` and `screens/Profile/types.ts` have both country and member code. This step changed only the country parts:
  - `api.ts`: the imports and the former `useGetCountryInfo`, lines 1-21.
  - `types.ts`: line 1 (`ActionOutputs` dropped), line 5 and lines 11-17.
  
  Expect a text conflict near the import lines if the member step changes the same files.
- For the documenter: `src/api/README.md` names household as the only domain. `app/docs/guides/page-template.md` says that no caller uses the query hooks yet, but CountryDetails and Profile now use them through the re-exports. The screen READMEs, if any, still name `api.ts` as the place of the calls.

## Questions for the user
none
