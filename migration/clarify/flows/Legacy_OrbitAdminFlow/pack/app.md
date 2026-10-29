# React code index of UI flow Legacy_OrbitAdminFlow

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen OrbitAdminEventDetail
- route: `/UBTConnect/OrbitAdminEventDetail` inputs=["In_EventId: LongInteger", "In_EventName: Text", "In_EventStartDate: DateTime", "In_EventEndDate: DateTime", "In_EventLocation: Text", "In_EventTypeFriendly: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetailPage.tsx` (32 lines)
  - `app/src/pages/OrbitAdminEventDetail/components/AdminEventDetailView.tsx` (163 lines)
  - `app/src/pages/OrbitAdminEventDetail/components/AdminPopup.tsx` (49 lines)
  - `app/src/pages/OrbitAdminEventDetail/components/OrbitErrorMessage.tsx` (62 lines)
  - `app/src/pages/OrbitAdminEventDetail/components/Popup_QRCodeScan.tsx` (122 lines)
  - `app/src/pages/OrbitAdminEventDetail/components/actions.ts` (44 lines)
  - `app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailActions.ts` (58 lines)
  - `app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailState.ts` (104 lines)
  - `app/src/pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.ts` (245 lines)
  - `app/src/pages/OrbitAdminEventDetail/inputs.ts` (33 lines)
  - `app/src/pages/OrbitAdminEventDetail/mocks.ts` (112 lines)
  - `app/src/pages/OrbitAdminEventDetail/staticEntities.ts` (15 lines)
- tests: `app/src/pages/OrbitAdminEventDetail/OrbitAdminEventDetail.test.tsx`, `app/src/pages/OrbitAdminEventDetail/components/AdminEventDetailView.test.tsx`, `app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailActions.test.ts`, `app/src/pages/OrbitAdminEventDetail/hooks/adminEventDetailState.test.ts`, `app/src/pages/OrbitAdminEventDetail/hooks/useAdminEventDetail.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 2 files at depth 3-4
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/event**: `api/event/index.ts` (65, d2); +5 deeper
  - **api/image**: `api/image/index.ts` (2, d2); +2 deeper
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: `api/member/index.ts` (18, d2); +6 deeper
  - **api/message**: 1 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/OrbitLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2), `components/layout/OrbitLayout/OrbitLayout.tsx` (91, d2); +8 deeper
  - **components/orbit**: `components/orbit/OrbitNoInformation/index.ts` (1, d1), `components/orbit/OrbitSkeleton/index.ts` (1, d1), `components/orbit/OrbitNoInformation/OrbitNoInformation.tsx` (29, d2), `components/orbit/OrbitSkeleton/OrbitSkeleton.tsx` (157, d2)
  - **components/ui**: `components/ui/os/OSBlock.tsx` (10, d1), `components/ui/os/OSList/index.ts` (2, d1), `components/ui/lib/actions.ts` (307, d2), `components/ui/os/OSList/OSList.tsx` (232, d2), `components/ui/os/OSList/OSListItem.tsx` (129, d2), `components/ui/os/OSPopup/index.ts` (1, d2); +14 deeper
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d2), `legacy/os/os-exceptions.ts` (205, d2); +2 deeper
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d2)
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/legacyShared**: 3 files at depth 3-4
  - **lib/orbit**: `lib/orbit/actions.ts` (330, d1), `lib/orbit/staticEntities.ts` (95, d1); +1 deeper
  - **lib/os-assets.manifest.json**: `lib/os-assets.manifest.json` (78, d2)
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d1)
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: `lib/osDateTime.ts` (67, d2)
  - **lib/ubtConnect**: 3 files at depth 3-4
  - **lib/ubtConnectLibrary**: 2 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d1), `lib/ubtConnectUtils/staticEntities.ts` (190, d2), `lib/ubtConnectUtils/structures.ts` (86, d2)
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/orbitAdmin.ts` (200, d1), `mocks/fictional/orbit.ts` (1446, d2); +1 deeper
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d1)
  - **mocks/scenarioParams.ts**: `mocks/scenarioParams.ts` (17, d2)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: `platform/device/barcodePlugin.ts` (54, d1), `platform/device/barcodePluginTypes.ts` (96, d2), `platform/device/webBarcodeScanner.ts` (212, d2); +3 deeper
  - **platform/feedback**: `platform/feedback/flowErrors.ts` (17, d1), `platform/feedback/index.ts` (27, d2), `platform/feedback/pageRedirect.ts` (5, d2); +20 deeper
  - **platform/flags**: `platform/flags/index.ts` (9, d2); +9 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 23 files at depth 3-4
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/session.ts` (295, d2); +11 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/orbitStaticEntities.ts` (715, d2); +4 deeper
  - **vendor**: 1 files at depth 3-4

