import { useSearchParams } from 'react-router';
import { DirectoryLegendSheet } from '@/components/directory/DirectoryLegendSheet';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { FilterSheetContainer } from '@/containers/FilterSheet';
import { PreventBackNavigation } from '@/platform/navigation/PreventBackNavigation';
import type { Filter_Common_Options } from '@/shared/UBTConnect/lib/structures';
import { Connect_BottomBar_Items } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { CountryDetailsContent } from './components/CountryDetailsContent';
import { useCountryDetails } from './hooks/useCountryDetails';
import { readCountryDetailsInputs } from './inputs';

/** FilterSheet inputs: the country list only, ordered first, without "All". */
const FILTER_OPTIONS: Filter_Common_Options = { HasCountries: { Enable: true, Order: 1, AddAllOptions: false } };

/** @origin UBTConnect.Directory_Locality.CountryDetails
    The localities of one country: the detail layout titled with the country name ("Browse Directory" until
    GetLocalityStatistics answers), the map, the search, and the localities with their statistics. A locality opens
    Locality_Details when the subscription covers it, else the upgrade pop-up. The FilterSheet selects another country.
    The flows are in useCountryDetails. Captured dom/default.html, loading.html and offline.html. */
export default function CountryDetails() {
  const [params] = useSearchParams();
  const {
    countryName,
    localities,
    list,
    searchString,
    isLoaded,
    mapOptions,
    markersList,
    startFilter,
    onSelectCountryClicked,
    onMarkerClicked,
    onMapSetCallbacks,
    onMapInitialized,
    onMapParametersChanged,
    onSearchChanged,
    onLegendInfoClicked,
    onLocalityClicked,
    onFilterSheetLoaded,
    onFilterSheetInitialized,
    onApplyFilters,
    onLegendSheetInitialized,
  } = useCountryDetails(readCountryDetailsInputs(params).CountryCode);

  return (
    <>
      <Layout_DetailPage
        id="$b1"
        placeholderHeaderTitle={<span data-expression="">{countryName === '' ? 'Browse Directory' : countryName}</span>}
        content={
          <CountryDetailsContent
            localities={localities}
            list={list}
            searchString={searchString}
            isLoaded={isLoaded}
            mapOptions={mapOptions}
            markersList={markersList}
            onSelectCountryClicked={onSelectCountryClicked}
            onMarkerClicked={onMarkerClicked}
            onMapSetCallbacks={onMapSetCallbacks}
            onMapInitialized={onMapInitialized}
            onMapParametersChanged={onMapParametersChanged}
            onSearchChanged={onSearchChanged}
            onLegendInfoClicked={onLegendInfoClicked}
            onLocalityClicked={onLocalityClicked}
          />
        }
        bottom={<BottomBar id="$b26" activeItem={Connect_BottomBar_Items.Directory} />}
        placeholderCommonUIInsideLayout={<CommonUiLayout id="$b27" />}
      />
      <FilterSheetContainer
        id="$b28"
        extendedClasses="bottom-sheet-higher-z-index"
        inStartFilter={startFilter}
        inOptions={FILTER_OPTIONS}
        onLoaded={onFilterSheetLoaded}
        onSheetInitialized={onFilterSheetInitialized}
        onApplyFilters={(optionLists, _choices, _flatLists, _localities, _countries, _sortBy, hasFilters) => {
          onApplyFilters(optionLists, hasFilters);
        }}
      />
      <DirectoryLegendSheet
        id="$b29"
        showLocalities={false}
        onSheetInitialized={onLegendSheetInitialized}
        preventBackNavigation={PreventBackNavigation}
      />
    </>
  );
}
