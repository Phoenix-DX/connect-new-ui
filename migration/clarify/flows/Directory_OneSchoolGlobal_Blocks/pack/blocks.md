# Pack of UI flow Directory_OneSchoolGlobal_Blocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: DW_OneSchoolGlobal_EventList, DW_OneSchoolGlobal_Numbers, OneSchoolGlobal_DetailCard_Content, OneSchoolGlobal_Event_Card, OneSchoolGlobal_Event_ListCard, OneSchoolGlobal_Event_ListCard_List, OneSchoolGlobal_List, OneSchoolGlobal_Numbers, UI_OneSchoolGlobalEventDetail_IconTextWrapper
Blocks of other UBTConnect flows that the flow uses (transitive): 2

## Block DW_OneSchoolGlobal_EventList (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: -
- events: Event_OnClick(Event_OneSchoolGlobaEventId: Long Integer (mandatory))
- local variables: OneSchoolGlobal_EventCard_List: UI_OneSchoolGlobal_Event_Card List; GetOneSchoolGlobal_EventList_StartIndex: Integer; GetOneSchoolGlobal_EventList_Offset: Integer = 20; GetOneSchoolGlobal_EventList_IsLoading: Boolean = True
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): OneSchoolGlobalDetails_Block

#### Data sources
- data action **Get_OneSchoolGlobal_EventList** fetch=OnDemand; outputs: Out_OneSchoolGlobal_EventCard_List: UI_OneSchoolGlobal_Event_Card List; OnAfterFetch → OnAfterFetch_Get_OneSchoolGlobal_EventList
  locals: UI_OneSchoolGlobal_Event_Card: UI_OneSchoolGlobal_Event_Card
  ```
  assign: UI_OneSchoolGlobal_Event_Card.SignedURL.LowResolution = "img/UBTConnect.SampleOneSchoolGlobalEvent.png"; UI_OneSchoolGlobal_Event_Card.SignedURL.MediumResolution = "img/UBTConnect.SampleOneSchoolGlobalEvent.png"; UI_OneSchoolGlobal_Event_Card.SignedURL.HighResolution = "img/UBTConnect.SampleOneSchoolGlobalEvent.png"; UI_OneSchoolGlobal_Event_Card.EventId = 1; UI_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.Name = "Sports Day Extravaganza: Igniting the Team Spirit"
  call-server ListAppendAll(List=UI_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List, SourceList=[ 1, 2, 5 ])
  call-server ListAppend(Element=UI_OneSchoolGlobal_Event_Card, List=Out_OneSchoolGlobal_EventCard_List)
  assign: UI_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.Name = "School gathering"
  call-server ListAppendAll(List=UI_OneSchoolGlobal_Event_Card.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List, SourceList=[ 4, 5, 6 ]) as ListAppendAll2
  call-server ListAppend(Element=UI_OneSchoolGlobal_Event_Card, List=Out_OneSchoolGlobal_EventCard_List) as ListAppend2
  call-server Wait(Duration=2)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block OneSchoolGlobal_Event_ListCard_List (UBTConnect.Directory_OneSchoolGlobal_Blocks)
  args: In_IsLoading=GetOneSchoolGlobal_EventList_IsLoading, In_IsUpdating=Get_OneSchoolGlobal_EventList.IsDataFetched and not Get_OneSchoolGlobal_EventList.HasFetchError and not GetOneSchoolGlobal_EventList_IsLoading, In_OneSchoolGlobal_EventCard_List=OneSchoolGlobal_EventCard_List
  on Event_ScrollEnding → Handler_OnScrollEnding
  on Event_OnClick → Event_OnClick(Event_OneSchoolGlobaEventId=Event_OneSchoolGlobaEventlId)
```

