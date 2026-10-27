# Pack of UI flow Map (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: CacheControl_CountriesMarkers, CacheControl_GlobalEntities, CacheControl_Household, CacheControl_Localities, Map_ExploreList_EmptyState, Map_ExploreList_Item, Map_ExploreList_Section, Map_LocationInfoPopup, Map_PoIPreview
Blocks of other UBTConnect flows that the flow uses (transitive): 29

## Block CacheControl_CountriesMarkers (flow Map)
- public: False
- input parameters: TimeToLive: Integer = 7200
- events: Event_CountriesGeoJSON(GeoJSONFeatures: Map_GeoJSONStructure List (mandatory)) mandatory; Event_CountriesMarkers(Countries_Markers: Map_MarkersStructure List (mandatory)) mandatory
- local variables: -
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): Map

#### Data sources
- data action **FetchData_Countries** fetch=OnDemand; outputs: GeoJSONFeatures: Map_GeoJSONStructure List; Countries_Markers: Map_MarkersStructure List; OnAfterFetch → OnAfterFetch_Countries
  ```
  call-server FetchData_Countries()
  assign: GeoJSONFeatures = FetchData_Countries.Countries_GeoJSON; Countries_Markers = FetchData_Countries.Countries_Markers
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CacheControl (UBTConnect_Utils.CacheControl)
  args: CacheKey=Entities.CacheableMapObjects.CountriesMarker, CacheTypeId=Entities.CacheableMapObjects.CountriesMarker, TimeToLiveSeconds=TimeToLive
  on OnCacheHit → CacheControlOnCacheHit(Object=Object)
  on OnNonCacheHit → CacheControlOnNonCacheHit
block CacheControl (UBTConnect_Utils.CacheControl)
  args: CacheKey=Entities.CacheableMapObjects.CountriesGeoJSON, CacheTypeId=Entities.CacheableMapObjects.CountriesGeoJSON, TimeToLiveSeconds=TimeToLive
  on OnCacheHit → CacheControlOnCacheHit_CountriesGeoJSON(Object=Object)
  on OnNonCacheHit → CacheControlOnNonCacheHit
```

#### Block actions
- **CacheControlOnCacheHit** inputs: Object: Object (mandatory)
  ```
  call AssignFromObject(ObjectValue=Object, ToObjectRef=ToObject(FetchData_Countries.Countries_Markers))
  trigger event Event_CountriesMarkers(Countries_Markers=FetchData_Countries.Countries_Markers)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnCacheHit_CountriesGeoJSON** inputs: Object: Object (mandatory)
  ```
  call AssignFromObject(ObjectValue=Object, ToObjectRef=ToObject(FetchData_Countries.GeoJSONFeatures))
  trigger event Event_CountriesGeoJSON(GeoJSONFeatures=FetchData_Countries.GeoJSONFeatures)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnNonCacheHit**
  ```
  refresh data FetchData_Countries
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_Countries**
  ```
  call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.CountriesMarker, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.CountriesMarker, Object=ToObject(FetchData_Countries.Countries_Markers)) as PutCacheableObject_CountriesMarker
  call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.CountriesGeoJSON, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.CountriesGeoJSON, Object=ToObject(FetchData_Countries.GeoJSONFeatures)) as PutCacheableObject_CountriesGeoJSON
  trigger event Event_CountriesMarkers(Countries_Markers=FetchData_Countries.Countries_Markers)
  trigger event Event_CountriesGeoJSON(GeoJSONFeatures=FetchData_Countries.GeoJSONFeatures)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block CacheControl_GlobalEntities (flow Map)
- public: False
- input parameters: TimeToLive: Integer = 7200
- events: Event_GlobalEntities(GlobalLocations_Markers: MapExploreItem, MarkerWithWindow Record List (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Map

#### Data sources
- data action **FetchData_GlobalLocation** fetch=OnDemand; outputs: GlobalLocations_Markers: MapExploreItem, MarkerWithWindow Record List; OnAfterFetch → OnAfterFetch_GlobalLocation
  ```
  call-server FetchData_GlobalLocation()
  assign: GlobalLocations_Markers = FetchData_GlobalLocation.Markers
  → continues at <node@3196,800>
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CacheControl (UBTConnect_Utils.CacheControl)
  args: CacheKey=Entities.CacheableMapObjects.GlobalEntities, CacheTypeId=Entities.CacheableMapObjects.GlobalEntities, TimeToLiveSeconds=TimeToLive
  on OnNonCacheHit → CacheControlOnNonCacheHit
  on OnCacheHit → CacheControlOnCacheHit(Object=Object)
```

#### Block actions
- **CacheControlOnCacheHit** inputs: Object: Object (mandatory)
  ```
  call AssignFromObject(ObjectValue=Object, ToObjectRef=ToObject(FetchData_GlobalLocation.GlobalLocations_Markers))
  trigger event Event_GlobalEntities(GlobalLocations_Markers=FetchData_GlobalLocation.GlobalLocations_Markers)
  → continues at <node@3196,800>
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnNonCacheHit**
  ```
  → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    refresh data FetchData_GlobalLocation
    → continues at [M1]
  ```
- **OnAfterFetch_GlobalLocation**
  ```
  call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.GlobalEntities, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.GlobalEntities, Object=ToObject(FetchData_GlobalLocation.GlobalLocations_Markers)) as PutCacheableObject_GlobalEntities
  trigger event Event_GlobalEntities(GlobalLocations_Markers=FetchData_GlobalLocation.GlobalLocations_Markers)
  → continues at <node@3196,800>
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block CacheControl_Household (flow Map)
- public: False
- input parameters: TimeToLive: Integer = 7200; In_MinLatitude: Decimal (mandatory); In_MaxLatitude: Decimal (mandatory); In_MinLongitude: Decimal (mandatory); In_MaxLongitude: Decimal (mandatory)
- events: Event_HouseholdExploreItems(Households_ExploreItems: MapExploreItem List; IsAllExploreItems: Boolean) mandatory; Event_HouseholdMarkers(Household_Markers: MarkerWithWindow List (mandatory); IsAllHouseholds: Boolean) mandatory; Event_IsDataFetched(In_IsFetched: Boolean (mandatory)) mandatory
- local variables: IsFetchingCacheableHouseholds: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): Map

