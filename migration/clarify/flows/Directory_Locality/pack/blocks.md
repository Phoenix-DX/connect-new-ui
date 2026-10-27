# Pack of UI flow Directory_Locality (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Directory_LegendBottomSheet, Directory_LegendBottomSheet2, Locality_DateTimeLabel, Locality_Households, Locality_Households_HouseholdList, Locality_Interchange, Locality_LocalityContacts, Locality_OneSchoolGlobal, Locality_Subdivisions, StatisticsList, Statistics_Icons, Statistics_TypedItem
Blocks of other UBTConnect flows that the flow uses (transitive): 41

## Block Directory_LegendBottomSheet (flow Directory_Locality)
- public: False; stylesheet: yes
- input parameters: ShowLocalities: Boolean = True
- events: SheetInitialized(SheetId: Text (mandatory)) mandatory
- local variables: BottomSheetId: Text; IsOpened: Boolean
- lifecycle: none
- used by (UBTConnect): CountryDetails, CountryList

#### Widget tree
```
block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction)
  args: Content_BackgroundColorId=Entities.UBT_Color.Neutral0, Content_Padding={ HorizontalSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.DoubleExtraLarge }, ExtendedClasses="directory-legend-explanation", ShowBackButton=False, ShowHeader=True, Title="About the numbers"
  on OnClose → BottomSheetOnClose
  on Initialized → BottomSheetInitialized(Id=Id)
  on OnToggle → BottomSheetOnToggle(IsOpen=IsOpen)
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Member
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block IconText (UBTConnectLibrary.ConnectPatterns) #Members
          args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Brethren", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Purple, In_IconId=GetEntityType_Icon(Entities.Connect_Entity.Member), In_SizeId=Entities.UBT_IconsSize.NonStandard_16
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Houses
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block IconText (UBTConnectLibrary.ConnectPatterns) #Houses
          args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Households", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=GetEntityType_Icon(Entities.Connect_Entity.Household), In_SizeId=Entities.UBT_IconsSize.NonStandard_16
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Localities
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        if ShowLocalities
          block IconText (UBTConnectLibrary.ConnectPatterns) #Localities
            args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Localities", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
            placeholder Icon:
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Error, In_IconId=GetEntityType_Icon(Entities.Connect_Entity.Locality), In_SizeId=Entities.UBT_IconsSize.NonStandard_16
        else
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text="Supper Meetings", In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }, InJustifyText=True, InlineIcon={ IconId: GetEntityType_Icon(Entities.Connect_Entity.SupperMeetings_aka_Subdivisions), IconSizeId: Entities.UBT_IconsSize.NonStandard_16, SpacingSize: Entities.UBT_Size.ExtraSmall, IconColorId: Entit…
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Brothers
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block IconText (UBTConnectLibrary.ConnectPatterns) #Brothers
          args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Brothers", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.BlueNonStandarDarker, In_IconId=Entities.UBT_Icons2.Boy, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Sisters
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block IconText (UBTConnectLibrary.ConnectPatterns) #Sisters
          args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Sisters", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.PinkNonStandardDarker, In_IconId=Entities.UBT_Icons2.Girl, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
if IsOpened
  block PreventBackNavigation (NavigationHandler.NavigationHandler)
    on BackNavigationPrevented → BottomSheetOnClose
```

