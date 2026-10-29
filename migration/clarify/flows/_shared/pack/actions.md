# Shared pack: block-only flows and shared client actions (DEV model, MCP dump 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.

Client actions that 4 or more flows use: 33

| Action | Used by flows |
|---|---|
| App_CommonFilter_CheckCountry | 7 |
| App_CommonFilter_DefineOptionNames | 7 |
| Directory_Updates_RefreshBottomBarCount | 19 |
| ExitApplicationForWebViewUpdate | 29 |
| GetBookmarkCategoryId_ByEntityTypeId | 7 |
| GetNameAndSurname_ByFullName | 11 |
| GetShareType_FromEntity | 7 |
| GetSkeletonList_UI_HouseholdMembers | 5 |
| GetSkeleton_HouseholdActions | 5 |
| GetSkeleton_UI_HouseholdCard | 5 |
| GetSkeleton_UI_HouseholdCardContent | 5 |
| GetSkeleton_UI_HouseholdDetails | 5 |
| GetSkeleton_UI_HouseholdMember | 5 |
| GetSkeleton_UI_SubdivisionCard | 4 |
| GetSkeleton_UI_SubdivisionCardContent | 4 |
| GetURLFromEventDataURL | 29 |
| GetUserInformation_Wrapper | 7 |
| GetUserInformation_Wrapper_Assign | 15 |
| Get_IsUnsupportedSystem | 29 |
| Get_IsUnsupportedVersion | 29 |
| HasAccessToRegion | 5 |
| IsHouseholdDetails_InAncestryModeView | 5 |
| OfflineDataSync | 29 |
| OfflineDataSyncConfiguration | 29 |
| OpenGooglePlay_Chrome | 29 |
| OpenGooglePlay_UBTConnect | 29 |
| OpenGooglePlay_WebView | 29 |
| ScrollTop | 19 |
| SetResumeLoginLink | 29 |
| ToggleBookmarkItem_C2 | 9 |
| Try_GetIsSupportedVersion | 29 |
| Upgrade_UBTConnect | 29 |
| Upgrade_WebView | 29 |

## App_CommonFilter_CheckCountry (function, folder App_CommonFilter)
- inputs: CountryCode: Text (mandatory); SubscribedCountries: Code, Name, RegionId Record List (mandatory)
- outputs: IsEnabled: Boolean
```
[M1] for each SubscribedCountries
  if IsEnabled
    → continues at [M1]
  else
    assign: IsEnabled = ToUpper(Trim(SubscribedCountries.Current.Code)) = ToUpper(Trim(CountryCode))
    → continues at [M1]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## App_CommonFilter_DefineOptionNames (action, folder App_CommonFilter)
- inputs: OptionList_Control: Filter_Common_Control_List (mandatory)
- outputs: Formatted: Filter_Common_Control_List
```
assign: Formatted = OptionList_Control
call ListClear(List=Formatted.SelectedNames)
[M1] for each Formatted.SelectedIds
  call ListFilter(Condition=ToUpper(Trim(Id)) = ToUpper(Trim(Formatted.SelectedIds.Current)), SourceList=OptionList_Control.In_Options)
  if ListFilter.FilteredList.Current.DisplayText <> ""
    call ListAppend(Element=ListFilter.FilteredList.Current.DisplayText, List=Formatted.SelectedNames)
    → continues at [M1]
  else
    → continues at [M1]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Directory_Updates_RefreshBottomBarCount (action, folder Directory_Updates)
- inputs: ForceRefresh: Boolean
- outputs: -
```
if (Need Refresh) DiffMinutes(Client.Directory_Updates_UnreadCount_LastCheck,CurrDateTime()) >= Client.Directory_Updates_UnreadCount_CheckFrequency_Minut or ForceRefresh
  call-server Get_UI_UpdateItems_UnreadCount_All()
  assign: Client.Directory_Updates_UnreadCount = Get_UI_UpdateItems_UnreadCount_All.UnreadCount; Client.Directory_Updates_UnreadCount_LastCheck = CurrDateTime()
  end
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## ExitApplicationForWebViewUpdate (action, folder ExternalNavigation)
- inputs: Delay: Integer
- outputs: -
```
javascript ExitApplication(Delay=Delay)
  | if (window.navigator && window.navigator.app && window.navigator.app.exitApp) {
  |     setTimeout(function(){window.navigator.app.exitApp()},$parameters.Delay)
  |     }
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetBookmarkCategoryId_ByEntityTypeId (function, folder Bookmark_Utils)
- inputs: EntityType: Connect_Entity Identifier (mandatory)
- outputs: BookmarkType: BookmarkCategory Identifier
```
switch (Type)
  case EntityType = Entities.Connect_Entity.Member (Member)
    assign (Member): BookmarkType = Entities.BookmarkCategory.Member
    end
  case EntityType = Entities.Connect_Entity.Locality (Locality)
    assign (Locality): BookmarkType = Entities.BookmarkCategory.Locality
    end
  case EntityType = Entities.Connect_Entity.Household (Household)
    assign (Household): BookmarkType = Entities.BookmarkCategory.Household
    end
  case EntityType = Entities.Connect_Entity.Interchange (Interchange)
    assign (Interchange): BookmarkType = Entities.BookmarkCategory.Interchange
    end
  case EntityType = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions (SupperMeetings_aka_Subdivisions)
    assign (SupperMeeting): BookmarkType = Entities.BookmarkCategory.SupperMeeting
    end
  case EntityType = Entities.Connect_Entity.OneSchoolGlobal (OneSchoolGlobal)
    assign (School): BookmarkType = Entities.BookmarkCategory.OneSchoolGlobal2
    end
  otherwise
    raise InvalidAction: "Bookmarks not available"
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetNameAndSurname_ByFullName (action, folder Utils_Text)
- inputs: In_FullName: Text (mandatory)
- outputs: Out_Surname: Text; Out_Name: Text
```
call JSUtils_String_Split(Char=" ", String=In_FullName)
assign: Out_Surname = JSUtils_String_Split.List[JSUtils_String_Split.List.Length-1]
[M1] for each JSUtils_String_Split.List
  assign: Out_Name = Out_Name + If(JSUtils_String_Split.List.CurrentRowNumber < (JSUtils_String_Split.List.Length-1), " " + JSUtils_String_Split.List.Current,"")
  → continues at [M1]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetShareType_FromEntity (action, folder Share_Utils)
