# Item 10: gate fix-up of the wave (2026-10-29)

Scope: tasks 1-8 of the orchestrator brief (I10-6 (a), auto decisions rows 3, 8, 9, 10, 11, 12 of
`migration/clarify/auto-decisions-2026-10-29.md`). No TST, no MCP, no commit, no `git add`.

Incident: one `git rm` (task 4) staged the deletion of 2 files. I unstaged it at once with `git reset -- <2 paths>`.
The index is empty again (`git diff --cached` shows nothing); the 2 files stay deleted in the working tree.

## Task 1: contract (I10-6 a)

- `python3 migration/tools/contract_gen.py --out app/src/api/openapi.yaml --report migration/catalog/contract-report.md`:
  178 operations (165 before), 733 schemas, 44 writes. Report path: the existing convention is the single file
  `migration/catalog/contract-report.md` (default of the tool's usage text; `migration/contract/` has no reports), so
  the report overwrote it. Then `npm run gen:api` (`src/api/schema.d.ts`).
- Interim `@ts-expect-error`: all 8 removed (notificationDetail ×2, passport ×1, bookmarkCards ×2, adminMilestones ×1,
  adminMilestoneDetail ×2). The two data-action inputs of the Orbit admin pages are interfaces, which have no index
  signature: the calls send `{ ...inputs }`.
- Wire types now from the contract: `MessageInstanceWire`, `PassportScanConfigsWire`, `AdminMilestoneListWire`,
  `AdminMilestoneRowWire`, `MilestoneInformationWire`, `AdminMilestoneType`, `ScanMilestoneQRCodeInputsWire`,
  `ScanMilestoneQRCodeWire`, `BookmarkCardsWire`, `BookmarkPillsWire` (hand-written `AdminMilestoneWire`,
  `PriorCheckInItemWire`, `ScannedQRCodeInfoWire`, `WireList` removed).
- Not fully switched, because the regenerated schemas still lack TST fields:
  - `BookmarkCardItemWire` = contract `UI_Bookmark_CardItem` + optional `ChannelName`, `ChannelLogo`, `EventStartDate`,
    `EventEndDate`, `PublishedAt`; the mapper gives "" / NullDate.
  - `NoteCardItemWireTst` (`api/note/mapper.ts`) stays: the contract `UI_Note_CardItem` has no `ItemId2`,
    `HasDetailAccess` or channel fields. Comment updated.
- Mocks to `contractHandler`: NotificationDetails, PassportScan, Bookmarks (2), OrbitAdminMilestones,
  OrbitAdminMilestoneDetail Get_MilestoneInformation. Kept `statefulHandler`: GetScanMilestoneQRCode (writes the
  collection `orbitAdminMilestoneCheckIns`). The milestone rows now carry the full default OrbitMilestoneTypeRec
  (`{ ...EMPTY_ADMIN_MILESTONE_TYPE, ...m.type }`); the Bookmarks cards get `Id` (fictional, the item id).
- `SERVER_REQUEST_TIMEOUT`: `OrbitPassportScanC2: 10` (runtime-sources/OrbitPassportScanC2.controller.js:161),
  `UBTConnect_Bookmarks_MCS: 10` (runtime-sources/UBTConnect_Bookmarks_MCS.controller.js:1218); test rows added.
- Fallout of the regeneration (schemas of the live TST code), fixed:
  - `UBTConnect/OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails` is gone; React calls
    `OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails` (repository, mapper, container mocks, 3 tests;
    one-off exact-match script). The recorded fixture keeps its old path: `RECORDED_ACTION` in
    `containers/OneSchoolGlobalDetails/mocks.ts`.
  - New required fields with record defaults: `IsMemberDeceased` (Household_Relations mock, household mapper test),
    `ExternalApp_PopUpInfo.URL` ('' in `api/service/mapper.ts`: the React state does not keep it; 2 tests),
    `ServiceAPIDeleteBookmarkByBookmarkId2.WasFound` (EntityDetailsActions mock), `LocalNote.NotesTotalCount` ('0',
    bootstrap mock, app mapper test), `Member.Latitude/Longitude` ('0', LegacyShared mockDefaults),
    `UserCurrent_Geography.MainHall_Latitude/Longitude` ('0', mockUser).

### Operation diff (165 → 178)

Added (18):
- `Connect2_OrbitMobile_MUI/ActionGetScanMilestoneQRCode`
- `Connect2_OrbitMobile_MUI/ScreenBlock_AdminMilestoneDetail/DataActionGet_MilestoneInformation`
- `Connect2_OrbitMobile_MUI/ScreenBlock_AdminMilestones/DataActionGet_AdminMilestoneList`
- `Connect2_OrbitMobile_MUI/ScreenBlock_EventDetail/DataActionFetchEventNotes`
- `OrbitPassportScanC2/ScreenBlock_PassportScan/DataActionGetConfigs`
- `UBTConnect/ActionMarkAllAsReadNotifications`
- `UBTConnect/ActionMarkAsRead`
- `UBTConnect/ActionToggleRead`
- `UBTConnect/AssembleDetail/DataActionGetAssembleNotes`
- `UBTConnect/Bookmarks/DataActionGetBookmarks`
- `UBTConnect/CountryList/DataActionGetCommunityStatistics`
- `UBTConnect/HomeFeed/DataActionGetCommunityStatistics`
- `UBTConnect/Locality_LocalityContacts/DataActionGetLocalityBusinessContacts`
- `UBTConnect/NotificationDetails/DataActionFetchMessageInstance`
- `UBTConnect/OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails`
- `UBTConnect/ScreenBlock_Search/DataActionGet_FilteredRecentClickedResults`
- `UBTConnect/ServiceAPIDelete_Notifications`
- `UBTConnect_Bookmarks_MCS/ActionGet_BookmarkPills_ByBookmarkCategoryIds`

Removed (5):
- `Connect2_MyBookmarks_MUI/ActionDeleteBookmarkByBookmarkId`
- `Connect2_MyBookmarks_MUI/ActionNew_UpdateBookmarkNote`
- `Connect2_MyBookmarks_MUI/ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup`
- `Connect2_MyBookmarks_MUI/ScreenBlock_MyBookmarks/DataActionGetGroupSummaries`
- `UBTConnect/OneSchoolGlobalDetails/DataActionGetOneSchoolGlobalDetails` (moved to `OneSchoolGlobalDetails_Block`)

Changed (29; `x-os-screens` only unless noted):
- `Connect2_LegacyShared/ActionGetNumberUnreadMessages`
- `Connect2_LegacyShared/ActionGetSignedPhotosInBulk`
- `Connect2_MyBookmarks_MUI/ActionGetBookmarkById` (screen list now empty)
- `Connect2_MyBookmarks_MUI/ActionNew_GetBookmarkById` (screen list now empty)
- `Connect2_OrbitMobile_MUI/ActionGetMemberByMemberId` (also `x-os-paths`)
- `UBTConnect/ActionGetMilestoneScanFF` (also `x-os-paths`)
- `UBTConnect/ActionSync_Info_GetMain`
- `UBTConnect/Directory_EntityDetailsActions/DataActionFetchContactDetails`
- `UBTConnect/Directory_EntityDetailsActions/DataActionFetchNotes` (also `x-os-phase`)
- `UBTConnect/HouseholdDetails_Block/DataActionGetHousehold`
- `UBTConnect/HouseholdDetails_Block/DataActionGetHousehold_Coordinates`
- `UBTConnect/ServiceAPIFetchData_CacheableHouseholds`
- `UBTConnect/ServiceAPIFetchData_CacheableMapEntities`
- `UBTConnect/SupperMeeting_DetailsBlock/DataActionGetSubdivision`
- `UBTConnect/SupperMeeting_HouseholdList/DataActionGetSubdivisionHouseholds`
- `UBTConnect_Utils/ActionCS_CreateShareProfileLink`
- `UBTConnect_Utils/ActionCS_ShareObject`
- `UBTConnect_Utils/ActionGetUserInformation`
- `UBTConnect_Utils/CacheControl_AllCountries/DataActionGetCacheInfo`
- `UBTConnect_Utils/CacheControl_AllLocalities/DataActionGetCacheInfo`
- `UBTConnect_Utils/CacheControl_Policies/DataActionGetCacheInfo`
- `UBTConnect_Utils/CacheControl_UserInfo/DataActionGetCacheInfo`
- `UBTConnect_Utils/ServiceAPIAddNote`
- `UBTConnect_Utils/ServiceAPIDeleteNoteByNoteId`
- `UBTConnect_Utils/ServiceAPIUpdateNote`
- `UBTConnect_Utils/ShareSheet/DataActionGetAvailableMembers`
- `UBTConnect_Utils/ShareSheet/DataActionGetRecentlyShared`
- `UBT_AppManager/ActionAppManager_AfterInitialize`
- `UBT_AppManager/ActionAppManager_SynchAppContext`

Schemas: 50 added, 13 removed; properties changed in 18 (the new required fields above; screen-variable inputs of
Notifications, Search, EntityDetailsActions, EventDetail, CountryList, Locality_OneSchoolGlobal; no tsc fallout there).

## Task 2: C3 (row 3)

`api/note/types.ts`: `channelName`, `channelLogo`, `publishedAt` required. `api/note/mapper.ts`: defaults "" / ""
/ NullDate. Fixtures updated: `api/note/mapper.test.ts`, `pages/Notes/components/NoteCard_List.test.tsx`,
`pages/Notes/hooks/useNotes.test.tsx`, `notesState.test.ts`, and `notesState.ts` (skeleton card).

## Task 3: F2 (row 8)

`pages/OrbitAdminMilestoneDetail/mocks.ts` (scanOutcome comment): row 5 states the id for the failure branches only;
the success value is an ASSUMPTION, value kept. Open: the success id goes to the MCP fact list (not edited here).

## Task 4: O1 (row 9)

`pages/OrbitAdminEventDetail/components/AdminEventDetailView.tsx` imports `components/orbit/OrbitErrorMessage` and
`components/orbit/OrbitPopup`. Deleted: `components/AdminPopup.tsx`, `components/OrbitErrorMessage.tsx` (the code was
the same as the shared copies, checked by diff). Page tests pass.

## Task 5: O2 (row 10)

- `lib/orbit/actions.ts`: `QRCodeInformation` (not exported), `deserializeQRCodeInformation`,
  `getFormattedLocalDateTime` (reuses `MONTH_NAMES`). The two page copies were the same code (checked by script).
- `ContainsIgnoreCase`: no action of that name in the survey or runtime-sources; it is the built-in `Index()`
  expression, so `lib/ubtConnectUtils/actions.ts` exports its helper (not moved to `lib/orbit`).
- Deleted: `pages/OrbitAdminEventDetail/components/actions.ts`, `pages/OrbitAdminMilestoneDetail/components/actions.ts`.
  The helpers left both `hooks/*Actions.ts`; `textToLongIntegerValidated` stays in the milestone page.
- Tests: the deserialize tests of OrbitAdminEventDetail moved to `lib/orbit/actions.test.ts` (the milestone copy was a
  subset, removed); new `getFormattedLocalDateTime` test; the containsIgnoreCase test moved to
  `lib/ubtConnectUtils/actions.test.ts`.

## Task 6: retired routes

- `app/routes.css.generated.ts`: generator `migration/tools/css_sets.py`. A full run changes more than the 4 rows: it
  adds NotificationDetails, OneSchoolGlobalCarousel, OrbitAdminMilestoneDetail, OrbitAdminMilestones, PassportScan,
  adds sheets to 7 routes (AssembleDetail, Bookmarks, Locality_Details, Map, Notes, Notifications,
  OneSchoolGlobalDetails: mostly `CW_Notes.NotesSheet.css`) and changes 13 source labels. That needs parity on those
  routes, so I restored the file and removed only the 4 rows (sets and sources) by script. The full output is kept at
  `/private/tmp/claude-501/-Users-khaitruong-Projects-connect-new/c658e23d-06e2-4426-a111-9e9cbc2d7280/scratchpad/routes.css.regenerated.ts`.
  Decision for the orchestrator.
- `platform/flags/registry.ts`: 10 route-name entries removed (8 list lines, 2 in the WalletAccess list); `flags.generated.json`: 18 lines removed (line edit,
  JSON checked equal). Left: the description of `mobileDirectoryBookmarkNote` (lines 83-84) still names
  New_MyBookmarks / MyBookmarks.
- Comments reworded: `platform/bootstrap/mocks.ts` (legacy LocalBookmark), `mocks/modules/Connect2_Assemble_MUI/mocks.ts`
  (header, delete handler), `mocks/fictional/directory.ts` (BOOKMARKED_ELSEWHERE).
- `.dependency-cruiser-known-violations.json`: 2 stale rows deleted (142 → 140).

## Task 7: unused (rows 11, 12)

- G1: deleted `components/ui/legacy/GridGallery/` (all files); `components/ui/README.md` "three `DEPRECATED_*`
  patterns", name dropped (prettier re-aligned the table).
- G2: `mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts`: the 4 handlers removed (`handlers = []`), header updated;
  `emptyLegacyBookmarkItem` kept (the seed and `addLegacyBookmark` use it); its test of the handlers removed.
- `knip.json`: `DropdownSearch/index.ts` left the ignore list.
- 86 new rows: `export` removed in 55 files by a one-off script (declarations and barrel lists), then prettier.
  Dead after that: `connect_LaunchDarkly_PermissionCheck` (`lib/ubtConnectUtils/actions.ts`) deleted.
- `.knip-known-unused.json`: 38 stale rows deleted (1086 → 1048).

## Task 8: checks (from `app/`)

| Check | Result |
|---|---|
| `npx tsc --noEmit` | 0 errors |
| `npx eslint` (changed files) | 0 errors (warnings: pre-existing rule-4 rows of BottomBar) |
| `npx prettier --check` (108 changed files) | clean |
| `npm run arch` | no violations (140 known) |
| `npm run arch:baselines` | 140 rows, 0 stale; 72 warnings, 0 new, 0 gone |
| `npm run unused` | knip clean; 1048 rows, 0 new, 0 stale |
| `node build/check-flow-fetch.mjs` | ok |
| `npm run flags` | exit 0 |
| `npx vitest run` | 715 files, 4652 tests passed; no "Errors" line (716 / 4658 before: GridGallery test file and the MyBookmarks handler test deleted, duplicate milestone tests merged) |

Not run (orchestrator): `npm run ci`, parity, e2e, `contract_gen.py --check-fixtures` (the OneSchoolGlobalDetails
fixture is recorded under the removed path).
