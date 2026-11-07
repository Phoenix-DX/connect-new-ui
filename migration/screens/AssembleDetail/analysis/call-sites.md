# Call sites: AssembleDetail

For every service call: the chains of code that lead to it, from a root (user event, lifecycle handler, fetch at start, block event) down to the call. Built from compiled code only; conditions along a chain are not shown, read them in the files named.

## Observed in the capture (this screen)

### `UBTConnect/Legacy_AssembleFlow/AssembleDetail/DataActionGetAssembleNotes`
- `AssembleDetail fetch at start` → `AssembleDetail.DataActionGetAssembleNotes`

### `Connect2_Assemble_MUI/Assemble/AssembleEventDetail/DataActionGetAssembleEvent`
- `AssembleEventDetail.OnReady` → `AssembleEventDetail.onReady` → `AssembleEventDetail.DataActionGetAssembleEvent`
- `AssembleEventDetail fetch at start` → `AssembleEventDetail.DataActionGetAssembleEvent`

### `Connect2_LegacyShared/ActionGetMemberContactByCacheKey`
- `Connect2_LegacyShared.getMemberContactList` → `server GetMemberContactByCacheKey`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `Connect2_LegacyShared/ActionGetSignedPhotosInBulk`
- `Connect2_LegacyShared.getBulkSignedPhotosURL` → `server GetSignedPhotosInBulk`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

## Declared and reachable from the rendered blocks, not observed

### `UBTConnect_Utils/CW_Notes/NoteListActions/ServiceAPIUpdateNote`
- `event onSaveEditedNote of Note_Item_List` → `NoteListActions.handler_OnSaveEditedNote` → `server UpdateNote`

### `UBTConnect_Utils/CW_Notes/NoteListActions/ServiceAPIDeleteNoteByNoteId`
- `Note_Item_List.deleteButton_OnClick` → `event onDeleteRequested of Note_Item_List` → `NoteListActions.handler_OnDeleteNoteRequested` → `server DeleteNoteByNoteId`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_CreateShareProfileLink`
- `ShareSheet.handler_OnClickExternalOption` → `server CS_CreateShareProfileLink`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/ActionCS_ShareObject`
- `ShareSheet.handler_OnClickRecentMember` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ShareSheet.handler_OnClickSend` → `ShareSheet.action_SubmitShare` → `server CS_ShareObject`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetAvailableMembers`
- `ShareSheet.handler_InputEventSubmit` → `ShareSheet.DataActionGetAvailableMembers`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetAvailableMembers`

### `UBTConnect_Utils/CW_Share/ShareSheet/DataActionGetRecentlyShared`
- `ShareSheet.OnParametersChanged` → `ShareSheet.screenEvent_OnParametersChanged` → `ShareSheet.DataActionGetRecentlyShared`
- `ShareSheet fetch at start` → `ShareSheet.DataActionGetRecentlyShared`

### `UBTConnect_Utils/CW_Notes/NotesSheet/ServiceAPIAddNote`
- `NotesSheet.handler_OnSubmitNote` → `server AddNote`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All`
- `BottomBarMenu.OnReady` → `BottomBarMenu.onReady` → `UBTConnect.directory_Updates_RefreshBottomBarCount` → `server Get_UI_UpdateItems_UnreadCount_All`

### `UBT_AppManager/ActionAppManager_SynchAppContext`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `UBT_AppManager.azureInsights_CreateCustomEvent` → `UBT_AppManager.appManager_CheckAppContext` → `UBT_AppManager.appManager_GetConfiguration` → `UBT_AppManager.appManager_SynchAppContext` → `UBT_AppManager.appManager_SynchAppContextInternal` → `server AppManager_SynchAppContext`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

### `UBTConnect_Utils/ActionCS_CreateShareProfileLink`
- `event navigateTo_ShareObject of AssembleEventDetail_LocalitySubdivisionList` → `event navigateTo_ShareObject of AssembleEventDetail_LocalitiesList` → `event navigateTo_ShareObject of AssembleEventDetail` → `event navigateTo_ShareObject of ScreenBlock_AssembleDetail` → `AssembleDetail.handler_NavigateTo_ShareObject` → `UBTConnect_Utils.shareEntity_ByURL` → `server CS_CreateShareProfileLink`

### `Connect2_LegacyShared/ActionGetAllApplicationEvents`
- `HandleImageLoadError.applicationEvent_ImageError` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)
- `NC_Result_Item__Image.onClick_Result_Item` → `event onClick_Item of NC_Result_Item__Image` → `AssembleEventDetail_Contact.handler_OnClickHostContact` → `Connect2_Assemble_MUI.hasAccessToRegion` → `Connect2_Assemble_MUI.auditSubscriptionEvent` → `Connect2_LegacyShared.zOnApplicationEvent_Wrapper` → `Connect2_LegacyShared.getAppEventName` → `Connect2_LegacyShared.cacheLocalApplicationEvents` → `server GetAllApplicationEvents`  ⚠ chain stops: no caller in captured code (JavaScript node, runtime callback or uncaptured module)

