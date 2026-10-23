const NULL_DATE = '1900-01-01';

/** A domain date ('' = null) as a block input that takes the OutSystems null date (ShareSheet In_UpdateDate). */
export const osDateInput = (date: string): string => date || NULL_DATE;

/* The two data actions of the screen (GetDateRanges and FetchUpdates, both sent with every screen variable) and the
   three read-state service actions are in the domain api/update. This module keeps the names that the screen uses. */
export {
  fetchUpdateDateRangeIds as getDateRanges,
  fetchUpdatesList as fetchUpdates,
  markAllUpdateItemsAsRead as markAllAsRead,
  markUpdateItemAsRead as markAsRead,
  markUpdateItemAsUnread as markAsUnread,
} from '@/api/update';
