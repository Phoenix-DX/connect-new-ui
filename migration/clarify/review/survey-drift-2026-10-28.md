# Survey drift check (2026-10-28)

The survey of 2026-10-13 (`capture/survey-UBTConnect.json`) is the main source of the TST compiled code. The build
wave found one block that changed after it (OrbitLanding, PD13). This check fetched the live TST code again and
compared it with the survey and with `migration/runtime-sources/`.

## Method

- Read-only static GET without a session, under the standing approval for TST manifest files
  (`migration/knowledge/runtime-sources.md`). No data call and no screen service was fetched.
- The order: `moduleinfo`, then every `.mvc.js` file of the app modules (the filter of `survey.js`).
- Then the 155 files of `migration/runtime-sources/` that are in the live manifest.
- Comparison after the BOM and CRLF are normalised. A second pass masks the ids in `OutSystemsDebugger.*("…")`
  calls: OutSystems makes new ids at each publish, so those lines do not change the behaviour.
- `Last-Modified` of the live files: 2026-10-27 06:46 to 06:48 GMT. The manifest version is 15682 (15568 on
  2026-10-15). So TST was published again after 2026-10-15, last on 2026-10-27.

## Result

| Item | Count |
|---|---|
| Survey files, old and live | 640 and 641 |
| Same text | 286 |
| Only debugger ids changed | 255 |
| Logic changed | 79 |
| Files added on TST | 21 |
| Files removed from TST | 20 |
| Runtime-sources files changed (of 155) | 19 |
| Manifest entries added and removed | 83 and 32 |

## Routes of the React app

The count below is per React route (64). It adds the changed lines of the screen file and of the blocks under it.
The shared blocks after the table are not in the count. Data: `survey-drift/routes-closure.txt` (the block tree
comes from `migration/survey/screens.json`).

| Drift | Routes |
|---|---|
| Screen removed on TST | MyBookmarks, BookmarksByGroup. TST removed the module Connect2_MyBookmarks_MUI and the four Legacy_MyBookmarks screens; its new screen is Bookmarks, which is not a React route |
| Large (900 lines or more) | OneSchoolGlobalDetails (2933), Notifications (2380), Notes (1696), Locality_Details (1662), HouseholdCarousel (1614), SupperMeeting_Carousel (1614), Profile (1528), HouseholdDetails (1526), SupperMeeting_Details (1505), Household_Relations (972), AssembleDetail (949) |
| Medium (100 to 899 lines) | EventDetail (545), Search (507), HomeFeed (393), OrbitLanding (373), MyEntertaining (174), CountryList (161), FeedItemDetail (110) |
| Small (under 100 lines) | Updates_SingleList, OrbitAdminLanding, LDM_MyEvents_V2, MessageDetail, CountryDetails, OrbitAdminEventDetail, MilestoneDetail, ContactUsDetails, Menu |
| Shared blocks only | the other 35 routes |

- Most large counts come from blocks of the notes and entity actions: Directory_EntityDetailsActions (505 lines),
  NotesSheet (303), AddNote (249), Note_Item (232), ItemCard_WithNotes (342). TST added a notes section to the
  detail screens (new block UBTConnect_Utils.CW_Notes.ItemNotesSection).
- Notifications: NotificationsList (742 lines) and the new screen NotificationDetails.
- OneSchoolGlobalDetails: the screen lost 1375 lines; its content moved to the new blocks OneSchoolGlobalDetails_Block
  and OneSchoolGlobalCarousel.
- Shared blocks: IconSVG adds new icons only; BottomBarMenu removes the old bookmark flag checks
  (GetHasNewBookmarks); BottomSheet adds the input In_TouchActionNoneFix; Layout_DetailPage, LazyImage,
  UBT_LazyImage, InputCounter, Input and StaticInput have small changes.
- Map and Bookmarks changed a lot too (5661 and 362 lines in the screen file), but they are not React routes.

## Screens added on TST

NotificationDetails, PassportScan, OrbitAdminMilestones, OrbitAdminMilestoneDetail and OneSchoolGlobalCarousel. They
are not React routes. The scope decision for them belongs to the user.

