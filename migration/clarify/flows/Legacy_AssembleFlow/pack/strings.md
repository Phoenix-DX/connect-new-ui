# Pack of UI flow Legacy_AssembleFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "We have noticed you are using an unsupported version of Android System Webview."  ← UnsupportedVersion_WebView.Value
- "We recommend you upgrade to the latest version."  ← UnsupportedVersion_Browser.Value, UnsupportedVersion_Native.Value, UnsupportedVersion_WebView.Value
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Enter your PIN code"  ← UnlockText.DefaultValue
- "Pin does not match"  ← Event_Pincode_PinUnlockError.Value
- "User not found"  ← Event_Pincode_PinUnlockError.Value
- "Your current PIN is not correct!"  ← Event_Pincode_PinUnlockError.Value
- "No matching user. Please Register a PIN"  ← Event_Pincode_PinUnlockError.Value
- "border-bottom-s border-color-neutral-0"  ← Block_PINUnlock_ContentWrapper.Value
- "Forgot PIN?"  ← Block_PINUnlock_ContentWrapper.Value
- "Terms & Conditions"  ← Block_PINUnlock_ContentWrapper.Value
- "Our Privacy Policy"  ← Block_PINUnlock_ContentWrapper.Value
- ".layout .content"  ← ScrollTop2.Value
- "ubt-lock-screen connect-legacy-compatibily-containter"  ← Block_PINUnlock.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "We have noticed you are using an old version of Connect."  ← UnsupportedVersion_Native.Value
- "If you have any issues upgrading the Connect app, please uninstall and reinstall it."  ← UnsupportedVersion_Native.Value