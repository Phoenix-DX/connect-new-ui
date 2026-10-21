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

Ported actions: MeetingInfo_Toggle (controller :405-438) = ConfirmAction(MeetingInfo) (shell `confirmAction`);
LinkVirtualAddressOnClick (:439-470) = CheckSupportedBrowserVersion + OpenExternalURL(URL, IsApple).

## Captured variants (0)

The Assemble captures show no virtual meeting card: stories `WithLink` and `NoLink`.

## Not settled

- The dialog is the shell's ActionConfirmationDialog (NavigationHandler); its open markup follows its own README.
- OpenExternalURL's Cordova InAppBrowser branch is not ported (no Cordova in the clone).
