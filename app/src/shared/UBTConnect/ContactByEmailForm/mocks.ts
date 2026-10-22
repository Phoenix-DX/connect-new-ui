import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { collection } from '@/mocks/store';

/* UBTConnect SendContactMemberEmail (service action), the Send of the screens ContactByEmailMember and
   ContactByEmailOneSchoolGlobal: the contract merges their two screen services
   (screenservices/UBTConnect/ContactFlow/ContactByEmailMember/ServiceAPISendContactMemberEmail and
   …/ContactByEmailOneSchoolGlobal/ServiceAPISendContactMemberEmail, openapi.yaml x-os-paths) into one operation, so it
   is mocked once, here (CR-ContactByEmailMember-1, CR-ContactByEmailOneSchoolGlobal-1). A write, never recorded
   (migration/knowledge/mock-fixtures.md, "Writes"; CLAUDE.md rule 6): each sent form goes to one in-memory collection
   of the mock user's sent e-mails (P-MUTATION; the two routes' former collections merged, as the server action receives
   the same In_UI_ContactByEmailForm from both and cannot tell them apart) and the answer is the action's empty output;
   nothing in the app reads the sent mails back. Scenario `error` answers HTTP 500 (contractHandler), `loading` never
   answers. */
export const sentContactMemberEmails = () => collection('UBTConnect.sentContactMemberEmails', () => [], 'Id');

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'ServiceAPISendContactMemberEmail', ({ In_UI_ContactByEmailForm }) => {
    sentContactMemberEmails().upsert({ Id: '', ...In_UI_ContactByEmailForm });
    return {};
  }),
];
