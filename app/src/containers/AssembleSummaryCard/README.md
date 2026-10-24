# AssembleSummaryCard container

OutSystems: `Connect2_Assemble_MUI.Assemble.AssembleSummaryCard` (LinkAddressOnClick) and
`Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL` (MeetingInfo_Toggle and the MeetingInfo dialog).
The view is `components/assemble/AssembleSummaryCard` (props only).

Two pages render the card: AssembleDetail (`AssembleEventDetail`, detail layout) and AssembleEvents
(`AssembleSummary_List`, list layout). The actions of the card call `platform/`, which a component cannot import
(rule 4). So both pages render `AssembleSummaryCardContainer`, and the container fills the action props of the card.

| Prop of the card          | What the container gives                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `onAddressClick`          | `linkAddressOnClick`: "Map is not available", or NavigateToMaps and the page redirect.       |
| `onMeetingInfoToggle`     | MeetingInfo_Toggle: `confirmAction` of the dialog id.                                        |
| `renderMeetingInfoDialog` | The MeetingInfo dialog: ActionConfirmationDialog with the slot's id, body and dismiss label. |

The exports are `AssembleSummaryCardContainer` (same inputs as the card) and `linkAddressOnClick` (for its tests).
The container has no hook and no state. It is not a container by the criterion of plan §2.3: it holds the actions
that 2 pages share (plan §2.4 rule 2).

`AssembleSummaryCardContainer.test.tsx` has the LinkAddressOnClick tests and the open and close of the MeetingInfo
dialog (moved from the card and the VirtualMeetingURL tests).
