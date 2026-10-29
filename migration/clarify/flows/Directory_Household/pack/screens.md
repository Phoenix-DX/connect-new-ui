# Pack of UI flow Directory_Household (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Household_Relations, HouseholdCarousel, HouseholdDetails

## Screen Household_Relations (flow Directory_Household)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: HouseholdId: Long Integer (mandatory); MemberId: Long Integer (mandatory)
- local variables: PageTitle: Text
- lifecycle: none

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  args: In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text=PageTitle, In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Small, FontWeight: Entities.UBT_FontWeight.SemiBold }
  placeholder Content:
    block HouseholdRelations_Block (UBTConnect.Directory_Household)
      args: HouseholdId=HouseholdId, MemberId=MemberId
      on RelationsDetails_Fetched → Handler_OnRelationsDetailsFetched(RelationsTitle=RelationsTitle)
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_OnRelationsDetailsFetched** inputs: RelationsTitle: Text (mandatory)
  ```
  assign: PageTitle = RelationsTitle
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen HouseholdCarousel (flow Directory_Household)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: In_StartingHouseholdId: Long Integer
- local variables: HouseholdHeader: Text; HouseholdPreload: CarouselPreloadedHouseholds; StartingPosition: Integer; SwippedItems: EntitiesCarousel_SwippedItem List; EntitiesCarousel_Items: EntitiesCarousel_Item List
- lifecycle: OnInitialize → ScreenEvent_OnInitialize

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts) #DetailPage
  args: In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=HouseholdHeader = ""
      placeholder Placeholder_LoadingSection:
        if HouseholdHeader <> ""
          expr: HouseholdHeader
        else
          expr: "Unavailable, Unavailable"
  placeholder Content:
    block EntitiesCarousel (UBTConnect.Directory_Caroussel)
      args: In_ConnectEntityTypeId=Entities.Connect_Entity.Household, In_EntitiesCarousel_Items=EntitiesCarousel_Items, In_StartingPosition=StartingPosition
      on Event_Moved → Handler_EventMoved(In_ItemIndex=Event_Index)
      on Event_SetHeader → Handler_SetHeader(Event_Header=Event_Header)
    if SwippedItems.Empty
    else
      block BackNavigationHandler (NavigationHandler.NavigationHandler)
        on BackNavigation → Handler_BackNavigation(BackNavigationEvent=BackNavigationEvent)
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_BackNavigation** inputs: BackNavigationEvent: Object (mandatory)
  ```
  call SetPreloadObject(Preload=ToObject(SwippedItems))
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_EventMoved** inputs: In_ItemIndex: Integer (mandatory); locals: SwippedItemId: Text
  ```
  if (Has swipe action?) HouseholdPreload.CarouselHouseholdItem.Length > In_ItemIndex and\nHouseholdPreload.CarouselHouseholdItem[In_ItemIndex].SwipeAction.ActionId <> NullTextIdentifier()
    if HouseholdPreload.CarouselHouseholdItem[In_ItemIndex].SwipeAction.ActionId = Entities.Type_CarouselItemSwipeAction.UpdatesCarousel_SetIsRead
      call Directory_Updates_CarouselSwipeAction(In_Parameters=HouseholdPreload.CarouselHouseholdItem[In_ItemIndex].SwipeAction.Parameters)
      assign: SwippedItemId = Directory_Updates_CarouselSwipeAction.Out_ItemId
      assign: HouseholdPreload.CarouselHouseholdItem[In_ItemIndex].SwipeAction.ActionId  = NullTextIdentifier()
      [M1] if SwippedItemId <> ""
        call ListIndexOf(Condition=EntityItemId = SwippedItemId, List=SwippedItems)
        if ListIndexOf.Position <> -1
          end
        else
          call ListAppend(Element={ EntityItemId: SwippedItemId, ListPosition: In_ItemIndex }, List=SwippedItems)
          end
      else
        end
    else
      → continues at [M1]
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **Handler_SetHeader** inputs: Event_Header: Text (mandatory)
  ```
  assign: HouseholdHeader = Event_Header
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnInitialize**
  ```
  if HouseholdPreload.CarouselHouseholdItem.Empty
    call GetPreloadObject()
    call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(HouseholdPreload))
    assign: EntitiesCarousel_Items = ConvertList(HouseholdPreload.CarouselHouseholdItem,  {EntityId:"Household"})
    call ListIndexOf(Condition=Household = In_StartingHouseholdId, List=HouseholdPreload.CarouselHouseholdItem)
    if ListIndexOf.Position <> -1
      assign: StartingPosition = ListIndexOf.Position
      end
    else
      end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Screen HouseholdDetails (flow Directory_Household)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: HouseholdId: Long Integer (mandatory)
- local variables: LocalityName: Text; CountryName: Text; DeceasedOrAncestry_View: Boolean
- lifecycle: none

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts) #DetailPage
  args: In_IsPrimaryColor=False
  placeholder Placeholder_Header_Title:
    expr: //If( not DeceasedOrAncestry_View,  removed for https://ubteam.atlassian.net/browse/NC2-1241\nIf(LocalityName <> "",\n    LocalityName + If(CountryName <> "", ", " + CountryName, ""),\n    CountryName)\n//), "")  (example: Blenheim, New Zealand)  [style="font-semi-bold text-neutral-10"]
  placeholder Content:
    block HouseholdDetails_Block (UBTConnect.Directory_Household)
      args: HouseholdId=HouseholdId
      on HouseholdDataFetched → Handler_HouseholdDetails_DataFetched(Evt_CountryName=CountryName, Evt_DeceasedOrAncestry_View=DeceasedOrAncestry_View, Evt_LocalityName=LocalityName)
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
```

#### Screen actions
- **Handler_HouseholdDetails_DataFetched** inputs: Evt_LocalityName: Text (mandatory); Evt_CountryName: Text (mandatory); Evt_DeceasedOrAncestry_View: Boolean (mandatory)
  ```
  assign: LocalityName = Evt_LocalityName; CountryName = Evt_CountryName; DeceasedOrAncestry_View = Evt_DeceasedOrAncestry_View
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
