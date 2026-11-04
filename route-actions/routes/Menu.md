# Menu: server calls and user actions in OutSystems and React

This file compares the route `/UBTConnect/Menu` in OutSystems (TST) with the React app.
The tool `route-actions/tools/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.
- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/Menu` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Menu.Menu` | TST compiled code |
| UI flow | `App_Menu` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/Menu/MenuPage.tsx`](../../app/src/pages/Menu/MenuPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 20 screen and block files of the route, 28 app shell files. React: 152 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 3: React makes 3, **0 missing** |
| User actions of the route | OutSystems: 15 diagrams. React: 24 diagrams |
| React calls of the screen that TST does not make | 3 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 20 of 20 |
| Navigation targets found in React | 10 of 10 |
| App shell on this route | 9 calls; event bindings: OutSystems 10, React 6: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `member`<br>2026-10-29<br>pixel difference 1.1% | <img src="../../migration/screens/Menu/parity/default.expected.png" width="200" alt="default expected"> | <img src="../../migration/screens/Menu/parity/default.build.png" width="200" alt="default build"> | <img src="../../migration/screens/Menu/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/Menu/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../../migration/screens/Menu/parity/loading.build.png" width="200" alt="loading build"> | <img src="../../migration/screens/Menu/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/Menu/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../../migration/screens/Menu/parity/offline.build.png" width="200" alt="offline build"> | <img src="../../migration/screens/Menu/parity/offline.diff.png" width="200" alt="offline diff"> |

## 4. Diagram

- A box on the left is the block or module of the action that calls the server (TST code).
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_screen["Screen and its blocks"]
      o0["CacheControl_UserInfo"]
      o1["UBTConnect"]
      o2["UBTConnect_Utils"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e3["ActionGet_RuntimeVersion"]
    e4["DataActionGetCacheInfo"]
    e5["ServiceAPIGet_UI_UpdateItems_UnreadCount_All"]
  end
  subgraph RE["React actions"]
    subgraph RE_page["Screen"]
      r6["UserInfoCacheControl()"]
      r7["fetchUnreadUpdateItemsCount()"]
      r8["get_ConnectVersionDetails()"]
    end
  end
  subgraph RC["React components"]
    c9["AppVersion"]
    c10["BottomBar"]
    c11["Menu"]
  end
  r8 --- c9
  r6 --- c11
  r7 --- c10
  o2 --> e3
  o0 --> e4
  o1 --> e5
  e3 --- r8
  e4 --- r6
  e5 --- r7
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e3,e4,e5 ok
```

## 5. User actions

The two lists are independent: the OutSystems list comes from the TST compiled code, the React list from the React code. The tool does not map one list to the other.

- **OutSystems:** each event binding of the compiled views (`<event>$Action: function` of a child block or widget, `on<Event>: function` of an HTML element) with its handler.
- **React:** each JSX attribute `on<Event>={handler}` with its handler.
- Both lists keep only the bindings whose handler has an effect: a server call, a navigation, an external link, a message or a confirm dialog. The tool follows the called functions 3 levels deep.
- When the handler has branches in the code (`switch` case, `if` with `===`), each branch has its own diagram. The branch name is the constant of the condition. `other` is the last `else` or `default`.
- An arrow to the server gives the inputs of the call, the return arrow its outputs (contract `app/src/api/openapi.yaml`).

### 5.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#511-bottombarmenu-event_bottombar_clicked-home) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| [2](#512-bottombarmenu-event_bottombar_clicked-directory) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| [3](#513-bottombarmenu-event_bottombar_clicked-updates) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| [4](#514-bottombarmenu-event_bottombar_clicked-bookmarks) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| [5](#515-bottombarmenu-event_bottombar_clicked-menu) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |
| [6](#516-menu-onclick_edityouraccount) | `Menu` | `onClick (HTML element)` | `onClick_EditYourAccount` | – | goes to Profile |
| [7](#517-menu-onclick_menuoption-logout) | `Menu` | `onClick_MenuOption of List` | `onClick_MenuOption` | `logOut` | calls AppManager_Logout, AppManager_SynchAppContext; goes to HomeFeed; asks for a confirmation |
| [8](#518-menu-onclick_menuoption-contactus) | `Menu` | `onClick_MenuOption of List` | `onClick_MenuOption` | `contactUs` | goes to ContactUsMenu |
| [9](#519-menu-onclick_menuoption-termsandpolicies) | `Menu` | `onClick_MenuOption of List` | `onClick_MenuOption` | `termsAndPolicies` | goes to TermsAndPoliciesMenu |
| [10](#5110-menu-onclick_menuoption-pinandbiometrics) | `Menu` | `onClick_MenuOption of List` | `onClick_MenuOption` | `pINAndBiometrics` | goes to PINBiometricsMenu |
| [11](#5111-menu-onclick_menuoption-subscriptionandpayments) | `Menu` | `onClick_MenuOption of List` | `onClick_MenuOption` | `subscriptionAndPayments` | opens an external link |
| [12](#5112-menu-onclick_menuoption-requestphotoupdate) | `Menu` | `onClick_MenuOption of List` | `onClick_MenuOption` | `requestPhotoUpdate` | calls RequestPhotoUpdate; shows a message; asks for a confirmation |
| [13](#5113-menu-onclick_menuoption-other) | `Menu` | `onClick_MenuOption of List` | `onClick_MenuOption` | `other` | shows a message |
| [14](#5114-layout_detailpage-onclick_backnavigation) | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |
| [15](#5115-cachecontrol_userinfo-cachecontrolonnoncachehit) | `CacheControl_UserInfo` | `onNonCacheHit of CacheControl` | `cacheControlOnNonCacheHit` | – | calls GetCacheInfo |

#### 5.1.1 BottomBarMenu: event_BottomBar_Clicked (home)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (home)
  B->>N: go to HomeFeed
```

#### 5.1.2 BottomBarMenu: event_BottomBar_Clicked (directory)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (directory)
  B->>N: go to CountryList
  B->>N: go to Locality_Details
```

#### 5.1.3 BottomBarMenu: event_BottomBar_Clicked (updates)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (updates)
  B->>N: go to Updates_SingleList
```

#### 5.1.4 BottomBarMenu: event_BottomBar_Clicked (bookmarks)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (bookmarks)
  B->>N: go to Bookmarks
```

#### 5.1.5 BottomBarMenu: event_BottomBar_Clicked (menu)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (menu)
  B->>N: go to Menu
```

#### 5.1.6 Menu: onClick_EditYourAccount

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Menu
  participant N as Navigation
  U->>B: onClick (HTML element) → onClick_EditYourAccount
  B->>N: go to Profile
```

#### 5.1.7 Menu: onClick_MenuOption (logOut)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Menu
  participant S as Server (TST calls)
  participant N as Navigation
  U->>B: onClick_MenuOption of List → onClick_MenuOption (logOut)
  Note over B: confirm dialog
  Note over B: via UBTConnect.connect_Logout
  B->>S: AppManager_Logout()
  S-->>B: outputs not in the contract
  B->>S: AppManager_SynchAppContext(EspaceName)
  S-->>B: AppManager_ClientConfig, FirebaseRealTimeDB_Token, PermissionList, …
  B->>N: go to HomeFeed
```

#### 5.1.8 Menu: onClick_MenuOption (contactUs)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Menu
  participant N as Navigation
  U->>B: onClick_MenuOption of List → onClick_MenuOption (contactUs)
  B->>N: go to ContactUsMenu
```

#### 5.1.9 Menu: onClick_MenuOption (termsAndPolicies)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Menu
  participant N as Navigation
  U->>B: onClick_MenuOption of List → onClick_MenuOption (termsAndPolicies)
  B->>N: go to TermsAndPoliciesMenu
```

#### 5.1.10 Menu: onClick_MenuOption (pINAndBiometrics)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Menu
  participant N as Navigation
  U->>B: onClick_MenuOption of List → onClick_MenuOption (pINAndBiometrics)
  B->>N: go to PINBiometricsMenu
```

#### 5.1.11 Menu: onClick_MenuOption (subscriptionAndPayments)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Menu
  participant X as External link
  U->>B: onClick_MenuOption of List → onClick_MenuOption (subscriptionAndPayments)
  B->>X: OpenInApp_OpenExternalLink
```

#### 5.1.12 Menu: onClick_MenuOption (requestPhotoUpdate)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Menu
  participant S as Server (TST calls)
  U->>B: onClick_MenuOption of List → onClick_MenuOption (requestPhotoUpdate)
  Note over B: confirm dialog
  B->>S: RequestPhotoUpdate()
  S-->>B: Out_IsSuccess
  Note over B: message "Your update photo request has been submitted."
```

#### 5.1.13 Menu: onClick_MenuOption (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Menu
  U->>B: onClick_MenuOption of List → onClick_MenuOption (other)
  Note over B: message "Go to " + id
```

#### 5.1.14 Layout_DetailPage: onClick_BackNavigation

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Layout_DetailPage
  participant N as Navigation
  U->>B: click of Icon → onClick_BackNavigation
  B->>N: go to previous screen
```

#### 5.1.15 CacheControl_UserInfo: cacheControlOnNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CacheControl_UserInfo
  participant S as Server (TST calls)
  U->>B: onNonCacheHit of CacheControl → cacheControlOnNonCacheHit
  B->>S: GetCacheInfo(CacheKey, CacheTypeId)
  S-->>B: CacheControl_Response, TTL
```

### 5.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#521-detaillayout-onback) | [`pages/Menu/MenuPage.tsx:40`](../../app/src/pages/Menu/MenuPage.tsx#L40) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |
| [2](#522-menuuserheader-onedityouraccount) | [`pages/Menu/MenuPage.tsx:70`](../../app/src/pages/Menu/MenuPage.tsx#L70) | `<MenuUserHeader>` | `onEditYourAccount` | `onEditYourAccount` | – | goes to Profile |
| [3](#523-menulist-ononclickmenuoption-logout) | [`pages/Menu/MenuPage.tsx:72`](../../app/src/pages/Menu/MenuPage.tsx#L72) | `<MenuList>` | `onOnClickMenuOption` | `onMenuOption` | `LogOut` | goes to HomeFeed; asks for a confirmation |
| [4](#524-menulist-ononclickmenuoption-contactus) | [`pages/Menu/MenuPage.tsx:72`](../../app/src/pages/Menu/MenuPage.tsx#L72) | `<MenuList>` | `onOnClickMenuOption` | `onMenuOption` | `ContactUs` | goes to ContactUsMenu |
| [5](#525-menulist-ononclickmenuoption-termsandpolicies) | [`pages/Menu/MenuPage.tsx:72`](../../app/src/pages/Menu/MenuPage.tsx#L72) | `<MenuList>` | `onOnClickMenuOption` | `onMenuOption` | `TermsAndPolicies` | goes to TermsAndPoliciesMenu |
| [6](#526-menulist-ononclickmenuoption-pinandbiometrics) | [`pages/Menu/MenuPage.tsx:72`](../../app/src/pages/Menu/MenuPage.tsx#L72) | `<MenuList>` | `onOnClickMenuOption` | `onMenuOption` | `PINAndBiometrics` | goes to PINBiometricsMenu |
| [7](#527-menulist-ononclickmenuoption-subscriptionandpayments) | [`pages/Menu/MenuPage.tsx:72`](../../app/src/pages/Menu/MenuPage.tsx#L72) | `<MenuList>` | `onOnClickMenuOption` | `onMenuOption` | `SubscriptionAndPayments` | opens an external link |
| [8](#528-menulist-ononclickmenuoption-requestphotoupdate) | [`pages/Menu/MenuPage.tsx:72`](../../app/src/pages/Menu/MenuPage.tsx#L72) | `<MenuList>` | `onOnClickMenuOption` | `onMenuOption` | `RequestPhotoUpdate` | calls ActionRequestPhotoUpdate; shows a message; asks for a confirmation |
| [9](#529-menulist-ononclickmenuoption-other) | [`pages/Menu/MenuPage.tsx:72`](../../app/src/pages/Menu/MenuPage.tsx#L72) | `<MenuList>` | `onOnClickMenuOption` | `onMenuOption` | `other` | shows a message |
| [10](#5210-cachecontrol-onnoncachehit) | [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:52`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L52) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| [11](#5211-preventbacknavigation-onbacknavigationprevented) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| [12](#5212-backnavigationhandler-onbacknavigation) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| [13](#5213-oslink-onclick-home) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Home` | goes to HomeFeed |
| [14](#5214-oslink-onclick-directory) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| [15](#5215-oslink-onclick-updates) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Updates` | goes to Updates_SingleList |
| [16](#5216-oslink-onclick-bookmarks) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Bookmarks` | goes to Bookmarks |
| [17](#5217-oslink-onclick-menu) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Menu` | goes to Menu |
| [18](#5218-oslink-onclick-other) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| [19](#5219-bottombariconbadge-ononclick-home) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Home` | goes to HomeFeed |
| [20](#5220-bottombariconbadge-ononclick-directory) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| [21](#5221-bottombariconbadge-ononclick-updates) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Updates` | goes to Updates_SingleList |
| [22](#5222-bottombariconbadge-ononclick-bookmarks) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Bookmarks` | goes to Bookmarks |
| [23](#5223-bottombariconbadge-ononclick-menu) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Menu` | goes to Menu |
| [24](#5224-bottombariconbadge-ononclick-other) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `other` | calls the prop onBottomBarClicked() |

#### 5.2.1 DetailLayout: onBack

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as DetailLayout · MenuPage.tsx
  participant N as Navigation
  U->>H: onBack → navigateBack
  H->>N: go to previous screen
```

#### 5.2.2 MenuUserHeader: onEditYourAccount

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuUserHeader · MenuPage.tsx
  participant N as Navigation
  U->>H: onEditYourAccount → onEditYourAccount
  H->>N: go to Profile
```

#### 5.2.3 MenuList: onOnClickMenuOption (LogOut)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuList · MenuPage.tsx
  participant N as Navigation
  U->>H: onOnClickMenuOption → onMenuOption (LogOut)
  Note over H: via menuOption()
  Note over H: via logout()
  Note over H: confirm dialog PopUp_Logout
  H->>N: go to HomeFeed
```

#### 5.2.4 MenuList: onOnClickMenuOption (ContactUs)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuList · MenuPage.tsx
  participant N as Navigation
  U->>H: onOnClickMenuOption → onMenuOption (ContactUs)
  Note over H: via menuOption()
  H->>N: go to ContactUsMenu
```

#### 5.2.5 MenuList: onOnClickMenuOption (TermsAndPolicies)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuList · MenuPage.tsx
  participant N as Navigation
  U->>H: onOnClickMenuOption → onMenuOption (TermsAndPolicies)
  Note over H: via menuOption()
  H->>N: go to TermsAndPoliciesMenu
```

#### 5.2.6 MenuList: onOnClickMenuOption (PINAndBiometrics)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuList · MenuPage.tsx
  participant N as Navigation
  U->>H: onOnClickMenuOption → onMenuOption (PINAndBiometrics)
  Note over H: via menuOption()
  H->>N: go to PINBiometricsMenu
```

#### 5.2.7 MenuList: onOnClickMenuOption (SubscriptionAndPayments)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuList · MenuPage.tsx
  participant X as External link
  U->>H: onOnClickMenuOption → onMenuOption (SubscriptionAndPayments)
  Note over H: via menuOption()
  H->>X: openInApp_OpenExternalLink
```

#### 5.2.8 MenuList: onOnClickMenuOption (RequestPhotoUpdate)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuList · MenuPage.tsx
  participant A as Server (React api)
  U->>H: onOnClickMenuOption → onMenuOption (RequestPhotoUpdate)
  Note over H: via menuOption()
  Note over H: confirm dialog Popup_SubmitPhotoRequest
  Note over H: via requestPhotoUpdate()
  H->>A: ActionRequestPhotoUpdate()
  A-->>H: Out_IsSuccess
  Note over H: message 'Your update photo request has been submitted.'
```

#### 5.2.9 MenuList: onOnClickMenuOption (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as MenuList · MenuPage.tsx
  U->>H: onOnClickMenuOption → onMenuOption (other)
  Note over H: via menuOption()
  Note over H: message `Go to ${id}`
```

#### 5.2.10 CacheControl: onNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CacheControl · UserInfoCacheControl.tsx
  participant A as Server (React api)
  U->>H: onNonCacheHit → onNonCacheHit
  H->>A: DataActionGetCacheInfo(CacheKey, CacheTypeId)
  A-->>H: CacheControl_Response, TTL
```

#### 5.2.11 PreventBackNavigation: onBackNavigationPrevented

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PreventBackNavigation · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigationPrevented → redirectHome
  H->>N: go to HomeFeed
```

#### 5.2.12 BackNavigationHandler: onBackNavigation

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BackNavigationHandler · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigation → maybeRedirectHome
  Note over H: via actionRedirectHome()
  H->>N: go to HomeFeed
```

#### 5.2.13 OSLink: onClick (Home)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Home)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to HomeFeed
```

#### 5.2.14 OSLink: onClick (Directory)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Directory)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to CountryList
  H->>N: go to Locality_Details
```

#### 5.2.15 OSLink: onClick (Updates)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Updates)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Updates_SingleList
```

#### 5.2.16 OSLink: onClick (Bookmarks)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Bookmarks)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Bookmarks
```

#### 5.2.17 OSLink: onClick (Menu)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Menu)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Menu
```

#### 5.2.18 OSLink: onClick (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  U->>H: onClick → click (other)
  Note over H: via event_BottomBar_Clicked()
  Note over H: calls the prop onBottomBarClicked()
```

#### 5.2.19 BottomBarIconBadge: onOnClick (Home)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Home)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to HomeFeed
```

#### 5.2.20 BottomBarIconBadge: onOnClick (Directory)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Directory)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to CountryList
  H->>N: go to Locality_Details
```

#### 5.2.21 BottomBarIconBadge: onOnClick (Updates)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Updates)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Updates_SingleList
```

#### 5.2.22 BottomBarIconBadge: onOnClick (Bookmarks)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Bookmarks)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Bookmarks
```

#### 5.2.23 BottomBarIconBadge: onOnClick (Menu)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Menu)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Menu
```

#### 5.2.24 BottomBarIconBadge: onOnClick (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  U->>H: onOnClick → click (other)
  Note over H: via event_BottomBar_Clicked()
  Note over H: calls the prop onBottomBarClicked()
```

## 6. Server calls

All columns come from the code, without interpretation:

- **Direct caller (TST):** the block or module of the action that calls the server (the step before the server call in the chain).
- **Chain (TST):** the chains of client actions in the TST compiled code, from their start to the call.
  A long chain shows its first 2 steps, …, and its last 2 steps.
- **Seen on TST:** `yes` when TST made the call in the capture.
- **React action:** the React function with the `callAction` of the same call (`file:line`), and the code that loads it: `shell` (from `main.tsx`), `page` (from the screen), or both.
- **Used by (React references):** the functions and components that reference the React action, up to the nearest component. A reference is not always a call.
- **Status:** `implemented` when the contract path of the React call gives the same TST URL. It does not prove the same behaviour.

| # | Call (TST) | Kind | Direct caller (TST) | Chain (TST) | Seen on TST | React action | Used by (React references) | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | data action | `CacheControl_UserInfo` | CacheControl.OnInitialize → CacheControl.onInitialize → event onNonCacheHit of CacheControl → CacheControl_UserInfo.cacheControlOnNonCacheHit → CacheControl_UserInfo.DataActionGetCacheInfo<br>CacheControl_UserInfo fetch at start → CacheControl_UserInfo.DataActionGetCacheInfo | yes | `UserInfoCacheControl()` [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:37`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L37) (page) | `Menu → UserInfoCache → UserInfoCacheControl`<br>[`pages/Menu/MenuPage.tsx`](../../app/src/pages/Menu/MenuPage.tsx) | implemented |
| 2 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |
| 3 | `UBTConnect_Utils/ActionGet_RuntimeVersion` | server action | `UBTConnect_Utils` | Version.OnReady → Version.screenEvent_OnReady → UBTConnect_Utils.get_ConnectVersionDetails → server Get_RuntimeVersion | yes | `get_ConnectVersionDetails()` [`lib/ubtConnectUtils/actions.ts:36`](../../app/src/lib/ubtConnectUtils/actions.ts#L36) (page) | `AppVersion → loadVersionDetails → get_ConnectVersionDetails`<br>[`components/version/AppVersion/AppVersion.tsx`](../../app/src/components/version/AppVersion/AppVersion.tsx) | implemented |

## 7. Missing in React

None.

## 8. Questions

1. React calls `/api/UBTConnect_Utils/ActionGetUserInformation` from `fetchUserInformation()` [`api/member/userInformation.ts:6`](../../app/src/api/member/userInformation.ts#L6) (shell + page). TST Menu has no chain to this call. Does the call belong to this route?
2. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST Menu has no chain to this call. Does the call belong to this route?
3. React calls `/api/UBTConnect_Utils/ActionGetSignedImagesInBulk` from `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:124`](../../app/src/lib/ubtConnectUtils/actions.ts#L124) (page). TST Menu has no chain to this call. Does the call belong to this route?

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/Menu/analysis/`:
   - the rendered files;
   - each server call with its chain of client actions, and the calls that TST made in the capture;
   - the effects of each user action.
2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in `CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell when its file is in the code that `main.tsx` loads.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
