/* The Connect2Feed embed SDK, ported from migration/runtime-sources/UBTConnect_EmbedFeed.EmbedFeed.js (SDK below;
   fetched read-only from TST). Same configuration keys and defaults, iframe URLs and attributes, preload iframe,
   postMessage protocol and callbacks, in the original order. The SDK expects `baseUrl` to be the CMS origin: the iframe
   URL is `<baseUrl>/embed/feeds?…` (:51-71), messages are accepted only from `event.origin === baseUrl` (:183, :617)
   and posted with `baseUrl` as target origin. Decision D8 (b) and CR-W2F-1: the mock CMS page and its origin. */

export interface FeedMessage {
  type?: string;
  count?: number;
  total?: number;
  url?: string;
  fileName?: string;
  feedId?: string;
  feedTitle?: string;
  subtitle?: string;
  image?: string;
  message?: string;
  error?: string;
  [key: string]: unknown;
}

type Callback = ((data: FeedMessage) => void) | null;

export interface Connect2FeedConfig {
  baseUrl: string | null;
  theme: string;
  limit: number;
  hideActions: boolean;
  height: string;
  width: string;
  containerId: string;
  onReady: Callback;
  onFeedsLoaded: Callback;
  onError: Callback;
  onFeedClick: Callback;
  onShare: Callback;
  onAddToCalendar: Callback;
  onComplete: Callback;
  onDownload: Callback;
  onFilterCleared: Callback;
  idToken: string | null;
  getIdToken: (() => string | null | Promise<string | null>) | null;
  b2cTenants: string | null;
  b2cClientIds: string | null;
  b2cPolicy: string | null;
  customTheme: { mode?: string; variables?: Record<string, string> } | null;
  feedId: string | null;
}

/** What callers pass: any subset; keys the SDK does not know (channelId, tokenType…) are dropped by mergeConfig. */
export type Connect2FeedUserConfig = Partial<Connect2FeedConfig> & Record<string, unknown>;

/** Defaults (:5-29). */
const defaults = (): Connect2FeedConfig => ({
  baseUrl: null,
  theme: 'light',
  limit: 10,
  hideActions: false,
  height: '600px',
  width: '100%',
  containerId: 'connect2-feeds',
  onReady: null,
  onFeedsLoaded: null,
  onError: null,
  onFeedClick: null,
  onShare: null,
  onAddToCalendar: null,
  onComplete: null,
  onDownload: null,
  onFilterCleared: null,
  idToken: null,
  getIdToken: null,
  b2cTenants: null,
  b2cClientIds: null,
  b2cPolicy: null,
  customTheme: null,
  feedId: null,
});

let config = defaults();
let iframe: HTMLIFrameElement | null = null;
let isReady = false;
let pendingToken: string | null = null;
let itemIframes: Record<string, HTMLIFrameElement | undefined> = {};
let itemHandlers: Record<string, ((event: MessageEvent) => void) | undefined> = {};
let preloadIframe: HTMLIFrameElement | null = null;
let configureResolve: (() => void) | null = null;
let configurePromise: Promise<void> | null = null;
let configureTimeout: ReturnType<typeof setTimeout> | null = null;
let hasEmittedComplete = false;
let isConfigured = false;

const baseUrl = () => config.baseUrl ?? '';

/** mergeConfig (:42-49): only the SDK's own keys. */
function mergeConfig(userConfig: Connect2FeedUserConfig | undefined) {
  if (!userConfig) return;
  const target = config as unknown as Record<string, unknown>;
  for (const key of Object.keys(userConfig)) if (Object.hasOwn(config, key)) target[key] = userConfig[key];
}

/** buildEmbedUrl (:51-71). */
export function buildEmbedUrl(): string {
  const params: string[] = [];
  params.push('theme=' + encodeURIComponent(config.theme));
  params.push('limit=' + encodeURIComponent(config.limit.toString()));
  if (config.hideActions) params.push('hideActions=true');
  if (config.b2cTenants) params.push('b2cTenants=' + encodeURIComponent(config.b2cTenants));
  if (config.b2cClientIds) params.push('b2cClientIds=' + encodeURIComponent(config.b2cClientIds));
  if (config.b2cPolicy) params.push('b2cPolicy=' + encodeURIComponent(config.b2cPolicy));
  if (config.feedId) params.push('feedId=' + encodeURIComponent(config.feedId));
  return baseUrl() + '/embed/feeds?' + params.join('&');
}

