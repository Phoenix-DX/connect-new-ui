# Security inventory: Login

Names and categories only; no values were captured. Inferences are marked as such and must be confirmed with the OutSystems MCP or the team.

## Session and request authentication
- Request header names on service calls: `accept`, `content-type`, `outsystems-request-token`, `request-id`, `traceparent`, `x-csrftoken`
- Response header names on service calls: `cache-control`, `cf-cache-status`, `cf-ray`, `content-encoding`, `content-length`, `content-type`, `date`, `outsystems-locale`, `pragma`, `server`, `strict-transport-security`, `vary`, `x-content-type-options`
- Cookie names visible to JavaScript: `nr2Users`, `ai_user`, `ai_session`
- HttpOnly cookies are invisible to JavaScript by design. Check names and flags (HttpOnly, Secure, SameSite, expiry) manually in DevTools > Application > Cookies; never copy values.
- OutSystems 11 Reactive normally authenticates screenservices calls with its session cookies plus a CSRF token header. Confirm against the header names above.
- Secure context: True

## Document security headers
- `content-security-policy`: **missing**
- `strict-transport-security`: `max-age=31536000;includeSubDomains`
- `x-frame-options`: **missing**
- `x-content-type-options`: `nosniff`
- `referrer-policy`: **missing**
- `permissions-policy`: **missing**

## Third-party hosts contacted
- `australiaeast-0.in.applicationinsights.azure.com`
- `js.monitor.azure.com`

## Client storage by category
### token/secret (3)
> Readable by any script on the origin (XSS exposure). In React keep tokens server-side (BFF + HttpOnly cookie); do not copy this pattern.
- `ConnectionString` (localStorage)
- `Firebase_RealtimeDatabase_Token` (localStorage)
- `Firebase_CloudMessage_Token` (localStorage)

### auth config (8)
> Public configuration of the identity provider(s). Inventory every provider and flow before designing auth for React.
- `Embedd_B2CTenant` (localStorage)
- `AzureB2C_ResetPassPolicy` (localStorage)
- `Streamline_TOTPOnLogin` (localStorage)
- `AppManager_OAuth_EndPoint` (localStorage)
- `AppManager_IdPProviderId` (localStorage)
- `AzureB2C_LoginPolicy` (localStorage)
- `FrontEgg_AppId` (localStorage)
- `AzureB2C_ClientId` (localStorage)

### lock / re-auth (8)
> Client-side state: a UI gate, not a security boundary. Verify whether the server refuses calls while locked (OutSystems MCP / team).
- `PIN_HasUnlocked` (localStorage)
- `PIN_EnforceOnReady` (localStorage)
- `PIN_Use` (localStorage)
- `PIN_SessionInactivity_Navigate` (localStorage)
- `PIN_SessionInactivity_Seconds` (localStorage)
- `PIN_SessionInactivity_Use` (localStorage)
- `PIN_IsLocked` (localStorage)
- `PIN_EnableFingerprint` (localStorage)

### identity / personal (2)
> Personal identifiers persisted on the device. Check they are cleared on logout and whether they must be stored at all.
- `SESSION_USER_ID` (localStorage)
- `DeviceInfo_UUID` (localStorage)

### permissions / entitlements (3)
> Client-side copy used to show/hide UI. Every server action must enforce the same rule itself; confirm per action.
- `RolesInfo` (localStorage)
- `App_SubscriptionPopUp` (localStorage)
- `Permissions_List` (localStorage)

### feature flags (3)
- `Firebase_RealtimeDatabase_Use` (localStorage)
- `AzureInsights_Use` (localStorage)
- `HasTracingEnabled` (localStorage)

### telemetry (2)
- `AI_sentBuffer_1` (sessionStorage)
- `AI_buffer_1` (sessionStorage)

### device / app info (14)
- `DeviceInfo_Browser` (localStorage)
- `DeviceInfo_PackageName` (localStorage)
- `DeviceInfo_Platform` (localStorage)
- `DeviceInfo_IsRunningAsPWA` (localStorage)
- `ApplicationInfo` (localStorage)
- `MinWebViewVersion_Safari` (localStorage)
- `DeviceInfo_UserAgent` (localStorage)
- `MinWebViewVersion_Chrome` (localStorage)
- `DeviceInfo_MobileVersion` (localStorage)
- `DeviceInfo_MobileBuild` (localStorage)
- `MinNativeAppVersion` (localStorage)
- `DeviceInfo_IsNative` (localStorage)
- `OutSystems_Environment` (localStorage)
- `AppManager_EspaceName` (localStorage)

### third-party sdk (3)
- `Firebase_ProjectId` (localStorage)
- `Streamline_SerialNumber` (localStorage)
- `Streamline_IsInstalled` (localStorage)

