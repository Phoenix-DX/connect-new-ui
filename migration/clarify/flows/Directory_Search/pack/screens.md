# Pack of UI flow Directory_Search (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Search

## Screen Search (flow Directory_Search)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: none

#### Widget tree
```
block ScreenBlock_Search (UBTConnect.Directory_Search)
```
