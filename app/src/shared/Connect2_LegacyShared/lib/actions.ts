/* Client actions of Connect2_LegacyShared, ported 1:1 from migration/runtime-sources/Connect2_LegacyShared.controller.js
   (fetched read-only from TST, 2026-10-15; cited below as controller.js:<line>). */
import { callAction } from '@/api/client/callAction';
import { osList, wireList } from '@/legacy/os/os-wire';
import {
  cacheKeyPart,
  getCacheKeyParts,
  getCacheableObject,
  getCacheableObjectInBulk,
  peekCacheableObject,
  putCacheableObject,
  type BulkCacheResult,
} from '@/platform/storage/memoryCache';
import { log } from '@/platform/log/log';
import { UserException } from '@/legacy/os/os-exceptions';
import { isSignedIn } from '@/platform/session/session';
import { PLATFORM_MESSAGE_TYPE, showFeedbackMessage } from '@/platform/feedback/feedbackStore';
import { checkAppLauncherPlugin, getOperatingSystem } from '@/shared/UBTConnect_Utils/lib/actions';
import { Mobile_OperatingSystem } from '@/shared/UBTConnect_Utils/lib/staticEntities';
import { DirectoryCacheType, MapNavigationRedirect } from './staticEntities';
import type {
  BookmarkItem,
  BulkSignedPhotoParameters,
  BulkSignedPhotoResult,
  CacheableLocalityInformation,
  CacheableSubdivisionInformation,
  CacheableSubdivisionInformationTextText,
  CountryWithMapPosition,
  LocalityResultItemWithGPS,
  MemberContactWithTimezone,
  Timezone,
  Users_Current_GETResponse,
} from './structures';

/* ---- Task Y: signed photos (GetCacheableSignedPhotoURL) ---- */

/** Server action GetSignedPhotosInBulk (controller.js:7865-7880, `screenservices/Connect2_LegacyShared/
    ActionGetSignedPhotosInBulk`): BulkSignedPhotoParameters list in, Results out. */
export type GetSignedPhotosInBulk = (parameters: BulkSignedPhotoParameters[]) => Promise<BulkSignedPhotoResult[]>;

/** The GetSignedPhotosInBulk call of the app: contract operation `Connect2_LegacyShared/ActionGetSignedPhotosInBulk`
    (added through migration/contract/extra-actions.json, CR-W3Y-1), input `Parameters` as compiled (controller.js:7868-7871). */
export const getSignedPhotosInBulk: GetSignedPhotosInBulk = async (parameters) => {
  const out = await callAction('Connect2_LegacyShared', 'ActionGetSignedPhotosInBulk', {
    Parameters: wireList(parameters.map(({ Bucket = '', Path = '', Type = '' }) => ({ Bucket, Path, Type }))),
  });
  return osList(out.Results);
};

/** TimeToLive and Timeout locals of GetCacheableSignedPhotoURL (controller.js:4025-4064). */
const SIGNED_PHOTO_TTL_SECONDS = 300;
const SIGNED_PHOTO_TIMEOUT = 10;
/** The bulk-size input of GetCacheableObjectInBulk is left at its default, LongInteger 0 (controller.js:3985). How
    MemoryClientCache reads 0 is not in the sources; the shell cache then asks for each key at once. */
const SIGNED_PHOTO_BULK_SIZE = 0;

/** GetBulkSignedPhotosParameters (controller.js:2901-2952): each cache key split back (GetCacheKeyParts) into
    Bucket, Path and Type. */
export function getBulkSignedPhotosParameters(cacheKeys: string[]): BulkSignedPhotoParameters[] {
  return cacheKeys.map((cacheKey) => {
    const [Bucket, Path, Type] = getCacheKeyParts(cacheKey);
    return { Bucket, Path, Type };
  });
}

/** GetBulkSignedPhotosURL (controller.js:2983-3035), the bulk callback of the photo cache: GetSignedPhotosInBulk for
    the keys, each result as (CacheKey = CacheKeyPart(Bucket) + CacheKeyPart(Path) + CacheKeyPart(Type), Error,
    Value = SignedURL). */
