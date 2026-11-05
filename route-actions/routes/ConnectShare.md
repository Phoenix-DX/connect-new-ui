# ConnectShare: OutSystems (TST) and React

The route `/UBTConnect/ConnectShare`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/ConnectShare/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/ConnectShare` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_Share.ConnectShare` | TST compiled code |
| UI flow | `Legacy_Share` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/ConnectShare/ConnectSharePage.tsx`](../../app/src/pages/ConnectShare/ConnectSharePage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/ConnectShare/parity`](../../migration/screens/ConnectShare/parity) | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 7 shared blocks, 21 app shell files. React: 135 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 1: React makes 1, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 1 (see [section 4](#4-questions)) |
| User actions of the route (own code) | OutSystems: 0. React: 0 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 4 of 4 |
| Shared blocks and components on the route | OutSystems 7, React 2 with user actions: see the last section |
| App shell on this route | 8 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

1. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST ConnectShare has no chain to this call. Does the call belong to this route?

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
| 1 | `UBTConnect/ActionGet_ShareDetails` | server action | `UBTConnect` | ConnectShare.OnInitialize → ConnectShare.screenEvent_OnInitialize → UBTConnect.onInitializeSharingScreen → server Get_ShareDetails | yes | `fetchShareDetails()` [`api/share/repository.ts:13`](../../app/src/api/share/repository.ts#L13) (page) | `ConnectShare → useConnectShare → onInitializeSharingScreen → fetchShareDetails`<br>[`pages/ConnectShare/ConnectSharePage.tsx`](../../app/src/pages/ConnectShare/ConnectSharePage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

None.

### 6.2 React

None.

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/screens/ConnectShare/analysis/sources/raw/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `ShareId` | Text | yes | [`UBTConnect.Legacy_Share.ConnectShare.mvc.js:74`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L74) |

| Block | Target | Parameters | Place |
|---|---|---|---|
| `ConnectShare` | `HouseholdDetails` | `HouseholdId` = `integerToLongInteger(textToInteger(redirect_Share_AttributesId))` | [`UBTConnect.Legacy_Share.ConnectShare.mvc.js:461`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L461) |
| `ConnectShare` | `OneSchoolGlobalDetails` | `In_OneSchoolGlobalId` = `integerToLongInteger(textToInteger(redirect_Share_AttributesId))` | [`UBTConnect.Legacy_Share.ConnectShare.mvc.js:468`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L468) |
| `ConnectShare` | `FeedItemDetail` | `FeedItemId` = `redirect_Share_AttributesId` | [`UBTConnect.Legacy_Share.ConnectShare.mvc.js:475`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L475) |
| `ConnectShare` | `SupperMeeting_Details` | `In_SubdivsionId` = `integerToLongInteger(textToInteger(redirect_Share_AttributesId))` | [`UBTConnect.Legacy_Share.ConnectShare.mvc.js:482`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L482) |

### 7.2 React

Declared inputs of the route: `ShareId: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/ConnectShare/ConnectSharePage.tsx:14`](../../app/src/pages/ConnectShare/ConnectSharePage.tsx#L14) |

| File | Target | Parameters | Place |
|---|---|---|---|
| `connectShareState.ts` | `HouseholdDetails` | `HouseholdId` = `textToLongInteger(attributesId)` | [`pages/ConnectShare/hooks/connectShareState.ts:71`](../../app/src/pages/ConnectShare/hooks/connectShareState.ts#L71) |
| `connectShareState.ts` | `OneSchoolGlobalDetails` | `In_OneSchoolGlobalId` = `textToLongInteger(attributesId)` | [`pages/ConnectShare/hooks/connectShareState.ts:73`](../../app/src/pages/ConnectShare/hooks/connectShareState.ts#L73) |
| `connectShareState.ts` | `FeedItemDetail` | `FeedItemId` = `attributesId` | [`pages/ConnectShare/hooks/connectShareState.ts:78`](../../app/src/pages/ConnectShare/hooks/connectShareState.ts#L78) |
| `connectShareState.ts` | `SupperMeeting_Details` | `In_SubdivsionId` = `textToLongInteger(attributesId)` | [`pages/ConnectShare/hooks/connectShareState.ts:80`](../../app/src/pages/ConnectShare/hooks/connectShareState.ts#L80) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `ConnectShare` | OnInitialize ([`UBTConnect.Legacy_Share.ConnectShare.mvc.js:555`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L555)) | `screenEvent_OnInitialize` | 1. If false ([`L267`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L267))<br>2. IsRedirect = False ([`L269`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L269))<br>3. Execute Action: ScreenController_NavigateToPage ([`L272`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L272))<br>4. Else ([`L277`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L277))<br>5. JavaScript: WasCurrentViewRestoredFromCache ([`L279`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L279))<br>6. If wasCurrentViewRestoredFromCache.fromCache ([`L287`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L287))<br>7. If (((statusMessage) !== ("")) \|\| showFreeSubscriptionAlert) ([`L288`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L288))<br>8. Else ([`L290`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L290))<br>9. Destination: (PreviousScreen) ([`L292`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L292))<br>10. Else ([`L296`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L296))<br>11. Execute Action: OnInitializeSharingScreen ([`L298`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L298))<br>12. Set Vars ([`L303`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L303))<br>13. StatusMessage = OnInitializeSharingScreen.StatusMessage ([`L305`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L305))<br>14. If onInitializeSharingScreen.isRedirect ([`L308`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L308))<br>15. IsRedirect = True ([`L310`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L310))<br>16. Redirect_ShareObjectTypeId2 = OnInitializeSharingScreen.Redirect_ShareObjectTypeId ([`L313`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L313))<br>17. Redirect_Share_AttributesId2 = OnInitializeSharingScreen.Redirect_Share_Attributes.Id ([`L316`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L316))<br>18. Else ([`L319`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L319))<br>19. This is delayed to prevent showing the modal before the pin . ([`L321`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L321))<br>20. JavaScript: DelayedShowFreeSubscriptionAlert ([`L322`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L322)) |
| `ConnectShare` | OnReady ([`UBTConnect.Legacy_Share.ConnectShare.mvc.js:573`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L573)) | `screenEvent_OnReady` | 1. If isRedirect ([`L422`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L422))<br>2. Execute Action: Action_Redirect ([`L424`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L424))<br>3. Else ([`L427`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L427)) |

<details><summary>Sequence diagrams of the screen event handlers (2)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 ConnectShare: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as ConnectShare
  R->>B: OnInitialize → screenEvent_OnInitialize
  alt false
    Note over B: IsRedirect = False
    B->>B: action ScreenController_NavigateToPage
  else other
    B->>B: JavaScript WasCurrentViewRestoredFromCache
    alt wasCurrentViewRestoredFromCache.fromCache
      alt (((statusMessage) !== ("")) || showFreeSubscriptionAlert)
        Note over B: no step
      else other
        Note over B: Destination: (PreviousScreen)
      end
      Note over B: no step
    else other
      B->>B: action OnInitializeSharingScreen
      Note over B: Set Vars
      Note over B: StatusMessage = OnInitializeSharingScreen.StatusMessage
      alt onInitializeSharingScreen.isRedirect
        Note over B: IsRedirect = True
        Note over B: Redirect_ShareObjectTypeId2 = OnInitializeSharingScreen.Redirect_ShareObjectType…
        Note over B: Redirect_Share_AttributesId2 = OnInitializeSharingScreen.Redirect_Share_Attribut…
      else other
        Note over B: This is delayed to prevent showing the modal before the pin .
        B->>B: JavaScript DelayedShowFreeSubscriptionAlert
      end
    end
  end
```

#### 8.1.2 ConnectShare: OnReady

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as ConnectShare
  R->>B: OnReady → screenEvent_OnReady
  alt isRedirect
    B->>B: action Action_Redirect
  else other
    Note over B: no step
  end
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

None.

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `useConnectShare.ts` | `useEffect` (`useConnectShare`) | `[]` | yes | none | [`pages/ConnectShare/hooks/useConnectShare.ts:96`](../../app/src/pages/ConnectShare/hooks/useConnectShare.ts#L96) |
| `useConnectShare.ts` | `useEffect` (`useConnectShare`) | `[isInitialized, latest, navigate, dispatch]` | no | navigate `HouseholdDetails`<br>navigate `OneSchoolGlobalDetails`<br>navigate `FeedItemDetail`<br>navigate `SupperMeeting_Details` | [`pages/ConnectShare/hooks/useConnectShare.ts:106`](../../app/src/pages/ConnectShare/hooks/useConnectShare.ts#L106) |

<details><summary>Sequence diagrams of the effects with a call, a navigation, a message or a refresh (1)</summary>

#### 8.2.1 useConnectShare: useEffect

```mermaid
sequenceDiagram
  autonumber
  participant R as React
  participant H as useConnectShare · useConnectShare.ts
  participant N as Navigation
  R->>H: useEffect (after the mount and when [isInitialized, latest, navigate, dispatch] changes)
  H->>N: go to HouseholdDetails
  H->>N: go to OneSchoolGlobalDetails
  H->>N: go to FeedItemDetail
  H->>N: go to SupperMeeting_Details
```

</details>

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Legacy_Share.ConnectShare.mvc.js:597`](../../migration/screens/ConnectShare/analysis/sources/raw/UBTConnect.Legacy_Share.ConnectShare.mvc.js#L597) |
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
| `connectShareActions.ts` | try/catch | `onInitializeSharingScreen` | none | [`pages/ConnectShare/hooks/connectShareActions.ts:64`](../../app/src/pages/ConnectShare/hooks/connectShareActions.ts#L64) |

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `ScreenBlock_ShareDetail` | `Connect2_LegacyShared` | [`pages/ConnectShare/components/ShareDetailView.tsx`](../../app/src/pages/ConnectShare/components/ShareDetailView.tsx) | 0 |
| `Layout` | `Connect2_LegacyShared` | [`components/layout/LegacyLayout/LegacyLayout.tsx`](../../app/src/components/layout/LegacyLayout/LegacyLayout.tsx) | 0 |
| `BaseLayout_UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/BaseLayout/BaseLayout.tsx`](../../app/src/components/layout/BaseLayout/BaseLayout.tsx) | 0 |
| `MenuIcon_Back` | `Connect2_LegacyShared` | [`components/layout/MenuIconBack/MenuIconBack.tsx`](../../app/src/components/layout/MenuIconBack/MenuIconBack.tsx) | 1 |
| `NavigationLanding` | `Connect2_LegacyShared` | [`pages/ConnectShare/components/NavigationLanding.tsx`](../../app/src/pages/ConnectShare/components/NavigationLanding.tsx) | 0 |
| `ConnectBlankSlate` | `Connect2_LegacyShared` | [`components/ui/ConnectBlankSlate/ConnectBlankSlate.tsx`](../../app/src/components/ui/ConnectBlankSlate/ConnectBlankSlate.tsx) | 0 |
| `Dialog_AccessRestrictedAction_Legacy` | `UBTConnect_Utils` | [`platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx`](../../app/src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx) | 0 |

<details><summary>User actions of the shared blocks (1)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MenuIcon_Back` | `onClick (HTML element)` | `inline` | – | goes to previous screen |

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

