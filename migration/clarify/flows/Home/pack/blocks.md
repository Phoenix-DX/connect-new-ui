# Pack of UI flow Home (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: FeedBlock_CommunityPopulation, FeedBlock_Services, FeedBlock_Updates, Feed_Embeded, Section_FeedWrapper
Blocks of other UBTConnect flows that the flow uses (transitive): 22

## Block Feed_Embeded (flow Home)
- public: False
- input parameters: FeedItemId: Text
- events: Event_Share(Event_ShareId: Text (mandatory); Event_FeedItemTitle: Text (mandatory); Event_FeedItemSubtitle: Text (mandatory); Event_FeedItemImageURL: Text (mandatory))
- local variables: SharePopUp_Show: Boolean; SharePopUp_Id: Text; ShareFeedItem_Title: Text; isLoadingDocument: Boolean
- lifecycle: none
- used by (UBTConnect): FeedItemDetail, HomeFeed, MessageDetail

#### Widget tree
```
if GetHasFeedEnabled()
  block Embedded_FeedCMS (UBTConnect_EmbedFeed.Blocks)
    args: B2CTenant=Client.Embedd_B2CTenant, FeedItemId=FeedItemId
    on OnShare → Embedded_FeedCMSOnShare(FeedItemImageURL=FeedItemImageURL, FeedItemSubtitle=FeedItemSubtitle, FeedItemTitle=FeedItemTitle, ShareId=ShareId)
    on OnDownloaded → Handle_Download(Filename=Filename, URL=URL)
block SharePopup (UBTConnect_Utils.CW_CTA_PopUps)
  args: In_ContactPopupData={ EntityTypeId: Entities.Connect_Entity.FeedItem, EntityId: TextToInteger(SharePopUp_Id), IsAvatarImage: False, ActionName: "Share " + ShareFeedItem_Title, Name: "", Locality: "", TimezoneName: "", T…
  on Event_Cancel → Handle_Share(In_isOpen=False)
  on Event_ShareToConnect → Handle_Share_Connect
  on Event_ShareToOthers → Handle_Share_Others
block HandleDownload (FileTransferPlugin.FileTransfer)
  on OnDownloadProgress → HandleDownloadOnDownloadProgress(Progress=Progress)
  on OnDownloadComplete → HandleDownloadOnDownloadComplete(FileDownloadResult=FileDownloadResult, Filepath=FileDownloadResult.fullPath)
  on OnDownloadError → HandleDownloadOnDownloadError(FileTransferError=FileTransferError)
```

#### Block actions
- **Embedded_FeedCMSOnShare** inputs: ShareId: Text (mandatory); FeedItemTitle: Text (mandatory); FeedItemSubtitle: Text (mandatory); FeedItemImageURL: Text (mandatory)
  ```
  if GetHasExtendedShare()
    trigger event Event_Share(Event_FeedItemImageURL=FeedItemImageURL, Event_FeedItemSubtitle=FeedItemSubtitle, Event_FeedItemTitle=FeedItemTitle, Event_ShareId=ShareId)
    end
  else
    call JSUtils_Console_Log(Message=ShareId)
    assign: SharePopUp_Id = ShareId; SharePopUp_Show = True; ShareFeedItem_Title = FeedItemTitle
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Handle_Download** inputs: URL: Text (mandatory); Filename: Text (mandatory)
  ```
  call OpenInApp_TryOpenFileInApp(DownloadUrl=URL, Filename=Filename, FolderToSave="connect-feed-documents")
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handle_Share** inputs: In_isOpen: Boolean (mandatory)
  ```
  assign: SharePopUp_Show = In_isOpen
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handle_Share_Connect**
  ```
  call Handle_Share(In_isOpen=False)
  javascript Yield()
    | Promise.resolve().then($resolve);
  navigate → LegacyShareObject(In_CustomTitle=ShareFeedItem_Title, In_ObjectId=SharePopUp_Id, In_ShareObjectTypeId=Entities.Type_ShareObject.Feed) transition=Inherited
  ```
- **Handle_Share_Others**
  ```
  call Handle_Share(In_isOpen=False)
  call ShareEntity_ByURL(In_ShareableObjectId=SharePopUp_Id, In_ShareTypeId=Entities.Type_ShareObject.Feed)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **HandleDownloadOnDownloadComplete** inputs: FileDownloadResult: FileDownloadResult (mandatory); Filepath: Text (mandatory)
  ```
  call CheckMediaScanner_Plugin()
  if CheckMediaScanner_Plugin.IsAvailable
    call MediaScannerPlugin_ForceScan(FilePath=Filepath)
    [M1] call OpenDocumentFromLocalPath(FilePath=FileDownloadResult.fullPath)
    assign: isLoadingDocument = False
    end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **HandleDownloadOnDownloadError** inputs: FileTransferError: FileTransferError (mandatory); locals: Message: Text
  ```
  assign: isLoadingDocument = False
  if FileTransferError.Message = "Document not found"
    assign: Message = "The file you are trying to open is no longer available and cannot be opened."
    [M1] call FeedbackMessage_AutoClose(Message=Message, MessageType=Entities.UBT_MessageType.Info)
    end
  else
    assign: Message = "Unfortunately this file could not be opened. Please try again at a later time."
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **HandleDownloadOnDownloadProgress** inputs: Progress: Progress (mandatory)
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block FeedBlock_CommunityPopulation (flow Home)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): CountryList, HomeFeed

