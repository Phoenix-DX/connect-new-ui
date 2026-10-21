# Route spec: ContactUsDetails

Evidence keys: `P` = `analysis/sources/pretty/UBTConnect.App_Menu_ContactUs.ContactUsDetails.mvc.js` (model :1-183, view
:185-1643, controller :1645-2590); `DI` = `analysis/sources/pretty/UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Information.mvc.js`;
`UC` = `analysis/sources/raw/UBTConnect.controller.js`; `UL` = `analysis/sources/raw/UBTConnectLibrary.controller.js`;
`JSU` = `migration/shell/sources/UBTJavaScriptUtils.controller.js`; `RT` = `migration/runtime-sources/OutSystems.js`.

## Summary
| Item | Value |
|---|---|
| Route | `/UBTConnect/ContactUsDetails` with inputs `In_ContactSubjectId`, `In_ContactSubjectTitle`, `In_ListMenuOptionLabel` (Text) [pack.md; P:98-115] |
| Tier | lite |
| Captured | 2026-10-15, viewport 390×844, states: default, loading, offline [states.json] |
| Shared/shell components used | Layout_DetailPage, CustomContainer, SectionSeparator, SubLayout_DirectoryDetailScreen_Section, SkeletonSection, TextArea_WithCounter (+InputCounter), IconText, Icon, FixedFooter, ButtonLoading (osui), CW_Common Button, CircleButton_WithLabel, Dialog_Navigation, ContactPopup_ByPhone, CommonUI_InsideLayout, CacheControl_UserInfo_Wrapper, shell ActionConfirmationDialog / confirmAction, feedbackMessageAutoClose, pinCheck, currentUserId [pack.md block plan] |
| Screen-specific components | `components/Dialog_Information.tsx` (App_Common_Blocks_PopupDialogs.Dialog_Information, [BUILD here]); `components/actions.ts` (Get_ContactUsFormDescription, IsEmailValid, IsPhoneNumberValid, JSUtils_String_CheckNumbers, IsFormFilled rules); `components/staticEntities.ts` |

