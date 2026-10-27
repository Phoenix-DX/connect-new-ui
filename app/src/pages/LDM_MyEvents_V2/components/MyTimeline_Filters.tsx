import type { EventCalendarFiltersAsText } from '@/api/event';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { OSList } from '@/components/ui/os/OSList';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import { dateInputValue, selectedLocalityText } from '@/pages/LDM_MyEvents_V2/hooks/myTimelineFiltersState';
import { useMyTimelineFilters, type MyTimelineFiltersEvents } from '@/pages/LDM_MyEvents_V2/hooks/useMyTimelineFilters';

interface MyTimeline_FiltersProps extends MyTimelineFiltersEvents {
  /** OutSystems instance id of the block. */
  id: string;
  /** Instance scope of the block's widgets. */
  scope: string;
  /** In_SelectedFilters. */
  inSelectedFilters: EventCalendarFiltersAsText;
  /** In_DefaultDateRangeInMonths (default 24). */
  inDefaultDateRangeInMonths?: number;
}

/** The content of the timeline filter popup (view: LDM_Blocks.MyTimeline_Filters.mvc.js :180-831).
    - While IsShowList: PreventBackNavigation (Toggle_IsShowList), and the filter container takes
      `pointer-events: none;`.
    - The times icon (OnClose), "Date Range", the From and To date inputs with their limits (`min`, `max`).
    - "Event Locality": the selected localities ("A, B") and the angle-down icon; a click shows the locality list.
    - "Clear" (ClearFilters) and "Filter" (OnFilter).
    - The locality list (visible while IsShowList, `top` and `max-height` from OnReady): "Select Locality", its times
      icon, one row per locality of In_SelectedFilters (check-square when selected, else square-o), and "Select".
    The `width: "100%"` grid property of the two button containers and the fade of the animated list container are not
    rendered: no capture shows their runtime markup (as Spinner and Popup). The flows are in useMyTimelineFilters.
    @origin Connect2_OrbitMobile_MUI.LDM_Blocks.MyTimeline_Filters */
export function MyTimeline_Filters({
  id,
  scope,
  inSelectedFilters,
  inDefaultDateRangeInMonths = 24,
  onClose,
  onFilter,
  onResetFilters,
}: MyTimeline_FiltersProps) {
  const flows = useMyTimelineFilters(inSelectedFilters, inDefaultDateRangeInMonths, {
    onClose,
    onFilter,
    onResetFilters,
  });
  const { state } = flows;
  const localities = state.selectedFilters.Localities;
  return (
    <OSBlock name="LDM_Blocks.MyTimeline_Filters" id={id}>
      {state.isShowList ? (
        <PreventBackNavigation id={`${scope}-$b1`} onBackNavigationPrevented={flows.onToggleIsShowList} />
      ) : null}
      <div
        className="past-event-filter-cont"
        data-container=""
        style={state.isShowList ? { pointerEvents: 'none' } : undefined}
      >
        <div className="past-event-filter-exit" data-container="">
          <i className="icon padding-left-base fa fa-times fa-1x" data-icon="" onClick={flows.onClose} />
        </div>
        <div className="past-event-filter-title" data-container="">
          <span data-expression="">Date Range</span>
        </div>
        <div className="past-event-filter-date-cont" data-container="">
          <div className="past-event-filter-date" data-container="">
            <label className="font-size-0-8em OSFillParent" data-label="" htmlFor={`${scope}-Input_FromDate`}>
              From
            </label>
            <span className="input-date">
              <input
                aria-required="false"
                className="form-control past-event-date-input OSFillParent"
                data-input=""
                id={`${scope}-Input_FromDate`}
                max={dateInputValue(state.fromDate.MaxDate)}
                min={dateInputValue(state.fromDate.MinDate)}
                type="date"
                value={dateInputValue(state.fromDate.SelectedDate)}
                onChange={(e) => {
                  flows.onDateChange(true, e.currentTarget.value);
                }}
              />
            </span>
          </div>
          <div className="past-event-filter-date margin-left-base" data-container="">
            <label className="font-size-0-8em OSFillParent" data-label="" htmlFor={`${scope}-Input_ToDate`}>
              To
            </label>
            <span className="input-date">
              <input
                aria-required="false"
                className="form-control past-event-date-input OSFillParent"
                data-input=""
                id={`${scope}-Input_ToDate`}
                max={dateInputValue(state.toDate.MaxDate)}
                min={dateInputValue(state.toDate.MinDate)}
                type="date"
                value={dateInputValue(state.toDate.SelectedDate)}
                onChange={(e) => {
                  flows.onDateChange(false, e.currentTarget.value);
                }}
              />
            </span>
          </div>
        </div>
        <div className="past-event-filter-locality-cont" data-container="">
          <label className="OSFillParent" data-label="">
            Event Locality
          </label>
          <div className="past-event-filter-locality-input" data-container="" onClick={flows.onToggleIsShowList}>
            <OSList
              source={state.selectedLocalities}
              keyOf={(p) => p.IdAsText}
              className="list list-group"
              animateItems
            >
              {(p, row) => (
                <span className="past-event-filter-locality-input-text" data-expression="">
                  {selectedLocalityText(p.Name, row, state.selectedLocalities.length)}
                </span>
              )}
            </OSList>
            <i className="icon fa fa-angle-down fa-1x" data-icon="" />
          </div>
        </div>
        <div className="past-event-filter-button-cont OSInline" data-container="">
          <div
            className="past-event-filter-btn past-event-filter-btn-cancel OSInline"
            data-container=""
            onClick={flows.onClear}
          >
            <span className="bold" data-expression="">
              Clear
            </span>
          </div>
          <div
            className="past-event-filter-btn past-event-filter-btn-primary OSInline"
            data-container=""
            onClick={flows.onFilter}
          >
            <span data-expression="">Filter</span>
          </div>
        </div>
      </div>
      {state.isShowList ? (
        <div
          className="past-event-filter-list-cont OSInline"
          data-container=""
          style={{ top: `${String(state.listTopPosition)}px`, maxHeight: `${String(state.listHeight)}px` }}
        >
          <div className="past-event-filter-popup-title" data-container="">
            <span className="font-size-0-8em" data-expression="">
              Select Locality
            </span>
            <i className="icon fa fa-times fa-1x" data-icon="" onClick={flows.onToggleIsShowList} />
          </div>
          <OSList
            source={localities}
            keyOf={(p) => p.IdAsText}
            className="list list-group past-event-filter-list"
            animateItems
          >
            {(p, row) => (
              <div
                className="past-event-filter-list-item"
                data-container=""
                onClick={() => {
                  flows.onClickListItem(p, row);
                }}
              >
                {p.IsSelected ? (
                  <i className="icon text-primary-color fa fa-check-square fa-2x" data-icon="" />
                ) : (
                  <i className="icon font-size-2-1em text-neutral-7 fa fa-square-o fa-1x" data-icon="" />
                )}
                <span className="margin-left-base bold" data-expression="">
                  {p.Name}
                </span>
              </div>
            )}
          </OSList>
          <div
            className="past-event-filter-popup-buttons OSInline"
            data-container=""
            style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <div
              className="past-event-filter-btn past-event-filter-btn-primary OSInline"
              data-container=""
              onClick={flows.onSelectLocalities}
            >
              <span data-expression="">Select</span>
            </div>
          </div>
        </div>
      ) : null}
    </OSBlock>
  );
}