#### Block actions
- **Handler_OnScrollEnding**
  ```
  if Get_OneSchoolGlobal_EventList.IsDataFetched
    if Get_OneSchoolGlobal_EventList.Out_OneSchoolGlobal_EventCard_List.Length >= GetOneSchoolGlobal_EventList_Offset
      assign (MaxRecords += IncrementRecords): GetOneSchoolGlobal_EventList_StartIndex = GetOneSchoolGlobal_EventList_StartIndex + GetOneSchoolGlobal_EventList_Offset
      refresh data Get_OneSchoolGlobal_EventList
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
- **OnAfterFetch_Get_OneSchoolGlobal_EventList**
  ```
  if GetOneSchoolGlobal_EventList_IsLoading
    call ListClear(List=OneSchoolGlobal_EventCard_List)
    assign: GetOneSchoolGlobal_EventList_IsLoading = False
    [M1] call ListAppendAll(List=OneSchoolGlobal_EventCard_List, SourceList=Get_OneSchoolGlobal_EventList.Out_OneSchoolGlobal_EventCard_List)
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
    call GetSekeletonList_UI_OneSchoolGlobal_EventCard()
    assign: OneSchoolGlobal_EventCard_List = GetSekeletonList_UI_OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_List
    refresh data Get_OneSchoolGlobal_EventList
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block DW_OneSchoolGlobal_Numbers (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_OneSchoolGlobal_LocalitiesList: LocalityId, LocalityName Record List (mandatory)
- events: -
- local variables: Filter_CalendarYear: Text; Filter_LocalityId: Long Integer; Filter_AvailableCalendarYears: Text List; Filter_LocalitiesList: Tag List
- lifecycle: OnReady → ScreenEvent_OnReady; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): OneSchoolGlobalDetails_Block

#### Data sources
- data action **Get_OneSchoolGlobal_StudentNumbers** fetch=AtStart; outputs: Out_OneSchoolGlobal_StudentNumbers: UI_OneSchoolGlobal_StudentNumbers; OnAfterFetch → OnAfterFetch_Get_OneSchoolGlobal_StudentNumbers
  ```
  call-server ListAppendAll(List=Out_OneSchoolGlobal_StudentNumbers.StudentsPerYear, SourceList=[ { SchoolYear: 1, StudentCount: 20 }, { SchoolYear: 2, StudentCount: 40 }, { SchoolYear: 3, StudentCount: 50 }, { SchoolYear: 4, StudentCount: 60 } ])
  call-server ListAppendAll(List=Out_OneSchoolGlobal_StudentNumbers.AvailableCalendarYears, SourceList=[ "2025", "2024", "2023", "2022", "2021" ]) as ListAppendAll3
  call-server Wait(Duration=2)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block OneSchoolGlobal_Numbers (UBTConnect.Directory_OneSchoolGlobal_Blocks)
  args: In_IsLoading=(Filter_AvailableCalendarYears.Empty and not Get_OneSchoolGlobal_StudentNumbers.IsDataFetched), In_IsLoadingStudentNumbers=not Get_OneSchoolGlobal_StudentNumbers.IsDataFetched, In_LocalitiesList=Filter_LocalitiesList, In_Selected_CalendarYear=Filter_CalendarYear, In_StudentNumbers={ StudentsPerYear: Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers.StudentsPerYear, AvailableCalendarYears: Filter_AvailableCalendarYears }
  on Event_ClickCalendarYear → OnCick_OneSchoolGlobal_Numbers_CalendarYear(Event_CalendarYear=Event_CalendarYear)
  on Event_ClickLocality → OnCick_OneSchoolGlobal_Numbers_Locality(Event_LocalityId=Event_LocalityId)
```

