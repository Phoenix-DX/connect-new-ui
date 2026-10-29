# Item 10 tooling: contract source order and route list

Date: 2026-10-29. User decisions I10-6 (a) and I10-7 (a).

## Task 1: contract_gen.py source choice

Before:
- Fetched copies were taken newest file first (by modification time): route captures
  (`migration/screens/*/analysis/sources/raw`), `migration/runtime-sources`, `migration/contract/sources/raw`.
- The survey was used only for files with no fetched copy.
- Result: `Notifications.mvc.js` came from the route copy of 2026-10-14. It lacked `ActionMarkAsRead` and
  had `DataActionFetchMessageInstance` of NotificationDetails missing.

After (`Sources.__init__`):
1. Live survey `capture/survey-UBTConnect.json`.
2. `migration/runtime-sources`.
3. `migration/contract/sources/raw` and route captures, newest first.
- If the live survey is missing: a warning goes to stderr. The old order applies. The last resort is
  `capture/survey-UBTConnect-2026-10-13.json`.
- CLI and output format are unchanged. The report line "files fetched after the survey differ" now lists
  only non-survey files that differ from the live survey.
- Docstring updated.

Test run (scratchpad only; `app/src/api/openapi.yaml` not touched):
`scratchpad/openapi.new.yaml` and `scratchpad/report.md`. 175 operations (was 165), 723 schemas, 16 x-unknown, 44 writes.
`ActionMarkAsRead` (`UBTConnect.ActionMarkAsRead`, path `.../App_Notifications/Notifications/ActionMarkAsRead`)
and `NotificationDetails.DataActionFetchMessageInstance` are both present.

Added (14):
- `UBTConnect/ActionMarkAsRead`, `ActionMarkAllAsReadNotifications`, `ActionToggleRead`, `ServiceAPIDelete_Notifications`: Notifications and NotificationDetails code of the live TST.
- `UBTConnect/NotificationDetails/DataActionFetchMessageInstance`: new screen.
- `UBTConnect/Bookmarks/DataActionGetBookmarks`, `UBTConnect_Bookmarks_MCS/ActionGet_BookmarkPills_ByBookmarkCategoryIds`: changed Bookmarks screen.
- `UBTConnect/AssembleDetail/DataActionGetAssembleNotes`, `Connect2_OrbitMobile_MUI/ScreenBlock_EventDetail/DataActionFetchEventNotes`: notes on Assemble and Event detail (new in live TST).
- `UBTConnect/CountryList/DataActionGetCommunityStatistics`, `HomeFeed/DataActionGetCommunityStatistics`, `Locality_LocalityContacts/DataActionGetLocalityBusinessContacts`, `OneSchoolGlobalDetails_Block/DataActionGetOneSchoolGlobalDetails`, `ScreenBlock_Search/DataActionGet_FilteredRecentClickedResults`: calls in live code that the older copies did not have (I did not check each reason).

Removed (4), all from the retired MyBookmarks module (screens gone from live TST):
- `Connect2_MyBookmarks_MUI/ActionDeleteBookmarkByBookmarkId`, `ActionNew_UpdateBookmarkNote`,
  `ScreenBlock_BookmarkGroup/DataActionGetAllBookmarksByGroup`, `ScreenBlock_MyBookmarks/DataActionGetGroupSummaries`.

Changed (21), only `x-os-screens` lists: MyBookmarks/BookmarksByGroup/New_* replaced by Bookmarks, or Bookmarks, AssembleDetail,
EventDetail added (e.g. `ServiceAPIAddNote`, `ServiceAPIUpdateNote`, `ServiceAPIDeleteNoteByNoteId`, `ActionGetUserInformation`,
`ActionSync_Info_GetMain`, CacheControl_* `DataActionGetCacheInfo`, ShareSheet data actions). Two Connect2_MyBookmarks_MUI
operations (`ActionGetBookmarkById`, `ActionNew_GetBookmarkById`) now have an empty screen list; they stay in the file.
No request or response schema of an existing operation changed (I compared per-path text; only the screen lists differ).

## Task 2: migration/survey screen list

Source: the live survey, run through `survey_app.py` into the scratchpad (`scratchpad/survey_live/`); only the row
differences were merged. The live survey has no role field; `screens.json` rows have none either, so there are no roles.

