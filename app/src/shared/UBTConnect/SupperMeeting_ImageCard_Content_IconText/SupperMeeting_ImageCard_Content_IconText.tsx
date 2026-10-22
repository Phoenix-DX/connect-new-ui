// @os-block UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText
import { OSBlock } from '@/components/ui/os/OSBlock';
import { Icon } from '../../UBTConnectLibrary/Icon';
import { IconText } from '../../UBTConnectLibrary/IconText';
import { UBT_FontWeight, UBT_IconsSize, UBT_Size } from '../lib/staticEntities';

export interface SupperMeeting_ImageCard_Content_IconTextProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inText?: string;
  /** UBT_FontSize identifier. */
  inFontSize?: string;
  /** UBT_Icons identifier. */
  inUBTIconId?: string;
  /** UBT_Color identifier. */
  inUBTColorId?: string;
}

/** Icon + semi-bold text line of a supper meeting card
    (p:UBTConnect.Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText.mvc.js:186-225): IconText with an
    extra-small gap and a 16 px Icon. */
export function SupperMeeting_ImageCard_Content_IconText({
  id,
  inText = '',
  inFontSize = '',
  inUBTIconId = '',
  inUBTColorId = '',
}: SupperMeeting_ImageCard_Content_IconTextProps) {
  return (
    <OSBlock name="Directory_SupperMeetings.SupperMeeting_ImageCard_Content_IconText" id={id}>
      <IconText
        spacingSize={UBT_Size.ExtraSmall}
        text={inText}
        textOptions={{ FontSize: inFontSize, FontWeight: UBT_FontWeight.SemiBold }}
      >
        <Icon inColorId={inUBTColorId} inIconId={inUBTIconId} inSizeId={UBT_IconsSize.NonStandard_16} />
      </IconText>
    </OSBlock>
  );
}
