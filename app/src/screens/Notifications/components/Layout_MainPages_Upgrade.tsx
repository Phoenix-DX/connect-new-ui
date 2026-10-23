// @os-block UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade
import { useEffect, useLayoutEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LayoutRuntimeTop } from '@/components/layout/LayoutRuntimeTop';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import {
  clearScrollTimeout,
  removeScrollEvents,
  setMainFixedScroll,
  setScrollShadow,
} from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_Color, UBT_IconSize, UBT_Icons2 } from '@/shared/UBTConnectLibrary/lib/staticEntities';
import { useNavigateBack } from '@/platform/navigation';

export interface Layout_MainPages_UpgradeProps {
  isGrayBackground?: boolean;
  placeholderHeaderTitle?: ReactNode;
  placeholderHeaderRight?: ReactNode;
  placeholderHeaderInput?: ReactNode;
  headerContent?: ReactNode;
  content?: ReactNode;
  bottom?: ReactNode;
  placeholderCommonUIInsideLayout?: ReactNode;
  /** Event OnHeaderScrolled(IsHeaderScrolled). */
  onOnHeaderScrolled?: (isHeaderScrolled: boolean) => void;
}

/** UBTConnectLibrary.Layouts.Layout_MainPages_Upgrade (p:…Layout_MainPages_Upgrade.mvc.js): view as captured
    (dom/default.html :1-220, :531-591); back arrow → navigateBack (controller :648-663); OnReady SetScrollEvents
    (SetMainFixedScroll with the OnHeaderScrolled callback, SetScrollShadow, :756-806); OnDestroy removes them (:672-706).
    Only this screen uses it (PullToRefresh off, no extended class, no accessibility features). */
export function Layout_MainPages_Upgrade({
  isGrayBackground = false,
  placeholderHeaderTitle,
  placeholderHeaderRight,
  placeholderHeaderInput,
  headerContent,
  content,
  bottom,
  placeholderCommonUIInsideLayout,
  onOnHeaderScrolled,
}: Layout_MainPages_UpgradeProps) {
  const navigateBack = useNavigateBack();
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
  return (
    <OSBlock name="Layouts.Layout_MainPages_Upgrade" id="$b1">
      <LayoutRuntimeTop id="b1-$b1" />
      <div
        className={`layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title mainpage-upgrade-container${isGrayBackground ? ' layout-gray-background' : ''}`}
        data-container=""
        id="b1-LayoutWrapper_Main"
      >
        <a
          aria-label="Skip to Content (Press Enter)"
          className="skip-nav"
          data-link=""
          data-showskipcontent="false"
          href="#"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Skip to Content (Press Enter)
        </a>
        <div className="main" data-container="">
          <div aria-hidden="true" className="sticky-observer" data-container="" />
          <header className="header" data-advancedhtml="" id="b1-Header" role="banner">
            <div className="upgrade-header-top header-top-title" data-container="">
              <div className="header-content" data-container="">
                <div className="ubt-layout-detail__left" data-container="">
                  <Icon
                    id="b1-$b2"
                    inSizeId={UBT_IconSize.Base_24}
                    inIconId={UBT_Icons2.ArrowLeftAlt}
                    inColorId={UBT_Color.Neutral0}
                    onClick={navigateBack}
                  />
                  <div className="header-title-upgrade text-align-center OSInline" id="b1-Placeholder_Header_Title">
                    {placeholderHeaderTitle}
                  </div>
                  <div className="header-right-upgrade" id="b1-Placeholder_Header_Right">
                    {placeholderHeaderRight}
                  </div>
                </div>
              </div>
            </div>
            <div className="upgrade-header-top-search header-top-search" data-container="" id="b1-HeaderSearch">
              <div
                className="header-content display-flex flex-direction-column justify-content-flex-start"
                data-container=""
              >
                <div className="ubt-layout-main__search" data-container="">
                  <div id="b1-Placeholder_Header_Input">{placeholderHeaderInput}</div>
                </div>
              </div>
            </div>
            <div className="header-top-content ph" id="b1-HeaderContent">
              {headerContent}
            </div>
          </header>
          <div className="content" data-container="" id="b1-ContentWrapper">
            <div className="main-content ThemeGrid_Container" data-container="" id="b1-MainContentWrapper" role="main">
              <div className="content-middle" id="b1-Content">
                {content}
              </div>
            </div>
          </div>
          <footer className="content-bottom" data-advancedhtml="" role="contentinfo">
            <div className="footer ph" id="b1-Bottom">
              {bottom}
            </div>
          </footer>
        </div>
        <div className="offline-data-sync" data-container="" />
        <div id="b1-Placeholder_CommonUI_Inside_Layout">{placeholderCommonUIInsideLayout}</div>
      </div>
    </OSBlock>
  );
}
