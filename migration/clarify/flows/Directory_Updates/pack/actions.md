# Pack of UI flow Directory_Updates (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

Module client actions the flow calls (transitive): 26; of them shared (in `../../_shared/pack/actions.md`): 18

## Shared actions (signature only)

| Action | Folder | Inputs | Outputs | Used by flows |
|---|---|---|---|---|
| App_CommonFilter_CheckCountry | App_CommonFilter | CountryCode: Text (mandatory); SubscribedCountries: Code, Name, RegionId Record List (mandatory) | IsEnabled: Boolean | 7 |
| App_CommonFilter_DefineOptionNames | App_CommonFilter | OptionList_Control: Filter_Common_Control_List (mandatory) | Formatted: Filter_Common_Control_List | 7 |
| Directory_Updates_RefreshBottomBarCount | Directory_Updates | ForceRefresh: Boolean | - | 19 |
| ExitApplicationForWebViewUpdate | ExternalNavigation | Delay: Integer | - | 29 |
| GetURLFromEventDataURL | Share_Utils | EventDataURL: Text (mandatory) | URL: Text | 29 |
| GetUserInformation_Wrapper_Assign | App_Cache | UserInformation: CacheControl_UserInformation | - | 15 |
| Get_IsUnsupportedSystem | UnsupportedSystems | - | Out_IsUnsupportedSystem: Boolean | 29 |
| Get_IsUnsupportedVersion | UnsupportedSystems | - | Out_IsUnsupportedWebViewVersion: Boolean; Out_IsUnsupportedAppVersion: Boolean; Out_IsUnsupportedBrowserVersion: Boolean | 29 |
| OfflineDataSync | App_OfflineDataSync | SyncUnit: Text (mandatory) | - | 29 |
| OfflineDataSyncConfiguration | App_OfflineDataSync | - | SyncOnOnline: Boolean; SyncOnLogin: Boolean; SyncOnResume: Boolean; RetryOnError: Boolean; RetryIntervalInSeconds: Integer | 29 |
| OpenGooglePlay_Chrome | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_UBTConnect | ExternalNavigation | - | - | 29 |
| OpenGooglePlay_WebView | ExternalNavigation | - | - | 29 |
| ScrollTop | Utils | In_ScrollContainer: Text = ".active-screen"; In_Behaviour: Text = "instant" | - | 19 |
| SetResumeLoginLink | Share_Utils | URL: Text (mandatory) | - | 29 |
| Try_GetIsSupportedVersion | UnsupportedSystems | - | IsSupportedNativeVersion: Boolean = True; IsSupportedWebView: Boolean = True; IsAndroid: Boolean; IsApple: Boolean | 29 |
| Upgrade_UBTConnect | ExternalNavigation | - | - | 29 |
| Upgrade_WebView | ExternalNavigation | - | - | 29 |

## Actions of this flow (full)

## Directory_Updates_AugmentDateRanges (action, folder Directory_Updates)
- inputs: DateRangeList: Updates_DateRanges List (mandatory)
- outputs: DateRanges: UI_Updates_DateRange List; Temp_DateRange: UI_Updates_DateRange
```
[M1] for each DateRangeList
  switch (Date Range)
    case DateRangeList.Current.Id = Entities.Updates_DateRanges.Today (Today)
      assign (Set Today): Temp_DateRange.Range = DateRangeList.Current.Id; Temp_DateRange.To = CurrDate(); Temp_DateRange.From = CurrDate()
      [M2] call ListAppend(Element=Temp_DateRange, List=DateRanges) as ListAppend_Temp
      → continues at [M1]
    case DateRangeList.Current.Id = Entities.Updates_DateRanges.Last7Days (7 Days)
      assign (Set Last 7 Days): Temp_DateRange.Range = DateRangeList.Current.Id; Temp_DateRange.From = AddDays(CurrDate(),-7); Temp_DateRange.To = AddDays(CurrDate(),-1)
      → continues at [M2]
    case DateRangeList.Current.Id = Entities.Updates_DateRanges.Last30Days (30 Days)
      assign (Set Last 30 Days): Temp_DateRange.Range = DateRangeList.Current.Id; Temp_DateRange.From = AddDays(CurrDate(),-30); Temp_DateRange.To = AddDays(CurrDate(),-8)
      → continues at [M2]
    case DateRangeList.Current.Id = Entities.Updates_DateRanges.Older (Older)
      assign (Set Older): Temp_DateRange.Range = DateRangeList.Current.Id; Temp_DateRange.From = Directory_Updates_MinDateToShow(); Temp_DateRange.To = AddDays(CurrDate(),-31)
      → continues at [M2]
    otherwise
      → continues at [M1]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  [DISABLED] assign (Set Date Ranges): Filter_DateRanges.Today.Date_From = CurrDate(); Filter_DateRanges.Today.Date_To = CurrDate(); Filter_DateRanges.Last7Days.Date_From = AddDays(CurrDate(),-7); Filter_DateRanges.Last7Days.Date_To = AddDays(Filter_DateRanges.Today.Date_From,-1); Filter_DateRanges.Last30Days.Date_From = AddDays(CurrDate(),-30); Filter_DateRanges.Last30Days.Date_To = AddDays(Filter_DateRanges.Last7Days.Date_From,-1); Filter_DateRanges.Older.Date_From = Directory_Updates_MinDateToShow(); Filter_DateRanges.Older.Date_To = AddDays(Filter_DateRanges.Last30Days.Date_From,-1)
  end
```

