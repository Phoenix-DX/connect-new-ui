# Pack of UI flow Directory_Updates (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Action_UI_UpdateItem_MarkAllAsRead | ref-service | Connect_Updates_CS | Filter_Updates: Filter_Updates (mandatory) | - |
| Action_UI_UpdateItem_MarkAsRead | ref-service | Connect_Updates_CS | UpdateItemId: UpdateItem Identifier (mandatory) | - |
| Action_UI_UpdateItem_MarkAsUnread | ref-service | Connect_Updates_CS | UpdateItemId: UpdateItem Identifier (mandatory) | - |
| Get_UI_UpdateItems | ref-service | Connect_Updates_CS | Filter_Updates: Filter_Updates (mandatory) | UI_UpdateItemList: UI_UpdateItem List; UnreadCount: Integer |
| Get_UI_UpdateItems_UnreadCount_All | ref-service | Connect_Updates_CS | - | UnreadCount: Integer |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names

- **Type_CarouselItemSwipeAction** (IStaticEntity): Id: Text; Order: Integer
- **Updates_DateRanges** (IStaticEntity): Id: Text; Order: Integer

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
| Client.Notifications_IsSynched | Boolean | - | Notifications | yes |  |
| Client.Notifications_LastChecked | Date Time | - | Notifications | yes |  |

## Structures of UBTConnect that the flow names

- **CarouselPreloadedHouseholds**: CarouselHouseholdItem: Household, SwipeAction Record List
- **EntitiesCarousel_SwippedItem**: EntityItemId: Text; ListPosition: Integer
- **Filter_Common**: CountryIds: Text List; LocalitiesIds: Text List; Sort_ByNewest: Choice Identifier
- **Filter_Common_Control_Choice**: Title: Text; SelectedChoiceId: Choice Identifier; YesLabel: Text; NoLabel: Text; NoneLabel: Text; Order: Integer
- **Filter_Common_Control_List**: Title: Text; SheetTitle: Text; In_Options: SelectionOption_Item List; SelectedIds: Text List; SelectedNames: Text List; Order: Integer; AddAllOptions: Boolean = True
- **Filter_Common_Options**: HasSorting: Filter_Common_Options_Choice; HasCountries: Filter_Common_Options_List; HasLocalities: Filter_Common_Options_List; Extra_OptionLists: Filter_Common_Control_List List; Extra_OptionChoices: Filter_Common_Control_Choice List; Extra_OptionFlatLists: Filter_Common_Control_List List
- **SwipeAction**: ActionId: Type_CarouselItemSwipeAction Identifier; Parameters: Text
- **UI_UpdateItem_Breakpoint**: Position: Integer = 0; SectionName: Updates_DateRanges Identifier; BadgeCount: Integer; DateRange: UI_Updates_DateRange
- **UI_Updates_DateRange**: Range: Text; From: Date; To: Date
- **Updates_CarouselSwipeCallbackParameters**: UpdateItemId: UpdateItem Identifier
