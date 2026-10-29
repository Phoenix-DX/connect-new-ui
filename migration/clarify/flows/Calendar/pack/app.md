# React code index of UI flow Calendar

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen MyCalendar
- **not built**: no folder `app/src/pages/MyCalendar` (check the board for the decision)

## Screen MyEntertaining
- route: `/UBTConnect/MyEntertaining` inputs=["MyCalendarEventSourceId: Text"]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/MyEntertaining/MyEntertainingPage.tsx` (54 lines)
  - `app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.tsx` (209 lines)
  - `app/src/pages/MyEntertaining/components/MyEntertaining_Embedded.tsx` (33 lines)
  - `app/src/pages/MyEntertaining/components/connect2Entertaining.ts` (98 lines)
  - `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.ts` (35 lines)
  - `app/src/pages/MyEntertaining/hooks/useMyEntertaining.ts` (56 lines)
  - `app/src/pages/MyEntertaining/inputs.ts` (12 lines)
  - `app/src/pages/MyEntertaining/mocks.ts` (16 lines)
  - `app/src/pages/MyEntertaining/staticEntities.ts` (7 lines)
- tests: `app/src/pages/MyEntertaining/MyEntertaining.test.tsx`, `app/src/pages/MyEntertaining/components/Embedded_MyEntertaining.test.tsx`, `app/src/pages/MyEntertaining/components/MyEntertaining_Embedded.test.tsx`, `app/src/pages/MyEntertaining/hooks/useEntertainingCalendar.test.tsx`, `app/src/pages/MyEntertaining/hooks/useMyEntertaining.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/entertaining**: `api/entertaining/index.ts` (4, d1), `api/entertaining/hooks.ts` (20, d2), `api/entertaining/keys.ts` (7, d2), `api/entertaining/repository.ts` (29, d2), `api/entertaining/types.ts` (20, d2); +1 deeper
  - **api/image**: `api/image/index.ts` (2, d2); +2 deeper
  - **api/locality**: 5 files at depth 3-4
  - **api/schema.d.ts**: 1 files at depth 3-4
  - **app**: 1 files at depth 3-4
  - **components/layout**: `components/layout/CommonUiLayout/index.ts` (1, d1), `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/CommonUiLayout/CommonUiLayout.tsx` (86, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +2 deeper
  - **components/ui**: `components/ui/LazyImage/index.ts` (2, d1), `components/ui/Skeleton/index.ts` (1, d1), `components/ui/os/OSBlock.tsx` (10, d1), `components/ui/LazyImage/LazyImage.tsx` (148, d2), `components/ui/LazyImage/types.ts` (6, d2), `components/ui/Skeleton/Skeleton.tsx` (40, d2), `components/ui/lib/actions.ts` (307, d2); +14 deeper
  - **legacy/os**: `legacy/os/os-exceptions.ts` (205, d2); +1 deeper
  - **lib/jsUtils.ts**: `lib/jsUtils.ts` (81, d2)
  - **lib/os-assets.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d2)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnectLibrary**: 3 files at depth 3-4
  - **lib/ubtConnectUtils**: `lib/ubtConnectUtils/actions.ts` (383, d1), `lib/ubtConnectUtils/staticEntities.ts` (190, d2), `lib/ubtConnectUtils/structures.ts` (86, d2)
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/index.ts` (27, d2), `platform/feedback/pageRedirect.ts` (5, d2); +20 deeper
  - **platform/flags**: `platform/flags/index.ts` (9, d2); +8 deeper
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: 23 files at depth 3-4
  - **platform/session**: `platform/session/session.ts` (295, d2); +7 deeper
  - **platform/settings**: 3 files at depth 3-4
  - **platform/storage**: 1 files at depth 3-4

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| AddEventsToDayList | 0 | - |
| CopyClassesAcrossPortal | 10 | `components/ui/Dialog/Dialog.tsx:34`<br>`components/ui/Dialog/Dialog.tsx:55`<br>`pages/ViewDocuments/components/LoadingSpinner.tsx:17`<br>`pages/EventBooklet/components/BookletPopup.tsx:9`<br>`pages/OrbitAdminEventDetail/components/OrbitErrorMessage.tsx:18`<br>`pages/OrbitAdminEventDetail/components/AdminPopup.tsx:12` |
| ExitApplicationForWebViewUpdate | 0 | - |
| FillDaysAfter | 0 | - |
| FillDaysAfter_ExtraRow | 0 | - |
| FillDaysBefore | 0 | - |
| GetAbbreviatedMonthNameList | 0 | - |
| GetCalendarItems | 0 | - |
| GetCalendarItemsDays | 0 | - |
| GetCalendarItemsMonth | 0 | - |
| GetCalendarItemsWeeks | 0 | - |
| GetDateListKeyByDate | 0 | - |
| GetEventsByCacheKeys | 0 | - |
| GetFirstDayOfTheWeek | 0 | - |
| GetLookup_CalendarEventSource | 0 | - |
| GetMonthCacheKey | 0 | - |
| GetMonthView | 0 | - |
| GetStandardMonth | 0 | - |
| GetStandardWeek | 0 | - |
| GetURLFromEventDataURL | 1 | `platform/session/resume.ts:13` |
| GetVisibleCalendarElement | 0 | - |
| GetWeekView | 0 | - |
| Get_CalendarEventSourceConfiguration | 0 | - |
| Get_CalendarViewOptions | 0 | - |
| Get_FilteredCacheKeyByDateAndEventSources | 0 | - |
| Get_IsUnsupportedSystem | 3 | `platform/feedback/dialogs/BlockPinUnlock.tsx:17`<br>`lib/ubtConnect/unsupportedVersion.ts:29`<br>`pages/Login/hooks/useLogin.ts:16` |
| Get_IsUnsupportedVersion | 4 | `components/version/UnsupportedVersionWrapper/UnsupportedVersionWrapper.tsx:24`<br>`lib/ubtConnect/unsupportedVersion.ts:7`<br>`lib/ubtConnect/unsupportedVersion.ts:17`<br>`lib/ubtConnect/unsupportedVersion.ts:30` |
| Get_MonthSelector_IsMonthValid | 0 | - |
| IsItemBelowMinimumDate | 0 | - |
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

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/MyEntertaining/mocks.ts`).

- GetEventsByCacheKeys: **no mock handler found**
- Get_CalendarViewOptions: **no mock handler found**
