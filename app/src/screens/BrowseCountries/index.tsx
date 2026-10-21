import { useEffect, useReducer, useRef } from 'react';
import { BottomBarMenu } from '../../shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '../../shared/UBTConnect/CommonUI_InsideLayout';
import { hasAccessToRegion } from '../../shared/UBTConnect/lib/actions';
import { StatisticsList, type TextStatisticsOptionsRecord } from '../../shared/UBTConnect/StatisticsList';
import { textToLongInteger } from '../../shared/UBTConnect_Utils/lib/actions';
import { Connect_BottomBar_Items } from '../../shared/UBTConnect_Utils/lib/staticEntities';
import { Layout_DetailPage } from '../../shared/UBTConnectLibrary/Layout_DetailPage';
import { getFlagURLByCountryCode, getLookupConcepts } from '../../shared/UBTConnectLibrary/lib/actions';
import { showUpgradePopUp } from '../../shell/dialogs';
import { raiseToFlowHandler } from '../../shell/exceptions';
import { useOsNavigate, useViewState, useWasRestoredFromCache } from '../../shell/navigation';
import { getCountriesStatistics } from './api';
import { getSkeletonList_UI_CountryStatistics } from './components/actions';
import type { CountryStatistics } from './types';

/** The screen's model: GetCountriesStatistics.Out_CountriesStatistics and its IsDataFetched (BrowseCountries.mvc.js
    model :4-36). */
interface Model {
  countriesStatistics: CountryStatistics[];
  isDataFetched: boolean;
}

const INITIAL: Model = { countriesStatistics: [], isDataFetched: false };

/** In_Statistics (view :183-191): {Id = CountryCode, StatisticsOptions = Statistics}. */
const toStatisticsRecords = (list: CountryStatistics[]): TextStatisticsOptionsRecord[] =>
  list.map((c) => ({ Id: c.countryCode, StatisticsOptions: c.statistics }));

/** UBTConnect Directory_Locality.BrowseCountries (p:UBTConnect.Directory_Locality.BrowseCountries.mvc.js: model :1-87,
    view :89-280, controller :282-604). Layout_DetailPage with the title "Browse by country", the StatisticsList of the
    countries, the bottom bar (Directory) and CommonUI_InsideLayout. GetCountriesStatistics is refresh only (:291-293):
    OnReady drives it through Action_RefreshData. */
export default function BrowseCountries() {
  const navigate = useOsNavigate();
  const restored = useWasRestoredFromCache();
  const [saved, setSaved] = useViewState<Model | null>('Model', null);
  const [state, dispatch] = useReducer(
    (s: Model, patch: Partial<Model>): Model => ({ ...s, ...patch }),
    null,
    () => (restored && saved ? saved : INITIAL),
  );
  /* The OutSystems model: async flows read the latest values (state is the rendered copy). */
  const latest = useRef(state);
  const m = (): Model => latest.current;
  const set = (patch: Partial<Model>) => {
    latest.current = { ...latest.current, ...patch };
    setSaved(latest.current);
    dispatch(patch);
  };

  /* ScreenEvent_OnReady (:333-378): a view restored from the cache with its data fetched keeps it (P-BACK); otherwise
     Action_RefreshData (:458-497): Out_CountriesStatistics = GetSkeletonList_UI_CountryStatistics(10), then Refresh
     GetCountriesStatistics. OnAfterFetch_GetCountriesStatistics (:498-538) sets every row's Statistics.AvatarURL to
     GetFlagURLByCountryCode(CountryCode). A failed fetch keeps the skeleton rows (IsDataFetched stays False) and goes
     to the global handler (no screen OnException). */
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    if (restored && m().isDataFetched) return;
    set({ countriesStatistics: getSkeletonList_UI_CountryStatistics(10) });
    getCountriesStatistics()
      .then((list) => {
        set({
          isDataFetched: true,
          countriesStatistics: list.map((c) => ({
            ...c,
            statistics: { ...c.statistics, AvatarURL: getFlagURLByCountryCode(c.countryCode) },
          })),
        });
      })
      .catch(raiseToFlowHandler);
    // OnReady runs once (the view cache restores the same instance state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Handler_StatisticsList_Clicked(Event_Id) (:389-445): Event_Id <> NullTextIdentifier → HasAccessToRegion(
     LongIntegerToText(TextToLongInteger(Event_Id)), Event_Id); access → BrowseDirectory(CountryCode = Event_Id), no
     access → App_Subscription_ShowUpgradePopUp (shell showUpgradePopUp; not captured, built as compiled: Q1). */
  const handler_StatisticsList_Clicked = async (eventId: string) => {
    if (eventId === '') return;
    const hasAccess = await hasAccessToRegion(textToLongInteger(eventId), eventId);
    if (hasAccess) {
      navigate('/UBTConnect/BrowseDirectory', { CountryCode: eventId });
      return;
    }
    await showUpgradePopUp();
  };

  return (
    <Layout_DetailPage
      id="$b1"
      placeholderHeaderTitle="Browse by country"
      content={
        <StatisticsList
          id="$b2"
          inStatistics={toStatisticsRecords(state.countriesStatistics)}
          inIsLoading={!state.isDataFetched}
          inSearchPrompt={`Search ${getLookupConcepts(true).Country.Singular}`}
          onEventClicked={(id) => {
            handler_StatisticsList_Clicked(id).catch(raiseToFlowHandler);
          }}
        />
      }
      bottom={<BottomBarMenu id="$b3" activeItem={Connect_BottomBar_Items.Directory} />}
      placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b4" />}
    />
  );
}
