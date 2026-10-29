import type { CountryWithMapPosition } from '@/api/country';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { useFlowState, type BackNavigationEvent } from '@/platform/navigation';
import { getUserInformation } from '@/platform/session/userInfo';
import { hasAccessToRegion } from '@/lib/assemble/actions';
import { getCacheableRegionSubscribedCountries, getCacheableUserInfo } from '@/lib/legacyShared/actions';
import {
  assembleFilterIds,
  assembleFilterReducer,
  BACK_TO_COUNTRY_LIST,
  countryChosen,
  filterCountriesByName,
  INITIAL_ASSEMBLE_FILTER_STATE,
  isUserSubdivision,
  NULL_ID,
  type AssembleFilterState,
} from './assembleFilterState';

/** The flows of the block ScreenBlock_Assemble_Filter: OnReady (GetCacheableUserInfo, then FetchCountries), the
    search, the country click, the locality filter events, the bottom bar and the back navigation. The page calls this
    hook and passes the result to AssembleFilterView.
    @origin Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter */

/** The events of the block. */
export interface AssembleFilterEvents {
  /** Event Cancel: the Cancel button of the bottom bar. */
  onCancel: () => void;
  /** Event NavigateToSubdivision(SubdivisionId, IsUserSubdivision): the Apply button. */
  onNavigateToSubdivision: (subdivisionId: string, isUserSubdivision: boolean) => void;
}

/** What the page gives the view, and the BackNavigationHandler event. */
export interface AssembleFilterFlows {
  /** The block variables (rendered). */
  state: AssembleFilterState;
  /** Input_SearchTearm changed: SearchTerm, then OnChange_SearchTearm. */
  onSearchTermChange: (value: string) => void;
  /** OnClick_GoToBrowseCountry of LocalityListDetail: Handler_GoToBrowseCountry(Code). */
  onCountryClicked: (countryCode: string) => void;
  /** FreeSubscriptionAlert of Assemble_FilterLocalityByCountry: Handler_FreeSubscriptionAlert. */
  onFreeSubscriptionAlert: () => void;
  /** SelectedSubdivision of Assemble_FilterLocalityByCountry: SubdivisionId. */
  onSelectedSubdivision: (subdivisionId: string) => void;
  /** The Cancel button (and the Cancel event of the locality filter): the event Cancel. */
  onCancel: () => void;
  /** ButtonApply: OnClickApply. */
  onApply: () => void;
  /** Handler_BackNavigation of BackNavigationHandler. */
  onBackNavigation: (event: BackNavigationEvent) => void;
}

/** The name under which the view cache keeps the block variables. */
const VIEW_NAME = 'Connect2_Assemble_MUI.Assemble.ScreenBlock_Assemble_Filter';

/** GetCacheableUserInfo → UserInformation. The block reads only Subdivision.Id (in OnClickApply). */
async function fetchUserSubdivisionId(): Promise<string> {
  const userInformation = await getCacheableUserInfo();
  return userInformation.Subdivision.Id;
}

/** Cache_UserInfo_Get (the user-info cache of the shell), then GetCacheableRegionSubscribedCountries with the
    SubscriptionRegionId of the user's subscription. An empty SubscriptionRegionId raises ObjectNotFound. */
async function fetchSubscribedCountries(): Promise<CountryWithMapPosition[]> {
  const userInformation = await getUserInformation();
  return getCacheableRegionSubscribedCountries(
    userInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionRegionId,
  );
}

/** ScrollTop JS of Handler_BackNavigation: the content scrolls to the top on the next frame. */
const scrollContentToTop = () => {
  window.requestAnimationFrame(() => {
    const contentEl = document.querySelector('.content');
    if (contentEl) contentEl.scrollTop = 0;
  });
};

