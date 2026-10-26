/** @origin OutSystemsUI_2_23.Content.AccordionItem */
// @os-block OutSystemsUI_2_23.Content.AccordionItem
import {
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { AccordionContext } from '@/components/ui/Accordion/accordionContext';
import { AccordionIconPosition, AccordionIconType } from '@/components/ui/lib/staticEntities';

export interface AccordionItemProps {
  /** OutSystems instance id of the block (the AccordionItemId of the events; `aria-controls` is derived from it). */
  id?: string;
  /** StartsExpanded (default false); later changes have no effect, as in OSUI. */
  startsExpanded?: boolean;
  /** AccordionIconType identifier (default Caret). */
  icon?: string;
  /** AccordionIconPosition identifier (default Right). */
  iconPosition?: string;
  isDisabled?: boolean;
  extendedClass?: string;
  /** Event OnToggle(AccordionItemId, IsExpanded). */
  onOnToggle?: (accordionItemId: string, isExpanded: boolean) => void;
  /** Event Initialized(AccordionItemId). */
  onInitialized?: (accordionItemId: string) => void;
  /** Placeholder Title. */
  title?: ReactNode;
  /** Placeholder CustomIcon (Icon = Custom). */
  customIcon?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
}

/** Enum.CssClass of AccordionItem (runtime-sources/OutSystemsUI_2_23.OutSystemsUI.js :4683-4702). */
const C = {
  Animating: 'osui-accordion-item__content--is-animating',
  Closed: 'osui-accordion-item--is-closed',
  Collapsed: 'osui-accordion-item__content--is-collapsed',
  Disabled: 'osui-accordion-item--is-disabled',
  Expanded: 'osui-accordion-item__content--is-expanded',
  ClickArea: 'osui-accordion-item__click_zone',
  IconCaret: 'osui-accordion-item__icon--caret',
  IconCustom: 'osui-accordion-item__icon--custom',
  IconHidden: 'osui-accordion-item__icon--hidden',
  IconPlusMinus: 'osui-accordion-item__icon--plus-minus',
  IsLeft: 'osui-accordion-item__title--is-left',
  IsRight: 'osui-accordion-item__title--is-right',
  Open: 'osui-accordion-item--is-open',
} as const;
/** Constants.FocusableElems (:151). */
const FOCUSABLE =
  'a[href]:not([disabled]), [tabindex="0"], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])';

/** _setIconType (:4395-4419): classes of the icon and the custom icon. */
function iconClasses(icon: string): [string, string] {
  if (icon === AccordionIconType.PlusMinus) return [C.IconPlusMinus, C.IconHidden];
  if (icon === AccordionIconType.Custom) return [C.IconHidden, C.IconCustom];
  return [C.IconCaret, C.IconHidden];
}

/** OutSystems UI AccordionItem (p:migration/screens/HostSurvey/analysis/sources/pretty/OutSystemsUI_2_23.Content.
    AccordionItem.mvc.js view :190-260; provider hand-written from OutSystemsUI.js AccordionItem :4249-4612). Markup as
    the view: item, title wrapper (title placeholder, icon, custom icon), content wrapper (content placeholder). Build:
    open/closed classes, icon type and position, click zone, role / aria / tabindex (setA11YProperties :4456-4473,
    `listitem` inside an Accordion), Initialized. A click on the title, or Enter / Space, toggles; Escape closes (when
    not disabled). open / close animate the content height (`--is-animating`, height px, `transitionend` → expanded /
    collapsed class), raise OnToggle and, on open, tell the Accordion (other items close). The content classes and
    height are written on the element as the provider does (React renders only the initial ones). */
export function AccordionItem({
  id,
  startsExpanded = false,
  icon = AccordionIconType.Caret,
  iconPosition = AccordionIconPosition.Right,
  isDisabled = false,
  extendedClass = '',
  onOnToggle,
  onInitialized,
  title,
  customIcon,
  content,
}: AccordionItemProps) {
  const uniqueId = useId();
  const widgetId = id ?? uniqueId;
  /* OutSystems widget id of the Content placeholder (`<block id without $>-Content`): the aria-controls target. */
  const contentId = `${id ? id.replace('$', '') : uniqueId}-Content`;
  const parent = useContext(AccordionContext);
  const [isOpen, setIsOpen] = useState(startsExpanded);
  const [initialContentClass] = useState(
    () => `osui-accordion-item__content ${startsExpanded ? C.Expanded : C.Collapsed}`,
  );
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(startsExpanded);
  const disabledRef = useRef(isDisabled);
  const events = useRef({ onOnToggle, onInitialized, parent, widgetId });
  useLayoutEffect(() => {
    events.current = { onOnToggle, onInitialized, parent, widgetId };
    disabledRef.current = isDisabled;
  });

  /* _animationAsync (:4301-4312) and _transitionEndHandler (:4441-4455). */
  const animate = (isExpand: boolean, expandedHeight: number) => {
    const el = contentRef.current;
    if (!el) return;
    el.classList.add(C.Animating);
    if (!isExpand) el.classList.remove(C.Expanded);
    el.style.height = `${String(isExpand ? expandedHeight : 0)}px`;
    const onEnd = () => {
      el.removeEventListener('transitionend', onEnd);
      el.classList.remove(C.Animating);
      el.style.height = '';
      if (el.style.cssText.length === 0) el.removeAttribute('style');
      el.classList.add(openRef.current ? C.Expanded : C.Collapsed);
    };
    el.addEventListener('transitionend', onEnd);
    events.current.onOnToggle?.(events.current.widgetId, isExpand);
  };

  /* open (:4581-4601). */
  const open = () => {
    const el = contentRef.current;
    if (openRef.current || !el) return;
    openRef.current = true;
    setIsOpen(true);
    el.classList.remove(C.Collapsed);
    el.classList.add(C.Expanded);
    const expandedHeight = el.getBoundingClientRect().height;
    el.classList.remove(C.Expanded);
    el.style.height = '0';
    window.setTimeout(() => {
      animate(true, expandedHeight);
    });
    events.current.parent?.click(uniqueId);
  };
  /* close (:4557-4571). */
  const close = () => {
    const el = contentRef.current;
    if (!openRef.current || !el) return;
    openRef.current = false;
    setIsOpen(false);
    el.removeAttribute('style');
    const expandedHeight = el.getBoundingClientRect().height;
    el.classList.remove(C.Expanded);
    el.style.height = `${String(expandedHeight)}px`;
    window.setTimeout(() => {
      animate(false, expandedHeight);
    });
  };
  /* The Accordion calls the latest open / close. */
  const actions = useRef({ open, close });
  useLayoutEffect(() => {
    actions.current = { open, close };
  });

  /* _setAccordionParent (:4381-4386) / dispose (:4572-4580); build → Initialized. */
  useEffect(() => {
    const remove = parent?.add({
      uniqueId,
      isOpen: () => openRef.current,
      isDisabled: () => disabledRef.current,
      open: () => {
        actions.current.open();
      },
      close: () => {
        actions.current.close();
      },
    });
    const timer = window.setTimeout(() => events.current.onInitialized?.(events.current.widgetId));
    return () => {
      window.clearTimeout(timer);
      remove?.();
    };
  }, [parent, uniqueId]);

  /* _handleTabIndex (:4332-4343): focusable elements of the title are reachable only while open and enabled. */
  useEffect(() => {
    const titleEl = titleRef.current;
    if (!titleEl) return;
    for (const child of titleEl.querySelectorAll(FOCUSABLE))
      child.setAttribute('tabindex', !isDisabled && isOpen ? '0' : '-1');
  }, [isOpen, isDisabled]);

  const toggle = () => {
    if (openRef.current) close();
    else open();
  };
  /* _onKeyboardPress (:4344-4360). */
  const onKeyDown = (e: KeyboardEvent) => {
    const isEscape = e.key === 'Escape';
    const isEnterOrSpace = e.key === 'Enter' || e.key === ' ';
    if (!isEscape && !isEnterOrSpace) return;
    e.preventDefault();
    e.stopPropagation();
    if (openRef.current) close();
    else if (isEnterOrSpace) open();
  };

  const [iconClass, customIconClass] = iconClasses(icon);
  const rootClass = ['osui-accordion-item', isOpen ? C.Open : C.Closed, isDisabled ? C.Disabled : '', extendedClass]
    .filter(Boolean)
    .join(' ');
  const titleClass = [
    'osui-accordion-item__title',
    iconPosition === AccordionIconPosition.Right ? C.IsRight : C.IsLeft,
    isDisabled ? '' : C.ClickArea,
  ]
    .filter(Boolean)
    .join(' ');
  const nameAttribute: Record<string, string> = { name: uniqueId };
  return (
    <OSBlock name="Content.AccordionItem" id={id}>
      <div
        aria-disabled={isDisabled ? 'true' : 'false'}
        className={rootClass}
        data-container=""
        role={parent ? 'listitem' : undefined}
        {...nameAttribute}
      >
        <div
          ref={titleRef}
          aria-controls={contentId}
          aria-disabled={isDisabled ? 'true' : 'false'}
          aria-expanded={isOpen ? 'true' : 'false'}
          className={titleClass}
          data-container=""
          role="button"
          tabIndex={isDisabled ? -1 : 0}
          onClick={isDisabled ? undefined : toggle}
          onKeyDown={isDisabled ? undefined : onKeyDown}
        >
          <div className="osui-accordion-item__title__placeholder">{title}</div>
          <div aria-hidden="true" className={`osui-accordion-item__icon ${iconClass}`} data-container="" />
          <div className={`osui-accordion-item__icon placeholder-empty ${customIconClass}`}>{customIcon}</div>
        </div>
        <div
          ref={contentRef}
          aria-hidden={isOpen ? 'false' : 'true'}
          className={initialContentClass}
          data-container=""
          inert={!isOpen}
          role="region"
        >
          <div id={contentId}>{content}</div>
        </div>
      </div>
    </OSBlock>
  );
}
