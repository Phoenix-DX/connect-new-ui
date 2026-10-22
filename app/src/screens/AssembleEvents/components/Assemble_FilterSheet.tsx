// @os-block Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet
import { useEffect, useRef, useState } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Assemble_FilterLocalityByCountry } from '../../../shared/Connect2_Assemble_MUI/Assemble_FilterLocalityByCountry';
import { hasAccessToRegion } from '../../../shared/Connect2_Assemble_MUI/lib/actions';
import { LocalityListDetail } from '../../../shared/Connect2_LegacyShared/LocalityListDetail';
import { removeDiacritics } from '../../../shared/Connect2_LegacyShared/lib/actions';
import { Spinner } from '../../../shared/Connect2_LegacyShared/Spinner';
import { InputWithIcon } from '../../../shared/osui/InputWithIcon';
import { Dialog_AccessRestrictedAction_Legacy } from '../../../shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { getSubscribedCountries, getUserSubdivision } from '../api';
import type { CountryWithMapPosition } from '../types';

const BROWSE_BY_COUNTRY = 'Browse by Country';
const NULL_ID = '0';
/** Grid width of ButtonApply (F:440-445). */
const APPLY_BUTTON_STYLE = { width: '100px' };

const run = (p: Promise<unknown>) => {
  p.catch(raiseToFlowHandler);
};

export interface Assemble_FilterSheetProps {
  /** Instance id (`Assemble_FilterSheet_Instance`). */
  id: string;
  /** Id prefix of its own elements (`b5`). */
  scope: string;
  /** Event Cancel. */
  onCancel: () => void;
  /** Event NavigateToSubdivision(SubdivisionId, IsUserSubdivision). */
  onNavigateToSubdivision: (subdivisionId: string, isUserSubdivision: boolean) => void;
}

/** Assemble.Assemble_FilterSheet (p:…/Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet.mvc.js, cited as F:<line>;
    view :140-560, controller :560-1050; dom/default.html:518-1170), the bottom-sheet twin of ScreenBlock_Assemble_Filter:
    header row (Link_Back while ShowLocalitiesList, ScreenTitle), the country search "Search Country" with
    LocalityListDetail or "No results found" once IsCountriesDataFetched (else the Spinner), or
    Assemble_FilterLocalityByCountry; FreeSubscriptionAlert; Cancel / Apply while a country is chosen. OnReady (F:609-649,
    no view-cache check): GetCacheableUserInfo, FetchCountries. Its show/hide animation (DIV_StickyBottom) is not
    reproduced. */
export function Assemble_FilterSheet({ id, scope, onCancel, onNavigateToSubdivision }: Assemble_FilterSheetProps) {
  const [screenTitle, setScreenTitle] = useState(BROWSE_BY_COUNTRY);
  const [countryDetailList, setCountryDetailList] = useState<CountryWithMapPosition[]>([]);
  const [tempCountryDetailList, setTempCountryDetailList] = useState<CountryWithMapPosition[]>([]);
  const [showLocalitiesList, setShowLocalitiesList] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [countryName, setCountryName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCountriesDataFetched, setIsCountriesDataFetched] = useState(false);
  const [userSubdivisionId, setUserSubdivisionId] = useState(NULL_ID);
  const [subdivisionId, setSubdivisionId] = useState(NULL_ID);

  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    run(
      (async () => {
        setUserSubdivisionId((await getUserSubdivision()).Id);
        // FetchCountries (F:794-848).
        setIsCountriesDataFetched(false);
        const countries = await getSubscribedCountries();
        setCountryDetailList(countries);
        setTempCountryDetailList(countries);
        setIsCountriesDataFetched(true);
      })(),
    );
  }, []);

  /** OnChange_SearchTearm (F:650-722), as ScreenBlock_Assemble_Filter. */
  const onChangeSearchTerm = async (value: string) => {
    if (value === '') {
      const countries = await getSubscribedCountries();
      setCountryDetailList(countries);
      setTempCountryDetailList(countries);
    } else {
      const term = removeDiacritics(value.trim().toLowerCase()).toLowerCase();
      setTempCountryDetailList(countryDetailList.filter((p) => (p.Name ?? '').toLowerCase().includes(term)));
    }
  };

  /** Handler_GoToBrowseCountry(InCountryCode) (F:849-937). */
  const onGoToBrowseCountry = async (inCountryCode: string) => {
    if (inCountryCode === '') return;
    if (!(await hasAccessToRegion(inCountryCode, '0'))) {
      await confirmAction(`${scope}-FreeSubscriptionAlert`);
      return;
    }
    setCountryCode(inCountryCode);
    setCountryName(tempCountryDetailList.filter((p) => p.Code === inCountryCode)[0]?.Name ?? '');
    setScreenTitle('Filter by Locality');
    setShowLocalitiesList(true);
  };

  /** Handler_GoBackToCountries (F:723-756). */
  const goBackToCountries = () => {
    setShowLocalitiesList(false);
    setScreenTitle(BROWSE_BY_COUNTRY);
    setSubdivisionId(NULL_ID);
    setCountryCode('');
  };

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
                goBackToCountries();
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
                        const value = e.currentTarget.value;
                        setSearchTerm(value);
                        run(onChangeSearchTerm(value));
                      }}
                    />
                  </span>
                }
              />
            </div>
            {isCountriesDataFetched ? (
              tempCountryDetailList.length > 0 ? (
                <LocalityListDetail
                  id={`${scope}-$b2`}
                  hideHeader
                  countryDetailList={tempCountryDetailList}
                  onOnClickGoToBrowseCountry={(code) => {
                    run(onGoToBrowseCountry(code));
                  }}
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
          <Assemble_FilterLocalityByCountry
            id={`${scope}-$b4`}
            countryCode={countryCode}
            countryName={countryName}
            onSelectedSubdivision={(selected) => {
              // Handler_SelectedSubdivision (F:757-793).
              setSubdivisionId(selected);
            }}
            onFreeSubscriptionAlert={() => {
              run(showUpgradePopUp());
            }}
            onCancel={onCancel}
          />
        )}
        <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b5`} />
        {countryCode !== '' && (
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
                disabled={subdivisionId === NULL_ID}
                id={`${scope}-ButtonApply`}
                style={APPLY_BUTTON_STYLE}
                type="button"
                onClick={() => {
                  // OnClickApply (F:568-608).
                  onNavigateToSubdivision(subdivisionId, subdivisionId === userSubdivisionId);
                }}
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
