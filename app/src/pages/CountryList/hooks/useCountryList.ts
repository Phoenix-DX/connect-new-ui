import { fetchCountryListCommunityStatistics, fetchCountryListStatistics, type CountrySummary } from '@/api/country';
import {
  exceptionMessage,
  isCommunicationException,
  isInstanceOf,
  isSystemException,
  NotRegisteredException,
  UserException,
} from '@/legacy/os/exceptions';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { useFlowState, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { bottomSheetOpen } from '@/components/ui/lib/actions';
import type { Directory_UserCurrent } from '@/platform/session/UserInfoCache/types';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import { getFlagURLByCountryCode } from '@/lib/ubtConnectLibrary/actions';
import {
  countryListReducer,
  getSkeletonList_UI_CountryStatistics,
  INITIAL_COUNTRY_LIST_STATE,
  longIntegerTextOf,
  userGeographyOf,
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
      JavaScript1 starts Action_RefreshData_CommunityStatistics (GetCommunityStatistics, not awaited, no widget reads
      it; live TST of 2026-10-27), then Action_RefreshData. Both data actions are refresh-only.
    - Action_RefreshData: 10 skeleton rows, the refresh of GetCountriesStatistics, then
      OnAfterFetch_GetCountriesStatistics (every row's AvatarURL = GetFlagURLByCountryCode(CountryCode)). The exception
      handlers clear the list and bubble the error up (BubbleCommunicationException, BubbleGenericException);
      NotRegistered and system exceptions go up as they are.
    - Flow scope (item 8): GetCountriesStatistics is a data action (R1, `flow.fetch`). After the unmount its answer
      and its failure are dropped: `flow.fetch` throws ControllerDisposedException, a system exception, which the
      handlers pass on unchanged and the flow handler ignores (on TST the catch block is inside the dropped chain,
      CountryList.js:1450-1490). HasAccessToRegion and the upgrade popup are module actions: they run after leaving.
      The navigation from a left screen does not happen (R4, useOsNavigate).
    @origin UBTConnect.Directory_Locality.CountryList */
export function useCountryList(): CountryListFlows {
  const navigate = useOsNavigate();
  const {
    state,
    dispatch: set,
    latest,
    flow,
  } = useFlowState({
    viewName: 'Directory_Locality.CountryList',
    reducer: countryListReducer,
    initial: INITIAL_COUNTRY_LIST_STATE,
    parameters: null,
    onReady: (_flow, restored) => onReady(restored),
  });

  /** Action_RefreshData. */
  const refreshData = async () => {
    set({ countries: getSkeletonList_UI_CountryStatistics(10) });
    try {
      let rows: CountrySummary[];
      try {
        rows = await flow.fetch(fetchCountryListStatistics()); // R1
      } catch (e) {
        set({ fetchStatus: 'error', hasFetchError: true });
        throw e;
      }
      // The fetch, then OnAfterFetch_GetCountriesStatistics.
      set({
        countries: rows.map((c) => ({ ...c, avatarURL: getFlagURLByCountryCode(c.countryCode) })),
        fetchStatus: 'ok',
        isDataFetched: true,
        hasFetchError: false,
      });
    } catch (e) {
      if (isCommunicationException(e)) {
        set({ countries: [] }); // ListClear2
        throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleCommunicationException');
      }
      if (isInstanceOf(e, NotRegisteredException)) throw e; // Raise Error: NotRegistered
      if (!isSystemException(e)) {
        set({ countries: [] }); // ListClear
        throw new UserException(exceptionMessage(e), 'UBTConnect.BubbleGenericException');
      }
      throw e;
    }
  };

  /** Action_RefreshData_CommunityStatistics: the refresh of GetCommunityStatistics (R1). No widget reads the answer. */
  const refreshCommunityStatistics = async () => {
    await flow.fetch(fetchCountryListCommunityStatistics());
  };

  /** ScreenEvent_OnReady. useFlowState sends a rejection to the flow handler. JavaScript1 (live TST of 2026-10-27,
      CountryList.mvc.js:1312-1318, 1831-1835) calls Action_RefreshData_CommunityStatistics and does not wait for it:
      its error goes to the flow handler on its own (`flow.run`). */
  const onReady = async (restored: boolean) => {
    if (restored && latest.current.isDataFetched) return;
    flow.run(refreshCommunityStatistics);
    await refreshData();
  };

  /** Handler_StatisticsList_Clicked(Event_Id): with access to the region, CountryDetails; otherwise
      App_Subscription_ShowUpgradePopUp. */
  const statisticsClicked = async (eventId: string) => {
    if (eventId === '') return;
    const hasAccess = await hasAccessToRegion(longIntegerTextOf(eventId), eventId); // module action: not wrapped
    if (hasAccess)
      navigate(`/${APP_ID}/CountryDetails`, { CountryCode: eventId }); // R4 in useOsNavigate
    else await showUpgradePopUp(); // module action: runs after leaving, as on TST
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
      flow.run(() => statisticsClicked(countryCode));
    },
    onUserInfo: (user) => {
      set({ user: userGeographyOf(user) });
    },
    onLegendSheetInitialized: (sheetId) => {
      set({ bottomSheetId: sheetId });
    },
  };
}
