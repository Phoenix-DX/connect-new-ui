# LegacyShareObject: OutSystems (TST) and React

The route `/UBTConnect/LegacyShareObject`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/LegacyShareObject/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 14 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/LegacyShareObject` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_Share.LegacyShareObject` | TST compiled code |
| UI flow | `Legacy_Share` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/LegacyShareObject/parity`](../../migration/screens/LegacyShareObject/parity) | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 11 shared blocks, 23 app shell files. React: 159 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 6: React makes 6, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 1: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 2 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 0 of 0 |
| Shared blocks and components on the route | OutSystems 11, React 2 with user actions: see the last section |
| App shell on this route | 9 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

### Not a gap of the web app

Missing TST calls that a rule of `route-check/config.json` (`notApplicable`, user 2026-11-05) sets aside. The rule names the fact and its evidence; the chain is the one of the TST code.

**Declared, never run (navigation).** The navigation sits in a client action that no event, lifecycle step or action of the compiled code calls or binds (`tools/os_call_graph.py dead_client_actions`): TST cannot reach it.

- Navigation to `HomeFeed` in `CommonUI_InsideLayout.action_RedirectHome`, `CommonUI_InsideLayout.onBackNavigation_RedirectHome`.


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
| 1 | `Connect2_LegacyShared/Share_UI/ProfileList/ActionShareObject` | server action | `ProfileList` | ProfileList.deferredHandleShareObjectList → server ShareObject | no | `shareObject()` [`api/share/repository.ts:47`](../../app/src/api/share/repository.ts#L47) (page) | `ProfileListBlock → useProfileList → shareObject`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 2 | `Connect2_LegacyShared/Share_UI/ProfileList/DataActionGetAvailableUsers` | data action | `ProfileList` | onChange in ProfileList → ProfileList.input_SearchFilterOnChange → ProfileList.DataActionGetAvailableUsers<br>ProfileList.searchProfile → ProfileList.DataActionGetAvailableUsers<br>ProfileList fetch at start → ProfileList.DataActionGetAvailableUsers | yes | `fetchAvailableUsers()` [`api/share/repository.ts:40`](../../app/src/api/share/repository.ts#L40) (page) | `ProfileListBlock → useProfileList → useAvailableUsersQuery → fetchAvailableUsers`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 3 | `Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ActionShareObject` | server action | `ScreenBlock_ShareObject` | ScreenBlock_ShareObject.deferredHandleShareProfileList → server ShareObject | no | `shareObject()` [`api/share/repository.ts:47`](../../app/src/api/share/repository.ts#L47) (page) | `ProfileListBlock → useProfileList → shareObject`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 4 | `Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById` | aggregate | `ScreenBlock_ShareObject` | ScreenBlock_ShareObject.OnParametersChanged → ScreenBlock_ShareObject.onParametersChanged → ScreenBlock_ShareObject.ScreenDataSetGetShareObjectTypeById<br>ScreenBlock_ShareObject fetch at start → ScreenBlock_ShareObject.ScreenDataSetGetShareObjectTypeById | yes | `fetchShareObjectTypeLabel()` [`api/share/repository.ts:33`](../../app/src/api/share/repository.ts#L33) (page) | `ShareObjectBlock → useShareObject → useShareObjectTypeLabelQuery → fetchShareObjectTypeLabel`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 5 | `Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ServiceAPIGetHouseholdDetails` | service action | `ScreenBlock_ShareObject` | ScreenBlock_ShareObject.OnReady → ScreenBlock_ShareObject.onReady → server GetHouseholdDetails | yes | `fetchHouseholdShareCard()` [`api/household/repository.ts:162`](../../app/src/api/household/repository.ts#L162) (page) | `ShareObjectBlock → useShareObject → fetchHouseholdShareCard`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 6 | `Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ServiceAPIGet_UI_CommunityBusinessShareCard` | service action | `ScreenBlock_ShareObject` | ScreenBlock_ShareObject.OnReady → ScreenBlock_ShareObject.onReady → server Get_UI_CommunityBusinessShareCard | no | `fetchCommunityBusinessShareCard()` [`api/locality/repository.ts:210`](../../app/src/api/locality/repository.ts#L210) (page) | `ShareObjectBlock → useShareObject → fetchCommunityBusinessShareCard`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `LegacyShareObject` | `subscriptionDenied of ShareObject` | `handler_ShareObject_SubscriptionDenied` | – | asks for a confirmation |

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/LegacyShareObject/LegacyShareObjectPage.tsx:61`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx#L61) | `<ProfileListBlock>` | `onSubscriptionDenied` | `showUpgradePopUp` | – | asks for a confirmation |
| [2](#622-profilelist-onshare) | [`pages/LegacyShareObject/LegacyShareObjectPage.tsx:27`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx#L27) | `<ProfileList>` | `onShare` | `flows.onShare` | – | calls ActionShareObject; shows a message; calls the prop onSubscriptionDenied() |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.2.2 ProfileList: onShare

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ProfileList · LegacyShareObjectPage.tsx
  participant A as Server (React api)
  U->>H: onShare → flows.onShare
  Note over H: via deferredHandleShareObjectList()
  Note over H: via shareObject()
  H->>A: ActionShareObject(In_ShareObjectTypeId, In_SharedObjectId, In_SharingProfileName, …)
  A-->>H: IsAllowed, IsSuccess, Message, …
  Note over H: message result.message
  Note over H: calls the prop onSubscriptionDenied()
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/sources/raw/` (the route's `analysis/manifest.json` names them); the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_ShareObjectTypeId` | Text | yes | [`UBTConnect.Legacy_Share.LegacyShareObject.mvc.js:74`](../../migration/sources/raw/UBTConnect.Legacy_Share.LegacyShareObject.mvc.js#L74) |
| `In_ObjectId` | Text | yes | [`UBTConnect.Legacy_Share.LegacyShareObject.mvc.js:78`](../../migration/sources/raw/UBTConnect.Legacy_Share.LegacyShareObject.mvc.js#L78) |
| `In_CustomTitle` | Text | yes | [`UBTConnect.Legacy_Share.LegacyShareObject.mvc.js:82`](../../migration/sources/raw/UBTConnect.Legacy_Share.LegacyShareObject.mvc.js#L82) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `In_ShareObjectTypeId: Text`, `In_ObjectId: Text`, `In_CustomTitle: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/LegacyShareObject/LegacyShareObjectPage.tsx:77`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx#L77) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `LegacyShareObject` | OnInitialize ([`UBTConnect.Legacy_Share.LegacyShareObject.mvc.js:352`](../../migration/sources/raw/UBTConnect.Legacy_Share.LegacyShareObject.mvc.js#L352)) | `onInitialize` | 1. Execute Action: GetUserInformation_Wrapper ([`L279`](../../migration/sources/raw/UBTConnect.Legacy_Share.LegacyShareObject.mvc.js#L279))<br>2. User_AgeVisibility = GetUserInformation_Wrapper.UserInformation.Directory_UserCurrent_Visibility.DisplayAge ([`L285`](../../migration/sources/raw/UBTConnect.Legacy_Share.LegacyShareObject.mvc.js#L285)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 LegacyShareObject: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as LegacyShareObject
  R->>B: OnInitialize → onInitialize
  B->>B: action GetUserInformation_Wrapper
  Note over B: User_AgeVisibility = GetUserInformation_Wrapper.UserInformation.Directory_UserCu…
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

None.

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `useProfileList.ts` | `useEffect` (`useProfileList`) | `[query.status, query.isFetching, query.isPlaceholderData, qu…` | no | none | [`pages/LegacyShareObject/hooks/useProfileList.ts:114`](../../app/src/pages/LegacyShareObject/hooks/useProfileList.ts#L114) |
| `LegacyShareObjectPage.tsx` | `useEffect` (`LegacyShareObject`) | `[]` | no | none | [`pages/LegacyShareObject/LegacyShareObjectPage.tsx:86`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx#L86) |

Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what reads the result in the same file.

| File | Hook (function) | Calls | Read by | Place |
|---|---|---|---|---|
| `useProfileList.ts` | `useAvailableUsersQuery` (`useProfileList`) | `/api/Connect2_LegacyShared/ProfileList/DataActionGetAvailableUsers` | `useEffect()` ([`L115`](../../app/src/pages/LegacyShareObject/hooks/useProfileList.ts#L115)), `availableUsersFetched()` ([`L118`](../../app/src/pages/LegacyShareObject/hooks/useProfileList.ts#L118)), `return` ([`L161`](../../app/src/pages/LegacyShareObject/hooks/useProfileList.ts#L161)) | [`pages/LegacyShareObject/hooks/useProfileList.ts:101`](../../app/src/pages/LegacyShareObject/hooks/useProfileList.ts#L101) |
| `useShareObject.ts` | `useShareObjectTypeLabelQuery` (`useShareObject`) | `/api/Connect2_LegacyShared/ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById` | `return` ([`L94`](../../app/src/pages/LegacyShareObject/hooks/useShareObject.ts#L94)) | [`pages/LegacyShareObject/hooks/useShareObject.ts:53`](../../app/src/pages/LegacyShareObject/hooks/useShareObject.ts#L53) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Legacy_Share.LegacyShareObject.mvc.js:377`](../../migration/sources/raw/UBTConnect.Legacy_Share.LegacyShareObject.mvc.js#L377) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Legacy_Share` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

| File | Kind | Function | Effects | Place |
|---|---|---|---|---|
| `LegacyShareObjectPage.tsx` | flow handler | `LegacyShareObject` | none | [`pages/LegacyShareObject/LegacyShareObjectPage.tsx:92`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx#L92) |

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `ScreenBlock_ShareObject` | `Connect2_LegacyShared` | [`pages/LegacyShareObject/components/ShareObjectView.tsx`](../../app/src/pages/LegacyShareObject/components/ShareObjectView.tsx), [`pages/LegacyShareObject/hooks/shareObjectState.ts`](../../app/src/pages/LegacyShareObject/hooks/shareObjectState.ts), [`pages/LegacyShareObject/hooks/useShareObject.ts`](../../app/src/pages/LegacyShareObject/hooks/useShareObject.ts) | 0 |
| `Layout` | `Connect2_LegacyShared` | [`components/layout/LegacyLayout/LegacyLayout.tsx`](../../app/src/components/layout/LegacyLayout/LegacyLayout.tsx) | 0 |
| `BaseLayout_UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/BaseLayout/BaseLayout.tsx`](../../app/src/components/layout/BaseLayout/BaseLayout.tsx) | 0 |
| `MenuIcon_Back` | `Connect2_LegacyShared` | [`components/layout/MenuIconBack/MenuIconBack.tsx`](../../app/src/components/layout/MenuIconBack/MenuIconBack.tsx) | 1 |
| `Result_Item_Image` | `Connect2_LegacyShared` | [`components/ui/ResultItemImage/ResultItemImage.tsx`](../../app/src/components/ui/ResultItemImage/ResultItemImage.tsx) | 0 |
| `UBT_LazyImage` | `UBTConnect_Utils` | [`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) | 0 |
| `LazyImage` | `UBTConnectLibrary` | [`components/ui/LazyImage/LazyImage.tsx`](../../app/src/components/ui/LazyImage/LazyImage.tsx) | 0 |
| `ProfileList` | `Connect2_LegacyShared` | [`pages/LegacyShareObject/components/ProfileList.tsx`](../../app/src/pages/LegacyShareObject/components/ProfileList.tsx), [`pages/LegacyShareObject/hooks/profileListState.ts`](../../app/src/pages/LegacyShareObject/hooks/profileListState.ts), [`pages/LegacyShareObject/hooks/useProfileList.ts`](../../app/src/pages/LegacyShareObject/hooks/useProfileList.ts) | 0 |
| `InputWithIcon` | `OutSystemsUI_2_23` | [`components/ui/InputWithIcon/InputWithIcon.tsx`](../../app/src/components/ui/InputWithIcon/InputWithIcon.tsx) | 0 |
| `HighlightSearch` | `Connect2_LegacyShared` | [`pages/LegacyShareObject/components/HighlightSearch.tsx`](../../app/src/pages/LegacyShareObject/components/HighlightSearch.tsx) | 0 |
| `FreeSubscriptionActionDialog` | `Connect2_LegacyShared` | [`containers/FreeSubscriptionActionDialog/FreeSubscriptionActionDialog.tsx`](../../app/src/containers/FreeSubscriptionActionDialog/FreeSubscriptionActionDialog.tsx) | 1 |

<details><summary>User actions of the shared blocks (2)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MenuIcon_Back` | `onClick (HTML element)` | `inline` | – | goes to previous screen |
| 2 | `FreeSubscriptionActionDialog` | `confirmed of ActionConfirmationDialog` | `onConfirmed` | – | goes to URL getCacheableUserInfo…subscriptionManageLink |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/layout/MenuIconBack/MenuIconBack.tsx`](../../app/src/components/layout/MenuIconBack/MenuIconBack.tsx) | 1 |

<details><summary>User actions of the shared components (3)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`components/layout/MenuIconBack/MenuIconBack.tsx:19`](../../app/src/components/layout/MenuIconBack/MenuIconBack.tsx#L19) | `<OSLink>` | `onClick` | `navigateBack` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

| Call | React action | Reached through |
|---|---|---|
| `/api/Connect2_LegacyShared/ActionGetSignedPhotosInBulk` | `getSignedPhotosInBulk()` [`lib/legacyShared/actions.ts:45`](../../app/src/lib/legacyShared/actions.ts#L45) | `ResultItemImage` [`components/ui/ResultItemImage/ResultItemImage.tsx`](../../app/src/components/ui/ResultItemImage/ResultItemImage.tsx) |
