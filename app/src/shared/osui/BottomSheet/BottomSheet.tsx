// @os-block OutSystemsUI_2_23.Interaction.BottomSheet
import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
  type UIEvent,
} from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { registerBottomSheet } from '../lib/actions';
import { Shape } from '../lib/staticEntities';
import { AnimateOnDrag, BOTTOM_SHEET_SPRING, hasTouchGestures, setDragEvents } from './dragToClose';

export interface BottomSheetProps {
  /** OutSystems instance id of the block (the widget id BottomSheetOpen / BottomSheetClose take). */
  id?: string;
  /** Shape identifier: `--bottom-sheet-shape: var(--border-radius-<Shape>)`. */
  shape?: string;
  showHandler?: boolean;
  extendedClass?: string;
  /** Event OnToggle(BottomSheetId, IsOpen). */
  onOnToggle?: (bottomSheetId: string, isOpen: boolean) => void;
  /** Event Initialized(BottomSheetId). */
  onInitialized?: (bottomSheetId: string) => void;
  /** Placeholder TopBar. */
  topBar?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
}

const IS_OPEN = 'osui-bottom-sheet--is-open';
/** On <body> while a sheet is open (the original CSS: `.osui-bottom-sheet--is-active .vscomp-wrapper`, `.ptr-loading:not(.osui-bottom-sheet--is-active)`). */
const IS_ACTIVE = 'osui-bottom-sheet--is-active';
const HAS_SCROLL = 'osui-bottom-sheet--has-scroll';
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Compiled view: OutSystemsUI_2_23.Interaction.BottomSheet.mvc.js (CountryDetails copy) :94-150; the provider
    (OutSystemsUI.js, not in the captures) is ported by hand (stack osui:BottomSheet). Closed as captured: aria-hidden,
    tabindex -1, focus-trap spans around the sheet, overlay after it; closed sheets are inert (the caller's
    IsNotInertWhenClosed removes it). BottomSheetOpen adds `osui-bottom-sheet--is-open` and the body class, focuses the
    sheet and enables the focus trap; Escape or BottomSheetClose closes it and gives the focus back; each toggle raises
    OnToggle. A scrolled content adds `osui-bottom-sheet--has-scroll`. Provider (runtime-sources/
    OutSystemsUI_2_23.OutSystemsUI.js, BottomSheet :4913-5136): on a touch device the header drags the sheet down and a
    fast enough swipe closes it (dragToClose.ts; gestures bound from the first toggle on, :5044-5049); the only body
    effect is the `osui-bottom-sheet--is-active` class (:4993-5002), the original CSS has no scroll-lock rule for it. */
