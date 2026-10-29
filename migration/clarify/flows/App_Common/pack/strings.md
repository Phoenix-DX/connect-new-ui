# Pack of UI flow App_Common (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "ubt-zindex-2 connect-login-card"  ← Login.Value
- "margin-top-m heading5 text-neutral-8"  ← Title.Value
- ".layout .content"  ← ScrollTop2.Value
- "Skip to Content (Press Enter)"  ← LayoutWrapper.Value
- "Toggle the Menu"  ← MenuIcon.Value
- "Back to previous screen"  ← MenuIcon.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "We recommend you upgrade to the latest version."  ← UnsupportedVersion_Browser.Value, UnsupportedVersion_Native.Value, UnsupportedVersion_WebView.Value
- "We have noticed you are using an old version of Connect."  ← UnsupportedVersion_Native.Value
- "If you have any issues upgrading the Connect app, please uninstall and reinstall it."  ← UnsupportedVersion_Native.Value
- "We have noticed you are using an unsupported version of Android System Webview."  ← UnsupportedVersion_WebView.Value
- "App version"  ← ScreenEvent_OnReady.Value
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
- "ubt-lock-screen connect-legacy-compatibily-containter"  ← Block_PINUnlock.Value
- "No role validation found"  ← ShowExceptionMessage.Condition, ShowExceptionMessage.Text
- "Authorization has been denied for this request."  ← ShowExceptionMessage.Condition
- "Please make sure you have an active Connect plan. For further details, please refer to your regional helpdesk."  ← ShowExceptionMessage.Value
- "The operation has timed out"  ← ShowExceptionMessage.Condition
- "The connection has timed out"  ← ShowExceptionMessage.Condition
- "Request failed with an error"  ← ShowExceptionMessage.Condition
- "Request failed with 500 Internal Server Error"  ← ShowExceptionMessage.Condition
- "Request failed with 404 Not Found"  ← ShowExceptionMessage.Condition
- "Request failed with 400 Bad Request"  ← ShowExceptionMessage.Condition
- "The request is invalid"  ← ShowExceptionMessage.Condition
- "Resource not found"  ← ShowExceptionMessage.Condition
- "No HTTP resource"  ← ShowExceptionMessage.Condition
- "please install and enable google maps"  ← ShowExceptionMessage.Condition
- "distributed transaction"  ← ShowExceptionMessage.Condition
- "An error has occurred."  ← ShowExceptionMessage.Condition
- "We’re currently experiencing unusually high traffic, which may affect access to some services.<br>\nOur team is working to restore full functionality as quickly as possible.<br>\nThank you for your p…"  ← ShowExceptionMessage.Value
- "Service Interruption"  ← FeedbackMessage_AutoClose.Value, ShowExceptionMessage.Value
- "Error executing query"  ← ShowExceptionMessage.Condition
- "Temporarily Unavailable"  ← ShowExceptionMessage.Value
- "Something went wrong, please try again later"  ← ShowExceptionMessage.Value
- "The underlying connection was closed"  ← ShowExceptionMessage.Condition
- "We're sorry, but an unexpected error occurred while processing your request. Please try again later. If the problem persists, please contact your regional administrator."  ← ShowExceptionMessage.Value
- "Your paid subscription has expired"  ← ShowExceptionMessage.Condition
- "Subscription Status Update"  ← ShowExceptionMessage.Value
- "We're unable to log you in at this time"  ← ShowExceptionMessage.Condition
- "Access Unavailable"  ← ShowExceptionMessage.Value
- "Due to multiple unsuccessful login attempts"  ← ShowExceptionMessage.Condition
- "Account Access Restricted"  ← ShowExceptionMessage.Value
- "please log in again or check your active sessions"  ← ShowExceptionMessage.Condition
- "You've been logged out because your account is currently active on another device.\n<br> To continue, please log in again or check your active sessions."  ← ShowExceptionMessage.Value
- "Session Ended"  ← ShowExceptionMessage.Value
- "unable to create a Free subscription plan"  ← ShowExceptionMessage.Condition
- "\" + GetEntryEspaceName() +"  ← JSUtils_PageRedirect.Value
- "No internet connection. Please check your network settings and try again."  ← FeedbackMessage_AutoClose2.Value
- "We’re currently experiencing unusually high traffic, which may affect access to some services.\n\nOur team is working to restore full functionality as quickly as possible.\n\nThank you for your patie…"  ← FeedbackMessage_AutoClose.Value