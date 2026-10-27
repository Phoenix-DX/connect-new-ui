# Flow report: Legacy_LDMEventsFlow

| | |
|---|---|
| Status | draft |
| Date | 2026-10-27 |
| Screens on DEV | 4 (built: 1, EmailTarget; not built: LDM_Email, LDM_EventDetail, LDM_MyEvents, board `skip`, user 2026-10-16) |
| Sources | `pack/*.md` (DEV model, MCP dump 2026-10-27), `app/src/…`, KB pages (`pack/kb.md`), TST compiled code: `screen:` = `UBTConnect.Legacy_LDMEventsFlow.EmailTarget.mvc.js`, `block:` = `Connect2_LegacyShared.Email.ScreenBlock_Household_Email.mvc.js` (line numbers of `tst_source.py show`) |
| Rule | TST is the source of truth; DEV is the checklist. A difference is noted in §6. |

React paths start at `app/src/`. Row ids are the last 3 digits of `Legacy_LDMEventsFlow-NNN` in `checklist.json`.

## 1. Summary

- Counts by verdict: match 67 · partial 1 · missing 2 · differs 5 · mock-only 2 · n/a 17 · unclear 0 (same as `checklist.json`, 94 rows).
- F1 (minor): EmailTarget does not set the document title "EmailTarget". The app shell owns the fix for every route.
- F2 (minor): the OnReady reset of a restored view is not built. After Back to a restored EmailTarget, TST shows an empty Subject; React shows InitialEmailSubject again.
- The audit events (AddAuditEventDetailEvent, zOnApplicationEvent_Wrapper) go to the log only. Decision U17 covers this. Production needs the application-event sink of Connect2_LegacyShared.
- Status: in React a user can open EmailTarget, fill the subject and the message, pass the same validations and send the e-mail to the mock. The audit events are not sent, and a restored view keeps the initial subject.

## 2. Screens

### 2.1 EmailTarget

The screen is a wrapper of the referenced block ScreenBlock_Household_Email (Connect2_LegacyShared). §3 holds the block.

**Identity**

| Row | Item | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 001 | route, roles | QueryString; Registered (TST checks Registered only) | `MEMBER_ROUTE` (member, enforce) | match | `app/routes.ts:40`; `app/routes.generated.ts:77`; screen:383-385 |
| 002 | document title | View.title "EmailTarget"; the runtime writes `document.title` on mount | no `document.title` write; `app/index.html:6` keeps "UBTConnect" | missing | screen:196-199; `OutSystemsReactView.js:7`. F1 |

**Data** (inputs and static records; the screen has no data action)

| Row | Data source | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 003-007 | In_HouseholdFirstName, In_HouseholdFullName, EmailTo, ContactBusinessType, InitialEmailSubject | Text inputs, default "" | `text(name)`, default '' | match | `pages/EmailTarget/inputs.ts:34-40`; screen:13-66, 107-144 |
| 008-009 | EmailHost, IsFromLDM | Boolean, default False | `osBoolean`, default false | match | `inputs.ts:27,41-42` |
| 010 | EventDate | Date, null date default | '' for absent or 1900-01-01 | match | `inputs.ts:29-30,43` |
| 011 | EventLocality | Text, default "" | '' | match | `inputs.ts:44` |
| 019 | ApplicationEvents_LDM.MyTimelineHostEmailed | 8e5d4070-… | the same id | match | `hooks/emailTargetState.ts:11`; `migration/knowledge/static-entities-tst.json` |
| 020 | ApplicationEvents_LDM.MyTimelineGuessEmailed | c49b96e1-… | the same id | match | `emailTargetState.ts:12`; static-entities-tst.json |

**UI tree**

| Row | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 012 | ScreenBlock_Household_Email | 5 inputs; EmailSubmitted → OnEmailLDMEventParticipant_Handler | `useHouseholdEmail` with the same 4 flow inputs, `HouseholdEmailView` with In_HouseholdFullName; callback runs the handler | match | `EmailTargetPage.tsx:22-50`; screen:217-244 |
| 013 | placeholder BottomBar | BottomBarMenu, no inputs | `<BottomBar id="$b2" />` | match | `EmailTargetPage.tsx:45`; screen:254-275 |
| 014 | placeholders Menu, CommonUI_Elements | `PlaceholderContent.Empty` | empty divs | match | `HouseholdEmailView.tsx:128,180`; screen:255,276 |
| 015 | CommonUI_InsideLayout | no inputs | `<CommonUiLayout id="$b3" />` | match | `EmailTargetPage.tsx:52`; screen:279-296 |

