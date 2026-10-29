import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  clearScrollTimeout,
  convertUbtSizeToGutterSize,
  formatStyles,
  getClasses_Border,
  getClasses_Button,
  getClasses_Column,
  getClasses_Container,
  getClasses_Text,
  getLocalVariable_ColumnSize,
  getSpacingOptions,
  getStyle_BackgroundImage,
  getStyle_Opacity,
  getStyle_SizeOptions,
  removeRegexSpecialCharacters,
  removeScrollEvents,
  setScrollShadow,
  sVGHeader_GetPath,
  onApplicationReady_BottomBarSlider,
  preetyFormatDate,
} from './actions';
import { UBT_Display, UBT_Size, UBT_VerticalAlign } from './staticEntities';
import { currDateTime } from '@/lib/osDateTime';

/* PreetyFormatDate (UBTConnectLibrary.controller.js:7952-8072, JavaScript1 node timeAgo :8028-8067). The inputs are
   built from NOW in local time, so a daylight-saving change does not move the difference. */
describe('preetyFormatDate (timeAgo)', () => {
  const NOW = new Date(2026, 9, 29, 12, 0, 0);
  const ago = (seconds: number) => currDateTime(new Date(NOW.getTime() - seconds * 1000));
  const DAY = 86400;

  it('a date in the future is "just now" (seconds < 0)', () => {
    expect(preetyFormatDate(ago(-1), NOW)).toBe('just now');
    expect(preetyFormatDate(ago(-3 * DAY), NOW)).toBe('just now');
  });

  it('less than one second is "just now" (no unit gives a value >= 1)', () => {
    expect(preetyFormatDate(ago(0), NOW)).toBe('just now');
    expect(preetyFormatDate(ago(0), new Date(NOW.getTime() + 999))).toBe('just now');
  });

  it('the largest unit with a value >= 1, singular for 1 and plural above', () => {
    expect(preetyFormatDate(ago(1), NOW)).toBe('1 second ago');
    expect(preetyFormatDate(ago(59), NOW)).toBe('59 seconds ago');
    expect(preetyFormatDate(ago(60), NOW)).toBe('1 minute ago');
    expect(preetyFormatDate(ago(3599), NOW)).toBe('59 minutes ago');
    expect(preetyFormatDate(ago(3600), NOW)).toBe('1 hour ago');
    expect(preetyFormatDate(ago(5 * 3600), NOW)).toBe('5 hours ago');
    expect(preetyFormatDate(ago(DAY), NOW)).toBe('1 day ago');
    expect(preetyFormatDate(ago(6 * DAY), NOW)).toBe('6 days ago');
    expect(preetyFormatDate(ago(7 * DAY), NOW)).toBe('1 week ago');
    expect(preetyFormatDate(ago(29 * DAY), NOW)).toBe('4 weeks ago');
    expect(preetyFormatDate(ago(30 * DAY), NOW)).toBe('1 month ago');
    expect(preetyFormatDate(ago(364 * DAY), NOW)).toBe('12 months ago');
    expect(preetyFormatDate(ago(365 * DAY), NOW)).toBe('1 year ago');
    expect(preetyFormatDate(ago(3 * 365 * DAY), NOW)).toBe('3 years ago');
  });

  it('the seconds are floored from the milliseconds', () => {
    expect(preetyFormatDate(ago(60), new Date(NOW.getTime() - 1))).toBe('59 seconds ago');
  });

  it('the OutSystems null date (and an empty or invalid text, read as the null date) is years ago', () => {
    expect(preetyFormatDate('1900-01-01T00:00:00', NOW)).toBe('126 years ago');
    expect(preetyFormatDate('', NOW)).toBe('126 years ago');
  });
});

