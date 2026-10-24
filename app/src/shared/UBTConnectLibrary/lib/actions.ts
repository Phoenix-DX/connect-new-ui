import { osImage } from '@/legacy/os/os-assets';
/* Client actions of UBTConnectLibrary used by the shared blocks, ported 1:1 from UBTConnectLibrary.controller.js
   (copy in migration/screens/<Screen>/analysis/sources/raw/). One function per action, named after it in lowerCamelCase;
   it returns the action's single output. Empty text means "no value" (OutSystems NullTextIdentifier). */
import type {
  ActionsMenuEnableOptions,
  BackgroundImage,
  BorderOptions,
  ColumnOptions,
  ContainerOptions,
  SizeOptions,
  SpacingOptions,
  TextOptions,
  DateComponentFormat,
  LookupActions,
  LookupConcepts,
  LookupItem,
  TextGenderIdentifier,
  WeekdayLabelType,
} from './structures';
import {
  UBT_FontSize,
  UBT_FontWeight,
  UBT_ImageCardType,
  UBT_Shape,
  Connect_UpdateTypeId,
  Gender,
  UBT_BackgroundImageSize,
  UBT_Color,
  UBT_Display,
  UBT_Icons,
  UBT_ImageSize,
  UBT_Size,
  UBT_VerticalAlign,
} from './staticEntities';
import { GutterSize } from '@/components/ui/lib/staticEntities';
import { dayOfWeek, formatDateTime, parseOsDate } from '@/shared/lib/osDateTime';

/** FormatClasses: appends a class to a class list, without a leading space. */
export function formatClasses(originalClasses: string, newClassIn: string): string {
  if (newClassIn === '') return originalClasses;
  return originalClasses !== '' ? `${originalClasses} ${newClassIn}` : newClassIn;
}

/** FormatStyles: appends "property: value;" to a style text. */
export function formatStyles(originalStyles: string, newStyleProperty: string, newStyleValue: string): string {
  if (newStyleProperty === '' || newStyleValue === '') return originalStyles;
  const newStyle = `${newStyleProperty}: ${newStyleValue}${newStyleValue.endsWith(';') ? '' : ';'}`;
  return originalStyles !== '' ? `${originalStyles} ${newStyle}` : newStyle;
}

export function getClass_Color(in_ColorId: string): string {
  return `text-${in_ColorId}`;
}

export function getClass_BackgroundColor(in_ColorId: string): string {
  return in_ColorId !== '' ? `background-${in_ColorId}` : '';
}

export function getClass_Visibility(visibilityOption: string): string {
  return `visibility-${visibilityOption}`;
}

export function getClasses_UBTSkeletonElement(): string {
  return 'ubt-skeleton-section__element';
}

export function getClasses_UBTSkeletonSection(): string {
  return 'ubt-skeleton-section';
}

/** GetSpacingOptions: "<prefix>-<size>", else x/y axis, else each side. */
export function getSpacingOptions(prefix: string, spacingOptions: SpacingOptions = {}): string {
  const s = spacingOptions;
  if (s.GeneralSizeId) return formatClasses('', `${prefix}-${s.GeneralSizeId}`);
  let classes = '';
  if (s.HorizontalSizeId) {
    classes = formatClasses(classes, `${prefix}-x-${s.HorizontalSizeId}`);
  } else {
    if (s.LeftSizeId) classes = formatClasses(classes, `${prefix}-left-${s.LeftSizeId}`);
    if (s.RightSizeId) classes = formatClasses(classes, `${prefix}-right-${s.RightSizeId}`);
  }
  if (s.VerticalSizeId) {
    classes = formatClasses(classes, `${prefix}-y-${s.VerticalSizeId}`);
  } else {
    if (s.TopSizeId) classes = formatClasses(classes, `${prefix}-top-${s.TopSizeId}`);
    if (s.BottomSizeId) classes = formatClasses(classes, `${prefix}-bottom-${s.BottomSizeId}`);
  }
  return classes;
}

export function getClasses_Border(borderOptions: BorderOptions = {}): string {
  let classes = formatClasses('', getSpacingOptions('border', borderOptions.Size));
  if (borderOptions.Color) classes = formatClasses(classes, `border-color-${borderOptions.Color}`);
  const radius = borderOptions.Radius ?? {};
  if (radius.GeneralSizeId) {
    classes = formatClasses(classes, `border-radius-${radius.GeneralSizeId}`);
  } else {
    if (radius.TopLeftId) classes = formatClasses(classes, `border-radius-top-left-${radius.TopLeftId}`);
    if (radius.TopRightId) classes = formatClasses(classes, `border-radius-top-right-${radius.TopRightId}`);
    if (radius.BottomRightId) classes = formatClasses(classes, `border-radius-bottom-right-${radius.BottomRightId}`);
    if (radius.BottomLeftId) classes = formatClasses(classes, `border-radius-bottom-left-${radius.BottomLeftId}`);
  }
  return classes;
}

export function getClasses_Text(textOptions: TextOptions = {}): string {
  let classes = '';
  if (textOptions.Color) classes = formatClasses(classes, getClass_Color(textOptions.Color));
  if (textOptions.FontWeight) classes = formatClasses(classes, `font-${textOptions.FontWeight}`);
  if (textOptions.FontSize) classes = formatClasses(classes, `font-size-${textOptions.FontSize}`);
  if (textOptions.IsItalic) classes = formatClasses(classes, 'italic');
  if (textOptions.IsUnderlined) classes = formatClasses(classes, 'text-underline');
  return classes;
}