/** addPreconnect (:73-81). */
function addPreconnect() {
  if (!config.baseUrl) return;
  if (document.querySelector('link[rel="preconnect"][href="' + config.baseUrl + '"]')) return;
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = config.baseUrl;
  document.head.appendChild(link);
}

/** tokenIdentity (:83-98): sub, oid or the first email of the JWT payload. */
function tokenIdentity(token: string | null): string | null {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length < 2) return null;
  try {
    let base64 = (parts[1] ?? '').replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4 !== 0) base64 += '=';
    const claims = JSON.parse(atob(base64)) as { sub?: string; oid?: string; emails?: string[] };
    return claims.sub || claims.oid || claims.emails?.[0] || null;
  } catch {
    return null;
  }
}

/** markIdentity (:100-106). */
function markIdentity(el: HTMLElement) {
  const identity = tokenIdentity(config.idToken);
  if (identity) el.setAttribute('data-c2-identity', identity);
}

/** createIframe (:108-131). */
function createIframe(): HTMLIFrameElement | null {
  const container = document.getElementById(config.containerId);
  if (!container) {
    console.error('Connect2Feed: Container element "' + config.containerId + '" not found');
    return null;
  }
  hasEmittedComplete = false;
  const el = document.createElement('iframe');
  iframe = el;
  el.id = 'connect2-feeds-iframe';
  markIdentity(el);
  el.src = buildEmbedUrl();
  el.style.width = config.width;
  el.style.height = config.height;
  el.style.border = 'none';
  el.setAttribute('title', 'Connect2 News Feed');
  el.setAttribute('loading', 'eager');
  container.innerHTML = '';
  container.appendChild(el);
  return el;
}

/** The auth message (:139-145, :202-211, :340-346, :716-722). */
function authMessage(type: 'auth:token' | 'auth:refresh', token: string) {
  const message: Record<string, string> = { type, token };
  if (config.b2cTenants) message.b2cTenants = config.b2cTenants;
  if (config.b2cClientIds) message.b2cClientIds = config.b2cClientIds;
  if (config.b2cPolicy) message.b2cPolicy = config.b2cPolicy;
  return message;
}

const themeMessage = () => ({
  type: 'theme:update',
  mode: config.customTheme?.mode,
  variables: config.customTheme?.variables,
});

/** sendToken (:133-147): kept until the iframe exists. */
function sendToken(token: string) {
  if (!iframe?.contentWindow) {
    pendingToken = token;
    return;
  }
  iframe.contentWindow.postMessage(authMessage('auth:token', token), baseUrl());
}

/** refreshToken (:149-160). */
function refreshToken(token: string) {
  if (!iframe?.contentWindow) return;
  iframe.contentWindow.postMessage(authMessage('auth:refresh', token), baseUrl());
}

/** setTheme (:162-170). */
function setTheme(options: { mode?: string; variables?: Record<string, string> }) {
  if (!iframe?.contentWindow) return;
  const message: Record<string, unknown> = { type: 'theme:update' };
  if (options.mode) message.mode = options.mode;
  if (options.variables) message.variables = options.variables;
  iframe.contentWindow.postMessage(message, baseUrl());
}

/** isItemWindow (:172-180). */
function isItemWindow(win: MessageEventSource | null) {
  if (!win) return false;
  return Object.values(itemIframes).some((el) => el?.contentWindow === win);
}