**Screen actions**

| Row | Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 016 | OnEmailLDMEventParticipant_Handler: If IsFromLDM | condition | `if (!inputs.IsFromLDM) return` | match | `emailTargetState.ts:24`; screen:335 |
| 017 | true branch: AddAuditEventDetailEvent | EventTypeId = If(EmailHost, Host, Guest), 0, "", EventDate, EventLocality | the same choice; `log.info` only | differs | U17 (`migration/app-shell.spec.md:241,349,384`). Production need below |
| 018 | false branch | end | return | match | screen:342-344 |
| 021 | AddAuditEventDetailEvent (Connect2_OrbitMobile_MUI) | builds EventInfo (dateLocalIso, logLevel 3, EventType "LDM", guest id and name, EventDate, EventLocality), then calls zOnApplicationEvent_Wrapper | log stub, no repository call | differs | U17. TST `Connect2_OrbitMobile_MUI.controller.js:241-276` |

Production need of rows 017 and 021: the application-event sink behind `Connect2_LegacyShared` zOnApplicationEvent_Wrapper (`Connect2_LegacyShared.controller.js:7570`), with the EventInfo JSON of AddAuditEventDetailEvent.

**Validations**: the screen has none. The block holds them (§3).

**Business logic**

| Row | Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 090 | BR-UBTCON-614 | an LDM e-mail is audited as host-emailed or guest-emailed; other e-mails are not audited | the same choice; the event goes to the log | differs | U17; `legacy-ldm-events.md:44,63` |

**Strings**

| Row | Item | Verdict | Evidence / note |
|---|---|---|---|
| 076 | 12 visible texts of the screen and its block ("Contact ", "To: ", "Subject", "Message", "send email", "Type message here...", "Required Field!", the offline and success messages, the 3 dialog texts) | match | `HouseholdEmailView.tsx`; `useHouseholdEmail.ts:105,109,115,135`; block:282-865 |

### 2.2 LDM_Email (not built)

- Board: `skip`, "V1 not needed: TST uses the V2 screens (GetHasNewLDM on)" (user, 2026-10-16; `migration/board.md:67`).
- DEV screen: it sends an e-mail to an event participant through ScreenBlock_Event_Email (Connect2_OrbitMobile_MUI). The app builds LDM_Email_V2 instead.
- A build needs ScreenBlock_Event_Email and its EventContactEmail call. Row 085: `n/a`.

### 2.3 LDM_EventDetail (not built)

- Board: `skip`, same reason (user, 2026-10-16; `migration/board.md:69`).
- DEV screen: it shows one LDM event through ScreenBlock_EventDetail (LDM_ScreenBlocks). It opens the maps sites, the contact forms, the household carousel and the household detail. The app builds LDM_EventDetail_V2 instead.
- A build needs ScreenBlock_EventDetail, the two external sites and the contact navigation of BR-UBTCON-612. Row 086: `n/a`.

### 2.4 LDM_MyEvents (not built)

- Board: `skip`, same reason (user, 2026-10-16; `migration/board.md:71`).
- DEV screen: it lists the user's LDM events through ScreenBlock_MyEvents. With GetHasNewLDM on (TST), an event opens LDM_EventDetail_V2 (BR-UBTCON-611). The app builds LDM_MyEvents_V2 instead.
- A build needs ScreenBlock_MyEvents. Row 087: `n/a`.

### 2.5 External sites

| Row | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 088 | AndroidMaps (geo:0,0), WebMaps (Google Maps directions) | used only by LDM_EventDetail (V1) | not built | n/a | skip (`migration/board.md:69`). LDM_EventDetail_V2 has its own map handlers (TST `UBTConnect.Legacy_LDMEventsFlow_V2.LDM_EventDetail_V2.mvc.js:155-190`): owned by flow Legacy_LDMEventsFlow_V2, see its report |

## 3. Blocks of the flow

The flow has no own block. EmailTarget uses the referenced block ScreenBlock_Household_Email of Connect2_LegacyShared. Its logic is on TST only (`references.md`). The rows below check React against block: and the KB rules BR-C2LEG-519 to 522.

### 3.1 ScreenBlock_Household_Email

**Data** (local variables, block:13-36)

