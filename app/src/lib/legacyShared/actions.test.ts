import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { UserException } from '@/legacy/os/os-exceptions';
import { MOCK_USER_ID } from '@/platform/session/mockUser';
import { setSignedInUser } from '@/platform/session/session';
import { freshPage } from '@/test/testSupport';
import {
  addMetaTag,
  getCacheableCountryInfo,
  getCacheableLocality,
  getCacheableUserInfo,
  buildMemberContactsCacheKey,
  flipHouseholdName,
  getCacheableMemberContactList,
  getCacheableTimezoneInfo,
  removeDiacritics,
  checkSupportedBrowserVersion,
  navigateToMaps,
  openExternalURL,
  getBulkSignedPhotosParameters,
  getBulkSignedPhotosURL,
  getCacheableSignedPhotoURL,
  getIOSPlatform,
  iOSMetaTags,
  iOSPreventSwipe,
  inputCounterLimitField,
  inputCounterMaxLength,
  inputCounterOnInitialize,
} from './actions';
import { cacheKeyPart } from '@/api/client/cache';
import { MapNavigationRedirect } from './staticEntities';

const keyOf = (bucket: string, path: string, type: string) =>
  cacheKeyPart(bucket) + cacheKeyPart(path) + cacheKeyPart(type);

describe('Connect2_LegacyShared signed photos', () => {
  it('GetBulkSignedPhotosParameters splits each cache key into Bucket, Path and Type', () => {
    expect(getBulkSignedPhotosParameters([keyOf('b', 'p/q.jpg', 'T')])).toEqual([
      { Bucket: 'b', Path: 'p/q.jpg', Type: 'T' },
    ]);
  });

  it('GetBulkSignedPhotosURL keys each result by its parts, with its error and signed URL', async () => {
    const server = vi.fn(() =>
      Promise.resolve([{ Bucket: 'b', Path: 'p', Type: 'T', SignedURL: 'signed', Error: 'oops' }]),
    );
    await expect(getBulkSignedPhotosURL([keyOf('b', 'p', 'T')], server)).resolves.toEqual([
      { key: keyOf('b', 'p', 'T'), error: 'oops', value: 'signed' },
    ]);
  });

  it('GetCacheableSignedPhotoURL: "" without Bucket, Path or Type; a cached URL once signed; "" for an error', async () => {
    const server = vi.fn((parameters: { Bucket?: string; Path?: string; Type?: string }[]) =>
      Promise.resolve(
        parameters.map((photo) => ({
          ...photo,
          SignedURL: `url-${photo.Path ?? ''}`,
          Error: photo.Path === 'bad' ? 'x' : '',
        })),
      ),
    );
    await expect(getCacheableSignedPhotoURL('', 'p', 'T', server)).resolves.toBe('');
    await expect(getCacheableSignedPhotoURL('cache-b', 'p', '', server)).resolves.toBe('');
    expect(server).not.toHaveBeenCalled();
    await expect(getCacheableSignedPhotoURL('cache-b', 'p', 'T', server)).resolves.toBe('url-p');
    await expect(getCacheableSignedPhotoURL('cache-b', 'p', 'T', server)).resolves.toBe('url-p');
    expect(server).toHaveBeenCalledTimes(1);
    await expect(getCacheableSignedPhotoURL('cache-b', 'bad', 'T', server)).resolves.toBe('');
  });
});

describe('Connect2_LegacyShared iOS actions', () => {
  afterEach(() => {
    document.head.querySelectorAll('meta[name="test-meta"], meta[name="viewport"]').forEach((meta) => {
      meta.remove();
    });
  });

  it('GetIOSPlatform is true for iPhone, iPad and iPod platforms only', () => {
    const platform = vi.spyOn(Navigator.prototype, 'platform', 'get');
    for (const [value, apple] of [
      ['iPhone', true],
      ['iPad', true],
      ['iPod touch', true],
      ['MacIntel', false],
      ['Linux armv8l', false],
    ] as const) {
      platform.mockReturnValue(value);
      expect(getIOSPlatform()).toBe(apple);
    }
  });

  it('AddMetaTag appends a meta tag, then updates the content of the named one', () => {
    addMetaTag('test-meta', 'one');
    addMetaTag('test-meta', 'two');
    const metas = document.head.querySelectorAll('meta[name="test-meta"]');
    expect(metas).toHaveLength(1);
    expect(metas[0]?.getAttribute('content')).toBe('two');
  });

  it('off iOS IOSMetaTags and IOSPreventSwipe do nothing', () => {
    vi.spyOn(Navigator.prototype, 'platform', 'get').mockReturnValue('Win32');
    const root = document.body.appendChild(document.createElement('div'));
    root.id = 'reactContainer';
    iOSMetaTags();
    iOSPreventSwipe();
    const event = new Event('touchstart', { cancelable: true });
    root.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(false);
    expect(document.querySelector('meta[name="viewport"]')).toBeNull();
    root.remove();
  });

  it('IOSPreventSwipe cancels a touch event without pageX, as the original (TouchEvent has none)', () => {
    vi.spyOn(Navigator.prototype, 'platform', 'get').mockReturnValue('iPad');
    const root = document.body.appendChild(document.createElement('div'));
    root.id = 'reactContainer';
    iOSPreventSwipe();
    const event = new Event('touchstart', { cancelable: true });
    root.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    root.remove();
  });
});

