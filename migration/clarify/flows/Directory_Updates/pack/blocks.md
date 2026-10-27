# Pack of UI flow Directory_Updates (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: Directory_Updates_FilterSheet, Directory_Updates_Section_Wrapper, SectionHeader, UpdateItem_Header, Updates_NoItemsFound
Blocks of other UBTConnect flows that the flow uses (transitive): 23

## Block Directory_Updates_FilterSheet (flow Directory_Updates)
- public: False
- input parameters: In_FilterUpdates: Filter_Updates (mandatory)
- events: ApplyFilters(Filter_Updates: Filter_Updates (mandatory); HasFiltersApplied: Boolean (mandatory)) mandatory; Loaded(ShowSubscriptionOnClick: Boolean (mandatory)) mandatory; SheetInitialized(SheetId: Text (mandatory)) mandatory
- local variables: Extra_OptionChoices: Filter_Common_Control_Choice List; FilterByStatus_Title: Text = "Filter by status"
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): Updates_SingleList

#### Widget tree
```
block FilterSheet (UBTConnect.App_CommonBlocks_Filter)
  args: In_Options={ HasSorting: { Enable: True, YesLabel: "Newest to Oldest", NoLabel: "Oldest to Newest", Order: 1 }, HasCountries: { Enable: True, Order: 1 }, HasLocalities: { Enable: True, Order: 2 }, Extra_OptionC…, In_StartFilter={  }
  on SheetInitialized → SheetInitialized(SheetId=SheetId)
  on ApplyFilters → FilterSheetApplyFilters(HasFiltersApplied=hasFitlerApplied, OptionChoice_Control=OptionChoice_Control, OptionList_Control=OptionList_Control, SortBy_Title=SortBy_Title, SubState_Countries=SubState_Countries, SubState_Localities=SubState_Localities)
  on Loaded → Handler_FilterSheetLoaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
```

#### Block actions
- **FilterSheetApplyFilters** inputs: OptionList_Control: Filter_Common_Control_List List (mandatory); OptionChoice_Control: Filter_Common_Control_Choice List (mandatory); SubState_Localities: Text; SubState_Countries: Text; SortBy_Title: Text; HasFiltersApplied: Boolean (mandatory); locals: Filter_Updates: Filter_Updates
  ```
  assign: Filter_Updates = In_FilterUpdates
  call ListFilter(Condition=Title = SubState_Countries, SourceList=OptionList_Control) as Countries
  assign: Filter_Updates.CountryIds = Countries.FilteredList.Current.SelectedIds
  call ListFilter(Condition=Title = SubState_Localities, SourceList=OptionList_Control) as Localities
  assign: Filter_Updates.LocalitiesIds = Localities.FilteredList.Current.SelectedIds
  call ListFilter(Condition=Title = SortBy_Title, SourceList=OptionChoice_Control) as SortBy
  assign: Filter_Updates.Sort_ByNewest = TextToIdentifier(SortBy.FilteredList.Current.SelectedChoiceId)
  call ListFilter(Condition=Title = FilterByStatus_Title, SourceList=OptionChoice_Control) as FilterByStatus
  assign: Filter_Updates.Filter_ReadOnly = TextToIdentifier(FilterByStatus.FilteredList.Current.SelectedChoiceId)
  trigger event ApplyFilters(Filter_Updates=Filter_Updates, HasFiltersApplied=HasFiltersApplied)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_FilterSheetLoaded** inputs: ShowSubscriptionOnClick: Boolean (mandatory)
  ```
  trigger event Loaded(ShowSubscriptionOnClick=ShowSubscriptionOnClick)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**; locals: ReadOnly_OptionChoice: Filter_Common_Control_Choice
  ```
  call ListClear(List=Extra_OptionChoices) as ListClear_ExtraOptions
  assign (Set Extra Options): ReadOnly_OptionChoice.Title = FilterByStatus_Title; ReadOnly_OptionChoice.SelectedChoiceId = Entities.Choice.None; ReadOnly_OptionChoice.YesLabel = "Read Only"; ReadOnly_OptionChoice.NoLabel = "Unread Only"; ReadOnly_OptionChoice.NoneLabel = "All Updates"; ReadOnly_OptionChoice.Order = 2
  call ListAppend(Element=ReadOnly_OptionChoice, List=Extra_OptionChoices) as ListAppend_ExtraOptions
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Directory_Updates_Section_Wrapper (flow Directory_Updates)
- public: False
- input parameters: ShowMarkAll: Boolean = True; Title: Text; BadgeNumber: Integer (mandatory); MarginTopSizeId: UBT_Size Identifier; isLoading: Boolean (mandatory)
- events: Click_MarkAll()
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
block Section (UBTConnect.App_Common_Blocks)
  args: AddHorizontalPadding=False, isTransparentBackground=False, MarginTopSizeId=MarginTopSizeId
  placeholder Header:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall, HorizontalSizeId: Entities.UBT_Size.Base } }
      placeholder Content:
        block Columns_Two (UBTConnectLibrary.BasePatterns)
          args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }
          placeholder Left:
            block IconText (UBTConnectLibrary.ConnectPatterns)
              args: IsIconOnRight=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text=Title, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
              placeholder Icon:
                if BadgeNumber > 0 #If_HasBadge
                  block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                    args: In_IsLoading=isLoading
                    placeholder Placeholder_LoadingSection:
                      block Badge (UBTConnectLibrary.OutSystemsUIOverrides)
                        args: Color=Entities.UBT_Color.RedDark, MaxNumber=9, Number=BadgeNumber, Size=Entities.UBT_Size.ExtraSmall
          placeholder Right:
            if ShowMarkAll #If_ShowMarkAll
              container
                block CustomText (UBTConnectLibrary.BasePatterns)
                  args: In_Text="Mark All as Read", In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
                  on Clicked → Click_MarkAll
  placeholder Content:
    placeholder-def Content
```

