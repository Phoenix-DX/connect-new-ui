import { describe, expect, it } from 'vitest';
import { PING_URL } from '@/platform/feedback/networkDetection';
import {
  NETWORK_PING_PATH,
  isNetworkPing,
  withoutNeverPrecached,
  isAppNavigation,
  isCacheableAssetResponse,
  isFont,
  isMockFeedPage,
  isNeverCached,
  isOriginalImage,
  isSignedUrl,
  offlinePageFor,
} from './swRoutes';

const ORIGIN = 'https://connect.example.org';
const url = (path: string) => new URL(path, ORIGIN);

describe('service worker routes (caching table 3a)', () => {
  it('never caches API calls, BFF, the sign-in callback, the network ping, signed URLs or other origins', () => {
    expect(isNeverCached(url('/api/UBTConnect/ActionSync_Info_GetMain'), 'POST', ORIGIN)).toBe(true);
    expect(isNeverCached(url('/api/UBTConnect/Anything'), 'GET', ORIGIN)).toBe(true);
    expect(isNeverCached(url('/bff/login'), 'GET', ORIGIN)).toBe(true);
    expect(isNeverCached(url('/UBT_AppManager/Callback?code=x'), 'GET', ORIGIN)).toBe(true);
    expect(isNeverCached(url('/UBTConnect/status/network-ping.txt'), 'GET', ORIGIN)).toBe(true);
    expect(isNeverCached(url('/os-assets/UBTConnect/img/a.png?sig=abc&se=2026'), 'GET', ORIGIN)).toBe(true);
    expect(isNeverCached(new URL('https://cms.example.net/embed/feeds'), 'GET', ORIGIN)).toBe(true);
    expect(isNeverCached(url('/UBTConnect/img/UBTConnect.AppLogo.192.png'), 'GET', ORIGIN)).toBe(false);
  });

  it('recognises signed URLs by their signature parameters', () => {
    expect(isSignedUrl(new URL('https://photos.example.net/p.jpg?sv=2024&Sig=x'))).toBe(true);
    expect(isSignedUrl(new URL('https://photos.example.net/p.jpg?X-Amz-Signature=x'))).toBe(true);
    expect(isSignedUrl(url('/os-assets/UBTConnect/img/p.jpg?v=3'))).toBe(false);
  });

  it('answers screen navigations under /UBTConnect/ and the site root, not files or auth routes', () => {
    expect(isAppNavigation(url('/UBTConnect/'), 'GET', ORIGIN)).toBe(true);
    expect(isAppNavigation(url('/UBTConnect'), 'GET', ORIGIN)).toBe(true);
    expect(isAppNavigation(url('/UBTConnect/HomeFeed?mock=empty'), 'GET', ORIGIN)).toBe(true);
    expect(isAppNavigation(url('/'), 'GET', ORIGIN)).toBe(true);
    expect(isAppNavigation(url('/UBTConnect/img/UBTConnect.AppLogo.png'), 'GET', ORIGIN)).toBe(false);
    expect(isAppNavigation(url('/UBT_AppManager/Callback'), 'GET', ORIGIN)).toBe(false);
    expect(isAppNavigation(url('/bff/login'), 'GET', ORIGIN)).toBe(false);
    expect(isAppNavigation(url('/api/UBTConnect/X'), 'POST', ORIGIN)).toBe(false);
    expect(isAppNavigation(url('/elsewhere/page'), 'GET', ORIGIN)).toBe(false);
    expect(isAppNavigation(new URL('https://other.example.net/UBTConnect/HomeFeed'), 'GET', ORIGIN)).toBe(false);
  });

  it('serves the demo mock Feed CMS page offline for the list and every item', () => {
    expect(isMockFeedPage(url('/embed/feeds'), ORIGIN)).toBe(true);
    expect(isMockFeedPage(url('/embed/feeds/item/mock-feed-item-2'), ORIGIN)).toBe(true);
    expect(isMockFeedPage(url('/embed/feedsx'), ORIGIN)).toBe(false);
    expect(isMockFeedPage(new URL('https://cms.example.net/embed/feeds'), ORIGIN)).toBe(false);
    expect(isAppNavigation(url('/embed/feeds?theme=light'), 'GET', ORIGIN)).toBe(true);
    expect(offlinePageFor(url('/embed/feeds/item/mock-feed-item-2'), ORIGIN)).toBe('/embed/feeds/index.html');
    expect(offlinePageFor(url('/UBTConnect/OrbitEventDetail'), ORIGIN)).toBe('/index.html');
  });

  it('caches original images and fonts of this origin only', () => {
    expect(isOriginalImage(url('/UBTConnect/img/UBTConnectLibrary.Pin_Member.svg'), 'GET', ORIGIN)).toBe(true);
    expect(isOriginalImage(url('/UBT_CW/img/UBT_CW.logo_assemble.svg'), 'GET', ORIGIN)).toBe(true);
    expect(isOriginalImage(url('/os-assets/UBTConnect/img/Connect2_LegacyShared.LDM.svg'), 'GET', ORIGIN)).toBe(true);
    expect(isOriginalImage(url('/UBTConnect/css/_Basic.css'), 'GET', ORIGIN)).toBe(false);
    expect(isOriginalImage(new URL('https://cdn.example.net/UBTConnect/img/a.png'), 'GET', ORIGIN)).toBe(false);
    expect(isFont(url('/UBTConnect/connect.eot'), 'GET', ORIGIN)).toBe(true);
    expect(isFont(url('/assets/Inter-abc.woff2'), 'GET', ORIGIN)).toBe(true);
    expect(isFont(url('/UBTConnect/connect.css'), 'GET', ORIGIN)).toBe(false);
  });

  it('keeps an SPA fallback page out of the image and font caches', () => {
    const html = { ok: true, headers: new Headers({ 'content-type': 'text/html; charset=utf-8' }) };
    const png = { ok: true, headers: new Headers({ 'content-type': 'image/png' }) };
    const missing = { ok: false, headers: new Headers({ 'content-type': 'image/png' }) };
    expect(isCacheableAssetResponse(html)).toBe(false);
    expect(isCacheableAssetResponse(png)).toBe(true);
    expect(isCacheableAssetResponse(missing)).toBe(false);
  });
});

describe('network ping (PWA-2: never from a cache)', () => {
  it('is answered network-only and is the file NetworkDetection pings', () => {
    expect(isNetworkPing(url(`${NETWORK_PING_PATH}?d=1700000000000`), 'GET', ORIGIN)).toBe(true);
    expect(NETWORK_PING_PATH).toBe(PING_URL);
    expect(isNetworkPing(url('/UBTConnect/status/other.txt'), 'GET', ORIGIN)).toBe(false);
    expect(isNetworkPing(new URL('https://elsewhere.test/UBTConnect/status/network-ping.txt'), 'GET', ORIGIN)).toBe(
      false,
    );
    expect(isAppNavigation(url(NETWORK_PING_PATH), 'GET', ORIGIN)).toBe(false);
  });

  it('is dropped from the precache list (the demo precaches every file)', () => {
    const entries = [
      { url: 'index.html', revision: 'a' },
      { url: 'UBTConnect/status/network-ping.txt', revision: 'b' },
      'assets/app.123.js',
    ];
    expect(withoutNeverPrecached(entries)).toEqual([{ url: 'index.html', revision: 'a' }, 'assets/app.123.js']);
  });
});
