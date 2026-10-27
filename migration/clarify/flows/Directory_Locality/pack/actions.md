# Pack of UI flow Directory_Locality (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 46; of them shared (in `../../_shared/pack/actions.md`): 33

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| App_CommonFilter_CheckCountry | App_CommonFilter | CountryCode: Text (mandatory); SubscribedCountries: Code, Name, RegionId Record List (mandatory) | IsEnabled: Boolean | 7 |
| App_CommonFilter_DefineOptionNames | App_CommonFilter | OptionList_Control: Filter_Common_Control_List (mandatory) | Formatted: Filter_Common_Control_List | 7 |
| Directory_Updates_RefreshBottomBarCount | Directory_Updates | ForceRefresh: Boolean | - | 19 |
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
| GetSkeleton_UI_SubdivisionCard | Directory_Skeleton | - | UI_SubdivisionCard: UI_Subdivision_Card | 4 |
| GetSkeleton_UI_SubdivisionCardContent | Directory_Skeleton | - | UI_SubdivisionCardContent: UI_Subdivision_Card_Content | 4 |
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
| ScrollTop | Utils | In_ScrollContainer: Text = ".active-screen"; In_Behaviour: Text = "instant" | - | 19 |
| SetResumeLoginLink | Share_Utils | URL: Text (mandatory) | - | 29 |
| ToggleBookmarkItem_C2 | Directory_MyBookmarks | In_ItemId: Text (mandatory); In_BookmarkType: BookmarkCategory Identifier (mandatory); IsBookmarked_C2: Boolean (mandatory) | - | 9 |
| Try_GetIsSupportedVersion | UnsupportedSystems | - | IsSupportedNativeVersion: Boolean = True; IsSupportedWebView: Boolean = True; IsAndroid: Boolean; IsApple: Boolean | 29 |
| Upgrade_UBTConnect | ExternalNavigation | - | - | 29 |
| Upgrade_WebView | ExternalNavigation | - | - | 29 |

## Actions of this flow (full)

