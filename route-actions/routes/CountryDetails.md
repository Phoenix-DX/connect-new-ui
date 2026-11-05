# CountryDetails: OutSystems (TST) and React

The route `/UBTConnect/CountryDetails`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/CountryDetails/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 16 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `FilterSheet`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`, `CacheControl_UserInfo`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/CountryDetails` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Directory_Locality.CountryDetails` | TST compiled code |
| UI flow | `Directory_Locality` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/CountryDetails/CountryDetailsPage.tsx`](../../app/src/pages/CountryDetails/CountryDetailsPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/CountryDetails/parity`](../../migration/screens/CountryDetails/parity) | `route.py parity` |
| Code read | OutSystems: 4 files of the UI flow, 26 shared blocks, 28 app shell files. React: 180 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 4: React makes 4, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 1: see the last section |
| User actions of the route (own code) | OutSystems: 3. React: 4 |
| Screen and blocks of the UI flow with a React port | 4 of 4 |
| Navigation targets found in React | 6 of 6 |
| Shared blocks and components on the route | OutSystems 26, React 7 with user actions: see the last section |
| App shell on this route | 8 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

None.

React reaches 1 more call without a TST chain on this route only through shared containers, components or app code. The last section lists it, not this one.

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
| 1 | `UBTConnect_Utils/CacheControl/CacheControl_AllCountries/DataActionGetCacheInfo` | data action | `CacheControl_AllCountries` | CacheControl.OnInitialize → CacheControl.onInitialize → event onNonCacheHit of CacheControl → CacheControl_AllCountries.cacheControlOnNonCacheHit → CacheControl_AllCountries.DataActionGetCacheInfo<br>CacheControl_AllCountries fetch at start → CacheControl_AllCountries.DataActionGetCacheInfo | yes | `fetchAllCountries()` [`api/country/repository.ts:94`](../../app/src/api/country/repository.ts#L94) (page) | `FilterSheetContainer → AllCountriesCacheControl → fetchAllCountries`<br>[`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) | implemented |
| 2 | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | data action | `CacheControl_UserInfo` | CacheControl.OnInitialize → CacheControl.onInitialize → event onNonCacheHit of CacheControl → CacheControl_UserInfo.cacheControlOnNonCacheHit → CacheControl_UserInfo.DataActionGetCacheInfo<br>CacheControl_UserInfo fetch at start → CacheControl_UserInfo.DataActionGetCacheInfo | yes | `UserInfoCacheControl()` [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:37`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L37) (page) | `FilterSheetContainer → UserInfoCache → UserInfoCacheControl`<br>[`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) | implemented |
| 3 | `UBTConnect/Directory_Locality/CountryDetails/DataActionGetLocalityStatistics` | data action | `CountryDetails` | CountryDetails.OnReady → CountryDetails.screenEvent_OnReady → CountryDetails.action_RefreshData → CountryDetails.DataActionGetLocalityStatistics<br>onClick in Button → event event_OnClick of Button → … → CountryDetails.handler_FilterSheetApplyFilters → CountryDetails.DataActionGetLocalityStatistics<br>onClick in Button → event event_OnClick of Button → … → CountryDetails.handler_FilterSheetApplyFilters → CountryDetails.DataActionGetLocalityStatistics<br>(+1 more chains) | yes | `fetchCountryLocalityStatistics()` [`api/country/repository.ts:58`](../../app/src/api/country/repository.ts#L58) (page) | `CountryDetails → useCountryDetails → useCountryLocalityStatisticsQuery → fetchCountryLocalityStatistics`<br>[`pages/CountryDetails/CountryDetailsPage.tsx`](../../app/src/pages/CountryDetails/CountryDetailsPage.tsx) | implemented |
| 4 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `CountryDetails` | `onClick (HTML element)` | `handler_BrowseCountries` | – | asks for a confirmation |
| [2](#612-countrydetails-leafletmapsetcallbacks) | `CountryDetails` | `setCallbacks of LeafletMap` | `leafletMapSetCallbacks` | – | goes to Locality_Details; asks for a confirmation |
| [3](#613-countrydetails-handler_statisticslist_clicked) | `CountryDetails` | `onClick (HTML element)` | `handler_StatisticsList_Clicked` | – | goes to Locality_Details; asks for a confirmation |

<details><summary>2 diagrams (handlers with two or more effects)</summary>

#### 6.1.2 CountryDetails: leafletMapSetCallbacks

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CountryDetails
  participant N as Navigation
  U->>B: setCallbacks of LeafletMap → leafletMapSetCallbacks
  B->>N: go to Locality_Details
  Note over B: via UBTConnect_Utils.app_Subscription_ShowUpgradePopUp
  Note over B: confirm dialog
```

#### 6.1.3 CountryDetails: handler_StatisticsList_Clicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CountryDetails
  participant N as Navigation
  U->>B: onClick (HTML element) → handler_StatisticsList_Clicked
  B->>N: go to Locality_Details
  Note over B: via UBTConnect_Utils.app_Subscription_ShowUpgradePopUp
  Note over B: confirm dialog
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/CountryDetails/CountryDetailsPage.tsx:60`](../../app/src/pages/CountryDetails/CountryDetailsPage.tsx#L60) | `<CountryDetailsContent>` | `onSelectCountryClicked` | `onSelectCountryClicked` | – | asks for a confirmation |
| [2](#622-countrydetailscontent-onmapsetcallbacks) | [`pages/CountryDetails/CountryDetailsPage.tsx:62`](../../app/src/pages/CountryDetails/CountryDetailsPage.tsx#L62) | `<CountryDetailsContent>` | `onMapSetCallbacks` | `onMapSetCallbacks` | – | goes to Locality_Details; asks for a confirmation |
| [3](#623-countrydetailscontent-onlocalityclicked) | [`pages/CountryDetails/CountryDetailsPage.tsx:67`](../../app/src/pages/CountryDetails/CountryDetailsPage.tsx#L67) | `<CountryDetailsContent>` | `onLocalityClicked` | `onLocalityClicked` | – | goes to Locality_Details; asks for a confirmation |
| 4 | [`pages/CountryDetails/CountryDetailsPage.tsx:80`](../../app/src/pages/CountryDetails/CountryDetailsPage.tsx#L80) | `<FilterSheetContainer>` | `onApplyFilters` | `inline` | – | calls DataActionGetLocalityStatistics |

<details><summary>2 diagrams (handlers with two or more effects)</summary>

#### 6.2.2 CountryDetailsContent: onMapSetCallbacks

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CountryDetailsContent · CountryDetailsPage.tsx
  participant N as Navigation
  U->>H: onMapSetCallbacks → onMapSetCallbacks
  Note over H: via directory_BrowseByCountry_TooltipBuilder()
  Note over H: via linkOnClickAction()
  Note over H: via current()
  Note over H: via showUpgradePopUp()
  Note over H: confirm dialog dialogId
  H->>N: go to Locality_Details
```

#### 6.2.3 CountryDetailsContent: onLocalityClicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CountryDetailsContent · CountryDetailsPage.tsx
  participant N as Navigation
  U->>H: onLocalityClicked → onLocalityClicked
  Note over H: via current()
  Note over H: via showUpgradePopUp()
  Note over H: confirm dialog dialogId
  H->>N: go to Locality_Details
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `CountryCode` | Text | yes | [`UBTConnect.Directory_Locality.CountryDetails.mvc.js:113`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L113) |

| Block | Target | Parameters | Place |
|---|---|---|---|
| `CountryDetails` | `Locality_Details` | `LocalityId` = `textToLongInteger(event_Id)`<br>`PreloadedLocalityLabel` = `localityLabel` | [`UBTConnect.Directory_Locality.CountryDetails.mvc.js:2399`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L2399) |

### 7.2 React

Declared inputs of the route: `CountryCode: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/CountryDetails/CountryDetailsPage.tsx:23`](../../app/src/pages/CountryDetails/CountryDetailsPage.tsx#L23) |

| File | Target | Parameters | Place |
|---|---|---|---|
| `useCountryDetails.ts` | `Locality_Details` | `LocalityId` = `normalizeLongId(event_Id)`<br>`PreloadedLocalityLabel` = `localityLabel` | [`pages/CountryDetails/hooks/useCountryDetails.ts:148`](../../app/src/pages/CountryDetails/hooks/useCountryDetails.ts#L148) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `CountryDetails` | OnInitialize ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:2685`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L2685)) | `screenEvent_OnInitialize` | 1. OriginalCountryCode = CountryCode ([`L2557`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L2557)) |
| `CountryDetails` | OnReady ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:2703`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L2703)) | `screenEvent_OnReady` | 1. JavaScript: IsViewRestoredFromCache ([`L1602`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L1602))<br>2. Check if IsViewRestoredFromCache IsRestoredFromCache ([`L1609`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L1609))<br>3. If (isViewRestoredFromCache.isRestoredFromCache && getLocalityStatistics.isDataFetched) ([`L1611`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L1611))<br>4. Else ([`L1613`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L1613))<br>5. Execute Action: Action_RefreshData ([`L1615`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L1615)) |

<details><summary>Sequence diagrams of the screen event handlers (2)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 CountryDetails: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as CountryDetails
  R->>B: OnInitialize → screenEvent_OnInitialize
  Note over B: OriginalCountryCode = CountryCode
```

#### 8.1.2 CountryDetails: OnReady

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as CountryDetails
  R->>B: OnReady → screenEvent_OnReady
  B->>B: JavaScript IsViewRestoredFromCache
  Note over B: Check if IsViewRestoredFromCache IsRestoredFromCache
  alt (isViewRestoredFromCache.isRestoredFromCache && getLocalityStatistics.isDataFetc…
    Note over B: no step
  else other
    B->>B: action Action_RefreshData
  end
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `CountryDetails` | `GetLocalityStatistics` | on demand (`-1`) | `view` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:210`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L210)), `shown if (Icon)` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:422`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L422)), `text` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:742`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L742)), `SkeletonSection.In_IsLoading` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:914`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L914)), `shown if (CustomText)` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:978`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L978)), `action action_RefreshData` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:1540`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L1540)), `action screenEvent_OnReady` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:1611`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L1611)), `action action_DefineList` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:1738`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L1738)), `action onAfterFetch_GetLocalityStatistics` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:2082`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L2082)), `action handler_StatisticsList_Clicked` ([`UBTConnect.Directory_Locality.CountryDetails.mvc.js:2385`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L2385)) | [`UBTConnect.Directory_Locality.CountryDetails.mvc.js:1478`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L1478) |

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `useCountryDetails.ts` | `useEffect` (`useCountryDetails`) | `none (every render)` | no | none | [`pages/CountryDetails/hooks/useCountryDetails.ts:98`](../../app/src/pages/CountryDetails/hooks/useCountryDetails.ts#L98) |
| `useCountryDetails.ts` | `useEffect` (`useCountryDetails`) | `none (every render)` | no | none | [`pages/CountryDetails/hooks/useCountryDetails.ts:155`](../../app/src/pages/CountryDetails/hooks/useCountryDetails.ts#L155) |

Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what reads the result in the same file.

| File | Hook (function) | Calls | Read by | Place |
|---|---|---|---|---|
| `useCountryDetails.ts` | `useCountryLocalityStatisticsQuery` (`useCountryDetails`) | `/api/UBTConnect/CountryDetails/DataActionGetLocalityStatistics` | `var fetched` ([`L114`](../../app/src/pages/CountryDetails/hooks/useCountryDetails.ts#L114)), `var isLoaded` ([`L115`](../../app/src/pages/CountryDetails/hooks/useCountryDetails.ts#L115)), `var handler_FilterSheetApplyFilters` ([`L186`](../../app/src/pages/CountryDetails/hooks/useCountryDetails.ts#L186)) | [`pages/CountryDetails/hooks/useCountryDetails.ts:110`](../../app/src/pages/CountryDetails/hooks/useCountryDetails.ts#L110) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Directory_Locality.CountryDetails.mvc.js:2727`](../../migration/screens/CountryDetails/analysis/sources/raw/UBTConnect.Directory_Locality.CountryDetails.mvc.js#L2727) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Directory_Locality` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

| File | Kind | Function | Effects | Place |
|---|---|---|---|---|
| `useCountryDetails.ts` | flow handler | `action_InvalidateMapSize` | none | [`pages/CountryDetails/hooks/useCountryDetails.ts:170`](../../app/src/pages/CountryDetails/hooks/useCountryDetails.ts#L170) |

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../app/src/components/layout/DetailLayout/DetailLayout.tsx), [`containers/DetailLayout/DetailLayoutContainer.tsx`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx) | 1 |
| `SubLayout_Browse_Section` | `UBTConnect` | [`components/layout/BrowseSection/BrowseSection.tsx`](../../app/src/components/layout/BrowseSection/BrowseSection.tsx) | 0 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `LeafletMap` | `Leaflet` | [`components/directory/DirectoryMap/DirectoryMap.tsx`](../../app/src/components/directory/DirectoryMap/DirectoryMap.tsx) | 0 |
| `Input` | `UBTConnectLibrary` | [`components/ui/Input/Input.tsx`](../../app/src/components/ui/Input/Input.tsx) | 0 |
| `InputWithIcon` | `OutSystemsUI_2_23` | [`components/ui/InputWithIcon/InputWithIcon.tsx`](../../app/src/components/ui/InputWithIcon/InputWithIcon.tsx) | 0 |
| `Columns_Three` | `UBTConnectLibrary` | [`components/ui/ColumnsThree/ColumnsThree.tsx`](../../app/src/components/ui/ColumnsThree/ColumnsThree.tsx) | 0 |
| `Columns3` | `OutSystemsUI_2_23` | [`components/ui/Columns3/Columns3.tsx`](../../app/src/components/ui/Columns3/Columns3.tsx) | 0 |
| `UBT_LazyImage` | `UBTConnect_Utils` | [`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) | 0 |
| `LazyImage` | `UBTConnectLibrary` | [`components/ui/LazyImage/LazyImage.tsx`](../../app/src/components/ui/LazyImage/LazyImage.tsx) | 0 |
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../app/src/components/ui/Badge/Badge.tsx) | 0 |
| `FilterSheet` | `UBTConnect` | [`components/filter/FilterSheet/FilterSheet.tsx`](../../app/src/components/filter/FilterSheet/FilterSheet.tsx), [`components/filter/FilterSheet/filterSheetActions.ts`](../../app/src/components/filter/FilterSheet/filterSheetActions.ts), [`components/filter/FilterSheet/filterSheetState.ts`](../../app/src/components/filter/FilterSheet/filterSheetState.ts), [`components/filter/FilterSheet/useFilterSheet.ts`](../../app/src/components/filter/FilterSheet/useFilterSheet.ts), [`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) | 0 |
| `BottomSheet` | `UBTConnectLibrary` | [`components/ui/ConnectBottomSheet/ConnectBottomSheet.tsx`](../../app/src/components/ui/ConnectBottomSheet/ConnectBottomSheet.tsx) | 0 |
| `BottomSheet` | `OutSystemsUI_2_23` | [`components/ui/BottomSheet/BottomSheet.tsx`](../../app/src/components/ui/BottomSheet/BottomSheet.tsx) | 0 |
| `FilterSheet_OptionList_Item` | `UBTConnect` | [`components/filter/FilterOptionList/FilterOptionList.tsx`](../../app/src/components/filter/FilterOptionList/FilterOptionList.tsx) | 1 |
| `SelectionOption_List` | `UBTConnectLibrary` | [`components/ui/SelectionOptionList/SelectionOptionList.tsx`](../../app/src/components/ui/SelectionOptionList/SelectionOptionList.tsx) | 0 |
| `Button` | `UBTConnectLibrary` | [`components/ui/Button/Button.tsx`](../../app/src/components/ui/Button/Button.tsx) | 0 |
| `CacheControl_AllCountries` | `UBTConnect_Utils` | [`legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx`](../../app/src/legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx) | 0 |
| `CacheControl` | `UBTConnect_Utils` | [`legacy/os/cache/CacheControl/CacheControl.tsx`](../../app/src/legacy/os/cache/CacheControl/CacheControl.tsx) | 0 |
| `CacheControl_UserInfo_Wrapper` | `UBTConnect` | [`platform/session/UserInfoCache/UserInfoCache.tsx`](../../app/src/platform/session/UserInfoCache/UserInfoCache.tsx) | 0 |
| `CacheControl_UserInfo` | `UBTConnect_Utils` | [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx) | 0 |

<details><summary>User actions of the shared blocks (7)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 2 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 3 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 4 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |
| 6 | `FilterSheet_OptionList_Item` | `notEnabledOnClick of List` | `selectionOption_ListNotEnabledOnClick` | – | asks for a confirmation |
| 7 | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`containers/DetailLayout/DetailLayoutContainer.tsx`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx) | 1 |
| [`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) | 1 |
| [`legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx`](../../app/src/legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx) | 1 |
| [`legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx`](../../app/src/legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx) | 1 |
| [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx) | 1 |

<details><summary>User actions of the shared components (19)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`containers/FilterSheet/FilterSheetContainer.tsx:43`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx#L43) | `<FilterSheet>` | `onShowUpgradePopUp` | `showUpgradePopUp` | – | asks for a confirmation |
| 2 | [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:52`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L52) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| 3 | [`legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx:55`](../../app/src/legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx#L55) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| 4 | [`legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx:55`](../../app/src/legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx#L55) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| 5 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 6 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 7 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Home` | goes to HomeFeed |
| 8 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 9 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Updates` | goes to Updates_SingleList |
| 10 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 11 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Menu` | goes to Menu |
| 12 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 13 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Home` | goes to HomeFeed |
| 14 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 15 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Updates` | goes to Updates_SingleList |
| 16 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 17 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Menu` | goes to Menu |
| 18 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 19 | [`containers/DetailLayout/DetailLayoutContainer.tsx:66`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx#L66) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

| Call | React action | Reached through |
|---|---|---|
| `/api/UBTConnect_Utils/CacheControl_AllLocalities/DataActionGetCacheInfo` | `fetchAllLocalities()` [`api/locality/repository.ts:157`](../../app/src/api/locality/repository.ts#L157) | `FilterSheetContainer` [`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) |
