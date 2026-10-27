# Pack of UI flow Directory_Search (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Connect_Search | ref-service | Connect_Search_CS | SearchKey: Text (mandatory); CountryCode: Text; Category: Connect_SearchCategories Identifier (mandatory) | Households: SearchResult List; Members: SearchResult List; Places: SearchResult List |
| Get_SearchResultsVisibilityStatus | ref-service | Connect_Search_CS | In_MemberId: Text (mandatory) | Out_IsHouseholdVisible: Boolean |
| Get_UI_UpdateItems_UnreadCount_All | ref-service | Connect_Updates_CS | - | UnreadCount: Integer |
| ListAppend | ref-server | (System) | List: Generic Record List (mandatory); Element: Generic Record (mandatory) | - |
| ListFilter | ref-server | (System) | SourceList: Generic Record List (mandatory); Condition: Boolean (mandatory) | FilteredList: Generic Record List |

## Entity actions called (local entities)

- CreateOrUpdateConnectSearch_RecentClickedResults → local entity ConnectSearch_RecentClickedResults (UBTConnect)
- CreateOrUpdateConnectSearch_RecentSearchTerm → local entity ConnectSearch_RecentSearchTerm (UBTConnect)
- DeleteConnectSearch_RecentClickedResults → local entity ConnectSearch_RecentClickedResults (UBTConnect)
- DeleteConnectSearch_RecentSearchTerm → local entity ConnectSearch_RecentSearchTerm (UBTConnect)

## Local entities of UBTConnect that the flow names

- **ConnectSearch_RecentClickedResults** (IClientEntity): Id: Long Integer; UserId: User Identifier; EntityId: Text; EntityType: Connect_Entity Identifier; HouseholderId: Text; Name: Text; AdditionalInformation: Text; Location: Text; SearchedOn: Date Time; Latitude: Decimal; Longitude: Decimal; SearchTargetId: Type_SearchTarget Identifier
- **ConnectSearch_RecentSearchTerm** (IClientEntity): Id: Long Integer; UserId: User Identifier; SearchedTerm: Text; SearchedOn: Date Time; SearchTargetId: Type_SearchTarget Identifier

## Client variables

| Variable | Type | Default | Folder | Read | Written |
|---|---|---|---|---|---|
| Client.App_PIN_BiometricEnabled | Boolean | True | App_PIN | yes |  |
| Client.App_Policies_HasPolicyToAccept | Boolean | - | App_Policies | yes | yes |
| Client.App_Policies_RedirectURL | Text | - | App_Policies | yes | yes |
| Client.Directory_Updates_UnreadCount | Integer | - | Directory_Updates | yes | yes |
| Client.Directory_Updates_UnreadCount_CheckFrequency_Minut | Integer | 5 | Directory_Updates | yes |  |
| Client.Directory_Updates_UnreadCount_LastCheck | Date Time | - | Directory_Updates | yes | yes |
| Client.IsNavigateToHomeOnBack | Boolean | - | Navigation | yes | yes |
| Client.Search_RecenctClickedResultsLimit | Integer | 10 | Search | yes |  |

## Structures of UBTConnect that the flow names

- **CarouselPreloadedHouseholds**: CarouselHouseholdItem: Household, SwipeAction Record List
- **Filter_Common**: CountryIds: Text List; LocalitiesIds: Text List; Sort_ByNewest: Choice Identifier
- **Filter_Common_Control_Choice**: Title: Text; SelectedChoiceId: Choice Identifier; YesLabel: Text; NoLabel: Text; NoneLabel: Text; Order: Integer
- **Filter_Common_Control_List**: Title: Text; SheetTitle: Text; In_Options: SelectionOption_Item List; SelectedIds: Text List; SelectedNames: Text List; Order: Integer; AddAllOptions: Boolean = True
- **Filter_Common_Options**: HasSorting: Filter_Common_Options_Choice; HasCountries: Filter_Common_Options_List; HasLocalities: Filter_Common_Options_List; Extra_OptionLists: Filter_Common_Control_List List; Extra_OptionChoices: Filter_Common_Control_Choice List; Extra_OptionFlatLists: Filter_Common_Control_List List
- **Member**: Id: Long Integer; HouseholderId: Text; Name: Text; Lastname: Text; MaidenName: Text; DateOfBirth: Date; IsDeceased: Boolean; DeceasedDate: Date; Avatar: SignedURL; Email: Text; DisplayTitle: Text; DisplayDescription: Text; HasEmail: Boolean; HasMobilephone: Boolean; IsDisplayAge: Boolean; LastUpdated: Date Time; ExtraDetails: DetailByType List; IsDisabled: Boolean
