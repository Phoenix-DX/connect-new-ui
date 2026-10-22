import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { useLayoutEffect, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CustomText } from '@/shared/UBTConnectLibrary/CustomText';
import { sVGHeader_GetPath } from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_FontSize, UBT_FontWeight } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { SVG_Background_Custom } from '@/shared/UBTConnectLibrary/SVG_Background_Custom';
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

/** Local variables MergeDurationInSeconds and InitialD with their defaults (LoadingDots.mvc.js:13-18). */
const MERGE_DURATION_IN_SECONDS = 1;
const INITIAL_D = 'M 100,50 A 50,50 0 1,0 0,50 A 50,50 0 1,0 100,50';

/** The SVG_Background_Custom container of this block, found as AnimateJS does (:625). Its classes are changed with
    classList like the original JS node, because the shared block has no class input. */
const svgContainer = () => document.querySelector('.ubt-svg-container:has(.ubt-loading-svg)');

/** UBTConnectLibrary ConnectPatterns.LoadingDots (p:UBTConnectLibrary.ConnectPatterns.LoadingDots.mvc.js; view
    :178-320, controller :380-470, JS nodes :612-716). OnReady and ParametersChanged run Action_HandleMerge:
    isTriggerAnimation False → AddBounceJS, True → AnimateJS. */
export function LoadingDots({
  id,
  isTriggerAnimation,
  inHeaderFinalHeightPercentage,
  inFinalCurvaturePercentage,
  onAnimationComplete,
}: LoadingDotsProps) {
  const prefix = id.replace('$', '');
  // AnimateJS after the merge wait: the dots lose ubt-bounce, the dots and the text get ubt-hide
  const [merged, setMerged] = useState(false);
  const hidden = isTriggerAnimation && merged;
  const animationComplete = useRef(onAnimationComplete);
  useLayoutEffect(() => {
    animationComplete.current = onAnimationComplete;
  });

  // OnReady JavaScript1 (:612-615): gsap.registerPlugin(MorphSVGPlugin)
  useLayoutEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin);
  }, []);

  useLayoutEffect(() => {
    if (!isTriggerAnimation) {
      // AddBounceJS (:696-716): the dots bounce and show (`hidden` is false while isTriggerAnimation is False)
      const svg = document.querySelector('.ubt-svg-container');
      svg?.classList.remove('ubt-loading-svg-complete');
      svg?.classList.remove('ubt-fall-expand');
      svg?.querySelector('svg path')?.setAttribute('d', INITIAL_D);
      return;
    }
    // AnimateJS (:617-692, Q1 answered A: GSAP as compiled). The container already has ubt-loading-header-animation
    // from its class expression.
    const svg = svgContainer();
    const svgPath = svg?.querySelector('svg path') ?? null;
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(
      setTimeout(
        () => {
          svg?.classList.add('ubt-fall-expand');
          setMerged(true);
          if (svgPath !== null) {
            gsap.fromTo(
              svgPath,
              { scale: 0, transformOrigin: '50% 100%' },
              {
                scale: 4,
                transformOrigin: '50% 50%',
                duration: 1.5,
                ease: 'power2.out',
                onComplete: () => {
                  gsap.to(svgPath, {
                    duration: 0.5,
                    scale: 4,
                    transformOrigin: '50% 25%',
                    ease: 'power2.inOut',
                    morphSVG: { shape: 'M0,0 H100 V100 H0 Z', type: 'rotational' },
                    onComplete: () => {
                      gsap.to(svgPath, {
                        scale: 1,
                        duration: 1,
                        ease: 'power2.inOut',
                        morphSVG: {
                          // SVGHeader_GetPath(FInalHeight, FinalCurvaturePercentage, 0)
                          shape: sVGHeader_GetPath(inHeaderFinalHeightPercentage, inFinalCurvaturePercentage),
                          type: 'rotational',
                        },
                        onStart: () => {
                          gsap.set(svgPath, { clearProps: 'transform, scale' });
                        },
                        onComplete: () => {
                          // Action_AnimationCompleted → event AnimationComplete
                          animationComplete.current?.();
                        },
                      });
                    },
                  });
                },
              },
            );
          }
          timers.push(
            setTimeout(() => {
              svg?.classList.add('ubt-loading-svg-complete');
              svg?.classList.remove('ubt-fall-expand');
            }, 2000),
          );
        },
        MERGE_DURATION_IN_SECONDS * 1000 + 200,
      ),
    );
    return () => {
      timers.forEach(clearTimeout);
      if (svgPath !== null) gsap.killTweensOf(svgPath);
      setMerged(false);
    };
  }, [isTriggerAnimation, inHeaderFinalHeightPercentage, inFinalCurvaturePercentage]);

  const dotClass = `ubt-loading-dots__dot${hidden ? '' : ' ubt-bounce'}`;
  const dotStyle = isTriggerAnimation ? { transition: `left ${MERGE_DURATION_IN_SECONDS}s` } : undefined;
  return (
    <OSBlock name="ConnectPatterns.LoadingDots" id={id}>
      <SVG_Background_Custom id={`${prefix}-$b1`} inPath={INITIAL_D} inExtendedClass="ubt-loading-svg " />
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
