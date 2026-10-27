# Pack of UI flow Directory_Caroussel (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Educating Students From:"  ← OneSchoolGlobalDetails_Block.Value
- "Household members"  ← Members.Value
- "Bookmarks not available"  ← GetBookmarkCategoryId_ByEntityTypeId.ExceptionMessage, OnReady.ExceptionMessage
- "Invalid option"  ← OnReady.ExceptionMessage
- "Sports Day Extravaganza: Igniting the Team Spirit"  ← Get_OneSchoolGlobal_EventList.Value
- "School gathering"  ← Get_OneSchoolGlobal_EventList.Value
- "found nearby"  ← Location.DefaultValue
- "There doesn't seem to be any"  ← Directory_EmptyState.Value
- "this locality."  ← Directory_EmptyState.Value
- "Photobook is currently unavailable for this household. Please try again later."  ← Handler_OnClickPhotobook.Message
- "Household gallery"  ← ImageCard_LazyLoading.Value
- "Your profile is private and only visible to you"  ← isHouseholdHidden.Value
- "Supper Meeting:"  ← SeeMoreSection.Value
- "LocalityId = Filter_LocalityId"  ← ScreenEvent_OnParametersChanged.Value
- "Select calendar year"  ← Block_CalendarYears_Label.Value
- "Total students"  ← Block_CalendarYearFilter.Value
- "Total per year"  ← OneSchoolGlobal_Numbers.Value
- "Example & Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Example, Example, Example, Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "testing address testing addres NSW 2000"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Example Example Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "John & Jane Smith"  ← GetSkeleton_UI_SubdivisionHousehold.Value
- "Show student numbers"  ← Get_LookupSection.Value
- "Sports Day"  ← GetSkeleton_UI_OneSchoolGlobal_EventCard.Value
- "OneSchool Global"  ← GetSkeleton_UI_OneSchoolGlobal_DetailCard.Value
- "9 Park Ave, Aberfoyle  Park SA 5159"  ← GetSkeleton_UI_OneSchoolGlobal_DetailCard.Value
- "Share not available"  ← GetShareType_FromEntity.ExceptionMessage
- "Subdivision Name Example"  ← GetSkeleton_UI_SubdivisionCardContent.Value
- "Subdivision Formatted Address Example"  ← GetSkeleton_UI_SubdivisionCardContent.Value