# Flow report: App_Menu_ContactUs

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 2 (built: 2, ContactUsMenu, ContactUsDetails; not built: none) |
| Own blocks | ContactUs_Rate (used by ContactUsDetails), ContactUs_RateItem (used only in a dead branch of ContactUs_Rate) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB page `ui/contact-us.md` and the rules it names, the other KB UI pages of `pack/kb.md`, TST compiled code of the four elements and of `UBTConnect.controller.js` (`tst_source.py show`; the line numbers are those of its output), `migration/runtime-sources/OutSystems.js`, `migration/shell/sources/UBTJavaScriptUtils.controller.js` |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

## 1. Summary

- Counts by verdict: match 104 · partial 13 · missing 21 · differs 0 · mock-only 3 · n/a 6 · unclear 0 (same as `checklist.json`).
- **F1** (blocker): ContactUsDetails does not build the form of a signed-out user. Full Name, Email, Phone Number,
  the Country list and Locality are absent, so Send stays disabled for a signed-out user.
- **F2** (major): the rating block ContactUs_Rate is not built. On the feedback subject the user cannot give a
  rating, and React always sends `Rate` 0.
- **F3** (major): DataAction_GetLocalityTimezone sends fewer screen variables than TST. The missing
  `LocalCacheControl_UserInformation` holds the `Locality_Id` that the server reads. The mock hides the gap.
- Status: in React a signed-in user can pick a subject, write a message, set the contacted check box, call the
  Support Team and send. The confirmation and the leave dialog work as on TST. A signed-out user can open the form,
  but cannot send it. Nobody can give a rating.

## 2. Screens

### 2.1 ContactUsMenu

Route `/UBTConnect/ContactUsMenu`, screen file `app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx`, flows in
`app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts` and `contactUsMenuState.ts`. Board: `build`, built (V4c,
user 2026-10-14). The TST compiled code agrees with the DEV pack on every item except the transition (§6.1).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | roles Anonymous, Registered, UBTOne_User | a signed-out or a signed-in user opens the screen | ROUTE_META ContactUsMenu { access: 'anonymous', lock: 'enforce' } | `match` | app/src/app/routes.ts:52; BR-UBTCON-965 |
| 002 | input parameters | none | route inputs [] | `match` | app/src/app/routes.generated.ts:7 |
| 003 | local ContactUs_Menu (UI_MenuSection List) | set on initialize; the view cache keeps it | useState from the view cache or from get_ContactUsMenuSections; useViewState('ContactUs_Menu') | `match` | app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts:35-41 |
| 004 | locals IgnorePolices, IgnoreLockedScreen (Boolean) | set on initialize | useState(initialIgnore(...)) | `match` | app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts:32; app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:8-18 |
| 005 | lifecycle | OnInitialize → ScreenEvent_OnInitialize; no OnReady | state initializers before the first render; no OnReady effect | `match` | app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts:28-41 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 006 | data actions and aggregates | none; Get_ContactUsMenuSections is a client action | no server call | `match` | pack/screens.md ContactUsMenu; app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts:14-17 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 007 | Layout_DetailPage (default inputs), Placeholder_Header_Title "Contact Us" | detail layout titled Contact Us | DetailLayout headerTitle "Contact Us", onBack | `match` | app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx:24-27; TST ContactUsMenu.mvc.js:153 |
| 008 | CustomContainer with the intro text | padding vertical Small, horizontal Base; Neutral10, font Small | CustomContainer with the same options and text | `match` | app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx:30-41; TST ContactUsMenu.mvc.js:180-197 |
| 009 | container contact-us-menu > List source=ContactUs_Menu | style list list-group, animateItems True | div contact-us-menu > OSList className list list-group, animateItems, source contactUsMenu | `match` | app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx:42-49; TST ContactUsMenu.mvc.js:210-218 |
| 010 | Menu_List In_MenuSection=ContactUs_Menu.Current, OnClick_MenuOption | event → OnClick_MenuOption(UI_ListMenuOption.Id) | MenuList inMenuSection={section}; onOnClickMenuOption → onClickMenuOption(section, option) | `match` | app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx:50-57; TST ContactUsMenu.mvc.js:235, 248 |
| 011 | SectionSeparator after the list | one separator | SectionSeparator $b4 | `match` | app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx:61; TST ContactUsMenu.mvc.js:270 |
| 012 | CommonUI_InsideLayout | In_IgnorePolicy=IgnorePolices, In_IgnoreLockScreen=IgnoreLockedScreen | CommonUiLayout inIgnorePolicy={ignore.polices} inIgnoreLockScreen={ignore.lockedScreen} | `match` | app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx:64; TST ContactUsMenu.mvc.js:293-294 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 013 | ScreenEvent_OnInitialize: PIN_Check, IgnorePolices | IgnorePolices = GetUserId() = NullIdentifier() or PIN_Check.NeedRegister | initialIgnore: !isSignedIn \|\| needRegister, with pinCheck() | `match` | app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts:32; app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:16-18; TST ContactUsMenu.mvc.js:360-364 |
| 014 | ScreenEvent_OnInitialize: IgnoreLockedScreen | GetUserId() <> NullIdentifier() and PIN_Check.NeedRegister | isSignedIn && needRegister | `match` | app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:17; TST ContactUsMenu.mvc.js:367 |
| 015 | IsViewRestoredFromCache: restored | End: ContactUs_Menu keeps the cached value | restored and a cached value → the cached value | `match` | app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts:30-38; TST ContactUsMenu.mvc.js:512 |
| 016 | IsViewRestoredFromCache: not restored | ContactUs_Menu = Get_ContactUsMenuSections.Out_ContactUsMenuSections | get_ContactUsMenuSections(currentUserId() !== null) | `match` | app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts:36-38; TST ContactUsMenu.mvc.js:382 |
| 017 | OnClick_MenuOption: ListIndexOf | Id = Event_ListMenuOptionId in ContactUs_Menu.Current.MenuOptions | findIndex on section.MenuOptions | `match` | app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:30-33; TST ContactUsMenu.mvc.js:426<br>Menu_List raises the clicked row of the same section, so the position is always found. |
| 018 | OnClick_MenuOption: navigate to ContactUsDetails | In_ContactSubjectId=TextToIdentifier(row Id), In_ContactSubjectTitle=SectionTitle, In_ListMenuOptionLabel=row Label | navigate('/UBTConnect/ContactUsDetails', contactUsDetailsParams(...)) | `match` | app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts:44-50; app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:34-38; TST ContactUsMenu.mvc.js:432-435; BR-UBTCON-966 |
| 019 | OnClick_MenuOption: transition | DEV: Inherited; TST: TransitionAnimation.Default | navigate without options (Default) | `match` | TST ContactUsMenu.mvc.js:436; report §6.1 |
| 020 | unhandled error of a screen action | screen handleError → flow handler | try/catch → raiseToFlowHandler | `match` | app/src/pages/ContactUsMenu/hooks/useContactUsMenu.ts:45-49; TST ContactUsMenu.mvc.js:498-499 |

**Validations**

