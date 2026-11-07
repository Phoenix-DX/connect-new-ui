## Result
status: pass
summary: Page mock now serves the fixture with the fresh counts (Saint Vincent 73/36, Trinidad 73/37, United States 28 localities); parity is clean in all 3 states. The member repository, mapper, types, keys and hook were moved from the removed FeedBlock_CommunityPopulation action to DataActionGetCommunityStatistics (per owner).

## Files changed
app/src/pages/BrowseCountries/mocks.ts
app/src/api/member/types.ts
app/src/api/member/mapper.ts
app/src/api/member/repository.ts
app/src/api/member/keys.ts
app/src/api/member/hooks.ts
app/src/api/member/index.ts
app/src/api/member/repository.test.ts
app/src/api/member/hooks.test.tsx

## Commands run
- typecheck → no error in src/api/member/** or src/pages/BrowseCountries/**. Other errors: other items' files (event, household, OrbitAdminLanding) and three callers of my signature change (below).
- vitest src/api/member src/pages/BrowseCountries → 6 files, 44 tests pass (BrowseCountries alone: 3 files, 23 tests)
- eslint src/api/member src/pages/BrowseCountries → clean
- npm run arch → no dependency violations
- route.py parity BrowseCountries → default: text 0, call 0, all other kinds 0; loading: 0; offline: 0 ("parity clean")

## Deviations from the brief
- The text differences were in the loaded rows from the recorded fixture, which cannot be edited. The page mock wraps `fixtureData` and patches the captured counts.
- `fetchCommunityPopulation` and `useCommunityPopulationQuery` now take an owner argument ('HomeFeed' | 'CountryList'). FeedBlock_CommunityPopulation/DataActionFetchCount is gone from the contract; the fresh captures call `HomeFeed/DataActionGetCommunityStatistics` and `CountryList/DataActionGetCommunityStatistics` (Out_CommunityStatistics with In_MembersCount, a number). `fetchCommunityStatistics(owner)` returns the whole record; `fetchCommunityPopulation(owner)` returns In_MembersCount as text. The query key includes the owner; the error log text is now "DataActionGetCommunityStatistics failed".
- The member tests answer the community statistics with inline MSW handlers: no page mock exists for them yet.

## Needed by other items (not edited)
- HomeFeedPage.tsx:80 and CountryListPage.tsx:23: call `useCommunityPopulationQuery('HomeFeed')` / `('CountryList')`. Their typecheck errors are expected until those items. Each also needs a fictional page-mock handler for its DataActionGetCommunityStatistics (none exists), and its test and parity must follow the fresh capture.
- src/platform/feedback/queryErrors.test.tsx:29 (D4 case): needs the owner argument. It is outside every allowed path.
- src/components/feed/CommunityPopulation/mocks.ts still uses the removed recorded `FeedBlock_CommunityPopulation/DataActionFetchCount` handler. The fixture 01-6dc57d78 stays.
- AssembleEvents and Assemble_BrowseByCountry: no code touched here. Their statistics reads do not use the `api/member` community population. They only need their own mocks to carry the counts of their fresh captures. I did not open them.

## Questions for the user
none
