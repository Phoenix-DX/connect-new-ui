# Pack of UI flow App_Services (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: Services

## Screen Services (flow App_Services)
- roles: Registered, UBTOne_User; URL structure: QueryString; stylesheet: yes
- input parameters: -
- local variables: isLoading: Boolean; ReferenceServices: Connect_Services List; HasChanges: Boolean
- lifecycle: none

#### Data sources
- data action **GetServices** fetch=AtStart; outputs: AvailableServices: Connect_Services List; CurrentServices: Connect_Service_User, Connect_Services Record List; OnAfterFetch → OnAfterFetch_GetServices
  ```
  call-server Service_ConnectServices_GetByUser()
  assign: CurrentServices = Service_ConnectServices_GetByUser.CurrentServices; AvailableServices = Service_ConnectServices_GetByUser.AvailableServices
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Title:
    text: Manage Services
  placeholder Content:
    container #ContentWrapper
      block SkeletonSection (UBTConnectLibrary.ConnectPatterns) #Content
        args: In_IsLoading=not (GetServices.IsDataFetched or  GetServices.HasFetchError) or isLoading
        placeholder Placeholder_LoadingSection:
          block SortableList (SortableJS.Sortable)
            args: Group="services", PreventDomMove=True
            on OnDragEnd → Handler_SortableListOnDragEnd(FromId=FromId, ItemId=ItemId, NewIndex=NewIndex, OldIndex=OldIndex, ToId=ToId)
            placeholder ListPlaceholder:
              block CustomContainer (UBTConnectLibrary.BasePatterns) #Favourites2
                args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
                placeholder Content:
                  block CustomText (UBTConnectLibrary.BasePatterns)
                    args: In_PaddingOptions={ VerticalSizeId: Entities.UBT_Size.Small }, In_Text="Favourites", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
                  list source=GetServices.CurrentServices mode=Default #FavouriteList  [style="list list-group"]
                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                      args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral4, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
                      placeholder Content:
                        block Columns_Two (UBTConnectLibrary.BasePatterns)
                          args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }
                          placeholder Left:
                            block SortableList_Draggable (SortableJS.Sortable)
                              args: Id=GetServices.CurrentServices.Current.Connect_Services.Id, UseCustomDragHandle=True
                              placeholder Item:
                                block Columns_Two (UBTConnectLibrary.BasePatterns)
                                  args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceFirst, SpacingSize: Entities.UBT_Size.Small, VerticalAlign: Entities.UBT_VerticalAlign.Center }
                                  placeholder Left:
                                    block CustomContainer (UBTConnectLibrary.BasePatterns)
                                      args: ExtendedClasses="drag-handle", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral1 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.ExtraSmall }, BorderOptions: { Radius: { Ge…
                                      placeholder Content:
                                        block Icon (UBTConnectLibrary.ConnectPatterns)
                                          args: In_ColorId=Entities.UBT_Color.Neutral6, In_IconId=Entities.UBT_Icons2.DragIndicator, In_SizeId=Entities.UBT_IconsSize.NonStandard_14
                                  placeholder Right:
                                    block IconText (UBTConnectLibrary.ConnectPatterns)
                                      args: SpacingSize=Entities.UBT_Size.Small, Text=GetServices.CurrentServices.Current.Connect_Services.Label, TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                                      placeholder Icon:
                                        block Icon (UBTConnectLibrary.ConnectPatterns)
                                          args: In_IconId=GetServices.CurrentServices.Current.Connect_Services.IconId, In_SizeId=Entities.UBT_IconsSize.Base_24
                          placeholder Right:
                            if GetServices.CurrentServices.Current.Connect_Services.isMandatory #IsMandatory2
                            else
                              block Icon (UBTConnectLibrary.ConnectPatterns)
                                args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.CancelFill, In_SizeId=Entities.UBT_IconsSize.Base_24
                                on Click → Handler_SortableListOnDragEnd(FromId=FavouriteList.Id, ItemId=GetServices.CurrentServices.Current.Connect_Services.Id, NewIndex=-1, OldIndex=GetServices.CurrentServices.Current.Connect_Service_User.Order, ToId=Suggestions2.Id)
          if not GetServices.AvailableServices.Empty
            block SectionSeparator (UBTConnect.App_Common_Blocks)
            block SortableList (SortableJS.Sortable)
              args: DenyLists=[ SuggestionList.Id, FavouriteList.Id ], Group="services", PreventDomMove=True
              on OnDragEnd → Handler_SortableListOnDragEnd(FromId=FromId, ItemId=ItemId, NewIndex=NewIndex, OldIndex=OldIndex, ToId=ToId)
              placeholder ListPlaceholder:
                block CustomContainer (UBTConnectLibrary.BasePatterns) #Suggestions2
                  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
                  placeholder Content:
                    block CustomText (UBTConnectLibrary.BasePatterns)
                      args: In_PaddingOptions={ VerticalSizeId: Entities.UBT_Size.Small }, In_Text="Suggestions", In_TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Heading6, FontWeight: Entities.UBT_FontWeight.SemiBold }
                    list source=GetServices.AvailableServices mode=Default #SuggestionList  [style="list list-group"]
                      block SortableList_Draggable (SortableJS.Sortable)
                        args: Id=GetServices.AvailableServices.Current.Id, UseCustomDragHandle=True
                        placeholder Item:
                          block CustomContainer (UBTConnectLibrary.BasePatterns)
                            args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral4, Size: { BottomSizeId: Entities.UBT_Size.Small } } }
                            placeholder Content:
                              block Columns_Three (UBTConnectLibrary.BasePatterns)
                                args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ExpandMiddle, SpacingSize: Entities.UBT_Size.Small, VerticalAlign: Entities.UBT_VerticalAlign.Center }
                                placeholder Left:
                                  block CustomContainer (UBTConnectLibrary.BasePatterns)
                                    args: ExtendedClasses="drag-handle", Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral1 }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.ExtraSmall }, BorderOptions: { Radius: { Ge…
                                    placeholder Content:
                                      block Icon (UBTConnectLibrary.ConnectPatterns)
                                        args: In_ColorId=Entities.UBT_Color.Neutral6, In_IconId=Entities.UBT_Icons2.DragIndicator, In_SizeId=Entities.UBT_IconsSize.NonStandard_14
                                placeholder Middle:
                                  block IconText (UBTConnectLibrary.ConnectPatterns)
                                    args: SpacingSize=Entities.UBT_Size.Small, Text=GetServices.AvailableServices.Current.Label, TextOptions={ Color: Entities.UBT_Color.Neutral10, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
                                    placeholder Icon:
                                      block Icon (UBTConnectLibrary.ConnectPatterns)
                                        args: In_IconId=GetServices.AvailableServices.Current.IconId, In_SizeId=Entities.UBT_IconsSize.Base_24
                                placeholder Right:
                                  block Icon (UBTConnectLibrary.ConnectPatterns)
                                    args: In_ColorId=Entities.UBT_Color.Primary, In_IconId=Entities.UBT_Icons2.AddCircle, In_SizeId=Entities.UBT_IconsSize.Base_24
                                    on Click → Handler_SortableListOnDragEnd(FromId=SuggestionList.Id, ItemId=GetServices.AvailableServices.Current.Id, NewIndex=GetServices.CurrentServices.Length + 1, OldIndex=-1, ToId=FavouriteList.Id)
    block FixedFooter (UBTConnectLibrary.ConnectPatterns)
      args: ContentContainerId=ContentWrapper.Id, ExpectedFooterHeight="calc(2 * var(--space-base) + var(--ubt-button-height-m))", useBottomBar=False
      placeholder Content:
        block CustomContainer (UBTConnectLibrary.BasePatterns)
          args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Base }, ShadowId: Entities.UBT_Shadow.ExtraSmallTop }
          placeholder Content:
            block ButtonLoading (OutSystemsUI_2_23.Utilities2)
              args: IsLoading=isLoading
              placeholder Button:
                block Button (UBTConnect_Utils+UBTConnectLibrary.CW_Common)
                  args: ButtonText="Save changes", IsDisabled=isLoading
                  on buttonOnClick → OnClick_SaveChanges
```

