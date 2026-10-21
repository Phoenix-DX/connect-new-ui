# NoInformation_Orbit

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.md` · source
`migration/screens/HelpersDetail/analysis/sources/pretty/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.NoInformation_Orbit.mvc.js`

| Input    | Type    | Prop       | Default |
| -------- | ------- | ---------- | ------- |
| Message  | Text    | `message`  | `''`    |
| IsUrgent | Boolean | `isUrgent` | `false` |

No events, no placeholders. Class `bold padding-y-m padding-x-m` + (` color-orbit-primary-7` | when IsUrgent
` flex-center-vertical color-orbit-red-6`); Icon `flag` with class `icon orbit-icon-circle-cross margin-right-s`,
visible only when IsUrgent; then the Message expression (view :140-191).

## Captured variants (2 tested)

| Capture | Source                    | What it shows               |
| ------- | ------------------------- | --------------------------- |
| v1      | HelpersDetail/default     | no helper message           |
| v2      | OrbitAdminLanding/default | no QR-scanning event (long) |

## Not captured / not settled

- IsUrgent = True (story `Urgent`, behaviour test): built from the compiled view only.
