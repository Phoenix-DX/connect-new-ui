# Pack of UI flow Directory_Search (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 19; of them shared (in `../../_shared/pack/actions.md`): 18

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| App_CommonFilter_CheckCountry | App_CommonFilter | CountryCode: Text (mandatory); SubscribedCountries: Code, Name, RegionId Record List (mandatory) | IsEnabled: Boolean | 7 |
| App_CommonFilter_DefineOptionNames | App_CommonFilter | OptionList_Control: Filter_Common_Control_List (mandatory) | Formatted: Filter_Common_Control_List | 7 |
| Directory_Updates_RefreshBottomBarCount | Directory_Updates | ForceRefresh: Boolean | - | 19 |
| ExitApplicationForWebViewUpdate | ExternalNavigation | Delay: Integer | - | 29 |
| GetURLFromEventDataURL | Share_Utils | EventDataURL: Text (mandatory) | URL: Text | 29 |
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

## ValidateSearchPhoneNumber (action, folder Utils)
- inputs: Search: Text (mandatory)
- outputs: IsValid: Boolean = True; ErrorMessage: Text
- locals: MinNumberSize: Integer = 4
```
javascript ValidatePhoneNumber(MinNumberSize=MinNumberSize, Search=Search) → IsValid: Boolean
  | var input = $parameters.Search;
  | var digitsOnly = input.replace(/[^0-9]/g, "");
  | var strictPattern = /^\+?[0-9]+$/;
  | 
  | // Detects if it contains only characters
  | var looksLikeNumber = /^[0-9+\-\s().]+$/.test(input);
  | 
  | if (strictPattern.test(input)) {
  |     // It's a valid phone number format
  |     $parameters.IsValid = digitsOnly.length >= $parameters.MinNumberSize;
  | } else if (looksLikeNumber) {
  |     // Looks like a number but invalid format (e.g., 646-37, 64637+)
  |     $parameters.IsValid = false;
  | } else {
  |     // Not a number, assume it's a valid text (like names)
  |     $parameters.IsValid = true;
  | }
if ValidatePhoneNumber.IsValid
  end
else
  assign: IsValid = False; ErrorMessage = "Please enter a valid phone number"
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```
