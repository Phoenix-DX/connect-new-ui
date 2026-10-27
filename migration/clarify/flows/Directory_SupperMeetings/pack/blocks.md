# Pack of UI flow Directory_SupperMeetings (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: SupperMeeting_DetailsBlock, SupperMeeting_HouseholdList, SupperMeeting_ImageCard_Content, SupperMeeting_ImageCard_Content_IconText, SupperMeeting_ImageCard_Content_Statistics
Blocks of other UBTConnect flows that the flow uses (transitive): 36

## Block SupperMeeting_DetailsBlock (flow Directory_SupperMeetings)
- public: False
- input parameters: In_SubdivsionId: Long Integer (mandatory)
- events: -
- local variables: -
- lifecycle: OnReady → ScreenEvent_OnReady
- used by (UBTConnect): EntitiesCarouse_lSupperMeetingDetails, SupperMeeting_Details

#### Data sources
- data action **GetSubdivision** fetch=OnDemand; outputs: Subdivision: UI_Screen_SubdivisionDetails
  ```
  call-server GetSubdivisionDetails_BySubdivisionId(In_SubdivisionId=In_SubdivsionId)
  assign: Subdivision = GetSubdivisionDetails_BySubdivisionId.Out_Screen_SubdivisionDetails
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block SubLayout_DirectoryDetailScreen (UBTConnect.SubLayout)
  placeholder Placeholder_DetailCard:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not GetSubdivision.IsDataFetched 
      placeholder Placeholder_LoadingSection:
        block ImageCard_LazyLoading (UBTConnectLibrary.ConnectCorePatterns)
          args: In_CardTypeId=Entities.UBT_ImageCardType.Detail
          placeholder LazyImage_Placeholder:
            block UBT_LazyImage (UBTConnect_Utils.CW_Image)
              args: EntityId=GetSubdivision.Subdivision.Subdivision_Card.SubdivisionId, EntityType=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions, HasErrorMessage=True, ImageSize={ Width: Entities.UBT_ImageSize.MaxWidth_100vw }
          placeholder Placeholder_ImageTag:
            placeholder-def Placeholder_CarouselTag
          placeholder Placeholder_Content:
            block SupperMeeting_ImageCard_Content (UBTConnect.Directory_SupperMeetings)
              args: In_ShowAddress=True, In_Subdivision_CardContent=GetSubdivision.Subdivision.Subdivision_Card.Subdivision_Card_Content
  placeholder Placeholder_CallToAction:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not GetSubdivision.IsDataFetched
      placeholder Placeholder_LoadingSection:
        container
          block SubLayout_DirectoryDetailScreen_Section (UBTConnect.SubLayout)
            args: In_Title=Get_LookupSection().Actions.Plural
            placeholder Placeholder_SectionContent:
              block Directory_EntityDetailsActions (UBTConnect.Directory_CommonBlocks)
                args: ContactPopUp_OverrideOptions={ Name: GetSubdivision.Subdivision.Subdivision_Card.Subdivision_Card_Content.Name }, EnableOptions={ EnableNotes: True }, EntityId=In_SubdivsionId, EntityType=Entities.Connect_Entity.SupperMeetings_aka_Subdivisions
  placeholder Placeholder_Content:
    block SupperMeeting_HouseholdList (UBTConnect.Directory_SupperMeetings) #Block_Household_List
      args: In_SubdivisionId=In_SubdivsionId
      on Event_OnClick_Household → OnClick_NavigateToHousehold(Event_HouseholdId=Event_HouseholdId, Event_HouseholdIdList=Event_HouseholdIdList)
```

#### Block actions
- **Handler_Bookmark**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_Share**
  ```
  call ShowComingSoonMessage()
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call ShareEntity_ByURL(None={ Id: In_SubdivsionId }, None=Entities.Type_ShareObject.SupperMeeting)
    end
  ```
- **OnClick_NavigateToHousehold** inputs: Event_HouseholdId: Long Integer (mandatory); Event_HouseholdIdList: Long Integer List (mandatory); locals: PreloadedHouseholds: CarouselPreloadedHouseholds
  ```
  call GetHasCarouselEnabled()
  if GetHasCarouselEnabled.HasCarouselEnabled
    [M1] for each Event_HouseholdIdList
      call ListAppend(Element={ Household: Event_HouseholdIdList.Current }, List=PreloadedHouseholds.CarouselHouseholdItem)
      → continues at [M1]
    end for
    call SetPreloadObject(Preload=ToObject(PreloadedHouseholds))
    navigate → HouseholdCarousel(In_StartingHouseholdId=Event_HouseholdId) transition=Inherited
  else
    navigate → HouseholdDetails(HouseholdId=Event_HouseholdId) transition=Inherited
  ```
