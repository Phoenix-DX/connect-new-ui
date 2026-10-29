# Pack of UI flow Directory_Interchange (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "in this locality"  ← Directory_Interchange_StatisticsList.Value
- "found nearby"  ← Location.DefaultValue
- "There doesn't seem to be any"  ← Directory_EmptyState.Value
- "this locality."  ← Directory_EmptyState.Value
- "Bookmarks not available"  ← GetBookmarkCategoryId_ByEntityTypeId.ExceptionMessage, OnReady.ExceptionMessage
- "Invalid option"  ← OnReady.ExceptionMessage
- "Share not available"  ← GetShareType_FromEntity.ExceptionMessage