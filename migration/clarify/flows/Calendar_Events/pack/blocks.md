# Pack of UI flow Calendar_Events (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Own blocks of the flow: CacheControl_CalendarEvents, Calendar_EventCard, Calendar_NoEvents, EventListItem, EventListNew
Blocks of other UBTConnect flows that the flow uses (transitive): 0

## Block CacheControl_CalendarEvents (flow Calendar_Events)
- public: True
- input parameters: CacheKey: Text (mandatory); TimeToLiveSeconds: Integer = 7200; MyCalendarEventSourceIds: Type_MyCalendarEventSource Identifier List (mandatory)
- events: Result(CacheControl_Response: CacheControl_CalendarEvents) mandatory
- local variables: CacheTypeId: Connect_CacheType Identifier = Entities.Connect_CacheType.MyCalendarEvents; TimezoneName: Text; FilteredCacheKey: Text
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): CacheControl_Calendar_Coordinator, EventList_CacheWrapper

#### Data sources
- data action **GetCacheInfo** fetch=OnDemand; outputs: CacheControl_Response: CacheControl_CalendarEvents; CacheControl_FilteredKey: Text; OnAfterFetch → OnAfterFetch
  ```
  assign: CacheControl_FilteredKey = FilteredCacheKey
  call-server GetEventsByCacheKeys(KeyList=[ CacheKey ], MyCalendarEventSourceIds=MyCalendarEventSourceIds, TimeZone=TimezoneName)
  assign (CacheControl_Response): CacheControl_Response.MyCalendarEventSource = GetEventsByCacheKeys.CacheableCalendarEvents.Current.Value
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

#### Widget tree
```
block CacheControl (UBTConnect_Utils.CacheControl)
  args: CacheKey=FilteredCacheKey, CacheTypeId=CacheTypeId, TimeToLiveSeconds=TimeToLiveSeconds
  on OnCacheHit → CacheControlOnCacheHit(Object=Object)
  on OnNonCacheHit → CacheControlOnNonCacheHit
```

#### Block actions
- **CacheControlOnCacheHit** inputs: Object: Object (mandatory)
  ```
  call AssignFromObject(ObjectValue=Object, ToObjectRef=ToObject(GetCacheInfo.CacheControl_Response))
  trigger event Result(CacheControl_Response=GetCacheInfo.CacheControl_Response)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **CacheControlOnNonCacheHit**
  ```
  javascript GetTimezoneName() → IANATimezone: Text
    | $parameters.IANATimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  assign: TimezoneName = GetTimezoneName.IANATimezone
  refresh data GetCacheInfo
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnAfterFetch**
  ```
  [M1] for each GetCacheInfo.CacheControl_Response.MyCalendarEventSource (CacheableCalendarEvents)
    [M2] for each GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList (MyCalendarEventList)
      if GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.DisplayInLocalTime
        → continues at [M2]
      else
        javascript MapStartDateTime(End_ServerDateTime=GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.End, Start_ServerDateTime=GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.Start) → Start_MappedDateTime: Date Time; End_MappedDateTime: Date Time
          | $parameters.Start_MappedDateTime = new Date($parameters.Start_ServerDateTime.getTime() + ($parameters.Start_ServerDateTime.getTimezoneOffset() * 60 * 1000));
          | $parameters.End_MappedDateTime = new Date($parameters.End_ServerDateTime.getTime() + ($parameters.End_ServerDateTime.getTimezoneOffset() * 60 * 1000))
        assign: GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.Start = MapStartDateTime.Start_MappedDateTime; GetCacheInfo.CacheControl_Response.MyCalendarEventSource.Current.MyCalendarEventList.Current.End = MapStartDateTime.End_MappedDateTime
        → continues at [M2]
    end for
    → continues at [M1]
  end for
  call PutCacheableObject(CacheKey=FilteredCacheKey, CacheTimeToLiveSeconds=TimeToLiveSeconds, MemoryCacheTypeId=TextToIdentifier(CacheTypeId), Object=ToObject(GetCacheInfo.CacheControl_Response))
  trigger event Result(CacheControl_Response=GetCacheInfo.CacheControl_Response)
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call Get_FilteredCacheKeyByDateAndEventSources(In_CacheKey=CacheKey, In_MyCalendarEventSourceIds=MyCalendarEventSourceIds)
  assign: FilteredCacheKey = Get_FilteredCacheKeyByDateAndEventSources.Out_FilteredCacheKey
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Calendar_EventCard (flow Calendar_Events)
- public: False
- input parameters: MyCalendarEventCard: UI_MyCalendarEventCard (mandatory)
- events: -
- local variables: CalendarEventSourceConfiguration: UI_CalendarEventSourceConfiguration
- lifecycle: OnInitialize → OnInitialize
- used by (UBTConnect): EventList

#### Widget tree
```
block EventCard (Connect2_OrbitMobile_MUI+UBTConnectLibrary.LDM_Blocks)
  args: In_HeaderBackgroundColorId=CalendarEventSourceConfiguration.HeaderBackgroundColor, In_HeaderIconId=CalendarEventSourceConfiguration.IconId, In_HeaderLabel=CalendarEventSourceConfiguration.LongLabel, In_HeaderTextColorId=CalendarEventSourceConfiguration.HeaderTextColor, InDate=MyCalendarEventCard.Start
  on OnClickEvent → Handler_OnClickEvent
  placeholder EventTitle:
    expr: MyCalendarEventCard.EventTitle  (example: Hosted by John & Nicole McKissock)
  placeholder Time:
    expr: FormatEventDescriptionTime(\n    MyCalendarEventCard.Start,\n    MyCalendarEventCard.End,\n    MyCalendarEventCard.IsAllDay,\n    True/*MyCalendarEventCard.MyCalendarEventSourceId <> Entities.Type_MyCalendarEventSource.Assemble*/)
  placeholder Location:
    expr: MyCalendarEventCard.Location
```

#### Block actions
- **Handler_OnClickEvent**
  ```
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```
- **OnInitialize**
  ```
  call Get_CalendarEventSourceConfiguration(In_EventSourceId=MyCalendarEventCard.MyCalendarEventSourceId)
  assign: CalendarEventSourceConfiguration = Get_CalendarEventSourceConfiguration.Out_CalendarEventSourceConfiguration
  end
  unreachable nodes (not connected to start or to an exception handler):
    end
  ```

## Block Calendar_NoEvents (flow Calendar_Events)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): EventList

#### Widget tree
```
block CustomContainer (UBTConnectLibrary.BasePatterns)
  args: Options={ PaddingSize: { GeneralSizeId: Entities.UBT_Size.Small }, BorderOptions: { Color: Entities.UBT_Color.Neutral3, Size: { GeneralSizeId: Entities.UBT_Size.Small }, Radius: { GeneralSizeId: Entities.UBT…
  placeholder Content:
    expr: "Nothing in your calendar."  [style="text-neutral-8 font-semi-bold font-size-s"]
```

## Block EventListItem (flow Calendar_Events)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
```

## Block EventListNew (flow Calendar_Events)
- public: False
- input parameters: -
- events: -
- local variables: -
- lifecycle: none
- used by (UBTConnect): nothing in this module

#### Widget tree
```
```
