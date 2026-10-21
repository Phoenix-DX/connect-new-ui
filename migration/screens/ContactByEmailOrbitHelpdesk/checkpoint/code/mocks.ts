import type { RequestHandler } from 'msw';
import { contractHandler } from '../../mocks/contract';
import { ORBIT_HELPDESK_EMAIL } from '../../mocks/fictional/orbit';
import { collection } from '../../mocks/store';

/* No call was captured (the form was not sent: CLAUDE.md rule 6). SendContactEmail (`UBTConnect/ActionSendContactEmail`,
   shared with ContactByEmailOrbitHost, the one handler for both screens) is a write, never recorded
   (migration/knowledge/mock-fixtures.md "Writes"): each sent e-mail goes to one in-memory collection of the mock user's
   Orbit contact e-mails with the recipient the server would pick (Q2 → A pending): the Orbit Helpdesk
   (src/mocks/fictional/orbit.ts ORBIT_HELPDESK_EMAIL) when IsContactHelpdesk, else the host's EmailInfo.HostEmail.
   The answer is IsSuccess True; nothing in the app reads the collection back. Scenarios (contractHandler): real;
   loading (never answers: the button stays loading); error (HTTP 500: the ContactFlow handler). */
export const sentOrbitContactEmails = () => collection('UBTConnect.sentOrbitContactEmails', () => [], 'Id');

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'ActionSendContactEmail', (inputs) => {
    sentOrbitContactEmails().upsert({
      Id: '',
      To: inputs.IsContactHelpdesk ? ORBIT_HELPDESK_EMAIL : inputs.EmailInfo.HostEmail,
      ...inputs,
    });
    return { IsSuccess: true };
  }),
];
