# React code index of UI flow App_PIN

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen PINChange
- route: `/UBTConnect/PINChange` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/PINChange/PINChangePage.tsx` (92 lines)
  - `app/src/pages/PINChange/hooks/usePINChange.ts` (46 lines)
- tests: `app/src/pages/PINChange/PINChange.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 2 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **app**: `app/routes.generated.ts` (89, d2)
  - **components/auth**: `components/auth/PinRegisterContent/index.ts` (1, d1), `components/auth/PinRegisterContent/PinRegisterContent.tsx` (130, d2); +4 deeper
  - **components/layout**: `components/layout/LoginLayout/index.ts` (1, d1), `components/layout/LoginLayout/LoginLayout.tsx` (67, d2); +2 deeper
  - **components/ui**: `components/ui/Icon/index.ts` (1, d1), `components/ui/IconText/index.ts` (2, d1), `components/ui/Icon/Icon.tsx` (47, d2), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2); +17 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: 7 files at depth 3-4
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d2)
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 1 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/auth**: 1 files at depth 3-4
  - **platform/bootstrap**: 2 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/index.ts` (27, d1), `platform/feedback/FeedbackMessageHost.tsx` (57, d2), `platform/feedback/delayedMessage.ts` (34, d2), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2), `platform/feedback/exceptionMessages.ts` (126, d2), `platform/feedback/networkStatus.ts` (41, d2); +9 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/PreventBackNavigation/index.ts` (2, d1), `platform/navigation/index.ts` (26, d1), `platform/navigation/paths.ts` (27, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/PreventBackNavigation/PreventBackNavigation.tsx` (26, d2), `platform/navigation/PreventBackNavigation/types.ts` (1, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +12 deeper
  - **platform/session**: `platform/session/usePinRegisterContent.ts` (103, d1), `platform/session/usePinCodeRegister.ts` (76, d2), `platform/session/userInfo.ts` (46, d2); +13 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: 2 files at depth 3-4

## Screen PINRegister
- route: `/UBTConnect/PINRegister` inputs=[]; meta: `{ access: 'member', lock: 'ignore' }`
- page files:
  - `app/src/pages/PINRegister/PINRegisterPage.tsx` (69 lines)
  - `app/src/pages/PINRegister/hooks/usePINRegister.ts` (25 lines)
  - `app/src/pages/PINRegister/staticEntities.ts` (10 lines)
- tests: `app/src/pages/PINRegister/PINRegister.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/app**: 5 files at depth 3-4
  - **api/client**: `api/client/cache.ts` (233, d2); +2 deeper
  - **api/member**: 1 files at depth 3-4
  - **api/message**: 2 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: `components/auth/PinRegisterContent/index.ts` (1, d1), `components/auth/PinRegisterContent/PinRegisterContent.tsx` (130, d2); +2 deeper
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LoginLayout/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LoginLayout/LoginLayout.tsx` (67, d2); +2 deeper
  - **components/ui**: `components/ui/Icon/index.ts` (1, d1), `components/ui/IconText/index.ts` (2, d1), `components/ui/Icon/Icon.tsx` (47, d2), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2); +18 deeper
  - **legacy/os**: 3 files at depth 3-4
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d2)
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/staticEntities.ts` (314, d1); +2 deeper
  - **platform/auth**: `platform/auth/index.ts` (3, d2); +3 deeper
  - **platform/bootstrap**: `platform/bootstrap/postLogin.ts` (55, d2), `platform/bootstrap/startup.ts` (105, d2)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/index.ts` (27, d2); +22 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/PreventBackNavigation/index.ts` (2, d1), `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/PreventBackNavigation/PreventBackNavigation.tsx` (26, d2), `platform/navigation/PreventBackNavigation/types.ts` (1, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +16 deeper
  - **platform/session**: `platform/session/auth.ts` (96, d1), `platform/session/usePinRegisterContent.ts` (103, d1), `platform/session/pin.ts` (70, d2), `platform/session/resume.ts` (34, d2), `platform/session/session.ts` (295, d2), `platform/session/usePinCodeRegister.ts` (76, d2); +8 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Screen PINUnlock
- route: `/UBTConnect/PINUnlock` inputs=[]; meta: `{ access: 'member', lock: 'ignore' }`
- page files:
  - `app/src/pages/PINUnlock/PINUnlockPage.tsx` (18 lines)
  - `app/src/pages/PINUnlock/hooks/usePINUnlock.ts` (35 lines)
- tests: `app/src/pages/PINUnlock/hooks/usePINUnlock.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 2 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2); +2 deeper
  - **components/ui**: 9 files at depth 3-4
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/clientVarNames.ts` (39, d2); +3 deeper
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d1)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 1 files at depth 3-4
  - **lib/ubtConnectLibrary**: 1 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +7 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d2), `platform/navigation/paths.ts` (27, d2); +24 deeper
  - **platform/session**: `platform/session/resume.ts` (34, d1), `platform/session/session.ts` (295, d1), `platform/session/clientVars.ts` (78, d2), `platform/session/machine.ts` (133, d2); +10 deeper
  - **platform/settings**: `platform/settings/index.ts` (11, d2); +2 deeper
  - **platform/storage**: `platform/storage/storage.ts` (62, d2)

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| ExitApplicationForWebViewUpdate | 0 | - |
| GetResumeLoginLink | 3 | `platform/session/usePinRegisterContent.ts:31`<br>`platform/session/resume.ts:19`<br>`pages/PINUnlock/hooks/usePINUnlock.ts:13` |
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
