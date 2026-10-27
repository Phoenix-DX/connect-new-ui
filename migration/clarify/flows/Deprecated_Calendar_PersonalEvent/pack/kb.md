# KB index of UI flow Deprecated_Calendar_PersonalEvent

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/personal-events.md` — Personal events (flow `Deprecated_Calendar_PersonalEvent`) (20 names of this flow, 39 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/calendar.md` — My Calendar and the calendar blocks (flows `Calendar`, `Calendar_Events`) (2 names of this flow, 35 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/app-shell.md` — App shell — start, login, layouts and the common in-layout block (flows `App_Common`, `App_Cache`, `SubLayout`) (1 names of this flow, 37 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-grid.md`: FillDaysAfter, FillDaysAfter_ExtraRow, FillDaysBefore, GetAbbreviatedMonthNameList, GetFirstDayOfTheWeek, GetMonthView, GetStandardMonth, GetStandardWeek, GetWeekView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-recurrence.md`: Get_IsValidRecurrence, Get_IsValidWeeklyRecurrence, Get_LookupDayOfWeek_ByNumber, Get_LookupRecurrenceDayOfWeek, Get_MaybeLimited_RecurrenceEndDate, Get_RecurrenceDefaultEndDate, Get_RecurrencePatternWeekIndexIdList_ByDate, Get_UpdatedRecurrence_DaysOfWeek, Recurrence
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-personal-events.md`: Get_IsValidRecurrence, PersonalEvent_Create, PersonalEvent_Get, PersonalEventDetails, PersonalEventForm, Recurrence, Reminder, ViewEventList
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-date-strip.md`: GetCalendarItems, GetCalendarItemsDays, GetCalendarItemsMonth, GetCalendarItemsWeeks, GetDateListKeyByDate, Get_MonthSelector_IsMonthValid, IsItemBelowMinimumDate
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-calendar.md`: AddEventsToDayList, GetCalendarItems, GetDateListKeyByDate, GetMonthCacheKey, GetEventsByCacheKeys
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-event-display.md`: AddEventsToDayList, Get_CalendarEventSourceConfiguration, Get_FilteredCacheKeyByDateAndEventSources
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-reminders.md`: Get_LookupReminderTypes
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: GetURLFromEventDataURL
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: OfflineDataSync
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: Reminder

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
| CommonUI_InsideLayout | `BR-UBTCON-310` | confirmed | Every screen that embeds the common layout block shows the PIN unlock overlay unless the user is anonymous, the screen opts out, or PIN registration is still pending |
| CommonUI_InsideLayout | `BR-UBTCON-311` | confirmed | A user who still has policies to accept gets the policy checker on every screen that embeds the common layout block, unless that screen opts out |
| CommonUI_InsideLayout | `BR-UBTCON-312` | confirmed | After PIN registration the next screen sends Back to Home instead of the browser history — a one-shot flag consumed on a fresh render only |
| CommonUI_InsideLayout | `BR-UBTCON-313` | confirmed | Pressing Back on the first page of the history does not leave the app: navigation is prevented and Home opens instead |
| DayList | `BR-UBTCON-736` | confirmed | Tapping a day before the minimum date, or after the maximum date when one is set, does nothing |
| DayList | `BR-UBTCON-737` | confirmed | A day cell is highlighted when it is the selected day or today; its event dots are hidden in calendar-only mode and replaced by a transparent placeholder when it has none; the weekday label appears only in week rows |
| EventList | `BR-UBTCON-738` | confirmed | The day's event list holds every event of every selected source that falls on the selected day, ordered single-day all-day events (by title), then multi-day all-day events (by title), then timed events (by start, then title) |
| EventList | `BR-UBTCON-739` | confirmed | The day header shows "(0 events)" while loading or in calendar-only mode, otherwise "(1 event)" or "(N events)"; the empty state shows when there are no events or in calendar-only mode |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| FillDaysAfter | `BR-UBTCON-107` | confirmed | Trailing padding: days after the last listed day are appended until the list reaches the grid size, each marked as not from the active month |
| FillDaysAfter_ExtraRow | `BR-UBTCON-108` | confirmed | Trailing padding: days after the last listed day are appended until the list reaches the extra-row grid size, each marked as not from the active month |
| FillDaysBefore | `BR-UBTCON-106` | confirmed | Leading padding: the StartingPosition days immediately before the month's first day are inserted at the front, each marked as not from the active month |
| GetAbbreviatedMonthNameList | `BR-UBTCON-114` | confirmed | The month picker list has twelve entries, indexed 1 to 12, labelled with the abbreviated month name |
| GetCalendarItems | `BR-UBTCON-115` | confirmed | The scrolling date strip is built per calendar view: months for Month, weeks for Week, days for Day; any other view yields an empty list |
| GetCalendarItemsDays | `BR-UBTCON-116` | confirmed | The day strip holds up to 2×Buffer+1 days centred on the selected date; days wholly before the minimum date are skipped (the window slides forward) and the strip stops at the first day starting after a set maximum date |
| GetCalendarItemsMonth | `BR-UBTCON-118` | confirmed | The month strip holds up to 2×Buffer+1 months centred on the selected date; months wholly before the minimum date are skipped (the window slides forward) and the strip stops at the first month starting after a set maximum date |
| GetCalendarItemsWeeks | `BR-UBTCON-117` | confirmed | The week strip holds up to 2×Buffer+1 weeks centred on the selected date; weeks wholly before the minimum date are skipped (the window slides forward) and the strip stops at the first week starting after a set maximum date |
| GetClosestSelectableDateTime | `BR-UBTCON-507` | confirmed | The suggested event start is the next whole hour: minutes and seconds are dropped and one hour is added |
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
| Get_FilteredCacheKeyByDateAndEventSources | `BR-UBTCON-131` | confirmed | The calendar cache key is the sorted list of selected event-source ids joined with "&", then "/" and the date cache key — so the same selection in any order hits the same cache entry |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| Get_IsValidRecurrence | `BR-UBTCON-156` | confirmed | The second recurrence validator also treats every non-weekly recurrence as valid and delegates weekly ones |
| Get_IsValidWeeklyRecurrence | `BR-UBTCON-157` | confirmed | This weekly check counts all seven weekdays, not the recurrence's selected days — so it passes whenever the end date is on or after the start date |
| Get_LookupDayOfWeek_ByNumber | `BR-UBTCON-144` | confirmed | A weekday is found by its number in the weekday list; a number with no match returns an empty weekday |
| Get_LookupRecurrenceDayOfWeek | `BR-UBTCON-143` | confirmed | Weekdays are numbered Sunday=0 through Saturday=6 and labelled by the Connect weekday-label library; an unknown id yields an empty lookup |
| Get_MaybeLimited_RecurrenceEndDate | `BR-UBTCON-151` | confirmed | A recurrence end date is capped at three years after the start date |
| Get_MonthSelector_IsMonthValid | `BR-UBTCON-122` | confirmed | In the month selector, a month is selectable unless it falls before the minimum date's month or after the maximum date's month within that same year |
| Get_RecurrenceDefaultEndDate | `BR-UBTCON-150` | confirmed | A new recurrence ends by default 3 months after its start if daily, 25 weeks after if weekly, and 3 years after for monthly, yearly or any other type |
| Get_RecurrencePatternWeekIndexIdList_ByDate | `BR-UBTCON-147` | confirmed | A date's week-of-month index is the count of same-weekday dates from the 1st of the month up to it (1st, 2nd, … 5th), looked up in the supplied week-index list |
| Get_RecurrencePatternWeekIndexIdList_ByDate | `BR-UBTCON-148` | confirmed | A date on the fourth occurrence of its weekday is also offered as the 'last' occurrence — even when the month has a fifth |
| Get_UpdatedRecurrence_DaysOfWeek | `BR-UBTCON-152` | confirmed | Monthly and yearly recurrences, and weekly ones with fewer than two days chosen, keep their days of week; daily recurrences and weekly ones with two or more days are reset to the start date's weekday |
| HandleOnResumeOpenLink | `BR-UBTCON-632` | confirmed | A link that arrives while the app is running is opened at once only for a logged-in, unlocked, ready user; otherwise it is parked and opened after login or unlock |
| HandleOnResumeOpenLink | `BR-UBTCON-633` | confirmed | Deep links to a notification message or an Assemble event are ignored here because the push plugin opens them; every other deep link is processed |
| Indev_AddAttendees | `BR-UBTCON-750` | confirmed | The invitee search runs only for a non-empty search term, as a household search with no country, and hides households already invited |
| Indev_AddAttendees | `BR-UBTCON-751` | confirmed | Chosen invitees are kept only inside the add-attendees block; they are never copied to the event form |
| IsItemBelowMinimumDate | `BR-UBTCON-121` | confirmed | A strip item is before the minimum date when the day, the week's last day, or the month's last day (per view) is before MinimumDate |
| MonthPicker | `BR-UBTCON-745` | confirmed | In the month selector only months inside the minimum/maximum months of the shown year can be picked; picking one sends its first day; the year arrows move one year either way with no limit |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OfflineDataSyncEvents | `BR-UBTCON-340` | confirmed | An offline sync run ends as success, as a retryable error, or — on a security exception — as a non-retryable error |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| PersonalEventDetails | `BR-UBTCON-692` | confirmed | The personal-event detail is fetched by id from the deprecated personal-events service with no user time zone |
| PersonalEventDetails | `BR-UBTCON-693` | confirmed | The repeat line on a personal event is shown only when the event has a recurrence type, described with its end date |
| PersonalEventDetails | `BR-UBTCON-694` | confirmed | The reminder line is shown unless the reminder is "do not remind"; it displays the raw reminder identifier, not its label |
| PersonalEventDetails | `BR-UBTCON-695` | confirmed | A personal event's time line reads "All day" for all-day events, otherwise "h:mm tt - h:mm tt" in lower case; the attendee line reads "1 attendee" or "N attendees" |
| PersonalEventForm | `BR-UBTCON-696` | confirmed | A new personal event starts at the next whole hour and lasts 30 minutes; returning from the Repeat or Remind screens restores the form from the hand-over object instead |
| PersonalEventForm | `BR-UBTCON-697` | confirmed | Moving the start date or time to or past the end pushes the end to 30 minutes after the new start |
| PersonalEventForm | `BR-UBTCON-698` | confirmed | Changing the event start date re-anchors its recurrence: the range starts on the new date, the week-of-month index is recomputed when used, an end date now before the start is replaced by the type default, and the end is capped at three years |
| PersonalEventForm | `BR-UBTCON-699` | confirmed | After a start-date change, a monthly or yearly recurrence repeats on the start's day of month unless it uses a week-of-month index (day 0), and a yearly one also takes the start's month (others month 0) |
| PersonalEventForm | `BR-UBTCON-700` | confirmed | If the re-anchored recurrence fails the validity check, the recurrence is put back as it was and an "Invalid Recurring Meeting" toast is shown — the new start date itself is kept |
| PersonalEventForm | `BR-UBTCON-701` | confirmed | Sending the event requires the end not to be before the start; otherwise the event is created through the deprecated service, its id is stored on the device and "Created" is shown |
| PersonalEventForm | `BR-UBTCON-702` | confirmed | The end date can be picked only from the start date up to three years after it; the end time is flagged invalid when it is on or before the start date and not after the start time |
| PersonalEventForm | `BR-UBTCON-703` | confirmed | The form is titled "Create Event" only when no event id is given; with an id it shows no title and still only creates — there is no edit mode |
| PersonalEventForm | `BR-UBTCON-704` | confirmed | The form summarises the chosen recurrence with its end date and the chosen reminder by its label |
| PersonalEventForm | `BR-UBTCON-705` | confirmed | Marking the event all-day hides the start and end time fields and closes the time pickers; the times and the chosen reminder are kept |
| Picker_Date | `BR-UBTCON-746` | confirmed | In the date picker, moving to the current month selects today and moving to any other month selects its first day; the arrows step one month |
| Picker_Time | `BR-UBTCON-747` | confirmed | The time picker offers twelve hours counted from the start time's hour, minutes in steps of the interval counted from the start time's minute, and starts on PM when the start hour is 12 or later |
| Picker_Time | `BR-UBTCON-748` | confirmed | A picked time is converted to 24-hour form: 12 hours are added for PM hours other than 12 and for 12 AM |
| Policy_Checker | `BR-UBTCON-940` | confirmed | While the device flag says policies are pending, every screen whose layout does not opt out is redirected to Accept Pending Policies |
| Recurrence | `BR-UBTCON-706` | confirmed | The Repeat screen offers "Don't repeat" followed by "Every <type>" for each recurrence type, working on a copy of the form's recurrence anchored to the event start |
| Recurrence | `BR-UBTCON-707` | confirmed | Choosing a recurrence type starts from a blank recurrence: interval 1, ending on the type's default end date; weekly repeats on the start weekday, monthly on the start day of month, yearly in the start month; "Don't repeat" leaves it blank |
| Recurrence | `BR-UBTCON-708` | confirmed | Selecting all seven weekdays on a weekly recurrence turns it into a daily recurrence; otherwise the weekly days become exactly the selection |
| Recurrence | `BR-UBTCON-709` | confirmed | The repeat interval is chosen from 1 to 99; an empty or zero selection is ignored |
| Recurrence | `BR-UBTCON-710` | confirmed | Recurrence options appear per type: interval, end date and summary only when repeating; "Repeat every" hidden for yearly; week-of-month choice for monthly and yearly; weekday tags for weekly |
| Recurrence | `BR-UBTCON-711` | confirmed | A recurrence end date can be picked from the event start up to 36 months later, with the note "The recurring limitation period is 36 months." |
| Recurrence | `BR-UBTCON-712` | confirmed | Leaving the Repeat screen always writes the edited recurrence back to the form — no validation runs on this screen |
| Recurrence_WeekdaysTagList | `BR-UBTCON-752` | confirmed | Weekly recurrence days are chosen from seven Sunday-first tags showing weekday initials, with at least one selection required by the tag list |
| Reminder | `BR-UBTCON-713` | confirmed | All-day events are offered only the all-day reminder options and timed events only the timed ones; "Don't remind me" is always offered |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnsupportedVersion_Wrapper | `BR-UBTCON-337` | confirmed | An unsupported native app gets the upgrade-app card; otherwise an unsupported Android WebView gets the update-WebView card; otherwise the unsupported-browser card — and Back is blocked while it shows |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |
| UserEventForm_DateTimeWrapper | `BR-UBTCON-749` | confirmed | An event date is shown as invalid when it is before the minimum date; its time is shown as invalid when the date is on or before the minimum date and the time is not after the minimum time |
| ViewEventList | `BR-UBTCON-714` | confirmed | The event list shows every personal-event id stored on this device, unfiltered, and opens the detail of the one tapped |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| BackNavigationHandler | 17 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/group-page.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/ui/app-shell.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/xcut/settings-and-integrations.md:52`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-015.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connectmobile/modules/ConnectMobile/rules/BR-CMOB-002.md:7` |
| Button | 30 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-698.md:29`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-696.md:28` |
| ButtonLoading | 8 | - |
| Columns_Three | 0 | - |
| Columns_Two | 1 | - |
| Connect_Search | 15 | - |
| CustomContainer | 19 | - |
| CustomScrollList | 0 | - |
| DynamicTextArea | 1 | - |
| FixedFooter | 2 | - |
| GetEventsByCacheKeys | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:48`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_CS/rules/BR-C2LEG-215.md:25`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/module.md:41`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/module.md:53`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/rules/BR-C2LEG-202.md:5` |
| HorizontalTagList | 7 | - |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| Input_Underlined | 0 | - |
| Layout_DetailPage | 7 | - |
| PersonalEvent_Create | 16 | - |
| PersonalEvent_Get | 17 | - |
| SearchResult_Item | 19 | - |
| SearchSheet_Entity_UnderDev | 0 | - |
| SelectionOption_List | 3 | - |
| UBT_LazyImage | 29 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/overview.md:75`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:286`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:292` |