## Specification
### Structure
Screen root: Layout_DetailPage `$b1` (In_ExtendedClass `bottom-padding-base-button`, In_AlignTitleLeft True; title =
expression In_ContactSubjectTitle) [P:254-281], then CacheControl_UserInfo_Wrapper `$b26` only when isLogged [P:1606-1628].
Content container `Content` [P:285-294] holds: CustomContainer `$b2` (padding y small, x base) > `$b3` (neutral 10, small,
semi-bold: In_ListMenuOptionLabel), `$b4` (margin top small, small: Description), `$b5` only when `isLogged and CountryPhone <> ""`
("Prefer to speak with someone? \r\nGive our " + Link "Support Team" (`text-underline`, margin-left 0) + " a call.")
[P:296-500; dom/default.html:38-70]; SectionSeparator `$b6`; SubLayout_DirectoryDetailScreen_Section `$b7` (In_Title "")
> ContactUs_Rate `$b8` if Rate_ShowRate (NotCaptured, Q2) > isLogged ? CustomContainer `$b9` ("How can we help you?" or,
for GeneralSuggestionsFeedbackRating, "Please provide your suggestions and feedback") : `$b10` italic "All fields are
required." > SkeletonSection `$b11` (In_IsLoading = isLoadingMainData) > Form `Form_ContactUs` (`form OSFillParent`) >
signed-out fields when not isLogged (NotCaptured, Q1) > container > TextArea_WithCounter `$b12` (label `mandatory` "Message",
`span > textarea#TextArea_Message.form-control.OSFillParent`, MaxLength 500, prompt MessagePrompt, enabled = not
isSubmiting) > IconText `$b13`/Icon `$b14` checkbox if Rate_ShowRate [P:501-1195; dom/default.html:72-125].
FixedFooter `$b15` (ExpectedFooterHeight `calc(2 * var(--space-base) + var(--ubt-button-height-m))`, ContentContainerId
`Content`, useBottomBar False) > CustomContainer `$b16` (neutral 0, padding base, shadow xs-top) > ButtonLoading `$b17`
(IsLoading = isSubmiting) > CW_Common.Button `$b18` ("Send", IsDisabled = not IsFormFilled or isLoadingMainData)
[P:1196-1320; dom:133-190]. PopUps container: Dialog_Information `SubmittedConfirmation` (header "Thank you", body
CircleButton_WithLabel base_52 green-lightest > Icon mail display_36 green-darker, CustomContainer margin top base small
"Your message has been sent. A member from our Customer Care Team will be in touch soon.", button label "Close")
[P:1322-1470; DI:115-240]; Dialog_Navigation `$b23` only when IsAnyFilled ("Delete message?", "Are you sure you want to
delete this message?") [P:1471-1525]; ContactPopup_ByPhone `$b24` (In_CallPopupData, In_ImageSizeId auto) [P:1526-1565];
CommonUI_InsideLayout `$b25` (In_IgnorePolicy = IgnorePolices) [P:1566-1600].

### Data
| Call | Kind | Trigger (call-sites root) | Inputs | Outputs used | Server side (MCP / cache) | Mock scenarios |
|---|---|---|---|---|---|---|
| `UBTConnect_Utils CacheControl_UserInfo/DataActionGetCacheInfo` | data | CacheControl_UserInfo_Wrapper (isLogged) [call-sites.md] | shared block | Result → user | shell mock (mockUser) | shell |
| `UBTConnect ContactUsDetails/DataActionDataAction_GetLocalityTimezone` | data, on demand | CacheControl_UserInfo_WrapperResult → Refresh [P:2129-2198; calls.json #3] | screen variables (recorded names) | Out_TimezoneName/Offset → CallPopupData (OnAfterFetch) [P:1786-1812] | not known | recordedHandler (matchInputs off); loading/error by scenario |
| `UBTConnect ContactUsDetails/DataActionDataAction_GetCountriesNames` | data, on demand | ScreenEvent_OnReady when not isLogged [P:2051-2087] | screen variables | Countries (Dropdown, NotCaptured) | not known | fictional empty list (Q1) |
| `UBTConnect ServiceAPISendContactUsMessage` | server (write) | OnClick_SubmitForm when Form_ContactUs.Valid [P:1665-1690, 1965-1990] | In_ContactUsForm, In_ContactSubjectId, Rate, Rate_UserWantToBeContacted | Out_ErrorMessage | must authorize the session user | statefulHandler: stores the message in collection `ContactUsDetails.sentMessages`, answers Out_ErrorMessage "" (P-MUTATION); error → HTTP 500 |

App-start calls of the capture (SynchAppContext, AfterInitialize, Sync_Info_GetMain, GetNumberUnreadMessages, Cacheable*)
are the shell's [calls.md #1, #4-#8].

### Behaviour
| Element / lifecycle | Event | Logic | Calls | Navigates to (params) | Feedback |
|---|---|---|---|---|---|
| Screen | OnInitialize | PIN_Check; IgnorePolices = no user or NeedRegister; Get_ContactUsFormDescription(In_ContactSubjectId) → Description, MessagePrompt [UC:3807-4040]; isLogged = user; Rate_ShowRate = subject GeneralSuggestionsFeedbackRating and isLogged; isLoadingMainData = isLogged [P:2370-2420] | – | – | – |
| Screen | OnReady | not isLogged → Refresh GetCountriesNames [P:2051-2087] | GetCountriesNames | – | – |
| CacheControl_UserInfo_Wrapper | Result(UserInformation) | LocalCacheControl_UserInformation; isLoadingMainData False; ContactUsForm FullName, Email, Country (Geography.Country_Name), Locality (Locality_Name), PhoneNumber (HomeNumber); CountryPhone (Country_Phone); Refresh GetLocalityTimezone [P:2129-2198] | GetLocalityTimezone | – | – |
| GetLocalityTimezone | OnAfterFetch | CallPopupData.ContactPopupData.TimezoneName/Offset [P:1786-1812] | – | – | – |
| TextArea_Message (and signed-out fields) | OnChange | OnChange_FormInput: isLogged ? IsFormFilled = Message <> "" or (feedback subject and Rate_SelectedRate <> 0), IsAnyFilled = Message <> "" : all six trimmed fields filled / any filled [P:1747-1784]; Email / Phone change also reset their validation [P:2200-2229, 2339-2368] | – | – | – |
| Link "Support Team" | OnClick | OnClick_SupportTeam: CallPopupData (ImageURL `img/UBTConnect.UbtLogo.png`, Name "Support Team", timezone, Locality, ShowPopup False, DisplayContactNumber/Phone = CountryPhone, IsAvatarImage False, CountryName, TitleTerminator "?"), then ShowPopup True [P:2231-2287] | – | – | ContactPopup_ByPhone opens |
| ContactPopup_ByPhone | Event_Cancel / Event_Call | Handler_CallPopup_Cancel: ShowPopup False [P:2289-2312] | – | `tel:` (shared block) | – |
| ContactUs_Rate / IconText | RateSelected / Clicked | Rate_SelectedRate = Rate then OnChange_FormInput; Rate_UserWantToBeContacted toggled [P:2089-2127, 2314-2337] | – | – | – |
| Button "Send" | ButtonOnClick | OnClick_SubmitForm: trim the six fields; isSubmiting True; NameHasNumbers / IsEmailValid / IsPhoneNumberValid set Input_FullName / Input_Email / Input_PhoneNumber validity [JSU:2922-3002; UL:7470-7640]; IsFormFilled False; Form_ContactUs.Valid → SendContactUsMessage, isSubmiting False; Out_ErrorMessage "" → ConfirmAction(SubmittedConfirmation) → confirmed: Action_ResetForm, (PreviousScreen); else FeedbackMessage_AutoClose(Out_ErrorMessage, Error); Form not valid → isSubmiting False; non-system exception → isSubmiting False, FeedbackMessage_AutoClose(message, Error) [P:1857-2049] | SendContactUsMessage | back (after Close) | Thank you dialog / error message |
| Dialog_Navigation (IsAnyFilled) | Event_OnBackNavigation | OnBackNavigation_ConfirmDiscard: PreventNavigation(event) → the dialog asks; Yes resumes, No stays [P:2422-2450; Dialog_Navigation README] | – | the prevented destination | – |

Form_ContactUs.Valid is the AND of the validity of the widgets registered in the form, i.e. the rendered ones
[RT:17 ValidationService.recalculateAggregatorsState / register]: signed in, only TextArea_Message (never set invalid),
so the hidden Input_Email / Input_PhoneNumber results do not block the send; signed out, the three validated inputs count.

### States
| State | Condition (expression) | Captured | Scenario |
|---|---|---|---|
| default | signed in, user info fetched: skeleton off, "Prefer to speak…" shown, Send disabled | yes | real |
| loading | GetCacheInfo pending: isLoadingMainData → `ubt-skeleton-section`, CountryPhone "" hides `$b5` | yes | loading |
| offline | GetCacheInfo fails: no Result, same markup as loading | yes | error |
| signed out | not isLogged | no → NotCaptured (Q1) | – |
| feedback subject | Rate_ShowRate | no → NotCaptured / built from shared blocks (Q2) | – |
| Thank you / Delete message? / call popup open | after send / back with text / Support Team | no (closed markup captured) | – |

## Patterns used
- P-PARAMS: the three inputs from the query string; back navigation via the shell (`useNavigateBack`).
- P-STATES: skeleton through SkeletonSection; NotCaptured for the uncaptured branches (Q1, Q2).
- P-DATA / P-CALLS: `api.ts` callAction for the two data actions (on demand, as the controller refreshes them) and the service action; same triggers as call-sites.md.
- P-MOCKS: `mocks.ts` recordedHandler for GetLocalityTimezone, fictional GetCountriesNames, stateful SendContactUsMessage.
- P-MUTATION: SendContactUsMessage stores the sent message in a `src/mocks/store.ts` collection; nothing in the app lists it.
- P-DIALOG: Dialog_Information through the shell ActionConfirmationDialog + `confirmAction('SubmittedConfirmation')`; Dialog_Navigation through the NavigationHandler gate; FeedbackMessage_AutoClose through `shell/feedback`.
- P-FORM: controlled text area, markup as captured, submit through `api.ts`.
- P-OSUI: ButtonLoading from `src/shared/osui/`.

## Feature flags
- `clientVar:App_PIN_BiometricEnabled`: MCP unavailable; decision "not a flag (false positive): user setting for biometric unlock" (user, 2026-10-14); not read by this route (only by the shell's PIN blocks).

## Unclear points
- Signed-out branch (five fields, GetCountriesNames) not captured → Q1 (decision, pending orchestrator answer; built with A).
- Feedback & Rating subject (ContactUs_Rate, contact checkbox) not captured → Q2 (decision, pending orchestrator answer; built with A).

## Decisions to confirm
- Q1 → A (pending orchestrator answer): signed-out fields as one NotCaptured; logic kept; GetCountriesNames answers a fictional empty list.
- Q2 → A (pending orchestrator answer): ContactUs_Rate as NotCaptured; the contact checkbox built from shared IconText/Icon with the compiled inputs.
- SendContactUsMessage is a write: mocked (P-MUTATION collection `ContactUsDetails.sentMessages`, Out_ErrorMessage ""); the Out_ErrorMessage branch is only reachable with a real server; the `error` scenario gives HTTP 500 → the AllExceptions message.
- Dialog_Information, Dialog_Navigation and the call popup open states are not captured: built from the compiled views with shared blocks.
- GetLocalityTimezone is sent the screen variables of the recording without the user's form data (the recording dropped them); the mock serves the only recording.
- `maxlength` 500 and the label's `for` follow the compiled view (MaxLength, TargetWidget); the captures drop both attributes.

## Change requests
- none

## Parity
| State | Scenario | structure | class | attr | style | layout | Exemptions fired |
|---|---|---|---|---|---|---|---|
| default | real | 0 | 0 | 0 | 0 | 0 (pixels 0.00%, calls 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1, ignoreSubtrees×1 |
| loading | loading | 0 | 0 | 0 | 0 | 0 (pixels 0.00%, calls 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1, CAPTURE-SKELETON-SHIMMER-PHASE×3, ignoreSubtrees×1 |
| offline | error | 0 | 0 | 0 | 0 | 0 (pixels 0.00%, calls 0) | CAPTURE-LINK-HREF-CURSOR-HOMEFEED×1, CAPTURE-SKELETON-SHIMMER-PHASE×3, ignoreSubtrees×1 |

Two consecutive clean runs after the last code change (2026-10-15). The text area renders `rows=3` as compiled (textLines 3, mvc.js:1102); the capture stripped `rows` (capture.js KEEP_ATTR), so the reference shows 2 rows (60 px): exemptions CAPTURE-TEXTAREA-ROWS-CONTACTUSDETAILS* (orchestrator, 2026-10-15). A smoke test
(Playwright, mock user) showed the counter, Send enabling, "Delete message?" on back with text (No stays), the Support
Team call popup with the country phone, and send → "Thank you" → Close → back.

## Server-side notes
- SendContactUsMessage must take the sender from the session for signed-in users (the client sends the cached name, email and phone) and rate-limit anonymous senders.
- GetLocalityTimezone must use the session user's locality, not client input.
