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

- `DataActionFetchNotes` (`api.ts`) runs in OnReady, after the bookmark lookup, and before the notes sheet opens
  (Handler_AddNotesOnClick), through Action_RefreshFetchNotes. OnAfterFetch_FetchNotes sets EntityNotes, the In_Notes of
  the sheet. TST also computes FetchNoteId (Notes_InterchangeId_ComposeId for an interchange); the contract inputs do
  not list it, so the call does not send it.
- **NotesSheet popup** (TST code of 2026-10-27, mvc.js:927-1000): the sheet is in an OSWidgets.Popup with ShowPopup True
  and the style `popup-dialog connect-share-portal`. Each block instance has its own `<body>` portal, before the share
  portal. The Popup widget (`OSPopupWidget`) puts `popup-disable-scroll` on `<html>` and `aria-hidden` on
  `#reactContainer` while the block is in the view, on every detail page (user decision H-Q1 a, 2026-10-29).
- **In_LocalityId** (Text, default ""): the In_ItemId of the sheet is `<In_LocalityId>:<EntityId>` for an interchange
  with a locality, else the EntityId. No caller sets it in the TST code of 2026-10-27.
- `mocks.ts` has a mock for each of the two calls. Both mocks are fictional. Nobody recorded them. The contact details
  are neutral. The notes come from the in-memory notes collection.

## Captured variants (1; 1 tested)

| Capture | Source                    | What it shows                             |
| ------- | ------------------------- | ----------------------------------------- |
| v1      | HouseholdCarousel/default | menu in a skeleton section, popups closed |

## Bookmarks (CR-W4A-1; C2 only since the drift wave, user decision H-Q2 a, 2026-10-29)

- **OnReady** (TST code of 2026-10-27, mvc.js:1864-1887): with HasBookmark / HasUnbookmark the block runs
  GetBookmarkCategoryId_ByEntityTypeId (Local_BookmarkTypeId) and UBTConnect_Bookmarks_MCS GetLocalBookmarkByObjectId,
  sets Local_isBookmarked, raises OnChange_Bookmark and runs Action_RefreshFetchNotes. TST removed the GetHasNewBookmarks
  branch (the legacy store, Local_isBookmarked_C2, Local_BookmarkType, Local_BookmarkGroup).
  - Then the block sets isLoaded to true when isFetchContacts is false, or the contact fetch is done or failed.
  - Local copies: `src/platform/storage/localEntities` (`localBookmarks.ts`). The shell synchronizes them at app start.
- **Handle_Bookmark** (:1400-1470): ToggleBookmarkItem_C2(EntityId, Local_BookmarkTypeId, Local_isBookmarked), then
  Local_isBookmarked flips and the block raises OnChange_Bookmark(Local_isBookmarked). The menu reads Local_isBookmarked
  (view :375-376), so the label follows the click. The known original bug B4 (empty category while the flag was off) is
  gone from the TST code.
- **Server calls**: ServiceAPIAddBookmark2 and ServiceAPIDeleteBookmarkByBookmarkId2 (`bookmarkServerActions`). Their
  fictional mocks (`mocks.ts`) change the in-memory `bookmarksCollection`. It is empty at the start, except school 1430
  in scenario `captured` (OneSchoolGlobalCarousel). The Sync_Info_GetMain mock and the `unlocked` test session copy it to
  the device (LocalBookmarksC2).
- Tests: `bookmarks.test.tsx`, `mocks.test.ts`.

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
