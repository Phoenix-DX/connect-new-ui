# Pack of UI flow Directory_Search (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Loading Name"  ← ListAppend.Value, ListAppend2.Value, ListAppend3.Value
- "Loading Location"  ← ListAppend.Value, ListAppend2.Value, ListAppend3.Value
- "SearchCategoryId = SelectedCategory"  ← ScreenEvent_OnInitialize.Value
- "Search for households, members or places."  ← ScreenBlock_Search.Value
- "Recent search"  ← HasRecentItems.Value
- "Clear all"  ← HasRecentItems.Value
- "No recent results to show"  ← HasRecentItems.Value
- "Please search for a Household, Member or a Place to get started."  ← HasRecentItems.Value
- "Showing results for"  ← StartedDifferentSearch.Value
- "We’re sorry. We were not able to find a match.\nTry another search?"  ← NoResults.Value
- "• Check for typos and spelling errors.\n• Try more general keywords.\n• Try different keywords."  ← NoResults.Value
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
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "Sort by"  ← SortBy_Title.DefaultValue
- "Sort & Filter"  ← FilterSheet.Value
- "Please enter a valid phone number"  ← ValidateSearchPhoneNumber.Value