# React code index of UI flow Directory_Updates

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Updates_SingleList
- route: `/UBTConnect/Updates_SingleList` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/Updates_SingleList/Updates_SingleListPage.tsx` (237 lines)
  - `app/src/pages/Updates_SingleList/components/Directory_Updates_FilterSheet.tsx` (92 lines)
  - `app/src/pages/Updates_SingleList/components/SectionHeader.tsx` (137 lines)
  - `app/src/pages/Updates_SingleList/components/UpdateItem_Header.tsx` (105 lines)
  - `app/src/pages/Updates_SingleList/components/UpdatesList.tsx` (119 lines)
  - `app/src/pages/Updates_SingleList/components/staticEntities.ts` (13 lines)
  - `app/src/pages/Updates_SingleList/hooks/updatesSingleListFlows.ts` (52 lines)
  - `app/src/pages/Updates_SingleList/hooks/updatesSingleListState.ts` (314 lines)
  - `app/src/pages/Updates_SingleList/hooks/useUpdatesSingleList.ts` (362 lines)
  - `app/src/pages/Updates_SingleList/mocks.ts` (161 lines)
- tests: `app/src/pages/Updates_SingleList/Updates_SingleList.test.tsx`, `app/src/pages/Updates_SingleList/components/UpdatesList.test.tsx`, `app/src/pages/Updates_SingleList/hooks/updatesSingleListState.test.ts`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: `api/client/callAction.ts` (167, d2); +2 deeper
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/share**: 1 files at depth 3-4
  - **api/update**: 5 files at depth 3-4
  - **components/feed**: `components/feed/UpdateListItem/index.ts` (2, d1), `components/feed/UpdateListItem/UpdateListItem.tsx` (243, d2), `components/feed/UpdateListItem/types.ts` (1, d2)
  - **components/filter**: `components/filter/FilterSheetIcon/index.ts` (1, d1), `components/filter/FilterSheetIcon/FilterSheetIcon.tsx` (57, d2); +3 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/MainLayoutFixedTitle/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/MainLayoutFixedTitle/MainLayoutFixedTitle.tsx` (166, d2); +6 deeper
  - **components/notification**: `components/notification/NotificationIcon/index.ts` (1, d1), `components/notification/NotificationIcon/NotificationIcon.tsx` (45, d2); +2 deeper
  - **components/search**: 1 files at depth 3-4
  - **components/share**: 2 files at depth 3-4
  - **components/ui**: `components/ui/HorizontalTagList/index.ts` (2, d1), `components/ui/Input/index.ts` (2, d1), `components/ui/os/OSList/index.ts` (2, d1), `components/ui/HorizontalTagList/HorizontalTagList.tsx` (84, d2), `components/ui/HorizontalTagList/types.ts` (1, d2), `components/ui/Input/Input.tsx` (221, d2), `components/ui/Input/types.ts` (1, d2), `components/ui/os/OSList/OSList.tsx` (232, d2), `components/ui/os/OSList/OSListItem.tsx` (129, d2); +62 deeper
  - **containers/FilterSheet**: `containers/FilterSheet/index.ts` (1, d1), `containers/FilterSheet/FilterSheetContainer.tsx` (72, d2)
  - **containers/ShareSheet**: `containers/ShareSheet/index.ts` (2, d1), `containers/ShareSheet/ShareSheetContainer.tsx` (161, d2), `containers/ShareSheet/types.ts` (29, d2); +5 deeper
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d1), `legacy/os/os-exceptions.ts` (205, d2), `legacy/os/reviewMarkers.ts` (19, d2); +7 deeper
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2), `lib/ubtConnectLibrary/structures.ts` (335, d2); +1 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/NotCaptured.tsx` (15, d1); +20 deeper
  - **platform/flags**: `platform/flags/flags.ts` (19, d1); +7 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/ScrollAnchor/index.ts` (1, d1), `platform/navigation/ScrollAnchor/ScrollAnchor.tsx` (20, d2), `platform/navigation/osNavigate.ts` (155, d2), `platform/navigation/screenTransition.ts` (179, d2); +12 deeper
  - **platform/session**: `platform/session/useNotificationIcon.ts` (47, d1), `platform/session/resume.ts` (34, d2), `platform/session/userInfo.ts` (46, d2); +12 deeper
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
| Directory_Updates_AugmentDateRanges | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:179` |
| Directory_Updates_GetBreakpoints | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:203` |
| Directory_Updates_GetCarouselPreloadedHouseholds | 3 | `lib/ubtConnect/structures.ts:20`<br>`lib/ubtConnect/actions.ts:92`<br>`pages/HomeFeed/hooks/useFeedUpdates.ts:89` |
| Directory_Updates_GetListBreakpoint | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:224` |
| Directory_Updates_GetUpdatedBreakpoints | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:247` |
| Directory_Updates_MarkAllAsRead | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:269` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetSkeletonList_UI_Updates | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:290` |
| GetSkeleton_UI_UpdatesContent | 1 | `pages/Updates_SingleList/hooks/updatesSingleListState.ts:273` |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_UI_UpdateItems | 0 | - |
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

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Updates_SingleList/mocks.ts`).

- Action_UI_UpdateItem_MarkAllAsRead: `app/src/pages/Updates_SingleList/mocks.ts`
- Action_UI_UpdateItem_MarkAsRead: **no mock handler found**
- Action_UI_UpdateItem_MarkAsUnread: **no mock handler found**
- Get_UI_UpdateItems: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
