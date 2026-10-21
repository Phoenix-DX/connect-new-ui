# StaticInput

OutSystems: `UBTConnectLibrary.ConnectPatterns.StaticInput` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.StaticInput.md`

| Input              | Type | Prop                | Default                                   |
| ------------------ | ---- | ------------------- | ----------------------------------------- |
| In_Prompt          | Text | `inPrompt`          | `'Search for households. entities, news'` |
| In_ExtendedClasses | Text | `inExtendedClasses` | `''`                                      |

Events: `Click_Input` → `onClickInput`. Placeholders: none. Child blocks: `Icon` (Search, Inherit, Medium_20),
`TextEllipsis` (In_Prompt). Container class `"ubt-static-input " + In_ExtendedClasses` (trailing space kept).

## Captured variants (1 in the pack + 2 whole; 3 tested)

| Capture | Source                                               | What it shows       |
| ------- | ---------------------------------------------------- | ------------------- |
| v1      | CommunityBusinessDetails_CoomingSoon/default         | default prompt      |
| v2      | CommunityBusinessDetails_CoomingSoon/default (whole) | v1 with Icon + text |
| v3      | CountryList/default (whole)                          | own prompt          |

## Not captured

- `In_ExtendedClasses`: tested in `StaticInput.test.tsx`.
