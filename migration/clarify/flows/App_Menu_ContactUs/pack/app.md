# React code index of UI flow App_Menu_ContactUs

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen ContactUsDetails
- route: `/UBTConnect/ContactUsDetails` inputs=["In_ContactSubjectId: Text", "In_ContactSubjectTitle: Text", "In_ListMenuOptionLabel: Text"]; meta: `{ access: 'anonymous', lock: 'enforce' }`
- page files:
  - `app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx` (110 lines)
  - `app/src/pages/ContactUsDetails/components/ContactUsDetailsFooter.tsx` (49 lines)
  - `app/src/pages/ContactUsDetails/components/ContactUsDetailsHeader.tsx` (64 lines)
  - `app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx` (122 lines)
  - `app/src/pages/ContactUsDetails/components/InformationDialog.tsx` (59 lines)
  - `app/src/pages/ContactUsDetails/components/MessageTextArea.tsx` (48 lines)
  - `app/src/pages/ContactUsDetails/components/SubmittedConfirmationDialog.tsx` (46 lines)
  - `app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts` (375 lines)
  - `app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts` (208 lines)
  - `app/src/pages/ContactUsDetails/inputs.ts` (20 lines)
  - `app/src/pages/ContactUsDetails/mocks.ts` (51 lines)
  - `app/src/pages/ContactUsDetails/staticEntities.ts` (29 lines)
- tests: `app/src/pages/ContactUsDetails/components/ContactUsDetailsFooter.test.tsx`, `app/src/pages/ContactUsDetails/components/ContactUsDetailsHeader.test.tsx`, `app/src/pages/ContactUsDetails/components/ContactUsMessageForm.test.tsx`, `app/src/pages/ContactUsDetails/components/SubmittedConfirmationDialog.test.tsx`, `app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.test.ts`, `app/src/pages/ContactUsDetails/hooks/useContactUsDetails.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 1 files at depth 3-4
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/message**: `api/message/index.ts` (45, d2); +6 deeper
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/contact**: `components/contact/ContactPopupByPhone/index.ts` (2, d1), `components/contact/ContactPopupByPhone/ContactPopupByPhone.tsx` (75, d2), `components/contact/ContactPopupByPhone/types.ts` (1, d2); +3 deeper
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/DirectoryDetailSection/index.ts` (1, d1), `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2), `components/layout/DirectoryDetailSection/DirectoryDetailSection.tsx` (51, d2); +4 deeper
  - **components/ui**: `components/ui/ActionButton/index.ts` (2, d1), `components/ui/ButtonLoading/index.ts` (1, d1), `components/ui/CircleButtonWithLabel/index.ts` (2, d1), `components/ui/FixedFooter/index.ts` (1, d1), `components/ui/Icon/index.ts` (1, d1), `components/ui/IconText/index.ts` (2, d1), `components/ui/SectionSeparator/index.ts` (1, d1), `components/ui/Skeleton/index.ts` (1, d1), `components/ui/TextAreaWithCounter/index.ts` (1, d1), `components/ui/os/OSValidation/index.ts` (28, d1), `components/ui/ActionButton/ActionButton.tsx` (63, d2), `components/ui/ActionButton/types.ts` (1, d2), `components/ui/ButtonLoading/ButtonLoading.tsx` (63, d2), `components/ui/CircleButtonWithLabel/CircleButtonWithLabel.tsx` (73, d2), `components/ui/CircleButtonWithLabel/types.ts` (1, d2), `components/ui/Dialog/index.ts` (10, d2), `components/ui/FixedFooter/FixedFooter.tsx` (47, d2), `components/ui/Icon/Icon.tsx` (47, d2), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2) … +5; +30 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/clientVarNames.ts` (39, d2), `legacy/os/os-exceptions.ts` (205, d2); +7 deeper
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: 2 files at depth 3-4
  - **lib/navigationEvent.ts**: `lib/navigationEvent.ts` (30, d1)
  - **lib/os-assets.manifest.json**: `lib/os-assets.manifest.json` (78, d2)
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d1)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 4 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +7 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/paths.ts` (27, d2), `platform/navigation/screenTransition.ts` (179, d2); +18 deeper
  - **platform/session**: `platform/session/UserInfoCache/index.ts` (2, d1), `platform/session/pin.ts` (70, d1), `platform/session/session.ts` (295, d1), `platform/session/UserInfoCache/UserInfoCache.tsx` (32, d2), `platform/session/UserInfoCache/types.ts` (1, d2), `platform/session/clientVars.ts` (78, d2), `platform/session/machine.ts` (133, d2); +9 deeper
  - **platform/settings**: `platform/settings/index.ts` (11, d2); +2 deeper
  - **platform/storage**: `platform/storage/storage.ts` (62, d2); +1 deeper

## Screen ContactUsMenu
- route: `/UBTConnect/ContactUsMenu` inputs=[]; meta: `{ access: 'anonymous', lock: 'enforce' }`
- page files:
  - `app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx` (67 lines)
  - `app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts` (112 lines)
  - `app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts` (53 lines)
  - `app/src/pages/ContactUsMenu/staticEntities.ts` (27 lines)
- tests: `app/src/pages/ContactUsMenu/ContactUsMenu.test.tsx`, `app/src/pages/ContactUsMenu/hooks/contactUsMenuState.test.ts`, `app/src/pages/ContactUsMenu/hooks/useContactUsMenu.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **app**: 1 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +2 deeper
  - **components/menu**: `components/menu/MenuList/index.ts` (2, d2); +2 deeper
  - **components/ui**: 12 files at depth 3-4
  - **legacy/os**: `legacy/os/clientVarNames.ts` (39, d2); +2 deeper
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 1 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 13 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/paths.ts` (27, d2), `platform/navigation/screenTransition.ts` (179, d2); +18 deeper
  - **platform/session**: `platform/session/pin.ts` (70, d1), `platform/session/session.ts` (295, d1), `platform/session/clientVars.ts` (78, d2), `platform/session/machine.ts` (133, d2); +3 deeper
  - **platform/settings**: `platform/settings/index.ts` (11, d2); +2 deeper
  - **platform/storage**: `platform/storage/storage.ts` (62, d2)

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| ExitApplicationForWebViewUpdate | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_ContactUsFormDescription | 2 | `pages/ContactUsDetails/hooks/contactUsDetailsState.ts:80`<br>`pages/ContactUsDetails/hooks/contactUsDetailsState.ts:215` |
| Get_ContactUsMenuSections | 3 | `pages/ContactUsMenu/hooks/useContactUsMenu.ts:16`<br>`pages/ContactUsMenu/hooks/useContactUsMenu.ts:34`<br>`pages/ContactUsMenu/hooks/contactUsMenuState.ts:87` |
| Get_Core_CountriesNames | 0 | - |
| Get_Core_LocalityTimezone | 0 | - |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_LookupContactUsMenu | 2 | `pages/ContactUsMenu/hooks/contactUsMenuState.ts:60`<br>`pages/ContactUsDetails/hooks/contactUsDetailsState.ts:81` |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| SendContactUsMessage | 12 | `api/message/repository.ts:110`<br>`api/message/types.ts:58`<br>`api/message/types.ts:83`<br>`api/message/mapper.ts:40`<br>`api/message/mapper.ts:42`<br>`api/message/mapper.ts:134` |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/ContactUsDetails/mocks.ts`).

- Get_Core_CountriesNames: **no mock handler found**
- Get_Core_LocalityTimezone: **no mock handler found**
- SendContactUsMessage: `app/src/pages/ContactUsDetails/mocks.ts`
