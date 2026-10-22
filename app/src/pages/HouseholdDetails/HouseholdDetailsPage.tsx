import { useSearchParams } from 'react-router';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { HouseholdDetails_Block } from '@/shared/UBTConnect/HouseholdDetails_Block';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { useViewState } from '@/platform/navigation';
import { readHouseholdDetailsInputs } from './api';

/** @origin UBTConnect.Directory_Household.HouseholdDetails
    (HouseholdDetails.mvc.js: model :1-80, view :81-275, controller
    :276-380): Layout_DetailPage (In_IsPrimaryColor False) titled "Locality, Country", HouseholdDetails_Block as
    content, BottomBarMenu without inputs and CommonUI_InsideLayout. No screen lifecycle event and no call of its own
    (:290-292, :372-376). */
export default function HouseholdDetails() {
  const [params] = useSearchParams();
  const { HouseholdId } = readHouseholdDetailsInputs(params);
  // Screen variables (:13-21), kept by the view cache (P-BACK).
  const [localityName, setLocalityName] = useViewState('LocalityName', '');
  const [countryName, setCountryName] = useViewState('CountryName', '');
  const [, setDeceasedOrAncestryView] = useViewState('DeceasedOrAncestry_View', false);

  // Header title expression (:172).
  const title = localityName !== '' ? localityName + (countryName !== '' ? `, ${countryName}` : '') : countryName;

  // Handler_HouseholdDetails_DataFetched (:296-326): the three assignments.
  const onHouseholdDataFetched = (locality: string, country: string, deceasedOrAncestryView: boolean) => {
    setLocalityName(locality);
    setCountryName(country);
    setDeceasedOrAncestryView(deceasedOrAncestryView);
  };

  return (
    <Layout_DetailPage
      id="$b1"
      inIsPrimaryColor={false}
      placeholderHeaderTitle={
        <span className="font-semi-bold text-neutral-10" data-expression="">
          {title}
        </span>
      }
      content={
        <HouseholdDetails_Block id="$b2" householdId={HouseholdId} onHouseholdDataFetched={onHouseholdDataFetched} />
      }
      bottom={<BottomBarMenu id="$b3" />}
      placeholderCommonUIInsideLayout={<CommonUI_InsideLayout id="$b4" />}
    />
  );
}
