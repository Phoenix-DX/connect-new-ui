import type { ReactNode } from 'react';
import type { CountryWithMapPosition } from '@/api/country';
import { AssembleLocalityFilter } from '@/components/assemble/AssembleLocalityFilter';
import { LocalityListDetail } from '@/components/assemble/LocalityListDetail';
import { LegacyLayout } from '@/components/layout/LegacyLayout';
import { MenuIcon } from '@/components/layout/MenuIcon';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { assembleFilterIds } from '@/pages/Assemble_BrowseByCountry/hooks/assembleFilterState';
import { MenuAction } from '@/shared/Connect2_LegacyShared/lib/staticEntities';
import { Spinner } from '@/components/ui/Spinner';
import { InputWithIcon } from '@/shared/osui/InputWithIcon';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';

/** The view of the Assemble filter, props only. The legacy layout has the back arrow and ScreenTitle. The content is
    the country list (the search "Search Country" and LocalityListDetail, or "No results found") once the countries
    are fetched, else the Spinner. After a country click, Assemble_FilterLocalityByCountry shows instead. Then the
    FreeSubscriptionAlert dialog and the BackNavigationHandler slot. The bottom bar has Cancel and Apply while a
    country is chosen. The flows are in useAssembleFilter.
    @origin Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter */

export interface AssembleFilterViewProps {
  /** OutSystems instance id of the block (`$b2`). */
  id: string;
  /** ScreenTitle. */
  screenTitle: string;
  /** IsCountriesDataFetched: false shows the Spinner. */
  isCountriesDataFetched: boolean;
  /** SearchTerm: the value of Input_SearchTearm. */
  searchTerm: string;
  /** TempCountryDetailList: the countries that the list shows. */
  countries: CountryWithMapPosition[];
  /** ShowLocalitiesList: the localities of the chosen country show instead of the country list. */
  showLocalitiesList: boolean;
  /** CountryCode of the chosen country. */
  countryCode: string;
  /** CountryName of the chosen country. */
  countryName: string;
  /** DIV_StickyBottom shows (CountryCode <> ""). */
  isBottomBarVisible: boolean;
  /** ButtonApply is enabled (SubdivisionId <> NullIdentifier()). */
  isApplyEnabled: boolean;
  /** Input_SearchTearm changed, with the new value. */
  onSearchTermChange: (value: string) => void;
  /** A country row was clicked, with its Code. */
  onCountryClicked: (countryCode: string) => void;
  /** FreeSubscriptionAlert of the locality filter. */
  onFreeSubscriptionAlert: () => void;
  /** SelectedSubdivision of the locality filter. */
  onSelectedSubdivision: (subdivisionId: string) => void;
  /** The Cancel button, and the Cancel event of the locality filter. */
  onCancel: () => void;
  /** ButtonApply. */
  onApply: () => void;
  /** The BackNavigationHandler of the block (instance `$b8`). */
  backNavigationHandler?: ReactNode;
}

/** Extended property style of Input_SearchTearm (captured dom/default.html). */
const SEARCH_INPUT_STYLE = { borderWidth: '0px 0px 1px' };
/** Grid width of ButtonApply. */
const APPLY_BUTTON_STYLE = { width: '100px' };

export function AssembleFilterView({
  id,
  screenTitle,
  isCountriesDataFetched,
  searchTerm,
  countries,
  showLocalitiesList,
  countryCode,
  countryName,
  isBottomBarVisible,
  isApplyEnabled,
  onSearchTermChange,
  onCountryClicked,
  onFreeSubscriptionAlert,
  onSelectedSubdivision,
  onCancel,
  onApply,
  backNavigationHandler,
}: AssembleFilterViewProps) {
  const { scope, freeSubscriptionAlert } = assembleFilterIds(id);

  const countryList = isCountriesDataFetched ? (
    <>
      <div
        className="assemble-list-filter margin-y-base margin-x-base"
        data-container=""
        id={`${scope}-DIV_SearchByCountry`}
      >
        <InputWithIcon
          id={`${scope}-$b3`}
          icon={<i className="icon fa fa-search fa-1x" data-icon="" />}
          input={
            <span className="input-search">
              <input
                aria-required="false"
                className="form-control OSFillParent"
                data-input=""
                id={`${scope}-Input_SearchTearm`}
                maxLength={50}
                placeholder="Search Country"
                style={SEARCH_INPUT_STYLE}
                type="search"
                value={searchTerm}
                onChange={(e) => {
                  onSearchTermChange(e.currentTarget.value);
                }}
              />
            </span>
          }
        />
      </div>
      {countries.length > 0 ? (
        <LocalityListDetail
          id={`${scope}-$b4`}
          hideHeader
          countryDetailList={countries}
          onOnClickGoToBrowseCountry={(code) => {
            onCountryClicked(code);
          }}
        />
      ) : (
        <div className="margin-x-base" data-container="" id={`${scope}-DIV_NoResultsFound`}>
          No results found
        </div>
      )}
    </>
  ) : (
    <Spinner id={`${scope}-$b5`} showLoader={!isCountriesDataFetched} />
  );

  const content = (
    <>
      {!showLocalitiesList ? (
        countryList
      ) : (
        <AssembleLocalityFilter
          id={`${scope}-$b6`}
          countryName={countryName}
          countryCode={countryCode}
          onFreeSubscriptionAlert={onFreeSubscriptionAlert}
          onCancel={onCancel}
          onSelectedSubdivision={onSelectedSubdivision}
        />
      )}
      <Dialog_AccessRestrictedAction_Legacy id={freeSubscriptionAlert} scope={`${scope}-b7`} />
      {backNavigationHandler}
    </>
  );

  /* DIV_StickyBottom: its show/hide animation is not reproduced. */
  const bottomBar = isBottomBarVisible ? (
    <div className="text-align-center assemble-filter-actions" data-container="" id={`${scope}-DIV_StickyBottom`}>
      <div className="OSInline" data-container="" id={`${scope}-DIV_Cancel`}>
        <button className="btn" data-button="" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
      <div className="OSInline" data-container="" id={`${scope}-DIV_Apply`}>
        <button
          className="btn btn-primary"
          data-button=""
          disabled={!isApplyEnabled}
          id={`${scope}-ButtonApply`}
          style={APPLY_BUTTON_STYLE}
          type="button"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </div>
  ) : null;

  return (
    <OSBlock name="Assemble.ScreenBlock_Assemble_Filter" id={id}>
      <LegacyLayout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
        title={
          <div className="text-ellipsis" data-container="" id={`${scope}-DIV_ScreenTitle`}>
            <span data-expression="" id={`${scope}-ScreenTitle2`}>
              {screenTitle}
            </span>
          </div>
        }
        content={content}
        bottomBar={bottomBar}
        commonUIElements={<div id={`${scope}-CommonUI_Elements`} />}
      />
    </OSBlock>
  );
}
