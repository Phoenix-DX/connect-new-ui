import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LayoutRuntime_Top } from '@/shared/NavigationHandler/LayoutRuntime_Top';
import { OfflineDataSyncEvents } from '@/shared/UBTConnect/OfflineDataSyncEvents';

export interface BlankLayoutProps {
  /** OutSystems instance id of the block. */
  id: string;
  /** Extra classes of the layout container. */
  extendedClass?: string;
  /** The accessibility features: the `has-accessible-features` class. */
  enableAccessibilityFeatures?: boolean;
  /** The main content. */
  content?: ReactNode;
}

/** The blank layout: LayoutRuntime_Top, the `layout layout-native blank` container (extended and accessibility
    classes) with the content in the main area, and OfflineDataSyncEvents (it only raises its sync events again, and
    nothing listens to them here). The OSUI runtime layout helpers of OnReady (LayoutReady, SetLang) and OnDestroy
    (LayoutDestroy) are not ported by any layout of the app; the favicon link of AddFavicon is static in index.html.
    The layout has no CommonUI_InsideLayout placeholder: the page that renders it calls `useNoCommonUi`, so the shell
    mounts no CommonUI stand-in (CR-Splash-3).
    @origin UBTConnect.App_Common.LayoutBlank */
export function BlankLayout({
  id,
  extendedClass = '',
  enableAccessibilityFeatures = false,
  content,
}: BlankLayoutProps) {
  const prefix = id.replace('$', '');
  const className =
    'layout layout-native blank' +
    (extendedClass === '' ? '' : ` ${extendedClass}`) +
    (enableAccessibilityFeatures ? ' has-accessible-features' : '');
  return (
    <OSBlock name="App_Common.LayoutBlank" id={id}>
      <LayoutRuntime_Top id={`${prefix}-$b1`} />
      <div className={className} data-container="">
        <div className="content" data-container="">
          <div className="main-content" id={`${prefix}-Content`} role="main">
            {content}
          </div>
        </div>
        <div className="offline-data-sync" data-container="">
          <OfflineDataSyncEvents id={`${prefix}-$b2`} />
        </div>
      </div>
    </OSBlock>
  );
}
