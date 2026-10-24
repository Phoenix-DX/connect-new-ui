/** @origin UBTConnect.App_Common_Blocks.SectionSeparator */
// @os-block UBTConnect.App_Common_Blocks.SectionSeparator
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_Size } from '@/shared/UBTConnect/lib/staticEntities';

export interface SectionSeparatorProps {
  /** OutSystems instance id of the block. */
  id?: string;
}

/** A neutral-4 strip, padding top xs (UBTConnect.App_Common_Blocks.SectionSeparator.mvc.js, ContactUsDetails copy,
    internalRender). */
export function SectionSeparator({ id }: SectionSeparatorProps) {
  return (
    <OSBlock name="App_Common_Blocks.SectionSeparator" id={id}>
      <CustomContainer
        options={{
          Background: { BackgroundColor: UBT_Color.Neutral4 },
          PaddingSize: { TopSizeId: UBT_Size.ExtraSmall },
        }}
      />
    </OSBlock>
  );
}
