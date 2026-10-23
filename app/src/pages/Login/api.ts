import type { LoginInputs } from './types';

/* The Login screen calls no server action itself: SynchAppContext and Sync_Info_GetMain run at app start (shell
   AppStart), Get_RuntimeVersion in the shared Version block (analysis/calls.json). The mock sign-in is the shell's
   `useSignIn` (D3(a)/U4). */

/** OutSystems Boolean input from the query string ("True"/"False", any case). */
const osBoolean = (value: string | null): boolean => value?.toLowerCase() === 'true';

/** Screen inputs with their OutSystems defaults (False, ""). */
export function readLoginInputs(params: URLSearchParams): LoginInputs {
  return {
    In_IsFromInvalidPermissions: osBoolean(params.get('In_IsFromInvalidPermissions')),
    In_IsFromResetPIN: osBoolean(params.get('In_IsFromResetPIN')),
    CallbackType: params.get('CallbackType') ?? '',
    CallbackGUID: params.get('CallbackGUID') ?? '',
  };
}
