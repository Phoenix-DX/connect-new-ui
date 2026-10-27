# TST-only screens of the bookmarks area (not in the DEV model)

DEV holds the flow `Bookmarks` (screen `Bookmarks`, the C2NewBookmarks branch). TST runs the flow `Legacy_MyBookmarks`
with the screens `MyBookmarks` and `BookmarksByGroup` (built in React) and `New_MyBookmarks`, `New_BookmarksByGroup`
(board: skip). The DEV dump has no model of these 4 screens. Their checklist comes from the TST compiled code:

| TST file (`python3 migration/clarify/tools/tst_source.py show <file>`) | What it is |
|---|---|
| `UBTConnect.Legacy_MyBookmarks.MyBookmarks.mvc.js` | screen MyBookmarks (wrapper of the MUI screen block) |
| `UBTConnect.Legacy_MyBookmarks.BookmarksByGroup.mvc.js` | screen BookmarksByGroup |
| `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_MyBookmarks.mvc.js` | the screen block with the logic of MyBookmarks |
| `Connect2_MyBookmarks_MUI.MyBookmarksFlow.ScreenBlock_BookmarkGroup.mvc.js` | the screen block with the logic of BookmarksByGroup (large) |
| `Connect2_MyBookmarks_MUI.MyBookmarksFlow.MyBookmarks_Album.mvc.js`, `MyBookmarks_Card.mvc.js`, `NoBookmarks.mvc.js`, `BookmarkNote*.mvc.js` | blocks of the MUI flow |
| `UBTConnectLibrary.ConnectPatterns.KebabButton_BookmarkNotes.mvc.js` | kebab menu block |

Board rows (decision, who, when): `grep -n "^| \(Bookmarks\|MyBookmarks\|BookmarksByGroup\|New_MyBookmarks\|New_BookmarksByGroup\) " migration/board.md`.
KB: `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-bookmarks.md` and
`ui/bookmarks.md`; the MUI module under `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/` and
`connect2-services/` (grep the block names).

How to read a compiled screen: `$model` holds inputs and local variables; `$controller` holds the screen actions as
functions (names as in Service Studio); `$view` holds the widget tree as render calls (block instances, `If`, lists,
expressions). Flag reads appear as `getFeatureFlag` / client variable reads as `$public.ClientVariables`.
