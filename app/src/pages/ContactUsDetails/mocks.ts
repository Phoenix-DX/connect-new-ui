import { http, HttpResponse, type RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { recordedHandler } from '@/mocks/fixtures';
import { mockDelay, scenario } from '@/mocks/scenario';
import { collection } from '@/mocks/store';

/* ContactUsDetails mocks (route-spec.md "Data"). The app-start calls and CacheControl_UserInfo's GetCacheInfo are the
   shell's (src/shell/mocks.ts).
   - GetLocalityTimezone: the only recording; its inputs are screen variables with an anonymised subject, so matchInputs
     is off.
   - GetCountriesNames: never recorded (only signed out, Q1 → A): a fictional empty list.
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
  recordedHandler('UBTConnect', 'ContactUsDetails/DataActionDataAction_GetLocalityTimezone', { matchInputs: false }),
  contractHandler('UBTConnect', 'ContactUsDetails/DataActionDataAction_GetCountriesNames', () => ({
    Countries: { List: [] },
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
