# Pack of UI flow App_CommonBlocks_Filter (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 3; of them shared (in `../../_shared/pack/actions.md`): 3

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| App_CommonFilter_CheckCountry | App_CommonFilter | CountryCode: Text (mandatory); SubscribedCountries: Code, Name, RegionId Record List (mandatory) | IsEnabled: Boolean | 7 |
| App_CommonFilter_DefineOptionNames | App_CommonFilter | OptionList_Control: Filter_Common_Control_List (mandatory) | Formatted: Filter_Common_Control_List | 7 |
| GetUserInformation_Wrapper_Assign | App_Cache | UserInformation: CacheControl_UserInformation | - | 15 |

## Actions of this flow (full)
