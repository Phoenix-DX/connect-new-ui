// @os-block UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content
import { OSBlock } from '../../../components/OSBlock';
import { CustomContainer } from '../../UBTConnectLibrary/CustomContainer';
import { ImageCard__Content } from '../../UBTConnectLibrary/ImageCard__Content';
import { UBT_Size } from '../../UBTConnectLibrary/lib/staticEntities';
import { AddressPopup_Wrapper } from '../../UBTConnect_Utils/AddressPopup_Wrapper';
import { getDescriptor_Subdivision_GenderSplit } from '../lib/actions';
import type { UI_Subdivision_Card_Content } from '../lib/structures';
import { SupperMeeting_ImageCard_Content_Statistics } from '../SupperMeeting_ImageCard_Content_Statistics';

export interface SupperMeeting_ImageCard_ContentProps {
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
export function SupperMeeting_ImageCard_Content({
  id,
  inSubdivisionCardContent = {},
  inShowAddress = false,
}: SupperMeeting_ImageCard_ContentProps) {
  const content = inSubdivisionCardContent;
  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_ImageCard_Content" id={id}>
      <ImageCard__Content
        inTitle={content.Name ?? ''}
        placeholderBottomSectionContent={
          <>
            <SupperMeeting_ImageCard_Content_Statistics
              inBretherenCount={content.BretherenCount ?? 0}
              inGenderSplit={getDescriptor_Subdivision_GenderSplit(
                content.BrothersCount ?? 0,
                content.SistersCount ?? 0,
              )}
              inHouseholdCount={content.HouseholdCount ?? 0}
            />
            {inShowAddress && (
              <CustomContainer options={{ MarginSize: { VerticalSizeId: UBT_Size.Small } }}>
                <AddressPopup_Wrapper inAddress={content.Address ?? ''} />
              </CustomContainer>
            )}
          </>
        }
      />
    </OSBlock>
  );
}
