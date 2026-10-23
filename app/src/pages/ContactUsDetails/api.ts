/* Server calls of ContactUsDetails ("P" = analysis/sources/pretty/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js).
   Both data actions are refreshed on demand by the controller (no fetch at start: one call each in calls.json), so
   they are plain calls run from the screen's event handlers, not queries:
   - DataAction_GetLocalityTimezone (P:1692-1718), refreshed by CacheControl_UserInfo_WrapperResult. OutSystems sends
     the screen variables; the recorded call has these names (the user's form data was dropped from the recording).
   - DataAction_GetCountriesNames (P:1720-1745), refreshed by ScreenEvent_OnReady when the user is not signed in.
   - SendContactUsMessage (P:1665-1690), a write: Out_ErrorMessage "" on success.
   The three calls are in the domain api/message; this module keeps the names that the screen uses. */
export {
  fetchCountryNames as dataAction_GetCountriesNames,
  fetchLocalityTimezone as dataAction_GetLocalityTimezone,
  sendContactUsMessage,
} from '@/api/message';
