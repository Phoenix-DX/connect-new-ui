# React code index of UI flow Directory_Locality

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen BrowseCountries
- route: `/UBTConnect/BrowseCountries` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/BrowseCountries/BrowseCountriesPage.tsx` (37 lines)
  - `app/src/pages/BrowseCountries/hooks/browseCountriesState.ts` (73 lines)
  - `app/src/pages/BrowseCountries/hooks/useBrowseCountries.ts` (90 lines)
  - `app/src/pages/BrowseCountries/mocks.ts` (9 lines)
- tests: `app/src/pages/BrowseCountries/BrowseCountries.test.tsx`, `app/src/pages/BrowseCountries/hooks/browseCountriesState.test.ts`, `app/src/pages/BrowseCountries/hooks/useBrowseCountries.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: 2 files at depth 3-4
  - **api/country**: `api/country/index.ts` (17, d2); +5 deeper
  - **api/image**: `api/image/index.ts` (2, d2); +2 deeper
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/directory**: `components/directory/StatisticsList/index.ts` (2, d2); +3 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +6 deeper
  - **components/ui**: `components/ui/lib/actions.ts` (307, d2); +17 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +5 deeper
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d2)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d2); +2 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d2); +2 deeper
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d1), `lib/ubtConnectUtils/staticEntities.ts` (190, d2), `lib/ubtConnectUtils/structures.ts` (86, d2)
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2), `platform/feedback/index.ts` (27, d2), `platform/feedback/pageRedirect.ts` (5, d2); +12 deeper
  - **platform/flags**: `platform/flags/index.ts` (9, d2); +8 deeper
  - **platform/log**: `platform/log/log.ts` (56, d2)
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +19 deeper
  - **platform/session**: `platform/session/session.ts` (295, d2), `platform/session/userInfo.ts` (46, d2); +13 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Screen BrowseDirectory
- route: `/UBTConnect/BrowseDirectory` inputs=["CountryCode: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/BrowseDirectory/BrowseDirectoryPage.tsx` (150 lines)
  - `app/src/pages/BrowseDirectory/hooks/browseDirectoryState.ts` (124 lines)
  - `app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.ts` (160 lines)
  - `app/src/pages/BrowseDirectory/inputs.ts` (12 lines)
  - `app/src/pages/BrowseDirectory/mocks.ts` (11 lines)
  - `app/src/pages/BrowseDirectory/staticEntities.ts` (6 lines)
- tests: `app/src/pages/BrowseDirectory/BrowseDirectory.test.tsx`, `app/src/pages/BrowseDirectory/hooks/browseDirectoryState.test.ts`, `app/src/pages/BrowseDirectory/hooks/useBrowseDirectory.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 6 files at depth 3-4
  - **api/client**: 2 files at depth 3-4
  - **api/image**: 1 files at depth 3-4
  - **api/locality**: `api/locality/index.ts` (30, d2); +5 deeper
  - **api/member**: 1 files at depth 3-4
  - **api/update**: 5 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/directory**: `components/directory/StatisticsList/index.ts` (2, d1), `components/directory/DirectoryMap/index.ts` (2, d2), `components/directory/StatisticsList/StatisticsList.tsx` (172, d2), `components/directory/StatisticsList/types.ts` (2, d2); +5 deeper
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/BrowseSection/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/BrowseSection/BrowseSection.tsx` (26, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +6 deeper
  - **components/ui**: `components/ui/Icon/index.ts` (1, d1), `components/ui/IconText/index.ts` (2, d1), `components/ui/Skeleton/index.ts` (1, d1), `components/ui/Icon/Icon.tsx` (47, d2), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2), `components/ui/Skeleton/Skeleton.tsx` (40, d2); +27 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: 5 files at depth 3-4
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: 4 files at depth 3-4
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d2), `lib/ubtConnect/staticEntities.ts` (205, d2); +2 deeper
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +7 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/index.ts` (26, d1), `platform/navigation/DialogExitConfirmation.tsx` (63, d2), `platform/navigation/NavigationHost.tsx` (62, d2), `platform/navigation/ScreenFrame.tsx` (31, d2), `platform/navigation/ScreenTransitionGroup.tsx` (302, d2), `platform/navigation/flowState.ts` (140, d2), `platform/navigation/screenTransition.ts` (179, d2); +19 deeper
  - **platform/session**: 11 files at depth 3-4
  - **platform/storage**: 9 files at depth 3-4

## Screen CountryDetails
- route: `/UBTConnect/CountryDetails` inputs=["CountryCode: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/CountryDetails/CountryDetailsPage.tsx` (92 lines)
  - `app/src/pages/CountryDetails/components/CountryDetailsContent.tsx` (286 lines)
  - `app/src/pages/CountryDetails/components/staticEntities.ts` (11 lines)
  - `app/src/pages/CountryDetails/hooks/countryDetailsState.ts` (86 lines)
  - `app/src/pages/CountryDetails/hooks/useCountryDetails.ts` (241 lines)
  - `app/src/pages/CountryDetails/inputs.ts` (14 lines)
  - `app/src/pages/CountryDetails/mocks.ts` (11 lines)