The screen has no input widget and no validation.

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 021 | Get_LookupContactUsMenu: the five subjects of every user | Id = Label = Type_ContactSubject record; icons UBT, PersonAdd, ShoppingBasket, AccountCircle, PersonPlay | get_LookupContactUsMenu with option(subject, icon) | `match` | app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:54-74; TST UBTConnect.controller.js:4835-4948 |
| 022 | Get_LookupContactUsMenu: If GetUserId() <> NullIdentifier() | signed in: GeneralQuestions (BookOpen), GeneralSuggestions = GeneralSuggestionsFeedbackRating (Tooltip); signed out: GeneralQuestionsOrSuggestions (BookOpen) | isSignedIn branch with the same records and icons | `match` | app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:75-84; TST UBTConnect.controller.js:4835-4948; BR-UBTCON-266 |
| 023 | Get_ContactUsMenuSections | three sections: User Account Management (4 rows), Community Engagement (1 row), General Inquiries (2 rows signed in, 1 row signed out) | get_ContactUsMenuSections with the same sections and rows | `match` | app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:92-112; TST UBTConnect.controller.js:4057-4140; BR-UBTCON-266 |
| 024 | UI_MenuSection.HasSeparator record default | the sections do not set it: default True | MenuList: HasSeparator ?? true | `match` | app/src/components/menu/MenuList/MenuList.tsx:63; TST UBTConnect.model.js:13559-13561 |
| 025 | Type_ContactSubject values | TST static entity; "General Questions " ends with a space | Type_ContactSubject constant with the TST values | `match` | app/src/pages/ContactUsMenu/staticEntities.ts:6-15; migration/knowledge/static-entities-tst.json |
| 026 | UBT_Icons2 values of the rows | connect-icon-ubt, -person_add, -shopping_basket, -account_circle, -person_play, -book_open, -tooltip | UBT_Icons2_Local | `match` | app/src/pages/ContactUsMenu/staticEntities.ts:19-27; pack/references.md UBT_Icons2 |
| 027 | BR-UBTCON-965 | policy gate skipped when anonymous or PIN pending; lock skipped when signed in with PIN pending | initialIgnore and CommonUiLayout inputs | `match` | app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:16-18; app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx:64 |
| 028 | BR-UBTCON-966 | subject → ContactUsDetails(subject id, section title, row label) | contactUsDetailsParams | `match` | app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:30-39 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 029 | all strings of the screen | "Contact Us", the intro text, 3 section titles, 8 subject labels | the same texts | `match` | app/src/pages/ContactUsMenu/ContactUsMenuPage.tsx:27, 38-39; app/src/pages/ContactUsMenu/hooks/contactUsMenuState.ts:96, 104, 106; app/src/pages/ContactUsMenu/staticEntities.ts:6-15 |

### 2.2 ContactUsDetails

Route `/UBTConnect/ContactUsDetails`, screen file `app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx`, flows in
`hooks/useContactUsDetails.ts` and `hooks/contactUsDetailsState.ts`, parts in `components/`. Board: `build`, built
(V4c, user 2026-10-14). The board names no decision that removes the signed-out fields or the rating.

Two code comments give "Q1 → A" (signed-out fields) and "Q2 → A" (rating) as the reasons for the `NotCaptured`
placeholders (`components/ContactUsMessageForm.tsx:14, 18`). These comments cite past answers, and a past answer is
not evidence. The rows are `missing`, and the user decides again (Q1, Q2).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 030 | roles Anonymous, Registered, UBTOne_User | a signed-out or a signed-in user opens the screen | ROUTE_META ContactUsDetails { access: 'anonymous', lock: 'enforce' } | `match` | app/src/app/routes.ts:53 |
| 031 | input parameters In_ContactSubjectId, In_ContactSubjectTitle, In_ListMenuOptionLabel | three mandatory inputs (Type_ContactSubject Identifier, Text, Text) | three Text inputs from the query string, default "", read once | `match` | app/src/pages/ContactUsDetails/inputs.ts:14-19; app/src/app/routes.generated.ts:13; app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:28-29 |
| 032 | local variables of the form and the flags | ContactUsForm, IsFormFilled, IsAnyFilled, Description, MessagePrompt, isLogged, CountryPhone, isSubmiting, Rate_*, CallPopupData, isLoadingMainData (True), IgnorePolices | ContactUsDetailsState and initialContactUsDetailsState | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:20-53, 218-242<br>isLoadingMainData starts True and OnInitialize sets it to isLogged; React starts with isLogged. The first render is the same. |
| 033 | lifecycle | OnInitialize → ScreenEvent_OnInitialize; OnReady → ScreenEvent_OnReady | useReducer initializer before the first render; one OnReady effect | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:66-69, 77-88 |

