/** TST values (migration/knowledge/static-entities-tst.json) the shared constants do not list yet, written as classes
    the way the shared blocks write them: UBTConnect.uBT_Icons2 moreVertical / search / expandMore / mail / delete,
    UBTConnect.uBT_Color redDark / error (captured `background-red-dark`, `text-error`). */
export const UBT_Icons2_Notifications = {
  MoreVertical: 'connect-icon-more_vertical',
  Search: 'connect-icon-search',
  ExpandMore: 'connect-icon-expand_more',
  Mail: 'connect-icon-mail',
  Delete: 'connect-icon-delete',
} as const;
export const UBT_Color_RedDark = 'red-dark';
export const UBT_Color_Error = 'error';

/** UBTConnect.Updates_DateRanges (TST): identifiers Today, Last 7 Days, Last 30 Days, Older. */
export const Updates_DateRanges = {
  Today: 'Today',
  Last7Days: 'Last 7 Days',
  Last30Days: 'Last 30 Days',
  Older: 'Older',
} as const;

/** UBTConnect.Choice (TST), as the shared filter blocks use it. */
export { Choice } from '@/shared/UBTConnect/lib/staticEntities';
