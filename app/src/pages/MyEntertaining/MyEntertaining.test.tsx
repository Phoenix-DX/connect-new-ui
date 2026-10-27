import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { StrictMode } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';
import { renderRoutes, resetNavigation } from '@/platform/navigation/testRouter';
import { setClientVar } from '@/platform/session/session';
import { calledActions, freshPage, recordBodies } from '@/test/testSupport';
import { loadedEmbed, requireEmbed } from './components/connect2Entertaining';
import MyEntertaining from './MyEntertainingPage';

/* The flow handler keeps its behaviour; the tests count its calls. */
vi.mock('@/platform/feedback/flowErrors', async (importOriginal) => {
  const original = await importOriginal<typeof import('@/platform/feedback/flowErrors')>();
  return { ...original, raiseToFlowHandler: vi.fn(original.raiseToFlowHandler) };
});

/* The screen with the MSW mocks of the test setup (mocks.ts: the app's own origin as BaseURL, no token) and the local
   stand-in of the calendar SDK (components/connect2Entertaining.ts: one iframe, ready and complete on its load). */
const PATH = '/UBTConnect/MyEntertaining';
const CONFIG = 'Embedded_MyEntertaining/DataActionGetEntertainingConfig';
const TOKEN = 'ActionAppManager_Get_UserIdToken';
const TEN_MINUTES = 10 * 60 * 1000;

function renderScreen(search: string, { strict = false } = {}) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  const tree = (
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={[`${PATH}${search}`]}>
        <Routes>
          <Route path={PATH} element={<MyEntertaining />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  );
  return render(strict ? <StrictMode>{tree}</StrictMode> : tree);
}

const skeletonItems = (c: HTMLElement) => c.querySelectorAll('[data-block="ConnectPatterns.LazyImage"]').length;

async function loadCalendar(container: HTMLElement): Promise<HTMLIFrameElement> {
  const iframe = await waitFor(() => {
    const el = container.querySelector('iframe');
    if (!el) throw new Error('no iframe yet');
    return el;
  });
  act(() => {
    iframe.dispatchEvent(new Event('load'));
  });
  return iframe;
}

