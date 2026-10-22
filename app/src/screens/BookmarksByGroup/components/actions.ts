import { log } from '@/platform/log/log';
import { showFeedbackMessage } from '@/platform/feedback';
import { peekCacheableObject, putCacheableObject } from '@/platform/storage/memoryCache';
import type { BookmarkItem } from '@/screens/BookmarksByGroup/types';
import {
  APPLICATION_EVENT_SUBSCRIPTION_REQUIRED,
  DIRECTORY_CACHE_TYPE_MY_BOOKMARKS,
  MyBookmarks_ObjectType,
} from './staticEntities';

/* Client actions of other modules that only this route calls. C = Connect2_LegacyShared.controller.js and
   M = Connect2_MyBookmarks_MUI.controller.js (migration/screens/BookmarksByGroup/analysis/sources/raw, prettified). */

/** MemoryClientCache UnlimitedTimeToLiveSeconds(): TimeToLiveSeconds = 604800 (7 days)
    (runtime-sources/MemoryClientCache.controller.js, unlimitedTimeToLiveSeconds$Action; Q4 answered by code). */
const UNLIMITED_TIME_TO_LIVE_SECONDS = 604800;

/** PutCachedMyBookmarks(Group, Bookmarks) (C putCachedMyBookmarks$Action): PutCacheableObject(DirectoryCacheType
    MyBookmarks, Group, Bookmarks, UnlimitedTimeToLiveSeconds). A copy of the list, as the record list is cloned. */
export function putCachedMyBookmarks(group: string, bookmarks: readonly BookmarkItem[]): void {
  putCacheableObject(DIRECTORY_CACHE_TYPE_MY_BOOKMARKS, group, [...bookmarks], UNLIMITED_TIME_TO_LIVE_SECONDS);
}

/** GetCachedMyBookmarks(Group) (C getCachedMyBookmarks$Action): GetCachedObject; on a hit AssignFromObject → Bookmarks
    and CacheHit True. */
export function getCachedMyBookmarks(group: string): { cacheHit: boolean; bookmarks: BookmarkItem[] } {
  const cached = peekCacheableObject(DIRECTORY_CACHE_TYPE_MY_BOOKMARKS, group);
  if (!cached.hit || !Array.isArray(cached.value)) return { cacheHit: false, bookmarks: [] };
  return { cacheHit: true, bookmarks: [...(cached.value as BookmarkItem[])] };
}

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
