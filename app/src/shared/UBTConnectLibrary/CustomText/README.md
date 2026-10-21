# CustomText

OutSystems: `UBTConnectLibrary.BasePatterns.CustomText` · pack `migration/blocks/UBTConnectLibrary.BasePatterns.CustomText.md`

| Input               | Type           | Prop                 | Default |
| ------------------- | -------------- | -------------------- | ------- |
| In_Text             | Text           | `inText`             | `''`    |
| In_TextOptions      | TextOptions    | `inTextOptions`      | `{}`    |
| In_PaddingOptions   | SpacingOptions | `inPaddingOptions`   | `{}`    |
| In_HighlightWords   | Text           | `inHighlightWords`   | `''`    |
| In_HighlightOptions | TextOptions    | `inHighlightOptions` | `{}`    |
| ExtendedClasses     | Text           | `extendedClasses`    | `''`    |
| FitContent          | Boolean        | `fitContent`         | `false` |
| InJustifyText       | Boolean        | `inJustifyText`      | `false` |
| NoWrap              | Boolean        | `noWrap`             | `false` |
| InlineIcon          | InlineIcon     | `inlineIcon`         | `{}`    |

Events: `Clicked` → `onClicked`. Placeholders: none. Child blocks: `HighlightSearch` (when In_HighlightWords is set,
stop words `"and in"`), otherwise `IconInline_Internal` + the text expression.

## Captured variants (82 distinct; 7 tested)

| Capture | Source                                            | What it shows     |
| ------- | ------------------------------------------------- | ----------------- |
| v1–v4   | BookmarksByGroup/default, BrowseCountries/default | text options      |
| v5      | HouseholdCarousel/default                         | highlighted words |
| v6      | CountryDetails/default                            | inline icon       |
| v7      | HouseholdDetails/loading                          | padding options   |

## Not captured

- `FitContent`, `InJustifyText`, `NoWrap` classes: from the compiled view, tested in `CustomText.test.tsx`.
