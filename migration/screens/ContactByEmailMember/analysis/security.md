# Security inventory: ContactByEmailMember

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
- `australiaeast-0.in.applicationinsights.azure.com`
- `js.monitor.azure.com`
- `www.googleapis.com`

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

### other (24)
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
- `NetworkDetection_ErrorMessage_GenericError` (localStorage)
- `Offline_NetworkStatus_PendingPing_Check` (localStorage)
- `Notifications_LastChecked` (localStorage)
- `AppManager_AppBaseURL` (localStorage)
- `Directory_Updates_MonthsToShow` (localStorage)
- `Notes_IsSynched` (localStorage)
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
| (none found in captured sources) | | | |

## Auth-related server actions found in code
- `Sync_Info_GetMain` → `screenservices/UBTConnect/ActionSync_Info_GetMain` (UBTConnect.controller.js)

## Questions to resolve (OutSystems MCP / team)
1. Login flow: which identity providers (all `auth config` entries above), where the IdP token is exchanged for the OutSystems session, MFA steps.
2. Session: cookie names and flags, lifetime, refresh, logout (what is cleared on the server and on the device).
3. CSRF: which header carries the token on service calls; how React/BFF must send it.
4. Authorization: for each server action this screen calls, does the server check ownership/role itself, or does it rely on client-side flags?
5. Lock/PIN: is it only a client gate, or does the server refuse calls while locked? Which server action resets the lock state on start?
6. Backend calls: does OutSystems call the backend with the user's token or a service identity?
7. Tokens stored in the browser (`token/secret` category): purpose, scope, lifetime, and whether React must keep them client-side.

