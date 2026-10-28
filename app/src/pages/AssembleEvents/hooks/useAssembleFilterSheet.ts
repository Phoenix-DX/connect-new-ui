import type { CountryWithMapPosition } from '@/api/country';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { useFlowState } from '@/platform/navigation';
import { getUserInformation } from '@/platform/session/userInfo';
import type { Assemble_FilterSheetProps } from '@/pages/AssembleEvents/components/Assemble_FilterSheet';
import { hasAccessToRegion } from '@/lib/assemble/actions';
import { getCacheableRegionSubscribedCountries } from '@/lib/legacyShared/actions';
import {
  assembleFilterSheetReducer,
  COUNTRY_STEP,
  INITIAL_FILTER_SHEET_STATE,
  localitiesOf,
  NULL_SUBDIVISION_ID,
  searchCountries,
} from './assembleFilterSheetState';
import { fetchUserSubdivision } from './userSubdivision';

/** The flows of the block Assemble_FilterSheet in the bottom sheet BottomSheet_AssembleFilter: OnReady
    (GetCacheableUserInfo, then FetchCountries), the country search, the country click, the locality filter events,
    Cancel and Apply. The page calls this hook in a small component at the place of the block and gives the result to
    the view Assemble_FilterSheet.
    @origin Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet */

/** The events of the block. */
export interface AssembleFilterSheetEvents {
  /** Event Cancel. */
  onCancel: () => void;
  /** Event NavigateToSubdivision(SubdivisionId, IsUserSubdivision). */
  onNavigateToSubdivision: (subdivisionId: string, isUserSubdivision: boolean) => void;
}

/** What the view of the block renders, and its event handlers: the props of Assemble_FilterSheet but its ids. */
export type AssembleFilterSheetFlows = Omit<Assemble_FilterSheetProps, 'id' | 'scope'>;

/** The name under which the view cache keeps the variables of the sheet. */
const VIEW_NAME = 'Connect2_Assemble_MUI.Assemble.Assemble_FilterSheet';

/** Cache_UserInfo_Get (the user-info cache of the shell), then GetCacheableRegionSubscribedCountries with the
    SubscriptionRegionId of the user's subscription. An empty SubscriptionRegionId raises ObjectNotFound.
    Assemble_BrowseByCountry has the same function for its block ScreenBlock_Assemble_Filter (`duplicates.md`, F21). */
async function fetchSubscribedCountries(): Promise<CountryWithMapPosition[]> {
  const userInformation = await getUserInformation();
  return getCacheableRegionSubscribedCountries(
    userInformation.Directory_UserCurrent.Directory_UserCurrent_Subscription.SubscriptionRegionId,
  );
}

/** The state and the flows of the sheet. `scope` is the id prefix of its widgets (`b5`).
    - OnReady (no view-cache check): GetCacheableUserInfo (Subdivision.Id), then FetchCountries (IsCountriesDataFetched
      False, the subscribed countries into CountryDetailList and TempCountryDetailList, IsCountriesDataFetched True).
      A failure goes to the flow handler, and the Spinner stays.
    - The view cache does not bring the variables of the sheet back: a restored view starts from the defaults, and
      OnReady fetches again.
    - Flow scope (item 8): FetchCountries is an own client action of the block (R3, `flow.own`; TST
      `ensureControllerAlive("FetchCountries")`, Assemble_FilterSheet.js:800): when the user leaves while OnReady waits
      for GetCacheableUserInfo, the reads of FetchCountries do not start and nothing is raised. GetCacheableUserInfo,
      Cache_UserInfo_Get, GetCacheableRegionSubscribedCountries, HasAccessToRegion and ConfirmAction are module actions:
      they run after the unmount (ConfirmAction resolves False when its dialog is gone), and their failures still go
      to the flow handler with the scope. A state write after the unmount is a no-op (`dispatch`). */
export function useAssembleFilterSheet(scope: string, events: AssembleFilterSheetEvents): AssembleFilterSheetFlows {
  const {
    state,
    dispatch,
    latest,
    events: eventsRef,
    flow,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: assembleFilterSheetReducer,
    initial: INITIAL_FILTER_SHEET_STATE,
    restore: () => INITIAL_FILTER_SHEET_STATE,
    parameters: null,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: () => onReady(),
  });

  /** FetchCountries: an own client action of the block (R3). */
  const fetchCountries = flow.own(async () => {
    dispatch({ isCountriesDataFetched: false });
    const countries = await fetchSubscribedCountries(); // module actions: not wrapped
    dispatch({ countryDetailList: countries, tempCountryDetailList: countries, isCountriesDataFetched: true });
  });

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  async function onReady() {
    dispatch({ userSubdivisionId: (await fetchUserSubdivision()).id }); // module action: not wrapped
    await fetchCountries(); // R3: stops after the unmount
  }

  /** OnChange_SearchTearm: an empty term loads the subscribed countries again (from the cache) into both lists;
      otherwise TempCountryDetailList is the search result in CountryDetailList. */
  const onChangeSearchTerm = async (value: string) => {
    if (value === '') {
      const countries = await fetchSubscribedCountries(); // module actions: not wrapped
      dispatch({ countryDetailList: countries, tempCountryDetailList: countries });
    } else {
      dispatch({ tempCountryDetailList: searchCountries(latest.current.countryDetailList, value) });
    }
  };

  /** Handler_GoToBrowseCountry(InCountryCode): HasAccessToRegion(InCountryCode, NullIdentifier()); without access,
      ConfirmAction of the FreeSubscriptionAlert dialog; otherwise the localities of the country show. */
  const goToBrowseCountry = async (countryCode: string) => {
    if (countryCode === '') return;
    if (!(await hasAccessToRegion(countryCode, NULL_SUBDIVISION_ID))) {
      // module action: runs after leaving, as on TST
      await confirmAction(`${scope}-FreeSubscriptionAlert`);
      return;
    }
    dispatch(localitiesOf(latest.current.tempCountryDetailList, countryCode));
  };

  return {
    screenTitle: state.screenTitle,
    showLocalitiesList: state.showLocalitiesList,
    searchTerm: state.searchTerm,
    isCountriesDataFetched: state.isCountriesDataFetched,
    countries: state.tempCountryDetailList,
    countryCode: state.countryCode,
    countryName: state.countryName,
    isBottomBarVisible: state.countryCode !== '',
    isApplyEnabled: state.subdivisionId !== NULL_SUBDIVISION_ID,
    onSearchTermChange: (value) => {
      dispatch({ searchTerm: value });
      flow.run(() => onChangeSearchTerm(value));
    },
    onCountryClicked: (countryCode) => {
      flow.run(() => goToBrowseCountry(countryCode));
    },
    onBackToCountries: () => {
      dispatch(COUNTRY_STEP);
    },
    onSelectedSubdivision: (subdivisionId) => {
      dispatch({ subdivisionId });
    },
    onFreeSubscriptionAlert: () => {
      flow.run(() => showUpgradePopUp());
    },
    onCancel: () => {
      eventsRef.current.onCancel();
    },
    // OnClickApply: NavigateToSubdivision(SubdivisionId, SubdivisionId = UserInformation.Subdivision.Id).
    onApply: () => {
      const { subdivisionId, userSubdivisionId } = latest.current;
      eventsRef.current.onNavigateToSubdivision(subdivisionId, subdivisionId === userSubdivisionId);
    },
  };
}
