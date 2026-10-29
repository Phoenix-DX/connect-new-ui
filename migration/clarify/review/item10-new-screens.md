# Item 10: the screens that TST added on 2026-10-27

Status: fact pass, read-only, 2026-10-28. No decision in this file. The scope decision for each screen belongs to the
user (`survey-drift-2026-10-28.md`, "Screens added on TST").

Evidence format:

- TST lines are the line numbers of `python3 migration/clarify/tools/tst_source.py show|grep` (the tool splits the
  compiled file at `;`). Source: `capture/survey-UBTConnect.json` (live survey). The survey of 2026-10-13 is
  `capture/survey-UBTConnect-2026-10-13.json`.
- React lines are `app/src/...:line`.
- Live values come from `probe-new-screens.json` (script `tools/probe_new_screens.cjs`, run 2026-10-28 15:51 UTC,
  test account of `site_auth.cjs`, read-only guard on, allow list of `capture-plan.json` `defaults.allowActions`).

## 1. Live values (probe of 2026-10-28)

The probe opened each source screen and did not click an entry. The guard blocked no call (`blocked: []`).

| Gate | Live value | Value of 2026-10-14 (`flag-values-tst.json`) | Gates |
|---|---|---|---|
| `getHasOrbitAccess` | true | true | OrbitLanding → PassportScan |
| `getHasNewNotifications` | false | false | the bell → Notifications (else MessageList) |
| `getHasNewBookmarks` | true | true (changed on 2026-10-21) | React only; the TST bottom bar does not read it now |
| `getHasBookmarNote` | false | false | React only (New_MyBookmarks) |
| `getHasCarouselEnabled` | true | true | not read on the paths to OneSchoolGlobalCarousel |
| `getHasC1DirectoryView` | true | true | bottom bar Directory (no new screen) |
| `GetMilestoneScanFF` → `IsScanPerMilestone` | false | (not probed) | OrbitAdminLanding → OrbitAdminMilestones → OrbitAdminMilestoneDetail |

`GetMilestoneScanFF` is a server action, not a client helper. The probe called the screen's own
`getMilestoneScanFF$ServerAction` on OrbitAdminLanding. The call `ActionGetMilestoneScanFF` passed the read rule of the guard.

A first run evaluated the helpers before the session was in place, and all helpers returned false. The script now
evaluates them last, on HomeFeed. The JSON keeps the second run only.

| Source screen | What the probe saw |
|---|---|
| HomeFeed | Bottom bar labels: Home, Directory, Updates, Bookmarks, Menu. |
| Notifications (direct URL) | `App_Notifications.Notifications`, 3 list items. Calls: `DataActionGetDateRanges`, `DataActionFetchNotifications`. |
| OrbitLanding | "View Passport details" exists and is visible. No event card (`NoInformation_Orbit`). |
| OrbitAdminLanding | No event card (`NoInformation_Orbit`). `IsScanPerMilestone` = false. |
| Notes | Pills: All, Assemble, Feeds, Households, Interchange, LDM, Members, OneSchool Global, Orbit, Supper Meetings. Empty list. |
| Bookmarks | Screen `Bookmarks.Bookmarks`. The same pills as Notes. Empty list. Calls: `ActionGet_BookmarkPills_ByBookmarkCategoryIds`, `DataActionGetBookmarks`. |
| `/UBTConnect/MyBookmarks` | HTTP 404, title "404 - File or directory not found.", no app shell, no service call. |
| `/UBTConnect/BookmarksByGroup` | HTTP 404, the same page as MyBookmarks. |

Reach of the test account, from these values:

| Screen | The test account reaches the entry? |
|---|---|
| NotificationDetails | Not through the bell (`getHasNewNotifications` = false). Only through the URL of Notifications, which has 3 items. |
| PassportScan | Yes. The link shows, and `getHasOrbitAccess` = true. |
| OrbitAdminMilestones | No. OrbitAdminLanding has no event card, and `IsScanPerMilestone` = false. |
| OrbitAdminMilestoneDetail | No. The only entry is OrbitAdminMilestones. |
| OneSchoolGlobalCarousel | No card today: the Notes list and the Bookmarks list are empty for this account. |
| Bookmarks | Yes, from the bottom bar. |