**Data**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 034 | DataAction_GetCountriesNames: fetch moment | fetch OnDemand; ScreenEvent_OnReady refreshes it when not isLogged | fetchCountryNames in the OnReady effect when not isLogged; error → raiseToFlowHandler | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:77-88; app/src/api/message/repository.ts:104-108; TST ContactUsDetails.mvc.js:1716-1740, 2044-2060 |
| 035 | DataAction_GetCountriesNames: screen variables sent | the runtime sends the screen variables; Get_Core_CountriesNames has no input | countriesCallInputs: 6 of the variables | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:245-257<br>The server action reads no variable, so the smaller set has no effect. |
| 036 | DataAction_GetCountriesNames: server side | Connect_Geography_CS Get_Core_CountriesNames → Out_CountriesNames | contractHandler: an empty list | `mock-only` | app/src/pages/ContactUsDetails/mocks.ts:38-40<br>Production needs Get_Core_CountriesNames (Connect_Geography_CS) behind the screen data action. |
| 037 | DataAction_GetLocalityTimezone: fetch moment | fetch OnDemand; CacheControl_UserInfo_WrapperResult refreshes it after its assigns | fetchLocalityTimezone after userInformationFetched | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:91-99; app/src/api/message/repository.ts:96-100; TST ContactUsDetails.mvc.js:1688-1714, 2165-2170 |
| 038 | DataAction_GetLocalityTimezone: screen variables sent | In_LocalityId = LocalCacheControl_UserInformation...Locality_Id, read on the server from the screen data; TST also sends ContactUsForm, Description, MessagePrompt | localityTimezoneCallInputs: no LocalCacheControl_UserInformation, ContactUsForm, Description or MessagePrompt | `partial` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:262-282; app/src/mocks/fixtures/REVIEW.md:111-114; pack/screens.md DataAction_GetLocalityTimezone<br>**F3** (major)<br>The recorded TST call had the four variables; the fixture converter dropped them (rule dropInputs). |
| 039 | DataAction_GetLocalityTimezone: server side | Connect_Geography_CS Get_Core_LocalityTimezone(In_LocalityId) → Abbreviation, OffsetSeconds | recordedHandler, matchInputs false | `mock-only` | app/src/pages/ContactUsDetails/mocks.ts:37<br>Production needs Get_Core_LocalityTimezone (Connect_Geography_CS) behind the screen data action. |
| 040 | SendContactUsMessage: call | In_ContactUsForm, In_ContactSubjectId, Rate, Rate_UserWantToBeContacted → Out_ErrorMessage | sendContactUsMessage → ServiceAPISendContactUsMessage with the same four inputs | `match` | app/src/api/message/repository.ts:112-125; app/src/api/message/mapper.ts:135-150; TST ContactUsDetails.mvc.js:1661-1676; BR-UBTCON-970 |
| 041 | SendContactUsMessage: server side | Connect_Communication_CS SendContactUsMessage (recipient and sender chosen on the server) | mock: keeps the message in memory, Out_ErrorMessage "" | `mock-only` | app/src/pages/ContactUsDetails/mocks.ts:41-50; BR-C2SVC-060…064<br>Production needs SendContactUsMessage (Connect_Communication_CS). |
| 042 | If isLogged → CacheControl_UserInfo_Wrapper, Result | the cached Directory_UserCurrent of a signed-in user | UserInfoCache onResult, rendered only when isLogged | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:107; TST ContactUsDetails.mvc.js:1599-1610 |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 043 | Layout_DetailPage | In_AlignTitleLeft True, In_ExtendedClass "bottom-padding-base-button" | DetailLayout alignTitleLeft, extendedClass | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:98-102; TST ContactUsDetails.mvc.js:249-252 |
| 044 | Placeholder_Header_Title | In_ContactSubjectTitle | headerTitle span with In_ContactSubjectTitle | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:103; TST ContactUsDetails.mvc.js:269 |
| 045 | container #Content | the container that FixedFooter pads (ContentContainerId) | div id Content | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:19-20, 47 |
| 046 | CustomContainer of the header | padding vertical Small, horizontal Base | HEADER_OPTIONS | `match` | app/src/pages/ContactUsDetails/components/ContactUsDetailsHeader.tsx:15, 35 |
| 047 | In_ListMenuOptionLabel text | Neutral10, font Small, SemiBold | LABEL_OPTIONS with the label | `match` | app/src/pages/ContactUsDetails/components/ContactUsDetailsHeader.tsx:16-18, 36-38; TST ContactUsDetails.mvc.js:355 |
| 048 | Description text | margin top Small, font Small | DESCRIPTION_OPTIONS with the description | `match` | app/src/pages/ContactUsDetails/components/ContactUsDetailsHeader.tsx:19-22, 39-41; TST ContactUsDetails.mvc.js:401 |
| 049 | If isLogged and CountryPhone <> "" | "Prefer to speak with someone? \r\nGive our " + link "Support Team" (text-underline) → OnClick_SupportTeam + " a call." | showSupportTeamCall; the same texts, link class and margin | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:51; app/src/pages/ContactUsDetails/components/ContactUsDetailsHeader.tsx:42-60; TST ContactUsDetails.mvc.js:411-487; BR-UBTCON-973 |
| 050 | SectionSeparator | after the header | SectionSeparator $b6 | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:54; TST ContactUsDetails.mvc.js:501 |
| 051 | SubLayout_DirectoryDetailScreen_Section | In_Title "" | DirectoryDetailSection inTitle="" | `match` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:62; TST ContactUsDetails.mvc.js:520 |
| 052 | If Rate_ShowRate → ContactUs_Rate | isEnabled = not isSubmiting, SelectedRate = Rate_SelectedRate; RateSelected → ContactUs_RateRateSelected | NotCaptured placeholder | `missing` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:63-65; TST ContactUsDetails.mvc.js:538-560<br>**F2** (major) |
| 053 | If isLogged → title | If(subject = GeneralSuggestionsFeedbackRating, "Please provide your suggestions and feedback", "How can we help you?"); margin bottom Small, Small, SemiBold | the same If on isFeedbackSubject, TITLE_OPTIONS | `match` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:36-39, 66-71; app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:199; TST ContactUsDetails.mvc.js:576-620 |
| 054 | else → "All fields are required." | margin bottom Small, Small, SemiBold, italic | REQUIRED_OPTIONS | `match` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:40-43, 72-76; TST ContactUsDetails.mvc.js:640-668 |
| 055 | SkeletonSection | In_IsLoading = isLoadingMainData | Skeleton isLoading={isLoading} | `match` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:77; TST ContactUsDetails.mvc.js:681 |
| 056 | Form_ContactUs | style form, OSFillParent | OSForm id Form_ContactUs, style "form OSFillParent" | `match` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:78; TST ContactUsDetails.mvc.js:699-711 |
| 057 | If not isLogged → If True: label "Full Name" + Input_FullName | var ContactUsForm.FullName, prompt "Enter Full Name", OnChange → OnChange_FormInput | NotCaptured; UnbuiltValidationWidget Input_FullName | `missing` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:79-91; TST ContactUsDetails.mvc.js:712-772<br>**F1** (blocker) |
| 058 | If False → Input block (UBTConnectLibrary) | constant False: never rendered | not in React | `n/a` | TST ContactUsDetails.mvc.js:773-777 (both arms empty)<br>dead in the model |
| 059 | label "Email" + Input_Email | var ContactUsForm.Email, prompt "Enter Your Email Address", OnChange → OnChange_Email | NotCaptured; UnbuiltValidationWidget Input_Email | `missing` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:81, 86; TST ContactUsDetails.mvc.js:786-841<br>**F1** (blocker) |
| 060 | label "Phone Number" + Input_PhoneNumber | var ContactUsForm.PhoneNumber, prompt "Enter Phone Number", OnChange → OnChange_PhoneNumber | NotCaptured; UnbuiltValidationWidget Input_PhoneNumber | `missing` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:81, 87; TST ContactUsDetails.mvc.js:842-897<br>**F1** (blocker) |
| 061 | label "Country" + Dropdown_Country | List = DataAction_GetCountriesNames.Countries, Values = Code, option text = Name, EmptyValue "Select Your Country", Custom mode, OnChange → OnChange_FormInput | NotCaptured; UnbuiltValidationWidget Dropdown_Country; the countries are fetched and not shown | `missing` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:81, 88; app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:298-299; TST ContactUsDetails.mvc.js:898-978<br>**F1** (blocker) |
| 062 | label "Locality" + Input_Locality | var ContactUsForm.Locality, prompt "Enter Your Locality", OnChange → OnChange_FormInput | NotCaptured; UnbuiltValidationWidget Input_Locality | `missing` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:81, 89; TST ContactUsDetails.mvc.js:979-1030<br>**F1** (blocker) |
| 063 | TextArea_WithCounter | In_InitialLength 0 | TextAreaWithCounter inInitialLength={0} | `match` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:93; TST ContactUsDetails.mvc.js:1038-1040 |
| 064 | label "Message" | mandatory, target TextArea_Message | label class "mandatory OSFillParent", htmlFor TextArea_Message | `match` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:94-96; TST ContactUsDetails.mvc.js:1059-1070 |
| 065 | TextArea_Message | var ContactUsForm.Message, prompt MessagePrompt, textLines 3, style form-control, OnChange → OnChange_FormInput | MessageTextArea: value, placeholder, rows 3, form-control OSFillParent, onChange | `match` | app/src/pages/ContactUsDetails/components/MessageTextArea.tsx:31-44; app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:97-102; TST ContactUsDetails.mvc.js:1070-1100 |
| 066 | If Rate_ShowRate → IconText + Icon | Text "I would like to be contacted about my feedback. "; Clicked → OnClick_UserWantToBeContacted; icon Checkbox or CheckboxOutlineBlank, color NullTextIdentifier() or Neutral5 | IconText with the same text and onClicked; Icon with the same ids and colors | `match` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:105-117; TST ContactUsDetails.mvc.js:1110-1150 |
| 067 | FixedFooter | ContentContainerId = Content.Id, ExpectedFooterHeight calc(...), useBottomBar False | FixedFooter with the same inputs | `match` | app/src/pages/ContactUsDetails/components/ContactUsDetailsFooter.tsx:19, 36-41; TST ContactUsDetails.mvc.js:1190-1195 |
| 068 | CustomContainer of the footer | Neutral0 background, padding Base, shadow ExtraSmallTop | FOOTER_OPTIONS | `match` | app/src/pages/ContactUsDetails/components/ContactUsDetailsFooter.tsx:21-25, 42 |
| 069 | ButtonLoading | IsLoading = isSubmiting | ButtonLoading isLoading={isSubmiting} | `match` | app/src/pages/ContactUsDetails/components/ContactUsDetailsFooter.tsx:43; TST ContactUsDetails.mvc.js:1248-1250 |
| 070 | Button "Send" | IsDisabled = not IsFormFilled or isLoadingMainData; buttonOnClick → OnClick_SubmitForm after Promise.resolve() | ActionButton isDisabled; onSend runs submitForm after Promise.resolve() | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:71; app/src/pages/ContactUsDetails/components/ContactUsDetailsFooter.tsx:44; app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:183-185; TST ContactUsDetails.mvc.js:1270-1280; BR-UBTCON-968 |
| 071 | container #PopUps | the three dialogs | div id PopUps | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:74; TST ContactUsDetails.mvc.js:1321 |
| 072 | Dialog_Information #SubmittedConfirmation | "Thank you"; CircleButton_WithLabel (GreenLightest, Base_52) with Icon (Mail, GreenDarker, Display_36); the sent text; "Close" | SubmittedConfirmationDialog with the same blocks, texts and options | `match` | app/src/pages/ContactUsDetails/components/SubmittedConfirmationDialog.tsx:13-45; TST ContactUsDetails.mvc.js:1336-1466 |
| 073 | If False → CircleButton_IconPrimary | constant False: never rendered | not in React | `n/a` | TST ContactUsDetails.mvc.js:1410<br>dead in the model |
| 074 | If IsAnyFilled → Dialog_Navigation | "Delete message?" / "Are you sure you want to delete this message?"; Event_OnBackNavigation → OnBackNavigation_ConfirmDiscard | NavigationDialog variant connect, rendered when isAnyFilled | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:76-84; TST ContactUsDetails.mvc.js:1467-1510; BR-UBTCON-974 |
| 075 | ContactPopup_ByPhone | In_CallPopupData = CallPopupData, In_ImageSizeId = Auto; Event_Call and Event_Cancel → Handler_CallPopup_Cancel | ContactPopupByPhone with the same inputs; onEventCall and onEventCancel → onCallPopupClose | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:85-91; TST ContactUsDetails.mvc.js:1524-1560 |
| 076 | CommonUI_InsideLayout | In_IgnorePolicy = IgnorePolices; In_IgnoreLockScreen not set | CommonUiLayout inIgnorePolicy; inIgnoreLockScreen default false | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:105; TST ContactUsDetails.mvc.js:1576-1578 |