export function getClasses_Container(containerOptions: ContainerOptions = {}): string {
  const o = containerOptions;
  let classes = '';
  if (o.IsInlineBlock) classes = formatClasses(classes, 'inline-block');
  if (o.IsSkeletonElement) classes = formatClasses(classes, getClasses_UBTSkeletonElement());
  const display = o.DisplayOptions ?? {};
  if (display.Display) {
    classes = formatClasses(classes, display.Display);
    if (display.Display === UBT_Display.Flex || display.Display === UBT_Display.InlineFlex) {
      classes = formatClasses(classes, display.AlignItems ?? '');
      classes = formatClasses(classes, display.JustifyContent ?? '');
      classes = formatClasses(classes, display.FlexDirection ?? '');
    }
  }
  if (o.Background?.BackgroundColor) {
    classes = formatClasses(classes, getClass_BackgroundColor(o.Background.BackgroundColor));
  }
  if (o.ShadowId) classes = formatClasses(classes, `shadow-${o.ShadowId}`);
  if (o.Visibility) classes = formatClasses(classes, getClass_Visibility(o.Visibility));
  classes = formatClasses(classes, getClasses_Border(o.BorderOptions));
  classes = formatClasses(classes, getClasses_Text(o.TextOptions));
  classes = formatClasses(classes, getSpacingOptions('padding', o.PaddingSize));
  classes = formatClasses(classes, getSpacingOptions('margin', o.MarginSize));
  return classes;
}

/** GetStyle_SizeOptions: min-/main/max- declarations of one property ("height" or "width"). */
export function getStyle_SizeOptions(property: string, sizeOptions: SizeOptions = {}): string {
  let style = '';
  if (sizeOptions.Min) style = formatStyles(style, `min-${property}`, sizeOptions.Min);
  if (sizeOptions.Main) style = formatStyles(style, property, sizeOptions.Main);
  if (sizeOptions.Max) style = formatStyles(style, `max-${property}`, sizeOptions.Max);
  return style;
}

export function getStyle_BackgroundImage(backgroundImage: BackgroundImage = {}): string {
  const b = backgroundImage;
  let style = '';
  if (b.Image) style = formatStyles(style, 'background-image', b.Image);
  if (b.Size) style = formatStyles(style, 'background-size', b.Size);
  if (b.Position) style = formatStyles(style, 'background-position', b.Position);
  if (b.Repeat) style = formatStyles(style, 'background-repeat', b.Repeat);
  if (b.Origin) style = formatStyles(style, 'background-origin', b.Origin);
  if (b.Attachment) style = formatStyles(style, 'background-attachment', b.Attachment);
  if (b.BlendMode) style = formatStyles(style, 'background-blend-mode', b.BlendMode);
  return style;
}

/** GetStyle_Opacity: "<property>: rgba(var(--color-rgb-<color>),<opacity>);" for 0 < opacity < 1. */
export function getStyle_Opacity(property: string, opacity: number, color: string): string {
  if (!(opacity > 0 && opacity < 1)) return '';
  return `${property}: rgba(var(--color-rgb-${color || UBT_Color.Neutral0}),${opacity});`;
}

export function convertUbtSizeToGutterSize(uBTSize: string): string {
  const map: Record<string, string> = {
    [UBT_Size.None]: GutterSize.None,
    [UBT_Size.ExtraSmall]: GutterSize.ExtraSmall,
    [UBT_Size.Small]: GutterSize.Small,
    [UBT_Size.Base]: GutterSize.Base,
    [UBT_Size.Medium]: GutterSize.Medium,
    [UBT_Size.Large]: GutterSize.Large,
    [UBT_Size.ExtraLarge]: GutterSize.ExtraLarge,
    [UBT_Size.DoubleExtraLarge]: GutterSize.XXLarge,
  };
  return map[uBTSize] ?? '';
}

export function convertVerticalAlignToFlexAlignItems(verticalAligmentId: string): string {
  if (verticalAligmentId === UBT_VerticalAlign.Top) return 'align-items-flex-start';
  if (verticalAligmentId === UBT_VerticalAlign.Center) return 'align-items-center';
  if (verticalAligmentId === UBT_VerticalAlign.Bottom) return 'align-items-flex-end';
  return '';
}

export function getClasses_Column(columnOptions: ColumnOptions = {}): string {
  let classes = '';
  if (columnOptions.ColumnBehaviour) classes = formatClasses(classes, `ubt-columns-${columnOptions.ColumnBehaviour}`);
  if (columnOptions.VerticalAlign) {
    classes = formatClasses(classes, convertVerticalAlignToFlexAlignItems(columnOptions.VerticalAlign));
  }
  if (columnOptions.FlexDirection) classes = formatClasses(classes, columnOptions.FlexDirection);
  return classes;
}

/** GetLocalVariable_ColumnSize: the column width custom property, for sizes > 0. */
export function getLocalVariable_ColumnSize(in_Size: number): string {
  return in_Size > 0 ? `--_ubt-column-width:  ${in_Size}px;` : '';
}

export function getClasses_Button(
  in_UBT_ButtonSizeId: string,
  in_UBT_ButtonTypeId: string,
  in_MainContainerClass: string,
  is_IsDisabled: boolean,
  in_UBT_FlexBehaviorId: string,
): string {
  let classes = '';
  if (in_UBT_ButtonSizeId) classes = `${in_MainContainerClass}--${in_UBT_ButtonSizeId}`;
  if (in_UBT_ButtonTypeId) classes = formatClasses(classes, `${in_MainContainerClass}--${in_UBT_ButtonTypeId}`);
  if (is_IsDisabled) classes = formatClasses(classes, `${in_MainContainerClass}--disabled`);
  if (in_UBT_FlexBehaviorId) classes = formatClasses(classes, in_UBT_FlexBehaviorId);
  return classes;
}

/** GetClasses_LazyImageSize_Dev: the size classes of LazyImage's image and fallback containers. */
export function getClasses_LazyImageSize_Dev(heightSizeId: string, widthSizeId: string, isNoImage: boolean): string {
  const { Square, Auto, FullWidth_100_Percent: FullWidth, FullHeight_100_Percent: FullHeight } = UBT_ImageSize;
  const isSized = (id: string) => id !== '' && id !== Square && id !== FullHeight && id !== FullWidth && id !== Auto;
  if ((widthSizeId === Square && isSized(heightSizeId)) || (heightSizeId === Square && isSized(widthSizeId))) {
    // Is Square?
    return `ubt-lazy-image-${
      heightSizeId === Square
        ? `${widthSizeId} ubt-lazy-image--width-${Square}`
        : widthSizeId === Square
          ? `${heightSizeId} ubt-lazy-image--width-${Square}`
          : `${Auto} ubt-lazy-image--width-${FullWidth}`
    }`;
  }
  if (heightSizeId !== '') {
    if (!(heightSizeId === Square || heightSizeId === Auto)) {
      const classes = `ubt-lazy-image-${heightSizeId}`;
      return isNoImage
        ? formatClasses(classes, `ubt-background-image--${UBT_BackgroundImageSize.IntrinsicWidth_3_To_2}`)
        : formatClasses(classes, `ubt-lazy-image--width-${Auto}`);
    }
  }
  if (widthSizeId !== '') {
    if (!(widthSizeId === Square || widthSizeId === Auto)) {
      const classes = `ubt-lazy-image--width-${widthSizeId}`;
      return isNoImage
        ? formatClasses(classes, `ubt-background-image--${UBT_BackgroundImageSize.IntrinsicHeight_2_To_3}`)
        : formatClasses(classes, `ubt-lazy-image-${Auto}`);
    }
  }
  return `ubt-lazy-image-${Auto} ubt-lazy-image--width-${FullWidth}`;
}