## Runtime sources: changed actions

- `UBTConnect.controller.js`: 14 actions changed, for example ShowCommunicationExceptionMessage, AddBookmark,
  AddBookmark2, ToggleBookmarkItem_C2, GetNotes_FilterYear and Sync_Info_GetMain. Added: Get_FormattedDistance,
  Get_RecentYears. Removed: GetBookmarkType_FromEntity.
- `UBTConnect_Utils.controller.js`: App_Subscription_NavigateToUpgrade and OpenInApp_OpenExternalLink.
- `Connect2_LegacyShared.controller.js`: the server action GetUserInformation.
- `UBTConnect_Notes_MCS.controller.js`: CreateOrUpdate_LocalNote, Delete_LocalNoteById and Delete_LocalNoteByNoteId
  are replaced by Create_LocalNote, Update_LocalNote and Delete_LocalNote.
- `UBTConnect_Bookmarks_MCS.controller.js`: 5 actions changed, for example Create_LocalBookmark.
- Models: `UBTConnect.model.js` has 13 structures added and 189 removed; `Connect2_OrbitMobile_MUI.model.js` has 102
  added. Details: `survey-drift/runtime-sources-actions.json`.

## Static entities (moduleinfo)

- Connect2_OrbitMobile_BL: milestone types for the admin flow (meeting-admin, accommodation-admin and four more);
  check-in statuses: AlreadyCheckedIn removed; CheckedIn, AlreadyCheckedInForMilestone, CheckedInForOtherMilestone,
  NotAllocated, NotInvited and Moved added.
- UBTConnect_Bookmarks_MCS: the identifier "OneSchoolGlobal" is now "OneSchool Global".
- UBTConnectLibrary: new icons (SVG_Community*, arrows, two icon sizes). Connect_CommonEntities_DB:
  directory-household-gallery. Comms_CS and Connect2_MyBookmarks_BL are gone.
- `migration/knowledge/static-entities-tst.json` (from 2026-10-15) is out of date for these entities. Two React
  constants have the value "OneSchoolGlobal" (`app/src/lib/ubtConnect/staticEntities.ts:157`,
  `app/src/pages/HomeFeed/staticEntities.ts:35`): check which entity they belong to.

## Clarify rows at risk

574 checklist rows cite a changed or removed file (`survey-drift/impact.txt`). The count is an upper limit: a row
that cites a large controller counts even when its action did not change.

| Flow | Rows | Main files |
|---|---|---|
| Bookmarks | 117 of 123 | the removed MyBookmarks screens and blocks |
| Legacy_OrbitEventsFlow | 98 of 518 | ScreenBlock_OrbitLanding, ScreenBlock_EventDetail, OrbitLanding |
| _shared | 91 of 194 | UBTConnect.controller.js |
| Legacy_OrbitAdminFlow | 66 of 109 | ScreenBlock_AdminEventDetail, OrbitAdminLanding |
| Legacy_AssembleFlow | 50 of 159 | AssembleDetail, AssembleEventDetail |
| Calendar | 28 of 72 | Embedded_MyEntertaining, MyEntertaining |
| App_Common | 18 of 182 | BottomBarMenu, UBTConnect.controller.js |
| 23 other flows | 106 | mostly one or two controller actions each |

The Notifications, Notes and OneSchoolGlobalDetails changes are large, but few rows cite those files by name. Their
reports cite the screen names. Read those reports again first.

## What it means

- The parity captures, the survey, the specs and the clarify verdicts were made against an older TST.
- TST still changes. A verdict is valid only for the TST version that it read.
- 2 React routes (MyBookmarks, BookmarksByGroup) copy screens that TST no longer has.

## Files

- Live copies (not committed, large): `capture/survey-UBTConnect-2026-10-28.json` and
  `capture/runtime-sources-live-2026-10-28/`.
- Live moduleinfo: `migration/runtime-sources/moduleinfo-2026-10-28.json`.
- Data of this check: `migration/clarify/review/survey-drift/` (survey-diff, logic-changes, runtime-sources-actions,
  runtime-sources-result, impact).
