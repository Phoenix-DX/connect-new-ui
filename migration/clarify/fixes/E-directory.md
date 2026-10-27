# Fix group E: directory

Areas: `app/src/pages/Locality_Details/`, `app/src/pages/BrowseDirectory/`, `app/src/pages/Search/`,
`app/src/pages/Photobook/`, `app/src/containers/EntityDetailsActions/`. The group uses the `useViewState` and
`useWasRestoredFromCache` API of `platform/navigation` and the local bookmarks API of `platform/storage/localEntities`
without changes to them. Result: 11 findings fixed, 0 findings open.

## Directory_Locality F1: Placeholder_Icons of the Locality_Details sub-header

- TST evidence: `UBTConnect.Directory_Locality.Locality_Details.mvc.js:657-666`. The Explore icon shows when
  `HeaderIsScrolled`, then when `GetHasMapsEnabled`.
- Files changed: `app/src/pages/Locality_Details/Locality_DetailsPage.tsx:151`.
- What changed: the condition is `HeaderIsScrolled and C2EnableMaps` (it was `not HeaderIsScrolled`). C2EnableMaps is
  off on TST, so the icon stays hidden in both today.
- Tests: `app/src/pages/Locality_Details/Locality_Details.test.tsx` "Placeholder_Icons of the sub-header" (the test
  raises OnHeaderScrolled through a spy on `setMainScroll`, as `MainLayout.test.tsx` does).
- Proposed verdict: row Directory_Locality-150 `match`.

## Directory_Locality F2: OnAfterFetch_GetLocalityHouseholds_Bookmarks, C2 branch

- TST evidence: `UBTConnect.Directory_Locality.Locality_Households_HouseholdList.mvc.js:454-515`. With
  GetHasNewBookmarks, each row gets `IsBookmarked = GetLocal_Bookmark_C2(BookmarkCategory.Household, HouseholdId)`.
  `UBTConnect.controller.js:9270-9310`: GetLocal_Bookmark_C2 calls `GetLocalBookmarkByObjectId(ObjectId)` and returns
  `Id <> NullIdentifier`. The flow does not read ObjectType.
- Files changed:
  - `app/src/pages/Locality_Details/components/actions.ts:55-62`: new `getLocal_Bookmark_C2`, on
    `getLocalBookmarkByObjectId` of the local bookmarks API.
  - `app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts:78-86`: the loop reads `getLocal_Bookmark_C2`
    when `hasNewBookmarks` is on and the legacy `getLocal_Bookmark` when it is off. Before, the on branch kept the
    fetched IsBookmarked.
- What changed: the hook has the C2 branch now. The flag stays off in React by decision Bookmarks Q1 a (row 271), so the
  screen runs the legacy branch today, as before.
- Tests: new `app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.test.tsx` (on: the C2 store gives the
  value; off: the legacy store gives the value).
- Proposed verdict: row Directory_Locality-203 `match`. Row 271 stays `differs` (recorded decision).

## Directory_Locality F3: BrowseDirectory StatisticsListOnParametersChhanged

- TST evidence: `UBTConnect.Directory_Locality.BrowseDirectory.mvc.js:1025-1040`. When `Local_MapId <> ""`, the
  handler calls Map_InvalidateSize only. Map_FitBoundsAuto is in Action_InvalidateMapSize (`:971`) only.
- Files changed: `app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts:153-157` (and the doc comment at `:45`).
- What changed: the list event calls `map_InvalidateSize` when the map exists. It does not call Action_InvalidateMapSize.
- Tests: `app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.test.tsx` "Action_InvalidateMapSize after
  OnInitialized; the list OnParametersChangedEv only Map_InvalidateSize" (FitBoundsAuto stays at 1 call).
- Proposed verdict: row Directory_Locality-048 `match`.

## Directory_Search F4: default of In_SearchTargetId

- TST evidence: `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js:121-122`. The default is
  `Type_SearchTarget.Global` ("Global", `migration/knowledge/static-entities-tst.json`). The Search screen gives no
  inputs.
- Files changed: `app/src/pages/Search/hooks/useSearch.ts:56-62`.
- What changed: `SEARCH_SCREEN_INPUTS.inSearchTargetId` is `Type_SearchTarget.Global`. The recent records store
  "Global" and the search call sends `In_SearchTargetId: "Global"` (`app/src/api/search/mapper.ts:85`, not changed).
- Tests: `app/src/pages/Search/hooks/useSearch.test.tsx` (the request body has `In_SearchTargetId: 'Global'`).
- Proposed verdict: row Directory_Search-013 `match`.

## Directory_Search F5: UBT_LazyImage width in the recent gallery

- TST evidence: `UBTConnect.Directory_Search.ScreenBlock_Search.mvc.js:800-803`. ImageSize Height ExtraSmall_32, Width
  Square for a Member, else NullTextIdentifier.
- Files changed: `app/src/pages/Search/components/RecentSearch.tsx:113-118`.
- What changed: the image gets `Width: Square` for a Member and "" for the other entity types.
- Tests: new `app/src/pages/Search/components/RecentSearch.test.tsx` (only the Member avatar has
  `ubt-lazy-image--width-square`).
- Proposed verdict: row Directory_Search-063 `match` for Width. In_ForceLoadingState is DEV only (report section 6.1).

## Directory_CommonBlocks F1: Directory_EntityDetailsActions OnReady CheckRestored

- TST evidence: `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js:1678-1689` and JS
  `:2430-2432`. FromCache = `wasCurrentViewRestoredFromCache()`. The JS sets no FromHistory (a comment line), so it is always False. When
  FromCache, OnReady ends before the set-up and before Action_UpdateContactDetails (`:1854`).
