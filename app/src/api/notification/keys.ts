import type { NotificationsVariables } from './types';

/** Query keys of the notification queries: one key per data action. The screen variables are part of the key: the
    server answer can depend on each variable that the call sends. */
export const notificationKeys = {
  all: ['notification'] as const,
  dateRanges: (variables: NotificationsVariables) => [...notificationKeys.all, 'dateRanges', variables] as const,
  list: (variables: NotificationsVariables) => [...notificationKeys.all, 'list', variables] as const,
};
