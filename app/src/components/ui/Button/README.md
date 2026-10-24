# Button

OutSystems: `UBTConnectLibrary.ConnectPatterns.Button` (wave 1, #35) · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.Button.md`

| Input            | Type          | Prop                           | Default                 |
| ---------------- | ------------- | ------------------------------ | ----------------------- |
| In_ButtonOptions | ButtonOptions | `inButtonOptions` (`types.ts`) | Medium / Primary / Grow |
| In_ExtendedClass | Text          | `inExtendedClass`              | `''`                    |
| In_IsDisabled    | Boolean       | `inIsDisabled`                 | `false`                 |

Events: `Event_OnClick` → `onEventOnClick`. Placeholder: `Content` → `children`.
Class: `btn` + In_ExtendedClass + `ubt-button` + GetClasses_Button (size, type, disabled, flex behaviour).

## Captured variants (9 distinct; 5 tested)

| Capture | Source                       | What it shows                                                |
| ------- | ---------------------------- | ------------------------------------------------------------ |
| v1      | ContactByEmailMember/default | disabled, caller content (button-loading spinner + IconText) |
| v2–v3   | CountryDetails/default       | small secondary; small primary disabled                      |
| v4      | CountryDetails/loading       | small secondary disabled                                     |
| v5      | Notifications/default        | tertiary                                                     |