/** RemoveRegexSpecialCharacters (JS node): regex special characters become spaces. */
export function removeRegexSpecialCharacters(text: string): string {
  return text ? text.replace(/[.,#*+?^$&{}()%@|[\-\]\\]/g, ' ') : '';
}

/** SVGHeader_GetPath (UBTConnectLibrary.controller.js:9022-9060, copy in BookmarksByGroup sources/raw): the SVG path
    of the curved header, CurveOffset 20, Height = HeightPercentage / 100 * 200. In_ExpectedHeightInPIxel is not a
    parameter: every caller here (SVG_Background_Custom) passes 0, so the SVGHeader_SpecificHeight_GetPath branch is
    not ported. */
export function sVGHeader_GetPath(in_HeightPercentage: number, in_CurvaturePercentage: number): string {
  const curveOffset = 20;
  const height = (in_HeightPercentage / 100) * 200;
  const top = height - curveOffset;
  const control = top + (in_CurvaturePercentage * curveOffset) / 100;
  return `M0,0 H100 V${String(top)} Q50,${String(control)} 0,${String(top)} Z`;
}

/** GetClasses_AvatarSize: "ubt-avatar-image-" + SizeId when a size is set (UBTConnectLibrary.controller.js:3633). */
export function getClasses_AvatarSize(sizeId: string): string {
  return sizeId !== '' ? `ubt-avatar-image-${sizeId}` : '';
}

/** BottomBarSlider_ForceRefresh (JavaScript1 JS node): tells the bottom bar slider to refresh, as a navigation
    transition from the screen container to itself. */
export function bottomBarSlider_ForceRefresh(): void {
  const screen = document.querySelector('.screen-container');
  const detail = { to: screen, from: screen };
  window.dispatchEvent(new CustomEvent('dx-navigation-transition-start', { detail }));
}

interface NavigationTransitionDetail {
  to: Element | null;
  from?: Element | null;
  duration?: number;
}

let bottomBarSliderReady = false;

/**
 * OnApplicationReady_BottomBarSlider (UBTConnectLibrary.controller.js:7800-7889, copy in
 * migration/screens/HomeFeed/analysis/sources/raw/; run by UBTConnect OnApplicationReady after AppManager_Mobile_OnAppReady,
 * UBTConnect.controller.js:15318-15326). The Initialize JS (:7831-7888) as is: one slider element, appended to
 * #transitionContainer while the target screen's bottom bar has an active item (`.list  > a.active`), with the item count,
 * the active index and the transition duration as CSS variables; then BottomBarSlider_ForceRefresh. Once per page (the
 * original runs once per app start). `?.` on the screen and the container only keeps tests without the app frame quiet.
 */
export function onApplicationReady_BottomBarSlider(): void {
  if (!bottomBarSliderReady) {
    bottomBarSliderReady = true;
    const slider = document.createElement('div');
    slider.classList.add('dx-bottom-bar-slider');
    slider.appendChild(document.createElement('div'));

    window.addEventListener('dx-navigation-transition-start', (evt) => {
      const detail = (evt as CustomEvent<NavigationTransitionDetail>).detail;
      const bottomBar = detail.to?.querySelector('.bottom-bar');
      let hasActiveItem = false;
      let direction = 1;

      if (bottomBar) {
        const items = bottomBar.querySelectorAll('.list  > a');
        let activeItemIndex = -1;
        for (let i = 0; i < items.length; i++) {
          if (items[i]?.matches('.active')) {
            activeItemIndex = i;
            break;
          }
        }
        slider.style.setProperty('--dx-bottom-bar-items', String(items.length));
        if (activeItemIndex !== -1) {
          if (slider.parentNode) {
            // Detect direction of motion in the bottom bar
            const previousActiveItemIndex = Number(slider.style.getPropertyValue('--dx-bottom-bar-active-item'));
            direction = activeItemIndex >= previousActiveItemIndex ? 1 : -1;
          }
          slider.style.setProperty('--dx-bottom-bar-active-item', String(activeItemIndex));
          hasActiveItem = true;
        }
      }

      // `evt.detail.duration + "ms"`: "undefinedms" for BottomBarSlider_ForceRefresh, as captured.
      slider.style.setProperty('--dx-bottom-bar-transition-duration', `${String(detail.duration)}ms`);
      document
        .getElementById('transitionContainer')
        ?.classList.toggle('dx-bottom-bar-slider-reverse-direction', direction < 0);

      if (hasActiveItem) {
        if (!slider.parentNode) {
          slider.classList.add('dx-bottom-bar-slider-appear');
          slider.addEventListener(
            'animationend',
            () => {
              slider.classList.remove('dx-bottom-bar-slider-appear');
            },
            { once: true },
          );
          document.getElementById('transitionContainer')?.appendChild(slider);
        }
      } else if (slider.parentNode) {
        slider.classList.add('dx-bottom-bar-slider-disappear');
        slider.addEventListener(
          'animationend',
          () => {
            slider.classList.remove('dx-bottom-bar-slider-disappear');
            slider.parentNode?.removeChild(slider);
          },
          { once: true },
        );
      }
    });
  }
  bottomBarSlider_ForceRefresh();
}

/* ---- Wave 2D (Update_ListItem, Layout_HomePage) ---- */

/** GetBackgroundColor_IsRead (UBTConnectLibrary.controller.js:3277): CyanLightest when not read, otherwise "". */
export function getBackgroundColor_IsRead(in_IsRead: boolean): string {
  return in_IsRead ? '' : UBT_Color.CyanLightest;
}

/** Get_BackgroundColor_Avatar_UpdateItem (:1436): marriage yellow, birth blue (male) or pink, otherwise neutral. */
export function get_BackgroundColor_Avatar_UpdateItem(in_Type_UpdateFeedItemId: string, in_Type_GenderId = ''): string {
  if (in_Type_UpdateFeedItemId === Connect_UpdateTypeId.Marriage) return UBT_Color.YellowLightest;
  if (in_Type_UpdateFeedItemId === Connect_UpdateTypeId.Birth)
    return in_Type_GenderId === Gender.MALE ? UBT_Color.BlueNonStandard : UBT_Color.PinkNonStandard;
  return UBT_Color.Neutral3;
}

/** Get_FontColor_Avatar_UpdateItem (:1878): marriage YellowDark, birth Neutral0 (both genders), otherwise Neutral7. */
export function get_FontColor_Avatar_UpdateItem(in_Type_UpdateFeedItemId: string, in_Type_GenderId: string): string {
  void in_Type_GenderId; // both genders give Neutral0
  if (in_Type_UpdateFeedItemId === Connect_UpdateTypeId.Marriage) return UBT_Color.YellowDark;
  if (in_Type_UpdateFeedItemId === Connect_UpdateTypeId.Birth) return UBT_Color.Neutral0;
  return UBT_Color.Neutral7;
}

/** Type_GenderIdentifier of the Tag actions: for a birth, FEMALE unless one of the list is MALE; otherwise "". */
function tagGender(type_UpdateFeedItemId: string, initialsList: TextGenderIdentifier[]): string {
  if (type_UpdateFeedItemId !== Connect_UpdateTypeId.Birth) return '';
  return initialsList.some((r) => r.Gender === Gender.MALE) ? Gender.MALE : Gender.FEMALE;
}

/** Get_BackgroundColor_Tag_UpdateItem (:1528). */
export function get_BackgroundColor_Tag_UpdateItem(
  in_Type_UpdateFeedItemId: string,
  in_InitialsList: TextGenderIdentifier[],
): string {
  return get_BackgroundColor_Avatar_UpdateItem(
    in_Type_UpdateFeedItemId,
    tagGender(in_Type_UpdateFeedItemId, in_InitialsList),
  );
}

/** Get_FontColor_Tag_UpdateItem (:1970). */
export function get_FontColor_Tag_UpdateItem(
  type_UpdateFeedItemId: string,
  initialsList: TextGenderIdentifier[],
): string {
  return get_FontColor_Avatar_UpdateItem(type_UpdateFeedItemId, tagGender(type_UpdateFeedItemId, initialsList));
}

const WEEKDAYS: Required<WeekdayLabelType>[] = [
  { LongLabel: "Lord's Day", ShortLabel: 'LD', Initials: 'LD', Number: '0' },
  { LongLabel: 'Monday', ShortLabel: 'Mon', Initials: 'M', Number: '1' },
  { LongLabel: 'Tuesday', ShortLabel: 'Tue', Initials: 'T', Number: '2' },
  { LongLabel: 'Wednesday', ShortLabel: 'Wed', Initials: 'W', Number: '3' },
  { LongLabel: 'Thursday', ShortLabel: 'Thu', Initials: 'T', Number: '4' },
  { LongLabel: 'Friday', ShortLabel: 'Fri', Initials: 'F', Number: '5' },
  { LongLabel: 'Saturday', ShortLabel: 'Sat', Initials: 'S', Number: '6' },
];

/** GetConnectWeekdayLabel_ByDayOfWeek (:5364): Sunday is "Lord's Day"; any other number gives empty labels. */
export function getConnectWeekdayLabel_ByDayOfWeek(in_DayOfWeek: number): Required<WeekdayLabelType> {
  return WEEKDAYS[in_DayOfWeek] ?? { LongLabel: '', ShortLabel: '', Initials: '', Number: '' };
}

/** GetConnectWeekdayLabel_ByDate (:5302). */
export function getConnectWeekdayLabel_ByDate(in_Date: string): Required<WeekdayLabelType> {
  return getConnectWeekdayLabel_ByDayOfWeek(dayOfWeek(in_Date));
}

/** GetConnectDateFormat_Components (:5169): the output record's defaults (UBTConnectLibrary.model.js
    DateComponentFormatRec). */
export function getConnectDateFormat_Components(): Required<DateComponentFormat> {
  return { DayFormat: 'd', MonthFormat: 'MMM', YearFormat: 'yyyy', WeekDayFormat: 'ddd' };
}

/** GetConnectDateFormat_DayMonth (:5212). */
export function getConnectDateFormat_DayMonth(): string {
  const c = getConnectDateFormat_Components();
  return `${c.DayFormat} ${c.MonthFormat}`;
}

/** FormatConnectDate (:1016): each weekday label + ", " + the day and month. */
export function formatConnectDate(in_Date: string): Required<WeekdayLabelType> {
  const label = getConnectWeekdayLabel_ByDate(in_Date);
  const date = formatDateTime(in_Date, getConnectDateFormat_DayMonth());
  return {
    LongLabel: `${label.LongLabel}, ${date}`,
    ShortLabel: `${label.ShortLabel}, ${date}`,
    Initials: `${label.Initials}, ${date}`,
    Number: `${label.Number}, ${date}`,
  };
}

/** FormatConnectDate_WithYear (:1101): FormatConnectDate + " " + the year. */
export function formatConnectDate_WithYear(in_Date: string): Required<WeekdayLabelType> {
  const f = formatConnectDate(in_Date);
  const year = formatDateTime(in_Date, ` ${getConnectDateFormat_Components().YearFormat}`);
  return {
    LongLabel: f.LongLabel + year,
    ShortLabel: f.ShortLabel + year,
    Initials: f.Initials + year,
    Number: f.Number + year,
  };
}

/** Initialize_SvgScroll (UBTConnectLibrary.controller.js:7161, JavaScript1 node): on scroll of `.active-screen`,
    reports when the search input and the SVG header are scrolled past, morphs the SVG path and sets the header / footer
    shadow variables. Returns the OnDestroy callback (removes the listener). */
export function initialize_SvgScroll(
  searchInputId: string,
  onSearchStateChange: (state: boolean) => void,
  onSvgStateChange: (state: boolean) => void,
  svgObjectId: string,
): (() => void) | null {
  const found = document.getElementsByClassName('active-screen')[0];
  if (!(found instanceof HTMLElement)) return null;
  const container: HTMLElement = found;
  const searchInput = document.getElementById(searchInputId);
  const svgObject = document.getElementById(svgObjectId);
  const svgWrapper = svgObject ? svgObject.getElementsByClassName('svg-wrapper')[0] : undefined;
  const svgPath = svgObject ? svgObject.getElementsByTagName('path')[0] : undefined;
  const header = document.getElementsByClassName('header')[0];
  if (!header) return null;
  const searchThreshold = searchInput?.offsetHeight ?? null;
  const svgThreshold = svgWrapper instanceof HTMLElement ? svgWrapper.offsetHeight : null;
  let lastSearchState = false;
  let lastSvgState = false;
  let ticking = false;
  function onScroll() {
    const scrollTop = container.scrollTop;
    if (searchThreshold !== null) {
      const currentSearchState = scrollTop >= searchThreshold;
      if (currentSearchState !== lastSearchState) {
        lastSearchState = currentSearchState;
        onSearchStateChange(currentSearchState);
      }
    }
    if (svgThreshold !== null) {
      const currentSvgState = scrollTop >= svgThreshold;
      if (currentSvgState !== lastSvgState) {
        lastSvgState = currentSvgState;
        onSvgStateChange(currentSvgState);
      }
    }
    if (svgPath && svgThreshold !== null && scrollTop <= svgThreshold) {
      const progress = Math.min(scrollTop / svgThreshold, 1);
      svgPath.setAttribute('d', sVGHeader_GetPath(100, 100 - progress * 100));
    }
    const atTop = scrollTop === 0;
    const atBottom = Math.abs(container.scrollHeight - (scrollTop + container.clientHeight)) < 1;
    container.style.setProperty('--header-shadow-scroll', !atTop && lastSvgState ? 'visible' : 'hidden');
    container.style.setProperty('--footer-shadow-scroll', atBottom ? 'hidden' : 'visible');
    ticking = false;
  }
  function onScrollEvent() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }
  container.addEventListener('scroll', onScrollEvent, { passive: true });
  requestAnimationFrame(onScroll);
  return () => {
    container.removeEventListener('scroll', onScrollEvent);
  };
}

/** JavaScript1 of GetRelativeTimeTag (formatRelativeTime): the time since a date as "N s|m|h|d|w|y", never negative. */
function formatRelativeTime(date: Date, now: Date): string {
  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const WEEK = DAY * 7;
  const YEAR = DAY * 365;
  const diffInSeconds = Math.max(0, Math.floor((now.getTime() - date.getTime()) / 1000));
  if (diffInSeconds < MINUTE) return `${String(diffInSeconds)} s`;
  if (diffInSeconds < HOUR) return `${String(Math.floor(diffInSeconds / MINUTE))} m`;
  if (diffInSeconds < DAY) return `${String(Math.floor(diffInSeconds / HOUR))} h`;
  if (diffInSeconds < WEEK) return `${String(Math.floor(diffInSeconds / DAY))} d`;
  if (diffInSeconds < YEAR) return `${String(Math.floor(diffInSeconds / WEEK))} w`;
  return `${String(Math.floor(diffInSeconds / YEAR))} y`;
}

/** GetRelativeTimeTag(CreatedDateTimeUtc, EditedDateTimeUtc) (UBTConnectLibrary.controller.js, define
    "UBTConnectLibrary.controller$GetRelativeTimeTag", TST copy in
    migration/screens/ContactByEmailMember/analysis/sources/raw/): IsEdited = EditedDateTimeUtc <> NullDate and
    DiffSeconds(Created, Edited) > 1; the relative time of the edited date (else the created one) + " · Edited". Dates
    are read as the app's DateTimes (osDateTime); `now` is the browser clock. */
export function getRelativeTimeTag(createdDateTimeUtc: string, editedDateTimeUtc: string, now = new Date()): string {
  const created = parseOsDate(createdDateTimeUtc);
  const edited = parseOsDate(editedDateTimeUtc);
  const isNullDate = edited.getTime() === new Date(1900, 0, 1).getTime();
  const isEdited = !isNullDate && (edited.getTime() - created.getTime()) / 1000 > 1;
  return formatRelativeTime(isEdited ? edited : created, now) + (isEdited ? ' · Edited' : '');
}

/* ---- Wave 3C (SelectionOption_List) ---- */
const FLAG_IMAGES: Record<string, string> = {
  ar: 'img/UBTConnectLibrary.ar.png',
  au: 'img/UBT_CW.au.png',
  bb: 'img/UBT_CW.bb.png',
  ca: 'img/UBT_CW.ca.png',
  dk: 'img/UBT_CW.dk.png',
  fr: 'img/UBT_CW.fr.png',
  de: 'img/UBT_CW.de.png',
  ie: 'img/UBT_CW.ie.png',
  it: 'img/UBT_CW.it.png',
  jm: 'img/UBT_CW.jm.png',
  nl: 'img/UBT_CW.nl.png',
  nz: 'img/UBT_CW.nz.png',
  vc: 'img/UBT_CW.vc.png',
  se: 'img/UBT_CW.se.png',
  ch: 'img/UBT_CW.ch.png',
  tt: 'img/UBT_CW.tt.png',
  uk: 'img/UBT_CW.UK.png',
  us: 'img/UBT_CW.us.png',
};

/** GetFlagURLByCountryCode (p:UBTConnectLibrary.controller.js:5545-5757): the flag image of the lower-cased country code
    (18 codes), "" for any other code. */
export function getFlagURLByCountryCode(in_CountryCode: string): string {
  const image = FLAG_IMAGES[in_CountryCode.toLowerCase()];
  return image === undefined ? '' : osImage(image);
}

/** A record equal to its empty default (OutSystems record equality with a new record): every text "", number 0,
    boolean False, nested record empty. */
function isEmptyRecord(value: unknown): boolean {
  if (value === undefined || value === '' || value === 0 || value === false) return true;
  if (typeof value === 'object' && value !== null) return Object.values(value).every(isEmptyRecord);
  return false;
}

/** Merge_StyleOptions (p:UBTConnectLibrary.controller.js:7653-7788): Main_StyleOptions with each part of New_StyleOptions
    that differs from the empty record (Background, PaddingSize, MarginSize, BorderOptions, TextOptions, DisplayOptions,
    HeightOptions, WidthOptions, ShadowId, IsSkeletonElement); Visibility and IsInlineBlock stay from Main. */
export function merge_StyleOptions(
  main_StyleOptions: ContainerOptions = {},
  new_StyleOptions: ContainerOptions = {},
): ContainerOptions {
  const result: ContainerOptions = { ...main_StyleOptions };
  const parts = [
    'Background',
    'PaddingSize',
    'MarginSize',
    'BorderOptions',
    'TextOptions',
    'DisplayOptions',
    'HeightOptions',
    'WidthOptions',
  ] as const;
  for (const part of parts) {
    if (!isEmptyRecord(new_StyleOptions[part])) Object.assign(result, { [part]: new_StyleOptions[part] });
  }
  if ((new_StyleOptions.ShadowId ?? '') !== '') result.ShadowId = new_StyleOptions.ShadowId;
  if (new_StyleOptions.IsSkeletonElement === true) result.IsSkeletonElement = true;
  return result;
}

/* ---- Task Y: ScrollEvent (scroll shadow and sticky title of the layouts) ---- */
/* The global `ScrollEvent` object of scripts/UBTConnectLibrary.ScrollAnimations.js (migration/runtime-sources, cited
   SA:<line>), as the layouts use it through four UBTConnectLibrary client actions whose JavaScript nodes only call it
   (raw controller migration/screens/SupperMeeting_Details/analysis/sources/raw/UBTConnectLibrary.controller.js:
   SetScrollShadow :8700-8708, SetMainFixedScroll :8481-8488, RemoveScrollEvents :8087-8091, ClearTimeout :690-694). */

/** getVariables (SA:2-21): the entries the ported functions use. */
const SCROLL_VARS = {
  scrollContainerClass: '.active-screen.screen-container:has(.layout)',
  header: 'header',
  headerTop: '.header-top-content',
  headerTopSearch: '.header-top-search',
  headerSizeVar: '--header-size',
  statusBarVar: '--status-bar-height',
  headerVisibilityVar: '--header-shadow-scroll',
  footerVisibilityVar: '--footer-shadow-scroll',
};

/** parseHeight (SA:25-32): the sum of the digit runs of a CSS length ("" = 0). Never NaN, so the isNaN guards of
    mainFixedScroll (SA:295) never stop it. */
function parseHeight(heightInPx: string): number {
  if (!heightInPx) return 0;
  return (heightInPx.match(/[0-9]+/g) ?? []).reduce((sum, digits) => sum + parseInt(digits, 10), 0);
}

/** getStatusBarSize (SA:33-37) and getHeaderSize (SA:38-42). */
const getStatusBarSize = () => parseHeight(getComputedStyle(document.body).getPropertyValue(SCROLL_VARS.statusBarVar));
const getHeaderSize = (header: Element) =>
  parseHeight(getComputedStyle(header).getPropertyValue(SCROLL_VARS.headerSizeVar));

/** ScrollEvent.setScrollShadow (SA:62-66). */
function showScrollShadow(scrollContent: HTMLElement, shadowVariable: string, isVisible: boolean): void {
  scrollContent.style.setProperty(shadowVariable, isVisible ? 'visible' : 'hidden');
}

/** debounceScroll (SA:67-79): at most one run per animation frame; errors of the callback are ignored. */
function debounceScroll(callback: () => void, debouncing: { value: boolean }): void {
  if (debouncing.value) return;
  debouncing.value = true;
  requestAnimationFrame(() => {
    try {
      callback();
    } catch {
      // SA:73-75 ignores it
    }
    debouncing.value = false;
  });
}

/** Outputs of SetScrollShadow / SetMainFixedScroll: the scroll container, its listener and the shadow's first-run
    timer; all undefined when no layout is on screen (SA returns {}). */
export interface ScrollEventsOut {
  Out_Element?: HTMLElement;
  Out_ScrollEvent?: () => void;
  Out_Timeout?: ReturnType<typeof setTimeout>;
}

/** SetScrollShadow (ScrollEvent.shadowScroll, SA:151-205): on the active screen container that holds a layout, the
    footer shadow (`--footer-shadow-scroll`) shows unless scrolled to the bottom, the header shadow
    (`--header-shadow-scroll`) once scrolled. Runs once after 200 ms, then on each scroll (debounced). The header rule
    also waits for the SVG header when one exists (`svgExists`, set only by svgScroll SA:107, which no built layout
    calls). */
export function setScrollShadow(): ScrollEventsOut {
  const shadowContent = document.querySelector<HTMLElement>(SCROLL_VARS.scrollContainerClass);
  if (!shadowContent) return {};
  const shadowIsDebouncing = { value: false };
  const shadowHandleScroll = () => {
    const shadowCurrentScrollY = shadowContent.scrollTop;
    // Footer logic
    const atBottom = Math.abs(shadowContent.scrollHeight - (shadowCurrentScrollY + shadowContent.clientHeight)) < 1;
    showScrollShadow(shadowContent, SCROLL_VARS.footerVisibilityVar, !atBottom);
    // Header logic
    showScrollShadow(shadowContent, SCROLL_VARS.headerVisibilityVar, shadowCurrentScrollY > 0);
  };
  const shadowTimeout = setTimeout(shadowHandleScroll, 200);
  const shadowProcessScroll = () => {
    debounceScroll(shadowHandleScroll, shadowIsDebouncing);
  };
  shadowContent.addEventListener('scroll', shadowProcessScroll, { passive: true });
  return { Out_Element: shadowContent, Out_ScrollEvent: shadowProcessScroll, Out_Timeout: shadowTimeout };
}

/** SetMainFixedScroll (ScrollEvent.mainFixedScroll, SA:272-337): with the search row (`.header-top-search`, its
    `--header-size`) and `header .header-top-content` in the container, each scroll (debounced) calls the callback
    with true once the scroll reaches header size + status bar (`--status-bar-height` of the body), and with false
    when it comes back above it; above it the header content gets a top padding of status bar × min(scroll / header
    size, 1), rounded. */
export function setMainFixedScroll(headerScrolledCallback: (isHeaderScrolled: boolean) => void): ScrollEventsOut {
  const mainContent = document.querySelector<HTMLElement>(SCROLL_VARS.scrollContainerClass);
  if (!mainContent) return {};
  const mainHeader = mainContent.querySelector(SCROLL_VARS.headerTopSearch);
  const mainHeaderTopContent = mainContent.querySelector<HTMLElement>(`${SCROLL_VARS.header} ${SCROLL_VARS.headerTop}`);
  if (!mainHeader || !mainHeaderTopContent) return {};
  const mainHeaderHeight = getHeaderSize(mainHeader);
  const mainStatusBarHeight = getStatusBarSize();
  const mainCombinedHeight = mainHeaderHeight + mainStatusBarHeight;
  const mainIsDebouncing = { value: false };
  let mainLastTrigger = false;
  const mainHandleScroll = () => {
    const mainCurrentScrollY = mainContent.scrollTop;
    const mainProgress = Math.min(mainCurrentScrollY / mainHeaderHeight, 1);
    if (mainCurrentScrollY >= mainCombinedHeight) {
      if (!mainLastTrigger) {
        headerScrolledCallback(true);
        mainLastTrigger = true;
      }
    } else {
      if (mainLastTrigger) {
        headerScrolledCallback(false);
        mainLastTrigger = false;
      }
      mainHeaderTopContent.style.paddingTop = `${String(Math.round(mainStatusBarHeight * mainProgress))}px`;
    }
  };
  const mainProcessScroll = () => {
    debounceScroll(mainHandleScroll, mainIsDebouncing);
  };
  mainContent.addEventListener('scroll', mainProcessScroll, { passive: true });
  return { Out_Element: mainContent, Out_ScrollEvent: mainProcessScroll };
}

/** RemoveScrollEvents (ScrollEvent.removeEvents, SA:426-435): removes both scroll listeners from the element. */
export function removeScrollEvents(
  destroyElement: HTMLElement | undefined,
  mainScrollEvent: (() => void) | undefined,
  scrollEvent?: () => void,
): void {
  if (!destroyElement) return;
  if (mainScrollEvent) destroyElement.removeEventListener('scroll', mainScrollEvent);
  if (scrollEvent) destroyElement.removeEventListener('scroll', scrollEvent);
}

/** ClearTimeout (ScrollEvent.clearTimeout, SA:436-440); renamed so it does not hide the global clearTimeout. */
export function clearScrollTimeout(timeout: ReturnType<typeof setTimeout> | undefined): void {
  if (timeout) clearTimeout(timeout);
}

/** SetMainScroll (ScrollEvent.mainScroll, SA:206-271): as SetMainFixedScroll, but the header size is the whole
    `header` of the container (no search row): each scroll (debounced) calls the callback with true once the scroll
    reaches header size + status bar, with false when it comes back above it; above it `header .header-top-content`
    gets a top padding of status bar × min(scroll / header size, 1), rounded. Nothing when a size is NaN (SA:229-231). */
export function setMainScroll(headerScrolledCallback: (isHeaderScrolled: boolean) => void): ScrollEventsOut {
  const mainContent = document.querySelector<HTMLElement>(SCROLL_VARS.scrollContainerClass);
  if (!mainContent) return {};
  const mainHeader = mainContent.querySelector(SCROLL_VARS.header);
  const mainHeaderTopContent = mainContent.querySelector<HTMLElement>(`${SCROLL_VARS.header} ${SCROLL_VARS.headerTop}`);
  if (!mainHeader || !mainHeaderTopContent) return {};
  const mainHeaderHeight = getHeaderSize(mainHeader);
  const mainStatusBarHeight = getStatusBarSize();
  if (Number.isNaN(mainHeaderHeight) || Number.isNaN(mainStatusBarHeight)) return {};
  const mainCombinedHeight = mainHeaderHeight + mainStatusBarHeight;
  const mainIsDebouncing = { value: false };
  let mainLastTrigger = false;
  const mainHandleScroll = () => {
    const mainCurrentScrollY = mainContent.scrollTop;
    const mainProgress = Math.min(mainCurrentScrollY / mainHeaderHeight, 1);
    if (mainCurrentScrollY >= mainCombinedHeight) {
      if (!mainLastTrigger) {
        headerScrolledCallback(true);
        mainLastTrigger = true;
      }
    } else {
      if (mainLastTrigger) {
        headerScrolledCallback(false);
        mainLastTrigger = false;
      }
      mainHeaderTopContent.style.paddingTop = `${String(Math.round(mainStatusBarHeight * mainProgress))}px`;
    }
  };
  const mainProcessScroll = () => {
    debounceScroll(mainHandleScroll, mainIsDebouncing);
  };
  mainContent.addEventListener('scroll', mainProcessScroll, { passive: true });
  return { Out_Element: mainContent, Out_ScrollEvent: mainProcessScroll };
}

/** Default record of ActionsMenuEnableOptionsRec (UBTConnectLibrary.model). */
export const ACTIONS_MENU_ENABLE_OPTIONS_DEFAULT: Required<ActionsMenuEnableOptions> = {
  EnableBookmark: true,
  EnableNotes: false,
  EnableGift: false,
  EnableShare: true,
  EnableCall: true,
  EnableEmail: true,
  EnableViewDetails: true,
};

/** GetLookupActions (UBTConnectLibrary.controller.js:5914-, copy in migration/screens/BookmarksByGroup/analysis/
    sources/raw/): label and icon of each ActionsMenu action. */
export function getLookupActions(): LookupActions {
  return {
    Bookmark: { Singular: 'Bookmark', Icon: UBT_Icons.Bookmark },
    Unbookmark: { Singular: 'Unmark', Icon: UBT_Icons.Check },
    Notes: { Singular: 'Notes', Icon: UBT_Icons.Tooltip },
    Gift: { Singular: 'Gift', Icon: UBT_Icons.Gifting },
    Share: { Singular: 'Share', Icon: UBT_Icons.Share },
    Call: { Singular: 'Call', Icon: UBT_Icons.Call },
    Email: { Singular: 'Email', Icon: UBT_Icons.Letter },
    ViewDetails: { Singular: 'View details', Icon: UBT_Icons.ArrowOutward },
  };
}

/* ---- Wave 4B (ImageCard_LazyLoading, Statistics, lookups) ---- */
/** GetClasses_ImageCard (UBTConnectLibrary.controller.js:4445): main class + "--" + card type, the avatar size class
    when the avatar list shows, then the extended class. */
export function getClasses_ImageCard(
  in_MainContainerClass: string,
  in_ImageCardTypeId: string,
  in_AvatarSizeId: string,
  in_ShowAvatarList: boolean,
  in_ExtendedClass: string,
): string {
  let classesOut = formatClasses(in_MainContainerClass, `${in_MainContainerClass}--${in_ImageCardTypeId}`);
  if (in_ShowAvatarList) classesOut = formatClasses(classesOut, getClasses_AvatarSize(in_AvatarSizeId));
  return formatClasses(classesOut, in_ExtendedClass);
}

/** GetGalleryBackgroundClass (controller.js:5770): image width per items in a gallery row. */
export function getGalleryBackgroundClass(itemsPerRow: number): string {
  if (itemsPerRow === 2) return UBT_ImageSize.HalfWidth_50vw;
  if (itemsPerRow === 3) return UBT_ImageSize.ThirdWidth_33vw;
  if (itemsPerRow === 4) return UBT_ImageSize.QuarterWidth_25vw;
  return UBT_ImageSize.MaxWidth_100vw;
}

/** GetClasses_BackgroundImageSize (controller.js:3694): intrinsic height, width by gallery row or full width. */
export function getClasses_BackgroundImageSize(in_ImageCardType: string, itemsPerRow: number): string {
  const classes = `ubt-background-image--${UBT_BackgroundImageSize.IntrinsicHeight_2_To_3}`;
  return in_ImageCardType === UBT_ImageCardType.Gallery
    ? formatClasses(classes, `ubt-lazy-image--width-${getGalleryBackgroundClass(itemsPerRow)}`)
    : formatClasses(classes, `ubt-lazy-image--width-${UBT_ImageSize.MaxWidth_100vw}`);
}

/** GetBorderOptions_ImageCard (controller.js:3339): none for a detail card, else neutral-3 small border, large radius. */
export function getBorderOptions_ImageCard(in_CardTypeId: string): BorderOptions {
  if (in_CardTypeId === UBT_ImageCardType.Detail) return {};
  return {
    Color: UBT_Color.Neutral3,
    Size: { GeneralSizeId: UBT_Size.Small },
    Radius: { GeneralSizeId: UBT_Shape.Large },
  };
}

/** GetTextOptions_ImageCard (controller.js:7093): base semi-bold neutral-10; extra-extra-small in a gallery. */
export function getTextOptions_ImageCard(in_CardTypeId: string): TextOptions {
  return {
    FontSize: in_CardTypeId === UBT_ImageCardType.Gallery ? UBT_FontSize.DoubleExtraSmall : UBT_FontSize.Base,
    FontWeight: UBT_FontWeight.SemiBold,
    Color: UBT_Color.Neutral10,
  };
}

/** GetSpacingOptions_ImageCardContent (controller.js:6488): content padding per card type. */
export function getSpacingOptions_ImageCardContent(in_CardTypeId: string): SpacingOptions {
  const T = UBT_ImageCardType;
  if (in_CardTypeId === T.Detail)
    return { HorizontalSizeId: UBT_Size.Base, BottomSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Small };
  if (in_CardTypeId === T.Gallery) return { GeneralSizeId: UBT_Size.Small };
  if (in_CardTypeId === T.ListWithImages)
    return { HorizontalSizeId: UBT_Size.Base, TopSizeId: UBT_Size.Medium, BottomSizeId: UBT_Size.Base };
  /* List, Sublist and the default branch set the same record. */
  return { VerticalSizeId: UBT_Size.Small, HorizontalSizeId: UBT_Size.Base };
}

/** SetLookupLabel_MaybeLowercase (controller.js:8314). */
export function setLookupLabel_MaybeLowercase(in_CapitalizedLabel: string, in_IsLowercase: boolean): string {
  return in_IsLowercase ? in_CapitalizedLabel.toLowerCase() : in_CapitalizedLabel;
}

/** GetLookupConcepts (controller.js:6010): labels, icons and icon colors of the directory concepts. */
export function getLookupConcepts(in_IsLowercase: boolean): LookupConcepts {
  const item = (singular: string, plural: string, icon = '', iconColor = ''): Required<LookupItem> => ({
    Singular: setLookupLabel_MaybeLowercase(singular, in_IsLowercase),
    Plural: setLookupLabel_MaybeLowercase(plural, in_IsLowercase),
    Icon: icon,
    Icon_Color: iconColor,
  });
  const I = UBT_Icons;
  const C = UBT_Color;
  return {
    Brethren: item('Brethren', 'Brethren', I.PersonFill, C.Purple),
    Household: item('Household', 'Households', I.Household, C.Primary),
    Sister: item('Sister', 'Sisters', I.Girl, C.PinkNonStandardDarker),
    Brother: item('Brother', 'Brothers', I.Boy, C.BlueNonStandarDarker),
    Locality: item('Locality', 'Localities', I.LocationOnFill),
    Country: item('Country', 'Countries'),
    Distance: item('Distance', 'Distaces', I.Explore, C.YellowDark),
    SupperMeeting: item('Supper Meeting', 'Supper Meetings', I.HouseFill, C.Orange),
  };
}
