# Migration board: UBTConnect

Lean status table. Long notes live in `screens/<Screen>/notes.md`. Change rows with `scripts/board.py set`, not by hand, so parallel agents do not overwrite each other. Agents start only on `Decision = build`.

Complexity left on build rows not yet built: 117

| Screen | Route | Wave | Cx | Tier | Decision | Reason | Status | Owner |
|---|---|---|---|---|---|---|---|---|
| AcceptPendingPolicies | `/UBTConnect/AcceptPendingPolicies` | 1 | 56 | lite | build | V1 · policy checker on 67 screens leads here; AcceptPolicies (write) mocked (user, 2026-10-14) | built | route-acceptpolicies |
| Login | `/UBTConnect/Login` | 1 | 57 | lite | build | V1 · D3(a) · build with mock sign-in + PIN; real B2C not migrated (user, 2026-10-14) | built | route-login |
| PINRegister | `/UBTConnect/PINRegister` | 1 | 53 | lite | build | V1 · D3(a) · build with mock sign-in + PIN; real B2C not migrated (user, 2026-10-14) | built | route-pinregister |
| PINUnlock | `/UBTConnect/PINUnlock` | 1 | 50 | lite | build | V1 · D3(a) · build with mock sign-in + PIN; real B2C not migrated (user, 2026-10-14) | built | route-pinunlock |
| Splash | `/UBTConnect/Splash` | 1 | 18 | lite | build | V1 · D3(a) · build with mock sign-in + PIN; real B2C not migrated (user, 2026-10-14) | built | route-splash |
| HomeFeed | `/UBTConnect/HomeFeed` | 2 | 139 | full | build | V2 · default screen · D8(b): Feed CMS iframe = same-size mock page, real URL pluggable later (Phase 4) (user, 2026-10-14) | built | route-homefeed |
| FeedItemDetail | `/UBTConnect/FeedItemDetail` | 3 | 80 | lite | build | V4b · from MessageDetail (and ConnectShare); Feed CMS = mock (D8 b) (user, 2026-10-14) | built | route-feeditemdetail |
| MessageDetail | `/UBTConnect/MessageDetail` | 3 | 125 | full | build | V4b · target of MessageList, deep links, push; Feed CMS = mock (D8 b); Orbit/Assemble/LDM targets are in-app UBTConnect screens, now in scope (user, 2026-10-16) | built | route-messagedetail |
| MessageList | `/UBTConnect/MessageList` | 3 | 93 | full | build | V3a · D11(c): build both, bell picks by flag C2NewNotifications (true → Notifications) (user, 2026-10-14) | built | route-messagelist |
| MyEntertaining | `/UBTConnect/MyEntertaining` | 3 | 57 | lite | build | V3a · D8(b): embed-entertaining.js = same-size mock, real embed pluggable later (user, 2026-10-14) | built | route-myentertaining |
| Notes | `/UBTConnect/Notes` | 3 | 119 | full | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-notes |
| Notifications | `/UBTConnect/Notifications` | 3 | 96 | full | build | V3a · D11(c): build both, bell picks by flag C2NewNotifications (true → Notifications) (user, 2026-10-14) | built | route-notifications |
| Search | `/UBTConnect/Search` | 3 | 95 | lite | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-search |
| Services | `/UBTConnect/Services` | 3 | 24 | lite | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-services |
| Updates_SingleList | `/UBTConnect/Updates_SingleList` | 3 | 123 | full | build | V3a · opened from HomeFeed / bottom bar; writes mocked (user, 2026-10-14) | built | route-updates-singlelist |
| BrowseCountries | `/UBTConnect/BrowseCountries` | 4 | 72 | lite | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-browsecountries |
| BrowseDirectory | `/UBTConnect/BrowseDirectory` | 4 | 74 | lite | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-browsedirectory |
| CommunityBusinessDetails_CoomingSoon | `/UBTConnect/CommunityBusinessDetails_CoomingSoon` | 4 | 10 | lite | build | V3d · D2(a): opened from MyBookmarks / BookmarksByGroup (user, 2026-10-14) | built | route-communitybusinessdetails-coomingsoon |
| CountryDetails | `/UBTConnect/CountryDetails` | 4 | 89 | lite | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-countrydetails |
| CountryList | `/UBTConnect/CountryList` | 4 | 89 | lite | build | V3b · Directory tab on TST (C2EnableC1DirectoryView=true) (user, 2026-10-14) | built | route-countrylist |
| HouseholdCarousel | `/UBTConnect/HouseholdCarousel` | 4 | 167 | full | build | V3b · C2EnableCarousel=true on TST; opened from 15 screens (user, 2026-10-14) | built | route-householdcarousel |
| HouseholdDetails | `/UBTConnect/HouseholdDetails` | 4 | 144 | full | build | V3b · 28 nav sites, 16 not behind the carousel flag (user, 2026-10-14) | built | route-householddetails |
| Household_Relations | `/UBTConnect/Household_Relations` | 4 | 101 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-household-relations |
| Locality_Details | `/UBTConnect/Locality_Details` | 4 | 185 | full | build | V3b · opened from 13 screens; Directory tab when C1DirectoryView=false (user, 2026-10-14) | built | route-locality-details |
| OneSchoolGlobalDetails | `/UBTConnect/OneSchoolGlobalDetails` | 4 | 127 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-oneschoolglobaldetails |
| Photobook | `/UBTConnect/Photobook` | 4 | 74 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-photobook |
| SupperMeeting_Carousel | `/UBTConnect/SupperMeeting_Carousel` | 4 | 155 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-suppermeeting-carousel |
| SupperMeeting_Details | `/UBTConnect/SupperMeeting_Details` | 4 | 127 | full | build | V4a · directory detail, reachable on TST; writes mocked (user, 2026-10-14) | built | route-suppermeeting-details |
| ContactByEmailMember | `/UBTConnect/ContactByEmailMember` | 5 | 31 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-contactbyemailmember |
| ContactByEmailOneSchoolGlobal | `/UBTConnect/ContactByEmailOneSchoolGlobal` | 5 | 25 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-contactbyemailoneschoolglobal |
| ContactUsDetails | `/UBTConnect/ContactUsDetails` | 5 | 77 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-contactusdetails |
| ContactUsMenu | `/UBTConnect/ContactUsMenu` | 5 | 56 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-contactusmenu |
| Menu | `/UBTConnect/Menu` | 5 | 78 | lite | build | V3d · bottom bar Menu tab; also from PINRegister, PINChange (user, 2026-10-14) | built | route-menu |
| PINBiometricsMenu | `/UBTConnect/PINBiometricsMenu` | 5 | 17 | lite | build | V4c · D3 menu part, consistent with V1 (mock PIN); biometrics on web decided in Phase 4 (user, 2026-10-14) | built | route-pinbiometricsmenu |
| PINChange | `/UBTConnect/PINChange` | 5 | 33 | lite | build | V4c · D3 menu part, consistent with V1 (mock PIN); biometrics on web decided in Phase 4 (user, 2026-10-14) | built | route-pinchange |
| Profile | `/UBTConnect/Profile` | 5 | 151 | full | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-profile |
| TermsAndPoliciesMenu | `/UBTConnect/TermsAndPoliciesMenu` | 5 | 55 | lite | build | V4c · menu / contact, reachable on TST; writes mocked (user, 2026-10-14) | built | route-termsandpoliciesmenu |
| BookmarksByGroup | `/UBTConnect/BookmarksByGroup` | 6 | 115 | full | skip | removed on TST 2026-10-27 (HTTP 404); replaced by Bookmarks; React route to be removed (user, 2026-10-28) | - | route-bookmarksbygroup |
| MyBookmarks | `/UBTConnect/MyBookmarks` | 6 | 85 | full | skip | removed on TST 2026-10-27 (HTTP 404); replaced by Bookmarks; React route to be removed (user, 2026-10-28) | - | route-mybookmarks |
| ConnectShare | `/UBTConnect/ConnectShare` | 7 | 62 | lite | build | V6 · D10(a): entry for external share links (ConnectSharing/Details → UBTConnect/ConnectShare, TST controller); routes to built screens (user, 2026-10-14) | built | route-connectshare |
| LegacyShareObject | `/UBTConnect/LegacyShareObject` | 7 | 71 | full | build | V3e · share button target of 12 in-scope screens; ShareObject (write) mocked (user, 2026-10-14) | built | route-legacyshareobject |
| AssembleDetail | `/UBTConnect/AssembleDetail` |  | 139 | full | build | Assemble is not a separate app either (UBTConnect screens with Connect2_Assemble_MUI blocks); build (user, 2026-10-16) | built | route-assembledetail |
| AssembleEvents | `/UBTConnect/AssembleEvents` |  | 121 | full | build | Assemble is not a separate app either (UBTConnect screens with Connect2_Assemble_MUI blocks); build (user, 2026-10-16) | built | route-assemble |
| Assemble_BrowseByCountry | `/UBTConnect/Assemble_BrowseByCountry` |  | 64 | lite | build | Assemble is not a separate app either (UBTConnect screens with Connect2_Assemble_MUI blocks); build (user, 2026-10-16) | built | route-assemble |
| Bookmarks | `/UBTConnect/Bookmarks` |  | 117 |  | build | TST deployed it 2026-10-27; build (user, 2026-10-28; migration/clarify/review/item10-new-screens.md) | building |  |
| CommunityBusinessDetails | `/UBTConnect/CommunityBusinessDetails` |  | 64 |  | skip | V7 · skip:dead · zDEV flow; live links open CoomingSoon; revisit if TST links the real screen (user, 2026-10-14) | - |  |
| ContactByEmailContacts | `/UBTConnect/ContactByEmailContacts` |  | 29 |  | skip | V7 · skip:dead · only link in Locality_LocalityContacts, not embedded on TST; revisit if the block appears (user, 2026-10-14) | - |  |
| ContactByEmailLDMCoordinator | `/UBTConnect/ContactByEmailLDMCoordinator` |  | 25 | lite | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-forms |
| ContactByEmailOrbitHelpdesk | `/UBTConnect/ContactByEmailOrbitHelpdesk` |  | 25 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-1 |
| ContactByEmailOrbitHost | `/UBTConnect/ContactByEmailOrbitHost` |  | 31 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-1 |
| EmailContact | `/UBTConnect/EmailContact` |  | 73 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-3b |
| EmailTarget | `/UBTConnect/EmailTarget` |  | 73 | lite | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-forms |
| EventBooklet | `/UBTConnect/EventBooklet` |  | 75 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-3b |
| EventDetail | `/UBTConnect/EventDetail` |  | 86 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-eventdetail |
| GuestArrangements | `/UBTConnect/GuestArrangements` |  | 68 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-3b |
| HelpersDetail | `/UBTConnect/HelpersDetail` |  | 72 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-1 |
| HostSurvey | `/UBTConnect/HostSurvey` |  | 91 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-hostsurvey |
| InvalidPermissions | `/UBTConnect/InvalidPermissions` |  | 28 |  | skip | V1 · D3 · skip:dead · no link, URL or handler targets it (TST; DEV ref) (user, 2026-10-14) | - |  |
| LDM_Email | `/UBTConnect/LDM_Email` |  | 81 |  | skip | V1 not needed: TST uses the V2 screens (GetHasNewLDM on); V1 is not built (user, 2026-10-16) | - |  |
| LDM_Email_V2 | `/UBTConnect/LDM_Email_V2` |  | 81 | lite | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-forms |
| LDM_EventDetail | `/UBTConnect/LDM_EventDetail` |  | 95 |  | skip | V1 not needed: TST uses the V2 screens (GetHasNewLDM on); V1 is not built (user, 2026-10-16) | - |  |
| LDM_EventDetail_V2 | `/UBTConnect/LDM_EventDetail_V2` |  | 95 | full | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-eventdetail-v2 |
| LDM_MyEvents | `/UBTConnect/LDM_MyEvents` |  | 111 |  | skip | V1 not needed: TST uses the V2 screens (GetHasNewLDM on); V1 is not built (user, 2026-10-16) | - |  |
| LDM_MyEvents_V2 | `/UBTConnect/LDM_MyEvents_V2` |  | 110 | full | build | LDM family (UI in the Orbit module Connect2_OrbitMobile_MUI); build with Orbit (user, 2026-10-16) | built | route-ldm-myevents-v2 |
| Map | `/UBTConnect/Map` |  | 185 |  | skip | V4a · skip:variant · entry icon in Locality_Details shown only if C2EnableMaps (TST=false); revisit when enabled (user, 2026-10-14) | - |  |
| MilestoneDetail | `/UBTConnect/MilestoneDetail` |  | 107 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-milestonedetail |
| MyCalendar | `/UBTConnect/MyCalendar` |  | 85 |  | skip | V7 · skip:dead · replaced by MyEntertaining; revisit if a link to MyCalendar appears (user, 2026-10-14) | - |  |
| New_BookmarksByGroup | `/UBTConnect/New_BookmarksByGroup` |  | 94 |  | skip | V3d · D2 · skip:variant · branch 2, revisit if LD mobileDirectoryBookmarkNote=true and C2NewBookmarks=false (user, 2026-10-14) | - |  |
| New_MyBookmarks | `/UBTConnect/New_MyBookmarks` |  | 85 |  | skip | V3d · D2 · skip:variant · branch 2, revisit if LD mobileDirectoryBookmarkNote=true and C2NewBookmarks=false (user, 2026-10-14) | - |  |
| NotificationDetails | `/UBTConnect/NotificationDetails` |  |  |  | build | TST deployed it 2026-10-27; build (user, 2026-10-28; migration/clarify/review/item10-new-screens.md) | building |  |
| OneSchoolGlobalCarousel | `/UBTConnect/OneSchoolGlobalCarousel` |  |  |  | build | TST deployed it 2026-10-27; build (user, 2026-10-28; migration/clarify/review/item10-new-screens.md) | capture |  |
| OneSchoolGlobalEventDetail | `/UBTConnect/OneSchoolGlobalEventDetail` |  | 35 |  | skip | V7 · skip:dead · no way in, input unused; revisit if a link appears (user, 2026-10-14) | - |  |
| OrbitAdminEventDetail | `/UBTConnect/OrbitAdminEventDetail` |  | 76 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-admin |
| OrbitAdminLanding | `/UBTConnect/OrbitAdminLanding` |  | 75 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-admin |
| OrbitAdminMilestoneDetail | `/UBTConnect/OrbitAdminMilestoneDetail` |  |  |  | build | TST deployed it 2026-10-27; build (user, 2026-10-28; migration/clarify/review/item10-new-screens.md) | building |  |
| OrbitAdminMilestones | `/UBTConnect/OrbitAdminMilestones` |  |  |  | build | TST deployed it 2026-10-27; build (user, 2026-10-28; migration/clarify/review/item10-new-screens.md) | building |  |
| OrbitLanding | `/UBTConnect/OrbitLanding` |  | 83 | full | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbitlanding |
| PassportScan | `/UBTConnect/PassportScan` |  |  |  | build | TST deployed it 2026-10-27; build (user, 2026-10-28; migration/clarify/review/item10-new-screens.md) | building |  |
| PersonalEventDetails | `/UBTConnect/PersonalEventDetails` |  | 59 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |
| PersonalEventForm | `/UBTConnect/PersonalEventForm` |  | 108 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |
| QRCodeGenerate | `/UBTConnect/QRCodeGenerate` |  | 61 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-2 |
| Recurrence | `/UBTConnect/Recurrence` |  | 80 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |
| Reminder | `/UBTConnect/Reminder` |  | 53 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |
| ShareObject | `/UBTConnect/ShareObject` |  | 10 |  | skip | V3d · D2 · skip:variant · branch 2, revisit if LD mobileDirectoryBookmarkNote=true and C2NewBookmarks=false (user, 2026-10-14) | - |  |
| TestOpenShare | `/UBTConnect/TestOpenShare` |  | 9 |  | skip | V7 · skip:dead · test screen in zTemp flow (user, 2026-10-14) | - |  |
| TransportDetail | `/UBTConnect/TransportDetail` |  | 62 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-2 |
| ViewDocuments | `/UBTConnect/ViewDocuments` |  | 62 | lite | build | Orbit is not an embedded/separate app: its screens are UBTConnect screens (same SPA) using Connect2_OrbitMobile_MUI blocks; build (user, 2026-10-16) | built | route-orbit-lite-2 |
| ViewEventList | `/UBTConnect/ViewEventList` |  | 6 |  | skip | V7 · skip:dead · Deprecated_Calendar_PersonalEvent, only from dead screens; C2EnablePersonalEvents=false on TST (user, 2026-10-14) | - |  |
