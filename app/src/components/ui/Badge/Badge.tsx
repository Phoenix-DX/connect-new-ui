/** @origin UBTConnectLibrary.OutSystemsUIOverrides.Badge */
// @os-block UBTConnectLibrary.OutSystemsUIOverrides.Badge
import { OSBlock } from '@/components/ui/os/OSBlock';
import { getClass_BackgroundColor } from '@/shared/UBTConnectLibrary/lib/actions';
import { Shape, UBT_Color } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface BadgeProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Long Integer, as text. */
  number?: string;
  /** UBT_Color identifier (default UBT_Color.Primary). */
  color?: string;
  /** Size identifier ("badge-" + Size; captured `xs`). */
  size?: string;
  /** Shape identifier (default Shape.Rounded). */
  shape?: string;
  isLight?: boolean;
  extendedClass?: string;
  maxNumber?: number;
}

/** Container style (Badge.mvc.js:229-234) and expression If(Number <= MaxNumber, Number, MaxNumber + "+"). */
export function Badge({
  id,
  number = '0',
  color = UBT_Color.Primary,
  size = '',
  shape = Shape.Rounded,
  isLight = false,
  extendedClass = '',
  maxNumber = 9,
}: BadgeProps) {
  const className =
    `ubt-badge badge${size !== '' ? ` badge-${size}` : ''} border-radius-${shape}` +
    (isLight
      ? ` ${getClass_BackgroundColor(color)}-lightest text-${color}-darker`
      : ` ${getClass_BackgroundColor(color)}`) +
    ` ${extendedClass}`;
  const value = BigInt(number) <= BigInt(maxNumber) ? number : `${String(maxNumber)}+`;
  return (
    <OSBlock name="OutSystemsUIOverrides.Badge" id={id}>
      <div className={`${className} OSInline`} data-container="">
        <span className="OSFillParent" data-expression="">
          {value}
        </span>
      </div>
    </OSBlock>
  );
}