#### Block actions
- **OnAfterFetch_Get_OneSchoolGlobal_StudentNumbers**
  ```
  if Filter_AvailableCalendarYears.Empty
    assign: Filter_CalendarYear = Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers.AvailableCalendarYears.Current; Filter_AvailableCalendarYears = Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers.AvailableCalendarYears
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnCick_OneSchoolGlobal_Numbers_CalendarYear** inputs: Event_CalendarYear: Text (mandatory)
  ```
  assign: Filter_CalendarYear = Event_CalendarYear
  call GetSkeleton_UI_OneSchoolGlobal_StudentNumbers()
  assign: Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers.StudentsPerYear = GetSkeleton_UI_OneSchoolGlobal_StudentNumbers.UI_OneSchoolGlobal_StudentNumbers.StudentsPerYear
  refresh data Get_OneSchoolGlobal_StudentNumbers
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnCick_OneSchoolGlobal_Numbers_Locality** inputs: Event_LocalityId: Long Integer (mandatory)
  ```
  [M1] for each Filter_LocalitiesList
    assign: Filter_LocalitiesList.Current.IsSelected = TextToLongInteger(Filter_LocalitiesList.Current.Identifier) = Event_LocalityId
    → continues at [M1]
  end for
  assign: Filter_LocalityId = Event_LocalityId; Filter_CalendarYear = "2025" //Skeleton Span
  call ListClear(List=Filter_AvailableCalendarYears)
  call GetSkeleton_UI_OneSchoolGlobal_StudentNumbers()
  assign: Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers = GetSkeleton_UI_OneSchoolGlobal_StudentNumbers.UI_OneSchoolGlobal_StudentNumbers
  refresh data Get_OneSchoolGlobal_StudentNumbers
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  if In_OneSchoolGlobal_LocalitiesList.Length > 1
    call ListInsert(Element={ LocalityId: NullIdentifier(), LocalityName: "All" }, List=In_OneSchoolGlobal_LocalitiesList, Position=0)
    assign: Filter_LocalityId = NullIdentifier()
    [M1] assign: Filter_LocalitiesList = ConvertList(In_OneSchoolGlobal_LocalitiesList,  {Text:"LocalityName",Identifier:"LocalityId",IsSelected:"LocalityId = Filter_LocalityId"})
    end
  else
    assign: Filter_LocalityId = In_OneSchoolGlobal_LocalitiesList.Current.LocalityId
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
    call GetSkeleton_UI_OneSchoolGlobal_StudentNumbers()
    assign: Get_OneSchoolGlobal_StudentNumbers.Out_OneSchoolGlobal_StudentNumbers = GetSkeleton_UI_OneSchoolGlobal_StudentNumbers.UI_OneSchoolGlobal_StudentNumbers
    refresh data Get_OneSchoolGlobal_StudentNumbers
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block OneSchoolGlobal_DetailCard_Content (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_OneSchoolGlobal_DetailCardContent: UI_OneSchoolGlobal_DetailCard_Content (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
  args: In_Title=In_OneSchoolGlobal_DetailCardContent.Name
  placeholder Placeholder_BottomSectionContent:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text="Educating Students From:", In_TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text=ListJoin(In_OneSchoolGlobal_DetailCardContent.LocalityNames_List), In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.ExtraSmall } }
      placeholder Content:
        block AddressPopup_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
          args: In_Address=In_OneSchoolGlobal_DetailCardContent.Address
        list source=In_OneSchoolGlobal_DetailCardContent.BusinesLinks mode=Default  [style="list list-group"]
          block External_Link (UBTConnect.App_Common_Blocks)
            args: IconVisible=True, In_Link=In_OneSchoolGlobal_DetailCardContent.BusinesLinks.Current, IsEnabled=True
```

## Block OneSchoolGlobal_Event_Card (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): OneSchoolGlobalEventDetail

