import type { RequestHandler } from 'msw';

/* SendContactMemberEmail (a write, never recorded) is one contract operation shared with the other ContactByEmail
   screen: it is mocked once, in src/shared/UBTConnect/ContactByEmailForm/mocks.ts (one collection of sent e-mails;
   CR-ContactByEmailMember-1, CR-ContactByEmailOneSchoolGlobal-1). The app-start calls of the capture are mocked by the
   shell (src/shell/mocks.ts). */
export const handlers: RequestHandler[] = [];
