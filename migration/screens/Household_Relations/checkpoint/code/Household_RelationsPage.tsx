import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { BottomBar } from '@/components/layout/BottomBar';
import { CommonUiLayout } from '@/components/layout/CommonUiLayout';
import { useViewState } from '@/platform/navigation';
import { UBT_Color, UBT_FontSize, UBT_FontWeight } from '@/lib/ubtConnect/staticEntities';
import { CustomText } from '@/components/ui/CustomText';
import { DetailLayoutContainer } from '@/containers/DetailLayout';
import { HouseholdRelationsView } from './components/HouseholdRelationsView';
import { useHouseholdRelations, type HouseholdRelationsEvents } from './hooks/useHouseholdRelations';
import { readHousehold_RelationsInputs } from './inputs';

/** HouseholdRelations_Block on the screen: its flows (useHouseholdRelations) and its view. The hook runs here, at the
    place of the block, so that OnReady starts before the OnReady of BottomBarMenu, as in OutSystems (the call order
    stays the same), and a change of the block state renders only the block. */
function HouseholdRelations({
  householdId,
  memberId,
  onRelationsDetailsFetched,
}: { householdId: string; memberId: string } & HouseholdRelationsEvents) {
  const relations = useHouseholdRelations({ householdId, memberId }, { onRelationsDetailsFetched });
  return <HouseholdRelationsView id="$b3" memberId={memberId} {...relations} />;
}

/** @origin UBTConnect.Directory_Household.Household_Relations
    The relations of a member: Layout_DetailPage (In_IsPrimaryColor False) with the PageTitle as header title,
    HouseholdRelations_Block as content, BottomBarMenu without inputs and CommonUI_InsideLayout. The screen has no
    lifecycle event and no call of its own. Handler_OnRelationsDetailsFetched sets PageTitle to the RelationsTitle of
    the block. */
export default function Household_Relations() {
  const [params] = useSearchParams();
  const { HouseholdId, MemberId } = useMemo(() => readHousehold_RelationsInputs(params), [params]);
  // Screen variable PageTitle, kept by the view cache.
  const [pageTitle, setPageTitle] = useViewState('PageTitle', '');

  return (
    <DetailLayoutContainer
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
        <HouseholdRelations householdId={HouseholdId} memberId={MemberId} onRelationsDetailsFetched={setPageTitle} />
      }
      bottom={<BottomBar id="$b4" />}
      placeholderCommonUIInsideLayout={<CommonUiLayout id="$b5" />}
    />
  );
}