#### Widget tree
```
block ImageCard (UBTConnectLibrary.ConnectCorePatterns)
  args: In_BackgroundURL=OneSchoolGlobal_EventCard.SignedURL.LowResolution, In_CardTypeId=Entities.UBT_ImageCardType.Detail
  placeholder Placeholder_Content:
    block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
      args: In_Title=OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.Name
      placeholder Placeholder_BottomSectionContent:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: ExtendedClasses="gap-s", Options={ PaddingSize: {  }, MarginSize: { BottomSizeId: Entities.UBT_Size.Base }, DisplayOptions: { Display: Entities.UBT_Display.Flex, FlexDirection: Entities.UBT_FlexDirection.Column } }
          placeholder Content:
            block UI_OneSchoolGlobalEventDetail_IconTextWrapper (UBTConnect.Directory_OneSchoolGlobal_Blocks)
              args: IconId=Entities.UBT_Icons2.Event, Text=FormatConnectDate_WithYear(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart).ShortLabel
            block UI_OneSchoolGlobalEventDetail_IconTextWrapper (UBTConnect.Directory_OneSchoolGlobal_Blocks)
              args: IconId=Entities.UBT_Icons2.Schedule, Text=Get_Descriptor_OneSchool_Event_TimeRange(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart,OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeEnd,OneS…
            block UI_OneSchoolGlobalEventDetail_IconTextWrapper (UBTConnect.Directory_OneSchoolGlobal_Blocks)
              args: IconId=Entities.UBT_Icons2.School, Text=GetDescriptor_OneSchool_Event_Years(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List)
        block AddressPopup_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
          args: In_Address=OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.Address
```

## Block OneSchoolGlobal_Event_ListCard (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card (mandatory)
- events: Event_OnClick(Event_OneSchoolGlobaEventlId: Long Integer (mandatory))
- local variables: -
- lifecycle: none
- used by (UBTConnect): OneSchoolGlobal_Event_ListCard_List

#### Widget tree
```
block ImageCard (UBTConnectLibrary.ConnectCorePatterns)
  args: In_BackgroundURL=OneSchoolGlobal_EventCard.SignedURL.LowResolution, In_CardTypeId=Entities.UBT_ImageCardType.Sublist
  on Event_Click → Event_OnClick(Event_OneSchoolGlobaEventlId=OneSchoolGlobal_EventCard.EventId)
  placeholder Placeholder_Content:
    block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
      args: In_Title=OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.Name
      placeholder Placeholder_TopSectionContent:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text=FormatConnectDateTime(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.DateTimeStart).ShortLabel, In_TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.DoubleExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
      placeholder Placeholder_BottomSectionContent:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text=GetDescriptor_OneSchool_Event_Years(OneSchoolGlobal_EventCard.UI_OneSchoolGlobal_Event_Card_Content.ParticipantYear_List), In_TextOptions={ Color: Entities.UBT_Color.Neutral5, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
```

## Block OneSchoolGlobal_Event_ListCard_List (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_OneSchoolGlobal_EventCard_List: UI_OneSchoolGlobal_Event_Card List (mandatory); In_IsLoading: Boolean (mandatory); In_IsUpdating: Boolean (mandatory)
- events: Event_OnClick(Event_OneSchoolGlobaEventlId: Long Integer (mandatory)); Event_ScrollEnding() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): DW_OneSchoolGlobal_EventList

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    list source=In_OneSchoolGlobal_EventCard_List mode=Default on scroll-ending → Event_ScrollEnding  [style="list list-group list--gap-s"]
      container
        block OneSchoolGlobal_Event_ListCard (UBTConnect.Directory_OneSchoolGlobal_Blocks) #Block_OneSchoolGlobal_ImageCard
          args: OneSchoolGlobal_EventCard=In_OneSchoolGlobal_EventCard_List.Current
          on Event_OnClick → Event_OnClick(Event_OneSchoolGlobaEventlId=Event_OneSchoolGlobaEventlId)
    if In_IsUpdating
    else
      container  [style="list-updating"]
