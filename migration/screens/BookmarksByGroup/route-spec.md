# Screen spec: BookmarksByGroup

Sources: `analysis/sources/pretty/` — S = `UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc.js`,
B = `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc.js`; raw module controllers
(`analysis/sources/raw/Connect2_MyBookmarks_MUI.controller.js` = M, `Connect2_LegacyShared.controller.js` = C, prettified).

## 0. Summary

This screen shows the user's bookmarks of one group (route input `BookmarkGroup`: Contacts, Locations, Entities).
The user reaches it from MyBookmarks. It uses the legacy layout with a back arrow and the title "My " + group (B:237-276).

It has one list per group (B:294-1490). When the list is empty, it shows NoBookmarks / MessageList_NoResults.
While the screen fetches the bookmarks, it shows a Spinner (B:1576-1677). The bottom bar has Bookmarks active (S view).

Each row has an ellipsis menu (Unmark, Share). The screen follows the TST branch only (D2(a), user 2026-10-14: C2NewBookmarks off,
mobileDirectoryBookmarkNote off). Captured: Contacts, states default / loading / offline (`analysis/states.json`).

## 1. Entry and routing

`/UBTConnect/BookmarksByGroup?BookmarkGroup=<group>` (S model: BookmarkGroup Text ""). `api.ts readInputs`.

## 2. Component tree

Screen `index.tsx` → `ScreenBlock_BookmarkGroup` ($b1) [own] → Layout (shared) with MenuIcon__UpdatedOSUI, OSList
rows (ScrollAnchor + Result_Item_Image shared / Result_Item_Badge [own] + ItemOptionsMenu [own] → Widgets_PopupMenu
[own]).
The tree continues with BookmarkNoteAddEdit / BookmarkNoteDelete [own, shell ActionConfirmationDialog], Dialog_AccessRestrictedAction_Legacy,
NoBookmarks, MessageList_NoResults, Spinner, BackNavigationHandler (shared).

The tree also has ShareSheet + ShareableObject_Generic (shared). The screen supplies BottomBarMenu ($b2) and CommonUI_InsideLayout ($b3).

## 2a. Architecture diagram

```
index.tsx ──inputs──▶ ScreenBlock_BookmarkGroup ──api.ts──▶ callAction(Connect2_MyBookmarks_MUI …) ──MSW──▶ mocks.ts (collection)
     ▲ NavigateTo_* events            │ components/actions.ts (MyBookmarks memory cache, feedback, audit log)
     └──────────── useOsNavigate ◀────┘
```

## 3. DOM and markup contract

`analysis/dom/default.html` (pack "Markup") has this structure:
1. `bookmark-list-cont` > `list list-group OSFillParent` (data-virtualization-
disabled, id `b1-List_Contacts`) > `bookmark-list-item` rows (margin-bottom var(--space-base) except the last, B:351-355).
2. The two note dialogs.
3. FreeSubscriptionAlert, outside the container (dom:463-495).

The markup of the menu widget is `dx-popup-menu … backwards-compatibility` with anchor, container and backdrop (dom:99-115; PopupMenu view :163-249).

## 4. Visual specification

Original CSS only; inline styles only as captured: tag `color:#000; font-size:0.8em` (dom:93), row margin, cursor.
Not captured, left out (rule 21, consistency_check NO-INLINE-COLOR): the Supper Meeting main-hall title/tag colours
(B:704-760), rendered with a NotCaptured marker; Result_Item_Badge diameter/colour styles (survey view) are kept as
compiled (no colour property other than the badge background of the Locations row).

## 5. Data model

`types.ts`: BookmarkItem (Id, ObjectId, ObjectType, Title, Image, Note, RecordDisabled, RecordNotAvailable, DetailsJson
subset), BookmarksByGroupResult (Results, Total, WasSearched), BookmarkNote.

## 6. API calls

| Call | When | Adapter |
|---|---|---|
| DataActionGetAllBookmarksByGroup (on demand) | OnReady → RefreshBookmarkData (B:2408-2442); not-found click | `getAllBookmarksByGroup` (scalar block variables) |
| ActionDeleteBookmarkByBookmarkId | Unmark (B:3131-3211) | `deleteBookmarkByBookmarkId` (mock write) |
| ActionNew_UpdateBookmarkNote | note save (B:3213-3273) | `new_UpdateBookmarkNote` (mock write) |
| ActionGetBookmarkById | row click (M:17-142) | `getBookmarkById` (contract call; CR-BookmarksByGroup-1 applied, foundation F7b, 2026-10-15) [CR-BookmarksByGroup-1.md] |
App-start calls (SynchAppContext … CacheableHouseholds) come from the shell (calls.json).

## 7. State and lifecycle

OnInitialize: IsFromNavigationHistory = WasCurrentViewRestoredFromCache (B:3383); restored → GetCachedMyBookmarks
(B:2894-2957); OnReady: RefreshBookmarkData(IsFromNavigationHistory) unless restored. IsFetchingBookmarks starts False.

## 8. Render logic

Content when `!IsFetching || IsFromNavigationHistory`: list when items, else NoBookmarks (IsToDisplay = empty and not
fetching) unless WasSearched (MessageList_NoResults); otherwise Spinner (B:1576-1677). Contacts row: description when
ChildrenNames, tag when locality or country, image placeholder when deceased without image, title fallback
"Information not available" (B:379-480). Menu: Unmark; Share when not deceased and available (C2ExtendedShare on →
"Share"). BookmarkNote placeholder only with mobileDirectoryBookmarkNote (off).

