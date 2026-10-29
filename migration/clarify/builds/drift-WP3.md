# Drift wave WP3: small TST code changes (2026-10-29)

Rows: directory 1-2, events R2, household R4, R6, R11. Source: the live TST code of 2026-10-27 (re-capture sources).
Edit method: one one-off exact-match Python script (each old string had to occur the given number of times, 0 misses),
then `prettier --write` on the changed files. No commit, no `git add`.

## Changes

| Row | Change | Files |
|---|---|---|
| directory 1 | StaticInput default `In_Prompt` = "Search for households, members or places." (StaticInput.mvc.js S:13-14). Locality_Details keeps its own prompt (TST DOM). | `components/ui/StaticInput/{StaticInput.tsx,README.md,__captures__/v2.html}`; string only: `components/layout/HomeLayout/HomeLayout.test.tsx`, `components/layout/HomeSearchSection/{HomeSearchSection.test.tsx,__captures__/v2.html}`, `pages/CommunityBusinessDetails_CoomingSoon/CommunityBusinessDetails_CoomingSoon.test.tsx` |
| directory 2 | `GetCommunityStatistics`, one call per load. CountryList: JavaScript1 of OnReady starts Action_RefreshData_CommunityStatistics, not awaited (`flow.run`), then Action_RefreshData. HomeFeed: new hook `useHomeFeedReady` (OnReady: IsScreenInitialized, then the refresh unless restored; a failure goes to the flow handler). Mocks: the captured answer (all counts 0). | `api/country/{repository.ts,index.ts,repository.test.ts}`, `pages/CountryList/{mocks.ts,hooks/useCountryList.ts,hooks/useCountryList.test.tsx}`, `pages/HomeFeed/{HomeFeedPage.tsx,hooks/useHomeFeedReady.ts,hooks/useHomeFeedReady.test.tsx}` |
| events R2 | `DetailLayout` prop `hideTitle` (In_IsHideTitle, default false: no `<header>`). MyEntertaining_Embedded: `hideTitle`, no title, Handle_NavBack raises OnNavBack; the page navigates back. Embedded_MyEntertaining: SDK `onNavBack` raises OnNavBack; Action_SetToken (module token, read by `getIdToken`) before InitializeCalendar and in RefreshToken (only while the block lives); ResumeListener on `resume` and `visibilitychange`, removed on OnDestroy. Handle_OpenMap without Label (already so; doc). | `components/layout/DetailLayout/{DetailLayout.tsx,DetailLayout.test.tsx}`, `pages/MyEntertaining/{MyEntertainingPage.tsx,MyEntertaining.test.tsx,hooks/useMyEntertaining.ts,components/MyEntertaining_Embedded.tsx,components/MyEntertaining_Embedded.test.tsx,components/Embedded_MyEntertaining.tsx,components/Embedded_MyEntertaining.test.tsx,components/connect2Entertaining.ts}` |
| household R4 | ComingSoon inline icon (calendar, medium_20, neutral0; ComingSoon.mvc.js:192-203). | `components/ui/ComingSoon/{ComingSoon.tsx,__captures__/v2.html}` |
| household R6 | GetSample_FilterTags always adds "Locality Contacts" (new TST UBTConnect.controller.js has no permission check); the `hasLocalityContacts` plumbing is removed from the state and the hook. Section: container `margin-top-s  margin-x-base` + ComingSoon_V2 slot (block id `$b23` with the LD check on, `$b24` off); BottomBar `$b25`, CommonUI `$b26` as the TST DOM. Hidden Locality_LocalityContacts not built (H-Q4 a). | `pages/Locality_Details/{Locality_DetailsPage.tsx,components/actions.ts,hooks/localityDetailsState.ts,hooks/localityDetailsState.test.ts,hooks/useLocalityDetails.ts,hooks/useLocalityDetails.test.tsx}` |
| household R11 | KebabButtonMenu `inDisableShare` (HasShare = not In_DisableShare). LazyImage `inForceLoadingState` (image hidden, fallback shown). | `components/ui/KebabButtonMenu/{KebabButtonMenu.tsx,KebabButtonMenu.test.tsx}`, `components/ui/LazyImage/{LazyImage.tsx,LazyImage.test.tsx}` |

Files outside the ownership list (needed by the rows, no other package lists them): `api/country/*` (repository
functions; pages never call `callAction`), the four string-only test and capture files of row 1.

## Tests and checks