```

## Block OneSchoolGlobal_List (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_IsLoading: Boolean (mandatory); OneSchoolList: UI_OneSchool_Card List (mandatory)
- events: Event_OnClick(Event_OneSchoolGlobalId: Long Integer (mandatory)); Event_OnClick_Bookmark(IsBookmarked: Boolean (mandatory)) mandatory; Event_ScrollEnding() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Locality_OneSchoolGlobal

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    list source=OneSchoolList mode=Default on scroll-ending → Event_ScrollEnding  [style="list list-group list--gap-s"]
      block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns)
        args: In_BookmarkModifier="bookmark--rounded", In_CardTypeId=Entities.UBT_ImageCardType.List, In_ExtendedClass="padding-bottom-s", In_ShowAvatarList=False
        on Event_Click → Event_OnClick(Event_OneSchoolGlobalId=OneSchoolList.Current.CommunityBusinessId)
        placeholder LazyImage_Placeholder:
          container
            block UBT_LazyImage (UBTConnect_Utils.CW_Image)
              args: EntityId=OneSchoolList.Current.CommunityBusinessId, EntityType=Entities.Connect_Entity.OneSchoolGlobal, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }, ImageURL=OneSchoolList.Current.SignedURL
        placeholder Placeholder_Content:
          block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
            args: In_ShowSubtitle=True, In_Subtitle=OneSchoolList.Current.OneSchool_Card_Content.LocalityName, In_Title=OneSchoolList.Current.OneSchool_Card_Content.Name
            placeholder Placeholder_BottomSectionContent:
              block StopPropagationHelper (UBTConnectLibrary.ConnectPatterns)
                placeholder Content:
                  block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
                    args: ContactPopUp_OverrideOptions={ ImageURL: OneSchoolList.Current.SignedURL, Name: Trim(OneSchoolList.Current.OneSchool_Card_Content.Name) }, EnableOptions={ EnableNotes: True }, EntityId=OneSchoolList.Current.CommunityBusinessId, EntityType=Entities.Connect_Entity.OneSchoolGlobal
```

## Block OneSchoolGlobal_Numbers (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: In_StudentNumbers: UI_OneSchoolGlobal_StudentNumbers (mandatory); In_Selected_CalendarYear: Text (mandatory); In_IsLoading: Boolean (mandatory); In_IsLoadingStudentNumbers: Boolean (mandatory); In_LocalitiesList: Tag List (mandatory)
- events: Event_ClickCalendarYear(Event_CalendarYear: Text (mandatory)) mandatory; Event_ClickLocality(Event_LocalityId: Long Integer (mandatory)) mandatory
- local variables: -
- lifecycle: OnParametersChanged → OnParametersChanged
- used by (UBTConnect): DW_OneSchoolGlobal_Numbers

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_LocalityFilter
  args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Base }, MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
  placeholder Content:
    block HorizontalTagList (UBTConnectLibrary.ConnectPatterns)
      args: In_IsMandatorySelection=True, In_IsSingleSelection=True, In_TagToggleList=In_LocalitiesList
      on Changed → OnClick_LocalityFilter(Event_UpdatedTagList=UpdatedTagList)
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=In_IsLoading
  placeholder Placeholder_LoadingSection:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=In_IsLoading
      placeholder Placeholder_LoadingSection:
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_CalendarYearFilter
          args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            block Columns_Three (UBTConnectLibrary.BasePatterns)
              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ExpandMiddle, ColumnSizes: { Left: 119, Right: 119 } }
              placeholder Left:
                block CustomText (UBTConnectLibrary.BasePatterns) #Block_CalendarYears_Label
                  args: In_Text="Select calendar year", In_TextOptions={ FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
                block PopupMenu (Connect2_LegacyShared+UBTConnectLibrary.Widgets)
                  args: Position=Entities.Position.Bottom
                  placeholder Anchor:
                    if False  [DEAD BRANCH: condition is a constant]
                      block CustomText (UBTConnectLibrary.BasePatterns) #Block_CalendarYear
                        args: In_Text=In_Selected_CalendarYear, In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: Options={ TextOptions: { Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }, DisplayOptions: { Display: Entities.UBT_Display.Flex, Ali…
                      placeholder Content:
                        expr: In_Selected_CalendarYear
                        block CustomContainer (UBTConnectLibrary.BasePatterns)
                          args: Options={ MarginSize: { LeftSizeId: Entities.UBT_Size.Small } }
                          placeholder Content:
                            block Icon (UBTConnectLibrary.ConnectPatterns)
                              args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.ArrowDropDown, In_SizeId=Entities.UBT_IconsSize.Base_24
                  placeholder PopupMenu:
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: ExtendedClasses="dx-popup-menu-container--year-list", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, BorderOptions: { Color: Entities.UBT_Color.Neutral7, Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entitie…
                      placeholder Content:
                        list source=In_StudentNumbers.AvailableCalendarYears mode=Default  [style="list list-group"; disable-virtualization=True]
                          block CustomContainer (UBTConnectLibrary.BasePatterns)
                            args: ExtendedClasses="dx-popup-menu-container--years-list__element", Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base }, MarginSize: {  }, BorderOptions: {  }, DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center } }
                            on Clicked → OnClick_CalendarYear(Event_CalendarYear=In_StudentNumbers.AvailableCalendarYears.Current)
                            placeholder Content:
                              expr: In_StudentNumbers.AvailableCalendarYears.Current
              placeholder Right:
                block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                  args: In_IsLoading=In_IsLoadingStudentNumbers
                  placeholder Placeholder_LoadingSection:
                    block CustomText (UBTConnectLibrary.BasePatterns)
                      args: In_Text="Total students", In_TextOptions={ FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    block CustomText (UBTConnectLibrary.BasePatterns)
                      args: In_Text=800, In_TextOptions={ FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=In_IsLoadingStudentNumbers
          placeholder Placeholder_LoadingSection:
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, TextOptions: { FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold } }
              placeholder Content:
                expr: "Total per year"
            list source=In_StudentNumbers.StudentsPerYear mode=Default #List_SchoolYears  [style="list list-group list--gap-s"]
              container  [style=""]
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: ExtendedClasses="ubt-skeleton-section__element", Options={ BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entities.UBT_Shape.Soft } }, TextOptions: { FontSize: Entities.UBT_Fo…
                  placeholder Content:
                    block Columns_Two (UBTConnectLibrary.BasePatterns)
                      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, VerticalAlign: Entities.UBT_VerticalAlign.Center, ColumnSizes: { Left: 96 } }
                      placeholder Left:
                        block CustomContainer (UBTConnectLibrary.BasePatterns)
                          args: ExtendedClasses="text-align-center", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral4 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base }, TextOptions: {  } }
                          placeholder Content:
                            block CustomText (UBTConnectLibrary.BasePatterns)
                              args: In_Text=In_StudentNumbers.StudentsPerYear.Current.SchoolYear, In_TextOptions={  }
                      placeholder Right:
                        container  [style="text-align-center"]
                          expr: In_StudentNumbers.StudentsPerYear.Current.StudentCount + " Students"  [style="text-align-center"]
