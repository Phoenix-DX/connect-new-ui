import { useSearchParams } from 'react-router';
import { DetailLayout } from '@/components/layout';
import { HouseholdDetailsContainer, useHouseholdDetailsFlags } from '@/containers';
import { useNavigateBack, useViewState } from '@/platform/navigation';
import { BottomBarMenu } from '@/shared/UBTConnect/BottomBarMenu';
import { CommonUI_InsideLayout } from '@/shared/UBTConnect/CommonUI_InsideLayout';
import { readHouseholdDetailsInputs } from './inputs';

/** @origin UBTConnect.Directory_Household.HouseholdDetails
    The route of a household: the detail layout (not primary) titled "Locality, Country", the household details as
    content, the bottom bar without an active item and CommonUI_InsideLayout. The screen has no lifecycle event and no
    call of its own: the title comes from the HouseholdDataFetched event of the household details. */
export default function HouseholdDetails() {
  const [params] = useSearchParams();
  const { HouseholdId } = readHouseholdDetailsInputs(params);
  const flags = useHouseholdDetailsFlags();
  const navigateBack = useNavigateBack();
  // Screen variables, kept by the view cache (P-BACK).
  const [localityName, setLocalityName] = useViewState('LocalityName', '');
  const [countryName, setCountryName] = useViewState('CountryName', '');
  const [, setDeceasedOrAncestryView] = useViewState('DeceasedOrAncestry_View', false);

  // The header title: "Locality, Country", or the one that is not empty.
  const title = localityName !== '' ? localityName + (countryName !== '' ? `, ${countryName}` : '') : countryName;

  // Handler_HouseholdDetails_DataFetched: the three assignments.
  const onHouseholdDataFetched = (locality: string, country: string, deceasedOrAncestryView: boolean) => {
    setLocalityName(locality);
    setCountryName(country);
    setDeceasedOrAncestryView(deceasedOrAncestryView);
  };

  return (
    <DetailLayout
      id="$b1"
      isPrimaryColor={false}
      onBack={navigateBack}
      headerTitle={
        <span className="font-semi-bold text-neutral-10" data-expression="">
          {title}
        </span>
      }
      content={
        <HouseholdDetailsContainer
          id="$b2"
          source={{ kind: 'server', householdId: HouseholdId }}
          flags={flags}
          onHouseholdDataFetched={onHouseholdDataFetched}
        />
      }
      bottom={<BottomBarMenu id="$b3" />}
      commonUI={<CommonUI_InsideLayout id="$b4" />}
    />
  );
}
