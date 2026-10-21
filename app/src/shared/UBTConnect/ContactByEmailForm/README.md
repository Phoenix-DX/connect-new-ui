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

Actions ported: OnInitialize · OnClick_SubmitForm (AllowUpcomingNavigation, then the event) ·
OnBackNavigation_PreventNavigation (NavigationHandler PreventNavigation on the Dialog_Navigation event, shown while
Subject ≠ In_Subject or Trim(Message) ≠ ""). Field rules: subject enabled when In_Subject = "" and not IsLoading,
InputCounter only when In_Subject = ""; message enabled when not IsLoading; Send disabled until both are filled.

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
