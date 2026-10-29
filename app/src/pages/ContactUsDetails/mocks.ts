import { http, HttpResponse, type RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { fixtureData } from '@/mocks/fixtures';
import { mockDelay, scenario } from '@/mocks/scenario';
import { collection } from '@/mocks/store';
import { mockDirectoryUser } from '@/platform/session/mockUser';

/* ContactUsDetails mocks (route-spec.md "Data"). The app-start calls and CacheControl_UserInfo's GetCacheInfo are the
   shell's (src/shell/mocks.ts).
   - GetLocalityTimezone: the server reads In_LocalityId from the screen variable LocalCacheControl_UserInformation
     (report App_Menu_ContactUs row 038, decision Q4 (a)). The mock reads the same id. The mock user's locality
     (Bahia Blanca, Argentina: platform/session/mockUser.ts) answers Argentina's time zone (ART, UTC-3, the values of
     src/mocks/fictional/ldm.ts). Any other id, or a call without the record, answers the only TST recording
     (fixture 01; its subject is anonymised).
   - GetCountriesNames: never recorded (only signed out). The answer is a short list of real country names with their
     ISO codes (place names keep their real value, mock-rules.json), sorted by name. The order and the codes of the
     real Connect_Geography list are not known.
   - SendContactUsMessage is a write (P-MUTATION): the message is kept in an in-memory collection, never sent to a real
     server; the answer has the contract's shape with Out_ErrorMessage "" (success). Scenario error → HTTP 500.
   - Scenario `security` (?mock=security, G1 of migration/refactor/followups.md): both data actions answer a
     SecurityException, so the App_Common SecurityException branch (legacy/os/exceptions.ts raiseToFlowHandler) can be
     tried by hand. Signed in, GetLocalityTimezone fails: the toast, the logout, then a full load of Login. Signed out,
     GetCountriesNames fails: Login with In_IsFromInvalidPermissions = True, and ContactUsDetails is the sign-in
     callback. The answer is the contract's error answer that contractHandler sends for a thrown SecurityException
     (src/mocks/contract.ts). No TST capture has a SecurityException, so the message is fictional. Every other scenario
     falls through to the handlers below. */
const sentMessages = collection('ContactUsDetails.sentMessages', () => []);

/** Get_Core_LocalityTimezone of an Argentine locality: Abbreviation, OffsetSeconds. */
const ARGENTINA_TIME_ZONE = { Out_TimezoneName: 'ART', Out_TimezoneOffset: -10800 };

/** Connect_Geography_CS CS_CountryName rows (Code, Name) of the signed-out Country list. */
const COUNTRY_NAMES = [
  { Code: 'AR', Name: 'Argentina' },
  { Code: 'AU', Name: 'Australia' },
  { Code: 'BR', Name: 'Brazil' },
  { Code: 'CA', Name: 'Canada' },
  { Code: 'CL', Name: 'Chile' },
  { Code: 'NZ', Name: 'New Zealand' },
  { Code: 'GB', Name: 'United Kingdom' },
  { Code: 'US', Name: 'United States' },
];

const SECURITY_SCENARIO = 'security';
const SECURITY_MESSAGE = 'You do not have access to this information.';

/** The scenario `security` for one data action of ContactUsDetails; any other scenario falls through. */
const securityExceptionAnswer = (action: string): RequestHandler =>
  http.post(`/api/UBTConnect/ContactUsDetails/${action}`, async () => {
    if (scenario() !== SECURITY_SCENARIO) return undefined;
    await mockDelay();
    return HttpResponse.json({ error: SECURITY_MESSAGE, exception: 'SecurityException' }, { status: 500 });
  });

export const handlers: RequestHandler[] = [
  securityExceptionAnswer('DataActionDataAction_GetLocalityTimezone'),
  securityExceptionAnswer('DataActionDataAction_GetCountriesNames'),
  contractHandler('UBTConnect', 'ContactUsDetails/DataActionDataAction_GetLocalityTimezone', (inputs) => {
    const localityId =
      inputs.LocalCacheControl_UserInformation?.Directory_UserCurrent.Directory_UserCurrent_Geography.Locality_Id;
    if (localityId !== undefined && localityId === mockDirectoryUser().Directory_UserCurrent_Geography.Locality_Id)
      return ARGENTINA_TIME_ZONE;
    return fixtureData(
      'UBTConnect',
      'ContactUsDetails/DataActionDataAction_GetLocalityTimezone',
    ) as typeof ARGENTINA_TIME_ZONE;
  }),
  contractHandler('UBTConnect', 'ContactUsDetails/DataActionDataAction_GetCountriesNames', () => ({
    Countries: { List: COUNTRY_NAMES },
  })),
  contractHandler('UBTConnect', 'ServiceAPISendContactUsMessage', (inputs) => {
    sentMessages.upsert({
      Id: '',
      In_ContactSubjectId: inputs.In_ContactSubjectId,
      In_ContactUsForm: inputs.In_ContactUsForm,
      Rate: inputs.Rate,
      Rate_UserWantToBeContacted: inputs.Rate_UserWantToBeContacted,
    });
    return { Out_ErrorMessage: '' };
  }),
];