export function BottomSheet({
  id,
  shape = Shape.SoftRounded,
  showHandler = true,
  extendedClass = '',
  onOnToggle,
  onInitialized,
  topBar,
  content,
}: BottomSheetProps) {
  const uniqueId = useId();
  const widgetId = id ?? uniqueId;
  const [isOpen, setIsOpen] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  /* _gestureEventInstance / _animateOnDragInstance (:4940-4945) and the bound gesture listeners. */
  const animateOnDrag = useRef<AnimateOnDrag | null>(null);
  const unsetGestures = useRef<(() => void) | null>(null);
  const previousOpen = useRef(false);
  const lastFocused = useRef<Element | null>(null);
  const events = useRef({ onOnToggle, onInitialized });
  useEffect(() => {
    events.current = { onOnToggle, onInitialized };
  });

  // OnReady: BottomSheetCreate + BottomSheetInitialize, then the Initialized event. OnDestroy: BottomSheetDestroy.
  useEffect(() => {
    const unregister = registerBottomSheet([widgetId, uniqueId], {
      open: () => {
        setIsOpen(true);
      },
      close: () => {
        setIsOpen(false);
      },
    });
    // build → _handleGestureEvents (:4940-4945): only on a native app or a touch device.
    if (sheetRef.current && hasTouchGestures()) animateOnDrag.current = new AnimateOnDrag(sheetRef.current);
    events.current.onInitialized?.(widgetId);
    return unregister;
  }, [widgetId, uniqueId]);

  useEffect(() => {
    if (previousOpen.current === isOpen) return;
    previousOpen.current = isOpen;
    const animate = animateOnDrag.current;
    // _toggleBottomSheet (:4984-5011): a running spring animation stops first.
    animate?.dragParams.SpringAnimation?.cancel();
    if (isOpen) {
      lastFocused.current = document.activeElement;
      document.body.classList.add(IS_ACTIVE);
      sheetRef.current?.focus();
    } else {
      document.body.classList.remove(IS_ACTIVE);
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus();
    }
    /* setEventListeners (:5044-5050): the header drag, bound once here (the original binds it again on every toggle).
       _onGestureStart / Move / End (:4955-4963): a downward drag of an open sheet, sized by its height; the end closes
       it or springs it back. */
    const sheet = sheetRef.current;
    const header = headerRef.current;
    if (animate && sheet && header && !unsetGestures.current) {
      unsetGestures.current = setDragEvents(
        header,
        (x, y) => {
          animate.onDragStart(true, 'down', x, y, true, String(sheet.clientHeight));
        },
        (x, y, offsetX, offsetY, event) => {
          animate.onDragMove(offsetX, offsetY, x, y, event);
        },
        (offsetX, offsetY, timeTaken) => {
          animate.onDragEnd(
            offsetX,
            offsetY,
            timeTaken,
            () => {
              setIsOpen(false);
            },
            BOTTOM_SHEET_SPRING,
          );
        },
      );
    }
    events.current.onOnToggle?.(widgetId, isOpen);
  }, [isOpen, widgetId]);

  useEffect(
    () => () => {
      if (previousOpen.current) document.body.classList.remove(IS_ACTIVE);
      unsetGestures.current?.();
      unsetGestures.current = null;
    },
    [],
  );

  const focusables = () => [...(sheetRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? [])];
  const focusLast = () => {
    (focusables().at(-1) ?? sheetRef.current)?.focus();
  };
  const focusFirst = () => {
    (focusables()[0] ?? sheetRef.current)?.focus();
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) setIsOpen(false);
  };
  const onScroll = (event: UIEvent<HTMLDivElement>) => {
    setHasScroll(event.currentTarget.scrollTop !== 0);
  };

  const className =
    'osui-bottom-sheet' +
    (extendedClass !== '' ? ` ${extendedClass}` : '') +
    (showHandler ? ' osui-bottom-sheet--has-handler' : '') +
    (isOpen ? ` ${IS_OPEN}` : '') +
    (hasScroll ? ` ${HAS_SCROLL}` : '');
  const style = { '--bottom-sheet-shape': `var(--border-radius-${shape})` } as CSSProperties;
  const trapTabIndex = isOpen ? 0 : -1;
  return (
    <OSBlock name="Interaction.BottomSheet" id={widgetId}>
      <span
        aria-hidden={isOpen ? 'false' : 'true'}
        className="focus-trap-top wcag-hide-text"
        tabIndex={trapTabIndex}
        onFocus={focusLast}
      />
      <div
        ref={sheetRef}
        aria-hidden={isOpen ? 'false' : 'true'}
        className={className}
        data-container=""
        inert={!isOpen}
        role="complementary"
        style={style}
        tabIndex={trapTabIndex}
        onKeyDown={onKeyDown}
      >
        <header className="osui-bottom-sheet__header" data-advancedhtml="" ref={headerRef}>
          <div className="osui-bottom-sheet__header__top-bar">{topBar}</div>
        </header>
        <div className="osui-bottom-sheet__content" onScroll={onScroll}>
          {content}
        </div>
      </div>
      <div className="osui-bottom-sheet-overlay" data-container="" />
      <span
        aria-hidden={isOpen ? 'false' : 'true'}
        className="focus-trap-bottom wcag-hide-text"
        tabIndex={trapTabIndex}
        onFocus={focusFirst}
      />
    </OSBlock>
  );
}
