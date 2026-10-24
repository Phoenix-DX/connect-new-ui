# AssembleCommon_VirtualMeetingDetails

OutSystems: `Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails` · pack
`migration/blocks/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.md` · source
`migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails.mvc.js`

| Input                  | Type | Prop                     | Default |
| ---------------------- | ---- | ------------------------ | ------- |
| VirtualMeetingLink     | Text | `virtualMeetingLink`     | `''`    |
| VirtualMeetingId       | Text | `virtualMeetingId`       | `''`    |
| VirtualMeetingPassword | Text | `virtualMeetingPassword` | `''`    |

No events, placeholders or actions.

## Captured variants (0)

Body of the meeting info dialog (AssembleCommon_VirtualMeetingURL), closed in every capture: stories `AllDetails` and
`LinkOnly`.

## Not settled

- The three containers have `animate: true` (fade on visibility change). The runtime animation markup is not
  captured, so the containers render as plain containers (as Spinner / LocalityListDetail do).
