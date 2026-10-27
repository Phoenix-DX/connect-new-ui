# Pack of UI flow App_Profile (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "This field is required."  ← DropdownNotValid.Value, DropdownNotValid2.Value
- "Please provide all mandatory fields"  ← FeedbackMessage_AutoClose.Value
- "Your update request has been submitted."  ← FeedbackMessage_AutoClose2.Value
- "calc(200px - var(--header-size))"  ← Profile.Value
- "Edit Account"  ← Profile.Value
- "Preview Household Profile"  ← Profile_HouseholdPreview.Value, ViewPreview.Value
- "ContactBase ID"  ← ContactBaseID.Value
- "UBT Account Number"  ← UBTAccountNumber.Value
- "Personal Information"  ← PersonalInformation.Value
- "Please note that all changes may take up to 48 hours to show on your profile."  ← PleaseNote.Value
- "Please note that if you are a householder, changes to your email address will also apply to your Global Media Stream login."  ← PleaseNote2.Value
- "Display Month and Year of Birth, and Age"  ← BirthDateandAgeText.Value
- "Month, Year of Birth and Age."  ← BirthDateandAgeNote.Value
- "Please note that changes may take up to 12 hours to show in the app."  ← BirthDateandAgeNote.Value
- "Address Information"  ← AddressInformation.Value
- "Name+If(CountryName<>\"\", \", \"+CountryName,\"\")"  ← LocalityDropdown.Value
- "Contact Information"  ← ContactInformation.Value
- "Home Number"  ← HomeNumber.Value
- "Mobile Number"  ← MobileNumberText.Value
- "mobile number on your profile."  ← MobileNumber_Note.Value
- "Work Number"  ← WorkNumberText.Value
- "work number on your profile."  ← WorkNumber_Note.Value
- "calc(2 * var(--space-base) + var(--ubt-button-height-m))"  ← FooterStickButtons.Value
- "Are you sure you want to discard the changes?"  ← PopUp_Change.Value
- "By selecting this option, your Month and Date of Birth, and your Age will display in Directory. You will also be able to see the Birth Date and Age information for other Members who have selected thi…"  ← AgeConfirmation_PopUp.Value
- "By deselecting this option, your Month and Date of Birth, and your Age will be hidden so will not display in Directory. You will also not be able to see the Birth Date and Age information for other M…"  ← AgeConfirmation_PopUp.Value
- "Enter your PIN code"  ← UnlockText.DefaultValue
- "Pin does not match"  ← Event_Pincode_PinUnlockError.Value
- "User not found"  ← Event_Pincode_PinUnlockError.Value
- "Your current PIN is not correct!"  ← Event_Pincode_PinUnlockError.Value
- "No matching user. Please Register a PIN"  ← Event_Pincode_PinUnlockError.Value
- "border-bottom-s border-color-neutral-0"  ← Block_PINUnlock_ContentWrapper.Value
- "Forgot PIN?"  ← Block_PINUnlock_ContentWrapper.Value
- "Terms & Conditions"  ← Block_PINUnlock_ContentWrapper.Value
- "Our Privacy Policy"  ← Block_PINUnlock_ContentWrapper.Value
- "Photobook is currently unavailable for this household. Please try again later."  ← Handler_OnClickPhotobook.Message
- "Household gallery"  ← ImageCard_LazyLoading.Value
- "Your profile is private and only visible to you"  ← isHouseholdHidden.Value
- "Supper Meeting:"  ← SeeMoreSection.Value
- "We have noticed you are using an old version of Connect."  ← UnsupportedVersion_Native.Value
- "We recommend you upgrade to the latest version."  ← UnsupportedVersion_Browser.Value, UnsupportedVersion_Native.Value, UnsupportedVersion_WebView.Value
- "If you have any issues upgrading the Connect app, please uninstall and reinstall it."  ← UnsupportedVersion_Native.Value
- "We have noticed you are using an unsupported version of Android System Webview."  ← UnsupportedVersion_WebView.Value
- "Household members"  ← Members.Value
- "ubt-lock-screen connect-legacy-compatibily-containter"  ← Block_PINUnlock.Value
- "Bookmarks not available"  ← GetBookmarkCategoryId_ByEntityTypeId.ExceptionMessage, OnReady.ExceptionMessage
- "Invalid option"  ← OnReady.ExceptionMessage
- "We have noticed you are using an unsupported browser version."  ← UnsupportedVersion_Browser.Value
- "Welcome to"  ← WelcomeToConnect.Value
- "Upgrade From Google Play"  ← UnsupportedVersion.Value
- "Example & Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Example, Example, Example, Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "testing address testing addres NSW 2000"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Example Example Example"  ← GetSkeleton_UI_HouseholdCardContent.Value
- "Share not available"  ← GetShareType_FromEntity.ExceptionMessage