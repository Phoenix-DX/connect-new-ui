import { act, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getClientVar, markAppReady, setClientVar } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import Splash from './SplashPage';

/* The splash screen up to the end of the load: the loading dots animation and its navigation come after it. */
function renderScreen() {
  return render(
    <MemoryRouter initialEntries={['/UBTConnect/Splash']}>
      <Routes>
        <Route path="/UBTConnect/Splash" element={<Splash />} />
      </Routes>
    </MemoryRouter>,
  );
}

/** Dispatches the event that the navigation gate sends before a navigation; returns whether it was prevented. */
function beforeNavigation(): boolean {
  const event = new CustomEvent('dx-before-navigation', {
    cancelable: true,
    detail: { location: '/UBTConnect/Login' },
  });
  window.dispatchEvent(event);
  return event.defaultPrevented;
}

beforeEach(() => {
  freshPage();
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
});

describe('Splash', () => {
  it('renders the loading dots, the load events and HandleOnResumeOpenLink in the blank layout', () => {
    const { container } = renderScreen();
    const layout = container.querySelector('[data-block="App_Common.LayoutBlank"]');
    if (layout === null) throw new Error('layout not rendered');
    const main = layout.querySelector('#b1-Content');
    if (main === null) throw new Error('main area not rendered');
    const children = Array.from(main.children).map((e) => `${e.getAttribute('data-block') ?? ''} ${e.id}`);
    expect(children).toEqual([
      'ConnectPatterns.LoadingDots $b2',
      'Private.ApplicationLoadEvents $b3',
      'Legacy_Share.HandleOnResumeOpenLink $b4',
    ]);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(container.querySelector('#\\$b5')?.getAttribute('data-block')).toBe('NavigationHandler.NavigationHandler');
    expect(container.querySelector('.ubt-loading-header-animation')).toBeNull();
  });

  it('on load complete starts the header animation and keeps the page URL as LastURL', () => {
    const { container } = renderScreen();
    act(() => {
      markAppReady();
    });
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    expect(container.querySelector('.ubt-loading-dots.ubt-loading-header-animation')).not.toBeNull();
    expect(getClientVar('UBTConnect.LastURL')).toBe(window.location.href);
  });

  it('prevents a navigation before the end of the load and keeps LastURL when it is set', () => {
    setClientVar('UBTConnect.LastURL', '/UBTConnect/HomeFeed');
    renderScreen();
    expect(beforeNavigation()).toBe(true);
    act(() => {
      markAppReady();
    });
    act(() => {
      vi.advanceTimersByTime(1500);
    });
    expect(getClientVar('UBTConnect.LastURL')).toBe('/UBTConnect/HomeFeed');
  });
});
