import {
  fetchUserIdToken,
  useEntertainingConfigQuery,
  type EntertainingConfig,
  type EntertainingConfigInputs,
} from '@/api/entertaining';
import { raiseToFlowHandler } from '@/platform/feedback/flowErrors';

/** The calls of Embedded_MyEntertaining, for its view. */
export interface EntertainingCalendarData {
  /** The answer of DataActionGetEntertainingConfig; undefined while it loads or after it failed (the skeleton stays). */
  config: EntertainingConfig | undefined;
  /** Action_RefreshToken: gets a new ID token and gives it to `applyIdToken` (RefreshEmbedTokenJS of the view). */
  refreshToken: (applyIdToken: (idToken: string) => void) => Promise<void>;
}

/** Action_RefreshToken: AppManager_Get_UserIdToken, then RefreshEmbedTokenJS. The action runs through
    safeExecuteClientAction (Embedded_MyEntertaining.mvc.js:1106-1110, OutSystems.js:17): an error goes to handleError,
    then the Calendar flow and App_Common show the message (`raiseToFlowHandler`, Calendar Q2 (a), user 2026-10-27), and
    the SDK keeps its token. A call that started runs to its end after the block closed: the view then has no
    configured SDK, so the token goes nowhere. */
async function refreshToken(applyIdToken: (idToken: string) => void): Promise<void> {
  try {
    applyIdToken(await fetchUserIdToken());
  } catch (e: unknown) {
    raiseToFlowHandler(e);
  }
}

/** @origin UBTConnect_EmbedMyEntertaining.Blocks.Embedded_MyEntertaining
    The calls of the calendar embed block. GetEntertainingConfig is fetched once when the block mounts, with the four
    block inputs (`useEntertainingConfigQuery` of `api/entertaining`); the view runs InitializeCalendar with the answer.
    A failed fetch keeps the skeleton and goes once to the block's handleError, then the Calendar flow and App_Common
    (Calendar F1, Q1 (a), user 2026-10-27): the query-cache subscription does it (installQueryErrorsToFlowHandler).
    The view calls `refreshToken` every 10 minutes while the calendar is open. */
export function useEntertainingCalendar(inputs: EntertainingConfigInputs): EntertainingCalendarData {
  const getConfig = useEntertainingConfigQuery(inputs);
  return { config: getConfig.data, refreshToken };
}
