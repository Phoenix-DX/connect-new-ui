import { useRef } from 'react';
import { fetchBrowseCountriesStatistics } from '@/api/country';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, useOsNavigate, type IsAlive } from '@/platform/navigation';
import { hasAccessToRegion } from '@/shared/UBTConnect/lib/actions';
import { textToLongInteger } from '@/shared/UBTConnect_Utils/lib/actions';
import {
  browseCountriesReducer,
  INITIAL_BROWSE_COUNTRIES_STATE,
  type BrowseCountriesAction,
  type BrowseCountriesState,
} from './browseCountriesState';

/** What the page renders and the handler of the StatisticsList event. */
export interface BrowseCountriesFlows {
  /** The screen variables (rendered). */
  state: BrowseCountriesState;
  /** Handler_StatisticsList_Clicked(Event_Id): the Event_Clicked of StatisticsList. */
  onStatisticsListClicked: (eventId: string) => void;
}

/** The flows of the screen BrowseCountries (the screen controller).
    - OnInitialize: no rows, not fetched. On a back navigation the view cache restores the variables.
    - OnReady: a restored view whose data was fetched keeps it. Otherwise Action_RefreshData: 10 skeleton rows, then
      the refresh of GetCountriesStatistics (refresh only) and OnAfterFetch_GetCountriesStatistics (the flags). A
      failed fetch keeps the skeleton rows (IsDataFetched stays False) and goes to the flow handler (the screen has no
      OnException).
    - Handler_StatisticsList_Clicked(Event_Id): Event_Id <> NullTextIdentifier → HasAccessToRegion(
      LongIntegerToText(TextToLongInteger(Event_Id)), Event_Id); access → BrowseDirectory(CountryCode = Event_Id), no
      access → App_Subscription_ShowUpgradePopUp (not captured, built as compiled).
    Decision W23: a flow that started runs to its end; after an unmount only its state writes stop.
    @origin UBTConnect.Directory_Locality.BrowseCountries */
export function useBrowseCountries(): BrowseCountriesFlows {
  const navigate = useOsNavigate();
  /* OnReady runs once per screen. StrictMode (dev) runs the mount effect again on the same screen: the second call
     only replaces the liveness check, so the first flow writes the state while the screen is there and calls
     GetCountriesStatistics once. */
  const readyStarted = useRef(false);
  const newestReadyRun = useRef<IsAlive>(() => true);
  const { state, dispatch, latest } = useFlowState({
    viewName: 'Directory_Locality.BrowseCountries',
    reducer: browseCountriesReducer,
    initial: INITIAL_BROWSE_COUNTRIES_STATE,
    parameters: null,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (isAlive, restored) => {
      newestReadyRun.current = isAlive;
      if (readyStarted.current) return Promise.resolve();
      readyStarted.current = true;
      return onReady(restored);
    },
  });

  /** A state write of a flow, skipped after the unmount (W23). */
  const write = (action: BrowseCountriesAction) => {
    if (newestReadyRun.current()) dispatch(action);
  };

  /** Action_RefreshData. */
  const refreshData = async () => {
    write({ type: 'refreshStarted' });
    const countries = await fetchBrowseCountriesStatistics();
    write({ type: 'countriesStatisticsFetched', countries });
  };

  /** OnReady. */
  const onReady = async (restored: boolean) => {
    if (restored && latest.current.isDataFetched) return;
    await refreshData();
  };

  /** Handler_StatisticsList_Clicked(Event_Id). */
  const statisticsListClicked = async (eventId: string) => {
    if (eventId === '') return;
    const hasAccess = await hasAccessToRegion(textToLongInteger(eventId), eventId);
    if (hasAccess) {
      navigate('/UBTConnect/BrowseDirectory', { CountryCode: eventId });
      return;
    }
    await showUpgradePopUp();
  };

  return {
    state,
    onStatisticsListClicked: (eventId) => {
      statisticsListClicked(eventId).catch(raiseToFlowHandler);
    },
  };
}
