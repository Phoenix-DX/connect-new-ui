/* The Connect2Feed embed SDK, ported from migration/runtime-sources/UBTConnect_EmbedFeed.EmbedFeed.js (SDK below;
   fetched read-only from TST). Same configuration keys and defaults, iframe URLs and attributes, preload iframe,
   postMessage protocol and callbacks, in the original order. The SDK expects `baseUrl` to be the CMS origin: the iframe
   URL is `<baseUrl>/embed/feeds?…` (:51-71), messages are accepted only from `event.origin === baseUrl` (:183, :617)
   and posted with `baseUrl` as target origin. Decision D8 (b) and CR-W2F-1: the mock CMS page and its origin. */

/* The port is split by concern: connect2FeedState.ts (configuration, private variables), connect2FeedIframe.ts (the
   feed iframe), connect2FeedMessages.ts (its messages) and connect2FeedItems.ts (feed item iframes). */
import {
  addPreconnect,
  buildEmbedUrl,
  createIframe,
  discardForFeedIdChange,
  discardForIdentityChange,
  isIframeAttached,
  markIdentity,
  refreshToken,
  resetStaleState,
  sendToken,
  setTheme,
} from './connect2FeedIframe';
import { closeFeedItem, openFeedItem } from './connect2FeedItems';
import { handleMessage, resendAuth } from './connect2FeedMessages';
import {
  baseUrl,
  defaults,
  mergeConfig,
  sdk,
  type Connect2FeedConfig,
  type Connect2FeedUserConfig,
} from './connect2FeedState';

/** configure (:319-417): listens once, then preloads a hidden iframe in the container (or only preconnects). */
function configure(userConfig?: Connect2FeedUserConfig): Promise<void> | null | undefined {
  mergeConfig(userConfig);
  if (!sdk.config.baseUrl) {
    console.error('Connect2Feed: baseUrl is required');
    return undefined;
  }
  if (!sdk.isConfigured) {
    window.addEventListener('message', handleMessage);
    sdk.isConfigured = true;
  }
  resetStaleState();
  discardForFeedIdChange();
  discardForIdentityChange();
  const existing = sdk.preloadIframe ?? sdk.iframe;
  if (existing) {
    if (sdk.isReady) resendAuth(existing.contentWindow);
    return sdk.configurePromise;
  }
  sdk.configurePromise = new Promise<void>((resolve) => {
    sdk.configureResolve = resolve;
  });
  const tryPreload = () => {
    const container = document.getElementById(sdk.config.containerId);
    if (!container) {
      addPreconnect();
      if (sdk.configureResolve) {
        sdk.configureResolve();
        sdk.configureResolve = null;
      }
      return;
    }
    const el = document.createElement('iframe');
    sdk.preloadIframe = el;
    el.id = 'connect2-feeds-preload';
    markIdentity(el);
    el.src = buildEmbedUrl() + '&preload=true';
    el.style.width = '0';
    el.style.height = '0';
    el.style.border = 'none';
    el.style.position = 'absolute';
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    el.setAttribute('aria-hidden', 'true');
    el.setAttribute('title', 'Connect2 News Feed');
    container.appendChild(el);
    sdk.configureTimeout = setTimeout(() => {
      if (sdk.configureResolve) {
        sdk.configureResolve();
        sdk.configureResolve = null;
      }
    }, 15000);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryPreload);
  else tryPreload();
  return sdk.configurePromise;
}

/** loadFeeds (:500-560): shows the preloaded iframe and asks it to load, or creates the feed iframe. */
function loadFeeds(userConfig?: Connect2FeedUserConfig) {
  if (userConfig) void configure(userConfig);
  sdk.hasEmittedComplete = false;
  resetStaleState();
  discardForFeedIdChange();
  discardForIdentityChange();
  if (!sdk.config.baseUrl) {
    console.error('Connect2Feed: baseUrl is required');
    return;
  }
  const doLoad = () => {
    const preload = sdk.preloadIframe;
    if (isIframeAttached(preload)) {
      preload.style.width = sdk.config.width;
      preload.style.height = sdk.config.height;
      preload.style.position = '';
      preload.style.opacity = '';
      preload.style.pointerEvents = '';
      preload.id = 'connect2-feeds-iframe';
      preload.removeAttribute('aria-hidden');
      const parent = preload.parentNode;
      if (parent)
        for (const child of Array.from(parent.childNodes).reverse()) if (child !== preload) parent.removeChild(child);
      sdk.iframe = preload;
      sdk.preloadIframe = null;
      const sendFeedsLoad = () => {
        sdk.iframe?.contentWindow?.postMessage({ type: 'feeds:load' }, baseUrl());
      };
      if (sdk.configurePromise) void sdk.configurePromise.then(sendFeedsLoad);
      else sendFeedsLoad();
    } else {
      sdk.preloadIframe = null;
      createIframe();
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', doLoad);
  else doLoad();
}

/** destroy (:746-778). The configuration itself is kept, as in the original. */
function destroy() {
  window.removeEventListener('message', handleMessage);
  sdk.iframe?.parentNode?.removeChild(sdk.iframe);
  sdk.preloadIframe?.parentNode?.removeChild(sdk.preloadIframe);
  if (sdk.configureTimeout) {
    clearTimeout(sdk.configureTimeout);
    sdk.configureTimeout = null;
  }
  for (const feedId of Object.keys(sdk.itemIframes)) closeFeedItem(feedId);
  sdk.iframe = null;
  sdk.preloadIframe = null;
  sdk.isReady = false;
  sdk.isConfigured = false;
  sdk.pendingToken = null;
  sdk.hasEmittedComplete = false;
  sdk.itemIframes = {};
  sdk.itemHandlers = {};
  sdk.configurePromise = null;
  sdk.configureResolve = null;
}

/** Connect2Feed.embed (:780-793). */
export const embed = {
  configure,
  loadFeeds,
  init: loadFeeds,
  destroy,
  sendIdToken: sendToken,
  refreshToken,
  setTheme,
  openFeedItem,
  closeFeedItem,
  isReady: () => sdk.isReady,
  isConfigured: () => sdk.isConfigured,
  getConfig: (): Connect2FeedConfig => ({ ...sdk.config }),
};

/** Tests only: destroy, then forget the configuration (the SDK keeps it for the page's life). */
export function resetConnect2Feed() {
  destroy();
  sdk.config = defaults();
}
