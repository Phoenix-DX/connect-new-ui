# Pack of UI flow App_Common (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 27; of them shared (in `../../_shared/pack/actions.md`): 17

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| Directory_Updates_RefreshBottomBarCount | Directory_Updates | ForceRefresh: Boolean | - | 19 |
| ExitApplicationForWebViewUpdate | ExternalNavigation | Delay: Integer | - | 29 |
| GetURLFromEventDataURL | Share_Utils | EventDataURL: Text (mandatory) | URL: Text | 29 |
| GetUserInformation_Wrapper | App_Cache | - | UserInformation: Directory_UserCurrent | 7 |
| GetUserInformation_Wrapper_Assign | App_Cache | UserInformation: CacheControl_UserInformation | - | 15 |
| Get_IsUnsupportedSystem | UnsupportedSystems | - | Out_IsUnsupportedSystem: Boolean | 29 |
| Get_IsUnsupportedVersion | UnsupportedSystems | - | Out_IsUnsupportedWebViewVersion: Boolean; Out_IsUnsupportedAppVersion: Boolean; Out_IsUnsupportedBrowserVersion: Boolean | 29 |
| OfflineDataSync | App_OfflineDataSync | SyncUnit: Text (mandatory) | - | 29 |
| OfflineDataSyncConfiguration | App_OfflineDataSync | - | SyncOnOnline: Boolean; SyncOnLogin: Boolean; SyncOnResume: Boolean; RetryOnError: Boolean; RetryIntervalInSeconds: Integer | 29 |
| OpenGooglePlay_Chrome | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_UBTConnect | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_WebView | ExternalNavigation | - | - | 29 |
| ScrollTop | Utils | In_ScrollContainer: Text = ".active-screen"; In_Behaviour: Text = "instant" | - | 19 |
| SetResumeLoginLink | Share_Utils | URL: Text (mandatory) | - | 29 |
| Try_GetIsSupportedVersion | UnsupportedSystems | - | IsSupportedNativeVersion: Boolean = True; IsSupportedWebView: Boolean = True; IsAndroid: Boolean; IsApple: Boolean | 29 |
| Upgrade_UBTConnect | ExternalNavigation | - | - | 29 |
| Upgrade_WebView | ExternalNavigation | - | - | 29 |

## Actions of this flow (full)

## Connect_Logout (action, folder App_Authentication)
- inputs: -
- outputs: -
```
call Cache_InvalidateEverything()
call AppManager_Logout()
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Connect_SetLoggedContext (action, folder App_Authentication)
- inputs: Bookmarks: LocalBookmark List; isFromLogin: Boolean; Bookmarks_C2: LocalBookmark2 List; Notes: LocalNote List
- outputs: -
```
if (Is User Logged?) GetUserId() <> NullIdentifier()
  call Sync_UserInfo_TriggerCache()
  if isFromLogin
    call Sync_Info_Main(isFromLogin=isFromLogin)
    assign: Notes = Sync_Info_Main.Notes
    assign: Bookmarks = Sync_Info_Main.Bookmarks
    assign: Bookmarks_C2 = Sync_Info_Main.Bookmarks_C2
    [M1] call SynchBookmarks(UpdatedBookmarks=Bookmarks)
    call SynchBookmarksC2(In_UpdateBookmarks=Bookmarks_C2)
    assign: Client.Bookmarks_IsSynched = True
    call SyncNotes(In_Notes=Notes)
    assign: Client.Notes_IsSynched = True
    call SynchronizeNumberUnreadMessages()
    assign: Client.Notifications_IsSynched = True; Client.Notifications_LastChecked = CurrDateTime()
    end
  else
    → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## GetColdStartLinkURL (action, folder Share_Utils)
