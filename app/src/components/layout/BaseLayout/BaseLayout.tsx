/** @origin Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI */
// @os-block Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { PullToRefresh } from '@/shared/osui/PullToRefresh';
import { SideMenuBehavior } from '@/shared/Connect2_LegacyShared/lib/staticEntities';

export interface BaseLayoutProps {
  /** OutSystems instance id of the block. */
  id?: string;
  usePullToRefresh?: boolean;
  hideHeaderOnScroll?: boolean;
  /** SideMenuBehavior identifier, written as a class (default Overlay = `aside-overlay`). */
  menuBehavior?: string;
  extendedClass?: string;
  /** Class added to the header (unless transparent) and to the content wrapper. */
  customClass?: string;
  isHeaderTransparent?: boolean;
  /** Placeholder Navigation (side menu). */
  navigation?: ReactNode;
  /** Placeholder HeaderLeft. */
  headerLeft?: ReactNode;
  /** Placeholder HeaderSearch. */
  headerSearch?: ReactNode;
  /** Placeholder Title (inside the h1). */
  title?: ReactNode;
  /** Placeholder HeaderRight. */
  headerRight?: ReactNode;
  /** Placeholder HeaderContent. */
  headerContent?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder Bottom (the screen's bottom bar). */
  bottom?: ReactNode;
  /** Placeholder CommonUI (the screen's CommonUI_InsideLayout). */
  commonUI?: ReactNode;
  /** Event OnPullToRefresh. */
  onOnPullToRefresh?: () => void;
}

/** OutSystems UI base layout of the legacy screens (p:Connect2_LegacyShared.Layout.BaseLayout_UpdatedOSUI.mvc.js
    view): side navigation, header (left, search, h1 title, right, header content), optional PullToRefresh, content,
    footer and CommonUI placeholder. The PullToRefresh raises OnPullToRefresh (controller :530-558). */
export function BaseLayout({
  id,
  usePullToRefresh = false,
  hideHeaderOnScroll = false,
  menuBehavior = SideMenuBehavior.Overlay,
  extendedClass = '',
  customClass = '',
  isHeaderTransparent = false,
  navigation,
  headerLeft,
  headerSearch,
  title,
  headerRight,
  headerContent,
  content,
  bottom,
  commonUI,
  onOnPullToRefresh,
}: BaseLayoutProps) {
  const prefix = id?.replace('$', '');
  return (
    <OSBlock name="Layout.BaseLayout_UpdatedOSUI" id={id}>
      <div
        className={`layout layout-side layout-native ios-bounce ${hideHeaderOnScroll ? 'hide-header-on-scroll ' : ''}${menuBehavior}${extendedClass === '' ? '' : ` ${extendedClass}`}`}
        data-container=""
      >
        <aside className="aside-navigation menu" role="complementary">
          <div>{navigation}</div>
        </aside>
        <div className="main screen" data-container="">
          {hideHeaderOnScroll && <div aria-hidden="true" className="sticky-observer" data-container="" />}
          <header className={`header${!isHeaderTransparent ? ` ${customClass}` : ' transparent'}`} role="banner">
            <div className="header-top" data-container="">
              <div className="header-content display-flex" data-container="">
                <div className="display-flex align-items-center full-width" data-container="">
                  <div className="header-left">{headerLeft}</div>
                  <div className="header-search OSInline">{headerSearch}</div>
                  <h1 className="header-title text-align-center">
                    <div>{title}</div>
                  </h1>
                  <div className="header-right">{headerRight}</div>
                </div>
              </div>
            </div>
            <div className="header-content header-top-content ph">{headerContent}</div>
          </header>
          {usePullToRefresh && (
            <PullToRefresh id={prefix === undefined ? undefined : `${prefix}-$b1`} onContentPull={onOnPullToRefresh} />
          )}
          <div className={`content ${customClass}`} data-container="">
            <div className="main-content ThemeGrid_Container" data-container="" role="main">
              <div className="content-middle">{content}</div>
            </div>
          </div>
          <footer className="content-bottom" role="contentinfo">
            <div className="footer ph bottom">{bottom}</div>
          </footer>
          <div>{commonUI}</div>
        </div>
      </div>
    </OSBlock>
  );
}
