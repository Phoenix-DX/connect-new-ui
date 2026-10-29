# Pack of UI flow Directory_Locality (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: BrowseCountries, BrowseDirectory, CountryDetails, CountryList, Locality_Details

## Screen BrowseCountries (flow Directory_Locality)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: -
- lifecycle: OnReady → ScreenEvent_OnReady

#### Data sources
- data action **GetCountriesStatistics** fetch=OnDemand; outputs: Out_CountriesStatistics: UI_CountryStatistics List; OnAfterFetch → OnAfterFetch_GetCountriesStatistics
  ```
  call-server Get_UI_CountryStatistics()
  assign: Out_CountriesStatistics = Get_UI_CountryStatistics.Out_UI_CountryStatistics
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Title:
    text: Browse by country
  placeholder Content:
    block StatisticsList (UBTConnect.Directory_Locality)
      args: In_IsLoading=not GetCountriesStatistics.IsDataFetched, In_SearchPrompt="Search " + GetLookupConcepts(In_IsLowercase:True).Country.Singular, In_Statistics=ConvertList(GetCountriesStatistics.Out_CountriesStatistics,  {Id:"CountryCode",StatisticsOptions:"Statistics"})
      on Event_Clicked → Handler_StatisticsList_Clicked(Event_Id=Event_Id)
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=Entities.Connect_BottomBar_Items.Directory
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Action_RefreshData**
  ```
  call GetSkeletonList_UI_CountryStatistics(ListLength=10)
  assign: GetCountriesStatistics.Out_CountriesStatistics = GetSkeletonList_UI_CountryStatistics.UI_CountryStatistics
  refresh data GetCountriesStatistics
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_StatisticsList_Clicked** inputs: Event_Id: Text (mandatory)
  ```
  if Event_Id <> NullTextIdentifier()
    call HasAccessToRegion(Target_CountryNameOrCode=Event_Id, Target_LocalityNameOrId=TextToLongInteger(Event_Id))
    if HasAccessToRegion.HasAccess
      navigate → BrowseDirectory(CountryCode=Event_Id) transition=Inherited
    else
      call App_Subscription_ShowUpgradePopUp()
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnAfterFetch_GetCountriesStatistics**
  ```
  [M1] for each GetCountriesStatistics.Out_CountriesStatistics
    assign: GetCountriesStatistics.Out_CountriesStatistics.Current.Statistics.AvatarURL = GetFlagURLByCountryCode(GetCountriesStatistics.Out_CountriesStatistics.Current.CountryCode)
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache and GetCountriesStatistics.IsDataFetched
    end
  else
    call Action_RefreshData()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Screen BrowseDirectory (flow Directory_Locality)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: CountryCode: Text (mandatory)
- local variables: MarkersList: MarkerWithWindow List; Center: Decimal List; Local_MapId: Text
- lifecycle: OnReady → ScreenEvent_OnReady

