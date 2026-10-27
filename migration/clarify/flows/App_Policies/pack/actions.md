# Pack of UI flow App_Policies (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 15; of them shared (in `../../_shared/pack/actions.md`): 13

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| ExitApplicationForWebViewUpdate | ExternalNavigation | Delay: Integer | - | 29 |
| GetURLFromEventDataURL | Share_Utils | EventDataURL: Text (mandatory) | URL: Text | 29 |
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

## GetSVGMetric (action, folder Utils)
- inputs: -
- outputs: HeightPx: Decimal; HeightWithoutCurve: Decimal
```
javascript JavaScript1() → HeightPx: Decimal; MaxV: Decimal; MaxQ: Decimal
  |   const path = document.querySelector('.ubt-header-svg svg path');
  |   if (!path) return null;
  | 
  |   // Height in rendered pixels
  |   const rect = path.getBoundingClientRect();
  |   const heightPx = rect.height;
  | 
  |   const d = path.getAttribute('d');
  |   if (!d) return null;
  | 
  |   const tokens = d
  |     .replace(/,/g, ' ')
  |     .replace(/([a-zA-Z])/g, ' $1 ')
  |     .trim()
  |     .split(/\s+/);
  | 
  |   let maxV = null;
  |   let maxQ = null;
  | 
  |   for (let i = 0; i < tokens.length; i++) {
  |     if (tokens[i] === 'V') {
  |       const y = parseFloat(tokens[i + 1]);
  |       if (!isNaN(y)) maxV = maxV === null ? y : Math.max(maxV, y);
  |     }
  | 
  |     if (tokens[i] === 'Q') {
  |       for (let j = 1; j <= 4; j++) {
  |         const v = parseFloat(tokens[i + j]);
  |         if (!isNaN(v)) maxQ = maxQ === null ? v : Math.max(maxQ, v);
  |       }
  |     }
  |   }
  | 
  | 
  | $parameters.HeightPx = heightPx;
  | $parameters.MaxV = maxV;
  | $parameters.MaxQ = maxQ;
assign: HeightPx = JavaScript1.HeightPx; HeightWithoutCurve = (HeightPx *  JavaScript1.MaxV) / JavaScript1.MaxQ
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
