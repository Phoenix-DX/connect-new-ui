import { recordedHandler } from '../../../mocks/fixtures';

/* Recorded TST answer (policy documents are not person data). The recorded CacheTypeId and CacheKey are anonymised, so
   the inputs are not matched (otherwise every call logs "[mock] no recorded call"). This file is merged before the
   shell's equivalent entry, so it answers first. */
export const handlers = [
  recordedHandler('UBTConnect_Utils', 'CacheControl_Policies/DataActionGetCacheInfo', { matchInputs: false }),
];
