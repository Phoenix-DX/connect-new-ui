// @os-block UBTConnectLibrary.OutSystemsUIOverrides.IconBadge
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Badge } from '../Badge';
import { UBT_Color } from '../lib/staticEntities';

export interface IconBadgeProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Long Integer, as text. */
  number?: string;
  /** UBT_Color identifier (default UBT_Color.Primary). */
  color?: string;
  isLight?: boolean;
  extendedClass?: string;
  maxNumber?: number;
  /** Placeholder Icon. */
  icon?: ReactNode;
}

/* Badge gets MaxNumber, Color, Number and IsLight; its Size, Shape and ExtendedClass keep their defaults. */
export function IconBadge({
  id,
  number = '0',
  color = UBT_Color.Primary,
  isLight = false,
  extendedClass = '',
  maxNumber = 9,
  icon,
}: IconBadgeProps) {
  return (
    <OSBlock name="OutSystemsUIOverrides.IconBadge" id={id}>
      <div className={`icon-badge ${extendedClass}`} data-container="">
        <div>{icon}</div>
        <Badge maxNumber={maxNumber} color={color} number={number} isLight={isLight} />
      </div>
    </OSBlock>
  );
}
