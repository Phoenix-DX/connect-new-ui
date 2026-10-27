# Pack of UI flow App_CommonBlocks_Filter (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Sort by"  ← SortBy_Title.DefaultValue
- "Sort & Filter"  ← FilterSheet.Value
- "No results found for ‘"  ← SearchEmpty.Value
- "We couldn’t find an item that matches your search. Please check your spelling or try different keywords."  ← SearchEmpty.Value
- "Mark all as read"  ← MoreActionSheet.Value
- "Delete all notifications"  ← MoreActionSheet.Value
- "Delete notification"  ← Notifications_ConfirmDialog.Value
- "Delete all notifications?"  ← Notifications_ConfirmDialog.Value
- "Are you sure you want to delete this notification? This action can't be undone."  ← Notifications_ConfirmDialog.Value
- "Are you sure you want to delete all notifications? This action can't be undone."  ← Notifications_ConfirmDialog.Value