## Screen OrbitAdminLanding
- route: `/UBTConnect/OrbitAdminLanding` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/OrbitAdminLanding/OrbitAdminLandingPage.tsx` (30 lines)
  - `app/src/pages/OrbitAdminLanding/components/AdminLandingView.tsx` (98 lines)
  - `app/src/pages/OrbitAdminLanding/hooks/adminLandingState.ts` (97 lines)
  - `app/src/pages/OrbitAdminLanding/hooks/applicationEvents.ts` (11 lines)
  - `app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.ts` (105 lines)
  - `app/src/pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.ts` (39 lines)
  - `app/src/pages/OrbitAdminLanding/mocks.ts` (53 lines)
  - `app/src/pages/OrbitAdminLanding/staticEntities.ts` (9 lines)
- tests: `app/src/pages/OrbitAdminLanding/OrbitAdminLanding.test.tsx`, `app/src/pages/OrbitAdminLanding/components/AdminLandingView.test.tsx`, `app/src/pages/OrbitAdminLanding/hooks/adminLandingState.test.ts`, `app/src/pages/OrbitAdminLanding/hooks/useAdminLanding.test.tsx`, `app/src/pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 2 files at depth 3-4
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/event**: `api/event/index.ts` (65, d2); +5 deeper
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: 1 files at depth 3-4
  - **api/update**: 1 files at depth 3-4
  - **app**: `app/routes.generated.ts` (89, d2)
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/OrbitLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2), `components/layout/OrbitLayout/OrbitLayout.tsx` (91, d2); +8 deeper
  - **components/orbit**: `components/orbit/OrbitEventCard/index.ts` (2, d1), `components/orbit/OrbitNoInformation/index.ts` (1, d1), `components/orbit/OrbitSkeleton/index.ts` (1, d1), `components/orbit/OrbitEventCard/OrbitEventCard.tsx` (63, d2), `components/orbit/OrbitEventCard/types.ts` (1, d2), `components/orbit/OrbitNoInformation/OrbitNoInformation.tsx` (29, d2), `components/orbit/OrbitSkeleton/OrbitSkeleton.tsx` (157, d2); +2 deeper
  - **components/ui**: `components/ui/os/OSList/index.ts` (2, d1), `components/ui/os/OSList/OSList.tsx` (232, d2), `components/ui/os/OSList/OSListItem.tsx` (129, d2); +14 deeper
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +4 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/legacyShared**: 3 files at depth 3-4
  - **lib/orbit**: `lib/orbit/staticEntities.ts` (95, d1); +2 deeper
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 3 files at depth 3-4
  - **lib/ubtConnectLibrary**: 2 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/orbitAdmin.ts` (200, d1), `mocks/fictional/orbit.ts` (1446, d2); +1 deeper
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d1)
  - **mocks/scenarioParams.ts**: `mocks/scenarioParams.ts` (17, d2)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 15 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/paths.ts` (27, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +18 deeper
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/session.ts` (295, d2); +9 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: 3 files at depth 3-4

## Screen OrbitAdminMilestoneDetail
- **not built**: no folder `app/src/pages/OrbitAdminMilestoneDetail` (check the board for the decision)

## Screen OrbitAdminMilestones
- **not built**: no folder `app/src/pages/OrbitAdminMilestones` (check the board for the decision)

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetMilestoneScanFF | 7 | `mocks/fictional/orbitAdmin.ts:113`<br>`api/schema.d.ts:1512`<br>`api/openapi.yaml:3074`<br>`api/event/repository.ts:252`<br>`pages/OrbitAdminLanding/mocks.ts:18`<br>`pages/OrbitAdminLanding/mocks.ts:21` |
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

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/OrbitAdminEventDetail/mocks.ts`, `app/src/pages/OrbitAdminLanding/mocks.ts`).

- GetMilestoneScanFF: `mocks/fictional/orbitAdmin.ts:113`, `app/src/pages/OrbitAdminLanding/mocks.ts`
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
