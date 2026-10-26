# AssembleSummaryCard

OutSystems: `Connect2_Assemble_MUI.Assemble.AssembleSummaryCard` · pack
`migration/blocks/Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.md` · source
`migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleSummaryCard.mvc.js`

| Input                | Type                    | Prop                   | Default |
| -------------------- | ----------------------- | ---------------------- | ------- |
| AssembleEventSummary | AssembleEventSummaryRec | `assembleEventSummary` | `{}`    |
| IsListItem           | Boolean                 | `isListItem`           | `false` |

No events or placeholders. Structure: `../lib/structures.ts` (Connect2_Assemble_CS model not captured: field names
from the attributes the compiled code reads).

Ported: GetAssembleEventSummaryHeaderLabel, GetAssembleHostedAtComponents, GetAssembleEventSummaryDateTimeString
(`../lib/actions.ts`).

The component has props only (rule 4). The caller gives the actions:

| Prop                                             | Action                                                                   |
| ------------------------------------------------ | ------------------------------------------------------------------------ |
| `onAddressClick`                                 | LinkAddressOnClick (controller :649-787), with the AssembleEventSummary. |
| `onMeetingInfoToggle`, `renderMeetingInfoDialog` | Passed to AssembleCommon_VirtualMeetingURL (see its README).             |

The pages render `containers/AssembleSummaryCard` (`AssembleSummaryCardContainer`). It gives LinkAddressOnClick with
NavigateToMaps (`Connect2_LegacyShared/lib/actions.ts`), ConfirmAction and the MeetingInfo dialog.

## Captured variants (0)

AssembleDetail has no capture and AssembleEvents shows no event card: stories `HallMeeting`, `VirtualListItem`,
`Unavailable`; `AssembleSummaryCard.test.tsx` checks both layouts, the address link and the MeetingInfo actions.

## Not settled

- LinkAddressOnClick's AndroidNative branch (Cordova LaunchWithData of Google Maps) is not ported: CheckAppLauncherPlugin
  is False without Cordova, so NavigateToMaps never returns it in the React app.
- The location container has `animate: true` (plain container here, as elsewhere).
- Errors of LinkAddressOnClick are raised as UserException (GoogleMapsNotInstalled / UnknownError) to the caller; in the
  browser the redirects cannot fail.
