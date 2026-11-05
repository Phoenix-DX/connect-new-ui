# OneSchoolGlobalDetails: OutSystems (TST) and React

The route `/UBTConnect/OneSchoolGlobalDetails`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/OneSchoolGlobalDetails/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/OneSchoolGlobalDetails` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails` | TST compiled code |
| UI flow | `Directory_OneSchoolGlobal` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx`](../../app/src/pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/OneSchoolGlobalDetails/parity`](../../migration/screens/OneSchoolGlobalDetails/parity) | `route.py parity` |
| Code read | OutSystems: 2 files of the UI flow, 30 shared blocks, 28 app shell files. React: 221 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 13: React makes 10, **3 missing** |
| Differences found | **3** (see [section 3](#3-differences-found)) |
| Questions | 4 (see [section 4](#4-questions)) |
| User actions of the route (own code) | OutSystems: 0. React: 1 |
| Screen and blocks of the UI flow with a React port | 2 of 2 |
| Navigation targets found in React | 9 of 9 |
| Shared blocks and components on the route | OutSystems 30, React 10 with user actions: see the last section |
| App shell on this route | 8 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

- Call `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`. Chain on TST: onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → event onClick of CircleButton_WithLabel → ShareSheet.handler_OnClickExternalOption → server CS_CreateShareProfileLink.
  - React has the function, but this route does not use it: `csCreateShareProfileLink()` [`api/share/shareSheet.ts:39`](../../app/src/api/share/shareSheet.ts#L39).
  - Note in [`api/share/shareSheet.ts:35`](../../app/src/api/share/shareSheet.ts#L35): "/** CS_CreateShareProfileLink (Handler_OnClickExternalOption, ShareSheet.mvc.js:2250-2301): the share id and URL. */"
  - Note in [`components/feed/EmbeddedFeed/README.md:66`](../../app/src/components/feed/EmbeddedFeed/README.md#L66): "is not wired: ShareEntity_ByURL (UBTConnect_Utils) is not ported (SocialSharing plugin + CS_CreateShareProfileLink),"
  - Note in [`containers/ShareSheet/README.md:56`](../../app/src/containers/ShareSheet/README.md#L56): "- ActionCS_CreateShareProfileLink (`cs_CreateShareProfileLink`)."
- Call `UBTConnect_Utils/ActionCS_CreateShareProfileLink`. Chain on TST: event event_Clicked of ContactPopup → SharePopup.onClick_CallButton → … → UBTConnect_Utils.shareEntity_ByURL → server CS_CreateShareProfileLink.
  - No React code makes this call.
  - Note in [`api/share/shareSheet.ts:35`](../../app/src/api/share/shareSheet.ts#L35): "/** CS_CreateShareProfileLink (Handler_OnClickExternalOption, ShareSheet.mvc.js:2250-2301): the share id and URL. */"
  - Note in [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:160`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L160): "// Handle_Share_Others: closes, then UBTConnect_Utils ShareEntity_ByURL (not ported, README)."
  - Note in [`components/feed/EmbeddedFeed/README.md:65`](../../app/src/components/feed/EmbeddedFeed/README.md#L65): "- Event_ShareToOthers → Handle_Share_Others (:257, :775-807: close, then ShareEntity_ByURL(Type_ShareObject.Feed, Id))"
- Call `Connect2_LegacyShared/ActionGetAllApplicationEvents`. Chain on TST: SharePopup.onClick_CallButton → event event_ShareToOthers of SharePopup → … → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents.
  - No React code makes this call.

## 4. Questions

1. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST OneSchoolGlobalDetails has no chain to this call. Does the call belong to this route?
2. React calls `/api/UBTConnect_Utils/ActionGetSignedImagesInBulk` from `cache_SignedImageURL_GetCallback()` [`lib/ubtConnectUtils/actions.ts:124`](../../app/src/lib/ubtConnectUtils/actions.ts#L124) (page). TST OneSchoolGlobalDetails has no chain to this call. Does the call belong to this route?
3. React calls `/api/UBTConnect_Utils/ServiceAPIDeleteNoteByNoteId` from `deleteNote()` [`api/note/repository.ts:73`](../../app/src/api/note/repository.ts#L73) (page). TST OneSchoolGlobalDetails has no chain to this call. Does the call belong to this route?
4. React calls `/api/UBTConnect_Utils/ServiceAPIUpdateNote` from `updateNote()` [`api/note/repository.ts:66`](../../app/src/api/note/repository.ts#L66) (page). TST OneSchoolGlobalDetails has no chain to this call. Does the call belong to this route?

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
| 1 | `Connect2_LegacyShared/ActionGetAllApplicationEvents` | server action | `Connect2_LegacyShared` | SharePopup.onClick_CallButton → event event_ShareToOthers of SharePopup → … → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents | no | – | – | **missing** |
| 2 | `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` | data action | `Directory_EntityDetailsActions` | Directory_EntityDetailsActions.action_AsyncRefresh_ContactDetails → Directory_EntityDetailsActions.DataActionFetchContactDetails<br>Directory_EntityDetailsActions fetch at start → Directory_EntityDetailsActions.DataActionFetchContactDetails | yes | `fetchEntityContactDetails()` [`api/message/repository.ts:264`](../../app/src/api/message/repository.ts#L264) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → fetchEntityContactDetails`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 3 | `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes` | data action | `Directory_EntityDetailsActions` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → Directory_EntityDetailsActions.action_RefreshFetchNotes → Directory_EntityDetailsActions.DataActionFetchNotes<br>Directory_EntityDetailsActions.OnReady → Directory_EntityDetailsActions.onReady → Directory_EntityDetailsActions.action_RefreshFetchNotes → Directory_EntityDetailsActions.DataActionFetchNotes<br>Directory_EntityDetailsActions fetch at start → Directory_EntityDetailsActions.DataActionFetchNotes | yes | `fetchEntityNotes()` [`api/note/repository.ts:47`](../../app/src/api/note/repository.ts#L47) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → fetchEntityNotes`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 4 | `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote` | service action | `NotesSheet` | NotesSheet.handler_OnSubmitNote → server AddNote | no | `addNote()` [`api/note/repository.ts:54`](../../app/src/api/note/repository.ts#L54) (page) | `NotesSheet → addNote`<br>[`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | implemented |
| 5 | `UBTConnect/Directory_OneSchoolGlobal/OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails` | data action | `OneSchoolGlobalDetails_Block` | OneSchoolGlobalDetails_Block.OnParametersChanged → OneSchoolGlobalDetails_Block.onParametersChanged → OneSchoolGlobalDetails_Block.onReady → OneSchoolGlobalDetails_Block.DataActionGetOneSchoolGlobalDetails<br>OneSchoolGlobalDetails_Block.OnReady → OneSchoolGlobalDetails_Block.onReady → OneSchoolGlobalDetails_Block.DataActionGetOneSchoolGlobalDetails<br>OneSchoolGlobalDetails_Block fetch at start → OneSchoolGlobalDetails_Block.DataActionGetOneSchoolGlobalDetails | yes | `fetchOneSchoolGlobalDetails()` [`api/locality/repository.ts:193`](../../app/src/api/locality/repository.ts#L193) (page) | `OneSchoolGlobalDetailsContainer → useOneSchoolGlobalDetails → useOneSchoolGlobalDetailsQuery → fetchOneSchoolGlobalDetails`<br>[`containers/OneSchoolGlobalDetails/OneSchoolGlobalDetailsContainer.tsx`](../../app/src/containers/OneSchoolGlobalDetails/OneSchoolGlobalDetailsContainer.tsx) | implemented |
| 6 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink` | server action | `ShareSheet` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → event onClick of CircleButton_WithLabel → ShareSheet.handler_OnClickExternalOption → server CS_CreateShareProfileLink | no | – | – | **missing** |
| 7 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject` | server action | `ShareSheet` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → ShareSheet.action_SubmitShare → server CS_ShareObject<br>ShareSheet.handler_OnClickSend → ShareSheet.action_SubmitShare → server CS_ShareObject | no | `csShareObject()` [`api/share/shareSheet.ts:25`](../../app/src/api/share/shareSheet.ts#L25) (page) | `ShareSheetContainer → useShareSheet → csShareObject`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 8 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers` | data action | `ShareSheet` | ShareSheet.handler_InputEventSubmit → ShareSheet.DataActionGetAvailableMembers<br>ShareSheet fetch at start → ShareSheet.DataActionGetAvailableMembers | no | `fetchAvailableMembers()` [`api/member/repository.ts:12`](../../app/src/api/member/repository.ts#L12) (page) | `ShareSheetContainer → useShareSheet → useAvailableMembersQuery → fetchAvailableMembers`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 9 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared` | data action | `ShareSheet` | ShareSheet.OnParametersChanged → ShareSheet.screenEvent_OnParametersChanged → ShareSheet.DataActionGetRecentlyShared<br>ShareSheet fetch at start → ShareSheet.DataActionGetRecentlyShared | no | `fetchRecentlyShared()` [`api/share/shareSheet.ts:14`](../../app/src/api/share/shareSheet.ts#L14) (page) | `ShareSheetContainer → useShareSheet → useRecentlySharedQuery → fetchRecentlyShared`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 10 | `UBTConnect/ServiceAPIAddBookmark2` | service action | `UBTConnect` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect.toggleBookmarkItem_C2 → server AddBookmark2<br>onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect.toggleBookmarkItem_C2 → server AddBookmark2 | no | `addC2Bookmark()` [`api/bookmark/repository.ts:41`](../../app/src/api/bookmark/repository.ts#L41) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → bookmarkServerActions → addC2Bookmark`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 11 | `UBTConnect/ServiceAPIDeleteBookmarkByBookmarkId2` | service action | `UBTConnect` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect.toggleBookmarkItem_C2 → server DeleteBookmarkByBookmarkId2<br>onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect.toggleBookmarkItem_C2 → server DeleteBookmarkByBookmarkId2 | no | `deleteC2Bookmark()` [`api/bookmark/repository.ts:52`](../../app/src/api/bookmark/repository.ts#L52) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → bookmarkServerActions → deleteC2Bookmark`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 12 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |
| 13 | `UBTConnect_Utils/ActionCS_CreateShareProfileLink` | server action | `UBTConnect_Utils` | event event_Clicked of ContactPopup → SharePopup.onClick_CallButton → … → UBTConnect_Utils.shareEntity_ByURL → server CS_CreateShareProfileLink | no | – | – | **missing** |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

None.

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx:27`](../../app/src/pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx#L27) | `<DetailLayout>` | `onBack` | `navigateBack` | – | goes to previous screen |

## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/`.

### 7.1 OutSystems (TST)

| Input | Type | Mandatory | Place |
|---|---|---|---|
| `In_OneSchoolGlobalId` | LongInteger | yes | [`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js:62`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js#L62) |

Navigations with parameters: none.

### 7.2 React

Declared inputs of the route: `In_OneSchoolGlobalId: LongInteger` (`app/src/app/routes.generated.ts`).

| Hook | Keys read | Place |
|---|---|---|
| `useSearchParams` | none | [`pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx:20`](../../app/src/pages/OneSchoolGlobalDetails/OneSchoolGlobalDetailsPage.tsx#L20) |

Navigations with parameters: none.

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `OneSchoolGlobalDetails` | OnInitialize ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js:346`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js#L346)) | `screenEvent_OnInitialize` | 1. JavaScript: IsViewRestoredFromCache ([`L291`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js#L291))<br>2. IsRestoredFromCache = IsViewRestoredFromCache.IsRestoredFromCache2 ([`L301`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js#L301)) |
| `OneSchoolGlobalDetails_Block` | OnInitialize ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:1324`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1324)) | `onInitialize` | 1. If isRestoredFromCache ([`L1246`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1246))<br>2. Else ([`L1248`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1248))<br>3. Selected_OneschoolGlobal_SubsectionId = Type_OneschoolGlobal_SubsectionId.UpcomingEvents ([`L1250`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1250)) |
| `OneSchoolGlobalDetails_Block` | OnReady ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:1342`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1342)) | `onReady` | 1. If isRestoredFromCache ([`L1160`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1160))<br>2. Else ([`L1162`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1162))<br>3. Execute Action: Get_LookupSection ([`L1164`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1164))<br>4. LookupSections = Get_LookupSection.Out_Lookup ([`L1168`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1168))<br>5. Execute Action: GetSkeleton_UI_OneSchoolGlobal_DetailCard ([`L1171`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1171))<br>6. GetOneSchoolGlobalDetails.Out_OneSchoolGlobal.OneSchoolGlobal_DetailCard = GetSkeleton_UI_OneSchoolGlobal_DetailCard.UI_OneSchoolGlobal_DetailCard ([`L1175`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1175))<br>7. Refresh Query: GetOneSchoolGlobalDetails ([`L1178`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1178)) |
| `OneSchoolGlobalDetails_Block` | OnParametersChanged ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:1362`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1362)) | `onParametersChanged` | 1. Execute Action: OnReady ([`L1277`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1277)) |

<details><summary>Sequence diagrams of the screen event handlers (1)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 OneSchoolGlobalDetails: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as OneSchoolGlobalDetails
  R->>B: OnInitialize → screenEvent_OnInitialize
  B->>B: JavaScript IsViewRestoredFromCache
  Note over B: IsRestoredFromCache = IsViewRestoredFromCache.IsRestoredFromCache2
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `OneSchoolGlobalDetails_Block` | `GetOneSchoolGlobalDetails` | on demand (`-1`) | `SkeletonSection.In_IsLoading` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:207`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L207)), `UBT_LazyImage.ImageURL` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:255`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L255)), `view` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:256`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L256)), `UBT_LazyImage.EntityId` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:257`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L257)), `ImageCard__Content.In_Title` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:284`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L284)), `CustomText.In_Text` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:334`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L334)), `AddressPopup_Wrapper.In_Address` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:414`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L414)), `AddressPopup_Wrapper.In_Coordinates` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:416`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L416)), `AddressPopup_Wrapper.source` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:440`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L440)), `text` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:461`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L461)), `action onReady` ([`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:1176`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1176)) | [`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js:1105`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails_Block.mvc.js#L1105) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js:371`](../../migration/screens/OneSchoolGlobalDetails/analysis/sources/raw/UBTConnect.Directory_OneSchoolGlobal.OneSchoolGlobalDetails.mvc.js#L371) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Directory_OneSchoolGlobal` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_DetailPage` | `UBTConnectLibrary` | [`components/layout/DetailLayout/DetailLayout.tsx`](../../app/src/components/layout/DetailLayout/DetailLayout.tsx) | 1 |
| `SubLayout_DirectoryDetailScreen` | `UBTConnect` | [`components/layout/DirectoryDetailLayout/DirectoryDetailLayout.tsx`](../../app/src/components/layout/DirectoryDetailLayout/DirectoryDetailLayout.tsx) | 0 |
| `ImageCard_LazyLoading` | `UBTConnectLibrary` | [`components/ui/ImageCard/ImageCard.tsx`](../../app/src/components/ui/ImageCard/ImageCard.tsx) | 0 |
| `UBT_LazyImage` | `UBTConnect_Utils` | [`components/ui/EntityLazyImage/EntityLazyImage.tsx`](../../app/src/components/ui/EntityLazyImage/EntityLazyImage.tsx) | 0 |
| `LazyImage` | `UBTConnectLibrary` | [`components/ui/LazyImage/LazyImage.tsx`](../../app/src/components/ui/LazyImage/LazyImage.tsx) | 0 |
| `ImageCard__Content` | `UBTConnectLibrary` | [`components/ui/ImageCardContent/ImageCardContent.tsx`](../../app/src/components/ui/ImageCardContent/ImageCardContent.tsx) | 0 |
| `AddressPopup_Wrapper` | `UBTConnect_Utils` | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx) | 1 |
| `AddressPopup` | `UBTConnect_Utils` | [`components/contact/AddressPopup/AddressPopup.tsx`](../../app/src/components/contact/AddressPopup/AddressPopup.tsx) | 0 |
| `ContactPopup` | `UBTConnect_Utils` | [`components/contact/ContactPopup/ContactPopup.tsx`](../../app/src/components/contact/ContactPopup/ContactPopup.tsx) | 0 |
| `External_Link` | `UBTConnect` | [`containers/OneSchoolGlobalDetails/components/External_Link.tsx`](../../app/src/containers/OneSchoolGlobalDetails/components/External_Link.tsx) | 1 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `Directory_EntityDetailsActions` | `UBTConnect` | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx), [`containers/EntityDetailsActions/entityDetailsActionsState.ts`](../../app/src/containers/EntityDetailsActions/entityDetailsActionsState.ts), [`containers/EntityDetailsActions/useEntityDetailsActions.ts`](../../app/src/containers/EntityDetailsActions/useEntityDetailsActions.ts) | 6 |
| `ActionsMenu` | `UBTConnectLibrary` | [`components/ui/ActionsMenu/ActionsMenu.tsx`](../../app/src/components/ui/ActionsMenu/ActionsMenu.tsx) | 0 |
| `CircleButton_IconPrimary` | `UBTConnectLibrary` | [`components/ui/CircleButtonIconPrimary/CircleButtonIconPrimary.tsx`](../../app/src/components/ui/CircleButtonIconPrimary/CircleButtonIconPrimary.tsx) | 0 |
| `CircleButton_WithLabel` | `UBTConnectLibrary` | [`components/ui/CircleButtonWithLabel/CircleButtonWithLabel.tsx`](../../app/src/components/ui/CircleButtonWithLabel/CircleButtonWithLabel.tsx) | 0 |
| `CircleButton` | `UBTConnectLibrary` | [`components/ui/CircleButton/CircleButton.tsx`](../../app/src/components/ui/CircleButton/CircleButton.tsx) | 0 |
| `ContactByMessage_Wrapper` | `UBTConnect_Utils` | [`components/contact/ContactByMessage/ContactByMessage.tsx`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx) | 1 |
| `ContactPopup_ByMessage` | `UBTConnect_Utils` | [`components/contact/ContactPopupByMessage/ContactPopupByMessage.tsx`](../../app/src/components/contact/ContactPopupByMessage/ContactPopupByMessage.tsx) | 0 |
| `ContactPopup_ByPhone` | `UBTConnect_Utils` | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| `SharePopup` | `UBTConnect_Utils` | [`components/share/SharePopup/SharePopup.tsx`](../../app/src/components/share/SharePopup/SharePopup.tsx) | 0 |
| `ExpandableSection` | `UBTConnectLibrary` | [`containers/OneSchoolGlobalDetails/components/ExpandableSection.tsx`](../../app/src/containers/OneSchoolGlobalDetails/components/ExpandableSection.tsx) | 0 |
| `ComingSoon` | `UBTConnectLibrary` | [`components/ui/ComingSoon/ComingSoon.tsx`](../../app/src/components/ui/ComingSoon/ComingSoon.tsx) | 0 |
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../app/src/components/ui/Badge/Badge.tsx) | 0 |
| `NotesSheet` | `UBTConnect_Utils` | [`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | 1 |
| `ShareSheet` | `UBTConnect_Utils` | [`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx), [`containers/ShareSheet/components/ShareSheetFirstStep.tsx`](../../app/src/containers/ShareSheet/components/ShareSheetFirstStep.tsx), [`containers/ShareSheet/components/ShareSheetSearchStep.tsx`](../../app/src/containers/ShareSheet/components/ShareSheetSearchStep.tsx), [`containers/ShareSheet/shareSheetState.ts`](../../app/src/containers/ShareSheet/shareSheetState.ts), [`containers/ShareSheet/useShareSheet.ts`](../../app/src/containers/ShareSheet/useShareSheet.ts) | 5 |

