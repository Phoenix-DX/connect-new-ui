import type { ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { LayoutRuntime_Top } from '../../../shared/NavigationHandler/LayoutRuntime_Top';
import { useNoCommonUi } from '@/platform/feedback/dialogs';
import { OfflineDataSyncEvents } from '../../../shared/UBTConnect/OfflineDataSyncEvents';

export interface LayoutBlankProps {
  /** OutSystems instance id of the block. */
  id: string;
  extendedClass?: string;
  enableAccessibilityFeatures?: boolean;
  /** Placeholder Content. */
  content?: ReactNode;
}

/** UBTConnect App_Common.LayoutBlank (p:UBTConnect.App_Common.LayoutBlank.mvc.js view :145-330): LayoutRuntime_Top,
    the `layout layout-native blank` container (ExtendedClass, EnableAccessibilityFeatures → has-accessible-features)
    with the Content placeholder, and OfflineDataSyncEvents (its sync events are only re-raised, nobody listens here).
    OnReady LayoutReady / SetLang("") and OnDestroy LayoutDestroy are OSUI runtime layout helpers that no layout of the
    app ports (route-spec.md "Decisions to confirm"); AddFavicon("favicon.png")'s link is static in index.html. It has no
    Placeholder_CommonUI_Inside_Layout, so it tells the shell to mount no CommonUI stand-in (CR-Splash-3). */
export function LayoutBlank({
  id,
  extendedClass = '',
  enableAccessibilityFeatures = false,
  content,
}: LayoutBlankProps) {
  useNoCommonUi();
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
