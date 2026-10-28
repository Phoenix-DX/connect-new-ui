/** @origin OutSystemsUI_2_23.Content.Tooltip */
// @os-block OutSystemsUI_2_23.Content.Tooltip
import {
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type Ref,
} from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { computeBalloonPosition, type ArrowPosition, type BalloonSide } from './balloonPosition';

/* OutSystems UI Tooltip: the view of OutSystemsUI_2_23.Content.Tooltip.mvc.js (internalRender :168-247) and the OnClick
   path of the OSUI provider (migration/runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js, `W<n>` = character offset):
   the Tooltip pattern (W646155-668600), the Balloon feature (W104243-120900) and the FloatingUI provider
   (W1276300-1281400). The facts are T1-T5 of migration/clarify/review/item5-tooltip-loader.md; the behaviours B1-B15
   are section 2.4 of item5-solution.md. The position math is in balloonPosition.ts. Not ported (section 2.4): the
   hover path, the close when another balloon opens (O5), the Initialized event, the auto placement, the close on a
   window resize (only with useTriggerWidth). */

/** OSUI.Constants.FocusableElems and HTMLAttributes.AllowEventPropagation (W6029-6300, W19952). */
const FOCUSABLE_ELEMS =
  'a[href]:not([disabled]), [tabindex="0"], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])';
const ALLOW_EVENT_PROPAGATION = '[data-allow-event-propagation=true], [data-allow-event-propagation=True]';
/** OSUI.Constants.AllowPropagationAttr (W6019), read by the blur check. */
const ALLOW_PROPAGATION_ATTR = '[data-allow-event-propagation]';

/** The client actions TooltipOpen and TooltipClose (T2; W882279, W880158) for the block's owner. */
export interface TooltipHandle {
  /** open (W663830): opens when the balloon is closed. */
  open: () => void;
  /** close (W663271): closes when the balloon is open. */
  close: () => void;
}

interface TooltipProps {
  /** OutSystems instance id of the block (the OSBlock id). */
  id: string;
  /** Trigger (Tooltip.mvc.js:28). Only OnClick is ported: IsHover = not IsPhone and Trigger = OnHover
      (Tooltip.mvc.js:586-592) is false for the one instance of the app (T1, T5). */
  trigger: 'OnClick';
  /** Position (Tooltip.mvc.js:16); default Right (TooltipConfig W667600). Read at every open (B15). */
  position?: BalloonSide;
  /** StartsOpen (Tooltip.mvc.js:22); default false. Read at build only: later changes do nothing (W662727). */
  startsOpen?: boolean;
  /** ExtendedClass (Tooltip.mvc.js:34): classes on `.osui-tooltip` (W184573). */
  extendedClass?: string;
  /** Placeholder Content (the anchor). */
  content: ReactNode;
  /** Placeholder Tooltip (the balloon text). */
  tooltip: ReactNode;
  /** Event OnToggle(IsOpen) (Tooltip.mvc.js:482-514): each open and close (_triggerOpen W655724, _triggerClose
      W655010). */
  onToggle?: (isOpen: boolean) => void;
  /** TooltipOpen and TooltipClose (decision B a). */
  ref?: Ref<TooltipHandle>;
}

/** The floating state: the position variables, the placement class and the arrow style. The placement class and the
    arrow style stay after a close; only x and y go to 0, 50 ms later (unsetFloatingPosition W1281400). */
interface Floating {
  x: string;
  y: string;
  placement: BalloonSide;
  arrow: ArrowPosition;
}

const px = (n: number) => `${String(n)}px`;

/** The arrow style (W1279300-1280300) in px, in the order of the provider's Object.assign. */
function arrowStyle(arrow: ArrowPosition): CSSProperties {
  const style: Record<string, string> = {};
  for (const key of ['left', 'top', 'right', 'bottom'] as const) {
    const value = arrow[key];
    if (value !== undefined) style[key] = px(value);
  }
  return style;
}

/** Content.Tooltip. Markup (Tooltip.mvc.js:181-247, the balloon branch always rendered): `div.osui-tooltip[name]` (the
    unique id, decision O2: useId) > the Content placeholder `div.osui-tooltip__content`, then
    `div.osui-tooltip__balloon-wrapper.osui-balloon[data-uniqueid]` > the Tooltip placeholder
    `div.osui-tooltip__balloon-wrapper__balloon.OSInline` and `div.osui-tooltip__balloon-arrow`. Inner ids
    `<id>-<Name>` (decision O3, the PhotoLazyLoaded pattern). Build (W658548-658880, Balloon build W116600): role
    button, aria-describedby, tabindex 0 and default-tabindex-element on the content; role tooltip, aria-hidden, the
    width max-content and the shape sharp on the balloon. The open state lives here, as in the provider (_isOpen,
    W646900); the owner opens and closes through the ref handle (TooltipOpen, TooltipClose). */