<details><summary>User actions of the shared blocks (22)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 2 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 3 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 4 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |
| 6 | `External_Link` | `clicked of IconText` | `linkClicked` | – | goes to URL in_Link.link; opens an external link |
| 7 | `Directory_EntityDetailsActions` | `event_Click_Bookmark of ActionsMenu`<br>`event_Click_Unbookmark of ActionsMenu` | `handle_Bookmark` | – | calls AddBookmark2, DeleteBookmarkByBookmarkId2 |
| 8 | `Directory_EntityDetailsActions` | `event_Click_Notes of ActionsMenu` | `handler_AddNotesOnClick` | – | calls FetchNotes |
| 9 | `Directory_EntityDetailsActions` | `event_Cancel of Wrapper`<br>`event_Click_Email of ActionsMenu` | `handle_Mail` | – | goes to ContactByEmailOneSchoolGlobal |
| 10 | `Directory_EntityDetailsActions` | `event_Email of Wrapper` | `handle_Mail_Page` | – | goes to ContactByEmailMember |
| 11 | `Directory_EntityDetailsActions` | `event_ShareToConnect of SharePopup` | `handle_Share_Connect` | – | goes to LegacyShareObject |
| 12 | `Directory_EntityDetailsActions` | `event_ShareToOthers of SharePopup` | `handle_Share_Others` | – | calls GetAllApplicationEvents, CS_CreateShareProfileLink, AppManager_SynchAppContext |
| 13 | `Layout_DetailPage` | `click of Icon` | `onClick_BackNavigation` | – | goes to previous screen |
| 14 | `AddressPopup_Wrapper` | `event_OpenInGoogleMaps of AddressPopup`<br>`event_OpenInMaps of AddressPopup` | `handler_OpenInMapsOrGoogleMaps` | – | goes to URL mapsAddress; opens an external link; shows a message |
| 15 | `ContactByMessage_Wrapper` | `event_SelectedMessageChannel of ByMessage` | `handler_SelectedMessageChannel` | – | opens an external link |
| 16 | `ContactPopup_ByPhone` | `event_Clicked of ContactPopup` | `onClick_CallButton` | – | opens an external link |
| 17 | `NotesSheet` | `onSubmitRequested of AddNote` | `handler_OnSubmitNote` | – | calls AddNote; shows a message |
| 18 | `ShareSheet` | `onClick of WithLabel` | `handler_OnClickRecentMember` | – | calls CS_ShareObject; shows a message; asks for a confirmation |
| 19 | `ShareSheet` | `onClick of WithLabel` | `handler_OnClickExternalOption` | – | calls CS_CreateShareProfileLink |
| 20 | `ShareSheet` | `event_Submit of Input` | `handler_InputEventSubmit` | – | calls GetAvailableMembers |
| 21 | `ShareSheet` | `click of Icon` | `handler_SearchResultItemOnSelect` | – | shows a message |
| 22 | `ShareSheet` | `buttonOnClick of Button` | `handler_OnClickSend` | – | calls CS_ShareObject; shows a message |

