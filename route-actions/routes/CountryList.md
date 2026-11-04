# CountryList: server calls and user actions in OutSystems and React

This file compares the route `/UBTConnect/CountryList` in OutSystems (TST) with the React app.
The tool `route-actions/tools/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.
- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/CountryList` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Directory_Locality.CountryList` | TST compiled code |
| UI flow | `Directory_Locality` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/CountryList/CountryListPage.tsx`](../../app/src/pages/CountryList/CountryListPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 26 screen and block files of the route, 28 app shell files. React: 164 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 5: React makes 5, **0 missing** |
| User actions of the route | OutSystems: 12 diagrams. React: 21 diagrams |
| React calls of the screen that TST does not make | 3 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 26 of 26 |
| Navigation targets found in React | 10 of 10 |
| App shell on this route | 7 calls; event bindings: OutSystems 10, React 7: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `real`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/CountryList/parity/default.expected.png" width="200" alt="default expected"> | <img src="../../migration/screens/CountryList/parity/default.build.png" width="200" alt="default build"> | <img src="../../migration/screens/CountryList/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/CountryList/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../../migration/screens/CountryList/parity/loading.build.png" width="200" alt="loading build"> | <img src="../../migration/screens/CountryList/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/CountryList/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../../migration/screens/CountryList/parity/offline.build.png" width="200" alt="offline build"> | <img src="../../migration/screens/CountryList/parity/offline.diff.png" width="200" alt="offline diff"> |

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
      o1["CountryList"]
      o2["FeedBlock_CommunityPopulation"]
      o3["UBTConnect"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e4["DataActionGetCommunityStatistics"]
    e5["DataActionFetchCount"]
    e6["DataActionGetCountriesStatistics"]
    e7["DataActionGetCacheInfo"]
    e8["ServiceAPIGet_UI_UpdateItems_UnreadCount_All"]
  end
  subgraph RE["React actions"]
    subgraph RE_page["Screen"]
      r9["UserInfoCacheControl()"]
      r10["fetchCommunityPopulation()"]
      r11["fetchCountryListCommunityStatistics()"]
      r12["fetchCountryListStatistics()"]
      r13["fetchUnreadUpdateItemsCount()"]
    end
  end
  subgraph RC["React components"]
    c14["BottomBar"]
    c15["CountryList"]
  end
  r9 --- c15
  r10 --- c15
  r11 --- c15
  r12 --- c15
  r13 --- c14
  o1 --> e4
  o1 --> e6
  o2 --> e5
  o0 --> e7
  o3 --> e8
  e4 --- r11
  e5 --- r10
  e6 --- r12
  e7 --- r9
  e8 --- r13
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e4,e5,e6,e7,e8 ok
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
| [6](#516-app_notificationicon-iconclick) | `App_NotificationIcon` | `onClick of IconBadge` | `iconClick` | – | goes to Notifications, MessageList |
| [7](#517-countrylist-staticinputclick_input) | `CountryList` | `click_Input of StaticInput` | `staticInputClick_Input` | – | goes to Search |
| [8](#518-countrylist-onclick_mylocality) | `CountryList` | `clicked of CustomContainer` | `onClick_MyLocality` | – | goes to Locality_Details |
| [9](#519-countrylist-onclick_mycountry) | `CountryList` | `clicked of CustomContainer` | `onClick_MyCountry` | – | goes to CountryDetails |
| [10](#5110-countrylist-handler_statisticslist_clicked) | `CountryList` | `onClick (HTML element)` | `handler_StatisticsList_Clicked` | – | goes to CountryDetails; asks for a confirmation |
| [11](#5111-feedblock_communitypopulation-onclick_block) | `FeedBlock_CommunityPopulation` | `clicked of CustomContainer` | `onClick_Block` | – | goes to Updates_SingleList |
| [12](#5112-cachecontrol_userinfo-cachecontrolonnoncachehit) | `CacheControl_UserInfo` | `onNonCacheHit of CacheControl` | `cacheControlOnNonCacheHit` | – | calls GetCacheInfo |

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

#### 5.1.6 App_NotificationIcon: iconClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as App_NotificationIcon
  participant N as Navigation
  U->>B: onClick of IconBadge → iconClick
  B->>N: go to Notifications
  B->>N: go to MessageList
```

#### 5.1.7 CountryList: staticInputClick_Input

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CountryList
  participant N as Navigation
  U->>B: click_Input of StaticInput → staticInputClick_Input
  B->>N: go to Search
```

#### 5.1.8 CountryList: onClick_MyLocality

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CountryList
  participant N as Navigation
  U->>B: clicked of CustomContainer → onClick_MyLocality
  B->>N: go to Locality_Details
```

#### 5.1.9 CountryList: onClick_MyCountry

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CountryList
  participant N as Navigation
  U->>B: clicked of CustomContainer → onClick_MyCountry
  B->>N: go to CountryDetails
```

#### 5.1.10 CountryList: handler_StatisticsList_Clicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CountryList
  participant N as Navigation
  U->>B: onClick (HTML element) → handler_StatisticsList_Clicked
  B->>N: go to CountryDetails
  Note over B: via UBTConnect_Utils.app_Subscription_ShowUpgradePopUp
  Note over B: confirm dialog
```

#### 5.1.11 FeedBlock_CommunityPopulation: onClick_Block

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as FeedBlock_CommunityPopulation
  participant N as Navigation
  U->>B: clicked of CustomContainer → onClick_Block
  B->>N: go to Updates_SingleList
```

#### 5.1.12 CacheControl_UserInfo: cacheControlOnNonCacheHit

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
| [1](#521-staticinput-onclickinput) | [`pages/CountryList/CountryListPage.tsx:45`](../../app/src/pages/CountryList/CountryListPage.tsx#L45) | `<StaticInput>` | `onClickInput` | `onSearchClicked` | – | goes to Search |
| [2](#522-countrylistcontent-onmylocalityclicked) | [`pages/CountryList/CountryListPage.tsx:55`](../../app/src/pages/CountryList/CountryListPage.tsx#L55) | `<CountryListContent>` | `onMyLocalityClicked` | `onMyLocalityClicked` | – | goes to Locality_Details |
| [3](#523-countrylistcontent-onmycountryclicked) | [`pages/CountryList/CountryListPage.tsx:56`](../../app/src/pages/CountryList/CountryListPage.tsx#L56) | `<CountryListContent>` | `onMyCountryClicked` | `onMyCountryClicked` | – | goes to CountryDetails |
| [4](#524-countrylistcontent-oncommunitypopulationclicked) | [`pages/CountryList/CountryListPage.tsx:57`](../../app/src/pages/CountryList/CountryListPage.tsx#L57) | `<CountryListContent>` | `onCommunityPopulationClicked` | `onCommunityPopulationClicked` | – | goes to Updates_SingleList |
| [5](#525-countrylistcontent-oncountryclicked) | [`pages/CountryList/CountryListPage.tsx:59`](../../app/src/pages/CountryList/CountryListPage.tsx#L59) | `<CountryListContent>` | `onCountryClicked` | `onCountryClicked` | – | goes to CountryDetails; asks for a confirmation |
| [6](#526-notificationicon-oniconclick) | [`pages/CountryList/CountryListPage.tsx:43`](../../app/src/pages/CountryList/CountryListPage.tsx#L43) | `<NotificationIcon>` | `onIconClick` | `notificationIcon.onIconClick` | – | goes to Notifications, MessageList |
| [7](#527-cachecontrol-onnoncachehit) | [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:52`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L52) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| [8](#528-preventbacknavigation-onbacknavigationprevented) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| [9](#529-backnavigationhandler-onbacknavigation) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| [10](#5210-oslink-onclick-home) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Home` | goes to HomeFeed |
| [11](#5211-oslink-onclick-directory) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| [12](#5212-oslink-onclick-updates) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Updates` | goes to Updates_SingleList |
| [13](#5213-oslink-onclick-bookmarks) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Bookmarks` | goes to Bookmarks |
| [14](#5214-oslink-onclick-menu) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Menu` | goes to Menu |
| [15](#5215-oslink-onclick-other) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| [16](#5216-bottombariconbadge-ononclick-home) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Home` | goes to HomeFeed |
| [17](#5217-bottombariconbadge-ononclick-directory) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| [18](#5218-bottombariconbadge-ononclick-updates) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Updates` | goes to Updates_SingleList |
| [19](#5219-bottombariconbadge-ononclick-bookmarks) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Bookmarks` | goes to Bookmarks |
| [20](#5220-bottombariconbadge-ononclick-menu) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Menu` | goes to Menu |
| [21](#5221-bottombariconbadge-ononclick-other) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `other` | calls the prop onBottomBarClicked() |

#### 5.2.1 StaticInput: onClickInput

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as StaticInput · CountryListPage.tsx
  participant N as Navigation
  U->>H: onClickInput → onSearchClicked
  H->>N: go to Search
```

#### 5.2.2 CountryListContent: onMyLocalityClicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CountryListContent · CountryListPage.tsx
  participant N as Navigation
  U->>H: onMyLocalityClicked → onMyLocalityClicked
  H->>N: go to Locality_Details
```

#### 5.2.3 CountryListContent: onMyCountryClicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CountryListContent · CountryListPage.tsx
  participant N as Navigation
  U->>H: onMyCountryClicked → onMyCountryClicked
  H->>N: go to CountryDetails
```

#### 5.2.4 CountryListContent: onCommunityPopulationClicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CountryListContent · CountryListPage.tsx
  participant N as Navigation
  U->>H: onCommunityPopulationClicked → onCommunityPopulationClicked
  H->>N: go to Updates_SingleList
```

#### 5.2.5 CountryListContent: onCountryClicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CountryListContent · CountryListPage.tsx
  participant N as Navigation
  U->>H: onCountryClicked → onCountryClicked
  Note over H: via statisticsClicked()
  H->>N: go to CountryDetails
  Note over H: via showUpgradePopUp()
  Note over H: confirm dialog dialogId
```

#### 5.2.6 NotificationIcon: onIconClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as NotificationIcon · CountryListPage.tsx
  participant N as Navigation
  U->>H: onIconClick → notificationIcon.onIconClick
  H->>N: go to Notifications
  H->>N: go to MessageList
```

#### 5.2.7 CacheControl: onNonCacheHit

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

#### 5.2.8 PreventBackNavigation: onBackNavigationPrevented

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PreventBackNavigation · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigationPrevented → redirectHome
  H->>N: go to HomeFeed
```

#### 5.2.9 BackNavigationHandler: onBackNavigation

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

#### 5.2.10 OSLink: onClick (Home)

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

#### 5.2.11 OSLink: onClick (Directory)

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

#### 5.2.12 OSLink: onClick (Updates)

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

#### 5.2.13 OSLink: onClick (Bookmarks)

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

#### 5.2.14 OSLink: onClick (Menu)

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

#### 5.2.15 OSLink: onClick (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  U->>H: onClick → click (other)
  Note over H: via event_BottomBar_Clicked()
  Note over H: calls the prop onBottomBarClicked()
```

#### 5.2.16 BottomBarIconBadge: onOnClick (Home)

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

#### 5.2.17 BottomBarIconBadge: onOnClick (Directory)

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

#### 5.2.18 BottomBarIconBadge: onOnClick (Updates)

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

#### 5.2.19 BottomBarIconBadge: onOnClick (Bookmarks)

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

#### 5.2.20 BottomBarIconBadge: onOnClick (Menu)

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

#### 5.2.21 BottomBarIconBadge: onOnClick (other)

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
| 1 | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | data action | `CacheControl_UserInfo` | CacheControl.OnInitialize → CacheControl.onInitialize → event onNonCacheHit of CacheControl → CacheControl_UserInfo.cacheControlOnNonCacheHit → CacheControl_UserInfo.DataActionGetCacheInfo<br>CacheControl_UserInfo fetch at start → CacheControl_UserInfo.DataActionGetCacheInfo | yes | `UserInfoCacheControl()` [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:37`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L37) (page) | `CountryList → UserInfoCache → UserInfoCacheControl`<br>[`pages/CountryList/CountryListPage.tsx`](../../app/src/pages/CountryList/CountryListPage.tsx) | implemented |
| 2 | `UBTConnect/Directory_Locality/CountryList/DataActionGetCommunityStatistics` | data action | `CountryList` | CountryList.action_RefreshData_CommunityStatistics → CountryList.DataActionGetCommunityStatistics<br>CountryList fetch at start → CountryList.DataActionGetCommunityStatistics | yes | `fetchCountryListCommunityStatistics()` [`api/country/repository.ts:43`](../../app/src/api/country/repository.ts#L43) (page) | `CountryList → useCountryList → fetchCountryListCommunityStatistics`<br>[`pages/CountryList/CountryListPage.tsx`](../../app/src/pages/CountryList/CountryListPage.tsx) | implemented |
| 3 | `UBTConnect/Directory_Locality/CountryList/DataActionGetCountriesStatistics` | data action | `CountryList` | CountryList.OnReady → CountryList.screenEvent_OnReady → CountryList.action_RefreshData_CountryStatistics → CountryList.DataActionGetCountriesStatistics<br>CountryList fetch at start → CountryList.DataActionGetCountriesStatistics | yes | `fetchCountryListStatistics()` [`api/country/repository.ts:36`](../../app/src/api/country/repository.ts#L36) (page) | `CountryList → useCountryList → fetchCountryListStatistics`<br>[`pages/CountryList/CountryListPage.tsx`](../../app/src/pages/CountryList/CountryListPage.tsx) | implemented |
| 4 | `UBTConnect/Home/FeedBlock_CommunityPopulation/DataActionFetchCount` | data action | `FeedBlock_CommunityPopulation` | FeedBlock_CommunityPopulation fetch at start → FeedBlock_CommunityPopulation.DataActionFetchCount | yes | `fetchCommunityPopulation()` [`api/member/repository.ts:25`](../../app/src/api/member/repository.ts#L25) (page) | `CountryList → useCommunityPopulationQuery → fetchCommunityPopulation`<br>[`pages/CountryList/CountryListPage.tsx`](../../app/src/pages/CountryList/CountryListPage.tsx) | implemented |
| 5 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 7. Missing in React

None.

## 8. Questions

1. React calls `/api/UBTConnect_Utils/ActionGetUserInformation` from `fetchUserInformation()` [`api/member/userInformation.ts:6`](../../app/src/api/member/userInformation.ts#L6) (shell + page). TST CountryList has no chain to this call. Does the call belong to this route?
2. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST CountryList has no chain to this call. Does the call belong to this route?
3. React calls `/api/UBTConnect_Utils/ActionGetSignedImagesInBulk` from `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:124`](../../app/src/lib/ubtConnectUtils/actions.ts#L124) (page). TST CountryList has no chain to this call. Does the call belong to this route?

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/CountryList/analysis/`:
   - the rendered files;
   - each server call with its chain of client actions, and the calls that TST made in the capture;
   - the effects of each user action.
2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in `CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell when its file is in the code that `main.tsx` loads.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