## 2. NotificationDetails

| Fact | Value | Evidence |
|---|---|---|
| Entry | A click on a notification of Notifications. The Container `onClick` raises `OnClick_NotificationDetail(Id, IsRead)`. | `NotificationsList.mvc.js:329-341, 822-846` |
| Event chain | NotificationsList event `NotificationDetail` → NotificationsListBreakpoints → Notifications `Handler_NotificationDetail`. | `NotificationsListBreakpoints.mvc.js:238`, `Notifications.mvc.js:873-874` |
| Condition | When `IsRead` is false, the screen first calls the server action `MarkAsRead` (a write). Then it always navigates. | `Notifications.mvc.js:2990-2994` |
| Navigation | `/UBTConnect/NotificationDetails?MessageInstanceId=…` | `Notifications.mvc.js:2999-3002` |
| Gate of the source screen | The bell opens Notifications only when `GetHasNewNotifications` is true, else MessageList. | `App_NotificationIcon.mvc.js:245-255` |
| React today | NotificationsList renders `Notification_ListItem` with no click handler. Nothing opens a detail. | `app/src/pages/Notifications/components/NotificationsList.tsx:38-56` |
| Inputs | `MessageInstanceId` (LongInteger, mandatory) | `NotificationDetails.mvc.js` model |
| Data | Data action `FetchMessageInstance` on load, output `UI_NotificationDetail` (Record). No other client action in the screen. | `NotificationDetails.mvc.js:11, 538-554` |
| Role | Registered users | `NotificationDetails.mvc.js:577` |
| Blocks | `Layout_MainPages_Upgrade`, `CustomContainer`, `IconText`, `CircleButton`, `Icon`, `SectionSeparator`, `CustomText`, `BottomBarMenu`, `CommonUI_InsideLayout` | view dependencies |
| Blocks in React | All exist. `Layout_MainPages_Upgrade` is local to the Notifications page. | `app/src/pages/Notifications/components/Layout_MainPages_Upgrade.tsx` |
| Size | 30,592 characters, 715 lines | survey |

What a build means: one new screen with one data action and only existing blocks. The entry change is in the React
Notifications list: a click handler, the `MarkAsRead` call and the navigation. React MessageDetail has a different
block (`Connect2_LegacyShared.Widgets.NotificationDetailBlock`), not this screen.

## 3. PassportScan

| Fact | Value | Evidence |
|---|---|---|
| Entry | "View Passport details" in `ScreenBlock_OrbitLanding`. No `If` wraps the link. The nearest `$if` (line 267) closes at line 295 and holds the My calendar icon. | `ScreenBlock_OrbitLanding.mvc.js:267-295, 334-389` |
| Event chain | Click → `OnHandle_ViewPassportDetails` → event `NavigateTo_PassportScan(SelectedMemberId, CurrentMemberId)` | `ScreenBlock_OrbitLanding.mvc.js:338-346, 1977-1996` |
| Condition | OrbitLanding `OnHandle_NavigateToPassportScan`: when `GetHasOrbitAccess` is true, PassportScan; else HomeFeed. | `OrbitLanding.mvc.js:395-429` |
| Navigation | `/UBTConnect/PassportScan?LoginMemberId=…&TargetId=…` | `OrbitLanding.mvc.js:420-424` |
| React today | The port exists: flag `mobileOrbitAccess`, then a navigation to `/UBTConnect/PassportScan`. That path is not a React route, so the `*` route shows NotMigrated. | `app/src/pages/OrbitLanding/OrbitLandingPage.tsx:47-54`, `app/src/app/router.tsx:43` |
| Inputs | `TargetId`, `LoginMemberId` (LongInteger, mandatory) | `PassportScan.mvc.js` model |
| Screen | Holds `ScreenBlock_PassportScan` (module OrbitPassportScanC2) and `CommonUI_InsideLayout`. Event `Close` → `Handler_OnClose` → previous screen. | `PassportScan.mvc.js:155-162, 227-240` |
| Block data | Data action `GetConfigs` on load. Outputs include `BaseURL`, `B2CTenant`, `B2CClientId`, `B2CPolicy`, `TokenType`. | `ScreenBlock_PassportScan.mvc.js:14-28, 337, 356` |
| Block script | Loads `scripts/OrbitPassportScanC2.PassportScan.js`. Configures `window.OrbitPassport.embed` with the member id, the base URL and the identity token. | `ScreenBlock_PassportScan.mvc.js:148, 714-730` |
| Block events | `OnReady`, `OnSaved`, `OnError`, `OnAuthExpired`, `OnRequestCamera`, `Close` | `ScreenBlock_PassportScan.mvc.js:414-612` |
| Role | Registered users | `PassportScan.mvc.js:276` |
| Blocks in React | None: `ScreenBlock_PassportScan` (43,502 characters) and `Layout_OrbitBlank` (17,790) are new. | `@origin` search in `app/src` |
| Size | Screen 13,495 characters (310 lines); block 43,502 (873 lines) | survey |

