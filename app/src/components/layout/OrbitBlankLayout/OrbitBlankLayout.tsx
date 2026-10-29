/** @origin Connect2_LegacyShared.Layout_OrbitTheme.Layout_OrbitBlank */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LayoutRuntimeTop } from '@/components/layout/LayoutRuntimeTop';
import { BaseLayoutBlank } from '@/components/layout/BaseLayoutBlank/BaseLayoutBlank';
import { useOrbitLayoutEffects } from '@/components/layout/OrbitLayout/useOrbitLayoutEffects';

interface OrbitBlankLayoutProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Input ExtendedClasses: added after `orbit-theme` on the base layout wrapper. */
  extendedClasses?: string;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder CommonUI_Elements. */
  commonUIElements?: ReactNode;
}

/** The blank Orbit layout (Layout_OrbitBlank.mvc.js view :140-210): LayoutRuntime_Top, then
    BaseLayoutBlank_UpdatedOSUI inside `orbit-theme backwards-compatibility`, with ExtendedClass "orbit-theme " +
    ExtendedClasses, the placeholder Content in Content and CommonUI_Elements in CommonUI. OnInitialize sets the Orbit
    theme class on the body (controller :265-300); OnReady runs IOSMetaTags and IOSPreventSwipe (:235-264; OutSystems
    UI DEPRECATED_LayoutReadyMobile is not ported, as in Layout_Orbit): `useOrbitLayoutEffects`. */
export function OrbitBlankLayout({ id, extendedClasses = '', content, commonUIElements }: OrbitBlankLayoutProps) {
  const prefix = id?.replace('$', '');
  const child = (alias: string) => (prefix === undefined ? undefined : `${prefix}-${alias}`);
  useOrbitLayoutEffects();
  return (
    <OSBlock name="Layout_OrbitTheme.Layout_OrbitBlank" id={id}>
      <LayoutRuntimeTop id={child('$b1')} />
      <div className="orbit-theme backwards-compatibility" data-container="">
        <BaseLayoutBlank
          id={child('$b2')}
          extendedClass={`orbit-theme ${extendedClasses}`}
          content={<div id={child('Content')}>{content}</div>}
          commonUI={<div id={child('CommonUI_Elements')}>{commonUIElements}</div>}
        />
      </div>
    </OSBlock>
  );
}