export async function getBulkSignedPhotosURL(
  cacheKeys: string[],
  server: GetSignedPhotosInBulk,
): Promise<BulkCacheResult<string>[]> {
  const results = await server(getBulkSignedPhotosParameters(cacheKeys));
  return results.map((result) => ({
    key: cacheKeyPart(result.Bucket ?? '') + cacheKeyPart(result.Path ?? '') + cacheKeyPart(result.Type ?? ''),
    error: result.Error ?? '',
    value: result.SignedURL ?? '',
  }));
}

/** GetCacheableSignedPhotoURL (controller.js:3947-4115): with Bucket, Path and Type all set, the signed URL from the
    memory cache (type DirectoryCacheType.Photos, key CacheKeyPart(Bucket) + CacheKeyPart(Path) + CacheKeyPart(Type),
    TTL 300 s, timeout 10) whose misses go to GetBulkSignedPhotosURL (Callbacks JS :4109-4113); ResultURL JS
    (:4104-4108) turns a missing object into "". Otherwise "". */
export async function getCacheableSignedPhotoURL(
  bucket: string,
  path: string,
  type: string,
  server: GetSignedPhotosInBulk,
): Promise<string> {
  if (bucket === '' || path === '' || type === '') return '';
  const object = await getCacheableObjectInBulk(
    DirectoryCacheType.Photos,
    cacheKeyPart(bucket) + cacheKeyPart(path) + cacheKeyPart(type),
    SIGNED_PHOTO_TTL_SECONDS,
    SIGNED_PHOTO_TIMEOUT,
    (keys) => getBulkSignedPhotosURL(keys, server),
    SIGNED_PHOTO_BULK_SIZE,
  );
  return object ?? '';
}

/* ---- Task Y: iOS meta tags and swipe (Layout.Layout OnReady) ---- */

/** GetIOSPlatform (controller.js:4885-4958, JS :4945-4958): IsApple when navigator.platform names an iPhone, iPad or
    iPod. */
export function getIOSPlatform(): boolean {
  // eslint-disable-next-line @typescript-eslint/no-deprecated -- the original reads navigator.platform (JS :4947-4951)
  const platform = navigator.platform.toLowerCase();
  return platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod');
}

/** AddMetaTag (controller.js:164-233, JS :218-233): sets the content of the `<meta>` named Name, or appends a new one
    to the head. */
export function addMetaTag(name: string, content: string): void {
  const definedMeta = document.getElementsByTagName('meta').namedItem(name);
  if (!definedMeta) {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.getElementsByTagName('head')[0]?.appendChild(meta);
  } else definedMeta.content = content;
}

/** IOSMetaTags (controller.js:5677-5716): on iOS only, the viewport meta that blocks zoom (content verbatim, line
    break included, :5690). */
export function iOSMetaTags(): void {
  if (getIOSPlatform())
    addMetaTag(
      'viewport',
      'viewport-fit=cover, width=device-width, initial-scale=1.0, \r\nminimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
    );
}

/** IOSPreventSwipe (controller.js:5717-5768, JS :5756-5768): on iOS only, a touchstart listener on #reactContainer
    cancels touches within 20 px of the left or right edge (the swipe-back gesture). Like the original it is added on
    every call and never removed; it reads `pageX` of the event itself (undefined on a TouchEvent: such a touch is
    cancelled too). The original throws when #reactContainer is missing; index.html always has it. */
export function iOSPreventSwipe(): void {
  if (!getIOSPlatform()) return;
  const edge = 20;
  document.getElementById('reactContainer')?.addEventListener('touchstart', (event) => {
    const { pageX } = event as Event & { pageX?: number };
    // is not near edge of view, exit
    if (pageX !== undefined && pageX > edge && pageX < window.innerWidth - edge) return;
    // prevent swipe to navigate back gesture
    event.preventDefault();
  });
}

/* ---- Wave 8, batch O-A2 ---- */

/** InputCounter.OnInitialize (migration/blocks/sources/Connect2_LegacyShared.Reusable.InputCounter.mvc.js:291-319):
    only when NoteInitialLength is not 0 does it run SetCurrLength (:207-233, `CurrLength = Length`); CurrLength starts
    at 0 (model :15-17). Returns the CurrLength after the action. */