What a build means: no entry change (the React OrbitLanding already navigates). One new screen, one new layout block
and one block that embeds an external script with a sign-in token. **Unclear:** how the mock phase stands in for the
`OrbitPassport` embed and its camera request; the TST script file is not in the survey.

## 4. OrbitAdminMilestones

| Fact | Value | Evidence |
|---|---|---|
| Entry | An event card of OrbitAdminLanding: `OnHandle_NavigateToEventDetail` | `OrbitAdminLanding.mvc.js:242-290` |
| Condition | Server action `GetMilestoneScanFF` (module Connect2_OrbitMobile_BL). When `IsScanPerMilestone` is true, OrbitAdminMilestones; else OrbitAdminEventDetail with 6 inputs. | `OrbitAdminLanding.mvc.js:218-227, 266-288` |
| Navigation | `/UBTConnect/OrbitAdminMilestones?EventId=…` | `OrbitAdminLanding.mvc.js:274-277` |
| React today | Always opens OrbitAdminEventDetail. The comment records the wait for the new TST screens (N1, user 2026-10-28). | `app/src/pages/OrbitAdminLanding/hooks/useNavigateToEventDetail.ts:8-19` |
| Stale React note | `mocks.ts` says that `GetMilestoneScanFF` is DEV-only and removed. TST now has it. | `app/src/pages/OrbitAdminLanding/mocks.ts:21` |
| Inputs | `EventId` (LongInteger, mandatory) | `OrbitAdminMilestones.mvc.js` model |
| Screen action | `Handler_NavigateToMilestoneDetail` calls `GetMilestoneScanFF` again. True: OrbitAdminMilestoneDetail with 7 inputs. False: OrbitAdminLanding. | `OrbitAdminMilestones.mvc.js:231-240, 255-302` |
| Block | `ScreenBlock_AdminMilestones`: data action `Get_AdminMilestoneList` on load, event `NavigateTo_MilestoneDetail`, `IsListVirtualizationDisabled`, `AppManager_GetCachedUserInfo` | `ScreenBlock_AdminMilestones.mvc.js:279, 454-473, 581, 645` |
| Role | Registered users | `OrbitAdminMilestones.mvc.js:399` |
| Blocks in React | New: `ScreenBlock_AdminMilestones` (44,225 characters). Existing: `Layout_Orbit`, `MenuIcon__UpdatedOSUI`, `Card_Milestone` (`components/orbit/MilestoneCard`), `NoInformation_Orbit`, `Skeleton_Loading`, `BottomBarMenu`, `CommonUI_InsideLayout`. | `@origin` search in `app/src` |
| Size | Screen 22,223 characters (488 lines); block 44,225 (918 lines) | survey |

What a build means: an entry change in the React OrbitAdminLanding (the `GetMilestoneScanFF` call and a second
branch). One new screen with one new screen block. The milestone card exists in React.

## 5. OrbitAdminMilestoneDetail

