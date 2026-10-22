// @os-block UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '../CustomContainer';
import { UBT_Color, UBT_FontSize, UBT_FontWeight, UBT_Shape, UBT_Size } from '../lib/staticEntities';

export interface ImageCard__Content__TagProps {
  /** OutSystems instance id of the block. */
  id?: string;
  content?: string;
}

/** Yellow tag line of an image card (p:UBTConnectLibrary.ConnectPatterns.ImageCard__Content__Tag.mvc.js:144-219): a
    font-size-xs block line holding an inline skeleton CustomContainer (yellow-lighter, medium radius, neutral-9 xs). */
export function ImageCard__Content__Tag({ id, content = '' }: ImageCard__Content__TagProps) {
  return (
    <OSBlock name="ConnectPatterns.ImageCard__Content__Tag" id={id}>
      <div className="font-size-xs" data-container="">
        <div className="OSInline" data-container="">
          <CustomContainer
            options={{
              Background: { BackgroundColor: UBT_Color.YellowLighter },
              PaddingSize: { HorizontalSizeId: UBT_Size.Small },
              BorderOptions: { Radius: { GeneralSizeId: UBT_Shape.Medium } },
              TextOptions: {
                Color: UBT_Color.Neutral9,
                FontSize: UBT_FontSize.ExtraSmall,
                FontWeight: UBT_FontWeight.Regular,
              },
              IsSkeletonElement: true,
            }}
          >
            <span data-expression="">{content}</span>
          </CustomContainer>
        </div>
      </div>
    </OSBlock>
  );
}
