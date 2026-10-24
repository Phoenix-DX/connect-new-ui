import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { useLayoutEffect, useRef, useState } from 'react';
import { sVGHeader_GetPath } from '@/lib/ubtConnectLibrary/actions';

/** The local variable MergeDurationInSeconds with its default: the time the dots take to merge. */
export const MERGE_DURATION_IN_SECONDS = 1;
/** The local variable InitialD with its default: the path of the SVG background before the animation. */
export const INITIAL_D = 'M 100,50 A 50,50 0 1,0 0,50 A 50,50 0 1,0 100,50';

/** The SVG_Background_Custom container of the loading dots, found as AnimateJS finds it. Its classes are changed with
    classList like the original JS node, because the shared block has no class input. */
const svgContainer = () => document.querySelector('.ubt-svg-container:has(.ubt-loading-svg)');

export interface LoadingDotsAnimationOptions {
  isTriggerAnimation: boolean;
  /** FInalHeight of SVGHeader_GetPath: the final height of the header, in percent. */
  headerFinalHeightPercentage: number;
  /** FinalCurvaturePercentage of SVGHeader_GetPath. */
  finalCurvaturePercentage: number;
  /** Event AnimationComplete. */
  onAnimationComplete?: () => void;
}

/** The animation of the loading dots. OnReady registers MorphSVGPlugin. OnReady and ParametersChanged run
    Action_HandleMerge: isTriggerAnimation False runs AddBounceJS (the dots bounce and show, the SVG path goes back to
    InitialD); True runs AnimateJS (GSAP, Q1 answered A: as compiled): after the merge wait the SVG falls and expands,
    the dots and the text hide, the path scales and morphs into a square and then into the header shape, and the
    event AnimationComplete fires. Returns true while the dots and the text are hidden.
    @origin UBTConnectLibrary.ConnectPatterns.LoadingDots */
export function useLoadingDotsAnimation({
  isTriggerAnimation,
  headerFinalHeightPercentage,
  finalCurvaturePercentage,
  onAnimationComplete,
}: LoadingDotsAnimationOptions): boolean {
  // AnimateJS after the merge wait: the dots lose ubt-bounce, the dots and the text get ubt-hide
  const [merged, setMerged] = useState(false);
  const animationComplete = useRef(onAnimationComplete);
  useLayoutEffect(() => {
    animationComplete.current = onAnimationComplete;
  });

  // OnReady JavaScript1: gsap.registerPlugin(MorphSVGPlugin)
  useLayoutEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin);
  }, []);

  useLayoutEffect(() => {
    if (!isTriggerAnimation) {
      // AddBounceJS: the dots bounce and show (they are not hidden while isTriggerAnimation is False)
      const svg = document.querySelector('.ubt-svg-container');
      svg?.classList.remove('ubt-loading-svg-complete');
      svg?.classList.remove('ubt-fall-expand');
      svg?.querySelector('svg path')?.setAttribute('d', INITIAL_D);
      return;
    }
    // AnimateJS. The container already has ubt-loading-header-animation from its class expression.
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
                          shape: sVGHeader_GetPath(headerFinalHeightPercentage, finalCurvaturePercentage),
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
  }, [isTriggerAnimation, headerFinalHeightPercentage, finalCurvaturePercentage]);

  return isTriggerAnimation && merged;
}