#### Block actions
- **BottomSheetInitialized** inputs: Id: Text (mandatory)
  ```
  assign: BottomSheetId = Id
  trigger event SheetInitialized(SheetId=Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BottomSheetOnClose**
  ```
  call BottomSheetOnToggle(IsOpen=False)
  call BottomSheetClose(WidgetId=BottomSheetId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BottomSheetOnToggle** inputs: IsOpen: Boolean (mandatory)
  ```
  assign: IsOpened = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Directory_LegendBottomSheet2 (flow Directory_Locality)
- public: False; stylesheet: yes
- input parameters: -
- events: SheetInitialized(SheetId: Text (mandatory)) mandatory
- local variables: BottomSheetId: Text
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction)
  args: Content_BackgroundColorId=Entities.UBT_Color.Neutral0, Content_Padding={ HorizontalSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.DoubleExtraLarge }, ExtendedClasses="directory-legend-explanation", isTransparentOverlay=True, ShowBackButton=True, ShowHeader=True, Title="About the numbers"
  on Initialized → BottomSheetInitialized(Id=Id)
  on OnClose → BottomSheetOnClose
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Member
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block IconText (UBTConnectLibrary.ConnectPatterns) #Members
          args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Brethren", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Purple, In_IconId=GetEntityType_Icon(Entities.Connect_Entity.Member), In_SizeId=Entities.UBT_IconsSize.NonStandard_16
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Houses
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block IconText (UBTConnectLibrary.ConnectPatterns) #Houses
          args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Households", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=GetEntityType_Icon(Entities.Connect_Entity.Household), In_SizeId=Entities.UBT_IconsSize.NonStandard_16
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Localities
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        if True #DoesntHaveSupperMeetings  [DEAD BRANCH: condition is a constant]
          block IconText (UBTConnectLibrary.ConnectPatterns) #Localities
            args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Localities", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
            placeholder Icon:
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Error, In_IconId=GetEntityType_Icon(Entities.Connect_Entity.Locality), In_SizeId=Entities.UBT_IconsSize.NonStandard_16
        else
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text="Supper Meetings", In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }, InJustifyText=True, InlineIcon={ IconId: GetEntityType_Icon(Entities.Connect_Entity.SupperMeetings_aka_Subdivisions), IconSizeId: Entities.UBT_IconsSize.NonStandard_16, SpacingSize: Entities.UBT_Size.ExtraSmall, IconColorId: Entit…
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Brothers
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block IconText (UBTConnectLibrary.ConnectPatterns) #Brothers
          args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Brothers", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.BlueNonStandarDarker, In_IconId=Entities.UBT_Icons2.Boy, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
    block CustomContainer (UBTConnectLibrary.BasePatterns) #LegendItem_Sisters
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block IconText (UBTConnectLibrary.ConnectPatterns) #Sisters
          args: In_JustifyText=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Sisters", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.PinkNonStandardDarker, In_IconId=Entities.UBT_Icons2.Girl, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
```

#### Block actions
- **BottomSheetInitialized** inputs: Id: Text (mandatory)
  ```
  assign: BottomSheetId = Id
  trigger event SheetInitialized(SheetId=Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **BottomSheetOnClose**
  ```
  call BottomSheetClose(WidgetId=BottomSheetId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Locality_DateTimeLabel (flow Directory_Locality)
- public: False
- input parameters: In_TimezoneOffset: Integer (mandatory)
- events: -
- local variables: LocalDateTime: Date Time
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): Locality_Details

#### Widget tree
```
expr: GetLocalityCurrentTimeLabel(In_TimezoneOffset, LocalDateTime)
block Timer (UBTConnect_Utils.Utils)
  on Event_IntervalElapsed → Handler_TimerEvent_IntervalElapsed
```

#### Block actions
- **Handler_TimerEvent_IntervalElapsed**
  ```
  assign: LocalDateTime = CurrDateTime()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  assign: LocalDateTime = CurrDateTime()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Locality_Households (flow Directory_Locality)
- public: False
- input parameters: In_LocalityId: Long Integer (mandatory); In_BretherenCount: Integer (mandatory); In_HouseholdCount: Integer (mandatory)
- events: Event_NavigateToHouseholdDetails(Event_HouseholdId: Long Integer (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Locality_Details

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral4 }, PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall } }
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base } }
      placeholder Content:
        block CustomContainer (UBTConnectLibrary.BasePatterns) #LocalityCounter
          args: ExtendedClasses="locality-count", Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, DisplayOptions: { Display: Entities.UBT_Display.Flex } }
          placeholder Content:
            block CustomContainer (UBTConnectLibrary.BasePatterns) #BrethrenCounter
              args: ExtendedClasses="locality-brethren-count", Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall, RightSizeId: Entities.UBT_Size.Small }, BorderOptions: {  } }
              placeholder Content:
                block IconText (UBTConnectLibrary.ConnectPatterns)
                  args: Text=In_BretherenCount + " Brethren", TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
                  placeholder Icon:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Purple, In_IconId=Entities.UBT_Icons2.PersonFill
            block CustomContainer (UBTConnectLibrary.BasePatterns) #HouseholdsCounter
              args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall, LeftSizeId: Entities.UBT_Size.Small } }
              placeholder Content:
                block IconText (UBTConnectLibrary.ConnectPatterns)
                  args: Text=In_HouseholdCount + " Households", TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
                  placeholder Icon:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.Household
    block Locality_Households_HouseholdList (UBTConnect.Directory_Locality)
      args: In_LocalityId=In_LocalityId
      on Event_NavigateToHouseholdDetails → Event_NavigateToHouseholdDetails(Event_HouseholdId=Event_HouseholdId)
```

## Block Locality_Households_HouseholdList (flow Directory_Locality)
- public: False
- input parameters: In_LocalityId: Long Integer
- events: Event_NavigateToHouseholdDetails(Event_HouseholdId: Long Integer (mandatory)) mandatory
- local variables: -
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady
- used by (UBTConnect): Locality_Households

#### Data sources
- data action **GetLocalityHouseholds** fetch=OnDemand; outputs: LocalityHouseholds: UI_LocalityHousehold List; OnAfterFetch → OnAfterFetch_GetLocalityHouseholds_Bookmarks
  ```
  call-server GetHouseholdList_ByLocalityId(In_LocalityId=In_LocalityId)
  assign: LocalityHouseholds = GetHouseholdList_ByLocalityId.Out_HouseholdList
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base }, MarginSize: {  } }
  placeholder Content:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not GetLocalityHouseholds.IsDataFetched
      placeholder Placeholder_LoadingSection:
        if GetLocalityHouseholds.LocalityHouseholds.Empty
          block Directory_EmptyState (UBTConnect.Directory_CommonBlocks)
            args: EntityTypeId=Entities.Connect_Entity.Household
        else
          list source=GetLocalityHouseholds.LocalityHouseholds mode=Default #locality_Households  [style="list list-group list--gap-s"]
            block Household_Card (UBTConnect.Directory_Household_Blocks)
              args: Household=GetLocalityHouseholds.LocalityHouseholds.Current
              on Event_OnClickHousehold → Household_CardEvent_OnClickHousehold(HouseholdId=HouseholdId)
```

#### Block actions
- **Household_CardEvent_OnClickHousehold** inputs: HouseholdId: Long Integer (mandatory); locals: HouseholdIdList: CarouselPreloadedHouseholds
  ```
  call GetHasCarouselEnabled()
  if GetHasCarouselEnabled.HasCarouselEnabled
    assign: HouseholdIdList.CarouselHouseholdItem = ConvertList(GetLocalityHouseholds.LocalityHouseholds,  {Household:"HouseholdId"})
    call SetPreloadObject(Preload=ToObject(HouseholdIdList))
    navigate → HouseholdCarousel(In_StartingHouseholdId=GetLocalityHouseholds.LocalityHouseholds.Current.HouseholdId) transition=Inherited
  else
    trigger event Event_NavigateToHouseholdDetails(Event_HouseholdId=HouseholdId)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetLocalityHouseholds_Bookmarks**
  ```
  if GetHasNewBookmarks()
    [M1] for each GetLocalityHouseholds.LocalityHouseholds
      call GetLocal_Bookmark_C2(ObjectId=GetLocalityHouseholds.LocalityHouseholds.Current.HouseholdId, ObjectType=Entities.BookmarkCategory.Household)
      assign: GetLocalityHouseholds.LocalityHouseholds.Current.IsBookmarked = GetLocal_Bookmark_C2.IsBookmarked
      → continues at [M1]
    end for
    end
  else
    [M2] for each GetLocalityHouseholds.LocalityHouseholds
      call GetLocal_Bookmark(ObjectId=GetLocalityHouseholds.LocalityHouseholds.Current.HouseholdId, ObjectType=Entities.MyBookmarks_ObjectType.Contact)
      assign: GetLocalityHouseholds.LocalityHouseholds.Current.IsBookmarked = GetLocal_Bookmark.IsBookmarked
      → continues at [M2]
    end for
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  if GetLocalityHouseholds.LocalityHouseholds.Empty
    call ListAppend(Element={ LocalityName: "Dumyy size", CountryName: "Dumyy size" }, List=GetLocalityHouseholds.LocalityHouseholds)
    call ListAppend(Element={ LocalityName: "Dumyy size", CountryName: "Dumyy size" }, List=GetLocalityHouseholds.LocalityHouseholds) as ListAppend2
    call ListAppend(Element={ LocalityName: "Dumyy size", CountryName: "Dumyy size" }, List=GetLocalityHouseholds.LocalityHouseholds) as ListAppend3
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache = True
    call JSUtils_Element_Operations_GetElementById(Id=locality_Households.Id)
    call ReactiveInstance_ForceUpdate(Element=JSUtils_Element_Operations_GetElementById.Element)
    end
  else
    call ForceListUpdateOnScrollEnd(ListId=locality_Households.Id)
    refresh data GetLocalityHouseholds
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block Locality_Interchange (flow Directory_Locality)
- public: False
- input parameters: In_InterchangeLocalityId: Long Integer (mandatory)
- events: -
- local variables: -
- lifecycle: OnReady → OnReady
- used by (UBTConnect): Locality_Details

#### Data sources
- data action **GetInterchangesByLocalityId** fetch=OnDemand; outputs: Out_InterchangeList: UI_Interchange List; OnAfterFetch → OnAfterFetch_GetInterchangesByLocalityId
  ```
  call-server GetInterchangeList_ByLocalityId(In_LocalityId=In_InterchangeLocalityId)
  assign: Out_InterchangeList = GetInterchangeList_ByLocalityId.Out_Interchanges
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Directory_Interchange_StatisticsList (UBTConnect.Directory_Interchange)
  args: In_InterchangeList=GetInterchangesByLocalityId.Out_InterchangeList, In_IsLoading=GetInterchangesByLocalityId.HasFetchError or not GetInterchangesByLocalityId.IsDataFetched, In_ShowSubtitle=True
  on Event_NavigateToLocality → Handler_NavigateToLocality(In_CountryName=CountryName, In_LocalityId=LocalityId)
```

#### Block actions
- **Handler_NavigateToLocality** inputs: In_LocalityId: Long Integer (mandatory); In_CountryName: Text (mandatory); locals: LocalityLabel: Text
  ```
  call HasAccessToRegion(Target_CountryNameOrCode=In_CountryName, Target_LocalityNameOrId=In_LocalityId)
  if (Check if HasAccessToRegion HasAccess) HasAccessToRegion.HasAccess = True
    call ListIndexOf(Condition=InterchangeLocalityId = In_LocalityId, List=GetInterchangesByLocalityId.Out_InterchangeList)
    if ListIndexOf.Position <> -1
      assign: LocalityLabel = GetLocalityLabel(GetInterchangesByLocalityId.Out_InterchangeList[ListIndexOf.Position].InterchangeLocalityName,GetInterchangesByLocalityId.Out_InterchangeList[ListIndexOf.Position].InterchangeCountryName)
      [M1] navigate → Locality_Details(LocalityId=In_LocalityId, PreloadedLocalityLabel=LocalityLabel) transition=Inherited
    else
      → continues at [M1]
  else
    call App_Subscription_ShowUpgradePopUp()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetInterchangesByLocalityId**
  ```
  [M1] for each GetInterchangesByLocalityId.Out_InterchangeList
    [M2] for each GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics
      assign: GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics.Current.IconColorId = GetIconLabel_Interchange_Statistics(GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics.Current.Name).Color_Id; GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics.Current.IconId = GetIconLabel_Interchange_Statistics(GetInterchangesByLocalityId.Out_InterchangeList.Current.InterchangeStatistics.Statistics.Current.Name).IconId
      → continues at [M2]
    end for
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**; locals: LoadingItems: Integer = 3; CurrentItem: Integer = 0
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache = True
    end
  else
    [M1] if CurrentItem < LoadingItems
      assign: CurrentItem = CurrentItem+1
      call ListAppend(Element={ InterchangeStatistics: { Title: "Loading", Subtitle: "Loading", Statistics: [ { Name: "Loading", Value: 11 }, { Name: "Loading", Value: 11 }, { Name: "Loading", Value: 11 } ] }, InterchangeDistance…, List=GetInterchangesByLocalityId.Out_InterchangeList)
      → continues at [M1]
    else
      refresh data GetInterchangesByLocalityId
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block Locality_LocalityContacts (flow Directory_Locality)
- public: False
- input parameters: In_LocalityId: Long Integer (mandatory)
- events: -
- local variables: CommunityBusinessContactList_IsLoading: Boolean = True; CommunityBusinessContact_Card_List: UI_CommunityBusiness_Contact List; CallPopupData: ContactByPhonePopupData; MessagePopupData: ContactPopupData, Email, Phone Record
- lifecycle: OnReady → OnReady
- used by (UBTConnect): Locality_Details

#### Data sources
- data action **GetLocalityBusinessContacts** fetch=OnDemand; outputs: CommunityBusiness_Contacts: UI_CommunityBusiness_Contact List; OnAfterFetch → OnAfterFetch_GetLocalityBusinessContacts
  ```
  call-server Get_LocalityCommunityBusinessContacts(LocalityId=In_LocalityId)
  assign: CommunityBusiness_Contacts = Get_LocalityCommunityBusinessContacts.Out_CommunityBusinessContactsByLocality
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=CommunityBusinessContactList_IsLoading
  placeholder Placeholder_LoadingSection:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #CommunityBusinessContactsWrapper
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
      placeholder Content:
        list source=CommunityBusinessContact_Card_List mode=Default #CommunityBusinessContacts  [style="list list-group list--gap-s"]
          container
            block CommunityBusinessCard_Content_Block (UBTConnect.zDEV_Directory_CommunityBusinessBlocks)
              args: CommunityBusinessCardContent={ ContactFullName: CommunityBusinessContact_Card_List.Current.Name + " " + CommunityBusinessContact_Card_List.Current.Surname, ContactRole: CommunityBusinessContact_Card_List.Current.Description, Cou…
              on Event_OnClick_Bookmark → OnClickBookmark
              on Event_OnClick_Call → OnClickPhoneOnClick
              on Event_OnClick_Email → Handler_MessageOnClick(Event_EmailTo=CommunityBusinessContact_Card_List.Current.Email, Event_MemberName=CommunityBusinessContact_Card_List.Current.Name, Event_MemberSurname=CommunityBusinessContact_Card_List.Current.Surname, Event_Phone=CommunityBusinessContact_Card_List.Current.PhoneNumber, Event_SignedURL=CommunityBusinessContact_Card_List.Current.SignedBusnessURL)
block ContactPopup_ByPhone (UBTConnect_Utils.CW_CTA_PopUps)
  args: In_CallPopupData=CallPopupData
  on Event_Cancel → Handler_CallPopup_Cancel
  on Event_Call → Handler_CallPopup_Cancel
if CommunityBusinessContact_Card_List.Empty and not CommunityBusinessContactList_IsLoading #EmptyList
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ MarginSize: { HorizontalSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.Small } }
    placeholder Content:
      block EmptyList (UBTConnectLibrary.ConnectPatterns)
        args: IconId=Entities.UBT_Icons2.Domain
        placeholder TitlePlaceholder:
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text="No Locality Contacts in this locality", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
        placeholder TextPlaceholder:
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text="There doesn't seem to be any Locality", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small }
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_PaddingOptions={  }, In_Text="Contacts in your locality.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small }
```

#### Block actions
- **Handler_CallPopup_Cancel**
  ```
  assign: CallPopupData.ContactPopupData.ShowPopup = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MessageOnClick** inputs: Event_SignedURL: Text (mandatory); Event_MemberName: Text (mandatory); Event_MemberSurname: Text (mandatory); Event_EmailTo: Text (mandatory); Event_Phone: Text (mandatory)
  ```
  assign: MessagePopupData.ContactPopupData.ImageURL = Event_SignedURL; MessagePopupData.ContactPopupData.IsAvatarImage = True; MessagePopupData.ContactPopupData.Name = Event_MemberName + " " + Event_MemberSurname; MessagePopupData.ContactPopupData.Locality = CommunityBusinessContact_Card_List.Current.LocalityName; MessagePopupData.ContactPopupData.TimezoneName = CommunityBusinessContact_Card_List.Current.TimezoneName; MessagePopupData.ContactPopupData.TimezoneOffset = CommunityBusinessContact_Card_List.Current.TimezoneOffset; MessagePopupData.ContactPopupData.ShowPopup = True; MessagePopupData.Email = Event_EmailTo; MessagePopupData.Phone = Event_Phone; MessagePopupData.ContactPopupData.CountryName = CommunityBusinessContact_Card_List.Current.CountryName
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MessagePopup_Cancel**
  ```
  assign: MessagePopupData.ContactPopupData.ShowPopup = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_MessagePopup_Email**
  ```
  call Handler_MessagePopup_Cancel()
  javascript Yield()
    | Promise.resolve().then($resolve);
  navigate → ContactByEmailContacts(In_AvatarURL=CommunityBusinessContact_Card_List.Current.SignedBusnessURL, In_ContactDescription=CommunityBusinessContact_Card_List.Current.Description, In_ContactName=CommunityBusinessContact_Card_List.Current.Name + " " + CommunityBusinessContact_Card_List.Current.Surname, In_EmailTo=CommunityBusinessContact_Card_List.Current.Email) transition=Inherited
  ```
- **OnAfterFetch_GetLocalityBusinessContacts**
  ```
  if CommunityBusinessContactList_IsLoading
    assign: CommunityBusinessContactList_IsLoading = False
    call ListClear(List=CommunityBusinessContact_Card_List)
    [M1] call ListAppendAll(List=CommunityBusinessContact_Card_List, SourceList=GetLocalityBusinessContacts.CommunityBusiness_Contacts)
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call ListClear(List=CommunityBusinessContact_Card_List) as ListClear2
    [DISABLED] assign: CommunityBusinessContactList_IsLoading = False
    [DISABLED] end
    [DISABLED] if True
      → continues at <ListClear2>
    else
    [DISABLED] end
    end
  ```
- **OnClickBookmark**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClickPhoneOnClick**
  ```
  assign: CallPopupData.ContactPopupData.ImageURL = CommunityBusinessContact_Card_List.Current.SignedBusnessURL; CallPopupData.ContactPopupData.Name = CommunityBusinessContact_Card_List.Current.Name; CallPopupData.ContactPopupData.Locality = CommunityBusinessContact_Card_List.Current.LocalityName; CallPopupData.ContactPopupData.ShowPopup = True; CallPopupData.ContactPopupData.TimezoneName = CommunityBusinessContact_Card_List.Current.TimezoneName; CallPopupData.ContactPopupData.TimezoneOffset = CommunityBusinessContact_Card_List.Current.TimezoneOffset; CallPopupData.WorkPhone = CommunityBusinessContact_Card_List.Current.PhoneNumber; CallPopupData.ContactPopupData.CountryName = CommunityBusinessContact_Card_List.Current.CountryName
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache = True
    end
  else
    call GetSkeletonList_UI_CommunityBusinessContactCard()
    assign: CommunityBusinessContact_Card_List = GetSkeletonList_UI_CommunityBusinessContactCard.UI_LocalityContacts
    refresh data GetLocalityBusinessContacts
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block Locality_OneSchoolGlobal (flow Directory_Locality)
- public: False
- input parameters: In_LocalityId: Long Integer (mandatory)
- events: Event_OnClick(Event_OneSchoolGlobalId: Long Integer (mandatory)); Event_OnClick_Bookmark(IsBookmarked: Boolean (mandatory)) mandatory
- local variables: GetOneSchoolGlobal_List_StartIndex: Integer; GetOneSchoolGlobal_List_Offset: Integer = 20; Get_OneSchoolGlobal_List_IsLoading: Boolean = True; Out_OneSchoolGlobal_List2: UI_OneSchool_Card List
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): Locality_Details

#### Data sources
- data action **Get_OneSchoolGlobal_List** fetch=OnDemand; outputs: Out_OneSchoolGlobal_List: UI_OneSchool_Card List; OnAfterFetch → OnAfterFetch_Get_OneSchoolGlobal_List
  ```
  call-server Get_OneSchoolGlobalListByLocality(In_LocalityId=In_LocalityId)
  assign: Out_OneSchoolGlobal_List = Get_OneSchoolGlobalListByLocality.Out_OneSchoolGlobal
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_OneSchoolGlobalListWrapper
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    if Out_OneSchoolGlobal_List2.Empty #If_IsListEmpty
      block Directory_EmptyState (UBTConnect.Directory_CommonBlocks)
        args: EntityTypeId=Entities.Connect_Entity.OneSchoolGlobal
    else
      block OneSchoolGlobal_List (UBTConnect.Directory_OneSchoolGlobal_Blocks)
        args: In_IsLoading=Get_OneSchoolGlobal_List_IsLoading, OneSchoolList=Out_OneSchoolGlobal_List2
        on Event_OnClick_Bookmark → Event_OnClick_Bookmark(IsBookmarked=IsBookmarked)
        on Event_ScrollEnding → Handler_OnScrollEnding
        on Event_OnClick → Event_OnClick(Event_OneSchoolGlobalId=Event_OneSchoolGlobalId)
```

#### Block actions
- **Handler_OnScrollEnding**
  ```
  if (Is Data Fetched?) Get_OneSchoolGlobal_List.IsDataFetched
    if (Needs another call?) Get_OneSchoolGlobal_List.Out_OneSchoolGlobal_List.Length >= GetOneSchoolGlobal_List_Offset
      assign (MaxRecords += IncrementRecords): GetOneSchoolGlobal_List_StartIndex = GetOneSchoolGlobal_List_StartIndex + GetOneSchoolGlobal_List_Offset
      refresh data Get_OneSchoolGlobal_List
      end
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **OnAfterFetch_Get_OneSchoolGlobal_List**
  ```
  if (Is Loading?) Get_OneSchoolGlobal_List_IsLoading
    call ListClear(List=Out_OneSchoolGlobal_List2)
    assign (Set IsLoading to False): Get_OneSchoolGlobal_List_IsLoading = False
    [M1] call ListAppendAll(List=Out_OneSchoolGlobal_List2, SourceList=Get_OneSchoolGlobal_List.Out_OneSchoolGlobal_List)
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache = True
    end
  else
    call GetSkeletonList_UI_OneSchoolGlobal_ListCard(ListLength=3)
    assign (Set Skeleton UI): Out_OneSchoolGlobal_List2 = GetSkeletonList_UI_OneSchoolGlobal_ListCard.Out_OneSchoolGlobal_List
    refresh data Get_OneSchoolGlobal_List
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block Locality_Subdivisions (flow Directory_Locality)
- public: False
- input parameters: LocalityId: Long Integer (mandatory)
- events: -
- local variables: GetSubdivisions_StartIndex: Integer; GetSubdivisions_Offset: Integer = 20; Subdivision_Card_List: UI_Subdivision_Card List; Subdivision_Card_List_IsLoading: Boolean = True; IsPaginated: Boolean
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): Locality_Details

