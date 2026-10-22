// @os-block Connect2_OrbitMobile_MUI.UtilityFlow.ErrorScreen
import { useCallback, useRef, useState } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { osImage } from '@/legacy/os/os-assets';
import { styleFromCssText } from '../../lib/cssText';

export interface ErrorScreenProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** In_ErrorMessage (default "No information available."). */
  inErrorMessage?: string;
  /** In_MatchMainContentHeight: the box takes the height of `.main-content` (default false). */
  inMatchMainContentHeight?: boolean;
}

const BASE_STYLE =
  'height: 40em; padding-bottom: var(--space-xl); padding-left: var(--space-xl); padding-right: var(--space-xl); padding-top: var(--space-xl);';

/** Error / empty screen of the LDM screens (ErrorScreen.mvc.js view :139-199): container LoadMoreData with
    BASE_STYLE + `height: <Height>px;` when In_MatchMainContentHeight (the later height wins, captured 723px), then
    `error-screen-info OSInline` with the no_events image and In_ErrorMessage (`margin-top-m`).
    OnReady (controller :230-250, JS node SetHeight :322-329): when In_MatchMainContentHeight, Height =
    `document.querySelector('.main-content').clientHeight` (Height starts at 0).
    The inner container's extended style `margin-top: -27em !important;` is not rendered: a React style value cannot
    carry `!important`, so the browser rejects it (the capture has no style on that element). */
export function ErrorScreen({
  id,
  inErrorMessage = 'No information available.',
  inMatchMainContentHeight = false,
}: ErrorScreenProps) {
  const [height, setHeight] = useState(0);
  /* OnReady runs once, when the block is mounted (no OnParametersChanged handler in the controller). */
  const matchOnReady = useRef(inMatchMainContentHeight);
  const onReady = useCallback((el: HTMLDivElement | null) => {
    // The original's JS node throws when there is no `.main-content`; inside a layout there always is one.
    if (el && matchOnReady.current) setHeight(document.querySelector('.main-content')?.clientHeight ?? 0);
  }, []);
  return (
    <OSBlock name="UtilityFlow.ErrorScreen" id={id}>
      <div
        ref={onReady}
        data-container=""
        style={styleFromCssText(BASE_STYLE + (inMatchMainContentHeight ? `height: ${String(height)}px;` : ''))}
      >
        <div className="error-screen-info OSInline" data-container="">
          <img data-image="" src={osImage('img/Connect2_OrbitMobile_MUI.no_events.png')} />
          <span className="margin-top-m" data-expression="">
            {inErrorMessage}
          </span>
        </div>
      </div>
    </OSBlock>
  );
}
