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
