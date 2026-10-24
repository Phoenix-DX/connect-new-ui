import { useEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { useViewState, useWasRestoredFromCache } from '@/platform/navigation';

export interface ShowMoreShowLessContainerProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** SectionHeaderId: the element that "Show less" scrolls back to. */
  sectionHeaderId?: string;
  /** MaximumNumberOfLines (3 in the only instance of this route). */
  maximumNumberOfLines?: number;
  /** ContentLineHeight (default "1.5em"). */
  contentLineHeight?: string;
  placeholderContent?: ReactNode;
  showMoreLabel?: ReactNode;
  showLessLabel?: ReactNode;
}

/** Root `show-more-container` > DIV_Content (`position-relative`: Placeholder_Content
    `show-more-body margin-bottom-base font-size-s` and the `show-more-cutoff` fade) and DIV_Actions (`font-size-s`:
    ShowMore `show-more-expand` / ShowLess `show-more-collapse`, right-aligned links).
    - OnReady: InitiateShowMoreShowLess writes `--overflow-max-lines` and `--content-line-height` on Root and marks it
      `show-more-overflowing` when the body overflows (now and on resize); a view that the view cache restored with
      Local_IsShowMore toggles `show-more-expanded` again.
    - ShowMoreLessOnClick(IsShowLess): show less → Local_IsShowMore False and ScrollToTopContainer (`.content` back to
      the section header when it is scrolled past it); show more → True; then `show-more-expanded` toggles.
    - OnDestroy removes the resize listener.
    @origin Connect2_LegacyShared.Utility.ShowMoreShowLessContainer */
export function ShowMoreShowLessContainer({
  id,
  sectionHeaderId = '',
  maximumNumberOfLines = 3,
  contentLineHeight = '1.5em',
  placeholderContent,
  showMoreLabel,
  showLessLabel,
}: ShowMoreShowLessContainerProps) {
  const scope = id.replace(/\$/g, '');
  const rootRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const fromCache = useWasRestoredFromCache();
  const [isShowMore, setIsShowMore] = useViewState(`${scope}-Local_IsShowMore`, false);

  useEffect(() => {
    const root = rootRef.current;
    const body = bodyRef.current;
    if (!root || !body) return;
    root.setAttribute(
      'style',
      `--overflow-max-lines: ${String(maximumNumberOfLines)}; --content-line-height: ${contentLineHeight}`,
    );
    const timer = window.setTimeout(() => {
      if (body.scrollHeight > body.offsetHeight) root.classList.add('show-more-overflowing');
    }, 0);
    const listener = () => {
      if (body.scrollHeight > body.offsetHeight) root.classList.add('show-more-overflowing');
      else root.classList.remove('show-more-overflowing');
    };
    window.addEventListener('resize', listener);
    if (fromCache && isShowMore) root.classList.toggle('show-more-expanded');
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', listener);
    };
    // OnReady runs once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showMoreLessOnClick = (isShowLess: boolean) => {
    const root = rootRef.current;
    if (isShowLess) {
      setIsShowMore(false);
      if (root?.classList.contains('show-more-expanded')) {
        const sectionHeader = document.getElementById(sectionHeaderId);
        const scrollable = document.querySelector('.content');
        if (scrollable && sectionHeader && scrollable.scrollTop > sectionHeader.offsetTop)
          scrollable.scrollTo({ top: sectionHeader.offsetTop, left: 0, behavior: 'smooth' });
      }
    } else {
      setIsShowMore(true);
    }
    root?.classList.toggle('show-more-expanded');
  };

  return (
    <OSBlock name="Utility.ShowMoreShowLessContainer" id={id}>
      <div className="show-more-container" data-container="" id={`${scope}-Root`} ref={rootRef}>
        <div className="position-relative" data-container="" id={`${scope}-DIV_Content`}>
          <div
            className="show-more-body margin-bottom-base font-size-s"
            id={`${scope}-Placeholder_Content`}
            ref={bodyRef}
          >
            {placeholderContent}
          </div>
          <div className="show-more-cutoff" data-container="" />
        </div>
        <div className="font-size-s" data-container="" id={`${scope}-DIV_Actions`}>
          <div className="show-more-expand" data-container="" id={`${scope}-ShowMore`} style={{ textAlign: 'right' }}>
            <a
              data-link=""
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showMoreLessOnClick(false);
              }}
            >
              <div id={`${scope}-ShowMoreLabel`}>{showMoreLabel}</div>
            </a>
          </div>
          <div className="show-more-collapse" data-container="" id={`${scope}-ShowLess`} style={{ textAlign: 'right' }}>
            <a
              data-link=""
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showMoreLessOnClick(true);
              }}
            >
              <div id={`${scope}-ShowLessLabel`}>{showLessLabel}</div>
            </a>
          </div>
        </div>
      </div>
    </OSBlock>
  );
}
