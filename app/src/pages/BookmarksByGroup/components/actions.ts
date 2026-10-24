import { log } from '@/platform/log/log';
import type { BookmarkItem as BookmarkItemRecord } from '@/shared/Connect2_LegacyShared/lib/structures';
import { showFeedbackMessage } from '@/platform/feedback';
import { toBookmarkItem } from '@/pages/BookmarksByGroup/api';
import type { BookmarkItem } from '@/pages/BookmarksByGroup/types';
import { APPLICATION_EVENT_SUBSCRIPTION_REQUIRED, MyBookmarks_ObjectType } from './staticEntities';

/* Client actions of other modules that only this route calls. C = Connect2_LegacyShared.controller.js and
   M = Connect2_MyBookmarks_MUI.controller.js (migration/screens/BookmarksByGroup/analysis/sources/raw, prettified). */

/* The MyBookmarks cache. The block's BookmarkedItems is a list of Connect2_MyBookmarks_IS.BookmarkItem records
   (ScreenBlock_BookmarkGroup.mvc.js model :32), and the block calls the Connect2_LegacyShared GetCachedMyBookmarks
   (:2921-2932) and PutCachedMyBookmarks (:2163-2164, :2345-2346, :2774-2775, :3173-3174) with that list. AddBookmarkToCache
   and RemoveBookmarkFromCache (AssembleDetail) use the same cache type, group key and record. So the block calls the
   Connect2_LegacyShared actions (shared/Connect2_LegacyShared/lib/actions.ts) and converts its rows with the two
   functions below. */

/** Domain row → the BookmarkItem record of the cache. Group = the block's BookmarkGroup input (the group that
    DataActionGetAllBookmarksByGroup was asked for); DateCreatedUtc from the wire row. The domain row does not keep
    Type, PhotoDetails and the DetailsJson attributes CountryCode, HouseHolderId, HouseholderName, MemberID,
    ServiceType, SubdivisionID and SubdivisionName: they get the record defaults (Text "", Long Integer 0). No reader of
    the cache uses them (AddBookmarkToCache reads ObjectId and DateCreatedUtc, RemoveBookmarkFromCache ObjectId, the
    block the domain fields). */
export const toCacheRecord = (row: BookmarkItem, group: string): BookmarkItemRecord => ({
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
export const fromCacheRecord = (record: BookmarkItemRecord): BookmarkItem => toBookmarkItem(record);

/** SendBookmarkedFeedbackMessage(IsCreate) (M:168-210): success message. */
export function sendBookmarkedFeedbackMessage(isCreate: boolean): void {
  showFeedbackMessage(isCreate ? 'Added to your Bookmarks' : 'Removed from your Bookmarks', 1);
}

/** SendBookmarkedHiddenFeedbackMessage(ObjectType) (M:233-289): info message naming the kind of record. */
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

/** AuditBookmarkSubscriptionEvent(HouseholdId, LocalityId, CountryCode, EntityId) (C:443-576): SubscriptionEventInfo
    serialized, then zOnApplicationEvent_Wrapper(SubscriptionRequired, JSON) → GetAppEventName → AzureInsights
    CreateCustomEvent. Telemetry is not wired in the mock phase (decision U17): the event goes to the log. */
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