#### Data sources
- data action **Get_Subdivision_List** fetch=OnDemand; outputs: Out_Subdivision_Card_List: UI_Subdivision_Card List; OnAfterFetch → OnAfterFetch_Get_Subdivision_List
  ```
  call-server GetSubdivisionCardList_ByLocalityId(In_LocalityId=LocalityId)
  assign: Out_Subdivision_Card_List = GetSubdivisionCardList_ByLocalityId.Out_Subdivision_CardList
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=Subdivision_Card_List_IsLoading
  placeholder Placeholder_LoadingSection:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_SubdivisionListWrapper
      args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
      placeholder Content:
        if Subdivision_Card_List.Empty and not Subdivision_Card_List_IsLoading #Empty
          block Directory_EmptyState (UBTConnect.Directory_CommonBlocks) #EmptyState
            args: EntityTypeId=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions
        else
          list source=Subdivision_Card_List mode=Default #Subdivision_List on scroll-ending → OnScrollEnding_RefreshSubdivisions  [style="list list-group list--gap-s"]
            container
              block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns)
                args: In_CardTypeId=Entities.UBT_ImageCardType.List
                on Event_Click → OnClick_NavigateToSubdivision
                placeholder LazyImage_Placeholder:
                  block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                    args: EntityId=Subdivision_Card_List.Current.SubdivisionId, EntityType=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }
                placeholder Placeholder_Content:
                  block SupperMeeting_ImageCard_Content (UBTConnect.Directory_SupperMeetings)
                    args: In_Subdivision_CardContent=Subdivision_Card_List.Current.Subdivision_Card_Content
```

