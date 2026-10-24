import { describe, expect, it } from 'vitest';
import {
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
  sVGHeader_GetPath,
  onApplicationReady_BottomBarSlider,
} from './actions';
import { UBT_Display, UBT_Size, UBT_VerticalAlign } from './staticEntities';

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
