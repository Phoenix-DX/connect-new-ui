// @os-block Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { NotCaptured } from '@/app/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';
import { PreventBackNavigation } from '../../../shared/NavigationHandler/PreventBackNavigation';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { getEventLocalitiesForFilter } from '../api';
import type { EventLocality } from '../types';
import { addAuditEvent_LDM, getCurrentTimeInMill } from '../../../shared/Connect2_OrbitMobile_MUI/lib/actions';

export interface MyEvents_MyTimelineFilterButtonProps {
  id?: string;
  /** Instance scope of the block's widgets ("b1-b4"). */
  scope: string;
  /** In_HasLoaded. */
  inHasLoaded: boolean;
  /** In_IsShowing. */
  inIsShowing: boolean;
  /** In_DefaultDateRangeInMonths (default 24). */
  inDefaultDateRangeInMonths?: number;
}

/** The timeline filter button (analysis/sources/pretty/Connect2_OrbitMobile_MUI.LDM_Blocks_V2
    .MyEvents_MyTimelineFilterButton.mvc.js = FB). View (FB :205-260): when In_IsShowing, the filter icon (clickable
    when In_HasLoaded, else greyed `text-neutral-6`), then BlockPlaceholder > SearchFiltersRoot with, while
    IsShowFilters, PreventBackNavigation and the Event_Filters_PopUp (popup-dialog my-events-popup-filters) holding
    MyTimeline_Filters: not captured (Q1, NotCaptured; its Filter / Close / ResetFilters events are not reachable).
    OnReady / OnParametersChanged (FB :595-625): when In_HasLoaded and HasLocalityData is False, GetEventLocalitiesData
    (FB :760-775): Refresh GetEventLocalitiesForFilter, SelectedFilters.Localities = its EventLocalities,
    HasLocalityData = True, AddAuditRequestAPIEvent(RequestAPI_EventLocalities, request time). */
export function MyEvents_MyTimelineFilterButton({
  id,
  scope,
  inHasLoaded,
  inIsShowing,
  inDefaultDateRangeInMonths = 24,
}: MyEvents_MyTimelineFilterButtonProps) {
  const [isShowFilters, setIsShowFilters] = useState(false);
  const hasLocalityData = useRef(false);
  const fetching = useRef(false);
  const [, setLocalities] = useState<EventLocality[]>([]);
  usePopupWidget(isShowFilters);

  /** ToggleEventFilters (FB :690-700). */
  const toggleEventFilters = () => {
    setIsShowFilters((v) => !v);
  };

  useEffect(() => {
    if (!inHasLoaded || hasLocalityData.current || fetching.current) return;
    fetching.current = true;
    void (async () => {
      try {
        const start = getCurrentTimeInMill();
        const localities = await getEventLocalitiesForFilter({
          In_HasLoaded: inHasLoaded,
          In_DefaultDateRangeInMonths: inDefaultDateRangeInMonths,
          In_IsShowing: inIsShowing,
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
  }, [inHasLoaded, inDefaultDateRangeInMonths, inIsShowing, isShowFilters]);

  return (
    <OSBlock name="LDM_Blocks_V2.MyEvents_MyTimelineFilterButton" id={id}>
      {inIsShowing ? (
        inHasLoaded ? (
          <i className="icon font-size-1-5em fa fa-filter fa-1x" data-icon="" onClick={toggleEventFilters} />
        ) : (
          <i className="icon font-size-1-5em text-neutral-6 fa fa-filter fa-1x" data-icon="" />
        )
      ) : null}
      <div data-container="" id={`${scope}-BlockPlaceholder`}>
        <div className="backwards-compatibility" data-container="" id={`${scope}-SearchFiltersRoot`}>
          {isShowFilters ? (
            <>
              <PreventBackNavigation id={`${scope}-$b1`} onBackNavigationPrevented={toggleEventFilters} />
              {createPortal(
                <div className="portal-class">
                  <div className="popup-backdrop" data-popup-backdrop="">
                    <div
                      aria-modal="true"
                      className="popup-dialog popup-dialog my-events-popup-filters"
                      data-popup=""
                      id={`${scope}-Event_Filters_PopUp`}
                      role="dialog"
                    >
                      <div className="popup-content">
                        <NotCaptured name="LDM_Blocks.MyTimeline_Filters (Q1)" />
                      </div>
                    </div>
                  </div>
                </div>,
                document.body,
              )}
            </>
          ) : null}
        </div>
      </div>
    </OSBlock>
  );
}
