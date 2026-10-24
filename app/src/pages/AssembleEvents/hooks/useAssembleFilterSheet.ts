import { useRef } from 'react';
import type { CountryWithMapPosition } from '@/api/country';
import { confirmAction, showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, type IsAlive } from '@/platform/navigation';
import { getUserInformation } from '@/platform/session/userInfo';
import type { Assemble_FilterSheetProps } from '@/pages/AssembleEvents/components/Assemble_FilterSheet';
import { hasAccessToRegion } from '@/shared/Connect2_Assemble_MUI/lib/actions';
import { getCacheableRegionSubscribedCountries } from '@/shared/Connect2_LegacyShared/lib/actions';
import {
  assembleFilterSheetReducer,
  COUNTRY_STEP,
  INITIAL_FILTER_SHEET_STATE,
  localitiesOf,
  NULL_SUBDIVISION_ID,
  searchCountries,
  type AssembleFilterSheetPatch,
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
    - Decision W23: after an unmount, a started flow skips its state writes only. Its calls, the ConfirmAction dialog
      and its error still run. */
export function useAssembleFilterSheet(scope: string, events: AssembleFilterSheetEvents): AssembleFilterSheetFlows {
  /* OnReady runs once per block. StrictMode (dev) runs the mount effect again on the same block: the second call only
     replaces the liveness check, so the first flow writes the state while the block is there and calls each action
     once. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch,
    latest,
    events: eventsRef,
  } = useFlowState({
    viewName: VIEW_NAME,
    reducer: assembleFilterSheetReducer,
    initial: INITIAL_FILTER_SHEET_STATE,
    restore: () => INITIAL_FILTER_SHEET_STATE,
    parameters: null,
    events,
    // The flow is defined below; the hook calls the one of the newest render.
    onReady: (isAlive) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady();
    },
  });

  /** A state write of a flow, skipped after the unmount (W23). */
  const write = (patch: AssembleFilterSheetPatch) => {
    if (newestReadyRun.current()) dispatch(patch);
  };

  /** FetchCountries. */
  const fetchCountries = async () => {
    write({ isCountriesDataFetched: false });
    const countries = await fetchSubscribedCountries();
    write({ countryDetailList: countries, tempCountryDetailList: countries, isCountriesDataFetched: true });
  };

  /** OnReady. useFlowState sends a rejection to the flow handler. */
  async function onReady() {
    write({ userSubdivisionId: (await fetchUserSubdivision()).id });
    await fetchCountries();
  }

  /** OnChange_SearchTearm: an empty term loads the subscribed countries again (from the cache) into both lists;
      otherwise TempCountryDetailList is the search result in CountryDetailList. */
  const onChangeSearchTerm = async (value: string) => {
    if (value === '') {
      const countries = await fetchSubscribedCountries();
      write({ countryDetailList: countries, tempCountryDetailList: countries });
    } else {
      dispatch({ tempCountryDetailList: searchCountries(latest.current.countryDetailList, value) });
    }
  };

  /** Handler_GoToBrowseCountry(InCountryCode): HasAccessToRegion(InCountryCode, NullIdentifier()); without access,
      ConfirmAction of the FreeSubscriptionAlert dialog; otherwise the localities of the country show. */
  const goToBrowseCountry = async (countryCode: string) => {
    if (countryCode === '') return;
    if (!(await hasAccessToRegion(countryCode, NULL_SUBDIVISION_ID))) {
      await confirmAction(`${scope}-FreeSubscriptionAlert`);
      return;
    }
    write(localitiesOf(latest.current.tempCountryDetailList, countryCode));
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
      onChangeSearchTerm(value).catch(raiseToFlowHandler);
    },
    onCountryClicked: (countryCode) => {
      goToBrowseCountry(countryCode).catch(raiseToFlowHandler);
    },
    onBackToCountries: () => {
      dispatch(COUNTRY_STEP);
    },
    onSelectedSubdivision: (subdivisionId) => {
      dispatch({ subdivisionId });
    },
    onFreeSubscriptionAlert: () => {
      showUpgradePopUp().catch(raiseToFlowHandler);
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
