/* Client variables the shell keeps (app-shell.spec.md 9b), named `<Module>.<Variable>` like the original, with the
   compiled defaults of migration/shell/client-variables.md ("type default" = false, 0, "" or 1900-01-01).
   Persistence (decision U5): localStorage like the original, except PIN_HasUnlocked, which lives in sessionStorage so a
   new tab starts locked and a reload keeps the unlock (shell-observed U3: the original resets it when the tab has no
   `HasRenderedSplashInSession` session key).
   The server settings of AppManager_SynchAppContext (PIN_Use, OutSystems_Environment, ...) are not in this list: they
   live in the typed store platform/settings, and getClientVar reads them there by their OutSystems names
   (legacy/os/clientVarNames.ts). */
import type { SettingClientVarName, SettingClientVarValue } from '@/legacy/os/clientVarNames';

export const NO_DATE = '1900-01-01T00:00:00';

export const CLIENT_VAR_DEFAULTS = {
  'UBTConnect.LastURL': '',
  'UBTConnect.IsNavigateToHomeOnBack': false,
  'UBTConnect.App_Policies_HasPolicyToAccept': false,
  'UBTConnect.Bookmarks_IsSynched': false,
  'UBTConnect.Notes_IsSynched': false,
  /** Max recently clicked results kept per type (UBTConnect.clientVariables.js:74-76, default 10). */
  'UBTConnect.Search_RecenctClickedResultsLimit': 10,
  'UBTConnect.Notifications_IsSynched': false,
  'UBTConnect.Notifications_LastChecked': NO_DATE,
  'UBTConnect.Directory_Updates_UnreadCount': 0,
  'UBTConnect.Directory_Updates_UnreadCount_LastCheck': NO_DATE,
  'UBTConnect.Directory_Updates_UnreadCount_CheckFrequency_Minut': 5,
  'UBTConnect.Directory_Updates_MonthsToShow': 0,
  'UBTConnect.Embedd_B2CTenant': '',
  'UBTConnect.App_NetworkStatus_IsOnline_IsPersistent': true,
  'UBTConnect.PhotobookCarousel_SelectedSpeed': 0,
  'UBTConnect.App_PIN_BiometricEnabled': true,
  'UBTConnect.App_PIN_Header_FinalHeightPercentage': 90,
  'UBTConnect_Utils.App_SubscriptionPopUp': '',
  'UBTConnect_Utils.UniqueCacheKey': 'Unique',
  'UBT_AppManager.OutSystems_LastURL': '',
  'UBT_AppManager.AppManager_DelayedMessage': '',
  'UBT_AppManager.PIN_IsLocked': false,
  'UBT_AppManager.PIN_HasUnlocked': false,
  'UBT_AppManager.DeviceInfo_UUID': '',
  // Boolean, type default (UBT_AppManager.clientVariables.js:242-247; migration/shell/client-variables.md:74). The original
  // sets it from AppManager_MobileContext.isNativeDevice in AppManager_SetDeviceContext (UBT_AppManager.controller.js:
  // 4418-4419); the clone's device context is never native (deviceContext.ts), so it stays false in the browser.
  'UBT_AppManager.DeviceInfo_IsNative': false,
  // JSON of AppManager_CachedUserInfoRec, written by AppManager_SetCachedUserInfo (AM:4355-4375)
  'UBT_AppManager.AppManager_UserExtended': '',
  // Connect2_LegacyShared.clientVariables.js (migration/runtime-sources/, :8-24): Long Integer, type default 0
  'Connect2_LegacyShared.UnreadNotificationsNumber': 0,
  'Connect2_LegacyShared.UnreadPublicMessagesNumber': 0,
  'Connect2_LegacyShared.UnreadWhatsNewsNumber': 0, // CR-MessageDetail-1
  // Connect2_OrbitMobile_MUI.clientVariables.js (migration/runtime-sources/, fetched 2026-10-17, :8-19): Integer, no
  // compiled default (getVariable without a 4th argument) → type default 0; SetBookletMaxRows fills them from the
  // server (CR-EventBooklet-1).
  'Connect2_OrbitMobile_MUI.BookletGuestsMaxRows': 0,
  'Connect2_OrbitMobile_MUI.BookletHelpersMaxRows': 0,
} satisfies Record<string, string | number | boolean>;

type Defaults = typeof CLIENT_VAR_DEFAULTS;
/** A client variable kept by this module in storage. */
export type StoredClientVarName = keyof Defaults;
/** A name that getClientVar accepts: a stored client variable or a server setting (platform/settings). */
export type ClientVarName = StoredClientVarName | SettingClientVarName;
export type ClientVarValue<N extends ClientVarName> = N extends SettingClientVarName
  ? SettingClientVarValue<N>
  : N extends StoredClientVarName
    ? Defaults[N] extends string
      ? string
      : Defaults[N] extends number
        ? number
        : boolean
    : never;

export const SESSION_SCOPED: ReadonlySet<StoredClientVarName> = new Set<StoredClientVarName>([
  'UBT_AppManager.PIN_HasUnlocked',
]);

/** The original keeps variables whose name ends with `_IsPersistent` after a logout (AM:4176-4194). */
export const survivesLogout = (name: string): boolean => name.endsWith('_IsPersistent');

export const isStoredClientVarName = (name: string): name is StoredClientVarName => name in CLIENT_VAR_DEFAULTS;
