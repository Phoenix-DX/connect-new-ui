# Screen spec: MyBookmarks

Sources: `pack.md`; compiled code under `analysis/sources/pretty/` (S = `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc.js`,
W = `UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc.js`, C = `…MyBookmarks_Card.mvc.js`, A = `…MyBookmarks_Album.mvc.js`,
M = `Connect2_MyBookmarks_MUI.controller.js`), NetworkWarning from `capture/survey-UBTConnect.json` →
`sources["Connect2_LegacyShared.Widgets.NetworkWarning.mvc.js"]` (NW).

## 0. Summary

Bookmarks tab (D2(a), user 2026-10-14: C2NewBookmarks off, BookmarkNote off; the tab always opens MyBookmarks).
`/UBTConnect/MyBookmarks`, no inputs. Wrapper W renders ScreenBlock_MyBookmarks (`$b1`) with BottomBarMenu
(`$b2`, isRootPage True, ActiveItem Bookmarks; W:214-240) in its BottomBar placeholder, then CommonUI_InsideLayout (`$b3`).
The block shows, in Layout (legacy), a back arrow (MenuIcon__UpdatedOSUI MenuAction Menu, S:224-243), the title
"My Bookmarks" (S:244-259) and one card per non-empty group (Contacts, Locations, Entities; S:266-490), each with
"My <Group>", "View All" (TotalCount >= 1), an album of up to CountSize bookmark photos with titles (DEPRECATED_GalleryV2,
List) and "Recent"; then Dialog_AccessRestrictedAction_Legacy "FreeSubscriptionAlert". Empty → NoBookmarks; fetch
error → NetworkWarning; first fetch → Spinner.

## 1. Entry and routing
Route `/UBTConnect/MyBookmarks` (routes.generated.ts). Navigations (W:285-560): HouseholdCarousel(In_StartingHouseholdId)
when C2EnableCarousel (TST on) else HouseholdDetails(HouseholdId); BookmarksByGroup(BookmarkGroup);
SupperMeeting_Details(In_SubdivsionId); OneSchoolGlobalDetails(In_OneSchoolGlobalId) when In_ObjectType = Connect_Entity
OneSchool Global, else CommunityBusinessDetails_CoomingSoon(In_CommunityBusinessId); Locality_Details(LocalityId).

## 2. Component tree
`index.tsx` (W) → `components/ScreenBlock_MyBookmarks.tsx` (S) → shared Layout, MenuIcon__UpdatedOSUI, NoBookmarks,
Spinner, Dialog_AccessRestrictedAction_Legacy; own `components/MyBookmarks_Card.tsx` (C), `MyBookmarks_Album.tsx`
(A, DEPRECATED_GalleryV2 + OSList), `NetworkWarning.tsx` (NW, catalog "own", uses shared osui Animate).

## 3. DOM and markup contract
`analysis/dom/default.html` (cards :55-174, dialog :176-189), `loading.html`/`offline.html` :72-97 (NetworkWarning).
Card ids `b1-b3`/`b1-b5`/`b1-b7` (Contacts/Locations/Entities aliases 3/5/7), albums `b1-b4`/`b1-b6`/`b1-b8`, dialog
`b1-FreeSubscriptionAlert` scope `b1-b9`, NetworkWarning `b1-$b11`, Spinner `b1-$b12`, NoBookmarks `b1-$b10` (S aliases).

## 5. Data model
GetGroupSummaries outputs (S:9-34): Bookmarks_Contacts / _Locations / _CommunityBusinesses (Group, TotalCount,
Bookmarks list), Bookmarks_AllContacts / AllLocations / AllCommunityBusiness. Block variables (S:40-80): HasBookmarks,
IsFetchingBookmarks, CountSize 4, Contacts, Locations, CommunityBusinesses, AllContacts, AllLocations,
AllCommunityBusiness, IsNavigationFromHistory, HasNetworkError — sent as screen variables with the data action.

## 6. API calls
- `DataActionGetGroupSummaries` (owner MyBookmarksFlow/ScreenBlock_MyBookmarks): on demand only (dataFetchDependencies
  -1, S:662-664), refreshed by OnReady → RefreshBookmarkData, NetworkWarning TryAgain, and the "not found" branch of a
  click. Mock: fictional (contract x-mock-source fictional), 4 contacts (1 without image) and 4 locations, TotalCount 4,
  no entities (capture counts); AllContacts = the 4 contacts, AllLocations 4 default records (calls.md:173-190).
