# App shell candidates for UBTConnect

Blocks rendered directly by at least half of the screens. Build these once (app-shell.spec.md) before any screen.

| Block | Used directly by | Data | Navigation targets | Flags |
|---|---|---|---|---|
| `UBTConnect.App_Common.CommonUI_InsideLayout.mvc.js` | 66 screens | DataActionGetCacheInfo | /UBTConnect/AcceptPendingPolicies, /UBTConnect/ContactUsMenu, /UBTConnect/HomeFeed, /UBTConnect/Login, /UBTConnect/PINRegister | - |

Blocks inside the shell (build as part of it):

- `Connect2_LegacyShared.Utility.HandleImageLoadError.mvc.js`
- `NavigationHandler.ConfirmationDialogs.ActionConfirmationDialog.mvc.js`
- `NavigationHandler.LayoutRuntime_NavigationHandler.LayoutRuntime_Top.mvc.js`
- `NavigationHandler.NavigationHandler.BackNavigationHandler.mvc.js`
- `NavigationHandler.NavigationHandler.PreventBackNavigation.mvc.js`
- `OutSystemsUI_2_23.Adaptive.Columns2.mvc.js`
- `OutSystemsUI_2_23.Private.NetworkStatusChanged.mvc.js`
- `OutSystemsUI_2_23.Private.OfflineDataSyncCore.mvc.js`
- `OutSystemsUI_2_23.Utilities.InlineSVG.mvc.js`
- `UBTConnect.App_Common.OfflineDataSyncEvents.mvc.js`
- `UBTConnect.App_Common.UnsupportedVersion.mvc.js`
- `UBTConnect.App_Common.UnsupportedVersion_Browser.mvc.js`
- `UBTConnect.App_Common.UnsupportedVersion_Native.mvc.js`
- `UBTConnect.App_Common.UnsupportedVersion_WebView.mvc.js`
- `UBTConnect.App_Common.UnsupportedVersion_Wrapper.mvc.js`
- `UBTConnect.App_Common.WelcomeToConnect.mvc.js`
- `UBTConnect.App_PIN.Block_PINUnlock.mvc.js`
- `UBTConnect.App_PIN.Block_PINUnlock_ContentWrapper.mvc.js`
- `UBTConnect.App_Policies.Policy_Checker.mvc.js`
- `UBTConnect.Legacy_Share.HandleOnResumeOpenLink.mvc.js`
- `UBTConnectLibrary.BasePatterns.Columns_Two.mvc.js`
- `UBTConnectLibrary.BasePatterns.CustomContainer.mvc.js`
- `UBTConnectLibrary.BasePatterns.CustomText.mvc.js`
- `UBTConnectLibrary.ConnectPatterns.Button.mvc.js`
- `UBTConnectLibrary.ConnectPatterns.HighlightSearch.mvc.js`
- `UBTConnectLibrary.ConnectPatterns.Icon.mvc.js`
- `UBTConnectLibrary.ConnectPatterns.IconInline_Internal.mvc.js`
- `UBTConnectLibrary.ConnectPatterns.IconSVG.mvc.js`
- `UBTConnectLibrary.ConnectPatterns.IconText.mvc.js`
- `UBTConnectLibrary.ConnectPatterns.SkeletonSection.mvc.js`
- `UBTConnectLibrary.Layouts.Layout_LoginFlow.mvc.js`
- `UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js`
- `UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js`
- `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js`
- `UBTConnect_Utils.CW_Common.Button.mvc.js`
- `UBTConnect_Utils.CacheControl.CacheControl.mvc.js`
- `UBTConnect_Utils.CacheControl.CacheControl_Policies.mvc.js`
- `UBT_AppManager.PIN.InactivityTimer.mvc.js`
- `UBT_AppManager.PIN.PinCode.mvc.js`
- `UBT_AppManager.PIN.Pincode_Unlock.mvc.js`
- `UBT_AppManager_Mobile.Fingerprint.FingerprintScanner.mvc.js`
- `UBT_AppManager_Mobile.Fingerprint.PinUnlock_MobileWrapper.mvc.js`

Layout-level blocks: not rendered by screens directly, but inside the content of at least half of them (layouts, headers, common dialogs). Build them with the shell:

- `OutSystemsUI_2_23.Private.PullToRefresh.mvc.js` (43 screens)
- `UBTConnectLibrary.ConnectPatterns.LazyImage.mvc.js` (43 screens)