| Row | Variable | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 022 | Subject | Text, set to InitialEmailSubject in OnInitialize | `useState(inputs.initialEmailSubject)` | match | `useHouseholdEmail.ts:70` |
| 023 | Message | Text "" | `useState('')` | match | `useHouseholdEmail.ts:71` |
| 024 | IsChange | Boolean False | `latest.current.isChange` | match | `useHouseholdEmail.ts:73` |
| 025 | IsSending | Boolean False | `useState(false)` | match | `useHouseholdEmail.ts:72` |
| 026 | EmailHouseholdEvent | record {EmailTo, NameOfSender} | `emailHouseholdEventAttachment` | match | `householdEmailState.ts:69-71` |
| 027 | HeaderText | Text "Member" | `headerText()` | match | `householdEmailState.ts:37-41` |
| 028 | ShowCancelPopup | written False on a restored view; no widget reads it | not built | n/a | dead in the model: block:30-31, 992-993; only the debugger getter reads it (block:1288-1289) |
| 029 | IsEmailSubmitted | written True at the end; no widget reads it | not kept | n/a | dead in the model: block:33, 837, 1294 |

**UI tree**

| Row | Element | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 036 | title | "Contact " + HeaderText in `text-align-center` | the same | match | `HouseholdEmailView.tsx:130-134`; block:271-282 |
| 037 | MenuIcon | MenuAction Back | `MenuAction.Back` | match | `HouseholdEmailView.tsx:129`; block:249-252 |
| 038 | recipient line | envelope icon (Twotimes) + "To: " + In_HouseholdFullName | `fa fa-envelope fa-2x` + the same text | match | `HouseholdEmailView.tsx:138-141`; block:306-331 |
| 039 | Email_Form | style "form card", OSFillParent | the same classes | match | `HouseholdEmailView.tsx:142`; block:332-342 |
| 040 | label Subject | mandatory, target Email_Subject | the same | match | `HouseholdEmailView.tsx:143-145` |
| 045 | InputCounter of Email_Subject | Reusable/InputCounter | `LegacyInputCounter` | match | `HouseholdEmailView.tsx:147`; block:399-416 |
| 046 | label Message | mandatory, target TextArea_Message | the same | match | `HouseholdEmailView.tsx:148-150` |
| 051 | InputCounter of TextArea_Message | Reusable/InputCounter | `LegacyInputCounter` | match | `HouseholdEmailView.tsx:152`; block:473-492 |
| 052 | ButtonLoading + "send email" | IsLoading = IsSending; `btn btn-primary` | `LegacyButtonLoading`, the same label and class | match | `HouseholdEmailView.tsx:153-164`; block:493-596 |
| 070 | NavigationConfirmationDialog | "Confirm", "Are you sure you want to discard the changes?", "Confirm", "Cancel"; `backwards-compatibility` | the same texts and class | match | `HouseholdEmailView.tsx:167-176`; block:597-651 |

**Actions**

| Row | Action | OutSystems (trigger → steps) | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 053 | button OnClick | validateWidget(Email_Form), then OnSubmit_Email | `validation.validate(ids.form)`, then `onSubmitEmail()` | match | `useHouseholdEmail.ts:155-158`; block:533-543 |
| 063 | UserContactUser (UserDirectContactForm) | UserContactRequest with 10 set fields; SenderPhone stays at its default | the same 10 fields and SenderPhone '' | match | block:794-809. The record type has SenderPhone (`ScreenBlock_Event_Email.mvc.js:1398,1407`) and the runtime sends the whole record. Contract: `api/openapi.yaml:17483,17495` |
| 064 | UserContactUser server side | write | `contractHandler` stores the request | mock-only | `pages/EmailTarget/mocks.ts:14-19`. Production needs the server action UserContactUser of Connect2_LegacyShared (UBT_Email) |
| 065 | EmailSubmitted | raised after the call | `onEmailSubmitted?.()` after the await | match | `useHouseholdEmail.ts:130`; block:811-812 |
| 066 | zOnApplicationEvent_Wrapper(EmailHousehold, JSON) | application event with {EmailTo, NameOfSender} | `log.info` only | differs | U17. Production need: `Connect2_LegacyShared.controller.js:7570` and its sink |
| 089 | error of UserContactUser | the flow rethrows to handleError; IsSending stays True | `.catch(raiseToFlowHandler)`; IsSending stays true | match | block:881-885, 1197-1198; `useHouseholdEmail.ts:157` |

**Validations**

