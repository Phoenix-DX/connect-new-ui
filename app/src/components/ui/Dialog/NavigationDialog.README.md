# Dialog_Navigation

OutSystems: `UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation` · pack
`migration/blocks/UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.md` (compiled source
`migration/blocks/sources/UBTConnect.App_Common_Blocks_PopupDialogs.Dialog_Navigation.mvc.js`)

| Input        | Type | Prop           | Default |
| ------------ | ---- | -------------- | ------- |
| ConfirmLabel | Text | `confirmLabel` | `Yes`   |
| DIsmissLabel | Text | `dIsmissLabel` | `No`    |

Events: `Event_OnBackNavigation(Event_NavigationEvent)` → `onEventOnBackNavigation(event)`. The caller runs
PreventNavigation (`../../NavigationHandler/lib/actions.ts`) to ask; for example ContactUsDetails
`OnBackNavigation_ConfirmDiscard`. Placeholders: `Placeholder_Header` → `placeholderHeader`, `Placeholder_Body` →
`placeholderBody`.

Markup (view :141-330): `connect-dialog-popup connect-dialog-popup--navigation` container > NavigationConfirmationDialog
with these parts:

- header CustomContainer (margin bottom base, neutral 10, semi-bold) > `text-align-center` > Placeholder_Header
- body CustomContainer (margin bottom medium, neutral 10) > Placeholder_Body
- button labels as expressions

## Not captured

No capture renders this block (users: ContactByEmailMember, ContactByEmailOneSchoolGlobal, ContactUsDetails,
Profile; none built yet). Built from the compiled view; stories `CompiledView` and `Closed`, tested in
`Dialog_Navigation.test.tsx`.

## Not settled

- Opens only once the shell navigation dispatches `dx-before-navigation` (see NavigationConfirmationDialog README).