/** handleMessage (:182-315): the feed iframe's messages, from the CMS origin only. */
function handleMessage(event: MessageEvent) {
  if (event.origin !== config.baseUrl) return;
  if (isItemWindow(event.source)) return;
  const data = (event.data ?? {}) as FeedMessage;
  switch (data.type) {
    case 'embed:ready': {
      isReady = true;
      const targetWindow = event.source as Window | null;
      if (config.customTheme && targetWindow) targetWindow.postMessage(themeMessage(), baseUrl());
      if (config.idToken && targetWindow)
        targetWindow.postMessage(authMessage('auth:token', config.idToken), baseUrl());
      else if (pendingToken && targetWindow) {
        targetWindow.postMessage(authMessage('auth:token', pendingToken), baseUrl());
        pendingToken = null;
      } else if (typeof config.getIdToken === 'function') {
        Promise.resolve(config.getIdToken())
          .then((token) => {
            if (token && targetWindow) targetWindow.postMessage(authMessage('auth:token', token), baseUrl());
          })
          .catch((error: unknown) => {
            console.error('Connect2Feed: Failed to get token', error);
            config.onError?.({ type: 'token_error', message: error instanceof Error ? error.message : String(error) });
          });
      }
      config.onReady?.(data);
      break;
    }
    case 'auth:ready':
      if (configureTimeout) {
        clearTimeout(configureTimeout);
        configureTimeout = null;
      }
      if (configureResolve) {
        configureResolve();
        configureResolve = null;
      }
      break;
    case 'feeds:loaded':
      config.onFeedsLoaded?.(data);
      break;
    case 'feeds:error':
      config.onError?.(data);
      break;
    case 'feed:click':
      config.onFeedClick?.(data);
      break;
    case 'feed:share':
      config.onShare?.(data);
      break;
    case 'feed:add-to-calendar':
      config.onAddToCalendar?.(data);
      break;
    case 'feed:filter-cleared':
      config.onFilterCleared?.(data);
      break;
    case 'embed:complete': {
      if (iframe) {
        const emptyContainer = document.getElementById(config.containerId);
        if (data.total === 0) {
          iframe.style.display = 'none';
          if (emptyContainer) {
            emptyContainer.style.minHeight = '0px';
            emptyContainer.style.height = '0px';
          }
        } else {
          iframe.style.display = '';
          iframe.style.height = config.height;
          if (emptyContainer) {
            emptyContainer.style.minHeight = '';
            emptyContainer.style.height = '';
          }
        }
      }
      if (!hasEmittedComplete && config.onComplete) {
        hasEmittedComplete = true;
        config.onComplete(data);
      }
      break;
    }
    case 'feed:download':
      if (config.onDownload) config.onDownload(data);
      else if (data.url) window.open(data.url, '_blank');
      break;
  }
}

/** The auth (and theme) of an already loaded iframe on a new configure (:336-369). */
function resendAuth(target: Window | null) {
  if (target && config.idToken) target.postMessage(authMessage('auth:token', config.idToken), baseUrl());
  else if (target && typeof config.getIdToken === 'function')
    void Promise.resolve(config.getIdToken()).then((token) => {
      if (token) target.postMessage(authMessage('auth:token', token), baseUrl());
    });
  if (config.customTheme) target?.postMessage(themeMessage(), baseUrl());
}

/** configure (:319-417): listens once, then preloads a hidden iframe in the container (or only preconnects). */
function configure(userConfig?: Connect2FeedUserConfig): Promise<void> | null | undefined {
  mergeConfig(userConfig);
  if (!config.baseUrl) {
    console.error('Connect2Feed: baseUrl is required');
    return undefined;
  }
  if (!isConfigured) {
    window.addEventListener('message', handleMessage);
    isConfigured = true;
  }
  resetStaleState();
  discardForFeedIdChange();
  discardForIdentityChange();
  const existing = preloadIframe ?? iframe;
  if (existing) {
    if (isReady) resendAuth(existing.contentWindow);
    return configurePromise;
  }
  configurePromise = new Promise<void>((resolve) => {
    configureResolve = resolve;
  });
  const tryPreload = () => {
    const container = document.getElementById(config.containerId);
    if (!container) {
      addPreconnect();
      if (configureResolve) {
        configureResolve();
        configureResolve = null;
      }
      return;
    }
    const el = document.createElement('iframe');
    preloadIframe = el;
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
    configureTimeout = setTimeout(() => {
      if (configureResolve) {
        configureResolve();
        configureResolve = null;
      }
    }, 15000);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryPreload);
  else tryPreload();
  return configurePromise;
}

/** isIframeAttached (:419-421). */
const isIframeAttached = (el: HTMLElement | null): el is HTMLElement =>
  !!el && !!el.parentNode && document.contains(el);

/** iframeFeedId (:423-427). */
function iframeFeedId(el: HTMLIFrameElement) {
  const match = /[?&]feedId=([^&]*)/.exec(el.src);
  return match ? decodeURIComponent(match[1] ?? '') : null;
}