- tests: `app/src/pages/CountryDetails/CountryDetails.test.tsx`, `app/src/pages/CountryDetails/components/CountryDetailsContent.test.tsx`, `app/src/pages/CountryDetails/hooks/countryDetailsState.test.ts`, `app/src/pages/CountryDetails/hooks/useCountryDetails.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: 6 files at depth 3-4
  - **api/client**: 2 files at depth 3-4
  - **api/country**: `api/country/index.ts` (17, d2); +5 deeper
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/update**: 5 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/directory**: `components/directory/DirectoryLegendSheet/index.ts` (2, d1), `components/directory/DirectoryMap/index.ts` (2, d1), `components/directory/StatisticsTypedItem/index.ts` (2, d1), `components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx` (117, d2), `components/directory/DirectoryLegendSheet/types.ts` (2, d2), `components/directory/DirectoryMap/DirectoryMap.tsx` (229, d2), `components/directory/DirectoryMap/types.ts` (8, d2), `components/directory/StatisticsTypedItem/StatisticsTypedItem.tsx` (105, d2), `components/directory/StatisticsTypedItem/types.ts` (2, d2); +3 deeper
  - **components/filter**: 3 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/BrowseSection/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/BrowseSection/BrowseSection.tsx` (26, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2); +9 deeper
  - **components/ui**: `components/ui/IconText/index.ts` (2, d1), `components/ui/Input/index.ts` (2, d1), `components/ui/Skeleton/index.ts` (1, d1), `components/ui/os/OSList/index.ts` (2, d1), `components/ui/IconText/IconText.tsx` (70, d2), `components/ui/IconText/types.ts` (1, d2), `components/ui/Input/Input.tsx` (221, d2), `components/ui/Input/types.ts` (1, d2), `components/ui/Skeleton/Skeleton.tsx` (40, d2), `components/ui/os/OSList/OSList.tsx` (232, d2), `components/ui/os/OSList/OSListItem.tsx` (129, d2); +37 deeper
  - **components/version**: 2 files at depth 3-4
  - **containers/DetailLayout**: `containers/DetailLayout/index.ts` (1, d1), `containers/DetailLayout/DetailLayoutContainer.tsx` (70, d2)
  - **containers/FilterSheet**: `containers/FilterSheet/index.ts` (1, d1), `containers/FilterSheet/FilterSheetContainer.tsx` (72, d2)
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d2); +10 deeper
  - **lib/geography**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d2)
  - **lib/leaflet**: `lib/leaflet/actions.ts` (522, d1); +3 deeper
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d2), `lib/ubtConnect/staticEntities.ts` (205, d2), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/flowErrors.ts` (17, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +6 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 23 files at depth 3-4
  - **platform/session**: 15 files at depth 3-4
  - **platform/storage**: 9 files at depth 3-4

## Screen CountryList
- route: `/UBTConnect/CountryList` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/CountryList/CountryListPage.tsx` (74 lines)
  - `app/src/pages/CountryList/components/CountryListContent.tsx` (203 lines)
  - `app/src/pages/CountryList/components/staticEntities.ts` (3 lines)
  - `app/src/pages/CountryList/hooks/countryListState.ts` (103 lines)
  - `app/src/pages/CountryList/hooks/useCountryList.ts` (166 lines)
  - `app/src/pages/CountryList/mocks.ts` (9 lines)
