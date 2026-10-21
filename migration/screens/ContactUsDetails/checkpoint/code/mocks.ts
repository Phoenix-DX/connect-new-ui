import type { RequestHandler } from 'msw';
import { contractHandler } from '../../mocks/contract';
import { recordedHandler } from '../../mocks/fixtures';
import { collection } from '../../mocks/store';

/* ContactUsDetails mocks (route-spec.md "Data"). The app-start calls and CacheControl_UserInfo's GetCacheInfo are the
   shell's (src/shell/mocks.ts).
   - GetLocalityTimezone: the only recording; its inputs are screen variables with an anonymised subject, so matchInputs
     is off.
   - GetCountriesNames: never recorded (only signed out, Q1 → A): a fictional empty list.
   - SendContactUsMessage is a write (P-MUTATION): the message is kept in an in-memory collection, never sent to a real
     server; the answer has the contract's shape with Out_ErrorMessage "" (success). Scenario error → HTTP 500. */
const sentMessages = collection('ContactUsDetails.sentMessages', () => []);

export const handlers: RequestHandler[] = [
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
