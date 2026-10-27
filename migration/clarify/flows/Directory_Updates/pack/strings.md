# Pack of UI flow Directory_Updates (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Search updates"  ← Search_PostScroll.Value, Search_PreScroll.Value
- "Filter by status"  ← FilterByStatus_Title.DefaultValue
- "Read Only"  ← OnInitialize.Value
- "Unread Only"  ← OnInitialize.Value
- "All Updates"  ← OnInitialize.Value
- "Newest to Oldest"  ← Directory_Updates_FilterSheet.Value
- "Oldest to Newest"  ← Directory_Updates_FilterSheet.Value
- "Mark All as Read"  ← If_ShowMarkAll.Value
- "full-width full-height"  ← Updates_NoItemsFound.Value
- "No Updates Found"  ← Updates_NoItemsFound.Value
- "We were unable to find any Updates to display."  ← Updates_NoItemsFound.Value
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
- "No results found for ‘"  ← SearchEmpty.Value
- "We couldn’t find an item that matches your search. Please check your spelling or try different keywords."  ← SearchEmpty.Value
- ".layout .content"  ← ScrollTop2.Value
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Sort by"  ← SortBy_Title.DefaultValue
- "Sort & Filter"  ← FilterSheet.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "Example & Example"  ← GetSkeleton_UI_UpdatesContent.Value
- "Example, Example"  ← GetSkeleton_UI_UpdatesContent.Value