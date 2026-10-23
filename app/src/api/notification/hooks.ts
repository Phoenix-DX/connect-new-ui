import { useMutation, useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { notificationKeys } from './keys';
import {
  fetchNotificationDateRanges,
  fetchNotifications,
  markAllNotificationsAsRead,
  markNotificationOpened,
} from './repository';
import type { NotificationDateRangeRecord, NotificationList, NotificationsVariables } from './types';

/** The query options that a caller can set (for example `enabled`). The key, the query function and the cache times
    are fixed. */
export type NotificationQueryOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn' | 'staleTime' | 'gcTime'>;

/** No cache: each fetch calls the server, as OutSystems does, so the calls stay equal to the original (call parity,
    refactor plan v2 §5.4). */
const NO_CACHE = { staleTime: 0, gcTime: 0 } as const;

/* The two data actions of the screen Notifications as queries, and the two wrappers of Connect2_LegacyShared as
   mutations. No caller yet: the screen Notifications refreshes its data actions on demand in its own flows (OnReady,
   RefreshNotifications), and the blocks ScreenBlock_MessageDetail and ScreenBlock_MessageList call the wrappers in
   their flows. They call the repository functions. */

/** DataActionGetDateRanges of the screen Notifications as a query. No retry by default: OutSystems does not retry a
    failed data action. */
export function useNotificationDateRangesQuery(
  variables: NotificationsVariables,
  options: NotificationQueryOptions<NotificationDateRangeRecord[]> = {},
) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: notificationKeys.dateRanges(variables),
    queryFn: () => fetchNotificationDateRanges(variables),
    ...NO_CACHE,
  });
}

/** DataActionFetchNotifications of the screen Notifications as a query. No retry by default. */
export function useNotificationsQuery(
  variables: NotificationsVariables,
  options: NotificationQueryOptions<NotificationList> = {},
) {
  return useQuery({
    retry: false,
    ...options,
    queryKey: notificationKeys.list(variables),
    queryFn: () => fetchNotifications(variables),
    ...NO_CACHE,
  });
}

/* ---- Mutations (a mutation does not retry by default, as OutSystems) ---- */

/** Wrapper_NotificationOpened as a mutation: the variable is the message instance id. */
export function useMarkNotificationOpenedMutation() {
  return useMutation({ mutationFn: markNotificationOpened });
}

/** Wrapper_MarkAllAsReadNotifications as a mutation: the variable is the filter of the message list. */
export function useMarkAllNotificationsAsReadMutation() {
  return useMutation({ mutationFn: markAllNotificationsAsRead });
}
