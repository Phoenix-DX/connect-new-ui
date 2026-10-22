// @os-block UBTConnectLibrary.Layouts.Layout_DetailPage
import { useEffect, useId, useLayoutEffect, useRef, type ReactNode } from 'react';
import { OSBlock } from '../../../components/OSBlock';
import { useNavigateBack } from '@/platform/navigation';
import { LayoutRuntime_Top } from '../../NavigationHandler/LayoutRuntime_Top';
import { Icon } from '../Icon';
import { clearScrollTimeout, removeScrollEvents, setScrollShadow } from '../lib/actions';
import { UBT_Color, UBT_IconSize, UBT_Icons } from '../lib/staticEntities';

export interface Layout_DetailPageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  inAlignTitleLeft?: boolean;
  /** Primary-coloured header (`ubt-layout-detail--primary`, default true). */
  inIsPrimaryColor?: boolean;
  inExtendedClass?: string;
  inEnableAccessibilityFeatures?: boolean;
  /** Renders LayoutRuntime_Top (default true). */
  inInitializeNavigationHandler?: boolean;
  /** Placeholder Placeholder_Header_Title. */
  placeholderHeaderTitle?: ReactNode;
  /** Placeholder Placeholder_Header_Right. */
  placeholderHeaderRight?: ReactNode;
  /** Placeholder HeaderContent. */
  headerContent?: ReactNode;
  /** Placeholder Content. */
  content?: ReactNode;
  /** Placeholder Bottom (the screen's bottom bar). */
  bottom?: ReactNode;
  /** Placeholder Placeholder_CommonUI_Inside_Layout (the screen's CommonUI_InsideLayout). */
  placeholderCommonUIInsideLayout?: ReactNode;
  /** Event OnReadyEvent(LayoutWrapperId). */
  onOnReadyEvent?: (layoutWrapperId: string) => void;
}

/** Detail layout (p:UBTConnectLibrary.Layouts.Layout_DetailPage.mvc.js view): optional LayoutRuntime_Top, the
    wrapper (primary / extended / accessibility classes), skip link, header with the back arrow (Icon ArrowLeftAlt,
    OnClick_BackNavigation = previous screen, controller :487-510), title (left or centred), right placeholder and
    header content, content, footer; the CommonUI placeholder sits outside the wrapper. OnReady (:618-705) runs
    SetScrollEvents (:511-540: SetScrollShadow, the header / footer shadow of the scroll container) and ends with
    OnReadyEvent(LayoutWrapper_Detail id); OnDestroy (:549) removes the listener and the shadow timer. */
export function Layout_DetailPage({
  id,
  inAlignTitleLeft = false,
  inIsPrimaryColor = true,
  inExtendedClass = '',
  inEnableAccessibilityFeatures = false,
  inInitializeNavigationHandler = true,
  placeholderHeaderTitle,
  placeholderHeaderRight,
  headerContent,
  content,
  bottom,
  placeholderCommonUIInsideLayout,
  onOnReadyEvent,
}: Layout_DetailPageProps) {
  const fallback = useId().replace(/[^a-zA-Z0-9]/g, '');
  const prefix = id?.replace('$', '') ?? `layout${fallback}`;
  const navigateBack = useNavigateBack();
  const onReady = useRef(onOnReadyEvent);
  useLayoutEffect(() => {
    onReady.current = onOnReadyEvent;
  });
  useEffect(() => {
    const shadow = setScrollShadow();
    return () => {
      removeScrollEvents(shadow.Out_Element, shadow.Out_ScrollEvent);
      clearScrollTimeout(shadow.Out_Timeout);
    };
  }, []);
  useEffect(() => {
    onReady.current?.(`${prefix}-LayoutWrapper_Detail`);
  }, [prefix]);

  return (
    <OSBlock name="Layouts.Layout_DetailPage" id={id}>
      {inInitializeNavigationHandler && <LayoutRuntime_Top id={`${prefix}-$b1`} />}
      <div
        className={`layout layout-side layout-native ios-bounce ubt-layout-detail${inIsPrimaryColor ? ' ubt-layout-detail--primary' : ''}${inExtendedClass === '' ? '' : ` ${inExtendedClass}`}${inEnableAccessibilityFeatures ? ' has-accessible-features' : ''}`}
        data-container=""
        id={`${prefix}-LayoutWrapper_Detail`}
      >
        <a
          aria-label="Skip to Content (Press Enter)"
          className="skip-nav"
          data-link=""
          data-showskipcontent={inEnableAccessibilityFeatures ? 'true' : 'false'}
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
                    onClick={navigateBack}
                  />
                  <div
                    className={`header-title${inAlignTitleLeft ? ' text-align-left' : ' text-align-center'} OSInline`}
                  >
                    {placeholderHeaderTitle}
                  </div>
                </div>
                <div className="header-right">{placeholderHeaderRight}</div>
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
      <div>{placeholderCommonUIInsideLayout}</div>
    </OSBlock>
  );
}
