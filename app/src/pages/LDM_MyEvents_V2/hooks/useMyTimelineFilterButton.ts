import { useEffect, useRef, useState } from 'react';
import { fetchEventFilterLocalities, type EventFilterLocality } from '@/api/locality';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { addAuditEvent_LDM, getCurrentTimeInMill } from '@/shared/Connect2_OrbitMobile_MUI/lib/actions';

/** What the filter button renders. */
export interface MyTimelineFilterButtonFlows {
  /** IsShowFilters: the filter popup is open. */
  isShowFilters: boolean;
  /** ToggleEventFilters: the filter icon, and a back navigation while the popup is open. */
  toggleEventFilters: () => void;
}

/** The flows of the timeline filter button.
    - OnReady and OnParametersChanged: when In_HasLoaded and HasLocalityData is False, GetEventLocalitiesData: the
      refresh of GetEventLocalitiesForFilter, SelectedFilters.Localities = its EventLocalities, HasLocalityData True,
      then the RequestAPI_EventLocalities audit event. One fetch at a time.
    - ToggleEventFilters: IsShowFilters changes.
    The variables of the block are not kept by the view cache: a view restored by a back navigation fetches the
    localities again.
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton */
export function useMyTimelineFilterButton(
  hasLoaded: boolean,
  isShowing: boolean,
  defaultDateRangeInMonths: number,
): MyTimelineFilterButtonFlows {
  const [isShowFilters, setIsShowFilters] = useState(false);
  const hasLocalityData = useRef(false);
  const fetching = useRef(false);
  /* SelectedFilters.Localities: read only by the filter popup, which is not captured (Q1). */
  const [, setLocalities] = useState<EventFilterLocality[]>([]);

  useEffect(() => {
    if (!hasLoaded || hasLocalityData.current || fetching.current) return;
    fetching.current = true;
    void (async () => {
      try {
        const start = getCurrentTimeInMill();
        const localities = await fetchEventFilterLocalities({
          In_HasLoaded: hasLoaded,
          In_DefaultDateRangeInMonths: defaultDateRangeInMonths,
          In_IsShowing: isShowing,
          IsShowFilters: isShowFilters,
          HasLocalityData: false,
        });
        setLocalities(localities);
        hasLocalityData.current = true;
        addAuditEvent_LDM('RequestAPI_EventLocalities', { RequestTime: String(getCurrentTimeInMill() - start) });
      } catch (e) {
        raiseToFlowHandler(e);
      } finally {
        fetching.current = false;
      }
    })();
  }, [hasLoaded, defaultDateRangeInMonths, isShowing, isShowFilters]);

  return {
    isShowFilters,
    toggleEventFilters: () => {
      setIsShowFilters((v) => !v);
    },
  };
}