| Fact | Value | Evidence |
|---|---|---|
| Entry | Only OrbitAdminMilestones `Handler_NavigateToMilestoneDetail`, when `IsScanPerMilestone` is true. No other TST code navigates to it. | `OrbitAdminMilestones.mvc.js:286-297`; grep of all sources |
| React today | No entry (OrbitAdminMilestones is not in React). | — |
| Inputs | `In_EventId` (LongInteger), `In_MilestoneId` (Text), `In_MilestoneName` (Text), `In_MilestoneDate`, `In_MilestoneStartDate`, `In_MilestoneEndDate` (DateTime), `In_MilestoneDescription` (Text); all mandatory | `OrbitAdminMilestoneDetail.mvc.js` model |
| Block | `ScreenBlock_AdminMilestoneDetail`: data action `Get_MilestoneInformation` on load; server actions `GetMemberByMemberId`, `GetScanMilestoneQRCode`; BarcodePlugin `CheckBarcodePlugin` and `ScanBarcode` | `ScreenBlock_AdminMilestoneDetail.mvc.js:795, 819, 858-877, 902, 915` |
| Role | Registered users | `OrbitAdminMilestoneDetail.mvc.js:308` |
| Blocks in React | New: `ScreenBlock_AdminMilestoneDetail` (92,385 characters), `Popup_QRCodeScan_Milestone` (24,794). Existing: `Layout_Orbit`, `MenuIcon__UpdatedOSUI`, `NoInformation_Orbit`, `Skeleton_Loading`, `OrbitErrorMessage`. | `@origin` search in `app/src` |
| Size | Screen 17,255 characters (386 lines); blocks 92,385 + 24,794 | survey |

What a build means: one new screen with two new blocks, the largest of this item. The screen uses the barcode
plugin (camera) and a scan service. **Unclear:** whether `GetScanMilestoneQRCode` records a check-in on the server.
The drift lists new check-in statuses (`survey-drift-2026-10-28.md`, "Static entities"). The probe did not call it.

## 6. OneSchoolGlobalCarousel

| Fact | Value | Evidence |
|---|---|---|
| Entry 1 | Notes `Handler_OnClickNoteCardItem`, OneSchool Global (OSG) card. When the Notes filter category is OSG: the carousel. Else: OneSchoolGlobalDetails. | `Notes.mvc.js:1565-1586` |
| Entry 1 detail | Before the carousel, the screen sets `PreloadedCarousel.CarouselItemIds` to the ids of `Notes_List` and calls `SetPreloadObject`. | `Notes.mvc.js:1568-1575` |
| Entry 2 | Bookmarks, OSG card. The code tests the same type twice, so the carousel always opens. The OneSchoolGlobalDetails branch cannot run. | `Bookmarks.mvc.js:904-923` |
| Flag | Neither entry reads `GetHasCarouselEnabled`. | `Notes.mvc.js:1565-1586`, `Bookmarks.mvc.js:904-923` |
| Navigation | `/UBTConnect/OneSchoolGlobalCarousel?In_StartingObjectId=…` | `Notes.mvc.js:1577-1580`, `Bookmarks.mvc.js:916-917` |
| React today | Notes always opens OneSchoolGlobalDetails for an OSG card. React has no Bookmarks screen. | `app/src/pages/Notes/hooks/notesState.ts:97-108` |
| Inputs | `In_StartingObjectId` (LongInteger, mandatory) | `OneSchoolGlobalCarousel.mvc.js` model |
| Screen actions | `OnInitialize`: `GetPreloadObject`, `AssignFromObject`, `ListIndexOf`, `ListAppend`. `Handler_BackNavigation`: `SetPreloadObject`. | `OneSchoolGlobalCarousel.mvc.js:323-369, 395-412` |
| Role | Registered users | `OneSchoolGlobalCarousel.mvc.js:479` |
| Blocks | `Layout_DetailPage`, `CustomText`, `EntitiesCarousel`, `BackNavigationHandler`, `BottomBarMenu`, `CommonUI_InsideLayout` | view dependencies |
| Blocks in React | `EntitiesCarousel` exists (`components/directory/EntitiesCarousel`), with a household slot. New: `EntitiesCarousel_OneSchoolGlobal` (16,000 characters), which holds `OneSchoolGlobalDetails_Block`. The React route OneSchoolGlobalDetails exists. | `@origin` search in `app/src`; `EntitiesCarousel_OneSchoolGlobal.mvc.js` |
| Size | 27,979 characters (591 lines) | survey |

