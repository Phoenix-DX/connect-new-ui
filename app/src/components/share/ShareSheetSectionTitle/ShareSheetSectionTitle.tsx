/** @origin UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle */
// @os-block UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/shared/UBTConnectLibrary/CustomContainer';
import { UBT_FontSize, UBT_FontWeight, UBT_Size } from '@/shared/UBTConnect_Utils/lib/staticEntities';

export interface ShareSheetSectionTitleProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inLabel?: string;
  /** In_FontSize: UBT_FontSize identifier. */
  inFontSize?: string;
}

/** CustomContainer (bottom padding XS for a DoubleExtraSmall font, else S; semi-bold, In_FontSize) around the label
    (UBTConnect_Utils.CW_Share.ShareSheet_SectionTitle.mvc.js view, Options of TdcI56Gcc02tkixDmQiJlQ). */
export function ShareSheetSectionTitle({
  id,
  inLabel = '',
  inFontSize = UBT_FontSize.Small,
}: ShareSheetSectionTitleProps) {
  return (
    <OSBlock name="CW_Share.ShareSheet_SectionTitle" id={id}>
      <CustomContainer
        options={{
          PaddingSize: {
            BottomSizeId: inFontSize === UBT_FontSize.DoubleExtraSmall ? UBT_Size.ExtraSmall : UBT_Size.Small,
          },
          TextOptions: { FontSize: inFontSize, FontWeight: UBT_FontWeight.SemiBold },
        }}
      >
        <div data-container="">
          <span data-expression="">{inLabel}</span>
        </div>
      </CustomContainer>
    </OSBlock>
  );
}
