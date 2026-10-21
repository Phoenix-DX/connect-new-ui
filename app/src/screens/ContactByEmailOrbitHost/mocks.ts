import type { RequestHandler } from 'msw';
import { contractHandler } from '../../mocks/contract';
import { ORBIT_HELPDESK_EMAIL } from '../../mocks/fictional/orbit';
import { collection } from '../../mocks/store';

/* The route was not captured (no-capture, user 2026-10-16). Its data are its inputs (MilestoneDetail's meal blocks
   would pass the host of the shared Orbit world, src/mocks/fictional/orbit.ts, HostEmail on example.com).
   SendContactEmail (`UBTConnect/ActionSendContactEmail`) is a write, never recorded (migration/knowledge/mock-fixtures.md
   "Writes"; CLAUDE.md rule 6): the same rule as ContactByEmailOrbitHelpdesk/mocks.ts (no import across routes; MSW
   answers with the first registered of the two identical handlers): each e-mail goes to the in-memory collection
   `UBTConnect.sentOrbitContactEmails` with the recipient the server would pick (EmailInfo.HostEmail for a host,
   ORBIT_HELPDESK_EMAIL for the helpdesk; Q1 → A pending) and the answer is IsSuccess True. Scenarios
   (contractHandler): real; loading (never answers: the button stays loading); error (HTTP 500: the ContactFlow
   handler). */
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
