# Pack of UI flow App_Menu (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Your update photo request has been submitted."  ← OnClick_MenuOption.Message
- "Go to"  ← OnClick_MenuOption.Message
- "If(MenuItemId = Entities.Connect_Menu_Items.SubscriptionAndPayments,\"Dummy\",\"\")"  ← ScreenEvent_OnInitialize.Value
- "MenuItemId = Entities.Connect_Menu_Items.SubscriptionAndPayments"  ← ScreenEvent_OnInitialize.Value
- "MenuItemId = Entities.Connect_Menu_Items.RequestPhotoUpdate"  ← ScreenEvent_OnInitialize.Value
- "Edit your account"  ← Header.Value
- "Photo Request?"  ← Popup_SubmitPhotoRequest.Value
- "Are you sure you wish to request a photo update?"  ← Popup_SubmitPhotoRequest.Value
- "Change PIN"  ← ChangePinName.DefaultValue
- "Biometric Login"  ← BiometricLoginName.DefaultValue
- "Sign in with Fingerprint or Face Recognition authentication"  ← ListAppend2.Value
- "Terms and Conditions"  ← TermsAndConditionsName.DefaultValue
- "Privacy Policy"  ← PrivacyPolicyName.DefaultValue
- "Enter your PIN code"  ← UnlockText.DefaultValue
- "Pin does not match"  ← Event_Pincode_PinUnlockError.Value
- "User not found"  ← Event_Pincode_PinUnlockError.Value
- "Your current PIN is not correct!"  ← Event_Pincode_PinUnlockError.Value
- "No matching user. Please Register a PIN"  ← Event_Pincode_PinUnlockError.Value
- "border-bottom-s border-color-neutral-0"  ← Block_PINUnlock_ContentWrapper.Value
- "Forgot PIN?"  ← Block_PINUnlock_ContentWrapper.Value
- "Terms & Conditions"  ← Block_PINUnlock_ContentWrapper.Value
- "Our Privacy Policy"  ← Block_PINUnlock_ContentWrapper.Value
- "We have noticed you are using an old version of Connect."  ← UnsupportedVersion_Native.Value
- "We recommend you upgrade to the latest version."  ← UnsupportedVersion_Browser.Value, UnsupportedVersion_Native.Value, UnsupportedVersion_WebView.Value
- "If you have any issues upgrading the Connect app, please uninstall and reinstall it."  ← UnsupportedVersion_Native.Value
- "We have noticed you are using an unsupported version of Android System Webview."  ← UnsupportedVersion_WebView.Value
- "ubt-lock-screen connect-legacy-compatibily-containter"  ← Block_PINUnlock.Value
- "App version"  ← ScreenEvent_OnReady.Value
- ".layout .content"  ← ScrollTop2.Value
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value