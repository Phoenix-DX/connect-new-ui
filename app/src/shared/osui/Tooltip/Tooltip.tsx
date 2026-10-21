// @os-block OutSystemsUI_2_23.Content.Tooltip
import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { Position, Trigger } from '../lib/staticEntities';
import { computeFloatingPosition, transformPosition, type FloatingResult } from './position';

export interface TooltipProps {
  /** OutSystems instance id of the block (the TooltipId of the events). */
  id?: string;
  /** Position identifier (default Position.Right). */
  position?: string;
  /** StartsOpen (default false); later changes have no effect, as in OSUI. */
  startsOpen?: boolean;
  /** Trigger identifier (default Trigger.OnHover); on a phone the tooltip always opens on click. */
  trigger?: string;
  extendedClass?: string;
  /** Event OnToggle(TooltipId, IsOpened). */
  onOnToggle?: (tooltipId: string, isOpened: boolean) => void;
  /** Event Initialized(TooltipId). */
  onInitialized?: (tooltipId: string) => void;
  /** Placeholder Content (the element the tooltip is attached to). */
  content?: ReactNode;
  /** Placeholder Tooltip (the balloon text). */
  tooltip?: ReactNode;
}

/** GlobalEnum.CustomEvent.BalloonOnToggle (:473): every balloon announces its toggles on `document`. */
const BALLOON_ON_TOGGLE = 'balloon.onToggle';
/** Constants.FocusableElems (:151) plus the AllowEventPropagation attribute. */
const FOCUSABLE =
  'a[href]:not([disabled]), [tabindex="0"], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [data-allow-event-propagation]';

const isDevice = (type: string) => document.body.classList.contains(type);

/** OutSystems UI Tooltip (p:migration/blocks/sources/OutSystemsUI_2_23.Content.Tooltip.mvc.js view :250-300: the
    `osui-tooltip` wrapper named after the UniqueId, the Content placeholder, the balloon wrapper `osui-balloon` with the
    Tooltip placeholder and the arrow; controller OnInitialize :560-600 (IsHover = not IsPhone and Trigger OnHover or
    empty), OnParametersChanged :420-470). Provider hand-written (stack: no library) from OutSystemsUI.js Tooltip
    :11634-11963 and the Balloon feature :2060-2360: hover opens / closes on desktop (with the balloon hover kept),
    otherwise click (and focus / blur / Escape / Tab when not hover); a click outside, or another balloon opening,
    closes it; OnToggle on each toggle. Never captured. */
