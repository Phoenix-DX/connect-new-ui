# Pack of UI flow App_Menu_ContactUs (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "This field cannot contain numeric values!"  ← OnClick_SubmitForm.Value
- "Invalid email!"  ← OnClick_SubmitForm.Value
- "Invalid Phone"  ← OnClick_SubmitForm.Value
- "Support Team"  ← OnClick_SupportTeam.Value
- "Prefer to speak with someone? \nGive our"  ← Content.Value
- "a call."  ← Content.Value
- "Please provide your suggestions and feedback"  ← Title.Value
- "How can we help you?"  ← Title.Value
- "All fields are required."  ← Title.Value
- "Enter Full Name"  ← Form_ContactUs.Value, Input_FullName.Prompt
- "this is an error"  ← Form_ContactUs.Value
- "Enter Your Email Address"  ← Input_Email.Prompt
- "Enter Phone Number"  ← Input_PhoneNumber.Prompt
- "Select Your Country"  ← Dropdown_Country.EmptyValue
- "Enter Your Locality"  ← Input_Locality.Prompt
- "I would like to be contacted about my feedback."  ← Form_ContactUs.Value
- "calc(2 * var(--space-base) + var(--ubt-button-height-m))"  ← ContactUsDetails.Value
- "Thank you"  ← SubmittedConfirmation.Value
- "Your message has been sent. A member from our Customer Care Team will be in touch soon."  ← SubmittedConfirmation.Value
- "Delete message?"  ← PopUps.Value
- "Are you sure you want to delete this message?"  ← PopUps.Value
- "Please select the most relevant category so our Customer Care Team can direct your request to the right team."  ← ContactUsMenu.Value
- "How would you rate your current experience with Connect?"  ← ContactUs_Rate.Value
- "Very good"  ← UseEmoctions.Value
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
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "User Account Management"  ← ListAppendAll_LoggedInMenuOptions.Value, ListAppendAll_LoggedOutMenuOptions.Value
- "Community Engagement"  ← ListAppendAll_LoggedInMenuOptions.Value, ListAppendAll_LoggedOutMenuOptions.Value
- "General Inquiries"  ← ListAppendAll_LoggedInMenuOptions.Value, ListAppendAll_LoggedOutMenuOptions.Value
- "To help us assist you better, please provide your query/ issue regarding"  ← Get_ContactUsFormDescription.Value
- "UBT One lets you access all your UBT applications with a single log in. \n\nUse the same username and password to sign in to the UBT Website, Connect, and more—no need to remember multiple credential…"  ← Get_ContactUsFormDescription.Value
- "Where we can help:\n • Can’t log in with UBT One\n • Reset Password\n • Not received your UBT One Verification Code"  ← Get_ContactUsFormDescription.Value
- "Where we can help:\n • Purchase Subscription\n • Upgrade or downgrade the Subscription \n • Subscription Cancellation \n • Payment issue \n • Adding other family members to my Connect subscription"  ← Get_ContactUsFormDescription.Value
- "Where we can help:\n • Household Details \n • Address & Map\n • My Profile Details\n • Ancestry Details"  ← Get_ContactUsFormDescription.Value
- "Where we can help:\n • Lord’s Day Meal \n • Orbit Travel & Events \n • Assemble"  ← Get_ContactUsFormDescription.Value
- "We’d love to hear from you! \n\nWhether you have questions, please reach out and if you’re enjoying Connect, we’d love to know that too. Your feedback helps us improve!"  ← Get_ContactUsFormDescription.Value
- "To help us assist you better, please provide your question."  ← Get_ContactUsFormDescription.Value
- "We’d love to hear from you! \n\nPlease let us know your suggestions or feedback, and if you're enjoying Connect, we’d love to know that too. Your suggestions and feedback helps us improve!"  ← Get_ContactUsFormDescription.Value
- "To help us improve Connect, please share your suggestions or feedback."  ← Get_ContactUsFormDescription.Value