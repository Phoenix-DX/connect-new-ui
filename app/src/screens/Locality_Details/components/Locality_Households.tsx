// @os-block UBTConnect.Directory_Locality.Locality_Households
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '../../../shared/UBTConnectLibrary/CustomContainer';
import { Icon } from '../../../shared/UBTConnectLibrary/Icon';
import { IconText } from '../../../shared/UBTConnectLibrary/IconText';
import {
  UBT_Display,
  UBT_Color,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Icons,
  UBT_Size,
} from '../../../shared/UBTConnectLibrary/lib/staticEntities';
import type { TextOptions } from '../../../shared/UBTConnectLibrary/lib/structures';
import { Locality_Households_HouseholdList } from './Locality_Households_HouseholdList';

export interface Locality_HouseholdsProps {
  id?: string;
  inLocalityId?: string;
  inBretherenCount?: number;
  inHouseholdCount?: number;
  /** Event_NavigateToHouseholdDetails(HouseholdId). */
  onEventNavigateToHouseholdDetails?: (householdId: string) => void;
}

const COUNTER_TEXT: TextOptions = {
  Color: UBT_Color.Neutral8,
  FontSize: UBT_FontSize.ExtraSmall,
  FontWeight: UBT_FontWeight.SemiBold,
};

/** Directory_Locality.Locality_Households (p:UBTConnect.Directory_Locality.Locality_Households.mvc.js view :180-560):
    Neutral4 container (top padding ExtraSmall) with a Neutral0 one (horizontal padding Base) holding "locality-count"
    (flex, vertical padding Small): "<In_BretherenCount> Brethren" (PersonFill, Purple) and "<In_HouseholdCount>
    Households" (Household, Primary); then Locality_Households_HouseholdList(In_LocalityId), whose
    Event_NavigateToHouseholdDetails is raised as is. */
export function Locality_Households({
  id,
  inLocalityId = '0',
  inBretherenCount = 0,
  inHouseholdCount = 0,
  onEventNavigateToHouseholdDetails,
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
        />
      </CustomContainer>
    </OSBlock>
  );
}
