# GuestArrangements: OutSystems (TST) and React

The route `/UBTConnect/GuestArrangements`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-06. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/GuestArrangements/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Static check.** This route has no TST capture (`migration/screens/GuestArrangements/no-capture.json`).

- The OutSystems facts come from the compiled code of the screen and of its static closure (TST survey).
- The code is in `migration/sources/runtime/` and in `migration/sources/raw/` (the captured routes).
- The tool observed no call and has no screenshot.
- Closure: 58 files, 0 without compiled code.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/GuestArrangements` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements` | TST compiled code |
| UI flow | `Legacy_OrbitEventsFlow` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/GuestArrangements/GuestArrangementsPage.tsx`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | no parity run | `route.py parity` |
| Code read | OutSystems: 1 files of the UI flow, 14 shared blocks, 43 app shell files. React: 155 files in the closure of the page | TST survey closure and compiled code (static), `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 2: React makes 2, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (+ 1 declared on TST outside the call graph) (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 2. React: 3 |
| Screen and blocks of the UI flow with a React port | 1 of 1 |
| Navigation targets found in React | 3 of 3 |
| Shared blocks and components on the route | OutSystems 14, React 2 with user actions: see the last section |
| App shell on this route | 3 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

None.

### Calls that TST declares outside the static call graph

React calls of the screen without a TST chain in the code of the route. TST makes them: the contract (`x-os-screens`, from the compiled closure) or `migration/contract/extra-actions.json` records each. The reasons: a block that the capture did not render, a module client action, a JavaScript callback. Not questions (user 2026-11-05).

| Call | React action | How TST declares it | Evidence |
|---|---|---|---|
| `/api/Connect2_LegacyShared/ActionGetSignedImagesInBulk` | `fetchLegacySignedImagesInBulk()` [`api/image/repository.ts:21`](../../app/src/api/image/repository.ts#L21) | extra-actions | Connect2_LegacyShared.controller.js (migration/sources/runtime/): ServerAction.GetSignedImagesInBulk, called by GetBulkSignedImageURL (:2816-2871), called through the CallbacksJS JavaScript node of GetCacheableSignedImageURL (:3692+, getClientActionProxies: a callback the call graph cannot follow);  |

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
| 1 | `Connect2_OrbitMobile_MUI/ActionGetDirectoryAccess` | server action | `Connect2_OrbitMobile_MUI` | onClick in Card_MemberInformation → event clickedMember of Card_MemberInformation → ScreenBlock_GuestArrangements.onHandle_ClickedMember → Connect2_OrbitMobile_MUI.checkDirectoryAccess → server GetDirectoryAccess | no capture | `checkDirectoryAccess()` [`lib/orbit/actions.ts:264`](../../app/src/lib/orbit/actions.ts#L264) (page) | `GuestArrangementsBlock → useGuestArrangements → checkDirectoryAccess`<br>[`pages/GuestArrangements/GuestArrangementsPage.tsx`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx) | implemented |
| 2 | `Connect2_OrbitMobile_MUI/Orbit_ScreenBlocks/ScreenBlock_GuestArrangements/DataActionGetGuestArrangements` | data action | `ScreenBlock_GuestArrangements` | ScreenBlock_GuestArrangements.OnReady → ScreenBlock_GuestArrangements.onReady → ScreenBlock_GuestArrangements.refreshData → ScreenBlock_GuestArrangements.DataActionGetGuestArrangements<br>ScreenBlock_GuestArrangements fetch at start → ScreenBlock_GuestArrangements.DataActionGetGuestArrangements | no capture | `fetchGuestArrangements()` [`api/event/repository.ts:207`](../../app/src/api/event/repository.ts#L207) (page) | `GuestArrangementsBlock → useGuestArrangements → fetchGuestArrangements`<br>[`pages/GuestArrangements/GuestArrangementsPage.tsx`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `GuestArrangements` | `navigateTo_HouseholdDetail of GuestArrangements` | `onHandle_NavigateToHouseholdDetail` | – | goes to HouseholdDetails |
| [2](#612-guestarrangements-onhandle_contacthelpdesk) | `GuestArrangements` | `contactHelpdesk of GuestArrangements` | `onHandle_ContactHelpdesk` | – | goes to ContactByEmailOrbitHelpdesk, HomeFeed; shows a message |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.2 GuestArrangements: onHandle_ContactHelpdesk

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as GuestArrangements
  participant N as Navigation
  U->>B: contactHelpdesk of GuestArrangements → onHandle_ContactHelpdesk
  B->>N: go to ContactByEmailOrbitHelpdesk
  Note over B: message FeedbackMessageAfterTransition
  B->>N: go to HomeFeed
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#621-guestarrangementsview-onclickedmember) | [`pages/GuestArrangements/GuestArrangementsPage.tsx:44`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx#L44) | `<GuestArrangementsView>` | `onClickedMember` | `onClickedMember` | – | calls ActionGetDirectoryAccess; asks for a confirmation; calls the prop onNavigateToHouseholdDetail() |
| 2 | [`pages/GuestArrangements/GuestArrangementsPage.tsx:69`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx#L69) | `<GuestArrangementsBlock>` | `onNavigateToHouseholdDetail` | `inline` | – | goes to HouseholdDetails |
| [3](#623-guestarrangementsblock-oncontacthelpdesk) | [`pages/GuestArrangements/GuestArrangementsPage.tsx:72`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx#L72) | `<GuestArrangementsBlock>` | `onContactHelpdesk` | `inline` | – | goes to HomeFeed, ContactByEmailOrbitHelpdesk; shows a message |

<details><summary>2 diagrams (handlers with two or more effects)</summary>

#### 6.2.1 GuestArrangementsView: onClickedMember

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as GuestArrangementsView · GuestArrangementsPage.tsx
  participant A as Server (React api)
  U->>H: onClickedMember → onClickedMember
  Note over H: via clickedMember()
  Note over H: via checkDirectoryAccess()
  H->>A: ActionGetDirectoryAccess(Id, Type)
  A-->>H: Response
  Note over H: via navigateToHouseholdDetail()
  Note over H: calls the prop onNavigateToHouseholdDetail()
  Note over H: via showUpgradePopUp()
  Note over H: confirm dialog dialogId
```

#### 6.2.3 GuestArrangementsBlock: onContactHelpdesk

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as GuestArrangementsBlock · GuestArrangementsPage.tsx
  participant N as Navigation
  U->>H: onContactHelpdesk → inline
  Note over H: message NO_ORBIT_ACCESS
  H->>N: go to HomeFeed
  H->>N: go to ContactByEmailOrbitHelpdesk
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/sources/runtime/` and in `migration/sources/raw/` (the shared store of the captured routes; static check).

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_MilestoneId` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:95`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L95) |
| `In_EventId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:99`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L99) |
| `In_MemberId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:103`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L103) |
| `In_HostId` | LongInteger | yes | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:107`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L107) |
| `In_OrbitMilestoneTypeId` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:111`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L111) |
| `In_MilestoneTitle` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:115`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L115) |
| `In_EventName` | Text | yes | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:119`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L119) |

| Block | Target | Parameters | Place |
|---|---|---|---|
| `GuestArrangements` | `ContactByEmailOrbitHelpdesk` | `In_EventId` = `in_EventId`<br>`In_Subject` = `subject`<br>`In_EventName` = `eventName`<br>`In_MilestoneId` = `""` | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:321`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L321) |
| `GuestArrangements` | `HouseholdDetails` | `HouseholdId` = `householdId` | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:378`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L378) |

### 7.2 React

Declared inputs of the route: `In_MilestoneId: Text`, `In_EventId: LongInteger`, `In_MemberId: LongInteger`, `In_HostId: LongInteger`, `In_OrbitMilestoneTypeId: Text`, `In_MilestoneTitle: Text`, `In_EventName: Text` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/GuestArrangements/GuestArrangementsPage.tsx:59`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx#L59) |

| File | Target | Parameters | Place |
|---|---|---|---|
| `GuestArrangementsPage.tsx` | `HouseholdDetails` | `HouseholdId` = `householdId` | [`pages/GuestArrangements/GuestArrangementsPage.tsx:70`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx#L70) |
| `GuestArrangementsPage.tsx` | `HomeFeed` |  | [`pages/GuestArrangements/GuestArrangementsPage.tsx:75`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx#L75) |
| `GuestArrangementsPage.tsx` | `ContactByEmailOrbitHelpdesk` | `In_EventId` = `inputs.In_EventId`<br>`In_Subject` = `subject`<br>`In_EventName` = `eventName`<br>`In_MilestoneId` = `''` | [`pages/GuestArrangements/GuestArrangementsPage.tsx:78`](../../app/src/pages/GuestArrangements/GuestArrangementsPage.tsx#L78) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js:428`](../../migration/sources/runtime/UBTConnect.Legacy_OrbitEventsFlow.GuestArrangements.mvc.js#L428) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Legacy_OrbitEventsFlow` not in `migration/sources/shell/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `ScreenBlock_GuestArrangements` | `Connect2_OrbitMobile_MUI` | [`pages/GuestArrangements/components/GuestArrangementsView.tsx`](../../app/src/pages/GuestArrangements/components/GuestArrangementsView.tsx), [`pages/GuestArrangements/hooks/guestArrangementsActions.ts`](../../app/src/pages/GuestArrangements/hooks/guestArrangementsActions.ts), [`pages/GuestArrangements/hooks/guestArrangementsState.ts`](../../app/src/pages/GuestArrangements/hooks/guestArrangementsState.ts), [`pages/GuestArrangements/hooks/useGuestArrangements.ts`](../../app/src/pages/GuestArrangements/hooks/useGuestArrangements.ts) | 1 |
| `Dialog_AccessRestrictedAction_Legacy` | `UBTConnect_Utils` | [`platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx`](../../app/src/platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx) | 0 |
| `ContactHelpdesk_Footer` | `Connect2_OrbitMobile_MUI` | [`components/orbit/ContactHelpdeskFooter/ContactHelpdeskFooter.tsx`](../../app/src/components/orbit/ContactHelpdeskFooter/ContactHelpdeskFooter.tsx) | 0 |
| `Skeleton_Loading` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitSkeleton/OrbitSkeleton.tsx`](../../app/src/components/orbit/OrbitSkeleton/OrbitSkeleton.tsx) | 0 |
| `NoInformation_Orbit` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitNoInformation/OrbitNoInformation.tsx`](../../app/src/components/orbit/OrbitNoInformation/OrbitNoInformation.tsx) | 0 |
| `Card_MemberInformation` | `Connect2_OrbitMobile_MUI` | [`components/orbit/MemberInformationCard/MemberInformationCard.tsx`](../../app/src/components/orbit/MemberInformationCard/MemberInformationCard.tsx) | 0 |
| `DEPRECATED_AccordionItem` | `OutSystemsUI_2_23` | [`components/ui/legacy/SectionExpandable/SectionExpandable.tsx`](../../app/src/components/ui/legacy/SectionExpandable/SectionExpandable.tsx) | 0 |
| `Accordion_Orbit` | `Connect2_OrbitMobile_MUI` | [`components/orbit/OrbitAccordion/OrbitAccordion.tsx`](../../app/src/components/orbit/OrbitAccordion/OrbitAccordion.tsx) | 0 |
| `DEPRECATED_Accordion` | `OutSystemsUI_2_23` | [`components/ui/legacy/LegacyAccordion/LegacyAccordion.tsx`](../../app/src/components/ui/legacy/LegacyAccordion/LegacyAccordion.tsx) | 0 |
| `MilestoneHeader` | `Connect2_OrbitMobile_MUI` | [`components/orbit/MilestoneHeader/MilestoneHeader.tsx`](../../app/src/components/orbit/MilestoneHeader/MilestoneHeader.tsx) | 0 |
| `MenuIcon__UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |
| `Layout_Orbit` | `Connect2_LegacyShared` | [`components/layout/OrbitLayout/OrbitLayout.tsx`](../../app/src/components/layout/OrbitLayout/OrbitLayout.tsx) | 0 |
| `BaseLayout_UpdatedOSUI` | `Connect2_LegacyShared` | [`components/layout/BaseLayout/BaseLayout.tsx`](../../app/src/components/layout/BaseLayout/BaseLayout.tsx) | 0 |
| `PullToRefresh` | `OutSystemsUI_2_23` | [`components/ui/PullToRefresh/PullToRefresh.tsx`](../../app/src/components/ui/PullToRefresh/PullToRefresh.tsx) | 0 |

<details><summary>User actions of the shared blocks (2)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `MenuIcon__UpdatedOSUI` | `onClick (HTML element)` | `onBack` | – | goes to previous screen |
| 2 | `ScreenBlock_GuestArrangements` | `clickedMember of MemberInformation` | `onHandle_ClickedMember` | – | calls GetDirectoryAccess, GetAllApplicationEvents, AppManager_SynchAppContext; asks for a confirmation |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/layout/MenuIcon/MenuIcon.tsx`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx) | 1 |

<details><summary>User actions of the shared components (3)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`components/layout/MenuIcon/MenuIcon.tsx:34`](../../app/src/components/layout/MenuIcon/MenuIcon.tsx#L34) | `<div>` | `onClick` | `inline` | – | goes to previous screen |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
