# HelpersDetail: OutSystems (TST) and React

The route `/UBTConnect/HelpersDetail`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/HelpersDetail/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 16 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `Connect2_OrbitMobile_MUI`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/HelpersDetail` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail` | TST compiled code |
| UI flow | `Legacy_OrbitEventsFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/HelpersDetail/HelpersDetailPage.tsx`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/HelpersDetail/parity`](../../migration/screens/HelpersDetail/parity) | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 9 shared blocks, 21 app shell files. React: 166 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 2: React makes 2, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (+ 3 declared on TST outside the call graph) (see [section 4](#4-questions)) |
| React calls reached only through shared code | 1: see the last section |
| User actions of the route (own code) | OutSystems: 2. React: 3 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 3 of 3 |
| Shared blocks and components on the route | OutSystems 9, React 3 with user actions: see the last section |
| App shell on this route | 2 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

None.

### Calls that TST declares outside the static call graph

React calls of the screen without a TST chain in the code of the route. TST makes them: the contract (`x-os-screens`, from the compiled closure) or `migration/contract/extra-actions.json` records each. The reasons: a block that the capture did not render, a module client action, a JavaScript callback. Not questions (user 2026-11-05).

| Call | React action | How TST declares it | Evidence |
|---|---|---|---|
| `/api/Connect2_LegacyShared/ActionGetSignedImagesInBulk` | `fetchLegacySignedImagesInBulk()` [`api/image/repository.ts:21`](../../app/src/api/image/repository.ts#L21) | extra-actions | Connect2_LegacyShared.controller.js (migration/runtime-sources/): ServerAction.GetSignedImagesInBulk, called by GetBulkSignedImageURL (:2816-2871), called through the CallbacksJS JavaScript node of GetCacheableSignedImageURL (:3692+, getClientActionProxies: a callback the call graph cannot follow);  |
| `/api/Connect2_LegacyShared/ActionGetTimezoneInformation` | `getTimezoneInformation()` [`lib/legacyShared/actions.ts:356`](../../app/src/lib/legacyShared/actions.ts#L356) | extra-actions | Connect2_LegacyShared.controller.js (migration/runtime-sources/): ServerAction.GetTimezoneInformation :7892-7912 (LocalityId Long Integer; TimezoneInformation APIDomain_Directory_IS TimezoneRec), called by client action GetTimezoneInformation :5500-5575, the miss callback of GetCacheableTimezoneInfo |
| `/api/Connect2_LegacyShared/ActionGetMemberContactByCacheKey` | `fetchMemberContacts()` [`api/message/repository.ts:301`](../../app/src/api/message/repository.ts#L301) | extra-actions | Connect2_LegacyShared.controller.js (migration/runtime-sources/): ServerAction.GetMemberContactByCacheKey :7780-7800, called by client action GetMemberContactList :5210-5260, the miss callback of GetCacheableMemberContactList :3414-3545 (memory cache DirectoryCacheType.MemberContact, key BuildMember |

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
| 1 | `Connect2_OrbitMobile_MUI/ActionGetDirectoryAccess` | server action | `Connect2_OrbitMobile_MUI` | ScreenBlock_HelperDetails.onHandle_ClickedMember → Connect2_OrbitMobile_MUI.checkDirectoryAccess → server GetDirectoryAccess | no | `checkDirectoryAccess()` [`lib/orbit/actions.ts:264`](../../app/src/lib/orbit/actions.ts#L264) (page) | `HelperDetails → useHelperDetails → checkDirectoryAccess`<br>[`pages/HelpersDetail/HelpersDetailPage.tsx`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx) | implemented |
| 2 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_HelperDetails/DataActionGetHelperDetails` | data action | `ScreenBlock_HelperDetails` | ScreenBlock_HelperDetails.OnReady → ScreenBlock_HelperDetails.onReady → ScreenBlock_HelperDetails.refreshData → ScreenBlock_HelperDetails.DataActionGetHelperDetails<br>ScreenBlock_HelperDetails fetch at start → ScreenBlock_HelperDetails.DataActionGetHelperDetails | yes | `fetchHelperDetails()` [`api/event/repository.ts:213`](../../app/src/api/event/repository.ts#L213) (page) | `HelperDetails → useHelperDetails → fetchHelperDetails`<br>[`pages/HelpersDetail/HelpersDetailPage.tsx`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `HelpersDetail` | `navigateTo_HouseholdDetail of HelperDetails` | `onHandle_NavigateToHouseholdDetail` | – | goes to HouseholdDetails |
| [2](#612-helpersdetail-onhandle_contacthelpdesk) | `HelpersDetail` | `navigateTo_ContactHelpdesk of HelperDetails` | `onHandle_ContactHelpdesk` | – | goes to ContactByEmailOrbitHelpdesk, HomeFeed; shows a message |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.2 HelpersDetail: onHandle_ContactHelpdesk

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HelpersDetail
  participant N as Navigation
  U->>B: navigateTo_ContactHelpdesk of HelperDetails → onHandle_ContactHelpdesk
  B->>N: go to ContactByEmailOrbitHelpdesk
  Note over B: message FeedbackMessageAfterTransition
  B->>N: go to HomeFeed
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#621-helperdetailsview-onclickedmember) | [`pages/HelpersDetail/HelpersDetailPage.tsx:32`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx#L32) | `<HelperDetailsView>` | `onClickedMember` | `flows.onClickedMember` | – | calls ActionGetDirectoryAccess; goes to HouseholdDetails; asks for a confirmation |
| 2 | [`pages/HelpersDetail/HelpersDetailPage.tsx:32`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx#L32) | `<HelperDetailsView>` | `onClickedMemberPhone` | `flows.onClickedMemberPhone` | – | calls ActionGetTimezoneInformation |
| [3](#623-helperdetailsview-oncontacthelpdesk) | [`pages/HelpersDetail/HelpersDetailPage.tsx:32`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx#L32) | `<HelperDetailsView>` | `onContactHelpdesk` | `flows.onContactHelpdesk` | – | goes to HomeFeed, ContactByEmailOrbitHelpdesk; shows a message |

<details><summary>2 diagrams (handlers with two or more effects)</summary>

#### 6.2.1 HelperDetailsView: onClickedMember

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as HelperDetailsView · HelpersDetailPage.tsx
  participant A as Server (React api)
  participant N as Navigation
  U->>H: onClickedMember → flows.onClickedMember
  Note over H: via clickedMember()
  Note over H: via checkDirectoryAccess()
  H->>A: ActionGetDirectoryAccess(Id, Type)
  A-->>H: Response
  Note over H: via navigateToHouseholdDetail()
  Note over H: via onNavigateToHouseholdDetail()
  H->>N: go to HouseholdDetails
  Note over H: via showUpgradePopUp()
  Note over H: confirm dialog dialogId
```

#### 6.2.3 HelperDetailsView: onContactHelpdesk

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as HelperDetailsView · HelpersDetailPage.tsx
  participant N as Navigation
  U->>H: onContactHelpdesk → flows.onContactHelpdesk
  Note over H: via onNavigateToContactHelpdesk()
  Note over H: message NO_ORBIT_ACCESS
  H->>N: go to HomeFeed
  H->>N: go to ContactByEmailOrbitHelpdesk
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_EventId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js:83`](../../migration/screens/HelpersDetail/analysis/sources/raw/UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js#L83) |
| `In_OrbitMilestoneTypeId` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js:87`](../../migration/screens/HelpersDetail/analysis/sources/raw/UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js#L87) |
| `In_MilestoneName` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js:91`](../../migration/screens/HelpersDetail/analysis/sources/raw/UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js#L91) |
| `In_EventName` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js:95`](../../migration/screens/HelpersDetail/analysis/sources/raw/UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js#L95) |
| `In_HostId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js:99`](../../migration/screens/HelpersDetail/analysis/sources/raw/UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js#L99) |

| Block | Target | Parameters | Place |
|---|---|---|---|
| `HelpersDetail` | `ContactByEmailOrbitHelpdesk` | `In_EventName` = `eventName`<br>`In_Subject` = `subject`<br>`In_EventId` = `in_EventId`<br>`In_MilestoneId` = `""` | [`UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js:299`](../../migration/screens/HelpersDetail/analysis/sources/raw/UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js#L299) |
| `HelpersDetail` | `HouseholdDetails` | `HouseholdId` = `householdId` | [`UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js:356`](../../migration/screens/HelpersDetail/analysis/sources/raw/UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js#L356) |

### 7.2 React

Declared inputs of the route: `In_EventId: LongInteger`, `In_OrbitMilestoneTypeId: Text`, `In_MilestoneName: Text`, `In_EventName: Text`, `In_HostId: LongInteger` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/HelpersDetail/HelpersDetailPage.tsx:45`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx#L45) |

| File | Target | Parameters | Place |
|---|---|---|---|
| `HelpersDetailPage.tsx` | `HouseholdDetails` | `HouseholdId` = `householdId` | [`pages/HelpersDetail/HelpersDetailPage.tsx:62`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx#L62) |
| `HelpersDetailPage.tsx` | `HomeFeed` |  | [`pages/HelpersDetail/HelpersDetailPage.tsx:67`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx#L67) |
| `HelpersDetailPage.tsx` | `ContactByEmailOrbitHelpdesk` | `In_EventName` = `eventName`<br>`In_Subject` = `subject`<br>`In_EventId` = `route.In_EventId`<br>`In_MilestoneId` = `''` | [`pages/HelpersDetail/HelpersDetailPage.tsx:70`](../../app/src/pages/HelpersDetail/HelpersDetailPage.tsx#L70) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

None.

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

None.

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js:406`](../../migration/screens/HelpersDetail/analysis/sources/raw/UBTConnect.Legacy_OrbitEventsFlow.HelpersDetail.mvc.js#L406) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Legacy_OrbitEventsFlow` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `ScreenBlock_HelperDetails` | `Connect2_OrbitMobile_MUI` | [`pages/HelpersDetail/components/HelperDetailsView.tsx`](../../app/src/pages/HelpersDetail/components/HelperDetailsView.tsx), [`pages/HelpersDetail/hooks/helperDetailsActions.ts`](../../app/src/pages/HelpersDetail/hooks/helperDetailsActions.ts), [`pages/HelpersDetail/hooks/helperDetailsState.ts`](../../app/src/pages/HelpersDetail/hooks/helperDetailsState.ts), [`pages/HelpersDetail/hooks/useHelperDetails.ts`](../../app/src/pages/HelpersDetail/hooks/useHelperDetails.ts) | 2 |
| `Layout_Orbit` | `Connect2_LegacyShared` | [`components/layout/OrbitLayout/OrbitLayout.tsx`](../../app/src/components/layout/OrbitLayout/OrbitLayout.tsx) | 0 |
| `BaseLayout_UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/BaseLayout/BaseLayout.tsx`](../../app/src/components/layout/BaseLayout/BaseLayout.tsx) | 0 |
| `MenuIcon__UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |
| `MilestoneHeader` | `Connect2_OrbitMobile_MUI` | [`components/orbit/MilestoneHeader/MilestoneHeader.tsx`](../../app/src/components/orbit/MilestoneHeader/MilestoneHeader.tsx) | 0 |
| `NoInformation_Orbit` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitNoInformation/OrbitNoInformation.tsx`](../../app/src/components/orbit/OrbitNoInformation/OrbitNoInformation.tsx) | 0 |
| `Dialog_AccessRestrictedAction_Legacy` | `UBTConnect_Utils` | [`platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx`](../../app/src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx) | 0 |
| `ContactPopup_ByPhone` | `UBTConnect_Utils` | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| `ContactPopup` | `UBTConnect_Utils` | [`components/contact/ContactPopup/ContactPopup.tsx`](../../app/src/components/contact/ContactPopup/ContactPopup.tsx) | 0 |

<details><summary>User actions of the shared blocks (4)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MenuIcon__UpdatedOSUI` | `onClick (HTML element)` | `onBack` | – | goes to previous screen |
| 2 | `ScreenBlock_HelperDetails` | `clickedMember of MemberInformation` | `onHandle_ClickedMember` | – | calls GetDirectoryAccess, GetAllApplicationEvents, AppManager_SynchAppContext; asks for a confirmation |
| 3 | `ScreenBlock_HelperDetails` | `event_Call of ByPhone` | `onHandle_CallClicked` | – | calls GetAllApplicationEvents, AppManager_SynchAppContext |
| 4 | `ContactPopup_ByPhone` | `event_Clicked of ContactPopup` | `onClick_CallButton` | – | opens an external link |

</details>


### React

| File | User actions |
|---|---|
| [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |

<details><summary>User actions of the shared components (4)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx:66`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx#L66) | `<ContactPopup>` | `onEventClicked` | `inline` | – | opens an external link; calls the prop onEventCall() |
| 4 | [`components/layout/MenuIcon/MenuIcon.tsx:34`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx#L34) | `<div>` | `onClick` | `inline` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

| Call | React action | Reached through |
|---|---|---|
| `/api/UBTConnect_Utils/ActionGetSignedImagesInBulk` | `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:131`](../../app/src/lib/ubtConnectUtils/actions.ts#L131) | `EntityLazyImage` [`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) |
