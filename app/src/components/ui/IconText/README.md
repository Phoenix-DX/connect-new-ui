# IconText

OutSystems: `UBTConnectLibrary.ConnectPatterns.IconText` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.IconText.md`

| Input           | Type        | Prop              | Default               |
| --------------- | ----------- | ----------------- | --------------------- |
| IsIconOnRight   | Boolean     | `isIconOnRight`   | `false`               |
| Text            | Text        | `text`            | `''`                  |
| TextOptions     | TextOptions | `textOptions`     | `{}`                  |
| SpacingSize     | UBT_Size    | `spacingSize`     | `UBT_Size.ExtraSmall` |
| ExtendedClasses | Text        | `extendedClasses` | `''`                  |
| SubtextOptions  | TextOptions | `subtextOptions`  | `{}`                  |
| In_Subtext      | Text        | `inSubtext`       | `''`                  |
| In_JustifyText  | Boolean     | `inJustifyText`   | `false`               |

Events: `Clicked` → `onClicked` (click on the container). Placeholders: `Icon` → `children` (wrapped in the placeholder
`<div>`). Child blocks:

- `Columns_Two`: column behaviour reduce first, or reduce last + `flex-direction-row-reverse` with IsIconOnRight;
  vertical align center; gutter from SpacingSize.
- `CustomText` for the text and, when set, the subtext.

## Captured variants (63 distinct; 3 tested)

| Capture | Source                         | What it shows                    |
| ------- | ------------------------------ | -------------------------------- |
| v1      | BrowseDirectory/default (pack) | wrapper, gutter base             |
| v2      | ContactByEmailMember/default   | text options, icon colour / size |
| v3      | HomeFeed/default               | icon on the right                |

## Not captured

- Subtext (`In_Subtext`) and `In_JustifyText`: from the compiled view, tested in `IconText.test.tsx`.
