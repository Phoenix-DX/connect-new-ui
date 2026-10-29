import { act, render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { EntertainingConfig } from '@/api/entertaining';
import { loadedEmbed, requireEmbed } from './connect2Entertaining';
import { Embedded_MyEntertaining } from './Embedded_MyEntertaining';

/** The answer of DataActionGetEntertainingConfig that the caller gives (the mock: the app's own origin, no token). */
const config: EntertainingConfig = { token: '', baseURL: window.location.origin, b2CClientId: '', b2CPolicy: '' };

const skeletonItems = (c: HTMLElement) => c.querySelectorAll('[data-block="ConnectPatterns.LazyImage"]').length;

/** The stand-in puts one iframe into the container; its load event is the SDK's onReady and onComplete. */
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

describe('Embedded_MyEntertaining', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('no configuration yet (loading or failed): 5 skeleton items, the container is hidden, the SDK does not start', () => {
    const { container } = render(<Embedded_MyEntertaining id="$b2" />);
    expect(container.querySelector('[data-block="Blocks.Embedded_MyEntertaining"]')).toHaveAttribute('id', '$b2');
    expect(skeletonItems(container)).toBe(5);
    expect(container.querySelector('#b2-connect2entertaining')).toHaveClass('overflow-hidden', 'display-none');
    expect(container.querySelector('iframe')).toBeNull();
    expect(loadedEmbed()?.isConfigured() ?? false).toBe(false);
  });

  it('with the configuration: InitializeCalendar with the inputs; onComplete ends the loading and raises the events', async () => {
    const onReady = vi.fn();
    const onComplete = vi.fn();
    const { container } = render(
      <Embedded_MyEntertaining id="$b2" sources="ldm" config={config} onOnReady={onReady} onOnComplete={onComplete} />,
    );
    const iframe = await loadCalendar(container);
    expect(iframe.getAttribute('src')).toBe('/mock-embeds/my-entertaining.html?view=timeline&theme=light&sources=ldm');
    expect(iframe.parentElement).toHaveAttribute('id', 'b2-connect2entertaining');
    await waitFor(() => {
      expect(skeletonItems(container)).toBe(0);
    });
    expect(container.querySelector('#b2-connect2entertaining')).not.toHaveClass('display-none');
    expect(onReady).toHaveBeenCalledTimes(1);
    expect(onComplete.mock.calls).toEqual([['', '']]);
  });

  it('OnParametersChanged gives the new sources to the SDK; not on the first render', async () => {
    const { container, rerender } = render(<Embedded_MyEntertaining id="$b2" sources="orbit" config={config} />);
    const iframe = await loadCalendar(container);
    const post = vi.spyOn(iframe.contentWindow as Window, 'postMessage');
    rerender(<Embedded_MyEntertaining id="$b2" sources="orbit" config={config} />);
    expect(post).not.toHaveBeenCalled();
    rerender(<Embedded_MyEntertaining id="$b2" sources="" config={config} />);
    expect(post).toHaveBeenCalledWith({ type: 'sources:set', sources: '' }, window.location.origin);
  });

  it('embed:open-map from the calendar origin raises OnOpenMap; other origins are ignored', async () => {
    const onOpenMap = vi.fn();
    const { container } = render(<Embedded_MyEntertaining id="$b2" config={config} onOnOpenMap={onOpenMap} />);
    await loadCalendar(container);
    act(() => {
      window.dispatchEvent(
        new MessageEvent('message', {
          origin: window.location.origin,
          data: { type: 'embed:open-map', lat: -33.86, lng: 151.21, label: 'Harbour Hall' },
        }),
      );
      window.dispatchEvent(
        new MessageEvent('message', { origin: 'https://elsewhere.example', data: { type: 'embed:open-map' } }),
      );
    });
    expect(onOpenMap.mock.calls).toEqual([['-33.86', '151.21', 'Harbour Hall']]);
  });

  it('refreshes the token every 10 minutes while open; OnDestroy cleans up the SDK, the listener and the timer', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const refreshToken = vi.spyOn(await requireEmbed(config.baseURL), 'refreshToken');
    const onRefreshToken = vi.fn((apply: (idToken: string) => void) => {
      apply('id-token-1');
      return Promise.resolve();
    });
    const onOpenMap = vi.fn();
    const { container, unmount } = render(
      <Embedded_MyEntertaining id="$b2" config={config} onRefreshToken={onRefreshToken} onOnOpenMap={onOpenMap} />,
    );
    await loadCalendar(container);
    expect(onRefreshToken).not.toHaveBeenCalled();
    act(() => {
      vi.advanceTimersByTime(10 * 60 * 1000);
    });
    expect(onRefreshToken).toHaveBeenCalledTimes(1);
    expect(refreshToken).toHaveBeenCalledWith('id-token-1');

    unmount();
    expect(loadedEmbed()?.isConfigured()).toBe(false);
    act(() => {
      vi.advanceTimersByTime(10 * 60 * 1000);
      window.dispatchEvent(
        new MessageEvent('message', { origin: window.location.origin, data: { type: 'embed:open-map' } }),
      );
    });
    expect(onRefreshToken).toHaveBeenCalledTimes(1);
    expect(onOpenMap).not.toHaveBeenCalled();
  });

  it('Action_SetToken keeps the configuration token for getIdToken; the SDK onNavBack raises OnNavBack', async () => {
    const init = vi.spyOn(await requireEmbed(config.baseURL), 'init');
    const onNavBack = vi.fn();
    const { container } = render(
      <Embedded_MyEntertaining id="$b2" config={{ ...config, token: 'config-token' }} onOnNavBack={onNavBack} />,
    );
    await loadCalendar(container);
    const options = init.mock.calls[0]?.[0];
    expect(options?.getIdToken()).toBe('config-token');
    act(() => {
      options?.onNavBack();
    });
    expect(onNavBack).toHaveBeenCalledTimes(1);
    init.mockRestore();
  });

  it("stand-in: the mock calendar's back control (embed:nav-back from its iframe) is the SDK onNavBack", async () => {
    const onNavBack = vi.fn();
    const navBack = (source: Window | null) =>
      new MessageEvent('message', { origin: window.location.origin, source, data: { type: 'embed:nav-back' } });
    const { container, unmount } = render(<Embedded_MyEntertaining id="$b2" config={config} onOnNavBack={onNavBack} />);
    const iframe = await loadCalendar(container);
    const calendar = iframe.contentWindow;
    act(() => {
      window.dispatchEvent(navBack(window));
      window.dispatchEvent(navBack(calendar));
    });
    expect(onNavBack).toHaveBeenCalledTimes(1);
    unmount();
    window.dispatchEvent(navBack(calendar));
    expect(onNavBack).toHaveBeenCalledTimes(1);
  });

  it('ResumeListener: a visible page refreshes the token (SetToken, then the SDK); OnDestroy removes it', async () => {
    const embed = await requireEmbed(config.baseURL);
    const refreshToken = vi.spyOn(embed, 'refreshToken');
    const init = vi.spyOn(embed, 'init');
    const onRefreshToken = vi.fn((apply: (idToken: string) => void) => {
      apply('id-token-2');
      return Promise.resolve();
    });
    const { container, unmount } = render(
      <Embedded_MyEntertaining id="$b2" config={config} onRefreshToken={onRefreshToken} />,
    );
    await loadCalendar(container);
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'));
    });
    expect(onRefreshToken).toHaveBeenCalledTimes(1);
    expect(refreshToken).toHaveBeenCalledWith('id-token-2');
    expect(init.mock.calls[0]?.[0].getIdToken()).toBe('id-token-2');
    unmount();
    act(() => {
      document.dispatchEvent(new Event('resume'));
    });
    expect(onRefreshToken).toHaveBeenCalledTimes(1);
    init.mockRestore();
    refreshToken.mockRestore();
  });

  it('a token that comes after the block closed goes nowhere (no configured SDK)', async () => {
    const refreshToken = vi.spyOn(await requireEmbed(config.baseURL), 'refreshToken');
    let apply: ((idToken: string) => void) | undefined;
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const { container, unmount } = render(
      <Embedded_MyEntertaining
        id="$b2"
        config={config}
        onRefreshToken={(a) => {
          apply = a;
          return Promise.resolve();
        }}
      />,
    );
    await loadCalendar(container);
    act(() => {
      vi.advanceTimersByTime(10 * 60 * 1000);
    });
    unmount();
    apply?.('late-token');
    expect(refreshToken).not.toHaveBeenCalled();
  });
});
