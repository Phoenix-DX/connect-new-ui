/* Client actions of Connect2_Assemble_MUI used by the shared Assemble blocks, ported 1:1 from
   migration/screens/AssembleEvents/analysis/sources/pretty/Connect2_Assemble_MUI.controller.js (cited as
   controller.js:<line>). */
import { dayOfWeek, formatDateTime } from '@/lib/osDateTime';
import { log } from '@/platform/log/log';
import { osList } from '@/lib/os-wire';
import { legacyGetLocalBookmarksByObjectType } from '@/platform/storage/localEntities';
import { getUserInformation } from '@/platform/session/userInfo';
import { getCacheableLocality, getCacheableUserInfo, removeDiacritics } from '@/lib/legacyShared/actions';
import type { CacheableLocalityInformation } from '@/lib/legacyShared/structures';
import { Connect_Subscription_Plan } from '@/lib/ubtConnect/staticEntities';
import { MyBookmarks_ObjectType } from './staticEntities';
import type { AssembleEventSummary, HostedAtComponents } from './structures';

/** OutSystems null DateTime (the DateTime input default). */
const NULL_DATE_TIME = '1900-01-01T00:00:00';

/** "Lord's Day" on a Sunday, else the day name (controller.js:345, :410). */
const dayLabel = (dateTime: string) => (dayOfWeek(dateTime) === 0 ? "Lord's Day" : formatDateTime(dateTime, 'dddd'));

/** GetAssembleEventSummaryHeaderLabel(AssembleEventSummary) (controller.js:394-450, :410): the event type title, " - ",
    then the day label of DateTime. */
export function getAssembleEventSummaryHeaderLabel(summary: AssembleEventSummary = {}): string {
  return `${summary.AssembleEventType?.Title ?? ''} - ${dayLabel(summary.DateTime ?? NULL_DATE_TIME)}`;
}

/** GetAssembleHostedAtComponents(IsVirtual, SubdivisionName, LocalityName, CountryName, IsUnavailable)
    (controller.js:539-671, flow :555-600). */
export function getAssembleHostedAtComponents(
  isVirtual = false,
  subdivisionName = '',
  localityName = '',
  countryName = '',
  isUnavailable = false,
): HostedAtComponents {
  if (isUnavailable) {
    const singleLine = 'Hosting details unavailable at the moment';
    return { SingleLine: singleLine, FirstRow: singleLine, SecondRow: '' };
  }
  const out: HostedAtComponents = { FirstRow: '', SecondRow: '', SingleLine: '' };
  if (isVirtual) {
    out.FirstRow = 'Hosted Virtually by ';
    out.SingleLine = 'Online - ' + localityName + ', ' + countryName;
  } else {
    out.FirstRow = 'Hosted at ';
    out.SingleLine = subdivisionName + ', ' + localityName + ', ' + countryName;
    out.FirstRow = out.FirstRow + subdivisionName;
  }
  out.SecondRow = localityName + ', ' + countryName;
  return out;
}

/* ---- Wave 8 O-B3 (Assemble_FilterLocalityByCountry, Assemble_FilterSubdivisionByLocality) ---- */

/** GetLocalBookmarkedLocalityInformation(In_LocalityId, In_LocalityInformation) (controller.js:741-992): on a copy of
    the locality (`.clone()`, :746), IsBookmarked of the locality and of each interchange, household, supper meeting,
    school and store is set from the device's legacy bookmarks (GetLocalBookmarksByObjectType of Connect2_LegacyShared,
    `shell/localEntities/localBookmarks.ts`): Locality bookmarks for the locality (ObjectId = In_LocalityId) and the
    interchanges (InterchangeLocalityId), Contact for the households (Id), Subdivision for the supper meetings (Id),
    OneSchool Global for the schools and Campus&Co for the stores (CommunityBusinessID). Out_LocalityInformation. */
