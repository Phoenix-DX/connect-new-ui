import { fetchInterchanges, type Interchange } from '@/api/locality';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { useFlowState, useOsNavigate } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getLocalityLabel, hasAccessToRegion } from '@/shared/UBTConnect/lib/actions';
import {
  INITIAL_LOCALITY_INTERCHANGE,
  localityInterchangeReducer,
  withStatisticIcons,
  type LocalityInterchangeAction,
} from './localityBlocksState';
import { useReadyOnce } from './readyOnce';

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
    @origin UBTConnect.Directory_Locality.Locality_Interchange */
export function useLocalityInterchange(interchangeLocalityId: string): LocalityInterchangeFlows {
  const navigate = useOsNavigate();
  const ready = useReadyOnce();
  const { state, dispatch, latest } = useFlowState({
    viewName: 'Locality_Interchange',
    reducer: localityInterchangeReducer,
    initial: INITIAL_LOCALITY_INTERCHANGE,
    parameters: { interchangeLocalityId },
    onReady: (isAlive, restored) => ready.once(isAlive, () => onReady(restored)),
  });

  /** A state write of OnReady, skipped after the unmount (W23). */
  const write = (action: LocalityInterchangeAction) => {
    if (ready.isAlive()) dispatch(action);
  };

  async function onReady(restored: boolean) {
    if (restored && latest.current.isDataFetched) return;
    write({ type: 'loadingShown' });
    let list: Interchange[];
    try {
      list = await fetchInterchanges(interchangeLocalityId);
    } catch (e) {
      write({ type: 'interchangesFailed' });
      throw e;
    }
    write({ type: 'interchangesFetched', list: withStatisticIcons(list) });
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
      navigateToLocality(localityId, countryName).catch(raiseToFlowHandler);
    },
  };
}
