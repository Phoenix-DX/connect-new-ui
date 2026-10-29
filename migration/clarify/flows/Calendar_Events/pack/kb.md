# KB index of UI flow Calendar_Events

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Paths are relative to the project root (the KB is a sibling folder of the project). Rules quote the model and say `confirmed` or `inferred`.
Referenced modules have their own rule prefixes (UBT_AppManager: `BR-UAM-*`, UBTConnect_Utils: `BR-C2UTL-*`, …): grep the block name under the KB root to find them.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/calendar.md` — My Calendar and the calendar blocks (flows `Calendar`, `Calendar_Events`) (6 names of this flow, 35 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-event-display.md`: Get_CalendarEventSourceConfiguration, Get_FilteredCacheKeyByDateAndEventSources
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-calendar.md`: GetEventsByCacheKeys

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| CacheControl_CalendarEvents | `BR-UBTCON-715` | confirmed | Calendar events are cached per source selection and month for two hours by default; on a miss they are fetched for that month in the device's time zone |
| CacheControl_CalendarEvents | `BR-UBTCON-716` | confirmed | Events not flagged "display in local time" have their start and end shifted by the device's time-zone offset, so they show the server wall-clock time; flagged events are left as received |
| Calendar_EventCard | `BR-UBTCON-744` | confirmed | An event card carries its source's header label, icon and colours, the title, the time line and the location |
| Get_CalendarEventSourceConfiguration | `BR-UBTCON-127` | confirmed | The 'All events' pseudo-source has its own fixed configuration: label "All events", list icon, no header colours, display order 0 |
| Get_CalendarEventSourceConfiguration | `BR-UBTCON-128` | confirmed | Each calendar event source has a fixed label, colour scheme, icon and display order: Personal events 1, Orbit 2, Lord's Day Meal 3, Assemble 4 |
| Get_FilteredCacheKeyByDateAndEventSources | `BR-UBTCON-131` | confirmed | The calendar cache key is the sorted list of selected event-source ids joined with "&", then "/" and the date cache key — so the same selection in any order hits the same cache entry |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| CacheControl | 26 | - |
| CustomContainer | 19 | - |
| EventCard | 3 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/ui/my-events.md:37`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/ui/my-events.md:62` |
| GetEventsByCacheKeys | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:48`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_CS/rules/BR-C2LEG-215.md:25`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/module.md:41`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/module.md:53`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/rules/BR-C2LEG-202.md:5` |
