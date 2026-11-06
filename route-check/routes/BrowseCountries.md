# BrowseCountries: OutSystems (TST) and React

The route `/UBTConnect/BrowseCountries`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/BrowseCountries/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 15 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `UBTConnect`, `js`, `js`, `AvatarImage`, `UBTConnectLibrary`, `js`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/BrowseCountries` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Directory_Locality.BrowseCountries` | TST compiled code |
| UI flow | `Directory_Locality` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/BrowseCountries/BrowseCountriesPage.tsx`](../../app/src/pages/BrowseCountries/BrowseCountriesPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/BrowseCountries/parity`](../../migration/screens/BrowseCountries/parity) | `route.py parity` |
| Code read | OutSystems: 2 files of the UI flow, 11 shared blocks, 28 app shell files. React: 145 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 2: React makes 2, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 2 |
| Screen and blocks of the UI flow with a React port | 2 of 2 |
| Navigation targets found in React | 7 of 7 |
| Shared blocks and components on the route | OutSystems 11, React 2 with user actions: see the last section |
| App shell on this route | 8 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

None.

## 5. Server calls

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
| 1 | `UBTConnect/Directory_Locality/BrowseCountries/DataActionGetCountriesStatistics` | data action | `BrowseCountries` | BrowseCountries.OnReady → BrowseCountries.screenEvent_OnReady → BrowseCountries.action_RefreshData → BrowseCountries.DataActionGetCountriesStatistics<br>BrowseCountries fetch at start → BrowseCountries.DataActionGetCountriesStatistics | yes | `fetchBrowseCountriesStatistics()` [`api/country/repository.ts:30`](../../app/src/api/country/repository.ts#L30) (page) | `BrowseCountries → useBrowseCountries → fetchBrowseCountriesStatistics`<br>[`pages/BrowseCountries/BrowseCountriesPage.tsx`](../../app/src/pages/BrowseCountries/BrowseCountriesPage.tsx) | implemented |
| 2 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#611-browsecountries-handler_statisticslist_clicked) | `BrowseCountries` | `event_Clicked of StatisticsList` | `handler_StatisticsList_Clicked` | – | goes to BrowseDirectory; asks for a confirmation |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.1 BrowseCountries: handler_StatisticsList_Clicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BrowseCountries
  participant N as Navigation
  U->>B: event_Clicked of StatisticsList → handler_StatisticsList_Clicked
  B->>N: go to BrowseDirectory
  Note over B: via UBTConnect_Utils.app_Subscription_ShowUpgradePopUp
  Note over B: confirm dialog
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/BrowseCountries/BrowseCountriesPage.tsx:23`](../../app/src/pages/BrowseCountries/BrowseCountriesPage.tsx#L23) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |
| [2](#622-statisticslist-oneventclicked) | [`pages/BrowseCountries/BrowseCountriesPage.tsx:30`](../../app/src/pages/BrowseCountries/BrowseCountriesPage.tsx#L30) | `<StatisticsList>` | `onEventClicked` | `onStatisticsListClicked` | – | goes to BrowseDirectory; asks for a confirmation |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.2.2 StatisticsList: onEventClicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as StatisticsList · BrowseCountriesPage.tsx
  participant N as Navigation
  U->>H: onEventClicked → onStatisticsListClicked
  Note over H: via statisticsListClicked()
  H->>N: go to BrowseDirectory
  Note over H: via showUpgradePopUp()
  Note over H: confirm dialog dialogId
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/sources/raw/` (the route's `analysis/manifest.json` names them); the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

Screen inputs: none. `setInputs` of `BrowseCountries` reads no input.

| Block | Target | Parameters | Place |
|---|---|---|---|
| `BrowseCountries` | `BrowseDirectory` | `CountryCode` = `event_Id` | [`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:415`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L415) |

### 7.2 React

Declared inputs of the route: none (`app/src/app/routes.generated.ts`).

Parameters read (`useSearchParams`, `useParams`): none.

| File | Target | Parameters | Place |
|---|---|---|---|
| `useBrowseCountries.ts` | `BrowseDirectory` | `CountryCode` = `eventId` | [`pages/BrowseCountries/hooks/useBrowseCountries.ts:62`](../../app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts#L62) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `BrowseCountries` | OnReady ([`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:566`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L566)) | `screenEvent_OnReady` | 1. JavaScript: IsViewRestoredFromCache ([`L345`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L345))<br>2. Check if IsViewRestoredFromCache IsRestoredFromCache ([`L352`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L352))<br>3. If (isViewRestoredFromCache.isRestoredFromCache && getCountriesStatistics.isDataFetched) ([`L354`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L354))<br>4. Else ([`L356`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L356))<br>5. Execute Action: Action_RefreshData ([`L358`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L358)) |
| `StatisticsList` | OnReady ([`UBTConnect.Directory_Locality.StatisticsList.mvc.js:768`](../../migration/sources/raw/UBTConnect.Directory_Locality.StatisticsList.mvc.js#L768)) | `screenEvent_OnReady` | 1. Execute Action: Action_DefineList ([`L599`](../../migration/sources/raw/UBTConnect.Directory_Locality.StatisticsList.mvc.js#L599))<br>2. Execute Action: JSUtils_Element_Operations_GetElementById ([`L602`](../../migration/sources/raw/UBTConnect.Directory_Locality.StatisticsList.mvc.js#L602))<br>3. Execute Action: ReactiveInstance_ForceUpdate ([`L606`](../../migration/sources/raw/UBTConnect.Directory_Locality.StatisticsList.mvc.js#L606)) |
| `StatisticsList` | OnParametersChanged ([`UBTConnect.Directory_Locality.StatisticsList.mvc.js:788`](../../migration/sources/raw/UBTConnect.Directory_Locality.StatisticsList.mvc.js#L788)) | `onParametersChanged` | 1. Execute Action: Action_DefineList ([`L631`](../../migration/sources/raw/UBTConnect.Directory_Locality.StatisticsList.mvc.js#L631))<br>2. Trigger Event: OnParametersChangedEv ([`L634`](../../migration/sources/raw/UBTConnect.Directory_Locality.StatisticsList.mvc.js#L634)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 BrowseCountries: OnReady

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as BrowseCountries
  R->>B: OnReady → screenEvent_OnReady
  B->>B: JavaScript IsViewRestoredFromCache
  Note over B: Check if IsViewRestoredFromCache IsRestoredFromCache
  alt (isViewRestoredFromCache.isRestoredFromCache && getCountriesStatistics.isDataFet…
    Note over B: no step
  else other
    B->>B: action Action_RefreshData
  end
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `BrowseCountries` | `GetCountriesStatistics` | on demand (`-1`) | `view` ([`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:180`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L180)), `StatisticsList.In_IsLoading` ([`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:189`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L189)), `text` ([`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:271`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L271)), `action screenEvent_OnReady` ([`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:354`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L354)), `action action_RefreshData` ([`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:475`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L475)), `action onAfterFetch_GetCountriesStatistics` ([`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:507`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L507)) | [`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:288`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L288) |

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

None.

Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what reads the result in the same file.

None.

## 9. Client state

Client variables and browser storage that the route reads or writes. Other screens can read this state.

### 9.1 OutSystems (TST)

None.

### 9.2 React

None.

## 10. Access

Who can open the route, and the role checks in the screen and block code.

| Side | Rule | Place |
|---|---|---|
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Directory_Locality.BrowseCountries.mvc.js:590`](../../migration/sources/raw/UBTConnect.Directory_Locality.BrowseCountries.mvc.js#L590) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Directory_Locality` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../app/src/components/layout/DetailLayout/DetailLayout.tsx) | 1 |
| `Input` | `UBTConnectLibrary` | [`components/ui/Input/Input.tsx`](../../app/src/components/ui/Input/Input.tsx) | 0 |
| `InputWithIcon` | `OutSystemsUI_2_23` | [`components/ui/InputWithIcon/InputWithIcon.tsx`](../../app/src/components/ui/InputWithIcon/InputWithIcon.tsx) | 0 |
| `Statistics_ListItem` | `UBTConnectLibrary` | [`components/directory/StatisticsListItem/StatisticsListItem.tsx`](../../app/src/components/directory/StatisticsListItem/StatisticsListItem.tsx) | 0 |
| `AvatarImage` | `UBTConnectLibrary` | [`components/ui/AvatarImage/AvatarImage.tsx`](../../app/src/components/ui/AvatarImage/AvatarImage.tsx) | 0 |
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../app/src/components/ui/Badge/Badge.tsx) | 0 |

<details><summary>User actions of the shared blocks (6)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 2 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 3 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 4 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |
| 6 | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |

<details><summary>User actions of the shared components (14)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Home` | goes to HomeFeed |
| 4 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 5 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Updates` | goes to Updates_SingleList |
| 6 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 7 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Menu` | goes to Menu |
| 8 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 9 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Home` | goes to HomeFeed |
| 10 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 11 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Updates` | goes to Updates_SingleList |
| 12 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 13 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Menu` | goes to Menu |
| 14 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `other` | calls the prop onBottomBarClicked() |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
