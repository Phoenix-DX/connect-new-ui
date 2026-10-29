# Pack of UI flow Calendar_Events (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Nothing in your calendar."  ← Calendar_NoEvents.Value
- "All events"  ← Get_CalendarEventSourceConfiguration.Value
- "Lord’s Day Meal"  ← Get_CalendarEventSourceConfiguration.Value
- "Personal events"  ← Get_CalendarEventSourceConfiguration.Value