- **ScreenEvent_OnReady**
  ```
  javascript Get_IsViewRestoredFromCache() → FromCache: Boolean; FromHistory: Boolean
    | $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
  if (Is view restored from cache?) Get_IsViewRestoredFromCache.FromCache or Get_IsViewRestoredFromCache.FromHistory
    end
  else
    call GetSkeleton_UI_SubdivisionDetails()
    assign: GetSubdivision.Subdivision = GetSkeleton_UI_SubdivisionDetails.UI_SubdivisionDetails
    refresh data GetSubdivision
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block SupperMeeting_HouseholdList (flow Directory_SupperMeetings)
- public: False
- input parameters: In_SubdivisionId: Long Integer (mandatory)
- events: Event_OnClick_Household(Event_HouseholdId: Long Integer (mandatory); Event_HouseholdIdList: Long Integer List (mandatory))
- local variables: -
- lifecycle: OnReady → OnReady
- used by (UBTConnect): SupperMeeting_DetailsBlock

#### Data sources
- data action **GetSubdivisionHouseholds** fetch=OnDemand; outputs: Household_GalleryCard_List: UI_SubdivisionHousehold List
  ```
  call-server GetHouseholdList_BySubdivisionId(In_SubdivisionId=In_SubdivisionId)
  assign: Household_GalleryCard_List = GetHouseholdList_BySubdivisionId.Out_HouseholdList
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] assign: SubdivisionHousehold.SignedURL.LowResolution = "img/UBTConnect.SampleSubdivisionHousehold.png"; SubdivisionHousehold.HouseholderName = "James"; SubdivisionHousehold.SpouseName = "Rosy"; SubdivisionHousehold.Surname = "Bennet"
    [DISABLED] call-server ListAppendAll(List=Household_GalleryCard_List, SourceList=[ SubdivisionHousehold, SubdivisionHousehold, SubdivisionHousehold, SubdivisionHousehold ])
    [DISABLED] call-server ListAppendAll(List=Household_GalleryCard_List[0].ChildrenNames, SourceList=[ "Chelsea", "Georgia", "Gianna", "Libby" ]) as ListAppendAll2
    [DISABLED] call-server ListAppendAll(List=Household_GalleryCard_List[1].ChildrenNames, SourceList=[ "Chelsea", "Georgia" ]) as ListAppendAll3
    [DISABLED] call-server ListAppendAll(List=Household_GalleryCard_List[2].ChildrenNames, SourceList=[ "Chelsea" ]) as ListAppendAll4
    [DISABLED] call-server Wait(Duration=2)
    end
  ```

#### Widget tree
```
block Household_GalleryCard_List (UBTConnect.Directory_Household_Blocks)
  args: In_Household_GalleryCard_List=GetSubdivisionHouseholds.Household_GalleryCard_List, In_IsLoading=not GetSubdivisionHouseholds.IsDataFetched
  on Event_OnClick_Household_GalleryCard → Event_OnClick_Household(Event_HouseholdId=Event_HouseholdId, Event_HouseholdIdList=ConvertList(GetSubdivisionHouseholds.Household_GalleryCard_List,  {Value:"HouseholdId"}))
```

#### Block actions
- **OnReady**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache
    end
  else
    call GetSkeletonList_UI_SubdivisionHousehold()
    assign: GetSubdivisionHouseholds.Household_GalleryCard_List = GetSkeletonList_UI_SubdivisionHousehold.UI_SubdivisionHouseholds
    refresh data GetSubdivisionHouseholds
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block SupperMeeting_ImageCard_Content (flow Directory_SupperMeetings)
- public: False
- input parameters: In_Subdivision_CardContent: UI_Subdivision_Card_Content (mandatory); In_ShowAddress: Boolean
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Locality_Subdivisions, Map_PoIPreview, SupperMeeting_DetailsBlock

#### Widget tree
```
block ImageCard__Content (UBTConnectLibrary.ConnectPatterns)
  args: In_Title=In_Subdivision_CardContent.Name
  placeholder Placeholder_BottomSectionContent:
    block SupperMeeting_ImageCard_Content_Statistics (UBTConnect.Directory_SupperMeetings)
      args: In_BretherenCount=In_Subdivision_CardContent.BretherenCount, In_GenderSplit=GetDescriptor_Subdivision_GenderSplit(In_Subdivision_CardContent.BrothersCount,In_Subdivision_CardContent.SistersCount), In_HouseholdCount=In_Subdivision_CardContent.HouseholdCount
    if In_ShowAddress #ShowAddress2
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small } }
        placeholder Content:
          block AddressPopup_Wrapper (UBTConnect_Utils.CW_CTA_PopUps)
            args: In_Address=In_Subdivision_CardContent.Address