#### Data sources
- data action **FetchCount** fetch=AtStart; outputs: UI_MembersStatistics: UI_MembersStatistics
  ```
  call-server Get_UI_MembersStatistics(RegionsSubscriptionId=Entities.Connect_Subscription_Region.Global)
  assign: UI_MembersStatistics = Get_UI_MembersStatistics.UI_MembersStatistics
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.PrimaryGradientRadial }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base }, BorderOptions: { Radiu…
  on Clicked → OnClick_Block
  placeholder Content:
    block CustomText (UBTConnectLibrary.BasePatterns)
      args: In_Text="Community Population", In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.DoubleExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
      args: In_IsLoading=not FetchCount.IsDataFetched and not FetchCount.HasFetchError
      placeholder Placeholder_LoadingSection:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: In_Text=If(not FetchCount.IsDataFetched and not FetchCount.HasFetchError,\n//Loading so show bigger number for skeleton\n"00000",\nFormatDecimal(FetchCount.UI_MembersStatistics.TotalNumberOfMembers,0,"",",")…, In_TextOptions={ Color: Entities.UBT_Color.Neutral0, FontSize: Entities.UBT_FontSize.Heading2, FontWeight: Entities.UBT_FontWeight.SemiBold }
```

#### Block actions
- **OnClick_Block**
  ```
  navigate → Updates_SingleList() transition=Inherited
  ```

## Block FeedBlock_Services (flow Home)
- public: False
- input parameters: ItemPerPage: Integer = 6; ForceAddService: Boolean
- events: -
- local variables: MainElementClass: Text = "ubt-services-carousel"; Local_ServicesPerPage: UI_ServicesPage List; ExternalAppPopUp_Id: Text; Local_ExternalApp_PopUpInfo: ExternalApp_PopUpInfo
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): HomeFeed

