# DEPRECATED_ButtonLoading (OutSystems UI)

OutSystems UI: `OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading` · pack
`migration/blocks/OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading.md` · compiled source
`migration/blocks/sources/OutSystemsUI_2_23.Utilities.DEPRECATED_ButtonLoading.mvc.js`

| Input               | Type    | Prop                  | Default |
| ------------------- | ------- | --------------------- | ------- |
| IsLoading           | Boolean | `isLoading`           | `false` |
| ShowLoadingAndLabel | Boolean | `showLoadingAndLabel` | `false` |
| ExtendedClass       | Text    | `extendedClass`       | `''`    |

Placeholder `Button` → `children`. No events. Ported action: DisableKeypressOnLoading (OnReady and
OnParametersChanged) → `disableKeypressOnLoading`.

## Captured variants

None: never rendered in a capture (EmailContact, EmailTarget). Built from the compiled view.

## Not settled

- As in the original, every OnReady / OnParametersChanged adds a new keydown listener. The listener keeps the IsLoading value
  of that moment. A listener added while loading continues to cancel Enter / Space after loading ends, until another
  key press. Ported as compiled.
- The aria-label text is the default-language translation ("Loading").
