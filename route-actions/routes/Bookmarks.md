# Bookmarks: OutSystems (TST) and React

The route `/UBTConnect/Bookmarks`, read from the TST compiled code and from the React code by `route-actions/tools/check_route.py` on 2026-11-05. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/Bookmarks/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 23 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/runtime-sources/live/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `FilterSheet`, `FilterSheet_Icon_Label`, `ItemCardActions`, `Bookmarks`, `Bookmarks_Card_Item`, `Bookmarks_Card_List`, `UBTConnect`, `js`, `js`, `AvatarImage`, `Horizontal_Filter_TagList`, `ItemCard_WithNotes`, `UBTConnectLibrary`, `js`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/Bookmarks` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Bookmarks.Bookmarks` | TST compiled code |
| UI flow | `Bookmarks` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/Bookmarks/BookmarksPage.tsx`](../../app/src/pages/Bookmarks/BookmarksPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/Bookmarks/parity`](../../migration/screens/Bookmarks/parity) | `route.py parity` |
| Code read | OutSystems: 4 files of the UI flow, 28 shared blocks, 29 app shell files. React: 212 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 5: React makes 5, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 5: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 9 |
| Screen and blocks of the UI flow with a React port | 4 of 4 |
| Navigation targets found in React | 12 of 12 |
| Shared blocks and components on the route | OutSystems 28, React 9 with user actions: see the last section |
| App shell on this route | 10 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

None.