#### Data sources
- data action **GetServices** fetch=AtStart; outputs: List: Connect_Services List; ExternalLinks_ElGusto: Text; ExterrnalPackages_CommunityTradelink: Text = "xyz.appmaker.bufeqe"; ExterrnalPackages_HR100: Text = "com.ubtconnectglobal.ubtm.HR100Mobile"; ExterrnalPackages_Trove: Text = "com.ubtconnectglobal.ubtm.TroveMobile"; OnAfterFetch → OnAfterFetch_GetServices
  ```
  call-server GetExternalLinks_ElGusto()
  assign: ExternalLinks_ElGusto = GetExternalLinks_ElGusto.Link
  call-server GetExternalPackages_CommunityTradelink()
  call-server GetExternalPackages_HR100()
  call-server GetExternalPackages_Trove()
  assign: ExterrnalPackages_CommunityTradelink = GetExternalPackages_CommunityTradelink.Package; ExterrnalPackages_HR100 = GetExternalPackages_HR100.Package; ExterrnalPackages_Trove = GetExternalPackages_Trove.Package
  call-server Service_ConnectServices_GetByUser()
  assign: List = ConvertList(Service_ConnectServices_GetByUser.CurrentServices,  {Value:"Connect_Services"})
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns) #DIV_Services
  args: ExtendedClasses=MainElementClass, Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral0, Opacity: 0.87 }, PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, BorderOptions: { Radius: { GeneralSizeId: Entities.UBT_Shape.La…
  placeholder Content:
    block Columns_Two (UBTConnectLibrary.BasePatterns)
      args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast, SpacingSize: Entities.UBT_Size.Small, VerticalAlign: Entities.UBT_VerticalAlign.Center }, ExtendedClasses="padding-x-s"
      placeholder Left:
        block CustomText (UBTConnectLibrary.BasePatterns)
          args: ExtendedClasses="margin-left-s", In_Text="Services", In_TextOptions={ FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
      placeholder Right:
        if GetHasCustomEvents() #HidingForH1
          block CircleButton (UBTConnectLibrary.ConnectPatterns)
            args: BackgroundColorId=Entities.UBT_Color.Neutral0, BorderColorId=Entities.UBT_Color.Neutral3, SizeId=Entities.UBT_AvatarSize.ExtraSmall_32
            on OnClick → OnClick_ServiceSettings
            placeholder Icon:
              block Icon (UBTConnectLibrary.ConnectPatterns)
                args: In_ColorId=Entities.UBT_Color.Neutral7, In_IconId=Entities.UBT_Icons2.Settings, In_SizeId=Entities.UBT_IconsSize.Base_24
    block CustomContainer (UBTConnectLibrary.BasePatterns)
      args: Options={ MarginSize: { TopSizeId: Entities.UBT_Size.ExtraSmall } }
      placeholder Content:
        block Carousel (OutSystemsUI_2_23.Interaction) #Carousel_Services
          args: ExtendedClass=MainElementClass, ItemsPerSlide={ Desktop: 1, Tablet: 1, Phone: 1 }, Navigation=Entities.CarouselNavigation.Dots, OptionalConfigs={ AutoPlay: False, Loop: False, Padding: "var(--space-s)", StartingPosition: 0 }
          placeholder CarouselItems:
            list source=Local_ServicesPerPage mode=Default  [style="list list-group " + MainElementClass + "__list"; disable-virtualization=True]
              block Gallery (OutSystemsUI_2_23.Adaptive)
                args: ExtendedClass=MainElementClass + "__gallery", RowItemsDesktop=3, RowItemsPhone=3, RowItemsTablet=3
                placeholder Content:
                  list source=Local_ServicesPerPage.Current.ServiceItem mode=Default  [style="list list-group " + MainElementClass + "__list-items"; disable-virtualization=True]
                    block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
                      args: In_IsLoading=not GetServices.IsDataFetched or GetServices.HasFetchError
                      placeholder Placeholder_LoadingSection:
                        block CircleButton_WithLabel (UBTConnectLibrary.ConnectPatterns)
                          args: BackgroundColorId=Entities.UBT_Color.Neutral0, BorderColorId=Entities.UBT_Color.Neutral3, PaddingSize=If(Index(Local_ServicesPerPage.Current.ServiceItem.Current.IconId,"SVG_",startIndex:,searchFromEnd:,ignoreCase:) <> -1, NullTextIdentifier() ,Entities.UBT_Size.Small), SizeId=Entities.UBT_AvatarSize.Large_65
                          on OnClick → OnClick_Service(SelectedService=Local_ServicesPerPage.Current.ServiceItem.Current)
                          placeholder Icon:
                            block Icon (UBTConnectLibrary.ConnectPatterns)
                              args: In_IconId=Local_ServicesPerPage.Current.ServiceItem.Current.IconId, In_SizeId=If(Index(Local_ServicesPerPage.Current.ServiceItem.Current.IconId,"SVG_",startIndex:,searchFromEnd:,ignoreCase:) <> -1 ,Entities.UBT_IconsSize.NonStandard_64 ,Entities.UBT_IconsSize.Display_36)
                          placeholder Text:
                            expr: Local_ServicesPerPage.Current.ServiceItem.Current.Name
block Dialog_GoExternalApp (UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs)
  args: ExternalApp_PopUpInfo=Local_ExternalApp_PopUpInfo
  on OnPopUpReady → Handler_Dialog_ExternalAppPopUpReady(PopUpId=PopUpId)
```