## Block SectionHeader (flow Directory_Updates)
- public: False
- input parameters: In_Breakpoints: UI_UpdateItem_Breakpoint List (mandatory); In_CurrentUpdateDate: Date (mandatory); In_PreviousUpdateDate: Date (mandatory); In_IsLoading: Boolean (mandatory); In_SiblingId: Text (mandatory); In_IsAscending: Boolean (mandatory)
- events: Event_MarkAllAsRead(Event_DateRangeId: Updates_DateRanges Identifier (mandatory)); Event_UpdateListHeader(Event_Breakpoint: UI_UpdateItem_Breakpoint (mandatory)) mandatory
- local variables: UpdateItem_Breakpoint: UI_UpdateItem_Breakpoint; IntersectionObserver: Object
- lifecycle: OnReady → ScreenEvent_OnReady; OnParametersChanged → ScreenEvent_OnParametersChanged; OnDestroy → ScreenEvent_OnDestroy
- used by (UBTConnect): Updates_SingleList

#### Widget tree
```
if UpdateItem_Breakpoint.SectionName <> NullTextIdentifier() and not In_IsLoading
  container  [style="updates-list__list-section-header"]
    block UpdateItem_Header (UBTConnect.Directory_Updates) #ListSectionHeader
      args: BadgeNumber=UpdateItem_Breakpoint.BadgeCount, isLoading=In_IsLoading, ShowMarkAll=False, Title=UpdateItem_Breakpoint.SectionName
      on Click_MarkAll → Event_MarkAllAsRead(Event_DateRangeId=UpdateItem_Breakpoint.SectionName)
```