/** Drops both iframes and the pending configure (:435-449, :465-479). */
function discardIframes() {
  preloadIframe?.parentNode?.removeChild(preloadIframe);
  iframe?.parentNode?.removeChild(iframe);
  preloadIframe = null;
  iframe = null;
  isReady = false;
  configurePromise = null;
  configureResolve = null;
  if (configureTimeout) {
    clearTimeout(configureTimeout);
    configureTimeout = null;
  }
}

/** discardForFeedIdChange (:429-450). */
function discardForFeedIdChange() {
  const existing = preloadIframe ?? iframe;
  if (!existing) return;
  if (iframeFeedId(existing) === (config.feedId || null)) return;
  discardIframes();
}

/** discardForIdentityChange (:452-480). */
function discardForIdentityChange() {
  const existing = preloadIframe ?? iframe;
  if (!existing) return;
  const desired = tokenIdentity(config.idToken);
  if (!desired) return;
  const current = existing.getAttribute('data-c2-identity');
  if (!current || current === desired) return;
  discardIframes();
}

/** resetStaleState (:482-498). */
function resetStaleState() {
  if (iframe && !isIframeAttached(iframe)) iframe = null;
  if (preloadIframe && !isIframeAttached(preloadIframe)) preloadIframe = null;
  if (!iframe && !preloadIframe) {
    isReady = false;
    configurePromise = null;
    configureResolve = null;
    if (configureTimeout) {
      clearTimeout(configureTimeout);
      configureTimeout = null;
    }
  }
}

