import { useEffect, useRef, useState } from 'react';
import type { EventCalendarFiltersAsText } from '@/api/event';
import { fetchEventFilterLocalities } from '@/api/locality';
import { useFlowScope } from '@/platform/navigation';
import { addAuditEvent_LDM, getCurrentTimeInMill } from '@/lib/orbit/actions';
import { NULL_DATE } from './myTimelineFiltersState';

/** The events of the filter button, which ScreenBlock_MyEvents_V2 handles. */
export interface MyTimelineFilterButtonEvents {
  /** Filter(SelectedFilters): the selected localities and the dates. The button waits for the handler. */
  onFilter: (selectedFilters: EventCalendarFiltersAsText) => Promise<void>;
  /** ResetFilters(ResetFilters). */
  onResetFilters: (resetFilters: EventCalendarFiltersAsText) => Promise<void>;
}

/** What the filter button renders, and the handlers of the events of the filter popup. */
export interface MyTimelineFilterButtonFlows {
  /** IsShowFilters: the filter popup is open. */
  isShowFilters: boolean;
  /** SelectedFilters: the input of the filter popup. */
  selectedFilters: EventCalendarFiltersAsText;
  /** ToggleEventFilters: the filter icon, and a back navigation while the popup is open. */
  toggleEventFilters: () => void;
  /** OnHandle_Close: the Close event of the popup. */
  onClose: (isToReset: boolean) => Promise<void>;
  /** OnHandle_Filter: the Filter event of the popup. */
  onFilter: (selectedFilters: EventCalendarFiltersAsText) => Promise<void>;
  /** OnHandle_ResetFilters: the ResetFilters event of the popup. */
  onResetFilters: (resetFilters: EventCalendarFiltersAsText) => void;
}

/** SelectedFilters default: an EventCalendarFiltersAsText record (NullDate dates, no locality). */
const NO_FILTERS: EventCalendarFiltersAsText = { FromDate: NULL_DATE, ToDate: NULL_DATE, Localities: [] };

/** The flows of the timeline filter button.
    - OnReady and OnParametersChanged: when In_HasLoaded and HasLocalityData is False, GetEventLocalitiesData: the
      refresh of GetEventLocalitiesForFilter, SelectedFilters.Localities = its EventLocalities, HasLocalityData True,
      then the RequestAPI_EventLocalities audit event. One fetch at a time.
    - ToggleEventFilters: IsShowFilters changes when In_IsShowing.
    - OnHandle_Filter (MyEvents_MyTimelineFilterButton.mvc.js :503-555): ToggleEventFilters, the Filter event with the
      selected localities and the dates, then SelectedFilters = the popup's filters.
    - OnHandle_Close(In_IsToReset) (:668-709): ToggleEventFilters; In_IsToReset raises ResetFilters(SelectedFilters).
    - OnHandle_ResetFilters(In_ResetFilters) (:465-492): SelectedFilters = In_ResetFilters.
    The variables of the block are not kept by the view cache: a view restored by a back navigation fetches the
    localities again.
    Flow scope (item 8, user 2026-10-28, item8-S5a.md Q1 (a)): GetEventLocalitiesForFilter is a data action
    (IDataAction on the MCP, R1, `flow.fetch`). After the unmount its answer and its failure are dropped: no
    SelectedFilters write, no RequestAPI_EventLocalities audit, no raise. A failure while the block lives goes to the
    flow handler with the flow scope (`flow.run`, R6).
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton */
export function useMyTimelineFilterButton(
  hasLoaded: boolean,
  isShowing: boolean,
  defaultDateRangeInMonths: number,
  events: MyTimelineFilterButtonEvents,
): MyTimelineFilterButtonFlows {
  const [isShowFilters, setIsShowFilters] = useState(false);
  const hasLocalityData = useRef(false);
  const fetching = useRef(false);
  const [selectedFilters, setSelectedFiltersState] = useState(NO_FILTERS);
  const latest = useRef({ selectedFilters, isShowing, events });
  useEffect(() => {
    latest.current.isShowing = isShowing;
    latest.current.events = events;
  });
  const setSelectedFilters = (value: EventCalendarFiltersAsText) => {
    latest.current.selectedFilters = value;
    setSelectedFiltersState(value);
  };

  const flow = useFlowScope();

  useEffect(() => {
    if (!hasLoaded || hasLocalityData.current || fetching.current) return;
    fetching.current = true;
    flow.run(async () => {
      try {
        const start = getCurrentTimeInMill();
        const localities = await flow.fetch(
          fetchEventFilterLocalities({
            In_HasLoaded: hasLoaded,
            In_DefaultDateRangeInMonths: defaultDateRangeInMonths,
            In_IsShowing: isShowing,
            IsShowFilters: isShowFilters,
            HasLocalityData: false,
          }),
        ); // R1
        setSelectedFilters({ ...latest.current.selectedFilters, Localities: localities });
        hasLocalityData.current = true;
        addAuditEvent_LDM('RequestAPI_EventLocalities', { RequestTime: String(getCurrentTimeInMill() - start) });
      } finally {
        fetching.current = false;
      }
    });
  }, [flow, hasLoaded, defaultDateRangeInMonths, isShowing, isShowFilters]);

  const toggleEventFilters = () => {
    if (latest.current.isShowing) setIsShowFilters((v) => !v);
  };

  return {
    isShowFilters,
    selectedFilters,
    toggleEventFilters,
    onClose: async (isToReset) => {
      toggleEventFilters();
      if (isToReset) await latest.current.events.onResetFilters(latest.current.selectedFilters);
    },
    onFilter: async (inSelectedFilters) => {
      toggleEventFilters();
      await latest.current.events.onFilter({
        Localities: inSelectedFilters.Localities.filter((p) => p.IsSelected),
        FromDate: inSelectedFilters.FromDate,
        ToDate: inSelectedFilters.ToDate,
      });
      setSelectedFilters(inSelectedFilters);
    },
    onResetFilters: (resetFilters) => {
      setSelectedFilters(resetFilters);
    },
  };
}
