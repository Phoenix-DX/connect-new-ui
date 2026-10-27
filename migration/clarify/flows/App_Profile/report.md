# Flow report: App_Profile

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 1 (built: 1, Profile; not built: none) |
| Own blocks | Profile_HouseholdPreview |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/pages/Profile/…` and the files it imports, KB page `ui/profile-services.md` and the rules it names, TST compiled code `UBTConnect.App_Profile.Profile.mvc.js` and `UBTConnect.App_Profile.Profile_HouseholdPreview.mvc.js` (`tst_source.py`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 70 · partial 11 · missing 21 · differs 0 · mock-only 2 · n/a 6 · unclear 0 (same as `checklist.json`).
- **F1** (major): React does not build the address section of the householder. A householder sees the title
  "Address Information" only. The address lines, the locality and subdivision dropdowns and the address checks on
  save are missing.
- **F2** (minor): `Input_Email` has no limit of 50 characters. The three phone inputs have no limit of 15 characters
  and no `autocomplete="off"`.
- **F3** (info): `Action_FormatAddress` replaces the CR LF characters. TST replaces the literal text `\r\n`, so the
  CR LF characters stay in the preview address.
- **F4** (info) and **F5** (info): two edge branches of `OnClick_Save` differ. React reads the user-info cache
  through `GetUserInformation_Wrapper`, not through `Cache_UserInfo_Get`.
- Status: in React a member sees the identification and edits the email, the phone numbers and the visibility
  switches. The member previews the household and saves. A householder cannot see or edit the address, and the save
  skips the address checks.

## 2. Screens

### 2.1 Profile

Route `/UBTConnect/Profile`, page `app/src/pages/Profile/ProfilePage.tsx`, flows in
`app/src/pages/Profile/hooks/useProfile.ts` and `app/src/pages/Profile/hooks/profileState.ts`. Board: `build`,
built (V4c, writes mocked, user 2026-10-14).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Registered, UBTOne_User | A signed-in user opens the screen | MEMBER_ROUTE (member, enforce): Profile is not in ROUTE_META | `match` | app/src/app/routes.ts:40-57, 92 |
| 002 | input parameters, URL structure QueryString | no input parameters | route /UBTConnect/Profile, inputs [] | `match` | app/src/app/routes.generated.ts:52 |
| 003 | lifecycle OnReady → ScreenEvent_OnReady: ScreenController_Get | ScreenController = ScreenController_Get.Object; OnClick_Save validates through it | useScreenValidationService() gives the screen validation service; no OnReady effect | `match` | app/src/pages/Profile/hooks/useProfile.ts:91; TST Profile.mvc.js:3943-3966, 4091-4101; migration/change-requests/CR-Profile-2.md<br>The comment at useProfile.ts:35 says that the screen has no OnReady. TST has one (F6). **F6** (info) |
| 004 | lifecycle OnReady → ScreenEvent_OnReady: DropdownSearch_ForceResizeOnOpen | called after ScreenController_Get | - | `missing` | TST Profile.mvc.js:3968-3969<br>The only DropdownSearch widgets of the screen are in the address section (F1). **F1** (major) |
| 005 | local variables | AccountForm, AccountFormOriginal, AccountForm_ViewPreview, isHouseholder, HasChanges, isSpouse, isLoading_Submit, LocalCacheControl_UserInformation, LocalCacheControl_AllLocalities, LocalCacheControl_AllSubdivions, SubdivisionFilteredList, MainContainerId, ScreenController, PreviewHousehold_BottomSheetId, CurrentCountryCode, FormattedAddress, isRequireRequestCreation | ProfileState keeps the user, the three forms, isHouseholder, isSpouse, hasChanges, isLoadingSubmit, mainContainerId, previewBottomSheetId, currentCountryCode; FormattedAddress and isRequireRequestCreation are derived | `partial` | app/src/pages/Profile/hooks/profileState.ts:18-41, 87-101; app/src/pages/Profile/hooks/useProfile.ts:99, 150; pack/screens.md Profile<br>LocalCacheControl_AllLocalities, LocalCacheControl_AllSubdivions and SubdivisionFilteredList have no counterpart (F1). **F1** (major) |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 006 | CacheControl_UserInfo_Wrapper → CacheControl_UserInfo_WrapperResult | the block raises Result with Directory_UserCurrent; the screen action fills the form | UserInfoCache onResult → onUserInformation → reducer userInformationFetched | `match` | app/src/pages/Profile/ProfilePage.tsx:109; app/src/pages/Profile/hooks/useProfile.ts:108-110; TST Profile.mvc.js:2564-2580<br>The block itself is shared (App_Cache), checked in the report of App_Cache. |
| 007 | CacheControl_UserInfo_WrapperResult: assignments | LocalCache + isFetched; Username, Email, ShowLifeCycleDates; MemberId, AccountNumber; ListAppend of the Visible address items (Label, Visible, Required, Value, NumberRef, IsValid True); LocalityId, SubdivionId; HomeNumber, MobileNumber, WorkNumber, ShowMobileNumber, ShowWorkNumber; AccountFormOriginal = AccountForm; isHouseholder; CurrentCountryCode; isSpouse; AccountForm_ViewPreview = AccountForm | fromUserInformation and the reducer assign the same values; the address items are appended to the current list with IsValid true | `match` | app/src/pages/Profile/hooks/profileState.ts:114-150, 200-211; TST Profile.mvc.js:3378-3469 |
| 008 | CacheControl_UserInfo_WrapperResult: Action_RefreshSubdivionList | called after the assignments: no locality → SubdivisionFilteredList empty and SubdivionId = ""; else the filtered subdivisions once cached | - | `missing` | app/src/pages/Profile/hooks/useProfile.ts:106-110; TST Profile.mvc.js:3471-3472<br>When LocalityId is "", TST clears SubdivionId after AccountFormOriginal was assigned. React keeps the subdivision id. **F1** (major) |
| 009 | CacheControl_UserInfo_WrapperResult: refresh data GetCountryInfo | Refresh Query GetCountryInfo at the end of the Result | useCountryInfoQuery(currentCountryCode, isFetched): enabled once the user information came | `match` | app/src/pages/Profile/hooks/useProfile.ts:97; app/src/api/country/hooks.ts:46-53; TST Profile.mvc.js:3474-3476 |
| 010 | data action GetCountryInfo (fetch OnDemand) | OnDemand; DataActionGetCountryInfo with CurrentCountryCode; OnAfterFetch → OnAfterFetch_GetCountryInfo | fetchCountryInfo calls UBTConnect Profile/DataActionGetCountryInfo with CurrentCountryCode; no retry, no refetch on focus; Action_FormatAddress runs on the data | `match` | app/src/api/country/repository.ts:49-55; app/src/api/client/queryClient.ts:15-18; app/src/pages/Profile/hooks/useProfile.ts:99; TST Profile.mvc.js:2830-2870 |
| 011 | server side of GetCountryInfo: Get_UI_CountryAddressInfo (Connect_Geography_CS) | the server returns the address format of the country | recordedHandler answers one recording (CurrentCountryCode US) for any country | `mock-only` | app/src/pages/Profile/mocks.ts:68; app/src/mocks/fixtures/UBTConnect/DataActionGetCountryInfo/01-c52c670a.json<br>Production needs the screen data action DataActionGetCountryInfo → Connect_Geography_CS/Get_UI_CountryAddressInfo. |
| 012 | If isHouseholder (#isHouseholder_Cache): CacheControl_AllLocalities | for a householder the block raises Result → CacheControl_AllLocalitiesResult | - | `missing` | TST Profile.mvc.js:2596-2612; app/src/pages/Profile/hooks/useProfile.ts:106-107<br>**F1** (major) |
| 013 | If isHouseholder (#isHouseholder_Cache): CacheControl_AllSubdivisions | for a householder the block raises Result → CacheControl_AllSubdivisionsResult | - | `missing` | TST Profile.mvc.js:2628-2640<br>**F1** (major) |
| 014 | server action call Member_EditDetails_Service | screen service ServiceAPIMember_EditDetails_Service(UI_AccountForm, isRequireRequestCreation); no output read | editMemberDetails(form, isRequireRequestCreation) calls UBTConnect ServiceAPIMember_EditDetails_Service; no output read | `match` | app/src/api/member/repository.ts:29-40; app/src/pages/Profile/hooks/useProfile.ts:150; TST Profile.mvc.js:2839-2850, 3604-3605 |
| 015 | server side of Member_EditDetails_Service (Connect_Household_CS) | the server saves the visibility preferences and raises a change request when the flag is True (BR-C2SVC-152) | contractHandler answers success and keeps each request in the collection Profile.editRequests | `mock-only` | app/src/pages/Profile/mocks.ts:69-76; migration/board.md:44 (writes mocked, user, 2026-10-14)<br>Production needs Connect_Household_CS/Member_EditDetails_Service through the screen service ServiceAPIMember_EditDetails_Service. |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 016 | Layout_HomePage arguments | AddSearchBar False, ContentBackgroundColor Neutral0, ExtendedClass "ubt-profile-screen", SVGHeight "calc(200px - var(--header-size))" | HomeLayout with the same four arguments | `match` | app/src/pages/Profile/ProfilePage.tsx:53-58; TST Profile.mvc.js:209-214 |
| 017 | Placeholder_Header_Title: IconText "Edit Account" | IconText Text "Edit Account", Neutral0, Small, Regular; Clicked → OnClick_Back | IconText with the same text and options; onClicked = navigateBack | `match` | app/src/pages/Profile/ProfilePage.tsx:60-66; TST Profile.mvc.js:249-270 |
| 018 | Icon of the header IconText | ArrowLeftAlt, Neutral0 | Icon ICON_ARROW_LEFT_ALT, Neutral0 | `match` | app/src/pages/Profile/ProfilePage.tsx:67; app/src/pages/Profile/staticEntities.ts:4; TST Profile.mvc.js:291-292 |
| 019 | SkeletonSection #Content | In_IsLoading = not LocalCacheControl_UserInformation.isFetched | Skeleton id Content, isLoading = !isFetched (isFetched = user !== null) | `match` | app/src/pages/Profile/ProfilePage.tsx:72; app/src/pages/Profile/hooks/useProfile.ts:95; TST Profile.mvc.js:318-320 |
| 020 | CustomContainer #Header options | padding horizontal Base, top Medium, bottom Base; display Flex, align items Center, flex direction Column | HEADER_OPTIONS with the same values | `match` | app/src/pages/Profile/components/ProfileHeader.tsx:36-43; TST Profile.mvc.js:340-357 |
| 021 | UBT_LazyImage of the member | EntityId = LongIntegerToText(MemberID), EntityType Member, ImageSize DoubleExtraLarge_176 × Square, ImageURL = Photo.SignedURL | EntityLazyImage with memberId, Connect_Entity.Member, the same size and the photo URL | `match` | app/src/pages/Profile/components/ProfileHeader.tsx:51-57; app/src/pages/Profile/ProfilePage.tsx:73-78; TST Profile.mvc.js:378-390 |
| 022 | CustomText #NameText | ExtendedClasses "padding-y-s", In_Text = FullName, Neutral8, Heading2, SemiBold | CustomText NameText with the same arguments | `match` | app/src/pages/Profile/components/ProfileHeader.tsx:58-63; TST Profile.mvc.js:398-430 |
| 023 | CustomContainer #ViewPreview with IconText and Icon | padding Small, IsInlineBlock; Clicked → OnClick_ViewPreview; IconText "Preview Household Profile" (Primary, Base, SemiBold); Icon IdCard, Primary, Medium_20 | CustomContainer ViewPreview with the same options and onClicked = onViewPreview; the same IconText and Icon | `match` | app/src/pages/Profile/components/ProfileHeader.tsx:64-76; TST Profile.mvc.js:440-512 |
| 024 | SectionSeparator after the header | SectionSeparator before the form | SectionSeparator $b11 | `match` | app/src/pages/Profile/ProfilePage.tsx:79; TST Profile.mvc.js:542-556 |
| 025 | Form #DetailsForm | style "form card", class OSFillParent; every widget below has DetailsForm as validation parent | OSForm id DetailsForm, the same style and class; the inputs register in it | `match` | app/src/pages/Profile/components/ProfileDetailsForm.tsx:42; app/src/pages/Profile/components/FormInput.tsx:28-33; TST Profile.mvc.js:559-569 |
| 026 | Identification section: texts and paddings | container padding H Base, T Small, B Base; "Identification" (Heading6); "ContactBase ID"; "UBT Account Number" (padding T Base, B Small) | IdentificationSection with the same container, texts and paddings | `match` | app/src/pages/Profile/components/IdentificationSection.tsx:31-50; app/src/pages/Profile/components/formOptions.ts:20-42; TST Profile.mvc.js:572-660 |
| 027 | Input_ContactBaseId | Text, Enabled False, bound to AccountFormOriginal.AccountForm_IdentificationInformation.MemberId | FormInput type text, enabled false, value = accountFormOriginal MemberId | `match` | app/src/pages/Profile/components/IdentificationSection.tsx:44; app/src/pages/Profile/components/ProfileDetailsForm.tsx:40-47; TST Profile.mvc.js:677-695 |
| 028 | InputWithIcon and the copy Icon | AlignIconRight True; Icon ContentCopy, Neutral7; Click → OnClick_UBTAccountNumber | InputWithIcon alignIconRight; Icon ICON_CONTENT_COPY, Neutral7, onClick = onCopyAccountNumber | `match` | app/src/pages/Profile/components/IdentificationSection.tsx:51-58; TST Profile.mvc.js:735-775 |
| 029 | Input_UBTAccountNumber | Text, Enabled False, bound to AccountFormOriginal.AccountForm_IdentificationInformation.AccountNumber | FormInput type text, enabled false, value = accountFormOriginal AccountNumber | `match` | app/src/pages/Profile/components/IdentificationSection.tsx:57; TST Profile.mvc.js:795-813 |
| 030 | Personal Information section: texts and paddings | "Personal Information" (Heading6), "Please note that all changes may take up to 48 hours…" (Small, Regular), "Username", "Email", the Global Media Stream note (padding T Base, B Base) | PersonalInformationSection with the same texts, options and paddings | `match` | app/src/pages/Profile/components/PersonalInformationSection.tsx:36-74; TST Profile.mvc.js:893-1145 |
| 031 | Input_Username | Text, Enabled False, MaxLength 50, bound to AccountForm Username, OnChange → OnChange_Fields | FormInput type text, enabled false, value Username, onChange → onPersonalChange | `match` | app/src/pages/Profile/components/PersonalInformationSection.tsx:50-58; TST Profile.mvc.js:983-1015<br>MaxLength has no effect on a disabled input. |
| 032 | Input_Email | Email, Enabled True, Mandatory False, MaxLength 50, OnChange → OnChange_Fields | FormInput type email, enabled, onChange → onPersonalChange; no maxLength | `partial` | app/src/pages/Profile/components/PersonalInformationSection.tsx:60-68; app/src/pages/Profile/components/FormInput.tsx:36-47; TST Profile.mvc.js:1055-1087<br>React does not limit the length to 50 characters. **F2** (minor) |
| 033 | Columns_Two #BirthDateandAge with Switch1 | ReduceLast, Center; "Display Month and Year of Birth, and Age" (FitContent, padding B Small); Switch1 bound to ShowLifeCycleDates, OnChange → OnChange_ShowAgeSwitch | ColumnsTwo SWITCH_COLUMNS; the same CustomText; FormSwitch Switch1 checked = ShowLifeCycleDates, onChange = onShowAgeChange | `match` | app/src/pages/Profile/components/PersonalInformationSection.tsx:75-88; TST Profile.mvc.js:1150-1222 |
| 034 | CustomText #BirthDateandAgeNote | "Please note that changes may take up to 12 hours to show in the app." (ExtraSmall); the first line of the expression is a comment | CustomText with the same text and options | `match` | app/src/pages/Profile/components/PersonalInformationSection.tsx:89-94; TST Profile.mvc.js:1231 |
| 035 | If isHouseholder (#isHouseholder_Address) | SectionSeparator, then SkeletonSection > CustomContainer #AddressInfo > "Address Information", the address list, Locality and Subdivision | isHouseholder && SectionSeparator and a NotCaptured marker with the title "Address Information" only | `partial` | app/src/pages/Profile/components/ProfileDetailsForm.tsx:54-59; app/src/pages/Profile/ProfilePage.tsx:85-89; TST Profile.mvc.js:1269-1377<br>The If and the separator are there; the section content is not. **F1** (major) |
| 036 | SkeletonSection of the address section | In_IsLoading = not LocalCacheControl_AllSubdivions.isFetched or not LocalCacheControl_AllLocalities.isFetched | - | `missing` | TST Profile.mvc.js:1288-1300<br>**F1** (major) |
| 037 | List of AccountForm.AccountForm_AddressInformation.Custom_Address_ItemList | AddressLabel (Label; padding top Base after the first row); AddressInput: Text, Mandatory = Required, MaxLength 50, style "form-control " + not-valid when IsValid is False, OnChange → OnChange_Fields | - | `missing` | TST Profile.mvc.js:1378-1480<br>**F1** (major) |
| 038 | DropdownSearch #LocalityDropdown | label "Locality"; options from LocalCacheControl_AllLocalities (Value LocalityId, Label Name + ", " + CountryName, GroupName CountryName); Prompt "-"; StartingSelection LocalityId; OnChanged → OnChange_LocalityDropdown | - | `missing` | TST Profile.mvc.js:1486-1586<br>**F1** (major) |
| 039 | DropdownSearch #SubdivisionDropdown | label "Subdivision"; IsDisabled when LocalityId = ""; options from SubdivisionFilteredList (SubdivisionId, SubdivisionName); Prompt "-"; StartingSelection SubdivionId; OnChanged → OnChange_SubdivionDropdown | - | `missing` | TST Profile.mvc.js:1591-1698<br>**F1** (major) |
| 040 | Contact Information section: texts and paddings | "Contact Information" (Heading6), "Home Number", "Mobile Number", "Work Number"; the two row containers (padding T Base, B ExtraSmall) with Columns_Two ReduceLast, Center | ContactInformationSection with the same texts, containers and columns | `match` | app/src/pages/Profile/components/ContactInformationSection.tsx:42-116; app/src/pages/Profile/components/formOptions.ts:33-39; TST Profile.mvc.js:1783-1975 |
| 041 | HomeNumber2 | Phone, Enabled = isHouseholder, MaxLength 15, autocomplete off, OnChange → OnChange_Fields | FormInput type tel, enabled = isHouseholder, onChange → onContactChange; no maxLength, no autoComplete | `partial` | app/src/pages/Profile/components/ContactInformationSection.tsx:55-63; app/src/pages/Profile/components/FormInput.tsx:36-47; TST Profile.mvc.js:1838-1873<br>**F2** (minor) |
| 042 | If isHouseholder or isSpouse (#isHouseholder2): Switch2 | Switch2 bound to ShowMobileNumber, OnChange → OnChange_Fields | showSwitches && FormSwitch Switch2, onChange → onContactChange({ ShowMobileNumber }) | `match` | app/src/pages/Profile/components/ContactInformationSection.tsx:69-79; app/src/pages/Profile/hooks/useProfile.ts:198; TST Profile.mvc.js:1974-2001 |
| 043 | Input_MobileNumber | Phone, Enabled True, MaxLength 15, autocomplete off, OnChange → OnChange_Fields | FormInput type tel, enabled, onChange → onContactChange; no maxLength, no autoComplete | `partial` | app/src/pages/Profile/components/ContactInformationSection.tsx:82-90; TST Profile.mvc.js:2015-2050<br>**F2** (minor) |
| 044 | If isHouseholder or isSpouse: MobileNumber_Note | If(ShowMobileNumber, "Display", "Hide") + " mobile number on your profile." (ExtraSmall, padding T ExtraSmall) | showSwitches && CustomText with the same expression and options | `match` | app/src/pages/Profile/components/ContactInformationSection.tsx:91-98; TST Profile.mvc.js:2053-2073 |
| 045 | If isHouseholder or isSpouse: Switch3 | Switch3 bound to ShowWorkNumber, OnChange → OnChange_Fields | showSwitches && FormSwitch Switch3, onChange → onContactChange({ ShowWorkNumber }) | `match` | app/src/pages/Profile/components/ContactInformationSection.tsx:104-114; TST Profile.mvc.js:2195-2222 |
| 046 | Input_WorkNumber | Phone, Enabled True, MaxLength 15, autocomplete off, OnChange → OnChange_Fields | FormInput type tel, enabled, onChange → onContactChange; no maxLength, no autoComplete | `partial` | app/src/pages/Profile/components/ContactInformationSection.tsx:117-125; TST Profile.mvc.js:2236-2271<br>**F2** (minor) |
| 047 | If isHouseholder or isSpouse: WorkNumber_Note | If(ShowWorkNumber, "Display", "Hide") + " work number on your profile." (padding T ExtraSmall, B Base) | showSwitches && CustomText with the same expression and options | `match` | app/src/pages/Profile/components/ContactInformationSection.tsx:126-133; TST Profile.mvc.js:2274-2290 |
| 048 | If MainContainerId <> "" (#FooterStickButtons): FixedFooter | ContentContainerId = MainContainerId, ExpectedFooterHeight "calc(2 * var(--space-base) + var(--ubt-button-height-m))", useBottomBar False; container Neutral0, padding Base, shadow ExtraSmallTop; Columns_Two spacing Small | mainContainerId !== '' && ProfileFooter: FixedFooter, container and columns with the same arguments | `match` | app/src/pages/Profile/ProfilePage.tsx:96-104; app/src/pages/Profile/components/ProfileFooter.tsx:22-47; TST Profile.mvc.js:2327-2382 |
| 049 | Button "Close" | Medium, Secondary, IsDisabled = isLoading_Submit, buttonOnClick → OnClick_Back | ActionButton "Close", Secondary (default size Medium), isDisabled = isLoadingSubmit, onButtonOnClick = navigateBack | `match` | app/src/pages/Profile/components/ProfileFooter.tsx:48-56; app/src/components/ui/Button/Button.tsx:32; TST Profile.mvc.js:2405-2440 |
| 050 | ButtonLoading and Button "Save" | ButtonLoading IsLoading = isLoading_Submit; Button Medium, Primary, IsDisabled = not HasChanges or isLoading_Submit, buttonOnClick → OnClick_Save | ButtonLoading isLoading = isLoadingSubmit; ActionButton "Save", Primary, isDisabled = !hasChanges \|\| isLoadingSubmit, onButtonOnClick = onSave | `match` | app/src/pages/Profile/components/ProfileFooter.tsx:57-67; TST Profile.mvc.js:2455-2500 |
| 051 | Placeholder_CommonUI_Inside_Layout: CommonUI_InsideLayout | CommonUI_InsideLayout with no arguments | CommonUiLayout $b55 with no arguments | `match` | app/src/pages/Profile/ProfilePage.tsx:107; TST Profile.mvc.js:2541-2556<br>The behaviour of the block (BR-UBTCON-310 to 313) is checked in the report of App_Common. |
| 052 | If HasChanges (#PopUp_Change): Dialog_Navigation | header "Confirm", body "Are you sure you want to discard the changes?"; Event_OnBackNavigation → Event_OnBackNavigation_ConfirmDiscard | hasChanges && NavigationDialog (connect variant) with the same header and body; onNavigation = preventNavigation | `match` | app/src/pages/Profile/ProfilePage.tsx:110-119; TST Profile.mvc.js:2662-2706 |
| 053 | If LocalCacheControl_UserInformation.isFetched (#PreviewBottomSheet): Profile_HouseholdPreview | HouseholdId = HouseholderId; Preview = { UI_AccountForm: AccountForm_ViewPreview, HouseholdMemberId: MemberID, UsePreview: True, isHouseholder: Member.isHouseholder, FormattedAddress }; OnInitialized → Event_HouseholdPreview_OnInitialized | user !== null && ProfileHouseholdPreview; source preview with HouseholderId and the same Preview record; onOnInitialized = onPreviewSheetInitialized | `match` | app/src/pages/Profile/ProfilePage.tsx:120-134; app/src/pages/Profile/hooks/useProfile.ts:183-192; TST Profile.mvc.js:2719-2753 |
| 054 | Dialog_CustomChoice #AgeConfirmation_PopUp | body If(ShowLifeCycleDates, enabling text, disabling text); ButtonLabel "Update Preference"; DismissButtonLabe "Cancel"; no header | ChoiceDialog id AgeConfirmation_PopUp with the same body expression and labels; no header | `match` | app/src/pages/Profile/ProfilePage.tsx:135-147; TST Profile.mvc.js:2779-2811 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 055 | OnClick_Back | navigate (Previous Screen), transition UseHistory | navigateBack(): navigate(-1), no transition override | `match` | app/src/pages/Profile/ProfilePage.tsx:31, 65, 101; app/src/platform/navigation/osNavigate.ts:135-145; TST Profile.mvc.js:3137-3151 |
| 056 | Event_Layout_OnReadyEvent | MainContainerId = ContentContainerId | onMainContainerReady → reducer mainContainerReady | `match` | app/src/pages/Profile/hooks/useProfile.ts:201-203; app/src/pages/Profile/hooks/profileState.ts:229-230; TST Profile.mvc.js:3324-3341 |
| 057 | Event_HouseholdPreview_OnInitialized | PreviewHousehold_BottomSheetId = Id | onPreviewSheetInitialized → reducer previewSheetInitialized | `match` | app/src/pages/Profile/hooks/useProfile.ts:204-206; TST Profile.mvc.js:3101-3118 |
| 058 | OnClick_ViewPreview | AccountForm_ViewPreview = AccountForm, then BottomSheetOpen(PreviewHousehold_BottomSheetId) | dispatch viewPreviewAssigned(accountForm), then bottomSheetOpen(previewBottomSheetId) | `match` | app/src/pages/Profile/hooks/useProfile.ts:112-115; TST Profile.mvc.js:3071-3090 |
| 059 | OnClick_UBTAccountNumber | JSUtils_CopyToClipboard(AccountForm.AccountForm_IdentificationInformation.AccountNumber) | jSUtils_CopyToClipboard(accountForm AccountNumber); an error goes to the flow handler | `match` | app/src/pages/Profile/hooks/useProfile.ts:117-121; app/src/lib/jsUtils.ts:63; TST Profile.mvc.js:3203-3219 |
| 060 | OnChange_Fields | HasChanges = not (AccountForm = AccountFormOriginal), then Action_FormatAddress | changeFields → reducer fieldsChanged: hasChanges = !sameRecord(next, original); the formatted address is derived from accountForm | `match` | app/src/pages/Profile/hooks/useProfile.ts:99-104; app/src/pages/Profile/hooks/profileState.ts:153, 212-216; TST Profile.mvc.js:3811-3830 |
| 061 | Action_FormatAddress | FormattedAddress = Replace(AddressFormat, "\r\n" as literal text, " "); then each "[Address<NumberRef>]" → Value | action_FormatAddress splits on the CR LF characters, then replaces each "[Address<NumberRef>]" with Value | `partial` | app/src/pages/Profile/hooks/profileState.ts:165-173; TST Profile.mvc.js:3757-3785<br>The compiled code passes the 4-character text backslash r backslash n. React replaces the CR LF control characters. **F3** (info) |
| 062 | OnAfterFetch_GetCountryInfo | Action_FormatAddress | formattedAddress is computed from countryInfo.data on each render | `match` | app/src/pages/Profile/hooks/useProfile.ts:98-99; TST Profile.mvc.js:2870, 3919-3930 |
| 063 | OnChange_ShowAgeSwitch: confirmed | the switch sets ShowLifeCycleDates; ConfirmAction(AgeConfirmation_PopUp); IsConfirmed → OnChange_Fields | accountFormAssigned(checked), confirmAction('AgeConfirmation_PopUp'), confirmed → changeFields(next) | `match` | app/src/pages/Profile/hooks/useProfile.ts:124-129; app/src/platform/feedback/dialogs/confirmAction.ts:11-20; TST Profile.mvc.js:3838-3862 |
| 064 | OnChange_ShowAgeSwitch: cancelled | ShowLifeCycleDates = not ShowLifeCycleDates; HasChanges unchanged | accountFormAssigned with ShowLifeCycleDates = !checked; hasChanges unchanged | `match` | app/src/pages/Profile/hooks/useProfile.ts:130-134; TST Profile.mvc.js:3864-3867 |
| 065 | Event_OnBackNavigation_ConfirmDiscard | PreventNavigation(Event_NavigationEvent) | onNavigation = preventNavigation; the dialog opens when the event is prevented | `match` | app/src/pages/Profile/ProfilePage.tsx:115; app/src/lib/navigationEvent.ts:17; app/src/components/ui/Dialog/NavigationDialog.tsx:145-152; TST Profile.mvc.js:3883-3900 |
| 066 | Event_AgeConfirmation_Confirm | empty action (start → end); no widget or action calls it | not implemented | `n/a` | TST Profile.mvc.js:2993-3000, 3994-3996<br>Dead in the model: the action has no caller. |
| 067 | OnChange_LocalityDropdown | LocalityId = selection, SubdivionId = "", Action_RefreshSubdivionList, OnChange_Fields | - | `missing` | TST Profile.mvc.js:3233-3263<br>**F1** (major) |
| 068 | OnChange_LocalityDropdown: If Skip (True) and the country check behind it | the If has the constant condition True; the ListFilter, the CountryCode check and the GetCountryInfo refresh never run | not implemented | `n/a` | TST Profile.mvc.js:3264-3290; BR-UBTCON-994<br>Dead in the model. |
| 069 | OnChange_SubdivionDropdown | SubdivionId = selection, then OnChange_Fields | - | `missing` | TST Profile.mvc.js:2883-2904<br>**F1** (major) |
| 070 | Action_RefreshSubdivionList | no locality → empty list, SubdivionId = ""; locality and subdivisions cached → ListFilter on LocalityId; else nothing | - | `missing` | TST Profile.mvc.js:2932-2965<br>**F1** (major) |
| 071 | CacheControl_AllLocalitiesResult | ListSort by CountryName + " " + Name; LocalCacheControl_AllLocalities = response; isFetched True | - | `missing` | TST Profile.mvc.js:3026-3050<br>**F1** (major) |
| 072 | CacheControl_AllSubdivisionsResult | LocalCacheControl_AllSubdivions = response; isFetched True; Action_RefreshSubdivionList | - | `missing` | TST Profile.mvc.js:3160-3183<br>**F1** (major) |
| 073 | OnClick_Save: start | isLoading_Submit = True; ScreenController_ValidateWidgets(ScreenController); isValid = DetailsForm.Valid | submitStarted; validation.validate(); isValid = validation.isValid('DetailsForm') | `match` | app/src/pages/Profile/hooks/useProfile.ts:137-143; TST Profile.mvc.js:3535-3542; migration/change-requests/CR-Profile-2.md |
| 074 | OnClick_Save: isValid False | isLoading_Submit = False; HasChanges = False; end | submitInvalid: isLoadingSubmit false, hasChanges false; return | `match` | app/src/pages/Profile/hooks/useProfile.ts:144-147; app/src/pages/Profile/hooks/profileState.ts:223-224; TST Profile.mvc.js:3651-3657 |
| 075 | OnClick_Save: isValid True, the service call | isRequireRequestCreation (address, username, email, home, mobile, work changed); Member_EditDetails_Service(AccountForm, flag) | isRequireRequestCreation(form, accountFormOriginal) with the same six parts; editMemberDetails(form, flag) | `match` | app/src/pages/Profile/hooks/useProfile.ts:148-150; app/src/pages/Profile/hooks/profileState.ts:175-189; TST Profile.mvc.js:3598-3605 |
| 076 | OnClick_Save: after the call, isLoading_Submit = False and AccountFormOriginal = AccountForm | assigns the live AccountForm after the call, so edits typed while the call runs stay in the inputs | submitSaved and changeFields(form, form) use the form as it was when Save was clicked; edits typed during the call are reverted | `partial` | app/src/pages/Profile/hooks/useProfile.ts:149-151, 167; TST Profile.mvc.js:3607-3611<br>Edge case: the inputs stay enabled while the call runs. **F4** (info) |
| 077 | OnClick_Save: ChangedVisibilityPreferences true arm | Cache_UserInfo_Get; DisplayAge, DisplayMobilePhone, DisplayWorkPhone from the form; Get_MemoryCacheKey_UniqueKey; PutCacheableObject(DirectoryUser, key, object, 7200) | getUserInformation() (GetUserInformation_Wrapper); the same three flags; putCacheableObject(memberCache.userInfo(UniqueCacheKey), TTL 7200) | `partial` | app/src/pages/Profile/hooks/useProfile.ts:152-166; app/src/platform/session/userInfo.ts:29-46; app/src/api/member/keys.ts:26; TST Profile.mvc.js:3613-3637; BR-C2UTL-141<br>React reads the entry through GetUserInformation_Wrapper. That wrapper waits for the app-start step and writes Client.App_Policies_HasPolicyToAccept. Cache_UserInfo_Get does neither. **F5** (info) |
| 078 | OnClick_Save: ChangedVisibilityPreferences false arm | the condition compares AccountFormOriginal with the AccountForm that was assigned one node earlier, so the false arm never runs | not implemented | `n/a` | TST Profile.mvc.js:3611-3615; BR-UBTCON-991<br>Dead in the model: the condition always holds (BR-UBTCON-991). |
| 079 | OnClick_Save: OnChange_Fields and the success message | OnChange_Fields; FeedbackMessage_AutoClose("", "Your update request has been submitted.", Success, True, "", 0, False) | changeFields(form, form); feedbackMessageAutoClose with the same message and arguments | `match` | app/src/pages/Profile/hooks/useProfile.ts:167-176; TST Profile.mvc.js:3644-3648 |
| 080 | OnClick_Save: exception NotRegistered | re-raises NotRegistered; isLoading_Submit stays True | no submitFailed for NotRegisteredException; raiseToFlowHandler(error) | `match` | app/src/pages/Profile/hooks/useProfile.ts:74-78, 177-179; TST Profile.mvc.js:3664-3674 |
| 081 | OnClick_Save: exception CommunicationException | isLoading_Submit = False; raise BubbleCommunicationException with the message | submitFailed; UserException UBTConnect.BubbleCommunicationException with the message | `match` | app/src/pages/Profile/hooks/useProfile.ts:79-82, 177-179; TST Profile.mvc.js:3677-3690 |
| 082 | OnClick_Save: exception AllExceptions (not a system exception) | isLoading_Submit = False; raise BubbleGenericException with the message | submitFailed; UserException UBTConnect.BubbleGenericException with the message | `match` | app/src/pages/Profile/hooks/useProfile.ts:83-86, 177-179; TST Profile.mvc.js:3693-3706 |
| 083 | OnClick_Save: other system exception | no handler: the exception goes up, isLoading_Submit stays True | submitFailed sets isLoadingSubmit false, then the error goes up | `partial` | app/src/pages/Profile/hooks/useProfile.ts:87, 177-179; TST Profile.mvc.js:3693, 3709<br>**F4** (info) |
| 084 | [DISABLED] FeedbackMessage_AutoClose "Please provide all mandatory fields" | disabled node of OnClick_Save | not called | `n/a` | pack/screens.md Profile OnClick_Save; BR-UBTCON-989<br>Dead in the model. |
| 085 | unreachable end nodes (18 screen actions and the data action GetCountryInfo) | not connected | not implemented | `n/a` | pack/screens.md Profile<br>Dead in the model. |

**Validations**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 086 | built-in validation of the inputs (ScreenController_ValidateWidgets) | every widget of the screen is validated; for Text and Phone a value is always valid; Input_Email fails on the browser validity: "Enter a valid email." | validation.validate() over the registered inputs; type email fails with "Enter a valid email."; message markup after the input | `match` | app/src/pages/Profile/components/FormInput.tsx:26-50; app/src/components/ui/os/OSValidation/validationService.ts:56-66; migration/change-requests/CR-Profile-2.md |
| 087 | Mandatory of the built inputs | Mandatory False on the identification, personal and contact inputs | mandatory: false on every FormInput | `match` | app/src/pages/Profile/components/FormInput.tsx:28-33; TST Profile.mvc.js:687, 805, 993, 1065, 1851, 2028, 2249 |
| 088 | AddressInput Mandatory = Current.Required | an empty required line fails the built-in validation ("This field is required."), so DetailsForm.Valid is False | - | `missing` | TST Profile.mvc.js:1443-1479, 3539-3542<br>**F1** (major) |
| 089 | OnClick_Save, householder: DropdownClearValidation | clears LocalityDropdown and the container Subdivion (not SubdivisionDropdown) | - | `missing` | TST Profile.mvc.js:3543-3550<br>TST passes the container id Subdivion, so an earlier error of SubdivisionDropdown stays. **F1** (major) |
| 090 | OnClick_Save, householder: no locality | LocalityId = NullTextIdentifier() → DropdownNotValid(LocalityDropdown, "This field is required."), isValid = False | - | `missing` | TST Profile.mvc.js:3552-3559<br>**F1** (major) |
| 091 | OnClick_Save, householder: no subdivision | SubdivionId = NullTextIdentifier() → DropdownNotValid(SubdivisionDropdown, "This field is required."), isValid = False | - | `missing` | TST Profile.mvc.js:3562-3569<br>**F1** (major) |
| 092 | OnClick_Save, householder: required address lines | each line: IsValid = not (Required and Value = ""); the not-valid class follows IsValid | - | `missing` | TST Profile.mvc.js:3571-3592<br>**F1** (major) |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 093 | BR-UBTCON-988 | householder: address block, locality and subdivision caches, HomeNumber enabled; householder or spouse: Switch2, Switch3 and the two notes; identification and username read-only | HomeNumber enabled = isHouseholder; switches and notes = isHouseholder \|\| isSpouse; read-only inputs; no address block | `partial` | app/src/pages/Profile/components/ContactInformationSection.tsx:58, 70, 91, 105, 126; app/src/pages/Profile/hooks/useProfile.ts:198; BR-UBTCON-988<br>The address part of the rule is not built. **F1** (major) |
| 094 | BR-UBTCON-989 | householder: locality, subdivision and required address lines checked on save; other members: the form only | every member: the form only | `missing` | app/src/pages/Profile/hooks/useProfile.ts:137-147; BR-UBTCON-989<br>**F1** (major) |
| 095 | BR-UBTCON-990 | the client computes isRequireRequestCreation; the save always shows "Your update request has been submitted."; no output read | the same flag, the same message, no output read | `match` | app/src/pages/Profile/hooks/profileState.ts:175-189; app/src/pages/Profile/hooks/useProfile.ts:150, 168-176; BR-UBTCON-990 |
| 096 | BR-UBTCON-991 | after a save the cached visibility flags are always refreshed | the true arm runs on every successful save | `match` | app/src/pages/Profile/hooks/useProfile.ts:152-166; BR-UBTCON-991 |
| 097 | BR-UBTCON-992 | the age switch asks in both directions with the enabling or disabling text; Cancel flips the switch back | the same dialog texts and the same two branches | `match` | app/src/pages/Profile/ProfilePage.tsx:135-147; app/src/pages/Profile/hooks/useProfile.ts:124-135; BR-UBTCON-992 |
| 098 | BR-UBTCON-993 | back with HasChanges asks to discard; after a save or a failed validation HasChanges is False and no question shows | NavigationDialog only while hasChanges; submitSaved / changeFields and submitInvalid set hasChanges false | `match` | app/src/pages/Profile/ProfilePage.tsx:110-119; app/src/pages/Profile/hooks/profileState.ts:223-226; BR-UBTCON-993 |
| 099 | BR-UBTCON-994 | a locality choice clears the subdivision and narrows the subdivision list; the country refresh is dead | no locality choice | `missing` | BR-UBTCON-994; TST Profile.mvc.js:3233-3263<br>**F1** (major) |
| 100 | BR-UBTCON-820 (preview of the unsaved form) | HouseholdDetails_Block with Preview.UsePreview: Address = FormattedAddress; the member gets DisplayAge, MobilePhone and WorkPhone only when shown, Email; a householder also HomePhone | handlePreviewData with the same assignments; onParametersChanged sets the age visibility from the preview | `match` | app/src/containers/HouseholdDetails/hooks/householdDetailsState.ts:151-180; app/src/containers/HouseholdDetails/hooks/useHouseholdDetails.ts:152-160; BR-UBTCON-820<br>The other rules of HouseholdDetails_Block (BR-UBTCON-812 to 821) are checked in the report of Directory_Household. |
| 101 | client variables of the screen | the screen reads and writes no client variable; the six of pack/data.md come from the blocks (CommonUI_InsideLayout, Block_PINUnlock, Policy_Checker, Directory_EntityDetailsActions) | the screen code reads no client variable; clientVar.uniqueCacheKey is read for the cache key, as Get_MemoryCacheKey_UniqueKey does | `match` | app/src/pages/Profile/hooks/useProfile.ts:155; pack/data.md; TST Profile.mvc.js:3633-3637<br>The extra write of App_Policies_HasPolicyToAccept on save is F5. |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 102 | strings of the built sections (30) | "Edit Account", "Preview Household Profile", "Identification", "ContactBase ID", "UBT Account Number", "Personal Information", the 48-hour note, "Username", "Email", the Global Media Stream note, "Display Month and Year of Birth, and Age", the 12-hour note, "Address Information", "Contact Information", "Home Number", "Mobile Number", "Work Number", "Display"/"Hide" + the two note endings, "Close", "Save", "Confirm", the discard question, the two age texts, "Update Preference", "Cancel", "Your update request has been submitted.", the two calc() values | the same texts | `match` | app/src/pages/Profile/ProfilePage.tsx:56, 63, 116-117, 140-146; app/src/pages/Profile/components/*.tsx; app/src/pages/Profile/hooks/useProfile.ts:170 |
| 103 | strings of the address section | "Locality", "Subdivision", Prompt "-", the label expression Name + ", " + CountryName, "This field is required." (DropdownNotValid) | - | `missing` | TST Profile.mvc.js:1514, 1544, 1555-1560, 1602, 1662, 3555, 3565<br>**F1** (major) |
| 104 | "Month, Year of Birth and Age." | inside a comment of the BirthDateandAgeNote expression; not shown | not shown | `match` | pack/strings.md; TST Profile.mvc.js:1231 |
| 105 | "Please provide all mandatory fields" | the message of the disabled node | not shown | `n/a` | pack/screens.md Profile OnClick_Save<br>Dead in the model. |

All 30 strings of the built sections match. The 5 strings of the address section are missing (F1).

## 3. Blocks of the flow

### 3.1 Profile_HouseholdPreview

Component `app/src/pages/Profile/components/ProfileHouseholdPreview.tsx`. ProfilePage renders the block when the
user information has come (row 053 of §2.1).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 106 | inputs and event | HouseholdId: Long Integer (mandatory); Preview: HouseholdPreviewStructure; event OnInitialized(Id) mandatory | props id, onOnInitialized(id), renderHousehold(id); the page gives HouseholdId and Preview to HouseholdDetailsContainer | `match` | app/src/pages/Profile/components/ProfileHouseholdPreview.tsx:6-14; app/src/pages/Profile/ProfilePage.tsx:120-134; TST Profile_HouseholdPreview.mvc.js:13-22 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 107 | BottomSheet (UBTConnectLibrary) | Title "Preview Household Profile", Content_Padding GeneralSizeId None; Initialized → OnInitialized(Id) | ConnectBottomSheet with the same title and padding; onInitialized = onOnInitialized | `match` | app/src/pages/Profile/components/ProfileHouseholdPreview.tsx:16, 26-30; TST Profile_HouseholdPreview.mvc.js:157-177 |
| 108 | container inert | container with inert="" and style "text-align: left;" | div data-container inert, textAlign left | `match` | app/src/pages/Profile/components/ProfileHouseholdPreview.tsx:32; TST Profile_HouseholdPreview.mvc.js:195-205 |
| 109 | HouseholdDetails_Block arguments | HouseholdId, isEnabled False, In_ShowKebabMenu True, Preview; Placeholder_CarouselTag empty | HouseholdDetailsContainer isEnabled false, showKebabMenu, source preview (householdId, preview) | `match` | app/src/pages/Profile/ProfilePage.tsx:124-132; app/src/containers/HouseholdDetails/HouseholdDetailsContainer.tsx:18, 52-65; TST Profile_HouseholdPreview.mvc.js:210-234 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 110 | "Preview Household Profile" | the sheet title | the same title | `match` | app/src/pages/Profile/components/ProfileHouseholdPreview.tsx:28; TST Profile_HouseholdPreview.mvc.js:164 |

### 3.2 Blocks of other flows

- HouseholdDetails_Block (Directory_Household, `../Directory_Household/pack/blocks.md`): the preview passes the
  arguments of the HouseholdDetails_Block row (`match`). BR-UBTCON-820 has its own row here. The other rules of the
  block (BR-UBTCON-812 to 821) belong to the report of Directory_Household.
- CommonUI_InsideLayout (App_Common): the screen places the block with no arguments (`match`). The report of
  App_Common checks the behaviour (BR-UBTCON-310 to 313).
- CacheControl_UserInfo_Wrapper (App_Cache, `../_shared/pack/blocks.md`): the screen handles its Result (`match`).
  The report of App_Cache checks the block.
- Dialog_Navigation and Dialog_CustomChoice (App_Common_Blocks_PopupDialogs), SectionSeparator (App_Common_Blocks):
  the screen passes the placeholders of their rows (`match`). The report of `_shared` checks the blocks.
- Through HouseholdDetails_Block: Directory_EntityDetailsActions, HouseholdDetails_Members_Block,
  HouseholdDetails_TimelinePhoto, HouseholdDetails_TimelinePhoto_List, SubLayout_DirectoryDetailScreen and
  SubLayout_DirectoryDetailScreen_Section. Not checked here.
- Through CommonUI_InsideLayout: Block_PINUnlock and Block_PINUnlock_ContentWrapper (App_PIN), Policy_Checker
  (App_Policies), OfflineDataSyncEvents, UnsupportedVersion_Wrapper and its cards, WelcomeToConnect (App_Common),
  HandleOnResumeOpenLink (Legacy_Share). Not checked here.

## 4. Shared blocks and actions

The screen calls none of the 27 shared client actions of `pack/actions.md` itself. They come through
HouseholdDetails_Block, Directory_EntityDetailsActions and the common blocks. This report does not check them
(shared):

- ExitApplicationForWebViewUpdate, GetBookmarkCategoryId_ByEntityTypeId, GetNameAndSurname_ByFullName,
  GetShareType_FromEntity, GetURLFromEventDataURL, SetResumeLoginLink, ToggleBookmarkItem_C2
- the six GetSkeleton actions, HasAccessToRegion, IsHouseholdDetails_InAncestryModeView
- GetUserInformation_Wrapper, GetUserInformation_Wrapper_Assign, OfflineDataSync, OfflineDataSyncConfiguration
- Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, Try_GetIsSupportedVersion, the three OpenGooglePlay actions,
  Upgrade_UBTConnect, Upgrade_WebView

The rows of §2.1 check the calls of the referenced client actions that the screen makes: ScreenController_Get,
ScreenController_ValidateWidgets, ConfirmAction, PreventNavigation, BottomSheetOpen, JSUtils_CopyToClipboard,
FeedbackMessage_AutoClose, Cache_UserInfo_Get, Get_MemoryCacheKey_UniqueKey and PutCacheableObject. React does not
call DropdownClearValidation, DropdownNotValid and DropdownSearch_ForceResizeOnOpen (F1).

Not checked here (referenced UI blocks): the internals of Layout_HomePage, IconText, Icon, SkeletonSection,
CustomContainer, CustomText, UBT_LazyImage, InputWithIcon, Columns_Two, FixedFooter, Button, ButtonLoading and
BottomSheet. The rows check the arguments that the flow passes. React does not use DropdownSearch,
CacheControl_AllLocalities and CacheControl_AllSubdivisions (F1).

Not checked here (server actions of the transitive blocks): GetHouseholdDetails, GetHouseholdCoordinates,
GetNotesByItemId, Member_ContactDetails_Service, AddBookmark2, DeleteBookmarkByBookmarkId2,
GetSubdivisionLocation_BySubdivisionId, Get_Core_LocalityTimezone and Get_OneSchoolGlobalDetails. HouseholdDetails_Block
and Directory_EntityDetailsActions call them; the reports of Directory_Household and `_shared` check them.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | major | Profile / address section (`#isHouseholder_Address`, `#isHouseholder_Cache`, the householder checks of OnClick_Save) | For a householder, React shows the title "Address Information" in a NotCaptured marker only. Not built: the address lines, the Locality and Subdivision DropdownSearch, CacheControl_AllLocalities, CacheControl_AllSubdivisions and their Result actions, Action_RefreshSubdivionList, the two OnChanged actions, DropdownSearch_ForceResizeOnOpen and the householder checks of OnClick_Save (BR-UBTCON-988, 989, 994). A householder cannot edit the address, and a save skips the locality, subdivision and required-line checks. The only record of this choice is an auto-accepted answer (`migration/knowledge/auto-decisions-2026-10-15.md:64`). The board row of Profile does not name it. | `app/src/pages/Profile/ProfilePage.tsx:85-89`; `app/src/pages/Profile/hooks/useProfile.ts:106-107, 139-141` | Q1. | |
| F2 | minor | Profile / Input_Email, HomeNumber2, Input_MobileNumber, Input_WorkNumber | FormInput sets no `maxLength` and no `autoComplete`. TST limits Input_Email to 50 characters and the three phone inputs to 15. The phone inputs have `autocomplete="off"` in TST. A user can type longer values in React, and the save sends them. | `app/src/pages/Profile/components/FormInput.tsx:11-47`; `app/src/pages/Profile/components/PersonalInformationSection.tsx:60-68`; `app/src/pages/Profile/components/ContactInformationSection.tsx:55-63, 82-90, 117-125` | Add `maxLength` and `autoComplete` props to FormInput and pass the TST values (Profile.mvc.js:1066, 1843-1852, 2020-2029, 2241-2250). | fixed 2026-10-27 (`fixes/D-forms.md`) |
| F3 | info | Profile / Action_FormatAddress | TST passes the literal text `\r\n` (4 characters) to Replace: OutSystems text literals have no escape sequences (Profile.mvc.js:3773). The CR LF characters of AddressFormat stay in FormattedAddress. React replaces the CR LF characters with a space. With the normal white-space rule, the preview shows the same text. | `app/src/pages/Profile/hooks/profileState.ts:165-173` | Replace the 4-character text as TST does, and add a test with the recorded format (`app/src/mocks/fixtures/UBTConnect/DataActionGetCountryInfo/01-c52c670a.json`). | |
| F4 | info | Profile / OnClick_Save | Two edge branches differ. (1) React sets AccountForm and AccountFormOriginal to the form as it was when the user clicked Save. TST assigns the live AccountForm after the call, so edits typed during the call stay in the inputs. (2) For a system exception other than NotRegistered, React sets isLoading_Submit False; TST leaves it True. | `app/src/pages/Profile/hooks/useProfile.ts:149-151, 167, 177-179` | Let the reducer copy the current `state.accountForm` after the call, and skip `submitFailed` for a SystemException. | |
| F5 | info | Profile / OnClick_Save, ChangedVisibilityPreferences | React reads the cache entry with `getUserInformation` (GetUserInformation_Wrapper). That wrapper waits for the app-start step and writes `Client.App_Policies_HasPolicyToAccept`. TST calls Cache_UserInfo_Get: it reads the same entry (DirectoryUser, UniqueCacheKey, 7200 s, GetUserInformation on a miss) and writes no client variable (BR-C2UTL-141). | `app/src/pages/Profile/hooks/useProfile.ts:153`; `app/src/platform/session/userInfo.ts:29-46` | Add a Cache_UserInfo_Get port without the client-variable write, or record the difference in a CR. | |
| F6 | info | Profile / code comments | `useProfile.ts:34-37` says that the screen has no OnReady; TST has OnReady → ScreenEvent_OnReady (Profile.mvc.js:3943-3970, 4091-4101). The comments at `ProfilePage.tsx:86`, `useProfile.ts:106-107, 139-141` and `mocks.ts:11-24` give route questions (Q1, Q2, Q4, "pending") as the reason for the code. | `app/src/pages/Profile/hooks/useProfile.ts:34-37`; `app/src/pages/Profile/mocks.ts:11-24` | Correct the OnReady comment. After the answer to Q1 of this report, cite the board row or a CR, not the route questions. | |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