#### Block actions
- **Action_SetObserver**
  ```
  javascript InitializeIntersectionObserver(In_BreakpointId=UpdateItem_Breakpoint.SectionName, In_CurrentHeaderId=ListSectionHeader.Id, In_SiblingElementId=In_SiblingId) → Out_IntersectionObserver: Object
    | function watchStickyOverlap(scrollContainerSelector) {
    |   if (typeof window._stickyDebug === 'undefined') {
    |     window._stickyDebug = false;
    |   }
    | 
    |   const scrollContainer = document.querySelector(scrollContainerSelector);
    | 
    |   if (!scrollContainer) {
    |     console.warn('Scroll container not found:', scrollContainerSelector);
    |     return;
    |   }
    | 
    |   const topOffsetRaw = getComputedStyle(scrollContainer).getPropertyValue('--sticky-top-offset').trim();
    |   const topOffsetPx = parseFloat(topOffsetRaw);
    | 
    |   if (!topOffsetPx || isNaN(topOffsetPx)) {
    |     console.warn('--sticky-top-offset not found or invalid:', topOffsetRaw);
    |     return;
    |   }
    | 
    |   const incomingEl = document.getElementById($parameters.In_CurrentHeaderId)?.closest(".updates-list__list-section-header");
    |   const nextSectionEl = document.getElementById($parameters.In_SiblingElementId);
    | 
    |   if (!incomingEl || !nextSectionEl) {
    |     console.warn('Missing element(s):', { incomingEl, nextSectionEl });
    |     return;
    |   }
    | 
    |   if (window._stickyDebug) {
    |     console.log('Watching:', { incomingEl, nextSectionEl });
    |     console.log('Using root:', scrollContainer, '| offset:', topOffsetPx);
    |   }
    | 
    |   const HIGH_Z = '10';
    |   const LOW_Z = '9';
    |   incomingEl.style.zIndex = HIGH_Z;
    | 
    |   // extend the bottom edge past the FULL scrollable content, not a guessed constant,
    |   // so items never "exit" the observable region from the bottom, however long the list grows
    |   const BOTTOM_EXTENSION = scrollContainer.scrollHeight + 1000;
    | 
    |   if (window._stickyDebug) {
    |     console.log('scrollHeight:', scrollContainer.scrollHeight, '| BOTTOM_EXTENSION:', BOTTOM_EXTENSION);
    |   }
    | 
    |   let isLowered = false;
    |   let isFirstCallback = true;
    | 
    |   if (window._stickyDebug) {
    |     console.log(
    |       `%c${$parameters.In_BreakpointId}`,
    |       'color: red; background: yellow; padding: 2px 6px; border-radius: 3px;'
    |     );
    |   }
    | 
    |   const observer = new IntersectionObserver(
    |     (entries) => {
    |       entries.forEach((entry) => {
    |         // still intersecting (nextSectionEl below the offset line) -> stay HIGH
    |         // no longer intersecting (nextSectionEl crossed above the offset line) -> go LOW
    |         const shouldLower = !entry.isIntersecting;
    | 
    |         if (isFirstCallback) {
    |           isFirstCallback = false;
    |           isLowered = shouldLower; // sync internal state silently, no swap/log/action on initial read
    |           if (window._stickyDebug) {
    |             console.log('Initial state synced (ignored):', { isLowered });
    |           }
    |           return;
    |         }
    | 
    |         if (shouldLower !== isLowered) {
    |           if (window._stickyDebug) {
    |             console.log(
    |               shouldLower ? '%c LOWER Z-INDEX' : '%c RESTORE Z-INDEX',
    |               `color: white; background: ${shouldLower ? 'crimson' : 'seagreen'}; padding: 2px 6px; border-radius: 3px;`
    |             );
    |             console.log('intersectionRatio:', entry.intersectionRatio, '| rect:', entry.boundingClientRect);
    |           }
    |           $actions.Action_UpdateHeader(shouldLower);
    |           isLowered = shouldLower;
    |         }
    |       });
    |     },
    |     {
    |       root: scrollContainer,
    |       rootMargin: `-${topOffsetPx}px 0px ${BOTTOM_EXTENSION}px 0px`,
    |       threshold: 0,
    |     }
    |   );
    | 
    |   observer.observe(nextSectionEl);
    |   window._activeObserverCount = (window._activeObserverCount || 0) + 1;
    | 
    |   if (window._stickyDebug) {
    |     console.log('%c OBSERVER CREATED', 'background: purple; color: white; padding: 2px 6px;', 'Total active:', window._activeObserverCount);
    |   }
    | 
    |   $parameters.Out_IntersectionObserver = observer;
    | }
    | 
    | watchStickyOverlap('.active-screen.screen-container');
  assign: IntersectionObserver = InitializeIntersectionObserver.Out_IntersectionObserver
  end
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] javascript InitializeIntersectionObserver_WorkingV1(In_BreakpointId=UpdateItem_Breakpoint.SectionName, In_CurrentHeaderId=ListSectionHeader.Id, In_SiblingElementId=In_SiblingId) → Out_IntersectionObserver: Object
      | function watchStickyOverlap(scrollContainerSelector, topOffsetPx) {
      |   // debug flag - set window._stickyDebug = true in console to enable logging
      |   if (typeof window._stickyDebug === 'undefined') {
      |     window._stickyDebug = false;
      |   }
      | 
      |   const incomingEl = document.getElementById($parameters.In_CurrentHeaderId)?.closest(".updates-list__list-section-header");
      |   const nextSectionEl = document.getElementById($parameters.In_SiblingElementId);
      |   const scrollContainer = document.querySelector(scrollContainerSelector);
      | 
      |   if (!incomingEl || !nextSectionEl || !scrollContainer) {
      |     console.warn('Missing element(s):', { incomingEl, nextSectionEl, scrollContainer });
      |     return;
      |   }
      | 
      |   if (window._stickyDebug) {
      |     console.log('Watching:', { incomingEl, nextSectionEl });
      |     console.log('Using root:', scrollContainer, '| offset:', topOffsetPx);
      |   }
      | 
      |   const HIGH_Z = '10';
      |   const LOW_Z = '9';
      |   incomingEl.style.zIndex = HIGH_Z;
      | 
      |   // extend the bottom edge past the FULL scrollable content, not a guessed constant,
      |   // so items never "exit" the observable region from the bottom, however long the list grows
      |   const BOTTOM_EXTENSION = scrollContainer.scrollHeight + 1000;
      | 
      |   if (window._stickyDebug) {
      |     console.log('scrollHeight:', scrollContainer.scrollHeight, '| BOTTOM_EXTENSION:', BOTTOM_EXTENSION);
      |   }
      | 
      |   let isLowered = false;
      |   let isFirstCallback = true;
      | 
      |   if (window._stickyDebug) {
      |     console.log(
      |       `%c${$parameters.In_BreakpointId}`,
      |       'color: red; background: yellow; padding: 2px 6px; border-radius: 3px;'
      |     );
      |   }
      | 
      |   const observer = new IntersectionObserver(
      |     (entries) => {
      |       entries.forEach((entry) => {
      |         const shouldLower = !entry.isIntersecting;
      | 
      |         if (isFirstCallback) {
      |           isFirstCallback = false;
      |           isLowered = shouldLower;
      |           if (window._stickyDebug) {
      |             console.log('Initial state synced (ignored):', { isLowered });
      |           }
      |           return;
      |         }
      | 
      |         if (shouldLower !== isLowered) {
      |           if (window._stickyDebug) {
      |             console.log(
      |               shouldLower ? '%c LOWER Z-INDEX' : '%c RESTORE Z-INDEX',
      |               `color: white; background: ${shouldLower ? 'crimson' : 'seagreen'}; padding: 2px 6px; border-radius: 3px;`
      |             );
      |             console.log('intersectionRatio:', entry.intersectionRatio, '| rect:', entry.boundingClientRect);
      |           }
      |           $actions.Action_UpdateHeader(shouldLower);
      |           isLowered = shouldLower;
      |         }
      |       });
      |     },
      |     {
      |       root: scrollContainer,
      |       rootMargin: `-${topOffsetPx}px 0px ${BOTTOM_EXTENSION}px 0px`,
      |       threshold: 0,
      |     }
      |   );
      | 
      |   observer.observe(nextSectionEl);
      |   window._activeObserverCount = (window._activeObserverCount || 0) + 1;
      | 
      |   if (window._stickyDebug) {
      |     console.log('%c OBSERVER CREATED', 'background: purple; color: white; padding: 2px 6px;', 'Total active:', window._activeObserverCount);
      |   }
      | 
      |   $parameters.Out_IntersectionObserver = observer;
      | }
      | 
      | watchStickyOverlap('.active-screen.screen-container', 249)
    end
  ```