```

## Block SupperMeeting_ImageCard_Content_IconText (flow Directory_SupperMeetings)
- public: False
- input parameters: In_Text: Text (mandatory); In_FontSize: UBT_FontSize Identifier (mandatory); In_UBT_IconId: UBT_Icons2 Identifier (mandatory); In_UBT_ColorId: UBT_Color Identifier (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): SupperMeeting_ImageCard_Content_Statistics

#### Widget tree
```
block IconText (UBTConnectLibrary.ConnectPatterns)
  args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=In_Text, TextOptions={ FontSize: In_FontSize, FontWeight: Entities.UBT_FontWeight.SemiBold }
  placeholder Icon:
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_ColorId=In_UBT_ColorId, In_IconId=In_UBT_IconId, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
```

## Block SupperMeeting_ImageCard_Content_Statistics (flow Directory_SupperMeetings)
- public: False
- input parameters: In_BretherenCount: Integer (mandatory); In_HouseholdCount: Integer (mandatory); In_GenderSplit: Text (mandatory)
- events: -
- local variables: FontSize: UBT_FontSize Identifier = Entities.UBT_FontSize.ExtraSmall
- lifecycle: none
- used by (UBTConnect): SupperMeeting_ImageCard_Content

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ MarginSize: {  }, TextOptions: { FontSize: Entities.UBT_FontSize.ExtraSmall } }
  placeholder Content:
    container #DIV_Statistics  [style="display-flex gap-s flex-wrap flex-direction-column"]
      container #DIV_Bretherens
        block Columns_Two (UBTConnectLibrary.BasePatterns)
          args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, SpacingSize: Entities.UBT_Size.Small }
          placeholder Left:
            block SupperMeeting_ImageCard_Content_IconText (UBTConnect.Directory_SupperMeetings)
              args: In_FontSize=FontSize, In_Text=GetDescriptor_BretherenCount(In_BretherenCount), In_UBT_ColorId=GetLookupConcepts().Brethren.Icon_Color, In_UBT_IconId=GetLookupConcepts().Brethren.Icon
          placeholder Right:
            block ImageCard__Content__Tag (UBTConnectLibrary.ConnectPatterns)
              args: Content=In_GenderSplit
      container #DIV_Households
        block SupperMeeting_ImageCard_Content_IconText (UBTConnect.Directory_SupperMeetings)
          args: In_FontSize=FontSize, In_Text=GetDescriptor_Subdivision_HouseholdCount(In_HouseholdCount), In_UBT_ColorId=GetLookupConcepts().Household.Icon_Color, In_UBT_IconId=GetLookupConcepts().Household.Icon
```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| CarouselTag | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_IndexCurrentItem: Integer (mandatory); In_TotalItems: Integer (mandatory) | - |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| DW_OneSchoolGlobal_EventList | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | - | Event_OnClick |
| DW_OneSchoolGlobal_Numbers | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_OneSchoolGlobal_LocalitiesList: LocalityId, LocalityName Record List (mandatory) | - |
| Directory_EmptyState | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | EntityTypeId: Connect_Entity Identifier (mandatory); Location: Text = "found nearby" | - |
| Directory_EntityDetailsActions | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean | Event_MenuEdit; OnChange_Bookmark; ViewDetails_OnClick |
| EntitiesCarouse_lSupperMeetingDetails | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_SubdivisionId: Long Integer (mandatory) | - |
| EntitiesCarousel | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_EntitiesCarousel_Items: EntitiesCarousel_Item List (mandatory); In_StartingPosition: Integer; In_ConnectEntityTypeId: Connect_Entity Identifier (mandatory) | Event_Moved; Event_SetHeader |
| EntitiesCarousel_Element | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_ConnectEntityTypeId: Connect_Entity Identifier (mandatory); In_EntityId: Long Integer (mandatory); In_CarouselLength: Integer (mandatory); In_Index_ActiveElement: Integer (mandatory); In_Index_NextActiveElement: Integer (mandatory); In_Index_CurrentElement: Integer (mandatory); In_RenderBuffer: Integer (mandatory) | Event_SetHeader |
| EntitiesCarousel_HeaderGenerator | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_HouseholdCarouselHeaderList: HeaderList List; In_CurrentIndex: Integer (mandatory) | Event_SetHeader |
| EntitiesCarousel_HouseholdDetails | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_HouseholdId: Long Integer (mandatory); In_IsSkeletonOnly: Boolean | Event_SetHeader |
| EntitiesCarousel_OneSchoolGlobal | Directory_Caroussel | `../../_shared/pack/blocks.md` | In_EntityId: Long Integer (mandatory); In_IsSkeletonOnly: Boolean | Event_SetHeader |
| External_Link | App_Common_Blocks | `../../_shared/pack/blocks.md` | In_Link: BusinessLinkItem (mandatory); IsEnabled: Boolean = True; IconVisible: Boolean = True | - |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| HouseholdDetails_Block | Directory_Household | `../../Directory_Household/pack/blocks.md` | HouseholdId: Long Integer (mandatory); isEnabled: Boolean = True; Preview: HouseholdPreviewStructure; In_ShowKebabMenu: Boolean; In_CheckVisibility: Boolean; In_IsSkeletonOnly: Boolean; In_HideActions: Boolean | HouseholdDataFetched |
| HouseholdDetails_Members_Block | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | isEnabled: Boolean = True; In_HouseholdMembers: UI_HouseholdMember List (mandatory); In_NonHouseholdMembers: UI_HouseholdMember List (mandatory); In_IsLoading: Boolean (mandatory) | Event_MemberOnClick; Event_NonMemberOnClick |
| HouseholdDetails_TimelinePhoto | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_BackgroundURL: Text (mandatory); Label: Text (mandatory); Date: Date Time (mandatory); In_CardTypeId: UBT_ImageCardType Identifier (mandatory); IsSelected: Boolean (mandatory) | Selected |
| HouseholdDetails_TimelinePhoto_List | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_HouseholdTimelineImages: UI_HouseholdTimelineImages List (mandatory) | Event_DateSelected |
| Household_GalleryCard | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | SubdivisionHousehold_GalleryCard: UI_SubdivisionHousehold (mandatory); ItemsPerRow: Integer = 2 | Event_OnClick |
| Household_GalleryCard_List | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_Household_GalleryCard_List: UI_SubdivisionHousehold List (mandatory); In_IsLoading: Boolean (mandatory) | Event_OnClick_Household_GalleryCard |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| OneSchoolGlobalDetails_Block | Directory_OneSchoolGlobal | `../../Directory_OneSchoolGlobal/pack/blocks.md` | In_OneSchoolGlobalId: Long Integer (mandatory); IsRestoredFromCache: Boolean (mandatory) | - |
| OneSchoolGlobal_Event_ListCard | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card (mandatory) | Event_OnClick |
| OneSchoolGlobal_Event_ListCard_List | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_OneSchoolGlobal_EventCard_List: UI_OneSchoolGlobal_Event_Card List (mandatory); In_IsLoading: Boolean (mandatory); In_IsUpdating: Boolean (mandatory) | Event_OnClick; Event_ScrollEnding |
| OneSchoolGlobal_Numbers | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_StudentNumbers: UI_OneSchoolGlobal_StudentNumbers (mandatory); In_Selected_CalendarYear: Text (mandatory); In_IsLoading: Boolean (mandatory); In_IsLoadingStudentNumbers: Boolean (mandatory); In_LocalitiesList: Tag List (mandatory) | Event_ClickCalendarYear; Event_ClickLocality |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| SubLayout_DirectoryDetailScreen | SubLayout | `../../_shared/pack/blocks.md` | HideActions: Boolean | - |
| SubLayout_DirectoryDetailScreen_Section | SubLayout | `../../_shared/pack/blocks.md` | In_Title: Text (mandatory); In_PaddingTop: UBT_Size Identifier = Entities.UBT_Size.Small; In_PaddingBottom: UBT_Size Identifier = Entities.UBT_Size.Small | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
