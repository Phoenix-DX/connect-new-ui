// @os-block UBTConnectLibrary.Layouts.Layout_HomePage
import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { LayoutRuntime_Top } from '../../NavigationHandler/LayoutRuntime_Top';
import { PullToRefresh } from '../../osui/PullToRefresh';
import { Columns_Two } from '../Columns_Two';
import { Icon } from '../Icon';
import { formatClasses, getClass_BackgroundColor, initialize_SvgScroll } from '../lib/actions';
import {
  UBT_Color,
  UBT_ColumnBehaviour,
  UBT_Icons,
  UBT_IconSize,
  UBT_Size,
  UBT_VerticalAlign,
} from '../lib/staticEntities';
import { SubLayout_HomePageSearch } from '../SubLayout_HomePageSearch';
import { SVG_Background_Custom } from '../SVG_Background_Custom';

export interface Layout_HomePageProps {
  /** OutSystems instance id of the block. */
  id?: string;
  usePullToRefresh?: boolean;
  extendedClass?: string;
  enableAccessibilityFeatures?: boolean;
  /** UBT_Color identifier of the content background (default Neutral4). */
  contentBackgroundColor?: string;
  addSearchBar?: boolean;
  /** CSS height of the curved header (`--current-svg-height`, default "260px"). */
  sVGHeight?: string;
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
  /** Event OnSVGScrolled(IsSVGScrolled). */
  onOnSVGScrolled?: (isSVGScrolled: boolean) => void;
  /** Event OnSearchInputScrolled(IsSearchInputScrolled). */
  onOnSearchInputScrolled?: (isSearchInputScrolled: boolean) => void;
  /** Event OnReadyEvent(ContentWrapperId). */
  onOnReadyEvent?: (contentWrapperId: string) => void;
  /** Event OnSearchClick (header icon or search bar). */
  onOnSearchClick?: () => void;
  /** Event OnPullToRefresh. */
  onOnPullToRefresh?: () => void;
}

/** Home layout of HomeFeed and Profile (p:UBTConnectLibrary.Layouts.Layout_HomePage.mvc.js view :154-640). The header
    gets the gradient once the SVG header is scrolled past; the search icon shows once the search bar is. OnReady
    (controller :821-862): `--current-svg-height` = SVGHeight on the wrapper, SetScrollEvents (Initialize_SvgScroll on
    the SearchInput and SVG blocks), OnReadyEvent(ContentWrapper id); OnDestroy removes the scroll listener. */
export function Layout_HomePage({
  id,
  usePullToRefresh = false,
  extendedClass = '',
  enableAccessibilityFeatures = false,
  contentBackgroundColor = UBT_Color.Neutral4,
  addSearchBar = true,
  sVGHeight = '260px',
  placeholderHeaderTitle,
  placeholderHeaderRight,
  headerContent,
  content,
  bottom,
  placeholderCommonUIInsideLayout,
  onOnSVGScrolled,
  onOnSearchInputScrolled,
  onOnReadyEvent,
  onOnSearchClick,
  onOnPullToRefresh,
}: Layout_HomePageProps) {
  const fallback = useId().replace(/[^a-zA-Z0-9]/g, '');
  const prefix = id?.replace('$', '') ?? `layout${fallback}`;
  const [isSVGScrolled, setIsSVGScrolled] = useState(false);
  const [isSearchInputScrolled, setIsSearchInputScrolled] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const events = useRef({ onOnSVGScrolled, onOnSearchInputScrolled, onOnReadyEvent });
  useLayoutEffect(() => {
    events.current = { onOnSVGScrolled, onOnSearchInputScrolled, onOnReadyEvent };
  });
  const svgHeight = useRef(sVGHeight);

  useEffect(() => {
    wrapperRef.current?.style.setProperty('--current-svg-height', svgHeight.current); // JSUtils_SetStyleProperty
    /* OnHandle_OnSVGScrolledTrigger / OnHandle_OnSearchInputScrolledTrigger (:677-718, :899-940): only a change
       updates the variable and raises the event. */
    let svgScrolled = false;
    let searchScrolled = false;
    const destroy = initialize_SvgScroll(
      `${prefix}-SearchInput`,
      (state) => {
        if (state === searchScrolled) return;
        searchScrolled = state;
        setIsSearchInputScrolled(state);
        events.current.onOnSearchInputScrolled?.(state);
      },
      (state) => {
        if (state === svgScrolled) return;
        svgScrolled = state;
        setIsSVGScrolled(state);
        events.current.onOnSVGScrolled?.(state);
      },
      `${prefix}-SVG`,
    );
    events.current.onOnReadyEvent?.(`${prefix}-ContentWrapper`);
    return () => {
      destroy?.();
    };
  }, [prefix]);

  return (
    <OSBlock name="Layouts.Layout_HomePage" id={id}>
      <LayoutRuntime_Top id={`${prefix}-$b1`} />
      <div
        className={`layout layout-side layout-native ios-bounce ubt-layout-home${extendedClass === '' ? '' : ` ${extendedClass}`}${enableAccessibilityFeatures ? ' has-accessible-features' : ''}`}
        data-container=""
        id={`${prefix}-LayoutWrapper_Home`}
        ref={wrapperRef}
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
          <header
            className={`header${isSVGScrolled ? ` ${getClass_BackgroundColor(UBT_Color.PrimaryGradientRadial)}` : ''}`}
            id={`${prefix}-Header`}
            role="banner"
          >
            <div className="header-top" data-container="">
              <div
                className="header-content display-flex flex-direction-column justify-content-flex-start"
                data-container=""
              >
                <div className="ubt-layout-home__title" data-container="">
                  <Columns_Two
                    id={`${prefix}-$b2`}
                    columnOptions={{
                      ColumnBehaviour: UBT_ColumnBehaviour.ReduceLast,
                      SpacingSize: UBT_Size.Base,
                      VerticalAlign: UBT_VerticalAlign.Center,
                    }}
                    left={
                      <h2 className="header-title">
                        <div className="OSInline">{placeholderHeaderTitle}</div>
                      </h2>
                    }
                    right={
                      <div className="ubt-layout-home__header--right" data-container="">
                        {addSearchBar && (
                          <Icon
                            inColorId={UBT_Color.Inherit}
                            inIconId={UBT_Icons.Search}
                            inVisible={isSearchInputScrolled}
                            inSizeId={UBT_IconSize.Base_24}
                            onClick={onOnSearchClick}
                          />
                        )}
                        <div className="header-right">{placeholderHeaderRight}</div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="header-top-content ph">{headerContent}</div>
          </header>
          {usePullToRefresh && <PullToRefresh id={`${prefix}-$b4`} onContentPull={onOnPullToRefresh} />}
          <div
            className={formatClasses('content', getClass_BackgroundColor(contentBackgroundColor))}
            data-container=""
            id={`${prefix}-ContentWrapper`}
          >
            <div
              className="main-content ThemeGrid_Container"
              data-container=""
              id={`${prefix}-MainContentWrapper`}
              role="main"
            >
              <div className="content-middle" data-container="">
                <SVG_Background_Custom id={`${prefix}-SVG`} />
                {addSearchBar && (
                  <SubLayout_HomePageSearch id={`${prefix}-SearchInput`} onClickedSearch={onOnSearchClick} />
                )}
                <div className="ubt-zindex-2">{content}</div>
              </div>
            </div>
          </div>
          <footer className="content-bottom" role="contentinfo">
            <div className="footer ph">{bottom}</div>
          </footer>
        </div>
        <div>{placeholderCommonUIInsideLayout}</div>
      </div>
    </OSBlock>
  );
}