#### Data sources
- data action **FetchData_HouseholdMarkersFiltered** fetch=OnDemand; outputs: Household_Markers: MarkerWithWindow List; Households_ExploreItems: MapExploreItem List; OnAfterFetch → OnAfterFetch_Household
  ```
  call-server FetchData_Households_ByCoordinates(In_MaxLatitude=In_MaxLatitude, In_MaxLongitude=In_MaxLongitude, In_MinLatitude=In_MinLatitude, In_MinLongitude=In_MinLongitude, In_SearchTerm="")
  assign: Household_Markers = ConvertList(FetchData_Households_ByCoordinates.Household_Markers,  {Value:"MarkerWithWindow"}); Households_ExploreItems = ConvertList(FetchData_Households_ByCoordinates.Household_Markers,  {Value:"MapExploreItem"})
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- data action **FetchData_HouseholdMarkersUnfiltered** fetch=OnDemand; outputs: Household_Markers: MarkerWithWindow List; Households_ExploreItems: MapExploreItem List; OnAfterFetch → OnAfterFetch_HouseholdUnfiltered
  ```
  call-server FetchData_Households_ByCoordinates(In_MaxLatitude=90, In_MaxLongitude=180, In_MinLatitude=-90, In_MinLongitude=-180, In_SearchTerm="")
  assign: Household_Markers = ConvertList(FetchData_Households_ByCoordinates.Household_Markers,  {Value:"MarkerWithWindow"}); Households_ExploreItems = ConvertList(FetchData_Households_ByCoordinates.Household_Markers,  {Value:"MapExploreItem"})
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CacheControl (UBTConnect_Utils.CacheControl)
  args: CacheKey=Entities.CacheableMapObjects.Households, CacheTypeId=Entities.CacheableMapObjects.Households, TimeToLiveSeconds=TimeToLive
  on OnNonCacheHit → CacheControlOnNonCacheHit
  on OnCacheHit → CacheControlOnCacheHit_Markers(Object=Object)
block CacheControl (UBTConnect_Utils.CacheControl)
  args: CacheKey=Entities.CacheableMapObjects.HouseholdsExploreItems, CacheTypeId=Entities.CacheableMapObjects.HouseholdsExploreItems, TimeToLiveSeconds=TimeToLive
  on OnCacheHit → CacheControlOnCacheHit_ExploreItems(Object=Object)
  on OnNonCacheHit → CacheControlOnNonCacheHit
