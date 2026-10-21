# HighlightSearch

OutSystems: `UBTConnectLibrary.ConnectPatterns.HighlightSearch` · pack `migration/blocks/UBTConnectLibrary.ConnectPatterns.HighlightSearch.md`

| Input            | Type       | Prop                      | Default |
| ---------------- | ---------- | ------------------------- | ------- |
| Text             | Text       | `text`                    | `''`    |
| SearchTerms      | Text       | `searchTerms`             | `''`    |
| StopWords        | Text       | `stopWords`               | `''`    |
| isWordbound      | Boolean    | `isWordbound`             | `false` |
| HighlightClasses | Text       | `highlightClasses`        | `''`    |
| InlineIcon       | InlineIcon | `inlineIcon` (`types.ts`) | `{}`    |

Events and placeholders: none. Child block: `IconInline_Internal`.

In the original block, the OnReady JS `Highlight_V3` rebuilt the spans of the container in the DOM. In the React
component, `highlight.ts` computes the same parts (exact matches, else the first accent-insensitive match) and React
renders them. Search terms go through RemoveRegexSpecialCharacters first. Differences: none, except a guard against an
empty match (the original loops forever).

## Captured variants

| Capture | Source                                                                                  |
| ------- | --------------------------------------------------------------------------------------- |
| v1      | HouseholdCarousel/default (two highlighted names; masked text, mock names in the story) |