/* Branches that no captured variant reaches; expected values follow the compiled actions. */
describe('UBTConnectLibrary actions', () => {
  it('spacing: general wins, else axis, else sides', () => {
    expect(getSpacingOptions('margin', { GeneralSizeId: 'm', TopSizeId: 's' })).toBe('margin-m');
    expect(getSpacingOptions('margin', { LeftSizeId: 's', RightSizeId: 'm', TopSizeId: 'l', BottomSizeId: 'xl' })).toBe(
      'margin-left-s margin-right-m margin-top-l margin-bottom-xl',
    );
    expect(getSpacingOptions('padding', { HorizontalSizeId: 'base', LeftSizeId: 's' })).toBe('padding-x-base');
  });

  it('border: per-corner radius only without a general radius', () => {
    expect(getClasses_Border({ Radius: { TopLeftId: 'soft', BottomRightId: 'large' } })).toBe(
      'border-radius-top-left-soft border-radius-bottom-right-large',
    );
    expect(getClasses_Border({ Radius: { GeneralSizeId: 'circle', TopLeftId: 'soft' } })).toBe('border-radius-circle');
  });

  it('text and container classes', () => {
    expect(getClasses_Text({ Color: 'primary', IsItalic: true, IsUnderlined: true })).toBe(
      'text-primary italic text-underline',
    );
    // IsOverflowEllipsis comes last (live TST UBTConnectLibrary.controller.js GetClasses_Text, FormatClasses6).
    expect(getClasses_Text({ FontSize: 'xs', IsUnderlined: true, IsOverflowEllipsis: true })).toBe(
      'font-size-xs text-underline ubt-custom-text-ellipsis',
    );
    expect(
      getClasses_Container({
        IsInlineBlock: true,
        DisplayOptions: { Display: 'display-block', AlignItems: 'align-items-center' },
        Visibility: 'hidden',
        MarginSize: { GeneralSizeId: 'base' },
      }),
    ).toBe('inline-block display-block visibility-hidden margin-base');
    expect(
      getClasses_Container({
        DisplayOptions: { Display: UBT_Display.InlineFlex, FlexDirection: 'flex-direction-row' },
      }),
    ).toBe('display-inline-flex flex-direction-row');
  });

  it('styles', () => {
    expect(getStyle_SizeOptions('height', { Min: '10px', Main: '50%', Max: '200px;' })).toBe(
      'min-height: 10px; height: 50%; max-height: 200px;',
    );
    expect(getStyle_BackgroundImage({ Image: 'url(a.png)', Size: 'cover', BlendMode: 'multiply' })).toBe(
      'background-image: url(a.png); background-size: cover; background-blend-mode: multiply;',
    );
    expect(getStyle_Opacity('background-color', 0.5, '')).toBe(
      'background-color: rgba(var(--color-rgb-neutral-0),0.5);',
    );
    expect(getStyle_Opacity('background-color', 1, 'neutral-9')).toBe('');
    expect(formatStyles('a: b;', '', 'x')).toBe('a: b;');
  });

  it('columns and buttons', () => {
    expect(convertUbtSizeToGutterSize(UBT_Size.DoubleExtraLarge)).toBe('gutter-xxl');
    expect(convertUbtSizeToGutterSize('')).toBe('');
    expect(
      getClasses_Column({ VerticalAlign: UBT_VerticalAlign.Bottom, FlexDirection: 'flex-direction-row-reverse' }),
    ).toBe('align-items-flex-end flex-direction-row-reverse');
    expect(getLocalVariable_ColumnSize(48)).toBe('--_ubt-column-width:  48px;');
    expect(getLocalVariable_ColumnSize(0)).toBe('');
    expect(getClasses_Button('s', '', 'ubt-button', false, '')).toBe('ubt-button--s');
  });

  it('regex special characters become spaces', () => {
    expect(removeRegexSpecialCharacters('a.b(c)|d')).toBe('a b c  d');
    expect(removeRegexSpecialCharacters('')).toBe('');
  });
});

describe('sVGHeader_GetPath', () => {
  it('builds the captured login header path (90 %, curvature 105)', () => {
    expect(sVGHeader_GetPath(90, 105)).toBe('M0,0 H100 V160 Q50,181 0,160 Z');
  });
  it('uses the input defaults 100 / 100', () => {
    expect(sVGHeader_GetPath(100, 100)).toBe('M0,0 H100 V180 Q50,200 0,180 Z');
  });
});

describe('onApplicationReady_BottomBarSlider (UBTConnectLibrary.controller.js:7831-7888)', () => {
  it('appends the slider to #transitionContainer for the active bottom bar item, as captured on HomeFeed', () => {
    document.body.innerHTML = `<div id="transitionContainer"><div class="screen-container"><div class="bottom-bar">
      <div class="list"><a></a><a class="active"></a><a></a></div></div></div></div>`;
    onApplicationReady_BottomBarSlider(); // registers the listener, then BottomBarSlider_ForceRefresh
    const slider = document.querySelector('#transitionContainer > .dx-bottom-bar-slider');
    expect(slider?.className).toBe('dx-bottom-bar-slider dx-bottom-bar-slider-appear');
    expect(slider?.getAttribute('style')).toBe(
      '--dx-bottom-bar-items: 3; --dx-bottom-bar-active-item: 1; --dx-bottom-bar-transition-duration: undefinedms;',
    );
    expect(slider?.children).toHaveLength(1);

    // Once per page: a second call only refreshes; no active item starts the disappear animation.
    document.querySelector('.list > a.active')?.classList.remove('active');
    onApplicationReady_BottomBarSlider();
    expect(document.querySelectorAll('.dx-bottom-bar-slider')).toHaveLength(1);
    expect(slider?.classList.contains('dx-bottom-bar-slider-disappear')).toBe(true);
    slider?.dispatchEvent(new Event('animationend'));
    expect(document.querySelector('.dx-bottom-bar-slider')).toBeNull();
    document.body.innerHTML = '';
  });
});

