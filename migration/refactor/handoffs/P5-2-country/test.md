## Result
status: pass
summary: Gate passes on the main tree (after the master merge). ci exit 0, parity strict on 33 routes clean against both references, bundle within limit, diff review has no finding. One transient self-reference difference (CountryDetails/default) in the first parity run did not repeat in 3 single runs and 1 full run.

## Files changed
migration/refactor/handoffs/P5-2-country/test.md
app/docs/refactor/reports/P5-2-country.md (written by the parity tool)

## Commands run
- dev server check: http://localhost:5174/UBTConnect/HomeFeed -> 200; cwd of the vite process = /Users/khaitruong/Projects/connect-new/app
- npm --prefix app run ci -> exit 0 (typecheck, lint, format, 352 test files / 1688 tests passed, build)
- npm --prefix app run lint:arch -> 0 errors, 207 warnings (dev: 210 at base); the one eslint warning is in components/ui/os/OSPopup/usePopupWidget.ts, not a changed file. No warning in changed files or src/api/country.
- refactor_parity.py --level strict --changed --since HEAD --explain --app http://localhost:5174 -> 33 of 64 routes, 22 changed files. Includes BrowseCountries, CountryList, CountryDetails, Profile, Assemble_BrowseByCountry, AssembleEvents (Connect2_LegacyShared actions), and the FilterSheet / CacheControl_AllCountries routes (EventDetail, Search, MessageList and others).
- refactor_parity.py --level strict --changed --since HEAD --ref both --app http://localhost:5174 --report app/docs/refactor/reports/P5-2-country.md, run 1 -> FAIL: outsystems 33/33 clean; self 32/33, CountryDetails/default DIFF (structure 4, style 4, layout 3, position 3). Run under load of 4 jobs.
- same route alone, --ref self, 3 times -> PASS 3 of 3 (default, loading, offline all OK).
- same full command, run 2 (the report on disk) -> exit 0: outsystems 33/33, self 33/33, 138 runs, 0 differences, including the call check. migration/refactor-exemptions.json is [] and the handoff exemptions.json is [].
- npm --prefix app run build && node app/build/bundle-report.mjs -> HomeFeed 239.32 kB gzip (baseline 236.40, +1.2%), Login 187.29 (baseline 184.61, +1.4%); both within +5%.
- Step "Check": parity strict --changed passes; exemption list empty (no call moves into a new query, so none needed).

## Diff review
1. openapi.yaml, mocks fixtures, public css: no change. Pass.
2. No deleted test file; 3 test files added in api/country. Pass.
3. Scope: only the 4 screens' api/types, Connect2_LegacyShared actions/structures, CacheControl_AllCountries, one import in FilterSheet, and the new domain. Profile/api.ts and types.ts contain only the country re-export and the member re-export from the member step. Pass.
4. @origin: no file ports a screen or block; none needed. Pass.
5. Not a move step.
6. Behavior (change step), checked by reading:
   - Call parity (plan 5.4): each fetch makes the same one call with the same name, owner and inputs. CountryDetails inputs (Local_MapId, SearchString, HasFiltersApplied, OriginalCountryCode, CountryCode) are the same as before, read at fetch time. Profile sends CurrentCountryCode only. The shared actions keep their cache wrappers (getCacheableCountryInfo still wraps getCountryInformation), so the order is unchanged. Pass.
   - Queries keep options: CountryDetails placeholderData keepPreviousData, staleTime Infinity, gcTime 0, retry false; Profile enabled isRequested, retry false. Only the keys changed (['country', ...]). Pass.
   - Dropped fields, checked with a search of all readers (src, ts and tsx, stories, mocks, no any/JSON.parse path found):
     * Locality (Id, Name): the only consumer of getCountryInformation/getCacheableCountryInfo is Assemble_FilterLocalityByCountry; it reads l.Id and l.Name only. The CountryCode reads in FilterSheet (lines 187, 209, 216) are the AllLocalities list, not this one. No search hit for Active, HouseholdCount, Latitude etc. on this list.
     * AllCountries (CountryCode, CountryName): the only reader is FilterSheet (lines 159-161, 627, response.CountryList.List); EmptyListItem is read in no consumer of this record. The wrapped CountryList.List shape is kept, and the memory cache and the Result event get the short record. Pass.
     * CountryList texts and CountryDetails typedStatisticsTexts are now copies of the 7 fields of UI_StatisticsTexts (the interface has exactly these 7). No loss.
   - Old api.ts/types.ts re-export under the old names (getCountriesStatistics, useGetLocalityStatistics, useGetCountryInfo, CountryStatistics, LocalityStatistics, CacheControl_AllCountriesRec, CountryWithMapPosition, LocalityResultItemWithGPS, getCountryInformation, getRegionSubscribedCountries). Callers unchanged except one type import in FilterSheet. Pass.
   - Rule 7: api/country imports only api/client, legacy/os/os-wire (via mapper) and its own files; no import of another api domain. Pass.
   - Merged screens/Profile/api.ts: two re-exports, no unused import; typecheck and eslint clean. Pass.
   Note (not a failure): the removed wire alias CacheControl_AllCountries in UBTConnect_Utils/lib/structures.ts has no importer now; dev left it on purpose.
7. No secret, PIN or email in the diff. Pass.

## Deviations from the brief
none

## Questions for the user
none
