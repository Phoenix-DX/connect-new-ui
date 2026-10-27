# React code index of UI flow App_Notifications

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen NotificationDetails
- **not built**: no folder `app/src/pages/NotificationDetails` (check the board for the decision)

## Screen Notifications
- route: `/UBTConnect/Notifications` inputs=[]; meta: `{ flag: 'C2NewNotifications', when: false, to: 'MessageList' }`
- page files:
  - `app/src/pages/Notifications/NotificationsPage.tsx` (181 lines)
  - `app/src/pages/Notifications/components/Layout_MainPages_Upgrade.tsx` (132 lines)
  - `app/src/pages/Notifications/components/MoreActionSheet.tsx` (163 lines)
  - `app/src/pages/Notifications/components/Notification_ListItem.tsx` (102 lines)
  - `app/src/pages/Notifications/components/NotificationsList.tsx` (62 lines)
  - `app/src/pages/Notifications/components/NotificationsListBreakpoints.tsx` (48 lines)
  - `app/src/pages/Notifications/components/Notifications_Action.tsx` (115 lines)
  - `app/src/pages/Notifications/components/Notifications_Header.tsx` (60 lines)
  - `app/src/pages/Notifications/components/SortSheet.tsx` (173 lines)
  - `app/src/pages/Notifications/components/actions.ts` (35 lines)
  - `app/src/pages/Notifications/components/staticEntities.ts` (23 lines)
  - `app/src/pages/Notifications/hooks/notificationsState.ts` (248 lines)
  - `app/src/pages/Notifications/hooks/useNotifications.ts` (199 lines)
  - `app/src/pages/Notifications/mocks.ts` (82 lines)
