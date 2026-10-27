# Flow report: Legacy_MyNotificationsFlow

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 2 (built: MessageList, MessageDetail; not built: none) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/MessageList/**`, `app/src/pages/MessageDetail/**`, KB pages (`pack/kb.md`, `connect2-legacy/domains/messages/build/behaviour.md`), TST compiled code of the two screens, the two screen blocks and 9 sub-blocks (`tst_source.py`), `migration/runtime-sources/Connect2_LegacyShared.controller.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

Both screens are wrappers: the screen holds the layout placeholders and the event handlers, the block
`Connect2_LegacyShared.MyNotifications.ScreenBlock_*` holds the logic. The DEV pack has no logic for the blocks, so
every block row is checked against the TST compiled code. Abbreviations: `SBML` =
`Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc.js`, `SBMD` =
`Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js`, `NDB` =
`Connect2_LegacyShared.Widgets.NotificationDetailBlock.mvc.js`, `UML` = `app/src/pages/MessageList/hooks/useMessageList.ts`,
`MLS` = `app/src/pages/MessageList/hooks/messageListState.ts`, `MLV` = `app/src/pages/MessageList/components/MessageListView.tsx`,
`UMD` = `app/src/pages/MessageDetail/hooks/useMessageDetail.ts`, `MDS` = `app/src/pages/MessageDetail/hooks/messageDetailState.ts`.

## 1. Summary

- Counts by verdict: match 106 · partial 6 · missing 21 · differs 0 · mock-only 8 · n/a 11 · unclear 0 (same as `checklist.json`, 152 rows).
- F1 (major): a Sharing message shows no shared-item card; the Share_UI block, its three events and the Feed_Embeded placeholder are markers.
- F2 (major): an Orbit or Assemble message has no action button. The two click actions, their server actions, the Assemble content builder and the four navigation handlers are missing.
- F3 (major): an adaptive-card message shows a marker; the viewer, the submit action, StoreAdaptiveCardResponses and the two LDM handlers are missing.
- F6 (major): a private message of another user: TST shows the toast and the message; React shows the toast and leaves to MessageList.
- F4, F5 (minor): the Close_Filter_Icon runs a wider action; the summary and the urgent icon of the detail card are markers.
- Status: a user can open the list signed in or anonymous. The list supports search, sort, filter, pull to refresh, load more, mark one or all messages read, and clear a message. A user can open a General-Information message and read it with the sender, date and sanitized content. A user cannot open the shared item of a Sharing message, open the Orbit or Assemble event behind a notification, or answer an adaptive card.

## 2. Screens

### 2.1 MessageList

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| roles, route | Anonymous, Registered, UBTOne_User; `/UBTConnect/MessageList`; no input | route meta access anonymous | match | `app/src/pages/MessageList/MessageListPage.tsx:16`; BR-UBTCON-624 |
| block ScreenBlock_MessageList(Trigger_PullToRefresh) | arg from the local variable | `useMessageList({ signedIn, triggerPullToRefresh })` | match | `MessageListPage.tsx:20-37` |
| local Trigger_PullToRefresh | False; True only in the dead handler; False in Handler_PullToRefreshTriggered | `useState(false)`, reset in the handler | match | `MessageListPage.tsx:19, 26-28` |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| GetMessages (OnReady, RefreshMessages) | data action of the block; OnAfterFetch_GetMessages | `useQuery` with `enabled: false`, `refetch` in refreshGetMessages | match | `UML:100-124`; SBML:1258 |
| GetMessages server side | Connect2_LegacyShared data action (BR-C2LEG-455 to 458) | MSW mock, 19 fictional rows | mock-only | `app/src/pages/MessageList/mocks.ts:6, 75` |
| GetMessageInstanceById2 (OnClick_GoToMessageDetail) | exists check | `fetchMessageInstanceExists` | match | `UML:226-230`; mock-only row for the server side |
| Wrapper_MarkAllAsReadNotifications, MarkMessageAsRead, MarkMessageAsClear | server actions of Connect2_LegacyShared (BR-C2LEG-464) | repository calls `ActionWrapper_MarkAllAsReadNotifications`, `ActionMarkMessageAsRead`, `ActionMarkMessageAsClear` | mock-only | `app/src/api/notification/repository.ts:52-57`, `app/src/api/message/repository.ts:200, 211`; mocks `mocks.ts:94-103` |
| Get_UI_UpdateItems_UnreadCount_All | called by BottomBarMenu (BR-UBTCON-171) | `app/src/api/update/repository.ts:70-73`; mock `app/src/platform/bootstrap/mocks.ts:222` | n/a | shared, owned by App_Common_Blocks. The pack note "no mock handler found" is wrong |
| Client.Directory_Updates_* (3), IsNavigateToHomeOnBack, PIN, policy and B2C variables | read by the shared layout blocks | `app/src/lib/ubtConnect/actions.ts:62`, `app/src/platform/session/unreadCounters.ts` | n/a | shared, owned by App_Common_Blocks and the PIN and policy flows |
| 24 block variables, OnInitialize values | SelectedFilter Private True, Public True, OrderASC False; DeviceHardwareId from AppManager_GetDeviceContext; InitializeSetting | `initialMessageListState(signedIn, deviceUuid)` | match | `MLS:71-103`; SBML:1313-1383 |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| BottomBar placeholder | If GetUserId() <> Null: BottomBarMenu | `signedIn ? <BottomBar/>` | match | `MessageListPage.tsx:38-44` |
| CommonUI_Elements, BackNavigationHandler | CommonUI_InsideLayout; handler in the block | same | match | `MessageListPage.tsx:37, 45` |
| Layout pull to refresh | OnPullToRefresh -> PullToRefresh | `usePullToRefresh onOnPullToRefresh` | match | `MLV:303-306` |
| Title | search input when SearchMessageString <> "" or ShowSearch, else "Sort" or "My Notifications" | same ternary | match | `MLV:141-182`; SBML:500-520 |
| Input_SearchMessages | prompt "Search My Notifications...", MaxLength 50, Enabled = ShowSearch or SearchMessageString <> "", value bound to SearchMessageString, keyup -> OnKeyup_SearchMessages | same input, `onChange` dispatches searchStringChanged | match | `MLV:151-166` |
| Remove icon in the search input | icon remove, OnClick OnClickSearchClear | same; inline style from the capture, parity 0 | match | `MLV:168-174`; CR-MessageList-2 |
| Header left | signed in: arrow-left Close_Search_Icon when ShowSearch or ShowFilters, else MenuIcon; anonymous: MenuIcon_Back | same | match | `MLV:126-139` |
| Search_Icon | headerRight container in `$if(ShowSearch)` with an empty true branch; icon visible = not ShowFilters | shown when not ShowSearch and not ShowFilters | match | `MLV:186-194`; SBML:532-565. The reader saw only the `visible` term; the outer If makes the two conditions equal |
| Close_Filter_Icon, Filter_Icon | If ShowFilters: remove icon, OnClick ToggleShowFilters, visible = not ShowSearch; else filter icon, OnClick OnClick_Filter | same icons; Close_Filter_Icon calls OnClick_CloseSearchAndFilter | partial (F4) | `MLV:195-212`; SBML:566-640 |
| MessageSearchHistory(SearchString, myNotifications) | inside `$if(not ShowSearch)` with an empty true branch; events: `_handleError` only | `vars.ShowSearch && <MessageSearchHistory/>`, no onSelectedItem | match | `MLV:245-251`; SBML:664-690. See K1 |
| FilterDataBlock container | visible = not IsShowLoading | same | match | `MLV:252-253` |
| If ShowFilters | false: warning, list, empty states, Spinner; true: Animate(fast, rightToLeft) > MessageList_Filter | same | match | `MLV:254-292` |
| Warning_PrivateMessage | shown when not ShowWarning; Message = WarningMessage | same | match | `MLV:256-263`; SBML:705 |
| MessageListBlock(IsShowLoading, MessagesList) with 5 events | shown when the list is not empty | same | match | `MLV:264-277` |
| Empty states | If IsDataFetched and (signed in and not Private, or not Public, or search <> ""): NoResults with 3 placeholders, else NoNotifications_Banner | `filteredOrSearched` ternary | match | `MLV:217-240`; SBML:847; BR-C2LEG-474 |
| Spinner(isLoadMore), Spinner LoadingMarkAllRead(IsShowLoading) | after the list; after the content | same | match | `MLV:278, 295` |
| MessageListBlock: "Mark All as Read" bar | visible = not IsShowLoading and HasUnreadMessages | same | match | `app/src/pages/MessageList/components/MessageListBlock.tsx:43-72` |
| MessageListBlock: list and swipe actions | row hidden when IsClear; class background-blue-lightest when unread; full swipe left "Clear", right "Mark as Read" (visible = not IsRead); OnScrollEnding | same | match | `MessageListBlock.tsx:76-125`; MessageListBlock.mvc.js:258, 290-373 |
| MessageListItem | info line SentFromName + " · " + "ddd dd/MM/yyyy" + " " + lower("h:mm tt"); urgent icon; OnReady photo fetch Cache_SignedImageURL_Get(MemberId, Member, Small) when IconURL = "" and UserId set | same | match | `app/src/pages/MessageList/components/MessageListItem.tsx:23-29, 50-63, 123-126`; MessageListItem.mvc.js:339, 442; BR-C2LEG-490 |
| MessageList_Filter | NewToOld radio -> MessageSort(False), OldToNew -> MessageSort(True); "Reset" -> ResetFilters, "Apply" -> ApplyFilters | `MessageListFilter.tsx:58-104` | match | MessageList_Filter.mvc.js:221-420 |
| MessageFilterGroup, MessageFilterItem | TextEllipsis(Title, 30); Separator(small, horizontal) | same | match | `MessageFilterGroup.tsx:11-26`, `MessageFilterItem.tsx:10-24` |
| MessageList_NoNotifications_Banner | inbox icon, "You have no notifications" | same | match | `MessageListNoNotificationsBanner.tsx:4-18` |
| Warning_PrivateMessage block | lock icon, Message, "Dismiss" -> Dismiss, "Login" (ThemeGrid_MarginGutter) -> NavigateTo_Login | same | match | `WarningPrivateMessage.tsx:16-39`; Warning_PrivateMessage.mvc.js:136-255 |
| MessageSearchHistory block | GetFilteredUserSearchHistory (client entity, max 5) at start and on parameter change; list when not empty; click -> LocalSearchHistory_Update, SelectedItem | same, IndexedDB adapter | match | `MessageSearchHistory.tsx:41-83`; CR-MessageList-3 |

**Screen actions**

| Action | OutSystems (trigger -> steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Layout_OnEventNotificationReceived | Trigger_PullToRefresh = True | - | n/a | dead in the model: no widget binds it (TST MessageList.mvc.js view 67-272; KB legacy-notifications.md "Dead") |
| Handler_PullToRefreshTriggered | Trigger_PullToRefresh = False | same | match | `MessageListPage.tsx:26-28` |
| Handler_NavigateTo_MessageDetail(Id) | navigate MessageDetail | same | match | `MessageListPage.tsx:23-25` |
| Handler_NavigateTo_B2CCallback, Handler_NavigateTo_B2CLanding | RedirectToURL; Login | - | n/a | dead in the model: the TST view creates no B2C_SignInFlowController block (SBML:1-1312); `migration/knowledge/audit-a1-empty-handlers.md:56` |
| B2C_SignInFlowController SignInCompleted, ResetPasswordCompleted, SignUpCompleted | block handlers | - | n/a | same reason |
| Block OnReady | Refresh GetMessages | `onReady` once | match | `UML:141-147` |
| OnParametersChanged | If Trigger_PullToRefresh: PullToRefresh, event PullToRefreshTriggered | same | match | `UML:149-154` |
| PullToRefresh | If not IsRefreshing: RefreshMessages(False) | same | match | `UML:156-159`; BR-C2LEG-466 |
| RefreshMessages(IsScrollToTop) | IsRefreshing = True; refresh; If IsScrollToTop: `.content` scrollTop = 0 | same | match | `UML:61-65, 126-132`; SBML:3162-3166 |
| OnAfterFetch_GetMessages | list replace, SetUnreadNotificationsNumber, totals, IsRefreshing False | same | match | `UML:108-113`, `MLS:135-143` |
| OnClick_Search, OnClick_Filter, ToggleShowSearch, ToggleShowFilters | as named | same | match | `UML:196-206`, `MLS:144-151` |
| RevertSelectedFiltersToPersistedValue, SaveSetting, SetSortVariable | as named | same | match | `MLS:109-115, 156-164` |
| OnClick_ApplyFilters, OnClick_ResetFilters, OnChange_MessageSort | as named | same | match | `UML:170-182`, `MLS:165-173` |
| OnClick_CloseSearchAndFilter | If ShowSearch: ToggleShowSearch, JS, If not FromCache: OnClickSearchClear; else ToggleShowFilters, Revert; then FocusCursor (200 ms) | same structure | match | `UML:209-218`; SBML:2396-2425, 3184-3193 |
| OnClickSearchClear | SearchMessageString = ""; `content.scroll({top: 0})`; OnHandle_SearchHistorySelectedItem("") | same, `scrollTop = 0` | match | `UML:189-194`; SBML:3167-3178 |
| OnHandle_SearchHistorySelectedItem | SelectedHistorySearch = selected or typed; RefreshMessages(True) | same | match | `UML:184-188`, `MLS:178-181`; BR-C2LEG-468 |
| OnKeyup_SearchMessages | keyCode 13: OnHandle_SearchHistorySelectedItem(""), event.target.blur() | same | match | `MLV:119-124`; SBML:3194-3199 |
| Warning NavigateTo_Login, Dismiss_WarningMessage | ForceInitiateLoginFlowDateTime = now; ShowWarning = True | same | match | `UML:327-332`, `MLS:206-207` |
| OnClick_GoToMessageDetail | Exist -> NavigateTo_MessageDetail; else Info "This message is no longer available", refresh | same | match | `UML:222-240`; BR-C2LEG-469 |
| OnClick_MarkAllAsRead | IsShowLoading; server call; TotalChange > 0: RefreshMessages, SynchronizeNumberUnreadMessages; IsShowLoading False | same | match | `UML:67-74, 245-257`; BR-C2LEG-470 |
| Swipe_EventsRead, UpdateMessageRead | MarkMessageAsRead; HasUnreadMessages; DecrementReadMessagesCounter; row IsRead | same | match | `UML:260-274`, `MLS:188-192`; BR-C2LEG-473 |
| Swipe_EventsClear, HideMessageClear, UpdateMessageClear | remove row, MaxRecords - 1; MarkMessageAsClear; IsEmptyMessage; decrement when unread | same | match | `UML:277-287`, `MLS:193-197`; BR-C2LEG-472 |
| OnScrollEnding | If not IsRefreshing: isLoadMore True; If IsDataFetched: (length >= MaxRecords - 20: MaxRecords + 20, RefreshMessages, isLoadMore False; else isLoadMore False); else nothing | same | match | `UML:291-300`; SBML:1829-1902. The reader note "TST sets isLoadMore False in the else branch" is wrong: that branch is empty (SBML:1877-1880) |
| BackNavigationHandler | ShowFilters: prevent, toggle; ShowSearch: prevent, toggle | same | match | `UML:303-312`; BR-C2LEG-467 |
| Flow error handling | the flow exception handler | `raiseToFlowHandler` | match | `app/src/legacy/os/exceptions.ts:69-81`; U10 (`migration/app-shell.spec.md:367`) |

**Validations**

None. The only constraint is MaxLength 50 of Input_SearchMessages (UI row above).

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Screen OnReady: ClearAllNotifications | clears the device push tray | no call | n/a | native only (BR-UBTCON-624, BR-C2UTL-185); U12 = no push on the web (`migration/app-shell.spec.md:344, 379`) |
| OnInitialize: WasCurrentViewRestoredFromCache, FocusCursor | restored: focus the input after 200 ms | same | match | `UML:56-60, 134-139`; SBML:3137-3151 |
| InitializeSetting | signed in: ShowWarning True, filters from Selected*; else ShowWarning False, Private False, Public True | same | match | `MLS:73-80`; SBML:2199-2253; BR-C2LEG-465 |

**Strings**: all 10 strings of the screen match (`MLV`, `MessageListBlock.tsx`, `UML`, `MLS`), including the two spaces in "please login to the  Connect App.".

### 2.2 MessageDetail

**Identity**

| Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| roles, route, inputs | Anonymous, Registered, UBTOne_User; MessageInstanceId, isOriginPushNotification, MessageTemplateId, HardwareId | `readMessageDetailInputs(params)` | match | `app/src/pages/MessageDetail/MessageDetailPage.tsx:25-29`; BR-UBTCON-623 |
| block ScreenBlock_MessageDetail args | the four inputs | `initialMessageDetailState(inputs)` | match | `MDS:31-44` |
| local FeedItemId, Placeholder_FeedItem | set by SetFeedItemId; Feed_Embeded(FeedItemId) in the sharing branch | - | missing (F1) | SBMD:526-547 |

**Data**

| Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| GetMessageInstance (OnReady) | data action; OnAfterFetch GetMessageInstanceByIdOnAfterFetch | `fetchMessageInstance` in onReady | match | `UMD:184-185`; the refresh after a card submit is F3 |
| GetMessageInstance server side | BR-C2LEG-475 | MSW mock, rows copied from MessageList (Private, UserId 0) | mock-only | `app/src/pages/MessageDetail/mocks.ts:138`; `migration/knowledge/mock-fixtures.md:64-67` |
| GetMessageTemplateParametersByMessageTemplateId | refreshed when not restored from cache | `fetchMessageTemplateParameters` | match | `UMD:133-138`; mock-only row for the server side |
| Wrapper_NotificationOpened | server action (BR-C2LEG-462) | `markNotificationOpened` | mock-only | `app/src/api/notification/repository.ts:45-48` |
| Get_OrbitNotificationParameters, Get_OrbitHostSurveyNotificationParameters | server actions for OnClick_ViewOrbitEvent | - | missing (F2) | only `api/schema.d.ts`, `openapi.yaml` |
| StoreAdaptiveCardResponses | server action for the card submit (BR-C2LEG-463) | - | missing (F3) | only `api/schema.d.ts`, `openapi.yaml` |
| block variables IsEntryScreen, IsLoading, ShowAssembleAction | False, True, False | same | match | `MDS:34-36`; SBMD model:49-51 |

**UI tree**

| Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| BottomBar, CommonUI_Elements, BackNavigationHandler | signed in only; layout block; handler | same | match | `MessageDetailPage.tsx:44-59` |
| Layout title | SentAs <> Null: ("Meal Allocation" for lordsDayMeal, else SenderTarget.Name); else User.Name | `messageTitle` | match | `MDS:113-117`; SBMD:286; BR-C2LEG-480 |
| Header: MenuIcon_Back, title container | class notification-detail-title-overflow, center | same | match | `app/src/pages/MessageDetail/components/MessageDetailView.tsx:68-73` |
| If IsLoading: Spinner else NotificationDetailBlock(...) | 11 arguments, HostConfig = GetHostConfigByConfigId(events) | Spinner while loading or null; 10 arguments; no HostConfig | partial (F3) | `MessageDetailView.tsx:33-45, 75-79`; SBMD:300-360 |
| NotificationDetailBlock arguments | ForceNoIconBorder = orbit or orbitHostSurvey; ShowDetailsPlaceholder = sharing; HasActionButton = orbit, orbitHostSurvey or assemble; IsUrgent = priority urgent | same | match | `MessageDetailView.tsx:39-45` |
| Placeholder MessageDetails | sharing: GetHasExtendedShare (True on TST) -> Share_UI.ShareObjectDetail_ExtendedShare(ShareId, HasAccessToDeceasedHousehold = GetHasDeceasedProfileAccess), else ShareObjectDetail; events SetFeedItemId, SubscriptionDenied, NavigateTo_ObjectDetail | NotCaptured marker | missing (F1) | `MessageDetailView.tsx:46-48`; SBMD:385-400; BR-C2LEG-485 |
| Placeholder ActionButton | assemble: "View Meeting" (visible = GetHasAssemble and fetched and ShowAssembleAction); else ViewOrbitEvent (visible = fetched and not empty), "View Event" or "Go to Host Survey" | NotCaptured marker | missing (F2) | `MessageDetailView.tsx:49-57`; SBMD:566-640; BR-C2LEG-483, 484 |
| NDB icon container and image | no-border rule; external image or User_rectangle.png | same | match | `NotificationDetailBlock.tsx:76-119`; NDB:326-362 |
| NDB SummaryContainer | expression with inline style color #605f5f, 14px, when Summary <> "" | marker around the text, no style | partial (F5) | `NotificationDetailBlock.tsx:131-134`; NDB:405-432 |
| NDB urgent icon | exclamation icon, class icon alert-text fa-33, inline style (white, round, red, 20 px) | marker only | missing (F5) | `NotificationDetailBlock.tsx:141-144`; NDB:450-480 |
| NDB body: sanitized HTML | SanitizedHtml with AllowedCssStyles, AllowedTags, AllowedAttributes, ResetWhitelist | same four settings, same branch order | match | `NotificationDetailBlock.tsx:81-107`; NDB:495-595 |
| NDB body: AdaptiveCardViewer(AdaptiveCardContent, HostConfig) | OnExecuteAction -> AdaptiveCardViewerOnExecuteAction | marker | missing (F3) | `NotificationDetailBlock.tsx:84-89`; NDB:506-553; BR-C2LEG-489 |
| NDB date, action-button container | "ddd dd/MM/yyyy" + lower("h:mm tt"); container when HasActionButton | same | match | `NotificationDetailBlock.tsx:33-35, 161-170`; NDB:609-640 |

**Screen actions**

| Action | OutSystems (trigger -> steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|
| Handler_BackNavigationHandlerBackNavigation | pathname = "/UBTConnect/": prevent, navigate HomeFeed | same | match | `MessageDetailPage.tsx:53-56`; BR-UBTCON-626 |
| Handler_NavigateTo_MessageList | GetHasNewNotifications (False on TST): Notifications, else MessageList | both branches | match | `MessageDetailPage.tsx:31-33`; `migration/knowledge/flag-values-tst.json`; BR-UBTCON-625 |
| Handler_NavigateTo_Login | Login | same | match | `MessageDetailPage.tsx:34-36` |
| Handler_NavigateTo_OrbitEventDetails, OrbitMilestone, OrbitHostSurvey, AssembleDetail | the four Orbit and Assemble screens with In_FromNotification | - | missing (F2) | TST MessageDetail.mvc.js:593, 650, 781, 841; BR-UBTCON-610 |
| Handler_AddAuditAndNavigateTo_EventDetail, EventEmail | audit, GetHasNewLDM (True on TST): V2 screens | - | missing (F3) | TST MessageDetail.mvc.js:505-514, 1007-1014; BR-UBTCON-615, 616 |
| Handler_NavigateTo_ShareObjectDetail | switch on ShareObjectTypeId | - | missing (F1) | TST MessageDetail.mvc.js:917-938; BR-UBTCON-627 |
| Handler_SetFeedItemId, Handler_SubscriptionDenied | FeedItemId; App_Subscription_ShowUpgradePopUp | - | missing (F1) | raised by the Share_UI block |
| OnClick_ViewOrbitEvent | access checks, Get_Orbit*Parameters, NavigateTo_OrbitMilestone or OrbitEvent or OrbitHostSurvey; access errors | - | missing (F2) | SBMD:1211-1380; BR-C2LEG-484 |
| OnClick_ViewAssembleEvent | GetHasAssemble, parameters, NavigateTo_AssembleEvent; "You don't have access to Assemble." | - | missing (F2) | SBMD:1416-1507; BR-C2LEG-483 |
| AdaptiveCardViewerOnExecuteAction | send_email, view_event, other: StoreAdaptiveCardResponses, "Thanks for filling out our form!", refresh | - | missing (F3) | SBMD:1570-2230; BR-C2LEG-482 |
| NDB AdaptiveCardViewerOnExecuteAction | event AdaptiveCardEventExecuted | - | missing (F3) | NDB:671-726 |
| Screen widget tree: 11 block events | all bound | 2 bound (NavigateTo_MessageList, NavigateTo_Login) | partial (F2) | `UMD:39-44` |

**Validations**

None.

**Business logic**

| Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|
| OnReady | both ids null: Error "Invalid message detail id."; else refresh | same | match | `UMD:178-185`; BR-C2LEG-476 |
| OnAfterFetch: IsRetracted -> MessageRetractedFlow | AutoClose "Sorry, this message is not available anymore.", ReplaceOnUpcomingNavigation, NavigateTo_MessageList(True) | same | match | `UMD:54-65, 103-109, 159-162`; BR-C2LEG-478 |
| instance not found | signed in: AutoClose "You don't have access to that message", replace, leave; else NavigateTo_Login | same | match | `MDS:97`, `UMD:163-168` |
| private message, other user | do-while(false) loop: AutoClose "You don't have access to that message", then break; no navigation; the flow continues with the cleared check, the read step and the content; the message is shown | returns noAccess and leaves to MessageList | partial (F6) | SBMD:976-1011; `MDS:98-101`, `UMD:163-168`; BR-C2LEG-477 |
| private message, anonymous | NavigateTo_Login, return | same | match | SBMD:1004-1009 |
| IsCleared | AutoClose and leave | same | match | `MDS:102`; BR-C2LEG-478 |
| not IsRead | whatsNew: DecrementReadWhatsNewsCounter else DecrementReadMessagesCounter; Wrapper_NotificationOpened; retracted -> leave | same | match | `UMD:119-127`; CR-MessageDetail-1 (applied); BR-C2LEG-479 |
| SentAs = Null | Cache_SignedImageURL_Get(CreatedByMemberId, Member, Small) -> ProfileIconURL | same | match | `UMD:128-132` |
| sharing or orbit or orbitHostSurvey or assemble | when not restored: refresh the template parameters | same | match | `MDS:80-83`, `UMD:133-138`; SBMD:1081 (full condition read) |
| GetMessageTemplateParametersOnAfterFetch | assemble: ShowAssembleAction = both parameter ids found | same | match | `MDS:47-69`; the consumer button is F2 |
| orbit or orbitHostSurvey | Cache_UserInfo_Get, AddFirstSentence: "Hello " + FirstName + ", <br> <br>" + content | same | match | `UMD:139-145`, `MDS:119-123`; `Connect2_LegacyShared.controller.js:99-150`; BR-C2LEG-481 |
| assemble | BuildAssembleNotificationContent replaces the content | - | missing (F2) | `UMD:146-147` |
| end | IsLoading = False | same | match | `MDS:70-71` |
| NDB OnReady: OpenLinksInSystemBrowser | link click: InAppBrowser "_system" or window.open "_blank" | window.open "_blank" | match | `NotificationDetailBlock.tsx:59-74`; NDB:836-852; U18 |

**Strings**: 4 strings of the screen match: "Invalid message detail id.", "You don't have access to that message", "Sorry, this message is not available anymore." and "Meal Allocation". The missing strings belong to F2 (button texts, access messages) and F3 (card messages). Checklist row 132 lists them.

## 3. Blocks of the flow

The flow owns no block. The blocks it uses belong to `Connect2_LegacyShared`; the rows above check them in full:
ScreenBlock_MessageList, ScreenBlock_MessageDetail, MessageListBlock, MessageListItem, MessageList_Filter, MessageFilterGroup,
MessageFilterItem, MessageList_NoNotifications_Banner, Warning_PrivateMessage, MessageSearchHistory, NotificationDetailBlock.
Not checked here, used through placeholders: Reusable.Spinner, Reusable.CircledCheckbox, Reusable.TwoButtonsAligned,
Reusable.NoResults (React ports exist: `CircledCheckbox.tsx`, `TwoButtonsAligned.tsx`), OutSystemsUI Animate, Separator, Card.

## 4. Shared blocks and actions

| Item | Owner | React | Verdict here |
|---|---|---|---|
| BottomBarMenu, Directory_Updates_RefreshBottomBarCount, Get_UI_UpdateItems_UnreadCount_All | App_Common_Blocks | `app/src/components/layout/BottomBar/BottomBar.tsx:66, 75` | n/a, checked in the report of App_Common_Blocks |
| CommonUI_InsideLayout, BackNavigationHandler, PreventNavigation | App_Common_Blocks, NavigationHandler | `app/src/pages/MessageList/MessageListPage.tsx:37, 45` | match as used; internals not checked here |
| ClearAllNotifications (UBTConnect_Utils) | native push tray | not called | n/a, native only (U12) |
| SetUnreadNotificationsNumber, DecrementReadMessagesCounter, DecrementReadWhatsNewsCounter, SynchronizeNumberUnreadMessages | Connect2_LegacyShared client actions | `app/src/pages/MessageList/hooks/unreadNotifications.ts`; CR-MessageDetail-1 | match as used (BR-C2LEG-454) |
| Cache_SignedImageURL_Get, Cache_UserInfo_Get, AddFirstSentence | Connect2_LegacyShared, UBTConnect_Utils | `UMD:128-145` | match as used |
| GetHasNewNotifications, GetHasExtendedShare, GetHasDeceasedProfileAccess, GetHasAssemble, GetHasOrbitAccess, GetHasOrbitHostSurvey, GetHasNewLDM | UBTConnect_Utils flag helpers | `migration/knowledge/feature-flag-helpers.md` | the first is built both ways; the others are only needed by F1 to F3 |
| Share_UI.ShareObjectDetail, ShareObjectDetail_ExtendedShare, Feed_Embeded | Legacy_Share, Home | not built here | missing use (F1); internals in the reports of Legacy_Share and Home |
| Widgets.AdaptiveCardViewer, GetHostConfigByConfigId | Connect2_LegacyShared | not built | missing (F3) |
| FeedbackMessage_AutoClose, ReplaceOnUpcomingNavigation | UBTJavaScriptUtils, NavigationHandler | `UMD:54-65` | match as used (U9) |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | major | MessageDetail / Placeholder MessageDetails, FeedItemId, Handler_NavigateTo_ShareObjectDetail, Handler_SetFeedItemId, Handler_SubscriptionDenied | A Sharing message shows a NotCaptured marker instead of the shared-item card. TST renders Share_UI.ShareObjectDetail_ExtendedShare (GetHasExtendedShare is True on TST) with ShareId from the first template parameter, and the card's three events open the shared object, embed the feed item or show the upgrade pop-up. No recorded decision covers this: the board row (migration/board.md:16) says build with Feed CMS as mock, `audit-a1-empty-handlers.md:71` only records the gap. | `MessageDetailView.tsx:46-48`, `MessageDetailPage.tsx:23-24` | Build the Share_UI blocks once (Legacy_Share owns them), then wire SetFeedItemId, SubscriptionDenied and NavigateTo_ObjectDetail to the screen handlers from TST MessageDetail.mvc.js:917-938. See Q2 | built 2026-10-27 (`builds/B9-messagedetail.md`): ShareObjectDetail_ExtendedShare (the TST branch, C2ExtendedShare on); the flag-off ShareObjectDetail branch stays open (PD9) |
| F2 | major | MessageDetail / Placeholder ActionButton, OnClick_ViewOrbitEvent, OnClick_ViewAssembleEvent, Get_Orbit*Parameters, BuildAssembleNotificationContent, four navigation handlers | An Orbit or Assemble message has no "View Event", "Go to Host Survey" or "View Meeting" button; an Assemble message shows unfilled placeholders. The board (user, 2026-10-16) put the Orbit, Assemble and LDM targets in scope; `migration/knowledge/orbit-assemble-ldm.md:17` says the MessageDetail handlers "work once built", but they are not wired. | `MessageDetailView.tsx:49-57`, `UMD:146-147`, `MessageDetailPage.tsx:23-24` | Build the buttons and the two click actions from SBMD:566-640, 1211-1507; add the two server-action mocks and BuildAssembleNotificationContent from `Connect2_LegacyShared.controller.js`; wire the four handlers. See Q1 | built 2026-10-27 (`builds/B9-messagedetail.md`): PlaceholderLib SetTextPlaceholdersValue open (PD8) |
| F3 | major | MessageDetail / AdaptiveCardViewer, HostConfig, AdaptiveCardViewerOnExecuteAction, StoreAdaptiveCardResponses, two LDM handlers | An adaptive-card message shows a marker. TST renders the card with the Events host config and handles send_email, view_event and any other submit (store, thank, refresh). | `NotificationDetailBlock.tsx:84-89`, `MessageDetailView.tsx:75-79` | Needs the adaptive-cards renderer (a stack item) and the submit flow from SBMD:1570-2230. See Q3 | built 2026-10-27 (`builds/B9-messagedetail.md`): the renderer library waits for the decision PD7 |
| F4 | minor | MessageList / Close_Filter_Icon | The icon calls OnClick_CloseSearchAndFilter; TST calls ToggleShowFilters. The state result is the same, but React also runs FocusCursor and focuses the search input when a search term is active. | `MLV:195-203` | Call `toggleShowFilters` from the icon | fixed 2026-10-27 (`fixes/G1-content.md`) |
| F5 | minor | MessageDetail / NotificationDetailBlock summary, urgent icon | The summary renders inside a marker without its inline style; the urgent icon renders nothing. The compiled view holds both elements. | `NotificationDetailBlock.tsx:131-144` | Build both from NDB:405-480 (same icon as `MessageListItem.tsx:123-126`) | fixed 2026-10-27 (`fixes/G1-content.md`) |
| F6 | major | MessageDetail / OnAfterFetch, private message of another user | TST shows the toast "You don't have access to that message" and then the message (the branch ends with a loop break, not a navigation). React shows the toast and leaves to MessageList. The mock data takes this branch for every row opened while signed in. | `MDS:98-101`, `UMD:163-168` | Follow TST, or record the React behaviour as a decision. See Q4 | built 2026-10-27 (`builds/B9-messagedetail.md`) |

## 6. DEV vs TST differences

### 6.1 Elements

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| none | | | | The pack holds no logic for the two screen blocks by design; every TST element read has its counterpart in the pack's widget tree, and no pack element is absent on TST (reader notes) |

Pack gaps (not DEV vs TST): `pack/data.md` says Get_UI_UpdateItems_UnreadCount_All has no mock handler; it has one
(`app/src/platform/bootstrap/mocks.ts:222`). `pack/references.md` names only the two ScreenBlock files; the nine sub-block
files exist on TST (`tst_source.py list MyNotifications`, `NotificationDetailBlock`, `Warning_PrivateMessage`, `MessageSearchHistory`).

### 6.2 KB pages vs TST

| Id | KB text | TST evidence | File |
|---|---|---|---|
| K1 | BR-C2LEG-468 "A search picked from the history list wins over the typed text" | The logic exists (OnHandle_SearchHistorySelectedItem, SBML:1529-1588), but the TST view of ScreenBlock_MessageList passes no SelectedItem handler to MessageSearchHistory (SBML:664-690, events `_handleError` only). A tap on a history row only updates its CreatedOn; the search does not run from the list. | `connect2-legacy/domains/messages/build/behaviour.md:128` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Build the Orbit and Assemble action button, the two click actions and the four navigation handlers of MessageDetail now (F2)? | The board put the targets in scope on 2026-10-16; the entry points live in this flow and are missing. Orbit and Assemble messages are a main use of notifications. | (a) build now from SBMD and the controller, with mocks for the two Get_Orbit* actions; (b) wait for the Orbit and Assemble flow reports | (a): the code is in the TST files named in this report |
| Q2 | Build the shared-item card of a Sharing message (F1) now or after the Legacy_Share report? | The Share_UI blocks belong to Legacy_Share; building them twice costs more. | (a) after the Legacy_Share report, in one change for both flows; (b) now, here | (a) |
| Q3 | Add an adaptive-cards renderer to the stack (F3)? | The viewer needs a library (stack decision, stable-version rule); without it the card, its submit and the two LDM handlers stay missing. | (a) add the library and build the viewer and the submit flow; (b) keep the marker and record it as out of scope | (a), after the stack confirmation |
| Q4 | For a private message of another user (F6): follow TST (toast, then show the message) or keep the React behaviour (toast, then back to the list)? | 1:1 rule versus a TST behaviour that looks like a bug (the no-access branch ends with a loop break and the flow continues). The mock data hits this branch on every row. | (a) follow TST and note the oddity in `app/docs/known-original-bugs.md`; (b) keep React and record the decision there | (a) |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 6 | 5 | 0 | 1 | 0 | 0 | 0 | 0 |
| data | 23 | 6 | 0 | 3 | 0 | 8 | 6 | 0 |
| ui | 43 | 35 | 4 | 4 | 0 | 0 | 0 | 0 |
| actions | 49 | 33 | 0 | 12 | 0 | 0 | 4 | 0 |
| validations | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 24 | 21 | 1 | 1 | 0 | 0 | 1 | 0 |
| strings | 7 | 6 | 1 | 0 | 0 | 0 | 0 | 0 |
| **total** | 152 | 106 | 6 | 21 | 0 | 8 | 11 | 0 |
