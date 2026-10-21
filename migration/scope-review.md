# Scope review: UBTConnect (Phase 1)

Date 2026-10-13.

Sources: TST survey (640 compiled files, 0 errors) and `board.py triage`. An extra cross-check used compiled code and
the manifest (`moduleservices/moduleinfo`). Then **a second check with the OutSystems MCP** read the source (Service Studio, DEV).

No screen was captured yet. **Status: Phase 1 finished on 2026-10-14: 41 build (Cx 3455), 42 skip, 0 undecided. The proposal table below stays unchanged as history. The official decisions are on the board and in the log.**

## Summary

| Decision | Screens | Proposal |
|---|---|---|
| D1 LDM V1 / V2 | 6 | build the version that PROD uses now (flag `C2NewLDM`) |
| D2 Bookmarks (3 branches) | 6 | build the branch that PROD uses now (`C2NewBookmarks`, LD `mobileDirectoryBookmarkNote`) |
| D3 Sign-in / system | 7 | (a) build 6 screens with simulated auth, skip InvalidPermissions |
| D4 CommunityBusinessDetails | 1 | skip |
| D5 ContactByEmailContacts | 1 | skip |
| D6 Triage suggests skip | 10 | skip |
| D7 Clearly build | 51 | build |
| D8 Embedded content from external apps | (4 screens in D7) | keep the screens, make the embedded part a placeholder or mock |
| D9 Orbit, Assemble (separate modules) | (18 screens in D1/D7) | in scope |
| D10 ConnectShare (deep link of a share link) | 1 | build if a share link must open in the React app |
| D11 Notifications / MessageList (flag `C2NewNotifications`) | 2 | build the variant that PROD uses now |

Total: 6 + 6 + 7 + 1 + 1 + 10 + 49 + 1 + 2 = 83 (D7 has 49 left after D11 was split off).

## Check with the OutSystems MCP (2026-10-13)

Sources: `listApps`, `runQuery`, `getSerializedObject` (the whole `UBTConnect` module, 13.5 million characters, all processed by script).
Only read tools were used. Service Studio is on **DEV**. The survey is on **TST**.

| Check | Result |
|---|---|
| List of screens | DEV has exactly 83 screens, with the same names and the same flows as TST |
| Default screen / start screen | `DefaultScreen = HomeFeed`, `SplashScreen = Splash` (matches the manifest; D3 is correct) |
| Navigation graph | Built from destination nodes, link/button `OnClick`, nested blocks and client actions. Dead code is left out. DEV = TST: **806 edges on each side, 0 screens with other links into them, the same 14 screens that cannot be reached** |
| Dead code in DEV | 2 orphan `Destination Notes` nodes in `BottomBarMenu`. The block `Locality_LocalityContacts` is in the False branch of `If[True]` in Locality_Details (D5 is correct, with stronger evidence) |
| D1 | Exactly 5 places branch on `GetHasNewLDM.Out_HasNewLDM` → V2 / V1 (FeedBlock_Services, LDM_MyEvents, MessageDetail ×2, MyCalendar) |
| D2 | `BottomBarMenu` is the same as TST: LD `MobileDirectoryBookmarkNote` → `GetHasNewBookmarks` → Bookmarks / New_MyBookmarks / MyBookmarks |
| MyCalendar | The handlers `NavigateTo_MyCalendar…` (AssembleEvents, LDM_MyEvents, OrbitLanding) open **MyEntertaining**: MyCalendar was replaced |
| **Correction: ConnectShare** | It is a **deep link target**: Splash → `GetColdStartLinkURL` and the block `HandleOnResumeOpenLink` → `GetURLFromEventDataURL` change `ConnectSharing/Details` into `UBTConnect/ConnectShare`. ConnectShare forwards to 9 detail screens. Triage did not see it because navigation uses a URL string. See D10 |
| Other deep links | `DeeplinkHandlerCentralOnDeeplinkOpen` → AssembleDetail, MessageDetail; push `FCM_DeeplinkCallback` → PINRegister, PINUnlock |
| Screens that allow Anonymous | ContactUsDetails, ContactUsMenu, InvalidPermissions, Locality_Details, Login, MessageDetail, MessageList, PINBiometricsMenu, Splash |

## Which apps are embedded in Connect?

Two apps **outside OutSystems** are embedded in Connect at run time:

| Block | Module | How it is embedded | Used in |
|---|---|---|---|
| `Embedded_FeedCMS` | `UBTConnect_EmbedFeed` | `iframe`; configuration from `DataActionGetFeedConfig` (`BaseURL`, `Token`, `B2CClientId`); scroll, share and download are handled through events | HomeFeed, FeedItemDetail, MessageDetail |
| `Embedded_MyEntertaining` | `UBTConnect_EmbedMyEntertaining` | loads the script `<BaseURL>/embed-entertaining.js` (`RequireScript`); configuration from `DataActionGetEntertainingConfig`; gets the ID token through `AppManager_Get_UserIdToken`; listens to messages | MyEntertaining |

The content inside these two parts does not belong to OutSystems. The capture and parity of the skill see only the outer frame. They cannot compare
the content of a cross-origin iframe. See D8.

**Orbit and Assemble are not embedded apps.** Their screens are screens of the `UBTConnect` module itself (route
`/UBTConnect/...`, the same SPA, no iframe). But most of their UI comes from blocks of other modules:

| Module | Screens that use it | Different blocks | Screens |
|---|---|---|---|
| `Connect2_OrbitMobile_MUI` | 19 | 99 | 12 Orbit screens, 6 LDM screens, EmailContact |
| `Connect2_Assemble_MUI` | 3 | 26 | AssembleEvents, AssembleDetail, Assemble_BrowseByCountry |
| `Connect2_MyBookmarks_MUI` | 4 | 11 | MyBookmarks, New_MyBookmarks, BookmarksByGroup, New_BookmarksByGroup |

The manifest records only the owner application of `UBTConnect`. It does not record the owner of the referenced modules.

The OutSystems MCP (Service Studio, DEV environment, 2026-10-13) confirms that the open module is `UBTConnect`
(`moduleType: Mobile`, description "Main app for Connect 2.0"). It has 78 referenced modules, including:
- Orbit: `Connect2_OrbitMobile_MUI` (Mobile, UI) + `Connect2_OrbitMobile_BL` (Service).
- Assemble: `Connect2_Assemble_MUI` (Mobile) + `Connect2_Assemble_CS` (Service).
- Bookmarks: `Connect2_MyBookmarks_MUI` (Mobile), `_BL`, `_IS`, `UBTConnect_Bookmarks_MCS`.
- Embed: `UBTConnect_EmbedFeed`, `UBTConnect_EmbedMyEntertaining` (Mobile).

The Model API does not store the OutSystems application of a module. `IReference` has no such field. The `Description` of all
`Connect2_*` modules is empty. So the **MCP cannot answer** whether Orbit/Assemble are separate apps (of another team).
You must confirm it, or check Service Center (Factory → Modules → Application column). See D9.

## Details

### D1. LDM: V1 or V2 (6 screens)
- V1 (`Legacy_LDMEventsFlow`): LDM_MyEvents, LDM_EventDetail, LDM_Email. V2 (`Legacy_LDMEventsFlow_V2`): the same names + `_V2`.
- `FeedBlock_Services`, `MessageDetail`, `LDM_MyEvents` and `MyCalendar` call `UBTConnect_Utils.GetHasNewLDM`
  → `Connect_OutSystems_PermissionCheck(OutSystems_FF.C2NewLDM).HasAccess`: true → V2, false → V1. The flag depends on the permission of the user.
- (a) V2 only · (b) V1 only · (c) both, by flag. Recommendation: (a) if PROD already turned the flag on for every user, (c) if PROD turns it on step by step.

### D2. Bookmarks: choose a branch (6 screens)
The Bookmarks tab (`App_Common.BottomBarMenu`):

| `C2NewBookmarks` | LD `mobileDirectoryBookmarkNote` | Screens |
|---|---|---|
| on | any | Bookmarks |
| off | on | New_MyBookmarks → New_BookmarksByGroup → ShareObject (`zTemp_Flow`) |
| off | off | MyBookmarks → BookmarksByGroup |

CommunityBusinessDetails_CoomingSoon (counted in D7) opens only from MyBookmarks, BookmarksByGroup, New_MyBookmarks,
New_BookmarksByGroup, and **not** from Bookmarks [MCP]. If only Bookmarks is built, skip this screen too. Recommendation: build the branch that PROD uses now.

### D3. Sign-in / system (7 screens)
- Login, PINRegister: entry pages of the app; `AppManager_AfterInitialize` → `PIN_Check.NeedRegister` → PINRegister.
- PINUnlock: the triage suggestion to skip is **wrong**: the same function → `NeedUnlock` → `"PINUnlock"`. You confirmed that this is the lock screen.
- Splash: the triage suggestion to skip is **wrong**: manifest `splashScreenName = App_Common.Splash` (the start screen; `homeScreenName = Home.HomeFeed`).
- PINBiometricsMenu (from Menu), PINChange (from PINBiometricsMenu).
- InvalidPermissions: no link, URL string or exception handler points to it, also not in the source [MCP]. Login has the input
  `In_IsFromInvalidPermissions`, but nothing opens Login with that parameter from this screen.