| Row | Validation | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 041 | Email_Subject | Text, Mandatory, MaxLength 100, autocomplete off, prompt "Subject", `form-control` + `field-error-border` | `maxLength={100}`, `required`, the same prompt and classes | match | `HouseholdEmailView.tsx:50-63`; block:356-397 |
| 047 | TextArea_Message | Mandatory, MaxLength 1000, 6 lines, prompt "Type message here...", `form-control textarea-message` | `maxLength={1000}`, `required`, `rows={6}`, the same prompt and classes | match | `HouseholdEmailView.tsx:80-92`; block:430-472 |
| 043-044 | OnChange_InputSubject | filled: Valid True, "" and IsChange True; else IsChange False | the same | match | `useHouseholdEmail.ts:77-81`; block:942-957 |
| 049-050 | OnChange_InputMessage | the same for Message | the same | match | `useHouseholdEmail.ts:84-88`; block:1037-1052 |
| 054-055 | OnSubmit_Email field checks | blank field: Valid False, "Required Field!" | the same | match | `useHouseholdEmail.ts:102-109`; block:729-765 |

**Logic**

| Row | Logic | OutSystems | React | Verdict | Evidence / note |
|---|---|---|---|---|---|
| 030 | OnInitialize reset | IsSending False, Subject = InitialEmailSubject, Message "" | initial state | match | `useHouseholdEmail.ts:68-73`; block:1076-1083 |
| 031-034 | OnInitialize HeaderText | "School" for OneSchool Global, "Store" for Campus&Co, else "Member" | `headerText()` | match | `householdEmailState.ts:15,37-41`; block:1084-1104; values in static-entities-tst.json |
| 035 | OnReady: restored from cache | the JS node reads `View.wasCurrentViewRestoredFromCache()`; true: ShowCancelPopup False, Subject "", Message "", IsChange False | no branch; the page remounts with Subject = InitialEmailSubject | missing | block:982-1005, 1216-1219. The U19 view cache restores only `useViewState` values (`platform/navigation/viewCache.ts:1-8`). A code comment is not a decision. F2 |
| 042, 048 | OnChange of the two fields | calls OnChange_InputSubject / OnChange_InputMessage | the same | match | `useHouseholdEmail.ts:147-154` |
| 056 | both fields filled? | else end | `return` | match | `useHouseholdEmail.ts:111`; block:769, 873-875 |
| 057 | IsSending True, GetNetworkStatus | IsOnline from `navigator.onLine` | `navigator.onLine` | match | block:771-777; `OutSystemsUI_2_23.controller.js:13161` |
| 058 | offline branch | error "You cannot send emails without a network connection.", IsSending False | the same | match | `useHouseholdEmail.ts:114-118`; block:865-868 |
| 059-061 | online branch, Email_Form.Valid, invalid branch | OnChange calls; blank fields set to ""; IsSending False | the same | match | `useHouseholdEmail.ts:119-126`; block:779-858 |
| 062 | valid branch | IsChange False; AppManager_GetCachedUserInfo | the same | match | `useHouseholdEmail.ts:127-128` |
| 067 | ScheduleFeedbackMessageAfterTransition | `window.setTimeout` 500 ms, then success message (type 1) | the same | match | block:1209-1214; `householdEmailState.ts:81-85` |
| 068 | end of OnSubmit_Email | IsSending False; Destination PreviousScreen | `setIsSending(false)`; `navigateBack()` | match | `useHouseholdEmail.ts:136-138`; block:834-841 |
| 069 | NavigationHandlerNavigation | IsChange → PreventNavigation | the same | match | `useHouseholdEmail.ts:159-161`; block:904-911 |
| 071 | data actions | none | none | match | block:710 |
| 091 | BR-C2LEG-519 | title by business type | the same | match | rows 031-036 |
| 092 | BR-C2LEG-520 | blank fields flagged "Required Field!" | the same | match | rows 054-055 |
| 093 | BR-C2LEG-521 | connection check, UBT_Email request, EmailHousehold audit, confirmation | all match except the audit (log only) | differs | U17; rows 057, 063, 066, 067 |
| 094 | BR-C2LEG-522 | discard prompt; a restored form is reset | the prompt matches; no reset | partial | rows 035, 069, 070. F2 |

**Strings**: all 12 texts of the block match (row 076).

## 4. Shared blocks and actions