- Files changed:
  - `app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts:47-91`: the variables in the view cache. The
    scope of an instance is id, EntityType and EntityId.
  - `useEntityDetailsActions.ts:154-199`: OnReady ends on a restored view. `:201-222`: no contact fetch for the
    restored parameters.
  - `entityDetailsActionsState.ts:72-73`: doc comment.
- What changed: the block variables (menu options, isLoaded, EnableOptions, FetchContactDetails and its status,
  FetchNotes, the bookmark variables) are `useViewState` values. A view restored with `isLoaded` True keeps them and
  makes no call. A restored block whose saved isLoaded is False runs the set-up again (F40). The popup flags
  (ShowCallPopUp, ShowEmailPopUp, ShowSharePopup, ShowNotesSheet) stay outside the view cache, as before.
- Tests: `app/src/pages/Locality_Details/Locality_Details.test.tsx` "a back navigation restores the screen and the
  selected tag …": after Back, the test expects no call. Before, the test let the two FetchContactDetails calls pass.
- Proposed verdict: row Directory_CommonBlocks-076 `match`.

## Directory_CommonBlocks F2: OnParametersChanged fetches the contact details

- TST evidence: `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js:1157-1171`. OnParametersChanged
  calls Action_UpdateContactDetails on every input change.
- Files changed: `app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts:201-262`.
- What changed: the fetch effect depends on a key of all the inputs by value (IsEnabled, EntityType, EntityId,
  ContactPopUp_OverrideOptions, EnableOptions, useViewDetails, EntityExtraDataJSON). Before, only EntityId and
  isFetchContacts started a new fetch.
- Tests: new `app/src/containers/EntityDetailsActions/useEntityDetailsActions.test.tsx` "OnParametersChanged fetches
  the contact details on every input change, compared by value".
- Proposed verdict: row Directory_CommonBlocks-091 `match`.

## Directory_CommonBlocks F3: handlers of Action_AsyncRefresh_ContactDetails

- TST evidence: `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js:1196-1262`. NotRegistered
  raises the typed exception without HandleFetchError. CommunicationException and AllExceptions (not a system
  exception) run HandleFetchError, then raise. The flow throws a system exception again as it is.
- Files changed: `app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts:240-258`.
- What changed: HandleFetchError (all the actions disabled) runs only for a CommunicationException or a non-system
  exception that is not NotRegistered. The error then goes to `raiseToFlowHandler`, as before.
- Tests: `app/src/containers/EntityDetailsActions/useEntityDetailsActions.test.tsx` (4 cases: NotRegistered, system
  exception, CommunicationException, user exception).
- Proposed verdict: row Directory_CommonBlocks-102 `match`.

## Directory_Photobook F1: GetLocalityHouseholdIds on a restored view

- TST evidence: `UBTConnect.Directory_Photobook.Photobook.mvc.js:500-515` (OnInitialize sets nothing on a restored
  view) and `:368-386` (the data action, Fetch At start, then OnAfterFetch). Pattern P-BACK: the original refreshes
  in the background.
- Files changed: `app/src/pages/Photobook/hooks/usePhotobook.ts:22-46`.
- What changed: OnReady always calls `fetchAtStart()`. A restored view shows its saved list at once, without the
  loading state, and the call refreshes it. OnAfterFetch sets the list, SelectedHousehold.Position and IsLoading again.
- Tests: `app/src/pages/Photobook/Photobook.test.tsx`, test "a restored view shows its saved households at once and
  refreshes them in the background (P-BACK)". The test expects 2 calls. The second call has `IsLoading: false`, and
  the loading container does not show.
- Proposed verdict: row Directory_Photobook-006 `match`.

## Directory_Photobook F2: replay check of Carousel_OnSlideMoved

- TST evidence: `UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1227`. "Is Replaying?" is
  `IsReplaying and CurrentPosition = 0`.
- Files changed: `app/src/pages/Photobook/hooks/photobookState.ts:42-54` (new `slideMovedStep`),
  `app/src/pages/Photobook/components/Photobook_Carousel.tsx:142-153` (the handler uses it).
- What changed: a move to a position other than 0 while it replays does not start the autoplay. The last-position
  check runs for it.
- Tests: `app/src/pages/Photobook/hooks/photobookState.test.ts` "Carousel_OnSlideMoved" (2 tests).
- Proposed verdict: rows Directory_Photobook-079 and Directory_Photobook-198 `match`.

## Directory_Household_Blocks F1: Household_Card OnReady on a restored view

- TST evidence: `UBTConnect.Directory_Household_Blocks.Household_Card.mvc.js:478-490` and JS `:622-624`. OnReady ends
  when `wasCurrentViewRestoredFromCache()` is True.
- Files changed: `app/src/pages/Locality_Details/hooks/useHouseholdCardMembers.ts:28-50`.
- What changed: GetMembers is a `useViewState` value (scope `Household_Card#<HouseholdId>`). A card restored with its
  members keeps them and makes no call. A restored card without saved members fetches (F40). A later change of the
  Household record fetches again, as OnParametersChanged.
- Tests: `app/src/pages/Locality_Details/Locality_Details.test.tsx` "a back navigation keeps the member avatars of the
  household cards without a call".
- Proposed verdict: row Directory_Household_Blocks-058 `match`.

## Notes for the orchestrator

- After Back, UBT_LazyImage of the restored avatars calls `ActionGetSignedImagesInBulk` again. That is a shared
  component (`components/ui/EntityLazyImage`), outside group E. The Household_Card test filters on `Household_Card/`.
- `npm run typecheck` shows errors only in files of other groups (`pages/Updates_SingleList/mocks.ts` and others that
  change in parallel). The files of group E have no type error.