- tests: `app/src/pages/CountryList/CountryList.test.tsx`, `app/src/pages/CountryList/components/CountryListContent.test.tsx`, `app/src/pages/CountryList/hooks/countryListState.test.ts`, `app/src/pages/CountryList/hooks/useCountryList.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: 2 files at depth 3-4
  - **api/country**: `api/country/index.ts` (17, d2); +5 deeper
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **components/auth**: 2 files at depth 3-4
  - **components/directory**: `components/directory/DirectoryLegendSheet/index.ts` (2, d1), `components/directory/StatisticsTypedItem/index.ts` (2, d1), `components/directory/DirectoryLegendSheet/DirectoryLegendSheet.tsx` (117, d2), `components/directory/DirectoryLegendSheet/types.ts` (2, d2), `components/directory/StatisticsTypedItem/StatisticsTypedItem.tsx` (105, d2), `components/directory/StatisticsTypedItem/types.ts` (2, d2); +3 deeper
  - **components/feed**: `components/feed/CommunityPopulation/index.ts` (1, d1), `components/feed/CommunityPopulation/CommunityPopulation.tsx` (58, d2)
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/MainLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/MainLayout/MainLayout.tsx` (171, d2); +6 deeper
  - **components/notification**: `components/notification/NotificationIcon/index.ts` (1, d1), `components/notification/NotificationIcon/NotificationIcon.tsx` (45, d2); +2 deeper
  - **components/ui**: `components/ui/ColumnsTwo/index.ts` (2, d1), `components/ui/CustomText/index.ts` (2, d1), `components/ui/EntityLazyImage/index.ts` (2, d1), `components/ui/Icon/index.ts` (1, d1), `components/ui/StaticInput/index.ts` (1, d1), `components/ui/os/OSList/index.ts` (2, d1), `components/ui/ColumnsTwo/ColumnsTwo.tsx` (54, d2), `components/ui/ColumnsTwo/types.ts` (1, d2), `components/ui/CustomText/CustomText.tsx` (68, d2), `components/ui/CustomText/types.ts` (1, d2), `components/ui/EntityLazyImage/EntityLazyImage.tsx` (113, d2), `components/ui/EntityLazyImage/types.ts` (1, d2), `components/ui/Icon/Icon.tsx` (47, d2), `components/ui/StaticInput/StaticInput.tsx` (38, d2), `components/ui/lib/staticEntities.ts` (67, d2), `components/ui/os/OSList/OSList.tsx` (232, d2), `components/ui/os/OSList/OSListItem.tsx` (129, d2); +44 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/exceptions.ts` (84, d1), `legacy/os/os-exceptions.ts` (205, d2); +7 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/os-assets.manifest.json**: 1 files at depth 3-4
  - **lib/os-assets.ts**: `lib/os-assets.ts` (11, d2)
  - **lib/os-wire.ts**: 1 files at depth 3-4
  - **lib/osDateTime.ts**: `lib/osDateTime.ts` (67, d2)
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d2), `lib/ubtConnect/structures.ts` (285, d2); +1 deeper
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/actions.ts` (916, d1), `lib/ubtConnectLibrary/staticEntities.ts` (314, d2), `lib/ubtConnectLibrary/structures.ts` (335, d2)
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2), `lib/ubtConnectUtils/structures.ts` (86, d2); +1 deeper
  - **mocks/fictional**: 1 files at depth 3-4
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +12 deeper
  - **platform/flags**: 7 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/osNavigate.ts` (155, d2), `platform/navigation/screenTransition.ts` (179, d2); +12 deeper
  - **platform/session**: `platform/session/UserInfoCache/index.ts` (2, d1), `platform/session/UserInfoCache/types.ts` (1, d1), `platform/session/useNotificationIcon.ts` (47, d1), `platform/session/UserInfoCache/UserInfoCache.tsx` (32, d2), `platform/session/resume.ts` (34, d2), `platform/session/userInfo.ts` (46, d2); +13 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: `platform/storage/localEntities/index.ts` (130, d2); +9 deeper

## Screen Locality_Details
- route: `/UBTConnect/Locality_Details` inputs=["LocalityId: LongInteger", "PreloadedLocalityLabel: Text"]; meta: `{ access: 'anonymous', lock: 'enforce' }`
- page files:
  - `app/src/pages/Locality_Details/Locality_DetailsPage.tsx` (226 lines)
  - `app/src/pages/Locality_Details/components/Directory_Interchange_StatisticsList.tsx` (96 lines)
  - `app/src/pages/Locality_Details/components/Household_Card.tsx` (100 lines)
  - `app/src/pages/Locality_Details/components/Locality_DateTimeLabel.tsx` (29 lines)
  - `app/src/pages/Locality_Details/components/Locality_Households.tsx` (103 lines)
  - `app/src/pages/Locality_Details/components/Locality_Households_HouseholdList.tsx` (76 lines)
  - `app/src/pages/Locality_Details/components/Locality_Interchange.tsx` (29 lines)
  - `app/src/pages/Locality_Details/components/Locality_OneSchoolGlobal.tsx` (65 lines)
  - `app/src/pages/Locality_Details/components/Locality_Subdivisions.tsx` (88 lines)
  - `app/src/pages/Locality_Details/components/OneSchoolGlobal_List.tsx` (103 lines)
  - `app/src/pages/Locality_Details/components/StopPropagationHelper.tsx` (24 lines)
  - `app/src/pages/Locality_Details/components/SubHeader_MainPages.tsx` (68 lines)
  - `app/src/pages/Locality_Details/components/Timer.tsx` (31 lines)
  - `app/src/pages/Locality_Details/components/UBT_LazyImage_List.tsx` (88 lines)
  - `app/src/pages/Locality_Details/components/actions.ts` (123 lines)
  - `app/src/pages/Locality_Details/components/staticEntities.ts` (27 lines)
  - `app/src/pages/Locality_Details/hooks/localityBlocksState.ts` (283 lines)
  - `app/src/pages/Locality_Details/hooks/localityDetailsState.ts` (147 lines)
  - `app/src/pages/Locality_Details/hooks/readyOnce.ts` (27 lines)
  - `app/src/pages/Locality_Details/hooks/useHouseholdCardMembers.ts` (53 lines)
  - `app/src/pages/Locality_Details/hooks/useLocalityDetails.ts` (169 lines)
  - `app/src/pages/Locality_Details/hooks/useLocalityHouseholdList.ts` (96 lines)
  - `app/src/pages/Locality_Details/hooks/useLocalityInterchange.ts` (79 lines)
  - `app/src/pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts` (78 lines)
  - `app/src/pages/Locality_Details/hooks/useLocalitySubdivisions.ts` (97 lines)
  - `app/src/pages/Locality_Details/inputs.ts` (16 lines)
  - `app/src/pages/Locality_Details/mocks.ts` (137 lines)
- tests: `app/src/pages/Locality_Details/Locality_Details.test.tsx`, `app/src/pages/Locality_Details/hooks/localityBlocksState.test.ts`, `app/src/pages/Locality_Details/hooks/localityDetailsState.test.ts`, `app/src/pages/Locality_Details/hooks/useLocalityDetails.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/bookmark**: `api/bookmark/index.ts` (16, d2); +5 deeper
  - **api/client**: 3 files at depth 3-4
  - **api/household**: `api/household/index.ts` (17, d2); +5 deeper
  - **api/image**: 3 files at depth 3-4
  - **api/locality**: 5 files at depth 3-4
  - **api/member**: 6 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **api/update**: `api/update/index.ts` (13, d2); +5 deeper
  - **app**: `app/routes.generated.ts` (89, d2)
  - **components/contact**: `components/contact/ContactByMessage/index.ts` (2, d2), `components/contact/ContactPopupByPhone/index.ts` (2, d2); +9 deeper
  - **components/directory**: `components/directory/DirectoryEmptyState/index.ts` (2, d1), `components/directory/SupperMeetingCardContent/index.ts` (2, d1), `components/directory/DirectoryEmptyState/DirectoryEmptyState.tsx` (39, d2), `components/directory/DirectoryEmptyState/types.ts` (2, d2), `components/directory/StatisticsListItem/index.ts` (2, d2), `components/directory/SupperMeetingCardContent/SupperMeetingCardContent.tsx` (54, d2), `components/directory/SupperMeetingCardContent/types.ts` (1, d2); +8 deeper
  - **components/household**: 1 files at depth 3-4
  - **components/layout**: `components/layout/BottomBar/index.ts` (1, d1), `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/MainLayout/index.ts` (1, d1), `components/layout/BottomBar/BottomBar.tsx` (167, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/MainLayout/MainLayout.tsx` (171, d2); +6 deeper
  - **components/note**: `components/note/NotesSheet/index.ts` (2, d2); +5 deeper
  - **components/share**: `components/share/SharePopup/index.ts` (2, d2), `components/share/ShareableObject/index.ts` (2, d2); +4 deeper
  - **components/ui**: `components/ui/ColumnsTwo/index.ts` (2, d1), `components/ui/ComingSoon/index.ts` (2, d1), `components/ui/EntityLazyImage/index.ts` (2, d1), `components/ui/EntityLazyImage/mocks.ts` (60, d1), `components/ui/HorizontalTagList/index.ts` (2, d1), `components/ui/Icon/index.ts` (1, d1), `components/ui/ImageCard/index.ts` (2, d1), `components/ui/ImageCardContent/index.ts` (2, d1), `components/ui/StaticInput/index.ts` (1, d1), `components/ui/os/OSList/index.ts` (2, d1), `components/ui/ActionsMenu/index.ts` (2, d2), `components/ui/ColumnsTwo/ColumnsTwo.tsx` (54, d2), `components/ui/ColumnsTwo/types.ts` (1, d2), `components/ui/ComingSoon/ComingSoon.tsx` (28, d2), `components/ui/ComingSoon/types.ts` (1, d2), `components/ui/EntityLazyImage/EntityLazyImage.tsx` (113, d2), `components/ui/EntityLazyImage/types.ts` (1, d2), `components/ui/HorizontalTagList/HorizontalTagList.tsx` (84, d2), `components/ui/HorizontalTagList/types.ts` (1, d2), `components/ui/Icon/Icon.tsx` (47, d2) … +8; +42 deeper
  - **containers/EntityDetailsActions**: `containers/EntityDetailsActions/EntityDetailsActionsContainer.tsx` (209, d1), `containers/EntityDetailsActions/useEntityDetailsActions.ts` (344, d2); +3 deeper
  - **containers/HouseholdDetails**: `containers/HouseholdDetails/HouseholdDetailsContainer.tsx` (147, d2), `containers/HouseholdDetails/hooks/useHouseholdDetails.ts` (253, d2); +1 deeper
  - **containers/NoteListActions**: 1 files at depth 3-4
  - **containers/ShareSheet**: `containers/ShareSheet/index.ts` (2, d2); +5 deeper
  - **containers/SupperMeetingDetails**: `containers/SupperMeetingDetails/SupperMeetingDetailsContainer.tsx` (52, d2), `containers/SupperMeetingDetails/hooks/useSupperMeetingDetails.ts` (130, d2); +1 deeper
  - **containers/index.ts**: `containers/index.ts` (15, d1)
  - **legacy/os**: `legacy/os/reviewMarkers.ts` (19, d2); +3 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/geography**: `lib/geography/structures.ts` (28, d2)
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/leaflet**: `lib/leaflet/json.ts` (265, d2), `lib/leaflet/structures.ts` (192, d2); +2 deeper
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d2)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: `lib/ubtConnect/actions.ts` (544, d1), `lib/ubtConnect/staticEntities.ts` (205, d2), `lib/ubtConnect/structures.ts` (285, d2)
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d2), `lib/ubtConnectUtils/staticEntities.ts` (190, d2); +1 deeper
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d2)
  - **mocks/fictional**: `mocks/fictional/directory.ts` (442, d1)
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: 1 files at depth 3-4
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/NotCaptured.tsx` (15, d1), `platform/feedback/dialogs/subscription.ts` (27, d1), `platform/feedback/dialogs/confirmAction.ts` (21, d2); +19 deeper
  - **platform/flags**: `platform/flags/flags.ts` (19, d1); +7 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/paths.ts` (27, d1), `platform/navigation/index.ts` (26, d2); +20 deeper
  - **platform/session**: `platform/session/userInfo.ts` (46, d2); +10 deeper
  - **platform/settings**: 1 files at depth 3-4
  - **platform/storage**: 10 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddBookmark2 | 11 | `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`<br>`lib/ubtConnect/staticEntities.ts:145`<br>`lib/ubtConnect/actions.ts:270`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/types.ts:200`<br>`api/bookmark/mapper.ts:35` |
| App_CommonFilter_CheckCountry | 1 | `lib/ubtConnect/actions.ts:136` |
| App_CommonFilter_DefineOptionNames | 1 | `lib/ubtConnect/actions.ts:122` |
| DeleteBookmarkByBookmarkId2 | 7 | `lib/ubtConnect/actions.ts:267`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:186`<br>`api/schema.d.ts:2226`<br>`api/openapi.yaml:4570`<br>`containers/EntityDetailsActions/mocks.ts:20` |
| Directory_Updates_RefreshBottomBarCount | 4 | `platform/session/testSession.ts:79`<br>`components/layout/BottomBar/BottomBar.tsx:66`<br>`components/layout/BottomBar/BottomBar.tsx:75`<br>`lib/ubtConnect/actions.ts:62` |
| ExitApplicationForWebViewUpdate | 0 | - |
| GetBookmarkCategoryId_ByEntityTypeId | 2 | `lib/ubtConnect/actions.ts:212`<br>`containers/EntityDetailsActions/useEntityDetailsActions.ts:136` |
| GetHouseholdCoordinates | 12 | `mocks/fictional/ldm.ts:235`<br>`mocks/fictional/ldm.ts:493`<br>`api/schema.d.ts:798`<br>`api/household/repository.ts:122`<br>`api/household/repository.ts:124`<br>`api/household/mapper.ts:236` |
| GetHouseholdDetails | 8 | `api/schema.d.ts:560`<br>`api/household/repository.ts:135`<br>`api/household/types.ts:215`<br>`api/household/mapper.ts:250`<br>`api/household/mapper.ts:253`<br>`api/openapi.yaml:1129` |
| GetHouseholdList_ByLocalityId | 0 | - |
| GetInterchangeList_ByLocalityId | 0 | - |
| GetLocal_Bookmark | 4 | `platform/session/testSession.ts:101`<br>`pages/Locality_Details/components/actions.ts:48`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:64`<br>`pages/Locality_Details/hooks/useLocalityHouseholdList.ts:43` |
| GetLocal_Bookmark_C2 | 2 | `pages/Locality_Details/Locality_DetailsPage.tsx:56`<br>`pages/Locality_Details/hooks/useLocalityHouseholdList.ts:18` |
| GetNameAndSurname_ByFullName | 5 | `lib/jsUtils.ts:59`<br>`lib/ubtConnect/actions.ts:198`<br>`pages/LDM_MyEvents_V2/LDM_MyEvents_V2Page.tsx:19`<br>`pages/LDM_EventDetail_V2/LDM_EventDetail_V2Page.tsx:24`<br>`pages/AssembleDetail/AssembleDetailPage.tsx:39` |
| GetNotesByItemId | 0 | - |
| GetSample_FilterTags | 5 | `pages/Locality_Details/Locality_DetailsPage.tsx:59`<br>`pages/Locality_Details/components/actions.ts:19`<br>`pages/Locality_Details/hooks/localityDetailsState.ts:55`<br>`pages/Locality_Details/hooks/localityDetailsState.ts:76`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:23` |
| GetShareType_FromEntity | 1 | `lib/ubtConnect/actions.ts:177` |
| GetSkeletonList_UI_CommunityBusinessContactCard | 0 | - |
| GetSkeletonList_UI_CountryStatistics | 3 | `pages/BrowseCountries/hooks/browseCountriesState.ts:23`<br>`pages/BrowseCountries/hooks/browseCountriesState.ts:47`<br>`pages/CountryList/hooks/countryListState.ts:88` |
| GetSkeletonList_UI_HouseholdMembers | 1 | `lib/ubtConnect/actions.ts:360` |
| GetSkeletonList_UI_LocalityStatistics | 6 | `components/directory/StatisticsList/StatisticsList.tsx:53`<br>`lib/ubtConnect/actions.ts:478`<br>`pages/CountryDetails/hooks/countryDetailsState.ts:25`<br>`pages/CountryDetails/hooks/useCountryDetails.ts:116`<br>`pages/BrowseDirectory/hooks/browseDirectoryState.ts:29`<br>`pages/BrowseDirectory/hooks/browseDirectoryState.ts:65` |
| GetSkeletonList_UI_OneSchoolGlobal_ListCard | 3 | `pages/Locality_Details/components/actions.ts:91`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:234`<br>`pages/Locality_Details/hooks/useLocalityOneSchoolGlobal.ts:34` |
| GetSkeletonList_UI_SubdivisionCard | 3 | `pages/Locality_Details/components/actions.ts:72`<br>`pages/Locality_Details/hooks/localityBlocksState.ts:94`<br>`pages/Locality_Details/hooks/useLocalitySubdivisions.ts:35` |
| GetSkeleton_HouseholdActions | 2 | `lib/ubtConnect/actions.ts:443`<br>`lib/ubtConnect/actions.ts:449` |
| GetSkeleton_UI_CommunityBusinessContactCard | 0 | - |
| GetSkeleton_UI_CommunityBusinessContactCardContent | 0 | - |
| GetSkeleton_UI_CountryStatistics | 3 | `pages/BrowseCountries/hooks/browseCountriesState.ts:29`<br>`pages/BrowseCountries/hooks/browseCountriesState.ts:48`<br>`pages/CountryList/hooks/countryListState.ts:82` |
| GetSkeleton_UI_HouseholdCard | 2 | `lib/ubtConnect/actions.ts:438`<br>`lib/ubtConnect/actions.ts:448` |
| GetSkeleton_UI_HouseholdCardContent | 2 | `lib/ubtConnect/actions.ts:422`<br>`lib/ubtConnect/actions.ts:438` |
| GetSkeleton_UI_HouseholdDetails | 1 | `lib/ubtConnect/actions.ts:448` |
| GetSkeleton_UI_HouseholdMember | 1 | `lib/ubtConnect/actions.ts:352` |
| GetSkeleton_UI_LocalityStatistics | 2 | `lib/ubtConnect/actions.ts:460`<br>`lib/ubtConnect/actions.ts:479` |
| GetSkeleton_UI_OneSchoolGlobal_ListCard | 1 | `pages/Locality_Details/components/actions.ts:77` |
| GetSkeleton_UI_SubdivisionCard | 2 | `lib/ubtConnect/actions.ts:365`<br>`pages/Locality_Details/components/actions.ts:58` |
| GetSkeleton_UI_SubdivisionCardContent | 2 | `lib/ubtConnect/actions.ts:366`<br>`pages/Locality_Details/components/actions.ts:58` |
| GetSubdivisionCardList_ByLocalityId | 0 | - |
| GetSubdivisionLocation_BySubdivisionId | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetUserInformation_Wrapper | 13 | `platform/bootstrap/appStartSteps.ts:106`<br>`platform/session/userInfo.ts:6`<br>`platform/session/userInfo.ts:29`<br>`platform/session/userInfo.ts:35`<br>`legacy/os/cache/UserInfoCacheControl/UserInfoCacheControl.tsx:22`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:134` |
| GetUserInformation_Wrapper_Assign | 2 | `platform/session/UserInfoCache/UserInfoCache.tsx:16`<br>`lib/ubtConnect/actions.ts:115` |
| Get_Core_LocalityTimezone | 0 | - |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_LocalityCommunityBusinessContacts | 0 | - |
| Get_OneSchoolGlobalDetails | 0 | - |
| Get_OneSchoolGlobalListByLocality | 0 | - |
| Get_UI_CommunityNumbers | 0 | - |
| Get_UI_CountryStatistics | 0 | - |
| Get_UI_LocalityDetails | 0 | - |
| Get_UI_LocalityStatistics | 0 | - |
| Get_UI_MembersStatistics | 0 | - |
| Get_UI_UpdateItems_UnreadCount_All | 6 | `platform/session/testSession.ts:78`<br>`lib/ubtConnect/actions.ts:63`<br>`api/update/repository.ts:70`<br>`api/update/mapper.ts:24`<br>`api/schema.d.ts:2277`<br>`api/openapi.yaml:4751` |
| HasAccessToRegion | 13 | `components/assemble/AssembleLocalityFilter/AssembleLocalityFilter.tsx:41`<br>`lib/assemble/actions.ts:137`<br>`lib/ubtConnect/staticEntities.ts:110`<br>`lib/ubtConnect/actions.ts:390`<br>`containers/HouseholdDetails/hooks/useHouseholdDetails.ts:220`<br>`pages/BrowseCountries/hooks/useBrowseCountries.ts:29` |
| Household_GetMembers_Service | 0 | - |
| IsHouseholdDetails_InAncestryModeView | 0 | - |
| Member_ContactDetails_Service | 0 | - |
| OfflineDataSync | 11 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18`<br>`platform/device/OfflineDataSync/OfflineDataSync.tsx:22`<br>`platform/device/OfflineDataSync/index.ts:1`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:22`<br>`components/ui/OfflineDataSyncCore/OfflineDataSyncCore.tsx:25`<br>`components/layout/CommonUiLayout/CommonUiLayout.tsx:22` |
| OfflineDataSyncConfiguration | 1 | `platform/device/OfflineDataSync/OfflineDataSync.tsx:18` |
| OpenGooglePlay_Chrome | 0 | - |
| OpenGooglePlay_UBTConnect | 0 | - |
| OpenGooglePlay_WebView | 0 | - |
| ScrollTop | 6 | `lib/ubtConnect/actions.ts:73`<br>`pages/Locality_Details/hooks/useLocalityDetails.ts:149`<br>`pages/Notes/hooks/useNotes.ts:29`<br>`pages/Assemble_BrowseByCountry/hooks/useAssembleFilter.ts:73`<br>`pages/Notifications/hooks/useNotifications.ts:143`<br>`pages/Updates_SingleList/hooks/useUpdatesSingleList.ts:207` |
| SetResumeLoginLink | 2 | `platform/navigation/OpenLinkOnResume/OpenLinkOnResume.tsx:12`<br>`platform/session/resume.ts:7` |
| ToggleBookmarkItem_C2 | 10 | `platform/storage/localEntities/localBookmarks.ts:18`<br>`lib/ubtConnect/actions.ts:249`<br>`lib/ubtConnect/actions.ts:266`<br>`api/bookmark/repository.ts:108`<br>`api/bookmark/repository.ts:119`<br>`api/bookmark/types.ts:3` |
| Try_GetIsSupportedVersion | 0 | - |
| Upgrade_UBTConnect | 0 | - |
| Upgrade_WebView | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/BrowseCountries/mocks.ts`, `app/src/pages/BrowseDirectory/mocks.ts`, `app/src/pages/CountryDetails/mocks.ts`, `app/src/pages/CountryList/mocks.ts`, `app/src/pages/Locality_Details/mocks.ts`).