### other (20)
- `NetworkDetection_VerboseMode` (localStorage)
- `CurrentLocale` (localStorage)
- `PhotobookCarousel_SelectedSpeed` (localStorage)
- `NetworkDetection_ErrorMessage_GenericError` (localStorage)
- `Offline_NetworkStatus_PendingPing_Check` (localStorage)
- `OutSystems_LastURL` (localStorage)
- `NetworkDetection_ErrorMessage_NoInternet` (localStorage)
- `AppManager_AppBaseURL` (localStorage)
- `Directory_Updates_MonthsToShow` (localStorage)
- `Notes_IsSynched` (localStorage)
- `AppManager_CustomCallback` (localStorage)
- `NetworkDetection_StatusIsOnline_IsPersistent` (localStorage)
- `Notifications_IsSynched` (localStorage)
- `App_NetworkStatus_IsOnline_IsPersistent` (localStorage)
- `Bookmarks_IsSynched` (localStorage)
- `LastURL` (localStorage)
- `IsNavigateToHomeOnBack` (localStorage)
- `UpgradeStatus` (sessionStorage)
- `HasRenderedSplashInSession` (sessionStorage)
- `RouterHistoryAge` (sessionStorage)

## Where sensitive client variables are written (from code)
| Variable | File | Action / module | Assignment |
|---|---|---|---|
| `App_SubscriptionPopUp` | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$controller` | `setApp_SubscriptionPopUp(idService.getId("PopUp")); OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:g80IUKmEk0is301eTlQE3A", callContext.i` |
| `Firebase_CloudMessage_Token` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetDeviceContext` | `setFirebase_CloudMessage_Token(vars.value.appManager_MobileContextInLocal.fCMTokenAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V` |
| `DeviceInfo_UUID` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetDeviceContext` | `setDeviceInfo_UUID(vars.value.appManager_MobileContextInLocal.uUIDAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QY` |
| `PIN_HasUnlocked` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked` | `setPIN_HasUnlocked(vars.value.hasUnlockedInLocal); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+8irhvBF4kuHtPYfmFQ+bQ", callContext.id` |
| `PIN_IsLocked` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetPIN_IsLocked` | `setPIN_IsLocked(vars.value.isLockedInLocal); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:udXpOg7FHUaNFD8DBKOFMA", callContext.id); ret` |
| `Firebase_RealtimeDatabase_Token` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetUserContextAfterLogin` | `setFirebase_RealtimeDatabase_Token(vars.value.appManager_UserInfoClientInLocal.firbaseRealTimeDabase_TokenAttr); OutSystemsDebugger.handleBreakpoint("` |
| `PIN_Use` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_Use(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.pIN_UseAttr); OutSystemsDebugger.handleBreakpoint` |
| `PIN_SessionInactivity_Use` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_SessionInactivity_Use(outVars.value.configOut.appManager_ClientCacheAttr.pIN_SessionInactivity_UseAttr); OutSystemsDebugger.handleBreakpoint("U` |
| `PIN_SessionInactivity_Seconds` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_SessionInactivity_Seconds(outVars.value.configOut.appManager_ClientCacheAttr.pIN_SessionInactivity_SecondsAttr); OutSystemsDebugger.handleBreak` |
| `PIN_EnableFingerprint` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_EnableFingerprint(outVars.value.configOut.appManager_ClientCacheAttr.pIN_EnableFingerprintAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4` |
| `PIN_EnforceOnReady` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_EnforceOnReady(outVars.value.configOut.appManager_ClientCacheAttr.pIN_EnforceOnReadyAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+` |
| `PIN_SessionInactivity_Navigate` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_SessionInactivity_Navigate(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.pIN_SessionInactivity_Navi` |
| `Firebase_RealtimeDatabase_Token` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setFirebase_RealtimeDatabase_Token(appManager_SynchAppContextVar.value.firebaseRealTimeDB_TokenOut); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei` |
| `Permissions_List` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$Permissions_Set` | `setPermissions_List(jSONSerialize1Var.value.jSONOut); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:tjRN6cRbmkmc3dy43jINAg", callContext` |

## Auth-related server actions found in code
- `AppManager_Login` → `screenservices/UBT_AppManager/ActionAppManager_Login` (UBT_AppManager.controller.js)
- `AppManager_Logout` → `screenservices/UBT_AppManager/ActionAppManager_Logout` (UBT_AppManager.controller.js)
- `AppManager_SynchAppContext` → `screenservices/UBT_AppManager/ActionAppManager_SynchAppContext` (UBT_AppManager.controller.js)
- `Sync_Info_GetMain` → `screenservices/UBTConnect/ActionSync_Info_GetMain` (UBTConnect.controller.js)

## Questions to resolve (OutSystems MCP / team)
1. Login flow: which identity providers (all `auth config` entries above), where the IdP token is exchanged for the OutSystems session, MFA steps.
2. Session: cookie names and flags, lifetime, refresh, logout (what is cleared on the server and on the device).
3. CSRF: which header carries the token on service calls; how React/BFF must send it.
4. Authorization: for each server action this screen calls, does the server check ownership/role itself, or does it rely on client-side flags?
5. Lock/PIN: is it only a client gate, or does the server refuse calls while locked? Which server action resets the lock state on start?
6. Backend calls: does OutSystems call the backend with the user's token or a service identity?
7. Tokens stored in the browser (`token/secret` category): purpose, scope, lifetime, and whether React must keep them client-side.

