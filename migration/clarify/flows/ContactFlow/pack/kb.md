# KB index of UI flow ContactFlow

KB root: `../ubt_sharing_kb/connect/outsystems/apps` (os-kb extraction of Connect, DEV, 2026-10-05). Rules quote the model and say `confirmed` or `inferred`.
Read the UI pages fully; open a rule file only for the rules the report cites.

## UI pages of UBTConnect that name the flow or its screens

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/contact-by-email.md` — Contact by email (flow `ContactFlow`) (8 names of this flow, 10 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-orbit.md` — Orbit (flows `Legacy_OrbitEventsFlow`, `Legacy_OrbitQRCodeFlow`, `Legacy_OrbitAdminFlow`) (2 names of this flow, 12 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/common-blocks.md` — Common blocks and pop-up dialogs (flows `App_Common_Blocks`, `App_Common_Blocks_PopupDialogs`) (1 names of this flow, 5 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-assemble.md` — Assemble (flow `Legacy_AssembleFlow`) (1 names of this flow, 6 rules)
- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/ui/legacy-ldm-events.md` — LDM events (flows `Legacy_LDMEventsFlow`, `Legacy_LDMEventsFlow_V2`) (1 names of this flow, 10 rules)

## Logic pages and cross-cut pages that name the flow's actions

- `../ubt_sharing_kb/connect/outsystems/apps/ubtconnect/modules/UBTConnect/logic/ui-legacy-flows.md`: ContactByEmailLDMCoordinator, ContactByEmailMember, ContactByEmailOrbitHelpdesk

## Rules (BR-UBTCON-*) whose source element is a screen, block or action of the flow

| Element | Rule | Confidence | Title |
|---|---|---|---|
| ContactByEmailContacts | `BR-UBTCON-044` | confirmed | A message to a locality contact is sent through the LDM-coordinator email service, to the address passed in by the calling screen |
| ContactByEmailForm | `BR-UBTCON-041` | confirmed | "Send" stays disabled until both subject and message are filled in — a message of spaces counts as filled |
| ContactByEmailForm | `BR-UBTCON-042` | confirmed | When the caller supplies a subject, the subject field is locked; otherwise the user types one (up to 100 characters) |
| ContactByEmailForm | `BR-UBTCON-043` | confirmed | Leaving a contact form with a typed message or changed subject asks "Delete message?" and blocks the navigation; pressing Send lets the next navigation through |
| ContactByEmailLDMCoordinator | `BR-UBTCON-045` | confirmed | Emailing an LDM event coordinator sends through the coordinator service and records the "coordinator emailed" event twice — once as a detailed audit and once as an application event |
| ContactByEmailMember | `BR-UBTCON-046` | confirmed | After a member-to-member email, the audit depends on where it came from: Orbit "email host", an LDM event (date or locality given), or a plain household contact |
| ContactByEmailMember | `BR-UBTCON-047` | confirmed | The contact screen is titled "Contact the <name> household" when contacting a household, otherwise "Contact Member" |
| ContactByEmailOneSchoolGlobal | `BR-UBTCON-048` | confirmed | Emailing a OneSchool Global contact uses the member-to-member service and is audited as "email household" |
| ContactByEmailOrbitHelpdesk | `BR-UBTCON-049` | confirmed | Contacting the Orbit helpdesk sends through the Orbit contact service flagged as helpdesk, with the sender's name taken from the device's cached profile |
| ContactByEmailOrbitHost | `BR-UBTCON-050` | confirmed | Contacting an Orbit host sends to the host email passed in by the calling screen, with no event id and no audit (the audit node is disabled) |

## Referenced modules: pages that name the referenced blocks and the server/service actions

| Name | Hits | Where (first 5) |
|---|---|---|
| Button | 30 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-698.md:29`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_OrbitMobile_MUI/rules/BR-C2LEG-696.md:28` |
| ButtonLoading | 8 | - |
| Columns_Three | 0 | - |
| CustomContainer | 19 | - |
| CustomText | 9 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:13`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/design-tokens.md:20` |
| DynamicTextArea | 1 | - |
| FixedFooter | 2 | - |
| Icon | 26 | - |
| IconText | 5 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:14`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/ui/dialogs.md:62`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/modules/UBTConnect_Utils/rules/BR-C2UTL-317.md:22` |
| InputCounter | 2 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_MyBookmarks_MUI/ui/notes.md:17`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/modules/Connect2_LegacyShared/ui/components.md:25` |
| Layout_DetailPage | 7 | - |
| SendContactEmail | 28 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:74`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:80`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/domains/orbit-events/build/behaviour.md:86`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/triage.md:69`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-legacy/index/build/triage.md:116` |
| SendContactLDMCoordinatorEmail | 12 | - |
| SendContactMemberEmail | 11 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-services/domains/communication/build/behaviour.md:58` |
| TextArea_WithCounter | 2 | - |
| UBT_LazyImage | 29 | `../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/overview.md:75`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:286`<br>`../ubt_sharing_kb/connect/outsystems/apps/connect2-utilities/domains/ui-components/build/behaviour.md:292` |
