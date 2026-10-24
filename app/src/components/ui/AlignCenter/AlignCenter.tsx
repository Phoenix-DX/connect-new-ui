/** @origin OutSystemsUI_2_23.Utilities.AlignCenter */
// @os-block OutSystemsUI_2_23.Utilities.AlignCenter
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

export interface AlignCenterProps {
  /** OutSystems instance id of the block. */
  id?: string;
  isHorizontal?: boolean;
  extendedClass?: string;
  children?: ReactNode;
}

/** Placeholder "Content" with `vertical-align flex-direction-row|column` + ExtendedClass
    (p:OutSystemsUI_2_23.Utilities.AlignCenter.mvc.js view; no client actions). */
export function AlignCenter({ id, isHorizontal = true, extendedClass = '', children }: AlignCenterProps) {
  const className =
    'vertical-align' +
    ' ' +
    (isHorizontal ? 'flex-direction-row' : 'flex-direction-column') +
    (extendedClass === '' ? '' : ' ' + extendedClass);
  return (
    <OSBlock name="Utilities.AlignCenter" id={id}>
      <div className={className}>{children}</div>
    </OSBlock>
  );
}