- inputs: EntityType: Connect_Entity Identifier (mandatory); IsMyHousehold: Boolean
- outputs: ShareType: Type_ShareObject Identifier
```
switch (Type)
  case EntityType = Entities.Connect_Entity.Member (Member)
    raise InvalidAction: "Share not available"
  case EntityType = Entities.Connect_Entity.Locality (Locality)
    assign (Locality): ShareType = Entities.Type_ShareObject.Locality
    end
  case EntityType = Entities.Connect_Entity.Household (Household)
    assign (Household): ShareType = Entities.Type_ShareObject.Household
    end
  case EntityType = Entities.Connect_Entity.Interchange (Interchange)
    assign (Interchange): ShareType = Entities.Type_ShareObject.Locality
    end
  case EntityType = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions (SupperMeetings_aka_Subdivisions)
    assign (Partner Exchange): ShareType = Entities.Type_ShareObject.SupperMeeting
    end
  case EntityType = Entities.Connect_Entity.OneSchoolGlobal (OneSchoolGlobal)
    assign (School): ShareType = Entities.Type_ShareObject.OneSchoolGlobal
    end
  case EntityType = Entities.Connect_Entity.FeedItem
    assign (FeedItem): ShareType = Entities.Type_ShareObject.Feed
    end
  case IsMyHousehold
    assign (My Household): ShareType = Entities.Type_ShareObject.MyHousehold
    end
  otherwise
    raise InvalidAction: "Share not available"
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeletonList_UI_HouseholdMembers (action, folder Directory_Skeleton)
- inputs: ListLength: Integer
- outputs: UI_HouseholdMember: UI_HouseholdMember List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_HouseholdMember()
  call ListAppend(Element=GetSkeleton_UI_HouseholdMember.UI_HouseholdMember, List=UI_HouseholdMember)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_HouseholdActions (action, folder Directory_Skeleton)
- inputs: -
- outputs: ActionsMenutOptions: ActionsMenuOptions
```
assign (Out1): ActionsMenutOptions.HasBookmark = True; ActionsMenutOptions.HasNotes = True; ActionsMenutOptions.HasGift = True; ActionsMenutOptions.HasShare = True
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_HouseholdCard (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_Household_Card: UI_Household_Card
```
call GetSkeleton_UI_HouseholdCardContent()
assign: UI_Household_Card = ConvertRecord(GetSkeleton_UI_HouseholdCardContent.HouseholdCardContent,  {Id:"1","Household_Card_Content.Name":"Name","Household_Card_Content.FamilyNames":"FamilyNames","Household_Card_Content.Address":"Address","Household_Card_Content.LocalityName":"LocalityName","Household_Card_Content.CountryNam…
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_HouseholdCardContent (action, folder Directory_Skeleton)
- inputs: -
- outputs: HouseholdCardContent: UI_Household_Card_Content
```
assign (Out_HouseholdDetailsCardContent): HouseholdCardContent.Name = "Example & Example"; HouseholdCardContent.FamilyNames = "Example, Example, Example, Example"; HouseholdCardContent.Address = "testing address testing addres NSW 2000"; HouseholdCardContent.LocalityName = "Example"; HouseholdCardContent.CountryName = "Example"; HouseholdCardContent.SupperMeetingName = "Example Example Example"; HouseholdCardContent.TimezoneName = "EAST"; HouseholdCardContent.Surname = "Example"; HouseholdCardContent.TimezoneOffset = 12
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_HouseholdDetails (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_HouseholdDetails: UI_Screen_HouseholdDetails
```
call GetSkeleton_UI_HouseholdCard()
call GetSkeleton_HouseholdActions()
assign: UI_HouseholdDetails.HouseholdCard = GetSkeleton_UI_HouseholdCard.UI_Household_Card; UI_HouseholdDetails.Household_Actions = GetSkeleton_HouseholdActions.ActionsMenutOptions
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_HouseholdMember (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_HouseholdMember: UI_HouseholdMember
```
assign (UI_HouseholdMember): UI_HouseholdMember.FirstName = "Example"; UI_HouseholdMember.LastName = "Example"; UI_HouseholdMember.Initials = "MM"
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_SubdivisionCard (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_SubdivisionCard: UI_Subdivision_Card
```
call GetSkeleton_UI_SubdivisionCardContent()
assign: UI_SubdivisionCard.Subdivision_Card_Content = GetSkeleton_UI_SubdivisionCardContent.UI_SubdivisionCardContent
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_SubdivisionCardContent (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_SubdivisionCardContent: UI_Subdivision_Card_Content
```
assign (UI_SubdivisionCardDetails): UI_SubdivisionCardContent.Name = "Subdivision Name Example"; UI_SubdivisionCardContent.BretherenCount = 10; UI_SubdivisionCardContent.HouseholdCount = 10; UI_SubdivisionCardContent.BrothersCount = 10; UI_SubdivisionCardContent.SistersCount = 10; UI_SubdivisionCardContent.Address = "Subdivision Formatted Address Example"
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetURLFromEventDataURL (action, folder Share_Utils)
- inputs: EventDataURL: Text (mandatory)
- outputs: URL: Text
```
assign: URL = Replace(EventDataURL,"ConnectSharing/Details" , "UBTConnect/ConnectShare")\n//Replace(EventData.URL,GetShareSubdirectory(),"ConnectMobile/ConnectShare")\n; URL = Replace(URL,"UBTConnect/UBTConnect/" , "UBTConnect/")\n
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetUserInformation_Wrapper (action, folder App_Cache)
- inputs: -
- outputs: UserInformation: Directory_UserCurrent
```
call Cache_UserInfo_Get()
assign: UserInformation = Cache_UserInfo_Get.UserInformation.Directory_UserCurrent
call GetUserInformation_Wrapper_Assign(UserInformation=Cache_UserInfo_Get.UserInformation)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetUserInformation_Wrapper_Assign (action, folder App_Cache)
- inputs: UserInformation: CacheControl_UserInformation
- outputs: -
```
assign: Client.App_Policies_HasPolicyToAccept = UserInformation.HasPoliciesToAccept
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_IsUnsupportedSystem (action, folder UnsupportedSystems)
- inputs: -
- outputs: Out_IsUnsupportedSystem: Boolean
```
call Get_IsUnsupportedVersion()
assign: Out_IsUnsupportedSystem = Get_IsUnsupportedVersion.Out_IsUnsupportedAppVersion or Get_IsUnsupportedVersion.Out_IsUnsupportedBrowserVersion
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_IsUnsupportedVersion (action, folder UnsupportedSystems)
- inputs: -
- outputs: Out_IsUnsupportedWebViewVersion: Boolean; Out_IsUnsupportedAppVersion: Boolean; Out_IsUnsupportedBrowserVersion: Boolean
```
call Try_GetIsSupportedVersion()
assign: Out_IsUnsupportedAppVersion = not Try_GetIsSupportedVersion.IsSupportedNativeVersion; Out_IsUnsupportedBrowserVersion = not Try_GetIsSupportedVersion.IsSupportedWebView; Out_IsUnsupportedWebViewVersion = Try_GetIsSupportedVersion.IsAndroid and not Try_GetIsSupportedVersion.IsSupportedWebView 
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## HasAccessToRegion (action, folder User)
- inputs: Target_LocalityNameOrId: Text (mandatory); Target_CountryNameOrCode: Text (mandatory)
- outputs: HasAccess: Boolean
```
assign: Target_LocalityNameOrId = ToLower(Target_LocalityNameOrId); Target_CountryNameOrCode = ToLower(Target_CountryNameOrCode)
call Cache_UserInfo_Get()
switch
  case Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType = Entities.Connect_Subscription_Plan.Global (Global)
    assign: HasAccess = True
    end
  case Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType = Entities.Connect_Subscription_Plan.Regional or\nCache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType = Entities.Connect_Subscription… (Regional or AdvPlus)
    if Target_CountryNameOrCode = ""
      assign: HasAccess = False
      end
    else
      call ListAny(Condition=ToLower(Name) = Target_CountryNameOrCode or \nToLower(Code) = Target_CountryNameOrCode, List=Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscribedCountries) as IsTargetCountryInSubscribedCountries
      assign: HasAccess = IsTargetCountryInSubscribedCountries.Result
      end
  case Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionType = Entities.Connect_Subscription_Plan.Free (Free)
    if Target_LocalityNameOrId = "0" or\nTarget_LocalityNameOrId = ""
      assign: HasAccess = IsStringEquals(Target_CountryNameOrCode,Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Country_Name) or\nIsStringEquals(Target_CountryNameOrCode,Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Country_Code)
      end
    else
      assign: HasAccess = ToLower(Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_Name) = Target_LocalityNameOrId or \nToLower(Cache_UserInfo_Get.UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_Id) = Target_LocalityNameOrId
      end
  otherwise
    assign: HasAccess = False
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
  end
  end
```

## IsHouseholdDetails_InAncestryModeView (action, folder Directory_MemoryCache_Household)
- inputs: HouseholdId: Long Integer (mandatory)
- outputs: Exists: Boolean
```
javascript AncestryModeViewExists(In_HouseholdId=HouseholdId) → Exists: Boolean
  | window.ancestryViewHouseholds = window.ancestryViewHouseholds || [];
  | 
  | $parameters.Exists = window.ancestryViewHouseholds.includes($parameters.In_HouseholdId);
assign: Exists = AncestryModeViewExists.Exists
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## OfflineDataSync (action, folder App_OfflineDataSync)
- inputs: SyncUnit: Text (mandatory)
- outputs: -
```
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## OfflineDataSyncConfiguration (action, folder App_OfflineDataSync)
- inputs: -
- outputs: SyncOnOnline: Boolean; SyncOnLogin: Boolean; SyncOnResume: Boolean; RetryOnError: Boolean; RetryIntervalInSeconds: Integer
```
assign: SyncOnOnline = True
assign: SyncOnLogin = True
assign: SyncOnResume = True
assign: RetryOnError = False
assign: RetryIntervalInSeconds = 30
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## OpenGooglePlay_Chrome (action, folder ExternalNavigation)
- inputs: -
- outputs: -
```
javascript OpenGooglePlay()
  | window.open("market://details?id=com.android.chrome", "_system");
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## OpenGooglePlay_UBTConnect (action, folder ExternalNavigation)
- inputs: -
- outputs: -
```
javascript OpenGooglePlay(PackageName=AppManager_GetPackageName())
  | window.open("market://details?id=" + $parameters.PackageName, "_system");
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## OpenGooglePlay_WebView (action, folder ExternalNavigation)
- inputs: -
- outputs: -
```
javascript OpenGooglePlay()
  | window.open("market://details?id=com.google.android.webview", "_system");
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## ScrollTop (action, folder Utils)
- inputs: In_ScrollContainer: Text = ".active-screen"; In_Behaviour: Text = "instant"
- outputs: -
```
javascript ScrollTop(Behaviour=In_Behaviour, ScrollContainer=In_ScrollContainer)
  | try{
  |     document.querySelector($parameters.ScrollContainer).scroll({top: 0,behavior:$parameters.Behaviour})
  | } catch(e) {
  |     console.log("Unable to scroll top")
  | }
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## SetResumeLoginLink (action, folder Share_Utils)
- inputs: URL: Text (mandatory)
- outputs: -
```
javascript JavaScript1(URL=URL)
  | window.applinks = window.applinks || {};
  | window.applinks.resumeLoginLink = $parameters.URL;
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## ToggleBookmarkItem_C2 (action, folder Directory_MyBookmarks)
- inputs: In_ItemId: Text (mandatory); In_BookmarkType: BookmarkCategory Identifier (mandatory); IsBookmarked_C2: Boolean (mandatory)
- outputs: -
```
if (Is Bookmarked?) IsBookmarked_C2
  call GetLocalBookmarkByObjectId_C2(ItemId=In_ItemId)
  call-server DeleteBookmarkByBookmarkId2(BookmarkId=GetLocalBookmarkByObjectId_C2.LocalBookmark.BookmarkId)
  if DeleteBookmarkByBookmarkId2.Success
    call Delete_LocalBookmarkByBookmarkId_C2(BookmarkId=GetLocalBookmarkByObjectId_C2.LocalBookmark.BookmarkId)
    call Bookmark_SendFeedbackMessage(IsCreate=not IsBookmarked_C2) as Bookmark_SendFeedbackMessage2
    end
  else
    call Bookmark_SendFeedbackMessage(IsCreate=not IsBookmarked_C2, isError=True) as Bookmark_SendFeedbackMessage4
    end
else
  call LogMessage(Message="In_BookmarkType "+In_BookmarkType, ModuleName="UBTConnect")
  call-server AddBookmark2(In_BookmarkCategoryId=In_BookmarkType, In_ItemId=In_ItemId)
  if AddBookmark2.Success
    call Create_LocalBookmark_C2(In_BookmarkCategoryId=In_BookmarkType, In_BookmarkId=AddBookmark2.Bookmark_Added.Id, In_DateCreatedUtc=AddBookmark2.Bookmark_Added.DateCreatedUtc, In_ItemId=In_ItemId)
    call Bookmark_SendFeedbackMessage(IsCreate=not IsBookmarked_C2)
    end
  else
    call Bookmark_SendFeedbackMessage(IsCreate=not IsBookmarked_C2, isError=True) as Bookmark_SendFeedbackMessage5
    end
on exception All Exceptions (log=True)
call Bookmark_SendFeedbackMessage(IsCreate=not IsBookmarked_C2, isError=True) as Bookmark_SendFeedbackMessage3
end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
  end
```

## Try_GetIsSupportedVersion (action, folder UnsupportedSystems)
- inputs: -
- outputs: IsSupportedNativeVersion: Boolean = True; IsSupportedWebView: Boolean = True; IsAndroid: Boolean; IsApple: Boolean
```
call AppManager_GetIsSupportedNativeVersion()
call AppManager_GetIsSupportedWebviewVersion()
assign: IsSupportedNativeVersion = AppManager_GetIsSupportedNativeVersion.IsSupportedNativeVersion; IsSupportedWebView = AppManager_GetIsSupportedWebviewVersion.IsSupported; IsAndroid = AppManager_GetIsSupportedWebviewVersion.IsAndroid; IsApple = AppManager_GetIsSupportedWebviewVersion.IsApple
end
on exception All Exceptions (log=True)
end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Upgrade_UBTConnect (action, folder ExternalNavigation)
- inputs: -
- outputs: -
```
call OpenGooglePlay_UBTConnect()
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Upgrade_WebView (action, folder ExternalNavigation)
- inputs: -
- outputs: -
```
javascript GetAndroidVersion() → Version: Integer
  | var userAgent = $public.BuiltinFunctions.getUserAgent()
  | var match = userAgent.match(/android\s([0-9\.]*)/i);
  | if(match && match[1]){
  |     match = match[1].split('.')[0];
  | }
  | $parameters.Version = parseInt(match) || -1;
if GetAndroidVersion.Version < 10 and GetAndroidVersion.Version > 0
  call OpenGooglePlay_Chrome()
  [M1] call ExitApplicationForWebViewUpdate(Delay=10000)
  end
else
  call OpenGooglePlay_WebView()
  → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Client actions that no screen flow reaches (app-start, events, system, or unused)

## AreDatesInSameMonth (function, folder Calendar_DateManipulation)
- inputs: Date: Date (mandatory); Date2: Date (mandatory)
- outputs: IsSameMonth: Boolean
```
assign: IsSameMonth = Month(Date) = Month(Date2) and\nYear(Date) = Year(Date2)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## AreDatesInSameWeek (function, folder Calendar_DateManipulation)
- inputs: Date: Date (mandatory); Date2: Date (mandatory)
- outputs: IsSameWeek: Boolean
```
assign: IsSameWeek = Date >=  GetDateOfFirstDayOfWeek(Date2) and\nDate <=  GetDateOfLastDayOfWeek(Date2)\n
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## CompareRecurrence (function, folder PersonalEvents)
- inputs: Recurrence: Recurrence; InitialRecurrence: Recurrence
- outputs: IsDifferent: Boolean
```
json-serialize JSONSerialize_Recurrence = Recurrence (dates ISO)
json-serialize JSONSerialize_InitalRecurrence = InitialRecurrence (dates ISO)
assign: IsDifferent = JSONSerialize_Recurrence.JSON <> JSONSerialize_InitalRecurrence.JSON
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## DiffMonths (function, folder Calendar_DateManipulation)
- inputs: Date1: Date (mandatory); Date2: Date (mandatory)
- outputs: DiffMonths: Integer
```
assign: DiffMonths = Abs(12 * (Year(Date1) - Year(Date2)) + Month(Date1) - Month(Date2))
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Directory_BrowseByCountry_TooltipBuilder (action, folder Directory_BrowseByCountry)
- inputs: MarkerWithTooltip: MarkerWithWindow (mandatory); LinkOnClickAction: Object (mandatory)
- outputs: Object: Object
```
json-serialize JSONSerialize1 = MarkerWithTooltip (dates ISO)
javascript JavaScript1(LinkOnClickAction=LinkOnClickAction, MarkerWithTooltip=JSONSerialize1.JSON) → Object: Object
  | let markerWithTooltip = JSON.parse($parameters.MarkerWithTooltip);
  |  const container = document.createElement('div');
  |  const link = document.createElement('a');
  |   link.href = "#";
  |   link.textContent = markerWithTooltip.Marker.ExtraData;
  | 
  |   link.addEventListener('click', (e) => {
  |     e.preventDefault();
  |     e.stopPropagation();
  |     $parameters.LinkOnClickAction(markerWithTooltip.Marker.Id);
  |     
  |   });
  | 
  |   container.appendChild(link);
  | 
  | $parameters.Object = container;
assign: Object = JavaScript1.Object
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Directory_Updates_MinDateToShow (function, folder Directory_Updates)
- inputs: -
- outputs: Date: Date
```
if Client.Directory_Updates_MonthsToShow = 0
  assign: Date = NullDate()
  end
else
  assign: Date = AddMonths(CurrDate(),-Client.Directory_Updates_MonthsToShow)
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## FCM_DeeplinkCallback (action, folder App_FirebaseCM)
- inputs: Message: Object (mandatory)
- outputs: -
- locals: Link: Text
```
javascript JavaScript1(notification=Message)
  | console.log($parameters.notification)
call FCM_ParseObject(Message=Message)
json-serialize JSONSerialize1 = FCM_ParseObject.FCM_Notification (dates ISO)
javascript JavaScript2(text=JSONSerialize1.JSON)
  | console.log($parameters.text)
assign: Link = If(FCM_ParseObject.FCM_Notification.ScreenName <> "", FCM_ParseObject.FCM_Notification.ScreenName, FCM_ParseObject.FCM_Notification.DeepLink)
if Link <> ""
  javascript JavaScript3()
    | console.log("fcm callback set last url")
  assign: Client.LastURL = Link
  call PIN_Check()
  call AppManager_OnReadyChecker()
  call AppManager_GetPIN_HasUnlocked()
  call AppManager_GetPIN_IsLocked()
  if PIN_Check.NeedRegister
    assign: Link = "/"+GetEntryEspaceName()+"/PINRegister"
    [M1] javascript JavaScript4(url=Link)
      | console.log("fcm callback navigate to " + $parameters.url)
    call ScreenController_NavigateToPage(URL=Link)
    end
  else
    if PIN_Check.NeedUnlock and (not AppManager_GetPIN_HasUnlocked.HasUnlocked or AppManager_GetPIN_IsLocked.IsLocked or not AppManager_OnReadyChecker.isReady)
      assign: Link = "/"+GetEntryEspaceName()+"/PINUnlock"
      → continues at [M1]
    else
      → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## FCM_NotificationCallback (action, folder App_FirebaseCM)
- inputs: Message: Object (mandatory)
- outputs: -
```
call FCM_ParseObject(Message=Message)
call LN_MaybeTriggerLocalNotification(In_FCM_Notification=FCM_ParseObject.FCM_Notification)
call SynchronizeNumberUnreadMessages()
assign: Client.Notifications_LastChecked = CurrDateTime()
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## FRD_UserCallback (action, folder App_FirebaseRealDB)
- inputs: Response: Object (mandatory)
- outputs: -
```
call ParseFirevaseEventValue(Snapshot=Response)
if (LogOut) ParseFirevaseEventValue.FirebaseEvent.EventType = Entities.AppManager_FRD_Event.LogOut
  end
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## FormatEventDescriptionTime (function, folder MemoryCache_Calendar)
- inputs: Start: Date Time (mandatory); End: Date Time (mandatory); IsAllDay: Boolean (mandatory); ShowEndTime: Boolean = True
- outputs: EventDescriptionTime: Text
```
switch
  case IsAllDay and\nDateTimeToDate(End) > DateTimeToDate(Start) \n//End > AddDays(DateTimeToDate(Start),1) (MultiDay-AllDay)
    assign: EventDescriptionTime = FormatDateTime(Start,"d MMM") + " - " + FormatDateTime(End,"d MMM") 
    [M1] assign (>>): 
    end
  case IsAllDay
    assign: EventDescriptionTime = "All day"
    → continues at [M1]
  case End > AddDays(DateTimeToDate(Start),1) (MutiDay-StartEnd)
    assign (MultiDay): EventDescriptionTime = FormatDateTime(Start,"dd MMM") + " " + FormatDateTime(Start,"h:mm tt") + " - " + FormatDateTime(End,"dd MMM")  + " " + FormatDateTime(End,"h:mm tt")
    → continues at [M1]
  otherwise
    assign: EventDescriptionTime = FormatDateTime(Start,"h:mm tt") + If(ShowEndTime," - " + FormatDateTime(End,"h:mm tt"),"")
    → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDateOfFirstDayOfMonth (function, folder Calendar_DateManipulation)
- inputs: DateOfDayInMonth: Date (mandatory)
- outputs: Date: Date
```
assign: Date = NewDate(Year(DateOfDayInMonth),Month(DateOfDayInMonth),1)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDateOfFirstDayOfWeek (function, folder Calendar_DateManipulation)
- inputs: DayInWeek: Date (mandatory)
- outputs: Date: Date
```
assign: Date = AddDays(DayInWeek,-1*DayOfWeek(DayInWeek))
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDateOfLastDayOfMonth (function, folder Calendar_DateManipulation)
- inputs: DateOfDayInMonth: Date (mandatory)
- outputs: Date: Date
```
assign: Date = AddDays(AddMonths(GetDateOfFirstDayOfMonth(DateOfDayInMonth),1),-1)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDateOfLastDayOfWeek (function, folder Calendar_DateManipulation)
- inputs: DayInWeek: Date (mandatory)
- outputs: Date: Date
```
call GetDateOfFirstDayOfWeek(DayInWeek=DayInWeek)
assign: Date = AddDays(GetDateOfFirstDayOfWeek.Date, 6)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDayLabel (function, folder PersonalEvents)
- inputs: FormatWeekday: Text (mandatory); Date: Date (mandatory)
- outputs: DayLabel: Text
```
assign: DayLabel = If(DayOfWeek(Date) = 0, "Lord's Day", FormatDateTime(Date, FormatWeekday))
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDescriptor_BretherenCount (function, folder Directory_Subdivision)
- inputs: In_BretherenCount: Integer (mandatory)
- outputs: Out_Descriptor: Text
```
assign: Out_Descriptor = GetLookupConcepts().Brethren.Plural + ": " + In_BretherenCount
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDescriptor_OneSchool_Event_Years (function, folder Directory_OneSchool)
- inputs: Year_List: Integer List (mandatory)
- outputs: Descriptor: Text
- locals: YearRange_List: Text List; YearRangeStart: Text; YearRangeEnd: Text
```
[M1] for each Year_List
  if (FirstOfRange) Year_List.CurrentRowNumber = 0 or\nYearRangeStart = ""
    assign: YearRangeStart = Year_List.Current
    → continues at [M1]
  else
    assign (>>): 
    if (Increased by one?) Year_List.Current = Year_List[Year_List.CurrentRowNumber-1] + 1
      assign: YearRangeEnd = Year_List.Current
      [M2] assign (<<): 
      → continues at [M1]
    else
      call TextListAppend_Function(In_Appended_TextList=YearRange_List, In_ElementToAppend=YearRangeStart + If(YearRangeEnd <> "", " - " + YearRangeEnd,""))
      assign (Clear range): YearRange_List = TextListAppend_Function.Out_Appended_TextList; YearRangeStart = Year_List.Current; YearRangeEnd = ""
      assign (<<): 
      → continues at [M2]
end for
if YearRangeStart <> ""
  call TextListAppend_Function(In_Appended_TextList=YearRange_List, In_ElementToAppend=YearRangeStart + If(YearRangeEnd <> "", " - " + YearRangeEnd,"")) as TextListAppend_Function_LastElement
  assign: YearRange_List = TextListAppend_Function_LastElement.Out_Appended_TextList
  [M3] call ListJoin(Text_List=YearRange_List)
  assign: Descriptor = "Years " + ListJoin.Text_Joined
  end
else
  → continues at [M3]
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDescriptor_Subdivision_GenderSplit (function, folder Directory_Subdivision)
- inputs: In_BrothersCount: Integer (mandatory); In_SistersCount: Integer (mandatory)
- outputs: Out_Descriptor: Text
```
assign: Out_Descriptor = In_BrothersCount + " " + GetLookupConcepts().Brother.Plural + " & " + In_SistersCount + " " + GetLookupConcepts().Sister.Plural
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDescriptor_Subdivision_HouseholdCount (function, folder Directory_Subdivision)
- inputs: In_HouseholdCount: Integer (mandatory)
- outputs: Out_Descriptor: Text
```
assign: Out_Descriptor = GetLookupConcepts().Household.Plural + ": " + In_HouseholdCount
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetDistinctYearsOptions (action, folder Bookmarks_Filter)
- inputs: Raw_Bookmarks: UI_Bookmark_List_API List (mandatory)
- outputs: Out_Options: SelectionOption_Item List
- locals: CurrentYear: Text; Years: Text List
```
[M1] for each Raw_Bookmarks
  assign: CurrentYear = Year(Raw_Bookmarks.Current.DateCreatedUtc)
  call ListAny(Condition=Value = CurrentYear, List=Years) as ListAnyYearsByCurrentYear
  if (Exist) ListAnyYearsByCurrentYear.Result
    → continues at [M1]
  else
    call ListAppend(Element={ Id: CurrentYear, DisplayText: CurrentYear }, List=Out_Options) as ListAppendYear
    → continues at [M1]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetIconLabel_Interchange_Statistics (function, folder Directory_Interchange)
- inputs: StatisticItemName: Text (mandatory)
- outputs: Icon: Color_Id, IconId Record
```
switch (SupperMeetings)
  case StatisticItemName = "Brethren" (Brethren)
    assign (Icon): Icon.Color_Id = GetLookupConcepts().Brethren.Icon_Color; Icon.IconId = GetLookupConcepts().Brethren.Icon
    end
  case StatisticItemName = "Households" (Households)
    assign (Icon): Icon.Color_Id = GetLookupConcepts().Household.Icon_Color; Icon.IconId = GetLookupConcepts().Household.Icon
    end
  case StatisticItemName = "Supper Meetings" (Supper Meetings)
    assign (Icon): Icon.Color_Id = GetLookupConcepts().SupperMeeting.Icon_Color; Icon.IconId = GetLookupConcepts().SupperMeeting.Icon
    end
  case StatisticItemName = "Brothers" (Brothers)
    assign (Icon): Icon.Color_Id = GetLookupConcepts().Brother.Icon_Color; Icon.IconId = GetLookupConcepts().Brother.Icon
    end
  case StatisticItemName = "Sisters" (Sisters)
    assign (Icon): Icon.Color_Id = GetLookupConcepts().Sister.Icon_Color; Icon.IconId = GetLookupConcepts().Sister.Icon
    end
  case StatisticItemName = "Distance" (Distance)
    assign (Icon): Icon.Color_Id = GetLookupConcepts().Distance.Icon_Color; Icon.IconId = GetLookupConcepts().Distance.Icon
    end
  otherwise
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
  end
  end
  end
```

## GetLocalityCurrentTimeLabel (function, folder Directory_Locality)
- inputs: In_UTCOffsetSeconds: Integer (mandatory); In_LocalDateTime: Date Time (mandatory)
- outputs: Out_CurrentTimeLabel: Text
- locals: LocalLocalityDateTime: Date Time; OffsetLabel: Text; OffsetDecimalValue: Decimal
```
call JSUtils_DateTime_GetUTCOffset()
assign: LocalLocalityDateTime = AddMinutes(In_LocalDateTime, JSUtils_DateTime_GetUTCOffset.UTCOffset); LocalLocalityDateTime = AddSeconds(LocalLocalityDateTime,In_UTCOffsetSeconds)
call GetConnectWeekdayLabel_ByDate(In_Date=LocalLocalityDateTime)
call FormatConnectTime(In_Time=LocalLocalityDateTime)
assign: OffsetLabel = Trunc((Abs(In_UTCOffsetSeconds)/3600)); OffsetDecimalValue = In_UTCOffsetSeconds/3600; OffsetDecimalValue = Abs(OffsetDecimalValue) - Trunc(Abs(OffsetDecimalValue))
if OffsetDecimalValue > 0
  assign: OffsetLabel = OffsetLabel + ":" + (OffsetDecimalValue * 60)
  [M1] assign: Out_CurrentTimeLabel = GetConnectWeekdayLabel_ByDate.Out_WeekdayLabel.LongLabel + ", " + FormatConnectTime.Out_FormattedTime + " (UTC" +\nIf(In_UTCOffsetSeconds < 0, " - ", " + ") + OffsetLabel + ")"
  end
else
  → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetLocalityLabel (function, folder Directory_Locality)
- inputs: In_LocalityName: Text (mandatory); In_CountryName: Text (mandatory)
- outputs: Out_Label: Text
```
assign: Out_Label = In_LocalityName + ", " + In_CountryName
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetLocalityMenu (function, folder Directory_Locality)
- inputs: -
- outputs: LocalityMenuOptions: Entities_LocalityMenuOptions
```
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetMonthGrid (function, folder Utils_DateTime_Month_DateCalculation)
- inputs: -
- outputs: TotalNumberOfDays: Integer
```
assign: TotalNumberOfDays = Client.ColumnsPerView * Client.RowsPerMonth
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetMonthGrid_ExtraRow (function, folder Utils_DateTime_Month_DateCalculation)
- inputs: -
- outputs: TotalNumberOfDays: Integer
```
assign: TotalNumberOfDays = Client.ColumnsPerView * (Client.RowsPerMonth + 1)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetMonthName (function, folder Utils_DateTime_Month_DateCalculation)
- inputs: DayInMonth: Date (mandatory)
- outputs: MonthName: Text
```
assign (Set output): MonthName = FormatDateTime(DateToDateTime(DayInMonth),"MMMM")
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetRecurrenceDescription (function, folder PersonalEvents)
- inputs: Recurrence: Recurrence (mandatory); IncludeEndDate: Boolean; IsFromNotification: Boolean; LineTerminator: Text = "."
- outputs: Label: Text
- locals: TypeLabel: Text; UntilLabel: Text; FormatDay: Text = "d"; FormatMonth: Text = "MMMM"; FormatWeekday: Text = "dddd"; FormatEndDate: Text = "d MMM, yyyy"
```
assign: Label = If(IsFromNotification, "occurs ", "Occurs ")
switch
  case Recurrence.Pattern.Type = Entities.RecurrenceType.daily (daily?)
    assign: TypeLabel = "every " +\nIf(Recurrence.Pattern.Interval <= 1,\n    "day",\n    If(Recurrence.Pattern.Interval = 2,\n        "other day",\n        Recurrence.Pattern.Interval + " days")\n)
    [M1] assign: 
    assign: UntilLabel = " until " +\n        If(IncludeEndDate,\n            FormatDateTime(Recurrence.Range.EndDate, FormatEndDate + LineTerminator),\n            ""\n        )\n\n\n/*If(Recurrence.Range.Type = Entities.RecurrenceRangeType.endDate,\n    " until " +\n        If(IncludeEndDate,\n            FormatDateTime(…
    assign: Label = Label + TypeLabel + UntilLabel\n
    end
  case Recurrence.Pattern.Type = Entities.RecurrenceType.monthly\n (monthly?)
    assign: TypeLabel = If(Recurrence.Range.Type = Entities.RecurrenceRangeType.endDate and not IncludeEndDate,\n    "on " + \n        If(Recurrence.Pattern.Index = NullTextIdentifier(),\n            "day " + FormatDateTime(Recurrence.Range.StartDate, FormatDay), \n            "the " + Recurrence.Pattern.Index + " " + Get…
    → continues at [M1]
  case Recurrence.Pattern.Type = Entities.RecurrenceType.yearly\n (yearly?)
    assign: TypeLabel = If(not IncludeEndDate,\n "on ",\n  If(Recurrence.Pattern.Index = NullTextIdentifier(),\n    "every ",\n    "every year on "\n  ))  +\nIf(Recurrence.Pattern.Index = NullTextIdentifier(),\n    FormatDateTime(Recurrence.Range.StartDate, FormatDay + " " + FormatMonth),\n        "the "\n    +  Recurrenc…
    → continues at [M1]
  case Recurrence.Pattern.Type = Entities.RecurrenceType.weekly (weekly?)
    assign: TypeLabel = "every " +\nIf(Recurrence.Pattern.Interval <= 1,\n    "",\n    If(Recurrence.Pattern.Interval = 2,\n        "other ",\n        Recurrence.Pattern.Interval + " weeks on ")\n) +\nGetRecurrentWeekdaysLabelByRecurrence(Recurrence)
    → continues at [M1]
  otherwise
    assign: Label = "Does not repeat"
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetRecurrencePatternTypeLabel (function, folder PersonalEvents)
- inputs: RecurrenceTypes: RecurrenceType List (mandatory); RecurrenceTypeId: RecurrenceType Identifier (mandatory); Interval: Integer (mandatory)
- outputs: Label: Text
```
[M1] for each RecurrenceTypes
  if RecurrenceTypes.Current.Id = RecurrenceTypeId
    assign: Label = If(Interval > 1, RecurrenceTypes.Current.PluralLabel, RecurrenceTypes.Current.Label)
    end
  else
    → continues at [M1]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetRecurrencePatternWeekIndexList (action, folder PersonalEvents)
- inputs: Date: Date (mandatory); RecurrencePatternWeekIndex: RecurrencePatternWeekIndex List
- outputs: DateRecurrencePatternWeekIndexes: RecurrencePatternWeekIndex Identifier List
- locals: DeltaDays: Integer; Index: Integer = 1; FirstDayOfMonth: Date; MatchingWeekdayDate: Date
```
assign: FirstDayOfMonth = NewDate(Year(Date),Month(Date),1); DeltaDays = DayOfWeek(Date) - DayOfWeek(FirstDayOfMonth); DeltaDays = If(DeltaDays < 0,\n    DeltaDays + 7,\n    DeltaDays\n); MatchingWeekdayDate = NewDate(Year(Date),Month(Date),1 + DeltaDays)
[M1] if (Found index?) Date = MatchingWeekdayDate or \nIndex > 5
  call ListIndexOf(Condition=WeekIndex = Index, List=RecurrencePatternWeekIndex)
  call ListAppend(Element=RecurrencePatternWeekIndex[ListIndexOf.Position].Id, List=DateRecurrencePatternWeekIndexes)
  if (Append last?) DateRecurrencePatternWeekIndexes.Current = Entities.RecurrencePatternWeekIndex.fourth
    call ListAppend(Element=Entities.RecurrencePatternWeekIndex.last, List=DateRecurrencePatternWeekIndexes) as ListAppend_Last
    end
  else
    end
else
  assign: Index = Index+1; MatchingWeekdayDate = AddDays(MatchingWeekdayDate,7)
  → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetRecurrentWeekdaysLabelByRecurrence (function, folder PersonalEvents)
- inputs: Recurrence: Recurrence (mandatory)
- outputs: Label: Text
```
[M1] for each Recurrence.Pattern.DaysOfWeek
  if (Sunday?) Recurrence.Pattern.DaysOfWeek.Current = Entities.DayOfWeek.Sunday
    assign (Lord's Day): Recurrence.Pattern.DaysOfWeek.Current = "Lord's Day"
    [M2] assign: Label = Label + \nToUpper(Substr(Recurrence.Pattern.DaysOfWeek.Current,0,1)) +\nSubstr(Recurrence.Pattern.DaysOfWeek.Current,1,Length(Recurrence.Pattern.DaysOfWeek.Current)) + \nIf(Recurrence.Pattern.DaysOfWeek.CurrentRowNumber = Recurrence.Pattern.DaysOfWeek.Length -1,\n    "",\n    If(Recurrence.Pattern.…
    → continues at [M1]
  else
    → continues at [M2]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetStartingPosition (function, folder Utils_DateTime_Month_DateCalculation)
- inputs: DayInMonth: Date (mandatory)
- outputs: StartingPosition: Integer
```
assign: StartingPosition = DayOfWeek(NewDate(Year(DayInMonth),Month(DayInMonth),1))
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_Cacheable_MapEntities (action, folder Directory_Map)
- inputs: -
- outputs: -
- locals: TimeToLive: Integer = 7200
```
call-server FetchData_CacheableMapEntities()
call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.GlobalEntities, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.GlobalEntities, Object=ToObject(FetchData_CacheableMapEntities.GlobalLocations_Markers)) as PutCacheableObject_GlobalLocations
call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.CountriesMarker, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.CountriesMarker, Object=ToObject(FetchData_CacheableMapEntities.Countries_Markers)) as PutCacheableObject_CountriesMarker
call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.CountriesGeoJSON, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.CountriesGeoJSON, Object=ToObject(FetchData_CacheableMapEntities.Countries_GeoJSON)) as PutCacheableObject_CountriesGeoJSON
call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.LocalitiesMarker, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.LocalitiesMarker, Object=ToObject(FetchData_CacheableMapEntities.Localities_Markers)) as PutCacheableObject_LocalitiesMarker
call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.LocalitiesGeoJSON, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.LocalitiesGeoJSON, Object=ToObject(FetchData_CacheableMapEntities.Localities_GeoJSON)) as PutCacheableObject_LocalitiesGeoJSON
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_Cacheable_MapHouseholds (action, folder Directory_Map)
- inputs: -
- outputs: -
- locals: MapExploreItem: MapExploreItem List; MarkerWithWindow: MarkerWithWindow List
```
call-server FetchData_CacheableHouseholds()
assign: MapExploreItem = ConvertList(FetchData_CacheableHouseholds.Household_Markers,  {Value:"MapExploreItem"}); MarkerWithWindow = ConvertList(FetchData_CacheableHouseholds.Household_Markers,  {Value:"MarkerWithWindow"})
call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.Households, CacheTimeToLiveSeconds=7200, MemoryCacheTypeId=Entities.CacheableMapObjects.Households, Object=ToObject(MarkerWithWindow))
call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.HouseholdsExploreItems, CacheTimeToLiveSeconds=7200, MemoryCacheTypeId=Entities.CacheableMapObjects.HouseholdsExploreItems, Object=ToObject(MapExploreItem)) as PutCacheableObject2
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_Descriptor_OneSchool_Event_TimeRange (function, folder Directory_OneSchool)
- inputs: StartTime: Time (mandatory); EndTime: Time (mandatory); Timezone: Text
- outputs: Descriptor: Text
```
call FormatConnectTime(In_Time=StartTime) as FormatConnectTime_RangeStart
call FormatConnectTime(In_Time=EndTime) as FormatConnectTime_RangeEnd
assign: Descriptor = FormatConnectTime_RangeStart.Out_FormattedTime + " - " + FormatConnectTime_RangeEnd.Out_FormattedTime + " " + Timezone
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_FormattedDistance (function, folder Directory_Map)
- inputs: In_DistanceInKm: Text (mandatory)
- outputs: Out_FormattedDistance: Text
- locals: DistanceInKm: Decimal
```
assign: DistanceInKm = TextToDecimal(In_DistanceInKm)
if In_DistanceInKm = ""
  end
else
  if DistanceInKm < 1
    assign: Out_FormattedDistance = DecimalToInteger(DistanceInKm * 1000) + " m"
    end
  else
    assign: Out_FormattedDistance = DistanceInKm +" Km"
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Get_LookupRSVPStatus (function, folder Calendar_PersonalEvents)
- inputs: In_RSVPStatusId: Type_RSVPStatus Identifier (mandatory)
- outputs: Out_Lookup_RSVPStatus: Lookup_RSVPStatus
```
assign: Out_Lookup_RSVPStatus.Id = In_RSVPStatusId
if (Host?) In_RSVPStatusId = Entities.Type_RSVPStatus.Host
  assign: Out_Lookup_RSVPStatus.Color = Entities.UBT_Color.Neutral7
  end
else
  if (Accepted) In_RSVPStatusId = Entities.Type_RSVPStatus.Accepted
    assign: Out_Lookup_RSVPStatus.Color = Entities.UBT_Color.Success
    end
  else
    if (Declined) In_RSVPStatusId = Entities.Type_RSVPStatus.Declined
      assign: Out_Lookup_RSVPStatus.Color = Entities.UBT_Color.Error
      end
    else
      if (Tentative) In_RSVPStatusId = Entities.Type_RSVPStatus.Tentative
        assign: Out_Lookup_RSVPStatus.Color = Entities.UBT_Color.Warning
        end
      else
        end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
  end
```

## Get_LookupRecurrencePatternWeekIndex (function, folder Calendar_PersonalEvents)
- inputs: In_RecurrencePatternWeekIndexId: RecurrencePatternWeekIndex Identifier (mandatory)
- outputs: Out_RecurrencePatternWeekIndex: Lookup_RecurrencePatternWeekIndex
```
assign: Out_RecurrencePatternWeekIndex.Id = In_RecurrencePatternWeekIndexId
if (First?) In_RecurrencePatternWeekIndexId= Entities.RecurrencePatternWeekIndex.first
  assign: Out_RecurrencePatternWeekIndex.Index = 1
  end
else
  if (Second?) In_RecurrencePatternWeekIndexId= Entities.RecurrencePatternWeekIndex.second
    assign: Out_RecurrencePatternWeekIndex.Index = 2
    end
  else
    if (Third?) In_RecurrencePatternWeekIndexId= Entities.RecurrencePatternWeekIndex.third
      assign: Out_RecurrencePatternWeekIndex.Index = 3
      end
    else
      if (Fourth?) In_RecurrencePatternWeekIndexId= Entities.RecurrencePatternWeekIndex.fourth
        assign: Out_RecurrencePatternWeekIndex.Index = 4
        end
      else
        if (Last?) In_RecurrencePatternWeekIndexId= Entities.RecurrencePatternWeekIndex.last
          assign: Out_RecurrencePatternWeekIndex.Index = 5
          end
        else
          assign: Out_RecurrencePatternWeekIndex.Id = NullTextIdentifier()
          end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
  end
  end
```

## Get_LookupRecurrenceType (function, folder Calendar_PersonalEvents)
- inputs: In_RecurrenceTypeId: RecurrenceType Identifier (mandatory)
- outputs: Out_Lookup_RecurrenceType: Lookup_RecurrenceType
```
if (Daily) In_RecurrenceTypeId = Entities.RecurrenceType.daily
  assign: Out_Lookup_RecurrenceType.Id = Entities.RecurrenceType.daily; Out_Lookup_RecurrenceType.Label = "day"; Out_Lookup_RecurrenceType.PluralLabel = "days"; Out_Lookup_RecurrenceType.DisplayLabel = "Daily"
  end
else
  if (Weekly) In_RecurrenceTypeId = Entities.RecurrenceType.weekly
    assign: Out_Lookup_RecurrenceType.Id = Entities.RecurrenceType.weekly; Out_Lookup_RecurrenceType.Label = "week"; Out_Lookup_RecurrenceType.PluralLabel = "weeks"; Out_Lookup_RecurrenceType.DisplayLabel = "Weekly"
    end
  else
    if (Monthly) In_RecurrenceTypeId = Entities.RecurrenceType.monthly
      assign: Out_Lookup_RecurrenceType.Id = Entities.RecurrenceType.monthly; Out_Lookup_RecurrenceType.Label = "month"; Out_Lookup_RecurrenceType.PluralLabel = "months"; Out_Lookup_RecurrenceType.DisplayLabel = "Monthly"
      end
    else
      if (Yearly) In_RecurrenceTypeId = Entities.RecurrenceType.yearly
        assign: Out_Lookup_RecurrenceType.Id = Entities.RecurrenceType.yearly; Out_Lookup_RecurrenceType.Label = "year"; Out_Lookup_RecurrenceType.PluralLabel = "years"; Out_Lookup_RecurrenceType.DisplayLabel = "Yearly"
        end
      else
        end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
  end
```

## Get_LookupReminderType (function, folder Calendar_PersonalEvents)
- inputs: In_ReminderTypeId: ReminderOption Identifier (mandatory)
- outputs: Out_Lookup_ReminderType: Lookup_ReminderType
```
assign: Out_Lookup_ReminderType.Id = In_ReminderTypeId
if In_ReminderTypeId = Entities.ReminderOption.DoNotRemind
  assign: Out_Lookup_ReminderType.Label = "Don’t remind me"
  end
else
  if In_ReminderTypeId = Entities.ReminderOption.FiveMinutes
    assign: Out_Lookup_ReminderType.Label = "5 minutes before"
    end
  else
    if In_ReminderTypeId = Entities.ReminderOption.FifteenMinutes
      assign: Out_Lookup_ReminderType.Label = "15 minutes before"
      end
    else
      if In_ReminderTypeId = Entities.ReminderOption.ThirtyMinutes
        assign: Out_Lookup_ReminderType.Label = "30 minutes before"
        end
      else
        if In_ReminderTypeId = Entities.ReminderOption.OneHour
          assign: Out_Lookup_ReminderType.Label = "1 hour before"
          end
        else
          if In_ReminderTypeId = Entities.ReminderOption.TwoHours
            assign: Out_Lookup_ReminderType.Label = "2 hours before"
            end
          else
            if In_ReminderTypeId = Entities.ReminderOption.TwelveHours
              assign: Out_Lookup_ReminderType.Label = "12 hours before"
              end
            else
              if In_ReminderTypeId = Entities.ReminderOption.OneDay
                assign: Out_Lookup_ReminderType.Label = "1 day before"
                end
              else
                if In_ReminderTypeId = Entities.ReminderOption.OneWeek
                  assign: Out_Lookup_ReminderType.Label = "1 week before"
                  end
                else
                  if In_ReminderTypeId = Entities.ReminderOption.ADTimeOf
                    assign: Out_Lookup_ReminderType.Label = "At the time of the event"; Out_Lookup_ReminderType.IsAllDay = True
                    end
                  else
                    if In_ReminderTypeId = Entities.ReminderOption.ADDayOfMorning
                      assign: Out_Lookup_ReminderType.Label = "Day of event at 9:00 AM"; Out_Lookup_ReminderType.IsAllDay = True
                      end
                    else
                      if In_ReminderTypeId = Entities.ReminderOption.ADDayBeforeMorning
                        assign: Out_Lookup_ReminderType.Label = "Day before event at 9:00 AM"; Out_Lookup_ReminderType.IsAllDay = True
                        end
                      else
                        if In_ReminderTypeId = Entities.ReminderOption.ADDayBeforeAfternoon
                          assign: Out_Lookup_ReminderType.Label = "Day before event at 5:00 PM"; Out_Lookup_ReminderType.IsAllDay = True
                          end
                        else
                          if In_ReminderTypeId = Entities.ReminderOption.ADWeekBefore
                            assign: Out_Lookup_ReminderType.Label = "1 week before event at 5:00 PM"; Out_Lookup_ReminderType.IsAllDay = True
                            end
                          else
                            end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
```

## Get_NoteCategoryId_ByBookmarkCategoryId (function, folder Notes_Utils)
- inputs: BookmarkCategoryId: BookmarkCategory Identifier (mandatory)
- outputs: Out_NoteCategoryId: NoteCategory2 Identifier
```
switch
  case BookmarkCategoryId = Entities.BookmarkCategory.Household (Household)
    assign (Household Note): Out_NoteCategoryId = Entities.NoteCategory2.Household
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.SupperMeeting (Supper Metting)
    assign (Supper Metting Note): Out_NoteCategoryId = Entities.NoteCategory2.SupperMeeting
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.Interchange (Interchange)
    assign (Interchange Note): Out_NoteCategoryId = Entities.NoteCategory2.Interchange
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.Member (Member)
    assign (Member Note): Out_NoteCategoryId = Entities.NoteCategory2.Member
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.Locality (Locality)
    assign (Loclity Note): Out_NoteCategoryId = Entities.NoteCategory2.Locality
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.OneSchoolGlobal2 (OneSchool Global)
    assign (OneSchool Global Note): Out_NoteCategoryId = Entities.NoteCategory2.OneSchoolGlobal
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.FeedItem (Feed Item)
    assign (Feed Item Note): Out_NoteCategoryId = Entities.NoteCategory2.FeedItem
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.AssembleEvent (Assemble Event)
    assign (Assemble Event Note): Out_NoteCategoryId = Entities.NoteCategory2.AssembleEvent
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.LDMEvent (LDM Event)
    assign (LDM Event Note): Out_NoteCategoryId = Entities.NoteCategory2.LDMEvent
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.OrbitEvent (Orbit Event)
    assign (Orbit Event Note): Out_NoteCategoryId = Entities.NoteCategory2.OrbitEvent
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.PersonalEvent (Personal Event)
    assign (Personal Event Note): Out_NoteCategoryId = Entities.NoteCategory2.PersonalEvent
    end
  case BookmarkCategoryId = Entities.BookmarkCategory.Update (Update)
    assign (Update Note): Out_NoteCategoryId = Entities.NoteCategory2.Update
    end
  otherwise
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
  end
```

## Get_NoteCategoryId_ByEntityTypeId (function, folder Notes_Utils)
- inputs: EntityTypeId: Connect_Entity Identifier (mandatory)
- outputs: Out_NoteCategoryId: NoteCategory2 Identifier
```
switch
  case EntityTypeId = Entities.Connect_Entity.Household (Household)
    assign (Household Note): Out_NoteCategoryId = Entities.NoteCategory2.Household
    end
  case EntityTypeId = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions (Supper Metting)
    assign (Supper Metting Note): Out_NoteCategoryId = Entities.NoteCategory2.SupperMeeting
    end
  case EntityTypeId = Entities.Connect_Entity.Interchange (Interchange)
    assign (Interchange Note): Out_NoteCategoryId = Entities.NoteCategory2.Interchange
    end
  case EntityTypeId = Entities.Connect_Entity.Member (Member)
    assign (Member Note): Out_NoteCategoryId = Entities.NoteCategory2.Member
    end
  case EntityTypeId = Entities.Connect_Entity.Locality (Locality)
    assign (Loclity Note): Out_NoteCategoryId = Entities.NoteCategory2.Locality
    end
  case EntityTypeId = Entities.Connect_Entity.OneSchoolGlobal (OneSchool Global)
    assign (OneSchool Global Note): Out_NoteCategoryId = Entities.NoteCategory2.OneSchoolGlobal
    end
  case EntityTypeId = Entities.Connect_Entity.FeedItem (Feed Item)
    assign (Feed Item Note): Out_NoteCategoryId = Entities.NoteCategory2.FeedItem
    end
  otherwise
    raise InvalidAction: "Notes not available"
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_UserEventFormFormattedDate (function, folder Calendar_PersonalEvents)
- inputs: In_Date: Date (mandatory)
- outputs: Out_FormattedDate: Text
```
assign: Out_FormattedDate = FormatDateTime(In_Date,"d MMM, yyyy")
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_WeekIndexOptionLabel (function, folder Calendar_PersonalEvents)
- inputs: In_RecurrenceTypeId: RecurrenceType Identifier (mandatory); In_RecurrencePatternWeekIndexId: RecurrencePatternWeekIndex Identifier (mandatory); In_RecurrenceStartDate: Date (mandatory)
- outputs: Out_WeekIndexLabel: Text
```
switch
  case In_RecurrenceTypeId = Entities.RecurrenceType.monthly (Monthly)
    assign: Out_WeekIndexLabel = "On " + \nIf(In_RecurrencePatternWeekIndexId = NullTextIdentifier(),\n    "day " + \n        Day(In_RecurrenceStartDate),\n    "the " + \n        In_RecurrencePatternWeekIndexId + " " + \n        GetConnectWeekdayLabel_ByDate(In_RecurrenceStartDate).LongLabel\n)
    end
  case In_RecurrenceTypeId = Entities.RecurrenceType.yearly (Yearly)
    assign: Out_WeekIndexLabel = "On " + \nIf(In_RecurrencePatternWeekIndexId = NullTextIdentifier(),\n    Day(In_RecurrenceStartDate) + " " + FormatDateTime(In_RecurrenceStartDate, "MMMM"),\n    "the " + \n        In_RecurrencePatternWeekIndexId + " " + GetConnectWeekdayLabel_ByDate(In_RecurrenceStartDate).LongLabel + " of " +\n …
    end
  otherwise
    end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Get_Years_Extra_Option_FlatList (action, folder Bookmarks_Filter)
- inputs: Raw_Bookmarks: UI_Bookmark_List_API List (mandatory)
- outputs: Out_Years_Extra_Options_FlatLists: Filter_Common_Control_List List; Out_Years_Extra_Option_FlatList: Filter_Common_Control_List
```
call GetDistinctYearsOptions(Raw_Bookmarks=Raw_Bookmarks)
assign: Out_Years_Extra_Option_FlatList.Title = "Filter by year"; Out_Years_Extra_Option_FlatList.In_Options = GetDistinctYearsOptions.Out_Options
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## HouseholdMember_GetShowContacts (function, folder Directory_HouseholdMembers)
- inputs: In_Age: Integer (mandatory)
- outputs: ShowContacts: Boolean
```
if (Younger than 21?) In_Age < 21
  end
else
  assign: ShowContacts = True
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## IsEventOnDay (function, folder Calendar)
- inputs: Day: Date (mandatory); EventStartDateTime: Date Time (mandatory); EventEndDateTime: Date Time (mandatory); IsAllDay: Boolean (mandatory)
- outputs: IsOnDay: Boolean
```
if IsAllDay
  assign (IsOnDay): IsOnDay = Day >= DateTimeToDate(EventStartDateTime) and \nDay <= DateTimeToDate(EventEndDateTime)
  end
else
  assign: IsOnDay = Day >= DateTimeToDate(EventStartDateTime) and \nBuildDateTime(Day,NullTime())  < EventEndDateTime
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## IsItemAboveMaximumDate (function, folder Calendar_DynamicCalendar)
- inputs: CalendarViewTypeId: CalendarView Identifier (mandatory); ItemDate: Date (mandatory); MaximumDate: Date (mandatory)
- outputs: IsAboveMaximumDate: Boolean
```
switch
  case CalendarViewTypeId = Entities.CalendarView.Day (Day?)
    assign: IsAboveMaximumDate = ItemDate > MaximumDate
    end
  case CalendarViewTypeId = Entities.CalendarView.Week (Week?)
    assign: IsAboveMaximumDate = GetDateOfFirstDayOfWeek(ItemDate) > MaximumDate
    end
  case CalendarViewTypeId = Entities.CalendarView.Month (Month)
    assign: IsAboveMaximumDate = GetDateOfFirstDayOfMonth(ItemDate) > MaximumDate
    end
  otherwise
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## IsStringEquals (function, folder Utils_Text)
- inputs: In_FirstString: Text (mandatory); In_SecondString: Text (mandatory); In_IsCaseSensitive: Boolean
- outputs: Out_IsStringEquals: Boolean
```
if In_IsCaseSensitive
  [M1] assign: Out_IsStringEquals = Trim(In_FirstString) = Trim(In_SecondString)
  end
else
  assign: In_FirstString = ToLower(In_FirstString); In_SecondString = ToLower(In_SecondString)
  → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  end
```

## LN_MaybeTriggerLocalNotification (action, folder App_LocalNotification)
- inputs: In_FCM_Notification: FCM_Notification (mandatory)
- outputs: -
- locals: Icon: Text
```
if In_FCM_Notification.DeepLink <> ""\n
  json-serialize JSONSerialize_OriginalNotification = In_FCM_Notification (dates ISO)
  call ListIndexOf(Condition=Key = Entities.Type_FCMExtraParameter.NotificationIcon, List=In_FCM_Notification.ExtraDataList) as ListIndexOf_Icon
  if ListIndexOf_Icon.Position <> -1
    assign: Icon = In_FCM_Notification.ExtraDataList[ListIndexOf_Icon.Position].Value
    [M1] call TriggerForegroundNotification(In_Body=In_FCM_Notification.Body, In_Data=JSONSerialize_OriginalNotification.JSON, In_IconName=Icon, In_Title=In_FCM_Notification.Title)
    end
  else
    → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## ListJoin (function, folder Utils_Text)
- inputs: Text_List: Text List (mandatory); Separator: Text = ", "; LastElementSeparator: Text = " & "; Terminator: Text = ""
- outputs: Text_Joined: Text
```
if Text_List.Empty
  end
else
  [M1] for each Text_List
    assign: Text_Joined = Text_Joined + \nText_List.Current +\nIf(Text_List.CurrentRowNumber = Text_List.Length - 1,\n    Terminator,\n    If(Text_List.CurrentRowNumber = Text_List.Length - 2,\n      If(Index(Text_List[Text_List.CurrentRowNumber + 1], LastElementSeparator, 1) > 0,\n         Separator,\n         LastElementS…
    → continues at [M1]
  end for
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## LockOrientationLandscapeIfNeeded (action, folder ScreenOrientation)
- inputs: OnNavigation: Boolean
- outputs: -
```
if (Is IOs?) CheckIOsPlatform()
  end
else
  javascript IsLandscape() → IsMobile: Boolean; IsLandscape: Boolean
    | var orientation = window.screen.orientation.type;
    | $parameters.IsLandscape = orientation == "landscape-primary" || orientation == "landscape-secondary";
    | //$parameters.IsLandscape = true
    | $parameters.IsMobile = window.cordova? true : false;
  if (Is Mobile and Portrait?) IsLandscape.IsMobile and not IsLandscape.IsLandscape
    call LockOrientationWithNavigationTransition(OnNavigation=OnNavigation, Orientation="landscape")
    end
  else
    if (Is Mobile and Landscape?) IsLandscape.IsMobile and IsLandscape.IsLandscape
      call LockOrientationWithNavigationTransition(OnNavigation=OnNavigation, Orientation="portrait") as UnlockOrientationWithNavigationTransition
      end
    else
      end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
```

## LockOrientationWithNavigationTransition (action, folder ScreenOrientation)
- inputs: Orientation: Text (mandatory); OnNavigation: Boolean (mandatory)
- outputs: -
```
if OnNavigation
  javascript LockOnTransition(Orientation=Orientation)
    | var start = function(evt) {
    |     document.body.classList.add("screen-orientation-change-animation");
    |     
    |     var result = $actions.LockOrientation($parameters.Orientation);
    |     var stringResult = JSON.stringify(result.Error.data);
    | 
    |     window.removeEventListener("dx-navigation-transition-start", start);
    | };
    | 
    | var end = function(evt) {    
    |     document.body.classList.remove("screen-orientation-change-animation");
    |     
    |     window.removeEventListener("dx-navigation-transition-end", end);
    | };
    |  
    | 
    | window.addEventListener("dx-navigation-transition-start", start);
    | window.addEventListener("dx-navigation-transition-end", end); 
  end
else
  call LockOrientation(Orientation=Orientation)
  json-serialize JSONSerialize_Error = LockOrientation.Error (dates ISO)
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## MapRecurrencePatterDaysOfWeek (action, folder PersonalEvents)
- inputs: DaysOfWeek: Text List (mandatory); DayOfWeekList: DayOfWeek List (mandatory)
- outputs: Out_DaysOfWeek: DayOfWeek List
```
[M1] for each DaysOfWeek
  call ListFilter(Condition=Id = TextToIdentifier(DaysOfWeek.Current), SourceList=DayOfWeekList)
  call ListAppend(Element=ListFilter.FilteredList.Current, List=Out_DaysOfWeek)
  → continues at [M1]
end for
call ListSort(By=Number, List=Out_DaysOfWeek)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## NullTime (function, folder Calendar_DateManipulation)
- inputs: -
- outputs: NullTime: Time
```
assign: NullTime = NewTime(0,0,0)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## OnApplicationReady_ListenForLandscapeScreens (action, folder ScreenOrientation)
- inputs: LandscapeScreens: Text List (mandatory)
- outputs: -
```
call CheckIOsPlatform()
if CheckIOsPlatform.IsIOs
  end
else
  json-serialize LandscapeScreensJSON = LandscapeScreens (dates ISO)
  javascript LockOrientationForLandscapeScreens(LandscapeScreensJSON=LandscapeScreensJSON.JSON)
    | var landscapeScreens = JSON.parse($parameters.LandscapeScreensJSON);
    | 
    | window.addEventListener("dx-navigation", function(evt) {
    |     try{
    |         if (landscapeScreens.includes(evt.detail.location.pathname)) {
    |             $actions.LockOrientationLandscapeIfNeeded(true);
    |         } else {
    |             $actions.UnlockOrientationLandscapeIfNeeded(true);
    |         }
    |     } catch(err) {
    |         console.log(err);
    |         console.log(evt);
    |     }
    | });
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## OnOffiline (action, folder App_Network)
- inputs: -
- outputs: -
```
assign: Client.App_NetworkStatus_IsOnline_IsPersistent = False
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## OnOnline (action, folder App_Network)
- inputs: -
- outputs: -
```
assign: Client.App_NetworkStatus_IsOnline_IsPersistent = True
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## TextListAppend_Function (function, folder Utils)
- inputs: In_Appended_TextList: Text List; In_ElementToAppend: Text (mandatory)
- outputs: Out_Appended_TextList: Text List
- locals: TextList: Text_List
```
assign: TextList.TextList = In_Appended_TextList
json-serialize JSONSerialize_YearRange_List = TextList (dates ISO)
javascript JS_Append(JSONList=JSONSerialize_YearRange_List.JSON, NewElement=In_ElementToAppend) → JSONList_Appended: Text
  | let list = JSON.parse($parameters.JSONList);
  | list.TextList.push($parameters.NewElement);
  | $parameters.JSONList_Appended = JSON.stringify(list);
json-deserialize JSONDeserializeText_List: JS_Append.JSONList_Appended as Text_List
assign: Out_Appended_TextList = JSONDeserializeText_List.Data.TextList
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## ToggleBookmarkItem (action, folder Directory_MyBookmarks)
- inputs: IsBookmarked: Boolean (mandatory); In_ObjectType: MyBookmarks_ObjectType Identifier (mandatory); In_ObjectId: Long Integer (mandatory); In_Group: MyBookmarks_Group Identifier (mandatory); In_Note: Text
- outputs: Out_LocalBookmarkId: LocalBookmark Identifier; Out_CreatedBookmarkId: Long Integer
```
if IsBookmarked
  call Get_LocalBookmarkByObjectId(ObjectId=In_ObjectId, ObjectType=In_ObjectType)
  call-server DeleteBookmarkByBookmarkId(BookmarkId=Get_LocalBookmarkByObjectId.LocalBookmark.BookmarkId)
  if DeleteBookmarkByBookmarkId.Success
    call RemoveBookmarkFromCache(In_BookmarkId=Get_LocalBookmarkByObjectId.LocalBookmark.ObjectId, In_Group=In_Group)
    call Delete_LocalBookmarkByBookmarkId(BookmarkId=Get_LocalBookmarkByObjectId.LocalBookmark.BookmarkId)
    call SendBookmarkedFeedbackMessage(IsCreate=False) as SendBookmarkedFeedbackMessage_Delete
    assign: Out_LocalBookmarkId = NullIdentifier()
    end
  else
    message Info: "Bookmark could not be removed. Please try again later."
    end
else
  call-server AddBookmark(Group=In_Group, Note=In_Note, ObjectId=LongIntegerToText(In_ObjectId), ObjectType=In_ObjectType)
  if AddBookmark.Success
    call Create_LocalBookmark(BookmarkId=AddBookmark.CreatedBookmarkResponse.Id, Group=In_Group, Note=In_Note, ObjectId=In_ObjectId, ObjectType=In_ObjectType)
    call AddBookmarkToCache(In_Bookmark=AddBookmark.CreatedBookmarkResponse)
    call SendBookmarkedFeedbackMessage(IsCreate=True)
    assign (SetOut): Out_LocalBookmarkId = Create_LocalBookmark.LocalBookmarkId; Out_CreatedBookmarkId = AddBookmark.CreatedBookmarkResponse.Id
    end
  else
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
  end
```

## UBTConnect_JSUtils_ElementCache_GetObjProperty (action, folder JSUtils)
- inputs: Property: Text
- outputs: Value: Object
```
call JSUtils_ElementCache_GetObjProperty(Parent=Entities.UBTConnect_JSUtils_ElementCache_Parent.UBTConnect, Property=Property)
assign: Value = JSUtils_ElementCache_GetObjProperty.Value
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## UBTConnect_JSUtils_ElementCache_GetTextProperty (action, folder JSUtils)
- inputs: Property: Text
- outputs: Value: Text
```
call JSUtils_ElementCache_GetTextProperty(Parent=Entities.UBTConnect_JSUtils_ElementCache_Parent.UBTConnect, Property=Property)
assign: Value = JSUtils_ElementCache_GetTextProperty.Value
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## UBTConnect_JSUtils_ElementCache_SetObjProperty (action, folder JSUtils)
- inputs: Property: Text (mandatory); Value: Object (mandatory)
- outputs: -
```
call JSUtils_ElementCache_SetObjProperty(Parent=Entities.UBTConnect_JSUtils_ElementCache_Parent.UBTConnect, Property=Property, Value=Value)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## UBTConnect_JSUtils_ElementCache_SetTextProperty (action, folder JSUtils)
- inputs: Property: Text (mandatory); Value: Text (mandatory)
- outputs: -
```
call JSUtils_ElementCache_SetTextProperty(Parent=Entities.UBTConnect_JSUtils_ElementCache_Parent.UBTConnect, Property=Property, Value=Value)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## UnlockOrientationLandscapeIfNeeded (action, folder ScreenOrientation)
- inputs: OnNavigation: Boolean
- outputs: -
```
if (IsIOs?) CheckIOsPlatform()
  end
else
  javascript IsLandscape() → IsMobile: Boolean; IsLandscape: Boolean
    | var orientation = window.screen.orientation.type;
    | $parameters.IsLandscape = orientation == "landscape-primary" || orientation == "landscape-secondary" || document.body.classList.contains("landscape");
    | if(document.body.classList.contains("landscape") && (orientation != "landscape-primary" && orientation != "landscape-secondary")) {console.log("orientation error")};
    | $parameters.IsMobile = window.cordova? true : false;
  if (Is Mobile and Landscape?) IsLandscape.IsMobile and IsLandscape.IsLandscape
    call LockOrientationWithNavigationTransition(OnNavigation=OnNavigation, Orientation="portrait") as UnlockOrientationWithNavigationTransition
    javascript MaybeRemoveLandscape()
      | if (document.body.classList.contains("landscape")) {
      |     document.body.classList.remove("landscape");
      | };
    end
  else
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
```

## ValidateRecurrence (action, folder PersonalEvents)
- inputs: Recurrence: Recurrence (mandatory); DaysOfWeek: DayOfWeek Record List (mandatory)
- outputs: IsWeeklyRecurrenceValid: Boolean
```
switch
  case Recurrence.Pattern.Type = Entities.RecurrenceType.weekly (weekly)
    call ValidateWeeklyRecurrence(DaysOfWeek=DaysOfWeek, Recurrence=Recurrence)
    assign (Set IsWeeklyRecurrenceValid): IsWeeklyRecurrenceValid = ValidateWeeklyRecurrence.IsWeeklyRecurrenceValid
    end
  otherwise
    assign (Set IsWeeklyRecurrenceValid): IsWeeklyRecurrenceValid = True
    end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## ValidateWeeklyRecurrence (action, folder PersonalEvents)
- inputs: Recurrence: Recurrence (mandatory); DaysOfWeek: DayOfWeek Record List (mandatory)
- outputs: IsWeeklyRecurrenceValid: Boolean
- locals: CountValid: Integer = 0; DayIndexDate: Date; RecurrenceIndex: Integer; NextRecurrenceDate: Date
```
call MapRecurrencePatterDaysOfWeek(DayOfWeekList=ConvertList(DaysOfWeek,  {}), DaysOfWeek=Recurrence.Pattern.DaysOfWeek)
[M1] for each MapRecurrencePatterDaysOfWeek.Out_DaysOfWeek
  assign: DayIndexDate = AddDays(Recurrence.Range.StartDate, MapRecurrencePatterDaysOfWeek.Out_DaysOfWeek.Current.Number - DayOfWeek(Recurrence.Range.StartDate))
  assign: RecurrenceIndex = If(MapRecurrencePatterDaysOfWeek.Out_DaysOfWeek.Current.Number >= DayOfWeek(Recurrence.Range.StartDate), 0, 1)
  assign: NextRecurrenceDate = AddDays(DayIndexDate, 7 * Recurrence.Pattern.Interval * RecurrenceIndex)
  if NextRecurrenceDate <= Recurrence.Range.EndDate
    assign: CountValid = CountValid + 1
    → continues at [M1]
  else
    → continues at [M1]
end for
assign: IsWeeklyRecurrenceValid = CountValid >= 1
end
unreachable nodes (not connected to start or to an exception handler):
  end
```
