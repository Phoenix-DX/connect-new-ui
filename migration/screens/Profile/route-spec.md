# Screen spec: Profile

Sources: `analysis/sources/pretty/UBTConnect.App_Profile.Profile.mvc.js` ("P"; model :1-140, view :141-2817, controller
:2818-5063), `…App_Profile.Profile_HouseholdPreview.mvc.js` ("HP"), `analysis/dom/{default,loading,offline}.html`,
`analysis/calls.md`, fixture `UBTConnect/DataActionGetCountryInfo/01-c52c670a.json`.

## 0. Summary

"Edit Account" screen of the signed-in member (route `/UBTConnect/Profile`, no inputs; pack.md:3).

Layout_HomePage (ExtendedClass `ubt-profile-screen`, SVGHeight `calc(200px - var(--header-size))`, white content, no search bar;
P:212-217) has these parts:
- A back IconText header.
- A SkeletonSection (loading while the user-info cache is not fetched; P:296-299). It holds the avatar, the full name and the
  "Preview Household Profile" link.
- A form `DetailsForm` with four sections:
  - Identification (read-only ContactBase ID, UBT account number with copy icon).
  - Personal Information (username read-only, email, "Display Month and Year of Birth, and Age" switch with a confirmation dialog).
  - The householder-only Address Information (not captured, Q1).
  - Contact Information (home number enabled only for householders, mobile / work numbers, and for householders or spouses
    the two visibility switches and notes).
- A FixedFooter with Close (back) and Save (ButtonLoading; disabled until something changed).

Below the layout:
- CacheControl_UserInfo_Wrapper (fills everything).
- The Dialog_Navigation discard confirmation (only while HasChanges).
- Profile_HouseholdPreview (bottom sheet with the household card in preview mode, once the user info is fetched).
- The age Dialog_CustomChoice.

Captured states: default (spouse account, not householder), loading (user info never answers), offline (error).

## 1. Entry and routing

Route `/UBTConnect/Profile`, no input (routes.generated.ts:52). Back: OnClick_Back = navigateBack (P:3141-3160), through
the shell navigation gate, so Dialog_Navigation can stop it while HasChanges (P:2660-2690).

## 2. Component tree

- `Layout_HomePage` `$b1` [shared] — header title `IconText` `$b2` (neutral-0, small, regular; icon arrow_left_alt
  neutral-0; Clicked → OnClick_Back; P:240-292); `content`:
  - `SkeletonSection` `Content` (In_IsLoading = not LocalCacheControl_UserInformation.isFetched; P:296-299)
    - `CustomContainer` `Header` (padding x base / top m / bottom base, flex column centered; P:300-330) > UBT_LazyImage
      `$b6` (EntityId MemberID, size xxl/square, Member, ImageURL Photo.SignedURL; P:337-362), CustomText `NameText`
      (FullName, neutral-8 / h2 / semi-bold, `padding-y-s`; P:362-392), CustomContainer `ViewPreview` (padding s,
      inline block; Clicked → OnClick_ViewPreview; P:392-470) > IconText `$b9` "Preview Household Profile" (primary /
      base / semi-bold; icon id_card primary medium_20).
    - SectionSeparator `$b11`; `form` `DetailsForm` (class `"form card" OSFillParent`, as captured dom:177).
      - `IdentificationInfo` (P:600-835): "Identification" (h6), "ContactBase ID" + disabled `Input_ContactBaseId`
        (AccountFormOriginal.MemberId), "UBT Account Number" + InputWithIcon `$b16` (icon right; Icon content_copy
        neutral-7, Clicked → OnClick_UBTAccountNumber = JSUtils_CopyToClipboard(AccountNumber); disabled
        `Input_UBTAccountNumber` = AccountFormOriginal.AccountNumber).
      - SectionSeparator `$b18`; `PersonalInfo` (P:869-1268): titles and notes, disabled `Input_Username` (text),
        `Input_Email` (type email, enabled, OnChange_Fields), Columns_Two `BirthDateandAge` with `Switch1`
        (ShowLifeCycleDates, OnChange → OnChange_ShowAgeSwitch), note `BirthDateandAgeNote`.
      - If isHouseholder (P:1269-1716): SectionSeparator `$b28` + address section → `<NotCaptured>` (Q1 → A).
      - SectionSeparator `$b37`; `ContactInfo` (P:1757-2320): "Contact Information", "Home Number" + `HomeNumber2` (tel,
        enabled = isHouseholder), `MobileNumber_Container` (Columns_Two `MobileNumber`: text + `Switch2` only if
        isHouseholder or isSpouse), `Input_MobileNumber` (tel), `MobileNumber_Note` (If householder or spouse; text
        `If(ShowMobileNumber,"Display","Hide") + " mobile number on your profile."`), same for work (`WorkNumberContainer`,
        `Switch3`, `Input_WorkNumber`, `WorkNumber_Note`, P:2097-2316).
  - If MainContainerId <> "" (P:2326): FixedFooter `$b49` (ContentContainerId = MainContainerId, no bottom bar,
    expected height `calc(2 * var(--space-base) + var(--ubt-button-height-m))`) > CustomContainer `$b50` (neutral-0,
    padding base, shadow xs-top) > Columns_Two `$b51` (spacing s) > Button `$b52` "Close" (secondary, IsDisabled =
    isLoading_Submit, → OnClick_Back) | ButtonLoading `$b53` (IsLoading = isLoading_Submit) > Button `$b54` "Save"
    (primary, IsDisabled = not HasChanges or isLoading_Submit, → OnClick_Save) (P:2326-2470).
  - `placeholderCommonUIInsideLayout`: CommonUI_InsideLayout `$b55` [shell].
