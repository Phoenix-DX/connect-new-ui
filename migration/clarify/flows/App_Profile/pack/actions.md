# Pack of UI flow App_Profile (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 27; of them shared (in `../../_shared/pack/actions.md`): 27

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| ExitApplicationForWebViewUpdate | ExternalNavigation | Delay: Integer | - | 29 |
| GetBookmarkCategoryId_ByEntityTypeId | Bookmark_Utils | EntityType: Connect_Entity Identifier (mandatory) | BookmarkType: BookmarkCategory Identifier | 7 |
| GetNameAndSurname_ByFullName | Utils_Text | In_FullName: Text (mandatory) | Out_Surname: Text; Out_Name: Text | 11 |
| GetShareType_FromEntity | Share_Utils | EntityType: Connect_Entity Identifier (mandatory); IsMyHousehold: Boolean | ShareType: Type_ShareObject Identifier | 7 |
| GetSkeletonList_UI_HouseholdMembers | Directory_Skeleton | ListLength: Integer | UI_HouseholdMember: UI_HouseholdMember List | 5 |
| GetSkeleton_HouseholdActions | Directory_Skeleton | - | ActionsMenutOptions: ActionsMenuOptions | 5 |
| GetSkeleton_UI_HouseholdCard | Directory_Skeleton | - | UI_Household_Card: UI_Household_Card | 5 |
| GetSkeleton_UI_HouseholdCardContent | Directory_Skeleton | - | HouseholdCardContent: UI_Household_Card_Content | 5 |
| GetSkeleton_UI_HouseholdDetails | Directory_Skeleton | - | UI_HouseholdDetails: UI_Screen_HouseholdDetails | 5 |
| GetSkeleton_UI_HouseholdMember | Directory_Skeleton | - | UI_HouseholdMember: UI_HouseholdMember | 5 |
| GetURLFromEventDataURL | Share_Utils | EventDataURL: Text (mandatory) | URL: Text | 29 |
| GetUserInformation_Wrapper | App_Cache | - | UserInformation: Directory_UserCurrent | 7 |
| GetUserInformation_Wrapper_Assign | App_Cache | UserInformation: CacheControl_UserInformation | - | 15 |
| Get_IsUnsupportedSystem | UnsupportedSystems | - | Out_IsUnsupportedSystem: Boolean | 29 |
| Get_IsUnsupportedVersion | UnsupportedSystems | - | Out_IsUnsupportedWebViewVersion: Boolean; Out_IsUnsupportedAppVersion: Boolean; Out_IsUnsupportedBrowserVersion: Boolean | 29 |
| HasAccessToRegion | User | Target_LocalityNameOrId: Text (mandatory); Target_CountryNameOrCode: Text (mandatory) | HasAccess: Boolean | 5 |
| IsHouseholdDetails_InAncestryModeView | Directory_MemoryCache_Household | HouseholdId: Long Integer (mandatory) | Exists: Boolean | 5 |
| OfflineDataSync | App_OfflineDataSync | SyncUnit: Text (mandatory) | - | 29 |
| OfflineDataSyncConfiguration | App_OfflineDataSync | - | SyncOnOnline: Boolean; SyncOnLogin: Boolean; SyncOnResume: Boolean; RetryOnError: Boolean; RetryIntervalInSeconds: Integer | 29 |
| OpenGooglePlay_Chrome | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_UBTConnect | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_WebView | ExternalNavigation | - | - | 29 |
| SetResumeLoginLink | Share_Utils | URL: Text (mandatory) | - | 29 |
| ToggleBookmarkItem_C2 | Directory_MyBookmarks | In_ItemId: Text (mandatory); In_BookmarkType: BookmarkCategory Identifier (mandatory); IsBookmarked_C2: Boolean (mandatory) | - | 9 |
| Try_GetIsSupportedVersion | UnsupportedSystems | - | IsSupportedNativeVersion: Boolean = True; IsSupportedWebView: Boolean = True; IsAndroid: Boolean; IsApple: Boolean | 29 |
| Upgrade_UBTConnect | ExternalNavigation | - | - | 29 |
| Upgrade_WebView | ExternalNavigation | - | - | 29 |

## Actions of this flow (full)
