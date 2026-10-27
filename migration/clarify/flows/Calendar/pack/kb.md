# KB index of UI flow Calendar

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/calendar.md` — My Calendar and the calendar blocks (flows `Calendar`, `Calendar_Events`) (20 names of this flow, 35 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/personal-events.md` — Personal events (flow `Deprecated_Calendar_PersonalEvent`) (5 names of this flow, 39 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-assemble.md` — Assemble (flow `Legacy_AssembleFlow`) (3 names of this flow, 6 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-ldm-events.md` — LDM events (flows `Legacy_LDMEventsFlow`, `Legacy_LDMEventsFlow_V2`) (3 names of this flow, 10 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-orbit.md` — Orbit (flows `Legacy_OrbitEventsFlow`, `Legacy_OrbitQRCodeFlow`, `Legacy_OrbitAdminFlow`) (3 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/design-tokens.md` — Design tokens used across UBTConnect (whole module) (2 names of this flow, 2 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/app-shell.md` — App shell — start, login, layouts and the common in-layout block (flows `App_Common`, `App_Cache`, `SubLayout`) (1 names of this flow, 37 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/home-feed.md` — Home (flow `Home`) — home feed, services, updates and the embedded news feed (1 names of this flow, 17 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/search.md` — Directory search (flow `Directory_Search`) (1 names of this flow, 12 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-grid.md`: FillDaysAfter, FillDaysAfter_ExtraRow, FillDaysBefore, GetAbbreviatedMonthNameList, GetFirstDayOfTheWeek, GetMonthView, GetStandardMonth, GetStandardWeek, GetWeekView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-date-strip.md`: GetCalendarItems, GetCalendarItemsDays, GetCalendarItemsMonth, GetCalendarItemsWeeks, GetDateListKeyByDate, Get_MonthSelector_IsMonthValid, IsItemBelowMinimumDate
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-calendar.md`: AddEventsToDayList, GetCalendarItems, GetDateListKeyByDate, GetMonthCacheKey, GetEventsByCacheKeys, MyCalendar
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-event-display.md`: AddEventsToDayList, Get_CalendarEventSourceConfiguration, Get_FilteredCacheKeyByDateAndEventSources, Get_CalendarViewOptions
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink, MyEntertaining
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: OfflineDataSync, MyCalendar
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-personal-events.md`: MyCalendar

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| AddEventsToDayList | `BR-UBTCON-125` | confirmed | Each calendar day gets one coloured dot per event source that has at least one event on that day, coloured with the source's indicator colour |
| AddEventsToDayList | `BR-UBTCON-126` | confirmed | Day dots are ordered by each event source's configured display order |
| Block_PINUnlock | `BR-UBTCON-952` | confirmed | On an unsupported app or WebView version the lock screen shows the upgrade notice |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-948` | confirmed | A wrong PIN shows "Your current PIN is not correct!"; an unknown user shows "No matching user. Please Register a PIN" and is sent to PIN registration; anything else is shown as the plugin reported it |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-949` | confirmed | Biometric unlock is offered on the lock screen only when the user enabled it on this device, and never when re-entering the PIN from the menu |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-950` | confirmed | Forgot PIN sends the user to Login flagged as a PIN reset — the logout call on this path is disabled |
| Block_PINUnlock_ContentWrapper | `BR-UBTCON-951` | confirmed | The lock screen links Terms & Conditions and the Privacy Policy, each only when the cached policy has a URL |
| CacheControl_CalendarEvents | `BR-UBTCON-715` | confirmed | Calendar events are cached per source selection and month for two hours by default; on a miss they are fetched for that month in the device's time zone |
| CacheControl_CalendarEvents | `BR-UBTCON-716` | confirmed | Events not flagged "display in local time" have their start and end shifted by the device's time-zone offset, so they show the server wall-clock time; flagged events are left as received |
| CacheControl_Calendar_Coordinator | `BR-UBTCON-717` | confirmed | The calendar keeps one event fetch per distinct month key: a change of selected sources restarts all fetches; otherwise finished entries are dropped and only keys not already loading are added |
| CacheControl_Calendar_Coordinator | `BR-UBTCON-718` | confirmed | On first render the coordinator queues one loading entry per distinct month key, unless the view was restored from cache |
| CalendarHeaderWeekdays | `BR-UBTCON-719` | confirmed | The month grid's weekday header starts on Sunday, labelled "LD" (Lord's Day), then Mon to Sat |
| CalendarMonths | `BR-UBTCON-720` | confirmed | In calendar-only use (date pickers), a month grid is rebuilt only when the requested day is no longer in it under the same month name |
| CalendarMonths | `BR-UBTCON-721` | confirmed | When a month's events finish loading, the placeholder dots are cleared and each day gets one dot per source with events |
| CalendarMonths | `BR-UBTCON-722` | confirmed | A month grid is built from the standard month view with placeholder dots on every day; it waits for events unless used as a plain date picker |
| CalendarView | `BR-UBTCON-724` | confirmed | A calendar strip without a minimum date uses the app's client minimum date |
| CalendarView | `BR-UBTCON-725` | confirmed | A calendar strip restored from the view cache re-scrolls to the selected date only in Day view; a fresh one adopts the given event sources |
| CalendarView | `BR-UBTCON-726` | confirmed | When the selected event sources change the strip is rebuilt around the current date; otherwise a new initial date from the parent becomes the selected date |
| CalendarView | `BR-UBTCON-727` | confirmed | The strip scrolls to the entry keyed for the selected date; if none exists the strip is rebuilt centred on that key, so week entries are always Sunday-aligned |
| CalendarView | `BR-UBTCON-728` | confirmed | When the visible entry comes within the buffer of either end of the strip, more entries are added at that end: distance is counted in days, weeks or months per view |
| CalendarView | `BR-UBTCON-729` | confirmed | Entries are appended after the end of the strip only while they are not past the maximum date, and only when a maximum date is set |
| CalendarView | `BR-UBTCON-730` | confirmed | Entries are prepended before the start of the strip only while they are not wholly before the minimum date |
| CalendarView | `BR-UBTCON-731` | confirmed | Each added strip entry is one step from its neighbour: a day in Day view, seven days in Week view, a month in Month view; negative offsets build entries before the start |
| CalendarView | `BR-UBTCON-732` | confirmed | A fetched month of events is attached to every strip entry with that month key that is still loading |
| CalendarView | `BR-UBTCON-733` | confirmed | When scrolling stops on another entry, the selected date becomes: that day (Day view); the same weekday as the initial date within that week (Week view); today if it is the current month, else the 1st (Month view) — then clamped to the minimum and maximum |
| CalendarView | `BR-UBTCON-734` | confirmed | A scroll that lands on a new entry tops up the buffer and, if the selected date changed, tells the parent |
| CalendarView | `BR-UBTCON-735` | confirmed | Each strip entry renders the block of the view: the day's event list, a week row or a month grid, all fed the entry's own events |
| CalendarWeeks | `BR-UBTCON-723` | confirmed | A week row is built from the standard week with placeholder dots and always waits for events; when they arrive the placeholders are replaced by one dot per source with events |
| Calendar_EventCard | `BR-UBTCON-744` | confirmed | An event card carries its source's header label, icon and colours, the title, the time line and the location |
| Calendar_ViewActionMenu | `BR-UBTCON-742` | confirmed | The calendar filter lists the active views and every event source with its configured label, icon and order; all sources start selected unless the calendar was opened for one source, which is then the only one selected |
| Calendar_ViewActionMenu | `BR-UBTCON-743` | confirmed | Applying the filter sends the chosen view and sources and flags "all sources" when every offered source is selected; cancelling restores the last applied choice |
| CommonUI_InsideLayout | `BR-UBTCON-310` | confirmed | Every screen that embeds the common layout block shows the PIN unlock overlay unless the user is anonymous, the screen opts out, or PIN registration is still pending |
| CommonUI_InsideLayout | `BR-UBTCON-311` | confirmed | A user who still has policies to accept gets the policy checker on every screen that embeds the common layout block, unless that screen opts out |
| CommonUI_InsideLayout | `BR-UBTCON-312` | confirmed | After PIN registration the next screen sends Back to Home instead of the browser history — a one-shot flag consumed on a fresh render only |
| CommonUI_InsideLayout | `BR-UBTCON-313` | confirmed | Pressing Back on the first page of the history does not leave the app: navigation is prevented and Home opens instead |
| DayList | `BR-UBTCON-736` | confirmed | Tapping a day before the minimum date, or after the maximum date when one is set, does nothing |
| DayList | `BR-UBTCON-737` | confirmed | A day cell is highlighted when it is the selected day or today; its event dots are hidden in calendar-only mode and replaced by a transparent placeholder when it has none; the weekday label appears only in week rows |
| EventList | `BR-UBTCON-738` | confirmed | The day's event list holds every event of every selected source that falls on the selected day, ordered single-day all-day events (by title), then multi-day all-day events (by title), then timed events (by start, then title) |
| EventList | `BR-UBTCON-739` | confirmed | The day header shows "(0 events)" while loading or in calendar-only mode, otherwise "(1 event)" or "(N events)"; the empty state shows when there are no events or in calendar-only mode |
| EventList_CacheWrapper | `BR-UBTCON-740` | confirmed | The event list under the month grid re-fetches only when the selected sources or the selected day's month change; within the same month a new day is filtered from the events already held |
| EventList_CacheWrapper | `BR-UBTCON-741` | confirmed | The wrapper builds the selected day's list with the same day filter and ordering as the event list and passes it on |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| FillDaysAfter | `BR-UBTCON-107` | confirmed | Trailing padding: days after the last listed day are appended until the list reaches the grid size, each marked as not from the active month |
| FillDaysAfter_ExtraRow | `BR-UBTCON-108` | confirmed | Trailing padding: days after the last listed day are appended until the list reaches the extra-row grid size, each marked as not from the active month |
| FillDaysBefore | `BR-UBTCON-106` | confirmed | Leading padding: the StartingPosition days immediately before the month's first day are inserted at the front, each marked as not from the active month |
| GetAbbreviatedMonthNameList | `BR-UBTCON-114` | confirmed | The month picker list has twelve entries, indexed 1 to 12, labelled with the abbreviated month name |
| GetCalendarItems | `BR-UBTCON-115` | confirmed | The scrolling date strip is built per calendar view: months for Month, weeks for Week, days for Day; any other view yields an empty list |
| GetCalendarItemsDays | `BR-UBTCON-116` | confirmed | The day strip holds up to 2×Buffer+1 days centred on the selected date; days wholly before the minimum date are skipped (the window slides forward) and the strip stops at the first day starting after a set maximum date |
| GetCalendarItemsMonth | `BR-UBTCON-118` | confirmed | The month strip holds up to 2×Buffer+1 months centred on the selected date; months wholly before the minimum date are skipped (the window slides forward) and the strip stops at the first month starting after a set maximum date |
| GetCalendarItemsWeeks | `BR-UBTCON-117` | confirmed | The week strip holds up to 2×Buffer+1 weeks centred on the selected date; weeks wholly before the minimum date are skipped (the window slides forward) and the strip stops at the first week starting after a set maximum date |
| GetDateListKeyByDate | `BR-UBTCON-119` | confirmed | A date is keyed to its strip entry per view: the date itself for Day, the preceding Sunday for Week, the 1st of the month for Month |
| GetFirstDayOfTheWeek | `BR-UBTCON-109` | confirmed | Calendar weeks start on Sunday: the first day of a date's week is that date if it is a Sunday, otherwise the preceding Sunday |
| GetLookup_CalendarEventSource | `BR-UBTCON-509` | confirmed | The event-source lookup holds the configuration of each of the four sources; the LDM, Orbit and Personal-events overrides repeat the configured values exactly |
| GetMonthCacheKey | `BR-UBTCON-510` | confirmed | The month cache key is the month formatted as "MM/yyyy", so every date of a month shares one cache entry |
| GetMonthView | `BR-UBTCON-102` | confirmed | A month view is padded only when the month's own days do not already fill the standard grid size |
| GetMonthView | `BR-UBTCON-103` | confirmed | Days from the previous month are prepended only when the month does not start in the first column (StartingPosition 1 to 6) |
| GetMonthView | `BR-UBTCON-104` | confirmed | When the month (with any leading days) is shorter than the grid, days of the next month are appended until the grid is full |
| GetMonthView | `BR-UBTCON-105` | confirmed | A month that overflows the standard grid is padded to the extra-row grid instead; one that fits exactly is returned as is |
| GetStandardMonth | `BR-UBTCON-100` | confirmed | A month cannot be built from an empty date: a null DayInMonth shows the message "Incorrect year value" and returns an empty month |
| GetStandardMonth | `BR-UBTCON-101` | confirmed | The standard month holds exactly the days of the requested month, each flagged as from the active month and today's date flagged as the current day |
| GetStandardWeek | `BR-UBTCON-111` | confirmed | A week cannot be built from an empty date: a null DayInWeek shows "Incorrect year value" and returns an empty week |
| GetStandardWeek | `BR-UBTCON-112` | confirmed | A week view holds seven consecutive days from Sunday; today is both selected and current, and days outside the requested date's month are flagged as not from the active month |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetVisibleCalendarElement | `BR-UBTCON-531` | confirmed | The visible calendar element is the first child of the list that lies fully inside the list's own left and right edges |
| GetWeekView | `BR-UBTCON-113` | confirmed | The week view repeats the null-date guard before delegating to the standard week |
| Get_CalendarEventSourceConfiguration | `BR-UBTCON-127` | confirmed | The 'All events' pseudo-source has its own fixed configuration: label "All events", list icon, no header colours, display order 0 |
| Get_CalendarEventSourceConfiguration | `BR-UBTCON-128` | confirmed | Each calendar event source has a fixed label, colour scheme, icon and display order: Personal events 1, Orbit 2, Lord's Day Meal 3, Assemble 4 |
| Get_CalendarViewOptions | `BR-UBTCON-129` | confirmed | The calendar view picker lists only active calendar views, with Month preselected |
| Get_CalendarViewOptions | `BR-UBTCON-130` | confirmed | Every calendar event source is offered and preselected; the separate 'All events' entry is not added (its append node is disabled) |
| Get_FilteredCacheKeyByDateAndEventSources | `BR-UBTCON-131` | confirmed | The calendar cache key is the sorted list of selected event-source ids joined with "&", then "/" and the date cache key — so the same selection in any order hits the same cache entry |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| Get_MonthSelector_IsMonthValid | `BR-UBTCON-122` | confirmed | In the month selector, a month is selectable unless it falls before the minimum date's month or after the maximum date's month within that same year |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| IsItemBelowMinimumDate | `BR-UBTCON-121` | confirmed | A strip item is before the minimum date when the day, the week's last day, or the month's last day (per view) is before MinimumDate |
| MonthPicker | `BR-UBTCON-745` | confirmed | In the month selector only months inside the minimum/maximum months of the shown year can be picked; picking one sends its first day; the year arrows move one year either way with no limit |
| MyCalendar | `BR-UBTCON-680` | confirmed | Opening My Calendar fresh (not restored from the view cache) empties the in-memory calendar-event cache first, so every fresh visit re-fetches events |
| MyCalendar | `BR-UBTCON-681` | confirmed | My Calendar opened with an event source shows only that source; either way it opens on today in Month view |
| MyCalendar | `BR-UBTCON-682` | confirmed | Tapping a calendar event opens the detail screen of its source: Orbit, LDM or Assemble; a personal (user-created) event or any other source opens nothing |
| MyCalendar | `BR-UBTCON-683` | confirmed | An Orbit boat, train, vehicle or flight milestone opens the transport detail; every other Orbit item opens the event detail |
| MyCalendar | `BR-UBTCON-684` | confirmed | An LDM event opens the V2 detail screen when the new-LDM feature flag is on, otherwise the legacy LDM detail |
| MyCalendar | `BR-UBTCON-685` | confirmed | Picking the current month in the month selector selects today; picking any other month selects its first day |
| MyCalendar | `BR-UBTCON-686` | confirmed | The "create personal event" button on My Calendar is shown only when the personal-events feature flag is granted |
| MyCalendar | `BR-UBTCON-687` | confirmed | The calendar body follows the selected view: Week renders the week wrapper, Day renders a day-by-day strip, anything else renders the month wrapper |
| MyCalendar | `BR-UBTCON-688` | confirmed | Applying the calendar filter with no event type selected switches the calendar to "calendar only" (no events shown); the header shows 0 for all sources, -1 for none, otherwise the number selected |
| MyEntertaining_Embedded | `BR-UBTCON-689` | confirmed | The My Entertaining embed opens pre-filtered to the source the user came from: orbit, ldm, assemble or personal; any other source opens unfiltered |
| MyEntertaining_Embedded | `BR-UBTCON-690` | confirmed | A map request from the embed opens a Google Maps search for the event's coordinates in a new tab / in-app browser |
| MyEntertaining_Embedded | `BR-UBTCON-691` | confirmed | Errors reported by the embed are shown to the user as an informational toast with the embed's own message |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| Policy_Checker | `BR-UBTCON-940` | confirmed | While the device flag says policies are pending, every screen whose layout does not opt out is redirected to Accept Pending Policies |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| Button | 30 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-698.md:29`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-696.md:28` |
| Columns_Two | 1 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| Embedded_MyEntertaining | 27 | `../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/modules/UBT_AppManager_CS/rules/BR-UAM-023.md:33` |
| Gallery | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/landing.md:34` |
| GetEventsByCacheKeys | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:48`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_CS/rules/BR-C2LEG-215.md:25`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/module.md:41`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/module.md:53`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/rules/BR-C2LEG-202.md:5` |
| Get_CalendarViewOptions | 11 | - |
| HorizontalDot_List | 1 | - |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| Layout_DetailPage | 7 | - |
| PreventBackNavigation | 11 | `../ubt_sharing_kb/connect/outsystems/apps/ubt-appmanager/modules/UBT_AppManager/rules/BR-UAM-459.md:31`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/contact-popups.md:35` |
| SelectionOption_List | 3 | - |
| SkeletonSection | 15 | - |
