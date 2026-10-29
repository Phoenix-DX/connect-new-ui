# Pack of UI flow Map (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Map

## Screen Map (flow Map)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: In_InitialLatitude: Decimal (mandatory); In_InitialLongitude: Decimal (mandatory); In_InitialZoomLevel: Integer = 11
- local variables: ActiveBottomBarItem: Connect_BottomBar_Items Identifier = Entities.Connect_BottomBar_Items.Explore; BottomSheet_HandlerOffsetHeight: Text = "24px"; ExploreBottomSheet_Id: Text; DetailsBottomSheet_Id: Text; LocalCacheControl_UserInformation: Directory_UserCurrent, isFetched Record; User_CurrentPosition: LatLong; TagList: Tag List; TagList_SelectedTag: Connect_Entity Identifier List; Map_Id: Text; Map_Markers: MarkerWithWindow List; Map_VisibleBoundaries: MapVisibleBoundaries; Map_Refresh: Date Time; isExploreItemsEmpty: Boolean; isExploreItemsReady: Boolean; ExploreItems_MaxItems: Integer = 5; ExploreItems_SeeAllSelected: Connect_Entity Identifier; BookmarkItems_SeeAllSelected: Connect_Entity Identifier; Local_ExploreItems_SupperMeetings: MapExploreItem List; Local_ExploreItems_OneSchoolGlobal: MapExploreItem List; Local_ExploreItems_Households: MapExploreItem List; Local_ExploreItems_Empty: MapExploreItem List; Local_SelectedExploreItem: Distance, MapExploreItem Record; isDetailFromExplore: Boolean; HasCurrentCoordinates: Boolean; RestoreLatitude: Decimal; RestoreLongitude: Decimal; RestoreZoomLevel: Integer; IsReady: Boolean; Map_BoundriesForEntitiesZoomLevel: MapVisibleBoundaries; Map_BoundriesForEntitiesZoomLevelBuffer: MapVisibleBoundaries; FetchAtZoomLevel_Entities: Integer = 8; FetchAtZoomLevel_Countries: Integer = 3; isSubmitingPreferences: Boolean; HideSearchBlock: Boolean = True; IsSidebarOpened: Boolean; Map_ActiveGeoJSONFeatureId: Text; Map_LastReportedZoomLevel: Integer; Cached_CountriesGeoJSONFeatures: Map_GeoJSONStructure List; Cached_CountriesMarkers: Map_MarkersStructure List; Cached_LocalitiesMarkers: Map_MarkersStructure List; Cached_LocalitiesGeoJSONFeatures: Map_GeoJSONStructure List; Cached_GlobalEntities: MapExploreItem, MarkerWithWindow Record List; Cached_Household_Markers: MarkerWithWindow List; Cached_Household_MapExploreItem: MapExploreItem List; HasAllHouseholds: Boolean; HasAllHouseholdExploreItems: Boolean; IsGlobalEntitiesFetched: Boolean; HasLoadedCountries: Boolean; HasLoadedLocalities: Boolean; HasLoadedGlobalEntities: Boolean; HasLoadedHouseholdsFirstChunk: Boolean; IsMapDataLoading: Boolean = True; IsExploreSheetOpened: Boolean; IsDetailSheetOpened: Boolean; ShowLocationUnavailablePopup: Boolean; User_AddressLocation: LatLong; IsBookmarkedSheetOpened: Boolean; BookmarkedBottomSheet_Id: Text; Local_BookmarkItems_Households: MapExploreItem List; Local_BookmarkItems_OneSchoolGlobal: MapExploreItem List; Local_BookmarkItems_SupperMeetings: MapExploreItem List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady; OnDestroy → ScreenEvent_OnDestroy

