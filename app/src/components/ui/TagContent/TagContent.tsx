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
  /** In_VerticalPaddingSizeId: UBT_Size identifier, default ExtraSmall (live TagContent.mvc.js:39-41). */
  inVerticalPaddingSizeId?: string;
  /** In_HorizontalPaddingSizeId: UBT_Size identifier, default Small (live TagContent.mvc.js:45-47). */
  inHorizontalPaddingSizeId?: string;
  /** In_ShapeId: UBT_Shape identifier, default Rounded (live TagContent.mvc.js:51-53). */
  inShapeId?: string;
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
  inVerticalPaddingSizeId = UBT_Size.ExtraSmall,
  inHorizontalPaddingSizeId = UBT_Size.Small,
  inShapeId = UBT_Shape.Rounded,
  onClicked,
}: TagContentProps) {
  return (
    <OSBlock name="ConnectPatterns.TagContent" id={id}>
      <CustomContainer
        extendedClasses={formatClasses(formatClasses(MAIN_CONTAINER_CLASS, 'inline-block'), extendedClasses)}
        options={{
          Background: { BackgroundColor: backgroundColorId },
          // Options (live TagContent.mvc.js:244-284): the padding and the radius come from the three inputs.
          PaddingSize: { VerticalSizeId: inVerticalPaddingSizeId, HorizontalSizeId: inHorizontalPaddingSizeId },
          BorderOptions: { Radius: { GeneralSizeId: inShapeId } },
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
