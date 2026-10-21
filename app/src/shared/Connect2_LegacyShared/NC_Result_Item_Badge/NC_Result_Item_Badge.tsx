// @os-block Connect2_LegacyShared.NewConnect_Utilities.NC_Result_Item_Badge
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { styleFromCssText } from '../../lib/cssText';

export interface NC_Result_Item_BadgeProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** BackgroundColor: CSS colour of the circle (default "var(--color-neutral-2)"). */
  backgroundColor?: string;
  /** Size: CSS length used for height and width (default "40", written as is). */
  size?: string;
  /** Placeholder Icon. */
  children?: ReactNode;
}

/** Round badge of a result card (p:migration/blocks/sources/Connect2_LegacyShared.NewConnect_Utilities.
    NC_Result_Item_Badge.mvc.js view :172-185): the Icon placeholder, `border-radius-circle center display-flex`, inline
    style `background-color:<BackgroundColor>; height:<Size>; width:<Size>`. */
export function NC_Result_Item_Badge({
  id,
  backgroundColor = 'var(--color-neutral-2)',
  size = '40',
  children,
}: NC_Result_Item_BadgeProps) {
  return (
    <OSBlock name="NewConnect_Utilities.NC_Result_Item_Badge" id={id}>
      <div
        className="border-radius-circle center display-flex"
        style={styleFromCssText(`background-color:${backgroundColor}; height:${size}; width:${size}`)}
      >
        {children}
      </div>
    </OSBlock>
  );
}
