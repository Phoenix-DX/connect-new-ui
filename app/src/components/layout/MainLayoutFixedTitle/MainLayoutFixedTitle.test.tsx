import { act, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { testCapturedVariants } from '@/test/capturedVariants';
import { MainLayoutFixedTitle } from './MainLayoutFixedTitle';
import * as stories from './MainLayoutFixedTitle.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Layout_MainPages_FixedTitle', () => {
  testCapturedVariants(stories, captures);

  it('title in the h2, search row placeholders, flag classes, PullToRefresh', () => {
    const { container } = render(
      <MainLayoutFixedTitle
        id="$b1"
        extendedClass="x"
        enableAccessibilityFeatures
        usePullToRefresh
        placeholderHeaderTitle="Title"
        placeholderHeaderInput={<input aria-label="search" />}
        placeholderHeaderInputIcon={<i className="icon-x" />}
      />,
    );
    expect(container.querySelector('.layout')?.className).toBe(
      'layout layout-side layout-native ios-bounce ubt-layout-main layout-sticky-title hide-header-on-scroll x has-accessible-features',
    );
    expect(container.querySelector('.ubt-layout-main__title h2.header-title > .OSInline')?.textContent).toBe('Title');
    expect(container.querySelector('.ubt-layout-main__search input')).not.toBeNull();
    expect(container.querySelector('.ubt-layout-main__search .header-right > .icon-x')).not.toBeNull();
    expect(container.querySelector('[data-block="Private.PullToRefresh"]')).not.toBeNull();
  });

  it('SetScrollEvents: sticky title padding, OnHeaderScrolled once per crossing, header shadow; OnDestroy detaches', () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
    const frames: FrameRequestCallback[] = [];
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => frames.push(cb));
    const sheet = document.head.appendChild(document.createElement('style'));
    sheet.textContent = '.header-top-search { --header-size: 50px; }';
    document.body.style.setProperty('--status-bar-height', '20px');
    const screenEl = document.body.appendChild(document.createElement('div'));
    screenEl.className = 'active-screen screen-container';
    const onScrolled = vi.fn();
    const { container, unmount } = render(<MainLayoutFixedTitle onOnHeaderScrolled={onScrolled} />, {
      container: screenEl.appendChild(document.createElement('div')),
    });
    const scrollTo = (y: number) => {
      screenEl.scrollTop = y;
      screenEl.dispatchEvent(new Event('scroll'));
      act(() => {
        for (const cb of frames.splice(0)) cb(0);
      });
    };
    const headerContent = container.querySelector<HTMLElement>('header .header-top-content');
    scrollTo(25);
    expect(headerContent?.style.paddingTop).toBe('10px');
    expect(onScrolled).not.toHaveBeenCalled();
    expect(screenEl.style.getPropertyValue('--header-shadow-scroll')).toBe('visible');
    scrollTo(70);
    expect(onScrolled).toHaveBeenCalledExactlyOnceWith(true);
    scrollTo(90);
    expect(onScrolled).toHaveBeenCalledTimes(1);
    scrollTo(0);
    expect(onScrolled).toHaveBeenLastCalledWith(false);
    expect(headerContent?.style.paddingTop).toBe('0px');
    expect(screenEl.style.getPropertyValue('--header-shadow-scroll')).toBe('hidden');
    unmount();
    screenEl.scrollTop = 80;
    screenEl.dispatchEvent(new Event('scroll'));
    expect(frames).toHaveLength(0);
    vi.unstubAllGlobals();
    vi.useRealTimers();
    sheet.remove();
    screenEl.remove();
    document.body.style.removeProperty('--status-bar-height');
  });
});
