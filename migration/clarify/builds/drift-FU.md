# Drift wave follow-ups (drift-FU, 2026-10-29)

The recommendations of `drift-WP3.md` (Q1 to Q6), `drift-WP7.md` (Q2, Q4) and `drift-WP4.md` (B4), applied as
reversible changes. Source: the live TST code of 2026-10-27 (re-capture sources), the static TST file below. No MCP.
Edit method: Edit/Write and one-off exact-match Python replacements (each old string asserted once), then
`prettier --write` on the changed files. No commit, no `git add`. Notifications files not touched.

## Changes

| # | Change | Files |
|---|---|---|
| 1 | HomeFeed `DataActionGetCommunityStatistics` mock handler moved from CountryList to HomeFeed (same captured answer, every count 0) | `app/src/pages/HomeFeed/mocks.ts`, `app/src/pages/CountryList/mocks.ts` |
| 2 | Static GET of `UBTConnectLibrary.ConnectPatterns.ComingSoon_V2.mvc.js?_pryshf5STz2dS4q69HZtw` (moduleinfo hash; HTTP 200, 10 792 B; standing approval). Port `ComingSoon_V2`: container `comingsoon-card` > CircleButton_IconPrimary (CalendarFill, Neutral0 on CyanDark, no label) + CustomText "Coming Soon" (padding top Base; Neutral9, Base, SemiBold). Locality_Details Locality Contacts section: `ComingSoon_V2` replaces the ComingSoon stand-in and its NotCaptured marker (ids `b23` / `b24` as before) | new `app/src/components/ui/ComingSoon_V2/{ComingSoon_V2.tsx,ComingSoon_V2.test.tsx,index.ts,README.md}`, `app/src/pages/Locality_Details/Locality_DetailsPage.tsx`, new `migration/runtime-sources/UBTConnectLibrary.ConnectPatterns.ComingSoon_V2.mvc.js`, row in `migration/knowledge/runtime-sources.md` |
| 3 | `removeCarouselOnResizeHandler(widgetId)` (RemoveCarouselOnResizeHandlerJS: GetCarouselItemById, then remove the WindowResize handler; unknown id: nothing). Provider `removeOnResizeHandler()` removes the window `resize` listener of `build` and its pending debounce. Called last in Handler_EntitiesCarousel_Initialized, as TST (EntitiesCarousel.mvc.js:641) | `app/src/components/ui/lib/actions.ts`, `app/src/components/ui/Carousel/{provider.ts,Carousel.test.tsx}`, `app/src/components/directory/EntitiesCarousel/{EntitiesCarousel.tsx,EntitiesCarousel.test.tsx}` |
| 4 | HouseholdDetails_Block: KebabButtonMenu `inDisableShare={!isVisible}` (mvc.js:560). LD check `mobileDirectoryHouseholdGallery` (mvc.js:1298-1301): on = nothing after the timeline list, off (default) = the bordered ComingSoon box; `HouseholdDetailsFlags.hasHouseholdGallery`, read in `useHouseholdDetailsFlags`, passed container > view > HouseholdTimelinePhotos. Registry key added (default false, source server) with its OutSystems name. UBT_LazyImage (`EntityLazyImage`) input `inForceLoadingState` (UBT_LazyImage.mvc.js:91-93, default False) passed to LazyImage (:308); it is part of the OnParametersChanged key | `app/src/containers/HouseholdDetails/{HouseholdDetailsContainer.tsx,hooks/useHouseholdDetails.ts,hooks/useHouseholdDetails.test.tsx}`, `app/src/components/household/{HouseholdTags/HouseholdTags.tsx,HouseholdTimelinePhotos/HouseholdTimelinePhotos.tsx,HouseholdDetailsView/HouseholdDetailsView.tsx,HouseholdDetailsView/HouseholdDetailsView.test.tsx}`, `app/src/platform/flags/{registry.ts,registry.test.ts}`, `app/src/legacy/os/flagNames.ts`, `app/src/components/ui/EntityLazyImage/{EntityLazyImage.tsx,EntityLazyImage.test.tsx}` |
| 5 | Mock embed page: a "‹ Back" control posts `{type: 'embed:nav-back'}` to the parent. The stand-in SDK listens (same origin, source = its iframe) and calls `onNavBack`; the listener goes on `destroy` | `app/public/mock-embeds/my-entertaining.html`, `app/src/pages/MyEntertaining/components/{connect2Entertaining.ts,Embedded_MyEntertaining.test.tsx}` |
| 6 | `UBT_Icons.Calendar` (`connect-icon-calendar`) and `UBT_Icons.CalendarFill` (`connect-icon-calendar_fill`), TST values (`static-entities-tst.json`). ComingSoon uses `UBT_Icons.Calendar`; the local constant is gone | `app/src/lib/ubtConnectLibrary/staticEntities.ts`, `app/src/components/ui/ComingSoon/ComingSoon.tsx` |
| 7 | Barrel exports `deleteConnectSearch_RecentClickedResults` and `entityService`; `useSearch.ts` and `useBookmarks.ts` import from `@/platform/storage/localEntities` (no deep import left in pages) | `app/src/platform/storage/localEntities/index.ts`, `app/src/pages/Search/hooks/useSearch.ts`, `app/src/pages/Bookmarks/hooks/useBookmarks.ts` |
| 8 | `TextOptions.IsOverflowEllipsis` (model.js:728) adds `ubt-custom-text-ellipsis` last in GetClasses_Text (controller.js:4859-4867, FormatClasses6). Search: the recent term text sets it (S:979-983); the recent clicked UBT_LazyImage gets `inForceLoadingState={isRecentClickedLoading}` (S:832) | `app/src/lib/ubtConnectLibrary/{structures.ts,actions.ts,actions.test.ts}`, `app/src/pages/Search/components/{RecentSearch.tsx,RecentSearch.test.tsx}` |
| 9 | B4 marked "**Fixed upstream on TST 2026-10-27; React follows.**" (evidence: `drift-WP4.md` R2, R3); "Reproduced in" says it is not reproduced since the drift wave; one intro sentence says how such a row is marked. Prettier re-padded the table (whitespace only in other rows) | `app/docs/known-original-bugs.md` |

