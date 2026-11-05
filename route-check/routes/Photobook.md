# Photobook: OutSystems (TST) and React

The route `/UBTConnect/Photobook`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/Photobook/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 14 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `UBTConnect`, `js`, `js`, `UBTConnectLibrary`, `js`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/Photobook` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Directory_Photobook.Photobook` | TST compiled code |
| UI flow | `Directory_Photobook` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/Photobook/PhotobookPage.tsx`](../../app/src/pages/Photobook/PhotobookPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/Photobook/parity`](../../migration/screens/Photobook/parity) | `route.py parity` |
| Code read | OutSystems: 9 files of the UI flow, 6 shared blocks, 28 app shell files. React: 160 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 2: React makes 2, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 0: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 2 |
| Screen and blocks of the UI flow with a React port | 9 of 9 |
| Navigation targets found in React | 2 of 2 |
| Shared blocks and components on the route | OutSystems 6, React 1 with user actions: see the last section |
| App shell on this route | 10 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

### Not a gap of the web app

Missing TST calls that a rule of `route-check/config.json` (`notApplicable`, user 2026-11-05) sets aside. The rule names the fact and its evidence; the chain is the one of the TST code.

**Declared, never run (navigation).** The navigation sits in a client action that no event, lifecycle step or action of the compiled code calls or binds (`tools/os_call_graph.py dead_client_actions`): TST cannot reach it.

