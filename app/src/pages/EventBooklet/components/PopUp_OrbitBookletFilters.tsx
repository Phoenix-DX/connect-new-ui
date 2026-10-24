/** @origin Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters */
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { DaySelectorList } from '@/components/orbit/DaySelectorList';
import { FooterWithActions } from '@/pages/EventBooklet/components/FooterWithActions';
import { styleFromCssText } from '@/shared/lib/cssText';
import { DropdownTags } from '@/shared/osui/DropdownTags';
import { dropdownClear, dropdownClearValidation, dropdownTogglePopup } from '@/shared/osui/lib/actions';
import type { DropdownOption } from '@/shared/osui/lib/structures';
import { dropdownTags_CloseOtherOnClick } from '@/shared/UBTConnect_Utils/lib/actions';
import type { PopupFilters } from '@/pages/EventBooklet/types';

/* PopUp_OrbitBookletFilters (PF = analysis/sources/Connect2_OrbitMobile_MUI.Orbit_Blocks.PopUp_OrbitBookletFilters.mvc.js:
   model :1-89, view :90-685, controller :686-1507). No capture: markup from the compiled view. The OutSystems UI
   client actions DropdownClear / DropdownClearValidation / DropdownTogglePopup (shared/osui/lib/actions.ts) and
   UBTConnect_Utils DropdownTags_CloseOtherOnClick (shared/UBTConnect_Utils/lib/actions.ts) as compiled
   (CR-EventBooklet-2). */

export interface PopUp_OrbitBookletFiltersProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** CurrentFilters (PopupFiltersRec). */
  currentFilters: PopupFilters;
  /** AvailableFilters (PopupFiltersRec). */
  availableFilters: PopupFilters;
  /** Event ClosePopUp. */
  onClosePopUp: () => void;
  /** Event ApplyFilters(SelectedFilters). */
  onApplyFilters: (selectedFilters: PopupFilters) => void;
}

/** Block variables (PF model :1-89): the inputs (local copies the block changes on reset), DynamicFilters (what the
    controls show) and SelectedFilters (what Apply sends). */
interface Model {
  currentFilters: PopupFilters;
  availableFilters: PopupFilters;
  dynamicFilters: PopupFilters;
  selectedFilters: PopupFilters;
}

/** FilterLocalitiesFromCountry(SelectedOptionList) (PF :782-862): with selected countries, the available localities
    of each (GroupName = country Value), in that order; without, every available locality. */
const filterLocalitiesFromCountry = (
  available: PopupFilters,
  countries: readonly DropdownOption[],
): DropdownOption[] =>
  countries.length > 0
    ? countries.flatMap((c) => available.Localities.filter((l) => l.GroupName === c.Value))
    : available.Localities;

/** OnInitialize (PF :742-781): DynamicFilters = AvailableFilters with IsGuest / IsHelper of CurrentFilters, DateRange
    = CurrentFilters.DateRange (AvailableFilters.DateRange when empty), the localities of CurrentFilters.Countries;
    SelectedFilters = CurrentFilters. */
function onInitialize(currentFilters: PopupFilters, availableFilters: PopupFilters): Model {
  return {
    currentFilters,
    availableFilters,
    dynamicFilters: {
      ...availableFilters,
      IsGuest: currentFilters.IsGuest,
      IsHelper: currentFilters.IsHelper,
      DateRange: currentFilters.DateRange.length === 0 ? availableFilters.DateRange : currentFilters.DateRange,
      Localities: filterLocalitiesFromCountry(availableFilters, currentFilters.Countries),
    },
    selectedFilters: currentFilters,
  };
}

/** The booklet filters popup content (PF view :145-680): the "Filters" title with the close icon; Guests / Helpers
    checkboxes; "Day" with ListOfDaySelectors (weekday below, Sunday as "Lord's Day Meal"); "Roles", "Countries" and
    "Localities" DropdownTags (Roles disabled while Guests is checked); then, sticky to the bottom,
    Orbit_FooterWithActions with Reset and Apply. */