**Screen actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 077 | ScreenEvent_OnInitialize: PIN_Check, IgnorePolices | IgnorePolices = GetUserId() = NullIdentifier() or PIN_Check.NeedRegister | !isLogged \|\| pinCheck().needRegister | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:66-69; TST ContactUsDetails.mvc.js:2357-2379 |
| 078 | ScreenEvent_OnInitialize: Get_ContactUsFormDescription | Description and MessagePrompt from In_ContactSubjectId | initialContactUsDetailsState calls get_ContactUsFormDescription | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:218-228; TST ContactUsDetails.mvc.js:2380-2390 |
| 079 | ScreenEvent_OnInitialize: isLogged, Rate_ShowRate, isLoadingMainData | isLogged = GetUserId() <> NullIdentifier(); Rate_ShowRate = feedback subject and isLogged; isLoadingMainData = isLogged | the same three values | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:228-230; TST ContactUsDetails.mvc.js:2390-2398; BR-UBTCON-967 |
| 080 | ScreenEvent_OnReady | isLogged → End; else refresh DataAction_GetCountriesNames | the OnReady effect returns when isLogged, else fetchCountryNames | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:77-88; TST ContactUsDetails.mvc.js:2044-2080 |
| 081 | CacheControl_UserInfo_WrapperResult: first assign | LocalCacheControl_UserInformation.Directory_UserCurrent = UserInformation; .isFetched = True; isLoadingMainData = False | isLoadingMainData false; the user record is not kept | `partial` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:300-305; TST ContactUsDetails.mvc.js:2121-2146<br>**F3** (major)<br>LocalCacheControl_UserInformation feeds only the screen data of DataAction_GetLocalityTimezone. |
| 082 | CacheControl_UserInfo_WrapperResult: second assign | ContactUsForm FullName, Email, Country = Country_Name, Locality = Locality_Name, PhoneNumber = HomeNumber; CountryPhone = Country_Phone | userInformationFetched with the same fields | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:300-316; TST ContactUsDetails.mvc.js:2148-2163; BR-UBTCON-967 |
| 083 | OnAfterFetch_GetLocalityTimezone | CallPopupData TimezoneName and TimezoneOffset from the data action | timezoneFetched | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:317-329; TST ContactUsDetails.mvc.js:1781-1806 |
| 084 | ContactUs_RateRateSelected(Rate) | Rate_SelectedRate = Rate; OnChange_FormInput | no handler: selectedRate stays 0 | `missing` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:43-44; TST ContactUsDetails.mvc.js:2082-2100<br>**F2** (major) |
| 085 | OnChange_FormInput: isLogged | IsFormFilled = Message <> "" or (feedback subject and Rate_SelectedRate <> 0); IsAnyFilled = Message <> "" (no Trim) | onChange_FormInput, isLogged branch, no trim | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:147-160; TST ContactUsDetails.mvc.js:1743-1760; BR-UBTCON-968 |
| 086 | OnChange_FormInput: not isLogged | IsFormFilled = all six trimmed fields <> ""; IsAnyFilled = any of them | onChange_FormInput, signed-out branch with trim | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:161-164; TST ContactUsDetails.mvc.js:1763-1770<br>Only the message calls it in React; the five other fields do not exist (F1). |
| 087 | OnChange_Email | Input_Email.Valid = True, ValidationMessage ""; OnChange_FormInput | no handler (Input_Email is not built) | `missing` | TST ContactUsDetails.mvc.js:2192-2220<br>**F1** (blocker) |
| 088 | OnChange_PhoneNumber | Input_PhoneNumber.Valid = True, ValidationMessage ""; OnChange_FormInput | no handler (Input_PhoneNumber is not built) | `missing` | TST ContactUsDetails.mvc.js:2327-2355<br>**F1** (blocker) |
| 089 | OnClick_SubmitForm: trims, isSubmiting | Trim of the six fields; isSubmiting = True | submitStarted: trimContactUsForm, isSubmiting true | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:131; app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:178-185, 335-336; TST ContactUsDetails.mvc.js:1877-1895 |
| 090 | OnClick_SubmitForm: If NameHasNumbers.Found | True: Input_FullName invalid, "This field cannot contain numeric values!"; False: valid, "" | jSUtils_String_CheckNumbers, then setWidgetValidity Input_FullName | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:133-137; TST ContactUsDetails.mvc.js:1898-1915 |
| 091 | OnClick_SubmitForm: If IsEmailValid.Out_Valid = True | True: Input_Email valid, ""; False: invalid, "Invalid email!" | isEmailValid, then setWidgetValidity Input_Email | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:138-142; TST ContactUsDetails.mvc.js:1918-1936 |
| 092 | OnClick_SubmitForm: If IsPhoneNumberValid.Out_Valid = True | True: Input_PhoneNumber valid, ""; False: invalid, "Invalid Phone"; both arms go on | isPhoneNumberValid, then setWidgetValidity Input_PhoneNumber | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:143-147; TST ContactUsDetails.mvc.js:1939-1958 |
| 093 | OnClick_SubmitForm: IsFormFilled = False | after the three checks | formFilledCleared | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:148; TST ContactUsDetails.mvc.js:1960 |
| 094 | OnClick_SubmitForm: If Form_ContactUs.Valid, False arm | isSubmiting = False, End | !isValid('Form_ContactUs') → submitEnded, return | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:149-152; TST ContactUsDetails.mvc.js:1962, 2003-2006 |
| 095 | OnClick_SubmitForm: SendContactUsMessage | the server call, then isSubmiting = False | await sendContactUsMessage, then submitEnded | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:153-159; TST ContactUsDetails.mvc.js:1966-1972 |
| 096 | OnClick_SubmitForm: Out_ErrorMessage = "" | ConfirmAction(SubmittedConfirmation) | confirmAction('SubmittedConfirmation') | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:160-161; TST ContactUsDetails.mvc.js:1974-1980; BR-UBTCON-971 |
| 097 | OnClick_SubmitForm: IsConfirmed | Action_ResetForm, then (Previous Screen) | flushSync(formReset), then navigateBack | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:162-168; TST ContactUsDetails.mvc.js:1983-1988<br>flushSync removes Dialog_Navigation before the back navigation (BR-UBTCON-974, last outcome). |
| 098 | OnClick_SubmitForm: not IsConfirmed | End: the form keeps its values | no action | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:162; TST ContactUsDetails.mvc.js:1989-1990 |
| 099 | OnClick_SubmitForm: Out_ErrorMessage <> "" | FeedbackMessage_AutoClose(Out_ErrorMessage, Error) | feedbackMessageAutoClose error | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:169-171; TST ContactUsDetails.mvc.js:1997 |
| 100 | OnClick_SubmitForm: AllExceptions | not a system exception: isSubmiting = False, FeedbackMessage_AutoClose(ExceptionMessage); a system exception goes up | isSystemException → raiseToFlowHandler; else submitEnded and the message | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:172-180; TST ContactUsDetails.mvc.js:2014-2030 |
| 101 | OnClick_SupportTeam | CallPopupData: UbtLogo URL, "Support Team", time zone, locality, country, CountryPhone, IsAvatarImage False, TitleTerminator "?"; ShowPopup False, then True | supportTeamClicked with the same fields; ShowPopup true | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:343-363; app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:113-119; TST ContactUsDetails.mvc.js:2222-2277<br>The two ShowPopup assigns of one action give the same final value. |
| 102 | Handler_CallPopup_Cancel | ShowPopup = False | callPopupClosed | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:364-371; TST ContactUsDetails.mvc.js:2279-2301 |
| 103 | OnClick_UserWantToBeContacted | Rate_UserWantToBeContacted = not Rate_UserWantToBeContacted | wantToBeContactedToggled | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:372-373; TST ContactUsDetails.mvc.js:2303-2325 |
| 104 | OnBackNavigation_ConfirmDiscard | PreventNavigation(Event_NavigationEvent) | preventNavigation(navigationEvent) | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:188-194; TST ContactUsDetails.mvc.js:2408-2425 |
| 105 | Action_ResetForm | ContactUsForm = empty record; IsFormFilled = False; IsAnyFilled = False | formReset | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:168-175, 341-342; TST ContactUsDetails.mvc.js:1808-1849 |

