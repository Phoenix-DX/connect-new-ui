# App shell: server calls and user actions in OutSystems and React

The app shell is the part of the app that the routes share. The route files leave it out.
- OutSystems: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).
The tool `route-actions/tools/check_route.py` merges it from the checked routes on 2026-11-04: [Bookmarks](routes/Bookmarks.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [Login](routes/Login.md), [Menu](routes/Menu.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Profile](routes/Profile.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md).

## 1. Result

| Check | Result |
|---|---|
| App shell server calls on TST | 16: React makes 14, **2 missing** |
| App shell event bindings | OutSystems: 11 diagrams. React: 8 diagrams |
| React app shell calls that TST does not make on a route | 4 |

## 2. Diagram

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_shell["App shell"]
      o0["?"]
      o1["Bookmarks"]
      o2["CacheControl_Policies"]
      o3["Connect2_LegacyShared"]
      o4["FeedBlock_Updates"]
      o5["Menu"]
      o6["Notifications"]
      o7["UBTConnect"]
      o8["UBTConnect_Utils"]
      o9["UBT_AppManager"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e10["ActionAppManager_SynchAppContext"]
    e11["DataActionGetBookmarks"]
    e12["ActionAppManager_AfterInitialize"]
    e13["ActionSync_Info_GetMain"]
    e14["ActionGetUserInformation"]
    e15["ActionGetNumberUnreadMessages"]
    e16["ServiceAPIFetchData_CacheableMapEntities"]
    e17["ServiceAPIFetchData_CacheableHouseholds"]
    e18["ActionGetAllApplicationEvents"]
    e19["ActionGet_BookmarkPills_ByBookmarkCategoryIds"]
    e20["ServiceAPIAction_UI_UpdateItem_MarkAsRead"]
    e21["ActionRequestPhotoUpdate"]
    e22["ActionAppManager_Logout"]
    e23["DataActionFetchNotifications"]
    e24["DataActionGetCacheInfo"]
    e25["ActionGetSignedImagesInBulk"]
  end
  subgraph RE["React actions"]
    subgraph RE_shell["App shell"]
      r26["afterInitialize()"]
      r27["fetchAppContext()"]
      r28["fetchCacheableHouseholds()"]
      r29["fetchCacheableMapEntities()"]
      r30["fetchNumberUnreadMessages()"]
      r31["fetchPolicies()"]
      r32["fetchSyncInfoMain()"]
      r33["fetchUserInformation()"]
    end
    subgraph RE_page["Screen"]
      r34["cache_SignedImageURL_GetCallback()"]
      r35["fetchBookmarkCards()"]
      r36["fetchBookmarkPills()"]
      r37["fetchNotifications()"]
      r38["markUpdateItemAsRead()"]
      r39["requestPhotoUpdate()"]
    end
  end
  subgraph RC["React components"]
    c40["AppFrame"]
    c41["Bookmarks"]
    c42["CommonUiLayout"]
    c43["EntityLazyImage"]
    c44["FeedUpdates"]
    c45["Menu"]
    c46["NotesSheet"]
    c47["Notifications"]
    c48["PINUnlock"]
  end
  r26 --- c40
  r27 --- c40
  r28 --- c40
  r29 --- c40
  r30 --- c40
  r32 --- c40
  r33 --- c40
  r27 --- c46
  r35 --- c41
  r36 --- c41
  r31 --- c42
  r33 --- c42
  r38 --- c44
  r39 --- c45
  r37 --- c47
  r31 --- c48
  r34 --- c43
  o9 --> e10
  o9 --> e12
  o9 --> e22
  o1 --> e11
  o7 --> e13
  o7 --> e16
  o7 --> e17
  o8 --> e14
  o8 --> e25
  o3 --> e15
  o3 --> e18
  o0 --> e19
  o4 --> e20
  o5 --> e21
  o6 --> e23
  o2 --> e24
  e10 --- r27
  e11 --- r35
  e12 --- r26
  e13 --- r32
  e14 --- r33
  e15 --- r30
  e16 --- r29
  e17 --- r28
  e19 --- r36
  e20 --- r38
  e21 --- r39
  e23 --- r37
  e24 --- r31
  e25 --- r34
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e18,e22 missing
  class e10,e11,e12,e13,e14,e15,e16,e17,e19,e20,e21,e23,e24,e25 ok
```

## 3. User actions

The two lists are independent: the OutSystems list comes from the TST compiled code, the React list from the React code. The tool does not map one list to the other.

- **OutSystems:** each event binding of the compiled views (`<event>$Action: function` of a child block or widget, `on<Event>: function` of an HTML element) with its handler.
- **React:** each JSX attribute `on<Event>={handler}` with its handler.
- Both lists keep only the bindings whose handler has an effect: a server call, a navigation, an external link, a message or a confirm dialog. The tool follows the called functions 3 levels deep.
- When the handler has branches in the code (`switch` case, `if` with `===`), each branch has its own diagram. The branch name is the constant of the condition. `other` is the last `else` or `default`.
- An arrow to the server gives the inputs of the call, the return arrow its outputs (contract `app/src/api/openapi.yaml`).

### 3.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#311-commonui_insidelayout-onbacknavigation_redirecthome) | `CommonUI_InsideLayout` | `backNavigationPrevented of PreventBackNavigation` | `onBackNavigation_RedirectHome` | – | goes to HomeFeed |
| [2](#312-commonui_insidelayout-onbacknavigation_mayberedirecthome) | `CommonUI_InsideLayout` | `backNavigation of BackNavigationHandler` | `onBackNavigation_MaybeRedirectHome` | – | goes to HomeFeed |
| [3](#313-block_pinunlock-block_pinunlock_contentwrappernavigateto_pinregist) | `Block_PINUnlock` | `navigateTo_PINRegister of ContentWrapper` | `block_PINUnlock_ContentWrapperNavigateTo_PINRegist` | – | goes to PINRegister |
| [4](#314-block_pinunlock_contentwrapper-event_pincode_pinunlockerror) | `Block_PINUnlock_ContentWrapper` | `pinUnlockError of MobileWrapper` | `event_Pincode_PinUnlockError` | – | shows a message |
| [5](#315-block_pinunlock_contentwrapper-onclick_forgotpin) | `Block_PINUnlock_ContentWrapper` | `onClick (HTML element)` | `onClick_ForgotPIN` | – | goes to Login |
| [6](#316-block_pinunlock_contentwrapper-onclick_termsandcondition) | `Block_PINUnlock_ContentWrapper` | `onClick (HTML element)` | `onClick_TermsAndCondition` | – | opens an external link; shows a message |
| [7](#317-block_pinunlock_contentwrapper-onclick_privacypolicy) | `Block_PINUnlock_ContentWrapper` | `onClick (HTML element)` | `onClick_PrivacyPolicy` | – | opens an external link; shows a message |
| [8](#318-handleonresumeopenlink-androidapplinkonresumehandlerresumenavigation) | `HandleOnResumeOpenLink` | `resumeNavigation of AndroidAppLinkOnResumeHandler` | `androidAppLinkOnResumeHandlerResumeNavigation` | – | goes to /UBTConnect/ |
| [9](#319-handleonresumeopenlink-deeplinkhandlercentralondeeplinkopen) | `HandleOnResumeOpenLink` | `onDeeplinkOpen of DeeplinkHandlerCentral` | `deeplinkHandlerCentralOnDeeplinkOpen` | – | goes to /UBTConnect/ |
| [10](#3110-dialog_accessrestrictedaction-upgrade) | `Dialog_AccessRestrictedAction` | `confirmed of ActionConfirmationDialog` | `upgrade` | – | opens an external link |
| [11](#3111-cachecontrol_policies-cachecontrolonnoncachehit) | `CacheControl_Policies` | `onNonCacheHit of CacheControl` | `cacheControlOnNonCacheHit` | – | calls GetCacheInfo |

#### 3.1.1 CommonUI_InsideLayout: onBackNavigation_RedirectHome

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CommonUI_InsideLayout
  participant N as Navigation
  U->>B: backNavigationPrevented of PreventBackNavigation → onBackNavigation_RedirectHome
  B->>N: go to HomeFeed
```

#### 3.1.2 CommonUI_InsideLayout: onBackNavigation_MaybeRedirectHome

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CommonUI_InsideLayout
  participant N as Navigation
  U->>B: backNavigation of BackNavigationHandler → onBackNavigation_MaybeRedirectHome
  B->>N: go to HomeFeed
```

#### 3.1.3 Block_PINUnlock: block_PINUnlock_ContentWrapperNavigateTo_PINRegist

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock
  participant N as Navigation
  U->>B: navigateTo_PINRegister of ContentWrapper → block_PINUnlock_ContentWrapperNavigateTo_PINRegist
  B->>N: go to PINRegister
```

#### 3.1.4 Block_PINUnlock_ContentWrapper: event_Pincode_PinUnlockError

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock_ContentWrapper
  U->>B: pinUnlockError of MobileWrapper → event_Pincode_PinUnlockError
  Note over B: message FeedbackMessage_AutoClose2
  Note over B: message FeedbackMessage_AutoClose
```

#### 3.1.5 Block_PINUnlock_ContentWrapper: onClick_ForgotPIN

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock_ContentWrapper
  participant N as Navigation
  U->>B: onClick (HTML element) → onClick_ForgotPIN
  B->>N: go to Login
```

#### 3.1.6 Block_PINUnlock_ContentWrapper: onClick_TermsAndCondition

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock_ContentWrapper
  participant X as External link
  U->>B: onClick (HTML element) → onClick_TermsAndCondition
  Note over B: via UBTConnect_Utils.openPolicy
  B->>X: JSUtils_PageOpenInNewTab
  Note over B: message errorMessage
```

#### 3.1.7 Block_PINUnlock_ContentWrapper: onClick_PrivacyPolicy

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Block_PINUnlock_ContentWrapper
  participant X as External link
  U->>B: onClick (HTML element) → onClick_PrivacyPolicy
  Note over B: via UBTConnect_Utils.openPolicy
  B->>X: JSUtils_PageOpenInNewTab
  Note over B: message errorMessage
```

#### 3.1.8 HandleOnResumeOpenLink: androidAppLinkOnResumeHandlerResumeNavigation

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HandleOnResumeOpenLink
  participant N as Navigation
  U->>B: resumeNavigation of AndroidAppLinkOnResumeHandler → androidAppLinkOnResumeHandlerResumeNavigation
  B->>N: go to /UBTConnect/
```

#### 3.1.9 HandleOnResumeOpenLink: deeplinkHandlerCentralOnDeeplinkOpen

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HandleOnResumeOpenLink
  participant N as Navigation
  U->>B: onDeeplinkOpen of DeeplinkHandlerCentral → deeplinkHandlerCentralOnDeeplinkOpen
  B->>N: go to /UBTConnect/
```

#### 3.1.10 Dialog_AccessRestrictedAction: upgrade

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Dialog_AccessRestrictedAction
  participant X as External link
  U->>B: confirmed of ActionConfirmationDialog → upgrade
  Note over B: via UBTConnect_Utils.app_Subscription_NavigateToUpgrade
  B->>X: OpenInApp_OpenExternalLink
```

#### 3.1.11 CacheControl_Policies: cacheControlOnNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CacheControl_Policies
  participant S as Server (TST calls)
  U->>B: onNonCacheHit of CacheControl → cacheControlOnNonCacheHit
  B->>S: GetCacheInfo(CacheKey, CacheTypeId, TimeToLiveSeconds)
  S-->>B: CacheControl_Response
```

### 3.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#321-confirmdialogview-onconfirmed) | [`platform/feedback/dialogs/DialogAccessRestrictedAction.tsx:74`](../app/src/platform/feedback/dialogs/DialogAccessRestrictedAction.tsx#L74) | `<ConfirmDialogView>` | `onConfirmed` | `navigateToUpgrade` | – | opens an external link |
| [2](#322-pinunlockcontentcontainer-onnavigatetopinregister) | [`platform/feedback/dialogs/BlockPinUnlock.tsx:90`](../app/src/platform/feedback/dialogs/BlockPinUnlock.tsx#L90) | `<PinUnlockContentContainer>` | `onNavigateToPINRegister` | `inline` | – | goes to PINRegister |
| [3](#323-pinunlockcontent-onsetpin-unlocked) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:67`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L67) | `<PinUnlockContent>` | `onSetPin` | `unlock.onSetPin` | `unlocked` | calls the prop onPinUnlockSuccess() |
| [4](#324-pinunlockcontent-onsetpin-other) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:67`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L67) | `<PinUnlockContent>` | `onSetPin` | `unlock.onSetPin` | `other` | shows a message; calls the prop onNavigateToPINRegister() |
| [5](#325-pinunlockcontent-onpinunlockerror) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:70`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L70) | `<PinUnlockContent>` | `onPinUnlockError` | `content.onPinUnlockError` | – | shows a message; calls the prop onNavigateToPINRegister() |
| [6](#326-pinunlockcontent-onforgotpin) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:71`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L71) | `<PinUnlockContent>` | `onForgotPin` | `content.onForgotPin` | – | goes to Login |
| [7](#327-pinunlockcontent-onclickpolicy) | [`platform/feedback/dialogs/PinUnlockContentContainer.tsx:72`](../app/src/platform/feedback/dialogs/PinUnlockContentContainer.tsx#L72) | `<PinUnlockContent>` | `onClickPolicy` | `content.onClickPolicy` | – | opens an external link; shows a message |
| [8](#328-cachecontrol-onnoncachehit) | [`legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx:55`](../app/src/legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx#L55) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |

#### 3.2.1 ConfirmDialogView: onConfirmed

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ConfirmDialogView · DialogAccessRestrictedAction.tsx
  participant X as External link
  U->>H: onConfirmed → navigateToUpgrade
  H->>X: openInApp_OpenExternalLink
```

#### 3.2.2 PinUnlockContentContainer: onNavigateToPINRegister

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContentContainer · BlockPinUnlock.tsx
  participant N as Navigation
  U->>H: onNavigateToPINRegister → inline
  H->>N: go to PINRegister
```

#### 3.2.3 PinUnlockContent: onSetPin (unlocked)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  U->>H: onSetPin → unlock.onSetPin (unlocked)
  Note over H: calls the prop onPinUnlockSuccess()
```

#### 3.2.4 PinUnlockContent: onSetPin (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  U->>H: onSetPin → unlock.onSetPin (other)
  Note over H: via onPinUnlockError()
  Note over H: via showError()
  Note over H: message { title: '', message, messageType: 'error', encodedHtml: true, extendedClass: '', delayMs:
  Note over H: calls the prop onNavigateToPINRegister()
```

#### 3.2.5 PinUnlockContent: onPinUnlockError

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  U->>H: onPinUnlockError → content.onPinUnlockError
  Note over H: via showError()
  Note over H: message { title: '', message, messageType: 'error', encodedHtml: true, extendedClass: '', delayMs:
  Note over H: calls the prop onNavigateToPINRegister()
```

#### 3.2.6 PinUnlockContent: onForgotPin

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  participant N as Navigation
  U->>H: onForgotPin → content.onForgotPin
  H->>N: go to Login
```

#### 3.2.7 PinUnlockContent: onClickPolicy

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PinUnlockContent · PinUnlockContentContainer.tsx
  participant X as External link
  U->>H: onClickPolicy → content.onClickPolicy
  Note over H: via openPolicy()
  Note over H: message errorMessage
  H->>X: jSUtils_PageOpenInNewTab
```

#### 3.2.8 CacheControl: onNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CacheControl · PoliciesCacheControl.tsx
  participant A as Server (React api)
  U->>H: onNonCacheHit → onNonCacheHit
  Note over H: via fetchPolicies()
  H->>A: DataActionGetCacheInfo(CacheKey, CacheTypeId, TimeToLiveSeconds)
  A-->>H: CacheControl_Response
```

## 4. Server calls

The column **Routes** gives the checked routes where the app shell makes the call.

All columns come from the code, without interpretation:

- **Direct caller (TST):** the block or module of the action that calls the server (the step before the server call in the chain).
- **Chain (TST):** the chains of client actions in the TST compiled code, from their start to the call.
  A long chain shows its first 2 steps, …, and its last 2 steps.
- **Seen on TST:** `yes` when TST made the call in the capture.
- **React action:** the React function with the `callAction` of the same call (`file:line`), and the code that loads it: `shell` (from `main.tsx`), `page` (from the screen), or both.
- **Used by (React references):** the functions and components that reference the React action, up to the nearest component. A reference is not always a call.
- **Status:** `implemented` when the contract path of the React call gives the same TST URL. It does not prove the same behaviour.

| # | Call (TST) | Kind | Direct caller (TST) | Chain (TST) | Seen on TST | React action | Used by (React references) | Status | Routes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `UBTConnect/Bookmarks/Bookmarks/DataActionGetBookmarks` | data action | `Bookmarks` | onClick in CustomContainer → event clicked of CustomContainer → … → Bookmarks.refresh_GetBookmarksData → Bookmarks.DataActionGetBookmarks<br>onClick in Icon → event click of Icon → … → Bookmarks.refresh_GetBookmarksData → Bookmarks.DataActionGetBookmarks | yes | `fetchBookmarkCards()` [`api/bookmark/bookmarkCards.ts:114`](../app/src/api/bookmark/bookmarkCards.ts#L114) (page) | `Bookmarks → useBookmarks → fetchBookmarkCards`<br>[`pages/Bookmarks/BookmarksPage.tsx`](../app/src/pages/Bookmarks/BookmarksPage.tsx) | implemented | [Bookmarks](routes/Bookmarks.md) |
| 2 | `UBTConnect_Utils/CacheControl/CacheControl_Policies/DataActionGetCacheInfo` | data action | `CacheControl_Policies` | CacheControl.OnInitialize → CacheControl.onInitialize → event onNonCacheHit of CacheControl → CacheControl_Policies.cacheControlOnNonCacheHit → CacheControl_Policies.DataActionGetCacheInfo<br>CacheControl_Policies fetch at start → CacheControl_Policies.DataActionGetCacheInfo | yes | `fetchPolicies()` [`api/app/repository.ts:54`](../app/src/api/app/repository.ts#L54) (shell + page) | `PINUnlock → BlockPinUnlock → … → fetchPolicies`<br>[`pages/PINUnlock/PINUnlockPage.tsx`](../app/src/pages/PINUnlock/PINUnlockPage.tsx)<br>`CommonUiLayout → LockHost → … → fetchPolicies`<br>[`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | implemented | [PINUnlock](routes/PINUnlock.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 3 | `Connect2_LegacyShared/ActionGetAllApplicationEvents` | server action | `Connect2_LegacyShared` | HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → Connect2_LegacyShared.getAppEventName → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents | no | – | – | **missing** | [Bookmarks](routes/Bookmarks.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [Login](routes/Login.md), [Menu](routes/Menu.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Profile](routes/Profile.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 4 | `Connect2_LegacyShared/ActionGetNumberUnreadMessages` | server action | `Connect2_LegacyShared` | UBTConnect.onApplicationReady → UBTConnect.connect_SetLoggedContext → Connect2_LegacyShared.synchronizeNumberUnreadMessages → server GetNumberUnreadMessages<br>UBTConnect.fCM_NotificationCallback → Connect2_LegacyShared.synchronizeNumberUnreadMessages → server GetNumberUnreadMessages | yes | `fetchNumberUnreadMessages()` [`api/message/unreadMessages.ts:22`](../app/src/api/message/unreadMessages.ts#L22) (shell) | `AppFrame → AppStart → … → fetchNumberUnreadMessages`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [Bookmarks](routes/Bookmarks.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [Menu](routes/Menu.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Profile](routes/Profile.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 5 | `UBTConnect/Home/FeedBlock_Updates/ServiceAPIAction_UI_UpdateItem_MarkAsRead` | service action | `FeedBlock_Updates` | onClick in CustomContainer → event clicked of CustomContainer → event onClick of Update_ListItem → FeedBlock_Updates.event_ListItemOnClick → server Action_UI_UpdateItem_MarkAsRead | no | `markUpdateItemAsRead()` [`api/update/repository.ts:47`](../app/src/api/update/repository.ts#L47) (page) | `FeedUpdates → useFeedUpdates → markUpdateItemAsRead`<br>[`pages/HomeFeed/HomeFeedPage.tsx`](../app/src/pages/HomeFeed/HomeFeedPage.tsx) | implemented | [HomeFeed](routes/HomeFeed.md) |
| 6 | `UBTConnect/App_Menu/Menu/ActionRequestPhotoUpdate` | server action | `Menu` | onClick in CustomContainer → event clicked of CustomContainer → event onClick_MenuOption of Menu_List → Menu.onClick_MenuOption → server RequestPhotoUpdate | no | `requestPhotoUpdate()` [`api/member/repository.ts:46`](../app/src/api/member/repository.ts#L46) (page) | `Menu → useMenu → requestPhotoUpdate`<br>[`pages/Menu/MenuPage.tsx`](../app/src/pages/Menu/MenuPage.tsx) | implemented | [Menu](routes/Menu.md) |
| 7 | `UBTConnect/App_Notifications/Notifications/DataActionFetchNotifications` | data action | `Notifications` | onClick in Icon → event click of Icon → … → Notifications.refreshNotifications → Notifications.DataActionFetchNotifications | yes | `fetchNotifications()` [`api/notification/repository.ts:40`](../app/src/api/notification/repository.ts#L40) (page) | `Notifications → useNotifications → fetchNotifications`<br>[`pages/Notifications/NotificationsPage.tsx`](../app/src/pages/Notifications/NotificationsPage.tsx) | implemented | [Notifications](routes/Notifications.md) |
| 8 | `UBTConnect/ActionSync_Info_GetMain` | server action | `UBTConnect` | UBTConnect.onApplicationReady → UBTConnect.connect_SetLoggedContext → UBTConnect.sync_Info_Main → server Sync_Info_GetMain<br>UBTConnect.onApplicationReady → UBTConnect.sync_Info_Main → server Sync_Info_GetMain | yes | `fetchSyncInfoMain()` [`api/app/repository.ts:36`](../app/src/api/app/repository.ts#L36) (shell) | `AppFrame → AppStart → … → fetchSyncInfoMain`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [Bookmarks](routes/Bookmarks.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [Menu](routes/Menu.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Profile](routes/Profile.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 9 | `UBTConnect/ServiceAPIFetchData_CacheableHouseholds` | service action | `UBTConnect` | UBTConnect.get_Cacheable_MapHouseholds → server FetchData_CacheableHouseholds | yes | `fetchCacheableHouseholds()` [`api/app/repository.ts:48`](../app/src/api/app/repository.ts#L48) (shell) | `AppFrame → AppStart → … → fetchCacheableHouseholds`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [Bookmarks](routes/Bookmarks.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [Menu](routes/Menu.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Profile](routes/Profile.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 10 | `UBTConnect/ServiceAPIFetchData_CacheableMapEntities` | service action | `UBTConnect` | UBTConnect.get_Cacheable_MapEntities → server FetchData_CacheableMapEntities | yes | `fetchCacheableMapEntities()` [`api/app/repository.ts:42`](../app/src/api/app/repository.ts#L42) (shell) | `AppFrame → AppStart → … → fetchCacheableMapEntities`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [Bookmarks](routes/Bookmarks.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [Menu](routes/Menu.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Profile](routes/Profile.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 11 | `UBTConnect_Bookmarks_MCS/ActionGet_BookmarkPills_ByBookmarkCategoryIds` | server action | `UBTConnect_Bookmarks_MCS` | no chain in the TST code; TST made the call in the capture | yes | `fetchBookmarkPills()` [`api/bookmark/bookmarkCards.ts:122`](../app/src/api/bookmark/bookmarkCards.ts#L122) (page) | `Bookmarks → useBookmarks → get_LocalDynamicBookmarkPills → fetchBookmarkPills`<br>[`pages/Bookmarks/BookmarksPage.tsx`](../app/src/pages/Bookmarks/BookmarksPage.tsx) | implemented | [Bookmarks](routes/Bookmarks.md) |
| 12 | `UBTConnect_Utils/ActionGetSignedImagesInBulk` | server action | `UBTConnect_Utils` | UBTConnect_Utils.cache_SignedImageURL_GetCallback → server GetSignedImagesInBulk | yes | `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:124`](../app/src/lib/ubtConnectUtils/actions.ts#L124) (page) | `EntityLazyImage → cache_SignedImageURL_Get → cache_SignedImageURL_GetCallback`<br>[`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) | implemented | [Profile](routes/Profile.md) |
| 13 | `UBTConnect_Utils/ActionGetUserInformation` | server action | `UBTConnect_Utils` | UBTConnect_Utils.cache_UserInfo_GetCallback → server GetUserInformation | yes | `fetchUserInformation()` [`api/member/userInformation.ts:6`](../app/src/api/member/userInformation.ts#L6) (shell + page) | `CommonUiLayout → DialogAccessRestrictedAction → … → fetchUserInformation`<br>[`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx)<br>`AppFrame → CommonUiHost → … → fetchUserInformation`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [Bookmarks](routes/Bookmarks.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 14 | `UBT_AppManager/ActionAppManager_AfterInitialize` | server action | `UBT_AppManager` | UBT_AppManager.appManager_OnAppReady_Web → UBT_AppManager.appManager_InitializeWebComponents → UBT_AppManager.appManager_AfterInitialize → server AppManager_AfterInitialize<br>UBTConnect.onApplicationReady → UBT_AppManager_Mobile.appManager_Mobile_OnAppReady → UBT_AppManager.appManager_InitializeWebComponents → UBT_AppManager.appManager_AfterInitialize → server AppManager_AfterInitialize | yes | `afterInitialize()` [`api/app/repository.ts:30`](../app/src/api/app/repository.ts#L30) (shell) | `AppFrame → AppStart → … → afterInitialize`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx) | implemented | [Bookmarks](routes/Bookmarks.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [Menu](routes/Menu.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Profile](routes/Profile.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |
| 15 | `UBT_AppManager/ActionAppManager_Logout` | server action | `UBT_AppManager` | onClick in CustomContainer → event clicked of CustomContainer → … → UBT_AppManager.appManager_Logout → server AppManager_Logout | no | – | – | **missing** | [Menu](routes/Menu.md) |
| 16 | `UBT_AppManager/ActionAppManager_SynchAppContext` | server action | `UBT_AppManager` | HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → … → UBT_AppManager.appManager_SynchAppContextInternal → server AppManager_SynchAppContext<br>UBT_AppManager.inAppBrowser_BeforeLoadCallback → UBT_AppManager.appManager_HandleCallback → … → UBT_AppManager.appManager_SynchAppContextInternal → server AppManager_SynchAppContext<br>UBT_AppManager.inAppBrowser_BeforeLoadCallback → UBT_AppManager.appManager_HandleCallback → … → UBT_AppManager.appManager_SynchAppContextInternal → server AppManager_SynchAppContext<br>(+4 more chains) | yes | `fetchAppContext()` [`api/app/repository.ts:23`](../app/src/api/app/repository.ts#L23) (shell + page) | `AppFrame → AppStart → … → fetchAppContext`<br>[`app/AppFrame.tsx`](../app/src/app/AppFrame.tsx)<br>`NotesSheet → raiseToFlowHandler → … → fetchAppContext`<br>[`components/note/NotesSheet/NotesSheet.tsx`](../app/src/components/note/NotesSheet/NotesSheet.tsx) | implemented | [Bookmarks](routes/Bookmarks.md), [ContactByEmailMember](routes/ContactByEmailMember.md), [ContactByEmailOneSchoolGlobal](routes/ContactByEmailOneSchoolGlobal.md), [ContactUsDetails](routes/ContactUsDetails.md), [ContactUsMenu](routes/ContactUsMenu.md), [HomeFeed](routes/HomeFeed.md), [Login](routes/Login.md), [Menu](routes/Menu.md), [MyEntertaining](routes/MyEntertaining.md), [NotificationDetails](routes/NotificationDetails.md), [Notifications](routes/Notifications.md), [PINBiometricsMenu](routes/PINBiometricsMenu.md), [PINChange](routes/PINChange.md), [PINRegister](routes/PINRegister.md), [PINUnlock](routes/PINUnlock.md), [Profile](routes/Profile.md), [Services](routes/Services.md), [Splash](routes/Splash.md), [TermsAndPoliciesMenu](routes/TermsAndPoliciesMenu.md) |

## 5. Missing in React

- Call `Connect2_LegacyShared/ActionGetAllApplicationEvents`. Chain on TST: HandleImageLoadError.applicationEvent_ImageError → Connect2_LegacyShared.zOnApplicationEvent_Wrapper → Connect2_LegacyShared.getAppEventName → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents.
  - No React code makes this call.
- Call `UBT_AppManager/ActionAppManager_Logout`. Chain on TST: onClick in CustomContainer → event clicked of CustomContainer → … → UBT_AppManager.appManager_Logout → server AppManager_Logout.
  - No React code makes this call.
  - Note in [`platform/auth/mockAuth.ts:24`](../app/src/platform/auth/mockAuth.ts#L24): "/** The server logout of AppManager_Logout: no call (app-shell spec 10). */"
  - Note in [`platform/session/auth.ts:84`](../app/src/platform/session/auth.ts#L84): "/** Connect_Logout (UC:1062-1066): Cache_InvalidateEverything, then AppManager_Logout (AM:3649-3720): server logout"
  - Note in [`platform/session/pin.ts:66`](../app/src/platform/session/pin.ts#L66): "/** PIN_Delete(UserId, AppName), part of AppManager_Logout (AM:3712). */"

## 6. Questions

1. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../app/src/api/app/repository.ts#L54) in the app shell. TST has no chain to this call on ContactByEmailMember, ContactByEmailOneSchoolGlobal, PINBiometricsMenu, Services. Does the app shell make this call on these routes?
2. React calls `/api/UBTConnect/ServiceAPIFetchData_CacheableHouseholds` from `fetchCacheableHouseholds()` [`api/app/repository.ts:48`](../app/src/api/app/repository.ts#L48) in the app shell. TST has no chain to this call on Login. Does the app shell make this call on these routes?
3. React calls `/api/UBTConnect/ServiceAPIFetchData_CacheableMapEntities` from `fetchCacheableMapEntities()` [`api/app/repository.ts:42`](../app/src/api/app/repository.ts#L42) in the app shell. TST has no chain to this call on Login. Does the app shell make this call on these routes?
4. React calls `/api/UBT_AppManager/ActionAppManager_AfterInitialize` from `afterInitialize()` [`api/app/repository.ts:30`](../app/src/api/app/repository.ts#L30) in the app shell. TST has no chain to this call on Login. Does the app shell make this call on these routes?
