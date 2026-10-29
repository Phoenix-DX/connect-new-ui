# Pack of UI flow App_Notifications (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "ddd dd/MM/yyyy HH:mm tt"  ← Notification_Date.Value
- "To access your Private Messages,"  ← InitializeSetting.Value
- "please login to the"  ← InitializeSetting.Value
- "Connect App."  ← InitializeSetting.Value
- "CommunityHub App."  ← InitializeSetting.Value
- "Search notifications"  ← Search_PostScroll.Value, Search_PreScroll.Value
- "No results found for '"  ← If_HasNoNotifications.Value
- "Sorry, we couldn't find any results for your search. Please check your spelling or try different keywords."  ← If_HasNoNotifications.Value
- "Delete notification"  ← Notifications_ConfirmDialog.Value
- "Delete all notifications?"  ← Notifications_ConfirmDialog.Value
- "Are you sure you want to delete this notification? This action can't be undone."  ← Notifications_ConfirmDialog.Value
- "Are you sure you want to delete all notifications? This action can't be undone."  ← Notifications_ConfirmDialog.Value
- "full-width full-height"  ← Notifications_NoItemsFound.Value
- "No Notifications Found"  ← Notifications_NoItemsFound.Value
- "We were unable to find any Notifications to display."  ← Notifications_NoItemsFound.Value
- "Newest to Oldest"  ← Notifications_SortSheet.Value
- "Oldest to Newest"  ← Notifications_SortSheet.Value
- "Mark as unread"  ← ListItemNotification.Value
- "Mark as read"  ← ListItemNotification.Value
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
- "Sort by"  ← SortBy_Title.DefaultValue
- "Mark all as read"  ← MoreActionSheet.Value
- "Delete all notifications"  ← MoreActionSheet.Value
- ".layout .content"  ← ScrollTop2.Value
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "Example & Example"  ← GetSkeleton_UI_NotificationContent.Value
- "Example, Example"  ← GetSkeleton_UI_NotificationContent.Value