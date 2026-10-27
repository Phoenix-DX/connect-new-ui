# KB index of UI flow _shared

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/supper-meetings-oneschool.md` — Supper meetings, OneSchool Global and the entities carousel (16 names of this flow, 13 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/common-blocks.md` — Common blocks and pop-up dialogs (flows `App_Common_Blocks`, `App_Common_Blocks_PopupDialogs`) (13 names of this flow, 5 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-household.md` — Directory — households and relations (flows `Directory_Household`, `Directory_Household_Blocks`) (8 names of this flow, 23 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-locality.md` — Directory — countries and localities (flows `Directory_Locality`, `Directory_Interchange`, `Directory_CommonBlocks`, `zDEV_Directory_CommunityBusinessBlocks`) (8 names of this flow, 33 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/filter-sort-sheets.md` — Filter, sort and more-action sheets (flow `App_CommonBlocks_Filter`) (8 names of this flow, 15 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/app-shell.md` — App shell — start, login, layouts and the common in-layout block (flows `App_Common`, `App_Cache`, `SubLayout`) (6 names of this flow, 37 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/calendar.md` — My Calendar and the calendar blocks (flows `Calendar`, `Calendar_Events`) (6 names of this flow, 35 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/design-tokens.md` — Design tokens used across UBTConnect (whole module) (6 names of this flow, 2 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/bookmarks.md` — Bookmarks (flow `Bookmarks`) — the Connect 2 bookmarks list (4 names of this flow, 13 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/directory-entity-actions.md` — Directory — entity actions bar (`Directory_EntityDetailsActions`, flow `Directory_CommonBlocks`) (4 names of this flow, 14 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/updates.md` — Updates feed screen (flow `Directory_Updates`) (3 names of this flow, 26 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/contact-by-email.md` — Contact by email (flow `ContactFlow`) (2 names of this flow, 10 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/contact-us.md` — Contact Us (flow `App_Menu_ContactUs`) (2 names of this flow, 14 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/home-feed.md` — Home (flow `Home`) — home feed, services, updates and the embedded news feed (2 names of this flow, 17 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/map.md` — Map (flow `Map`) — explore map, preview, explore list and layer caches (2 names of this flow, 27 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/notifications.md` — Notifications (flow `App_Notifications`) (2 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/menu.md` — Menu, Terms & Policies and the menu list block (flow `App_Menu`) (1 names of this flow, 8 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/notes.md` — Notes (flow `Notes`) — the "My notes" list (1 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/profile-services.md` — Profile (flow `App_Profile`) and Services favourites (flow `App_Services`) (1 names of this flow, 11 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/search.md` — Directory search (flow `Directory_Search`) (1 names of this flow, 12 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/helpers.md`: App_CommonFilter_DefineOptionNames, GetIconLabel_Interchange_Statistics, GetNameAndSurname_ByFullName, GetSkeletonList_UI_HouseholdMembers, Get_LookupRSVPStatus, HouseholdMember_GetShowContacts, IsStringEquals, ListJoin, Wait
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-recurrence.md`: GetRecurrenceDescription, GetRecurrencePatternWeekIndexList, Get_LookupRecurrencePatternWeekIndex, Get_LookupRecurrenceType, Get_WeekIndexOptionLabel, MapRecurrencePatterDaysOfWeek, ValidateRecurrence, ValidateWeeklyRecurrence
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/client-variables.md`: FCM_DeeplinkCallback, FCM_NotificationCallback, GetShareType_FromEntity, GetUserInformation_Wrapper_Assign, OfflineDataSync, OnOffiline, OnOnline, Wait
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/session-and-sync.md`: GetUserInformation_Wrapper, GetUserInformation_Wrapper_Assign, Get_Cacheable_MapEntities, Get_Cacheable_MapHouseholds, OfflineDataSync, OpenGooglePlay_UBTConnect, Upgrade_UBTConnect
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/xcut/validation.md`: FRD_UserCallback, Get_Cacheable_MapEntities, Get_Cacheable_MapHouseholds, Get_Years_Extra_Option_FlatList, HouseholdMember_GetShowContacts, ToggleBookmarkItem_C2, UBTConnect_JSUtils_ElementCache_GetObjProperty
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/app-version.md`: Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OpenGooglePlay_UBTConnect, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/bookmarks-notes.md`: ToggleBookmarkItem, ToggleBookmarkItem_C2, AddBookmark, AddBookmark2, DeleteBookmarkByBookmarkId, DeleteBookmarkByBookmarkId2
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-grid.md`: GetDateOfFirstDayOfWeek, GetDateOfLastDayOfWeek, GetMonthGrid, GetMonthGrid_ExtraRow, GetMonthName, GetStartingPosition
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-misc-date-actions.md`: GetDescriptor_OneSchool_Event_Years, GetDistinctYearsOptions, Get_Descriptor_OneSchool_Event_TimeRange, Get_Years_Extra_Option_FlatList
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/orientation.md`: LockOrientationLandscapeIfNeeded, LockOrientationWithNavigationTransition, OnApplicationReady_ListenForLandscapeScreens, UnlockOrientationLandscapeIfNeeded
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/push-and-deeplinks.md`: FCM_DeeplinkCallback, FCM_NotificationCallback, GetURLFromEventDataURL, LN_MaybeTriggerLocalNotification
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/region-access.md`: App_CommonFilter_CheckCountry, HasAccessToRegion, IsStringEquals
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-app-start-and-login.md`: OnOffiline, OnOnline, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-event-display.md`: FormatEventDescriptionTime, IsEventOnDay
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-updates-feed-sections.md`: Directory_Updates_MinDateToShow, Directory_Updates_RefreshBottomBarCount
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/map-cache.md`: Get_Cacheable_MapEntities, Get_Cacheable_MapHouseholds
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-directory-navigation.md`: HasAccessToRegion, GetHouseholdDetails
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: GetURLFromEventDataURL, SetResumeLoginLink
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-date-strip.md`: IsItemAboveMaximumDate
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/calendar-reminders.md`: Get_LookupReminderType
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/sharing.md`: GetShareType_FromEntity
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-calendar.md`: GetEventsByCacheKeys
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-personal-events.md`: ValidateWeeklyRecurrence

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| App_CommonFilter_CheckCountry | `BR-UBTCON-256` | confirmed | A country is enabled in the common filter when it matches one of the subscribed countries by code, ignoring case and surrounding spaces |
| App_CommonFilter_DefineOptionNames | `BR-UBTCON-269` | confirmed | The filter's selected-names list is rebuilt from the selected ids, matched case-insensitively; options without a display text are skipped |
| App_IconBadge | `BR-UBTCON-319` | confirmed | An icon badge shows its number only when it is not zero, and shows a skeleton while loading or while the count is still unknown (-1) |
| App_NotificationIcon | `BR-UBTCON-320` | confirmed | The notification bell opens the new Notifications screen when the new-notifications flag is on, otherwise the legacy message list; its badge stays loading until notifications are synched |
| AreDatesInSameMonth | `BR-UBTCON-500` | confirmed | Two dates are in the same month only when both the month number and the year match |
| AreDatesInSameWeek | `BR-UBTCON-501` | confirmed | A date is in the same week as a second date when it falls between that second date's Sunday and Saturday, both inclusive |
| CacheControl_CalendarEvents | `BR-UBTCON-715` | confirmed | Calendar events are cached per source selection and month for two hours by default; on a miss they are fetched for that month in the device's time zone |
| CacheControl_CalendarEvents | `BR-UBTCON-716` | confirmed | Events not flagged "display in local time" have their start and end shifted by the device's time-zone offset, so they show the server wall-clock time; flagged events are left as received |
| Calendar_EventCard | `BR-UBTCON-744` | confirmed | An event card carries its source's header label, icon and colours, the title, the time line and the location |
| CompareRecurrence | `BR-UBTCON-503` | confirmed | A recurrence counts as changed when its JSON form differs in any attribute from the initial copy |
| DiffMonths | `BR-UBTCON-504` | confirmed | The month distance between two dates is the absolute count of calendar months between them, ignoring the day of month |
| Directory_BrowseByCountry_TooltipBuilder | `BR-UBTCON-505` | confirmed | A country marker's tooltip is a single link labelled with the marker's ExtraData; tapping it calls back with the marker Id |
| Directory_EmptyState | `BR-UBTCON-810` | confirmed | Directory empty states read "No <entity> <location>" — pluralised with "s" only for interchanges |
| Directory_EntityDetailsActions | `BR-UBTCON-833` | confirmed | The directory actions bar offers a fixed set of actions per entity type; a Locality raises "Invalid option" and any other type "Bookmarks not available" |
| Directory_EntityDetailsActions | `BR-UBTCON-834` | confirmed | The actions bar fetches contact details for members, OneSchool Global, supper meetings and households only, and only when a call, e-mail or share action needs them |
| Directory_EntityDetailsActions | `BR-UBTCON-835` | confirmed | After fetching, Call is offered when any phone number exists and E-mail when there is an e-mail address or a mobile number; a fetch error disables every action |
| Directory_EntityDetailsActions | `BR-UBTCON-836` | confirmed | Bookmarking from the actions bar uses the Connect 2 bookmark store when the new-bookmarks flag is on, otherwise the legacy store; the menu shows Bookmark or Unbookmark from the local copy |
| Directory_EntityDetailsActions | `BR-UBTCON-837` | confirmed | Share types are resolved only for entity types that can be shared, and the share pop-up exists only with the extended-share flag |
| Directory_EntityDetailsActions | `BR-UBTCON-838` | confirmed | E-mail for a OneSchool Global entry goes straight to the school e-mail form; for anyone else it opens the message-channel pop-up |
| Directory_EntityDetailsActions | `BR-UBTCON-839` | confirmed | Contact pop-ups for OneSchool Global always use the OneSchool Global image (the host image goes to the share sheet), and a host-supplied name replaces the fetched name |
| Directory_EntityDetailsActions | `BR-UBTCON-840` | confirmed | Deleting a note from the actions bar removes it from the shown list and decrements the note count; the bar shows a skeleton until bookmarks and notes have synced |
| Directory_Interchange_StatisticsList | `BR-UBTCON-801` | confirmed | Interchange cards ignore taps while loading and show an "No interchanges" empty state only after loading finished |
| Directory_Updates_MinDateToShow | `BR-UBTCON-162` | confirmed | The oldest update date shown is today minus the client's months-to-show setting; a setting of 0 means no lower limit |
| Directory_Updates_RefreshBottomBarCount | `BR-UBTCON-171` | confirmed | The bottom-bar unread badge is refetched from the server only when the configured number of minutes has passed since the last check, or when forced |
| EntitiesCarousel | `BR-UBTCON-904` | confirmed | The entities carousel opens at the caller's starting position unless it already has an active slide (restored view) |
| EntitiesCarousel_Element | `BR-UBTCON-903` | confirmed | A carousel slide renders supper-meeting details or household details by entity type, and only while it is near the active slide |
| ExitApplicationForWebViewUpdate | `BR-UBTCON-506` | confirmed | The app closes itself after the given delay only where the Cordova exitApp API exists; elsewhere nothing happens |
| External_Link | `BR-UBTCON-334` | confirmed | An external link opens through the RedirectToURL external site on iOS and through the in-app browser helper elsewhere |
| FCM_DeeplinkCallback | `BR-UBTCON-223` | confirmed | A tapped push notification opens its ScreenName when one is set, otherwise its DeepLink; with neither, nothing happens |
| FCM_DeeplinkCallback | `BR-UBTCON-224` | confirmed | A user who still has to register a PIN is sent to PIN registration instead of the notification's target |
| FCM_DeeplinkCallback | `BR-UBTCON-225` | confirmed | A PIN-protected app that is not unlocked — or whose App Manager is still starting — opens the PIN unlock screen instead of the notification's target |
| FCM_NotificationCallback | `BR-UBTCON-226` | confirmed | A push received while the app is open may raise a local notification, then refreshes the unread count and stamps the last-checked time |
| FRD_UserCallback | `BR-UBTCON-209` | confirmed | A Firebase realtime-database LogOut event for the user is recognised and deliberately ignored by the app |
| FilterSheet | `BR-UBTCON-321` | confirmed | Country and locality filters are only built for a paid plan, and only once the cached country/locality list and the user's subscription have both loaded |
| FilterSheet | `BR-UBTCON-322` | confirmed | On any plan other than Global each country option is enabled only if it is one of the user's subscribed countries |
| FilterSheet | `BR-UBTCON-323` | confirmed | The locality list follows the country selection: all localities when "All" countries is selected, otherwise only those of the selected countries; previously chosen localities survive only if still listed |
| FilterSheet | `BR-UBTCON-324` | confirmed | The sheet opens with the caller's current filter preselected, or "All" when nothing is selected — but the locality preselection copies country ids |
| FilterSheet | `BR-UBTCON-325` | confirmed | When sorting is enabled the sheet adds one sort choice that defaults to Yes (newest first) unless the caller passed a sort; when sorting is disabled any existing sort choice is removed |
| FilterSheet | `BR-UBTCON-326` | confirmed | A free user whose sheet would offer only country/locality filters is told to upgrade instead of opening the sheet |
| FilterSheet | `BR-UBTCON-328` | confirmed | Filter changes take effect only on Apply: Apply is disabled until something changed, Clear is disabled when already clear and applies immediately, and closing the sheet discards unapplied changes |
| FilterSheet | `BR-UBTCON-329` | confirmed | A sheet with exactly one filter opens straight into that filter's option list, and Back from the list closes the sheet |
| FilterSheet | `BR-UBTCON-330` | confirmed | Choosing "All" countries resets the locality selection to "All"; choosing specific countries re-filters the locality list |
| FilterSheet_Icon | `BR-UBTCON-327` | confirmed | The filter icon ignores taps until the sheet has loaded; then it either opens the upgrade pop-up or opens the filter sheet |
| FilterSheet_OptionChoice_Item | `BR-UBTCON-333` | confirmed | A yes/no filter choice offers a third "none" option only when the caller gives it a label |
| FilterSheet_OptionList_Item | `BR-UBTCON-331` | confirmed | Searching a filter list matches option names ignoring case and accents; the "All" option is offered only when not searching and the list allows it; an empty search result shows a no-results message |
| FilterSheet_OptionList_Item | `BR-UBTCON-332` | confirmed | Tapping a locked (not enabled) country or locality opens the upgrade pop-up instead of selecting it |
| FormatEventDescriptionTime | `BR-UBTCON-124` | confirmed | An event's time line reads "d MMM - d MMM" for multi-day all-day events, "All day" for single all-day events, dates with times for timed events crossing midnight, and a time range otherwise |
| GetDateOfFirstDayOfWeek | `BR-UBTCON-502` | confirmed | The first day of a week is the Sunday on or before the given date |
| GetDateOfLastDayOfWeek | `BR-UBTCON-110` | confirmed | The last day of a week is six days after the week's first day |
| GetDayLabel | `BR-UBTCON-508` | confirmed | Sunday is always labelled "Lord's Day"; every other day uses the caller's weekday format |
| GetDescriptor_BretherenCount | `BR-UBTCON-532` | confirmed | The brethren count reads "<Brethren plural label>: N" |
| GetDescriptor_OneSchool_Event_Years | `BR-UBTCON-176` | confirmed | An event's participant years are described as "Years " followed by runs of consecutive years collapsed into ranges (e.g. a-b) and separated by the list-join defaults |
| GetDescriptor_Subdivision_GenderSplit | `BR-UBTCON-533` | confirmed | A supper meeting's gender split reads "N <Brother plural> & M <Sister plural>", brothers first |
| GetDescriptor_Subdivision_HouseholdCount | `BR-UBTCON-534` | confirmed | A supper meeting's household count reads "<Household plural label>: N" |
| GetDistinctYearsOptions | `BR-UBTCON-182` | confirmed | Bookmark year options are meant to be distinct years of creation, but the duplicate check reads a list that is never filled — so a year is added once per bookmark |
| GetIconLabel_Interchange_Statistics | `BR-UBTCON-263` | confirmed | Interchange statistics get their icon and colour from the statistic's English label; an unknown label gets none |
| GetMonthGrid | `BR-UBTCON-511` | confirmed | The standard month grid holds ColumnsPerView × RowsPerMonth cells — 35 with the client-variable defaults (7 × 5) |
| GetMonthGrid_ExtraRow | `BR-UBTCON-512` | confirmed | The extra-row month grid holds one more row than the standard grid — 42 cells with the defaults (7 × 6) |
| GetNameAndSurname_ByFullName | `BR-UBTCON-259` | confirmed | A full name is split on spaces: the last word is the surname and the words before it are the name |
| GetRecurrenceDescription | `BR-UBTCON-132` | confirmed | A recurrence whose pattern type is none of daily, weekly, monthly or yearly is described as "Does not repeat"; every other description starts with "Occurs " (lower-case "occurs " when shown inside a notification) |
| GetRecurrenceDescription | `BR-UBTCON-133` | confirmed | A daily recurrence reads "every day", "every other day" or "every N days" |
| GetRecurrenceDescription | `BR-UBTCON-134` | confirmed | A monthly recurrence reads either by day of month ("on day D of every month") or by week index and weekday ("every <index> <weekday>"), with a short form ("on day D" / "on the <index> <weekday>") when the range has an end date and the end date is not shown |
| GetRecurrenceDescription | `BR-UBTCON-135` | confirmed | A yearly recurrence reads "every D MMMM" or "every year on the <index> <weekday> of MMMM" ("on …" when the end date is not shown) — the interval is never mentioned |
| GetRecurrenceDescription | `BR-UBTCON-136` | confirmed | A weekly recurrence reads "every <days>", "every other <days>" or "every N weeks on <days>" |
| GetRecurrenceDescription | `BR-UBTCON-137` | confirmed | Every repeating description ends with " until " plus, only when IncludeEndDate is set, the range end date formatted "d MMM, yyyy" and the line terminator — regardless of whether the range has an end date |
| GetRecurrencePatternTypeLabel | `BR-UBTCON-140` | confirmed | A recurrence unit is named in the plural when the interval is greater than one (first matching type wins) |
| GetRecurrencePatternWeekIndexList | `BR-UBTCON-145` | confirmed | A date's week-of-month index is the count of same-weekday dates from the 1st of the month up to it (1st, 2nd, … 5th), looked up in the supplied week-index list |
| GetRecurrencePatternWeekIndexList | `BR-UBTCON-146` | confirmed | A date on the fourth occurrence of its weekday is also offered as the 'last' occurrence — even when the month has a fifth |
| GetRecurrentWeekdaysLabelByRecurrence | `BR-UBTCON-138` | confirmed | In recurrence descriptions Sunday is called "Lord's Day" |
| GetRecurrentWeekdaysLabelByRecurrence | `BR-UBTCON-139` | confirmed | Selected weekdays are listed with an initial capital, separated by commas, with "and" before the last (and an Oxford comma when there are three or more) |
| GetShareType_FromEntity | `BR-UBTCON-244` | confirmed | Share type per entity type — "My Household" is chosen only for an entity type that matched none of the earlier cases, so a Household is always shared as Household |
| GetStartingPosition | `BR-UBTCON-513` | confirmed | A month's starting position is the weekday of its first day: 0 for Sunday through 6 for Saturday |
| GetURLFromEventDataURL | `BR-UBTCON-515` | confirmed | A shared link from the web share page is rewritten into the app's ConnectShare route, and a doubled "UBTConnect/" segment is collapsed |
| GetUserInformation_Wrapper_Assign | `BR-UBTCON-530` | confirmed | Whether the user still has policies to accept is copied from the cached user information onto the device |
| Get_Cacheable_MapEntities | `BR-UBTCON-271` | confirmed | The five world map layers are fetched together and cached on the device for 7200 seconds, each under its layer name |
| Get_Cacheable_MapHouseholds | `BR-UBTCON-272` | confirmed | The world household map layer is cached on the device for 7200 seconds twice — once as markers and once as explore-list items |
| Get_Descriptor_OneSchool_Event_TimeRange | `BR-UBTCON-177` | confirmed | An event's time range reads "<start> - <end> <time zone>" using the Connect time format |
| Get_IsUnsupportedSystem | `BR-UBTCON-232` | confirmed | The system is unsupported when either the app version or the browser (WebView) version is unsupported |
| Get_IsUnsupportedVersion | `BR-UBTCON-231` | confirmed | The app version is unsupported when the native shell version is unsupported; the WebView counts as unsupported for the WebView flag only on Android |
| Get_LookupRSVPStatus | `BR-UBTCON-265` | confirmed | RSVP status colours: Host neutral, Accepted success, Declined error, Tentative warning; any other status gets no colour |
| Get_LookupRecurrencePatternWeekIndex | `BR-UBTCON-142` | confirmed | Week-of-month indices map to numbers first=1, second=2, third=3, fourth=4, last=5; any other id is cleared |
| Get_LookupRecurrenceType | `BR-UBTCON-141` | confirmed | The four recurrence types carry fixed labels: day/days "Daily", week/weeks "Weekly", month/months "Monthly", year/years "Yearly"; any other id yields an empty lookup |
| Get_LookupReminderType | `BR-UBTCON-158` | confirmed | Timed-event reminder options read "Don’t remind me", "5/15/30 minutes before", "1/2/12 hours before", "1 day before" and "1 week before" |
| Get_LookupReminderType | `BR-UBTCON-159` | confirmed | All-day-event reminder options are flagged IsAllDay and read "At the time of the event", "Day of event at 9:00 AM", "Day before event at 9:00 AM", "Day before event at 5:00 PM" and "1 week before event at 5:00 PM" |
| Get_WeekIndexOptionLabel | `BR-UBTCON-149` | confirmed | The week-index option reads "On day D" / "On the <index> <weekday>" for monthly, and "On D MMMM" / "On the <index> <weekday> of MMMM" for yearly; other types have no label |
| HasAccessToRegion | `BR-UBTCON-252` | confirmed | A Global-plan user has access to every country and locality |
| HasAccessToRegion | `BR-UBTCON-253` | confirmed | A Regional or AdvancePlus user has access to a target whose country is one of their subscribed countries, matched by name or code; the locality is not checked |
| HasAccessToRegion | `BR-UBTCON-254` | confirmed | A Free-plan user has access only to their own country (when no locality is targeted) or their own locality |
| HasAccessToRegion | `BR-UBTCON-255` | confirmed | A user on any plan other than Global, Regional, AdvancePlus or Free has no regional access in the app — the server's map rule grants such plans their subscribed countries |
| HouseholdDetails_Members_Block | `BR-UBTCON-823` | confirmed | Tapping a household member's row opens relations for anyone but a child; the navigation chevron follows the server's flag, the row tap ignores it |
| HouseholdDetails_Members_Block | `BR-UBTCON-824` | confirmed | A married child's household opens only when the plan covers their locality — the row tap does not check the server's navigation flag |
| HouseholdDetails_Members_Block | `BR-UBTCON-825` | confirmed | Member contact actions appear only when the server marks the member as having CTAs, and call/e-mail are disabled for a deceased member; lifecycle text is shown as sent |
| HouseholdDetails_TimelinePhoto | `BR-UBTCON-843` | confirmed | A household timeline photo is drawn only when it has a background image |
| HouseholdMember_GetShowContacts | `BR-UBTCON-257` | confirmed | A household member's contact details are shown only from age 21 |
| Household_Card | `BR-UBTCON-808` | confirmed | A household card loads its member avatars only when it has a household id, and always asks for them with the viewer's age visibility off |
| Household_GalleryCard_List | `BR-UBTCON-841` | confirmed | A supper meeting's household gallery shows the directory empty state when it has no households |
| IsEventOnDay | `BR-UBTCON-123` | confirmed | An all-day event appears on every day from its start date to its end date inclusive; a timed event appears on days from its start date up to, but not including, the day its end time falls at midnight |
| IsHouseholdDetails_InAncestryModeView | `BR-UBTCON-518` | confirmed | A household is in ancestry-mode view only if its id is in an in-memory list kept on the page window |
| IsItemAboveMaximumDate | `BR-UBTCON-120` | confirmed | A strip item is past the maximum date when the day, the week's first day, or the month's first day (per view) is after MaximumDate — with no null check on MaximumDate |
| IsStringEquals | `BR-UBTCON-260` | confirmed | Text comparison helper: trimmed, and case-insensitive unless asked otherwise |
| ItemCardActions | `BR-UBTCON-335` | confirmed | Un-bookmarking from a card always tells the parent the item was unbookmarked, even when the server delete failed |
| LN_MaybeTriggerLocalNotification | `BR-UBTCON-227` | confirmed | A foreground push is shown as a local notification only when it carries a deep link |
| LN_MaybeTriggerLocalNotification | `BR-UBTCON-228` | confirmed | The local notification's icon comes from the push's NotificationIcon extra parameter when present, otherwise the plugin default |
| ListJoin | `BR-UBTCON-261` | confirmed | A text list is joined with ", " and " & " before the last item — unless the last item already contains " & ", then ", " is used |
| LockOrientationLandscapeIfNeeded | `BR-UBTCON-274` | confirmed | Entering a landscape screen on an Android device locks landscape when the phone is portrait — and locks portrait when it is already landscape |
| LockOrientationWithNavigationTransition | `BR-UBTCON-276` | confirmed | During a navigation the orientation lock waits for the page transition to start and animates it; otherwise it is applied immediately |
| MapRecurrencePatterDaysOfWeek | `BR-UBTCON-155` | confirmed | Selected weekday identifiers are resolved to DayOfWeek records and sorted by weekday number |
| NullTime | `BR-UBTCON-519` | confirmed | The app's NullTime is midnight (00:00:00) |
| OfflineDataSync | `BR-UBTCON-520` | confirmed | The offline data synchronization does nothing: the action goes straight from Start to End and ignores SyncUnit |
| OfflineDataSyncConfiguration | `BR-UBTCON-521` | confirmed | Offline sync is set to start automatically when the device comes online, at login and on resume, with no retry on error |
| OnApplicationReady_ListenForLandscapeScreens | `BR-UBTCON-273` | confirmed | Outside iOS, every navigation locks landscape on the listed landscape screens and unlocks it elsewhere; on iOS orientation is not managed |
| OnOffiline | `BR-UBTCON-523` | confirmed | Going offline sets the persistent online flag to False |
| OnOnline | `BR-UBTCON-522` | confirmed | Going online sets the persistent online flag to True |
| OpenGooglePlay_Chrome | `BR-UBTCON-524` | confirmed | The Chrome update link opens the Google Play page of package com.android.chrome |
| OpenGooglePlay_UBTConnect | `BR-UBTCON-526` | confirmed | The app update link opens the Google Play page of the running app's own package name |
| OpenGooglePlay_WebView | `BR-UBTCON-525` | confirmed | The WebView update link opens the Google Play page of package com.google.android.webview |
| SetResumeLoginLink | `BR-UBTCON-527` | confirmed | A deep link to open after login is parked on the page window, where GetResumeLoginLink later reads and clears it |
| ToggleBookmarkItem | `BR-UBTCON-235` | confirmed | Legacy bookmarking: the device copy is created only after the server confirms the add; a failed add ends silently |
| ToggleBookmarkItem | `BR-UBTCON-236` | confirmed | Legacy un-bookmarking: the device copy is removed only after the server confirms the delete; otherwise "Bookmark could not be removed. Please try again later." |
| ToggleBookmarkItem_C2 | `BR-UBTCON-237` | confirmed | Connect 2 bookmarking: the device copy is created only after the server confirms the add; a failure shows the add-error toast |
| ToggleBookmarkItem_C2 | `BR-UBTCON-238` | confirmed | Connect 2 un-bookmarking: the device copy is deleted only after the server confirms the delete; a failure shows the remove-error toast |
| Try_GetIsSupportedVersion | `BR-UBTCON-233` | confirmed | If the version check fails, the app treats both the native version and the WebView as supported |
| UnlockOrientationLandscapeIfNeeded | `BR-UBTCON-275` | confirmed | Leaving a landscape screen on an Android device locks portrait when the phone is landscape or the page is marked landscape, and removes the mark |
| Upgrade_WebView | `BR-UBTCON-234` | confirmed | To update the WebView, Android below 10 is sent to the Chrome store page and Android 10+ to Android System WebView, then the app closes after 10 seconds |
| ValidateRecurrence | `BR-UBTCON-153` | confirmed | Only weekly recurrences are validated; every other type is valid |
| ValidateWeeklyRecurrence | `BR-UBTCON-154` | confirmed | A weekly recurrence is valid when at least one of its selected weekdays has a first occurrence on or before the range end date (weekdays earlier in the week than the start fall Interval weeks later) |
| Wait | `BR-UBTCON-278` | confirmed | The server Wait action spins until the requested number of seconds has passed, unless the IsKi site property is set |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| AddBookmark | 39 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-bookmarks/build/behaviour.md:74`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-bookmarks/build/behaviour.md:80`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/logic/bookmarks-sharing.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/module.md:59`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/rules/BR-C2LEG-042.md:19` |
| AddBookmark2 | 7 | - |
| DeleteBookmarkByBookmarkId | 29 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-bookmarks/build/behaviour.md:74`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/rules/BR-C2LEG-184.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/rules/BR-C2LEG-184.md:25`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/logic/bookmarks-sharing.md:21`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_MUI/module.md:59` |
| DeleteBookmarkByBookmarkId2 | 5 | - |
| FetchData_CacheableHouseholds | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/map/build/behaviour.md:112`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-households-and-visibility.md:9` |
| FetchData_CacheableMapEntities | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-points-of-interest.md:8`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Map_CS/logic/map-access-countries-localities.md:11` |
| GetEventsByCacheKeys | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:48`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_CS/rules/BR-C2LEG-215.md:25`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/module.md:41`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/module.md:53`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyCalendar_BL/rules/BR-C2LEG-202.md:5` |
| GetHouseholdDetails | 12 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/module.md:49`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/rules/BR-C2LEG-531.md:26` |
| GetNotesByItemId | 10 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/index/build/triage.md:146`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:113`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Notes_CS/logic/notes.md:12` |
| GetSubdivisionLocation_BySubdivisionId | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/findings.md:78`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/logic/subdivisions-and-interchanges.md:16`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Subdivision_CS/module.md:81` |
| Get_Core_LocalityTimezone | 7 | - |
| Get_OneSchoolGlobalDetails | 14 | - |
| Get_UI_UpdateItems_UnreadCount_All | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/updates/build/behaviour.md:184`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Updates_CS/logic/update-feed.md:83` |
| Household_GetMembers_Service | 7 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/household/build/behaviour.md:322`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/household-retrieval.md:11`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/household-details.md:20` |
| ListAppend | 54 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-807.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:19`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/rules/BR-C2LEG-301.md:20`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_Assemble_IS/module.md:50` |
| ListAppendAll | 34 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-796.md:30`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-931.md:32`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/logic/rest-wrappers.md:23`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_IS/module.md:66` |
| Member_ContactDetails_Service | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/household/build/behaviour.md:328`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/logic/member-account.md:3`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-services/modules/Connect_Household_CS/rules/BR-C2SVC-151.md:5` |
| Wait | 26 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/overview.md:44`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:126`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/my-calendar/build/behaviour.md:128`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/triage.md:57`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/findings.md:90` |
