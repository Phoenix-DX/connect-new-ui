// @os-block UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper
import { OSBlock } from '@/components/ui/os/OSBlock';
import { SVG_Background_Custom } from '../SVG_Background_Custom';

export interface SVG_Background_LoginWrapperProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inExtendedClass?: string;
  /** Event OnPathCalculated. */
  onOnPathCalculated?: () => void;
}

/** The login background: SVG_Background_Custom with height 90 % and curvature 105 %
    (p:UBTConnectLibrary.Layouts.SVG_Background_LoginWrapper.mvc.js view). */
export function SVG_Background_LoginWrapper({
  id,
  inExtendedClass = '',
  onOnPathCalculated,
}: SVG_Background_LoginWrapperProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Layouts.SVG_Background_LoginWrapper" id={id}>
      <SVG_Background_Custom
        id={prefix === undefined ? undefined : `${prefix}-$b1`}
        inHeightPercentage={90}
        inExtendedClass={inExtendedClass}
        inCurvaturePercentage={105}
        onOnPathCalculated={onOnPathCalculated}
      />
    </OSBlock>
  );
}