export function inputCounterOnInitialize(noteInitialLength: number): number {
  return noteInitialLength !== 0 ? noteInitialLength : 0;
}

/** The `input` listener of InputCounter's LimitMaxLenth JS node (InputCounter.mvc.js:398-411, `limitField`): a value
    longer than the `maxlength` attribute is cut to it (`substr(0, maxlength)`), then SetCurrLength gets the value's
    length. A missing attribute reads as 0 (the JS compares/cuts with `null`). Returns the new CurrLength. */
export function inputCounterLimitField(target: HTMLInputElement | HTMLTextAreaElement): number {
  const maxlength = Number(target.getAttribute('maxlength'));
  if (target.value.length > maxlength) target.value = target.value.substring(0, maxlength);
  return target.value.length;
}

/** InputCounter.OnReady (InputCounter.mvc.js:244-288, LimitMaxLenth JS :398-411): `parseInt` of the input's `maxlength`
    attribute becomes MaxLength. parseInt of a missing attribute is NaN in the JS node; how the OutSystems Integer
    conversion of NaN reads is not in the sources, so it is shown as 0 (same choice as UBTConnectLibrary's InputCounter). */
export function inputCounterMaxLength(input: Element): number {
  const maxLen = Number.parseInt(input.getAttribute('maxlength') ?? '', 10);
  return Number.isNaN(maxLen) ? 0 : maxLen;
}

/* ---- Wave 8 O-B1 (Assemble virtual meeting and address links) ---- */

/** CommonPlugin IsCordovaDefined (runtime-sources/CommonPlugin.controller.js:508-512): `typeof(cordova) !==
    "undefined"`; False in the clone (no Cordova). */
function isCordovaDefined(): boolean {
  return typeof (window as Window & { cordova?: unknown }).cordova !== 'undefined';
}

/** CheckSupportedBrowserVersion outputs (controller.js:1291-1314, all False by default). */
export interface CheckSupportedBrowserVersionResult {
  IsSupported: boolean;
  IsAndroid: boolean;
  IsApple: boolean;
}

/* Locals ChromeMajor 96, ChromeMinor 0, SafariMajor 16, SafariMinor 6 (controller.js:1158-1190). */
const CHROME_MAJOR = 96;
const CHROME_MINOR = 0;
const SAFARI_MAJOR = 16;
const SAFARI_MINOR = 6;

/** Major > RefMajor or Major = RefMajor and Minor >= RefMinor (the IsSupported assigns, controller.js:1065-1150). */
const atLeast = (major: number, minor: number, refMajor: number, refMinor: number) =>
  major > refMajor || (major === refMajor && minor >= refMinor);

/** CheckSupportedBrowserVersion (controller.js:1032-1157, JS nodes :1326-1388): with Cordova, NativeChromeVersion
    (IsSupported = not Chrome or Chrome >= 96.0; IsAndroid = True); else ChromeVersion (Chrome >= 96.0), else
    SafariVersion (`Version/x.y … Safari/` >= 16.6; IsApple), else ChromeIOS (`CriOS/` with `OS x_y` >= 16.6; IsApple).
    A JS node that finds no match leaves Major / Minor at 0. */
export function checkSupportedBrowserVersion(
  userAgent: string = window.navigator.userAgent,
): CheckSupportedBrowserVersionResult {
  const out: CheckSupportedBrowserVersionResult = { IsSupported: false, IsAndroid: false, IsApple: false };
  const chrome = /Chrome\/(\d+)\.(\d+)\.(\d+)\.(\d+)/.exec(userAgent);
  if (isCordovaDefined()) {
    const major = chrome ? Number(chrome[1]) : 0;
    const minor = chrome ? Number(chrome[2]) : 0;
    out.IsSupported = !chrome || major > CHROME_MAJOR || (major === CHROME_MAJOR && minor >= CHROME_MINOR);
    out.IsAndroid = true;
    return out;
  }
  if (chrome) {
    out.IsSupported = atLeast(Number(chrome[1]), Number(chrome[2]), CHROME_MAJOR, CHROME_MINOR);
    return out;
  }
  const safari = /Version\/(\d+)\.(\d+).* Safari\//.exec(userAgent);
  if (safari) {
    out.IsSupported = atLeast(Number(safari[1]), Number(safari[2]), SAFARI_MAJOR, SAFARI_MINOR);
    out.IsApple = true;
    return out;
  }
  const chromeIOS = /CriOS\//.test(userAgent) ? /OS (\d+)_(\d+)/.exec(userAgent) : null;
  if (chromeIOS) {
    out.IsSupported = atLeast(Number(chromeIOS[1]), Number(chromeIOS[2]), SAFARI_MAJOR, SAFARI_MINOR);
    out.IsApple = true;
  }
  return out;
}

