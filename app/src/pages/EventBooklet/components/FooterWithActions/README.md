# Orbit_FooterWithActions

OutSystems: `Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions` · pack
`migration/blocks/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.md` · source
`migration/blocks/sources/Connect2_OrbitMobile_MUI.Orbit_Generic_Blocks.Orbit_FooterWithActions.mvc.js`

| Input                      | Type    | Prop                       | Default |
| -------------------------- | ------- | -------------------------- | ------- |
| In_HasSecondaryButton      | Boolean | `inHasSecondaryButton`     | `false` |
| In_HasTopShadow            | Boolean | `inHasTopShadow`           | `true`  |
| In_IsSmallButtons          | Boolean | `inIsSmallButtons`         | `false` |
| In_ExtendedStyle           | Text    | `inExtendedStyle`          | `''`    |
| In_ExtendedClass           | Text    | `inExtendedClass`          | `''`    |
| In_ExtendedClass_Primary   | Text    | `inExtendedClassPrimary`   | `''`    |
| In_ExtendedClass_Secondary | Text    | `inExtendedClassSecondary` | `''`    |

Events `Click_SecondaryButton`, `Click_PrimaryButton` → `onClickSecondaryButton`, `onClickPrimaryButton`.
Placeholders `Placeholder_Secondary`, `Placeholder_Primary` → `placeholderSecondary`, `placeholderPrimary`.

View (:206-326): footer `orbit-footer-with-buttons <ExtendedClass>`, style `box-shadow: 0px -2px 6px 0px
rgba(0,0,0,10%); ` (HasTopShadow) + `justify-content: flex-end; ` (no secondary button) + " " + ExtendedStyle; left
button (visible = HasSecondaryButton) and right button, class `orbit-footer-with-buttons-btn
orbit-footer-with-buttons-btn-left|right ` + `orbit-footer-with-buttons-btn-small ` (small) + extended class.

## Captured variants (0)

Never rendered in a capture (EventBooklet, HostSurvey): built from the compiled view; behaviour tests only.

## Not captured / not settled

- Everything: no capture shows the footer. The button classes keep the compiled trailing space when the extended
  class is empty.
