import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomContainer } from '@/components/ui/CustomContainer';
import { UBT_Color, UBT_Size } from '@/lib/ubtConnectLibrary/staticEntities';

export interface SectionProps {
  /** OutSystems instance id of the block (e.g. `b4-$b1`). */
  id: string;
  isTransparentBackground?: boolean;
  addHorizontalPadding?: boolean;
  /** UBT_Size identifier ("" = none). */
  marginTopSizeId?: string;
  /** Placeholder Header. */
  header?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
}

/** UBTConnect App_Common_Blocks.Section (Section.mvc.js:172-235): one CustomContainer (transparent or neutral-0
    background, vertical padding small, horizontal base when AddHorizontalPadding, margin top) holding the Header and
    Content placeholders (captured dom/default.html:123-129).
    @origin UBTConnect.App_Common_Blocks.Section */
export function Section({
  id,
  isTransparentBackground = false,
  addHorizontalPadding = true,
  marginTopSizeId = '',
  header,
  content,
}: SectionProps) {
  const scope = id.replace('$', '');
  return (
    <OSBlock name="App_Common_Blocks.Section" id={id}>
      <CustomContainer
        id={`${scope}-$b1`}
        options={{
          Background: { BackgroundColor: isTransparentBackground ? UBT_Color.Transparent : UBT_Color.Neutral0 },
          PaddingSize: {
            VerticalSizeId: UBT_Size.Small,
            HorizontalSizeId: addHorizontalPadding ? UBT_Size.Base : undefined,
          },
          MarginSize: { TopSizeId: marginTopSizeId || undefined },
        }}
      >
        <div id={`${scope}-Header`}>{header}</div>
        <div id={`${scope}-Content`}>{content}</div>
      </CustomContainer>
    </OSBlock>
  );
}