```

#### Block actions
- **Action_RefreshUnfiltered**
  ```
  refresh data FetchData_HouseholdMarkersUnfiltered
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnCacheHit_ExploreItems** inputs: Object: Object (mandatory)
  ```
  call AssignFromObject(ObjectValue=Object, ToObjectRef=ToObject(FetchData_HouseholdMarkersUnfiltered.Households_ExploreItems))
  trigger event Event_HouseholdExploreItems(Households_ExploreItems=FetchData_HouseholdMarkersUnfiltered.Households_ExploreItems, IsAllExploreItems=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnCacheHit_Markers** inputs: Object: Object (mandatory)
  ```
  call AssignFromObject(ObjectValue=Object, ToObjectRef=ToObject(FetchData_HouseholdMarkersUnfiltered.Household_Markers))
  trigger event Event_HouseholdMarkers(Household_Markers=FetchData_HouseholdMarkersUnfiltered.Household_Markers, IsAllHouseholds=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnNonCacheHit**
  ```
  if IsFetchingCacheableHouseholds
    [M1] refresh data FetchData_HouseholdMarkersFiltered
    end
  else
    javascript RefreshUnfilteredHouseholds()
      | $actions.Action_RefreshUnfiltered()
    assign: IsFetchingCacheableHouseholds = True
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_Household**
  ```
  trigger event Event_HouseholdMarkers(Household_Markers=FetchData_HouseholdMarkersFiltered.Household_Markers)
  trigger event Event_HouseholdExploreItems(Households_ExploreItems=FetchData_HouseholdMarkersFiltered.Households_ExploreItems)
  trigger event Event_IsDataFetched(In_IsFetched=FetchData_HouseholdMarkersFiltered.IsDataFetched)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_HouseholdUnfiltered**
  ```
  call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.Households, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.Households, Object=ToObject(FetchData_HouseholdMarkersUnfiltered.Household_Markers)) as PutCacheableObject_HouseholdMarkers
  call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.HouseholdsExploreItems, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.HouseholdsExploreItems, Object=ToObject(FetchData_HouseholdMarkersUnfiltered.Households_ExploreItems)) as PutCacheableObject_HouseholdMarkers2
  assign: IsFetchingCacheableHouseholds = False
  trigger event Event_HouseholdExploreItems(Households_ExploreItems=FetchData_HouseholdMarkersUnfiltered.Households_ExploreItems, IsAllExploreItems=True)
  trigger event Event_HouseholdMarkers(Household_Markers=FetchData_HouseholdMarkersUnfiltered.Household_Markers, IsAllHouseholds=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: IsFetchingCacheableHouseholds = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  if not FetchData_HouseholdMarkersUnfiltered.Household_Markers.Empty and \nnot FetchData_HouseholdMarkersUnfiltered.Households_ExploreItems.Empty\n
    trigger event Event_HouseholdMarkers(Household_Markers=FetchData_HouseholdMarkersUnfiltered.Household_Markers, IsAllHouseholds=True)
    trigger event Event_HouseholdExploreItems(Households_ExploreItems=FetchData_HouseholdMarkersUnfiltered.Households_ExploreItems, IsAllExploreItems=True)
    end
  else
    trigger event Event_IsDataFetched(In_IsFetched=False)
    refresh data FetchData_HouseholdMarkersFiltered
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block CacheControl_Localities (flow Map)
- public: False
- input parameters: TimeToLive: Integer = 7200
- events: Event_LocalitiesGeoJSON(GeoJSONFeatures: Map_GeoJSONStructure List (mandatory)) mandatory; Event_LocalitiesMarkers(Localities_Markers: Map_MarkersStructure List (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Map

#### Data sources
- data action **FetchData_Localities** fetch=OnDemand; outputs: GeoJSONFeatures: Map_GeoJSONStructure List; Localities_Markers: Map_MarkersStructure List; OnAfterFetch → OnAfterFetch_Localities
  ```
  call-server FetchData_Localities()
  assign: GeoJSONFeatures = FetchData_Localities.Localities_GeoJSON; Localities_Markers = FetchData_Localities.Localities_Markers
  → continues at <node@3196,800>
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CacheControl (UBTConnect_Utils.CacheControl)
  args: CacheKey=Entities.CacheableMapObjects.LocalitiesMarker, CacheTypeId=Entities.CacheableMapObjects.LocalitiesMarker, TimeToLiveSeconds=TimeToLive
  on OnCacheHit → CacheControlOnCacheHit(Object=Object)
  on OnNonCacheHit → CacheControlOnNonCacheHit
block CacheControl (UBTConnect_Utils.CacheControl)
  args: CacheKey=Entities.CacheableMapObjects.LocalitiesGeoJSON, CacheTypeId=Entities.CacheableMapObjects.LocalitiesGeoJSON, TimeToLiveSeconds=TimeToLive
  on OnCacheHit → CacheControlOnCacheHit_LocalitiesGeoJSON(Object=Object)
  on OnNonCacheHit → CacheControlOnNonCacheHit
```

#### Block actions
- **CacheControlOnCacheHit** inputs: Object: Object (mandatory)
  ```
  call AssignFromObject(ObjectValue=Object, ToObjectRef=ToObject(FetchData_Localities.Localities_Markers))
  trigger event Event_LocalitiesMarkers(Localities_Markers=FetchData_Localities.Localities_Markers)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnCacheHit_LocalitiesGeoJSON** inputs: Object: Object (mandatory)
  ```
  call AssignFromObject(ObjectValue=Object, ToObjectRef=ToObject(FetchData_Localities.GeoJSONFeatures))
  trigger event Event_LocalitiesGeoJSON(GeoJSONFeatures=FetchData_Localities.GeoJSONFeatures)
  → continues at <node@3196,800>
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnNonCacheHit**
  ```
  refresh data FetchData_Localities
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_Localities**
  ```
  call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.LocalitiesMarker, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.LocalitiesMarker, Object=ToObject(FetchData_Localities.Localities_Markers)) as PutCacheableObject_LocalitiesMarker
  call PutCacheableObject(CacheKey=Entities.CacheableMapObjects.LocalitiesGeoJSON, CacheTimeToLiveSeconds=TimeToLive, MemoryCacheTypeId=Entities.CacheableMapObjects.LocalitiesGeoJSON, Object=ToObject(FetchData_Localities.GeoJSONFeatures)) as PutCacheableObject_LocalitiesGeoJSON
  trigger event Event_LocalitiesMarkers(Localities_Markers=FetchData_Localities.Localities_Markers)
  trigger event Event_LocalitiesGeoJSON(GeoJSONFeatures=FetchData_Localities.GeoJSONFeatures)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Map_ExploreList_EmptyState (flow Map)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Map

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base, TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.ExtraLarge } }
  placeholder Content:
    block EmptyList (UBTConnectLibrary.ConnectPatterns)
      args: IconId=Entities.UBT_Icons2.LocationOn
      placeholder TitlePlaceholder:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_PaddingOptions={ TopSizeId: Entities.UBT_Size.Base, BottomSizeId: Entities.UBT_Size.ExtraSmall }, In_Text="No places of interest found here", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
      placeholder TextPlaceholder:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text="Move or zoom the map to explore other locations.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
```

## Block Map_ExploreList_Item (flow Map)
- public: False
- input parameters: MapExploreItem: MapExploreItem (mandatory); Distance: Text
- events: OnClick(MapExploreItem: MapExploreItem (mandatory); Distance: Text (mandatory)) mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Map_ExploreList_Section

#### Widget tree
```
if False  [DEAD BRANCH: condition is a constant]
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall } }
    on Clicked → CustomContainerClicked
    placeholder Content:
      block Columns_Two (UBTConnectLibrary.BasePatterns)
        args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, SpacingSize: Entities.UBT_Size.Base }
        placeholder Left:
          block UBT_LazyImage (UBTConnect_Utils.CW_Image)
            args: EntityId=MapExploreItem.Id, EntityType=MapExploreItem.Type, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }
        placeholder Right:
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text=MapExploreItem.Name, In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }, InJustifyText=True
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_Text=MapExploreItem.Address+If(Distance<>""," · "+ Get_FormattedDistance(Distance),""), In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }, InJustifyText=True, NoWrap=True
else
  block SearchResult_Item (UBTConnect_Utils.CW_Search)
    args: In_ImageURL=MapExploreItem.PhotoURL, In_SearchResult={ Id: MapExploreItem.Id, Name: MapExploreItem.Name, AdditionalInformation: MapExploreItem.Address+If(Distance<>""," · "+Get_FormattedDistance(Distance),""), Type: MapExploreItem.Type }, In_SearchTerm=""
    on OnClick → CustomContainerClicked
```

#### Block actions
- **CustomContainerClicked**
  ```
  trigger event OnClick(Distance=Distance, MapExploreItem=MapExploreItem)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Map_ExploreList_Section (flow Map)
- public: False
- input parameters: Type: Connect_Entity Identifier (mandatory); MaxItems: Integer = -1; Items: MapExploreItem Record List (mandatory); CurrentPosition: LatLong (mandatory); ShowBackButton: Boolean
- events: BackButtonClicked(); ItemClicked(MapExploreItem: MapExploreItem (mandatory); Distance: Text (mandatory)); SeeAllClicked(Type: Connect_Entity Identifier (mandatory)) mandatory
- local variables: isShowViewAll: Boolean; Local_Items: Distance, MapExploreItem Record List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnParametersChanged → OnParametersChanged
- used by (UBTConnect): Map

#### Widget tree
```
if ShowBackButton #HasBackButton
  container
  block Columns_Two (UBTConnectLibrary.BasePatterns)
    args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, VerticalAlign: Entities.UBT_VerticalAlign.Center }
    placeholder Left:
      block Icon (UBTConnectLibrary.ConnectPatterns)
        args: In_ColorId=Entities.UBT_Color.Neutral9, In_ExtendedClasses="ubt-zindex-2" /*Using z-index 2 to ensure icon will be clickable, as we have a text on the right column that needs to be centered, we used a negative margin, and without a z=index in this case the t…, In_IconId=Entities.UBT_Icons2.ArrowLeftAlt, In_SizeId=Entities.UBT_IconsSize.Base_24
        on Click → OnClick_BackButton
    placeholder Right:
      block NegativeMargin (UBTConnectLibrary.BasePatterns)
        args: MarginOptions={ LeftSizeId: Entities.UBT_Size.Medium }
        placeholder Content:
          block CustomText (UBTConnectLibrary.BasePatterns)
            args: In_PaddingOptions={ BottomSizeId: Entities.UBT_Size.Small }, In_Text=Type, In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
else
  block CustomText (UBTConnectLibrary.BasePatterns)
    args: In_PaddingOptions={ VerticalSizeId: Entities.UBT_Size.Base }, In_Text=Type, In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }, InJustifyText=True
container  [style="text-align-left"]
  list source=Local_Items mode=Default  [style="list list-group"]
    block Map_ExploreList_Item (UBTConnect.Map)
      args: Distance=If(Local_Items.Current.Distance>=0,FormatDecimal(Local_Items.Current.Distance,1,".",""),""), MapExploreItem=Local_Items.Current.MapExploreItem
      on OnClick → ItemClicked(Distance=Distance, MapExploreItem=MapExploreItem)
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Small } }
    placeholder Content:
      if isShowViewAll
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_PaddingOptions={ VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base }, In_Text="See more", In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
          on Clicked → OnClick_SeeAll
```

#### Block actions
- **OnClick_BackButton**
  ```
  trigger event BackButtonClicked()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_SeeAll**
  ```
  trigger event SeeAllClicked(Type=Type)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnParametersChanged**
  ```
  call ScreenEvent_OnInitialize()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**; locals: TempDistance: Decimal; TempItems: Distance, MapExploreItem Record List
  ```
  call ListClear(List=Local_Items)
  [M1] for each Items
    assign: TempDistance = -1
    if (Items.Current.MapExploreItem.Latitude <> 0 or Items.Current.MapExploreItem.Longitude <> 0) and \n(CurrentPosition.Latitude <> 0 or CurrentPosition.Longitude<> 0)
      call Turf_DistanceBetwwen2Coordinates(Point1=CurrentPosition, Point2={ Latitude: Items.Current.MapExploreItem.Latitude, Longitude: Items.Current.MapExploreItem.Longitude })
      assign: TempDistance = Turf_DistanceBetwwen2Coordinates.DistanceInKm
      [M2] call ListAppend(Element=ConvertRecord(Items.Current,  {Distance:"TempDistance",MapExploreItem:"MapExploreItem"}), List=Local_Items)
      → continues at [M1]
    else
      → continues at [M2]
  end for
  call ListSort(By=FormatText(Distance,14,30,True,0) + MapExploreItem.Name, List=Local_Items)
  assign: isShowViewAll = MaxItems <> -1 and Items.Length > MaxItems
  call ListDuplicate(SourceList=Local_Items)
  if MaxItems <> -1
    [M3] for each ListDuplicate.DuplicatedList MaximumIterations=MaxItems
      call ListAppend(Element=ListDuplicate.DuplicatedList.Current, List=TempItems) as ListAppend2
      → continues at [M3]
    end for
    assign: Local_Items = TempItems
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Map_LocationInfoPopup (flow Map)
- public: False; stylesheet: yes
- input parameters: In_IsOpened: Boolean (mandatory)
- events: Event_Cancel() mandatory
- local variables: -
- lifecycle: none
- used by (UBTConnect): Map

#### Widget tree
```
popup show=In_IsOpened  [style="popup-dialog map-location-info-popup"]
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ TextOptions: { FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold } }
    placeholder Content:
      container  [style="text-align-center"]
        placeholder-def Title
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_AlignItems.Center, JustifyContent: Entities.UBT_JustifyConten…
    placeholder Content:
      container
        container  [style="text-align-center ubt-unavailable-image margin-y-base "]
          placeholder-def Placeholder_CircleButton
            block CircleButton (UBTConnectLibrary.ConnectPatterns)
              args: BackgroundColorId=Entities.UBT_Color.Primary, BorderColorId=Entities.UBT_Color.Primary, SizeId=Entities.UBT_AvatarSize.Base_52
              placeholder Icon:
                block Icon (UBTConnectLibrary.ConnectPatterns)
                  args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Lock, In_SizeId=Entities.UBT_IconsSize.NonStandard_32
        container  [style="text-align-center"]
          container
            placeholder-def Placeholder_Description
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Medium } }
    placeholder Content:
      placeholder-def Placeholder_Button
        block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
          args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Medium, UBT_ButtonTypeId: Entities.UBT_ButtonType.Primary, UBT_FlexBehavior: Entities.UBT_FlexBehavior.Grow }, ButtonText="View near my Household"
  block CustomContainer (UBTConnectLibrary.BasePatterns)
    args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.Small } }
    placeholder Content:
      block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
        args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Medium, UBT_ButtonTypeId: Entities.UBT_ButtonType.Tertiary, UBT_FlexBehavior: Entities.UBT_FlexBehavior.Grow }, ButtonText="Close"
        on buttonOnClick → Event_Cancel
```

## Block Map_PoIPreview (flow Map)
- public: False
- input parameters: MapExploreItem: Distance, MapExploreItem Record (mandatory)
- events: Event_Navigate() mandatory
- local variables: ShareSheetImageURL: Text
- lifecycle: OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): Map

#### Data sources
- data action **FetchDetails** fetch=AtStart; outputs: UI_Subdivision_Card_Content: UI_Subdivision_Card_Content; ImageUrl: Text = "Temp"; UI_LocalityDetailsWithStatistics: UI_LocalityDetailsWithStatistics; UI_CountryStatistics: UI_CountryStatistics; UI_Screen_HouseholdDetails: UI_Screen_HouseholdDetails; UI_OneSchoolGlobal_DetailCard: UI_OneSchoolGlobal_DetailCard2; Out_LocalitiesStatistics: UI_LocalityStatistics; OnAfterFetch → OnAfterFetch_FetchDetails
  ```
  switch
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions (SupperMeetings_aka_Subdivisions)
      call-server GetSubdivisionDetails_BySubdivisionId(In_SubdivisionId=TextToLongInteger(MapExploreItem.MapExploreItem.Id))
      assign: UI_Subdivision_Card_Content = GetSubdivisionDetails_BySubdivisionId.Out_Screen_SubdivisionDetails.Subdivision_Card.Subdivision_Card_Content; ImageUrl = ""
      end
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Locality or\nMapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Interchange\n (Locality)
      call-server Get_UI_LocalityDetailsWithStatistics(LocalityId=TextToInteger(MapExploreItem.MapExploreItem.Id))
      assign: UI_LocalityDetailsWithStatistics = Get_UI_LocalityDetailsWithStatistics.UI_LocalityDetailsWithStatistics; Out_LocalitiesStatistics = ConvertRecord(Get_UI_LocalityDetailsWithStatistics.UI_LocalityDetailsWithStatistics,  {Name:"Name",Latitude:"Latitude",Longitude:"Longitude","Statistics.Title":"Name + \", \" +CountryName ","UI_TypedStatisticsTexts.Members":"Members","UI_TypedStatisticsTexts.Households":"Households","UI_TypedStatis…
      call-server ListAppendAll(List=Out_LocalitiesStatistics.Statistics.Statistics, SourceList=[ { Name: "Brethren", Value: Get_UI_LocalityDetailsWithStatistics.UI_LocalityDetailsWithStatistics.Members }, { Name: "Households", Value: Get_UI_LocalityDetailsWithStatistics.UI_LocalityDetailsWithS…) as ListAppendAllAll
      end
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Country (Country)
      call-server Get_UI_CountryStatistics()
      call-server ListFilter(Condition=Get_UI_CountryStatistics.Out_UI_CountryStatistics.Current.CountryCode = MapExploreItem.MapExploreItem.Id, SourceList=Get_UI_CountryStatistics.Out_UI_CountryStatistics)
      assign: UI_CountryStatistics = ListFilter.FilteredList.Current
      end
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Household (Household)
      call-server GetHouseholdDetails(CheckVisibility=False, HouseholdId=TextToInteger(MapExploreItem.MapExploreItem.Id), User_AgeVisibility=False)
      assign: UI_Screen_HouseholdDetails = GetHouseholdDetails.UI_Screen_HouseholdDetails
      end
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.OneSchoolGlobal (OneSchool)
      call-server Get_OneSchoolGlobalDetails(CommunityBusinessId=TextToInteger(MapExploreItem.MapExploreItem.Id))
      assign: UI_OneSchoolGlobal_DetailCard = Get_OneSchoolGlobalDetails.Out_OneSchoolGlobalDetails
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
  ```

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=not FetchDetails.IsDataFetched and not FetchDetails.HasFetchError
  placeholder Placeholder_LoadingSection:
    if MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Country #Country
      block UBT_LazyImage (UBTConnect_Utils.CW_Image)
        args: EntityId=NullTextIdentifier(), EntityType=Entities.Connect_Entity.Country, ExtendedClass="bottom-sheet-map-details__country-flag", ImageSize={ Width: Entities.UBT_ImageSize.FullWidth_100_Percent }, ImageURL=GetFlagURLByCountryCode(FetchDetails.UI_CountryStatistics.CountryCode)
      block Statistics_ListItem (UBTConnectLibrary.ConnectCorePatterns)
        args: In_HideBorder=True, In_StatisticsOptions={ Title: FetchDetails.UI_CountryStatistics.Statistics.Title, Statistics: FetchDetails.UI_CountryStatistics.Statistics.Statistics }
    if MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Interchange or \nMapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Locality #Interchange
      block Statistics_ListItem (UBTConnectLibrary.ConnectCorePatterns)
        args: In_HideBorder=True, In_StatisticsOptions={ Title: FetchDetails.UI_LocalityDetailsWithStatistics.Name, Statistics: FetchDetails.Out_LocalitiesStatistics.Statistics.Statistics }
    if MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions #SupperMeetings_aka_Subdivisions
      block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns)
        args: In_CardTypeId=Entities.UBT_ImageCardType.Detail
        placeholder LazyImage_Placeholder:
          block UBT_LazyImage (UBTConnect_Utils.CW_Image)
            args: EntityId=MapExploreItem.MapExploreItem.Id, EntityType=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }
        placeholder Placeholder_Content:
          block SupperMeeting_ImageCard_Content (UBTConnect.Directory_SupperMeetings)
            args: In_ShowAddress=True, In_Subdivision_CardContent=FetchDetails.UI_Subdivision_Card_Content
    if MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Household #Household
      block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns) #ImageCard_LazyLoading
        args: In_CardTypeId=Entities.UBT_ImageCardType.Detail, In_IsBookmarked=False
        placeholder LazyImage_Placeholder:
          block UBT_LazyImage (UBTConnect_Utils.CW_Image)
            args: EntityId=MapExploreItem.MapExploreItem.Id, EntityType=Entities.Connect_Entity.Household, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }
        placeholder Placeholder_Content:
          block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
            args: In_ShowSubtitle=FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.FamilyNames <> "", In_Subtitle=FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.FamilyNames, In_Title=MapExploreItem.MapExploreItem.Name
            placeholder Placeholder_BottomSectionContent:
              container #AddressSection  [style="householdAddress"; visible= FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.DisplayOptions.IsHidden and \nnot  FetchD…]
                block CustomContainer (UBTConnectLibrary.BasePatterns) #Address
                  args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, DisplayOptions: {  } }
                  placeholder Content:
                    block AddressPopup_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
                      args: IconVisible=True, In_Address= FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.Address, In_Coordinates={ Longitude: MapExploreItem.MapExploreItem.Latitude, Latitude: MapExploreItem.MapExploreItem.Longitude }, IsEnabled=False//continue here isEnabled
              container #SeeMoreSection  [style="full-width padding-top-s"]
                block SeeMoreSection (UBTConnectLibrary.ConnectPatterns)
                  args: isEnabled=True, StartExpanded=False
                  placeholder Content:
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: ExtendedClasses="see-more-locality-cont", Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Small }, BorderOptions: {  } }
                      placeholder Content:
                        block Columns_Two (UBTConnectLibrary.BasePatterns)
                          args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, ColumnSizes: {  } }
                          placeholder Left:
                            block IconText (UBTConnectLibrary.ConnectPatterns)
                              args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Locality: ", TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
                              placeholder Icon:
                                block Icon (UBTConnectLibrary.ConnectPatterns)
                                  args: In_ColorId=Entities.UBT_Color.Neutral8, In_IconId=Entities.UBT_Icons2.HomePIn, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
                          placeholder Right:
                            block CustomContainer (UBTConnectLibrary.BasePatterns) #Locality3
                              args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, DisplayOptions: {  } }
                              placeholder Content:
                                block CustomText (UBTConnectLibrary.BasePatterns)
                                  args: ExtendedClasses=If( FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased or  FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.DisplayOpti…, In_Text= FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.LocalityName, In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Small, IsUnderlined: True }
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Small } }
                      placeholder Content:
                        block Columns_Two (UBTConnectLibrary.BasePatterns)
                          args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, ColumnSizes: {  } }
                          placeholder Left:
                            block IconText (UBTConnectLibrary.ConnectPatterns)
                              args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Supper Meeting: ", TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
                              placeholder Icon:
                                block Icon (UBTConnectLibrary.ConnectPatterns)
                                  args: In_ColorId=Entities.UBT_Color.Neutral8, In_IconId=Entities.UBT_Icons2.Cottage, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
                          placeholder Right:
                            block CustomContainer (UBTConnectLibrary.BasePatterns) #SupperMeeting
                              args: Options={ MarginSize: { BottomSizeId: Entities.UBT_Size.Small }, DisplayOptions: {  } }
                              placeholder Content:
                                block CustomText (UBTConnectLibrary.BasePatterns)
                                  args: ExtendedClasses=If( FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.DisplayOptions.IsDeceased or  FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.DisplayOpti…, In_Text= FetchDetails.UI_Screen_HouseholdDetails.HouseholdCard.Household_Card_Content.SupperMeetingName, In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.Small, IsUnderlined: True }
    if MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.OneSchoolGlobal #OneSchool
      block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns)
        args: In_CardTypeId=Entities.UBT_ImageCardType.Detail
        placeholder LazyImage_Placeholder:
          block UBT_LazyImage (UBTConnect_Utils.CW_Image)
            args: EntityId=FetchDetails.UI_OneSchoolGlobal_DetailCard.CommunityBusinessId, EntityType=Entities.Connect_Entity.OneSchoolGlobal, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }, ImageURL=FetchDetails.UI_OneSchoolGlobal_DetailCard.SignedURL
        placeholder Placeholder_Content:
          block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
            args: In_Title=FetchDetails.UI_OneSchoolGlobal_DetailCard.UI_OneSchool_Card_Content.Name
            placeholder Placeholder_BottomSectionContent:
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: In_Text="Educating Students From:", In_TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: In_Text=FetchDetails.UI_OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.AreasServed, In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
              block CustomContainer (UBTConnectLibrary.BasePatterns)
                args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.ExtraSmall }, TextOptions: { Color: Entities.UBT_Color.CyanDarker } }
                placeholder Content:
                  container  [style=If(not FetchDetails.IsDataFetched and not FetchDetails.HasFetchError,"school-address","margin-top-s margin-bottom-xs")]
                    block AddressPopup_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
                      args: IconVisible=True, In_Address=FetchDetails.UI_OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.Address, In_Coordinates=ConvertRecord(MapExploreItem.MapExploreItem,  {Longitude:"Longitude",Latitude:"Latitude"}), IsEnabled=True
                    list source=FetchDetails.UI_OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.BusinesLinks mode=Default  [style="list list-group"]
                      container  [style="school-link-item"]
                        block External_Link (UBTConnect.App_Common_Blocks)
                          args: IconVisible=True, In_Link=ConvertRecord(FetchDetails.UI_OneSchoolGlobal_DetailCard.OneSchoolGlobal__DetailCard_Content.BusinesLinks.Current,  {Text:"Text",Link:"Link",ID:"ID"}), IsEnabled=True
    block CustomContainer (UBTConnectLibrary.BasePatterns) #PaddedContent
      args: Options={ PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Base } }
      placeholder Content:
        if MapExploreItem.Distance <> -1 and \nMapExploreItem.MapExploreItem.Type <> Entities.Connect_Entity.Locality and\nMapExploreItem.MapExploreItem.Type <> Entities.Connect_Entity.Country #HasDistance2
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ MarginSize: {  }, TextOptions: { FontWeight: Entities.UBT_FontWeight.SemiBold } }
            placeholder Content:
              block IconText (UBTConnectLibrary.ConnectPatterns)
                args: Text=If(MapExploreItem.Distance>=0,Get_FormattedDistance(FormatDecimal(MapExploreItem.Distance,1,".","")),""), TextOptions={ FontSize: Entities.UBT_FontSize.ExtraSmall }
                placeholder Icon:
                  block Icon (UBTConnectLibrary.ConnectPatterns)
                    args: In_IconId=Entities.UBT_Icons2.MyLocationFill, In_SizeId=Entities.UBT_IconsSize.Small_12
        block CustomContainer (UBTConnectLibrary.BasePatterns) #Actions2
          args: Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.Base } }
          placeholder Content:
            if MapExploreItem.MapExploreItem.Type <> Entities.Connect_Entity.Locality and \nMapExploreItem.MapExploreItem.Type <> Entities.Connect_Entity.Country and\nMapExploreItem.MapExploreItem.Type <> Entities.Connect_Entity.Interchange and\nMapExploreItem.MapExploreItem.Type <> NullTextIdentifier() #ShowActions2
              block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
                args: ContactPopUp_OverrideOptions={ ImageURL: ShareSheetImageURL, Name: MapExploreItem.MapExploreItem.Name }, EnableOptions={ EnableBookmark: True, EnableNotes: True, EnableShare: True, EnableViewDetails: True }, EntityId=TextToInteger(MapExploreItem.MapExploreItem.Id), EntityType=MapExploreItem.MapExploreItem.Type, useViewDetails=True
                on ViewDetails_OnClick → OnClick_ViewDetails
            else
              container
                block CircleButton_IconPrimary (UBTConnectLibrary.ConnectPatterns)
                  args: IconId=Entities.UBT_Icons2.ArrowOutward, Text="View details"
                  on OnClick → OnClick_ViewDetails
```

#### Block actions
- **OnAfterFetch_FetchDetails**
  ```
  if (Is country?) MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Country
    assign: FetchDetails.UI_CountryStatistics.Statistics.AvatarURL = GetFlagURLByCountryCode(FetchDetails.UI_CountryStatistics.CountryCode)
    end
  else
    if (Is one school global?) MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.OneSchoolGlobal
      assign: ShareSheetImageURL = FetchDetails.UI_OneSchoolGlobal_DetailCard.SignedURL
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnClick_ViewDetails**
  ```
  trigger event Event_Navigate()
  switch
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions (SupperMeetings_aka_Subdivisions)
      navigate → SupperMeeting_Details(In_SubdivsionId=TextToLongInteger(MapExploreItem.MapExploreItem.Id)) transition=Inherited
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Locality (Locality)
      navigate → Locality_Details(LocalityId=TextToInteger(MapExploreItem.MapExploreItem.Id), PreloadedLocalityLabel=MapExploreItem.MapExploreItem.Name) transition=Inherited
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Country (Country)
      navigate → CountryDetails(CountryCode=MapExploreItem.MapExploreItem.Id) transition=Inherited
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.Household
      navigate → HouseholdDetails(HouseholdId=TextToLongInteger(MapExploreItem.MapExploreItem.Id)) transition=Inherited
    case MapExploreItem.MapExploreItem.Type = Entities.Connect_Entity.OneSchoolGlobal
      navigate → OneSchoolGlobalDetails(In_OneSchoolGlobalId=TextToLongInteger(MapExploreItem.MapExploreItem.Id)) transition=Inherited
    otherwise
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnParametersChanged**; locals: Empty_UI_Subdivision_Card_Content: UI_Subdivision_Card_Content; Empty_UI_LocalityDetailsWithStatistics: UI_LocalityDetailsWithStatistics; Empty_UI_CountryStatistics: UI_CountryStatistics
  ```
  if MapExploreItem.MapExploreItem.Type <> NullTextIdentifier()
    refresh data FetchDetails
    end
  else
    assign: FetchDetails.UI_Subdivision_Card_Content = Empty_UI_Subdivision_Card_Content; FetchDetails.ImageUrl = ""; FetchDetails.UI_LocalityDetailsWithStatistics = Empty_UI_LocalityDetailsWithStatistics; FetchDetails.UI_CountryStatistics = Empty_UI_CountryStatistics
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| App_IconBadge | App_Common_Blocks | `../../_shared/pack/blocks.md` | BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory) | OnClick |
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| BottomBarContent | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| BottomBarMenu | App_Common | `../../App_Common/pack/blocks.md` | ActiveItem: Connect_BottomBar_Items Identifier; useMapsItems: Boolean; isHouseholder: Boolean; isRootPage: Boolean | BottomBar_Clicked |
| CacheControl_UserInfo_Wrapper | App_Cache | `../../_shared/pack/blocks.md` | - | Result |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| Directory_EntityDetailsActions | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean | Event_MenuEdit; OnChange_Bookmark; ViewDetails_OnClick |
| External_Link | App_Common_Blocks | `../../_shared/pack/blocks.md` | In_Link: BusinessLinkItem (mandatory); IsEnabled: Boolean = True; IconVisible: Boolean = True | - |
| FilterSheet | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | In_StartFilter: Filter_Common (mandatory); In_Options: Filter_Common_Options (mandatory); ExtendedClasses: Text | ApplyFilters; Loaded; SheetInitialized |
| FilterSheet_Icon | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | HaveFiltersApplied: Boolean (mandatory); BottomSheetId: Text (mandatory); isLoaded: Boolean (mandatory); ShowSubscriptionOnClick: Boolean (mandatory) | - |
| FilterSheet_OptionChoice_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_Choice: Filter_Common_Control_Choice (mandatory) | OnChange |
| FilterSheet_OptionList_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_List: Filter_Common_Control_List (mandatory); ShowHeader: Boolean (mandatory); ForceUpdate: Boolean | Event_Input_OnReady; OnBack; OnChange |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| ScreenBlock_Search | Directory_Search | `../../Directory_Search/pack/blocks.md` | In_IsInScreenSearch: Boolean; In_IsEventNavigation: Boolean; In_SearchTargetId: Type_SearchTarget Identifier = Entities.Type_SearchTarget.Global | Event_SearchResultClick |
| SearchResult_Section | Directory_Search | `../../Directory_Search/pack/blocks.md` | Type: Text (mandatory); Items: SearchResult List; HideSeparator: Boolean; SearchTerm: Text (mandatory) | OnItemClick |
| Search_BirthdayOptions | Directory_Search | `../../Directory_Search/pack/blocks.md` | BirthdayOptions: Connect_SearchBirthdayOptions List (mandatory) | Selected |
| SectionSeparator | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| SupperMeeting_ImageCard_Content | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_Subdivision_CardContent: UI_Subdivision_Card_Content (mandatory); In_ShowAddress: Boolean | - |
| SupperMeeting_ImageCard_Content_IconText | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_Text: Text (mandatory); In_FontSize: UBT_FontSize Identifier (mandatory); In_UBT_IconId: UBT_Icons2 Identifier (mandatory); In_UBT_ColorId: UBT_Color Identifier (mandatory) | - |
| SupperMeeting_ImageCard_Content_Statistics | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_BretherenCount: Integer (mandatory); In_HouseholdCount: Integer (mandatory); In_GenderSplit: Text (mandatory) | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