Files outside the named items: `components/household/*` (the view of HouseholdDetails_Block holds the kebab menu and
the gallery box), `platform/flags/registry(.test).ts` and `legacy/os/flagNames.ts` (the new flag key).

## Tests and checks

- New tests: ComingSoon_V2 (2), GetClasses_Text ellipsis, Carousel RemoveCarouselOnResizeHandler, EntitiesCarousel
  (called last, after the last SetSplideEvent), RecentSearch (force loading, ellipsis), EntityLazyImage (pass-through),
  HouseholdDetailsView (DisableShare, gallery flag), registry (two added flags), Embedded_MyEntertaining (nav-back).
  Items 2 and 3 ran red first; for items 4, 5 and 8 the tests were written with the change.
- `tsc --noEmit` clean. ESLint and Prettier clean on the changed files. `npm run arch`: no violations.
  `npm run dup`: exit 0, no clone in the changed files.
- Vitest on the touched folders (71 files): 481 passed, 1 failed, not from this package:
  `containers/HouseholdDetails/HouseholdDetailsContainer.test.tsx` V3 (capture v3 "fetched, bookmarked") misses
  `ubt-image-card__bookmarked`. The WP4 C2 store seed has household 42438 not bookmarked (`drift-WP4.md` R2 (B)).

## Parity (dev server 5174, after the last change)

| Route | Before | After | State |
|---|---|---|---|
| Locality_Details | 2 states: tag-oneschoolglobal layout 22, tag-suppermeetings layout 20 | same | class C (image-card placeholders 390×26 vs 390×260, masked image ids; WP1, `drift-WP3.md`) |
| HouseholdCarousel | default class 1 + layout 40; offline 329 (structure 56, class 16, text 8, style 4, layout 204, position 40, pixel 1) | same | not from this package: the household block of the offline carousel (`VisibleAboutTab`, TagToggle, title rows); owner per the drift table (WP1) |
| HouseholdDetails, OneSchoolGlobalDetails, HomeFeed, CountryList, MyEntertaining, Search | clean | clean | clean |

No count went up. The Locality Contacts tag, the recent search rows and the gallery flag are not capture states.

## Questions (options, recommendation)

- **FU-Q1 Flag decision `mobileDirectoryHouseholdGallery`.** It is in the registry (default off), not in
  `migration/flags.json` or `flags.generated.json`, like mobileDirectoryLocalityContacts. (a) You decide it with
  `flags.py decide` (default off); (b) keep it as a registry default only. Recommendation: a (the flag rule needs your
  confirmation).
- **FU-Q2 HouseholdDetails container V3 test.** (a) WP4 owner sets the story's bookmark seed to bookmarked for that
  story; (b) the test expects the new unbookmarked seed and the capture note says so. Recommendation: a (the capture
  shows a bookmarked card).
- **FU-Q3 ComingSoon_V2 version.** The GET used the moduleinfo hash of 2026-10-15; the query only busts the cache.
  (a) Keep; (b) re-fetch with the hash of a new moduleinfo. Recommendation: a (the block matches the live Locality_Details
  call: no inputs).

Tool calls: about 72.
