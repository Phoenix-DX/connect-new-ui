/** @origin UBTConnect.Directory_Household.Household_Relations */
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { UBT_Color, UBT_FontSize, UBT_FontWeight } from '@/shared/UBTConnect/lib/staticEntities';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Layout_DetailPage } from '@/shared/UBTConnectLibrary/Layout_DetailPage';
import { useViewState } from '@/platform/navigation';
import { readHousehold_RelationsInputs } from './api';
import { HouseholdRelations_Block } from './components/HouseholdRelations_Block';

/** UBTConnect.Directory_Household.Household_Relations (Household_Relations.mvc.js: model :1-82, view :84-289,
    controller :291-453): Layout_DetailPage (In_IsPrimaryColor False) titled with PageTitle, HouseholdRelations_Block as
    content, BottomBarMenu without inputs and CommonUI_InsideLayout. No lifecycle event and no call of its own
    (`dataFetchActionNames = []`, :308). */
export default function Household_Relations() {
  const [params] = useSearchParams();
  const { HouseholdId, MemberId } = readHousehold_RelationsInputs(params);
  // Screen variable PageTitle (:13-15), kept by the view cache (P-BACK).
  const [pageTitle, setPageTitle] = useViewState('PageTitle', '');

  return (
    <Layout_DetailPage
      id="$b1"
      inIsPrimaryColor={false}
      placeholderHeaderTitle={
        <CustomText
          id="$b2"
          inText={pageTitle}
          inTextOptions={{
            Color: UBT_Color.Neutral10,
            FontSize: UBT_FontSize.Small,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
      }
      content={
        <HouseholdRelations_Block
          id="$b3"
          householdId={HouseholdId}
          memberId={MemberId}
          // Handler_OnRelationsDetailsFetched (:310-347): PageTitle = RelationsTitle.
          onRelationsDetailsFetched={setPageTitle}
        />
      }
      bottom={<BottomBar id="$b4" />}
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b5" />}
    />
  );
}
