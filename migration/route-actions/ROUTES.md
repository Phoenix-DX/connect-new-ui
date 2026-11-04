# Routes: OutSystems actions against React

One file per route. Run `python3 migration/tools/route_actions/check_route.py <Route>` (see [README](../tools/route_actions/README.md)). Progress: **3 of 68** build routes done.

The app shell (layout, app start, bottom bar, PIN lock, shared dialogs) is in [APP_SHELL.md](APP_SHELL.md). The tool merges it from the checked routes.

UI flows: Service Studio MCP `getScreenNames(UBTConnect)`, DEV, read 2026-11-04. Routes and scope: `app/src/app/routes.generated.ts` (84 routes) and `migration/board.md`.

| Route | UI flow | Status |
|---|---|---|
| [`Login`](Login.md) | `App_Common` | done |
| [`Splash`](Splash.md) | `App_Common` | done |
| [`Menu`](Menu.md) | `App_Menu` | todo |
| `PINBiometricsMenu` | `App_Menu` | todo |
| `TermsAndPoliciesMenu` | `App_Menu` | todo |
| `ContactUsDetails` | `App_Menu_ContactUs` | todo |
| `ContactUsMenu` | `App_Menu_ContactUs` | todo |
| `NotificationDetails` | `App_Notifications` | todo |
| `Notifications` | `App_Notifications` | todo |
| `PINChange` | `App_PIN` | todo |
| `PINRegister` | `App_PIN` | todo |
| `PINUnlock` | `App_PIN` | todo |
| `AcceptPendingPolicies` | `App_Policies` | todo |
| `Profile` | `App_Profile` | todo |
| `Services` | `App_Services` | todo |
| `Bookmarks` | `Bookmarks` | todo |
| `MyEntertaining` | `Calendar` | todo |
| `ContactByEmailLDMCoordinator` | `ContactFlow` | todo |
| `ContactByEmailMember` | `ContactFlow` | todo |
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
| [`HomeFeed`](HomeFeed.md) | `Home` | done |
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
