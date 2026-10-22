import { useEffect, useId, useLayoutEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LayoutRuntime_Top } from '@/shared/NavigationHandler/LayoutRuntime_Top';
import { Icon } from '@/shared/UBTConnectLibrary/Icon';
import { clearScrollTimeout, removeScrollEvents, setScrollShadow } from '@/shared/UBTConnectLibrary/lib/actions';
import { UBT_Color, UBT_IconSize, UBT_Icons } from '@/shared/UBTConnectLibrary/lib/staticEntities';

export interface DetailLayoutProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** The title is on the left (default: centred). */
  alignTitleLeft?: boolean;
  /** Primary-coloured header (`ubt-layout-detail--primary`, default true). */
  isPrimaryColor?: boolean;
  /** Extra classes of the wrapper. */
  extendedClass?: string;
  /** The accessibility features: the wrapper class and the skip link. */
  enableAccessibilityFeatures?: boolean;
  /** Renders LayoutRuntime_Top (default true). */
  initializeNavigationHandler?: boolean;
  /** The header title. */
  headerTitle?: ReactNode;
  /** The right part of the header. */
  headerRight?: ReactNode;
  /** The content under the header top. */
  headerContent?: ReactNode;
  content?: ReactNode;
  /** The bottom bar of the screen. */
  bottom?: ReactNode;
  /** The CommonUI_InsideLayout of the screen, outside the wrapper. */
  commonUI?: ReactNode;
  /** The back arrow. */
  onBack: () => void;
  /** The layout is ready: the id of its wrapper. */
  onReady?: (layoutWrapperId: string) => void;
}

/** The detail layout: optional LayoutRuntime_Top, the wrapper (primary, extended and accessibility classes), the
    skip link, the header with the back arrow, the title (left or centred), the right part and the header content, the
    content and the footer; the CommonUI part sits outside the wrapper. On ready it sets the header and footer shadow
    of the scroll container (SetScrollEvents) and raises `onReady`; on destroy it removes the listener and the timer.
    @origin UBTConnectLibrary.Layouts.Layout_DetailPage */
export function DetailLayout({
  id,
  alignTitleLeft = false,
  isPrimaryColor = true,
  extendedClass = '',
  enableAccessibilityFeatures = false,
  initializeNavigationHandler = true,
  headerTitle,
  headerRight,
  headerContent,
  content,
  bottom,
  commonUI,
  onBack,
  onReady,
}: DetailLayoutProps) {
  const fallback = useId().replace(/[^a-zA-Z0-9]/g, '');
  const prefix = id?.replace('$', '') ?? `layout${fallback}`;
  const onReadyRef = useRef(onReady);
  useLayoutEffect(() => {
    onReadyRef.current = onReady;
  });
  useEffect(() => {
    const shadow = setScrollShadow();
    return () => {
      removeScrollEvents(shadow.Out_Element, shadow.Out_ScrollEvent);
      clearScrollTimeout(shadow.Out_Timeout);
    };
  }, []);
  useEffect(() => {
    onReadyRef.current?.(`${prefix}-LayoutWrapper_Detail`);
  }, [prefix]);

  return (
    <OSBlock name="Layouts.Layout_DetailPage" id={id}>
      {initializeNavigationHandler && <LayoutRuntime_Top id={`${prefix}-$b1`} />}
      <div
        className={`layout layout-side layout-native ios-bounce ubt-layout-detail${isPrimaryColor ? ' ubt-layout-detail--primary' : ''}${extendedClass === '' ? '' : ` ${extendedClass}`}${enableAccessibilityFeatures ? ' has-accessible-features' : ''}`}
        data-container=""
        id={`${prefix}-LayoutWrapper_Detail`}
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
          <header className="header" role="banner">
            <div className="header-top" data-container="">
              <div className="header-content" data-container="">
                <div className="ubt-layout-detail__left" data-container="">
                  <Icon
                    id={`${prefix}-$b2`}
                    inIconId={UBT_Icons.ArrowLeftAlt}
                    inColorId={UBT_Color.Inherit}
                    inSizeId={UBT_IconSize.Base_24}
                    onClick={onBack}
                  />
                  <div className={`header-title${alignTitleLeft ? ' text-align-left' : ' text-align-center'} OSInline`}>
                    {headerTitle}
                  </div>
                </div>
                <div className="header-right">{headerRight}</div>
              </div>
            </div>
            <div className="header-top-content ph">{headerContent}</div>
          </header>
          <div className="content" data-container="">
            <div className="main-content ThemeGrid_Container" data-container="" role="main">
              <div className="content-middle">{content}</div>
            </div>
          </div>
          <footer className="content-bottom" role="contentinfo">
            <div className="footer ph">{bottom}</div>
          </footer>
        </div>
      </div>
      <div>{commonUI}</div>
    </OSBlock>
  );
}
