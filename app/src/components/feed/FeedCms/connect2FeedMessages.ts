import { baseUrl, sdk, type FeedMessage } from './connect2FeedState';
import { authMessage, themeMessage } from './connect2FeedIframe';

/* Connect2Feed embed SDK port (connect2Feed.ts): the messages of the feed iframe. */

/** isItemWindow (:172-180). */
function isItemWindow(win: MessageEventSource | null) {
  if (!win) return false;
  return Object.values(sdk.itemIframes).some((el) => el?.contentWindow === win);
}

/** handleMessage (:182-315): the feed iframe's messages, from the CMS origin only. */
export function handleMessage(event: MessageEvent) {
  if (event.origin !== sdk.config.baseUrl) return;
  if (isItemWindow(event.source)) return;
  const data = (event.data ?? {}) as FeedMessage;
  switch (data.type) {
    case 'embed:ready': {
      sdk.isReady = true;
      const targetWindow = event.source as Window | null;
      if (sdk.config.customTheme && targetWindow) targetWindow.postMessage(themeMessage(), baseUrl());
      if (sdk.config.idToken && targetWindow)
        targetWindow.postMessage(authMessage('auth:token', sdk.config.idToken), baseUrl());
      else if (sdk.pendingToken && targetWindow) {
        targetWindow.postMessage(authMessage('auth:token', sdk.pendingToken), baseUrl());
        sdk.pendingToken = null;
      } else if (typeof sdk.config.getIdToken === 'function') {
        Promise.resolve(sdk.config.getIdToken())
          .then((token) => {
            if (token && targetWindow) targetWindow.postMessage(authMessage('auth:token', token), baseUrl());
          })
          .catch((error: unknown) => {
            console.error('Connect2Feed: Failed to get token', error);
            sdk.config.onError?.({
              type: 'token_error',
              message: error instanceof Error ? error.message : String(error),
            });
          });
      }
      sdk.config.onReady?.(data);
      break;
    }
    case 'auth:ready':
      if (sdk.configureTimeout) {
        clearTimeout(sdk.configureTimeout);
        sdk.configureTimeout = null;
      }
      if (sdk.configureResolve) {
        sdk.configureResolve();
        sdk.configureResolve = null;
      }
      break;
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
    case 'embed:complete': {
      if (sdk.iframe) {
        const emptyContainer = document.getElementById(sdk.config.containerId);
        if (data.total === 0) {
          sdk.iframe.style.display = 'none';
          if (emptyContainer) {
            emptyContainer.style.minHeight = '0px';
            emptyContainer.style.height = '0px';
          }
        } else {
          sdk.iframe.style.display = '';
          sdk.iframe.style.height = sdk.config.height;
          if (emptyContainer) {
            emptyContainer.style.minHeight = '';
            emptyContainer.style.height = '';
          }
        }
      }
      if (!sdk.hasEmittedComplete && sdk.config.onComplete) {
        sdk.hasEmittedComplete = true;
        sdk.config.onComplete(data);
      }
      break;
    }
    case 'feed:download':
      if (sdk.config.onDownload) sdk.config.onDownload(data);
      else if (data.url) window.open(data.url, '_blank');
      break;
  }
}

/** The auth (and theme) of an already loaded iframe on a new configure (:336-369). */
export function resendAuth(target: Window | null) {
  if (target && sdk.config.idToken) target.postMessage(authMessage('auth:token', sdk.config.idToken), baseUrl());
  else if (target && typeof sdk.config.getIdToken === 'function')
    void Promise.resolve(sdk.config.getIdToken()).then((token) => {
      if (token) target.postMessage(authMessage('auth:token', token), baseUrl());
    });
  if (sdk.config.customTheme) target?.postMessage(themeMessage(), baseUrl());
}
