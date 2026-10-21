### app/src/shared/UBTConnect/Directory_EntityDetailsActions/README.md

**Change 1**

Before:

> (The pack lists two inputs; the others are in the compiled model.) Events `ViewDetails_OnClick`,
> `OnChange_Bookmark(IsBookmarked)`, `Event_MenuEdit` → `onViewDetailsOnClick`, `onOnChangeBookmark`, `onEventMenuEdit`.

After:

> (The pack lists two inputs. The compiled model has the other inputs.) The block raises three events:
> `ViewDetails_OnClick`, `OnChange_Bookmark(IsBookmarked)` and `Event_MenuEdit`. The React props are `onViewDetailsOnClick`,
> `onOnChangeBookmark` and `onEventMenuEdit`.

**Change 2**

Before:

> - `DataActionFetchContactDetails` (`api.ts`): with the screen variables, when EntityId is set and the menu has call /
>   email / share (Action_UpdateContactDetails, OnReady and parameter change). After it: popup overrides, HasCall = any
>   phone, HasEmail = mobile or email, isLoaded. Errors: every action disabled, error raised to the flow handler.
> - `DataActionFetchNotes` (`api.ts`): before the notes sheet opens (Handler_AddNotes), and in OnReady after the new
>   bookmarks lookup.
> - `mocks.ts`: both fictional (never recorded): neutral contact details; notes from the in-memory notes collection.

After:

> - `DataActionFetchContactDetails` (`api.ts`) runs with the screen variables. It runs when both conditions are true:
>   - EntityId is set.
>   - The menu has call, email or share.
> 
>   Action_UpdateContactDetails starts it, in OnReady and when a parameter changes. After the call, the block sets
>   these values: the dialog overrides, HasCall, HasEmail and isLoaded.
>   - HasCall is true when any phone exists: Phone, MobilePhone, HomePhone or WorkPhone
>     [Directory_EntityDetailsActions.tsx, Action_UpdateContactDetails].
>   - HasEmail is true when a mobile phone or an email exists [Directory_EntityDetailsActions.tsx, Action_UpdateContactDetails].
> 
>   When the call fails, the block disables every action. It raises the error to the flow handler.
> - `DataActionFetchNotes` (`api.ts`) runs before the notes sheet opens (Handler_AddNotes). It also runs in OnReady, after
>   the lookup of the new bookmarks.
> - `mocks.ts` has a mock for each of the two calls. Both mocks are fictional. Nobody recorded them. The contact details
>   are neutral. The notes come from the in-memory notes collection.

**Change 3**

Before:

> - **OnReady** (controller mvc.js:1658-1946): the share-type If (:1861-1869, no else) and the bookmarks step
>   (:1871-1929) are consecutive (checked against the compiled flow). Bookmarks step with HasBookmark / HasUnbookmark:
>   C2NewBookmarks off (TST) → GetBookmarkType_FromEntity + Connect2_LegacyShared Get_LocalBookmarkByObjectId →
>   Local_isBookmarked; on → GetBookmarkCategoryId_ByEntityTypeId + UBTConnect_Bookmarks_MCS GetLocalBookmarkByObjectId →
>   Local_isBookmarked_C2, then Action_RefreshFetchNotes. Both raise OnChange_Bookmark. Then isLoaded = not
>   isFetchContacts or fetched or fetch error (:1932-1933; model default False). Local copies: `src/shell/localEntities`
>   (`localBookmarks.ts`), synched at app start.
> - **Handle_Bookmark** (:1388-1514): always ToggleBookmarkItem_C2 (UBTConnect `lib/actions.ts`), flips
>   Local_isBookmarked_C2, raises OnChange_Bookmark(Local_isBookmarked_C2). With C2NewBookmarks off the menu keeps
>   reading Local_isBookmarked (view :379-384), so its label does not change after a click, as compiled.
> - **Server calls**: ServiceAPIAddBookmark2 / ServiceAPIDeleteBookmarkByBookmarkId2 are in the API contract
>   (`migration/contract/extra-actions.json`); `bookmarkServerActions` calls them through `callAction`. Their fictional
>   mocks (`mocks.ts`) change the in-memory `bookmarksCollection` (empty at start, as the Sync_Info_GetMain mock).
>   With C2NewBookmarks off, AddBookmark2 gets an empty category (known original bug B4). Tests: `bookmarks.test.tsx`.

