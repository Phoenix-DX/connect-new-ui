import { createPortal } from 'react-dom';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import {
  useMyTimelineFilterButton,
  type MyTimelineFilterButtonEvents,
} from '@/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton';
import { MyTimeline_Filters } from './MyTimeline_Filters';

export interface MyEvents_MyTimelineFilterButtonProps extends MyTimelineFilterButtonEvents {
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

/** The timeline filter button. When In_IsShowing: the filter icon, clickable when In_HasLoaded, else greyed
    (`text-neutral-6`). Then BlockPlaceholder > SearchFiltersRoot with, while IsShowFilters, PreventBackNavigation and
    the Event_Filters_PopUp (popup-dialog my-events-popup-filters) with MyTimeline_Filters (In_SelectedFilters =
    SelectedFilters; its Close, Filter and ResetFilters events go to OnHandle_Close, OnHandle_Filter and
    OnHandle_ResetFilters). Built from the compiled view (decision Q1, 2026-10-27). The flows are in
    useMyTimelineFilterButton.
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton */
export function MyEvents_MyTimelineFilterButton({
  id,
  scope,
  inHasLoaded,
  inIsShowing,
  inDefaultDateRangeInMonths = 24,
  onFilter,
  onResetFilters,
}: MyEvents_MyTimelineFilterButtonProps) {
  const flows = useMyTimelineFilterButton(inHasLoaded, inIsShowing, inDefaultDateRangeInMonths, {
    onFilter,
    onResetFilters,
  });
  const { isShowFilters, toggleEventFilters } = flows;
  usePopupWidget(isShowFilters);

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
                        <MyTimeline_Filters
                          id={`${scope}-$b2`}
                          scope={`${scope}-b2`}
                          inSelectedFilters={flows.selectedFilters}
                          inDefaultDateRangeInMonths={inDefaultDateRangeInMonths}
                          onClose={flows.onClose}
                          onFilter={flows.onFilter}
                          onResetFilters={flows.onResetFilters}
                        />
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
