# Pack of UI flow Legacy_MyNotificationsFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Get_UI_UpdateItems_UnreadCount_All | ref-service | Connect_Updates_CS | - | UnreadCount: Integer |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes |  |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.Directory_Updates_UnreadCount | Integer | - | Directory_Updates | yes | yes |
| Client.Directory_Updates_UnreadCount_CheckFrequency_Minut | Integer | 5 | Directory_Updates | yes |  |
| Client.Directory_Updates_UnreadCount_LastCheck | Date Time | - | Directory_Updates | yes | yes |
| Client.Embedd_B2CTenant | Text | - | - | yes |  |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |

## Structures of UBTConnect that the flow names

- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
