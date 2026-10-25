import { baseUrl, sdk } from './connect2FeedState';

/* Connect2Feed embed SDK port (connect2Feed.ts): the feed iframe and its URL, the token identity, the auth and theme
   messages, and the removal of stale or outdated iframes. */

/** buildEmbedUrl (:51-71). */
export function buildEmbedUrl(): string {
  const params: string[] = [];
  params.push('theme=' + encodeURIComponent(sdk.config.theme));
  params.push('limit=' + encodeURIComponent(sdk.config.limit.toString()));
  if (sdk.config.hideActions) params.push('hideActions=true');
  if (sdk.config.b2cTenants) params.push('b2cTenants=' + encodeURIComponent(sdk.config.b2cTenants));
  if (sdk.config.b2cClientIds) params.push('b2cClientIds=' + encodeURIComponent(sdk.config.b2cClientIds));
  if (sdk.config.b2cPolicy) params.push('b2cPolicy=' + encodeURIComponent(sdk.config.b2cPolicy));
  if (sdk.config.feedId) params.push('feedId=' + encodeURIComponent(sdk.config.feedId));
  return baseUrl() + '/embed/feeds?' + params.join('&');
}

/** addPreconnect (:73-81). */
export function addPreconnect() {
  if (!sdk.config.baseUrl) return;
  if (document.querySelector('link[rel="preconnect"][href="' + sdk.config.baseUrl + '"]')) return;
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = sdk.config.baseUrl;
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
export function markIdentity(el: HTMLElement) {
  const identity = tokenIdentity(sdk.config.idToken);
  if (identity) el.setAttribute('data-c2-identity', identity);
}

/** createIframe (:108-131). */
export function createIframe(): HTMLIFrameElement | null {
  const container = document.getElementById(sdk.config.containerId);
  if (!container) {
    console.error('Connect2Feed: Container element "' + sdk.config.containerId + '" not found');
    return null;
  }
  sdk.hasEmittedComplete = false;
  const el = document.createElement('iframe');
  sdk.iframe = el;
  el.id = 'connect2-feeds-iframe';
  markIdentity(el);
  el.src = buildEmbedUrl();
  el.style.width = sdk.config.width;
  el.style.height = sdk.config.height;
  el.style.border = 'none';
  el.setAttribute('title', 'Connect2 News Feed');
  el.setAttribute('loading', 'eager');
  container.innerHTML = '';
  container.appendChild(el);
  return el;
}

/** The auth message (:139-145, :202-211, :340-346, :716-722). */
export function authMessage(type: 'auth:token' | 'auth:refresh', token: string) {
  const message: Record<string, string> = { type, token };
  if (sdk.config.b2cTenants) message.b2cTenants = sdk.config.b2cTenants;
  if (sdk.config.b2cClientIds) message.b2cClientIds = sdk.config.b2cClientIds;
  if (sdk.config.b2cPolicy) message.b2cPolicy = sdk.config.b2cPolicy;
  return message;
}

export const themeMessage = () => ({
  type: 'theme:update',
  mode: sdk.config.customTheme?.mode,
  variables: sdk.config.customTheme?.variables,
});

/** sendToken (:133-147): kept until the iframe exists. */
export function sendToken(token: string) {
  if (!sdk.iframe?.contentWindow) {
    sdk.pendingToken = token;
    return;
  }
  sdk.iframe.contentWindow.postMessage(authMessage('auth:token', token), baseUrl());
}

/** refreshToken (:149-160). */
export function refreshToken(token: string) {
  if (!sdk.iframe?.contentWindow) return;
  sdk.iframe.contentWindow.postMessage(authMessage('auth:refresh', token), baseUrl());
}

/** setTheme (:162-170). */
export function setTheme(options: { mode?: string; variables?: Record<string, string> }) {
  if (!sdk.iframe?.contentWindow) return;
  const message: Record<string, unknown> = { type: 'theme:update' };
  if (options.mode) message.mode = options.mode;
  if (options.variables) message.variables = options.variables;
  sdk.iframe.contentWindow.postMessage(message, baseUrl());
}

/** isIframeAttached (:419-421). */
export const isIframeAttached = (el: HTMLElement | null): el is HTMLElement =>
  !!el && !!el.parentNode && document.contains(el);

/** iframeFeedId (:423-427). */
function iframeFeedId(el: HTMLIFrameElement) {
  const match = /[?&]feedId=([^&]*)/.exec(el.src);
  return match ? decodeURIComponent(match[1] ?? '') : null;
}

/** Drops both iframes and the pending configure (:435-449, :465-479). */
function discardIframes() {
  sdk.preloadIframe?.parentNode?.removeChild(sdk.preloadIframe);
  sdk.iframe?.parentNode?.removeChild(sdk.iframe);
  sdk.preloadIframe = null;
  sdk.iframe = null;
  sdk.isReady = false;
  sdk.configurePromise = null;
  sdk.configureResolve = null;
  if (sdk.configureTimeout) {
    clearTimeout(sdk.configureTimeout);
    sdk.configureTimeout = null;
  }
}

/** discardForFeedIdChange (:429-450). */
export function discardForFeedIdChange() {
  const existing = sdk.preloadIframe ?? sdk.iframe;
  if (!existing) return;
  if (iframeFeedId(existing) === (sdk.config.feedId || null)) return;
  discardIframes();
}

/** discardForIdentityChange (:452-480). */
export function discardForIdentityChange() {
  const existing = sdk.preloadIframe ?? sdk.iframe;
  if (!existing) return;
  const desired = tokenIdentity(sdk.config.idToken);
  if (!desired) return;
  const current = existing.getAttribute('data-c2-identity');
  if (!current || current === desired) return;
  discardIframes();
}

/** resetStaleState (:482-498). */
export function resetStaleState() {
  if (sdk.iframe && !isIframeAttached(sdk.iframe)) sdk.iframe = null;
  if (sdk.preloadIframe && !isIframeAttached(sdk.preloadIframe)) sdk.preloadIframe = null;
  if (!sdk.iframe && !sdk.preloadIframe) {
    sdk.isReady = false;
    sdk.configurePromise = null;
    sdk.configureResolve = null;
    if (sdk.configureTimeout) {
      clearTimeout(sdk.configureTimeout);
      sdk.configureTimeout = null;
    }
  }
}