- (a) build the first 6 screens with simulated auth, skip InvalidPermissions.
- (b) skip all 7, the React app opens HomeFeed directly.
- (c) only the PIN screens.
- Recommendation: (a). Known flow: `migration/knowledge/auth.md`.

### D4. CommunityBusinessDetails: skip
Flow `zDEV_Directory_CommunityBusinessBlocks`. No link points to it. The working link opens `CommunityBusinessDetails_CoomingSoon`.

### D5. ContactByEmailContacts: skip
Its only link is in the block `Locality_LocalityContacts`. In the source, this block is only in the False branch of `If[True]`
in Locality_Details, so it never shows [MCP].

### D6. Skip 10 screens
No link or URL string points to them, also not in the source [MCP]: EmailContact, EmailTarget, MyCalendar (replaced by
MyEntertaining), OneSchoolGlobalEventDetail. Flow `Deprecated_Calendar_PersonalEvent`, opened only from skipped screens: PersonalEventDetails,
PersonalEventForm, Recurrence, Reminder, ViewEventList. Test screen: TestOpenShare.

### D7. Build 51 screens
They open from the shell or from HomeFeed. Many flows named `Legacy_*` still run (the name is misleading). The list is in the table below.

### D8. Embedded content from external apps
HomeFeed, FeedItemDetail and MessageDetail contain the Feed CMS iframe. MyEntertaining is almost only the embedded part.
- (a) The React app embeds the real app (same `BaseURL`, needs a real token: depends on the real backend).
- (b) Keep the screen, replace the embedded part with a placeholder or mock page of the same size (fits the mock data stage).
- (c) Same as (b), and skip MyEntertaining.
- Recommendation: (b). The technical details are decided in Phase 4 (stack).

### D9. Are Orbit and Assemble in scope?
12 Orbit screens + 3 Assemble screens (D7) and 6 LDM screens (D1) are built mostly from `Connect2_OrbitMobile_MUI` (99 blocks) and
`Connect2_Assemble_MUI` (26 blocks).
- (a) In scope: build these blocks once in the foundation as shared blocks.
- (b) Out of scope: let the team that owns the module migrate them separately.
- (c) In scope but later (last wave).
- Recommendation: (a) if the goal is to replace the whole Connect mobile app. Note that the largest cost is in the 99 Orbit blocks.

### D10. ConnectShare (62): target of the share link
When the app opens from a share link `ConnectSharing/Details…`, Splash (cold start) or `HandleOnResumeOpenLink` (app already
running) changes the link into `UBTConnect/ConnectShare`. This screen reads the parameters and forwards to AcceptPendingPolicies, ContactUsMenu,
FeedItemDetail, HomeFeed, HouseholdDetails, Login, OneSchoolGlobalDetails, PINRegister or SupperMeeting_Details [MCP].
- (a) Build: a share link opens in the React app (on the web, a deep link is only a URL).
- (b) Skip: the React app does not support share links.
- Recommendation: (a) if the share feature (LegacyShareObject, ShareObject) is in scope. The screen is mostly navigation logic.

### D11. Notifications: Notifications or MessageList (found in round 3a)
The notification bell (`App_NotificationIcon`, on HomeFeed and 5 other screens) calls `UBTConnect_Utils.GetHasNewNotifications`
→ `Connect_OutSystems_PermissionCheck(OutSystems_FF.C2NewNotifications)`: true → **Notifications**, false → **MessageList**
(→ MessageDetail). The flag depends on the permission of each user. Triage did not see it because the two names are not alike. MessageDetail also opens
through a deep link and also calls `GetHasNewNotifications`. The full list of 20 flag helpers: `knowledge/feature-flag-helpers.md`.
- (a) Notifications only · (b) MessageList only (+ MessageDetail) · (c) both, by flag.

## Entry points to external apps (decision V3c, Q2 a)

The React app does not rebuild the separate apps. Their entry points open the external app through a configurable URL.
The URL format / deep link is asked in Phase 4. In the mock stage it is a mock page "Open app …". Entry points on TST:

| External app | Entry point in Connect |
|---|---|
| Orbit | HomeFeed: service tiles `orbit`, `orbitAdmin`; MessageDetail: links to EventDetail, HostSurvey, MilestoneDetail; deep link, push |
| Assemble | HomeFeed: service tile `assemble`; MessageDetail: link to AssembleDetail; deep link `DeeplinkHandlerCentral` → AssembleDetail |
| LDM (target app not known: Orbit or a separate app → ask in Phase 4) | HomeFeed: service tile `LDM`; MessageDetail: links to LDM_EventDetail(_V2), LDM_Email(_V2) |

When HomeFeed and MessageDetail are built, these entry points are a difference from the original app that the user already decided.

## Handover to the next phases

**Phase 2 (capture):**
- AcceptPendingPolicies: does the test account have a policy that waits for acceptance? If not, another account is needed, or note that the screen cannot be captured.
- Notifications (D11): TST has `C2NewNotifications` = false → capture with a direct URL.
- All write actions (mark as read, notes, share, send email, accept policy…) are blocked during capture. In the React app they are mocks.

**Phase 3 (flags):** `flags.py scan` finds only 1 flag. Compare with the 19 helpers in `knowledge/feature-flag-helpers.md`.
The build method must be decided for: `C2NewNotifications` (bell, both branches are built), `C2EnableC1DirectoryView` (Directory tab:
CountryList / Locality_Details), `C2EnableCarousel` (HouseholdCarousel / HouseholdDetails), and the flags inside screens
(Feed, CustomServices, ExtendedShare, Photobook, DeceasedProfile…).

**Phase 4 (stack):**
- External apps: URL / deep link of Orbit and Assemble; target app of LDM (Orbit or a separate app: not known).
- External embeds (D8 b): Feed CMS iframe, `embed-entertaining.js` → mock page, plug in the real one later.
- Native features on the web: biometrics (PINBiometricsMenu, PIN lock layer), exit confirmation dialog (back button),
  push notifications, deep link (URL format for ConnectShare), file download.
- External libraries: SortableJS (Services), Leaflet (BrowseDirectory, CountryDetails), PanZoom (Photobook).
- The original app is OutSystems **Mobile** (native plugins), not Reactive Web.

## Decision log

The order of decisions follows the user journey: [scope-plan.md](scope-plan.md). Each row records one decision. The board is the official store.

