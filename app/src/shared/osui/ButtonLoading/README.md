# ButtonLoading (OutSystems UI)

OutSystems: `OutSystemsUI_2_23.Utilities.ButtonLoading` · pack `migration/blocks/OutSystemsUI_2_23.Utilities.ButtonLoading.md`

| Input              | Type    | Prop                 | Default |
| ------------------ | ------- | -------------------- | ------- |
| IsLoading          | Boolean | `isLoading`          | `false` |
| ShowLabelOnLoading | Boolean | `showLabelOnLoading` | `false` |
| ExtendedClass      | Text    | `extendedClass`      | `''`    |

Events: `Initialized(ButtonLoadingId)` → `onInitialized(id)` (once, after mount). Placeholders: `Button` → `children`.

The compiled view renders only the placeholder (`osui-btn-loading OSInline`). The OSUI provider script (not in the
captures) adds the rest. Ported from the captured DOM:

- `aria-live="polite"`, `aria-atomic="true"`.
- `aria-busy` = IsLoading.
- ExtendedClass.
- `osui-btn-loading-show-spinner` without ShowLabelOnLoading.
- `aria-hidden="true"` on the content's `.osui-btn-loading__spinner-animation` (the callers' compiled views do not set
  it; spinners outside ButtonLoading are captured without it).

## Captured variants (3 distinct; 4 tested)

| Capture | Source                              | What it shows                             |
| ------- | ----------------------------------- | ----------------------------------------- |
| v1      | ContactByEmailMember/default (pack) | spinner only, CW_Common.Button            |
| v2, v3  | Login/default (pack)                | label on loading, `full-width`            |
| v4      | ContactByEmailMember/default        | as v1, whole button (spinner aria-hidden) |

## Not captured / not settled

- Loading state (never captured): `osui-btn-loading--is-loading` (a class of the original CSS) and `aria-busy="true"`.
  Two points are not settled (OSUI script not in the captures). Tested in `ButtonLoading.test.tsx`.
  - Whether the provider also disables the button while loading.
  - The class order with both ExtendedClass and show-spinner.
- The placeholder's `name` (the generated unique id) is not rendered (not captured).
