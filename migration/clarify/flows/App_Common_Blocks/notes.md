# App_Common_Blocks: reader notes (stage 1)

## TST presence check
- All 8 own blocks have a TST file (tst_source.py show): App_IconBadge, App_NotificationIcon, App_NotificationRefresh, External_Link, ItemCardActions, ListLoading, Section, SectionSeparator.
- Pack elements absent on TST: none seen. TST elements absent in the pack: not scanned line by line.
- App_NotificationIcon IconClick on TST (UBTConnect.App_Common_Blocks.App_NotificationIcon.mvc.js:245-256): GetHasNewNotifications, then /UBTConnect/Notifications or /UBTConnect/MessageList with the Default transition (pack says Inherited).
- ListLoading TST view line 124: style "list-updating".

## Not found in React
- ListLoading as a block (class list-updating only in components/ui/Spinner/Spinner.tsx:17-18).
- ItemCardActions: Handler_OnClickShare, Handler_OnClickUnmark (ToggleBookmarkItem_C2 and Event_ItemUnbookmarked); input BookmarkType. The component says Share/Unmark are not reachable on the Notes route; Bookmarks_Card_Item (the other user) was not searched.

## Pack gaps
- Section: the pack cuts the CustomContainer args at "If…" (horizontal padding false value, margin).
- Handler_OnClickShare is an empty action in the pack.
- Pack Inherited transition vs TST Default.
- External_Link: TST CheckIOsPlatform / RedirectToURL lines not individually read (only OpenInApp_OpenExternalLink at line 300).
- Referenced blocks and client actions (Connect2_LegacyShared GetUnreadNotificationNumber, Create_LocalBookmark_C2 etc.) have no body in the pack; not compared.
- strings.md is empty.

## Mock files
- AddBookmark2: app/src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39.
- DeleteBookmarkByBookmarkId2: no mock handler (app.md); app/src/containers/EntityDetailsActions/mocks.ts:20 mentions it (not read).

## Screens
- None (block-only flow). React locations: platform/session/useNotificationIcon.ts, components/notification/*, components/layout/BottomBarIconBadge, pages/OneSchoolGlobalDetails/components/External_Link.tsx, pages/Notes/components/ItemCardActions.tsx, pages/HomeFeed/components/Section.tsx, components/ui/SectionSeparator.
