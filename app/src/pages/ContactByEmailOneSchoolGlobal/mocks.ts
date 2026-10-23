import type { RequestHandler } from 'msw';

/* SendContactMemberEmail (a write, never recorded) is one contract operation shared with the other ContactByEmail
   screen: it is mocked once, in src/components/contact/ContactEmailForm/mocks.ts (one collection of sent e-mails;
   CR-ContactByEmailMember-1, CR-ContactByEmailOneSchoolGlobal-1). The app-start calls of the capture are mocked by
   platform/bootstrap (src/platform/bootstrap/mocks.ts). */
export const handlers: RequestHandler[] = [];
