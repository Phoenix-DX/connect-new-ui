# React code index of UI flow Legacy_OrbitQRCodeFlow

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen QRCodeGenerate
- route: `/UBTConnect/QRCodeGenerate` inputs=["In_MemberId: LongInteger", "In_EventId: LongInteger", "In_EventName: Text", "In_EventStartDate: DateTime", "In_EventEndDate: DateTime", "In_EventLocation: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/QRCodeGenerate/QRCodeGeneratePage.tsx` (35 lines)
  - `app/src/pages/QRCodeGenerate/components/GenerateQrCodeView.tsx` (133 lines)
  - `app/src/pages/QRCodeGenerate/hooks/generateQrCodeState.ts` (114 lines)
  - `app/src/pages/QRCodeGenerate/hooks/useBinaryImageURL.ts` (27 lines)
  - `app/src/pages/QRCodeGenerate/hooks/useGenerateQrCode.ts` (105 lines)
  - `app/src/pages/QRCodeGenerate/inputs.ts` (31 lines)
  - `app/src/pages/QRCodeGenerate/mocks.ts` (44 lines)
- tests: `app/src/pages/QRCodeGenerate/QRCodeGenerate.test.tsx`, `app/src/pages/QRCodeGenerate/components/GenerateQrCodeView.test.tsx`, `app/src/pages/QRCodeGenerate/hooks/generateQrCodeState.test.ts`, `app/src/pages/QRCodeGenerate/hooks/useBinaryImageURL.test.ts`, `app/src/pages/QRCodeGenerate/hooks/useGenerateQrCode.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 1 files at depth 3-4
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/event**: 6 files at depth 3-4
  - **api/image**: `api/image/index.ts` (2, d1), `api/image/repository.ts` (45, d2); +1 deeper
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: 1 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/MenuIcon/index.ts` (1, d1), `components/layout/OrbitLayout/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/MenuIcon/MenuIcon.tsx` (44, d2), `components/layout/OrbitLayout/OrbitLayout.tsx` (91, d2); +4 deeper
  - **components/orbit**: `components/orbit/ContactHelpdeskFooter/index.ts` (1, d1), `components/orbit/OrbitNoInformation/index.ts` (1, d1), `components/orbit/OrbitSkeleton/index.ts` (1, d1), `components/orbit/ContactHelpdeskFooter/ContactHelpdeskFooter.tsx` (22, d2), `components/orbit/OrbitNoInformation/OrbitNoInformation.tsx` (29, d2), `components/orbit/OrbitSkeleton/OrbitSkeleton.tsx` (157, d2)
  - **components/ui**: `components/ui/os/OSList/index.ts` (2, d1), `components/ui/os/OSList/OSList.tsx` (232, d2), `components/ui/os/OSList/OSListItem.tsx` (129, d2); +5 deeper
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +3 deeper
  - **lib/legacyShared**: 3 files at depth 3-4
  - **lib/orbit**: `lib/orbit/actions.ts` (330, d2); +2 deeper
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnectUtils**: 2 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/orbit.ts` (1446, d1), `mocks/fictional/directory.ts` (442, d2)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 14 files at depth 3-4
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +19 deeper
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/mockUser.ts` (118, d2); +8 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: 4 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| ExitApplicationForWebViewUpdate | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |
