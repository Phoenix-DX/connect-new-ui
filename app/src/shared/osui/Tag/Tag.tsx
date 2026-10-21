// @os-block OutSystemsUI_2_23.Content.Tag
import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Color, Shape } from '../lib/staticEntities';

export interface TagProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Color identifier (default Color.Primary). */
  color?: string;
  /** Size identifier ("" = none, the default): adds `tag-<Size>`. */
  size?: string;
  /** Shape identifier (default Shape.Rounded): `border-radius-<Shape>`. */
  shape?: string;
  /** IsLight: `background-<Color>-lightest text-<Color>-darker` instead of `background-<Color>` (default false). */
  isLight?: boolean;
  extendedClass?: string;
  /** Placeholder Tag. */
  children?: ReactNode;
}

/** Tag Style of the compiled view (p:migration/screens/AssembleEvents/analysis/sources/pretty/OutSystemsUI_2_23.Content.
    Tag.mvc.js view :160-190). */
export function tagClass(color: string, size: string, shape: string, isLight: boolean, extendedClass: string): string {
  return (
    'tag' +
    (size !== '' ? ` tag-${size}` : '') +
    ' border-radius-' +
    shape +
    (isLight ? ` background-${color}-lightest text-${color}-darker` : ` background-${color}`) +
    (extendedClass === '' ? '' : ` ${extendedClass}`)
  );
}

/** OutSystems UI Tag: the Tag placeholder (grid class `OSInline`) with the classes of `tagClass`. */
export function Tag({
  id,
  color = Color.Primary,
  size = '',
  shape = Shape.Rounded,
  isLight = false,
  extendedClass = '',
  children,
}: TagProps) {
  return (
    <OSBlock name="Content.Tag" id={id}>
      <div className={`${tagClass(color, size, shape, isLight, extendedClass)} OSInline`}>{children}</div>
    </OSBlock>
  );
}
