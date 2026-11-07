## Result
status: pass
summary: CountryList now uses Directory_CommunityNumbers ($b17 margin-top-base, $b18). It shows GetCommunityStatistics('CountryList'), which OnReady starts and does not wait for, and FetchCount is gone. The mock serves the recorded GetCountriesStatistics fixture with the five counts of the 2026-11-07 capture on top. I removed the old CommunityPopulation component and the unused community leftovers in api/country and api/member. Parity is 0 in every state. The only typecheck errors are in two files that are not mine (see Deviations).

## Files changed
app/src/pages/CountryList/CountryListPage.tsx
app/src/pages/CountryList/CountryList.test.tsx
app/src/pages/CountryList/components/CountryListContent.tsx
app/src/pages/CountryList/components/CountryListContent.test.tsx
app/src/pages/CountryList/hooks/countryListState.ts
app/src/pages/CountryList/hooks/countryListState.test.ts
app/src/pages/CountryList/hooks/useCountryList.ts
app/src/pages/CountryList/hooks/useCountryList.test.tsx
app/src/pages/CountryList/mocks.ts
app/src/components/feed/CommunityPopulation/index.ts
app/src/components/feed/CommunityPopulation/README.md
app/src/components/feed/CommunityPopulation/CommunityPopulation.tsx (deleted)
app/src/components/feed/CommunityPopulation/CommunityPopulation.stories.tsx (deleted)
app/src/components/feed/CommunityPopulation/CommunityPopulation.test.tsx (deleted)
app/src/components/feed/CommunityPopulation/__captures__/v1.html (deleted)
app/src/components/feed/CommunityPopulation/__captures__/v2.html (deleted)
app/src/api/country/repository.ts
app/src/api/country/repository.test.ts
app/src/api/country/index.ts
app/src/api/member/hooks.ts
app/src/api/member/hooks.test.tsx
app/src/api/member/index.ts
app/src/api/member/keys.ts
app/src/api/member/mapper.ts
app/src/api/member/repository.ts
app/src/api/member/repository.test.ts
migration/screens/CountryList/route-spec.md
migration/screens/CountryList/parity/* (reports and PNGs of route.py parity)

## Commands run
npm --prefix app run typecheck → exit 2. Only these errors, none in my files:
- src/platform/feedback/queryErrors.test.tsx(8): `useCommunityPopulationQuery` is removed (the master's file, see Deviations).
- src/pages/Notifications/hooks/notificationsState.test.ts(109,116,153): '"breakpointsSet"'. This comes from the Notifications work in progress in the tree, not from this item.
npx vitest run src/pages/CountryList src/components/feed/CommunityPopulation src/pages/HomeFeed src/api/country src/api/member → 20 files, 133 tests passed
npx eslint src/pages/CountryList src/components/feed/CommunityPopulation src/api/country src/api/member → exit 0
npm --prefix app run arch → no dependency violations (139 known ignored)
python3 tools/pipeline/consistency_check.py --screen CountryList → OK
npm --prefix app run unused → knip fails on an unresolved import `./MessageImage` in src/pages/Notifications/components/NotificationsList.tsx (not this item). `node build/check-unused-exports.mjs` for my paths: no NEW row (I made CommunityStatisticsWire module-local); STALE rows to delete from `.knip-known-unused.json` (master's file): `src/api/member/index.ts | export | fetchCommunityPopulation` and `src/components/feed/CommunityPopulation/CommunityPopulation.tsx | type | CommunityPopulationProps`
python3 tools/pipeline/route.py parity CountryList --app http://localhost:5173 (dev server cwd = <root>/app) → CountryList: parity clean
- default: structure 0, class 0, attr 0, text 0, style 0, pseudo 0, layout 0, position 0, pixel 0, call 0; pixels 0.02%, worst tile 2.2%
- loading: all 0; pixels 0.00%, worst tile 0.0%
- offline: all 0; pixels 0.02%, worst tile 2.2%

## Deviations from the brief
- On TST, CustomContainer $b17 has no events (CountryList.mvc.js:744-790), so the old click of the "Population" container (OnClick_Block → Updates_SingleList) is removed: `onCommunityPopulationClicked` is removed from useCountryList, the page and CountryListContent.
- GetCommunityStatistics is now a screen data action in the reducer state (`communityStatistics`, view-cached). Action_RefreshData_CommunityStatistics (OnReady, JavaScript1, not awaited) fills it from `fetchCommunityStatistics('CountryList')`. A back navigation that the view cache restored does not call it again, as on TST (CountryList.mvc.js:1280-1316).
- Stale fixture (master Q1): `pages/CountryList/mocks.ts` reads the recorded fixture with `fixtureData` and sets the five captured counts on top of it (VC Members 73 / Sisters 36, TT Members 73 / Sisters 37, US Localities 28; capture of 2026-11-07). It keeps the real/empty/error/loading scenarios. The fixture file is not edited. A "Decisions to confirm (TST sync)" bullet is in route-spec.md, as for BrowseCountries.
- Deleted tests, all because their code was removed, as the master asked:
  - The old CommunityPopulation component, with its story, its test and the captures v1/v2.
  - In `api/country/repository.test.ts`: the test of the two removed `fetch*CommunityStatistics` functions.
  - In `api/member/hooks.test.tsx`: the `useCommunityPopulationQuery` describe block (2 tests) and the key assertion of `memberKeys.communityPopulation`.
  - In `api/member/repository.test.ts`: the `fetchCommunityPopulation` test is now a test of `fetchCommunityStatistics` with both owners and the same call assertions.
- CacheControl_UserInfo (UBTConnect_Utils): the live copy and the old pretty copy are the same after prettier. Nothing to port.
- `platform/feedback/queryErrors.test.tsx:8,29` (master's file): no TanStack query is left for DataActionGetCommunityStatistics. HomeFeed and CountryList both call `fetchCommunityStatistics(owner)` through `flow.fetch`, and a failure goes to `raiseToFlowHandler`, not to the query cache. The case `['D4 HomeFeed DataActionGetCommunityStatistics', () => useCommunityPopulationQuery('HomeFeed')]` must be removed, and `useCommunityPopulationQuery` dropped from the import on line 8. Its D4 behaviour is now covered by `pages/HomeFeed/hooks/useHomeFeedReady.test.tsx` and by `pages/CountryList/hooks/useCountryList.test.tsx` ("a failed GetCommunityStatistics goes to the flow handler...").
- Not edited, for the documenter or the master:
  - `app/src/api/README.md:95-97`: outside my granted paths. It should say that `member/` holds `fetchCommunityStatistics(owner)` (DataActionGetCommunityStatistics of HomeFeed and CountryList, called through flow.fetch, no query), and drop "the count query of `member/`" from the next paragraph.
  - `app/docs/reference/shared-blocks.md:135`: generated by tools/generate/docs_gen.py. Re-run the generator.
  - The stale comments in `app/src/api/update/hooks.ts:6` and `app/src/api/service/hooks.ts:22`: they name `useCommunityPopulationQuery` and are outside my paths.

## Questions for the user
none (the fixture count patch waits for the user's confirmation at review, in route-spec.md "Decisions to confirm (TST sync)")
