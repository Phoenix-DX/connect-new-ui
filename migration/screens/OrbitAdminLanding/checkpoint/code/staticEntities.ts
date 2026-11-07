/* Static entities that this route reads and that are not in the shared Orbit lib. Values from
   migration/knowledge/static-entities-tst.json (TST moduleinfo). */

/** Connect2_OrbitMobile_MUI.menuAction.menu: the MenuAction that the block gives MenuIcon__UpdatedOSUI. */
export const MenuAction_Menu = 'Menu';

/** Connect2_OrbitMobile_MUI.applicationEvents_Orbit.clickEvent: the event id that OnApplicationEvent_ClickEvent
    raises. */
export const ApplicationEvents_Orbit_ClickEvent = '95a7ff45-c321-4ba0-b0b4-8c9c95e7d28a';

/** Connect2_OrbitMobile_MUI.orbitLandingFilter (Integer ids): the EventFilter of the block. */
export const OrbitLandingFilter = { UpcomingEvents: 1, PastEvents: 2 } as const;
