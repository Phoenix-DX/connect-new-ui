# Pack of UI flow Home (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 16; of them shared (in `../../_shared/pack/actions.md`): 15

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| Directory_Updates_RefreshBottomBarCount | Directory_Updates | ForceRefresh: Boolean | - | 19 |
| ExitApplicationForWebViewUpdate | ExternalNavigation | Delay: Integer | - | 29 |
| GetURLFromEventDataURL | Share_Utils | EventDataURL: Text (mandatory) | URL: Text | 29 |
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

## Directory_Updates_GetCarouselPreloadedHouseholds (action, folder Directory_Updates)
- inputs: In_ParametersList: HouseholdId, IsRead, Updates_CarouselSwipeCallbackParameters Record List (mandatory)
- outputs: Out_CarouselPreloadedHouseholds: CarouselPreloadedHouseholds
- locals: SwipeCallback: SwipeAction
```
[M1] for each In_ParametersList
  if In_ParametersList.Current.IsRead
    assign: SwipeCallback.ActionId = NullTextIdentifier(); SwipeCallback.Parameters = ""
    [M2] call ListAppend(Element={ Household: In_ParametersList.Current.HouseholdId, SwipeAction: SwipeCallback }, List=Out_CarouselPreloadedHouseholds.CarouselHouseholdItem)
    → continues at [M1]
  else
    json-serialize JSONSerialize_Parameters = In_ParametersList.Current.Updates_CarouselSwipeCallbackParameters (dates ISO)
    assign: SwipeCallback.ActionId = Entities.Type_CarouselItemSwipeAction.UpdatesCarousel_SetIsRead; SwipeCallback.Parameters = JSONSerialize_Parameters.JSON
    → continues at [M2]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  end
```
