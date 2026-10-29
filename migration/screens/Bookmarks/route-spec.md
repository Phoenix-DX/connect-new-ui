# Route spec: Bookmarks

Source: TST compiled code (`analysis/sources/pretty/`, p = `UBTConnect.Bookmarks.Bookmarks.mvc.js`), capture of
2026-10-29 (`analysis/dom/`). Scope: user decisions of 2026-10-28 (build; retire MyBookmarks and BookmarksByGroup),
I10-4 (a) and I10-6 (a).

## Summary
The Bookmarks tab: category pills, search, sort and year filter, bookmark cards with notes, Unmark and Add Note.

## Shared blocks changed by the answers
- `ItemCard_WithNotes` follows the live TST code (Q3 (a), user 2026-10-29).
  The total-notes text is empty when the total is 0 and "9+" above 9. The title container has `margin-top-s` (`ItemCard_WithNotes.mvc.js` pretty:645, 736, 915).
  Notes was re-captured on TST (read-only) and its parity re-run.
- `Input` and `StaticInput` follow the live TST code (Q4 (a), user 2026-10-29): the class `search-placeholder-ellipsis`
  (`ConnectPatterns.Input` `Input_Search.Style`). The routes with older captures are re-captured and re-checked.
- `ItemCard_WithNotes` gets the channel row (Q5 (a), user 2026-10-29): `Columns_Two` (`margin-top-s`) with
  `LazyImage(In_ChannelLogo)`, `CustomText(In_ChannelName)` and `PreetyFormatDate(In_PublishedAt)`. It shows when
  ChannelName and ChannelLogo are not empty and PublishedAt is not null (`ItemCard_WithNotes.mvc.js:692-870`). The
  work: a `PreetyFormatDate` port in `lib/`, 3 new inputs, and a Feed card with a channel in the demo mock. No captured
  card has a channel, so parity does not see this row. The user reviews it by eye.
- `Bookmarks_Card_Item` passes ChannelName, PublishedAt and ChannelLogo of the bookmark
  (`Bookmarks_Card_Item.mvc.js:159, 187, 193`).

## Patterns used
P-DATA, P-CALLS, P-LIST, P-MOCKS, P-MUTATION (Unmark, notes), P-DIALOG (filter and notes sheets), P-PARAMS, P-STATES, P-OSUI.

## Feature flags
Source: `python3 $SK/flags.py route Bookmarks` and `flags.py questions --route Bookmarks` (no flag is missing an answer or
a decision), values from `migration/knowledge/flag-values-tst.json` (probe 2026-10-14, change 2026-10-21). The page reads
no flag in its own code. The flags below come from the blocks it shows (bottom bar, notification icon) and from the shared
Utils controller.
- `getHasNewBookmarks` (key `C2NewBookmarks`): TST true since 2026-10-21 (false on 2026-10-14). It chose between
  MyBookmarks and Bookmarks.
  - The bottom bar opens Bookmarks with no condition since TST 2026-10-27 (`BottomBarMenu.mvc.js:623-626`).
  - The user retired MyBookmarks and BookmarksByGroup on 2026-10-28.
  - The build has no reader left (`migration/clarify/builds/item10-Bookmarks.md`; grep of `app/src`: only tests and the
    definition).
  - The decision on record in `migration/flags.json` is out of date: see "Decisions to confirm".
- `mobileDirectoryBookmarkNote`: TST false. The old reader was the bottom bar; the build lost it. Other readers are not
  checked. Decision on record: default-only, TST value off (user, 2026-10-14). Definition kept.
- `getHasC1DirectoryView` (key `C2EnableC1DirectoryView`): TST true. Read by `BottomBarMenu` (Directory tab). Decision on
  record: default-only, TST value on (user, 2026-10-14).
- `getHasNewNotifications` (key `C2NewNotifications`): TST false. Read by `App_NotificationIcon` in the header. Decision
  on record: both branches, default off (user, 2026-10-14).
- Not flags (recorded as false positives by the user, 2026-10-14): `connect_LaunchDarkly_PermissionCheck`,
  `getFlagURLByCountryCode`, `App_PIN_BiometricEnabled`, `registeredCallbackEvents.onToggle`.
- `flags.py` lists the capture variants `bookmarksbygroup` and `mybookmarks` for these flags. Both routes are retired.

## Inputs and entry
- No inputs. Bottom bar Bookmarks item, no condition (`BottomBarMenu.mvc.js:623-626`). Role: Registered.

## View
- `Layout_MainPages_FixedTitle` (gray): title "Bookmarks", search icon when the header scrolled, `App_NotificationIcon`,
  search `Input` (enabled when the last fetch has more than 1 card), header content `FilterPills` with
  `Horizontal_Filter_TagList` (single selection) and `FilterSheet_Icon_Label`; content `Bookmarks_Card_List`; bottom
  bar; CommonUI. Outside the layout: `Bookmarks_FilterSheet` (dom/default.html:1136-1467).
- `Bookmarks_Card_List`: SkeletonSection (In_IsLoading), EmptyList "No Bookmarks found" / "We were unable to find any
  Bookmarks to" / "display.", else List of `Bookmarks_Card_Item` (`list list-group list--gap-s`).
