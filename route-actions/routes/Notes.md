# Notes: server calls and user actions in OutSystems and React

This file compares the route `/UBTConnect/Notes` in OutSystems (TST) with the React app.
The tool `route-actions/tools/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.
- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/Notes` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.Notes.Notes` | TST compiled code |
| UI flow | `Notes` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/Notes/NotesPage.tsx`](../../app/src/pages/Notes/NotesPage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 27 screen and block files of the route, 28 app shell files. React: 210 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 2: React makes 2, **0 missing** |
| User actions of the route | OutSystems: 20 diagrams. React: 29 diagrams |
| React calls of the screen that TST does not make | 7 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 27 of 27 |
| Navigation targets found in React | 14 of 14 |
| App shell on this route | 10 calls; event bindings: OutSystems 10, React 7: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `empty`<br>2026-10-29<br>pixel difference 0.1% | <img src="../../migration/screens/Notes/parity/default.expected.png" width="200" alt="default expected"> | <img src="../../migration/screens/Notes/parity/default.build.png" width="200" alt="default build"> | <img src="../../migration/screens/Notes/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/Notes/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../../migration/screens/Notes/parity/loading.build.png" width="200" alt="loading build"> | <img src="../../migration/screens/Notes/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/Notes/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../../migration/screens/Notes/parity/offline.build.png" width="200" alt="offline build"> | <img src="../../migration/screens/Notes/parity/offline.diff.png" width="200" alt="offline diff"> |

## 4. Diagram

- A box on the left is the block or module of the action that calls the server (TST code).
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_screen["Screen and its blocks"]
      o0["Notes"]
      o1["UBTConnect"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e2["DataActionGetNotes"]
    e3["ServiceAPIGet_UI_UpdateItems_UnreadCount_All"]
  end
  subgraph RE["React actions"]
    subgraph RE_page["Screen"]
      r4["fetchNoteCards()"]
      r5["fetchUnreadUpdateItemsCount()"]
    end
  end
  subgraph RC["React components"]
    c6["BottomBar"]
    c7["Notes"]
  end
  r4 --- c7
  r5 --- c6
  o0 --> e2
  o1 --> e3
  e2 --- r4
  e3 --- r5
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e2,e3 ok
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
| [1](#511-bottombarmenu-event_bottombar_clicked-home) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `home` | goes to HomeFeed |
| [2](#512-bottombarmenu-event_bottombar_clicked-directory) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `directory` | goes to CountryList, Locality_Details |
| [3](#513-bottombarmenu-event_bottombar_clicked-updates) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `updates` | goes to Updates_SingleList |
| [4](#514-bottombarmenu-event_bottombar_clicked-bookmarks) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `bookmarks` | goes to Bookmarks |
| [5](#515-bottombarmenu-event_bottombar_clicked-menu) | `BottomBarMenu` | `onClick (HTML element)`<br>`onClick of IconBadge` | `event_BottomBar_Clicked` | `menu` | goes to Menu |
| [6](#516-filtersheet_icon_label-iconclick) | `FilterSheet_Icon_Label` | `click of Icon`<br>`clicked of CustomContainer` | `iconClick` | – | asks for a confirmation |
| [7](#517-app_notificationicon-iconclick) | `App_NotificationIcon` | `onClick of IconBadge` | `iconClick` | – | goes to Notifications, MessageList |
| [8](#518-notes-handler_searchonclear) | `Notes` | `event_ClearString of Input` | `handler_SearchOnClear` | – | calls GetNotes |
| [9](#519-notes-handler_searchonsubmit) | `Notes` | `event_Submit of Input` | `handler_SearchOnSubmit` | – | calls GetNotes |
| [10](#5110-notes-handler_onclickpill) | `Notes` | `changed of TagList` | `handler_OnClickPill` | – | calls GetNotes |
| [11](#5111-notes-handler_onclicknotecarditem-household) | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `household` | goes to HouseholdCarousel |
| [12](#5112-notes-handler_onclicknotecarditem-feeditem) | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `feedItem` | goes to FeedItemDetail |
| [13](#5113-notes-handler_onclicknotecarditem-assembleevent) | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `assembleEvent` | goes to AssembleDetail |
| [14](#5114-notes-handler_onclicknotecarditem-interchange) | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `interchange` | goes to Locality_Details |
| [15](#5115-notes-handler_onclicknotecarditem-member) | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `member` | goes to Household_Relations |
| [16](#5116-notes-handler_onclicknotecarditem-oneschoolglobal) | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `oneSchoolGlobal` | goes to OneSchoolGlobalCarousel |
| [17](#5117-notes-handler_onclicknotecarditem-suppermeeting) | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `supperMeeting` | goes to SupperMeeting_Details |
| [18](#5118-notes-handler_onclicknotecarditem-other) | `Notes` | `onClick_NoteCardItem of List` | `handler_OnClickNoteCardItem` | `other` | shows a message |
| [19](#5119-notes-notes_cardlistonloadmore) | `Notes` | `onLoadMore of List` | `notes_CardListOnLoadMore` | – | calls GetNotes |
| [20](#5120-notes-handler_applyfilters) | `Notes` | `applyFilters of FilterSheet` | `handler_ApplyFilters` | – | calls GetNotes |

#### 5.1.1 BottomBarMenu: event_BottomBar_Clicked (home)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (home)
  B->>N: go to HomeFeed
```

#### 5.1.2 BottomBarMenu: event_BottomBar_Clicked (directory)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (directory)
  B->>N: go to CountryList
  B->>N: go to Locality_Details
```

#### 5.1.3 BottomBarMenu: event_BottomBar_Clicked (updates)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (updates)
  B->>N: go to Updates_SingleList
```

#### 5.1.4 BottomBarMenu: event_BottomBar_Clicked (bookmarks)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (bookmarks)
  B->>N: go to Bookmarks
```

#### 5.1.5 BottomBarMenu: event_BottomBar_Clicked (menu)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as BottomBarMenu
  participant N as Navigation
  U->>B: onClick (HTML element) → event_BottomBar_Clicked (menu)
  B->>N: go to Menu
```

#### 5.1.6 FilterSheet_Icon_Label: iconClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as FilterSheet_Icon_Label
  U->>B: click of Icon → iconClick
  Note over B: via UBTConnect_Utils.app_Subscription_ShowUpgradePopUp
  Note over B: confirm dialog
```

#### 5.1.7 App_NotificationIcon: iconClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as App_NotificationIcon
  participant N as Navigation
  U->>B: onClick of IconBadge → iconClick
  B->>N: go to Notifications
  B->>N: go to MessageList
```

#### 5.1.8 Notes: handler_SearchOnClear

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant S as Server (TST calls)
  U->>B: event_ClearString of Input → handler_SearchOnClear
  B->>S: GetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  S-->>B: Out_Notes
```

#### 5.1.9 Notes: handler_SearchOnSubmit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant S as Server (TST calls)
  U->>B: event_Submit of Input → handler_SearchOnSubmit
  B->>S: GetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  S-->>B: Out_Notes
```

#### 5.1.10 Notes: handler_OnClickPill

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant S as Server (TST calls)
  U->>B: changed of TagList → handler_OnClickPill
  B->>S: GetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  S-->>B: Out_Notes
```

#### 5.1.11 Notes: handler_OnClickNoteCardItem (household)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant N as Navigation
  U->>B: onClick_NoteCardItem of List → handler_OnClickNoteCardItem (household)
  B->>N: go to HouseholdCarousel
```

#### 5.1.12 Notes: handler_OnClickNoteCardItem (feedItem)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant N as Navigation
  U->>B: onClick_NoteCardItem of List → handler_OnClickNoteCardItem (feedItem)
  B->>N: go to FeedItemDetail
```

#### 5.1.13 Notes: handler_OnClickNoteCardItem (assembleEvent)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant N as Navigation
  U->>B: onClick_NoteCardItem of List → handler_OnClickNoteCardItem (assembleEvent)
  B->>N: go to AssembleDetail
```

#### 5.1.14 Notes: handler_OnClickNoteCardItem (interchange)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant N as Navigation
  U->>B: onClick_NoteCardItem of List → handler_OnClickNoteCardItem (interchange)
  B->>N: go to Locality_Details
```

#### 5.1.15 Notes: handler_OnClickNoteCardItem (member)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant N as Navigation
  U->>B: onClick_NoteCardItem of List → handler_OnClickNoteCardItem (member)
  B->>N: go to Household_Relations
```

#### 5.1.16 Notes: handler_OnClickNoteCardItem (oneSchoolGlobal)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant N as Navigation
  U->>B: onClick_NoteCardItem of List → handler_OnClickNoteCardItem (oneSchoolGlobal)
  B->>N: go to OneSchoolGlobalCarousel
```

#### 5.1.17 Notes: handler_OnClickNoteCardItem (supperMeeting)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant N as Navigation
  U->>B: onClick_NoteCardItem of List → handler_OnClickNoteCardItem (supperMeeting)
  B->>N: go to SupperMeeting_Details
```

#### 5.1.18 Notes: handler_OnClickNoteCardItem (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  U->>B: onClick_NoteCardItem of List → handler_OnClickNoteCardItem (other)
  Note over B: message FeedbackMessage_AutoClose
```

#### 5.1.19 Notes: notes_CardListOnLoadMore

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant S as Server (TST calls)
  U->>B: onLoadMore of List → notes_CardListOnLoadMore
  B->>S: GetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  S-->>B: Out_Notes
```

#### 5.1.20 Notes: handler_ApplyFilters

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Notes
  participant S as Server (TST calls)
  U->>B: applyFilters of FilterSheet → handler_ApplyFilters
  B->>S: GetNotes(BottomSheetId_Filter_IsLoaded, BottomSheetId_Filter_ShowSubscriptionOnClick, Filter_BottomSheetId, …)
  S-->>B: Out_Notes
```

### 5.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#521-input-oneventclearstring) | [`pages/Notes/NotesPage.tsx:68`](../../app/src/pages/Notes/NotesPage.tsx#L68) | `<Input>` | `onEventClearString` | `onSearchClear` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| [2](#522-input-oneventsubmit) | [`pages/Notes/NotesPage.tsx:69`](../../app/src/pages/Notes/NotesPage.tsx#L69) | `<Input>` | `onEventSubmit` | `onSearchSubmit` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| [3](#523-horizontal_filter_taglist-onchanged) | [`pages/Notes/NotesPage.tsx:87`](../../app/src/pages/Notes/NotesPage.tsx#L87) | `<Horizontal_Filter_TagList>` | `onChanged` | `onClickPill` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| [4](#524-filtersheet_icon_label-onshowupgradepopup) | [`pages/Notes/NotesPage.tsx:95`](../../app/src/pages/Notes/NotesPage.tsx#L95) | `<FilterSheet_Icon_Label>` | `onShowUpgradePopUp` | `showUpgradePopUp` | – | asks for a confirmation |
| [5](#525-notecard_list-ononclicknotecarditem) | [`pages/Notes/NotesPage.tsx:107`](../../app/src/pages/Notes/NotesPage.tsx#L107) | `<NoteCard_List>` | `onOnClickNoteCardItem` | `onClickNoteCardItem` | – | goes to HouseholdCarousel, FeedItemDetail, AssembleDetail, Household_Relations, OneSchoolGlobalCarousel, SupperMeeting_Details, Locality_Details; shows a message |
| [6](#526-notecard_list-ononloadmore) | [`pages/Notes/NotesPage.tsx:108`](../../app/src/pages/Notes/NotesPage.tsx#L108) | `<NoteCard_List>` | `onOnLoadMore` | `onLoadMore` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| [7](#527-notes_filtersheet-onapplyfilters) | [`pages/Notes/NotesPage.tsx:121`](../../app/src/pages/Notes/NotesPage.tsx#L121) | `<Notes_FilterSheet>` | `onApplyFilters` | `onApplyFilters` | – | calls DataActionGetNotes, ActionGet_NotePills_ByNoteCategoryIds |
| [8](#528-notificationicon-oniconclick) | [`pages/Notes/NotesPage.tsx:53`](../../app/src/pages/Notes/NotesPage.tsx#L53) | `<NotificationIcon>` | `onIconClick` | `notificationIcon.onIconClick` | – | goes to Notifications, MessageList |
| [9](#529-filtersheet-onshowupgradepopup) | [`containers/FilterSheet/FilterSheetContainer.tsx:43`](../../app/src/containers/FilterSheet/FilterSheetContainer.tsx#L43) | `<FilterSheet>` | `onShowUpgradePopUp` | `showUpgradePopUp` | – | asks for a confirmation |
| [10](#5210-cachecontrol-onnoncachehit) | [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:52`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L52) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| [11](#5211-cachecontrol-onnoncachehit) | [`legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx:55`](../../app/src/legacy/os/cache/AllLocalitiesCacheControl/AllLocalitiesCacheControl.tsx#L55) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| [12](#5212-cachecontrol-onnoncachehit) | [`legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx:55`](../../app/src/legacy/os/cache/AllCountriesCacheControl/AllCountriesCacheControl.tsx#L55) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| [13](#5213-preventbacknavigation-onbacknavigationprevented) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| [14](#5214-backnavigationhandler-onbacknavigation) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |
| [15](#5215-oslink-onclick-home) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Home` | goes to HomeFeed |
| [16](#5216-oslink-onclick-directory) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| [17](#5217-oslink-onclick-updates) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Updates` | goes to Updates_SingleList |
| [18](#5218-oslink-onclick-bookmarks) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Bookmarks` | goes to Bookmarks |
| [19](#5219-oslink-onclick-menu) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `Menu` | goes to Menu |
| [20](#5220-oslink-onclick-other) | [`components/layout/BottomBar/BottomBar.tsx:130`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L130) | `<OSLink>` | `onClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| [21](#5221-bottombariconbadge-ononclick-home) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Home` | goes to HomeFeed |
| [22](#5222-bottombariconbadge-ononclick-directory) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Directory` | goes to CountryList, Locality_Details |
| [23](#5223-bottombariconbadge-ononclick-updates) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Updates` | goes to Updates_SingleList |
| [24](#5224-bottombariconbadge-ononclick-bookmarks) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Bookmarks` | goes to Bookmarks |
| [25](#5225-bottombariconbadge-ononclick-menu) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `Menu` | goes to Menu |
| [26](#5226-bottombariconbadge-ononclick-other) | [`components/layout/BottomBar/BottomBar.tsx:140`](../../app/src/components/layout/BottomBar/BottomBar.tsx#L140) | `<BottomBarIconBadge>` | `onOnClick` | `click` | `other` | calls the prop onBottomBarClicked() |
| [27](#5227-addnote-ononsubmitrequested) | [`components/note/NotesSheet/NotesSheet.tsx:175`](../../app/src/components/note/NotesSheet/NotesSheet.tsx#L175) | `<AddNote>` | `onOnSubmitRequested` | `addNoteRequested` | – | calls ServiceAPIAddNote; shows a message; calls the prop onOnNotesChanged() |
| [28](#5228-notelist-onondeleterequested) | [`containers/NoteListActions/NoteListActionsContainer.tsx:157`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L157) | `<NoteList>` | `onOnDeleteRequested` | `inline` | – | calls ServiceAPIDeleteNoteByNoteId; shows a message; calls the prop onOnNoteDeleted() |
| [29](#5229-notelist-ononsaveeditrequested) | [`containers/NoteListActions/NoteListActionsContainer.tsx:160`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L160) | `<NoteList>` | `onOnSaveEditRequested` | `inline` | – | calls ServiceAPIUpdateNote; shows a message; calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged(); calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged() |

#### 5.2.1 Input: onEventClearString

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

#### 5.2.2 Input: onEventSubmit

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

#### 5.2.3 Horizontal_Filter_TagList: onChanged

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

#### 5.2.4 FilterSheet_Icon_Label: onShowUpgradePopUp

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as FilterSheet_Icon_Label · NotesPage.tsx
  U->>H: onShowUpgradePopUp → showUpgradePopUp
  Note over H: confirm dialog dialogId
```

#### 5.2.5 NoteCard_List: onOnClickNoteCardItem

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

#### 5.2.6 NoteCard_List: onOnLoadMore

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

#### 5.2.7 Notes_FilterSheet: onApplyFilters

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

#### 5.2.8 NotificationIcon: onIconClick

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

#### 5.2.9 FilterSheet: onShowUpgradePopUp

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as FilterSheet · FilterSheetContainer.tsx
  U->>H: onShowUpgradePopUp → showUpgradePopUp
  Note over H: confirm dialog dialogId
```

#### 5.2.10 CacheControl: onNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CacheControl · UserInfoCacheControl.tsx
  participant A as Server (React api)
  U->>H: onNonCacheHit → onNonCacheHit
  H->>A: DataActionGetCacheInfo()
  A-->>H: outputs
```

#### 5.2.11 CacheControl: onNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CacheControl · AllLocalitiesCacheControl.tsx
  participant A as Server (React api)
  U->>H: onNonCacheHit → onNonCacheHit
  Note over H: via fetchAllLocalities()
  H->>A: DataActionGetCacheInfo()
  A-->>H: outputs
```

#### 5.2.12 CacheControl: onNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CacheControl · AllCountriesCacheControl.tsx
  participant A as Server (React api)
  U->>H: onNonCacheHit → onNonCacheHit
  Note over H: via fetchAllCountries()
  H->>A: DataActionGetCacheInfo()
  A-->>H: outputs
```

#### 5.2.13 PreventBackNavigation: onBackNavigationPrevented

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PreventBackNavigation · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigationPrevented → redirectHome
  H->>N: go to HomeFeed
```

#### 5.2.14 BackNavigationHandler: onBackNavigation

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

#### 5.2.15 OSLink: onClick (Home)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Home)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to HomeFeed
```

#### 5.2.16 OSLink: onClick (Directory)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Directory)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to CountryList
  H->>N: go to Locality_Details
```

#### 5.2.17 OSLink: onClick (Updates)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Updates)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Updates_SingleList
```

#### 5.2.18 OSLink: onClick (Bookmarks)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Bookmarks)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Bookmarks
```

#### 5.2.19 OSLink: onClick (Menu)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  participant N as Navigation
  U->>H: onClick → click (Menu)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Menu
```

#### 5.2.20 OSLink: onClick (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as OSLink · BottomBar.tsx
  U->>H: onClick → click (other)
  Note over H: via event_BottomBar_Clicked()
  Note over H: calls the prop onBottomBarClicked()
```

#### 5.2.21 BottomBarIconBadge: onOnClick (Home)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Home)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to HomeFeed
```

#### 5.2.22 BottomBarIconBadge: onOnClick (Directory)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Directory)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to CountryList
  H->>N: go to Locality_Details
```

#### 5.2.23 BottomBarIconBadge: onOnClick (Updates)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Updates)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Updates_SingleList
```

#### 5.2.24 BottomBarIconBadge: onOnClick (Bookmarks)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Bookmarks)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Bookmarks
```

#### 5.2.25 BottomBarIconBadge: onOnClick (Menu)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  participant N as Navigation
  U->>H: onOnClick → click (Menu)
  Note over H: via event_BottomBar_Clicked()
  H->>N: go to Menu
```

#### 5.2.26 BottomBarIconBadge: onOnClick (other)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as BottomBarIconBadge · BottomBar.tsx
  U->>H: onOnClick → click (other)
  Note over H: via event_BottomBar_Clicked()
  Note over H: calls the prop onBottomBarClicked()
```

#### 5.2.27 AddNote: onOnSubmitRequested

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AddNote · NotesSheet.tsx
  participant A as Server (React api)
  U->>H: onOnSubmitRequested → addNoteRequested
  Note over H: via addNote()
  H->>A: ServiceAPIAddNote()
  A-->>H: outputs
  Note over H: calls the prop onOnNotesChanged()
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
```

#### 5.2.28 NoteList: onOnDeleteRequested

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as NoteList · NoteListActionsContainer.tsx
  participant A as Server (React api)
  U->>H: onOnDeleteRequested → inline
  Note over H: via deleteNoteRequested()
  Note over H: via deleteNoteByNoteId()
  H->>A: ServiceAPIDeleteNoteByNoteId()
  A-->>H: outputs
  Note over H: calls the prop onOnNoteDeleted()
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
```

#### 5.2.29 NoteList: onOnSaveEditRequested

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as NoteList · NoteListActionsContainer.tsx
  participant A as Server (React api)
  U->>H: onOnSaveEditRequested → inline
  Note over H: via saveEditRequested()
  Note over H: via updateNote()
  H->>A: ServiceAPIUpdateNote()
  A-->>H: outputs
  Note over H: calls the prop onOnSaveEditNote()
  Note over H: calls the prop onOnEditingStateChanged()
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
  Note over H: calls the prop onOnSaveEditNote()
  Note over H: calls the prop onOnEditingStateChanged()
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
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
| 1 | `UBTConnect/Notes/Notes/DataActionGetNotes` | data action | `Notes` | event event_OnClick of Button → FilterSheet.onClick_ClearFilters → … → Notes.refresh_GetNotes → Notes.DataActionGetNotes<br>onClick in Button → event event_OnClick of Button → … → Notes.refresh_GetNotes → Notes.DataActionGetNotes<br>onKeyUp in Input → Input.onKeyup → … → Notes.refresh_GetNotes → Notes.DataActionGetNotes<br>(+1 more chains) | yes | `fetchNoteCards()` [`api/note/repository.ts:31`](../../app/src/api/note/repository.ts#L31) (page) | `Notes → useNotes → fetchNoteCards`<br>[`pages/Notes/NotesPage.tsx`](../../app/src/pages/Notes/NotesPage.tsx) | implemented |
| 2 | `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All` | service action | `UBTConnect` | BottomBarMenu.OnReady → BottomBarMenu.onReady → UBTConnect.directory_Updates_RefreshBottomBarCount → server Get_UI_UpdateItems_UnreadCount_All | no | `fetchUnreadUpdateItemsCount()` [`api/update/repository.ts:73`](../../app/src/api/update/repository.ts#L73) (page) | `BottomBar → directory_Updates_RefreshBottomBarCount → fetchUnreadUpdateItemsCount`<br>[`components/layout/BottomBar/BottomBar.tsx`](../../app/src/components/layout/BottomBar/BottomBar.tsx) | implemented |

## 7. Missing in React

None.

## 8. Questions

1. React calls `/api/UBTConnect_Utils/CacheControl_UserInfo/DataActionGetCacheInfo` from `UserInfoCacheControl()` [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:37`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L37) (page). TST Notes has no chain to this call. Does the call belong to this route?
2. React calls `/api/UBTConnect_Utils/CacheControl_AllLocalities/DataActionGetCacheInfo` from `fetchAllLocalities()` [`api/locality/repository.ts:157`](../../app/src/api/locality/repository.ts#L157) (page). TST Notes has no chain to this call. Does the call belong to this route?
3. React calls `/api/UBTConnect_Utils/CacheControl_AllCountries/DataActionGetCacheInfo` from `fetchAllCountries()` [`api/country/repository.ts:94`](../../app/src/api/country/repository.ts#L94) (page). TST Notes has no chain to this call. Does the call belong to this route?
4. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST Notes has no chain to this call. Does the call belong to this route?
5. React calls `/api/UBTConnect_Utils/ServiceAPIDeleteNoteByNoteId` from `deleteNote()` [`api/note/repository.ts:73`](../../app/src/api/note/repository.ts#L73) (page). TST Notes has no chain to this call. Does the call belong to this route?
6. React calls `/api/UBTConnect_Utils/ServiceAPIUpdateNote` from `updateNote()` [`api/note/repository.ts:66`](../../app/src/api/note/repository.ts#L66) (page). TST Notes has no chain to this call. Does the call belong to this route?
7. React calls `/api/UBTConnect_Utils/ServiceAPIAddNote` from `addNote()` [`api/note/repository.ts:54`](../../app/src/api/note/repository.ts#L54) (page). TST Notes has no chain to this call. Does the call belong to this route?

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/Notes/analysis/`:
   - the rendered files;
   - each server call with its chain of client actions, and the calls that TST made in the capture;
   - the effects of each user action.
2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in `CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell when its file is in the code that `main.tsx` loads.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
