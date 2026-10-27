import type { OneSchoolCard, SubdivisionCard } from '@/api/locality';
import { getLocalBookmarkByObjectId, get_LocalBookmarkByObjectId } from '@/platform/storage/localEntities';
import { currDateTime, formatDateTime } from '@/lib/osDateTime';
import { getConnectWeekdayLabel_ByDate, getLookupConcepts } from '@/lib/ubtConnectLibrary/actions';
import type { LookupItem, Tag } from '@/lib/ubtConnectLibrary/structures';
import { LocalityMenu } from './staticEntities';

/* Client actions of the UBTConnect module this route calls (UC = UBTConnect.controller.js, copy in
   migration/screens/BookmarksByGroup/analysis/sources/raw/). */

const tag = (text: string, isSelected: boolean): Tag => ({
  Text: text,
  Identifier: text,
  IconId: '',
  IsSelected: isSelected,
  Enabled: true,
});

/** GetSample_FilterTags(ShowMyHouseholdTag): Households (selected), My Household when ShowMyHouseholdTag, Supper
    Meetings, Interchange, OneSchool Global, then Locality Contacts when Connect_LaunchDarkly_PermissionCheck(
    mobileDirectoryLocalityContacts) has access (flag still undecided: Q2, off by default). The page reads the flag
    and gives it as `hasLocalityContacts`. */
export function getSample_FilterTags(showMyHouseholdTag: boolean, hasLocalityContacts: boolean): Tag[] {
  const tags = [tag(LocalityMenu.Households, true)];
  if (showMyHouseholdTag) tags.push(tag(LocalityMenu.MyHousehold, false));
  tags.push(tag(LocalityMenu.Subdivsion, false), tag(LocalityMenu.Interchange, false));
  tags.push(tag(LocalityMenu.OneSchoolGlobal, false));
  if (hasLocalityContacts) tags.push(tag(LocalityMenu.LocalityContacts, false));
  return tags;
}

/** GetLocalityCurrentTimeLabel(In_UTCOffsetSeconds, In_LocalDateTime) (UC GetLocalityCurrentTimeLabel): the device
    time moved to UTC (JSUtils_DateTime_GetUTCOffset = new Date().getTimezoneOffset(), migration/shell/sources/
    UBTJavaScriptUtils.controller.js:1082) plus the locality offset; "<weekday long label>, <hh:mm tt> (UTC ± h[:mm])". */
export function getLocalityCurrentTimeLabel(in_UTCOffsetSeconds: number, in_LocalDateTime: Date): string {
  const utcOffsetMinutes = new Date().getTimezoneOffset();
  const local = new Date(in_LocalDateTime.getTime() + utcOffsetMinutes * 60_000 + in_UTCOffsetSeconds * 1000);
  const value = currDateTime(local);
  const weekday = getConnectWeekdayLabel_ByDate(value.slice(0, 10)).LongLabel;
  const time = formatDateTime(value, 'hh:mm tt'); // FormatConnectTime: GetConnectTimeFormat = "hh:mm tt"
  const hours = Math.abs(in_UTCOffsetSeconds) / 3600;
  let offsetLabel = String(Math.trunc(hours));
  const fraction = hours - Math.trunc(hours);
  if (fraction > 0) offsetLabel = `${offsetLabel}:${String(fraction * 60)}`;
  return `${weekday}, ${time} (UTC${in_UTCOffsetSeconds < 0 ? ' - ' : ' + '}${offsetLabel})`;
}

/** GetLocal_Bookmark(ObjectType, ObjectId) (UC:9191+): IsBookmarked = Get_LocalBookmarkByObjectId(…).Id <> NullIdentifier
    (legacy Connect2_LegacyShared.LocalBookmark through the shell adapter). */
export async function getLocal_Bookmark(objectType: string, objectId: string): Promise<boolean> {
  const bookmark = await get_LocalBookmarkByObjectId(objectType, objectId);
  return bookmark.Id !== '' && bookmark.Id !== '0';
}

/** GetLocal_Bookmark_C2(ObjectType, ObjectId) (UC:9270-9310): IsBookmarked = GetLocalBookmarkByObjectId_C2(ObjectId)
    .LocalBookmark.Id <> NullIdentifier (the C2 UBTConnect_Bookmarks_MCS.LocalBookmark). ObjectType is an input that
    the flow does not read. */
