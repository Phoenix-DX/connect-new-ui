# Call sites: SupperMeeting_Carousel

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBTConnect/Directory_SupperMeetings/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds`
- `SupperMeeting_HouseholdList.OnReady` → `SupperMeeting_HouseholdList.onReady` → `SupperMeeting_HouseholdList.DataActionGetSubdivisionHouseholds`
- `SupperMeeting_HouseholdList fetch at start` → `SupperMeeting_HouseholdList.DataActionGetSubdivisionHouseholds`

### `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchNotes`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Notes of ActionsMenu` → `Directory_EntityDetailsActions.handler_AddNotesOnClick` → `Directory_EntityDetailsActions.action_RefreshFetchNotes` → `Directory_EntityDetailsActions.DataActionFetchNotes`
- `Directory_EntityDetailsActions.OnReady` → `Directory_EntityDetailsActions.onReady` → `Directory_EntityDetailsActions.action_RefreshFetchNotes` → `Directory_EntityDetailsActions.DataActionFetchNotes`
- `Directory_EntityDetailsActions fetch at start` → `Directory_EntityDetailsActions.DataActionFetchNotes`

### `UBTConnect/Directory_CommonBlocks/Directory_EntityDetailsActions/DataActionFetchContactDetails`
- `Directory_EntityDetailsActions.action_AsyncRefresh_ContactDetails` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `Directory_EntityDetailsActions fetch at start` → `Directory_EntityDetailsActions.DataActionFetchContactDetails`

### `UBTConnect/Directory_SupperMeetings/SupperMeeting_DetailsBlock/DataActionGetSubdivision`
- `SupperMeeting_DetailsBlock.OnReady` → `SupperMeeting_DetailsBlock.screenEvent_OnReady` → `SupperMeeting_DetailsBlock.DataActionGetSubdivision`
- `SupperMeeting_DetailsBlock fetch at start` → `SupperMeeting_DetailsBlock.DataActionGetSubdivision`

### `UBTConnect_Utils/ActionGetSignedImagesInBulk`
- `UBTConnect_Utils.cache_SignedImageURL_GetCallback` → `server GetSignedImagesInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote`
- `NotesSheet.handler_OnSubmitNote` → `server AddNote`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `ShareSheet.handler_OnClickExternalOption` → `server CS_CreateShareProfileLink`

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `ShareSheet.handler_OnClickRecentMember` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`
- `ShareSheet.handler_OnClickSend` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers`
- `ShareSheet.handler_InputEventSubmit` → `ShareSheet.DataActionGetAvailableMembers`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetAvailableMembers`

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared`
- `ShareSheet.OnParametersChanged` → `ShareSheet.screenEvent_OnParametersChanged` → `ShareSheet.DataActionGetRecentlyShared`
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetRecentlyShared`

### `UBTConnect/ServiceAPIAddBookmark2`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Bookmark of ActionsMenu` → `Directory_EntityDetailsActions.handle_Bookmark` → `UBTConnect.toggleBookmarkItem_C2` → `server AddBookmark2`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Unbookmark of ActionsMenu` → `Directory_EntityDetailsActions.handle_Bookmark` → `UBTConnect.toggleBookmarkItem_C2` → `server AddBookmark2`

### `UBTConnect/ServiceAPIDeleteBookmarkByBookmarkId2`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Bookmark of ActionsMenu` → `Directory_EntityDetailsActions.handle_Bookmark` → `UBTConnect.toggleBookmarkItem_C2` → `server DeleteBookmarkByBookmarkId2`
- `onClick in CircleButton_WithLabel` → `CircleButton_WithLabel.action_OnClick` → `event onClick of CircleButton_WithLabel` → `CircleButton_IconPrimary.circleButton_WithLabelOnClick` → `event onClick of CircleButton_IconPrimary` → `event event_Click_Unbookmark of ActionsMenu` → `Directory_EntityDetailsActions.handle_Bookmark` → `UBTConnect.toggleBookmarkItem_C2` → `server DeleteBookmarkByBookmarkId2`

### `UBTConnect_Utils/ActionCS_CreateShareProfileLink`
- `event event_Clicked of ContactPopup` → `SharePopup.onClick_CallButton` → `event event_ShareToOthers of SharePopup` → `Directory_EntityDetailsActions.handle_Share_Others` → `UBTConnect_Utils.shareEntity_ByURL` → `server CS_CreateShareProfileLink`

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `SharePopup.onClick_CallButton` → `event event_ShareToOthers of SharePopup` → `Directory_EntityDetailsActions.handle_Share_Others` → `UBTConnect_Utils.shareEntity_ByURL` → `Connect2_LegacyShared.auditShareEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

