/** @origin UBTConnectLibrary.Layouts.Layout_MainPages */
// @os-block UBTConnectLibrary.Layouts.Layout_MainPages
import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LayoutRuntimeTop } from '@/components/layout/LayoutRuntimeTop';
import { PullToRefresh } from '@/shared/osui/PullToRefresh';
import { ColumnsTwo } from '@/components/ui/ColumnsTwo';
import {
  clearScrollTimeout,
  getClass_BackgroundColor,
  removeScrollEvents,
  setMainScroll,
  setScrollShadow,
} from '@/shared/UBTConnectLibrary/lib/actions';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_Size,
  UBT_VerticalAlign,
} from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface MainLayoutProps {
  /** OutSystems instance id of the block. */
  id?: string;
  usePullToRefresh?: boolean;
  extendedClass?: string;
  enableAccessibilityFeatures?: boolean;
  /** Input isGrayBackground (`layout-gray-background`). */
  isGrayBackground?: boolean;
  /** AddHeaderGap: base spacing in the search row (none otherwise); default true. */
  addHeaderGap?: boolean;
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
  /** Event OnHeaderScrolled(IsHeaderScrolled), raised by SetMainScroll. */
  onOnHeaderScrolled?: (isHeaderScrolled: boolean) => void;
}

/** Main-page layout (p:UBTConnectLibrary.Layouts.Layout_MainPages.mvc.js view, CommunityBusinessDetails_CoomingSoon copy):
    LayoutRuntime_Top, the wrapper (`ubt-layout-main hide-header-on-scroll` + extended / accessibility / gray classes,
    :424-432), skip link, sticky observer, header (title row Columns_Two reduce last / base / centre; search row
    Columns_Two whose spacing is base when AddHeaderGap, else none, :491), HeaderContent (`header-top-content ph`, plus
    the PrimaryGradientRadial background class while IsHeaderScrolled, :477-480), optional PullToRefresh
    (OnHandle_OnPullToRefreshTrigger raises OnPullToRefresh), content, footer, `offline-data-sync` and the CommonUI
    placeholder. OnReady SetScrollEvents (controller): SetMainScroll whose callback OnHandle_OnHeaderScrolledTrigger sets
    IsHeaderScrolled and raises OnHeaderScrolled, then SetScrollShadow; OnDestroy removes both listeners and the timer. */
export function MainLayout({
  id,
  usePullToRefresh = false,
  extendedClass = '',
  enableAccessibilityFeatures = false,
  isGrayBackground = false,
  addHeaderGap = true,
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
}: MainLayoutProps) {
  const fallback = useId().replace(/[^a-zA-Z0-9]/g, '');
  const prefix = id?.replace('$', '') ?? `layout${fallback}`;
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const onHeaderScrolled = useRef(onOnHeaderScrolled);
  useLayoutEffect(() => {
    onHeaderScrolled.current = onOnHeaderScrolled;
  });
  useEffect(() => {
    const main = setMainScroll((scrolled) => {
      setIsHeaderScrolled(scrolled);
      onHeaderScrolled.current?.(scrolled);
    });
    const shadow = setScrollShadow();
    return () => {
      removeScrollEvents(main.Out_Element, main.Out_ScrollEvent, shadow.Out_ScrollEvent);
      clearScrollTimeout(shadow.Out_Timeout);
    };
  }, []);
  return (
    <OSBlock name="Layouts.Layout_MainPages" id={id}>
      <LayoutRuntimeTop id={`${prefix}-$b1`} />
      <div
        className={`layout layout-side layout-native ios-bounce ubt-layout-main hide-header-on-scroll${extendedClass === '' ? '' : ` ${extendedClass}`}${enableAccessibilityFeatures ? ' has-accessible-features' : ''}${isGrayBackground ? ' layout-gray-background' : ''}`}
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
            <div className="header-top" data-container="">
              <div
                className="header-content display-flex flex-direction-column justify-content-flex-start"
                data-container=""
              >
                <div className="ubt-layout-main__title" data-container="">
                  <ColumnsTwo
                    id={`${prefix}-$b2`}
                    columnOptions={{
                      ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
                      SpacingSize: UBT_Size.Base,
                      VerticalAlign: UBT_VerticalAlign.Center,
                    }}
                    left={
                      <h2 className="header-title">
                        <div className="OSInline">{placeholderHeaderTitle}</div>
                      </h2>
                    }
                    right={<div className="header-right">{placeholderHeaderRight}</div>}
                  />
                </div>
                <div className="ubt-layout-main__search" data-container="">
                  <ColumnsTwo
                    id={`${prefix}-$b3`}
                    columnOptions={{
                      ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
                      SpacingSize: addHeaderGap ? UBT_Size.Base : UBT_Size.None,
                      VerticalAlign: UBT_VerticalAlign.Center,
                    }}
                    left={<div>{placeholderHeaderInput}</div>}
                    right={<div className="header-right">{placeholderHeaderInputIcon}</div>}
                  />
                </div>
              </div>
            </div>
            <div
              className={`header-top-content ph${isHeaderScrolled ? ` ${getClass_BackgroundColor(UBT_Color.PrimaryGradientRadial)}` : ''}`}
            >
              {headerContent}
            </div>
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
