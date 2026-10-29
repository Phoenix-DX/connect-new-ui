# React code index of UI flow Legacy_MyNotificationsFlow

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen MessageDetail
- route: `/UBTConnect/MessageDetail` inputs=["MessageInstanceId: LongInteger", "isOriginPushNotification: Boolean", "MessageTemplateId: LongInteger", "HardwareId: Text"]; meta: `{ access: 'anonymous', lock: 'enforce' }`
- page files:
  - `app/src/pages/MessageDetail/MessageDetailPage.tsx` (63 lines)
  - `app/src/pages/MessageDetail/components/MessageDetailView.tsx` (86 lines)
  - `app/src/pages/MessageDetail/components/NotificationDetailBlock.tsx` (174 lines)
  - `app/src/pages/MessageDetail/hooks/messageDetailState.ts` (130 lines)
  - `app/src/pages/MessageDetail/hooks/useMessageDetail.ts` (189 lines)
  - `app/src/pages/MessageDetail/inputs.ts` (30 lines)
  - `app/src/pages/MessageDetail/mocks.ts` (159 lines)
  - `app/src/pages/MessageDetail/staticEntities.ts` (22 lines)
- tests: `app/src/pages/MessageDetail/MessageDetail.test.tsx`, `app/src/pages/MessageDetail/components/MessageDetailView.test.tsx`, `app/src/pages/MessageDetail/components/NotificationDetailBlock.test.tsx`, `app/src/pages/MessageDetail/hooks/messageDetailState.test.ts`, `app/src/pages/MessageDetail/hooks/useMessageDetail.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 2 files at depth 3-4
  - **api/client**: 2 files at depth 3-4
  - **api/country**: 1 files at depth 3-4
  - **api/image**: `api/image/index.ts` (2, d2); +2 deeper
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: `api/member/index.ts` (18, d2); +6 deeper
  - **api/message**: `api/message/index.ts` (45, d2); +6 deeper
  - **api/notification**: `api/notification/index.ts` (15, d1), `api/notification/hooks.ts` (63, d2), `api/notification/keys.ts` (9, d2), `api/notification/repository.ts` (59, d2), `api/notification/types.ts` (103, d2); +1 deeper
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIconBack/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIconBack/MenuIconBack.tsx` (25, d2); +8 deeper
  - **components/ui**: `components/ui/Card/index.ts` (1, d1), `components/ui/SanitizedHtml/index.ts` (1, d1), `components/ui/Spinner/index.ts` (1, d1), `components/ui/Card/Card.tsx` (29, d2), `components/ui/SanitizedHtml/SanitizedHtml.tsx` (75, d2), `components/ui/Spinner/Spinner.tsx` (23, d2), `components/ui/lib/actions.ts` (307, d2); +12 deeper
  - **legacy/os**: 3 files at depth 3-4
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d2)
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/legacyShared**: 3 files at depth 3-4
  - **lib/os-assets.manifest.json**: `lib/os-assets.manifest.json` (78, d2)
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d1)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: `lib/osDateTime.ts` (67, d1)
  - **lib/sanitizeHtml.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 3 files at depth 3-4
  - **lib/ubtConnectLibrary**: 2 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d1), `lib/ubtConnectUtils/staticEntities.ts` (190, d1), `lib/ubtConnectUtils/structures.ts` (86, d2)
  - **mocks/fictional**: `mocks/fictional/content.ts` (29, d1); +1 deeper
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/index.ts` (27, d2), `platform/feedback/pageRedirect.ts` (5, d2); +20 deeper
  - **platform/flags**: `platform/flags/index.ts` (9, d2); +8 deeper
  - **platform/log**: `platform/log/log.ts` (56, d2)
  - **platform/navigation**: `platform/navigation/BackNavigationHandler/index.ts` (2, d1), `platform/navigation/BackNavigationHandler/BackNavigationHandler.tsx` (28, d2), `platform/navigation/BackNavigationHandler/types.ts` (1, d2); +20 deeper
  - **platform/session**: `platform/session/unreadCounters.ts` (13, d1), `platform/session/userInfo.ts` (46, d1), `platform/session/mockUser.ts` (118, d2), `platform/session/session.ts` (295, d2); +8 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: 2 files at depth 3-4

## Screen MessageList
- route: `/UBTConnect/MessageList` inputs=[]; meta: `{ access: 'anonymous', lock: 'enforce' }`
- page files:
  - `app/src/pages/MessageList/MessageListPage.tsx` (48 lines)
  - `app/src/pages/MessageList/components/CircledCheckbox.tsx` (23 lines)
  - `app/src/pages/MessageList/components/MessageFilterGroup.tsx` (34 lines)
  - `app/src/pages/MessageList/components/MessageFilterItem.tsx` (30 lines)
  - `app/src/pages/MessageList/components/MessageListBlock.tsx` (130 lines)
  - `app/src/pages/MessageList/components/MessageListFilter.tsx` (109 lines)
  - `app/src/pages/MessageList/components/MessageListItem.tsx` (147 lines)
  - `app/src/pages/MessageList/components/MessageListNoNotificationsBanner.tsx` (20 lines)
  - `app/src/pages/MessageList/components/MessageListView.tsx` (317 lines)
  - `app/src/pages/MessageList/components/MessageSearchHistory.tsx` (85 lines)
  - `app/src/pages/MessageList/components/TwoButtonsAligned.tsx` (24 lines)
  - `app/src/pages/MessageList/components/WarningPrivateMessage.tsx` (39 lines)
  - `app/src/pages/MessageList/components/textEllipsis.ts` (4 lines)
  - `app/src/pages/MessageList/hooks/messageListState.ts` (209 lines)
  - `app/src/pages/MessageList/hooks/unreadNotifications.ts` (8 lines)
  - `app/src/pages/MessageList/hooks/useMessageList.ts` (345 lines)
  - `app/src/pages/MessageList/mocks.ts` (108 lines)
  - `app/src/pages/MessageList/staticEntities.ts` (21 lines)
  - `app/src/pages/MessageList/types.ts` (17 lines)
- tests: `app/src/pages/MessageList/MessageList.test.tsx`, `app/src/pages/MessageList/components/MessageListView.test.tsx`, `app/src/pages/MessageList/components/textEllipsis.test.ts`, `app/src/pages/MessageList/hooks/messageListState.test.ts`, `app/src/pages/MessageList/hooks/unreadNotifications.test.ts`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/app**: `api/app/index.ts` (11, d2); +5 deeper
  - **api/bookmark**: 1 files at depth 3-4
  - **api/client**: 2 files at depth 3-4
  - **api/message**: `api/message/index.ts` (45, d2); +6 deeper
  - **api/notification**: `api/notification/index.ts` (15, d1), `api/notification/hooks.ts` (63, d2), `api/notification/keys.ts` (9, d2), `api/notification/repository.ts` (59, d2), `api/notification/types.ts` (103, d2); +1 deeper
  - **api/update**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/index.ts` (1, d2), `components/layout/MenuIcon/index.ts` (1, d2), `components/layout/MenuIconBack/index.ts` (1, d2); +9 deeper
  - **components/ui**: `components/ui/Animate/index.ts` (1, d2), `components/ui/InputWithIcon/index.ts` (1, d2), `components/ui/MessageListNoResults/index.ts` (1, d2), `components/ui/Spinner/index.ts` (1, d2); +21 deeper
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d2), `legacy/os/os-exceptions.ts` (205, d2); +3 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/legacyShared**: `lib/legacyShared/staticEntities.ts` (38, d2); +1 deeper
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 3 files at depth 3-4
  - **lib/ubtConnectLibrary**: 2 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/bootstrap**: `platform/bootstrap/startup.ts` (105, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/flowErrors.ts` (17, d1); +20 deeper
  - **platform/log**: `platform/log/log.ts` (56, d2)
  - **platform/navigation**: `platform/navigation/BackNavigationHandler/index.ts` (2, d1), `platform/navigation/BackNavigationHandler/BackNavigationHandler.tsx` (28, d2), `platform/navigation/BackNavigationHandler/types.ts` (1, d2); +11 deeper
  - **platform/session**: `platform/session/unreadCounters.ts` (13, d1), `platform/session/session.ts` (295, d2); +8 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: 10 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| ScrollTop | 6 | `lib/ubtConnect/actions.ts:73`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:149`<br>`pages/Notes/hooks/useNotes.ts:29`<br>`pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts:73`<br>`pages/Notifications/hooks/useNotifications.ts:143`<br>`pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:207` |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/MessageDetail/mocks.ts`, `app/src/pages/MessageList/mocks.ts`).

- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