/** loadFeeds (:500-560): shows the preloaded iframe and asks it to load, or creates the feed iframe. */
function loadFeeds(userConfig?: Connect2FeedUserConfig) {
  if (userConfig) void configure(userConfig);
  hasEmittedComplete = false;
  resetStaleState();
  discardForFeedIdChange();
  discardForIdentityChange();
  if (!config.baseUrl) {
    console.error('Connect2Feed: baseUrl is required');
    return;
  }
  const doLoad = () => {
    const preload = preloadIframe;
    if (isIframeAttached(preload)) {
      preload.style.width = config.width;
      preload.style.height = config.height;
      preload.style.position = '';
      preload.style.opacity = '';
      preload.style.pointerEvents = '';
      preload.id = 'connect2-feeds-iframe';
      preload.removeAttribute('aria-hidden');
      const parent = preload.parentNode;
      if (parent)
        for (const child of Array.from(parent.childNodes).reverse()) if (child !== preload) parent.removeChild(child);
      iframe = preload;
      preloadIframe = null;
      const sendFeedsLoad = () => {
        iframe?.contentWindow?.postMessage({ type: 'feeds:load' }, baseUrl());
      };
      if (configurePromise) void configurePromise.then(sendFeedsLoad);
      else sendFeedsLoad();
    } else {
      preloadIframe = null;
      createIframe();
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', doLoad);
  else doLoad();
}

/** relayItemMessage (:562-587). */
function relayItemMessage(data: FeedMessage) {
  switch (data.type) {
    case 'feeds:loaded':
      config.onFeedsLoaded?.(data);
      break;
    case 'feeds:error':
      config.onError?.(data);
      break;
    case 'feed:click':
      config.onFeedClick?.(data);
      break;
    case 'feed:share':
      config.onShare?.(data);
      break;
    case 'feed:add-to-calendar':
      config.onAddToCalendar?.(data);
      break;
    case 'feed:filter-cleared':
      config.onFilterCleared?.(data);
      break;
    case 'feed:download':
      if (config.onDownload) config.onDownload(data);
      else if (data.url) window.open(data.url, '_blank');
      break;
  }
}

/** sendTokenToItemIframe (:712-732). */
function sendTokenToItemIframe(feedId: string, token: string) {
  const target = itemIframes[feedId]?.contentWindow;
  if (!target) return;
  target.postMessage(authMessage('auth:token', token), baseUrl());
  if (config.customTheme) target.postMessage(themeMessage(), baseUrl());
}

/** injectItemToken (:589-608). */
function injectItemToken(feedId: string) {
  if (config.idToken) {
    sendTokenToItemIframe(feedId, config.idToken);
    return;
  }
  if (typeof config.getIdToken === 'function') {
    const result = config.getIdToken();
    if (result instanceof Promise) {
      void result.then((token) => {
        if (token && itemIframes[feedId]) sendTokenToItemIframe(feedId, token);
      });
      return;
    }
    if (result && itemIframes[feedId]) sendTokenToItemIframe(feedId, result);
  }
}

/** attachItemHandler (:610-644): one message listener per feed item iframe. */
function attachItemHandler(feedId: string, injectTokenOnReady: boolean) {
  const previous = itemHandlers[feedId];
  if (previous) window.removeEventListener('message', previous);
  let hasEmittedItemComplete = false;
  const handler = (event: MessageEvent) => {
    if (event.origin !== config.baseUrl) return;
    const itemIframe = itemIframes[feedId];
    if (!itemIframe || event.source !== itemIframe.contentWindow) return;
    const data = (event.data ?? {}) as FeedMessage;
    if (data.type === 'embed:ready') {
      if (injectTokenOnReady) injectItemToken(feedId);
      return;
    }
    if (data.type === 'embed:complete') {
      if (data.total === 0) itemIframe.style.height = '0px';
      if (!hasEmittedItemComplete && config.onComplete) {
        hasEmittedItemComplete = true;
        config.onComplete(data);
      }
      return;
    }
    relayItemMessage(data);
  };
  itemHandlers[feedId] = handler;
  window.addEventListener('message', handler);
}

/** openFeedItem (:646-710): one feed item in its own iframe (or the preloaded one for the configured feedId). */
function openFeedItem(
  feedId: string,
  containerId: string,
  options?: { hideActions?: boolean; width?: string; height?: string },
): HTMLIFrameElement | null {
  if (!config.baseUrl || !feedId) return null;
  const container = containerId ? document.getElementById(containerId) : null;
  if (!container) return null;
  const itemWidth = options?.width || '100%';
  const itemHeight = options?.height || '100%';
  if (itemIframes[feedId]) closeFeedItem(feedId);
  const preload = preloadIframe;
  if (!options?.hideActions && isIframeAttached(preload) && config.feedId === feedId) {
    preload.style.width = itemWidth;
    preload.style.height = itemHeight;
    preload.style.position = '';
    preload.style.opacity = '';
    preload.style.pointerEvents = '';
    preload.id = 'connect2-feed-item-' + feedId;
    preload.removeAttribute('aria-hidden');
    container.innerHTML = '';
    container.appendChild(preload);
    itemIframes[feedId] = preload;
    preloadIframe = null;
    attachItemHandler(feedId, false);
    const sendFeedsLoad = () => {
      itemIframes[feedId]?.contentWindow?.postMessage({ type: 'feeds:load' }, baseUrl());
    };
    if (configurePromise) void configurePromise.then(sendFeedsLoad);
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
  itemIframes[feedId] = itemIframe;
  attachItemHandler(feedId, true);
  return itemIframe;
}

/** closeFeedItem (:734-744). */
function closeFeedItem(feedId: string) {
  const handler = itemHandlers[feedId];
  if (handler) {
    window.removeEventListener('message', handler);
    Reflect.deleteProperty(itemHandlers, feedId);
  }
  itemIframes[feedId]?.parentNode?.removeChild(itemIframes[feedId]);
  Reflect.deleteProperty(itemIframes, feedId);
}

/** destroy (:746-778). The configuration itself is kept, as in the original. */
function destroy() {
  window.removeEventListener('message', handleMessage);
  iframe?.parentNode?.removeChild(iframe);
  preloadIframe?.parentNode?.removeChild(preloadIframe);
  if (configureTimeout) {
    clearTimeout(configureTimeout);
    configureTimeout = null;
  }
  for (const feedId of Object.keys(itemIframes)) closeFeedItem(feedId);
  iframe = null;
  preloadIframe = null;
  isReady = false;
  isConfigured = false;
  pendingToken = null;
  hasEmittedComplete = false;
  itemIframes = {};
  itemHandlers = {};
  configurePromise = null;
  configureResolve = null;
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
  isReady: () => isReady,
  isConfigured: () => isConfigured,
  getConfig: (): Connect2FeedConfig => ({ ...config }),
};

/** Tests only: destroy, then forget the configuration (the SDK keeps it for the page's life). */
export function resetConnect2Feed() {
  destroy();
  config = defaults();
}