What a build means: an entry change in the React Notes (the filter test and the preload of the ids). One new screen
on the pattern of HouseholdCarousel and SupperMeeting_Carousel. One new carousel slot for OSG. The Bookmarks entry
depends on the Bookmarks screen (§7).

## 7. Bookmarks

| Fact | Value | Evidence |
|---|---|---|
| Status on TST | Not new: the survey of 2026-10-13 has it (87,467 characters). The publish changed it (94,500 characters). | both surveys |
| Removed on TST | `Legacy_MyBookmarks.MyBookmarks`, `BookmarksByGroup`, `New_MyBookmarks`, `New_BookmarksByGroup`. Only `Legacy_MyBookmarks.controller.js` stays. | both surveys |
| Entry | Bottom bar, Bookmarks item: `/UBTConnect/Bookmarks` with no condition. | `BottomBarMenu.mvc.js:623-626` |
| React today | The bottom bar chooses by flag: `getHasNewBookmarks` → Bookmarks, else New_MyBookmarks or MyBookmarks. `FLAG_REDIRECTS` sends Bookmarks to MyBookmarks when `C2NewBookmarks` is off. | `app/src/components/layout/BottomBar/BottomBar.tsx:109-112`, `app/src/app/routes.ts:70-73` |
| React route | The route exists with no page, so the router shows NotMigrated. | `app/src/app/routes.generated.ts:12`, `app/src/app/router.tsx:25-28` |
| User decision | "Bookmarks Q1 a (user, 2026-10-22): keep MyBookmarks (D2) until the PROD value is known." | `migration/knowledge/flag-values-tst.json` `changes` |
| Inputs | None | `Bookmarks.mvc.js` model |
| Data | Data action `GetBookmarks` on load; module actions `GetBookmarks_Pills`, `GetBookmarks_FilterYear` | `Bookmarks.mvc.js:634-653, 1123, 1234` |
| Destinations | OneSchoolGlobalCarousel, OneSchoolGlobalDetails (dead branch), SupperMeeting_Details, HouseholdCarousel (filter = Household), HouseholdDetails | `Bookmarks.mvc.js:895-966` |
| Role | Registered users | `Bookmarks.mvc.js:1674` |
| Blocks in React | New: `Bookmarks_Card_List` (29,751), `Bookmarks_Card_Item` (35,347), `Bookmarks_FilterSheet` (33,805). Existing: `Layout_MainPages_FixedTitle`, `App_NotificationIcon`, `FilterSheet`, `NotesSheet`, `NoteListActions`. Local to the Notes page: `Horizontal_Filter_TagList`, `FilterSheet_Icon_Label`, `ItemCard_WithNotes`, `ItemCardActions`. | `@origin` search in `app/src` |
| Size | 94,500 characters (1,951 lines), plus 98,903 in the three new blocks | survey |

What a build means: an entry change in the React bottom bar and in `FLAG_REDIRECTS`. The user decision of 2026-10-22
keeps MyBookmarks today (table above). One new screen that has the structure of Notes (pills, filter sheet, cards with
notes). Four blocks that Bookmarks uses are local to `app/src/pages/Notes/` today.

## 8. MyBookmarks and BookmarksByGroup on TST now

| Fact | Value | Evidence |
|---|---|---|
| `/UBTConnect/MyBookmarks` | HTTP 404, "404 - File or directory not found." The OutSystems app does not load. | `probe-new-screens.json` `myBookmarks` |
| `/UBTConnect/BookmarksByGroup` | HTTP 404, the same page | `probe-new-screens.json` `bookmarksByGroup` |
| TST code | No live screen or block navigates to these URLs. | grep of all sources |
| Old service worker | The copy in `migration/runtime-sources/` (committed 2026-10-21) still maps both URLs to `index.html`. | `UBTConnect.pwaServiceWorker.js:1328, 1371` |
| React | Two pages (2,456 lines without tests), the bottom bar branch, `FLAG_REDIRECTS` and the mocks of `Connect2_MyBookmarks_MUI` | `app/src/pages/MyBookmarks/`, `app/src/pages/BookmarksByGroup/`, `app/src/mocks/modules/Connect2_MyBookmarks_MUI/mocks.ts` |

