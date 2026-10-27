# React code index of UI flow Legacy_LDMEventsFlow

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen EmailTarget
- route: `/UBTConnect/EmailTarget` inputs=["In_HouseholdFirstName: Text", "In_HouseholdFullName: Text", "EmailTo: Email", "ContactBusinessType: Text", "InitialEmailSubject: Text", "EmailHost: Boolean", "IsFromLDM: Boolean", "EventDate: Date", "EventLocality: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/EmailTarget/EmailTargetPage.tsx` (55 lines)
  - `app/src/pages/EmailTarget/components/HouseholdEmailView.tsx` (184 lines)
  - `app/src/pages/EmailTarget/hooks/emailTargetState.ts` (30 lines)
  - `app/src/pages/EmailTarget/hooks/householdEmailState.ts` (85 lines)
  - `app/src/pages/EmailTarget/hooks/useHouseholdEmail.ts` (163 lines)
  - `app/src/pages/EmailTarget/inputs.ts` (46 lines)
  - `app/src/pages/EmailTarget/mocks.ts` (19 lines)
- tests: `app/src/pages/EmailTarget/EmailTarget.test.tsx`, `app/src/pages/EmailTarget/components/HouseholdEmailView.test.tsx`, `app/src/pages/EmailTarget/hooks/emailTargetState.test.ts`, `app/src/pages/EmailTarget/hooks/householdEmailState.test.ts`, `app/src/pages/EmailTarget/inputs.test.ts`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 2 files at depth 3-4
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: `api/message/index.ts` (45, d2); +6 deeper
  - **api/update**: 1 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2); +8 deeper
  - **components/ui**: `components/ui/Dialog/index.ts` (10, d1), `components/ui/LegacyInputCounter/index.ts` (1, d1), `components/ui/legacy/LegacyButtonLoading/index.ts` (1, d1), `components/ui/os/OSValidation/index.ts` (28, d1), `components/ui/Dialog/ChoiceDialog.tsx` (73, d2), `components/ui/Dialog/NavigationDialog.tsx` (178, d2), `components/ui/Dialog/dialogTriggers.ts` (44, d2), `components/ui/LegacyInputCounter/LegacyInputCounter.tsx` (47, d2), `components/ui/legacy/LegacyButtonLoading/LegacyButtonLoading.tsx` (71, d2), `components/ui/os/OSValidation/OSValidation.tsx` (193, d2), `components/ui/os/OSValidation/validationService.ts` (309, d2); +18 deeper
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +2 deeper
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/legacyShared**: `lib/legacyShared/staticEntities.ts` (38, d1); +2 deeper
  - **lib/navigationEvent.ts**: `lib/navigationEvent.ts` (30, d1)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 3 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/index.ts` (27, d2); +22 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +19 deeper
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/mockUser.ts` (118, d2), `platform/session/types.ts` (20, d2); +7 deeper
  - **platform/storage**: 2 files at depth 3-4

## Screen LDM_Email
- **not built**: no folder `app/src/pages/LDM_Email` (check the board for the decision)

## Screen LDM_EventDetail
- **not built**: no folder `app/src/pages/LDM_EventDetail` (check the board for the decision)

## Screen LDM_MyEvents
- **not built**: no folder `app/src/pages/LDM_MyEvents` (check the board for the decision)

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetNameAndSurname_ByFullName | 5 | `lib/jsUtils.ts:59`<br>`lib/ubtConnect/actions.ts:198`<br>`pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx:19`<br>`pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx:24`<br>`pages/AssembleDetail/AssembleDetailPage.tsx:39` |
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

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/EmailTarget/mocks.ts`).

- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
