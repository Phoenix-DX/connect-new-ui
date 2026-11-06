# Notes: OutSystems (TST) and React

The route `/UBTConnect/Notes`, read from the TST compiled code and from the React code by `tools/route-check/check_route.py` on 2026-11-06. Facts only, each with its place. The method is in [README.md](../README.md).

Scope of this file: the screen and the blocks of its UI flow (OutSystems), the files of `app/src/pages/Notes/` (React). The app shell is in [APP_SHELL.md](../APP_SHELL.md). The shared blocks and components that the route uses are in the last section.

**Live code.** TST changed 19 compiled files of this route after the capture (`migration/knowledge/tst-drift-2026-11-05.md`). The tool read the live copies in `migration/sources/runtime/` for: `Connect2_LegacyShared`, `js`, `NavigationHandler`, `OutSystemsUI_2_23`, `js`, `FilterSheet`, `FilterSheet_Icon_Label`, `NoteCard_List`, `Notes`, `UBTConnect`, `js`, `js`, `Horizontal_Filter_TagList`, `UBTConnectLibrary`, `js`, `UBTConnect_Utils`, `js`, `UBT_AppManager`, `UBT_AppManager_Mobile`. The observed calls come from the capture.

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/Notes` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Notes.Notes` | TST compiled code |
| UI flow | `Notes` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/Notes/NotesPage.tsx`](../../app/src/pages/Notes/NotesPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Screenshots | [`migration/screens/Notes/parity`](../../migration/screens/Notes/parity) | `route.py parity` |
| Code read | OutSystems: 3 files of the UI flow, 24 shared blocks, 28 app shell files. React: 211 files in the closure of the page | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 2: React makes 2, **0 missing** |
| Differences found | **0** (see [section 3](#3-differences-found)) |
| Questions | 0 (see [section 4](#4-questions)) |
| React calls reached only through shared code | 6: see the last section |
| User actions of the route (own code) | OutSystems: 1. React: 8 |
| Screen and blocks of the UI flow with a React port | 3 of 3 |
| Navigation targets found in React | 14 of 14 |
| Shared blocks and components on the route | OutSystems 24, React 8 with user actions: see the last section |
| App shell on this route | 10 calls: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Differences found

Each line is a fact of both sides: a TST call, navigation or variable, and the React code that has it or not. The tool does not judge the behaviour.

None.

## 4. Questions

None.

React reaches 6 more calls without a TST chain on this route only through shared containers, components or app code. The last section lists them, not this one.

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
| 1 | `UBTConnect/Notes/Notes/DataActionGetNotes` | data action | `Notes` | event event_OnClick of Button → FilterSheet.onClick_ClearFilters → … → Notes.refresh_GetNotes → Notes.DataActionGetNotes<br>onClick in Button → event event_OnClick of Button → … → Notes.refresh_GetNotes → Notes.DataActionGetNotes<br>onKeyUp in Input → Input.onKeyup → … → Notes.refresh_GetNotes → Notes.DataActionGetNotes<br>(+1 more chains) | yes | `fetchNoteCards()` [`api/note/repository.ts:31`](../../app/src/api/note/repository.ts#L31) (page) | `Notes → useNotes → fetchNoteCards`<br>[`pages/Notes/NotesPage.tsx`](../../app/src/pages/Notes/NotesPage.tsx) | implemented |
| 2 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 6. User actions

Two independent lists: the event bindings of the TST views, and the JSX event bindings of the React files. The effects come from the handler and the functions it calls, 3 levels deep. No mapping.

### 6.1 OutSystems (TST)

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `household` | goes to HouseholdCarousel |
| 2 | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `feedItem` | goes to FeedItemDetail |
| 3 | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `assembleEvent` | goes to AssembleDetail |
| 4 | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `interchange` | goes to Locality_Details |
| 5 | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `member` | goes to Household_Relations |
| 6 | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `oneSchoolGlobal` | goes to OneSchoolGlobalCarousel |
| 7 | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `supperMeeting` | goes to SupperMeeting_Details |
| 8 | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `other` | shows a message |

### 6.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#621-input-oneventclearstring) | [`pages/Notes/NotesPage.tsx:68`](../../app/src/pages/Notes/NotesPage.tsx#L68) | `<Input>` | `onEventClearString` | `onSearchClear` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| [2](#622-input-oneventsubmit) | [`pages/Notes/NotesPage.tsx:69`](../../app/src/pages/Notes/NotesPage.tsx#L69) | `<Input>` | `onEventSubmit` | `onSearchSubmit` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| [3](#623-horizontal_filter_taglist-onchanged) | [`pages/Notes/NotesPage.tsx:87`](../../app/src/pages/Notes/NotesPage.tsx#L87) | `<Horizontal_Filter_TagList>` | `onChanged` | `onClickPill` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| 4 | [`pages/Notes/NotesPage.tsx:95`](../../app/src/pages/Notes/NotesPage.tsx#L95) | `<FilterSheet_Icon_Label>` | `onShowUpgradePopUp` | `showUpgradePopUp` | – | asks for a confirmation |
| [5](#625-notecard_list-ononclicknotecarditem) | [`pages/Notes/NotesPage.tsx:107`](../../app/src/pages/Notes/NotesPage.tsx#L107) | `<NoteCard_List>` | `onOnClickNoteCardItem` | `onClickNoteCardItem` | – | goes to HouseholdCarousel, FeedItemDetail, AssembleDetail, Household_Relations, OneSchoolGlobalCarousel, SupperMeeting_Details, Locality_Details; shows a message |
| [6](#626-notecard_list-ononloadmore) | [`pages/Notes/NotesPage.tsx:108`](../../app/src/pages/Notes/NotesPage.tsx#L108) | `<NoteCard_List>` | `onOnLoadMore` | `onLoadMore` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| [7](#627-notes_filtersheet-onapplyfilters) | [`pages/Notes/NotesPage.tsx:121`](../../app/src/pages/Notes/NotesPage.tsx#L121) | `<Notes_FilterSheet>` | `onApplyFilters` | `onApplyFilters` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| [8](#628-notificationicon-oniconclick) | [`pages/Notes/NotesPage.tsx:53`](../../app/src/pages/Notes/NotesPage.tsx#L53) | `<NotificationIcon>` | `onIconClick` | `notificationIcon.onIconClick` | – | goes to Notifications, MessageList |

<details><summary>7 diagrams (handlers with two or more effects)</summary>

#### 6.2.1 Input: onEventClearString

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Input · NotesPage.tsx
  participant A as Server (React api)
  U->>H: onEventClearString → onSearchClear
  Note over H: via refreshGetNotes()
  Note over H: via fetchNoteCards()
  H->>A: DataActionGetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  A-->>H: Out_Notes
  Note over H: via resetPillsValues()
  Note over H: via getNotes_Pills()
  Note over H: via fetchNotePills()
  H->>A: ActionGet_NotePills_ByNoteCategoryIds(In_NoteCategoryIds)
  A-->>H: Out_NotePills
```

