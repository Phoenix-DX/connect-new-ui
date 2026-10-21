# Sign-in and PIN (UBTConnect TST)

Facts about how the original app signs in and locks. Evidence: auth trace of `batch_capture.cjs login --auto` on 2026-10-13
(`OS_AUTH_TRACE`), compiled scripts from `/UBTConnect/scripts/`, and the user (2026-10-13). Not yet checked with the
OutSystems MCP (see [context-001](../contexts/context-001-auto-login.md)).

## Flow

1. `/UBTConnect/Login` → button "Login with UBT One" → B2C `https://ubtb2cuat.b2clogin.com/…` (user + password).
2. B2C returns to `/UBT_AppManager/Callback`, which calls `UBT_AppManager/ActionAppManager_Login` and then forwards
   by itself. Navigating away before it forwards loses the session (the app asks to sign in again). [trace]
3. First sign-in in a browser → `/UBTConnect/PINRegister`. [trace; user]
4. `/UBTConnect/PINUnlock` appears only when the app locks after inactivity. [user]
   Registration starts the timer (`PIN_SessionInactivity_Start`, script `UBT_AppManager.PIN.InactivityTimer.mvc.js`). [compiled]

## PINRegister

- Screen `UBTConnect.App_PIN.PINRegister`, content block `UBTConnect.App_PIN.Block_PINRegister_ContentWrapper`,
  register block `UBT_AppManager.PIN.Pincode_Register`, keypad block `UBT_AppManager.PIN.PinCode`. [compiled]
- On-screen keypad (`.ubt-pincode__button` 0–9, erase), no input fields; 4 dots (`.selected-icon` filled,
  `.empty-icon` empty). [trace; compiled]
- PinCode: when the PIN reaches its length, `Validate`, then `DelayResetVariables` clears it after 500 ms; keys are
  disabled while the PIN is full (`ButtonsEnabled = Length(pincode) < Length`). [compiled]
- Pincode_Register `OnSetPin`: first entry → `PIN_ValidateRules`; valid → `ShowConfirm` (setTimeout 0), invalid →
  `PinRegistrationError(<rule message>)`. Second entry: same PIN → `LocalPin.PINCode`, `PIN_Set`,
  `PIN_SessionInactivity_Start`, `AppManager_SetPIN_HasUnlocked(True)`, `PinRegistrationSuccess`; different →
  `PinRegistrationError("Confirm PIN does not match Register PIN!")`. [compiled]
- Success (`Event_Pincode_RegisterPinRegistrationSuccess`): `IsFromMenu` → toast "Your PIN has been changed." →
  `/UBTConnect/Menu`. Otherwise `GetResumeLoginLink` → that URL if not empty, else client variable `LastURL` if not
  empty, else `/UBTConnect/HomeFeed`; sets `IsNavigateToHomeOnBack`. A sign-in that starts at `/UBTConnect/Login`
  therefore resumes at the Login screen after a successful registration. [compiled; trace]
- The screen also has a flow `AllowUpcomingNavigation` → `AppManager_Logout` → `/UBTConnect/Login`; its trigger is
  not identified (seen once after a PIN mismatch). [compiled; trace]
- The device keeps the PIN (`LocalPin`, `PIN_Set`). No service call appeared during the registration. It is not
  verified whether `PIN_Set` touches the server. [compiled; trace]
- Calls on load: `ActionAppManager_SynchAppContext`, `ActionAppManager_AfterInitialize`, `ActionSync_Info_GetMain`,
  `ActionGetUserInformation`, `ActionGetNumberUnreadMessages`, `ServiceAPIFetchData_CacheableHouseholds`,
  `ServiceAPIFetchData_CacheableMapEntities`. [trace]

## Public, no sign-in

- `/UBTConnect/moduleservices/moduleinfo`: manifest with every screen URL and script name. [trace; curl 200]
- `/UBTConnect/scripts/<Module>.<Flow>.<Name>.mvc.js`: compiled screens and blocks. [curl 200]
