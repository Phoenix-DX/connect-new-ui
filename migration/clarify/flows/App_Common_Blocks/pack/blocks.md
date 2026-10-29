# Pack of UI flow App_Common_Blocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: App_IconBadge, App_NotificationIcon, App_NotificationRefresh, External_Link, ItemCardActions, ListLoading, Section, SectionSeparator
Blocks of other UBTConnect flows that the flow uses (transitive): 0

## Block App_IconBadge (flow App_Common_Blocks)
- public: False
- input parameters: BadgeNumber: Long Integer (mandatory); MaxNotifications: Integer = 9; IconId: UBT_Icons2 Identifier (mandatory); IconColor: UBT_Color Identifier (mandatory); isLoading: Boolean (mandatory)
- events: OnClick()
- local variables: -
- lifecycle: none
- used by (UBTConnect): App_NotificationIcon, BottomBarMenu

#### Widget tree
```
block SkeletonSection (UBTConnectLibrary.ConnectPatterns) #Skeleton
  args: In_IsLoading=isLoading or BadgeNumber = -1
  placeholder Placeholder_LoadingSection:
    if BadgeNumber <> 0 #HasNumber
      link onclick → IconClick
        block IconBadge (UBTConnectLibrary.OutSystemsUIOverrides) #IconBadge
          args: Color=Entities.UBT_Color.Red, MaxNumber=MaxNotifications, Number=BadgeNumber
          placeholder Icon:
            block Icon (UBTConnectLibrary.ConnectPatterns)
              args: In_ColorId=IconColor, In_ExtendedClasses="ignore-loading", In_IconId=IconId, In_SizeId=Entities.UBT_IconsSize.Base_24
    else
      block Icon (UBTConnectLibrary.ConnectPatterns)
        args: In_ColorId=IconColor, In_ExtendedClasses="ignore-loading", In_IconId=IconId, In_SizeId=Entities.UBT_IconsSize.Base_24
        on Click → IconClick
```

#### Block actions
- **IconClick**
  ```
  trigger event OnClick()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block App_NotificationIcon (flow App_Common_Blocks)
- public: False
- input parameters: -
- events: -
- local variables: LocalNotifications: Long Integer = -1
- lifecycle: OnReady → OnReady
- used by (UBTConnect): Bookmarks, CountryList, HomeFeed, Notes, Updates_SingleList

#### Widget tree
```
block App_IconBadge (UBTConnect.App_Common_Blocks)
  args: BadgeNumber=LocalNotifications, IconColor=Entities.UBT_Color.Neutral0, IconId=Entities.UBT_Icons2.Notifications, isLoading=not Client.Notifications_IsSynched, MaxNotifications=9
  on OnClick → IconClick
block App_NotificationRefresh (UBTConnect.App_Common_Blocks)
  args: Datetime=Client.Notifications_LastChecked
  on Updated → App_NotificationRefreshUpdated
```

#### Block actions
- **App_NotificationRefreshUpdated**
  ```
  call OnReady()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **IconClick**
  ```
  call GetHasNewNotifications()
  if (HasNewNotifications?) GetHasNewNotifications.Out_HasNewNotifications
    navigate → Notifications() transition=Inherited
  else
    navigate → MessageList() transition=Inherited
  ```
- **OnReady**
  ```
  call GetUnreadNotificationNumber()
  assign: LocalNotifications = GetUnreadNotificationNumber.UnreadNotifications
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block App_NotificationRefresh (flow App_Common_Blocks)
- public: False
- input parameters: Datetime: Date Time (mandatory)
- events: Updated() mandatory
- local variables: -
- lifecycle: OnParametersChanged → OnParametersChanged
- used by (UBTConnect): App_NotificationIcon

#### Widget tree
```
```

#### Block actions
- **OnParametersChanged**
  ```
  assign: Datetime = Datetime
  trigger event Updated()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block External_Link (flow App_Common_Blocks)