#### 6.2.2 Input: onEventSubmit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Input · NotesPage.tsx
  participant A as Server (React api)
  U->>H: onEventSubmit → onSearchSubmit
  Note over H: via refreshGetNotes()
  Note over H: via fetchNoteCards()
  H->>A: DataActionGetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  A-->>H: Out_Notes
  Note over H: via resetPillsValues()
  Note over H: via getNotes_Pills()
  Note over H: via fetchNotePills()
  H->>A: ActionGet_NotePills_ByNoteCategoryIds(In_NoteCategoryIds)
  A-->>H: Out_NotePills
```

#### 6.2.3 Horizontal_Filter_TagList: onChanged

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Horizontal_Filter_TagList · NotesPage.tsx
  participant A as Server (React api)
  U->>H: onChanged → onClickPill
  Note over H: via refreshGetNotes()
  Note over H: via fetchNoteCards()
  H->>A: DataActionGetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  A-->>H: Out_Notes
  Note over H: via resetPillsValues()
  Note over H: via getNotes_Pills()
  Note over H: via fetchNotePills()
  H->>A: ActionGet_NotePills_ByNoteCategoryIds(In_NoteCategoryIds)
  A-->>H: Out_NotePills
```

#### 6.2.5 NoteCard_List: onOnClickNoteCardItem

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as NoteCard_List · NotesPage.tsx
  participant N as Navigation
  U->>H: onOnClickNoteCardItem → onClickNoteCardItem
  Note over H: message { title: '', message: unauthorizedObjectMessage(objectType, latest.current.notePills), mes
  H->>N: go to HouseholdCarousel
  H->>N: go to FeedItemDetail
  H->>N: go to AssembleDetail
  H->>N: go to Household_Relations
  H->>N: go to OneSchoolGlobalCarousel
  H->>N: go to SupperMeeting_Details
  H->>N: go to Locality_Details
```

#### 6.2.6 NoteCard_List: onOnLoadMore

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as NoteCard_List · NotesPage.tsx
  participant A as Server (React api)
  U->>H: onOnLoadMore → onLoadMore
  Note over H: via refreshGetNotes()
  Note over H: via fetchNoteCards()
  H->>A: DataActionGetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  A-->>H: Out_Notes
  Note over H: via resetPillsValues()
  Note over H: via getNotes_Pills()
  Note over H: via fetchNotePills()
  H->>A: ActionGet_NotePills_ByNoteCategoryIds(In_NoteCategoryIds)
  A-->>H: Out_NotePills
```

#### 6.2.7 Notes_FilterSheet: onApplyFilters

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as Notes_FilterSheet · NotesPage.tsx
  participant A as Server (React api)
  U->>H: onApplyFilters → onApplyFilters
  Note over H: via refreshGetNotes()
  Note over H: via fetchNoteCards()
  H->>A: DataActionGetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  A-->>H: Out_Notes
  Note over H: via resetPillsValues()
  Note over H: via getNotes_Pills()
  Note over H: via fetchNotePills()
  H->>A: ActionGet_NotePills_ByNoteCategoryIds(In_NoteCategoryIds)
  A-->>H: Out_NotePills
```

#### 6.2.8 NotificationIcon: onIconClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as NotificationIcon · NotesPage.tsx
  participant N as Navigation
  U->>H: onIconClick → notificationIcon.onIconClick
  H->>N: go to Notifications
  H->>N: go to MessageList
```


</details>


## 7. Screen inputs and navigation parameters

The input parameters of the screen, the parameters that the route reads, and the parameters that the route gives when it opens another screen. A navigation without parameters is only in section 2.
The OutSystems files are in `migration/sources/raw/` (the route's `analysis/manifest.json` names them); the files that TST changed after the capture are read from `migration/sources/runtime/`.

### 7.1 OutSystems (TST)

Screen inputs: none. `setInputs` of `Notes` reads no input.

| Block | Target | Parameters | Place |
|---|---|---|---|
| `Notes` | `HouseholdCarousel` | `In_StartingHouseholdId` = `textToLongInteger(objectId)` | [`UBTConnect.Notes.Notes.mvc.js:1866`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1866) |
| `Notes` | `FeedItemDetail` | `FeedItemId` = `objectId` | [`UBTConnect.Notes.Notes.mvc.js:1873`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1873) |
| `Notes` | `AssembleDetail` | `EventId` = `objectId` | [`UBTConnect.Notes.Notes.mvc.js:1880`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1880) |
| `Notes` | `Locality_Details` | `TagsList_SelectedTag` = `UBTConnectController.default.getLocalityMenu$Action(callContext).localityMenuOptions.inter…`<br>`LocalityId` = `textToLongInteger(notes_InterchangeId_ExtractId.localityId)` | [`UBTConnect.Notes.Notes.mvc.js:1891`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1891) |
| `Notes` | `Household_Relations` | `MemberId` = `textToLongInteger(objectId)`<br>`HouseholdId` = `textToLongInteger(objectId2)` | [`UBTConnect.Notes.Notes.mvc.js:1910`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1910) |
| `Notes` | `OneSchoolGlobalCarousel` | `In_StartingObjectId` = `textToLongInteger(objectId)` | [`UBTConnect.Notes.Notes.mvc.js:1933`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1933) |
| `Notes` | `SupperMeeting_Details` | `In_SubdivsionId` = `textToLongInteger(objectId)` | [`UBTConnect.Notes.Notes.mvc.js:1946`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1946) |

### 7.2 React

Declared inputs of the route: none (`app/src/app/routes.generated.ts`).

Parameters read (`useSearchParams`, `useParams`): none.

| File | Target | Parameters | Place |
|---|---|---|---|
| `notesState.ts` | `HouseholdCarousel` | `In_StartingHouseholdId` = `longIntegerText(objectId)` | [`pages/Notes/hooks/notesState.ts:135`](../../app/src/pages/Notes/hooks/notesState.ts#L135) |
| `notesState.ts` | `FeedItemDetail` | `FeedItemId` = `objectId` | [`pages/Notes/hooks/notesState.ts:148`](../../app/src/pages/Notes/hooks/notesState.ts#L148) |
| `notesState.ts` | `AssembleDetail` | `EventId` = `objectId` | [`pages/Notes/hooks/notesState.ts:150`](../../app/src/pages/Notes/hooks/notesState.ts#L150) |
| `notesState.ts` | `Household_Relations` | `MemberId` = `longIntegerText(objectId)`<br>`HouseholdId` = `longIntegerText(objectId2)` | [`pages/Notes/hooks/notesState.ts:152`](../../app/src/pages/Notes/hooks/notesState.ts#L152) |
| `notesState.ts` | `OneSchoolGlobalCarousel` | `In_StartingObjectId` = `longIntegerText(objectId)` | [`pages/Notes/hooks/notesState.ts:157`](../../app/src/pages/Notes/hooks/notesState.ts#L157) |
| `notesState.ts` | `SupperMeeting_Details` | `In_SubdivsionId` = `longIntegerText(objectId)` | [`pages/Notes/hooks/notesState.ts:167`](../../app/src/pages/Notes/hooks/notesState.ts#L167) |
| `notesState.ts` | `Locality_Details` | `LocalityId` = `longIntegerText(notes_InterchangeId_ExtractId(objectId).Loca…`<br>`TagsList_SelectedTag` = `LocalityMenu.Interchange` | [`pages/Notes/hooks/notesState.ts:169`](../../app/src/pages/Notes/hooks/notesState.ts#L169) |

## 8. Lifecycle

What runs when the screen and its blocks open and close, without a user action.

### 8.1 OutSystems (TST)

Event handlers. The steps are the node comments and the conditions of the compiled action.

| Block | Event | Action | Steps |
|---|---|---|---|
| `Notes` | OnInitialize ([`UBTConnect.Notes.Notes.mvc.js:2235`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L2235)) | `screenEvent_OnInitialize` | 1. JavaScript: CheckRestored ([`L1662`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1662))<br>2. If (checkRestored.fromCache \|\| checkRestored.fromHistory) ([`L1671`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1671))<br>3. PageNumber = 1 ([`L1673`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1673))<br>4. Else ([`L1676`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1676))<br>5. Notes_Loading = True ([`L1678`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1678))<br>6. If note_Pills.isEmpty ([`L1680`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1680))<br>7. Execute Action: SkeletonLoader_Pills ([`L1682`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1682))<br>8. If notes_List.isEmpty ([`L1686`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1686))<br>9. Execute Action: SkeletonLoader_Notes ([`L1688`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1688))<br>10. Execute Action: GetNotes_FilterYear ([`L1693`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1693))<br>11. Execute Action: ListClearYears ([`L1697`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1697))<br>12. Years = GetNotes_FilterYear.Years ([`L1700`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1700)) |
| `Notes` | OnReady ([`UBTConnect.Notes.Notes.mvc.js:2253`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L2253)) | `screenEvent_Ready` | 1. Execute Action: ResetPillsVallues ([`L1744`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1744))<br>2. Execute Action: Refresh_GetNotes ([`L1747`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1747)) |
| `NoteCard_List` | OnInitialize ([`UBTConnect.Notes.NoteCard_List.mvc.js:740`](../../migration/sources/runtime/UBTConnect.Notes.NoteCard_List.mvc.js#L740)) | `onInitialize` | none |
| `NoteCard_List` | OnReady ([`UBTConnect.Notes.NoteCard_List.mvc.js:758`](../../migration/sources/runtime/UBTConnect.Notes.NoteCard_List.mvc.js#L758)) | `onReady` | none |
| `Notes_FilterSheet` | OnInitialize ([`UBTConnect.Notes.Notes_FilterSheet.mvc.js:585`](../../migration/sources/raw/UBTConnect.Notes.Notes_FilterSheet.mvc.js#L585)) | `onInitialize` | 1. Execute Action: Initialize_FilterYearOptions ([`L429`](../../migration/sources/raw/UBTConnect.Notes.Notes_FilterSheet.mvc.js#L429)) |
| `Notes_FilterSheet` | OnParametersChanged ([`UBTConnect.Notes.Notes_FilterSheet.mvc.js:606`](../../migration/sources/raw/UBTConnect.Notes.Notes_FilterSheet.mvc.js#L606)) | `onParametersChanged` | 1. Execute Action: Initialize_FilterYearOptions ([`L286`](../../migration/sources/raw/UBTConnect.Notes.Notes_FilterSheet.mvc.js#L286)) |

<details><summary>Sequence diagrams of the screen event handlers (2)</summary>

The diagram keeps the order of the steps in the compiled action. The code does not give the order of the handlers of different blocks.

#### 8.1.1 Notes: OnInitialize

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as Notes
  R->>B: OnInitialize → screenEvent_OnInitialize
  B->>B: JavaScript CheckRestored
  alt (checkRestored.fromCache || checkRestored.fromHistory)
    Note over B: PageNumber = 1
  else other
    Note over B: Notes_Loading = True
    alt note_Pills.isEmpty
      B->>B: action SkeletonLoader_Pills
    end
    alt notes_List.isEmpty
      B->>B: action SkeletonLoader_Notes
    end
    B->>B: action GetNotes_FilterYear
    B->>B: action ListClearYears
    Note over B: Years = GetNotes_FilterYear.Years
  end
```

#### 8.1.2 Notes: OnReady

```mermaid
sequenceDiagram
  autonumber
  participant R as OutSystems runtime
  participant B as Notes
  R->>B: OnReady → screenEvent_Ready
  B->>B: action ResetPillsVallues
  B->>B: action Refresh_GetNotes
```

</details>

Data actions and aggregates. The tool reads `dataFetchDependenciesOriginal`: `0` is a fetch when the block opens, `-1` is a fetch only on demand (a `Refresh Query` step). `Read by` lists the child block inputs, conditions, text widgets and actions that read the result.

| Block | Data action | Fetch | Read by | Place |
|---|---|---|---|---|
| `Notes` | `GetNotes` | on demand (`-1`) | `action getNotesOnAfterFetch` ([`UBTConnect.Notes.Notes.mvc.js:1086`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1086)), `action notes_CardListOnLoadMore` ([`UBTConnect.Notes.Notes.mvc.js:1452`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L1452)) | [`UBTConnect.Notes.Notes.mvc.js:847`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L847) |

### 8.2 React

Effects (`useEffect`, `useLayoutEffect`) of the screen files, and the effects of shared components that make a call, a navigation or a message.

| File | Hook (function) | Dependencies | Cleanup | Effects | Place |
|---|---|---|---|---|---|
| `useNotes.ts` | `useEffect` (`useNotes`) | `[state.isInitialized]` | no | call `/api/UBTConnect_Notes_MCS/ActionGet_NotePills_ByNoteCategoryIds`<br>call `/api/UBTConnect/Notes/DataActionGetNotes` | [`pages/Notes/hooks/useNotes.ts:129`](../../app/src/pages/Notes/hooks/useNotes.ts#L129) |

<details><summary>Sequence diagrams of the effects with a call, a navigation, a message or a refresh (1)</summary>

#### 8.2.1 useNotes: useEffect

```mermaid
sequenceDiagram
  autonumber
  participant R as React
  participant H as useNotes · useNotes.ts
  participant A as Server (React api)
  R->>H: useEffect (after the mount and when [state.isInitialized] changes)
  H->>A: ActionGet_NotePills_ByNoteCategoryIds
  A-->>H: ActionGet_NotePills_ByNoteCategoryIds
  H->>A: DataActionGetNotes
  A-->>H: DataActionGetNotes
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
| OutSystems (TST) | registered users (`checkRegistered()`) | [`UBTConnect.Notes.Notes.mvc.js:2277`](../../migration/sources/runtime/UBTConnect.Notes.Notes.mvc.js#L2277) |
| React | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |

Role checks in the TST screen and block actions (`RolesInfo`, `$roles`, `Check<Role>Role`): none.

## 11. Errors

What the route does when an action or a call fails.

### 11.1 OutSystems (TST)

The actions of the screen and its blocks have no `Handle Error` node.

An error without a handler goes to the `OnException` of the UI flow (`handleError`):

1. UI flow `Notes` not in `migration/sources/shell/`. Handled errors: none.

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
| `EmptyListBorderless` | `UBTConnectLibrary` | [`components/ui/EmptyState/EmptyState.tsx`](../../app/src/components/ui/EmptyState/EmptyState.tsx) | 0 |
| `CircleButton` | `UBTConnectLibrary` | [`components/ui/CircleButton/CircleButton.tsx`](../../app/src/components/ui/CircleButton/CircleButton.tsx) | 0 |
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

<details><summary>User actions of the shared blocks (7)</summary>

| # | Block (OutSystems) | Event (TST view) | Handler | Branch | Effects |
|---|---|---|---|---|---|
| 1 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| 2 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| 3 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| 4 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| 5 | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |
| 6 | `FilterSheet_Icon_Label` | `click of Icon`<br>`clicked of CustomContainer` | `iconClick` | – | asks for a confirmation |
| 7 | `App_NotificationIcon` | `onClick of IconBadge` | `iconClick` | – | goes to Notifications, MessageList |

</details>


### React

| File | User actions |
|---|---|
| [`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | 2 |
| [`components/layout/CommonUiLayout/CommonUiLayout.tsx`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx) | 2 |
| [`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | 1 |
| [`containers/FilterSheet/FilterSheetContainer.tsx`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx) | 1 |
| [`containers/NoteListActions/NoteListActionsContainer.tsx`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx) | 2 |
| [`legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx`](../../app/src/legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx) | 1 |
| [`legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx`](../../app/src/legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx) | 1 |
| [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx) | 1 |

<details><summary>User actions of the shared components (21)</summary>

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
| 19 | [`components/note/NotesSheet/NotesSheet.tsx:175`](../../app/src/components/note/NotesSheet/NotesSheet.tsx#L175) | `<AddNote>` | `onOnSubmitRequested` | `addNoteRequested` | – | calls ServiceAPIAddNote; shows a message; calls the prop onOnNotesChanged() |
| 20 | [`containers/NoteListActions/NoteListActionsContainer.tsx:157`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L157) | `<NoteList>` | `onOnDeleteRequested` | `inline` | – | calls ServiceAPIDeleteNoteByNoteId; shows a message; calls the prop onOnNoteDeleted() |
| 21 | [`containers/NoteListActions/NoteListActionsContainer.tsx:160`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L160) | `<NoteList>` | `onOnSaveEditRequested` | `inline` | – | calls ServiceAPIUpdateNote; shows a message; calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged(); calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged() |

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
| `/api/UBTConnect_Utils/ServiceAPIAddNote` | `addNote()` [`api/note/repository.ts:54`](../../app/src/api/note/repository.ts#L54) | `NotesSheet` [`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) |
