/** @origin Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge */
// @os-block Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { styleFromCssText } from '@/lib/cssText';

export interface ResultItemBadgeProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** BackgroundColor: CSS colour of the circle (default "var(--color-neutral-2)"). */
  backgroundColor?: string;
  /** Size: CSS length used for height and width (default "40"; a number without unit renders in px, as the original
      does: the AssembleDetail capture of 2026-11-06 shows `height: 40px; width: 40px;` for the default). */
  size?: string;
  /** Placeholder Icon. */
  children?: ReactNode;
}

/** A Size without unit ("40", the compiled default) as the OutSystems runtime renders it ("40px"); any other value
    stays as it is. */
const sizeLength = (size: string): string => (/^\d+(\.\d+)?$/.test(size) ? `${size}px` : size);

/** Round badge of a result card (p:migration/sources/survey/Connect2_LegacyShared.NewConnect_Utilities.
    NC_Result_Item_Badge.mvc.js view :172-185): the Icon placeholder, `border-radius-circle center display-flex`, inline
    style `background-color:<BackgroundColor>; height:<Size>; width:<Size>`. */
export function ResultItemBadge({
  id,
  backgroundColor = 'var(--color-neutral-2)',
  size = '40',
  children,
}: ResultItemBadgeProps) {
  const length = sizeLength(size);
  return (
    <OSBlock name="NewConnect_Utilities.NC_Result_Item_Badge" id={id}>
      <div
        className="border-radius-circle center display-flex"
        style={styleFromCssText(`background-color:${backgroundColor}; height:${length}; width:${length}`)}
      >
        {children}
      </div>
    </OSBlock>
  );
}