/* SetScrollShadow (ScrollEvent.shadowScroll, migration/runtime-sources/UBTConnectLibrary.ScrollAnimations.js:151-205):
   the first evaluation runs once, 200 ms after the layout calls it (SA:187-190), not at the first frame; after it, only
   a scroll evaluates again. So a page that is taller than the screen at 200 ms (the loading cards) and shorter later
   (the empty state) keeps the footer shadow, as on TST (drift WP9, Notes default). */
describe('setScrollShadow (ScrollAnimations.js:151-205)', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    document.body.innerHTML = '';
  });

  function mountScreen(heights: { scroll: number }) {
    const screen = document.body.appendChild(document.createElement('div'));
    screen.className = 'active-screen screen-container';
    screen.appendChild(document.createElement('div')).className = 'layout';
    Object.defineProperty(screen, 'scrollHeight', { configurable: true, get: () => heights.scroll });
    Object.defineProperty(screen, 'clientHeight', { configurable: true, value: 844 });
    return screen;
  }

  it('evaluates once after 200 ms, then only on scroll', () => {
    vi.useFakeTimers();
    const frames: FrameRequestCallback[] = [];
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => frames.push(cb));
    const heights = { scroll: 1166 }; // loading cards: taller than the 844 px screen
    const screen = mountScreen(heights);
    const shadows = () => [
      screen.style.getPropertyValue('--header-shadow-scroll'),
      screen.style.getPropertyValue('--footer-shadow-scroll'),
    ];

    const out = setScrollShadow();
    expect(out.Out_Element).toBe(screen);
    expect(frames).toHaveLength(0); // no first-frame evaluation
    vi.advanceTimersByTime(199);
    expect(shadows()).toEqual(['', '']);
    vi.advanceTimersByTime(1);
    expect(shadows()).toEqual(['hidden', 'visible']);

    // The data arrives (empty state): the page no longer scrolls, but nothing evaluates again without a scroll.
    heights.scroll = 844;
    vi.advanceTimersByTime(5000);
    expect(shadows()).toEqual(['hidden', 'visible']);

    screen.dispatchEvent(new Event('scroll'));
    screen.dispatchEvent(new Event('scroll'));
    expect(frames).toHaveLength(1); // debounced: one run per frame
    for (const cb of frames.splice(0)) cb(0);
    expect(shadows()).toEqual(['hidden', 'hidden']);

    removeScrollEvents(out.Out_Element, out.Out_ScrollEvent);
    screen.dispatchEvent(new Event('scroll'));
    expect(frames).toHaveLength(0);
  });

  it('sets nothing when the layout is destroyed before 200 ms (ClearTimeout, SA:436-440)', () => {
    vi.useFakeTimers();
    const screen = mountScreen({ scroll: 844 });
    const out = setScrollShadow();
    vi.advanceTimersByTime(150);
    clearScrollTimeout(out.Out_Timeout);
    vi.advanceTimersByTime(1000);
    expect(screen.style.getPropertyValue('--footer-shadow-scroll')).toBe('');
  });

  it('returns no outputs without a layout on the active screen', () => {
    const screen = document.body.appendChild(document.createElement('div'));
    screen.className = 'active-screen screen-container';
    expect(setScrollShadow()).toEqual({});
  });
});

import { formatDateForAssembleMeetings } from './actions';

/* FormatDateForAssembleMeetings (UBTConnectLibrary.controller.js, TST publish of 2026-10-29; it replaces
   Connect2_Assemble_MUI GetAssembleEventSummaryDateTimeString, same expression). */
describe('FormatDateForAssembleMeetings', () => {
  it('time or "On", Lord\'s Day on Sundays, then the date', () => {
    // 2026-11-08 is a Sunday, 2026-11-10 a Tuesday
    expect(formatDateForAssembleMeetings('2026-11-08T09:30:00', false)).toBe("9:30 AM on Lord's Day, 8 November 2026");
    expect(formatDateForAssembleMeetings('2026-11-10T19:00:00', true)).toBe('On Tuesday, 10 November 2026');
  });
});