- `ActionGetBookmarkById` (click): not in the contract → CR-MyBookmarks-1 (Q1). Other load calls are the shell's app start.

## 7. State and lifecycle
OnInitialize (S:1250-1275): IsNavigationFromHistory = view restored from cache (P-BACK, `useWasRestoredFromCache`,
block variables in `useViewState`). OnReady (S:950-975): not from history → ClearLocalLists (S:752-790); then
RefreshBookmarkData (S:826-945): IsFetchingBookmarks True, refresh; OnAfterFetch (S:703-750) copies the outputs,
IsFetchingBookmarks False, HasBookmarks = any group non-empty, HasNetworkError False.

## 8. Render logic
Content (S:264-612): (not IsFetchingBookmarks or IsNavigationFromHistory) → (not HasNetworkError → (HasBookmarks →
cards of the non-empty groups + dialog | NoBookmarks with the two texts) | NetworkWarning) | Spinner(ShowLoader =
IsFetchingBookmarks). Card (C:150-230): "My " + ObjectGroup; "View All" if ShowViewAll. Album (A:157-300): GalleryV2
GutterSize Space small; columns = count when 1..3 else 2 (ItemInPhone as text); List `list list-group`, animateItems,
disable-virtualization; item `position-relative` (click), Image class `bookmark-card-image` (+ ` bookmark-card-image-household`
for Contacts), url = Image, else placeholder by Group / IsDeceased / ObjectType / Title; data-error-placeholder-src the same
placeholder; title "Information not available" when empty.

## 9. Interactions and navigation
- "My <Group>" and "View All" → NavigateTo_ViewAll(ObjectGroup) → BookmarksByGroup(BookmarkGroup).
- Album item → NavigateTo_BookmarkedItem(Id, row, ObjectType) (S:980-1140): GetBookmarkById; Contact → position in
  AllContacts; not found → toast "That bookmark isn’t available" + refresh; RecordNotAvailable →
  SendBookmarkedHiddenFeedbackMessage; disabled → App_Subscription_ShowUpgradePopUp; Contact → preload + Households;
  Locality → Locality; Subdivision → Subdivision; Campus&Co / OneSchool Global → preload + CommunityBusinessCarousel.
  Until CR-MyBookmarks-1 the click does nothing (Q1).
- NetworkWarning "Try again" → RefreshBookmarkData.

## 11. Error handling and feedback
RefreshBookmarkData (S:845-930): CommunicationException → IsFetching False, HasNetworkError True, toast "No internet
connection. Please check your network setting and try again…" when the message is "Request failed with an error", else the
message; NotRegistered → re-raised; other non-system → IsFetching False; "distributed transaction" → UserException1
raised; timeout / request failed → HasNetworkError True + toast; else toast only.

## 13a. Feature flags
- C2EnableCarousel (default-only on, user 2026-10-14): `useFlagOn('C2EnableCarousel')` in the wrapper (W:306-309).
- mobileDirectoryBookmarkNote (default-only off): GetBookmarkById picks the legacy server action (M GetBookmarkById);
  the New_GetBookmarkById branch is not built.
- C2NewBookmarks (default-only off): decides that the tab opens this route (shell); nothing in this route reads it.
- C2EnableC1DirectoryView, connect_LaunchDarkly_PermissionCheck, App_PIN_BiometricEnabled: shell / not flags.

## 14. Unclear points
- Q3 (fact): whether GetGroupSummaries returns C2 bookmarks (AddBookmark2); conservative: no, the route reads only its
  legacy collection.
- AllContacts / AllLocations counts not captured: fictional (4 each).

## 16. Decisions to confirm
- Q1 → A (pending orchestrator answer): CR-MyBookmarks-1, click inert until applied.
- Q2 → A (pending): CR-MyBookmarks-2, route-local collection until applied.
- Q4 → A (pending): loading-state exemption (proposed-exemptions.json).
- Q5 → A (pending): network error for GetGroupSummaries in the error scenario.
- Change requests: CR-MyBookmarks-1, CR-MyBookmarks-2.

## 17. Patterns used
P-STATES, P-DATA, P-CALLS, P-MOCKS, P-MUTATION (route collection), P-BACK, P-PARAMS, P-FLAGS, P-LIST, P-OSUI, P-DIALOG.
