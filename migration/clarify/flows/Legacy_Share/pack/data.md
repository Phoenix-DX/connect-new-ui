# Pack of UI flow Legacy_Share (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Get_ShareDetails | ref-server | Connect2_Sharing_CS | ShareId: Text (mandatory); IncludeDeceased: Boolean (mandatory) | ShareObjectType: Type_ShareObject; ShareDetails: Share_GetShare_GET_Response; IsShareAvailable: Boolean = True; UpdateDate: Date |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes | yes |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |

## Structures of UBTConnect that the flow names

- **AuditLog_ShareEventInfo**: ShareId: Text; SharingUserId: Text; TargetUserId: Text; TargetApp: Text; ShareObjectTypeId: Type_ShareObject Identifier; ObjectId: Text