#### Block actions
- **Handler_Dialog_ExternalAppPopUpReady** inputs: PopUpId: Text (mandatory)
  ```
  assign: ExternalAppPopUp_Id = PopUpId
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch_GetServices**; locals: CurrentPage: Integer = 1; CurrentItem: Integer = 0; Current_ServicesPage: UI_ServicesPage; Empty_ServicesPage: UI_ServicesPage
  ```
  call ListClear(List=Local_ServicesPerPage)
  if ForceAddService
    call ListAppend(Element={ Id: NullTextIdentifier(), Label: "Add Service", Order: GetServices.List.Length + 1, Is_Active: True, IconId: Entities.UBT_Icons2.AddCircle, isMandatory: True }, List=GetServices.List) as ListAppend3
    [M1] if (StillHasServices?) CurrentItem < GetServices.List.Length
      assign: Current_ServicesPage = Empty_ServicesPage
      [M2] for each GetServices.List StartIndex=CurrentItem MaximumIterations=ItemPerPage
        call ListAppend(Element=ConvertRecord(GetServices.List.Current,  {Id:"Id",IconId:"IconId",Name:"Label",Order:"Order"}), List=Current_ServicesPage.ServiceItem)
        assign: CurrentItem = CurrentItem + 1
        → continues at [M2]
      end for
      assign: Current_ServicesPage.PageNumber = CurrentPage; CurrentPage = CurrentPage + 1
      call ListAppend(Element=Current_ServicesPage, List=Local_ServicesPerPage) as ListAppend2
      → continues at [M1]
    else
      end
  else
    → continues at [M1]
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Service** inputs: SelectedService: UI_ServiceItem (mandatory); locals: ExternalLink: Text
  ```
  switch
    case SelectedService.Id = Entities.Connect_Services.Orbit (Orbit)
      navigate → OrbitLanding() transition=Inherited
    case SelectedService.Id = Entities.Connect_Services.LDM (LDM)
      call GetHasNewLDM()
      if GetHasNewLDM.Out_HasNewLDM
        navigate → LDM_MyEvents_V2() transition=Inherited
      else
        navigate → LDM_MyEvents() transition=Inherited
    case SelectedService.Id = Entities.Connect_Services.MyCalendar (MyCalendar)
      navigate → MyEntertaining() transition=Inherited
    case SelectedService.Id = Entities.Connect_Services.Assemble (Assemble)
      navigate → AssembleEvents() transition=Inherited
    case SelectedService.Id = Entities.Connect_Services.OrbitAdmin (OrbitAdmin)
      navigate → OrbitAdminLanding() transition=Inherited
    case SelectedService.Id = Entities.Connect_Services.MyNotes
      navigate → Notes() transition=Inherited
    otherwise
      switch (ExternalApps)
        case SelectedService.Id = Entities.Connect_Services.Trove (Trove)
          assign: Local_ExternalApp_PopUpInfo.AppName = "Trove"; Local_ExternalApp_PopUpInfo.PackageName = GetServices.ExterrnalPackages_Trove; Local_ExternalApp_PopUpInfo.IconId = Entities.UBT_Icons2.Trove
          [M1] call ConfirmAction(ActionConfirmationDialogWidgetId=ExternalAppPopUp_Id)
          end
        case SelectedService.Id = Entities.Connect_Services.HR100 (HR100)
          assign: Local_ExternalApp_PopUpInfo.AppName = "HR100"; Local_ExternalApp_PopUpInfo.PackageName = GetServices.ExterrnalPackages_HR100; Local_ExternalApp_PopUpInfo.IconId = Entities.UBT_Icons2.SVG_HR100
          → continues at [M1]
        case SelectedService.Id = Entities.Connect_Services.CommunityTradelink (CommunityTradelink)
          assign: Local_ExternalApp_PopUpInfo.AppName = "Community Tradelink"; Local_ExternalApp_PopUpInfo.PackageName = GetServices.ExterrnalPackages_CommunityTradelink; Local_ExternalApp_PopUpInfo.IconId = Entities.UBT_Icons2.SVG_CommunityTradelink
          → continues at [M1]
        case SelectedService.Id = Entities.Connect_Services.ElGusto
          assign: Local_ExternalApp_PopUpInfo.AppName = "El Gusto"; Local_ExternalApp_PopUpInfo.IconId = Entities.UBT_Icons2.SVG_ElGusto; Local_ExternalApp_PopUpInfo.URL = GetServices.ExternalLinks_ElGusto
          → continues at [M1]
        otherwise
          switch
            case SelectedService.Id = Entities.Connect_Services.OneSchoolGlobal (OneSchoolGlobal)
              call FeedbackMessage_AutoClose(Message="This feature will be coming soon.", MessageType=Entities.UBT_MessageType.Info, Title="Coming soon")
              end
            case SelectedService.Id = Entities.Connect_Services.MyNotes
            otherwise
              end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
    end
  ```