## 9. Interactions and navigation

- Unmark → delete.
  - Success: remove row, "Removed from your Bookmarks" (success), total − 1, local delete (CR-2), PutCachedMyBookmarks.
  - Failure: "Bookmark could not be removed. Please try again later." (info).
- Share → "Coming soon" without share type, UpgradeSubscription when disabled, else ShareSheet open (B:2174-2308).
- Row click → CR-1 (Q1).
- Navigation after GetBookmarkById (S:298-600):
  - HouseholdCarousel(In_StartingHouseholdId, preload) or HouseholdDetails(HouseholdId), by C2EnableCarousel
  - OneSchoolGlobalDetails / CommunityBusinessDetails_CoomingSoon
  - Locality_Details(LocalityId)
  - SupperMeeting_Details(In_SubdivsionId)
- Back: Contacts → SetPreloadObject(BookmarkedItems) (B:3078-3129).

## 10. Sequence diagrams

```
OnReady → IsFetching=True → GetAllBookmarksByGroup → OnAfterFetch (items, total, IsFetching=False, PutCached)
                                     └─ error (non-system) → IsFetching=False, SearchString="", toast(message, Error)
```

## 11. Error handling and feedback

AllExceptions of RefreshBookmarkData → error toast with the exception text (loading: "The connection has timed out",
offline: "Request failed with an error"). Other server errors → flow handler.

## 12. Strings

- "My "
- "Information not available"
- "You'll find your / bookmarks here"
- "You can get back to a page that's /
important to you by adding a bookmark "
- "Make sure that all words are spelled correctly."
- "Try different keyword."
- "Unmark", "Bookmark", "Share", "Share to Connect", "Coming soon"
- "That bookmark isn’t available"
- note dialog texts

## 13. Accessibility, platform and security notes

Web branch only: CheckSocialSharingPlugin unavailable ("Share to others..." never shown). Delete/update are writes:
mocked only; server-side authorization of DeleteBookmarkByBookmarkId / New_UpdateBookmarkNote by bookmark owner.

## 13a. Feature flags

Built with the decided values (pack "Feature flags"): C2NewBookmarks off (not read here), mobileDirectoryBookmarkNote
off (BookmarkNote → NotCaptured if on), C2ExtendedShare on (Share sheet; NavigateTo_ShareObject not wired),
C2EnableCarousel on (HouseholdCarousel), WalletAccess off (gift item needs ShowGift, never set), C2EnableC1DirectoryView
not read by this route's code.

## 14. Unclear points

- Q1 GetBookmarkById was missing from the contract (decision, answered A; CR-BookmarksByGroup-1 applied [questions.md Q1]). Q2 Locations/Entities not captured (decision, answered A [questions.md Q2]).
- Q3 legacy local delete was missing in the shell (decision, answered A; CR-BookmarksByGroup-2 applied [questions.md Q3]). Q4 UnlimitedTimeToLiveSeconds: answered by code, 604800 s
  (runtime-sources/MemoryClientCache.controller.js, fetched 2026-10-15).
- Uncaptured list ids (Locations "l2_<n>", Entities "l3_<n>"): runtime iteration numbers unknown.

## 15. Acceptance criteria

default / loading / offline parity (with the proposed exemptions), call parity, typecheck, lint, build.

## 16. Decisions to confirm

- Q1 → A (answered, auto-accepted 2026-10-15 [questions.md Q1]): the row-click flow was built behind a null adapter. CR-BookmarksByGroup-1 is applied (foundation F7b, 2026-10-15); `getBookmarkById` now calls the contract [CR-BookmarksByGroup-1.md].
- Q2 → A (answered, auto-accepted 2026-10-15 [questions.md Q2]): Locations / Entities built from the compiled view (Result_Item_Badge own), fictional mock rows;
  Supper Meeting main-hall colours left out (NotCaptured marker) until a Locations state is captured.
- Q3 → A (answered, auto-accepted 2026-10-15 [questions.md Q3]): CR-BookmarksByGroup-2 is applied (foundation F7b, 2026-10-15); the local delete runs after UpdatedTotal [CR-BookmarksByGroup-2.md].
- Q4 (fact, answered by code): cache TTL 604800 s.
- Mock: 7 fictional contacts with the captured object ids and text lengths. Row 1 has narrow-glyph names, so the masked
  one-line description stays one line.
- Mock error scenario: network failure for the data action (offline state).
- Proposed exemptions: `proposed-exemptions.json` (masked photos; loading timeout content and toast).
- CR-BookmarksByGroup-3 (optional shared consolidation with MyBookmarks): rejected (foundation F7b, 2026-10-15) [CR-BookmarksByGroup-3.md].

## 17. Patterns used

P-PARAMS, P-STATES, P-DATA, P-CALLS, P-MOCKS, P-MUTATION, P-LIST (OSList), P-DIALOG (confirmAction, ShareSheet),
P-FLAGS (useFlagOn), P-BACK (useWasRestoredFromCache, BackNavigationHandler, preload).

## 18. Builder notes

Search UI is not in this view (HeaderRight/HeaderContent empty, B:279-290): search actions not ported, SearchString
stays "". BookmarkNote events (edit/add/delete note) are wired when the block is built.
