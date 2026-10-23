import { MOCKS_BUILT } from '@/platform/config/config';
import { scenario } from '@/mocks/scenario';

/* Kept apart from actions.ts so that the entry (the PIN lock dialog) and Login do not pull the bookmark and update
   domains that actions.ts imports. */

/** Outputs of Get_IsUnsupportedVersion. */
export interface IsUnsupportedVersion {
  Out_IsUnsupportedAppVersion: boolean;
  Out_IsUnsupportedWebViewVersion: boolean;
  Out_IsUnsupportedBrowserVersion: boolean;
}

/** Mock scenario that shows the unsupported-browser card (decision U16): `?mock=unsupported-browser`. */
export const UNSUPPORTED_BROWSER_SCENARIO = 'unsupported-browser';

/** Get_IsUnsupportedVersion (UnsupportedVersion_Wrapper OnInitialize): native app, WebView or browser version below
    the minimum versions of the app settings (spec section 9 "Unsupported version", UC:4531-4589, 17351-17368). TST
    has no minimum versions (shell-observed U2), so every output is False; decision U16 builds the Browser variant as a
    mock scenario only, switched on by `?mock=unsupported-browser` (mock builds only: MOCKS_BUILT drops it from production). */
export function get_IsUnsupportedVersion(): IsUnsupportedVersion {
  return {
    Out_IsUnsupportedAppVersion: false,
    Out_IsUnsupportedWebViewVersion: false,
    Out_IsUnsupportedBrowserVersion: MOCKS_BUILT && scenario() === UNSUPPORTED_BROWSER_SCENARIO,
  };
}

/** Get_IsUnsupportedSystem (UC:4518-4545): Out_IsUnsupportedSystem = unsupported app version or
    unsupported browser version of Get_IsUnsupportedVersion (the WebView version is not included). */
export function get_IsUnsupportedSystem(): boolean {
  const v = get_IsUnsupportedVersion();
  return v.Out_IsUnsupportedAppVersion || v.Out_IsUnsupportedBrowserVersion;
}
