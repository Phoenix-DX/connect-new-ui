import type { RequestHandler } from 'msw';
import { contractHandler } from '../../mocks/contract';
import { collection } from '../../mocks/store';

/* The route was not captured (no-capture, user 2026-10-16) and no screen links to it: its data are its inputs. The
   review URL uses a fictional household of the shared LDM world (src/mocks/fictional/ldm.ts; route-spec.md "Decisions
   to confirm"). UserContactUser is a write, never recorded (migration/knowledge/mock-fixtures.md "Writes"; CLAUDE.md
   rule 6): each sent request goes to one in-memory collection of the mock user's e-mails to a household (P-MUTATION,
   Q1 → A pending) and the answer is the action's empty output; nothing in the app reads it back. Scenarios
   (contractHandler): real; loading (never answers: the button keeps loading); error (HTTP 500: the flow handler). */
export const sentUserContactUserEmails = () =>
  collection('Connect2_LegacyShared.sentUserContactUserEmails', () => [], 'Id');

export const handlers: RequestHandler[] = [
  contractHandler('Connect2_LegacyShared', 'ActionUserContactUser', ({ UserContactRequest }) => {
    sentUserContactUserEmails().upsert({ Id: '', ...UserContactRequest });
    return {};
  }),
];
