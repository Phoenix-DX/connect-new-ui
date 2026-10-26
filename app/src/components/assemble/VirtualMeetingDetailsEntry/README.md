# AssembleCommon_VirtualMeetingDetails_Entry

OutSystems: `Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry` · pack
`migration/blocks/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.md` · source
`migration/blocks/sources/Connect2_Assemble_MUI.Assemble.AssembleCommon_VirtualMeetingDetails_Entry.mvc.js`

| Input | Type    | Prop    | Default |
| ----- | ------- | ------- | ------- |
| Label | Text    | `label` | `''`    |
| Value | Text    | `value` | `''`    |
| IsURL | Boolean | `isURL` | `false` |

No events, no placeholders. Ported action: LinkVirtualAddressOnClick (controller :299-330) =
CheckSupportedBrowserVersion + OpenExternalURL(Value, IsApple) (`../../Connect2_LegacyShared/lib/actions.ts`).

## Captured variants (0)

Only inside the meeting info dialog (closed in every capture): stories `MeetingLink` and `Passcode`.

## Not settled

- The React app does not port the Cordova InAppBrowser branch of OpenExternalURL (no Cordova in the React app). The link
  always uses `window.open` (`_self` on Safari / Chrome iOS, `_blank` elsewhere).