/** OpenExternalURL(URL, IsSelf = False) (controller.js:6266-6345): InAppBrowserEvents CheckInAppBrowserPlugin, then
    Open(URL, System) when the Cordova InAppBrowser plugin is there (not in the clone: no Cordova, so that branch is
    not ported), else OpenInNewWindow (:6337-6345): `window.open(URL, IsSelf ? "_self" : "_blank")`. */
export function openExternalURL(url: string, isSelf = false): void {
  window.open(url, isSelf ? '_self' : '_blank');
}

/** NavigateToMaps (controller.js:6109-6246, JS GetPlatformIOS :6247-6264): offline (OutSystemsUI GetNetworkStatus,
    runtime-sources/OutSystemsUI_2_23.controller.js:13005-13090) → Info message "Please check your network connection
    and try again" and the null id 0; Android (CommonPlugin GetOperatingSystem) → AndroidNative when the app launcher
    plugin is there, else AndroidBrowser; iPhone / iPad / iPod (`navigator.platform`) → IPhoneBrowser; anything else
    logs "User accessed Map with: <platform> <appCodeName>" (module Directory_MUI) and gives AndroidBrowser. */
export function navigateToMaps(): number {
  if (!window.navigator.onLine) {
    showFeedbackMessage('Please check your network connection and try again', PLATFORM_MESSAGE_TYPE.info);
    return 0;
  }
  if (getOperatingSystem() === Mobile_OperatingSystem.Android)
    return checkAppLauncherPlugin() ? MapNavigationRedirect.AndroidNative : MapNavigationRedirect.AndroidBrowser;
  // eslint-disable-next-line @typescript-eslint/no-deprecated -- the original reads navigator.platform (JS :6249-6255)
  const platform = window.navigator.platform.toLowerCase();
  const isApple = platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod');
  if (isApple) return MapNavigationRedirect.IPhoneBrowser;
  // eslint-disable-next-line @typescript-eslint/no-deprecated -- the original logs navigator.appCodeName (JS :6250)
  log.info(`User accessed Map with: ${platform} ${window.navigator.appCodeName}`, { module: 'Directory_MUI' });
  return MapNavigationRedirect.AndroidBrowser;
}

/* ---- Wave 8 O-B3 (Assemble filters): RemoveDiacritics and the cacheable country, locality and user ---- */

