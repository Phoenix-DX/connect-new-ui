# Person_Contact_Options

OutSystems: `Connect2_LegacyShared.Reusable.Person_Contact_Options` · pack
`migration/blocks/Connect2_LegacyShared.Reusable.Person_Contact_Options.md`

| Input          | Prop           | Notes                                  |
| -------------- | -------------- | -------------------------------------- |
| `Phone`        | `phone`        | default `''`; link shown when not `''` |
| `MobilePhone`  | `mobilePhone`  | same                                   |
| `WorkPhone`    | `workPhone`    | same                                   |
| `EmailAddress` | `emailAddress` | same                                   |

Events: `CallClicked(PhoneNumber)` → `onCallClicked(phoneNumber)` (all three phone links), `EmailClicked(Email)` →
`onEmailClicked(email)`. The block's own handlers are empty (`callClicked$Action`, `emailClicked$Action` return
`Promise.resolve()`), so there is no module action to port. Placeholders: none. Each link is Visible and Enabled by the
same `input !== ''` test, so a disabled link is never rendered.

## Captures

| Capture | Source                     | What it shows                                                               |
| ------- | -------------------------- | --------------------------------------------------------------------------- |
| v1      | LDM_EventDetail_V2/default | phone and email links (the other two inputs empty); the pack's only variant |

## Not captured

- Mobile and work links: markup (classes `block-household-person-options-mobile text-green-darker`,
  `...-work text-dark-blue`, icons `fa-mobile`, `fa-briefcase`) comes from the compiled view; tested by `it(...)`.
- The Call_Phone container has no extra class in the compiled view (as captured).