export function PopUp_OrbitBookletFilters({
  id,
  currentFilters,
  availableFilters,
  onClosePopUp,
  onApplyFilters,
}: PopUp_OrbitBookletFiltersProps) {
  const prefix = id.replace('$', '');
  const [state, setState] = useState<Model>(() => onInitialize(currentFilters, availableFilters));
  /* The OutSystems model: flows read and write the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setState(latest.current);
  };
  /** idService.getId("<DropdownTags name>"): the widget id of a dropdown of this block. */
  const widgetId = (name: string) => `${prefix}-${name}`;

  /* OnReady (PF :1224-1247): DropdownTags_CloseOtherOnClick. */
  useEffect(() => {
    dropdownTags_CloseOtherOnClick();
  }, []);

  /** OnInitialized_Dropdowns(DropdownWidgetId) (PF :863-901), the Initialized event of the three DropdownTags:
      DropdownTogglePopup(DropdownWidgetId, False), the dropbox opens below the field instead of as a popup. */
  const onInitializedDropdowns = (dropdownWidgetId: string) => {
    dropdownTogglePopup(dropdownWidgetId, false);
  };

  /** ResetCheckboxes (PF :1330-1400): IsGuest / IsHelper back to AvailableFilters, copied to SelectedFilters;
      DropdownClear of the roles; selected and current roles cleared. */
  const resetCheckboxes = () => {
    const s = m();
    const dynamicFilters = {
      ...s.dynamicFilters,
      IsGuest: s.availableFilters.IsGuest,
      IsHelper: s.availableFilters.IsHelper,
    };
    set({
      dynamicFilters,
      selectedFilters: {
        ...s.selectedFilters,
        IsGuest: dynamicFilters.IsGuest,
        IsHelper: dynamicFilters.IsHelper,
        HelperRoles: [],
      },
      currentFilters: { ...s.currentFilters, HelperRoles: [] },
    });
    dropdownClear(widgetId('DropdownTags_Roles'), true);
    dropdownClearValidation(widgetId('DropdownTags_Roles'));
  };

  /** OnChange_Checkboxes(IsGuestCheckbox, IsHelperCheckbox) (PF :1248-1329), after the checkbox wrote its variable.
      Guests: checked → ResetCheckboxes; unchecked → IsHelper = not IsGuest, both copied to SelectedFilters. Helpers:
      IsGuest = not IsHelper, both copied. */
  const onChangeCheckboxes = (isGuestCheckbox: boolean, isHelperCheckbox: boolean) => {
    const s = m();
    if (isGuestCheckbox) {
      if (s.dynamicFilters.IsGuest) {
        resetCheckboxes();
        return;
      }
      const dynamicFilters = { ...s.dynamicFilters, IsHelper: !s.dynamicFilters.IsGuest };
      set({
        dynamicFilters,
        selectedFilters: { ...s.selectedFilters, IsGuest: dynamicFilters.IsGuest, IsHelper: dynamicFilters.IsHelper },
      });
    } else if (isHelperCheckbox) {
      const dynamicFilters = { ...s.dynamicFilters, IsGuest: !s.dynamicFilters.IsHelper };
      set({
        dynamicFilters,
        selectedFilters: { ...s.selectedFilters, IsGuest: dynamicFilters.IsGuest, IsHelper: dynamicFilters.IsHelper },
      });
    }
  };

  /** OnHandle_ClickedDate(Event_Position) (PF :1087-1133): toggles the day at the position (not -1);
      SelectedFilters.DateRange = DynamicFilters.DateRange. */
  const onHandleClickedDate = (position: number) => {
    if (position === -1) return;
    const s = m();
    const dateRange = s.dynamicFilters.DateRange.map((d, i) =>
      i === position ? { ...d, IsSelected: !d.IsSelected } : d,
    );
    set({
      dynamicFilters: { ...s.dynamicFilters, DateRange: dateRange },
      selectedFilters: { ...s.selectedFilters, DateRange: dateRange },
    });
  };

  /** OnChange_DropdownSearch_Roles(DropdownWidgetId, SelectedOptionList) (PF :902-968): while Guests is checked,
      DropdownClear + DropdownClearValidation and the selected roles cleared; else SelectedFilters.HelperRoles. */
  const onChangeRoles = (dropdownWidgetId: string, list: DropdownOption[]) => {
    const s = m();
    if (s.dynamicFilters.IsGuest) {
      dropdownClear(dropdownWidgetId, true);
      dropdownClearValidation(dropdownWidgetId);
      set({ selectedFilters: { ...s.selectedFilters, HelperRoles: [] } });
    } else {
      set({ selectedFilters: { ...s.selectedFilters, HelperRoles: list } });
    }
  };

  /** OnChange_DropdownSearch_Countries(SelectedOptionList) (PF :969-1086): FilterLocalitiesFromCountry; selected
      countries; with countries, each selected locality of a selected country appends to Localities the current
      record of SelectedFilters.Countries (no iteration over it: its first record, as compiled), another locality
      sets UpdateLocalities; then with UpdateLocalities the selected localities are replaced by Localities. */
  const onChangeCountries = (list: DropdownOption[]) => {
    const s = m();
    const dynamicFilters = { ...s.dynamicFilters, Localities: filterLocalitiesFromCountry(s.availableFilters, list) };
    let selectedFilters = { ...s.selectedFilters, Countries: list };
    if (list.length > 0) {
      const localities: DropdownOption[] = [];
      let updateLocalities = false;
      for (const locality of selectedFilters.Localities) {
        const first = list[0];
        if (list.some((c) => c.Value === locality.GroupName)) {
          if (first) localities.push({ ...first });
        } else {
          updateLocalities = true;
        }
      }
      if (updateLocalities) selectedFilters = { ...selectedFilters, Localities: localities };
    }
    set({ dynamicFilters, selectedFilters });
  };

  /** OnChange_DropdownSearch_Localities(SelectedOptionList) (PF :704-741): SelectedFilters.Localities. */
  const onChangeLocalities = (list: DropdownOption[]) => {
    set({ selectedFilters: { ...m().selectedFilters, Localities: list } });
  };

  /** OnHandle_ResetFilters (PF :1134-1223): ResetCheckboxes; every day unselected (CurrentFilters.DateRange too);
      selected and current localities and countries cleared, DynamicFilters.Localities = AvailableFilters.Localities;
      DropdownClear of localities and countries. */
  const onHandleResetFilters = () => {
    resetCheckboxes();
    const s = m();
    const dateRange = s.dynamicFilters.DateRange.map((d) => ({ ...d, IsSelected: false }));
    set({
      dynamicFilters: { ...s.dynamicFilters, DateRange: dateRange, Localities: s.availableFilters.Localities },
      currentFilters: { ...s.currentFilters, DateRange: dateRange, Localities: [], Countries: [] },
      selectedFilters: { ...s.selectedFilters, DateRange: [], Localities: [], Countries: [] },
    });
    dropdownClear(widgetId('DropdownTags_Localities'), true);
    dropdownClearValidation(widgetId('DropdownTags_Localities'));
    dropdownClear(widgetId('DropdownTags_Countries'), true);
    dropdownClearValidation(widgetId('DropdownTags_Countries'));
  };

  const s = state;
  const searchConfig = { SearchPrompt: 'Select All or Search' };
  return (
    <OSBlock name="Orbit_Blocks.PopUp_OrbitBookletFilters" id={id}>
      <div className="full-width display-flex align-items-center justify-content-space-between bold" data-container="">
        Filters
        <i
          className="icon orbit-icon-cross fa fa-flag fa-1x"
          data-icon=""
          style={styleFromCssText('font-weight: bold;')}
          onClick={onClosePopUp}
        />
      </div>
      <div className="orbit-booklet-popup-filters-cont" data-container="">
        <div className="full-width" data-container="">
          <div className="display-flex align-items-center justify-content-space-between" data-container="">
            Guests
            <span>
              <input
                checked={s.dynamicFilters.IsGuest}
                className="checkbox ThemeGrid_MarginGutter"
                data-checkbox=""
                id={`${prefix}-Checkbox_Guest`}
                type="checkbox"
                onChange={(e) => {
                  set({ dynamicFilters: { ...m().dynamicFilters, IsGuest: e.target.checked } });
                  onChangeCheckboxes(true, false);
                }}
              />
            </span>
          </div>
          <div
            className="display-flex align-items-center justify-content-space-between margin-top-xs"
            data-container=""
          >
            Helpers
            <span>
              <input
                checked={s.dynamicFilters.IsHelper}
                className="checkbox ThemeGrid_MarginGutter"
                data-checkbox=""
                id={`${prefix}-Checkbox_Helpers`}
                type="checkbox"
                onChange={(e) => {
                  set({ dynamicFilters: { ...m().dynamicFilters, IsHelper: e.target.checked } });
                  onChangeCheckboxes(false, true);
                }}
              />
            </span>
          </div>
        </div>
        <div className="full-width margin-top-s" data-container="">
          <div className="margin-bottom-s" data-container="">
            Day
          </div>
          <DaySelectorList
            id={`${prefix}-$b1`}
            dateList={s.dynamicFilters.DateRange}
            addWeekdayBelow
            showInWeekday={false}
            replaceSunday
            onClickedDate={(_type, _date, position) => {
              onHandleClickedDate(position);
            }}
          />
        </div>
        <div className="full-width margin-top-base" data-container="">
          <div data-container="">
            <div className="margin-bottom-s" data-container="">
              Roles
            </div>
            <DropdownTags
              id={widgetId('DropdownTags_Roles')}
              optionsList={s.dynamicFilters.HelperRoles}
              startingSelection={s.currentFilters.HelperRoles}
              optionalConfigs={{ IsDisabled: s.dynamicFilters.IsGuest, ...searchConfig }}
              prompt="Select Roles"
              onInitialized={onInitializedDropdowns}
              onOnChanged={(dropdownWidgetId, list) => {
                onChangeRoles(dropdownWidgetId, list);
              }}
            />
          </div>
          <div className="margin-top-s" data-container="">
            <div className="margin-bottom-s" data-container="">
              Countries
            </div>
            <DropdownTags
              id={widgetId('DropdownTags_Countries')}
              optionsList={s.dynamicFilters.Countries}
              startingSelection={s.currentFilters.Countries}
              optionalConfigs={searchConfig}
              prompt="Select Countries"
              onInitialized={onInitializedDropdowns}
              onOnChanged={(_widgetId, list) => {
                onChangeCountries(list);
              }}
            />
          </div>
          <div className="margin-top-s" data-container="">
            <div className="margin-bottom-s" data-container="">
              Localities
            </div>
            <DropdownTags
              id={widgetId('DropdownTags_Localities')}
              optionsList={s.dynamicFilters.Localities}
              startingSelection={s.currentFilters.Localities}
              optionalConfigs={searchConfig}
              prompt="Select Localities"
              onInitialized={onInitializedDropdowns}
              onOnChanged={(_widgetId, list) => {
                onChangeLocalities(list);
              }}
            />
          </div>
        </div>
      </div>
      <div className="sticky-to-bottom" data-container="">
        <FooterWithActions
          id={`${prefix}-$b5`}
          inIsSmallButtons
          inHasSecondaryButton
          inHasTopShadow={false}
          placeholderSecondary={<span data-expression="">Reset</span>}
          placeholderPrimary={<span data-expression="">Apply</span>}
          onClickPrimaryButton={() => {
            onApplyFilters(m().selectedFilters);
          }}
          onClickSecondaryButton={onHandleResetFilters}
        />
      </div>
    </OSBlock>
  );
}
