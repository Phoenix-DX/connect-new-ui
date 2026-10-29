# Pack of UI flow Home (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Screens: FeedItemDetail, HomeFeed

## Screen FeedItemDetail (flow Home)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: FeedItemId: Text (mandatory)
- local variables: IsShareOpen: Boolean; ShareableObjectId: Text; ShareObjectTypeId: Type_ShareObject Identifier; ShareableFeedItem: UI_ShareableObject_Generic
- lifecycle: none

#### Widget tree
```
block Layout_DetailPage (UBTConnectLibrary.Layouts)
  placeholder Placeholder_Header_Title:
    text: Feed Item
  placeholder Content:
    block Feed_Embeded (UBTConnect.Home)
      args: FeedItemId=FeedItemId
      on Event_Share → Handler_ShareFeed(Event_FeedItemImageURL=Event_FeedItemImageURL, Event_FeedItemSubtitle=Event_FeedItemSubtitle, Event_FeedItemTitle=Event_FeedItemTitle, Event_ShareId=Event_ShareId)
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
block ShareSheet (UBTConnect_Utils.CW_Share)
  args: In_IsOpen=IsShareOpen, In_ShareableObjectId=ShareableObjectId, In_ShareObjectTypeId=ShareObjectTypeId, In_UpdateDate=NullDate(), In_UpdateType=""
  on Event_ClosedShareSheet → Handler_CloseShareSheet
  placeholder Placeholder_ShareableObject:
    block ShareableObject_Generic (UBTConnect_Utils.CW_Share)
      args: In_ShareableObject=ShareableFeedItem
```

#### Screen actions
- **Handler_CloseShareSheet**
  ```
  assign: IsShareOpen = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ShareFeed** inputs: Event_ShareId: Text (mandatory); Event_FeedItemTitle: Text (mandatory); Event_FeedItemSubtitle: Text (mandatory); Event_FeedItemImageURL: Text (mandatory)
  ```
  assign: ShareObjectTypeId = Entities.Type_ShareObject.Feed; ShareableObjectId = Event_ShareId; IsShareOpen = True; ShareableFeedItem.ConnectEntityTypeId = Entities.Connect_Entity.FeedItem; ShareableFeedItem.SignedURL = Event_FeedItemImageURL; ShareableFeedItem.Title = Event_FeedItemTitle; ShareableFeedItem.Subtitle = Event_FeedItemSubtitle
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Screen HomeFeed (flow Home)
- roles: Registered, UBTOne_User; URL structure: QueryString
- input parameters: -
- local variables: HasUpdates: Boolean = True; IsScreenInitialized: Boolean; ShareableUpdateItem: UI_UpdateItem; IsShareOpen: Boolean; ShareableObjectId: Text; ShareObjectTypeId: Type_ShareObject Identifier; ShareableFeedItem: UI_ShareableObject_Generic
- lifecycle: OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady

