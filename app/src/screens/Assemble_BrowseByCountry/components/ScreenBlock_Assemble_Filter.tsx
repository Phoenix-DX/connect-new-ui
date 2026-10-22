// @os-block Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter
import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Assemble_FilterLocalityByCountry } from '../../../shared/Connect2_Assemble_MUI/Assemble_FilterLocalityByCountry';
import { hasAccessToRegion } from '../../../shared/Connect2_Assemble_MUI/lib/actions';
import { Layout } from '../../../shared/Connect2_LegacyShared/Layout';
import { LocalityListDetail } from '../../../shared/Connect2_LegacyShared/LocalityListDetail';
import { removeDiacritics } from '../../../shared/Connect2_LegacyShared/lib/actions';
import { MenuAction } from '../../../shared/Connect2_LegacyShared/lib/staticEntities';
import { MenuIcon__UpdatedOSUI } from '../../../shared/Connect2_LegacyShared/MenuIcon__UpdatedOSUI';
import { Spinner } from '../../../shared/Connect2_LegacyShared/Spinner';
import { BackNavigationHandler } from '../../../shared/NavigationHandler/BackNavigationHandler';
import { InputWithIcon } from '../../../shared/osui/InputWithIcon';
import { Dialog_AccessRestrictedAction_Legacy } from '../../../shared/UBTConnect_Utils/Dialog_AccessRestrictedAction_Legacy';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useViewState, useWasRestoredFromCache, type BackNavigationEvent } from '@/platform/navigation';
import { getSubscribedCountries, getUserSubdivisionId } from '../api';
import type { CountryWithMapPosition } from '../types';

export interface ScreenBlock_Assemble_FilterProps {
  /** OutSystems instance id of the block (`$b2`). */
  id: string;
  /** Event Cancel (the bottom Cancel button). */
  onCancel: () => void;
  /** Event NavigateToSubdivision(SubdivisionId, IsUserSubdivision). */
  onNavigateToSubdivision: (subdivisionId: string, isUserSubdivision: boolean) => void;
}

const BROWSE_BY_COUNTRY = 'Browse by Country';
/** NullIdentifier() as a Long Integer. */
const NULL_ID = '0';
/** Extended property style of Input_SearchTearm (F:290-300; dom/default.html:152). */
const SEARCH_INPUT_STYLE = { borderWidth: '0px 0px 1px' };
/** Grid width of ButtonApply (F:570-575). */
const APPLY_BUTTON_STYLE = { width: '100px' };

const run = (p: Promise<unknown>) => {
  p.catch(raiseToFlowHandler);
};

/** Assemble.ScreenBlock_Assemble_Filter (p:migration/screens/Assemble_BrowseByCountry/analysis/sources/pretty/
    Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter.mvc.js, cited as F:<line>; view :143-610, controller
    :611-1170). Layout with the back arrow and ScreenTitle. Content: the country list (search "Search Country" and
    LocalityListDetail, or "No results found") once IsCountriesDataFetched, else the Spinner; after a country click
    Assemble_FilterLocalityByCountry instead (ShowLocalitiesList); then FreeSubscriptionAlert and BackNavigationHandler.
    BottomBar: Cancel / Apply while a country is chosen (CountryCode <> ""). OnReady (F:879-946): nothing when the view
    was restored from cache (its variables come back with it, P-BACK), else GetCacheableUserInfo and FetchCountries. */
