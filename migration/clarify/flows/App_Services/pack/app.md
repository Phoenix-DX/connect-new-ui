# React code index of UI flow App_Services

Root: `app/src`. Made by app_index.py from pack/meta.json. Line counts are of the file.

## Screen Services
- route: `/UBTConnect/Services` inputs=[]; meta: `MEMBER_ROUTE (member, enforce)`
- page files:
  - `app/src/pages/Services/ServicesPage.tsx` (49 lines)
  - `app/src/pages/Services/components/FavouriteServiceList.tsx` (88 lines)
  - `app/src/pages/Services/components/ServiceDragHandle.tsx` (35 lines)
  - `app/src/pages/Services/components/ServiceIconText.tsx` (35 lines)
  - `app/src/pages/Services/components/ServiceListSection.tsx` (63 lines)
  - `app/src/pages/Services/components/ServicesContent.tsx` (62 lines)
  - `app/src/pages/Services/components/ServicesFooter.tsx` (44 lines)
  - `app/src/pages/Services/components/SortableList.tsx` (52 lines)
  - `app/src/pages/Services/components/SortableList_Draggable.tsx` (39 lines)
  - `app/src/pages/Services/components/SuggestedServiceList.tsx` (96 lines)
  - `app/src/pages/Services/components/serviceRowOptions.ts` (17 lines)
  - `app/src/pages/Services/components/setupList.ts` (217 lines)
  - `app/src/pages/Services/hooks/servicesState.ts` (107 lines)
  - `app/src/pages/Services/hooks/useServices.ts` (120 lines)
  - `app/src/pages/Services/mocks.ts` (78 lines)
  - `app/src/pages/Services/staticEntities.ts` (23 lines)
- tests: `app/src/pages/Services/Services.test.tsx`, `app/src/pages/Services/components/ServicesContent.test.tsx`, `app/src/pages/Services/components/ServicesFooter.test.tsx`, `app/src/pages/Services/hooks/servicesState.test.ts`, `app/src/pages/Services/hooks/useServices.test.tsx`
- imported code by folder: files at import depth 1-2 are listed; deeper files are counted only:
  - **api/client**: `api/client/callAction.ts` (167, d2); +1 deeper
  - **api/image**: 1 files at depth 3-4
  - **api/member**: 1 files at depth 3-4
  - **api/service**: `api/service/index.ts` (4, d2); +5 deeper
  - **app**: 1 files at depth 3-4
  - **components/auth**: 2 files at depth 3-4
  - **components/layout**: `components/layout/index.ts` (4, d1), `components/layout/BlankLayout/BlankLayout.tsx` (50, d2), `components/layout/DetailLayout/DetailLayout.tsx` (130, d2); +2 deeper
  - **components/ui**: `components/ui/ActionButton/index.ts` (2, d1), `components/ui/ButtonLoading/index.ts` (1, d1), `components/ui/ColumnsThree/index.ts` (2, d1), `components/ui/FixedFooter/index.ts` (1, d1), `components/ui/SectionSeparator/index.ts` (1, d1), `components/ui/Skeleton/index.ts` (1, d1), `components/ui/ActionButton/ActionButton.tsx` (63, d2), `components/ui/ActionButton/types.ts` (1, d2), `components/ui/ButtonLoading/ButtonLoading.tsx` (63, d2), `components/ui/ColumnsThree/ColumnsThree.tsx` (57, d2), `components/ui/ColumnsThree/types.ts` (1, d2), `components/ui/CustomContainer/index.ts` (2, d2), `components/ui/CustomText/index.ts` (2, d2), `components/ui/FixedFooter/FixedFooter.tsx` (47, d2), `components/ui/Icon/index.ts` (1, d2), `components/ui/IconText/index.ts` (2, d2), `components/ui/SectionSeparator/SectionSeparator.tsx` (25, d2), `components/ui/Skeleton/Skeleton.tsx` (40, d2), `components/ui/os/OSBlock.tsx` (10, d2); +19 deeper
  - **components/version**: 2 files at depth 3-4
  - **legacy/os**: `legacy/os/clientVarNames.ts` (39, d2), `legacy/os/exceptions.ts` (84, d2), `legacy/os/os-exceptions.ts` (205, d2); +3 deeper
  - **lib/cssText.ts**: 1 files at depth 3-4
  - **lib/jsUtils.ts**: 1 files at depth 3-4
  - **lib/os-wire.ts**: `lib/os-wire.ts` (12, d1)
  - **lib/osDateTime.ts**: 1 files at depth 3-4
  - **lib/ubtConnect**: 2 files at depth 3-4
  - **lib/ubtConnectLibrary**: `lib/ubtConnectLibrary/staticEntities.ts` (314, d1), `lib/ubtConnectLibrary/structures.ts` (335, d1); +1 deeper
  - **lib/ubtConnectUtils**: 3 files at depth 3-4
  - **mocks/contract.ts**: `mocks/contract.ts` (41, d1)
  - **mocks/fixtures.ts**: `mocks/fixtures.ts` (83, d1)
  - **mocks/scenario.ts**: `mocks/scenario.ts` (17, d2)
  - **mocks/scenarioParams.ts**: 1 files at depth 3-4
  - **mocks/store.ts**: `mocks/store.ts` (74, d1)
  - **platform/config**: 1 files at depth 3-4
  - **platform/device**: 2 files at depth 3-4
  - **platform/feedback**: `platform/feedback/bubbleErrors.ts` (34, d1), `platform/feedback/dialogs/index.ts` (23, d1), `platform/feedback/dialogs/BlockPinUnlock.tsx` (103, d2), `platform/feedback/dialogs/CommonUiHost.tsx` (30, d2), `platform/feedback/dialogs/DialogAccessRestrictedActionLegacy.tsx` (31, d2), `platform/feedback/dialogs/PinUnlockContentContainer.tsx` (75, d2), `platform/feedback/dialogs/commonUiBack.ts` (48, d2), `platform/feedback/dialogs/commonUiPresence.ts` (62, d2), `platform/feedback/dialogs/subscription.ts` (27, d2), `platform/feedback/dialogs/useActionConfirmation.ts` (62, d2); +12 deeper
  - **platform/flags**: 1 files at depth 3-4
  - **platform/log**: 1 files at depth 3-4
  - **platform/navigation**: `platform/navigation/paths.ts` (27, d2); +7 deeper
  - **platform/session**: `platform/session/session.ts` (295, d1), `platform/session/clientVars.ts` (78, d2), `platform/session/machine.ts` (133, d2); +8 deeper
  - **platform/settings**: `platform/settings/index.ts` (11, d2); +2 deeper
  - **platform/storage**: `platform/storage/storage.ts` (62, d2)

## Where the app names the OutSystems actions of the flow (word match, tests excluded)

| Action | Hits | Where (first 6) |
|---|---|---|
| Service_ConnectServices_ChangeOrder_Bulk | 5 | `api/schema.d.ts:2362`<br>`api/openapi.yaml:4910`<br>`api/service/repository.ts:38`<br>`api/service/mapper.ts:16`<br>`api/service/mapper.ts:101` |
| Service_ConnectServices_GetByUser | 0 | - |

## Mock handlers and fixtures of the server actions

Mock handlers live in `app/src/mocks/` (shared) and in `app/src/pages/<Screen>/mocks.ts` (per screen: `app/src/pages/Services/mocks.ts`).

- Service_ConnectServices_ChangeOrder_Bulk: `app/src/pages/Services/mocks.ts`
- Service_ConnectServices_GetByUser: **no mock handler found**
