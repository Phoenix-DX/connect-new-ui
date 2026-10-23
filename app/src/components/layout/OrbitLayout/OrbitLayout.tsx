/** @origin Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit */
// @os-block Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit
import { useEffect, useLayoutEffect, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { setThemeClassToBody } from '@/legacy/os/bodyTheme';
import { LayoutRuntimeTop } from '@/components/layout/LayoutRuntimeTop';
import { BaseLayout } from '@/components/layout/BaseLayout';
import { iOSMetaTags, iOSPreventSwipe } from '@/shared/Connect2_LegacyShared/lib/actions';
import { ThemeClass } from '@/shared/Connect2_LegacyShared/lib/staticEntities';

export interface OrbitLayoutProps {
  /** OutSystems instance id of the block. */
  id?: string;
  usePullToRefresh?: boolean;
  /** Classes added after `orbit-theme` on the base layout wrapper. */
  extendedClasses?: string;
  customClass?: string;
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
  /** Placeholder BottomBar. */
  bottomBar?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
  /** Event OnPullToRefresh. */
  onOnPullToRefresh?: () => void;
}

/** Orbit screen layout (migration/screens/EventDetail/analysis/sources/pretty/
    Connect2_LegacyShared.Layout_OrbitTheme.Layout_Orbit.mvc.js, view :103-329): LayoutRuntime_Top, then
    BaseLayout_UpdatedOSUI inside `orbit-theme backwards-compatibility`, with ExtendedClass "orbit-theme " +
    ExtendedClasses, CustomClass, UsePullToRefresh and each placeholder in its own container (HeaderSearch empty;
    IsHeaderTransparent not passed). OnInitialize (controller :384-408) sets the Orbit theme class on the body
    (shell/bodyTheme.ts); OnReady (:353-383) runs IOSMetaTags and IOSPreventSwipe (OutSystems UI
    DEPRECATED_LayoutReadyMobile is not ported, as in Layout). */
export function OrbitLayout({
  id,
  usePullToRefresh = false,
  extendedClasses = '',
  customClass = '',
  menu,
  headerLeft,
  title,
  headerRight,
  headerContent,
  content,
  bottomBar,
  commonUIElements,
  onOnPullToRefresh,
}: OrbitLayoutProps) {
  const prefix = id?.replace('$', '');
  const child = (alias: string) => (prefix === undefined ? undefined : `${prefix}-${alias}`);
  useLayoutEffect(() => {
    setThemeClassToBody(ThemeClass.Orbit);
  }, []);
  useEffect(() => {
    iOSMetaTags();
    iOSPreventSwipe();
  }, []);
  return (
    <OSBlock name="Layout_OrbitTheme.Layout_Orbit" id={id}>
      <LayoutRuntimeTop id={child('$b1')} />
      <div className="orbit-theme backwards-compatibility" data-container="">
        <BaseLayout
          id={child('$b2')}
          usePullToRefresh={usePullToRefresh}
          customClass={customClass}
          extendedClass={`orbit-theme ${extendedClasses}`}
          onOnPullToRefresh={onOnPullToRefresh}
          navigation={<div>{menu}</div>}
          headerLeft={<div>{headerLeft}</div>}
          title={<div>{title}</div>}
          headerRight={<div>{headerRight}</div>}
          headerContent={<div>{headerContent}</div>}
          content={<div>{content}</div>}
          bottom={<div>{bottomBar}</div>}
          commonUI={<div>{commonUIElements}</div>}
        />
      </div>
    </OSBlock>
  );
}
