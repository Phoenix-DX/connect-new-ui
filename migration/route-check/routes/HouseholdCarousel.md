# HouseholdCarousel: OutSystems (TST) and React

The route `/UBTConnect/HouseholdCarousel`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-06. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/HouseholdCarousel/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 19 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/sources/runtime/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `Directory_EntityDetailsActions`, `HouseholdDetails_Block`, `UBTConnect`, `js`, `js`, `HorizontalTagList`, `TagContent`, `UBTConnectLibrary`, `js`, `ShareSheet`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/HouseholdCarousel` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Directory_Household.HouseholdCarousel` | TST compiled code |
| UI flow | `Directory_Household` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/HouseholdCarousel/HouseholdCarouselPage.tsx`](../../../app/src/pages/HouseholdCarousel/HouseholdCarouselPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect C2EnableCarousel = false → HouseholdDetails | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/HouseholdCarousel/parity`](../../screens/HouseholdCarousel/parity) | `route.py parity` |
| Code read | OutSystems: 2 files of the UI flow, 44 shared blocks, 29 app shell files. React: 249 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 16: React makes 13, **0 missing**, 3 not a gap of the web app |
| Differences found | **0** (+ 3 not a gap of the web app) (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 2: see the last section |
| User actions of the route (own code) | OutSystems: 8. React: 1 |
| Screen and blocks of the UI flow with a React port | 2 of 2 |
| Navigation targets found in React | 13 of 13 |
| Shared blocks and components on the route | OutSystems 44, React 11 with user actions: see the last section |
| App shell on this route | 3 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

### Not a gap of the web app

Missing TST calls that a rule of `route-check/config.json` (`notApplicable`, user 2026-11-05) sets aside. The rule names the fact and its evidence; the chain is the one of the TST code.

**Declared, never run (navigation).** The navigation sits in a client action that no event, lifecycle step or action of the compiled code calls or binds (`tools/os_call_graph.py dead_client_actions`): TST cannot reach it.

- Navigation to `Profile` in `HouseholdDetails_Block.handler_OnMenuEdit`.

**Native only.** TST offers the external share options only when AppManager_GetIsNative is true; the React app is never native. Evidence: ShareSheet Action_SetExternalShareOptions appends Share via, Copy link, WhatsApp, Signal and Outlook inside `if (AppManager_GetIsNative)` (UBTConnect_Utils.CW_Share.ShareSheet.mvc.js:2418-2475); SharePopup appends "Share to other apps" after AppManager_GetIsNative (UBTConnect_Utils.CW_CTA_PopUps.SharePopup.mvc.js:274-288); ShareEntity_ByURL calls the SocialSharing plugin (UBTConnect_Utils.controller.js:5319+); app/src/platform/session/clientVars.ts:40 (DeviceInfo_IsNative false).

- `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`. Chain on TST: onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → event onClick of CircleButton_WithLabel → ShareSheet.handler_OnClickExternalOption → server CS_CreateShareProfileLink.
- `UBTConnect_Utils/ActionCS_CreateShareProfileLink`. Chain on TST: event event_Clicked of ContactPopup → SharePopup.onClick_CallButton → … → UBTConnect_Utils.shareEntity_ByURL → server CS_CreateShareProfileLink.

**Telemetry (decision U17).** The call belongs to the application-event pipeline (zOnApplicationEvent_Wrapper → getAppEventName → cacheLocalApplicationEvents). Telemetry is not wired in the mock phase (decision U17). Evidence: Connect2_LegacyShared.controller.js:989-1240 (CacheLocalApplicationEvents); migration/app-shell.spec.md:349,384 (U17: no telemetry in the mock phase); app/src/lib/orbit/actions.ts:318-321.

- `Connect2_LegacyShared/ActionGetAllApplicationEvents`. Chain on TST: SharePopup.onClick_CallButton → event event_ShareToOthers of SharePopup → … → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents.


## 4. Questions

None.

React reaches 2 more calls without a TST chain on this route only through shared containers, components or app code. The last section lists them, not this one.

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
| 1 | `Connect2_LegacyShared/ActionGetAllApplicationEvents` | server action | `Connect2_LegacyShared` | SharePopup.onClick_CallButton → event event_ShareToOthers of SharePopup → … → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents | no | – | – | not applicable (telemetry) |
| 2 | `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` | data action | `Directory_EntityDetailsActions` | Directory_EntityDetailsActions.action_AsyncRefresh_ContactDetails → Directory_EntityDetailsActions.DataActionFetchContactDetails<br>Directory_EntityDetailsActions fetch at start → Directory_EntityDetailsActions.DataActionFetchContactDetails | yes | `fetchEntityContactDetails()` [`api/message/repository.ts:294`](../../../app/src/api/message/repository.ts#L294) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → fetchEntityContactDetails`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 3 | `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes` | data action | `Directory_EntityDetailsActions` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → Directory_EntityDetailsActions.action_RefreshFetchNotes → Directory_EntityDetailsActions.DataActionFetchNotes<br>Directory_EntityDetailsActions.OnReady → Directory_EntityDetailsActions.onReady → Directory_EntityDetailsActions.action_RefreshFetchNotes → Directory_EntityDetailsActions.DataActionFetchNotes<br>Directory_EntityDetailsActions fetch at start → Directory_EntityDetailsActions.DataActionFetchNotes | yes | `fetchEntityNotes()` [`api/note/repository.ts:47`](../../../app/src/api/note/repository.ts#L47) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → fetchEntityNotes`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 4 | `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHouseHold_Gallery` | data action | `HouseholdDetails_Block` | HouseholdDetails_Block.refresh_GetHouseHold_Gallery → HouseholdDetails_Block.DataActionGetHouseHold_Gallery<br>HouseholdDetails_Block fetch at start → HouseholdDetails_Block.DataActionGetHouseHold_Gallery | no | `fetchHouseholdGallery()` [`api/household/repository.ts:64`](../../../app/src/api/household/repository.ts#L64) (page) | `HouseholdDetailsContainer → useHouseholdDetails → fetchHouseholdGallery`<br>[`containers/HouseholdDetails/HouseholdDetailsContainer.tsx`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx) | implemented |
| 5 | `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold` | data action | `HouseholdDetails_Block` | HouseholdDetails_Block.refresh_GetHouseholdDetail → HouseholdDetails_Block.DataActionGetHousehold<br>HouseholdDetails_Block.OnParametersChanged → HouseholdDetails_Block.screenEvent_OnParametersChanged → HouseholdDetails_Block.DataActionGetHousehold<br>HouseholdDetails_Block fetch at start → HouseholdDetails_Block.DataActionGetHousehold | yes | `fetchHousehold()` [`api/household/repository.ts:48`](../../../app/src/api/household/repository.ts#L48) (page) | `HouseholdDetailsContainer → useHouseholdDetails → fetchHousehold`<br>[`containers/HouseholdDetails/HouseholdDetailsContainer.tsx`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx) | implemented |
| 6 | `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold_Coordinates` | data action | `HouseholdDetails_Block` | HouseholdDetails_Block.refresh_GetHouseholdCoordinates → HouseholdDetails_Block.DataActionGetHousehold_Coordinates<br>HouseholdDetails_Block fetch at start → HouseholdDetails_Block.DataActionGetHousehold_Coordinates | yes | `fetchHouseholdCoordinates()` [`api/household/repository.ts:54`](../../../app/src/api/household/repository.ts#L54) (page) | `HouseholdDetailsContainer → useHouseholdDetails → fetchHouseholdCoordinates`<br>[`containers/HouseholdDetails/HouseholdDetailsContainer.tsx`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx) | implemented |
| 7 | `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote` | service action | `NotesSheet` | NotesSheet.handler_OnSubmitNote → server AddNote | no | `addNote()` [`api/note/repository.ts:54`](../../../app/src/api/note/repository.ts#L54) (page) | `NotesSheet → addNote`<br>[`components/note/NotesSheet/NotesSheet.tsx`](../../../app/src/components/note/NotesSheet/NotesSheet.tsx) | implemented |
| 8 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink` | server action | `ShareSheet` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → event onClick of CircleButton_WithLabel → ShareSheet.handler_OnClickExternalOption → server CS_CreateShareProfileLink | no | – | – | not applicable (nativeOnly) |
| 9 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject` | server action | `ShareSheet` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → ShareSheet.action_SubmitShare → server CS_ShareObject<br>ShareSheet.handler_OnClickSend → ShareSheet.action_SubmitShare → server CS_ShareObject | no | `csShareObject()` [`api/share/shareSheet.ts:25`](../../../app/src/api/share/shareSheet.ts#L25) (page) | `ShareSheetContainer → useShareSheet → csShareObject`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 10 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers` | data action | `ShareSheet` | ShareSheet.handler_InputEventSubmit → ShareSheet.DataActionGetAvailableMembers<br>ShareSheet fetch at start → ShareSheet.DataActionGetAvailableMembers | no | `fetchAvailableMembers()` [`api/member/repository.ts:12`](../../../app/src/api/member/repository.ts#L12) (page) | `ShareSheetContainer → useShareSheet → useAvailableMembersQuery → fetchAvailableMembers`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 11 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared` | data action | `ShareSheet` | ShareSheet.OnParametersChanged → ShareSheet.screenEvent_OnParametersChanged → ShareSheet.DataActionGetRecentlyShared<br>ShareSheet fetch at start → ShareSheet.DataActionGetRecentlyShared | no | `fetchRecentlyShared()` [`api/share/shareSheet.ts:14`](../../../app/src/api/share/shareSheet.ts#L14) (page) | `ShareSheetContainer → useShareSheet → useRecentlySharedQuery → fetchRecentlyShared`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 12 | `UBTConnect/ActionUpdateItem_MarkAsRead` | server action | `UBTConnect` | EntitiesCarousel.handler_EntitiesCarousel_Moved → event event_Moved of EntitiesCarousel → HouseholdCarousel.handler_EventMoved → UBTConnect.directory_Updates_CarouselSwipeAction → server UpdateItem_MarkAsRead | no | `markCarouselUpdateItemAsRead()` [`api/update/repository.ts:67`](../../../app/src/api/update/repository.ts#L67) (page) | `HouseholdCarousel → useHouseholdCarousel → markCarouselUpdateItemAsRead`<br>[`pages/HouseholdCarousel/HouseholdCarouselPage.tsx`](../../../app/src/pages/HouseholdCarousel/HouseholdCarouselPage.tsx) | implemented |
| 13 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |
| 14 | `UBTConnect_Utils/ActionCS_CreateShareProfileLink` | server action | `UBTConnect_Utils` | event event_Clicked of ContactPopup → SharePopup.onClick_CallButton → … → UBTConnect_Utils.shareEntity_ByURL → server CS_CreateShareProfileLink | no | – | – | not applicable (nativeOnly) |
| 15 | `UBTConnect_Utils/ServiceAPIAddBookmark2` | service action | `UBTConnect_Utils` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server AddBookmark2<br>onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server AddBookmark2 | no | `addC2Bookmark()` [`api/bookmark/repository.ts:16`](../../../app/src/api/bookmark/repository.ts#L16) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → bookmarkServerActions → addC2Bookmark`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 16 | `UBTConnect_Utils/ServiceAPIDeleteBookmarkByBookmarkId2` | service action | `UBTConnect_Utils` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server DeleteBookmarkByBookmarkId2<br>onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server DeleteBookmarkByBookmarkId2 | no | `deleteC2Bookmark()` [`api/bookmark/repository.ts:27`](../../../app/src/api/bookmark/repository.ts#L27) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → bookmarkServerActions → deleteC2Bookmark`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `HouseholdCarousel` | `event_Moved of EntitiesCarousel` | `handler_EventMoved` | – | calls UpdateItem_MarkAsRead |
| 2 | `HouseholdDetails_Block` | `edit of KebabButtonMenu` | `handler_OnMenuEdit` | – | goes to Profile |
| 3 | `HouseholdDetails_Block` | `share of KebabButtonMenu` | `handler_OnShare` | – | shows a message |
| 4 | `HouseholdDetails_Block` | `clicked of CustomContainer` | `onClick_NavigateToLocality` | – | goes to Locality_Details |
| 5 | `HouseholdDetails_Block` | `clicked of CustomContainer` | `onClick_NavigateToSupperMeeting` | – | goes to SupperMeeting_Details |
| [6](#616-householddetails_block-handler_onclickphotobook) | `HouseholdDetails_Block` | `clicked of CustomContainer` | `handler_OnClickPhotobook` | – | goes to Photobook; shows a message |
| 7 | `HouseholdDetails_Block` | `event_NonMemberOnClick of Block` | `handler_OnClickNavigateTomarriedChildren_Household` | – | goes to HouseholdDetails |
| 8 | `HouseholdDetails_Block` | `event_MemberOnClick of Block` | `handler_OnClickMember` | – | goes to Household_Relations |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.6 HouseholdDetails_Block: handler_OnClickPhotobook

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HouseholdDetails_Block
  participant N as Navigation
  U->>B: clicked of CustomContainer → handler_OnClickPhotobook
  B->>N: go to Photobook
  Note over B: message "Photobook is currently unavailable for this household. Please try again later."
```


</details>


### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/HouseholdCarousel/HouseholdCarouselPage.tsx:56`](../../../app/src/pages/HouseholdCarousel/HouseholdCarouselPage.tsx#L56) | `<EntitiesCarousel>` | `onEventMoved` | `carousel.onEventMoved` | – | calls ActionUpdateItem_MarkAsRead |

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/sources/raw/` (the route's `analysis/manifest.json` names them); the files that TST changed after the capture are read from `migration/sources/runtime/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_StartingHouseholdId` | LongInteger | yes | [`UBTConnect.Directory_Household.HouseholdCarousel.mvc.js:74`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L74) |

| Block | Target | Parameters | Place |
|---|---|---|---|
| `HouseholdDetails_Block` | `Household_Relations` | `HouseholdId` = `householdId`<br>`MemberId` = `meberId` | [`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2063`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2063) |
| `HouseholdDetails_Block` | `Photobook` | `In_HouseholdId` = `householdId`<br>`In_LocalityId` = `getHousehold.household.householdCard.household_Card_Content.localityId` | [`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2335`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2335) |
| `HouseholdDetails_Block` | `HouseholdDetails` | `HouseholdId` = `in_HouseholdId` | [`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2371`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2371) |
| `HouseholdDetails_Block` | `SupperMeeting_Details` | `In_SubdivsionId` = `getHousehold.household.householdCard.household_Card_Content.supperMeetingId` | [`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2548`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2548) |
| `HouseholdDetails_Block` | `Locality_Details` | `PreloadedLocalityLabel` = `getHousehold.household.householdCard.household_Card_Content.localityName`<br>`LocalityId` = `getHousehold.household.householdCard.household_Card_Content.localityId` | [`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2728`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2728) |

### 7.2 React

Declared inputs of the route: `In_StartingHouseholdId: LongInteger` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/HouseholdCarousel/HouseholdCarouselPage.tsx:20`](../../../app/src/pages/HouseholdCarousel/HouseholdCarouselPage.tsx#L20) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `HouseholdCarousel` | OnInitialize ([`UBTConnect.Directory_Household.HouseholdCarousel.mvc.js:636`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L636)) | `screenEvent_OnInitialize` | 1. If householdPreload.carouselHouseholdItem.isEmpty ([`L462`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L462))<br>2. Execute Action: GetPreloadObject ([`L464`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L464))<br>3. Execute Action: AssignFromObject ([`L468`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L468))<br>4. EntitiesCarousel_Items = HouseholdPreload.CarouselHouseholdItem ([`L472`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L472))<br>5. Execute Action: ListIndexOf ([`L478`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L478))<br>6. If ((listIndexOf.position) !== (-1)) ([`L483`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L483))<br>7. StartingPosition = ListIndexOf.Position ([`L485`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L485))<br>8. Else ([`L488`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L488))<br>9. Else ([`L492`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L492)) |
| `HouseholdDetails_Block` | OnInitialize ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:3123`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L3123)) | `screenEvent_OnInitialize` | 1. Execute Action: ScreenEvent_OnReady ([`L2277`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2277))<br>2. If tagsList.isEmpty ([`L2279`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2279))<br>3. Execute Action: ListAppend_About ([`L2281`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2281))<br>4. Execute Action: ListAppend_Photos ([`L2290`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2290))<br>5. Set Selected Tag ([`L2298`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2298))<br>6. TagsList_SelectedTag = TagsList_Id_About ([`L2300`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2300))<br>7. Else ([`L2303`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2303)) |
| `HouseholdDetails_Block` | OnParametersChanged ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:3144`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L3144)) | `screenEvent_OnParametersChanged` | 1. If preview.usePreview ([`L2902`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2902))<br>2. UserAge_Visibility = Preview.UI_AccountForm.AccountForm_PersonalInformation.ShowLifeCycleDates ([`L2904`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2904))<br>3. Refresh Query: GetHousehold ([`L2907`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2907))<br>4. If (isSkeletonOnly && !(in_IsSkeletonOnly)) ([`L2914`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2914))<br>5. IsSkeletonOnly = False ([`L2916`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2916))<br>6. JavaScript: Refreshes ([`L2919`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2919))<br>7. Else ([`L2926`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2926)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 HouseholdCarousel: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as HouseholdCarousel
  R->>B: OnInitialize → screenEvent_OnInitialize
  alt householdPreload.carouselHouseholdItem.isEmpty
    B->>B: action GetPreloadObject
    B->>B: action AssignFromObject
    Note over B: EntitiesCarousel_Items = HouseholdPreload.CarouselHouseholdItem
    B->>B: action ListIndexOf
    alt ((listIndexOf.position) !== (-1))
      Note over B: StartingPosition = ListIndexOf.Position
    else other
      Note over B: no step
    end
  else other
    Note over B: no step
  end
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `HouseholdDetails_Block` | `GetHousehold_Coordinates` | on demand (`-1`) | `AddressPopup_Wrapper.In_Coordinates` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:776`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L776)), `view` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:777`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L777)), `text` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:797`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L797)) | [`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1947`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L1947) |
| `HouseholdDetails_Block` | `GetHouseHold_Gallery` | on demand (`-1`) | `view` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1288`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L1288)), `text` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1406`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L1406)) | [`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1948`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L1948) |
| `HouseholdDetails_Block` | `GetHousehold` | on demand (`-1`) | `SkeletonSection.In_IsLoading` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:350`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L350)), `view` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:401`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L401)), `ImageCard__Content.In_ShowSubtitle` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:465`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L465)), `KebabButtonMenu.In_DisableShare` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:577`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L577)), `text` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:626`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L626)), `shown if (KebabButtonMenu)` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:627`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L627)), `Icon.visible` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:728`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L728)), `AddressPopup_Wrapper.In_Address` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:774`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L774)), `CustomText.In_Text` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1020`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L1020)), `HouseholdDetails_Members_Block.In_NonHouseholdMembers` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1765`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L1765)), `HouseholdDetails_Members_Block.In_IsLoading` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1769`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L1769)), `HouseholdDetails_Members_Block.In_HouseholdMembers` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1770`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L1770)), `action action_HandlePreviewData` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2218`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2218)), `action handler_OnClickPhotobook` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2332`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2332)), `action onClick_NavigateToSupperMeeting` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2543`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2543)), `action onAfterFetch_GetHouseholdDetail` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2586`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2586)), `action onClick_NavigateToLocality` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2723`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2723)), `action screenEvent_OnReady` ([`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:2842`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L2842)) | [`UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js:1949`](../../sources/runtime/UBTConnect.Directory_Household.HouseholdDetails_Block.mvc.js#L1949) |

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

| File | Operation | Variable or key | Place |
|---|---|---|---|
| `householdCarouselActions.ts` | `clientVar.set` | `UBTConnect.Directory_Updates_UnreadCount` | [`pages/HouseholdCarousel/hooks/householdCarouselActions.ts:94`](../../../app/src/pages/HouseholdCarousel/hooks/householdCarouselActions.ts#L94) |
| `householdCarouselActions.ts` | `clientVar.get` | `UBTConnect.Directory_Updates_UnreadCount` | [`pages/HouseholdCarousel/hooks/householdCarouselActions.ts:94`](../../../app/src/pages/HouseholdCarousel/hooks/householdCarouselActions.ts#L94) |

## 10. Access

Who can open the route, and the role checks in the screen and block code.

| Side | Rule | Place |
|---|---|---|
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Directory_Household.HouseholdCarousel.mvc.js:661`](../../sources/raw/UBTConnect.Directory_Household.HouseholdCarousel.mvc.js#L661) |
| React | access `member`, lock `enforce`, flag redirect C2EnableCarousel = false → HouseholdDetails | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Directory_Household` not in `migration/sources/shell/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../../app/src/components/layout/DetailLayout/DetailLayout.tsx), [`containers/DetailLayout/DetailLayoutContainer.tsx`](../../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx) | 1 |
| `EntitiesCarousel` | `UBTConnect` | [`components/directory/EntitiesCarousel/EntitiesCarousel.tsx`](../../../app/src/components/directory/EntitiesCarousel/EntitiesCarousel.tsx) | 0 |
| `Carousel` | `OutSystemsUI_2_23` | [`components/ui/Carousel/Carousel.tsx`](../../../app/src/components/ui/Carousel/Carousel.tsx) | 0 |
| `EntitiesCarousel_Element` | `UBTConnect` | [`components/directory/EntitiesCarouselElement/EntitiesCarouselElement.tsx`](../../../app/src/components/directory/EntitiesCarouselElement/EntitiesCarouselElement.tsx) | 0 |
| `EntitiesCarousel_HouseholdDetails` | `UBTConnect` | [`components/directory/CarouselHouseholdDetails/CarouselHouseholdDetails.tsx`](../../../app/src/components/directory/CarouselHouseholdDetails/CarouselHouseholdDetails.tsx) | 0 |
| `SubLayout_DirectoryDetailScreen` | `UBTConnect` | [`components/layout/DirectoryDetailLayout/DirectoryDetailLayout.tsx`](../../../app/src/components/layout/DirectoryDetailLayout/DirectoryDetailLayout.tsx) | 0 |
| `ImageCard_LazyLoading` | `UBTConnectLibrary` | [`components/ui/ImageCard/ImageCard.tsx`](../../../app/src/components/ui/ImageCard/ImageCard.tsx) | 0 |
| `UBT_LazyImage` | `UBTConnect_Utils` | [`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../../../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) | 0 |
| `LazyImage` | `UBTConnectLibrary` | [`components/ui/LazyImage/LazyImage.tsx`](../../../app/src/components/ui/LazyImage/LazyImage.tsx) | 0 |
| `CarouselTag` | `UBTConnect` | [`components/directory/CarouselTag/CarouselTag.tsx`](../../../app/src/components/directory/CarouselTag/CarouselTag.tsx) | 0 |
| `TagContent` | `UBTConnectLibrary` | [`components/ui/TagContent/TagContent.tsx`](../../../app/src/components/ui/TagContent/TagContent.tsx) | 0 |
| `ImageCard__Content` | `UBTConnectLibrary` | [`components/ui/ImageCardContent/ImageCardContent.tsx`](../../../app/src/components/ui/ImageCardContent/ImageCardContent.tsx) | 0 |
| `HorizontalTagList` | `UBTConnectLibrary` | [`components/ui/HorizontalTagList/HorizontalTagList.tsx`](../../../app/src/components/ui/HorizontalTagList/HorizontalTagList.tsx) | 0 |
| `TagToggle` | `UBTConnectLibrary` | [`components/ui/TagToggle/TagToggle.tsx`](../../../app/src/components/ui/TagToggle/TagToggle.tsx) | 0 |
| `AddressPopup_Wrapper` | `UBTConnect_Utils` | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx`](../../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx) | 1 |
| `AddressPopup` | `UBTConnect_Utils` | [`components/contact/AddressPopup/AddressPopup.tsx`](../../../app/src/components/contact/AddressPopup/AddressPopup.tsx) | 0 |
| `ContactPopup` | `UBTConnect_Utils` | [`components/contact/ContactPopup/ContactPopup.tsx`](../../../app/src/components/contact/ContactPopup/ContactPopup.tsx) | 0 |
| `SeeMoreSection` | `UBTConnectLibrary` | [`components/ui/SeeMoreSection/SeeMoreSection.tsx`](../../../app/src/components/ui/SeeMoreSection/SeeMoreSection.tsx) | 0 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `Directory_EntityDetailsActions` | `UBTConnect` | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx), [`containers/EntityDetailsActions/entityDetailsActionsState.ts`](../../../app/src/containers/EntityDetailsActions/entityDetailsActionsState.ts), [`containers/EntityDetailsActions/useEntityDetailsActions.ts`](../../../app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts) | 5 |
| `ActionsMenu` | `UBTConnectLibrary` | [`components/ui/ActionsMenu/ActionsMenu.tsx`](../../../app/src/components/ui/ActionsMenu/ActionsMenu.tsx) | 0 |
| `CircleButton_IconPrimary` | `UBTConnectLibrary` | [`components/ui/CircleButtonIconPrimary/CircleButtonIconPrimary.tsx`](../../../app/src/components/ui/CircleButtonIconPrimary/CircleButtonIconPrimary.tsx) | 0 |
| `CircleButton_WithLabel` | `UBTConnectLibrary` | [`components/ui/CircleButtonWithLabel/CircleButtonWithLabel.tsx`](../../../app/src/components/ui/CircleButtonWithLabel/CircleButtonWithLabel.tsx) | 0 |
| `CircleButton` | `UBTConnectLibrary` | [`components/ui/CircleButton/CircleButton.tsx`](../../../app/src/components/ui/CircleButton/CircleButton.tsx) | 0 |
| `ContactByMessage_Wrapper` | `UBTConnect_Utils` | [`components/contact/ContactByMessage/ContactByMessage.tsx`](../../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx) | 1 |
| `ContactPopup_ByMessage` | `UBTConnect_Utils` | [`components/contact/ContactPopupByMessage/ContactPopupByMessage.tsx`](../../../app/src/components/contact/ContactPopupByMessage/ContactPopupByMessage.tsx) | 0 |
| `ContactPopup_ByPhone` | `UBTConnect_Utils` | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| `SharePopup` | `UBTConnect_Utils` | [`components/share/SharePopup/SharePopup.tsx`](../../../app/src/components/share/SharePopup/SharePopup.tsx) | 0 |
| `HouseholdDetails_Members_Block` | `UBTConnect` | [`components/household/HouseholdMemberList/HouseholdMemberList.tsx`](../../../app/src/components/household/HouseholdMemberList/HouseholdMemberList.tsx) | 1 |
| `SubLayout_DirectoryDetailScreen_Section` | `UBTConnect` | [`components/layout/DirectoryDetailSection/DirectoryDetailSection.tsx`](../../../app/src/components/layout/DirectoryDetailSection/DirectoryDetailSection.tsx) | 0 |
| `SubLayout_Section` | `UBTConnectLibrary` | [`components/layout/SectionLayout/SectionLayout.tsx`](../../../app/src/components/layout/SectionLayout/SectionLayout.tsx) | 0 |
| `Member_ListItem` | `UBTConnectLibrary` | [`components/household/MemberListItem/MemberListItem.tsx`](../../../app/src/components/household/MemberListItem/MemberListItem.tsx) | 0 |
| `Columns_Three` | `UBTConnectLibrary` | [`components/ui/ColumnsThree/ColumnsThree.tsx`](../../../app/src/components/ui/ColumnsThree/ColumnsThree.tsx) | 0 |
| `Columns3` | `OutSystemsUI_2_23` | [`components/ui/Columns3/Columns3.tsx`](../../../app/src/components/ui/Columns3/Columns3.tsx) | 0 |
| `NonMember_ListItem` | `UBTConnectLibrary` | [`components/household/NonMemberListItem/NonMemberListItem.tsx`](../../../app/src/components/household/NonMemberListItem/NonMemberListItem.tsx) | 0 |
| `EntitiesCarousel_HeaderGenerator` | `UBTConnect` | [`components/directory/EntitiesCarouselHeader/EntitiesCarouselHeader.tsx`](../../../app/src/components/directory/EntitiesCarouselHeader/EntitiesCarouselHeader.tsx) | 0 |
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../../app/src/components/ui/Badge/Badge.tsx) | 0 |
| `NotesSheet` | `UBTConnect_Utils` | [`components/note/NotesSheet/NotesSheet.tsx`](../../../app/src/components/note/NotesSheet/NotesSheet.tsx) | 1 |
| `ShareSheet` | `UBTConnect_Utils` | [`containers/ShareSheet/ShareSheetContainer.tsx`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx), [`containers/ShareSheet/components/ShareSheetFirstStep.tsx`](../../../app/src/containers/ShareSheet/components/ShareSheetFirstStep.tsx), [`containers/ShareSheet/components/ShareSheetSearchStep.tsx`](../../../app/src/containers/ShareSheet/components/ShareSheetSearchStep.tsx), [`containers/ShareSheet/shareSheetState.ts`](../../../app/src/containers/ShareSheet/shareSheetState.ts), [`containers/ShareSheet/useShareSheet.ts`](../../../app/src/containers/ShareSheet/useShareSheet.ts) | 4 |

<details><summary>User actions of the shared blocks (20)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 2 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 3 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 4 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |
| 6 | `Directory_EntityDetailsActions` | `event_Click_Bookmark of ActionsMenu`<br>`event_Click_Unbookmark of ActionsMenu` | `handle_Bookmark` | – | calls AddBookmark2, DeleteBookmarkByBookmarkId2 |
| 7 | `Directory_EntityDetailsActions` | `event_Cancel of Wrapper`<br>`event_Click_Email of ActionsMenu` | `handle_Mail` | – | goes to ContactByEmailOneSchoolGlobal |
| 8 | `Directory_EntityDetailsActions` | `event_Email of Wrapper` | `handle_Mail_Page` | – | goes to ContactByEmailMember |
| 9 | `Directory_EntityDetailsActions` | `event_ShareToConnect of SharePopup` | `handle_Share_Connect` | – | goes to LegacyShareObject |
| 10 | `Directory_EntityDetailsActions` | `event_ShareToOthers of SharePopup` | `handle_Share_Others` | – | calls GetAllApplicationEvents, CS_CreateShareProfileLink, AppManager_SynchAppContext |
| 11 | `HouseholdDetails_Members_Block` | `click of Icon`<br>`onClickPerson of ListItem` | `handler_NonMemberOnClick` | – | asks for a confirmation |
| 12 | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |
| 13 | `AddressPopup_Wrapper` | `event_OpenInGoogleMaps of AddressPopup`<br>`event_OpenInMaps of AddressPopup` | `handler_OpenInMapsOrGoogleMaps` | – | goes to URL mapsAddress; opens an external link; shows a message |
| 14 | `ContactByMessage_Wrapper` | `event_SelectedMessageChannel of ByMessage` | `handler_SelectedMessageChannel` | – | opens an external link |
| 15 | `ContactPopup_ByPhone` | `event_Clicked of ContactPopup` | `onClick_CallButton` | – | opens an external link |
| 16 | `NotesSheet` | `onSubmitRequested of AddNote` | `handler_OnSubmitNote` | – | calls AddNote; shows a message |
| 17 | `ShareSheet` | `onClick of WithLabel` | `handler_OnClickRecentMember` | – | calls CS_ShareObject; shows a message; asks for a confirmation |
| 18 | `ShareSheet` | `onClick of WithLabel` | `handler_OnClickExternalOption` | – | calls CS_CreateShareProfileLink |
| 19 | `ShareSheet` | `click of Icon` | `handler_SearchResultItemOnSelect` | – | shows a message |
| 20 | `ShareSheet` | `buttonOnClick of Button` | `handler_OnClickSend` | – | calls CS_ShareObject; shows a message |

</details>


### React

| File | User actions |
|---|---|
| [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx`](../../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx) | 2 |
| [`components/contact/ContactByMessage/ContactByMessage.tsx`](../../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx) | 1 |
| [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| [`components/layout/BottomBar/BottomBar.tsx`](../../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/note/NotesSheet/NotesSheet.tsx`](../../../app/src/components/note/NotesSheet/NotesSheet.tsx) | 1 |
| [`containers/DetailLayout/DetailLayoutContainer.tsx`](../../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx) | 1 |
| [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | 7 |
| [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx) | 7 |
| [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) | 2 |
| [`containers/ShareSheet/ShareSheetContainer.tsx`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | 5 |

<details><summary>User actions of the shared components (42)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Home` | goes to HomeFeed |
| 4 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 5 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Updates` | goes to Updates_SingleList |
| 6 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 7 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Menu` | goes to Menu |
| 8 | [`components/layout/BottomBar/BottomBar.tsx:130`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 9 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Home` | goes to HomeFeed |
| 10 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| 11 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Updates` | goes to Updates_SingleList |
| 12 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Bookmarks` | goes to Bookmarks |
| 13 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Menu` | goes to Menu |
| 14 | [`components/layout/BottomBar/BottomBar.tsx:140`](../../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| 15 | [`containers/DetailLayout/DetailLayoutContainer.tsx:66`](../../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx#L66) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |
| 16 | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:138`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L138) | `<HouseholdDetailsView>` | `onEdit` | `details.onEdit` | – | goes to Profile |
| 17 | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:139`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L139) | `<HouseholdDetailsView>` | `onShare` | `details.onShare` | – | shows a message |
| 18 | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:140`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L140) | `<HouseholdDetailsView>` | `onLocalityClick` | `details.onLocalityClick` | – | goes to Locality_Details |
| 19 | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:141`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L141) | `<HouseholdDetailsView>` | `onSupperMeetingClick` | `details.onSupperMeetingClick` | – | goes to SupperMeeting_Details |
| 20 | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:142`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L142) | `<HouseholdDetailsView>` | `onPhotobookClick` | `details.onPhotobookClick` | – | goes to Photobook; shows a message |
| 21 | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:143`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L143) | `<HouseholdDetailsView>` | `onMemberClick` | `details.onMemberClick` | – | goes to Household_Relations |
| 22 | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:144`](../../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L144) | `<HouseholdDetailsView>` | `onNonMemberClick` | `details.onNonMemberClick` | – | goes to HouseholdDetails; asks for a confirmation |
| 23 | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx:110`](../../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx#L110) | `<AddressPopup>` | `onEventOpenInGoogleMaps` | `inline` | – | opens an external link; shows a message |
| 24 | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx:113`](../../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx#L113) | `<AddressPopup>` | `onEventOpenInMaps` | `inline` | – | opens an external link; shows a message |
| 25 | [`containers/ShareSheet/ShareSheetContainer.tsx:111`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L111) | `<ShareSheetFirstStep>` | `onClickRecentMember` | `onClickRecentMember` | – | calls ActionCS_ShareObject; shows a message; asks for a confirmation |
| 26 | [`containers/ShareSheet/ShareSheetContainer.tsx:127`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L127) | `<ShareSheetSearchStep>` | `onSubmit` | `onSubmit` | – | setSearchFetchId(): a query fetches again |
| 27 | [`containers/ShareSheet/ShareSheetContainer.tsx:129`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L129) | `<ShareSheetSearchStep>` | `onSelect` | `onSelect` | – | shows a message |
| 28 | [`containers/ShareSheet/ShareSheetContainer.tsx:130`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L130) | `<ShareSheetSearchStep>` | `onClickUpgradeSubscription` | `onClickUpgradeSubscription` | – | opens an external link |
| 29 | [`containers/ShareSheet/ShareSheetContainer.tsx:148`](../../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L148) | `<ActionButton>` | `onButtonOnClick` | `onClickSend` | – | calls ActionCS_ShareObject; shows a message |
| 30 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:100`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L100) | `<ActionsMenu>` | `onEventClickBookmark` | `onClickBookmark` | – | calls ServiceAPIDeleteBookmarkByBookmarkId2, ServiceAPIAddBookmark2; shows a message; calls the prop onOnChangeBookmark() |
| 31 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:101`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L101) | `<ActionsMenu>` | `onEventClickUnbookmark` | `onClickBookmark` | – | calls ServiceAPIDeleteBookmarkByBookmarkId2, ServiceAPIAddBookmark2; shows a message; calls the prop onOnChangeBookmark() |
| 32 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:109`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L109) | `<ActionsMenu>` | `onEventClickNotes` | `inline` | – | calls DataActionFetchNotes |
| 33 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:112`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L112) | `<ActionsMenu>` | `onEventClickEmail` | `inline` | – | goes to ContactByEmailOneSchoolGlobal |
| 34 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:123`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L123) | `<ContactByMessage>` | `onEventCancel` | `inline` | – | goes to ContactByEmailOneSchoolGlobal |
| 35 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:126`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L126) | `<ContactByMessage>` | `onEventEmail` | `handleMailPage` | – | goes to ContactByEmailMember |
| 36 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:155`](../../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L155) | `<SharePopup>` | `onEventShareToConnect` | `inline` | – | goes to LegacyShareObject |
| 37 | [`components/note/NotesSheet/NotesSheet.tsx:175`](../../../app/src/components/note/NotesSheet/NotesSheet.tsx#L175) | `<AddNote>` | `onOnSubmitRequested` | `addNoteRequested` | – | calls ServiceAPIAddNote; shows a message; calls the prop onOnNotesChanged() |
| 38 | [`containers/NoteListActions/NoteListActionsContainer.tsx:157`](../../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L157) | `<NoteList>` | `onOnDeleteRequested` | `inline` | – | calls ServiceAPIDeleteNoteByNoteId; shows a message; calls the prop onOnNoteDeleted() |
| 39 | [`containers/NoteListActions/NoteListActionsContainer.tsx:160`](../../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L160) | `<NoteList>` | `onOnSaveEditRequested` | `inline` | – | calls ServiceAPIUpdateNote; shows a message; calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged(); calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged() |
| 40 | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx:66`](../../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx#L66) | `<ContactPopup>` | `onEventClicked` | `inline` | – | opens an external link; calls the prop onEventCall() |
| 41 | [`components/contact/ContactByMessage/ContactByMessage.tsx:64`](../../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx#L64) | `<ContactPopupByMessage>` | `onEventSelectedMessageChannel` | `handlerSelectedMessageChannel` | `Email` | calls the prop onEventMessageChannel(); calls the prop onEventEmail() |
| 42 | [`components/contact/ContactByMessage/ContactByMessage.tsx:64`](../../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx#L64) | `<ContactPopupByMessage>` | `onEventSelectedMessageChannel` | `handlerSelectedMessageChannel` | `Call` | opens an external link; calls the prop onEventMessageChannel(); calls the prop onEventCall() |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

| Call | React action | Reached through |
|---|---|---|
| `/api/UBTConnect_Utils/ServiceAPIDeleteNoteByNoteId` | `deleteNote()` [`api/note/repository.ts:73`](../../../app/src/api/note/repository.ts#L73) | `NoteListActionsContainer` [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) |
| `/api/UBTConnect_Utils/ServiceAPIUpdateNote` | `updateNote()` [`api/note/repository.ts:66`](../../../app/src/api/note/repository.ts#L66) | `NoteListActionsContainer` [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) |
