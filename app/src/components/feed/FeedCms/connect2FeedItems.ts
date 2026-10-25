import { baseUrl, sdk, type FeedMessage } from './connect2FeedState';
import { authMessage, isIframeAttached, themeMessage } from './connect2FeedIframe';

/* Connect2Feed embed SDK port (connect2Feed.ts): the feed item iframes and their messages. */

/** relayItemMessage (:562-587). */
function relayItemMessage(data: FeedMessage) {
  switch (data.type) {
    case 'feeds:loaded':
      sdk.config.onFeedsLoaded?.(data);
      break;
    case 'feeds:error':
      sdk.config.onError?.(data);
      break;
    case 'feed:click':
      sdk.config.onFeedClick?.(data);
      break;
    case 'feed:share':
      sdk.config.onShare?.(data);
      break;
    case 'feed:add-to-calendar':
      sdk.config.onAddToCalendar?.(data);
      break;
    case 'feed:filter-cleared':
      sdk.config.onFilterCleared?.(data);
      break;
    case 'feed:download':
      if (sdk.config.onDownload) sdk.config.onDownload(data);
      else if (data.url) window.open(data.url, '_blank');
      break;
  }
}

/** sendTokenToItemIframe (:712-732). */
function sendTokenToItemIframe(feedId: string, token: string) {
  const target = sdk.itemIframes[feedId]?.contentWindow;
  if (!target) return;
  target.postMessage(authMessage('auth:token', token), baseUrl());
  if (sdk.config.customTheme) target.postMessage(themeMessage(), baseUrl());
}

/** injectItemToken (:589-608). */
function injectItemToken(feedId: string) {
  if (sdk.config.idToken) {
    sendTokenToItemIframe(feedId, sdk.config.idToken);
    return;
  }
  if (typeof sdk.config.getIdToken === 'function') {
    const result = sdk.config.getIdToken();
    if (result instanceof Promise) {
      void result.then((token) => {
        if (token && sdk.itemIframes[feedId]) sendTokenToItemIframe(feedId, token);
      });
      return;
    }
    if (result && sdk.itemIframes[feedId]) sendTokenToItemIframe(feedId, result);
  }
}

/** attachItemHandler (:610-644): one message listener per feed item iframe. */
function attachItemHandler(feedId: string, injectTokenOnReady: boolean) {
  const previous = sdk.itemHandlers[feedId];
  if (previous) window.removeEventListener('message', previous);
  let hasEmittedItemComplete = false;
  const handler = (event: MessageEvent) => {
    if (event.origin !== sdk.config.baseUrl) return;
    const itemIframe = sdk.itemIframes[feedId];
    if (!itemIframe || event.source !== itemIframe.contentWindow) return;
    const data = (event.data ?? {}) as FeedMessage;
    if (data.type === 'embed:ready') {
      if (injectTokenOnReady) injectItemToken(feedId);
      return;
    }
    if (data.type === 'embed:complete') {
      if (data.total === 0) itemIframe.style.height = '0px';
      if (!hasEmittedItemComplete && sdk.config.onComplete) {
        hasEmittedItemComplete = true;
        sdk.config.onComplete(data);
      }
      return;
    }
    relayItemMessage(data);
  };
  sdk.itemHandlers[feedId] = handler;
  window.addEventListener('message', handler);
}

/** openFeedItem (:646-710): one feed item in its own iframe (or the preloaded one for the configured feedId). */
export function openFeedItem(
  feedId: string,
  containerId: string,
  options?: { hideActions?: boolean; width?: string; height?: string },
): HTMLIFrameElement | null {
  if (!sdk.config.baseUrl || !feedId) return null;
  const container = containerId ? document.getElementById(containerId) : null;
  if (!container) return null;
  const itemWidth = options?.width || '100%';
  const itemHeight = options?.height || '100%';
  if (sdk.itemIframes[feedId]) closeFeedItem(feedId);
  const preload = sdk.preloadIframe;
  if (!options?.hideActions && isIframeAttached(preload) && sdk.config.feedId === feedId) {
    preload.style.width = itemWidth;
    preload.style.height = itemHeight;
    preload.style.position = '';
    preload.style.opacity = '';
    preload.style.pointerEvents = '';
    preload.id = 'connect2-feed-item-' + feedId;
    preload.removeAttribute('aria-hidden');
    container.innerHTML = '';
    container.appendChild(preload);
    sdk.itemIframes[feedId] = preload;
    sdk.preloadIframe = null;
    attachItemHandler(feedId, false);
    const sendFeedsLoad = () => {
      sdk.itemIframes[feedId]?.contentWindow?.postMessage({ type: 'feeds:load' }, baseUrl());
    };
    if (sdk.configurePromise) void sdk.configurePromise.then(sendFeedsLoad);
    else sendFeedsLoad();
    return preload;
  }
  const itemIframe = document.createElement('iframe');
  itemIframe.id = 'connect2-feed-item-' + feedId;
  let itemSrc = baseUrl() + '/embed/feeds/item/' + encodeURIComponent(feedId);
  if (options?.hideActions) itemSrc += '?hideActions=true';
  itemIframe.src = itemSrc;
  itemIframe.style.width = itemWidth;
  itemIframe.style.height = itemHeight;
  itemIframe.style.border = 'none';
  itemIframe.setAttribute('title', 'Connect2 Feed Item');
  container.innerHTML = '';
  container.appendChild(itemIframe);
  sdk.itemIframes[feedId] = itemIframe;
  attachItemHandler(feedId, true);
  return itemIframe;
}

/** closeFeedItem (:734-744). */
export function closeFeedItem(feedId: string) {
  const handler = sdk.itemHandlers[feedId];
  if (handler) {
    window.removeEventListener('message', handler);
    Reflect.deleteProperty(sdk.itemHandlers, feedId);
  }
  sdk.itemIframes[feedId]?.parentNode?.removeChild(sdk.itemIframes[feedId]);
  Reflect.deleteProperty(sdk.itemIframes, feedId);
}
