# UnsupportedVersion

OutSystems: `UBTConnect.App_Common.UnsupportedVersion` · pack `migration/blocks/UBTConnect.App_Common.UnsupportedVersion.md`
(survey only: compiled source in `capture/survey-UBTConnect.json`)

| Input            | Type    | Prop              | Default |
| ---------------- | ------- | ----------------- | ------- |
| In_ExtendedClass | Text    | `inExtendedClass` | `''`    |
| In_HideButton    | Boolean | `inHideButton`    | `false` |

Events: `Event_NavigateToPlaystore` → `onEventNavigateToPlaystore` (the button's click). Placeholders:
`Placeholder_Content` → `children`. Child blocks: `CustomContainer`, `App_Common.WelcomeToConnect`,
`UBTConnect_Utils.CW_Common.Button` (`../../UBTConnect_Utils/Button`; icon `UBT_Icons2.OpenNew`).

Structure (compiled view): CustomContainer `"unsupported-card " + In_ExtendedClass` contains:

- WelcomeToConnect.
- A CustomContainer (margin vertical Medium, text Neutral10 / Small) around the placeholder.
- When `In_HideButton` is false: a CustomContainer (flex, justify center) › container › Button
  "Upgrade From Google Play" (icon right, OpenNew). The click on the button runs `Event_NavigateToPlaystore`.

## Captured variants (0)

Never shown on TST (no minimum versions). Tested against the compiled view in `UnsupportedVersion.test.tsx`.

## Not captured / not settled

- Whole card (decision U16: shown through `UnsupportedVersion_Wrapper` in the mock scenario `?mock=unsupported-browser`).
- Placeholder markup (`OSWidgets.Placeholder` → plain `div`) and the static entity values Neutral10, Small, Center
  (`../lib/staticEntities.ts`, from the original CSS) are not confirmed by a capture.
- `Event_NavigateToPlaystore`: raised by the button; its handler belongs to the native variant (not built, U16).
