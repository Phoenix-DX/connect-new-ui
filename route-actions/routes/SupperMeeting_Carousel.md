# SupperMeeting_Carousel: OutSystems (TST) and React

The route `/UBTConnect/SupperMeeting_Carousel`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/SupperMeeting_Carousel/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 17 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `Directory_EntityDetailsActions`, `UBTConnect`, `js`, `js`, `TagContent`, `UBTConnectLibrary`, `js`, `ShareSheet`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/SupperMeeting_Carousel` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel` | TST compiled code |
| UI flow | `Directory_SupperMeetings` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx`](../../app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect C2EnableCarousel = false → SupperMeeting_Details | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/SupperMeeting_Carousel/parity`](../../migration/screens/SupperMeeting_Carousel/parity) | `route.py parity` |
| Code read | OutSystems: 6 files of the UI flow, 34 shared blocks, 28 app shell files. React: 233 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 13: React makes 10, **0 missing**, 3 not a gap of the web app |
| Differences found | **0** (+ 3 not a gap of the web app) (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 2: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 0 |
| Screen and blocks of the UI flow with a React port | 6 of 6 |
| Navigation targets found in React | 5 of 5 |
| Shared blocks and components on the route | OutSystems 34, React 10 with user actions: see the last section |
| App shell on this route | 3 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

### Not a gap of the web app

Missing TST calls that a rule of `route-actions/config.json` (`notApplicable`, user 2026-11-05) sets aside. The rule names the fact and its evidence; the chain is the one of the TST code.

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
| 2 | `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` | data action | `Directory_EntityDetailsActions` | Directory_EntityDetailsActions.action_AsyncRefresh_ContactDetails → Directory_EntityDetailsActions.DataActionFetchContactDetails<br>Directory_EntityDetailsActions fetch at start → Directory_EntityDetailsActions.DataActionFetchContactDetails | yes | `fetchEntityContactDetails()` [`api/message/repository.ts:294`](../../app/src/api/message/repository.ts#L294) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → fetchEntityContactDetails`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 3 | `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes` | data action | `Directory_EntityDetailsActions` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → Directory_EntityDetailsActions.action_RefreshFetchNotes → Directory_EntityDetailsActions.DataActionFetchNotes<br>Directory_EntityDetailsActions.OnReady → Directory_EntityDetailsActions.onReady → Directory_EntityDetailsActions.action_RefreshFetchNotes → Directory_EntityDetailsActions.DataActionFetchNotes<br>Directory_EntityDetailsActions fetch at start → Directory_EntityDetailsActions.DataActionFetchNotes | yes | `fetchEntityNotes()` [`api/note/repository.ts:47`](../../app/src/api/note/repository.ts#L47) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → fetchEntityNotes`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 4 | `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote` | service action | `NotesSheet` | NotesSheet.handler_OnSubmitNote → server AddNote | no | `addNote()` [`api/note/repository.ts:54`](../../app/src/api/note/repository.ts#L54) (page) | `NotesSheet → addNote`<br>[`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | implemented |
| 5 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink` | server action | `ShareSheet` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → event onClick of CircleButton_WithLabel → ShareSheet.handler_OnClickExternalOption → server CS_CreateShareProfileLink | no | – | – | not applicable (nativeOnly) |
| 6 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject` | server action | `ShareSheet` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → ShareSheet.action_SubmitShare → server CS_ShareObject<br>ShareSheet.handler_OnClickSend → ShareSheet.action_SubmitShare → server CS_ShareObject | no | `csShareObject()` [`api/share/shareSheet.ts:25`](../../app/src/api/share/shareSheet.ts#L25) (page) | `ShareSheetContainer → useShareSheet → csShareObject`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 7 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers` | data action | `ShareSheet` | ShareSheet.handler_InputEventSubmit → ShareSheet.DataActionGetAvailableMembers<br>ShareSheet fetch at start → ShareSheet.DataActionGetAvailableMembers | no | `fetchAvailableMembers()` [`api/member/repository.ts:12`](../../app/src/api/member/repository.ts#L12) (page) | `ShareSheetContainer → useShareSheet → useAvailableMembersQuery → fetchAvailableMembers`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 8 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared` | data action | `ShareSheet` | ShareSheet.OnParametersChanged → ShareSheet.screenEvent_OnParametersChanged → ShareSheet.DataActionGetRecentlyShared<br>ShareSheet fetch at start → ShareSheet.DataActionGetRecentlyShared | no | `fetchRecentlyShared()` [`api/share/shareSheet.ts:14`](../../app/src/api/share/shareSheet.ts#L14) (page) | `ShareSheetContainer → useShareSheet → useRecentlySharedQuery → fetchRecentlyShared`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 9 | `UBTConnect/Directory_SupperMeetings/SupperMeeting_DetailsBlock/DataActionGetSubdivision` | data action | `SupperMeeting_DetailsBlock` | SupperMeeting_DetailsBlock.OnReady → SupperMeeting_DetailsBlock.screenEvent_OnReady → SupperMeeting_DetailsBlock.DataActionGetSubdivision<br>SupperMeeting_DetailsBlock fetch at start → SupperMeeting_DetailsBlock.DataActionGetSubdivision | yes | `fetchSubdivisionDetails()` [`api/locality/repository.ts:137`](../../app/src/api/locality/repository.ts#L137) (page) | `SupperMeetingDetailsContainer → useSupperMeetingDetails → fetchSubdivisionDetails`<br>[`containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx`](../../app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx) | implemented |
| 10 | `UBTConnect/Directory_SupperMeetings/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds` | data action | `SupperMeeting_HouseholdList` | SupperMeeting_HouseholdList.OnReady → SupperMeeting_HouseholdList.onReady → SupperMeeting_HouseholdList.DataActionGetSubdivisionHouseholds<br>SupperMeeting_HouseholdList fetch at start → SupperMeeting_HouseholdList.DataActionGetSubdivisionHouseholds | yes | `fetchSubdivisionHouseholds()` [`api/locality/repository.ts:147`](../../app/src/api/locality/repository.ts#L147) (page) | `SupperMeetingDetailsContainer → useSupperMeetingDetails → fetchSubdivisionHouseholds`<br>[`containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx`](../../app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx) | implemented |
| 11 | `UBTConnect_Utils/ActionCS_CreateShareProfileLink` | server action | `UBTConnect_Utils` | event event_Clicked of ContactPopup → SharePopup.onClick_CallButton → … → UBTConnect_Utils.shareEntity_ByURL → server CS_CreateShareProfileLink | no | – | – | not applicable (nativeOnly) |
| 12 | `UBTConnect_Utils/ServiceAPIAddBookmark2` | service action | `UBTConnect_Utils` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server AddBookmark2<br>onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server AddBookmark2 | no | `addC2Bookmark()` [`api/bookmark/repository.ts:16`](../../app/src/api/bookmark/repository.ts#L16) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → bookmarkServerActions → addC2Bookmark`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 13 | `UBTConnect_Utils/ServiceAPIDeleteBookmarkByBookmarkId2` | service action | `UBTConnect_Utils` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server DeleteBookmarkByBookmarkId2<br>onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server DeleteBookmarkByBookmarkId2 | no | `deleteC2Bookmark()` [`api/bookmark/repository.ts:27`](../../app/src/api/bookmark/repository.ts#L27) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → bookmarkServerActions → deleteC2Bookmark`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| [1](#611-suppermeeting_detailsblock-onclick_navigatetohousehold) | `SupperMeeting_DetailsBlock` | `event_OnClick_Household of HouseholdList` | `onClick_NavigateToHousehold` | – | goes to HouseholdCarousel, HouseholdDetails |

<details><summary>1 diagrams (handlers with two or more effects)</summary>

#### 6.1.1 SupperMeeting_DetailsBlock: onClick_NavigateToHousehold

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as SupperMeeting_DetailsBlock
  participant N as Navigation
  U->>B: event_OnClick_Household of HouseholdList → onClick_NavigateToHousehold
  B->>N: go to HouseholdCarousel
  B->>N: go to HouseholdDetails
```


</details>


### 6.2 React

None.

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_StartingSupperMeetingId` | LongInteger | yes | [`UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js:68`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L68) |

| Block | Target | Parameters | Place |
|---|---|---|---|
| `SupperMeeting_DetailsBlock` | `HouseholdCarousel` | `In_StartingHouseholdId` = `event_HouseholdId` | [`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:535`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L535) |
| `SupperMeeting_DetailsBlock` | `HouseholdDetails` | `HouseholdId` = `event_HouseholdId` | [`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:541`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L541) |

### 7.2 React

Declared inputs of the route: `In_StartingSupperMeetingId: LongInteger` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx:19`](../../app/src/pages/SupperMeeting_Carousel/SupperMeeting_CarouselPage.tsx#L19) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `SupperMeeting_Carousel` | OnInitialize ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js:355`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L355)) | `screenEvent_OnInitialize` | 1. If supperMeetingsIdList.supperMeetingIds.isEmpty ([`L284`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L284))<br>2. Execute Action: GetPreloadObject ([`L286`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L286))<br>3. Execute Action: AssignFromObject ([`L290`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L290))<br>4. Execute Action: ListIndexOf ([`L294`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L294))<br>5. If ((listIndexOf.position) !== (-1)) ([`L299`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L299))<br>6. StartingPosition = ListIndexOf.Position ([`L301`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L301))<br>7. Foreach SupperMeetingsIdList.SupperMeetingIds ([`L305`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L305))<br>8. Execute Action: ListAppend ([`L312`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L312))<br>9. Else ([`L326`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L326)) |
| `SupperMeeting_DetailsBlock` | OnReady ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:736`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L736)) | `screenEvent_OnReady` | 1. JavaScript: Get_IsViewRestoredFromCache ([`L644`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L644))<br>2. Is view restored from cache? ([`L653`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L653))<br>3. If (get_IsViewRestoredFromCache.fromCache \|\| get_IsViewRestoredFromCache.fromHistory) ([`L655`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L655))<br>4. Else ([`L657`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L657))<br>5. Execute Action: GetSkeleton_UI_SubdivisionDetails ([`L659`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L659))<br>6. GetSubdivision.Subdivision = GetSkeleton_UI_SubdivisionDetails.UI_SubdivisionDetails ([`L663`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L663))<br>7. Refresh Query: GetSubdivision ([`L666`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L666)) |
| `SupperMeeting_HouseholdList` | OnReady ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js:342`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L342)) | `onReady` | 1. JavaScript: IsViewRestoredFromCache ([`L272`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L272))<br>2. Check if IsViewRestoredFromCache IsRestoredFromCache ([`L279`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L279))<br>3. If isViewRestoredFromCache.isRestoredFromCache ([`L281`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L281))<br>4. Else ([`L283`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L283))<br>5. Execute Action: GetSkeletonList_UI_SubdivisionHousehold ([`L285`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L285))<br>6. GetSubdivisionHouseholds.Household_GalleryCard_List = GetSkeletonList_UI_SubdivisionHousehold.UI_SubdivisionHouseholds ([`L289`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L289))<br>7. Refresh Query: GetSubdivisionHouseholds ([`L292`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L292)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 SupperMeeting_Carousel: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as SupperMeeting_Carousel
  R->>B: OnInitialize → screenEvent_OnInitialize
  alt supperMeetingsIdList.supperMeetingIds.isEmpty
    B->>B: action GetPreloadObject
    B->>B: action AssignFromObject
    B->>B: action ListIndexOf
    alt ((listIndexOf.position) !== (-1))
      Note over B: StartingPosition = ListIndexOf.Position
    end
    Note over B: Foreach SupperMeetingsIdList.SupperMeetingIds
    B->>B: action ListAppend
  else other
    Note over B: no step
  end
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `SupperMeeting_DetailsBlock` | `GetSubdivision` | on demand (`-1`) | `SkeletonSection.In_IsLoading` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:183`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L183)), `UBT_LazyImage.EntityId` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:225`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L225)), `view` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:226`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L226)), `SupperMeeting_ImageCard_Content.In_Subdivision_CardContent` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:268`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L268)), `text` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:389`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L389)), `action screenEvent_OnReady` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:664`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L664)) | [`UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js:450`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_DetailsBlock.mvc.js#L450) |
| `SupperMeeting_HouseholdList` | `GetSubdivisionHouseholds` | on demand (`-1`) | `Household_GalleryCard_List.In_IsLoading` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js:165`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L165)), `Household_GalleryCard_List.In_Household_GalleryCard_List` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js:166`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L166)), `view` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js:167`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L167)), `action onReady` ([`UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js:290`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L290)) | [`UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js:217`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_HouseholdList.mvc.js#L217) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js:380`](../../migration/screens/SupperMeeting_Carousel/analysis/sources/raw/UBTConnect.Directory_SupperMeetings.SupperMeeting_Carousel.mvc.js#L380) |
| React | access `member`, lock `enforce`, flag redirect C2EnableCarousel = false → SupperMeeting_Details | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Directory_SupperMeetings` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../app/src/components/layout/DetailLayout/DetailLayout.tsx), [`containers/DetailLayout/DetailLayoutContainer.tsx`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx) | 1 |
| `EntitiesCarousel` | `UBTConnect` | [`components/directory/EntitiesCarousel/EntitiesCarousel.tsx`](../../app/src/components/directory/EntitiesCarousel/EntitiesCarousel.tsx) | 0 |
| `Carousel` | `OutSystemsUI_2_23` | [`components/ui/Carousel/Carousel.tsx`](../../app/src/components/ui/Carousel/Carousel.tsx) | 0 |
| `EntitiesCarousel_Element` | `UBTConnect` | [`components/directory/EntitiesCarouselElement/EntitiesCarouselElement.tsx`](../../app/src/components/directory/EntitiesCarouselElement/EntitiesCarouselElement.tsx) | 0 |
| `EntitiesCarouse_lSupperMeetingDetails` | `UBTConnect` | [`components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.tsx`](../../app/src/components/directory/CarouselSupperMeetingDetails/CarouselSupperMeetingDetails.tsx) | 0 |
| `SubLayout_DirectoryDetailScreen` | `UBTConnect` | [`components/layout/DirectoryDetailLayout/DirectoryDetailLayout.tsx`](../../app/src/components/layout/DirectoryDetailLayout/DirectoryDetailLayout.tsx) | 0 |
| `ImageCard_LazyLoading` | `UBTConnectLibrary` | [`components/ui/ImageCard/ImageCard.tsx`](../../app/src/components/ui/ImageCard/ImageCard.tsx) | 0 |
| `UBT_LazyImage` | `UBTConnect_Utils` | [`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) | 0 |
| `LazyImage` | `UBTConnectLibrary` | [`components/ui/LazyImage/LazyImage.tsx`](../../app/src/components/ui/LazyImage/LazyImage.tsx) | 0 |
| `CarouselTag` | `UBTConnect` | [`components/directory/CarouselTag/CarouselTag.tsx`](../../app/src/components/directory/CarouselTag/CarouselTag.tsx) | 0 |
| `TagContent` | `UBTConnectLibrary` | [`components/ui/TagContent/TagContent.tsx`](../../app/src/components/ui/TagContent/TagContent.tsx) | 0 |
| `ImageCard__Content` | `UBTConnectLibrary` | [`components/ui/ImageCardContent/ImageCardContent.tsx`](../../app/src/components/ui/ImageCardContent/ImageCardContent.tsx) | 0 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `ImageCard__Content__Tag` | `UBTConnectLibrary` | [`components/ui/ImageCardTag/ImageCardTag.tsx`](../../app/src/components/ui/ImageCardTag/ImageCardTag.tsx) | 0 |
| `AddressPopup_Wrapper` | `UBTConnect_Utils` | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx) | 1 |
| `AddressPopup` | `UBTConnect_Utils` | [`components/contact/AddressPopup/AddressPopup.tsx`](../../app/src/components/contact/AddressPopup/AddressPopup.tsx) | 0 |
| `ContactPopup` | `UBTConnect_Utils` | [`components/contact/ContactPopup/ContactPopup.tsx`](../../app/src/components/contact/ContactPopup/ContactPopup.tsx) | 0 |
| `SubLayout_DirectoryDetailScreen_Section` | `UBTConnect` | [`components/layout/DirectoryDetailSection/DirectoryDetailSection.tsx`](../../app/src/components/layout/DirectoryDetailSection/DirectoryDetailSection.tsx) | 0 |
| `SubLayout_Section` | `UBTConnectLibrary` | [`components/layout/SectionLayout/SectionLayout.tsx`](../../app/src/components/layout/SectionLayout/SectionLayout.tsx) | 0 |
| `Directory_EntityDetailsActions` | `UBTConnect` | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx), [`containers/EntityDetailsActions/entityDetailsActionsState.ts`](../../app/src/containers/EntityDetailsActions/entityDetailsActionsState.ts), [`containers/EntityDetailsActions/useEntityDetailsActions.ts`](../../app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts) | 5 |
| `ActionsMenu` | `UBTConnectLibrary` | [`components/ui/ActionsMenu/ActionsMenu.tsx`](../../app/src/components/ui/ActionsMenu/ActionsMenu.tsx) | 0 |
| `CircleButton_IconPrimary` | `UBTConnectLibrary` | [`components/ui/CircleButtonIconPrimary/CircleButtonIconPrimary.tsx`](../../app/src/components/ui/CircleButtonIconPrimary/CircleButtonIconPrimary.tsx) | 0 |
| `CircleButton_WithLabel` | `UBTConnectLibrary` | [`components/ui/CircleButtonWithLabel/CircleButtonWithLabel.tsx`](../../app/src/components/ui/CircleButtonWithLabel/CircleButtonWithLabel.tsx) | 0 |
| `CircleButton` | `UBTConnectLibrary` | [`components/ui/CircleButton/CircleButton.tsx`](../../app/src/components/ui/CircleButton/CircleButton.tsx) | 0 |
| `ContactByMessage_Wrapper` | `UBTConnect_Utils` | [`components/contact/ContactByMessage/ContactByMessage.tsx`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx) | 1 |
| `ContactPopup_ByMessage` | `UBTConnect_Utils` | [`components/contact/ContactPopupByMessage/ContactPopupByMessage.tsx`](../../app/src/components/contact/ContactPopupByMessage/ContactPopupByMessage.tsx) | 0 |
| `ContactPopup_ByPhone` | `UBTConnect_Utils` | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| `SharePopup` | `UBTConnect_Utils` | [`components/share/SharePopup/SharePopup.tsx`](../../app/src/components/share/SharePopup/SharePopup.tsx) | 0 |
| `Household_GalleryCard_List` | `UBTConnect` | [`components/household/HouseholdGalleryCardList/HouseholdGalleryCardList.tsx`](../../app/src/components/household/HouseholdGalleryCardList/HouseholdGalleryCardList.tsx) | 0 |
| `Gallery` | `OutSystemsUI_2_23` | [`components/ui/Gallery/Gallery.tsx`](../../app/src/components/ui/Gallery/Gallery.tsx) | 0 |
| `Household_GalleryCard` | `UBTConnect` | [`components/household/HouseholdGalleryCard/HouseholdGalleryCard.tsx`](../../app/src/components/household/HouseholdGalleryCard/HouseholdGalleryCard.tsx) | 0 |
| `EntitiesCarousel_HeaderGenerator` | `UBTConnect` | [`components/directory/EntitiesCarouselHeader/EntitiesCarouselHeader.tsx`](../../app/src/components/directory/EntitiesCarouselHeader/EntitiesCarouselHeader.tsx) | 0 |
| `NotesSheet` | `UBTConnect_Utils` | [`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | 1 |
| `ShareSheet` | `UBTConnect_Utils` | [`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx), [`containers/ShareSheet/components/ShareSheetFirstStep.tsx`](../../app/src/containers/ShareSheet/components/ShareSheetFirstStep.tsx), [`containers/ShareSheet/components/ShareSheetSearchStep.tsx`](../../app/src/containers/ShareSheet/components/ShareSheetSearchStep.tsx), [`containers/ShareSheet/shareSheetState.ts`](../../app/src/containers/ShareSheet/shareSheetState.ts), [`containers/ShareSheet/useShareSheet.ts`](../../app/src/containers/ShareSheet/useShareSheet.ts) | 4 |