#### Data sources
- data action **FetchData_MapPreferences** fetch=OnDemand; outputs: DisplayAllDetails: Boolean; DisplayHouseholdName: Boolean; DisplayHouseholdAddress: Boolean
  ```
  call-server FetchData_VisibilityPreferences()
  assign: DisplayHouseholdName = FetchData_VisibilityPreferences.Out_VisibilityPreferences.DisplayHouseholdName; DisplayHouseholdAddress = FetchData_VisibilityPreferences.Out_VisibilityPreferences.DisplayAddress; DisplayAllDetails = DisplayHouseholdName and DisplayHouseholdAddress
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts) #Layout_Map
  args: In_AlignTitleLeft=True, In_ExtendedClass="ubt-map-layout", In_IsPrimaryColor=False
  on OnReadyEvent → Event_Layout_DetailPageOnReadyEvent(WrapperContainerId=WrapperContainerId)
  placeholder Placeholder_Header_Title:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text="Settings", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
  placeholder Content:
    container #Div_Content  [style="OSBlockWidget"; tabindex=-1]
      if IsReady #IsReady2
        block LeafletMap_Updated (Leaflet.Leaflet) #LeafletMap_Updated
          args: MapOptions={ Zoom: 11, MinZoom: 0, MaxZoom: 20, MaxBounds: { Max_Lat: 100, Min_Lat: -100, Max_Long: 190, Min_Long: -190 }, AttributionControl: False, MaxBoundsViscosity: 0.5 }, TileLayer={ Url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"//"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", Options: { MinZo…, useClustering=True, ZoomControlOptions={ position: "bottomright", zoomInTitle: "Zoom in", zoomInClass: "ubt-icon "+Entities.UBT_Icons2.Add+" "+ GetClass_Color(Entities.UBT_Color.Neutral8), zoomOutTitle: "Zoom out", zoomOutClass: "ubt-icon…
          on OnMarker_Clicked → Event_LeafletMapOnMarker_Clicked(None=ExtraData, Lat=Lat, Long=Long, None=MapId, MarkerId=MarkerId, Type=Type)
          on OnGoToMyLocation_Clicked → Event_LeafletMapOnGoToMyLocation_Clicked(MapId=MapId)
          on OnInitialized → Event_LeafletMapOnInitialized(MapId=MapId)
          on OnMoveEnd → Event_LeafletMapOnMoveEnd(MapVisibleBoundaries=MapVisibleBoundaries)
          on OnGeoJSON_Clicked → Event_LeafletMapOnGeoJSON_Clicked(ExtraData=ExtraData, GeoJSONId=GeoJSONId, None=MapId, Type=Type)
          on OnZoomEnd → Event_LeafletMapOnZoomEnd(ZoomLevel=ZoomLevel)
        if IsMapDataLoading #IsMapDataLoadingOverlay
          container  [style="map-loading-overlay"]
            container  [style="map-loading-dots"]
              container  [style="map-loading-dot map-loading-dot-1"]
              container  [style="map-loading-dot map-loading-dot-2"]
              container  [style="map-loading-dot map-loading-dot-3"]
      else
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=True
          placeholder Placeholder_LoadingSection:
            container  [style="leaflet-container"]
      block FloatingContent (OutSystemsUI_2_23.Content)
        args: ExtendedClass="ubt-map-search", Position=Entities.Position.Top, UseFullWidth=True, UseMargin=False
        placeholder Content:
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.ExtraSmall }, MarginSize: { GeneralSizeId: Entities.UBT_Size.Base } }
            placeholder Content:
              block Columns_Two (UBTConnectLibrary.BasePatterns)
                args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, SpacingSize: Entities.UBT_Size.Small, VerticalAlign: Entities.UBT_VerticalAlign.Center }
                placeholder Left:
                  link onclick → OnClick_Back
                    block CircleButton (UBTConnectLibrary.ConnectPatterns)
                      args: BackgroundColorId=Entities.UBT_Color.Neutral0, SizeId=Entities.UBT_AvatarSize.Small_40
                      placeholder Icon:
                        block Icon (UBTConnectLibrary.ConnectPatterns)
                          args: In_ColorId=Entities.UBT_Color.Neutral9, In_IconId=Entities.UBT_Icons2.ArrowLeftAlt, In_SizeId=Entities.UBT_IconsSize.Base_24
                placeholder Right:
                  block Input (UBTConnectLibrary.ConnectPatterns)
                    args: In_Options={ SearchPrompt: "Search for households, suppermeetings", BorderRadius: Entities.Shape.Rounded }
                    on Event_OnFocus → OnFocus_SearchInput
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: ExtendedClasses=If(Map_LastReportedZoomLevel <> "" and Map_LastReportedZoomLevel >=  FetchAtZoomLevel_Entities,\n    "",\n    "hidden"), Options={ PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall } }
            placeholder Content:
              block HorizontalTagList (UBTConnectLibrary.ConnectPatterns)
                args: In_HorizontalPadding=Entities.UBT_Size.Base, In_IsMandatorySelection=False, In_IsSingleSelection=False, In_TagToggleList=TagList
                on Changed → Event_HorizontalTagListChanged(UpdatedTagList=UpdatedTagList)
      if True #HideInServiceStudio  [DEAD BRANCH: condition is a constant]
        if IsReady and Map_LastReportedZoomLevel <> "" and Map_LastReportedZoomLevel >=  FetchAtZoomLevel_Entities
          if ActiveBottomBarItem = Entities.Connect_BottomBar_Items.Explore #isExploreBottomBarActive
            block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction) #BottomSheet_Explore
              args: CloseOnClickOutsite=True, Content_Padding={ HorizontalSizeId: If(ExploreItems_SeeAllSelected = NullTextIdentifier(), NullTextIdentifier(),Entities.UBT_Size.Base), TopSizeId: If(ExploreItems_SeeAllSelected = NullTextIdentifier(), NullTextIden…, HandlerPreviewOffset=BottomSheet_HandlerOffsetHeight, IsNotInertWhenClosed=True, isTransparentOverlay=True, ShowHandlerPreview=True, ShowHeader=ExploreItems_SeeAllSelected = NullTextIdentifier(), Title="Explore"
              on OnToggle → Event_BottomSheetExplore_OnToggle(IsOpen=IsOpen)
              on Initialized → Event_BottomSheetNearMeInitialized(Id=Id)
              placeholder Content:
                if ExploreItems_SeeAllSelected = NullTextIdentifier() #NoSeeAllSelected
                  block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_MyAddress
                    placeholder Content:
                      block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                        args: In_IsLoading=not LocalCacheControl_UserInformation.isFetched
                        placeholder Placeholder_LoadingSection:
                          block CustomContainer (UBTConnectLibrary.BasePatterns) #Header
                            args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Base } }
                            placeholder Content:
                              container  [on onclick → OnClick_MyAddress]
                                block Columns_Two (UBTConnectLibrary.BasePatterns)
                                  args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, SpacingSize: Entities.UBT_Size.Base }
                                  placeholder Left:
                                    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                                      args: EntityId=LocalCacheControl_UserInformation.Directory_UserCurrent.MemberID, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }, ImageURL=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.Photo.SignedURL
                                  placeholder Right:
                                    container
                                      block CustomText (UBTConnectLibrary.BasePatterns)
                                        args: In_Text="My Address", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                                    block CustomText (UBTConnectLibrary.BasePatterns)
                                      args: In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.Address.FormattedAddress, In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
                if False//not isExploreItemsReady #Loading
                  block NegativeMargin (UBTConnectLibrary.BasePatterns)
                    args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                    placeholder Content:
                      block SectionSeparator (UBTConnect.App_Common_Blocks)
                  block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                    args: In_IsLoading=True
                    placeholder Placeholder_LoadingSection:
                      block Map_ExploreList_Section (UBTConnect.Map)
                        args: CurrentPosition=User_CurrentPosition, Items=ConvertList(Local_ExploreItems_SupperMeetings,  {}), Type=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions
                        on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                else
                  if isExploreItemsEmpty #ExploreItemsIsEmpty
                    block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_EmptyState
                      placeholder Content:
                        block NegativeMargin (UBTConnectLibrary.BasePatterns)
                          args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                          placeholder Content:
                            block SectionSeparator (UBTConnect.App_Common_Blocks)
                        block Map_ExploreList_EmptyState (UBTConnect.Map)
                  else
                    if ExploreItems_SeeAllSelected = NullTextIdentifier() #NoSeeAllDefined
                      if not Local_ExploreItems_Households.Empty #HouseholdSection
                        block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_Households
                          placeholder Content:
                            block NegativeMargin (UBTConnectLibrary.BasePatterns)
                              args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                              placeholder Content:
                                block SectionSeparator (UBTConnect.App_Common_Blocks)
                            block Map_ExploreList_Section (UBTConnect.Map) #Map_ExploreList_Section_Household
                              args: CurrentPosition=User_CurrentPosition, Items=ConvertList(Local_ExploreItems_Households,  {}), MaxItems=ExploreItems_MaxItems, Type=Entities.Connect_Entity.Household
                              on ItemClicked → Event_Map_ExploreList_Section_ItemClicked(None=Distance, IsFromList=True, MapExploreItem=MapExploreItem)
                              on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                      if not Local_ExploreItems_SupperMeetings.Empty #SupperMeetingsSection
                        block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_SupperMeetings
                          placeholder Content:
                            block NegativeMargin (UBTConnectLibrary.BasePatterns)
                              args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                              placeholder Content:
                                block SectionSeparator (UBTConnect.App_Common_Blocks)
                            block Map_ExploreList_Section (UBTConnect.Map) #Map_ExploreList_Section_SupperMeetings
                              args: CurrentPosition=User_CurrentPosition, Items=ConvertList(Local_ExploreItems_SupperMeetings,  {}), MaxItems=ExploreItems_MaxItems, Type=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions
                              on ItemClicked → Event_Map_ExploreList_Section_ItemClicked(None=Distance, IsFromList=True, MapExploreItem=MapExploreItem)
                              on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                      if not Local_ExploreItems_OneSchoolGlobal.Empty #OneSchoolGlobalSection
                        block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_OneSchoolGlobal
                          placeholder Content:
                            block NegativeMargin (UBTConnectLibrary.BasePatterns)
                              args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                              placeholder Content:
                                block SectionSeparator (UBTConnect.App_Common_Blocks)
                            block Map_ExploreList_Section (UBTConnect.Map) #Map_ExploreList_Section_OneSchoolGlobal
                              args: CurrentPosition=User_CurrentPosition, Items=ConvertList(Local_ExploreItems_OneSchoolGlobal,  {}), MaxItems=ExploreItems_MaxItems, Type=Entities.Connect_Entity.OneSchoolGlobal
                              on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                              on ItemClicked → Event_Map_ExploreList_Section_ItemClicked(IsFromList=True, MapExploreItem=MapExploreItem)
                    else
                      block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_SeeAll
                        placeholder Content:
                          block Map_ExploreList_Section (UBTConnect.Map) #Map_ExploreList_Section_SeeAll
                            args: CurrentPosition=User_CurrentPosition, Items=ConvertList(If(ExploreItems_SeeAllSelected = Entities.Connect_Entity.Household, Local_ExploreItems_Households, \nIf(ExploreItems_SeeAllSelected = Entities.Connect_Entity.SupperMeetings_aka_Subdivisio…, ShowBackButton=True, Type=ExploreItems_SeeAllSelected
                            on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                            on BackButtonClicked → Event_Map_ExploreList_Section_ActionClicked(Type=NullTextIdentifier())
                            on ItemClicked → Event_Map_ExploreList_Section_ItemClicked(None=Distance, IsFromList=True, MapExploreItem=MapExploreItem)
          if ActiveBottomBarItem = Entities.Connect_BottomBar_Items.Bookmarked #isBookmarkBottomBarActive
            block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction) #BottomSheet_Bookmarks2
              args: CloseOnClickOutsite=True, Content_Padding={ HorizontalSizeId: If(BookmarkItems_SeeAllSelected = NullTextIdentifier(), NullTextIdentifier(),Entities.UBT_Size.Base), TopSizeId: If(BookmarkItems_SeeAllSelected = NullTextIdentifier(), NullTextId…, HandlerPreviewOffset=BottomSheet_HandlerOffsetHeight, IsNotInertWhenClosed=True, isTransparentOverlay=True, ShowHandlerPreview=True, ShowHeader=BookmarkItems_SeeAllSelected = NullTextIdentifier(), Title="Bookmarked"
              on Initialized → Event_BottomSheetBookmarkedInitialized(Id=Id)
              on OnToggle → Event_BottomSheetBookmarked_OnToggle(IsOpen=IsOpen)
              placeholder Content:
                if BookmarkItems_SeeAllSelected = NullTextIdentifier() #NoSeeAllSelected3
                  block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_MyAddress3
                    placeholder Content:
                      block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                        args: In_IsLoading=not LocalCacheControl_UserInformation.isFetched
                        placeholder Placeholder_LoadingSection:
                          block CustomContainer (UBTConnectLibrary.BasePatterns) #Header4
                            args: Options={ PaddingSize: { BottomSizeId: Entities.UBT_Size.Base } }
                            placeholder Content:
                              container  [on onclick → OnClick_MyAddress]
                                block Columns_Two (UBTConnectLibrary.BasePatterns)
                                  args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, SpacingSize: Entities.UBT_Size.Base }
                                  placeholder Left:
                                    block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                                      args: EntityId=LocalCacheControl_UserInformation.Directory_UserCurrent.MemberID, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Base_52, Width: Entities.UBT_ImageSize.Square }, ImageURL=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.Photo.SignedURL
                                  placeholder Right:
                                    container
                                      block CustomText (UBTConnectLibrary.BasePatterns)
                                        args: In_Text="My Address", In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                                    block CustomText (UBTConnectLibrary.BasePatterns)
                                      args: In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.Address.FormattedAddress, In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
                if False//not isExploreItemsReady #Loading3
                  block NegativeMargin (UBTConnectLibrary.BasePatterns)
                    args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                    placeholder Content:
                      block SectionSeparator (UBTConnect.App_Common_Blocks)
                  block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                    args: In_IsLoading=True
                    placeholder Placeholder_LoadingSection:
                      block Map_ExploreList_Section (UBTConnect.Map)
                        args: CurrentPosition=User_CurrentPosition, Items=ConvertList(Local_ExploreItems_SupperMeetings,  {}), Type=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions
                        on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                else
                  if Local_BookmarkItems_Households.Empty and \nLocal_BookmarkItems_OneSchoolGlobal.Empty and\nLocal_BookmarkItems_SupperMeetings.Empty #ExploreItemsIsEmpty3
                    block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_EmptyState3
                      placeholder Content:
                        block NegativeMargin (UBTConnectLibrary.BasePatterns)
                          args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                          placeholder Content:
                            block SectionSeparator (UBTConnect.App_Common_Blocks)
                        block Map_ExploreList_EmptyState (UBTConnect.Map)
                  else
                    if BookmarkItems_SeeAllSelected = NullTextIdentifier() #NoSeeAllDefined3
                      if not Local_BookmarkItems_Households.Empty #HouseholdSection3
                        block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_Households3
                          placeholder Content:
                            block NegativeMargin (UBTConnectLibrary.BasePatterns)
                              args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                              placeholder Content:
                                block SectionSeparator (UBTConnect.App_Common_Blocks)
                            block Map_ExploreList_Section (UBTConnect.Map) #Map_ExploreList_Section_Household3
                              args: CurrentPosition=User_CurrentPosition, Items=ConvertList(Local_BookmarkItems_Households,  {}), MaxItems=ExploreItems_MaxItems, Type=Entities.Connect_Entity.Household
                              on ItemClicked → Event_Map_ExploreList_Section_ItemClicked(IsFromList=True, MapExploreItem=MapExploreItem)
                              on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                      if not Local_BookmarkItems_SupperMeetings.Empty #SupperMeetingsSection3
                        block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_SupperMeetings3
                          placeholder Content:
                            block NegativeMargin (UBTConnectLibrary.BasePatterns)
                              args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                              placeholder Content:
                                block SectionSeparator (UBTConnect.App_Common_Blocks)
                            block Map_ExploreList_Section (UBTConnect.Map) #Map_ExploreList_Section_SupperMeetings3
                              args: CurrentPosition=User_CurrentPosition, Items=ConvertList(Local_BookmarkItems_SupperMeetings,  {}), MaxItems=ExploreItems_MaxItems, Type=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions
                              on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                              on ItemClicked → Event_Map_ExploreList_Section_ItemClicked(IsFromList=True, MapExploreItem=MapExploreItem)
                      if not Local_BookmarkItems_OneSchoolGlobal.Empty #OneSchoolGlobalSection3
                        block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_OneSchoolGlobal3
                          placeholder Content:
                            block NegativeMargin (UBTConnectLibrary.BasePatterns)
                              args: MarginOptions={ HorizontalSizeId: Entities.UBT_Size.Base }
                              placeholder Content:
                                block SectionSeparator (UBTConnect.App_Common_Blocks)
                            block Map_ExploreList_Section (UBTConnect.Map) #Map_ExploreList_Section_OneSchoolGlobal3
                              args: CurrentPosition=User_CurrentPosition, Items=ConvertList(Local_BookmarkItems_OneSchoolGlobal,  {}), MaxItems=ExploreItems_MaxItems, Type=Entities.Connect_Entity.OneSchoolGlobal
                              on ItemClicked → Event_Map_ExploreList_Section_ItemClicked(IsFromList=True, MapExploreItem=MapExploreItem)
                              on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                    else
                      block BottomSheetAnchor (UBTConnectLibrary.ConnectPatterns) #Anchor_SeeAll3
                        placeholder Content:
                          block Map_ExploreList_Section (UBTConnect.Map) #Map_ExploreList_Section_SeeAll3
                            args: CurrentPosition=User_CurrentPosition, Items=ConvertList(If(BookmarkItems_SeeAllSelected = Entities.Connect_Entity.Household, Local_ExploreItems_Households, \nIf(BookmarkItems_SeeAllSelected = Entities.Connect_Entity.SupperMeetings_aka_Subdivis…, ShowBackButton=True, Type=BookmarkItems_SeeAllSelected
                            on SeeAllClicked → Event_Map_ExploreList_Section_ActionClicked(Type=Type)
                            on BackButtonClicked → Event_Map_ExploreList_Section_ActionClicked(Type=NullTextIdentifier())
                            on ItemClicked → Event_Map_ExploreList_Section_ItemClicked(None=Distance, IsFromList=True, MapExploreItem=MapExploreItem)
        block BottomSheet (OutSystemsUI_2_23+UBTConnectLibrary.Interaction) #BottomSheet_Details
          args: CloseOnClickOutsite=True, ExtendedClasses="bottom-sheet-map-details", IsHideContentWhenClosed=True, isTransparentOverlay=True, Title=Local_SelectedExploreItem.MapExploreItem.Type
          on OnToggle → Event_BottomSheetDetails_OnToggle(IsOpen=IsOpen)
          on OnClose → Event_BottomSheet_DetailsOnClose
          on Initialized → Event_BottomSheetDetailsInitialized(Id=Id)
          placeholder Content:
            block Map_PoIPreview (UBTConnect.Map)
              args: MapExploreItem=Local_SelectedExploreItem
              on Event_Navigate → Event_BottomSheetDetail_Navigate
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=ActiveBottomBarItem, isHouseholder=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.isHouseholder, useMapsItems=True
      on BottomBar_Clicked → OnClick_BottomBarMenu(Item=Item)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block CacheControl_UserInfo_Wrapper (UBTConnect.App_Cache)
  on Result → CacheControl_UserInfo_WrapperResult(UserInformation=UserInformation)
block BackNavigationHandler (NavigationHandler.NavigationHandler)
  on BackNavigation → Event_BackNavigation(BackNavigationEvent=BackNavigationEvent)
block NavigationHandler (NavigationHandler.NavigationHandler)
  on Navigation → Event_Navigation
block Sidebar (OutSystemsUI_2_23.Interaction) #Sidebar_Search
  args: ExtendedClass="ubt-map-sheet"
  on OnToggle → OnToggle_SidebarSearch(IsOpen=IsOpen, SidebarId=SidebarId)
  placeholder Content:
    if HideSearchBlock
    else
      block ScreenBlock_Search (UBTConnect.Directory_Search)
        args: In_IsEventNavigation=True, In_IsInScreenSearch=True, In_SearchTargetId=Entities.Type_SearchTarget.Map
        on Event_SearchResultClick → Event_SearchResultClick(Event_SearchResult=Event_SearchResult)
if LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.isHouseholder
  block Sidebar (OutSystemsUI_2_23.Interaction) #Sidebar_Settings
    args: ExtendedClass="ubt-map-sheet ubt-map-sheet--show-footer"
    on OnToggle → OnToggle_SidebarSettings(IsOpen=IsOpen, SidebarId=SidebarId)
    placeholder Header:
      block IconText (UBTConnectLibrary.ConnectPatterns)
        args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text="Settings", TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
        placeholder Icon:
          block Icon (UBTConnectLibrary.ConnectPatterns)
            args: In_IconId=Entities.UBT_Icons2.ArrowLeftAlt, In_SizeId=Entities.UBT_IconsSize.Base_24
            on Click → Action_CloseSettingsSidebar
    placeholder Content:
      if False  [DEAD BRANCH: condition is a constant]
        button onclick → Delete_TestOpenSettingsPage  [style="btn btn-primary"]
          text: Button
      block SectionSeparator (UBTConnect.App_Common_Blocks)
      container #Container
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=not LocalCacheControl_UserInformation.isFetched
          placeholder Placeholder_LoadingSection:
            block CustomContainer (UBTConnectLibrary.BasePatterns) #Header2
              args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base } }
              placeholder Content:
                container
                  block UBT_LazyImage (UBTConnect_Utils.CW_Image)
                    args: EntityId=LocalCacheControl_UserInformation.Directory_UserCurrent.MemberID, EntityType=Entities.Connect_Entity.Member, ImageSize={ Height: Entities.UBT_ImageSize.Small_40, Width: Entities.UBT_ImageSize.Square }, ImageURL=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.Photo.SignedURL
                  block CustomText (UBTConnectLibrary.BasePatterns)
                    args: In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.FullName, In_TextOptions={ Color: Entities.UBT_Color.Neutral8, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
                  block CustomText (UBTConnectLibrary.BasePatterns)
                    args: In_Text=LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.Address.FormattedAddress, In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.DoubleExtraSmall, FontWeight: Entities.UBT_FontWeight.Regular }
        block SectionSeparator (UBTConnect.App_Common_Blocks)
        block SectionSeparator (UBTConnect.App_Common_Blocks)
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=not FetchData_MapPreferences.IsDataFetched and not FetchData_MapPreferences.HasFetchError
          placeholder Placeholder_LoadingSection:
            block CustomContainer (UBTConnectLibrary.BasePatterns) #Options
              args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base } }
              placeholder Content:
                block CustomContainer (UBTConnectLibrary.BasePatterns) #OptionItem
                  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base }, BorderOptions: { Color: Entities.UBT_Color.Neutral5, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
                  placeholder Content:
                    container #TenColumn  [width=10 col]
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text="Show all details of your household", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    container #TwoColumn  [width=2 col]
                      switchwidget #Switch1 var=FetchData_MapPreferences.DisplayAllDetails style="switch" onchange → OnChange_PreferencesAll  [style="switch"]
                    container #TenColumn2  [style="padding-top-s"]
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text="Select what your household displays on the Map. Applies to Map only.", In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
                block CustomContainer (UBTConnectLibrary.BasePatterns) #OptionItem2
                  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
                  placeholder Content:
                    container #TenColumn3  [width=10 col]
                      block CustomText (UBTConnectLibrary.BasePatterns)
                        args: In_Text="Display Household Name", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
                    container #TwoColumn2  [width=2 col]
                      switchwidget #Switch2 var=FetchData_MapPreferences.DisplayHouseholdName style="switch" onchange → OnChange_PreferencesItem  [style="switch"]
                if LocalCacheControl_UserInformation.Directory_UserCurrent.Directory_UserCurrent_Member.Address.FormattedAddress <> "" #HasAddress
                  block CustomContainer (UBTConnectLibrary.BasePatterns) #OptionItem3
                    args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Base }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
                    placeholder Content:
                      container #TenColumn4  [width=10 col]
                        block CustomText (UBTConnectLibrary.BasePatterns)
                          args: In_Text="Display Address", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
                      container #TwoColumn3  [width=2 col]
                        switchwidget #Switch3 var=FetchData_MapPreferences.DisplayHouseholdAddress style="switch" onchange → OnChange_PreferencesItem  [style="switch"]
                      container #TenColumn5  [style="padding-top-s"]
                        block CustomText (UBTConnectLibrary.BasePatterns)
                          args: In_Text="Switching off would hide your household on the map, but it will still appear in the list of locality’s households.", In_TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
      block FixedFooter (UBTConnectLibrary.ConnectPatterns)
        args: ContentContainerId=Container.Id, ExpectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-s))", useBottomBar=False
        placeholder Content:
          block CustomContainer (UBTConnectLibrary.BasePatterns)
            args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, BorderOptions: { Color: Entities.UBT_Color.Neutral4, Size: { BottomSizeId: Enti…
            placeholder Content:
              block ButtonLoading (OutSystemsUI_2_23.Utilities2)
                args: IsLoading=isSubmitingPreferences
                placeholder Button:
                  block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
                    args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Small }, ButtonText="Save", IsDisabled=not FetchData_MapPreferences.IsDataFetched and not FetchData_MapPreferences.HasFetchError or \nisSubmitingPreferences
                    on buttonOnClick → OnClick_PreferencesSubmit
if Map_BoundriesForEntitiesZoomLevel.MinLat <> 0 or\nMap_BoundriesForEntitiesZoomLevel.MaxLat <> 0 or\nMap_LastReportedZoomLevel > FetchAtZoomLevel_Entities
  if HasAllHouseholds and HasAllHouseholdExploreItems #HasAllHouseholdsAndExploreItems
  else
    block CacheControl_Household (UBTConnect.Map)
      args: In_MaxLatitude=Map_BoundriesForEntitiesZoomLevel.MaxLat, In_MaxLongitude=Map_BoundriesForEntitiesZoomLevel.MaxLong, In_MinLatitude=Map_BoundriesForEntitiesZoomLevel.MinLat, In_MinLongitude=Map_BoundriesForEntitiesZoomLevel.MinLong
      on Event_IsDataFetched → Event_CacheControl_Household_IsDataFetched(In_IsFetched=In_IsFetched)
      on Event_HouseholdMarkers → Event_CacheControl_Households(Event_HasAllHouseholds=IsAllHouseholds, Household_Markers=Household_Markers)
      on Event_HouseholdExploreItems → Event_CacheControl_HouseholdsExploreItems(Event_HasAllExploreItems=IsAllExploreItems, MapExploreItem=Households_ExploreItems)
  if not Cached_CountriesMarkers.Empty #HasCachedCountries
  else
    block CacheControl_CountriesMarkers (UBTConnect.Map)
      on Event_CountriesMarkers → Event_CacheControl_Countries(Countries_Markers=Countries_Markers)
      on Event_CountriesGeoJSON → Event_CacheControl_CountriesGeoJSON(GeoJSONFeatures=GeoJSONFeatures)
  if not Cached_LocalitiesMarkers.Empty #HasCachedLocalities
  else
    block CacheControl_Localities (UBTConnect.Map)
      on Event_LocalitiesMarkers → Event_CacheControl_Localities(Localities_Markers=Localities_Markers)
      on Event_LocalitiesGeoJSON → Event_CacheControl_LocalitiesGeoJSON(GeoJSONFeatures=GeoJSONFeatures)
  if not Cached_GlobalEntities.Empty #HasCachedGlobalEntities
  else
    block CacheControl_GlobalEntities (UBTConnect.Map)
      on Event_GlobalEntities → Event_CacheControl_GlobalEntities(GlobalLocations_Markers=GlobalLocations_Markers)
block Map_LocationInfoPopup (UBTConnect.Map) #Map_LocationRestrictedPopup
  args: In_IsOpened=False
  on Event_Cancel → event_Map_LocationInfoPopupEvent_CancelClicked
  placeholder Title:
    text: Current Location Restricted
  placeholder Placeholder_CircleButton:
    block CircleButton (UBTConnectLibrary.ConnectPatterns)
      args: BackgroundColorId=Entities.UBT_Color.Primary, BorderColorId=Entities.UBT_Color.Primary, SizeId=Entities.UBT_AvatarSize.Base_52
      placeholder Icon:
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.Lock, In_SizeId=Entities.UBT_IconsSize.NonStandard_32
  placeholder Placeholder_Description:
    text: Your current location is outside your subscription. You can still view places near your Household instead.
  placeholder Placeholder_Button:
    block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
      args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Medium, UBT_ButtonTypeId: Entities.UBT_ButtonType.Primary, UBT_FlexBehavior: Entities.UBT_FlexBehavior.Grow }, ButtonText="View near my Household"
      on buttonOnClick → OnClick_ViewNearMyHousehold
block Map_LocationInfoPopup (UBTConnect.Map) #Map_LocationUnavailable
  args: In_IsOpened=ShowLocationUnavailablePopup
  on Event_Cancel → event_Map_LocationInfoPopupEvent_CancelClicked
  placeholder Title:
    text: No location found
  placeholder Placeholder_CircleButton:
    block CircleButton (UBTConnectLibrary.ConnectPatterns)
      args: BackgroundColorId=Entities.UBT_Color.Neutral3, BorderColorId=Entities.UBT_Color.Neutral3, SizeId=Entities.UBT_AvatarSize.Base_52
      placeholder Icon:
        block Icon (UBTConnectLibrary.ConnectPatterns)
          args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.LocationOn, In_SizeId=Entities.UBT_IconsSize.NonStandard_32
  placeholder Placeholder_Description:
    container  [style="text-align-left"]
      text: We can’t find a Household address  for your profile, and location access  is turned off. You can:
    container  [style="text-align-left"]
      text:  • Contact your Admin to add your Household address, or
    container  [style="text-align-left"]
      text:  • Enable location sharing for Connect App in your device settings to use your current location.
  placeholder Placeholder_Button:
    block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
      args: ButtonOptions={ UBT_ButtonSizeId: Entities.UBT_ButtonSize.Medium, UBT_ButtonTypeId: Entities.UBT_ButtonType.Primary, UBT_FlexBehavior: Entities.UBT_FlexBehavior.Grow }, ButtonText="Enable location sharing", IconId=Entities.UBT_Icons2.OpenNew, IsIconOnRight=True
      on buttonOnClick → OnClick_EnableLocation
```