/** The state and the flows of the block. `blockId` is the block instance id (`$b2`).
    - OnReady: a view that the view cache restored keeps its variables and does nothing; otherwise
      GetCacheableUserInfo (UserInformation.Subdivision.Id), then FetchCountries (IsCountriesDataFetched False, the
      subscribed countries into CountryDetailList and TempCountryDetailList, IsCountriesDataFetched True). A failure
      goes to the flow handler, and the Spinner stays.
    - Flow scope (item 8): FetchCountries is an own client action of the block (R3, `flow.own`; TST
      `ensureControllerAlive("FetchCountries")`, ScreenBlock_Assemble_Filter.js:1033): when the user leaves while
      OnReady waits for GetCacheableUserInfo, the reads of FetchCountries do not start and nothing is raised.
      GetCacheableUserInfo, Cache_UserInfo_Get, GetCacheableRegionSubscribedCountries, HasAccessToRegion and
      ConfirmAction are module actions: they run after the unmount (ConfirmAction resolves False when its dialog is
      gone), and their failures still go to the flow handler with the scope. A state write after the unmount is a
      no-op (`dispatch`). */
export function useAssembleFilter(blockId: string, events: AssembleFilterEvents): AssembleFilterFlows {
  const ids = assembleFilterIds(blockId);
  const {
    state,
    dispatch,
    latest,
    events: eventsRef,
    flow,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: assembleFilterReducer,
    initial: INITIAL_ASSEMBLE_FILTER_STATE,
    parameters: null,
    events,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_flow, restored) => onReady(restored),
  });

  /** FetchCountries: an own client action of the block (R3). */
  const fetchCountries = flow.own(async () => {
    dispatch({ isCountriesDataFetched: false });
    const countries = await fetchSubscribedCountries(); // module actions: not wrapped
    dispatch({ countryDetailList: countries, tempCountryDetailList: countries, isCountriesDataFetched: true });
  });

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  const onReady = async (restored: boolean) => {
    if (restored) return;
    dispatch({ userSubdivisionId: await fetchUserSubdivisionId() }); // module action: not wrapped
    await fetchCountries(); // R3: stops after the unmount
  };

  /** OnChange_SearchTearm: an empty term loads the subscribed countries again (from the cache) into both lists;
      otherwise TempCountryDetailList is the ListFilter of CountryDetailList by name. */
  const onChangeSearchTerm = async (value: string) => {
    if (value === '') {
      const countries = await fetchSubscribedCountries(); // module actions: not wrapped
      dispatch({ countryDetailList: countries, tempCountryDetailList: countries });
    } else {
      dispatch({ tempCountryDetailList: filterCountriesByName(latest.current.countryDetailList, value) });
    }
  };

  /** Handler_GoToBrowseCountry(InCountryCode): HasAccessToRegion(InCountryCode, NullIdentifier()); without access,
      ConfirmAction of the FreeSubscriptionAlert dialog; otherwise the localities of the country show. */
  const goToBrowseCountry = async (inCountryCode: string) => {
    if (inCountryCode === '') return;
    const hasAccess = await hasAccessToRegion(inCountryCode, NULL_ID);
    if (!hasAccess) {
      // module action: runs after leaving, as on TST
      await confirmAction(ids.freeSubscriptionAlert);
      return;
    }
    dispatch(countryChosen(latest.current.tempCountryDetailList, inCountryCode));
  };

  return {
    state,
    onSearchTermChange: (value) => {
      dispatch({ searchTerm: value });
      flow.run(() => onChangeSearchTerm(value));
    },
    onCountryClicked: (countryCode) => {
      flow.run(() => goToBrowseCountry(countryCode));
    },
    // Handler_FreeSubscriptionAlert: App_Subscription_ShowUpgradePopUp.
    onFreeSubscriptionAlert: () => {
      flow.run(() => showUpgradePopUp());
    },
    // Assemble_FilterLocalityByCountrySelectedSubdivisio: SubdivisionId.
    onSelectedSubdivision: (subdivisionId) => {
      dispatch({ subdivisionId });
    },
    onCancel: () => {
      eventsRef.current.onCancel();
    },
    // OnClickApply(SubdivisionId): NavigateToSubdivision(SubdivisionId, SubdivisionId = UserInformation.Subdivision.Id).
    onApply: () => {
      const current = latest.current;
      eventsRef.current.onNavigateToSubdivision(current.subdivisionId, isUserSubdivision(current));
    },
    // Handler_BackNavigation: while the localities show, back returns to the country list (PreventNavigation) and
    // the content scrolls to the top; otherwise the back navigation goes on.
    onBackNavigation: (event) => {
      if (!latest.current.showLocalitiesList) return;
      dispatch(BACK_TO_COUNTRY_LIST);
      event.preventDefault();
      scrollContentToTop();
    },
  };
}
