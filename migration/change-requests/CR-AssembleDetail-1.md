# CR-AssembleDetail-1: Connect2_LegacyShared GetCacheableSubdivision_V2 (ActionGetBulkSubdivisions_V2)

- **From:** route AssembleDetail (no-capture, built from the compiled code). **Owner:** foundation (`src/api/openapi.yaml`
  via `contract_gen.py`, `app/src/shared/Connect2_LegacyShared/lib/actions.ts`, its `mocks.ts`).
- **Change:** add the server action `Connect2_LegacyShared/ActionGetBulkSubdivisions_V2` (input `CacheKeys`, output
  `Results`: CacheableSubdivisionInformationTextTextRecordList) to the contract, port `GetBulkSubdivision_V2` and
  `GetCacheableSubdivision_V2(SubdivisionId)` (migration/runtime-sources/Connect2_LegacyShared.controller.js:3070-3110,
  :4115-4210, :7691-7702) to `shared/Connect2_LegacyShared/lib/actions.ts`, and mock it on the directory cast
  (`mocks/fictional/directory.ts`, households of the supper meeting).
- **Why:** `AssembleEventDetail_AttendeeSubdivision` OnReady replaces the hall's household list with
  `GetCacheableSubdivision_V2.SubdivisionInformation.HouseholdListResponse` and reads the locality and country code for
  MaybeDisplaySubscriptionPopup (sources/…AttendeeSubdivision.mvc.js:1742-1830). Without it the expanded hall keeps its
  skeleton rows.
- **Route side today:** OnReady stops after BuildSkeletonList and renders `<NotCaptured name="CR-AssembleDetail-1: …">`
  under the rows (Q1, recommendation A). Set_SelectedAssembleAttendeeListBookmarks, which runs after the fetch, is not run.

## Status

Applied (foundation F15, 2026-10-16).

## Resolution

- **Contract:** `migration/contract/extra-actions.json` gains `screenservices/Connect2_LegacyShared/ActionGetBulkSubdivisions_V2`
  (screens AssembleDetail; evidence controller.js:7691-7704, :3070-3110, :4115-4249). `contract_gen.py` emits
  `POST /api/Connect2_LegacyShared/ActionGetBulkSubdivisions_V2` (input CacheKeys Text list, output Results
  CacheableSubdivisionInformationTextTextRecord list → CacheableSubdivisionInformation → SubdivisionExtended,
  LocalityHouseholdsResultItem, all compiled types); `gen:api` rerun. No generator change was needed (a module client
  action is outside the screen closure scan, so the extra entry is the documented route).
- **Port** (`app/src/shared/Connect2_LegacyShared/lib/actions.ts`): `getBulkSubdivisions_V2`, `getBulkSubdivision_V2`
  (bulk callback) and `getCacheableSubdivision_V2(SubdivisionId)` over the shell memory cache
  (`getCacheableObjectInBulk`, type `DirectoryCacheType.AssembleSubdivision`, TTL 300 s, timeout 10, bulk size 0; a waiting
  miss is shared); 0 raises ObjectNotFound "Invalid subdivision id"; an unanswered key gives undefined = the record at its
  default (AssignFromObject skips a null object). Types in `structures.ts`; defaults in `mockDefaults.ts`.
- **Mock** (`app/src/shared/Connect2_LegacyShared/lib/mocks.ts`): one record per hall of the mock world
  (MOCK_LOCALITY_SUBDIVISIONS: locality, AR, IsMainHall), households = `householdsOfSupperMeeting` of the directory cast
  (1210: 11, 9202: 7, 9203: 5), named as Locality_Details, placeholder photo; halls outside the cast have none.
- **Route** (`AssembleEventDetail_Localities.tsx`): OnReady now fetches, replaces the skeleton rows, sets CountryCode and
  LocalityId (used by MaybeDisplaySubscriptionPopup) and runs Set_SelectedAssembleAttendeeListBookmarks (legacy local
  bookmarks of type Contact; also when restored from cache). The `<NotCaptured>` is gone.
- **Checks:** unit tests `shared/Connect2_Assemble_MUI/lib/toggleBookmarkItem.test.ts`; `npm --prefix app run ci` green;
  headless smoke test of AssembleDetail (expanded Zapiola hall: 11 households, no skeleton, Vitale shown bookmarked).
