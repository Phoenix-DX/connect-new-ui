# Pack of UI flow Directory_OneSchoolGlobal_Blocks (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Sports Day Extravaganza: Igniting the Team Spirit"  ← Get_OneSchoolGlobal_EventList.Value
- "School gathering"  ← Get_OneSchoolGlobal_EventList.Value
- "LocalityId = Filter_LocalityId"  ← ScreenEvent_OnParametersChanged.Value
- "Educating Students From:"  ← OneSchoolGlobal_DetailCard_Content.Value
- "Select calendar year"  ← Block_CalendarYears_Label.Value
- "Total students"  ← Block_CalendarYearFilter.Value
- "Total per year"  ← OneSchoolGlobal_Numbers.Value
- "Bookmarks not available"  ← GetBookmarkCategoryId_ByEntityTypeId.ExceptionMessage, OnReady.ExceptionMessage
- "Invalid option"  ← OnReady.ExceptionMessage
- "Share not available"  ← GetShareType_FromEntity.ExceptionMessage
- "Sports Day"  ← GetSkeleton_UI_OneSchoolGlobal_EventCard.Value