```

#### Block actions
- **OnClick_CalendarYear** inputs: Event_CalendarYear: Text (mandatory)
  ```
  if Event_CalendarYear = In_Selected_CalendarYear
    end
  else
    trigger event Event_ClickCalendarYear(Event_CalendarYear=Event_CalendarYear)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnClick_LocalityFilter** inputs: Event_UpdatedTagList: Tag List (mandatory)
  ```
  call ListIndexOf(Condition=IsSelected, List=Event_UpdatedTagList)
  javascript Yield()
    | Promise.resolve().then($resolve);
  trigger event Event_ClickLocality(Event_LocalityId=TextToLongInteger(Event_UpdatedTagList[ListIndexOf.Position].Identifier))
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block UI_OneSchoolGlobalEventDetail_IconTextWrapper (flow Directory_OneSchoolGlobal_Blocks)
- public: False
- input parameters: IconId: UBT_Icons2 Identifier (mandatory); Text: Text (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): OneSchoolGlobal_Event_Card

#### Widget tree
```
block IconText (UBTConnectLibrary.ConnectPatterns)
  args: Text=Text, TextOptions={ FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
  placeholder Icon:
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_IconId=IconId, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Directory_EntityDetailsActions | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean | Event_MenuEdit; OnChange_Bookmark; ViewDetails_OnClick |
| External_Link | App_Common_Blocks | `../../_shared/pack/blocks.md` | In_Link: BusinessLinkItem (mandatory); IsEnabled: Boolean = True; IconVisible: Boolean = True | - |
