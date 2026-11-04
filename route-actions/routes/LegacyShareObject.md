# LegacyShareObject: server calls and user actions in OutSystems and React

This file compares the route `/UBTConnect/LegacyShareObject` in OutSystems (TST) with the React app.
The tool `route-actions/tools/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.
- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/LegacyShareObject` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_Share.LegacyShareObject` | TST compiled code |
| UI flow | `Legacy_Share` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 12 screen and block files of the route, 23 app shell files. React: 158 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 6: React makes 6, **0 missing** |
| User actions of the route | OutSystems: 5 diagrams. React: 5 diagrams |
| React calls of the screen that TST does not make | 2 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 12 of 12 |
| Navigation targets found in React | 0 of 0 |
| App shell on this route | 9 calls; event bindings: OutSystems 10, React 7: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `real`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/LegacyShareObject/parity/default.expected.png" width="200" alt="default expected"> | <img src="../../migration/screens/LegacyShareObject/parity/default.build.png" width="200" alt="default build"> | <img src="../../migration/screens/LegacyShareObject/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/LegacyShareObject/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../../migration/screens/LegacyShareObject/parity/loading.build.png" width="200" alt="loading build"> | <img src="../../migration/screens/LegacyShareObject/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/LegacyShareObject/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../../migration/screens/LegacyShareObject/parity/offline.build.png" width="200" alt="offline build"> | <img src="../../migration/screens/LegacyShareObject/parity/offline.diff.png" width="200" alt="offline diff"> |

## 4. Diagram

- A box on the left is the block or module of the action that calls the server (TST code).
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_screen["Screen and its blocks"]
      o0["ProfileList"]
      o1["ScreenBlock_ShareObject"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e2["ScreenDataSetGetShareObjectTypeById"]
    e3["ServiceAPIGetHouseholdDetails"]
    e4["DataActionGetAvailableUsers"]
    e5["ActionShareObject"]
    e6["ServiceAPIGet_UI_CommunityBusinessShareCard"]
    e7["ActionShareObject"]
  end
  subgraph RE["React actions"]
    subgraph RE_page["Screen"]
      r8["fetchAvailableUsers()"]
      r9["fetchCommunityBusinessShareCard()"]
      r10["fetchHouseholdShareCard()"]
      r11["fetchShareObjectTypeLabel()"]
      r12["shareObject()"]
    end
  end
  subgraph RC["React components"]
    c13["ProfileListBlock"]
    c14["ShareObjectBlock"]
  end
  r9 --- c14
  r10 --- c14
  r11 --- c14
  r8 --- c13
  r12 --- c13
  o1 --> e2
  o1 --> e3
  o1 --> e5
  o1 --> e6
  o0 --> e4
  o0 --> e7
  e2 --- r11
  e3 --- r10
  e4 --- r8
  e5 --- r12
  e6 --- r9
  e7 --- r12
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e2,e3,e4,e5,e6,e7 ok
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
| [1](#511-menuicon_back-inline) | `MenuIcon_Back` | `onClick (HTML element)` | `inline` | – | goes to previous screen |
| [2](#512-profilelist-input_searchfilteronkeyup) | `ProfileList` | `onKeyUp (HTML element)` | `input_SearchFilterOnKeyup` | – | calls GetAvailableUsers |
| [3](#513-profilelist-input_searchfilteronchange) | `ProfileList` | `onChange (HTML element)` | `input_SearchFilterOnChange` | – | calls GetAvailableUsers |
| [4](#514-freesubscriptionactiondialog-onconfirmed) | `FreeSubscriptionActionDialog` | `confirmed of ActionConfirmationDialog` | `onConfirmed` | – | goes to URL getCacheableUserInfo…subscriptionManageLink |
| [5](#515-legacyshareobject-handler_shareobject_subscriptiondenied) | `LegacyShareObject` | `subscriptionDenied of ShareObject` | `handler_ShareObject_SubscriptionDenied` | – | asks for a confirmation |

#### 5.1.1 MenuIcon_Back: inline

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as MenuIcon_Back
  participant N as Navigation
  U->>B: onClick (HTML element) → inline
  B->>N: go to previous screen
```

#### 5.1.2 ProfileList: input_SearchFilterOnKeyup

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ProfileList
  participant S as Server (TST calls)
  U->>B: onKeyUp (HTML element) → input_SearchFilterOnKeyup
  B->>S: GetAvailableUsers(HasSearched, MaxRecords, NoResultsFoundMessage, …)
  S-->>B: Label, Response
```

#### 5.1.3 ProfileList: input_SearchFilterOnChange

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ProfileList
  participant S as Server (TST calls)
  U->>B: onChange (HTML element) → input_SearchFilterOnChange
  B->>S: GetAvailableUsers(HasSearched, MaxRecords, NoResultsFoundMessage, …)
  S-->>B: Label, Response
```

#### 5.1.4 FreeSubscriptionActionDialog: onConfirmed

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as FreeSubscriptionActionDialog
  participant N as Navigation
  U->>B: confirmed of ActionConfirmationDialog → onConfirmed
  B->>N: go to URL getCacheableUserInfo…subscriptionManageLink
```

#### 5.1.5 LegacyShareObject: handler_ShareObject_SubscriptionDenied

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as LegacyShareObject
  U->>B: subscriptionDenied of ShareObject → handler_ShareObject_SubscriptionDenied
  Note over B: via UBTConnect_Utils.app_Subscription_ShowUpgradePopUp
  Note over B: confirm dialog
```

