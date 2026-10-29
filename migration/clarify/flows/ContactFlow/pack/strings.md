# Pack of UI flow ContactFlow (DEV model, MCP dump of flows 2026-10-27)

Source: Service Studio (DEV) through the MCP, module UBTConnect. Reference only: TST is the source of truth.
Marks: [DISABLED] node, [DEAD BRANCH] If widget with a constant condition, [M<n>] merge node, 'unreachable nodes' list.
The dump omits some constant widget properties (MaxLength, Enabled=False, inline styles were missing on TST checks):
check the input constraints against the TST compiled code (`tst_source.py show <Screen>`).

## String literals (user-visible candidates; JavaScript and Style values excluded)

- "Your message has been sent."  ← ScheduleFeedbackMessageAfterTransition.Value
- "Please provide a description"  ← ContactByEmailContacts.Value
- "Please provide a subject"  ← ContactByEmailContacts.Value
- "Add a message"  ← ContactByEmailLDMCoordinator.Value, ContactByEmailMember.Value, ContactByEmailOneSchoolGlobal.Value, ContactByEmailOrbitHelpdesk.Value
- "Add a subject"  ← ContactByEmailLDMCoordinator.Value, ContactByEmailMember.Value, ContactByEmailOneSchoolGlobal.Value, ContactByEmailOrbitHelpdesk.Value
- "LDM Event Coordinator"  ← ContactByEmailLDMCoordinator.Value
- "Contact the"  ← ContactByEmailMember.Value, ContactByEmailOrbitHost.Value
- "Contact Member"  ← ContactByEmailMember.Value
- "Orbit Helpdesk"  ← ContactByEmailOrbitHelpdesk.Value
- "Fetched Server Side"  ← SendContactEmail.Value
- "calc(2 * var(--space-base) + var(--ubt-button-height-m))"  ← ContactByEmailForm.Value
- "Delete message?"  ← ContactByEmailForm.Value
- "Are you sure you want to delete this message?"  ← ContactByEmailForm.Value