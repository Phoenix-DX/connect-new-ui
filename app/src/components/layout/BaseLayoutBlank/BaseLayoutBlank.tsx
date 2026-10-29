/** @origin Connect2_LegacyShared.Layout.BaseLayoutBlank_UpdatedOSUI */
import type { ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';

interface BaseLayoutBlankProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Input ExtendedClass: added after the layout classes. */
  extendedClass?: string;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder CommonUI. */
  commonUI?: ReactNode;
}

/** The blank base layout without header, menu or footer (BaseLayoutBlank_UpdatedOSUI.mvc.js view :135-200):
    LayoutWrapper `layout layout-side layout-native ios-bounce` and ExtendedClass, then `main screen`, ContentWrapper
    `content`, MainContentWrapper `main-content ThemeGrid_Container` (role main) and the Content placeholder
    `content-middle`; the CommonUI placeholder follows `main screen`. The OutSystems UI runtime helpers of OnReady
    (LayoutReady, SetLang, AddFavicon, :266-274) and OnDestroy (LayoutDestroy, :238-239) are not ported by any layout
    of the app. */
export function BaseLayoutBlank({ id, extendedClass = '', content, commonUI }: BaseLayoutBlankProps) {
  const prefix = id?.replace('$', '');
  const named = (name: string) => (prefix === undefined ? undefined : `${prefix}-${name}`);
  return (
    <OSBlock name="Layout.BaseLayoutBlank_UpdatedOSUI" id={id}>
      <div
        className={`layout layout-side layout-native ios-bounce${extendedClass === '' ? '' : ` ${extendedClass}`}`}
        data-container=""
        id={named('LayoutWrapper')}
      >
        <div className="main screen" data-container="">
          <div className="content" data-container="" id={named('ContentWrapper')}>
            <div
              className="main-content ThemeGrid_Container"
              data-container=""
              id={named('MainContentWrapper')}
              role="main"
            >
              <div className="content-middle" id={named('Content')}>
                {content}
              </div>
            </div>
          </div>
        </div>
        <div id={named('CommonUI')}>{commonUI}</div>
      </div>
    </OSBlock>
  );
}