- public: False
- input parameters: In_Link: BusinessLinkItem (mandatory); IsEnabled: Boolean = True; IconVisible: Boolean = True
- events: -
- local variables: FontSize: UBT_FontSize Identifier = Entities.UBT_FontSize.Small
- lifecycle: none
- used by (UBTConnect): Map_PoIPreview, OneSchoolGlobalDetails_Block, OneSchoolGlobal_DetailCard_Content

#### Widget tree
```
block IconText (UBTConnectLibrary.ConnectPatterns)
  args: SpacingSize=Entities.UBT_Size.ExtraSmall, Text=In_Link.Text, TextOptions={ Color: If(IsEnabled,Entities.UBT_Color.Primary,Entities.UBT_Color.Neutral7), FontSize: FontSize, FontWeight: Entities.UBT_FontWeight.Regular, IsUnderlined: True }
  on Clicked → LinkClicked
  placeholder Icon:
    block Icon (UBTConnectLibrary.ConnectPatterns)
      args: In_ColorId=If(IsEnabled,Entities.UBT_Color.Primary,Entities.UBT_Color.Neutral7), In_IconId=Entities.UBT_Icons2.OpenNew, In_SizeId=Entities.UBT_IconsSize.NonStandard_16, In_Visible=IconVisible
```

#### Block actions
- **LinkClicked**
  ```
  if CheckIOsPlatform()
    navigate → RedirectToURL(URL=In_Link.Link) transition=Inherited
  else
    call OpenInApp_OpenExternalLink(Url=In_Link.Link)
    end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block ItemCardActions (flow App_Common_Blocks)
- public: False
- input parameters: ActionBarOptions: ActionBarOptions (mandatory); ObjectId: Text (mandatory); BookmarkType: BookmarkCategory Identifier
- events: Event_AddNote() mandatory; Event_ItemUnbookmarked()
- local variables: -
- lifecycle: none
- used by (UBTConnect): Bookmarks_Card_Item, NoteCard_Item

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral2, Size: { TopSizeId: Entities.UBT_Size.Small } } }
  placeholder Content:
    block ItemCard_ActionBar (UBTConnectLibrary.ConnectCorePatterns)
      args: ActionBarOptions=ActionBarOptions
      on OnClickShare → Handler_OnClickShare
      on OnClickUnbookmark → Handler_OnClickUnmark
      on OnClickAddNote → Handler_OnClickAddNote
```

#### Block actions
- **Handler_OnClickAddNote**
  ```
  trigger event Event_AddNote()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnClickShare**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **Handler_OnClickUnmark**
  ```
  call ToggleBookmarkItem_C2(In_BookmarkType=BookmarkType, In_ItemId=ObjectId, IsBookmarked_C2=True)
  trigger event Event_ItemUnbookmarked()
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block ListLoading (flow App_Common_Blocks)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
container  [style="list-updating"]
```

## Block Section (flow App_Common_Blocks)
- public: False
- input parameters: isTransparentBackground: Boolean; AddHorizontalPadding: Boolean = True; MarginTopSizeId: UBT_Size Identifier
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): Directory_Updates_Section_Wrapper, Section_FeedWrapper

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: If(isTransparentBackground,Entities.UBT_Color.Transparent,Entities.UBT_Color.Neutral0) }, PaddingSize: { VerticalSizeId: Entities.UBT_Size.Small, HorizontalSizeId: If…
  placeholder Content:
    placeholder-def Header
    placeholder-def Content
```

## Block SectionSeparator (flow App_Common_Blocks)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): ContactUsDetails, ContactUsMenu, EventList, Map, Menu_List, NotificationDetails, Profile, ScreenBlock_Search, SearchResult_Section, SearchResults_Recent, Services

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ Background: { BackgroundColor: Entities.UBT_Color.Neutral4 }, PaddingSize: { TopSizeId: Entities.UBT_Size.ExtraSmall } }
```
