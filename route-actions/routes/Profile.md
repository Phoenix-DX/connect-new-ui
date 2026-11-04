# Profile: server calls and user actions in OutSystems and React

This file compares the route `/UBTConnect/Profile` in OutSystems (TST) with the React app.
The tool `route-actions/tools/check_route.py` wrote this file on 2026-11-04.
The tool reads the code. It does not run the app.

The app shell is in [APP_SHELL.md](../APP_SHELL.md), not here.
- OutSystems app shell: `CommonUI_InsideLayout` with its blocks (TST survey), and the chains that start in a module action.
- React app shell: the code that `app/src/main.tsx` loads (router, `AppFrame`, app start, hosts).

## 1. Route

| Item | Value | Source |
|---|---|---|
| Route | `/UBTConnect/Profile` | `app/src/app/routes.generated.ts` |
| OutSystems screen | `UBTConnect.App_Profile.Profile` | TST compiled code |
| UI flow | `App_Profile` | MCP `getScreenNames` (DEV) |
| React screen | [`pages/Profile/ProfilePage.tsx`](../../app/src/pages/Profile/ProfilePage.tsx) | `app/src/pages/` |
| React route rules | access `member`, lock `enforce`, flag redirect none | `app/src/app/routes.ts` |
| Code read | OutSystems: 48 screen and block files of the route, 28 app shell files. React: 267 screen files | TST `facts.json`, `react_calls.mjs` |

## 2. Result

