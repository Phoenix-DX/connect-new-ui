# Pack of UI flow Directory_Caroussel (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: CarouselTag, EntitiesCarouse_lSupperMeetingDetails, EntitiesCarousel, EntitiesCarousel_Element, EntitiesCarousel_HeaderGenerator, EntitiesCarousel_HouseholdDetails, EntitiesCarousel_OneSchoolGlobal
Blocks of other UBTConnect flows that the flow uses (transitive): 22

## Block CarouselTag (flow Directory_Caroussel)
- public: False
- input parameters: In_IndexCurrentItem: Integer (mandatory); In_TotalItems: Integer (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): EntitiesCarousel_Element

#### Widget tree
```
block TagContent (UBTConnectLibrary.ConnectPatterns)
  args: BackgroundColorId=Entities.UBT_Color.Neutral0, Text=(In_IndexCurrentItem + 1) + " / " + In_TotalItems
```

## Block EntitiesCarouse_lSupperMeetingDetails (flow Directory_Caroussel)
- public: False
- input parameters: In_SubdivisionId: Long Integer (mandatory)
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): EntitiesCarousel_Element

#### Widget tree
```
block SupperMeeting_DetailsBlock (UBTConnect.Directory_SupperMeetings)
  args: In_SubdivsionId=In_SubdivisionId
  placeholder Placeholder_CarouselTag:
    placeholder-def Placeholder_CarouselTag
```

## Block EntitiesCarousel (flow Directory_Caroussel)
- public: False; stylesheet: yes
- input parameters: In_EntitiesCarousel_Items: EntitiesCarousel_Item List (mandatory); In_StartingPosition: Integer; In_ConnectEntityTypeId: Connect_Entity Identifier (mandatory)
- events: Event_Moved(Event_Index: Integer (mandatory)); Event_SetHeader(Event_Header: Text (mandatory))
- local variables: Index_Initial: Integer; Index_ActiveElement: Integer = -1; Index_NextActiveElement: Integer = -1; HeaderList: HeaderList List; RenderBuffer: Integer = 3; UseMoveHandler: Boolean
- lifecycle: OnInitialize → ScreenEvent_OnInitialize
- used by (UBTConnect): HouseholdCarousel, OneSchoolGlobalCarousel, SupperMeeting_Carousel

#### Widget tree
```
block Carousel (OutSystemsUI_2_23.Interaction) #EntitiesCarousel
  args: ExtendedClass="ubt-entities-carousel", Navigation=Entities.CarouselNavigation.None, OptionalConfigs={ AutoPlay: False, Loop: False, StartingPosition: Index_Initial }
  on Initialized → Handler_EntitiesCarousel_Initialized
  placeholder CarouselItems:
    list source=In_EntitiesCarousel_Items mode=Default  [style="list list-group"; disable-virtualization=True]
      container
        block EntitiesCarousel_Element (UBTConnect.Directory_Caroussel)
          args: In_CarouselLength=In_EntitiesCarousel_Items.Length, In_ConnectEntityTypeId=In_ConnectEntityTypeId, In_EntityId=TextToLongInteger(In_EntitiesCarousel_Items.Current.EntityId), In_Index_ActiveElement=Index_ActiveElement, In_Index_CurrentElement=In_EntitiesCarousel_Items.CurrentRowNumber, In_Index_NextActiveElement=Index_NextActiveElement, In_RenderBuffer=RenderBuffer
          on Event_SetHeader → Handler_SetHeaderList(Event_Header=Event_Header, Event_Index=In_EntitiesCarousel_Items.CurrentRowNumber)
block EntitiesCarousel_HeaderGenerator (UBTConnect.Directory_Caroussel)
  args: In_CurrentIndex=Index_ActiveElement, In_HouseholdCarouselHeaderList=HeaderList
  on Event_SetHeader → Event_SetHeader(Event_Header=Event_Header)
```

