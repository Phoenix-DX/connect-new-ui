# Security inventory: MessageDetail

Names and categories only; no values were captured. Inferences are marked as such and must be confirmed with the OutSystems MCP or the team.

## Session and request authentication
- Request header names on service calls: `accept`, `content-type`, `outsystems-request-token`, `request-id`, `traceparent`, `x-csrftoken`
- Response header names on service calls: `cache-control`, `cf-cache-status`, `cf-ray`, `content-encoding`, `content-length`, `content-type`, `date`, `outsystems-locale`, `pragma`, `server`, `strict-transport-security`, `vary`, `x-content-type-options`
- Cookie names visible to JavaScript: `ai_user`, `nr2Users`, `ai_session`
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
- (not recorded)

## Client storage by category
### token/secret (4)
> Readable by any script on the origin (XSS exposure). In React keep tokens server-side (BFF + HttpOnly cookie); do not copy this pattern.
- `Firebase_CloudMessage_Token` (localStorage)
- `AppManager_LocalStorageKey_Pin` (localStorage)
- `ConnectionString` (localStorage)
- `Firebase_RealtimeDatabase_Token` (localStorage)

### auth config (8)
> Public configuration of the identity provider(s). Inventory every provider and flow before designing auth for React.
- `AzureB2C_ResetPassPolicy` (localStorage)
- `AppManager_OAuth_EndPoint` (localStorage)
- `AppManager_IdPProviderId` (localStorage)
- `AzureB2C_ClientId` (localStorage)
- `Embedd_B2CTenant` (localStorage)
- `Streamline_TOTPOnLogin` (localStorage)
- `AzureB2C_LoginPolicy` (localStorage)
- `FrontEgg_AppId` (localStorage)

### lock / re-auth (9)
> Client-side state: a UI gate, not a security boundary. Verify whether the server refuses calls while locked (OutSystems MCP / team).
- `PIN_HasUnlocked` (localStorage)
- `PIN_SessionInactivity_Navigate` (localStorage)
- `PIN_SessionInactivity_Seconds` (localStorage)
- `PIN_IsRegistering` (localStorage)
- `PIN_EnforceOnReady` (localStorage)
- `PIN_Use` (localStorage)
- `PIN_SessionInactivity_Use` (localStorage)
- `PIN_IsLocked` (localStorage)
- `PIN_EnableFingerprint` (localStorage)

### identity / personal (8)
> Personal identifiers persisted on the device. Check they are cleared on logout and whether they must be stored at all.
- `AppManager_UserExternalId` (localStorage)
- `DeviceInfo_UUID` (localStorage)
- `AppManager_MemberId` (localStorage)
- `AppManager_ContactBaseId` (localStorage)
- `SESSION_USER_ID` (localStorage)
- `AppManager_Username` (localStorage)
- `UUID` (localStorage)
- `AppManager_UserExtended` (localStorage)

### permissions / entitlements (4)
> Client-side copy used to show/hide UI. Every server action must enforce the same rule itself; confirm per action.
- `RolesInfo` (localStorage)
- `Permissions_List` (localStorage)
- `App_SubscriptionPopUp` (localStorage)
- `Licenses_List` (localStorage)

### feature flags (4)
- `Firebase_RealtimeDatabase_Use` (localStorage)
- `HasTracingEnabled` (localStorage)
- `AzureInsights_Use` (localStorage)
- `HasTracingEnabled` (localStorage)

### telemetry (2)
- `AI_sentBuffer_1` (sessionStorage)
- `AI_buffer_1` (sessionStorage)

### device / app info (15)
- `DeviceInfo_IsRunningAsPWA` (localStorage)
- `ApplicationInfo` (localStorage)
- `MinWebViewVersion_Safari` (localStorage)
- `MinWebViewVersion_Chrome` (localStorage)
- `DeviceInfo_MobileVersion` (localStorage)
- `MinNativeAppVersion` (localStorage)
- `OutSystems_Environment` (localStorage)
- `AppManager_EspaceName` (localStorage)
- `DeviceInfo_Browser` (localStorage)
- `DeviceInfo_PackageName` (localStorage)
- `DeviceInfo_Platform` (localStorage)
- `ApplicationInfo` (localStorage)
- `DeviceInfo_UserAgent` (localStorage)
- `DeviceInfo_MobileBuild` (localStorage)
- `DeviceInfo_IsNative` (localStorage)

### third-party sdk (5)
- `Streamline_SerialNumber` (localStorage)
- `Firebase_RealtimeDatabase_StartedOn` (localStorage)
- `Firebase_ProjectId` (localStorage)
- `firebase:host:connect2-tst-default-rtdb.asia-southeast1.firebasedatabase.app` (localStorage)
- `Streamline_IsInstalled` (localStorage)

### other (26)
- `PhotobookCarousel_SelectedSpeed` (localStorage)
- `CurrentLocale` (localStorage)
- `OutSystems_LastURL` (localStorage)
- `NetworkDetection_ErrorMessage_NoInternet` (localStorage)
- `UnreadPublicMessagesNumber` (localStorage)
- `App_Policies_HasPolicyToAccept` (localStorage)
- `App_NetworkStatus_IsOnline_IsPersistent` (localStorage)
- `Bookmarks_IsSynched` (localStorage)
- `IsNavigateToHomeOnBack` (localStorage)
- `NetworkDetection_VerboseMode` (localStorage)
- `Directory_Updates_UnreadCount_LastCheck` (localStorage)
- `NetworkDetection_ErrorMessage_GenericError` (localStorage)
- `Offline_NetworkStatus_PendingPing_Check` (localStorage)
- `Notifications_LastChecked` (localStorage)
- `AppManager_AppBaseURL` (localStorage)
- `Directory_Updates_MonthsToShow` (localStorage)
- `Notes_IsSynched` (localStorage)
- `Directory_Updates_UnreadCount` (localStorage)
- `AppManager_CustomCallback` (localStorage)
- `NetworkDetection_StatusIsOnline_IsPersistent` (localStorage)
- `Notifications_IsSynched` (localStorage)
- `UnreadNotificationsNumber` (localStorage)
- `LastURL` (localStorage)
- `UpgradeStatus` (sessionStorage)
- `HasRenderedSplashInSession` (sessionStorage)
- `RouterHistoryAge` (sessionStorage)

