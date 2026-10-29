# React code index of UI flow App_Menu

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Menu
- route: `/UBTConnect/Menu` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/Menu/MenuPage.tsx` (108 lines)
  - `app/src/pages/Menu/components/MenuUserHeader.tsx` (82 lines)
  - `app/src/pages/Menu/hooks/menuState.ts` (122 lines)
  - `app/src/pages/Menu/hooks/useMenu.ts` (95 lines)
  - `app/src/pages/Menu/mocks.ts` (51 lines)
  - `app/src/pages/Menu/staticEntities.ts` (28 lines)
- tests: `app/src/pages/Menu/components/MenuUserHeader.test.tsx`, `app/src/pages/Menu/hooks/menuState.test.ts`, `app/src/pages/Menu/hooks/useMenu.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 1 files at depth 3-4
  - **api/client**: 2 files at depth 3-4
  - **api/image**: `api/image/index.ts` (2, d2); +2 deeper
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +6 deeper
  - **components/menu**: `components/menu/MenuList/index.ts` (2, d1), `components/menu/MenuList/MenuList.tsx` (167, d2), `components/menu/MenuList/types.ts` (1, d2)
  - **components/ui**: `components/ui/ColumnsTwo/index.ts` (2, d1), `components/ui/CustomText/index.ts` (2, d1), `components/ui/Dialog/index.ts` (10, d1), `components/ui/EntityLazyImage/index.ts` (2, d1), `components/ui/EntityLazyImage/mocks.ts` (60, d1), `components/ui/Skeleton/index.ts` (1, d1), `components/ui/os/OSLink.tsx` (29, d1), `components/ui/ColumnsTwo/ColumnsTwo.tsx` (54, d2), `components/ui/ColumnsTwo/types.ts` (1, d2), `components/ui/CustomText/CustomText.tsx` (68, d2), `components/ui/CustomText/types.ts` (1, d2), `components/ui/Dialog/ChoiceDialog.tsx` (73, d2), `components/ui/Dialog/NavigationDialog.tsx` (178, d2), `components/ui/Dialog/dialogTriggers.ts` (44, d2), `components/ui/EntityLazyImage/EntityLazyImage.tsx` (113, d2), `components/ui/EntityLazyImage/types.ts` (1, d2), `components/ui/Skeleton/Skeleton.tsx` (40, d2), `components/ui/lib/actions.ts` (307, d2); +40 deeper
  - **components/version**: `components/version/AppVersion/index.ts` (1, d1), `components/version/AppVersion/AppVersion.tsx` (44, d2); +2 deeper
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d2); +8 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d2)
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d2)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/staticEntities.ts` (205, d2); +3 deeper
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d1), `lib/ubtConnectUtils/staticEntities.ts` (190, d2); +1 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d2)
  - **mocks/fictional**: `mocks/fictional/directory.ts` (442, d2)
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: 1 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/flowErrors.ts` (17, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2), `platform/feedback/index.ts` (27, d2), `platform/feedback/pageRedirect.ts` (5, d2); +11 deeper
  - **platform/flags**: `platform/flags/index.ts` (9, d2); +8 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 23 files at depth 3-4
  - **platform/session**: `platform/session/UserInfoCache/index.ts` (2, d1), `platform/session/mockUser.ts` (118, d1), `platform/session/UserInfoCache/UserInfoCache.tsx` (32, d2), `platform/session/UserInfoCache/types.ts` (1, d2), `platform/session/session.ts` (295, d2), `platform/session/types.ts` (20, d2); +13 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: `platform/storage/storage.ts` (62, d2); +1 deeper

## Screen PINBiometricsMenu
- route: `/UBTConnect/PINBiometricsMenu` inputs=[]; meta: `{ access: 'anonymous', lock: 'enforce' }`
- page files:
  - `app/src/pages/PINBiometricsMenu/PINBiometricsMenuPage.tsx` (24 lines)
  - `app/src/pages/PINBiometricsMenu/hooks/pinBiometricsMenuState.ts` (31 lines)
  - `app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.ts` (51 lines)
  - `app/src/pages/PINBiometricsMenu/staticEntities.ts` (10 lines)