/* ---- Wave 8, batch O-A2 ---- */
describe('Connect2_LegacyShared InputCounter', () => {
  it('OnInitialize sets CurrLength to NoteInitialLength only when it is not 0', () => {
    expect(inputCounterOnInitialize(7)).toBe(7);
    expect(inputCounterOnInitialize(0)).toBe(0);
  });

  it('limitField cuts the value to maxlength and returns its length', () => {
    const area = document.createElement('textarea');
    area.setAttribute('maxlength', '4');
    area.value = 'abcdefg';
    expect(inputCounterLimitField(area)).toBe(4);
    expect(area.value).toBe('abcd');
    area.value = 'ab';
    expect(inputCounterLimitField(area)).toBe(2);
    expect(area.value).toBe('ab');
  });

  it('limitField without a maxlength attribute reads it as 0 and empties a non-empty value', () => {
    const input = document.createElement('input');
    input.value = 'abc';
    expect(inputCounterLimitField(input)).toBe(0);
    expect(input.value).toBe('');
  });

  it('OnReady reads parseInt(maxlength); a missing attribute shows 0', () => {
    const input = document.createElement('input');
    input.setAttribute('maxlength', '250');
    expect(inputCounterMaxLength(input)).toBe(250);
    expect(inputCounterMaxLength(document.createElement('input'))).toBe(0);
  });
});

/* ---- Wave 8 O-B1 ---- */
describe('CheckSupportedBrowserVersion / OpenExternalURL / NavigateToMaps (O-B1)', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('CheckSupportedBrowserVersion: Chrome, Safari, Chrome iOS and unknown browsers', () => {
    const chrome = (v: string) => `Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/${v} Mobile Safari/537.36`;
    expect(checkSupportedBrowserVersion(chrome('129.0.6668.70'))).toEqual({
      IsSupported: true,
      IsAndroid: false,
      IsApple: false,
    });
    expect(checkSupportedBrowserVersion(chrome('95.9.1.1')).IsSupported).toBe(false);
    const safari = (v: string) =>
      `Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) Version/${v} Mobile/15E148 Safari/604.1`;
    expect(checkSupportedBrowserVersion(safari('16.6'))).toEqual({
      IsSupported: true,
      IsAndroid: false,
      IsApple: true,
    });
    expect(checkSupportedBrowserVersion(safari('16.5')).IsSupported).toBe(false);
    const crios = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_4 like Mac OS X) CriOS/120.0.6099.119 Mobile/15E148';
    expect(checkSupportedBrowserVersion(crios)).toEqual({ IsSupported: false, IsAndroid: false, IsApple: true });
    expect(
      checkSupportedBrowserVersion('Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0'),
    ).toEqual({
      IsSupported: false,
      IsAndroid: false,
      IsApple: false,
    });
  });

  it('CheckSupportedBrowserVersion with Cordova: native Chrome WebView, IsAndroid', () => {
    vi.stubGlobal('cordova', {});
    expect(checkSupportedBrowserVersion('Mozilla/5.0 (iPhone) AppleWebKit/605.1.15')).toEqual({
      IsSupported: true,
      IsAndroid: true,
      IsApple: false,
    });
  });

  it('OpenExternalURL: _blank, or _self when IsSelf', () => {
    const open = vi.spyOn(window, 'open').mockReturnValue(null);
    openExternalURL('https://meet.example.com/j/1');
    openExternalURL('https://meet.example.com/j/2', true);
    expect(open.mock.calls).toEqual([
      ['https://meet.example.com/j/1', '_blank'],
      ['https://meet.example.com/j/2', '_self'],
    ]);
  });

  it('NavigateToMaps: offline message, iPhone browser, other browsers', () => {
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false);
    expect(navigateToMaps()).toBe(0);
    vi.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(true);
    vi.spyOn(window.navigator, 'platform', 'get').mockReturnValue('iPhone');
    expect(navigateToMaps()).toBe(MapNavigationRedirect.IPhoneBrowser);
    vi.spyOn(window.navigator, 'platform', 'get').mockReturnValue('Win32');
    expect(navigateToMaps()).toBe(MapNavigationRedirect.AndroidBrowser);
  });
});

describe('RemoveDiacritics (controller.js:6706-6777, JS :6778-6782)', () => {
  it('drops the combining marks of the NFD form and keeps everything else', () => {
    expect(removeDiacritics('Córdoba Neuquén Güemes São Paulo Ñandú')).toBe('Cordoba Neuquen Guemes Sao Paulo Nandu');
    expect(removeDiacritics('ÀÉÎÕÜ àéîõü çÇ')).toBe('AEIOU aeiou cC');
    // case, spaces and letters without a decomposition are untouched (ø and ß have none)
    expect(removeDiacritics('  Bahia Blanca ø ß ')).toBe('  Bahia Blanca ø ß ');
    expect(removeDiacritics()).toBe('');
  });
});

