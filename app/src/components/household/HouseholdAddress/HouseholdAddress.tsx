import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { IconText } from '@/shared/UBTConnectLibrary/IconText';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_FontSize,
  UBT_FontWeight,
  UBT_Size,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SeeMoreSection } from '@/shared/UBTConnectLibrary/SeeMoreSection';
import { AddressPopup_Wrapper } from '@/shared/UBTConnect_Utils/AddressPopup_Wrapper';
import type { Directory_Coordinates } from '@/shared/UBTConnect_Utils/lib/structures';
import { UBT_Icons2 as UBTConnect_Icons2, UBT_IconsSize } from '@/shared/UBTConnect/lib/staticEntities';
import type { UI_Household_Card_Content } from '@/shared/UBTConnect/lib/structures';
import { isDeceasedOrAncestry, isShownHousehold } from '@/components/household/householdCard';

export interface HouseholdAddressProps {
  /** False: the address popup and the "See more" toggle do not react. */
  isEnabled: boolean;
  /** The card content of the household. */
  content: UI_Household_Card_Content;
  /** The map coordinates of the address (GetHousehold_Coordinates). */
  coordinates: Directory_Coordinates;
  /** The locality link. */
  onLocalityClick: () => void;
  /** The supper meeting link. */
  onSupperMeetingClick: () => void;
}

/** The About section at the bottom of the household card: the address with its map popup (only for a shown household
    with an address), then "See more" with the locality and the supper meeting links. The links of a deceased or
    ancestry household look disabled (`link-disabled-view`).
    @origin UBTConnect.Directory_Household.HouseholdDetails_Block */
export function HouseholdAddress({
  isEnabled,
  content,
  coordinates,
  onLocalityClick,
  onSupperMeetingClick,
}: HouseholdAddressProps) {
  const linkClasses = isDeceasedOrAncestry(content) ? 'link-disabled-view' : '';
  const linkTextOptions = { Color: UBT_Color.Primary, FontSize: UBT_FontSize.Small, IsUnderlined: true };
  const labelTextOptions = {
    Color: UBT_Color.Neutral10,
    FontSize: UBT_FontSize.Small,
    FontWeight: UBT_FontWeight.Regular,
  };
  const linkContainerOptions = { MarginSize: { BottomSizeId: UBT_Size.Small }, DisplayOptions: {} };
  return (
    <>
      {isShownHousehold(content) && (content.Address ?? '') !== '' && (
        <div className="householdAddress" data-container="">
          <CustomContainer options={linkContainerOptions}>
            <AddressPopup_Wrapper
              iconVisible
              isEnabled={isEnabled}
              inAddress={content.Address ?? ''}
              inCoordinates={coordinates}
            />
          </CustomContainer>
        </div>
      )}
      <div className="full-width padding-top-s" data-container="">
        <SeeMoreSection isEnabled={isEnabled} startExpanded={false}>
          <CustomContainer
            extendedClasses="see-more-locality-cont"
            options={{ PaddingSize: { BottomSizeId: UBT_Size.Small }, BorderOptions: {} }}
          >
            <Columns_Two
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, ColumnSizes: {} }}
              left={
                <IconText spacingSize={UBT_Size.ExtraSmall} text="Locality: " textOptions={labelTextOptions}>
                  <Icon
                    inColorId={UBT_Color.Neutral8}
                    inSizeId={UBT_IconsSize.NonStandard_16}
                    inIconId={UBTConnect_Icons2.HomePIn}
                  />
                </IconText>
              }
              right={
                <CustomContainer options={linkContainerOptions} onClicked={onLocalityClick}>
                  <CustomText
                    inTextOptions={linkTextOptions}
                    extendedClasses={linkClasses}
                    inText={content.LocalityName ?? ''}
                  />
                </CustomContainer>
              }
            />
          </CustomContainer>
          <CustomContainer options={{ PaddingSize: { TopSizeId: UBT_Size.Small } }}>
            <Columns_Two
              columnOptions={{ ColumnBehaviour: UBT_ColumnBehaviour.ReduceFirst, ColumnSizes: {} }}
              left={
                <IconText text="Supper Meeting: " spacingSize={UBT_Size.ExtraSmall} textOptions={labelTextOptions}>
                  <Icon
                    inSizeId={UBT_IconsSize.NonStandard_16}
                    inColorId={UBT_Color.Neutral8}
                    inIconId={UBTConnect_Icons2.Cottage}
                  />
                </IconText>
              }
              right={
                <CustomContainer options={linkContainerOptions} onClicked={onSupperMeetingClick}>
                  <CustomText
                    inText={content.SupperMeetingName ?? ''}
                    inTextOptions={linkTextOptions}
                    extendedClasses={linkClasses}
                  />
                </CustomContainer>
              }
            />
          </CustomContainer>
        </SeeMoreSection>
      </div>
    </>
  );
}
