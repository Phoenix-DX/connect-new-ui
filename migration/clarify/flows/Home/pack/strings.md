# Pack of UI flow Home (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Document not found"  ← HandleDownloadOnDownloadError.Condition
- "The file you are trying to open is no longer available and cannot be opened."  ← HandleDownloadOnDownloadError.Value
- "Unfortunately this file could not be opened. Please try again at a later time."  ← HandleDownloadOnDownloadError.Value
- "Community Population"  ← FeedBlock_CommunityPopulation.Value
- "Add Service"  ← ListAppend3.Value
- "Community Tradelink"  ← OnClick_Service.Value
- "El Gusto"  ← OnClick_Service.Value
- "This feature will be coming soon."  ← FeedbackMessage_AutoClose.Value
- "Coming soon"  ← FeedbackMessage_AutoClose.Value
- "Send gift"  ← Event_SendGift.Message
- "Loadin Name"  ← ListAppend.Value
- "Loadinf Location"  ← ListAppend.Value
- "Subscription upgrade required"  ← DoesntHaveAccess.Value
- "View all"  ← ShowViewAll2.Value
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
- "No change today"  ← Directory_CommunityNumbers.Value
- ".layout .content"  ← ScrollTop2.Value
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value