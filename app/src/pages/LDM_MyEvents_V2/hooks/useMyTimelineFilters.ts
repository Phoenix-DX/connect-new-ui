import { useEffect, useRef, useState } from 'react';
import type { EventCalendarFiltersAsText, TimelineLocalityFilter } from '@/api/event';
import { getDynamicTopPosition } from '@/pages/LDM_MyEvents_V2/components/actions';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import {
  bypassClearFromDate,
  bypassClearToDate,
  clearFilters,
  dateInputWritten,
  filterOf,
  initialMyTimelineFiltersState,
  onChangeDateInputs,
  onClickListItem,
  onReadyDates,
  onReadyPosition,
  resetFiltersOf,
  selectLocalities,
  toggleIsShowList,
  type MyTimelineFiltersState,
} from './myTimelineFiltersState';

/** The events of the filter popup, which MyEvents_MyTimelineFilterButton handles. */
export interface MyTimelineFiltersEvents {
  /** Close(IsToReset). */
  onClose: (isToReset: boolean) => Promise<void>;
  /** Filter(SelectedFilters). */
  onFilter: (selectedFilters: EventCalendarFiltersAsText) => Promise<void>;
  /** ResetFilters(ResetFilters). */
  onResetFilters: (resetFilters: EventCalendarFiltersAsText) => void;
}

/** What the popup renders, and the handlers of its widgets. */
interface MyTimelineFiltersFlows {
  state: MyTimelineFiltersState;
  /** The times icon: OnClose. */
  onClose: () => void;
  /** The change of a date input (Input_FromDate: isFrom True): the variable, then OnChange_DateInputs. */
  onDateChange: (isFrom: boolean, value: string) => void;
  /** The locality input, the times icon of the list and a back navigation while the list shows: Toggle_IsShowList. */
  onToggleIsShowList: () => void;
  /** Clear: ClearFilters. */
  onClear: () => void;
  /** Filter: OnFilter. */
  onFilter: () => void;
  /** A locality of the list: OnClick_ListItem. */
  onClickListItem: (locality: TimelineLocalityFilter, rowNumber: number) => void;
  /** Select: SelectLocalities. */
  onSelectLocalities: () => void;
}

/** The flows of the timeline filter popup.
    - In_SelectedFilters: a new value of the input replaces the block's copy (setInputs); the actions change the copy.
    - OnReady: SetDates from In_SelectedFilters (NullDate: the default window), PersistLocalities, the position of the
      locality list under the locality input (GetDynamicTopPosition), then IsReady True.
    - A cleared date input runs BypassClear_FromDate / BypassClear_ToDate 10 ms later (window.setTimeout of the
      SetFromDate / SetToDate JavaScript nodes): the default window again.
    - Clear (when IsReady): the default dates, only "All Localities" selected, IsToReset True, then ResetFilters.
    - Filter (when IsReady): Filter with the localities and the selected dates.
    - The times icon: Close(IsToReset).
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters */
export function useMyTimelineFilters(
  inSelectedFilters: EventCalendarFiltersAsText,
  inDefaultDateRangeInMonths: number,
  events: MyTimelineFiltersEvents,
): MyTimelineFiltersFlows {
  const [state, setState] = useState(() => initialMyTimelineFiltersState(inSelectedFilters));
  const latest = useRef(state);
  const eventsRef = useRef(events);
  const range = useRef(inDefaultDateRangeInMonths);
  useEffect(() => {
    eventsRef.current = events;
    range.current = inDefaultDateRangeInMonths;
  });

  /** A variable assignment: the next action reads it at once. */
  const update = (change: (s: MyTimelineFiltersState) => MyTimelineFiltersState) => {
    latest.current = change(latest.current);
    setState(latest.current);
  };

  /* setInputs: a new In_SelectedFilters replaces the block's copy (OnParametersChanged is not defined). */
  const input = useRef(inSelectedFilters);
  useEffect(() => {
    if (input.current === inSelectedFilters) return;
    input.current = inSelectedFilters;
    update((s) => ({ ...s, selectedFilters: inSelectedFilters }));
  }, [inSelectedFilters]);

  /* OnReady. */
  useEffect(() => {
    update((s) => onReadyDates(s, new Date(), range.current));
    const position = getDynamicTopPosition('.past-event-filter-locality-input');
    update((s) => onReadyPosition(s, position));
  }, []);

  /* The timers of the SetFromDate / SetToDate JavaScript nodes. */
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    [],
  );

  return {
    state,
    onClose: () => {
      eventsRef.current.onClose(latest.current.isToReset).catch(raiseToFlowHandler);
    },
    onDateChange: (isFrom, value) => {
      update((s) => dateInputWritten(s, isFrom, value));
      const change = onChangeDateInputs(latest.current, isFrom, range.current);
      update(() => change.state);
      if (change.bypassClear === 'from')
        timers.current.push(
          setTimeout(() => {
            update((s) => bypassClearFromDate(s, new Date(), range.current));
          }, 10),
        );
      if (change.bypassClear === 'to')
        timers.current.push(
          setTimeout(() => {
            update((s) => bypassClearToDate(s, range.current));
          }, 10),
        );
    },
    onToggleIsShowList: () => {
      update(toggleIsShowList);
    },
    onClear: () => {
      if (!latest.current.isReady) return;
      update((s) => clearFilters(s, new Date(), range.current));
      eventsRef.current.onResetFilters(resetFiltersOf(latest.current));
    },
    onFilter: () => {
      if (!latest.current.isReady) return;
      eventsRef.current.onFilter(filterOf(latest.current)).catch(raiseToFlowHandler);
    },
    onClickListItem: (locality, rowNumber) => {
      update((s) => onClickListItem(s, locality, rowNumber));
    },
    onSelectLocalities: () => {
      update(selectLocalities);
    },
  };
}
