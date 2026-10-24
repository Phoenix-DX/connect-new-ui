import { act, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/shared/test/capturedVariants';
import { bottomSheetClose, bottomSheetOpen } from '@/components/ui/lib/actions';
import { BottomSheet } from './BottomSheet';
import * as stories from './BottomSheet.stories';
import { BOTTOM_SHEET_SPRING, createSpringEffect, hasTouchGestures } from './dragToClose';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

const sheetOf = (container: HTMLElement) => {
  const sheet = container.querySelector<HTMLElement>('.osui-bottom-sheet');
  if (!sheet) throw new Error('no sheet');
  return sheet;
};

describe('BottomSheet (OutSystems UI)', () => {
  testCapturedVariants(stories, captures);

  it('BottomSheetOpen / Escape / BottomSheetClose toggle the sheet, the body class and raise OnToggle', () => {
    const onOnToggle = vi.fn();
    let widgetId = '';
    const { container } = render(
      <BottomSheet
        onOnToggle={onOnToggle}
        onInitialized={(id) => {
          widgetId = id;
        }}
        content={<button type="button">inside</button>}
      />,
    );
    const sheet = sheetOf(container);
    expect(widgetId).toBe(container.firstElementChild?.id);
    expect(sheet).toHaveAttribute('aria-hidden', 'true');
    expect(sheet).toHaveAttribute('inert');
    expect(sheet.style.getPropertyValue('--bottom-sheet-shape')).toBe('var(--border-radius-soft)');
    act(() => {
      bottomSheetOpen(widgetId);
    });
    expect(sheet).toHaveClass('osui-bottom-sheet--is-open');
    expect(sheet).toHaveAttribute('aria-hidden', 'false');
    expect(sheet).toHaveAttribute('tabindex', '0');
    expect(sheet).not.toHaveAttribute('inert');
    expect(document.body).toHaveClass('osui-bottom-sheet--is-active');
    expect(document.activeElement).toBe(sheet);
    expect(onOnToggle).toHaveBeenLastCalledWith(widgetId, true);
    act(() => {
      bottomSheetOpen(widgetId);
    });
    expect(onOnToggle).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(sheet, { key: 'Escape' });
    expect(sheet).not.toHaveClass('osui-bottom-sheet--is-open');
    expect(document.body).not.toHaveClass('osui-bottom-sheet--is-active');
    expect(onOnToggle).toHaveBeenLastCalledWith(widgetId, false);
    act(() => {
      bottomSheetOpen(widgetId);
    });
    act(() => {
      bottomSheetClose(widgetId);
    });
    expect(sheet).toHaveAttribute('aria-hidden', 'true');
    expect(onOnToggle).toHaveBeenCalledTimes(4);
  });

  it('focus trap: the spans are reachable only while open and wrap the focus', () => {
    let widgetId = '';
    const { container } = render(
      <BottomSheet
        onInitialized={(id) => {
          widgetId = id;
        }}
        content={
          <>
            <button type="button">first</button>
            <button type="button">last</button>
          </>
        }
      />,
    );
    const [top, bottom] = [...container.querySelectorAll('span')];
    expect(top).toHaveAttribute('tabindex', '-1');
    act(() => {
      bottomSheetOpen(widgetId);
    });
    expect(top).toHaveAttribute('tabindex', '0');
    expect(bottom).toHaveAttribute('aria-hidden', 'false');
    fireEvent.focus(top as HTMLElement);
    expect(document.activeElement).toHaveTextContent('last');
    fireEvent.focus(bottom as HTMLElement);
    expect(document.activeElement).toHaveTextContent('first');
  });

  it('a scrolled content adds has-scroll; ShowHandler False drops the handler class; unknown ids do nothing', () => {
    const { container } = render(<BottomSheet showHandler={false} extendedClass="x-extra" />);
    const sheet = sheetOf(container);
    expect(sheet).toHaveClass('osui-bottom-sheet', 'x-extra');
    expect(sheet).not.toHaveClass('osui-bottom-sheet--has-handler');
    const content = container.querySelector('.osui-bottom-sheet__content');
    if (!content) throw new Error('no content');
    content.scrollTop = 40;
    fireEvent.scroll(content);
    expect(sheet).toHaveClass('osui-bottom-sheet--has-scroll');
    content.scrollTop = 0;
    fireEvent.scroll(content);
    expect(sheet).not.toHaveClass('osui-bottom-sheet--has-scroll');
    expect(() => {
      bottomSheetOpen('unknown');
      bottomSheetClose('unknown');
    }).not.toThrow();
  });

  describe('drag-to-close on a touch device (OSUI provider :4940-4963, AnimateOnDrag :682-806)', () => {
    const touch = (target: Element, type: string, pageY: number) => {
      const event = new Event(type, { bubbles: true, cancelable: true });
      Object.defineProperty(event, 'changedTouches', { value: [{ pageX: 10, pageY }] });
      target.dispatchEvent(event);
    };
    const openSheet = () => {
      let widgetId = '';
      const { container } = render(
        <BottomSheet
          onInitialized={(id) => {
            widgetId = id;
          }}
        />,
      );
      act(() => {
        bottomSheetOpen(widgetId);
      });
      const header = container.querySelector('.osui-bottom-sheet__header');
      if (!header) throw new Error('no header');
      return { sheet: sheetOf(container), header };
    };
    const touchDevice = () => {
      vi.stubGlobal('PointerEvent', function PointerEvent() {});
      Object.defineProperty(navigator, 'maxTouchPoints', { value: 5, configurable: true });
    };
    afterEach(() => {
      vi.unstubAllGlobals();
      Reflect.deleteProperty(navigator, 'maxTouchPoints');
    });

    it('detects a touch device as DeviceInfo.IsTouch does', () => {
      touchDevice();
      expect(hasTouchGestures()).toBe(true);
      Object.defineProperty(navigator, 'maxTouchPoints', { value: 0, configurable: true });
      expect(hasTouchGestures()).toBe(false);
    });

    it('a fast downward swipe on the header closes the sheet; the sheet follows without transition meanwhile', () => {
      touchDevice();
      vi.stubGlobal('requestAnimationFrame', () => 0);
      const { sheet, header } = openSheet();
      touch(header, 'touchstart', 100);
      expect(sheet).toHaveClass('no-transition');
      touch(header, 'touchmove', 300);
      act(() => {
        touch(header, 'touchend', 300);
      });
      expect(sheet).not.toHaveClass('no-transition', 'osui-bottom-sheet--is-open');
      expect(sheet.style.transform).toBe('');
    });

    it('a slow drag springs back (tension 300, friction 15, mass 1) and an upward drag is ignored', () => {
      touchDevice();
      vi.stubGlobal('requestAnimationFrame', () => 0);
      const play = vi.fn();
      vi.stubGlobal(
        'KeyframeEffect',
        class {
          constructor(
            readonly target: Element,
            readonly keyframes: Keyframe[],
            readonly options: KeyframeEffectOptions,
          ) {}
        },
      );
      vi.stubGlobal(
        'Animation',
        class {
          play = play;
          cancel = vi.fn();
        },
      );
      const time = vi.spyOn(Date.prototype, 'getTime');
      const { sheet, header } = openSheet();
      time.mockReturnValueOnce(0).mockReturnValueOnce(10_000);
      touch(header, 'touchstart', 100);
      touch(header, 'touchmove', 150);
      touch(header, 'touchend', 150);
      expect(play).toHaveBeenCalledTimes(1);
      expect(sheet).toHaveClass('osui-bottom-sheet--is-open');
      touch(header, 'touchstart', 300);
      touch(header, 'touchmove', 100);
      touch(header, 'touchend', 100);
      expect(sheet).toHaveClass('osui-bottom-sheet--is-open');
      expect(play).toHaveBeenCalledTimes(1);
    });

    it('the spring settles back to 0 within 1000 frames', () => {
      const { positions, frames } = createSpringEffect(
        0,
        50,
        'vertical',
        BOTTOM_SHEET_SPRING.springAnimationProperties,
      );
      expect(frames).toBeGreaterThan(0);
      expect(positions[0]?.transform).toMatch(/^translateY\(/);
      expect(createSpringEffect(0, 0, 'vertical', BOTTOM_SHEET_SPRING.springAnimationProperties).frames).toBe(0);
    });
  });
});
