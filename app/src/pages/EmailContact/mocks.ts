import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { orbitContactRecipients } from '@/mocks/fictional/orbit';
import { collection } from '@/mocks/store';

/* No call was captured (no-capture.json; the form is never sent to TST: CLAUDE.md rule 6). SendContactEmail of
   ScreenBlock_ContactForm (`Connect2_OrbitMobile_MUI/ActionSendContactEmail`) is a write, never recorded
   (migration/knowledge/mock-fixtures.md "Writes", EmailContact Q1 → A pending): each sent e-mail goes to the in-memory
   collection of the mock user's Orbit contact e-mails that the helpdesk and host contact routes also fill (same store
   key), with the recipient the server would pick from the shared Orbit world (orbit.ts orbitContactRecipients): the
   event's helpdesk when IsContactHelpdesk, else EmailInfo.HostEmail. A helpdesk e-mail for an event without a helpdesk
   address is not stored and answers IsSuccess False (the block's "There is currently no helpdesk email…" branch).
   Scenarios (contractHandler): real; loading (never answers: the button keeps loading); error (HTTP 500: the flow
   handler). */
export const sentOrbitContactEmails = () => collection('UBTConnect.sentOrbitContactEmails', () => [], 'Id');

export const handlers: RequestHandler[] = [
  contractHandler('Connect2_OrbitMobile_MUI', 'ActionSendContactEmail', (inputs) => {
    const helpdesk = orbitContactRecipients().find((r) => r.EventId === inputs.EventId)?.HelpdeskEmail ?? '';
    const to = inputs.IsContactHelpdesk ? helpdesk : inputs.EmailInfo.HostEmail;
    if (to === '') return { IsSuccess: false };
    sentOrbitContactEmails().upsert({ Id: '', To: to, ...inputs });
    return { IsSuccess: true };
  }),
];
