# React code index of UI flow Directory_Photobook

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Photobook
- route: `/UBTConnect/Photobook` inputs=["In_HouseholdId: LongInteger", "In_LocalityId: LongInteger"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/Photobook/PhotobookPage.tsx` (86 lines)
  - `app/src/pages/Photobook/components/PanZoom.tsx` (73 lines)
  - `app/src/pages/Photobook/components/Photobook_Carousel.tsx` (281 lines)
  - `app/src/pages/Photobook/components/Photobook_Gallery.tsx` (248 lines)
  - `app/src/pages/Photobook/components/Photobook_Item.tsx` (127 lines)
  - `app/src/pages/Photobook/components/Photobook_Options_Left.tsx` (109 lines)
  - `app/src/pages/Photobook/components/Photobook_Options_Player.tsx` (76 lines)
  - `app/src/pages/Photobook/components/Photobook_Options_Right.tsx` (143 lines)
  - `app/src/pages/Photobook/components/staticEntities.ts` (36 lines)
  - `app/src/pages/Photobook/hooks/photobookState.ts` (40 lines)
  - `app/src/pages/Photobook/hooks/useHouseholdCaption.ts` (107 lines)
  - `app/src/pages/Photobook/hooks/usePhotobook.ts` (73 lines)
  - `app/src/pages/Photobook/inputs.ts` (20 lines)
  - `app/src/pages/Photobook/mocks.ts` (66 lines)
- tests: `app/src/pages/Photobook/Photobook.test.tsx`, `app/src/pages/Photobook/hooks/photobookState.test.ts`, `app/src/pages/Photobook/hooks/useHouseholdCaption.test.tsx`, `app/src/pages/Photobook/hooks/usePhotobook.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: `api/client/callAction.ts` (167, d2); +2 deeper
  - **api/household**: `api/household/index.ts` (17, d2); +5 deeper
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **app**: 1 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/LayoutRuntimeTop/index.ts` (1, d1), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/LayoutRuntimeTop/LayoutRuntimeTop.tsx` (14, d2)
  - **components/ui**: `components/ui/Carousel/index.ts` (2, d1), `components/ui/EntityLazyImage/index.ts` (2, d1), `components/ui/IconText/index.ts` (2, d1), `components/ui/TouchEvents/index.ts` (2, d1), `components/ui/lib/actions.ts` (307, d1), `components/ui/os/OSList/index.ts` (2, d1), `components/ui/os/OSRadioGroup/index.ts` (1, d1), `components/ui/Carousel/Carousel.tsx` (125, d2), `components/ui/Carousel/types.ts` (1, d2), `components/ui/ConnectBottomSheet/index.ts` (2, d2), `components/ui/CustomContainer/index.ts` (2, d2), `components/ui/EntityLazyImage/EntityLazyImage.tsx` (113, d2), `components/ui/EntityLazyImage/types.ts` (1, d2), `components/ui/Icon/index.ts` (1, d2), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2), `components/ui/SanitizedHtml/index.ts` (1, d2), `components/ui/Skeleton/index.ts` (1, d2), `components/ui/TouchEvents/TouchEvents.tsx` (81, d2), `components/ui/TouchEvents/types.ts` (2, d2) … +4; +28 deeper
  - **legacy/os**: `legacy/os/clientVarNames.ts` (39, d2), `legacy/os/os-exceptions.ts` (205, d2); +1 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/sanitizeHtml.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d1), `lib/ubtConnect/structures.ts` (285, d2)
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/staticEntities.ts` (314, d2); +2 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/structures.ts` (86, d2); +2 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fictional**: `mocks/fictional/directory.ts` (442, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: 13 files at depth 3-4
  - **platform/flags**: `platform/flags/flags.ts` (19, d1), `platform/flags/overrides.ts` (70, d2), `platform/flags/types.ts` (7, d2), `platform/flags/useFlag.ts` (9, d2); +3 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/paths.ts` (27, d2), `platform/navigation/screenTransition.ts` (179, d2); +18 deeper
  - **platform/session**: `platform/session/session.ts` (295, d1), `platform/session/clientVars.ts` (78, d2), `platform/session/machine.ts` (133, d2), `platform/session/userInfo.ts` (46, d2); +6 deeper
  - **platform/settings**: `platform/settings/index.ts` (11, d2); +2 deeper
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2), `platform/storage/storage.ts` (62, d2); +8 deeper
  - **vendor**: `vendor/panzoom/index.ts` (59, d2); +1 deeper

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Carousel_SetCurrentPosition | 4 | `components/ui/Carousel/provider.ts:351`<br>`components/ui/lib/actions.ts:188`<br>`lib/ubtConnect/actions.ts:535`<br>`pages/Photobook/components/Photobook_Carousel.tsx:64` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetImageCaptions_Photobook | 0 | - |
| GetPhotobookHouseholds | 0 | - |
| GetSkeleton_UI_PhotobookCaption | 2 | `pages/Photobook/mocks.ts:46`<br>`pages/Photobook/hooks/useHouseholdCaption.ts:11` |
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

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Photobook/mocks.ts`).

- GetImageCaptions_Photobook: **no mock handler found**
- GetPhotobookHouseholds: **no mock handler found**