After:

> - **OnReady** (controller mvc.js:1658-1946):
>   - The share-type If (:1861-1869, no else) and the bookmarks step (:1871-1929) are consecutive. The compiled flow
>     confirms this.
>   - The bookmarks step runs with HasBookmark / HasUnbookmark. The flag C2NewBookmarks selects the branch.
>     - C2NewBookmarks off (TST): the block runs GetBookmarkType_FromEntity and Connect2_LegacyShared
>       Get_LocalBookmarkByObjectId. Then it sets Local_isBookmarked.
>     - C2NewBookmarks on: the block runs GetBookmarkCategoryId_ByEntityTypeId and UBTConnect_Bookmarks_MCS
>       GetLocalBookmarkByObjectId. Then it sets Local_isBookmarked_C2 and runs Action_RefreshFetchNotes.
>   - Both branches raise OnChange_Bookmark.
>   - Then the block sets isLoaded to true when one of these conditions is true (:1932-1933):
>     - isFetchContacts is false.
>     - The contact fetch is done.
>     - The contact fetch failed.
> 
>     The model default of isLoaded is False.
>   - Local copies: `src/shell/localEntities` (`localBookmarks.ts`). The shell synchronizes them at app start
>     [src/shell/startup.ts:158-159].
> - **Handle_Bookmark** (:1388-1514): the user clicks Bookmark or Unbookmark in the menu
>   [Directory_EntityDetailsActions.tsx, `handleBookmark`].
>   1. The block always runs ToggleBookmarkItem_C2 (UBTConnect `lib/actions.ts`).
>   2. The block flips Local_isBookmarked_C2.
>   3. The block raises OnChange_Bookmark(Local_isBookmarked_C2).
> 
>   With C2NewBookmarks off, the menu keeps reading Local_isBookmarked (view :379-384). So the label does not change after
>   a click, as compiled.
> - **Server calls**:
>   - The API contract has the calls ServiceAPIAddBookmark2 and ServiceAPIDeleteBookmarkByBookmarkId2
>     (`migration/contract/extra-actions.json`). `bookmarkServerActions` calls them through `callAction`.
>   - Their fictional mocks (`mocks.ts`) change the in-memory `bookmarksCollection`. The collection is empty at the start,
>     as in the Sync_Info_GetMain mock.
>   - With C2NewBookmarks off, AddBookmark2 gets an empty category (known original bug B4).
>   - Tests: `bookmarks.test.tsx`.

**Change 4**

Before:

> - **Share to others**: UBTConnect_Utils ShareEntity_ByURL is not ported; the popup only closes.
> - CheckRestored (view restored from cache) is not ported: OnReady always runs once.
> - Notes category of each entity type: Get_NoteCategoryId_ByEntityTypeId branches (UBTConnect.controller.js:6403-6489).
> - GetNameAndSurname_ByFullName uses the ported JSUtils_String_Split (UBTJavaScriptUtils).

After:

> - **Share to others**: the React app does not port UBTConnect_Utils ShareEntity_ByURL. The dialog only closes.
> - The React app does not port CheckRestored (view restored from cache). OnReady always runs once.
> - Notes category of each entity type: the React app ports the branches of Get_NoteCategoryId_ByEntityTypeId
>   (UBTConnect.controller.js:6403-6489) in `UBTConnect/lib/actions.ts`.
> - GetNameAndSurname_ByFullName uses the JSUtils_String_Split that the React app ports (UBTJavaScriptUtils).

