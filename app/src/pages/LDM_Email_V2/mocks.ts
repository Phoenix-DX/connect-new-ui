import type { RequestHandler } from 'msw';
import { contractHandler } from '@/mocks/contract';
import {
  coordinatorDetails,
  emptyCoordinatorDetails,
  ldmEventById,
  ldmEventByHostId,
  ldmEventName,
} from '@/mocks/fictional/ldm';
import { collection } from '@/mocks/store';

/* The route was not captured (no-capture, user 2026-10-16) and its calls never recorded: fictional data from the shared
   LDM world (src/mocks/fictional/ldm.ts) in the contract's shapes (Q1 → A pending). The meal is found by In_EventId,
   else by In_EventHostId; it answers the coordinator of the host's locality and the meal's name (the Subject is
   "<meal name> - <date>"). An unknown meal answers Out_HasContent False ("No Event Organiser information.").
   EventContact is a write, never recorded (migration/knowledge/mock-fixtures.md "Writes"; CLAUDE.md rule 6): each sent
   request goes to one in-memory collection (P-MUTATION) and the answer is the action's empty output; nothing in the app
   reads it back. Scenarios (contractHandler): real; loading (never answers: the list-updating loader); error (HTTP 500:
   the NetworkWarning of GetCoordinatorDetails, or the flow handler for EventContact). */

const MODULE = 'Connect2_OrbitMobile_MUI';

export const sentEventContactEmails = () =>
  collection('Connect2_OrbitMobile_MUI.sentEventContactEmails', () => [], 'Id');

export const handlers: RequestHandler[] = [
  contractHandler(
    MODULE,
    'ScreenBlock_Event_Email_V2/DataActionGetCoordinatorDetails',
    ({ In_EventId, In_EventHostId }) => {
      const e = ldmEventById(In_EventId ?? '') ?? ldmEventByHostId(In_EventHostId ?? '');
      if (!e)
        return {
          Out_CoordinatorDetails: { GetCoordinatorDetailsResponse: emptyCoordinatorDetails() },
          Out_HasContent: false,
          EventName: '',
        };
      return {
        Out_CoordinatorDetails: { GetCoordinatorDetailsResponse: coordinatorDetails(e) },
        Out_HasContent: true,
        EventName: ldmEventName(e),
      };
    },
  ),
  contractHandler(MODULE, 'ActionEventContact', ({ UserContactRequest }) => {
    sentEventContactEmails().upsert({ Id: '', ...UserContactRequest });
    return {};
  }),
];
