# CR-Assemble_BrowseByCountry-1: mock user — a non-empty SubscriptionRegionId for the Global subscription

- Status: applied
- Raised by: Assemble_BrowseByCountry, 2026-10-16
- Block: shell mock data (no block): `app/src/shell/mockUser.ts` `mockDirectoryUser()` →
  `Directory_UserCurrent_Subscription.SubscriptionRegionId` (today `''`)
- Other routes using it: AssembleEvents (Assemble_FilterSheet calls the same GetCacheableRegionSubscribedCountries)
- Related question: none (fact proven by the capture)

## Evidence
- ScreenBlock_Assemble_Filter FetchCountries (analysis/sources/pretty/Connect2_Assemble_MUI.Assemble
  .ScreenBlock_Assemble_Filter.mvc.js:1025-1100): Cache_UserInfo_Get, then GetCacheableRegionSubscribedCountries(
  UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionRegionId).
- GetCacheableRegionSubscribedCountries (migration/runtime-sources/Connect2_LegacyShared.controller.js:3551-3679): an
  empty SubscriptionRegionId raises ObjectNotFound "Invalid country id" before any server call.
- TST called `Connect2_LegacyShared/ActionGetCountriesBySubscription` with input `SubscriptionRegionId` on both
  Assemble routes (Assemble_BrowseByCountry and AssembleEvents analysis/calls.json, #4): the captured Global account
  has a non-empty SubscriptionRegionId.
- With the mock user's `''` the clone raises ObjectNotFound, IsCountriesDataFetched stays False and the country list
  of both routes never shows (Spinner only); no other code reads SubscriptionRegionId (grep app/src).

## Expected change
`SubscriptionRegionId: '1'` (any non-empty Long Integer text; the fictional Assemble mock answers every region id with
the 17 countries, `app/src/mocks/fictional/assemble.ts` `countriesBySubscriptionOutput`). `SubscriptionRegion` may stay
`''` (not read by these routes).

## Workaround in the route until applied
None: the route is built as compiled (the call chain is ported 1:1 in
`app/src/shared/Connect2_LegacyShared/lib/actions.ts` getCacheableRegionSubscribedCountries); its default state
shows the Spinner until this is applied.

## Resolution (foundation owner)
Set `- Status: applied` above when done (route.py reset keeps applied requests and deletes open ones raised by a failed run).
- Change: F13, 2026-10-16. `app/src/shell/mockUser.ts` mockDirectoryUser: `SubscriptionRegionId: '1'`, `SubscriptionRegion: 'Americas'` (region 1 "Americas" of the fictional Assemble mock, Argentina's RegionId in `app/src/mocks/fictional/assemble.ts:39`). No other app code reads either field (grep app/src); the route tests that set the region per case keep passing.
- Regression parity run on: 2026-10-16 after the change: Assemble_BrowseByCountry 0 (default, loading, offline); Profile, Menu, HomeFeed, Locality_Details, HouseholdDetails, MessageList all 0. AssembleEvents default now loads the filter-sheet country list (calls 0) but shows 89 position/layout/style diffs inside the closed sheet's LocalityListDetail rows (cause not established; reported to the orchestrator).