| Check | Result |
|---|---|
| Server calls of the route on TST | 16: React makes 13, **3 missing** |
| User actions of the route | OutSystems: 29 diagrams. React: 34 diagrams |
| React calls of the screen that TST does not make | 6 (see [questions](#8-questions)) |
| Screen and blocks with a React port | 48 of 48 |
| Navigation targets found in React | 9 of 9 |
| App shell on this route | 8 calls; event bindings: OutSystems 10, React 7: see [APP_SHELL.md](../APP_SHELL.md) |

## 3. Screenshots

The screenshots come from the last parity run (`route.py parity`). The TST capture hides personal text with dots. The React build shows fictional mock data.

| State | TST (expected) | React (build) | Difference |
|---|---|---|---|
| `default`<br>390x844, mock `member`<br>2026-10-29<br>pixel difference 3.9% | <img src="../../migration/screens/Profile/parity/default.expected.png" width="200" alt="default expected"> | <img src="../../migration/screens/Profile/parity/default.build.png" width="200" alt="default build"> | <img src="../../migration/screens/Profile/parity/default.diff.png" width="200" alt="default diff"> |
| `loading`<br>390x844, mock `loading`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/Profile/parity/loading.expected.png" width="200" alt="loading expected"> | <img src="../../migration/screens/Profile/parity/loading.build.png" width="200" alt="loading build"> | <img src="../../migration/screens/Profile/parity/loading.diff.png" width="200" alt="loading diff"> |
| `offline`<br>390x844, mock `error`<br>2026-10-29<br>pixel difference 0.0% | <img src="../../migration/screens/Profile/parity/offline.expected.png" width="200" alt="offline expected"> | <img src="../../migration/screens/Profile/parity/offline.build.png" width="200" alt="offline build"> | <img src="../../migration/screens/Profile/parity/offline.diff.png" width="200" alt="offline diff"> |

## 4. Diagram

- A box on the left is the block or module of the action that calls the server (TST code).
- A line connects each call to the React action that makes the same call.
- The right column shows the React components that use each React action.
- A red box is a call that React does not make.

```mermaid
flowchart LR
  subgraph OS["OutSystems (TST compiled)"]
    subgraph OS_screen["Screen and its blocks"]
      o0["CacheControl_UserInfo"]
      o1["Connect2_LegacyShared"]
      o2["Directory_EntityDetailsActions"]
      o3["HouseholdDetails_Block"]
      o4["NotesSheet"]
      o5["Profile"]
      o6["ShareSheet"]
      o7["UBTConnect"]
      o8["UBTConnect_Utils"]
    end
  end
  subgraph EP["Server calls (TST)"]
    e9["DataActionGetCacheInfo"]
    e10["DataActionGetHousehold"]
    e11["DataActionGetHousehold_Coordinates"]
    e12["DataActionFetchContactDetails"]
    e13["DataActionGetCountryInfo"]
    e14["DataActionFetchNotes"]
    e15["ServiceAPIMember_EditDetails_Service"]
    e16["ActionCS_CreateShareProfileLink"]
    e17["ActionCS_ShareObject"]
    e18["DataActionGetAvailableMembers"]
    e19["DataActionGetRecentlyShared"]
    e20["ServiceAPIAddNote"]
    e21["ServiceAPIAddBookmark2"]
    e22["ServiceAPIDeleteBookmarkByBookmarkId2"]
    e23["ActionCS_CreateShareProfileLink"]
    e24["ActionGetAllApplicationEvents"]
  end
  subgraph RE["React actions"]
    subgraph RE_page["Screen"]
      r25["UserInfoCacheControl()"]
      r26["addC2Bookmark()"]
      r27["addNote()"]
      r28["csShareObject()"]
      r29["deleteC2Bookmark()"]
      r30["editMemberDetails()"]
      r31["fetchAvailableMembers()"]
      r32["fetchCountryInfo()"]
      r33["fetchEntityContactDetails()"]
      r34["fetchEntityNotes()"]
      r35["fetchHousehold()"]
      r36["fetchHouseholdCoordinates()"]
      r37["fetchRecentlyShared()"]
    end
  end
  subgraph RC["React components"]
    c38["EntityDetailsActionsContainer"]
    c39["HouseholdDetailsContainer"]
    c40["NotesSheet"]
    c41["Profile"]
    c42["ShareSheetContainer"]
  end
  r25 --- c41
  r30 --- c41
  r32 --- c41
  r35 --- c39
  r36 --- c39
  r26 --- c38
  r29 --- c38
  r33 --- c38
  r34 --- c38
  r28 --- c42
  r31 --- c42
  r37 --- c42
  r27 --- c40
  o0 --> e9
  o3 --> e10
  o3 --> e11
  o2 --> e12
  o2 --> e14
  o5 --> e13
  o5 --> e15
  o6 --> e16
  o6 --> e17
  o6 --> e18
  o6 --> e19
  o4 --> e20
  o7 --> e21
  o7 --> e22
  o8 --> e23
  o1 --> e24
  e9 --- r25
  e10 --- r35
  e11 --- r36
  e12 --- r33
  e13 --- r32
  e14 --- r34
  e15 --- r30
  e17 --- r28
  e18 --- r31
  e19 --- r37
  e20 --- r27
  e21 --- r26
  e22 --- r29
  classDef missing fill:#fde2e1,stroke:#c0392b,color:#7b241c
  classDef ok fill:#e3f4e8,stroke:#2e7d4f,color:#1d4d31
  class e16,e23,e24 missing
  class e9,e10,e11,e12,e13,e14,e15,e17,e18,e19,e20,e21,e22 ok
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
| [1](#511-profile-onclick_back) | `Profile` | `buttonOnClick of Button`<br>`clicked of IconText` | `onClick_Back` | – | goes to previous screen |
| [2](#512-profile-onchange_showageswitch) | `Profile` | `onChange (HTML element)` | `onChange_ShowAgeSwitch` | – | asks for a confirmation |
| [3](#513-profile-onchange_localitydropdown) | `Profile` | `onChanged of DropdownSearch` | `onChange_LocalityDropdown` | – | calls GetCountryInfo |
| [4](#514-profile-onclick_save) | `Profile` | `buttonOnClick of Button` | `onClick_Save` | – | calls Member_EditDetails_Service; shows a message |
| [5](#515-profile-cachecontrol_userinfo_wrapperresult) | `Profile` | `result of Wrapper` | `cacheControl_UserInfo_WrapperResult` | – | calls GetCountryInfo |
| [6](#516-directory_entitydetailsactions-handle_bookmark) | `Directory_EntityDetailsActions` | `event_Click_Bookmark of ActionsMenu`<br>`event_Click_Unbookmark of ActionsMenu` | `handle_Bookmark` | – | calls AddBookmark2, DeleteBookmarkByBookmarkId2 |
| [7](#517-directory_entitydetailsactions-handler_addnotesonclick) | `Directory_EntityDetailsActions` | `event_Click_Notes of ActionsMenu` | `handler_AddNotesOnClick` | – | calls FetchNotes |
| [8](#518-directory_entitydetailsactions-handle_mail) | `Directory_EntityDetailsActions` | `event_Cancel of Wrapper`<br>`event_Click_Email of ActionsMenu` | `handle_Mail` | – | goes to ContactByEmailOneSchoolGlobal |
| [9](#519-directory_entitydetailsactions-handle_mail_page) | `Directory_EntityDetailsActions` | `event_Email of Wrapper` | `handle_Mail_Page` | – | goes to ContactByEmailMember |
| [10](#5110-directory_entitydetailsactions-handle_share_connect) | `Directory_EntityDetailsActions` | `event_ShareToConnect of SharePopup` | `handle_Share_Connect` | – | goes to LegacyShareObject |
| [11](#5111-directory_entitydetailsactions-handle_share_others) | `Directory_EntityDetailsActions` | `event_ShareToOthers of SharePopup` | `handle_Share_Others` | – | calls GetAllApplicationEvents, CS_CreateShareProfileLink, AppManager_SynchAppContext |
| [12](#5112-householddetails_block-handler_onmenuedit) | `HouseholdDetails_Block` | `edit of KebabButtonMenu` | `handler_OnMenuEdit` | – | goes to Profile |
| [13](#5113-householddetails_block-handler_onshare) | `HouseholdDetails_Block` | `share of KebabButtonMenu` | `handler_OnShare` | – | shows a message |
| [14](#5114-householddetails_block-onclick_navigatetolocality) | `HouseholdDetails_Block` | `clicked of CustomContainer` | `onClick_NavigateToLocality` | – | goes to Locality_Details |
| [15](#5115-householddetails_block-onclick_navigatetosuppermeeting) | `HouseholdDetails_Block` | `clicked of CustomContainer` | `onClick_NavigateToSupperMeeting` | – | goes to SupperMeeting_Details |
| [16](#5116-householddetails_block-handler_onclickphotobook) | `HouseholdDetails_Block` | `clicked of CustomContainer` | `handler_OnClickPhotobook` | – | goes to Photobook; shows a message |
| [17](#5117-householddetails_block-handler_onclicknavigatetomarriedchildren_household) | `HouseholdDetails_Block` | `event_NonMemberOnClick of Block` | `handler_OnClickNavigateTomarriedChildren_Household` | – | goes to HouseholdDetails |
| [18](#5118-householddetails_block-handler_onclickmember) | `HouseholdDetails_Block` | `event_MemberOnClick of Block` | `handler_OnClickMember` | – | goes to Household_Relations |
| [19](#5119-householddetails_members_block-handler_nonmemberonclick) | `HouseholdDetails_Members_Block` | `click of Icon`<br>`onClickPerson of ListItem` | `handler_NonMemberOnClick` | – | asks for a confirmation |
| [20](#5120-addresspopup_wrapper-handler_openinmapsorgooglemaps) | `AddressPopup_Wrapper` | `event_OpenInGoogleMaps of AddressPopup`<br>`event_OpenInMaps of AddressPopup` | `handler_OpenInMapsOrGoogleMaps` | – | goes to /UBTConnect_Utils/; opens an external link; shows a message |
| [21](#5121-contactbymessage_wrapper-handler_selectedmessagechannel) | `ContactByMessage_Wrapper` | `event_SelectedMessageChannel of ByMessage` | `handler_SelectedMessageChannel` | – | opens an external link |
| [22](#5122-contactpopup_byphone-onclick_callbutton) | `ContactPopup_ByPhone` | `event_Clicked of ContactPopup` | `onClick_CallButton` | – | opens an external link |
| [23](#5123-notessheet-handler_onsubmitnote) | `NotesSheet` | `onSubmitRequested of AddNote` | `handler_OnSubmitNote` | – | calls AddNote; shows a message |
| [24](#5124-sharesheet-handler_onclickrecentmember) | `ShareSheet` | `onClick of WithLabel` | `handler_OnClickRecentMember` | – | calls CS_ShareObject; shows a message; asks for a confirmation |
| [25](#5125-sharesheet-handler_onclickexternaloption) | `ShareSheet` | `onClick of WithLabel` | `handler_OnClickExternalOption` | – | calls CS_CreateShareProfileLink |
| [26](#5126-sharesheet-handler_inputeventsubmit) | `ShareSheet` | `event_Submit of Input` | `handler_InputEventSubmit` | – | calls GetAvailableMembers |
| [27](#5127-sharesheet-handler_searchresultitemonselect) | `ShareSheet` | `click of Icon` | `handler_SearchResultItemOnSelect` | – | shows a message |
| [28](#5128-sharesheet-handler_onclicksend) | `ShareSheet` | `buttonOnClick of Button` | `handler_OnClickSend` | – | calls CS_ShareObject; shows a message |
| [29](#5129-cachecontrol_userinfo-cachecontrolonnoncachehit) | `CacheControl_UserInfo` | `onNonCacheHit of CacheControl` | `cacheControlOnNonCacheHit` | – | calls GetCacheInfo |

#### 5.1.1 Profile: onClick_Back

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Profile
  participant N as Navigation
  U->>B: buttonOnClick of Button → onClick_Back
  B->>N: go to previous screen
```

#### 5.1.2 Profile: onChange_ShowAgeSwitch

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Profile
  U->>B: onChange (HTML element) → onChange_ShowAgeSwitch
  Note over B: confirm dialog
```

#### 5.1.3 Profile: onChange_LocalityDropdown

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Profile
  participant S as Server (TST calls)
  U->>B: onChanged of DropdownSearch → onChange_LocalityDropdown
  B->>S: GetCountryInfo(AccountForm, AccountFormOriginal, AccountForm_ViewPreview, …)
  S-->>B: AddressInfo2
```

#### 5.1.4 Profile: onClick_Save

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Profile
  participant S as Server (TST calls)
  U->>B: buttonOnClick of Button → onClick_Save
  B->>S: Member_EditDetails_Service(UI_AccountForm, isRequireRequestCreation)
  S-->>B: no outputs
  Note over B: message FeedbackMessage_AutoClose2
```

#### 5.1.5 Profile: cacheControl_UserInfo_WrapperResult

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Profile
  participant S as Server (TST calls)
  U->>B: result of Wrapper → cacheControl_UserInfo_WrapperResult
  B->>S: GetCountryInfo(AccountForm, AccountFormOriginal, AccountForm_ViewPreview, …)
  S-->>B: AddressInfo2
```

#### 5.1.6 Directory_EntityDetailsActions: handle_Bookmark

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Directory_EntityDetailsActions
  participant S as Server (TST calls)
  U->>B: event_Click_Bookmark of ActionsMenu → handle_Bookmark
  Note over B: via UBTConnect.toggleBookmarkItem_C2
  B->>S: AddBookmark2(In_BookmarkCategoryId, In_ItemId)
  S-->>B: Bookmark_Added, Success
  B->>S: DeleteBookmarkByBookmarkId2(BookmarkId)
  S-->>B: Success, WasFound
```

#### 5.1.7 Directory_EntityDetailsActions: handler_AddNotesOnClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Directory_EntityDetailsActions
  participant S as Server (TST calls)
  U->>B: event_Click_Notes of ActionsMenu → handler_AddNotesOnClick
  B->>S: FetchNotes(ContactPopUp_OverrideOptions, EnableOptions, EntityId, …)
  S-->>B: Notes
```

#### 5.1.8 Directory_EntityDetailsActions: handle_Mail

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Directory_EntityDetailsActions
  participant N as Navigation
  U->>B: event_Cancel of Wrapper → handle_Mail
  B->>N: go to ContactByEmailOneSchoolGlobal
```

#### 5.1.9 Directory_EntityDetailsActions: handle_Mail_Page

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Directory_EntityDetailsActions
  participant N as Navigation
  U->>B: event_Email of Wrapper → handle_Mail_Page
  B->>N: go to ContactByEmailMember
```

#### 5.1.10 Directory_EntityDetailsActions: handle_Share_Connect

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Directory_EntityDetailsActions
  participant N as Navigation
  U->>B: event_ShareToConnect of SharePopup → handle_Share_Connect
  B->>N: go to LegacyShareObject
```

#### 5.1.11 Directory_EntityDetailsActions: handle_Share_Others

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as Directory_EntityDetailsActions
  participant S as Server (TST calls)
  U->>B: event_ShareToOthers of SharePopup → handle_Share_Others
  Note over B: via UBTConnect_Utils.shareEntity_ByURL
  B->>S: GetAllApplicationEvents()
  S-->>B: EventList
  B->>S: CS_CreateShareProfileLink()
  S-->>B: outputs not in the contract
  B->>S: AppManager_SynchAppContext(EspaceName)
  S-->>B: AppManager_ClientConfig, FirebaseRealTimeDB_Token, PermissionList, …
```

#### 5.1.12 HouseholdDetails_Block: handler_OnMenuEdit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HouseholdDetails_Block
  participant N as Navigation
  U->>B: edit of KebabButtonMenu → handler_OnMenuEdit
  B->>N: go to Profile
```

#### 5.1.13 HouseholdDetails_Block: handler_OnShare

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HouseholdDetails_Block
  U->>B: share of KebabButtonMenu → handler_OnShare
  Note over B: via UBTConnect_Utils.showComingSoonMessage
  Note over B: message FeedbackMessage_AutoClose
```

#### 5.1.14 HouseholdDetails_Block: onClick_NavigateToLocality

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HouseholdDetails_Block
  participant N as Navigation
  U->>B: clicked of CustomContainer → onClick_NavigateToLocality
  B->>N: go to Locality_Details
```

#### 5.1.15 HouseholdDetails_Block: onClick_NavigateToSupperMeeting

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HouseholdDetails_Block
  participant N as Navigation
  U->>B: clicked of CustomContainer → onClick_NavigateToSupperMeeting
  B->>N: go to SupperMeeting_Details
```

#### 5.1.16 HouseholdDetails_Block: handler_OnClickPhotobook

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

#### 5.1.17 HouseholdDetails_Block: handler_OnClickNavigateTomarriedChildren_Household

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HouseholdDetails_Block
  participant N as Navigation
  U->>B: event_NonMemberOnClick of Block → handler_OnClickNavigateTomarriedChildren_Household
  B->>N: go to HouseholdDetails
```

#### 5.1.18 HouseholdDetails_Block: handler_OnClickMember

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HouseholdDetails_Block
  participant N as Navigation
  U->>B: event_MemberOnClick of Block → handler_OnClickMember
  B->>N: go to Household_Relations
```

#### 5.1.19 HouseholdDetails_Members_Block: handler_NonMemberOnClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as HouseholdDetails_Members_Block
  U->>B: click of Icon → handler_NonMemberOnClick
  Note over B: via UBTConnect_Utils.app_Subscription_ShowUpgradePopUp
  Note over B: confirm dialog
```

#### 5.1.20 AddressPopup_Wrapper: handler_OpenInMapsOrGoogleMaps

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as AddressPopup_Wrapper
  participant N as Navigation
  participant X as External link
  U->>B: event_OpenInGoogleMaps of AddressPopup → handler_OpenInMapsOrGoogleMaps
  B->>N: go to /UBTConnect_Utils/
  B->>X: https: link
  Note over B: message "Map is not available"
```

#### 5.1.21 ContactByMessage_Wrapper: handler_SelectedMessageChannel

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ContactByMessage_Wrapper
  participant X as External link
  U->>B: event_SelectedMessageChannel of ByMessage → handler_SelectedMessageChannel
  B->>X: tel: link
```

#### 5.1.22 ContactPopup_ByPhone: onClick_CallButton

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ContactPopup_ByPhone
  participant X as External link
  U->>B: event_Clicked of ContactPopup → onClick_CallButton
  B->>X: tel: link
```

#### 5.1.23 NotesSheet: handler_OnSubmitNote

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as NotesSheet
  participant S as Server (TST calls)
  U->>B: onSubmitRequested of AddNote → handler_OnSubmitNote
  B->>S: AddNote(ItemId, Note, NoteCategoryId)
  S-->>B: Note_Added, Success
  Note over B: via UBTConnect_Utils.note_SendFeedbackMessages
  Note over B: message messageVar
  Note over B: message messageVar
  Note over B: via UBTConnect_Utils.note_SendFeedbackMessages
  Note over B: message messageVar
  Note over B: message messageVar
  Note over B: via UBTConnect_Utils.note_SendFeedbackMessages
  Note over B: message messageVar
  Note over B: message messageVar
```

#### 5.1.24 ShareSheet: handler_OnClickRecentMember

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ShareSheet
  participant S as Server (TST calls)
  U->>B: onClick of WithLabel → handler_OnClickRecentMember
  Note over B: via UBTConnect_Utils.app_Subscription_ShowUpgradePopUp
  Note over B: confirm dialog
  B->>S: CS_ShareObject(In_ShareObjectTypeId, In_SharedObjectId, In_SharingProfileName, …)
  S-->>B: IsAllowed, IsSuccess, Message, …
  Note over B: message submitMessageVar + " has been shared."
  Note over B: message "Share failed. Please try again."
```

#### 5.1.25 ShareSheet: handler_OnClickExternalOption

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ShareSheet
  participant S as Server (TST calls)
  U->>B: onClick of WithLabel → handler_OnClickExternalOption
  B->>S: CS_CreateShareProfileLink(In_ShareObjectTypeId, In_SharedObjectId, In_UpdateDate, …)
  S-->>B: ShareId, URL
```

#### 5.1.26 ShareSheet: handler_InputEventSubmit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ShareSheet
  participant S as Server (TST calls)
  U->>B: event_Submit of Input → handler_InputEventSubmit
  B->>S: GetAvailableMembers(AvatarImageSize_HorizontalList, AvatarImageSize_VerticalList, AvatarSize_HorizontalList, …)
  S-->>B: Out_SearchResultItemList
```

#### 5.1.27 ShareSheet: handler_SearchResultItemOnSelect

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ShareSheet
  U->>B: click of Icon → handler_SearchResultItemOnSelect
  Note over B: message FeedbackMessage_AutoClose
```

#### 5.1.28 ShareSheet: handler_OnClickSend

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as ShareSheet
  participant S as Server (TST calls)
  U->>B: buttonOnClick of Button → handler_OnClickSend
  B->>S: CS_ShareObject(In_ShareObjectTypeId, In_SharedObjectId, In_SharingProfileName, …)
  S-->>B: IsAllowed, IsSuccess, Message, …
  Note over B: message submitMessageVar + " has been shared."
  Note over B: message "Share failed. Please try again."
```

#### 5.1.29 CacheControl_UserInfo: cacheControlOnNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant B as CacheControl_UserInfo
  participant S as Server (TST calls)
  U->>B: onNonCacheHit of CacheControl → cacheControlOnNonCacheHit
  B->>S: GetCacheInfo(CacheKey, CacheTypeId)
  S-->>B: CacheControl_Response, TTL
```

### 5.2 React

| # | File | Element | Event prop | Handler | Branch | Effects |
|---|---|---|---|---|---|---|
| [1](#521-icontext-onclicked) | [`pages/Profile/ProfilePage.tsx:72`](../../app/src/pages/Profile/ProfilePage.tsx#L72) | `<IconText>` | `onClicked` | `navigateBack` | – | goes to previous screen |
| [2](#522-profiledetailsform-onshowagechange) | [`pages/Profile/ProfilePage.tsx:109`](../../app/src/pages/Profile/ProfilePage.tsx#L109) | `<ProfileDetailsForm>` | `onShowAgeChange` | `onShowAgeChange` | – | asks for a confirmation |
| [3](#523-profilefooter-onclose) | [`pages/Profile/ProfilePage.tsx:117`](../../app/src/pages/Profile/ProfilePage.tsx#L117) | `<ProfileFooter>` | `onClose` | `navigateBack` | – | goes to previous screen |
| [4](#524-profilefooter-onsave) | [`pages/Profile/ProfilePage.tsx:118`](../../app/src/pages/Profile/ProfilePage.tsx#L118) | `<ProfileFooter>` | `onSave` | `onSave` | – | calls ServiceAPIMember_EditDetails_Service; shows a message |
| [5](#525-householddetailsview-onedit) | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:138`](../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L138) | `<HouseholdDetailsView>` | `onEdit` | `details.onEdit` | – | goes to Profile |
| [6](#526-householddetailsview-onshare) | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:139`](../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L139) | `<HouseholdDetailsView>` | `onShare` | `details.onShare` | – | shows a message |
| [7](#527-householddetailsview-onlocalityclick) | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:140`](../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L140) | `<HouseholdDetailsView>` | `onLocalityClick` | `details.onLocalityClick` | – | goes to Locality_Details |
| [8](#528-householddetailsview-onsuppermeetingclick) | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:141`](../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L141) | `<HouseholdDetailsView>` | `onSupperMeetingClick` | `details.onSupperMeetingClick` | – | goes to SupperMeeting_Details |
| [9](#529-householddetailsview-onphotobookclick) | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:142`](../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L142) | `<HouseholdDetailsView>` | `onPhotobookClick` | `details.onPhotobookClick` | – | goes to Photobook; shows a message |
| [10](#5210-householddetailsview-onmemberclick) | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:143`](../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L143) | `<HouseholdDetailsView>` | `onMemberClick` | `details.onMemberClick` | – | goes to Household_Relations |
| [11](#5211-householddetailsview-onnonmemberclick) | [`containers/HouseholdDetails/HouseholdDetailsContainer.tsx:144`](../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx#L144) | `<HouseholdDetailsView>` | `onNonMemberClick` | `details.onNonMemberClick` | – | goes to HouseholdDetails; asks for a confirmation |
| [12](#5212-addresspopup-oneventopeningooglemaps) | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx:110`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx#L110) | `<AddressPopup>` | `onEventOpenInGoogleMaps` | `inline` | – | opens an external link; shows a message |
| [13](#5213-addresspopup-oneventopeninmaps) | [`components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx:113`](../../app/src/components/contact/AddressPopupWrapper/AddressPopupWrapper.tsx#L113) | `<AddressPopup>` | `onEventOpenInMaps` | `inline` | – | opens an external link; shows a message |
| [14](#5214-sharesheetfirststep-onclickrecentmember) | [`containers/ShareSheet/ShareSheetContainer.tsx:111`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L111) | `<ShareSheetFirstStep>` | `onClickRecentMember` | `onClickRecentMember` | – | calls ActionCS_ShareObject; shows a message; asks for a confirmation |
| [15](#5215-sharesheetsearchstep-onsubmit) | [`containers/ShareSheet/ShareSheetContainer.tsx:127`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L127) | `<ShareSheetSearchStep>` | `onSubmit` | `onSubmit` | – | setSearchFetchId(): a query fetches again |
| [16](#5216-sharesheetsearchstep-onselect) | [`containers/ShareSheet/ShareSheetContainer.tsx:129`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L129) | `<ShareSheetSearchStep>` | `onSelect` | `onSelect` | – | shows a message |
| [17](#5217-sharesheetsearchstep-onclickupgradesubscription) | [`containers/ShareSheet/ShareSheetContainer.tsx:130`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L130) | `<ShareSheetSearchStep>` | `onClickUpgradeSubscription` | `onClickUpgradeSubscription` | – | opens an external link |
| [18](#5218-actionbutton-onbuttononclick) | [`containers/ShareSheet/ShareSheetContainer.tsx:148`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx#L148) | `<ActionButton>` | `onButtonOnClick` | `onClickSend` | – | calls ActionCS_ShareObject; shows a message |
| [19](#5219-actionsmenu-oneventclickbookmark) | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:100`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L100) | `<ActionsMenu>` | `onEventClickBookmark` | `onClickBookmark` | – | calls ServiceAPIDeleteBookmarkByBookmarkId2, ServiceAPIAddBookmark2; shows a message; calls the prop onOnChangeBookmark() |
| [20](#5220-actionsmenu-oneventclickunbookmark) | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:101`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L101) | `<ActionsMenu>` | `onEventClickUnbookmark` | `onClickBookmark` | – | calls ServiceAPIDeleteBookmarkByBookmarkId2, ServiceAPIAddBookmark2; shows a message; calls the prop onOnChangeBookmark() |
| [21](#5221-actionsmenu-oneventclicknotes) | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:109`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L109) | `<ActionsMenu>` | `onEventClickNotes` | `inline` | – | calls DataActionFetchNotes |
| [22](#5222-actionsmenu-oneventclickemail) | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:112`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L112) | `<ActionsMenu>` | `onEventClickEmail` | `inline` | – | goes to ContactByEmailOneSchoolGlobal |
| [23](#5223-contactbymessage-oneventcancel) | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:123`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L123) | `<ContactByMessage>` | `onEventCancel` | `inline` | – | goes to ContactByEmailOneSchoolGlobal |
| [24](#5224-contactbymessage-oneventemail) | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:126`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L126) | `<ContactByMessage>` | `onEventEmail` | `handleMailPage` | – | goes to ContactByEmailMember |
| [25](#5225-sharepopup-oneventsharetoconnect) | [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:155`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L155) | `<SharePopup>` | `onEventShareToConnect` | `inline` | – | goes to LegacyShareObject |
| [26](#5226-addnote-ononsubmitrequested) | [`components/note/NotesSheet/NotesSheet.tsx:175`](../../app/src/components/note/NotesSheet/NotesSheet.tsx#L175) | `<AddNote>` | `onOnSubmitRequested` | `addNoteRequested` | – | calls ServiceAPIAddNote; shows a message; calls the prop onOnNotesChanged() |
| [27](#5227-notelist-onondeleterequested) | [`containers/NoteListActions/NoteListActionsContainer.tsx:157`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L157) | `<NoteList>` | `onOnDeleteRequested` | `inline` | – | calls ServiceAPIDeleteNoteByNoteId; shows a message; calls the prop onOnNoteDeleted() |
| [28](#5228-notelist-ononsaveeditrequested) | [`containers/NoteListActions/NoteListActionsContainer.tsx:160`](../../app/src/containers/NoteListActions/NoteListActionsContainer.tsx#L160) | `<NoteList>` | `onOnSaveEditRequested` | `inline` | – | calls ServiceAPIUpdateNote; shows a message; calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged(); calls the prop onOnSaveEditNote(); calls the prop onOnEditingStateChanged() |
| [29](#5229-contactpopup-oneventclicked) | [`components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx:66`](../../app/src/components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx#L66) | `<ContactPopup>` | `onEventClicked` | `inline` | – | opens an external link; calls the prop onEventCall() |
| [30](#5230-contactpopupbymessage-oneventselectedmessagechannel-email) | [`components/contact/ContactByMessage/ContactByMessage.tsx:64`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx#L64) | `<ContactPopupByMessage>` | `onEventSelectedMessageChannel` | `handlerSelectedMessageChannel` | `Email` | calls the prop onEventMessageChannel(); calls the prop onEventEmail() |
| [31](#5231-contactpopupbymessage-oneventselectedmessagechannel-call) | [`components/contact/ContactByMessage/ContactByMessage.tsx:64`](../../app/src/components/contact/ContactByMessage/ContactByMessage.tsx#L64) | `<ContactPopupByMessage>` | `onEventSelectedMessageChannel` | `handlerSelectedMessageChannel` | `Call` | opens an external link; calls the prop onEventMessageChannel(); calls the prop onEventCall() |
| [32](#5232-cachecontrol-onnoncachehit) | [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:52`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L52) | `<CacheControl>` | `onNonCacheHit` | `onNonCacheHit` | – | calls DataActionGetCacheInfo |
| [33](#5233-preventbacknavigation-onbacknavigationprevented) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:80`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L80) | `<PreventBackNavigation>` | `onBackNavigationPrevented` | `redirectHome` | – | goes to HomeFeed |
| [34](#5234-backnavigationhandler-onbacknavigation) | [`components/layout/CommonUiLayout/CommonUiLayout.tsx:82`](../../app/src/components/layout/CommonUiLayout/CommonUiLayout.tsx#L82) | `<BackNavigationHandler>` | `onBackNavigation` | `maybeRedirectHome` | – | goes to HomeFeed |

#### 5.2.1 IconText: onClicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as IconText · ProfilePage.tsx
  participant N as Navigation
  U->>H: onClicked → navigateBack
  H->>N: go to previous screen
```

#### 5.2.2 ProfileDetailsForm: onShowAgeChange

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ProfileDetailsForm · ProfilePage.tsx
  U->>H: onShowAgeChange → onShowAgeChange
  Note over H: via showAgeChanged()
  Note over H: confirm dialog AgeConfirmation_PopUp
```

#### 5.2.3 ProfileFooter: onClose

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ProfileFooter · ProfilePage.tsx
  participant N as Navigation
  U->>H: onClose → navigateBack
  H->>N: go to previous screen
```

#### 5.2.4 ProfileFooter: onSave

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ProfileFooter · ProfilePage.tsx
  participant A as Server (React api)
  U->>H: onSave → onSave
  Note over H: via save()
  Note over H: via editMemberDetails()
  H->>A: ServiceAPIMember_EditDetails_Service(UI_AccountForm, isRequireRequestCreation)
  A-->>H: no outputs
  Note over H: message { title: '', message: 'Your update request has been submitted.', messageType: 'success', e
```

#### 5.2.5 HouseholdDetailsView: onEdit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as HouseholdDetailsView · HouseholdDetailsContainer.tsx
  participant N as Navigation
  U->>H: onEdit → details.onEdit
  H->>N: go to Profile
```

#### 5.2.6 HouseholdDetailsView: onShare

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as HouseholdDetailsView · HouseholdDetailsContainer.tsx
  U->>H: onShare → details.onShare
  Note over H: message 
```

#### 5.2.7 HouseholdDetailsView: onLocalityClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as HouseholdDetailsView · HouseholdDetailsContainer.tsx
  participant N as Navigation
  U->>H: onLocalityClick → details.onLocalityClick
  H->>N: go to Locality_Details
```

#### 5.2.8 HouseholdDetailsView: onSupperMeetingClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as HouseholdDetailsView · HouseholdDetailsContainer.tsx
  participant N as Navigation
  U->>H: onSupperMeetingClick → details.onSupperMeetingClick
  H->>N: go to SupperMeeting_Details
```

#### 5.2.9 HouseholdDetailsView: onPhotobookClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as HouseholdDetailsView · HouseholdDetailsContainer.tsx
  participant N as Navigation
  U->>H: onPhotobookClick → details.onPhotobookClick
  H->>N: go to Photobook
  Note over H: message 'Photobook is currently unavailable for this household. Please try again later.'
```

#### 5.2.10 HouseholdDetailsView: onMemberClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as HouseholdDetailsView · HouseholdDetailsContainer.tsx
  participant N as Navigation
  U->>H: onMemberClick → details.onMemberClick
  H->>N: go to Household_Relations
```

#### 5.2.11 HouseholdDetailsView: onNonMemberClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as HouseholdDetailsView · HouseholdDetailsContainer.tsx
  participant N as Navigation
  U->>H: onNonMemberClick → details.onNonMemberClick
  Note over H: via open()
  Note over H: via onNonMemberHouseholdClick()
  H->>N: go to HouseholdDetails
  Note over H: via showUpgradePopUp()
  Note over H: confirm dialog dialogId
```

#### 5.2.12 AddressPopup: onEventOpenInGoogleMaps

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AddressPopup · AddressPopupWrapper.tsx
  participant X as External link
  U->>H: onEventOpenInGoogleMaps → inline
  Note over H: via openInMapsOrGoogleMaps()
  Note over H: message 'Map is not available'
  H->>X: changeWindowLocation
  H->>X: https: link
```

#### 5.2.13 AddressPopup: onEventOpenInMaps

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AddressPopup · AddressPopupWrapper.tsx
  participant X as External link
  U->>H: onEventOpenInMaps → inline
  Note over H: via openInMapsOrGoogleMaps()
  Note over H: message 'Map is not available'
  H->>X: changeWindowLocation
  H->>X: https: link
```

#### 5.2.14 ShareSheetFirstStep: onClickRecentMember

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ShareSheetFirstStep · ShareSheetContainer.tsx
  participant A as Server (React api)
  U->>H: onClickRecentMember → onClickRecentMember
  Note over H: via showUpgradePopUp()
  Note over H: confirm dialog dialogId
  Note over H: via submitShare()
  Note over H: via csShareObject()
  H->>A: ActionCS_ShareObject(In_ShareObjectTypeId, In_SharedObjectId, In_SharingProfileName, …)
  A-->>H: IsAllowed, IsSuccess, Message, …
  Note over H: message `${submitMessage} has been shared.`
  Note over H: message 'Share failed. Please try again.'
```

#### 5.2.15 ShareSheetSearchStep: onSubmit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ShareSheetSearchStep · ShareSheetContainer.tsx
  U->>H: onSubmit → onSubmit
  Note over H: setSearchFetchId(): a query fetches again
```

#### 5.2.16 ShareSheetSearchStep: onSelect

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ShareSheetSearchStep · ShareSheetContainer.tsx
  U->>H: onSelect → onSelect
  Note over H: message { title: '', message: 'You can select up to 50 recipients only.', messageType: 'error', en
```

#### 5.2.17 ShareSheetSearchStep: onClickUpgradeSubscription

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ShareSheetSearchStep · ShareSheetContainer.tsx
  participant X as External link
  U->>H: onClickUpgradeSubscription → onClickUpgradeSubscription
  Note over H: via navigateToUpgrade()
  H->>X: openInApp_OpenExternalLink
```

#### 5.2.18 ActionButton: onButtonOnClick

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ActionButton · ShareSheetContainer.tsx
  participant A as Server (React api)
  U->>H: onButtonOnClick → onClickSend
  Note over H: via submitShare()
  Note over H: via csShareObject()
  H->>A: ActionCS_ShareObject(In_ShareObjectTypeId, In_SharedObjectId, In_SharingProfileName, …)
  A-->>H: IsAllowed, IsSuccess, Message, …
  Note over H: message `${submitMessage} has been shared.`
  Note over H: message 'Share failed. Please try again.'
```

#### 5.2.19 ActionsMenu: onEventClickBookmark

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ActionsMenu · EntityDetailsActionsContainer.tsx
  participant A as Server (React api)
  U->>H: onEventClickBookmark → onClickBookmark
  Note over H: via handleBookmark()
  Note over H: via toggleBookmarkItem_C2()
  Note over H: via deleteBookmarkByBookmarkId2()
  H->>A: ServiceAPIDeleteBookmarkByBookmarkId2(BookmarkId)
  A-->>H: Success, WasFound
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: via addBookmark2()
  H->>A: ServiceAPIAddBookmark2(In_BookmarkCategoryId, In_ItemId)
  A-->>H: Bookmark_Added, Success
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: calls the prop onOnChangeBookmark()
```

#### 5.2.20 ActionsMenu: onEventClickUnbookmark

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ActionsMenu · EntityDetailsActionsContainer.tsx
  participant A as Server (React api)
  U->>H: onEventClickUnbookmark → onClickBookmark
  Note over H: via handleBookmark()
  Note over H: via toggleBookmarkItem_C2()
  Note over H: via deleteBookmarkByBookmarkId2()
  H->>A: ServiceAPIDeleteBookmarkByBookmarkId2(BookmarkId)
  A-->>H: Success, WasFound
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: via addBookmark2()
  H->>A: ServiceAPIAddBookmark2(In_BookmarkCategoryId, In_ItemId)
  A-->>H: Bookmark_Added, Success
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: via bookmark_SendFeedbackMessage()
  Note over H: message isCreate ? 'Bookmark could not be added. Please try again later.' : 'Bookmark could not be
  Note over H: message isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks'
  Note over H: calls the prop onOnChangeBookmark()
```

#### 5.2.21 ActionsMenu: onEventClickNotes

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ActionsMenu · EntityDetailsActionsContainer.tsx
  participant A as Server (React api)
  U->>H: onEventClickNotes → inline
  Note over H: via handlerAddNotes()
  Note over H: via refreshFetchNotes()
  Note over H: via fetchNotes()
  H->>A: DataActionFetchNotes(ContactPopUp_OverrideOptions, EnableOptions, EntityId, …)
  A-->>H: Notes
```

#### 5.2.22 ActionsMenu: onEventClickEmail

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ActionsMenu · EntityDetailsActionsContainer.tsx
  participant N as Navigation
  U->>H: onEventClickEmail → inline
  Note over H: via handleMail()
  H->>N: go to ContactByEmailOneSchoolGlobal
```

#### 5.2.23 ContactByMessage: onEventCancel

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ContactByMessage · EntityDetailsActionsContainer.tsx
  participant N as Navigation
  U->>H: onEventCancel → inline
  Note over H: via handleMail()
  H->>N: go to ContactByEmailOneSchoolGlobal
```

#### 5.2.24 ContactByMessage: onEventEmail

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ContactByMessage · EntityDetailsActionsContainer.tsx
  participant N as Navigation
  U->>H: onEventEmail → handleMailPage
  H->>N: go to ContactByEmailMember
```

#### 5.2.25 SharePopup: onEventShareToConnect

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as SharePopup · EntityDetailsActionsContainer.tsx
  participant N as Navigation
  U->>H: onEventShareToConnect → inline
  H->>N: go to LegacyShareObject
```

#### 5.2.26 AddNote: onOnSubmitRequested

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as AddNote · NotesSheet.tsx
  participant A as Server (React api)
  U->>H: onOnSubmitRequested → addNoteRequested
  Note over H: via addNote()
  H->>A: ServiceAPIAddNote(ItemId, Note, NoteCategoryId)
  A-->>H: Note_Added, Success
  Note over H: calls the prop onOnNotesChanged()
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
  Note over H: via note_SendFeedbackMessages()
  Note over H: message message
```

#### 5.2.27 NoteList: onOnDeleteRequested

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

#### 5.2.28 NoteList: onOnSaveEditRequested

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

#### 5.2.29 ContactPopup: onEventClicked

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ContactPopup · ContactPopupByPhone.tsx
  participant X as External link
  U->>H: onEventClicked → inline
  Note over H: calls the prop onEventCall()
  H->>X: tel: link
```

#### 5.2.30 ContactPopupByMessage: onEventSelectedMessageChannel (Email)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ContactPopupByMessage · ContactByMessage.tsx
  U->>H: onEventSelectedMessageChannel → handlerSelectedMessageChannel (Email)
  Note over H: calls the prop onEventMessageChannel()
  Note over H: calls the prop onEventEmail()
```

#### 5.2.31 ContactPopupByMessage: onEventSelectedMessageChannel (Call)

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as ContactPopupByMessage · ContactByMessage.tsx
  participant X as External link
  U->>H: onEventSelectedMessageChannel → handlerSelectedMessageChannel (Call)
  Note over H: calls the prop onEventMessageChannel()
  Note over H: calls the prop onEventCall()
  H->>X: tel: link
```

#### 5.2.32 CacheControl: onNonCacheHit

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as CacheControl · UserInfoCacheControl.tsx
  participant A as Server (React api)
  U->>H: onNonCacheHit → onNonCacheHit
  H->>A: DataActionGetCacheInfo(CacheKey, CacheTypeId)
  A-->>H: CacheControl_Response, TTL
```

#### 5.2.33 PreventBackNavigation: onBackNavigationPrevented

```mermaid
sequenceDiagram
  autonumber
  actor U as User
  participant H as PreventBackNavigation · CommonUiLayout.tsx
  participant N as Navigation
  U->>H: onBackNavigationPrevented → redirectHome
  H->>N: go to HomeFeed
```

#### 5.2.34 BackNavigationHandler: onBackNavigation

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
| 1 | `UBTConnect_Utils/CacheControl/CacheControl_UserInfo/DataActionGetCacheInfo` | data action | `CacheControl_UserInfo` | CacheControl.OnInitialize → CacheControl.onInitialize → event onNonCacheHit of CacheControl → CacheControl_UserInfo.cacheControlOnNonCacheHit → CacheControl_UserInfo.DataActionGetCacheInfo<br>CacheControl_UserInfo fetch at start → CacheControl_UserInfo.DataActionGetCacheInfo | yes | `UserInfoCacheControl()` [`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:37`](../../app/src/legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx#L37) (page) | `Profile → UserInfoCache → UserInfoCacheControl`<br>[`pages/Profile/ProfilePage.tsx`](../../app/src/pages/Profile/ProfilePage.tsx) | implemented |
| 2 | `Connect2_LegacyShared/ActionGetAllApplicationEvents` | server action | `Connect2_LegacyShared` | SharePopup.onClick_CallButton → event event_ShareToOthers of SharePopup → … → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents | no | – | – | **missing** |
| 3 | `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails` | data action | `Directory_EntityDetailsActions` | Directory_EntityDetailsActions.action_AsyncRefresh_ContactDetails → Directory_EntityDetailsActions.DataActionFetchContactDetails<br>Directory_EntityDetailsActions fetch at start → Directory_EntityDetailsActions.DataActionFetchContactDetails | yes | `fetchEntityContactDetails()` [`api/message/repository.ts:264`](../../app/src/api/message/repository.ts#L264) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → fetchEntityContactDetails`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 4 | `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes` | data action | `Directory_EntityDetailsActions` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → Directory_EntityDetailsActions.action_RefreshFetchNotes → Directory_EntityDetailsActions.DataActionFetchNotes<br>Directory_EntityDetailsActions.OnReady → Directory_EntityDetailsActions.onReady → Directory_EntityDetailsActions.action_RefreshFetchNotes → Directory_EntityDetailsActions.DataActionFetchNotes<br>Directory_EntityDetailsActions fetch at start → Directory_EntityDetailsActions.DataActionFetchNotes | yes | `fetchEntityNotes()` [`api/note/repository.ts:47`](../../app/src/api/note/repository.ts#L47) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → fetchEntityNotes`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 5 | `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold` | data action | `HouseholdDetails_Block` | HouseholdDetails_Block.refresh_GetHouseholdDetail → HouseholdDetails_Block.DataActionGetHousehold<br>HouseholdDetails_Block.OnParametersChanged → HouseholdDetails_Block.screenEvent_OnParametersChanged → HouseholdDetails_Block.DataActionGetHousehold<br>HouseholdDetails_Block fetch at start → HouseholdDetails_Block.DataActionGetHousehold | yes | `fetchHousehold()` [`api/household/repository.ts:43`](../../app/src/api/household/repository.ts#L43) (page) | `HouseholdDetailsContainer → useHouseholdDetails → fetchHousehold`<br>[`containers/HouseholdDetails/HouseholdDetailsContainer.tsx`](../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx) | implemented |
| 6 | `UBTConnect/Directory_Household/HouseholdDetails_Block/DataActionGetHousehold_Coordinates` | data action | `HouseholdDetails_Block` | HouseholdDetails_Block.refresh_GetHouseholdCoordinates → HouseholdDetails_Block.DataActionGetHousehold_Coordinates<br>HouseholdDetails_Block fetch at start → HouseholdDetails_Block.DataActionGetHousehold_Coordinates | yes | `fetchHouseholdCoordinates()` [`api/household/repository.ts:49`](../../app/src/api/household/repository.ts#L49) (page) | `HouseholdDetailsContainer → useHouseholdDetails → fetchHouseholdCoordinates`<br>[`containers/HouseholdDetails/HouseholdDetailsContainer.tsx`](../../app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx) | implemented |
| 7 | `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote` | service action | `NotesSheet` | NotesSheet.handler_OnSubmitNote → server AddNote | no | `addNote()` [`api/note/repository.ts:54`](../../app/src/api/note/repository.ts#L54) (page) | `NotesSheet → addNote`<br>[`components/note/NotesSheet/NotesSheet.tsx`](../../app/src/components/note/NotesSheet/NotesSheet.tsx) | implemented |
| 8 | `UBTConnect/App_Profile/Profile/DataActionGetCountryInfo` | data action | `Profile` | CacheControl.OnInitialize → CacheControl.onInitialize → … → Profile.cacheControl_UserInfo_WrapperResult → Profile.DataActionGetCountryInfo<br>CacheControl_UserInfo.onAfterFetch → event result of CacheControl_UserInfo → … → Profile.cacheControl_UserInfo_WrapperResult → Profile.DataActionGetCountryInfo<br>Profile.onChange_LocalityDropdown → Profile.DataActionGetCountryInfo<br>(+1 more chains) | yes | `fetchCountryInfo()` [`api/country/repository.ts:66`](../../app/src/api/country/repository.ts#L66) (page) | `Profile → useProfile → useCountryInfoQuery → fetchCountryInfo`<br>[`pages/Profile/ProfilePage.tsx`](../../app/src/pages/Profile/ProfilePage.tsx) | implemented |
| 9 | `UBTConnect/App_Profile/Profile/ServiceAPIMember_EditDetails_Service` | service action | `Profile` | onClick in Button → event event_OnClick of Button → event buttonOnClick of Button → Profile.onClick_Save → server Member_EditDetails_Service | no | `editMemberDetails()` [`api/member/repository.ts:35`](../../app/src/api/member/repository.ts#L35) (page) | `Profile → useProfile → editMemberDetails`<br>[`pages/Profile/ProfilePage.tsx`](../../app/src/pages/Profile/ProfilePage.tsx) | implemented |
| 10 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink` | server action | `ShareSheet` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → event onClick of CircleButton_WithLabel → ShareSheet.handler_OnClickExternalOption → server CS_CreateShareProfileLink | no | – | – | **missing** |
| 11 | `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject` | server action | `ShareSheet` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → ShareSheet.action_SubmitShare → server CS_ShareObject<br>onClick in Button → event event_OnClick of Button → … → ShareSheet.action_SubmitShare → server CS_ShareObject | no | `csShareObject()` [`api/share/shareSheet.ts:25`](../../app/src/api/share/shareSheet.ts#L25) (page) | `ShareSheetContainer → useShareSheet → csShareObject`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 12 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers` | data action | `ShareSheet` | ShareSheet.handler_InputEventSubmit → ShareSheet.DataActionGetAvailableMembers<br>ShareSheet fetch at start → ShareSheet.DataActionGetAvailableMembers | no | `fetchAvailableMembers()` [`api/member/repository.ts:12`](../../app/src/api/member/repository.ts#L12) (page) | `ShareSheetContainer → useShareSheet → useAvailableMembersQuery → fetchAvailableMembers`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 13 | `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared` | data action | `ShareSheet` | ShareSheet.OnParametersChanged → ShareSheet.screenEvent_OnParametersChanged → ShareSheet.DataActionGetRecentlyShared<br>ShareSheet fetch at start → ShareSheet.DataActionGetRecentlyShared | no | `fetchRecentlyShared()` [`api/share/shareSheet.ts:14`](../../app/src/api/share/shareSheet.ts#L14) (page) | `ShareSheetContainer → useShareSheet → useRecentlySharedQuery → fetchRecentlyShared`<br>[`containers/ShareSheet/ShareSheetContainer.tsx`](../../app/src/containers/ShareSheet/ShareSheetContainer.tsx) | implemented |
| 14 | `UBTConnect/ServiceAPIAddBookmark2` | service action | `UBTConnect` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect.toggleBookmarkItem_C2 → server AddBookmark2<br>onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect.toggleBookmarkItem_C2 → server AddBookmark2 | no | `addC2Bookmark()` [`api/bookmark/repository.ts:41`](../../app/src/api/bookmark/repository.ts#L41) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → bookmarkServerActions → addC2Bookmark`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 15 | `UBTConnect/ServiceAPIDeleteBookmarkByBookmarkId2` | service action | `UBTConnect` | onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect.toggleBookmarkItem_C2 → server DeleteBookmarkByBookmarkId2<br>onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → … → UBTConnect.toggleBookmarkItem_C2 → server DeleteBookmarkByBookmarkId2 | no | `deleteC2Bookmark()` [`api/bookmark/repository.ts:52`](../../app/src/api/bookmark/repository.ts#L52) (page) | `EntityDetailsActionsContainer → useEntityDetailsActions → bookmarkServerActions → deleteC2Bookmark`<br>[`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx) | implemented |
| 16 | `UBTConnect_Utils/ActionCS_CreateShareProfileLink` | server action | `UBTConnect_Utils` | onClick in Button → event event_OnClick of Button → … → UBTConnect_Utils.shareEntity_ByURL → server CS_CreateShareProfileLink | no | – | – | **missing** |

## 7. Missing in React

- Call `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`. Chain on TST: onClick in CircleButton_WithLabel → CircleButton_WithLabel.action_OnClick → event onClick of CircleButton_WithLabel → ShareSheet.handler_OnClickExternalOption → server CS_CreateShareProfileLink.
  - React has the function, but this route does not use it: `csCreateShareProfileLink()` [`api/share/shareSheet.ts:39`](../../app/src/api/share/shareSheet.ts#L39).
  - Note in [`api/share/shareSheet.ts:35`](../../app/src/api/share/shareSheet.ts#L35): "/** CS_CreateShareProfileLink (Handler_OnClickExternalOption, ShareSheet.mvc.js:2250-2301): the share id and URL. */"
  - Note in [`components/feed/EmbeddedFeed/README.md:66`](../../app/src/components/feed/EmbeddedFeed/README.md#L66): "is not wired: ShareEntity_ByURL (UBTConnect_Utils) is not ported (SocialSharing plugin + CS_CreateShareProfileLink),"
  - Note in [`containers/ShareSheet/README.md:56`](../../app/src/containers/ShareSheet/README.md#L56): "- ActionCS_CreateShareProfileLink (`cs_CreateShareProfileLink`)."
- Call `UBTConnect_Utils/ActionCS_CreateShareProfileLink`. Chain on TST: onClick in Button → event event_OnClick of Button → … → UBTConnect_Utils.shareEntity_ByURL → server CS_CreateShareProfileLink.
  - No React code makes this call.
  - Note in [`api/share/shareSheet.ts:35`](../../app/src/api/share/shareSheet.ts#L35): "/** CS_CreateShareProfileLink (Handler_OnClickExternalOption, ShareSheet.mvc.js:2250-2301): the share id and URL. */"
  - Note in [`containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx:160`](../../app/src/containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx#L160): "// Handle_Share_Others: closes, then UBTConnect_Utils ShareEntity_ByURL (not ported, README)."
  - Note in [`components/feed/EmbeddedFeed/README.md:65`](../../app/src/components/feed/EmbeddedFeed/README.md#L65): "- Event_ShareToOthers → Handle_Share_Others (:257, :775-807: close, then ShareEntity_ByURL(Type_ShareObject.Feed, Id))"
- Call `Connect2_LegacyShared/ActionGetAllApplicationEvents`. Chain on TST: SharePopup.onClick_CallButton → event event_ShareToOthers of SharePopup → … → Connect2_LegacyShared.cacheLocalApplicationEvents → server GetAllApplicationEvents.
  - No React code makes this call.

## 8. Questions

1. React calls `/api/UBTConnect_Utils/ActionGetUserInformation` from `fetchUserInformation()` [`api/member/userInformation.ts:6`](../../app/src/api/member/userInformation.ts#L6) (shell + page). TST Profile has no chain to this call. Does the call belong to this route?
2. React calls `/api/UBTConnect_Utils/ServiceAPIDeleteNoteByNoteId` from `deleteNote()` [`api/note/repository.ts:73`](../../app/src/api/note/repository.ts#L73) (page). TST Profile has no chain to this call. Does the call belong to this route?
3. React calls `/api/UBTConnect_Utils/ServiceAPIUpdateNote` from `updateNote()` [`api/note/repository.ts:66`](../../app/src/api/note/repository.ts#L66) (page). TST Profile has no chain to this call. Does the call belong to this route?
4. React calls `/api/UBTConnect_Utils/CacheControl_AllSubdivisions/DataActionGetCacheInfo` from `fetchAllSubdivisions()` [`api/locality/repository.ts:165`](../../app/src/api/locality/repository.ts#L165) (page). TST Profile has no chain to this call. Does the call belong to this route?
5. React calls `/api/UBTConnect_Utils/CacheControl_AllLocalities/DataActionGetCacheInfo` from `fetchAllLocalities()` [`api/locality/repository.ts:157`](../../app/src/api/locality/repository.ts#L157) (page). TST Profile has no chain to this call. Does the call belong to this route?
6. React calls `/api/UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo` from `fetchPolicies()` [`api/app/repository.ts:54`](../../app/src/api/app/repository.ts#L54) (shell + page). TST Profile has no chain to this call. Does the call belong to this route?

## 9. Method

1. **OutSystems (TST).** The tool reads `facts.json` and the compiled code of `migration/screens/Profile/analysis/`:
   - the rendered files;
   - each server call with its chain of client actions, and the calls that TST made in the capture;
   - the effects of each user action.
2. **Route and app shell.** OutSystems: a chain belongs to the app shell when it starts in `CommonUI_InsideLayout`, one of its blocks, or a module action. React: a binding belongs to the app shell when its file is in the code that `main.tsx` loads.
3. **MCP (DEV).** The tool reads the UI flow with `getScreenNames`. TST wins when DEV is different.
4. **React.** `react_calls.mjs` reads the app shell from `app/src/main.tsx` and the screen from its `<Route>Page.tsx`. It counts only the code that the app uses.
5. **Match.** `callAction(M, A)` gives `/api/M/A`. The `x-os-paths` of `app/src/api/openapi.yaml` give the TST call. The status is `implemented` when the TST call is the same. Else the status is `missing`.

Limit: a name or a call match does not prove the same behaviour. The parity checks of the migration compare the behaviour.