- inputs: -
- outputs: URL: Text
```
call GetAndroidAppLinkData()
call GetURLFromEventDataURL(EventDataURL=GetAndroidAppLinkData.EventData.URL)
if GetURLFromEventDataURL.URL <> ""
  assign: URL = GetURLFromEventDataURL.URL
  end
else
  call GetColdStartDeeplinkURL()
  call GetURLFromEventDataURL(EventDataURL=GetColdStartDeeplinkURL.URL) as GetURLFromEventDataURL2
  assign: URL = GetURLFromEventDataURL2.URL
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Set_InitialClientVariables (action, folder App_InitializeClientVariables)
- inputs: -
- outputs: -
```
assign: Client.PhotobookCarousel_SelectedSpeed = Entities.Photobook_Speed.EightSeconds
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## ShowCommunicationExceptionMessage (action, folder App_CommonMessages)
- inputs: -
- outputs: -
```
javascript CheckIsOnlineNow() → IsOnlineNow: Boolean
  | // Live check at the moment of the error; the stored flag can lag behind
  | $parameters.IsOnlineNow = navigator.onLine;
if Client.App_NetworkStatus_IsOnline_IsPersistent and CheckIsOnlineNow.IsOnlineNow
  call FeedbackMessage_AutoClose(Message="We’re currently experiencing unusually high traffic, which may affect access to some services.\n\nOur team is working to restore full functionality as quickly as possible.\n\nThank you for your pati…, MessageType=Entities.UBT_MessageType.Info, Title="Service Interruption")
  end
else
  call FeedbackMessage_AutoClose(Message="No internet connection. Please check your network settings and try again.", MessageType=Entities.UBT_MessageType.Error) as FeedbackMessage_AutoClose2
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## ShowExceptionMessage (action, folder App_CommonMessages)
- inputs: ExceptionMessage: Text (mandatory); ForceLogout: Boolean
- outputs: -
- locals: DisplayMessage: Text; DisplayTitle: Text; HasTimeout: Boolean; MessageTypeId: UBT_MessageType Identifier = Entities.UBT_MessageType.Error; HasDebounce: Boolean = True
```
assign: DisplayMessage = ExceptionMessage
if (No role validation found) ExceptionMessage =  "No role validation found"
  end