- CacheControl_UserInfo_Wrapper `$b56` (Result → CacheControl_UserInfo_WrapperResult; P:2560-2592).
- If isHouseholder: CacheControl_AllLocalities / CacheControl_AllSubdivisions (P:2594-2659) → not mounted (Q1 → A).
- If HasChanges: Dialog_Navigation `$b59` (header "Confirm", body "Are you sure you want to discard the changes?";
  Event_OnBackNavigation → PreventNavigation; P:2660-2700).
- If LocalCacheControl_UserInformation.isFetched: Profile_HouseholdPreview `$b60` (own block, `components/`; inputs
  Preview {UI_AccountForm = AccountForm_ViewPreview, HouseholdMemberId = MemberID, UsePreview True, isHouseholder,
  FormattedAddress}, HouseholdId = HouseholderId; Initialized → PreviewHousehold_BottomSheetId; P:2701-2745).
  HP:180-260: BottomSheet (Title "Preview Household Profile", Content_Padding none) > container `inert`,
  `text-align: left` > HouseholdDetails_Block (isEnabled False, In_ShowKebabMenu True, HouseholdId, Preview).
- Dialog_CustomChoice `AgeConfirmation_PopUp` (scope b61; body by ShowLifeCycleDates, buttons "Update Preference" /
  "Cancel"; P:2746-2815).

## 3. DOM and markup contract

`analysis/dom/default.html` (pack "Markup"). Inputs keep `aria-required="false" class="form-control OSFillParent"
data-input`, `disabled` where enabled is False; switches `<span><input class="switch" data-switch type="checkbox">`.

## 5. Data model (types.ts)

AccountForm = UI_AccountForm (Connect_Household_CS): PersonalInformation {Username, Email, ShowLifeCycleDates},
ContactInformation {HomeNumber, MobileNumber, WorkNumber, ShowMobileNumber, ShowWorkNumber}, AddressInformation
{Custom_Address_ItemList, LocalityId, SubdivionId, …}, IdentificationInformation {MemberId, AccountNumber}.
Screen state: AccountForm, AccountFormOriginal, AccountForm_ViewPreview, isHouseholder, isSpouse, HasChanges,
isLoading_Submit, LocalCacheControl_UserInformation, MainContainerId, PreviewHousehold_BottomSheetId,
CurrentCountryCode, FormattedAddress, isRequireRequestCreation (P:28-90).

## 6. API calls

