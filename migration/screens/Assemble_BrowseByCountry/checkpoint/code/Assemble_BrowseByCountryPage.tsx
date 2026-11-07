import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { allowUpcomingNavigation, useNavigateBack, useOsNavigate } from '@/platform/navigation';
import { BackNavigationHandler } from '@/platform/navigation/BackNavigationHandler';
import { AssembleFilterView } from './components/AssembleFilterView';
import { assembleFilterIds, isApplyEnabled, isBottomBarVisible } from './hooks/assembleFilterState';
import { useAssembleFilter } from './hooks/useAssembleFilter';

/** The instance id of ScreenBlock_Assemble_Filter. */
const FILTER_BLOCK_ID = '$b2';
const { scope } = assembleFilterIds(FILTER_BLOCK_ID);

/** @origin UBTConnect.Legacy_AssembleFlow.Assemble_BrowseByCountry
    No inputs. CommonUI_InsideLayout, then the Assemble filter (AssembleFilterView, flows in useAssembleFilter) with
    empty Menu and CommonUI_Elements placeholders. Its Cancel event (Assemble_FilterCancel): AllowUpcomingNavigation,
    then back. Its NavigateToSubdivision event (Assemble_FilterNavigateToLocality): AssembleEvents with
    ShowBackNavigation True, SubdivisionId and IsUserSubdivision (Default transition). */
export default function Assemble_BrowseByCountry() {
  const navigate = useOsNavigate();
  const navigateBack = useNavigateBack();
  const { state, onBackNavigation, ...handlers } = useAssembleFilter(FILTER_BLOCK_ID, {
    onCancel: () => {
      allowUpcomingNavigation();
      navigateBack();
    },
    onNavigateToSubdivision: (subdivisionId, isUserSubdivision) => {
      navigate('/UBTConnect/AssembleEvents', {
        ShowBackNavigation: true,
        SubdivisionId: subdivisionId,
        IsUserSubdivision: isUserSubdivision,
      });
    },
  });
  return (
    <>
      <CommonUiLayout id="$b1" />
      <AssembleFilterView
        id={FILTER_BLOCK_ID}
        screenTitle={state.screenTitle}
        isCountriesDataFetched={state.isCountriesDataFetched}
        searchTerm={state.searchTerm}
        countries={state.tempCountryDetailList}
        showLocalitiesList={state.showLocalitiesList}
        countryCode={state.countryCode}
        countryName={state.countryName}
        isBottomBarVisible={isBottomBarVisible(state)}
        isApplyEnabled={isApplyEnabled(state)}
        {...handlers}
        backNavigationHandler={<BackNavigationHandler id={`${scope}-$b8`} onBackNavigation={onBackNavigation} />}
      />
    </>
  );
}
