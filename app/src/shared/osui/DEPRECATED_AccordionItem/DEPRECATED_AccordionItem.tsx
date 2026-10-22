// @os-block OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem
import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { isLayoutNative, isWebApp } from '@/shared/osui/lib/deviceDetection';
import { closeAllJS, collapseJS, expandJS, setAriaAttributesJS, type AccordionSectionElement } from './sectionDom';

export interface DEPRECATED_AccordionItemProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** IsExpanded (default false). */
  isExpanded?: boolean;
  /** UsePadding: padding around the content (default true). */
  usePadding?: boolean;
  /** IsDisabled (default false). */
  isDisabled?: boolean;
  /** ExtendedClass (default ""). */
  extendedClass?: string;
  /** Placeholder Title. */
  title?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Event OnToggle(IsExpanded). */
  onOnToggle?: (isExpanded: boolean) => void;
}

/** OutSystems UI 2.23 DEPRECATED_AccordionItem (`:<n>` = line of
    migration/screens/EventDetail/analysis/sources/pretty/OutSystemsUI_2_23.Content.DEPRECATED_AccordionItem.mvc.js).
    View :183-347: SectionItem `osui-deprecated section-expandable ` + (` open is--open` | `is--closed`) +
    (` is--disabled`) + " " + ExtendedClass with data-expanded / aria-expanded / aria-disabled; TitleWrapper
    (`section-expandable-title`, click → OnClick) holding the Title placeholder (`dividers full-width`, + ` text-ellipsis`
    unless IsWebApp) and the icon; ContentWrapper `section-expandable-content is--collapsed` (+ ` no-padding`) holding
    the Content placeholder (`tabpanel`). The JS nodes are ported in `sectionDom.ts`.
    OnReady (:881-889 → :577-655) runs Init: HasContent, the enclosing `.accordion` (HasWrapper, data-multiple-items),
    expanded classes, keyboard; IsWebApp = IsWebApp() or IsLayoutNative(); SetGlobalActions. OnParametersChanged
    (:901-909) runs it again with IsParameterChange (Expand / Collapse to the new IsExpanded). */
