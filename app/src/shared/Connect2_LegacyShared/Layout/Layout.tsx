// @os-block Connect2_LegacyShared.Layout.Layout
import { useEffect, useLayoutEffect, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { setThemeClassToBody } from '@/legacy/os/bodyTheme';
import { LayoutRuntime_Top } from '@/shared/NavigationHandler/LayoutRuntime_Top';
import { BaseLayout_UpdatedOSUI } from '@/shared/Connect2_LegacyShared/BaseLayout_UpdatedOSUI';
import { iOSMetaTags, iOSPreventSwipe } from '@/shared/Connect2_LegacyShared/lib/actions';
import { ThemeClass } from '@/shared/Connect2_LegacyShared/lib/staticEntities';

export interface LayoutProps {
  /** OutSystems instance id of the block. */
  id?: string;
  usePullToRefresh?: boolean;
  /** Classes added after `connect-theme` on the base layout wrapper. */
  extendedClasses?: string;
  customClass?: string;
  isHeaderTransparent?: boolean;
  /** Placeholder Menu (side navigation). */
  menu?: ReactNode;
  /** Placeholder HeaderLeft. */
  headerLeft?: ReactNode;
  /** Placeholder Title. */
  title?: ReactNode;
  /** Placeholder HeaderRight. */
  headerRight?: ReactNode;
  /** Placeholder HeaderContent. */
  headerContent?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder BottomBar (the screen's bottom bar). */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements (the screen's CommonUI_InsideLayout). */
  commonUIElements?: ReactNode;
  /** Event OnPullToRefresh. */
  onOnPullToRefresh?: () => void;
}

/** Legacy screen layout (p:Connect2_LegacyShared.Layout.Layout.mvc.js view): LayoutRuntime_Top, then
    BaseLayout_UpdatedOSUI inside `backwards-compatibility connect-theme`, with ExtendedClass "connect-theme " +
    ExtendedClasses and each placeholder in its own container (HeaderRight `display-flex align-items-center`; the
    HeaderSearch placeholder stays empty). OnInitialize (controller :415) sets the Connect theme class on the body
    (shell/bodyTheme.ts); OnReady (:384-389) runs IOSMetaTags and IOSPreventSwipe (OutSystems UI LayoutReady is not
    ported). */
export function Layout({
  id,
  usePullToRefresh = false,
  extendedClasses = '',
  customClass = '',
  isHeaderTransparent = false,
  menu,
  headerLeft,
  title,
  headerRight,
  headerContent,
  content,
  bottomBar,
  commonUIElements,
  onOnPullToRefresh,
}: LayoutProps) {
  const prefix = id?.replace('$', '');
  const child = (alias: string) => (prefix === undefined ? undefined : `${prefix}-${alias}`);
  useLayoutEffect(() => {
    setThemeClassToBody(ThemeClass.Connect);
  }, []);
  useEffect(() => {
    iOSMetaTags();
    iOSPreventSwipe();
  }, []);
  return (
    <OSBlock name="Layout.Layout" id={id}>
      <LayoutRuntime_Top id={child('$b1')} />
      <div className="backwards-compatibility connect-theme" data-container="">
        <BaseLayout_UpdatedOSUI
          id={child('$b2')}
          usePullToRefresh={usePullToRefresh}
          customClass={customClass}
          extendedClass={`connect-theme ${extendedClasses}`}
          isHeaderTransparent={isHeaderTransparent}
          onOnPullToRefresh={onOnPullToRefresh}
          navigation={<div>{menu}</div>}
          headerLeft={<div>{headerLeft}</div>}
          title={<div>{title}</div>}
          headerRight={<div className="display-flex align-items-center">{headerRight}</div>}
          headerContent={<div>{headerContent}</div>}
          content={<div>{content}</div>}
          bottom={<div>{bottomBar}</div>}
          commonUI={<div>{commonUIElements}</div>}
        />
      </div>
    </OSBlock>
  );
}
