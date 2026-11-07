/** @origin UBTConnect.Directory_Updates.SectionHeader */
import { useEffect, useRef, useState } from 'react';
import type { UpdateBreakpoint as Breakpoint } from '@/api/update';
import { OSBlock } from '@/components/ui/os/OSBlock';
import {
  directory_Updates_GetListBreakpoint,
  EMPTY_BREAKPOINT,
} from '@/pages/Updates_SingleList/hooks/updatesSingleListState';
import { Updates_DateRanges } from './staticEntities';
import { UpdateItem_Header } from './UpdateItem_Header';

export interface SectionHeaderProps {
  /** Instance id (`<row>-$b15`). */
  id: string;
  /** Row scope of the List iteration (`l1-478_25`). */
  rowScope: string;
  inBreakpoints: Breakpoint[];
  inCurrentUpdateDate: string;
  inPreviousUpdateDate: string;
  inIsLoading: boolean;
  /** In_SiblingId: the row's Update_ListItem element id. */
  inSiblingId: string;
  inIsAscending: boolean;
  /** Event Event_UpdateListHeader(Event_Breakpoint). */
  onEventUpdateListHeader?: (breakpoint: Breakpoint) => void;
}

/** ScreenEvent_OnReady (SH ctrl): GetListBreakpoint, kept unless it is Today (descending) or Older (ascending). */
function readyBreakpoint(p: SectionHeaderProps, current: Breakpoint): Breakpoint {
  const b = directory_Updates_GetListBreakpoint(
    p.inBreakpoints,
    p.inCurrentUpdateDate,
    p.inPreviousUpdateDate,
    p.inIsAscending,
  );
  const hidden =
    (b.sectionName === Updates_DateRanges.Today && !p.inIsAscending) ||
    (b.sectionName === Updates_DateRanges.Older && p.inIsAscending);
  return hidden ? current : b;
}

/** UBTConnect.Directory_Updates.SectionHeader (p:…SectionHeader.mvc.js): when its breakpoint is set and the list is not
    loading, Container "updates-list__list-section-header" with UpdateItem_Header `ListSectionHeader` (ShowMarkAll
    False). Once rendered, InitializeIntersectionObserver (JS) raises the header to z-index 10 and observes the row's
    Update_ListItem against `--sticky-top-offset`: crossing the line raises Event_UpdateListHeader with this
    breakpoint (going down) or the previous one (going up) (Action_UpdateHeader). Captured dom/default.html:3406-3470. */
export function SectionHeader(props: SectionHeaderProps) {
  const { id, rowScope, inBreakpoints, inIsLoading, inSiblingId } = props;
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(EMPTY_BREAKPOINT);
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const latest = useRef({ props, breakpoint });
  useEffect(() => {
    latest.current = { props, breakpoint };
  });
  const headerId = `${rowScope}-b15-ListSectionHeader`;

  /** Action_UpdateHeader(In_IsCurrent) (SH ctrl): this breakpoint, or the previous one when scrolling back up. */
  const updateHeader = useRef((isCurrent: boolean) => {
    const { props: p, breakpoint: b } = latest.current;
    let updated = b;
    if (!isCurrent) {
      const i = p.inBreakpoints.findIndex((x) => x.sectionName === b.sectionName);
      if (i <= 0) return;
      updated = p.inBreakpoints[i - 1] ?? b;
    }
    p.onEventUpdateListHeader?.(updated);
  });

  // OnReady, and OnParametersChanged once an observer exists (SH ctrl).
  const ready = useRef(false);
  useEffect(() => {
    if (ready.current && observer.current === null) return;
    ready.current = true;
    setBreakpoint((b) => readyBreakpoint(latest.current.props, b));
  }, [inBreakpoints, props.inCurrentUpdateDate, props.inPreviousUpdateDate, inIsLoading, props.inIsAscending]);

  /* InitializeIntersectionObserver → Action_SetObserver, after the header rendered: z-index 10 on the section header
     (written on the element, as the JS does) and the observer on the row's Update_ListItem. */
  const shown = breakpoint.sectionName !== '' && !inIsLoading;
  useEffect(() => {
    if (!shown || observer.current !== null) return;
    const container = document.querySelector('.active-screen.screen-container');
    if (!container) return;
    const topOffset = parseFloat(getComputedStyle(container).getPropertyValue('--sticky-top-offset').trim());
    const incoming = sectionRef.current;
    const next = document.getElementById(inSiblingId);
    if (!topOffset || isNaN(topOffset) || !incoming || !next) return;
    incoming.style.zIndex = '10';
    let isLowered = false;
    let isFirst = true;
    const o = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const shouldLower = !entry.isIntersecting;
          if (isFirst) {
            isFirst = false;
            isLowered = shouldLower;
            return;
          }
          if (shouldLower !== isLowered) {
            updateHeader.current(shouldLower);
            isLowered = shouldLower;
          }
        }
      },
      { root: container, rootMargin: `-${topOffset}px 0px ${container.scrollHeight + 1000}px 0px`, threshold: 0 },
    );
    o.observe(next);
    observer.current = o;
  }, [shown, inSiblingId]);
  // ScreenEvent_OnDestroy: DisconnectObserver.
  useEffect(
    () => () => {
      observer.current?.disconnect();
      observer.current = null;
    },
    [],
  );

  return (
    <OSBlock name="Directory_Updates.SectionHeader" id={id}>
      {shown && (
        <div ref={sectionRef} className="updates-list__list-section-header" data-container="">
          <UpdateItem_Header
            id={headerId}
            scope={`${rowScope}-b15-b1`}
            isLoading={inIsLoading}
            title={breakpoint.sectionName}
            showMarkAll={false}
            badgeNumber={breakpoint.badgeCount}
          />
        </div>
      )}
    </OSBlock>
  );
}