- AddBookmark2: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts:39`
- DeleteBookmarkByBookmarkId2: **no mock handler found**
- GetHouseholdCoordinates: `mocks/fictional/ldm.ts:235`, `mocks/fictional/ldm.ts:493`
- GetHouseholdDetails: **no mock handler found**
- GetHouseholdList_ByLocalityId: **no mock handler found**
- GetInterchangeList_ByLocalityId: **no mock handler found**
- GetNotesByItemId: **no mock handler found**
- GetSubdivisionCardList_ByLocalityId: **no mock handler found**
- GetSubdivisionLocation_BySubdivisionId: **no mock handler found**
- Get_Core_LocalityTimezone: **no mock handler found**
- Get_LocalityCommunityBusinessContacts: **no mock handler found**
- Get_OneSchoolGlobalDetails: **no mock handler found**
- Get_OneSchoolGlobalListByLocality: **no mock handler found**
- Get_UI_CommunityNumbers: **no mock handler found**
- Get_UI_CountryStatistics: **no mock handler found**
- Get_UI_LocalityDetails: **no mock handler found**
- Get_UI_LocalityStatistics: **no mock handler found**
- Get_UI_MembersStatistics: **no mock handler found**
- Get_UI_UpdateItems_UnreadCount_All: **no mock handler found**
- Household_GetMembers_Service: **no mock handler found**
- Member_ContactDetails_Service: **no mock handler found**