- tests: `app/src/pages/PINBiometricsMenu/PINBiometricsMenu.test.tsx`, `app/src/pages/PINBiometricsMenu/hooks/pinBiometricsMenuState.test.ts`, `app/src/pages/PINBiometricsMenu/hooks/usePINBiometricsMenu.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: 2 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/layout**: `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +2 deeper
  - **components/menu**: `components/menu/MenuList/index.ts` (2, d2); +2 deeper
  - **components/ui**: 13 files at depth 3-4
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/clientVarNames.ts` (39, d2); +5 deeper
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 2 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +7 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/paths.ts` (27, d2), `platform/navigation/screenTransition.ts` (179, d2); +12 deeper
  - **platform/session**: `platform/session/session.ts` (295, d1), `platform/session/clientVars.ts` (78, d2), `platform/session/machine.ts` (133, d2); +7 deeper
  - **platform/settings**: `platform/settings/index.ts` (11, d2); +2 deeper
  - **platform/storage**: `platform/storage/storage.ts` (62, d2)

## Screen TermsAndPoliciesMenu
- route: `/UBTConnect/TermsAndPoliciesMenu` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenuPage.tsx` (35 lines)
  - `app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.ts` (78 lines)
  - `app/src/pages/TermsAndPoliciesMenu/mocks.ts` (7 lines)
  - `app/src/pages/TermsAndPoliciesMenu/staticEntities.ts` (5 lines)
- tests: `app/src/pages/TermsAndPoliciesMenu/TermsAndPoliciesMenu.test.tsx`, `app/src/pages/TermsAndPoliciesMenu/hooks/useTermsAndPoliciesMenu.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/app**: `api/app/index.ts` (11, d1), `api/app/hooks.ts` (27, d2), `api/app/keys.ts` (28, d2), `api/app/repository.ts` (55, d2), `api/app/types.ts` (132, d2); +1 deeper
  - **api/client**: 2 files at depth 3-4
  - **api/image**: `api/image/index.ts` (2, d2); +2 deeper
  - **api/locality**: 5 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +2 deeper
  - **components/menu**: `components/menu/MenuList/index.ts` (2, d1), `components/menu/MenuList/MenuList.tsx` (167, d2), `components/menu/MenuList/types.ts` (1, d2)
  - **components/ui**: `components/ui/lib/actions.ts` (307, d2); +26 deeper
  - **legacy/os**: `legacy/os/cache/PoliciesCacheControl/index.ts` (2, d1), `legacy/os/cache/PoliciesCacheControl/PoliciesCacheControl.tsx` (59, d2), `legacy/os/cache/PoliciesCacheControl/types.ts` (3, d2); +3 deeper
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d2)
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d2)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/staticEntities.ts` (205, d1); +1 deeper
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d1), `lib/ubtConnectUtils/staticEntities.ts` (190, d2), `lib/ubtConnectUtils/structures.ts` (86, d2)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/index.ts` (27, d2), `platform/feedback/pageRedirect.ts` (5, d2); +20 deeper
  - **platform/flags**: `platform/flags/index.ts` (9, d2); +8 deeper
  - **platform/log**: `platform/log/log.ts` (56, d2)
  - **platform/navigation**: 23 files at depth 3-4
  - **platform/session**: `platform/session/session.ts` (295, d2); +7 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: 1 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Connect_Logout | 10 | `platform/feedback/exceptionMessages.ts:103`<br>`platform/feedback/exceptionMessages.ts:123`<br>`platform/session/machine.ts:60`<br>`platform/session/machine.ts:62`<br>`platform/session/auth.ts:60`<br>`platform/session/auth.ts:71` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| RequestPhotoUpdate | 10 | `api/member/repository.ts:42`<br>`api/schema.d.ts:1546`<br>`api/openapi.yaml:3134`<br>`pages/Menu/staticEntities.ts:10`<br>`pages/Menu/hooks/useMenu.ts:15`<br>`pages/Menu/hooks/useMenu.ts:77` |
| ScrollTop | 6 | `lib/ubtConnect/actions.ts:73`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:149`<br>`pages/Notes/hooks/useNotes.ts:29`<br>`pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts:73`<br>`pages/Notifications/hooks/useNotifications.ts:143`<br>`pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:207` |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Menu/mocks.ts`, `app/src/pages/TermsAndPoliciesMenu/mocks.ts`).

- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- RequestPhotoUpdate: `app/src/pages/Menu/mocks.ts`
