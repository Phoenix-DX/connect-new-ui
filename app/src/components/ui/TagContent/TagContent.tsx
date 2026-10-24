/** @origin UBTConnectLibrary.ConnectPatterns.TagContent */
// @os-block UBTConnectLibrary.ConnectPatterns.TagContent
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { formatClasses } from '@/lib/ubtConnectLibrary/actions';
import { UBT_FontSize, UBT_FontWeight, UBT_Shape, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';

export interface TagContentProps {
  /** OutSystems instance id of the block. */
  id?: string;
  text?: string;
  extendedClasses?: string;
  /** UBT_Color identifier. */
  backgroundColorId?: string;
  /** UBT_Color identifier; no text colour class when empty. */
  textColorId?: string;
  /** Event Clicked. */
  onClicked?: () => void;
}

const MAIN_CONTAINER_CLASS = 'ubt-tag--content';

export function TagContent({
  id,
  text = '',
  extendedClasses = '',
  backgroundColorId = '',
  textColorId = '',
  onClicked,
}: TagContentProps) {
  return (
    <OSBlock name="ConnectPatterns.TagContent" id={id}>
      <CustomContainer
        extendedClasses={formatClasses(formatClasses(MAIN_CONTAINER_CLASS, 'inline-block'), extendedClasses)}
        options={{
          Background: { BackgroundColor: backgroundColorId },
          PaddingSize: { VerticalSizeId: UBT_Size.ExtraSmall, HorizontalSizeId: UBT_Size.Small },
          BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Rounded } },
          TextOptions: {
            Color: textColorId,
            FontSize: UBT_FontSize.DoubleExtraSmall,
            FontWeight: UBT_FontWeight.SemiBold,
          },
        }}
        onClicked={onClicked}
      >
        <span data-expression="">{text}</span>
      </CustomContainer>
    </OSBlock>
  );
}