**Unclear:** what a device shows at these URLs while it still runs the service worker of before 2026-10-27. The probe
blocked service workers.

## 9. Sizes

| Screen | Screen file | New blocks | Existing React blocks used | Entry change in React |
|---|---|---|---|---|
| NotificationDetails | 30,592 | none | all | NotificationsList click, `MarkAsRead` |
| PassportScan | 13,495 | 2 (61,292) + external script | `CommonUI_InsideLayout` | none |
| OrbitAdminMilestones | 22,223 | 1 (44,225) | `Card_Milestone` and layouts | OrbitAdminLanding branch |
| OrbitAdminMilestoneDetail | 17,255 | 2 (117,179) | layouts, `OrbitErrorMessage` | none (from OrbitAdminMilestones) |
| OneSchoolGlobalCarousel | 27,979 | 1 (16,000) | `EntitiesCarousel`, OSG details | Notes filter branch |
| Bookmarks | 94,500 | 3 (98,903) | Notes blocks, `FilterSheet` | bottom bar, `FLAG_REDIRECTS` |

## 10. Capture results and user decisions (2026-10-29)

Capture results (TST, read-only guard on):

| Screen | Result | Evidence |
|---|---|---|
| NotificationDetails | Captured with a notification that is already read (no `MarkAsRead` on the way). | `migration/clarify/tools/probe_notification_ids.cjs` (273 items, 2 read) |
| Bookmarks | Captured. The test account has no bookmarks, so the list is empty. | `migration/screens/Bookmarks/analysis/` |
| OneSchoolGlobalCarousel | Captured by URL. With no preload object, the carousel has no items. | `OneSchoolGlobalCarousel.mvc.js:343-370` |
| PassportScan | Not reachable. "View Passport details" does nothing for the test account: the handler navigates only when `IsFetchingData` is false and `CurrentMemberId` is not 0. | `ScreenBlock_OrbitLanding.mvc.js:1989`; `migration/clarify/tools/probe_passport_entry.cjs` (no navigation, no call in 22 s) |
| PassportScan | The block puts an iframe of the external Orbit Passport portal in a container. The portal signs in with the B2C id token and asks the host for a camera picture. | `migration/runtime-sources/OrbitPassportScanC2.PassportScan.js:1-40, 213-245` |
| OrbitAdminMilestones, OrbitAdminMilestoneDetail | Not capturable: the test account has no admin events (OrbitAdminLanding shows `NoInformation_Orbit`). | `probe-new-screens.json` `orbitAdminLanding` |

User decisions (2026-10-29):

