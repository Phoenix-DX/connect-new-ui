# Pack of UI flow Directory_Photobook (DEV model, MCP dump of flows 2026-10-27)

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

## Carousel_SetCurrentPosition (action, folder App_Fixes_Carousel)
- inputs: In_CarouselWidgetId: Text (mandatory); In_Position: Integer (mandatory)
- outputs: -
```
javascript SetCurrentPosition(JS_CurrentIndex=In_Position, JS_WidgetId=In_CarouselWidgetId)
  | try {
  | 
  |     const carouselObject = OutSystems.OSUI.Patterns.CarouselAPI.GetCarouselItemById($parameters.JS_WidgetId);
  |     // Set the starting position
  |     carouselObject._configs.StartingPosition = $parameters.JS_CurrentIndex;
  | 
  | } catch (error) {
  |     console.error("An error occurred while updating the carousel:", error);
  | }
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_PhotobookCaption (action, folder Directory_Skeleton)
- inputs: -
- outputs: Caption: Text
```
assign: Caption = "SURNAME (Name - Local) Name & Name (Name Name* - Locality, AA) First name m, Name m, Name m (Locality) Name 00/00, Name"
end
unreachable nodes (not connected to start or to an exception handler):
  end
```