else
  if (Authorization has been denied) ExceptionMessage =  "Authorization has been denied for this request."
    assign: DisplayMessage = "Please make sure you have an active Connect plan. For further details, please refer to your regional helpdesk."; HasTimeout = True; ForceLogout = True
    assign (Dummy): 
    [M1] assign (Dummy): 
    [M2] assign (Dummy): 
    [M3] assign (Dummy): 
    [M4] assign (Dummy): 
    [M5] assign (Dummy): 
    [M6] assign (Dummy): 
    [M7] assign (Dummy): 
    [M8] assign (Dummy): 
    [M9] assign (Dummy): 
    [M10] assign (Dummy): 
    [M11] call FeedbackMessage_AutoClose(DelayMs=If(HasTimeout,500,0), Message=DisplayMessage, MessageType=MessageTypeId, Title=DisplayTitle, useDebounce=HasDebounce)
    if ForceLogout
      call Connect_Logout()
      call JSUtils_PageRedirect(URL="\" + GetEntryEspaceName() + "\Login")
      end
    else
      end
  else
    if (The operation has timed out) ExceptionMessage = "The operation has timed out" or ExceptionMessage = "The connection has timed out"
      [M12] call ShowCommunicationExceptionMessage()
      end
    else
      if (Request failed with an error) ExceptionMessage = "Request failed with an error" or \nExceptionMessage = "Request failed with 500 Internal Server Error" or \nExceptionMessage = "Request failed with 404 Not Found" or\nExceptionMessage = "Request failed with 400 Bad Request" or \nIndex(ExceptionMessage,"The request is invalid") <> -1
        → continues at [M12]
      else
        if (Resource not found) Index(ExceptionMessage,"Resource not found") <> -1 or \nIndex(ExceptionMessage,"No HTTP resource") <> -1 
          → continues at [M12]
        else
          if (please install and enable google maps) ToLower(ExceptionMessage) = "please install and enable google maps"
            assign: HasTimeout = True
            → continues at [M1]
          else
            if (distributed transaction) Index(ExceptionMessage,"distributed transaction") <> -1
              assign: HasTimeout = True
              → continues at [M2]
            else
              if (An error has occurred) Index(ExceptionMessage,"An error has occurred.") <> -1
                assign: DisplayMessage = "We’re currently experiencing unusually high traffic, which may affect access to some services.<br>\nOur team is working to restore full functionality as quickly as possible.<br>\nThank you for your patience and understanding."; DisplayTitle = "Service Interruption"; MessageTypeId = Entities.UBT_MessageType.Info
                → continues at [M3]
              else
                if (Error executing query) Index(ExceptionMessage,"Error executing query") <> -1
                  assign: DisplayTitle = "Temporarily Unavailable"; DisplayMessage = "Something went wrong, please try again later"
                  → continues at [M4]
                else
                  if (The underlying connection was closed) Index(ExceptionMessage,"The underlying connection was closed") <> -1
                    assign: DisplayMessage = "We're sorry, but an unexpected error occurred while processing your request. Please try again later. If the problem persists, please contact your regional administrator."
                    → continues at [M5]
                  else
                    if (Magento Subscription Expired) Index(ExceptionMessage,"Your paid subscription has expired")  <> -1
                      assign: DisplayMessage = ExceptionMessage; DisplayTitle = "Subscription Status Update"; ForceLogout = True
                      → continues at [M6]
                    else
                      if (Authorization has been denied for this request) Index(ExceptionMessage,"We're unable to log you in at this time")  <> -1
                        assign: DisplayMessage = ExceptionMessage; DisplayTitle = "Access Unavailable"
                        → continues at [M7]
                      else
                        if (Account Access Restricted) Index(ExceptionMessage,"Due to multiple unsuccessful login attempts")  <> -1
                          assign: DisplayMessage = ExceptionMessage; DisplayTitle = "Account Access Restricted"
                          → continues at [M8]
                        else
                          if (Log in another device) Index(ExceptionMessage,"please log in again or check your active sessions")  <> -1
                            assign: DisplayMessage = "You've been logged out because your account is currently active on another device.\n<br> To continue, please log in again or check your active sessions."; DisplayTitle = "Session Ended"
                            → continues at [M9]
                          else
                            if (Unable To Create Free Subscription ) Index(ExceptionMessage,"unable to create a Free subscription plan")  <> -1
                              assign: DisplayMessage = ExceptionMessage; DisplayTitle = "Subscription Status Update"
                              → continues at [M10]
                            else
                              → continues at [M11]
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
```

## Sync_Info_Main (action, folder App_Sync)
- inputs: isFromLogin: Boolean (mandatory)
- outputs: Bookmarks: LocalBookmark List; MyEntertainingBaseURL: Text; FeedBaseURL: Text; Bookmarks_C2: LocalBookmark2 List; Notes: LocalNote List
```
call-server Sync_Info_GetMain(isFromLogin=isFromLogin)
if isFromLogin
  [M1] assign: Bookmarks = Sync_Info_GetMain.LocalEntities_App.LocalBookmark; MyEntertainingBaseURL = Sync_Info_GetMain.MyEntertainingBaseURL; FeedBaseURL = Sync_Info_GetMain.FeedBaseURL; Client.Embedd_B2CTenant = Sync_Info_GetMain.B2CTenant; Bookmarks_C2 = Sync_Info_GetMain.LocalEntities_App.LocalBookmarksC2; Notes = Sync_Info_GetMain.LocalEntities_App.LocalNotes
  call Sync_SetSiteProperties(Sync_SiteProperties=Sync_Info_GetMain.Sync_SiteProperties)
  end
else
  call SyncAllOrbitStaticEntities(OrbitStaticEntities=Sync_Info_GetMain.OrbitStaticEntities)
  → continues at [M1]
on exception All Exceptions (log=True)
end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Sync_SetSiteProperties (action, folder App_Sync)
- inputs: Sync_SiteProperties: Sync_SiteProperties (mandatory)
- outputs: -
```
assign: Client.Directory_Updates_MonthsToShow = Sync_SiteProperties.UpdatesFeed_MonthsToShow
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Sync_UserInfo_TriggerCache (action, folder App_Sync)
- inputs: -
- outputs: -
```
call GetUserInformation_Wrapper()
end
on exception All Exceptions (log=True)
end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## TriggerOfflineDataSync (action, folder App_OfflineDataSync)
- inputs: SyncUnit: Text; DiscardPendingSyncUnits: Boolean
- outputs: -
```
call StartOfflineDataSync(DiscardPendingSyncUnits=DiscardPendingSyncUnits, SyncUnit=SyncUnit)
end
unreachable nodes (not connected to start or to an exception handler):
  end
```
