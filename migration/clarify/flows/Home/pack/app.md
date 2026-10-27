# React code index of UI flow Home

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen FeedItemDetail
- route: `/UBTConnect/FeedItemDetail` inputs=["FeedItemId: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/FeedItemDetail/FeedItemDetailPage.tsx` (49 lines)
  - `app/src/pages/FeedItemDetail/hooks/useFeedItemDetail.ts` (61 lines)
  - `app/src/pages/FeedItemDetail/inputs.ts` (12 lines)
- tests: `app/src/pages/FeedItemDetail/FeedItemDetail.test.tsx`, `app/src/pages/FeedItemDetail/hooks/useFeedItemDetail.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 3 files at depth 3-4
  - **api/feed**: `api/feed/index.ts` (4, d2); +4 deeper
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/share**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/feed**: `components/feed/EmbeddedFeed/index.ts` (1, d1), `components/feed/EmbeddedFeed/EmbeddedFeed.tsx` (121, d2); +2 deeper
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +2 deeper
  - **components/search**: 1 files at depth 3-4
  - **components/share**: `components/share/ShareableObject/index.ts` (2, d1), `components/share/ShareableObject/ShareableObject.tsx` (99, d2), `components/share/ShareableObject/types.ts` (1, d2); +5 deeper
  - **components/ui**: 30 files at depth 3-4
  - **containers/ShareSheet**: `containers/ShareSheet/index.ts` (2, d1), `containers/ShareSheet/ShareSheetContainer.tsx` (161, d2), `containers/ShareSheet/types.ts` (29, d2); +5 deeper
  - **legacy/os**: 3 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/staticEntities.ts` (205, d1)
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/staticEntities.ts` (190, d1), `lib/ubtConnectUtils/actions.ts` (383, d2); +1 deeper
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 21 files at depth 3-4
  - **platform/flags**: 7 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +19 deeper
  - **platform/session**: `platform/session/useEmbeddedFeed.ts` (59, d1), `platform/session/session.ts` (295, d2); +7 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: 1 files at depth 3-4

## Screen HomeFeed
- route: `/UBTConnect/HomeFeed` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/HomeFeed/HomeFeedPage.tsx` (226 lines)
  - `app/src/pages/HomeFeed/components/AppLogo_White.tsx` (13 lines)
  - `app/src/pages/HomeFeed/components/Dialog_GoExternalApp.tsx` (132 lines)
  - `app/src/pages/HomeFeed/components/FeedBlock_Services.tsx` (197 lines)
  - `app/src/pages/HomeFeed/components/FeedBlock_Updates.tsx` (132 lines)
  - `app/src/pages/HomeFeed/components/Section.tsx` (50 lines)
  - `app/src/pages/HomeFeed/components/Section_FeedWrapper.tsx` (106 lines)
  - `app/src/pages/HomeFeed/hooks/feedServicesState.ts` (32 lines)
  - `app/src/pages/HomeFeed/hooks/feedUpdatesState.ts` (50 lines)
  - `app/src/pages/HomeFeed/hooks/goToExternalApp.ts` (25 lines)
  - `app/src/pages/HomeFeed/hooks/useFeedServices.ts` (157 lines)
  - `app/src/pages/HomeFeed/hooks/useFeedUpdates.ts` (130 lines)
  - `app/src/pages/HomeFeed/mocks.ts` (35 lines)
  - `app/src/pages/HomeFeed/staticEntities.ts` (31 lines)
- tests: `app/src/pages/HomeFeed/HomeFeed.test.tsx`, `app/src/pages/HomeFeed/components/Dialog_GoExternalApp.test.tsx`, `app/src/pages/HomeFeed/components/FeedBlock_Services.test.tsx`, `app/src/pages/HomeFeed/components/FeedBlock_Updates.test.tsx`, `app/src/pages/HomeFeed/hooks/feedServicesState.test.ts`, `app/src/pages/HomeFeed/hooks/feedUpdatesState.test.ts`, `app/src/pages/HomeFeed/hooks/useFeedServices.test.tsx`, `app/src/pages/HomeFeed/hooks/useFeedUpdates.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: 3 files at depth 3-4
  - **api/feed**: `api/feed/index.ts` (4, d2); +4 deeper
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/service**: `api/service/index.ts` (4, d2); +5 deeper
  - **api/share**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/feed**: `components/feed/CommunityPopulation/index.ts` (1, d1), `components/feed/EmbeddedFeed/index.ts` (1, d1), `components/feed/UpdateListItem/index.ts` (2, d1), `components/feed/CommunityPopulation/CommunityPopulation.tsx` (58, d2), `components/feed/EmbeddedFeed/EmbeddedFeed.tsx` (121, d2), `components/feed/UpdateListItem/UpdateListItem.tsx` (243, d2), `components/feed/UpdateListItem/types.ts` (1, d2); +2 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/HomeLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/HomeLayout/HomeLayout.tsx` (211, d2); +8 deeper
  - **components/notification**: `components/notification/NotificationIcon/index.ts` (1, d1), `components/notification/NotificationIcon/NotificationIcon.tsx` (45, d2); +2 deeper
  - **components/search**: 1 files at depth 3-4
  - **components/share**: `components/share/ShareableObject/index.ts` (2, d1), `components/share/ShareableObject/ShareableObject.tsx` (99, d2), `components/share/ShareableObject/types.ts` (1, d2); +5 deeper
  - **components/ui**: `components/ui/Carousel/index.ts` (2, d1), `components/ui/CircleButtonWithLabel/index.ts` (2, d1), `components/ui/Gallery/index.ts` (1, d1), `components/ui/Icon/index.ts` (1, d1), `components/ui/IconText/index.ts` (2, d1), `components/ui/Skeleton/index.ts` (1, d1), `components/ui/Carousel/Carousel.tsx` (125, d2), `components/ui/Carousel/types.ts` (1, d2), `components/ui/CircleButton/index.ts` (1, d2), `components/ui/CircleButtonWithLabel/CircleButtonWithLabel.tsx` (73, d2), `components/ui/CircleButtonWithLabel/types.ts` (1, d2), `components/ui/Dialog/index.ts` (10, d2), `components/ui/Gallery/Gallery.tsx` (67, d2), `components/ui/Icon/Icon.tsx` (47, d2), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2), `components/ui/Skeleton/Skeleton.tsx` (40, d2); +56 deeper
  - **components/version**: 2 files at depth 3-4
  - **containers/ShareSheet**: `containers/ShareSheet/index.ts` (2, d1), `containers/ShareSheet/ShareSheetContainer.tsx` (161, d2), `containers/ShareSheet/types.ts` (29, d2); +5 deeper
  - **legacy/os**: 5 files at depth 3-4
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d2), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2), `lib/ubtConnectLibrary/staticEntities.ts` (314, d2); +1 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d2)
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/modules**: `mocks/modules/UBTConnect/Directory_Updates/mocks.ts` (74, d1)
  - **mocks/scenario.ts**: 1 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d2)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +12 deeper
  - **platform/flags**: `platform/flags/flags.ts` (19, d1); +7 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 11 files at depth 3-4
  - **platform/session**: `platform/session/useEmbeddedFeed.ts` (59, d1), `platform/session/useNotificationIcon.ts` (47, d1), `platform/session/userInfo.ts` (46, d2); +13 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Action_UI_UpdateItem_MarkAsRead | 3 | `api/update/repository.ts:44`<br>`api/schema.d.ts:2175`<br>`api/openapi.yaml:4465` |
