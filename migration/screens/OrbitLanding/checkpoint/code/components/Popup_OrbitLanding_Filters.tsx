// @os-block Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters
import { useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { OSList } from '../../../components/OSList';
import { RadioButton, RadioGroup } from '../../../components/OSRadioGroup';
import { styleFromCssText } from '../../../shared/lib/cssText';
import type { YearItem } from '../types';
import { OrbitLandingFilter } from './staticEntities';

export interface Popup_OrbitLanding_FiltersProps {
  /** OutSystems instance id of the block (`b1-$b8`). */
  id: string;
  /** In_OrbitLandingFilter (OrbitLandingFilter identifier). */
  inOrbitLandingFilter: number;
  /** In_Years. */
  inYears: readonly YearItem[];
  /** PopupMeasurements.Top + PopupMeasurements.Bottom (the max-height of the options). */
  popupTopPlusBottom: number;
  /** Event ApplyFilters(SelectedFilter, SelectedYears). */
  onApplyFilters: (selectedFilter: number, selectedYears: YearItem[]) => void;
  /** Event ClosePopup. */
  onClosePopup: () => void;
}

const selectedClass = (on: boolean) => (on ? 'color-orbit-primary-7 bold' : '');

/** Filters popup of the Orbit landing (Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Filters.mvc.js from
    capture/survey-UBTConnect.json `sources`; captured dom/popup-filters.raw.html). On its own copies of the inputs:
    close icon (ClosePopup); options `max-height: calc(100vh - <Bottom + Top>px)`; RadioGroup_Filters Upcoming / Past
    (OnChange_RadioGroup_Filter: Upcoming → OnClick_ClearYearFilters); with Past and years: "Clear all" (bold while
    AnySelected), "Filter By" and one row per year with Checkbox_Year (OnChange_Checkbox_Year → AnySelected); Apply →
    ApplyFilters(In_OrbitLandingFilter, In_Years). OnReady runs OnChange_Checkbox_Year. The Past / years part is not
    in a capture (built from the compiled view). */
export function Popup_OrbitLanding_Filters({
  id,
  inOrbitLandingFilter,
  inYears,
  popupTopPlusBottom,
  onApplyFilters,
  onClosePopup,
}: Popup_OrbitLanding_FiltersProps) {
  const prefix = id.replace('$', '');
  const [filter, setFilter] = useState(inOrbitLandingFilter);
  const [years, setYears] = useState<YearItem[]>(() => [...inYears]);

  /** AnySelected, as OnChange_Checkbox_Year sets it (on every checkbox change and in OnReady): some year selected. */
  const anySelected = years.some((y) => y.isSelected);
  /** OnClick_ClearYearFilters: every year unselected. */
  const clearYearFilters = () => {
    setYears((list) => list.map((y) => ({ ...y, isSelected: false })));
  };

  const showYears = filter === OrbitLandingFilter.PastEvents && years.length > 0;
  return (
    <OSBlock name="Orbit_Blocks.Popup_OrbitLanding_Filters" id={id}>
      <div className="orbit-filters-popup-exit padding-bottom-s" data-container="">
        <i className="icon padding-s fa fa-times fa-1x" data-icon="" onClick={onClosePopup} />
      </div>
      <div
        className="orbit-filters-popup-cont"
        data-container=""
        style={styleFromCssText(`max-height: calc(100vh - ${String(popupTopPlusBottom)}px);`)}
      >
        <div className="orbit-filters-popup-sub-cont" data-container="">
          <RadioGroup
            id={`${prefix}-RadioGroup_Filters`}
            style="radio-group"
            value={filter}
            onValueChange={(value) => {
              setFilter(value);
              // OnChange_RadioGroup_Filter: Upcoming → OnClick_ClearYearFilters
              if (value === OrbitLandingFilter.UpcomingEvents) clearYearFilters();
            }}
          >
            <RadioButton
              id={`${prefix}-RadioButton_Upcoming`}
              style="radio-button"
              value={OrbitLandingFilter.UpcomingEvents}
            >
              <span className={selectedClass(filter === OrbitLandingFilter.UpcomingEvents)}>Upcoming Events</span>
            </RadioButton>
            <RadioButton id={`${prefix}-RadioButton_Past`} style="radio-button" value={OrbitLandingFilter.PastEvents}>
              <span className={selectedClass(filter === OrbitLandingFilter.PastEvents)}>Past Events</span>
            </RadioButton>
          </RadioGroup>
          {showYears && (
            <>
              <div
                className="orbit-filters-popup-clear"
                data-container=""
                style={styleFromCssText(
                  `cursor: pointer;${anySelected ? ' color: var(--color-neutral-10); font-weight: bold;' : ''}`,
                )}
                onClick={clearYearFilters}
              >
                Clear all
              </div>
              <div className="margin-bottom-base font-size-s bold text-neutral-10" data-container="">
                Filter By
              </div>
              <div className="orbit-filters-popup-list" data-container="">
                <OSList className="list list-group" animateItems positionRelative source={years} keyOf={(y) => y.year}>
                  {(y, i) => (
                    <div
                      className="orbit-filters-popup-option"
                      data-container=""
                      style={styleFromCssText('border-bottom: none;')}
                    >
                      <span className={selectedClass(y.isSelected)} data-expression="">
                        {y.year}
                      </span>
                      <span>
                        <input
                          checked={y.isSelected}
                          className="checkbox"
                          data-checkbox=""
                          type="checkbox"
                          onChange={(e) => {
                            const checked = e.target.checked;
                            setYears((list) => list.map((row, r) => (r === i ? { ...row, isSelected: checked } : row)));
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        />
                      </span>
                    </div>
                  )}
                </OSList>
              </div>
            </>
          )}
        </div>
        <div className="orbit-filters-popup-button" data-container="">
          <button
            className="btn btn-primary"
            data-button=""
            type="button"
            onClick={() => {
              onApplyFilters(filter, years);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </OSBlock>
  );
}
