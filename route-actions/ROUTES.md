# Routes: OutSystems actions against React

One file per route in `routes/`. Run `python3 route-actions/tools/check_route.py <Route>` (see [README](README.md)). Progress: **18 of 68** build routes done.

The app shell (`CommonUI_InsideLayout` and its blocks on TST; the code that `main.tsx` loads in React) is in [APP_SHELL.md](APP_SHELL.md). The tool merges it from the checked routes.

UI flows: Service Studio MCP `getScreenNames(UBTConnect)`, DEV, read 2026-11-04. Routes and scope: `app/src/app/routes.generated.ts` (84 routes) and `migration/board.md`.

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
| `AcceptPendingPolicies` | `App_Policies` | todo |
| [`Profile`](routes/Profile.md) | `App_Profile` | done |
| [`Services`](routes/Services.md) | `App_Services` | done |
| [`Bookmarks`](routes/Bookmarks.md) | `Bookmarks` | done |
| [`MyEntertaining`](routes/MyEntertaining.md) | `Calendar` | done |
| `ContactByEmailLDMCoordinator` | `ContactFlow` | todo |
| [`ContactByEmailMember`](routes/ContactByEmailMember.md) | `ContactFlow` | done |
| `ContactByEmailOneSchoolGlobal` | `ContactFlow` | todo |
| `ContactByEmailOrbitHelpdesk` | `ContactFlow` | todo |
| `ContactByEmailOrbitHost` | `ContactFlow` | todo |
| `HouseholdCarousel` | `Directory_Household` | todo |
| `HouseholdDetails` | `Directory_Household` | todo |
| `Household_Relations` | `Directory_Household` | todo |
| `BrowseCountries` | `Directory_Locality` | todo |
| `BrowseDirectory` | `Directory_Locality` | todo |
| `CountryDetails` | `Directory_Locality` | todo |
| `CountryList` | `Directory_Locality` | todo |
| `Locality_Details` | `Directory_Locality` | todo |
| `OneSchoolGlobalCarousel` | `Directory_OneSchoolGlobal` | todo |
| `OneSchoolGlobalDetails` | `Directory_OneSchoolGlobal` | todo |
| `Photobook` | `Directory_Photobook` | todo |
| `Search` | `Directory_Search` | todo |
| `SupperMeeting_Carousel` | `Directory_SupperMeetings` | todo |
| `SupperMeeting_Details` | `Directory_SupperMeetings` | todo |
| `Updates_SingleList` | `Directory_Updates` | todo |
| `FeedItemDetail` | `Home` | todo |
| [`HomeFeed`](routes/HomeFeed.md) | `Home` | done |
| `AssembleDetail` | `Legacy_AssembleFlow` | todo |
| `AssembleEvents` | `Legacy_AssembleFlow` | todo |
| `Assemble_BrowseByCountry` | `Legacy_AssembleFlow` | todo |
| `EmailTarget` | `Legacy_LDMEventsFlow` | todo |
| `LDM_Email_V2` | `Legacy_LDMEventsFlow_V2` | todo |
| `LDM_EventDetail_V2` | `Legacy_LDMEventsFlow_V2` | todo |
| `LDM_MyEvents_V2` | `Legacy_LDMEventsFlow_V2` | todo |
| `MessageDetail` | `Legacy_MyNotificationsFlow` | todo |
| `MessageList` | `Legacy_MyNotificationsFlow` | todo |
| `OrbitAdminEventDetail` | `Legacy_OrbitAdminFlow` | todo |
| `OrbitAdminLanding` | `Legacy_OrbitAdminFlow` | todo |
| `OrbitAdminMilestoneDetail` | `Legacy_OrbitAdminFlow` | todo |
| `OrbitAdminMilestones` | `Legacy_OrbitAdminFlow` | todo |
| `EmailContact` | `Legacy_OrbitEventsFlow` | todo |
| `EventBooklet` | `Legacy_OrbitEventsFlow` | todo |
| `EventDetail` | `Legacy_OrbitEventsFlow` | todo |
| `GuestArrangements` | `Legacy_OrbitEventsFlow` | todo |
| `HelpersDetail` | `Legacy_OrbitEventsFlow` | todo |
| `HostSurvey` | `Legacy_OrbitEventsFlow` | todo |
| `MilestoneDetail` | `Legacy_OrbitEventsFlow` | todo |
| `OrbitLanding` | `Legacy_OrbitEventsFlow` | todo |
| `PassportScan` | `Legacy_OrbitEventsFlow` | todo |
| `TransportDetail` | `Legacy_OrbitEventsFlow` | todo |
| `ViewDocuments` | `Legacy_OrbitEventsFlow` | todo |
| `QRCodeGenerate` | `Legacy_OrbitQRCodeFlow` | todo |
| `ConnectShare` | `Legacy_Share` | todo |
| `LegacyShareObject` | `Legacy_Share` | todo |
| `Notes` | `Notes` | todo |
| `CommunityBusinessDetails_CoomingSoon` | `zDEV_Directory_CommunityBusinessBlocks` | todo |

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
