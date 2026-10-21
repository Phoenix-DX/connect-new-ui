/* Static entities this route reads that are not in the shared Orbit lib. Values from
   migration/knowledge/static-entities-tst.json (TST moduleinfo). */

/** Connect2_OrbitMobile_MUI.orbitLandingFilter (Integer identifier): the Upcoming / Past choice of the Filters popup;
    EventFilter defaults to the null identifier (0). */
export const OrbitLandingFilter = { UpcomingEvents: 1, PastEvents: 2 } as const;

/** Connect2_OrbitMobile_MUI.menuAction.menu: the MenuAction the block passes to MenuIcon__UpdatedOSUI (view :239). */
export const MenuAction_Menu = 'Menu';

/** Connect2_OrbitMobile_MUI.applicationEvents_Orbit: the event ids of the Orbit audit events this route raises. */
export const ApplicationEvents_Orbit = {
  ApplyFilters: '54f62806-9b67-4a96-bca6-1cd0f0b90f51',
  ApplySortBy: 'fae133ca-3809-49c9-956d-93b66d88e4b9',
  ClickEvent: '95a7ff45-c321-4ba0-b0b4-8c9c95e7d28a',
  ClickMilestone: '9547bf7f-8722-4025-858b-17ec5ca5f26b',
  SwitchMember: 'b04c43dd-331e-4dff-a1d6-c0b701802451',
} as const;

/** UBTConnect.type_MyCalendarEventSource.orbit: the MyCalendarEventSourceId of the My calendar navigation. */
export const Type_MyCalendarEventSource_Orbit = 'event-orbit';