React reaches 5 more calls without a TST chain on this route only through shared containers, components or app code. The last section lists them, not this one.

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
| 1 | `UBTConnect/Bookmarks/Bookmarks/DataActionGetBookmarks` | data action | `Bookmarks` | Bookmarks_Card_List.bookmarksCardList_OnScrollEnding → event onLoadMore of Bookmarks_Card_List → Bookmarks.bookmarks_Card_ListOnLoadMore → Bookmarks.refresh_GetBookmarksData → Bookmarks.DataActionGetBookmarks<br>event event_OnClick of Button → FilterSheet.onClick_ClearFilters → … → Bookmarks.refresh_GetBookmarksData → Bookmarks.DataActionGetBookmarks<br>onClick in Button → event event_OnClick of Button → … → Bookmarks.refresh_GetBookmarksData → Bookmarks.DataActionGetBookmarks<br>(+1 more chains) | yes | `fetchBookmarkCards()` [`api/bookmark/bookmarkCards.ts:107`](../../app/src/api/bookmark/bookmarkCards.ts#L107) (page) | `Bookmarks → useBookmarks → fetchBookmarkCards`<br>[`pages/Bookmarks/BookmarksPage.tsx`](../../app/src/pages/Bookmarks/BookmarksPage.tsx) | implemented |
| 2 | `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote` | service action | `NotesSheet` | NotesSheet.handler_OnSubmitNote → server AddNote | no | `addNote()` [`api/note/repository.ts:54`](../../app/src/api/note/repository.ts#L54) (page) | `NotesSheet → addNote`<br>[`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | implemented |
| 3 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |
| 4 | `UBTConnect_Utils/ServiceAPIAddBookmark2` | service action | `UBTConnect_Utils` | onClick in IconText → event clicked of IconText → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server AddBookmark2 | no | `addC2Bookmark()` [`api/bookmark/repository.ts:16`](../../app/src/api/bookmark/repository.ts#L16) (page) | `Bookmarks → useBookmarks → bookmarkServerActions → addC2Bookmark`<br>[`pages/Bookmarks/BookmarksPage.tsx`](../../app/src/pages/Bookmarks/BookmarksPage.tsx) | implemented |
| 5 | `UBTConnect_Utils/ServiceAPIDeleteBookmarkByBookmarkId2` | service action | `UBTConnect_Utils` | onClick in IconText → event clicked of IconText → … → UBTConnect_Utils.toggleBookmarkItem_C2 → server DeleteBookmarkByBookmarkId2 | no | `deleteC2Bookmark()` [`api/bookmark/repository.ts:27`](../../app/src/api/bookmark/repository.ts#L27) (page) | `Bookmarks → useBookmarks → bookmarkServerActions → deleteC2Bookmark`<br>[`pages/Bookmarks/BookmarksPage.tsx`](../../app/src/pages/Bookmarks/BookmarksPage.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `Bookmarks` | `onClick_BookmarkCardItem of List` | `handler_OnClickBookmarkCardItem` | `interchange` | goes to Locality_Details |
| 2 | `Bookmarks` | `onClick_BookmarkCardItem of List` | `handler_OnClickBookmarkCardItem` | `member` | goes to Household_Relations |
| 3 | `Bookmarks` | `onClick_BookmarkCardItem of List` | `handler_OnClickBookmarkCardItem` | `oneSchoolGlobal2` | goes to OneSchoolGlobalCarousel |
| 4 | `Bookmarks` | `onClick_BookmarkCardItem of List` | `handler_OnClickBookmarkCardItem` | `supperMeeting` | goes to SupperMeeting_Details |
| 5 | `Bookmarks` | `onClick_BookmarkCardItem of List` | `handler_OnClickBookmarkCardItem` | `household` | goes to HouseholdCarousel |
| 6 | `Bookmarks` | `onClick_BookmarkCardItem of List` | `handler_OnClickBookmarkCardItem` | `other` | shows a message |

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| 1 | [`pages/Bookmarks/BookmarksPage.tsx:57`](../../app/src/pages/Bookmarks/BookmarksPage.tsx#L57) | `<Input>` | `onEventClearString` | `f.onSearchClear` | – | calls DataActionGetBookmarks |
| 2 | [`pages/Bookmarks/BookmarksPage.tsx:58`](../../app/src/pages/Bookmarks/BookmarksPage.tsx#L58) | `<Input>` | `onEventSubmit` | `f.onSearchSubmit` | – | calls DataActionGetBookmarks |
| 3 | [`pages/Bookmarks/BookmarksPage.tsx:76`](../../app/src/pages/Bookmarks/BookmarksPage.tsx#L76) | `<Horizontal_Filter_TagList>` | `onChanged` | `f.onClickPill` | – | calls DataActionGetBookmarks |
| 4 | [`pages/Bookmarks/BookmarksPage.tsx:84`](../../app/src/pages/Bookmarks/BookmarksPage.tsx#L84) | `<FilterSheet_Icon_Label>` | `onShowUpgradePopUp` | `showUpgradePopUp` | – | asks for a confirmation |
| [5](#625-bookmarks_card_list-ononclickbookmarkcarditem) | [`pages/Bookmarks/BookmarksPage.tsx:96`](../../app/src/pages/Bookmarks/BookmarksPage.tsx#L96) | `<Bookmarks_Card_List>` | `onOnClickBookmarkCardItem` | `f.onClickBookmarkCardItem` | – | goes to Locality_Details, Household_Relations, OneSchoolGlobalCarousel, SupperMeeting_Details, HouseholdCarousel; shows a message |
| 6 | [`pages/Bookmarks/BookmarksPage.tsx:97`](../../app/src/pages/Bookmarks/BookmarksPage.tsx#L97) | `<Bookmarks_Card_List>` | `onItemUnbookmarked` | `f.onItemUnbookmarked` | – | calls DataActionGetBookmarks |
| [7](#627-bookmarks_card_list-ononloadmore) | [`pages/Bookmarks/BookmarksPage.tsx:99`](../../app/src/pages/Bookmarks/BookmarksPage.tsx#L99) | `<Bookmarks_Card_List>` | `onOnLoadMore` | `f.onLoadMore` | – | calls DataActionGetBookmarks, ActionGet_BookmarkPills_ByBookmarkCategoryIds |
| 8 | [`pages/Bookmarks/BookmarksPage.tsx:111`](../../app/src/pages/Bookmarks/BookmarksPage.tsx#L111) | `<Bookmarks_FilterSheet>` | `onApplyFilters` | `f.onApplyFilters` | – | calls DataActionGetBookmarks |
| [9](#629-notificationicon-oniconclick) | [`pages/Bookmarks/BookmarksPage.tsx:41`](../../app/src/pages/Bookmarks/BookmarksPage.tsx#L41) | `<NotificationIcon>` | `onIconClick` | `notificationIcon.onIconClick` | – | goes to Notifications, MessageList |

<details><summary>3 diagrams (handlers with two or more effects)</summary>

#### 6.2.5 Bookmarks_Card_List: onOnClickBookmarkCardItem

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Bookmarks_Card_List · BookmarksPage.tsx
  participant N as Navigation
  U->>H: onOnClickBookmarkCardItem → f.onClickBookmarkCardItem
  Note over H: message { title: '', message: unauthorizedObjectMessage(objectType, latest.current.bookmarkPills),
  H->>N: go to Locality_Details
  H->>N: go to Household_Relations
  H->>N: go to OneSchoolGlobalCarousel
  H->>N: go to SupperMeeting_Details
  H->>N: go to HouseholdCarousel
```

#### 6.2.7 Bookmarks_Card_List: onOnLoadMore

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Bookmarks_Card_List · BookmarksPage.tsx
  participant A as Server (React api)
  U->>H: onOnLoadMore → f.onLoadMore
  Note over H: via refresh_GetBookmarksData()
  Note over H: via fetchBookmarkCards()
  H->>A: DataActionGetBookmarks(BookmarkPills, Bookmarks_Filter, Bookmarks_List, …)
  A-->>H: Out_Bookmarks
  Note over H: via reset_PillsValues()
  Note over H: via get_LocalDynamicBookmarkPills()
  Note over H: via fetchBookmarkPills()
  H->>A: ActionGet_BookmarkPills_ByBookmarkCategoryIds(In_BookmarkCategoryIds)
  A-->>H: Out_BookmarkPills
```

#### 6.2.9 NotificationIcon: onIconClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as NotificationIcon · BookmarksPage.tsx
  participant N as Navigation
  U->>H: onIconClick → notificationIcon.onIconClick
  H->>N: go to Notifications
  H->>N: go to MessageList
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in the `analysis/sources/raw/` folder of the route; the files that TST changed after the capture are in `migration/runtime-sources/live/`.

### 7.1 OutSystems (TST)

Screen inputs: none. `setInputs` of `Bookmarks` reads no input.

| Block | Target | Parameters | Place |
|---|---|---|---|
| `Bookmarks` | `Locality_Details` | `LocalityId` = `textToLongInteger(notes_InterchangeId_ExtractId.interchangeLocalityId)`<br>`TagsList_SelectedTag` = `OS.DataConversion.ServerDataConverter.asString(OutSystemsDebugger.handleFunctionCall(funct…` | [`UBTConnect.Bookmarks.Bookmarks.mvc.js:1105`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1105) |
| `Bookmarks` | `Household_Relations` | `HouseholdId` = `textToLongInteger(objectId2)`<br>`MemberId` = `textToLongInteger(objectId)` | [`UBTConnect.Bookmarks.Bookmarks.mvc.js:1124`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1124) |
| `Bookmarks` | `OneSchoolGlobalCarousel` | `In_StartingObjectId` = `textToLongInteger(objectId)` | [`UBTConnect.Bookmarks.Bookmarks.mvc.js:1147`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1147) |
| `Bookmarks` | `SupperMeeting_Details` | `In_SubdivsionId` = `textToLongInteger(objectId)` | [`UBTConnect.Bookmarks.Bookmarks.mvc.js:1160`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1160) |
| `Bookmarks` | `HouseholdCarousel` | `In_StartingHouseholdId` = `textToLongInteger(objectId)` | [`UBTConnect.Bookmarks.Bookmarks.mvc.js:1185`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1185) |

### 7.2 React

Declared inputs of the route: none (`app/src/app/routes.generated.ts`).

Parameters read (`useSearchParams`, `useParams`): none.

| File | Target | Parameters | Place |
|---|---|---|---|
| `bookmarksState.ts` | `Locality_Details` | `LocalityId` = `longIntegerText(notes_InterchangeId_ExtractId(objectId).Inte…`<br>`TagsList_SelectedTag` = `LocalityMenu.Interchange` | [`pages/Bookmarks/hooks/bookmarksState.ts:163`](../../app/src/pages/Bookmarks/hooks/bookmarksState.ts#L163) |
| `bookmarksState.ts` | `Household_Relations` | `HouseholdId` = `longIntegerText(objectId2)`<br>`MemberId` = `longIntegerText(objectId)` | [`pages/Bookmarks/hooks/bookmarksState.ts:171`](../../app/src/pages/Bookmarks/hooks/bookmarksState.ts#L171) |
| `bookmarksState.ts` | `OneSchoolGlobalCarousel` | `In_StartingObjectId` = `longIntegerText(objectId)` | [`pages/Bookmarks/hooks/bookmarksState.ts:176`](../../app/src/pages/Bookmarks/hooks/bookmarksState.ts#L176) |
| `bookmarksState.ts` | `SupperMeeting_Details` | `In_SubdivsionId` = `longIntegerText(objectId)` | [`pages/Bookmarks/hooks/bookmarksState.ts:182`](../../app/src/pages/Bookmarks/hooks/bookmarksState.ts#L182) |
| `bookmarksState.ts` | `HouseholdCarousel` | `In_StartingHouseholdId` = `longIntegerText(objectId)` | [`pages/Bookmarks/hooks/bookmarksState.ts:184`](../../app/src/pages/Bookmarks/hooks/bookmarksState.ts#L184) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `Bookmarks` | OnInitialize ([`UBTConnect.Bookmarks.Bookmarks.mvc.js:2021`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L2021)) | `screenEvent_OnInitialize` | 1. JavaScript: CheckRestored ([`L1558`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1558))<br>2. If (checkRestored.fromCache2 \|\| checkRestored.fromHistory2) ([`L1571`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1571))<br>3. PageNumber = 1 ([`L1573`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1573))<br>4. Else ([`L1576`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1576))<br>5. Bookmarks_Loading = True ([`L1578`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1578))<br>6. If bookmarkPills.isEmpty ([`L1580`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1580))<br>7. Execute Action: SkeletonLoader_Pills ([`L1582`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1582))<br>8. If bookmarks_List.isEmpty ([`L1586`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1586))<br>9. Execute Action: SkeletonLoader_Bookmarks ([`L1588`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1588))<br>10. Execute Action: GetBookmarks_FilterYear ([`L1593`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1593))<br>11. Execute Action: ListClear ([`L1597`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1597))<br>12. Years = GetBookmarks_FilterYear.Out_Years ([`L1600`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1600)) |
| `Bookmarks` | OnReady ([`UBTConnect.Bookmarks.Bookmarks.mvc.js:2039`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L2039)) | `screenEvent_OnReady` | 1. Execute Action: Reset_PillsValues ([`L1758`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1758))<br>2. Execute Action: Refresh_GetBookmarksData ([`L1761`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1761)) |
| `Bookmarks_Card_List` | OnInitialize ([`UBTConnect.Bookmarks.Bookmarks_Card_List.mvc.js:661`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks_Card_List.mvc.js#L661)) | `onInitialize` | none |
| `Bookmarks_Card_List` | OnReady ([`UBTConnect.Bookmarks.Bookmarks_Card_List.mvc.js:679`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks_Card_List.mvc.js#L679)) | `onReady` | none |
| `Bookmarks_FilterSheet` | OnInitialize ([`UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc.js:585`](../../migration/screens/Bookmarks/analysis/sources/raw/UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc.js#L585)) | `onInitialize` | 1. Execute Action: Initialize_FilterYearOptions ([`L310`](../../migration/screens/Bookmarks/analysis/sources/raw/UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc.js#L310)) |
| `Bookmarks_FilterSheet` | OnParametersChanged ([`UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc.js:606`](../../migration/screens/Bookmarks/analysis/sources/raw/UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc.js#L606)) | `onParametersChanged` | 1. Execute Action: Initialize_FilterYearOptions ([`L286`](../../migration/screens/Bookmarks/analysis/sources/raw/UBTConnect.Bookmarks.Bookmarks_FilterSheet.mvc.js#L286)) |

<details><summary>Sequence diagrams of the screen event handlers (2)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 Bookmarks: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as Bookmarks
  R->>B: OnInitialize → screenEvent_OnInitialize
  B->>B: JavaScript CheckRestored
  alt (checkRestored.fromCache2 || checkRestored.fromHistory2)
    Note over B: PageNumber = 1
  else other
    Note over B: Bookmarks_Loading = True
    alt bookmarkPills.isEmpty
      B->>B: action SkeletonLoader_Pills
    end
    alt bookmarks_List.isEmpty
      B->>B: action SkeletonLoader_Bookmarks
    end
    B->>B: action GetBookmarks_FilterYear
    B->>B: action ListClear
    Note over B: Years = GetBookmarks_FilterYear.Out_Years
  end
```

#### 8.1.2 Bookmarks: OnReady

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as Bookmarks
  R->>B: OnReady → screenEvent_OnReady
  B->>B: action Reset_PillsValues
  B->>B: action Refresh_GetBookmarksData
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `Bookmarks` | `GetBookmarks` | on demand (`-1`) | `action getBookmarksOnAfterFetch` ([`UBTConnect.Bookmarks.Bookmarks.mvc.js:746`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L746)), `action bookmarks_Card_ListOnLoadMore` ([`UBTConnect.Bookmarks.Bookmarks.mvc.js:1660`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L1660)) | [`UBTConnect.Bookmarks.Bookmarks.mvc.js:688`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L688) |

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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Bookmarks.Bookmarks.mvc.js:2063`](../../migration/runtime-sources/live/UBTConnect.Bookmarks.Bookmarks.mvc.js#L2063) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Bookmarks` not in `migration/shell/sources/`. Handled errors: none.

### 11.2 React

None.

`flow handler`: `raiseToFlowHandler` gives the error to the flow handler of the screen (`app/src/platform/feedback/flowErrors.ts`). The tool lists `.catch`, `try/catch` and `onError` that do not give the error to it.

## 12. Shared blocks and components on this route

Blocks of other UI flows and modules (OutSystems), and files outside `app/src/pages/` (React) that the route renders. Their facts belong to them, not to the route. This section gives their user actions once, without diagrams.

### OutSystems (TST)

| Block | Module | React port | User actions |
|---|---|---|---|
| `Layout_MainPages_FixedTitle` | `UBTConnectLibrary` | [`components/layout/MainLayoutFixedTitle/MainLayoutFixedTitle.tsx`](../../app/src/components/layout/MainLayoutFixedTitle/MainLayoutFixedTitle.tsx) | 0 |
| `App_NotificationIcon` | `UBTConnect` | [`components/notification/NotificationIcon/NotificationIcon.tsx`](../../app/src/components/notification/NotificationIcon/NotificationIcon.tsx), [`platform/session/useNotificationIcon.ts`](../../app/src/platform/session/useNotificationIcon.ts) | 1 |
| `App_IconBadge` | `UBTConnect` | [`components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx`](../../app/src/components/layout/BottomBarIconBadge/BottomBarIconBadge.tsx) | 0 |
| `IconBadge` | `UBTConnectLibrary` | [`components/ui/IconBadge/IconBadge.tsx`](../../app/src/components/ui/IconBadge/IconBadge.tsx) | 0 |
| `Badge` | `UBTConnectLibrary` | [`components/ui/Badge/Badge.tsx`](../../app/src/components/ui/Badge/Badge.tsx) | 0 |
| `App_NotificationRefresh` | `UBTConnect` | [`components/notification/NotificationRefresh/NotificationRefresh.tsx`](../../app/src/components/notification/NotificationRefresh/NotificationRefresh.tsx) | 0 |
| `Input` | `UBTConnectLibrary` | [`components/ui/Input/Input.tsx`](../../app/src/components/ui/Input/Input.tsx) | 0 |
| `InputWithIcon` | `OutSystemsUI_2_23` | [`components/ui/InputWithIcon/InputWithIcon.tsx`](../../app/src/components/ui/InputWithIcon/InputWithIcon.tsx) | 0 |
| `Horizontal_Filter_TagList` | `UBTConnectLibrary` | [`components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx`](../../app/src/components/filter/HorizontalFilterTagList/Horizontal_Filter_TagList.tsx) | 0 |
| `FilterSheet_Icon_Label` | `UBTConnect` | [`components/filter/FilterSheetIconLabel/FilterSheet_Icon_Label.tsx`](../../app/src/components/filter/FilterSheetIconLabel/FilterSheet_Icon_Label.tsx) | 1 |
| `TagToggle` | `UBTConnectLibrary` | [`components/ui/TagToggle/TagToggle.tsx`](../../app/src/components/ui/TagToggle/TagToggle.tsx) | 0 |
| `ItemCard_WithNotes` | `UBTConnectLibrary` | [`components/note/ItemCardWithNotes/ItemCard_WithNotes.tsx`](../../app/src/components/note/ItemCardWithNotes/ItemCard_WithNotes.tsx) | 0 |
| `AvatarImage` | `UBTConnectLibrary` | [`components/ui/AvatarImage/AvatarImage.tsx`](../../app/src/components/ui/AvatarImage/AvatarImage.tsx) | 0 |
| `IconText` | `UBTConnectLibrary` | [`components/ui/IconText/IconText.tsx`](../../app/src/components/ui/IconText/IconText.tsx) | 0 |
| `ItemCardActions` | `UBTConnect` | [`components/note/ItemCardActions/ItemCardActions.tsx`](../../app/src/components/note/ItemCardActions/ItemCardActions.tsx) | 1 |
| `ItemCard_ActionBar` | `UBTConnectLibrary` | [`components/note/ItemCardActions/ItemCard_ActionBar.tsx`](../../app/src/components/note/ItemCardActions/ItemCard_ActionBar.tsx) | 0 |
| `NotesSheet` | `UBTConnect_Utils` | [`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | 1 |
| `BottomBarMenu` | `UBTConnect` | [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 1 |
| `BottomBarContent` | `UBTConnect` | [`components/layout/BottomBarContent/BottomBarContent.tsx`](../../app/src/components/layout/BottomBarContent/BottomBarContent.tsx) | 0 |
| `BottomBarItem` | `OutSystemsUI_2_23` | [`components/ui/BottomBarItem/BottomBarItem.tsx`](../../app/src/components/ui/BottomBarItem/BottomBarItem.tsx) | 0 |
| `FilterSheet` | `UBTConnect` | [`components/filter/FilterSheet/FilterSheet.tsx`](../../app/src/components/filter/FilterSheet/FilterSheet.tsx), [`components/filter/FilterSheet/filterSheetActions.ts`](../../app/src/components/filter/FilterSheet/filterSheetActions.ts), [`components/filter/FilterSheet/filterSheetState.ts`](../../app/src/components/filter/FilterSheet/filterSheetState.ts), [`components/filter/FilterSheet/useFilterSheet.ts`](../../app/src/components/filter/FilterSheet/useFilterSheet.ts), [`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) | 0 |
| `BottomSheet` | `UBTConnectLibrary` | [`components/ui/ConnectBottomSheet/ConnectBottomSheet.tsx`](../../app/src/components/ui/ConnectBottomSheet/ConnectBottomSheet.tsx) | 0 |
| `BottomSheet` | `OutSystemsUI_2_23` | [`components/ui/BottomSheet/BottomSheet.tsx`](../../app/src/components/ui/BottomSheet/BottomSheet.tsx) | 0 |
| `Columns_Three` | `UBTConnectLibrary` | [`components/ui/ColumnsThree/ColumnsThree.tsx`](../../app/src/components/ui/ColumnsThree/ColumnsThree.tsx) | 0 |
| `Columns3` | `OutSystemsUI_2_23` | [`components/ui/Columns3/Columns3.tsx`](../../app/src/components/ui/Columns3/Columns3.tsx) | 0 |
| `FilterSheet_OptionChoice_Item` | `UBTConnect` | [`components/filter/FilterOptionChoice/FilterOptionChoice.tsx`](../../app/src/components/filter/FilterOptionChoice/FilterOptionChoice.tsx) | 0 |
| `SelectionOption_List` | `UBTConnectLibrary` | [`components/ui/SelectionOptionList/SelectionOptionList.tsx`](../../app/src/components/ui/SelectionOptionList/SelectionOptionList.tsx) | 0 |
| `Button` | `UBTConnectLibrary` | [`components/ui/Button/Button.tsx`](../../app/src/components/ui/Button/Button.tsx) | 0 |

<details><summary>User actions of the shared blocks (9)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 2 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 3 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 4 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |
| 6 | `FilterSheet_Icon_Label` | `click of Icon`<br>`clicked of CustomContainer` | `iconClick` | – | asks for a confirmation |
| 7 | `App_NotificationIcon` | `onClick of IconBadge` | `iconClick` | – | goes to Notifications, MessageList |
| 8 | `ItemCardActions` | `onClickUnbookmark of ActionBar` | `handler_OnClickUnmark` | – | calls AddBookmark2, DeleteBookmarkByBookmarkId2 |
| 9 | `NotesSheet` | `onSubmitRequested of AddNote` | `handler_OnSubmitNote` | – | calls AddNote; shows a message |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/note/ItemCardActions/ItemCardActions.tsx`](../../app/src/components/note/ItemCardActions/ItemCardActions.tsx) | 1 |
| [`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | 1 |
| [`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) | 1 |
| [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) | 2 |
| [`legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx`](../../app/src/legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx) | 1 |
| [`legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx`](../../app/src/legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx) | 1 |
| [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx) | 1 |

<details><summary>User actions of the shared components (22)</summary>

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
| 19 | [`components/note/ItemCardActions/ItemCardActions.tsx:52`](../../app/src/components/note/ItemCardActions/ItemCardActions.tsx#L52) | `<ItemCard_ActionBar>` | `onClickUnbookmark` | `inline` | – | calls ServiceAPIDeleteBookmarkByBookmarkId2, ServiceAPIAddBookmark2; shows a message; calls the prop onEventItemUnbookmarked() |
| 20 | [`components/note/NotesSheet/NotesSheet.tsx:175`](../../app/src/components/note/NotesSheet/NotesSheet.tsx#L175) | `<AddNote>` | `onOnSubmitRequested` | `addNoteRequested` | – | calls ServiceAPIAddNote; shows a message; calls the prop onOnNotesChanged() |
| 21 | [`containers/NoteListActions/NoteListActionsContainer.tsx:157`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L157) | `<NoteList>` | `onOnDeleteRequested` | `inline` | – | calls ServiceAPIDeleteNoteByNoteId; shows a message; calls the prop onOnNoteDeleted() |
| 22 | [`containers/NoteListActions/NoteListActionsContainer.tsx:160`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L160) | `<NoteList>` | `onOnSaveEditRequested` | `inline` | – | calls ServiceAPIUpdateNote; shows a message; calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged(); calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged() |

</details>


### React calls reached only through shared code

Calls that React can make on this route, without a TST chain on this route. Every reference chain starts in a shared container, component or app code (`containers/`, `components/`, `platform/`, `legacy/`, `lib/`), not in the screen files. TST makes these calls on a user action of the shared block, which the capture did not record, or on another screen.

| Call | React action | Reached through |
|---|---|---|
| `/api/UBTConnect_Utils/CacheControl_UserInfo/DataActionGetCacheInfo` | `UserInfoCacheControl()` [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:37`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L37) | `FilterSheetContainer` [`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) |
| `/api/UBTConnect_Utils/CacheControl_AllLocalities/DataActionGetCacheInfo` | `fetchAllLocalities()` [`api/locality/repository.ts:157`](../../app/src/api/locality/repository.ts#L157) | `FilterSheetContainer` [`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) |
| `/api/UBTConnect_Utils/CacheControl_AllCountries/DataActionGetCacheInfo` | `fetchAllCountries()` [`api/country/repository.ts:94`](../../app/src/api/country/repository.ts#L94) | `FilterSheetContainer` [`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) |
| `/api/UBTConnect_Utils/ServiceAPIDeleteNoteByNoteId` | `deleteNote()` [`api/note/repository.ts:73`](../../app/src/api/note/repository.ts#L73) | `NoteListActionsContainer` [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) |
| `/api/UBTConnect_Utils/ServiceAPIUpdateNote` | `updateNote()` [`api/note/repository.ts:66`](../../app/src/api/note/repository.ts#L66) | `NoteListActionsContainer` [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) |
