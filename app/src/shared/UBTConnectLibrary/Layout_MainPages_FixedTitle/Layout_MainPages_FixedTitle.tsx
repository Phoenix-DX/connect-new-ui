// @os-block UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle
import { useEffect, useId, useLayoutEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LayoutRuntimeTop } from '@/components/layout/LayoutRuntimeTop';
import { PullToRefresh } from '@/shared/osui/PullToRefresh';
import { Columns_Two } from '@/shared/UBTConnectLibrary/Columns_Two';
import {
  clearScrollTimeout,
  removeScrollEvents,
  setMainFixedScroll,
  setScrollShadow,
} from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_ColumnBehaviour, UBT_Size, UBT_VerticalAlign } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface Layout_MainPages_FixedTitleProps {
  /** OutSystems instance id of the block. */
  id?: string;
  usePullToRefresh?: boolean;
  extendedClass?: string;
  enableAccessibilityFeatures?: boolean;
  /** Input isGrayBackground (`layout-gray-background`). */
  isGrayBackground?: boolean;
  /** Placeholder Placeholder_Header_Title. */
  placeholderHeaderTitle?: ReactNode;
  /** Placeholder Placeholder_Header_Right. */
  placeholderHeaderRight?: ReactNode;
  /** Placeholder Placeholder_Header_Input (search row, left). */
  placeholderHeaderInput?: ReactNode;
  /** Placeholder Placeholder_Header_Input_Icon (search row, right). */
  placeholderHeaderInputIcon?: ReactNode;
  /** Placeholder HeaderContent. */
  headerContent?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder Bottom (the screen's bottom bar). */
  bottom?: ReactNode;
  /** Placeholder Placeholder_CommonUI_Inside_Layout (the screen's CommonUI_InsideLayout). */
  placeholderCommonUIInsideLayout?: ReactNode;
  /** Event OnPullToRefresh. */
  onOnPullToRefresh?: () => void;
  /** Event OnHeaderScrolled(IsHeaderScrolled): raised by SetMainFixedScroll when the scroll passes the search row
      (true) or comes back above it (false). */
  onOnHeaderScrolled?: (isHeaderScrolled: boolean) => void;
}

const COLUMNS = {
  ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
  SpacingSize: UBT_Size.Base,
  VerticalAlign: UBT_VerticalAlign.Center,
};

/** Main-page layout with a sticky title (p:UBTConnectLibrary.Layouts.Layout_MainPages_FixedTitle.mvc.js view):
    LayoutRuntime_Top, the wrapper (`layout-sticky-title hide-header-on-scroll`, extended / accessibility / gray
    classes), skip link, sticky observer, header with the title row and the search row (both Columns_Two: reduce
    last, base spacing, centred), header content, optional PullToRefresh (raises OnPullToRefresh, controller
    :778-806), content, footer, `offline-data-sync` and the CommonUI placeholder. OnReady SetScrollEvents
    (controller :626-693) attaches SetMainFixedScroll (sticky title padding; callback OnHandle_OnHeaderScrolledTrigger
    :835-860 raises OnHeaderScrolled) and SetScrollShadow; OnDestroy (:694) removes both listeners and the timer. */
export function Layout_MainPages_FixedTitle({
  id,
  usePullToRefresh = false,
  extendedClass = '',
  enableAccessibilityFeatures = false,
  isGrayBackground = false,
  placeholderHeaderTitle,
  placeholderHeaderRight,
  placeholderHeaderInput,
  placeholderHeaderInputIcon,
  headerContent,
  content,
  bottom,
  placeholderCommonUIInsideLayout,
  onOnPullToRefresh,
  onOnHeaderScrolled,
}: Layout_MainPages_FixedTitleProps) {
  const fallback = useId().replace(/[^a-zA-Z0-9]/g, '');
  const onHeaderScrolled = useRef(onOnHeaderScrolled);
  useLayoutEffect(() => {
    onHeaderScrolled.current = onOnHeaderScrolled;
  });
  useEffect(() => {
    const main = setMainFixedScroll((isHeaderScrolled) => {
      onHeaderScrolled.current?.(isHeaderScrolled);
    });
    const shadow = setScrollShadow();
    return () => {
      removeScrollEvents(main.Out_Element, main.Out_ScrollEvent, shadow.Out_ScrollEvent);
      clearScrollTimeout(shadow.Out_Timeout);
    };
  }, []);
  const prefix = id?.replace('$', '') ?? `layout${fallback}`;
  return (
    <OSBlock name="Layouts.Layout_MainPages_FixedTitle" id={id}>
      <LayoutRuntimeTop id={`${prefix}-$b1`} />
      <div
        className={`layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title hide-header-on-scroll${extendedClass === '' ? '' : ` ${extendedClass}`}${enableAccessibilityFeatures ? ' has-accessible-features' : ''}${isGrayBackground ? ' layout-gray-background' : ''}`}
        data-container=""
      >
        <a
          aria-label="Skip to Content (Press Enter)"
          className="skip-nav"
          data-link=""
          data-showskipcontent={enableAccessibilityFeatures ? 'true' : 'false'}
          href="#"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Skip to Content (Press Enter)
        </a>
        <div className="main" data-container="">
          <div aria-hidden="true" className="sticky-observer" data-container="" />
          <header className="header" role="banner">
            <div className="header-top-title" data-container="">
              <div
                className="header-content display-flex flex-direction-column justify-content-flex-start"
                data-container=""
              >
                <div className="ubt-layout-main__title" data-container="">
                  <Columns_Two
                    id={`${prefix}-$b2`}
                    columnOptions={COLUMNS}
                    left={
                      <h2 className="header-title">
                        <div className="OSInline">{placeholderHeaderTitle}</div>
                      </h2>
                    }
                    right={<div className="header-right">{placeholderHeaderRight}</div>}
                  />
                </div>
              </div>
            </div>
            <div className="header-top-search" data-container="">
              <div
                className="header-content display-flex flex-direction-column justify-content-flex-start"
                data-container=""
              >
                <div className="ubt-layout-main__search" data-container="">
                  <Columns_Two
                    id={`${prefix}-$b3`}
                    columnOptions={COLUMNS}
                    left={<div>{placeholderHeaderInput}</div>}
                    right={<div className="header-right">{placeholderHeaderInputIcon}</div>}
                  />
                </div>
              </div>
            </div>
            <div className="header-top-content ph">{headerContent}</div>
          </header>
          {usePullToRefresh && <PullToRefresh id={`${prefix}-$b4`} onContentPull={onOnPullToRefresh} />}
          <div className="content" data-container="">
            <div className="main-content ThemeGrid_Container" data-container="" role="main">
              <div className="content-middle">{content}</div>
            </div>
          </div>
          <footer className="content-bottom" role="contentinfo">
            <div className="footer ph">{bottom}</div>
          </footer>
        </div>
        <div className="offline-data-sync" data-container="" />
        <div>{placeholderCommonUIInsideLayout}</div>
      </div>
    </OSBlock>
  );
}