#### Data sources
- data action **GetLocalityStatistics** fetch=OnDemand; outputs: Out_LocalitiesStatistics: UI_LocalityStatistics List; CountryName: Text; OnAfterFetch → OnAfterFetch_GetLocalityStatistics
  ```
  aggregate GetContactBaseCountryById max=None: sources[ContactBase_Country] filter[ContactBase_Country.Id = TextToIdentifier(CountryCode)]
  assign: CountryName = GetContactBaseCountryById.List.Current.ContactBase_Country.Name
  call-server Get_UI_LocalityStatistics(In_CountryCode=CountryCode)
  assign: Out_LocalitiesStatistics = Get_UI_LocalityStatistics.Out_UI_LocalityStatistics
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Title:
    expr: If(GetLocalityStatistics.CountryName= "" , "Browse Directory", GetLocalityStatistics.CountryName)
  placeholder Content:
    block SubLayout_Browse_Section (UBTConnect.SubLayout)
      placeholder Placeholder_TopSection:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            container  [on onclick → Handler_BrowseCountries]
              block Columns_Two (UBTConnectLibrary.BasePatterns)
                args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }, ExtendedClasses="margin-left-base"
                placeholder Left:
                  block IconText (UBTConnectLibrary.ConnectPatterns)
                    args: SpacingSize=Entities.UBT_Size.Base, Text="Select another country to view"
                    placeholder Icon:
                      block Icon (UBTConnectLibrary.ConnectPatterns)
                        args: In_IconId=Entities.UBT_Icons2.BookClosed
                placeholder Right:
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_IconId=Entities.UBT_Icons2.ChevronRight
      placeholder Placeholder_BottomSection:
        if not Center.Empty
          block LeafletMap (Leaflet.Leaflet) #LeafletMap
            args: MapOptions={ Center: Center, Zoom: 5, MinZoom: 2, MaxZoom: 20, MaxBounds: { Max_Lat: 100, Min_Lat: -100, Max_Long: 190, Min_Long: -190 }, AttributionControl: False, MaxBoundsViscosity: 0.5 }, MarkersList=MarkersList, TileLayer={ Url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", Options: { MinZoom: 2, MaxZoom: 20, Subdomains: [ "a", "b", "c", "d" ] } }, useClustering=True, ZoomControlOptions={ position: "bottomright", zoomInTitle: "Zoom in", zoomInClass: "ubt-icon "+Entities.UBT_Icons2.Add+" "+ GetClass_Color(Entities.UBT_Color.Neutral8), zoomOutTitle: "Zoom out", zoomOutClass: "ubt-icon…
            on OnInitialized → Handler_LeafletMapOnInitialized(MapId=MapId)
            on OnMarker_Clicked → Handler_LeafletMapOnMarker_Clicked(ExtraData=ExtraData, Lat=Lat, Long=Long, MapId=MapId, MarkerId=MarkerId, MarkerObj=MarkerObj, Type=Type)
            on SetCallbacks → LeafletMapSetCallbacks(MapId=MapId)
        else
          block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
            args: In_IsLoading=True
            placeholder Placeholder_LoadingSection:
              container  [style="leaflet-container"]
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 } }
          placeholder Content:
            block StatisticsList (UBTConnect.Directory_Locality)
              args: In_IsLoading=not GetLocalityStatistics.IsDataFetched , In_SearchPrompt="Search " + GetLookupConcepts(In_IsLowercase:True).Locality.Singular, In_ShowSubtitle=True, In_Statistics=ConvertList(GetLocalityStatistics.Out_LocalitiesStatistics,  {Id:"LocalityId",StatisticsOptions:"Statistics"})
              on Event_Clicked → Handler_StatisticsList_Clicked(Event_Id=Event_Id)
              on OnParametersChangedEv → StatisticsListOnParametersChhanged
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=Entities.Connect_BottomBar_Items.Directory
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Action_InvalidateMapSize**
  ```
  if Local_MapId <> ""
    call Map_InvalidateSize(MapId=Local_MapId)
    call Map_FitBoundsAuto(MapId=Local_MapId)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_RefreshData**
  ```
  call GetSkeletonList_UI_LocalityStatistics(ListLength=10)
  assign: GetLocalityStatistics.Out_LocalitiesStatistics = GetSkeletonList_UI_LocalityStatistics.UI_LocalityStatistics
  refresh data GetLocalityStatistics
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_BrowseCountries**
  ```
  navigate → BrowseCountries() transition=Inherited
  ```
- **Handler_LeafletMapOnInitialized** inputs: MapId: Text (mandatory)
  ```
  assign: Local_MapId = MapId
  javascript AsyncInvalidate()
    | setTimeout($actions.Action_InvalidateMapSize,0)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_LeafletMapOnMarker_Clicked** inputs: MarkerId: Text (mandatory); MapId: Text (mandatory); Type: Text (mandatory); ExtraData: Text (mandatory); Lat: Decimal (mandatory); Long: Decimal (mandatory); MarkerObj: Object (mandatory)
  ```
  call Map_Marker_OpenPopUp(MarkerObj=MarkerObj)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_StatisticsList_Clicked** inputs: Event_Id: Text (mandatory); locals: LocalityLabel: Text
  ```
  if Event_Id <> NullTextIdentifier()
    call HasAccessToRegion(Target_CountryNameOrCode=CountryCode, Target_LocalityNameOrId=TextToLongInteger(Event_Id))
    if HasAccessToRegion.HasAccess
      call ListIndexOf(Condition=LocalityId = Event_Id, List=GetLocalityStatistics.Out_LocalitiesStatistics)
      if ListIndexOf.Position <> -1
        assign: LocalityLabel = GetLocalityLabel(GetLocalityStatistics.Out_LocalitiesStatistics[ListIndexOf.Position].Name,GetLocalityStatistics.CountryName)
        [M1] navigate → Locality_Details(LocalityId=TextToLongInteger(Event_Id), PreloadedLocalityLabel=LocalityLabel) transition=Inherited
      else
        → continues at [M1]
    else
      call App_Subscription_ShowUpgradePopUp()
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **LeafletMapSetCallbacks** inputs: MapId: Text (mandatory)
  ```
  javascript JavaScript1() → PopupBindingCallback: Object
    | $parameters.PopupBindingCallback = function(marker) {
    |     var object = $actions.Directory_BrowseByCountry_TooltipBuilder(marker,$actions.Handler_StatisticsList_Clicked).Object;
    |     return object;
    | };
  call Map_SetPopupBindingCallback(Callback=JavaScript1.PopupBindingCallback, MapId=MapId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetLocalityStatistics**; locals: Local_MarkerWithTooltip: MarkerWithWindow
  ```
  call ListClear(List=Center) as CenterClear
  call ListAppend(Element=GetLocalityStatistics.Out_LocalitiesStatistics.Current.Latitude, List=Center) as CenterLat
  call ListAppend(Element=GetLocalityStatistics.Out_LocalitiesStatistics.Current.Longitude, List=Center) as CenterLong
  javascript GetCallback() → Object: Object
    | $parameters.Object = $actions.Handler_StatisticsList_Clicked;
  [M1] for each GetLocalityStatistics.Out_LocalitiesStatistics
    call ListClear(List=Local_MarkerWithTooltip.Marker.Latlng) as MarkerClear
    assign: Local_MarkerWithTooltip = ConvertRecord(GetLocalityStatistics.Out_LocalitiesStatistics.Current,  {"Marker.Id":"LocalityId","Marker.Type":"Entities.Connect_Entity.Locality","Marker.ExtraData":"Statistics.Title","Marker.Options":"{ Icon: { iconUrl: \"/UBTConnect/img/UBTConnectLibrary.Pin_Member.svg\", iconSize: [ 20, 24 ], ic…
    call ListAppend(Element=GetLocalityStatistics.Out_LocalitiesStatistics.Current.Latitude, List=Local_MarkerWithTooltip.Marker.Latlng) as MarkerLat
    call ListAppend(Element=GetLocalityStatistics.Out_LocalitiesStatistics.Current.Longitude, List=Local_MarkerWithTooltip.Marker.Latlng) as MarkerLong
    call ListAppend(Element=Local_MarkerWithTooltip, List=MarkersList) as AddMarker
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache and GetLocalityStatistics.IsDataFetched
    end
  else
    call Action_RefreshData()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **StatisticsListOnParametersChhanged**
  ```
  if Local_MapId <> ""
    call Map_InvalidateSize(MapId=Local_MapId)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen CountryDetails (flow Directory_Locality)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: CountryCode: Text (mandatory)
- local variables: MarkersList: MarkerWithWindow List; Center: Decimal List; Local_MapId: Text; SearchString: Text; Local_List: UI_LocalityStatistics List; HasFiltersApplied: Boolean; BottomSheetId_IsLoaded: Boolean; BottomSheetId_ShowSubscription: Boolean; Filter_BottomSheetId: Text; OriginalCountryCode: Text; BottomSheetId: Text
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady

#### Data sources
- data action **GetLocalityStatistics** fetch=OnDemand; outputs: Out_LocalitiesStatistics: UI_LocalityStatistics List; CountryName: Text; OnAfterFetch → OnAfterFetch_GetLocalityStatistics
  ```
  aggregate GetContactBaseCountryById max=None: sources[ContactBase_Country] filter[ContactBase_Country.Id = TextToIdentifier(CountryCode)]
  assign: CountryName = GetContactBaseCountryById.List.Current.ContactBase_Country.Name
  call-server Get_UI_LocalityStatistics(In_CountryCode=CountryCode)
  assign: Out_LocalitiesStatistics = Get_UI_LocalityStatistics.Out_UI_LocalityStatistics
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Title:
    expr: If(GetLocalityStatistics.CountryName= "" , "Browse Directory", GetLocalityStatistics.CountryName)
  placeholder Placeholder_Header_Right:
    if False #HidingForNow  [DEAD BRANCH: condition is a constant]
      block FilterSheet_Icon (UBTConnect.App_CommonBlocks_Filter) #Icon_FilterSheet_PostScroll
        args: BottomSheetId=Filter_BottomSheetId, HaveFiltersApplied=HasFiltersApplied, isLoaded=BottomSheetId_IsLoaded, ShowSubscriptionOnClick=BottomSheetId_ShowSubscription
  placeholder Content:
    block SubLayout_Browse_Section (UBTConnect.SubLayout)
      placeholder Placeholder_TopSection:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            container  [on onclick → Handler_BrowseCountries]
              block Columns_Two (UBTConnectLibrary.BasePatterns)
                args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }, ExtendedClasses="margin-left-base"
                placeholder Left:
                  block IconText (UBTConnectLibrary.ConnectPatterns)
                    args: SpacingSize=Entities.UBT_Size.Base, Text="Select another country to view", TextOptions={ FontWeight: Entities.UBT_FontWeight.SemiBold }
                    placeholder Icon:
                      block Icon (UBTConnectLibrary.ConnectPatterns)
                        args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.LocationOn
                placeholder Right:
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_IconId=Entities.UBT_Icons2.ChevronRight
      placeholder Placeholder_BottomSection:
        if not Center.Empty and (GetLocalityStatistics.IsDataFetched or GetLocalityStatistics.HasFetchError)
          block LeafletMap (Leaflet.Leaflet) #LeafletMap
            args: MapOptions={ Center: Center, Zoom: 5, MinZoom: 2, MaxZoom: 20, MaxBounds: { Max_Lat: 100, Min_Lat: -100, Max_Long: 190, Min_Long: -190 }, AttributionControl: False, MaxBoundsViscosity: 0.5 }, MarkersList=MarkersList, TileLayer={ Url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"//"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", Options: { MinZo…, useClustering=True, ZoomControlOptions={ position: "bottomright", zoomInTitle: "Zoom in", zoomInClass: "ubt-icon "+Entities.UBT_Icons2.Add+" "+ GetClass_Color(Entities.UBT_Color.Primary), zoomOutTitle: "Zoom out", zoomOutClass: "ubt-icon …
            on OnParametersChanged → LeafletMapOnParametersChanged
            on SetCallbacks → LeafletMapSetCallbacks(MapId=MapId)
            on OnInitialized → Handler_LeafletMapOnInitialized(MapId=MapId)
            on OnMarker_Clicked → Handler_LeafletMapOnMarker_Clicked(ExtraData=ExtraData, Lat=Lat, Long=Long, MapId=MapId, MarkerId=MarkerId, MarkerObj=MarkerObj, Type=Type)
        else
          block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
            args: In_IsLoading=True
            placeholder Placeholder_LoadingSection:
              container  [style="leaflet-container"]
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            block CustomContainer (UBTConnectLibrary.BasePatterns) #Block_Search
              args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
              placeholder Content:
                block Input (UBTConnectLibrary.ConnectPatterns) #Block_SearchInput
                  args: In_Options={ IsEnabled: GetLocalityStatistics.Out_LocalitiesStatistics.Length > 1, InitalString: SearchString, SearchPrompt: "Search locality", Debounce_DelayMS: 200, BorderRadius: Entities.Shape.Rounded }
                  on Event_Submit → Handler_Search_OnChange(Event_CurrentString=Event_SubmittedString)
                  on Event_OnChange → Handler_Search_OnChange(Event_CurrentString=Event_CurrentString)
                  on Event_ClearString → Handler_Search_ClearString
            block CustomContainer (UBTConnectLibrary.BasePatterns) #Legend
              args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base } }
              placeholder Content:
                block Columns_Two (UBTConnectLibrary.BasePatterns) #Title
                  args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, VerticalAlign: Entities.UBT_VerticalAlign.Center }
                  placeholder Left:
                    block CustomText (UBTConnectLibrary.BasePatterns)
                      args: In_Text="Browse by Locality", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                  placeholder Right:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.Info, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
                      on Click → OnClick_LegendInfo
                block CustomContainer (UBTConnectLibrary.BasePatterns) #LocalityCount
                  args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Base } }
                  placeholder Content:
                    container
                      block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                        args: In_IsLoading=not (GetLocalityStatistics.IsDataFetched or GetLocalityStatistics.HasFetchError)
                        placeholder Placeholder_LoadingSection:
                          block CustomText (UBTConnectLibrary.BasePatterns)
                            args: In_Text=GetLocalityStatistics.Out_LocalitiesStatistics.Length+If(GetLocalityStatistics.Out_LocalitiesStatistics.Length = 1," Locality"," Localities"), In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }, InJustifyText=True
            if not (GetLocalityStatistics.IsDataFetched or GetLocalityStatistics.HasFetchError) #isLoading
              block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                args: In_IsLoading=True
                placeholder Placeholder_LoadingSection:
                  container
                    block Statistics_TypedItem (UBTConnect.Directory_Locality)
                      args: In_HasImage=True, In_ImageEntityTypeId=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, UI_CountryStatistics={ UI_StatisticsTexts: { Members: 111, Households: 11, Brothers: 11, Sisters: 11, SupperMeetings: 123 }, Name: "Loading Name" }
                  container
                    block Statistics_TypedItem (UBTConnect.Directory_Locality)
                      args: In_HasImage=True, In_ImageEntityTypeId=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, UI_CountryStatistics={ UI_StatisticsTexts: { Members: 111, Households: 11, Brothers: 11, Sisters: 11, SupperMeetings: 123 }, Name: "Loading Name" }
                  container
                    block Statistics_TypedItem (UBTConnect.Directory_Locality)
                      args: In_HasImage=True, In_ImageEntityTypeId=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, UI_CountryStatistics={ UI_StatisticsTexts: { Members: 111, Households: 11, Brothers: 11, Sisters: 11, SupperMeetings: 123 }, Name: "Loading Name" }
            else
              if Local_List.Empty and SearchString <> ""
                block EmptyList (UBTConnectLibrary.ConnectPatterns)
                  args: IconId=Entities.UBT_Icons2.Search
                  placeholder TitlePlaceholder:
                    expr: "No results found for '" + SearchString + "'"
                  placeholder TextPlaceholder:
                    expr: "Sorry, we couldn't find any results for your search. Please check your spelling or try different keywords."
              else
                list source=Local_List mode=Default  [style="list list-group"]
                  container  [on onclick → Handler_StatisticsList_Clicked(Event_Id=Local_List.Current.LocalityId)]
                    block Statistics_TypedItem (UBTConnect.Directory_Locality)
                      args: In_HasImage=True, In_ImageEntityId=Local_List.Current.MainHallSubdivisionId, In_ImageEntityTypeId=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, UI_CountryStatistics=ConvertRecord(Local_List.Current,  {UI_StatisticsTexts:"UI_TypedStatisticsTexts",Name:"Name"})
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=Entities.Connect_BottomBar_Items.Directory
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  block FilterSheet (UBTConnect.App_CommonBlocks_Filter)
    args: ExtendedClasses="bottom-sheet-higher-z-index", In_Options={ HasCountries: { Enable: True, Order: 1, AddAllOptions: False } }, In_StartFilter={ CountryIds: [ OriginalCountryCode ] }
    on Loaded → Handler_FilterSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
    on SheetInitialized → Handler_FilterSheetSheetInitialized(SheetId=SheetId)
    on ApplyFilters → Handler_FilterSheetApplyFilters(hasFitlerApplied=hasFitlerApplied, OptionChoice_Control=OptionChoice_Control, OptionList_Control=OptionList_Control, SortBy_Title=SortBy_Title, SubState_Countries=SubState_Countries, SubState_Localities=SubState_Localities)
