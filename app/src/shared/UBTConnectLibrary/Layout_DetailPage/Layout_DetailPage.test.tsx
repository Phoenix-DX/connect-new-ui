import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { setSignedInUser } from '../../../shell/session';
import { testCapturedVariants } from '../../test/capturedVariants';
import { Layout_DetailPage } from './Layout_DetailPage';
import * as stories from './Layout_DetailPage.stories';

const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });

describe('Layout_DetailPage', () => {
  afterEach(() => {
    setSignedInUser(null);
  });

  testCapturedVariants(stories, captures);

  it('OnReadyEvent gets the wrapper id; accessibility class; no LayoutRuntime_Top when not initializing', () => {
    const onReady = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <Layout_DetailPage
          id="$b1"
          inEnableAccessibilityFeatures
          inInitializeNavigationHandler={false}
          onOnReadyEvent={onReady}
        />
      </MemoryRouter>,
    );
    expect(onReady).toHaveBeenCalledWith('b1-LayoutWrapper_Detail');
    expect(container.querySelector('#b1-LayoutWrapper_Detail')).toHaveClass('has-accessible-features');
    expect(container.querySelector('.skip-nav')?.getAttribute('data-showskipcontent')).toBe('true');
    expect(container.querySelector('[data-block="LayoutRuntime_NavigationHandler.LayoutRuntime_Top"]')).toBeNull();
  });

  it('the back arrow goes to the previous screen', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/UBTConnect/A', '/UBTConnect/B']} initialIndex={1}>
        <Routes>
          <Route path="/UBTConnect/A" element={<p>previous</p>} />
          <Route path="/UBTConnect/B" element={<Layout_DetailPage />} />
        </Routes>
      </MemoryRouter>,
    );
    const arrow = container.querySelector('.connect-icon-arrow_left_alt');
    if (!arrow) throw new Error('back arrow not rendered');
    fireEvent.click(arrow);
    expect(screen.getByText('previous')).toBeInTheDocument();
  });

  it('SetScrollShadow: header / footer shadow of the scroll container after 200 ms and on scroll; OnDestroy detaches', () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
    const frames: FrameRequestCallback[] = [];
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => frames.push(cb));
    const screenEl = document.body.appendChild(document.createElement('div'));
    screenEl.className = 'active-screen screen-container';
    Object.defineProperty(screenEl, 'scrollHeight', { configurable: true, value: 1000 });
    Object.defineProperty(screenEl, 'clientHeight', { configurable: true, value: 400 });
    const { unmount } = render(
      <MemoryRouter>
        <Layout_DetailPage />
      </MemoryRouter>,
      { container: screenEl.appendChild(document.createElement('div')) },
    );
    const shadows = () => [
      screenEl.style.getPropertyValue('--header-shadow-scroll'),
      screenEl.style.getPropertyValue('--footer-shadow-scroll'),
    ];
    expect(shadows()).toEqual(['', '']);
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(shadows()).toEqual(['hidden', 'visible']);
    const scrollTo = (y: number) => {
      screenEl.scrollTop = y;
      screenEl.dispatchEvent(new Event('scroll'));
      screenEl.dispatchEvent(new Event('scroll'));
      expect(frames).toHaveLength(1);
      for (const cb of frames.splice(0)) cb(0);
    };
    scrollTo(300);
    expect(shadows()).toEqual(['visible', 'visible']);
    scrollTo(600);
    expect(shadows()).toEqual(['visible', 'hidden']);
    unmount();
    screenEl.dispatchEvent(new Event('scroll'));
    expect(frames).toHaveLength(0);
    vi.unstubAllGlobals();
    vi.useRealTimers();
    screenEl.remove();
  });
});
