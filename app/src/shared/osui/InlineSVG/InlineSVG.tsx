// @os-block OutSystemsUI_2_23.Utilities.InlineSVG
import { OSBlock } from '../../../components/OSBlock';

export interface InlineSVGProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** SVGCode: SVG markup, inserted as is (the OutSystems UI provider sets it as innerHTML). */
  svgCode?: string;
  extendedClass?: string;
}

/** The provider's container is the block's `SVG` widget: id `<instance>-SVG` (PINUnlock dom: `b1-b1-b2-b1-b1-SVG` for
    instance `b1-b1-b2-b1-$b1`; HF dom: `b13-b2-b1-b2-b1-b1-SVG`). */
export function InlineSVG({ id, svgCode = '', extendedClass = '' }: InlineSVGProps) {
  const className = ['osui-inline-svg svg-wrapper OSInline', extendedClass].filter(Boolean).join(' ');
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Utilities.InlineSVG" id={id}>
      <div
        className={className}
        data-container=""
        id={prefix === undefined ? undefined : `${prefix}-SVG`}
        style={{ height: '100%' }}
        dangerouslySetInnerHTML={{ __html: svgCode }}
      />
    </OSBlock>
  );
}
