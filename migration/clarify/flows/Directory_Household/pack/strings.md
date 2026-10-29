# Pack of UI flow Directory_Household (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Unavailable, Unavailable"  ← DetailPage.Value
- "Photobook is currently unavailable for this household. Please try again later."  ← Handler_OnClickPhotobook.Message
- "Household gallery"  ← ImageCard_LazyLoading.Value
- "Your profile is private and only visible to you"  ← isHouseholdHidden.Value
- "Supper Meeting:"  ← SeeMoreSection.Value
- "Previous spouse"  ← PreviousSpouses.Value
- "Enter your PIN code"  ← UnlockText.DefaultValue
- "Pin does not match"  ← Event_Pincode_PinUnlockError.Value
- "User not found"  ← Event_Pincode_PinUnlockError.Value
- "Your current PIN is not correct!"  ← Event_Pincode_PinUnlockError.Value
- "No matching user. Please Register a PIN"  ← Event_Pincode_PinUnlockError.Value
- "border-bottom-s border-color-neutral-0"  ← Block_PINUnlock_ContentWrapper.Value
- "Forgot PIN?"  ← Block_PINUnlock_ContentWrapper.Value
- "Terms & Conditions"  ← Block_PINUnlock_ContentWrapper.Value
- "Our Privacy Policy"  ← Block_PINUnlock_ContentWrapper.Value
- "LocalityId = Filter_LocalityId"  ← ScreenEvent_OnParametersChanged.Value
- "We have noticed you are using an old version of Connect."  ← UnsupportedVersion_Native.Value
- "We recommend you upgrade to the latest version."  ← UnsupportedVersion_Browser.Value, UnsupportedVersion_Native.Value, UnsupportedVersion_WebView.Value
- "If you have any issues upgrading the Connect app, please uninstall and reinstall it."  ← UnsupportedVersion_Native.Value
- "We have noticed you are using an unsupported version of Android System Webview."  ← UnsupportedVersion_WebView.Value
- "Household members"  ← Members.Value
- "ubt-lock-screen connect-legacy-compatibily-containter"  ← Block_PINUnlock.Value
- ".layout .content"  ← ScrollTop2.Value
- "Bookmarks not available"  ← GetBookmarkCategoryId_ByEntityTypeId.ExceptionMessage, OnReady.ExceptionMessage
- "Invalid option"  ← OnReady.ExceptionMessage
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "Select calendar year"  ← Block_CalendarYears_Label.Value
- "Total students"  ← Block_CalendarYearFilter.Value
- "Total per year"  ← OneSchoolGlobal_Numbers.Value
- "Sports Day Extravaganza: Igniting the Team Spirit"  ← Get_OneSchoolGlobal_EventList.Value
- "School gathering"  ← Get_OneSchoolGlobal_EventList.Value
- "found nearby"  ← Location.DefaultValue
- "There doesn't seem to be any"  ← Directory_EmptyState.Value
- "this locality."  ← Directory_EmptyState.Value
- "Educating Students From:"  ← OneSchoolGlobalDetails_Block.Value
- "OneSchool Global"  ← GetSkeleton_UI_OneSchoolGlobal_DetailCard.Value
- "9 Park Ave, Aberfoyle  Park SA 5159"  ← GetSkeleton_UI_OneSchoolGlobal_DetailCard.Value
- "Subdivision Name Example"  ← GetSkeleton_UI_SubdivisionCardContent.Value
- "Subdivision Formatted Address Example"  ← GetSkeleton_UI_SubdivisionCardContent.Value
- "Show student numbers"  ← Get_LookupSection.Value
- "Example & Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Example, Example, Example, Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "testing address testing addres NSW 2000"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Example Example Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Share not available"  ← GetShareType_FromEntity.ExceptionMessage
- "Sports Day"  ← GetSkeleton_UI_OneSchoolGlobal_EventCard.Value
- "John & Jane Smith"  ← GetSkeleton_UI_SubdivisionHousehold.Value