**Validations**

The screen runs no built-in validation: TST calls no `validate`, and the Send button does not validate (row 106).
The only checks are the three custom nodes of OnClick_SubmitForm. `Form_ContactUs.Valid` then counts only the widgets
that are on the screen (row 118).

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 106 | built-in validation of the screen | no ValidateWidgets call; the Send button (UBTConnectLibrary Button, isDefault False) runs no built-in validation | no validate() call; Form_ContactUs.Valid is read only | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:129-181; TST ContactUsDetails.mvc.js (no validate call); TST UBTConnectLibrary.ConnectPatterns.Button.mvc.js:166-181; CR-Profile-2 resolution<br>Mandatory, MaxLength and the input type never give a platform message on this screen. Mandatory still sets the label class. |
| 107 | Input_FullName | Mandatory True, MaxLength 50, InputType Text, Enabled = not isSubmiting | not built | `missing` | TST ContactUsDetails.mvc.js:734-770; BR-UBTCON-999<br>**F1** (blocker) |
| 108 | Input_Email | Mandatory True, MaxLength 50, InputType Email (variable type Email), Enabled = not isSubmiting | not built | `missing` | TST ContactUsDetails.mvc.js:797-830; BR-UBTCON-999<br>**F1** (blocker) |
| 109 | Input_PhoneNumber | Mandatory True, MaxLength 50, InputType Phone (variable type PhoneNumber), Enabled = not isSubmiting | not built | `missing` | TST ContactUsDetails.mvc.js:853-890; BR-UBTCON-999<br>**F1** (blocker) |
| 110 | Dropdown_Country | Mandatory True, EmptyValue "Select Your Country", Enabled = not isSubmiting | not built | `missing` | TST ContactUsDetails.mvc.js:909-937; BR-UBTCON-999<br>**F1** (blocker) |
| 111 | Input_Locality | Mandatory True, MaxLength 50, InputType Text, Enabled = not isSubmiting | not built | `missing` | TST ContactUsDetails.mvc.js:990-1018; BR-UBTCON-999<br>**F1** (blocker) |
| 112 | TextArea_Message: Mandatory | Mandatory True, variable type Text, child of Form_ContactUs | useInputWithVariableValidation mandatory true, dataType Text; label class mandatory | `match` | app/src/pages/ContactUsDetails/components/MessageTextArea.tsx:23-28; app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:94; TST ContactUsDetails.mvc.js:1070-1100 |
| 113 | TextArea_Message: MaxLength | 500 | maxLength={500} | `match` | app/src/pages/ContactUsDetails/components/MessageTextArea.tsx:37; TST ContactUsDetails.mvc.js:1080; BR-UBTCON-999 |
| 114 | TextArea_Message: Enabled | not isSubmiting | disabled={isSubmiting} | `match` | app/src/pages/ContactUsDetails/components/MessageTextArea.tsx:35; app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:98; TST ContactUsDetails.mvc.js:1075 |
| 115 | custom node: name with digits | Input_FullName invalid with "This field cannot contain numeric values!"; the message shows under the input | setWidgetValidity on an UnbuiltValidationWidget: the Form is invalid, no message shows | `partial` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:133-137; app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:85; TST ContactUsDetails.mvc.js:1898-1915<br>**F1** (blocker) |
| 116 | custom node: invalid email | Input_Email invalid with "Invalid email!" | setWidgetValidity on an UnbuiltValidationWidget: no message shows | `partial` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:138-142; app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:86; TST ContactUsDetails.mvc.js:1918-1936<br>**F1** (blocker) |
| 117 | custom node: invalid phone | Input_PhoneNumber invalid with "Invalid Phone" | setWidgetValidity on an UnbuiltValidationWidget: no message shows | `partial` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:143-147; app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:87; TST ContactUsDetails.mvc.js:1939-1958<br>**F1** (blocker) |
| 118 | Form_ContactUs.Valid with hidden inputs | the runtime counts only registered (rendered) widgets: signed in, the hidden inputs do not block the send | recalculateAggregatorsState counts registered children; the signed-out widgets register only when not isLogged | `match` | app/src/components/ui/os/OSValidation/validationService.ts:149-160, 170-190; app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:79-91; migration/runtime-sources/OutSystems.js (ValidationService.recalculateAggregatorsState, register)<br>A signed-in user without HomeNumber fails IsPhoneNumberValid, and the message still goes out. |
| 119 | Send after a failed check | IsFormFilled stays False: Send stays disabled until a field changes | formFilledCleared runs before the Valid test | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:148-152; TST ContactUsDetails.mvc.js:1960-1962 |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 120 | Get_ContactUsFormDescription (client action of the flow) | description per subject with \r\n line ends; default prompt "… regarding " + id + "."; own prompts for GeneralQuestions and GeneralSuggestions | get_ContactUsFormDescription switch with the same texts | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:83-128; TST UBTConnect.controller.js:3811-4043; BR-UBTCON-267 |
| 121 | JSUtils_String_CheckNumbers (UBTJavaScriptUtils) | JS node CheckNotContainNumberJS: /[0-9]/g.test(Text) | /[0-9]/.test(text) | `match` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:141-143; migration/shell/sources/UBTJavaScriptUtils.controller.js:2996-3001 |
| 122 | IsEmailValid (UBTConnectLibrary) | behaviour of IsEmailValid in module UBTConnectLibrary: not in the dump, no KB page, no TST source in the survey | regex on the trimmed, lower-case text | `unclear` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:130-133; pack/references.md<br>**Q3** |
| 123 | IsPhoneNumberValid (UBTConnectLibrary) | behaviour of IsPhoneNumberValid in module UBTConnectLibrary: not in the dump, no KB page, no TST source in the survey | regex on the trimmed text | `unclear` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:135-138; pack/references.md<br>**Q3** |
| 124 | BR-UBTCON-967 | signed out: six fields; signed in: message (and rate), details from the directory | signed-in part as TST; the signed-out fields are not built | `partial` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:79-91<br>**F1** (blocker) |
| 125 | BR-UBTCON-968 | Send enabled: signed out, six fields filled; signed in, a message or a rate on the feedback subject | the rule is coded; the rate path and the signed-out path cannot become true | `partial` | app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:147-165<br>**F1** (blocker)<br>The rate path also needs F2. |
| 126 | BR-UBTCON-969 | trim and check name, email, phone; an invalid field stops the send | the checks run; the signed-out fields and their messages are missing | `partial` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:129-152<br>**F1** (blocker) |
| 127 | BR-UBTCON-970 | subject, form, rate and the contacted flag go to SendContactUsMessage | the same inputs; Rate is always 0 | `partial` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:153-158<br>**F2** (major) |
| 128 | BR-UBTCON-971 | sent → Thank you → back; server error or exception → message, the form stays | the same branches | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:153-180 |
| 129 | BR-UBTCON-972 | signed in on the feedback subject: rating, contacted check box, feedback heading | check box and heading as TST; the rating is missing | `partial` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:63-71, 105-117<br>**F2** (major) |
| 130 | BR-UBTCON-973 | signed in with a country phone: Support Team call with the local time | the same condition and call dialog data | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:51; app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:343-363 |
| 131 | BR-UBTCON-974 | something typed: "Delete message?" on back; reset after a sent message | the same condition and reset | `match` | app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:76-84; app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:162-168 |
| 132 | BR-UBTCON-999 | six mandatory fields, locked while sending, MaxLength 50 (message 500) | the message as TST; the five other fields are missing | `partial` | app/src/pages/ContactUsDetails/components/MessageTextArea.tsx:35-37<br>**F1** (blocker) |
| 133 | Type_ContactSubject.GeneralSuggestionsFeedbackRating tests | Rate_ShowRate, the title and IsFormFilled compare with this record | Type_ContactSubject constant with the TST values | `match` | app/src/pages/ContactUsDetails/staticEntities.ts:7-16; migration/knowledge/static-entities-tst.json |
| 134 | static entity values of the dialog and the check box | GreenLightest, GreenDarker, Mail, Checkbox, CheckboxOutlineBlank | UBT_Color_Local, UBT_Icons2_Local | `match` | app/src/pages/ContactUsDetails/staticEntities.ts:19-29; pack/references.md |
| 135 | FeedbackMessage_AutoClose call arguments | ("", Message, Error, True, "", 0, False) at both call sites | title '', messageType error; encodedHtml true, extendedClass '', delayMs 0 by default | `match` | app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:170, 179; app/src/platform/feedback/feedbackMessageAutoClose.ts:77-110; TST ContactUsDetails.mvc.js:1997, 2025 |

