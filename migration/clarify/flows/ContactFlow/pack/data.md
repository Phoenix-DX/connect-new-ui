# Pack of UI flow ContactFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| SendContactEmail | ref-server | Connect2_OrbitMobile_BL | IsContactHelpdesk: Boolean (mandatory); EventId: Long Integer; MilestoneId: Text; TargetMemberId: Long Integer (mandatory); Subject: Text (mandatory); UserSubject: Text (mandatory); Message: Text (mandatory); EmailInfo: OrbitEmailInformation (mandatory) | IsSuccess: Boolean = True |
| SendContactLDMCoordinatorEmail | ref-service | Connect_Communication_CS | In_UI_ContactByEmailForm: UI_ContactByEmailForm (mandatory) | - |
| SendContactMemberEmail | ref-service | Connect_Communication_CS | In_UI_ContactByEmailForm: UI_ContactByEmailForm (mandatory) | - |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|

## Structures of UBTConnect that the flow names

- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
