import { composeStories } from '@storybook/react-vite';
import { act, render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { expectToMatchCapture } from '../../../test/dom';
import { testCapturedVariants } from '../../test/capturedVariants';
import { embed, resetConnect2Feed } from './connect2Feed';
import { Embedded_FeedCMS } from './Embedded_FeedCMS';
import * as stories from './Embedded_FeedCMS.stories';
import { FEED_CMS_MOCK_URL } from './mocks';

/* Stories compared synchronously; the others have their own test below. */
const capturedStories = { default: stories.default, V2: stories.V2 };
const captures = import.meta.glob<string>('./__captures__/*.html', { query: '?raw', import: 'default', eager: true });
const { V1 } = composeStories(stories);

/* The CMS answers through postMessage (connect2Feed.ts, SDK :182-315): a message whose origin is the configured
   BaseURL and whose source is the feed iframe. jsdom keeps the origin string as given. */
function fromCms(iframe: HTMLIFrameElement, data: Record<string, unknown>, origin = FEED_CMS_MOCK_URL) {
  act(() => {
    window.dispatchEvent(new MessageEvent('message', { origin, source: iframe.contentWindow, data }));
  });
}

async function loadFeed(container: HTMLElement) {
  const iframe = await waitFor(() => {
    const el = container.querySelector('iframe');
    if (!el) throw new Error('no iframe yet');
    return el;
  });
  fromCms(iframe, { type: 'embed:ready' });
  fromCms(iframe, { type: 'embed:complete', count: 1, total: 1 });
  return iframe;
}

describe('Embedded_FeedCMS', () => {
  afterEach(() => {
    resetConnect2Feed();
  });

  testCapturedVariants(capturedStories, captures);

  it('V1 matches __captures__/v1.html (HomeFeed/default: loaded; the SDK iframe is not in the capture)', async () => {
    const { container } = render(<V1 />);
    const iframe = await loadFeed(container);
    await waitFor(() => {
      expect(container.querySelector('.display-none')).toBeNull();
    });
    // configure preloads the iframe (SDK :377-408), loadFeeds shows it (:515-548).
    expect(iframe.getAttribute('src')).toBe(`${FEED_CMS_MOCK_URL}/embed/feeds?theme=light&limit=10&preload=true`);
    expect(iframe.id).toBe('connect2-feeds-iframe');
    expect(iframe).toHaveAttribute('title', 'Connect2 News Feed');
    expect(iframe).not.toHaveAttribute('aria-hidden');
    expect(iframe.style.height).toBe('100%');
    iframe.remove();
    expectToMatchCapture(container.firstElementChild, captures['./__captures__/v1.html'] ?? '');
  });

  it('a single feed item: one skeleton item, `feed--single-item`; OnLoaded once the feed completes', async () => {
    const onLoaded = vi.fn();
    const { container } = render(<Embedded_FeedCMS id="$b1" feedItemId="42" onOnLoaded={onLoaded} />);
    expect(container.querySelectorAll('[data-block="ConnectPatterns.LazyImage"]')).toHaveLength(1);
    expect(container.querySelector('#b1-connect2feeds')).toHaveClass('feed--single-item', 'display-none');
    await loadFeed(container);
    await waitFor(() => {
      expect(onLoaded).toHaveBeenCalledTimes(1);
    });
  });

  it('scroll lock: the iframe scrolls by itself only once the container is at the top', async () => {
    const screen = document.createElement('div');
    screen.className = 'active-screen screen-container';
    document.body.appendChild(screen);
    const { container } = render(<Embedded_FeedCMS id="$b1" />, {
      container: screen.appendChild(document.createElement('div')),
    });
    const iframe = await loadFeed(container);
    await waitFor(() => {
      expect(iframe.getAttribute('scrolling')).toBe('yes'); // jsdom rect top 0 <= 60
    });
    screen.remove();
  });

  it('a feed item opens its own iframe: <BaseURL>/embed/feeds/item/<id> (SDK :691-709)', async () => {
    const { container } = render(<Embedded_FeedCMS id="$b1" feedItemId="4 2" />);
    const iframe = await loadFeed(container);
    expect(iframe.getAttribute('src')).toBe(`${FEED_CMS_MOCK_URL}/embed/feeds/item/4%202`);
    expect(iframe.id).toBe('connect2-feed-item-4 2');
    expect(iframe).toHaveAttribute('title', 'Connect2 Feed Item');
  });

  it('feed:share raises OnShare and feed:download OnDownloaded; other origins are ignored', async () => {
    const onShare = vi.fn();
    const onDownloaded = vi.fn();
    const { container } = render(<Embedded_FeedCMS id="$b1" onOnShare={onShare} onOnDownloaded={onDownloaded} />);
    const iframe = await loadFeed(container);
    fromCms(iframe, { type: 'feed:share', feedId: '7', feedTitle: 'Title', subtitle: 'Sub', image: 'img.png' });
    fromCms(iframe, { type: 'feed:download', url: 'file.pdf', fileName: 'File' });
    fromCms(iframe, { type: 'feed:share', feedId: '8' }, 'https://elsewhere.example');
    expect(onShare.mock.calls).toEqual([['7', 'Title', 'Sub', 'img.png']]);
    expect(onDownloaded.mock.calls).toEqual([['file.pdf', 'File']]);
  });

  it('SDK: URL params, mergeConfig keeps only its keys, an empty feed hides the iframe', () => {
    const host = document.body.appendChild(document.createElement('div'));
    host.id = 'feed-host';
    const onComplete = vi.fn();
    void embed.configure({
      baseUrl: 'https://cms.example',
      containerId: 'feed-host',
      hideActions: true,
      b2cTenants: 'a b',
      b2cPolicy: 'p',
      feedId: 'f1',
      channelId: 'dropped',
      onComplete,
    });
    expect(embed.getConfig()).not.toHaveProperty('channelId');
    const preload = host.querySelector('iframe');
    expect(preload?.id).toBe('connect2-feeds-preload');
    expect(preload?.getAttribute('src')).toBe(
      'https://cms.example/embed/feeds?theme=light&limit=10&hideActions=true&b2cTenants=a%20b&b2cPolicy=p&feedId=f1&preload=true',
    );
    expect(preload).toHaveAttribute('aria-hidden', 'true');
    embed.loadFeeds();
    const shown = host.querySelector('iframe');
    if (!shown) throw new Error('no iframe');
    fromCms(shown, { type: 'embed:complete', count: 0, total: 0 }, 'https://cms.example');
    expect(shown.style.display).toBe('none');
    expect(host.style.height).toBe('0px');
    expect(onComplete).toHaveBeenCalledTimes(1);
    host.remove();
  });
});
