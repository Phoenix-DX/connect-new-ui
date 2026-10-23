/** @origin UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content */
// @os-block UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { ImageCard__Content } from '@/shared/UBTConnectLibrary/ImageCard__Content';
import { UBT_Size } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { AddressPopupWrapper } from '@/components/contact/AddressPopupWrapper';
import { getDescriptor_Subdivision_GenderSplit } from '@/shared/UBTConnect/lib/actions';
import type { UI_Subdivision_Card_Content } from '@/shared/UBTConnect/lib/structures';
import { SupperMeetingCardStatistics } from '@/components/directory/SupperMeetingCardStatistics';

export interface SupperMeetingCardContentProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inSubdivisionCardContent?: UI_Subdivision_Card_Content;
  inShowAddress?: boolean;
}

/** Content of a supper meeting card (p:migration/screens/SupperMeeting_Carousel/analysis/sources/pretty/
    UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content.mvc.js:158-275): ImageCard__Content titled Name
    whose bottom section holds SupperMeeting_ImageCard_Content_Statistics (BretherenCount, gender split
    GetDescriptor_Subdivision_GenderSplit(BrothersCount, SistersCount), HouseholdCount) and, with In_ShowAddress, a
    CustomContainer (vertical margin Small) with AddressPopup_Wrapper of the Address. */
export function SupperMeetingCardContent({
  id,
  inSubdivisionCardContent = {},
  inShowAddress = false,
}: SupperMeetingCardContentProps) {
  const content = inSubdivisionCardContent;
  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_ImageCard_Content" id={id}>
      <ImageCard__Content
        inTitle={content.Name ?? ''}
        placeholderBottomSectionContent={
          <>
            <SupperMeetingCardStatistics
              inBretherenCount={content.BretherenCount ?? 0}
              inGenderSplit={getDescriptor_Subdivision_GenderSplit(
                content.BrothersCount ?? 0,
                content.SistersCount ?? 0,
              )}
              inHouseholdCount={content.HouseholdCount ?? 0}
            />
            {inShowAddress && (
              <CustomContainer options={{ MarginSize: { VerticalSizeId: UBT_Size.Small } }}>
                <AddressPopupWrapper inAddress={content.Address ?? ''} />
              </CustomContainer>
            )}
          </>
        }
      />
    </OSBlock>
  );
}