if False #HideInServiceStudio_LegendBottomSheet  [DEAD BRANCH: condition is a constant]
else
  block Directory_LegendBottomSheet (UBTConnect.Directory_Locality)
    args: ShowLocalities=False
    on SheetInitialized → Directory_LegendBottomSheetSheetInitialized(SheetId=SheetId)
```

#### Screen actions
- **Action_DefineList**
  ```
  if SearchString = ""
    assign: Local_List = GetLocalityStatistics.Out_LocalitiesStatistics
    end
  else
    call ListFilter(Condition=Index(JSUtils_String_RemoveAccents(Name),JSUtils_String_RemoveAccents(SearchString),startIndex:,searchFromEnd:,ignoreCase:True) <> -1, SourceList=GetLocalityStatistics.Out_LocalitiesStatistics)
    assign: Local_List = ListFilter.FilteredList
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_InvalidateMapSize**
  ```
  if Local_MapId <> ""
    call Map_InvalidateSize(MapId=Local_MapId)
    call Map_FitBoundsAuto(MapId=Local_MapId)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_ManuallyOpenFilterSheet**
  ```
  if BottomSheetId_IsLoaded
    if BottomSheetId_ShowSubscription
      call App_Subscription_ShowUpgradePopUp()
      end
    else
      call BottomSheetOpen(WidgetId=Filter_BottomSheetId)
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **Action_RefreshData**
  ```
  call GetSkeletonList_UI_LocalityStatistics(ListLength=10)
  assign: GetLocalityStatistics.Out_LocalitiesStatistics = GetSkeletonList_UI_LocalityStatistics.UI_LocalityStatistics
  refresh data GetLocalityStatistics
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Directory_LegendBottomSheetSheetInitialized** inputs: SheetId: Text (mandatory)
  ```
  assign: BottomSheetId = SheetId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_BrowseCountries**
  ```
  call Action_ManuallyOpenFilterSheet()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetApplyFilters** inputs: OptionList_Control: Filter_Common_Control_List List (mandatory); OptionChoice_Control: Filter_Common_Control_Choice List (mandatory); SubState_Localities: Text (mandatory); SubState_Countries: Text (mandatory); SortBy_Title: Text (mandatory); hasFitlerApplied: Boolean (mandatory)
  ```
  if OptionList_Control.Current.SelectedIds.Empty or OptionList_Control.Current.SelectedIds.Current = Entities.Choice.None
    assign: CountryCode = OriginalCountryCode
    [M1] assign: HasFiltersApplied = hasFitlerApplied
    refresh data GetLocalityStatistics
    end
  else
    assign: CountryCode = OptionList_Control.Current.SelectedIds.Current
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetLoaded** inputs: ShowSubscriptionOnClick: Boolean (mandatory)
  ```
  assign (Setup Bottom Sheet Info): BottomSheetId_IsLoaded = True; BottomSheetId_ShowSubscription = ShowSubscriptionOnClick
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetSheetInitialized** inputs: SheetId: Text (mandatory)
  ```
  assign: Filter_BottomSheetId = SheetId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_LeafletMapOnInitialized** inputs: MapId: Text (mandatory)
  ```
  assign: Local_MapId = MapId
  javascript AsyncInvalidate()
    | setTimeout($actions.Action_InvalidateMapSize,0)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_LeafletMapOnMarker_Clicked** inputs: MarkerId: Text (mandatory); MapId: Text (mandatory); Type: Text (mandatory); ExtraData: Text (mandatory); Lat: Decimal (mandatory); Long: Decimal (mandatory); MarkerObj: Object (mandatory)
  ```
  call Map_Marker_OpenPopUp(MarkerObj=MarkerObj)
  end
  unreachable nodes (not connected to start or to an exception handler):
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
- **Handler_StatisticsList_Clicked** inputs: Event_Id: Text (mandatory); locals: LocalityLabel: Text
  ```
  if Event_Id <> NullTextIdentifier()
    call HasAccessToRegion(Target_CountryNameOrCode=CountryCode, Target_LocalityNameOrId=TextToLongInteger(Event_Id))
    if HasAccessToRegion.HasAccess
      call ListIndexOf(Condition=LocalityId = Event_Id, List=GetLocalityStatistics.Out_LocalitiesStatistics)
      if ListIndexOf.Position <> -1
        assign: LocalityLabel = GetLocalityLabel(GetLocalityStatistics.Out_LocalitiesStatistics[ListIndexOf.Position].Name,GetLocalityStatistics.CountryName)
        [M1] navigate → Locality_Details(LocalityId=TextToLongInteger(Event_Id), PreloadedLocalityLabel=LocalityLabel) transition=Inherited
      else
        → continues at [M1]
    else
      call App_Subscription_ShowUpgradePopUp()
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **LeafletMapOnParametersChanged**
  ```
  call Action_InvalidateMapSize()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **LeafletMapSetCallbacks** inputs: MapId: Text (mandatory)
  ```
  javascript JavaScript1() → PopupBindingCallback: Object
    | $parameters.PopupBindingCallback = function(marker) {
    |     var object = $actions.Directory_BrowseByCountry_TooltipBuilder(marker,$actions.Handler_StatisticsList_Clicked).Object;
    |     return object;
    | };
  call Map_SetPopupBindingCallback(Callback=JavaScript1.PopupBindingCallback, MapId=MapId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetLocalityStatistics**; locals: Local_MarkerWithTooltip: MarkerWithWindow
  ```
  call Action_DefineList()
  call ListClear(List=Center) as CenterClear
  call ListAppend(Element=GetLocalityStatistics.Out_LocalitiesStatistics.Current.Latitude, List=Center) as CenterLat
  call ListAppend(Element=GetLocalityStatistics.Out_LocalitiesStatistics.Current.Longitude, List=Center) as CenterLong
  javascript GetCallback() → Object: Object
    | $parameters.Object = $actions.Handler_StatisticsList_Clicked;
  call ListClear(List=MarkersList)
  [M1] for each GetLocalityStatistics.Out_LocalitiesStatistics
    call ListClear(List=Local_MarkerWithTooltip.Marker.Latlng) as MarkerClear
    assign: Local_MarkerWithTooltip = ConvertRecord(GetLocalityStatistics.Out_LocalitiesStatistics.Current,  {"Marker.Id":"LocalityId","Marker.Type":"Entities.Connect_Entity.Locality","Marker.ExtraData":"Statistics.Title","Marker.Options":"{ Icon: { iconUrl: \"/UBTConnect/img/UBTConnectLibrary.Pin_Member.svg\", iconSize: [ 20, 24 ], ic…
    call ListAppend(Element=GetLocalityStatistics.Out_LocalitiesStatistics.Current.Latitude, List=Local_MarkerWithTooltip.Marker.Latlng) as MarkerLat
    call ListAppend(Element=GetLocalityStatistics.Out_LocalitiesStatistics.Current.Longitude, List=Local_MarkerWithTooltip.Marker.Latlng) as MarkerLong
    call ListAppend(Element=Local_MarkerWithTooltip, List=MarkersList) as AddMarker
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_LegendInfo**
  ```
  call BottomSheetOpen(WidgetId=BottomSheetId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: OriginalCountryCode = CountryCode
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache and GetLocalityStatistics.IsDataFetched
    end
  else
    call Action_RefreshData()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **StatisticsListOnParametersChanged**
  ```
  if Local_MapId <> ""
    call Map_InvalidateSize(MapId=Local_MapId)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen CountryList (flow Directory_Locality)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: LocalCacheControl_UserInformation: Directory_UserCurrent, isFetched Record; BottomSheetId: Text; SkeletonCommunityStatistics: UI_CommunityStatistics
- lifecycle: OnReady → ScreenEvent_OnReady

#### Data sources
- data action **GetCommunityStatistics** fetch=OnDemand; outputs: Out_CommunityStatistics: UI_CommunityStatistics
  ```
  call-server Get_UI_CommunityNumbers()
  assign: Out_CommunityStatistics = Get_UI_CommunityNumbers.Out_CommunityNumbers
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- data action **GetCountriesStatistics** fetch=OnDemand; outputs: Out_CountriesStatistics: UI_CountryStatistics List; OnAfterFetch → OnAfterFetch_GetCountriesStatistics
  ```
  call-server Get_UI_CountryStatistics()
  assign: Out_CountriesStatistics = Get_UI_CountryStatistics.Out_UI_CountryStatistics
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_MainPages (UBTConnectLibrary.Layouts)
  args: AddHeaderGap=False, isGrayBackground=True
  placeholder Placeholder_Header_Title:
    text: Directory
  placeholder Placeholder_Header_Right:
    block App_NotificationIcon (UBTConnect.App_Common_Blocks)
  placeholder Placeholder_Header_Input:
    block StaticInput (UBTConnectLibrary.ConnectPatterns)
      args: In_Prompt="Search any member or location"
      on Click_Input → StaticInputClick_Input
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns) #Content
      args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base } }
      placeholder Content:
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns) #HeaderLoading
          args: In_IsLoading=not LocalCacheControl_UserInformation.isFetched
          placeholder Placeholder_LoadingSection:
            block Columns_Two (UBTConnectLibrary.BasePatterns) #HeaderColumns
              args: ColumnOptions={ SpacingSize: Entities.UBT_Size.Small }
              placeholder Left:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, BorderOptions: { Radius: { GeneralSizeId: Entities.UBT_Shape.Medium } } }
                  on Clicked → OnClick_MyLocality
                  placeholder Content:
                    container
                      block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                        args: EntityId=NullIdentifier(), EntityType=Entities.Connect_Entity.Locality, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }, In_BorderRadius=Entities.UBT_Shape.Circle
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text="MY LOCALITY", In_TextOptions={ Color: Entities.UBT_Color.Neutral6, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_Name, In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_SubdivisionCount+If(LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geog…, In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
              placeholder Right:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, BorderOptions: { Radius: { GeneralSizeId: Entities.UBT_Shape.Medium } } }
                  on Clicked → OnClick_MyCountry
                  placeholder Content:
                    container
                      block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                        args: EntityId=NullIdentifier(), EntityType=Entities.Connect_Entity.Locality, ExtendedClass="country-flag", ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }, ImageURL=GetFlagURLByCountryCode(LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Country_Code), In_BorderRadius=Entities.UBT_Shape.Circle
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text="MY COUNTRY", In_TextOptions={ Color: Entities.UBT_Color.Neutral6, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Country_Name, In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Country_LocalityCount+If(LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geograph…, In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
        if True  [DEAD BRANCH: condition is a constant]
          block CustomContainer (UBTConnectLibrary.BasePatterns) #Population
            args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              block FeedBlock_CommunityPopulation (UBTConnect.Home)
        else
          block Directory_CommunityNumbers (UBTConnect.Directory_CommonBlocks)
            args: In_CommunityStatistics=GetCommunityStatistics.Out_CommunityStatistics, In_IsLoading=not GetCommunityStatistics.IsDataFetched
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Legend
          args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            block Columns_Two (UBTConnectLibrary.BasePatterns) #Title
              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, VerticalAlign: Entities.UBT_VerticalAlign.Center }
              placeholder Left:
                block CustomText (UBTConnectLibrary.BasePatterns)
                  args: In_Text="Browse by Country", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
              placeholder Right:
                block Icon (UBTConnectLibrary.ConnectPatterns)
                  args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.Info, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
                  on Click → OnClick_LegendInfo
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=not (GetCountriesStatistics.IsDataFetched or GetCountriesStatistics.HasFetchError)
          placeholder Placeholder_LoadingSection:
            list source=GetCountriesStatistics.Out_CountriesStatistics mode=Default  [style="list list-group"]
              container  [on onclick → Handler_StatisticsList_Clicked(Event_Id=GetCountriesStatistics.Out_CountriesStatistics.Current.CountryCode)]
                block Statistics_TypedItem (UBTConnect.Directory_Locality)
                  args: In_HasImage=GetCountriesStatistics.Out_CountriesStatistics.Current.Statistics.AvatarURL <> "", UI_CountryStatistics=ConvertRecord(GetCountriesStatistics.Out_CountriesStatistics.Current,  {UI_StatisticsTexts:"UI_TypedStatisticsTexts",Name:"Statistics.Title",ImageURL:"Statistics.AvatarURL"})
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=Entities.Connect_BottomBar_Items.Directory, isRootPage=True
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block CacheControl_UserInfo_Wrapper (UBTConnect.App_Cache)
  on Result → CacheControl_UserInfo_WrapperResult(UserInformation=UserInformation)
if False #HideInServiceStudio_BottomSheet  [DEAD BRANCH: condition is a constant]
else
  block Directory_LegendBottomSheet (UBTConnect.Directory_Locality)
    on SheetInitialized → Directory_LegendBottomSheetSheetInitialized(SheetId=SheetId)
```

#### Screen actions
- **Action_RefreshData_CommunityStatistics**
  ```
  refresh data GetCommunityStatistics
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_RefreshData_CountryStatistics**
  ```
  call GetSkeletonList_UI_CountryStatistics(ListLength=10)
  assign: GetCountriesStatistics.Out_CountriesStatistics = GetSkeletonList_UI_CountryStatistics.UI_CountryStatistics
  refresh data GetCountriesStatistics
  end
  on exception All Exceptions (log=True)
  call ListClear(List=GetCountriesStatistics.Out_CountriesStatistics)
  raise BubbleGenericException: AllExceptions.ExceptionMessage
  on exception Communication Exception (log=True)
  call ListClear(List=GetCountriesStatistics.Out_CountriesStatistics) as ListClear2
  raise BubbleCommunicationException: CommunicationException.ExceptionMessage
  on exception Not Registered (log=True)
  raise Not Registered: NotRegistered.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_UserInfo_WrapperResult** inputs: UserInformation: Directory_UserCurrent (mandatory)
  ```
  assign: LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation; LocalCacheControl_UserInformation.isFetched = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Directory_LegendBottomSheetSheetInitialized** inputs: SheetId: Text (mandatory)
  ```
  assign: BottomSheetId = SheetId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_StatisticsList_Clicked** inputs: Event_Id: Text (mandatory)
  ```
  if Event_Id <> NullTextIdentifier()
    call HasAccessToRegion(Target_CountryNameOrCode=Event_Id, Target_LocalityNameOrId=TextToLongInteger(Event_Id))
    if HasAccessToRegion.HasAccess
      navigate → CountryDetails(CountryCode=Event_Id) transition=Inherited
    else
      call App_Subscription_ShowUpgradePopUp()
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnAfterFetch_GetCountriesStatistics**
  ```
  [M1] for each GetCountriesStatistics.Out_CountriesStatistics
    assign: GetCountriesStatistics.Out_CountriesStatistics.Current.Statistics.AvatarURL = GetFlagURLByCountryCode(GetCountriesStatistics.Out_CountriesStatistics.Current.CountryCode)
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_LegendInfo**
  ```
  call BottomSheetOpen(WidgetId=BottomSheetId)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_MyCountry**
  ```
  navigate → CountryDetails(CountryCode=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Country_Code) transition=Inherited
  ```
- **OnClick_MyLocality**
  ```
  navigate → Locality_Details(LocalityId=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_Id, PreloadedLocalityLabel=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_Name) transition=Inherited
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache and GetCountriesStatistics.IsDataFetched
    end
  else
    javascript JavaScript1()
      | $actions.Action_RefreshData_CommunityStatistics()
    call Action_RefreshData_CountryStatistics()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **StaticInputClick_Input**
  ```
  navigate → Search() transition=Inherited
  ```

## Screen Locality_Details (flow Directory_Locality)
- roles: Anonymous, Registered, UBTOne_User; URL structure: QueryString
- input parameters: LocalityId: Long Integer; PreloadedLocalityLabel: Text
- local variables: TagsList: Tag List; HeaderIsScrolled: Boolean; TagsList_SelectedTag: Text; Logged_User: HouseholdId, LocalityId Record; IsUserLocality: Boolean = True; LocalityLabel: Text; IsScreenInitialized: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady

#### Data sources
- data action **Get_LocalityDetails** fetch=OnDemand; outputs: LocalityDetails: UI_LocalityDetails_ForHousehold; OnAfterFetch → OnAfterFetch_Get_LocalityDetails
  ```
  call-server Get_UI_LocalityDetails(In_LocalityId=LocalityId)
  assign: LocalityDetails = Get_UI_LocalityDetails.Out_UI_LocalityDetails
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_MainPages (UBTConnectLibrary.Layouts)
  on OnHeaderScrolled → Handler_OnHeaderScrolled(Event_IsHeaderScrolled=Event_IsHeaderScrolled)
  placeholder Placeholder_Header_Title:
    text: Directory
  placeholder Placeholder_Header_Input:
    block StaticInput (UBTConnectLibrary.ConnectPatterns)
      args: In_Prompt="Search for households or members"
      on Click_Input → OnClick_Search
  placeholder Placeholder_Header_Input_Icon:
    if GetHasMapsEnabled() #EnableMaps
      block Icon (UBTConnectLibrary.ConnectPatterns)
        args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Explore
        on Click → OnClick_Maps
  placeholder HeaderContent:
    container  [style="locality-subtitle"]
      block SubHeader_MainPages (UBTConnectLibrary.Layouts)
        args: In_IsShowSearchIcon=HeaderIsScrolled
        on Click_Search → OnClick_Search
        placeholder Placeholder_Title:
          container  [visible=LocalityId = Logged_User.LocalityId]
            text: My Locality:  [classes="font-size-xxs font-regular"]
          container  [on onclick → Handler_NavigateTo_BrowsebyLocation]
            block Columns_Two (UBTConnectLibrary.BasePatterns)
              args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }, ExtendedClasses="fit-content"
              placeholder Left:
                block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                  args: In_IsLoading=LocalityLabel = ""
                  placeholder Placeholder_LoadingSection:
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center } }
                      placeholder Content:
                        if LocalityLabel = "" #IsLoadingLocalityLabel
                          expr: LocalityLabel  (example: Locality, Country)  [style="font-size-s font-semi-bold"]
                        else
                          expr: LocalityLabel  (example: Melbourne, Australia)  [style="font-size-s font-semi-bold"]
              placeholder Right:
                block CustomContainer (UBTConnectLibrary.BasePatterns)
                  args: Options={ DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center } }
                  placeholder Content:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Neutral0, In_ExtendedClasses="directory-locality padding-left-xs", In_IconId=Entities.UBT_Icons2.ExpandMore
            if Get_LocalityDetails.IsDataFetched and \nGet_LocalityDetails.LocalityDetails.UI_LocalityTimezone.TimezoneName = ""
            else
              block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                args: In_IsLoading=not Get_LocalityDetails.IsDataFetched or\nGet_LocalityDetails.HasFetchError
                placeholder Placeholder_LoadingSection:
                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                    args: Options={ TextOptions: { FontSize: Entities.UBT_FontSize.DoubleExtraSmall } }
                    placeholder Content:
                      if LocalityLabel = "" #IsLoadingLocalityLabel2
                        expr: "Local Timezone And UTC Offset"  (example: Locality, Country)  [style="font-size-s font-semi-bold"]
                      else
                        block Locality_DateTimeLabel (UBTConnect.Directory_Locality)
                          args: In_TimezoneOffset=Get_LocalityDetails.LocalityDetails.UI_LocalityTimezone.TimezoneOffset
        placeholder Placeholder_Icons:
          if HeaderIsScrolled
            if GetHasMapsEnabled() #EnableMaps2
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Explore
                on Click → OnClick_Maps
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: ExtendedClasses="background-neutral-0", Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small } }
      placeholder Content:
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=not IsScreenInitialized
          placeholder Placeholder_LoadingSection:
            block HorizontalTagList (UBTConnectLibrary.ConnectPatterns)
              args: ExtendedClasses="household-tag", In_HorizontalPadding=Entities.UBT_Size.Base, In_IsMandatorySelection=True, In_IsSingleSelection=True, In_TagToggleList=TagsList
              on Changed → Handler_HorizontalTagListChanged(UpdatedTagList=UpdatedTagList)
  placeholder Content:
    if TagsList_SelectedTag = GetLocalityMenu().Households #Showhouseholds
      block Locality_Households (UBTConnect.Directory_Locality)
        args: In_BretherenCount=Get_LocalityDetails.LocalityDetails.BretherenCount, In_HouseholdCount=Get_LocalityDetails.LocalityDetails.HouseholdCount, In_LocalityId=LocalityId
        on Event_NavigateToHouseholdDetails → Handler_NavigateTo_HouseholdDetails(HouseholdId=Event_HouseholdId)
    if TagsList_SelectedTag = GetLocalityMenu().MyHousehold #ShowMyHousehold
      block HouseholdDetails_Block (UBTConnect.Directory_Household)
        args: HouseholdId=Logged_User.HouseholdId, In_CheckVisibility=True, In_HideActions=True, In_ShowKebabMenu=True
    if TagsList_SelectedTag = GetLocalityMenu().Subdivsion #ShowSubdivisions
      block Locality_Subdivisions (UBTConnect.Directory_Locality)
        args: LocalityId=LocalityId
    if TagsList_SelectedTag = GetLocalityMenu().Interchange #ShowInterchange
      block Locality_Interchange (UBTConnect.Directory_Locality)
        args: In_InterchangeLocalityId=LocalityId
    if TagsList_SelectedTag = GetLocalityMenu().OneSchoolGlobal #ShowOneSchoolGlobal
      block Locality_OneSchoolGlobal (UBTConnect.Directory_Locality) #Block_OneSchoolGlobal_List
        args: In_LocalityId=LocalityId
        on Event_OnClick_Bookmark → Handler_OnClick_Bookmark(IsBookmarked=IsBookmarked)
        on Event_OnClick → Handler_NavigateTo_OneschoolGlobalDetails(Event_OneSchoolGlobalId=Event_OneSchoolGlobalId)
    if TagsList_SelectedTag = GetLocalityMenu().LocalityContacts #ShowLocalityContacts
      if Connect_LaunchDarkly_PermissionCheck(Entities.LaunchDarkly_FF.MobileDirectoryLocalityContacts)
        container #Hidden
          block Locality_LocalityContacts (UBTConnect.Directory_Locality)
            args: In_LocalityId=LocalityId
        container  [style="margin-top-s  margin-x-base"]
          block ComingSoon_V2 (UBTConnectLibrary.ConnectPatterns)
      else
        container  [style="margin-top-s  margin-x-base"]
          block ComingSoon_V2 (UBTConnectLibrary.ConnectPatterns)
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=Entities.Connect_BottomBar_Items.Directory
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Action_InitializeScreen**
  ```
  call GetUserInformation_Wrapper() as LoggedUserInfo
  assign (Logged_User): Logged_User.HouseholdId = LoggedUserInfo.UserInformation.Directory_UserCurrent_Member.HouseholderId; Logged_User.LocalityId = LoggedUserInfo.UserInformation.Directory_UserCurrent_Geography.Locality_Id
  if LocalityId = 0
    assign (Locality): LocalityId = Logged_User.LocalityId
    call Action_SetLocalityLabel(CountryName=LoggedUserInfo.UserInformation.Directory_UserCurrent_Geography.Country_Name, LocalityName=LoggedUserInfo.UserInformation.Directory_UserCurrent_Geography.Locality_Name)
    [M1] assign: IsUserLocality = LocalityId = Logged_User.LocalityId
    call ListClear(List=TagsList)
    call GetSample_FilterTags(ShowMyHouseholdTag=IsUserLocality)
    assign: TagsList = GetSample_FilterTags.TagToggleList
    assign: TagsList_SelectedTag = GetLocalityMenu().Households
    assign: IsScreenInitialized = True
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_SetLocalityLabel** inputs: LocalityName: Text; CountryName: Text
  ```
  assign: LocalityLabel = LocalityName + ", " + CountryName
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_HorizontalTagListChanged** inputs: UpdatedTagList: Tag List
  ```
  assign: TagsList = UpdatedTagList
  call ListIndexOf(Condition=IsSelected, List=TagsList) as ListIndexOf_IsSelected
  javascript ScrollTop()
    | $public.View.render().then(
    |     () => {
    |         let contentEl = document.querySelector(".active-screen");
    |         if (contentEl) {
    |             contentEl.scrollTop = 0;
    |         }
    |     }
    | );
    | 
  assign: TagsList_SelectedTag = TagsList[ListIndexOf_IsSelected.Position].Identifier
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NavigateTo_BrowsebyLocation**
  ```
  if GetHasC1DirectoryView()
    navigate → CountryDetails(CountryCode=Get_LocalityDetails.LocalityDetails.UI_LocalityDetails.CountryCode) transition=Inherited
  else
    navigate → BrowseDirectory(CountryCode=Get_LocalityDetails.LocalityDetails.UI_LocalityDetails.CountryCode) transition=Inherited
  ```
- **Handler_NavigateTo_HouseholdDetails** inputs: HouseholdId: Long Integer (mandatory)
  ```
  if (Household Details Loading?) HouseholdId = 0
    end
  else
    navigate → HouseholdDetails(HouseholdId=HouseholdId) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NavigateTo_OneschoolGlobalDetails** inputs: Event_OneSchoolGlobalId: Long Integer (mandatory)
  ```
  call StopPropagationHelper_Check()
  if StopPropagationHelper_Check.isToStop
    end
  else
    navigate → OneSchoolGlobalDetails(In_OneSchoolGlobalId=Event_OneSchoolGlobalId) transition=Inherited
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnClick_Bookmark** inputs: IsBookmarked: Boolean (mandatory)
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnHeaderScrolled** inputs: Event_IsHeaderScrolled: Boolean (mandatory)
  ```
  assign: HeaderIsScrolled = Event_IsHeaderScrolled
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_Get_LocalityDetails**
  ```
  call Action_SetLocalityLabel(CountryName=Get_LocalityDetails.LocalityDetails.UI_LocalityDetails.CountryName, LocalityName=Get_LocalityDetails.LocalityDetails.UI_LocalityDetails.Name)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Maps**
  ```
  navigate → Map(In_InitialLatitude=Get_LocalityDetails.LocalityDetails.MaiinHallLatitude, In_InitialLongitude=Get_LocalityDetails.LocalityDetails.MainHallLongitude) transition=Inherited
  ```
- **OnClick_Search**
  ```
  navigate → Search() transition=Inherited
  ```
- **ScreenEvent_OnInitialize**
  ```
  if LocalityLabel = ""
    assign: LocalityLabel = PreloadedLocalityLabel
    [M1] if TagsList.Empty
      call GetSample_FilterTags(ShowMyHouseholdTag=IsUserLocality)
      assign: TagsList = GetSample_FilterTags.TagToggleList
      end
    else
      end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  if IsScreenInitialized
    if Get_LocalityDetails.IsDataFetched and not Get_LocalityDetails.HasFetchError
      end
    else
      [M1] refresh data Get_LocalityDetails
      end
  else
    call Action_InitializeScreen()
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