#### Block actions
- **OnAfterFetch_Get_Subdivision_List**
  ```
  if Subdivision_Card_List_IsLoading
    assign: Subdivision_Card_List_IsLoading = False
    call ListClear(List=Subdivision_Card_List)
    [M1] call ListAppendAll(List=Subdivision_Card_List, SourceList=Get_Subdivision_List.Out_Subdivision_Card_List)
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_NavigateToSubdivision**; locals: PreloadedSupperMeetings: PreloadedSupperMeetings
  ```
  call GetHasCarouselEnabled()
  if GetHasCarouselEnabled.HasCarouselEnabled
    assign: PreloadedSupperMeetings.SupperMeetingIds = ConvertList(Get_Subdivision_List.Out_Subdivision_Card_List,  {Value:"SubdivisionId"})
    call SetPreloadObject(Preload=ToObject(PreloadedSupperMeetings))
    navigate → SupperMeeting_Carousel(In_StartingSupperMeetingId=Subdivision_Card_List.Current.SubdivisionId) transition=Inherited
  else
    navigate → SupperMeeting_Details(In_SubdivsionId=Subdivision_Card_List.Current.SubdivisionId) transition=Inherited
  ```
- **OnScrollEnding_RefreshSubdivisions**; locals: IncrementRecords: Integer = 20
  ```
  if IsPaginated
    if Get_Subdivision_List.IsDataFetched
      if Get_Subdivision_List.Out_Subdivision_Card_List.Length >= GetSubdivisions_Offset
        assign (MaxRecords += IncrementRecords): GetSubdivisions_StartIndex = GetSubdivisions_StartIndex + GetSubdivisions_Offset
        refresh data Get_Subdivision_List
        end
      else
        end
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache = True
    end
  else
    call GetSkeletonList_UI_SubdivisionCard(ListLength=10)
    assign: Subdivision_Card_List = GetSkeletonList_UI_SubdivisionCard.UI_SubdivisionHouseholds
    refresh data Get_Subdivision_List
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block Statistics_Icons (flow Directory_Locality)
- public: False
- input parameters: UI_StatisticsTexts: UI_StatisticsTexts (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Statistics_TypedItem

#### Widget tree
```
block Columns_Three (UBTConnectLibrary.BasePatterns)
  args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.SameSize }
  placeholder Left:
    block IconText (UBTConnectLibrary.ConnectPatterns) #Members
      args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=UI_StatisticsTexts.Members, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
      placeholder Icon:
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.Purple, In_IconId=GetEntityType_Icon(Entities.Connect_Entity.Member)\n//Entities.UBT_Icons2.Person, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
  placeholder Middle:
    block IconText (UBTConnectLibrary.ConnectPatterns) #Houses
      args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=UI_StatisticsTexts.Households, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
      placeholder Icon:
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=GetEntityType_Icon(Entities.Connect_Entity.Household)\n//Entities.UBT_Icons2.Home, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
  placeholder Right:
    if UI_StatisticsTexts.SupperMeetings = "" #DoesntHaveSupperMeetings
      block IconText (UBTConnectLibrary.ConnectPatterns) #Localities
        args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=UI_StatisticsTexts.Localities, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
        placeholder Icon:
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_ColorId=Entities.UBT_Color.Error, In_IconId=GetEntityType_Icon(Entities.Connect_Entity.Locality), In_SizeId=Entities.UBT_IconsSize.NonStandard_16
    else
      block CustomText (UBTConnectLibrary.BasePatterns)
        args: In_Text=UI_StatisticsTexts.SupperMeetings, In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }, InlineIcon={ IconId: GetEntityType_Icon(Entities.Connect_Entity.SupperMeetings_aka_Subdivisions), IconSizeId: Entities.UBT_IconsSize.NonStandard_16, SpacingSize: Entities.UBT_Size.ExtraSmall, IconColorId: Entit…
block Columns_Three (UBTConnectLibrary.BasePatterns)
  args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.SameSize }
  placeholder Left:
    block IconText (UBTConnectLibrary.ConnectPatterns) #Brothers
      args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=UI_StatisticsTexts.Brothers, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
      placeholder Icon:
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.BlueNonStandarDarker, In_IconId=Entities.UBT_Icons2.Boy, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
  placeholder Middle:
    block IconText (UBTConnectLibrary.ConnectPatterns) #Sisters
      args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=UI_StatisticsTexts.Sisters, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small }
      placeholder Icon:
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.PinkNonStandardDarker, In_IconId=Entities.UBT_Icons2.Girl, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
```

## Block Statistics_TypedItem (flow Directory_Locality)
- public: False
- input parameters: UI_CountryStatistics: UI_TypedStatistics (mandatory); In_HideNavigation: Boolean; In_HideBorder: Boolean; In_ImageEntityTypeId: Connect_Entity Identifier = Entities.Connect_Entity.Locality; In_ImageEntityId: Text; In_HasImage: Boolean (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): CountryDetails, CountryList

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color:…
  placeholder Content:
    block Columns_Three (UBTConnectLibrary.BasePatterns)
      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ExpandMiddle, SpacingSize: Entities.UBT_Size.Base, VerticalAlign: Entities.UBT_VerticalAlign.Center }
      placeholder Left:
        if UI_CountryStatistics.ImageURL <> "" or\nIn_HasImage
          block UBT_LazyImage (UBTConnect_Utils.CW_Image)
            args: EntityId=In_ImageEntityId, EntityType=In_ImageEntityTypeId, ExtendedClass="country-flag", ImageSize={ Height: Entities.UBT_ImageSize.Small_40, Width: Entities.UBT_ImageSize.Square }, ImageURL=UI_CountryStatistics.ImageURL, In_BorderRadius=Entities.UBT_Shape.Circle
      placeholder Middle:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text=UI_CountryStatistics.Name, In_TextOptions={ FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
        block Statistics_Icons (UBTConnect.Directory_Locality)
          args: UI_StatisticsTexts=UI_CountryStatistics.UI_StatisticsTexts
      placeholder Right:
        if In_HideNavigation #HideNavigation
        else
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_ColorId=Entities.UBT_Color.Neutral6, In_IconId=Entities.UBT_Icons2.ChevronRight
```

## Block StatisticsList (flow Directory_Locality)
- public: False; stylesheet: yes
- input parameters: In_Statistics: Id, StatisticsOptions Record List; In_SearchPrompt: Text (mandatory); In_IsLoading: Boolean; In_ShowSubtitle: Boolean
- events: Event_Clicked(Event_Id: Text (mandatory)); OnParametersChangedEv()
- local variables: Local_List: Id, StatisticsOptions Record List; SearchString: Text
- lifecycle: OnReady → ScreenEvent_OnReady; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): BrowseCountries, BrowseDirectory

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_Search
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block Input (UBTConnectLibrary.ConnectPatterns) #Block_SearchInput
          args: In_Options={ IsEnabled: In_Statistics.Length > 1, SearchPrompt: In_SearchPrompt, Debounce_DelayMS: 200, BorderRadius: Entities.Shape.Rounded }
          on Event_ClearString → Handler_Search_ClearString
          on Event_Submit → Handler_Search_OnChange(Event_CurrentString=Event_SubmittedString)
          on Event_OnChange → Handler_Search_OnChange(Event_CurrentString=Event_CurrentString)
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=In_IsLoading
      placeholder Placeholder_LoadingSection:
        if Local_List.Empty and SearchString <> ""
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Small }, In_Text="No results found for '"+SearchString+"'", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Small }, In_Text="Try searching for a country or locality.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
        else
          list source=Local_List mode=Default #List  [style="list list-group list--gap-s" ]
            container
              block Statistics_ListItem (UBTConnectLibrary.ConnectCorePatterns)
                args: In_ExtendedClasses="country-flag", In_HighlightWords=If(In_IsLoading,"",SearchString), In_ShowSubtitle=In_ShowSubtitle, In_StatisticsOptions=ConvertRecord(Local_List.Current,  {Value:"StatisticsOptions"})
                on Event_Clicked → Event_Clicked(Event_Id=Local_List.Current.Id)
```

#### Block actions
- **Action_DefineList**
  ```
  if SearchString = ""
    assign: Local_List = In_Statistics
    end
  else
    call ListFilter(Condition=Index(JSUtils_String_RemoveAccents(StatisticsOptions.Title),JSUtils_String_RemoveAccents(SearchString),startIndex:,searchFromEnd:,ignoreCase:True) <> -1 or\nIndex(JSUtils_String_RemoveAccents(Statist…, SourceList=In_Statistics)
    assign: Local_List = ListFilter.FilteredList
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_Search_ClearString**
  ```
  assign: SearchString = ""
  call Action_DefineList()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_Search_OnChange** inputs: Event_CurrentString: Text (mandatory)
  ```
  assign: SearchString = Event_CurrentString
  call Action_DefineList()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  call Action_DefineList()
  trigger event OnParametersChangedEv()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  call Action_DefineList()
  call JSUtils_Element_Operations_GetElementById(Id=List.Id)
  call ReactiveInstance_ForceUpdate(Element=JSUtils_Element_Operations_GetElementById.Element)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| App_IconBadge | App_Common_Blocks | `../../_shared/pack/blocks.md` | BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory) | OnClick |
| App_NotificationIcon | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| App_NotificationRefresh | App_Common_Blocks | `../../_shared/pack/blocks.md` | Datetime: Date Time (mandatory) | Updated |
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| BottomBarContent | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| BottomBarMenu | App_Common | `../../App_Common/pack/blocks.md` | ActiveItem: Connect_BottomBar_Items Identifier; useMapsItems: Boolean; isHouseholder: Boolean; isRootPage: Boolean | BottomBar_Clicked |
| CacheControl_UserInfo_Wrapper | App_Cache | `../../_shared/pack/blocks.md` | - | Result |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| CommunityBusinessCard_Content_Block | zDEV_Directory_CommunityBusinessBlocks | `../../zDEV_Directory_CommunityBusinessBlocks/pack/blocks.md` | CommunityBusinessCardContent: CommunityBusiness_Card_Content (mandatory) | Event_OnClick_Bookmark; Event_OnClick_Call; Event_OnClick_Email |
| Directory_CommunityNumbers | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | In_IsLoading: Boolean (mandatory); In_CommunityStatistics: UI_CommunityStatistics (mandatory) | - |
| Directory_CommunityNumbers__Number | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | In_Number: Integer (mandatory); In_Label: Text (mandatory); In_Icon: UBT_Icons2 Identifier (mandatory); In_HideBorder: Boolean | - |
| Directory_EmptyState | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | EntityTypeId: Connect_Entity Identifier (mandatory); Location: Text = "found nearby" | - |
| Directory_EntityDetailsActions | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean | Event_MenuEdit; OnChange_Bookmark; ViewDetails_OnClick |
| Directory_Interchange_StatisticsList | Directory_Interchange | `../../_shared/pack/blocks.md` | In_IsLoading: Boolean; In_ShowSubtitle: Boolean; In_HighlightWords: Text; In_InterchangeList: UI_Interchange List | Event_NavigateToLocality |
| FeedBlock_CommunityPopulation | Home | `../../Home/pack/blocks.md` | - | - |
| FilterSheet | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | In_StartFilter: Filter_Common (mandatory); In_Options: Filter_Common_Options (mandatory); ExtendedClasses: Text | ApplyFilters; Loaded; SheetInitialized |
| FilterSheet_Icon | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | HaveFiltersApplied: Boolean (mandatory); BottomSheetId: Text (mandatory); isLoaded: Boolean (mandatory); ShowSubscriptionOnClick: Boolean (mandatory) | - |
| FilterSheet_OptionChoice_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_Choice: Filter_Common_Control_Choice (mandatory) | OnChange |
| FilterSheet_OptionList_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_List: Filter_Common_Control_List (mandatory); ShowHeader: Boolean (mandatory); ForceUpdate: Boolean | Event_Input_OnReady; OnBack; OnChange |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| HouseholdDetails_Block | Directory_Household | `../../Directory_Household/pack/blocks.md` | HouseholdId: Long Integer (mandatory); isEnabled: Boolean = True; Preview: HouseholdPreviewStructure; In_ShowKebabMenu: Boolean; In_CheckVisibility: Boolean; In_IsSkeletonOnly: Boolean; In_HideActions: Boolean | HouseholdDataFetched |
| HouseholdDetails_Members_Block | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | isEnabled: Boolean = True; In_HouseholdMembers: UI_HouseholdMember List (mandatory); In_NonHouseholdMembers: UI_HouseholdMember List (mandatory); In_IsLoading: Boolean (mandatory) | Event_MemberOnClick; Event_NonMemberOnClick |
| HouseholdDetails_TimelinePhoto | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_BackgroundURL: Text (mandatory); Label: Text (mandatory); Date: Date Time (mandatory); In_CardTypeId: UBT_ImageCardType Identifier (mandatory); IsSelected: Boolean (mandatory) | Selected |
| HouseholdDetails_TimelinePhoto_List | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_HouseholdTimelineImages: UI_HouseholdTimelineImages List (mandatory) | Event_DateSelected |
| Household_Card | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | Household: UI_LocalityHousehold (mandatory) | Event_OnClickHousehold |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| OneSchoolGlobal_List | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_IsLoading: Boolean (mandatory); OneSchoolList: UI_OneSchool_Card List (mandatory) | Event_OnClick; Event_OnClick_Bookmark; Event_ScrollEnding |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SubLayout_Browse_Section | SubLayout | `../../_shared/pack/blocks.md` | - | - |
| SubLayout_DirectoryDetailScreen | SubLayout | `../../_shared/pack/blocks.md` | HideActions: Boolean | - |
| SubLayout_DirectoryDetailScreen_Section | SubLayout | `../../_shared/pack/blocks.md` | In_Title: Text (mandatory); In_PaddingTop: UBT_Size Identifier = Entities.UBT_Size.Small; In_PaddingBottom: UBT_Size Identifier = Entities.UBT_Size.Small | - |
| SupperMeeting_ImageCard_Content | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_Subdivision_CardContent: UI_Subdivision_Card_Content (mandatory); In_ShowAddress: Boolean | - |
| SupperMeeting_ImageCard_Content_IconText | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_Text: Text (mandatory); In_FontSize: UBT_FontSize Identifier (mandatory); In_UBT_IconId: UBT_Icons2 Identifier (mandatory); In_UBT_ColorId: UBT_Color Identifier (mandatory) | - |
| SupperMeeting_ImageCard_Content_Statistics | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_BretherenCount: Integer (mandatory); In_HouseholdCount: Integer (mandatory); In_GenderSplit: Text (mandatory) | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
