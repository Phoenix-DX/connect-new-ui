# Pack of UI flow App_Policies (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| AcceptPolicies | ref-server | ApplicationPolicies | Policies: Policy Identifier List (mandatory); DeviceDetails: PolicyAcceptanceDeviceDetails (mandatory) | - |
| GetPoliciesToAccept | ref-server | ApplicationPolicies | PolicyApplications: PolicyApplication Identifier List (mandatory); PolicyTypeId: PolicyType Identifier; Country: Text | Policies: PolicyInformation List |
| ListAppend | ref-server | (System) | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names


## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_NetworkStatus_IsOnline_IsPersistent | Boolean | True | App_Network | yes |  |
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes | yes |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |
