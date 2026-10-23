// @os-block UBTConnect.Directory_Locality.Locality_Interchange
import { useEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { showUpgradePopUp } from '@/platform/feedback/dialogs/subscription';
import { raiseToFlowHandler } from '@/legacy/os/exceptions';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '@/platform/navigation';
import { APP_ID } from '@/platform/navigation/paths';
import { getLocalityLabel, hasAccessToRegion } from '@/shared/UBTConnect/lib/actions';
import { getInterchangesByLocalityId } from '@/pages/Locality_Details/api';
import type { InterchangeItem } from '@/pages/Locality_Details/types';
import { getIconLabel_Interchange_Statistics } from './actions';
import { Directory_Interchange_StatisticsList } from './Directory_Interchange_StatisticsList';

export interface Locality_InterchangeProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_InterchangeLocalityId (Long Integer as text). */
  inInterchangeLocalityId?: string;
}

/** GetInterchangesByLocalityId as the view reads it. */
interface GetInterchanges {
  isDataFetched: boolean;
  hasFetchError: boolean;
  out_InterchangeList: InterchangeItem[];
}

/** OnReady's loading record (controller :660-730): statistics Title and Subtitle "Loading", three statistics
    ("Loading", "11"), InterchangeDistance "111"; the other attributes keep their defaults. */
const loadingItem = (): InterchangeItem => ({
  interchangeLocalityId: '0',
  interchangeLocalityName: '',
  interchangeCountryName: '',
  interchangeDistance: '111',
  isBookmarked: false,
  interchangeStatistics: {
    Title: 'Loading',
    Subtitle: 'Loading',
    AvatarURL: '',
    Statistics: [1, 2, 3].map(() => ({ Name: 'Loading', Value: '11', IconColorId: '', IconId: '' })),
  },
});

/** OnAfterFetch_GetInterchangesByLocalityId (controller :781-905): every statistic's IconColorId and IconId from
    GetIconLabel_Interchange_Statistics(Name). */
const withStatisticIcons = (list: InterchangeItem[]): InterchangeItem[] =>
  list.map((item) => ({
    ...item,
    interchangeStatistics: {
      ...item.interchangeStatistics,
      Statistics: (item.interchangeStatistics.Statistics ?? []).map((s) => {
        const icon = getIconLabel_Interchange_Statistics(s.Name ?? '');
        return { ...s, IconColorId: icon.color_Id, IconId: icon.iconId };
      }),
    },
  }));

/** Directory_Locality.Locality_Interchange, the Interchange tag (p:migration/screens/Locality_Details/analysis/sources/
    pretty/UBTConnect.Directory_Locality.Locality_Interchange.mvc.js view :260-333, controller :380-980):
    Directory_Interchange_StatisticsList (subtitle shown, loading = fetch error or not fetched) of
    GetInterchangesByLocalityId. OnReady: restored from cache → nothing; else three loading records (LoadingItems 3)
    and the refresh. Handler_NavigateToLocality: HasAccessToRegion(LocalityId, CountryName) → Locality_Details of that
    locality (PreloadedLocalityLabel = GetLocalityLabel of the matching row, "" when none); no access →
    App_Subscription_ShowUpgradePopUp. */
export function Locality_Interchange({ id, inInterchangeLocalityId = '0' }: Locality_InterchangeProps) {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const [state, setState] = useViewState<GetInterchanges>('Locality_Interchange', {
    isDataFetched: false,
    hasFetchError: false,
    out_InterchangeList: [],
  });
  const latest = useRef(state);
  const set = (next: GetInterchanges) => {
    latest.current = next;
    setState(next);
  };

  /* OnReady (controller :620-780). */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && latest.current.isDataFetched) return;
    set({
      ...latest.current,
      out_InterchangeList: [...latest.current.out_InterchangeList, ...[1, 2, 3].map(loadingItem)],
    });
    const refresh = async () => {
      let list: InterchangeItem[];
      try {
        list = await getInterchangesByLocalityId(inInterchangeLocalityId);
      } catch (e) {
        set({ ...latest.current, hasFetchError: true });
        throw e;
      }
      set({ isDataFetched: true, hasFetchError: false, out_InterchangeList: withStatisticIcons(list) });
    };
    refresh().catch(raiseToFlowHandler);
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Handler_NavigateToLocality(In_LocalityId, In_CountryName) (controller :452-618). */
  const handlerNavigateToLocality = async (in_LocalityId: string, in_CountryName: string) => {
    if (!(await hasAccessToRegion(in_LocalityId, in_CountryName))) {
      await showUpgradePopUp();
      return;
    }
    const list = latest.current.out_InterchangeList;
    const position = list.findIndex((p) => p.interchangeLocalityId === in_LocalityId);
    const row = position === -1 ? undefined : list[position];
    const localityLabel = row ? getLocalityLabel(row.interchangeLocalityName, row.interchangeCountryName) : '';
    navigate(`/${APP_ID}/Locality_Details`, { PreloadedLocalityLabel: localityLabel, LocalityId: in_LocalityId });
  };

  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_Locality.Locality_Interchange" id={id}>
      <Directory_Interchange_StatisticsList
        id={`${b}-$b1`}
        inShowSubtitle
        inIsLoading={state.hasFetchError || !state.isDataFetched}
        inInterchangeList={state.out_InterchangeList}
        onEventNavigateToLocality={(localityId, countryName) => {
          handlerNavigateToLocality(localityId, countryName).catch(raiseToFlowHandler);
        }}
      />
    </OSBlock>
  );
}