**Strings**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 136 | texts of the signed-in form, the dialogs and the messages | "Thank you", the sent text, "Close", the two Dialog_Navigation texts, the Support Team texts, the two titles, "All fields are required.", "Message", the check box text, "Send", the three field messages, 7 descriptions, 3 prompts | the same texts | `match` | app/src/pages/ContactUsDetails/components/*.tsx; app/src/pages/ContactUsDetails/ContactUsDetailsPage.tsx:81-82; app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:83-128; app/src/pages/ContactUsDetails/hooks/useContactUsDetails.ts:134-146 |
| 137 | labels and prompts of the signed-out fields | "Full Name", "Email", "Phone Number", "Country", "Locality", "Enter Full Name", "Enter Your Email Address", "Enter Phone Number", "Select Your Country", "Enter Your Locality" | not in React | `missing` | TST ContactUsDetails.mvc.js:712-1030<br>**F1** (blocker) |
| 138 | "this is an error" | argument of the Input block in the If False branch | not in React | `n/a` | pack/screens.md ContactUsDetails<br>dead in the model |

## 3. Blocks of the flow

### 3.1 ContactUs_Rate

ContactUsDetails uses the block when `Rate_ShowRate` is True. React has no component for this block:
ContactUsMessageForm shows a `NotCaptured` placeholder instead (`components/ContactUsMessageForm.tsx:63-65`).

**Identity**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 139 | inputs SelectedRate, isEnabled; event RateSelected(Rate); locals PoorRate…VeryGoodRate, CurrentRate | the rating block of the feedback subject | not built (NotCaptured in ContactUsMessageForm) | `missing` | app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:63-65; TST ContactUs_Rate.mvc.js<br>**F2** (major) |

**UI tree**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 140 | CustomContainer question text | "How would you rate your current experience with Connect?" (margin bottom Small, Small, SemiBold) | not in React | `missing` | TST ContactUs_Rate.mvc.js:210<br>**F2** (major) |
| 141 | If False #UseEmoctions → five ContactUs_RateItem | constant False: never rendered | not in React | `n/a` | TST ContactUs_Rate.mvc.js:220<br>dead in the model |
| 142 | RangeSlider | MinValue 1, MaxValue 10, StartingValue 0, ShowTickMarks True, TickMarksInterval 1; class "ubt-rating-slider--no-rate " while CurrentRate = 0 | not in React | `missing` | TST ContactUs_Rate.mvc.js:223-240<br>**F2** (major) |
| 143 | Columns_Two with "Poor" and "Excellent" | CustomText Neutral10, ExtraSmall, Regular | not in React | `missing` | TST ContactUs_Rate.mvc.js:331, 366<br>**F2** (major) |

**Block actions**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 144 | RangeSliderOnValueChange | CurrentRate = Trunc(Value); RateSelected(Trunc(Value)); no isEnabled check | not in React | `missing` | TST ContactUs_Rate.mvc.js:445-448<br>**F2** (major) |
| 145 | OnClick(InRate) | isEnabled → RateSelected(InRate); used only by the emoji branch | not in React | `n/a` | TST ContactUs_Rate.mvc.js:496-499<br>dead in the model |

**Business logic**

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 146 | BR-UBTCON-975 | 1-to-10 slider labelled Poor to Excellent; the emoji variant is off | not in React | `missing` | TST ContactUs_Rate.mvc.js:210-370<br>**F2** (major) |

### 3.2 ContactUs_RateItem

| Id | Item | OutSystems (DEV) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 147 | whole block (Content, Label, isSelected) | rendered only inside the dead If False of ContactUs_Rate; the TST view of ContactUs_Rate lists no RateItem block | not in React | `n/a` | TST ContactUs_Rate.mvc.js:136-137; pack/blocks.md ContactUs_RateItem<br>dead in the model |

### 3.3 Blocks of other flows

| Block | Pack | Use here | Verdict of the use |
|---|---|---|---|
| Menu_List | `../App_Menu/pack/blocks.md` | ContactUsMenu, one per section (row 010) | `match`; the report of App_Menu checks the block |
| CommonUI_InsideLayout | `../App_Common/pack/blocks.md` | both screens (rows 012, 076) | `match`; the report of App_Common checks the block, Policy_Checker, Block_PINUnlock and the version blocks |
| CacheControl_UserInfo_Wrapper | `../_shared/pack/blocks.md` | ContactUsDetails, signed in (row 042) | `match`; shared block |
| Dialog_Information | `../_shared/pack/blocks.md` | SubmittedConfirmation (row 072) | `match`; the screen keeps a local copy, `components/InformationDialog.tsx` |
| Dialog_Navigation | `../_shared/pack/blocks.md` | the leave dialog (row 074) | `match`; NavigationDialog is shared |
| SectionSeparator | `../_shared/pack/blocks.md` | both screens (rows 011, 050) | `match` |
| SubLayout_DirectoryDetailScreen_Section | `../_shared/pack/blocks.md` | ContactUsDetails (row 051) | `match` |

## 4. Shared blocks and actions

This section has no row of its own. The calls of the shared items have their rows in §2.

- PIN_Check (UBT_AppManager): both screens call `pinCheck()` before the first render (rows 013, 077). The report of
  App_PIN checks the action.
- ConfirmAction and PreventNavigation (NavigationHandler): the calls match (rows 096, 104). Not checked here
  (shared).
- FeedbackMessage_AutoClose (UBTJavaScriptUtils): the call arguments match (row 135). Not checked here (shared).
- ContactPopup_ByPhone (UBTConnect_Utils): the inputs and the two events match (row 075). The block dials `tel:`
  itself (TST `UBTConnect_Utils.CW_CTA_PopUps.ContactPopup_ByPhone.mvc.js:373-395`). Its React port
  `app/src/components/contact/ContactPopupByPhone/` is not checked here.
- Referenced UI blocks of UBTConnectLibrary and OutSystemsUI: the rows above check the inputs that the flow gives.
  Their internals are not checked here. The blocks are Layout_DetailPage, CustomContainer, CustomText,
  SkeletonSection, TextArea_WithCounter, FixedFooter, ButtonLoading, Button, IconText, Icon, CircleButton_WithLabel,
  Columns_Two and RangeSlider.
- Not checked here (shared, in `../_shared/pack/actions.md`): ExitApplicationForWebViewUpdate, GetURLFromEventDataURL,
  GetUserInformation_Wrapper_Assign, Get_IsUnsupportedSystem, Get_IsUnsupportedVersion, OfflineDataSync,
  OfflineDataSyncConfiguration, OpenGooglePlay_Chrome, OpenGooglePlay_UBTConnect, OpenGooglePlay_WebView,
  SetResumeLoginLink, Try_GetIsSupportedVersion, Upgrade_UBTConnect, Upgrade_WebView. The flow reaches them only
  through CommonUI_InsideLayout and CacheControl_UserInfo_Wrapper.
- The client variables of `pack/data.md` (App_PIN_BiometricEnabled, App_Policies_HasPolicyToAccept,
  App_Policies_RedirectURL, IsNavigateToHomeOnBack) belong to the blocks of CommonUI_InsideLayout. The screens of
  this flow do not read or write them.

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix |
|---|---|---|---|---|---|
| F1 | blocker | ContactUsDetails / If not isLogged (Input_FullName, Input_Email, Input_PhoneNumber, Dropdown_Country, Input_Locality) | TST shows five more fields to a signed-out user: labels, inputs with Mandatory and MaxLength 50, the Country list from DataAction_GetCountriesNames, and their OnChange actions. React shows a `NotCaptured` placeholder. IsFormFilled needs all six trimmed fields, so Send stays disabled. A signed-out user opens the screen from "Need help? Contact Us" on Login (TST `Login.mvc.js:525`, React `LoginFooter.tsx:12`; BR-UBTCON-965) and cannot send a message. The three field messages of OnClick_SubmitForm have no widget to show on. | `app/src/pages/ContactUsDetails/components/ContactUsMessageForm.tsx:79-91`; `hooks/useContactUsDetails.ts:133-147` | Q1. Build the fields as in TST `ContactUsDetails.mvc.js:712-1030`, with OnChange_Email and OnChange_PhoneNumber, and feed the dropdown from `state.countries` (Values = Code). |
| F2 | major | ContactUsDetails / ContactUs_Rate, ContactUs_RateRateSelected | The rating block is not built, and no handler sets `Rate_SelectedRate`. On the feedback subject a signed-in user cannot give a rating (BR-UBTCON-975, BR-UBTCON-972). Send needs a message, because the rate stays 0 (BR-UBTCON-968). SendContactUsMessage always gets `Rate` 0 (BR-UBTCON-970). | `components/ContactUsMessageForm.tsx:63-65`; `hooks/contactUsDetailsState.ts:43-44` | Q2. Port ContactUs_Rate (RangeSlider 1 to 10, start 0, tick marks, Poor and Excellent, the no-rate class) and ContactUs_RateRateSelected. |
| F3 | major | ContactUsDetails / DataAction_GetLocalityTimezone, CacheControl_UserInfo_WrapperResult | TST keeps the user record in `LocalCacheControl_UserInformation` and sends it with the data action. The server reads `In_LocalityId` from it. React does not keep the record. Its call has no `LocalCacheControl_UserInformation`, `ContactUsForm`, `Description` or `MessagePrompt`. The recorded TST call had them, and the fixture converter dropped them. A real server does not get the locality id from this call. | `hooks/contactUsDetailsState.ts:262-282, 300-305` | Q4. Keep the record in the state and send the same screen variables as TST. |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST compiled code

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| ContactUsMenu / OnClick_MenuOption, transition | `transition=Inherited` | `TransitionAnimation.Default` | Default: `navigate` without options | `ContactUsMenu.mvc.js:436`; `useContactUsMenu.ts:46` |
| Line ends in the texts of Get_ContactUsFormDescription and in the Support Team text | `\n` | `\r\n` | `\r\n` | `UBTConnect.controller.js:3851-3936`; `ContactUsDetails.mvc.js:448`; `contactUsDetailsState.ts:91-118` |

Not a difference: the pack does not print the MaxLength of the four inputs. TST has 50 on each input
(`ContactUsDetails.mvc.js:745, 808, 864, 1001`). The KB rule BR-UBTCON-999 comes from DEV and also gives 50.

### 6.2 KB pages vs TST (for the KB owner)

| Id | KB text | TST (compiled code) | Source |
|---|---|---|---|
| K1 | BR-UBTCON-971: "a server error message or any exception is shown and the form stays" | The handler shows only the exceptions that are not system exceptions. A system exception goes up to the flow handler. | `ContactUsDetails.mvc.js:2014` (`if(!(OS.Exceptions.isSystem(ex)))`) |
| K2 | `index/build/screen-validations.md`, ContactUsDetails: "Max length —" for Input_Email and Input_PhoneNumber, no length for the other fields | maxLength 50 on Input_FullName, Input_Email, Input_PhoneNumber and Input_Locality; 500 on TextArea_Message. BR-UBTCON-999 of the same KB agrees with TST. | `ContactUsDetails.mvc.js:745, 808, 864, 1001, 1080` |
| K3 | BR-UBTCON-969, test hook: whether a hidden invalid widget blocks `Form_ContactUs.Valid` is "not-captured" | An open point that the runtime answers: a Form counts only its registered widgets, and a hidden widget is not registered. | `migration/runtime-sources/OutSystems.js` (ValidationService `recalculateAggregatorsState`, `register`, `unregister`) |

## 7. Questions for the user

| Id | Question | Why it matters | Options | Recommendation |
|---|---|---|---|---|
| Q1 | Build the signed-out fields of ContactUsDetails (F1)? | A signed-out user reaches Contact Us from Login (TST `Login.mvc.js:525`). Without the fields that user cannot send a message. No ADR, change request or board row removes them. | (a) Build the five fields, the Country list and the two OnChange actions as in TST. (b) Record a decision (board or ADR) that signed-out Contact Us is out of scope, and keep the placeholder. | (a): TST shows the fields, and the flow is blocked without them. |
| Q2 | Build the rating block ContactUs_Rate (F2)? | The feedback subject gets no rating, and the server always gets `Rate` 0. | (a) Port ContactUs_Rate with a React equivalent of the OutSystems UI RangeSlider. (b) Record a decision that the rating is out of scope. | (a): the block is small, and three rules depend on it. |
| Q3 | Behaviour of IsEmailValid and IsPhoneNumberValid in module UBTConnectLibrary: not in the dump, no KB page, and no TST source in the survey. React uses two regular expressions with no source. How do we confirm them? | The two checks decide the "Invalid email!" and "Invalid Phone" messages, and whether the message goes out. | (a) Fetch `UBTConnectLibrary.controller.js` from TST (static, read-only GET), add it to `migration/runtime-sources/`, and compare. (b) Accept the React expressions as they are. | (a): the file is a static script, and the comparison is short. |
| Q4 | Fix the screen variables of DataAction_GetLocalityTimezone now (F3), or record the gap for the backend contract? | The mock ignores the inputs, so the demo shows no difference. A real server needs `Locality_Id` from `LocalCacheControl_UserInformation`. | (a) Keep `LocalCacheControl_UserInformation` in the state and send the same variables as TST now. (b) Record the gap in the backend spec and keep the current call. | (a): the change is small, and the request then has the TST shape. |

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 10 | 9 | 0 | 1 | 0 | 0 | 0 | 0 |
| data | 10 | 6 | 1 | 0 | 0 | 3 | 0 | 0 |
| ui | 45 | 32 | 0 | 9 | 0 | 0 | 4 | 0 |
| actions | 39 | 33 | 1 | 4 | 0 | 0 | 1 | 0 |
| validations | 14 | 6 | 3 | 5 | 0 | 0 | 0 | 0 |
| logic | 25 | 16 | 8 | 1 | 0 | 0 | 0 | 0 |
| strings | 4 | 2 | 0 | 1 | 0 | 0 | 1 | 0 |
| **total** | **147** | **104** | **13** | **21** | **0** | **3** | **6** | **0** |

## 9. Follow-up pass (2026-10-27)

Rows settled or sharpened after the user answers of 2026-10-27 and the TST files that `tst_source.py` reads. A row that stays `unclear` has a new question that names what settles it. Every row below has `verified: "live"`.

| Row | Old verdict | New verdict | Evidence |
|---|---|---|---|
| App_Menu_ContactUs-122 | `unclear` | `partial` | migration/runtime-sources/UBTConnectLibrary.controller.js:7565-7569; TST UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:1918; app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:130-133 |
| App_Menu_ContactUs-123 | `unclear` | `partial` | migration/runtime-sources/UBTConnectLibrary.controller.js:7647-7666; TST UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js:1939; app/src/pages/ContactUsDetails/hooks/contactUsDetailsState.ts:135-138 |
