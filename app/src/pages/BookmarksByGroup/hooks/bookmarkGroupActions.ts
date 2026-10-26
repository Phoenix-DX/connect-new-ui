import { toBookmark, type Bookmark } from '@/api/bookmark';
import { showFeedbackMessage } from '@/platform/feedback';
import { log } from '@/platform/log/log';
import type { BookmarkItem as BookmarkItemRecord } from '@/lib/legacyShared/structures';
import {
  APPLICATION_EVENT_SUBSCRIPTION_REQUIRED,
  MyBookmarks_ObjectType,
} from '@/pages/BookmarksByGroup/staticEntities';

/* The client actions of other modules that only the bookmark group flows call: the MyBookmarks cache records, the
   feedback messages of Connect2_MyBookmarks_MUI and the audit event of Connect2_LegacyShared. */

/* The MyBookmarks cache. The block's BookmarkedItems is a list of Connect2_MyBookmarks_IS.BookmarkItem records, and
   the block calls the Connect2_LegacyShared GetCachedMyBookmarks and PutCachedMyBookmarks with that list.
   AddBookmarkToCache and RemoveBookmarkFromCache (AssembleDetail) use the same cache type, group key and record. So the
   flows call the Connect2_LegacyShared actions (lib/legacyShared/actions.ts) and convert their rows with
   the two functions below. */

/** Domain row → the BookmarkItem record of the cache. Group = the block's BookmarkGroup input (the group that
    DataActionGetAllBookmarksByGroup was asked for); DateCreatedUtc from the wire row. The domain row does not keep
    Type, PhotoDetails and the DetailsJson attributes CountryCode, HouseHolderId, HouseholderName, MemberID,
    ServiceType, SubdivisionID and SubdivisionName: they get the record defaults (Text "", Long Integer 0). No reader of
    the cache uses them (AddBookmarkToCache reads ObjectId and DateCreatedUtc, RemoveBookmarkFromCache ObjectId, the
    block the domain fields). */
export const toCacheRecord = (row: Bookmark, group: string): BookmarkItemRecord => ({
  Id: row.id,
  Group: group,
  ObjectType: row.objectType,
  ObjectId: row.objectId,
  Title: row.title,
  DateCreatedUtc: row.dateCreatedUtc,
  Image: row.image,
  PhotoDetails: { Bucket: '', Path: '', SignedPath: '', Type: '' },
  RecordDisabled: row.recordDisabled,
  RecordNotAvailable: row.recordNotAvailable,
  Note: row.note,
  DetailsJson: {
    AreasServed: row.details.areasServed,
    ChildrenNames: row.details.childrenNames,
    CountryCode: '',
    CountryName: row.details.countryName,
    HouseHolderId: '0',
    HouseholdCount: row.details.householdCount,
    HouseholderName: '',
    IsDeceased: row.details.isDeceased,
    IsMainHall: row.details.isMainHall,
    LocalityID: row.details.localityId,
    LocalityName: row.details.localityName,
    MemberID: '0',
    ServiceType: '',
    ShareObjectTypeId: row.details.shareObjectTypeId,
    SubdivisionID: '0',
    SubdivisionName: '',
  },
  Type: '',
});

/** BookmarkItem record of the cache → domain row: the record is the wire structure, so the wire mapper applies. */
export const fromCacheRecord = (record: BookmarkItemRecord): Bookmark => toBookmark(record);

/** SendBookmarkedFeedbackMessage(IsCreate) of Connect2_MyBookmarks_MUI: the success message. */
export function sendBookmarkedFeedbackMessage(isCreate: boolean): void {
  showFeedbackMessage(isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks', 1);
}

/** SendBookmarkedHiddenFeedbackMessage(ObjectType) of Connect2_MyBookmarks_MUI: the info message that names the kind
    of record. */
export function sendBookmarkedHiddenFeedbackMessage(objectType: string): void {
  const kind =
    objectType === MyBookmarks_ObjectType.Contact
      ? ' household '
      : objectType === MyBookmarks_ObjectType.Locality
        ? ' locality '
        : objectType === MyBookmarks_ObjectType.Subdivision
          ? ' Supper Meeting '
          : objectType === MyBookmarks_ObjectType.CampusCo || objectType === MyBookmarks_ObjectType.OneSchoolGlobal
            ? ' entity '
            : ' ';
  showFeedbackMessage('This' + kind + 'is no longer available.', 0);
}

/** AuditBookmarkSubscriptionEvent(HouseholdId, LocalityId, CountryCode, EntityId) of Connect2_LegacyShared:
    SubscriptionEventInfo serialized, then zOnApplicationEvent_Wrapper(SubscriptionRequired, JSON) → GetAppEventName →
    AzureInsights CreateCustomEvent. Telemetry is not wired in the mock phase (decision U17): the event goes to the
    log. */
export function auditBookmarkSubscriptionEvent(
  householdId: string,
  localityId: string,
  countryCode: string,
  entityId: string,
): void {
  const attachment = JSON.stringify({
    HouseholdId: householdId,
    LocalityId: localityId,
    CountryCode: countryCode,
    EntityId: entityId,
  });
  log.info('ApplicationEvent', { EventId: APPLICATION_EVENT_SUBSCRIPTION_REQUIRED, HasAttachment: attachment !== '' });
}
