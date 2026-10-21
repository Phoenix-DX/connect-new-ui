/** TST values (migration/knowledge/static-entities-tst.json) the shared constants do not list, written as the classes
    the shared blocks write: Connect2_LegacyShared.uBT_Icons2 search, uBT_Color redDark, uBT_FlexDirection row. */
export const UBT_Icons2_Updates = { Search: 'connect-icon-search' } as const;
export const UBT_Color_RedDark = 'red-dark';
export const UBT_FlexDirection_Row = 'flex-direction-row';

/** UBTConnect.Updates_DateRanges (TST): identifiers Today, Last 7 Days, Last 30 Days, Older. */
export const Updates_DateRanges = {
  Today: 'Today',
  Last7Days: 'Last 7 Days',
  Last30Days: 'Last 30 Days',
  Older: 'Older',
} as const;