| Date | Round | Decision | Screens | Who |
|---|---|---|---|---|
| 2026-10-14 | V1 | D3 (a): build, simulated sign-in and PIN; the real B2C is not migrated | Splash, Login, PINRegister, PINUnlock | user |
| 2026-10-14 | V1 | build | AcceptPendingPolicies | user |
| 2026-10-14 | V1 | skip:dead | InvalidPermissions | user |
| 2026-10-14 | V2 | build | HomeFeed | user |
| 2026-10-14 | V2 | D8 (b): Feed CMS iframe → mock page of the same size, plug in the real URL later (Phase 4); applies also to FeedItemDetail and MessageDetail when these screens are built | HomeFeed (+ FeedItemDetail, MessageDetail) | user |
| 2026-10-14 | V3a | build | Services, Notes, Search, Updates_SingleList | user |
| 2026-10-14 | V3a | D11 (c): build both, the bell chooses by flag `C2NewNotifications` (true → Notifications) | Notifications, MessageList | user |
| 2026-10-14 | V3a | D8 (b): build, the embedded `embed-entertaining.js` part is a mock page, plug in the real one later | MyEntertaining | user |
| 2026-10-14 | V3b | build (TST: C1DirectoryView = true, C2EnableCarousel = true) | CountryList, Locality_Details, HouseholdCarousel, HouseholdDetails | user |
| 2026-10-14 | V3c | D9: Orbit is a separate app → `skip:external` (12 Orbit screens + 2 Orbit contact forms); the entry point opens the Orbit app through a configurable URL (Q2 a) | OrbitLanding, OrbitAdminLanding, EventDetail, MilestoneDetail, EventBooklet, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, ViewDocuments, QRCodeGenerate, OrbitAdminEventDetail, ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost | user |
| 2026-10-14 | V3c | D9: Assemble is a separate app like Orbit → `skip:external`; the entry point opens the external app | AssembleEvents, AssembleDetail, Assemble_BrowseByCountry | user |
| 2026-10-14 | V3c | LDM is an external app (its content and data are in the Orbit module `Connect2_OrbitMobile_MUI.LDM_*`) → `skip:external`; **D1 closed** (no need to choose V1/V2); the target app of the LDM entry point is not known → ask in Phase 4 | LDM_MyEvents, LDM_EventDetail, LDM_Email, LDM_MyEvents_V2, LDM_EventDetail_V2, LDM_Email_V2, ContactByEmailLDMCoordinator | user |
| 2026-10-14 | V3d | build | Menu | user |
| 2026-10-14 | V3d | D2 (a): only the TST branch (branch 3); in the React app the Bookmarks tab always opens MyBookmarks | build: MyBookmarks, BookmarksByGroup, CommunityBusinessDetails_CoomingSoon | user |
| 2026-10-14 | V3d | D2: branches 1 and 2 → `skip:variant` (can be reopened; branch selection logic must be added to the bottom bar through the foundation) | Bookmarks, New_MyBookmarks, New_BookmarksByGroup, ShareObject | user |
| 2026-10-14 | V3e | build | LegacyShareObject | user |
| 2026-10-14 | V4a | build | BrowseDirectory, BrowseCountries, CountryDetails, Household_Relations, Photobook, OneSchoolGlobalDetails, SupperMeeting_Carousel, SupperMeeting_Details | user |
| 2026-10-14 | V4a | `skip:variant`: the map icon shows only when `C2EnableMaps` is on (TST = false) | Map | user |
| 2026-10-14 | V4b | build (Feed CMS follows D8 b; Orbit/Assemble/LDM links open the external app) | MessageDetail, FeedItemDetail | user |
| 2026-10-14 | V4c | build (biometrics on the web: Phase 4) | Profile, TermsAndPoliciesMenu, ContactUsMenu, ContactUsDetails, ContactByEmailMember, ContactByEmailOneSchoolGlobal, PINBiometricsMenu, PINChange | user |
| 2026-10-14 | V6 | D10 (a): build; accepts share links from outside (TST: `GetURLFromEventDataURL` changes `ConnectSharing/Details` → `UBTConnect/ConnectShare`) | ConnectShare | user |
| 2026-10-14 | V7 | `skip:dead` (no entry path on TST, checked against DEV) | CommunityBusinessDetails, ContactByEmailContacts, EmailContact, EmailTarget, MyCalendar, OneSchoolGlobalEventDetail, PersonalEventDetails, PersonalEventForm, Recurrence, Reminder, ViewEventList, TestOpenShare | user |

## Skipped screens

They can be reopened at any time (method: [scope-plan.md](scope-plan.md) § "Reopen a skipped screen").

| Screen | Label | Reason | Review when |
|---|---|---|---|
| InvalidPermissions | skip:dead | No link, URL string or exception handler points to it (TST; DEV for reference) | The original app moves to this screen during capture/recording (for example an account without permission) |
| Orbit: OrbitLanding, OrbitAdminLanding, EventDetail, MilestoneDetail, EventBooklet, GuestArrangements, HelpersDetail, HostSurvey, TransportDetail, ViewDocuments, QRCodeGenerate, OrbitAdminEventDetail | skip:external | Orbit is a separate app; Connect only opens it (user) | Connect must contain the Orbit screens again |
| ContactByEmailOrbitHelpdesk, ContactByEmailOrbitHost | skip:external | The contact forms open only from Orbit screens | Same as Orbit |
| Assemble: AssembleEvents, AssembleDetail, Assemble_BrowseByCountry | skip:external | Assemble is a separate app like Orbit (user) | Connect must contain the Assemble screens again |
| LDM: LDM_MyEvents, LDM_EventDetail, LDM_Email (+ _V2) | skip:external | Content and data belong to the Orbit module; separate app (user) | Connect must contain the LDM screens again |
| ContactByEmailLDMCoordinator | skip:external | The contact form opens only from LDM_EventDetail | Same as LDM |
| Bookmarks | skip:variant | Branch 1 of the Bookmarks tab; TST has `C2NewBookmarks` = false | PROD/user turns on `C2NewBookmarks`. When reopened: add branch selection logic to `BottomBarMenu` (foundation CR), decide the flag in Phase 3 |
| New_MyBookmarks, New_BookmarksByGroup, ShareObject | skip:variant | Branch 2; TST has LD `mobileDirectoryBookmarkNote` = false | `C2NewBookmarks` = false and the LD is on. When reopened: as above |
| Map | skip:variant | The only entry point (an icon in Locality_Details) shows only when `C2EnableMaps` is on; TST = false | PROD/user turns on `C2EnableMaps`. When reopened: add the icon by flag in Locality_Details, decide the flag in Phase 3; Leaflet |
| CommunityBusinessDetails | skip:dead | Flow `zDEV_`; the working link opens the CoomingSoon version | TST changes the link to the real screen |
| ContactByEmailContacts | skip:dead | Its only link is in a block that no screen embeds (DEV: the `If[True]` branch is off) | The block appears in Locality_Details |
| EmailContact, EmailTarget | skip:dead | Orbit / LDM flow (external apps), no entry path | Orbit / LDM return to Connect |
| MyCalendar | skip:dead | Replaced by MyEntertaining | A new link to MyCalendar exists |
| OneSchoolGlobalEventDetail | skip:dead | No entry path, the input is not used | A new link exists |
| PersonalEventDetails, PersonalEventForm, Recurrence, Reminder, ViewEventList | skip:dead | Flow `Deprecated_Calendar_PersonalEvent`; `C2EnablePersonalEvents` = false (TST) | Personal events are turned on again |
| TestOpenShare | skip:dead | Test screen (`zTemp_`) | — |

