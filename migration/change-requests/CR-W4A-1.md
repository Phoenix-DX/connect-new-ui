# CR-W4A-1: local bookmarks for Directory_EntityDetailsActions

- Raised by: wave 4 batch A (Directory_EntityDetailsActions), 2026-10-15.
- Need: the block reads and toggles the bookmark of an entity with UBTConnect ToggleBookmarkItem_C2
  (UBTConnect.controller.js:17107-, copy in migration/screens/SupperMeeting_Details/analysis/sources/raw/), which uses the
  UBTConnect_Bookmarks_MCS local entity (GetLocalBookmarkByObjectId, Create_LocalBookmark,
  Delete_LocalBookmarkByBookmarkId), the AddBookmark / RemoveBookmark server calls and
  UBTConnect_Utils Bookmark_SendFeedbackMessage; the legacy path uses Connect2_LegacyShared Get_LocalBookmarkByObjectId
  and ToggleBookmarkItem.
- Shell today: `src/shell/localEntities` has notes, search history and recent search, no bookmarks.
- Proposal: a `localBookmarks` local entity in the shell (same pattern as `localNotes`), synched like Notes at app start
  (client variable `UBTConnect.Bookmarks_IsSynched` already exists), and the UBTConnect bookmark actions ported in
  `shared/UBTConnect/lib/actions.ts` by the batch that owns the bookmark screens.
- Until then: the block shows "Bookmark" (never "Unmark"), the click does nothing, OnChange_Bookmark is not raised.

## Status

**applied** (wave-4 foundation owner, 2026-10-15; the two server calls of the toggle added to the contract the same
day, user decision 2026-10-15, see "Contract").

## Resolution

- **Local entities** (`app/src/shell/localEntities/localBookmarks.ts`, exported from `index.ts`):
  UBTConnect_Bookmarks_MCS.LocalBookmark (table `OSUSR_HCR_LOCALBOOKMARK`, key, module key, hash, columns as
  `runtime-sources/UBTConnect_Bookmarks_MCS.entities.js:4-58`) with GetLocalBookmarkByObjectId, GetLocalBookmarkByBookmarkId,
  Create_LocalBookmark, Delete_LocalBookmarkById, Delete_LocalBookmarkByBookmarkId, SynchBookmarksC2
  (`…controller.js:27-1173`, aggregates `…aggregates.IDB.js:103-403`); and the legacy Connect2_LegacyShared.LocalBookmark
  (`OSUSR_B3N_LOCALBOOKMARK`, `Connect2_LegacyShared.entities.js:236-306`) with Get_LocalBookmarkByObjectId (sorted by
  Note, `Connect2_LegacyShared.aggregates.IDB.js:19-131`) and SynchBookmarks (`Connect2_LegacyShared.controller.js:7421-`),
  because OnReady reads the legacy copy while C2NewBookmarks is off (the TST value, user decision 2026-10-14).
- **App start** (`app/src/shell/startup.ts`): Sync_Info_Main returns LocalEntities_App.LocalBookmark / LocalBookmarksC2
  (UBTConnect.controller.js:16576-16589); Connect_SetLoggedContext runs SynchBookmarks, SynchBookmarksC2, then
  Bookmarks_IsSynched = True, then SyncNotes (:1135-1145). Mock: the fictional mock user has no bookmarks (empty lists).
- **Actions**: UBTConnect `getBookmarkCategoryId_ByEntityTypeId` (UC:7152-7266), `getBookmarkType_FromEntity`
  (UC:7410-7540), `toggleBookmarkItem_C2` (UC:17105-17280) and the static entities BookmarkCategory, MyBookmarks_ObjectType,
  MyBookmarks_Group (TST values) in `app/src/shared/UBTConnect/lib/`; UBTConnect_Utils `bookmark_SendFeedbackMessage`
  (UBTConnect_Utils.controller.js:92-149).
- **Block** (`Directory_EntityDetailsActions.tsx`): OnReady bookmark step (both flag branches, OnChange_Bookmark raised,
  then isLoaded as compiled), Handle_Bookmark (always C2, flips Local_isBookmarked_C2, OnChange_Bookmark, handlers), the
  menu's Bookmark / Unmark from Local_isBookmarked or Local_isBookmarked_C2 as the view does (mvc.js:379-384).
- **Tests**: `localBookmarks.test.ts`, `UBTConnect/lib/actions.test.ts` (mapping, toggle add / remove / failures).
- **Server calls** (2026-10-15): ServiceAPIAddBookmark2 and ServiceAPIDeleteBookmarkByBookmarkId2 in the contract,
  fictional mocks, `bookmarkServerActions` wired through `callAction`, tests in
  `Directory_EntityDetailsActions/bookmarks.test.tsx` (details under "Contract").

## Contract (applied 2026-10-15)

ToggleBookmarkItem_C2 calls `screenservices/UBTConnect/ServiceAPIAddBookmark2` (inputs In_BookmarkCategoryId,
In_ItemId as Text; outputs Success, Bookmark_Added: Connect_Bookmarks_CS UI_Bookmark_Added; UC:18251-18286) and
`screenservices/UBTConnect/ServiceAPIDeleteBookmarkByBookmarkId2` (input BookmarkId Long Integer; output Success;
UC:18312-18336). Neither is in `app/src/api/openapi.yaml` and no route recorded them. Expected change: add both to
`migration/contract/extra-actions.json` and the contract, then set `bookmarkServerActions` in
`app/src/shared/UBTConnect/lib/actions.ts` to two `callAction` calls, with fictional mocks. Until then the Bookmark /
Unmark click does nothing.

Applied (user decision 2026-10-15):
- **Contract**: both entries in `migration/contract/extra-actions.json` (screens = the build screens whose block closure
  has Directory_EntityDetailsActions, `migration/survey/screens.json`; evidence UC:18251-18286, :18312-18336, call sites
  :17141, :17167, block mvc.js:1414). `contract_gen.py` (unchanged, deterministic) adds operations
  `UBTConnect.ServiceAPIAddBookmark2` and `UBTConnect.ServiceAPIDeleteBookmarkByBookmarkId2` (x-mock-source fictional,
  x-os-writes) and the schema `Connect_Bookmarks_CS__UI_Bookmark_Added` (Connect_Bookmarks_CS.model.js:166-194);
  `app/src/api/schema.d.ts` regenerated (`gen:api`). 96 → 98 operations.
- **Mocks** (`app/src/shared/UBTConnect/Directory_EntityDetailsActions/mocks.ts`, `contractHandler`, fictional): an
  in-memory `bookmarksCollection` (rows = UI_Bookmark_Added), empty at start as the Sync_Info_GetMain mock sends empty
  bookmark lists to SynchBookmarks / SynchBookmarksC2. AddBookmark2 adds a row and answers Success with it (also with an
  empty category, B4); DeleteBookmarkByBookmarkId2 removes the row, Success = it existed.
- **Wiring**: `bookmarkServerActions` (`app/src/shared/UBTConnect/lib/actions.ts`) calls both through `callAction`, so
  Bookmark / Unmark runs ToggleBookmarkItem_C2 as compiled (UC:17105-17280). With C2NewBookmarks off (TST) the block
  still sends an empty category and keeps the label "Bookmark" (known original bug B4, `app/docs/known-original-bugs.md`).
- **Tests**: `Directory_EntityDetailsActions/bookmarks.test.tsx`: toggle on / off through the mocks (collection, local
  entity row, feedback messages UBTConnect_Utils.controller.js:92-149), B4, communication failure, and the block's
  Bookmark / Unmark with C2NewBookmarks on and off.