#### Block actions
- **Action_UpdateCarouselInternalPosition**
  ```
  javascript SetInternalPosition(CarouselWidgetId=EntitiesCarousel.Id, InternalPosition=Index_ActiveElement)
    | const carousel = OutSystems.OSUI.Patterns.CarouselAPI.GetCarouselItemById($parameters.CarouselWidgetId);
    | if (carousel && carousel.provider) {
    |     carousel.configs.StartingPosition = $parameters.InternalPosition;//carousel.provider.index;
    | }
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_EntitiesCarousel_Initialized**
  ```
  call CarouselDisableOnRender(WidgetId=EntitiesCarousel.Id)
  call SetSplideConfigs(ProviderConfigs={ speed: 0, fixedHeight: "var(--carousel-slide-custom-height)", perMove: 1, flickPower: 100, flickMaxPages: 1, waitForTransition: If(UseMoveHandler, Entities.BooleanTypes.False, Entities.BooleanTypes…, WidgetId=EntitiesCarousel.Id)
  javascript GetSplideCallbacks() → Moved: Object; Move: Object; Resize: Object
    | $parameters.Moved = $actions.Handler_EntitiesCarousel_Moved;
    | $parameters.Move = $actions.Handler_EntitiesCarousel_Move;
  call UnsetSplideEvent(SplideEventId="resize", WidgetId=EntitiesCarousel.Id)
  call UnsetSplideEvent(SplideEventId="resized", WidgetId=EntitiesCarousel.Id) as UnsetSplideEvent2
  call SetSplideEvent(EventName="moved", Handler=GetSplideCallbacks.Moved, WidgetId=EntitiesCarousel.Id) as Moved
  if UseMoveHandler
    call SetSplideEvent(EventName="move", Handler=GetSplideCallbacks.Move, WidgetId=EntitiesCarousel.Id) as Move
    [M1] javascript RemoveCarouselOnResizeHandler(CarouselId=EntitiesCarousel.Id)
      | var c = OutSystems.OSUI.Patterns.CarouselAPI.GetCarouselItemById($parameters.CarouselId);
      | if (c && c._eventOnResize) {
      |     OSFramework.OSUI.Event.DOMEvents.Listeners.GlobalListenerManager.Instance.removeHandler(
      |         OSFramework.OSUI.Event.DOMEvents.Listeners.Type.WindowResize,
      |         c._eventOnResize
      |     );
      | }
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call SetSplideConfigs(ProviderConfigs={ perMove: 1, flickMaxPages: 1 }, WidgetId=EntitiesCarousel.Id) as SetSplideConfigs2
    end
  ```
- **Handler_EntitiesCarousel_Move** inputs: newIndex: Integer (mandatory); previousIndex: Integer (mandatory); destinationIndex: Integer (mandatory)
  ```
  assign: Index_NextActiveElement = newIndex
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_EntitiesCarousel_Moved** inputs: newIndex: Integer (mandatory); previousIndex: Integer (mandatory); destinationIndex: Integer (mandatory)
  ```
  assign: Index_ActiveElement = newIndex; Index_NextActiveElement = newIndex
  trigger event Event_Moved(Event_Index=newIndex)
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] call Action_UpdateCarouselInternalPosition()
    end
  ```
- **Handler_SetHeaderList** inputs: Event_Header: Text (mandatory); Event_Index: Integer (mandatory)
  ```
  call ListIndexOf(Condition=Index = Event_Index, List=HeaderList)
  if ListIndexOf.Position <> -1
    end
  else
    call ListAppend(Element={ Label: Event_Header, Index: Event_Index }, List=HeaderList)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  if Index_ActiveElement <> -1
    [M1] assign: Index_Initial = Index_ActiveElement
    end
  else
    assign: Index_ActiveElement = In_StartingPosition
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block EntitiesCarousel_Element (flow Directory_Caroussel)
- public: False
- input parameters: In_ConnectEntityTypeId: Connect_Entity Identifier (mandatory); In_EntityId: Long Integer (mandatory); In_CarouselLength: Integer (mandatory); In_Index_ActiveElement: Integer (mandatory); In_Index_NextActiveElement: Integer (mandatory); In_Index_CurrentElement: Integer (mandatory); In_RenderBuffer: Integer (mandatory)
- events: Event_SetHeader(Event_Header: Text (mandatory))
- local variables: IsInsideRenderBuffer: Boolean; IsSinglePassRender: Boolean = True; IsRenderCurrentElement: Boolean; IsSkeletonOnly: Boolean
- lifecycle: OnReady → ScreenEvent_OnReady; OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): EntitiesCarousel

#### Widget tree
```
if IsRenderCurrentElement
  container  [style=""//If(IsInsideRenderBuffer,"","hidden")]
    if In_ConnectEntityTypeId = Entities.Connect_Entity.OneSchoolGlobal #IsOneSchoolGlobal
      block EntitiesCarousel_OneSchoolGlobal (UBTConnect.Directory_Caroussel)
        args: In_EntityId=In_EntityId
        placeholder None:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
    if In_ConnectEntityTypeId = Entities.Connect_Entity.SupperMeetings_aka_Subdivisions #IsSubdivisions
      block EntitiesCarouse_lSupperMeetingDetails (UBTConnect.Directory_Caroussel)
        args: In_SubdivisionId=In_EntityId
        placeholder Placeholder_CarouselTag:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
    if In_ConnectEntityTypeId = Entities.Connect_Entity.Household #IsHousehold
      block EntitiesCarousel_HouseholdDetails (UBTConnect.Directory_Caroussel)
        args: In_HouseholdId=In_EntityId, In_IsSkeletonOnly=IsSkeletonOnly
        on Event_SetHeader → Event_SetHeader(Event_Header=Event_Header)
        placeholder None:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
        placeholder None:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
        placeholder Placeholder_CarouselTag:
          block CarouselTag (UBTConnect.Directory_Caroussel)
            args: In_IndexCurrentItem=In_Index_CurrentElement, In_TotalItems=In_CarouselLength
```

#### Block actions
- **ScreenEvent_OnParametersChanged**
  ```
  call Get_IsInsideRenderBuffer(In_Index_ActiveElement=In_Index_ActiveElement, In_Index_CurrentElement=In_Index_CurrentElement, In_RenderBuffer=In_RenderBuffer) as Get_IsInsideRenderBuffer_ActiveElement
  call Get_IsInsideRenderBuffer(In_Index_ActiveElement=In_Index_NextActiveElement, In_Index_CurrentElement=In_Index_CurrentElement, In_RenderBuffer=In_RenderBuffer) as Get_IsInsideRenderBuffer_NextActiveElement
  assign: IsInsideRenderBuffer = Get_IsInsideRenderBuffer_ActiveElement.IsInsideRenderBuffer or Get_IsInsideRenderBuffer_NextActiveElement.IsInsideRenderBuffer; IsSkeletonOnly = not Get_IsInsideRenderBuffer_ActiveElement.IsInsideRenderBuffer
  if IsSinglePassRender
    assign: IsRenderCurrentElement = IsRenderCurrentElement or IsInsideRenderBuffer
    end
  else
    assign: IsRenderCurrentElement = IsInsideRenderBuffer
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  call ScreenEvent_OnParametersChanged()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block EntitiesCarousel_HeaderGenerator (flow Directory_Caroussel)
- public: False
- input parameters: In_HouseholdCarouselHeaderList: HeaderList List; In_CurrentIndex: Integer (mandatory)
- events: Event_SetHeader(Event_Header: Text (mandatory)) mandatory
- local variables: -
- lifecycle: OnParametersChanged → ScreenEvent_OnParametersChanged
- used by (UBTConnect): EntitiesCarousel

#### Widget tree
```
```

#### Block actions
- **ScreenEvent_OnParametersChanged**
  ```
  call Get_CurrentEntityHeader(In_CurrentHouseholdIndex=In_CurrentIndex, In_HouseholdCarouselHeaderList=In_HouseholdCarouselHeaderList, In_IsSingleHeader=False)
  trigger event Event_SetHeader(Event_Header=Get_CurrentEntityHeader.Out_HouseholdHeader)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block EntitiesCarousel_HouseholdDetails (flow Directory_Caroussel)
- public: False
- input parameters: In_HouseholdId: Long Integer (mandatory); In_IsSkeletonOnly: Boolean
- events: Event_SetHeader(Event_Header: Text (mandatory))
- local variables: LocalityName: Text; CountryName: Text; DeceasedOrAncestry_View: Boolean
- lifecycle: none
- used by (UBTConnect): EntitiesCarousel_Element

#### Widget tree
```
block HouseholdDetails_Block (UBTConnect.Directory_Household)
  args: HouseholdId=In_HouseholdId, In_IsSkeletonOnly=In_IsSkeletonOnly
  on HouseholdDataFetched → Handler_HouseholdDetails_DataFetched(Evt_CountryName=CountryName, Evt_DeceasedOrAncestry_View=DeceasedOrAncestry_View, Evt_LocalityName=LocalityName)
  placeholder Placeholder_CarouselTag:
    placeholder-def Placeholder_CarouselTag
```

#### Block actions
- **Handler_HouseholdDetails_DataFetched** inputs: Evt_LocalityName: Text (mandatory); Evt_CountryName: Text (mandatory); Evt_DeceasedOrAncestry_View: Boolean (mandatory)
  ```
  assign: LocalityName = Evt_LocalityName; CountryName = Evt_CountryName; DeceasedOrAncestry_View = Evt_DeceasedOrAncestry_View
  trigger event Event_SetHeader(Event_Header=Evt_LocalityName + ", " + Evt_CountryName)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block EntitiesCarousel_OneSchoolGlobal (flow Directory_Caroussel)
- public: False
- input parameters: In_EntityId: Long Integer (mandatory); In_IsSkeletonOnly: Boolean
- events: Event_SetHeader(Event_Header: Text (mandatory))
- local variables: LocalityName: Text; CountryName: Text; DeceasedOrAncestry_View: Boolean
- lifecycle: none
- used by (UBTConnect): EntitiesCarousel_Element

#### Widget tree
```
block OneSchoolGlobalDetails_Block (UBTConnect.Directory_OneSchoolGlobal)
  args: In_OneSchoolGlobalId=In_EntityId, IsRestoredFromCache=False
```

#### Block actions
- **Handler_HouseholdDetails_DataFetched** inputs: Evt_LocalityName: Text (mandatory); Evt_CountryName: Text (mandatory); Evt_DeceasedOrAncestry_View: Boolean (mandatory)
  ```
  assign: LocalityName = Evt_LocalityName; CountryName = Evt_CountryName; DeceasedOrAncestry_View = Evt_DeceasedOrAncestry_View
  trigger event Event_SetHeader(Event_Header=Evt_LocalityName + ", " + Evt_CountryName)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| DW_OneSchoolGlobal_EventList | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | - | Event_OnClick |
| DW_OneSchoolGlobal_Numbers | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_OneSchoolGlobal_LocalitiesList: LocalityId, LocalityName Record List (mandatory) | - |
| Directory_EmptyState | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | EntityTypeId: Connect_Entity Identifier (mandatory); Location: Text = "found nearby" | - |
| Directory_EntityDetailsActions | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | IsEnabled: Boolean = True; EntityType: Connect_Entity Identifier (mandatory); EntityId: Long Integer (mandatory); ContactPopUp_OverrideOptions: ContactPopUp_OverrideOptions; EnableOptions: ActionsMenuEnableOptions; useViewDetails: Boolean | Event_MenuEdit; OnChange_Bookmark; ViewDetails_OnClick |
| External_Link | App_Common_Blocks | `../../_shared/pack/blocks.md` | In_Link: BusinessLinkItem (mandatory); IsEnabled: Boolean = True; IconVisible: Boolean = True | - |
| HouseholdDetails_Block | Directory_Household | `../../Directory_Household/pack/blocks.md` | HouseholdId: Long Integer (mandatory); isEnabled: Boolean = True; Preview: HouseholdPreviewStructure; In_ShowKebabMenu: Boolean; In_CheckVisibility: Boolean; In_IsSkeletonOnly: Boolean; In_HideActions: Boolean | HouseholdDataFetched |
| HouseholdDetails_Members_Block | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | isEnabled: Boolean = True; In_HouseholdMembers: UI_HouseholdMember List (mandatory); In_NonHouseholdMembers: UI_HouseholdMember List (mandatory); In_IsLoading: Boolean (mandatory) | Event_MemberOnClick; Event_NonMemberOnClick |
| HouseholdDetails_TimelinePhoto | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_BackgroundURL: Text (mandatory); Label: Text (mandatory); Date: Date Time (mandatory); In_CardTypeId: UBT_ImageCardType Identifier (mandatory); IsSelected: Boolean (mandatory) | Selected |
| HouseholdDetails_TimelinePhoto_List | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_HouseholdTimelineImages: UI_HouseholdTimelineImages List (mandatory) | Event_DateSelected |
| Household_GalleryCard | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | SubdivisionHousehold_GalleryCard: UI_SubdivisionHousehold (mandatory); ItemsPerRow: Integer = 2 | Event_OnClick |
| Household_GalleryCard_List | Directory_Household_Blocks | `../../_shared/pack/blocks.md` | In_Household_GalleryCard_List: UI_SubdivisionHousehold List (mandatory); In_IsLoading: Boolean (mandatory) | Event_OnClick_Household_GalleryCard |
| OneSchoolGlobalDetails_Block | Directory_OneSchoolGlobal | `../../Directory_OneSchoolGlobal/pack/blocks.md` | In_OneSchoolGlobalId: Long Integer (mandatory); IsRestoredFromCache: Boolean (mandatory) | - |
| OneSchoolGlobal_Event_ListCard | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | OneSchoolGlobal_EventCard: UI_OneSchoolGlobal_Event_Card (mandatory) | Event_OnClick |
| OneSchoolGlobal_Event_ListCard_List | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_OneSchoolGlobal_EventCard_List: UI_OneSchoolGlobal_Event_Card List (mandatory); In_IsLoading: Boolean (mandatory); In_IsUpdating: Boolean (mandatory) | Event_OnClick; Event_ScrollEnding |
| OneSchoolGlobal_Numbers | Directory_OneSchoolGlobal_Blocks | `../../_shared/pack/blocks.md` | In_StudentNumbers: UI_OneSchoolGlobal_StudentNumbers (mandatory); In_Selected_CalendarYear: Text (mandatory); In_IsLoading: Boolean (mandatory); In_IsLoadingStudentNumbers: Boolean (mandatory); In_LocalitiesList: Tag List (mandatory) | Event_ClickCalendarYear; Event_ClickLocality |
| SubLayout_DirectoryDetailScreen | SubLayout | `../../_shared/pack/blocks.md` | HideActions: Boolean | - |
| SubLayout_DirectoryDetailScreen_Section | SubLayout | `../../_shared/pack/blocks.md` | In_Title: Text (mandatory); In_PaddingTop: UBT_Size Identifier = Entities.UBT_Size.Small; In_PaddingBottom: UBT_Size Identifier = Entities.UBT_Size.Small | - |
| SupperMeeting_DetailsBlock | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_SubdivsionId: Long Integer (mandatory) | - |
| SupperMeeting_HouseholdList | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_SubdivisionId: Long Integer (mandatory) | Event_OnClick_Household |
| SupperMeeting_ImageCard_Content | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_Subdivision_CardContent: UI_Subdivision_Card_Content (mandatory); In_ShowAddress: Boolean | - |
| SupperMeeting_ImageCard_Content_IconText | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_Text: Text (mandatory); In_FontSize: UBT_FontSize Identifier (mandatory); In_UBT_IconId: UBT_Icons2 Identifier (mandatory); In_UBT_ColorId: UBT_Color Identifier (mandatory) | - |
| SupperMeeting_ImageCard_Content_Statistics | Directory_SupperMeetings | `../../Directory_SupperMeetings/pack/blocks.md` | In_BretherenCount: Integer (mandatory); In_HouseholdCount: Integer (mandatory); In_GenderSplit: Text (mandatory) | - |
