# Pack of UI flow Home (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## Server and service actions called

| Action | Kind | Module | Inputs | Outputs |
|---|---|---|---|---|
| Action_UI_UpdateItem_MarkAsRead | ref-service | Connect_Updates_CS | UpdateItemId: UpdateItem Identifier (mandatory) | - |
| Action_UI_UpdateItem_MarkAsUnread | ref-service | Connect_Updates_CS | UpdateItemId: UpdateItem Identifier (mandatory) | - |
| GetExternalLinks_ElGusto | ref-server | UBTConnect_ServerConfigs | - | Link: Text |
| GetExternalPackages_CommunityTradelink | ref-server | UBTConnect_ServerConfigs | - | Package: Text |
| GetExternalPackages_HR100 | ref-server | UBTConnect_ServerConfigs | - | Package: Text |
| GetExternalPackages_Trove | ref-server | UBTConnect_ServerConfigs | - | Package: Text |
| Get_UI_CommunityNumbers | ref-service | Connect_Geography_CS | - | Out_CommunityNumbers: UI_CommunityStatistics |
| Get_UI_MembersStatistics | ref-service | Connect_Geography_CS | RegionsSubscriptionId: Connect_Subscription_Region Identifier (mandatory); LocalityId: Text | UI_MembersStatistics: UI_MembersStatistics |
| Get_UI_UpdateItemsForHomePage | ref-service | Connect_Updates_CS | - | UI_UpdateItemList: UI_UpdateItem List |
| Get_UI_UpdateItems_UnreadCount_All | ref-service | Connect_Updates_CS | - | UnreadCount: Integer |
| Service_ConnectServices_GetByUser | ref-service | Connect_Services_CS | - | AvailableServices: Connect_Services List; CurrentServices: Connect_Service_User, Connect_Services Record List |

## Entity actions called (local entities)


## Local entities of UBTConnect that the flow names

- **Type_CarouselItemSwipeAction** (IStaticEntity): Id: Text; Order: Integer
- **UBTConnect_JSUtils_ElementCache_Property** (IStaticEntity): Label: Text

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
| Client.Notifications_IsSynched | Boolean | - | Notifications | yes |  |
| Client.Notifications_LastChecked | Date Time | - | Notifications | yes |  |

## Structures of UBTConnect that the flow names

- **CarouselPreloadedHouseholds**: CarouselHouseholdItem: Household, SwipeAction Record List
- **EntitiesCarousel_SwippedItem**: EntityItemId: Text; ListPosition: Integer
- **SignedURL**: LowResolution: Text; MediumResolution: Text; HighResolution: Text
- **SwipeAction**: ActionId: Type_CarouselItemSwipeAction Identifier; Parameters: Text
- **UI_ServiceItem**: Id: Connect_Services Identifier; IconId: UBT_Icons2 Identifier; Name: Text; Order: Integer
- **UI_ServicesPage**: PageNumber: Integer; ServiceItem: UI_ServiceItem List
- **Updates_CarouselSwipeCallbackParameters**: UpdateItemId: UpdateItem Identifier