| Action_UI_UpdateItem_MarkAsUnread | 3 | `api/update/repository.ts:50`<br>`api/schema.d.ts:2192`<br>`api/openapi.yaml:4499` |
| Directory_Updates_GetCarouselPreloadedHouseholds | 3 | `lib/ubtConnect/structures.ts:20`<br>`lib/ubtConnect/actions.ts:92`<br>`pages/HomeFeed/hooks/useFeedUpdates.ts:89` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetExternalLinks_ElGusto | 0 | - |
| GetExternalPackages_CommunityTradelink | 0 | - |
| GetExternalPackages_HR100 | 0 | - |
| GetExternalPackages_Trove | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_UI_CommunityNumbers | 0 | - |
| Get_UI_MembersStatistics | 0 | - |
| Get_UI_UpdateItemsForHomePage | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| ScrollTop | 6 | `lib/ubtConnect/actions.ts:73`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:149`<br>`pages/Notes/hooks/useNotes.ts:29`<br>`pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts:73`<br>`pages/Notifications/hooks/useNotifications.ts:143`<br>`pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:207` |
| Service_ConnectServices_GetByUser | 0 | - |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/HomeFeed/mocks.ts`).

- Action_UI_UpdateItem_MarkAsRead: `app/src/pages/HomeFeed/mocks.ts`
- Action_UI_UpdateItem_MarkAsUnread: `app/src/pages/HomeFeed/mocks.ts`
- GetExternalLinks_ElGusto: **no mock handler found**
- GetExternalPackages_CommunityTradelink: **no mock handler found**
- GetExternalPackages_HR100: **no mock handler found**
- GetExternalPackages_Trove: **no mock handler found**
- Get_UI_CommunityNumbers: **no mock handler found**
- Get_UI_MembersStatistics: **no mock handler found**
- Get_UI_UpdateItemsForHomePage: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- Service_ConnectServices_GetByUser: **no mock handler found**
