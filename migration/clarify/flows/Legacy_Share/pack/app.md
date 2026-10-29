# React code index of UI flow Legacy_Share

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen ConnectShare
- route: `/UBTConnect/ConnectShare` inputs=["ShareId: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/ConnectShare/ConnectSharePage.tsx` (24 lines)
  - `app/src/pages/ConnectShare/components/NavigationLanding.tsx` (21 lines)
  - `app/src/pages/ConnectShare/components/ShareDetailView.tsx` (53 lines)
  - `app/src/pages/ConnectShare/hooks/connectShareActions.ts` (70 lines)
  - `app/src/pages/ConnectShare/hooks/connectShareState.ts` (87 lines)
  - `app/src/pages/ConnectShare/hooks/useConnectShare.ts` (126 lines)
  - `app/src/pages/ConnectShare/inputs.ts` (12 lines)
  - `app/src/pages/ConnectShare/mocks.ts` (125 lines)
- tests: `app/src/pages/ConnectShare/ConnectShare.test.tsx`, `app/src/pages/ConnectShare/hooks/connectShareActions.test.ts`, `app/src/pages/ConnectShare/hooks/connectShareState.test.ts`, `app/src/pages/ConnectShare/hooks/useConnectShare.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 1 files at depth 3-4
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/country**: 1 files at depth 3-4
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: 1 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/share**: `api/share/index.ts` (10, d1), `api/share/hooks.ts` (30, d2), `api/share/keys.ts` (16, d2), `api/share/repository.ts` (49, d2), `api/share/shareSheet.ts` (57, d2); +2 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIconBack/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIconBack/MenuIconBack.tsx` (25, d2); +4 deeper
  - **components/ui**: `components/ui/ConnectBlankSlate/index.ts` (1, d1), `components/ui/ConnectBlankSlate/ConnectBlankSlate.tsx` (30, d2), `components/ui/os/OSLink.tsx` (29, d2); +10 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +5 deeper
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/legacyShared**: 3 files at depth 3-4
  - **lib/os-assets.manifest.json**: `lib/os-assets.manifest.json` (78, d2)
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d1)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/staticEntities.ts` (205, d1); +1 deeper
  - **lib/ubtConnectLibrary**: 1 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/flowErrors.ts` (17, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +7 deeper
  - **platform/flags**: 7 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 13 files at depth 3-4
  - **platform/session**: 12 files at depth 3-4

## Screen LegacyShareObject
- route: `/UBTConnect/LegacyShareObject` inputs=["In_ShareObjectTypeId: Text", "In_ObjectId: Text", "In_CustomTitle: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/LegacyShareObject/LegacyShareObjectPage.tsx` (80 lines)
  - `app/src/pages/LegacyShareObject/components/HighlightSearch.tsx` (76 lines)
  - `app/src/pages/LegacyShareObject/components/ListBlankSlate.tsx` (31 lines)
  - `app/src/pages/LegacyShareObject/components/ProfileList.tsx` (173 lines)
  - `app/src/pages/LegacyShareObject/components/ShareObjectView.tsx` (198 lines)
  - `app/src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/README.md` (24 lines)
  - `app/src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/UpgradeSubscriptionDialog.tsx` (52 lines)
  - `app/src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/__captures__/v1.html` (6 lines)
  - `app/src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/__captures__/v2.html` (11 lines)
  - `app/src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/index.ts` (1 lines)
  - `app/src/pages/LegacyShareObject/components/staticEntities.ts` (19 lines)
  - `app/src/pages/LegacyShareObject/hooks/profileListState.ts` (115 lines)
  - `app/src/pages/LegacyShareObject/hooks/shareObjectState.ts` (80 lines)
  - `app/src/pages/LegacyShareObject/hooks/useProfileList.ts` (193 lines)
  - `app/src/pages/LegacyShareObject/hooks/useShareObject.ts` (109 lines)
  - `app/src/pages/LegacyShareObject/inputs.ts` (18 lines)
  - `app/src/pages/LegacyShareObject/mocks.ts` (135 lines)
- tests: `app/src/pages/LegacyShareObject/LegacyShareObject.test.tsx`, `app/src/pages/LegacyShareObject/components/UpgradeSubscriptionDialog/UpgradeSubscriptionDialog.test.tsx`, `app/src/pages/LegacyShareObject/hooks/profileListState.test.ts`, `app/src/pages/LegacyShareObject/hooks/shareObjectState.test.ts`, `app/src/pages/LegacyShareObject/hooks/useProfileList.test.tsx`, `app/src/pages/LegacyShareObject/hooks/useShareObject.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/household**: `api/household/index.ts` (17, d2); +5 deeper
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/share**: `api/share/index.ts` (10, d1), `api/share/hooks.ts` (30, d2), `api/share/keys.ts` (16, d2), `api/share/repository.ts` (49, d2), `api/share/shareSheet.ts` (57, d2); +2 deeper
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LegacyLayout/index.ts` (1, d1), `components/layout/MenuIconBack/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LegacyLayout/LegacyLayout.tsx` (93, d2), `components/layout/MenuIconBack/MenuIconBack.tsx` (25, d2); +4 deeper
  - **components/ui**: `components/ui/AvatarImage/index.ts` (2, d1), `components/ui/EntityLazyImage/index.ts` (2, d1), `components/ui/InputWithIcon/index.ts` (1, d1), `components/ui/ResultItemImage/index.ts` (1, d1), `components/ui/os/OSList/index.ts` (2, d1), `components/ui/AvatarImage/AvatarImage.tsx` (85, d2), `components/ui/AvatarImage/types.ts` (2, d2), `components/ui/Dialog/index.ts` (10, d2), `components/ui/EntityLazyImage/EntityLazyImage.tsx` (113, d2), `components/ui/EntityLazyImage/types.ts` (1, d2), `components/ui/InputWithIcon/InputWithIcon.tsx` (29, d2), `components/ui/ResultItemImage/ResultItemImage.tsx` (156, d2), `components/ui/os/OSList/OSList.tsx` (232, d2), `components/ui/os/OSList/OSListItem.tsx` (129, d2); +26 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +7 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/legacyShared**: 2 files at depth 3-4
  - **lib/navigationEvent.ts**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d2)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 1 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/directory.ts` (442, d2)
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/auth**: 1 files at depth 3-4
  - **platform/bootstrap**: 2 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/index.ts` (27, d1), `platform/feedback/FeedbackMessageHost.tsx` (57, d2), `platform/feedback/delayedMessage.ts` (34, d2), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2), `platform/feedback/exceptionMessages.ts` (126, d2), `platform/feedback/networkStatus.ts` (41, d2); +9 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +19 deeper
  - **platform/session**: `platform/session/cachedUserInfo.ts` (60, d1), `platform/session/mockUser.ts` (118, d1), `platform/session/session.ts` (295, d2), `platform/session/types.ts` (20, d2), `platform/session/userInfo.ts` (46, d2); +12 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: `platform/storage/storage.ts` (62, d2); +1 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AuditShareViewEvent | 3 | `pages/ConnectShare/hooks/connectShareActions.ts:7`<br>`pages/ConnectShare/hooks/connectShareActions.ts:20`<br>`pages/ConnectShare/hooks/connectShareActions.ts:35` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetShareAttributes | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper | 13 | `platform/bootstrap/appStartSteps.ts:106`<br>`platform/session/userInfo.ts:6`<br>`platform/session/userInfo.ts:29`<br>`platform/session/userInfo.ts:35`<br>`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:22`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:134` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_ShareDetails | 10 | `api/schema.d.ts:1529`<br>`api/openapi.yaml:3104`<br>`api/share/repository.ts:5`<br>`api/share/repository.ts:9`<br>`api/share/types.ts:6`<br>`api/share/mapper.ts:8` |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OnInitializeSharingScreen | 12 | `api/share/repository.ts:6`<br>`api/share/types.ts:6`<br>`api/share/mapper.ts:8`<br>`pages/ConnectShare/mocks.ts:97`<br>`pages/ConnectShare/inputs.ts:1`<br>`pages/ConnectShare/hooks/connectShareState.ts:21` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/ConnectShare/mocks.ts`, `app/src/pages/LegacyShareObject/mocks.ts`).

- Get_ShareDetails: `app/src/pages/ConnectShare/mocks.ts`
