# Directory_EntityDetailsActions

OutSystems: `UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions` · pack
`migration/blocks/UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.md` · compiled source
`migration/screens/HouseholdCarousel/analysis/sources/pretty/UBTConnect.Directory_CommonBlocks.Directory_EntityDetailsActions.mvc.js`

| Input                        | Type                            | Prop                          | Default        |
| ---------------------------- | ------------------------------- | ----------------------------- | -------------- |
| IsEnabled                    | Boolean                         | `isEnabled`                   | `true`         |
| EntityType                   | Text (Connect_Entity)           | `entityType`                  | `''`           |
| EntityId                     | Long Integer                    | `entityId`                    | `'0'`          |
| ContactPopUp_OverrideOptions | ContactPopUp_OverrideOptionsRec | `contactPopUpOverrideOptions` | `{}`           |
| EnableOptions                | ActionsMenuEnableOptionsRec     | `enableOptions`               | record default |
| useViewDetails               | Boolean                         | `useViewDetails`              | `false`        |
| EntityExtraDataJSON          | Text                            | `entityExtraDataJSON`         | `''`           |

(The pack lists two inputs. The compiled model has the other inputs.) The block raises three events:
`ViewDetails_OnClick`, `OnChange_Bookmark(IsBookmarked)` and `Event_MenuEdit`. The React props are `onViewDetailsOnClick`,
`onOnChangeBookmark` and `onEventMenuEdit`.

## Data actions and mocks

- `DataActionFetchContactDetails` (`api.ts` re-exports it from `api/message`) runs with the screen variables. It runs when both conditions are true:
  - EntityId is set.
  - The menu has call, email or share.

  Action_UpdateContactDetails starts it, in OnReady and when a parameter changes. After the call, the block sets
  these values: the dialog overrides, HasCall, HasEmail and isLoaded.
  - HasCall is true when any phone exists: Phone, MobilePhone, HomePhone or WorkPhone
    [Directory_EntityDetailsActions.tsx, Action_UpdateContactDetails].
  - HasEmail is true when a mobile phone or an email exists [Directory_EntityDetailsActions.tsx, Action_UpdateContactDetails].

  When the call fails, the block disables every action. It raises the error to the flow handler.

- `DataActionFetchNotes` (`api.ts`) runs before the notes sheet opens (Handler_AddNotes). It also runs in OnReady, after
  the lookup of the new bookmarks.
- `mocks.ts` has a mock for each of the two calls. Both mocks are fictional. Nobody recorded them. The contact details
  are neutral. The notes come from the in-memory notes collection.

## Captured variants (1; 1 tested)

| Capture | Source                    | What it shows                             |
| ------- | ------------------------- | ----------------------------------------- |
| v1      | HouseholdCarousel/default | menu in a skeleton section, popups closed |

## Bookmarks (CR-W4A-1)

- **OnReady** (controller mvc.js:1658-1946):
  - The share-type If (:1861-1869, no else) and the bookmarks step (:1871-1929) are consecutive. The compiled flow
    confirms this.
  - The bookmarks step runs with HasBookmark / HasUnbookmark. The flag C2NewBookmarks selects the branch.
    - C2NewBookmarks off (TST): the block runs GetBookmarkType_FromEntity and Connect2_LegacyShared
      Get_LocalBookmarkByObjectId. Then it sets Local_isBookmarked.
    - C2NewBookmarks on: the block runs GetBookmarkCategoryId_ByEntityTypeId and UBTConnect_Bookmarks_MCS
      GetLocalBookmarkByObjectId. Then it sets Local_isBookmarked_C2 and runs Action_RefreshFetchNotes.
  - Both branches raise OnChange_Bookmark.
  - Then the block sets isLoaded to true when one of these conditions is true (:1932-1933):
    - isFetchContacts is false.
    - The contact fetch is done.
    - The contact fetch failed.

    The model default of isLoaded is False.

  - Local copies: `src/platform/storage/localEntities` (`localBookmarks.ts`). The shell synchronizes them at app start
    [src/platform/bootstrap/startup.ts:158-159].
- **Handle_Bookmark** (:1388-1514): the user clicks Bookmark or Unbookmark in the menu
  [Directory_EntityDetailsActions.tsx, `handleBookmark`].
  1. The block always runs ToggleBookmarkItem_C2 (UBTConnect `lib/actions.ts`).
  2. The block flips Local_isBookmarked_C2.
  3. The block raises OnChange_Bookmark(Local_isBookmarked_C2).

  With C2NewBookmarks off, the menu keeps reading Local_isBookmarked (view :379-384). So the label does not change after
  a click, as compiled.

- **Server calls**:
  - The API contract has the calls ServiceAPIAddBookmark2 and ServiceAPIDeleteBookmarkByBookmarkId2
    (`migration/contract/extra-actions.json`). `bookmarkServerActions` calls them through the repository of `api/bookmark`.
  - Their fictional mocks (`mocks.ts`) change the in-memory `bookmarksCollection`. The collection is empty at the start,
    as in the Sync_Info_GetMain mock.
  - With C2NewBookmarks off, AddBookmark2 gets an empty category (known original bug B4).
  - Tests: `bookmarks.test.tsx`.

## Not ported / not settled

- **Share to others**: the React app does not port UBTConnect_Utils ShareEntity_ByURL. The dialog only closes.
- The React app does not port CheckRestored (view restored from cache). OnReady always runs once.
- Notes category of each entity type: the React app ports the branches of Get_NoteCategoryId_ByEntityTypeId
  (UBTConnect.controller.js:6403-6489) in `UBTConnect/lib/actions.ts`.
- GetNameAndSurname_ByFullName uses the JSUtils_String_Split that the React app ports (UBTJavaScriptUtils).

## Files

- `EntityDetailsActionsContainer.tsx`: the view (menu and popups).
- `useEntityDetailsActions.ts`: the state, the effects and the handlers of the block.
- `entityDetailsActionsState.ts`: pure helpers of the state.
- `types.ts`: the props interface.
- `api.ts`, `mocks.ts`: the data actions and their mocks.
