# ContactByEmailForm

OutSystems: `UBTConnect.ContactFlow.ContactByEmailForm` · pack `migration/blocks/UBTConnect.ContactFlow.ContactByEmailForm.md`
· compiled source `migration/screens/ContactByEmailMember/analysis/sources/pretty/UBTConnect.ContactFlow.ContactByEmailForm.mvc.js`

| Input                        | Type    | Prop                          | Default     |
| ---------------------------- | ------- | ----------------------------- | ----------- |
| IsLoading                    | Boolean | `isLoading`                   | `false`     |
| In_SubjectPlaceholder        | Text    | `inSubjectPlaceholder`        | `''`        |
| In_MessagePlaceholder        | Text    | `inMessagePlaceholder`        | `''`        |
| In_Subject                   | Text    | `inSubject`                   | `''`        |
| In_UseDynamicTextAreaSubject | Boolean | `inUseDynamicTextAreaSubject` | `false`     |
| In_MessageLabel              | Text    | `inMessageLabel`              | `'Message'` |

Event `Event_SubmitForm(Subject, Message)` → `onEventSubmitForm(subject, message)`. Placeholder `Placeholder_ContactCard`
→ `children`. Local variables Subject (= In_Subject on OnInitialize) and Message.

Props only (plan v2 §2.4 rule 4): the platform step of OnClick_SubmitForm, AllowUpcomingNavigation, comes from the
caller as `onBeforeSubmitForm`. The submit hook of each page gives it (with `isLoading` and `onEventSubmitForm`, type
`ContactEmailFormSubmit`).

Actions ported: OnInitialize · OnClick_SubmitForm (`onBeforeSubmitForm`, then the event) ·
OnBackNavigation_PreventNavigation (NavigationHandler PreventNavigation on the Dialog_Navigation event, shown while
Subject ≠ In_Subject or Trim(Message) ≠ ""). Field rules: subject enabled when In_Subject = "" and not IsLoading,
InputCounter only when In_Subject = ""; message enabled when not IsLoading; Send disabled until both are filled.

## Pattern of the ContactByEmail pages (decision Q6)

No container. Each of the 5 pages has:

- `pages/<Route>/config.ts`: a `ContactEmailPageConfig` (the layout title, In_IsPrimaryColor and the form inputs).
- `pages/<Route>/hooks/use<Route>Submit.ts`: OnInitialize and Handler_SubmitForm of the screen; it returns a
  `ContactEmailFormSubmit` that the page spreads on the form.
- The page: Layout_DetailPage > `ContactEmailForm` > a card, `ContactPersonCard` (Member, OrbitHost) or
  `ContactHeaderCard` (OneSchoolGlobal, LDMCoordinator, OrbitHelpdesk), both in `components/contact/`.

The pilot is `pages/ContactByEmailMember/`.

## Captured variants

| Capture                   | Source                                | What it shows                                        |
| ------------------------- | ------------------------------------- | ---------------------------------------------------- |
| v1                        | ContactByEmailMember/default          | pack variant: content + FixedFooter (nested)         |
| form-member.html          | ContactByEmailMember/default          | the `<form>`: label, input subject, counter, message |
| form-oneschoolglobal.html | ContactByEmailOneSchoolGlobal/default | the `<form>` with the DynamicTextArea subject        |

The two form captures are sub-trees of the block (the rest holds the screen's contact card); tested with
`expectToMatchCapture` on the form element.

## Not captured / not settled

- Dialog_Navigation (dirty form) and the loading state: compiled view only, tested with `it`.
- `Trim` is ported as `String.prototype.trim` (OutSystems Trim of the platform runtime was not compared for non-space
  whitespace).
