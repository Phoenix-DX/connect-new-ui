import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  INITIAL_D,
  MERGE_DURATION_IN_SECONDS,
  useLoadingDotsAnimation,
} from '@/pages/Splash/hooks/useLoadingDotsAnimation';
import { CustomText } from '@/components/ui/CustomText';
import { UBT_FontSize, UBT_FontWeight } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SvgBackground } from '@/components/ui/SvgBackground';
import { UBT_Color_Primary } from './staticEntities';

export interface LoadingDotsProps {
  /** OutSystems instance id of the block. */
  id: string;
  isTriggerAnimation: boolean;
  inHeaderFinalHeightPercentage: number;
  inFinalCurvaturePercentage: number;
  /** Event AnimationComplete. */
  onAnimationComplete?: () => void;
}

/** The loading dots: the SVG background (path InitialD), four dots and the "Loading..." text. While isTriggerAnimation
    is True the dots move with a transition of MergeDurationInSeconds and the container gets
    ubt-loading-header-animation; when the dots have merged, the dots stop bouncing and the dots and the text hide.
    The animation is `useLoadingDotsAnimation`.
    @origin UBTConnectLibrary.ConnectPatterns.LoadingDots */
export function LoadingDots({
  id,
  isTriggerAnimation,
  inHeaderFinalHeightPercentage,
  inFinalCurvaturePercentage,
  onAnimationComplete,
}: LoadingDotsProps) {
  const prefix = id.replace('$', '');
  const hidden = useLoadingDotsAnimation({
    isTriggerAnimation,
    headerFinalHeightPercentage: inHeaderFinalHeightPercentage,
    finalCurvaturePercentage: inFinalCurvaturePercentage,
    onAnimationComplete,
  });

  const dotClass = `ubt-loading-dots__dot${hidden ? '' : ' ubt-bounce'}`;
  const dotStyle = isTriggerAnimation ? { transition: `left ${MERGE_DURATION_IN_SECONDS}s` } : undefined;
  return (
    <OSBlock name="ConnectPatterns.LoadingDots" id={id}>
      <SvgBackground id={`${prefix}-$b1`} inPath={INITIAL_D} inExtendedClass="ubt-loading-svg " />
      <div
        className={`ubt-loading-dots${isTriggerAnimation ? ' ubt-loading-header-animation' : ''}${hidden ? ' ubt-hide' : ''}`}
        data-container=""
      >
        <div className={dotClass} data-container="" style={dotStyle} />
        <div className={dotClass} data-container="" style={dotStyle} />
        <div className={dotClass} data-container="" style={dotStyle} />
        <div className={dotClass} data-container="" style={dotStyle} />
      </div>
      <div className={`ubt-loading-text${hidden ? ' ubt-hide' : ''}`} data-container="">
        <CustomText
          id={`${prefix}-$b2`}
          inText="Loading..."
          inTextOptions={{
            Color: UBT_Color_Primary,
            FontSize: UBT_FontSize.Base,
            FontWeight: UBT_FontWeight.SemiBold,
          }}
        />
      </div>
    </OSBlock>
  );
}
