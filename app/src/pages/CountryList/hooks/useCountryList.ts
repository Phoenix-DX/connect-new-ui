import { useRef } from 'react';
import { fetchCountryListStatistics, type CountrySummary } from '@/api/country';
import {
  exceptionMessage,
  isCommunicationException,
  isInstanceOf,
  isSystemException,
  NotRegisteredException,
  raiseToFlowHandler,
  UserException,
} from '@/legacy/os/exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { useFlowState, useOsNavigate, type IsAlive } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import type { Directory_UserCurrent } from '@/shared/UBTConnect/CacheControl_UserInfo_Wrapper/types';
import { hasAccessToRegion } from '@/shared/UBTConnect/lib/actions';
import { getFlagURLByCountryCode } from '@/shared/UBTConnectLibrary/lib/actions';
import {
  countryListReducer,
  getSkeletonList_UI_CountryStatistics,
  INITIAL_COUNTRY_LIST_STATE,
  longIntegerTextOf,
  userGeographyOf,
  type CountryListPatch,
  type CountryListState,
} from './countryListState';

/** What the page renders and the handlers of the events of its widgets and blocks. */
export interface CountryListFlows {
  /** The screen variables (rendered). */
  state: CountryListState;
  /** StaticInputClick_Input: the search input of the header. */
  onSearchClicked: () => void;
  /** OnClick_MyLocality: the "MY LOCALITY" card. */
  onMyLocalityClicked: () => void;
  /** OnClick_MyCountry: the "MY COUNTRY" card. */
  onMyCountryClicked: () => void;
  /** OnClick_Block of FeedBlock_CommunityPopulation. */
  onCommunityPopulationClicked: () => void;
  /** OnClick_LegendInfo: the info icon of "Browse by Country". */
  onLegendInfoClicked: () => void;
  /** Handler_StatisticsList_Clicked(Event_Id): a country row, with its country code. */
  onCountryClicked: (countryCode: string) => void;
  /** CacheControl_UserInfo_WrapperResult. */
  onUserInfo: (user: Directory_UserCurrent) => void;
  /** Directory_LegendBottomSheetSheetInitialized: BottomSheetId. */
  onLegendSheetInitialized: (sheetId: string) => void;
}

/** The flows of the screen CountryList (the screen controller).
    - OnReady: a back navigation that the view cache restored with the data fetched does nothing; otherwise
      Action_RefreshData. GetCountriesStatistics is refresh-only.
    - Action_RefreshData: 10 skeleton rows, the refresh of GetCountriesStatistics, then
      OnAfterFetch_GetCountriesStatistics (every row's AvatarURL = GetFlagURLByCountryCode(CountryCode)). The exception
      handlers clear the list and bubble the error up (BubbleCommunicationException, BubbleGenericException);
      NotRegistered and system exceptions go up as they are.
    - Decision W23: after an unmount, a started flow skips its state writes only. Its error still goes to the flow
      handler.
    @origin UBTConnect.Directory_Locality.CountryList */
export function useCountryList(): CountryListFlows {
  const navigate = useOsNavigate();
  /* OnReady runs once per screen. StrictMode (dev) runs the mount effect again on the same screen: the second call
     only replaces the liveness check, so the first flow writes the state while the screen is there. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const {
    state,
    dispatch: set,
    latest,
  } = useFlowState({
    viewName: 'Directory_Locality.CountryList',
    reducer: countryListReducer,
    initial: INITIAL_COUNTRY_LIST_STATE,
    parameters: null,
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady(restored);
    },
  });

  /** A state write of the OnReady flow, skipped after the unmount (W23). */
  const write = (patch: CountryListPatch) => {
    if (newestReadyRun.current()) set(patch);
  };

  /** Action_RefreshData. */
  const refreshData = async () => {
    write({ countries: getSkeletonList_UI_CountryStatistics(10) });
    try {
      let rows: CountrySummary[];
      try {
        rows = await fetchCountryListStatistics();
      } catch (e) {
        write({ fetchStatus: 'error', hasFetchError: true });
        throw e;
      }
      // The fetch, then OnAfterFetch_GetCountriesStatistics.
      write({
        countries: rows.map((c) => ({ ...c, avatarURL: getFlagURLByCountryCode(c.countryCode) })),
        fetchStatus: 'ok',
        isDataFetched: true,
        hasFetchError: false,
      });
    } catch (e) {
      if (isCommunicationException(e)) {
        write({ countries: [] }); // ListClear2
        throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleCommunicationException');
      }
      if (isInstanceOf(e, NotRegisteredException)) throw e; // Raise Error: NotRegistered
      if (!isSystemException(e)) {
        write({ countries: [] }); // ListClear
        throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleGenericException');
      }
      throw e;
    }
  };

  /** ScreenEvent_OnReady. useFlowState sends a rejection to the flow handler. */
  const onReady = async (restored: boolean) => {
    if (restored && latest.current.isDataFetched) return;
    await refreshData();
  };

  /** Handler_StatisticsList_Clicked(Event_Id): with access to the region, CountryDetails; otherwise
      App_Subscription_ShowUpgradePopUp. */
  const statisticsClicked = async (eventId: string) => {
    if (eventId === '') return;
    const hasAccess = await hasAccessToRegion(longIntegerTextOf(eventId), eventId);
    if (hasAccess) navigate(`/${APP_ID}/CountryDetails`, { CountryCode: eventId });
    else await showUpgradePopUp();
  };

  return {
    state,
    onSearchClicked: () => {
      navigate(`/${APP_ID}/Search`);
    },
    onMyLocalityClicked: () => {
      navigate(`/${APP_ID}/Locality_Details`, {
        LocalityId: state.user.localityId,
        PreloadedLocalityLabel: state.user.localityName,
      });
    },
    onMyCountryClicked: () => {
      navigate(`/${APP_ID}/CountryDetails`, { CountryCode: state.user.countryCode });
    },
    onCommunityPopulationClicked: () => {
      navigate(`/${APP_ID}/Updates_SingleList`);
    },
    onLegendInfoClicked: () => {
      bottomSheetOpen(latest.current.bottomSheetId);
    },
    onCountryClicked: (countryCode) => {
      statisticsClicked(countryCode).catch(raiseToFlowHandler);
    },
    onUserInfo: (user) => {
      set({ user: userGeographyOf(user) });
    },
    onLegendSheetInitialized: (sheetId) => {
      set({ bottomSheetId: sheetId });
    },
  };
}