- **OnClick_ServiceSettings**
  ```
  navigate → Services() transition=Inherited
  ```
- **OnInitialize**; locals: Empty_UI_ServiceItem: UI_ServiceItem
  ```
  call ListAppend(Element={ PageNumber: 1, ServiceItem: [ Empty_UI_ServiceItem, Empty_UI_ServiceItem, Empty_UI_ServiceItem, Empty_UI_ServiceItem, Empty_UI_ServiceItem ] }, List=Local_ServicesPerPage)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block FeedBlock_Updates (flow Home)
- public: False
- input parameters: -
- events: Event_NoUpdates() mandatory; Event_Share(Event_UpdateItemId: UpdateItem Identifier (mandatory); Event_ShareableUpdateItem: UI_UpdateItem) mandatory
- local variables: CarouselPreloadedHouseholds: CarouselPreloadedHouseholds
- lifecycle: OnInitialize → OnInitialize; OnReady → OnReady
- used by (UBTConnect): HomeFeed

#### Data sources
- data action **FetchUpdates** fetch=AtStart; outputs: UI_UpdateItemList: UI_UpdateItem List; OnAfterFetch → FetchUpdatesOnAfterFetch
  ```
  call-server Get_UI_UpdateItemsForHomePage()
  assign: UI_UpdateItemList = Get_UI_UpdateItemsForHomePage.UI_UpdateItemList
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns)
  args: In_IsLoading=not FetchUpdates.IsDataFetched and not FetchUpdates.HasFetchError
  placeholder Placeholder_LoadingSection:
    list source=FetchUpdates.UI_UpdateItemList mode=Default  [style="list list-group home-page--update-list"]
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: ExtendedClasses="overflow-hidden", Options={ Background: { BackgroundColor: If(FetchUpdates.UI_UpdateItemList.Current.IsRead, NullTextIdentifier(), Entities.UBT_Color.CyanLightest) }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.ExtraSmal…
        placeholder Content:
          block Update_ListItem (UBTConnectLibrary.ConnectCorePatterns)
            args: HasBorderBottom=not FetchUpdates.UI_UpdateItemList.Current.HasAccess, IgnoreReadBackground=True, In_BirthType=FetchUpdates.UI_UpdateItemList.Current.BirthType, In_Date=FetchUpdates.UI_UpdateItemList.Current.Date, In_HasShare=FetchUpdates.UI_UpdateItemList.Current.HasShare, In_InitialsList=[ { Gender: FetchUpdates.UI_UpdateItemList.Current.GenderId } ], In_IsRead=FetchUpdates.UI_UpdateItemList.Current.IsRead, In_Location=FetchUpdates.UI_UpdateItemList.Current.LocationString, In_Name=FetchUpdates.UI_UpdateItemList.Current.Name, In_ParentsNames=FetchUpdates.UI_UpdateItemList.Current.ParentsNames, In_Type_UpdateFeedItem=FetchUpdates.UI_UpdateItemList.Current.UpdateItemTypeId, IsEnabled=FetchUpdates.UI_UpdateItemList.Current.HasAccess, PaddingSizeId={ BottomSizeId: If(FetchUpdates.UI_UpdateItemList.Current.HasAccess, NullTextIdentifier(),Entities.UBT_Size.Small) }, ShowImage=False
            on Event_SendGift → Event_SendGift(UpdateItemId=FetchUpdates.UI_UpdateItemList.Current.UpdateItemId)
            on OnClick → Event_ListItemOnClick
            on Event_Share → Handler__Share(Event_UpdateItemId=FetchUpdates.UI_UpdateItemList.Current.UpdateItemId)
            on Event_MarkAsUnread → Event_MarkAsUnread(UpdateItemId=FetchUpdates.UI_UpdateItemList.Current.UpdateItemId)
            on Event_MarkAsRead → Event_MarkAsRead(UpdateItemId=FetchUpdates.UI_UpdateItemList.Current.UpdateItemId)
          if not FetchUpdates.UI_UpdateItemList.Current.HasAccess #DoesntHaveAccess
            block CustomContainer (UBTConnectLibrary.BasePatterns)
              args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral2 }, PaddingSize: { HorizontalSizeId: Entities.UBT_Size.Small }, MarginSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { R…
              on Clicked → OnClick_SubscriptionUpgrade
              placeholder Content:
                container
                  container  [style="display-inline-block"]
                    block IconText (UBTConnectLibrary.ConnectPatterns)
                      args: Text="Subscription upgrade required", TextOptions={ Color: Entities.UBT_Color.BlueDark, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold }
                      placeholder Icon:
                        block Icon (UBTConnectLibrary.ConnectPatterns)
                          args: In_ColorId=Entities.UBT_Color.BlueDark, In_IconId=Entities.UBT_Icons2.Lock, In_SizeId=Entities.UBT_IconsSize.NonStandard_16
          container
```

#### Block actions
- **Event_ListItemOnClick**; locals: TargetHouseholdId: Long Integer
  ```
  if FetchUpdates.UI_UpdateItemList.Current.HasAccess
    call-server Action_UI_UpdateItem_MarkAsRead(UpdateItemId=FetchUpdates.UI_UpdateItemList.Current.UpdateItemId)
    call ScreenModel_Flush()
    call GetHasCarouselEnabled()
    if GetHasCarouselEnabled.HasCarouselEnabled
      assign: TargetHouseholdId = FetchUpdates.UI_UpdateItemList.Current.HouseholdId
      call ListFilter(Condition=HasAccess, SourceList=FetchUpdates.UI_UpdateItemList)
      call Directory_Updates_GetCarouselPreloadedHouseholds(In_ParametersList=ConvertList(ListFilter.FilteredList,  {HouseholdId:"HouseholdId",IsRead:"IsRead","Updates_CarouselSwipeCallbackParameters.UpdateItemId":"UpdateItemId"}))
      assign: CarouselPreloadedHouseholds.CarouselHouseholdItem = Directory_Updates_GetCarouselPreloadedHouseholds.Out_CarouselPreloadedHouseholds.CarouselHouseholdItem
      call SetPreloadObject(Preload=ToObject(CarouselPreloadedHouseholds))
      navigate → HouseholdCarousel(In_StartingHouseholdId=TargetHouseholdId) transition=Inherited
    else
      navigate → HouseholdDetails(HouseholdId=FetchUpdates.UI_UpdateItemList.Current.HouseholdId) transition=Inherited
  else
    call OnClick_SubscriptionUpgrade()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    [DISABLED] assign: CarouselPreloadedHouseholds.CarouselHouseholdItem = ConvertList(ListFilter.FilteredList,  {Value:"HouseholdId"}); CarouselPreloadedHouseholds.SwipeCallback.PropertyId = Entities.UBTConnect_JSUtils_ElementCache_Property.Obj_UpdatesCarouselSwippedItemId
  ```
- **Event_MarkAsRead** inputs: UpdateItemId: UpdateItem Identifier (mandatory)
  ```
  call-server Action_UI_UpdateItem_MarkAsRead(UpdateItemId=UpdateItemId)
  assign: FetchUpdates.UI_UpdateItemList.Current.IsRead = True
  call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_MarkAsUnread** inputs: UpdateItemId: UpdateItem Identifier (mandatory)
  ```
  call-server Action_UI_UpdateItem_MarkAsUnread(UpdateItemId=UpdateItemId)
  assign: FetchUpdates.UI_UpdateItemList.Current.IsRead = False
  call Directory_Updates_RefreshBottomBarCount(ForceRefresh=True)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Event_SendGift** inputs: UpdateItemId: UpdateItem Identifier (mandatory)
  ```
  message Info: "Send gift"
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **FetchUpdatesOnAfterFetch**
  ```
  if FetchUpdates.UI_UpdateItemList.Empty
    trigger event Event_NoUpdates()
    end
  else
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler__Share** inputs: Event_UpdateItemId: UpdateItem Identifier (mandatory)
  ```
  if GetHasExtendedShare()
    trigger event Event_Share(Event_ShareableUpdateItem=FetchUpdates.UI_UpdateItemList.Current, Event_UpdateItemId=Event_UpdateItemId)
    end
  else
    call ShowComingSoonMessage()
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **OnClick_SubscriptionUpgrade**
  ```
  call App_Subscription_ShowUpgradePopUp()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**; locals: EntitiesCarousel_SwippedItems: EntitiesCarousel_SwippedItem List
  ```
  javascript IsViewRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if (Check if IsViewRestoredFromCache IsRestoredFromCache) IsViewRestoredFromCache.IsRestoredFromCache and FetchUpdates.IsDataFetched
    call GetPreloadObject()
    if GetPreloadObject.Preload <> NullObject()
      call AssignFromObject(ObjectValue=GetPreloadObject.Preload, ToObjectRef=ToObject(EntitiesCarousel_SwippedItems))
      [M1] for each FetchUpdates.UI_UpdateItemList
        call ListAny(Condition=TextToLongInteger(EntityItemId) = FetchUpdates.UI_UpdateItemList.Current.UpdateItemId, List=EntitiesCarousel_SwippedItems)
        assign: FetchUpdates.UI_UpdateItemList.Current.IsRead = FetchUpdates.UI_UpdateItemList.Current.IsRead or ListAny.Result
        → continues at [M1]
      end for
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
- **OnReady**; locals: MaxLoadingItems: Integer = 3; CurrLoadingItem: Integer = 0
  ```
  javascript CheckRestored() → FromCache: Boolean; FromHistory: Boolean
    | $parameters.FromCache = $public.View.wasCurrentViewRestoredFromCache();
    | //$parameters.FromHistory = $public.Navigation.navigatedFromHistory();
  if CheckRestored.FromCache or CheckRestored.FromHistory
    end
  else
    [M1] if CurrLoadingItem < MaxLoadingItems
      assign: CurrLoadingItem = CurrLoadingItem+1
      call ListAppend(Element={ UpdateItemTypeId: Entities.Connect_UpdateTypeId.Birth, Name: "Loadin Name", Date: CurrDate(), GenderId: Entities.Gender2.MALE, LocationString: "Loadinf Location", IsRead: True, HasAccess: True }, List=FetchUpdates.UI_UpdateItemList)
      → continues at [M1]
    else
      end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```

## Block Section_FeedWrapper (flow Home)
- public: False
- input parameters: isTransparentBackground: Boolean; ShowHeader: Boolean = True; showViewAll: Boolean = True; Title: Text; MarginTopSizeId: UBT_Size Identifier
- events: OnClick_ViewAll()
- local variables: -
- lifecycle: none
- used by (UBTConnect): HomeFeed

#### Widget tree
```
block Section (UBTConnect.App_Common_Blocks)
  args: isTransparentBackground=isTransparentBackground, MarginTopSizeId=MarginTopSizeId
  placeholder Header:
    if ShowHeader #ShowHeader2
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Base } }
        placeholder Content:
          block Columns_Two (UBTConnectLibrary.BasePatterns)
            args: ColumnOptions={ ColumnBehaviour: Entities.UBT_ColumnBehaviour.ReduceLast }
            placeholder Left:
              block CustomText (UBTConnectLibrary.BasePatterns)
                args: In_Text=Title, In_TextOptions={ Color: Entities.UBT_Color.Neutral9, FontSize: Entities.UBT_FontSize.Base, FontWeight: Entities.UBT_FontWeight.SemiBold }
            placeholder Right:
              if showViewAll #ShowViewAll2
                block IconText (UBTConnectLibrary.ConnectPatterns)
                  args: IsIconOnRight=True, SpacingSize=Entities.UBT_Size.Base, Text="View all", TextOptions={ Color: Entities.UBT_Color.Neutral7, FontSize: Entities.UBT_FontSize.ExtraSmall, FontWeight: Entities.UBT_FontWeight.SemiBold, IsUnderlined: True }
                  on Clicked → OnClick_ViewAll2
                  placeholder Icon:
                    block Icon (UBTConnectLibrary.ConnectPatterns)
                      args: In_ColorId=Entities.UBT_Color.Neutral8, In_IconId=Entities.UBT_Icons2.ArrowRightAlt, In_SizeId=Entities.UBT_IconsSize.Medium_20
  placeholder Content:
    placeholder-def Content
```

#### Block actions
- **OnClick_ViewAll2**
  ```
  trigger event OnClick_ViewAll()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Blocks of other flows (signature only; full text in the pack of their flow)

| Block | Flow | Pack | Inputs | Events |
|---|---|---|---|---|
| AppLogo_White | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| App_IconBadge | App_Common_Blocks | `../../_shared/pack/blocks.md` | BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory) | OnClick |
| App_NotificationIcon | App_Common_Blocks | `../../_shared/pack/blocks.md` | - | - |
| App_NotificationRefresh | App_Common_Blocks | `../../_shared/pack/blocks.md` | Datetime: Date Time (mandatory) | Updated |
| Block_PINUnlock | App_PIN | `../../App_PIN/pack/blocks.md` | In_ForceVisible: Boolean; In_IsCommonBlock: Boolean | Unlock |
| Block_PINUnlock_ContentWrapper | App_PIN | `../../App_PIN/pack/blocks.md` | UseOverlay: Boolean = True; In_ForceVisible: Boolean; UnlockText: Text = "Enter your PIN code"; ShowNeedHelp: Boolean; isFromMenu: Boolean; ShowForgotPIN: Boolean; ShowPolicy: Boolean (mandatory) | NavigateTo_PINRegister; Unlock |
| BottomBarContent | App_Common | `../../App_Common/pack/blocks.md` | - | - |
| BottomBarMenu | App_Common | `../../App_Common/pack/blocks.md` | ActiveItem: Connect_BottomBar_Items Identifier; useMapsItems: Boolean; isHouseholder: Boolean; isRootPage: Boolean | BottomBar_Clicked |
| CommonUI_InsideLayout | App_Common | `../../App_Common/pack/blocks.md` | In_ShowLockScreen: Boolean; In_IgnorePolicy: Boolean; In_IgnoreLockScreen: Boolean | Event_OnScreenLocked; Event_OnScreenUnlocked |
| Dialog_ExitConfirmation | App_Common_Blocks_PopupDialogs | `../../_shared/pack/blocks.md` | - | - |
| Directory_CommunityNumbers | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | In_IsLoading: Boolean (mandatory); In_CommunityStatistics: UI_CommunityStatistics (mandatory) | - |
| Directory_CommunityNumbers__Number | Directory_CommonBlocks | `../../_shared/pack/blocks.md` | In_Number: Integer (mandatory); In_Label: Text (mandatory); In_Icon: UBT_Icons2 Identifier (mandatory); In_HideBorder: Boolean | - |
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
