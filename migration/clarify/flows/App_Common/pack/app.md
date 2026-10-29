# React code index of UI flow App_Common

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen InvalidPermissions
- **not built**: no folder `app/src/pages/InvalidPermissions` (check the board for the decision)

## Screen Login
- route: `/UBTConnect/Login` inputs=["In_IsFromInvalidPermissions: Boolean", "In_IsFromResetPIN: Boolean", "CallbackType: Text", "CallbackGUID: Text"]; meta: `{ access: 'anonymous', lock: 'ignore' }`
- page files:
  - `app/src/pages/Login/LoginPage.tsx` (68 lines)
  - `app/src/pages/Login/components/AppManagerEvents.tsx` (9 lines)
  - `app/src/pages/Login/components/LoginCard.tsx` (78 lines)
  - `app/src/pages/Login/components/LoginFooter.tsx` (19 lines)
  - `app/src/pages/Login/components/LoginVersion.tsx` (26 lines)
  - `app/src/pages/Login/components/Tile.tsx` (39 lines)
  - `app/src/pages/Login/components/staticEntities.ts` (9 lines)
  - `app/src/pages/Login/hooks/useLogin.ts` (101 lines)
  - `app/src/pages/Login/inputs.ts` (27 lines)
  - `app/src/pages/Login/mocks.ts` (5 lines)