/** RemoveDiacritics(Text) (controller.js:6706-6777, JS :6778-6782): Text.normalize('NFD') without \p{Diacritic}. */
export function removeDiacritics(text = ''): string {
  return text.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

/** ObjectNotFound (Connect2_LegacyShared user exception), raised by the cacheable getters below. */
const objectNotFound = (message: string) => new UserException(message, 'Connect2_LegacyShared.ObjectNotFound');

/** GetCountryInformation(CountryCode) (controller.js:4716-4772): server action GetUserLocalitiesForCountryCodeWithGPS
    (:7940-7960, contract operation `Connect2_LegacyShared/ActionGetUserLocalitiesForCountryCodeWithGPS`, added through
    migration/contract/extra-actions.json in O-B3); LocalitiesList = Results. */
export async function getCountryInformation(countryCode = ''): Promise<LocalityResultItemWithGPS[]> {
  const out = await callAction('Connect2_LegacyShared', 'ActionGetUserLocalitiesForCountryCodeWithGPS', {
    CountryCode: countryCode,
  });
  return osList(out.Results);
}

/** GetCacheableCountryInfo(CountryCode) (controller.js:3142-3275): CountryCode "" raises ObjectNotFound "Invalid country
    id"; otherwise the memory cache (type DirectoryCacheType.Countries, key CountryCode, TTL 1200 s :3242-3249) whose
    miss runs GetCountryInformation (Callbacks JS :3268-3272), AssignFromObject → LocalitiesList (the output read by
    the callers; CacheResult has no reader). */
export async function getCacheableCountryInfo(countryCode = ''): Promise<LocalityResultItemWithGPS[]> {
  if (countryCode === '') throw objectNotFound('Invalid country id');
  return getCacheableObject(DirectoryCacheType.Countries, countryCode, 1200, () => getCountryInformation(countryCode));
}

/** GetLocalityInformation(LocalityId) (controller.js:5124-5170): server action GetLocalityInformation (:7743-7800,
    contract operation `Connect2_LegacyShared/ActionGetLocalityInformation`, O-B3); LocalityInformation =
    CacheableLocalityInformation. Not ported: the Foreach SignedPhotosPreload → PutCachedSignedPhotoURL (no built block
    reads those photos yet; the fictional mock sends none). */
export async function getLocalityInformation(localityId = '0'): Promise<CacheableLocalityInformation> {
  const out = await callAction('Connect2_LegacyShared', 'ActionGetLocalityInformation', { LocalityId: localityId });
  return out.CacheableLocalityInformation;
}

/** GetCacheableLocality(LocalityId) (controller.js:3278-3342): LocalityId 0 raises ObjectNotFound "Invalid locality
    id"; otherwise the memory cache (type DirectoryCacheType.Localities, key LongIntegerToText(LocalityId), TTL 1200 s
    :3343-3360) whose miss runs GetLocalityInformation; AssignFromObject → LocalityInformation. */
export async function getCacheableLocality(localityId = '0'): Promise<CacheableLocalityInformation> {
  if (localityId === '0' || localityId === '') throw objectNotFound('Invalid locality id');
  return getCacheableObject(DirectoryCacheType.Localities, localityId, 1200, () => getLocalityInformation(localityId));
}

/** GetCacheableUserInfo (controller.js:4391-4520): GetUserId() = NullIdentifier raises ObjectNotFound "User is not
    logged in"; otherwise the memory cache (type DirectoryCacheType.User, key "UserInfo", TTL 7200 s :4458-4475) whose
    miss runs GetUserInformation (:5620-5667, server action `Connect2_LegacyShared/ActionGetUserInformation`, O-B3;
    its PutCachedSignedPhotoURL of the member photo is not ported); UserInformation = CacheableUserDetails. */
export async function getCacheableUserInfo(): Promise<Users_Current_GETResponse> {
  if (!isSignedIn()) throw objectNotFound('User is not logged in');
  return getCacheableObject(DirectoryCacheType.User, 'UserInfo', 7200, async () => {
    const out = await callAction('Connect2_LegacyShared', 'ActionGetUserInformation', {});
    return out.UserInformation;
  });
}

/* ---- Assemble routes (Assemble_BrowseByCountry, AssembleEvents): the region's subscribed countries ---- */

/** GetRegionSubscribedCountries(SubscriptionRegionId) (controller.js:5281-5337): server action GetCountriesBySubscription
    (:7724, contract operation `Connect2_LegacyShared/ActionGetCountriesBySubscription`); CountryWithMapPosition =
    Countries. Long Integers and Decimals become numbers (structures.ts CountryWithMapPosition). */
export async function getRegionSubscribedCountries(subscriptionRegionId = ''): Promise<CountryWithMapPosition[]> {
  const out = await callAction('Connect2_LegacyShared', 'ActionGetCountriesBySubscription', {
    SubscriptionRegionId: subscriptionRegionId,
  });
  return osList(out.Countries).map((c) => ({
    Code: c.Code,
    Name: c.Name,
    RegionId: Number(c.RegionId),
    LocalitiesCount: Number(c.LocalitiesCount),
    HouseholdersCount: Number(c.HouseholdersCount),
    MembersCount: Number(c.MembersCount),
    InitialLatitude: Number(c.InitialLatitude),
    InitialLongitude: Number(c.InitialLongitude),
    InitialZoom: c.InitialZoom,
    WithinSubscription: c.WithinSubscription,
  }));
}

/** GetCacheableRegionSubscribedCountries(SubscriptionRegionId) (controller.js:3551-3679): SubscriptionRegionId ""
    raises ObjectNotFound "Invalid country id"; otherwise the memory cache (type DirectoryCacheType
    .RegionSubscribedCountries, key SubscriptionRegionId, TTL 1200 s) whose miss runs GetRegionSubscribedCountries
    (Callbacks JS :3680-3688); AssignFromObject → CountryWithMapPosition (CacheResult has no reader). */
export async function getCacheableRegionSubscribedCountries(
  subscriptionRegionId = '',
): Promise<CountryWithMapPosition[]> {
  if (subscriptionRegionId === '') throw objectNotFound('Invalid country id');
  return getCacheableObject(DirectoryCacheType.RegionSubscribedCountries, subscriptionRegionId, 1200, () =>
    getRegionSubscribedCountries(subscriptionRegionId),
  );
}

/* ---- F11 (CR-MilestoneDetail-2): call popup data of the Orbit member cards (BuildMemberCallData) ---- */

/** BuildMemberContactsCacheKey(MemberIdList) → CacheKey (controller.js:915-985): ListSort of the ids (ascending, as
    Long Integers), then the ids joined by ",". */
export function buildMemberContactsCacheKey(memberIdList: readonly string[]): string {
  return [...memberIdList]
    .sort((a, b) => {
      const d = BigInt(a || '0') - BigInt(b || '0');
      return d < 0n ? -1 : d > 0n ? 1 : 0;
    })
    .join(',');
}

/** GetMemberContactList(CacheKey) → CacheableAssembleEventContactList (controller.js:5210-5290): server action
    GetMemberContactByCacheKey (`Connect2_LegacyShared/ActionGetMemberContactByCacheKey`, :7780-7800). */
export async function getMemberContactList(cacheKey: string): Promise<MemberContactWithTimezone[]> {
  const out = await callAction('Connect2_LegacyShared', 'ActionGetMemberContactByCacheKey', { CacheKey: cacheKey });
  return osList(out.MemberContactList);
}

/** GetCacheableMemberContactList(MemberIdList) → MemberContactList (controller.js:3414-3545): the memory cache (type
    DirectoryCacheType.MemberContact, key BuildMemberContactsCacheKey(MemberIdList), TimeToLive 300 s, Timeout 10 s);
    the miss callback is GetMemberContactList(CacheKey) (CallbacksJS :3542-3548). AssignFromObject copies the cached
    list into the output (as getCacheableUserInfo above); CacheResult has no reader. */
export async function getCacheableMemberContactList(
  memberIdList: readonly string[],
): Promise<MemberContactWithTimezone[]> {
  const cacheKey = buildMemberContactsCacheKey(memberIdList);
  return getCacheableObject(DirectoryCacheType.MemberContact, cacheKey, 300, () => getMemberContactList(cacheKey));
}

/** GetTimezoneInformation(LocalityId) → TimezoneInformation (controller.js:5500-5575): server action
    GetTimezoneInformation (`Connect2_LegacyShared/ActionGetTimezoneInformation`, :7892-7912); the output copies
    TimezoneLabel, OffsetSeconds and TimezoneAbreviation only, so CountryName stays "" (:5520-5530, as compiled). */
export async function getTimezoneInformation(localityId: string): Promise<Timezone> {
  const out = await callAction('Connect2_LegacyShared', 'ActionGetTimezoneInformation', { LocalityId: localityId });
  return {
    TimezoneLabel: out.TimezoneInformation.TimezoneLabel,
    OffsetSeconds: out.TimezoneInformation.OffsetSeconds,
    TimezoneAbreviation: out.TimezoneInformation.TimezoneAbreviation,
    CountryName: '',
  };
}

/** GetCacheableTimezoneInfo(LocalityId) → TimezoneResponse (controller.js:4251-4390): LocalityId = 0 raises
    ObjectNotFound "Invalid country id" (:4296-4299, message as compiled); otherwise the memory cache (type
    DirectoryCacheType.Timezone, key LongIntegerToText(LocalityId), TimeToLiveSeconds 1200, Timeout 10) whose miss
    callback is GetTimezoneInformation(Number(LocalityId)) (CallbacksJS :4381-4388). */
export async function getCacheableTimezoneInfo(localityId: string): Promise<Timezone> {
  if (localityId === '0' || localityId === '') throw objectNotFound('Invalid country id');
  return getCacheableObject(DirectoryCacheType.Timezone, localityId, 1200, () => getTimezoneInformation(localityId));
}

/* ---- F11 (CR-LDM_EventDetail_V2-1) ---- */

/** FlipHouseholdName(In_HouseholdName) → Out_HouseholdNameFixed (controller.js:2089-2186, JS node FlipHouseholdNameJS):
    "Surname, Householder & Spouse" → "Householder & Spouse Surname"; without a comma the name is kept. */
export function flipHouseholdName(originalName: string): string {
  const split = originalName.split(',');
  if (split.length <= 1) return originalName;
  const lastName = (split[0] ?? '').trim();
  const split2 = (split[1] ?? '').split('&');
  const householderName = (split2[0] ?? '').trim();
  const spouseName = split2[1] ? split2[1].trim() : '';
  return spouseName ? `${householderName} & ${spouseName} ${lastName}` : `${householderName} ${lastName}`;
}

/* ---- F15 (CR-AssembleDetail-1): GetCacheableSubdivision_V2 ---- */

/** Server action GetBulkSubdivisions_V2 (controller.js:7691-7704, `screenservices/Connect2_LegacyShared/
    ActionGetBulkSubdivisions_V2`, added through migration/contract/extra-actions.json): CacheKeys (Text list) in,
    Results (CacheableSubdivisionInformationTextText list) out. */
export async function getBulkSubdivisions_V2(cacheKeys: string[]): Promise<CacheableSubdivisionInformationTextText[]> {
  const out = await callAction('Connect2_LegacyShared', 'ActionGetBulkSubdivisions_V2', {
    CacheKeys: wireList(cacheKeys),
  });
  return osList(out.Results);
}

/** GetBulkSubdivision_V2(CacheKeys) (controller.js:3070-3110), the bulk callback of the subdivision cache:
    Results = GetBulkSubdivisions_V2.Results, each as (CacheKey, Error, Value) for the memory cache. */
export async function getBulkSubdivision_V2(
  cacheKeys: string[],
): Promise<BulkCacheResult<CacheableSubdivisionInformation>[]> {
  const results = await getBulkSubdivisions_V2(cacheKeys);
  return results.map((result) => ({ key: result.CacheKey, error: result.Error, value: result.Value }));
}

/** TimeToLive and Timeout locals of GetCacheableSubdivision_V2 (controller.js:4190-4205). */
const SUBDIVISION_TTL_SECONDS = 300;
const SUBDIVISION_TIMEOUT = 10;
/** The bulk-size input of GetCacheableObjectInBulk is left at its default, LongInteger 0 (controller.js:4149), as for
    the signed photos. */
const SUBDIVISION_BULK_SIZE = 0;

/** GetCacheableSubdivision_V2(SubdivisionId) (controller.js:4115-4244): SubdivisionId 0 raises ObjectNotFound "Invalid
    subdivision id"; otherwise the memory cache (type DirectoryCacheType.AssembleSubdivision, key
    LongIntegerToText(SubdivisionId), TTL 300 s, timeout 10, :4149) whose misses go, collected per type, to
    GetBulkSubdivision_V2 (Callbacks JS :4245-4249); the shell cache shares a miss already waiting. AssignFromObject →
    SubdivisionInformation (CacheResult has no reader). AssignFromObject skips a missing object (NavigationHandler
    AssignJS `if ($parameters.ObjectValue)`), so a key answered with an error gives undefined = the record at its
    default (empty HouseholdListResponse, Locality.Id 0, Country.Code ""). */
export async function getCacheableSubdivision_V2(
  subdivisionId = '0',
): Promise<CacheableSubdivisionInformation | undefined> {
  if (subdivisionId === '0' || subdivisionId === '') throw objectNotFound('Invalid subdivision id');
  return getCacheableObjectInBulk(
    DirectoryCacheType.AssembleSubdivision,
    subdivisionId,
    SUBDIVISION_TTL_SECONDS,
    SUBDIVISION_TIMEOUT,
    getBulkSubdivision_V2,
    SUBDIVISION_BULK_SIZE,
  );
}

/* ---- F15 (CR-AssembleDetail-2): the legacy bookmarks cache and feedback of ToggleBookmarkItem ---- */

/** MemoryClientCache UnlimitedTimeToLiveSeconds(): 604800 s (runtime-sources/MemoryClientCache.controller.js,
    unlimitedTimeToLiveSeconds$Action), the TTL of PutCachedMyBookmarks (controller.js:6407 ff.). */
const UNLIMITED_TIME_TO_LIVE_SECONDS = 604800;

/** GetCachedMyBookmarks(Group) (controller.js:4529 ff.): GetCachedObject(DirectoryCacheType.MyBookmarks, Group); on a hit
    AssignFromObject → Bookmarks (a copy) and CacheHit True. */
export function getCachedMyBookmarks(group: string): { cacheHit: boolean; bookmarks: BookmarkItem[] } {
  const cached = peekCacheableObject(DirectoryCacheType.MyBookmarks, group);
  if (!cached.hit || !Array.isArray(cached.value)) return { cacheHit: false, bookmarks: [] };
  return { cacheHit: true, bookmarks: [...(cached.value as BookmarkItem[])] };
}

/** PutCachedMyBookmarks(Group, Bookmarks) (controller.js:6407 ff.): PutCacheableObject(DirectoryCacheType.MyBookmarks,
    Group, Bookmarks, UnlimitedTimeToLiveSeconds). */
export function putCachedMyBookmarks(group: string, bookmarks: readonly BookmarkItem[]): void {
  putCacheableObject(DirectoryCacheType.MyBookmarks, group, [...bookmarks], UNLIMITED_TIME_TO_LIVE_SECONDS);
}

/** AddBookmarkToCache(In_Bookmark) (controller.js:1-60): BookmarkGroup = In_Bookmark.Group; GetCachedMyBookmarks; on a
    hit: ListFilter out the rows with In_Bookmark's ObjectId, ListAppend In_Bookmark, ListSort by DateCreatedUtc
    descending (Ascending False), PutCachedMyBookmarks, Success True; no hit: nothing (False). */
export function addBookmarkToCache(in_Bookmark: BookmarkItem): boolean {
  const bookmarkGroup = in_Bookmark.Group;
  const cached = getCachedMyBookmarks(bookmarkGroup);
  if (!cached.cacheHit) return false;
  const filtered = cached.bookmarks.filter((p) => p.ObjectId !== in_Bookmark.ObjectId);
  filtered.push({ ...in_Bookmark });
  filtered.sort((a, b) => b.DateCreatedUtc.localeCompare(a.DateCreatedUtc));
  putCachedMyBookmarks(bookmarkGroup, filtered);
  return true;
}

/** RemoveBookmarkFromCache(In_Group, In_BookmarkId) (controller.js:6607-6660): GetCachedMyBookmarks(In_Group); on a hit,
    ListIndexOf the row whose ObjectId = LongIntegerToText(In_BookmarkId) (the bookmark id compared with the object id,
    as compiled; ported 1:1); found → ListRemove, PutCachedMyBookmarks, Success True. */
export function removeBookmarkFromCache(in_Group: string, in_BookmarkId: string): boolean {
  const cached = getCachedMyBookmarks(in_Group);
  if (!cached.cacheHit) return false;
  const position = cached.bookmarks.findIndex((p) => p.ObjectId === in_BookmarkId);
  if (position === -1) return false;
  cached.bookmarks.splice(position, 1);
  putCachedMyBookmarks(in_Group, cached.bookmarks);
  return true;
}

/** SendBookmarkedFeedbackMessage(IsCreate) (controller.js:6917-6945): success message "Added to your Bookmarks" /
    "Removed from your Bookmarks". */
export function sendBookmarkedFeedbackMessage(isCreate: boolean): void {
  showFeedbackMessage(
    isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks',
    PLATFORM_MESSAGE_TYPE.success,
  );
}