| Item | Owner | React location | Verdict |
|---|---|---|---|
| BottomBarMenu, CommonUI_InsideLayout | App_Common | `components/layout/BottomBar`, `components/layout/CommonUiLayout` | use here: match (rows 013, 015); internals checked in the report of flow App_Common |
| Reusable/InputCounter, DEPRECATED_ButtonLoading, MenuIcon | shared UI | `LegacyInputCounter`, `LegacyButtonLoading`, `MenuIcon` | use here: match (rows 037, 045, 051, 052) |
| NavigationConfirmationDialog, PreventNavigation | NavigationHandler | `components/ui/Dialog` `NavigationDialog`; `lib/navigationEvent` | use here: match (rows 069, 070) |
| AppManager_GetCachedUserInfo | UBT_AppManager | `platform/session/cachedUserInfo` | use here: match (row 062) |
| AddAuditEventDetailEvent, zOnApplicationEvent_Wrapper | Connect2_OrbitMobile_MUI, Connect2_LegacyShared | log stubs in `emailTargetState.ts:17-19`, `householdEmailState.ts:75-77` | differs (U17; rows 017, 021, 066) |
| Get_UI_UpdateItems_UnreadCount_All | Connect_Updates_CS, called by BottomBarMenu | `api/update/repository.ts:70-73`; fixture `mocks/fixtures/UBTConnect/ServiceAPIGet_UI_UpdateItems_UnreadCount_All/01-4f5c3a3c.json` | mock-only (row 084). The pack line "no mock handler found" is wrong |
| 7 client variables of data.md (rows 077-083) | shared blocks of App_Common and App_PIN | not used by EmailTarget or its block | n/a: owned by those flows, see their reports |
| 16 strings of strings.md (rows 072-075) | UnsupportedVersion* and PIN unlock blocks of App_Common and App_PIN | not used by EmailTarget or its block | n/a: owned by those flows, see their reports |

## 5. Findings

| Id | Severity | Screen / element | Finding | React location | Suggested fix | Status |
|---|---|---|---|---|---|---|
| F1 | minor | EmailTarget, document title (row 002) | TST sets the document title "EmailTarget" (`OutSystemsReactView.js:7`). React keeps "UBTConnect" from `app/index.html:6`. | app shell (no `document.title` write in `app/src`) | Write `document.title` from the route title in the app shell, for every route (same fix as Bookmarks F2). | fixed 2026-10-27 (`fixes/A-shell.md`) |
| F2 | minor | ScreenBlock_Household_Email, OnReady (rows 035, 094) | On a view restored from the cache, TST sets Subject and Message to "" and IsChange to False. React remounts the page, so Subject shows InitialEmailSubject again. The difference shows only when InitialEmailSubject is not empty. | `pages/EmailTarget/hooks/useHouseholdEmail.ts:68-73` | Start Subject at '' when `useWasRestoredFromCache()` (`platform/navigation/hooks.ts:40`) is true, or record a decision for the difference. | fixed 2026-10-27 (`fixes/B-restore.md`) |

## 6. DEV vs TST differences

### 6.1 DEV model vs TST

| Element | DEV (model) | TST (compiled code) | What the React app follows | Source |
|---|---|---|---|---|
| - | No difference found. | The pack omits the block internals (referenced module) and two constant arguments of AddAuditEventDetailEvent (0 and ""). These are gaps of the dump, not differences. | TST | screen:339; `references.md` |

### 6.2 KB pages vs TST

No disagreement. BR-UBTCON-614, BR-C2LEG-519 to 522 and the validation index (`connect2-legacy/index/build/screen-validations.md:181-196`: MaxLength 100 and 1000, "Required Field!") agree with TST.

## 7. Questions for the user

None. The evidence settles every row.

## 8. Counts

| Area | Items | match | partial | missing | differs | mock-only | n/a | unclear |
|---|---|---|---|---|---|---|---|---|
| identity | 6 | 1 | 0 | 1 | 0 | 0 | 4 | 0 |
| data | 27 | 17 | 0 | 0 | 0 | 1 | 9 | 0 |
| ui | 14 | 14 | 0 | 0 | 0 | 0 | 0 | 0 |
| actions | 10 | 6 | 0 | 0 | 3 | 1 | 0 | 0 |
| validations | 8 | 8 | 0 | 0 | 0 | 0 | 0 | 0 |
| logic | 24 | 20 | 1 | 1 | 2 | 0 | 0 | 0 |
| strings | 5 | 1 | 0 | 0 | 0 | 0 | 4 | 0 |
| **total** | 94 | 67 | 1 | 2 | 5 | 2 | 17 | 0 |
