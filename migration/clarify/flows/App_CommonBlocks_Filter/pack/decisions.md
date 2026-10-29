# Recorded decisions and facts that name the elements of UI flow App_CommonBlocks_Filter

Sources a `differs` row may cite (outside `migration/screens/`). Lines are `file:line: text` (word match of the
screen or block name; the text is cut at 300 characters). A code comment is not a decision.

## change requests

- `migration/change-requests/CR-Search-3.md:5` (FilterSheet): - Block: shell `app/src/shell/userInfo.ts` (`getUserInformation`) or the shared block that calls it on Search (FilterSheet / CacheControl_UserInfo_Wrapper / CommonUI_InsideLayout / BottomBarMenu)
- `migration/change-requests/CR-Search-3.md:6` (FilterSheet): - Other routes using it (catalog/blocks.md): every route that renders FilterSheet or CommonUI_InsideLayout

## ADRs (stack.md)

- `app/docs/reference/stack.md:260` (FilterSheet): - Plan v2 §2.2 example "containers/ (ShareSheet, FilterSheet, BottomBar)" needs a text update: FilterSheet and BottomBar are not containers (no data action; `component` and `hook+component`).

## knowledge

- `migration/knowledge/audit-a1-empty-handlers.md:36` (MoreActionSheet): | `app/src/screens/Notifications/components/MoreActionSheet.tsx:154-155` | `onMarkAllAsRead`, `onDeleteAllNotification` | Notifications_MoreActionSheet.mvc.js Handler_MarkAllAsRead :346-358 and Handler_DeleteAllNotification :254-265: breakpoints only. The suspected "DeleteAllNotification triggers Lo

## flags

- `migration/flags.md:124` (FilterSheet): - `action:bottomSheetOnToggle`: `UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc.js`, `UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc.js`
- `migration/flags.md:124` (MoreActionSheet): - `action:bottomSheetOnToggle`: `UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc.js`, `UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc.js`
- `migration/flags.md:124` (SortSheet): - `action:bottomSheetOnToggle`: `UBTConnect.App_CommonBlocks_Filter.FilterSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.MoreActionSheet.mvc.js`, `UBTConnect.App_CommonBlocks_Filter.SortSheet.mvc.js`, `UBTConnect.Directory_Locality.Directory_LegendBottomSheet.mvc.js`
