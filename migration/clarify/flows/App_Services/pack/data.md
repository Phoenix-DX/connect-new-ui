# Pack of UI flow App_Services (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Service_ConnectServices_ChangeOrder_Bulk | ref-service | Connect_Services_CS | CurrentServices: Connect_Service_User, Connect_Services Record List (mandatory) | - |
| Service_ConnectServices_GetByUser | ref-service | Connect_Services_CS | - | AvailableServices: Connect_Services List; CurrentServices: Connect_Service_User, Connect_Services Record List |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
