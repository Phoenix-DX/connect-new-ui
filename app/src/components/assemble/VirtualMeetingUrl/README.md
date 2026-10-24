# AssembleCommon_VirtualMeetingURL

OutSystems: `Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL` · pack
`migration/blocks/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.md` · source
`migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingURL.mvc.js`

| Input                  | Type | Prop                     | Default |
| ---------------------- | ---- | ------------------------ | ------- |
| VirtualMeetingPlatform | Text | `virtualMeetingPlatform` | `''`    |
| VirtualMeetingURL      | Text | `virtualMeetingURL`      | `''`    |
| VirtualMeetingId       | Text | `virtualMeetingId`       | `''`    |
| VirtualMeetingPassword | Text | `virtualMeetingPassword` | `''`    |

No events or placeholders. `scope` (not an OutSystems input) names the MeetingInfo dialog (`<scope>-MeetingInfo`),
the id ConfirmAction looks up, as Dialog_CustomChoice does.

The component has props only (rule 4). The caller gives the MeetingInfo actions (`MeetingInfoActions`):

| Prop                      | What the caller does                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| `onMeetingInfoToggle`     | MeetingInfo_Toggle (controller :405-438): ConfirmAction(MeetingInfo) with the dialog id.                  |
| `renderMeetingInfoDialog` | Renders the MeetingInfo dialog from `MeetingInfoDialogSlot` (`dialogId`, `body`, `dismissLabel` "Close"). |

`containers/AssembleSummaryCard` gives both: the shell's `confirmAction` and ConfirmDialog (`components/ui/Dialog`). The component
places the slot in the container `backwards-compatibility assemble-meeting-info-popup`, as the original places the
dialog.

LinkVirtualAddressOnClick (:439-470) stays in the component: CheckSupportedBrowserVersion + OpenExternalURL(URL,
IsApple).

## Captured variants (0)

The Assemble captures show no virtual meeting card: stories `WithLink` and `NoLink`. The stories fill the dialog slot
with a stand-in (the closed ConfirmDialog).

## Not settled

- The dialog is ConfirmDialog of `components/ui/Dialog` (the ActionConfirmationDialog block of NavigationHandler); its
  open markup follows `Dialog.README.md`.
- OpenExternalURL's Cordova InAppBrowser branch is not ported (no Cordova in the clone).
