/* Static entities this route reads that are not in the shared Orbit lib. Values from
   migration/knowledge/static-entities-tst.json (TST moduleinfo). */

/** Connect2_OrbitMobile_MUI.orbitEventType (Text identifier): Is Event Host? (ScreenBlock_EventDetail.mvc.js :1857)
    and the host / admin rows of the view (:552, :778). */
export const OrbitEventType = {
  EventAdmin: 'event-admin',
  EventGuest: 'event-guest',
  EventHelper: 'event-helper',
  EventHost: 'event-host',
} as const;

/** Connect2_OrbitMobile_MUI.surveyStatus: the Integer Id of a LocalSurveyStatus record (the model reads each value as
    TextToInteger of its record, Connect2_OrbitMobile_MUI.model.js:18659-18686). */
export const SurveyStatus = { UnableToHost: 1, Confirmed: 2, Sent: 3, Pending: 4 } as const;

/** Connect2_OrbitMobile_MUI.menuAction.auto: the MenuAction the block passes to MenuIcon__UpdatedOSUI (view :352-356). */
export const MenuAction_Auto = 'Auto';

/** Connect2_OrbitMobile_MUI.applicationEvents_Orbit.generateQRCode: the audit event of OnClick_GenerateQRCode. */
export const ApplicationEvents_Orbit_GenerateQRCode = 'a261041f-500f-4671-b87b-bb07207c0a75';