<details><summary>User actions of the shared blocks (14)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `Directory_EntityDetailsActions` | `event_Click_Bookmark of ActionsMenu`<br>`event_Click_Unbookmark of ActionsMenu` | `handle_Bookmark` | – | calls AddBookmark2, DeleteBookmarkByBookmarkId2 |
| 2 | `Directory_EntityDetailsActions` | `event_Cancel of Wrapper`<br>`event_Click_Email of ActionsMenu` | `handle_Mail` | – | goes to ContactByEmailOneSchoolGlobal |
| 3 | `Directory_EntityDetailsActions` | `event_Email of Wrapper` | `handle_Mail_Page` | – | goes to ContactByEmailMember |
| 4 | `Directory_EntityDetailsActions` | `event_ShareToConnect of SharePopup` | `handle_Share_Connect` | – | goes to LegacyShareObject |
| 5 | `Directory_EntityDetailsActions` | `event_ShareToOthers of SharePopup` | `handle_Share_Others` | – | calls GetAllApplicationEvents, CS_CreateShareProfileLink, AppManager_SynchAppContext |
| 6 | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |
| 7 | `AddressPopup_Wrapper` | `event_OpenInGoogleMaps of AddressPopup`<br>`event_OpenInMaps of AddressPopup` | `handler_OpenInMapsOrGoogleMaps` | – | goes to URL mapsAddress; opens an external link; shows a message |
| 8 | `ContactByMessage_Wrapper` | `event_SelectedMessageChannel of ByMessage` | `handler_SelectedMessageChannel` | – | opens an external link |
| 9 | `ContactPopup_ByPhone` | `event_Clicked of ContactPopup` | `onClick_CallButton` | – | opens an external link |
| 10 | `NotesSheet` | `onSubmitRequested of AddNote` | `handler_OnSubmitNote` | – | calls AddNote; shows a message |
| 11 | `ShareSheet` | `onClick of WithLabel` | `handler_OnClickRecentMember` | – | calls CS_ShareObject; shows a message; asks for a confirmation |
| 12 | `ShareSheet` | `onClick of WithLabel` | `handler_OnClickExternalOption` | – | calls CS_CreateShareProfileLink |
| 13 | `ShareSheet` | `click of Icon` | `handler_SearchResultItemOnSelect` | – | shows a message |
| 14 | `ShareSheet` | `buttonOnClick of Button` | `handler_OnClickSend` | – | calls CS_ShareObject; shows a message |