- `Bookmarks_Card_Item`: `ItemCard_WithNotes`, `NoteListActions` (preview), `ItemCardActions` (Unmark, Add Note;
  ObjectId = ItemId, BookmarkType = BookmarkCategoryId), `NotesSheet`.

## Logic
- OnInitialize (p:1372-1444): Bookmarks_Loading; SkeletonLoader_Pills (p:776) and SkeletonLoader_Bookmarks (p:1609);
  Years = GetBookmarks_FilterYear = Get_RecentYears(3) (`UBTConnect.controller.js:7412`).
- OnReady (p:1576): Reset_PillsValues (GetBookmarks_Pills, `UBTConnect.controller.js:7461`), Refresh_GetBookmarksData.
- Refresh_GetBookmarksData (p:1703) → DataActionGetBookmarks → GetBookmarksOnAfterFetch (p:717): page 1 replaces the
  list, pills reload on the first fetch; next pages append.
- Pills, search (change, clear, submit), filter sheet (ApplyFilters p:940), Unmark (Handler_ItemUnbookmarked p:1263)
  and the end of the list (p:1478) refresh.
- Card click (p:1000-1170): OneSchool Global → PreloadedCarousel.CarouselItemIds, OneSchoolGlobalCarousel (the
  OneSchoolGlobalDetails branch cannot run); Supper Meeting → SupperMeeting_Details; Household →
  CarouselPreloadedHouseholds, HouseholdCarousel; other categories: nothing.

## Calls
- `UBTConnect/Bookmarks/DataActionGetBookmarks`, `UBTConnect_Bookmarks_MCS/ActionGet_BookmarkPills_ByBookmarkCategoryIds`
  (built in the interim form, I10-6 (a)); Unmark: `ServiceAPIDeleteBookmarkByBookmarkId2` via
  ToggleBookmarkItem_C2. The regenerated `openapi.yaml` lists both operations (grep, 2026-10-29). The interim form can go
  (`api/bookmark/bookmarkCards.ts`; check in the build note).
- The module `UBTConnect_Bookmarks_MCS` has a 10 s timeout on TST (`UBTConnect_Bookmarks_MCS.controller.js:1218`). The
  timeout row in `api/client/callAction.ts` comes with the regenerated contract.

## States
- default: parity with the mock scenario `captured` (Q2 (a), user 2026-10-29): 3 fictional cards of the captured kinds
  (2 Household, 1 OneSchool Global), the 9 pills, the captured text lengths. The first plan (`empty`, I10-4 (a)) is
  replaced.
- loading, offline: captured as they are.
- The default demo mock (`real`) keeps 7 fictional cards of several kinds. The scenario `empty` is kept.

## Unclear points

- The 5th pill text is masked (5 characters). The mock uses "Feeds".
- C2 (auto decision 2026-10-29, row 2 of `migration/clarify/auto-decisions-2026-10-29.md`): the source header of a Feed card is a mock assumption.
  `SourceHeader` is server data and no capture has a Feed card.
- C1 (auto decision, row 1): the time zone of `PublishedAt`. One date rule for the app is kept
  (`lib/osDateTime.ts:21`, 7 callers). The format belongs to the BFF contract work.
- Settled and moved out:
  - The capture shows 3 cards and 9 pills (Q2: the `captured` scenario).
  - The flag C2NewBookmarks (Q1 of 2026-10-22 is replaced by the user decision of 2026-10-28; see "Feature flags").

## Decisions to confirm

- Retire MyBookmarks and BookmarksByGroup (user, 2026-10-28). Q1 of 2026-10-22 (a, keep MyBookmarks until the PROD value
  is known) no longer applies: the bottom bar opens Bookmarks with no condition on TST. The recorded flag decision for
  `getHasNewBookmarks` is out of date and the flag has no reader. The user may want to record this with
  `flags.py decide` (not done here).
- Q2 (a), user 2026-10-29: parity of state default uses the mock scenario `captured`. The default demo mock keeps 7
  cards.
- Q3 (a), user 2026-10-29: update the shared `ItemCard_WithNotes` to the live TST code, re-capture Notes, re-run parity
  of Notes and Bookmarks.
- Q4 (a), user 2026-10-29: update `Input` and `StaticInput` to the live TST code, re-capture the routes with older
  captures (read-only), re-run their parity.
- Q5 (a), user 2026-10-29: build the channel row of `ItemCard_WithNotes` now. The user reviews it by eye.
- Auto decisions of window 7 (`migration/clarify/auto-decisions-2026-10-29.md`), rows that concern this route:
  - Row 1 (C1, a): keep the local-time rule for `PublishedAt`.
  - Row 2 (C2, a): keep the mock Feed card header until a capture exists.
  - Row 3 (Notes C3, a): the channel fields are required, with defaults at the contract regeneration.
  - Row 11 (G1, a): GridGallery is deleted. No user is left after the retirement.
  - Row 12 (G2, a): 4 handlers of `Connect2_MyBookmarks_MUI` are deleted. The legacy bookmark collection stays.
