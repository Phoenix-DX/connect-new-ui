# Pack of UI flow App_Menu_ContactUs (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Get_Core_CountriesNames | ref-service | Connect_Geography_CS | - | Out_CountriesNames: CS_CountryName List |
| Get_Core_LocalityTimezone | ref-service | Connect_Geography_CS | In_LocalityId: Long Integer (mandatory) | Out_Timezone: Core_Timezone |
| SendContactUsMessage | ref-service | Connect_Communication_CS | In_ContactUsForm: UI_ContactUsForm (mandatory); In_ContactSubjectId: Type_ContactSubject Identifier (mandatory); Rate: Integer; Rate_UserWantToBeContacted: Boolean | Out_ErrorMessage: Text |

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

- **Lookup_ContactUsMenuOptions**: SetupAUBTOneAccount: UI_ListMenuOption; LoginWithUBTOne: UI_ListMenuOption; SubscriptionsAndPayments: UI_ListMenuOption; HouseholdDetailsAndProfile: UI_ListMenuOption; CommunityEvents: UI_ListMenuOption; GeneralQuestions: UI_ListMenuOption; GeneralSuggestions: UI_ListMenuOption; GeneralQuestionsOrSuggestions: UI_ListMenuOption
- **UI_ListMenuOption**: Id: Text; IconId: UBT_Icons2 Identifier; Label: Text; LabelDescription: Text; useSwitch: Boolean; SwitchValue: Boolean; IconRight: UBT_Icons2 Identifier = Entities.UBT_Icons2.ChevronRight; IconRightText: Text; IconRightLoading: Boolean; HideIconRight: Boolean; IsLoading: Boolean
- **UI_MenuSection**: SectionTitle: Text; HasSeparator: Boolean = True; MenuOptions: UI_ListMenuOption List
