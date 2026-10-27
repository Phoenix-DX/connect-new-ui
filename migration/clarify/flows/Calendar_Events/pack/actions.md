# Pack of UI flow Calendar_Events (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 2; of them shared (in `../../_shared/pack/actions.md`): 0

## Actions of this flow (full)

## Get_CalendarEventSourceConfiguration (function, folder Calendar)
- inputs: In_EventSourceId: Type_MyCalendarEventSource Identifier (mandatory); In_IsAllEvents: Boolean
- outputs: Out_CalendarEventSourceConfiguration: UI_CalendarEventSourceConfiguration
```
if In_IsAllEvents
  assign (UserCreated): Out_CalendarEventSourceConfiguration.Id = NullTextIdentifier(); Out_CalendarEventSourceConfiguration.LongLabel = "All events"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = NullTextIdentifier(); Out_CalendarEventSourceConfiguration.HeaderTextColor = NullTextIdentifier(); Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.ListAlt; Out_CalendarEventSourceConfiguration.DisplayOrder = 0
  end
else
  switch (EventSource)
    case In_EventSourceId = Entities.Type_MyCalendarEventSource.Assemble (Assemble?)
      assign (Assemble): Out_CalendarEventSourceConfiguration.Id = Entities.Type_MyCalendarEventSource.Assemble; Out_CalendarEventSourceConfiguration.LongLabel = "Assemble"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = Entities.UBT_Color.PurpleDarkGradientLinear; Out_CalendarEventSourceConfiguration.HeaderTextColor = Entities.UBT_Color.PurpleDarker; Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.Assemble; Out_CalendarEventSourceConfiguration.DisplayOrder = 4; Out_CalendarEventSourceConfiguration.IndicatorColor = Entities.UBT_Color.PurpleDark
      [M1] assign (>>): 
      end
    case In_EventSourceId = Entities.Type_MyCalendarEventSource.LDM (LDM?)
      assign (LDM): Out_CalendarEventSourceConfiguration.Id = Entities.Type_MyCalendarEventSource.LDM; Out_CalendarEventSourceConfiguration.LongLabel = "Lord’s Day Meal"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = Entities.UBT_Color.PeachDarkGradientLinear; Out_CalendarEventSourceConfiguration.HeaderTextColor = Entities.UBT_Color.PeachDarker; Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.LDM; Out_CalendarEventSourceConfiguration.DisplayOrder = 3; Out_CalendarEventSourceConfiguration.IndicatorColor = Entities.UBT_Color.Peach
      → continues at [M1]
    case In_EventSourceId = Entities.Type_MyCalendarEventSource.Orbit (Orbit?)
      assign (Orbit): Out_CalendarEventSourceConfiguration.Id = Entities.Type_MyCalendarEventSource.Orbit; Out_CalendarEventSourceConfiguration.LongLabel = "Orbit"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = Entities.UBT_Color.BlueDarkGradientLinear; Out_CalendarEventSourceConfiguration.HeaderTextColor = Entities.UBT_Color.BlueDarker; Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.Orbit; Out_CalendarEventSourceConfiguration.DisplayOrder = 2; Out_CalendarEventSourceConfiguration.IndicatorColor = Entities.UBT_Color.BlueDark
      → continues at [M1]
    case In_EventSourceId = Entities.Type_MyCalendarEventSource.UserCreated (UserCreated?)
      assign (UserCreated): Out_CalendarEventSourceConfiguration.Id = Entities.Type_MyCalendarEventSource.UserCreated; Out_CalendarEventSourceConfiguration.LongLabel = "Personal events"; Out_CalendarEventSourceConfiguration.HeaderBackgroundColor = Entities.UBT_Color.CyanDarkGradientLinear; Out_CalendarEventSourceConfiguration.HeaderTextColor = Entities.UBT_Color.Neutral0; Out_CalendarEventSourceConfiguration.IconId = Entities.UBT_Icons2.AccountCircleFill; Out_CalendarEventSourceConfiguration.DisplayOrder = 1; Out_CalendarEventSourceConfiguration.IndicatorColor = Entities.UBT_Color.Primary
      → continues at [M1]
    otherwise
      end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
```

## Get_FilteredCacheKeyByDateAndEventSources (action, folder Calendar_Cache)
- inputs: In_MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory); In_CacheKey: Text (mandatory)
- outputs: Out_FilteredCacheKey: Text
```
call ListSort(By=Value, List=In_MyCalendarEventSourceIds)
[M1] for each In_MyCalendarEventSourceIds
  assign: Out_FilteredCacheKey = Out_FilteredCacheKey + In_MyCalendarEventSourceIds.Current + If(In_MyCalendarEventSourceIds.CurrentRowNumber < (In_MyCalendarEventSourceIds.Length-1),"&","")
  → continues at [M1]
end for
assign: Out_FilteredCacheKey = Out_FilteredCacheKey + "/" + In_CacheKey
end
unreachable nodes (not connected to start or to an exception handler):
  end
```
