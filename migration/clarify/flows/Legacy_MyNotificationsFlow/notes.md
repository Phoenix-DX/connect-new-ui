# Reader notes: Legacy_MyNotificationsFlow (stage 1, 2026-10-27)

## TST presence check
Both screens are wrappers. TST files read: UBTConnect.Legacy_MyNotificationsFlow.MessageList.mvc.js,
UBTConnect.Legacy_MyNotificationsFlow.MessageDetail.mvc.js, Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageList.mvc.js,
Connect2_LegacyShared.MyNotifications.ScreenBlock_MessageDetail.mvc.js, and (view and strings only)
MessageListBlock.mvc.js, MessageListItem.mvc.js.

- Pack elements absent on TST: none found in the files read.
- TST elements absent in the pack (the pack has no logic of the screen blocks):
  - Block variables, JS nodes (FocusCursor, WasCurrentViewRestoredFromCache, ScrollToTop, SetScrollToTop, CheckForEnterKey), all
    block actions of ScreenBlock_MessageList (ScreenBlock_MessageList.mvc.js:1313-2870) and ScreenBlock_MessageDetail
    (ScreenBlock_MessageDetail.mvc.js:869-1700).
  - TST MessageList.mvc.js:358 Layout_OnEventNotificationReceived exists; the pack lists it as a screen action without a widget binding.
  - Sub-blocks of Connect2_LegacyShared (MessageListBlock, MessageListItem, MessageList_Filter, MessageSearchHistory,
    MessageList_NoNotifications_Banner, Warning_PrivateMessage, NotificationDetailBlock) are not in references.md
    (it names only the two ScreenBlock files). TST has MessageListBlock, MessageListItem, MessageList_Filter,
    MessageFilterGroup, MessageFilterItem and MessageList_NoNotifications_Banner (tst_source.py list MyNotifications).
    Only MessageListBlock and MessageListItem were read (partly).
- Facts where TST view differs in form from the React file (rows carry them; the judge decides):
  - Search_Icon visible = !ShowFilters in TST (ScreenBlock_MessageList.mvc.js:564); React also hides it when ShowSearch.
  - Close_Filter_Icon OnClick in TST = ToggleShowFilters; React = onCloseSearchAndFilter.
  - OnScrollEnding: TST sets isLoadMore=False when GetMessages is not fetched (else branch, line ~1868); React returns with it True.
  - TST MessageListBlock event OnClick_GoToMessageDetail has (MessageInstanceId, IsRead); the screen block action takes the id only.
  - TST SetScrollToTop JS uses content.scroll(...); React sets scrollTop = 0.

## Pack gaps
- screens.md: the ScreenBlock logic is not in the pack by design. MessageDetail event handlers for Orbit, Assemble, LDM, share
  object and feed item need the block (ScreenBlock_MessageDetail.mvc.js:1211-1507) which the reader summarised.
- Cut arguments: the If condition of "Sharing or Orbit or ..." in GetMessageInstanceByIdOnAfterFetch (third term onward) and the
  full text of the JS nodes were not read (CheckForEnterKey body after keyCode==13, FocusCursor).
- Unread stretches: Connect2_LegacyShared.Widgets.NotificationDetailBlock, MessageList_Filter, MessageSearchHistory,
  Warning_PrivateMessage, and the React files MessageSearchHistory.tsx, MessageListFilter.tsx, WarningPrivateMessage.tsx,
  NotificationDetailBlock.tsx, unreadNotifications.ts, inputs.ts, api/* repositories (only grep and short views).
- strings.md lists strings of shared blocks (PIN, unsupported version, download), not of these two screens; not grepped.
- data.md says "Get_UI_UpdateItems_UnreadCount_All: no mock handler found"; the handler is recordedHandler in
  app/src/platform/bootstrap/mocks.ts:222.

## Mock files per screen
- MessageList: app/src/pages/MessageList/mocks.ts (handlers: DataActionGetMessages, DataActionGetMessageInstanceById2,
  ActionWrapper_MarkAllAsReadNotifications, ActionMarkMessageAsRead, ActionMarkMessageAsClear).
- MessageDetail: app/src/pages/MessageDetail/mocks.ts (DataActionGetMessageInstance,
  ScreenDataSetGetMessageTemplateParametersByMessageTemplateId, ActionWrapper_NotificationOpened). No handler for
  Get_OrbitNotificationParameters, Get_OrbitHostSurveyNotificationParameters, StoreAdaptiveCardResponses (only in api/schema.d.ts and openapi.yaml).

## Board lines
Both screens are built: migration/board.md:16 (MessageDetail, decision build, route-messagedetail) and :17 (MessageList, decision build, route-messagelist).