- Navigation to `HomeFeed` in `CommonUI_InsideLayout.action_RedirectHome`, `CommonUI_InsideLayout.onBackNavigation_RedirectHome`.


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
| 1 | `UBTConnect/Directory_Photobook/Photobook/DataActionGetLocalityHouseholdIds` | data action | `Photobook` | Photobook fetch at start → Photobook.DataActionGetLocalityHouseholdIds | yes | `fetchLocalityHouseholdIds()` [`api/household/repository.ts:73`](../../app/src/api/household/repository.ts#L73) (page) | `Photobook → usePhotobook → fetchLocalityHouseholdIds`<br>[`pages/Photobook/PhotobookPage.tsx`](../../app/src/pages/Photobook/PhotobookPage.tsx) | implemented |
| 2 | `UBTConnect/Directory_Photobook/Photobook_Options_Left/DataActionGetHouseholdCaption` | data action | `Photobook_Options_Left` | Photobook_Options_Left fetch at start → Photobook_Options_Left.DataActionGetHouseholdCaption | no | `fetchHouseholdCaption()` [`api/household/repository.ts:81`](../../app/src/api/household/repository.ts#L81) (page) | `Photobook_Options_Left → useHouseholdCaption → fetchHouseholdCaption`<br>[`pages/Photobook/components/Photobook_Options_Left.tsx`](../../app/src/pages/Photobook/components/Photobook_Options_Left.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#611-photobook-handler_closephotobook) | `Photobook` | `closePhotobook of Carousel` | `handler_ClosePhotobook` | – | goes to HouseholdCarousel, HouseholdDetails, previous screen |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.1 Photobook: handler_ClosePhotobook

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Photobook
  participant N as Navigation
  U->>B: closePhotobook of Carousel → handler_ClosePhotobook
  B->>N: go to HouseholdCarousel
  B->>N: go to HouseholdDetails
  B->>N: go to previous screen
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/Photobook/PhotobookPage.tsx:78`](../../app/src/pages/Photobook/PhotobookPage.tsx#L78) | `<Photobook_Carousel>` | `onClosePhotobook` | `handlerClosePhotobook` | `0` | goes to previous screen |
| [2](#622-photobook_carousel-onclosephotobook-other) | [`pages/Photobook/PhotobookPage.tsx:78`](../../app/src/pages/Photobook/PhotobookPage.tsx#L78) | `<Photobook_Carousel>` | `onClosePhotobook` | `handlerClosePhotobook` | `other` | goes to HouseholdCarousel, HouseholdDetails |
| 3 | [`pages/Photobook/components/Photobook_Options_Left.tsx:72`](../../app/src/pages/Photobook/components/Photobook_Options_Left.tsx#L72) | `<CustomContainer>` | `onClicked` | `onClickedInfo` | – | calls DataActionGetHouseholdCaption |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.2.2 Photobook_Carousel: onClosePhotobook (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Photobook_Carousel · PhotobookPage.tsx
  participant N as Navigation
  U->>H: onClosePhotobook → handlerClosePhotobook (other)
  H->>N: go to HouseholdCarousel
  H->>N: go to HouseholdDetails
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_HouseholdId` | LongInteger | yes | [`UBTConnect.Directory_Photobook.Photobook.mvc.js:94`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L94) |
| `In_LocalityId` | LongInteger | yes | [`UBTConnect.Directory_Photobook.Photobook.mvc.js:98`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L98) |

| Block | Target | Parameters | Place |
|---|---|---|---|
| `Photobook` | `HouseholdCarousel` | `In_StartingHouseholdId` = `targetHousehold.householdId` | [`UBTConnect.Directory_Photobook.Photobook.mvc.js:437`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L437) |
| `Photobook` | `HouseholdDetails` | `HouseholdId` = `targetHousehold.householdId` | [`UBTConnect.Directory_Photobook.Photobook.mvc.js:443`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L443) |

### 7.2 React

Declared inputs of the route: `In_HouseholdId: LongInteger`, `In_LocalityId: LongInteger` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/Photobook/PhotobookPage.tsx:44`](../../app/src/pages/Photobook/PhotobookPage.tsx#L44) |

| File | Target | Parameters | Place |
|---|---|---|---|
| `PhotobookPage.tsx` | `HouseholdCarousel` | `In_StartingHouseholdId` = `target.householdId` | [`pages/Photobook/PhotobookPage.tsx:62`](../../app/src/pages/Photobook/PhotobookPage.tsx#L62) |
| `PhotobookPage.tsx` | `HouseholdDetails` | `HouseholdId` = `target.householdId` | [`pages/Photobook/PhotobookPage.tsx:64`](../../app/src/pages/Photobook/PhotobookPage.tsx#L64) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `Photobook` | OnInitialize ([`UBTConnect.Directory_Photobook.Photobook.mvc.js:597`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L597)) | `onInitialize` | 1. JavaScript: IsViewRestoredFromCache ([`L496`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L496))<br>2. Is View Restored From Cache? ([`L503`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L503))<br>3. If isViewRestoredFromCache.isRestoredFromCache ([`L504`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L504))<br>4. Else ([`L506`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L506))<br>5. Set Selected Id ([`L507`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L507))<br>6. SelectedHousehold.Id = In_HouseholdId ([`L509`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L509))<br>7. IsLoading = True ([`L512`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L512)) |
| `Photobook_Carousel` | OnInitialize ([`UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1786`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1786)) | `onInitialize` | 1. If (UBTConnectClientVariables.getPhotobookCarousel_SelectedSpeed() === nullIdentifier()) ([`L1290`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1290))<br>2. PhotobookCarousel_SelectedSpeed = EightSeconds ([`L1292`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1292))<br>3. Set Autoplay settings ([`L1296`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1296))<br>4. AutoplaySettings.Speed = PhotobookCarousel_SelectedSpeed ([`L1298`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1298))<br>5. AutoplaySettings.IsEnabled = False ([`L1301`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1301))<br>6. AutoplaySettings.IsTemporarilyPaused = False ([`L1304`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1304))<br>7. Set Splide Configs ([`L1306`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1306))<br>8. CarouselConfigs.speed = 500 ([`L1308`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1308))<br>9. CarouselConfigs.paginationDirection = "ltr" ([`L1311`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1311))<br>10. CarouselConfigs.waitForTransition = Unset ([`L1314`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1314))<br>11. CarouselConfigs.interval = IdentifierToInteger ([`L1317`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1317))<br>12. CarouselConfigs.wheel = False ([`L1320`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1320))<br>13. CarouselConfigs.flickPower = 400 ([`L1323`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1323))<br>14. CarouselConfigs.flickMaxPages = 1 ([`L1326`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1326))<br>15. CarouselConfigs.resetProgress = False ([`L1329`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1329))<br>16. CarouselConfigs.updateOnMove = True ([`L1332`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1332))<br>17. CarouselConfigs.pauseOnFocus = False ([`L1335`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1335))<br>18. CarouselConfigs.pauseOnHover = False ([`L1338`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1338))<br>19. Initialize Household Vars ([`L1340`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1340))<br>20. StartingPosition = In_SelectedHousehold.Position ([`L1342`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1342))<br>21. CurrentPosition = StartingPosition ([`L1345`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1345))<br>22. CurrentHousehold.HouseholdId = In_Households[CurrentPosition].HouseholdId ([`L1348`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1348))<br>23. CurrentHousehold.HouseholdName = In_Households[CurrentPosition].HouseholdName ([`L1351`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1351))<br>24. CurrentHousehold.Locality = In_Households[CurrentPosition].Locality ([`L1354`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1354)) |
| `Photobook_Carousel` | OnReady ([`UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1804`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1804)) | `onReady` | 1. Execute Action: StartInactivityTimer ([`L671`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L671)) |
| `Photobook_Carousel` | OnDestroy ([`UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1823`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1823)) | `stopInactivityTimer` | 1. JavaScript: ClearTimer ([`L890`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L890))<br>2. CurrentTimer = NullObject ([`L895`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L895))<br>3. Execute Action: SetShowOptions ([`L898`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L898))<br>4. Is Start New? ([`L900`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L900))<br>5. If startNew ([`L901`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L901))<br>6. Execute Action: StartInactivityTimer ([`L903`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L903))<br>7. Else ([`L906`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L906)) |
| `Photobook_Carousel` | OnParametersChanged ([`UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1841`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1841)) | `onParametersChanged` | none |
| `Photobook_Options_Left` | OnInitialize ([`UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js:829`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L829)) | `onInitialize` | 1. JavaScript: IsViewRestoredFromCache ([`L742`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L742))<br>2. Is View Restored From Cache? ([`L749`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L749))<br>3. If isViewRestoredFromCache.isRestoredFromCache ([`L750`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L750))<br>4. Else ([`L752`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L752))<br>5. Execute Action: GetSkeleton_UI_PhotobookCaption ([`L754`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L754))<br>6. Set Skeleton Caption ([`L757`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L757))<br>7. GetHouseholdCaption.HouseholdCaption = GetSkeleton_UI_PhotobookCaption.Caption ([`L759`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L759)) |
| `Photobook_Options_Right` | OnInitialize ([`UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js:838`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js#L838)) | `onInitialize` | 1. SelectedSpeed = In_CurrentSpeed ([`L754`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js#L754)) |
| `Photobook_Options_Right` | OnParametersChanged ([`UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js:859`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js#L859)) | `onParametersChanged` | 1. SelectedSpeed = In_CurrentSpeed ([`L778`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Right.mvc.js#L778)) |
| `Photobook_Options_Player` | OnParametersChanged ([`UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc.js:491`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc.js#L491)) | `onParametersChanged` | 1. Reached the end? ([`L359`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc.js#L359))<br>2. If (in_IsFinalItem && isPlay) ([`L360`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc.js#L360))<br>3. IsPlay = False ([`L362`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc.js#L362))<br>4. Else ([`L365`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Player.mvc.js#L365)) |
| `Photobook_Gallery` | OnInitialize ([`UBTConnect.Directory_Photobook.Photobook_Gallery.mvc.js:646`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Gallery.mvc.js#L646)) | `onInitialize` | 1. Set Selected Position ([`L545`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Gallery.mvc.js#L545))<br>2. SelectedPosition = In_SelectedPosition ([`L547`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Gallery.mvc.js#L547)) |
| `Photobook_Gallery` | OnParametersChanged ([`UBTConnect.Directory_Photobook.Photobook_Gallery.mvc.js:667`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Gallery.mvc.js#L667)) | `onParametersChanged` | 1. Execute Action: CheckIfScrollIsNeeded ([`L522`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Gallery.mvc.js#L522)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 Photobook: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as Photobook
  R->>B: OnInitialize → onInitialize
  B->>B: JavaScript IsViewRestoredFromCache
  Note over B: Is View Restored From Cache?
  alt isViewRestoredFromCache.isRestoredFromCache
    Note over B: no step
  else other
    Note over B: Set Selected Id
    Note over B: SelectedHousehold.Id = In_HouseholdId
    Note over B: IsLoading = True
  end
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `Photobook` | `GetLocalityHouseholdIds` | at start (`0`) | `shown if (SkeletonSection)` ([`UBTConnect.Directory_Photobook.Photobook.mvc.js:229`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L229)), `Photobook_Carousel.In_Households` ([`UBTConnect.Directory_Photobook.Photobook.mvc.js:232`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L232)), `view` ([`UBTConnect.Directory_Photobook.Photobook.mvc.js:233`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L233)), `text` ([`UBTConnect.Directory_Photobook.Photobook.mvc.js:341`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L341)), `action handler_ClosePhotobook` ([`UBTConnect.Directory_Photobook.Photobook.mvc.js:428`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L428)), `action onAfterFetch_GetLocalityHouseholdIds` ([`UBTConnect.Directory_Photobook.Photobook.mvc.js:550`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L550)) | [`UBTConnect.Directory_Photobook.Photobook.mvc.js:358`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L358) |
| `Photobook_Options_Left` | `GetHouseholdCaption` | on demand (`-1`) | `SanitizedHtml.Value` ([`UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js:421`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L421)), `view` ([`UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js:422`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L422)), `text` ([`UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js:444`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L444)), `action onAfterFetch_GetHouseholdCaption` ([`UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js:633`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L633)), `action onInitialize` ([`UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js:760`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L760)) | [`UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js:473`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Options_Left.mvc.js#L473) |

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `PanZoom.tsx` | `useLayoutEffect` (`PanZoom`) | `none (every render)` | no | none | [`pages/Photobook/components/PanZoom.tsx:38`](../../app/src/pages/Photobook/components/PanZoom.tsx#L38) |
| `PanZoom.tsx` | `useEffect` (`PanZoom`) | `[]` | yes | none | [`pages/Photobook/components/PanZoom.tsx:44`](../../app/src/pages/Photobook/components/PanZoom.tsx#L44) |
| `Photobook_Carousel.tsx` | `useEffect` (`Photobook_Carousel`) | `[initial.storedSpeed]` | no | none | [`pages/Photobook/components/Photobook_Carousel.tsx:84`](../../app/src/pages/Photobook/components/Photobook_Carousel.tsx#L84) |
| `Photobook_Carousel.tsx` | `useEffect` (`Photobook_Carousel`) | `[]` | yes | none | [`pages/Photobook/components/Photobook_Carousel.tsx:113`](../../app/src/pages/Photobook/components/Photobook_Carousel.tsx#L113) |
| `Photobook_Gallery.tsx` | `useEffect` (`Photobook_Gallery`) | `[scrollRequest, listId, selectedPosition]` | no | none | [`pages/Photobook/components/Photobook_Gallery.tsx:187`](../../app/src/pages/Photobook/components/Photobook_Gallery.tsx#L187) |

Queries. A query fetches when its component mounts and when its key changes. `Read by` lists what reads the result in the same file.

None.

## 9. Client state

Client variables and browser storage that the route reads or writes. Other screens can read this state.

### 9.1 OutSystems (TST)

| Block | Operation | Variable | Places |
|---|---|---|---|
| `Photobook_Carousel` | get | `UBTConnect.PhotobookCarousel_SelectedSpeed` | [`UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1290`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1290), [`UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1299`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1299), [`UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1525`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1525) |
| `Photobook_Carousel` | set | `UBTConnect.PhotobookCarousel_SelectedSpeed` | [`UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1293`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1293), [`UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js:1522`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook_Carousel.mvc.js#L1522) |

### 9.2 React

| File | Operation | Variable or key | Place |
|---|---|---|---|
| `Photobook_Carousel.tsx` | `clientVar.get` | `UBTConnect.PhotobookCarousel_SelectedSpeed` | [`pages/Photobook/components/Photobook_Carousel.tsx:80`](../../app/src/pages/Photobook/components/Photobook_Carousel.tsx#L80) |
| `Photobook_Carousel.tsx` | `clientVar.set` | `UBTConnect.PhotobookCarousel_SelectedSpeed` | [`pages/Photobook/components/Photobook_Carousel.tsx:85`](../../app/src/pages/Photobook/components/Photobook_Carousel.tsx#L85) |
| `Photobook_Carousel.tsx` | `clientVar.set` | `UBTConnect.PhotobookCarousel_SelectedSpeed` | [`pages/Photobook/components/Photobook_Carousel.tsx:171`](../../app/src/pages/Photobook/components/Photobook_Carousel.tsx#L171) |
| `Photobook_Carousel.tsx` | `clientVar.get` | `UBTConnect.PhotobookCarousel_SelectedSpeed` | [`pages/Photobook/components/Photobook_Carousel.tsx:172`](../../app/src/pages/Photobook/components/Photobook_Carousel.tsx#L172) |

## 10. Access

Who can open the route, and the role checks in the screen and block code.

| Side | Rule | Place |
|---|---|---|
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Directory_Photobook.Photobook.mvc.js:622`](../../migration/screens/Photobook/analysis/sources/raw/UBTConnect.Directory_Photobook.Photobook.mvc.js#L622) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Directory_Photobook` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Carousel` | `OutSystemsUI_2_23` | [`components/ui/Carousel/Carousel.tsx`](../../app/src/components/ui/Carousel/Carousel.tsx) | 0 |
| `UBT_LazyImage` | `UBTConnect_Utils` | [`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) | 0 |
| `LazyImage` | `UBTConnectLibrary` | [`components/ui/LazyImage/LazyImage.tsx`](../../app/src/components/ui/LazyImage/LazyImage.tsx) | 0 |
| `PanZoom` | `PanZoom` | [`pages/Photobook/components/PanZoom.tsx`](../../app/src/pages/Photobook/components/PanZoom.tsx) | 0 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `TouchEvents` | `OutSystemsUI_2_23` | [`components/ui/TouchEvents/TouchEvents.tsx`](../../app/src/components/ui/TouchEvents/TouchEvents.tsx) | 0 |

### React

| File | User actions |
|---|---|
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |

<details><summary>User actions of the shared components (2)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

None.
