import { fetchBrowseCountriesStatistics } from '@/api/country';
import { showUpgradePopUp } from '@/platform/feedback/dialogs';
import { useFlowState, useOsNavigate } from '@/platform/navigation';
import { hasAccessToRegion } from '@/lib/ubtConnect/actions';
import { textToLongInteger } from '@/lib/ubtConnectUtils/actions';
import {
  browseCountriesReducer,
  INITIAL_BROWSE_COUNTRIES_STATE,
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
    Flow scope (item 8): GetCountriesStatistics is a data action (R1, `flow.fetch`): after the unmount its answer and
    its failure are dropped. HasAccessToRegion and the upgrade popup are module actions: they run after leaving. The
    navigation from a left screen does not happen (R4, useOsNavigate).
    @origin UBTConnect.Directory_Locality.BrowseCountries */
export function useBrowseCountries(): BrowseCountriesFlows {
  const navigate = useOsNavigate();
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: 'Directory_Locality.BrowseCountries',
    reducer: browseCountriesReducer,
    initial: INITIAL_BROWSE_COUNTRIES_STATE,
    parameters: null,
    // The flows are defined below; the hook calls the ones of the newest render.
    onReady: (_isAlive, restored) => onReady(restored),
  });

  /** Action_RefreshData. */
  const refreshData = async () => {
    dispatch({ type: 'refreshStarted' });
    const countries = await flow.fetch(fetchBrowseCountriesStatistics()); // R1
    dispatch({ type: 'countriesStatisticsFetched', countries });
  };

  /** OnReady. */
  const onReady = async (restored: boolean) => {
    if (restored && latest.current.isDataFetched) return;
    await refreshData();
  };

  /** Handler_StatisticsList_Clicked(Event_Id). */
  const statisticsListClicked = async (eventId: string) => {
    if (eventId === '') return;
    const hasAccess = await hasAccessToRegion(textToLongInteger(eventId), eventId); // module action: not wrapped
    if (hasAccess) {
      navigate('/UBTConnect/BrowseDirectory', { CountryCode: eventId }); // R4 in useOsNavigate
      return;
    }
    await showUpgradePopUp(); // module action: runs after leaving, as on TST
  };

  return {
    state,
    onStatisticsListClicked: (eventId) => {
      flow.run(() => statisticsListClicked(eventId));
    },
  };
}