| Id | Question | Answer |
|---|---|---|
| I10-1 | `route.py` still uses the layout from before the refactor (`app/src/screens/<S>/index.tsx`, `route.py:859`; mock check and parity fingerprint `route.py:683, 834`). | (a) Change `route.py` to the current layout (`pages/<S>/<S>Page.tsx`; all `mocks.ts` of `app/src`; fingerprint with `pages/<S>`, `api`, `containers`, `components`, `platform`, `legacy`). Update the path tables of `route-agent.md` and `migration/AGENTS.md`. Test the script. |
| I10-2 | PassportScan | (a) No capture. Build the host screen from the compiled code. In the demo, the iframe opens a local fake portal page that answers the `postMessage` handshake and shows fictional passport data. No parity: the user reviews it. |
| I10-3 | OrbitAdminMilestones and OrbitAdminMilestoneDetail | (a) No capture for both, as OrbitAdminEventDetail (user, 2026-10-16). Build from the compiled code and MCP, with meaningful fictional mocks, and the OrbitAdminLanding branch on `GetMilestoneScanFF` (N1). `GetScanMilestoneQRCode` is only mocked. No parity: the user reviews it. |
| I10-4 | Bookmarks and OneSchoolGlobalCarousel: the states with data are not capturable. | (a) As Notes (user, 2026-10-15): parity compares the captured state with the `empty` mock scenario. The default mock has fictional data (bookmark cards, OSG carousel items), built from the compiled code; the user reviews it. |
| I10-5 | `route.py ready` still runs `consistency_check.py` with the old `stack.json` rules and `scope_guard.py` against `main`. | (a) Use the refactor gates: drop `requiredIfCalls` and `allowedImportRoots` (recorded in `stack.json` `_changes`), check imports with `npm run arch`, keep the `forbidden` rules on `pages/<S>`, required file `<S>Page.tsx`. Scope guard: base is the commit at `route.py start` (in `run.json`); allowed are `pages/<S>`, `migration/screens/<S>` and the folders that the page template lets a route change (`api`, `components`, `containers`, `mocks`, `app/routes`). |
| I10-6 | NotificationDetails Q1: the contract has no FetchMessageInstance and no MarkAsRead; `contract_gen.py` reads the old route copy of `Notifications.mvc.js`. | (a) Fix the source choice (the live TST code wins). Regenerate `openapi.yaml` when Bookmarks retires MyBookmarks and BookmarksByGroup, run `npm run gen:api`, remove the interim `@ts-expect-error` lines. The diff of other operations goes to the user. |
| I10-7 | NotificationDetails Q2: `scaffold_react_app.py --update-routes` reads `migration/survey` of 2026-10-13. | (a) Update only the screen and route list of `migration/survey` from the live survey. Re-run `--update-routes` and check the diff. |
| I10-8 | NotificationDetails Q3 (fact): what FetchMessageInstance returns for an unknown id. MCP (DEV): it calls the service action `Get_UI_NotificationDetails` of `Connect2_Notification_CS`, which is not open in Service Studio. | (a) Read-only probe on TST with an unknown id. Result (2026-10-29, `probe_notification_unknown.cjs`, id 1): HTTP 200 with the empty record (Id "0", empty texts, date 1900-01-01), no exception, no toast. The React mock matches. |

MCP note (DEV, 2026-10-29): NotificationDetails has the roles `UBTOne_User` and `Registered`. TST compiles this to
`checkRegistered()` only (`NotificationDetails.mvc.js:577`), because `Registered` is in the list. No difference.

User decisions on the pipeline tooling (2026-10-29, after `migration/clarify/builds/item10-routepy.md` and
`item10-tooling.md`):

| Id | Question | Answer |
|---|---|---|
| I10-9 | The `forbidden` rules give false hits after the refactor (`NO-RAW-FETCH` matches `flow.fetch(`; rules match test files). | (a) Skip `*.test.*`, `*.spec.*`, `*.stories.*`; `NO-RAW-FETCH` regex `(?<![.\w])fetch\s*\(`. Done: `consistency_check.py`, `migration/stack.json` `_changes`, 2 tests. |
| I10-10 | The scope guard on a shared branch. | (a) Also allow the pipeline outputs `migration/knowledge/**`, `migration/runtime-sources/**`, `migration/survey/**`, `migration/screens/_capture-summary.json`. Skill scripts, platform and finished pages stay flagged; an entry change in a finished page goes to the user, then `--allow`. Done: `scope_guard.py`, 1 test. |
| I10-11 | Old paths in the other skill docs and in `scaffold_react_app.py`. | (a) Update the docs (no scaffold code change). |
| — | `adaptivecards` is not in the `stack.json` allow-list. | Settled by an earlier decision: PD7 (user, 2026-10-28, `app/docs/reference/stack.md:53`). Added with a `_changes` line. |
| — | Tooling Q1: 3 red tests in `routes.test.ts` (the MyBookmarks rows left `routes.generated.ts`). | Ordering only: the Bookmarks route removes the redirect and fixes the tests in this wave (user decision of 2026-10-28, retire MyBookmarks). |
| — | Tooling Q2: refresh the other rows of `migration/survey`? | No: I10-7 asked for the screen and route list only. |