#### Data sources
- data action **GetCommunityStatistics** fetch=OnDemand; outputs: Out_CommunityStatistics: UI_CommunityStatistics
  ```
  call-server Get_UI_CommunityNumbers()
  assign: Out_CommunityStatistics = Get_UI_CommunityNumbers.Out_CommunityNumbers
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block Layout_HomePage (UBTConnectLibrary.Layouts)
  args: ContentBackgroundColor=Entities.UBT_Color.Neutral4, SVGHeight="260px"
  on OnSearchClick → OnClick_Search
  placeholder Placeholder_Header_Title:
    block AppLogo_White (UBTConnect.App_Common)
  placeholder Placeholder_Header_Right:
    block App_NotificationIcon (UBTConnect.App_Common_Blocks)
  placeholder Content:
    block Section_FeedWrapper (UBTConnect.Home) #Section_Services
      args: isTransparentBackground=True, MarginTopSizeId=Entities.UBT_Size.Base, ShowHeader=False, showViewAll=False
      placeholder Content:
        block FeedBlock_Services (UBTConnect.Home)
          args: ForceAddService=False
    if True  [DEAD BRANCH: condition is a constant]
      block Section_FeedWrapper (UBTConnect.Home) #Section_CommunityPopulation
        args: isTransparentBackground=True, ShowHeader=False, showViewAll=False
        placeholder Content:
          block FeedBlock_CommunityPopulation (UBTConnect.Home)
    else
      block CustomContainer (UBTConnectLibrary.BasePatterns)
        args: Options={ MarginSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: Entities.UBT_Size.Base } }
        placeholder Content:
          block Directory_CommunityNumbers (UBTConnect.Directory_CommonBlocks)
            args: In_CommunityStatistics=GetCommunityStatistics.Out_CommunityStatistics, In_IsLoading=not GetCommunityStatistics.IsDataFetched
    if HasUpdates
      block Section_FeedWrapper (UBTConnect.Home) #Section_Updates
        args: isTransparentBackground=False, MarginTopSizeId=Entities.UBT_Size.Small, ShowHeader=True, showViewAll=True, Title="Updates"
        on OnClick_ViewAll → Section_UpdatesOnClick_ViewAll
        placeholder Content:
          block FeedBlock_Updates (UBTConnect.Home)
            on Event_NoUpdates → Handler_NoUpdates
            on Event_Share → Handler_ShareUpdate(Event_ShareableUpdateItem=Event_ShareableUpdateItem, Event_UpdateItemId=Event_UpdateItemId)
    block Feed_Embeded (UBTConnect.Home)
      on Event_Share → Handler_ShareFeed(Event_FeedItemImageURL=Event_FeedItemImageURL, Event_FeedItemSubtitle=Event_FeedItemSubtitle, Event_FeedItemTitle=Event_FeedItemTitle, Event_ShareId=Event_ShareId)
    if IsScreenInitialized
      block Dialog_ExitConfirmation (UBTConnect.App_Common_Blocks_PopupDialogs)
  placeholder Bottom:
    block BottomBarMenu (UBTConnect.App_Common)
      args: ActiveItem=Entities.Connect_BottomBar_Items.Home, isRootPage=True
  placeholder Placeholder_CommonUI_Inside_Layout:
    block CommonUI_InsideLayout (UBTConnect.App_Common)
if True #HideInServiceStudio  [DEAD BRANCH: condition is a constant]
  block ShareSheet (UBTConnect_Utils.CW_Share)
    args: In_IsOpen=IsShareOpen, In_ShareableObjectId=ShareableObjectId, In_ShareObjectTypeId=ShareObjectTypeId, In_UpdateDate=If(ShareObjectTypeId = Entities.Type_ShareObject.Update, ShareableUpdateItem.Date , NullDate()), In_UpdateType=If(ShareObjectTypeId = Entities.Type_ShareObject.Update, ShareableUpdateItem.UpdateItemTypeId,"")
    on Event_ClosedShareSheet → Handler_CloseShareSheet
    placeholder Placeholder_ShareableObject:
      if ShareObjectTypeId = Entities.Type_ShareObject.Update
        block Update_ListItem (UBTConnectLibrary.ConnectCorePatterns)
          args: HasBorderBottom=False, IgnoreReadBackground=True, In_BirthType=ShareableUpdateItem.BirthType, In_Date=ShareableUpdateItem.Date, In_InitialsList=[ { Gender: ShareableUpdateItem.GenderId } ], In_IsRead=False, In_Location=ShareableUpdateItem.LocationString, In_Name=ShareableUpdateItem.Name, In_ParentsNames=ShareableUpdateItem.ParentsNames, In_Type_UpdateFeedItem=ShareableUpdateItem.UpdateItemTypeId, IsEnabled=False, ShowImage=False
      if ShareObjectTypeId = Entities.Type_ShareObject.Feed
        block ShareableObject_Generic (UBTConnect_Utils.CW_Share)
          args: In_ShareableObject=ShareableFeedItem
```

#### Screen actions
- **Handler_CloseShareSheet**
  ```
  assign: IsShareOpen = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_NoUpdates**
  ```
  assign: HasUpdates = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ShareFeed** inputs: Event_ShareId: Text (mandatory); Event_FeedItemTitle: Text (mandatory); Event_FeedItemSubtitle: Text (mandatory); Event_FeedItemImageURL: Text (mandatory)
  ```
  assign: ShareObjectTypeId = Entities.Type_ShareObject.Feed; ShareableObjectId = Event_ShareId; IsShareOpen = True; ShareableFeedItem.ConnectEntityTypeId = Entities.Connect_Entity.FeedItem; ShareableFeedItem.SignedURL = Event_FeedItemImageURL; ShareableFeedItem.Title = Event_FeedItemTitle; ShareableFeedItem.Subtitle = Event_FeedItemSubtitle
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_ShareUpdate** inputs: Event_UpdateItemId: UpdateItem Identifier (mandatory); Event_ShareableUpdateItem: UI_UpdateItem (mandatory)
  ```
  assign: ShareObjectTypeId = Entities.Type_ShareObject.Update; ShareableObjectId = Event_ShareableUpdateItem.MemberId; ShareableUpdateItem = Event_ShareableUpdateItem; IsShareOpen = True
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnClick_Search**
  ```
  navigate → Search() transition=Inherited
  ```
- **ScreenEvent_OnInitialize**
  ```
  assign: IsScreenInitialized = False
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **ScreenEvent_OnReady**
  ```
  assign: IsScreenInitialized = True
  javascript IsRestoredFromCache() → IsRestoredFromCache: Boolean
    | $parameters.IsRestoredFromCache = $public.View.wasCurrentViewRestoredFromCache()
  if IsRestoredFromCache.IsRestoredFromCache
    end
  else
    refresh data GetCommunityStatistics
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
    end
  ```
- **Section_UpdatesOnClick_ViewAll**
  ```
  navigate → Updates_SingleList() transition=Inherited
  ```
