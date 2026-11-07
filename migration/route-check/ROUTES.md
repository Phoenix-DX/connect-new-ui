# Routes: OutSystems actions against React

One file per route in `routes/`. Run `python3 tools/route-check/check_route.py <Route>` (see [README](README.md)). Progress: **68 of 68** build routes done.

The app shell (`CommonUI_InsideLayout` and its blocks on TST; the code that `main.tsx` loads in React) is in [APP_SHELL.md](APP_SHELL.md). The tool merges it from the checked routes.

UI flows: Service Studio MCP `getScreenNames(UBTConnect)`, DEV, read 2026-11-07. Routes and scope: `app/src/app/routes.generated.ts` (84 routes) and `migration/board.md`.

| Route | UI flow | Status |
|---|---|---|
| [`Login`](routes/Login.md) | `App_Common` | done |
| [`Splash`](routes/Splash.md) | `App_Common` | done |
| [`Menu`](routes/Menu.md) | `App_Menu` | done |
| [`PINBiometricsMenu`](routes/PINBiometricsMenu.md) | `App_Menu` | done |
| [`TermsAndPoliciesMenu`](routes/TermsAndPoliciesMenu.md) | `App_Menu` | done |
| [`ContactUsDetails`](routes/ContactUsDetails.md) | `App_Menu_ContactUs` | done |
| [`ContactUsMenu`](routes/ContactUsMenu.md) | `App_Menu_ContactUs` | done |
| [`NotificationDetails`](routes/NotificationDetails.md) | `App_Notifications` | done |
| [`Notifications`](routes/Notifications.md) | `App_Notifications` | done |
| [`PINChange`](routes/PINChange.md) | `App_PIN` | done |
| [`PINRegister`](routes/PINRegister.md) | `App_PIN` | done |
| [`PINUnlock`](routes/PINUnlock.md) | `App_PIN` | done |
| [`AcceptPendingPolicies`](routes/AcceptPendingPolicies.md) | `App_Policies` | done (static) |
| [`Profile`](routes/Profile.md) | `App_Profile` | done |
| [`Services`](routes/Services.md) | `App_Services` | done |
| [`Bookmarks`](routes/Bookmarks.md) | `Bookmarks` | done |
| [`MyEntertaining`](routes/MyEntertaining.md) | `Calendar` | done |
| [`ContactByEmailLDMCoordinator`](routes/ContactByEmailLDMCoordinator.md) | `ContactFlow` | done (static) |
| [`ContactByEmailMember`](routes/ContactByEmailMember.md) | `ContactFlow` | done |
| [`ContactByEmailOneSchoolGlobal`](routes/ContactByEmailOneSchoolGlobal.md) | `ContactFlow` | done |
| [`ContactByEmailOrbitHelpdesk`](routes/ContactByEmailOrbitHelpdesk.md) | `ContactFlow` | done |
| [`ContactByEmailOrbitHost`](routes/ContactByEmailOrbitHost.md) | `ContactFlow` | done (static) |
| [`HouseholdCarousel`](routes/HouseholdCarousel.md) | `Directory_Household` | done |
| [`HouseholdDetails`](routes/HouseholdDetails.md) | `Directory_Household` | done |
| [`Household_Relations`](routes/Household_Relations.md) | `Directory_Household` | done |
| [`BrowseCountries`](routes/BrowseCountries.md) | `Directory_Locality` | done |
| [`BrowseDirectory`](routes/BrowseDirectory.md) | `Directory_Locality` | done |
| [`CountryDetails`](routes/CountryDetails.md) | `Directory_Locality` | done |
| [`CountryList`](routes/CountryList.md) | `Directory_Locality` | done |
| [`Locality_Details`](routes/Locality_Details.md) | `Directory_Locality` | done |
| [`OneSchoolGlobalCarousel`](routes/OneSchoolGlobalCarousel.md) | `Directory_OneSchoolGlobal` | done |
| [`OneSchoolGlobalDetails`](routes/OneSchoolGlobalDetails.md) | `Directory_OneSchoolGlobal` | done |
| [`Photobook`](routes/Photobook.md) | `Directory_Photobook` | done |
| [`Search`](routes/Search.md) | `Directory_Search` | done |
| [`SupperMeeting_Carousel`](routes/SupperMeeting_Carousel.md) | `Directory_SupperMeetings` | done |
| [`SupperMeeting_Details`](routes/SupperMeeting_Details.md) | `Directory_SupperMeetings` | done |
| [`Updates_SingleList`](routes/Updates_SingleList.md) | `Directory_Updates` | done |
| [`FeedItemDetail`](routes/FeedItemDetail.md) | `Home` | done (static) |
| [`HomeFeed`](routes/HomeFeed.md) | `Home` | done |
| [`AssembleDetail`](routes/AssembleDetail.md) | `Legacy_AssembleFlow` | done (static) |
| [`AssembleEvents`](routes/AssembleEvents.md) | `Legacy_AssembleFlow` | done |
| [`Assemble_BrowseByCountry`](routes/Assemble_BrowseByCountry.md) | `Legacy_AssembleFlow` | done |
| [`EmailTarget`](routes/EmailTarget.md) | `Legacy_LDMEventsFlow` | done (static) |
| [`LDM_Email_V2`](routes/LDM_Email_V2.md) | `Legacy_LDMEventsFlow_V2` | done (static) |
| [`LDM_EventDetail_V2`](routes/LDM_EventDetail_V2.md) | `Legacy_LDMEventsFlow_V2` | done |
| [`LDM_MyEvents_V2`](routes/LDM_MyEvents_V2.md) | `Legacy_LDMEventsFlow_V2` | done |
| [`MessageDetail`](routes/MessageDetail.md) | `Legacy_MyNotificationsFlow` | done |
| [`MessageList`](routes/MessageList.md) | `Legacy_MyNotificationsFlow` | done |
| [`OrbitAdminEventDetail`](routes/OrbitAdminEventDetail.md) | `Legacy_OrbitAdminFlow` | done (static) |
| [`OrbitAdminLanding`](routes/OrbitAdminLanding.md) | `Legacy_OrbitAdminFlow` | done |
| [`OrbitAdminMilestoneDetail`](routes/OrbitAdminMilestoneDetail.md) | `Legacy_OrbitAdminFlow` | done (static) |
| [`OrbitAdminMilestones`](routes/OrbitAdminMilestones.md) | `Legacy_OrbitAdminFlow` | done (static) |
| [`EmailContact`](routes/EmailContact.md) | `Legacy_OrbitEventsFlow` | done (static) |
| [`EventBooklet`](routes/EventBooklet.md) | `Legacy_OrbitEventsFlow` | done (static) |
| [`EventDetail`](routes/EventDetail.md) | `Legacy_OrbitEventsFlow` | done |
| [`GuestArrangements`](routes/GuestArrangements.md) | `Legacy_OrbitEventsFlow` | done (static) |
| [`HelpersDetail`](routes/HelpersDetail.md) | `Legacy_OrbitEventsFlow` | done |
| [`HostSurvey`](routes/HostSurvey.md) | `Legacy_OrbitEventsFlow` | done |
| [`MilestoneDetail`](routes/MilestoneDetail.md) | `Legacy_OrbitEventsFlow` | done |
| [`OrbitLanding`](routes/OrbitLanding.md) | `Legacy_OrbitEventsFlow` | done |
| [`PassportScan`](routes/PassportScan.md) | `Legacy_OrbitEventsFlow` | done (static) |
| [`TransportDetail`](routes/TransportDetail.md) | `Legacy_OrbitEventsFlow` | done (static) |
| [`ViewDocuments`](routes/ViewDocuments.md) | `Legacy_OrbitEventsFlow` | done (static) |
| [`QRCodeGenerate`](routes/QRCodeGenerate.md) | `Legacy_OrbitQRCodeFlow` | done (static) |
| [`ConnectShare`](routes/ConnectShare.md) | `Legacy_Share` | done |
| [`LegacyShareObject`](routes/LegacyShareObject.md) | `Legacy_Share` | done |
| [`Notes`](routes/Notes.md) | `Notes` | done |
| [`CommunityBusinessDetails_CoomingSoon`](routes/CommunityBusinessDetails_CoomingSoon.md) | `zDEV_Directory_CommunityBusinessBlocks` | done |

## Out of scope (16 skip routes)

These routes have no React page (decision `skip` on the board). They are not checked.

| Route | UI flow |
|---|---|
| `CommunityBusinessDetails` | `zDEV_Directory_CommunityBusinessBlocks` |
| `ContactByEmailContacts` | `ContactFlow` |
| `InvalidPermissions` | `App_Common` |
| `LDM_Email` | `Legacy_LDMEventsFlow` |
| `LDM_EventDetail` | `Legacy_LDMEventsFlow` |
| `LDM_MyEvents` | `Legacy_LDMEventsFlow` |
| `Map` | `Map` |
| `MyCalendar` | `Calendar` |
| `OneSchoolGlobalEventDetail` | `Directory_OneSchoolGlobal` |
| `PersonalEventDetails` | `Deprecated_Calendar_PersonalEvent` |
| `PersonalEventForm` | `Deprecated_Calendar_PersonalEvent` |
| `Recurrence` | `Deprecated_Calendar_PersonalEvent` |
| `Reminder` | `Deprecated_Calendar_PersonalEvent` |
| `ShareObject` | `zTemp_Flow` |
| `TestOpenShare` | `zTemp_Flow` |
| `ViewEventList` | `Deprecated_Calendar_PersonalEvent` |
