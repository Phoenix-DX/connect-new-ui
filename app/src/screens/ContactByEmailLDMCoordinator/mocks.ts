import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import { collection } from '@/mocks/store';

/* The route was not captured (no-capture, user 2026-10-16). Its data are its inputs (LDM_EventDetail_V2 passes the
   coordinator of the shared LDM world, src/mocks/fictional/ldm.ts). SendContactLDMCoordinatorEmail is a write, never
   recorded (migration/knowledge/mock-fixtures.md "Writes"; CLAUDE.md rule 6): each sent form goes to one in-memory
   collection of the mock user's e-mails to an LDM coordinator (P-MUTATION, Q1 → A pending) and the answer is the
   action's empty output; nothing in the app reads it back. Scenarios (contractHandler): real; loading (never answers:
   the form stays loading); error (HTTP 500: the ContactFlow handler). */
export const sentContactLDMCoordinatorEmails = () =>
  collection('UBTConnect.sentContactLDMCoordinatorEmails', () => [], 'Id');

export const handlers: RequestHandler[] = [
  contractHandler('UBTConnect', 'ServiceAPISendContactLDMCoordinatorEmail', ({ In_UI_ContactByEmailForm }) => {
    sentContactLDMCoordinatorEmails().upsert({ Id: '', ...In_UI_ContactByEmailForm });
    return {};
  }),
];
