# Pack of UI flow Legacy_Share (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 18; of them shared (in `../../_shared/pack/actions.md`): 15

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
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
| SetResumeLoginLink | Share_Utils | URL: Text (mandatory) | - | 29 |
| Try_GetIsSupportedVersion | UnsupportedSystems | - | IsSupportedNativeVersion: Boolean = True; IsSupportedWebView: Boolean = True; IsAndroid: Boolean; IsApple: Boolean | 29 |
| Upgrade_UBTConnect | ExternalNavigation | - | - | 29 |
| Upgrade_WebView | ExternalNavigation | - | - | 29 |

## Actions of this flow (full)

## AuditShareViewEvent (action, folder Share_Utils)
- inputs: ShareId: Text; SharingUserId: Text; TargetUserId: Text; TargetApp: Text; ShareObjectTypeId: Type_ShareObject Identifier; ObjectId: Text
- outputs: -
- locals: AuditLog_ShareEventInfo: AuditLog_ShareEventInfo
```
if TargetUserId = ""
  call GetUserInformation_Wrapper() as GetUserInfo
  assign: TargetUserId = GetUserInfo.UserInformation.Id
  [M1] assign (AuditLog_ShareEventInfo): AuditLog_ShareEventInfo.ShareId = ShareId; AuditLog_ShareEventInfo.SharingUserId = SharingUserId; AuditLog_ShareEventInfo.TargetUserId = TargetUserId; AuditLog_ShareEventInfo.TargetApp = TargetApp; AuditLog_ShareEventInfo.ShareObjectTypeId = ShareObjectTypeId; AuditLog_ShareEventInfo.ObjectId = ObjectId
  json-serialize EventInfoJSON = AuditLog_ShareEventInfo (dates ISO)
  end
else
  → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  [DISABLED] call None(None=EventInfoJSON.JSON, None=Entities.DirectoryEvent.ShareView) as zOnApplicationEvent_Wrapper2
  end
```

## GetShareAttributes (function, folder Share_Utils)
- inputs: ShareAttributesJSON: Text
- outputs: ShareAttributes: Share_Attributes
```
json-deserialize JSONDeserializeShare_Attributes: ShareAttributesJSON as Share_Attributes
assign: ShareAttributes = JSONDeserializeShare_Attributes.Data
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## OnInitializeSharingScreen (action, folder Share_Utils)
- inputs: ShareId: Text (mandatory)
- outputs: IsRedirect: Boolean; Redirect_ShareObjectTypeId: Type_ShareObject Identifier; ShowFreeSubscriptionAlert: Boolean; StatusMessage: Text; Redirect_Share_Attributes: Share_Attributes
```
call-server Get_ShareDetails(IncludeDeceased=False\n//HasAccessToDeceasedHousehold- We are ignoring this flag if sharing outside connect as discussed on item https://ubteam.atlassian.net/browse/DIRECTORY-734, ShareId=ShareId)
if Get_ShareDetails.IsShareAvailable
  assign: Get_ShareDetails.ShareDetails.Details.ShareItem.CanAccess = Get_ShareDetails.ShareObjectType.Id = Entities.Type_ShareObject.Feed or Get_ShareDetails.ShareDetails.Details.ShareItem.CanAccess
  switch
    case Get_ShareDetails.ShareDetails.Details.ShareItem.Id = "" (Is Item Hidden ? )
      assign: StatusMessage = "This shared item is no longer available"
      end
    case not Get_ShareDetails.ShareDetails.Details.ShareItem.CanAccess  (Can't access ?)
      assign: ShowFreeSubscriptionAlert = True
      assign: StatusMessage = "You don't have access to shared item"
      end
    otherwise
      assign: IsRedirect = Get_ShareDetails.ShareObjectType.Id <> NullTextIdentifier(); Redirect_ShareObjectTypeId = Get_ShareDetails.ShareObjectType.Id; Redirect_Share_Attributes.Id = Get_ShareDetails.ShareDetails.ObjectId
      if Get_ShareDetails.ShareObjectType.Id = Entities.Type_ShareObject.Update
        assign: Redirect_Share_Attributes.Id = Get_ShareDetails.ShareDetails.Details.ShareItem.HouseholderId
        end
      else
        end
else
  assign: StatusMessage = "This shared item is no longer available"
  end
on exception All Exceptions (log=True)
assign: StatusMessage = AllExceptions.ExceptionMessage
call AuditShareViewEvent(ShareId=ShareId, TargetApp="Others") as AuditShareViewEvent2
end
unreachable nodes (not connected to start or to an exception handler):
  [DISABLED] call AuditShareViewEvent(ObjectId=GetShareDetails.ShareDetails.ObjectId, ShareId=ShareId, ShareObjectTypeId=GetShareDetails.ShareObjectType.Id, SharingUserId=GetShareDetails.ShareDetails.Details.Sender.Id, TargetApp="Others")
  end
  end
  end
  [DISABLED] call GetShareAttributes(ShareAttributesJSON=GetShareDetails.ShareDetails.Details.ShareItem.Id)
  end
  end
```