export function Tooltip({
  id,
  position = 'right',
  startsOpen = false,
  extendedClass = '',
  content,
  tooltip,
  onToggle,
  ref,
}: TooltipProps) {
  const prefix = id.replace('$', '');
  const ids = {
    wrapper: `${prefix}-TooltipWrapper`,
    content: `${prefix}-Content`,
    balloonWrapper: `${prefix}-TooltipBallonWrapper`,
    tooltip: `${prefix}-Tooltip`,
    arrow: `${prefix}-ArrowElement`,
  };
  const uniqueId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const balloonRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [floating, setFloating] = useState<Floating | null>(null);
  const openRef = useRef(false);
  const onToggleRef = useRef(onToggle);
  const resetTimer = useRef<number | undefined>(undefined);
  const blurTimer = useRef<number | undefined>(undefined);
  /** _tooltipBalloonContentActiveElem (W648757): the element the blur check listens to. */
  const blurTarget = useRef<Element | null>(null);
  useLayoutEffect(() => {
    onToggleRef.current = onToggle;
  });

  /** _triggerOpen (W655724) and _triggerClose (W655010) with the Balloon _toggleBalloon (W114253): the
      is-open classes and aria-hidden from the state, OnToggle, and on close the 50 ms reset of x and y. The provider
      raises OnToggle a tick later, and twice on a close by the API; the app has no OnToggle handler (T1), so it is
      raised once, at once. */
  const setOpen = useCallback((next: boolean) => {
    if (openRef.current === next) return;
    openRef.current = next;
    setIsOpen(next);
    if (!next) {
      resetTimer.current = window.setTimeout(() => {
        setFloating((f) => f && { ...f, x: '0', y: '0' });
      }, 50);
    }
    onToggleRef.current?.(next);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        setOpen(true);
      },
      close: () => {
        setOpen(false);
      },
    }),
    [setOpen],
  );

  // _setCssClasses (W651491): StartsOpen opens at build (B11).
  const startsOpenAtBuild = useRef(startsOpen);
  useLayoutEffect(() => {
    if (startsOpenAtBuild.current) setOpen(true);
  }, [setOpen]);

  /** _onBlur (W648757), one tick later: close only when the focus is now inside another `.osui-tooltip` (with no
      allow-propagation element); else listen to the blur of the focused element and check again then (B3). */
  const onBlurCheck = useCallback(
    function check() {
      window.clearTimeout(blurTimer.current);
      blurTimer.current = window.setTimeout(() => {
        blurTarget.current?.removeEventListener('blur', check);
        const closest = document.activeElement?.closest('.osui-tooltip') ?? null;
        if (closest !== rootRef.current && closest?.contains(closest.querySelector(ALLOW_PROPAGATION_ATTR)) === false) {
          setOpen(false);
        } else {
          blurTarget.current = document.activeElement;
          blurTarget.current?.addEventListener('blur', check);
        }
      }, 0);
    },
    [setOpen],
  );

  // B8: the Balloon body click (_bodyClickCallback W104610; BodyOnClick listener on document.body W64972),
  // added a tick after the open (AsyncInvocation of _setEventListeners, W114773) and removed on close.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onBodyClick = (e: globalThis.MouseEvent) => {
      const target = e.target instanceof Node ? e.target : null;
      const anchor = contentRef.current;
      const balloon = balloonRef.current;
      if (!anchor || !balloon) return;
      if (target === anchor || anchor.contains(target) || balloon.contains(target)) return;
      if (openRef.current) {
        setOpen(false);
        e.stopPropagation();
      }
    };
    const timer = window.setTimeout(() => {
      document.body.addEventListener('click', onBodyClick);
    }, 0);
    return () => {
      window.clearTimeout(timer);
      document.body.removeEventListener('click', onBodyClick);
    };
  }, [isOpen, setOpen]);

  // B12, B13: setFloatingPosition at each open (W1276300-1281200), re-run on scroll and resize while open (autoUpdate
  // W1281188); its cleanup on close (unsetFloatingPosition W1281400).
  useLayoutEffect(() => {
    if (!isOpen) return undefined;
    const update = () => {
      const anchor = contentRef.current;
      const balloon = balloonRef.current;
      const arrow = arrowRef.current;
      if (!anchor || !balloon || !arrow) return;
      const anchorRect = anchor.getBoundingClientRect();
      const balloonRect = balloon.getBoundingClientRect();
      const result = computeBalloonPosition({
        anchor: { left: anchorRect.left, top: anchorRect.top, width: anchorRect.width, height: anchorRect.height },
        balloon: { width: balloonRect.width, height: balloonRect.height },
        balloonClient: { width: balloon.clientWidth, height: balloon.clientHeight },
        arrowSize: arrow.offsetWidth,
        cssOffset: Number.parseInt(getComputedStyle(anchor).getPropertyValue('--osui-floating-offset'), 10),
        viewport: { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight },
        scroll: { x: window.scrollX, y: window.scrollY },
        placement: position,
      });
      setFloating({ x: px(result.x), y: px(result.y), placement: result.placement, arrow: result.arrow });
    };
    update();
    window.addEventListener('scroll', update, { capture: true, passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update, { capture: true });
      window.removeEventListener('resize', update);
    };
  }, [isOpen, position]);

  // B14: OnDestroy → TooltipDestroy (Tooltip.mvc.js:532-556, dispose W663478).
  useEffect(
    () => () => {
      window.clearTimeout(resetTimer.current);
      window.clearTimeout(blurTimer.current);
      blurTarget.current?.removeEventListener('blur', onBlurCheck);
    },
    [onBlurCheck],
  );

  /** _onClick (W650060): open; the click does not reach the body (B1). */
  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen(true);
  };
  /** _onkeypressCallback (W650924): Esc while open, or Tab, closes; the key does not propagate (B4). */
  const onContentKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if ((openRef.current && e.key === 'Escape') || e.key === 'Tab') setOpen(false);
    e.stopPropagation();
  };
  /** The focus and blur listeners are on the content itself (_setUpEvents W651874): focus events of its children do
      not count. */
  const onContentFocus = (e: FocusEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setOpen(true);
  };
  const onContentBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onBlurCheck();
  };
  /** _onBalloonClick (W647511): a click inside the balloon stops there, unless it is on a focusable child (B9). */
  const onBalloonClick = (e: MouseEvent<HTMLDivElement>) => {
    const clickable = [...e.currentTarget.querySelectorAll(`${FOCUSABLE_ELEMS}, ${ALLOW_EVENT_PROPAGATION}`)];
    if (!clickable.includes(e.target as Element)) e.stopPropagation();
  };

  const nameAttribute: Record<string, string> = { name: uniqueId };
  const rootClass = ['osui-tooltip', extendedClass, isOpen ? 'osui-tooltip--is-open' : ''].filter(Boolean).join(' ');
  const balloonClass = [
    'osui-tooltip__balloon-wrapper osui-balloon',
    isOpen ? 'osui-balloon--is-open osui-tooltip__balloon-wrapper--is-open' : '',
    floating?.placement ?? '',
  ]
    .filter(Boolean)
    .join(' ');
  const balloonStyle: Record<string, string> = {
    '--osui-balloon-width': 'max-content',
    '--osui-balloon-shape': 'var(--border-radius-sharp)',
  };
  if (floating) {
    balloonStyle['--osui-floating-position-y'] = floating.y;
    balloonStyle['--osui-floating-position-x'] = floating.x;
  }
  return (
    <OSBlock name="Content.Tooltip" id={id}>
      <div ref={rootRef} className={rootClass} data-container="" id={ids.wrapper} {...nameAttribute}>
        <div
          ref={contentRef}
          aria-describedby={ids.tooltip}
          className="osui-tooltip__content"
          default-tabindex-element=""
          id={ids.content}
          role="button"
          tabIndex={0}
          onBlur={onContentBlur}
          onClick={onContentClick}
          onFocus={onContentFocus}
          onKeyDown={onContentKeyDown}
        >
          {content}
        </div>
        <div
          ref={balloonRef}
          aria-hidden={isOpen ? 'false' : 'true'}
          className={balloonClass}
          data-container=""
          data-uniqueid={uniqueId}
          id={ids.balloonWrapper}
          role="tooltip"
          style={balloonStyle}
        >
          <div className="osui-tooltip__balloon-wrapper__balloon OSInline" id={ids.tooltip} onClick={onBalloonClick}>
            {tooltip}
          </div>
          <div
            ref={arrowRef}
            className="osui-tooltip__balloon-arrow"
            data-container=""
            id={ids.arrow}
            style={floating ? arrowStyle(floating.arrow) : undefined}
          />
        </div>
      </div>
    </OSBlock>
  );
}