## Directory_Updates_GetBreakpoints (action, folder Directory_Updates)
- inputs: UI_UpdateItemList: UI_UpdateItem List (mandatory); DateRanges: UI_Updates_DateRange List (mandatory)
- outputs: Breakpoints: UI_UpdateItem_Breakpoint List
```
if (Has Updates?) not UI_UpdateItemList.Empty
  [M1] for each DateRanges
    call ListFilter(Condition=(Date >= DateRanges.Current.From) and (Date <= DateRanges.Current.To), SourceList=UI_UpdateItemList) as ListFilter_GetRange
    if (Found Range?) not ListFilter_GetRange.FilteredList.Empty
      call ListIndexOf(Condition=(Date >= DateRanges.Current.From) and (Date <= DateRanges.Current.To), List=UI_UpdateItemList) as ListIndexOf_Position
      call ListDuplicate(SourceList=ListFilter_GetRange.FilteredList) as ListDuplicate_Range
      call ListFilter(Condition=not IsRead, SourceList=ListDuplicate_Range.DuplicatedList) as ListFilter_GetUnread
      call ListAppend(Element={ Position: ListIndexOf_Position.Position, SectionName: TextToIdentifier(DateRanges.Current.Range), BadgeCount: ListFilter_GetUnread.FilteredList.Length, DateRange: DateRanges.Current }, List=Breakpoints)
      → continues at [M1]
    else
      → continues at [M1]
  end for
  call ListSort(Ascending=True, By=Position, List=Breakpoints)
  end
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Directory_Updates_GetCarouselPreloadedHouseholds (action, folder Directory_Updates)
- inputs: In_ParametersList: HouseholdId, IsRead, Updates_CarouselSwipeCallbackParameters Record List (mandatory)
- outputs: Out_CarouselPreloadedHouseholds: CarouselPreloadedHouseholds
- locals: SwipeCallback: SwipeAction
```
[M1] for each In_ParametersList
  if In_ParametersList.Current.IsRead
    assign: SwipeCallback.ActionId = NullTextIdentifier(); SwipeCallback.Parameters = ""
    [M2] call ListAppend(Element={ Household: In_ParametersList.Current.HouseholdId, SwipeAction: SwipeCallback }, List=Out_CarouselPreloadedHouseholds.CarouselHouseholdItem)
    → continues at [M1]
  else
    json-serialize JSONSerialize_Parameters = In_ParametersList.Current.Updates_CarouselSwipeCallbackParameters (dates ISO)
    assign: SwipeCallback.ActionId = Entities.Type_CarouselItemSwipeAction.UpdatesCarousel_SetIsRead; SwipeCallback.Parameters = JSONSerialize_Parameters.JSON
    → continues at [M2]
end for
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## Directory_Updates_GetListBreakpoint (action, folder Directory_Updates)
- inputs: In_Breakpoints: UI_UpdateItem_Breakpoint List (mandatory); In_CurrentUpdateDate: Date (mandatory); In_PreviousUpdateDate: Date (mandatory); In_IsAscending: Boolean
- outputs: Out_ListBreakpoint: UI_UpdateItem_Breakpoint
- locals: DateRangeId: Updates_DateRanges Identifier; Temp_Date: Date
```
if In_CurrentUpdateDate = NullDate() or In_PreviousUpdateDate = NullDate()
  end
else
  if In_IsAscending
    assign: Temp_Date = In_PreviousUpdateDate; In_PreviousUpdateDate = In_CurrentUpdateDate; In_CurrentUpdateDate = Temp_Date
    [M1] if (Is older than 30 days?) DiffDays(In_CurrentUpdateDate, CurrDateTime()) > 30 and \nDiffDays(In_PreviousUpdateDate, CurrDateTime()) <= 30\n
      assign: DateRangeId = If(In_IsAscending,Entities.Updates_DateRanges.Last30Days,Entities.Updates_DateRanges.Older)
      assign (>>): 
      [M2] assign (>>): 
      [M3] assign (>>): 
      [M4] assign (>>): 
      [M5] call ListIndexOf(Condition=SectionName = DateRangeId, List=In_Breakpoints)
      if ListIndexOf.Position <> -1
        assign: Out_ListBreakpoint = In_Breakpoints[ListIndexOf.Position]
        end
      else
        end
    else
      if (Is older than 7 days?) DiffDays(In_CurrentUpdateDate, CurrDateTime()) > 7 and \nDiffDays(In_PreviousUpdateDate, CurrDateTime()) <= 7\n
        assign: DateRangeId = If(In_IsAscending,Entities.Updates_DateRanges.Last7Days,Entities.Updates_DateRanges.Last30Days)
        → continues at [M2]
      else
        if (Is older than today?) DiffDays(In_CurrentUpdateDate, CurrDateTime()) >= 1 and \nDiffDays(In_PreviousUpdateDate, CurrDateTime()) < 1\n
          assign: DateRangeId = If(In_IsAscending,Entities.Updates_DateRanges.Today,Entities.Updates_DateRanges.Last7Days)
          → continues at [M3]
        else
          if (Is today?) DiffDays(In_CurrentUpdateDate, CurrDateTime()) = 0 and \nDiffDays(In_PreviousUpdateDate, CurrDateTime()) = 0 and \nnot In_IsAscending\n
            assign: DateRangeId = Entities.Updates_DateRanges.Today
            → continues at [M4]
          else
            if (Is older than 30 days and ascending?) DiffDays(In_CurrentUpdateDate, CurrDateTime()) > 30 and \nDiffDays(In_PreviousUpdateDate, CurrDateTime()) > 30 and In_IsAscending\n
              assign: DateRangeId = Entities.Updates_DateRanges.Older
              → continues at [M5]
            else
              end
  else
    → continues at [M1]
unreachable nodes (not connected to start or to an exception handler):
  end
  end
  end
```