- tests: `app/src/pages/Login/Login.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/app**: 5 files at depth 3-4
  - **api/client**: `api/client/cache.ts` (233, d2); +2 deeper
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: 2 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: `components/auth/WelcomeToConnect/index.ts` (1, d1), `components/auth/WelcomeToConnect/WelcomeToConnect.tsx` (32, d2)
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LoginLayout/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LoginLayout/LoginLayout.tsx` (67, d2); +2 deeper
  - **components/ui**: `components/ui/ButtonLoading/index.ts` (1, d1), `components/ui/CustomContainer/index.ts` (2, d1), `components/ui/Dialog/index.ts` (10, d1), `components/ui/os/OSLink.tsx` (29, d1), `components/ui/os/OSValidation/index.ts` (28, d1), `components/ui/ButtonLoading/ButtonLoading.tsx` (63, d2), `components/ui/CustomContainer/CustomContainer.tsx` (55, d2), `components/ui/CustomContainer/types.ts` (11, d2), `components/ui/Dialog/ChoiceDialog.tsx` (73, d2), `components/ui/Dialog/NavigationDialog.tsx` (178, d2), `components/ui/Dialog/dialogTriggers.ts` (44, d2), `components/ui/lib/staticEntities.ts` (67, d2), `components/ui/os/OSValidation/OSValidation.tsx` (193, d2), `components/ui/os/OSValidation/validationService.ts` (309, d2); +14 deeper
  - **components/version**: `components/version/AppVersion/index.ts` (1, d1), `components/version/UnsupportedVersionWrapper/index.ts` (1, d1), `components/version/AppVersion/AppVersion.tsx` (44, d2), `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx` (41, d2); +6 deeper
  - **legacy/os**: 4 files at depth 3-4
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d2)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/unsupportedVersion.ts` (34, d1); +1 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d1), `lib/ubtConnectLibrary/staticEntities.ts` (314, d1), `lib/ubtConnectLibrary/structures.ts` (335, d2)
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/scenarioParams.ts**: `mocks/scenarioParams.ts` (17, d2)
  - **platform/auth**: `platform/auth/index.ts` (3, d2); +3 deeper
  - **platform/bootstrap**: `platform/bootstrap/postLogin.ts` (55, d2), `platform/bootstrap/startup.ts` (105, d2)
  - **platform/config**: `platform/config/config.ts` (39, d2)
  - **platform/device**: `platform/device/OfflineDataSync/index.ts` (1, d1), `platform/device/OfflineDataSync/OfflineDataSync.tsx` (28, d2)
  - **platform/feedback**: `platform/feedback/index.ts` (27, d1), `platform/feedback/FeedbackMessageHost.tsx` (57, d2), `platform/feedback/delayedMessage.ts` (34, d2), `platform/feedback/exceptionMessages.ts` (126, d2), `platform/feedback/networkStatus.ts` (41, d2); +18 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +19 deeper
  - **platform/session**: `platform/session/auth.ts` (96, d1), `platform/session/resume.ts` (34, d1), `platform/session/pin.ts` (70, d2), `platform/session/session.ts` (295, d2); +7 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Screen Splash
- route: `/UBTConnect/Splash` inputs=[]; meta: `{ access: 'anonymous', lock: 'ignore' }`
- page files:
  - `app/src/pages/Splash/SplashPage.tsx` (40 lines)
  - `app/src/pages/Splash/components/ApplicationLoadEvents.tsx` (13 lines)
  - `app/src/pages/Splash/components/LoadingDots.tsx` (69 lines)
  - `app/src/pages/Splash/components/staticEntities.ts` (6 lines)
  - `app/src/pages/Splash/hooks/useApplicationLoadEvents.ts` (55 lines)
  - `app/src/pages/Splash/hooks/useLoadingDotsAnimation.ts` (125 lines)
  - `app/src/pages/Splash/hooks/useSplash.ts` (86 lines)
- tests: `app/src/pages/Splash/Splash.test.tsx`, `app/src/pages/Splash/hooks/useApplicationLoadEvents.test.ts`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: 3 files at depth 3-4
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/layout**: `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +2 deeper
  - **components/ui**: `components/ui/CustomText/index.ts` (2, d1), `components/ui/SvgBackground/index.ts` (1, d1), `components/ui/CustomText/CustomText.tsx` (68, d2), `components/ui/CustomText/types.ts` (1, d2), `components/ui/SvgBackground/SvgBackground.tsx` (59, d2); +19 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: 5 files at depth 3-4
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d1)
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d2), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2); +2 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2); +2 deeper
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +13 deeper
  - **platform/flags**: 7 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/NavigationHandler/index.ts` (1, d1), `platform/navigation/OpenLinkOnResume/index.ts` (1, d1), `platform/navigation/NavigationHandler/NavigationHandler.tsx` (33, d2), `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx` (22, d2), `platform/navigation/index.ts` (26, d2); +19 deeper
  - **platform/session**: `platform/session/pin.ts` (70, d1), `platform/session/resume.ts` (34, d1), `platform/session/session.ts` (295, d2), `platform/session/userInfo.ts` (46, d2); +8 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Connect_Logout | 10 | `platform/feedback/exceptionMessages.ts:103`<br>`platform/feedback/exceptionMessages.ts:123`<br>`platform/session/machine.ts:60`<br>`platform/session/machine.ts:62`<br>`platform/session/auth.ts:60`<br>`platform/session/auth.ts:71` |
| Connect_SetLoggedContext | 10 | `platform/bootstrap/postLogin.ts:21`<br>`platform/bootstrap/postLogin.ts:51`<br>`platform/bootstrap/startup.ts:24`<br>`platform/storage/localEntities/localNotes.ts:11`<br>`platform/storage/localEntities/localBookmarks.ts:14`<br>`platform/storage/localEntities/orbitStaticEntities.ts:22` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetColdStartLinkURL | 1 | `platform/session/resume.ts:12` |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper | 13 | `platform/bootstrap/appStartSteps.ts:106`<br>`platform/session/userInfo.ts:6`<br>`platform/session/userInfo.ts:29`<br>`platform/session/userInfo.ts:35`<br>`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:22`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:134` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
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
| Set_InitialClientVariables | 1 | `lib/ubtConnect/actions.ts:51` |
| ShowCommunicationExceptionMessage | 4 | `platform/feedback/networkStatus.ts:10`<br>`platform/feedback/exceptionMessages.ts:7`<br>`platform/feedback/exceptionMessages.ts:16`<br>`legacy/os/exceptions.ts:57` |
| ShowExceptionMessage | 10 | `platform/feedback/exceptionMessages.ts:7`<br>`platform/feedback/exceptionMessages.ts:41`<br>`platform/feedback/exceptionMessages.ts:101`<br>`platform/session/machine.ts:62`<br>`platform/session/auth.ts:63`<br>`platform/session/auth.ts:72` |
| Sync_Info_GetMain | 38 | `mocks/fictional/orbitAdmin.ts:19`<br>`mocks/fictional/orbit.ts:36`<br>`mocks/fictional/orbit.ts:62`<br>`mocks/fictional/orbit.ts:70`<br>`mocks/fictional/orbit.ts:109`<br>`mocks/fictional/orbit.ts:119` |
| Sync_Info_Main | 14 | `platform/bootstrap/postLogin.ts:22`<br>`platform/bootstrap/postLogin.ts:23`<br>`platform/bootstrap/appStartSteps.ts:32`<br>`platform/bootstrap/startup.ts:16`<br>`platform/bootstrap/startup.ts:60`<br>`platform/bootstrap/startup.ts:68` |
| Sync_SetSiteProperties | 1 | `platform/bootstrap/startup.ts:74` |
| Sync_UserInfo_TriggerCache | 2 | `platform/bootstrap/postLogin.ts:33`<br>`platform/bootstrap/postLogin.ts:35` |
| TriggerOfflineDataSync | 2 | `platform/bootstrap/postLogin.ts:52`<br>`platform/session/auth.ts:28` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |
| User_GetName | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Login/mocks.ts`).

- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- Sync_Info_GetMain: `mocks/fictional/orbitAdmin.ts:19`, `mocks/fictional/orbit.ts:36`, `mocks/fictional/orbit.ts:62`, `mocks/fictional/orbit.ts:70`, `app/src/pages/Login/mocks.ts`
- User_GetName: **no mock handler found**
