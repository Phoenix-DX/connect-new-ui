// @os-block UBTConnectLibrary.Layouts.SVG_Background_Custom
import { useEffect, useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { InlineSVG } from '../../osui/InlineSVG';
import { formatClasses, sVGHeader_GetPath } from '../lib/actions';

export interface SVG_Background_CustomProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_Path: a ready SVG path; empty → SVGHeader_GetPath of the two percentages. */
  inPath?: string;
  inHeightPercentage?: number;
  inCurvaturePercentage?: number;
  inExtendedClass?: string;
  /** Event OnPathCalculated (raised by the InlineSVG Initialized event). */
  onOnPathCalculated?: () => void;
}

/** SVGCode of the InlineSVG, verbatim (p:UBTConnectLibrary.Layouts.SVG_Background_Custom.mvc.js:202). */
const svgCode = (path: string) =>
  "<svg viewBox=\"0 0 100 200\" preserveAspectRatio=\"none\">\r\n<defs>\r\n    <linearGradient id='primaryGradient' x1='0%' x2='100%'  y1='0%' y2='0%'>\r\n        <stop offset='0%' stop-color='var(--color-primary,#00819C)'/>\r\n        <stop offset='100%' stop-color='var(--color-cyan,#4EAEC2)'/>\r\n    </linearGradient>\r\n</defs>\r\n<path d='" +
  path +
  "' fill='url(#primaryGradient)'/>\r\n</svg>";

/** Curved gradient background. CalculatePath runs on initialize, ready and parameter changes (:296-330): In_Path when
    set, else SVGHeader_GetPath(In_HeightPercentage, In_CurvaturePercentage, 0); a pure value here. The InlineSVG is
    rendered only for a non-empty path (:197-224). */
export function SVG_Background_Custom({
  id,
  inPath = '',
  inHeightPercentage = 100,
  inCurvaturePercentage = 100,
  inExtendedClass = '',
  onOnPathCalculated,
}: SVG_Background_CustomProps) {
  const path = inPath !== '' ? inPath : sVGHeader_GetPath(inHeightPercentage, inCurvaturePercentage);
  const event = useRef(onOnPathCalculated);
  useLayoutEffect(() => {
    event.current = onOnPathCalculated;
  });
  useEffect(() => {
    if (path !== '') event.current?.();
  }, [path]);
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Layouts.SVG_Background_Custom" id={id}>
      <div className="ubt-svg-container ubt-svg-container-full-height" data-container="">
        {path !== '' && (
          <InlineSVG
            id={prefix === undefined ? undefined : `${prefix}-$b1`}
            svgCode={svgCode(path)}
            extendedClass={formatClasses('ubt-header-svg', inExtendedClass)}
          />
        )}
      </div>
    </OSBlock>
  );
}
