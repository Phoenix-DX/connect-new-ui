import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { Icon } from '@/components/ui/Icon';
import { IconText } from '@/components/ui/IconText';
import {
  UBT_Display,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons,
  UBT_Size,
} from '@/lib/ubtConnectLibrary/staticEntities';
import type { TextOptions } from '@/lib/ubtConnectLibrary/structures';
import type { LocalityHouseholdListFlags } from '@/pages/Locality_Details/hooks/useLocalityHouseholdList';
import { Locality_Households_HouseholdList } from './Locality_Households_HouseholdList';

export interface Locality_HouseholdsProps {
  id?: string;
  inLocalityId?: string;
  inBretherenCount?: number;
  inHouseholdCount?: number;
  /** Event_NavigateToHouseholdDetails(HouseholdId). */
  onEventNavigateToHouseholdDetails?: (householdId: string) => void;
  /** The flags of the household list, which the page reads. */
  flags: LocalityHouseholdListFlags;
}

const COUNTER_TEXT: TextOptions = {
  Color: UBT_Color.Neutral8,
  FontSize: UBT_FontSize.ExtraSmall,
  FontWeight: UBT_FontWeight.SemiBold,
};

/** The Households tag: a Neutral4 container (top padding ExtraSmall) with a Neutral0 one (horizontal padding Base)
    holding "locality-count" (flex, vertical padding Small): "<In_BretherenCount> Brethren" (PersonFill, Purple) and
    "<In_HouseholdCount> Households" (Household, Primary); then Locality_Households_HouseholdList(In_LocalityId), whose
    Event_NavigateToHouseholdDetails is raised as is.
    @origin UBTConnect.Directory_Locality.Locality_Households */
export function Locality_Households({
  id,
  inLocalityId = '0',
  inBretherenCount = 0,
  inHouseholdCount = 0,
  onEventNavigateToHouseholdDetails,
  flags,
}: Locality_HouseholdsProps) {
  const b = id?.replace('$', '') ?? '';
  return (
    <OSBlock name="Directory_Locality.Locality_Households" id={id}>
      <CustomContainer
        id={`${b}-$b1`}
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral4 },
          PaddingSize: { TopSizeId: UBT_Size.ExtraSmall },
        }}
      >
        <CustomContainer
          id={`${b}-$b2`}
          options={{
            Background: { BackgroundColor: UBT_Color.Neutral0 },
            PaddingSize: { HorizontalSizeId: UBT_Size.Base },
          }}
        >
          <CustomContainer
            id={`${b}-LocalityCounter`}
            extendedClasses="locality-count"
            options={{
              PaddingSize: { VerticalSizeId: UBT_Size.Small },
              DisplayOptions: { Display: UBT_Display.Flex },
            }}
          >
            <CustomContainer
              id={`${b}-BrethrenCounter`}
              extendedClasses="locality-brethren-count"
              options={{
                PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, RightSizeId: UBT_Size.Small },
                BorderOptions: {},
              }}
            >
              <IconText id={`${b}-$b5`} text={`${String(inBretherenCount)} Brethren`} textOptions={COUNTER_TEXT}>
                <Icon id={`${b}-$b6`} inIconId={UBT_Icons.PersonFill} inColorId={UBT_Color.Purple} />
              </IconText>
            </CustomContainer>
            <CustomContainer
              id={`${b}-HouseholdsCounter`}
              options={{ PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, LeftSizeId: UBT_Size.Small } }}
            >
              <IconText id={`${b}-$b8`} text={`${String(inHouseholdCount)} Households`} textOptions={COUNTER_TEXT}>
                <Icon id={`${b}-$b9`} inColorId={UBT_Color.Primary} inIconId={UBT_Icons.Household} />
              </IconText>
            </CustomContainer>
          </CustomContainer>
        </CustomContainer>
        <Locality_Households_HouseholdList
          id={`${b}-$b10`}
          inLocalityId={inLocalityId}
          onEventNavigateToHouseholdDetails={onEventNavigateToHouseholdDetails}
          flags={flags}
        />
      </CustomContainer>
    </OSBlock>
  );
}