describe('GetCacheableCountryInfo / GetCacheableLocality / GetCacheableUserInfo (O-B3)', () => {
  const calls = (action: string) => (window.__osCalls ?? []).filter((c) => c.action === action);
  const objectNotFound = (message: string) => ({
    message,
    specificType: 'Connect2_LegacyShared.ObjectNotFound',
    exception: 'UserException',
  });

  beforeEach(() => {
    freshPage();
  });

  it('CountryCode "" raises ObjectNotFound "Invalid country id" without a server call', async () => {
    const error = getCacheableCountryInfo('');
    await expect(error).rejects.toBeInstanceOf(UserException);
    await expect(error).rejects.toMatchObject(objectNotFound('Invalid country id'));
    expect(calls('ActionGetUserLocalitiesForCountryCodeWithGPS')).toEqual([]);
  });

  it('LocalityId 0 (NullIdentifier) raises ObjectNotFound "Invalid locality id" without a server call', async () => {
    await expect(getCacheableLocality('0')).rejects.toMatchObject(objectNotFound('Invalid locality id'));
    await expect(getCacheableLocality()).rejects.toBeInstanceOf(UserException);
    expect(calls('ActionGetLocalityInformation')).toEqual([]);
  });

  it('signed out: GetCacheableUserInfo raises ObjectNotFound "User is not logged in"', async () => {
    await expect(getCacheableUserInfo()).rejects.toMatchObject(objectNotFound('User is not logged in'));
  });

  it('a found country or locality is read once, then served from the memory cache', async () => {
    const first = await getCacheableCountryInfo('AR');
    expect(first.map((l) => l.Name)).toEqual(['Bahia Blanca', 'Monte Hermoso', 'Córdoba', 'Neuquén']);
    expect(await getCacheableCountryInfo('AR')).toEqual(first);
    expect(calls('ActionGetUserLocalitiesForCountryCodeWithGPS')).toHaveLength(1);

    expect((await getCacheableLocality('254')).Name).toBe('Córdoba');
    expect((await getCacheableLocality('254')).LocalitySubdivisionsList.List).toHaveLength(2);
    expect(calls('ActionGetLocalityInformation')).toHaveLength(1);

    setSignedInUser(MOCK_USER_ID);
    await getCacheableUserInfo();
    await getCacheableUserInfo();
    expect(calls('ActionGetUserInformation')).toHaveLength(1);
  });
});

describe('GetCacheableMemberContactList / GetCacheableTimezoneInfo (CR-MilestoneDetail-2)', () => {
  const calls = (action: string) => (window.__osCalls ?? []).filter((c) => c.action === action);

  beforeEach(() => {
    freshPage();
  });

  it('BuildMemberContactsCacheKey sorts the ids as numbers and joins them with ","', () => {
    expect(buildMemberContactsCacheKey(['880201', '99', '880101'])).toEqual('99,880101,880201');
    expect(buildMemberContactsCacheKey([])).toEqual('');
  });

  it('a hosted guest has one contact (mobile, locality, time zone), read once and then from the memory cache', async () => {
    const [contact] = await getCacheableMemberContactList(['880101']);
    expect(contact).toMatchObject({
      MobilePhoneNumber: '+54 336 555 0141',
      LocalityName: 'San Nicolás',
      CountryName: 'Argentina',
      Timezone: { TimezoneLabel: 'ART', OffsetSeconds: '-10800' },
    });
    await getCacheableMemberContactList(['880101']);
    expect(calls('ActionGetMemberContactByCacheKey')).toHaveLength(1);
    expect(await getCacheableMemberContactList(['1'])).toEqual([]);
  });

  it('GetCacheableTimezoneInfo: LocalityId 0 raises ObjectNotFound "Invalid country id"; CountryName stays ""', async () => {
    await expect(getCacheableTimezoneInfo('0')).rejects.toMatchObject({
      message: 'Invalid country id',
      specificType: 'Connect2_LegacyShared.ObjectNotFound',
    });
    expect(await getCacheableTimezoneInfo('252')).toEqual({
      TimezoneLabel: 'America/Argentina/Buenos_Aires',
      OffsetSeconds: '-10800',
      TimezoneAbreviation: 'ART',
      CountryName: '',
    });
  });

  it('FlipHouseholdName (CR-LDM_EventDetail_V2-1)', () => {
    expect(flipHouseholdName('Vitale, Julián & Ana')).toEqual('Julián & Ana Vitale');
    expect(flipHouseholdName('Vitale, Julián')).toEqual('Julián Vitale');
    expect(flipHouseholdName('Julián Vitale')).toEqual('Julián Vitale');
  });
});

/* G2: in OutSystems, ScreenBlock_BookmarkGroup and AddBookmarkToCache / RemoveBookmarkFromCache use the same
   GetCachedMyBookmarks / PutCachedMyBookmarks with one structure, Connect2_MyBookmarks_IS.BookmarkItem. */