### 5.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#521-profilelistblock-onsubscriptiondenied) | [`pages/LegacyShareObject/LegacyShareObjectPage.tsx:61`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx#L61) | `<ProfileListBlock>` | `onSubscriptionDenied` | `showUpgradePopUp` | – | asks for a confirmation |
| [2](#522-profilelist-onshare) | [`pages/LegacyShareObject/LegacyShareObjectPage.tsx:27`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx#L27) | `<ProfileList>` | `onShare` | `flows.onShare` | – | calls ActionShareObject; shows a message; calls the prop onSubscriptionDenied() |
| [3](#523-preventbacknavigation-onbacknavigationprevented) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| [4](#524-backnavigationhandler-onbacknavigation) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| [5](#525-oslink-onclick) | [`components/layout/MenuIconBack/MenuIconBack.tsx:19`](../../app/src/components/layout/MenuIconBack/MenuIconBack.tsx#L19) | `<OSLink>` | `onClick` | `navigateBack` | – | goes to previous screen |

#### 5.2.1 ProfileListBlock: onSubscriptionDenied

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ProfileListBlock · LegacyShareObjectPage.tsx
  U->>H: onSubscriptionDenied → showUpgradePopUp
  Note over H: confirm dialog dialogId
```

#### 5.2.2 ProfileList: onShare

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

#### 5.2.3 PreventBackNavigation: onBackNavigationPrevented

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PreventBackNavigation · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigationPrevented → redirectHome
  H->>N: go to HomeFeed
```

#### 5.2.4 BackNavigationHandler: onBackNavigation

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

#### 5.2.5 OSLink: onClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · MenuIconBack.tsx
  participant N as Navigation
  U->>H: onClick → navigateBack
  H->>N: go to previous screen
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
| 1 | `Connect2_LegacyShared/Share_UI/ProfileList/ActionShareObject` | server action | `ProfileList` | ProfileList.deferredHandleShareObjectList → server ShareObject | no | `shareObject()` [`api/share/repository.ts:47`](../../app/src/api/share/repository.ts#L47) (page) | `ProfileListBlock → useProfileList → shareObject`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 2 | `Connect2_LegacyShared/Share_UI/ProfileList/DataActionGetAvailableUsers` | data action | `ProfileList` | onChange in ProfileList → ProfileList.input_SearchFilterOnChange → ProfileList.DataActionGetAvailableUsers<br>ProfileList.searchProfile → ProfileList.DataActionGetAvailableUsers<br>ProfileList fetch at start → ProfileList.DataActionGetAvailableUsers | yes | `fetchAvailableUsers()` [`api/share/repository.ts:40`](../../app/src/api/share/repository.ts#L40) (page) | `ProfileListBlock → useProfileList → useAvailableUsersQuery → fetchAvailableUsers`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 3 | `Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ActionShareObject` | server action | `ScreenBlock_ShareObject` | ScreenBlock_ShareObject.deferredHandleShareProfileList → server ShareObject | no | `shareObject()` [`api/share/repository.ts:47`](../../app/src/api/share/repository.ts#L47) (page) | `ProfileListBlock → useProfileList → shareObject`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 4 | `Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ScreenDataSetGetShareObjectTypeById` | aggregate | `ScreenBlock_ShareObject` | ScreenBlock_ShareObject.OnParametersChanged → ScreenBlock_ShareObject.onParametersChanged → ScreenBlock_ShareObject.ScreenDataSetGetShareObjectTypeById<br>ScreenBlock_ShareObject fetch at start → ScreenBlock_ShareObject.ScreenDataSetGetShareObjectTypeById | yes | `fetchShareObjectTypeLabel()` [`api/share/repository.ts:33`](../../app/src/api/share/repository.ts#L33) (page) | `ShareObjectBlock → useShareObject → useShareObjectTypeLabelQuery → fetchShareObjectTypeLabel`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 5 | `Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ServiceAPIGetHouseholdDetails` | service action | `ScreenBlock_ShareObject` | ScreenBlock_ShareObject.OnReady → ScreenBlock_ShareObject.onReady → server GetHouseholdDetails | yes | `fetchHouseholdShareCard()` [`api/household/repository.ts:138`](../../app/src/api/household/repository.ts#L138) (page) | `ShareObjectBlock → useShareObject → fetchHouseholdShareCard`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |
| 6 | `Connect2_LegacyShared/Share_UI/ScreenBlock_ShareObject/ServiceAPIGet_UI_CommunityBusinessShareCard` | service action | `ScreenBlock_ShareObject` | ScreenBlock_ShareObject.OnReady → ScreenBlock_ShareObject.onReady → server Get_UI_CommunityBusinessShareCard | no | `fetchCommunityBusinessShareCard()` [`api/locality/repository.ts:210`](../../app/src/api/locality/repository.ts#L210) (page) | `ShareObjectBlock → useShareObject → fetchCommunityBusinessShareCard`<br>[`pages/LegacyShareObject/LegacyShareObjectPage.tsx`](../../app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx) | implemented |

## 7. Missing in React

None.

## 8. Questions

1. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST LegacyShareObject has no chain to this call. Does the call belong to this route?
2. React calls `/api/Connect2_LegacyShared/ActionGetSignedPhotosInBulk` from `getSignedPhotosInBulk()` [`lib/legacyShared/actions.ts:49`](../../app/src/lib/legacyShared/actions.ts#L49) (page). TST LegacyShareObject has no chain to this call. Does the call belong to this route?

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/LegacyShareObject/analysis/`:
   - the rendered files;
   - each server call with its chain of client actions, and the calls that TST made in the capture;
   - the effects of each user action.
2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in `CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell when its file is in the code that `main.tsx` loads.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
