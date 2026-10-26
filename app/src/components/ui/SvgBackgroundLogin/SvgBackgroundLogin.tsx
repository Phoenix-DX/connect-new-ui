/** @origin UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper */
// @os-block UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper
import { OSBlock } from '@/components/ui/os/OSBlock';
import { SvgBackground } from '@/components/ui/SvgBackground';

export interface SvgBackgroundLoginProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inExtendedClass?: string;
  /** Event OnPathCalculated. */
  onOnPathCalculated?: () => void;
}

/** The login background: SVG_Background_Custom with height 90 % and curvature 105 %
    (p:UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js view). */
export function SvgBackgroundLogin({ id, inExtendedClass = '', onOnPathCalculated }: SvgBackgroundLoginProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Layouts.SVG_Background_LoginWrapper" id={id}>
      <SvgBackground
        id={prefix === undefined ? undefined : `${prefix}-$b1`}
        inHeightPercentage={90}
        inExtendedClass={inExtendedClass}
        inCurvaturePercentage={105}
        onOnPathCalculated={onOnPathCalculated}
      />
    </OSBlock>
  );
}