## Where sensitive client variables are written (from code)
| Variable | File | Action / module | Assignment |
|---|---|---|---|
| `App_SubscriptionPopUp` | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc.js` | `UBTConnect_Utils.CW_App_Common_Blocks_PopupDialogs.Dialog_AccessRestrictedAction.mvc$controller` | `setApp_SubscriptionPopUp(idService.getId("PopUp")); OutSystemsDebugger.handleBreakpoint("_OwvmJqPz0GyaZBFX4uPyQ:g80IUKmEk0is301eTlQE3A", callContext.i` |
| `AppManager_UserExtended` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetCachedUserInfo` | `setAppManager_UserExtended(jSONSerialize1Var.value.jSONOut); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:TpBJqZiknEW6Sm9yWs7wDA", call` |
| `Firebase_CloudMessage_Token` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetDeviceContext` | `setFirebase_CloudMessage_Token(vars.value.appManager_MobileContextInLocal.fCMTokenAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V` |
| `DeviceInfo_UUID` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetDeviceContext` | `setDeviceInfo_UUID(vars.value.appManager_MobileContextInLocal.uUIDAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:V_vrE8qoPEO1M01QY` |
| `PIN_HasUnlocked` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetPIN_HasUnlocked` | `setPIN_HasUnlocked(vars.value.hasUnlockedInLocal); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:+8irhvBF4kuHtPYfmFQ+bQ", callContext.id` |
| `PIN_IsLocked` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetPIN_IsLocked` | `setPIN_IsLocked(vars.value.isLockedInLocal); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:udXpOg7FHUaNFD8DBKOFMA", callContext.id); ret` |
| `PIN_IsRegistering` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetPIN_IsRegistering` | `setPIN_IsRegistering(vars.value.isRegisteringInLocal); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:y1L6imPYM0ayIjlQHwEr0Q", callContex` |
| `AppManager_UserExternalId` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetUserContextAfterLogin` | `setAppManager_UserExternalId(vars.value.appManager_UserInfoClientInLocal.external_IdAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ` |
| `Firebase_RealtimeDatabase_Token` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetUserContextAfterLogin` | `setFirebase_RealtimeDatabase_Token(vars.value.appManager_UserInfoClientInLocal.firbaseRealTimeDabase_TokenAttr); OutSystemsDebugger.handleBreakpoint("` |
| `AppManager_Username` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetUserContextAfterLogin` | `setAppManager_Username(vars.value.appManager_UserInfoClientInLocal.usernameAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:p6WiKcE9` |
| `AppManager_ContactBaseId` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetUserContextAfterLogin` | `setAppManager_ContactBaseId(vars.value.appManager_UserInfoClientInLocal.userExtendedAttr.contactBaseIdAttr); OutSystemsDebugger.handleBreakpoint("U+mo` |
| `AppManager_MemberId` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SetUserContextAfterLogin` | `setAppManager_MemberId(vars.value.appManager_UserInfoClientInLocal.userExtendedAttr.memberIdAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h` |
| `PIN_Use` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_Use(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.pIN_UseAttr); OutSystemsDebugger.handleBreakpoint` |
| `PIN_SessionInactivity_Use` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_SessionInactivity_Use(outVars.value.configOut.appManager_ClientCacheAttr.pIN_SessionInactivity_UseAttr); OutSystemsDebugger.handleBreakpoint("U` |
| `PIN_SessionInactivity_Seconds` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_SessionInactivity_Seconds(outVars.value.configOut.appManager_ClientCacheAttr.pIN_SessionInactivity_SecondsAttr); OutSystemsDebugger.handleBreak` |
| `PIN_EnableFingerprint` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_EnableFingerprint(outVars.value.configOut.appManager_ClientCacheAttr.pIN_EnableFingerprintAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4` |
| `PIN_EnforceOnReady` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_EnforceOnReady(outVars.value.configOut.appManager_ClientCacheAttr.pIN_EnforceOnReadyAttr); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+` |
| `PIN_SessionInactivity_Navigate` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setPIN_SessionInactivity_Navigate(appManager_SynchAppContextVar.value.appManager_ClientConfigOut.appManager_ClientCacheAttr.pIN_SessionInactivity_Navi` |
| `Firebase_RealtimeDatabase_Token` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$AppManager_SynchAppContextInternal` | `setFirebase_RealtimeDatabase_Token(appManager_SynchAppContextVar.value.firebaseRealTimeDB_TokenOut); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei` |
| `Licenses_List` | `UBT_AppManager.controller.js` | `UBT_AppManager.controller$Licenses_Set` | `setLicenses_List(jSONSerialize1Var.value.jSONOut); OutSystemsDebugger.handleBreakpoint("U+moTowL4Uei+h+0UlGNPQ:WJZOiNptJkuIt3iC3bvmhQ", callContext.id` |
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