No difference in behaviour. The DEV pack and the TST compiled code agree on every checked item of
`UBTConnect.App_Profile.Profile.mvc.js` and `UBTConnect.App_Profile.Profile_HouseholdPreview.mvc.js`.

The pack does not show some constant widget properties that TST has:

- `Enabled = False` of Input_ContactBaseId, Input_UBTAccountNumber and Input_Username (Profile.mvc.js:682, 800,
  988). BR-UBTCON-988 (from DEV) names these read-only inputs, so the omission is in the pack.
- `MaxLength 50` of Input_Username, Input_Email and AddressInput (Profile.mvc.js:994, 1066, 1454). The report has
  no DEV evidence for these values.
- The style `text-align: left;` of the inert container of Profile_HouseholdPreview
  (Profile_HouseholdPreview.mvc.js:200-202).

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| - | - | - | - | no difference found |

### 6.2 KB pages vs TST (for the KB owner)

The KB pages come from DEV (2026-10-05). In these three places a KB page disagrees with the DEV pack and with TST.

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | BR-UBTCON-988, title: "personal and contact sections are shown to the householder and the householder's spouse"; outcome: "the three `isHouseholder or isSpouse` sections" | The Personal Information and Contact Information sections show for every member. Four If widgets use `isHouseholder or isSpouse`, each around one widget: Switch2, MobileNumber_Note, Switch3, WorkNumber_Note | `UBTConnect.App_Profile.Profile.mvc.js:1974, 2053, 2195, 2274` |
| K2 | BR-UBTCON-989, outcome: "a required empty address line marks the line but does not clear `isValid` — only the dropdown checks do" | AddressInput has `mandatory` = Current.Required, and ScreenController_ValidateWidgets validates every widget before `isValid = DetailsForm.Valid`. An empty required line makes `isValid` False (built-in validation, CR-Profile-2) | `UBTConnect.App_Profile.Profile.mvc.js:1453, 3539-3542` |
| K3 | `ui/profile-services.md`, Components: "identification (member id, account number — copyable, username: read-only)", "header with avatar and \"View preview\"", "sticky Save" | Username is in Personal Information, after the 48-hour note. The link text is "Preview Household Profile". The fixed footer has Close and Save | `UBTConnect.App_Profile.Profile.mvc.js:893-1015, 491, 2423, 2488` |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Build the address section of the householder (F1), or keep it out of the app? | A householder cannot edit the address, and the save skips BR-UBTCON-988, 989 and 994. The only record is an auto-accepted answer (`migration/knowledge/auto-decisions-2026-10-15.md:64`), not a user decision on the board. | (a) Build it now: the address lines, the two DropdownSearch widgets, CacheControl_AllLocalities and CacheControl_AllSubdivisions with mocks, the handlers and the save checks (Profile.mvc.js:1269-1716, 2596-2640, 2883-3290, 3543-3592). (b) Keep it out, and record the gap on the board row of Profile or in a CR. | (a): the goal is a 1:1 replacement, and the householder is the member who edits the address. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 6 | 4 | 1 | 1 | 0 | 0 | 0 | 0 |
| data | 10 | 5 | 0 | 3 | 0 | 2 | 0 | 0 |
| ui | 42 | 33 | 5 | 4 | 0 | 0 | 0 | 0 |
| actions | 31 | 17 | 4 | 5 | 0 | 0 | 5 | 0 |
| validations | 7 | 2 | 0 | 5 | 0 | 0 | 0 | 0 |
| logic | 9 | 6 | 1 | 2 | 0 | 0 | 0 | 0 |
| strings | 5 | 3 | 0 | 1 | 0 | 0 | 1 | 0 |
| **total** | **110** | **70** | **11** | **21** | **0** | **2** | **6** | **0** |
