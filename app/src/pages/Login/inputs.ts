/** The route inputs of Login, from the query string by their original names. The screen calls no server action of
    its own: SynchAppContext and Sync_Info_GetMain run at app start (platform/bootstrap), Get_RuntimeVersion in the
    shared Version block. The mock sign-in is `useSignIn` of platform/session (D3(a), U4).
    @origin UBTConnect.App_Common.Login */
export interface LoginInputs {
  /** True when the signed-out gate opened Login: OnInitialize keeps the sign-in callback location. */
  In_IsFromInvalidPermissions: boolean;
  /** True: OnInitialize runs AppManager_Logout, then the mock sign-in (Q2), unless the view cache restored Login. */
  In_IsFromResetPIN: boolean;
  /** Read by OnReady: DeviceAwareness_InvalidDevice skips DelayedMessage_Show. */
  CallbackType: string;
  /** Not read by the screen flows of the mock phase. */
  CallbackGUID: string;
}

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