export async function getLocal_Bookmark_C2(_objectType: string, objectId: string): Promise<boolean> {
  const bookmark = await getLocalBookmarkByObjectId(objectId);
  return bookmark.Id !== '' && bookmark.Id !== '0';
}

/* ---- Tags (feedback F1). UC = migration/screens/Locality_Details/analysis/sources/raw/UBTConnect.controller.js,
   ULC = …/raw/UBTConnectLibrary.controller.js. ---- */

/** GetSkeleton_UI_SubdivisionCard (UC:12238-12270) with GetSkeleton_UI_SubdivisionCardContent: SubdivisionId keeps
    its default (0); Name "Subdivision Name Example", every count 10, Address "Subdivision Formatted Address Example". */
const getSkeleton_UI_SubdivisionCard = (): SubdivisionCard => ({
  subdivisionId: '0',
  content: {
    Name: 'Subdivision Name Example',
    BretherenCount: 10,
    HouseholdCount: 10,
    BrothersCount: 10,
    SistersCount: 10,
    Address: 'Subdivision Formatted Address Example',
  },
});

/** GetSkeletonList_UI_SubdivisionCard(ListLength) (UC:12922-12960): ListLength skeleton cards. */
export function getSkeletonList_UI_SubdivisionCard(listLength: number): SubdivisionCard[] {
  return Array.from({ length: Math.max(listLength, 0) }, getSkeleton_UI_SubdivisionCard);
}

/** GetSkeleton_UI_OneSchoolGlobal_ListCard (UC:12062-12100): Name "OneSchoold Global", LocalityName "Adelaide", Phone
    and Email set; CommunityBusinessId, SignedURL and the other content attributes keep their defaults. */
const getSkeleton_UI_OneSchoolGlobal_ListCard = (): OneSchoolCard => ({
  communityBusinessId: '0',
  signedURL: '',
  name: 'OneSchoold Global',
  localityName: 'Adelaide',
  localityId: '0',
  countryName: '',
  countryCode: '',
  phone: '+613696648706',
  email: 'test@gmail.com',
});

/** GetSkeletonList_UI_OneSchoolGlobal_ListCard(ListLength) (UC:12846-12880): ListLength skeleton cards. */
export function getSkeletonList_UI_OneSchoolGlobal_ListCard(listLength: number): OneSchoolCard[] {
  return Array.from({ length: Math.max(listLength, 0) }, getSkeleton_UI_OneSchoolGlobal_ListCard);
}

/** GetIconLabel_Interchange_Statistics(StatisticItemName) (UC:9041-9180): the GetLookupConcepts(False) icon and color
    of "Brethren", "Households", "Supper Meetings", "Brothers", "Sisters" or "Distance"; any other name keeps the
    record default (no icon, no color). */
export function getIconLabel_Interchange_Statistics(statisticItemName: string): { color_Id: string; iconId: string } {
  const concepts = getLookupConcepts(false);
  const byName: Record<string, Required<LookupItem> | undefined> = {
    Brethren: concepts.Brethren,
    Households: concepts.Household,
    'Supper Meetings': concepts.SupperMeeting,
    Brothers: concepts.Brother,
    Sisters: concepts.Sister,
    Distance: concepts.Distance,
  };
  const item = byName[statisticItemName];
  return { color_Id: item?.Icon_Color ?? '', iconId: item?.Icon ?? '' };
}

/** StopPropagationHelper_GetClass (ULC:8984-8995). */
export const STOP_PROPAGATION_HELPER_CLASS = 'helper-stop-propagation';

/** StopPropagationHelper_Check (ULC:8903-8976): isToStop = the current event's target is inside a
    `.helper-stop-propagation` element (JavaScript1 reads the global `event`, as here). */
export function stopPropagationHelper_Check(): boolean {
  // JavaScript1 reads the global `event` (the click being dispatched); no other source of it reaches this action.
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  const target = window.event?.target;
  return target instanceof Element && target.closest(`.${STOP_PROPAGATION_HELPER_CLASS}`) !== null;
}