export function Tooltip({
  id,
  position = Position.Right,
  startsOpen = false,
  trigger = Trigger.OnHover,
  extendedClass = '',
  onOnToggle,
  onInitialized,
  content,
  tooltip,
}: TooltipProps) {
  const uniqueId = useId();
  const widgetId = id ?? uniqueId;
  const balloonContentId = `${id ? id.replace('$', '') : uniqueId}-Tooltip`;
  const isHover = !isDevice('phone') && (trigger === Trigger.OnHover || trigger === '');
  const [isOpen, setIsOpen] = useState(false);
  const [floating, setFloating] = useState<FloatingResult | null>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const balloonRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const state = useRef({ isOpen: false, iconHover: false, balloonHover: false, openedByApi: false });
  const events = useRef({ onOnToggle, onInitialized, widgetId, position });
  useLayoutEffect(() => {
    events.current = { onOnToggle, onInitialized, widgetId, position };
  });

  const place = () => {
    const icon = iconRef.current;
    const balloon = balloonRef.current;
    if (!icon || !balloon) return;
    const offset = parseInt(getComputedStyle(icon).getPropertyValue('--osui-floating-offset'), 10);
    const arrowSize = arrowRef.current?.offsetWidth ?? 0;
    const finalOffset = Number.isNaN(offset) ? 0 : Math.sqrt(offset * arrowSize ** 2) / 2;
    const rect = balloon.getBoundingClientRect();
    setFloating(
      computeFloatingPosition(
        icon.getBoundingClientRect(),
        rect,
        transformPosition(events.current.position),
        finalOffset,
        arrowSize,
      ),
    );
  };
  /* _triggerOpen / _triggerClose (:11813-11840) with the balloon's open / close and its toggle event. */
  const toggle = (open: boolean, announce = true) => {
    if (state.current.isOpen === open) return;
    state.current.isOpen = open;
    setIsOpen(open);
    if (open) place();
    else setFloating(null);
    if (announce)
      document.dispatchEvent(
        new CustomEvent(BALLOON_ON_TOGGLE, { detail: { isOpen: open, balloonElem: balloonRef.current } }),
      );
    window.setTimeout(() => events.current.onOnToggle?.(events.current.widgetId, open));
  };
  const actions = useRef({ toggle });
  useLayoutEffect(() => {
    actions.current = { toggle };
  });

  /* build: StartVisible opens, Initialized; global listeners (balloon toggles, body click). */
  useEffect(() => {
    const onBalloonToggle = (e: Event) => {
      const { isOpen: otherOpen, balloonElem } = (e as CustomEvent<{ isOpen: boolean; balloonElem: Element }>).detail;
      if (otherOpen && balloonElem !== balloonRef.current && state.current.isOpen) actions.current.toggle(false);
    };
    const onBodyClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (iconRef.current?.contains(target) || balloonRef.current?.contains(target) || state.current.openedByApi)
        return;
      if (state.current.isOpen) actions.current.toggle(false);
    };
    document.addEventListener(BALLOON_ON_TOGGLE, onBalloonToggle);
    document.addEventListener('click', onBodyClick);
    if (startsOpen) actions.current.toggle(true);
    const timer = window.setTimeout(() => events.current.onInitialized?.(events.current.widgetId));
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener(BALLOON_ON_TOGGLE, onBalloonToggle);
      document.removeEventListener('click', onBodyClick);
    };
    // StartsOpen is read once (validateCanChange :11930-11935).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDesktop = isDevice('desktop');
  const clickMode = !isHover || !isDesktop;
  const hoverMode = isHover && isDesktop;
  const later = (fn: () => void) => window.setTimeout(fn);
  const iconHandlers = {
    onClick: clickMode
      ? (e: React.MouseEvent) => {
          e.stopPropagation();
          toggle(true);
        }
      : undefined,
    onFocus: !isHover
      ? () => {
          toggle(true);
        }
      : undefined,
    onBlur: !isHover
      ? () =>
          later(() => {
            const closest = document.activeElement?.closest('.osui-tooltip');
            if (closest !== iconRef.current?.parentElement) actions.current.toggle(false);
          })
      : undefined,
    onKeyDown: !isHover
      ? (e: React.KeyboardEvent) => {
          if ((state.current.isOpen && e.key === 'Escape') || e.key === 'Tab') toggle(false);
          e.stopPropagation();
        }
      : undefined,
    onMouseEnter: hoverMode
      ? () => {
          state.current.iconHover = true;
          toggle(true);
        }
      : undefined,
    onMouseLeave: hoverMode
      ? () => {
          state.current.iconHover = false;
          later(() => {
            if (!state.current.balloonHover) actions.current.toggle(false);
          });
        }
      : undefined,
  };
  const balloonStyle = {
    '--osui-balloon-width': 'max-content',
    '--osui-balloon-shape': 'var(--border-radius-none)',
    ...(floating
      ? {
          '--osui-floating-position-x': `${String(floating.x)}px`,
          '--osui-floating-position-y': `${String(floating.y)}px`,
        }
      : {}),
  } as CSSProperties;
  const rootClass = [
    'osui-tooltip',
    isHover ? 'osui-tooltip--is-hover' : '',
    isOpen ? 'osui-tooltip--is-open' : '',
    extendedClass,
  ]
    .filter(Boolean)
    .join(' ');
  const balloonClass = [
    'osui-tooltip__balloon-wrapper osui-balloon',
    isOpen ? 'osui-tooltip__balloon-wrapper--is-open osui-balloon--is-open' : '',
    floating?.placement ?? '',
  ]
    .filter(Boolean)
    .join(' ');
  const attrs: Record<string, string> = { name: uniqueId };
  return (
    <OSBlock name="Content.Tooltip" id={id}>
      <div className={rootClass} data-container="" {...attrs}>
        <div
          ref={iconRef}
          aria-describedby={balloonContentId}
          className="osui-tooltip__content"
          role="button"
          tabIndex={0}
          {...iconHandlers}
        >
          {content}
        </div>
        <div
          ref={balloonRef}
          aria-hidden={isOpen ? 'false' : 'true'}
          className={balloonClass}
          data-container=""
          data-uniqueid={uniqueId}
          role="tooltip"
          style={balloonStyle}
          onMouseEnter={hoverMode ? () => (state.current.balloonHover = true) : undefined}
          onMouseLeave={
            hoverMode
              ? () => {
                  state.current.balloonHover = false;
                  later(() => {
                    if (!state.current.iconHover) actions.current.toggle(false);
                  });
                }
              : undefined
          }
        >
          <div
            className="osui-tooltip__balloon-wrapper__balloon OSInline"
            id={balloonContentId}
            onClick={
              clickMode
                ? (e) => {
                    const target = e.target as Element;
                    if (!target.matches(FOCUSABLE)) e.stopPropagation();
                  }
                : undefined
            }
          >
            {tooltip}
          </div>
          <div
            ref={arrowRef}
            className="osui-tooltip__balloon-arrow"
            data-container=""
            style={floating ? floating.arrow : undefined}
          />
        </div>
      </div>
    </OSBlock>
  );
}