export function ScreenBlock_Assemble_Filter({
  id,
  onCancel,
  onNavigateToSubdivision,
}: ScreenBlock_Assemble_FilterProps) {
  const scope = id.replace('$', '');
  const fromCache = useWasRestoredFromCache();
  const [screenTitle, setScreenTitle] = useViewState('ScreenTitle', BROWSE_BY_COUNTRY);
  const [countryDetailList, setCountryDetailList] = useViewState<CountryWithMapPosition[]>('CountryDetailList', []);
  const [tempCountryDetailList, setTempCountryDetailList] = useViewState<CountryWithMapPosition[]>(
    'TempCountryDetailList',
    [],
  );
  const [showLocalitiesList, setShowLocalitiesList] = useViewState('ShowLocalitiesList', false);
  const [countryCode, setCountryCode] = useViewState('CountryCode', '');
  const [countryName, setCountryName] = useViewState('CountryName', '');
  const [searchTerm, setSearchTerm] = useViewState('SearchTerm', '');
  const [isCountriesDataFetched, setIsCountriesDataFetched] = useViewState('IsCountriesDataFetched', false);
  const [userSubdivisionId, setUserSubdivisionId] = useViewState('UserInformation.Subdivision.Id', NULL_ID);
  const [subdivisionId, setSubdivisionId] = useViewState('SubdivisionId', NULL_ID);

  /** FetchCountries (F:1025-1100). */
  const fetchCountries = async () => {
    setIsCountriesDataFetched(false);
    const countries = await getSubscribedCountries();
    setCountryDetailList(countries);
    setTempCountryDetailList(countries);
    setIsCountriesDataFetched(true);
  };

  const ready = useRef(false);
  useEffect(() => {
    if (ready.current) return;
    ready.current = true;
    if (fromCache) return;
    run(
      (async () => {
        setUserSubdivisionId(await getUserSubdivisionId());
        await fetchCountries();
      })(),
    );
    // OnReady runs once (F:1140-1147).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** OnChange_SearchTearm (F:630-703): an empty term reloads the subscribed countries (cached); otherwise ListFilter
      on Index(Name, RemoveDiacritics(ToLower(Trim(SearchTerm))), 0, False, IgnoreCase True) <> -1. */
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

  /** Handler_GoToBrowseCountry(InCountryCode) (F:790-878): HasAccessToRegion(InCountryCode, 0); no access → ConfirmAction
      FreeSubscriptionAlert; else CountryCode, CountryName (the first row of TempCountryDetailList with that Code),
      ScreenTitle "Filter by Locality", ShowLocalitiesList. */
  const onGoToBrowseCountry = async (inCountryCode: string) => {
    if (inCountryCode === '') return;
    const hasAccess = await hasAccessToRegion(inCountryCode, '0');
    if (!hasAccess) {
      await confirmAction(`${scope}-FreeSubscriptionAlert`);
      return;
    }
    const filtered = tempCountryDetailList.filter((p) => p.Code === inCountryCode);
    setCountryCode(inCountryCode);
    setCountryName(filtered[0]?.Name ?? '');
    setScreenTitle('Filter by Locality');
    setShowLocalitiesList(true);
  };

  /** Handler_BackNavigation(BackNavigationEvent) (F:704-759, ScrollTop JS F:1172-1183): while the localities show,
      back returns to the country list (ScreenTitle, SubdivisionId and CountryCode reset), PreventNavigation, and the
      content scrolls to the top; otherwise the back navigation goes on. */
  const onBackNavigation = (event: BackNavigationEvent) => {
    if (!showLocalitiesList) return;
    setShowLocalitiesList(false);
    setScreenTitle(BROWSE_BY_COUNTRY);
    setSubdivisionId(NULL_ID);
    setCountryCode('');
    event.preventDefault();
    window.requestAnimationFrame(() => {
      const contentEl = document.querySelector('.content');
      if (contentEl) contentEl.scrollTop = 0;
    });
  };

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
                  const value = e.currentTarget.value;
                  setSearchTerm(value);
                  run(onChangeSearchTerm(value));
                }}
              />
            </span>
          }
        />
      </div>
      {tempCountryDetailList.length > 0 ? (
        <LocalityListDetail
          id={`${scope}-$b4`}
          hideHeader
          countryDetailList={tempCountryDetailList}
          onOnClickGoToBrowseCountry={(code) => {
            run(onGoToBrowseCountry(code));
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
        <Assemble_FilterLocalityByCountry
          id={`${scope}-$b6`}
          countryName={countryName}
          countryCode={countryCode}
          onFreeSubscriptionAlert={() => {
            // Handler_FreeSubscriptionAlert (F:760-789): App_Subscription_ShowUpgradePopUp.
            run(showUpgradePopUp());
          }}
          onCancel={onCancel}
          onSelectedSubdivision={(selectedSubdivisionId) => {
            // Assemble_FilterLocalityByCountrySelectedSubdivisio (F:947-983).
            setSubdivisionId(selectedSubdivisionId);
          }}
        />
      )}
      <Dialog_AccessRestrictedAction_Legacy id={`${scope}-FreeSubscriptionAlert`} scope={`${scope}-b7`} />
      <BackNavigationHandler id={`${scope}-$b8`} onBackNavigation={onBackNavigation} />
    </>
  );

  /* DIV_StickyBottom (F:372-463): visible while CountryCode <> "" (its show/hide animation is not reproduced). */
  const bottomBar =
    countryCode !== '' ? (
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
            disabled={subdivisionId === NULL_ID}
            id={`${scope}-ButtonApply`}
            style={APPLY_BUTTON_STYLE}
            type="button"
            onClick={() => {
              // OnClickApply(SubdivisionId) (F:984-1024): NavigateToSubdivision(Id, Id = UserInformation.Subdivision.Id).
              onNavigateToSubdivision(subdivisionId, subdivisionId === userSubdivisionId);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    ) : null;

  return (
    <OSBlock name="Assemble.ScreenBlock_Assemble_Filter" id={id}>
      <Layout
        id={`${scope}-$b1`}
        menu={<div id={`${scope}-Menu`} />}
        headerLeft={<MenuIcon__UpdatedOSUI id={`${scope}-$b2`} menuAction={MenuAction.Back} />}
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