- **Action_UpdateHeader** inputs: In_IsCurrent: Boolean (mandatory); locals: UpdatedBreakpoint: UI_UpdateItem_Breakpoint
  ```
  assign: UpdatedBreakpoint = UpdateItem_Breakpoint
  if In_IsCurrent
    [M1] trigger event Event_UpdateListHeader(Event_Breakpoint=UpdatedBreakpoint)
    end
  else
    call ListIndexOf(Condition=SectionName = UpdatedBreakpoint.SectionName, List=In_Breakpoints)
    if ListIndexOf.Position <> -1 and ListIndexOf.Position > 0
      assign: UpdatedBreakpoint = In_Breakpoints[ListIndexOf.Position - 1]
      → continues at [M1]
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **ScreenEvent_OnDestroy**
  ```
  if IntersectionObserver <> NullObject()
    javascript DisconnectObserver(Observer=IntersectionObserver)
      | window._activeObserverCount = Math.max(0, (window._activeObserverCount || 0) - 1);
      | 
      | if (window._stickyDebug) {
      |   console.log('%c OBSERVER DESTROYED', 'background: gray; color: white; padding: 2px 6px;', 'Total active:', window._activeObserverCount);
      | }
      | 
      | $parameters.Observer.disconnect();
    assign: IntersectionObserver = NullObject()
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnParametersChanged**
  ```
  if IntersectionObserver = NullObject()
    end
  else
    call ScreenEvent_OnReady()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  call Directory_Updates_GetListBreakpoint(In_Breakpoints=In_Breakpoints, In_CurrentUpdateDate=In_CurrentUpdateDate, In_IsAscending=In_IsAscending, In_PreviousUpdateDate=In_PreviousUpdateDate)
  if (Directory_Updates_GetListBreakpoint.Out_ListBreakpoint.SectionName = Entities.Updates_DateRanges.Today and not In_IsAscending) or \n(Directory_Updates_GetListBreakpoint.Out_ListBreakpoint.SectionName = Entities.Updates_DateRanges.Older and In_IsAscending)
    [M1] if UpdateItem_Breakpoint.SectionName <> NullTextIdentifier() and\nIntersectionObserver = NullObject()
      javascript InitializeIntersectionObserver()
        | $public.View.render().then($actions.Action_SetObserver)
      end
    else
      end
  else
    assign: UpdateItem_Breakpoint = Directory_Updates_GetListBreakpoint.Out_ListBreakpoint
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    [DISABLED] javascript JavaScript1(In_CurrentHeaderId=ListSectionHeader.Id, In_SiblingElementId=In_SiblingId, In_TopElementId=In_TopHeaderId)
      | function watchStickyOverlap(scrollContainerSelector) {
      |   const topEl = document.getElementById($parameters.In_TopElementId);
      |   const incomingEl = document.getElementById($parameters.In_CurrentHeaderId)?.closest(".updates-list__list-section-header");
      |   const nextSectionEl = document.getElementById($parameters.In_SiblingElementId);
      |   const scrollContainer = document.querySelector(scrollContainerSelector) || window;
      | 
      |   if (!topEl || !incomingEl || !nextSectionEl) {
      |     console.warn('One or more elements not found:', { topEl, incomingEl, nextSectionEl });
      |     return;
      |   }
      | 
      |   console.log('Watching:', { topEl, incomingEl, nextSectionEl });
      |   console.log('Listening for scroll on:', scrollContainer);
      | 
      |   const HIGH_Z = '10';
      |   const LOW_Z = '9';
      | 
      |   incomingEl.style.zIndex = HIGH_Z;
      | 
      |   let isLowered = false;
      |   let ticking = false;
      | 
      |   function checkOverlap() {
      |     const topRect = topEl.getBoundingClientRect();
      |     const nextRect = nextSectionEl.getBoundingClientRect();
      | 
      |     // trigger when the NEXT section's top edge crosses the TOP div's top edge
      |     const shouldLower = nextRect.top < topRect.top;
      | 
      |     if (shouldLower !== isLowered) {
      |       console.log(
      |         shouldLower ? '%c LOWER Z-INDEX' : '%c RESTORE Z-INDEX',
      |         `color: white; background: ${shouldLower ? 'crimson' : 'seagreen'}; padding: 2px 6px; border-radius: 3px;`
      |       );
      |       console.log('topRect.top:', topRect.top, '| nextRect.top:', nextRect.top);
      | 
      |       incomingEl.style.zIndex = shouldLower ? LOW_Z : HIGH_Z;
      |       isLowered = shouldLower;
      |     }
      | 
      |     ticking = false;
      |   }
      | 
      |   function onScroll() {
      |     if (!ticking) {
      |       requestAnimationFrame(checkOverlap);
      |       ticking = true;
      |     }
      |   }
      | 
      |   scrollContainer.addEventListener('scroll', onScroll, { passive: true });
      |   checkOverlap();
      | 
      |   return checkOverlap;
      | }
      | 
      | window.setTimeout(() => watchStickyOverlap('.active-screen.screen-container'), 0);
    [DISABLED] javascript JavaScript2()
      | function watchStickyOverlap() {
      |   const topEl = document.getElementById($parameters.In_TopElementId);
      |   const incomingEl = document.getElementById($parameters.In_CurrentHeaderId)?.closest(".updates-list__list-section-header");
      |   const nextSectionEl = document.getElementById($parameters.In_SiblingElementId);
      | 
      |   if (!topEl || !incomingEl || !nextSectionEl) {
      |     console.warn('One or more elements not found:', { topEl, incomingEl, nextSectionEl });
      |     return;
      |   }
      | 
      |   console.log('Watching:', { topEl, incomingEl, nextSectionEl });
      | 
      |   const HIGH_Z = '10';
      |   const LOW_Z = '9';
      |   incomingEl.style.zIndex = HIGH_Z;
      | 
      |   let isLowered = false;
      | 
      |   const observer = new IntersectionObserver(
      |     (entries) => {
      |       entries.forEach((entry) => {
      |         // fires the instant nextSectionEl starts overlapping topEl's box
      |         const shouldLower = entry.isIntersecting;
      | 
      |         if (shouldLower !== isLowered) {
      |           console.log(
      |             shouldLower ? '%c LOWER Z-INDEX' : '%c RESTORE Z-INDEX',
      |             `color: white; background: ${shouldLower ? 'crimson' : 'seagreen'}; padding: 2px 6px; border-radius: 3px;`
      |           );
      |           console.log('intersectionRatio:', entry.intersectionRatio);
      | 
      |           incomingEl.style.zIndex = shouldLower ? LOW_Z : HIGH_Z;
      |           isLowered = shouldLower;
      |         }
      |       });
      |     },
      |     {
      |       root: topEl,     // <-- topEl itself is the intersection boundary now
      |       threshold: 0,
      |     }
      |   );
      | 
      |   observer.observe(nextSectionEl);
      | 
      |   return observer;
      | }
      | 
      | window.setTimeout(() => watchStickyOverlap(), 0);
    end
  ```

