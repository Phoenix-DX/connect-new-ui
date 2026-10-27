# Pack of UI flow Directory_Photobook (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Photobook

## Screen Photobook (flow Directory_Photobook)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_HouseholdId: Long Integer (mandatory); In_LocalityId: Long Integer (mandatory)
- local variables: IsLoading: Boolean; SelectedHousehold: SelectedHousehold
- lifecycle: OnInitialize → OnInitialize

#### Data sources
- data action **GetLocalityHouseholdIds** fetch=AtStart; outputs: Out_LocalityHouseholdIds: UI_PhotobookHousehold List; OnAfterFetch → OnAfterFetch_GetLocalityHouseholdIds
  ```
  call-server GetPhotobookHouseholds(In_LocalityId=In_LocalityId)
  assign (Set output): Out_LocalityHouseholdIds = GetPhotobookHouseholds.Out_Households
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block LayoutRuntime_Top (NavigationHandler.LayoutRuntime_NavigationHandler)
block CommonUI_InsideLayout (UBTConnect.App_Common)
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=IsLoading
  placeholder Placeholder_LoadingSection:
    if not IsLoading and GetLocalityHouseholdIds.IsDataFetched #If_FinishedLoading
      block Photobook_Carousel (UBTConnect.Directory_Photobook)
        args: In_Households=GetLocalityHouseholdIds.Out_LocalityHouseholdIds, In_SelectedHousehold=SelectedHousehold
        on ClosePhotobook → Handler_ClosePhotobook(TargetHousehold=Event_CurrentHousehold)
    else
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ Background: { BackgroundColor: Entities.UBT_Color.CyanLightest }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, BorderOptions: { Size: { GeneralSizeId: Entities.UBT_Size.None } }, TextOpt…
```

#### Screen actions
- **Handler_ClosePhotobook** inputs: TargetHousehold: UI_PhotobookHousehold (mandatory); locals: HouseholdIdList: CarouselPreloadedHouseholds
  ```
  if (Has Target?) TargetHousehold.HouseholdId <> NullIdentifier()
    call ReplaceOnUpcomingNavigation()
    call GetHasCarouselEnabled()
    if GetHasCarouselEnabled.HasCarouselEnabled
      assign: HouseholdIdList.CarouselHouseholdItem = ConvertList(GetLocalityHouseholdIds.Out_LocalityHouseholdIds,  {Household:"HouseholdId"})
      call SetPreloadObject(Preload=ToObject(HouseholdIdList))
      navigate → HouseholdCarousel(In_StartingHouseholdId=TargetHousehold.HouseholdId) transition=Inherited
    else
      navigate → HouseholdDetails(HouseholdId=TargetHousehold.HouseholdId) transition=Inherited
  else
    navigate → (Previous Screen)() transition=UseHistory
  ```
- **OnAfterFetch_GetLocalityHouseholdIds**
  ```
  call ListIndexOf(Condition=HouseholdId = In_HouseholdId, List=GetLocalityHouseholdIds.Out_LocalityHouseholdIds) as ListIndexOf_GetSelectedHousehold
  assign (Set Selected Position): SelectedHousehold.Position = If(ListIndexOf_GetSelectedHousehold.Position <> -1, ListIndexOf_GetSelectedHousehold.Position, 0)
  assign: IsLoading = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Is View Restored From Cache?) IsViewRestoredFromCache.IsRestoredFromCache
    end
  else
    assign (Set Selected Id): SelectedHousehold.Id = In_HouseholdId
    assign: IsLoading = True
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