## GetLocal_Bookmark (action, folder Directory_MyBookmarks)
- inputs: ObjectType: MyBookmarks_ObjectType Identifier (mandatory); ObjectId: Long Integer (mandatory)
- outputs: IsBookmarked: Boolean
```
call Get_LocalBookmarkByObjectId(ObjectId=ObjectId, ObjectType=ObjectType)
assign: IsBookmarked = Get_LocalBookmarkByObjectId.LocalBookmark.Id <> NullIdentifier()
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetLocal_Bookmark_C2 (action, folder Directory_MyBookmarks)
- inputs: ObjectType: BookmarkCategory Identifier (mandatory); ObjectId: Long Integer (mandatory)
- outputs: IsBookmarked: Boolean
```
call GetLocalBookmarkByObjectId_C2(ItemId=ObjectId, None=ObjectType)
assign: IsBookmarked = GetLocalBookmarkByObjectId_C2.LocalBookmark.Id <> NullIdentifier()
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSample_FilterTags (action, folder ZTemp_ForSampleData_ToDELETE_OR_REPLACE)
- inputs: ShowMyHouseholdTag: Boolean (mandatory)
- outputs: TagToggleList: Tag List
- locals: LocalityMenu: Entities_LocalityMenuOptions
```
call ListAppend(Element={ Text: LocalityMenu.Households, Identifier: LocalityMenu.Households, IsSelected: True }, List=TagToggleList) as Tag_Households
if ShowMyHouseholdTag
  call ListAppend(Element={ Text: LocalityMenu.MyHousehold, Identifier: LocalityMenu.MyHousehold, IsSelected: False }, List=TagToggleList) as Tag_MyHousehold
  [M1] call ListAppend(Element={ Text: LocalityMenu.Subdivsion, Identifier: LocalityMenu.Subdivsion, IsSelected: False }, List=TagToggleList) as Tag_SupperMeetings
  call ListAppend(Element={ Text: LocalityMenu.Interchange, Identifier: LocalityMenu.Interchange, IsSelected: False }, List=TagToggleList) as Tag_Interchange
  call ListAppend(Element={ Text: LocalityMenu.OneSchoolGlobal, Identifier: LocalityMenu.OneSchoolGlobal, IsSelected: False }, List=TagToggleList) as Tag_OneSchoolGlobal
  call ListAppend(Element={ Text: LocalityMenu.LocalityContacts, Identifier: LocalityMenu.LocalityContacts, IsSelected: False }, List=TagToggleList) as Tag_LocalityContacts
  end
else
  → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeletonList_UI_CommunityBusinessContactCard (action, folder Directory_Skeleton)
- inputs: ListLength: Integer = 4
- outputs: UI_LocalityContacts: UI_CommunityBusiness_Contact List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_CommunityBusinessContactCard()
  call ListAppend(Element=GetSkeleton_UI_CommunityBusinessContactCard.UI_LocalityContactCard, List=UI_LocalityContacts)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeletonList_UI_CountryStatistics (action, folder Directory_Skeleton)
- inputs: ListLength: Integer = 4
- outputs: UI_CountryStatistics: UI_CountryStatistics List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_CountryStatistics()
  call ListAppend(Element=GetSkeleton_UI_CountryStatistics.UI_CountryStatistics, List=UI_CountryStatistics)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeletonList_UI_LocalityStatistics (action, folder Directory_Skeleton)
- inputs: ListLength: Integer = 4
- outputs: UI_LocalityStatistics: UI_LocalityStatistics List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_LocalityStatistics()
  call ListAppend(Element=GetSkeleton_UI_LocalityStatistics.UI_LocalityStatistics, List=UI_LocalityStatistics)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeletonList_UI_OneSchoolGlobal_ListCard (action, folder Directory_Skeleton)
- inputs: ListLength: Integer = 4
- outputs: UI_OneSchoolGlobal_ListCard_List: UI_OneSchoolGlobal_ListCard List; Out_OneSchoolGlobal_List: UI_OneSchool_Card List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_OneSchoolGlobal_ListCard()
  call ListAppend(Element=GetSkeleton_UI_OneSchoolGlobal_ListCard.UI_OneSchollGlobalCard, List=Out_OneSchoolGlobal_List)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeletonList_UI_SubdivisionCard (action, folder Directory_Skeleton)
- inputs: ListLength: Integer = 4
- outputs: UI_SubdivisionHouseholds: UI_Subdivision_Card List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_SubdivisionCard()
  call ListAppend(Element=GetSkeleton_UI_SubdivisionCard.UI_SubdivisionCard, List=UI_SubdivisionHouseholds)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_CommunityBusinessContactCard (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_LocalityContactCard: UI_CommunityBusiness_Contact
```
call GetSkeleton_UI_CommunityBusinessContactCardContent()
assign: UI_LocalityContactCard = GetSkeleton_UI_CommunityBusinessContactCardContent.UI_LocalityContactCard
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_CommunityBusinessContactCardContent (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_LocalityContactCard: UI_CommunityBusiness_Contact
```
assign (UI_LocalityContactCard): UI_LocalityContactCard.Name = "ExampleName"; UI_LocalityContactCard.Description = "ExampleName"; UI_LocalityContactCard.PhoneNumber = "+61430543425"; UI_LocalityContactCard.Email = "Jeremytest@gmail.com"; UI_LocalityContactCard.IsBookmarked = False
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_CountryStatistics (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_CountryStatistics: UI_CountryStatistics
```
assign: UI_CountryStatistics.Statistics.Title = "Australia"; UI_CountryStatistics.Statistics.AvatarURL = "-"
call ListAppendAll(List=UI_CountryStatistics.Statistics.Statistics, SourceList=[ { Name: "Locality", Value: 83 }, { Name: "Bretheren", Value: 15868 }, { Name: "Households", Value: 4652 }, { Name: "Brothers", Value: 7934 }, { Name: "Sisters", Value: 7934 } ]) as ListAppendAll2
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_LocalityStatistics (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_LocalityStatistics: UI_LocalityStatistics
```
assign: UI_LocalityStatistics.Statistics.Title = "Adelaide"; UI_LocalityStatistics.Statistics.Subtitle = "New South Wales"
call ListAppendAll(List=UI_LocalityStatistics.Statistics.Statistics, SourceList=[ { Name: "Supper Meetings", Value: 83 }, { Name: "Bretheren", Value: 15868 }, { Name: "Households", Value: 4652 }, { Name: "Brothers", Value: 7934 }, { Name: "Sisters", Value: 7934 } ])
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_OneSchoolGlobal_ListCard (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_OneSchoolGlobal_ListCard: UI_OneSchoolGlobal_ListCard; UI_OneSchollGlobalCard: UI_OneSchool_Card
```
assign: UI_OneSchollGlobalCard.OneSchool_Card_Content.Name = "OneSchoold Global"; UI_OneSchollGlobalCard.OneSchool_Card_Content.LocalityName = "Adelaide"; UI_OneSchollGlobalCard.OneSchool_Card_Content.Phone = "+613696648706"; UI_OneSchollGlobalCard.OneSchool_Card_Content.Email = "test@gmail.com"
end
unreachable nodes (not connected to start or to an exception handler):
  end
```
