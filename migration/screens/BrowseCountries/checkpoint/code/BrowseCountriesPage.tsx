import { StatisticsList } from '@/components/directory/StatisticsList';
import { DetailLayout } from '@/components/layout';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useNavigateBack } from '@/platform/navigation';
import { Connect_BottomBar_Items } from '@/lib/ubtConnectUtils/staticEntities';
import { getLookupConcepts } from '@/lib/ubtConnectLibrary/actions';
import { toStatisticsRecords } from './hooks/browseCountriesState';
import { useBrowseCountries } from './hooks/useBrowseCountries';

/** @origin UBTConnect.Directory_Locality.BrowseCountries
    The BrowseCountries route: the detail layout "Browse by country" with the StatisticsList of the countries (search
    prompt "Search country"), the bottom bar (Directory) and CommonUI_InsideLayout. The flows are in
    useBrowseCountries. */
export default function BrowseCountries() {
  const navigateBack = useNavigateBack();
  const { state, onStatisticsListClicked } = useBrowseCountries();

  return (
    <DetailLayout
      id="$b1"
      headerTitle="Browse by country"
      onBack={navigateBack}
      content={
        <StatisticsList
          id="$b2"
          inStatistics={toStatisticsRecords(state.countriesStatistics)}
          inIsLoading={!state.isDataFetched}
          inSearchPrompt={`Search ${getLookupConcepts(true).Country.Singular}`}
          onEventClicked={onStatisticsListClicked}
        />
      }
      bottom={<BottomBar id="$b3" activeItem={Connect_BottomBar_Items.Directory} />}
      commonUI={<CommonUiLayout id="$b4" />}
    />
  );
}