</details>


### React

| File | User actions |
|---|---|
| [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx) | 2 |
| [`components/contact/ContactByMessage/ContactByMessage.tsx`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx) | 1 |
| [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx) | 1 |
| [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | 1 |
| [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | 7 |
| [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) | 2 |
| [`containers/OneSchoolGlobalDetails/components/External_Link.tsx`](../../app/src/containers/OneSchoolGlobalDetails/components/External_Link.tsx) | 1 |
| [`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | 5 |

<details><summary>User actions of the shared components (35)</summary>

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
| 15 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:100`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L100) | `<ActionsMenu>` | `onEventClickBookmark` | `onClickBookmark` | – | calls ServiceAPIDeleteBookmarkByBookmarkId2, ServiceAPIAddBookmark2; shows a message; calls the prop onOnChangeBookmark() |
| 16 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:101`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L101) | `<ActionsMenu>` | `onEventClickUnbookmark` | `onClickBookmark` | – | calls ServiceAPIDeleteBookmarkByBookmarkId2, ServiceAPIAddBookmark2; shows a message; calls the prop onOnChangeBookmark() |
| 17 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:109`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L109) | `<ActionsMenu>` | `onEventClickNotes` | `inline` | – | calls DataActionFetchNotes |
| 18 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:112`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L112) | `<ActionsMenu>` | `onEventClickEmail` | `inline` | – | goes to ContactByEmailOneSchoolGlobal |
| 19 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:123`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L123) | `<ContactByMessage>` | `onEventCancel` | `inline` | – | goes to ContactByEmailOneSchoolGlobal |
| 20 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:126`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L126) | `<ContactByMessage>` | `onEventEmail` | `handleMailPage` | – | goes to ContactByEmailMember |
| 21 | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:155`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L155) | `<SharePopup>` | `onEventShareToConnect` | `inline` | – | goes to LegacyShareObject |
| 22 | [`containers/ShareSheet/ShareSheetContainer.tsx:111`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L111) | `<ShareSheetFirstStep>` | `onClickRecentMember` | `onClickRecentMember` | – | calls ActionCS_ShareObject; shows a message; asks for a confirmation |
| 23 | [`containers/ShareSheet/ShareSheetContainer.tsx:127`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L127) | `<ShareSheetSearchStep>` | `onSubmit` | `onSubmit` | – | setSearchFetchId(): a query fetches again |
| 24 | [`containers/ShareSheet/ShareSheetContainer.tsx:129`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L129) | `<ShareSheetSearchStep>` | `onSelect` | `onSelect` | – | shows a message |
| 25 | [`containers/ShareSheet/ShareSheetContainer.tsx:130`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L130) | `<ShareSheetSearchStep>` | `onClickUpgradeSubscription` | `onClickUpgradeSubscription` | – | opens an external link |
| 26 | [`containers/ShareSheet/ShareSheetContainer.tsx:148`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L148) | `<ActionButton>` | `onButtonOnClick` | `onClickSend` | – | calls ActionCS_ShareObject; shows a message |
| 27 | [`components/note/NotesSheet/NotesSheet.tsx:175`](../../app/src/components/note/NotesSheet/NotesSheet.tsx#L175) | `<AddNote>` | `onOnSubmitRequested` | `addNoteRequested` | – | calls ServiceAPIAddNote; shows a message; calls the prop onOnNotesChanged() |
| 28 | [`containers/NoteListActions/NoteListActionsContainer.tsx:157`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L157) | `<NoteList>` | `onOnDeleteRequested` | `inline` | – | calls ServiceAPIDeleteNoteByNoteId; shows a message; calls the prop onOnNoteDeleted() |
| 29 | [`containers/NoteListActions/NoteListActionsContainer.tsx:160`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L160) | `<NoteList>` | `onOnSaveEditRequested` | `inline` | – | calls ServiceAPIUpdateNote; shows a message; calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged(); calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged() |
| 30 | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx:66`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx#L66) | `<ContactPopup>` | `onEventClicked` | `inline` | – | opens an external link; calls the prop onEventCall() |
| 31 | [`components/contact/ContactByMessage/ContactByMessage.tsx:64`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx#L64) | `<ContactPopupByMessage>` | `onEventSelectedMessageChannel` | `handlerSelectedMessageChannel` | `Email` | calls the prop onEventMessageChannel(); calls the prop onEventEmail() |
| 32 | [`components/contact/ContactByMessage/ContactByMessage.tsx:64`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx#L64) | `<ContactPopupByMessage>` | `onEventSelectedMessageChannel` | `handlerSelectedMessageChannel` | `Call` | opens an external link; calls the prop onEventMessageChannel(); calls the prop onEventCall() |
| 33 | [`containers/OneSchoolGlobalDetails/components/External_Link.tsx:56`](../../app/src/containers/OneSchoolGlobalDetails/components/External_Link.tsx#L56) | `<IconText>` | `onClicked` | `linkClicked` | – | opens an external link |
| 34 | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx:110`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx#L110) | `<AddressPopup>` | `onEventOpenInGoogleMaps` | `inline` | – | opens an external link; shows a message |
| 35 | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx:113`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx#L113) | `<AddressPopup>` | `onEventOpenInMaps` | `inline` | – | opens an external link; shows a message |

</details>