## Directory_Updates_GetUpdatedBreakpoints (action, folder Directory_Updates)
- inputs: UI_UpdateItemList: UI_UpdateItem List (mandatory); SelectedPosition: Integer; DateRanges: UI_Updates_DateRange List (mandatory); Breakpoints: UI_UpdateItem_Breakpoint List (mandatory)
- outputs: ChangedBreakpoint: UI_UpdateItem_Breakpoint; UpdatedBreakpoints: UI_UpdateItem_Breakpoint List
```
[M1] for each Breakpoints
  if (Is Position >= to Breakpoint?) SelectedPosition >= Breakpoints.Current.Position
    assign: ChangedBreakpoint = Breakpoints.Current
    → continues at [M1]
  else
    → continues at [M1]
end for
assign: UpdatedBreakpoints = Breakpoints
call ListIndexOf(Condition=SectionName = ChangedBreakpoint.SectionName, List=UpdatedBreakpoints) as ListIndexOf_UpdatedBreakpoints
if (Found?) ListIndexOf_UpdatedBreakpoints.Position <> -1
  call ListFilter(Condition=Range = ChangedBreakpoint.SectionName, SourceList=DateRanges) as ListFilter_GetRange
  if (Found Range?) not ListFilter_GetRange.FilteredList.Empty
    call ListFilter(Condition=(Date >= ListFilter_GetRange.FilteredList.Current.From) and (Date <= ListFilter_GetRange.FilteredList.Current.To), SourceList=UI_UpdateItemList) as ListFilter_UpdateList
    call ListDuplicate(SourceList=ListFilter_UpdateList.FilteredList) as ListDuplicate_SectionedList
    call ListFilter(Condition=not IsRead, SourceList=ListDuplicate_SectionedList.DuplicatedList) as ListFilter_GetUnread
    assign (Update Badge Count): ChangedBreakpoint.BadgeCount = ListFilter_GetUnread.FilteredList.Length
    assign (Update Breakpoints List): UpdatedBreakpoints[ListIndexOf_UpdatedBreakpoints.Position] = ChangedBreakpoint
    end
  else
    end
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
  end
```

## Directory_Updates_MarkAllAsRead (action, folder Directory_Updates)
- inputs: In_UI_UpdateItemList: UI_UpdateItem List (mandatory)
- outputs: Out_UI_UpdateItemList: UI_UpdateItem List
```
[M1] for each In_UI_UpdateItemList
  if (Is Unread?) not In_UI_UpdateItemList.Current.IsRead
    assign (Set IsRead): In_UI_UpdateItemList.Current.IsRead = True
    → continues at [M1]
  else
    → continues at [M1]
end for
assign: Out_UI_UpdateItemList = In_UI_UpdateItemList
end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeletonList_UI_Updates (action, folder Directory_Skeleton)
- inputs: ListLength: Integer = 4
- outputs: UI_UpdateItems: UI_UpdateItem List
```
[M1] if ListLength > 0
  call GetSkeleton_UI_UpdatesContent()
  call ListAppend(Element=GetSkeleton_UI_UpdatesContent.UI_UpdateItem, List=UI_UpdateItems)
  assign: ListLength = ListLength - 1
  → continues at [M1]
else
  end
unreachable nodes (not connected to start or to an exception handler):
  end
```

## GetSkeleton_UI_UpdatesContent (action, folder Directory_Skeleton)
- inputs: -
- outputs: UI_UpdateItem: UI_UpdateItem
```
assign (Setup Dummy data): UI_UpdateItem.Name = "Example & Example"; UI_UpdateItem.UpdateItemTypeId = Entities.Connect_UpdateTypeId.Taken; UI_UpdateItem.Date = NewDate(1,1,1901); UI_UpdateItem.LocationString = "Example, Example"
end
unreachable nodes (not connected to start or to an exception handler):
  end
```
