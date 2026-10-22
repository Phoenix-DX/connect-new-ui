// @os-block OutSystemsUI_2_23.Interaction.Animate
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { styleFromCssText } from '../../lib/cssText';

export interface AnimateProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** AnimationType identifier (e.g. `top-to-bottom`). */
  animationType?: string;
  /** Delay in ms. */
  delay?: number;
  /** Speed identifier (captured `normal`). */
  speed?: string;
  children?: ReactNode;
}

/** Placeholder "Content" with the animation classes and delay (p:OutSystemsUI_2_23.Interaction.Animate.mvc.js view;
    no client actions). */
export function Animate({ id, animationType = '', delay = 0, speed = '', children }: AnimateProps) {
  return (
    <OSBlock name="Interaction.Animate" id={id}>
      <div
        className={'animate' + ' ' + animationType + ' ' + speed}
        style={styleFromCssText(`-webkit-animation-delay: ${String(delay)}ms;animation-delay: ${String(delay)}ms;`)}
      >
        {children}
      </div>
    </OSBlock>
  );
}