#### Screen actions
- **Action_CloseSettingsSidebar**
  ```
  call SidebarClose(WidgetId=Sidebar_Settings.Id)
  assign: isSubmitingPreferences = False; ActiveBottomBarItem = Entities.Connect_BottomBar_Items.Explore
  call-server FetchData_VisibilityPreferences()
  assign: FetchData_MapPreferences.DisplayHouseholdName = FetchData_VisibilityPreferences.Out_VisibilityPreferences.DisplayHouseholdName; FetchData_MapPreferences.DisplayHouseholdAddress = FetchData_VisibilityPreferences.Out_VisibilityPreferences.DisplayAddress; FetchData_MapPreferences.DisplayAllDetails = FetchData_MapPreferences.DisplayHouseholdName and FetchData_MapPreferences.DisplayHouseholdAddress
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_DefineExploreItems**
  ```
  call Map_Zoom_GetLevel(MapId=Map_Id)
  if Map_Zoom_GetLevel.ZoomLevel < FetchAtZoomLevel_Entities
    end
  else
    call ListClear(List=Local_ExploreItems_SupperMeetings)
    call ListClear(List=Local_ExploreItems_Households) as ListClear2
    call ListClear(List=Local_ExploreItems_OneSchoolGlobal) as ListClear3
    assign: isExploreItemsEmpty = True
    call ListAny(Condition=Value = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, List=TagList_SelectedTag) as ListAny_SupperMeetingTag
    if TagList_SelectedTag.Empty or ListAny_SupperMeetingTag.Result
      call ListFilter(Condition=MapExploreItem.Type = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions and\nMapExploreItem.Latitude >= Map_VisibleBoundaries.MinLat and\nMapExploreItem.Latitude <= Map_VisibleBoundaries.MaxLat…, SourceList=Cached_GlobalEntities) as SupperMeetings
      assign: Local_ExploreItems_SupperMeetings = ConvertList(SupperMeetings.FilteredList,  {Value:"MapExploreItem"})
      [M1] call ListAny(Condition=Value = Entities.Connect_Entity.Household, List=TagList_SelectedTag) as ListAny_Household
      if TagList_SelectedTag.Empty or ListAny_Household.Result
        call ListFilter(Condition=Latitude >= Map_VisibleBoundaries.MinLat and\nLatitude <= Map_VisibleBoundaries.MaxLat and\nLongitude >= Map_VisibleBoundaries.MinLong and\nLongitude <= Map_VisibleBoundaries.MaxLong, SourceList=Cached_Household_MapExploreItem) as Household
        assign: Local_ExploreItems_Households = Household.FilteredList
        [M2] call ListAny(Condition=Value = Entities.Connect_Entity.OneSchoolGlobal, List=TagList_SelectedTag) as ListAny_OneSchool
        if TagList_SelectedTag.Empty or ListAny_OneSchool.Result
          call ListFilter(Condition=MapExploreItem.Type = Entities.Connect_Entity.OneSchoolGlobal and\nMapExploreItem.Latitude >= Map_VisibleBoundaries.MinLat and\nMapExploreItem.Latitude <= Map_VisibleBoundaries.MaxLat and\nMapExplore…, SourceList=Cached_GlobalEntities) as OneSchoolGlobal
          assign: Local_ExploreItems_OneSchoolGlobal = ConvertList(OneSchoolGlobal.FilteredList,  {Value:"MapExploreItem"})
          [M3] assign: isExploreItemsEmpty = (TagList_SelectedTag.Empty and Local_ExploreItems_SupperMeetings.Empty and Local_ExploreItems_OneSchoolGlobal.Empty and Local_ExploreItems_Households.Empty) or \n(ListAny_SupperMeetingTag.Result and Local_ExploreItems_SupperMeetings.Empty) or\n(ListAny_Household.Result and Local_ExploreItems_Househ…; isExploreItemsReady = True
          call Action_MapExploreItemsToBookmarkItems() as Call_MapExploreItemsToBookmarkItems
          end
        else
          → continues at [M3]
      else
        → continues at [M2]
    else
      → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_DefineMarkers**
  ```
  call ListClear(List=Map_Markers)
  call Map_Zoom_GetLevel(MapId=Map_Id)
  call Action_DefineExploreItems()
  if Map_Zoom_GetLevel.ZoomLevel <= FetchAtZoomLevel_Countries
    call ListAppendAll(List=Map_Markers, SourceList=ConvertList(Cached_CountriesMarkers,  {Value:"MarkerWithWindow"})) as Countries
    end
  else
    if Map_Zoom_GetLevel.ZoomLevel < FetchAtZoomLevel_Entities //and TagList_SelectedTag.Empty
      call ListAppendAll(List=Map_Markers, SourceList=ConvertList(Cached_LocalitiesMarkers,  {Value:"MarkerWithWindow"})) as Localities
      end
    else
      call ListAny(Condition=Value = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, List=TagList_SelectedTag) as ListAny_SupperMeetingTag
      if (SupperMeetings) TagList_SelectedTag.Empty or ListAny_SupperMeetingTag.Result
        call ListFilter(Condition=MapExploreItem.Type = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, SourceList=Cached_GlobalEntities) as Filter_SupperMeetings_Type
        call ListAppendAll(List=Map_Markers, SourceList=ConvertList(Filter_SupperMeetings_Type.FilteredList,  {Value:"MarkerWithWindow"})) as SupperMeetings
        [M1] call ListAny(Condition=Value = Entities.Connect_Entity.Household, List=TagList_SelectedTag) as ListAny_Household
        if (Household) TagList_SelectedTag.Empty or ListAny_Household.Result
          call ListFilter(Condition=Marker.Latlng[0] >= Map_BoundriesForEntitiesZoomLevel.MinLat and\nMarker.Latlng[0] <= Map_BoundriesForEntitiesZoomLevel.MaxLat and\nMarker.Latlng[1] >= Map_BoundriesForEntitiesZoomLevel.MinLong and\n…, SourceList=Cached_Household_Markers) as Household2
          call ListAppendAll(List=Map_Markers, SourceList=Household2.FilteredList) as Household
          [M2] call ListAny(Condition=Value = Entities.Connect_Entity.OneSchoolGlobal, List=TagList_SelectedTag) as ListAny_OneSchool
          if (OneSchool) TagList_SelectedTag.Empty or ListAny_OneSchool.Result
            call ListFilter(Condition=MapExploreItem.Type = Entities.Connect_Entity.OneSchoolGlobal, SourceList=Cached_GlobalEntities) as Filter_OneSchool_Type
            call ListAppendAll(List=Map_Markers, SourceList=ConvertList(Filter_OneSchool_Type.FilteredList,  {Value:"MarkerWithWindow"})) as OneSchool
            end
          else
            end
        else
          → continues at [M2]
      else
        → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_DefineTagList**
  ```
  if TagList.Empty
    call ListAppend(Element={ Text: Entities.Connect_Entity.Household, Identifier: Entities.Connect_Entity.Household, IconId: Entities.UBT_Icons2.HouseFill, IsSelected: False }, List=TagList)
    call ListAppend(Element={ Text: Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, Identifier: Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, IconId: Entities.UBT_Icons2.PartnerExchange, IsSelected: False }, List=TagList) as ListAppend2
    call ListAppend(Element={ Text: Entities.Connect_Entity.OneSchoolGlobal, Identifier: Entities.Connect_Entity.OneSchoolGlobal, IconId: Entities.UBT_Icons2.School, IsSelected: False }, List=TagList) as ListAppend3
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_FlyTo_CurrentLocation**; locals: IsLocked: Boolean; GeoJSONFeatures: Map_GeoJSONStructure List
  ```
  if HasCurrentCoordinates
    assign: GeoJSONFeatures = Cached_CountriesGeoJSONFeatures
    call ListAppendAll(List=GeoJSONFeatures, SourceList=Cached_LocalitiesGeoJSONFeatures)
    call Map_GeoJSON_GetFeatureIdsAtPoint2(GeoJSONFeatures=ConvertList(GeoJSONFeatures,  {Value:"GeoJSONFeatureList"}), Latitude=User_CurrentPosition.Latitude, Longitude=User_CurrentPosition.Longitude)
    [M1] for each Map_GeoJSON_GetFeatureIdsAtPoint2.Matches
      call ListIndexOf(Condition=GeoJSONFeatureList.Id = Map_GeoJSON_GetFeatureIdsAtPoint2.Matches.Current.Id and \nIsLocked, List=GeoJSONFeatures)
      if ListIndexOf.Position = -1 or IsLocked
        → continues at [M1]
      else
        assign: IsLocked = True
        → continues at [M1]
    end for
    [M2] if IsLocked
      call App_Subscription_ShowUpgradePopUp()
      end
    else
      call Map_FlyTo(Latitude=User_CurrentPosition.Latitude, Longitude=User_CurrentPosition.Longitude, MapId=Map_Id, ZoomLevel=20)
      end
  else
    → continues at [M2]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Action_GetUserGeoLocation**
  ```
  call GetUserCurrentGeoLocation()
  if GetUserCurrentGeoLocation.isSuccess
    assign: User_CurrentPosition.Latitude = GetUserCurrentGeoLocation.Latitude; User_CurrentPosition.Longitude = GetUserCurrentGeoLocation.Longitude; HasCurrentCoordinates = GetUserCurrentGeoLocation.isSuccess
    javascript StartUserLocationPolling()
      | if (!window.__ubtMapUserLocationInterval) {
      |     window.__ubtMapUserLocationInterval = setInterval(function () {
      |         $actions.Action_UpdateUserLocation();
      |     }, 30000);
      | }
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_MapAddFixedGeoJSON** inputs: GeoJSONFeatures: Map_GeoJSONStructure List (mandatory)
  ```
  javascript GetFunction() → OnClick_Action: Object
    | $parameters.OnClick_Action = $actions.Event_LeafletMapOnGeoJSON_Clicked
  [M1] for each GeoJSONFeatures
    call Map_GeoJSON_Feature_Add(GeoJSON_Feature=GeoJSONFeatures.Current.GeoJSONFeatureList, MapId=Map_Id, OnClickFunction=GetFunction.OnClick_Action)
    → continues at [M1]
  end for
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_MapExploreItemsToBookmarkItems**; locals: ExploreItems_SupperMeetings: MapExploreItem List; ExploreItems_OneSchoolGlobal: MapExploreItem List; ExploreItems_Households: MapExploreItem List; BookmarkItems_Households: MapExploreItem List; BookmarkItems_OneSchoolGlobal: MapExploreItem List; BookmarkItems_SupperMeetings: MapExploreItem List
  ```
  assign: BookmarkItems_Households = Local_ExploreItems_Empty; BookmarkItems_OneSchoolGlobal = Local_ExploreItems_Empty; BookmarkItems_SupperMeetings = Local_ExploreItems_Empty; ExploreItems_Households = Local_ExploreItems_Households; ExploreItems_OneSchoolGlobal = Local_ExploreItems_OneSchoolGlobal; ExploreItems_SupperMeetings = BookmarkItems_SupperMeetings
  [M1] for each ExploreItems_Households
    aggregate GetMatchingBookmark_Households max=None: sources[LocalBookmark2] filter[LocalBookmark2.ItemId = ExploreItems_Households.Current.Id and LocalBookmark2.BookmarkCategoryId = GetBookmarkCategoryId_ByEntityTypeId(Entities.Connect_Entity.Household) and LocalBookmark2.UserId = GetUserId()]
    if GetMatchingBookmark_Households.List.Length > 0
      call ListAppend(Element=ExploreItems_Households.Current, List=BookmarkItems_Households) as ListAppend_Households
      → continues at [M1]
    else
      → continues at [M1]
  end for
  [M2] for each ExploreItems_OneSchoolGlobal
    aggregate GetMatchingBookmark_OneSchoolGlobal max=None: sources[LocalBookmark2] filter[LocalBookmark2.ItemId = ExploreItems_OneSchoolGlobal.Current.Id and LocalBookmark2.BookmarkCategoryId = GetBookmarkCategoryId_ByEntityTypeId(Entities.Connect_Entity.OneSchoolGlobal) and LocalBookmark2.UserId = GetUserId()]
    if GetMatchingBookmark_OneSchoolGlobal.List.Length > 0
      call ListAppend(Element=ExploreItems_OneSchoolGlobal.Current, List=BookmarkItems_OneSchoolGlobal) as ListAppend_OneSchoolGlobal
      → continues at [M2]
    else
      → continues at [M2]
  end for
  [M3] for each ExploreItems_SupperMeetings
    aggregate GetMatchingBookmark_SupperMeetings max=None: sources[LocalBookmark2] filter[LocalBookmark2.ItemId = ExploreItems_SupperMeetings.Current.Id and LocalBookmark2.BookmarkCategoryId = GetBookmarkCategoryId_ByEntityTypeId(Entities.Connect_Entity.SupperMeetings_aka_Subdivisions) and LocalBookmark2.UserId = GetUserId()]
    if GetMatchingBookmark_SupperMeetings.List.Length > 0
      call ListAppend(Element=ExploreItems_SupperMeetings.Current, List=BookmarkItems_SupperMeetings) as ListAppend_SupperMeetings
      → continues at [M3]
    else
      → continues at [M3]
  end for
  assign: Local_BookmarkItems_Households = BookmarkItems_Households; Local_BookmarkItems_OneSchoolGlobal = Local_BookmarkItems_OneSchoolGlobal; Local_BookmarkItems_SupperMeetings = BookmarkItems_SupperMeetings
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_RecomputeLayerVisibility**; locals: IsVisibleCountries: Boolean; IsVisibleEntities: Boolean; IsVisibleLocalities: Boolean
  ```
  call Map_Zoom_GetLevel(MapId=Map_Id)
  assign: IsVisibleCountries = Map_Zoom_GetLevel.ZoomLevel <= FetchAtZoomLevel_Countries; IsVisibleEntities = Map_Zoom_GetLevel.ZoomLevel >= FetchAtZoomLevel_Entities; IsVisibleLocalities = Map_Zoom_GetLevel.ZoomLevel < FetchAtZoomLevel_Entities and Map_Zoom_GetLevel.ZoomLevel > FetchAtZoomLevel_Countries
  call ListAny(Condition=Value = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, List=TagList_SelectedTag) as ListAny_SupperMeetingTag
  call ListAny(Condition=Value = Entities.Connect_Entity.Household, List=TagList_SelectedTag) as ListAny_Household
  call ListAny(Condition=Value = Entities.Connect_Entity.OneSchoolGlobal, List=TagList_SelectedTag) as ListAny_OneSchool
  call Map_Layer_SetVisible(MapId=Map_Id, Type=Entities.Connect_Entity.Country, Visible=IsVisibleCountries) as SetVisible_Countries
  call Map_Layer_SetVisible(MapId=Map_Id, Type=Entities.Connect_Entity.Locality, Visible=IsVisibleLocalities) as SetVisible_Localities
  call Map_Layer_SetVisible(MapId=Map_Id, Type=Entities.Connect_Entity.Interchange, Visible=IsVisibleLocalities) as SetVisible_Interchange
  call Map_Layer_SetVisible(MapId=Map_Id, Type=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, Visible=IsVisibleEntities and  (TagList_SelectedTag.Empty or ListAny_SupperMeetingTag.Result)) as SetVisible_SupperMeetings
  call Map_Layer_SetVisible(MapId=Map_Id, Type=Entities.Connect_Entity.Household, Visible=IsVisibleEntities  and (TagList_SelectedTag.Empty or ListAny_Household.Result) and HasAllHouseholds) as SetVisible_Household
  call Map_Layer_SetStopgapVisible(MapId=Map_Id, Visible=IsVisibleEntities  and (TagList_SelectedTag.Empty or ListAny_Household.Result) and not HasAllHouseholds) as SetStopgapVisible_Household
  call Map_Layer_SetVisible(MapId=Map_Id, Type=Entities.Connect_Entity.OneSchoolGlobal, Visible=IsVisibleEntities  and (TagList_SelectedTag.Empty or ListAny_OneSchool.Result)) as SetVisible_OneSchool
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_RepopulateMapFromCache**
  ```
  call Map_GetOnMarkerClickedCallback(MapId=Map_Id)
  if (Countries markers) not Cached_CountriesMarkers.Empty
    call Map_Markers_BulkAddChunked(MapId=Map_Id, MarkersWithWindow=ConvertList(Cached_CountriesMarkers,  {Value:"MarkerWithWindow"}), OnClickFunction=Map_GetOnMarkerClickedCallback.Callback, PriorityMaxLat=Map_BoundriesForEntitiesZoomLevel.MaxLat, PriorityMaxLong=Map_BoundriesForEntitiesZoomLevel.MaxLong, PriorityMinLat=Map_BoundriesForEntitiesZoomLevel.MinLat, PriorityMinLong=Map_BoundriesForEntitiesZoomLevel.MinLong, UseTypeBasedClustering=True) as Cached_CountriesMarkers2
    assign: HasLoadedCountries = True; IsMapDataLoading = not (HasLoadedCountries and HasLoadedLocalities and HasLoadedGlobalEntities and HasLoadedHouseholdsFirstChunk)
    [M1] if (Countries GeoJSON) not Cached_CountriesGeoJSONFeatures.Empty
      call ListFilter(Condition=IsLocked, SourceList=Cached_CountriesGeoJSONFeatures) as ListFilter_CountriesGeoJSON
      call Action_MapAddFixedGeoJSON(GeoJSONFeatures=ListFilter_CountriesGeoJSON.FilteredList) as Action_MapAddFixedGeoJSON_Countries
      [M2] if (Localities markers) not Cached_LocalitiesMarkers.Empty
        call Map_Markers_BulkAddChunked(MapId=Map_Id, MarkersWithWindow=ConvertList(Cached_LocalitiesMarkers,  {Value:"MarkerWithWindow"}), OnClickFunction=Map_GetOnMarkerClickedCallback.Callback, PriorityMaxLat=Map_BoundriesForEntitiesZoomLevel.MaxLat, PriorityMaxLong=Map_BoundriesForEntitiesZoomLevel.MaxLong, PriorityMinLat=Map_BoundriesForEntitiesZoomLevel.MinLat, PriorityMinLong=Map_BoundriesForEntitiesZoomLevel.MinLong, UseTypeBasedClustering=True) as Cached_LocalitiesMarkers2
        assign: HasLoadedLocalities = True; IsMapDataLoading = not (HasLoadedCountries and HasLoadedLocalities and HasLoadedGlobalEntities and HasLoadedHouseholdsFirstChunk)
        [M3] if (Localities GeoJSON) not Cached_LocalitiesGeoJSONFeatures.Empty
          call ListFilter(Condition=IsLocked, SourceList=Cached_LocalitiesGeoJSONFeatures) as ListFilter_LocalitiesGeoJSON
          call Action_MapAddFixedGeoJSON(GeoJSONFeatures=ListFilter_LocalitiesGeoJSON.FilteredList) as Action_MapAddFixedGeoJSON_Localities
          [M4] if (Global entities markers) not Cached_GlobalEntities.Empty
            call Map_Markers_BulkAddChunked(MapId=Map_Id, MarkersWithWindow=ConvertList(Cached_GlobalEntities,  {Value:"MarkerWithWindow"}), OnClickFunction=Map_GetOnMarkerClickedCallback.Callback, PriorityMaxLat=Map_BoundriesForEntitiesZoomLevel.MaxLat, PriorityMaxLong=Map_BoundriesForEntitiesZoomLevel.MaxLong, PriorityMinLat=Map_BoundriesForEntitiesZoomLevel.MinLat, PriorityMinLong=Map_BoundriesForEntitiesZoomLevel.MinLong, UseTypeBasedClustering=True) as Cached_GlobalEntities2
            assign: HasLoadedGlobalEntities = True; IsMapDataLoading = not (HasLoadedCountries and HasLoadedLocalities and HasLoadedGlobalEntities and HasLoadedHouseholdsFirstChunk)
            [M5] if (Household markers) not Cached_Household_Markers.Empty
              call Map_Markers_BulkAddChunked(MapId=Map_Id, MarkersWithWindow=Cached_Household_Markers, OnClickFunction=Map_GetOnMarkerClickedCallback.Callback, PriorityMaxLat=Map_BoundriesForEntitiesZoomLevel.MaxLat, PriorityMaxLong=Map_BoundriesForEntitiesZoomLevel.MaxLong, PriorityMinLat=Map_BoundriesForEntitiesZoomLevel.MinLat, PriorityMinLong=Map_BoundriesForEntitiesZoomLevel.MinLong, UseTypeBasedClustering=True) as Cached_Household_Markers2
              assign: HasLoadedHouseholdsFirstChunk = True; IsMapDataLoading = not (HasLoadedCountries and HasLoadedLocalities and HasLoadedGlobalEntities and HasLoadedHouseholdsFirstChunk)
              [M6] call Action_RecomputeLayerVisibility()
              javascript RemoveTransitionEndHandler()
                | window.removeEventListener("dx-navigation-transition-end", $actions.Action_RepopulateMapFromCache); 
              end
            else
              → continues at [M6]
          else
            → continues at [M5]
        else
          → continues at [M4]
      else
        → continues at [M3]
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_ResetSearch**
  ```
  assign: HideSearchBlock = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call ScreenModel_Flush()
    [DISABLED] assign: HideSearchBlock = False
    end
  ```
- **Action_SetProjectedZoomLevel**
  ```
  call Map_GetBoundsByZoomLevel(MapId=Map_Id, ZoomLevel=FetchAtZoomLevel_Entities - 3)
  assign: Map_BoundriesForEntitiesZoomLevel.MaxLat = Map_GetBoundsByZoomLevel.MaxLat; Map_BoundriesForEntitiesZoomLevel.MinLat = Map_GetBoundsByZoomLevel.MinLat; Map_BoundriesForEntitiesZoomLevel.MaxLong = Map_GetBoundsByZoomLevel.MaxLong; Map_BoundriesForEntitiesZoomLevel.MinLong = Map_GetBoundsByZoomLevel.MinLong
  call Map_GetBoundsByZoomLevel(MapId=Map_Id, ZoomLevel=FetchAtZoomLevel_Entities - 2) as Map_GetBoundsByZoomLevelBuffer
  assign: Map_BoundriesForEntitiesZoomLevelBuffer.MaxLat = Map_GetBoundsByZoomLevelBuffer.MaxLat; Map_BoundriesForEntitiesZoomLevelBuffer.MinLat = Map_GetBoundsByZoomLevelBuffer.MinLat; Map_BoundriesForEntitiesZoomLevelBuffer.MaxLong = Map_GetBoundsByZoomLevelBuffer.MaxLong; Map_BoundriesForEntitiesZoomLevelBuffer.MinLong = Map_GetBoundsByZoomLevelBuffer.MinLong
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Action_UpdateUserLocation**
  ```
  call GetUserCurrentGeoLocation()
  if GetUserCurrentGeoLocation.isSuccess
    assign: User_CurrentPosition.Latitude = GetUserCurrentGeoLocation.Latitude; User_CurrentPosition.Longitude = GetUserCurrentGeoLocation.Longitude; HasCurrentCoordinates = True
    if Map_Id <> ""
      call Map_Marker_Delete(MapId=Map_Id, MarkerId="user-location-marker")
      call Map_Marker_Add(MapId=Map_Id, MarkerWithWindow={ Marker: { Id: "user-location-marker", Type: -1, ExtraData: "", Latlng: [ User_CurrentPosition.Latitude, User_CurrentPosition.Longitude ], Options: { Icon: { iconUrl: "", iconRetinaUrl: "", iconSize…, OnClickFunction=NullObject())
      end
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControl_UserInfo_WrapperResult** inputs: UserInformation: Directory_UserCurrent (mandatory)
  ```
  assign (CacheControl_UserInfo): LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation; LocalCacheControl_UserInformation.isFetched = True
  if not HasCurrentCoordinates and (\n    UserInformation.Directory_UserCurrent_Member.Address.Lat <> 0 and\n    UserInformation.Directory_UserCurrent_Member.Address.Long <> 0\n)
    assign: User_CurrentPosition.Latitude = UserInformation.Directory_UserCurrent_Member.Address.Lat; User_CurrentPosition.Longitude = UserInformation.Directory_UserCurrent_Member.Address.Long
    [M1] assign: User_AddressLocation.Latitude = UserInformation.Directory_UserCurrent_Member.Address.Lat; User_AddressLocation.Longitude = UserInformation.Directory_UserCurrent_Member.Address.Long
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Delete_TestOpenSettingsPage**
  ```
  call OpenAppSettings()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_BackNavigation** inputs: BackNavigationEvent: Object (mandatory)
  ```
  if IsSidebarOpened
    call PreventNavigation(NavigationEvent=BackNavigationEvent) as PreventNavigation2
    call SidebarClose(WidgetId=Sidebar_Search.Id   )
    end
  else
    if IsExploreSheetOpened
      call PreventNavigation(NavigationEvent=BackNavigationEvent) as PreventNavigation3
      call BottomSheetClose(WidgetId=ExploreBottomSheet_Id) as BottomSheetClose_Explore
      end
    else
      if IsBookmarkedSheetOpened
        call PreventNavigation(NavigationEvent=BackNavigationEvent) as PreventNavigation_Bookmarked
        call BottomSheetClose(WidgetId=BookmarkedBottomSheet_Id) as BottomSheetClose_Bookmarked
        end
      else
        if IsDetailSheetOpened
          call PreventNavigation(NavigationEvent=BackNavigationEvent) as PreventNavigation4
          call BottomSheetClose(WidgetId=DetailsBottomSheet_Id) as BottomSheetClose_Details
          end
        else
          if (Settings) ActiveBottomBarItem = Entities.Connect_BottomBar_Items.Settings
            call PreventNavigation(NavigationEvent=BackNavigationEvent)
            javascript UpdateBottomBarMenu(BottomBarItemId=Entities.Connect_BottomBar_Items.Explore)
              | $public.View.render().then(()=>$actions.OnClick_BottomBarMenu($parameters.BottomBarItemId))
              | 
            end
          else
            end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
    end
    end
    [DISABLED] call OnClick_BottomBarMenu(Item=Entities.Connect_BottomBar_Items.Explore)
    end
  ```
- **Event_BottomSheet_DetailsOnClose**
  ```
  if isDetailFromExplore
    call BottomSheetOpen(WidgetId=ExploreBottomSheet_Id)
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Event_BottomSheetBookmarked_OnToggle** inputs: IsOpen: Boolean (mandatory)
  ```
  assign: IsBookmarkedSheetOpened = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_BottomSheetBookmarkedInitialized** inputs: Id: Text (mandatory)
  ```
  assign: BookmarkedBottomSheet_Id = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_BottomSheetDetail_Navigate**
  ```
  assign: IsDetailSheetOpened = False
  call ScreenModel_Flush()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_BottomSheetDetails_OnToggle** inputs: IsOpen: Boolean (mandatory)
  ```
  assign: IsDetailSheetOpened = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_BottomSheetDetailsInitialized** inputs: Id: Text (mandatory)
  ```
  assign: DetailsBottomSheet_Id = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_BottomSheetExplore_OnToggle** inputs: IsOpen: Boolean (mandatory)
  ```
  assign: IsExploreSheetOpened = IsOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_BottomSheetNearMeInitialized** inputs: Id: Text (mandatory)
  ```
  assign: ExploreBottomSheet_Id = Id
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_CacheControl_Countries** inputs: Countries_Markers: Map_MarkersStructure List (mandatory)
  ```
  assign: Cached_CountriesMarkers = Countries_Markers
  call Map_GetOnMarkerClickedCallback(MapId=Map_Id)
  call Map_Markers_BulkAddChunked(MapId=Map_Id, MarkersWithWindow=ConvertList(Countries_Markers,  {Value:"MarkerWithWindow"}), OnClickFunction=Map_GetOnMarkerClickedCallback.Callback, PriorityMaxLat=Map_BoundriesForEntitiesZoomLevel.MaxLat, PriorityMaxLong=Map_BoundriesForEntitiesZoomLevel.MaxLong, PriorityMinLat=Map_BoundriesForEntitiesZoomLevel.MinLat, PriorityMinLong=Map_BoundriesForEntitiesZoomLevel.MinLong, UseTypeBasedClustering=True)
  assign: HasLoadedCountries = True; IsMapDataLoading = not (HasLoadedCountries and HasLoadedLocalities and HasLoadedGlobalEntities and HasLoadedHouseholdsFirstChunk)
  call Action_RecomputeLayerVisibility()
  call Action_DefineMarkers()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_CacheControl_CountriesGeoJSON** inputs: GeoJSONFeatures: Map_GeoJSONStructure List (mandatory)
  ```
  assign: Cached_CountriesGeoJSONFeatures = GeoJSONFeatures
  call ListFilter(Condition=IsLocked, SourceList=GeoJSONFeatures)
  call Action_MapAddFixedGeoJSON(GeoJSONFeatures=ListFilter.FilteredList)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_CacheControl_GlobalEntities** inputs: GlobalLocations_Markers: MapExploreItem, MarkerWithWindow Record List (mandatory)
  ```
  assign: Cached_GlobalEntities = GlobalLocations_Markers; IsGlobalEntitiesFetched = True
  call Map_GetOnMarkerClickedCallback(MapId=Map_Id)
  call Map_Markers_BulkAddChunked(MapId=Map_Id, MarkersWithWindow=ConvertList(GlobalLocations_Markers,  {Value:"MarkerWithWindow"}), OnClickFunction=Map_GetOnMarkerClickedCallback.Callback, PriorityMaxLat=Map_BoundriesForEntitiesZoomLevel.MaxLat, PriorityMaxLong=Map_BoundriesForEntitiesZoomLevel.MaxLong, PriorityMinLat=Map_BoundriesForEntitiesZoomLevel.MinLat, PriorityMinLong=Map_BoundriesForEntitiesZoomLevel.MinLong, UseTypeBasedClustering=True)
  assign: HasLoadedGlobalEntities = True; IsMapDataLoading = not (HasLoadedCountries and HasLoadedLocalities and HasLoadedGlobalEntities and HasLoadedHouseholdsFirstChunk)
  call Action_RecomputeLayerVisibility()
  call Map_Zoom_GetLevel(MapId=Map_Id)
  if Map_Zoom_GetLevel.ZoomLevel < FetchAtZoomLevel_Entities
    end
  else
    call Action_DefineMarkers()
    call Action_DefineExploreItems()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Event_CacheControl_Household_IsDataFetched** inputs: In_IsFetched: Boolean (mandatory)
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] assign: isExploreItemsLoading = not In_IsFetched
    end
  ```
- **Event_CacheControl_Households** inputs: Household_Markers: MarkerWithWindow List (mandatory); Event_HasAllHouseholds: Boolean (mandatory)
  ```
  call ListFilter(Condition=True/*Marker.Latlng[0] >= Map_BoundriesForEntitiesZoomLevel.MinLat and\nMarker.Latlng[0] <= Map_BoundriesForEntitiesZoomLevel.MaxLat and\nMarker.Latlng[1] >= Map_BoundriesForEntitiesZoomLevel.MinLong…, SourceList=Household_Markers) as Household
  assign: Cached_Household_Markers = Household.FilteredList
  if (Is this the unfiltered (all-households) delivery?) Event_HasAllHouseholds
    if Event_HasAllHouseholds and not HasAllHouseholds
      assign (Claim add-loop before it starts (prevents reentrant duplicate adds)): HasAllHouseholds = True
      [M1] call Map_GetOnMarkerClickedCallback(MapId=Map_Id)
      call Map_Markers_BulkAddChunked(MapId=Map_Id, MarkersWithWindow=Household_Markers, OnClickFunction=Map_GetOnMarkerClickedCallback.Callback, PriorityMaxLat=Map_BoundriesForEntitiesZoomLevel.MaxLat, PriorityMaxLong=Map_BoundriesForEntitiesZoomLevel.MaxLong, PriorityMinLat=Map_BoundriesForEntitiesZoomLevel.MinLat, PriorityMinLong=Map_BoundriesForEntitiesZoomLevel.MinLong, UseStopgapLayer=not Event_HasAllHouseholds, UseTypeBasedClustering=True)
      assign: HasLoadedHouseholdsFirstChunk = True; IsMapDataLoading = not (HasLoadedCountries and HasLoadedLocalities and HasLoadedGlobalEntities and HasLoadedHouseholdsFirstChunk)
      call Action_RecomputeLayerVisibility()
      [M2] call Map_Zoom_GetLevel(MapId=Map_Id)
      assign: HasAllHouseholds = HasAllHouseholds or Event_HasAllHouseholds
      if Map_Zoom_GetLevel.ZoomLevel < FetchAtZoomLevel_Entities
        end
      else
        call Action_DefineMarkers()
        end
    else
      assign (<<): 
      → continues at [M2]
  else
    call Map_ClearStopgapLayer(LayerKey="ll_map_marker_cluster_layer_stopgap", MapId=Map_Id) as Map_ClearStopgapLayer2
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Event_CacheControl_HouseholdsExploreItems** inputs: MapExploreItem: MapExploreItem List (mandatory); Event_HasAllExploreItems: Boolean (mandatory)
  ```
  call ListFilter(Condition=True/*Latitude >= Map_BoundriesForEntitiesZoomLevel.MinLat and\nLatitude <= Map_BoundriesForEntitiesZoomLevel.MaxLat and\nLongitude >= Map_BoundriesForEntitiesZoomLevel.MinLong and\nLongitude <= Map_…, SourceList=MapExploreItem) as ExploreItems
  assign: Cached_Household_MapExploreItem = ExploreItems.FilteredList
  call Action_DefineExploreItems()
  assign: HasAllHouseholdExploreItems = HasAllHouseholdExploreItems or Event_HasAllExploreItems
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_CacheControl_Localities** inputs: Localities_Markers: Map_MarkersStructure List (mandatory)
  ```
  assign: Cached_LocalitiesMarkers = Localities_Markers
  call Map_GetOnMarkerClickedCallback(MapId=Map_Id)
  call Map_Markers_BulkAddChunked(MapId=Map_Id, MarkersWithWindow=ConvertList(Localities_Markers,  {Value:"MarkerWithWindow"}), OnClickFunction=Map_GetOnMarkerClickedCallback.Callback, PriorityMaxLat=Map_BoundriesForEntitiesZoomLevel.MaxLat, PriorityMaxLong=Map_BoundriesForEntitiesZoomLevel.MaxLong, PriorityMinLat=Map_BoundriesForEntitiesZoomLevel.MinLat, PriorityMinLong=Map_BoundriesForEntitiesZoomLevel.MinLong, UseTypeBasedClustering=True)
  assign: HasLoadedLocalities = True; IsMapDataLoading = not (HasLoadedCountries and HasLoadedLocalities and HasLoadedGlobalEntities and HasLoadedHouseholdsFirstChunk)
  call Action_RecomputeLayerVisibility()
  call Action_DefineMarkers()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_CacheControl_LocalitiesGeoJSON** inputs: GeoJSONFeatures: Map_GeoJSONStructure List (mandatory)
  ```
  assign: Cached_LocalitiesGeoJSONFeatures = GeoJSONFeatures
  call ListFilter(Condition=IsLocked, SourceList=GeoJSONFeatures)
  call Action_MapAddFixedGeoJSON(GeoJSONFeatures=ListFilter.FilteredList)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_HorizontalTagListChanged** inputs: UpdatedTagList: Tag List (mandatory)
  ```
  call ListFilter(Condition=IsSelected, SourceList=UpdatedTagList)
  assign: TagList_SelectedTag = ConvertList(ListFilter.FilteredList,  {Value:"TextToIdentifier(Identifier)"})
  call Action_DefineMarkers()
  call Action_RecomputeLayerVisibility()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_Layout_DetailPageOnReadyEvent** inputs: WrapperContainerId: Text (mandatory)
  ```
  call JSUtils_SetStyleProperty(ObjectId=WrapperContainerId, PropertyName="--ubt-bottomsheet-handler-preview--offset", PropertyValue=BottomSheet_HandlerOffsetHeight) as JSUtils_SetStyleProperty2
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_LeafletMapOnGeoJSON_Clicked** inputs: GeoJSONId: Text (mandatory); Type: Text (mandatory); ExtraData: Text (mandatory); locals: GeoJSONFeatures: Map_GeoJSONStructure List
  ```
  if (Country) Type = Entities.Connect_Entity.Country
    assign: GeoJSONFeatures = Cached_CountriesGeoJSONFeatures
    [M1] call ListAny(Condition=GeoJSONFeatureList.Id = GeoJSONId and IsLocked, List=GeoJSONFeatures)
    if ListAny.Result
      call App_Subscription_ShowUpgradePopUp()
      end
    else
      end
  else
    if (Locality) Type = Entities.Connect_Entity.Locality
      assign: GeoJSONFeatures = Cached_LocalitiesGeoJSONFeatures
      → continues at [M1]
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **Event_LeafletMapOnGoToMyLocation_Clicked** inputs: MapId: Text (mandatory); locals: Latitude: Decimal; Longitude: Decimal
  ```
  if User_AddressLocation.Latitude <> 0 and\nUser_AddressLocation.Longitude <> 0
    assign: Latitude = User_AddressLocation.Latitude; Longitude = User_AddressLocation.Longitude
    [M1] if User_CurrentPosition.Latitude <> 0 and\nUser_CurrentPosition.Longitude <> 0
      assign: Latitude = User_CurrentPosition.Latitude; Longitude = User_CurrentPosition.Longitude
      [M2] if Latitude <> 0 and\nLongitude <> 0
        call Action_FlyTo_CurrentLocation()
        end
      else
        assign: ShowLocationUnavailablePopup = True
        end
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Event_LeafletMapOnInitialized** inputs: MapId: Text (mandatory)
  ```
  assign: Map_Id = MapId
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Repopulate from retained screen cache (back-navigation)?) IsRestoredFromCache.IsRestoredFromCache and \n(not Cached_CountriesMarkers.Empty or not Cached_LocalitiesMarkers.Empty or not Cached_GlobalEntities.Empty or not Cached_Household_Markers.Empty)
    call Action_RepopulateMapFromCache()
    [M1] if In_InitialLatitude <> 0 or \nIn_InitialLongitude <> 0\n
      call Map_FlyTo(Latitude=In_InitialLatitude, Longitude=In_InitialLongitude, MapId=Map_Id, ZoomLevel=In_InitialZoomLevel)
      [M2] if HasCurrentCoordinates
        call Action_UpdateUserLocation()
        end
      else
        end
    else
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_LeafletMapOnMarker_Clicked** inputs: MarkerId: Text (mandatory); Type: Text (mandatory); Lat: Decimal (mandatory); Long: Decimal (mandatory); locals: IsSkipNavigation: Boolean; IsLocked: Boolean; GeoJSONFeatures: Map_GeoJSONStructure List; Markers: Map_MarkersStructure List; Name: Text
  ```
  call Map_GeoJSON_Feature_Remove(GeoJSONId=Map_ActiveGeoJSONFeatureId, MapId=Map_Id)
  call ListIndexOf(Condition=Marker.Type = Type and Marker.Id = MarkerId, List=Map_Markers)
  if (Overwrite with marker coordinates?) ListIndexOf.Position <> -1 and \n(\n    Map_Markers[ListIndexOf.Position].Marker.Latlng[0] <> 0 or\n    Map_Markers[ListIndexOf.Position].Marker.Latlng[1] <> 0\n)
    assign: Lat = Map_Markers[ListIndexOf.Position].Marker.Latlng[0]; Long = Map_Markers[ListIndexOf.Position].Marker.Latlng[1]
    [M1] if (Country or Locality) Type = Entities.Connect_Entity.Country or Type = Entities.Connect_Entity.Locality 
      if (Country) Type = Entities.Connect_Entity.Country
        assign: GeoJSONFeatures = Cached_CountriesGeoJSONFeatures; Markers = Cached_CountriesMarkers
        [M2] call Get_ActiveGeoJsonFeatureId(GeoJSONFeatures=GeoJSONFeatures, MapId=Map_Id, MarkerId=MarkerId, Markers=Markers)
        assign: IsLocked = Get_ActiveGeoJsonFeatureId.Islocked; Map_ActiveGeoJSONFeatureId = Get_ActiveGeoJsonFeatureId.ActiveGeoJsonFeatureId ; IsSkipNavigation = Map_ActiveGeoJSONFeatureId <> ""
        if IsLocked
          call App_Subscription_ShowUpgradePopUp()
          end
        else
          [M3] if Type = Entities.Connect_Entity.Household
            call ListIndexOf(Condition=Id = MarkerId, List=Local_ExploreItems_Households) as ListIndexOf_ExploreItem
            if ListIndexOf_ExploreItem.Position <> -1
              assign: Name = Local_ExploreItems_Households[ListIndexOf_ExploreItem.Position].Name
              [M4] call Event_Map_ExploreList_Section_ItemClicked(DurationInSeconds=0, isFromExplore=False, IsFromList=False, IsSkipNavigation=IsSkipNavigation, MapExploreItem={ Name: Name, Latitude: Lat, Longitude: Long, Type: TextToIdentifier(Type), Id: MarkerId })
              end
            else
              → continues at [M4]
          else
            → continues at [M4]
      else
        assign: GeoJSONFeatures = Cached_LocalitiesGeoJSONFeatures; Markers = Cached_LocalitiesMarkers
        → continues at [M2]
    else
      → continues at [M3]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Event_LeafletMapOnMoveEnd** inputs: MapVisibleBoundaries: MapVisibleBoundaries (mandatory); locals: IsInsideViewBuffer: Boolean
  ```
  assign: Map_VisibleBoundaries = MapVisibleBoundaries
  call Map_Zoom_GetLevel(MapId=Map_Id) as Map_Zoom_GetLevel_Prefetch
  javascript PrefetchTileBuffer(MaxLat=Round(MapVisibleBoundaries.MaxLat, 6), MaxLong=Round(MapVisibleBoundaries.MaxLong, 6), MinLat=Round(MapVisibleBoundaries.MinLat, 6), MinLong=Round(MapVisibleBoundaries.MinLong, 6), ZoomLevel=Map_Zoom_GetLevel_Prefetch.ZoomLevel)
    | var minLng = $parameters.MinLong;
    | var maxLng = $parameters.MaxLong;
    | var minLat = $parameters.MinLat;
    | var maxLat = $parameters.MaxLat;
    | var z = $parameters.ZoomLevel;
    | var buffer = 2;
    | 
    | function lon2tileX(lon) { return Math.floor((lon + 180) / 360 * Math.pow(2, z)); }
    | function lat2tileY(lat) {
    |     var latRad = lat * Math.PI / 180;
    |     return Math.floor((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * Math.pow(2, z));
    | }
    | 
    | var maxTileIndex = Math.pow(2, z) - 1;
    | var minX = Math.max(0, lon2tileX(minLng) - buffer);
    | var maxX = Math.min(maxTileIndex, lon2tileX(maxLng) + buffer);
    | var minY = Math.max(0, lat2tileY(maxLat) - buffer);
    | var maxY = Math.min(maxTileIndex, lat2tileY(minLat) + buffer);
    | 
    | var urlTemplate = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}';
    | var count = 0;
    | var maxPrefetch = 200;
    | for (var x = minX; x <= maxX && count < maxPrefetch; x++) {
    |     for (var y = minY; y <= maxY && count < maxPrefetch; y++) {
    |         var url = urlTemplate.replace('{z}', z).replace('{y}', y).replace('{x}', x);
    |         var img = new Image();
    |         img.src = url;
    |         img.decode().catch(function () {});
    |         count++;
    |     }
    | }
  if Map_BoundriesForEntitiesZoomLevel.MaxLat <> 0 or\nMap_BoundriesForEntitiesZoomLevel.MinLat <> 0 or\nMap_BoundriesForEntitiesZoomLevel.MaxLong <> 0 or\nMap_BoundriesForEntitiesZoomLevel.MinLong <> 0
    call Map_IsViewportInsideZoomLevel(MapId=Map_Id, MaxLat=Map_BoundriesForEntitiesZoomLevelBuffer.MaxLat, MaxLong=Map_BoundriesForEntitiesZoomLevelBuffer.MaxLong, MinLat=Map_BoundriesForEntitiesZoomLevelBuffer.MinLat, MinLong=Map_BoundriesForEntitiesZoomLevelBuffer.MinLong)
    assign: IsInsideViewBuffer = Map_IsViewportInsideZoomLevel.IsInsideZoomLevel
    [M1] call Map_Zoom_GetLevel(MapId=Map_Id)
    if Map_Zoom_GetLevel.ZoomLevel >= FetchAtZoomLevel_Entities and IsInsideViewBuffer
      [M2] call Action_DefineExploreItems()
      [M3] call Action_RecomputeLayerVisibility()
      end
    else
      if (Clear projected coordinates?) Map_Zoom_GetLevel.ZoomLevel < FetchAtZoomLevel_Entities
        assign: Map_BoundriesForEntitiesZoomLevelBuffer.MaxLat = 0; Map_BoundriesForEntitiesZoomLevelBuffer.MinLat = 0; Map_BoundriesForEntitiesZoomLevelBuffer.MaxLong = 0; Map_BoundriesForEntitiesZoomLevelBuffer.MinLong = 0
        [M4] if (Is to show localities and is showing localities?) Map_Zoom_GetLevel.ZoomLevel < FetchAtZoomLevel_Entities and\nMap_Zoom_GetLevel.ZoomLevel > FetchAtZoomLevel_Countries and\nMap_Markers.Current.Marker.Type = Entities.Connect_Entity.Locality
          [M5] if (Should show explore items at this zoom?) Map_Zoom_GetLevel.ZoomLevel >= FetchAtZoomLevel_Entities
            → continues at [M2]
          else
            call ListClear(List=Local_ExploreItems_Households) as ClearExploreItems_Households
            call ListClear(List=Local_ExploreItems_SupperMeetings) as ClearExploreItems_SupperMeetings
            call ListClear(List=Local_ExploreItems_OneSchoolGlobal) as ClearExploreItems_OneSchoolGlobal
            assign: isExploreItemsEmpty = True
            → continues at [M3]
        else
          if (Is to show countries and is showing countries?) Map_Zoom_GetLevel.ZoomLevel <= FetchAtZoomLevel_Countries and\nMap_Markers.Current.Marker.Type = Entities.Connect_Entity.Country
            → continues at [M5]
          else
            if (Update projected coordinates?) Map_Zoom_GetLevel.ZoomLevel >= FetchAtZoomLevel_Entities
              call Action_SetProjectedZoomLevel()
              [M6] call Action_DefineExploreItems() as Action_DefineExploreItems2
              call Action_DefineMarkers()
              → continues at [M5]
            else
              → continues at [M6]
      else
        → continues at [M4]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_LeafletMapOnZoomEnd** inputs: ZoomLevel: Integer (mandatory)
  ```
  assign: Map_LastReportedZoomLevel = ZoomLevel
  call Action_RecomputeLayerVisibility()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_Map_ExploreList_Section_ActionClicked** inputs: Type: Connect_Entity Identifier (mandatory)
  ```
  assign: ExploreItems_SeeAllSelected = Type
  call BottomSheet_SetDragEnabled(In_IsEnabled=Type = NullTextIdentifier(), In_SheetId=ExploreBottomSheet_Id) as BottomSheet_SetDragEnabled_Enabled
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_Map_ExploreList_Section_ItemClicked** inputs: MapExploreItem: MapExploreItem (mandatory); DurationInSeconds: Decimal = 1; isFromExplore: Boolean = True; IsFromList: Boolean (mandatory); CustomZoomLevel: Integer = -1; IsSkipNavigation: Boolean; locals: ZoomLevel: Integer = 11
  ```
  if MapExploreItem.Type = Entities.Connect_Entity.Household or \nMapExploreItem.Type = Entities.Connect_Entity.OneSchoolGlobal or \nMapExploreItem.Type = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions
    assign: ZoomLevel = 20
    [M1] call Map_Zoom_GetLevel(MapId=Map_Id)
    call BottomSheetClose(WidgetId=ExploreBottomSheet_Id)
    assign: Local_SelectedExploreItem = ConvertRecord(MapExploreItem,  {"MapExploreItem.Name":"Name","MapExploreItem.Address":"Address","MapExploreItem.Latitude":"Latitude","MapExploreItem.Longitude":"Longitude","MapExploreItem.PhotoURL":"PhotoURL","MapExploreItem.PhotoURL2":"PhotoURL2","MapExploreItem.Type":"Type","MapExploreItem.Id":"I…; isDetailFromExplore = isFromExplore
    if (MapExploreItem.Latitude <> 0 or MapExploreItem.Longitude <> 0) and \n(User_CurrentPosition.Latitude <> 0 or User_CurrentPosition.Longitude<> 0)
      call Turf_DistanceBetwwen2Coordinates(Point1=User_CurrentPosition, Point2={ Latitude: Local_SelectedExploreItem.MapExploreItem.Latitude, Longitude: Local_SelectedExploreItem.MapExploreItem.Longitude })
      assign: Local_SelectedExploreItem.Distance = Turf_DistanceBetwwen2Coordinates.DistanceInKm
      [M2] if CustomZoomLevel <> -1 and not IsSkipNavigation
        call Map_FlyTo(Duration=DurationInSeconds, isAnimate=True, Latitude=Round(MapExploreItem.Latitude, 8), Longitude=Round(MapExploreItem.Longitude, 8), MapId=Map_Id, ZoomLevel=CustomZoomLevel) as Map_FlyTo_CustomZoomLevel
        [M3] if DurationInSeconds > 0
          javascript OpenDetailSheet(BottomSheet=DetailsBottomSheet_Id, DurationInMs=1000*DurationInSeconds)
            | setTimeout(function() {
            |     $actions.BottomSheetOpen($parameters.BottomSheet);
            | },$parameters.DurationInMs)
          end
        else
          call BottomSheetOpen(WidgetId=DetailsBottomSheet_Id)
          end
      else
        if not IsSkipNavigation and\n(IsFromList or \nZoomLevel > Map_Zoom_GetLevel.ZoomLevel)
          call Map_FlyTo(Duration=DurationInSeconds, isAnimate=True, Latitude=Round(MapExploreItem.Latitude, 8), Longitude=Round(MapExploreItem.Longitude, 8), MapId=Map_Id, ZoomLevel=ZoomLevel)
          → continues at [M3]
        else
          → continues at [M3]
    else
      assign: Local_SelectedExploreItem.Distance = -1
      → continues at [M2]
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **event_Map_LocationInfoPopupEvent_CancelClicked**
  ```
  assign: ShowLocationUnavailablePopup = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_Navigation**
  ```
  call Map_GetCurrentView(MapId=Map_Id)
  assign: RestoreLatitude = Map_GetCurrentView.Latitude; RestoreLongitude = Map_GetCurrentView.Longitude; RestoreZoomLevel = Map_GetCurrentView.ZoomLevel
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_SearchResultClick** inputs: Event_SearchResult: SearchResult (mandatory); locals: ZoomLevel: Integer = 20; IsSkipNavigation: Boolean
  ```
  call SidebarClose(WidgetId=Sidebar_Search.Id)
  if Event_SearchResult.Latitude = 0 and\nEvent_SearchResult.Longitude = 0
    assign: ZoomLevel = Map_LastReportedZoomLevel; IsSkipNavigation = True
    assign (>>): 
    [M1] call Event_Map_ExploreList_Section_ItemClicked(CustomZoomLevel=ZoomLevel, DurationInSeconds=1, isFromExplore=False, IsFromList=False, IsSkipNavigation=IsSkipNavigation, MapExploreItem={ Name: Event_SearchResult.Name, Latitude: Event_SearchResult.Latitude, Longitude: Event_SearchResult.Longitude, Type: If(Event_SearchResult.Type <> Entities.Connect_Entity.Member, Event_SearchResult…)
    end
  else
    if (Locality) Event_SearchResult.Type = Entities.Connect_Entity.Locality
      assign: ZoomLevel = FetchAtZoomLevel_Entities + 1
      assign: 
      [M2] assign: 
      → continues at [M1]
    else
      if (Countries) Event_SearchResult.Type = Entities.Connect_Entity.Country
        assign: ZoomLevel = FetchAtZoomLevel_Countries
        → continues at [M2]
      else
        → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_PreferencesAll**
  ```
  assign: FetchData_MapPreferences.DisplayHouseholdName = FetchData_MapPreferences.DisplayAllDetails; FetchData_MapPreferences.DisplayHouseholdAddress = FetchData_MapPreferences.DisplayAllDetails
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnChange_PreferencesItem**
  ```
  assign: FetchData_MapPreferences.DisplayAllDetails = FetchData_MapPreferences.DisplayHouseholdName and FetchData_MapPreferences.DisplayHouseholdAddress
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Back**
  ```
  navigate → (Previous Screen)() transition=UseHistory
  ```
- **OnClick_BottomBarMenu** inputs: Item: Connect_BottomBar_Items Identifier (mandatory)
  ```
  assign: ActiveBottomBarItem = Item
  if (Settings) ActiveBottomBarItem = Entities.Connect_BottomBar_Items.Settings
    call SidebarOpen(WidgetId=Sidebar_Settings.Id)
    end
  else
    call SidebarClose(WidgetId=Sidebar_Settings.Id)
    end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call BottomSheetOpen()
    [DISABLED] if ActiveBottomBarItem = Entities.Connect_BottomBar_Items.Bookmarked
      → continues at <BottomSheetOpen>
    else
    end
  ```
- **OnClick_EnableLocation**
  ```
  call IsCordovaDefined()
  if (Check if IsCordovaDefined IsLoaded) IsCordovaDefined.IsLoaded
    call OpenAppSettings()
    call Action_GetUserGeoLocation()
    assign: ShowLocationUnavailablePopup = False
    if HasCurrentCoordinates
      call Action_UpdateUserLocation()
      call Action_FlyTo_CurrentLocation()
      end
    else
      end
  else
    call GetUserCurrentGeoLocation()
    assign: ShowLocationUnavailablePopup = False
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **OnClick_MyAddress**
  ```
  if User_AddressLocation.Latitude <> 0 and \nUser_AddressLocation.Longitude <> 0
    call Map_FlyTo(Latitude=User_AddressLocation.Latitude, Longitude=User_AddressLocation.Longitude, MapId=Map_Id, ZoomLevel=20)
    [M1] call BottomSheetClose(WidgetId=ExploreBottomSheet_Id)
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_PreferencesSubmit**; locals: ErrorMessage: Text = "Couldn't save changes. Try again."
  ```
  assign: isSubmitingPreferences = True
  call-server Update_VisibilityPreferences(In_VisibilityPreferences={ DisplayHouseholdName: FetchData_MapPreferences.DisplayHouseholdName, DisplayAddress: FetchData_MapPreferences.DisplayHouseholdAddress })
  call FeedbackMessage_AutoClose(Message="Changes saved", MessageType=Entities.UBT_MessageType.Success)
  call Action_CloseSettingsSidebar()
  end
  on exception All Exceptions (log=True)
  assign: isSubmitingPreferences = False
  raise BubbleGenericException: ErrorMessage
  on exception Communication Exception (log=True)
  assign: isSubmitingPreferences = False
  raise BubbleCommunicationException: CommunicationException.ExceptionMessage
  on exception Not Registered (log=True)
  raise Not Registered: NotRegistered.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_ViewNearMyHousehold**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnFocus_SearchInput**
  ```
  call JSUtilis_Element_Operations_Focus(Id=Div_Content.Id)
  call SidebarOpen(WidgetId=Sidebar_Search.Id)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnToggle_SidebarSearch** inputs: SidebarId: Text (mandatory); IsOpen: Boolean (mandatory)
  ```
  assign: IsSidebarOpened = IsOpen
  if IsOpen
    assign: HideSearchBlock = False
    end
  else
    javascript ResetSearch(SidebarId=SidebarId)
      | const sidebarWrapper = document.getElementById($parameters.SidebarId);
      | if (sidebarWrapper) {
      |     const sidebar = sidebarWrapper.querySelector(".osui-sidebar");
      |     const handleTransitionEnd = (event) => {
      |         if (event.target == sidebar) {
      |             sidebar.removeEventListener("transitionend", handleTransitionEnd);
      |             $actions.Action_ResetSearch();
      |         }
      |     };
      |     sidebar.addEventListener("transitionend", handleTransitionEnd);
      | }
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnToggle_SidebarSettings** inputs: SidebarId: Text (mandatory); IsOpen: Boolean (mandatory)
  ```
  if IsOpen
    end
  else
    call Action_CloseSettingsSidebar()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnDestroy**
  ```
  javascript StopUserLocationPolling()
    | if (window.__ubtMapUserLocationInterval) {
    |     clearInterval(window.__ubtMapUserLocationInterval);
    |     window.__ubtMapUserLocationInterval = null;
    | }
  javascript RemoveTransitionEndHandler()
    | window.removeEventListener("dx-navigation-transition-end", $actions.Action_RepopulateMapFromCache); 
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**; locals: LoadingExploreItem: MapExploreItem
  ```
  assign: IsReady = False
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if IsRestoredFromCache.IsRestoredFromCache
    javascript GetTransitionEndHandler()
      | window.addEventListener("dx-navigation-transition-end", $actions.Action_RepopulateMapFromCache); 
    assign: IsMapDataLoading = True; HasLoadedCountries =  Cached_CountriesMarkers.Empty; HasLoadedLocalities = Cached_LocalitiesMarkers.Empty; HasLoadedGlobalEntities =  Cached_GlobalEntities.Empty; HasLoadedHouseholdsFirstChunk = Cached_Household_Markers.Empty
    if RestoreLatitude <> 0 and \nRestoreLongitude <> 0
      assign: In_InitialLongitude = RestoreLongitude; In_InitialLatitude = RestoreLatitude; In_InitialZoomLevel = RestoreZoomLevel; RestoreLatitude = 0; RestoreLongitude = 0; RestoreZoomLevel = 0; Map_LastReportedZoomLevel = In_InitialZoomLevel
      end
    else
      end
  else
    assign: Map_Refresh = CurrDateTime()
    javascript JavaScript1()
      | document.body.classList.add("ubt-map-layout")
    call Action_DefineTagList()
    if Local_ExploreItems_Households.Empty
      assign: LoadingExploreItem.Name = "LoadingName"; LoadingExploreItem.Address = "LoadingAddress"; LoadingExploreItem.Type = Entities.Connect_Entity.Household; LoadingExploreItem.Latitude = -1; LoadingExploreItem.Longitude = -1
      call ListAppend(Element=LoadingExploreItem, List=Local_ExploreItems_SupperMeetings)
      call ListAppend(Element=LoadingExploreItem, List=Local_ExploreItems_SupperMeetings) as ListAppend2
      call ListAppend(Element=LoadingExploreItem, List=Local_ExploreItems_SupperMeetings) as ListAppend3
      end
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnReady**
  ```
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if IsRestoredFromCache.IsRestoredFromCache
    assign: IsReady = True
    end
  else
    call Action_GetUserGeoLocation()
    refresh data FetchData_MapPreferences
    assign: IsReady = True
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