- tests: `app/src/pages/Notifications/Notifications.test.tsx`, `app/src/pages/Notifications/hooks/notificationsState.test.ts`, `app/src/pages/Notifications/hooks/useNotifications.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: `api/client/callAction.ts` (167, d2); +2 deeper
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/notification**: 5 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/filter**: `components/filter/FilterOptionChoice/index.ts` (2, d1), `components/filter/FilterOptionChoice/FilterOptionChoice.tsx` (75, d2), `components/filter/FilterOptionChoice/types.ts` (1, d2)
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2); +6 deeper
  - **components/ui**: `components/ui/Badge/index.ts` (1, d1), `components/ui/Button/index.ts` (2, d1), `components/ui/ColumnsTwo/index.ts` (2, d1), `components/ui/ConnectBottomSheet/index.ts` (2, d1), `components/ui/CustomContainer/index.ts` (2, d1), `components/ui/IconText/index.ts` (2, d1), `components/ui/Input/index.ts` (2, d1), `components/ui/Skeleton/index.ts` (1, d1), `components/ui/lib/actions.ts` (307, d1), `components/ui/Badge/Badge.tsx` (50, d2), `components/ui/Button/Button.tsx` (51, d2), `components/ui/Button/types.ts` (1, d2), `components/ui/ColumnsTwo/ColumnsTwo.tsx` (54, d2), `components/ui/ColumnsTwo/types.ts` (1, d2), `components/ui/ConnectBottomSheet/ConnectBottomSheet.tsx` (220, d2), `components/ui/ConnectBottomSheet/types.ts` (1, d2), `components/ui/CustomContainer/CustomContainer.tsx` (55, d2), `components/ui/CustomContainer/types.ts` (11, d2), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2) … +4; +35 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d2), `legacy/os/os-exceptions.ts` (205, d2); +4 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: `lib/osDateTime.ts` (67, d1)
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d2), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2); +2 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/flowErrors.ts` (17, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +12 deeper
  - **platform/flags**: 7 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/BackNavigationHandler/index.ts` (2, d1), `platform/navigation/BackNavigationHandler/BackNavigationHandler.tsx` (28, d2), `platform/navigation/BackNavigationHandler/types.ts` (1, d2), `platform/navigation/ScrollAnchor/index.ts` (1, d2); +12 deeper
  - **platform/session**: `platform/session/userInfo.ts` (46, d2); +14 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Action_UI_UpdateItem_MarkAllAsRead | 3 | `api/update/repository.ts:55`<br>`api/schema.d.ts:2158`<br>`api/openapi.yaml:4432` |
| Action_UI_UpdateItem_MarkAsRead | 3 | `api/update/repository.ts:44`<br>`api/schema.d.ts:2175`<br>`api/openapi.yaml:4465` |
| Action_UI_UpdateItem_MarkAsUnread | 3 | `api/update/repository.ts:50`<br>`api/schema.d.ts:2192`<br>`api/openapi.yaml:4499` |
| App_CommonFilter_CheckCountry | 1 | `lib/ubtConnect/actions.ts:136` |
| App_CommonFilter_DefineOptionNames | 1 | `lib/ubtConnect/actions.ts:122` |
| App_Notifications_AugmentDateRanges | 2 | `pages/Notifications/hooks/notificationsState.ts:69`<br>`pages/Notifications/hooks/notificationsState.ts:197` |
| App_Notifications_GetBreakpoints | 1 | `pages/Notifications/hooks/notificationsState.ts:215` |
| Delete_Notifications | 0 | - |
| Directory_Updates_GetListBreakpoint | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:224` |
| Directory_Updates_GetUpdatedBreakpoints | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:247` |
| Directory_Updates_MarkAllAsRead | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:269` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetSkeletonList_UI_Notification | 0 | - |
| GetSkeleton_UI_NotificationContent | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_UI_NotificationDetails | 0 | - |
| Get_UI_Notifications | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
| ListAppendAll | 7 | `lib/ubtConnect/actions.ts:461`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:26`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:96`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:237`<br>`pages/Locality_Details/hooks/useLocalitySubdivisions.ts:36`<br>`pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:35` |
| ListFilter | 13 | `components/assemble/AssembleSubdivisionFilter/AssembleSubdivisionFilter.tsx:32`<br>`lib/assemble/actions.ts:112`<br>`lib/legacyShared/actions.ts:438`<br>`pages/AcceptPendingPolicies/hooks/usePendingPoliciesForm.ts:117`<br>`pages/Profile/hooks/profileState.ts:111`<br>`pages/HomeFeed/hooks/useFeedUpdates.ts:89` |
| MarkAllAsReadNotifications | 0 | - |
| MarkAsRead | 8 | `mocks/modules/UBTConnect/Directory_Updates/mocks.ts:39`<br>`mocks/modules/UBTConnect/Directory_Updates/mocks.ts:64`<br>`pages/HomeFeed/mocks.ts:18`<br>`pages/HomeFeed/hooks/feedUpdatesState.ts:7`<br>`pages/HomeFeed/hooks/useFeedUpdates.ts:13`<br>`pages/HomeFeed/hooks/useFeedUpdates.ts:47` |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| ScrollTop | 6 | `lib/ubtConnect/actions.ts:73`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:149`<br>`pages/Notes/hooks/useNotes.ts:29`<br>`pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts:73`<br>`pages/Notifications/hooks/useNotifications.ts:143`<br>`pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:207` |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| ToggleRead | 0 | - |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Notifications/mocks.ts`).

- Action_UI_UpdateItem_MarkAllAsRead: **no mock handler found**
- Action_UI_UpdateItem_MarkAsRead: **no mock handler found**
- Action_UI_UpdateItem_MarkAsUnread: **no mock handler found**
- Delete_Notifications: **no mock handler found**
- Get_UI_NotificationDetails: **no mock handler found**
- Get_UI_Notifications: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- ListAppendAll: **no mock handler found**
- ListFilter: **no mock handler found**
- MarkAllAsReadNotifications: **no mock handler found**
- MarkAsRead: `mocks/modules/UBTConnect/Directory_Updates/mocks.ts:39`, `mocks/modules/UBTConnect/Directory_Updates/mocks.ts:64`
- ToggleRead: **no mock handler found**
