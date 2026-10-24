import type { CountryWithMapPosition } from '@/api/country';
import { AssembleLocalityFilter } from '@/components/assemble/AssembleLocalityFilter';
import { LocalityListDetail } from '@/components/assemble/LocalityListDetail';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Spinner } from '@/components/ui/Spinner';
import { InputWithIcon } from '@/shared/osui/InputWithIcon';
import { Dialog_AccessRestrictedAction_Legacy } from '@/shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';

/** The view of the block Assemble_FilterSheet (the bottom-sheet twin of ScreenBlock_Assemble_Filter), props only: the
    header row (Link_Back while the localities show, ScreenTitle), the country search "Search Country" with
    LocalityListDetail or "No results found" once the countries are fetched (else the Spinner), or
    Assemble_FilterLocalityByCountry; the FreeSubscriptionAlert dialog; Cancel and Apply while a country is chosen.
    Its show and hide animation (DIV_StickyBottom) is not reproduced. The flows are in useAssembleFilterSheet.
    @origin Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet */

export interface Assemble_FilterSheetProps {
  /** Instance id (`Assemble_FilterSheet_Instance`). */
  id: string;
  /** Id prefix of its own elements (`b5`). */
  scope: string;
  /** ScreenTitle. */
  screenTitle: string;
  /** ShowLocalitiesList: Assemble_FilterLocalityByCountry shows instead of the countries. */
  showLocalitiesList: boolean;
  /** SearchTerm: the value of Input_SearchTerm. */
  searchTerm: string;
  /** IsCountriesDataFetched: false shows the Spinner. */
  isCountriesDataFetched: boolean;
  /** TempCountryDetailList: the countries that the list shows. */
  countries: CountryWithMapPosition[];
  /** CountryCode of the chosen country. */
  countryCode: string;
  /** CountryName of the chosen country. */
  countryName: string;
  /** DIV_StickyBottom shows (CountryCode <> ""). */
  isBottomBarVisible: boolean;
  /** ButtonApply is enabled (SubdivisionId <> NullIdentifier()). */
  isApplyEnabled: boolean;
  /** Input_SearchTerm changed, with the new value. */
  onSearchTermChange: (value: string) => void;
  /** A country row was clicked, with its Code. */
  onCountryClicked: (countryCode: string) => void;
  /** Link_Back. */
  onBackToCountries: () => void;
  /** SelectedSubdivision of the locality filter. */
  onSelectedSubdivision: (subdivisionId: string) => void;
  /** FreeSubscriptionAlert of the locality filter. */
  onFreeSubscriptionAlert: () => void;
  /** The Cancel button, and the Cancel event of the locality filter. */
  onCancel: () => void;
  /** ButtonApply. */
  onApply: () => void;
}

/** Grid width of ButtonApply. */
const APPLY_BUTTON_STYLE = { width: '100px' };

export function Assemble_FilterSheet({
  id,
  scope,
  screenTitle,
  showLocalitiesList,
  searchTerm,
  isCountriesDataFetched,
  countries,
  countryCode,
  countryName,
  isBottomBarVisible,
  isApplyEnabled,
  onSearchTermChange,
  onCountryClicked,
  onBackToCountries,
  onSelectedSubdivision,
  onFreeSubscriptionAlert,
  onCancel,
  onApply,
}: Assemble_FilterSheetProps) {
  return (
    <OSBlock name="Assemble.Assemble_FilterSheet" id={id}>
      <div className="padding-x-base padding-y-base" data-container="" id={`${scope}-DIV_Root`}>
        <div className="display-flex margin-bottom-s" data-container="" id={`${scope}-DIV_HeaderRow`}>
          {showLocalitiesList && (
            <a
              data-link=""
              href="#"
              id={`${scope}-Link_Back`}
              onClick={(e) => {
                e.preventDefault();
                onBackToCountries();
              }}
            >
              <i className="icon margin-right-xs fa fa-chevron-left fa-1x" data-icon="" />
            </a>
          )}
          <span className="font-bold ThemeGrid_MarginGutter" data-expression="" id={`${scope}-Expr_ScreenTitle`}>
            {screenTitle}
          </span>
        </div>
        {!showLocalitiesList ? (
          <>
            <div className="assemble-list-filter margin-y-base" data-container="" id={`${scope}-DIV_SearchByCountry`}>
              <InputWithIcon
                id={`${scope}-$b1`}
                icon={<i className="icon fa fa-search fa-1x" data-icon="" />}
                input={
                  <span className="input-search">
                    <input
                      aria-required="false"
                      className="form-control OSFillParent"
                      data-input=""
                      id={`${scope}-Input_SearchTerm`}
                      maxLength={50}
                      placeholder="Search Country"
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
            {isCountriesDataFetched ? (
              countries.length > 0 ? (
                <LocalityListDetail
                  id={`${scope}-$b2`}
                  hideHeader
                  countryDetailList={countries}
                  onOnClickGoToBrowseCountry={onCountryClicked}
                />
              ) : (
                <div className="margin-y-base" data-container="" id={`${scope}-DIV_NoResultsFound`}>
                  No results found
                </div>
              )
            ) : (
              <Spinner id={`${scope}-$b3`} showLoader={!isCountriesDataFetched} />
            )}
          </>
        ) : (
          <AssembleLocalityFilter
            id={`${scope}-$b4`}
            countryCode={countryCode}
            countryName={countryName}
            onSelectedSubdivision={onSelectedSubdivision}
            onFreeSubscriptionAlert={onFreeSubscriptionAlert}
            onCancel={onCancel}
          />
        )}
        <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b5`} />
        {isBottomBarVisible && (
          <div
            className="text-align-center assemble-filter-actions margin-top-base"
            data-container=""
            id={`${scope}-DIV_StickyBottom`}
          >
            <div className="OSInline" data-container="" id={`${scope}-DIV_Cancel`}>
              <button className="btn" data-button="" type="button" onClick={onCancel}>
                Cancel
              </button>
            </div>
            <div className="OSInline ThemeGrid_MarginGutter" data-container="" id={`${scope}-DIV_Apply`}>
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
        )}
      </div>
    </OSBlock>
  );
}
