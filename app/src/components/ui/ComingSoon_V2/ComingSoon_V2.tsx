/** @origin UBTConnectLibrary.ConnectPatterns.ComingSoon_V2 */
// @os-block UBTConnectLibrary.ConnectPatterns.ComingSoon_V2
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CircleButtonIconPrimary } from '@/components/ui/CircleButtonIconPrimary';
import { CustomText } from '@/components/ui/CustomText';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Icons, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';

interface ComingSoon_V2Props {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** "Coming Soon" card (live TST of 2026-10-27, UBTConnectLibrary.ConnectPatterns.ComingSoon_V2.mvc.js,
    View.internalRender): a `comingsoon-card` container with CircleButton_IconPrimary (CalendarFill, Neutral0 on CyanDark, no
    label) and the CustomText "Coming Soon" (padding top Base; Neutral9, Base, SemiBold). No inputs, no events. */
export function ComingSoon_V2({ id }: ComingSoon_V2Props) {
  return (
    <OSBlock name="ConnectPatterns.ComingSoon_V2" id={id}>
      <div className="comingsoon-card" data-container="">
        <CircleButtonIconPrimary
          iconColorId={UBT_Color.Neutral0}
          iconId={UBT_Icons.CalendarFill}
          iconBackgroundColorId={UBT_Color.CyanDark}
        />
        <CustomText
          inPaddingOptions={{ TopSizeId: UBT_Size.Base }}
          inText="Coming Soon"
          inTextOptions={{
            Color: UBT_Color.Neutral9,
            FontSize: UBT_FontSize.Base,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
      </div>
    </OSBlock>
  );
}
