# Pack of UI flow Deprecated_Calendar_PersonalEvent (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Event Title"  ← ScreenEvent_OnInitialize.Value
- "This is the address"  ← ScreenEvent_OnInitialize.Value
- "2 accepted, 11 pending"  ← ScreenEvent_OnInitialize.Value
- "This is a note for my personal event and my guest"  ← ScreenEvent_OnInitialize.Value
- "Test Member"  ← ListAppendAll.Value
- "Personal Events"  ← PersonalEventDetails.Value
- "d MMMM yyyy"  ← Block_ListHeader.Value, EventDate.Value
- "All day"  ← Content.Value
- "h:mm tt -"  ← Content.Value
- "h:mm tt"  ← Content.Value
- "See all attendees"  ← ViewAllAttendees.Value
- "Invalid Recurring Meeting. There is an issue with the recurring meeting setup. Please check the recurrence pattern, timing, and conflicts of the meeting."  ← FeedbackMessage_AutoClose.Value
- "Event end date-time must be after event start date-time"  ← OnClick_CreateEvent.Message
- "Add title"  ← Input_Title.Prompt
- "Is all day"  ← Block_AllDay.Value
- "Add attendees"  ← Block_Attendees.Value
- "Add location"  ← Block_Location.Value, TextArea_Address.Prompt
- "Add notes"  ← TextArea_Note.Prompt
- "View Events"  ← PersonalEventForm.Value
- "calc(2 * var(--space-base) + var(--ubt-button-height-m))"  ← PersonalEventForm.Value
- "Don't repeat"  ← ListAppend_DontRepeat.Value
- "Id = Recurrence.Pattern.Type"  ← Block_RecurrenceTypes.Value
- "Repeat every"  ← NotYearly.Value
- "connect-event-form__option-list connect-event-form__option-list--border-none"  ← YearlyorMonthly.Value
- "Get_WeekIndexOptionLabel(Recurrence.Pattern.Type, RecurrencePatternWeekIndexIdentifier, Recurrence.Range.StartDate)"  ← Block_WeekIndexOptions.Value
- "End date"  ← Block_RecurrenceEndDate.Value
- "The recurring limitation period is 36 months."  ← Block_RecurrenceEndDate.Value
- "Id = PersonalEventForm.ReminderId"  ← Block_ReminderTypes.Value
- "Add Invitees"  ← Indev_AddAttendees.Value
- "dd MMM, yyyy"  ← UserEventForm_DateTime.Value
- "Enter your PIN code"  ← UnlockText.DefaultValue
- "Pin does not match"  ← Event_Pincode_PinUnlockError.Value
- "User not found"  ← Event_Pincode_PinUnlockError.Value
- "Your current PIN is not correct!"  ← Event_Pincode_PinUnlockError.Value
- "No matching user. Please Register a PIN"  ← Event_Pincode_PinUnlockError.Value
- "border-bottom-s border-color-neutral-0"  ← Block_PINUnlock_ContentWrapper.Value
- "Forgot PIN?"  ← Block_PINUnlock_ContentWrapper.Value
- "Terms & Conditions"  ← Block_PINUnlock_ContentWrapper.Value
- "Our Privacy Policy"  ← Block_PINUnlock_ContentWrapper.Value
- "We have noticed you are using an old version of Connect."  ← UnsupportedVersion_Native.Value
- "We recommend you upgrade to the latest version."  ← UnsupportedVersion_Browser.Value, UnsupportedVersion_Native.Value, UnsupportedVersion_WebView.Value
- "If you have any issues upgrading the Connect app, please uninstall and reinstall it."  ← UnsupportedVersion_Native.Value
- "We have noticed you are using an unsupported version of Android System Webview."  ← UnsupportedVersion_WebView.Value
- "ubt-lock-screen connect-legacy-compatibily-containter"  ← Block_PINUnlock.Value
- "MMMM, yyyy"  ← Calendar_Header_SelectedDate.Value
- "Nothing in your calendar."  ← Calendar_NoEvents.Value
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "(0 events)"  ← Block_ListHeader.Value
- "Incorrect date value"  ← GetWeekView.Message
- "Incorrect year value"  ← GetStandardMonth.Message, GetStandardWeek.Message
- "All events"  ← Get_CalendarEventSourceConfiguration.Value
- "Lord’s Day Meal"  ← GetLookup_CalendarEventSource.Value, Get_CalendarEventSourceConfiguration.Value
- "Personal events"  ← GetLookup_CalendarEventSource.Value, Get_CalendarEventSourceConfiguration.Value