export function DEPRECATED_AccordionItem({
  id,
  isExpanded = false,
  usePadding = true,
  isDisabled = false,
  extendedClass = '',
  title,
  content,
  onOnToggle,
}: DEPRECATED_AccordionItemProps) {
  const prefix = id?.replace('$', '');
  const [expanded, setExpandedState] = useState(isExpanded);
  const [hasContent, setHasContent] = useState(true);
  const [webApp, setWebApp] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  /* Model variables read by the actions (OutSystems mutates them synchronously). */
  const vars = useRef({
    isExpanded,
    isDisabled,
    hasContent: true,
    hasWrapper: false,
    isMultipleItems: false,
    accordionObj: null as Element | null,
    onToggle: onOnToggle,
  });

  const setExpanded = (value: boolean) => {
    vars.current.isExpanded = value;
    setExpandedState(value);
  };
  const setAria = (value: boolean) => {
    if (sectionRef.current) setAriaAttributesJS(sectionRef.current, value);
  };
  /** Expand (:791-825): Expand node, then IsExpanded = True. */
  const expand = (isKeypress: boolean) => {
    if (sectionRef.current) expandJS(sectionRef.current, isKeypress, setAria);
    setExpanded(true);
  };
  /** Collapse (:533-567): Collapse node, then IsExpanded = False. */
  const collapse = (isKeypress: boolean) => {
    if (sectionRef.current) collapseJS(sectionRef.current, isKeypress, setAria);
    setExpanded(false);
  };
  /** OnClick (:415-506): nothing when disabled; with content, close the other items of a single-item accordion, then
      collapse or expand, raise OnToggle and write data-expanded (rendered from IsExpanded here); without content,
      ToggleClass flips is--open / is--closed (rendered from IsExpanded) and OnToggle is raised. */
  const onClick = (isKeypress: boolean) => {
    const v = vars.current;
    if (v.isDisabled) return;
    if (v.hasContent) {
      if (v.hasWrapper && !v.isMultipleItems && sectionRef.current) closeAllJS(sectionRef.current, v.accordionObj);
      if (v.isExpanded) collapse(isKeypress);
      else expand(isKeypress);
    } else {
      setExpanded(!v.isExpanded);
    }
    v.onToggle?.(v.isExpanded);
  };
  const actions = useRef({ expand, collapse, onClick });

  /** OnReady (Init node :1071-1136, SetGlobalActions :1138-1154); `isParameterChange` = called by OnParametersChanged. */
  const ready = (isParameterChange: boolean) => {
    const section = sectionRef.current as AccordionSectionElement | null;
    const wrapper = contentWrapperRef.current;
    if (!section || !wrapper) return;
    const v = vars.current;
    v.hasContent = (contentRef.current?.innerHTML ?? '') !== '';
    const accordion = section.closest('.accordion') ?? section.parentElement?.parentElement ?? null;
    v.hasWrapper = accordion?.classList.contains('accordion') ?? false;
    v.isMultipleItems = accordion?.getAttribute('data-multiple-items') === 'True';
    if (isParameterChange) {
      if (v.isExpanded) actions.current.expand(false);
      else actions.current.collapse(false);
    } else if (v.isExpanded) {
      wrapper.classList.remove('is--collapsed');
      wrapper.classList.add('is--expanded');
    }
    v.accordionObj = accordion;
    setHasContent(v.hasContent);
    setWebApp(isWebApp() || isLayoutNative());
    section.CollapseItem = () => {
      actions.current.collapse(false);
    };
    section.ExpandItem = () => {
      actions.current.expand(false);
    };
    section.updateAccordion = (multipleItems: boolean) => {
      vars.current.isMultipleItems = multipleItems; // OnUpdate (:754-781)
    };
  };
  const readyRef = useRef(ready);

  /* The latest inputs and actions, for the event handlers and the attached SectionItem functions (runs first). */
  useLayoutEffect(() => {
    vars.current.isDisabled = isDisabled;
    vars.current.onToggle = onOnToggle;
    actions.current = { expand, collapse, onClick };
    readyRef.current = ready;
  });
  useLayoutEffect(() => {
    readyRef.current(false);
  }, []);
  /* OnParametersChanged: the inputs are copied into the model, then OnReady runs again. */
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    vars.current.isExpanded = isExpanded;
    setExpandedState(isExpanded);
    readyRef.current(true);
  }, [isExpanded, usePadding, isDisabled, extendedClass]);

  /** Init's keydown listener on the title (only with content): Esc (keyCode 27) closes an open item, Space (32) /
      Enter (13) toggle it. */
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!vars.current.hasContent) return;
    if (e.currentTarget.getAttribute('aria-expanded') === 'true' && e.key === 'Escape') {
      actions.current.onClick(true);
      e.preventDefault();
      e.stopPropagation();
    }
    if (e.key === ' ' || e.key === 'Enter') {
      actions.current.onClick(true);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const bool = (value: boolean) => (value ? 'true' : 'false');
  return (
    <OSBlock name="Content.DEPRECATED_AccordionItem" id={id}>
      <div
        ref={sectionRef}
        className={`osui-deprecated section-expandable ${expanded ? ' open is--open' : 'is--closed'}${isDisabled ? ' is--disabled' : ''} ${extendedClass}`}
        data-container=""
        data-expanded={bool(expanded)}
        aria-expanded={bool(expanded)}
        aria-disabled={bool(isDisabled)}
        role="tab"
      >
        <div
          className="section-expandable-title"
          data-container=""
          role="button"
          aria-hidden={bool(isDisabled)}
          aria-expanded={bool(expanded)}
          tabIndex={isDisabled || !hasContent ? -1 : 0}
          aria-controls={prefix === undefined ? undefined : `${prefix}-Content`}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            actions.current.onClick(false);
          }}
          onKeyDown={onKeyDown}
        >
          <div className={`dividers full-width${webApp ? '' : ' text-ellipsis'}`}>{title}</div>
          <div className="section-expandable-icon" data-container="" aria-hidden="true" />
        </div>
        <div
          ref={contentWrapperRef}
          className={`section-expandable-content is--collapsed${usePadding ? '' : ' no-padding'}`}
          data-container=""
          tabIndex={hasContent ? 0 : -1}
          aria-hidden={bool(!expanded)}
        >
          <div ref={contentRef} id={prefix === undefined ? undefined : `${prefix}-Content`} role="tabpanel">
            {content}
          </div>
        </div>
      </div>
    </OSBlock>
  );
}