</details>


### React

| File | User actions |
|---|---|
| [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx) | 2 |
| [`components/contact/ContactByMessage/ContactByMessage.tsx`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx) | 1 |
| [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | 1 |
| [`containers/DetailLayout/DetailLayoutContainer.tsx`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx) | 1 |
| [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | 7 |
| [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) | 2 |
| [`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | 5 |
| [`containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx`](../../app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx) | 1 |

<details><summary>User actions of the shared components (24)</summary>

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| 2 | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| 3 | [`containers/DetailLayout/DetailLayoutContainer.tsx:66`](../../app/src/containers/DetailLayout/DetailLayoutContainer.tsx#L66) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |
| 4 | [`containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx:49`](../../app/src/containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx#L49) | `<SupperMeetingDetails>` | `onHouseholdClick` | `details.onClickNavigateToHousehold` | – | goes to HouseholdCarousel, HouseholdDetails |
| 5 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:100`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L100) | `<ActionsMenu>` | `onEventClickBookmark` | `onClickBookmark` | – | calls ServiceAPIDeleteBookmarkByBookmarkId2, ServiceAPIAddBookmark2; shows a message; calls the prop onOnChangeBookmark() |
| 6 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:101`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L101) | `<ActionsMenu>` | `onEventClickUnbookmark` | `onClickBookmark` | – | calls ServiceAPIDeleteBookmarkByBookmarkId2, ServiceAPIAddBookmark2; shows a message; calls the prop onOnChangeBookmark() |
| 7 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:109`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L109) | `<ActionsMenu>` | `onEventClickNotes` | `inline` | – | calls DataActionFetchNotes |
| 8 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:112`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L112) | `<ActionsMenu>` | `onEventClickEmail` | `inline` | – | goes to ContactByEmailOneSchoolGlobal |
| 9 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:123`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L123) | `<ContactByMessage>` | `onEventCancel` | `inline` | – | goes to ContactByEmailOneSchoolGlobal |
| 10 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:126`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L126) | `<ContactByMessage>` | `onEventEmail` | `handleMailPage` | – | goes to ContactByEmailMember |
| 11 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:155`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L155) | `<SharePopup>` | `onEventShareToConnect` | `inline` | – | goes to LegacyShareObject |
| 12 | [`containers/ShareSheet/ShareSheetContainer.tsx:111`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L111) | `<ShareSheetFirstStep>` | `onClickRecentMember` | `onClickRecentMember` | – | calls ActionCS_ShareObject; shows a message; asks for a confirmation |
| 13 | [`containers/ShareSheet/ShareSheetContainer.tsx:127`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L127) | `<ShareSheetSearchStep>` | `onSubmit` | `onSubmit` | – | setSearchFetchId(): a query fetches again |
| 14 | [`containers/ShareSheet/ShareSheetContainer.tsx:129`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L129) | `<ShareSheetSearchStep>` | `onSelect` | `onSelect` | – | shows a message |
| 15 | [`containers/ShareSheet/ShareSheetContainer.tsx:130`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L130) | `<ShareSheetSearchStep>` | `onClickUpgradeSubscription` | `onClickUpgradeSubscription` | – | opens an external link |
| 16 | [`containers/ShareSheet/ShareSheetContainer.tsx:148`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L148) | `<ActionButton>` | `onButtonOnClick` | `onClickSend` | – | calls ActionCS_ShareObject; shows a message |
| 17 | [`components/note/NotesSheet/NotesSheet.tsx:175`](../../app/src/components/note/NotesSheet/NotesSheet.tsx#L175) | `<AddNote>` | `onOnSubmitRequested` | `addNoteRequested` | – | calls ServiceAPIAddNote; shows a message; calls the prop onOnNotesChanged() |
| 18 | [`containers/NoteListActions/NoteListActionsContainer.tsx:157`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L157) | `<NoteList>` | `onOnDeleteRequested` | `inline` | – | calls ServiceAPIDeleteNoteByNoteId; shows a message; calls the prop onOnNoteDeleted() |
| 19 | [`containers/NoteListActions/NoteListActionsContainer.tsx:160`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L160) | `<NoteList>` | `onOnSaveEditRequested` | `inline` | – | calls ServiceAPIUpdateNote; shows a message; calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged(); calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged() |
| 20 | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx:66`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx#L66) | `<ContactPopup>` | `onEventClicked` | `inline` | – | opens an external link; calls the prop onEventCall() |
| 21 | [`components/contact/ContactByMessage/ContactByMessage.tsx:64`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx#L64) | `<ContactPopupByMessage>` | `onEventSelectedMessageChannel` | `handlerSelectedMessageChannel` | `Email` | calls the prop onEventMessageChannel(); calls the prop onEventEmail() |
| 22 | [`components/contact/ContactByMessage/ContactByMessage.tsx:64`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx#L64) | `<ContactPopupByMessage>` | `onEventSelectedMessageChannel` | `handlerSelectedMessageChannel` | `Call` | opens an external link; calls the prop onEventMessageChannel(); calls the prop onEventCall() |
| 23 | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx:110`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx#L110) | `<AddressPopup>` | `onEventOpenInGoogleMaps` | `inline` | – | opens an external link; shows a message |
| 24 | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx:113`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx#L113) | `<AddressPopup>` | `onEventOpenInMaps` | `inline` | – | opens an external link; shows a message |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

| Call | React action | Reached through |
|---|---|---|
| `/api/UBTConnect_Utils/ServiceAPIDeleteNoteByNoteId` | `deleteNote()` [`api/note/repository.ts:73`](../../app/src/api/note/repository.ts#L73) | `NoteListActionsContainer` [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) |
| `/api/UBTConnect_Utils/ServiceAPIUpdateNote` | `updateNote()` [`api/note/repository.ts:66`](../../app/src/api/note/repository.ts#L66) | `NoteListActionsContainer` [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) |