| Call | Phase / trigger | Evidence |
|---|---|---|
| CacheControl_UserInfo/DataActionGetCacheInfo | load (shared wrapper) | calls.md #2 |
| App_Profile/Profile/DataActionGetCountryInfo (CurrentCountryCode) | after the user-info Result (Refresh Query, not at start) | P:2850-2878, :3391-3393; calls.md #7 |
| HouseholdDetails_Block / Directory_EntityDetailsActions data actions, GetSignedImagesInBulk | load (shared blocks) | calls.md #4-6, #8-24 |
| ServiceAPIMember_EditDetails_Service (UI_AccountForm, isRequireRequestCreation) | Save click | P:2839-2847, :3609-3620 |
App-start calls (#1, #3, #9, #20, #25, #26) belong to the shell.

## 7. State and lifecycle

- CacheControl_UserInfo_WrapperResult (P:3367-3508) fills these values:
  - The cache record.
  - AccountForm (username, email, ShowLifeCycleDates = DisplayAge, MemberId = MemberID, AccountNumber, visible address
    items, LocalityId, SubdivionId, home / mobile / work, ShowMobile = DisplayMobilePhone, ShowWork = DisplayWorkPhone).
  - AccountFormOriginal = AccountForm.
  - isHouseholder.
  - CurrentCountryCode = Country_Code.
  - isSpouse = SpouseIsHouseholder.
  - AccountForm_ViewPreview = AccountForm.
  - Action_RefreshSubdivionList.
  - Then Refresh GetCountryInfo → OnAfterFetch → Action_FormatAddress.
- Action_FormatAddress (P:3766-3820): FormattedAddress = AddressFormat with `\r\n` → " ", then each "[Address<NumberRef>]"
  replaced by the item's Value.
- OnChange_Fields (P:3822-3848): HasChanges = AccountForm <> AccountFormOriginal; Action_FormatAddress.
- Layout OnReadyEvent → MainContainerId (P:3330-3365). OnReady: ScreenController_Get, DropdownSearch_ForceResizeOnOpen
  (only `.osui-dropdown-search`, i.e. the householder section; UBTConnect_Utils.controller.js:1458-1470) → not needed.

## 8. Render logic

See section 2 conditions. Loading state (dom/loading.html): skeleton class, no name, no switches (isSpouse False), no
HouseholdPreview; FixedFooter rendered.

## 9. Interactions and navigation

- Header IconText / Close: navigateBack (P:3141-3160).
- ViewPreview: AccountForm_ViewPreview = AccountForm, BottomSheetOpen(PreviewHousehold_BottomSheetId) (P:3073-3102).
- Copy icon: JSUtils_CopyToClipboard(AccountForm.AccountNumber) (P:3209-3237).
- Switch1 change: ConfirmAction(AgeConfirmation_PopUp); confirmed → OnChange_Fields, else revert the switch (P:3850-3893).
- Switch2 / Switch3 / inputs change: OnChange_Fields.
- Save (P:3509-3765): isLoading_Submit True; ValidateWidgets; isValid = DetailsForm.Valid; householder dropdown /
  address checks (Q1 → not built). Then:
  - When valid:
    - isRequireRequestCreation = address, username, email, home, mobile or work differs from the original.
    - Member_EditDetails_Service; isLoading False; AccountFormOriginal = AccountForm.
    - When the contact part and ShowLifeCycleDates equal the original (always, after the assignment): Cache_UserInfo_Get,
      set the three visibility flags, PutCacheableObject(DirectoryUser, UniqueCacheKey, 7200 s).
    - OnChange_Fields.
    - FeedbackMessage_AutoClose success "Your update request has been submitted.".
  - When not valid: isLoading False, HasChanges False.
  - Errors:
    - NotRegistered: re-raised.
    - CommunicationException → isLoading False + BubbleCommunicationException.
    - Others → isLoading False + BubbleGenericException.
- Leaving with HasChanges: Dialog_Navigation prevents the navigation (PreventNavigation) and asks; Yes resumes.

## 11. Error handling and feedback

Offline / error: the user-info wrapper fails, the skeleton stays (dom/offline.html), as the shared wrapper does.

## 12. Strings

The strings are as captured (dom/default.html) and P view literals:
- "Edit Account", "Preview Household Profile", "Identification", "ContactBase ID", "UBT Account Number".
- "Personal Information", notes, "Close", "Save".
- Dialog texts (P:2685-2695, :2785-2800).
- "Your update request has been submitted." (P:3756).

## 13. Accessibility, platform and security notes

Member_EditDetails_Service must authorise the edit server-side (only the signed-in member's own record). No personal
data goes to browser storage; the memory cache is in-memory (shell/memoryCache.ts).

## 13a. Feature flags

Flags in the pack (pack.md:70-75) belong to shared blocks (HouseholdDetails_Block, ShareSheet): read there through
useFlag; `App_PIN_BiometricEnabled` and `onToggle` are not flags (user, 2026-10-14). The screen reads none itself.

## 14. Unclear points

- Q1 (decision): householder address section not captured → A (NotCaptured), answered [questions.md Q1].
- Q2 (decision): captured account is a spouse → A (route scenario `spouse`), answered [questions.md Q2].
- Q3 (fact): built-in widget validation (Email type, messages) is not in the local screen sources.
  Answered by code [questions.md Q3]: the OutSystems runtime has built-in validation
  (empty mandatory → 'Required Value!'; invalid value → 'Invalid Value!'). The first build had no client check.
  CR-Profile-2 (Status: applied) adds the shared widget validation, and Profile uses it.
- Q4 (decision): GetCountryInfo for other countries / Save mock → A, answered [questions.md Q4].

## 15. Acceptance criteria

- Parity of default, loading and offline.
- The screen enables Save after a change. After Save, the screen shows the success toast and disables the button again.
- The age switch asks for confirmation and reverts on Cancel.
- Leaving with changes asks "Confirm".

## 16. Decisions to confirm

- Q1 → A (answered [questions.md Q1]): NotCaptured for the householder address section and the CacheControl_All*
  blocks; Save skips the locality / subdivision / address checks.
- Q2 → A (answered [questions.md Q2]): `?mock=spouse` scenario (Profile mocks.ts) for the captured account; capture plan: Profile default
  state scenario `spouse` (proposed in the report).
- Q4 → A (answered [questions.md Q4]): GetCountryInfo serves the recording for any country; Save success stored in `Profile.editRequests`.
- Q3 (fact, answered by code [questions.md Q3]): the runtime built-in validation applies ('Required Value!', 'Invalid Value!'). CR-Profile-2 (Status: applied).
- Capture plan (orchestrator): Profile `scenarios: {"default": "spouse"}` (Q2 → A), as Menu's `householder`.
- CR-Profile-1 (Status: applied): HouseholdDetails_Block mock household 9002, third member with CTAs (dom/default.html:1675).
- Exemptions (proposed in `migration/screens/Profile/proposed-exemptions.json`; in migration/parity-exemptions.json: CAPTURE-SWITCH-CHECKED-PROFILE, CAPTURE-MASKED-IMAGE-PROFILE-HOUSEHOLD, CAPTURE-MASKED-TEXT-PROFILE-NAME, CAPTURE-MASKED-AVATAR-INPUTS-PROFILE-SHIFT; capture artifacts):
  - The checked property of the switches is not serialized (notes say "Display").
  - The capture masks the household photo.
  - The capture masks the name offset.
  - The masked avatar causes a pixel shift.
  - The input values are not serialized.

## 17. Patterns used

- P-DATA, P-CALLS, P-MOCKS.
- P-MUTATION (save).
- P-STATES (skeleton, NotCaptured).
- P-DIALOG (Dialog_CustomChoice, Dialog_Navigation, bottom sheet, toast).
- P-PARAMS (back navigation).
- P-FORM (controlled inputs, no reference yet).
- P-OSUI (ButtonLoading, InputWithIcon, BottomSheet).
- P-FLAGS (none read by the screen).

## 18. Builder notes

Inner generated ids of shared blocks are not rendered (convention); only the screen's named / alias ids are.