Added (5), rows copied as generated (route, flow, inputs, blocks, calls):
- `NotificationDetails` (App_Notifications; MessageInstanceId: LongInteger)
- `OneSchoolGlobalCarousel` (Directory_OneSchoolGlobal; In_StartingObjectId: LongInteger)
- `OrbitAdminMilestones` (Legacy_OrbitAdminFlow; EventId: LongInteger)
- `OrbitAdminMilestoneDetail` (Legacy_OrbitAdminFlow; 7 inputs)
- `PassportScan` (Legacy_OrbitEventsFlow; TargetId, LoginMemberId: LongInteger)

Removed (4): `MyBookmarks`, `BookmarksByGroup`, `New_MyBookmarks`, `New_BookmarksByGroup` (all Legacy_MyBookmarks; not in the live survey).
The other 79 rows are unchanged (their fields differ in the live survey for images, flags, navOut and so on; kept as of 2026-10-13 on purpose).
Note: `variants` in `screens.json` still has the groups `mybookmarks` and `bookmarksbygroup`; left as is.
The note is in the new `_changes` field of `screens.json`. `routes.md`: 5 rows added, 4 removed, header now "84 screens found in 641".
`screens.json` was re-dumped with the old 1-space indent; the git diff is large (about 1500 lines each way) from the JSON re-dump formatting of lists; row content of kept screens is unchanged (checked field by field before the write).

`--update-routes` was run with `--home /UBTConnect/HomeFeed` (without it the script picks AcceptPendingPolicies as HOME; keep the flag).
Diff of `app/src/app/routes.generated.ts`: 84 routes (was 83 + hand row). The NotificationDetails hand row is now a generated row
(wave 3, input MessageInstanceId). Added rows: OneSchoolGlobalCarousel, OrbitAdminMilestones, OrbitAdminMilestoneDetail, PassportScan.
Removed rows: MyBookmarks, New_MyBookmarks, BookmarksByGroup, New_BookmarksByGroup.
`routes.css.generated.ts` is not written by `--update-routes` and is unchanged; it still has entries for the four removed screens.

Who uses the removed screens in `app/src` (not changed):
- `app/src/app/routes.ts` lines 71-73 and 116: flag redirects Bookmarks -> MyBookmarks -> New_MyBookmarks.
- `app/src/app/routes.test.ts` (flag redirect tests), `app/src/app/routes.css.generated.ts`.
- `app/src/mocks/modules/Connect2_MyBookmarks_MUI/*`, `Connect2_Assemble_MUI/mocks.ts`, `mocks/fictional/directory.ts`,
  `platform/flags/*`, `platform/bootstrap/mocks.ts`, `platform/navigation/navigationGate.ts` and some stories/READMEs/tests.
- No page imports a MyBookmarks or BookmarksByGroup component from `routes.generated.ts`.

Checks (from `app/`):
- `npx tsc --noEmit`: pass.
- `npx vitest run src/app`: 3 tests fail, 22 pass. All 3 are in `routes.test.ts` "flag redirects": `routes.ts` still redirects
  Bookmarks to MyBookmarks / New_MyBookmarks, and those rows are gone, so the redirect target no longer resolves.
  Caused by the removal; the Bookmarks route retires the redirect.

## Files changed
- `migration/tools/contract_gen.py`
- `migration/survey/screens.json`, `migration/survey/routes.md`
- `app/src/app/routes.generated.ts`
- `migration/clarify/builds/item10-tooling.md`
- Scratchpad only: `openapi.new.yaml`, `report.md`, `survey_live/`.

## Questions
1. The 3 failing redirect tests in `routes.test.ts`. Options:
   a. Leave them red until the Bookmarks route removes the redirect rows and tests (recommended: same change set, no code now).
   b. Put the four removed rows back by hand for now (breaks "generated only").
   c. Edit `routes.ts` and the test now.
2. Rows of unchanged screens (images, flags, navOut) differ in the live survey. Options:
   a. Keep as of 2026-10-13 (done; recommended, the user asked for only the list).
   b. Refresh all rows from the live survey (bigger diff, changes waves of 4 screens).