## Block UpdateItem_Header (flow Directory_Updates)
- public: False
- input parameters: ShowMarkAll: Boolean = True; Title: Text; BadgeNumber: Integer (mandatory); isLoading: Boolean (mandatory)
- events: Click_MarkAll()
- local variables: -
- lifecycle: none
- used by (UBTConnect): SectionHeader, Updates_SingleList

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses="updates-list__header", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmall, HorizontalSizeId: Entities.UBT_Size.Base }, MarginSize: {  }, BorderOption…
  placeholder Content:
    block Columns_Two (UBTConnectLibrary.BasePatterns)
      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }
      placeholder Left:
        block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
          args: In_IsLoading=isLoading
          placeholder Placeholder_LoadingSection:
            block IconText (UBTConnectLibrary.ConnectPatterns)
              args: IsIconOnRight=True, SpacingSize=Entities.UBT_Size.ExtraSmall, Text=Title, TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
              placeholder Icon:
                if BadgeNumber > 0 #If_HasBadge
                  block Badge (UBTConnectLibrary.OutSystemsUIOverrides)
                    args: Color=Entities.UBT_Color.RedDark, MaxNumber=9, Number=BadgeNumber, Size=Entities.UBT_Size.ExtraSmall
      placeholder Right:
        if ShowMarkAll #If_ShowMarkAll
          container
            block CustomText (UBTConnectLibrary.BasePatterns)
              args: In_Text="Mark All as Read", In_TextOptions={ Color: Entities.UBT_Color.Primary, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
              on Clicked → Click_MarkAll
```

## Block Updates_NoItemsFound (flow Directory_Updates)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Updates_SingleList

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: ExtendedClasses="full-width full-height", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, DisplayOptions: { Display: Entities.UBT_Display.Flex, AlignItems: Entities.UBT_…
  placeholder Content:
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: ExtendedClasses="full-width", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { GeneralSizeId: En…
      placeholder Content:
        block CircleButton (UBTConnectLibrary.ConnectPatterns)
          args: BackgroundColorId=Entities.UBT_Color.Primary, SizeId=Entities.UBT_AvatarSize.Small_40
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=Entities.UBT_Color.Neutral0, In_IconId=Entities.UBT_Icons2.CalendarBusyFill, In_SizeId=Entities.UBT_IconsSize.Base_24
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: ExtendedClasses="margin-top-base", In_Text="No Updates Found", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text="We were unable to find any Updates to display.", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.Regular }
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
| FilterSheet | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | In_StartFilter: Filter_Common (mandatory); In_Options: Filter_Common_Options (mandatory); ExtendedClasses: Text | ApplyFilters; Loaded; SheetInitialized |
| FilterSheet_Icon | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | HaveFiltersApplied: Boolean (mandatory); BottomSheetId: Text (mandatory); isLoaded: Boolean (mandatory); ShowSubscriptionOnClick: Boolean (mandatory) | - |
| FilterSheet_OptionChoice_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_Choice: Filter_Common_Control_Choice (mandatory) | OnChange |
| FilterSheet_OptionList_Item | App_CommonBlocks_Filter | `../../_shared/pack/blocks.md` | Filter_Common_Control_List: Filter_Common_Control_List (mandatory); ShowHeader: Boolean (mandatory); ForceUpdate: Boolean | Event_Input_OnReady; OnBack; OnChange |
| HandleOnResumeOpenLink | Legacy_Share | `../../Legacy_Share/pack/blocks.md` | - | - |
| OfflineDataSyncEvents | App_Common | `../../App_Common/pack/blocks.md` | - | OnSyncComplete; OnSyncError; OnSyncStart |
| Policy_Checker | App_Policies | `../../App_Policies/pack/blocks.md` | - | - |
| Section | App_Common_Blocks | `../../_shared/pack/blocks.md` | isTransparentBackground: Boolean; AddHorizontalPadding: Boolean = True; MarginTopSizeId: UBT_Size Identifier | - |
| UnsupportedVersion | App_Common | `../../App_Common/pack/blocks.md` | In_ExtendedClass: Text; In_HideButton: Boolean | Event_NavigateToPlaystore |
| UnsupportedVersion_Browser | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Native | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_WebView | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| UnsupportedVersion_Wrapper | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| WelcomeToConnect | App_Common | `../../App_Common/pack/blocks.md` | - | - |
