import { fetchInterchanges, type Interchange } from '@/api/locality';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { useFlowState, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getLocalityLabel, hasAccessToRegion } from '@/lib/ubtConnect/actions';
import { INITIAL_LOCALITY_INTERCHANGE, localityInterchangeReducer, withStatisticIcons } from './localityBlocksState';

/** What the interchange tag renders. */
export interface LocalityInterchangeFlows {
  /** GetInterchangesByLocalityId.Out_InterchangeList: three loading records, then the fetched ones. */
  interchangeList: Interchange[];
  /** The skeleton: a fetch error, or the data not fetched yet. */
  isLoading: boolean;
  /** Handler_NavigateToLocality(In_LocalityId, In_CountryName): Event_NavigateToLocality of the statistics list. */
  onNavigateToLocality: (localityId: string, countryName: string) => void;
}

/** The flows of the interchange localities of a locality (the Interchange tag).
    - OnReady: a view that the view cache restored with the data keeps it; else three loading records (LoadingItems 3)
      and the refresh of GetInterchangesByLocalityId (the block input In_InterchangeLocalityId).
    - OnAfterFetch_GetInterchangesByLocalityId: the icon and the color of every statistic.
    - Handler_NavigateToLocality: HasAccessToRegion(LocalityId, CountryName) → Locality_Details of that locality
      (PreloadedLocalityLabel = GetLocalityLabel of the matching row, "" when none); no access →
      App_Subscription_ShowUpgradePopUp.
    Flow scope (item 8): GetInterchangesByLocalityId is a data action (R1, Locality_Interchange.js:237): after an
    unmount its answer and its failure are dropped. HasAccessToRegion and App_Subscription_ShowUpgradePopUp are module
    actions (R2, :270, :313): they run after leaving. The navigation of a left screen is blocked by useOsNavigate (R4,
    :304).
    @origin UBTConnect.Directory_Locality.Locality_Interchange */
export function useLocalityInterchange(interchangeLocalityId: string): LocalityInterchangeFlows {
  const navigate = useOsNavigate();
  const { state, dispatch, latest, flow } = useFlowState({
    viewName: 'Locality_Interchange',
    reducer: localityInterchangeReducer,
    initial: INITIAL_LOCALITY_INTERCHANGE,
    parameters: { interchangeLocalityId },
    onReady: (_flow, restored) => onReady(restored),
  });

  async function onReady(restored: boolean) {
    if (restored && latest.current.isDataFetched) return;
    dispatch({ type: 'loadingShown' });
    let list: Interchange[];
    try {
      list = await flow.fetch(fetchInterchanges(interchangeLocalityId)); // R1
    } catch (e) {
      dispatch({ type: 'interchangesFailed' });
      throw e;
    }
    dispatch({ type: 'interchangesFetched', list: withStatisticIcons(list) });
  }

  const navigateToLocality = async (localityId: string, countryName: string) => {
    if (!(await hasAccessToRegion(localityId, countryName))) {
      await showUpgradePopUp();
      return;
    }
    const row = latest.current.out_InterchangeList.find((p) => p.interchangeLocalityId === localityId);
    const localityLabel = row ? getLocalityLabel(row.interchangeLocalityName, row.interchangeCountryName) : '';
    navigate(`/${APP_ID}/Locality_Details`, { PreloadedLocalityLabel: localityLabel, LocalityId: localityId });
  };

  return {
    interchangeList: state.out_InterchangeList,
    isLoading: state.hasFetchError || !state.isDataFetched,
    onNavigateToLocality: (localityId, countryName) => {
      flow.run(() => navigateToLocality(localityId, countryName));
    },
  };
}