- New tests: repository (2 calls, no input), useCountryList (1 call not awaited; failure to the flow handler),
  useHomeFeedReady (3), DetailLayout hideTitle, MyEntertaining_Embedded (no header; Handle_NavBack), MyEntertaining
  (calendar onNavBack goes back), Embedded_MyEntertaining (SetToken, onNavBack, ResumeListener), KebabButtonMenu,
  LazyImage, Locality tags (5 tags).
- `tsc --noEmit` clean. ESLint: 0 errors (1 old warning in HomeLayout.test.tsx, rule 4 import). Prettier clean.
  `npm run arch` clean. `npm run dup` clean.
- Vitest on the WP3 folders: 724 passed, 14 failed. Not from WP3:
  - 12 flow-handler tests (`raiseToFlowHandler` is never reached), also in hooks WP3 did not change
    (useLocalityInterchange, useLocalitySubdivisions, useLocalityOneSchoolGlobal, useLocalityHouseholdList,
    useLocalityDetails, useCountryList error cases). Another package's work in progress breaks the flow-handler path.
    The new WP3 test "a failed GetCommunityStatistics goes to the flow handler" fails for the same cause.
  - HomeFeed.test "services card and latest updates": the update feed rows changed (WP2).

## Parity (after the last change, dev server 5174)

| Route | Before (drift table) | After | State |
|---|---|---|---|
| HomeFeed | 25 | 0 | clean |
| CommunityBusinessDetails_CoomingSoon | 4 | 0 | clean |
| CountryList | 4 | 0 | clean |
| MyEntertaining | 12 | 0 | clean |
| OneSchoolGlobalDetails | 20 | 0 | clean |
| HouseholdDetails | 17 | 0 | clean |
| Locality_Details | 119 | 2 states with differences | the differences shown are layout rows of the Locality_Subdivisions image-card placeholders (390×26 vs 390×260) in the tag-suppermeetings state: class C (masked image ids, household R8-R10, WP1) |

Other packages' changes also count in "after" (WP1, WP2, WP4, WP8 ran at the same time).

## Not done (stopped: another package's files or no source)

- EntitiesCarousel RemoveCarouselOnResizeHandler: needs `components/ui/Carousel/provider.ts` and
  `components/ui/lib/actions.ts` (the provider's window-resize handler is not reachable from the block).
- HouseholdDetails_Block: `In_DisableShare = not GetHousehold.IsVisible` and the `mobileDirectoryHouseholdGallery`
  check (default off) are in `containers/HouseholdDetails` (WP4 area). UBT_LazyImage pass-through of
  `In_ForceLoadingState` is not in WP3 files either.
- ComingSoon_V2: no captured source (not in any `analysis/sources`). ComingSoon stands in, in a NotCaptured marker.

## Questions (options, recommendation)

- **Q1** HomeFeed `GetCommunityStatistics` mock handler is in `pages/CountryList/mocks.ts` (HomeFeed mocks belong to
  WP2). (a) Move it to `pages/HomeFeed/mocks.ts` after WP2; (b) keep. Recommendation: a.
- **Q2** ComingSoon_V2 source. (a) Static read-only GET of `UBTConnectLibrary.ConnectPatterns.ComingSoon_V2.mvc.js`
  from TST (standing approval), then port `components/ui/ComingSoon_V2`; (b) keep the ComingSoon stand-in.
  Recommendation: a.
- **Q3** RemoveCarouselOnResizeHandler. (a) Add `removeCarouselOnResizeHandler(widgetId)` to the Carousel API and call
  it last in Handler_EntitiesCarousel_Initialized; (b) debt row. Recommendation: a (owner of components/ui/Carousel).
- **Q4** HouseholdDetails_Block wiring (DisableShare, gallery check default off). (a) Do it after WP4 in
  `containers/HouseholdDetails`; (b) debt row. Recommendation: a.
- **Q5** MyEntertaining has no in-app back control now (TST hides the header; the real calendar calls onNavBack). The
  mock page `public/mock-embeds/my-entertaining.html` has no back control. (a) Add one that posts a message, and the
  stand-in calls `onNavBack`; (b) leave (browser or device back only). Recommendation: a.
- **Q6** `connect-icon-calendar` is a local constant in ComingSoon. (a) Add `UBT_Icons.Calendar` to
  `lib/ubtConnectLibrary/staticEntities.ts`; (b) keep. Recommendation: a.

Tool calls: 81.
