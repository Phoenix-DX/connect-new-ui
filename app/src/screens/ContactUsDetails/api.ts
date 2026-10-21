import { callAction } from '../../lib/api';
import { osList } from '../../lib/os-wire';
import type {
  CountryName,
  GetLocalityTimezoneInputWire,
  LocalityTimezone,
  SendContactUsMessageInputWire,
  UI_ContactUsForm,
} from './types';

/* Server calls of ContactUsDetails ("P" = analysis/sources/pretty/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js).
   Both data actions are refreshed on demand by the controller (no fetch at start: one call each in calls.json), so
   they are plain calls run from the screen's event handlers, not queries. */

/** DataAction_GetLocalityTimezone (P:1692-1718), refreshed by CacheControl_UserInfo_WrapperResult. OutSystems sends the
    screen variables; the recorded call has these names (the user's form data was dropped from the recording). */
export async function dataAction_GetLocalityTimezone(
  screenVariables: GetLocalityTimezoneInputWire,
): Promise<LocalityTimezone> {
  const out = await callAction(
    'UBTConnect',
    'ContactUsDetails/DataActionDataAction_GetLocalityTimezone',
    screenVariables,
  );
  return { timezoneName: out.Out_TimezoneName, timezoneOffset: out.Out_TimezoneOffset };
}

/** DataAction_GetCountriesNames (P:1720-1745), refreshed by ScreenEvent_OnReady when the user is not signed in. */
export async function dataAction_GetCountriesNames(screenVariables: Record<string, unknown>): Promise<CountryName[]> {
  const out = await callAction(
    'UBTConnect',
    'ContactUsDetails/DataActionDataAction_GetCountriesNames',
    screenVariables,
  );
  return osList(out.Countries).map((c) => ({ code: c.Code, name: c.Name }));
}

/** SendContactUsMessage (P:1665-1690), a write: Out_ErrorMessage "" on success. */
export async function sendContactUsMessage(
  in_ContactUsForm: UI_ContactUsForm,
  in_ContactSubjectId: string,
  rate: number,
  rate_UserWantToBeContacted: boolean,
): Promise<{ out_ErrorMessage: string }> {
  const inputs: SendContactUsMessageInputWire = {
    In_ContactUsForm: in_ContactUsForm,
    In_ContactSubjectId: in_ContactSubjectId,
    Rate: rate,
    Rate_UserWantToBeContacted: rate_UserWantToBeContacted,
  };
  const out = await callAction('UBTConnect', 'ServiceAPISendContactUsMessage', inputs);
  return { out_ErrorMessage: out.Out_ErrorMessage };
}
