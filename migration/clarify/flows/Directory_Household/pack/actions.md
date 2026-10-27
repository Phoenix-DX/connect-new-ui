# Pack of UI flow Directory_Household (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 43; of them shared (in `../../_shared/pack/actions.md`): 31

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
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

## Directory_Updates_CarouselSwipeAction (action, folder Directory_Updates)
- inputs: In_Parameters: Text (mandatory)
- outputs: Out_ItemId: Text
```
json-deserialize JSONDeserialize_SwipeActionParameters: In_Parameters as Updates_CarouselSwipeCallbackParameters
call-server UpdateItem_MarkAsRead(In_UpdateItemId=JSONDeserialize_SwipeActionParameters.Data.UpdateItemId)
assign: Out_ItemId = JSONDeserialize_SwipeActionParameters.Data.UpdateItemId
assign: Client.Directory_Updates_UnreadCount = Client.Directory_Updates_UnreadCount - 1
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSekeletonList_UI_OneSchoolGlobal_EventCard (action, folder Directory_Skeleton)
- inputs: ListLength: Integer = 4
- outputs: UI_OneSchoolGlobal_Event_Card_List: UI_OneSchoolGlobal_Event_Card List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_OneSchoolGlobal_EventCard()
  call ListAppend(Element=GetSkeleton_UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_EventCard, List=UI_OneSchoolGlobal_Event_Card_List)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeletonList_UI_SubdivisionHousehold (action, folder Directory_Skeleton)
- inputs: ListLength: Integer = 4
- outputs: UI_SubdivisionHouseholds: UI_SubdivisionHousehold List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_SubdivisionHousehold()
  call ListAppend(Element=GetSkeleton_UI_SubdivisionHousehold.UI_SubdivisionHousehold, List=UI_SubdivisionHouseholds)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_SubdivisionActions (action, folder Directory_Skeleton)
- inputs: -
- outputs: ActionsMenuOptions: ActionsMenuOptions
```
assign (ActionsMenuOptions): ActionsMenuOptions.HasBookmark = True; ActionsMenuOptions.HasNotes = True; ActionsMenuOptions.HasShare = True
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_OneSchoolGlobal_DetailCard (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_OneSchoolGlobal_DetailCard: UI_OneSchoolGlobal_DetailCard2
```
assign: UI_OneSchoolGlobal_DetailCard.UI_OneSchool_Card_Content.Name = "OneSchool Global"; UI_OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.Address = "9 Park Ave, Aberfoyle  Park SA 5159"
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_OneSchoolGlobal_EventCard (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card
```
assign: UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.Name = "Sports Day"; UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart = CurrDateTime()
assign: UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart = CurrDateTime(); UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeEnd = AddHours(CurrDateTime(),5); UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.TimezoneName = "AEST"
call ListAppendAll(List=UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List, SourceList=[ 1, 2, 3 ])
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_OneSchoolGlobal_StudentNumbers (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_OneSchoolGlobal_StudentNumbers: UI_OneSchoolGlobal_StudentNumbers
```
call ListAppendAll(List=UI_OneSchoolGlobal_StudentNumbers.StudentsPerYear, SourceList=[ { SchoolYear: 1, StudentCount: 20 }, { SchoolYear: 2, StudentCount: 40 }, { SchoolYear: 3, StudentCount: 50 }, { SchoolYear: 4, StudentCount: 60 } ])
call ListAppendAll(List=UI_OneSchoolGlobal_StudentNumbers.AvailableCalendarYears, SourceList=[ 2025, 2024, 2023, 2022, 2021 ]) as ListAppendAll3
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_SubdivisionDetails (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_SubdivisionDetails: UI_Screen_SubdivisionDetails
```
call GetSkeleton_UI_SubdivisionCard()
call GetSkeleton_SubdivisionActions()
assign: UI_SubdivisionDetails.Subdivision_Card = GetSkeleton_UI_SubdivisionCard.UI_SubdivisionCard; UI_SubdivisionDetails.Subdivision_Actions = GetSkeleton_SubdivisionActions.ActionsMenuOptions
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_SubdivisionHousehold (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_SubdivisionHousehold: UI_SubdivisionHousehold
```
assign (UI_SubdivisionHousehold): UI_SubdivisionHousehold.HouseholdName = "John & Jane Smith"; UI_SubdivisionHousehold.ChildrenNames = "Jack"
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_CurrentEntityHeader (action, folder Directory_HouseholdCarousel)
- inputs: In_CurrentHouseholdIndex: Integer (mandatory); In_HouseholdCarouselHeaderList: HeaderList List (mandatory); In_IsSingleHeader: Boolean (mandatory)
- outputs: Out_HouseholdHeader: Text
```
if In_IsSingleHeader
  assign: Out_HouseholdHeader = In_HouseholdCarouselHeaderList.Current.Label
  end
else
  call ListIndexOf(Condition=Index = In_CurrentHouseholdIndex, List=In_HouseholdCarouselHeaderList)
  if ListIndexOf.Position <> -1
    assign: Out_HouseholdHeader = In_HouseholdCarouselHeaderList[ListIndexOf.Position].Label
    end
  else
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Get_IsInsideRenderBuffer (function, folder Directory_EntitiesCarousel)
- inputs: In_RenderBuffer: Integer (mandatory); In_Index_CurrentElement: Integer (mandatory); In_Index_ActiveElement: Integer (mandatory)
- outputs: IsInsideRenderBuffer: Boolean
```
assign: IsInsideRenderBuffer = Abs(In_Index_CurrentElement - In_Index_ActiveElement) <= In_RenderBuffer
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_LookupSection (function, folder Lookups)
- inputs: In_IsLowercase: Boolean
- outputs: Out_Lookup: LookupSections
```
assign (Actions): Out_Lookup.Actions.Singular = SetLookupLabel_MaybeLowercase(In_CapitalizedLabel:"Action",In_IsLowercase:In_IsLowercase); Out_Lookup.Actions.Plural = SetLookupLabel_MaybeLowercase(In_CapitalizedLabel:"Actions",In_IsLowercase:In_IsLowercase); Out_Lookup.Households.Singular = SetLookupLabel_MaybeLowercase(In_CapitalizedLabel:"Household",In_IsLowercase:In_IsLowercase); Out_Lookup.Households.Plural = SetLookupLabel_MaybeLowercase(In_CapitalizedLabel:"Households",In_IsLowercase:In_IsLowercase); Out_Lookup.OneSchoolStatistitics.Singular = "Show student numbers"; Out_Lookup.OneSchoolStatistitics.Plural = "Show student numbers"; Out_Lookup.OneSchoolStatistitics.Icon = Entities.UBT_Icons2.School
end
unreachable nodes (not connected to start or to an exception handler):
  end
```
