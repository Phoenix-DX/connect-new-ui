import { createPortal } from 'react-dom';
import { NotCaptured } from '@/platform/feedback/NotCaptured';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { usePopupWidget } from '@/components/ui/os/OSPopup';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { useMyTimelineFilterButton } from '@/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilterButton';

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

/** The timeline filter button. When In_IsShowing: the filter icon, clickable when In_HasLoaded, else greyed
    (`text-neutral-6`). Then BlockPlaceholder > SearchFiltersRoot with, while IsShowFilters, PreventBackNavigation and
    the Event_Filters_PopUp (popup-dialog my-events-popup-filters). Its content MyTimeline_Filters is not captured (Q1,
    NotCaptured): its Filter, Close and ResetFilters events are not reachable. The flows are in
    useMyTimelineFilterButton.
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks_V2.MyEvents_MyTimelineFilterButton */
export function MyEvents_MyTimelineFilterButton({
  id,
  scope,
  inHasLoaded,
  inIsShowing,
  inDefaultDateRangeInMonths = 24,
}: MyEvents_MyTimelineFilterButtonProps) {
  const { isShowFilters, toggleEventFilters } = useMyTimelineFilterButton(
    inHasLoaded,
    inIsShowing,
    inDefaultDateRangeInMonths,
  );
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
