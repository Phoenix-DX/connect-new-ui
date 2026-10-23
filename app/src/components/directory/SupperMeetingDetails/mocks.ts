import type { RequestHandler } from 'msw';
import { recordedHandler } from '@/mocks/fixtures';

/* Recorded (non-person: a supper meeting card), answered for any In_SubdivsionId. */
export const handlers: RequestHandler[] = [
  recordedHandler('UBTConnect', 'SupperMeeting_DetailsBlock/DataActionGetSubdivision', { matchInputs: false }),
];