describe('MyEntertaining', () => {
  beforeEach(() => {
    freshPage();
  });
  afterEach(() => {
    vi.useRealTimers();
    setClientVar('UBTConnect.Embedd_B2CTenant', '');
  });

  it('renders CommonUI_InsideLayout and MyEntertaining_Embedded: the detail layout "My Entertaining" with the calendar', async () => {
    const { container } = renderScreen('');
    expect(container.querySelector('[data-block="App_Common.CommonUI_InsideLayout"]')).toHaveAttribute('id', '$b1');
    expect(container.querySelector('[data-block="Calendar.MyEntertaining_Embedded"]')).toHaveAttribute('id', '$b2');
    expect(container.querySelector('[data-block="Layouts.Layout_DetailPage"]')).toHaveAttribute('id', 'b2-$b1');
    expect(container.querySelector('[data-block="Blocks.Embedded_MyEntertaining"]')).toHaveAttribute('id', 'b2-$b2');
    expect(container.querySelectorAll('[data-block="App_Common.CommonUI_InsideLayout"]')[1]).toHaveAttribute(
      'id',
      'b2-$b3',
    );
    expect(container.querySelector('.ubt-layout-detail--primary')).not.toBeNull();
    expect(screen.getByText('My Entertaining')).toBeInTheDocument();
    expect(skeletonItems(container)).toBe(5);
    await loadCalendar(container);
    await waitFor(() => {
      expect(skeletonItems(container)).toBe(0);
    });
    expect(container.querySelector('#b2-b2-connect2entertaining')).not.toHaveClass('display-none');
  });

  it('GetEntertainingConfig once, with the preloaded source of MyCalendarEventSourceId and Embedd_B2CTenant', async () => {
    setClientVar('UBTConnect.Embedd_B2CTenant', 'tenant-a');
    const bodies = recordBodies(`UBTConnect_EmbedMyEntertaining/${CONFIG}`);
    const { container } = renderScreen('?MyCalendarEventSourceId=event-ldm');
    const iframe = await loadCalendar(container);
    expect(iframe.getAttribute('src')).toBe('/mock-embeds/my-entertaining.html?view=timeline&theme=light&sources=ldm');
    expect(calledActions()).toEqual([CONFIG]);
    await waitFor(() => {
      expect(bodies).toEqual([{ View: 'timeline', Theme: 'light', Sources: 'ldm', B2CTenant: 'tenant-a' }]);
    });
  });

  it('MyCalendarEventSourceId absent: no preloaded source', async () => {
    const bodies = recordBodies(`UBTConnect_EmbedMyEntertaining/${CONFIG}`);
    const { container } = renderScreen('');
    const iframe = await loadCalendar(container);
    expect(iframe.getAttribute('src')).toBe('/mock-embeds/my-entertaining.html?view=timeline&theme=light&sources=');
    await waitFor(() => {
      expect(bodies).toEqual([{ View: 'timeline', Theme: 'light', Sources: '', B2CTenant: '' }]);
    });
  });

  it('a failed GetEntertainingConfig: the skeleton stays and the calendar does not start', async () => {
    sessionStorage.setItem('mock:mock', 'error');
    const { container } = renderScreen('?MyCalendarEventSourceId=event-orbit');
    await waitFor(() => {
      expect(calledActions()).toEqual([CONFIG]);
    });
    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(skeletonItems(container)).toBe(5);
    expect(container.querySelector('iframe')).toBeNull();
    expect(container.querySelector('#b2-b2-connect2entertaining')).toHaveClass('display-none');
  });

  it('StrictMode: one GetEntertainingConfig call and one calendar', async () => {
    const { container } = renderScreen('', { strict: true });
    await loadCalendar(container);
    await waitFor(() => {
      expect(skeletonItems(container)).toBe(0);
    });
    expect(calledActions()).toEqual([CONFIG]);
    expect(container.querySelectorAll('iframe')).toHaveLength(1);
  });

  it('Handle_OpenMap: the open-map message of the calendar opens Google Maps outside the app', async () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    const { container } = renderScreen('');
    await loadCalendar(container);
    act(() => {
      window.dispatchEvent(
        new MessageEvent('message', {
          origin: window.location.origin,
          data: { type: 'embed:open-map', lat: 51.5, lng: -0.12, label: 'Riverside Hall' },
        }),
      );
    });
    expect(open).toHaveBeenCalledWith(
      'https://www.google.com/maps/search/?api=1&query=51.5,-0.12',
      '_blank',
      'noopener',
    );
  });

  /* W23: a flow that started runs to its end after the screen closed; it writes no state. */
  it('closed while GetEntertainingConfig is pending: the call ends, the calendar does not start', async () => {
    sessionStorage.setItem('mock:latency', '30');
    const errors = vi.spyOn(console, 'error');
    const { unmount } = renderScreen('?MyCalendarEventSourceId=event-assemble');
    await waitFor(() => {
      expect(calledActions()).toEqual([CONFIG]);
    });
    unmount();
    await new Promise((resolve) => setTimeout(resolve, 80));
    expect(calledActions()).toEqual([CONFIG]);
    expect(document.querySelector('iframe')).toBeNull();
    expect(loadedEmbed()?.isConfigured() ?? false).toBe(false);
    expect(errors).not.toHaveBeenCalled();
  });

  it('closed while the token refresh is pending: the call ends once, its failure goes once to the flow handler (Calendar Q2), the SDK gets nothing', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const refreshToken = vi.spyOn(await requireEmbed(window.location.origin), 'refreshToken');
    vi.mocked(raiseToFlowHandler).mockClear();
    const { container, unmount } = renderScreen('');
    await loadCalendar(container);
    sessionStorage.setItem('mock:latency', '30');
    sessionStorage.setItem('mock:mock', 'error');
    act(() => {
      vi.advanceTimersByTime(TEN_MINUTES);
    });
    expect(calledActions()).toEqual([CONFIG, TOKEN]);
    unmount();
    await waitFor(() => {
      expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    });
    act(() => {
      vi.advanceTimersByTime(TEN_MINUTES);
    });
    expect(calledActions()).toEqual([CONFIG, TOKEN]);
    expect(raiseToFlowHandler).toHaveBeenCalledTimes(1);
    expect(refreshToken).not.toHaveBeenCalled();
  });

  it('closed while a successful token refresh is pending: the token goes nowhere', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const refreshToken = vi.spyOn(await requireEmbed(window.location.origin), 'refreshToken');
    const { container, unmount } = renderScreen('');
    await loadCalendar(container);
    sessionStorage.setItem('mock:latency', '30');
    act(() => {
      vi.advanceTimersByTime(TEN_MINUTES);
    });
    unmount();
    await new Promise((resolve) => setTimeout(resolve, 80));
    expect(calledActions()).toEqual([CONFIG, TOKEN]);
    expect(refreshToken).not.toHaveBeenCalled();
  });
});

describe('MyEntertaining in the app frame', () => {
  beforeEach(() => {
    freshPage();
    resetNavigation();
  });

  it('the back arrow goes to the previous screen', async () => {
    const { router, at } = renderRoutes(
      {
        '/UBTConnect/HomeFeed': <p>HomeFeed screen</p>,
        '/UBTConnect/LDM_MyEvents_V2': <p>LDM events screen</p>,
        [PATH]: <MyEntertaining />,
      },
      '/UBTConnect/HomeFeed',
    );
    await act(() => router.navigate('/UBTConnect/LDM_MyEvents_V2'));
    await act(() => router.navigate(`${PATH}?MyCalendarEventSourceId=event-ldm`));
    // The back arrow: the Icon block b2-b1-$b2 of the layout header.
    const back = document.getElementById('b2-b1-$b2')?.firstElementChild;
    if (back == null) throw new Error('back arrow not rendered');
    fireEvent.click(back);
    expect(await screen.findByText('LDM events screen')).toBeInTheDocument();
    expect(at()).toBe('/UBTConnect/LDM_MyEvents_V2');
  });
});
