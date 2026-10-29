# Directory_CommonBlocks: reader notes (stage 1)

Own blocks: Directory_CommunityNumbers, Directory_CommunityNumbers__Number, Directory_EmptyState, Directory_EntityDetailsActions. No screens.

## TST presence check
- Pack elements absent on TST: Directory_CommunityNumbers and Directory_CommunityNumbers__Number. tst_source.py reports "no file matches". Used by CountryList and HomeFeed per the pack; both are built on the board.
- Pack elements absent on TST (inside EntityDetailsActions): none seen. Not found in eda.js: the FetchContactDetails / FetchNotes data-action bodies (server calls Member_ContactDetails_Service, Get_Core_LocalityTimezone, ...). They are not in the mvc.js file.
- TST elements absent in the pack (eda.js): legacy bookmark path (ToggleBookmarkItem :1432, GetBookmarkType_FromEntity :1898, Get_LocalBookmarkByObjectId :1908, If GetHasNewBookmarks :375,378,1870); Local_isBookmarked_C2, Local_BookmarkTypeId_C2 variables; ListIndexOf + ListRemove in Handler_OnNoteDeleted (:1573,1580) where DEV has a for-each copy.
- TST If before ToggleBookmarkItem_C2 (eda.js:1410) ends with "&& true": legacy branch dead on TST.
- eda.js is 2745 lines. I grepped it; I did not read the view arguments for the popups (cut in the pack).

## Pack gaps
- Argument text cut at about 300 characters: ActionsMenu In_ActionsMenuOptions (HasNotes...), ContactByMessage_Wrapper, ContactPopup_ByPhone, SharePopup, ShareableObject_Generic, FetchContactDetails assigns (Email, TimezoneName, ...). Rows say "cut in pack".
- EntityExtraDataJSON input exists in React (useEntityDetailsActions.ts:40,99) and not in the pack.
- app.md says DeleteBookmarkByBookmarkId2 has no mock handler; app/src/containers/EntityDetailsActions/mocks.ts:45-49 defines it.
- Behaviour of referenced blocks (ActionsMenu, ContactByMessage_Wrapper, ContactPopup_ByPhone, SharePopup, ShareSheet, NotesSheet, SkeletonSection, EmptyList) is in references.md with TST files; not read here.

## Mock files
- app/src/containers/EntityDetailsActions/mocks.ts: FetchContactDetails :144-183, FetchNotes :185, DeleteBookmarkByBookmarkId2 :45-49.
- app/src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39 (AddBookmark2).

## Screens not built
- None. Directory_CommunityNumbers is not in React (grep terms in the rows); no board line applies because the flow has no screens.