## Table of all 83 screens

Cx = complexity computed by the survey. Triage = suggestion of the script. Proposal = after the cross-check against the code.

| # | Screen | Flow | Cx | Triage | Group | Proposal | Evidence / note |
|---|---|---|---|---|---|---|---|
| 1 | LDM_Email | Legacy_LDMEventsFlow | 81 | ?build | D1 | by flag `C2NewLDM` | V2 if `C2NewLDM` is true, V1 if false |
| 2 | LDM_EventDetail | Legacy_LDMEventsFlow | 95 | ?build | D1 | by flag `C2NewLDM` | V2 if `C2NewLDM` is true, V1 if false |
| 3 | LDM_MyEvents | Legacy_LDMEventsFlow | 111 | ?build | D1 | by flag `C2NewLDM` | V2 if `C2NewLDM` is true, V1 if false |
| 4 | LDM_Email_V2 | Legacy_LDMEventsFlow_V2 | 81 | ?build | D1 | by flag `C2NewLDM` | V2 if `C2NewLDM` is true, V1 if false |
| 5 | LDM_EventDetail_V2 | Legacy_LDMEventsFlow_V2 | 95 | ?build | D1 | by flag `C2NewLDM` | V2 if `C2NewLDM` is true, V1 if false |
| 6 | LDM_MyEvents_V2 | Legacy_LDMEventsFlow_V2 | 110 | ?build | D1 | by flag `C2NewLDM` | V2 if `C2NewLDM` is true, V1 if false |
| 7 | Bookmarks | Bookmarks | 117 | ?build | D2 | PROD branch | `C2NewBookmarks` on |
| 8 | BookmarksByGroup | Legacy_MyBookmarks | 115 | ?build | D2 | PROD branch | from MyBookmarks |
| 9 | MyBookmarks | Legacy_MyBookmarks | 85 | ?build | D2 | PROD branch | `C2NewBookmarks` off, LD off |
| 10 | New_BookmarksByGroup | Legacy_MyBookmarks | 94 | ?build | D2 | PROD branch | from New_MyBookmarks |
| 11 | New_MyBookmarks | Legacy_MyBookmarks | 85 | ?build | D2 | PROD branch | `C2NewBookmarks` off, LD on |
| 12 | ShareObject | zTemp_Flow | 10 | ?build | D2 | PROD branch | `zTemp_Flow`; only from New_BookmarksByGroup |
| 13 | InvalidPermissions | App_Common | 28 | ?skip | D3 | skip | no reference in the compiled code |
| 14 | Login | App_Common | 57 | ask | D3 | build (a) | entry page of the app |
| 15 | Splash | App_Common | 18 | ?skip | D3 | build (a) | ⚠️ triage is wrong: manifest `splashScreenName` |
| 16 | PINBiometricsMenu | App_Menu | 17 | ask | D3 | build (a) | from Menu |
| 17 | PINChange | App_PIN | 33 | ask | D3 | build (a) | from PINBiometricsMenu |
| 18 | PINRegister | App_PIN | 53 | ask | D3 | build (a) | `AppManager_AfterInitialize` → NeedRegister |
| 19 | PINUnlock | App_PIN | 50 | ?skip | D3 | build (a) | ⚠️ triage is wrong: `AfterInitialize` → NeedUnlock; lock screen (user) |
| 20 | CommunityBusinessDetails | zDEV_Directory_CommunityBusinessBlocks | 64 | ask | D4 | skip | `zDEV_` flow; the real link opens the CoomingSoon version |
| 21 | ContactByEmailContacts | ContactFlow | 29 | ask | D5 | skip | only a link from a block that no screen embeds |
| 22 | MyCalendar | Calendar | 85 | ?skip | D6 | skip | no link to it; not mentioned anywhere |
| 23 | PersonalEventDetails | Deprecated_Calendar_PersonalEvent | 59 | ?skip | D6 | skip | only from a skipped screen: ViewEventList; content from Deprecated_Calendar_PersonalEvent |
| 24 | PersonalEventForm | Deprecated_Calendar_PersonalEvent | 108 | ?skip | D6 | skip | only from a skipped screen: MyCalendar; content from Deprecated_Calendar_PersonalEvent |
| 25 | Recurrence | Deprecated_Calendar_PersonalEvent | 80 | ?skip | D6 | skip | only from a skipped screen: PersonalEventForm; content from Deprecated_Calendar_PersonalEvent |
| 26 | Reminder | Deprecated_Calendar_PersonalEvent | 53 | ?skip | D6 | skip | only from a skipped screen: PersonalEventForm |
| 27 | ViewEventList | Deprecated_Calendar_PersonalEvent | 6 | ?skip | D6 | skip | only from a skipped screen: PersonalEventForm |
| 28 | OneSchoolGlobalEventDetail | Directory_OneSchoolGlobal | 35 | ?skip | D6 | skip | no link to it; not mentioned anywhere |
| 29 | EmailTarget | Legacy_LDMEventsFlow | 73 | ?skip | D6 | skip | no link to it; not mentioned anywhere; content from Email (names can mislead: conf |
| 30 | EmailContact | Legacy_OrbitEventsFlow | 73 | ?skip | D6 | skip | no link to it; not mentioned anywhere |
| 31 | ConnectShare | Legacy_Share | 62 | ?skip | D10 | build (a) | ⚠️ triage is wrong: deep link target `ConnectSharing/Details` through `GetURLFromEventDataURL` [MCP] |
| 32 | TestOpenShare | zTemp_Flow | 9 | ?skip | D6 | skip | name of a test screen |
| 33 | Menu | App_Menu | 78 | ?build | D7 | build | from AssembleDetail, AssembleEvents, Bookmarks |
| 34 | TermsAndPoliciesMenu | App_Menu | 55 | ?build | D7 | build | from Menu |
| 35 | ContactUsDetails | App_Menu_ContactUs | 77 | ?build | D7 | build | from ContactUsMenu |
| 36 | ContactUsMenu | App_Menu_ContactUs | 56 | ?build | D7 | build | opens from the shell |
| 37 | Notifications | App_Notifications | 96 | ?build | D11 | by flag `C2NewNotifications` | bell → Notifications if the flag is true [TST] |
| 38 | AcceptPendingPolicies | App_Policies | 56 | ?build | D7 | build | opens from the shell |
| 39 | Profile | App_Profile | 151 | ?build | D7 | build | from HouseholdCarousel, HouseholdDetails, Locality_Details |
| 40 | Services | App_Services | 24 | ?build | D7 | build | from HomeFeed |
| 41 | MyEntertaining | Calendar | 57 | ?build | D7 | build | D8: embed `embed-entertaining.js` |
| 42 | ContactByEmailLDMCoordinator | ContactFlow | 25 | ?build | D7 | build | from LDM_EventDetail, LDM_EventDetail_V2 |
| 43 | ContactByEmailMember | ContactFlow | 31 | ?build | D7 | build | from AssembleDetail, HouseholdCarousel, HouseholdDetails |
| 44 | ContactByEmailOneSchoolGlobal | ContactFlow | 25 | ?build | D7 | build | from HouseholdCarousel, HouseholdDetails, Locality_Details |
| 45 | ContactByEmailOrbitHelpdesk | ContactFlow | 25 | ?build | D7 | build | from EventDetail, GuestArrangements, HelpersDetail |
| 46 | ContactByEmailOrbitHost | ContactFlow | 31 | ?build | D7 | build | from MilestoneDetail |
| 47 | HouseholdCarousel | Directory_Household | 167 | ?build | D7 | build | from AssembleDetail, BookmarksByGroup, HomeFeed |
| 48 | HouseholdDetails | Directory_Household | 144 | ?build | D7 | build | from AssembleDetail, Bookmarks, BookmarksByGroup |
| 49 | Household_Relations | Directory_Household | 101 | ?build | D7 | build | from HouseholdCarousel, HouseholdDetails, Locality_Details |
| 50 | BrowseCountries | Directory_Locality | 72 | ?build | D7 | build | from BrowseDirectory |
| 51 | BrowseDirectory | Directory_Locality | 74 | ?build | D7 | build | from BrowseCountries, Locality_Details |
| 52 | CountryDetails | Directory_Locality | 89 | ?build | D7 | build | from CountryList, Locality_Details, Map |
| 53 | CountryList | Directory_Locality | 89 | ?build | D7 | build | from AssembleDetail, AssembleEvents, Bookmarks |
| 54 | Locality_Details | Directory_Locality | 185 | ?build | D7 | build | from AssembleDetail, AssembleEvents, Bookmarks |
| 55 | OneSchoolGlobalDetails | Directory_OneSchoolGlobal | 127 | ?build | D7 | build | from BookmarksByGroup, Locality_Details, Map |
| 56 | Photobook | Directory_Photobook | 74 | ?build | D7 | build | from HouseholdCarousel, HouseholdDetails, Locality_Details |
| 57 | Search | Directory_Search | 95 | ?build | D7 | build | from CountryList, HomeFeed, Locality_Details |
| 58 | SupperMeeting_Carousel | Directory_SupperMeetings | 155 | ?build | D7 | build | from Locality_Details |
| 59 | SupperMeeting_Details | Directory_SupperMeetings | 127 | ?build | D7 | build | from BookmarksByGroup, HouseholdCarousel, HouseholdDetails |
| 60 | Updates_SingleList | Directory_Updates | 123 | ?build | D7 | build | from AssembleDetail, AssembleEvents, Bookmarks |
| 61 | FeedItemDetail | Home | 80 | ?build | D7 | build | D8: Feed CMS iframe |
| 62 | HomeFeed | Home | 139 | ?build | D7 | build | D8: Feed CMS iframe |
| 63 | AssembleDetail | Legacy_AssembleFlow | 139 | ?build | D7 | build | D9: `Connect2_Assemble_MUI` |
| 64 | AssembleEvents | Legacy_AssembleFlow | 121 | ?build | D7 | build | D9: `Connect2_Assemble_MUI` |
| 65 | Assemble_BrowseByCountry | Legacy_AssembleFlow | 64 | ?build | D7 | build | D9: `Connect2_Assemble_MUI` |
| 66 | MessageDetail | Legacy_MyNotificationsFlow | 125 | ?build | D7 | build | D8: Feed CMS iframe |
| 67 | MessageList | Legacy_MyNotificationsFlow | 93 | ?build | D11 | by flag `C2NewNotifications` | bell → MessageList if the flag is false [TST]; the name has Legacy_ but it still runs |
| 68 | OrbitAdminEventDetail | Legacy_OrbitAdminFlow | 76 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 69 | OrbitAdminLanding | Legacy_OrbitAdminFlow | 75 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 70 | EventBooklet | Legacy_OrbitEventsFlow | 75 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 71 | EventDetail | Legacy_OrbitEventsFlow | 86 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 72 | GuestArrangements | Legacy_OrbitEventsFlow | 68 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 73 | HelpersDetail | Legacy_OrbitEventsFlow | 72 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 74 | HostSurvey | Legacy_OrbitEventsFlow | 91 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 75 | MilestoneDetail | Legacy_OrbitEventsFlow | 107 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 76 | OrbitLanding | Legacy_OrbitEventsFlow | 83 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 77 | TransportDetail | Legacy_OrbitEventsFlow | 62 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 78 | ViewDocuments | Legacy_OrbitEventsFlow | 62 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 79 | QRCodeGenerate | Legacy_OrbitQRCodeFlow | 61 | ?build | D7 | build | D9: `Connect2_OrbitMobile_MUI` |
| 80 | LegacyShareObject | Legacy_Share | 71 | ?build | D7 | build | the name has Legacy but it opens from AssembleDetail, FeedItemDetail, Feed_Embeded |
| 81 | Map | Map | 185 | ?build | D7 | build | from Locality_Details |
| 82 | Notes | Notes | 119 | ?build | D7 | build | from HomeFeed |
| 83 | CommunityBusinessDetails_CoomingSoon | zDEV_Directory_CommunityBusinessBlocks | 10 | ?build | D7 | build | by D2 (opens only from bookmark screens) |

## How to answer

Example: `D1: a · D2: only Bookmarks · D3: a · D4–D7: as proposed · D8: b · D9: a · D10: a`, or write an exception for each screen.
Each decision is recorded with `board.py set <Screen> decision=… reason="… (user, <date>)"`.
