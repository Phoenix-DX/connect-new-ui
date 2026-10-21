# Button (CW_Common)

OutSystems: `UBTConnect_Utils.CW_Common.Button` · pack `migration/blocks/UBTConnect_Utils.CW_Common.Button.md`

| Input                | Type          | Prop                  | Default                                          |
| -------------------- | ------------- | --------------------- | ------------------------------------------------ |
| ButtonExtendedClass  | Text          | `buttonExtendedClass` | `''`                                             |
| IsDisabled           | Boolean       | `isDisabled`          | `false`                                          |
| IsIconOnRight        | Boolean       | `isIconOnRight`       | `false`                                          |
| ButtonText           | Text          | `buttonText`          | `''`                                             |
| IconText_SpacingSize | UBT_Size      | `iconTextSpacingSize` | `UBT_Size.ExtraSmall`                            |
| TextExtendedClasses  | Text          | `textExtendedClasses` | `''`                                             |
| ButtonOptions        | ButtonOptions | `buttonOptions`       | `{}` (structure defaults: Medium, Primary, Grow) |
| IconId               | Text          | `iconId`              | `''`                                             |
| HideIcon             | Boolean       | `hideIcon`            | `false`                                          |

- Events: `ButtonOnClick` → `onButtonOnClick`. Placeholders: none.
- Child blocks: `ConnectPatterns.Button` › spinner container `osui-btn-loading__spinner-animation` + `IconText`
  (Icon with In_Visible = not HideIcon).
- A `ButtonLoading` (OSUI) that wraps this block adds the spinner's `aria-hidden`, not this block (compiled view;
  Household_Relations dom shows it without).

## Captured variants (5 distinct; 3 tested)

| Capture | Source                              | What it shows           |
| ------- | ----------------------------------- | ----------------------- |
| v1      | ContactByEmailMember/default (pack) | wrapper                 |
| v2      | Household_Relations/default         | small secondary, icon   |
| v3      | Household_Relations/default         | small primary, disabled |

## Not captured

- HideIcon, IsIconOnRight and the click: from the compiled view, tested in `Button.test.tsx`.