#### Screen actions
- **Action_ChangeOrderLocal** inputs: NewOrder: Integer (mandatory); OldOrder: Integer (mandatory); isFromFavoriteList: Boolean (mandatory); isToFavoriteList: Boolean (mandatory); ItemId: Text (mandatory); locals: isReorderingFavorites: Boolean; isRemovingFavorites: Boolean; isAddingFavorites: Boolean; isUseMovingDown: Boolean; isUseMovingUp: Boolean; UserId: User Identifier; Connect_Service_User: Connect_Service_User, Connect_Services Record
  ```
  if NewOrder = OldOrder
    end
  else
    assign: HasChanges = True
    assign: isReorderingFavorites = isFromFavoriteList and isToFavoriteList; isRemovingFavorites = isFromFavoriteList and not isToFavoriteList; isAddingFavorites = isToFavoriteList and not isFromFavoriteList; UserId = GetUserId(); isUseMovingDown = NewOrder > OldOrder; isUseMovingUp = OldOrder > NewOrder
    assign (Adjust for zero based): NewOrder = NewOrder - 1; OldOrder = OldOrder - 1
    if isAddingFavorites
      call ListFilter(Condition=Id = TextToIdentifier(ItemId), SourceList=ReferenceServices) as GetReferenceService
      assign (LocalService): Connect_Service_User.Connect_Service_User.UserId = UserId; Connect_Service_User.Connect_Service_User.ConnectServiceId = TextToIdentifier(ItemId); Connect_Service_User.Connect_Service_User.Id = NullIdentifier(); Connect_Service_User.Connect_Services = GetReferenceService.FilteredList.Current
      [M1] if isRemovingFavorites
        call ListRemove(List=GetServices.CurrentServices, Position=OldOrder)
        call ListInsert(Element=ConvertRecord(Connect_Service_User,  {Value:"Connect_Services"}), List=GetServices.AvailableServices, Position=0) as ListInsert3
        [M2] for each GetServices.CurrentServices
          assign: GetServices.CurrentServices.Current.Connect_Service_User.Order = GetServices.CurrentServices.CurrentRowNumber + 1
          → continues at [M2]
        end for
        end
      else
        if isReorderingFavorites
          call ListRemove(List=GetServices.CurrentServices, Position=OldOrder) as ListRemove2
          [M3] call ListInsert(Element=Connect_Service_User, List=GetServices.CurrentServices, Position=NewOrder) as ListInsert2
          → continues at [M2]
        else
          if isAddingFavorites
            call ListIndexOf(Condition=Id = TextToIdentifier(ItemId), List=GetServices.AvailableServices) as GetAvailableItem
            if GetAvailableItem.Position <> -1
              call ListRemove(List=GetServices.AvailableServices, Position=GetAvailableItem.Position) as ListRemove3
              → continues at [M3]
            else
              → continues at [M3]
          else
            → continues at [M2]
    else
      call ListIndexOf(Condition=Connect_Services.Id = TextToIdentifier(ItemId), List=GetServices.CurrentServices) as GetCurrentService
      assign (LocalService): Connect_Service_User = GetServices.CurrentServices[GetCurrentService.Position]
      → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handler_SortableListOnDragEnd** inputs: FromId: Text (mandatory); ToId: Text (mandatory); OldIndex: Integer (mandatory); NewIndex: Integer (mandatory); ItemId: Text (mandatory)
  ```
  if OldIndex = NewIndex
    end
  else
    call Action_ChangeOrderLocal(isFromFavoriteList=FromId = FavouriteList.Id, isToFavoriteList=ToId = FavouriteList.Id, ItemId=ItemId, NewOrder=NewIndex, OldOrder=OldIndex)
    end
  on exception All Exceptions (log=True)
  assign: isLoading = False
  raise BubbleGenericException: AllExceptions.ExceptionMessage
  on exception Communication Exception (log=True)
  assign: isLoading = False
  raise BubbleCommunicationException: CommunicationException.ExceptionMessage
  on exception Not Registered (log=True)
  raise Not Registered: NotRegistered.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnAfterFetch_GetServices**
  ```
  if ReferenceServices.Empty
    call ListAppendAll(List=ReferenceServices, SourceList=GetServices.AvailableServices)
    call ListAppendAll(List=ReferenceServices, SourceList=ConvertList(GetServices.CurrentServices,  {Value:"Connect_Services"})) as ListAppendAll2
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnClick_SaveChanges**
  ```
  if HasChanges
    assign: isLoading = True
    call-server Service_ConnectServices_ChangeOrder_Bulk(CurrentServices=GetServices.CurrentServices)
    assign: isLoading = False
    call FeedbackMessage_AutoClose(Message="Your changes were saved.", MessageType=Entities.UBT_MessageType.Success)
    assign: HasChanges = False
    end
  else
    end
  on exception All Exceptions (log=True)
  assign: isLoading = False
  raise BubbleGenericException: AllExceptions.ExceptionMessage
  on exception Communication Exception (log=True)
  assign: isLoading = False
  raise BubbleCommunicationException: CommunicationException.ExceptionMessage
  on exception Not Registered (log=True)
  raise Not Registered: NotRegistered.ExceptionMessage
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
