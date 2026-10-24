import { recordedHandler } from '@/mocks/fixtures';

/* Recorded TST answer (non-person data). The recorded CacheTypeId is anonymised, so the inputs are not matched. */
export const handlers = [
  recordedHandler('UBTConnect_Utils', 'CacheControl_AllLocalities/DataActionGetCacheInfo', { matchInputs: false }),
];