export async function getLocalBookmarkedLocalityInformation(
  localityId: string,
  localityInformation: CacheableLocalityInformation,
): Promise<CacheableLocalityInformation> {
  const info = structuredClone(localityInformation);
  const bookmarkedIds = async (objectType: string) =>
    new Set((await legacyGetLocalBookmarksByObjectType(objectType)).map((b) => b.ObjectId));
  const localities = await bookmarkedIds(MyBookmarks_ObjectType.Locality);
  info.IsBookmarked = localities.has(localityId);
  for (const i of osList(info.LocalityInterchanges)) i.IsBookmarked = localities.has(i.InterchangeLocalityId);
  const contacts = await bookmarkedIds(MyBookmarks_ObjectType.Contact);
  for (const h of osList(info.LocalityHouseholdsList)) h.IsBookmarked = contacts.has(h.Id);
  const subdivisions = await bookmarkedIds(MyBookmarks_ObjectType.Subdivision);
  for (const s of osList(info.LocalitySubdivisionsList)) s.IsBookmarked = subdivisions.has(s.Id);
  const schools = await bookmarkedIds(MyBookmarks_ObjectType.OneSchoolGlobal);
  for (const s of osList(info.LocalitySchools)) s.IsBookmarked = schools.has(s.CommunityBusinessID);
  const stores = await bookmarkedIds(MyBookmarks_ObjectType.CampusCo);
  for (const s of osList(info.LocalityStores)) s.IsBookmarked = stores.has(s.CommunityBusinessID);
  return info;
}

/** GetLocality(LocalityId) (controller.js:1006-1055): GetCacheableLocality, then GetLocalBookmarkedLocalityInformation
    (LocalityId, its LocalityInformation); LocalityInformation = Out_LocalityInformation. */
export async function getLocality(localityId = '0'): Promise<CacheableLocalityInformation> {
  return getLocalBookmarkedLocalityInformation(localityId, await getCacheableLocality(localityId));
}

/** The ListFilter of OnChange_SearchTerm in both filters (FilterLocalityByCountry mvc.js :823-850,
    FilterSubdivisionByLocality mvc.js :453-468): term = Trim(ToLower(RemoveDiacritics(ToLower(Trim(SearchTerm))))); an
    item stays when Index(Trim(ToLower(RemoveDiacritics(Name))), term, 0, False, IgnoreCase True) <> -1. */
export function listFilterByName<T extends { Name?: string }>(list: readonly T[], searchTerm: string): T[] {
  const term = removeDiacritics(searchTerm.trim().toLowerCase()).toLowerCase().trim();
  return list.filter((p) =>
    removeDiacritics(p.Name ?? '')
      .toLowerCase()
      .trim()
      .includes(term),
  );
}

/** AuditSubscriptionEvent(HouseholdId, LocalityId, CountryCode) (controller.js:3-81): JSON of SubscriptionEventInfo
    {LocalityId, HouseholdId, CountryCode}, then zOnApplicationEvent_Wrapper(ApplicationEvents_Directory
    .SubscriptionRequired, JSON) (:29). Telemetry is not wired in the mock phase (decision U17): the event goes to the log. */
export function auditSubscriptionEvent(householdId = '0', localityId = '0', countryCode = ''): void {
  log.info('ApplicationEvent', {
    EventId: 'SubscriptionRequired',
    LocalityId: localityId,
    HouseholdId: householdId,
    CountryCode: countryCode,
  });
}

/** HasAccessToRegion(CountryCode, LocalityId) of Connect2_Assemble_MUI (controller.js:1140-1254; not the UBTConnect
    one): Cache_UserInfo_Get, IsFreeSubscriptionPlan and IsRegionalSubscriptionPlan (UBTConnect_Utils.controller.js
    :3970, :4074: SubscriptionType = Free / Regional). Neither → True. Regional → GetCacheableUserInfo, True when
    Subscription.SubscribedCountries has Code = CountryCode. Free → True when CountryCode = the user's Country_Code and
    LocalityId is 0 or the user's Locality_Id. Otherwise AuditSubscriptionEvent(0, LocalityId, CountryCode), False. */
export async function hasAccessToRegion(countryCode = '', localityId = '0'): Promise<boolean> {
  const user = (await getUserInformation()).Directory_UserCurrent;
  const plan = user.Directory_UserCurrent_Subscription.SubscriptionType;
  const isFree = plan === Connect_Subscription_Plan.Free;
  const isRegional = plan === Connect_Subscription_Plan.Regional;
  if (!isRegional && !isFree) return true;
  if (isRegional) {
    const userInformation = await getCacheableUserInfo();
    if (osList(userInformation.Subscription.SubscribedCountries).some((p) => p.Code === countryCode)) return true;
  }
  if (isFree) {
    const geography = user.Directory_UserCurrent_Geography;
    if (countryCode === geography.Country_Code && (localityId === '0' || localityId === geography.Locality_Id))
      return true;
  }
  auditSubscriptionEvent('0', localityId, countryCode);
  return false;
}
