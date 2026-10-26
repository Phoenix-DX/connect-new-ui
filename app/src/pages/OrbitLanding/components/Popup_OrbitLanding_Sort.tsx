/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Sort */
import { useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { RadioButton, RadioGroup } from '@/components/ui/os/OSRadioGroup';

export interface Popup_OrbitLanding_SortProps {
  /** OutSystems instance id of the block (`b1-$b9`). */
  id: string;
  /** In_IsSortASC. */
  inIsSortASC: boolean;
  /** Event ApplySort(IsSortASC). */
  onApplySort: (isSortASC: boolean) => void;
  /** Event ClosePopup. */
  onClosePopup: () => void;
}

/** Boolean RadioButton values as text (the radio group variable is a Boolean; OSRadioGroup takes text or numbers). */
const NEWEST = 'False';
const OLDEST = 'True';

/** Sort popup of the Orbit landing (Connect2_OrbitMobile_MUI.Orbit_Blocks.Popup_OrbitLanding_Sort.mvc.js from
    capture/survey-UBTConnect.json `sources`; captured dom/popup-sort.raw.html): close icon (ClosePopup), RadioGroup_SortBy
    on its own copy of In_IsSortASC (Newest False, Oldest True; the selected label "color-orbit-primary-7 bold"), Apply
    → ApplySort(In_IsSortASC). No lifecycle events. */
export function Popup_OrbitLanding_Sort({ id, inIsSortASC, onApplySort, onClosePopup }: Popup_OrbitLanding_SortProps) {
  const prefix = id.replace('$', '');
  const [isSortASC, setIsSortASC] = useState(inIsSortASC);
  const selected = (on: boolean) => (on ? 'color-orbit-primary-7 bold' : '');
  return (
    <OSBlock name="Orbit_Blocks.Popup_OrbitLanding_Sort" id={id}>
      <div className="orbit-filters-popup-exit margin-bottom-s" data-container="">
        <i className="icon padding-s fa fa-times fa-1x" data-icon="" onClick={onClosePopup} />
      </div>
      <div className="orbit-filters-popup-cont" data-container="">
        <div className="orbit-filters-popup-sub-cont" data-container="">
          <RadioGroup
            id={`${prefix}-RadioGroup_SortBy`}
            style="radio-group"
            value={isSortASC ? OLDEST : NEWEST}
            onValueChange={(value) => {
              setIsSortASC(value === OLDEST);
            }}
          >
            <RadioButton id={`${prefix}-RadioButton_Newest`} style="radio-button" value={NEWEST}>
              <span className={selected(!isSortASC)}>Newest</span>
            </RadioButton>
            <RadioButton id={`${prefix}-RadioButton_Oldest`} style="radio-button" value={OLDEST}>
              <span className={selected(isSortASC)}>Oldest</span>
            </RadioButton>
          </RadioGroup>
        </div>
        <div className="orbit-filters-popup-button" data-container="">
          <button
            className="btn btn-primary"
            data-button=""
            type="button"
            onClick={() => {
              onApplySort(isSortASC);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </OSBlock>
  );
}
